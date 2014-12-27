package nx3;

/**
 * NNoteUtils
 * @author 
 */
class NNoteUtils 
{

		static public function isPause(nnote:NNote):Bool {
			return switch nnote.type {
				case ENoteType.Pause(level): true;
				case _: false;
			}
		}
}