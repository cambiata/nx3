package nx3.render;
import nx3.Constants;
import nx3.EBeamflagType;
import nx3.geom.BezieerTool;
import nx3.geom.Pnt;
import nx3.geom.Rectangle;
import nx3.EDirectionUD;
import nx3.ENoteType;
import nx3.geom.Rectangles;
import nx3.PBeamgroup;
import nx3.PComplex;
import nx3.PNote;
import nx3.render.scaling.TScaling;
import nx3.render.svg.SvgElements;
using cx.ArrayTools;
using nx3.ENoteValTools;

/**
 * ...
 * @author Jonas Nyström
 */
class RendererBase
{
	var target:ITarget;
	var targetY:Float;
	var targetX:Float;
	var scaling:TScaling;

	public function new(target:ITarget, targetX:Float, targetY:Float) 
	{
		this.target = target;
		this.targetX = targetX;
		this.targetY = targetY;
		this.scaling = this.target.getScaling();
	}
	
	public function pnoteHeads(note:PNote):Void 
	{
		
		var y  = this.targetY + note.getComplex().getPart().getYPosition() * target.getScaling().unitY;		
		var x = this.targetX +  note.getComplex().getXPosition() * target.getScaling().unitX;		
		
		switch note.nnote.type
		{			
			case ENoteType.Lyric(text, o, c, font):
				var rect = note.getHeadsRects().first();
				//var rect = vnote.getVHeadsRectanglesDir(direction).first(); 
				this.target.text(x + rect.x * this.scaling.unitX, y + rect.y * scaling.unitY, text);
				
			case ENoteType.Tpl(level):
				var rect = note.getHeadsRects().first().clone();
				rect.inflate( -0.8, -0.8);
				this.target.filledellipse(x, y, rect, 5, 0xaaaaaa, 0xffffff);
				
			default:
				var svginfo = RendererTools.getHeadSvgInfo(note.nnote);		
				for (rect in note.getHeadsRects())
				{
					this.target.shape(x+rect.x *scaling.unitX, y + (rect.y + svginfo.y) * scaling.unitY, svginfo.xmlStr);
				}				
		}		
	}		
	
	public function pbar(bar:PBar)
	{
		for (part in bar.getParts())
		{
			this.target.testLines(this.targetX - (4*this.scaling.unitY) , this.targetY+ part.getYPosition()*this.scaling.unitY,  100*this.scaling.unitX);
			for (voice in part.getVoices())
			{
				for (beamgroup in voice.getBeamgroups())
				{
					this.pbeamgroup(beamgroup);					
				}
			}
		}		
		for (column in bar.getColumns())
		{			
			//trace([column.getValue(), column.getValueDelta()]);
			for (complex in column.getComplexes())
			{
				this.pcomplex(complex);
			}			
		}		
	}	
	
	public function pcomplex(complex:PComplex)
	{
		if (complex == null) return;
		
		var y  = this.targetY + complex.getPart().getYPosition() * target.getScaling().unitY;
		var x = this.targetX + complex.getXPosition() * target.getScaling().unitX;
		//target.rectangle(x, y, complex.getBaseRect(), 1, 0x00FF00);
		//target.rectangles(x, y, complex.getAllRects(), 1, 0xFF0000);		
		
		
		for (note in complex.getNotes())
		{
			this.pnoteHeads(note);
		}
		this.psigns(complex);		
		this.pdots(complex);
		this.pties(complex);
	}
	
	public function pties(complex:PComplex) 
	{		
		var y  = this.targetY + complex.getPart().getYPosition() * target.getScaling().unitY;
		var x = this.targetX + complex.getXPosition() * target.getScaling().unitX;				

		for (info in complex.getTieinfos())
		{
		
			var rect = info.rect;
			var direction = info.direction;
			
			if (info.target != null)
			{					
				var targetcomplex = info.target.pnote.getComplex();
				
				var thisx = complex.getXPosition() + rect.x;				
				var targetAllRect = RectanglesTools.unionAll(targetcomplex.getAllRects());
				var targetx = targetcomplex.getXPosition() + targetAllRect.x;
				rect.width = (targetx -thisx) - 0.5 ;				
			}
			
			//this.target.rectangle(x, y, rect);
			this.drawTie(x, y, rect, direction);
			
		}
	}
	
