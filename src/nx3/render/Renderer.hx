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
import nx3.TPoint;
import nx3.TPoints;
import nx3.VBar;
using cx.ArrayTools;
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
		this.notlines(vbar, 500);
		this.complexes(vbar);
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
		this.target.rectangle(this.targetX, this.targetY, new Rectangle(0, -7, barMinWidth, 30));
		//this.drawRectangleScaled(this.target.graphics,  this.defaultX,  this.defaultY, new Rectangle(0, -7, barMinWidth, 30));
		
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
					//this.heads(colx + headsXOffset, party, vnote, direction);
					this.target.heads(colx + headsXOffset, party, vnote, direction);
				}
				
				var directions = vpart.getVComplexDirections().get(vcomplex);
				var noterects = vcomplex.getNotesRects(directions);
				//this.target.graphics.lineStyle(1, 0xaaaaaa);
				//this.drawRectanglesScaled(this.target.graphics, colx, party, noterects);			
				this.target.rectangles(colx, party, noterects , 1, 0xaaaaaa);
				var staverects = vcomplex.getStaveBasicRects(directions);
				this.target.rectangles(colx, party, staverects , 1, 0xaaaaaa);
				
				var signsrects = vcomplex.getSignsRects(noterects);
				//this.drawRectanglesScaled(this.target.graphics, colx, party, signsrects);
				var dotrects = vcomplex.getDotsRects(noterects, directions);				
				//this.drawRectanglesScaled(this.target.graphics, colx, party, dotrects);
			}
			
			party += this.partDistance;
		}
	}
	
	

	/*
	public function voices(vbar:VBar)
	{
		var party = this.defaultY;		
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
						var colx = this.defaultX + pos * scaling.halfNoteWidth;												
						var vvoice = vpart.getVVoices()[vvoiceIdx];
						var vcomplex = vnotesVComplexes.get(vnote);
						var noteComplexIdx = vcomplex.getVNotes().indexOf(vnote);
						var stavesPos = vcomplex.getStavesBasicX(vpart.getVComplexDirections().get(vcomplex));
						var stavePos = stavesPos[noteComplexIdx];
						var point:TPoint = null;
						point = { x:colx + stavePos.x*scaling.halfNoteWidth , y:party};
						beamgroupPoints.push(point);
					}
					this.drawBeamgroup(this.target.graphics, beamgroup, beamgroupPoints, beamgroup.getCalculatedDirection());
				}
			}
			party += this.partdistance;
			vpartIdx++;
		}		
		
	}
	*/
	
	public function getTestVBar():VBar
	{
		var vbar = new VBar(new NBar([
			new NPart([new QVoice([8, 8, 8, 8], [ -1, -1, 1, 1])]),
			new NPart([	
				new NVoice([
					new QNote16([ -1, 0]), new QNote16([ 0, 1 ]),  new QNote16([ 1, 2 ]),  new QNote16([ 5, 7 ]),
					new QNote16([ 0, 1]), new QNote16([ 0, 2 ]),  new QNote16([ 0, 3 ]),  new QNote16([ 0, 2 ]),
					
					])
			]),
		]));				
		return vbar;
	}
	
}