package nx3.test;

import haxe.unit.TestCase;
import nx3.EAllotment;
import nx3.EBeamflagType;
import nx3.EDirectionUAD;
import nx3.EDirectionUD;
import nx3.ENoteVal;
import nx3.ETie;
import nx3.geom.Rectangle;
import nx3.NBar;
import nx3.NHead;
import nx3.NNote;
import nx3.NPart;
import nx3.NVoice;
import nx3.PBar;
import nx3.PColumn;
import nx3.PColumnsDistancesCalculator;
import nx3.PComplex;
import nx3.PComplexTieTargetCalculator;
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
		this.assertEquals(pnote.getHeads().length, 1);
		this.assertEquals(pnote.getHeads().first().pnote, pnote);
	}
	
	public function testPNoteHeadsRects()
	{
		var part = new PPart(new NPart([new NVoice([new NNote([
			new NHead(0),
		])])]));
		var note = part.getVoices().first().getNotes().first();
		var rects = note.getHeadsRects();
		this.assertEquals(rects.length, 1);
		this.assertTrue(rectEquals(rects.first(), -1.6, -1.0, 3.2, 2.0));

		var part = new PPart(new NPart([new NVoice([
			new QNote4([0,-1]),
		])]));
		var note0 = part.getVoices().first().getNotes().first();
		var rects0 = note0.getHeadsRects();
		this.assertEquals(rects0.length, 2);
		this.assertEquals(note0.getDirection(), EDirectionUD.Down);
		this.assertTrue(rectEquals(rects0.first(), -1.6, -2.0, 3.2, 2.0));
		this.assertTrue(rectEquals(rects0.second(), -4.8, -1, 3.2, 2.0));
		
		var part = new PPart(new NPart([new NVoice([
			new QNote4([0,1]),
		])]));
		var note0 = part.getVoices().first().getNotes().first();
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
		
		this.assertEquals(vpart.getVoices().first().getBeamgroups().first().getDirection(), EDirectionUD.Up);
		this.assertEquals(vpart.getVoices().first().getBeamgroups().second().getDirection(), EDirectionUD.Down);
		this.assertEquals(vpart.getVoices().second().getBeamgroups().first().getDirection(), EDirectionUD.Down);
	}	
	
	public function testBeamflags()
	{
		var vpart = new PPart(new NPart([
			new QVoice([16, 16, 16, 16]),			
		]));			
		
		var beamgroup = vpart.getVoices().first().getBeamgroups().first();
		this.assertEquals(beamgroup.getFrame().beamflags.toString(), [EBeamflagType.Full16, EBeamflagType.Full16, EBeamflagType.Full16, ].toString());
		
	}

	public function testPVoiceNoteDirections()
	{
		var vpart = new PPart(new NPart([
			new QVoice([8, 8, 8, 8], [ -1, -1, -1, -1]),
			new QVoice([8,8], [1, 1]),
		]));	
		
		var voice0 = vpart.getVoices().first();
		this.assertEquals(voice0.getNotes().first().getDirection(), EDirectionUD.Up);
		this.assertEquals(voice0.getNotes().second().getDirection(), EDirectionUD.Up);
		this.assertEquals(voice0.getNotes().third().getDirection(), EDirectionUD.Down);
		this.assertEquals(voice0.getNotes().fourth().getDirection(), EDirectionUD.Down);
		var voice1 = vpart.getVoices().second();
		this.assertEquals(voice1.getNotes().first().getDirection(), EDirectionUD.Down);
		this.assertEquals(voice1.getNotes().second().getDirection(), EDirectionUD.Down);
	}	
	
	
	public function testPPart()
	{
		var npart =  new NPart([new NVoice([new NNote([new NHead(0)])])]);
		var ppart = new PPart(npart);
		this.assertEquals(ppart.npart.nvoices.length, 1);
		this.assertEquals(ppart.getVoices().length, 1);
		this.assertEquals(ppart.getVoices().first().part, ppart);		
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
		var positions = complexes.map(function(v:PComplex) { return v.getValueposition(); } );
		this.assertEquals(positions.toString(), [0, 3024, 4536, 6048].toString());		
		this.assertEquals(complexes.first().getNotes().length, 2);
		this.assertEquals(complexes.first(), ppart.getVoices().first().getNotes().first().getComplex());
		this.assertEquals(complexes.first(), ppart.getVoices().second().getNotes().first().getComplex());
		this.assertEquals(complexes.second().getNotes().length, 2);
		this.assertEquals(complexes.second(), ppart.getVoices().first().getNotes().second().getComplex());
		this.assertEquals(complexes.second(), ppart.getVoices().second().getNotes().second().getComplex());
		this.assertEquals(complexes.third().getNotes().length, 1);
		this.assertEquals(complexes.third(), ppart.getVoices().first().getNotes().third().getComplex());
		this.assertEquals(complexes.fourth().getNotes().length, 2);
		this.assertEquals(complexes.fourth(), ppart.getVoices().first().getNotes().fourth().getComplex());
		this.assertEquals(complexes.fourth(), ppart.getVoices().second().getNotes().third().getComplex());		
		
		var ppart = new PPart(new NPart([
			new QVoice([4, 2, 4]),
			new QVoice([2, 4, 4]),
		]));		
		
		var note0 = ppart.getVoices().first().getNotes().first();
		var complex = note0.getComplex();
		this.assertEquals(note0, complex.getNotes().first());
		
		var complexes = ppart.getComplexes();
		this.assertEquals(complexes.first().getNotes().length, 2);
		this.assertEquals(complexes.first(), ppart.getVoices().first().getNotes().first().getComplex());
		this.assertEquals(complexes.first(), ppart.getVoices().second().getNotes().first().getComplex());
		this.assertEquals(complexes.second().getNotes().length, 1);
		this.assertEquals(complexes.second(), ppart.getVoices().first().getNotes().second().getComplex());
		this.assertEquals(complexes.third().getNotes().length, 1);
		this.assertEquals(complexes.third(), ppart.getVoices().second().getNotes().second().getComplex());
		this.assertEquals(complexes.fourth().getNotes().length, 2);
		this.assertEquals(complexes.fourth(), ppart.getVoices().first().getNotes().third().getComplex());
		this.assertEquals(complexes.fourth(), ppart.getVoices().second().getNotes().third().getComplex());		
	}
	
	public function testPBarComplexDots()
	{
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
						new NNote([new NHead(-3)], ENoteVal.Nv4dot),
					]),
			]),
		]));		
		var complex = pbar.getColumns().first().getComplexes().first();		
		var rects = complex.getDotRects();
		this.assertEquals(rects.length, 1);
	}
	
	public function testPBarComplexTies()
	{
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
						new NNote([new NHead(0, ETie.Tie(EDirectionUAD.Auto, 0))], ENoteVal.Nv4),
					]),
			]),
		]));		
		
		var complex = pbar.getColumns().first().getComplexes().first();		
		var rects = complex.getTieRects();
		//trace(rects);
		
		this.assertTrue(true);
		
		
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
						new NNote([new NHead(0)], ENoteVal.Nv4),
						new NNote([new NHead(0, ETie.Tie(EDirectionUAD.Auto, 0))], ENoteVal.Nv4),
						new NNote([new NHead(0)], ENoteVal.Nv4),				
					]),
				new NVoice([				
					new NNote([new NHead(0, ETie.Tie(EDirectionUAD.Auto, 0))], ENoteVal.Nv2),
					new NNote([new NHead(0)], ENoteVal.Nv4),				
					]),
			]),
		]));				
		
	}
	
	
	public function testPBarComplexTieinfos()
	{
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
						new NNote([new NHead(0, ETie.Tie(EDirectionUAD.Auto, 0))], ENoteVal.Nv4),
						new QNote4(),
					]),
			]),
		]));				
		this.assertEquals( pbar.getColumns().first().getComplexes().first().getTieinfos().length, 1);
		this.assertEquals( pbar.getColumns().first().getComplexes().first().getTieinfos().first().direction, EDirectionUD.Up);

		
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
						new NNote([new NHead(1, ETie.Tie(EDirectionUAD.Auto, 0))], ENoteVal.Nv4),
						new QNote4(),
					]),
			]),
		]));				
		this.assertEquals( pbar.getColumns().first().getComplexes().first().getTieinfos().length, 1);
		this.assertEquals( pbar.getColumns().first().getComplexes().first().getTieinfos().first().direction, EDirectionUD.Down);

		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
						new NNote([new NHead(1, ETie.Tie(EDirectionUAD.Auto, 0)), new NHead(3, ETie.Tie(EDirectionUAD.Auto, 0))], ENoteVal.Nv4),
						new QNote4(),
					]),
			]),
		]));				
		this.assertEquals( pbar.getColumns().first().getComplexes().first().getTieinfos().length, 2);
		this.assertEquals( pbar.getColumns().first().getComplexes().first().getTieinfos().first().direction, EDirectionUD.Up);
		this.assertEquals( pbar.getColumns().first().getComplexes().first().getTieinfos().second().direction, EDirectionUD.Down);
		
	}

	public function testPBarComplexTieTargets()
	{
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
						new NNote([new NHead(0, ETie.Tie(EDirectionUAD.Auto, 0))], ENoteVal.Nv4),
						new QNote4(0),
					]),
			]),
		]));				
		this.assertEquals( pbar.getColumns().first().getComplexes().first().getTieinfos().length, 1);
		this.assertEquals( pbar.getColumns().first().getComplexes().first().getTieinfos().first().direction, EDirectionUD.Up);	
		var tieinfos =  pbar.getColumns().first().getComplexes().first().getTieinfos();
		//trace(tieinfos);
		var calculator = new PComplexTieTargetCalculator(tieinfos);
		tieinfos = calculator.findTargetHeads();
		//trace(tieinfos);
		this.assertEquals(tieinfos.first().head, pbar.getColumns().first().getComplexes().first().getNotes().first().getHeads().first());
		this.assertEquals(tieinfos.first().target, pbar.getColumns().second().getComplexes().first().getNotes().first().getHeads().first());				
	}
	
	
	public function testPBarFindNextColumnComplex()
	{
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(0),
					new QNote2(0),
					]),
			]),
			
			new NPart([	
				new NVoice([				
					new QNote2(0),
					new QNote4(0),
					]),
			]),
		]));			
		
		var complex0 = pbar.getColumns().first().getComplexes().first();
		var complex1 = complex0.getNext();
		this.assertEquals(complex1, pbar.getColumns().second().getComplexes().first());
		
		var complexA = pbar.getColumns().first().getComplexes().second();
		var complexC = pbar.getColumns().third().getComplexes().second();
		this.assertEquals(complexA.getNext(), complexC);
	}
	
	
	/*
	public function testPBarY()
	{
		var bar = TestItems.pbarTest();
		this.assertEquals( bar.getParts().first().getYPosition(), 0);
		this.assertEquals( bar.getParts().second().getYPosition(), 100);
		
		this.assertEquals(bar.getColumns().first().getComplexes().first().getNotes().first().getYPosition(), 0);
		//this.assertEquals(bar.getColumns().first().getComplexes().second().getNotes().first().getYPosition(), 100);
		
		this.assertEquals(bar.getColumns().first().getComplexes().second().getNotes().first().getComplex().getPart(), bar.getParts().second());
		var note = bar.getParts().second().getVoices().first().getNotes().first();
		trace(note.getYPosition());
	}
	*/
	
	/*
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
		this.assertEquals(columns.first().getValueposition(), 0);
		this.assertEquals(columns.first().getComplexes().first().getValueposition(), 0);
		this.assertEquals(columns.first().getComplexes().second().getValueposition(), 0);
		
		this.assertEquals(columns.second().getValueposition(), 3024);
		this.assertEquals(columns.second().getComplexes().first(), null);
		this.assertEquals(columns.second().getComplexes().second().getValueposition(), 3024);
		
		this.assertEquals(columns.third().getValueposition(), 6048);
		this.assertEquals(columns.third().getComplexes().first().getValueposition(), 6048);
		this.assertEquals(columns.third().getComplexes().second(), null);		
	}
	
	public function testPBarColumns2()
	{
		var pbar = TestItems.pbarColumns1();
		var column = pbar.getParts().first().getVoices().first().getNotes().first().getComplex().getColumn();		
		this.assertEquals(column, pbar.getColumns().first());				
	}	
	
	*/

	
	public function testPBarColumnsDistances()
	{
		
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(0),
					]),
			]),
		]));		
		this.assertEquals(pbar.getColumns().first().getMPosition(), 0);
		this.assertEquals(pbar.getColumns().first().getMDistance(), 1.6);
		
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(0),
					new QNote4(0),
					]),
			]),
		]));		
		this.assertEquals(pbar.getColumns().first().getMPosition(), 0);
		this.assertEquals(pbar.getColumns().first().getMDistance(), 3.2); // distance between notes Nv4!
		this.assertEquals(pbar.getColumns().second().getMPosition(), 3.2);
		this.assertEquals(pbar.getColumns().second().getMDistance(), 1.6); // distance after last note Nv4!
		
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote1(0),
					new QNote4(0),
					]),
			]),
		]));		
		this.assertEquals(pbar.getColumns().first().getMPosition(), 0);
		this.assertEquals(pbar.getColumns().first().getMDistance(), 3.8); // distance between notes Nv1 and Nv4!
		this.assertEquals(pbar.getColumns().second().getMDistance(), 1.6); // distance after last note Nv4!
		
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(0),
					new QNote1(0),
					]),
			]),
		]));		
		this.assertEquals(pbar.getColumns().first().getMPosition(), 0);
		this.assertEquals(pbar.getColumns().first().getMDistance(), 3.8); // distance between notes Nv1 and Nv4!
		this.assertEquals(pbar.getColumns().second().getMPosition(), 3.8);
		this.assertEquals(pbar.getColumns().second().getMDistance(), 2.2); // distance after last note Nv4!		
		
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(0),
					new QNote4(0, '#'),
					]),
			]),
		]));		
		this.assertEquals(pbar.getColumns().first().getMPosition(), 0);
		this.assertEquals(pbar.getColumns().first().getMDistance(), 5.8); // distance between notes Nv4!
		this.assertEquals(pbar.getColumns().second().getMPosition(), 5.8);
		this.assertEquals(pbar.getColumns().second().getMDistance().round2(), 1.6); // distance after last note Nv4!		
		
	}
	
	public function testPBarColumnWidths()
	{
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(0),
					new QNote4(0),
					]),
			]),
			new NPart([	
				new NVoice([				
					new QNote4(0, '#'),
					new QNote1(0),
					]),
			]),
		]));				
		
		this.assertEquals(pbar.getColumns().last().getRightX(), 2.2);
		this.assertEquals(pbar.getColumns().first().getLeftX(), -4.2);		
	}
	
	public function testPBarColumnsAllotmentTypes()
	{
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote2(0),
					new QNote4(0),
					new QNote8(0),
					new QNote8(0),
					]),
			]),
		], EAllotment.Linear));				

		this.assertEquals(pbar.getColumns().first().getMDistance(), 3.2);
		this.assertEquals(pbar.getColumns().first().getADistance(), 16);
		this.assertEquals(pbar.getColumns().first().getAPostion(), 0);
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit(), 0);

		this.assertEquals(pbar.getColumns().second().getMDistance(), 3.2);
		this.assertEquals(pbar.getColumns().second().getADistance(), 8);
		this.assertEquals(pbar.getColumns().second().getAPostion(), 16);
		this.assertEquals(pbar.getColumns().second().getADistanceBenefit(), 0);		
		
		this.assertEquals(pbar.getColumns().third().getMDistance(), 3.2);
		this.assertEquals(pbar.getColumns().third().getADistance(), 4);
		this.assertEquals(pbar.getColumns().third().getAPostion(), 24);
		this.assertEquals(pbar.getColumns().third().getADistanceBenefit(), 0);				
		
		this.assertEquals(pbar.getColumns().fourth().getMDistance(), 1.6);
		this.assertEquals(pbar.getColumns().fourth().getADistance(), 4);
		this.assertEquals(pbar.getColumns().fourth().getAPostion(), 28);
		this.assertEquals(pbar.getColumns().fourth().getADistanceBenefit(), 0);		

		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote2(0),
					new QNote4(0),
					new QNote8(0),
					new QNote8(0),
					]),
			]),
		], EAllotment.Logaritmic));				

		this.assertEquals(pbar.getColumns().first().getMDistance(), 3.2);
		this.assertEquals(pbar.getColumns().first().getADistance(), 12);
		this.assertEquals(pbar.getColumns().first().getAPostion(), 0);
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit(), 0);

		this.assertEquals(pbar.getColumns().second().getMDistance(), 3.2);
		this.assertEquals(pbar.getColumns().second().getADistance(), 8);
		this.assertEquals(pbar.getColumns().second().getAPostion(), 12);
		this.assertEquals(pbar.getColumns().second().getADistanceBenefit(), 0);		
		
		this.assertEquals(pbar.getColumns().third().getMDistance(), 3.2);
		this.assertEquals(pbar.getColumns().third().getADistance(), 6);
		this.assertEquals(pbar.getColumns().third().getAPostion(), 20);
		this.assertEquals(pbar.getColumns().third().getADistanceBenefit(), 0);				
		
		this.assertEquals(pbar.getColumns().fourth().getMDistance(), 1.6);
		this.assertEquals(pbar.getColumns().fourth().getADistance(), 6);
		this.assertEquals(pbar.getColumns().fourth().getAPostion(), 26);
		this.assertEquals(pbar.getColumns().fourth().getADistanceBenefit(), 0);				
		
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(0),
					new QNote4(0),
					]),
			]),
			new NPart([	
				new NVoice([				
					new QNote1(0),
					]),
			]),
		], EAllotment.Linear));				
		
		this.assertEquals(pbar.getColumns().first().getMDistance(), 3.2);
		this.assertEquals(pbar.getColumns().first().getADistance(), 8);
		this.assertEquals(pbar.getColumns().first().getAPostion(), 0);
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit(), 0);		
		
		this.assertEquals(pbar.getColumns().second().getMDistance(), 1.6);
		this.assertEquals(pbar.getColumns().second().getADistance(), 24);
		this.assertEquals(pbar.getColumns().second().getAPostion(), 8);
		this.assertEquals(pbar.getColumns().second().getADistanceBenefit(), 0);				
		
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(0),
					new QNote4(0),
					]),
			]),
			new NPart([	
				new NVoice([				
					new QNote1(0),
					]),
			]),
		], EAllotment.Logaritmic));				
		
		this.assertEquals(pbar.getColumns().first().getMDistance(), 3.2);
		this.assertEquals(pbar.getColumns().first().getADistance(), 8);
		this.assertEquals(pbar.getColumns().first().getAPostion(), 0);
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit(), 0);		
		
		this.assertEquals(pbar.getColumns().second().getMDistance(), 1.6);
		this.assertEquals(pbar.getColumns().second().getADistance(), 16);
		this.assertEquals(pbar.getColumns().second().getAPostion(), 8);
		this.assertEquals(pbar.getColumns().second().getADistanceBenefit(), 0);						
	}
	
	public function testPBarColumnsAllotmentDistanceBenefit()
	{
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote8(0),
					new QNote8(0, '#'),
					new QNote8(0),					
					]),
			]),
		], EAllotment.Linear));				
		
		this.assertEquals(pbar.getColumns().first().getMDistance(), 5.8);
		this.assertEquals(pbar.getColumns().first().getADistance(), 5.8);
		this.assertEquals(pbar.getColumns().first().getAPostion(), 0);
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit().round2(), 1.8);				
		
		this.assertEquals(pbar.getColumns().second().getMDistance(), 3.2);
		this.assertEquals(pbar.getColumns().second().getADistance(), 4);
		this.assertEquals(pbar.getColumns().second().getAPostion(), 5.8);
		this.assertEquals(pbar.getColumns().second().getADistanceBenefit(), 0);				
		
		this.assertEquals(pbar.getColumns().third().getMDistance(), 1.6);
		this.assertEquals(pbar.getColumns().third().getADistance(), 4);
		this.assertEquals(pbar.getColumns().third().getAPostion(), 9.8);
		this.assertEquals(pbar.getColumns().third().getADistanceBenefit(), 0);					
	}
	
	public function testPBarLastColumnValue()
	{
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(0),
					new QNote4(0),
					]),
			]),
			new NPart([	
				new NVoice([				
					new QNote1(0),
					]),
			]),
		]));					
		this.assertEquals(pbar.getValue(), 12096);		
		this.assertEquals(pbar.getColumns().first().getValue(), 3024);
		this.assertEquals(pbar.getColumns().second().getValue(), 9072);
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