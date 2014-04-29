package nx3.test;

import cx.ArrayTools;
import cx.MathTools;
import haxe.ds.IntMap.IntMap;
import nx3.Constants;
import nx3.QVoice;
import nx3.VBamegroupFrameTipCalculator;
import nx3.VBarColumnsGenerator;
import nx3.EDirectionUAD;
import nx3.EClef;
import nx3.EDirectionUD;
import nx3.EDisplayALN;
import nx3.EDots;
import nx3.EKey;
import nx3.ENoteType;
import nx3.ENoteVal;
import nx3.ETime;
import nx3.VBeamgroup;
import nx3.VBeamgroupDirectionCalculator;
import nx3.VBeamgroupFrameCalculator;
import nx3.VBeamgroups;
import nx3.VHeadsRectsCalculator;
import nx3.VNote;
import nx3.VNoteHeadsRectsCalculator;
import nx3.VPart;
import nx3.VPartComplexesGenerator;
import nx3.VSystemGenerator;
import nx3.ESign;
import nx3.NHead;
import nx3.NBar;
import nx3.NNote;
import nx3.NPart;
import nx3.NVoice;
import nx3.VBar;
import nx3.geom.Rectangle;
import nx3.QNote;
import nx3.VVoice;

using nx3.VMapTools;
using cx.ArrayTools; 
using nx3.ENoteValTools;
/**
 * ...
 * @author Jonas Nyström
 */

@:access(nx3.VBar)
@:access(nx3.VNote)
@:access(nx3.VVoice)
@:access(nx3.VBeamgroupDirectionCalculator)
@:access(nx3.VBeamgroupFrameCalculator)
@:access(nx3.VBeamgroup)
@:access(nx3.VPartComplexesGenerator)

@:access(nx3.VBarColumnsGenerator)

class TestV extends  haxe.unit.TestCase 
{

	public function testVNote1() 
	{
		var vnote = new VNote(new QNote([ 1, -2]));
		this.assertEquals(2, vnote.nnote.nheads.length);
		this.assertEquals([ -2, 1].toString(), vnote.nnote.getHeadLevels().toString());
		this.assertEquals(ENoteVal.Nv4, vnote.nnote.value);
	}
	
	public function testVNoteLyric()
	{
		var nnote = new NNote(ENoteType.Lyric('Hello'));
		this.assertEquals(nnote.type.getName(), 'Lyric');
		var text = switch nnote.type
		{
			case ENoteType.Lyric(text, o, c, f):  text;
			default: null;
		}
		this.assertEquals(text, 'Hello');
	}

	public function testVNoteInternalDirection()
	{
		var calculator = new VNoteInternalDirectionCalculator(new VNote(new QNote([ 0])).getVHeads());
		this.assertEquals(EDirectionUD.Down, calculator.getDirection());
		var calculator = new VNoteInternalDirectionCalculator(new VNote(new QNote([ 1])).getVHeads());
		this.assertEquals(EDirectionUD.Up, calculator.getDirection());
		
		var calculator = new VNoteInternalDirectionCalculator(new VNote(new QNote([ -5, 5 ])).getVHeads());
		this.assertEquals(EDirectionUD.Down, calculator.getDirection());
		var calculator = new VNoteInternalDirectionCalculator(new VNote(new QNote([ -4, 5])).getVHeads());
		this.assertEquals(EDirectionUD.Up, calculator.getDirection());

		var calculator = new VNoteInternalDirectionCalculator(new VNote(new QNote([ -5, 1, 2, 3, 4, 5 ])).getVHeads());
		this.assertEquals(EDirectionUD.Down, calculator.getDirection());
		var calculator = new VNoteInternalDirectionCalculator(new VNote(new QNote([ -4, 1, 2, 5])).getVHeads());
		this.assertEquals(EDirectionUD.Up, calculator.getDirection());
	}
	
	public function testVHeadsPlacementsCalculator() 
	{
		var vnote = new VNote(new QNote([ 1, 2]));
		var calculator = new VHeadPlacementCalculator(vnote.getVHeads(), EDirectionUD.Down);
		var placements = calculator.getHeadsPlacements();
		this.assertEquals(1, placements[0].level);
		this.assertEquals(EHeadPosition.Center, placements[0].pos);
		this.assertEquals(2, placements[1].level);
		this.assertEquals(EHeadPosition.Left, placements[1].pos);

		var calculator = new VHeadPlacementCalculator(vnote.getVHeads(), EDirectionUD.Up);
		var placements = calculator.getHeadsPlacements();
		this.assertEquals(1, placements[0].level);
		this.assertEquals(EHeadPosition.Right, placements[0].pos);
		this.assertEquals(2, placements[1].level);
		this.assertEquals(EHeadPosition.Center, placements[1].pos);
	}
	
	
	public function testVNoteHeadPlacement()
	{
		var vnote = new VNote(new QNote([-1, 0, 1]));
		var placements = vnote.getVHeadsPlacements();
		this.assertEquals(EHeadPosition.Center, placements[0].pos);
		this.assertEquals(EHeadPosition.Left, placements[1].pos);
		this.assertEquals(EHeadPosition.Center, placements[2].pos);

		var vnote = new VNote(new QNote([0, 1, 2]));
		var placements = vnote.getVHeadsPlacements();
		this.assertEquals(EHeadPosition.Center, placements[0].pos);
		this.assertEquals(EHeadPosition.Right, placements[1].pos);
		this.assertEquals(EHeadPosition.Center, placements[2].pos);
		
		var vnote = new VNote(new QNote([-2, -1, 0, 1]));
		var placements = vnote.getVHeadsPlacements();
		this.assertEquals(EHeadPosition.Center, placements[0].pos);
		this.assertEquals(EHeadPosition.Left, placements[1].pos);
		this.assertEquals(EHeadPosition.Center, placements[2].pos);
		this.assertEquals(EHeadPosition.Left, placements[3].pos);
		
		var vnote = new VNote(new QNote([0, 1, 2, 3]));
		var placements = vnote.getVHeadsPlacements();
		this.assertEquals(EHeadPosition.Right, placements[0].pos);
		this.assertEquals(EHeadPosition.Center, placements[1].pos);
		this.assertEquals(EHeadPosition.Right, placements[2].pos);
		this.assertEquals(EHeadPosition.Center, placements[3].pos);
		
		var vnote = new VNote(new QNote([0, 1, 2, 3]));
		this.assertTrue(vnote.vheadsPlacements == null);
		vnote.getVHeadsPlacements();
		this.assertTrue(vnote.vheadsPlacements  != null);
		vnote.setConfig( { direction: EDirectionUD.Down } );
		this.assertTrue(vnote.vheadsPlacements == null);
		var placements = vnote.getVHeadsPlacements();
		this.assertEquals(EHeadPosition.Center, placements[0].pos);
		this.assertEquals(EHeadPosition.Left, placements[1].pos);
		this.assertEquals(EHeadPosition.Center, placements[2].pos);
		this.assertEquals(EHeadPosition.Left, placements[3].pos);		
	}
	
	public function testVNoteHeadPlacementDir()
	{
		var vnote = new VNote(new QNote([-1, 0, 1]));
		var placements = vnote.getVHeadPlacementsDir(EDirectionUD.Down); // getVHeadsPlacementsDir(EDirectionUD.Down);
		this.assertEquals(EHeadPosition.Center, placements.first().pos);
		this.assertEquals(EHeadPosition.Left, placements.second().pos);
		this.assertEquals(EHeadPosition.Center, placements.third().pos);	
		
		var vnote = new VNote(new QNote([-1, 0, 1]));
		var placements = vnote.getVHeadPlacementsDir(EDirectionUD.Up); // getVHeadsPlacementsDir(EDirectionUD.Down);
		this.assertEquals(EHeadPosition.Center, placements.first().pos);
		this.assertEquals(EHeadPosition.Right, placements.second().pos);
		this.assertEquals(EHeadPosition.Center, placements.third().pos);					
	}
	
	
	public function testVNoteHeadRectanglesCalculator()
	{
		var vnote = new VNote(new QNote(0));
		var calculator = new VHeadsRectsCalculator( vnote.getVHeads(), vnote.getVHeadsPlacements(), vnote.nnote.value);
		var calculator = new VNoteHeadsRectsCalculator(vnote);
		var rects = calculator.getHeadsRects();
		assertEquals(rects.length, 1);
		assertEquals(rects.first().x , -Constants.HEAD_HALFWIDTH_NORMAL);

		var vnote = new VNote(new QNote([0, 1]));
		//var calculator = new VHeadsRectsCalculator( vnote.getVHeads(), vnote.getVHeadsPlacements(), vnote.nnote.value, vnote);
		var calculator = new VNoteHeadsRectsCalculator(vnote);
		var rects = calculator.getHeadsRects();
		assertEquals(rects.length, 2);
		assertEquals(vnote.getDirection(), EDirectionUD.Up);
		assertEquals(rects.first().x , Constants.HEAD_HALFWIDTH_NORMAL);
		assertEquals(rects.second().x , -Constants.HEAD_HALFWIDTH_NORMAL);

		var vnote = new VNote(new QNote([0, 1],EDirectionUAD.Down));
		//var calculator = new VHeadsRectsCalculator( vnote.getVHeads(), vnote.getVHeadsPlacements(), vnote.nnote.value, vnote);
		var calculator = new VNoteHeadsRectsCalculator(vnote);
		var rects = calculator.getHeadsRects();		
		assertEquals(rects.length, 2);
		assertEquals(vnote.getDirection(), EDirectionUD.Down);
		assertEquals(rects.first().x , -Constants.HEAD_HALFWIDTH_NORMAL);
		assertTrue(MathTools.floatEquals(rects.second().x , 3*-Constants.HEAD_HALFWIDTH_NORMAL));

		var vnote = new VNote(new QNote([0, 1]));
		vnote.setConfig( { direction:EDirectionUD.Down } );
		//var calculator = new VHeadsRectsCalculator( vnote.getVHeads(), vnote.getVHeadsPlacements(), vnote.nnote.value, vnote);
		var calculator = new VNoteHeadsRectsCalculator(vnote);
		var rects = calculator.getHeadsRects();		
		assertEquals(rects.length, 2);
		assertEquals(vnote.getDirection(), EDirectionUD.Down);
		assertEquals(rects.first().x , -Constants.HEAD_HALFWIDTH_NORMAL);
		assertTrue(MathTools.floatEquals(rects.second().x , 3 * -Constants.HEAD_HALFWIDTH_NORMAL));				
		
		// Pause
	
		var vnote = new VNote(new QPause4(0));
		var calculator = new VNoteHeadsRectsCalculator(vnote);
		var rects = calculator.getHeadsRects();
		this.assertTrue(rects.length > 0);
		//trace(rects);
		
		// Lyrics
		#if (flash || openfl || nme)
		var vnote = new VNote(new QLyric4('Hello'));
		var calculator = new VNoteHeadsRectsCalculator(vnote);
		var rects = calculator.getHeadsRects();		
		this.assertTrue(rects.length > 0);
		//trace(rects);
		#end
		
		// TPL
		var vnote = new VNote(new NNote(ENoteType.Tpl(0)));
		var calculator = new VNoteHeadsRectsCalculator(vnote);
		var rects = calculator.getHeadsRects();		
		this.assertTrue(rects.length > 0);
		
		
		
	}
	
	
	public function testVNoteHeadRectanglesDir()
	{
		var vnote = new VNote(new QNote([ -1, 0, 1]));		
		this.assertEquals(vnote.getVHeadsRectanglesDown().toString(), vnote.getVHeadsRectanglesDir(EDirectionUD.Down).toString());
		this.assertEquals(vnote.getVHeadsRectanglesUp().toString(), vnote.getVHeadsRectanglesDir(EDirectionUD.Up).toString());
		
		var vnote = new VNote(new QNote([0, 1]));		
		var rects = vnote.getVHeadsRectanglesDir(EDirectionUD.Down);
		this.assertEquals(rects.first().x, -Constants.HEAD_HALFWIDTH_NORMAL);
		this.assertTrue(MathTools.floatEquals(rects.second().x, -Constants.HEAD_HALFWIDTH_NORMAL*3));
		
		var rects = vnote.getVHeadsRectanglesDir(EDirectionUD.Up);
		this.assertEquals(rects.first().x, Constants.HEAD_HALFWIDTH_NORMAL);
		this.assertEquals(rects.second().x, -Constants.HEAD_HALFWIDTH_NORMAL);		

		var vnote = new VNote(new QNote1([0, 1]));		
		var rects = vnote.getVHeadsRectanglesDir(EDirectionUD.Down);
		this.assertEquals(rects.first().x, -Constants.HEAD_HALFWIDTH_WIDE);
		this.assertTrue(floatEquals(rects.second().x, -Constants.HEAD_HALFWIDTH_WIDE*3));
		
		var rects = vnote.getVHeadsRectanglesDir(EDirectionUD.Up);
		this.assertEquals(rects.first().x, Constants.HEAD_HALFWIDTH_WIDE);
		this.assertEquals(rects.second().x, -Constants.HEAD_HALFWIDTH_WIDE);						
	}
	
	
	

