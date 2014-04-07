#include <hxcpp.h>

#ifndef INCLUDED_format_gfx_Gfx
#include <format/gfx/Gfx.h>
#endif
#ifndef INCLUDED_format_svg_PathSegment
#include <format/svg/PathSegment.h>
#endif
#ifndef INCLUDED_format_svg_RenderContext
#include <format/svg/RenderContext.h>
#endif
namespace format{
namespace svg{

Void PathSegment_obj::__construct(Float inX,Float inY)
{
HX_STACK_FRAME("format.svg.PathSegment","new",0x3140079f,"format.svg.PathSegment.new","format/svg/PathSegment.hx",30,0x6d7bc4b3)

HX_STACK_ARG(inX,"inX")

HX_STACK_ARG(inY,"inY")
{
	HX_STACK_LINE(31)
	this->x = inX;
	HX_STACK_LINE(32)
	this->y = inY;
}
;
	return null();
}

//PathSegment_obj::~PathSegment_obj() { }

Dynamic PathSegment_obj::__CreateEmpty() { return  new PathSegment_obj; }
hx::ObjectPtr< PathSegment_obj > PathSegment_obj::__new(Float inX,Float inY)
{  hx::ObjectPtr< PathSegment_obj > result = new PathSegment_obj();
	result->__construct(inX,inY);
	return result;}

Dynamic PathSegment_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< PathSegment_obj > result = new PathSegment_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}

int PathSegment_obj::getType( ){
	HX_STACK_FRAME("format.svg.PathSegment","getType",0x869de52f,"format.svg.PathSegment.getType","format/svg/PathSegment.hx",34,0x6d7bc4b3)
	HX_STACK_THIS(this)
	HX_STACK_LINE(34)
	return (int)0;
}


HX_DEFINE_DYNAMIC_FUNC0(PathSegment_obj,getType,return )

Float PathSegment_obj::prevX( ){
	HX_STACK_FRAME("format.svg.PathSegment","prevX",0x36601b04,"format.svg.PathSegment.prevX","format/svg/PathSegment.hx",36,0x6d7bc4b3)
	HX_STACK_THIS(this)
	HX_STACK_LINE(36)
	return this->x;
}


HX_DEFINE_DYNAMIC_FUNC0(PathSegment_obj,prevX,return )

Float PathSegment_obj::prevY( ){
	HX_STACK_FRAME("format.svg.PathSegment","prevY",0x36601b05,"format.svg.PathSegment.prevY","format/svg/PathSegment.hx",37,0x6d7bc4b3)
	HX_STACK_THIS(this)
	HX_STACK_LINE(37)
	return this->y;
}


HX_DEFINE_DYNAMIC_FUNC0(PathSegment_obj,prevY,return )

Float PathSegment_obj::prevCX( ){
	HX_STACK_FRAME("format.svg.PathSegment","prevCX",0x5db77689,"format.svg.PathSegment.prevCX","format/svg/PathSegment.hx",38,0x6d7bc4b3)
	HX_STACK_THIS(this)
	HX_STACK_LINE(38)
	return this->x;
}


HX_DEFINE_DYNAMIC_FUNC0(PathSegment_obj,prevCX,return )

Float PathSegment_obj::prevCY( ){
	HX_STACK_FRAME("format.svg.PathSegment","prevCY",0x5db7768a,"format.svg.PathSegment.prevCY","format/svg/PathSegment.hx",39,0x6d7bc4b3)
	HX_STACK_THIS(this)
	HX_STACK_LINE(39)
	return this->y;
}


HX_DEFINE_DYNAMIC_FUNC0(PathSegment_obj,prevCY,return )

Void PathSegment_obj::toGfx( ::format::gfx::Gfx inGfx,::format::svg::RenderContext ioContext){
{
		HX_STACK_FRAME("format.svg.PathSegment","toGfx",0x81e7f7bd,"format.svg.PathSegment.toGfx","format/svg/PathSegment.hx",42,0x6d7bc4b3)
		HX_STACK_THIS(this)
		HX_STACK_ARG(inGfx,"inGfx")
		HX_STACK_ARG(ioContext,"ioContext")
		HX_STACK_LINE(43)
		ioContext->setLast(this->x,this->y);
		HX_STACK_LINE(44)
		ioContext->firstX = ioContext->lastX;
		HX_STACK_LINE(45)
		ioContext->firstY = ioContext->lastY;
		HX_STACK_LINE(46)
		inGfx->moveTo(ioContext->lastX,ioContext->lastY);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(PathSegment_obj,toGfx,(void))

int PathSegment_obj::MOVE;

int PathSegment_obj::DRAW;

int PathSegment_obj::CURVE;

int PathSegment_obj::CUBIC;

int PathSegment_obj::ARC;


PathSegment_obj::PathSegment_obj()
{
}

Dynamic PathSegment_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 1:
		if (HX_FIELD_EQ(inName,"x") ) { return x; }
		if (HX_FIELD_EQ(inName,"y") ) { return y; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"prevX") ) { return prevX_dyn(); }
		if (HX_FIELD_EQ(inName,"prevY") ) { return prevY_dyn(); }
		if (HX_FIELD_EQ(inName,"toGfx") ) { return toGfx_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"prevCX") ) { return prevCX_dyn(); }
		if (HX_FIELD_EQ(inName,"prevCY") ) { return prevCY_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"getType") ) { return getType_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic PathSegment_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 1:
		if (HX_FIELD_EQ(inName,"x") ) { x=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"y") ) { y=inValue.Cast< Float >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void PathSegment_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("x"));
	outFields->push(HX_CSTRING("y"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("MOVE"),
	HX_CSTRING("DRAW"),
	HX_CSTRING("CURVE"),
	HX_CSTRING("CUBIC"),
	HX_CSTRING("ARC"),
	String(null()) };

#if HXCPP_SCRIPTABLE
static hx::StorageInfo sMemberStorageInfo[] = {
	{hx::fsFloat,(int)offsetof(PathSegment_obj,x),HX_CSTRING("x")},
	{hx::fsFloat,(int)offsetof(PathSegment_obj,y),HX_CSTRING("y")},
	{ hx::fsUnknown, 0, null()}
};
#endif

static ::String sMemberFields[] = {
	HX_CSTRING("x"),
	HX_CSTRING("y"),
	HX_CSTRING("getType"),
	HX_CSTRING("prevX"),
	HX_CSTRING("prevY"),
	HX_CSTRING("prevCX"),
	HX_CSTRING("prevCY"),
	HX_CSTRING("toGfx"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(PathSegment_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(PathSegment_obj::MOVE,"MOVE");
	HX_MARK_MEMBER_NAME(PathSegment_obj::DRAW,"DRAW");
	HX_MARK_MEMBER_NAME(PathSegment_obj::CURVE,"CURVE");
	HX_MARK_MEMBER_NAME(PathSegment_obj::CUBIC,"CUBIC");
	HX_MARK_MEMBER_NAME(PathSegment_obj::ARC,"ARC");
};

#ifdef HXCPP_VISIT_ALLOCS
static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(PathSegment_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(PathSegment_obj::MOVE,"MOVE");
	HX_VISIT_MEMBER_NAME(PathSegment_obj::DRAW,"DRAW");
	HX_VISIT_MEMBER_NAME(PathSegment_obj::CURVE,"CURVE");
	HX_VISIT_MEMBER_NAME(PathSegment_obj::CUBIC,"CUBIC");
	HX_VISIT_MEMBER_NAME(PathSegment_obj::ARC,"ARC");
};

#endif

Class PathSegment_obj::__mClass;

void PathSegment_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("format.svg.PathSegment"), hx::TCanCast< PathSegment_obj> ,sStaticFields,sMemberFields,
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

void PathSegment_obj::__boot()
{
	MOVE= (int)1;
	DRAW= (int)2;
	CURVE= (int)3;
	CUBIC= (int)4;
	ARC= (int)5;
}

} // end namespace format
} // end namespace svg
