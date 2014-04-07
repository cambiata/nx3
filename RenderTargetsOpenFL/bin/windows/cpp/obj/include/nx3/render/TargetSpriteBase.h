#ifndef INCLUDED_nx3_render_TargetSpriteBase
#define INCLUDED_nx3_render_TargetSpriteBase

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <nx3/render/ITarget.h>
HX_DECLARE_CLASS2(flash,display,DisplayObject)
HX_DECLARE_CLASS2(flash,display,DisplayObjectContainer)
HX_DECLARE_CLASS2(flash,display,Graphics)
HX_DECLARE_CLASS2(flash,display,IBitmapDrawable)
HX_DECLARE_CLASS2(flash,display,InteractiveObject)
HX_DECLARE_CLASS2(flash,display,Sprite)
HX_DECLARE_CLASS2(flash,events,EventDispatcher)
HX_DECLARE_CLASS2(flash,events,IEventDispatcher)
HX_DECLARE_CLASS2(nx3,render,ITarget)
HX_DECLARE_CLASS2(nx3,render,TargetSpriteBase)
namespace nx3{
namespace render{


class HXCPP_CLASS_ATTRIBUTES  TargetSpriteBase_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef TargetSpriteBase_obj OBJ_;
		TargetSpriteBase_obj();
		Void __construct(::flash::display::Sprite target,Dynamic scaling);

	public:
		inline void *operator new( size_t inSize, bool inContainer=true)
			{ return hx::Object::operator new(inSize,inContainer); }
		static hx::ObjectPtr< TargetSpriteBase_obj > __new(::flash::display::Sprite target,Dynamic scaling);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		//~TargetSpriteBase_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		inline operator ::nx3::render::ITarget_obj *()
			{ return new ::nx3::render::ITarget_delegate_< TargetSpriteBase_obj >(this); }
		hx::Object *__ToInterface(const hx::type_info &inType);
		::String __ToString() const { return HX_CSTRING("TargetSpriteBase"); }

		::flash::display::Graphics graphics;
		Dynamic scaling;
		::flash::display::Sprite target;
		virtual Void test( );
		Dynamic test_dyn();

		virtual Void testLines( Float x,Float y,Float width);
		Dynamic testLines_dyn();

		virtual Void testSymbol( Float x,Float y,::String xmlStr);
		Dynamic testSymbol_dyn();

};

} // end namespace nx3
} // end namespace render

#endif /* INCLUDED_nx3_render_TargetSpriteBase */ 
