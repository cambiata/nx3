import lime.Assets;
#if !macro


class ApplicationMain {
	
	
	public static var config:lime.app.Config;
	public static var preloader:openfl.display.Preloader;
	
	private static var app:lime.app.Application;
	
	
	public static function create ():Void {
		
		app = new openfl.display.Application ();
		app.create (config);
		
		var display = new NMEPreloader ();
		
		preloader = new openfl.display.Preloader (display);
		preloader.onComplete = init;
		preloader.create (config);
		
		#if js
		var urls = [];
		var types = [];
		
		
		urls.push ("assets/openfl.svg");
		types.push (AssetType.TEXT);
		
		
		urls.push ("assets/sounds/piano/48.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/49.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/50.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/51.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/52.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/53.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/54.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/55.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/56.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/57.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/58.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/59.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/60.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/61.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/62.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/63.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/64.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/65.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/66.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/67.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/68.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/69.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/70.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/71.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/72.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/73.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/74.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/75.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/76.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/77.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/78.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/79.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/80.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/81.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/82.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/83.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/84.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/85.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/86.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/87.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/88.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/89.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/90.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/91.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/92.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/93.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/94.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/95.mp3");
		types.push (AssetType.MUSIC);
		
		
		urls.push ("assets/sounds/piano/96.mp3");
		types.push (AssetType.MUSIC);
		
		
		
		preloader.load (urls, types);
		#end
		
		var result = app.exec ();
		
		#if sys
		Sys.exit (result);
		#end
		
	}
	
	
	public static function init ():Void {
		
		var loaded = 0;
		var total = 0;
		var library_onLoad = function (_) {
			
			loaded++;
			
			if (loaded == total) {
				
				start ();
				
			}
			
		}
		
		preloader = null;
		
		
		
		if (loaded == total) {
			
			start ();
			
		}
		
	}
	
	
	public static function main () {
		
		config = {
			
			antialiasing: Std.int (0),
			background: Std.int (16777215),
			borderless: false,
			depthBuffer: false,
			fps: Std.int (60),
			fullscreen: false,
			height: Std.int (480),
			orientation: "",
			resizable: true,
			stencilBuffer: false,
			title: "ApiStuff",
			vsync: false,
			width: Std.int (800),
			
		}
		
		#if js
		#if munit
		flash.Lib.embed (null, 800, 480, "FFFFFF");
		#end
		#else
		create ();
		#end
		
	}
	
	
	public static function start ():Void {
		
		openfl.Lib.current.stage.align = openfl.display.StageAlign.TOP_LEFT;
		openfl.Lib.current.stage.scaleMode = openfl.display.StageScaleMode.NO_SCALE;
		
		var hasMain = false;
		
		for (methodName in Type.getClassFields (Main)) {
			
			if (methodName == "main") {
				
				hasMain = true;
				break;
				
			}
			
		}
		
		if (hasMain) {
			
			Reflect.callMethod (Main, Reflect.field (Main, "main"), []);
			
		} else {
			
			var instance:DocumentClass = Type.createInstance (DocumentClass, []);
			
			if (Std.is (instance, openfl.display.DisplayObject)) {
				
				openfl.Lib.current.addChild (cast instance);
				
			}
			
		}
		
		openfl.Lib.current.stage.dispatchEvent (new openfl.events.Event (openfl.events.Event.RESIZE, false, false));
		
	}
	
	
	#if neko
	@:noCompletion public static function __init__ () {
		
		var loader = new neko.vm.Loader (untyped $loader);
		loader.addPath (haxe.io.Path.directory (Sys.executablePath ()));
		loader.addPath ("./");
		loader.addPath ("@executable_path/");
		
	}
	#end
	
	
}


#if flash @:build(DocumentClass.buildFlash())
#else @:build(DocumentClass.build()) #end
@:keep class DocumentClass extends Main {}


#else


import haxe.macro.Context;
import haxe.macro.Expr;


class DocumentClass {
	
	
	macro public static function build ():Array<Field> {
		
		var classType = Context.getLocalClass ().get ();
		var searchTypes = classType;
		
		while (searchTypes.superClass != null) {
			
			if (searchTypes.pack.length == 2 && searchTypes.pack[1] == "display" && searchTypes.name == "DisplayObject") {
				
				var fields = Context.getBuildFields ();
				
				var method = macro {
					
					this.stage = flash.Lib.current.stage;
					super ();
					dispatchEvent (new openfl.events.Event (openfl.events.Event.ADDED_TO_STAGE, false, false));
					
				}
				
				fields.push ({ name: "new", access: [ APublic ], kind: FFun({ args: [], expr: method, params: [], ret: macro :Void }), pos: Context.currentPos () });
				
				return fields;
				
			}
			
			searchTypes = searchTypes.superClass.t.get ();
			
		}
		
		return null;
		
	}
	
	
	macro public static function buildFlash ():Array<Field> {
		
		var classType = Context.getLocalClass ().get ();
		var searchTypes = classType;
		
		while (searchTypes.superClass != null) {
			
			if (searchTypes.pack.length == 2 && searchTypes.pack[1] == "display" && searchTypes.name == "DisplayObject") {
				
				var fields = Context.getBuildFields ();
				var method = macro {
					return flash.Lib.current.stage;
				}
				
				fields.push ({ name: "get_stage", access: [ APrivate ], meta: [ { name: ":getter", params: [ macro stage ], pos: Context.currentPos() } ], kind: FFun({ args: [], expr: method, params: [], ret: macro :flash.display.Stage }), pos: Context.currentPos() });
				return fields;
				
			}
			
			searchTypes = searchTypes.superClass.t.get ();
			
		}
		
		return null;
		
	}
	
	
}


#end
