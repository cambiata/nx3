package nx3.test;

import haxe.ds.IntMap.IntMap;
import haxe.unit.TestCase;
import nx3.EDirectionUDs;
import nx3.EHeadValueType;
import nx3.ESign;
import nx3.geom.Rectangles;
import nx3.QVoice;
import nx3.render.svg.Elements;
import nx3.render.svg.ShapeTools;
import nx3.QNote;
import nx3.TPoint;
import nx3.TPoints;
import nx3.VBeamgroup;

import nx3.EDirectionUAD;
import nx3.EDirectionUD;
import nx3.ENoteVal;
import nx3.NBar;
import nx3.NHead;
import nx3.NNote;
import nx3.NPart;
import nx3.NVoice;

import nx3.geom.Rectangle;
import nx3.render.FrameRenderer;
import nx3.render.scaling.Scaling;
import nx3.render.scaling.TScaling;
import nx3.render.tools.RenderTools;
import nx3.test.TestVRender.DevRenderer;

#if (nme)
import nme.text.TextFormat;
import nme.text.TextField;
import nme.display.Sprite;
import nme.Lib;
import nme.display.Shape;
import nme.display.Graphics;
#else
import flash.text.TextFormat;
import flash.text.TextField;
import flash.display.Sprite;
import flash.display.Graphics;
import flash.Lib;
import flash.display.Shape;
#end

using nx3.VMapTools;
using cx.ArrayTools;
using nx3.ENoteValTools;


/**
 * ...
 * @author Jonas Nyström
 */
class TestVRender extends  TestCase
{
	var target:Sprite;
	var renderer:DevRenderer;

	public function new() 
	{
		super();
		this.target = Lib.current;
		this.renderer = new DevRenderer(this.target, Scaling.BIG);
	}

	public function test0()
	{
		this.assertEquals(1, 1);
		//this.renderer.notelines(10, 50, 300);
	}
	
	
	public function testDist1()
	{
		var vbar = new VBar(new NBar([
			//new NPart([new QVoice([4, 2, 4, 8, 8, 8], [1, -3, 0], '#b......'), ]),
			//new NPart([new QVoice([2, 8,8,4], [0, 0, 1, -1], '...b'),]),
			//new NPart([new QVoice([4], [ -1]), new QVoice([4], [0])]),
			//new NPart([new QVoice([8], [-1, -1, 0, 0]), new QVoice([4], [0])]),
			
			new NPart([new QVoice([8, 8], [-1, 2])]),

			//new NPart([new QVoice([4], [0]) , new QVoice([8, 8, 8], [1, 1, 5], '..#')]),
			//new NPart([new QVoice([8, 8, 8, 8], [0, 1, 2, 3])]),
		]));
		
		this.renderer.setDefaultXY(500, 80);
		this.renderer.drawVBarNotelines(vbar, 800, 50);
		//this.renderer.drawVBarColumns(vbar);
		this.renderer.drawVBarComplexes(vbar);
		this.renderer.drawVBarVoices(vbar);					
		this.assertTrue(true);
	}	
	
	
	/*
	public function testVBar()
	{
		this.assertTrue(true);
		
		var npart0 = new NPart([
			//new QVoice([2, 4, 4], [ -2, -1, 1]),
			new NVoice([new NNote([new NHead(-2), new NHead(-3)],ENoteVal.Nv2), new QNote4(1), new QNote(1)]),			
			new NVoice([new NNote([new NHead(2), new NHead(3)], ENoteVal.Nv4dot), new QNote8(2)]),
			//new QVoice([.4, 8], [2, 2]),
		]);
		var npart1 = new NPart([
			new QVoice([8, .4], [-1, -2]),
			new QVoice([4, 4], [0, 2])
		]);
		
		var vbar = new VBar(new NBar([npart0, npart1]));
		
		//this.assertEquals(positionsColumns.keys().keysToArray().toString(), [0, 1512, 3024, 4536].toString());
		this.renderer.setDefaultXY(200, 80);
		this.renderer.drawVBarNotelines(vbar, 500, 50);
		this.renderer.drawVBarColumns(vbar);
		this.renderer.drawVBarComplexes(vbar);
		this.renderer.drawVBarVoices(vbar);			
	}
	*/
	
