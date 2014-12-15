package nx3;
import nx3.EAllotment;
import nx3.EBarType;
import nx3.ETime;
using Lambda;
/**
 * NTags
 * @author Jonas Nyström
 */
class NTags 
{

	public function new() 
	{
		
	}
	
	/*
	static public function nscoreTag(nscore:NScore):String {
		var bartags = '';
		nscore.nbars.iter(function(nbar) {
			var bartag = nbarTag(nbar);
			bartags += bartag;		
			trace(bartag.length);
			trace(bartag);
		});
		return '#$bartags';		
	}
	
	static public function nbarTag(nbar:NBar):String {
		var partstags = '';
		nbar.nparts.iter(function(npart) partstags += npartTag(npart));
		var time = timeTag(nbar.time) + displayALNTag(nbar.timeDisplay);
		var spacing = (nbar.spacing != 8) ? 'sp:' + nbar.spacing : '';
		var type = nbarTypeTag(nbar.type );
		var allot = nbarAllotmentTag(nbar.allotment);
		return '/$type$partstags$time$allot$spacing';		
	}
	
	static public function npartTag(npart:NPart) {
		trace('part');
		var voicestags = '';
		npart.iter(function(nvoice) voicestags += nvoiceTag(nvoice));
		var clef = clefTag(npart.clef) + displayALNTag(npart.clefDisplay);
		var key = keyTag(npart.key) + displayALNTag(npart.keyDisplay);
		var type = npartTypeTag(npart.type);		
		return '!$type$voicestags$clef$key';		
	}
	
	static public function nvoiceTag(nvoice:NVoice) {
		
		var dir = directionUADTag(nvoice.direction);
		var type = nvoiceTypeTag(nvoice.type);
		var notestags = '';		
		nvoice.iter(function(nnote) notestags += nnoteTag(nnote) );
		return '@$type$notestags$dir';
	}
	
	static public function nnoteTag(nnote:NNote) {
		var headstags = '';
		nnote.iter(function(nhead)  headstags += nheadTag(nhead));				
		var type = noteTypeTag(nnote.type);
		var val = ENoteValTools.toValString(nnote.value);
		return '%l$type$headstags$val';		
	}
	
	static public function nheadTag(nhead:NHead) {
		var level = Std.string(nhead.level);
		var tie = (nhead.tie != null) ? '_': '';
		var sign = headSignTag(nhead.sign);
		var type = headTypetag(nhead.type);
		return '&$type$level$sign$tie';		
	}		
	
	*/
	
	
	//-----------------------------------------------------------------------------------------------------------
	
	static public function nbarAllotmentTag(allotment:EAllotment) 
	{
		if (allotment == null) return '';
		return switch allotment {
			case EAllotment.Equal:'aEQ';
			case EAllotment.LeftAlign: 'aLA';
			case EAllotment.Linear:'aLN';
			case Logaritmic:'';
		}
	}
	
	
	static public function nbarTypeTag(type:EBarType) :String
	{
		if (type == null) return '';
		return switch type {
			case EBarType.Folded : 'bFO';
			case EBarType.Ignore : 'bIG';
			case EBarType.Repeat : 'bRP';
			case _: '';
		}
	}
	
	
	static public function timeTag(time:ETime) 
	{
		if (time == null) return '';
		return ETimeUtils.toString(time);
	}	
	
	static public  function npartTypeTag(type:EPartType):String {
		if (type == null) return '';
		return switch type  {
			case EPartType.Chords: 'pCH';
			case EPartType.Dynamics: 'pDY';
			case EPartType.Hidden: 'pHI';
			case EPartType.Ignore: 'pIG';
			case EPartType.Lyrics: 'pLY';
			case EPartType.PitchRow: 'pPR';
			case EPartType.Tplchain: 'pTC';
			case EPartType.Tplrow: 'pTR';
			case _: '';			
		}
		
	}
	
	static public function keyTag(key:EKey):String {
		if (key == null) return '';
		return Std.string(EKeysTools.getKeyNr(key));
	}
	
	static public function clefTag(clef:EClef):String {
		if (clef == null) return '';
		return switch clef {
			case EClef.ClefC : 'C';
			case EClef.ClefF: 'F';
			case EClef.ClefG: 'G';			
		}
	}
	
	static public function displayALNTag(display:EDisplayALN):String {
		if (display == null) return '';
		return switch display {
			case EDisplayALN.Always:'dA';
			case EDisplayALN.Never: 'dN';
			case _: '';
		}		
	}
	
	static public function nvoiceTypeTag(type:EVoiceType):String {
		if (type == null) return '';
		return switch type {
			case EVoiceType.Barpause: 'vBP';
			case _: '';			
		}
	}
	
	static public function directionUADTag(dir:EDirectionUAD):String {
		if (dir == null) return '';
		return switch dir {
			case EDirectionUAD.Up: 'U';
			case EDirectionUAD.Down: 'D';
			case _: '';
		}
	}
	
	static public function noteTypeTag(type:ENoteType):String {
		if (type == null) return '';
		return switch type {
			case ENoteType.BarPause: 'tB';
			case ENoteType.Chord: 'tC';
			case ENoteType.Dynamics: 'tD';
			case ENoteType.Lyric(text, offset, c, f): 'tL$text:$offset';
			case ENoteType.Pause(level): 'tP$level';
			case ENoteType.Pitch(level, midinoter): 'tI$level:midinote';
			case ENoteType.Tpl(level): 'tT$level';
			case _:'';
		}
		
	}
	
	
	static public function headSignTag(sign:ESign): String {
		if (sign == null) return '';
		return switch sign {
			case ESign.DoubleFlat: 'bb';
			case ESign.Flat: 'b';
			case ESign.Sharp: '#';
			case ESign.DoubleSharp: '##';
			case ESign.Natural: 'N';
			case _: '';
		}
	}
	
	static public function headTypetag(type:EHeadType):String {
		if (type == null) return '';
		return switch type {
			case EHeadType.Crossed: 'tC';
			case EHeadType.Rythmic: 'tR';
			case EHeadType.Pause: 'tP';
			case EHeadType.Other: 'tO';			
			case _:'';
		}
	}
	
	
	
}