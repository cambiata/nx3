#include <hxcpp.h>

#ifndef INCLUDED_format_gfx_Gfx
#include <format/gfx/Gfx.h>
#endif
#ifndef INCLUDED_format_svg_CubicSegment
#include <format/svg/CubicSegment.h>
#endif
#ifndef INCLUDED_format_svg_PathSegment
#include <format/svg/PathSegment.h>
#endif
#ifndef INCLUDED_format_svg_QuadraticSegment
#include <format/svg/QuadraticSegment.h>
#endif
#ifndef INCLUDED_format_svg_RenderContext
#include <format/svg/RenderContext.h>
#endif
namespace format{
namespace svg{

Void CubicSegment_obj::__construct(Float inCX1,Float inCY1,Float inCX2,Float inCY2,Float inX,Float inY)
{
HX_STACK_FRAME("format.svg.CubicSegment","new",0xad9784fc,"format.svg.CubicSegment.new","format/svg/PathSegment.hx",103,0x6d7bc4b3)

HX_STACK_ARG(inCX1,"inCX1")

HX_STACK_ARG(inCY1,"inCY1")

HX_STACK_ARG(inCX2,"inCX2")

HX_STACK_ARG(inCY2,"inCY2")

HX_STACK_ARG(inX,"inX")

HX_STACK_ARG(inY,"inY")
{
	HX_STACK_LINE(104)
	super::__construct(inX,inY);
	HX_STACK_LINE(105)
	this->cx1 = inCX1;
	HX_STACK_LINE(106)
	this->cy1 = inCY1;
	HX_STACK_LINE(107)
	this->cx2 = inCX2;
	HX_STACK_LINE(108)
	this->cy2 = inCY2;
}
;
	return null();
}

//CubicSegment_obj::~CubicSegment_obj() { }

Dynamic CubicSegment_obj::__CreateEmpty() { return  new CubicSegment_obj; }
hx::ObjectPtr< CubicSegment_obj > CubicSegment_obj::__new(Float inCX1,Float inCY1,Float inCX2,Float inCY2,Float inX,Float inY)
{  hx::ObjectPtr< CubicSegment_obj > result = new CubicSegment_obj();
	result->__construct(inCX1,inCY1,inCX2,inCY2,inX,inY);
	return result;}

Dynamic CubicSegment_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< CubicSegment_obj > result = new CubicSegment_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2],inArgs[3],inArgs[4],inArgs[5]);
	return result;}

Float CubicSegment_obj::prevCX( ){
	HX_STACK_FRAME("format.svg.CubicSegment","prevCX",0xcee4f14c,"format.svg.CubicSegment.prevCX","format/svg/PathSegment.hx",111,0x6d7bc4b3)
	HX_STACK_THIS(this)
	HX_STACK_LINE(111)
	return this->cx2;
}


Float CubicSegment_obj::prevCY( ){
	HX_STACK_FRAME("format.svg.CubicSegment","prevCY",0xcee4f14d,"format.svg.CubicSegment.prevCY","format/svg/PathSegment.hx",112,0x6d7bc4b3)
	HX_STACK_THIS(this)
	HX_STACK_LINE(112)
	return this->cy2;
}


Float CubicSegment_obj::Interp( Float a,Float b,Float frac){
	HX_STACK_FRAME("format.svg.CubicSegment","Interp",0xf33d02d8,"format.svg.CubicSegment.Interp","format/svg/PathSegment.hx",116,0x6d7bc4b3)
	HX_STACK_THIS(this)
	HX_STACK_ARG(a,"a")
	HX_STACK_ARG(b,"b")
	HX_STACK_ARG(frac,"frac")
	HX_STACK_LINE(116)
	return (a + (((b - a)) * frac));
}


HX_DEFINE_DYNAMIC_FUNC3(CubicSegment_obj,Interp,return )

