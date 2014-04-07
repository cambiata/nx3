#include <hxcpp.h>

#ifndef INCLUDED_IMap
#include <IMap.h>
#endif
#ifndef INCLUDED_Reflect
#include <Reflect.h>
#endif
#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_Type
#include <Type.h>
#endif
#ifndef INCLUDED_flash_Lib
#include <flash/Lib.h>
#endif
#ifndef INCLUDED_flash_display_DisplayObject
#include <flash/display/DisplayObject.h>
#endif
#ifndef INCLUDED_flash_display_DisplayObjectContainer
#include <flash/display/DisplayObjectContainer.h>
#endif
#ifndef INCLUDED_flash_display_IBitmapDrawable
#include <flash/display/IBitmapDrawable.h>
#endif
#ifndef INCLUDED_flash_display_InteractiveObject
#include <flash/display/InteractiveObject.h>
#endif
#ifndef INCLUDED_flash_display_Sprite
#include <flash/display/Sprite.h>
#endif
#ifndef INCLUDED_flash_display_Stage
#include <flash/display/Stage.h>
#endif
#ifndef INCLUDED_flash_display_StageAlign
#include <flash/display/StageAlign.h>
#endif
#ifndef INCLUDED_flash_display_StageDisplayState
#include <flash/display/StageDisplayState.h>
#endif
#ifndef INCLUDED_flash_display_StageQuality
#include <flash/display/StageQuality.h>
#endif
#ifndef INCLUDED_flash_display_StageScaleMode
#include <flash/display/StageScaleMode.h>
#endif
#ifndef INCLUDED_flash_display_TouchInfo
#include <flash/display/TouchInfo.h>
#endif
#ifndef INCLUDED_flash_events_Event
#include <flash/events/Event.h>
#endif
#ifndef INCLUDED_flash_events_EventDispatcher
#include <flash/events/EventDispatcher.h>
#endif
#ifndef INCLUDED_flash_events_FocusEvent
#include <flash/events/FocusEvent.h>
#endif
#ifndef INCLUDED_flash_events_IEventDispatcher
#include <flash/events/IEventDispatcher.h>
#endif
#ifndef INCLUDED_flash_events_KeyboardEvent
#include <flash/events/KeyboardEvent.h>
#endif
#ifndef INCLUDED_flash_events_MouseEvent
#include <flash/events/MouseEvent.h>
#endif
#ifndef INCLUDED_flash_events_TouchEvent
#include <flash/events/TouchEvent.h>
#endif
#ifndef INCLUDED_flash_geom_Point
#include <flash/geom/Point.h>
#endif
#ifndef INCLUDED_flash_geom_Rectangle
#include <flash/geom/Rectangle.h>
#endif
#ifndef INCLUDED_flash_media_SoundChannel
#include <flash/media/SoundChannel.h>
#endif
#ifndef INCLUDED_flash_net_URLLoader
#include <flash/net/URLLoader.h>
#endif
#ifndef INCLUDED_flash_system_ScreenMode
#include <flash/system/ScreenMode.h>
#endif
#ifndef INCLUDED_flash_ui_Keyboard
#include <flash/ui/Keyboard.h>
#endif
#ifndef INCLUDED_haxe_Timer
#include <haxe/Timer.h>
#endif
#ifndef INCLUDED_haxe_ds_IntMap
#include <haxe/ds/IntMap.h>
#endif
#ifndef INCLUDED_openfl_events_JoystickEvent
#include <openfl/events/JoystickEvent.h>
#endif
#ifndef INCLUDED_openfl_events_SystemEvent
#include <openfl/events/SystemEvent.h>
#endif
namespace flash{
namespace display{

Void Stage_obj::__construct(Dynamic handle,int width,int height)
{
HX_STACK_FRAME("flash.display.Stage","new",0x57854b26,"flash.display.Stage.new","flash/display/Stage.hx",91,0x8d64160c)

HX_STACK_ARG(handle,"handle")

HX_STACK_ARG(width,"width")

HX_STACK_ARG(height,"height")
{
	HX_STACK_LINE(93)
	super::__construct(handle,HX_CSTRING("Stage"));
	HX_STACK_LINE(95)
	this->__mouseOverObjects = Array_obj< ::Dynamic >::__new();
	HX_STACK_LINE(96)
	this->__focusOverObjects = Array_obj< ::Dynamic >::__new();
	HX_STACK_LINE(97)
	this->active = true;
	HX_STACK_LINE(98)
	this->pauseWhenDeactivated = true;
	HX_STACK_LINE(104)
	this->renderRequest = null();
	HX_STACK_LINE(107)
	::flash::display::Stage_obj::lime_set_stage_handler(this->__handle,this->__processStageEvent_dyn(),width,height);
	HX_STACK_LINE(108)
	this->__invalid = false;
	HX_STACK_LINE(109)
	this->__lastRender = (int)0;
	HX_STACK_LINE(110)
	this->__lastDown = Array_obj< ::Dynamic >::__new();
	HX_STACK_LINE(111)
	this->__lastClickTime = 0.0;
	HX_STACK_LINE(112)
	this->__nextRender = (int)0;
	HX_STACK_LINE(113)
	this->set_frameRate((int)100);
	HX_STACK_LINE(114)
	this->__touchInfo = ::haxe::ds::IntMap_obj::__new();
	HX_STACK_LINE(115)
	this->__joyAxisData = ::haxe::ds::IntMap_obj::__new();
}
;
	return null();
}

//Stage_obj::~Stage_obj() { }

Dynamic Stage_obj::__CreateEmpty() { return  new Stage_obj; }
hx::ObjectPtr< Stage_obj > Stage_obj::__new(Dynamic handle,int width,int height)
{  hx::ObjectPtr< Stage_obj > result = new Stage_obj();
	result->__construct(handle,width,height);
	return result;}

Dynamic Stage_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Stage_obj > result = new Stage_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2]);
	return result;}

