#ifndef INCLUDED_format_svg_SVG2Gfx
#define INCLUDED_format_svg_SVG2Gfx

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS0(Xml)
HX_DECLARE_CLASS2(flash,display,DisplayObject)
HX_DECLARE_CLASS2(flash,display,IBitmapDrawable)
HX_DECLARE_CLASS2(flash,display,Shape)
HX_DECLARE_CLASS2(flash,events,EventDispatcher)
HX_DECLARE_CLASS2(flash,events,IEventDispatcher)
HX_DECLARE_CLASS2(format,svg,SVG2Gfx)
HX_DECLARE_CLASS2(format,svg,SVGRenderer)
namespace format{
namespace svg{


class HXCPP_CLASS_ATTRIBUTES  SVG2Gfx_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef SVG2Gfx_obj OBJ_;
		SVG2Gfx_obj();
		Void __construct(::Xml inXml);

	public:
		inline void *operator new( size_t inSize, bool inContainer=true)
			{ return hx::Object::operator new(inSize,inContainer); }
		static hx::ObjectPtr< SVG2Gfx_obj > __new(::Xml inXml);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		//~SVG2Gfx_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("SVG2Gfx"); }

		::format::svg::SVGRenderer renderer;
		virtual ::flash::display::Shape createShape( );
		Dynamic createShape_dyn();

};

} // end namespace format
} // end namespace svg

#endif /* INCLUDED_format_svg_SVG2Gfx */ 