	/*
	public function testVBar1()
	{
		this.assertTrue(true);
		
		var npart0 = new NPart([
			new NVoice([
				//new QNote2([ -2, -3]),
				new NNote([new NHead( -2), new NHead( -3)], ENoteVal.Nv1),
			]),
			
			new QVoice([.4, 8], [2, 2]),
		]);
		var npart1 = new NPart([
			new QVoice([8, .4], [-2, -2]),
			new QVoice([4, 4], [2, 2])
		]);
		
		var vbar = new VBar(new NBar([npart0, npart1]));
		
		//this.assertEquals(positionsColumns.keys().keysToArray().toString(), [0, 1512, 3024, 4536].toString());
		
		this.renderer.setDefaultXY(800, 80);
		this.renderer.drawVBarNotelines(vbar, 400, 50);
		this.renderer.drawVBarColumns(vbar);
		this.renderer.drawVBarComplexes(vbar);
		this.renderer.drawVBarVoices(vbar);	
	}
	*/
	
	/*
	public function testVBar2()
	{
		this.assertTrue(true);

		var npart0 = new NPart([
			new NVoice([new NNote([new NHead(-7, ESign.Sharp), new NHead(0,  ESign.Sharp)], ENoteVal.Nv2), new NNote([new NHead(2, ESign.None)], ENoteVal.Nv8), new NNote([new NHead(2, ESign.None)], ENoteVal.Nv8)]),
			new NVoice([new NNote([new NHead(-2, ESign.Sharp), new NHead(6, ESign.Sharp)], ENoteVal.Nv4dot)]),
		]);
		
		var vbar = new VBar(new NBar([npart0]));
		this.renderer.setDefaultXY(80, 400);
		this.renderer.drawVBarNotelines(vbar, 100, 50);
		//this.renderer.drawVBarColumns(vbar);
		this.renderer.drawVBarComplexes(vbar);
		this.renderer.drawVBarVoices(vbar);			
		
	}	
	*/
	
	/*
	public function testVBar3()
	{
		this.assertTrue(true);

		var npart0 = new NPart([
			new QVoice([4,4, 4, 1, 1], [0, 0, 0, 0, 0]), 
			new QVoice([4, 4, 4, 1, 1], [2, 1, 0, 1, 0]), 
		]);
		
		var vbar = new VBar(new NBar([npart0]));
		this.renderer.setDefaultXY(300, 400);
		this.renderer.drawVBarNotelines(vbar, 800, 50);
		this.renderer.drawVBarColumns(vbar);
		this.renderer.drawVBarComplexes(vbar);
		this.renderer.drawVBarVoices(vbar);			
	}		
	*/
	

	
	
	
#if (nme)	
	override public function tearDown()
	{
		var filename = Type.getClassName(Type.getClass(this)) + '.png';
		RenderTools.spriteToPng(this.target, filename);
	}
#end	
	
}

class DevRenderer extends FrameRenderer
{
	static private var posfactor = .03;
	
	public var partdistance(default, default):Float = 120;
	public var defaultX(default, default):Float = 40;
	public var defaultY(default, default):Float = 80;
	
	public function setDefaultXY(x:Float, y:Float)
	{
		this.defaultX = x;
		this.defaultY = y;
	}
	
	public function vnoteheads(vnote:VNote, x:Float, y:Float, fill:Int = 0x00FF00)
	{
		this.target.graphics.beginFill(fill);
		//this.target.graphics.drawCircle(x, y, this.scaling.space);
		for (rect in vnote.getVHeadsRectanglesDir(null))
		{
			this.drawRect(rect, x, y);
		}
	}
	
	public function drawVBarNotelines(vbar:VBar, width:Float=800, xMinus:Float=100)
	{
		var y = this.defaultY;
		
		for (vpart in vbar.getVParts())
		{
			this.notelines(this.defaultX - xMinus, y, width+xMinus);
			y += this.partdistance;
		}
	}
	
