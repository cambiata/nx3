package nx3.render;
import nx3.geom.Rectangle;
import nx3.EDirectionUD;
import nx3.NBar;
import nx3.NPart;
import nx3.NVoice;
import nx3.QNote.QNote16;
import nx3.QVoice;
import nx3.render.ITarget;
import nx3.render.scaling.TScaling;
import nx3.render.svg.Elements;
import nx3.TPoint;
import nx3.TPoints;
import nx3.VBar;
import nx3.VNote;


using cx.ArrayTools;
using nx3.ENoteValTools;




/**
 * ...
 * @author Jonas Nyström
 */
class Renderer
{
	var target:ITarget;
	var partDistance:Int;
	var targetY:Float;
	var targetX:Float;
	var scaling:TScaling;

	public function new(target:ITarget, targetX:Float, targetY:Float) 
	{
		this.partDistance = 120;
		this.target = target;
		this.targetX = targetX;
		this.targetY = targetY;
		this.scaling = this.target.getScaling();
	}
	
	public function renderBar(vbar:VBar)
	{
		this.notlines(vbar,400);
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
	
	function complexes(vbar:VBar)
	{
		var barMinWidth = vbar.getVColumnsMinWidth();
		this.target.rect(this.targetX, this.targetY, new Rectangle(0, -60, barMinWidth*scaling.halfNoteWidth, 260), .3);
		
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
				var colx = this.targetX + pos * scaling.halfNoteWidth;
				
				for (vnote in vcomplex.getVNotes())
				{
					var vvoice = vpart.getVNotesVVoices().get(vnote);
					var noteComplexIdx = vcomplex.getVNotes().index(vnote);
					var beamgroup = vvoice.getNotesBeamgroups().get(vnote);
					var direction = beamgroupsDirections.get(beamgroup);
					var headsXOffset = vcomplex.getHeadsCollisionOffsetX(vnote) * scaling.halfNoteWidth;
					this.heads(colx + headsXOffset, party, vnote, direction);
				}
				
				var directions = vpart.getVComplexDirections().get(vcomplex);
				var noterects = vcomplex.getNotesRects(directions);
				this.target.rectangles(colx, party, noterects , .2, 0xaaaaaa);
				var staverects = vcomplex.getStaveBasicRects(directions);
				this.target.rectangles(colx, party, staverects , .2, 0xaaaaaa);
				
				var signsrects = vcomplex.getSignsRects(noterects);
				this.target.rectangles(colx, party, staverects , .2, 0xaaaaaa);
				
				var dotrects = vcomplex.getDotsRects(noterects, directions);				
			}
			
			party += this.partDistance;
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
						var colx = this.targetX + pos * scaling.halfNoteWidth;												
						var vvoice = vpart.getVVoices()[vvoiceIdx];
						var vcomplex = vnotesVComplexes.get(vnote);
						var noteComplexIdx = vcomplex.getVNotes().indexOf(vnote);
						var stavesPos = vcomplex.getStavesBasicX(vpart.getVComplexDirections().get(vcomplex));
						var stavePos = stavesPos[noteComplexIdx];
						var point:TPoint = null;
						point = { x:colx + stavePos.x*scaling.halfNoteWidth , y:party};
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
		var xmlStr:String = null;

		switch (vnote.nnote.value.head())
		{
			case EHeadValueType.HVT1: xmlStr = Elements.noteWhole;
			case EHeadValueType.HVT2: xmlStr = Elements.noteWhite;
			default: xmlStr = Elements.noteBlack;
		}
		
		for (rect in vnote.getVHeadsRectanglesDir(direction))
		{
			this.target.shape(x+rect.x *scaling.halfNoteWidth, y+ rect.y * scaling.halfSpace, xmlStr);
		}				
	}	
	
	public function beamgroup(x:Float, y:Float, beamgroup:VBeamgroup, points:TPoints, direction:EDirectionUD):Void 
	{
		for (point in points)
		{
			this.target.rectangle(point.x, point.y, new Rectangle( -.5, -.5, 1, 1));
		}
		
		var frame = beamgroup.getFrame();

		var leftPoint = points.first();		
		var leftOuterY =  frame.leftOuterY * scaling.halfSpace;
		var leftInnerY =  frame.leftInnerY * scaling.halfSpace;
		var leftTipY =  frame.leftTipY * scaling.halfSpace;
		
		// left stave
		this.target.line(leftPoint.x, leftPoint.y + leftInnerY, leftPoint.x, leftPoint.y + leftTipY, 1, 0x000000);
		
		if (beamgroup.vnotes.length < 2) return;

		var rightPoint = points.last();
		var rightOuterY  =  frame.rightOuterY * scaling.halfSpace;
		var rightInnerY  =  frame.rightInnerY * scaling.halfSpace;
		var rightTipY  =  frame.rightTipY * scaling.halfSpace;

		// right stave
		this.target.line(rightPoint.x, rightPoint.y + rightInnerY, rightPoint.x, rightPoint.y + rightTipY, 1, 0x000000);
		
		/*
		// Outire
		this.target.graphics.lineStyle(4, 0xFF00FF);
		this.target.graphics.moveTo(leftPoint.x, leftPoint.y + leftOuterY);
		this.target.graphics.lineTo(rightPoint.x, rightPoint.y + rightOuterY);

		// Inner
		this.target.graphics.lineStyle(2, 0x00FFFF);		
		this.target.graphics.moveTo(leftPoint.x, leftPoint.y + leftInnerY);
		this.target.graphics.lineTo(rightPoint.x, rightPoint.y + rightInnerY);
		*/
		

		// beam
		this.target.line(leftPoint.x, leftPoint.y + leftTipY, rightPoint.x, rightPoint.y + rightTipY, 5, 0x000000);
		
		if (beamgroup.vnotes.length < 3) return;
		
		
		// mid staves
		for (i in 1...frame.outerLevels.length - 1)
		{
			var midPoint = points[i];
			var midInnerY = frame.innerLevels[i] * scaling.halfSpace;
			var delta:Float = (midPoint.x - leftPoint.x) / (rightPoint.x - leftPoint.x);
			var midTipY = leftTipY + (rightTipY - leftTipY) * delta;
			this.target.line(midPoint.x, midPoint.y + midInnerY, midPoint.x, midPoint.y + midTipY, 1, 0x000000);
		}		
		
	}	
	
	
	
	
}