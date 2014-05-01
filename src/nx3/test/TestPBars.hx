package nx3.test;
import haxe.unit.TestCase;
import nx3.EClef;
import nx3.EKey;
import nx3.ETime;
import nx3.NBar;
import nx3.NPart;
import nx3.PBar;
import nx3.PBars;
import nx3.PBarWidthCalculator;
import nx3.PSystem;
import nx3.PSystemGenerator;
import nx3.QVoice;
using cx.ArrayTools;
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
		var generator = new PSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 }, calculator );
		var system:PSystem = generator.getSystem();		
		this.assertEquals(system.getSystembars().first().actAttributes.clefs.toString(), [EClef.ClefC].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.keys.toString(), [EKey.Flat2].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.time, ETime.Time2_4);	
		this.assertEquals(system.getSystembars().length, 1);
		this.assertEquals(system.getWidth(), 49.6);
		//this.assertEquals(system.getSystembars().first().contentwidth, 33.6);
		
		
	}
	
}