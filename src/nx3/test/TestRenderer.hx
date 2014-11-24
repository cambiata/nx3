package nx3.test;
//import nx3.action.SoundInteractivity;
import nx3.geom.Rectangle;
import nx3.NBar;
import nx3.NPart;
import nx3.NVoice;
import nx3.PBar;
import nx3.PComplexDistancesCalculator;
import nx3.PPart;
import nx3.PScore;
import nx3.QNote.QLyric4;
import nx3.QNote.QNote2;
import nx3.QNote.QNote4;
import nx3.QNote.QNote8;
import nx3.action.TestInteractivity;
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
		//r.addInteraction( new TestInteractivity());
		//r.addInteraction( new SoundInteractivity());
		//r.renderScore(new PScore(TestItems.scoreTest1().nscore), 10, 100, 300);
		//r.renderScore(new PScore(TestItems.scoreBachSinfonia4()), 0, 0, 300);
		//r.renderScore(new PScore(TestItems.scoreLyrics()), 0, 0, 300);
		r.renderScore(new PScore(TestItems.scoreTplChain()), 0, 0, 300);
		//r.testText();
	}
	
}