	public function testVNoteDirectionCalculator() 
	{
		var vnote = new VNote(new QNote([ -1, 0, 1], EDirectionUAD.Auto));
		var calculator = new VNoteDirectionCalculator(vnote);
		this.assertEquals(EDirectionUD.Down, calculator.getDirection(null));

		var vnote = new VNote(new QNote([ -1, 0, 2], EDirectionUAD.Auto));
		var calculator = new VNoteDirectionCalculator(vnote);
		this.assertEquals(EDirectionUD.Up, calculator.getDirection(null));

		var vnote = new VNote(new QNote([ -1, 0, 2], EDirectionUAD.Down));
		var calculator = new VNoteDirectionCalculator(vnote);
		this.assertEquals(EDirectionUD.Down, calculator.getDirection(null));

		var vnote = new VNote(new QNote([ -1, 0, 2]));
		var calculator = new VNoteDirectionCalculator(vnote);
		this.assertEquals(EDirectionUD.Down, calculator.getDirection(EDirectionUD.Down));
		
		var vnote = new VNote(new QNote([ -1, 0, 2], EDirectionUAD.Up));
		var calculator = new VNoteDirectionCalculator(vnote);
		this.assertEquals(EDirectionUD.Up, calculator.getDirection(EDirectionUD.Down));
		
		//----------------------------

		var vnote = new VNote(new QNote([ -1, 0, 2]));
		this.assertEquals(vnote.direction, null);
		this.assertEquals(EDirectionUD.Up, vnote.getDirection());
		vnote.setConfig( { direction:EDirectionUD.Down } );
		this.assertEquals(vnote.direction, null);
		this.assertEquals(EDirectionUD.Down, vnote.getDirection());

		var vnote = new VNote(new QNote([ -1, 0, 2], EDirectionUAD.Down));
		this.assertEquals(EDirectionUD.Down, vnote.getDirection());
		
		var vnote = new VNote(new QNote([ -1, 0, 2]));
		vnote.setConfig( { direction:EDirectionUD.Down } );
		this.assertEquals(EDirectionUD.Down, vnote.getDirection());
		this.assertTrue(vnote.direction != null);
		vnote.setConfig( { direction:null} );
		this.assertTrue(vnote.direction == null);
		this.assertEquals(EDirectionUD.Up, vnote.getDirection());
		
	}
	
	public function testVVoice1()
	{
		var vvoice = new VVoice(new QVoice([4, 8, 8, 2]));
		this.assertEquals(4, vvoice.nvoice.nnotes.length);
		this.assertEquals(4, vvoice.getVNotes().length);
		this.assertEquals(ENoteVal.Nv8, vvoice.getVNotes()[1].nnote.value);
		this.assertEquals(ENoteVal.Nv2, vvoice.getVNotes()[3].nnote.value);
		
		this.assertEquals(0, vvoice.getVNotePositions().get(vvoice.getVNotes()[0]));
		this.assertEquals(ENoteVal.Nv4.value(), vvoice.getVNotePositions().get(vvoice.getVNotes()[1]));
		this.assertEquals(ENoteVal.Nv4.value()+ENoteVal.Nv8.value(), vvoice.getVNotePositions().get(vvoice.getVNotes()[2]));
		this.assertEquals(ENoteVal.Nv4.value()+ENoteVal.Nv8.value()+ENoteVal.Nv8.value(), vvoice.getVNotePositions().get(vvoice.getVNotes()[3]));
	}
	
	// Test lazy instatioation (private variables!)
	public function testVVoice2()
	{
		var vvoice = new VVoice(new QVoice([4, 8, 8, 2]));
		this.assertTrue(vvoice.vnotes == null);
		vvoice.getVNotes();
		this.assertTrue(vvoice.vnotes != null);

		this.assertTrue(vvoice.vnotePositions == null);
		vvoice.getVNotePositions().get(vvoice.getVNotes()[0]);
		this.assertTrue(vvoice.vnotePositions != null);
		
		var vvoice = new VVoice(new QVoice([4, 8, 8, 2]));
		this.assertTrue(vvoice.vnotes == null);
		this.assertTrue(vvoice.value == null);
		var value = vvoice.getValue();
		this.assertTrue(vvoice.vnotes != null);
		this.assertTrue(vvoice.value != null);
		this.assertEquals(ENoteVal.Nv4.value() * 4, vvoice.value);
	}
	
	public function testBeamgroups()
	{
		var vvoice = new VVoice(new QVoice([8, 8, 8, 8, 8, 8]));
		this.assertTrue(vvoice.beamgroups == null);
		var beamgroups:Array<VBeamgroup> = vvoice.getBeamgroups([ENoteVal.Nv4]);
		this.assertEquals(3, beamgroups.length);
		this.assertEquals(2, beamgroups[0].vnotes.length);
		this.assertEquals(2, beamgroups[1].vnotes.length);
		this.assertEquals(2, beamgroups[2].vnotes.length);
		this.assertTrue(vvoice.beamgroups != null);
		var beamgroups:Array<VBeamgroup> = vvoice.getBeamgroups([ENoteVal.Nv4dot]);
		this.assertEquals(2, beamgroups.length);
		this.assertEquals(3, beamgroups[0].vnotes.length);
		this.assertEquals(3, beamgroups[1].vnotes.length);
		
		var vvoice = new VVoice(new QVoice([4, 8, 8, 8, 8]));		
		var beamgroups:Array<VBeamgroup> = vvoice.getBeamgroups([ENoteVal.Nv4]);
		this.assertEquals(3, beamgroups.length);
		this.assertEquals(1, beamgroups[0].vnotes.length);
		this.assertEquals(2, beamgroups[1].vnotes.length);
		this.assertEquals(2, beamgroups[2].vnotes.length);
		
		
		var beamgroups:Array<VBeamgroup> = vvoice.getBeamgroups([ENoteVal.Nv4dot]);
		this.assertEquals(3, beamgroups.length);
		this.assertEquals(1, beamgroups[0].vnotes.length);
		this.assertEquals(1, beamgroups[1].vnotes.length);
		this.assertEquals(3, beamgroups[2].vnotes.length);
		
		
		var vvoice = new VVoice(new QVoice([8, 4, 8, 8, 8]));		
		var beamgroups:Array<VBeamgroup> = vvoice.getBeamgroups([ENoteVal.Nv4]);
		this.assertEquals(4, beamgroups.length);
		this.assertEquals(1, beamgroups[0].vnotes.length);
		this.assertEquals(1, beamgroups[1].vnotes.length);
		this.assertEquals(1, beamgroups[2].vnotes.length);
		this.assertEquals(2, beamgroups[3].vnotes.length);
		
		
		var beamgroups:Array<VBeamgroup> = vvoice.getBeamgroups([ENoteVal.Nv4dot]);
		this.assertEquals(3, beamgroups.length);
		this.assertEquals(1, beamgroups[0].vnotes.length);
		this.assertEquals(1, beamgroups[1].vnotes.length);
		this.assertEquals(3, beamgroups[2].vnotes.length);
		
		var vvoice = new VVoice(new QVoice([.2, 16, 16, 16, 16]));		
		var beamgroups:Array<VBeamgroup> = vvoice.getBeamgroups([ENoteVal.Nv4]);		
		this.assertEquals(2, beamgroups.length);
		this.assertEquals(1, beamgroups.first().vnotes.length);
		this.assertEquals(4, beamgroups.second().vnotes.length);	
		//-------------------------------------------------------------------
		// pauses...
		
		var vvoice = new VVoice(new NVoice([new NNote(
			ENoteType.Pause(0), ENoteVal.Nv8), 
			new QNote8(),
			new QNote8(),
			new QNote8(),
			new QNote8(), 
			new QNote8(),
			]));
		var beamgroups:Array<VBeamgroup> = vvoice.getBeamgroups([ENoteVal.Nv4]);
		this.assertEquals(beamgroups.length, 4);
		this.assertEquals(beamgroups.first().vnotes.length, 1);
		this.assertEquals(beamgroups.second().vnotes.length, 1);
		this.assertEquals(beamgroups.third().vnotes.length, 2);
		this.assertEquals(beamgroups.fourth().vnotes.length, 2);

		var beamgroups:Array<VBeamgroup> = vvoice.getBeamgroups([ENoteVal.Nv4dot]);
		this.assertEquals(beamgroups.length, 3);
		this.assertEquals(beamgroups.first().vnotes.length, 1);
		this.assertEquals(beamgroups.second().vnotes.length, 2);
		this.assertEquals(beamgroups.third().vnotes.length, 3);

		var vvoice = new VVoice(new NVoice([new NNote(
			ENoteType.Pause(0), ENoteVal.Nv8), 
			new QNote4(),
			new QNote8(),
			new QNote8(), 
			new QNote8(),
			]));
		var beamgroups:Array<VBeamgroup> = vvoice.getBeamgroups([ENoteVal.Nv4]);
		this.assertEquals(beamgroups.length, 4);
		this.assertEquals(beamgroups.first().vnotes.length, 1);
		this.assertEquals(beamgroups.second().vnotes.length, 1);
		this.assertEquals(beamgroups.third().vnotes.length, 1);
		this.assertEquals(beamgroups.fourth().vnotes.length, 2);

		var vvoice = new VVoice(new NVoice([new NNote(
			ENoteType.Pause(0), ENoteVal.Nv8), 
			new QNote4(),
			new QNote8(),
			new QNote8(), 
			new QNote8(),
			]));
		var beamgroups:Array<VBeamgroup> = vvoice.getBeamgroups([ENoteVal.Nv4dot]);
		this.assertEquals(beamgroups.length, 3);
		this.assertEquals(beamgroups.first().vnotes.length, 1);
		this.assertEquals(beamgroups.second().vnotes.length, 1);
		this.assertEquals(beamgroups.third().vnotes.length, 3);

		var vvoice = new VVoice(new NVoice([
			new NNote(ENoteType.Pause(0), ENoteVal.Nv16), 
			new QNote16(),
			new QNote16(),
			new QNote16(),
			new QNote16(),
			new QNote8(),
			new QNote16(),
			new QNote8(), 
			new QNote16(),
			new QNote16(),
		]));
		var beamgroups:Array<VBeamgroup> = vvoice.getBeamgroups([ENoteVal.Nv4]);
		this.assertEquals(beamgroups.length, 4);
		this.assertEquals(beamgroups.first().vnotes.length, 1);
		this.assertEquals(beamgroups.second().vnotes.length, 3);
		this.assertEquals(beamgroups.third().vnotes.length, 3);
		this.assertEquals(beamgroups.last().vnotes.length, 3);
		
		var vvoice = new VVoice(new NVoice([
			new NNote(ENoteType.Pause(0), ENoteVal.Nv16), 
			new QNote16(),
			new QNote16(),
			new QNote16(),
			new QNote16(),
			new QNote8(),
			new NNote(ENoteType.Pause(0), ENoteVal.Nv16),
			new QNote8(), 
			new QNote16(),
			new NNote(ENoteType.Pause(0), ENoteVal.Nv16),
		]));
		var beamgroups:Array<VBeamgroup> = vvoice.getBeamgroups([ENoteVal.Nv4]);
		this.assertEquals(beamgroups.length, 6);
		
		//----------
		// Lyrics
		var vvoice = TestItems.vvoiceLyrics1();
		var beamgroups:VBeamgroups = vvoice.getBeamgroups([ENoteVal.Nv4]);
		this.assertEquals(beamgroups.length, 2);
	}
	
	public function testBeamgroupPause()
	{
		//var vvoice = TestItems.vvoicePausesEights();
		var vvoice = new VVoice(new NVoice([
			new QNote8(0), 
			new QNote8(0), 
		]));
		
		var beamgroups = vvoice.getBeamgroups();
		this.assertEquals(beamgroups.length, 1);
		
	}
	
