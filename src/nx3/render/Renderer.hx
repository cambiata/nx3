package nx3.render;
import nx3.Constants;
import nx3.EBeamflagType;
import nx3.EClef;
import nx3.EKeysTools;
import nx3.EPartType;
import nx3.ETie;
import nx3.ETime;
import nx3.EVoiceType;
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
import nx3.PSystemBars;
import nx3.PSystems;
import nx3.action.EActionInfo;
import nx3.action.EActionType;
import nx3.action.EActivityType;
import nx3.action.IInteractivity;
import nx3.render.scaling.TScaling;
import nx3.render.svg.SvgElements;
using cx.ArrayTools;
using nx3.ENoteValTools;
using nx3.ETime.ETimeUtils;


/**
 * ...
 * @author Jonas Nyström
 */

class Renderer
{
	var target:ITarget;
	var targetY:Float;
	var targetX:Float;
	var scaling:TScaling;
	var interactions:Array<IInteractivity>;
	var partDistance:Int;
	
	
	public function xToUnitX(x:Float):Float return x * (1 / this.scaling.unitX);			
	public function yToUnitY(y:Float):Float return y * (1 / this.scaling.unitY);		
	
	public function renderSystem(system:PSystem, newX:Float=-1, newY:Float=-1)
	{
		if (newX != -1) this.targetX = newX;
		if (newY != -1) this.targetY = newY;	
		this.drawSystem(system);
	}
	
	public function renderScore(score:PScore, newX:Float=-1, newY:Float=-1, systemwidth:Float=400)
	{
		if (newX != -1) this.targetX = newX;
		if (newY != -1) this.targetY = newY;	
		this.drawSystems(score.getSystems(systemwidth));	
	}	

	//----------------------------------------------------------------------------------------------------------------------------------------------------------	
	
	
	public function new(target:ITarget, targetX:Float, targetY:Float, interactions:Array<IInteractivity>=null ) 
	{
		#if (mtrace > 1) trace('->Renderer()'); #end
		this.target = target;
		this.targetX = targetX;
		this.targetY = targetY;
		this.scaling = this.target.getScaling();
		this.interactions = (interactions != null) ? interactions : [];		
		
		// TODO
		this.partDistance = Std.int(16 * scaling.unitY);
	}
	
	public function addInteraction(interaction:IInteractivity)
	{		
		#if (mtrace > 1) trace('->addInteraction()'); #end
		this.interactions.push(interaction);
	}
	
	public function drawSystems(systems:PSystems)
	{
		#if (mtrace > 1) trace('->drawSystems()'); #end
		var ny = 0.0;
		for (system in systems)
		{
			this.drawSystem(system, 0, ny);
			this.drawSystemExtras(systems, system, 0, ny);
			
			ny += 50;
		}
	}

