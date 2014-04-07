#include <hxcpp.h>

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
#ifndef INCLUDED_flash_geom_Matrix
#include <flash/geom/Matrix.h>
#endif
#ifndef INCLUDED_flash_geom_Rectangle
#include <flash/geom/Rectangle.h>
#endif
#ifndef INCLUDED_format_svg_Group
#include <format/svg/Group.h>
#endif
#ifndef INCLUDED_format_svg_SVG2Gfx
#include <format/svg/SVG2Gfx.h>
#endif
#ifndef INCLUDED_format_svg_SVGData
#include <format/svg/SVGData.h>
#endif
#ifndef INCLUDED_format_svg_SVGRenderer
#include <format/svg/SVGRenderer.h>
#endif
namespace format{
namespace svg{

Void SVG2Gfx_obj::__construct(::Xml inXml)
{
HX_STACK_FRAME("format.svg.SVG2Gfx","new",0xb846e2dc,"format.svg.SVG2Gfx.new","format/svg/SVG2Gfx.hx",13,0xd53e3716)

HX_STACK_ARG(inXml,"inXml")
{
	HX_STACK_LINE(13)
	this->renderer = ::format::svg::SVGRenderer_obj::__new(::format::svg::SVGData_obj::__new(inXml,null()),null());
}
;
	return null();
}

//SVG2Gfx_obj::~SVG2Gfx_obj() { }

Dynamic SVG2Gfx_obj::__CreateEmpty() { return  new SVG2Gfx_obj; }
hx::ObjectPtr< SVG2Gfx_obj > SVG2Gfx_obj::__new(::Xml inXml)
{  hx::ObjectPtr< SVG2Gfx_obj > result = new SVG2Gfx_obj();
	result->__construct(inXml);
	return result;}

Dynamic SVG2Gfx_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< SVG2Gfx_obj > result = new SVG2Gfx_obj();
	result->__construct(inArgs[0]);
	return result;}

::flash::display::Shape SVG2Gfx_obj::createShape( ){
	HX_STACK_FRAME("format.svg.SVG2Gfx","createShape",0x2edc0901,"format.svg.SVG2Gfx.createShape","format/svg/SVG2Gfx.hx",18,0xd53e3716)
	HX_STACK_THIS(this)
	HX_STACK_LINE(18)
	return this->renderer->createShape(null(),null(),null());
}


HX_DEFINE_DYNAMIC_FUNC0(SVG2Gfx_obj,createShape,return )


SVG2Gfx_obj::SVG2Gfx_obj()
{
}

void SVG2Gfx_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(SVG2Gfx);
	HX_MARK_MEMBER_NAME(renderer,"renderer");
	HX_MARK_END_CLASS();
}

void SVG2Gfx_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(renderer,"renderer");
}

Dynamic SVG2Gfx_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 8:
		if (HX_FIELD_EQ(inName,"renderer") ) { return renderer; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"createShape") ) { return createShape_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic SVG2Gfx_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 8:
		if (HX_FIELD_EQ(inName,"renderer") ) { renderer=inValue.Cast< ::format::svg::SVGRenderer >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void SVG2Gfx_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("renderer"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

#if HXCPP_SCRIPTABLE
static hx::StorageInfo sMemberStorageInfo[] = {
	{hx::fsObject /*::format::svg::SVGRenderer*/ ,(int)offsetof(SVG2Gfx_obj,renderer),HX_CSTRING("renderer")},
	{ hx::fsUnknown, 0, null()}
};
#endif

static ::String sMemberFields[] = {
	HX_CSTRING("renderer"),
	HX_CSTRING("createShape"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(SVG2Gfx_obj::__mClass,"__mClass");
};

#ifdef HXCPP_VISIT_ALLOCS
static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(SVG2Gfx_obj::__mClass,"__mClass");
};

#endif

Class SVG2Gfx_obj::__mClass;

void SVG2Gfx_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("format.svg.SVG2Gfx"), hx::TCanCast< SVG2Gfx_obj> ,sStaticFields,sMemberFields,
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

void SVG2Gfx_obj::__boot()
{
}

} // end namespace format
} // end namespace svg
