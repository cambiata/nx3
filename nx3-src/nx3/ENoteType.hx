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
	Tpl;
	Lyric(?text:String, ?offset:EPosition, ?continuation:ELyricContinuation, ?format:ELyricFormat);
	Chord;
	Dynam;
}