Void CubicSegment_obj::toGfx( ::format::gfx::Gfx inGfx,::format::svg::RenderContext ioContext){
{
		HX_STACK_FRAME("format.svg.CubicSegment","toGfx",0x611f465a,"format.svg.CubicSegment.toGfx","format/svg/PathSegment.hx",120,0x6d7bc4b3)
		HX_STACK_THIS(this)
		HX_STACK_ARG(inGfx,"inGfx")
		HX_STACK_ARG(ioContext,"ioContext")
		HX_STACK_LINE(122)
		Float tx0 = ioContext->lastX;		HX_STACK_VAR(tx0,"tx0");
		HX_STACK_LINE(123)
		Float ty0 = ioContext->lastY;		HX_STACK_VAR(ty0,"ty0");
		HX_STACK_LINE(125)
		Float tx1 = ioContext->transX(this->cx1,this->cy1);		HX_STACK_VAR(tx1,"tx1");
		HX_STACK_LINE(126)
		Float ty1 = ioContext->transY(this->cx1,this->cy1);		HX_STACK_VAR(ty1,"ty1");
		HX_STACK_LINE(127)
		Float tx2 = ioContext->transX(this->cx2,this->cy2);		HX_STACK_VAR(tx2,"tx2");
		HX_STACK_LINE(128)
		Float ty2 = ioContext->transY(this->cx2,this->cy2);		HX_STACK_VAR(ty2,"ty2");
		HX_STACK_LINE(130)
		ioContext->setLast(this->x,this->y);
		HX_STACK_LINE(131)
		Float tx3 = ioContext->lastX;		HX_STACK_VAR(tx3,"tx3");
		HX_STACK_LINE(132)
		Float ty3 = ioContext->lastY;		HX_STACK_VAR(ty3,"ty3");
		HX_STACK_LINE(136)
		Float pa_x = this->Interp(tx0,tx1,0.75);		HX_STACK_VAR(pa_x,"pa_x");
		HX_STACK_LINE(137)
		Float pa_y = this->Interp(ty0,ty1,0.75);		HX_STACK_VAR(pa_y,"pa_y");
		HX_STACK_LINE(138)
		Float pb_x = this->Interp(tx3,tx2,0.75);		HX_STACK_VAR(pb_x,"pb_x");
		HX_STACK_LINE(139)
		Float pb_y = this->Interp(ty3,ty2,0.75);		HX_STACK_VAR(pb_y,"pb_y");
		HX_STACK_LINE(142)
		Float dx = (Float(((tx3 - tx0))) / Float((int)16));		HX_STACK_VAR(dx,"dx");
		HX_STACK_LINE(143)
		Float dy = (Float(((ty3 - ty0))) / Float((int)16));		HX_STACK_VAR(dy,"dy");
		HX_STACK_LINE(146)
		Float pcx_1 = this->Interp(tx0,tx1,0.375);		HX_STACK_VAR(pcx_1,"pcx_1");
		HX_STACK_LINE(147)
		Float pcy_1 = this->Interp(ty0,ty1,0.375);		HX_STACK_VAR(pcy_1,"pcy_1");
		HX_STACK_LINE(150)
		Float pcx_2 = (this->Interp(pa_x,pb_x,0.375) - dx);		HX_STACK_VAR(pcx_2,"pcx_2");
		HX_STACK_LINE(151)
		Float pcy_2 = (this->Interp(pa_y,pb_y,0.375) - dy);		HX_STACK_VAR(pcy_2,"pcy_2");
		HX_STACK_LINE(154)
		Float pcx_3 = (this->Interp(pb_x,pa_x,0.375) + dx);		HX_STACK_VAR(pcx_3,"pcx_3");
		HX_STACK_LINE(155)
		Float pcy_3 = (this->Interp(pb_y,pa_y,0.375) + dy);		HX_STACK_VAR(pcy_3,"pcy_3");
		HX_STACK_LINE(158)
		Float pcx_4 = this->Interp(tx3,tx2,0.375);		HX_STACK_VAR(pcx_4,"pcx_4");
		HX_STACK_LINE(159)
		Float pcy_4 = this->Interp(ty3,ty2,0.375);		HX_STACK_VAR(pcy_4,"pcy_4");
		HX_STACK_LINE(162)
		Float pax_1 = (((pcx_1 + pcx_2)) * 0.5);		HX_STACK_VAR(pax_1,"pax_1");
		HX_STACK_LINE(163)
		Float pay_1 = (((pcy_1 + pcy_2)) * 0.5);		HX_STACK_VAR(pay_1,"pay_1");
		HX_STACK_LINE(165)
		Float pax_2 = (((pa_x + pb_x)) * 0.5);		HX_STACK_VAR(pax_2,"pax_2");
		HX_STACK_LINE(166)
		Float pay_2 = (((pa_y + pb_y)) * 0.5);		HX_STACK_VAR(pay_2,"pay_2");
		HX_STACK_LINE(168)
		Float pax_3 = (((pcx_3 + pcx_4)) * 0.5);		HX_STACK_VAR(pax_3,"pax_3");
		HX_STACK_LINE(169)
		Float pay_3 = (((pcy_3 + pcy_4)) * 0.5);		HX_STACK_VAR(pay_3,"pay_3");
		HX_STACK_LINE(172)
		inGfx->curveTo(pcx_1,pcy_1,pax_1,pay_1);
		HX_STACK_LINE(173)
		inGfx->curveTo(pcx_2,pcy_2,pax_2,pay_2);
		HX_STACK_LINE(174)
		inGfx->curveTo(pcx_3,pcy_3,pax_3,pay_3);
		HX_STACK_LINE(175)
		inGfx->curveTo(pcx_4,pcy_4,tx3,ty3);
	}
return null();
}


