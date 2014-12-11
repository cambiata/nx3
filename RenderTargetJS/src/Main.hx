package;

import js.Browser;
import js.Lib;
import nx3.PScore;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.TargetSvgXml;
import nx3.test.TestItems;
import nx3.test.TestItemsBach;

/**
 * ...
 * @author 
 */

class Main 
{
	
	static function main() 
	{
		
		var renderwidth = 900;
		
		var nscore = TestItems.scoreTplChain();
		
		var target = new TargetSvgXml('#test', Scaling.MINI);
		var renderer = new Renderer(target);
		renderer.renderScore(new PScore(nscore), 0, 0, renderwidth/target.getScaling().unitX);
		target.addToDomElement('mini');	
		trace(target.getXml().toString());
		
		var target = new TargetSvgXml('#test', Scaling.SMALL);
		var renderer = new Renderer(target);
		renderer.renderScore(new PScore(nscore), 0, 0, renderwidth/target.getScaling().unitX);
		target.addToDomElement('small');

		var target = new TargetSvgXml('#test', Scaling.NORMAL);
		var renderer = new Renderer(target);
		renderer.renderScore(new PScore(nscore), 0, 0, renderwidth/target.getScaling().unitX);
		target.addToDomElement('normal');
		
		
		var target = new TargetSvgXml('#test', Scaling.MID);
		var renderer = new Renderer(target);
		renderer.renderScore(new PScore(nscore), 0, 0, renderwidth/target.getScaling().unitX);
		target.addToDomElement('mid');
		
				
		
	}
	
}