#include <hxcpp.h>

#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_StringTools
#include <StringTools.h>
#endif
#ifndef INCLUDED_cx_MathTools
#include <cx/MathTools.h>
#endif
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
namespace cx{

Void MathTools_obj::__construct()
{
	return null();
}

//MathTools_obj::~MathTools_obj() { }

Dynamic MathTools_obj::__CreateEmpty() { return  new MathTools_obj; }
hx::ObjectPtr< MathTools_obj > MathTools_obj::__new()
{  hx::ObjectPtr< MathTools_obj > result = new MathTools_obj();
	result->__construct();
	return result;}

Dynamic MathTools_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< MathTools_obj > result = new MathTools_obj();
	result->__construct();
	return result;}

Float MathTools_obj::floatFromString( ::String str,::String __o_comma){
::String comma = __o_comma.Default(HX_CSTRING(","));
	HX_STACK_FRAME("cx.MathTools","floatFromString",0x2110aa43,"cx.MathTools.floatFromString","cx/MathTools.hx",13,0xc4f6ec65)
	HX_STACK_ARG(str,"str")
	HX_STACK_ARG(comma,"comma")
{
		HX_STACK_LINE(14)
		str = ::StringTools_obj::replace(str,HX_CSTRING(","),HX_CSTRING("."));
		HX_STACK_LINE(15)
		return ::Std_obj::parseFloat(str);
	}
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(MathTools_obj,floatFromString,return )

::String MathTools_obj::floatToString( Float val,::String __o_comma){
::String comma = __o_comma.Default(HX_CSTRING(","));
	HX_STACK_FRAME("cx.MathTools","floatToString",0x93d3e314,"cx.MathTools.floatToString","cx/MathTools.hx",19,0xc4f6ec65)
	HX_STACK_ARG(val,"val")
	HX_STACK_ARG(comma,"comma")
{
		HX_STACK_LINE(20)
		::String result = ::Std_obj::string(val);		HX_STACK_VAR(result,"result");
		HX_STACK_LINE(21)
		if (((comma != HX_CSTRING(".")))){
			HX_STACK_LINE(21)
			result = ::StringTools_obj::replace(result,HX_CSTRING("."),comma);
		}
		HX_STACK_LINE(22)
		return result;
	}
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(MathTools_obj,floatToString,return )

bool MathTools_obj::floatEquals( Float a,Float b){
	HX_STACK_FRAME("cx.MathTools","floatEquals",0x15af16a7,"cx.MathTools.floatEquals","cx/MathTools.hx",27,0xc4f6ec65)
	HX_STACK_ARG(a,"a")
	HX_STACK_ARG(b,"b")
	HX_STACK_LINE(27)
	return (::Math_obj::abs((a - b)) <= 0.00001);
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(MathTools_obj,floatEquals,return )

bool MathTools_obj::inRange( Float min,Float value,Float max){
	HX_STACK_FRAME("cx.MathTools","inRange",0xa96a0744,"cx.MathTools.inRange","cx/MathTools.hx",30,0xc4f6ec65)
	HX_STACK_ARG(min,"min")
	HX_STACK_ARG(value,"value")
	HX_STACK_ARG(max,"max")
	HX_STACK_LINE(31)
	if (((value < min))){
		HX_STACK_LINE(31)
		return false;
	}
	HX_STACK_LINE(32)
	if (((value > max))){
		HX_STACK_LINE(32)
		return false;
	}
	HX_STACK_LINE(33)
	return true;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC3(MathTools_obj,inRange,return )

Float MathTools_obj::floatRange( Float min,Float value,Float max){
	HX_STACK_FRAME("cx.MathTools","floatRange",0x42a48255,"cx.MathTools.floatRange","cx/MathTools.hx",36,0xc4f6ec65)
	HX_STACK_ARG(min,"min")
	HX_STACK_ARG(value,"value")
	HX_STACK_ARG(max,"max")
	HX_STACK_LINE(37)
	if (((value < min))){
		HX_STACK_LINE(37)
		return min;
	}
	HX_STACK_LINE(38)
	if (((value > max))){
		HX_STACK_LINE(38)
		return max;
	}
	HX_STACK_LINE(39)
	return value;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC3(MathTools_obj,floatRange,return )

Float MathTools_obj::round2( Float number,hx::Null< int >  __o_precision){
int precision = __o_precision.Default(8);
	HX_STACK_FRAME("cx.MathTools","round2",0xcc01d9f8,"cx.MathTools.round2","cx/MathTools.hx",42,0xc4f6ec65)
	HX_STACK_ARG(number,"number")
	HX_STACK_ARG(precision,"precision")
{
		HX_STACK_LINE(43)
		number = (number * ::Math_obj::pow((int)10,precision));
		HX_STACK_LINE(44)
		int _g = ::Math_obj::round(number);		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(44)
		number = (Float(_g) / Float(::Math_obj::pow((int)10,precision)));
		HX_STACK_LINE(45)
		return number;
	}
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(MathTools_obj,round2,return )

int MathTools_obj::intRange( int min,int value,int max){
	HX_STACK_FRAME("cx.MathTools","intRange",0x7fe97122,"cx.MathTools.intRange","cx/MathTools.hx",48,0xc4f6ec65)
	HX_STACK_ARG(min,"min")
	HX_STACK_ARG(value,"value")
	HX_STACK_ARG(max,"max")
	HX_STACK_LINE(49)
	if (((value < min))){
		HX_STACK_LINE(49)
		return min;
	}
	HX_STACK_LINE(50)
	if (((value > max))){
		HX_STACK_LINE(50)
		return max;
	}
	HX_STACK_LINE(51)
	return value;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC3(MathTools_obj,intRange,return )

int MathTools_obj::intMin( int a,int b){
	HX_STACK_FRAME("cx.MathTools","intMin",0x9ea2c9b7,"cx.MathTools.intMin","cx/MathTools.hx",54,0xc4f6ec65)
	HX_STACK_ARG(a,"a")
	HX_STACK_ARG(b,"b")
	HX_STACK_LINE(55)
	if (((a < b))){
		HX_STACK_LINE(55)
		return a;
	}
	HX_STACK_LINE(56)
	return b;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(MathTools_obj,intMin,return )

int MathTools_obj::intMax( int a,int b){
	HX_STACK_FRAME("cx.MathTools","intMax",0x9ea2c2c9,"cx.MathTools.intMax","cx/MathTools.hx",59,0xc4f6ec65)
	HX_STACK_ARG(a,"a")
	HX_STACK_ARG(b,"b")
	HX_STACK_LINE(60)
	if (((a > b))){
		HX_STACK_LINE(60)
		return a;
	}
	HX_STACK_LINE(61)
	return b;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(MathTools_obj,intMax,return )

Float MathTools_obj::ipol( Float a,Float b,Float delta){
	HX_STACK_FRAME("cx.MathTools","ipol",0x8d7e7598,"cx.MathTools.ipol","cx/MathTools.hx",65,0xc4f6ec65)
	HX_STACK_ARG(a,"a")
	HX_STACK_ARG(b,"b")
	HX_STACK_ARG(delta,"delta")
	HX_STACK_LINE(65)
	return ((delta * ((b - a))) + a);
}


STATIC_HX_DEFINE_DYNAMIC_FUNC3(MathTools_obj,ipol,return )


MathTools_obj::MathTools_obj()
{
}

Dynamic MathTools_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"ipol") ) { return ipol_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"round2") ) { return round2_dyn(); }
		if (HX_FIELD_EQ(inName,"intMin") ) { return intMin_dyn(); }
		if (HX_FIELD_EQ(inName,"intMax") ) { return intMax_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"inRange") ) { return inRange_dyn(); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"intRange") ) { return intRange_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"floatRange") ) { return floatRange_dyn(); }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"floatEquals") ) { return floatEquals_dyn(); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"floatToString") ) { return floatToString_dyn(); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"floatFromString") ) { return floatFromString_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic MathTools_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void MathTools_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("floatFromString"),
	HX_CSTRING("floatToString"),
	HX_CSTRING("floatEquals"),
	HX_CSTRING("inRange"),
	HX_CSTRING("floatRange"),
	HX_CSTRING("round2"),
	HX_CSTRING("intRange"),
	HX_CSTRING("intMin"),
	HX_CSTRING("intMax"),
	HX_CSTRING("ipol"),
	String(null()) };

#if HXCPP_SCRIPTABLE
static hx::StorageInfo *sMemberStorageInfo = 0;
#endif

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(MathTools_obj::__mClass,"__mClass");
};

#ifdef HXCPP_VISIT_ALLOCS
static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(MathTools_obj::__mClass,"__mClass");
};

#endif

Class MathTools_obj::__mClass;

void MathTools_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("cx.MathTools"), hx::TCanCast< MathTools_obj> ,sStaticFields,sMemberFields,
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

void MathTools_obj::__boot()
{
}

} // end namespace cx
