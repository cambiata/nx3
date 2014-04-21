package nx3.test;

import haxe.unit.TestCase;
import nx3.EDirectionUD;
import nx3.geom.Rectangle;
import nx3.NBar;
import nx3.NHead;
import nx3.NNote;
import nx3.NPart;
import nx3.NVoice;
import nx3.PColumnsDistancesCalculator;
import nx3.PComplex;
import nx3.PNote;
import nx3.PPart;
import nx3.PPartComplexesGenerator;
import nx3.PVoice;
import nx3.QNote.QLyric4;
import nx3.QNote.QNote1;
import nx3.QNote.QNote16;
import nx3.QNote.QNote2;
import nx3.QNote.QNote4;
import nx3.QNote.QNote8;
import nx3.QVoice;
using cx.ArrayTools;
using nx3.VMapTools;
using cx.MathTools;
using Lambda;
/**
 * ...
 * @author Jonas Nyström
 */
@:access(nx3.PPartComplexesGenerator)
class TestP extends TestCase
{

	public function testPNote()
	{
		var nnote = new NNote([new NHead(0)]);
		var pnote = new PNote(nnote);
		this.assertEquals(pnote.nnote.nheads.length, 1);
		this.assertEquals(pnote.getPHeads().length, 1);
		this.assertEquals(pnote.getPHeads().first().pnote, pnote);
	}
	
	public function testPNoteHeadsRects()
	{
		var part = new PPart(new NPart([new NVoice([new NNote([
			new NHead(0),
		])])]));
		var note = part.getPVoices().first().getNotes().first();
		var rects = note.getHeadsRects();
		this.assertEquals(rects.length, 1);
		this.assertTrue(rectEquals(rects.first(), -1.6, -1.0, 3.2, 2.0));

		var part = new PPart(new NPart([new NVoice([
			new QNote4([0,-1]),
		])]));
		var note0 = part.getPVoices().first().getNotes().first();
		var rects0 = note0.getHeadsRects();
		this.assertEquals(rects0.length, 2);
		this.assertEquals(note0.getDirection(), EDirectionUD.Down);
		this.assertTrue(rectEquals(rects0.first(), -1.6, -2.0, 3.2, 2.0));
		this.assertTrue(rectEquals(rects0.second(), -4.8, -1, 3.2, 2.0));
		
		var part = new PPart(new NPart([new NVoice([
			new QNote4([0,1]),
		])]));
		var note0 = part.getPVoices().first().getNotes().first();
		var rects0 = note0.getHeadsRects();
		this.assertEquals(rects0.length, 2);
		this.assertEquals(note0.getDirection(), EDirectionUD.Up);
		this.assertTrue(rectEquals(rects0.first(), 1.6, -1, 3.2, 2.0));
		this.assertTrue(rectEquals(rects0.second(), -1.6, 0, 3.2, 2.0));
	}
	
	public function testPVoice()
	{
		var nvoice =  new NVoice([new NNote([new NHead(0)])]);
		var voice = new PVoice(nvoice);
		this.assertEquals(voice.nvoice.nnotes.length, 1);
		this.assertEquals(voice.getNotes().length, 1);
		this.assertEquals(voice.getNotes().first().voice, voice);		
	}
	
	public function testPVoiceBeamgroups()
	{
		var voice = new PVoice(new QVoice([8, 8, 8, 8, 8, 8]));
		var beamgroups:PBeamgroups = voice.getBeamgroups([ENoteVal.Nv4dot]);
		this.assertEquals(2, beamgroups.length);
		this.assertEquals(3, beamgroups[0].pnotes.length);
		this.assertEquals(3, beamgroups[1].pnotes.length);		
		this.assertEquals(voice.getNotes().first().getBeamgroup(), beamgroups.first());
		this.assertEquals(voice.getNotes().second().getBeamgroup(), beamgroups.first());
		this.assertEquals(voice.getNotes().third().getBeamgroup(), beamgroups.first());
		this.assertEquals(voice.getNotes().fourth().getBeamgroup(), beamgroups.second());
		this.assertEquals(voice.getNotes().fifth().getBeamgroup(), beamgroups.second());
		this.assertEquals(voice.getNotes().sixth().getBeamgroup(), beamgroups.second());		
	}
	
	public function testPVoiceBeamgroupsPNote()
	{
		var voice = new PVoice(new QVoice([8, 8, 8, 8, 8, 8]));	
		var beamgroup:PBeamgroup = voice.getNotes().first().getBeamgroup();
		this.assertEquals(beamgroup.pnotes.first(), voice.getNotes().first());
		this.assertEquals(beamgroup.pnotes.second(), voice.getNotes().second());
	}
	
