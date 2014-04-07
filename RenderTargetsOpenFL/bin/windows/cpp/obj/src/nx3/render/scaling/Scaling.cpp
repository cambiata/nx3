#include <hxcpp.h>

#ifndef INCLUDED_flash_geom_Rectangle
#include <flash/geom/Rectangle.h>
#endif
#ifndef INCLUDED_nx3_render_scaling_Scaling
#include <nx3/render/scaling/Scaling.h>
#endif
namespace nx3{
namespace render{
namespace scaling{

Void Scaling_obj::__construct()
{
	return null();
}

//Scaling_obj::~Scaling_obj() { }

Dynamic Scaling_obj::__CreateEmpty() { return  new Scaling_obj; }
hx::ObjectPtr< Scaling_obj > Scaling_obj::__new()
{  hx::ObjectPtr< Scaling_obj > result = new Scaling_obj();
	result->__construct();
	return result;}

Dynamic Scaling_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Scaling_obj > result = new Scaling_obj();
	result->__construct();
	return result;}

Dynamic Scaling_obj::MID;

Dynamic Scaling_obj::NORMAL;

Dynamic Scaling_obj::SMALL;

Dynamic Scaling_obj::BIG;

Dynamic Scaling_obj::PRINT1;

::flash::geom::Rectangle Scaling_obj::scaleRect( Dynamic scaling,::flash::geom::Rectangle rect){
	HX_STACK_FRAME("nx3.render.scaling.Scaling","scaleRect",0x029e382d,"nx3.render.scaling.Scaling.scaleRect","nx3/render/scaling/Scaling.hx",101,0x4ac52732)
	HX_STACK_ARG(scaling,"scaling")
	HX_STACK_ARG(rect,"rect")
	HX_STACK_LINE(101)
	return ::flash::geom::Rectangle_obj::__new((rect->x * scaling->__Field(HX_CSTRING("halfNoteWidth"),true)),(rect->y * scaling->__Field(HX_CSTRING("halfSpace"),true)),(rect->width * scaling->__Field(HX_CSTRING("halfNoteWidth"),true)),(rect->height * scaling->__Field(HX_CSTRING("halfSpace"),true)));
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(Scaling_obj,scaleRect,return )


Scaling_obj::Scaling_obj()
{
}

Dynamic Scaling_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"MID") ) { return MID; }
		if (HX_FIELD_EQ(inName,"BIG") ) { return BIG; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"SMALL") ) { return SMALL; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"NORMAL") ) { return NORMAL; }
		if (HX_FIELD_EQ(inName,"PRINT1") ) { return PRINT1; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"scaleRect") ) { return scaleRect_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Scaling_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"MID") ) { MID=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"BIG") ) { BIG=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"SMALL") ) { SMALL=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"NORMAL") ) { NORMAL=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"PRINT1") ) { PRINT1=inValue.Cast< Dynamic >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Scaling_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("MID"),
	HX_CSTRING("NORMAL"),
	HX_CSTRING("SMALL"),
	HX_CSTRING("BIG"),
	HX_CSTRING("PRINT1"),
	HX_CSTRING("scaleRect"),
	String(null()) };

#if HXCPP_SCRIPTABLE
static hx::StorageInfo *sMemberStorageInfo = 0;
#endif

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Scaling_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(Scaling_obj::MID,"MID");
	HX_MARK_MEMBER_NAME(Scaling_obj::NORMAL,"NORMAL");
	HX_MARK_MEMBER_NAME(Scaling_obj::SMALL,"SMALL");
	HX_MARK_MEMBER_NAME(Scaling_obj::BIG,"BIG");
	HX_MARK_MEMBER_NAME(Scaling_obj::PRINT1,"PRINT1");
};

#ifdef HXCPP_VISIT_ALLOCS
static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Scaling_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(Scaling_obj::MID,"MID");
	HX_VISIT_MEMBER_NAME(Scaling_obj::NORMAL,"NORMAL");
	HX_VISIT_MEMBER_NAME(Scaling_obj::SMALL,"SMALL");
	HX_VISIT_MEMBER_NAME(Scaling_obj::BIG,"BIG");
	HX_VISIT_MEMBER_NAME(Scaling_obj::PRINT1,"PRINT1");
};

#endif

Class Scaling_obj::__mClass;

void Scaling_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("nx3.render.scaling.Scaling"), hx::TCanCast< Scaling_obj> ,sStaticFields,sMemberFields,
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

