package nx3.test;
import haxe.unit.TestCase;
import nx3.EClef;
import nx3.EKey;
import nx3.ETime;
import nx3.NBar;
import nx3.NPart;
import nx3.NScore;
import nx3.PBar;
import nx3.PBars;
import nx3.PBarWidthCalculator;
import nx3.PScore;
import nx3.PSystem;
import nx3.PSystemBar;
import nx3.PSystemBarsGenerator;
import nx3.PSystems;
import nx3.QVoice;
import thx.core.Floats;
using cx.ArrayTools;
using cx.MathTools;

/**
 * ...
 * @author Jonas Nyström
 */
 
class TestPBars extends TestCase
{

	public function testSystemGeneratorOneBar()
	{
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC, EKey.Flat2);
		bars.push(new PBar(new NBar([n0], ETime.Time2_4)));		
		var calculator = new PBarWidthCalculator();
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null, 400, calculator );
		var system:PSystem = generator.getSystem();		
		this.assertEquals(system.getSystembars().first().actAttributes.clefs.toString(), [EClef.ClefC].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.keys.toString(), [EKey.Flat2].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.time, ETime.Time2_4);	
		this.assertEquals(system.getSystembars().length, 1);
		//this.assertEquals(system.getWidth(), 49.6);
		//this.assertEquals(system.getSystembars().first().contentwidth, 33.6);
	}
	
	public function testValueDelta()
	{
		var nbar = new NBar([new NPart([new QVoice([4, 4])])]);
		var pbar = new PBar(nbar);		
		this.assertEquals(pbar.getColumns().first().getDistanceDelta(), 0.5);		
		this.assertEquals(pbar.getColumns().second().getDistanceDelta(), 0.5);		
		
		var nbar = new NBar([new NPart([new QVoice([4, 2])])]);
		var pbar = new PBar(nbar);		
		this.assertEquals(pbar.getColumns().first().getDistanceDelta(), 0.4);		
		this.assertEquals(pbar.getColumns().second().getDistanceDelta(), 0.6);						
	}

	
	public function testStretchOneNote()
	{
		var nbar = new NBar([new NPart([new QVoice([4])])]);
		var pbar = new PBar(nbar);
		var calculator = new PBarWidthCalculator();
		var generator = new PSystemBarsGenerator([pbar],  { showFirstClef:false, showFirstKey:false, showFirstTime:false }, null, 400, calculator );
		var system:PSystem = generator.getSystem();
		var systembar:PSystemBar = system.getSystembars().first();
		this.assertEquals(systembar.getBarMeasurements().getContentWidth(), 9.6);
		this.assertEquals(pbar.getColumns().first().getSPosition(), 1.6);
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit(), 0);
		
		systembar.setBarStretch(10);
		
		this.assertEquals(systembar.getBarMeasurements().getContentWidth(), 19.6);
		this.assertEquals(pbar.getColumns().first().getSPosition(), 1.6);

	}
	
	
	
	public function testStretchTwoNotes()
	{
		var nbar = new NBar([new NPart([new QVoice([4, 4])])]);
		var pbar = new PBar(nbar);
		var calculator = new PBarWidthCalculator();
		var generator = new PSystemBarsGenerator([pbar],  { showFirstClef:false, showFirstKey:false, showFirstTime:false }, null, 400, calculator );
		var system:PSystem = generator.getSystem();
		var systembar:PSystemBar = system.getSystembars().first();
		this.assertEquals(systembar.getBarMeasurements().getContentWidth(), 17.6);
		
		this.assertEquals(pbar.getColumns().first().getAPostion(), 1.6);
		this.assertEquals(pbar.getColumns().first().getSPosition(), 1.6);
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit(), 0);
		this.assertEquals(pbar.getColumns().first().getDistanceDelta(), 0.5);
		
		this.assertEquals(pbar.getColumns().second().getAPostion(), 9.6);
		this.assertEquals(pbar.getColumns().second().getSPosition(), 9.6);
		this.assertEquals(pbar.getColumns().second().getADistanceBenefit(), 0);
		this.assertEquals(pbar.getColumns().second().getDistanceDelta(), 0.5);		
		
		systembar.setBarStretch(10);
		
		this.assertEquals(pbar.getColumns().first().getAPostion(), 1.6);
		this.assertEquals(pbar.getColumns().first().getSPosition(), 1.6);
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit(), 0);
		this.assertEquals(pbar.getColumns().first().getDistanceDelta(), 0.5);
		
		this.assertEquals(pbar.getColumns().second().getAPostion(), 9.6);
		this.assertEquals(pbar.getColumns().second().getSPosition(), 14.6);
		this.assertEquals(pbar.getColumns().second().getADistanceBenefit(), 0);
		this.assertEquals(pbar.getColumns().second().getDistanceDelta(), 0.5);		
		
		
		var nbar = new NBar([new NPart([new QVoice([4, 2])])]);
		var pbar = new PBar(nbar);
		var calculator = new PBarWidthCalculator();
		var generator = new PSystemBarsGenerator([pbar],  { showFirstClef:false, showFirstKey:false, showFirstTime:false }, null, 400, calculator );
		var system:PSystem = generator.getSystem();
		var systembar:PSystemBar = system.getSystembars().first();
		this.assertEquals(systembar.getBarMeasurements().getContentWidth(), 21.6);
		
		this.assertEquals(pbar.getColumns().first().getSPosition(), 1.6);
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit(), 0);
		this.assertEquals(pbar.getColumns().first().getDistanceDelta(), 0.4);
		
		this.assertEquals(pbar.getColumns().second().getSPosition(), 9.6);
		this.assertEquals(pbar.getColumns().second().getADistanceBenefit(), 0);
		this.assertEquals(pbar.getColumns().second().getDistanceDelta(), 0.6);		
		
		systembar.setBarStretch(10);		
		
		this.assertEquals(pbar.getColumns().first().getSPosition(), 1.6);
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit(), 0);
		this.assertEquals(pbar.getColumns().first().getDistanceDelta(), 0.4);
		
		//this.assertEquals(pbar.getColumns().second().getSPosition(), Floats.nearEquals(13.6);
		this.assertTrue(Floats.nearEquals(pbar.getColumns().second().getSPosition(), 13.6));
		this.assertEquals(pbar.getColumns().second().getADistanceBenefit(), 0);
		this.assertEquals(pbar.getColumns().second().getDistanceDelta(), 0.6);			
		
		
		
		var nbar = new NBar([new NPart([new QVoice([2, 4])])]);
		var pbar = new PBar(nbar);
		var calculator = new PBarWidthCalculator();
		var generator = new PSystemBarsGenerator([pbar],  { showFirstClef:false, showFirstKey:false, showFirstTime:false }, null, 400, calculator );
		var system:PSystem = generator.getSystem();
		var systembar:PSystemBar = system.getSystembars().first();
		this.assertEquals(systembar.getBarMeasurements().getContentWidth(), 21.6);		
		this.assertEquals(pbar.getColumns().first().getSPosition(), 1.6);
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit(), 0);
		this.assertEquals(pbar.getColumns().first().getDistanceDelta(), 0.6);		
		this.assertEquals(pbar.getColumns().second().getSPosition(), 13.6);
		this.assertEquals(pbar.getColumns().second().getADistanceBenefit(), 0);
		this.assertEquals(pbar.getColumns().second().getDistanceDelta(), 0.4);		
		systembar.setBarStretch(10);		
		
		this.assertEquals(systembar.getBarMeasurements().getContentWidth(), 31.6);		
		this.assertEquals(pbar.getColumns().first().getSPosition(), 1.6);
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit(), 0);
		this.assertEquals(pbar.getColumns().first().getDistanceDelta(), 0.6);		
		this.assertFloatEquals(pbar.getColumns().second().getSPosition(), 19.6);
		this.assertEquals(pbar.getColumns().second().getADistanceBenefit(), 0);
		this.assertEquals(pbar.getColumns().second().getDistanceDelta(), 0.4);		
		
	}
	
	
	
	
	public function testStretchTwoNotesBenefit()
	{
		var nbar = new NBar([new NPart([new QVoice([16, 16], '#')])]);
		var pbar = new PBar(nbar);
		var calculator = new PBarWidthCalculator();
		var generator = new PSystemBarsGenerator([pbar],  { showFirstClef:false, showFirstKey:false, showFirstTime:false }, null, 400, calculator );
		var system:PSystem = generator.getSystem();
		var systembar:PSystemBar = system.getSystembars().first();
		
		
		this.assertEquals(systembar.getBarMeasurements().getContentWidth().round2(), 15.6);		
		this.assertEquals(pbar.getColumns().first().getAPostion(), 4.2);
		this.assertEquals(pbar.getColumns().first().getSPosition(), 4.2);
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit().round2(), 1.4 );
		
		this.assertEquals(pbar.getColumns().first().getDistanceDelta(), 0.5);
		this.assertEquals(pbar.getColumns().second().getDistanceDelta(), 0.5);
		
		this.assertEquals(pbar.getColumns().second().getAPostion().round2(), 10.6);
		this.assertEquals(pbar.getColumns().second().getSPosition().round2(), 10.6);
		this.assertEquals(pbar.getColumns().second().getADistanceBenefit(), 0);
		this.assertEquals(pbar.getColumns().second().getDistanceDelta(), 0.5);				
		systembar.setBarStretch(2);
		
		this.assertEquals(pbar.getColumns().first().getSPosition().round2(), 4.2);
		this.assertEquals(pbar.getColumns().second().getSPosition().round2(), 11.6);
		
		systembar.setBarStretch(0);
		this.assertEquals(pbar.getColumns().first().getSPosition().round2(), 4.2);
		this.assertEquals(pbar.getColumns().second().getSPosition().round2(), 11.6);		
			
		var nbar = new NBar([new NPart([new QVoice([16, 16], '.#')])]);
		var pbar = new PBar(nbar);
		var calculator = new PBarWidthCalculator();
		var generator = new PSystemBarsGenerator([pbar],  { showFirstClef:false, showFirstKey:false, showFirstTime:false }, null, 400, calculator );
		var system:PSystem = generator.getSystem();
		var systembar:PSystemBar = system.getSystembars().first();
		
		this.assertEquals(systembar.getBarMeasurements().getContentWidth().round2(), 13);		
		this.assertEquals(pbar.getColumns().first().getAPostion(), 1.6);
		this.assertEquals(pbar.getColumns().first().getSPosition(), 1.6);
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit().round2(), 1.4 );
		
		this.assertEquals(pbar.getColumns().first().getDistanceDelta(), 0.5);
		this.assertEquals(pbar.getColumns().second().getDistanceDelta(), 0.5);
		
		this.assertEquals(pbar.getColumns().second().getAPostion().round2(), 8);
		this.assertEquals(pbar.getColumns().second().getSPosition().round2(), 8);
		this.assertEquals(pbar.getColumns().second().getADistanceBenefit(), 0);
		this.assertEquals(pbar.getColumns().second().getDistanceDelta(), 0.5);				
		
		systembar.setBarStretch(2);
		this.assertEquals(pbar.getColumns().first().getSPosition(), 1.6);		
		this.assertEquals(pbar.getColumns().second().getAPostion().round2(), 8);				
		this.assertEquals(systembar.getBarMeasurements().getContentWidth().round2(), 15);		
		
		systembar.setBarStretch(0);
		this.assertEquals(pbar.getColumns().first().getSPosition(), 1.6);	
		this.assertEquals(pbar.getColumns().second().getSPosition().round2(), 9);				
		
	
		var nbar = new NBar([new NPart([new QVoice([16, 16], '##')])]);
		var pbar = new PBar(nbar);
		var calculator = new PBarWidthCalculator();
		var generator = new PSystemBarsGenerator([pbar],  { showFirstClef:false, showFirstKey:false, showFirstTime:false }, null, 400, calculator );
		var system:PSystem = generator.getSystem();
		var systembar:PSystemBar = system.getSystembars().first();
		
		
		this.assertEquals(systembar.getBarMeasurements().getContentWidth().round2(), 15.6);		
		this.assertEquals(pbar.getColumns().first().getAPostion(), 4.2);
		this.assertEquals(pbar.getColumns().first().getSPosition(), 4.2);
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit().round2(), 1.4 );
		
		this.assertEquals(pbar.getColumns().first().getDistanceDelta(), 0.5);
		this.assertEquals(pbar.getColumns().second().getDistanceDelta(), 0.5);
		
		this.assertEquals(pbar.getColumns().second().getAPostion().round2(), 10.6);
		this.assertEquals(pbar.getColumns().second().getSPosition().round2(), 10.6);
		this.assertEquals(pbar.getColumns().second().getADistanceBenefit(), 0);
		this.assertEquals(pbar.getColumns().second().getDistanceDelta(), 0.5);				
		
		systembar.setBarStretch(2);
		this.assertEquals(pbar.getColumns().first().getSPosition(), 4.2);		
		this.assertEquals(pbar.getColumns().second().getAPostion().round2(), 10.6);				
		this.assertEquals(systembar.getBarMeasurements().getContentWidth().round2(), 17.6);				
		
		systembar.setBarStretch(0);
		this.assertEquals(pbar.getColumns().first().getAPostion(), 4.2);		
		this.assertEquals(pbar.getColumns().second().getSPosition().round2(), 11.6);		
		
	}
	
	public function testLinebreak()
	{
		var b0 = new NBar([ new NPart([new QVoice([4, 4, 4], '')], EClef.ClefC, EKey.Flat2)], ETime.Time3_4);	
		var b1 = new NBar([ new NPart([new QVoice([4, 4, 4], '')])]);	
		var b2 = new NBar([ new NPart([new QVoice([4, 4, 4], '')])]);	
		var b3 = new NBar([ new NPart([new QVoice([4, 4, 4], '')])]);	
		var b4 = new NBar([ new NPart([new QVoice([4, 4, 4], '')])]);	
		var b5 = new NBar([ new NPart([new QVoice([4, 4, 4], '')])]);	
		var nscore = new NScore([b0, b1, b2, b3, b4, b5]);
		var score = new PScore(nscore);
		
		var systems:PSystems = score.getSystems(500);		
		this.assertEquals(systems.first().getWidth().round2(), 203.4);
		this.assertEquals(systems.first().getSystembars().length, 6);
		this.assertEquals(systems.length, 1);
		
		var systems:PSystems = score.getSystems(200);		
		this.assertEquals(systems.first().getWidth().round2(), 172.8);
		this.assertEquals(systems.first().getSystembars().length, 5);		
		this.assertEquals(systems.length, 2);
		
		var systems:PSystems = score.getSystems(170);		
		this.assertEquals(systems.first().getWidth(), 142.2);
		this.assertEquals(systems.first().getSystembars().length, 4);		
		this.assertEquals(systems.length, 2);
		
	}
	
	private function assertFloatEquals(a:Float, b:Float)  {
		this.assertTrue(Floats.nearEquals(a, b));		
	}
	
}