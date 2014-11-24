package nx3;

/**
 * ...
 * @author Jonas Nyström
 */
enum EPartType 
{
	Normal;
	Lyrics;
	Tplrow;
	Tplchain;
	Dynamics;
	Chords;
	Ignore;
	Hidden;
	PitchRow;
	PitchChain(leveloffset:Int);
}
