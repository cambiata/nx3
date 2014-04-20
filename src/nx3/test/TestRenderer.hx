package nx3.test;
import nx3.geom.Rectangle;
import nx3.PPart;
import nx3.render.Renderer;
import nx3.render.TargetSprite;
using cx.ArrayTools;
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
	
	static public function devP(target:TargetSprite) 
	{
		var part = TestItems.ppartComplex1();		
		var note0 = part.getComplexes().first().getNotes().first();
		var note1 = part.getComplexes().first().getNotes().second();
		
		var rects = note0.getHeadsRects();		
		target.rectangles(300, 100, rects, 1, 0xff0000);		
		
		var rects = note1.getHeadsRects();		
		target.rectangles(300, 100, rects, 1, 0x00ff00);		
		
		var complex = part.getComplexes().first();
		var crects = complex.getHeadsRects();
		target.rectangles(400, 100, crects, 1, 0x0000ff);
		
		var srects = complex.getSignsRects();
		target.rectangles(400, 100, srects, 1, 0xff0000);
		
	}
	
}