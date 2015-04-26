package haxeui.flashdevelop.preview;

import haxe.ui.toolkit.controls.popups.Popup;
import haxe.ui.toolkit.controls.Spacer;
import haxe.ui.toolkit.core.Toolkit;
import haxe.ui.toolkit.core.XMLController;
import haxe.ui.toolkit.events.UIEvent;

@:build(haxe.ui.toolkit.core.Macros.buildController("assets/ui/main.xml"))
class MainController extends XMLController {
	public function new() {
	}
	
	public function updateLayout(layoutString:String) {
		try {
			var xml:Xml = Xml.parse(layoutString);
			var r = Toolkit.processXml(xml);
			main.removeAllChildren();
			main.addChild(r);
			
			var spacer:Spacer = new Spacer();
			spacer.height = 25;
			main.addChild(spacer);
		} catch (ex:Dynamic) {
			trace("Error: " + ex);
		}
	}
}