	public function testBeamgroupDirection()
	{
		var calculator = new VBeamgroupDirectionCalculator(new VBeamgroup([new VNote(new QNote4(0))]));
		var direction = calculator.getDirection();
		this.assertEquals(calculator.getDirection(), EDirectionUD.Down);
		this.assertEquals(0, calculator.topLevel);
		this.assertEquals(0, calculator.bottomLevel);
		
		var calculator = new VBeamgroupDirectionCalculator(new VBeamgroup([new VNote(new QNote4(5))]));
		var direction = calculator.getDirection();
		this.assertEquals(calculator.getDirection(), EDirectionUD.Up);
		this.assertEquals(5, calculator.topLevel);
		this.assertEquals(5, calculator.bottomLevel);		
		
		var calculator = new VBeamgroupDirectionCalculator(new VBeamgroup([new VNote(new QNote4(-2))]));
		var direction = calculator.getDirection();
		this.assertEquals(calculator.getDirection(), EDirectionUD.Down);
		this.assertEquals(-2, calculator.topLevel);
		this.assertEquals(-2, calculator.bottomLevel);		
		
		var vnotes = [new VNote(new QNote8([-2, 3]))];
		var calculator = new VBeamgroupDirectionCalculator(new VBeamgroup(vnotes));
		var direction = calculator.getDirection();
		this.assertEquals(calculator.getDirection(), EDirectionUD.Up);
		this.assertEquals(-2, calculator.topLevel);
		this.assertEquals(3, calculator.bottomLevel);		

		var vnotes = [new VNote(new QNote8([3])), new VNote(new QNote8([-2]))];
		var calculator = new VBeamgroupDirectionCalculator(new VBeamgroup(vnotes));
		var direction = calculator.getDirection();
		this.assertEquals(calculator.getDirection(), EDirectionUD.Up);
		this.assertEquals(-2, calculator.topLevel);
		this.assertEquals(3, calculator.bottomLevel);		
		
		var vnotes = [new VNote(new QNote8([3])), new VNote(new QNote8([-5])), new VNote(new QNote8([4]))];
		var calculator = new VBeamgroupDirectionCalculator(new VBeamgroup(vnotes));
		var direction = calculator.getDirection();
		this.assertEquals(calculator.getDirection(), EDirectionUD.Down);
		this.assertEquals(-5, calculator.topLevel);
		this.assertEquals(4, calculator.bottomLevel);		
		
		var calculator = new VBeamgroupDirectionCalculator(new VBeamgroup([new VNote(new QNote4(0))]));
		this.assertEquals(EDirectionUD.Down, calculator.getDirection());	
	}
	
	public function testBeamgroupDirectionPauses()
	{
		var calculator = new VBeamgroupDirectionCalculator(new VBeamgroup([new VNote(new NNote(ENoteType.Pause(0), ENoteVal.Nv4))]));
		var direction = calculator.getDirection();	
		this.assertTrue(true);
	}
	
	
	public function  testVBarWithPauses()
	{
		var vbar = TestItems.vbarPauses();
		vbar.getVColumnsMinDistances();
		this.assertTrue(true);
	}
	
	
	
	public function testBeamgroupDirectionSetter()
	{
		var beamgroup = new VBeamgroup([new VNote(new QNote4(0))]);
		this.assertEquals(EDirectionUD.Down, beamgroup.getDirection());

		var beamgroup = new VBeamgroup([new VNote(new QNote4(0))]);
		beamgroup.setDirection(EDirectionUD.Up);
		this.assertEquals(EDirectionUD.Up, beamgroup.getDirection());
	}
	
	
	public function testBeamgroupCalculator()
	{
		//var vnotes = [new VNote(new QNote8([ -2, 2]))];
		var vpart  = new VPart(new NPart([new NVoice([new QNote8([ -2, 2])   ])]));
		var beamgroup = vpart.getVoiceBeamgroups(vpart.getVVoices().first()).first();		
		var calc = new VBeamgroupFrameCalculator(beamgroup);
		var frame = calc.getFrame();
		this.assertEquals([-2].toString(), calc.getTopLevels().toString());
		this.assertEquals([2].toString(), calc.getBottomLevels().toString());
		
		//var vnotes = [new VNote(new QNote8([-2, 4])), new VNote(new QNote8([5, -3]))];
		var vpart  = new VPart(new NPart([new NVoice([  new QNote8([-2, 4]), new QNote8([5, -3])   ])]));
		var beamgroup = vpart.getVoiceBeamgroups(vpart.getVVoices().first()).first();		
		var calc = new VBeamgroupFrameCalculator(beamgroup);
		var frame = calc.getFrame();
		this.assertEquals([-2, -3].toString(), calc.getTopLevels().toString());
		this.assertEquals([4, 5].toString(), calc.getBottomLevels().toString());
		
		//var vnotes = [new VNote(new QNote8([ -2, 4])), new VNote(new QNote8([6])), new VNote(new QNote8([ -4])), new VNote(new QNote8([ -3, 5])), new VNote(new QNote8([0]))];		
		var vpart  = new VPart(new NPart([new NVoice([  
			new QNote8([ -2, 4]), 
			new QNote8([6]),
			new QNote8([ -4]),
			new QNote8([ -3, 5]),
			new QNote8([0]),
		])]));
		
		var vnotes = vpart.getVVoices().first().getVNotes();
		var beamgroup = new VBeamgroup(vnotes);
		//var beamgroup = vpart.getVoiceBeamgroups(vpart.getVVoices().first()).first();		
		beamgroup.setCalculatedDirection(EDirectionUD.Down);
		var calc = new VBeamgroupFrameCalculator(beamgroup);
		var frame = calc.getFrame();		
		this.assertEquals([-2, 6, -4, -3, 0].toString(), calc.getTopLevels().toString());
		this.assertEquals([4, 6, -4, 5, 0].toString(), calc.getBottomLevels().toString());
	}
	
	public function testPartBeamgroupCalculator()
	{
		var vpart = new VPart(new NPart([new QVoice([8, 8], [ 1, 1])]));
		var beamgroups = vpart.getVoiceBeamgroups(vpart.getVVoices().first());
		this.assertEquals(beamgroups.length, 1);
		var beamgroup1 = beamgroups.first();
		this.assertEquals(beamgroup1.getCalculatedDirection(), EDirectionUD.Up);
		//var frame1 = beamgroup1.getFrame();
		//trace(frame1);
		
		
	}
	
	
	public function testBeamgroupValue()
	{
		var vvoice = new VVoice(new QVoice([8, 8, 8, 8, 8, 8]));
		var beamgroups:Array<VBeamgroup> = vvoice.getBeamgroups([ENoteVal.Nv4]);		
		this.assertEquals(beamgroups.length, 3);
		this.assertEquals(beamgroups.first().getValue(), ENoteVal.Nv4.value());
	}
	
	public function testBeamgroupFrame() 
	{
		//var vnotes = [new VNote(new QNote8([ -2, 1])), new VNote(new QNote8([ -4, 3]))];
		//var npart = new NPart([new NVoice([new QNote8([ -2, 1]), new QNote8([ -4, 3])]);
		var vpart  = new VPart(new NPart([new NVoice([new QNote8([ -2, 1]), new QNote8([ -4, 3])   ])]));
		//vpart.calculateBeamgropusDirections();
		var voice0 = vpart.getVVoices().first();
		var beamgroup = vpart.getVoiceBeamgroups(voice0).first();
		var frame = beamgroup.getFrame();
		this.assertEquals(EDirectionUD.Down, beamgroup.getDirection());
		var frame = beamgroup.getFrame();
		this.assertEquals(beamgroup.getCalculatedDirection(), EDirectionUD.Down);
		this.assertEquals([1, 3].toString(), beamgroup.calculator.outerLevels.toString());
		this.assertEquals([ -2, -4].toString(), beamgroup.calculator.innerLevels.toString());
		//this.assertEquals(frame.

		/*
		// OBS TODO!
		this.assertEquals(-2, frame.leftInnerY);
		this.assertEquals(1, frame.leftOuterY);
		this.assertEquals(-4, frame.rightInnerY);
		this.assertEquals(3, frame.rightOuterY);
		
		var vnotes = [new VNote(new QNote8([ -2, 1])), new VNote(new QNote8([ -4, 3]))];
		var beamgroup = new VBeamgroup(vnotes);
		beamgroup.setDirection(EDirectionUD.Up);
		var frame = beamgroup.getFrame();		
		this.assertEquals(EDirectionUD.Up, beamgroup.getDirection());
		this.assertEquals([1, 3].toString(), beamgroup.calculator.innerLevels.toString());
		this.assertEquals([ -2, -4].toString(), beamgroup.calculator.outerLevels.toString());
		
		// OBS TODO!
		this.assertEquals(1, frame.leftInnerY);
		this.assertEquals(-2, frame.leftOuterY);
		this.assertEquals(3, frame.rightInnerY);
		this.assertEquals(-4, frame.rightOuterY);
		*/
	}
	
	public function testFrameTipCalculator()
	{
		
		var tips = new VBamegroupFrameTipCalculator( [0,0], EDirectionUD.Up).getTips();
		this.assertEquals(tips.leftTip, 0);
		this.assertEquals(tips.rightTip, 0);
		
		var tips = new VBamegroupFrameTipCalculator( [8, 0], EDirectionUD.Up).getTips();
		this.assertEquals(tips.leftTip, 2);
		this.assertEquals(tips.rightTip, 0);
		
		var tips = new VBamegroupFrameTipCalculator( [0, 8], EDirectionUD.Up).getTips();
		this.assertEquals(tips.leftTip, 0);
		this.assertEquals(tips.rightTip, 2);
		
		
		var tips = new VBamegroupFrameTipCalculator( [0, 0, 0], EDirectionUD.Up).getTips();
		this.assertEquals(tips.leftTip, 0);
		this.assertEquals(tips.rightTip, 0);		
		
		var tips = new VBamegroupFrameTipCalculator( [8, 0, 0], EDirectionUD.Up).getTips();
		this.assertEquals(tips.leftTip, 0);
		this.assertEquals(tips.rightTip, 0);				
		
		var tips = new VBamegroupFrameTipCalculator( [0, 0, 8], EDirectionUD.Up).getTips();
		this.assertEquals(tips.leftTip, 0);
		this.assertEquals(tips.rightTip, 0);						
		
		var tips = new VBamegroupFrameTipCalculator( [8, 0, 8], EDirectionUD.Up).getTips();
		this.assertEquals(tips.leftTip, 0);
		this.assertEquals(tips.rightTip, 0);			
		
		var tips = new VBamegroupFrameTipCalculator( [3, 3, 0], EDirectionUD.Up).getTips();
		this.assertEquals(tips.leftTip, 2);
		this.assertEquals(tips.rightTip, 0);				

		var tips = new VBamegroupFrameTipCalculator( [2, 2, 0], EDirectionUD.Up).getTips();
		this.assertEquals(tips.leftTip, 2);
		this.assertEquals(tips.rightTip, 0);			
		
		var tips = new VBamegroupFrameTipCalculator( [1, 1, 0], EDirectionUD.Up).getTips();
		this.assertEquals(tips.leftTip, 1);
		this.assertEquals(tips.rightTip, 0);					
		
		var tips = new VBamegroupFrameTipCalculator( [0, 1, 1], EDirectionUD.Up).getTips();
		this.assertEquals(tips.leftTip, 0);
		this.assertEquals(tips.rightTip, 1);				
		
		var tips = new VBamegroupFrameTipCalculator( [0, 2, 2], EDirectionUD.Up).getTips();
		this.assertEquals(tips.leftTip, 0);
		this.assertEquals(tips.rightTip, 2);			
		
		var tips = new VBamegroupFrameTipCalculator( [0, 3, 3], EDirectionUD.Up).getTips();
		this.assertEquals(tips.leftTip, 0);
		this.assertEquals(tips.rightTip, 2);					
				
		var tips = new VBamegroupFrameTipCalculator( [8, 8, 8], EDirectionUD.Up).getTips();
		this.assertEquals(tips.leftTip, 7);
		this.assertEquals(tips.rightTip, 7);				
		
		//-----------------------------------------------
		
		var tips = new VBamegroupFrameTipCalculator( [0, 0, 0], EDirectionUD.Down).getTips();		
		this.assertEquals(tips.leftTip, 0);
		this.assertEquals(tips.rightTip, 0);				
		
		var tips = new VBamegroupFrameTipCalculator( [-8, -8,  -8], EDirectionUD.Down).getTips();		
		this.assertEquals(tips.leftTip, -7);
		this.assertEquals(tips.rightTip, -7);			
		
		var tips = new VBamegroupFrameTipCalculator( [0, -2, -2], EDirectionUD.Down).getTips();
		this.assertEquals(tips.leftTip, 0);
		this.assertEquals(tips.rightTip, -2);				
		
		var tips = new VBamegroupFrameTipCalculator( [-8, 0, -8], EDirectionUD.Down).getTips();
		this.assertEquals(tips.leftTip, 0);
		this.assertEquals(tips.rightTip, 0);					
	}
	
