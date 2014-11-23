package nx3.test;

import haxe.unit.TestCase;
import nx3.EAllotment;
import nx3.EBeamflagType;
import nx3.EClef;
import nx3.EDirectionUAD;
import nx3.EDirectionUD;
import nx3.EKey;
import nx3.ENoteVal;
import nx3.ETie;
import nx3.ETime;
import nx3.geom.Rectangle;
import nx3.NBar;
import nx3.NHead;
import nx3.NNote;
import nx3.NPart;
import nx3.NScore;
import nx3.NVoice;
import nx3.PAttributesRectsCalculator;
import nx3.PBar;
import nx3.PBarAttributes;
import nx3.PBarConfig;
import nx3.PBars;
import nx3.PColumn;
import nx3.PColumnsDistancesCalculator;
import nx3.PComplex;
import nx3.PComplexTieTargetCalculator;
import nx3.PNote;
import nx3.PPart;
import nx3.PPartComplexesGenerator;
import nx3.PSystem;
import nx3.PSystemBarsGenerator;
import nx3.PVoice;
import nx3.QNote.QLyric4;
import nx3.QNote.QNote1;
import nx3.QNote.QNote16;
import nx3.QNote.QNote2;
import nx3.QNote.QNote4;
import nx3.QNote.QNote8;
import nx3.QVoice;
using cx.ArrayTools;
using cx.MapTools;
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
		this.assertEquals(pnote.getHeads().first().getNote(), pnote);
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
		this.assertEquals(voice.getNotes().first().getVoice(), voice);		
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
		this.assertEquals(ppart.getVoices().first().getPart(), ppart);		
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
		this.assertEquals(pbar.getColumns().first().getMDistance(), 4.4); // distance between notes Nv4!
		this.assertEquals(pbar.getColumns().second().getMPosition(), 4.4);
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
		this.assertEquals(pbar.getColumns().first().getMDistance(),5); // distance between notes Nv1 and Nv4!
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
		this.assertEquals(pbar.getColumns().first().getMDistance(), 5); // distance between notes Nv1 and Nv4!
		this.assertEquals(pbar.getColumns().second().getMPosition(), 5);
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
		this.assertEquals(pbar.getColumns().first().getMDistance(), 6.4); // distance between notes Nv4!
		this.assertEquals(pbar.getColumns().second().getMPosition(), 6.4);
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

		this.assertEquals(pbar.getColumns().first().getMDistance(), 4.4);
		this.assertEquals(pbar.getColumns().first().getADistance(), 16);
		this.assertEquals(pbar.getColumns().first().getAPostion(), 0 + pbar.getContentXZero());
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit(), 0);

		this.assertEquals(pbar.getColumns().second().getMDistance(), 4.4);
		this.assertEquals(pbar.getColumns().second().getADistance(), 8);
		this.assertEquals(pbar.getColumns().second().getAPostion(), 16 + pbar.getContentXZero());
		this.assertEquals(pbar.getColumns().second().getADistanceBenefit(), 0);		
		
		this.assertEquals(pbar.getColumns().third().getMDistance(), 4.4);
		this.assertEquals(pbar.getColumns().third().getADistance(), 4.4);
		this.assertEquals(pbar.getColumns().third().getAPostion(), 24 + pbar.getContentXZero());
		this.assertEquals(pbar.getColumns().third().getADistanceBenefit().round2(), 0.4);				
		
		this.assertEquals(pbar.getColumns().fourth().getMDistance(), 1.6);
		this.assertEquals(pbar.getColumns().fourth().getADistance(), 4);
		this.assertEquals(pbar.getColumns().fourth().getAPostion(), 28.4 + pbar.getContentXZero());
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

		this.assertEquals(pbar.getColumns().first().getMDistance(),4.4);
		this.assertEquals(pbar.getColumns().first().getADistance(), 12);
		this.assertEquals(pbar.getColumns().first().getAPostion(), 0 + pbar.getContentXZero());
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit(), 0);

		this.assertEquals(pbar.getColumns().second().getMDistance(), 4.4);
		this.assertEquals(pbar.getColumns().second().getADistance(), 8);
		this.assertEquals(pbar.getColumns().second().getAPostion(), 12 + pbar.getContentXZero()) ;
		this.assertEquals(pbar.getColumns().second().getADistanceBenefit(), 0);		
		
		this.assertEquals(pbar.getColumns().third().getMDistance(), 4.4);
		this.assertEquals(pbar.getColumns().third().getADistance(), 6);
		this.assertEquals(pbar.getColumns().third().getAPostion(), 20 + pbar.getContentXZero());
		this.assertEquals(pbar.getColumns().third().getADistanceBenefit(), 0);				
		
		this.assertEquals(pbar.getColumns().fourth().getMDistance(), 1.6);
		this.assertEquals(pbar.getColumns().fourth().getADistance(), 6);
		this.assertEquals(pbar.getColumns().fourth().getAPostion(), 26 + pbar.getContentXZero());
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
		
		this.assertEquals(pbar.getColumns().first().getMDistance(), 4.4);
		this.assertEquals(pbar.getColumns().first().getADistance(), 8);
		this.assertEquals(pbar.getColumns().first().getAPostion(), 0 + pbar.getContentXZero());
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit(), 0);		
		
		this.assertEquals(pbar.getColumns().second().getMDistance(), 1.6);
		this.assertEquals(pbar.getColumns().second().getADistance(), 24);
		this.assertEquals(pbar.getColumns().second().getAPostion(), 8 + pbar.getContentXZero());
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
		
		this.assertEquals(pbar.getColumns().first().getMDistance(), 4.4);
		this.assertEquals(pbar.getColumns().first().getADistance(), 8);
		this.assertEquals(pbar.getColumns().first().getAPostion(), 0 + pbar.getContentXZero());
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit(), 0);		
		
		this.assertEquals(pbar.getColumns().second().getMDistance(), 1.6);
		this.assertEquals(pbar.getColumns().second().getADistance(), 16);
		this.assertEquals(pbar.getColumns().second().getAPostion(), 8+ pbar.getContentXZero());
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
		
		this.assertEquals(pbar.getColumns().first().getMDistance(), 6.4);
		this.assertEquals(pbar.getColumns().first().getADistance(), 6.4);
		this.assertEquals(pbar.getColumns().first().getAPostion(), 0 + pbar.getContentXZero());
		this.assertEquals(pbar.getColumns().first().getADistanceBenefit().round2(), 2.4);				
		
		this.assertEquals(pbar.getColumns().second().getMDistance(), 4.4);
		this.assertEquals(pbar.getColumns().second().getADistance(), 4.4);
		this.assertEquals(pbar.getColumns().second().getAPostion(), 6.4 + pbar.getContentXZero());
		this.assertEquals(pbar.getColumns().second().getADistanceBenefit().round2(), 0.4);				
		
		this.assertEquals(pbar.getColumns().third().getMDistance(), 1.6);
		this.assertEquals(pbar.getColumns().third().getADistance(), 4);
		this.assertEquals(pbar.getColumns().third().getAPostion(), 10.8 + pbar.getContentXZero());
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
	
	public function testBarAttributes()
	{
		var rect = PAttributesRectsCalculator.getClefRect(EClef.ClefG);
		var rect = PAttributesRectsCalculator.getKeyRect(EKey.Flat3);
		this.assertTrue(true);
	}
	
	public function testBarContentWidth()
	{
		var bar:PBar =  new PBar(new NBar([		
			new NPart([	
				new NVoice([				
					new QNote8(0, '.'),
				]),
			]),
		], EAllotment.LeftAlign));	
		
		var lastcolumn = bar.getColumns().last();
		this.assertEquals(bar.getContentwidth(), 3.2);
		
	}
	
	function rectEquals(a:Rectangle, bx:Float=-1, by:Float=-1, bwidth:Float=-1, bheight:Float=-1): Bool
	{
		var result:Bool = false;
			if (bwidth == -1 || bheight==-1) throw "Rect comparison error";
			result =  MathTools.floatEquals(a.x, bx) && MathTools.floatEquals(a.y, by) && MathTools.floatEquals(a.width, bwidth) && MathTools.floatEquals(a.height, bheight);		
			if (!result) trace(['Rectangle not equal', Std.string(a) , Std.string(new Rectangle(bx, by, bwidth, bheight))]);
			return result;
	}
	
		/*
	public function testPartRect()
	{
		var bar:PBar =  new PBar(new NBar([		
			
			new NPart([	
				new NVoice([				
					new QNote8(4),
					new QNote8( -1),

					new QNote8(-4),
					new QNote8(1),					
					
				]),
			]),
			
			new NPart([	
				new NVoice([				
					new QNote1(0),
				]),
			]),				
				
		]));			
		var part :PPart = bar.getParts().first();
		var rect0 = part.getRect();
		trace(rect0);
		//trace(rect0.bottom);
		
		var part :PPart = bar.getParts().second();
		var rect1 = part.getRect();
		trace(rect1);
		//trace(rect0.bottom);		
		
	}
	*/
	
	public function testSystemGeneratorOneBar()
	{		
		// One part
		// Get attributes from bar
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC, EKey.Flat2);
		bars.push(new PBar(new NBar([n0], ETime.Time2_4)));		
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null, 400 );
		var system:PSystem = generator.getSystem();
		this.assertEquals(system.getSystembars().first().actAttributes.clefs.toString(), [EClef.ClefC].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.keys.toString(), [EKey.Flat2].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.time, ETime.Time2_4);	
	
