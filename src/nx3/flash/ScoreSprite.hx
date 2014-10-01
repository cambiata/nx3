package nx3.flash;

import nx3.NScore;
import nx3.PScore;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.scaling.TScaling;
import nx3.render.TargetSprite;
import nx3.test.TestItems;
import nx3.xml.ScoreXML;
import openfl.display.Sprite;
import openfl.events.MouseEvent;

/**
 * ...
 * @author Jonas Nyström
 */
class ScoreSprite extends Sprite
{
	var score:nx3.PScore;
	var scaling:TScaling;
	public var barClickHandler(default, default): MouseEvent->Int->NBar->PScore->Void;
	public function new(nscore:NScore, ?scaling:TScaling) 
	{
		super();
		 this.scaling = (scaling != null) ? scaling : Scaling.NORMAL;
		 if (nscore != null) this.setScore(nscore);
	}	
	
	public function setScore(nscore:NScore, scaling:TScaling=null)
	{
		this.graphics.clear();
		for (idx in 0...this.numChildren - 1) {
			try {
				this.removeChildAt(0);
			} catch (e:Dynamic) {
				trace ( 'cant remove idx ' + idx);
			}
		}
		if (scaling != null) this.scaling = scaling;
		
		if (nscore == null) {
			this.score = null;
			return;
		}
		
		
		this.score = new PScore(nscore);
		if (this.score != null) this.renderScore();
	}
	
	public function getScore():NScore
	{
		if (this.score == null) return null;
		return this.score.nscore;
	}

	public function getPScore():PScore
	{
		if (this.score == null) return null;
		return this.score;
	}
	
	public function renderScore()
	{
		var target = new TargetSprite(this, this.scaling);
		var renderer = new Renderer(target, 0, 0);
		renderer.renderScore(this.score, 0, 100, 500);			
		for (sys in this.score.getSystems(10000))
		{
			var syswidth = sys.getWidth() * this.scaling.unitX;
			//trace('syswidth ' + syswidth);
			var barx = 0.0;
			var barnr = 0;
			for (sysbar in sys.getSystembars())
			{
				var barwidth = sysbar.getBarMeasurements().getTotalWidth() * this.scaling.unitX;
				//barx += sysbar.getBarMeasurements().getAckoladeXPosition() * this.scaling.unitX;
				//trace(' - barwidth ' + barwidth);						
				var clicksprite = new Sprite();
				clicksprite.graphics.beginFill(0x0000ff, 0);
				clicksprite.graphics.lineStyle(1, 0x00FF00, 0);
				clicksprite.graphics.drawRect(0, 0, barwidth, 40*this.scaling.unitY);
				clicksprite.x = barx;
				clicksprite.useHandCursor = true;
				clicksprite.addEventListener(MouseEvent.MOUSE_DOWN, function(e) {
					var baridx = sys.getSystembars().indexOf(sysbar);
					//trace(baridx);
					var nbar = sysbar.bar.nbar;
					//try {
					if (this.barClickHandler != null) this.barClickHandler(e, baridx, nbar, this.score);					
					//} catch(e:Dynamic) {}
				});				
				this.addChild(clicksprite);				
				barx += barwidth;
				barnr++;
			}
			this.sysWidth = syswidth;
		}
	}	
	
	
	
	public var sysWidth(default, null): Float;
}