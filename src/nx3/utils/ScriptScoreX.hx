package nx3.utils;

/**
 * ScriptScoreX
 * @author Jonas Nyström
 */

 import Detox;
import dtx.DOMNode;
import nx3.audio.NotenrItem;
import nx3.geom.Size;
import nx3.js.MouseInteraction;
import nx3.xml.ScoreXML;
import nx3.render.scaling.ScalingTools;
import nx3.render.TargetSvgXml;
import nx3.render.Renderer;
import nx3.geom.Point;

using StringTools;
using nx3.render.scaling.ScalingTools;
 using Detox;
 
class ScriptScoreX {

	public var id(default, null):String;
		public var parent(default, null):DOMNode;
		public var scaling(default, null):nx3.render.scaling.TScaling;
		public var script(default, null):String;
		public var nscore(default, null):NScore;
		public var tempo(default, null):Int;
		public var sounds(default, null):Array<String>;
		public var autoWidth(default, null):Bool;
		public var fixedWidth(default, null):Float;
		public var svgSize(default, null):Size;
		public var svgElement(default, null):DOMNode;
		public var canvasElement(default, null):DOMNode;
		public var toolbar(default, null):DOMNode;
		public var btnPlay(default, null):DOMNode;
		public var btnStop(default, null):DOMNode;
		public var labelTime(default, null):DOMNode;
		public var parentWrapper(default, null): Null<DOMNode>;
		
		#if js
		public var context(default, null): js.html.CanvasRenderingContext2D ;
		public var drawingtools(default, null) : nx3.utils.ScoreDrawingTools;
		#end
		
		public function new(scriptElement:DOMNode) {
			
			this.id = scriptElement.attr('id');
			this.parent = scriptElement.parentNode;
			this.parentWrapper = this.parent.parent();			
			//this.parent.setAttr('id', 'nx-parent-${this.id}');
			this.parent.setAttr('id', this.id + ID_PARENT);
			this.parent.addClass('nx-parent');
			
			this.script = StringTools.htmlUnescape(scriptElement.innerHTML());
			this.nscore = ScoreXML.fromXmlStr(this.script);
			
			var tmpo:Int = Std.parseInt(scriptElement.attr('data-tempo'));
			this.tempo = (tmpo == null) ? 60 : tmpo;

			var snds:String = scriptElement.attr('data-sounds');
			this.sounds = (snds != null )  ? snds.split(',').map(function(s) return s.trim()) : [];

			 var scl:String = scriptElement.attr('data-scaling');
			 this.scaling = ScalingTools.fromString(scl);		
			
			var fxw = scriptElement.attr('data-width');
			if (fxw != null) {
				if (fxw.toLowerCase() == 'auto') {
					this.autoWidth = true;
					this.fixedWidth = SCORE_DEFAULT_WIDTH;
				} else {
					var w = Std.parseInt(fxw);
					if (w != null) 
						w = Std.int(Math.max(MIN_SCORE_WIDTH, w));
					else  {
						//trace('Score data-width not set: $fxw');
						w = SCORE_DEFAULT_WIDTH;
					}
					this.fixedWidth = w;	
					this.autoWidth = false;
				}
			} else {
				this.fixedWidth = SCORE_DEFAULT_WIDTH;
				this.autoWidth = false;
			}
			
			//var a:Array<Dynamic> = [this.fixedWidth, this.autoWidth];
			//trace(a);
			
			this.render();
			this.addHandlers();
		}
		
		public function getHtml():String return Std.string(this.parent);
		
		public function render() {			
			#if js
			if (this.autoWidth) 
				this._autorender()	
			else 
				this._render(this.fixedWidth);
			#else
				this._render(this.fixedWidth);
			#end
			
		}
		
		static inline var MIN_SCORE_WIDTH:Int = 400;
		static inline var SCORE_RIGHT_MARGIN:Int = 40;
		static inline var SCORE_DEFAULT_WIDTH:Int = 780;
		static inline var TOOLBAR_HEIGHT:Int = 30;
		static inline var ID_PARENT = '-parent';
		static inline var ID_SVG = '-svg';
		static inline var ID_CANVAS = '-canvas';
		static inline var ID_TOOLBAR = '-toolbar';
		static inline var ID_PLAY = "-play";
		static inline var ID_STOP = "-stop";		
		static inline var ID_LABEL = "-label";
		