Array< ::Dynamic > CubicSegment_obj::toQuadratics( Float tx0,Float ty0){
	HX_STACK_FRAME("format.svg.CubicSegment","toQuadratics",0x2d23bbda,"format.svg.CubicSegment.toQuadratics","format/svg/PathSegment.hx",180,0x6d7bc4b3)
	HX_STACK_THIS(this)
	HX_STACK_ARG(tx0,"tx0")
	HX_STACK_ARG(ty0,"ty0")
	HX_STACK_LINE(181)
	Array< ::Dynamic > result = Array_obj< ::Dynamic >::__new();		HX_STACK_VAR(result,"result");
	HX_STACK_LINE(184)
	Float pa_x = this->Interp(tx0,this->cx1,0.75);		HX_STACK_VAR(pa_x,"pa_x");
	HX_STACK_LINE(185)
	Float pa_y = this->Interp(ty0,this->cy1,0.75);		HX_STACK_VAR(pa_y,"pa_y");
	HX_STACK_LINE(186)
	Float pb_x = this->Interp(this->x,this->cx2,0.75);		HX_STACK_VAR(pb_x,"pb_x");
	HX_STACK_LINE(187)
	Float pb_y = this->Interp(this->y,this->cy2,0.75);		HX_STACK_VAR(pb_y,"pb_y");
	HX_STACK_LINE(190)
	Float dx = (Float(((this->x - tx0))) / Float((int)16));		HX_STACK_VAR(dx,"dx");
	HX_STACK_LINE(191)
	Float dy = (Float(((this->y - ty0))) / Float((int)16));		HX_STACK_VAR(dy,"dy");
	HX_STACK_LINE(194)
	Float pcx_1 = this->Interp(tx0,this->cx1,0.375);		HX_STACK_VAR(pcx_1,"pcx_1");
	HX_STACK_LINE(195)
	Float pcy_1 = this->Interp(ty0,this->cy1,0.375);		HX_STACK_VAR(pcy_1,"pcy_1");
	HX_STACK_LINE(198)
	Float pcx_2 = (this->Interp(pa_x,pb_x,0.375) - dx);		HX_STACK_VAR(pcx_2,"pcx_2");
	HX_STACK_LINE(199)
	Float pcy_2 = (this->Interp(pa_y,pb_y,0.375) - dy);		HX_STACK_VAR(pcy_2,"pcy_2");
	HX_STACK_LINE(202)
	Float pcx_3 = (this->Interp(pb_x,pa_x,0.375) + dx);		HX_STACK_VAR(pcx_3,"pcx_3");
	HX_STACK_LINE(203)
	Float pcy_3 = (this->Interp(pb_y,pa_y,0.375) + dy);		HX_STACK_VAR(pcy_3,"pcy_3");
	HX_STACK_LINE(206)
	Float pcx_4 = this->Interp(this->x,this->cx2,0.375);		HX_STACK_VAR(pcx_4,"pcx_4");
	HX_STACK_LINE(207)
	Float pcy_4 = this->Interp(this->y,this->cy2,0.375);		HX_STACK_VAR(pcy_4,"pcy_4");
	HX_STACK_LINE(210)
	Float pax_1 = (((pcx_1 + pcx_2)) * 0.5);		HX_STACK_VAR(pax_1,"pax_1");
	HX_STACK_LINE(211)
	Float pay_1 = (((pcy_1 + pcy_2)) * 0.5);		HX_STACK_VAR(pay_1,"pay_1");
	HX_STACK_LINE(213)
	Float pax_2 = (((pa_x + pb_x)) * 0.5);		HX_STACK_VAR(pax_2,"pax_2");
	HX_STACK_LINE(214)
	Float pay_2 = (((pa_y + pb_y)) * 0.5);		HX_STACK_VAR(pay_2,"pay_2");
	HX_STACK_LINE(216)
	Float pax_3 = (((pcx_3 + pcx_4)) * 0.5);		HX_STACK_VAR(pax_3,"pax_3");
	HX_STACK_LINE(217)
	Float pay_3 = (((pcy_3 + pcy_4)) * 0.5);		HX_STACK_VAR(pay_3,"pay_3");
	HX_STACK_LINE(220)
	result->push(::format::svg::QuadraticSegment_obj::__new(pcx_1,pcy_1,pax_1,pay_1));
	HX_STACK_LINE(221)
	result->push(::format::svg::QuadraticSegment_obj::__new(pcx_2,pcy_2,pax_2,pay_2));
	HX_STACK_LINE(222)
	result->push(::format::svg::QuadraticSegment_obj::__new(pcx_3,pcy_3,pax_3,pay_3));
	HX_STACK_LINE(223)
	result->push(::format::svg::QuadraticSegment_obj::__new(pcx_4,pcy_4,this->x,this->y));
	HX_STACK_LINE(224)
	return result;
}