	public function testNotesBeamgroups()
	{
		var vvoice = new VVoice(new QVoice([8, 8, 8, 8, 8, 8]));		
		var beamgroups:Array<VBeamgroup> = vvoice.getBeamgroups([ENoteVal.Nv4]);		
		//var beamgroups2:VBeamgroups = vvoice.getBeamgroups2([ENoteVal.Nv4]);		
		
		this.assertEquals(beamgroups.length, 3);
		this.assertEquals(vvoice.getNotesBeamgroups().keys().keysToArray().length, 6);
		this.assertEquals(vvoice.getNotesBeamgroups().get(vvoice.getVNotes().first()), beamgroups.first());
		this.assertEquals(vvoice.getNotesBeamgroups().get(vvoice.getVNotes().second()), beamgroups.first());
		this.assertEquals(vvoice.getNotesBeamgroups().get(vvoice.getVNotes().third()), beamgroups.second());
		this.assertEquals(vvoice.getNotesBeamgroups().get(vvoice.getVNotes().fourth()), beamgroups.second());
		this.assertEquals(vvoice.getNotesBeamgroups().get(vvoice.getVNotes().fifth()), beamgroups.third());
		this.assertEquals(vvoice.getNotesBeamgroups().get(vvoice.getVNotes().sixth()), beamgroups.third());
		
		var vvoice = new VVoice(new NVoice([
			new NNote(ENoteType.Pause(0), ENoteVal.Nv8), 
			new QNote8(),
			new QNote8(),
			new QNote8(),
			new NNote(ENoteType.Pause(0), ENoteVal.Nv8),
			new QNote16(), 
			new QNote16(), 
			]));		
		var beamgroups:Array<VBeamgroup> = vvoice.getBeamgroups([ENoteVal.Nv4dot]);		
		this.assertEquals(beamgroups.length, 5);
		this.assertEquals(vvoice.getNotesBeamgroups().get(vvoice.getVNotes().first()), beamgroups.first());
		this.assertEquals(vvoice.getNotesBeamgroups().get(vvoice.getVNotes().second()), beamgroups.second());
		this.assertEquals(vvoice.getNotesBeamgroups().get(vvoice.getVNotes().third()), beamgroups.second());
		this.assertEquals(vvoice.getNotesBeamgroups().get(vvoice.getVNotes().fourth()), beamgroups.third());
		this.assertEquals(vvoice.getNotesBeamgroups().get(vvoice.getVNotes().fifth()), beamgroups.fourth());
		this.assertEquals(vvoice.getNotesBeamgroups().get(vvoice.getVNotes().sixth()), beamgroups.fifth());
		this.assertEquals(vvoice.getNotesBeamgroups().get(vvoice.getVNotes().seventh()), beamgroups.fifth());
		
	}
	
	public function testVComplexSigns()
	{
		var vcomplex = new VComplex([new VNote(new QNote4(0))]);
		this.assertEquals(1, vcomplex.getVNotes().length);
		var signs = vcomplex.getSigns();
		this.assertEquals(signs[0].sign, ESign.None);
		this.assertEquals(signs[0].level, 0);
		
		var vcomplex = new VComplex([new VNote(new QNote4(2, '#')), new VNote(new QNote4(-3, 'n'))]);
		this.assertEquals(2, vcomplex.getVNotes().length);
		var signs = vcomplex.getSigns();
		this.assertEquals(signs.length, 2);
		this.assertEquals(signs[0].level, -3);
		this.assertEquals(signs[0].sign, ESign.Natural);
		this.assertEquals(signs[1].level, 2);
		this.assertEquals(signs[1].sign, ESign.Sharp);

		var vcomplex = new VComplex([new VNote(new QNote4([-4, 1, 3], 'b.#'))]);
		var signs = vcomplex.getSigns();
		this.assertEquals(signs.length, 3);
		this.assertEquals(signs[0].level, -4);
		this.assertEquals(signs[0].sign, ESign.Flat);
		this.assertEquals(signs[1].level, 1);
		this.assertEquals(signs[1].sign, ESign.None);
		this.assertEquals(signs[2].level, 3);
		this.assertEquals(signs[2].sign, ESign.Sharp);
		
		var vcomplex = new VComplex([new VNote(new QNote4([-2, 0, 2], 'n#.')), new VNote(new QNote4([-4, 1, 3], 'b.#'))]);
		var signs = vcomplex.getSigns();
		this.assertEquals(signs.length, 6);
		this.assertEquals(signs[0].level, -4);
		this.assertEquals(signs[0].sign, ESign.Flat);
		this.assertEquals(signs[1].level,-2);
		this.assertEquals(signs[1].sign, ESign.Natural);
		this.assertEquals(signs[2].level, 0);
		this.assertEquals(signs[2].sign, ESign.Sharp);
		this.assertEquals(signs[3].level, 1);
		this.assertEquals(signs[3].sign, ESign.None);
		this.assertEquals(signs[4].level, 2);
		this.assertEquals(signs[4].sign, ESign.None);
		this.assertEquals(signs[5].level, 3);
		this.assertEquals(signs[5].sign, ESign.Sharp);

		//--------------------------------------------------------------------
		
		var vcomplex = new VComplex([new VNote(new QNote4(0))]);
		var signs = vcomplex.getVisibleSigns();
		this.assertEquals(0, signs.length);
		
		var vcomplex = new VComplex([new VNote(new QNote4(2, '#')), new VNote(new QNote4(-3, '.'))]);
		this.assertEquals(2, vcomplex.getVNotes().length);
		var signs = vcomplex.getVisibleSigns();
		this.assertEquals(signs.length, 1);
		this.assertEquals(signs[0].level, 2);
		this.assertEquals(signs[0].sign, ESign.Sharp);
		
		var vcomplex = new VComplex([new VNote(new QNote4([-2, 0, 2], 'n#.')), new VNote(new QNote4([-4, 1, 3], 'b.#'))]);
		var signs = vcomplex.getVisibleSigns();
		this.assertEquals(signs.length, 4);
		this.assertEquals(signs[0].level, -4);
		this.assertEquals(signs[0].sign, ESign.Flat);
		this.assertEquals(signs[1].level,-2);
		this.assertEquals(signs[1].sign, ESign.Natural);
		this.assertEquals(signs[2].level, 0);
		this.assertEquals(signs[2].sign, ESign.Sharp);
		this.assertEquals(signs[3].level, 3);
		this.assertEquals(signs[3].sign, ESign.Sharp);		
		
	}
	
	public function testVComplexHeadsCollisionOffset()
	{
		var n0 = new VNote(new QNote( -2));
		var n1 = new VNote(new QNote(-2));
		var complex = new VComplex([n0, n1]);
		this.assertEquals(complex.getHeadsCollisionOffsetX(n0), 0);
		this.assertEquals(complex.getHeadsCollisionOffsetX(n1), Constants.HEAD_HALFWIDTH_NORMAL*2);
		
		var n0 = new VNote(new QNote( -2));
		var n1 = new VNote(new QNote(-1));
		var complex = new VComplex([n0, n1]);
		this.assertEquals(complex.getHeadsCollisionOffsetX(n0), 0);
		this.assertEquals(complex.getHeadsCollisionOffsetX(n1), Constants.HEAD_HALFWIDTH_NORMAL*2*0.7);		
		
		var n0 = new VNote(new QNote( -2));
		var n1 = new VNote(new QNote(0));
		var complex = new VComplex([n0, n1]);		
		this.assertEquals(complex.getHeadsCollisionOffsetX(n0), 0);
		this.assertEquals(complex.getHeadsCollisionOffsetX(n1), 0);					
	}
	
	public function testVComplexHeadsIntersectionOffset()
	{
		var n0 = new VNote(new QNote(0));
		var n1 = new VNote(new QNote(2));
		var complex = new VComplex([n0, n1]);		
		var rects0 = n0.getVHeadsRectanglesDir(EDirectionUD.Up);
		var rects1 = n1.getVHeadsRectanglesDir(EDirectionUD.Down);

		//var x = complex.getRectanglesXIntersection(rects0, rects1);
		//trace(x);
		this.assertTrue(true);
	}
	
	public function testVComplexNoteHeadsRectOneNote()
	{
		var n0 = new VNote(new QNote( 0));
		var complex = new VComplex([n0]);
		var r0 = complex.getNoteRect(n0);
		this.assertTrue(rectEquals(r0, -Constants.HEAD_HALFWIDTH_NORMAL, -1, Constants.HEAD_HALFWIDTH_NORMAL*2, 2));

		var n0 = new VNote(new QNote([0, 1]));
		var complex = new VComplex([n0]);
		var r0 = complex.getNoteRect(n0);
		this.assertTrue(rectEquals(r0, -Constants.HEAD_HALFWIDTH_NORMAL, -1, Constants.HEAD_HALFWIDTH_NORMAL*4, 3));

		var n0 = new VNote(new QNote([0, 1]));
		var complex = new VComplex([n0]);
		var r0 = complex.getNoteRect(n0, EDirectionUD.Up);
		this.assertTrue(rectEquals(r0, -Constants.HEAD_HALFWIDTH_NORMAL, -1, Constants.HEAD_HALFWIDTH_NORMAL*4, 3));		
		
		var n0 = new VNote(new QNote([0, 1]));
		var complex = new VComplex([n0]);
		var r0 = complex.getNoteRect(n0, EDirectionUD.Down);
		this.assertTrue(rectEquals(r0, -Constants.HEAD_HALFWIDTH_NORMAL*3, -1, Constants.HEAD_HALFWIDTH_NORMAL*4, 3));						
	}
	
	/*
	public function testVComplexGetDots()
	{
		
		var n0 = new VNote(new NNote([new NHead(1)], ENoteVal.Nv4dot));		
		var n1 = new VNote(new NNote([new NHead(3)], ENoteVal.Nv4ddot));		
		var complex = new VComplex([n0, n1]);
		var dots:EDots = complex.getDots();
		this.assertEquals(dots.length, 2);		
		
	}	
	*/
	
	/*
	public function testVComplexNoteHeadsRectTwoNotes()
	{
		var n0 = new VNote(new QNote([0,1]));
		var n1 = new VNote(new QNote([2, 3]));
		var complex = new VComplex([n0, n1]);
		var r0 = complex.getNoteHeadsRect(n0);
		var r1 = complex.getNoteHeadsRect(n1, EDirectionUD.Down);
		this.assertTrue(rectEquals(r0, -Constants.HEAD_HALFWIDTH_NORMAL, -1, Constants.HEAD_HALFWIDTH_NORMAL*4, 3));
		this.assertTrue(rectEquals(r1, -Constants.HEAD_HALFWIDTH_NORMAL*2, 1, Constants.HEAD_HALFWIDTH_NORMAL*4, 3));
	}
	*/
	
	/*
	public function testVComplexHeadsRect()
	{
		var n0 = new VNote(new QNote4(0));
		var complex = new VComplex([n0]);		
		var rect = complex.getHeadsUnionRect();
		this.assertEquals(rect.toString(), new Rectangle( -Constants.HEAD_HALFWIDTH_NORMAL, -1, Constants.HEAD_HALFWIDTH_NORMAL * 2, 2).toString());
		
		var n0 = new VNote(new QNote1(0));
		var complex = new VComplex([n0]);		
		var rect = complex.getHeadsUnionRect();
		this.assertEquals(rect.toString(), new Rectangle( -Constants.HEAD_HALFWIDTH_WIDE, -1, Constants.HEAD_HALFWIDTH_WIDE * 2, 2).toString());

		var n0 = new VNote(new QNote4(-1));
		var n1 = new VNote(new QNote4(1));
		var complex = new VComplex([n0, n1]);		
		var rect = complex.getHeadsUnionRect();
		this.assertEquals(rect.toString(), new Rectangle( -Constants.HEAD_HALFWIDTH_NORMAL, -2, Constants.HEAD_HALFWIDTH_NORMAL * 2, 4).toString());

		var n0 = new VNote(new QNote4(-1));
		var n1 = new VNote(new QNote4(0));
		var complex = new VComplex([n0, n1]);		
		var rect = complex.getHeadsUnionRect();
		this.assertEquals(rect.toString(), new Rectangle( -Constants.HEAD_HALFWIDTH_NORMAL, -2, Constants.HEAD_HALFWIDTH_NORMAL * 2 + Constants.COMPLEX_COLLISION_ADJUST_NEXTLINE, 3).toString());

		var n0 = new VNote(new QNote4(-1));
		var n1 = new VNote(new QNote4(-1));
		var complex = new VComplex([n0, n1]);		
		var rect = complex.getHeadsUnionRect();		
		this.assertTrue(rectEquals(rect, new Rectangle( -Constants.HEAD_HALFWIDTH_NORMAL, -2, Constants.HEAD_HALFWIDTH_NORMAL * 2 + Constants.COMPLEX_COLLISION_ADJUST_SAMELINE, 2)));
	}
	*/
	