	public function pdots(complex:PComplex) 
	{	
		for (r in complex.getDotRects())
		{			
			var y  = this.targetY + complex.getPart().getYPosition() * target.getScaling().unitY;
			var x = this.targetX + complex.getXPosition() * target.getScaling().unitX;			
			var crect = r.clone();
			var ddot =  (crect.width == Constants.DDOT_WIDTH);
			crect.offset(0.9, 0.2);
			crect.width = 0.7;
			crect.height = 0.6;
			this.target.filledellipse(x, y, crect, 0, 0, 0x000000);
			if (!ddot) continue;
			crect.offset(1.3, 0);
			this.target.filledellipse(x, y, crect, 0, 0, 0x000000);
		}		
	}
	
	
	public function psigns(complex:PComplex) 
	{
		var y  = this.targetY + complex.getPart().getYPosition() * target.getScaling().unitY;
		var x = this.targetX + complex.getXPosition() * target.getScaling().unitX;	
		var signs = complex.getVisibleSigns();
		var rects = complex.getSignsRects();
		//this.target.rectangles(x, y, signrects , 1, 0xff0000);
		for (i in 0...signs.length)
		{
			var sign = signs[i];
			var rect = rects[i];			
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
	
	public function pbeamgroup(beamgroup:PBeamgroup)
	{
		// TODO : Y
		//var notesx = beamgroup.getNotesXPositions();
		var frame = beamgroup.getFrame();
		if (frame == null) return;

		//--------------------------------------------------------------------------------------------------------

		var rightY = this.targetY + beamgroup.getPVoice().part.getYPosition() * target.getScaling().unitY;		
		var direction = beamgroup.getDirection();
		
		var firstnote = beamgroup.pnotes.first();		
		var leftX = beamgroup.getNotesStemXPositions().first() * this.scaling.unitX;		
		
		var leftOuterY =  frame.leftOuterY * scaling.unitY;
		var leftInnerY =  frame.leftInnerY * scaling.unitY;
		var leftTipY =  frame.leftTipY * scaling.unitY;		
		this.target.line(this.targetX + leftX, rightY + leftInnerY, this.targetX + leftX, rightY + leftTipY, 1, 0x000000);		
		
		//------------------------------------------------------------------------------------------
		
		if (beamgroup.pnotes.length == 1)
		{	
			// Flags?
			if (firstnote.nnote.value.beaminglevel() > 0)
			{
				if (beamgroup.getDirection() == EDirectionUD.Up)
				{
					var adjustX = 0.6 * scaling.unitX;
					var adjustY = 1 * scaling.unitY;
					this.target.shape(this.targetX + leftX - adjustX , rightY + adjustY +leftTipY, SvgElements.flagUp8, 0x000000);
				}
				else
				{
					var adjustX = 0.6 * scaling.unitX;
					var adjustY = -3 * scaling.unitY;
					this.target.shape(this.targetX  + leftX- adjustX , rightY + adjustY +leftTipY, SvgElements.flagDown8, 0x000000);
				}
			}
		}		
		
		//------------------------------------------------------------------------------------------
		if (beamgroup.pnotes.length < 2) return;
		//------------------------------------------------------------------------------------------

		var storeY:Array<Float> = [rightY + leftTipY];
		var storeX:Array<Float> = [this.targetX + leftX];
		
		//-------------------------------------------------------------------------------------------
		
		// right stave
		var lastnote = beamgroup.pnotes.last();
		
		var rightX = beamgroup.getNotesStemXPositions().last() * this.scaling.unitX;		
		var rightOuterY  =  frame.rightOuterY * scaling.unitY;
		var rightInnerY  =  frame.rightInnerY * scaling.unitY;
		var rightTipY  =  frame.rightTipY * scaling.unitY;		
		this.target.line(this.targetX + rightX, rightY+ rightInnerY, this.targetX + rightX, rightY+ rightTipY, 1, 0x000000);		
		
		var beamh:Float = Constants.BEAM_HEIGHT * this.scaling.unitY;
		beamh  = (beamgroup.getDirection() == EDirectionUD.Up) ? -beamh : beamh;
		this.target.parallellogram(this.targetX + leftX, rightY + leftTipY - beamh, this.targetX + rightX, rightY+ rightTipY - beamh, beamh, 0, 0, 0);
		
		//------------------------------------------------------------------------------------------
		if (beamgroup.pnotes.length > 2) 
		{
			// mid staves
			for (i in 1...frame.outerLevels.length - 1)
			{
				var midX = beamgroup.getNotesStemXPositions()[i] * this.scaling.unitX;		
				var midInnerY = frame.innerLevels[i] * scaling.unitY;
				var delta:Float = (midX - leftX) / (rightX - leftX);
				var midTipY = leftTipY + (rightTipY - leftTipY) * delta;
				this.target.line(this.targetX + midX, rightY + midInnerY, this.targetX + midX, rightY + midTipY, 1, 0x000000);
				
				storeY.push(rightY + midTipY);
				storeX.push(this.targetX + midX);
				
			}	
		}

		storeY.push(rightY + rightTipY);
		storeX.push(this.targetX + rightX);
		
		
		
		//--------------------------------------------------------------------------------------------------------------
		
		trace(storeX);
		var idx = 0;
		var beamh:Float = Constants.BEAM_HEIGHT * this.scaling.unitY;
		for (flagtype in beamgroup.getFrame().beamflags)
		{
			var adjustY:Float = (beamgroup.getDirection() == EDirectionUD.Up) ? 2.1 : -2.1;
			adjustY *= this.scaling.unitY;
			
			var currX = storeX[idx];
			var currY = storeY[idx]+adjustY;			
			var nextX = storeX[idx+1];
			var nextY = storeY[idx + 1]+adjustY;			
			//this.target.line(currX, currY, nextX, nextY, 5, 0xFF0000);
			
			var factor = 2.2 * this.scaling.unitX;
			switch (flagtype)
			{
				case EBeamflagType.Full16:
					//this.target.line(currX, currY, nextX, nextY, 5, 0xFF0000);
					this.target.parallellogram(currX, currY  - beamh/2, nextX,nextY-beamh/2, beamh, 0, 0, 0);
				case EBeamflagType.Start16:
					var endX = currX + factor;
					var endY = (factor / (nextX - currX)) * (nextY - currY) + currY;			
					this.target.parallellogram(currX, currY  - beamh/2, endX,endY-beamh/2, beamh, 0, 0, 0);
					//this.target.line(currX, currY, endX, endY, 5, 0xFF0000);
				case EBeamflagType.End16:
					var startX = nextX - factor;
					var startY = ( -((nextX - startX) / (nextX - currX)) * (nextY - currY)) + nextY;			
					this.target.parallellogram(startX, startY  - beamh/2, nextX,nextY-beamh/2, beamh, 0, 0, 0);
					//this.target.line(startX, startY, nextX, nextY, 5, 0xFF0000);
						
				default:
			}
			
			
			idx++;
		}
		
		/*
		for (i in 1...frame.outerLevels.length - 1)
		{
			var midX = beamgroup.getNotesStemXPositions()[i] * this.scaling.unitX;		
			var midInnerY = frame.innerLevels[i] * scaling.unitY;
			var delta:Float = (midX - leftX) / (rightX - leftX);
			var midTipY = leftTipY + (rightTipY - leftTipY) * delta;
			this.target.line(this.targetX + midX,rightY + midInnerY,this.targetX + midX, rightY + midTipY, 1, 0x000000);
		}			
		*/
		
	}
	
	public function drawTie(x:Float, y:Float, rect:Rectangle, direction:EDirectionUD)
	{
		var a1:Pnt = null;
		var c1:Pnt = null;
		var c2:Pnt = null;
		var a2:Pnt = null;
		
		if (direction == EDirectionUD.Down) 
		{
			 a1 = {x: rect.x, y:rect.y};
			 c1 = { x:rect.x+1, y:rect.bottom };
			 c2 = { x:rect.right - 1, y:rect.bottom } ;
			 a2 = { x:rect.right, y:rect.y};						
		}
		else
		{
			 a1 = {x: rect.x, y:rect.bottom};
			 c1 = { x:rect.x+1, y:rect.y };
			 c2 = { x:rect.right-1, y:rect.y } ;
			 a2 = { x:rect.right, y:rect.bottom};			
		}
		var coords1 = BezieerTool.bezieerCoordinates(a1, c1, c2, a2);
		
		var thickness = 0.06 * this.scaling.unitY;
		if (direction == EDirectionUD.Down) 
		{			 
			 c1 = { x:rect.x, y:rect.bottom- thickness };
			 c2 = { x:rect.right, y:rect.bottom-thickness } ;
		}
		else
		{
			 c1 = { x:rect.x, y:rect.y+thickness };
			 c2 = { x:rect.right, y:rect.y+thickness } ;
		}
		
		var coords2 = BezieerTool.bezieerCoordinates(a2, c2, c1, a1);		
		coords1.shift();
		
		var coords = coords1.concat(coords2);
		this.target.polyfill(x, y, coords);		
	}
	
	
	
	
	
	
}