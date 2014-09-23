package ;

import cx.ArrayTools;
import cx.ConfigTools;
import cx.StrTools;
import nx3.ENoteVal;
import openfl.text.TextField;
import openfl.text.TextFormat;
import thx.core.Tuple;
import flash.display.Sprite;
import flash.events.Event;
import flash.Lib;
import flash.net.URLRequest;
import haxe.ui.toolkit.containers.Accordion;
import haxe.ui.toolkit.containers.TabView;
import haxe.ui.toolkit.containers.VBox;
import haxe.ui.toolkit.controls.Button;
import haxe.ui.toolkit.controls.Text;
import haxe.ui.toolkit.controls.TextInput;
import haxe.ui.toolkit.core.ClassManager;
import haxe.ui.toolkit.core.Component;
import haxe.ui.toolkit.core.DisplayObject;
import haxe.ui.toolkit.core.Root;
import haxe.ui.toolkit.core.Toolkit;
import haxe.ui.toolkit.core.XMLController;
import haxe.ui.toolkit.events.UIEvent;
import haxe.ui.toolkit.themes.GradientTheme;
import nx3.audio.NoteSoundCalculator;
import nx3.audio.PlayerFactory;
import nx3.audio.WavConcatenator;
import nx3.flash.ScoreSprite;
import nx3.NBar;
import nx3.NScore;
import nx3.render.scaling.Scaling;
import nx3.render.scaling.TScaling;
import nx3.utils.ScoreModifier;
import nx3.xml.ScoreXML;
import haxe.ui.toolkit.core.interfaces.IDisplayObject;
import openfl.Assets;
import openfl.display.Loader;
import openfl.events.IOErrorEvent;
import openfl.events.MouseEvent;
import openfl.net.URLLoader;
import openfl.net.URLLoaderDataFormat;
/**
 * ...
 * @author Jonas Nyström
 */

class Main extends Sprite 
{
	var inited:Bool;
	

	/* ENTRY POINT */
	
	function resize(e) 
	{
		if (!inited) init();
		// else (resize or orientation change)
	}
	
	function init() 
	{
		if (inited) return;
		inited = true;
		
		Toolkit.theme = new GradientTheme();
		Toolkit.init();
		ScorematerialControllerComponent.init();
		ScorerandomControllerComponent.init();
		ScorepaletteControllerComponent.init();
		//ScorexmlControllerComponent.init();

		var parameters = { };
		
		ConfigTools.loadFlashVars(parameters);//var parameters = ConfigTools.getFlashVars();
		if (! Reflect.hasField(parameters, 'score')) Reflect.setField(parameters,'score', 'score.xml');		
		//trace(parameters);
		var score:String = Reflect.field(parameters, 'score');		
		
		
		loadXml(score);
		//initScore();
	}

	static public function initScore(scoreXml:String)
	{
		var nscore = ScoreXML.fromXmlStr(scoreXml);		
		Main.rtempo = (nscore.configuration.rtempo != null) ? nscore.configuration.rtempo : 80;
		Main.rlength = (nscore.configuration.rlength != null) ? nscore.configuration.rlength : 3;				
		Main.rcountin = (nscore.configuration.rcountin != null) ? nscore.configuration.rcountin : 3;				
		trace(nscore.configuration);
		Main.sccoremat = nscore;
		randomize();
	}
	
	static public function loadXml(filename:String='score.xml')
	{
		var loader :URLLoader= new URLLoader();
		loader.dataFormat = URLLoaderDataFormat.TEXT;
		
		loader.addEventListener(Event.COMPLETE, onLoadXml);
		loader.addEventListener(IOErrorEvent.IO_ERROR, function(e) {
			trace('error loading ' + filename);
		});
		loader.load(new URLRequest(filename));
	}
	
	static private function onLoadXml(e:Event):Void 
	{
		var loader:URLLoader = cast e.target;
		//trace(loader.data);
		var scoreXmlStr:String = cast loader.data;
		initScore(scoreXmlStr);	
			
		Toolkit.openFullscreen(function(root:Root) 
		{
			root.addChild(Toolkit.processXmlResource('assets/controllers.xml'));
		});		
		
		ScorerandomController.update();			
			
	}
	
	
	static public function randomize()
	{
		var mod = new ScoreModifier(Main.sccoremat);
		var randomscore = mod.getRandomScore(Main.rlength, null, null, true);	
		Main.sccorernd = randomscore;		
		Main.randomstr = mod.randomstring;
	}
	
