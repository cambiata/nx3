#include <hxcpp.h>

#ifndef INCLUDED_nx3_render_IRenderer
#include <nx3/render/IRenderer.h>
#endif
namespace nx3{
namespace render{

HX_DEFINE_DYNAMIC_FUNC3(IRenderer_obj,notelines,)


static ::String sMemberFields[] = {
	HX_CSTRING("notelines"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(IRenderer_obj::__mClass,"__mClass");
};

#ifdef HXCPP_VISIT_ALLOCS
static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(IRenderer_obj::__mClass,"__mClass");
};

#endif

Class IRenderer_obj::__mClass;

void IRenderer_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("nx3.render.IRenderer"), hx::TCanCast< IRenderer_obj> ,0,sMemberFields,
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

void IRenderer_obj::__boot()
{
}

} // end namespace nx3
} // end namespace render