HX_DEFINE_DYNAMIC_FUNC2(CubicSegment_obj,toQuadratics,return )

int CubicSegment_obj::getType( ){
	HX_STACK_FRAME("format.svg.CubicSegment","getType",0x1d3bd50c,"format.svg.CubicSegment.getType","format/svg/PathSegment.hx",228,0x6d7bc4b3)
	HX_STACK_THIS(this)
	HX_STACK_LINE(228)
	return (int)4;
}



CubicSegment_obj::CubicSegment_obj()
{
}

Dynamic CubicSegment_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"cx1") ) { return cx1; }
		if (HX_FIELD_EQ(inName,"cy1") ) { return cy1; }
		if (HX_FIELD_EQ(inName,"cx2") ) { return cx2; }
		if (HX_FIELD_EQ(inName,"cy2") ) { return cy2; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"toGfx") ) { return toGfx_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"prevCX") ) { return prevCX_dyn(); }
		if (HX_FIELD_EQ(inName,"prevCY") ) { return prevCY_dyn(); }
		if (HX_FIELD_EQ(inName,"Interp") ) { return Interp_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"getType") ) { return getType_dyn(); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"toQuadratics") ) { return toQuadratics_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic CubicSegment_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"cx1") ) { cx1=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"cy1") ) { cy1=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"cx2") ) { cx2=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"cy2") ) { cy2=inValue.Cast< Float >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void CubicSegment_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("cx1"));
	outFields->push(HX_CSTRING("cy1"));
	outFields->push(HX_CSTRING("cx2"));
	outFields->push(HX_CSTRING("cy2"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

#if HXCPP_SCRIPTABLE
static hx::StorageInfo sMemberStorageInfo[] = {
	{hx::fsFloat,(int)offsetof(CubicSegment_obj,cx1),HX_CSTRING("cx1")},
	{hx::fsFloat,(int)offsetof(CubicSegment_obj,cy1),HX_CSTRING("cy1")},
	{hx::fsFloat,(int)offsetof(CubicSegment_obj,cx2),HX_CSTRING("cx2")},
	{hx::fsFloat,(int)offsetof(CubicSegment_obj,cy2),HX_CSTRING("cy2")},
	{ hx::fsUnknown, 0, null()}
};
#endif

static ::String sMemberFields[] = {
	HX_CSTRING("cx1"),
	HX_CSTRING("cy1"),
	HX_CSTRING("cx2"),
	HX_CSTRING("cy2"),
	HX_CSTRING("prevCX"),
	HX_CSTRING("prevCY"),
	HX_CSTRING("Interp"),
	HX_CSTRING("toGfx"),
	HX_CSTRING("toQuadratics"),
	HX_CSTRING("getType"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(CubicSegment_obj::__mClass,"__mClass");
};

#ifdef HXCPP_VISIT_ALLOCS
static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(CubicSegment_obj::__mClass,"__mClass");
};

#endif

Class CubicSegment_obj::__mClass;

void CubicSegment_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("format.svg.CubicSegment"), hx::TCanCast< CubicSegment_obj> ,sStaticFields,sMemberFields,
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

void CubicSegment_obj::__boot()
{
}

} // end namespace format
} // end namespace svg
