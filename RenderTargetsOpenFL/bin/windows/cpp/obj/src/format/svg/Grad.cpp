#include <hxcpp.h>

#ifndef INCLUDED_flash_display_GradientType
#include <flash/display/GradientType.h>
#endif
#ifndef INCLUDED_flash_geom_Matrix
#include <flash/geom/Matrix.h>
#endif
#ifndef INCLUDED_format_gfx_Gradient
#include <format/gfx/Gradient.h>
#endif
#ifndef INCLUDED_format_svg_Grad
#include <format/svg/Grad.h>
#endif
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
namespace format{
namespace svg{

Void Grad_obj::__construct(::flash::display::GradientType inType)
{
HX_STACK_FRAME("format.svg.Grad","new",0x60ea7ac1,"format.svg.Grad.new","format/svg/Grad.hx",35,0xce08b78d)

HX_STACK_ARG(inType,"inType")
{
	HX_STACK_LINE(36)
	super::__construct();
	HX_STACK_LINE(37)
	this->type = inType;
	HX_STACK_LINE(38)
	this->radius = 0.0;
	HX_STACK_LINE(39)
	this->gradMatrix = ::flash::geom::Matrix_obj::__new(null(),null(),null(),null(),null(),null());
	HX_STACK_LINE(40)
	this->x1 = 0.0;
	HX_STACK_LINE(41)
	this->y1 = 0.0;
	HX_STACK_LINE(42)
	this->x2 = 0.0;
	HX_STACK_LINE(43)
	this->y2 = 0.0;
}
;
	return null();
}

//Grad_obj::~Grad_obj() { }

Dynamic Grad_obj::__CreateEmpty() { return  new Grad_obj; }
hx::ObjectPtr< Grad_obj > Grad_obj::__new(::flash::display::GradientType inType)
{  hx::ObjectPtr< Grad_obj > result = new Grad_obj();
	result->__construct(inType);
	return result;}

Dynamic Grad_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Grad_obj > result = new Grad_obj();
	result->__construct(inArgs[0]);
	return result;}

Void Grad_obj::updateMatrix( ::flash::geom::Matrix inMatrix){
{
		HX_STACK_FRAME("format.svg.Grad","updateMatrix",0xe8075ea9,"format.svg.Grad.updateMatrix","format/svg/Grad.hx",47,0xce08b78d)
		HX_STACK_THIS(this)
		HX_STACK_ARG(inMatrix,"inMatrix")
		HX_STACK_LINE(48)
		Float dx = (this->x2 - this->x1);		HX_STACK_VAR(dx,"dx");
		HX_STACK_LINE(49)
		Float dy = (this->y2 - this->y1);		HX_STACK_VAR(dy,"dy");
		HX_STACK_LINE(50)
		Float theta = ::Math_obj::atan2(dy,dx);		HX_STACK_VAR(theta,"theta");
		HX_STACK_LINE(51)
		Float len = ::Math_obj::sqrt(((dx * dx) + (dy * dy)));		HX_STACK_VAR(len,"len");
		HX_STACK_LINE(53)
		::flash::geom::Matrix mtx = ::flash::geom::Matrix_obj::__new(null(),null(),null(),null(),null(),null());		HX_STACK_VAR(mtx,"mtx");
		HX_STACK_LINE(55)
		if (((this->type == ::flash::display::GradientType_obj::LINEAR))){
			HX_STACK_LINE(57)
			mtx->createGradientBox(1.0,1.0,null(),null(),null());
			HX_STACK_LINE(58)
			mtx->scale(len,len);
		}
		else{
			HX_STACK_LINE(62)
			if (((this->radius != 0.0))){
				HX_STACK_LINE(63)
				this->focus = (Float(len) / Float(this->radius));
			}
			HX_STACK_LINE(65)
			mtx->createGradientBox(1.0,1.0,null(),null(),null());
			HX_STACK_LINE(66)
			mtx->translate(-0.5,-0.5);
			HX_STACK_LINE(67)
			mtx->scale((this->radius * (int)2),(this->radius * (int)2));
		}
		HX_STACK_LINE(70)
		mtx->rotate(theta);
		HX_STACK_LINE(71)
		mtx->translate(this->x1,this->y1);
		HX_STACK_LINE(72)
		mtx->concat(this->gradMatrix);
		HX_STACK_LINE(73)
		mtx->concat(inMatrix);
		HX_STACK_LINE(74)
		this->matrix = mtx;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Grad_obj,updateMatrix,(void))


Grad_obj::Grad_obj()
{
}

void Grad_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Grad);
	HX_MARK_MEMBER_NAME(gradMatrix,"gradMatrix");
	HX_MARK_MEMBER_NAME(radius,"radius");
	HX_MARK_MEMBER_NAME(x1,"x1");
	HX_MARK_MEMBER_NAME(y1,"y1");
	HX_MARK_MEMBER_NAME(x2,"x2");
	HX_MARK_MEMBER_NAME(y2,"y2");
	::format::gfx::Gradient_obj::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Grad_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(gradMatrix,"gradMatrix");
	HX_VISIT_MEMBER_NAME(radius,"radius");
	HX_VISIT_MEMBER_NAME(x1,"x1");
	HX_VISIT_MEMBER_NAME(y1,"y1");
	HX_VISIT_MEMBER_NAME(x2,"x2");
	HX_VISIT_MEMBER_NAME(y2,"y2");
	::format::gfx::Gradient_obj::__Visit(HX_VISIT_ARG);
}

