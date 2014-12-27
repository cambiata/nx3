package nx3.audio;
import nx3.Constants;
import nx3.EClef;
import nx3.EKey;
import nx3.ENoteType;
import nx3.ESign;
import nx3.NBar;
import nx3.NNote;
import nx3.NScore;
//import thx.core.Tuple.Tuple2;
import thx.core.Tuple;

using cx.ArrayTools;

/**
 * ...
 * @author Jonas Nyström
 */
class NoteSoundCalculator
{
	

	public function new() 
	{
		
	}
	
	public function getMidiNotes(note:PNote):Array<Int>
	{
		var part = note.getVoice().getPart();
		var b = part.getBar();		
		var key = part.npart.key;
		if (key == null) key = EKey.Natural;
		var clef = part.npart.clef;
		if (clef == null) clef = EClef.ClefG;		
		
		var level = note.nnote.topLevel;
		
		var tone = getMidiNote(key, clef, level, null, note.nnote.type);		
		
		return [tone];
	}
	
	public function getMidiNote(key:EKey, clef:EClef, level:Int, sign:ESign, type:ENoteType=null)
	{
		var stamton = levelToStamton(clef, level);
		var tone = toneFromKey(stamton, key);
		
		switch type 
		{
			case ENoteType.Pause(l): tone = 0;
			default: 
		}
		
		return tone;
	}
	
	public function levelToStamton(clef:EClef, level:Int):Int
	{
		if (clef == null) clef = EClef.ClefG;
		var l = 6 +  -level;
		
		var cf = switch clef
		{
			case EClef.ClefC: -6;
			case EClef.ClefF: -12;
			default: 0;
		}			
		return l + cf;
	}
	
	public function toneFromKey(stamton:Int, key:EKey):Int
	{
		var st = (stamton+70) % 7;
		var oct = Math.floor(stamton / 7);
		var of = Std.int(12 * oct);
		var basenote = stamton - st;
		var midinotes = [60, 62, 64, 65, 67, 69, 71];		
		var mn = midinotes[st] + keyModArray(key)[st];		
		var mno = mn + of;
		return mno+12;	
	}
	
	public function levelToOctave(clef:EClef, level:Int):Int
	{
		return 0;
	}
	
	public function keyModArray(key:EKey):Array<Int>
	{
		return switch key
		{
			case EKey.Sharp1: [0, 0, 0, 1, 0, 0, 0];
			case EKey.Sharp2: [1, 0, 0, 1, 0, 0, 0];
			case EKey.Natural: [0, 0, 0, 0, 0, 0, 0];
			case EKey.Flat1: [0, 0, 0, 0, 0, 0, -1];
			default: [0, 0, 0, 0, 0, 0, 0];
		}
	}
	
	public function getPlayableNotesFromTopVoice(nscore:NScore):Array<Tuple2<Int, Int>>
	{
		
		var clef = nscore.nbars[0].nparts[0].clef;
		var key = nscore.nbars[0].nparts[0].key;

		var snotes:Array<Tuple2<Int, Int>> = [];
		
		var prevNoteTie: Bool = false;
		
		for (nbar in nscore.nbars)
		{
			var part = nbar.nparts[0];
			var voice = part.nvoices[0];
			for (nnote in voice.nnotes)
			{
				var level = nnote.nheads[0].level;
				var sign = nnote.nheads[0].sign;
				var tie = nnote.nheads[0].tie != null;
				
				var midinote = this.getMidiNote(key, clef, level, sign, nnote.type);
				var length = ENoteValTools.value(nnote.value);
				
				if (! prevNoteTie)
					snotes.push(new Tuple2(midinote, length));
				else {
					var snote = snotes.last();
					snote._1 = snote._1 + length;
				}
				
				prevNoteTie = tie;
				
			}
		}		
		
		// Countin
		var countin = (nscore.configuration.countin != null) ? nscore.configuration.countin : Constants.SCORE_DEFAULT_COUNTIN;	
		var countinnotes = new Array<Tuple2<Int, Int>>();
		for (i in 1...countin+1) countinnotes.push(new Tuple2(i, Constants.BASE_NOTE_VALUE) );
		snotes = Lambda.array(Lambda.concat(countinnotes, snotes));		
		
		
		
		return snotes;
	}
	
}


