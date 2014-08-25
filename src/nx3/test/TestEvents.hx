package nx3.test;
import haxe.unit.TestCase;
import nx3.ESign;
import nx3.events.EvCopyBar;
import nx3.events.EvAddNote;
import nx3.events.EvHeadSign;
import nx3.NBar;
import nx3.NBars;
import nx3.NHead;
import nx3.NHeads;
import nx3.NNote;
import nx3.NNotes;
import nx3.NPart;
import nx3.NParts;
import nx3.NRefTools;
import nx3.NScore;
import nx3.NVoice;
import nx3.PNotes;
import nx3.PScore;
import nx3.xml.NoteXML;
using cx.ArrayTools;
using nx3.NTools;
using nx3.test.TestEvents;
/**
 * ...
 * @author Jonas Nyström
 */
@:access(nx3.NNote)
 
class TestEvents extends TestCase
{
	public function score1():NScore
	{
		var nbar0:NBar = new NBar([
			new NPart([
				new NVoice([
					new NNote([ new NHead(0, ESign.Flat) , ]),		
				]),										
			]),
		]);		
		
		var score = new NScore([nbar0]);
		return score;
	}
	
	public function testEventAddNote()
	{
		var score:NScore = score1();		
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 1);
		var notestoadd = [new NNote([ new NHead(1) ]), new NNote([ new NHead(2) ]), ];
		var target = NRefTools.refNote(score, 0, 0, 0, 0);
		var event = new EvAddNote(target, notestoadd);
		event.doEvent();
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 3);
		event.undoEvent();
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 1);
		event.doEvent();
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 3);
		event.undoEvent();
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 1);
	}
	
	public function testEventHeadSign()
	{
		var score:NScore = score1();		
		this.assertEquals(NRefTools.getHead(NRefTools.refHead(score, 0, 0, 0, 0, 0)).sign, ESign.Flat);
		var target = NRefTools.refHead(score, 0, 0, 0, 0, 0);
		var event = new EvHeadSign(target, ESign.None);
		event.doEvent();
		this.assertEquals(NRefTools.getHead(NRefTools.refHead(score, 0, 0, 0, 0, 0)).sign, ESign.None);
		event.undoEvent();
		this.assertEquals(NRefTools.getHead(NRefTools.refHead(score, 0, 0, 0, 0, 0)).sign, ESign.Flat);
		event.doEvent();
		this.assertEquals(NRefTools.getHead(NRefTools.refHead(score, 0, 0, 0, 0, 0)).sign, ESign.None);
		event.undoEvent();
		this.assertEquals(NRefTools.getHead(NRefTools.refHead(score, 0, 0, 0, 0, 0)).sign, ESign.Flat);
	}	
	
	public function testEventAddBar()
	{
		var score:NScore = score1();	
		var target = NRefTools.refBar(score, 0);
		var event = new EvCopyBar(target);
		event.doEvent();
	}
}












