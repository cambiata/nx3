package nx3.render;
import nx3.Constants;
import nx3.EDirectionUDs;
import nx3.ESign;
import nx3.geom.Rectangle;
import nx3.EDirectionUD;
import nx3.NBar;
import nx3.NPart;
import nx3.NVoice;
import nx3.ENoteType;
import nx3.PBar;
import nx3.PColumnsDistancesCalculator;
import nx3.QNote.QNote16;
import nx3.QNote.QNote2;
import nx3.QNote.QNote4;
import nx3.QNote.QNote8;
import nx3.QVoice;
import nx3.render.ITarget;
import nx3.render.scaling.TScaling;
import nx3.render.svg.SvgElements;
import nx3.TPoint;
import nx3.TPoints;
import nx3.VBar;
import nx3.VBeamgroup;
import nx3.VBeamgroups;
import nx3.VComplex;
import nx3.VNote;
import nx3.VPart;

using cx.ArrayTools;
using nx3.ENoteValTools;

/**
 * ...
 * @author Jonas Nyström
 */
class Renderer extends RendererBase
{
	var partDistance:Int;

	public function new(target:ITarget, targetX:Float, targetY:Float) 
	{
		super(target, targetX, targetY);
		this.partDistance = Std.int(16 * scaling.unitY);
	}
	
	
	public function renderBar(vbar:VBar, newX:Float=-1, newY:Float=-1)
	{
		if (newX != -1) this.targetX = newX;
		if (newY != -1) this.targetY = newY;
		
		
		this.parts(vbar);
		this.complexes(vbar);
		this.staves(vbar);
	}
	
	function notlines(vbar:VBar, width:Float)
	{
		var partY = this.targetY;
		for (vpart in vbar.getVParts())
		{
			this.target.testLines(this.targetX, partY, width);
			partY += this.partDistance;
		}
	}
	
	function parts(vbar:VBar)
	{
		var barMinWidth = vbar.getVColumnsMinWidth();
		//this.target.rect(this.targetX, this.targetY, new Rectangle(0, -60, barMinWidth * scaling.halfNoteWidth, 260), .3);
		
		var party = this.targetY;
		for (vpart in vbar.getVParts())
		{		
			this.notlines(vbar, barMinWidth*this.scaling.unitX);
			party += this.partDistance;
		}
		
		
	}
	
	
	function complexes(vbar:VBar)
	{
		var barMinWidth = vbar.getVColumnsMinWidth();
		
		
		var columnsMinPositions  = vbar.getVColumnsMinPositions();
		var party = this.targetY;
		
		for (vpart in vbar.getVParts())
		{
			var beamgroupsDirections = vpart.getBeamgroupsDirections();
			//var complexMinDistances = vpart.getVComplexesMinDistances();			
			//var pos = 0.0;
			for (vcomplex in vpart.getVComplexes())
			{
				var vcolumn = vbar.getVComplexesVColumns().get(vcomplex);				
				var pos = columnsMinPositions.get(vcolumn);				
				var colx = this.targetX + pos * scaling.unitX;
				
				var beamgroups:VBeamgroups = [];
				
				for (vnote in vcomplex.getVNotes())
				{
					var vvoice = vpart.getVNotesVVoices().get(vnote);
					var noteComplexIdx = vcomplex.getVNotes().index(vnote);
					var beamgroup = vvoice.getNotesBeamgroups().get(vnote);
					beamgroups.push(beamgroup);
					
					var direction = beamgroupsDirections.get(beamgroup);
					//var headsXOffset = vcomplex.getHeadsCollisionOffsetX(vnote) * scaling.halfNoteWidth;
					this.heads(colx, party, vnote, direction);
				}

				var directions = vpart.getVComplexDirections().get(vcomplex);
				//this.complexheads(colx, party, vcomplex, directions);			
				
				//var noterects = vcomplex.getNotesRects(directions);
				//this.target.rectangles(colx, party, noterects , 1, 0x0000ff);				
				var headrects = vcomplex.getNotesHeadsRects(directions);
				//this.target.rectangles(colx, party, headrects , 1, 0xff0000);
				//trace(beamgroups);

				var staverects = vcomplex.getStaveBasicRects(directions, beamgroups);
				//this.target.rectangles(colx, party, staverects , 1, 0xaaaaaa);				
				
				//var signsrects = vcomplex.getSignsRects(headrects);
				
				this.signs(colx, party, vcomplex);
				
				var dotrects = vcomplex.getDotsRects(headrects, directions);				
			}
			
			party += this.partDistance;
		}
	}
	
