#include <hxcpp.h>

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
namespace nx3{
namespace render{

Void TargetOpenFl_obj::__construct(::flash::display::Sprite target,Dynamic scaling)
{
HX_STACK_FRAME("nx3.render.TargetOpenFl","new",0xb5664cc6,"nx3.render.TargetOpenFl.new","nx3/render/TargetOpenFl.hx",16,0x8630df4a)

HX_STACK_ARG(target,"target")

HX_STACK_ARG(scaling,"scaling")
{
	HX_STACK_LINE(17)
	if (((target == null()))){
		HX_STACK_LINE(17)
		target = ::flash::display::Sprite_obj::__new();
	}
	HX_STACK_LINE(18)
	super::__construct(target,scaling);
}
;
	return null();
}

//TargetOpenFl_obj::~TargetOpenFl_obj() { }

Dynamic TargetOpenFl_obj::__CreateEmpty() { return  new TargetOpenFl_obj; }
hx::ObjectPtr< TargetOpenFl_obj > TargetOpenFl_obj::__new(::flash::display::Sprite target,Dynamic scaling)
{  hx::ObjectPtr< TargetOpenFl_obj > result = new TargetOpenFl_obj();
	result->__construct(target,scaling);
	return result;}

Dynamic TargetOpenFl_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< TargetOpenFl_obj > result = new TargetOpenFl_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}

hx::Object *TargetOpenFl_obj::__ToInterface(const hx::type_info &inType) {
	if (inType==typeid( ::nx3::render::ITarget_obj)) return operator ::nx3::render::ITarget_obj *();
	return super::__ToInterface(inType);
}

::flash::display::Sprite TargetOpenFl_obj::getTarget( ){
	HX_STACK_FRAME("nx3.render.TargetOpenFl","getTarget",0xc8e8496d,"nx3.render.TargetOpenFl.getTarget","nx3/render/TargetOpenFl.hx",21,0x8630df4a)
	HX_STACK_THIS(this)
	HX_STACK_LINE(21)
	return this->target;
}


HX_DEFINE_DYNAMIC_FUNC0(TargetOpenFl_obj,getTarget,return )


TargetOpenFl_obj::TargetOpenFl_obj()
{
}

Dynamic TargetOpenFl_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 9:
		if (HX_FIELD_EQ(inName,"getTarget") ) { return getTarget_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic TargetOpenFl_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void TargetOpenFl_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

#if HXCPP_SCRIPTABLE
static hx::StorageInfo *sMemberStorageInfo = 0;
#endif

static ::String sMemberFields[] = {
	HX_CSTRING("getTarget"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(TargetOpenFl_obj::__mClass,"__mClass");
};

#ifdef HXCPP_VISIT_ALLOCS
static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(TargetOpenFl_obj::__mClass,"__mClass");
};

#endif

Class TargetOpenFl_obj::__mClass;

void TargetOpenFl_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("nx3.render.TargetOpenFl"), hx::TCanCast< TargetOpenFl_obj> ,sStaticFields,sMemberFields,
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

void TargetOpenFl_obj::__boot()
{
}

} // end namespace nx3
} // end namespace render