Dynamic Grad_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 2:
		if (HX_FIELD_EQ(inName,"x1") ) { return x1; }
		if (HX_FIELD_EQ(inName,"y1") ) { return y1; }
		if (HX_FIELD_EQ(inName,"x2") ) { return x2; }
		if (HX_FIELD_EQ(inName,"y2") ) { return y2; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"radius") ) { return radius; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"gradMatrix") ) { return gradMatrix; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"updateMatrix") ) { return updateMatrix_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Grad_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 2:
		if (HX_FIELD_EQ(inName,"x1") ) { x1=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"y1") ) { y1=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"x2") ) { x2=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"y2") ) { y2=inValue.Cast< Float >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"radius") ) { radius=inValue.Cast< Float >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"gradMatrix") ) { gradMatrix=inValue.Cast< ::flash::geom::Matrix >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Grad_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("gradMatrix"));
	outFields->push(HX_CSTRING("radius"));
	outFields->push(HX_CSTRING("x1"));
	outFields->push(HX_CSTRING("y1"));
	outFields->push(HX_CSTRING("x2"));
	outFields->push(HX_CSTRING("y2"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

#if HXCPP_SCRIPTABLE
static hx::StorageInfo sMemberStorageInfo[] = {
	{hx::fsObject /*::flash::geom::Matrix*/ ,(int)offsetof(Grad_obj,gradMatrix),HX_CSTRING("gradMatrix")},
	{hx::fsFloat,(int)offsetof(Grad_obj,radius),HX_CSTRING("radius")},
	{hx::fsFloat,(int)offsetof(Grad_obj,x1),HX_CSTRING("x1")},
	{hx::fsFloat,(int)offsetof(Grad_obj,y1),HX_CSTRING("y1")},
	{hx::fsFloat,(int)offsetof(Grad_obj,x2),HX_CSTRING("x2")},
	{hx::fsFloat,(int)offsetof(Grad_obj,y2),HX_CSTRING("y2")},
	{ hx::fsUnknown, 0, null()}
};
#endif

static ::String sMemberFields[] = {
	HX_CSTRING("gradMatrix"),
	HX_CSTRING("radius"),
	HX_CSTRING("x1"),
	HX_CSTRING("y1"),
	HX_CSTRING("x2"),
	HX_CSTRING("y2"),
	HX_CSTRING("updateMatrix"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Grad_obj::__mClass,"__mClass");
};

#ifdef HXCPP_VISIT_ALLOCS
static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Grad_obj::__mClass,"__mClass");
};

#endif

Class Grad_obj::__mClass;

void Grad_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("format.svg.Grad"), hx::TCanCast< Grad_obj> ,sStaticFields,sMemberFields,
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

void Grad_obj::__boot()
{
}

} // end namespace format
} // end namespace svg
