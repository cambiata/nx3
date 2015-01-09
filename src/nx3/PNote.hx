package nx3;
import cx.ArrayTools;
import hxlazy.Lazy;
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;
using nx3.geom.Rectangles.RectanglesTools;
using Lambda;

/**
 * ...
 * @author Jonas Nyström
 */
@:access(nx3.PHead)
class PNote /*implements Lazy*/
{
	public var nnote:NNote;
	
	public function new(nnote:NNote)
	{
		this.nnote = nnote;		
	}	
	
	public function iterator() return this.heads.iterator();
	public var length (get, null):Int;
	private function get_length():Int return this.heads.length;			
	
	
	var voice: PVoice;
	public function getVoice():PVoice
	{
		return this.voice;
	}
	
	
	
	var heads:PHeads;
	public function getHeads():PHeads
	{
		if (this.heads != null) return this.heads;
		this.heads = [];		
		
		for (nhead in this.nnote.nheads) 
		{
			var phead = new PHead(nhead);
			phead.note = this;
			this.heads.push(phead);
		}
		return this.heads;
	}
	
	
	/*
	@lazy public function heads():PHeads	
	{ 
		return this.nnote.map(function(nhead) { 
			var phead = new PHead(nhead); phead.note = this;  return phead; 
		} ).array(); 
	}
	*/
	
	
	//----------------------------------------------------------------------------------
	

	var beamgroup:PBeamgroup;
	public function getBeamgroup():PBeamgroup
	{
		if (this.voice == null) throw "PNote doesn't have a parent PVoice";		
		if (this.beamgroup == null)
		{
			this.voice.getBeamgroups();
		}
		if (this.beamgroup == null) throw "this should not happen";
		return this.beamgroup;
	}

	
	public function getDirection():EDirectionUD
	{
		return this.getBeamgroup().getDirection();
	}
	
	var complex:PComplex;
	public function getComplex():PComplex
	{
		if (this.voice == null) throw "PNote doesn't have a parent PVoice";		
		if (this.complex == null)
		{			
			this.voice.getPart().getComplexes();
		}
		if (this.complex == null) throw "Shouldn't happen";
		return this.complex;
	}
	
	
	var headsRects:Rectangles;
	public function getHeadsRects():Rectangles
	{
		if (this.voice == null) throw "PNote doesn't have a parent PVoice";		
		if (this.headsRects != null) return this.headsRects;
		var calculator = new PNoteheadsRectsCalculator(this);		
		this.headsRects = calculator.getHeadsRects();		
		return headsRects;
	}
	
	/*
	@lazyGet public function headsRects():Rectangles
	{
		return  new PNoteheadsRectsCalculator(this).getHeadsRects();
	}	
	*/
	
	
	var staveRect:Rectangle;
	var staveRectChecked:Bool;
	public function getStaveRect():Rectangle
	{
		if (this.voice == null) throw "PNote doesn't have a parent PVoice";		
		if (staveRectChecked) return this.staveRect;
		this.staveRect = this.getComplex().getStaveRect(this);
		this.staveRectChecked = true;
		return this.staveRect;
	}
	
	
	/*
	@lazyGet public function staveRect():Rectangle
	{
		return this.getComplex().getStaveRect(this);
	}	
	*/
	
	var staveXPosition:Null<Float>;
	public function getStaveXPosition():Float
	{
		if (this.voice == null) throw "PNote doesn't have a parent PVoice";		
		if (this.staveXPosition != null) return this.staveXPosition;
		
		var staverect = this.getStaveRect();
		if (staverect == null) return 0;

		this.staveXPosition = (this.getDirection() == EDirectionUD.Up) ? staverect.width : staverect.x;
		return this.staveXPosition;
	}
	
	
	/*
	@lazyGet public function staveXPosition():Float
	{
		var staverect = this.getStaveRect();
		if (staverect == null) return 0;
		return (this.getDirection() == EDirectionUD.Up) ? staverect.width : staverect.x;
	}	
	*/
	
	
	var baserect:Rectangle;
	public function getBaseRect():Rectangle
	{
		if (this.voice == null) throw "PNote doesn't have a parent PVoice";		
		if (baserect != null) return this.baserect;
		this.baserect =  new PBaseRectCalculator(this).getBaseRect();		
		return this.baserect;		
	}
	
	/*
	@lazyGet public function baseRect():Rectangle
	{
		return new PBaseRectCalculator(this).getBaseRect();		
	}	
	*/
	
	
	var xoffset:Null<Float>;
	public function getXOffset():Float
	{
		if (this.voice == null) throw "PNote doesn't have a parent PVoice";		
		if (xoffset != null) return xoffset;
		xoffset = this.getComplex().getNoteXOffset(this);
		return xoffset;
	}
	
	/*
	@lazyGet public function xOffset():Float
	{
		//if (this.voice == null) throw "PNote doesn't have a parent PVoice";		
		//if (xoffset != null) return xoffset;
		//xoffset = this.getComplex().getNoteXOffset(this);
		return this.getComplex().getNoteXOffset(this);
	}	
	*/
	
	var xposition:Null<Float>;
	public function getXPosition():Float
	{
		if (this.voice == null) throw "PNote doesn't have a parent PVoice";		
		if (this.xposition != null) return this.xposition;
		this.xposition = this.getComplex().getXPosition() + this.getXOffset();
		return this.xposition;		
	}
	
	/*
	@lazyGet public function xPosition():Float
	{
		return this.getComplex().getXPosition() + this.getXOffset();
	}
	*/
	
	public function getTies():ETies return this.nnote.ties;
	
	var next:PNote;
	public function getNext():PNote
	{
		if (this.voice == null) throw "PNote doesn't have a parent PVoice";		
		if (this.next != null) return this.next;
		var idx = this.voice.getNotes().indexOf(this);
		this.next = ArrayTools.indexOrNull(this.voice.getNotes(), idx + 1);
		return this.next;
	}

	/*
	@lazyGet public function next():PNote
	{
		var idx = this.voice.getNotes().indexOf(this);
		return ArrayTools.indexOrNull(this.voice.getNotes(), idx + 1);
	}	
	*/
	
	public function getHasTie():Bool 
	{ 
		return !this.nnote.foreach(function(nhead) { return !(nhead.tie != null) ; } ); 
	};
	

	
}
