package nx3;
import nx3.NNote;
import nx3.EDirectionUD;
import nx3.EVoiceType;

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
		if (notes == null || notes == []) 
		{
			this.nnotes = null;
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
	
	public function getNNote(idx:Int):NNote return (idx < 0 || idx > this.nnotes.length) ? null : this.nnotes[idx];
	
	
	
}