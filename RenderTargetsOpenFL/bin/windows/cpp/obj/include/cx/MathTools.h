#ifndef INCLUDED_cx_MathTools
#define INCLUDED_cx_MathTools

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS1(cx,MathTools)
namespace cx{


class HXCPP_CLASS_ATTRIBUTES  MathTools_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef MathTools_obj OBJ_;
		MathTools_obj();
		Void __construct();

	public:
		inline void *operator new( size_t inSize, bool inContainer=false)
			{ return hx::Object::operator new(inSize,inContainer); }
		static hx::ObjectPtr< MathTools_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		//~MathTools_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		::String __ToString() const { return HX_CSTRING("MathTools"); }

		static Float floatFromString( ::String str,::String comma);
		static Dynamic floatFromString_dyn();

		static ::String floatToString( Float val,::String comma);
		static Dynamic floatToString_dyn();

		static bool floatEquals( Float a,Float b);
		static Dynamic floatEquals_dyn();

		static bool inRange( Float min,Float value,Float max);
		static Dynamic inRange_dyn();

		static Float floatRange( Float min,Float value,Float max);
		static Dynamic floatRange_dyn();

		static Float round2( Float number,hx::Null< int >  precision);
		static Dynamic round2_dyn();

		static int intRange( int min,int value,int max);
		static Dynamic intRange_dyn();

		static int intMin( int a,int b);
		static Dynamic intMin_dyn();

		static int intMax( int a,int b);
		static Dynamic intMax_dyn();

		static Float ipol( Float a,Float b,Float delta);
		static Dynamic ipol_dyn();

};

} // end namespace cx

#endif /* INCLUDED_cx_MathTools */ 
