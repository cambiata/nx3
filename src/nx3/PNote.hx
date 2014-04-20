package nx3;
import nx3.geom.Rectangles;

/**
 * ...
 * @author Jonas Nyström
 */

class PNote 
{
	public var nnote(default, default):NNote;
	public var voice(default, default): PVoice;
	
	public function new(nnote:NNote)
	{
		this.nnote = nnote;		
	}	
	
	var pheads:PHeads;
	public function getPHeads():PHeads
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
	
	var beamgroup:PBeamgroup = null;
	public function getBeamgroup():PBeamgroup
	{
		if (this.beamgroup == null)
		{
			this.voice.getBeamgroups();
		}
		if (this.beamgroup == null) throw "this should not happen";
		return this.beamgroup;
	}
	
	public function setBeamgroup(val:PBeamgroup):PNote
	{
		this.beamgroup = val;
		return this;
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
	
	public function setComplex(val:PComplex):PNote
	{
		this.complex = val;
		return this;
	}
	
	var headsRects:Rectangles;
	public function getHeadsRects():Rectangles
	{
		if (this.headsRects != null) return this.headsRects;
		var calculator = new PNoteheadsRectsCalculator(this);		
		this.headsRects = calculator.getHeadsRects();
		return headsRects;
	}
	
	var xoffset:Null<Float>;
	public function getXOffset():Float
	{
		if (xoffset != null) return xoffset;
		xoffset = this.getComplex().getNoteXOffset(this);
		return xoffset;
	}
	
	
	
	
}
