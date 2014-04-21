package nx3.test;
import nx3.geom.Rectangle;
import nx3.NBar;
import nx3.NPart;
import nx3.NVoice;
import nx3.PBar;
import nx3.PComplexMinDistCalculator;
import nx3.PPart;
import nx3.QNote.QLyric4;
import nx3.QNote.QNote2;
import nx3.QNote.QNote4;
import nx3.QNote.QNote8;
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
		/*
		var part = TestItems.ppartComplex1();		
		var note0 = part.getComplexes().first().getNotes().first();
		var note1 = part.getComplexes().first().getNotes().second();
		
		var rects = note0.getHeadsRects();		
		target.rectangles(300, 100, rects, 1, 0xff0000);		
		
		var hrects = note1.getHeadsRects();		
		target.rectangles(300, 100, hrects, 1, 0x00ff00);		
		
		var complex = part.getComplexes().first();

		var crects = complex.getHeadsRects();
		target.rectangles(400, 100, crects, 1, 0x0000ff);		
		var srects = complex.getSignsRects();
		target.rectangles(400, 100, srects, 1, 0xff0000);		
		var strects = complex.getStavesRects();
		target.rectangles(400, 100, strects, 1, 0x00ff00);
		*/
		
		var part = TestItems.ppartComplex1();		
		var complexA = part.getComplexes().second();
		var complexB = part.getComplexes().third();
		
		var calculator = new PComplexMinDistCalculator();
	
		var x = 400;
		
		target.rectangle(x, 100, complexA.getBaseRect(), 1, 0x00FFFF);
		target.rectangles(x, 100, complexA.getAllRects(), 1, 0xFF0000);
		trace(complexA.getAllRects());
		var distance = calculator.getDistance(complexA, complexB) * target.getScaling().unitX;		
		//var distance = 100;		
		target.rectangle(x+distance, 100, complexB.getBaseRect(), 1, 0x00FFFF);
		target.rectangles(x+distance, 100, complexB.getAllRects(), 1, 0x00FF00);
		
		var bar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(0),
					new QNote8(1),
					new QNote8(0),
					new QNote2(0),
					new QNote4([-3,-2], 'b'),
					]),
			]),
			new NPart([	
				new NVoice([				
					new QNote2(1),					
					//new QNote4([ -1, 0], '#b'),						
					new QNote4(0),					
					new QNote4(0),					
					new QNote4(0),					
				]),
			]),			
		]));		
		
		var calculator = new PColumnsDistancesCalculator(bar);
		calculator.calculate();				
		
		var ox = 100.0;
		var oy = 300.0;		
		var cidx = 0;
		for (column in bar.getColumns())
		{			
			var x = ox + column.getXPosition() * target.getScaling().unitX;
			var y = oy;
			var cplix = 0;
			for (complex in column.getComplexes())
			{
				y  = oy + cplix * 120;
				cplix++;
				if (complex == null) continue;
				target.rectangles(x, y, complex.getAllRects(), 1, 0xFF0000);
				target.rectangle(x, y, complex.getBaseRect(), 1, 0x00FF00);
			}
		}		
	}
	
}