#include <hxcpp.h>

#ifndef INCLUDED_flash_display_GradientType
#include <flash/display/GradientType.h>
#endif
#ifndef INCLUDED_flash_display_InterpolationMethod
#include <flash/display/InterpolationMethod.h>
#endif
#ifndef INCLUDED_flash_display_SpreadMethod
#include <flash/display/SpreadMethod.h>
#endif
#ifndef INCLUDED_flash_geom_Matrix
#include <flash/geom/Matrix.h>
#endif
#ifndef INCLUDED_format_gfx_Gradient
#include <format/gfx/Gradient.h>
#endif
namespace format{
namespace gfx{

Void Gradient_obj::__construct()
{
HX_STACK_FRAME("format.gfx.Gradient","new",0x1ea9522e,"format.gfx.Gradient.new","format/gfx/Gradient.hx",26,0x5e0623c0)
{
	HX_STACK_LINE(27)
	this->type = ::flash::display::GradientType_obj::LINEAR;
	HX_STACK_LINE(28)
	this->colors = Array_obj< int >::__new();
	HX_STACK_LINE(29)
	this->alphas = Array_obj< Float >::__new();
	HX_STACK_LINE(30)
	this->ratios = Array_obj< int >::__new();
	HX_STACK_LINE(31)
	this->matrix = ::flash::geom::Matrix_obj::__new(null(),null(),null(),null(),null(),null());
	HX_STACK_LINE(32)
	this->spread = ::flash::display::SpreadMethod_obj::PAD;
	HX_STACK_LINE(33)
	this->interp = ::flash::display::InterpolationMethod_obj::RGB;
	HX_STACK_LINE(34)
	this->focus = 0.0;
}
;
	return null();
}

//Gradient_obj::~Gradient_obj() { }

Dynamic Gradient_obj::__CreateEmpty() { return  new Gradient_obj; }
hx::ObjectPtr< Gradient_obj > Gradient_obj::__new()
{  hx::ObjectPtr< Gradient_obj > result = new Gradient_obj();
	result->__construct();
	return result;}

Dynamic Gradient_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Gradient_obj > result = new Gradient_obj();
	result->__construct();
	return result;}


Gradient_obj::Gradient_obj()
{
}

void Gradient_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Gradient);
	HX_MARK_MEMBER_NAME(type,"type");
	HX_MARK_MEMBER_NAME(colors,"colors");
	HX_MARK_MEMBER_NAME(alphas,"alphas");
	HX_MARK_MEMBER_NAME(ratios,"ratios");
	HX_MARK_MEMBER_NAME(matrix,"matrix");
	HX_MARK_MEMBER_NAME(spread,"spread");
	HX_MARK_MEMBER_NAME(interp,"interp");
	HX_MARK_MEMBER_NAME(focus,"focus");
	HX_MARK_END_CLASS();
}

void Gradient_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(type,"type");
	HX_VISIT_MEMBER_NAME(colors,"colors");
	HX_VISIT_MEMBER_NAME(alphas,"alphas");
	HX_VISIT_MEMBER_NAME(ratios,"ratios");
	HX_VISIT_MEMBER_NAME(matrix,"matrix");
	HX_VISIT_MEMBER_NAME(spread,"spread");
	HX_VISIT_MEMBER_NAME(interp,"interp");
	HX_VISIT_MEMBER_NAME(focus,"focus");
}

Dynamic Gradient_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"type") ) { return type; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"focus") ) { return focus; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"colors") ) { return colors; }
		if (HX_FIELD_EQ(inName,"alphas") ) { return alphas; }
		if (HX_FIELD_EQ(inName,"ratios") ) { return ratios; }
		if (HX_FIELD_EQ(inName,"matrix") ) { return matrix; }
		if (HX_FIELD_EQ(inName,"spread") ) { return spread; }
		if (HX_FIELD_EQ(inName,"interp") ) { return interp; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Gradient_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"type") ) { type=inValue.Cast< ::flash::display::GradientType >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"focus") ) { focus=inValue.Cast< Float >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"colors") ) { colors=inValue.Cast< Array< int > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"alphas") ) { alphas=inValue.Cast< Array< Float > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"ratios") ) { ratios=inValue.Cast< Array< int > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"matrix") ) { matrix=inValue.Cast< ::flash::geom::Matrix >(); return inValue; }
		if (HX_FIELD_EQ(inName,"spread") ) { spread=inValue.Cast< ::flash::display::SpreadMethod >(); return inValue; }
		if (HX_FIELD_EQ(inName,"interp") ) { interp=inValue.Cast< ::flash::display::InterpolationMethod >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Gradient_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("type"));
	outFields->push(HX_CSTRING("colors"));
	outFields->push(HX_CSTRING("alphas"));
	outFields->push(HX_CSTRING("ratios"));
	outFields->push(HX_CSTRING("matrix"));
	outFields->push(HX_CSTRING("spread"));
	outFields->push(HX_CSTRING("interp"));
	outFields->push(HX_CSTRING("focus"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

#if HXCPP_SCRIPTABLE
static hx::StorageInfo sMemberStorageInfo[] = {
	{hx::fsObject /*::flash::display::GradientType*/ ,(int)offsetof(Gradient_obj,type),HX_CSTRING("type")},
	{hx::fsObject /*Array< int >*/ ,(int)offsetof(Gradient_obj,colors),HX_CSTRING("colors")},
	{hx::fsObject /*Array< Float >*/ ,(int)offsetof(Gradient_obj,alphas),HX_CSTRING("alphas")},
	{hx::fsObject /*Array< int >*/ ,(int)offsetof(Gradient_obj,ratios),HX_CSTRING("ratios")},
	{hx::fsObject /*::flash::geom::Matrix*/ ,(int)offsetof(Gradient_obj,matrix),HX_CSTRING("matrix")},
	{hx::fsObject /*::flash::display::SpreadMethod*/ ,(int)offsetof(Gradient_obj,spread),HX_CSTRING("spread")},
	{hx::fsObject /*::flash::display::InterpolationMethod*/ ,(int)offsetof(Gradient_obj,interp),HX_CSTRING("interp")},
	{hx::fsFloat,(int)offsetof(Gradient_obj,focus),HX_CSTRING("focus")},
	{ hx::fsUnknown, 0, null()}
};
#endif

static ::String sMemberFields[] = {
	HX_CSTRING("type"),
	HX_CSTRING("colors"),
	HX_CSTRING("alphas"),
	HX_CSTRING("ratios"),
	HX_CSTRING("matrix"),
	HX_CSTRING("spread"),
	HX_CSTRING("interp"),
	HX_CSTRING("focus"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Gradient_obj::__mClass,"__mClass");
};

#ifdef HXCPP_VISIT_ALLOCS
static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Gradient_obj::__mClass,"__mClass");
};

#endif

Class Gradient_obj::__mClass;

void Gradient_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("format.gfx.Gradient"), hx::TCanCast< Gradient_obj> ,sStaticFields,sMemberFields,
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

void Gradient_obj::__boot()
{
}

} // end namespace format
} // end namespace gfx
