package;

import js.Browser;
import js.Lib;
import nx3.PScore;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.TargetSvgXml;
import nx3.test.TestItems;

/**
 * ...
 * @author 
 */

class Main 
{
	
	static function main() 
	{
		var target = new TargetSvgXml('#test', Scaling.MINI);
		var renderer = new Renderer(target);
		renderer.renderScore(new PScore(TestItems.scoreBachSinfonia4()), 0, 0, 1200/target.getScaling().unitX);
		target.addToDomElement('mini');		
		
		var target = new TargetSvgXml('#test', Scaling.SMALL);
		var renderer = new Renderer(target);
		renderer.renderScore(new PScore(TestItems.scoreBachSinfonia4()), 0, 0, 1200/target.getScaling().unitX);
		target.addToDomElement('small');

		var target = new TargetSvgXml('#test', Scaling.NORMAL);
		var renderer = new Renderer(target);
		renderer.renderScore(new PScore(TestItems.scoreBachSinfonia4()), 0, 0, 1200/target.getScaling().unitX);
		target.addToDomElement('normal');

		var target = new TargetSvgXml('#test', Scaling.MID);
		var renderer = new Renderer(target);
		renderer.renderScore(new PScore(TestItems.scoreBachSinfonia4()), 0, 0, 1200/target.getScaling().unitX);
		target.addToDomElement('mid');
	}
	
}