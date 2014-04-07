#include <hxcpp.h>

#ifndef INCLUDED_flash_display_CapsStyle
#include <flash/display/CapsStyle.h>
#endif
#ifndef INCLUDED_flash_display_DisplayObject
#include <flash/display/DisplayObject.h>
#endif
#ifndef INCLUDED_flash_display_DisplayObjectContainer
#include <flash/display/DisplayObjectContainer.h>
#endif
#ifndef INCLUDED_flash_display_Graphics
#include <flash/display/Graphics.h>
#endif
#ifndef INCLUDED_flash_display_IBitmapDrawable
#include <flash/display/IBitmapDrawable.h>
#endif
#ifndef INCLUDED_flash_display_InteractiveObject
#include <flash/display/InteractiveObject.h>
#endif
#ifndef INCLUDED_flash_display_JointStyle
#include <flash/display/JointStyle.h>
#endif
#ifndef INCLUDED_flash_display_LineScaleMode
#include <flash/display/LineScaleMode.h>
#endif
#ifndef INCLUDED_flash_display_Shape
#include <flash/display/Shape.h>
#endif
#ifndef INCLUDED_flash_display_Sprite
#include <flash/display/Sprite.h>
#endif
#ifndef INCLUDED_flash_events_EventDispatcher
#include <flash/events/EventDispatcher.h>
#endif
#ifndef INCLUDED_flash_events_IEventDispatcher
#include <flash/events/IEventDispatcher.h>
#endif
#ifndef INCLUDED_nx3_render_ITarget
#include <nx3/render/ITarget.h>
#endif
#ifndef INCLUDED_nx3_render_TargetSpriteBase
#include <nx3/render/TargetSpriteBase.h>
#endif
#ifndef INCLUDED_nx3_render_svg_Elements
#include <nx3/render/svg/Elements.h>
#endif
#ifndef INCLUDED_nx3_render_svg_ShapeTools
#include <nx3/render/svg/ShapeTools.h>
#endif
namespace nx3{
namespace render{

Void TargetSpriteBase_obj::__construct(::flash::display::Sprite target,Dynamic scaling)
{
HX_STACK_FRAME("nx3.render.TargetSpriteBase","new",0x318eb8cc,"nx3.render.TargetSpriteBase.new","nx3/render/TargetSpriteBase.hx",36,0x621ec604)

HX_STACK_ARG(target,"target")

HX_STACK_ARG(scaling,"scaling")
{
	HX_STACK_LINE(37)
	this->target = target;
	HX_STACK_LINE(38)
	this->graphics = target->get_graphics();
	HX_STACK_LINE(39)
	this->scaling = scaling;
}
;
	return null();
}

//TargetSpriteBase_obj::~TargetSpriteBase_obj() { }

Dynamic TargetSpriteBase_obj::__CreateEmpty() { return  new TargetSpriteBase_obj; }
hx::ObjectPtr< TargetSpriteBase_obj > TargetSpriteBase_obj::__new(::flash::display::Sprite target,Dynamic scaling)
{  hx::ObjectPtr< TargetSpriteBase_obj > result = new TargetSpriteBase_obj();
	result->__construct(target,scaling);
	return result;}

Dynamic TargetSpriteBase_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< TargetSpriteBase_obj > result = new TargetSpriteBase_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}

hx::Object *TargetSpriteBase_obj::__ToInterface(const hx::type_info &inType) {
	if (inType==typeid( ::nx3::render::ITarget_obj)) return operator ::nx3::render::ITarget_obj *();
	return super::__ToInterface(inType);
}

Void TargetSpriteBase_obj::test( ){
{
		HX_STACK_FRAME("nx3.render.TargetSpriteBase","test",0x2f4a3e66,"nx3.render.TargetSpriteBase.test","nx3/render/TargetSpriteBase.hx",45,0x621ec604)
		HX_STACK_THIS(this)
		HX_STACK_LINE(46)
		this->graphics->beginFill((int)16711680,null());
		HX_STACK_LINE(47)
		this->graphics->drawRect((int)10,(int)10,(int)100,(int)100);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(TargetSpriteBase_obj,test,(void))

Void TargetSpriteBase_obj::testLines( Float x,Float y,Float width){
{
		HX_STACK_FRAME("nx3.render.TargetSpriteBase","testLines",0x156b1db9,"nx3.render.TargetSpriteBase.testLines","nx3/render/TargetSpriteBase.hx",53,0x621ec604)
		HX_STACK_THIS(this)
		HX_STACK_ARG(x,"x")
		HX_STACK_ARG(y,"y")
		HX_STACK_ARG(width,"width")
		HX_STACK_LINE(54)
		this->target->get_graphics()->lineStyle(this->scaling->__Field(HX_CSTRING("linesWidth"),true),(int)11184810,null(),null(),null(),null(),null(),null());
		HX_STACK_LINE(56)
		{
			HX_STACK_LINE(56)
			int _g = (int)-2;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(56)
			while(((_g < (int)3))){
				HX_STACK_LINE(56)
				int i = (_g)++;		HX_STACK_VAR(i,"i");
				HX_STACK_LINE(58)
				Float cy = (y + (i * this->scaling->__Field(HX_CSTRING("space"),true)));		HX_STACK_VAR(cy,"cy");
				HX_STACK_LINE(59)
				this->target->get_graphics()->moveTo(x,cy);
				HX_STACK_LINE(60)
				this->target->get_graphics()->lineTo((x + width),cy);
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC3(TargetSpriteBase_obj,testLines,(void))

Void TargetSpriteBase_obj::testSymbol( Float x,Float y,::String xmlStr){
{
		HX_STACK_FRAME("nx3.render.TargetSpriteBase","testSymbol",0xaa8c325e,"nx3.render.TargetSpriteBase.testSymbol","nx3/render/TargetSpriteBase.hx",68,0x621ec604)
		HX_STACK_THIS(this)
		HX_STACK_ARG(x,"x")
		HX_STACK_ARG(y,"y")
		HX_STACK_ARG(xmlStr,"xmlStr")
		HX_STACK_LINE(69)
		if (((xmlStr == null()))){
			HX_STACK_LINE(69)
			xmlStr = ::nx3::render::svg::Elements_obj::noteWhite;
		}
		HX_STACK_LINE(70)
		::flash::display::Shape shape = ::nx3::render::svg::ShapeTools_obj::getShape(xmlStr,this->scaling);		HX_STACK_VAR(shape,"shape");
		HX_STACK_LINE(71)
		shape->set_x((x + this->scaling->__Field(HX_CSTRING("svgX"),true)));
		HX_STACK_LINE(72)
		shape->set_y((y + this->scaling->__Field(HX_CSTRING("svgY"),true)));
		HX_STACK_LINE(73)
		this->target->addChild(shape);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC3(TargetSpriteBase_obj,testSymbol,(void))


TargetSpriteBase_obj::TargetSpriteBase_obj()
{
}

void TargetSpriteBase_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(TargetSpriteBase);
	HX_MARK_MEMBER_NAME(graphics,"graphics");
	HX_MARK_MEMBER_NAME(scaling,"scaling");
	HX_MARK_MEMBER_NAME(target,"target");
	HX_MARK_END_CLASS();
}

void TargetSpriteBase_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(graphics,"graphics");
	HX_VISIT_MEMBER_NAME(scaling,"scaling");
	HX_VISIT_MEMBER_NAME(target,"target");
}

Dynamic TargetSpriteBase_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"test") ) { return test_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"target") ) { return target; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"scaling") ) { return scaling; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"graphics") ) { return graphics; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"testLines") ) { return testLines_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"testSymbol") ) { return testSymbol_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic TargetSpriteBase_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 6:
		if (HX_FIELD_EQ(inName,"target") ) { target=inValue.Cast< ::flash::display::Sprite >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"scaling") ) { scaling=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"graphics") ) { graphics=inValue.Cast< ::flash::display::Graphics >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void TargetSpriteBase_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("graphics"));
	outFields->push(HX_CSTRING("scaling"));
	outFields->push(HX_CSTRING("target"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

#if HXCPP_SCRIPTABLE
static hx::StorageInfo sMemberStorageInfo[] = {
	{hx::fsObject /*::flash::display::Graphics*/ ,(int)offsetof(TargetSpriteBase_obj,graphics),HX_CSTRING("graphics")},
	{hx::fsObject /*Dynamic*/ ,(int)offsetof(TargetSpriteBase_obj,scaling),HX_CSTRING("scaling")},
	{hx::fsObject /*::flash::display::Sprite*/ ,(int)offsetof(TargetSpriteBase_obj,target),HX_CSTRING("target")},
	{ hx::fsUnknown, 0, null()}
};
#endif

static ::String sMemberFields[] = {
	HX_CSTRING("graphics"),
	HX_CSTRING("scaling"),
	HX_CSTRING("target"),
	HX_CSTRING("test"),
	HX_CSTRING("testLines"),
	HX_CSTRING("testSymbol"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(TargetSpriteBase_obj::__mClass,"__mClass");
};

#ifdef HXCPP_VISIT_ALLOCS
static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(TargetSpriteBase_obj::__mClass,"__mClass");
};

#endif

Class TargetSpriteBase_obj::__mClass;

void TargetSpriteBase_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("nx3.render.TargetSpriteBase"), hx::TCanCast< TargetSpriteBase_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics
#ifdef HXCPP_VISIT_ALLOCS
    , sVisitStatics
#endif
#ifdef HXCPP_SCRIPTABLE
    , sMemberStorageInfo
#endif
);
}

void TargetSpriteBase_obj::__boot()
{
}

} // end namespace nx3
} // end namespace render
