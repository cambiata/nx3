#ifndef INCLUDED_nx3_render_ITarget
#define INCLUDED_nx3_render_ITarget

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(nx3,render,ITarget)
namespace nx3{
namespace render{


class HXCPP_CLASS_ATTRIBUTES  ITarget_obj : public hx::Interface{
	public:
		typedef hx::Interface super;
		typedef ITarget_obj OBJ_;
		HX_DO_INTERFACE_RTTI;
		static void __boot();
virtual Void test( )=0;
		Dynamic test_dyn();
virtual Void testLines( Float x,Float y,Float width)=0;
		Dynamic testLines_dyn();
virtual Void testSymbol( Float x,Float y,::String xmlStr)=0;
		Dynamic testSymbol_dyn();
};

#define DELEGATE_nx3_render_ITarget \
virtual Void test( ) { return mDelegate->test();}  \
virtual Dynamic test_dyn() { return mDelegate->test_dyn();}  \
virtual Void testLines( Float x,Float y,Float width) { return mDelegate->testLines(x,y,width);}  \
virtual Dynamic testLines_dyn() { return mDelegate->testLines_dyn();}  \
virtual Void testSymbol( Float x,Float y,::String xmlStr) { return mDelegate->testSymbol(x,y,xmlStr);}  \
virtual Dynamic testSymbol_dyn() { return mDelegate->testSymbol_dyn();}  \


template<typename IMPL>
class ITarget_delegate_ : public ITarget_obj
{
	protected:
		IMPL *mDelegate;
	public:
		ITarget_delegate_(IMPL *inDelegate) : mDelegate(inDelegate) {}
		hx::Object *__GetRealObject() { return mDelegate; }
		void __Visit(HX_VISIT_PARAMS) { HX_VISIT_OBJECT(mDelegate); }
		DELEGATE_nx3_render_ITarget
};

} // end namespace nx3
} // end namespace render

#endif /* INCLUDED_nx3_render_ITarget */ 
