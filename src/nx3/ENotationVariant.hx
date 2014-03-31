package nx3;

/**
 * ...
 * @author Jonas Nyström
 */
enum ENotationVariant
{
	Normal;
	Rythmic;
	RythmicSingleLevel(level:Int);
	HeadsOnly;
	StavesOnly;
}