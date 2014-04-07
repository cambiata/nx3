#ifndef INCLUDED_nx3_render_svg_ShapeTools
#define INCLUDED_nx3_render_svg_ShapeTools

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(flash,display,DisplayObject)
HX_DECLARE_CLASS2(flash,display,IBitmapDrawable)
HX_DECLARE_CLASS2(flash,display,Shape)
HX_DECLARE_CLASS2(flash,events,EventDispatcher)
HX_DECLARE_CLASS2(flash,events,IEventDispatcher)
HX_DECLARE_CLASS3(nx3,render,svg,ShapeTools)
namespace nx3{
namespace render{
namespace svg{


class HXCPP_CLASS_ATTRIBUTES  ShapeTools_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef ShapeTools_obj OBJ_;
		ShapeTools_obj();
		Void __construct();

	public:
		inline void *operator new( size_t inSize, bool inContainer=false)
			{ return hx::Object::operator new(inSize,inContainer); }
		static hx::ObjectPtr< ShapeTools_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		//~ShapeTools_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		::String __ToString() const { return HX_CSTRING("ShapeTools"); }

		static ::flash::display::Shape getShape( ::String xmlStr,Dynamic scaling);
		static Dynamic getShape_dyn();

		static ::String getElementStr( ::String element);
		static Dynamic getElementStr_dyn();

};

} // end namespace nx3
} // end namespace render
} // end namespace svg

#endif /* INCLUDED_nx3_render_svg_ShapeTools */ 