Void Stage_obj::invalidate( ){
{
		HX_STACK_FRAME("flash.display.Stage","invalidate",0x2f802375,"flash.display.Stage.invalidate","flash/display/Stage.hx",136,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_LINE(136)
		this->__invalid = true;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Stage_obj,invalidate,(void))

Void Stage_obj::resize( int width,int height){
{
		HX_STACK_FRAME("flash.display.Stage","resize",0xacd25eee,"flash.display.Stage.resize","flash/display/Stage.hx",143,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(width,"width")
		HX_STACK_ARG(height,"height")
		HX_STACK_LINE(143)
		::flash::display::Stage_obj::lime_stage_resize_window(this->__handle,width,height);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Stage_obj,resize,(void))

Void Stage_obj::setResolution( int width,int height){
{
		HX_STACK_FRAME("flash.display.Stage","setResolution",0x585661b4,"flash.display.Stage.setResolution","flash/display/Stage.hx",149,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(width,"width")
		HX_STACK_ARG(height,"height")
		HX_STACK_LINE(149)
		::flash::display::Stage_obj::lime_stage_set_resolution(this->__handle,width,height);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Stage_obj,setResolution,(void))

Void Stage_obj::setScreenMode( ::flash::system::ScreenMode mode){
{
		HX_STACK_FRAME("flash.display.Stage","setScreenMode",0xaba48d77,"flash.display.Stage.setScreenMode","flash/display/Stage.hx",154,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(mode,"mode")
		HX_STACK_LINE(154)
		::flash::display::Stage_obj::lime_stage_set_screenmode(this->__handle,mode->width,mode->height,mode->refreshRate,(int)0);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,setScreenMode,(void))

Void Stage_obj::setFullscreen( bool full){
{
		HX_STACK_FRAME("flash.display.Stage","setFullscreen",0xe4c166c3,"flash.display.Stage.setFullscreen","flash/display/Stage.hx",159,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(full,"full")
		HX_STACK_LINE(159)
		::flash::display::Stage_obj::lime_stage_set_fullscreen(this->__handle,full);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,setFullscreen,(void))

Void Stage_obj::showCursor( bool show){
{
		HX_STACK_FRAME("flash.display.Stage","showCursor",0x50b33dad,"flash.display.Stage.showCursor","flash/display/Stage.hx",180,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(show,"show")
		HX_STACK_LINE(180)
		::flash::display::Stage_obj::lime_stage_show_cursor(this->__handle,show);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,showCursor,(void))

Void Stage_obj::__checkFocusInOuts( Dynamic event,Array< ::Dynamic > stack){
{
		HX_STACK_FRAME("flash.display.Stage","__checkFocusInOuts",0x6461cbd4,"flash.display.Stage.__checkFocusInOuts","flash/display/Stage.hx",185,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(event,"event")
		HX_STACK_ARG(stack,"stack")
		HX_STACK_LINE(187)
		int newLength = stack->length;		HX_STACK_VAR(newLength,"newLength");
		HX_STACK_LINE(188)
		::flash::display::InteractiveObject newObject;		HX_STACK_VAR(newObject,"newObject");
		HX_STACK_LINE(188)
		if (((newLength > (int)0))){
			HX_STACK_LINE(188)
			newObject = stack->__get((newLength - (int)1)).StaticCast< ::flash::display::InteractiveObject >();
		}
		else{
			HX_STACK_LINE(188)
			newObject = null();
		}
		HX_STACK_LINE(189)
		int oldLength = this->__focusOverObjects->length;		HX_STACK_VAR(oldLength,"oldLength");
		HX_STACK_LINE(190)
		::flash::display::InteractiveObject oldObject;		HX_STACK_VAR(oldObject,"oldObject");
		HX_STACK_LINE(190)
		if (((oldLength > (int)0))){
			HX_STACK_LINE(190)
			oldObject = this->__focusOverObjects->__get((oldLength - (int)1)).StaticCast< ::flash::display::InteractiveObject >();
		}
		else{
			HX_STACK_LINE(190)
			oldObject = null();
		}
		HX_STACK_LINE(192)
		if (((newObject != oldObject))){
			HX_STACK_LINE(194)
			if (((oldObject != null()))){
				HX_STACK_LINE(196)
				::flash::events::FocusEvent focusOut = ::flash::events::FocusEvent_obj::__new(::flash::events::FocusEvent_obj::FOCUS_OUT,true,false,newObject,(event->__Field(HX_CSTRING("flags"),true) > (int)0),event->__Field(HX_CSTRING("code"),true),null());		HX_STACK_VAR(focusOut,"focusOut");
				HX_STACK_LINE(197)
				focusOut->set_target(oldObject);
				HX_STACK_LINE(198)
				oldObject->__fireEvent(focusOut);
			}
			HX_STACK_LINE(202)
			if (((newObject != null()))){
				HX_STACK_LINE(204)
				::flash::events::FocusEvent focusIn = ::flash::events::FocusEvent_obj::__new(::flash::events::FocusEvent_obj::FOCUS_IN,true,false,oldObject,(event->__Field(HX_CSTRING("flags"),true) > (int)0),event->__Field(HX_CSTRING("code"),true),null());		HX_STACK_VAR(focusIn,"focusIn");
				HX_STACK_LINE(205)
				focusIn->set_target(newObject);
				HX_STACK_LINE(206)
				newObject->__fireEvent(focusIn);
			}
			HX_STACK_LINE(210)
			this->__focusOverObjects = stack;
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Stage_obj,__checkFocusInOuts,(void))

bool Stage_obj::__checkInOuts( ::flash::events::MouseEvent event,Array< ::Dynamic > stack,::flash::display::TouchInfo touchInfo){
	HX_STACK_FRAME("flash.display.Stage","__checkInOuts",0xfa3cbcb8,"flash.display.Stage.__checkInOuts","flash/display/Stage.hx",217,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_ARG(event,"event")
	HX_STACK_ARG(stack,"stack")
	HX_STACK_ARG(touchInfo,"touchInfo")
	HX_STACK_LINE(219)
	Array< ::Dynamic > prev;		HX_STACK_VAR(prev,"prev");
	HX_STACK_LINE(219)
	if (((touchInfo == null()))){
		HX_STACK_LINE(219)
		prev = this->__mouseOverObjects;
	}
	else{
		HX_STACK_LINE(219)
		prev = touchInfo->touchOverObjects;
	}
	HX_STACK_LINE(220)
	Array< ::String > events;		HX_STACK_VAR(events,"events");
	HX_STACK_LINE(220)
	if (((touchInfo == null()))){
		HX_STACK_LINE(220)
		events = ::flash::display::Stage_obj::__mouseChanges;
	}
	else{
		HX_STACK_LINE(220)
		events = ::flash::display::Stage_obj::__touchChanges;
	}
	HX_STACK_LINE(222)
	int newLength = stack->length;		HX_STACK_VAR(newLength,"newLength");
	HX_STACK_LINE(223)
	::flash::display::InteractiveObject newObject;		HX_STACK_VAR(newObject,"newObject");
	HX_STACK_LINE(223)
	if (((newLength > (int)0))){
		HX_STACK_LINE(223)
		newObject = stack->__get((newLength - (int)1)).StaticCast< ::flash::display::InteractiveObject >();
	}
	else{
		HX_STACK_LINE(223)
		newObject = null();
	}
	HX_STACK_LINE(224)
	int oldLength = prev->length;		HX_STACK_VAR(oldLength,"oldLength");
	HX_STACK_LINE(225)
	::flash::display::InteractiveObject oldObject;		HX_STACK_VAR(oldObject,"oldObject");
	HX_STACK_LINE(225)
	if (((oldLength > (int)0))){
		HX_STACK_LINE(225)
		oldObject = prev->__get((oldLength - (int)1)).StaticCast< ::flash::display::InteractiveObject >();
	}
	else{
		HX_STACK_LINE(225)
		oldObject = null();
	}
	HX_STACK_LINE(227)
	if (((newObject != oldObject))){
		HX_STACK_LINE(229)
		if (((oldObject != null()))){
			HX_STACK_LINE(231)
			oldObject->__fireEvent(event->__createSimilar(events->__get((int)0),newObject,oldObject));
		}
		HX_STACK_LINE(235)
		if (((newObject != null()))){
			HX_STACK_LINE(237)
			newObject->__fireEvent(event->__createSimilar(events->__get((int)1),newObject,newObject));
		}
		HX_STACK_LINE(241)
		int common = (int)0;		HX_STACK_VAR(common,"common");
		HX_STACK_LINE(242)
		while(((bool((bool((common < newLength)) && bool((common < oldLength)))) && bool((stack->__get(common).StaticCast< ::flash::display::InteractiveObject >() == prev->__get(common).StaticCast< ::flash::display::InteractiveObject >()))))){
			HX_STACK_LINE(244)
			(common)++;
		}
		HX_STACK_LINE(248)
		::flash::events::MouseEvent rollOut = event->__createSimilar(events->__get((int)2),newObject,oldObject);		HX_STACK_VAR(rollOut,"rollOut");
		HX_STACK_LINE(250)
		int i = (oldLength - (int)1);		HX_STACK_VAR(i,"i");
		HX_STACK_LINE(251)
		while(((i >= common))){
			HX_STACK_LINE(253)
			prev->__get(i).StaticCast< ::flash::display::InteractiveObject >()->__dispatchEvent(rollOut);
			HX_STACK_LINE(254)
			(i)--;
		}
		HX_STACK_LINE(258)
		::flash::events::MouseEvent rollOver = event->__createSimilar(events->__get((int)3),oldObject,null());		HX_STACK_VAR(rollOver,"rollOver");
		HX_STACK_LINE(260)
		int i1 = (newLength - (int)1);		HX_STACK_VAR(i1,"i1");
		HX_STACK_LINE(261)
		while(((i1 >= common))){
			HX_STACK_LINE(263)
			stack->__get(i1).StaticCast< ::flash::display::InteractiveObject >()->__dispatchEvent(rollOver);
			HX_STACK_LINE(264)
			(i1)--;
		}
		HX_STACK_LINE(268)
		if (((touchInfo == null()))){
			HX_STACK_LINE(270)
			this->__mouseOverObjects = stack;
		}
		else{
			HX_STACK_LINE(274)
			touchInfo->touchOverObjects = stack;
		}
		HX_STACK_LINE(278)
		return false;
	}
	HX_STACK_LINE(282)
	return true;
}


HX_DEFINE_DYNAMIC_FUNC3(Stage_obj,__checkInOuts,return )

Void Stage_obj::__checkRender( ){
{
		HX_STACK_FRAME("flash.display.Stage","__checkRender",0x79486d64,"flash.display.Stage.__checkRender","flash/display/Stage.hx",289,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_LINE(289)
		if (((this->frameRate > (int)0))){
			HX_STACK_LINE(291)
			Float now = ::haxe::Timer_obj::stamp();		HX_STACK_VAR(now,"now");
			HX_STACK_LINE(292)
			if (((now >= this->__nextRender))){
				HX_STACK_LINE(294)
				this->__lastRender = now;
				HX_STACK_LINE(296)
				while(((this->__nextRender < this->__lastRender))){
					HX_STACK_LINE(298)
					hx::AddEq(this->__nextRender,this->__framePeriod);
				}
				HX_STACK_LINE(302)
				if (((this->renderRequest_dyn() != null()))){
					HX_STACK_LINE(304)
					this->renderRequest();
				}
				else{
					HX_STACK_LINE(308)
					this->__render(true);
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Stage_obj,__checkRender,(void))

Float Stage_obj::__doProcessStageEvent( Dynamic event){
	HX_STACK_FRAME("flash.display.Stage","__doProcessStageEvent",0xaeffc4e6,"flash.display.Stage.__doProcessStageEvent","flash/display/Stage.hx",334,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_ARG(event,"event")
	HX_STACK_LINE(336)
	Float result = 0.0;		HX_STACK_VAR(result,"result");
	HX_STACK_LINE(337)
	int type = ::Std_obj::_int(::Reflect_obj::field(event,HX_CSTRING("type")));		HX_STACK_VAR(type,"type");
	HX_STACK_LINE(339)
	try
	{
	HX_STACK_CATCHABLE(Dynamic, 0);
	{
		HX_STACK_LINE(341)
		switch( (int)(type)){
			case (int)2: {
				HX_STACK_LINE(345)
				if (((this->onKey_dyn() != null()))){
					HX_STACK_LINE(346)
					this->onKey(event->__Field(HX_CSTRING("code"),true),event->__Field(HX_CSTRING("down"),true),event->__Field(HX_CSTRING("char"),true),event->__Field(HX_CSTRING("flags"),true));
				}
			}
			;break;
			case (int)1: {
				HX_STACK_LINE(350)
				this->__onKey(event,::flash::events::KeyboardEvent_obj::KEY_DOWN);
			}
			;break;
			case (int)3: {
				HX_STACK_LINE(354)
				this->__onKey(event,::flash::events::KeyboardEvent_obj::KEY_UP);
			}
			;break;
			case (int)4: {
				HX_STACK_LINE(358)
				this->__onMouse(event,::flash::events::MouseEvent_obj::MOUSE_MOVE,true);
			}
			;break;
			case (int)5: {
				HX_STACK_LINE(362)
				this->__onMouse(event,::flash::events::MouseEvent_obj::MOUSE_DOWN,true);
			}
			;break;
			case (int)6: {
				HX_STACK_LINE(366)
				this->__onMouse(event,::flash::events::MouseEvent_obj::CLICK,true);
			}
			;break;
			case (int)7: {
				HX_STACK_LINE(370)
				this->__onMouse(event,::flash::events::MouseEvent_obj::MOUSE_UP,true);
			}
			;break;
			case (int)8: {
				HX_STACK_LINE(374)
				this->__onResize(event->__Field(HX_CSTRING("x"),true),event->__Field(HX_CSTRING("y"),true));
				HX_STACK_LINE(375)
				if (((this->renderRequest_dyn() == null()))){
					HX_STACK_LINE(377)
					this->__render(false);
				}
			}
			;break;
			case (int)9: {
				HX_STACK_LINE(383)
				this->__pollTimers();
			}
			;break;
			case (int)10: {
				HX_STACK_LINE(387)
				if (((this->onQuit_dyn() != null()))){
					HX_STACK_LINE(388)
					this->onQuit();
				}
			}
			;break;
			case (int)11: {
				HX_STACK_LINE(392)
				this->__onFocus(event);
			}
			;break;
			case (int)12: {
				HX_STACK_LINE(396)
				if ((::flash::display::Stage_obj::shouldRotateInterface(event->__Field(HX_CSTRING("value"),true)))){
					HX_STACK_LINE(397)
					event->__FieldRef(HX_CSTRING("result")) = (int)2;
				}
			}
			;break;
			case (int)14: {
				HX_STACK_LINE(401)
				this->__render(true);
			}
			;break;
			case (int)15: {
				HX_STACK_LINE(405)
				::flash::display::TouchInfo touchInfo = ::flash::display::TouchInfo_obj::__new();		HX_STACK_VAR(touchInfo,"touchInfo");
				HX_STACK_LINE(406)
				{
					HX_STACK_LINE(406)
					int key = event->__Field(HX_CSTRING("value"),true);		HX_STACK_VAR(key,"key");
					HX_STACK_LINE(406)
					this->__touchInfo->set(key,touchInfo);
				}
				HX_STACK_LINE(407)
				this->__onTouch(event,::flash::events::TouchEvent_obj::TOUCH_BEGIN,touchInfo);
				HX_STACK_LINE(409)
				if (((((int(event->__Field(HX_CSTRING("flags"),true)) & int((int)32768))) > (int)0))){
					HX_STACK_LINE(411)
					this->__onMouse(event,::flash::events::MouseEvent_obj::MOUSE_DOWN,false);
				}
			}
			;break;
			case (int)16: {
				HX_STACK_LINE(417)
				::flash::display::TouchInfo touchInfo;		HX_STACK_VAR(touchInfo,"touchInfo");
				HX_STACK_LINE(417)
				{
					HX_STACK_LINE(417)
					int key = event->__Field(HX_CSTRING("value"),true);		HX_STACK_VAR(key,"key");
					HX_STACK_LINE(417)
					touchInfo = this->__touchInfo->get(key);
				}
				HX_STACK_LINE(418)
				this->__onTouch(event,::flash::events::TouchEvent_obj::TOUCH_MOVE,touchInfo);
			}
			;break;
			case (int)17: {
				HX_STACK_LINE(422)
				::flash::display::TouchInfo touchInfo;		HX_STACK_VAR(touchInfo,"touchInfo");
				HX_STACK_LINE(422)
				{
					HX_STACK_LINE(422)
					int key = event->__Field(HX_CSTRING("value"),true);		HX_STACK_VAR(key,"key");
					HX_STACK_LINE(422)
					touchInfo = this->__touchInfo->get(key);
				}
				HX_STACK_LINE(423)
				this->__onTouch(event,::flash::events::TouchEvent_obj::TOUCH_END,touchInfo);
				HX_STACK_LINE(424)
				{
					HX_STACK_LINE(424)
					int key = event->__Field(HX_CSTRING("value"),true);		HX_STACK_VAR(key,"key");
					HX_STACK_LINE(424)
					this->__touchInfo->remove(key);
				}
				HX_STACK_LINE(426)
				if (((((int(event->__Field(HX_CSTRING("flags"),true)) & int((int)32768))) > (int)0))){
					HX_STACK_LINE(428)
					this->__onMouse(event,::flash::events::MouseEvent_obj::MOUSE_UP,false);
				}
			}
			;break;
			case (int)18: {
			}
			;break;
			case (int)19: {
				HX_STACK_LINE(438)
				this->__onChange(event);
			}
			;break;
			case (int)20: {
				HX_STACK_LINE(442)
				this->__setActive(true);
			}
			;break;
			case (int)21: {
				HX_STACK_LINE(446)
				this->__setActive(false);
			}
			;break;
			case (int)22: {
				HX_STACK_LINE(450)
				this->__dispatchEvent(::flash::events::Event_obj::__new(::flash::events::FocusEvent_obj::FOCUS_IN,null(),null()));
			}
			;break;
			case (int)23: {
				HX_STACK_LINE(454)
				this->__dispatchEvent(::flash::events::Event_obj::__new(::flash::events::FocusEvent_obj::FOCUS_OUT,null(),null()));
			}
			;break;
			case (int)24: {
				HX_STACK_LINE(458)
				this->__onJoystick(event,HX_CSTRING("axisMove"));
			}
			;break;
			case (int)25: {
				HX_STACK_LINE(462)
				this->__onJoystick(event,HX_CSTRING("ballMove"));
			}
			;break;
			case (int)26: {
				HX_STACK_LINE(466)
				this->__onJoystick(event,HX_CSTRING("hatMove"));
			}
			;break;
			case (int)27: {
				HX_STACK_LINE(470)
				this->__onJoystick(event,HX_CSTRING("buttonDown"));
			}
			;break;
			case (int)28: {
				HX_STACK_LINE(474)
				this->__onJoystick(event,HX_CSTRING("buttonUp"));
			}
			;break;
			case (int)29: {
				HX_STACK_LINE(478)
				this->__onJoystick(event,HX_CSTRING("deviceAdded"));
			}
			;break;
			case (int)30: {
				HX_STACK_LINE(482)
				this->__onJoystick(event,HX_CSTRING("deviceRemoved"));
			}
			;break;
			case (int)31: {
				HX_STACK_LINE(486)
				this->__onSysWM(event);
			}
			;break;
			case (int)32: {
				HX_STACK_LINE(490)
				this->__onRenderContext(false);
			}
			;break;
			case (int)33: {
				HX_STACK_LINE(494)
				this->__onRenderContext(true);
			}
			;break;
		}
	}
	}
	catch(Dynamic __e){
		{
			HX_STACK_BEGIN_CATCH
			Dynamic error = __e;{
				HX_STACK_LINE(502)
				::flash::Lib_obj::rethrow(error);
			}
		}
	}
	HX_STACK_LINE(506)
	result = this->__updateNextWake();
	HX_STACK_LINE(507)
	return result;
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,__doProcessStageEvent,return )

Dynamic Stage_obj::__processStageEvent( Dynamic event){
	HX_STACK_FRAME("flash.display.Stage","__processStageEvent",0x48a9d371,"flash.display.Stage.__processStageEvent","flash/display/Stage.hx",512,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_ARG(event,"event")
	HX_STACK_LINE(514)
	this->__doProcessStageEvent(event);
	HX_STACK_LINE(515)
	return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,__processStageEvent,return )

Void Stage_obj::__drag( ::flash::geom::Point mouse){
{
		HX_STACK_FRAME("flash.display.Stage","__drag",0x95bf940e,"flash.display.Stage.__drag","flash/display/Stage.hx",520,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(mouse,"mouse")
		HX_STACK_LINE(522)
		::flash::display::DisplayObjectContainer parent = this->__dragObject->get_parent();		HX_STACK_VAR(parent,"parent");
		HX_STACK_LINE(523)
		if (((parent != null()))){
			HX_STACK_LINE(525)
			mouse = parent->globalToLocal(mouse);
		}
		HX_STACK_LINE(529)
		Float x = (mouse->x + this->__dragOffsetX);		HX_STACK_VAR(x,"x");
		HX_STACK_LINE(530)
		Float y = (mouse->y + this->__dragOffsetY);		HX_STACK_VAR(y,"y");
		HX_STACK_LINE(532)
		if (((this->__dragBounds != null()))){
			HX_STACK_LINE(534)
			if (((x < this->__dragBounds->x))){
				HX_STACK_LINE(536)
				x = this->__dragBounds->x;
			}
			else{
				HX_STACK_LINE(538)
				if (((x > this->__dragBounds->get_right()))){
					HX_STACK_LINE(540)
					x = this->__dragBounds->get_right();
				}
			}
			HX_STACK_LINE(544)
			if (((y < this->__dragBounds->y))){
				HX_STACK_LINE(546)
				y = this->__dragBounds->y;
			}
			else{
				HX_STACK_LINE(548)
				if (((y > this->__dragBounds->get_bottom()))){
					HX_STACK_LINE(550)
					y = this->__dragBounds->get_bottom();
				}
			}
		}
		HX_STACK_LINE(556)
		this->__dragObject->set_x(x);
		HX_STACK_LINE(557)
		this->__dragObject->set_y(y);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,__drag,(void))

Float Stage_obj::__nextFrameDue( Float otherTimers){
	HX_STACK_FRAME("flash.display.Stage","__nextFrameDue",0x00651fb4,"flash.display.Stage.__nextFrameDue","flash/display/Stage.hx",562,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_ARG(otherTimers,"otherTimers")
	HX_STACK_LINE(564)
	if (((bool(!(this->active)) && bool(this->pauseWhenDeactivated)))){
		HX_STACK_LINE(566)
		return otherTimers;
	}
	HX_STACK_LINE(570)
	if (((this->frameRate > (int)0))){
		HX_STACK_LINE(572)
		Float next = ((this->__nextRender - ::haxe::Timer_obj::stamp()) - ::flash::display::Stage_obj::__earlyWakeup);		HX_STACK_VAR(next,"next");
		HX_STACK_LINE(573)
		if (((next < otherTimers))){
			HX_STACK_LINE(575)
			return next;
		}
	}
	HX_STACK_LINE(581)
	return otherTimers;
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,__nextFrameDue,return )

Void Stage_obj::__onChange( Dynamic event){
{
		HX_STACK_FRAME("flash.display.Stage","__onChange",0xe2ae0509,"flash.display.Stage.__onChange","flash/display/Stage.hx",586,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(event,"event")
		HX_STACK_LINE(588)
		::flash::display::DisplayObject object = this->__findByID(event->__Field(HX_CSTRING("id"),true));		HX_STACK_VAR(object,"object");
		HX_STACK_LINE(590)
		if (((object != null()))){
			HX_STACK_LINE(592)
			object->__fireEvent(::flash::events::Event_obj::__new(::flash::events::Event_obj::CHANGE,null(),null()));
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,__onChange,(void))

Void Stage_obj::__onFocus( Dynamic event){
{
		HX_STACK_FRAME("flash.display.Stage","__onFocus",0xd238225f,"flash.display.Stage.__onFocus","flash/display/Stage.hx",599,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(event,"event")
		HX_STACK_LINE(601)
		Array< ::Dynamic > stack = Array_obj< ::Dynamic >::__new();		HX_STACK_VAR(stack,"stack");
		HX_STACK_LINE(602)
		::flash::display::DisplayObject object = this->__findByID(event->__Field(HX_CSTRING("id"),true));		HX_STACK_VAR(object,"object");
		HX_STACK_LINE(604)
		if (((object != null()))){
			HX_STACK_LINE(606)
			object->__getInteractiveObjectStack(stack);
		}
		HX_STACK_LINE(610)
		if (((bool((stack->length > (int)0)) && bool(((bool((event->__Field(HX_CSTRING("value"),true) == (int)1)) || bool((event->__Field(HX_CSTRING("value"),true) == (int)2)))))))){
			HX_STACK_LINE(612)
			::flash::display::InteractiveObject object1 = stack->__get((int)0).StaticCast< ::flash::display::InteractiveObject >();		HX_STACK_VAR(object1,"object1");
			HX_STACK_LINE(613)
			::String _g;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(613)
			if (((event->__Field(HX_CSTRING("value"),true) == (int)1))){
				HX_STACK_LINE(613)
				_g = ::flash::events::FocusEvent_obj::MOUSE_FOCUS_CHANGE;
			}
			else{
				HX_STACK_LINE(613)
				_g = ::flash::events::FocusEvent_obj::KEY_FOCUS_CHANGE;
			}
			HX_STACK_LINE(613)
			::flash::events::FocusEvent focusEvent = ::flash::events::FocusEvent_obj::__new(_g,true,true,(  (((this->__focusOverObjects->length == (int)0))) ? ::flash::display::InteractiveObject(null()) : ::flash::display::InteractiveObject(this->__focusOverObjects->__get((int)0).StaticCast< ::flash::display::InteractiveObject >()) ),(event->__Field(HX_CSTRING("flags"),true) > (int)0),event->__Field(HX_CSTRING("code"),true),null());		HX_STACK_VAR(focusEvent,"focusEvent");
			HX_STACK_LINE(614)
			object1->__fireEvent(focusEvent);
			HX_STACK_LINE(616)
			if ((focusEvent->__getIsCancelled())){
				HX_STACK_LINE(618)
				event->__FieldRef(HX_CSTRING("result")) = (int)1;
				HX_STACK_LINE(619)
				return null();
			}
		}
		HX_STACK_LINE(625)
		stack->reverse();
		HX_STACK_LINE(626)
		this->__checkFocusInOuts(event,stack);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,__onFocus,(void))

Void Stage_obj::__onJoystick( Dynamic event,::String type){
{
		HX_STACK_FRAME("flash.display.Stage","__onJoystick",0xa3a42c95,"flash.display.Stage.__onJoystick","flash/display/Stage.hx",631,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(event,"event")
		HX_STACK_ARG(type,"type")
		HX_STACK_LINE(633)
		::openfl::events::JoystickEvent joystickEvent = null();		HX_STACK_VAR(joystickEvent,"joystickEvent");
		HX_STACK_LINE(635)
		::String _switch_1 = (type);
		if (  ( _switch_1==HX_CSTRING("axisMove"))){
			HX_STACK_LINE(639)
			Array< Float > data;		HX_STACK_VAR(data,"data");
			HX_STACK_LINE(639)
			{
				HX_STACK_LINE(639)
				int key = event->__Field(HX_CSTRING("id"),true);		HX_STACK_VAR(key,"key");
				HX_STACK_LINE(639)
				data = this->__joyAxisData->get(key);
			}
			HX_STACK_LINE(640)
			if (((data == null()))){
				HX_STACK_LINE(642)
				data = Array_obj< Float >::__new().Add(0.0).Add(0.0).Add(0.0).Add(0.0);
			}
			HX_STACK_LINE(646)
			Float value = (Float(event->__Field(HX_CSTRING("value"),true)) / Float((int)32767));		HX_STACK_VAR(value,"value");
			HX_STACK_LINE(647)
			if (((value < (int)-1))){
				HX_STACK_LINE(647)
				value = (int)-1;
			}
			HX_STACK_LINE(649)
			while(((data->length < event->__Field(HX_CSTRING("code"),true)))){
				HX_STACK_LINE(651)
				data->push((int)0);
			}
			HX_STACK_LINE(655)
			data[event->__Field(HX_CSTRING("code"),true)] = value;
			HX_STACK_LINE(657)
			joystickEvent = ::openfl::events::JoystickEvent_obj::__new(type,false,false,event->__Field(HX_CSTRING("id"),true),(int)0,data->__get((int)0),data->__get((int)1),data->__get((int)2));
			HX_STACK_LINE(658)
			joystickEvent->axis = data->copy();
			HX_STACK_LINE(660)
			{
				HX_STACK_LINE(660)
				int key = event->__Field(HX_CSTRING("id"),true);		HX_STACK_VAR(key,"key");
				HX_STACK_LINE(660)
				this->__joyAxisData->set(key,data);
			}
		}
		else if (  ( _switch_1==HX_CSTRING("ballMove"))){
			HX_STACK_LINE(664)
			joystickEvent = ::openfl::events::JoystickEvent_obj::__new(type,false,false,event->__Field(HX_CSTRING("id"),true),event->__Field(HX_CSTRING("code"),true),event->__Field(HX_CSTRING("x"),true),event->__Field(HX_CSTRING("y"),true),null());
		}
		else if (  ( _switch_1==HX_CSTRING("deviceAdded"))){
			HX_STACK_LINE(668)
			joystickEvent = ::openfl::events::JoystickEvent_obj::__new(type,false,false,event->__Field(HX_CSTRING("id"),true),null(),null(),null(),null());
		}
		else if (  ( _switch_1==HX_CSTRING("deviceRemoved"))){
			HX_STACK_LINE(672)
			joystickEvent = ::openfl::events::JoystickEvent_obj::__new(type,false,false,event->__Field(HX_CSTRING("id"),true),null(),null(),null(),null());
		}
		else if (  ( _switch_1==HX_CSTRING("hatMove"))){
			HX_STACK_LINE(676)
			int x = (int)0;		HX_STACK_VAR(x,"x");
			HX_STACK_LINE(677)
			int y = (int)0;		HX_STACK_VAR(y,"y");
			HX_STACK_LINE(679)
			if (((((int(event->__Field(HX_CSTRING("value"),true)) & int((int)1))) != (int)0))){
				HX_STACK_LINE(681)
				y = (int)-1;
			}
			else{
				HX_STACK_LINE(683)
				if (((((int(event->__Field(HX_CSTRING("value"),true)) & int((int)4))) != (int)0))){
					HX_STACK_LINE(685)
					y = (int)1;
				}
			}
			HX_STACK_LINE(689)
			if (((((int(event->__Field(HX_CSTRING("value"),true)) & int((int)2))) != (int)0))){
				HX_STACK_LINE(691)
				x = (int)1;
			}
			else{
				HX_STACK_LINE(693)
				if (((((int(event->__Field(HX_CSTRING("value"),true)) & int((int)8))) != (int)0))){
					HX_STACK_LINE(695)
					x = (int)-1;
				}
			}
			HX_STACK_LINE(699)
			joystickEvent = ::openfl::events::JoystickEvent_obj::__new(type,false,false,event->__Field(HX_CSTRING("id"),true),event->__Field(HX_CSTRING("code"),true),x,y,null());
		}
		else  {
			HX_STACK_LINE(741)
			joystickEvent = ::openfl::events::JoystickEvent_obj::__new(type,false,false,event->__Field(HX_CSTRING("id"),true),event->__Field(HX_CSTRING("code"),true),null(),null(),null());
		}
;
;
		HX_STACK_LINE(745)
		this->__dispatchEvent(joystickEvent);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Stage_obj,__onJoystick,(void))

Void Stage_obj::__onKey( Dynamic event,::String type){
{
		HX_STACK_FRAME("flash.display.Stage","__onKey",0xc494cc66,"flash.display.Stage.__onKey","flash/display/Stage.hx",750,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(event,"event")
		HX_STACK_ARG(type,"type")
		HX_STACK_LINE(752)
		Array< ::Dynamic > stack = Array_obj< ::Dynamic >::__new();		HX_STACK_VAR(stack,"stack");
		HX_STACK_LINE(753)
		::flash::display::DisplayObject object = this->__findByID(event->__Field(HX_CSTRING("id"),true));		HX_STACK_VAR(object,"object");
		HX_STACK_LINE(755)
		if (((object != null()))){
			HX_STACK_LINE(757)
			object->__getInteractiveObjectStack(stack);
		}
		HX_STACK_LINE(761)
		if (((stack->length > (int)0))){
			HX_STACK_LINE(763)
			Dynamic value = event->__Field(HX_CSTRING("value"),true);		HX_STACK_VAR(value,"value");
			HX_STACK_LINE(764)
			if (((bool((event->__Field(HX_CSTRING("value"),true) >= (int)96)) && bool((event->__Field(HX_CSTRING("value"),true) <= (int)122))))){
				HX_STACK_LINE(764)
				hx::SubEq(event->__FieldRef(HX_CSTRING("value")),(int)32);
			}
			HX_STACK_LINE(766)
			::flash::display::InteractiveObject object1 = stack->__get((int)0).StaticCast< ::flash::display::InteractiveObject >();		HX_STACK_VAR(object1,"object1");
			HX_STACK_LINE(767)
			int flags = event->__Field(HX_CSTRING("flags"),true);		HX_STACK_VAR(flags,"flags");
			HX_STACK_LINE(769)
			::flash::events::KeyboardEvent keyboardEvent = ::flash::events::KeyboardEvent_obj::__new(type,true,true,event->__Field(HX_CSTRING("code"),true),event->__Field(HX_CSTRING("value"),true),(  (((((int(flags) & int(::flash::display::Stage_obj::efLocationRight))) == (int)0))) ? int((int)1) : int((int)0) ),(((int(flags) & int(::flash::display::Stage_obj::efCtrlDown))) != (int)0),(((int(flags) & int(::flash::display::Stage_obj::efAltDown))) != (int)0),(((int(flags) & int(::flash::display::Stage_obj::efShiftDown))) != (int)0),null(),null());		HX_STACK_VAR(keyboardEvent,"keyboardEvent");
			HX_STACK_LINE(770)
			object1->__fireEvent(keyboardEvent);
			HX_STACK_LINE(772)
			if ((keyboardEvent->__getIsCancelled())){
				HX_STACK_LINE(774)
				event->__FieldRef(HX_CSTRING("result")) = (int)1;
			}
			else{
				HX_STACK_LINE(779)
				if (((bool((bool((((int(flags) & int(::flash::display::Stage_obj::efAltDown))) > (int)0)) && bool((type == ::flash::events::KeyboardEvent_obj::KEY_DOWN)))) && bool((event->__Field(HX_CSTRING("code"),true) == ::flash::ui::Keyboard_obj::ENTER))))){
					HX_STACK_LINE(781)
					if (((this->get_displayState() == ::flash::display::StageDisplayState_obj::NORMAL))){
						HX_STACK_LINE(783)
						this->set_displayState(::flash::display::StageDisplayState_obj::FULL_SCREEN_INTERACTIVE);
					}
					else{
						HX_STACK_LINE(787)
						this->set_displayState(::flash::display::StageDisplayState_obj::NORMAL);
					}
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Stage_obj,__onKey,(void))

Void Stage_obj::__onMouse( Dynamic event,::String type,bool fromMouse){
{
		HX_STACK_FRAME("flash.display.Stage","__onMouse",0xda13d8ac,"flash.display.Stage.__onMouse","flash/display/Stage.hx",799,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(event,"event")
		HX_STACK_ARG(type,"type")
		HX_STACK_ARG(fromMouse,"fromMouse")
		HX_STACK_LINE(801)
		int button = event->__Field(HX_CSTRING("value"),true);		HX_STACK_VAR(button,"button");
		HX_STACK_LINE(803)
		if ((!(fromMouse))){
			HX_STACK_LINE(804)
			button = (int)0;
		}
		HX_STACK_LINE(806)
		int wheel = (int)0;		HX_STACK_VAR(wheel,"wheel");
		HX_STACK_LINE(808)
		if (((type == ::flash::events::MouseEvent_obj::MOUSE_DOWN))){
			HX_STACK_LINE(810)
			if (((button > (int)2))){
				HX_STACK_LINE(812)
				return null();
			}
			HX_STACK_LINE(816)
			type = ::flash::display::Stage_obj::sDownEvents->__get(button);
		}
		else{
			HX_STACK_LINE(818)
			if (((type == ::flash::events::MouseEvent_obj::MOUSE_UP))){
				HX_STACK_LINE(820)
				if (((button > (int)2))){
					HX_STACK_LINE(822)
					type = ::flash::events::MouseEvent_obj::MOUSE_WHEEL;
					HX_STACK_LINE(823)
					if (((button == (int)3))){
						HX_STACK_LINE(823)
						wheel = (int)1;
					}
					else{
						HX_STACK_LINE(823)
						wheel = (int)-1;
					}
				}
				else{
					HX_STACK_LINE(827)
					type = ::flash::display::Stage_obj::sUpEvents->__get(button);
				}
			}
		}
		HX_STACK_LINE(833)
		if (((this->__dragObject != null()))){
			HX_STACK_LINE(835)
			this->__drag(::flash::geom::Point_obj::__new(event->__Field(HX_CSTRING("x"),true),event->__Field(HX_CSTRING("y"),true)));
		}
		HX_STACK_LINE(839)
		Array< ::Dynamic > stack = Array_obj< ::Dynamic >::__new();		HX_STACK_VAR(stack,"stack");
		HX_STACK_LINE(840)
		::flash::display::DisplayObject object = this->__findByID(event->__Field(HX_CSTRING("id"),true));		HX_STACK_VAR(object,"object");
		HX_STACK_LINE(842)
		if (((object != null()))){
			HX_STACK_LINE(844)
			object->__getInteractiveObjectStack(stack);
		}
		HX_STACK_LINE(848)
		::flash::geom::Point local = null();		HX_STACK_VAR(local,"local");
		HX_STACK_LINE(850)
		if (((stack->length > (int)0))){
			HX_STACK_LINE(852)
			::flash::display::InteractiveObject object1 = stack->__get((int)0).StaticCast< ::flash::display::InteractiveObject >();		HX_STACK_VAR(object1,"object1");
			HX_STACK_LINE(853)
			stack->reverse();
			HX_STACK_LINE(854)
			local = object1->globalToLocal(::flash::geom::Point_obj::__new(event->__Field(HX_CSTRING("x"),true),event->__Field(HX_CSTRING("y"),true)));
			HX_STACK_LINE(855)
			::flash::events::MouseEvent mouseEvent = ::flash::events::MouseEvent_obj::__create(type,event,local,object1);		HX_STACK_VAR(mouseEvent,"mouseEvent");
			HX_STACK_LINE(856)
			mouseEvent->delta = wheel;
			HX_STACK_LINE(858)
			if (((bool(fromMouse) || bool((((int(event->__Field(HX_CSTRING("flags"),true)) & int((int)32768))) > (int)0))))){
				HX_STACK_LINE(860)
				this->__checkInOuts(mouseEvent,stack,null());
			}
			HX_STACK_LINE(864)
			object1->__fireEvent(mouseEvent);
		}
		else{
			HX_STACK_LINE(868)
			local = ::flash::geom::Point_obj::__new(event->__Field(HX_CSTRING("x"),true),event->__Field(HX_CSTRING("y"),true));
			HX_STACK_LINE(869)
			::flash::events::MouseEvent mouseEvent = ::flash::events::MouseEvent_obj::__create(type,event,local,null());		HX_STACK_VAR(mouseEvent,"mouseEvent");
			HX_STACK_LINE(870)
			mouseEvent->delta = wheel;
			HX_STACK_LINE(872)
			if (((bool(fromMouse) || bool((((int(event->__Field(HX_CSTRING("flags"),true)) & int((int)32768))) > (int)0))))){
				HX_STACK_LINE(874)
				this->__checkInOuts(mouseEvent,stack,null());
			}
		}
		HX_STACK_LINE(880)
		::flash::display::InteractiveObject clickObject;		HX_STACK_VAR(clickObject,"clickObject");
		HX_STACK_LINE(880)
		if (((stack->length > (int)0))){
			HX_STACK_LINE(880)
			clickObject = stack->__get((stack->length - (int)1)).StaticCast< ::flash::display::InteractiveObject >();
		}
		else{
			HX_STACK_LINE(880)
			clickObject = hx::ObjectPtr<OBJ_>(this);
		}
		HX_STACK_LINE(882)
		if (((bool(((bool((bool((type == ::flash::events::MouseEvent_obj::MOUSE_DOWN)) || bool((type == ::flash::events::MouseEvent_obj::MIDDLE_MOUSE_DOWN)))) || bool((type == ::flash::events::MouseEvent_obj::RIGHT_MOUSE_DOWN))))) && bool((button < (int)3))))){
			HX_STACK_LINE(884)
			this->__lastDown[button] = clickObject;
		}
		else{
			HX_STACK_LINE(886)
			if (((bool(((bool((bool((type == ::flash::events::MouseEvent_obj::MOUSE_UP)) || bool((type == ::flash::events::MouseEvent_obj::MIDDLE_MOUSE_UP)))) || bool((type == ::flash::events::MouseEvent_obj::RIGHT_MOUSE_UP))))) && bool((button < (int)3))))){
				HX_STACK_LINE(888)
				if (((clickObject == this->__lastDown->__get(button).StaticCast< ::flash::display::InteractiveObject >()))){
					HX_STACK_LINE(890)
					::flash::events::MouseEvent mouseEvent = ::flash::events::MouseEvent_obj::__create(::flash::display::Stage_obj::sClickEvents->__get(button),event,local,clickObject);		HX_STACK_VAR(mouseEvent,"mouseEvent");
					HX_STACK_LINE(891)
					clickObject->__fireEvent(mouseEvent);
					HX_STACK_LINE(893)
					if (((bool((button == (int)0)) && bool(clickObject->doubleClickEnabled)))){
						HX_STACK_LINE(895)
						Float now = ::haxe::Timer_obj::stamp();		HX_STACK_VAR(now,"now");
						HX_STACK_LINE(896)
						if ((((now - this->__lastClickTime) < 0.25))){
							HX_STACK_LINE(898)
							::flash::events::MouseEvent mouseEvent1 = ::flash::events::MouseEvent_obj::__create(::flash::events::MouseEvent_obj::DOUBLE_CLICK,event,local,clickObject);		HX_STACK_VAR(mouseEvent1,"mouseEvent1");
							HX_STACK_LINE(899)
							clickObject->__fireEvent(mouseEvent1);
						}
						HX_STACK_LINE(903)
						this->__lastClickTime = now;
					}
				}
				HX_STACK_LINE(909)
				this->__lastDown[button] = null();
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC3(Stage_obj,__onMouse,(void))

Void Stage_obj::__onRenderContext( bool active){
{
		HX_STACK_FRAME("flash.display.Stage","__onRenderContext",0x6ff42ac0,"flash.display.Stage.__onRenderContext","flash/display/Stage.hx",916,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(active,"active")
		HX_STACK_LINE(918)
		::flash::events::Event event = ::flash::events::Event_obj::__new((  ((!(active))) ? ::String(HX_CSTRING("glcontextlost")) : ::String(HX_CSTRING("glcontextrestored")) ),null(),null());		HX_STACK_VAR(event,"event");
		HX_STACK_LINE(919)
		this->__dispatchEvent(event);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,__onRenderContext,(void))

Void Stage_obj::__onResize( Float width,Float height){
{
		HX_STACK_FRAME("flash.display.Stage","__onResize",0x33b6cd8d,"flash.display.Stage.__onResize","flash/display/Stage.hx",924,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(width,"width")
		HX_STACK_ARG(height,"height")
		HX_STACK_LINE(926)
		::flash::events::Event event = ::flash::events::Event_obj::__new(::flash::events::Event_obj::RESIZE,null(),null());		HX_STACK_VAR(event,"event");
		HX_STACK_LINE(927)
		this->__dispatchEvent(event);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Stage_obj,__onResize,(void))

Void Stage_obj::__onSysWM( Dynamic event){
{
		HX_STACK_FRAME("flash.display.Stage","__onSysWM",0x5515d8ea,"flash.display.Stage.__onSysWM","flash/display/Stage.hx",932,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(event,"event")
		HX_STACK_LINE(934)
		::openfl::events::SystemEvent event1 = ::openfl::events::SystemEvent_obj::__new(::openfl::events::SystemEvent_obj::SYSTEM,false,false,event->__Field(HX_CSTRING("value"),true));		HX_STACK_VAR(event1,"event1");
		HX_STACK_LINE(935)
		this->__dispatchEvent(event1);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,__onSysWM,(void))

Void Stage_obj::__onTouch( Dynamic event,::String type,::flash::display::TouchInfo touchInfo){
{
		HX_STACK_FRAME("flash.display.Stage","__onTouch",0xe1e1da46,"flash.display.Stage.__onTouch","flash/display/Stage.hx",940,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(event,"event")
		HX_STACK_ARG(type,"type")
		HX_STACK_ARG(touchInfo,"touchInfo")
		HX_STACK_LINE(942)
		Array< ::Dynamic > stack = Array_obj< ::Dynamic >::__new();		HX_STACK_VAR(stack,"stack");
		HX_STACK_LINE(943)
		::flash::display::DisplayObject object = this->__findByID(event->__Field(HX_CSTRING("id"),true));		HX_STACK_VAR(object,"object");
		HX_STACK_LINE(945)
		if (((object != null()))){
			HX_STACK_LINE(947)
			object->__getInteractiveObjectStack(stack);
		}
		HX_STACK_LINE(951)
		if (((stack->length > (int)0))){
			HX_STACK_LINE(953)
			::flash::display::InteractiveObject object1 = stack->__get((int)0).StaticCast< ::flash::display::InteractiveObject >();		HX_STACK_VAR(object1,"object1");
			HX_STACK_LINE(954)
			stack->reverse();
			HX_STACK_LINE(955)
			::flash::geom::Point local = object1->globalToLocal(::flash::geom::Point_obj::__new(event->__Field(HX_CSTRING("x"),true),event->__Field(HX_CSTRING("y"),true)));		HX_STACK_VAR(local,"local");
			HX_STACK_LINE(956)
			::flash::events::TouchEvent touchEvent = ::flash::events::TouchEvent_obj::__create(type,event,local,object1,event->__Field(HX_CSTRING("scaleX"),true),event->__Field(HX_CSTRING("scaleY"),true));		HX_STACK_VAR(touchEvent,"touchEvent");
			HX_STACK_LINE(957)
			touchEvent->touchPointID = event->__Field(HX_CSTRING("value"),true);
			HX_STACK_LINE(958)
			touchEvent->isPrimaryTouchPoint = (((int(event->__Field(HX_CSTRING("flags"),true)) & int((int)32768))) > (int)0);
			HX_STACK_LINE(960)
			if ((touchEvent->isPrimaryTouchPoint)){
				HX_STACK_LINE(962)
				::flash::events::MouseEvent mouseEvent = ::flash::events::MouseEvent_obj::__create(type,event,local,object1);		HX_STACK_VAR(mouseEvent,"mouseEvent");
				HX_STACK_LINE(963)
				this->__checkInOuts(mouseEvent,stack,null());
				HX_STACK_LINE(964)
				object1->__fireEvent(touchEvent);
			}
			HX_STACK_LINE(968)
			this->__checkInOuts(touchEvent,stack,touchInfo);
			HX_STACK_LINE(969)
			object1->__fireEvent(touchEvent);
			HX_STACK_LINE(971)
			if (((bool(touchEvent->isPrimaryTouchPoint) && bool((type == ::flash::events::TouchEvent_obj::TOUCH_MOVE))))){
				HX_STACK_LINE(973)
				if (((this->__dragObject != null()))){
					HX_STACK_LINE(975)
					this->__drag(::flash::geom::Point_obj::__new(event->__Field(HX_CSTRING("x"),true),event->__Field(HX_CSTRING("y"),true)));
				}
				HX_STACK_LINE(979)
				::flash::events::MouseEvent mouseEvent = ::flash::events::MouseEvent_obj::__create(::flash::events::MouseEvent_obj::MOUSE_MOVE,event,local,object1);		HX_STACK_VAR(mouseEvent,"mouseEvent");
				HX_STACK_LINE(980)
				object1->__fireEvent(mouseEvent);
			}
		}
		else{
			HX_STACK_LINE(986)
			::flash::events::TouchEvent touchEvent = ::flash::events::TouchEvent_obj::__create(type,event,::flash::geom::Point_obj::__new(event->__Field(HX_CSTRING("x"),true),event->__Field(HX_CSTRING("y"),true)),null(),event->__Field(HX_CSTRING("scaleX"),true),event->__Field(HX_CSTRING("scaleY"),true));		HX_STACK_VAR(touchEvent,"touchEvent");
			HX_STACK_LINE(987)
			touchEvent->touchPointID = event->__Field(HX_CSTRING("value"),true);
			HX_STACK_LINE(988)
			touchEvent->isPrimaryTouchPoint = (((int(event->__Field(HX_CSTRING("flags"),true)) & int((int)32768))) > (int)0);
			HX_STACK_LINE(989)
			this->__checkInOuts(touchEvent,stack,touchInfo);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC3(Stage_obj,__onTouch,(void))

Void Stage_obj::__pollTimers( ){
{
		HX_STACK_FRAME("flash.display.Stage","__pollTimers",0xc0f93047,"flash.display.Stage.__pollTimers","flash/display/Stage.hx",996,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_LINE(998)
		if ((::flash::display::Stage_obj::__exiting)){
			HX_STACK_LINE(1000)
			return null();
		}
		HX_STACK_LINE(1004)
		::haxe::Timer_obj::__checkTimers();
		HX_STACK_LINE(1005)
		::flash::media::SoundChannel_obj::__pollComplete();
		HX_STACK_LINE(1006)
		::flash::net::URLLoader_obj::__pollData();
		HX_STACK_LINE(1007)
		this->__checkRender();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Stage_obj,__pollTimers,(void))

Void Stage_obj::__render( bool sendEnterFrame){
{
		HX_STACK_FRAME("flash.display.Stage","__render",0x59368df0,"flash.display.Stage.__render","flash/display/Stage.hx",1012,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(sendEnterFrame,"sendEnterFrame")
		HX_STACK_LINE(1014)
		if ((!(this->active))){
			HX_STACK_LINE(1016)
			return null();
		}
		HX_STACK_LINE(1020)
		if ((sendEnterFrame)){
			HX_STACK_LINE(1022)
			this->__broadcast(::flash::events::Event_obj::__new(::flash::events::Event_obj::ENTER_FRAME,null(),null()));
		}
		HX_STACK_LINE(1026)
		if ((this->__invalid)){
			HX_STACK_LINE(1028)
			this->__invalid = false;
			HX_STACK_LINE(1029)
			this->__broadcast(::flash::events::Event_obj::__new(::flash::events::Event_obj::RENDER,null(),null()));
		}
		HX_STACK_LINE(1033)
		::flash::display::Stage_obj::lime_render_stage(this->__handle);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,__render,(void))

Void Stage_obj::__setActive( bool value){
{
		HX_STACK_FRAME("flash.display.Stage","__setActive",0x470cb0ae,"flash.display.Stage.__setActive","flash/display/Stage.hx",1040,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(value,"value")
		HX_STACK_LINE(1040)
		if (((this->active != value))){
			HX_STACK_LINE(1042)
			this->active = value;
			HX_STACK_LINE(1044)
			if ((!(this->active))){
				HX_STACK_LINE(1046)
				this->__lastRender = ::haxe::Timer_obj::stamp();
				HX_STACK_LINE(1047)
				this->__nextRender = (this->__lastRender + this->__framePeriod);
			}
			HX_STACK_LINE(1051)
			::flash::events::Event event = ::flash::events::Event_obj::__new((  ((this->active)) ? ::String(::flash::events::Event_obj::ACTIVATE) : ::String(::flash::events::Event_obj::DEACTIVATE) ),null(),null());		HX_STACK_VAR(event,"event");
			HX_STACK_LINE(1052)
			this->__broadcast(event);
			HX_STACK_LINE(1054)
			if ((value)){
				HX_STACK_LINE(1056)
				this->__pollTimers();
			}
			else{
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,__setActive,(void))

Void Stage_obj::__startDrag( ::flash::display::Sprite sprite,bool lockCenter,::flash::geom::Rectangle bounds){
{
		HX_STACK_FRAME("flash.display.Stage","__startDrag",0xcc829f1c,"flash.display.Stage.__startDrag","flash/display/Stage.hx",1088,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(sprite,"sprite")
		HX_STACK_ARG(lockCenter,"lockCenter")
		HX_STACK_ARG(bounds,"bounds")
		HX_STACK_LINE(1090)
		if (((bounds == null()))){
			HX_STACK_LINE(1090)
			this->__dragBounds = null();
		}
		else{
			HX_STACK_LINE(1090)
			this->__dragBounds = bounds->clone();
		}
		HX_STACK_LINE(1091)
		this->__dragObject = sprite;
		HX_STACK_LINE(1093)
		if (((this->__dragObject != null()))){
			HX_STACK_LINE(1095)
			if ((lockCenter)){
				HX_STACK_LINE(1097)
				this->__dragOffsetX = (Float(-(this->__dragObject->get_width())) / Float((int)2));
				HX_STACK_LINE(1098)
				this->__dragOffsetY = (Float(-(this->__dragObject->get_height())) / Float((int)2));
			}
			else{
				HX_STACK_LINE(1102)
				Float _g = this->get_mouseX();		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(1102)
				::flash::geom::Point mouse = ::flash::geom::Point_obj::__new(_g,this->get_mouseY());		HX_STACK_VAR(mouse,"mouse");
				HX_STACK_LINE(1103)
				::flash::display::DisplayObjectContainer parent = this->__dragObject->get_parent();		HX_STACK_VAR(parent,"parent");
				HX_STACK_LINE(1105)
				if (((parent != null()))){
					HX_STACK_LINE(1107)
					mouse = parent->globalToLocal(mouse);
				}
				HX_STACK_LINE(1111)
				this->__dragOffsetX = (this->__dragObject->get_x() - mouse->x);
				HX_STACK_LINE(1112)
				this->__dragOffsetY = (this->__dragObject->get_y() - mouse->y);
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC3(Stage_obj,__startDrag,(void))

Void Stage_obj::__stopDrag( ::flash::display::Sprite sprite){
{
		HX_STACK_FRAME("flash.display.Stage","__stopDrag",0xe0b8ee30,"flash.display.Stage.__stopDrag","flash/display/Stage.hx",1121,0x8d64160c)
		HX_STACK_THIS(this)
		HX_STACK_ARG(sprite,"sprite")
		HX_STACK_LINE(1123)
		this->__dragBounds = null();
		HX_STACK_LINE(1124)
		this->__dragObject = null();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,__stopDrag,(void))

Float Stage_obj::__updateNextWake( ){
	HX_STACK_FRAME("flash.display.Stage","__updateNextWake",0xce21427a,"flash.display.Stage.__updateNextWake","flash/display/Stage.hx",1129,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_LINE(1131)
	Float nextWake = ::haxe::Timer_obj::__nextWake(315000000.0);		HX_STACK_VAR(nextWake,"nextWake");
	HX_STACK_LINE(1133)
	if (((bool((nextWake > 0.001)) && bool((::flash::media::SoundChannel_obj::__dynamicSoundCount > (int)0))))){
		HX_STACK_LINE(1135)
		nextWake = 0.001;
	}
	struct _Function_1_1{
		inline static bool Block( ){
			HX_STACK_FRAME("*","closure",0x5bdab937,"*.closure","flash/display/Stage.hx",1139,0x8d64160c)
			{
				HX_STACK_LINE(1139)
				return (  ((!(::flash::media::SoundChannel_obj::__completePending()))) ? bool(::flash::net::URLLoader_obj::__loadPending()) : bool(true) );
			}
			return null();
		}
	};
	HX_STACK_LINE(1139)
	if (((  (((nextWake > 0.02))) ? bool(_Function_1_1::Block()) : bool(false) ))){
		HX_STACK_LINE(1141)
		if (((bool(this->active) || bool(!(this->pauseWhenDeactivated))))){
			HX_STACK_LINE(1141)
			nextWake = 0.020;
		}
		else{
			HX_STACK_LINE(1141)
			nextWake = 0.500;
		}
	}
	HX_STACK_LINE(1145)
	nextWake = this->__nextFrameDue(nextWake);
	HX_STACK_LINE(1146)
	::flash::display::Stage_obj::lime_stage_set_next_wake(this->__handle,nextWake);
	HX_STACK_LINE(1147)
	return nextWake;
}


HX_DEFINE_DYNAMIC_FUNC0(Stage_obj,__updateNextWake,return )

::flash::display::StageAlign Stage_obj::get_align( ){
	HX_STACK_FRAME("flash.display.Stage","get_align",0x1b5d8662,"flash.display.Stage.get_align","flash/display/Stage.hx",1159,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_LINE(1161)
	int i = ::flash::display::Stage_obj::lime_stage_get_align(this->__handle);		HX_STACK_VAR(i,"i");
	HX_STACK_LINE(1162)
	return ::Type_obj::createEnumIndex(hx::ClassOf< ::flash::display::StageAlign >(),i,null());
}


HX_DEFINE_DYNAMIC_FUNC0(Stage_obj,get_align,return )

::flash::display::StageAlign Stage_obj::set_align( ::flash::display::StageAlign value){
	HX_STACK_FRAME("flash.display.Stage","set_align",0xfeae726e,"flash.display.Stage.set_align","flash/display/Stage.hx",1167,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_ARG(value,"value")
	HX_STACK_LINE(1169)
	::flash::display::Stage_obj::lime_stage_set_align(this->__handle,value->__Index());
	HX_STACK_LINE(1170)
	return value;
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,set_align,return )

int Stage_obj::get_color( ){
	HX_STACK_FRAME("flash.display.Stage","get_color",0x4428a100,"flash.display.Stage.get_color","flash/display/Stage.hx",1177,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_LINE(1177)
	return this->get_opaqueBackground();
}


HX_DEFINE_DYNAMIC_FUNC0(Stage_obj,get_color,return )

int Stage_obj::set_color( int value){
	HX_STACK_FRAME("flash.display.Stage","set_color",0x27798d0c,"flash.display.Stage.set_color","flash/display/Stage.hx",1184,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_ARG(value,"value")
	HX_STACK_LINE(1184)
	return this->set_opaqueBackground(value);
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,set_color,return )

::flash::display::StageDisplayState Stage_obj::get_displayState( ){
	HX_STACK_FRAME("flash.display.Stage","get_displayState",0xfefbfa72,"flash.display.Stage.get_displayState","flash/display/Stage.hx",1189,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_LINE(1191)
	int i = ::flash::display::Stage_obj::lime_stage_get_display_state(this->__handle);		HX_STACK_VAR(i,"i");
	HX_STACK_LINE(1192)
	return ::Type_obj::createEnumIndex(hx::ClassOf< ::flash::display::StageDisplayState >(),i,null());
}


HX_DEFINE_DYNAMIC_FUNC0(Stage_obj,get_displayState,return )

::flash::display::StageDisplayState Stage_obj::set_displayState( ::flash::display::StageDisplayState value){
	HX_STACK_FRAME("flash.display.Stage","set_displayState",0x553de7e6,"flash.display.Stage.set_displayState","flash/display/Stage.hx",1197,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_ARG(value,"value")
	HX_STACK_LINE(1199)
	::flash::display::Stage_obj::lime_stage_set_display_state(this->__handle,value->__Index());
	HX_STACK_LINE(1200)
	return value;
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,set_displayState,return )

Float Stage_obj::get_dpiScale( ){
	HX_STACK_FRAME("flash.display.Stage","get_dpiScale",0x370f5a70,"flash.display.Stage.get_dpiScale","flash/display/Stage.hx",1207,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_LINE(1207)
	return ::flash::display::Stage_obj::lime_stage_get_dpi_scale(this->__handle);
}


HX_DEFINE_DYNAMIC_FUNC0(Stage_obj,get_dpiScale,return )

::flash::display::InteractiveObject Stage_obj::get_focus( ){
	HX_STACK_FRAME("flash.display.Stage","get_focus",0xfe558f75,"flash.display.Stage.get_focus","flash/display/Stage.hx",1212,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_LINE(1214)
	int id = ::flash::display::Stage_obj::lime_stage_get_focus_id(this->__handle);		HX_STACK_VAR(id,"id");
	HX_STACK_LINE(1215)
	::flash::display::DisplayObject object = this->__findByID(id);		HX_STACK_VAR(object,"object");
	HX_STACK_LINE(1216)
	return object;
}


HX_DEFINE_DYNAMIC_FUNC0(Stage_obj,get_focus,return )

::flash::display::InteractiveObject Stage_obj::set_focus( ::flash::display::InteractiveObject value){
	HX_STACK_FRAME("flash.display.Stage","set_focus",0xe1a67b81,"flash.display.Stage.set_focus","flash/display/Stage.hx",1221,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_ARG(value,"value")
	HX_STACK_LINE(1223)
	if (((value == null()))){
		HX_STACK_LINE(1225)
		::flash::display::Stage_obj::lime_stage_set_focus(this->__handle,null(),(int)0);
	}
	else{
		HX_STACK_LINE(1229)
		::flash::display::Stage_obj::lime_stage_set_focus(this->__handle,value->__handle,(int)0);
	}
	HX_STACK_LINE(1233)
	return value;
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,set_focus,return )

Float Stage_obj::set_frameRate( Float value){
	HX_STACK_FRAME("flash.display.Stage","set_frameRate",0x8923b5d6,"flash.display.Stage.set_frameRate","flash/display/Stage.hx",1238,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_ARG(value,"value")
	HX_STACK_LINE(1240)
	this->frameRate = value;
	HX_STACK_LINE(1241)
	if (((this->frameRate <= (int)0))){
		HX_STACK_LINE(1241)
		this->__framePeriod = this->frameRate;
	}
	else{
		HX_STACK_LINE(1241)
		this->__framePeriod = (Float(1.0) / Float(this->frameRate));
	}
	HX_STACK_LINE(1242)
	this->__nextRender = (this->__lastRender + this->__framePeriod);
	HX_STACK_LINE(1243)
	return value;
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,set_frameRate,return )

bool Stage_obj::get_isOpenGL( ){
	HX_STACK_FRAME("flash.display.Stage","get_isOpenGL",0x207f947c,"flash.display.Stage.get_isOpenGL","flash/display/Stage.hx",1250,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_LINE(1250)
	return ::flash::display::Stage_obj::lime_stage_is_opengl(this->__handle);
}


HX_DEFINE_DYNAMIC_FUNC0(Stage_obj,get_isOpenGL,return )

::flash::display::StageQuality Stage_obj::get_quality( ){
	HX_STACK_FRAME("flash.display.Stage","get_quality",0x6d39159c,"flash.display.Stage.get_quality","flash/display/Stage.hx",1255,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_LINE(1257)
	int i = ::flash::display::Stage_obj::lime_stage_get_quality(this->__handle);		HX_STACK_VAR(i,"i");
	HX_STACK_LINE(1258)
	return ::Type_obj::createEnumIndex(hx::ClassOf< ::flash::display::StageQuality >(),i,null());
}


HX_DEFINE_DYNAMIC_FUNC0(Stage_obj,get_quality,return )

::flash::display::StageQuality Stage_obj::set_quality( ::flash::display::StageQuality value){
	HX_STACK_FRAME("flash.display.Stage","set_quality",0x77a61ca8,"flash.display.Stage.set_quality","flash/display/Stage.hx",1263,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_ARG(value,"value")
	HX_STACK_LINE(1265)
	::flash::display::Stage_obj::lime_stage_set_quality(this->__handle,value->__Index());
	HX_STACK_LINE(1266)
	return value;
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,set_quality,return )

::flash::display::StageScaleMode Stage_obj::get_scaleMode( ){
	HX_STACK_FRAME("flash.display.Stage","get_scaleMode",0x36cc9d2a,"flash.display.Stage.get_scaleMode","flash/display/Stage.hx",1271,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_LINE(1273)
	int i = ::flash::display::Stage_obj::lime_stage_get_scale_mode(this->__handle);		HX_STACK_VAR(i,"i");
	HX_STACK_LINE(1274)
	return ::Type_obj::createEnumIndex(hx::ClassOf< ::flash::display::StageScaleMode >(),i,null());
}


HX_DEFINE_DYNAMIC_FUNC0(Stage_obj,get_scaleMode,return )

::flash::display::StageScaleMode Stage_obj::set_scaleMode( ::flash::display::StageScaleMode value){
	HX_STACK_FRAME("flash.display.Stage","set_scaleMode",0x7bd27f36,"flash.display.Stage.set_scaleMode","flash/display/Stage.hx",1279,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_ARG(value,"value")
	HX_STACK_LINE(1281)
	::flash::display::Stage_obj::lime_stage_set_scale_mode(this->__handle,value->__Index());
	HX_STACK_LINE(1282)
	return value;
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,set_scaleMode,return )

::flash::display::Stage Stage_obj::get_stage( ){
	HX_STACK_FRAME("flash.display.Stage","get_stage",0x7dd79a5b,"flash.display.Stage.get_stage","flash/display/Stage.hx",1289,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_LINE(1289)
	return hx::ObjectPtr<OBJ_>(this);
}


bool Stage_obj::get_stageFocusRect( ){
	HX_STACK_FRAME("flash.display.Stage","get_stageFocusRect",0x7ae34741,"flash.display.Stage.get_stageFocusRect","flash/display/Stage.hx",1294,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_LINE(1294)
	return ::flash::display::Stage_obj::lime_stage_get_focus_rect(this->__handle);
}


HX_DEFINE_DYNAMIC_FUNC0(Stage_obj,get_stageFocusRect,return )

bool Stage_obj::set_stageFocusRect( bool value){
	HX_STACK_FRAME("flash.display.Stage","set_stageFocusRect",0x579279b5,"flash.display.Stage.set_stageFocusRect","flash/display/Stage.hx",1295,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_ARG(value,"value")
	HX_STACK_LINE(1297)
	::flash::display::Stage_obj::lime_stage_set_focus_rect(this->__handle,value);
	HX_STACK_LINE(1298)
	return value;
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,set_stageFocusRect,return )

bool Stage_obj::get_autos3d( ){
	HX_STACK_FRAME("flash.display.Stage","get_autos3d",0xc681b0d2,"flash.display.Stage.get_autos3d","flash/display/Stage.hx",1303,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_LINE(1303)
	return ::flash::display::Stage_obj::lime_stage_get_autos3d(this->__handle);
}


HX_DEFINE_DYNAMIC_FUNC0(Stage_obj,get_autos3d,return )

bool Stage_obj::set_autos3d( bool value){
	HX_STACK_FRAME("flash.display.Stage","set_autos3d",0xd0eeb7de,"flash.display.Stage.set_autos3d","flash/display/Stage.hx",1304,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_ARG(value,"value")
	HX_STACK_LINE(1306)
	::flash::display::Stage_obj::lime_stage_set_autos3d(this->__handle,value);
	HX_STACK_LINE(1307)
	return value;
}


HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,set_autos3d,return )

int Stage_obj::get_stageHeight( ){
	HX_STACK_FRAME("flash.display.Stage","get_stageHeight",0xe188cca2,"flash.display.Stage.get_stageHeight","flash/display/Stage.hx",1314,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_LINE(1314)
	return ::Std_obj::_int(hx::TCast< Float >::cast(::flash::display::Stage_obj::lime_stage_get_stage_height(this->__handle)));
}


HX_DEFINE_DYNAMIC_FUNC0(Stage_obj,get_stageHeight,return )

int Stage_obj::get_stageWidth( ){
	HX_STACK_FRAME("flash.display.Stage","get_stageWidth",0xac6421ab,"flash.display.Stage.get_stageWidth","flash/display/Stage.hx",1321,0x8d64160c)
	HX_STACK_THIS(this)
	HX_STACK_LINE(1321)
	return ::Std_obj::_int(hx::TCast< Float >::cast(::flash::display::Stage_obj::lime_stage_get_stage_width(this->__handle)));
}


HX_DEFINE_DYNAMIC_FUNC0(Stage_obj,get_stageWidth,return )

Float Stage_obj::__earlyWakeup;

bool Stage_obj::__exiting;

int Stage_obj::OrientationPortrait;

int Stage_obj::OrientationPortraitUpsideDown;

int Stage_obj::OrientationLandscapeRight;

int Stage_obj::OrientationLandscapeLeft;

int Stage_obj::OrientationFaceUp;

int Stage_obj::OrientationFaceDown;

int Stage_obj::efLeftDown;

int Stage_obj::efShiftDown;

int Stage_obj::efCtrlDown;

int Stage_obj::efAltDown;

int Stage_obj::efCommandDown;

int Stage_obj::efLocationRight;

int Stage_obj::efNoNativeClick;

Array< ::String > Stage_obj::sClickEvents;

Array< ::String > Stage_obj::sDownEvents;

Array< ::String > Stage_obj::sUpEvents;

Array< ::String > Stage_obj::__mouseChanges;

Array< ::String > Stage_obj::__touchChanges;

HX_BEGIN_DEFAULT_FUNC(__default_getOrientation,Stage_obj)
int run(){
	HX_STACK_FRAME("flash.display.Stage","getOrientation",0x9e58d0d4,"flash.display.Stage.getOrientation","flash/display/Stage.hx",122,0x8d64160c)
	HX_STACK_LINE(122)
	return ::flash::display::Stage_obj::lime_stage_get_orientation();
}
HX_END_LOCAL_FUNC0(return )
HX_END_DEFAULT_FUNC

Dynamic Stage_obj::getOrientation;

HX_BEGIN_DEFAULT_FUNC(__default_getNormalOrientation,Stage_obj)
int run(){
	HX_STACK_FRAME("flash.display.Stage","getNormalOrientation",0x6da844ed,"flash.display.Stage.getNormalOrientation","flash/display/Stage.hx",129,0x8d64160c)
	HX_STACK_LINE(129)
	return ::flash::display::Stage_obj::lime_stage_get_normal_orientation();
}
HX_END_LOCAL_FUNC0(return )
HX_END_DEFAULT_FUNC

Dynamic Stage_obj::getNormalOrientation;

Void Stage_obj::setFixedOrientation( int orientation){
{
		HX_STACK_FRAME("flash.display.Stage","setFixedOrientation",0xca2b1c44,"flash.display.Stage.setFixedOrientation","flash/display/Stage.hx",166,0x8d64160c)
		HX_STACK_ARG(orientation,"orientation")
		HX_STACK_LINE(166)
		::flash::display::Stage_obj::lime_stage_set_fixed_orientation(orientation);
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(Stage_obj,setFixedOrientation,(void))

HX_BEGIN_DEFAULT_FUNC(__default_shouldRotateInterface,Stage_obj)
bool run(int orientation){
	HX_STACK_FRAME("flash.display.Stage","shouldRotateInterface",0x6e74dd31,"flash.display.Stage.shouldRotateInterface","flash/display/Stage.hx",173,0x8d64160c)
	HX_STACK_ARG(orientation,"orientation")
	HX_STACK_LINE(173)
	return (orientation == ::flash::display::Stage_obj::OrientationPortrait);
}
HX_END_LOCAL_FUNC1(return )
HX_END_DEFAULT_FUNC

Dynamic Stage_obj::shouldRotateInterface;

Dynamic Stage_obj::lime_set_stage_handler;

Dynamic Stage_obj::lime_render_stage;

Dynamic Stage_obj::lime_stage_get_autos3d;

Dynamic Stage_obj::lime_stage_set_autos3d;

Dynamic Stage_obj::lime_stage_get_focus_id;

Dynamic Stage_obj::lime_stage_set_focus;

Dynamic Stage_obj::lime_stage_get_focus_rect;

Dynamic Stage_obj::lime_stage_set_focus_rect;

Dynamic Stage_obj::lime_stage_is_opengl;

Dynamic Stage_obj::lime_stage_get_stage_width;

Dynamic Stage_obj::lime_stage_get_stage_height;

Dynamic Stage_obj::lime_stage_get_dpi_scale;

Dynamic Stage_obj::lime_stage_get_scale_mode;

Dynamic Stage_obj::lime_stage_set_scale_mode;

Dynamic Stage_obj::lime_stage_get_align;

Dynamic Stage_obj::lime_stage_set_align;

Dynamic Stage_obj::lime_stage_get_quality;

Dynamic Stage_obj::lime_stage_set_quality;

Dynamic Stage_obj::lime_stage_get_display_state;

Dynamic Stage_obj::lime_stage_set_display_state;

Dynamic Stage_obj::lime_stage_set_next_wake;

Dynamic Stage_obj::lime_stage_request_render;

Dynamic Stage_obj::lime_stage_resize_window;

Dynamic Stage_obj::lime_stage_set_resolution;

Dynamic Stage_obj::lime_stage_set_screenmode;

Dynamic Stage_obj::lime_stage_set_fullscreen;

Dynamic Stage_obj::lime_stage_show_cursor;

Dynamic Stage_obj::lime_stage_set_fixed_orientation;

Dynamic Stage_obj::lime_stage_get_orientation;

Dynamic Stage_obj::lime_stage_get_normal_orientation;


Stage_obj::Stage_obj()
{
}

void Stage_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Stage);
	HX_MARK_MEMBER_NAME(active,"active");
	HX_MARK_MEMBER_NAME(dpiScale,"dpiScale");
	HX_MARK_MEMBER_NAME(frameRate,"frameRate");
	HX_MARK_MEMBER_NAME(isOpenGL,"isOpenGL");
	HX_MARK_MEMBER_NAME(onKey,"onKey");
	HX_MARK_MEMBER_NAME(onQuit,"onQuit");
	HX_MARK_MEMBER_NAME(pauseWhenDeactivated,"pauseWhenDeactivated");
	HX_MARK_MEMBER_NAME(renderRequest,"renderRequest");
	HX_MARK_MEMBER_NAME(stageHeight,"stageHeight");
	HX_MARK_MEMBER_NAME(stageWidth,"stageWidth");
	HX_MARK_MEMBER_NAME(__joyAxisData,"__joyAxisData");
	HX_MARK_MEMBER_NAME(__dragBounds,"__dragBounds");
	HX_MARK_MEMBER_NAME(__dragObject,"__dragObject");
	HX_MARK_MEMBER_NAME(__dragOffsetX,"__dragOffsetX");
	HX_MARK_MEMBER_NAME(__dragOffsetY,"__dragOffsetY");
	HX_MARK_MEMBER_NAME(__focusOverObjects,"__focusOverObjects");
	HX_MARK_MEMBER_NAME(__framePeriod,"__framePeriod");
	HX_MARK_MEMBER_NAME(__invalid,"__invalid");
	HX_MARK_MEMBER_NAME(__lastClickTime,"__lastClickTime");
	HX_MARK_MEMBER_NAME(__lastDown,"__lastDown");
	HX_MARK_MEMBER_NAME(__lastRender,"__lastRender");
	HX_MARK_MEMBER_NAME(__mouseOverObjects,"__mouseOverObjects");
	HX_MARK_MEMBER_NAME(__nextRender,"__nextRender");
	HX_MARK_MEMBER_NAME(__touchInfo,"__touchInfo");
	::flash::display::DisplayObjectContainer_obj::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Stage_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(active,"active");
	HX_VISIT_MEMBER_NAME(dpiScale,"dpiScale");
	HX_VISIT_MEMBER_NAME(frameRate,"frameRate");
	HX_VISIT_MEMBER_NAME(isOpenGL,"isOpenGL");
	HX_VISIT_MEMBER_NAME(onKey,"onKey");
	HX_VISIT_MEMBER_NAME(onQuit,"onQuit");
	HX_VISIT_MEMBER_NAME(pauseWhenDeactivated,"pauseWhenDeactivated");
	HX_VISIT_MEMBER_NAME(renderRequest,"renderRequest");
	HX_VISIT_MEMBER_NAME(stageHeight,"stageHeight");
	HX_VISIT_MEMBER_NAME(stageWidth,"stageWidth");
	HX_VISIT_MEMBER_NAME(__joyAxisData,"__joyAxisData");
	HX_VISIT_MEMBER_NAME(__dragBounds,"__dragBounds");
	HX_VISIT_MEMBER_NAME(__dragObject,"__dragObject");
	HX_VISIT_MEMBER_NAME(__dragOffsetX,"__dragOffsetX");
	HX_VISIT_MEMBER_NAME(__dragOffsetY,"__dragOffsetY");
	HX_VISIT_MEMBER_NAME(__focusOverObjects,"__focusOverObjects");
	HX_VISIT_MEMBER_NAME(__framePeriod,"__framePeriod");
	HX_VISIT_MEMBER_NAME(__invalid,"__invalid");
	HX_VISIT_MEMBER_NAME(__lastClickTime,"__lastClickTime");
	HX_VISIT_MEMBER_NAME(__lastDown,"__lastDown");
	HX_VISIT_MEMBER_NAME(__lastRender,"__lastRender");
	HX_VISIT_MEMBER_NAME(__mouseOverObjects,"__mouseOverObjects");
	HX_VISIT_MEMBER_NAME(__nextRender,"__nextRender");
	HX_VISIT_MEMBER_NAME(__touchInfo,"__touchInfo");
	::flash::display::DisplayObjectContainer_obj::__Visit(HX_VISIT_ARG);
}

Dynamic Stage_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"align") ) { return get_align(); }
		if (HX_FIELD_EQ(inName,"color") ) { return get_color(); }
		if (HX_FIELD_EQ(inName,"focus") ) { return get_focus(); }
		if (HX_FIELD_EQ(inName,"onKey") ) { return onKey; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"active") ) { return active; }
		if (HX_FIELD_EQ(inName,"onQuit") ) { return onQuit; }
		if (HX_FIELD_EQ(inName,"resize") ) { return resize_dyn(); }
		if (HX_FIELD_EQ(inName,"__drag") ) { return __drag_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"autos3d") ) { return get_autos3d(); }
		if (HX_FIELD_EQ(inName,"quality") ) { return get_quality(); }
		if (HX_FIELD_EQ(inName,"__onKey") ) { return __onKey_dyn(); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"dpiScale") ) { return inCallProp ? get_dpiScale() : dpiScale; }
		if (HX_FIELD_EQ(inName,"isOpenGL") ) { return inCallProp ? get_isOpenGL() : isOpenGL; }
		if (HX_FIELD_EQ(inName,"__render") ) { return __render_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"__exiting") ) { return __exiting; }
		if (HX_FIELD_EQ(inName,"efAltDown") ) { return efAltDown; }
		if (HX_FIELD_EQ(inName,"sUpEvents") ) { return sUpEvents; }
		if (HX_FIELD_EQ(inName,"frameRate") ) { return frameRate; }
		if (HX_FIELD_EQ(inName,"scaleMode") ) { return get_scaleMode(); }
		if (HX_FIELD_EQ(inName,"__invalid") ) { return __invalid; }
		if (HX_FIELD_EQ(inName,"__onFocus") ) { return __onFocus_dyn(); }
		if (HX_FIELD_EQ(inName,"__onMouse") ) { return __onMouse_dyn(); }
		if (HX_FIELD_EQ(inName,"__onSysWM") ) { return __onSysWM_dyn(); }
		if (HX_FIELD_EQ(inName,"__onTouch") ) { return __onTouch_dyn(); }
		if (HX_FIELD_EQ(inName,"get_align") ) { return get_align_dyn(); }
		if (HX_FIELD_EQ(inName,"set_align") ) { return set_align_dyn(); }
		if (HX_FIELD_EQ(inName,"get_color") ) { return get_color_dyn(); }
		if (HX_FIELD_EQ(inName,"set_color") ) { return set_color_dyn(); }
		if (HX_FIELD_EQ(inName,"get_focus") ) { return get_focus_dyn(); }
		if (HX_FIELD_EQ(inName,"set_focus") ) { return set_focus_dyn(); }
		if (HX_FIELD_EQ(inName,"get_stage") ) { return get_stage_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"efLeftDown") ) { return efLeftDown; }
		if (HX_FIELD_EQ(inName,"efCtrlDown") ) { return efCtrlDown; }
		if (HX_FIELD_EQ(inName,"stageWidth") ) { return inCallProp ? get_stageWidth() : stageWidth; }
		if (HX_FIELD_EQ(inName,"__lastDown") ) { return __lastDown; }
		if (HX_FIELD_EQ(inName,"invalidate") ) { return invalidate_dyn(); }
		if (HX_FIELD_EQ(inName,"showCursor") ) { return showCursor_dyn(); }
		if (HX_FIELD_EQ(inName,"__onChange") ) { return __onChange_dyn(); }
		if (HX_FIELD_EQ(inName,"__onResize") ) { return __onResize_dyn(); }
		if (HX_FIELD_EQ(inName,"__stopDrag") ) { return __stopDrag_dyn(); }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"efShiftDown") ) { return efShiftDown; }
		if (HX_FIELD_EQ(inName,"sDownEvents") ) { return sDownEvents; }
		if (HX_FIELD_EQ(inName,"stageHeight") ) { return inCallProp ? get_stageHeight() : stageHeight; }
		if (HX_FIELD_EQ(inName,"__touchInfo") ) { return __touchInfo; }
		if (HX_FIELD_EQ(inName,"__setActive") ) { return __setActive_dyn(); }
		if (HX_FIELD_EQ(inName,"__startDrag") ) { return __startDrag_dyn(); }
		if (HX_FIELD_EQ(inName,"get_quality") ) { return get_quality_dyn(); }
		if (HX_FIELD_EQ(inName,"set_quality") ) { return set_quality_dyn(); }
		if (HX_FIELD_EQ(inName,"get_autos3d") ) { return get_autos3d_dyn(); }
		if (HX_FIELD_EQ(inName,"set_autos3d") ) { return set_autos3d_dyn(); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"sClickEvents") ) { return sClickEvents; }
		if (HX_FIELD_EQ(inName,"displayState") ) { return get_displayState(); }
		if (HX_FIELD_EQ(inName,"__dragBounds") ) { return __dragBounds; }
		if (HX_FIELD_EQ(inName,"__dragObject") ) { return __dragObject; }
		if (HX_FIELD_EQ(inName,"__lastRender") ) { return __lastRender; }
		if (HX_FIELD_EQ(inName,"__nextRender") ) { return __nextRender; }
		if (HX_FIELD_EQ(inName,"__onJoystick") ) { return __onJoystick_dyn(); }
		if (HX_FIELD_EQ(inName,"__pollTimers") ) { return __pollTimers_dyn(); }
		if (HX_FIELD_EQ(inName,"get_dpiScale") ) { return get_dpiScale_dyn(); }
		if (HX_FIELD_EQ(inName,"get_isOpenGL") ) { return get_isOpenGL_dyn(); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"__earlyWakeup") ) { return __earlyWakeup; }
		if (HX_FIELD_EQ(inName,"efCommandDown") ) { return efCommandDown; }
		if (HX_FIELD_EQ(inName,"renderRequest") ) { return renderRequest; }
		if (HX_FIELD_EQ(inName,"__joyAxisData") ) { return __joyAxisData; }
		if (HX_FIELD_EQ(inName,"__dragOffsetX") ) { return __dragOffsetX; }
		if (HX_FIELD_EQ(inName,"__dragOffsetY") ) { return __dragOffsetY; }
		if (HX_FIELD_EQ(inName,"__framePeriod") ) { return __framePeriod; }
		if (HX_FIELD_EQ(inName,"setResolution") ) { return setResolution_dyn(); }
		if (HX_FIELD_EQ(inName,"setScreenMode") ) { return setScreenMode_dyn(); }
		if (HX_FIELD_EQ(inName,"setFullscreen") ) { return setFullscreen_dyn(); }
		if (HX_FIELD_EQ(inName,"__checkInOuts") ) { return __checkInOuts_dyn(); }
		if (HX_FIELD_EQ(inName,"__checkRender") ) { return __checkRender_dyn(); }
		if (HX_FIELD_EQ(inName,"set_frameRate") ) { return set_frameRate_dyn(); }
		if (HX_FIELD_EQ(inName,"get_scaleMode") ) { return get_scaleMode_dyn(); }
		if (HX_FIELD_EQ(inName,"set_scaleMode") ) { return set_scaleMode_dyn(); }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"__mouseChanges") ) { return __mouseChanges; }
		if (HX_FIELD_EQ(inName,"__touchChanges") ) { return __touchChanges; }
		if (HX_FIELD_EQ(inName,"getOrientation") ) { return getOrientation; }
		if (HX_FIELD_EQ(inName,"stageFocusRect") ) { return get_stageFocusRect(); }
		if (HX_FIELD_EQ(inName,"__nextFrameDue") ) { return __nextFrameDue_dyn(); }
		if (HX_FIELD_EQ(inName,"get_stageWidth") ) { return get_stageWidth_dyn(); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"efLocationRight") ) { return efLocationRight; }
		if (HX_FIELD_EQ(inName,"efNoNativeClick") ) { return efNoNativeClick; }
		if (HX_FIELD_EQ(inName,"__lastClickTime") ) { return __lastClickTime; }
		if (HX_FIELD_EQ(inName,"get_stageHeight") ) { return get_stageHeight_dyn(); }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"__updateNextWake") ) { return __updateNextWake_dyn(); }
		if (HX_FIELD_EQ(inName,"get_displayState") ) { return get_displayState_dyn(); }
		if (HX_FIELD_EQ(inName,"set_displayState") ) { return set_displayState_dyn(); }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"OrientationFaceUp") ) { return OrientationFaceUp; }
		if (HX_FIELD_EQ(inName,"lime_render_stage") ) { return lime_render_stage; }
		if (HX_FIELD_EQ(inName,"__onRenderContext") ) { return __onRenderContext_dyn(); }
		break;
	case 18:
		if (HX_FIELD_EQ(inName,"__focusOverObjects") ) { return __focusOverObjects; }
		if (HX_FIELD_EQ(inName,"__mouseOverObjects") ) { return __mouseOverObjects; }
		if (HX_FIELD_EQ(inName,"__checkFocusInOuts") ) { return __checkFocusInOuts_dyn(); }
		if (HX_FIELD_EQ(inName,"get_stageFocusRect") ) { return get_stageFocusRect_dyn(); }
		if (HX_FIELD_EQ(inName,"set_stageFocusRect") ) { return set_stageFocusRect_dyn(); }
		break;
	case 19:
		if (HX_FIELD_EQ(inName,"OrientationPortrait") ) { return OrientationPortrait; }
		if (HX_FIELD_EQ(inName,"OrientationFaceDown") ) { return OrientationFaceDown; }
		if (HX_FIELD_EQ(inName,"setFixedOrientation") ) { return setFixedOrientation_dyn(); }
		if (HX_FIELD_EQ(inName,"__processStageEvent") ) { return __processStageEvent_dyn(); }
		break;
	case 20:
		if (HX_FIELD_EQ(inName,"getNormalOrientation") ) { return getNormalOrientation; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_focus") ) { return lime_stage_set_focus; }
		if (HX_FIELD_EQ(inName,"lime_stage_is_opengl") ) { return lime_stage_is_opengl; }
		if (HX_FIELD_EQ(inName,"lime_stage_get_align") ) { return lime_stage_get_align; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_align") ) { return lime_stage_set_align; }
		if (HX_FIELD_EQ(inName,"pauseWhenDeactivated") ) { return pauseWhenDeactivated; }
		break;
	case 21:
		if (HX_FIELD_EQ(inName,"shouldRotateInterface") ) { return shouldRotateInterface; }
		if (HX_FIELD_EQ(inName,"__doProcessStageEvent") ) { return __doProcessStageEvent_dyn(); }
		break;
	case 22:
		if (HX_FIELD_EQ(inName,"lime_set_stage_handler") ) { return lime_set_stage_handler; }
		if (HX_FIELD_EQ(inName,"lime_stage_get_autos3d") ) { return lime_stage_get_autos3d; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_autos3d") ) { return lime_stage_set_autos3d; }
		if (HX_FIELD_EQ(inName,"lime_stage_get_quality") ) { return lime_stage_get_quality; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_quality") ) { return lime_stage_set_quality; }
		if (HX_FIELD_EQ(inName,"lime_stage_show_cursor") ) { return lime_stage_show_cursor; }
		break;
	case 23:
		if (HX_FIELD_EQ(inName,"lime_stage_get_focus_id") ) { return lime_stage_get_focus_id; }
		break;
	case 24:
		if (HX_FIELD_EQ(inName,"OrientationLandscapeLeft") ) { return OrientationLandscapeLeft; }
		if (HX_FIELD_EQ(inName,"lime_stage_get_dpi_scale") ) { return lime_stage_get_dpi_scale; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_next_wake") ) { return lime_stage_set_next_wake; }
		if (HX_FIELD_EQ(inName,"lime_stage_resize_window") ) { return lime_stage_resize_window; }
		break;
	case 25:
		if (HX_FIELD_EQ(inName,"OrientationLandscapeRight") ) { return OrientationLandscapeRight; }
		if (HX_FIELD_EQ(inName,"lime_stage_get_focus_rect") ) { return lime_stage_get_focus_rect; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_focus_rect") ) { return lime_stage_set_focus_rect; }
		if (HX_FIELD_EQ(inName,"lime_stage_get_scale_mode") ) { return lime_stage_get_scale_mode; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_scale_mode") ) { return lime_stage_set_scale_mode; }
		if (HX_FIELD_EQ(inName,"lime_stage_request_render") ) { return lime_stage_request_render; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_resolution") ) { return lime_stage_set_resolution; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_screenmode") ) { return lime_stage_set_screenmode; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_fullscreen") ) { return lime_stage_set_fullscreen; }
		break;
	case 26:
		if (HX_FIELD_EQ(inName,"lime_stage_get_stage_width") ) { return lime_stage_get_stage_width; }
		if (HX_FIELD_EQ(inName,"lime_stage_get_orientation") ) { return lime_stage_get_orientation; }
		break;
	case 27:
		if (HX_FIELD_EQ(inName,"lime_stage_get_stage_height") ) { return lime_stage_get_stage_height; }
		break;
	case 28:
		if (HX_FIELD_EQ(inName,"lime_stage_get_display_state") ) { return lime_stage_get_display_state; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_display_state") ) { return lime_stage_set_display_state; }
		break;
	case 29:
		if (HX_FIELD_EQ(inName,"OrientationPortraitUpsideDown") ) { return OrientationPortraitUpsideDown; }
		break;
	case 32:
		if (HX_FIELD_EQ(inName,"lime_stage_set_fixed_orientation") ) { return lime_stage_set_fixed_orientation; }
		break;
	case 33:
		if (HX_FIELD_EQ(inName,"lime_stage_get_normal_orientation") ) { return lime_stage_get_normal_orientation; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Stage_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"align") ) { return set_align(inValue); }
		if (HX_FIELD_EQ(inName,"color") ) { return set_color(inValue); }
		if (HX_FIELD_EQ(inName,"focus") ) { return set_focus(inValue); }
		if (HX_FIELD_EQ(inName,"onKey") ) { onKey=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"active") ) { active=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"onQuit") ) { onQuit=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"autos3d") ) { return set_autos3d(inValue); }
		if (HX_FIELD_EQ(inName,"quality") ) { return set_quality(inValue); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"dpiScale") ) { dpiScale=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"isOpenGL") ) { isOpenGL=inValue.Cast< bool >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"__exiting") ) { __exiting=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"efAltDown") ) { efAltDown=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"sUpEvents") ) { sUpEvents=inValue.Cast< Array< ::String > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"frameRate") ) { if (inCallProp) return set_frameRate(inValue);frameRate=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"scaleMode") ) { return set_scaleMode(inValue); }
		if (HX_FIELD_EQ(inName,"__invalid") ) { __invalid=inValue.Cast< bool >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"efLeftDown") ) { efLeftDown=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"efCtrlDown") ) { efCtrlDown=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"stageWidth") ) { stageWidth=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"__lastDown") ) { __lastDown=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"efShiftDown") ) { efShiftDown=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"sDownEvents") ) { sDownEvents=inValue.Cast< Array< ::String > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"stageHeight") ) { stageHeight=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"__touchInfo") ) { __touchInfo=inValue.Cast< ::haxe::ds::IntMap >(); return inValue; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"sClickEvents") ) { sClickEvents=inValue.Cast< Array< ::String > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"displayState") ) { return set_displayState(inValue); }
		if (HX_FIELD_EQ(inName,"__dragBounds") ) { __dragBounds=inValue.Cast< ::flash::geom::Rectangle >(); return inValue; }
		if (HX_FIELD_EQ(inName,"__dragObject") ) { __dragObject=inValue.Cast< ::flash::display::Sprite >(); return inValue; }
		if (HX_FIELD_EQ(inName,"__lastRender") ) { __lastRender=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"__nextRender") ) { __nextRender=inValue.Cast< Float >(); return inValue; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"__earlyWakeup") ) { __earlyWakeup=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"efCommandDown") ) { efCommandDown=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"renderRequest") ) { renderRequest=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"__joyAxisData") ) { __joyAxisData=inValue.Cast< ::haxe::ds::IntMap >(); return inValue; }
		if (HX_FIELD_EQ(inName,"__dragOffsetX") ) { __dragOffsetX=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"__dragOffsetY") ) { __dragOffsetY=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"__framePeriod") ) { __framePeriod=inValue.Cast< Float >(); return inValue; }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"__mouseChanges") ) { __mouseChanges=inValue.Cast< Array< ::String > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"__touchChanges") ) { __touchChanges=inValue.Cast< Array< ::String > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"getOrientation") ) { getOrientation=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"stageFocusRect") ) { return set_stageFocusRect(inValue); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"efLocationRight") ) { efLocationRight=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"efNoNativeClick") ) { efNoNativeClick=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"__lastClickTime") ) { __lastClickTime=inValue.Cast< Float >(); return inValue; }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"OrientationFaceUp") ) { OrientationFaceUp=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_render_stage") ) { lime_render_stage=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 18:
		if (HX_FIELD_EQ(inName,"__focusOverObjects") ) { __focusOverObjects=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"__mouseOverObjects") ) { __mouseOverObjects=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
		break;
	case 19:
		if (HX_FIELD_EQ(inName,"OrientationPortrait") ) { OrientationPortrait=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"OrientationFaceDown") ) { OrientationFaceDown=inValue.Cast< int >(); return inValue; }
		break;
	case 20:
		if (HX_FIELD_EQ(inName,"getNormalOrientation") ) { getNormalOrientation=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_focus") ) { lime_stage_set_focus=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_is_opengl") ) { lime_stage_is_opengl=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_get_align") ) { lime_stage_get_align=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_align") ) { lime_stage_set_align=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"pauseWhenDeactivated") ) { pauseWhenDeactivated=inValue.Cast< bool >(); return inValue; }
		break;
	case 21:
		if (HX_FIELD_EQ(inName,"shouldRotateInterface") ) { shouldRotateInterface=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 22:
		if (HX_FIELD_EQ(inName,"lime_set_stage_handler") ) { lime_set_stage_handler=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_get_autos3d") ) { lime_stage_get_autos3d=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_autos3d") ) { lime_stage_set_autos3d=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_get_quality") ) { lime_stage_get_quality=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_quality") ) { lime_stage_set_quality=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_show_cursor") ) { lime_stage_show_cursor=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 23:
		if (HX_FIELD_EQ(inName,"lime_stage_get_focus_id") ) { lime_stage_get_focus_id=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 24:
		if (HX_FIELD_EQ(inName,"OrientationLandscapeLeft") ) { OrientationLandscapeLeft=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_get_dpi_scale") ) { lime_stage_get_dpi_scale=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_next_wake") ) { lime_stage_set_next_wake=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_resize_window") ) { lime_stage_resize_window=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 25:
		if (HX_FIELD_EQ(inName,"OrientationLandscapeRight") ) { OrientationLandscapeRight=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_get_focus_rect") ) { lime_stage_get_focus_rect=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_focus_rect") ) { lime_stage_set_focus_rect=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_get_scale_mode") ) { lime_stage_get_scale_mode=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_scale_mode") ) { lime_stage_set_scale_mode=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_request_render") ) { lime_stage_request_render=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_resolution") ) { lime_stage_set_resolution=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_screenmode") ) { lime_stage_set_screenmode=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_fullscreen") ) { lime_stage_set_fullscreen=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 26:
		if (HX_FIELD_EQ(inName,"lime_stage_get_stage_width") ) { lime_stage_get_stage_width=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_get_orientation") ) { lime_stage_get_orientation=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 27:
		if (HX_FIELD_EQ(inName,"lime_stage_get_stage_height") ) { lime_stage_get_stage_height=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 28:
		if (HX_FIELD_EQ(inName,"lime_stage_get_display_state") ) { lime_stage_get_display_state=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"lime_stage_set_display_state") ) { lime_stage_set_display_state=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 29:
		if (HX_FIELD_EQ(inName,"OrientationPortraitUpsideDown") ) { OrientationPortraitUpsideDown=inValue.Cast< int >(); return inValue; }
		break;
	case 32:
		if (HX_FIELD_EQ(inName,"lime_stage_set_fixed_orientation") ) { lime_stage_set_fixed_orientation=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 33:
		if (HX_FIELD_EQ(inName,"lime_stage_get_normal_orientation") ) { lime_stage_get_normal_orientation=inValue.Cast< Dynamic >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Stage_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("autos3d"));
	outFields->push(HX_CSTRING("active"));
	outFields->push(HX_CSTRING("align"));
	outFields->push(HX_CSTRING("color"));
	outFields->push(HX_CSTRING("displayState"));
	outFields->push(HX_CSTRING("dpiScale"));
	outFields->push(HX_CSTRING("focus"));
	outFields->push(HX_CSTRING("frameRate"));
	outFields->push(HX_CSTRING("isOpenGL"));
	outFields->push(HX_CSTRING("pauseWhenDeactivated"));
	outFields->push(HX_CSTRING("quality"));
	outFields->push(HX_CSTRING("scaleMode"));
	outFields->push(HX_CSTRING("stageFocusRect"));
	outFields->push(HX_CSTRING("stageHeight"));
	outFields->push(HX_CSTRING("stageWidth"));
	outFields->push(HX_CSTRING("__joyAxisData"));
	outFields->push(HX_CSTRING("__dragBounds"));
	outFields->push(HX_CSTRING("__dragObject"));
	outFields->push(HX_CSTRING("__dragOffsetX"));
	outFields->push(HX_CSTRING("__dragOffsetY"));
	outFields->push(HX_CSTRING("__focusOverObjects"));
	outFields->push(HX_CSTRING("__framePeriod"));
	outFields->push(HX_CSTRING("__invalid"));
	outFields->push(HX_CSTRING("__lastClickTime"));
	outFields->push(HX_CSTRING("__lastDown"));
	outFields->push(HX_CSTRING("__lastRender"));
	outFields->push(HX_CSTRING("__mouseOverObjects"));
	outFields->push(HX_CSTRING("__nextRender"));
	outFields->push(HX_CSTRING("__touchInfo"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("__earlyWakeup"),
	HX_CSTRING("__exiting"),
	HX_CSTRING("OrientationPortrait"),
	HX_CSTRING("OrientationPortraitUpsideDown"),
	HX_CSTRING("OrientationLandscapeRight"),
	HX_CSTRING("OrientationLandscapeLeft"),
	HX_CSTRING("OrientationFaceUp"),
	HX_CSTRING("OrientationFaceDown"),
	HX_CSTRING("efLeftDown"),
	HX_CSTRING("efShiftDown"),
	HX_CSTRING("efCtrlDown"),
	HX_CSTRING("efAltDown"),
	HX_CSTRING("efCommandDown"),
	HX_CSTRING("efLocationRight"),
	HX_CSTRING("efNoNativeClick"),
	HX_CSTRING("sClickEvents"),
	HX_CSTRING("sDownEvents"),
	HX_CSTRING("sUpEvents"),
	HX_CSTRING("__mouseChanges"),
	HX_CSTRING("__touchChanges"),
	HX_CSTRING("getOrientation"),
	HX_CSTRING("getNormalOrientation"),
	HX_CSTRING("setFixedOrientation"),
	HX_CSTRING("shouldRotateInterface"),
	HX_CSTRING("lime_set_stage_handler"),
	HX_CSTRING("lime_render_stage"),
	HX_CSTRING("lime_stage_get_autos3d"),
	HX_CSTRING("lime_stage_set_autos3d"),
	HX_CSTRING("lime_stage_get_focus_id"),
	HX_CSTRING("lime_stage_set_focus"),
	HX_CSTRING("lime_stage_get_focus_rect"),
	HX_CSTRING("lime_stage_set_focus_rect"),
	HX_CSTRING("lime_stage_is_opengl"),
	HX_CSTRING("lime_stage_get_stage_width"),
	HX_CSTRING("lime_stage_get_stage_height"),
	HX_CSTRING("lime_stage_get_dpi_scale"),
	HX_CSTRING("lime_stage_get_scale_mode"),
	HX_CSTRING("lime_stage_set_scale_mode"),
	HX_CSTRING("lime_stage_get_align"),
	HX_CSTRING("lime_stage_set_align"),
	HX_CSTRING("lime_stage_get_quality"),
	HX_CSTRING("lime_stage_set_quality"),
	HX_CSTRING("lime_stage_get_display_state"),
	HX_CSTRING("lime_stage_set_display_state"),
	HX_CSTRING("lime_stage_set_next_wake"),
	HX_CSTRING("lime_stage_request_render"),
	HX_CSTRING("lime_stage_resize_window"),
	HX_CSTRING("lime_stage_set_resolution"),
	HX_CSTRING("lime_stage_set_screenmode"),
	HX_CSTRING("lime_stage_set_fullscreen"),
	HX_CSTRING("lime_stage_show_cursor"),
	HX_CSTRING("lime_stage_set_fixed_orientation"),
	HX_CSTRING("lime_stage_get_orientation"),
	HX_CSTRING("lime_stage_get_normal_orientation"),
	String(null()) };

#if HXCPP_SCRIPTABLE
static hx::StorageInfo sMemberStorageInfo[] = {
	{hx::fsBool,(int)offsetof(Stage_obj,active),HX_CSTRING("active")},
	{hx::fsFloat,(int)offsetof(Stage_obj,dpiScale),HX_CSTRING("dpiScale")},
	{hx::fsFloat,(int)offsetof(Stage_obj,frameRate),HX_CSTRING("frameRate")},
	{hx::fsBool,(int)offsetof(Stage_obj,isOpenGL),HX_CSTRING("isOpenGL")},
	{hx::fsObject /*Dynamic*/ ,(int)offsetof(Stage_obj,onKey),HX_CSTRING("onKey")},
	{hx::fsObject /*Dynamic*/ ,(int)offsetof(Stage_obj,onQuit),HX_CSTRING("onQuit")},
	{hx::fsBool,(int)offsetof(Stage_obj,pauseWhenDeactivated),HX_CSTRING("pauseWhenDeactivated")},
	{hx::fsObject /*Dynamic*/ ,(int)offsetof(Stage_obj,renderRequest),HX_CSTRING("renderRequest")},
	{hx::fsInt,(int)offsetof(Stage_obj,stageHeight),HX_CSTRING("stageHeight")},
	{hx::fsInt,(int)offsetof(Stage_obj,stageWidth),HX_CSTRING("stageWidth")},
	{hx::fsObject /*::haxe::ds::IntMap*/ ,(int)offsetof(Stage_obj,__joyAxisData),HX_CSTRING("__joyAxisData")},
	{hx::fsObject /*::flash::geom::Rectangle*/ ,(int)offsetof(Stage_obj,__dragBounds),HX_CSTRING("__dragBounds")},
	{hx::fsObject /*::flash::display::Sprite*/ ,(int)offsetof(Stage_obj,__dragObject),HX_CSTRING("__dragObject")},
	{hx::fsFloat,(int)offsetof(Stage_obj,__dragOffsetX),HX_CSTRING("__dragOffsetX")},
	{hx::fsFloat,(int)offsetof(Stage_obj,__dragOffsetY),HX_CSTRING("__dragOffsetY")},
	{hx::fsObject /*Array< ::Dynamic >*/ ,(int)offsetof(Stage_obj,__focusOverObjects),HX_CSTRING("__focusOverObjects")},
	{hx::fsFloat,(int)offsetof(Stage_obj,__framePeriod),HX_CSTRING("__framePeriod")},
	{hx::fsBool,(int)offsetof(Stage_obj,__invalid),HX_CSTRING("__invalid")},
	{hx::fsFloat,(int)offsetof(Stage_obj,__lastClickTime),HX_CSTRING("__lastClickTime")},
	{hx::fsObject /*Array< ::Dynamic >*/ ,(int)offsetof(Stage_obj,__lastDown),HX_CSTRING("__lastDown")},
	{hx::fsFloat,(int)offsetof(Stage_obj,__lastRender),HX_CSTRING("__lastRender")},
	{hx::fsObject /*Array< ::Dynamic >*/ ,(int)offsetof(Stage_obj,__mouseOverObjects),HX_CSTRING("__mouseOverObjects")},
	{hx::fsFloat,(int)offsetof(Stage_obj,__nextRender),HX_CSTRING("__nextRender")},
	{hx::fsObject /*::haxe::ds::IntMap*/ ,(int)offsetof(Stage_obj,__touchInfo),HX_CSTRING("__touchInfo")},
	{ hx::fsUnknown, 0, null()}
};
#endif

static ::String sMemberFields[] = {
	HX_CSTRING("active"),
	HX_CSTRING("dpiScale"),
	HX_CSTRING("frameRate"),
	HX_CSTRING("isOpenGL"),
	HX_CSTRING("onKey"),
	HX_CSTRING("onQuit"),
	HX_CSTRING("pauseWhenDeactivated"),
	HX_CSTRING("renderRequest"),
	HX_CSTRING("stageHeight"),
	HX_CSTRING("stageWidth"),
	HX_CSTRING("__joyAxisData"),
	HX_CSTRING("__dragBounds"),
	HX_CSTRING("__dragObject"),
	HX_CSTRING("__dragOffsetX"),
	HX_CSTRING("__dragOffsetY"),
	HX_CSTRING("__focusOverObjects"),
	HX_CSTRING("__framePeriod"),
	HX_CSTRING("__invalid"),
	HX_CSTRING("__lastClickTime"),
	HX_CSTRING("__lastDown"),
	HX_CSTRING("__lastRender"),
	HX_CSTRING("__mouseOverObjects"),
	HX_CSTRING("__nextRender"),
	HX_CSTRING("__touchInfo"),
	HX_CSTRING("invalidate"),
	HX_CSTRING("resize"),
	HX_CSTRING("setResolution"),
	HX_CSTRING("setScreenMode"),
	HX_CSTRING("setFullscreen"),
	HX_CSTRING("showCursor"),
	HX_CSTRING("__checkFocusInOuts"),
	HX_CSTRING("__checkInOuts"),
	HX_CSTRING("__checkRender"),
	HX_CSTRING("__doProcessStageEvent"),
	HX_CSTRING("__processStageEvent"),
	HX_CSTRING("__drag"),
	HX_CSTRING("__nextFrameDue"),
	HX_CSTRING("__onChange"),
	HX_CSTRING("__onFocus"),
	HX_CSTRING("__onJoystick"),
	HX_CSTRING("__onKey"),
	HX_CSTRING("__onMouse"),
	HX_CSTRING("__onRenderContext"),
	HX_CSTRING("__onResize"),
	HX_CSTRING("__onSysWM"),
	HX_CSTRING("__onTouch"),
	HX_CSTRING("__pollTimers"),
	HX_CSTRING("__render"),
	HX_CSTRING("__setActive"),
	HX_CSTRING("__startDrag"),
	HX_CSTRING("__stopDrag"),
	HX_CSTRING("__updateNextWake"),
	HX_CSTRING("get_align"),
	HX_CSTRING("set_align"),
	HX_CSTRING("get_color"),
	HX_CSTRING("set_color"),
	HX_CSTRING("get_displayState"),
	HX_CSTRING("set_displayState"),
	HX_CSTRING("get_dpiScale"),
	HX_CSTRING("get_focus"),
	HX_CSTRING("set_focus"),
	HX_CSTRING("set_frameRate"),
	HX_CSTRING("get_isOpenGL"),
	HX_CSTRING("get_quality"),
	HX_CSTRING("set_quality"),
	HX_CSTRING("get_scaleMode"),
	HX_CSTRING("set_scaleMode"),
	HX_CSTRING("get_stage"),
	HX_CSTRING("get_stageFocusRect"),
	HX_CSTRING("set_stageFocusRect"),
	HX_CSTRING("get_autos3d"),
	HX_CSTRING("set_autos3d"),
	HX_CSTRING("get_stageHeight"),
	HX_CSTRING("get_stageWidth"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Stage_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(Stage_obj::__earlyWakeup,"__earlyWakeup");
	HX_MARK_MEMBER_NAME(Stage_obj::__exiting,"__exiting");
	HX_MARK_MEMBER_NAME(Stage_obj::OrientationPortrait,"OrientationPortrait");
	HX_MARK_MEMBER_NAME(Stage_obj::OrientationPortraitUpsideDown,"OrientationPortraitUpsideDown");
	HX_MARK_MEMBER_NAME(Stage_obj::OrientationLandscapeRight,"OrientationLandscapeRight");
	HX_MARK_MEMBER_NAME(Stage_obj::OrientationLandscapeLeft,"OrientationLandscapeLeft");
	HX_MARK_MEMBER_NAME(Stage_obj::OrientationFaceUp,"OrientationFaceUp");
	HX_MARK_MEMBER_NAME(Stage_obj::OrientationFaceDown,"OrientationFaceDown");
	HX_MARK_MEMBER_NAME(Stage_obj::efLeftDown,"efLeftDown");
	HX_MARK_MEMBER_NAME(Stage_obj::efShiftDown,"efShiftDown");
	HX_MARK_MEMBER_NAME(Stage_obj::efCtrlDown,"efCtrlDown");
	HX_MARK_MEMBER_NAME(Stage_obj::efAltDown,"efAltDown");
	HX_MARK_MEMBER_NAME(Stage_obj::efCommandDown,"efCommandDown");
	HX_MARK_MEMBER_NAME(Stage_obj::efLocationRight,"efLocationRight");
	HX_MARK_MEMBER_NAME(Stage_obj::efNoNativeClick,"efNoNativeClick");
	HX_MARK_MEMBER_NAME(Stage_obj::sClickEvents,"sClickEvents");
	HX_MARK_MEMBER_NAME(Stage_obj::sDownEvents,"sDownEvents");
	HX_MARK_MEMBER_NAME(Stage_obj::sUpEvents,"sUpEvents");
	HX_MARK_MEMBER_NAME(Stage_obj::__mouseChanges,"__mouseChanges");
	HX_MARK_MEMBER_NAME(Stage_obj::__touchChanges,"__touchChanges");
	HX_MARK_MEMBER_NAME(Stage_obj::getOrientation,"getOrientation");
	HX_MARK_MEMBER_NAME(Stage_obj::getNormalOrientation,"getNormalOrientation");
	HX_MARK_MEMBER_NAME(Stage_obj::shouldRotateInterface,"shouldRotateInterface");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_set_stage_handler,"lime_set_stage_handler");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_render_stage,"lime_render_stage");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_get_autos3d,"lime_stage_get_autos3d");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_set_autos3d,"lime_stage_set_autos3d");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_get_focus_id,"lime_stage_get_focus_id");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_set_focus,"lime_stage_set_focus");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_get_focus_rect,"lime_stage_get_focus_rect");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_set_focus_rect,"lime_stage_set_focus_rect");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_is_opengl,"lime_stage_is_opengl");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_get_stage_width,"lime_stage_get_stage_width");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_get_stage_height,"lime_stage_get_stage_height");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_get_dpi_scale,"lime_stage_get_dpi_scale");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_get_scale_mode,"lime_stage_get_scale_mode");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_set_scale_mode,"lime_stage_set_scale_mode");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_get_align,"lime_stage_get_align");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_set_align,"lime_stage_set_align");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_get_quality,"lime_stage_get_quality");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_set_quality,"lime_stage_set_quality");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_get_display_state,"lime_stage_get_display_state");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_set_display_state,"lime_stage_set_display_state");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_set_next_wake,"lime_stage_set_next_wake");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_request_render,"lime_stage_request_render");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_resize_window,"lime_stage_resize_window");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_set_resolution,"lime_stage_set_resolution");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_set_screenmode,"lime_stage_set_screenmode");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_set_fullscreen,"lime_stage_set_fullscreen");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_show_cursor,"lime_stage_show_cursor");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_set_fixed_orientation,"lime_stage_set_fixed_orientation");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_get_orientation,"lime_stage_get_orientation");
	HX_MARK_MEMBER_NAME(Stage_obj::lime_stage_get_normal_orientation,"lime_stage_get_normal_orientation");
};

#ifdef HXCPP_VISIT_ALLOCS
static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Stage_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(Stage_obj::__earlyWakeup,"__earlyWakeup");
	HX_VISIT_MEMBER_NAME(Stage_obj::__exiting,"__exiting");
	HX_VISIT_MEMBER_NAME(Stage_obj::OrientationPortrait,"OrientationPortrait");
	HX_VISIT_MEMBER_NAME(Stage_obj::OrientationPortraitUpsideDown,"OrientationPortraitUpsideDown");
	HX_VISIT_MEMBER_NAME(Stage_obj::OrientationLandscapeRight,"OrientationLandscapeRight");
	HX_VISIT_MEMBER_NAME(Stage_obj::OrientationLandscapeLeft,"OrientationLandscapeLeft");
	HX_VISIT_MEMBER_NAME(Stage_obj::OrientationFaceUp,"OrientationFaceUp");
	HX_VISIT_MEMBER_NAME(Stage_obj::OrientationFaceDown,"OrientationFaceDown");
	HX_VISIT_MEMBER_NAME(Stage_obj::efLeftDown,"efLeftDown");
	HX_VISIT_MEMBER_NAME(Stage_obj::efShiftDown,"efShiftDown");
	HX_VISIT_MEMBER_NAME(Stage_obj::efCtrlDown,"efCtrlDown");
	HX_VISIT_MEMBER_NAME(Stage_obj::efAltDown,"efAltDown");
	HX_VISIT_MEMBER_NAME(Stage_obj::efCommandDown,"efCommandDown");
	HX_VISIT_MEMBER_NAME(Stage_obj::efLocationRight,"efLocationRight");
	HX_VISIT_MEMBER_NAME(Stage_obj::efNoNativeClick,"efNoNativeClick");
	HX_VISIT_MEMBER_NAME(Stage_obj::sClickEvents,"sClickEvents");
	HX_VISIT_MEMBER_NAME(Stage_obj::sDownEvents,"sDownEvents");
	HX_VISIT_MEMBER_NAME(Stage_obj::sUpEvents,"sUpEvents");
	HX_VISIT_MEMBER_NAME(Stage_obj::__mouseChanges,"__mouseChanges");
	HX_VISIT_MEMBER_NAME(Stage_obj::__touchChanges,"__touchChanges");
	HX_VISIT_MEMBER_NAME(Stage_obj::getOrientation,"getOrientation");
	HX_VISIT_MEMBER_NAME(Stage_obj::getNormalOrientation,"getNormalOrientation");
	HX_VISIT_MEMBER_NAME(Stage_obj::shouldRotateInterface,"shouldRotateInterface");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_set_stage_handler,"lime_set_stage_handler");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_render_stage,"lime_render_stage");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_get_autos3d,"lime_stage_get_autos3d");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_set_autos3d,"lime_stage_set_autos3d");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_get_focus_id,"lime_stage_get_focus_id");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_set_focus,"lime_stage_set_focus");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_get_focus_rect,"lime_stage_get_focus_rect");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_set_focus_rect,"lime_stage_set_focus_rect");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_is_opengl,"lime_stage_is_opengl");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_get_stage_width,"lime_stage_get_stage_width");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_get_stage_height,"lime_stage_get_stage_height");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_get_dpi_scale,"lime_stage_get_dpi_scale");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_get_scale_mode,"lime_stage_get_scale_mode");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_set_scale_mode,"lime_stage_set_scale_mode");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_get_align,"lime_stage_get_align");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_set_align,"lime_stage_set_align");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_get_quality,"lime_stage_get_quality");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_set_quality,"lime_stage_set_quality");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_get_display_state,"lime_stage_get_display_state");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_set_display_state,"lime_stage_set_display_state");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_set_next_wake,"lime_stage_set_next_wake");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_request_render,"lime_stage_request_render");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_resize_window,"lime_stage_resize_window");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_set_resolution,"lime_stage_set_resolution");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_set_screenmode,"lime_stage_set_screenmode");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_set_fullscreen,"lime_stage_set_fullscreen");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_show_cursor,"lime_stage_show_cursor");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_set_fixed_orientation,"lime_stage_set_fixed_orientation");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_get_orientation,"lime_stage_get_orientation");
	HX_VISIT_MEMBER_NAME(Stage_obj::lime_stage_get_normal_orientation,"lime_stage_get_normal_orientation");
};