	/*
	public function testVComplexHeadsRectDirs()
	{	
		
		var n0 = new VNote(new QNote4([0, 1]));		
		var complex = new VComplex([n0]);		
		var rect = complex.getHeadsUnionRect();
		this.assertTrue(rectEquals(rect, -Constants.HEAD_HALFWIDTH_NORMAL, -1, Constants.HEAD_HALFWIDTH_NORMAL * 4, 3));
		
		var n0 = new VNote(new QNote4([0, 1]));		
		var complex = new VComplex([n0], [EDirectionUD.Up]);		
		var rect = complex.getHeadsUnionRect();
		this.assertTrue(rectEquals(rect, -Constants.HEAD_HALFWIDTH_NORMAL, -1, Constants.HEAD_HALFWIDTH_NORMAL * 4, 3));

		var n0 = new VNote(new QNote4([0, 1]));		
		var complex = new VComplex([n0], [EDirectionUD.Down]);		
		complex.setDirections( [EDirectionUD.Up]);
		var rect = complex.getHeadsUnionRect();
		this.assertTrue(rectEquals(rect, -Constants.HEAD_HALFWIDTH_NORMAL, -1, Constants.HEAD_HALFWIDTH_NORMAL * 4, 3));
		
		var n0 = new VNote(new QNote4([0, 1]));		
		var complex = new VComplex([n0], [EDirectionUD.Down]);		
		var rect = complex.getHeadsUnionRect();
		this.assertTrue(rectEquals(rect, -Constants.HEAD_HALFWIDTH_NORMAL * 3, -1, Constants.HEAD_HALFWIDTH_NORMAL * 4, 3));
		
		var n0 = new VNote(new QNote4([0, 1]));		
		var n1 = new VNote(new QNote4([3]));		
		var complex = new VComplex([n0, n1], [EDirectionUD.Up, EDirectionUD.Down]);		
		var rect = complex.getHeadsUnionRect();
		this.assertTrue(rectEquals(rect, -Constants.HEAD_HALFWIDTH_NORMAL, -1, Constants.HEAD_HALFWIDTH_NORMAL * 4, 5));

		var n0 = new VNote(new QNote4([0, 1]));		
		var n1 = new VNote(new QNote4([2]));		
		var complex = new VComplex([n0, n1], [EDirectionUD.Up, EDirectionUD.Down]);		
		var rect = complex.getHeadsUnionRect();		
		this.assertTrue(rectEquals(rect, -Constants.HEAD_HALFWIDTH_NORMAL, -1, Constants.HEAD_HALFWIDTH_NORMAL * 4, 4));
		var rects = complex.getHeadsRects();
		
		var n0 = new VNote(new QNote4([0, 1]));		
		var n1 = new VNote(new QNote4([1]));		
		var complex = new VComplex([n0, n1], [EDirectionUD.Up, EDirectionUD.Down]);				
		var rect = complex.getHeadsUnionRect();		
		this.assertTrue(rectEquals(rect, -Constants.HEAD_HALFWIDTH_NORMAL, -1, Constants.HEAD_HALFWIDTH_NORMAL * 4, 3));
		
		var n0 = new VNote(new QNote4([0, 1]));		
		var n1 = new VNote(new QNote4([1]));		
		var complex = new VComplex([n0, n1], [EDirectionUD.Up, EDirectionUD.Down]);				
		var rect = complex.getHeadsUnionRect();		
		var rects = complex.getHeadsRects();
		this.assertTrue(rectEquals(rect, -Constants.HEAD_HALFWIDTH_NORMAL, -1, Constants.HEAD_HALFWIDTH_NORMAL * 4, 3));
	}	
	*/
	
	public function testComplexSignsRectsGenerator()
	{
		var signs:VSigns = [ { sign:ESign.Flat, level:0, position:0 } ,  { sign:ESign.Flat, level:1, position:0 },  { sign:ESign.Flat, level:5, position:0 }];
		var calculator = new VComplexSignsRectsCalculator(signs);
		var rects = calculator.getSignRects();
		this.assertEquals(rects.length, 3);
		
		var signs:VSigns = [ { sign:ESign.Flat, level:0, position:0 } ];
		var calculator = new VComplexSignsRectsCalculator(signs);
		var rects = calculator.getSignRects();
		this.assertEquals(rects.length, 1);
		
		var signs:VSigns = [ { sign:ESign.Flat, level:0, position:0 } ];
		var calculator = new VComplexSignsRectsCalculator(signs);
		var rects = calculator.getSignRects([new Rectangle(-1, -10, 5, 20)]);
		this.assertEquals(rects.length, 1);
	}
	

	
	public function testVPartComplexesGenerator()
	{
		var vvoice = new VVoice(new QVoice([4, 8, 8, 2]));
		var generator = new VPartComplexesGenerator([vvoice]);
		var complexes = generator.getComplexes();
		var keys = generator.positionsMap.keys().keysToArray();
		keys.sort(function(a, b) { return Reflect.compare(a, b); } );			
		this.assertEquals(keys.toString(), [0, 3024, 4536, 6048].toString());
		this.assertEquals(complexes.length, 4);

		var vvoice0 = new VVoice(new QVoice([4, 8, 8, 2]));
		var vvoice1 = new VVoice(new QVoice([4, 4, 2]));
		var generator = new VPartComplexesGenerator([vvoice0, vvoice1]);
		var complexes = generator.getComplexes();
		var keys = generator.positionsMap.keys().keysToArray();
		keys.sort(function(a, b) { return Reflect.compare(a, b); } );					
		this.assertEquals(keys.toString(), [0, 3024, 4536, 6048].toString());
		this.assertEquals(complexes.length, 4);
		this.assertEquals(complexes[0].getVNotes().length, 2);
		this.assertEquals(complexes[1].getVNotes().length, 2);
		this.assertEquals(complexes[2].getVNotes().length, 1);
		this.assertEquals(complexes[3].getVNotes().length, 2);
		
		var vvoice0 = new VVoice(new QVoice([4, 8, 8, 4, 4]));
		var vvoice1 = new VVoice(new QVoice([.4, .4, 4]));
		var generator = new VPartComplexesGenerator([vvoice0, vvoice1]);
		var complexes = generator.getComplexes();
		var keys = generator.positionsMap.keys().keysToArray();
		keys.sort(function(a, b) { return Reflect.compare(a, b); } );			
		this.assertEquals(keys.toString(), [0, 3024, 4536, 6048, 9072].toString());	
		this.assertEquals(complexes.length, 5);
		this.assertEquals(complexes[0].getVNotes().length, 2);
		this.assertEquals(complexes[1].getVNotes().length, 1);
		this.assertEquals(complexes[2].getVNotes().length, 2);
		this.assertEquals(complexes[3].getVNotes().length, 1);
		this.assertEquals(complexes[4].getVNotes().length, 2);
		
		var vvoice0 = new VVoice(new QVoice([4, 8, 8, 2]));
		var vvoice1 = new VVoice(new QVoice([4, 4, 2]));
		var generator = new VPartComplexesGenerator([vvoice0, vvoice1]);
		var positionsComplexes = generator.getPositionsComplexes();
		var keys = positionsComplexes.keys().keysToArray();
		keys.sort(function(a, b) { return Reflect.compare(a, b); } );			
		this.assertEquals([0, 3024, 4536, 6048].toString(), keys.toString());
		var vcomplex1 = generator.getComplexes()[1];
		var vcomplex2 = positionsComplexes.get(3024);
		this.assertEquals(vcomplex1, vcomplex2);
		var vcomplex1pos = generator.getComplexesPositions().get(vcomplex1);
		this.assertEquals(vcomplex1pos, 3024);
	}
	
	public function testVPartComplexesGeneratorPauses()
	{
		var vvoice0 = TestItems.vvoicePause1();
		var generator = new VPartComplexesGenerator([vvoice0]);		
		this.assertEquals(generator.getComplexes().length, 2);
	}
		
		
	public function testVPartComplexes()
	{
		var vpart = new VPart(new NPart([
			new QVoice([4, 8, 8, 2]),
			new QVoice([4, 4, 2]),
		]));
		
		var vcomplexes = vpart.getVComplexes();
		this.assertEquals(vcomplexes.length, 4);
		var positions = vpart.getPositionsVComplexes().keys().keysToArray();
		positions.sort(function(a, b) { return Reflect.compare(a, b); } );		
		this.assertEquals([0, 3024, 4536, 6048].toString(), positions.toString());
	}
	
	public function testVPartComplexesMinDistances()
	{
		
		var vpart = new VPart(new NPart([
			new QVoice([4, 1]),
		]));				
		var distances = vpart.getVComplexesMinDistances();		
		this.assertTrue(floatEquals(distances.get(vpart.getVComplexes().first()), 3.8));
		this.assertEquals(distances.get(vpart.getVComplexes().second()), 2.2);
		
		var vpart = new VPart(new NPart([
			new NVoice([
				new NNote([new NHead(0)], ENoteVal.Nv4dot),
				new QNote(),
			])
		]));				
		var distances = vpart.getVComplexesMinDistances();		
		this.assertEquals(distances.get(vpart.getVComplexes().first()), 5.2);
		this.assertEquals(distances.get(vpart.getVComplexes().second()), 1.6);

		var vpart = new VPart(new NPart([
			new NVoice([
			new QNote(),
				new NNote([new NHead(0, ESign.Flat)]),
			])
		]));				
		var distances = vpart.getVComplexesMinDistances();		
		this.assertEquals(distances.get(vpart.getVComplexes().first()), 5.8);
		this.assertEquals(distances.get(vpart.getVComplexes().second()), 1.6);
		
	}
	
	public function testPartbeamgroups()
	{
		var vpart = new VPart(new NPart([
			new QVoice([4, 8, 8, 2]),
			new QVoice([.2, 4]),
		]));
		
		this.assertEquals(vpart.getVoicesBeamgroups().length, 2);
		this.assertEquals(vpart.getVoicesBeamgroups().first().length, 3);
		this.assertEquals(vpart.getVoicesBeamgroups().second().length, 2);
	}
	
	public function testPartbeamgroupsDirectionsOneVoice()
	{
		var vpart = new VPart(new NPart([
			new QVoice([8,8,8,8,8,8], [0,0,1,1,-2,-2]),
		]));
		var beamgroupsDirections = vpart.getBeamgroupsDirections();
		var partbeamgroups = vpart.getVoicesBeamgroups();
		this.assertEquals(partbeamgroups.length, 1);
		this.assertEquals(partbeamgroups.first().length, 3);
		var beamgroups = partbeamgroups.first();
		this.assertEquals(beamgroupsDirections.get(beamgroups.first()), EDirectionUD.Down);
		this.assertEquals(beamgroupsDirections.get(beamgroups.second()), EDirectionUD.Up);
		this.assertEquals(beamgroupsDirections.get(beamgroups.third()), EDirectionUD.Down);
		
		var vpart = new VPart(new NPart([
			new QVoice([8,8,8,8,8,8], [0,0,1,1,-2,-2], EDirectionUAD.Up),
		]));
		var beamgroupsDirections = vpart.getBeamgroupsDirections();
		var partbeamgroups = vpart.getVoicesBeamgroups();
		this.assertEquals(partbeamgroups.length, 1);
		this.assertEquals(partbeamgroups.first().length, 3);
		var beamgroups = partbeamgroups.first();
		this.assertEquals(beamgroupsDirections.get(beamgroups.first()), EDirectionUD.Up);
		this.assertEquals(beamgroupsDirections.get(beamgroups.second()), EDirectionUD.Up);
		this.assertEquals(beamgroupsDirections.get(beamgroups.third()), EDirectionUD.Up);
	}
	
