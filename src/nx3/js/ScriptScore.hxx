package nx3.js;
import js.Browser;
import js.html.CanvasElement;
import js.html.CanvasRenderingContext2D;
import js.html.Element;
import js.html.MouseEvent;
import js.html.ScriptElement;
import js.html.svg.SVGElement;
import js.Lib;
import nx3.audio.NotenrItem;
import nx3.geom.Point;
import nx3.NScore;
import nx3.PNote;
import nx3.PScore;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.scaling.ScalingTools;
import nx3.render.TargetSvgXml;
import nx3.xml.ScoreXML;
import nx3.render.scaling.TScaling;
import nx3.utils.ScoreDrawingTools;

using StringTools;
using nx3.render.scaling.ScalingTools;
/**
 * NxScriptElement
 * @author 
 */
class ScriptScore 
{
	var toolbar:js.html.DivElement;
	
	public var autoWidth(default, null): Bool;
	public var fixedWidth(default, null): Int;
	
	public var scaling(default, null):TScaling;
	public var drawingtools(default, null):ScoreDrawingTools;
	public var labelTime(default, null):js.html.SpanElement;
	public var sounds(default, null):Array<String>;
	public var tempo(default, null):Int;
	public var svg(default, null):SVGElement;
	public var canvas(default, null):CanvasElement;
	public var context(default, null):CanvasRenderingContext2D;
	public var btnPlay(default, null):js.html.ButtonElement;
	public var btnStop(default, null):js.html.ButtonElement;
	public var id(default, null):String;
	public var nscore(default, null):NScore;
	public var parent(default, null):Element;
	public var parentWrapper(default, null): Element;

	public function new(scriptElement:ScriptElement) 
	{
		var xmlStr = scriptElement.innerHTML;
		this.nscore = ScoreXML.fromXmlStr(xmlStr);	
		this.id = scriptElement.id;

		this.parent = scriptElement.parentElement;
		this.parentWrapper = this.parent.parentElement;
		
		this.parent.className = 'nx-parent';
		this.parent.id = 'nx-parent-' + this.id;
		
		var tmpo:Int = Std.parseInt(scriptElement.getAttribute('data-tempo'));
		this.tempo = (tmpo == null) ? 60 : tmpo;
		var snds:String = scriptElement.getAttribute('data-sounds');
		this.sounds = (snds != null )  ? snds.split(',').map(function(s) return s.trim()) : [];

		 var scl:String = scriptElement.getAttribute('data-scaling');
		 this.scaling = ScalingTools.fromString(scl);		
		
		var fxw = scriptElement.getAttribute('data-width');
		if (fxw != null) {
			if (fxw.toLowerCase() == 'auto') {
				this.autoWidth = true;
				this.fixedWidth = -1;
			} else {
				var w = Std.parseInt(fxw);
				if (w != null) 
					w = Std.int(Math.max(MIN_SCORE_WIDTH, w));
				else  {
					Lib.alert('Score data-width error: $fxw');
					w = 500;
				}
				this.fixedWidth = w;	
				this.autoWidth = false;
			}
		} else {
			this.fixedWidth = SCORE_DEFAULT_WIDTH;
			this.autoWidth = false;
		}
		//trace('autoWidth ${this.autoWidth} fixedWidth ${this.fixedWidth}');
		
		this.toolbar = Browser.document.createDivElement();
		this.toolbar.className = 'nx-control toolbar';
		this.btnPlay = Browser.document.createButtonElement();
		this.btnPlay.className = 'nx-button nx-green';
		this.btnPlay.textContent = 'Play';
		this.btnStop = Browser.document.createButtonElement();
		this.btnStop.className = 'nx-button nx-red';
		this.btnStop.textContent = 'Stop';
		
		this.labelTime = Browser.document.createSpanElement();
		this.labelTime.textContent = '0';
		this.labelTime.style.maxWidth = '40px';
		
		this.toolbar.appendChild(btnPlay);
		this.toolbar.appendChild(btnStop);
		this.toolbar.appendChild(labelTime);
		this.parent.appendChild(toolbar);
	}
	
	public function render() {
		if (this.autoWidth) 
			this._autorender(scaling)
		else 
			this._render(this.fixedWidth, scaling);
	}
	
	static var MIN_SCORE_WIDTH:Int = 400;
	