		#if js
		function clear(clearHeight: Bool = true) {		
			var parent = js.Browser.document.getElementById(this.id + ID_PARENT);
			var svg = js.Browser.document.getElementById(this.id + ID_SVG);
			var canvas = js.Browser.document.getElementById(this.id + ID_CANVAS);
			
			if (svg != null) {
				parent.removeChild(svg);
				svg = null;
				this.svgElement = null;
			}				
			if (canvas != null) {
				parent.removeChild(canvas);
				canvas = null;
				this.canvasElement = null;
			}				
			
			if (clearHeight) parent.setAttr('style', '${TOOLBAR_HEIGHT}px');
		}	
		
		function _autorender() {
			function whenUserIdle() {
				
				var par = js.Browser.document.getElementById(this.id + ID_PARENT);
				var parentWrapper:js.html.Element = par.parentElement;
				var parentwrapperWidth = parentWrapper.clientWidth - SCORE_RIGHT_MARGIN;
				var width = Std.int(Math.max(MIN_SCORE_WIDTH, parentwrapperWidth));

				this.clear(false);
				this._render(width);		
				this.addHandlers();
			}		
			  var idleTimer = null;
			  function resetTimer(){
				 js.Browser.window.clearTimeout(idleTimer);
				 idleTimer = js.Browser.window.setTimeout(whenUserIdle, 500);
			  }				  
			js.Browser.window.addEventListener('resize', function(e) { resetTimer();  } );		
			whenUserIdle();		
		}		
		#end
		
		function _render(width:Float) {
			
			width = Math.max(width, MIN_SCORE_WIDTH);
			
			//=====================================================================
			// Toolbar
			var toolbarId = this.id + ID_TOOLBAR;
			var existingToolbar = this.parent.find('#$toolbarId').first();
			if (existingToolbar != null) {
				//trace('ALREADY $toolbarId');
				this.labelTime = Detox.find('#' + toolbarId + ID_LABEL).first();				
				
			} else {
				//trace('NOT ALREADY $toolbarId');
				this.toolbar = Detox.create('div');
				this.toolbar.setAttr('id', toolbarId);
				this.toolbar.addClass('nx-control toolbar');
				this.toolbar.setAttr('style', 'height:$TOOLBAR_HEIGHT;');
				this.btnPlay = Detox.create('button');
				this.btnPlay.setAttr('id', toolbarId + ID_PLAY);
				this.btnPlay.addClass('nx-button nx-green');
				this.btnPlay.textContent = 'Play';
				this.btnStop = Detox.create('button');
				this.btnStop.setAttr('id', toolbarId + ID_STOP);
				this.btnStop.addClass('nx-button nx-red');
				this.btnStop.textContent = 'Stop';
				
				this.labelTime = Detox.create('span');
				this.labelTime.setAttr('id', toolbarId + ID_LABEL);
				this.labelTime.textContent = '0';
				this.labelTime.setAttr('style', 'maxWidth:40px;');
				
				this.toolbar.appendChild(btnPlay);
				this.toolbar.appendChild(btnStop);
				this.toolbar.appendChild(labelTime);
				this.parent.appendChild(toolbar);				
			}
			
			//=====================================================================
			// SVG
			var svgId = this.id + ID_SVG;
			var existingSvg = this.parent.find('#$svgId').first();
			var pscore:PScore = null;
			if (existingSvg != null) {
				//trace('ALREADY $svgId');
				var existingWidth = existingSvg.attr('width');
				var existingHeight = existingSvg.attr('height');
				this.svgSize = { width: Std.parseFloat(existingWidth), height: Std.parseFloat(existingHeight) };
			} else {
				//trace('NOT ALREADY $svgId');
				var target = new TargetSvgXml(svgId, scaling);
				var render = new Renderer(target);			
				var scaledWidth = width / this.scaling.unitX;
				pscore = new PScore(this.nscore);
				this.svgSize = render.renderScore(pscore, 0, 0, scaledWidth);
				var svgXml = target.getXml().toString();			
				//var svgElement = Detox.create('svg');
				this.svgElement = Detox.parse(svgXml).first();
				var style = 'position:absolute';
				this.svgElement.setAttr('style', style);				
				this.parent.append(this.svgElement);
			}

			//=====================================================================
			// Canvas
			var canvasId = this.id + ID_CANVAS;
			var existingCanvas = this.parent.find('#$canvasId').first();
			if (existingCanvas != null) {
				//trace('ALREADY CANVAS canvasId');
			} else {
				//trace('NO CANVAS $canvasId');
				this.canvasElement = Detox.create('canvas');
				this.canvasElement.setAttr('id', canvasId);
				this.canvasElement.setAttr('width', Std.string(this.svgSize.width));
				this.canvasElement.setAttr('height', Std.string(this.svgSize.height));
				this.canvasElement.setAttr('width', this.svgSize.width + 'px');
				var style = 'zindex:8; position:absolute;'; // border:1px solid red';
				this.canvasElement.setAttr('style', style);
				this.parent.appendChild(this.canvasElement);				
			}
		
			this.parent.setAttr('style', 'width: ${this.svgSize.width}px; height: ${this.svgSize.height +TOOLBAR_HEIGHT}px');
			//parent.style.width = size.width + 'px';
			//parent.style.height = size.height + toolbar.clientHeight+ 'px';					
			
			#if js
				var canvas: js.html.CanvasElement =  cast js.Browser.document.getElementById(this.id + ID_CANVAS);
				this.context = canvas.getContext2d();
			
				if (pscore == null) pscore = new PScore(this.nscore);				
				this.drawingtools = new nx3.utils.ScoreDrawingTools(pscore, width / this.scaling.unitX, scaling, this.tempo,  this.context);		
			#end
			
			/*
			*/

			//=======================================================================================
		}
		
