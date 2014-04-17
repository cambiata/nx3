package nx3.test;
import nx3.geom.Rectangle;
import nx3.render.Renderer;

/**
 * ...
 * @author Jonas Nyström
 */
class TestRenderer
{

	static public function testRenderer(r:Renderer) 
	{
			r.renderBar(TestItems.vbarQSyntax1(), 10, 80);				
			r.renderBar(TestItems.vbarSigns(), 10, 240);	
			r.renderBar(TestItems.vbarTpl(), 10, 500);
			var target = r.getTarget();
			
			/*
			var text = "ABC abc gpd 123!#%";
			var width = target.textwidth(text);
			var height = target.textheight(text);
			target.text(0, 0, '$text $width $height');		
			target.rectangle(0, 0, new Rectangle(0, 0, width, height), 1, 0xff0000);
			*/
			
	}
	
}