	public function drawSystemExtras(systems:PSystems,system:PSystem, nx:Float = 0, ny:Float = 0)
	{
		#if (mtrace > 1) trace('->drawSystemExtras()'); #end
		var tx = this.targetX + nx * this.scaling.unitX;
		var ty = this.targetY  + ny * this.scaling.unitY;				
		
		/*
		if (system != systems.first())
		{
			// do stuff like draw ties to the first bar...
		}
		*/
		
		for (systembar in system.getSystembars())
		{
				//trace(systembar.getBarWidths());
				
			
			if (systembar == system.getSystembars().first())
			{
				if (system != systems.first())
				{
					var prevSystem = systems.prev(system);
					var prevSystembar = prevSystem.getSystembars().last();
					var tieconnections = prevSystembar.bar.getTieConnections();
					//trace(tieconnections);
					for (connection in tieconnections)
					{					
						var fromBarX = systembar.getXPosition();		
						//var fromNoteX = systembar.getBarWidths().ackoladeWidth + systembar.getBarWidths().clefWidth + systembar.getBarWidths().keyWidth + systembar.getBarWidths().timeWidth + systembar.getBarWidths().contentLeftMargin +connection.to.getXPosition();
						var fromNoteX = systembar.getBarMeasurements().getLeftContentMarginXPosition()  +connection.from.getXPosition();
						var party = connection.to.getComplex().getPart().getYPosition() * this.scaling.unitY;
						
						var tielevel = 0;
						switch connection.tie
						{
							case ETie.Tie(tdir, tlevel): tielevel = tlevel;
						default:							
						}
						
						var xshift = -5;
						var tiewidth = 3;
						
						var tierect = new Rectangle(fromBarX + fromNoteX + xshift, connection.level + tielevel, tiewidth, 1);
						
						this.drawTie(tx, ty + party, tierect, EDirectionUD.Down);
					}
					// draw stuff like tie to?
				}
			}
			
			
			
			if (systembar == system.getSystembars().last())
			{
				// draw stuff like tie from
				
				var tieconnections = systembar.bar.getTieConnections();
				//trace(tieconnections);
				for (connection in tieconnections)
				{
					var fromBarX = systembar.getXPosition();					
					//var fromNoteX = systembar.getBarWidths().ackoladeWidth + systembar.getBarWidths().clefWidth + systembar.getBarWidths().keyWidth + systembar.getBarWidths().timeWidth + systembar.getBarWidths().contentLeftMargin +connection.from.getXPosition();
					var fromNoteX = systembar.getBarMeasurements().getLeftContentMarginXPosition()  +connection.from.getXPosition();
					var toBarX = systembar.getXPosition() + systembar.getBarMeasurements().getTotalWidth();
					//var toNoteX = nextsystembar.getBarWidths().ackoladeWidth + nextsystembar.getBarWidths().clefWidth + nextsystembar.getBarWidths().keyWidth + nextsystembar.getBarWidths().timeWidth + nextsystembar.getBarWidths().contentLeftMargin +  connection.to.getXPosition();						
					//trace([fromBarX, fromNoteX, toBarX, toNoteX]);
					
					var party = connection.to.getComplex().getPart().getYPosition() * this.scaling.unitY;
					//var tieX = tx + fromBarX * this.scaling.unitX;
						var tielevel = 0;
						switch connection.tie
						{
							case ETie.Tie(tdir, tlevel): tielevel = tlevel;
						default:							
						}					
					
					var xshift = 2;
					var tierect = new Rectangle(fromBarX+fromNoteX + xshift, connection.level + tielevel, toBarX - (fromBarX+fromNoteX) ,  2);
					
					this.drawTie(tx, ty + party, tierect, EDirectionUD.Down);
					
				}
				
				
			}
			else
			{
				// draw stuff like ties between...
				var tieconnections = systembar.bar.getTieConnections();
				//trace(tieconnections);
				for (connection in tieconnections)
				{
					var fromBarX = systembar.getXPosition();					
					var nextsystembar = connection.to.getComplex().getPart().getBar().getSystembar();
					var toBarX = nextsystembar.getXPosition();
					//var fromNoteX = systembar.getBarWidths().ackoladeWidth + systembar.getBarWidths().clefWidth + systembar.getBarWidths().keyWidth + systembar.getBarWidths().timeWidth + systembar.getBarWidths().contentLeftMargin +connection.from.getXPosition();					
					var fromNoteX = systembar.getBarMeasurements().getLeftContentMarginXPosition() +connection.from.getXPosition();
					//var toNoteX = nextsystembar.getBarWidths().ackoladeWidth + nextsystembar.getBarWidths().clefWidth + nextsystembar.getBarWidths().keyWidth + nextsystembar.getBarWidths().timeWidth + nextsystembar.getBarWidths().contentLeftMargin +  connection.to.getXPosition();
					var toNoteX = nextsystembar.getBarMeasurements().getLeftContentMarginXPosition() +connection.to.getXPosition();	
					//trace([fromBarX, fromNoteX, toBarX, toNoteX]);
					
					var party = connection.to.getComplex().getPart().getYPosition() * this.scaling.unitY;
					//var tieX = tx + fromBarX * this.scaling.unitX;
					var xshift = 2;
					
					var tielevel = 0;
					switch connection.tie
					{
						case ETie.Tie(tdir, tlevel): tielevel = tlevel;
						default:
					}				
					
					var tierect = new Rectangle(fromBarX+fromNoteX + xshift, connection.level + tielevel, (toBarX+toNoteX) - (fromBarX+fromNoteX) - xshift - xshift, 2);
					
					this.drawTie(tx, ty + party, tierect, EDirectionUD.Down);
					
				}
				
				
			}
			
			
		}		
	}
	
	
	
