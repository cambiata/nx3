package haxeui.flashdevelop.preview;

import format.svg.Grad;
import haxe.ui.toolkit.core.interfaces.InvalidationFlag;
import haxe.ui.toolkit.core.Root;
import haxe.ui.toolkit.core.Toolkit;
import haxe.ui.toolkit.resources.ResourceManager;
import haxe.ui.toolkit.style.StyleManager;
import haxe.ui.toolkit.themes.DefaultTheme;
import haxe.ui.toolkit.themes.GradientMobileTheme;
import haxe.ui.toolkit.themes.GradientTheme;
import haxe.ui.toolkit.themes.Theme;
import nx3.NScore;
import nx3.PScore;
import nx3.qs.QSParser;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.scaling.TScaling;
import nx3.render.TargetSprite;
import nx3.xml.ScoreXML;
import openfl.display.Sprite;
import openfl.events.Event;
import openfl.external.ExternalInterface;
import openfl.Lib;
import openfl.text.TextField;

using StringTools;

class Main extends Sprite {
	private static var _main:MainController;
	private static var _layoutString:String;
	private static var _originalTrace = haxe.Log.trace;
	static var xmlString:String = '';
	static var sprite:Sprite = null;
	static var scaling:TScaling = Scaling.MID;
	
	public static function onResize(e:Event=null) {
		//trace('resize');
		//trace(Lib.current.stage.stageWidth);
		//trace(xmlString);
		redraw(Lib.current.stage.stageWidth - 20, xmlString);
		tfError.x = Lib.current.stage.stageWidth - 200;
		tfError.y = Lib.current.stage.stageHeight - 30;
	}
	
	public static function redraw(width:Float, layoutString:String) {
		if (layoutString == '') return;
		
		layoutString = layoutString.trim();
				
		try {
			if (sprite != null) Lib.current.removeChild(sprite);
			sprite = new Sprite();
			sprite.x = 10;
			sprite.y = 10;
			Lib.current.addChild(sprite);
			//layoutString = ' ' + layoutString;
			var xml = Xml.parse(layoutString);
			var nodename = xml.firstChild().nodeName.toLowerCase();
			var nscore:NScore = switch nodename {
				case 'qscore': {
					var str = layoutString.replace('<qscore>', '').replace('</qscore>', '');
					new QSParser(str).parse();
				}
				case 'score' : ScoreXML.fromXmlStr(layoutString);
				case _: throw 'Error!'; null;
			}
			
			var target = new TargetSprite(sprite, scaling);
			var renderer = new Renderer(target);
			renderer.renderScore(new PScore(nscore), 0, 0, width / scaling.unitX);
			
		} catch (e:Dynamic) { 
			trace(Std.string(e)); 
			//tfError.text = Std.string(e);
		}

		
	}
	
	
	static var tfError:TextField;
	
	public static function main() {
		//trace('hello');
		tfError = new TextField();
		
		
		Lib.current.stage.addEventListener(Event.RESIZE, onResize); 
			
			
		
		
		
	
		try {
			ExternalInterface.addCallback("updateLayout", function(layoutString:String) {
				
				xmlString = layoutString;
				
				onResize();
				//_layoutString = layoutString;
				//_main.updateLayout(layoutString);
				//trace(layoutString.length);			
				
				
			});

			ExternalInterface.addCallback("setTheme", function(theme:String) {
				//trace("Setting theme to: " + theme);
				if (theme == 'Default') scaling = Scaling.NORMAL;
				if (theme == 'Gradient') scaling = Scaling.MID;
				onResize();
			});
			
			ExternalInterface.addCallback("redirectTrace", function(redirect:String) {
				trace("redirect = " + redirect);
			});
			
			ResourceManager.instance.resourceHook = new FDResourceHook();
			
			ExternalInterface.call("callbacksReady");
		} catch (e:Dynamic) {
			trace("ERROR: " + e);
		}
		
	}
	
	
	public static function mainx() {
		haxe.Log.trace = fdTrace;
		
		Toolkit.theme = new GradientTheme();
		Toolkit.init();
		Toolkit.addStyleSheet("css/main.css");
		Toolkit.open(function(root:Root) {
			_main = new MainController();
			try {
				ExternalInterface.addCallback("updateLayout", function(layoutString:String) {
					_layoutString = layoutString;
					_main.updateLayout(layoutString);
				});

				ExternalInterface.addCallback("setTheme", function(theme:String) {
					trace("Setting theme to: " + theme);
					StyleManager.instance.clear();
					var t:Theme = null;
					
					switch (theme) { // TODO: make this dynamic once theme system has been improved (Issue #121)
						case "Default":
							t = new DefaultTheme();
						case "Gradient":
							t = new GradientTheme();
						case "Gradient Mobile":
							t = new GradientMobileTheme();
					}
					
					if (t != null) {
						t.apply();
						root.removeAllChildren();
						_main = new MainController();
						root.addChild(_main.view);
						_main.updateLayout(_layoutString);
					}
				});
				
				ExternalInterface.addCallback("redirectTrace", function(redirect:String) {
					trace("redirect = " + redirect);
				});
				
				ResourceManager.instance.resourceHook = new FDResourceHook();
				
				ExternalInterface.call("callbacksReady");
			} catch (e:Dynamic) {
				trace("ERROR: " + e);
			}
			
			root.addChild(_main.view);
		});
	}
	
	public static function fdTrace(v:Dynamic, ?inf:haxe.PosInfos) {
		try {
			var s:String = inf.fileName + ":" + inf.lineNumber + ": " + v;
			ExternalInterface.call("trace", s);
		} catch (e:Dynamic) {
			
		}
	}
}
