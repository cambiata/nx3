package nx3.qs;
import nx3.ENoteVal;

/**
 * ...
 * @author Jonas Nyström
 */
enum ParserEvents
{
	SetGuessOctave(mode:Bool);
	SetOctave(octave:Int);
	SetNoteVal(value:ENoteVal);
	SetMode(mode:ContentMode);
	
}