package nx3.test;
import nx3.render.Renderer;

/**
 * ...
 * @author Jonas Nyström
 */
class TestRenderer
{

	static public function testRenderer(r:Renderer) 
	{
			r.renderBar(TestItems.vbarPauses(), 10, 80);				
			r.renderBar(TestItems.vbarSigns(), 10, 400);	
			var target = r.getTarget();
			var text = "Hello world!";
			var width = target.textwidth(text);
			target.text(0, 0, '$text $width');		
	}
	
}