	static public var sccoremat:NScore;
	static public var sccorernd:NScore;
	static public var randomstr:String;
	
	static public var rtempo:Int;
	static public var rlength: Int;
	static public var rcountin: Int;
	
	
	/* SETUP */

	public function new() 
	{
		super();	
		addEventListener(Event.ADDED_TO_STAGE, added);
	}

	function added(e) 
	{
		removeEventListener(Event.ADDED_TO_STAGE, added);
		stage.addEventListener(Event.RESIZE, resize);
		#if ios
		haxe.Timer.delay(init, 100); // iOS 6
		#else
		init();
		#end
	}
	
	public static function main() 
	{
		// static entry point
		Lib.current.stage.align = flash.display.StageAlign.TOP_LEFT;
		Lib.current.stage.scaleMode = flash.display.StageScaleMode.NO_SCALE;
		Lib.current.addChild(new Main());
	}
	
	static public function getScoreXml() return '
<score>
	<config test="12345" />
	<bar time="2/4">
		<part clef="ClefG"
		      key="Sharp2">
			<voice>
				<note val="2">
					<headx level="5" />
				</note>
			</voice>
		</part>
	</bar>
	
	<bar>
		<part >
			<voice>
				<note val="2">
					<headx level="4" />
				</note>
			</voice>
		</part>
	</bar>
	
	<bar>
		<part >
			<voice>
				<note val="2">
					<headx level="3" />
				</note>
			</voice>
		</part>
	</bar>	
	
	<bar>
		<part >
			<voice>
				<note val="2">
					<headx level="6" />
				</note>
			</voice>
		</part>
	</bar>

	<bar>
		<part >
			<voice>
				<note val="2">
					<headx level="7" />
				</note>
			</voice>
		</part>
	</bar>	
</score>
';		
	
}


 @:build(haxe.ui.toolkit.core.Macros.buildController ("assets/scorematerial.xml"))
class ScorematerialController extends XMLController
{
	public var scoresprite:nx3.flash.ScoreSprite;
	public function new() 
	{		
		var comp:Component = cast this.getComponent('score' );
		this.scoresprite = new ScoreSprite(Main.sccoremat, Scaling.NORMAL);		
		comp.sprite.addChild(this.scoresprite);		
	}
}



class ScorematerialControllerComponent extends VBox
{
	public var controller (default, null): Null<ScorematerialController> = null;
	public static function init (): Void
	{		
		ClassManager.instance.registerComponentClass( ScorematerialControllerComponent, 'scorematerialcontroller');
	}
	
	override public function  initialize ():Void
	{
		super.initialize();
		this.controller = new ScorematerialController();
		var view = this.controller.view;
		addChild(view);
	}	
	
}

 @:build(haxe.ui.toolkit.core.Macros.buildController ("assets/scorerandom.xml"))
class ScorerandomController extends XMLController
{
	public var scoresprite:nx3.flash.ScoreSprite;
	public function new() 
	{		
		var comp:Component = cast this.getComponent('score' );
		compsprite = comp.sprite;		
	}
	
	static var compsprite:Sprite;
	
	static public function update() {
		var scoresprite = new ScoreSprite(Main.sccorernd, Scaling.NORMAL);	
		for (idx in 0...compsprite.numChildren) compsprite.removeChildAt(idx);
		
		compsprite.addChild(scoresprite);				
	}
	
}



class ScorerandomControllerComponent extends VBox
{
	public var controller (default, null): Null<ScorerandomController> = null;
	public static function init (): Void
	{		
		ClassManager.instance.registerComponentClass( ScorerandomControllerComponent, 'scorerandomcontroller');
	}
	
	override public function  initialize ():Void
	{
		super.initialize();
		this.controller = new ScorerandomController();
		var view = this.controller.view;
		addChild(view);
	}	
}


 @:build(haxe.ui.toolkit.core.Macros.buildController ("assets/scorepalette.xml"))
