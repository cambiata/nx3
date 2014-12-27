package;

import flash.display.StageAlign;
import flash.display.StageScaleMode;
import flash.Lib;
import nx3.ENoteVal;
import nx3.NBar;
import nx3.NHead;
import nx3.NNote;
import nx3.NPart;
import nx3.NScore;
import nx3.NVoice;
import nx3.PScore;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.TargetSprite;
import nx3.render.TestscoreSprite;


/**
 * ...
 * @author Jonas Nyström
 */

class Main 
{
	
	static function main() 
	{
		var stage = Lib.current.stage;
		stage.scaleMode = StageScaleMode.NO_SCALE;
		stage.align = StageAlign.TOP_LEFT;
		// entry point	
		
		var nscore = new NScore([new NBar([new NPart([new NVoice([
			new NNote([new NHead(2)], ENoteVal.Nv8)
			,new NNote([new NHead(1)], ENoteVal.Nv8)
			,new NNote([new NHead(0)], ENoteVal.Nv4)
		]) ]) ]) ]);
		
		var target = new TargetSprite(Lib.current, Scaling.NORMAL);
		var renderer = new Renderer(target, 0, 0);	
		
		renderer.renderScore(new PScore(nscore), 10, 20, 400);
		
		/*
		var tss:TestscoreSprite = new TestscoreSprite(nscore, 20, 20, 200, 200, Scaling.NORMAL);
		Lib.current.addChild(tss);			
		*/
	}
	
}