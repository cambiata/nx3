#include <hxcpp.h>

#ifndef INCLUDED_nx3_render_ITarget
#include <nx3/render/ITarget.h>
#endif
namespace nx3{
namespace render{

HX_DEFINE_DYNAMIC_FUNC0(ITarget_obj,test,)

HX_DEFINE_DYNAMIC_FUNC3(ITarget_obj,testLines,)

HX_DEFINE_DYNAMIC_FUNC3(ITarget_obj,testSymbol,)


static ::String sMemberFields[] = {
	HX_CSTRING("test"),
	HX_CSTRING("testLines"),
	HX_CSTRING("testSymbol"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(ITarget_obj::__mClass,"__mClass");
};

#ifdef HXCPP_VISIT_ALLOCS
static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(ITarget_obj::__mClass,"__mClass");
};

#endif

Class ITarget_obj::__mClass;

void ITarget_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("nx3.render.ITarget"), hx::TCanCast< ITarget_obj> ,0,sMemberFields,
	0, 0,
	&super::__SGetClass(), 0, sMarkStatics
#ifdef HXCPP_VISIT_ALLOCS
    , sVisitStatics
#endif
#ifdef HXCPP_SCRIPTABLE
    , 0
#endif
);
}

void ITarget_obj::__boot()
{
}

} // end namespace nx3
} // end namespace render
