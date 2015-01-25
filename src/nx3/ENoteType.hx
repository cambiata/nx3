package nx3;
import nx3.NHead;

/**
 * ...
 * @author Jonas Nyström
 */
enum ENoteType {
	Note(heads:Array<NHead>, ?variant:ENotationVariant, ?articulations: Array<ENoteArticulation>, ?attributes:Array<ENoteAttributes>);
	Pause(level:Int); 
	BarPause;
	Tpl(level:Int, sign:ESign, pause:Bool);
	Lyric(?text:String, ?offset:EPosition, ?continuation:ELyricContinuation, ?font:TFontInfo);
	Chord;
	Dynamics;
	Pitch(level:Int, midinote:Int);
}