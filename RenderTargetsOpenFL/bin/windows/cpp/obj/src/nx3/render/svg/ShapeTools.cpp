#include <hxcpp.h>

#ifndef INCLUDED_Reflect
#include <Reflect.h>
#endif
#ifndef INCLUDED_Xml
#include <Xml.h>
#endif
#ifndef INCLUDED_flash_display_DisplayObject
#include <flash/display/DisplayObject.h>
#endif
#ifndef INCLUDED_flash_display_IBitmapDrawable
#include <flash/display/IBitmapDrawable.h>
#endif
#ifndef INCLUDED_flash_display_Shape
#include <flash/display/Shape.h>
#endif
#ifndef INCLUDED_flash_events_EventDispatcher
#include <flash/events/EventDispatcher.h>
#endif
#ifndef INCLUDED_flash_events_IEventDispatcher
#include <flash/events/IEventDispatcher.h>
#endif
#ifndef INCLUDED_format_svg_SVG2Gfx
#include <format/svg/SVG2Gfx.h>
#endif
#ifndef INCLUDED_nx3_render_svg_Elements
#include <nx3/render/svg/Elements.h>
#endif
#ifndef INCLUDED_nx3_render_svg_ShapeTools
#include <nx3/render/svg/ShapeTools.h>
#endif
namespace nx3{
namespace render{
namespace svg{

Void ShapeTools_obj::__construct()
{
	return null();
}

//ShapeTools_obj::~ShapeTools_obj() { }

Dynamic ShapeTools_obj::__CreateEmpty() { return  new ShapeTools_obj; }
hx::ObjectPtr< ShapeTools_obj > ShapeTools_obj::__new()
{  hx::ObjectPtr< ShapeTools_obj > result = new ShapeTools_obj();
	result->__construct();
	return result;}

Dynamic ShapeTools_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< ShapeTools_obj > result = new ShapeTools_obj();
	result->__construct();
	return result;}

::flash::display::Shape ShapeTools_obj::getShape( ::String xmlStr,Dynamic scaling){
	HX_STACK_FRAME("nx3.render.svg.ShapeTools","getShape",0xe0038a42,"nx3.render.svg.ShapeTools.getShape","nx3/render/svg/ShapeTools.hx",27,0x2b4814a6)
	HX_STACK_ARG(xmlStr,"xmlStr")
	HX_STACK_ARG(scaling,"scaling")
	HX_STACK_LINE(28)
	if (((xmlStr == null()))){
		HX_STACK_LINE(28)
		return null();
	}
	HX_STACK_LINE(29)
	::format::svg::SVG2Gfx svg = ::format::svg::SVG2Gfx_obj::__new(::Xml_obj::parse(xmlStr));		HX_STACK_VAR(svg,"svg");
	HX_STACK_LINE(30)
	::flash::display::Shape shape = svg->createShape();		HX_STACK_VAR(shape,"shape");
	HX_STACK_LINE(31)
	shape->set_scaleX(shape->set_scaleY(scaling->__Field(HX_CSTRING("svgScale"),true)));
	HX_STACK_LINE(32)
	shape->set_cacheAsBitmap(true);
	HX_STACK_LINE(33)
	return shape;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(ShapeTools_obj,getShape,return )

::String ShapeTools_obj::getElementStr( ::String element){
	HX_STACK_FRAME("nx3.render.svg.ShapeTools","getElementStr",0xab327094,"nx3.render.svg.ShapeTools.getElementStr","nx3/render/svg/ShapeTools.hx",37,0x2b4814a6)
	HX_STACK_ARG(element,"element")
	HX_STACK_LINE(39)
	try
	{
	HX_STACK_CATCHABLE(Dynamic, 0);
	{
		HX_STACK_LINE(41)
		::String str = ::Reflect_obj::field(hx::ClassOf< ::nx3::render::svg::Elements >(),element);		HX_STACK_VAR(str,"str");
		HX_STACK_LINE(42)
		return str;
	}
	}
	catch(Dynamic __e){
		{
			HX_STACK_BEGIN_CATCH
			Dynamic err = __e;{
				HX_STACK_LINE(47)
				return ::nx3::render::svg::Elements_obj::noteBlack;
			}
		}
	}
	HX_STACK_LINE(49)
	return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(ShapeTools_obj,getElementStr,return )


ShapeTools_obj::ShapeTools_obj()
{
}

Dynamic ShapeTools_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 8:
		if (HX_FIELD_EQ(inName,"getShape") ) { return getShape_dyn(); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"getElementStr") ) { return getElementStr_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic ShapeTools_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void ShapeTools_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("getShape"),
	HX_CSTRING("getElementStr"),
	String(null()) };

#if HXCPP_SCRIPTABLE
static hx::StorageInfo *sMemberStorageInfo = 0;
#endif

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(ShapeTools_obj::__mClass,"__mClass");
};

#ifdef HXCPP_VISIT_ALLOCS
static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(ShapeTools_obj::__mClass,"__mClass");
};

#endif

Class ShapeTools_obj::__mClass;

void ShapeTools_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("nx3.render.svg.ShapeTools"), hx::TCanCast< ShapeTools_obj> ,sStaticFields,sMemberFields,
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

void ShapeTools_obj::__boot()
{
}

} // end namespace nx3
} // end namespace render
} // end namespace svg