		function addHandlers() {
			#if js
				
				var notesrects = this.drawingtools.getNotesRects();
				
				js.Browser.document.getElementById(this.id + ID_TOOLBAR).onmousedown = function(e:js.html.MouseEvent) {
					ScriptScoresXInteraction.getInstance().onActivate(this);
					e.stopPropagation();
				};				

				js.Browser.document.getElementById(this.id + ID_TOOLBAR+ID_PLAY).onmousedown = function(e:js.html.MouseEvent) {
					ScriptScoresXInteraction.getInstance().onActivate(this);
					ScriptScoresXInteraction.getInstance().onPlay(this);					
					e.stopPropagation();
				};
				
				js.Browser.document.getElementById(this.id + ID_TOOLBAR+ID_STOP).onmousedown = function(e:js.html.MouseEvent) {
					ScriptScoresXInteraction.getInstance().onActivate(this);
					ScriptScoresXInteraction.getInstance().onStop();
					e.stopPropagation();
				};

				var canvas = js.Browser.document.getElementById(this.id + ID_CANVAS);
				//js.Lib.alert(canvas);
				
				var canvasClientX: Float = 0;
				var canvasClientY: Float = 0;
				var canvasTimer = null;
				
				function findNote() : {note:PNote, noteinfo:NotenrItem} {
					var rect = canvas.getBoundingClientRect();
					var x = canvasClientX - rect.left;
					var y = canvasClientY - rect.top;
					var point = new Point(this.scaling.targetX(x), this.scaling.targetY(y));
					//trace('canvas Idle $x/$y $point');
					for (note in notesrects.keys()) {
						var rect = notesrects.get(note);
						//trace(rect);
						if (rect.containsPoint(point)) {
							//trace('Found note!');
							var noteinfo = this.drawingtools.getNotesNotenritems().get(note.nnote);
							return { note:note, noteinfo:noteinfo };
							break;
						}
					}
					return null;
				}				
				
				function resetCanvasTimer(){
					js.Browser.window.clearTimeout(canvasTimer);
					canvasTimer = js.Browser.window.setTimeout(function() { 
						var foundnote = findNote(); 
						if (foundnote == null) {
							ScriptScoresXInteraction.getInstance().onInteract(this, MouseInteraction.HideTooltip(this.id));	
						} else {					
							ScriptScoresXInteraction.getInstance().onInteract(this, MouseInteraction.ShowTooltip(this.id, foundnote.note, foundnote.noteinfo, 'TESSSSST'));
						}
					}, 500);
				}	
				
				canvas.onmousemove = function(e:js.html.MouseEvent) {
					canvasClientX = e.clientX;
					canvasClientY = e.clientY;
					resetCanvasTimer();
				};	
				
				canvas.onmousedown = function(e:js.html.MouseEvent) {
					ScriptScoresXInteraction.getInstance().onActivate(this);
					canvasClientX = e.clientX;
					canvasClientY = e.clientY;
					var foundnote = findNote();
					if (foundnote == null) return;
					ScriptScoresXInteraction.getInstance().onInteract(this, MouseInteraction.PlayNote(this.id, foundnote.note, foundnote.noteinfo, 'piano'));							
					e.stopPropagation();
				};					
				
				canvas.onmouseup = function(e:js.html.MouseEvent) {					
					ScriptScoresXInteraction.getInstance().onInteract(this, MouseInteraction.StopNote(this.id));							
				};
			#end
		}
}