	public function drawSystem(system:PSystem, nx:Float = 0, ny:Float = 0)
	{
		#if (mtrace > 1) trace('->drawSystem()'); #end
		var tx = this.targetX + nx * this.scaling.unitX;
		var ty = this.targetY  + ny * this.scaling.unitY;				
			
		//this.target.rectangle(tx, ty, new Rectangle(0, -10, system.getSystemBreakWidth(), 40), 2, 0x00ff00);
		var barx = 0.0;
		for (systembar in system.getSystembars())
		{
			var meas = systembar.getBarMeasurements();
			this.drawBarAttributes(systembar, barx, ny);
			this.drawBarContent(systembar, barx, ny);
			barx += systembar.getBarMeasurements().getTotalWidth();
			
		}
		
		this.drawBarlines(system.getSystembars(), nx, ny);
		
	}
	
	private function drawBarlines(systembars:PSystemBars, nx:Float, ny:Float) 
	{
		#if (mtrace > 1) trace('->drawBarlines()'); #end
		
		//trace([systembar.barWidths.x, systembar.barWidths.width]);
		//var barX =  systembars.first().getXPosition();
		//var barWidth = systembars.first().getBarMeasurements().getTotalWidth();		
		
		var tx = this.targetX + nx * this.scaling.unitX;
		var ty = this.targetY  + ny * this.scaling.unitY;				
		
		//var partidx = 0;		
		
		var partFirstY = (systembars.first().bar.getParts().first().getYPosition() - 4) * this.scaling.unitY;		
		var partY = 0.0;
		
		var barX = 0.0;
		for (systembar in systembars)
		{
			
			var barWidth = systembar.getBarMeasurements().getTotalWidth();				
			
			for (part in systembar.bar.getParts())
			{				
				switch part.npart.type
				{
					case EPartType.Normal:
						var barlineTop = (part.getYPosition()-4) * this.scaling.unitY;
						var barlineBottom = (part.getYPosition() + 4) * this.scaling.unitY;
						var barlineX = tx + (barX + barWidth) * this.scaling.unitX;
						this.target.line(barlineX, ty + barlineTop, barlineX, ty + barlineBottom, 1.4, 0x000000);				
						partY  = part.getYPosition();
					default: 
				}				
			}
			barX += barWidth;
			
		}
		var partLastY = (partY + 4) * this.scaling.unitY;
		this.target.line(tx, ty + partFirstY, tx, ty + partLastY, 2, 0x000000);	
	}
	
	public function drawBarAttributes(systembar:PSystemBar, nx:Float = 0, ny:Float = 0)
	{
		#if (mtrace > 1) trace('->drawBarAttributes()'); #end
		var tx = this.targetX + nx * this.scaling.unitX;
		var ty = this.targetY  + ny * this.scaling.unitY;		
		
			for (part in systembar.bar.getParts())
			{
				if (part.npart.type.getName() != 'Normal') continue;
				
				var partIdx = systembar.bar.getParts().indexOf(part);
				
				this.target.testLines(tx , ty + part.getYPosition() * this.scaling.unitY,  systembar.getBarMeasurements().getTotalWidth()* this.scaling.unitX);				
				this.drawBarAttributeClef(systembar, part, nx, ny, systembar.getBarMeasurements().getClefXPosition());
				this.drawBarAttributeKey(systembar, part, nx, ny, systembar.getBarMeasurements().getKeyXPosition());
				this.drawBarAttributeTime(systembar, part, nx, ny, systembar.getBarMeasurements().getTimeXPosition());
			}		
	}
	