	public function testPartbeamgroupsDirectionsTwoVoices()
	{
		var vpart = new VPart(new NPart([
			new QVoice([8, 8, 8, 8], [ -1, -1, -1, -1]),
			new QVoice([8,8], [1, 1]),
		]));	
		var beamgroupsDirections = vpart.getBeamgroupsDirections();
		var partbeamgroups = vpart.getVoicesBeamgroups();		
		var beamgroups0 = partbeamgroups.first();
		var beamgroups1 = partbeamgroups.second();
		this.assertEquals(beamgroups0.length, 2);
		this.assertEquals(beamgroups1.length, 1);
		this.assertEquals(beamgroupsDirections.get(beamgroups0.first()), EDirectionUD.Up);
		this.assertEquals(beamgroupsDirections.get(beamgroups0.second()), EDirectionUD.Down);
		this.assertEquals(beamgroupsDirections.get(beamgroups1.first()), EDirectionUD.Down);
		
		var vpart = new VPart(new NPart([
			new QVoice([8,8], [-1, -1]),
			new QVoice([8, 8, 8, 8], [ 1,1,1,1]),
		]));	
		var beamgroupsDirections = vpart.getBeamgroupsDirections();
		var partbeamgroups = vpart.getVoicesBeamgroups();		
		var beamgroups0 = partbeamgroups.first();
		var beamgroups1 = partbeamgroups.second();
		this.assertEquals(beamgroups0.length, 1);
		this.assertEquals(beamgroups1.length, 2);
		this.assertEquals(beamgroupsDirections.get(beamgroups0.first()), EDirectionUD.Up);
		this.assertEquals(beamgroupsDirections.get(beamgroups1.first()), EDirectionUD.Down);
		this.assertEquals(beamgroupsDirections.get(beamgroups1.second()), EDirectionUD.Up);
		
		var vpart = new VPart(new NPart([
			new QVoice([8, 8, 8, 8], [ -1, -1, -1, -1]),
			new QVoice([4], [1]),
		]));	
		var beamgroupsDirections = vpart.getBeamgroupsDirections();
		var partbeamgroups = vpart.getVoicesBeamgroups();		
		var beamgroups0 = partbeamgroups.first();
		var beamgroups1 = partbeamgroups.second();
		this.assertEquals(beamgroups0.length, 2);
		this.assertEquals(beamgroups1.length, 1);
		this.assertEquals(beamgroupsDirections.get(beamgroups0.first()), EDirectionUD.Up);
		this.assertEquals(beamgroupsDirections.get(beamgroups0.second()), EDirectionUD.Down);
		this.assertEquals(beamgroupsDirections.get(beamgroups1.first()), EDirectionUD.Down);		
		
		var vpart = new VPart(new NPart([
			new QVoice([8, 8, 8, 8], [ -1, -1, -1, -1]),
			new QVoice([.4], [1]),
		]));	
		var beamgroupsDirections = vpart.getBeamgroupsDirections();
		var partbeamgroups = vpart.getVoicesBeamgroups();		
		var beamgroups0 = partbeamgroups.first();
		var beamgroups1 = partbeamgroups.second();
		this.assertEquals(beamgroups0.length, 2);
		this.assertEquals(beamgroups1.length, 1);
		this.assertEquals(beamgroupsDirections.get(beamgroups0.first()), EDirectionUD.Up);
		this.assertEquals(beamgroupsDirections.get(beamgroups0.second()), EDirectionUD.Up);
		this.assertEquals(beamgroupsDirections.get(beamgroups1.first()), EDirectionUD.Down);				
		
		var vpart = new VPart(new NPart([
			new QVoice([8, 8, 8, 8], [ -1, -1, -1, -1]),
			new QVoice([.4, 8], [1, 1]),
		]));	
		var beamgroupsDirections = vpart.getBeamgroupsDirections();
		var partbeamgroups = vpart.getVoicesBeamgroups();		
		var beamgroups0 = partbeamgroups.first();
		var beamgroups1 = partbeamgroups.second();
		this.assertEquals(beamgroups0.length, 2);
		this.assertEquals(beamgroups1.length, 2);
		this.assertEquals(beamgroupsDirections.get(beamgroups0.first()), EDirectionUD.Up);
		this.assertEquals(beamgroupsDirections.get(beamgroups0.second()), EDirectionUD.Up);
		this.assertEquals(beamgroupsDirections.get(beamgroups1.first()), EDirectionUD.Down);				
		this.assertEquals(beamgroupsDirections.get(beamgroups1.second()), EDirectionUD.Down);				
		
		var vpart = new VPart(new NPart([
			new QVoice([8, 8, 8, 8], [ -1, -1, -1, -1]),
			new QVoice([.4, 8, 8], [1, 1, 1]),
		]));	
		var beamgroupsDirections = vpart.getBeamgroupsDirections();
		var partbeamgroups = vpart.getVoicesBeamgroups();		
		var beamgroups0 = partbeamgroups.first();
		var beamgroups1 = partbeamgroups.second();
		this.assertEquals(beamgroups0.length, 2);
		this.assertEquals(beamgroups1.length, 3);
		this.assertEquals(beamgroupsDirections.get(beamgroups1.third()), EDirectionUD.Up);				
	
		var vpart = new VPart(new NPart([
			new QVoice([8, 8, 8, 8, 8, 8], [ -1, -1, -1, -1, -1, -1]),
			new QVoice([.4, 8, 8], [1, 1, 1]),
		]));	
		var beamgroupsDirections = vpart.getBeamgroupsDirections();
		var partbeamgroups = vpart.getVoicesBeamgroups();		
		var beamgroups0 = partbeamgroups.first();
		var beamgroups1 = partbeamgroups.second();
		this.assertEquals(beamgroups0.length, 3);
		this.assertEquals(beamgroups1.length, 3);
		this.assertEquals(beamgroupsDirections.get(beamgroups0.third()), EDirectionUD.Up);			
		this.assertEquals(beamgroupsDirections.get(beamgroups1.third()), EDirectionUD.Down);			
	}
	
	public function testBarColumnsGenerator()
	{
		var vpart = new VPart(new NPart([
			new QVoice([4, 8, 8, 2]),
			new QVoice([4, 4, 2]),
		]));
		var generator = new VBarColumnsGenerator([vpart]);
		var columns = generator.getColumns();
		this.assertFalse(false);
		this.assertEquals(generator.positions.toString(), [0, 3024, 4536, 6048].toString());
		this.assertEquals(columns.length, 4);
		
		var vpart0 = new VPart(new NPart([
			new QVoice([.4, .4, 4]),
		]));
		var vpart1 = new VPart(new NPart([
			new QVoice([4, 8, 8, 4, 4]),
		]));
		var generator = new VBarColumnsGenerator([vpart0, vpart1]);
		var columns:VColumns = generator.getColumns();
		this.assertFalse(false);
		this.assertEquals(generator.positions.toString(), [0, 3024, 4536, 6048, 9072].toString());
		
		var column0:VColumn = columns[0];
		this.assertEquals(column0.vcomplexes.length, 2);
		this.assertEquals(vpart0.getVVoices()[0].getVNotes()[0], column0.vcomplexes[0].getVNotes()[0]);
		this.assertEquals(vpart1.getVVoices()[0].getVNotes()[0], column0.vcomplexes[1].getVNotes()[0]);
		this.assertTrue(columns[1].vcomplexes[0] == null);
		this.assertEquals(vpart1.getVVoices()[0].getVNotes()[1], columns[1].vcomplexes[1].getVNotes()[0]);
	}

	public function testVBarValue()
	{
		var npart0 = new NPart([
			new QVoice([4]),
			new QVoice([4,4]),
		]);
		var npart1 = new NPart([
			new QVoice([4,4,4,4]),
			new QVoice([4, 4, 4])
		]);
		var vbar = new VBar(new NBar([npart0, npart1]));
		var value = vbar.getValue();
		this.assertEquals(value, ENoteVal.Nv4.value() * 4);
	}
	
	public function testVBar()
	{
		var npart0 = new NPart([
			new QVoice([2]),
			new QVoice([.4, 8]),
		]);
		var npart1 = new NPart([
			new QVoice([8, .4]),
			new QVoice([4, 4])
		]);
		var vbar = new VBar(new NBar([npart0, npart1]));
		var positionsColumns : IntMap<VColumn> = vbar.getPositionsColumns();
		var keys = positionsColumns.keys().keysToArray();
		keys.sort(function(a, b) { return Reflect.compare(a, b); } );
		this.assertEquals(keys.toString(), [0, 1512, 3024, 4536].toString());
	}

	public function testVBarAttributes()
	{
		var n0 = new NPart([new QVoice([4, 4, 4])], EClef.ClefC, EKey.Flat2);
		var n1 = new NPart([new QVoice([4, 4, 4])], EClef.ClefF, EKey.Sharp3);
		var b0 = new VBar(new NBar([n0, n1], ETime.Time12_8));
		this.assertEquals(b0.clefs.toString(), [EClef.ClefC, EClef.ClefF].toString());
		this.assertEquals(b0.keys.toString(), [EKey.Flat2, EKey.Sharp3].toString());
		this.assertEquals(b0.time, ETime.Time12_8);
		
		var n0 = new NPart([new QVoice([4, 4, 4])], EKey.Flat2);
		var n1 = new NPart([new QVoice([4, 4, 4])], EClef.ClefF);
		var b0 = new VBar(new NBar([n0, n1]));
		this.assertEquals(b0.clefs.toString(), [null, EClef.ClefF].toString());
		this.assertEquals(b0.keys.toString(), [EKey.Flat2, null].toString());
		this.assertEquals(b0.time, null);
		this.assertEquals(b0.displayClefs, EDisplayALN.Layout);
		this.assertEquals(b0.displayKeys, EDisplayALN.Layout);
		this.assertEquals(b0.displayTime, EDisplayALN.Layout);
		
		var n0 = new NPart([new QVoice([4, 4, 4])], EClef.ClefC, EDisplayALN.Never, EKey.Flat2, EDisplayALN.Never);
		var n1 = new NPart([new QVoice([4, 4, 4])], EClef.ClefF, EDisplayALN.Never, EKey.Sharp3, EDisplayALN.Never);
		var b0 = new VBar(new NBar([n0, n1], ETime.Time12_8, EDisplayALN.Never));
		this.assertEquals(b0.clefs.toString(), [EClef.ClefC, EClef.ClefF].toString());
		this.assertEquals(b0.keys.toString(), [EKey.Flat2, EKey.Sharp3].toString());
		this.assertEquals(b0.time, ETime.Time12_8);
		this.assertEquals(b0.displayClefs, EDisplayALN.Never);
		this.assertEquals(b0.displayKeys, EDisplayALN.Never);
		this.assertEquals(b0.displayTime, EDisplayALN.Never);

		var n0 = new NPart([new QVoice([4, 4, 4])], EClef.ClefC, EDisplayALN.Never, EKey.Flat2, EDisplayALN.Always);
		var n1 = new NPart([new QVoice([4, 4, 4])], EClef.ClefF, EDisplayALN.Layout, EKey.Sharp3, EDisplayALN.Never);
		var b0 = new VBar(new NBar([n0, n1], ETime.Time12_8, EDisplayALN.Always));
		this.assertEquals(b0.clefs.toString(), [EClef.ClefC, EClef.ClefF].toString());
		this.assertEquals(b0.keys.toString(), [EKey.Flat2, EKey.Sharp3].toString());
		this.assertEquals(b0.time, ETime.Time12_8);
		this.assertEquals(b0.displayClefs, EDisplayALN.Layout);
		this.assertEquals(b0.displayKeys, EDisplayALN.Always);
		this.assertEquals(b0.displayTime, EDisplayALN.Always);
	}
	
	
	
	
	public function testVBarVNoteVColumn()
	{
		var npart0 = new NPart([
			new QVoice([2]),
			new QVoice([.4, 8]),
		]);
		var npart1 = new NPart([
			new QVoice([8, .4]),
			new QVoice([4, 4])
		]);
		var vbar = new VBar(new NBar([npart0, npart1]));
		var vnotesVColumns = vbar.getVNotesVColumns();
		
		var vnote = vbar.getVParts()[0].getVVoices()[0].getVNotes()[0];
		var vcolumn = vbar.getVColumns()[0];
		this.assertEquals(vnotesVColumns.get(vnote), vcolumn);

		var vnote = vbar.getVParts()[0].getVVoices()[1].getVNotes()[1];
		var vcolumn = vbar.getVColumns()[3];
		this.assertEquals(vnotesVColumns.get(vnote), vcolumn);

		var vnote = vbar.getVParts()[1].getVVoices()[0].getVNotes()[1];
		var vcolumn = vbar.getVColumns()[1];
		this.assertEquals(vnotesVColumns.get(vnote), vcolumn);
		
		var vnote = vbar.getVParts()[1].getVVoices()[1].getVNotes()[1];
		var vcolumn = vbar.getVColumns()[2];
		this.assertEquals(vnotesVColumns.get(vnote), vcolumn);
	}
	
	public function testVBarComplexColumn()
	{
		var npart0 = new NPart([
			new QVoice([2]),
			new QVoice([.4, 8]),
		]);
		var npart1 = new NPart([
			new QVoice([8, .4]),
			new QVoice([4, 4])
		]);
		var vbar = new VBar(new NBar([npart0, npart1]));		
		var vcomplexVColumns = vbar.getVComplexesVColumns();
		
		var vcomplex = vbar.getVParts().first().getVComplexes().first();
		this.assertEquals(vcomplex.getVNotes().length, 2);
		var vcolumn = vbar.getVColumns().first();
		this.assertEquals(vcolumn.vcomplexes.length, 2);
		this.assertEquals(vbar.getVColumnsPositions().get(vcolumn), 0);
		this.assertEquals(vbar.getVComplexesVColumns().get(vcomplex), vcolumn);
		
		var vcomplex = vbar.getVParts().second().getVComplexes().second();
		var vcolumn = vbar.getVColumns().second();
		this.assertEquals(vbar.getVComplexesVColumns().get(vcomplex), vcolumn);
	}
	
	
	
	
	/*
	public function testVBarColumnMinDistances()
	{

		
		var vbar = new VBar(new NBar([
			new NPart([new QVoice([4, 2, 4]), ]),
			new NPart([new QVoice([2, 4]),]),
		]));		
		
		var distances = vbar.getVColumnsMinDistances();
		var column0 = vbar.getVColumns().first();
		this.assertEquals(distances.get(column0), 3.2);		
	}
	*/
	/*
	public function testVBarColumnMinPositions()
	{
		var npart0 = new NPart([new QVoice([2, 4], '#'),]);	
		var npart1 = new NPart([new QVoice([4, 4, 4], '#'),]);	
		var vbar = new VBar(new NBar([npart0, npart1]));				
		var positions = vbar.getVColumnsMinPositions();
		var column0 = vbar.getVColumns().first();
		this.assertEquals(positions.get(column0), 4.2);
	}
	*/
	
