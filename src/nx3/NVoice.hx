package nx3;
import nx3.NNote;
import nx3.EDirectionUD;
import nx3.EVoiceType;
using Lambda;
/**
 * ...
 * @author 
 */
@:access(nx3.NNote)
class NVoice
{

	public var direction(default, null):EDirectionUAD;
	public var nnotes(default, null):Array<NNote>;
	public var type(default, null):EVoiceType;

	var npart:NPart;
		
	public function new(notes:Array<NNote>=null, ?type:EVoiceType, ?direction:EDirectionUAD) 
	{
		
		if (notes == null || notes.length == 0)
		{
			this.nnotes = [];
			this.type = EVoiceType.Barpause(0);
		}
		else
		{
			this.nnotes = notes;
			this.type = (type != null) ? type : EVoiceType.Normal;
		}
		
		for (note in notes) note.nvoice = this;
		
		this.direction = (direction != null) ? direction : EDirectionUAD.Auto ;
	}
	
	public function iterator() return this.nnotes.iterator();
	public var length (get, null):Int;
	private function get_length():Int return this.nnotes.length;		
	
	
	public function getNNote(idx:Int):NNote return (idx < 0 || idx > this.nnotes.length) ? null : this.nnotes[idx];
	
	public function getTag():String {
		var dir = NTags.directionUADTag(this.direction);
		var type = NTags.nvoiceTypeTag(this.type);
		var notestags = '';		
		this.iter(function(nnote) notestags += nnote.getTag());
		return '@$type$notestags$dir';		
	}
	
}