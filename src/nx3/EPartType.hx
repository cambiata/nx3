package nx3;

/**
 * ...
 * @author Jonas Nyström
 */
enum EPartType 
{
	Normal;
	Lyrics;
	Tplrow (modus:EModus, octave:EOctave);
	Tplchain(modus:EModus, octave:EOctave);
	Dynamics;
	Chords;
	Ignore;
	Hidden;
	PitchRow;
	PitchChain(leveloffset:Int);
}