	public function drawVBarColumns(vbar:VBar)
	{
		var height = (vbar.getVParts().length-1) * this.partdistance;
		var positionsColumns : IntMap<VColumn> = vbar.getPositionsColumns();
		for (pos in positionsColumns.keys())
		{
			var colx = pos * posfactor;			
			this.target.graphics.endFill();
			this.target.graphics.lineStyle(1, 0x0000ff);
			this.target.graphics.moveTo(this.defaultX + colx, this.defaultY - this.scaling.space*3);
			this.target.graphics.lineTo(this.defaultX + colx, this.defaultY + height + this.scaling.space*3);
		}
	}
	
	public function drawVBarComplexes(vbar:VBar)
	{
		var barMinWidth = vbar.getVColumnsMinWidth();
		this.drawRectangleScaled(this.target.graphics,  this.defaultX,  this.defaultY, new Rectangle(0, -7, barMinWidth, 30));
		
		var columnsMinPositions  = vbar.getVColumnsMinPositions();
		var party = this.defaultY;
		
		for (vpart in vbar.getVParts())
		{
			var beamgroupsDirections = vpart.getBeamgroupsDirections();
			//var complexMinDistances = vpart.getVComplexesMinDistances();			
			//var pos = 0.0;
			for (vcomplex in vpart.getVComplexes())
			{
				var vcolumn = vbar.getVComplexesVColumns().get(vcomplex);				
				var pos = columnsMinPositions.get(vcolumn);				
				var colx = this.defaultX + pos * scaling.halfNoteWidth;
				
				for (vnote in vcomplex.getVNotes())
				{
					var vvoice = vpart.getVNotesVVoices().get(vnote);
					var noteComplexIdx = vcomplex.getVNotes().index(vnote);
					var beamgroup = vvoice.getNotesBeamgroups().get(vnote);
					var direction = beamgroupsDirections.get(beamgroup);
					var headsXOffset = vcomplex.getHeadsCollisionOffsetX(vnote) * scaling.halfNoteWidth;
					this.heads(colx+headsXOffset, party, vnote, direction);
				}
				
				var directions = vpart.getVComplexDirections().get(vcomplex);
				var noterects = vcomplex.getNotesRects(directions);
				this.target.graphics.lineStyle(1, 0xaaaaaa);
				this.drawRectanglesScaled(this.target.graphics, colx, party, noterects);				
				var staverects = vcomplex.getStaveBasicRects(directions);
				this.drawRectanglesScaled(this.target.graphics, colx, party, staverects);
				
				var signsrects = vcomplex.getSignsRects(noterects);
				//this.drawRectanglesScaled(this.target.graphics, colx, party, signsrects);
				var dotrects = vcomplex.getDotsRects(noterects, directions);				
				//this.drawRectanglesScaled(this.target.graphics, colx, party, dotrects);
			}
			
			party += this.partdistance;
		}
	}
	

	
	public function drawVBarVoices(vbar:VBar)
	{
		var party = this.defaultY;		
		var columnsMinPositions  = vbar.getVColumnsMinPositions();		
		var vpartIdx = 0;
		for (vpart in vbar.getVParts())
		{
			var beamgroupsDirections = vpart.getBeamgroupsDirections();			
			var vnotesVComplexes = vpart.getVNotesVComplexes();
			//var vcomplexes = vpart.getVComplexes();
			for (beamgroups in vpart.getPartbeamgroups())
			{
				var vvoiceIdx = vpart.getPartbeamgroups().index(beamgroups);
				for (beamgroup in beamgroups)
				{
					var beamgroupIdx = beamgroups.index(beamgroup);					
					//var direction = beamgroupsDirections.get(beamgroup);					
					var beamgroupPoints = new TPoints();
					var direction:EDirectionUD = null;
					for (vnote in beamgroup.vnotes)
					{
						var vnoteIdx = beamgroup.vnotes.index(vnote);
						var vcolumn = vbar.getVNotesVColumns().get(vnote);
						var pos = columnsMinPositions.get(vcolumn);				
						var colx = this.defaultX + pos * scaling.halfNoteWidth;												
						var vvoice = vpart.getVVoices()[vvoiceIdx];
						var vcomplex = vnotesVComplexes.get(vnote);
						var directions = vpart.getVComplexDirections().get(vcomplex);
						var noteComplexIdx = vcomplex.getVNotes().indexOf(vnote);
						direction = directions[noteComplexIdx];
						var stavesPos = vcomplex.getStavesBasicX(directions);
						var stavePos = stavesPos[noteComplexIdx];
						var point:TPoint = null;
						point = { x:colx + stavePos.x*scaling.halfNoteWidth , y:party};
						beamgroupPoints.push(point);
					}
					this.drawBeamgroup(this.target.graphics, beamgroup, beamgroupPoints, direction);
				}
			}
			party += this.partdistance;
			vpartIdx++;
		}
	}
	