	public function testBeamgroupDirection()
	{
		var calculator = new PBeamgroupDirectionCalculator(new PBeamgroup([new PNote(new QNote4(0))]));
		var direction = calculator.getDirection();
		this.assertEquals(calculator.getDirection(), EDirectionUD.Down);
	}
	
	public function testPartbeamgroupsDirectionsTwoVoices()
	{
		var vpart = new PPart(new NPart([
			new QVoice([8, 8, 8, 8], [ -1, -1, -1, -1]),
			new QVoice([8,8], [1, 1]),
		]));	
		
		this.assertEquals(vpart.getPVoices().first().getBeamgroups().first().getDirection(), EDirectionUD.Up);
		this.assertEquals(vpart.getPVoices().first().getBeamgroups().second().getDirection(), EDirectionUD.Down);
		this.assertEquals(vpart.getPVoices().second().getBeamgroups().first().getDirection(), EDirectionUD.Down);
	}	

	public function testPVoiceNoteDirections()
	{
		var vpart = new PPart(new NPart([
			new QVoice([8, 8, 8, 8], [ -1, -1, -1, -1]),
			new QVoice([8,8], [1, 1]),
		]));	
		
		var voice0 = vpart.getPVoices().first();
		this.assertEquals(voice0.getNotes().first().getDirection(), EDirectionUD.Up);
		this.assertEquals(voice0.getNotes().second().getDirection(), EDirectionUD.Up);
		this.assertEquals(voice0.getNotes().third().getDirection(), EDirectionUD.Down);
		this.assertEquals(voice0.getNotes().fourth().getDirection(), EDirectionUD.Down);
		var voice1 = vpart.getPVoices().second();
		this.assertEquals(voice1.getNotes().first().getDirection(), EDirectionUD.Down);
		this.assertEquals(voice1.getNotes().second().getDirection(), EDirectionUD.Down);
	}	
	
	
	public function testPPart()
	{
		var npart =  new NPart([new NVoice([new NNote([new NHead(0)])])]);
		var ppart = new PPart(npart);
		this.assertEquals(ppart.npart.nvoices.length, 1);
		this.assertEquals(ppart.getPVoices().length, 1);
		this.assertEquals(ppart.getPVoices().first().part, ppart);		
	}	
	
	/*
	public function testPPartComplexesGenerator()
	{
		var voice = new PVoice(new QVoice([4, 8, 8, 2]));
		var generator = new PPartComplexesGenerator([voice]);
		
		var complexes = generator.getComplexes();
		var keys = generator.positionsMap.keys().keysToArray();
		keys.sort(function(a, b) { return Reflect.compare(a, b); } );			
		this.assertEquals(keys.toString(), [0, 3024, 4536, 6048].toString());
		this.assertEquals(complexes.length, 4);

		var voice0 = new PVoice(new QVoice([4, 8, 8, 2]));
		var voice1 = new PVoice(new QVoice([4, 4, 2]));
		var generator = new PPartComplexesGenerator([voice0, voice1]);
		var complexes = generator.getComplexes();
		var keys = generator.positionsMap.keys().keysToArray();
		keys.sort(function(a, b) { return Reflect.compare(a, b); } );					
		this.assertEquals(keys.toString(), [0, 3024, 4536, 6048].toString());
		this.assertEquals(complexes.length, 4);
		this.assertEquals(complexes.first().getNotes().length, 2);
		this.assertEquals(complexes.second().getNotes().length, 2);
		this.assertEquals(complexes.third().getNotes().length, 1);
		this.assertEquals(complexes.fourth().getNotes().length, 2);	
	}
	´*/
	
