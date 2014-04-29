package nx3;
import cx.ArrayTools;
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;
using nx3.geom.Rectangles.RectanglesTools;

/**
 * ...
 * @author Jonas Nyström
 */

class PNote 
{
	public var nnote:NNote;
	public var voice(default, default): PVoice;
	
	public function new(nnote:NNote)
	{
		this.nnote = nnote;		
	}	
	
	var pheads:PHeads;
	public function getHeads():PHeads
	{
		if (this.pheads != null) return this.pheads;
		this.pheads = [];		
		
		for (nhead in this.nnote.nheads) 
		{
			var phead = new PHead(nhead);
			phead.pnote = this;
			this.pheads.push(phead);
		}
		return this.pheads;
	}
	
	//----------------------------------------------------------------------------------
	
	var beamgroup:PBeamgroup;
	public function getBeamgroup():PBeamgroup
	{
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
		if (this.complex == null)
		{			
			this.voice.part.getComplexes();
		}
		if (this.complex == null) throw "Shouldn't happen";
		return this.complex;
	}
	
	var headsRects:Rectangles;
	public function getHeadsRects():Rectangles
	{
		if (this.headsRects != null) return this.headsRects;
		var calculator = new PNoteheadsRectsCalculator(this);		
		this.headsRects = calculator.getHeadsRects();		
		return headsRects;
	}
	
	var staveRect:Rectangle;
	var staveRectChecked:Bool;
	public function getStaveRect():Rectangle
	{
		if (staveRectChecked) return this.staveRect;
		this.staveRect = this.getComplex().getStaveRect(this);
		this.staveRectChecked = true;
		return this.staveRect;
	}
	
	var staveXPosition:Null<Float>;
	public function getStaveXPosition():Float
	{
		if (this.staveXPosition != null) return this.staveXPosition;
		
		var staverect = this.getStaveRect();
		if (staverect == null) return 0;

		this.staveXPosition = (this.getDirection() == EDirectionUD.Up) ? staverect.width : staverect.x;
		return this.staveXPosition;
	}

	var baserect:Rectangle;
	public function getBaseRect():Rectangle
	{
		if (baserect != null) return this.baserect;
		this.baserect =  new PBaseRectCalculator(this).getBaseRect();		
		return this.baserect;		
	}
	
	var xoffset:Null<Float>;
	public function getXOffset():Float
	{
		if (xoffset != null) return xoffset;
		xoffset = this.getComplex().getNoteXOffset(this);
		return xoffset;
	}
	
	var xposition:Null<Float>;
	public function getXPosition():Float
	{
		if (this.xposition != null) return this.xposition;
		this.xposition = this.getComplex().getXPosition() + this.getXOffset();
		return this.xposition;		
	}
	
	public function getTies():ETies
	{
		return this.nnote.getTies();		
	}
	
	var next:PNote;
	public function getNext():PNote
	{
		if (this.next != null) return this.next;
		var idx = this.voice.getNotes().indexOf(this);
		this.next = ArrayTools.indexOrNull(this.voice.getNotes(), idx + 1);
		return this.next;
	}
	
	
	
	public function setTiesInfo(info:ETies)
	{
		
		
	}
	
}
