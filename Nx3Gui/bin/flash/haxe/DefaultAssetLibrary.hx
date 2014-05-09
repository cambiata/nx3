package;


import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.MovieClip;
import flash.text.Font;
import flash.media.Sound;
import flash.net.URLRequest;
import flash.utils.ByteArray;
import haxe.Unserializer;
import openfl.Assets;

#if (flash || js)
import flash.display.Loader;
import flash.events.Event;
import flash.net.URLLoader;
#end

#if ios
import openfl.utils.SystemPath;
#end


@:access(flash.media.Sound)
class DefaultAssetLibrary extends AssetLibrary {
	
	
	public static var className (default, null) = new Map <String, Dynamic> ();
	public static var path (default, null) = new Map <String, String> ();
	public static var type (default, null) = new Map <String, AssetType> ();
	
	public function new () {
		
		super ();
		
		#if flash
		
		className.set ("styles/gradient/arrow_down.png", __ASSET__styles_gradient_arrow_down_png);
		type.set ("styles/gradient/arrow_down.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/gradient/arrow_down_dark.png", __ASSET__styles_gradient_arrow_down_dark_png);
		type.set ("styles/gradient/arrow_down_dark.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/gradient/arrow_down_disabled.png", __ASSET__styles_gradient_arrow_down_disabled_png);
		type.set ("styles/gradient/arrow_down_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/gradient/arrow_left.png", __ASSET__styles_gradient_arrow_left_png);
		type.set ("styles/gradient/arrow_left.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/gradient/arrow_left_disabled.png", __ASSET__styles_gradient_arrow_left_disabled_png);
		type.set ("styles/gradient/arrow_left_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/gradient/arrow_right.png", __ASSET__styles_gradient_arrow_right_png);
		type.set ("styles/gradient/arrow_right.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/gradient/arrow_right2.png", __ASSET__styles_gradient_arrow_right2_png);
		type.set ("styles/gradient/arrow_right2.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/gradient/arrow_right_dark.png", __ASSET__styles_gradient_arrow_right_dark_png);
		type.set ("styles/gradient/arrow_right_dark.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/gradient/arrow_right_disabled.png", __ASSET__styles_gradient_arrow_right_disabled_png);
		type.set ("styles/gradient/arrow_right_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/gradient/arrow_up.png", __ASSET__styles_gradient_arrow_up_png);
		type.set ("styles/gradient/arrow_up.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/gradient/arrow_up_disabled.png", __ASSET__styles_gradient_arrow_up_disabled_png);
		type.set ("styles/gradient/arrow_up_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/gradient/circle_dark.png", __ASSET__styles_gradient_circle_dark_png);
		type.set ("styles/gradient/circle_dark.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/gradient/cross_dark.png", __ASSET__styles_gradient_cross_dark_png);
		type.set ("styles/gradient/cross_dark.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/gradient/cross_dark_disabled.png", __ASSET__styles_gradient_cross_dark_disabled_png);
		type.set ("styles/gradient/cross_dark_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/gradient/gradient.css", __ASSET__styles_gradient_gradient_css);
		type.set ("styles/gradient/gradient.css", Reflect.field (AssetType, "text".toUpperCase ()));
		className.set ("styles/gradient/gradient.min.css", __ASSET__styles_gradient_gradient_min_css);
		type.set ("styles/gradient/gradient.min.css", Reflect.field (AssetType, "text".toUpperCase ()));
		className.set ("styles/gradient/gradient_mobile.css", __ASSET__styles_gradient_gradient_mobile_css);
		type.set ("styles/gradient/gradient_mobile.css", Reflect.field (AssetType, "text".toUpperCase ()));
		className.set ("styles/gradient/gripper_horizontal.png", __ASSET__styles_gradient_gripper_horizontal_png);
		type.set ("styles/gradient/gripper_horizontal.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/gradient/gripper_horizontal_disabled.png", __ASSET__styles_gradient_gripper_horizontal_disabled_png);
		type.set ("styles/gradient/gripper_horizontal_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/gradient/gripper_vertical.png", __ASSET__styles_gradient_gripper_vertical_png);
		type.set ("styles/gradient/gripper_vertical.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/gradient/gripper_vertical_disabled.png", __ASSET__styles_gradient_gripper_vertical_disabled_png);
		type.set ("styles/gradient/gripper_vertical_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/accordion.css", __ASSET__styles_windows_accordion_css);
		type.set ("styles/windows/accordion.css", Reflect.field (AssetType, "text".toUpperCase ()));
		className.set ("styles/windows/button.png", __ASSET__styles_windows_button_png);
		type.set ("styles/windows/button.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/buttons.css", __ASSET__styles_windows_buttons_css);
		type.set ("styles/windows/buttons.css", Reflect.field (AssetType, "text".toUpperCase ()));
		className.set ("styles/windows/calendar.css", __ASSET__styles_windows_calendar_css);
		type.set ("styles/windows/calendar.css", Reflect.field (AssetType, "text".toUpperCase ()));
		className.set ("styles/windows/checkbox.png", __ASSET__styles_windows_checkbox_png);
		type.set ("styles/windows/checkbox.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/container.png", __ASSET__styles_windows_container_png);
		type.set ("styles/windows/container.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/glyphs/down_arrow.png", __ASSET__styles_windows_glyphs_down_arrow_png);
		type.set ("styles/windows/glyphs/down_arrow.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/glyphs/hscroll_thumb_gripper_down.png", __ASSET__styles_windows_glyphs_hscroll_thumb_gripper_down_png);
		type.set ("styles/windows/glyphs/hscroll_thumb_gripper_down.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/glyphs/hscroll_thumb_gripper_over.png", __ASSET__styles_windows_glyphs_hscroll_thumb_gripper_over_png);
		type.set ("styles/windows/glyphs/hscroll_thumb_gripper_over.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/glyphs/hscroll_thumb_gripper_up.png", __ASSET__styles_windows_glyphs_hscroll_thumb_gripper_up_png);
		type.set ("styles/windows/glyphs/hscroll_thumb_gripper_up.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/glyphs/left_arrow.png", __ASSET__styles_windows_glyphs_left_arrow_png);
		type.set ("styles/windows/glyphs/left_arrow.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/glyphs/right_arrow.png", __ASSET__styles_windows_glyphs_right_arrow_png);
		type.set ("styles/windows/glyphs/right_arrow.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/glyphs/up_arrow.png", __ASSET__styles_windows_glyphs_up_arrow_png);
		type.set ("styles/windows/glyphs/up_arrow.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/glyphs/vscroll_thumb_gripper_down.png", __ASSET__styles_windows_glyphs_vscroll_thumb_gripper_down_png);
		type.set ("styles/windows/glyphs/vscroll_thumb_gripper_down.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/glyphs/vscroll_thumb_gripper_over.png", __ASSET__styles_windows_glyphs_vscroll_thumb_gripper_over_png);
		type.set ("styles/windows/glyphs/vscroll_thumb_gripper_over.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/glyphs/vscroll_thumb_gripper_up.png", __ASSET__styles_windows_glyphs_vscroll_thumb_gripper_up_png);
		type.set ("styles/windows/glyphs/vscroll_thumb_gripper_up.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/hprogress.png", __ASSET__styles_windows_hprogress_png);
		type.set ("styles/windows/hprogress.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/hscroll.png", __ASSET__styles_windows_hscroll_png);
		type.set ("styles/windows/hscroll.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/listview.css", __ASSET__styles_windows_listview_css);
		type.set ("styles/windows/listview.css", Reflect.field (AssetType, "text".toUpperCase ()));
		className.set ("styles/windows/listview.png", __ASSET__styles_windows_listview_png);
		type.set ("styles/windows/listview.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/menus.css", __ASSET__styles_windows_menus_css);
		type.set ("styles/windows/menus.css", Reflect.field (AssetType, "text".toUpperCase ()));
		className.set ("styles/windows/optionbox.png", __ASSET__styles_windows_optionbox_png);
		type.set ("styles/windows/optionbox.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/popup.png", __ASSET__styles_windows_popup_png);
		type.set ("styles/windows/popup.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/popups.css", __ASSET__styles_windows_popups_css);
		type.set ("styles/windows/popups.css", Reflect.field (AssetType, "text".toUpperCase ()));
		className.set ("styles/windows/rtf.css", __ASSET__styles_windows_rtf_css);
		type.set ("styles/windows/rtf.css", Reflect.field (AssetType, "text".toUpperCase ()));
		className.set ("styles/windows/scrolls.css", __ASSET__styles_windows_scrolls_css);
		type.set ("styles/windows/scrolls.css", Reflect.field (AssetType, "text".toUpperCase ()));
		className.set ("styles/windows/sliders.css", __ASSET__styles_windows_sliders_css);
		type.set ("styles/windows/sliders.css", Reflect.field (AssetType, "text".toUpperCase ()));
		className.set ("styles/windows/tab.png", __ASSET__styles_windows_tab_png);
		type.set ("styles/windows/tab.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/tabs.css", __ASSET__styles_windows_tabs_css);
		type.set ("styles/windows/tabs.css", Reflect.field (AssetType, "text".toUpperCase ()));
		className.set ("styles/windows/textinput.png", __ASSET__styles_windows_textinput_png);
		type.set ("styles/windows/textinput.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/vprogress.png", __ASSET__styles_windows_vprogress_png);
		type.set ("styles/windows/vprogress.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/vscroll.png", __ASSET__styles_windows_vscroll_png);
		type.set ("styles/windows/vscroll.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("styles/windows/windows.css", __ASSET__styles_windows_windows_css);
		type.set ("styles/windows/windows.css", Reflect.field (AssetType, "text".toUpperCase ()));
		className.set ("img/rtfview/edit-alignment-center.png", __ASSET__img_rtfview_edit_alignment_center_png);
		type.set ("img/rtfview/edit-alignment-center.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("img/rtfview/edit-alignment-justify.png", __ASSET__img_rtfview_edit_alignment_justify_png);
		type.set ("img/rtfview/edit-alignment-justify.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("img/rtfview/edit-alignment-left.png", __ASSET__img_rtfview_edit_alignment_left_png);
		type.set ("img/rtfview/edit-alignment-left.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("img/rtfview/edit-alignment-right.png", __ASSET__img_rtfview_edit_alignment_right_png);
		type.set ("img/rtfview/edit-alignment-right.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("img/rtfview/edit-bold.png", __ASSET__img_rtfview_edit_bold_png);
		type.set ("img/rtfview/edit-bold.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("img/rtfview/edit-italic.png", __ASSET__img_rtfview_edit_italic_png);
		type.set ("img/rtfview/edit-italic.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("img/rtfview/edit-list.png", __ASSET__img_rtfview_edit_list_png);
		type.set ("img/rtfview/edit-list.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("img/rtfview/edit-underline.png", __ASSET__img_rtfview_edit_underline_png);
		type.set ("img/rtfview/edit-underline.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("img/slinky_small.jpg", __ASSET__img_slinky_small_jpg);
		type.set ("img/slinky_small.jpg", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("img/slinky_tiny.jpg", __ASSET__img_slinky_tiny_jpg);
		type.set ("img/slinky_tiny.jpg", Reflect.field (AssetType, "image".toUpperCase ()));
		
		
		#elseif html5
		
		addExternal("styles/gradient/arrow_down.png", "image", "styles/gradient/arrow_down.png");
		addExternal("styles/gradient/arrow_down_dark.png", "image", "styles/gradient/arrow_down_dark.png");
		addExternal("styles/gradient/arrow_down_disabled.png", "image", "styles/gradient/arrow_down_disabled.png");
		addExternal("styles/gradient/arrow_left.png", "image", "styles/gradient/arrow_left.png");
		addExternal("styles/gradient/arrow_left_disabled.png", "image", "styles/gradient/arrow_left_disabled.png");
		addExternal("styles/gradient/arrow_right.png", "image", "styles/gradient/arrow_right.png");
		addExternal("styles/gradient/arrow_right2.png", "image", "styles/gradient/arrow_right2.png");
		addExternal("styles/gradient/arrow_right_dark.png", "image", "styles/gradient/arrow_right_dark.png");
		addExternal("styles/gradient/arrow_right_disabled.png", "image", "styles/gradient/arrow_right_disabled.png");
		addExternal("styles/gradient/arrow_up.png", "image", "styles/gradient/arrow_up.png");
		addExternal("styles/gradient/arrow_up_disabled.png", "image", "styles/gradient/arrow_up_disabled.png");
		addExternal("styles/gradient/circle_dark.png", "image", "styles/gradient/circle_dark.png");
		addExternal("styles/gradient/cross_dark.png", "image", "styles/gradient/cross_dark.png");
		addExternal("styles/gradient/cross_dark_disabled.png", "image", "styles/gradient/cross_dark_disabled.png");
		addExternal("styles/gradient/gradient.css", "text", "styles/gradient/gradient.css");
		addExternal("styles/gradient/gradient.min.css", "text", "styles/gradient/gradient.min.css");
		addExternal("styles/gradient/gradient_mobile.css", "text", "styles/gradient/gradient_mobile.css");
		addExternal("styles/gradient/gripper_horizontal.png", "image", "styles/gradient/gripper_horizontal.png");
		addExternal("styles/gradient/gripper_horizontal_disabled.png", "image", "styles/gradient/gripper_horizontal_disabled.png");
		addExternal("styles/gradient/gripper_vertical.png", "image", "styles/gradient/gripper_vertical.png");
		addExternal("styles/gradient/gripper_vertical_disabled.png", "image", "styles/gradient/gripper_vertical_disabled.png");
		addExternal("styles/windows/accordion.css", "text", "styles/windows/accordion.css");
		addExternal("styles/windows/button.png", "image", "styles/windows/button.png");
		addExternal("styles/windows/buttons.css", "text", "styles/windows/buttons.css");
		addExternal("styles/windows/calendar.css", "text", "styles/windows/calendar.css");
		addExternal("styles/windows/checkbox.png", "image", "styles/windows/checkbox.png");
		addExternal("styles/windows/container.png", "image", "styles/windows/container.png");
		addExternal("styles/windows/glyphs/down_arrow.png", "image", "styles/windows/glyphs/down_arrow.png");
		addExternal("styles/windows/glyphs/hscroll_thumb_gripper_down.png", "image", "styles/windows/glyphs/hscroll_thumb_gripper_down.png");
		addExternal("styles/windows/glyphs/hscroll_thumb_gripper_over.png", "image", "styles/windows/glyphs/hscroll_thumb_gripper_over.png");
		addExternal("styles/windows/glyphs/hscroll_thumb_gripper_up.png", "image", "styles/windows/glyphs/hscroll_thumb_gripper_up.png");
		addExternal("styles/windows/glyphs/left_arrow.png", "image", "styles/windows/glyphs/left_arrow.png");
		addExternal("styles/windows/glyphs/right_arrow.png", "image", "styles/windows/glyphs/right_arrow.png");
		addExternal("styles/windows/glyphs/up_arrow.png", "image", "styles/windows/glyphs/up_arrow.png");
		addExternal("styles/windows/glyphs/vscroll_thumb_gripper_down.png", "image", "styles/windows/glyphs/vscroll_thumb_gripper_down.png");
		addExternal("styles/windows/glyphs/vscroll_thumb_gripper_over.png", "image", "styles/windows/glyphs/vscroll_thumb_gripper_over.png");
		addExternal("styles/windows/glyphs/vscroll_thumb_gripper_up.png", "image", "styles/windows/glyphs/vscroll_thumb_gripper_up.png");
		addExternal("styles/windows/hprogress.png", "image", "styles/windows/hprogress.png");
		addExternal("styles/windows/hscroll.png", "image", "styles/windows/hscroll.png");
		addExternal("styles/windows/listview.css", "text", "styles/windows/listview.css");
		addExternal("styles/windows/listview.png", "image", "styles/windows/listview.png");
		addExternal("styles/windows/menus.css", "text", "styles/windows/menus.css");
		addExternal("styles/windows/optionbox.png", "image", "styles/windows/optionbox.png");
		addExternal("styles/windows/popup.png", "image", "styles/windows/popup.png");
		addExternal("styles/windows/popups.css", "text", "styles/windows/popups.css");
		addExternal("styles/windows/rtf.css", "text", "styles/windows/rtf.css");
		addExternal("styles/windows/scrolls.css", "text", "styles/windows/scrolls.css");
		addExternal("styles/windows/sliders.css", "text", "styles/windows/sliders.css");
		addExternal("styles/windows/tab.png", "image", "styles/windows/tab.png");
		addExternal("styles/windows/tabs.css", "text", "styles/windows/tabs.css");
		addExternal("styles/windows/textinput.png", "image", "styles/windows/textinput.png");
		addExternal("styles/windows/vprogress.png", "image", "styles/windows/vprogress.png");
		addExternal("styles/windows/vscroll.png", "image", "styles/windows/vscroll.png");
		addExternal("styles/windows/windows.css", "text", "styles/windows/windows.css");
		addExternal("img/rtfview/edit-alignment-center.png", "image", "img/rtfview/edit-alignment-center.png");
		addExternal("img/rtfview/edit-alignment-justify.png", "image", "img/rtfview/edit-alignment-justify.png");
		addExternal("img/rtfview/edit-alignment-left.png", "image", "img/rtfview/edit-alignment-left.png");
		addExternal("img/rtfview/edit-alignment-right.png", "image", "img/rtfview/edit-alignment-right.png");
		addExternal("img/rtfview/edit-bold.png", "image", "img/rtfview/edit-bold.png");
		addExternal("img/rtfview/edit-italic.png", "image", "img/rtfview/edit-italic.png");
		addExternal("img/rtfview/edit-list.png", "image", "img/rtfview/edit-list.png");
		addExternal("img/rtfview/edit-underline.png", "image", "img/rtfview/edit-underline.png");
		addExternal("img/slinky_small.jpg", "image", "img/slinky_small.jpg");
		addExternal("img/slinky_tiny.jpg", "image", "img/slinky_tiny.jpg");
		
		
		#else
		
		#if (windows || mac || linux)
		
		var loadManifest = false;
		
		className.set ("styles/gradient/arrow_down.png", __ASSET__styles_gradient_arrow_down_png);
		type.set ("styles/gradient/arrow_down.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/gradient/arrow_down_dark.png", __ASSET__styles_gradient_arrow_down_dark_png);
		type.set ("styles/gradient/arrow_down_dark.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/gradient/arrow_down_disabled.png", __ASSET__styles_gradient_arrow_down_disabled_png);
		type.set ("styles/gradient/arrow_down_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/gradient/arrow_left.png", __ASSET__styles_gradient_arrow_left_png);
		type.set ("styles/gradient/arrow_left.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/gradient/arrow_left_disabled.png", __ASSET__styles_gradient_arrow_left_disabled_png);
		type.set ("styles/gradient/arrow_left_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/gradient/arrow_right.png", __ASSET__styles_gradient_arrow_right_png);
		type.set ("styles/gradient/arrow_right.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/gradient/arrow_right2.png", __ASSET__styles_gradient_arrow_right2_png);
		type.set ("styles/gradient/arrow_right2.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/gradient/arrow_right_dark.png", __ASSET__styles_gradient_arrow_right_dark_png);
		type.set ("styles/gradient/arrow_right_dark.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/gradient/arrow_right_disabled.png", __ASSET__styles_gradient_arrow_right_disabled_png);
		type.set ("styles/gradient/arrow_right_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/gradient/arrow_up.png", __ASSET__styles_gradient_arrow_up_png);
		type.set ("styles/gradient/arrow_up.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/gradient/arrow_up_disabled.png", __ASSET__styles_gradient_arrow_up_disabled_png);
		type.set ("styles/gradient/arrow_up_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/gradient/circle_dark.png", __ASSET__styles_gradient_circle_dark_png);
		type.set ("styles/gradient/circle_dark.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/gradient/cross_dark.png", __ASSET__styles_gradient_cross_dark_png);
		type.set ("styles/gradient/cross_dark.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/gradient/cross_dark_disabled.png", __ASSET__styles_gradient_cross_dark_disabled_png);
		type.set ("styles/gradient/cross_dark_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/gradient/gradient.css", __ASSET__styles_gradient_gradient_css);
		type.set ("styles/gradient/gradient.css", Reflect.field (AssetType, "text".toUpperCase ()));
		
		className.set ("styles/gradient/gradient.min.css", __ASSET__styles_gradient_gradient_min_css);
		type.set ("styles/gradient/gradient.min.css", Reflect.field (AssetType, "text".toUpperCase ()));
		
		className.set ("styles/gradient/gradient_mobile.css", __ASSET__styles_gradient_gradient_mobile_css);
		type.set ("styles/gradient/gradient_mobile.css", Reflect.field (AssetType, "text".toUpperCase ()));
		
		className.set ("styles/gradient/gripper_horizontal.png", __ASSET__styles_gradient_gripper_horizontal_png);
		type.set ("styles/gradient/gripper_horizontal.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/gradient/gripper_horizontal_disabled.png", __ASSET__styles_gradient_gripper_horizontal_disabled_png);
		type.set ("styles/gradient/gripper_horizontal_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/gradient/gripper_vertical.png", __ASSET__styles_gradient_gripper_vertical_png);
		type.set ("styles/gradient/gripper_vertical.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/gradient/gripper_vertical_disabled.png", __ASSET__styles_gradient_gripper_vertical_disabled_png);
		type.set ("styles/gradient/gripper_vertical_disabled.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/accordion.css", __ASSET__styles_windows_accordion_css);
		type.set ("styles/windows/accordion.css", Reflect.field (AssetType, "text".toUpperCase ()));
		
		className.set ("styles/windows/button.png", __ASSET__styles_windows_button_png);
		type.set ("styles/windows/button.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/buttons.css", __ASSET__styles_windows_buttons_css);
		type.set ("styles/windows/buttons.css", Reflect.field (AssetType, "text".toUpperCase ()));
		
		className.set ("styles/windows/calendar.css", __ASSET__styles_windows_calendar_css);
		type.set ("styles/windows/calendar.css", Reflect.field (AssetType, "text".toUpperCase ()));
		
		className.set ("styles/windows/checkbox.png", __ASSET__styles_windows_checkbox_png);
		type.set ("styles/windows/checkbox.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/container.png", __ASSET__styles_windows_container_png);
		type.set ("styles/windows/container.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/glyphs/down_arrow.png", __ASSET__styles_windows_glyphs_down_arrow_png);
		type.set ("styles/windows/glyphs/down_arrow.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/glyphs/hscroll_thumb_gripper_down.png", __ASSET__styles_windows_glyphs_hscroll_thumb_gripper_down_png);
		type.set ("styles/windows/glyphs/hscroll_thumb_gripper_down.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/glyphs/hscroll_thumb_gripper_over.png", __ASSET__styles_windows_glyphs_hscroll_thumb_gripper_over_png);
		type.set ("styles/windows/glyphs/hscroll_thumb_gripper_over.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/glyphs/hscroll_thumb_gripper_up.png", __ASSET__styles_windows_glyphs_hscroll_thumb_gripper_up_png);
		type.set ("styles/windows/glyphs/hscroll_thumb_gripper_up.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/glyphs/left_arrow.png", __ASSET__styles_windows_glyphs_left_arrow_png);
		type.set ("styles/windows/glyphs/left_arrow.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/glyphs/right_arrow.png", __ASSET__styles_windows_glyphs_right_arrow_png);
		type.set ("styles/windows/glyphs/right_arrow.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/glyphs/up_arrow.png", __ASSET__styles_windows_glyphs_up_arrow_png);
		type.set ("styles/windows/glyphs/up_arrow.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/glyphs/vscroll_thumb_gripper_down.png", __ASSET__styles_windows_glyphs_vscroll_thumb_gripper_down_png);
		type.set ("styles/windows/glyphs/vscroll_thumb_gripper_down.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/glyphs/vscroll_thumb_gripper_over.png", __ASSET__styles_windows_glyphs_vscroll_thumb_gripper_over_png);
		type.set ("styles/windows/glyphs/vscroll_thumb_gripper_over.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/glyphs/vscroll_thumb_gripper_up.png", __ASSET__styles_windows_glyphs_vscroll_thumb_gripper_up_png);
		type.set ("styles/windows/glyphs/vscroll_thumb_gripper_up.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/hprogress.png", __ASSET__styles_windows_hprogress_png);
		type.set ("styles/windows/hprogress.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/hscroll.png", __ASSET__styles_windows_hscroll_png);
		type.set ("styles/windows/hscroll.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/listview.css", __ASSET__styles_windows_listview_css);
		type.set ("styles/windows/listview.css", Reflect.field (AssetType, "text".toUpperCase ()));
		
		className.set ("styles/windows/listview.png", __ASSET__styles_windows_listview_png);
		type.set ("styles/windows/listview.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/menus.css", __ASSET__styles_windows_menus_css);
		type.set ("styles/windows/menus.css", Reflect.field (AssetType, "text".toUpperCase ()));
		
		className.set ("styles/windows/optionbox.png", __ASSET__styles_windows_optionbox_png);
		type.set ("styles/windows/optionbox.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/popup.png", __ASSET__styles_windows_popup_png);
		type.set ("styles/windows/popup.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/popups.css", __ASSET__styles_windows_popups_css);
		type.set ("styles/windows/popups.css", Reflect.field (AssetType, "text".toUpperCase ()));
		
		className.set ("styles/windows/rtf.css", __ASSET__styles_windows_rtf_css);
		type.set ("styles/windows/rtf.css", Reflect.field (AssetType, "text".toUpperCase ()));
		
		className.set ("styles/windows/scrolls.css", __ASSET__styles_windows_scrolls_css);
		type.set ("styles/windows/scrolls.css", Reflect.field (AssetType, "text".toUpperCase ()));
		
		className.set ("styles/windows/sliders.css", __ASSET__styles_windows_sliders_css);
		type.set ("styles/windows/sliders.css", Reflect.field (AssetType, "text".toUpperCase ()));
		
		className.set ("styles/windows/tab.png", __ASSET__styles_windows_tab_png);
		type.set ("styles/windows/tab.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/tabs.css", __ASSET__styles_windows_tabs_css);
		type.set ("styles/windows/tabs.css", Reflect.field (AssetType, "text".toUpperCase ()));
		
		className.set ("styles/windows/textinput.png", __ASSET__styles_windows_textinput_png);
		type.set ("styles/windows/textinput.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/vprogress.png", __ASSET__styles_windows_vprogress_png);
		type.set ("styles/windows/vprogress.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/vscroll.png", __ASSET__styles_windows_vscroll_png);
		type.set ("styles/windows/vscroll.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("styles/windows/windows.css", __ASSET__styles_windows_windows_css);
		type.set ("styles/windows/windows.css", Reflect.field (AssetType, "text".toUpperCase ()));
		
		className.set ("img/rtfview/edit-alignment-center.png", __ASSET__img_rtfview_edit_alignment_center_png);
		type.set ("img/rtfview/edit-alignment-center.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("img/rtfview/edit-alignment-justify.png", __ASSET__img_rtfview_edit_alignment_justify_png);
		type.set ("img/rtfview/edit-alignment-justify.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("img/rtfview/edit-alignment-left.png", __ASSET__img_rtfview_edit_alignment_left_png);
		type.set ("img/rtfview/edit-alignment-left.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("img/rtfview/edit-alignment-right.png", __ASSET__img_rtfview_edit_alignment_right_png);
		type.set ("img/rtfview/edit-alignment-right.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("img/rtfview/edit-bold.png", __ASSET__img_rtfview_edit_bold_png);
		type.set ("img/rtfview/edit-bold.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("img/rtfview/edit-italic.png", __ASSET__img_rtfview_edit_italic_png);
		type.set ("img/rtfview/edit-italic.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("img/rtfview/edit-list.png", __ASSET__img_rtfview_edit_list_png);
		type.set ("img/rtfview/edit-list.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("img/rtfview/edit-underline.png", __ASSET__img_rtfview_edit_underline_png);
		type.set ("img/rtfview/edit-underline.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("img/slinky_small.jpg", __ASSET__img_slinky_small_jpg);
		type.set ("img/slinky_small.jpg", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("img/slinky_tiny.jpg", __ASSET__img_slinky_tiny_jpg);
		type.set ("img/slinky_tiny.jpg", Reflect.field (AssetType, "image".toUpperCase ()));
		
		
		#else
		
		var loadManifest = true;
		
		#end
		
		if (loadManifest) {
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
							
							var manifest:Array<AssetData> = Unserializer.run (data);
							
							for (asset in manifest) {
								
								if (!className.exists(asset.id)) {
									
									path.set (asset.id, asset.path);
									type.set (asset.id, asset.type);
									
								}
							}
						
						}
					
					}
				
				} else {
				
					trace ("Warning: Could not load asset manifest");
				
				}
			
			} catch (e:Dynamic) {
			
				trace ("Warning: Could not load asset manifest");
			
			}
		
		}
		
		#end
		
	}
	
	
	#if html5
	private function addEmbed(id:String, kind:String, value:Dynamic):Void {
		className.set(id, value);
		type.set(id, Reflect.field(AssetType, kind.toUpperCase()));
	}
	
	
	private function addExternal(id:String, kind:String, value:String):Void {
		path.set(id, value);
		type.set(id, Reflect.field(AssetType, kind.toUpperCase()));
	}
	#end
	
	
	public override function exists (id:String, type:AssetType):Bool {
		
		var assetType = DefaultAssetLibrary.type.get (id);
		
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
		
		#if pixi
		
		return null;
		
		#elseif (flash)
		
		return cast (Type.createInstance (className.get (id), []), ByteArray);
		
		#elseif openfl_html5
		
		return null;
		
		#elseif js
		
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

@:keep class __ASSET__styles_gradient_arrow_down_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_gradient_arrow_down_dark_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_gradient_arrow_down_disabled_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_gradient_arrow_left_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_gradient_arrow_left_disabled_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_gradient_arrow_right_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_gradient_arrow_right2_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_gradient_arrow_right_dark_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_gradient_arrow_right_disabled_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_gradient_arrow_up_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_gradient_arrow_up_disabled_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_gradient_circle_dark_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_gradient_cross_dark_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_gradient_cross_dark_disabled_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_gradient_gradient_css extends flash.utils.ByteArray { }
@:keep class __ASSET__styles_gradient_gradient_min_css extends flash.utils.ByteArray { }
@:keep class __ASSET__styles_gradient_gradient_mobile_css extends flash.utils.ByteArray { }
@:keep class __ASSET__styles_gradient_gripper_horizontal_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_gradient_gripper_horizontal_disabled_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_gradient_gripper_vertical_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_gradient_gripper_vertical_disabled_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_accordion_css extends flash.utils.ByteArray { }
@:keep class __ASSET__styles_windows_button_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_buttons_css extends flash.utils.ByteArray { }
@:keep class __ASSET__styles_windows_calendar_css extends flash.utils.ByteArray { }
@:keep class __ASSET__styles_windows_checkbox_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_container_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_glyphs_down_arrow_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_glyphs_hscroll_thumb_gripper_down_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_glyphs_hscroll_thumb_gripper_over_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_glyphs_hscroll_thumb_gripper_up_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_glyphs_left_arrow_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_glyphs_right_arrow_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_glyphs_up_arrow_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_glyphs_vscroll_thumb_gripper_down_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_glyphs_vscroll_thumb_gripper_over_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_glyphs_vscroll_thumb_gripper_up_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_hprogress_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_hscroll_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_listview_css extends flash.utils.ByteArray { }
@:keep class __ASSET__styles_windows_listview_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_menus_css extends flash.utils.ByteArray { }
@:keep class __ASSET__styles_windows_optionbox_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_popup_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_popups_css extends flash.utils.ByteArray { }
@:keep class __ASSET__styles_windows_rtf_css extends flash.utils.ByteArray { }
@:keep class __ASSET__styles_windows_scrolls_css extends flash.utils.ByteArray { }
@:keep class __ASSET__styles_windows_sliders_css extends flash.utils.ByteArray { }
@:keep class __ASSET__styles_windows_tab_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_tabs_css extends flash.utils.ByteArray { }
@:keep class __ASSET__styles_windows_textinput_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_vprogress_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_vscroll_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__styles_windows_windows_css extends flash.utils.ByteArray { }
@:keep class __ASSET__img_rtfview_edit_alignment_center_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__img_rtfview_edit_alignment_justify_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__img_rtfview_edit_alignment_left_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__img_rtfview_edit_alignment_right_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__img_rtfview_edit_bold_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__img_rtfview_edit_italic_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__img_rtfview_edit_list_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__img_rtfview_edit_underline_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__img_slinky_small_jpg extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__img_slinky_tiny_jpg extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }


#elseif html5



































































#elseif (windows || mac || linux)


@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/gradient/arrow_down.png") class __ASSET__styles_gradient_arrow_down_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/gradient/arrow_down_dark.png") class __ASSET__styles_gradient_arrow_down_dark_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/gradient/arrow_down_disabled.png") class __ASSET__styles_gradient_arrow_down_disabled_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/gradient/arrow_left.png") class __ASSET__styles_gradient_arrow_left_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/gradient/arrow_left_disabled.png") class __ASSET__styles_gradient_arrow_left_disabled_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/gradient/arrow_right.png") class __ASSET__styles_gradient_arrow_right_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/gradient/arrow_right2.png") class __ASSET__styles_gradient_arrow_right2_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/gradient/arrow_right_dark.png") class __ASSET__styles_gradient_arrow_right_dark_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/gradient/arrow_right_disabled.png") class __ASSET__styles_gradient_arrow_right_disabled_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/gradient/arrow_up.png") class __ASSET__styles_gradient_arrow_up_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/gradient/arrow_up_disabled.png") class __ASSET__styles_gradient_arrow_up_disabled_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/gradient/circle_dark.png") class __ASSET__styles_gradient_circle_dark_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/gradient/cross_dark.png") class __ASSET__styles_gradient_cross_dark_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/gradient/cross_dark_disabled.png") class __ASSET__styles_gradient_cross_dark_disabled_png extends flash.display.BitmapData {}
@:file("F:/_haxelib/haxeui/1,3,0/styles/gradient/gradient.css") class __ASSET__styles_gradient_gradient_css extends flash.utils.ByteArray {}
@:file("F:/_haxelib/haxeui/1,3,0/styles/gradient/gradient.min.css") class __ASSET__styles_gradient_gradient_min_css extends flash.utils.ByteArray {}
@:file("F:/_haxelib/haxeui/1,3,0/styles/gradient/gradient_mobile.css") class __ASSET__styles_gradient_gradient_mobile_css extends flash.utils.ByteArray {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/gradient/gripper_horizontal.png") class __ASSET__styles_gradient_gripper_horizontal_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/gradient/gripper_horizontal_disabled.png") class __ASSET__styles_gradient_gripper_horizontal_disabled_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/gradient/gripper_vertical.png") class __ASSET__styles_gradient_gripper_vertical_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/gradient/gripper_vertical_disabled.png") class __ASSET__styles_gradient_gripper_vertical_disabled_png extends flash.display.BitmapData {}
@:file("F:/_haxelib/haxeui/1,3,0/styles/windows/accordion.css") class __ASSET__styles_windows_accordion_css extends flash.utils.ByteArray {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/button.png") class __ASSET__styles_windows_button_png extends flash.display.BitmapData {}
@:file("F:/_haxelib/haxeui/1,3,0/styles/windows/buttons.css") class __ASSET__styles_windows_buttons_css extends flash.utils.ByteArray {}
@:file("F:/_haxelib/haxeui/1,3,0/styles/windows/calendar.css") class __ASSET__styles_windows_calendar_css extends flash.utils.ByteArray {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/checkbox.png") class __ASSET__styles_windows_checkbox_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/container.png") class __ASSET__styles_windows_container_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/glyphs/down_arrow.png") class __ASSET__styles_windows_glyphs_down_arrow_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/glyphs/hscroll_thumb_gripper_down.png") class __ASSET__styles_windows_glyphs_hscroll_thumb_gripper_down_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/glyphs/hscroll_thumb_gripper_over.png") class __ASSET__styles_windows_glyphs_hscroll_thumb_gripper_over_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/glyphs/hscroll_thumb_gripper_up.png") class __ASSET__styles_windows_glyphs_hscroll_thumb_gripper_up_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/glyphs/left_arrow.png") class __ASSET__styles_windows_glyphs_left_arrow_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/glyphs/right_arrow.png") class __ASSET__styles_windows_glyphs_right_arrow_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/glyphs/up_arrow.png") class __ASSET__styles_windows_glyphs_up_arrow_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/glyphs/vscroll_thumb_gripper_down.png") class __ASSET__styles_windows_glyphs_vscroll_thumb_gripper_down_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/glyphs/vscroll_thumb_gripper_over.png") class __ASSET__styles_windows_glyphs_vscroll_thumb_gripper_over_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/glyphs/vscroll_thumb_gripper_up.png") class __ASSET__styles_windows_glyphs_vscroll_thumb_gripper_up_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/hprogress.png") class __ASSET__styles_windows_hprogress_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/hscroll.png") class __ASSET__styles_windows_hscroll_png extends flash.display.BitmapData {}
@:file("F:/_haxelib/haxeui/1,3,0/styles/windows/listview.css") class __ASSET__styles_windows_listview_css extends flash.utils.ByteArray {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/listview.png") class __ASSET__styles_windows_listview_png extends flash.display.BitmapData {}
@:file("F:/_haxelib/haxeui/1,3,0/styles/windows/menus.css") class __ASSET__styles_windows_menus_css extends flash.utils.ByteArray {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/optionbox.png") class __ASSET__styles_windows_optionbox_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/popup.png") class __ASSET__styles_windows_popup_png extends flash.display.BitmapData {}
@:file("F:/_haxelib/haxeui/1,3,0/styles/windows/popups.css") class __ASSET__styles_windows_popups_css extends flash.utils.ByteArray {}
@:file("F:/_haxelib/haxeui/1,3,0/styles/windows/rtf.css") class __ASSET__styles_windows_rtf_css extends flash.utils.ByteArray {}
@:file("F:/_haxelib/haxeui/1,3,0/styles/windows/scrolls.css") class __ASSET__styles_windows_scrolls_css extends flash.utils.ByteArray {}
@:file("F:/_haxelib/haxeui/1,3,0/styles/windows/sliders.css") class __ASSET__styles_windows_sliders_css extends flash.utils.ByteArray {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/tab.png") class __ASSET__styles_windows_tab_png extends flash.display.BitmapData {}
@:file("F:/_haxelib/haxeui/1,3,0/styles/windows/tabs.css") class __ASSET__styles_windows_tabs_css extends flash.utils.ByteArray {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/textinput.png") class __ASSET__styles_windows_textinput_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/vprogress.png") class __ASSET__styles_windows_vprogress_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/styles/windows/vscroll.png") class __ASSET__styles_windows_vscroll_png extends flash.display.BitmapData {}
@:file("F:/_haxelib/haxeui/1,3,0/styles/windows/windows.css") class __ASSET__styles_windows_windows_css extends flash.utils.ByteArray {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/img/rtfview/edit-alignment-center.png") class __ASSET__img_rtfview_edit_alignment_center_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/img/rtfview/edit-alignment-justify.png") class __ASSET__img_rtfview_edit_alignment_justify_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/img/rtfview/edit-alignment-left.png") class __ASSET__img_rtfview_edit_alignment_left_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/img/rtfview/edit-alignment-right.png") class __ASSET__img_rtfview_edit_alignment_right_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/img/rtfview/edit-bold.png") class __ASSET__img_rtfview_edit_bold_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/img/rtfview/edit-italic.png") class __ASSET__img_rtfview_edit_italic_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/img/rtfview/edit-list.png") class __ASSET__img_rtfview_edit_list_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/img/rtfview/edit-underline.png") class __ASSET__img_rtfview_edit_underline_png extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/img/slinky_small.jpg") class __ASSET__img_slinky_small_jpg extends flash.display.BitmapData {}
@:bitmap("F:/_haxelib/haxeui/1,3,0/img/slinky_tiny.jpg") class __ASSET__img_slinky_tiny_jpg extends flash.display.BitmapData {}


#end