// One part
		// Get attributes from defaults
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0])));
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null, 400 );
		var system:PSystem = generator.getSystem();
		this.assertEquals(system.getSystembars().first().actAttributes.clefs.toString(), [PSystemBarsGenerator.defaultClef].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.keys.toString(), [PSystemBarsGenerator.defaultKey].toString());		
		this.assertEquals(system.getSystembars().first().actAttributes.time, PSystemBarsGenerator.defaultTime);		
		
		// One part
		// Get attributes from previous bar
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0])));
		var prevBarAttributes:PBarAttributes = { clefs: [EClef.ClefF], keys: [EKey.Sharp4], time:ETime.Time5_8 };
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes, 400 );
		var system:PSystem = generator.getSystem();
		this.assertEquals(system.getSystembars().first().actAttributes.clefs.toString(), [EClef.ClefF].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.keys.toString(), [EKey.Sharp4].toString());		
		this.assertEquals(system.getSystembars().first().actAttributes.time, ETime.Time5_8);				
		
		// Two parts
		// Get clefs/keys from bar and defaults
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EKey.Sharp5);
		bars.push(new PBar(new NBar([n0, n1])));
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null, 400 );
		var system:PSystem = generator.getSystem();
		this.assertEquals(system.getSystembars().first().actAttributes.clefs.toString(), [EClef.ClefC, PSystemBarsGenerator.defaultClef].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.keys.toString(), [PSystemBarsGenerator.defaultKey, EKey.Sharp5].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.time, PSystemBarsGenerator.defaultTime);
		
		// Two parts
		// Get clefs/keys from previous bar
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0, n1])));		
		var prevBarAttributes:PBarAttributes = { clefs: [EClef.ClefF, EClef.ClefG], keys: [EKey.Sharp1, EKey.Flat3], time:ETime.Time5_8 };		
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes, 400 );
		var system:PSystem = generator.getSystem();
		this.assertEquals(system.getSystembars().first().actAttributes.clefs.toString(), [EClef.ClefF, EClef.ClefG].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.keys.toString(), [EKey.Sharp1, EKey.Flat3].toString());		
		
		// Two parts
		// Get clefs/keys from bar and previous bar
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EKey.Sharp5);
		bars.push(new PBar(new NBar([n0, n1])));
		var prevBarAttributes:PBarAttributes = { clefs: [EClef.ClefF, EClef.ClefG], keys: [EKey.Sharp1, EKey.Flat3], time:ETime.Time5_8 };		
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes, 400 );
		var system:PSystem = generator.getSystem();
		this.assertEquals(system.getSystembars().first().actAttributes.clefs.toString(), [EClef.ClefC, EClef.ClefG].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.keys.toString(), [EKey.Sharp1, EKey.Sharp5].toString());						
	
	}

	
	
	public function testSystemGeneratorBarConfigResult()
	{
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC);
		bars.push(new PBar(new NBar([n0])));
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null, 400 );
		var system:PSystem = generator.getSystem();				
		this.assertEquals(system.getSystembars().first().barConfig.showClef, true);

		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC);
		bars.push(new PBar(new NBar([n0])));
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:false, showFirstKey:true, showFirstTime:true }, null, 400 );
		var system:PSystem = generator.getSystem();				
		this.assertEquals(system.getSystembars().first().barConfig.showClef, false);
		
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0])));
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null, 400 );
		var system:PSystem = generator.getSystem();				
		this.assertEquals(system.getSystembars().first().barConfig.showClef, true);
		this.assertEquals(system.getSystembars().first().actAttributes.clefs.toString(), [PSystemBarsGenerator.defaultClef].toString());
		
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0])));
		var prevBarAttributes:PBarAttributes = { clefs: [EClef.ClefF], keys: [EKey.Sharp4], time:ETime.Time5_8 };
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes, 400 );
		var system:PSystem = generator.getSystem();				
		this.assertEquals(system.getSystembars().first().barConfig.showClef, true);		
		this.assertEquals(system.getSystembars().first().actAttributes.clefs.toString(), [PSystemBarsGenerator.defaultClef].toString());
		
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EDisplayALN.Never);
		bars.push(new PBar(new NBar([n0])));
		var prevBarAttributes:PBarAttributes = { clefs: [EClef.ClefF], keys: [EKey.Sharp4], time:ETime.Time5_8 };
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes, 400 );
		var system:PSystem = generator.getSystem();				
		this.assertEquals(system.getSystembars().first().barConfig.showClef, false);				
		
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC, EDisplayALN.Always);
		bars.push(new PBar(new NBar([n0])));
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:false, showFirstKey:true, showFirstTime:true }, null, 400 );
		var system:PSystem = generator.getSystem();				
		this.assertEquals(system.getSystembars().first().barConfig.showClef, true);		
		
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EDisplayALN.Always);
		bars.push(new PBar(new NBar([n0])));
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:false, showFirstKey:true, showFirstTime:true }, null, 400 );
		var system:PSystem = generator.getSystem();				
		this.assertEquals(system.getSystembars().first().barConfig.showClef, true);						
		
		// Keys
		
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EKey.Sharp3);
		bars.push(new PBar(new NBar([n0])));
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null, 400 );
		var system:PSystem = generator.getSystem();				
		this.assertEquals(system.getSystembars().first().barConfig.showKey, true);

		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EKey.Sharp3);
		bars.push(new PBar(new NBar([n0])));
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:false, showFirstKey:false, showFirstTime:true }, null, 400 );
		var system:PSystem = generator.getSystem();				
		this.assertEquals(system.getSystembars().first().barConfig.showKey, false);
		
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0])));
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null, 400 );
		var system:PSystem = generator.getSystem();				
		this.assertEquals(system.getSystembars().first().barConfig.showKey, true);
		this.assertEquals(system.getSystembars().first().actAttributes.keys.toString(), [PSystemBarsGenerator.defaultKey].toString());
		
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0])));
		var prevBarAttributes:PBarAttributes = { clefs: [EClef.ClefF], keys: [EKey.Sharp4], time:ETime.Time5_8 };
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes, 400 );
		var system:PSystem = generator.getSystem();				
		this.assertEquals(system.getSystembars().first().barConfig.showKey, true);		
		this.assertEquals(system.getSystembars().first().actAttributes.keys.toString(), [EKey.Sharp4].toString());
		
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EDisplayALN.Layout, EDisplayALN.Never);
		bars.push(new PBar(new NBar([n0])));
		var prevBarAttributes:PBarAttributes = { clefs: [EClef.ClefF], keys: [EKey.Sharp4], time:ETime.Time5_8 };
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes, 400 );
		var system:PSystem = generator.getSystem();				
		this.assertEquals(system.getSystembars().first().barConfig.showKey, false);				
		
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], null, null, null, EKey.Sharp3, EDisplayALN.Always);
		bars.push(new PBar(new NBar([n0])));
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:false, showFirstKey:false, showFirstTime:true }, null, 400 );
		var system:PSystem = generator.getSystem();				
		this.assertEquals(system.getSystembars().first().barConfig.showKey, true);
		this.assertEquals(system.getSystembars().first().actAttributes.keys.toString(), [EKey.Sharp3].toString());
		
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])],null, null, null, null, EDisplayALN.Always);
		bars.push(new PBar(new NBar([n0])));
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:false, showFirstKey:true, showFirstTime:true }, null, 400 );
		var system:PSystem = generator.getSystem();				
		this.assertEquals(system.getSystembars().first().barConfig.showKey, true);					
		this.assertEquals(system.getSystembars().first().actAttributes.keys.toString(), [PSystemBarsGenerator.defaultKey].toString());
		
		// Time
		
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0], ETime.Time2_8)));
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null, 400 );
		var system:PSystem = generator.getSystem();				
		this.assertEquals(system.getSystembars().first().barConfig.showTime, true);		
		
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0], ETime.Time2_8)));
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:false }, null, 400 );
		var system:PSystem = generator.getSystem();				
		this.assertEquals(system.getSystembars().first().barConfig.showTime, false);			

		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0], ETime.Time2_8, EDisplayALN.Always)));
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:false }, null, 400 );
		var system:PSystem = generator.getSystem();				
		this.assertEquals(system.getSystembars().first().barConfig.showTime, true);			
		
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0], ETime.Time2_8, EDisplayALN.Never)));
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null, 400 );
		var system:PSystem = generator.getSystem();				
		this.assertEquals(system.getSystembars().first().barConfig.showTime, false);				
	
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0])));
		var prevBarAttributes:PBarAttributes = { clefs: [EClef.ClefF], keys: [EKey.Sharp4], time:ETime.Time5_8 };
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes, 400 );
		var system:PSystem = generator.getSystem();				
		this.assertEquals(system.getSystembars().first().barConfig.showTime, true);
		this.assertEquals(system.getSystembars().first().actAttributes.time, ETime.Time5_8);
	}	
	
	/*
	public function testSystemGeneratorContentWidth()
	{
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0])));
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null, 400 );
		var system:PSystem = generator.getSystem();		
		this.assertEquals(system.getSystembars().first().getBarMeasurements().getTotalWidth(), 170);
		this.assertTrue(true);
		
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF, EKey.Sharp4);
		bars.push(new PBar(new NBar([n0], ETime.Time5_8)));
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null, 400 );
		var system:PSystem = generator.getSystem();		
		this.assertEquals(system.getSystembars().first().getBarMeasurements().getTotalWidth(), 190);
		this.assertTrue(true);	
		
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0])));
		var prevBarAttributes:PBarAttributes = { clefs: [EClef.ClefF], keys: [EKey.Sharp4], time:ETime.Time5_8 };		
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes, 400 );
		var system:PSystem = generator.getSystem();		
		this.assertEquals(system.getSystembars().first().getBarMeasurements().getTotalWidth(), 190);
		this.assertTrue(true);		
	}
	*/	
	
	public function testSystemGeneratorTwoBars()	
	{	
		var bars:PBars = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		bars.push(new PBar(new NBar([n0], ETime.Time3_2)));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0])));		
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null, 400 );
		var system:PSystem = generator.getSystem();		
		//this.assertEquals(system.bars.first().width, 120);		
		this.assertEquals(system.getSystembars().length, 2);
		this.assertEquals(system.getSystembars().first().actAttributes.clefs.toString(), [EClef.ClefG].toString());
		this.assertEquals(system.getSystembars().second().actAttributes.clefs.toString(), [EClef.ClefG].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.keys.toString(), [ EKey.Flat3].toString());
		this.assertEquals(system.getSystembars().second().actAttributes.keys.toString(), [ EKey.Flat3].toString());		
		this.assertEquals(system.getSystembars().first().actAttributes.time, ETime.Time3_2);
		this.assertEquals(system.getSystembars().first().barConfig.showClef, true);
		this.assertEquals(system.getSystembars().second().barConfig.showClef, false);
		this.assertEquals(system.getSystembars().first().barConfig.showKey, true);
		this.assertEquals(system.getSystembars().second().barConfig.showKey, false);		
		this.assertEquals(system.getSystembars().first().barConfig.showTime, true);
		this.assertEquals(system.getSystembars().second().barConfig.showTime, false);				
	}	

	public function testSystemGeneratorMoreBars()	
	{	
		var bars:PBars = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		bars.push(new PBar(new NBar([n0], ETime.Time3_2)));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0])));		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EKey.Sharp1);
		bars.push(new PBar(new NBar([n0])));		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0], ETime.Time6_8)));		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0])));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF);
		bars.push(new PBar(new NBar([n0])));

		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  1000 );
		var system:PSystem = generator.getSystem();		
		this.assertEquals(system.getSystembars().length, 6);
		this.assertEquals(system.getSystembars().first().actAttributes.clefs.toString(), [EClef.ClefG].toString());
		this.assertEquals(system.getSystembars().second().actAttributes.clefs.toString(), [EClef.ClefG].toString());
		this.assertEquals(system.getSystembars().third().actAttributes.clefs.toString(), [EClef.ClefG].toString());
		this.assertEquals(system.getSystembars().fourth().actAttributes.clefs.toString(), [EClef.ClefG].toString());
		this.assertEquals(system.getSystembars().fifth().actAttributes.clefs.toString(), [EClef.ClefG].toString());
		this.assertEquals(system.getSystembars().sixth().actAttributes.clefs.toString(), [EClef.ClefF].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.keys.toString(), [ EKey.Flat3].toString());
		this.assertEquals(system.getSystembars().second().actAttributes.keys.toString(), [ EKey.Flat3].toString());		
		this.assertEquals(system.getSystembars().third().actAttributes.keys.toString(), [ EKey.Sharp1].toString());		
		this.assertEquals(system.getSystembars().fourth().actAttributes.keys.toString(), [ EKey.Sharp1].toString());		
		this.assertEquals(system.getSystembars().fifth().actAttributes.keys.toString(), [ EKey.Sharp1].toString());		
		this.assertEquals(system.getSystembars().sixth().actAttributes.keys.toString(), [ EKey.Sharp1].toString());		
		this.assertEquals(system.getSystembars().first().actAttributes.time, ETime.Time3_2);
		this.assertEquals(system.getSystembars().second().actAttributes.time, ETime.Time3_2);
		this.assertEquals(system.getSystembars().third().actAttributes.time, ETime.Time3_2);
		this.assertEquals(system.getSystembars().fourth().actAttributes.time, ETime.Time6_8);
		this.assertEquals(system.getSystembars().fifth().actAttributes.time, ETime.Time6_8);
		this.assertEquals(system.getSystembars().sixth().actAttributes.time, ETime.Time6_8);
		this.assertEquals(barConfToArr( system.getSystembars().first().barConfig).toString() , [true, true, true].toString());
		this.assertEquals(barConfToArr( system.getSystembars().second().barConfig).toString() , [false, false, false].toString());
		this.assertEquals(barConfToArr( system.getSystembars().third().barConfig).toString() , [false, true, false].toString());
		this.assertEquals(barConfToArr( system.getSystembars().fourth().barConfig).toString() , [false, false, true].toString());
		this.assertEquals(barConfToArr( system.getSystembars().fifth().barConfig).toString() , [false, false, false].toString());
		this.assertEquals(barConfToArr( system.getSystembars().sixth().barConfig).toString() , [true, false, false].toString());
		//this.assertEquals(barConfToArr( system.bars.fifth().barConfig).toString() , [false, false, false].toString());
	}
	
	/*
	public function testSystemGeneratorOverflow()
	{
		var bars:PBars = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		bars.push(new PBar(new NBar([n0], ETime.Time3_2)));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0])));		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0])));		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0])));		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0])));		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0])));		
		
		var barscopy = bars.copy();
		var pagewidth = 1000;
		var generator = new PSystemBarsGenerator(barscopy,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  pagewidth );
		var system:PSystem = generator.getSystem();	
		assertEquals(system.getSystembars().length, 6);
		this.assertEquals(system.getWidth(), 780);
		this.assertEquals(barscopy.length, 0);
		
		var barscopy = bars.copy();
		var pagewidth = 780;
		var generator = new PSystemBarsGenerator(barscopy,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  pagewidth );
		var system:PSystem = generator.getSystem();	
		assertEquals(system.getSystembars().length, 6);
		this.assertEquals(system.getWidth(), 780);		
		this.assertEquals(barscopy.length, 0);		
		
		var barscopy = bars.copy();
		var pagewidth = 700;
		var generator = new PSystemBarsGenerator(barscopy,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  pagewidth );
		var system:PSystem = generator.getSystem();	
		assertEquals(system.getSystembars().length, 5);
		this.assertEquals(system.getWidth(), 660);			
		this.assertEquals(barscopy.length, 1);
		
	}
	*/
	/*
	public function testSystemGeneratorCautions()
	{
		var bars:PBars = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		bars.push(new PBar(new NBar([n0], ETime.Time3_2)));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0])));		
		var pagewidth = 250;
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  pagewidth );
		var system:PSystem = generator.getSystem();	
		assertEquals(system.getSystembars().length, 1);
		this.assertEquals(system.getWidth(), 180);			

		var bars:PBars = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		bars.push(new PBar(new NBar([n0], ETime.Time3_2)));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF);
		bars.push(new PBar(new NBar([n0])));		
		var pagewidth = 250;
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  pagewidth );
		var system:PSystem = generator.getSystem();	
		assertEquals(system.getSystembars().length, 1);
		this.assertEquals(system.getWidth(), 200);
		this.assertEquals(system.getSystembars().first().barConfig.showCautClef, true);
		this.assertEquals(system.getSystembars().first().barConfig.showCautKey, false);
		this.assertEquals(system.getSystembars().first().barConfig.showCautTime, false);
		this.assertEquals(system.getSystembars().last().caAttributes.clefs.toString(), [EClef.ClefF].toString());

		var bars:PBars = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		bars.push(new PBar(new NBar([n0], ETime.Time3_2)));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EKey.Sharp1);
		bars.push(new PBar(new NBar([n0])));		
		var pagewidth = 250;
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  pagewidth );
		var system:PSystem = generator.getSystem();	
		assertEquals(system.getSystembars().length, 1);
		this.assertEquals(system.getWidth(), 190);
		this.assertEquals(system.getSystembars().first().barConfig.showCautClef, false);
		this.assertEquals(system.getSystembars().first().barConfig.showCautKey, true);
		this.assertEquals(system.getSystembars().first().barConfig.showCautTime, false);
		this.assertEquals(system.getSystembars().last().caAttributes.keys.toString(), [EKey.Sharp1].toString());

		var bars:PBars = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		bars.push(new PBar(new NBar([n0], ETime.Time3_2)));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0], ETime.Time2_2)));		
		var pagewidth = 250;
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  pagewidth );
		var system:PSystem = generator.getSystem();	
		assertEquals(system.getSystembars().length, 1);
		this.assertEquals(system.getWidth(), 190);
		this.assertEquals(system.getSystembars().first().barConfig.showCautClef, false);
		this.assertEquals(system.getSystembars().first().barConfig.showCautKey, false);
		this.assertEquals(system.getSystembars().first().barConfig.showCautTime, true);
		this.assertEquals(system.getSystembars().last().caAttributes.time, ETime.Time2_2);
	}
	*/
	
	/*
	public function testSystemGeneratorCautionsTwoParts()
	{		
		var bars:PBars = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF, EKey.Sharp4);
		bars.push(new PBar(new NBar([n0, n1], ETime.Time3_2)));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0, n1])));		
		var pagewidth = 250;
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  pagewidth );
		var system:PSystem = generator.getSystem();	
		assertEquals(system.getSystembars().length, 1);
		this.assertEquals(system.getWidth(), 190);			

		var bars:PBars = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF, EKey.Sharp4);
		bars.push(new PBar(new NBar([n0, n1], ETime.Time3_2)));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0, n1], ETime.Time12_8)));		
		var pagewidth = 250;
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  pagewidth );
		var system:PSystem = generator.getSystem();	
		assertEquals(system.getSystembars().length, 1);
		this.assertEquals(system.getWidth(), 200);		

		var bars:PBars = [];			
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0, n1])));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0, n1], ETime.Time12_8)));		
		var prevBarAttributes:PBarAttributes = { clefs: [EClef.ClefG, EClef.ClefF], keys: [EKey.Flat3, EKey.Sharp4], time:ETime.Time3_2 };
		var pagewidth = 250;
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes,  pagewidth );
		var system:PSystem = generator.getSystem();	
		assertEquals(system.getSystembars().length, 1);
		this.assertEquals(system.getWidth(), 200);
		this.assertEquals(system.getSystembars().first().barConfig.showTime, true);
		this.assertEquals(system.getSystembars().first().actAttributes.clefs.toString(), [EClef.ClefG, EClef.ClefF].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.keys.toString(), [EKey.Flat3, EKey.Sharp4].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.time, ETime.Time3_2);
		this.assertEquals(system.getSystembars().first().barConfig.showCautTime, true);
		this.assertEquals(system.getSystembars().first().caAttributes.time, ETime.Time12_8);
				
		var bars:PBars = [];			
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0, n1])));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC);
		bars.push(new PBar(new NBar([n0, n1])));		
		var prevBarAttributes:PBarAttributes = { clefs: [EClef.ClefG, EClef.ClefF], keys: [EKey.Flat3, EKey.Sharp4], time:ETime.Time3_2 };
		var pagewidth = 250;
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes,  pagewidth );
		var system:PSystem = generator.getSystem();	
		assertEquals(system.getSystembars().length, 1);
		this.assertEquals(system.getWidth(), 210);
		this.assertEquals(system.getSystembars().first().barConfig.showTime, true);
		this.assertEquals(system.getSystembars().first().actAttributes.clefs.toString(), [EClef.ClefG, EClef.ClefF].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.keys.toString(), [EKey.Flat3, EKey.Sharp4].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.time, ETime.Time3_2);
		this.assertEquals(system.getSystembars().first().barConfig.showCautClef, true);
		this.assertEquals(system.getSystembars().first().caAttributes.clefs.toString(), [null, EClef.ClefC].toString());

		var bars:PBars = [];			
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0, n1])));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EKey.Flat1);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0, n1])));		
		var prevBarAttributes:PBarAttributes = { clefs: [EClef.ClefG, EClef.ClefF], keys: [EKey.Flat3, EKey.Sharp4], time:ETime.Time3_2 };
		var pagewidth = 250;
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes,  pagewidth );
		var system:PSystem = generator.getSystem();	
		assertEquals(system.getSystembars().length, 1);
		this.assertEquals(system.getWidth(), 200);
		this.assertEquals(system.getSystembars().first().barConfig.showTime, true);
		this.assertEquals(system.getSystembars().first().actAttributes.clefs.toString(), [EClef.ClefG, EClef.ClefF].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.keys.toString(), [EKey.Flat3, EKey.Sharp4].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.time, ETime.Time3_2);
		this.assertEquals(system.getSystembars().first().barConfig.showCautKey, true);
		this.assertEquals(system.getSystembars().first().caAttributes.keys.toString(), [EKey.Flat1, null].toString());

		var bars:PBars = [];			
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0, n1])));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Sharp2);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF, EKey.Sharp4);
		bars.push(new PBar(new NBar([n0, n1], ETime.Time4_8)));		
		var prevBarAttributes:PBarAttributes = { clefs: [EClef.ClefG, EClef.ClefC], keys: [EKey.Flat3, EKey.Sharp4], time:ETime.Time3_2 };
		var pagewidth = 260;
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes,  pagewidth );
		var system:PSystem = generator.getSystem();	
		assertEquals(system.getSystembars().length, 1);
		
		this.assertEquals(system.getSystembars().first().barConfig.showCautClef, true);
		this.assertEquals(system.getSystembars().first().caAttributes.clefs.toString(), [null, EClef.ClefF].toString());
		this.assertEquals(system.getSystembars().first().barConfig.showCautKey, true);
		this.assertEquals(system.getSystembars().first().caAttributes.keys.toString(), [EKey.Sharp2, null].toString());
		this.assertEquals(system.getSystembars().first().barConfig.showCautTime, true);
		this.assertEquals(system.getSystembars().first().caAttributes.time, ETime.Time4_8);
		this.assertEquals(system.getWidth(), 240);		
	}
	*/
	
	/*
	public function testSystemGeneratorCautionsDontFit()
	{
		// Here, the two first bar DO fit...
		var bars:PBars = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF, EKey.Sharp4);
		bars.push(new PBar(new NBar([n0, n1], ETime.Time3_2)));

		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0, n1])));		

		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EKey.Flat1);
		bars.push(new PBar(new NBar([n0, n1])));		
		var pagewidth = 315;
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  pagewidth );
		var system:PSystem = generator.getSystem();	
		assertEquals(system.getSystembars().length, 3);
		this.assertEquals(system.getWidth(), 310);			
		this.assertEquals(bars.length, 1);
		
		// but when adding the need for cautionary attributes on the second bar, they DON'T!
		var bars:PBars = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF, EKey.Sharp4);
		bars.push(new PBar(new NBar([n0, n1], ETime.Time3_2)));

		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new PBar(new NBar([n0, n1])));		

		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EKey.Flat1);
		bars.push(new PBar(new NBar([n0, n1])));		
		var pagewidth = 315;
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  pagewidth );
		var system:PSystem = generator.getSystem();	
		assertEquals(system.getSystembars().length, 1);
		this.assertEquals(system.getWidth(), 190);			
		this.assertEquals(bars.length, 2);		
	}
	*/
	
	public function testBarTieConnections()
	{
		var nbar0:NBar = new NBar([
			new NPart([
				new NVoice([
					new NNote([ new NHead(0) , ]),
					new NNote([ new NHead(1, ETie.Tie(EDirectionUAD.Auto, 0)) ,  ]), // This one doesnt have a target in nbar1
				]),			
				new NVoice([
					new NNote([ new NHead(3, ETie.Tie(EDirectionUAD.Auto, 0)),  ]), // This one has!
				]),									
			]),
		
			new NPart([
				new NVoice([
					new NNote([ new NHead(0) , ]),
					new NNote([ new NHead(5, ETie.Tie(EDirectionUAD.Auto, 0)),  ]), // This one has!
				]),
			]),
		]);
		
		var nbar1:NBar = new NBar([
			new NPart([
				new NVoice([
					new NNote([ new NHead(3) , ]),
					new NNote([ new NHead(0) , ]),					
				]),										
			]),
			
			new NPart([
				new NVoice([
					new NNote([ new NHead(3) , ]),
					new NNote([ new NHead(0) , ]),
				]),
				
				new NVoice([
					new NNote([ new NHead(5) , ]),
					new NNote([ new NHead(0) , ]),
				]),				
				
			]),
			
		]);		
		
		
		
		var score = new PScore(new NScore([nbar0, nbar1]));
		var connections = score.getBars().first().getTieConnections();
		this.assertEquals(connections.length, 2);
		
		
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	static private function barConfToArr(conf:PBarConfig):Array<Bool>
	{
		return [conf.showClef, conf.showKey, conf.showTime];
	}	
	
	
	public function testSystemPartRects()	
	{	
		
		/*
		var bars:PBars = [];		
		var n0 = new NPart([new QVoice(1, [0])]);
		var n1 = new NPart([new QVoice(1, [0])]);
		bars.push(new PBar(new NBar([n0, n1])));
		var n0 = new NPart([new QVoice(1, [0])]);
		var n1 = new NPart([new QVoice(1, [0])]);
		bars.push(new PBar(new NBar([n0, n1])));
*/
			var bars = [new PBar(TestItems.getSystemYItems().nbars[0]),new PBar(TestItems.getSystemYItems().nbars[1])] ;

		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null, 400 );
		var system:PSystem = generator.getSystem();		
		//this.assertEquals(system.bars.first().width, 120);		
		this.assertEquals(system.getSystembars().length, 2);
		
		this.assertEquals(system.getSpaceAbovePart(0), 4);
		this.assertEquals(system.getSpaceAbovePart(1), 11);

		this.assertEquals(system.getPartY(0), 4);
		this.assertEquals(system.getPartY(1), 4 + 11);
		
		this.assertEquals(system.getHeight(), 21);
		
		/*
		this.assertEquals(system.getSystembars().first().actAttributes.clefs.toString(), [EClef.ClefG].toString());
		this.assertEquals(system.getSystembars().second().actAttributes.clefs.toString(), [EClef.ClefG].toString());
		this.assertEquals(system.getSystembars().first().actAttributes.keys.toString(), [ EKey.Flat3].toString());
		this.assertEquals(system.getSystembars().second().actAttributes.keys.toString(), [ EKey.Flat3].toString());		
		this.assertEquals(system.getSystembars().first().actAttributes.time, ETime.Time3_2);
		this.assertEquals(system.getSystembars().first().barConfig.showClef, true);
		this.assertEquals(system.getSystembars().second().barConfig.showClef, false);
		this.assertEquals(system.getSystembars().first().barConfig.showKey, true);
		this.assertEquals(system.getSystembars().second().barConfig.showKey, false);		
		this.assertEquals(system.getSystembars().first().barConfig.showTime, true);
		this.assertEquals(system.getSystembars().second().barConfig.showTime, false);				
		*/
	}	
	
	
	
	
	
}	