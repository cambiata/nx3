#include <hxcpp.h>

#ifndef INCLUDED_nx3_render_ITarget
#include <nx3/render/ITarget.h>
#endif
#ifndef INCLUDED_nx3_render_TestTarget
#include <nx3/render/TestTarget.h>
#endif
#ifndef INCLUDED_nx3_render_svg_Elements
#include <nx3/render/svg/Elements.h>
#endif
namespace nx3{
namespace render{

Void TestTarget_obj::__construct(::nx3::render::ITarget target)
{
HX_STACK_FRAME("nx3.render.TestTarget","new",0x47bb0a68,"nx3.render.TestTarget.new","nx3/render/TestTarget.hx",15,0x0954f3e8)

HX_STACK_ARG(target,"target")
{
	HX_STACK_LINE(15)
	this->target = target;
}
;
	return null();
}

//TestTarget_obj::~TestTarget_obj() { }

Dynamic TestTarget_obj::__CreateEmpty() { return  new TestTarget_obj; }
hx::ObjectPtr< TestTarget_obj > TestTarget_obj::__new(::nx3::render::ITarget target)
{  hx::ObjectPtr< TestTarget_obj > result = new TestTarget_obj();
	result->__construct(target);
	return result;}

Dynamic TestTarget_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< TestTarget_obj > result = new TestTarget_obj();
	result->__construct(inArgs[0]);
	return result;}

Void TestTarget_obj::test( ){
{
		HX_STACK_FRAME("nx3.render.TestTarget","test",0x7fe5554a,"nx3.render.TestTarget.test","nx3/render/TestTarget.hx",19,0x0954f3e8)
		HX_STACK_THIS(this)
		HX_STACK_LINE(20)
		this->target->testLines((int)0,(int)0,(int)200);
		HX_STACK_LINE(21)
		this->target->testSymbol((int)20,(int)0,null());
		HX_STACK_LINE(22)
		this->target->testSymbol((int)60,(int)0,::nx3::render::svg::Elements_obj::clefG);
		HX_STACK_LINE(23)
		this->target->testSymbol((int)120,(int)0,::nx3::render::svg::Elements_obj::clefC);
		HX_STACK_LINE(24)
		this->target->testLines((int)0,(int)100,(int)200);
		HX_STACK_LINE(25)
		this->target->testSymbol((int)20,(int)100,null());
		HX_STACK_LINE(26)
		this->target->testSymbol((int)60,(int)100,::nx3::render::svg::Elements_obj::clefG);
		HX_STACK_LINE(27)
		this->target->testSymbol((int)120,(int)100,::nx3::render::svg::Elements_obj::clefC);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(TestTarget_obj,test,(void))


TestTarget_obj::TestTarget_obj()
{
}

void TestTarget_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(TestTarget);
	HX_MARK_MEMBER_NAME(target,"target");
	HX_MARK_END_CLASS();
}

void TestTarget_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(target,"target");
}

Dynamic TestTarget_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"test") ) { return test_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"target") ) { return target; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic TestTarget_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 6:
		if (HX_FIELD_EQ(inName,"target") ) { target=inValue.Cast< ::nx3::render::ITarget >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void TestTarget_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("target"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

#if HXCPP_SCRIPTABLE
static hx::StorageInfo sMemberStorageInfo[] = {
	{hx::fsObject /*::nx3::render::ITarget*/ ,(int)offsetof(TestTarget_obj,target),HX_CSTRING("target")},
	{ hx::fsUnknown, 0, null()}
};
#endif

static ::String sMemberFields[] = {
	HX_CSTRING("target"),
	HX_CSTRING("test"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(TestTarget_obj::__mClass,"__mClass");
};

#ifdef HXCPP_VISIT_ALLOCS
static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(TestTarget_obj::__mClass,"__mClass");
};

#endif

Class TestTarget_obj::__mClass;

void TestTarget_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("nx3.render.TestTarget"), hx::TCanCast< TestTarget_obj> ,sStaticFields,sMemberFields,
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

void TestTarget_obj::__boot()
{
}

} // end namespace nx3
} // end namespace render
