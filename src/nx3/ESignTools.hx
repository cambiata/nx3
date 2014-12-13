package nx3;

/**
 * ESignTools
 * @author Jonas Nyström
 */
class ESignTools 
{

	static public function tag(sign:ESign): String {
		return switch sign {
			case ESign.DoubleFlat: 'bb';
			case ESign.Flat: 'b';
			case ESign.Sharp: '#';
			case ESign.DoubleSharp: '##';
			case ESign.Natural: 'N';
			case _: '';
		}
	}

	
}