package nx3.test;
import haxe.unit.TestCase;
import nx3.EDirectionUAD;
import nx3.ETie;
import nx3.NHead;
import nx3.NNote;
import nx3.PNote;
using cx.ArrayTools;

/**
 * ...
 * @author Jonas Nyström
 */
class TestLazy extends TestCase
{

	public function testNote() 
	{
		var item = new NNote([new NHead(0, ETie.Tie(EDirectionUAD.Auto, 0))]);
		this.assertEquals(item.headLevels.toString(), [0].toString());
		this.assertEquals(item.topLevel, 0);
		this.assertEquals(item.bottomLevel, 0);
		this.assertEquals(Std.string(item.ties.first()), Std.string(ETie.Tie(EDirectionUAD.Auto, 0)));		
	}
	
	public function testPNote()
	{
		var item = new PNote(new NNote([new NHead(0/*, ETie.Tie(EDirectionUAD.Auto, 0)*/), new NHead(0/*, ETie.Tie(EDirectionUAD.Auto, 0)*/)]));		
		this.assertEquals(item.getHasTie(), false);
		
		var item = new PNote(new NNote([new NHead(0, ETie.Tie(EDirectionUAD.Auto, 0)), new NHead(0/*, ETie.Tie(EDirectionUAD.Auto, 0)*/)]));		
		this.assertEquals(item.getHasTie(), true);

		var item = new PNote(new NNote([new NHead(0, ETie.Tie(EDirectionUAD.Auto, 0)), new NHead(0, ETie.Tie(EDirectionUAD.Auto, 0))]));		
		this.assertEquals(item.getHasTie(), true);
		
		var pbar = TestItems.pbarTest();
		
		
	}
	
	
	
	
}