package nx3.render;
import nx3.Constants;
import nx3.EDirectionUDs;
import nx3.ESign;
import nx3.geom.BezieerTool;
import nx3.geom.Rectangle;
import nx3.EDirectionUD;
import nx3.NBar;
import nx3.NPart;
import nx3.NVoice;
import nx3.ENoteType;
import nx3.PBar;
import nx3.PColumnsDistancesCalculator;
import nx3.PScore;
import nx3.PSystem;
import nx3.QNote.QNote16;
import nx3.QNote.QNote2;
import nx3.QNote.QNote4;
import nx3.QNote.QNote8;
import nx3.QVoice;
import nx3.render.ITarget;
import nx3.render.scaling.TScaling;
import nx3.render.svg.SvgElements;
import nx3.TPoint;
import nx3.TPoints;
using cx.ArrayTools;
using nx3.ENoteValTools;

/**
 * ...
 * @author Jonas Nyström
 */
class Renderer extends RendererBase
{
	var partDistance:Int;

	public function new(target:ITarget, targetX:Float, targetY:Float) 
	{
		super(target, targetX, targetY);
		this.partDistance = Std.int(16 * scaling.unitY);
	}
	
	public function getTarget():ITarget
	{
		return this.target;
	}
	
	public function xToUnitX(x:Float):Float return x * (1 / this.scaling.unitX);		
	
	public function yToUnitY(y:Float):Float return y * (1 / this.scaling.unitY);				
	
	public function renderPBar(bar:PBar, newX:Float=-1, newY:Float=-1)
	{
		if (newX != -1) this.targetX = newX;
		if (newY != -1) this.targetY = newY;	
		this.barContent(bar);
	}
	
	public function renderSystem(system:PSystem, newX:Float=-1, newY:Float=-1)
	{
		if (newX != -1) this.targetX = newX;
		if (newY != -1) this.targetY = newY;	
		this.psystem(system);
	
	}
	
	public function renderScore(score:PScore, newX:Float=-1, newY:Float=-1, systemwidth:Float=400)
	{
		if (newX != -1) this.targetX = newX;
		if (newY != -1) this.targetY = newY;	
		this.psystems(score.getSystems(systemwidth));	
	}
	
	
	
}