	function _autorender(scaling:TScaling = null) {
		function whenUserIdle() {
			var parentwrapperWidth = this.parentWrapper.clientWidth - SCORE_RIGHT_MARGIN;
			var width = Std.int(Math.max(MIN_SCORE_WIDTH, parentwrapperWidth));
			this.clear(false);
			this._render(width, scaling);			
		}		
		
		var idleTimer = null;		
		function resetTimer(){
			   Browser.window.clearTimeout(idleTimer);
			    idleTimer = Browser.window.setTimeout(whenUserIdle, 500);
		  }				  
		Browser.window.addEventListener('resize', function(e) { resetTimer();  } );		
		whenUserIdle();		
	}
	
	static var SCORE_RIGHT_MARGIN:Int = 40;
	static var SCORE_DEFAULT_WIDTH:Int = 800;
	
	function _render(width:Int = 700, scl:TScaling = null) {				
		
		if (scl != null) this.scaling = scl;
		
		var svgId = this.id + '-svg';
		
		if (js.Browser.document.getElementById(svgId) == null) {
			
			
			var target = new TargetSvgXml(svgId, scaling);
			var render = new Renderer(target);			
			var scaledWidth = width / this.scaling.unitX;
			var pscore:PScore = new PScore(this.nscore);
			var size = render.renderScore(pscore, 0, 0, scaledWidth);
			var svgXml = target.getXml().toString();
	
			parent.style.width = size.width + 'px';
			parent.style.height = size.height + toolbar.clientHeight+ 'px';				
			//parent.style.border = "1px solid green";		
			//parent.style.margin = "4px";
			
			var wrapper = Browser.document.createDivElement();
			wrapper.innerHTML = svgXml;
			this.svg = cast wrapper.firstChild;
			svg.style.position = 'absolute';
			this.parent.appendChild(svg);
			
			this.canvas = Browser.document.createCanvasElement();
			canvas.id = this.id + '-canvas';
			canvas.width = Std.int(size.width);
			canvas.height = Std.int(size.height);
			canvas.style.width = size.width + 'px';
			canvas.style.height =  size.height + 'px';
			canvas.style.zIndex = '8';
			canvas.style.position = "absolute";
			//canvas.style.border = "1px solid red";
			parent.appendChild(canvas);				
			
			this.context = this.canvas.getContext2d();
			
			this.drawingtools = new ScoreDrawingTools(pscore, width / this.scaling.unitX, scaling, this.tempo,  this.context);		
		} else {
			Lib.alert(svgId + ' exists');
		}
		
		//this.drawingtools.drawNotesRects(0xff0000);

		
		//--------------------------------------------------------------------------------------------------------------------------------
		
		var notesrects = this.drawingtools.getNotesRects();
		
		var canvasClientX: Float = 0;
		var canvasClientY: Float = 0;
		
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

		var canvasTimer = null;
		function resetCanvasTimer(){
			Browser.window.clearTimeout(canvasTimer);
			canvasTimer = Browser.window.setTimeout(function() { 
				var foundnote = findNote(); 
				if (foundnote == null) {
					if (this.onMouseMove != null) this.onMouseMove(MouseInteraction.HideTooltip(this.id));	
				} else {					
					if (this.onMouseMove != null) this.onMouseMove(ShowTooltip(this.id, foundnote.note, foundnote.noteinfo, 'TESSSSST'));
				}
				//trace(foundnote);
			}, 500);
		}	
		
		canvas.addEventListener('mousemove', function(e:MouseEvent) {
			canvasClientX = e.clientX;
			canvasClientY = e.clientY;
			resetCanvasTimer();
		});
		
		canvas.addEventListener('mousedown', function(e:MouseEvent) {
			//trace('mousedown');
			canvasClientX = e.clientX;
			canvasClientY = e.clientY;
			var foundnote = findNote();
			if (foundnote == null) return;
			if (this.onMouseDown != null) this.onMouseDown(PlayNote(this.id, foundnote.note, foundnote.noteinfo, 'piano'));			
			//trace(foundnote);
		});
		
		canvas.addEventListener('mouseup', function(e:MouseEvent) {
			//trace('mouseup');
			if (this.onMouseDown != null) this.onMouseDown(StopNote(this.id));
		});
		
	}
	
	public function clear(clearHeight: Bool=true) {
		
		if (this.svg != null) {
			this.parent.removeChild(this.svg);
			this.svg = null;
		}
		
		if (this.canvas != null) {
			this.parent.removeChild(this.canvas);
			this.canvas = null;
		}
		
		if (clearHeight) parent.style.height = this.toolbar.clientHeight+ 'px';
	}
	
	public function setLabel(text:String) {
		this.labelTime.textContent = text;
	}
	
	public var onMouseDown: MouseInteraction -> Void;
	public var onMouseMove: MouseInteraction -> Void;
}