	public function testSystemGeneratorOneBar()
	{		
		// One part
		// Get attributes from bar
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC, EKey.Flat2);
		bars.push(new VBar(new NBar([n0], ETime.Time2_4)));
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();
		this.assertEquals(system.bars.first().actAttributes.clefs.toString(), [EClef.ClefC].toString());
		this.assertEquals(system.bars.first().actAttributes.keys.toString(), [EKey.Flat2].toString());
		this.assertEquals(system.bars.first().actAttributes.time, ETime.Time2_4);

		// One part
		// Get attributes from defaults
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0])));
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();
		this.assertEquals(system.bars.first().actAttributes.clefs.toString(), [VSystemGenerator.defaultClef].toString());
		this.assertEquals(system.bars.first().actAttributes.keys.toString(), [VSystemGenerator.defaultKey].toString());		
		this.assertEquals(system.bars.first().actAttributes.time, VSystemGenerator.defaultTime);		
		
		// One part
		// Get attributes from previous bar
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0])));
		var prevBarAttributes:VBarAttributes = { clefs: [EClef.ClefF], keys: [EKey.Sharp4], time:ETime.Time5_8 };
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();
		this.assertEquals(system.bars.first().actAttributes.clefs.toString(), [EClef.ClefF].toString());
		this.assertEquals(system.bars.first().actAttributes.keys.toString(), [EKey.Sharp4].toString());		
		this.assertEquals(system.bars.first().actAttributes.time, ETime.Time5_8);				
		
		// Two parts
		// Get clefs/keys from bar and defaults
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EKey.Sharp5);
		bars.push(new VBar(new NBar([n0, n1])));
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();
		this.assertEquals(system.bars.first().actAttributes.clefs.toString(), [EClef.ClefC, VSystemGenerator.defaultClef].toString());
		this.assertEquals(system.bars.first().actAttributes.keys.toString(), [VSystemGenerator.defaultKey, EKey.Sharp5].toString());
		this.assertEquals(system.bars.first().actAttributes.time, VSystemGenerator.defaultTime);
		
		// Two parts
		// Get clefs/keys from previous bar
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0, n1])));
		var prevBarAttributes:VBarAttributes = { clefs: [EClef.ClefF, EClef.ClefG], keys: [EKey.Sharp1, EKey.Flat3], time:ETime.Time5_8 };		
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();
		this.assertEquals(system.bars.first().actAttributes.clefs.toString(), [EClef.ClefF, EClef.ClefG].toString());
		this.assertEquals(system.bars.first().actAttributes.keys.toString(), [EKey.Sharp1, EKey.Flat3].toString());		
		
		// Two parts
		// Get clefs/keys from bar and previous bar
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EKey.Sharp5);
		bars.push(new VBar(new NBar([n0, n1])));
		var prevBarAttributes:VBarAttributes = { clefs: [EClef.ClefF, EClef.ClefG], keys: [EKey.Sharp1, EKey.Flat3], time:ETime.Time5_8 };		
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();
		this.assertEquals(system.bars.first().actAttributes.clefs.toString(), [EClef.ClefC, EClef.ClefG].toString());
		this.assertEquals(system.bars.first().actAttributes.keys.toString(), [EKey.Sharp1, EKey.Sharp5].toString());						
	}

	public function testSystemGeneratorBarConfigResult()
	{
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC);
		bars.push(new VBar(new NBar([n0])));
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showClef, true);

		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC);
		bars.push(new VBar(new NBar([n0])));
		var generator = new VSystemGenerator(bars,  { showFirstClef:false, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showClef, false);
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0])));
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showClef, true);
		this.assertEquals(system.bars.first().actAttributes.clefs.toString(), [VSystemGenerator.defaultClef].toString());
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0])));
		var prevBarAttributes:VBarAttributes = { clefs: [EClef.ClefF], keys: [EKey.Sharp4], time:ETime.Time5_8 };
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showClef, true);		
		this.assertEquals(system.bars.first().actAttributes.clefs.toString(), [VSystemGenerator.defaultClef].toString());
		
		
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EDisplayALN.Never);
		bars.push(new VBar(new NBar([n0])));
		var prevBarAttributes:VBarAttributes = { clefs: [EClef.ClefF], keys: [EKey.Sharp4], time:ETime.Time5_8 };
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showClef, false);				
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC, EDisplayALN.Always);
		bars.push(new VBar(new NBar([n0])));
		var generator = new VSystemGenerator(bars,  { showFirstClef:false, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showClef, true);		
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EDisplayALN.Always);
		bars.push(new VBar(new NBar([n0])));
		var generator = new VSystemGenerator(bars,  { showFirstClef:false, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showClef, true);						
		
		// Keys
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EKey.Sharp3);
		bars.push(new VBar(new NBar([n0])));
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showKey, true);

		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EKey.Sharp3);
		bars.push(new VBar(new NBar([n0])));
		var generator = new VSystemGenerator(bars,  { showFirstClef:false, showFirstKey:false, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showKey, false);
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0])));
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showKey, true);
		this.assertEquals(system.bars.first().actAttributes.keys.toString(), [VSystemGenerator.defaultKey].toString());
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0])));
		var prevBarAttributes:VBarAttributes = { clefs: [EClef.ClefF], keys: [EKey.Sharp4], time:ETime.Time5_8 };
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showKey, true);		
		this.assertEquals(system.bars.first().actAttributes.keys.toString(), [EKey.Sharp4].toString());
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EDisplayALN.Layout, EDisplayALN.Never);
		bars.push(new VBar(new NBar([n0])));
		var prevBarAttributes:VBarAttributes = { clefs: [EClef.ClefF], keys: [EKey.Sharp4], time:ETime.Time5_8 };
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showKey, false);				
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], null, null, null, EKey.Sharp3, EDisplayALN.Always);
		bars.push(new VBar(new NBar([n0])));
		var generator = new VSystemGenerator(bars,  { showFirstClef:false, showFirstKey:false, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showKey, true);
		this.assertEquals(system.bars.first().actAttributes.keys.toString(), [EKey.Sharp3].toString());
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])],null, null, null, null, EDisplayALN.Always);
		bars.push(new VBar(new NBar([n0])));
		var generator = new VSystemGenerator(bars,  { showFirstClef:false, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showKey, true);					
		this.assertEquals(system.bars.first().actAttributes.keys.toString(), [VSystemGenerator.defaultKey].toString());
		
		// Time
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0], ETime.Time2_8)));
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showTime, true);		
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0], ETime.Time2_8)));
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:false }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showTime, false);			

		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0], ETime.Time2_8, EDisplayALN.Always)));
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:false }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showTime, true);			
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0], ETime.Time2_8, EDisplayALN.Never)));
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showTime, false);				
	
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0])));
		var prevBarAttributes:VBarAttributes = { clefs: [EClef.ClefF], keys: [EKey.Sharp4], time:ETime.Time5_8 };
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showTime, true);
		this.assertEquals(system.bars.first().actAttributes.time, ETime.Time5_8);
		
	}
	
	public function testSystemGeneratorBarConfigResultTwoParts()
	{
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF);
		bars.push(new VBar(new NBar([n0, n1])));
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showClef, true);	

		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC, EDisplayALN.Never);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF);
		bars.push(new VBar(new NBar([n0, n1])));
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showClef, true);			
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF, EDisplayALN.Never);
		bars.push(new VBar(new NBar([n0, n1])));
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showClef, true);		
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC, EDisplayALN.Never);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF, EDisplayALN.Never);
		bars.push(new VBar(new NBar([n0, n1])));
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showClef, false);			
	
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC, EDisplayALN.Always);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF);
		bars.push(new VBar(new NBar([n0, n1])));		
		var generator = new VSystemGenerator(bars,  { showFirstClef:false, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();				
		this.assertEquals(system.bars.first().barConfig.showClef, true);				
		
	}
	
	
	public function testSystemGeneratorContentWidth()
	{
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0])));
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();		
		this.assertEquals(system.bars.first().width, 170);
		this.assertTrue(true);
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF, EKey.Sharp4);
		bars.push(new VBar(new NBar([n0], ETime.Time5_8)));
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();		
		this.assertEquals(system.bars.first().width, 190);
		this.assertTrue(true);	
		
		var bars:Array<VBar> = [];
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0])));
		var prevBarAttributes:VBarAttributes = { clefs: [EClef.ClefF], keys: [EKey.Sharp4], time:ETime.Time5_8 };		
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();		
		this.assertEquals(system.bars.first().width, 190);
		this.assertTrue(true);
		
	}
	
	
	public function testSystemGeneratorTwoBars()	
	{	
		var bars:Array<VBar> = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		bars.push(new VBar(new NBar([n0], ETime.Time3_2)));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0])));		
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 } );
		var system:VSystem = generator.getSystem();		
		//this.assertEquals(system.bars.first().width, 120);		
		this.assertEquals(system.bars.length, 2);
		this.assertEquals(system.bars.first().actAttributes.clefs.toString(), [EClef.ClefG].toString());
		this.assertEquals(system.bars.second().actAttributes.clefs.toString(), [EClef.ClefG].toString());
		this.assertEquals(system.bars.first().actAttributes.keys.toString(), [ EKey.Flat3].toString());
		this.assertEquals(system.bars.second().actAttributes.keys.toString(), [ EKey.Flat3].toString());		
		this.assertEquals(system.bars.first().actAttributes.time, ETime.Time3_2);
		this.assertEquals(system.bars.first().barConfig.showClef, true);
		this.assertEquals(system.bars.second().barConfig.showClef, false);
		this.assertEquals(system.bars.first().barConfig.showKey, true);
		this.assertEquals(system.bars.second().barConfig.showKey, false);		
		this.assertEquals(system.bars.first().barConfig.showTime, true);
		this.assertEquals(system.bars.second().barConfig.showTime, false);				
	}

	public function testSystemGeneratorMoreBars()	
	{	
		var bars:Array<VBar> = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		bars.push(new VBar(new NBar([n0], ETime.Time3_2)));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0])));		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EKey.Sharp1);
		bars.push(new VBar(new NBar([n0])));		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0], ETime.Time6_8)));		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0])));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF);
		bars.push(new VBar(new NBar([n0])));

		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:1000, height:600 } );
		var system:VSystem = generator.getSystem();		
		this.assertEquals(system.bars.length, 6);
		this.assertEquals(system.bars.first().actAttributes.clefs.toString(), [EClef.ClefG].toString());
		this.assertEquals(system.bars.second().actAttributes.clefs.toString(), [EClef.ClefG].toString());
		this.assertEquals(system.bars.third().actAttributes.clefs.toString(), [EClef.ClefG].toString());
		this.assertEquals(system.bars.fourth().actAttributes.clefs.toString(), [EClef.ClefG].toString());
		this.assertEquals(system.bars.fifth().actAttributes.clefs.toString(), [EClef.ClefG].toString());
		this.assertEquals(system.bars.sixth().actAttributes.clefs.toString(), [EClef.ClefF].toString());
		this.assertEquals(system.bars.first().actAttributes.keys.toString(), [ EKey.Flat3].toString());
		this.assertEquals(system.bars.second().actAttributes.keys.toString(), [ EKey.Flat3].toString());		
		this.assertEquals(system.bars.third().actAttributes.keys.toString(), [ EKey.Sharp1].toString());		
		this.assertEquals(system.bars.fourth().actAttributes.keys.toString(), [ EKey.Sharp1].toString());		
		this.assertEquals(system.bars.fifth().actAttributes.keys.toString(), [ EKey.Sharp1].toString());		
		this.assertEquals(system.bars.sixth().actAttributes.keys.toString(), [ EKey.Sharp1].toString());		
		this.assertEquals(system.bars.first().actAttributes.time, ETime.Time3_2);
		this.assertEquals(system.bars.second().actAttributes.time, ETime.Time3_2);
		this.assertEquals(system.bars.third().actAttributes.time, ETime.Time3_2);
		this.assertEquals(system.bars.fourth().actAttributes.time, ETime.Time6_8);
		this.assertEquals(system.bars.fifth().actAttributes.time, ETime.Time6_8);
		this.assertEquals(system.bars.sixth().actAttributes.time, ETime.Time6_8);
		this.assertEquals(barConfToArr( system.bars.first().barConfig).toString() , [true, true, true].toString());
		this.assertEquals(barConfToArr( system.bars.second().barConfig).toString() , [false, false, false].toString());
		this.assertEquals(barConfToArr( system.bars.third().barConfig).toString() , [false, true, false].toString());
		this.assertEquals(barConfToArr( system.bars.fourth().barConfig).toString() , [false, false, true].toString());
		this.assertEquals(barConfToArr( system.bars.fifth().barConfig).toString() , [false, false, false].toString());
		this.assertEquals(barConfToArr( system.bars.sixth().barConfig).toString() , [true, false, false].toString());
		//this.assertEquals(barConfToArr( system.bars.fifth().barConfig).toString() , [false, false, false].toString());
	}
	
	
	public function testSystemGeneratorOverflow()
	{
		var bars:Array<VBar> = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		bars.push(new VBar(new NBar([n0], ETime.Time3_2)));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0])));		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0])));		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0])));		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0])));		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0])));		
		
		var barscopy = bars.copy();
		var pagewidth = 1000;
		var generator = new VSystemGenerator(barscopy,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:pagewidth, height:600 } );
		var system:VSystem = generator.getSystem();	
		assertEquals(system.bars.length, 6);
		this.assertEquals(system.width, 780);
		this.assertEquals(barscopy.length, 0);
		
		var barscopy = bars.copy();
		var pagewidth = 780;
		var generator = new VSystemGenerator(barscopy,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:pagewidth, height:600 } );
		var system:VSystem = generator.getSystem();	
		assertEquals(system.bars.length, 6);
		this.assertEquals(system.width, 780);		
		this.assertEquals(barscopy.length, 0);		
		
		var barscopy = bars.copy();
		var pagewidth = 700;
		var generator = new VSystemGenerator(barscopy,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:pagewidth, height:600 } );
		var system:VSystem = generator.getSystem();	
		assertEquals(system.bars.length, 5);
		this.assertEquals(system.width, 660);			
		this.assertEquals(barscopy.length, 1);
		
	}
	
	public function testSystemGeneratorCautions()
	{
		var bars:Array<VBar> = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		bars.push(new VBar(new NBar([n0], ETime.Time3_2)));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0])));		
		var pagewidth = 250;
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:pagewidth, height:600 } );
		var system:VSystem = generator.getSystem();	
		assertEquals(system.bars.length, 1);
		this.assertEquals(system.width, 180);			

		var bars:Array<VBar> = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		bars.push(new VBar(new NBar([n0], ETime.Time3_2)));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF);
		bars.push(new VBar(new NBar([n0])));		
		var pagewidth = 250;
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:pagewidth, height:600 } );
		var system:VSystem = generator.getSystem();	
		assertEquals(system.bars.length, 1);
		this.assertEquals(system.width, 200);
		this.assertEquals(system.bars.first().barConfig.showCautClef, true);
		this.assertEquals(system.bars.first().barConfig.showCautKey, false);
		this.assertEquals(system.bars.first().barConfig.showCautTime, false);
		this.assertEquals(system.bars.last().caAttributes.clefs.toString(), [EClef.ClefF].toString());

		var bars:Array<VBar> = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		bars.push(new VBar(new NBar([n0], ETime.Time3_2)));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EKey.Sharp1);
		bars.push(new VBar(new NBar([n0])));		
		var pagewidth = 250;
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:pagewidth, height:600 } );
		var system:VSystem = generator.getSystem();	
		assertEquals(system.bars.length, 1);
		this.assertEquals(system.width, 190);
		this.assertEquals(system.bars.first().barConfig.showCautClef, false);
		this.assertEquals(system.bars.first().barConfig.showCautKey, true);
		this.assertEquals(system.bars.first().barConfig.showCautTime, false);
		this.assertEquals(system.bars.last().caAttributes.keys.toString(), [EKey.Sharp1].toString());

		var bars:Array<VBar> = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		bars.push(new VBar(new NBar([n0], ETime.Time3_2)));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0], ETime.Time2_2)));		
		var pagewidth = 250;
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:pagewidth, height:600 } );
		var system:VSystem = generator.getSystem();	
		assertEquals(system.bars.length, 1);
		this.assertEquals(system.width, 190);
		this.assertEquals(system.bars.first().barConfig.showCautClef, false);
		this.assertEquals(system.bars.first().barConfig.showCautKey, false);
		this.assertEquals(system.bars.first().barConfig.showCautTime, true);
		this.assertEquals(system.bars.last().caAttributes.time, ETime.Time2_2);
	}
	
	public function testSystemGeneratorCautionsTwoParts()
	{
		
		var bars:Array<VBar> = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF, EKey.Sharp4);
		bars.push(new VBar(new NBar([n0, n1], ETime.Time3_2)));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0, n1])));		
		var pagewidth = 250;
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:pagewidth, height:600 } );
		var system:VSystem = generator.getSystem();	
		assertEquals(system.bars.length, 1);
		this.assertEquals(system.width, 190);			

		var bars:Array<VBar> = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF, EKey.Sharp4);
		bars.push(new VBar(new NBar([n0, n1], ETime.Time3_2)));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0, n1], ETime.Time12_8)));		
		var pagewidth = 250;
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:pagewidth, height:600 } );
		var system:VSystem = generator.getSystem();	
		assertEquals(system.bars.length, 1);
		this.assertEquals(system.width, 200);		

		var bars:Array<VBar> = [];			
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0, n1])));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0, n1], ETime.Time12_8)));		
		var prevBarAttributes:VBarAttributes = { clefs: [EClef.ClefG, EClef.ClefF], keys: [EKey.Flat3, EKey.Sharp4], time:ETime.Time3_2 };
		var pagewidth = 250;
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes,  { width:pagewidth, height:600 } );
		var system:VSystem = generator.getSystem();	
		assertEquals(system.bars.length, 1);
		this.assertEquals(system.width, 200);
		this.assertEquals(system.bars.first().barConfig.showTime, true);
		this.assertEquals(system.bars.first().actAttributes.clefs.toString(), [EClef.ClefG, EClef.ClefF].toString());
		this.assertEquals(system.bars.first().actAttributes.keys.toString(), [EKey.Flat3, EKey.Sharp4].toString());
		this.assertEquals(system.bars.first().actAttributes.time, ETime.Time3_2);
		this.assertEquals(system.bars.first().barConfig.showCautTime, true);
		this.assertEquals(system.bars.first().caAttributes.time, ETime.Time12_8);
				
		var bars:Array<VBar> = [];			
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0, n1])));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefC);
		bars.push(new VBar(new NBar([n0, n1])));		
		var prevBarAttributes:VBarAttributes = { clefs: [EClef.ClefG, EClef.ClefF], keys: [EKey.Flat3, EKey.Sharp4], time:ETime.Time3_2 };
		var pagewidth = 250;
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes,  { width:pagewidth, height:600 } );
		var system:VSystem = generator.getSystem();	
		assertEquals(system.bars.length, 1);
		this.assertEquals(system.width, 210);
		this.assertEquals(system.bars.first().barConfig.showTime, true);
		this.assertEquals(system.bars.first().actAttributes.clefs.toString(), [EClef.ClefG, EClef.ClefF].toString());
		this.assertEquals(system.bars.first().actAttributes.keys.toString(), [EKey.Flat3, EKey.Sharp4].toString());
		this.assertEquals(system.bars.first().actAttributes.time, ETime.Time3_2);
		this.assertEquals(system.bars.first().barConfig.showCautClef, true);
		this.assertEquals(system.bars.first().caAttributes.clefs.toString(), [null, EClef.ClefC].toString());

		var bars:Array<VBar> = [];			
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0, n1])));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EKey.Flat1);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0, n1])));		
		var prevBarAttributes:VBarAttributes = { clefs: [EClef.ClefG, EClef.ClefF], keys: [EKey.Flat3, EKey.Sharp4], time:ETime.Time3_2 };
		var pagewidth = 250;
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes,  { width:pagewidth, height:600 } );
		var system:VSystem = generator.getSystem();	
		assertEquals(system.bars.length, 1);
		this.assertEquals(system.width, 200);
		this.assertEquals(system.bars.first().barConfig.showTime, true);
		this.assertEquals(system.bars.first().actAttributes.clefs.toString(), [EClef.ClefG, EClef.ClefF].toString());
		this.assertEquals(system.bars.first().actAttributes.keys.toString(), [EKey.Flat3, EKey.Sharp4].toString());
		this.assertEquals(system.bars.first().actAttributes.time, ETime.Time3_2);
		this.assertEquals(system.bars.first().barConfig.showCautKey, true);
		this.assertEquals(system.bars.first().caAttributes.keys.toString(), [EKey.Flat1, null].toString());

		var bars:Array<VBar> = [];			
		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0, n1])));
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Sharp2);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF, EKey.Sharp4);
		bars.push(new VBar(new NBar([n0, n1], ETime.Time4_8)));		
		var prevBarAttributes:VBarAttributes = { clefs: [EClef.ClefG, EClef.ClefC], keys: [EKey.Flat3, EKey.Sharp4], time:ETime.Time3_2 };
		var pagewidth = 260;
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, prevBarAttributes,  { width:pagewidth, height:600 } );
		var system:VSystem = generator.getSystem();	
		assertEquals(system.bars.length, 1);
		
		this.assertEquals(system.bars.first().barConfig.showCautClef, true);
		this.assertEquals(system.bars.first().caAttributes.clefs.toString(), [null, EClef.ClefF].toString());
		this.assertEquals(system.bars.first().barConfig.showCautKey, true);
		this.assertEquals(system.bars.first().caAttributes.keys.toString(), [EKey.Sharp2, null].toString());
		this.assertEquals(system.bars.first().barConfig.showCautTime, true);
		this.assertEquals(system.bars.first().caAttributes.time, ETime.Time4_8);
		this.assertEquals(system.width, 240);
		
	}
	
	public function testSystemGeneratorCautionsDontFit()
	{
		// Here, the two first bar DO fit...
		var bars:Array<VBar> = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF, EKey.Sharp4);
		bars.push(new VBar(new NBar([n0, n1], ETime.Time3_2)));

		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0, n1])));		

		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]/*, EKey.Flat1*/);
		bars.push(new VBar(new NBar([n0, n1])));		
		var pagewidth = 315;
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:pagewidth, height:600 } );
		var system:VSystem = generator.getSystem();	
		assertEquals(system.bars.length, 2);
		this.assertEquals(system.width, 310);			
		this.assertEquals(bars.length, 1);
		
		// but when adding the need for cautionary attributes on the second bar, they DON'T!
		var bars:Array<VBar> = [];		
		var n0 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefG, EKey.Flat3);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EClef.ClefF, EKey.Sharp4);
		bars.push(new VBar(new NBar([n0, n1], ETime.Time3_2)));

		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])]);
		bars.push(new VBar(new NBar([n0, n1])));		

		var n0 = new NPart([new QVoice([4, 4, 4, 4])]);
		var n1 = new NPart([new QVoice([4, 4, 4, 4])], EKey.Flat1);
		bars.push(new VBar(new NBar([n0, n1])));		
		var pagewidth = 315;
		var generator = new VSystemGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:pagewidth, height:600 } );
		var system:VSystem = generator.getSystem();	
		assertEquals(system.bars.length, 1);
		this.assertEquals(system.width, 190);			
		this.assertEquals(bars.length, 2);		
	}
	
	static private function barConfToArr(conf:VBarConfig):Array<Bool>
	{
		return [conf.showClef, conf.showKey, conf.showTime];
	}
	
	function rectEquals(a:Rectangle, ?b:Rectangle=null, bx:Float=-1, by:Float=-1, bwidth:Float=-1, bheight:Float=-1): Bool
	{
		var result:Bool = false;
		if (b == null)
		{
			if (bwidth == -1 || bheight==-1) throw "Rect comparison error";
			result =  MathTools.floatEquals(a.x, bx) && MathTools.floatEquals(a.y, by) && MathTools.floatEquals(a.width, bwidth) && MathTools.floatEquals(a.height, bheight);		
			if (!result) trace(['Rectangle not equal', Std.string(a)]);
			return result;
		}		
		result = MathTools.floatEquals(a.x, b.x) && MathTools.floatEquals(a.y, b.y) && MathTools.floatEquals(a.width, b.width) && MathTools.floatEquals(a.height, b.height);		
		if (!result) trace(['Rectangle not equal', Std.string(a)]);
		return result;
	}
	
	function arrEquals<T>(a:Array<T>, b:Array<T>):Bool
	{
		return (a.toString() == b.toString());
	}
	
	function floatEquals(a:Float, b:Float)
	{
		var diff = Math.abs(a - b);
		return (diff < 0.0000001);
	}
	
}