package nx3;

/**
 * ...
 * @author Jonas Nyström
 */

 import nx3.geom.Rectangle;
import nx3.geom.Rectangles;
 
class VNote
{
	public var nnote(default, null):NNote;
	public function new(nnote:NNote)
	{
		this.nnote = nnote;		
	}
	
	var vheads:VHeads;
	public function getVHeads():VHeads
	{
		if (this.vheads != null) return this.vheads;
		this.vheads = [];
		for (nhead in this.nnote.nheads) this.vheads.push(new VHead(nhead));
		return this.vheads;
	}
	
	var vheadsPlacements:VHeadPlacements;
	public function getVHeadsPlacements():VHeadPlacements
	{
		if (this.vheadsPlacements != null) return this.vheadsPlacements;
		if (this.vheads == null) this.getVHeads();
		
		var calculator:VHeadPlacementCalculator = new VHeadPlacementCalculator(this.vheads, this.getDirection());
		this.vheadsPlacements = calculator.getHeadsPlacements();
		return this.vheadsPlacements;
	}
	

	// -----------------------------------------------------------------------------------------------------------	
	var vheadsPlacementsUp:VHeadPlacements;
	public function getVHeadPlacementsUp():VHeadPlacements
	{
		if (this.vheadsPlacementsUp != null) return this.vheadsPlacementsUp;
		if (this.vheads == null) this.getVHeads();
		var calculator:VHeadPlacementCalculator = new VHeadPlacementCalculator(this.vheads, EDirectionUD.Up);
		this.vheadsPlacementsUp = calculator.getHeadsPlacements();
		return this.vheadsPlacementsUp;
	}
	var vheadsPlacementsDown:VHeadPlacements;
	public function getVHeadPlacementsDown():VHeadPlacements
	{
		if (this.vheadsPlacementsDown != null) return this.vheadsPlacementsDown;
		if (this.vheads == null) this.getVHeads();
		var calculator:VHeadPlacementCalculator = new VHeadPlacementCalculator(this.vheads, EDirectionUD.Down);
		this.vheadsPlacementsDown = calculator.getHeadsPlacements();
		return this.vheadsPlacementsDown;
	}	
	
	public function getVHeadPlacementsDir(dir:EDirectionUD)
	{
		return (dir == EDirectionUD.Up)? this.getVHeadPlacementsUp() : this.getVHeadPlacementsDown();
	}
	
	//=====================================================================
	/*
	var vheadsRectangles:Rectangles;
	public function getVHeadsRectangles():Rectangles
	{
		if (this.vheadsRectangles != null) return this.vheadsRectangles;
		if (this.vheads == null) this.getVHeads();
		
		var calculator = new VNoteHeadsRectsCalculator(this.getVHeads(), this.getVHeadsPlacements(), this.nnote.value);
		this.vheadsRectangles = calculator.getHeadsRects();
		return this.vheadsRectangles;
	}
	*/
	//------------------------------------------------------------------------------------------------------
	
	public function getVHeadsRectanglesDir(dir:EDirectionUD)
	{
		return (dir == EDirectionUD.Up)? this.getVHeadsRectanglesUp() : this.getVHeadsRectanglesDown();
	}
	
	var vheadsRectanglesUp:Rectangles;
	function getVHeadsRectanglesUp() :Rectangles
	{
		if (this.vheadsRectanglesUp != null) return this.vheadsRectanglesUp;
		if (this.vheads == null) this.getVHeads();
		
		var calculator = new VHeadsRectsCalculator(this.getVHeads(), this.getVHeadPlacementsUp(), this.nnote.value);
		var calculator = new VNoteHeadsRectsCalculator(this, this.getVHeadPlacementsUp());
		
		this.vheadsRectanglesUp = calculator.getHeadsRects();
		
		return this.vheadsRectanglesUp;		
	}
	var vheadsRectanglesDown:Rectangles;
	function getVHeadsRectanglesDown() :Rectangles
	{
		if (this.vheadsRectanglesDown != null) return this.vheadsRectanglesDown;
		if (this.vheads == null) this.getVHeads();
		
		var calculator = new VHeadsRectsCalculator(this.getVHeads(), this.getVHeadPlacementsDown(), this.nnote.value);
		//trace(calculator.getHeadsRects());
		var calculator = new VNoteHeadsRectsCalculator(this,  this.getVHeadPlacementsDown());
		//trace(calculator.getHeadsRects());
		this.vheadsRectanglesDown = calculator.getHeadsRects();
		return this.vheadsRectanglesDown;		
	}	
	
	var config:VNoteConfig;
	public function setConfig(newConfig:VNoteConfig)
	{
		if (Std.string(config) == Std.string(newConfig))
		{
			return;
		}
		else
		{
			// reset stuff...
			this.direction = null;
			this.vheadsPlacements = null;
		}
		
		this.config = newConfig;
	}
	
	var direction:EDirectionUD;
	
	public function getDirection():EDirectionUD
	{
		if (this.direction != null) return this.direction;
		var calculator = new VNoteDirectionCalculator(this);
		
		var configDirection = (this.config != null) ? config.direction : null;
		this.direction = calculator.getDirection(configDirection);
		return this.direction;
	}
}