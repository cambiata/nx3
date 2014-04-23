package nx3;
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;
import nx3.PColumn;
import nx3.PPart;
using cx.ArrayTools;
using nx3.geom.Rectangles.RectanglesTools;

/**
 * ...
 * @author Jonas Nyström
 */
@:access(nx3.PNote)
 
class PComplex
{
	var part:PPart;	
	var valueposition:Int;
	public var notes(default, null) :PNotes;
	
	public function new( part:PPart, notes:PNotes, valueposition:Int)
	{
		this.part = part;
		if (notes.length > 2) throw "PComplex nr of PNote(s) limited to max 2 - for now";
		this.notes = notes;
		for (note in this.notes) note.complex = this;
		this.valueposition = valueposition;
	}
	
	public function getNotes():PNotes return this.notes;
	
	public function getValueposition():Int return this.valueposition;
	
	public function getPart():PPart return this.part;
	
	var column:PColumn;
	public function getColumn():PColumn 
	{
		if (this.column != null) return this.column;		
		this.part.bar.getColumns();
		if (this.column == null) throw "this shouldn't happen";
		return this.column;
	}
	
	
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
	
	var stavesrects:Rectangles;
	public function getStavesRects():Rectangles
	{
		if (this.stavesrects != null) return this.stavesrects;
		this.stavesrects = [];
		for (note in this.notes)
		{
			var rect = this.getStaveRect(note);
			if (rect != null) this.stavesrects.push(rect);
		}
		for (note in this.notes)
		{
			var flagrect = new PStaveRectCalculator(note).getFlagRect();
			if (flagrect != null) this.stavesrects.push(flagrect);
		}
		return this.stavesrects;
	}
	
	public function getStaveRect(note:PNote): Rectangle
	{
		return new PStaveRectCalculator(note).getStaveRect();		
	}
	
	
	var baserect:Rectangle;
	public function getBaseRect():Rectangle
	{
		if (this.baserect != null) return this.baserect;
		this.baserect = new Rectangle(0, 0, 0, 0);
		for (note in this.getNotes())
		{			
			this.baserect = this.baserect.union(note.getBaseRect());
		}		
		return this.baserect;
	}	
	
	var allrects:Rectangles;
	public  function getAllRects():Rectangles
	{
		if (this.allrects != null) return this.allrects;
		this.allrects = [];		
		this.allrects = RectanglesTools.concat(this.allrects, this.getHeadsRects());
		this.allrects = RectanglesTools.concat(this.allrects, this.getStavesRects());
		this.allrects = RectanglesTools.concat(this.allrects, this.getSignsRects());
		// ... MORE!			
		return this.allrects;
	}	
	
	var xposition:Null<Float>;
	public function getXPosition():Float
	{
		if (this.xposition != null) return this.xposition;				
		// TODO - check why this is needed...
		this.getHeadsRects();		
		this.xposition = this.getColumn().getXPosition();
		return this.xposition;		
	}	
	
	public function getIndex():Int
	{
		return this.part.getComplexes().indexOf(this);
	}

	/*
	var yposition:Null<Float>;
	public function getYPosition():Float
	{
		if (this.yposition != null) return this.yposition;
		this.yposition = this.part.getYPosition();
		return this.yposition;		
	}	
	*/
	
	public function toString():String
	{
		var str = "PComplex: \r" ;
		for (note in this.getNotes()) str += "- Note: " + Std.string(note.nnote) + "\r";
		return str;
	}
	
}