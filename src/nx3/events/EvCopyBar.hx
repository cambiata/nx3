package nx3.events;
import nx3.xml.BarsXML;
import nx3.xml.BarXML;

/**
 * ...
 * @author Jonas Nyström
 */
class EvCopyBar implements IEvent
{
	var ref:nx3.NRef;
	var status:Bool = false;
	
	public function new(ref:NRef) 
	{
		this.ref = ref;
	}
	
	/* INTERFACE nx3.events.IEvent */
	
	public function doEvent():Void 
	{
		if (this.status == true) throw "Cant perform doEvent() twice";
		if (NRefTools.checkRefNoteError(this.ref)) throw "Reference note error";		
		
		var targetbar:NBar = this.ref.score.getNBar(this.ref.bar);
		var targetbarIdx = this.ref.score.nbars.indexOf(targetbar);
		trace(targetbarIdx);
		
		var xmlString = BarXML.toXml(targetbar).toString();
		var newbar:NBar = BarXML.fromXmlStr(xmlString);
		this.ref.score.nbars.insert(targetbarIdx + 1, newbar);
		
		
	}
	
	public function undoEvent():Void 
	{
		
	}
	
	
	
	
	
}