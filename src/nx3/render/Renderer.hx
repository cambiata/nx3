package nx3.render;
import nx3.NBar;
import nx3.NPart;
import nx3.NVoice;
import nx3.QNote.QNote16;
import nx3.QVoice;
import nx3.render.ITarget;
import nx3.render.scaling.TScaling;
import nx3.VBar;

/**
 * ...
 * @author Jonas Nyström
 */
class Renderer
{
	var target:ITarget;
	var partDistance:Int;
	var targetY:Float;
	var targetX:Float;
	var scaling:TScaling;

	public function new(target:ITarget, targetX:Float, targetY:Float) 
	{
		this.partDistance = 120;
		this.target = target;
		this.targetX = targetX;
		this.targetY = targetY;
		this.scaling = this.target.getScaling();
	}
	
	public function renderBar(vbar:VBar)
	{
		this.notlines(vbar, 500);
	}
	
	function notlines(vbar:VBar, width:Float)
	{
		var partY = this.targetY;
		for (vpart in vbar.getVParts())
		{
			this.target.testLines(this.targetX, partY, width);
			partY += this.partDistance;
		}
	}
	
	public function getTestVBar():VBar
	{
		var vbar = new VBar(new NBar([
			new NPart([new QVoice([8, 8, 8, 8], [ -1, -1, 1, 1])]),
			new NPart([	
				new NVoice([
					new QNote16([ -1, 0]), new QNote16([ 0, 1 ]),  new QNote16([ 1, 2 ]),  new QNote16([ 5, 7 ]),
					new QNote16([ 0, 1]), new QNote16([ 0, 2 ]),  new QNote16([ 0, 3 ]),  new QNote16([ 0, 2 ]),
					
					])
			]),
		]));				
		return vbar;
	}
	
}