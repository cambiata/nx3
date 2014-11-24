package ;

import cx.FileTools;
import neko.Lib;
import nx3.PScore;
import nx3.render.ITarget;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.TargetNmeBitmap;
import nx3.render.TargetSvgXml;
import nx3.test.Unittests;
import nx3.test.TestItems;
import nx3.test.TestRenderer;

/**
 * ...
 * @author Jonas Nyström
 */
 
class Main 
{	
	static function main() 
	{
		//Unittests.performTests();
		var nscore = TestItems.scoreLyrics();
		
		var target = new TargetNmeBitmap(Scaling.SMALL);
		new Renderer(target).renderScore(new PScore(nscore), 0, 0, 1200/target.getScaling().unitX);
		target.saveBitmap('test-small.png');
		
		var target = new TargetNmeBitmap(Scaling.NORMAL);
		new Renderer(target).renderScore(new PScore(nscore), 0, 0, 1200/target.getScaling().unitX);
		target.saveBitmap('test-normal.png');
		
		var target = new TargetNmeBitmap(Scaling.BIG);
		new Renderer(target).renderScore(new PScore(nscore), 0, 0, 1200/target.getScaling().unitX);
		target.saveBitmap('test-big.png');
		
		var target = new TargetSvgXml('test', Scaling.NORMAL);
		new Renderer(target).renderScore(new PScore(nscore), 0, 0, 1200/target.getScaling().unitX);
		
		var svgString = target.getXml().toString();
		FileTools.saveContent('test.svg', svgString);
		var html = '<html><body>$svgString</body></html>';
		FileTools.saveContent('test.html', html);
		
	}
}