class ScorepaletteController extends XMLController
{
	var background:Sprite;
	var emptycells:Sprite;
	var ssnew:nx3.flash.ScoreSprite;
	public var scoresprite:nx3.flash.ScoreSprite;
	public function new() 
	{		
		var comp:Component = cast this.getComponent('score' );
		var btnPlayFacit:Button = cast this.getComponent('btnPlayFacit' );
		var btnPlayResult:Button = cast this.getComponent('btnPlayResult' );
		var btnRandomize:Button = cast this.getComponent('btnRandomize' );
		var btnRemoveLast:Button = cast this.getComponent('btnRemoveLast' );
		var btnClear:Button = cast this.getComponent('btnClear' );
		var btnCompare:Button = cast this.getComponent('btnCompare' );
		var txtResult:Text = cast this.getComponent('txtResult' );
		var txtInfo:Text = cast this.getComponent('txtInfo' );
		
		txtInfo.text = 'Övningens längd: ' + Std.string(Main.rlength) + 'st byggstenar, övningens tempo: ' +  Std.string(Main.rtempo) + ' bpm';
		
		
		var resultstr:String = '';		
		
		function presentResult()
		{
			txtResult.text = getCheckValue(Main.randomstr, resultstr) + '% ' ; // (' + Main.randomstr + ' / ' + resultstr + ')';
		}		
		
		this.background = new Sprite();
		background.graphics.beginFill(0xFFFFFF);
		background.graphics.drawRect(0, 0, 1000, 220);
		background.graphics.drawRect(0, 300, 1000, 220);
		
		
		comp.sprite.addChild(background);
		this.emptycells = new Sprite();
		this.emptycells.y = 300;
		comp.sprite.addChild(emptycells);

		var nsc:NoteSoundCalculator = new NoteSoundCalculator();
		var conc:WavConcatenator = new WavConcatenator();
		var player:PlayerFactory = new PlayerFactory();		
		
		
		ssnew = new ScoreSprite(null, Scaling.NORMAL);
		ssnew.y = 300;
		comp.sprite.addChild(ssnew);			
		
		
		var nscore:NScore = Main.sccoremat;
		var mod = new ScoreModifier(nscore);
		var modadd = new ScoreModifier(null);		
		
		var barx = 0.0;
		for (barnr in 0...nscore.nbars.length)
		{
			var barscore = mod.getBarNrAsScore(barnr);
			var bss = new ScoreSprite(barscore, Scaling.NORMAL);
			bss.x = barx;
			comp.sprite.addChild(bss);		
			bss.barClickHandler = function (e:MouseEvent, baridx:Int, nbar:NBar, nscore:NScore) {		
				
				if (e.ctrlKey) {
					trace('play');
					var snotes = nsc.getPlayableNotesFromTopVoice(nscore);
					
					var countinnotes = new Array<Tuple2<Int, Int>>();
					for (i in 1...Main.rcountin+1) countinnotes.push(new Tuple2(i, 3024) );
					snotes = Lambda.array(Lambda.concat(countinnotes, snotes));					
					
					var wav = conc.getWav(snotes, Main.rtempo);
					var play = player.getPlayFunction(wav);
					play();					
					return;
				}
				
				resultstr += Std.string(barnr);
				trace(baridx);
				var nscore2 = modadd.addBarToScore(nbar);
				ssnew.setScore(nscore2);
				presentResult();
				drawEmptyCells();
				
			}		
			barx += bss.sysWidth + 20;
		}	
		drawEmptyCells();
		
		
		ssnew.barClickHandler = function (e:MouseEvent, barNr:Int, nbar:NBar, nscore:NScore) {
			
			var snotes = nsc.getPlayableNotesFromTopVoice(nscore);
			
			var countinnotes = new Array<Tuple2<Int, Int>>();
			for (i in 1...Main.rcountin+1) countinnotes.push(new Tuple2(i, 3024) );
			snotes = Lambda.array(Lambda.concat(countinnotes, snotes));			
			
			var wav = conc.getWav(snotes, Main.rtempo);
			var play = player.getPlayFunction(wav);
			play();
		}		
		
		btnPlayResult.addEventListener(UIEvent.CLICK, function(e) {
			
			var score = ssnew.getScore();
			if (score == null) return;
			
			var snotes = nsc.getPlayableNotesFromTopVoice(score);
			
			var countinnotes = new Array<Tuple2<Int, Int>>();
			for (i in 1...Main.rcountin+1) countinnotes.push(new Tuple2(i, 3024) );
			snotes = Lambda.array(Lambda.concat(countinnotes, snotes));
			
			var wav = conc.getWav(snotes, Main.rtempo);
			var play = player.getPlayFunction(wav);
			play();			
		});
		
		btnPlayFacit.addEventListener(UIEvent.CLICK, function(e) {
			var snotes = nsc.getPlayableNotesFromTopVoice(Main.sccorernd);
			
			var countinnotes = new Array<Tuple2<Int, Int>>();
			for (i in 1...Main.rcountin+1) countinnotes.push(new Tuple2(i, 3024) );
			snotes = Lambda.array(Lambda.concat(countinnotes, snotes));
			
			var wav = conc.getWav(snotes, Main.rtempo);
			var play = player.getPlayFunction(wav);
			play();			
		});		
		
		btnRandomize.addEventListener(UIEvent.CLICK, function(e) {
			Main.randomize();
			ScorerandomController.update();
			ssnew.setScore(null);
			modadd.clear();
			drawEmptyCells();
		});
		
		btnRemoveLast.addEventListener(UIEvent.CLICK, function(e) {
			var nscore2 = modadd.removeLastBarInScore();
			ssnew.setScore(nscore2);		
			resultstr = resultstr.substr(0, resultstr.length - 1);
			presentResult();
			drawEmptyCells();
		});
				
		btnClear.addEventListener(UIEvent.CLICK, function(e) {
			modadd.clear();
			ssnew.setScore(null);			
			resultstr = '';
			presentResult();
			drawEmptyCells();
		});
		
		btnCompare.addEventListener(UIEvent.CLICK, function(e) {			
			var value = getCheckValue(Main.randomstr, resultstr);
			presentResult();
			
		});
	}
	
