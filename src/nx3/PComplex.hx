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
		this.part.getBar().getColumns();
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
	
	var signs:PSigns;
	public function getSigns():PSigns
	{
		if (this.signs != null) return this.signs;
		this.signs = new PSignsCalculator(this.getNotes()).getSigns();
		return this.signs;
	}
	
	var visiblesigns:PSigns;
	public function getVisibleSigns():PSigns
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
	
	var tierects:Rectangles;
	public function getTieRects():Rectangles
	{
		if (this.tierects != null) return this.tierects;
		this.tierects = new PComplexTierectsCalculator(this).getTieRects();
		return this.tierects;
	}
	
	var dotrects:Rectangles;
	public function getDotRects():Rectangles
	{
		if (this.dotrects != null) return this.dotrects;
		this.dotrects = new PComplexDotsrectsCalculator(this).getDotRects();
		return this.dotrects;
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
		this.allrects = RectanglesTools.concat(this.allrects, this.getTieRects());
		this.allrects = RectanglesTools.concat(this.allrects, this.getDotRects());
		// ... MORE!			
		return this.allrects;
	}	
	
	var rect:Rectangle;
	public function getRect():Rectangle
	{
		this.rect  = RectanglesTools.unionAll(this.getAllRects());
		return this.rect;
	}
	
	var xposition:Null<Float>;
	public function getXPosition():Float
	{
		if (this.xposition != null) return this.xposition;				
		// TODO - check why this is needed...
		this.getHeadsRects();		
		//this.xposition = this.getColumn().getMPosition();
		//this.xposition = this.getColumn().getAPostion();
		this.xposition = this.getColumn().getSPosition();
		return this.xposition;		
	}	
	
	public function getIndex():Int
	{
		return this.part.getComplexes().indexOf(this);
	}

	var leftX:Null<Float>;
	public function getLeftX():Float
	{
		if (this.leftX != null) return this.leftX;
		this.leftX = this.getRect().x;
		return this.leftX;		
	}

	var rightX:Null<Float>;
	public function getRightX():Float
	{
		if (this.rightX != null) return this.rightX;
		this.rightX = this.getRect().x + this.getRect().width;
		return this.rightX;		
	}
	
	var next:PComplex;
	public function getNext():PComplex
	{
		if (next != null) return this.next;
		this.next = this.getColumn().getNextComplex(this);
		return this.next;
	}
	
	var tieinfos:PTieinfos;
	public function setTieinfos(val:PTieinfos)
	{
		this.tieinfos = val;
	}
	
	public function getTieinfos():PTieinfos 
	{
		if (this.tieinfos == null) this.getTieRects();
		if (this.getTieRects().length == 0) return [];
		this.tieinfos = new PComplexTieTargetCalculator(this.tieinfos).findTargetHeads();
		return this.tieinfos;
	}
	
	public function getHeads():PHeads
	{
		var result:PHeads = [];
		for (note in this.getNotes()) result = result.concat(note.heads);
		return result;		
	}
	
	var hasTie:Null<Bool>;
	public function getHasTie():Bool
	{
		if (this.hasTie != null) return this.hasTie;
		for (note in this.getNotes()) 
		{
			if (note.getHasTie() == true) 
			{
				this.hasTie = true;
				return this.hasTie;
			}
		}
		this.hasTie = false;
		return this.hasTie;
	}
	
	var headlevels:Array<Int>;
	public function getHeadLevels():Array<Int>
	{
		if (this.headlevels != null) return this.headlevels;
		this.headlevels = [];
		for (note in this.getNotes())
		{
			for (nhead in note.nnote.nheads) this.headlevels.push(nhead.level);
		}
		return this.headlevels;
	}
	
	
	
	public function toString():String
	{
		var str = "PComplex: \r" ;
		for (note in this.getNotes()) str += "- Note: " + Std.string(note.nnote) + "\r";
		return str;
	}
	
}