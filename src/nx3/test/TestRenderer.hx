package nx3.test;
import nx3.geom.Rectangle;
import nx3.NBar;
import nx3.NPart;
import nx3.NVoice;
import nx3.PBar;
import nx3.PComplexDistancesCalculator;
import nx3.PPart;
import nx3.QNote.QLyric4;
import nx3.QNote.QNote2;
import nx3.QNote.QNote4;
import nx3.QNote.QNote8;
import nx3.render.ITarget;
import nx3.render.Renderer;
using cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */
class TestRenderer
{
	static public function testRenderer(r:Renderer) 
	{
		/*
		r.renderBar(TestItems.vbarSignBug(), 10, 100);				
		r.renderBar(TestItems.vbarFlags(), 180, 100);				
		r.renderBar(TestItems.vbarSigns(), 10, 260);	
		r.renderBar(TestItems.vbarTpl(), 10, 520);
		*/
		var target = r.getTarget();
	}
	
	static public function testRenderP(r:Renderer)
	{		
		r.renderScore(TestItems.scoreTpl(), 10, 100, 300);
		
		//r.renderScore(TestItems.scoreStretch(140), 10, 400, 500);
		//r.renderScore(TestItems.scoreStretch(150), 10, 800, 500);
		
		//r.renderPBar(TestItems.pbarContentwidth1(), 30, 100);				
		/*
		r.renderPBar(TestItems.pbarLyrics(), 30, 250);		
		r.renderPBar(TestItems.pbarAllotLeftalign(), 30, 350);		
		r.renderPBar(TestItems.pbarAllotEqual(), 30, 450);		
		r.renderPBar(TestItems.pbarAllotLinear(), 30, 550);		
		r.renderPBar(TestItems.pbarAllotLogaritmic(), 30, 650);		
		r.renderPBar(TestItems.pbarTies(), 30, 750);		
		*/
		
	}
	
}