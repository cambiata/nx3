package lime;


import lime.utils.Assets;


class AssetData {

	private static var initialized:Bool = false;
	
	public static var library = new #if haxe3 Map <String, #else Hash <#end LibraryType> ();
	public static var path = new #if haxe3 Map <String, #else Hash <#end String> ();
	public static var type = new #if haxe3 Map <String, #else Hash <#end AssetType> ();	
	
	public static function initialize():Void {
		
		if (!initialized) {
			
			path.set ("styles/gradient/arrow_down.png", "styles/gradient/arrow_down.png");
			type.set ("styles/gradient/arrow_down.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/gradient/arrow_down_dark.png", "styles/gradient/arrow_down_dark.png");
			type.set ("styles/gradient/arrow_down_dark.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/gradient/arrow_down_disabled.png", "styles/gradient/arrow_down_disabled.png");
			type.set ("styles/gradient/arrow_down_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/gradient/arrow_left.png", "styles/gradient/arrow_left.png");
			type.set ("styles/gradient/arrow_left.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/gradient/arrow_left_disabled.png", "styles/gradient/arrow_left_disabled.png");
			type.set ("styles/gradient/arrow_left_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/gradient/arrow_right.png", "styles/gradient/arrow_right.png");
			type.set ("styles/gradient/arrow_right.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/gradient/arrow_right2.png", "styles/gradient/arrow_right2.png");
			type.set ("styles/gradient/arrow_right2.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/gradient/arrow_right_dark.png", "styles/gradient/arrow_right_dark.png");
			type.set ("styles/gradient/arrow_right_dark.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/gradient/arrow_right_disabled.png", "styles/gradient/arrow_right_disabled.png");
			type.set ("styles/gradient/arrow_right_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/gradient/arrow_up.png", "styles/gradient/arrow_up.png");
			type.set ("styles/gradient/arrow_up.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/gradient/arrow_up_disabled.png", "styles/gradient/arrow_up_disabled.png");
			type.set ("styles/gradient/arrow_up_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/gradient/circle_dark.png", "styles/gradient/circle_dark.png");
			type.set ("styles/gradient/circle_dark.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/gradient/cross_dark.png", "styles/gradient/cross_dark.png");
			type.set ("styles/gradient/cross_dark.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/gradient/cross_dark_disabled.png", "styles/gradient/cross_dark_disabled.png");
			type.set ("styles/gradient/cross_dark_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/gradient/gradient.css", "styles/gradient/gradient.css");
			type.set ("styles/gradient/gradient.css", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("styles/gradient/gradient.min.css", "styles/gradient/gradient.min.css");
			type.set ("styles/gradient/gradient.min.css", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("styles/gradient/gradient_mobile.css", "styles/gradient/gradient_mobile.css");
			type.set ("styles/gradient/gradient_mobile.css", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("styles/gradient/gripper_horizontal.png", "styles/gradient/gripper_horizontal.png");
			type.set ("styles/gradient/gripper_horizontal.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/gradient/gripper_horizontal_disabled.png", "styles/gradient/gripper_horizontal_disabled.png");
			type.set ("styles/gradient/gripper_horizontal_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/gradient/gripper_vertical.png", "styles/gradient/gripper_vertical.png");
			type.set ("styles/gradient/gripper_vertical.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/gradient/gripper_vertical_disabled.png", "styles/gradient/gripper_vertical_disabled.png");
			type.set ("styles/gradient/gripper_vertical_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/accordion.css", "styles/windows/accordion.css");
			type.set ("styles/windows/accordion.css", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("styles/windows/button.png", "styles/windows/button.png");
			type.set ("styles/windows/button.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/buttons.css", "styles/windows/buttons.css");
			type.set ("styles/windows/buttons.css", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("styles/windows/calendar.css", "styles/windows/calendar.css");
			type.set ("styles/windows/calendar.css", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("styles/windows/checkbox.png", "styles/windows/checkbox.png");
			type.set ("styles/windows/checkbox.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/container.png", "styles/windows/container.png");
			type.set ("styles/windows/container.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/glyphs/down_arrow.png", "styles/windows/glyphs/down_arrow.png");
			type.set ("styles/windows/glyphs/down_arrow.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/glyphs/hscroll_thumb_gripper_down.png", "styles/windows/glyphs/hscroll_thumb_gripper_down.png");
			type.set ("styles/windows/glyphs/hscroll_thumb_gripper_down.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/glyphs/hscroll_thumb_gripper_over.png", "styles/windows/glyphs/hscroll_thumb_gripper_over.png");
			type.set ("styles/windows/glyphs/hscroll_thumb_gripper_over.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/glyphs/hscroll_thumb_gripper_up.png", "styles/windows/glyphs/hscroll_thumb_gripper_up.png");
			type.set ("styles/windows/glyphs/hscroll_thumb_gripper_up.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/glyphs/left_arrow.png", "styles/windows/glyphs/left_arrow.png");
			type.set ("styles/windows/glyphs/left_arrow.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/glyphs/right_arrow.png", "styles/windows/glyphs/right_arrow.png");
			type.set ("styles/windows/glyphs/right_arrow.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/glyphs/up_arrow.png", "styles/windows/glyphs/up_arrow.png");
			type.set ("styles/windows/glyphs/up_arrow.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/glyphs/vscroll_thumb_gripper_down.png", "styles/windows/glyphs/vscroll_thumb_gripper_down.png");
			type.set ("styles/windows/glyphs/vscroll_thumb_gripper_down.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/glyphs/vscroll_thumb_gripper_over.png", "styles/windows/glyphs/vscroll_thumb_gripper_over.png");
			type.set ("styles/windows/glyphs/vscroll_thumb_gripper_over.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/glyphs/vscroll_thumb_gripper_up.png", "styles/windows/glyphs/vscroll_thumb_gripper_up.png");
			type.set ("styles/windows/glyphs/vscroll_thumb_gripper_up.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/hprogress.png", "styles/windows/hprogress.png");
			type.set ("styles/windows/hprogress.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/hscroll.png", "styles/windows/hscroll.png");
			type.set ("styles/windows/hscroll.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/listview.css", "styles/windows/listview.css");
			type.set ("styles/windows/listview.css", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("styles/windows/listview.png", "styles/windows/listview.png");
			type.set ("styles/windows/listview.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/menus.css", "styles/windows/menus.css");
			type.set ("styles/windows/menus.css", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("styles/windows/optionbox.png", "styles/windows/optionbox.png");
			type.set ("styles/windows/optionbox.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/popup.png", "styles/windows/popup.png");
			type.set ("styles/windows/popup.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/popups.css", "styles/windows/popups.css");
			type.set ("styles/windows/popups.css", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("styles/windows/rtf.css", "styles/windows/rtf.css");
			type.set ("styles/windows/rtf.css", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("styles/windows/scrolls.css", "styles/windows/scrolls.css");
			type.set ("styles/windows/scrolls.css", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("styles/windows/sliders.css", "styles/windows/sliders.css");
			type.set ("styles/windows/sliders.css", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("styles/windows/tab.png", "styles/windows/tab.png");
			type.set ("styles/windows/tab.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/tabs.css", "styles/windows/tabs.css");
			type.set ("styles/windows/tabs.css", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("styles/windows/textinput.png", "styles/windows/textinput.png");
			type.set ("styles/windows/textinput.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/vprogress.png", "styles/windows/vprogress.png");
			type.set ("styles/windows/vprogress.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/vscroll.png", "styles/windows/vscroll.png");
			type.set ("styles/windows/vscroll.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/windows.css", "styles/windows/windows.css");
			type.set ("styles/windows/windows.css", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("img/rtfview/edit-alignment-center.png", "img/rtfview/edit-alignment-center.png");
			type.set ("img/rtfview/edit-alignment-center.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("img/rtfview/edit-alignment-justify.png", "img/rtfview/edit-alignment-justify.png");
			type.set ("img/rtfview/edit-alignment-justify.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("img/rtfview/edit-alignment-left.png", "img/rtfview/edit-alignment-left.png");
			type.set ("img/rtfview/edit-alignment-left.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("img/rtfview/edit-alignment-right.png", "img/rtfview/edit-alignment-right.png");
			type.set ("img/rtfview/edit-alignment-right.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("img/rtfview/edit-bold.png", "img/rtfview/edit-bold.png");
			type.set ("img/rtfview/edit-bold.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("img/rtfview/edit-italic.png", "img/rtfview/edit-italic.png");
			type.set ("img/rtfview/edit-italic.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("img/rtfview/edit-list.png", "img/rtfview/edit-list.png");
			type.set ("img/rtfview/edit-list.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("img/rtfview/edit-underline.png", "img/rtfview/edit-underline.png");
			type.set ("img/rtfview/edit-underline.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("img/slinky_small.jpg", "img/slinky_small.jpg");
			type.set ("img/slinky_small.jpg", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("img/slinky_tiny.jpg", "img/slinky_tiny.jpg");
			type.set ("img/slinky_tiny.jpg", Reflect.field (AssetType, "image".toUpperCase ()));
			
			
			initialized = true;
			
		} //!initialized
		
	} //initialize
	
	
} //AssetData
