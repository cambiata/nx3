package lime;


import lime.utils.Assets;


class AssetData {

	private static var initialized:Bool = false;
	
	public static var library = new #if haxe3 Map <String, #else Hash <#end LibraryType> ();
	public static var path = new #if haxe3 Map <String, #else Hash <#end String> ();
	public static var type = new #if haxe3 Map <String, #else Hash <#end AssetType> ();	
	
	public static function initialize():Void {
		
		if (!initialized) {
			
			path.set ("styles/default/circle.png", "styles/default/circle.png");
			type.set ("styles/default/circle.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/default/collapse.png", "styles/default/collapse.png");
			type.set ("styles/default/collapse.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/default/cross.png", "styles/default/cross.png");
			type.set ("styles/default/cross.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/default/expand.png", "styles/default/expand.png");
			type.set ("styles/default/expand.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/default/up_down.png", "styles/default/up_down.png");
			type.set ("styles/default/up_down.png", Reflect.field (AssetType, "image".toUpperCase ()));
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
			path.set ("styles/gradient/gradient_mobile.min.css", "styles/gradient/gradient_mobile.min.css");
			type.set ("styles/gradient/gradient_mobile.min.css", Reflect.field (AssetType, "text".toUpperCase ()));
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
			path.set ("styles/windows/accordion.min.css", "styles/windows/accordion.min.css");
			type.set ("styles/windows/accordion.min.css", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("styles/windows/button.png", "styles/windows/button.png");
			type.set ("styles/windows/button.png", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("styles/windows/buttons.css", "styles/windows/buttons.css");
			type.set ("styles/windows/buttons.css", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("styles/windows/buttons.min.css", "styles/windows/buttons.min.css");
			type.set ("styles/windows/buttons.min.css", Reflect.field (AssetType, "text".toUpperCase ()));
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
			path.set ("styles/windows/listview.min.css", "styles/windows/listview.min.css");
			type.set ("styles/windows/listview.min.css", Reflect.field (AssetType, "text".toUpperCase ()));
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
			path.set ("styles/windows/scrolls.min.css", "styles/windows/scrolls.min.css");
			type.set ("styles/windows/scrolls.min.css", Reflect.field (AssetType, "text".toUpperCase ()));
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
			path.set ("img/slinky_small.jpg", "img/slinky_small.jpg");
			type.set ("img/slinky_small.jpg", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("img/slinky_tiny.jpg", "img/slinky_tiny.jpg");
			type.set ("img/slinky_tiny.jpg", Reflect.field (AssetType, "image".toUpperCase ()));
			path.set ("fonts/Oxygen-Bold.ttf", "fonts/Oxygen-Bold.ttf");
			type.set ("fonts/Oxygen-Bold.ttf", Reflect.field (AssetType, "font".toUpperCase ()));
			path.set ("fonts/Oxygen.ttf", "fonts/Oxygen.ttf");
			type.set ("fonts/Oxygen.ttf", Reflect.field (AssetType, "font".toUpperCase ()));
			path.set ("wav/48.data", "wav/48.data");
			type.set ("wav/48.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/49.data", "wav/49.data");
			type.set ("wav/49.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/50.data", "wav/50.data");
			type.set ("wav/50.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/51.data", "wav/51.data");
			type.set ("wav/51.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/52.data", "wav/52.data");
			type.set ("wav/52.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/53.data", "wav/53.data");
			type.set ("wav/53.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/54.data", "wav/54.data");
			type.set ("wav/54.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/55.data", "wav/55.data");
			type.set ("wav/55.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/56.data", "wav/56.data");
			type.set ("wav/56.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/57.data", "wav/57.data");
			type.set ("wav/57.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/58.data", "wav/58.data");
			type.set ("wav/58.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/59.data", "wav/59.data");
			type.set ("wav/59.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/60.data", "wav/60.data");
			type.set ("wav/60.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/61.data", "wav/61.data");
			type.set ("wav/61.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/62.data", "wav/62.data");
			type.set ("wav/62.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/63.data", "wav/63.data");
			type.set ("wav/63.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/64.data", "wav/64.data");
			type.set ("wav/64.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/65.data", "wav/65.data");
			type.set ("wav/65.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/66.data", "wav/66.data");
			type.set ("wav/66.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/67.data", "wav/67.data");
			type.set ("wav/67.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/68.data", "wav/68.data");
			type.set ("wav/68.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/69.data", "wav/69.data");
			type.set ("wav/69.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/70.data", "wav/70.data");
			type.set ("wav/70.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/71.data", "wav/71.data");
			type.set ("wav/71.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/72.data", "wav/72.data");
			type.set ("wav/72.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/73.data", "wav/73.data");
			type.set ("wav/73.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/74.data", "wav/74.data");
			type.set ("wav/74.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/75.data", "wav/75.data");
			type.set ("wav/75.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/76.data", "wav/76.data");
			type.set ("wav/76.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/77.data", "wav/77.data");
			type.set ("wav/77.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/78.data", "wav/78.data");
			type.set ("wav/78.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/79.data", "wav/79.data");
			type.set ("wav/79.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/80.data", "wav/80.data");
			type.set ("wav/80.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/81.data", "wav/81.data");
			type.set ("wav/81.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/82.data", "wav/82.data");
			type.set ("wav/82.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/83.data", "wav/83.data");
			type.set ("wav/83.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/84.data", "wav/84.data");
			type.set ("wav/84.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/85.data", "wav/85.data");
			type.set ("wav/85.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/86.data", "wav/86.data");
			type.set ("wav/86.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/87.data", "wav/87.data");
			type.set ("wav/87.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/88.data", "wav/88.data");
			type.set ("wav/88.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/89.data", "wav/89.data");
			type.set ("wav/89.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/90.data", "wav/90.data");
			type.set ("wav/90.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/91.data", "wav/91.data");
			type.set ("wav/91.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/92.data", "wav/92.data");
			type.set ("wav/92.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/93.data", "wav/93.data");
			type.set ("wav/93.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/94.data", "wav/94.data");
			type.set ("wav/94.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/95.data", "wav/95.data");
			type.set ("wav/95.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/96.data", "wav/96.data");
			type.set ("wav/96.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/controllers.xml", "assets/controllers.xml");
			type.set ("assets/controllers.xml", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("assets/openfl.svg", "assets/openfl.svg");
			type.set ("assets/openfl.svg", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("assets/scorematerial.xml", "assets/scorematerial.xml");
			type.set ("assets/scorematerial.xml", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("assets/scorepalette.xml", "assets/scorepalette.xml");
			type.set ("assets/scorepalette.xml", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("assets/scorerandom.xml", "assets/scorerandom.xml");
			type.set ("assets/scorerandom.xml", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("assets/scoresprite.xml", "assets/scoresprite.xml");
			type.set ("assets/scoresprite.xml", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("assets/scorexml.xml", "assets/scorexml.xml");
			type.set ("assets/scorexml.xml", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("assets/wav/48.data", "assets/wav/48.data");
			type.set ("assets/wav/48.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/49.data", "assets/wav/49.data");
			type.set ("assets/wav/49.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/50.data", "assets/wav/50.data");
			type.set ("assets/wav/50.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/51.data", "assets/wav/51.data");
			type.set ("assets/wav/51.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/52.data", "assets/wav/52.data");
			type.set ("assets/wav/52.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/53.data", "assets/wav/53.data");
			type.set ("assets/wav/53.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/54.data", "assets/wav/54.data");
			type.set ("assets/wav/54.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/55.data", "assets/wav/55.data");
			type.set ("assets/wav/55.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/56.data", "assets/wav/56.data");
			type.set ("assets/wav/56.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/57.data", "assets/wav/57.data");
			type.set ("assets/wav/57.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/58.data", "assets/wav/58.data");
			type.set ("assets/wav/58.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/59.data", "assets/wav/59.data");
			type.set ("assets/wav/59.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/60.data", "assets/wav/60.data");
			type.set ("assets/wav/60.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/61.data", "assets/wav/61.data");
			type.set ("assets/wav/61.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/62.data", "assets/wav/62.data");
			type.set ("assets/wav/62.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/63.data", "assets/wav/63.data");
			type.set ("assets/wav/63.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/64.data", "assets/wav/64.data");
			type.set ("assets/wav/64.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/65.data", "assets/wav/65.data");
			type.set ("assets/wav/65.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/66.data", "assets/wav/66.data");
			type.set ("assets/wav/66.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/67.data", "assets/wav/67.data");
			type.set ("assets/wav/67.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/68.data", "assets/wav/68.data");
			type.set ("assets/wav/68.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/69.data", "assets/wav/69.data");
			type.set ("assets/wav/69.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/70.data", "assets/wav/70.data");
			type.set ("assets/wav/70.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/71.data", "assets/wav/71.data");
			type.set ("assets/wav/71.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/72.data", "assets/wav/72.data");
			type.set ("assets/wav/72.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/73.data", "assets/wav/73.data");
			type.set ("assets/wav/73.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/74.data", "assets/wav/74.data");
			type.set ("assets/wav/74.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/75.data", "assets/wav/75.data");
			type.set ("assets/wav/75.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/76.data", "assets/wav/76.data");
			type.set ("assets/wav/76.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/77.data", "assets/wav/77.data");
			type.set ("assets/wav/77.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/78.data", "assets/wav/78.data");
			type.set ("assets/wav/78.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/79.data", "assets/wav/79.data");
			type.set ("assets/wav/79.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/80.data", "assets/wav/80.data");
			type.set ("assets/wav/80.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/81.data", "assets/wav/81.data");
			type.set ("assets/wav/81.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/82.data", "assets/wav/82.data");
			type.set ("assets/wav/82.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/83.data", "assets/wav/83.data");
			type.set ("assets/wav/83.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/84.data", "assets/wav/84.data");
			type.set ("assets/wav/84.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/85.data", "assets/wav/85.data");
			type.set ("assets/wav/85.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/86.data", "assets/wav/86.data");
			type.set ("assets/wav/86.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/87.data", "assets/wav/87.data");
			type.set ("assets/wav/87.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/88.data", "assets/wav/88.data");
			type.set ("assets/wav/88.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/89.data", "assets/wav/89.data");
			type.set ("assets/wav/89.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/90.data", "assets/wav/90.data");
			type.set ("assets/wav/90.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/91.data", "assets/wav/91.data");
			type.set ("assets/wav/91.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/92.data", "assets/wav/92.data");
			type.set ("assets/wav/92.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/93.data", "assets/wav/93.data");
			type.set ("assets/wav/93.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/94.data", "assets/wav/94.data");
			type.set ("assets/wav/94.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/95.data", "assets/wav/95.data");
			type.set ("assets/wav/95.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/wav/96.data", "assets/wav/96.data");
			type.set ("assets/wav/96.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			
			
			initialized = true;
			
		} //!initialized
		
	} //initialize
	
	
} //AssetData
