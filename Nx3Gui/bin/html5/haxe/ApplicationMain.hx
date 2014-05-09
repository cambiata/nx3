package;


import openfl.Assets;


#if (!macro && !display)


import flash.display.Loader;
import flash.events.Event;
import flash.events.IOErrorEvent;
import flash.media.Sound;
import flash.net.URLLoader;
import flash.net.URLRequest;
import haxe.io.Path;
import js.html.HtmlElement;
import js.html.Image;
import flash.Lib;

@:access(flash.Lib) class ApplicationMain {
	
	
	public static var images (default, null) = new Map<String, Image> ();
	public static var urlLoaders = new Map <String, URLLoader> ();
	
	private static var assetsLoaded = 0;
	private static var preloader:NMEPreloader;
	private static var total = 0;
	
	//public static var loaders:Map <String, Loader>;
	//public static var urlLoaders:Map <String, URLLoader>;
	
	
	static function main () {
		
		#if munit
		var element = null;
		#else
		var element:HtmlElement = cast js.Browser.document.getElementById ("openfl-embed");
		#end
		
		flash.Lib.create (800, 480, element, 16777215);
		
		preloader = new NMEPreloader ();
		Lib.current.addChild (preloader);
		preloader.onInit ();
		
		var sounds = [];
		var id;
		
		
		var image = new Image ();
		id = "styles/gradient/arrow_down.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/gradient/arrow_down.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/gradient/arrow_down_dark.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/gradient/arrow_down_dark.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/gradient/arrow_down_disabled.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/gradient/arrow_down_disabled.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/gradient/arrow_left.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/gradient/arrow_left.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/gradient/arrow_left_disabled.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/gradient/arrow_left_disabled.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/gradient/arrow_right.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/gradient/arrow_right.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/gradient/arrow_right2.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/gradient/arrow_right2.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/gradient/arrow_right_dark.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/gradient/arrow_right_dark.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/gradient/arrow_right_disabled.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/gradient/arrow_right_disabled.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/gradient/arrow_up.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/gradient/arrow_up.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/gradient/arrow_up_disabled.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/gradient/arrow_up_disabled.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/gradient/circle_dark.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/gradient/circle_dark.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/gradient/cross_dark.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/gradient/cross_dark.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/gradient/cross_dark_disabled.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/gradient/cross_dark_disabled.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/gradient/gripper_horizontal.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/gradient/gripper_horizontal.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/gradient/gripper_horizontal_disabled.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/gradient/gripper_horizontal_disabled.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/gradient/gripper_vertical.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/gradient/gripper_vertical.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/gradient/gripper_vertical_disabled.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/gradient/gripper_vertical_disabled.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/button.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/button.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/checkbox.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/checkbox.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/container.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/container.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/glyphs/down_arrow.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/glyphs/down_arrow.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/glyphs/hscroll_thumb_gripper_down.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/glyphs/hscroll_thumb_gripper_down.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/glyphs/hscroll_thumb_gripper_over.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/glyphs/hscroll_thumb_gripper_over.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/glyphs/hscroll_thumb_gripper_up.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/glyphs/hscroll_thumb_gripper_up.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/glyphs/left_arrow.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/glyphs/left_arrow.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/glyphs/right_arrow.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/glyphs/right_arrow.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/glyphs/up_arrow.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/glyphs/up_arrow.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/glyphs/vscroll_thumb_gripper_down.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/glyphs/vscroll_thumb_gripper_down.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/glyphs/vscroll_thumb_gripper_over.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/glyphs/vscroll_thumb_gripper_over.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/glyphs/vscroll_thumb_gripper_up.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/glyphs/vscroll_thumb_gripper_up.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/hprogress.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/hprogress.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/hscroll.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/hscroll.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/listview.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/listview.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/optionbox.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/optionbox.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/popup.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/popup.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/tab.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/tab.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/textinput.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/textinput.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/vprogress.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/vprogress.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "styles/windows/vscroll.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("styles/windows/vscroll.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "img/rtfview/edit-alignment-center.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("img/rtfview/edit-alignment-center.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "img/rtfview/edit-alignment-justify.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("img/rtfview/edit-alignment-justify.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "img/rtfview/edit-alignment-left.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("img/rtfview/edit-alignment-left.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "img/rtfview/edit-alignment-right.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("img/rtfview/edit-alignment-right.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "img/rtfview/edit-bold.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("img/rtfview/edit-bold.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "img/rtfview/edit-italic.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("img/rtfview/edit-italic.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "img/rtfview/edit-list.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("img/rtfview/edit-list.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "img/rtfview/edit-underline.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("img/rtfview/edit-underline.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "img/slinky_small.jpg";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("img/slinky_small.jpg", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "img/slinky_tiny.jpg";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("img/slinky_tiny.jpg", loader);
		total ++;
		
		
		
		if (total == 0) {
			
			start ();
			
		} else {
			
			for (path in urlLoaders.keys ()) {
				
				var urlLoader = urlLoaders.get (path);
				urlLoader.addEventListener ("complete", loader_onComplete);
				urlLoader.load (new URLRequest (path));
				
			}
			
			for (soundName in sounds) {
				
				var sound = new Sound ();
				sound.addEventListener (Event.COMPLETE, sound_onComplete);
				sound.addEventListener (IOErrorEvent.IO_ERROR, sound_onIOError);
				sound.load (new URLRequest (soundName + ".ogg"));
				
			}
			
			
			
		}
		
	}
	
	
	private static function start ():Void {
		
		preloader.addEventListener (Event.COMPLETE, preloader_onComplete);
		preloader.onLoaded ();
		
	}
	
	
	private static function image_onLoad (_):Void {
		
		assetsLoaded++;
		
		preloader.onUpdate (assetsLoaded, total);
		
		if (assetsLoaded == total) {
			
			start ();
			
		}
		
	}
	
	
	private static function loader_onComplete (event:Event):Void {
		
		assetsLoaded++;
		
		preloader.onUpdate (assetsLoaded, total);
		
		if (assetsLoaded == total) {
			
			start ();
			
		}
		
	}
	
	
	private static function preloader_onComplete (event:Event):Void {
		
		preloader.removeEventListener (Event.COMPLETE, preloader_onComplete);
		Lib.current.removeChild (preloader);
		preloader = null;
		
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
			
			var instance:DocumentClass = Type.createInstance(DocumentClass, []);
			
			if (Std.is (instance, flash.display.DisplayObject)) {
				
				flash.Lib.current.addChild (cast instance);
				
			} else {
				
				trace ("Error: No entry point found");
				trace ("If you are using DCE with a static main, you may need to @:keep the function");
				
			}
			
		}
		
	}
	
	
	private static function sound_onComplete (event:Event):Void {
		
		assetsLoaded++;
		
		preloader.onUpdate (assetsLoaded, total);
		
		if (assetsLoaded == total) {
			
			start ();
			
		}
		
	}
	
	
	private static function sound_onIOError (event:IOErrorEvent):Void {
		
		// if it is actually valid, it will load later when requested
		
		assetsLoaded++;
		
		preloader.onUpdate (assetsLoaded, total);
		
		if (assetsLoaded == total) {
			
			start ();
			
		}
		
	}
	
	
}


@:build(DocumentClass.build())
@:keep class DocumentClass extends Main {}


#elseif macro


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
					dispatchEvent (new Event (Event.ADDED_TO_STAGE, false, false));
					
				}
				
				fields.push ({ name: "new", access: [ APublic ], kind: FFun({ args: [], expr: method, params: [], ret: macro :Void }), pos: Context.currentPos () });
				return fields;
				
			}
			
			searchTypes = searchTypes.superClass.t.get ();
			
		}
		
		return null;
		
	}
	
	
}


#else


import Main;

class ApplicationMain {
	
	
	public static function main () {
		
		
		
	}
	
	
}


#end