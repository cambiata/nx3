package nx3.audio;
import nx3.audio.NotenrItem;
import nx3.EKey;
import nx3.EModus;
import nx3.EOctave;
import nx3.ESign;
import nx3.NScore;
using cx.ArrayTools;
using Lambda;
/**
 * NotenrTools
 * @author Jonas Nyström
 */
class NotenrTools {
	var clef:EClef;
	var key:EKey;
	var table:Map<Int, Int>;
	
	public function new(clef:EClef, key:EKey)
	{
		this.clef = clef;
		this.key = key;
		this.table = getNotenrTable(key);
	}
	
	public function getNotenr(level:Int):Int
	{
		return switch(this.clef)
		{
			case EClef.ClefF: this.table.get(level+12) ;
			case _: this.table.get(level);
		}
	}
	
	
	static public  function getNotenrTable(key:EKey=null, levelmin=-30, levelmax=30):Map<Int, Int> {
		var table = new Map<Int, Int>();
		for (level in levelmin...levelmax) {
			var octave = Math.floor(level / 7);
			var basekey = (level >= 0) ? level % 7 : ((level % 7) + 7) % 7;
			var notenr = EKeysTools.getNotenrBaseMap(key).get(basekey) - 12*octave;
			//trace ([level, basekey, octave, midinote]);
			table.set(level, notenr);
		}
		return table;
	}
	
	static public function getSignsTable(key:EKey= null, levelmin = -30, levelmax = 30):Map<Int, ESign> {
		var table = new Map<Int, ESign>();
		for (level in levelmin...levelmax) {
			var octave = Math.floor(level / 7);
			var basekey = (level >= 0) ? level % 7 : ((level % 7) + 7) % 7;
			var sign = EKeysTools.getSignsBaseMap(key).get(basekey);
			//trace ([level, basekey, octave, midinote]);
			table.set(level, sign);
		}
		return table;
	}
	
	
	static public function getNotename(notenr:Int, sign:ESign=null):String
	{
		var base = ['c', 'ciss/dess', 'd', 'diss/ess', 'e', 'f', 'fiss/gess', 'g', 'giss/ass', 'a', 'aiss/bess', 'b'];
		var bnr = (notenr >= 0) ? notenr % 12 : ((notenr % 12)+12) % 12;
		var octave = (notenr >= 0) ? Math.floor(notenr / 12) : Math.floor(notenr / 12) ;
		var bname = base[bnr];
		if (sign != null && sign != ESign.Natural || sign != ESign.None) {
			if (bname.indexOf('/') > -1) {
				var bnames = bname.split('/');
				bname = switch sign {
					case ESign.Sharp:bnames[0];
					case ESign.Flat: bnames[1];
					case _ : bname;
				}				
			}
		}
		
		//trace([notenr, bnr, octave, bname]);
		return '$bname[$octave]';
	}
	
	static public function getMidinr(notenr:Int) return notenr + 72;
	
	static public function clefLevel(level:Int, clef:EClef) {
		if (clef == null) return level;
		return switch clef {
			case EClef.ClefC: level + 6;
			case EClef.ClefF: level + 12;
			case _: level;
		}
	}
	
	static var stemtonestable = NotenrTools.getNotenrTable(EKey.Natural);
	
	static public function getSignaffectedNotenr(level:Int, keysign:nx3.ESign, headsign:nx3.ESign):Int
	{
		var sign = keysign;
		if (headsign != null && headsign != keysign && headsign != ESign.None) sign = headsign;
		//trace([level, keysign, headsign, sign]);
		var stemtonenr  = stemtonestable.get(level);
		if (sign == null) return stemtonenr;
		return switch sign {
			case ESign.Natural: stemtonenr;
			case ESign.Flat: stemtonenr - 1;
			case ESign.DoubleFlat: stemtonenr - 2;
			case ESign.Sharp: stemtonenr + 1;
			case ESign.DoubleSharp: stemtonenr + 2;
			case _: stemtonenr;
		}		
	}
	
	static public function getPlayable(note:NNote) 
	{
		return switch note.type {			
			case ENoteType.Note(_, _, _, _): true;
			case ENoteType.Tpl(_): true;
			case _: false;
		}
	}
	
	/*
	static public function calculateSoundLength(n:NotenrItem, barvalue:Int, tempo1:Int=60, tempo2:Null<Int> = null):Float {
		return 0;
	}
	*/
	
	static public function calculateSoundLengths(partsnotes:PartsNotenrItems, tempos:Array<TempoInfo>=null, defaulttempo:Int=120) 
	{		
		var partidx = 0;
		for (part in partsnotes) {			
			
			var barsoundends:Array<Float> = [];
			
			
			for (note in part) {
				var barnr = note.barnr;
				
				var info = new SoundlengthCalculator(note, tempos, defaulttempo).getSoundposAndDuration();
				note.soundlength = info.length;
				note.soundposition = info.pos;
				note.barsoundlength = info.barlength;
				
				if (barnr == 0) {
					note.barsoundposition = 0;
					barsoundends[0] = note.barsoundlength; // note.barsoundlength;
				} else {
					note.barsoundposition = barsoundends[barnr - 1];
					barsoundends[barnr] = note.barsoundposition + note.barsoundlength;
				}
				note.playpos = note.barsoundposition + note.soundposition;
				note.playend = note.playpos + note.soundlength;
				
				//trace([/*note.noteval, note.soundlength, note.position, note.soundposition, note.soundposition, note.soundlength, */note.partnr, note.barnr,note.barsoundlength,  note.barsoundposition, note.playpos, note.playend]);
			}	
			partidx++;
		}
	}
	
