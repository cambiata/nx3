package nx3.qs;
import nx3.EClef;
import nx3.EKey;
import nx3.ENoteVal;

/**
 * QSMode
 * @author Jonas Nyström
 */
typedef QSMode  =
{
	contentmode: QSContentMode,
	notevalue: ENoteVal,
	headlevels: Array<Int> , 
	clef: EClef,
	key: EKey,
}