package;

import haxe.Timer;
import js.Browser;
import js.html.Element;
import js.html.ScriptElement;
import js.Lib;
import mithril.M;
import mithril.M.View;
import nx3.NBar;
import nx3.NHead;
import nx3.NNote;
import nx3.NPart;
import nx3.NScore;
import nx3.NVoice;
import nx3.PScore;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.scaling.TScaling;
import nx3.render.TargetSvgXml;
import nx3.xml.ScoreXML;
import thx.core.UUID;

/**
 * ...
 * @author 
 */

class Main 
{
	
	static function main() 
	{
		var nodes = Browser.document.querySelectorAll('.nx-scoredata');
		for (node in nodes)
		{
			var scoreEl:Element = cast node;
			M.module(scoreEl, new MScoreCanvasPlay(scoreEl));	
		}
	}
}

class MScoreModel implements Model {
	var xml:String;
	var scoreWidth:Float;
	var scoreHeight:Float;
	var scaling:TScaling;
	public var svgWidth:Float;
	public var svgHeight:Float;
	public var id:String;
	public var nscore:NScore;
	public var svg:String;
	
	public function new(script:ScriptElement, scoreWidth=800.0, scaling:TScaling=null) {
		this.xml = script.innerHTML;
		this.nscore = ScoreXML.fromXmlStr(this.xml);
		this.id = UUID.create();
		this.scoreWidth = scoreWidth;
		this.scaling = scaling;
		
		var timer = new Timer(2000);
		timer.run = function() {
			this.renderScore(scoreWidth, scaling);
		}
	}
	
	/*
	public function renderScore(scoreWidth=800.0, scaling:TScaling=null) {
		if (scaling == null) scaling = Scaling.NORMAL;
		
		var target = new TargetSvgXml(this.id, scaling);
		var renderer = new Renderer(target, 0, 0);
		renderer.renderScore(new PScore(this.nscore), 0, 0, scoreWidth);
		var svgXml = target.getXml();
		svgXml.set('style', 'position:absolute');
		this.svg = svgXml.toString();
		this.svgWidth = target.totalWidth;
		this.svgHeight = target.totalHeight;
	}*/
	
	public function renderScore(scoreWidth = 800.0, scaling:TScaling = null) {
		var len = Math.ceil(Math.random() * 4);
		var nscore = new NScore([new NBar([new NPart([new NVoice([ for (i in 0 ... len) new NNote([new NHead()])])])])]);
		var target = new TargetSvgXml(this.id, scaling);
		var renderer = new Renderer(target, 0, 0);
		renderer.renderScore(new PScore(nscore), 0, 0, scoreWidth);
		var svgXml = target.getXml();
		svgXml.set('style', 'position:absolute');
		this.svg = svgXml.toString();
		this.svgWidth = target.totalWidth;
		this.svgHeight = target.totalHeight;
		M.redraw();
	}
}

class MScore implements View {
	var el:Element;
	var model:MScoreModel;
	public function new(el:Element) {
		this.el = el;
		var script:ScriptElement = cast el.querySelector('script');
		this.model = new MScoreModel(script);
	}
	public function view() {
		m('.nx-score', {style: {position:'absolute', height:this.model.svgHeight+'px', width:this.model.svgWidth+'px'}}, 
			M.trust(model.svg)
		);
	}
}

class MScoreCanvas extends MScore {
	override public function view() {
		m('div', { style: {height:this.model.svgHeight + 'px', width:this.model.svgWidth + 'px' }}, [ 
			super.view(),
			m('canvas.nx-canvas', {style: {position:'absolute', height:this.model.svgHeight + 'px', width:this.model.svgWidth + 'px' }}), 
		]);
	}
}


class MScoreCanvasPlayModel implements Model {
	
	public var height:Int;
	public function new() {
		this.height = 24;
	}
}

class MScoreCanvasPlay extends MScoreCanvas {
	
	var playModel:MScoreCanvasPlayModel;
	
	public function new(el:Element) {
		super(el);
		this.playModel = new MScoreCanvasPlayModel();
	}
	
	override public function view() {
		m('.nx-play-score', { style: { height:this.model.svgHeight + this.playModel.height + 'px', width:this.model.svgWidth + 'px' }}, [ 
			m('.nx-play-toolbar', { style: { height:this.playModel.height+'px', width:this.model.svgWidth + 'px' }}, [ 
				m('button', { onmousedown: function(e) { Lib.alert('Hello'); }} , 'play'),
			]),
			super.view(),
		]);
	}
	
}

		
	