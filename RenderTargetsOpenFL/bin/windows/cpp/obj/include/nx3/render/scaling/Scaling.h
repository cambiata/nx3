#ifndef INCLUDED_nx3_render_scaling_Scaling
#define INCLUDED_nx3_render_scaling_Scaling

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(flash,geom,Rectangle)
HX_DECLARE_CLASS3(nx3,render,scaling,Scaling)
namespace nx3{
namespace render{
namespace scaling{


class HXCPP_CLASS_ATTRIBUTES  Scaling_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Scaling_obj OBJ_;
		Scaling_obj();
		Void __construct();

	public:
		inline void *operator new( size_t inSize, bool inContainer=false)
			{ return hx::Object::operator new(inSize,inContainer); }
		static hx::ObjectPtr< Scaling_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		//~Scaling_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		::String __ToString() const { return HX_CSTRING("Scaling"); }

		static Dynamic MID;
		static Dynamic NORMAL;
		static Dynamic SMALL;
		static Dynamic BIG;
		static Dynamic PRINT1;
		static ::flash::geom::Rectangle scaleRect( Dynamic scaling,::flash::geom::Rectangle rect);
		static Dynamic scaleRect_dyn();

};

} // end namespace nx3
} // end namespace render
} // end namespace scaling

#endif /* INCLUDED_nx3_render_scaling_Scaling */ 