	public function drawBarAttributeTime(systembar:PSystemBar, part:PPart, nx:Float, ny:Float, timeX:Float=0)
	{
		#if (mtrace > 2) trace('- ->drawBarAttributeTime()'); #end
		var showTime = systembar.barConfig.showTime;
		if (!showTime) return;		
		
		var acttime = systembar.actAttributes.time;	
		var tx = this.targetX + nx * this.scaling.unitX;
		var ty = this.targetY  + ny * this.scaling.unitY;				
		
		timeX =  timeX * this.scaling.unitX;
			
		var timeChars = acttime.toString().split('/');
		if (timeChars.length == 2)
		{
			var upperXmlStr = getSvgNumber(timeChars.first());
			var timeY = -3 * this.scaling.unitY;					
			this.target.shape(tx + timeX, ty + timeY +  part.getYPosition() * this.scaling.unitY, upperXmlStr);		
			
			var lowerXmlStr = getSvgNumber(timeChars.second());			
			var timeY = 1 * this.scaling.unitY;					
			this.target.shape(tx + timeX, ty + timeY +  part.getYPosition() * this.scaling.unitY, lowerXmlStr);		
		}
		else
		{
			var midXmlStr = getSvgNumber(timeChars.first());
			var timeY = -1 * this.scaling.unitY;					
			this.target.shape(tx + timeX, ty + timeY +  part.getYPosition() * this.scaling.unitY, midXmlStr);					
		}
		
		
	}
	
	public function drawBarAttributeKey(systembar:PSystemBar, part:PPart, nx:Float, ny:Float, keyX:Float=0)
	{	
		#if (mtrace > 2) trace('- ->drawBarAttributeKey()'); #end
		var showkey = systembar.barConfig.showKey;
		if (!showkey) return;	

		var partidx = systembar.bar.getParts().indexOf(part);
		var actkey = systembar.actAttributes.keys[partidx];				
		
		var tx = this.targetX + nx * this.scaling.unitX;
		var ty = this.targetY  + ny * this.scaling.unitY;						
		
		var keyX = systembar.getBarMeasurements().getKeyXPosition() * this.scaling.unitX;
		var keyY = 1 * this.scaling.unitY;		
		
		var keyCode = EKeysTools.getSigncode(actkey);		
		var svgXmlstr = (keyCode == -1) ? SvgElements.signFlat: SvgElements.signSharp;
		var keyLevels = EKeysTools.getLevels(actkey, systembar.actAttributes.clefs[partidx]);
		
		for (level in keyLevels)
		{		
			var keyY = level * this.scaling.unitY;		
			this.target.shape(tx + keyX, ty + keyY +  part.getYPosition() * this.scaling.unitY, svgXmlstr);		
			keyX += Constants.ATTRIBUTE_SIGN_WIDTH * this.target.getScaling().unitX;
		}
		
	}
	
