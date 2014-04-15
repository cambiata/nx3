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
	Tpl(level:Int);
	Lyric(?text:String, ?offset:EPosition, ?continuation:ELyricContinuation, ?font:TFontInfo);
	Chord;
	Dynamics;
}