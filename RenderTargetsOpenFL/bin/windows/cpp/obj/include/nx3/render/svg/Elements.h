#ifndef INCLUDED_nx3_render_svg_Elements
#define INCLUDED_nx3_render_svg_Elements

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS3(nx3,render,svg,Elements)
namespace nx3{
namespace render{
namespace svg{


class HXCPP_CLASS_ATTRIBUTES  Elements_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Elements_obj OBJ_;
		Elements_obj();
		Void __construct();

	public:
		inline void *operator new( size_t inSize, bool inContainer=false)
			{ return hx::Object::operator new(inSize,inContainer); }
		static hx::ObjectPtr< Elements_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		//~Elements_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		::String __ToString() const { return HX_CSTRING("Elements"); }

		static ::String clefG;
		static ::String clefC;
		static ::String clefF;
		static ::String HVT4;
		static ::String noteBlack;
		static ::String HVT2;
		static ::String noteWhite;
		static ::String HVT1;
		static ::String noteWhole;
		static ::String signNatural;
		static ::String signSharp;
		static ::String signFlat;
		static ::String flagDown8;
		static ::String flagUp8;
		static ::String flagDown16;
		static ::String flagUp16;
		static ::String pauseNv4;
		static ::String pauseNv8;
		static ::String pauseNv16;
		static ::String time0;
		static ::String time1;
		static ::String time2;
		static ::String time3;
		static ::String time4;
		static ::String time5;
		static ::String time6;
		static ::String time7;
		static ::String time8;
		static ::String time9;
		static ::String timeCommon;
		static ::String timeAllabreve;
		static ::String tplCircle;
		static ::String tplCircleUp;
		static ::String tplArrowDown;
		static ::String tplArrowUp;
		static ::String tpl1;
		static ::String tpl2;
		static ::String tpl3;
		static ::String tpl4;
		static ::String tpl5;
		static ::String tpl6x;
		static ::String tpl6;
		static ::String tpl7;
};

} // end namespace nx3
} // end namespace render
} // end namespace svg

#endif /* INCLUDED_nx3_render_svg_Elements */ 
