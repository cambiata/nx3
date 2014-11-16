package;

import dom4.DOMParser;
import dom4.utils.BasicContentSink;
import dom4.utils.Serializer;
import haxe.io.Path;
import haxe.ui.richtext.Code;
import haxe.ui.toolkit.containers.Box;
import haxe.ui.toolkit.containers.HBox;
import haxe.ui.toolkit.containers.ListView;
import haxe.ui.toolkit.containers.ScrollView;
import haxe.ui.toolkit.containers.SpriteContainer;
import haxe.ui.toolkit.containers.VBox;
import haxe.ui.toolkit.controls.Button;
import haxe.ui.toolkit.core.Root;
import haxe.ui.toolkit.core.Toolkit;
import haxe.ui.toolkit.data.ArrayDataSource;
import haxe.ui.toolkit.data.IDataSource;
import haxe.ui.toolkit.themes.GradientTheme;
import haxe.ui.toolkit.events.UIEvent;
import msignal.Signal.Signal1;
import nx3.NScore;
import nx3.PScore;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.TargetSprite;
import nx3.test.TestItems;
import nx3.xml.ScoreXML;
import openfl.display.Sprite;
import openfl.Lib;
import sys.FileSystem;
import sys.io.File;

/**
 * ...
 * @author Jonas Nyström
 */

class Main extends Sprite 
{
	var xmlstr:String;
	
	
	public function new() 
	{
		super();

		Toolkit.theme = new GradientTheme();
		Toolkit.init();		
		Toolkit.openFullscreen(function(root:Root) {

			
			var vbox = new VBox();
			vbox.percentWidth = vbox.percentHeight = 100;
			
			root.addChild(vbox);
		
			var hbox = new HBox();
			hbox.percentWidth = hbox.percentHeight = 100;
			vbox.addChild(hbox);
							
			var vbox2 = new VBox();
			vbox2.percentHeight = vbox2.percentWidth = 100;
			hbox.addChild(vbox2);
			
			var scroll = new ScrollView();
			scroll.percentHeight = 60; 
			scroll.percentWidth = 100;
			vbox2.addChild(scroll);
			scroll.style.padding = 10;

			var score = new ScoreContainer();
			score.width = 1000;
			score.height = 1000;			
			score.style.backgroundColor = 0xffffff;
			scroll.addChild(score);			
			
			var code = new Code();
			code.syntax = 'xml';
			code.percentHeight = 40;
			code.percentWidth = 100;
			vbox2.addChild(code);
			
			var list = new ScoreList();
			list.width = 200;
			list.percentHeight = 100;
			hbox.addChild(list);
			list.dataSource = new ArrayDataSource();
			list.update();
			
			list.loadcode.add(function(path:String) {
				trace('Load code: $path');
				if (!FileSystem.exists(path)) throw 'Can\'t find file $path';
				var xmlstr = File.getContent(path);

				if (this.xmlstr == xmlstr) return;
				this.xmlstr = xmlstr;
				
				var sink = new BasicContentSink();
				var parser = new DOMParser(sink);
				var doc = parser.parseFromString(xmlstr, "text/xml");
				
				var ser:Serializer = new Serializer();
				ser.enableIndentation();
				ser.enableWrapping();
				var codestr = ser.serializeToString(doc);
				
				trace(codestr);
				code.text = codestr;
			});
			
			list.loadscore.add(function(path:String) {
				trace('Load scire: $path');
				if (!FileSystem.exists(path)) throw 'Can\'t find file $path';
				var xmlstr = File.getContent(path);
				score.load(xmlstr);
			});
			
		});
	}
}

class ScoreList extends ListView {
	var path:String;	
	public var loadcode:Signal1<String>;
	public var loadscore:Signal1<String>;
	
	public function new(?path:String) {
		super();		
		this.path = Path.addTrailingSlash((path != null) ? path : './xml');
		this.dataSource = new ArrayDataSource();				
		this.loadcode = new Signal1<String>();
		this.loadscore = new Signal1<String>();
		this.addEventListener(UIEvent.DOUBLE_CLICK, function(e) {
			trace('double');
			this.loadcode.dispatch(this.path + this.selectedItems[0].data.text);	
			this.loadscore.dispatch(this.path + this.selectedItems[0].data.text);	
		}, false, 0, true);
		this.addEventListener(UIEvent.CLICK, function(e) {
			trace(this.path + this.selectedItems[0].data.text);			
			var file = this.path + this.selectedItems[0].data.text;
			if (! FileSystem.exists(file)) return;
			this.loadcode.dispatch(this.path + this.selectedItems[0].data.text);	
		}, false, 0, true);				
	}
	
	public function update() {
		if (! FileSystem.exists(this.path)) throw 'Score list path ${this.path} does not exist.';
		var files = FileSystem.readDirectory(this.path);
		this.dataSource.removeAll();
		for (file in files) {
			this.dataSource.add( { text: file } );
		}
	}
}

class ScoreContainer extends SpriteContainer {
	
	var nscore:NScore;
	var target:TargetSprite;
	var renderer:Renderer;	
	var scorewidth:Float = 0;
	
	public function new() {
		super();
		
		this.nscore = TestItems.scoreBachSinfonia4();		
		this.target = new TargetSprite(this.sprite, Scaling.NORMAL);
		this.renderer = new Renderer(this.target, 0, 0);			
	}
	
	public function load(xmlstr:String)
	{
		this.nscore = ScoreXML.fromXmlStr(xmlstr);		
		this.update(1000);
	}
	
	public function update(?w:Float=0)
	{		
		this.target.clear();		
		while (this.target.getTargetSprite().numChildren > 0) this.target.getTargetSprite().removeChildAt(0);		
		var renderWidth =  Math.max(60, this.renderer.xToUnitX(w));
		this.renderer.renderScore(new PScore(this.nscore), 0, 100, renderWidth);			
	}
	
	
	
}

