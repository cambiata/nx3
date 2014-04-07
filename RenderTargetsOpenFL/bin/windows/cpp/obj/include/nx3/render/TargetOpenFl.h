#ifndef INCLUDED_nx3_render_TargetOpenFl
#define INCLUDED_nx3_render_TargetOpenFl

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <nx3/render/TargetSpriteBase.h>
#include <nx3/render/ITarget.h>
HX_DECLARE_CLASS2(flash,display,DisplayObject)
HX_DECLARE_CLASS2(flash,display,DisplayObjectContainer)
HX_DECLARE_CLASS2(flash,display,IBitmapDrawable)
HX_DECLARE_CLASS2(flash,display,InteractiveObject)
HX_DECLARE_CLASS2(flash,display,Sprite)
HX_DECLARE_CLASS2(flash,events,EventDispatcher)
HX_DECLARE_CLASS2(flash,events,IEventDispatcher)
HX_DECLARE_CLASS2(nx3,render,ITarget)
HX_DECLARE_CLASS2(nx3,render,TargetOpenFl)
HX_DECLARE_CLASS2(nx3,render,TargetSpriteBase)
namespace nx3{
namespace render{


class HXCPP_CLASS_ATTRIBUTES  TargetOpenFl_obj : public ::nx3::render::TargetSpriteBase_obj{
	public:
		typedef ::nx3::render::TargetSpriteBase_obj super;
		typedef TargetOpenFl_obj OBJ_;
		TargetOpenFl_obj();
		Void __construct(::flash::display::Sprite target,Dynamic scaling);

	public:
		inline void *operator new( size_t inSize, bool inContainer=true)
			{ return hx::Object::operator new(inSize,inContainer); }
		static hx::ObjectPtr< TargetOpenFl_obj > __new(::flash::display::Sprite target,Dynamic scaling);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		//~TargetOpenFl_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		inline operator ::nx3::render::ITarget_obj *()
			{ return new ::nx3::render::ITarget_delegate_< TargetOpenFl_obj >(this); }
		hx::Object *__ToInterface(const hx::type_info &inType);
		::String __ToString() const { return HX_CSTRING("TargetOpenFl"); }

		virtual ::flash::display::Sprite getTarget( );
		Dynamic getTarget_dyn();

};

} // end namespace nx3
} // end namespace render

#endif /* INCLUDED_nx3_render_TargetOpenFl */ 
