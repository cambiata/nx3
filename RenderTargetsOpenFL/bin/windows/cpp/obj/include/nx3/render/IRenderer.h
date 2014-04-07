#ifndef INCLUDED_nx3_render_IRenderer
#define INCLUDED_nx3_render_IRenderer

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(nx3,render,IRenderer)
namespace nx3{
namespace render{


class HXCPP_CLASS_ATTRIBUTES  IRenderer_obj : public hx::Interface{
	public:
		typedef hx::Interface super;
		typedef IRenderer_obj OBJ_;
		HX_DO_INTERFACE_RTTI;
		static void __boot();
virtual Void notelines( Float x,Float y,Float width)=0;
		Dynamic notelines_dyn();
};

#define DELEGATE_nx3_render_IRenderer \
virtual Void notelines( Float x,Float y,Float width) { return mDelegate->notelines(x,y,width);}  \
virtual Dynamic notelines_dyn() { return mDelegate->notelines_dyn();}  \


template<typename IMPL>
class IRenderer_delegate_ : public IRenderer_obj
{
	protected:
		IMPL *mDelegate;
	public:
		IRenderer_delegate_(IMPL *inDelegate) : mDelegate(inDelegate) {}
		hx::Object *__GetRealObject() { return mDelegate; }
		void __Visit(HX_VISIT_PARAMS) { HX_VISIT_OBJECT(mDelegate); }
		DELEGATE_nx3_render_IRenderer
};

} // end namespace nx3
} // end namespace render

#endif /* INCLUDED_nx3_render_IRenderer */ 