	private function getCheckValue(a:String, b:String):Int
	{
		return Math.floor(StrTools.similarity(a, b) * 100);
	}
	
	private function drawEmptyCells()
	{
		var x = 0.0;
		var al = 0;
		
		for (i in 0...emptycells.numChildren ) emptycells.removeChildAt(0);
		
		this.emptycells.graphics.clear();
		if (ssnew.getScore() != null)
		{
			al = this.ssnew.getScore().length;
			x = this.ssnew.sysWidth;
		}
		else
		{
			trace('no score');
		}
		
		
		var from = al;
		var to = Std.int(Math.max(Main.rlength, al));
		var cellw = 120;
		var y = 20;
		var h = 180;
		var x1 = x+4;
		emptycells.graphics.lineStyle(2, 0xccccff);
		if (from < to)
			for (i in from...to)
			{
				trace('paint ' + i);
				emptycells.graphics.drawRect(x1, y, cellw, h);
				var tf:TextField = new TextField();
				tf.defaultTextFormat = new TextFormat('Arial', 50, 0xccccff);
				tf.text = '?';
				tf.x = x1+8;
				tf.y = y;
				emptycells.addChild(tf);
				x1 += cellw;
			}
			
		
		
	}
	
}



class ScorepaletteControllerComponent extends VBox
{
	public var controller (default, null): Null<ScorepaletteController> = null;
	public static function init (): Void
	{		
		ClassManager.instance.registerComponentClass( ScorepaletteControllerComponent, 'scorepalettecontroller');
	}
	
	override public function  initialize ():Void
	{
		super.initialize();
		this.controller = new ScorepaletteController();
		var view = this.controller.view;
		addChild(view);
	}	
	
}


/*
@:build(haxe.ui.toolkit.core.Macros.buildController ("assets/scorexml.xml"))
class ScorexmlController extends XMLController
{
	
	public function new() 
	{		
		var txtXml:TextInput = cast this.getComponent('txtXml' );
		txtXml.wrapLines = true;
	}
}



class ScorexmlControllerComponent extends VBox
{
	public var controller (default, null): Null<ScorexmlController> = null;
	public static function init (): Void
	{		
		ClassManager.instance.registerComponentClass( ScorexmlControllerComponent, 'scorexmlcontroller');
	}
	
	override public function  initialize ():Void
	{
		super.initialize();
		this.controller = new ScorexmlController();
		var view = this.controller.view;
		addChild(view);
	}	
	
}
*/
