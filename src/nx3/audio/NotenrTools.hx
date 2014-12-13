package nx3.audio;

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
	
	
	static public function getNotename(notenr:Int):String
	{
		var base = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];
		var bnr = (notenr >= 0) ? notenr % 12 : ((notenr % 12)+12) % 12;
		var octave = (notenr >= 0) ? Math.floor(notenr / 12) : Math.floor(notenr / 12) ;
		var bname = base[bnr];
		//trace([notenr, bnr, octave, bname]);
		return '$bname[$octave]';
	}
	
	static public function getMidinr(notenr:Int) return notenr + 60;
	
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
	
	static public function calculateSoundLength(n:NotenrItem, barvalue:Int, tempo1:Int=60, tempo2:Null<Int> = null):Float {
		return 0;
	}
	
	static public function calculateSoundLengths(partsnotes:Array<Array<NotenrItem>>, tempos:Array<TempoInfo>=null, defaulttempo:Int=120) 
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
				
				trace([/*note.noteval, note.soundlength, note.position, note.soundposition, note.soundposition, note.soundlength, */note.partnr, note.barnr,note.barsoundlength,  note.barsoundposition, note.playpos, note.playend]);
			}	
			partidx++;
		}
	}
	
	/*
	static public function getTotalLenght(partsnotes:Array<Array<NotenrItem>>):Float
	{
		for (part in partsnotes)
			for (note in part) {
				
			}
				
	}
	*/
	
	
}