	public function drawBarAttributeClef(systembar:PSystemBar, part:PPart, nx:Float, ny:Float,  clefX:Float=0)
	{
		#if (mtrace > 2) trace('- ->drawBarAttributeClef()'); #end
		var showclef = systembar.barConfig.showClef;
		if (!showclef) return;
		
		var partidx = systembar.bar.getParts().indexOf(part);
		var actclef = systembar.actAttributes.clefs[partidx];		
		
		
		var tx = this.targetX + nx * this.scaling.unitX;
		var ty = this.targetY  + ny * this.scaling.unitY;				
		
		var clefX = (systembar.getBarMeasurements().getClefXPosition() * this.scaling.unitX);
		var clefY = 1 * this.scaling.unitY;
		
		
		
		var svgXmlstr = switch actclef
		{
			case EClef.ClefC: SvgElements.clefC;
			case EClef.ClefG: SvgElements.clefG;
			case EClef.ClefF: SvgElements.clefF;						
		}
		this.target.shape(tx + clefX, ty + clefY +  part.getYPosition() * this.scaling.unitY, svgXmlstr);		
	}
	
	
	public function drawBarContent(systembar:PSystemBar, nx:Float=0, ny:Float=0)
	{
		#if (mtrace > 1) trace('->drawBarContent()'); #end
		var bar = systembar.bar;
		nx = nx + systembar.getBarMeasurements().getContentXPosition();
		
		var tx = this.targetX + nx * this.scaling.unitX;
		var ty = this.targetY  + ny * this.scaling.unitY;
		
		
		var contentwidth = bar.getContentwidth();
		trace(bar.getContentwidth());
		for (part in bar.getParts())
		{
			//this.target.testLines(tx , ty + part.getYPosition()*this.scaling.unitY,  contentwidth*this.scaling.unitX);
			
			for (voice in part.getVoices())
			{
				for (beamgroup in voice.getBeamgroups())
				{
					this.drawBeamgroup(beamgroup, nx, ny);					
				}
				
				switch voice.nvoice.type
				{
					case EVoiceType.Normal:
					case EVoiceType.Barpause(bplevel):						
				}
				
			}
		}		
		for (column in bar.getColumns())
		{			
			//trace([column.getValue(), column.getValueDelta()]);
			for (complex in column.getComplexes())
			{
				this.drawComplex(complex, nx, ny);
				this.interactiveComplex(complex, nx, ny);
				
			}			
		}				
	}	
	
