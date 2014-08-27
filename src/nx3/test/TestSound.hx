package nx3.test;
import haxe.unit.TestCase;
import nx3.audio.NoteSoundCalculator;
import nx3.NBar;
import nx3.NHead;
import nx3.NNote;
import nx3.NPart;
import nx3.NVoice;
import nx3.PBar;

/**
 * ...
 * @author Jonas Nyström
 */
class TestSound extends TestCase
{
	public function testSoundCalc1()
	{
		this.assertTrue(true);
				
		var bar = new PBar(new NBar([new NPart([new NVoice([new NNote([new NHead(0)])])])]));
		var note = bar.getPart(0).getVoice(0).getNote(0);
		
		var sc = new NoteSoundCalculator();		
		var midinotes = sc.getMidiNotes(note);
		/*
		trace(sc.toneFromKey(-1, EKey.Natural));
		trace(sc.toneFromKey(0, EKey.Natural));
		trace(sc.toneFromKey(1, EKey.Natural));
		trace(sc.toneFromKey(2, EKey.Natural));
		trace(sc.toneFromKey(3, EKey.Natural));
		trace(sc.toneFromKey(4, EKey.Natural));
		trace(sc.toneFromKey(5, EKey.Natural));
		trace(sc.toneFromKey(6, EKey.Natural));
		trace(sc.toneFromKey(7, EKey.Natural));
		trace('');
		trace(sc.toneFromKey(-1, EKey.Flat1));
		trace(sc.toneFromKey(0, EKey.Flat1));
		trace(sc.toneFromKey(1, EKey.Flat1));
		trace(sc.toneFromKey(2, EKey.Flat1));
		trace(sc.toneFromKey(3, EKey.Flat1));
		trace(sc.toneFromKey(4, EKey.Flat1));
		trace(sc.toneFromKey(5, EKey.Flat1));
		trace(sc.toneFromKey(6, EKey.Flat1));
		trace(sc.toneFromKey(7, EKey.Flat1));		
		trace('');
		trace(sc.toneFromKey(-1, EKey.Sharp1));
		trace(sc.toneFromKey(0, EKey.Sharp1));
		trace(sc.toneFromKey(1, EKey.Sharp1));
		trace(sc.toneFromKey(2, EKey.Sharp1));
		trace(sc.toneFromKey(3, EKey.Sharp1));
		trace(sc.toneFromKey(4, EKey.Sharp1));
		trace(sc.toneFromKey(5, EKey.Sharp1));
		trace(sc.toneFromKey(6, EKey.Sharp1));
		trace(sc.toneFromKey(7, EKey.Sharp1));			
		*/
	}
	
	
	
}