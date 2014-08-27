package;


import haxe.Timer;
import haxe.Unserializer;
import openfl.display.Bitmap;
import openfl.display.BitmapData;
import openfl.display.MovieClip;
import openfl.events.Event;
import openfl.text.Font;
import openfl.media.Sound;
import openfl.net.URLRequest;
import openfl.utils.ByteArray;
import openfl.Assets;

#if (flash || js)
import openfl.display.Loader;
import openfl.events.Event;
import openfl.net.URLLoader;
#end

#if sys
import sys.FileSystem;
#end

#if ios
import openfl.utils.SystemPath;
#end


@:access(openfl.media.Sound)
class DefaultAssetLibrary extends AssetLibrary {
	
	
	public var className (default, null) = new Map <String, Dynamic> ();
	public var path (default, null) = new Map <String, String> ();
	public var type (default, null) = new Map <String, AssetType> ();
	
	private var lastModified:Float;
	private var timer:Timer;
	
	
	public function new () {
		
		super ();
		
		#if flash
		
		path.set ("styles/default/circle.png", "styles/default/circle.png");
		type.set ("styles/default/circle.png", AssetType.IMAGE);
		path.set ("styles/default/collapse.png", "styles/default/collapse.png");
		type.set ("styles/default/collapse.png", AssetType.IMAGE);
		path.set ("styles/default/cross.png", "styles/default/cross.png");
		type.set ("styles/default/cross.png", AssetType.IMAGE);
		path.set ("styles/default/expand.png", "styles/default/expand.png");
		type.set ("styles/default/expand.png", AssetType.IMAGE);
		path.set ("styles/default/up_down.png", "styles/default/up_down.png");
		type.set ("styles/default/up_down.png", AssetType.IMAGE);
		path.set ("styles/gradient/arrow_down.png", "styles/gradient/arrow_down.png");
		type.set ("styles/gradient/arrow_down.png", AssetType.IMAGE);
		path.set ("styles/gradient/arrow_down_dark.png", "styles/gradient/arrow_down_dark.png");
		type.set ("styles/gradient/arrow_down_dark.png", AssetType.IMAGE);
		path.set ("styles/gradient/arrow_down_disabled.png", "styles/gradient/arrow_down_disabled.png");
		type.set ("styles/gradient/arrow_down_disabled.png", AssetType.IMAGE);
		path.set ("styles/gradient/arrow_left.png", "styles/gradient/arrow_left.png");
		type.set ("styles/gradient/arrow_left.png", AssetType.IMAGE);
		path.set ("styles/gradient/arrow_left_disabled.png", "styles/gradient/arrow_left_disabled.png");
		type.set ("styles/gradient/arrow_left_disabled.png", AssetType.IMAGE);
		path.set ("styles/gradient/arrow_right.png", "styles/gradient/arrow_right.png");
		type.set ("styles/gradient/arrow_right.png", AssetType.IMAGE);
		path.set ("styles/gradient/arrow_right2.png", "styles/gradient/arrow_right2.png");
		type.set ("styles/gradient/arrow_right2.png", AssetType.IMAGE);
		path.set ("styles/gradient/arrow_right_dark.png", "styles/gradient/arrow_right_dark.png");
		type.set ("styles/gradient/arrow_right_dark.png", AssetType.IMAGE);
		path.set ("styles/gradient/arrow_right_disabled.png", "styles/gradient/arrow_right_disabled.png");
		type.set ("styles/gradient/arrow_right_disabled.png", AssetType.IMAGE);
		path.set ("styles/gradient/arrow_up.png", "styles/gradient/arrow_up.png");
		type.set ("styles/gradient/arrow_up.png", AssetType.IMAGE);
		path.set ("styles/gradient/arrow_up_disabled.png", "styles/gradient/arrow_up_disabled.png");
		type.set ("styles/gradient/arrow_up_disabled.png", AssetType.IMAGE);
		path.set ("styles/gradient/circle_dark.png", "styles/gradient/circle_dark.png");
		type.set ("styles/gradient/circle_dark.png", AssetType.IMAGE);
		path.set ("styles/gradient/cross_dark.png", "styles/gradient/cross_dark.png");
		type.set ("styles/gradient/cross_dark.png", AssetType.IMAGE);
		path.set ("styles/gradient/cross_dark_disabled.png", "styles/gradient/cross_dark_disabled.png");
		type.set ("styles/gradient/cross_dark_disabled.png", AssetType.IMAGE);
		path.set ("styles/gradient/gradient.css", "styles/gradient/gradient.css");
		type.set ("styles/gradient/gradient.css", AssetType.TEXT);
		path.set ("styles/gradient/gradient.min.css", "styles/gradient/gradient.min.css");
		type.set ("styles/gradient/gradient.min.css", AssetType.TEXT);
		path.set ("styles/gradient/gradient_mobile.css", "styles/gradient/gradient_mobile.css");
		type.set ("styles/gradient/gradient_mobile.css", AssetType.TEXT);
		path.set ("styles/gradient/gradient_mobile.min.css", "styles/gradient/gradient_mobile.min.css");
		type.set ("styles/gradient/gradient_mobile.min.css", AssetType.TEXT);
		path.set ("styles/gradient/gripper_horizontal.png", "styles/gradient/gripper_horizontal.png");
		type.set ("styles/gradient/gripper_horizontal.png", AssetType.IMAGE);
		path.set ("styles/gradient/gripper_horizontal_disabled.png", "styles/gradient/gripper_horizontal_disabled.png");
		type.set ("styles/gradient/gripper_horizontal_disabled.png", AssetType.IMAGE);
		path.set ("styles/gradient/gripper_vertical.png", "styles/gradient/gripper_vertical.png");
		type.set ("styles/gradient/gripper_vertical.png", AssetType.IMAGE);
		path.set ("styles/gradient/gripper_vertical_disabled.png", "styles/gradient/gripper_vertical_disabled.png");
		type.set ("styles/gradient/gripper_vertical_disabled.png", AssetType.IMAGE);
		path.set ("styles/windows/accordion.css", "styles/windows/accordion.css");
		type.set ("styles/windows/accordion.css", AssetType.TEXT);
		path.set ("styles/windows/accordion.min.css", "styles/windows/accordion.min.css");
		type.set ("styles/windows/accordion.min.css", AssetType.TEXT);
		path.set ("styles/windows/button.png", "styles/windows/button.png");
		type.set ("styles/windows/button.png", AssetType.IMAGE);
		path.set ("styles/windows/buttons.css", "styles/windows/buttons.css");
		type.set ("styles/windows/buttons.css", AssetType.TEXT);
		path.set ("styles/windows/buttons.min.css", "styles/windows/buttons.min.css");
		type.set ("styles/windows/buttons.min.css", AssetType.TEXT);
		path.set ("styles/windows/calendar.css", "styles/windows/calendar.css");
		type.set ("styles/windows/calendar.css", AssetType.TEXT);
		path.set ("styles/windows/checkbox.png", "styles/windows/checkbox.png");
		type.set ("styles/windows/checkbox.png", AssetType.IMAGE);
		path.set ("styles/windows/container.png", "styles/windows/container.png");
		type.set ("styles/windows/container.png", AssetType.IMAGE);
		path.set ("styles/windows/glyphs/down_arrow.png", "styles/windows/glyphs/down_arrow.png");
		type.set ("styles/windows/glyphs/down_arrow.png", AssetType.IMAGE);
		path.set ("styles/windows/glyphs/hscroll_thumb_gripper_down.png", "styles/windows/glyphs/hscroll_thumb_gripper_down.png");
		type.set ("styles/windows/glyphs/hscroll_thumb_gripper_down.png", AssetType.IMAGE);
		path.set ("styles/windows/glyphs/hscroll_thumb_gripper_over.png", "styles/windows/glyphs/hscroll_thumb_gripper_over.png");
		type.set ("styles/windows/glyphs/hscroll_thumb_gripper_over.png", AssetType.IMAGE);
		path.set ("styles/windows/glyphs/hscroll_thumb_gripper_up.png", "styles/windows/glyphs/hscroll_thumb_gripper_up.png");
		type.set ("styles/windows/glyphs/hscroll_thumb_gripper_up.png", AssetType.IMAGE);
		path.set ("styles/windows/glyphs/left_arrow.png", "styles/windows/glyphs/left_arrow.png");
		type.set ("styles/windows/glyphs/left_arrow.png", AssetType.IMAGE);
		path.set ("styles/windows/glyphs/right_arrow.png", "styles/windows/glyphs/right_arrow.png");
		type.set ("styles/windows/glyphs/right_arrow.png", AssetType.IMAGE);
		path.set ("styles/windows/glyphs/up_arrow.png", "styles/windows/glyphs/up_arrow.png");
		type.set ("styles/windows/glyphs/up_arrow.png", AssetType.IMAGE);
		path.set ("styles/windows/glyphs/vscroll_thumb_gripper_down.png", "styles/windows/glyphs/vscroll_thumb_gripper_down.png");
		type.set ("styles/windows/glyphs/vscroll_thumb_gripper_down.png", AssetType.IMAGE);
		path.set ("styles/windows/glyphs/vscroll_thumb_gripper_over.png", "styles/windows/glyphs/vscroll_thumb_gripper_over.png");
		type.set ("styles/windows/glyphs/vscroll_thumb_gripper_over.png", AssetType.IMAGE);
		path.set ("styles/windows/glyphs/vscroll_thumb_gripper_up.png", "styles/windows/glyphs/vscroll_thumb_gripper_up.png");
		type.set ("styles/windows/glyphs/vscroll_thumb_gripper_up.png", AssetType.IMAGE);
		path.set ("styles/windows/hprogress.png", "styles/windows/hprogress.png");
		type.set ("styles/windows/hprogress.png", AssetType.IMAGE);
		path.set ("styles/windows/hscroll.png", "styles/windows/hscroll.png");
		type.set ("styles/windows/hscroll.png", AssetType.IMAGE);
		path.set ("styles/windows/listview.css", "styles/windows/listview.css");
		type.set ("styles/windows/listview.css", AssetType.TEXT);
		path.set ("styles/windows/listview.min.css", "styles/windows/listview.min.css");
		type.set ("styles/windows/listview.min.css", AssetType.TEXT);
		path.set ("styles/windows/listview.png", "styles/windows/listview.png");
		type.set ("styles/windows/listview.png", AssetType.IMAGE);
		path.set ("styles/windows/menus.css", "styles/windows/menus.css");
		type.set ("styles/windows/menus.css", AssetType.TEXT);
		path.set ("styles/windows/optionbox.png", "styles/windows/optionbox.png");
		type.set ("styles/windows/optionbox.png", AssetType.IMAGE);
		path.set ("styles/windows/popup.png", "styles/windows/popup.png");
		type.set ("styles/windows/popup.png", AssetType.IMAGE);
		path.set ("styles/windows/popups.css", "styles/windows/popups.css");
		type.set ("styles/windows/popups.css", AssetType.TEXT);
		path.set ("styles/windows/rtf.css", "styles/windows/rtf.css");
		type.set ("styles/windows/rtf.css", AssetType.TEXT);
		path.set ("styles/windows/scrolls.css", "styles/windows/scrolls.css");
		type.set ("styles/windows/scrolls.css", AssetType.TEXT);
		path.set ("styles/windows/scrolls.min.css", "styles/windows/scrolls.min.css");
		type.set ("styles/windows/scrolls.min.css", AssetType.TEXT);
		path.set ("styles/windows/sliders.css", "styles/windows/sliders.css");
		type.set ("styles/windows/sliders.css", AssetType.TEXT);
		path.set ("styles/windows/tab.png", "styles/windows/tab.png");
		type.set ("styles/windows/tab.png", AssetType.IMAGE);
		path.set ("styles/windows/tabs.css", "styles/windows/tabs.css");
		type.set ("styles/windows/tabs.css", AssetType.TEXT);
		path.set ("styles/windows/textinput.png", "styles/windows/textinput.png");
		type.set ("styles/windows/textinput.png", AssetType.IMAGE);
		path.set ("styles/windows/vprogress.png", "styles/windows/vprogress.png");
		type.set ("styles/windows/vprogress.png", AssetType.IMAGE);
		path.set ("styles/windows/vscroll.png", "styles/windows/vscroll.png");
		type.set ("styles/windows/vscroll.png", AssetType.IMAGE);
		path.set ("styles/windows/windows.css", "styles/windows/windows.css");
		type.set ("styles/windows/windows.css", AssetType.TEXT);
		path.set ("img/slinky_small.jpg", "img/slinky_small.jpg");
		type.set ("img/slinky_small.jpg", AssetType.IMAGE);
		path.set ("img/slinky_tiny.jpg", "img/slinky_tiny.jpg");
		type.set ("img/slinky_tiny.jpg", AssetType.IMAGE);
		path.set ("fonts/Oxygen-Bold.ttf", "fonts/Oxygen-Bold.ttf");
		type.set ("fonts/Oxygen-Bold.ttf", AssetType.FONT);
		path.set ("fonts/Oxygen.ttf", "fonts/Oxygen.ttf");
		type.set ("fonts/Oxygen.ttf", AssetType.FONT);
		path.set ("wav/48.data", "wav/48.data");
		type.set ("wav/48.data", AssetType.BINARY);
		path.set ("wav/49.data", "wav/49.data");
		type.set ("wav/49.data", AssetType.BINARY);
		path.set ("wav/50.data", "wav/50.data");
		type.set ("wav/50.data", AssetType.BINARY);
		path.set ("wav/51.data", "wav/51.data");
		type.set ("wav/51.data", AssetType.BINARY);
		path.set ("wav/52.data", "wav/52.data");
		type.set ("wav/52.data", AssetType.BINARY);
		path.set ("wav/53.data", "wav/53.data");
		type.set ("wav/53.data", AssetType.BINARY);
		path.set ("wav/54.data", "wav/54.data");
		type.set ("wav/54.data", AssetType.BINARY);
		path.set ("wav/55.data", "wav/55.data");
		type.set ("wav/55.data", AssetType.BINARY);
		path.set ("wav/56.data", "wav/56.data");
		type.set ("wav/56.data", AssetType.BINARY);
		path.set ("wav/57.data", "wav/57.data");
		type.set ("wav/57.data", AssetType.BINARY);
		path.set ("wav/58.data", "wav/58.data");
		type.set ("wav/58.data", AssetType.BINARY);
		path.set ("wav/59.data", "wav/59.data");
		type.set ("wav/59.data", AssetType.BINARY);
		path.set ("wav/60.data", "wav/60.data");
		type.set ("wav/60.data", AssetType.BINARY);
		path.set ("wav/61.data", "wav/61.data");
		type.set ("wav/61.data", AssetType.BINARY);
		path.set ("wav/62.data", "wav/62.data");
		type.set ("wav/62.data", AssetType.BINARY);
		path.set ("wav/63.data", "wav/63.data");
		type.set ("wav/63.data", AssetType.BINARY);
		path.set ("wav/64.data", "wav/64.data");
		type.set ("wav/64.data", AssetType.BINARY);
		path.set ("wav/65.data", "wav/65.data");
		type.set ("wav/65.data", AssetType.BINARY);
		path.set ("wav/66.data", "wav/66.data");
		type.set ("wav/66.data", AssetType.BINARY);
		path.set ("wav/67.data", "wav/67.data");
		type.set ("wav/67.data", AssetType.BINARY);
		path.set ("wav/68.data", "wav/68.data");
		type.set ("wav/68.data", AssetType.BINARY);
		path.set ("wav/69.data", "wav/69.data");
		type.set ("wav/69.data", AssetType.BINARY);
		path.set ("wav/70.data", "wav/70.data");
		type.set ("wav/70.data", AssetType.BINARY);
		path.set ("wav/71.data", "wav/71.data");
		type.set ("wav/71.data", AssetType.BINARY);
		path.set ("wav/72.data", "wav/72.data");
		type.set ("wav/72.data", AssetType.BINARY);
		path.set ("wav/73.data", "wav/73.data");
		type.set ("wav/73.data", AssetType.BINARY);
		path.set ("wav/74.data", "wav/74.data");
		type.set ("wav/74.data", AssetType.BINARY);
		path.set ("wav/75.data", "wav/75.data");
		type.set ("wav/75.data", AssetType.BINARY);
		path.set ("wav/76.data", "wav/76.data");
		type.set ("wav/76.data", AssetType.BINARY);
		path.set ("wav/77.data", "wav/77.data");
		type.set ("wav/77.data", AssetType.BINARY);
		path.set ("wav/78.data", "wav/78.data");
		type.set ("wav/78.data", AssetType.BINARY);
		path.set ("wav/79.data", "wav/79.data");
		type.set ("wav/79.data", AssetType.BINARY);
		path.set ("wav/80.data", "wav/80.data");
		type.set ("wav/80.data", AssetType.BINARY);
		path.set ("wav/81.data", "wav/81.data");
		type.set ("wav/81.data", AssetType.BINARY);
		path.set ("wav/82.data", "wav/82.data");
		type.set ("wav/82.data", AssetType.BINARY);
		path.set ("wav/83.data", "wav/83.data");
		type.set ("wav/83.data", AssetType.BINARY);
		path.set ("wav/84.data", "wav/84.data");
		type.set ("wav/84.data", AssetType.BINARY);
		path.set ("wav/85.data", "wav/85.data");
		type.set ("wav/85.data", AssetType.BINARY);
		path.set ("wav/86.data", "wav/86.data");
		type.set ("wav/86.data", AssetType.BINARY);
		path.set ("wav/87.data", "wav/87.data");
		type.set ("wav/87.data", AssetType.BINARY);
		path.set ("wav/88.data", "wav/88.data");
		type.set ("wav/88.data", AssetType.BINARY);
		path.set ("wav/89.data", "wav/89.data");
		type.set ("wav/89.data", AssetType.BINARY);
		path.set ("wav/90.data", "wav/90.data");
		type.set ("wav/90.data", AssetType.BINARY);
		path.set ("wav/91.data", "wav/91.data");
		type.set ("wav/91.data", AssetType.BINARY);
		path.set ("wav/92.data", "wav/92.data");
		type.set ("wav/92.data", AssetType.BINARY);
		path.set ("wav/93.data", "wav/93.data");
		type.set ("wav/93.data", AssetType.BINARY);
		path.set ("wav/94.data", "wav/94.data");
		type.set ("wav/94.data", AssetType.BINARY);
		path.set ("wav/95.data", "wav/95.data");
		type.set ("wav/95.data", AssetType.BINARY);
		path.set ("wav/96.data", "wav/96.data");
		type.set ("wav/96.data", AssetType.BINARY);
		path.set ("assets/controllers.xml", "assets/controllers.xml");
		type.set ("assets/controllers.xml", AssetType.TEXT);
		path.set ("assets/openfl.svg", "assets/openfl.svg");
		type.set ("assets/openfl.svg", AssetType.TEXT);
		path.set ("assets/scorematerial.xml", "assets/scorematerial.xml");
		type.set ("assets/scorematerial.xml", AssetType.TEXT);
		path.set ("assets/scorepalette.xml", "assets/scorepalette.xml");
		type.set ("assets/scorepalette.xml", AssetType.TEXT);
		path.set ("assets/scorerandom.xml", "assets/scorerandom.xml");
		type.set ("assets/scorerandom.xml", AssetType.TEXT);
		path.set ("assets/scoresprite.xml", "assets/scoresprite.xml");
		type.set ("assets/scoresprite.xml", AssetType.TEXT);
		path.set ("assets/scorexml.xml", "assets/scorexml.xml");
		type.set ("assets/scorexml.xml", AssetType.TEXT);
		path.set ("assets/wav/48.data", "assets/wav/48.data");
		type.set ("assets/wav/48.data", AssetType.BINARY);
		path.set ("assets/wav/49.data", "assets/wav/49.data");
		type.set ("assets/wav/49.data", AssetType.BINARY);
		path.set ("assets/wav/50.data", "assets/wav/50.data");
		type.set ("assets/wav/50.data", AssetType.BINARY);
		path.set ("assets/wav/51.data", "assets/wav/51.data");
		type.set ("assets/wav/51.data", AssetType.BINARY);
		path.set ("assets/wav/52.data", "assets/wav/52.data");
		type.set ("assets/wav/52.data", AssetType.BINARY);
		path.set ("assets/wav/53.data", "assets/wav/53.data");
		type.set ("assets/wav/53.data", AssetType.BINARY);
		path.set ("assets/wav/54.data", "assets/wav/54.data");
		type.set ("assets/wav/54.data", AssetType.BINARY);
		path.set ("assets/wav/55.data", "assets/wav/55.data");
		type.set ("assets/wav/55.data", AssetType.BINARY);
		path.set ("assets/wav/56.data", "assets/wav/56.data");
		type.set ("assets/wav/56.data", AssetType.BINARY);
		path.set ("assets/wav/57.data", "assets/wav/57.data");
		type.set ("assets/wav/57.data", AssetType.BINARY);
		path.set ("assets/wav/58.data", "assets/wav/58.data");
		type.set ("assets/wav/58.data", AssetType.BINARY);
		path.set ("assets/wav/59.data", "assets/wav/59.data");
		type.set ("assets/wav/59.data", AssetType.BINARY);
		path.set ("assets/wav/60.data", "assets/wav/60.data");
		type.set ("assets/wav/60.data", AssetType.BINARY);
		path.set ("assets/wav/61.data", "assets/wav/61.data");
		type.set ("assets/wav/61.data", AssetType.BINARY);
		path.set ("assets/wav/62.data", "assets/wav/62.data");
		type.set ("assets/wav/62.data", AssetType.BINARY);
		path.set ("assets/wav/63.data", "assets/wav/63.data");
		type.set ("assets/wav/63.data", AssetType.BINARY);
		path.set ("assets/wav/64.data", "assets/wav/64.data");
		type.set ("assets/wav/64.data", AssetType.BINARY);
		path.set ("assets/wav/65.data", "assets/wav/65.data");
		type.set ("assets/wav/65.data", AssetType.BINARY);
		path.set ("assets/wav/66.data", "assets/wav/66.data");
		type.set ("assets/wav/66.data", AssetType.BINARY);
		path.set ("assets/wav/67.data", "assets/wav/67.data");
		type.set ("assets/wav/67.data", AssetType.BINARY);
		path.set ("assets/wav/68.data", "assets/wav/68.data");
		type.set ("assets/wav/68.data", AssetType.BINARY);
		path.set ("assets/wav/69.data", "assets/wav/69.data");
		type.set ("assets/wav/69.data", AssetType.BINARY);
		path.set ("assets/wav/70.data", "assets/wav/70.data");
		type.set ("assets/wav/70.data", AssetType.BINARY);
		path.set ("assets/wav/71.data", "assets/wav/71.data");
		type.set ("assets/wav/71.data", AssetType.BINARY);
		path.set ("assets/wav/72.data", "assets/wav/72.data");
		type.set ("assets/wav/72.data", AssetType.BINARY);
		path.set ("assets/wav/73.data", "assets/wav/73.data");
		type.set ("assets/wav/73.data", AssetType.BINARY);
		path.set ("assets/wav/74.data", "assets/wav/74.data");
		type.set ("assets/wav/74.data", AssetType.BINARY);
		path.set ("assets/wav/75.data", "assets/wav/75.data");
		type.set ("assets/wav/75.data", AssetType.BINARY);
		path.set ("assets/wav/76.data", "assets/wav/76.data");
		type.set ("assets/wav/76.data", AssetType.BINARY);
		path.set ("assets/wav/77.data", "assets/wav/77.data");
		type.set ("assets/wav/77.data", AssetType.BINARY);
		path.set ("assets/wav/78.data", "assets/wav/78.data");
		type.set ("assets/wav/78.data", AssetType.BINARY);
		path.set ("assets/wav/79.data", "assets/wav/79.data");
		type.set ("assets/wav/79.data", AssetType.BINARY);
		path.set ("assets/wav/80.data", "assets/wav/80.data");
		type.set ("assets/wav/80.data", AssetType.BINARY);
		path.set ("assets/wav/81.data", "assets/wav/81.data");
		type.set ("assets/wav/81.data", AssetType.BINARY);
		path.set ("assets/wav/82.data", "assets/wav/82.data");
		type.set ("assets/wav/82.data", AssetType.BINARY);
		path.set ("assets/wav/83.data", "assets/wav/83.data");
		type.set ("assets/wav/83.data", AssetType.BINARY);
		path.set ("assets/wav/84.data", "assets/wav/84.data");
		type.set ("assets/wav/84.data", AssetType.BINARY);
		path.set ("assets/wav/85.data", "assets/wav/85.data");
		type.set ("assets/wav/85.data", AssetType.BINARY);
		path.set ("assets/wav/86.data", "assets/wav/86.data");
		type.set ("assets/wav/86.data", AssetType.BINARY);
		path.set ("assets/wav/87.data", "assets/wav/87.data");
		type.set ("assets/wav/87.data", AssetType.BINARY);
		path.set ("assets/wav/88.data", "assets/wav/88.data");
		type.set ("assets/wav/88.data", AssetType.BINARY);
		path.set ("assets/wav/89.data", "assets/wav/89.data");
		type.set ("assets/wav/89.data", AssetType.BINARY);
		path.set ("assets/wav/90.data", "assets/wav/90.data");
		type.set ("assets/wav/90.data", AssetType.BINARY);
		path.set ("assets/wav/91.data", "assets/wav/91.data");
		type.set ("assets/wav/91.data", AssetType.BINARY);
		path.set ("assets/wav/92.data", "assets/wav/92.data");
		type.set ("assets/wav/92.data", AssetType.BINARY);
		path.set ("assets/wav/93.data", "assets/wav/93.data");
		type.set ("assets/wav/93.data", AssetType.BINARY);
		path.set ("assets/wav/94.data", "assets/wav/94.data");
		type.set ("assets/wav/94.data", AssetType.BINARY);
		path.set ("assets/wav/95.data", "assets/wav/95.data");
		type.set ("assets/wav/95.data", AssetType.BINARY);
		path.set ("assets/wav/96.data", "assets/wav/96.data");
		type.set ("assets/wav/96.data", AssetType.BINARY);
		
		
		#elseif html5
		
		var id;
		
		
		#else
		
		#if (windows || mac || linux)
		
		var useManifest = false;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		useManifest = true;
		
		
		if (useManifest) {
			
			loadManifest ();
			
			if (Sys.args ().indexOf ("-livereload") > -1) {
				
				var path = FileSystem.fullPath ("manifest");
				lastModified = FileSystem.stat (path).mtime.getTime ();
				
				timer = new Timer (2000);
				timer.run = function () {
					
					var modified = FileSystem.stat (path).mtime.getTime ();
					
					if (modified > lastModified) {
						
						lastModified = modified;
						loadManifest ();
						
						if (eventCallback != null) {
							
							eventCallback (this, "change");
							
						}
						
					}
					
				}
				
			}
			
		}
		
		#else
		
		loadManifest ();
		
		#end
		#end
		
	}
	
	
	public override function exists (id:String, type:AssetType):Bool {
		
		var assetType = this.type.get (id);
		
		#if pixi
		
		if (assetType == IMAGE) {
			
			return true;
			
		} else {
			
			return false;
			
		}
		
		#end
		
		if (assetType != null) {
			
			if (assetType == type || ((type == SOUND || type == MUSIC) && (assetType == MUSIC || assetType == SOUND))) {
				
				return true;
				
			}
			
			#if flash
			
			if ((assetType == BINARY || assetType == TEXT) && type == BINARY) {
				
				return true;
				
			} else if (path.exists (id)) {
				
				return true;
				
			}
			
			#else
			
			if (type == BINARY || type == null) {
				
				return true;
				
			}
			
			#end
			
		}
		
		return false;
		
	}
	
	
	public override function getBitmapData (id:String):BitmapData {
		
		#if pixi
		
		return BitmapData.fromImage (path.get (id));
		
		#elseif (flash)
		
		return cast (Type.createInstance (className.get (id), []), BitmapData);
		
		#elseif openfl_html5
		
		return BitmapData.fromImage (ApplicationMain.images.get (path.get (id)));
		
		#elseif js
		
		return cast (ApplicationMain.loaders.get (path.get (id)).contentLoaderInfo.content, Bitmap).bitmapData;
		
		#else
		
		if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), BitmapData);
		else return BitmapData.load (path.get (id));
		
		#end
		
	}
	
	
	public override function getBytes (id:String):ByteArray {
		
		#if (flash)
		
		return cast (Type.createInstance (className.get (id), []), ByteArray);

		#elseif (js || openfl_html5 || pixi)
		
		var bytes:ByteArray = null;
		var data = ApplicationMain.urlLoaders.get (path.get (id)).data;
		
		if (Std.is (data, String)) {
			
			bytes = new ByteArray ();
			bytes.writeUTFBytes (data);
			
		} else if (Std.is (data, ByteArray)) {
			
			bytes = cast data;
			
		} else {
			
			bytes = null;
			
		}

		if (bytes != null) {
			
			bytes.position = 0;
			return bytes;
			
		} else {
			
			return null;
		}
		
		#else
		
		if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), ByteArray);
		else return ByteArray.readFile (path.get (id));
		
		#end
		
	}
	
	
	public override function getFont (id:String):Font {
		
		#if pixi
		
		return null;
		
		#elseif (flash || js)
		
		return cast (Type.createInstance (className.get (id), []), Font);
		
		#else
		
		if (className.exists(id)) {
			var fontClass = className.get(id);
			Font.registerFont(fontClass);
			return cast (Type.createInstance (fontClass, []), Font);
		} else return new Font (path.get (id));
		
		#end
		
	}
	
	
	public override function getMusic (id:String):Sound {
		
		#if pixi
		
		return null;
		
		#elseif (flash)
		
		return cast (Type.createInstance (className.get (id), []), Sound);
		
		#elseif openfl_html5
		
		var sound = new Sound ();
		sound.__buffer = true;
		sound.load (new URLRequest (path.get (id)));
		return sound; 
		
		#elseif js
		
		return new Sound (new URLRequest (path.get (id)));
		
		#else
		
		if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), Sound);
		else return new Sound (new URLRequest (path.get (id)), null, true);
		
		#end
		
	}
	
	
	public override function getPath (id:String):String {
		
		#if ios
		
		return SystemPath.applicationDirectory + "/assets/" + path.get (id);
		
		#else
		
		return path.get (id);
		
		#end
		
	}
	
	
	public override function getSound (id:String):Sound {
		
		#if pixi
		
		return null;
		
		#elseif (flash)
		
		return cast (Type.createInstance (className.get (id), []), Sound);
		
		#elseif js
		
		return new Sound (new URLRequest (path.get (id)));
		
		#else
		
		if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), Sound);
		else return new Sound (new URLRequest (path.get (id)), null, type.get (id) == MUSIC);
		
		#end
		
	}
	
	
	public override function getText (id:String):String {
		
		#if js
		
		var bytes:ByteArray = null;
		var data = ApplicationMain.urlLoaders.get (path.get (id)).data;
		
		if (Std.is (data, String)) {
			
			return cast data;
			
		} else if (Std.is (data, ByteArray)) {
			
			bytes = cast data;
			
		} else {
			
			bytes = null;
			
		}
		
		if (bytes != null) {
			
			bytes.position = 0;
			return bytes.readUTFBytes (bytes.length);
			
		} else {
			
			return null;
		}
		
		#else
		
		var bytes = getBytes (id);
		
		if (bytes == null) {
			
			return null;
			
		} else {
			
			return bytes.readUTFBytes (bytes.length);
			
		}
		
		#end
		
	}
	
	
	public override function isLocal (id:String, type:AssetType):Bool {
		
		#if flash
		
		if (type != AssetType.MUSIC && type != AssetType.SOUND) {
			
			return className.exists (id);
			
		}
		
		#end
		
		return true;
		
	}
	
	
	public override function list (type:AssetType):Array<String> {
		
		var items = [];
		
		for (id in this.type.keys ()) {
			
			if (type == null || exists (id, type)) {
				
				items.push (id);
				
			}
			
		}
		
		return items;
		
	}
	
	
	public override function loadBitmapData (id:String, handler:BitmapData -> Void):Void {
		
		#if pixi
		
		handler (getBitmapData (id));
		
		#elseif (flash || js)
		
		if (path.exists (id)) {
			
			var loader = new Loader ();
			loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event:Event) {
				
				handler (cast (event.currentTarget.content, Bitmap).bitmapData);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getBitmapData (id));
			
		}
		
		#else
		
		handler (getBitmapData (id));
		
		#end
		
	}
	
	
	public override function loadBytes (id:String, handler:ByteArray -> Void):Void {
		
		#if pixi
		
		handler (getBytes (id));
		
		#elseif (flash || js)
		
		if (path.exists (id)) {
			
			var loader = new URLLoader ();
			loader.addEventListener (Event.COMPLETE, function (event:Event) {
				
				var bytes = new ByteArray ();
				bytes.writeUTFBytes (event.currentTarget.data);
				bytes.position = 0;
				
				handler (bytes);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getBytes (id));
			
		}
		
		#else
		
		handler (getBytes (id));
		
		#end
		
	}
	
	
	public override function loadFont (id:String, handler:Font -> Void):Void {
		
		#if (flash || js)
		
		/*if (path.exists (id)) {
			
			var loader = new Loader ();
			loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event) {
				
				handler (cast (event.currentTarget.content, Bitmap).bitmapData);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {*/
			
			handler (getFont (id));
			
		//}
		
		#else
		
		handler (getFont (id));
		
		#end
		
	}
	
	
	#if (!flash && !html5)
	private function loadManifest ():Void {
		
		try {
			
			#if blackberry
			var bytes = ByteArray.readFile ("app/native/manifest");
			#elseif tizen
			var bytes = ByteArray.readFile ("../res/manifest");
			#elseif emscripten
			var bytes = ByteArray.readFile ("assets/manifest");
			#else
			var bytes = ByteArray.readFile ("manifest");
			#end
			
			if (bytes != null) {
				
				bytes.position = 0;
				
				if (bytes.length > 0) {
					
					var data = bytes.readUTFBytes (bytes.length);
					
					if (data != null && data.length > 0) {
						
						var manifest:Array<Dynamic> = Unserializer.run (data);
						
						for (asset in manifest) {
							
							if (!className.exists (asset.id)) {
								
								path.set (asset.id, asset.path);
								type.set (asset.id, Type.createEnum (AssetType, asset.type));
								
							}
							
						}
						
					}
					
				}
				
			} else {
				
				trace ("Warning: Could not load asset manifest (bytes was null)");
				
			}
		
		} catch (e:Dynamic) {
			
			trace ('Warning: Could not load asset manifest (${e})');
			
		}
		
	}
	#end
	
	
	public override function loadMusic (id:String, handler:Sound -> Void):Void {
		
		#if (flash || js)
		
		/*if (path.exists (id)) {
			
			var loader = new Loader ();
			loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event) {
				
				handler (cast (event.currentTarget.content, Bitmap).bitmapData);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {*/
			
			handler (getMusic (id));
			
		//}
		
		#else
		
		handler (getMusic (id));
		
		#end
		
	}
	
	
	public override function loadSound (id:String, handler:Sound -> Void):Void {
		
		#if (flash || js)
		
		/*if (path.exists (id)) {
			
			var loader = new Loader ();
			loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event) {
				
				handler (cast (event.currentTarget.content, Bitmap).bitmapData);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {*/
			
			handler (getSound (id));
			
		//}
		
		#else
		
		handler (getSound (id));
		
		#end
		
	}
	
	
	public override function loadText (id:String, handler:String -> Void):Void {
		
		#if js
		
		if (path.exists (id)) {
			
			var loader = new URLLoader ();
			loader.addEventListener (Event.COMPLETE, function (event:Event) {
				
				handler (event.currentTarget.data);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getText (id));
			
		}
		
		#else
		
		var callback = function (bytes:ByteArray):Void {
			
			if (bytes == null) {
				
				handler (null);
				
			} else {
				
				handler (bytes.readUTFBytes (bytes.length));
				
			}
			
		}
		
		loadBytes (id, callback);
		
		#end
		
	}
	
	
}


#if pixi
#elseif flash
















































































































































































#elseif html5



































































@:keep class __ASSET__fonts_oxygen_bold_ttf extends flash.text.Font { #if (!openfl_html5_dom) public function new () { super (); fontName = "fonts/Oxygen-Bold.ttf"; } #end }
@:keep class __ASSET__fonts_oxygen_ttf extends flash.text.Font { #if (!openfl_html5_dom) public function new () { super (); fontName = "fonts/Oxygen.ttf"; } #end }











































































































#elseif (windows || mac || linux)




#end