	public function drawNoteHeads(note:PNote, nx:Float=0, ny:Float=0):Void 
	{
		#if (mtrace > 2) trace('- ->drawNoteHeads()'); #end
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
				
				var textlevel = (((level * -1) + 21) % 7)+1;
				var text =  Std.string(textlevel);
				this.target.setFont( { name:'Arial', size: 24, bold:false, italic:false } );
				var textwidth = this.target.textwidth(text) * this.scaling.unitX;
				
				var textheight = this.target.textheight(text) * this.scaling.unitY;							
				
				var ny = (note.getVoice().getPart().npart.type.getName() == 'Tplchain') ? y + (level * 3) * this.scaling.unitY : y;				

				this.target.filledellipse(x, ny, rect, 3, 0x000000, 0xffffff);		
				var tx = x - textwidth / 2 - 1 * this.scaling.unitX;
				#if (js)
				var ty  = ny - textheight  / 5;
				#else
				var ty  = ny - textheight / 2 - 0.4*this.scaling.unitY;
				#end
				
				this.target.text(tx, ty, text);
			default:
				var svginfo = RendererTools.getHeadSvgInfo(note.nnote);						
				var hx1: Float = x;
				var hx2: Float = x;

				for (rect in note.getHeadsRects())
				{
					this.target.shape(x + rect.x * scaling.unitX, y + (rect.y + svginfo.y) * scaling.unitY, svginfo.xmlStr);					
					this.target.interactiveEllipse(x, y, rect, 5 * this.scaling.linesWidth, 0x36b633, function(activityType:EActivityType) {
						//trace(activityType.getName());
						for (interaction in this.interactions) interaction.handleAction(EActionType.NoteAction(activityType, note, EActionInfo.TargetXY(this.target, x + rect.x * scaling.unitX, y + rect.y * scaling.unitY)));
					});
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
	
	
	public function drawComplex(complex:PComplex, nx:Float=0, ny:Float=0)
	{
		#if (mtrace > 2) trace('- ->drawComplex()'); #end
		if (complex == null) return;
		
		//var tx = this.targetX + nx * this.scaling.unitX;
		//var ty = this.targetY  + ny * this.scaling.unitY;		
		
		var x = this.targetX + (nx + complex.getXPosition()) * target.getScaling().unitX;
		var y  =  this.targetY + (ny + complex.getPart().getYPosition()) * target.getScaling().unitY;
		//target.rectangle(x, y, complex.getBaseRect(), 1, 0x00FF00);
		//target.rectangles(x, y, complex.getAllRects(), 1, 0xFF0000);		
		
		
		for (note in complex.getNotes())
		{
			this.drawNoteHeads(note, nx, ny);
		}
		this.drawComplexSigns(complex, nx, ny);		
		this.drawComplexDots(complex, nx, ny);
		this.drawComplexTies(complex, nx, ny);
		
		
		
	}
	


	

		
	
	public function drawComplexTies(complex:PComplex, nx:Float=0, ny:Float=0) 
	{		
		#if (mtrace > 2) trace('- ->drawComplexTies()'); #end
		var x = this.targetX + (nx + complex.getXPosition()) * target.getScaling().unitX;				
		var y  = this.targetY + (ny + complex.getPart().getYPosition()) * target.getScaling().unitY;

		for (info in complex.getTieinfos())
		{
			var rect = info.rect;
			var direction = info.direction;

			//if (info.head.getNote() == info.head.getNote().getVoice().getNotes().last()) continue;
			
			if (info.target != null)
			{					
				var targetcomplex = info.target.getNote().getComplex();				
				var thisx = complex.getXPosition() + rect.x;				
				var targetAllRect = RectanglesTools.unionAll(targetcomplex.getAllRects());
				var targetx = targetcomplex.getXPosition() + targetAllRect.x;
				//rect.width = 5; // (targetx -thisx) - 0.5 ;				
				var xshift = .5*this.scaling.unitX;
				
				rect.width = (targetx -thisx) - 0.5 ;
				this.drawTie(x+xshift, y, rect, direction);
			}
			else
			{				
				// NO TARGET!
				
				rect.width = 6;
				//this.drawTie(x, y, rect, direction);
			}
			
		}
	}
	
	public function drawComplexDots(complex:PComplex, nx:Float=0, ny:Float=0) 
	{	
		#if (mtrace > 2) trace('- ->drawComplexDots()'); #end
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
	
	
	public function drawComplexSigns(complex:PComplex, nx:Float=0, ny:Float=0) 
	{
		#if (mtrace > 2) trace('- ->drawComplexSigns()'); #end
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
	
	public function drawBeamgroup(beamgroup:PBeamgroup, nx:Float=0, ny:Float=0)
	{
		#if (mtrace > 2) trace('- ->drawBeamgroup()'); #end
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
	
	public function drawBeamgroupX(beamgroup:PBeamgroup, nx:Float=0, ny:Float=0)
	{
		// TODO : Y
		//var notesx = beamgroup.getNotesXPositions();
		#if (mtrace > 2) trace('- ->drawBeamgroupX()'); #end
		
		
		
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
		#if (mtrace > 2) trace('- ->drawTie()'); #end
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
	
	function getSvgNumber(char:String):String
	{
		
		return switch char
		{
			case '0': SvgElements.time0;
			case '1': SvgElements.time1;
			case '2': SvgElements.time2;
			case '3': SvgElements.time3;
			case '4': SvgElements.time4;
			case '5': SvgElements.time5;
			case '6': SvgElements.time6;
			case '7': SvgElements.time7;
			case '8': SvgElements.time8;
			case '9': SvgElements.time9;
			case 'C': SvgElements.timeCommon;
			case 'AllaBreve': SvgElements.timeAllabreve;
			default: return '';
		}
		
	}
	
	public function getTarget():ITarget
	{
		return this.target;
	}
	
	
	public function interactiveComplex(complex:PComplex, nx:Float, ny:Float)
	{
		if (complex == null) return;
		var x = this.targetX + (nx + complex.getXPosition()) * target.getScaling().unitX;
		var y  =  this.targetY + (ny + complex.getPart().getYPosition()) * target.getScaling().unitY;
		for (note in complex.getNotes())
		{
			this.interactiveNote(note, nx, ny);
		}		
		
	}
	
	public function interactiveNote(note:PNote, nx:Float, ny:Float)
	{
		var x = this.targetX +  (nx +  note.getComplex().getXPosition()) * target.getScaling().unitX;
		var y  = this.targetY + (ny + note.getComplex().getPart().getYPosition()) * target.getScaling().unitY;		
	
	}
		

	
	
}