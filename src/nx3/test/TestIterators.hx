package nx3.test;

import haxe.unit.TestCase;
import nx3.NBar;
import nx3.NHead;
import nx3.NNote;
import nx3.NPart;
import nx3.NScore;
import nx3.NVoice;
import nx3.PBar;
import nx3.PNote;
import nx3.PPart;
import nx3.PVoice;

/**
 * ...
 * @author Jonas Nyström
 */
class TestIterators extends TestCase
{

	public function testNote()
	{
		var item = new NNote([new NHead(0)]);
		this.assertEquals(item.length, 1);
		for (child in item) this.assertTrue(true);
	}
	
	public function testVoice()
	{
		var item = new NVoice( [new NNote([new NHead(0)])]);
		this.assertEquals(item.length, 1);
		for (child in item) this.assertTrue(true);		
	}
	
	public function testPart()
	{
		var item = new NPart([new NVoice( [new NNote([new NHead(0)])])]);
		this.assertEquals(item.length, 1);
		for (child in item) this.assertTrue(true);		
	}
	
	public function testBar()
	{
		var item = new NBar( [new NPart([new NVoice( [new NNote([new NHead(0)])])])]);
		this.assertEquals(item.length, 1);
		for (child in item) this.assertTrue(true);		
	}	
	
	public function testScore()
	{
		var item = new NScore([new NBar( [new NPart([new NVoice( [new NNote([new NHead(0)])])])])]);
		this.assertEquals(item.length, 1);
		for (child in item) this.assertTrue(true);		
	}		
	
	
	public function testPNote()
	{
		var item = new PNote(new NNote([new NHead(0)]));
		this.assertEquals(item.length, 1);
		for (child in item) this.assertTrue(true);
	}	
	
	public function testPVoice()
	{
		var item = new PVoice(    new NVoice( [new NNote([new NHead(0)])])   );
		this.assertEquals(item.length, 1);
		for (child in item) this.assertTrue(true);
	}	
	
	public function testPPart()
	{
		var item = new PPart(  new NPart([new NVoice( [new NNote([new NHead(0)])])])   );
		this.assertEquals(item.length, 1);
		for (child in item) this.assertTrue(true);
	}		
	
	public function testPBar()
	{
		var item = new PBar(   new NBar( [new NPart([new NVoice( [new NNote([new NHead(0)])])])])   );
		this.assertEquals(item.length, 1);
		for (child in item) this.assertTrue(true);
	}		
	
}