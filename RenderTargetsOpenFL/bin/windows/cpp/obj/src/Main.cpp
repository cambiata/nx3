#include <hxcpp.h>

#ifndef INCLUDED_Main
#include <Main.h>
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
#ifndef INCLUDED_flash_display_MovieClip
#include <flash/display/MovieClip.h>
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
#ifndef INCLUDED_flash_display_StageScaleMode
#include <flash/display/StageScaleMode.h>
#endif
#ifndef INCLUDED_flash_events_Event
#include <flash/events/Event.h>
#endif
#ifndef INCLUDED_flash_events_EventDispatcher
#include <flash/events/EventDispatcher.h>
#endif
#ifndef INCLUDED_flash_events_IEventDispatcher
#include <flash/events/IEventDispatcher.h>
#endif
#ifndef INCLUDED_nx3_render_ITarget
#include <nx3/render/ITarget.h>
#endif
#ifndef INCLUDED_nx3_render_TargetOpenFl
#include <nx3/render/TargetOpenFl.h>
#endif
#ifndef INCLUDED_nx3_render_TargetSpriteBase
#include <nx3/render/TargetSpriteBase.h>
#endif
#ifndef INCLUDED_nx3_render_TestTarget
#include <nx3/render/TestTarget.h>
#endif
#ifndef INCLUDED_nx3_render_scaling_Scaling
#include <nx3/render/scaling/Scaling.h>
#endif

Void Main_obj::__construct()
{
HX_STACK_FRAME("Main","new",0x6616a5cb,"Main.new","Main.hx",57,0x087e5c05)
{
	HX_STACK_LINE(58)
	super::__construct();
	HX_STACK_LINE(59)
	this->addEventListener(::flash::events::Event_obj::ADDED_TO_STAGE,this->added_dyn(),null(),null(),null());
}
;
	return null();
}

//Main_obj::~Main_obj() { }

Dynamic Main_obj::__CreateEmpty() { return  new Main_obj; }
hx::ObjectPtr< Main_obj > Main_obj::__new()
{  hx::ObjectPtr< Main_obj > result = new Main_obj();
	result->__construct();
	return result;}

Dynamic Main_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Main_obj > result = new Main_obj();
	result->__construct();
	return result;}

Void Main_obj::resize( Dynamic e){
{
		HX_STACK_FRAME("Main","resize",0x39257969,"Main.resize","Main.hx",31,0x087e5c05)
		HX_STACK_THIS(this)
		HX_STACK_ARG(e,"e")
		HX_STACK_LINE(31)
		if ((!(this->inited))){
			HX_STACK_LINE(31)
			this->init();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Main_obj,resize,(void))

Void Main_obj::init( ){
{
		HX_STACK_FRAME("Main","init",0xea732345,"Main.init","Main.hx",36,0x087e5c05)
		HX_STACK_THIS(this)
		HX_STACK_LINE(37)
		if ((this->inited)){
			HX_STACK_LINE(37)
			return null();
		}
		HX_STACK_LINE(38)
		this->inited = true;
		HX_STACK_LINE(40)
		::nx3::render::TargetOpenFl target = ::nx3::render::TargetOpenFl_obj::__new(null(),::nx3::render::scaling::Scaling_obj::NORMAL);		HX_STACK_VAR(target,"target");
		HX_STACK_LINE(41)
		::nx3::render::TestTarget testTarget = ::nx3::render::TestTarget_obj::__new(target);		HX_STACK_VAR(testTarget,"testTarget");
		HX_STACK_LINE(42)
		testTarget->test();
		HX_STACK_LINE(43)
		::flash::display::Sprite s = target->getTarget();		HX_STACK_VAR(s,"s");
		HX_STACK_LINE(44)
		this->get_stage()->addChild(s);
		HX_STACK_LINE(46)
		::nx3::render::TargetOpenFl target1 = ::nx3::render::TargetOpenFl_obj::__new(null(),::nx3::render::scaling::Scaling_obj::BIG);		HX_STACK_VAR(target1,"target1");
		HX_STACK_LINE(47)
		::nx3::render::TestTarget testTarget1 = ::nx3::render::TestTarget_obj::__new(target1);		HX_STACK_VAR(testTarget1,"testTarget1");
		HX_STACK_LINE(48)
		testTarget1->test();
		HX_STACK_LINE(49)
		::flash::display::Sprite s1 = target1->getTarget();		HX_STACK_VAR(s1,"s1");
		HX_STACK_LINE(50)
		s1->set_x((int)300);
		HX_STACK_LINE(51)
		this->get_stage()->addChild(s1);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Main_obj,init,(void))

Void Main_obj::added( Dynamic e){
{
		HX_STACK_FRAME("Main","added",0x98771aeb,"Main.added","Main.hx",63,0x087e5c05)
		HX_STACK_THIS(this)
		HX_STACK_ARG(e,"e")
		HX_STACK_LINE(64)
		this->removeEventListener(::flash::events::Event_obj::ADDED_TO_STAGE,this->added_dyn(),null());
		HX_STACK_LINE(65)
		this->get_stage()->addEventListener(::flash::events::Event_obj::RESIZE,this->resize_dyn(),null(),null(),null());
		HX_STACK_LINE(69)
		this->init();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Main_obj,added,(void))

Void Main_obj::main( ){
{
		HX_STACK_FRAME("Main","main",0xed0e206e,"Main.main","Main.hx",74,0x087e5c05)
		HX_STACK_LINE(76)
		::flash::Lib_obj::get_current()->get_stage()->set_align(::flash::display::StageAlign_obj::TOP_LEFT);
		HX_STACK_LINE(77)
		::flash::Lib_obj::get_current()->get_stage()->set_scaleMode(::flash::display::StageScaleMode_obj::NO_SCALE);
		HX_STACK_LINE(78)
		::flash::Lib_obj::get_current()->addChild(::Main_obj::__new());
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(Main_obj,main,(void))


Main_obj::Main_obj()
{
}

Dynamic Main_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"main") ) { return main_dyn(); }
		if (HX_FIELD_EQ(inName,"init") ) { return init_dyn(); }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"added") ) { return added_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"inited") ) { return inited; }
		if (HX_FIELD_EQ(inName,"resize") ) { return resize_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Main_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 6:
		if (HX_FIELD_EQ(inName,"inited") ) { inited=inValue.Cast< bool >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Main_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("inited"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("main"),
	String(null()) };

#if HXCPP_SCRIPTABLE
static hx::StorageInfo sMemberStorageInfo[] = {
	{hx::fsBool,(int)offsetof(Main_obj,inited),HX_CSTRING("inited")},
	{ hx::fsUnknown, 0, null()}
};
#endif

static ::String sMemberFields[] = {
	HX_CSTRING("inited"),
	HX_CSTRING("resize"),
	HX_CSTRING("init"),
	HX_CSTRING("added"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Main_obj::__mClass,"__mClass");
};

#ifdef HXCPP_VISIT_ALLOCS
static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Main_obj::__mClass,"__mClass");
};

#endif

Class Main_obj::__mClass;

void Main_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("Main"), hx::TCanCast< Main_obj> ,sStaticFields,sMemberFields,
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

void Main_obj::__boot()
{
}