	public function testPPartComplexes2()
	{
		var ppart = new PPart(new NPart([
			new QVoice([4, 8, 8, 2]),
			new QVoice([4, 4, 2]),
		]));
		var complexes = ppart.getComplexes();
		var positions = complexes.map(function(v:PComplex) { return v.getPosition(); } );
		this.assertEquals(positions.toString(), [0, 3024, 4536, 6048].toString());		
		this.assertEquals(complexes.first().getNotes().length, 2);
		this.assertEquals(complexes.first(), ppart.getPVoices().first().getNotes().first().getComplex());
		this.assertEquals(complexes.first(), ppart.getPVoices().second().getNotes().first().getComplex());
		this.assertEquals(complexes.second().getNotes().length, 2);
		this.assertEquals(complexes.second(), ppart.getPVoices().first().getNotes().second().getComplex());
		this.assertEquals(complexes.second(), ppart.getPVoices().second().getNotes().second().getComplex());
		this.assertEquals(complexes.third().getNotes().length, 1);
		this.assertEquals(complexes.third(), ppart.getPVoices().first().getNotes().third().getComplex());
		this.assertEquals(complexes.fourth().getNotes().length, 2);
		this.assertEquals(complexes.fourth(), ppart.getPVoices().first().getNotes().fourth().getComplex());
		this.assertEquals(complexes.fourth(), ppart.getPVoices().second().getNotes().third().getComplex());		
		
		var ppart = new PPart(new NPart([
			new QVoice([4, 2, 4]),
			new QVoice([2, 4, 4]),
		]));		
		
		var note0 = ppart.getPVoices().first().getNotes().first();
		var complex = note0.getComplex();
		this.assertEquals(note0, complex.getNotes().first());
		
		var complexes = ppart.getComplexes();
		this.assertEquals(complexes.first().getNotes().length, 2);
		this.assertEquals(complexes.first(), ppart.getPVoices().first().getNotes().first().getComplex());
		this.assertEquals(complexes.first(), ppart.getPVoices().second().getNotes().first().getComplex());
		this.assertEquals(complexes.second().getNotes().length, 1);
		this.assertEquals(complexes.second(), ppart.getPVoices().first().getNotes().second().getComplex());
		this.assertEquals(complexes.third().getNotes().length, 1);
		this.assertEquals(complexes.third(), ppart.getPVoices().second().getNotes().second().getComplex());
		this.assertEquals(complexes.fourth().getNotes().length, 2);
		this.assertEquals(complexes.fourth(), ppart.getPVoices().first().getNotes().third().getComplex());
		this.assertEquals(complexes.fourth(), ppart.getPVoices().second().getNotes().third().getComplex());		
	}
	
	
	
	public function testPBar()
	{
		var nbar =  new NBar( [new NPart([new NVoice([new NNote([new NHead(0)])])])]);
		var pbar = new PBar(nbar);
		this.assertEquals(pbar.nbar.nparts.length, 1);
		this.assertEquals(pbar.getParts().length, 1);
		this.assertEquals(pbar.getParts().first().bar, pbar);		
	}		
	
	
	public function testPBarColumns()
	{
		var pbar = TestItems.pbarColumns1();
		var columns = pbar.getColumns();		
		this.assertEquals(columns.length, 4);
		this.assertEquals(columns.first().getPosition(), 0);
		this.assertEquals(columns.first().getComplexes().first().getPosition(), 0);
		this.assertEquals(columns.first().getComplexes().second().getPosition(), 0);
		
		this.assertEquals(columns.second().getPosition(), 3024);
		this.assertEquals(columns.second().getComplexes().first(), null);
		this.assertEquals(columns.second().getComplexes().second().getPosition(), 3024);
		
		this.assertEquals(columns.third().getPosition(), 6048);
		this.assertEquals(columns.third().getComplexes().first().getPosition(), 6048);
		this.assertEquals(columns.third().getComplexes().second(), null);		
	}
	
	
	public function testPBarColumns2()
	{
		
		var pbar = TestItems.pbarColumns1();
		var column = pbar.getParts().first().getPVoices().first().getNotes().first().getComplex().getColumn();		
		this.assertEquals(column, pbar.getColumns().first());				
		
	}	
	
	public function testPBarColumnsDistances()
	{
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(0),
					new QNote4(0),
					new QNote4(0),
					new QNote4(0),
					new QNote4(0),
					]),
			]),
			new NPart([	
				new NVoice([				
					new QNote2(0),					
					new QNote2(0),					
					new QNote4(0),					
				]),
			]),			
		]));		
		
		var calculator = new PColumnsDistancesCalculator(pbar);
		//calculator.calculate();
		
		this.assertTrue(true);
	}
	
	

	function rectEquals(a:Rectangle, bx:Float=-1, by:Float=-1, bwidth:Float=-1, bheight:Float=-1): Bool
	{
		var result:Bool = false;
			if (bwidth == -1 || bheight==-1) throw "Rect comparison error";
			result =  MathTools.floatEquals(a.x, bx) && MathTools.floatEquals(a.y, by) && MathTools.floatEquals(a.width, bwidth) && MathTools.floatEquals(a.height, bheight);		
			if (!result) trace(['Rectangle not equal', Std.string(a) , Std.string(new Rectangle(bx, by, bwidth, bheight))]);
			return result;
	}
	
	
}	