	static public function getTotalLength(partsnotes:PartsNotenrItems) 
	{
		var lenght = 0.0;
		for (part in partsnotes) { 
			var last = part[part.length - 1];
			lenght = Math.max(lenght, last.barsoundposition +last.barsoundlength); 
		};		
		return lenght;
	}
	
	static public function resolveTies(partsnotes:PartsNotenrItems) 
	{
		var result = [];
		
		for (part in partsnotes) {
			var newpart:Array<NotenrItem> = [];
			var note = part.first();
			
			var previdx = -1;
			while (note != null) {
				newpart.push(note);
				
				
				var noteidx = part.index(note);
				var foundtie = false;
				
				if (note.tie) {
					var nextpos = note.partposition + note.position + note.noteval;
					var nextnote = part.nextOrNull(note);
					while (nextnote != null) {
						var pos = nextnote.partposition + nextnote.position;												
						if (pos == nextpos && nextnote.midinr == note.midinr) {
							var newsoundlength = note.soundlength + nextnote.soundlength;
							var newvalue = note.noteval + nextnote.noteval;
							note.soundlength = newsoundlength;
							note.noteval = newvalue;							
							part.remove(nextnote);
							note.tie = nextnote.tie;
							foundtie = true;
						}
						nextnote = (pos == nextpos) ? part.nextOrNull(nextnote) : null;
					}
				}
				
				if (! foundtie) {
					//newpart.push(note);
					note = part.nextOrNull(note);
				} else {
					//if (noteidx != previdx) newpart.push(note);
					newpart.remove(note);
					previdx = noteidx;
				}
			}
			result.push(newpart);
		}
		
		return result;
	}
	
	static public function debug(partsnotes:PartsNotenrItems) 
	{
		trace('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');
		for (part in partsnotes) {
			trace('Part: ');
			for (note in part) {
				trace( [note.barnr, note.position, note.midinr, note.noteval]);
			}
		}
	}
	
	static public function getNotesNotenritems(partsnotes:PartsNotenrItems): Map<NNote, NotenrItem> {
		var map = new Map<NNote, NotenrItem>();		
		for (items in partsnotes) {
			for (item in items) {
				var note = item.note;
				map.set(note, item);
			}
		}
		return map;
	}
	
	static public function getPartsnotesMp3files(partsnotes:PartsNotenrItems, partsSounds:Array<String>= null, path='/sounds/', soundFallback='piano'): Array<String> {
		var result = [];
		if (partsSounds == null) partsSounds = [];	
		while (partsSounds.length < partsnotes.length) partsSounds.push(soundFallback);
		for (items in partsnotes) {
			var sound = partsSounds.shift();
			var soundPath = '$path$sound/';
			
			for (item in items) {
				var note = item.note;
				var midinr = item.midinr;
				var filename = '$path$sound/$midinr.mp3';
				item.mp3file = filename;
				if (! result.has(filename)) result.push(filename);				
			}
		}				
		return result;
	}
	
	static public function getPartsnotes(nbars:NBars, tempo:Int = 60, resolveTies:Bool = true) : PartsNotenrItems {
		var partsnotes:PartsNotenrItems = new NotenrBarsCalculator(nbars).getPartsNotenrItems();
		NotenrTools.calculateSoundLengths(partsnotes, tempo);				
		partsnotes = NotenrTools.resolveTies(partsnotes);	
		return partsnotes;				
	}
	
	static public function tplToNotenritem(partkey:EKey, partmodus:EModus, partoctave:EOctave, level:Int, sign:ESign):NotenrItem {
		
		
		return null;
	}
	
	/*
	static public function getTotalLenght(partsnotes:Array<Array<NotenrItem>>):Float
	{
		for (part in partsnotes)
			for (note in part) {
				
			}
				
	}
	*/	
	
	static public function createNotenrItem(partpos:Int, pos:Int, noteval:Int, level:Int, notenr:Int, midinr:Int, headsign:ESign, keysign:ESign, playsign:ESign, notename:String, tie:Bool, playable:Bool, partnr:Int, barnr:Int, barvalue:Int, note:NNote):NotenrItem
	{
		var item:NotenrItem = {		
			partposition:partpos,
			position:pos, 
			noteval: noteval, 
			level:level, 
			notenr:notenr, 
			midinr:midinr, 
			headsign:headsign,
			keysign:keysign,
			playsign:playsign,
			notename:notename, 
			tie: tie ,
			playable: playable,
			partnr:partnr,
			barnr: barnr,
			barvalue:barvalue,
			note:note,
		}
		return item;
		
	}
	
}