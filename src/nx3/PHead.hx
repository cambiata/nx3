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
	public var pnote(default, default): PNote;	
	
	
	public function toString():String
	{
		return 'PHead  \r' + Std.string(nhead);
	}
	
}
