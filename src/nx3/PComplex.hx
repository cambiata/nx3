package nx3;
import nx3.geom.Rectangles;

/**
 * ...
 * @author Jonas Nyström
 */
class PComplex
{
	var position:Int;
	public var pnotes(default, null) :PNotes;
	public function new(pnotes:PNotes, position:Int)
	{
		if (pnotes.length > 2) throw "PComplex nr of PNote(s) limited to max 2 - for now";
		this.pnotes = pnotes;
		for (pnote in this.pnotes) pnote.setComplex(this);
		this.position = position;
	}
	
	public function getPNotes():PNotes return this.pnotes;
	
	public function getPosition():Int return this.position;
	
	public function getHeadsRects():Rectangles
	{
		var headsrects  = new Rectangles();
		return null;
	}
	
	/*
	var signs:VSigns;
	var visibleSigns:VSigns;
	*/
}