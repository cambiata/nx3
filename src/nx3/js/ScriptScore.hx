package nx3.js;
import js.Browser;
import js.html.CanvasElement;
import js.html.CanvasRenderingContext2D;
import js.html.Element;
import js.html.ScriptElement;
import js.html.svg.SVGElement;
import nx3.NScore;
import nx3.PScore;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.scaling.ScalingTools;
import nx3.render.TargetSvgXml;
import nx3.xml.ScoreXML;
import nx3.render.scaling.TScaling;
import nx3.utils.ScoreDrawingTools;

using StringTools;
/**
 * NxScriptElement
 * @author 
 */
class ScriptScore 
{
	var toolbar:js.html.DivElement;
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

	public function new(scriptElement:ScriptElement) 
	{
		this.parent = scriptElement.parentElement;
		this.parent.className = 'nx-parent';
		var xmlStr = scriptElement.innerHTML;
		this.nscore = ScoreXML.fromXmlStr(xmlStr);	
		this.id = scriptElement.id;
		
		var tmpo:Int = Std.parseInt(scriptElement.getAttribute('data-tempo'));
		this.tempo = (tmpo == null) ? 60 : tmpo;
		var snds:String = scriptElement.getAttribute('data-sounds');
		this.sounds = (snds != null )  ? snds.split(',').map(function(s) return s.trim()) : [];

		 var scl:String = scriptElement.getAttribute('data-scaling');
		 this.scaling = ScalingTools.fromString(scl);
		trace(this.scaling);
		
		this.toolbar = Browser.document.createDivElement();
		this.toolbar.className = 'nx-control toolbar';
		this.btnPlay = Browser.document.createButtonElement();
		this.btnPlay.className = 'nx-control play';
		this.btnPlay.textContent = 'Play';
		this.btnStop = Browser.document.createButtonElement();
		this.btnStop.className = 'nx-control stop';
		this.btnStop.textContent = 'Stop';
		
		this.labelTime = Browser.document.createSpanElement();
		this.labelTime.textContent = '0';
		this.labelTime.style.maxWidth = '40px';
		
		this.toolbar.appendChild(btnPlay);
		this.toolbar.appendChild(btnStop);
		this.toolbar.appendChild(labelTime);
		this.parent.appendChild(toolbar);
	}
	
	public function render(width:Int=700, scl:TScaling = null) {
		if (scl != null) this.scaling = scl;
		var target = new TargetSvgXml(this.id, scaling);
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
	}
	
	
}