package ;

import cx.FileTools;
import neko.Lib;
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
		Unittests.performTests();

		var target = new TargetNmeBitmap(Scaling.SMALL);
		TestRenderer.testRenderP( new Renderer(target, 10, 80));		
		target.saveBitmap('test-small.png');
		
		var target = new TargetNmeBitmap(Scaling.NORMAL);
		TestRenderer.testRenderP( new Renderer(target, 10, 80));		
		target.saveBitmap('test-normal.png');
		
		var target = new TargetNmeBitmap(Scaling.BIG);
		TestRenderer.testRenderP( new Renderer(target, 10, 80));		
		target.saveBitmap('test-big.png');
		
		var target = new TargetSvgXml('test', Scaling.NORMAL);
		TestRenderer.testRenderP(new Renderer(target, 10, 80));
		var xml = target.getXml();
		FileTools.saveContent('test.svg', xml.toString());
	}
}