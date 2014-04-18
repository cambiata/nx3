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
			
		r.renderBar(TestItems.vbarSignBug(), 10, 100);				
		r.renderBar(TestItems.vbarFlags(), 180, 100);				
		r.renderBar(TestItems.vbarSigns(), 10, 260);	
		r.renderBar(TestItems.vbarTpl(), 10, 520);
			
			
			var target = r.getTarget();
			//target.parallellogram(0, 0, 100, 30, 30);
			
			/*
			var text = "ABC abc gpd 123!#%";
			var width = target.textwidth(text);
			var height = target.textheight(text);
			target.text(0, 0, '$text $width $height');		
			target.rectangle(0, 0, new Rectangle(0, 0, width, height), 1, 0xff0000);
			*/
			
	}
	
}