#ifndef INCLUDED_nx3_render_TestTarget
#define INCLUDED_nx3_render_TestTarget

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(nx3,render,ITarget)
HX_DECLARE_CLASS2(nx3,render,TestTarget)
namespace nx3{
namespace render{


class HXCPP_CLASS_ATTRIBUTES  TestTarget_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef TestTarget_obj OBJ_;
		TestTarget_obj();
		Void __construct(::nx3::render::ITarget target);

	public:
		inline void *operator new( size_t inSize, bool inContainer=true)
			{ return hx::Object::operator new(inSize,inContainer); }
		static hx::ObjectPtr< TestTarget_obj > __new(::nx3::render::ITarget target);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		//~TestTarget_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("TestTarget"); }

		::nx3::render::ITarget target;
		virtual Void test( );
		Dynamic test_dyn();

};

} // end namespace nx3
} // end namespace render

#endif /* INCLUDED_nx3_render_TestTarget */ 
