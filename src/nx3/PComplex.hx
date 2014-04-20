package nx3;
import nx3.geom.Rectangles;
using cx.ArrayTools;
using nx3.geom.Rectangles.RectanglesTools;

/**
 * ...
 * @author Jonas Nyström
 */
class PComplex
{
	var position:Int;
	public var notes(default, null) :PNotes;
	public function new(notes:PNotes, position:Int)
	{
		if (notes.length > 2) throw "PComplex nr of PNote(s) limited to max 2 - for now";
		this.notes = notes;
		for (note in this.notes) note.setComplex(this);
		this.position = position;
	}
	
	public function getNotes():PNotes return this.notes;
	
	public function getPosition():Int return this.position;
	
	var headsrects:Rectangles;
	public function getHeadsRects():Rectangles
	{
		if (headsrects != null) return headsrects;
		
		var firstrects  =  this.notes.first().getHeadsRects();		
		if (this.notes.length == 1) return firstrects;		
		var secondrects = this.notes.second().getHeadsRects().copy();		
		var xoffset = getNoteXOffset(this.notes.second());
		secondrects.offset(xoffset, 0);		
		this.headsrects = firstrects.concat(secondrects);
		return this.headsrects;
	}
	
	var signsrects:Rectangles;
	public function getSignsRects():Rectangles
	{		
		if (this.signsrects != null) return this.signsrects;			
		if (this.getVisibleSigns().length == 0) return [];
		this.signsrects = new PSignsRectsCalculator(this.getVisibleSigns()).getSignRects(this.getHeadsRects() );
		return this.signsrects;
	}
	
	var secondoffset:Null<Float>;
	public function getNoteXOffset(note:PNote):Float
	{
		if (note == this.getNotes().first()) return 0;
		if (secondoffset != null) return secondoffset;		
		secondoffset = new PNoteOffsetCalculator(this).getNoteOffset(this.getNotes().second());
		return secondoffset;
	}
	
	var signs:VSigns;
	public function getSigns():VSigns
	{
		if (this.signs != null) return this.signs;
		this.signs = new PSignsCalculator(this.getNotes()).getSigns();
		return this.signs;
	}
	
	var visiblesigns:VSigns;
	public function getVisibleSigns():VSigns
	{
		if (this.visiblesigns != null) return this.visiblesigns;
		this.visiblesigns =  new PSignsCalculator(this.getNotes()).getVisibleSigns();
		return this.visiblesigns;
	}
	
	
	
	
	
	/*
	var signs:VSigns;
	var visibleSigns:VSigns;
	*/
}