	function complexheads(x:Float, y:Float, vcomplex:VComplex, directions:EDirectionUDs) 
	{
		var idx = 0;
		trace(vcomplex.getNotesRects(directions).length);
		for (vnote in vcomplex.getVNotes())
		{		
			trace(vnote.nnote.nheads.length);
		}
	}
	
	function signs(x:Float, y:Float, vcomplex:VComplex) 
	{

		var signs = vcomplex.getVisibleSigns();
		var signrects = vcomplex.getSignsRects();
		
		//this.target.rectangles(x, y, signrects , 1, 0xff0000);
		
		for (i in 0...signs.length)
		{
			var sign = signs[i];
			var rect = signrects[i];
			var xmlStr = switch(sign.sign)
			{
				case ESign.Flat: SvgElements.signFlat;
				case ESign.Natural: SvgElements.signNatural;
				case ESign.Sharp: SvgElements.signSharp;					
			default:
				null;
			}
			if (xmlStr != null) this.target.shape(x + (rect.x) * this.scaling.unitX, y + (rect.y+2) * this.scaling.unitY, xmlStr);
			
		}
	}
	
	public function staves(vbar:VBar)
	{
		var party = this.targetY;		
		var columnsMinPositions  = vbar.getVColumnsMinPositions();		
		var vpartIdx = 0;
		for (vpart in vbar.getVParts())
		{
			var beamgroupsDirections = vpart.getBeamgroupsDirections();			
			var vnotesVComplexes = vpart.getVNotesVComplexes();
			//var vcomplexes = vpart.getVComplexes();
			for (beamgroups in vpart.getVoicesBeamgroups())
			{
				var vvoiceIdx = vpart.getVoicesBeamgroups().index(beamgroups);
				for (beamgroup in beamgroups)
				{
					var beamgroupIdx = beamgroups.index(beamgroup);					
					//var direction = beamgroupsDirections.get(beamgroup);					
					var beamgroupPoints = new TPoints();
					var direction:EDirectionUD = beamgroup.getCalculatedDirection();
					for (vnote in beamgroup.vnotes)
					{
						var vnoteIdx = beamgroup.vnotes.index(vnote);
						var vcolumn = vbar.getVNotesVColumns().get(vnote);
						var pos = columnsMinPositions.get(vcolumn);				
						var colx = this.targetX + pos * scaling.unitX;												
						var vvoice = vpart.getVVoices()[vvoiceIdx];
						var vcomplex = vnotesVComplexes.get(vnote);
						var noteComplexIdx = vcomplex.getVNotes().indexOf(vnote);
						var stavesPos = vcomplex.getStavesBasicX(vpart.getVComplexDirections().get(vcomplex));
						var stavePos = stavesPos[noteComplexIdx];
						var stavePosX = stavePos.x * scaling.unitX;
						
						var point:TPoint = null;
						
						point = { x:colx + stavePosX, y:party};
						beamgroupPoints.push(point);
					}
					this.beamgroup(0, 0, beamgroup, beamgroupPoints, beamgroup.getCalculatedDirection());
				}
			}
			party += this.partDistance;
			vpartIdx++;
			vpartIdx++;
		}		
	}
	
	public function heads(x:Float, y:Float, vnote:VNote, direction:EDirectionUD):Void 
	{
		switch vnote.nnote.type
		{
			
			case ENoteType.Lyric(text, o, c, font):
				var rect = vnote.getVHeadsRectanglesDir(direction).first(); 
				//this.target.rectangle(x, y, rect);
				this.target.text(x + rect.x * this.scaling.unitX, y + rect.y * scaling.unitY, text);
				
			case ENoteType.Tpl(level):
				var rect = vnote.getVHeadsRectanglesDir(direction).first().clone(); 
				rect.inflate( -0.8, -0.8);
				this.target.filledellipse(x, y, rect, 5, 0xaaaaaa, 0xffffff);
				
			default:
				var svginfo = RendererTools.getHeadSvgInfo(vnote.nnote);		
				for (rect in vnote.getVHeadsRectanglesDir(direction))
				{
					this.target.shape(x+rect.x *scaling.unitX, y + (rect.y + svginfo.y) * scaling.unitY, svginfo.xmlStr);
				}				
		}		
	}	
	
