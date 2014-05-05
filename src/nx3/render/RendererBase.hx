package nx3.render;
import nx3.Constants;
import nx3.EBeamflagType;
import nx3.EClef;
import nx3.EKeysTools;
import nx3.geom.BezieerTool;
import nx3.geom.Pnt;
import nx3.geom.Rectangle;
import nx3.EDirectionUD;
import nx3.ENoteType;
import nx3.geom.Rectangles;
import nx3.PBar;
import nx3.PBeamgroup;
import nx3.PComplex;
import nx3.PNote;
import nx3.PPart;
import nx3.PScore;
import nx3.PSystem;
import nx3.PSystemBar;
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
	
	public function psystems(systems:PSystems)
	{
		var ny = 0.0;
		for (system in systems)
		{
			this.psystem(system, 0, ny);
			ny += 40;
		}
	}
	
	public function psystem(system:PSystem, nx:Float = 0, ny:Float = 0)
	{
		var tx = this.targetX + nx * this.scaling.unitX;
		var ty = this.targetY  + ny * this.scaling.unitY;				
			
		this.target.rectangle(tx, ty, new Rectangle(0, -10, system.getSystemBreakWidth(), 40), 2, 0x00ff00);
		
		for (systembar in system.getSystembars())
		{
			
			var meas = systembar.getBarWidths();
			
			//trace([systembar.barWidths.x, systembar.barWidths.width]);
			var barX =  meas.x;
			var barWidth = meas.width;
			this.target.rectangle(tx, ty, new Rectangle(barX, -10, barWidth, 40), 2);
			//this.pnotelines(x, 0, width);
			
			// draw left barline
			var leftBarlineX = barX;			
			this.target.rectangle(tx, ty, new Rectangle(leftBarlineX, -10, meas.ackoladeWidth, 40));
			
			var clefX = barX + meas.ackoladeWidth;
			this.target.rectangle(tx, ty, new Rectangle(clefX, -9, meas.clefWidth, 38), 1, 0xFF0000);
			// draw clef
			
			var keyX = clefX + meas.clefWidth;
			this.target.rectangle(tx, ty, new Rectangle(keyX, -9, meas.keyWidth, 38), 1, 0xFF0000);
			// draw key
			
			var timeX = keyX + meas.keyWidth;
			this.target.rectangle(tx, ty, new Rectangle(timeX, -9, meas.timeWidth, 38), 1, 0xFF0000);
			// draw time
			
			var contentLeftMarginX = timeX + meas.timeWidth;
			this.target.rectangle(tx, ty, new Rectangle(contentLeftMarginX, -10, meas.contentLeftMargin, 40), 1, 0xFF0000);
			
			var contentX = contentLeftMarginX + meas.contentLeftMargin;
			//this.pbar(systembar.bar, contentX, 0);
			
			var cautClefX = contentX + meas.contentWidth;
			this.target.rectangle(tx, ty, new Rectangle(cautClefX, -9, meas.cautClefWidth, 38), 1, 0xFF0000);			
			
			var cautKeyX = cautClefX + meas.cautClefWidth;
			this.target.rectangle(tx, ty, new Rectangle(cautKeyX, -9, meas.cautKeyWidth, 38), 1, 0xFF0000);			
			
			var cautTimeX = cautKeyX + meas.cautKeyWidth;
			this.target.rectangle(tx, ty, new Rectangle(cautTimeX, -9, meas.cautTimeWidth, 38), 1, 0xFF0000);
			
			var barlineX = cautTimeX + meas.cautTimeWidth;
			this.target.rectangle(tx, ty, new Rectangle(barlineX, -10, meas.barlineWidth, 40), 1, 0xFF0000);
			
			//---------------------------------------------------------------------------------------------------------------
			this.barAttributes(systembar, barX, ny);
			this.barContent(systembar.bar, contentX, ny);
		}
		
	}
	
	public function barAttributes(systembar:PSystemBar, nx:Float = 0, ny:Float = 0)
	{
		var tx = this.targetX + nx * this.scaling.unitX;
		var ty = this.targetY  + ny * this.scaling.unitY;		
		
		var partidx = 0;
			for (part in systembar.bar.getParts())
			{
				this.target.testLines(tx , ty + part.getYPosition() * this.scaling.unitY,  systembar.getBarWidths().width * this.scaling.unitX);				
				
				this.barAttributeClef(systembar, part, nx, ny);
				this.barAttributeKey(systembar, part, nx, ny);
				
				partidx++;
			}		
	}
	
	public function barAttributeKey(systembar:PSystemBar, part:PPart, nx:Float, ny:Float)
	{	
		var showkey = systembar.barConfig.showKey;
		if (!showkey) return;	

		var partidx = systembar.bar.getParts().indexOf(part);
		var actkey = systembar.actAttributes.keys[partidx];				
		
		var tx = this.targetX + nx * this.scaling.unitX;
		var ty = this.targetY  + ny * this.scaling.unitY;						
		
		var keyX = (systembar.getBarWidths().ackoladeWidth + systembar.getBarWidths().clefWidth) * this.scaling.unitX;
		var keyY = 1 * this.scaling.unitY;		
		
		var keyCode = EKeysTools.getSigncode(actkey);		
		var svgXmlstr = (keyCode == -1) ? SvgElements.signFlat: SvgElements.signSharp;
		var keyLevels = EKeysTools.getLevels(actkey, EClef.ClefG);
		
		for (level in keyLevels)
		{		
			var keyY = level * this.scaling.unitY;		
			this.target.shape(tx + keyX, ty + keyY +  part.getYPosition() * this.scaling.unitY, svgXmlstr);		
			keyX += Constants.ATTRIBUTE_SIGN_WIDTH * this.target.getScaling().unitX;
		}
		
	}
	
	public function barAttributeClef(systembar:PSystemBar, part:PPart, nx:Float, ny:Float)
	{
		var showclef = systembar.barConfig.showClef;
		if (!showclef) return;
		
		var partidx = systembar.bar.getParts().indexOf(part);
		var actclef = systembar.actAttributes.clefs[partidx];		
		
		
		var tx = this.targetX + nx * this.scaling.unitX;
		var ty = this.targetY  + ny * this.scaling.unitY;				
		
		var clefX = (systembar.getBarWidths().ackoladeWidth) * this.scaling.unitX;
		var clefY = 1 * this.scaling.unitY;
		
		
		
		var svgXmlstr = switch actclef
		{
			case EClef.ClefC: SvgElements.clefC;
			case EClef.ClefG: SvgElements.clefG;
			case EClef.ClefF: SvgElements.clefF;						
		}
		this.target.shape(tx + clefX, ty + clefY +  part.getYPosition() * this.scaling.unitY, svgXmlstr);		
	}
	
	
	public function barContent(bar:PBar, nx:Float=0, ny:Float=0)
	{
		var tx = this.targetX + nx * this.scaling.unitX;
		var ty = this.targetY  + ny * this.scaling.unitY;
		
		var contentwidth = bar.getContentwidth();
		//trace(bar.getContentwidth());
		for (part in bar.getParts())
		{
			//this.target.testLines(tx , ty + part.getYPosition()*this.scaling.unitY,  contentwidth*this.scaling.unitX);
			
			for (voice in part.getVoices())
			{
				for (beamgroup in voice.getBeamgroups())
				{
					this.pbeamgroup(beamgroup, nx, ny);					
				}
			}
		}		
		for (column in bar.getColumns())
		{			
			//trace([column.getValue(), column.getValueDelta()]);
			for (complex in column.getComplexes())
			{
				this.pcomplex(complex, nx, ny);
			}			
		}				
	}	
	
	public function pnoteHeads(note:PNote, nx:Float=0, ny:Float=0):Void 
	{
		
		//var tx = this.targetX + nx * this.scaling.unitX;
		//var ty = this.targetY  + ny * this.scaling.unitY;
		
		var x = this.targetX +  (nx +  note.getComplex().getXPosition()) * target.getScaling().unitX;
		var y  = this.targetY + (ny + note.getComplex().getPart().getYPosition()) * target.getScaling().unitY;		
		
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
				var hx1: Float = x;
				var hx2: Float = x;

				for (rect in note.getHeadsRects())
				{
					this.target.shape(x + rect.x * scaling.unitX, y + (rect.y + svginfo.y) * scaling.unitY, svginfo.xmlStr);
				}				

				//--------------------------------------------------------------------------------------
				// leger lines...
				
				var i = 0;
				for (rect in note.getHeadsRects())
				{
					
					var level = note.getHeads()[i].nhead.level;
					if (level > 5 || level < -5)
					{
						hx1 = Math.min(hx1, x + (rect.x - Constants.LEGER_MARGIN) * scaling.unitX);
						hx2 = Math.max(hx2, x + (rect.x + rect.width + Constants.LEGER_MARGIN) * scaling.unitX);					
					}					
					i++;
				}						
				
				
				for (head in note.getHeads())
				{					
					var level = head.nhead.level;
					if (level <  5 && level >-5) continue;					
					var lev1 = (level < 0) ? level : 5;
					var lev2 = (level < 0) ? -4 : level+1;
					
					for (l in lev1...lev2)
					{
						if (((l+100) % 2) == 1) continue;
						var hy = y + l * this.scaling.unitY;
						this.target.line(hx1, hy , hx2, hy, 1, 0x000000);
					}					
				}
		}		
	}			
	
	
	public function pcomplex(complex:PComplex, nx:Float=0, ny:Float=0)
	{
		if (complex == null) return;
		
		//var tx = this.targetX + nx * this.scaling.unitX;
		//var ty = this.targetY  + ny * this.scaling.unitY;		
		
		var x = this.targetX + (nx + complex.getXPosition()) * target.getScaling().unitX;
		var y  =  this.targetY + (ny + complex.getPart().getYPosition()) * target.getScaling().unitY;
		//target.rectangle(x, y, complex.getBaseRect(), 1, 0x00FF00);
		//target.rectangles(x, y, complex.getAllRects(), 1, 0xFF0000);		
		
		
		for (note in complex.getNotes())
		{
			this.pnoteHeads(note, nx, ny);
		}
		this.psigns(complex, nx, ny);		
		this.pdots(complex, nx, ny);
		this.pties(complex, nx, ny);
	}
	
	public function pties(complex:PComplex, nx:Float=0, ny:Float=0) 
	{		
		var x = this.targetX + (nx + complex.getXPosition()) * target.getScaling().unitX;				
		var y  = this.targetY + (ny + complex.getPart().getYPosition()) * target.getScaling().unitY;

		for (info in complex.getTieinfos())
		{
			var rect = info.rect;
			var direction = info.direction;
			
			if (info.target != null)
			{					
				var targetcomplex = info.target.getNote().getComplex();
				
				var thisx = complex.getXPosition() + rect.x;				
				var targetAllRect = RectanglesTools.unionAll(targetcomplex.getAllRects());
				var targetx = targetcomplex.getXPosition() + targetAllRect.x;
				rect.width = (targetx -thisx) - 0.5 ;				
			}
			
			//this.target.rectangle(x, y, rect);
			this.drawTie(x, y, rect, direction);
			
		}
	}
	
	public function pdots(complex:PComplex, nx:Float=0, ny:Float=0) 
	{	
		for (r in complex.getDotRects())
		{			
			
			var x = this.targetX + (nx + complex.getXPosition()) * target.getScaling().unitX;
			var y  = this.targetY + (ny + complex.getPart().getYPosition()) * target.getScaling().unitY;
			
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
	
	
	public function psigns(complex:PComplex, nx:Float=0, ny:Float=0) 
	{
		
		var x = this.targetX + (nx + complex.getXPosition()) * target.getScaling().unitX;	
		var y  = this.targetY + (ny + complex.getPart().getYPosition()) * target.getScaling().unitY;
		
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
	
	public function pbeamgroup(beamgroup:PBeamgroup, nx:Float=0, ny:Float=0)
	{
		// TODO : Y
		//var notesx = beamgroup.getNotesXPositions();
		
		
		
		
		var frame = beamgroup.getFrame();
		if (frame == null) return;

		var tx = this.targetX + nx * this.scaling.unitX;
		var ty = this.targetY  + ny * this.scaling.unitY;		
		
		
		//--------------------------------------------------------------------------------------------------------

		var rightY = ty + beamgroup.getPVoice().getPart().getYPosition() * target.getScaling().unitY;		
		var direction = beamgroup.getDirection();
		
		var firstnote = beamgroup.pnotes.first();		
		var leftX = beamgroup.getNotesStemXPositions().first() * this.scaling.unitX;		
		
		var leftOuterY =  frame.leftOuterY * scaling.unitY;
		var leftInnerY =  frame.leftInnerY * scaling.unitY;
		var leftTipY =  frame.leftTipY * scaling.unitY;		
		this.target.line(tx + leftX, rightY + leftInnerY, tx + leftX, rightY + leftTipY, 1, 0x000000);		
		
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
					var flag = (firstnote.nnote.value.beaminglevel() == 2) ? SvgElements.flagUp16 : SvgElements.flagUp8;
					this.target.shape(tx + leftX - adjustX , rightY + adjustY +leftTipY, flag, 0x000000);
				}
				else
				{
					var adjustX = 0.6 * scaling.unitX;
					var adjustY = -3 * scaling.unitY;
					var flag = (firstnote.nnote.value.beaminglevel() == 2) ? SvgElements.flagDown16 : SvgElements.flagDown8;					
					this.target.shape(tx  + leftX- adjustX , rightY + adjustY +leftTipY,flag, 0x000000);
				}
			}
		}		
		
		//------------------------------------------------------------------------------------------
		if (beamgroup.pnotes.length < 2) return;
		//------------------------------------------------------------------------------------------

		var storeY:Array<Float> = [rightY + leftTipY];
		var storeX:Array<Float> = [tx + leftX];
		
		//-------------------------------------------------------------------------------------------
		
		// right stave
		var lastnote = beamgroup.pnotes.last();
		
		var rightX = beamgroup.getNotesStemXPositions().last() * this.scaling.unitX;		
		var rightOuterY  =  frame.rightOuterY * scaling.unitY;
		var rightInnerY  =  frame.rightInnerY * scaling.unitY;
		var rightTipY  =  frame.rightTipY * scaling.unitY;		
		this.target.line(tx + rightX, rightY+ rightInnerY, tx + rightX, rightY+ rightTipY, 1, 0x000000);		
		
		var beamh:Float = Constants.BEAM_HEIGHT * this.scaling.unitY;
		beamh  = (beamgroup.getDirection() == EDirectionUD.Up) ? -beamh : beamh;
		this.target.parallellogram(tx + leftX, rightY + leftTipY - beamh, tx + rightX, rightY+ rightTipY - beamh, beamh, 0, 0, 0);
		
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
				this.target.line(tx + midX, rightY + midInnerY, tx + midX, rightY + midTipY, 1, 0x000000);
				
				storeY.push(rightY + midTipY);
				storeX.push(tx + midX);
				
			}	
		}

		storeY.push(rightY + rightTipY);
		storeX.push(tx + rightX);
		
		
		
		//--------------------------------------------------------------------------------------------------------------
		// Beam 16ths
		
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
	
	public function pbeamgroupx(beamgroup:PBeamgroup, nx:Float=0, ny:Float=0)
	{
		// TODO : Y
		//var notesx = beamgroup.getNotesXPositions();
		
		
		
		
		var frame = beamgroup.getFrame();
		if (frame == null) return;

		var tx = this.targetX + nx * this.scaling.unitX;
		var ty = this.targetY  + ny * this.scaling.unitY;		
		
		
		//--------------------------------------------------------------------------------------------------------

		var rightY = this.targetY + beamgroup.getPVoice().getPart().getYPosition() * target.getScaling().unitY;		
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
					var flag = (firstnote.nnote.value.beaminglevel() == 2) ? SvgElements.flagUp16 : SvgElements.flagUp8;
					this.target.shape(this.targetX + leftX - adjustX , rightY + adjustY +leftTipY, flag, 0x000000);
				}
				else
				{
					var adjustX = 0.6 * scaling.unitX;
					var adjustY = -3 * scaling.unitY;
					var flag = (firstnote.nnote.value.beaminglevel() == 2) ? SvgElements.flagDown16 : SvgElements.flagDown8;					
					this.target.shape(this.targetX  + leftX- adjustX , rightY + adjustY +leftTipY,flag, 0x000000);
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
		// Beam 16ths
		
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