#endif

Class Stage_obj::__mClass;

void Stage_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("flash.display.Stage"), hx::TCanCast< Stage_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics
#ifdef HXCPP_VISIT_ALLOCS
    , sVisitStatics
#endif
#ifdef HXCPP_SCRIPTABLE
    , sMemberStorageInfo
#endif
);
}

void Stage_obj::__boot()
{
	__earlyWakeup= 0.005;
	__exiting= false;
	OrientationPortrait= (int)1;
	OrientationPortraitUpsideDown= (int)2;
	OrientationLandscapeRight= (int)3;
	OrientationLandscapeLeft= (int)4;
	OrientationFaceUp= (int)5;
	OrientationFaceDown= (int)6;
	efLeftDown= (int)1;
	efShiftDown= (int)2;
	efCtrlDown= (int)4;
	efAltDown= (int)8;
	efCommandDown= (int)16;
	efLocationRight= (int)16384;
	efNoNativeClick= (int)65536;
	sClickEvents= Array_obj< ::String >::__new().Add(HX_CSTRING("click")).Add(HX_CSTRING("middleClick")).Add(HX_CSTRING("rightClick"));
	sDownEvents= Array_obj< ::String >::__new().Add(HX_CSTRING("mouseDown")).Add(HX_CSTRING("middleMouseDown")).Add(HX_CSTRING("rightMouseDown"));
	sUpEvents= Array_obj< ::String >::__new().Add(HX_CSTRING("mouseUp")).Add(HX_CSTRING("middleMouseUp")).Add(HX_CSTRING("rightMouseUp"));
	__mouseChanges= Array_obj< ::String >::__new().Add(::flash::events::MouseEvent_obj::MOUSE_OUT).Add(::flash::events::MouseEvent_obj::MOUSE_OVER).Add(::flash::events::MouseEvent_obj::ROLL_OUT).Add(::flash::events::MouseEvent_obj::ROLL_OVER);
	__touchChanges= Array_obj< ::String >::__new().Add(::flash::events::TouchEvent_obj::TOUCH_OUT).Add(::flash::events::TouchEvent_obj::TOUCH_OVER).Add(::flash::events::TouchEvent_obj::TOUCH_ROLL_OUT).Add(::flash::events::TouchEvent_obj::TOUCH_ROLL_OVER);
	getOrientation = new __default_getOrientation;

	getNormalOrientation = new __default_getNormalOrientation;

	shouldRotateInterface = new __default_shouldRotateInterface;

	lime_set_stage_handler= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_set_stage_handler"),(int)4);
	lime_render_stage= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_render_stage"),(int)1);
	lime_stage_get_autos3d= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_get_autos3d"),(int)1);
	lime_stage_set_autos3d= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_set_autos3d"),(int)2);
	lime_stage_get_focus_id= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_get_focus_id"),(int)1);
	lime_stage_set_focus= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_set_focus"),(int)3);
	lime_stage_get_focus_rect= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_get_focus_rect"),(int)1);
	lime_stage_set_focus_rect= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_set_focus_rect"),(int)2);
	lime_stage_is_opengl= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_is_opengl"),(int)1);
	lime_stage_get_stage_width= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_get_stage_width"),(int)1);
	lime_stage_get_stage_height= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_get_stage_height"),(int)1);
	lime_stage_get_dpi_scale= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_get_dpi_scale"),(int)1);
	lime_stage_get_scale_mode= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_get_scale_mode"),(int)1);
	lime_stage_set_scale_mode= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_set_scale_mode"),(int)2);
	lime_stage_get_align= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_get_align"),(int)1);
	lime_stage_set_align= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_set_align"),(int)2);
	lime_stage_get_quality= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_get_quality"),(int)1);
	lime_stage_set_quality= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_set_quality"),(int)2);
	lime_stage_get_display_state= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_get_display_state"),(int)1);
	lime_stage_set_display_state= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_set_display_state"),(int)2);
	lime_stage_set_next_wake= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_set_next_wake"),(int)2);
	lime_stage_request_render= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_request_render"),(int)0);
	lime_stage_resize_window= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_resize_window"),(int)3);
	lime_stage_set_resolution= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_set_resolution"),(int)3);
	lime_stage_set_screenmode= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_set_screenmode"),(int)5);
	lime_stage_set_fullscreen= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_set_fullscreen"),(int)2);
	lime_stage_show_cursor= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_show_cursor"),(int)2);
	lime_stage_set_fixed_orientation= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_set_fixed_orientation"),(int)1);
	lime_stage_get_orientation= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_get_orientation"),(int)0);
	lime_stage_get_normal_orientation= ::flash::Lib_obj::load(HX_CSTRING("lime"),HX_CSTRING("lime_stage_get_normal_orientation"),(int)0);
}

} // end namespace flash
} // end namespace display
