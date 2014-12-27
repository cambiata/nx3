package nx3.render;
import nx3.render.scaling.Scaling;
import cx.flash.ResizeSprite;
import flash.display.Sprite;
import nx3.render.scaling.TScaling;

/**
 * RenderScoreSprite
 * @author Jonas Nyström
 */
class TestscoreSprite extends ResizeSprite
{
	var targetHS:nx3.render.TargetSprite;
	var rendererHS:nx3.render.Renderer;
	//var pscore:PScore;
	
	public var scoresprite(default, null):Sprite;
	var nscore:NScore;
	
	public function new(nscore:NScore, x:Float = 100, y:Float = 100, width:Float = 300, height:Float = 100, scaling:TScaling=null) {
		this.nscore = nscore;
		if (scaling == null) scaling = Scaling.NORMAL;
		//this.pscore = new PScore(nscore);
		this.scoresprite = new Sprite();
		targetHS = new TargetSprite(this.scoresprite, scaling);
		rendererHS = new Renderer(targetHS, 0, 0);		
		super(x, y, width, height);
		this.addChild(this.scoresprite);
	}
	
	override public function redraw(w:Float, h:Float, sprite:Sprite)
	{
		this.targetHS.clear();		
		while (this.targetHS.getTargetSprite().numChildren > 0) this.targetHS.getTargetSprite().removeChildAt(0);
		
		var renderWidth =  Math.max(60, this.rendererHS.xToUnitX(w));
		this.rendererHS.renderScore(new PScore(this.nscore), 0, 0, renderWidth);			
	}
	
	override public function draw(w:Float, h:Float, sprite:Sprite) {}
}