void Scaling_obj::__boot()
{
struct _Function_0_1{
	inline static Dynamic Block( ){
		HX_STACK_FRAME("*","closure",0x5bdab937,"*.closure","nx3/render/scaling/Scaling.hx",11,0x4ac52732)
		{
			hx::Anon __result = hx::Anon_obj::Create();
			__result->Add(HX_CSTRING("linesWidth") , 1.25,false);
			__result->Add(HX_CSTRING("space") , 12.0,false);
			__result->Add(HX_CSTRING("halfSpace") , 6.0,false);
			__result->Add(HX_CSTRING("noteWidth") , (int)10,false);
			__result->Add(HX_CSTRING("halfNoteWidth") , (int)5,false);
			__result->Add(HX_CSTRING("quarterNoteWidth") , 2.5,false);
			__result->Add(HX_CSTRING("signPosWidth") , 14.0,false);
			__result->Add(HX_CSTRING("svgScale") , .27,false);
			__result->Add(HX_CSTRING("svgX") , (int)0,false);
			__result->Add(HX_CSTRING("svgY") , -55.0,false);
			__result->Add(HX_CSTRING("fontScaling") , 6.0,false);
			return __result;
		}
		return null();
	}
};
	MID= _Function_0_1::Block();
struct _Function_0_2{
	inline static Dynamic Block( ){
		HX_STACK_FRAME("*","closure",0x5bdab937,"*.closure","nx3/render/scaling/Scaling.hx",32,0x4ac52732)
		{
			hx::Anon __result = hx::Anon_obj::Create();
			__result->Add(HX_CSTRING("linesWidth") , .75,false);
			__result->Add(HX_CSTRING("space") , 8.0,false);
			__result->Add(HX_CSTRING("halfSpace") , 4.0,false);
			__result->Add(HX_CSTRING("noteWidth") , 7.0,false);
			__result->Add(HX_CSTRING("halfNoteWidth") , 3.5,false);
			__result->Add(HX_CSTRING("quarterNoteWidth") , 1.75,false);
			__result->Add(HX_CSTRING("signPosWidth") , 9.5,false);
			__result->Add(HX_CSTRING("svgScale") , .175,false);
			__result->Add(HX_CSTRING("svgX") , (int)0,false);
			__result->Add(HX_CSTRING("svgY") , -36.0,false);
			__result->Add(HX_CSTRING("fontScaling") , 4.0,false);
			return __result;
		}
		return null();
	}
};
	NORMAL= _Function_0_2::Block();
struct _Function_0_3{
	inline static Dynamic Block( ){
		HX_STACK_FRAME("*","closure",0x5bdab937,"*.closure","nx3/render/scaling/Scaling.hx",51,0x4ac52732)
		{
			hx::Anon __result = hx::Anon_obj::Create();
			__result->Add(HX_CSTRING("linesWidth") , .5,false);
			__result->Add(HX_CSTRING("space") , 6.0,false);
			__result->Add(HX_CSTRING("halfSpace") , 3.0,false);
			__result->Add(HX_CSTRING("noteWidth") , 5.0,false);
			__result->Add(HX_CSTRING("halfNoteWidth") , 2.5,false);
			__result->Add(HX_CSTRING("quarterNoteWidth") , 1.25,false);
			__result->Add(HX_CSTRING("signPosWidth") , 7.0,false);
			__result->Add(HX_CSTRING("svgScale") , .14,false);
			__result->Add(HX_CSTRING("svgX") , (int)0,false);
			__result->Add(HX_CSTRING("svgY") , -28.5,false);
			__result->Add(HX_CSTRING("fontScaling") , 3.0,false);
			return __result;
		}
		return null();
	}
};
	SMALL= _Function_0_3::Block();
struct _Function_0_4{
	inline static Dynamic Block( ){
		HX_STACK_FRAME("*","closure",0x5bdab937,"*.closure","nx3/render/scaling/Scaling.hx",67,0x4ac52732)
		{
			hx::Anon __result = hx::Anon_obj::Create();
			__result->Add(HX_CSTRING("linesWidth") , 1.5,false);
			__result->Add(HX_CSTRING("space") , 16.0,false);
			__result->Add(HX_CSTRING("halfSpace") , 8.0,false);
			__result->Add(HX_CSTRING("noteWidth") , 14.0,false);
			__result->Add(HX_CSTRING("halfNoteWidth") , 7.0,false);
			__result->Add(HX_CSTRING("quarterNoteWidth") , 5.5,false);
			__result->Add(HX_CSTRING("signPosWidth") , 19.0,false);
			__result->Add(HX_CSTRING("svgScale") , .36,false);
			__result->Add(HX_CSTRING("svgX") , -0.0,false);
			__result->Add(HX_CSTRING("svgY") , -74.0,false);
			__result->Add(HX_CSTRING("fontScaling") , 8.0,false);
			return __result;
		}
		return null();
	}
};
	BIG= _Function_0_4::Block();
struct _Function_0_5{
	inline static Dynamic Block( ){
		HX_STACK_FRAME("*","closure",0x5bdab937,"*.closure","nx3/render/scaling/Scaling.hx",82,0x4ac52732)
		{
			hx::Anon __result = hx::Anon_obj::Create();
			__result->Add(HX_CSTRING("linesWidth") , (int)3,false);
			__result->Add(HX_CSTRING("space") , 32.0,false);
			__result->Add(HX_CSTRING("halfSpace") , 16.0,false);
			__result->Add(HX_CSTRING("noteWidth") , 28.0,false);
			__result->Add(HX_CSTRING("halfNoteWidth") , 14.0,false);
			__result->Add(HX_CSTRING("quarterNoteWidth") , 11.0,false);
			__result->Add(HX_CSTRING("signPosWidth") , 38.0,false);
			__result->Add(HX_CSTRING("svgScale") , .72,false);
			__result->Add(HX_CSTRING("svgX") , -0.0,false);
			__result->Add(HX_CSTRING("svgY") , -148.0,false);
			__result->Add(HX_CSTRING("fontScaling") , 16.0,false);
			return __result;
		}
		return null();
	}
};
	PRINT1= _Function_0_5::Block();
}

} // end namespace nx3
} // end namespace render
} // end namespace scaling
