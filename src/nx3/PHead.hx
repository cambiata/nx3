package nx3;

/**
 * ...
 * @author Jonas Nyström
 */
class PHead
{
	 public var nhead: NHead;
	 public function new (nhead:NHead) 
	 {
		 this.nhead = nhead;	
	 }
	 
	 // parent
	var note: PNote;	
	public function getNote():PNote return this.note;
	
	public function toString():String
	{
		return 'PHead  \r' + Std.string(nhead);
	}
	
}