	private function addText(x:Float, y:Float, text:String, color:Int = 0x000000)
	{
		var tf = new TextField();
		tf.defaultTextFormat = new TextFormat('Arial', 10);
		tf.text = text;
		tf.x = x;		
		tf.y = y;
		this.target.addChild(tf);
	}
	
	public function heads(x:Float, y:Float, vnote:VNote, direction:EDirectionUD, xOffset:Float=0):Void 
	{
		var xmlStr:String = null;

		switch (vnote.nnote.value.head())
		{
			case EHeadValueType.HVT1: xmlStr = Elements.noteWhole;
			case EHeadValueType.HVT2: xmlStr = Elements.noteWhite;
			default: xmlStr = Elements.noteBlack;
		}
		
		for (rect in vnote.getVHeadsRectanglesDir(direction))
		{
			var shape:Shape = ShapeTools.getShape(xmlStr, this.scaling);
			drawShape(shape, x, y, rect);
		}			
	}	
	
	function drawShape(shape:Shape, x:Float, y:Float, rect:Rectangle)
	{
		if (shape == null) return;
		shape.x = x + rect.x * scaling.halfNoteWidth + scaling.svgX;
		shape.y = y + rect.y * scaling.halfSpace + scaling.svgY;
		this.target.addChild(shape);
	}	
	
	public function drawRectangle(graphics:Graphics, rect:Rectangle, xoffset=0.0)
	{
		graphics.drawRect(rect.x+xoffset, rect.y, rect.width, rect.height);
	}
	
	public function drawRectangles(graphics:Graphics, rects:Rectangles, xoffset=0.0)
	{
		for (rect in rects)
			graphics.drawRect(rect.x+xoffset, rect.y, rect.width, rect.height);
	}	

	public function drawRectangleScaled(graphics:Graphics, x:Float, y:Float, rect:Rectangle)
	{
			graphics.drawRect(x+ rect.x*scaling.halfNoteWidth, y+rect.y*scaling.halfSpace, rect.width*scaling.halfNoteWidth, rect.height*scaling.halfSpace);
	}		
	
	public function drawRectanglesScaled(graphics:Graphics, x:Float, y:Float, rects:Rectangles)
	{
		if (rects == null) return;
		for (rect in rects)
			drawRectangleScaled(graphics, x, y, rect);
	}		
	
	public function drawStaves(graphics:Graphics, x:Float, y:Float, rects:Rectangles)
	{
		drawRectanglesScaled(graphics, x, y, rects);
	}
	
	public function drawBeamgroup(graphics:Graphics, beamgroup:VBeamgroup, points:TPoints, direction:EDirectionUD)
	{
		this.target.graphics.lineStyle(1, 0xFF00FF);
		for (point in points)
		{
			drawRectangleScaled(graphics, point.x, point.y, new Rectangle( -.5, -.5, 1, 1));
		}
		var frame = beamgroup.getFrame();
		
		if (beamgroup.vnotes.length < 2) return;
		
		this.target.graphics.lineStyle(4, 0xFF00FF);

		var leftPoint = points.first();
		var rightPoint = points.last();
		var leftOuterY = /* firstPoint.y +*/ frame.leftOuterY * scaling.halfSpace;
		var rightOuterY  = /*lastPoint.y +*/ frame.rightOuterY * scaling.halfSpace;		
		
		this.target.graphics.moveTo(leftPoint.x, leftPoint.y + leftOuterY);
		this.target.graphics.lineTo(rightPoint.x, rightPoint.y + rightOuterY);

		this.target.graphics.lineStyle(1, 0xdddddd);
	}
	
}


