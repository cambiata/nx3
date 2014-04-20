package nx3;
import nx3.geom.Rectangles;

/**
 * ...
 * @author Jonas Nyström
 */
class PNote 
{
	public var nnote(default, default):NNote;
	public var pvoice(default, default): PVoice;
	//public var pbeamgroup(default, default): PBeamgroup;
	
	
	
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
			this.pvoice.getBeamgroups();
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
			this.pvoice.ppart.getPComplexes();
		}
		if (this.complex == null) throw "Shouldn't happen";
		return this.complex;
	}
	
	public function setComplex(val:PComplex):PNote
	{
		this.complex = val;
		return this;
	}
	
	
	/*
	var pheadsPlacements:PHeadPlacements;
	public function getPHeadsPlacements():PHeadPlacements
	{
		if (this.pheadsPlacements != null) return this.pheadsPlacements;
		if (this.pheads == null) this.getPHeads();
		
		var calculator = new PHeadPlacementsCalculator(this.pheads, this.getDirection());
		this.pheadsPlacements = calculator.getHeadsPlacements();
		return this.pheadsPlacements;
	}	
	*/
	
	
	var headsRects:Rectangles;
	public function getHeadsRects():Rectangles
	{
		if (this.headsRects != null) return this.headsRects;
		var calculator = new PNoteheadsRectsCalculator(this);		
		this.headsRects = calculator.getHeadsRects();
		return headsRects;
		
	}
	
	
}
