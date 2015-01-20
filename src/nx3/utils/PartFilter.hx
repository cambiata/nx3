package nx3.utils;
import nx3.NBar;
import nx3.NBars;
import nx3.xml.PartXML;

/**
 * VoiceFilter
 * @author Jonas Nyström
 */
class PartFilter 
{
	var nbars:NBars;
	public function new(nbars:NBars) 
	{
		this.nbars = nbars;
	}
	
	public function getPart(partIdx:Int) {		
		var newBars:NBars = new NBars();		
		for (bar in this.nbars) {
			
			var b:NBar = bar;
			var part = b.nparts[partIdx];
			
			var newBar:NBar = new NBar([part], b.type, b.time, b.timeDisplay, b.allotment, b.spacing);
			newBars.push(newBar);			
		}
		return newBars;
	}
}