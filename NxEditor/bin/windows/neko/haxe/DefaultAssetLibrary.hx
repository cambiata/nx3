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
import openfl._v2.utils.SystemPath;
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
		
		path.set ("assets/fonts/Oxygen-Bold.ttf", "assets/fonts/Oxygen-Bold.ttf");
		type.set ("assets/fonts/Oxygen-Bold.ttf", AssetType.FONT);
		path.set ("assets/fonts/Oxygen.ttf", "assets/fonts/Oxygen.ttf");
		type.set ("assets/fonts/Oxygen.ttf", AssetType.FONT);
		path.set ("assets/styles/default/circle.png", "assets/styles/default/circle.png");
		type.set ("assets/styles/default/circle.png", AssetType.IMAGE);
		path.set ("assets/styles/default/collapse.png", "assets/styles/default/collapse.png");
		type.set ("assets/styles/default/collapse.png", AssetType.IMAGE);
		path.set ("assets/styles/default/cross.png", "assets/styles/default/cross.png");
		type.set ("assets/styles/default/cross.png", AssetType.IMAGE);
		path.set ("assets/styles/default/expand.png", "assets/styles/default/expand.png");
		type.set ("assets/styles/default/expand.png", AssetType.IMAGE);
		path.set ("assets/styles/default/up_down.png", "assets/styles/default/up_down.png");
		type.set ("assets/styles/default/up_down.png", AssetType.IMAGE);
		path.set ("assets/styles/gradient/arrow_down.png", "assets/styles/gradient/arrow_down.png");
		type.set ("assets/styles/gradient/arrow_down.png", AssetType.IMAGE);
		path.set ("assets/styles/gradient/arrow_down_dark.png", "assets/styles/gradient/arrow_down_dark.png");
		type.set ("assets/styles/gradient/arrow_down_dark.png", AssetType.IMAGE);
		path.set ("assets/styles/gradient/arrow_down_disabled.png", "assets/styles/gradient/arrow_down_disabled.png");
		type.set ("assets/styles/gradient/arrow_down_disabled.png", AssetType.IMAGE);
		path.set ("assets/styles/gradient/arrow_left.png", "assets/styles/gradient/arrow_left.png");
		type.set ("assets/styles/gradient/arrow_left.png", AssetType.IMAGE);
		path.set ("assets/styles/gradient/arrow_left_disabled.png", "assets/styles/gradient/arrow_left_disabled.png");
		type.set ("assets/styles/gradient/arrow_left_disabled.png", AssetType.IMAGE);
		path.set ("assets/styles/gradient/arrow_right.png", "assets/styles/gradient/arrow_right.png");
		type.set ("assets/styles/gradient/arrow_right.png", AssetType.IMAGE);
		path.set ("assets/styles/gradient/arrow_right2.png", "assets/styles/gradient/arrow_right2.png");
		type.set ("assets/styles/gradient/arrow_right2.png", AssetType.IMAGE);
		path.set ("assets/styles/gradient/arrow_right_dark.png", "assets/styles/gradient/arrow_right_dark.png");
		type.set ("assets/styles/gradient/arrow_right_dark.png", AssetType.IMAGE);
		path.set ("assets/styles/gradient/arrow_right_disabled.png", "assets/styles/gradient/arrow_right_disabled.png");
		type.set ("assets/styles/gradient/arrow_right_disabled.png", AssetType.IMAGE);
		path.set ("assets/styles/gradient/arrow_up.png", "assets/styles/gradient/arrow_up.png");
		type.set ("assets/styles/gradient/arrow_up.png", AssetType.IMAGE);
		path.set ("assets/styles/gradient/arrow_up_disabled.png", "assets/styles/gradient/arrow_up_disabled.png");
		type.set ("assets/styles/gradient/arrow_up_disabled.png", AssetType.IMAGE);
		path.set ("assets/styles/gradient/circle_dark.png", "assets/styles/gradient/circle_dark.png");
		type.set ("assets/styles/gradient/circle_dark.png", AssetType.IMAGE);
		path.set ("assets/styles/gradient/cross_dark.png", "assets/styles/gradient/cross_dark.png");
		type.set ("assets/styles/gradient/cross_dark.png", AssetType.IMAGE);
		path.set ("assets/styles/gradient/cross_dark_disabled.png", "assets/styles/gradient/cross_dark_disabled.png");
		type.set ("assets/styles/gradient/cross_dark_disabled.png", AssetType.IMAGE);
		path.set ("assets/styles/gradient/cross_light_small.png", "assets/styles/gradient/cross_light_small.png");
		type.set ("assets/styles/gradient/cross_light_small.png", AssetType.IMAGE);
		path.set ("assets/styles/gradient/gradient.css", "assets/styles/gradient/gradient.css");
		type.set ("assets/styles/gradient/gradient.css", AssetType.TEXT);
		path.set ("assets/styles/gradient/gradient.min.css", "assets/styles/gradient/gradient.min.css");
		type.set ("assets/styles/gradient/gradient.min.css", AssetType.TEXT);
		path.set ("assets/styles/gradient/gradient_mobile.css", "assets/styles/gradient/gradient_mobile.css");
		type.set ("assets/styles/gradient/gradient_mobile.css", AssetType.TEXT);
		path.set ("assets/styles/gradient/gradient_mobile.min.css", "assets/styles/gradient/gradient_mobile.min.css");
		type.set ("assets/styles/gradient/gradient_mobile.min.css", AssetType.TEXT);
		path.set ("assets/styles/gradient/gripper_horizontal.png", "assets/styles/gradient/gripper_horizontal.png");
		type.set ("assets/styles/gradient/gripper_horizontal.png", AssetType.IMAGE);
		path.set ("assets/styles/gradient/gripper_horizontal_disabled.png", "assets/styles/gradient/gripper_horizontal_disabled.png");
		type.set ("assets/styles/gradient/gripper_horizontal_disabled.png", AssetType.IMAGE);
		path.set ("assets/styles/gradient/gripper_vertical.png", "assets/styles/gradient/gripper_vertical.png");
		type.set ("assets/styles/gradient/gripper_vertical.png", AssetType.IMAGE);
		path.set ("assets/styles/gradient/gripper_vertical_disabled.png", "assets/styles/gradient/gripper_vertical_disabled.png");
		type.set ("assets/styles/gradient/gripper_vertical_disabled.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/accordion.css", "assets/styles/windows/accordion.css");
		type.set ("assets/styles/windows/accordion.css", AssetType.TEXT);
		path.set ("assets/styles/windows/accordion.min.css", "assets/styles/windows/accordion.min.css");
		type.set ("assets/styles/windows/accordion.min.css", AssetType.TEXT);
		path.set ("assets/styles/windows/button.png", "assets/styles/windows/button.png");
		type.set ("assets/styles/windows/button.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/buttons.css", "assets/styles/windows/buttons.css");
		type.set ("assets/styles/windows/buttons.css", AssetType.TEXT);
		path.set ("assets/styles/windows/buttons.min.css", "assets/styles/windows/buttons.min.css");
		type.set ("assets/styles/windows/buttons.min.css", AssetType.TEXT);
		path.set ("assets/styles/windows/calendar.css", "assets/styles/windows/calendar.css");
		type.set ("assets/styles/windows/calendar.css", AssetType.TEXT);
		path.set ("assets/styles/windows/checkbox.png", "assets/styles/windows/checkbox.png");
		type.set ("assets/styles/windows/checkbox.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/container.png", "assets/styles/windows/container.png");
		type.set ("assets/styles/windows/container.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/glyphs/down_arrow.png", "assets/styles/windows/glyphs/down_arrow.png");
		type.set ("assets/styles/windows/glyphs/down_arrow.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/glyphs/hscroll_thumb_gripper_down.png", "assets/styles/windows/glyphs/hscroll_thumb_gripper_down.png");
		type.set ("assets/styles/windows/glyphs/hscroll_thumb_gripper_down.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/glyphs/hscroll_thumb_gripper_over.png", "assets/styles/windows/glyphs/hscroll_thumb_gripper_over.png");
		type.set ("assets/styles/windows/glyphs/hscroll_thumb_gripper_over.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/glyphs/hscroll_thumb_gripper_up.png", "assets/styles/windows/glyphs/hscroll_thumb_gripper_up.png");
		type.set ("assets/styles/windows/glyphs/hscroll_thumb_gripper_up.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/glyphs/left_arrow.png", "assets/styles/windows/glyphs/left_arrow.png");
		type.set ("assets/styles/windows/glyphs/left_arrow.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/glyphs/right_arrow.png", "assets/styles/windows/glyphs/right_arrow.png");
		type.set ("assets/styles/windows/glyphs/right_arrow.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/glyphs/up_arrow.png", "assets/styles/windows/glyphs/up_arrow.png");
		type.set ("assets/styles/windows/glyphs/up_arrow.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/glyphs/vscroll_thumb_gripper_down.png", "assets/styles/windows/glyphs/vscroll_thumb_gripper_down.png");
		type.set ("assets/styles/windows/glyphs/vscroll_thumb_gripper_down.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/glyphs/vscroll_thumb_gripper_over.png", "assets/styles/windows/glyphs/vscroll_thumb_gripper_over.png");
		type.set ("assets/styles/windows/glyphs/vscroll_thumb_gripper_over.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/glyphs/vscroll_thumb_gripper_up.png", "assets/styles/windows/glyphs/vscroll_thumb_gripper_up.png");
		type.set ("assets/styles/windows/glyphs/vscroll_thumb_gripper_up.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/hprogress.png", "assets/styles/windows/hprogress.png");
		type.set ("assets/styles/windows/hprogress.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/hscroll.png", "assets/styles/windows/hscroll.png");
		type.set ("assets/styles/windows/hscroll.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/listview.css", "assets/styles/windows/listview.css");
		type.set ("assets/styles/windows/listview.css", AssetType.TEXT);
		path.set ("assets/styles/windows/listview.min.css", "assets/styles/windows/listview.min.css");
		type.set ("assets/styles/windows/listview.min.css", AssetType.TEXT);
		path.set ("assets/styles/windows/listview.png", "assets/styles/windows/listview.png");
		type.set ("assets/styles/windows/listview.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/menus.css", "assets/styles/windows/menus.css");
		type.set ("assets/styles/windows/menus.css", AssetType.TEXT);
		path.set ("assets/styles/windows/optionbox.png", "assets/styles/windows/optionbox.png");
		type.set ("assets/styles/windows/optionbox.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/popup.png", "assets/styles/windows/popup.png");
		type.set ("assets/styles/windows/popup.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/popups.css", "assets/styles/windows/popups.css");
		type.set ("assets/styles/windows/popups.css", AssetType.TEXT);
		path.set ("assets/styles/windows/rtf.css", "assets/styles/windows/rtf.css");
		type.set ("assets/styles/windows/rtf.css", AssetType.TEXT);
		path.set ("assets/styles/windows/scrolls.css", "assets/styles/windows/scrolls.css");
		type.set ("assets/styles/windows/scrolls.css", AssetType.TEXT);
		path.set ("assets/styles/windows/scrolls.min.css", "assets/styles/windows/scrolls.min.css");
		type.set ("assets/styles/windows/scrolls.min.css", AssetType.TEXT);
		path.set ("assets/styles/windows/sliders.css", "assets/styles/windows/sliders.css");
		type.set ("assets/styles/windows/sliders.css", AssetType.TEXT);
		path.set ("assets/styles/windows/tab.png", "assets/styles/windows/tab.png");
		type.set ("assets/styles/windows/tab.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/tabs.css", "assets/styles/windows/tabs.css");
		type.set ("assets/styles/windows/tabs.css", AssetType.TEXT);
		path.set ("assets/styles/windows/textinput.png", "assets/styles/windows/textinput.png");
		type.set ("assets/styles/windows/textinput.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/vprogress.png", "assets/styles/windows/vprogress.png");
		type.set ("assets/styles/windows/vprogress.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/vscroll.png", "assets/styles/windows/vscroll.png");
		type.set ("assets/styles/windows/vscroll.png", AssetType.IMAGE);
		path.set ("assets/styles/windows/windows.css", "assets/styles/windows/windows.css");
		type.set ("assets/styles/windows/windows.css", AssetType.TEXT);
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
		path.set ("styles/gradient/cross_light_small.png", "styles/gradient/cross_light_small.png");
		type.set ("styles/gradient/cross_light_small.png", AssetType.IMAGE);
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
		path.set ("fonts/Oxygen-Bold.ttf", "fonts/Oxygen-Bold.ttf");
		type.set ("fonts/Oxygen-Bold.ttf", AssetType.FONT);
		path.set ("fonts/Oxygen.ttf", "fonts/Oxygen.ttf");
		type.set ("fonts/Oxygen.ttf", AssetType.FONT);
		path.set ("assets/css/code.css", "assets/css/code.css");
		type.set ("assets/css/code.css", AssetType.TEXT);
		path.set ("assets/css/code.min.css", "assets/css/code.min.css");
		type.set ("assets/css/code.min.css", AssetType.TEXT);
		path.set ("assets/css/rtf.css", "assets/css/rtf.css");
		type.set ("assets/css/rtf.css", AssetType.TEXT);
		path.set ("assets/css/rtf.min.css", "assets/css/rtf.min.css");
		type.set ("assets/css/rtf.min.css", AssetType.TEXT);
		path.set ("assets/img/rtfview/edit-alignment-center.png", "assets/img/rtfview/edit-alignment-center.png");
		type.set ("assets/img/rtfview/edit-alignment-center.png", AssetType.IMAGE);
		path.set ("assets/img/rtfview/edit-alignment-justify.png", "assets/img/rtfview/edit-alignment-justify.png");
		type.set ("assets/img/rtfview/edit-alignment-justify.png", AssetType.IMAGE);
		path.set ("assets/img/rtfview/edit-alignment-left.png", "assets/img/rtfview/edit-alignment-left.png");
		type.set ("assets/img/rtfview/edit-alignment-left.png", AssetType.IMAGE);
		path.set ("assets/img/rtfview/edit-alignment-right.png", "assets/img/rtfview/edit-alignment-right.png");
		type.set ("assets/img/rtfview/edit-alignment-right.png", AssetType.IMAGE);
		path.set ("assets/img/rtfview/edit-bold.png", "assets/img/rtfview/edit-bold.png");
		type.set ("assets/img/rtfview/edit-bold.png", AssetType.IMAGE);
		path.set ("assets/img/rtfview/edit-italic.png", "assets/img/rtfview/edit-italic.png");
		type.set ("assets/img/rtfview/edit-italic.png", AssetType.IMAGE);
		path.set ("assets/img/rtfview/edit-list.png", "assets/img/rtfview/edit-list.png");
		type.set ("assets/img/rtfview/edit-list.png", AssetType.IMAGE);
		path.set ("assets/img/rtfview/edit-underline.png", "assets/img/rtfview/edit-underline.png");
		type.set ("assets/img/rtfview/edit-underline.png", AssetType.IMAGE);
		path.set ("assets/openfl.svg", "assets/openfl.svg");
		type.set ("assets/openfl.svg", AssetType.TEXT);
		path.set ("assets/ui/demo.xml", "assets/ui/demo.xml");
		type.set ("assets/ui/demo.xml", AssetType.TEXT);
		path.set ("assets/ui/example.hx", "assets/ui/example.hx");
		type.set ("assets/ui/example.hx", AssetType.TEXT);
		path.set ("assets/ui/example.txt", "assets/ui/example.txt");
		type.set ("assets/ui/example.txt", AssetType.TEXT);
		path.set ("assets/ui/example.xml", "assets/ui/example.xml");
		type.set ("assets/ui/example.xml", AssetType.TEXT);
		path.set ("img/rtfview/edit-alignment-center.png", "img/rtfview/edit-alignment-center.png");
		type.set ("img/rtfview/edit-alignment-center.png", AssetType.IMAGE);
		path.set ("img/rtfview/edit-alignment-justify.png", "img/rtfview/edit-alignment-justify.png");
		type.set ("img/rtfview/edit-alignment-justify.png", AssetType.IMAGE);
		path.set ("img/rtfview/edit-alignment-left.png", "img/rtfview/edit-alignment-left.png");
		type.set ("img/rtfview/edit-alignment-left.png", AssetType.IMAGE);
		path.set ("img/rtfview/edit-alignment-right.png", "img/rtfview/edit-alignment-right.png");
		type.set ("img/rtfview/edit-alignment-right.png", AssetType.IMAGE);
		path.set ("img/rtfview/edit-bold.png", "img/rtfview/edit-bold.png");
		type.set ("img/rtfview/edit-bold.png", AssetType.IMAGE);
		path.set ("img/rtfview/edit-italic.png", "img/rtfview/edit-italic.png");
		type.set ("img/rtfview/edit-italic.png", AssetType.IMAGE);
		path.set ("img/rtfview/edit-list.png", "img/rtfview/edit-list.png");
		type.set ("img/rtfview/edit-list.png", AssetType.IMAGE);
		path.set ("img/rtfview/edit-underline.png", "img/rtfview/edit-underline.png");
		type.set ("img/rtfview/edit-underline.png", AssetType.IMAGE);
		path.set ("css/code.css", "css/code.css");
		type.set ("css/code.css", AssetType.TEXT);
		path.set ("css/code.min.css", "css/code.min.css");
		type.set ("css/code.min.css", AssetType.TEXT);
		path.set ("css/rtf.css", "css/rtf.css");
		type.set ("css/rtf.css", AssetType.TEXT);
		path.set ("css/rtf.min.css", "css/rtf.min.css");
		type.set ("css/rtf.min.css", AssetType.TEXT);
		
		
		#elseif html5
		
		var id;
		id = "assets/fonts/Oxygen-Bold.ttf";
		path.set (id, id);
		type.set (id, AssetType.FONT);
		id = "assets/fonts/Oxygen.ttf";
		path.set (id, id);
		type.set (id, AssetType.FONT);
		id = "assets/styles/default/circle.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/default/collapse.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/default/cross.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/default/expand.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/default/up_down.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/gradient/arrow_down.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/gradient/arrow_down_dark.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/gradient/arrow_down_disabled.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/gradient/arrow_left.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/gradient/arrow_left_disabled.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/gradient/arrow_right.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/gradient/arrow_right2.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/gradient/arrow_right_dark.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/gradient/arrow_right_disabled.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/gradient/arrow_up.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/gradient/arrow_up_disabled.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/gradient/circle_dark.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/gradient/cross_dark.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/gradient/cross_dark_disabled.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/gradient/cross_light_small.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/gradient/gradient.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/styles/gradient/gradient.min.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/styles/gradient/gradient_mobile.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/styles/gradient/gradient_mobile.min.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/styles/gradient/gripper_horizontal.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/gradient/gripper_horizontal_disabled.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/gradient/gripper_vertical.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/gradient/gripper_vertical_disabled.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/accordion.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/styles/windows/accordion.min.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/styles/windows/button.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/buttons.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/styles/windows/buttons.min.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/styles/windows/calendar.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/styles/windows/checkbox.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/container.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/glyphs/down_arrow.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/glyphs/hscroll_thumb_gripper_down.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/glyphs/hscroll_thumb_gripper_over.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/glyphs/hscroll_thumb_gripper_up.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/glyphs/left_arrow.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/glyphs/right_arrow.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/glyphs/up_arrow.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/glyphs/vscroll_thumb_gripper_down.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/glyphs/vscroll_thumb_gripper_over.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/glyphs/vscroll_thumb_gripper_up.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/hprogress.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/hscroll.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/listview.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/styles/windows/listview.min.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/styles/windows/listview.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/menus.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/styles/windows/optionbox.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/popup.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/popups.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/styles/windows/rtf.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/styles/windows/scrolls.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/styles/windows/scrolls.min.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/styles/windows/sliders.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/styles/windows/tab.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/tabs.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/styles/windows/textinput.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/vprogress.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/vscroll.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/styles/windows/windows.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "styles/default/circle.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/default/collapse.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/default/cross.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/default/expand.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/default/up_down.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/gradient/arrow_down.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/gradient/arrow_down_dark.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/gradient/arrow_down_disabled.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/gradient/arrow_left.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/gradient/arrow_left_disabled.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/gradient/arrow_right.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/gradient/arrow_right2.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/gradient/arrow_right_dark.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/gradient/arrow_right_disabled.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/gradient/arrow_up.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/gradient/arrow_up_disabled.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/gradient/circle_dark.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/gradient/cross_dark.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/gradient/cross_dark_disabled.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/gradient/cross_light_small.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/gradient/gradient.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "styles/gradient/gradient.min.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "styles/gradient/gradient_mobile.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "styles/gradient/gradient_mobile.min.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "styles/gradient/gripper_horizontal.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/gradient/gripper_horizontal_disabled.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/gradient/gripper_vertical.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/gradient/gripper_vertical_disabled.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/accordion.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "styles/windows/accordion.min.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "styles/windows/button.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/buttons.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "styles/windows/buttons.min.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "styles/windows/calendar.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "styles/windows/checkbox.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/container.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/glyphs/down_arrow.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/glyphs/hscroll_thumb_gripper_down.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/glyphs/hscroll_thumb_gripper_over.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/glyphs/hscroll_thumb_gripper_up.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/glyphs/left_arrow.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/glyphs/right_arrow.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/glyphs/up_arrow.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/glyphs/vscroll_thumb_gripper_down.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/glyphs/vscroll_thumb_gripper_over.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/glyphs/vscroll_thumb_gripper_up.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/hprogress.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/hscroll.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/listview.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "styles/windows/listview.min.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "styles/windows/listview.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/menus.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "styles/windows/optionbox.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/popup.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/popups.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "styles/windows/rtf.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "styles/windows/scrolls.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "styles/windows/scrolls.min.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "styles/windows/sliders.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "styles/windows/tab.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/tabs.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "styles/windows/textinput.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/vprogress.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/vscroll.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "styles/windows/windows.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "fonts/Oxygen-Bold.ttf";
		path.set (id, id);
		type.set (id, AssetType.FONT);
		id = "fonts/Oxygen.ttf";
		path.set (id, id);
		type.set (id, AssetType.FONT);
		id = "assets/css/code.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/css/code.min.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/css/rtf.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/css/rtf.min.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/img/rtfview/edit-alignment-center.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/img/rtfview/edit-alignment-justify.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/img/rtfview/edit-alignment-left.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/img/rtfview/edit-alignment-right.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/img/rtfview/edit-bold.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/img/rtfview/edit-italic.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/img/rtfview/edit-list.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/img/rtfview/edit-underline.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "assets/openfl.svg";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/ui/demo.xml";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/ui/example.hx";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/ui/example.txt";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "assets/ui/example.xml";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "img/rtfview/edit-alignment-center.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "img/rtfview/edit-alignment-justify.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "img/rtfview/edit-alignment-left.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "img/rtfview/edit-alignment-right.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "img/rtfview/edit-bold.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "img/rtfview/edit-italic.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "img/rtfview/edit-list.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "img/rtfview/edit-underline.png";
		path.set (id, id);
		type.set (id, AssetType.IMAGE);
		id = "css/code.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "css/code.min.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "css/rtf.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		id = "css/rtf.min.css";
		path.set (id, id);
		type.set (id, AssetType.TEXT);
		
		
		#else
		
		
		Font.registerFont (__ASSET__assets_fonts_oxygen_bold_ttf);
		Font.registerFont (__ASSET__assets_fonts_oxygen_ttf);
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		Font.registerFont (__ASSET__fonts_oxygen_bold_ttf);
		Font.registerFont (__ASSET__fonts_oxygen_ttf);
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
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
			
			if (type == BINARY || type == null || (assetType == BINARY && type == TEXT)) {
				
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

@:keep #if display private #end class __ASSET__assets_fonts_oxygen_bold_ttf extends flash.text.Font { #if (!openfl_html5_dom) public function new () { super (); fontName = "assets/fonts/Oxygen-Bold.ttf"; } #end }
@:keep #if display private #end class __ASSET__assets_fonts_oxygen_ttf extends flash.text.Font { #if (!openfl_html5_dom) public function new () { super (); fontName = "assets/fonts/Oxygen.ttf"; } #end }


































































































































@:keep #if display private #end class __ASSET__fonts_oxygen_bold_ttf extends flash.text.Font { #if (!openfl_html5_dom) public function new () { super (); fontName = "fonts/Oxygen-Bold.ttf"; } #end }
@:keep #if display private #end class __ASSET__fonts_oxygen_ttf extends flash.text.Font { #if (!openfl_html5_dom) public function new () { super (); fontName = "fonts/Oxygen.ttf"; } #end }































#else

#if (windows || mac || linux)





class __ASSET__assets_fonts_oxygen_bold_ttf extends openfl.text.Font { public function new () { super (); __fontPath = "assets/fonts/Oxygen-Bold.ttf"; fontName = "Oxygen Bold"; }}
class __ASSET__assets_fonts_oxygen_ttf extends openfl.text.Font { public function new () { super (); __fontPath = "assets/fonts/Oxygen.ttf"; fontName = "Oxygen Regular"; }}
class __ASSET__fonts_oxygen_bold_ttf extends openfl.text.Font { public function new () { super (); __fontPath = "fonts/Oxygen-Bold.ttf"; fontName = "Oxygen Bold"; }}
class __ASSET__fonts_oxygen_ttf extends openfl.text.Font { public function new () { super (); __fontPath = "fonts/Oxygen.ttf"; fontName = "Oxygen Regular"; }}


#else


class __ASSET__assets_fonts_oxygen_bold_ttf extends openfl.text.Font { public function new () { super (); __fontPath = "assets/fonts/Oxygen-Bold.ttf"; fontName = "Oxygen Bold";  }}
class __ASSET__assets_fonts_oxygen_ttf extends openfl.text.Font { public function new () { super (); __fontPath = "assets/fonts/Oxygen.ttf"; fontName = "Oxygen Regular";  }}
class __ASSET__fonts_oxygen_bold_ttf extends openfl.text.Font { public function new () { super (); __fontPath = "fonts/Oxygen-Bold.ttf"; fontName = "Oxygen Bold";  }}
class __ASSET__fonts_oxygen_ttf extends openfl.text.Font { public function new () { super (); __fontPath = "fonts/Oxygen.ttf"; fontName = "Oxygen Regular";  }}


#end

#end