	public function beamgroup(x:Float, y:Float, beamgroup:VBeamgroup, points:TPoints, direction:EDirectionUD):Void 
	{
		
		//for (point in points) this.target.rectangle(point.x, point.y, new Rectangle( -.5, -.5, 1, 1));
		
		var frame = beamgroup.getFrame();
		if (frame == null) return;

		
		
		var leftPoint = points.first();		
		var leftOuterY =  frame.leftOuterY * scaling.unitY;
		var leftInnerY =  frame.leftInnerY * scaling.unitY;
		var leftTipY =  frame.leftTipY * scaling.unitY;
		var leftX = leftPoint.x;
		// left stave
		//this.target.line(leftPoint.x, leftPoint.y + leftInnerY, leftPoint.x, leftPoint.y + leftTipY, 1, 0x000000);
		this.target.line(leftX, leftPoint.y + leftInnerY, leftX, leftPoint.y + leftTipY, 1, 0x000000);
		
		//--------------------------------------------------------------
		// Flags
		if (beamgroup.vnotes.length == 1)
		{
			var firstnote:VNote = beamgroup.vnotes[0];
			if (firstnote.nnote.value.beaminglevel() > 0)
			{
				if (beamgroup.getCalculatedDirection() == EDirectionUD.Up)
				{
					var adjustX = 0.6 * scaling.unitX;
					var adjustY = 1 * scaling.unitY;
					this.target.shape(leftX - adjustX , leftPoint.y + adjustY +leftTipY, SvgElements.flagUp8, 0x000000);
				}
				else
				{
					var adjustX = 0.6 * scaling.unitX;
					var adjustY = -3 * scaling.unitY;
					this.target.shape(leftX - adjustX , leftPoint.y + adjustY +leftTipY, SvgElements.flagDown8, 0x000000);
				}
			}
		}
		//------------------------------------------------------------------------------------------
		
		if (beamgroup.vnotes.length < 2) return;

		var rightPoint = points.last();
		var rightOuterY  =  frame.rightOuterY * scaling.unitY;
		var rightInnerY  =  frame.rightInnerY * scaling.unitY;
		var rightTipY  =  frame.rightTipY * scaling.unitY;

		// right stave
		this.target.line(rightPoint.x, rightPoint.y + rightInnerY, rightPoint.x, rightPoint.y + rightTipY, 1, 0x000000);

		// beam
		//this.target.line(leftPoint.x, leftPoint.y + leftTipY, rightPoint.x, rightPoint.y + rightTipY, 5, 0x000000);
		var beamh:Float = Constants.BEAM_HEIGHT * this.scaling.unitY;
		this.target.parallellogram(leftPoint.x, leftPoint.y + leftTipY - (beamh/2), rightPoint.x, rightPoint.y + rightTipY - (beamh/2), beamh, 0, 0, 0);
		
		if (beamgroup.vnotes.length < 3) return;
		
		// mid staves
		for (i in 1...frame.outerLevels.length - 1)
		{
			var midPoint = points[i];
			var midInnerY = frame.innerLevels[i] * scaling.unitY;
			var delta:Float = (midPoint.x - leftPoint.x) / (rightPoint.x - leftPoint.x);
			var midTipY = leftTipY + (rightTipY - leftTipY) * delta;
			this.target.line(midPoint.x, midPoint.y + midInnerY, midPoint.x, midPoint.y + midTipY, 1, 0x000000);
		}		
	}	
	
	
	public function getTarget():ITarget
	{
		return this.target;
	}
	
	public function renderPBar(bar:PBar, newX:Float=-1, newY:Float=-1)
	{
		if (newX != -1) this.targetX = newX;
		if (newY != -1) this.targetY = newY;	
		this.pbar(bar);
		
	}
	

	
	
	
}