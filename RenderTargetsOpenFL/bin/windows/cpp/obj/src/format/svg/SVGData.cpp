#include <hxcpp.h>

#ifndef INCLUDED_EReg
#include <EReg.h>
#endif
#ifndef INCLUDED_IMap
#include <IMap.h>
#endif
#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_Xml
#include <Xml.h>
#endif
#ifndef INCLUDED_flash_display_CapsStyle
#include <flash/display/CapsStyle.h>
#endif
#ifndef INCLUDED_flash_display_GradientType
#include <flash/display/GradientType.h>
#endif
#ifndef INCLUDED_flash_display_InterpolationMethod
#include <flash/display/InterpolationMethod.h>
#endif
#ifndef INCLUDED_flash_display_JointStyle
#include <flash/display/JointStyle.h>
#endif
#ifndef INCLUDED_flash_display_SpreadMethod
#include <flash/display/SpreadMethod.h>
#endif
#ifndef INCLUDED_flash_geom_Matrix
#include <flash/geom/Matrix.h>
#endif
#ifndef INCLUDED_format_gfx_Gradient
#include <format/gfx/Gradient.h>
#endif
#ifndef INCLUDED_format_svg_DisplayElement
#include <format/svg/DisplayElement.h>
#endif
#ifndef INCLUDED_format_svg_DrawSegment
#include <format/svg/DrawSegment.h>
#endif
#ifndef INCLUDED_format_svg_FillType
#include <format/svg/FillType.h>
#endif
#ifndef INCLUDED_format_svg_Grad
#include <format/svg/Grad.h>
#endif
#ifndef INCLUDED_format_svg_Group
#include <format/svg/Group.h>
#endif
#ifndef INCLUDED_format_svg_MoveSegment
#include <format/svg/MoveSegment.h>
#endif
#ifndef INCLUDED_format_svg_Path
#include <format/svg/Path.h>
#endif
#ifndef INCLUDED_format_svg_PathParser
#include <format/svg/PathParser.h>
#endif
#ifndef INCLUDED_format_svg_PathSegment
#include <format/svg/PathSegment.h>
#endif
#ifndef INCLUDED_format_svg_QuadraticSegment
#include <format/svg/QuadraticSegment.h>
#endif
#ifndef INCLUDED_format_svg_SVGData
#include <format/svg/SVGData.h>
#endif
#ifndef INCLUDED_format_svg_Text
#include <format/svg/Text.h>
#endif
#ifndef INCLUDED_haxe_Log
#include <haxe/Log.h>
#endif
#ifndef INCLUDED_haxe_ds_StringMap
#include <haxe/ds/StringMap.h>
#endif
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
namespace format{
namespace svg{

Void SVGData_obj::__construct(::Xml inXML,hx::Null< bool >  __o_inConvertCubics)
{
HX_STACK_FRAME("format.svg.SVGData","new",0x51c8ae3f,"format.svg.SVGData.new","format/svg/SVGData.hx",61,0x27702913)

HX_STACK_ARG(inXML,"inXML")

HX_STACK_ARG(__o_inConvertCubics,"inConvertCubics")
bool inConvertCubics = __o_inConvertCubics.Default(false);
{
	HX_STACK_LINE(63)
	super::__construct();
	HX_STACK_LINE(65)
	::Xml svg = inXML->firstElement();		HX_STACK_VAR(svg,"svg");
	struct _Function_1_1{
		inline static bool Block( ::Xml &svg){
			HX_STACK_FRAME("*","closure",0x5bdab937,"*.closure","format/svg/SVGData.hx",67,0x27702913)
			{
				HX_STACK_LINE(67)
				return (  (((svg->get_nodeName() != HX_CSTRING("svg")))) ? bool((svg->get_nodeName() != HX_CSTRING("svg:svg"))) : bool(false) );
			}
			return null();
		}
	};
	HX_STACK_LINE(67)
	if (((  ((!(((svg == null()))))) ? bool(_Function_1_1::Block(svg)) : bool(true) ))){
		HX_STACK_LINE(68)
		HX_STACK_DO_THROW(((HX_CSTRING("Not an SVG file (") + ((  (((svg == null()))) ? ::String(HX_CSTRING("null")) : ::String(svg->get_nodeName()) ))) + HX_CSTRING(")")));
	}
	HX_STACK_LINE(70)
	this->mGrads = ::haxe::ds::StringMap_obj::__new();
	HX_STACK_LINE(71)
	this->mPathParser = ::format::svg::PathParser_obj::__new();
	HX_STACK_LINE(72)
	this->mConvertCubics = inConvertCubics;
	HX_STACK_LINE(74)
	this->width = this->getFloatStyle(HX_CSTRING("width"),svg,null(),0.0);
	HX_STACK_LINE(75)
	this->height = this->getFloatStyle(HX_CSTRING("height"),svg,null(),0.0);
	HX_STACK_LINE(77)
	if (((bool((this->width == (int)0)) && bool((this->height == (int)0))))){
		HX_STACK_LINE(78)
		this->width = this->height = (int)400;
	}
	else{
		HX_STACK_LINE(79)
		if (((this->width == (int)0))){
			HX_STACK_LINE(80)
			this->width = this->height;
		}
		else{
			HX_STACK_LINE(81)
			if (((this->height == (int)0))){
				HX_STACK_LINE(82)
				this->height = this->width;
			}
		}
	}
	HX_STACK_LINE(84)
	this->loadGroup(hx::ObjectPtr<OBJ_>(this),svg,::flash::geom::Matrix_obj::__new(null(),null(),null(),null(),null(),null()),null());
}
;
	return null();
}

//SVGData_obj::~SVGData_obj() { }

Dynamic SVGData_obj::__CreateEmpty() { return  new SVGData_obj; }
hx::ObjectPtr< SVGData_obj > SVGData_obj::__new(::Xml inXML,hx::Null< bool >  __o_inConvertCubics)
{  hx::ObjectPtr< SVGData_obj > result = new SVGData_obj();
	result->__construct(inXML,__o_inConvertCubics);
	return result;}

Dynamic SVGData_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< SVGData_obj > result = new SVGData_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}

Float SVGData_obj::applyTransform( ::flash::geom::Matrix ioMatrix,::String inTrans){
	HX_STACK_FRAME("format.svg.SVGData","applyTransform",0xb6802a9f,"format.svg.SVGData.applyTransform","format/svg/SVGData.hx",89,0x27702913)
	HX_STACK_THIS(this)
	HX_STACK_ARG(ioMatrix,"ioMatrix")
	HX_STACK_ARG(inTrans,"inTrans")
	HX_STACK_LINE(91)
	Float scale = 1.0;		HX_STACK_VAR(scale,"scale");
	HX_STACK_LINE(93)
	if ((::format::svg::SVGData_obj::mTranslateMatch->match(inTrans))){
		HX_STACK_LINE(97)
		Float _g = ::Std_obj::parseFloat(::format::svg::SVGData_obj::mTranslateMatch->matched((int)1));		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(97)
		ioMatrix->translate(_g,::Std_obj::parseFloat(::format::svg::SVGData_obj::mTranslateMatch->matched((int)2)));
	}
	else{
		HX_STACK_LINE(99)
		if ((::format::svg::SVGData_obj::mScaleMatch->match(inTrans))){
			HX_STACK_LINE(102)
			Float s = ::Std_obj::parseFloat(::format::svg::SVGData_obj::mScaleMatch->matched((int)1));		HX_STACK_VAR(s,"s");
			HX_STACK_LINE(103)
			ioMatrix->scale(s,s);
			HX_STACK_LINE(104)
			scale = s;
		}
		else{
			HX_STACK_LINE(106)
			if ((::format::svg::SVGData_obj::mMatrixMatch->match(inTrans))){
				HX_STACK_LINE(109)
				Float _g1 = ::Std_obj::parseFloat(::format::svg::SVGData_obj::mMatrixMatch->matched((int)1));		HX_STACK_VAR(_g1,"_g1");
				HX_STACK_LINE(110)
				Float _g2 = ::Std_obj::parseFloat(::format::svg::SVGData_obj::mMatrixMatch->matched((int)2));		HX_STACK_VAR(_g2,"_g2");
				HX_STACK_LINE(111)
				Float _g3 = ::Std_obj::parseFloat(::format::svg::SVGData_obj::mMatrixMatch->matched((int)3));		HX_STACK_VAR(_g3,"_g3");
				HX_STACK_LINE(112)
				Float _g4 = ::Std_obj::parseFloat(::format::svg::SVGData_obj::mMatrixMatch->matched((int)4));		HX_STACK_VAR(_g4,"_g4");
				HX_STACK_LINE(113)
				Float _g5 = ::Std_obj::parseFloat(::format::svg::SVGData_obj::mMatrixMatch->matched((int)5));		HX_STACK_VAR(_g5,"_g5");
				HX_STACK_LINE(108)
				::flash::geom::Matrix m = ::flash::geom::Matrix_obj::__new(_g1,_g2,_g3,_g4,_g5,::Std_obj::parseFloat(::format::svg::SVGData_obj::mMatrixMatch->matched((int)6)));		HX_STACK_VAR(m,"m");
				HX_STACK_LINE(117)
				m->concat(ioMatrix);
				HX_STACK_LINE(119)
				ioMatrix->a = m->a;
				HX_STACK_LINE(120)
				ioMatrix->b = m->b;
				HX_STACK_LINE(121)
				ioMatrix->c = m->c;
				HX_STACK_LINE(122)
				ioMatrix->d = m->d;
				HX_STACK_LINE(123)
				ioMatrix->tx = m->tx;
				HX_STACK_LINE(124)
				ioMatrix->ty = m->ty;
				HX_STACK_LINE(126)
				scale = ::Math_obj::sqrt(((ioMatrix->a * ioMatrix->a) + (ioMatrix->c * ioMatrix->c)));
			}
			else{
				HX_STACK_LINE(130)
				::haxe::Log_obj::trace((HX_CSTRING("Warning, unknown transform:") + inTrans),hx::SourceInfo(HX_CSTRING("SVGData.hx"),130,HX_CSTRING("format.svg.SVGData"),HX_CSTRING("applyTransform")));
			}
		}
	}
	HX_STACK_LINE(134)
	return scale;
}


HX_DEFINE_DYNAMIC_FUNC2(SVGData_obj,applyTransform,return )

Void SVGData_obj::dumpGroup( ::format::svg::Group g,::String indent){
{
		HX_STACK_FRAME("format.svg.SVGData","dumpGroup",0x5544588a,"format.svg.SVGData.dumpGroup","format/svg/SVGData.hx",139,0x27702913)
		HX_STACK_THIS(this)
		HX_STACK_ARG(g,"g")
		HX_STACK_ARG(indent,"indent")
		HX_STACK_LINE(141)
		::haxe::Log_obj::trace(((indent + HX_CSTRING("Group:")) + g->name),hx::SourceInfo(HX_CSTRING("SVGData.hx"),141,HX_CSTRING("format.svg.SVGData"),HX_CSTRING("dumpGroup")));
		HX_STACK_LINE(142)
		hx::AddEq(indent,HX_CSTRING("  "));
		HX_STACK_LINE(144)
		{
			HX_STACK_LINE(144)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(144)
			Array< ::Dynamic > _g1 = g->children;		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(144)
			while(((_g < _g1->length))){
				HX_STACK_LINE(144)
				::format::svg::DisplayElement e = _g1->__get(_g).StaticCast< ::format::svg::DisplayElement >();		HX_STACK_VAR(e,"e");
				HX_STACK_LINE(144)
				++(_g);
				HX_STACK_LINE(146)
				switch( (int)(e->__Index())){
					case (int)0: {
						HX_STACK_LINE(146)
						::format::svg::Path path = (::format::svg::DisplayElement(e))->__Param(0);		HX_STACK_VAR(path,"path");
						HX_STACK_LINE(148)
						{
							HX_STACK_LINE(148)
							::String _g2 = (((indent + HX_CSTRING("Path")) + HX_CSTRING("  ")) + ::Std_obj::string(path->matrix));		HX_STACK_VAR(_g2,"_g2");
							HX_STACK_LINE(148)
							::haxe::Log_obj::trace(_g2,hx::SourceInfo(HX_CSTRING("SVGData.hx"),148,HX_CSTRING("format.svg.SVGData"),HX_CSTRING("dumpGroup")));
						}
					}
					;break;
					case (int)1: {
						HX_STACK_LINE(146)
						::format::svg::Group group = (::format::svg::DisplayElement(e))->__Param(0);		HX_STACK_VAR(group,"group");
						HX_STACK_LINE(149)
						this->dumpGroup(group,(indent + HX_CSTRING("   ")));
					}
					;break;
					case (int)2: {
						HX_STACK_LINE(146)
						::format::svg::Text text = (::format::svg::DisplayElement(e))->__Param(0);		HX_STACK_VAR(text,"text");
						HX_STACK_LINE(150)
						::haxe::Log_obj::trace(((indent + HX_CSTRING("Text ")) + text->text),hx::SourceInfo(HX_CSTRING("SVGData.hx"),150,HX_CSTRING("format.svg.SVGData"),HX_CSTRING("dumpGroup")));
					}
					;break;
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(SVGData_obj,dumpGroup,(void))

int SVGData_obj::getColorStyle( ::String inKey,::Xml inNode,::haxe::ds::StringMap inStyles,int inDefault){
	HX_STACK_FRAME("format.svg.SVGData","getColorStyle",0x73c6a3a3,"format.svg.SVGData.getColorStyle","format/svg/SVGData.hx",159,0x27702913)
	HX_STACK_THIS(this)
	HX_STACK_ARG(inKey,"inKey")
	HX_STACK_ARG(inNode,"inNode")
	HX_STACK_ARG(inStyles,"inStyles")
	HX_STACK_ARG(inDefault,"inDefault")
	HX_STACK_LINE(161)
	::String s = this->getStyle(inKey,inNode,inStyles,HX_CSTRING(""));		HX_STACK_VAR(s,"s");
	HX_STACK_LINE(163)
	if (((s == HX_CSTRING("")))){
		HX_STACK_LINE(165)
		return inDefault;
	}
	HX_STACK_LINE(169)
	if (((s.charAt((int)0) == HX_CSTRING("#")))){
		HX_STACK_LINE(171)
		return ::Std_obj::parseInt((HX_CSTRING("0x") + s.substr((int)1,null())));
	}
	HX_STACK_LINE(175)
	return ::Std_obj::parseInt(s);
}


HX_DEFINE_DYNAMIC_FUNC4(SVGData_obj,getColorStyle,return )

::format::svg::FillType SVGData_obj::getFillStyle( ::String inKey,::Xml inNode,::haxe::ds::StringMap inStyles){
	HX_STACK_FRAME("format.svg.SVGData","getFillStyle",0x0c815679,"format.svg.SVGData.getFillStyle","format/svg/SVGData.hx",180,0x27702913)
	HX_STACK_THIS(this)
	HX_STACK_ARG(inKey,"inKey")
	HX_STACK_ARG(inNode,"inNode")
	HX_STACK_ARG(inStyles,"inStyles")
	HX_STACK_LINE(182)
	::String s = this->getStyle(inKey,inNode,inStyles,HX_CSTRING(""));		HX_STACK_VAR(s,"s");
	HX_STACK_LINE(184)
	if (((s == HX_CSTRING("")))){
		HX_STACK_LINE(186)
		return ::format::svg::SVGData_obj::defaultFill;
	}
	HX_STACK_LINE(190)
	if (((s.charAt((int)0) == HX_CSTRING("#")))){
		HX_STACK_LINE(192)
		return ::format::svg::FillType_obj::FillSolid(::Std_obj::parseInt((HX_CSTRING("0x") + s.substr((int)1,null()))));
	}
	HX_STACK_LINE(196)
	if (((s == HX_CSTRING("none")))){
		HX_STACK_LINE(198)
		return ::format::svg::FillType_obj::FillNone;
	}
	HX_STACK_LINE(202)
	if ((::format::svg::SVGData_obj::mURLMatch->match(s))){
		HX_STACK_LINE(204)
		::String url = ::format::svg::SVGData_obj::mURLMatch->matched((int)1);		HX_STACK_VAR(url,"url");
		HX_STACK_LINE(206)
		if ((this->mGrads->exists(url))){
			HX_STACK_LINE(208)
			return ::format::svg::FillType_obj::FillGrad(this->mGrads->get(url));
		}
		HX_STACK_LINE(212)
		HX_STACK_DO_THROW((HX_CSTRING("Unknown url:") + url));
	}
	HX_STACK_LINE(216)
	HX_STACK_DO_THROW((HX_CSTRING("Unknown fill string:") + s));
	HX_STACK_LINE(218)
	return ::format::svg::FillType_obj::FillNone;
}


HX_DEFINE_DYNAMIC_FUNC3(SVGData_obj,getFillStyle,return )

Float SVGData_obj::getFloat( ::Xml inXML,::String inName,hx::Null< Float >  __o_inDef){
Float inDef = __o_inDef.Default(0.0);
	HX_STACK_FRAME("format.svg.SVGData","getFloat",0x54cd4ee7,"format.svg.SVGData.getFloat","format/svg/SVGData.hx",223,0x27702913)
	HX_STACK_THIS(this)
	HX_STACK_ARG(inXML,"inXML")
	HX_STACK_ARG(inName,"inName")
	HX_STACK_ARG(inDef,"inDef")
{
		HX_STACK_LINE(225)
		if ((inXML->exists(inName))){
			HX_STACK_LINE(226)
			return ::Std_obj::parseFloat(inXML->get(inName));
		}
		HX_STACK_LINE(228)
		return inDef;
	}
}


HX_DEFINE_DYNAMIC_FUNC3(SVGData_obj,getFloat,return )

Float SVGData_obj::getFloatStyle( ::String inKey,::Xml inNode,::haxe::ds::StringMap inStyles,Float inDefault){
	HX_STACK_FRAME("format.svg.SVGData","getFloatStyle",0x6df360ca,"format.svg.SVGData.getFloatStyle","format/svg/SVGData.hx",233,0x27702913)
	HX_STACK_THIS(this)
	HX_STACK_ARG(inKey,"inKey")
	HX_STACK_ARG(inNode,"inNode")
	HX_STACK_ARG(inStyles,"inStyles")
	HX_STACK_ARG(inDefault,"inDefault")
	HX_STACK_LINE(235)
	::String s = this->getStyle(inKey,inNode,inStyles,HX_CSTRING(""));		HX_STACK_VAR(s,"s");
	HX_STACK_LINE(237)
	if (((s == HX_CSTRING("")))){
		HX_STACK_LINE(239)
		return inDefault;
	}
	HX_STACK_LINE(243)
	return ::Std_obj::parseFloat(s);
}


HX_DEFINE_DYNAMIC_FUNC4(SVGData_obj,getFloatStyle,return )

Dynamic SVGData_obj::getStrokeStyle( ::String inKey,::Xml inNode,::haxe::ds::StringMap inStyles,Dynamic inDefault){
	HX_STACK_FRAME("format.svg.SVGData","getStrokeStyle",0xa6e4f9e4,"format.svg.SVGData.getStrokeStyle","format/svg/SVGData.hx",248,0x27702913)
	HX_STACK_THIS(this)
	HX_STACK_ARG(inKey,"inKey")
	HX_STACK_ARG(inNode,"inNode")
	HX_STACK_ARG(inStyles,"inStyles")
	HX_STACK_ARG(inDefault,"inDefault")
	HX_STACK_LINE(250)
	::String s = this->getStyle(inKey,inNode,inStyles,HX_CSTRING(""));		HX_STACK_VAR(s,"s");
	HX_STACK_LINE(252)
	if (((s == HX_CSTRING("")))){
		HX_STACK_LINE(254)
		return inDefault;
	}
	HX_STACK_LINE(258)
	if (((s == HX_CSTRING("none")))){
		HX_STACK_LINE(260)
		return null();
	}
	HX_STACK_LINE(264)
	if (((s.charAt((int)0) == HX_CSTRING("#")))){
		HX_STACK_LINE(266)
		return ::Std_obj::parseInt((HX_CSTRING("0x") + s.substr((int)1,null())));
	}
	HX_STACK_LINE(270)
	return ::Std_obj::parseInt(s);
}


HX_DEFINE_DYNAMIC_FUNC4(SVGData_obj,getStrokeStyle,return )

::String SVGData_obj::getStyle( ::String inKey,::Xml inNode,::haxe::ds::StringMap inStyles,::String inDefault){
	HX_STACK_FRAME("format.svg.SVGData","getStyle",0xd6542e7c,"format.svg.SVGData.getStyle","format/svg/SVGData.hx",275,0x27702913)
	HX_STACK_THIS(this)
	HX_STACK_ARG(inKey,"inKey")
	HX_STACK_ARG(inNode,"inNode")
	HX_STACK_ARG(inStyles,"inStyles")
	HX_STACK_ARG(inDefault,"inDefault")
	HX_STACK_LINE(277)
	if (((  (((inNode != null()))) ? bool(inNode->exists(inKey)) : bool(false) ))){
		HX_STACK_LINE(279)
		return inNode->get(inKey);
	}
	HX_STACK_LINE(283)
	if (((  (((inStyles != null()))) ? bool(inStyles->exists(inKey)) : bool(false) ))){
		HX_STACK_LINE(285)
		return inStyles->get(inKey);
	}
	HX_STACK_LINE(289)
	return inDefault;
}


HX_DEFINE_DYNAMIC_FUNC4(SVGData_obj,getStyle,return )

::haxe::ds::StringMap SVGData_obj::getStyles( ::Xml inNode,::haxe::ds::StringMap inPrevStyles){
	HX_STACK_FRAME("format.svg.SVGData","getStyles",0xb3547e77,"format.svg.SVGData.getStyles","format/svg/SVGData.hx",294,0x27702913)
	HX_STACK_THIS(this)
	HX_STACK_ARG(inNode,"inNode")
	HX_STACK_ARG(inPrevStyles,"inPrevStyles")
	HX_STACK_LINE(296)
	if ((!(inNode->exists(HX_CSTRING("style"))))){
		HX_STACK_LINE(297)
		return inPrevStyles;
	}
	HX_STACK_LINE(299)
	::haxe::ds::StringMap styles = ::haxe::ds::StringMap_obj::__new();		HX_STACK_VAR(styles,"styles");
	HX_STACK_LINE(301)
	if (((inPrevStyles != null()))){
		HX_STACK_LINE(303)
		for(::cpp::FastIterator_obj< ::String > *__it = ::cpp::CreateFastIterator< ::String >(inPrevStyles->keys());  __it->hasNext(); ){
			::String s = __it->next();
			styles->set(s,inPrevStyles->get(s));
		}
	}
	HX_STACK_LINE(311)
	::String style = inNode->get(HX_CSTRING("style"));		HX_STACK_VAR(style,"style");
	HX_STACK_LINE(312)
	Array< ::String > strings = ::format::svg::SVGData_obj::mStyleSplit->split(style);		HX_STACK_VAR(strings,"strings");
	HX_STACK_LINE(314)
	{
		HX_STACK_LINE(314)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(314)
		while(((_g < strings->length))){
			HX_STACK_LINE(314)
			::String s = strings->__get(_g);		HX_STACK_VAR(s,"s");
			HX_STACK_LINE(314)
			++(_g);
			HX_STACK_LINE(316)
			if ((::format::svg::SVGData_obj::mStyleValue->match(s))){
				HX_STACK_LINE(318)
				::String _g1 = ::format::svg::SVGData_obj::mStyleValue->matched((int)1);		HX_STACK_VAR(_g1,"_g1");
				HX_STACK_LINE(318)
				styles->set(_g1,::format::svg::SVGData_obj::mStyleValue->matched((int)2));
			}
		}
	}
	HX_STACK_LINE(324)
	return styles;
}


HX_DEFINE_DYNAMIC_FUNC2(SVGData_obj,getStyles,return )

Void SVGData_obj::loadDefs( ::Xml inXML){
{
		HX_STACK_FRAME("format.svg.SVGData","loadDefs",0xa5659e15,"format.svg.SVGData.loadDefs","format/svg/SVGData.hx",333,0x27702913)
		HX_STACK_THIS(this)
		HX_STACK_ARG(inXML,"inXML")
		HX_STACK_LINE(333)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(333)
		while(((_g < (int)2))){
			HX_STACK_LINE(333)
			int pass = (_g)++;		HX_STACK_VAR(pass,"pass");
			HX_STACK_LINE(335)
			for(::cpp::FastIterator_obj< ::Xml > *__it = ::cpp::CreateFastIterator< ::Xml >(inXML->elements());  __it->hasNext(); ){
				::Xml def = __it->next();
				{
					HX_STACK_LINE(337)
					::String name = def->get_nodeName();		HX_STACK_VAR(name,"name");
					HX_STACK_LINE(339)
					if (((name.substr((int)0,(int)4) == HX_CSTRING("svg:")))){
						HX_STACK_LINE(341)
						name = name.substr((int)4,null());
					}
					HX_STACK_LINE(345)
					if (((name == HX_CSTRING("linearGradient")))){
						HX_STACK_LINE(347)
						this->loadGradient(def,::flash::display::GradientType_obj::LINEAR,(pass == (int)1));
					}
					else{
						HX_STACK_LINE(349)
						if (((name == HX_CSTRING("radialGradient")))){
							HX_STACK_LINE(351)
							this->loadGradient(def,::flash::display::GradientType_obj::RADIAL,(pass == (int)1));
						}
					}
				}
;
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(SVGData_obj,loadDefs,(void))

Void SVGData_obj::loadGradient( ::Xml inGrad,::flash::display::GradientType inType,bool inCrossLink){
{
		HX_STACK_FRAME("format.svg.SVGData","loadGradient",0x8e0e1477,"format.svg.SVGData.loadGradient","format/svg/SVGData.hx",362,0x27702913)
		HX_STACK_THIS(this)
		HX_STACK_ARG(inGrad,"inGrad")
		HX_STACK_ARG(inType,"inType")
		HX_STACK_ARG(inCrossLink,"inCrossLink")
		HX_STACK_LINE(364)
		::String name = inGrad->get(HX_CSTRING("id"));		HX_STACK_VAR(name,"name");
		HX_STACK_LINE(365)
		::format::svg::Grad grad = ::format::svg::Grad_obj::__new(inType);		HX_STACK_VAR(grad,"grad");
		HX_STACK_LINE(367)
		if (((  ((inCrossLink)) ? bool(inGrad->exists(HX_CSTRING("xlink:href"))) : bool(false) ))){
			HX_STACK_LINE(369)
			::String xlink = inGrad->get(HX_CSTRING("xlink:href"));		HX_STACK_VAR(xlink,"xlink");
			HX_STACK_LINE(371)
			if (((xlink.charAt((int)0) != HX_CSTRING("#")))){
				HX_STACK_LINE(372)
				HX_STACK_DO_THROW((HX_CSTRING("xlink - unkown syntax : ") + xlink));
			}
			HX_STACK_LINE(374)
			::format::svg::Grad base = this->mGrads->get(xlink.substr((int)1,null()));		HX_STACK_VAR(base,"base");
			HX_STACK_LINE(376)
			if (((base != null()))){
				HX_STACK_LINE(378)
				grad->colors = base->colors;
				HX_STACK_LINE(379)
				grad->alphas = base->alphas;
				HX_STACK_LINE(380)
				grad->ratios = base->ratios;
				HX_STACK_LINE(381)
				grad->gradMatrix = base->gradMatrix->clone();
				HX_STACK_LINE(382)
				grad->spread = base->spread;
				HX_STACK_LINE(383)
				grad->interp = base->interp;
				HX_STACK_LINE(384)
				grad->radius = base->radius;
			}
			else{
				HX_STACK_LINE(388)
				HX_STACK_DO_THROW((HX_CSTRING("Unknown xlink : ") + xlink));
			}
		}
		HX_STACK_LINE(394)
		if ((inGrad->exists(HX_CSTRING("x1")))){
			HX_STACK_LINE(396)
			grad->x1 = this->getFloat(inGrad,HX_CSTRING("x1"),null());
			HX_STACK_LINE(397)
			grad->y1 = this->getFloat(inGrad,HX_CSTRING("y1"),null());
			HX_STACK_LINE(398)
			grad->x2 = this->getFloat(inGrad,HX_CSTRING("x2"),null());
			HX_STACK_LINE(399)
			grad->y2 = this->getFloat(inGrad,HX_CSTRING("y2"),null());
		}
		else{
			HX_STACK_LINE(403)
			grad->x1 = this->getFloat(inGrad,HX_CSTRING("cx"),null());
			HX_STACK_LINE(404)
			grad->y1 = this->getFloat(inGrad,HX_CSTRING("cy"),null());
			HX_STACK_LINE(405)
			grad->x2 = this->getFloat(inGrad,HX_CSTRING("fx"),grad->x1);
			HX_STACK_LINE(406)
			grad->y2 = this->getFloat(inGrad,HX_CSTRING("fy"),grad->y1);
		}
		HX_STACK_LINE(410)
		grad->radius = this->getFloat(inGrad,HX_CSTRING("r"),null());
		HX_STACK_LINE(412)
		if ((inGrad->exists(HX_CSTRING("gradientTransform")))){
			HX_STACK_LINE(414)
			this->applyTransform(grad->gradMatrix,inGrad->get(HX_CSTRING("gradientTransform")));
		}
		HX_STACK_LINE(420)
		for(::cpp::FastIterator_obj< ::Xml > *__it = ::cpp::CreateFastIterator< ::Xml >(inGrad->elements());  __it->hasNext(); ){
			::Xml stop = __it->next();
			{
				HX_STACK_LINE(422)
				::haxe::ds::StringMap styles = this->getStyles(stop,null());		HX_STACK_VAR(styles,"styles");
				HX_STACK_LINE(424)
				grad->colors->push(this->getColorStyle(HX_CSTRING("stop-color"),stop,styles,(int)0));
				HX_STACK_LINE(425)
				grad->alphas->push(this->getFloatStyle(HX_CSTRING("stop-opacity"),stop,styles,1.0));
				HX_STACK_LINE(426)
				grad->ratios->push(::Std_obj::_int((::Std_obj::parseFloat(stop->get(HX_CSTRING("offset"))) * 255.0)));
			}
;
		}
		HX_STACK_LINE(430)
		this->mGrads->set(name,grad);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC3(SVGData_obj,loadGradient,(void))

::format::svg::Group SVGData_obj::loadGroup( ::format::svg::Group g,::Xml inG,::flash::geom::Matrix matrix,::haxe::ds::StringMap inStyles){
	HX_STACK_FRAME("format.svg.SVGData","loadGroup",0xd6570e58,"format.svg.SVGData.loadGroup","format/svg/SVGData.hx",435,0x27702913)
	HX_STACK_THIS(this)
	HX_STACK_ARG(g,"g")
	HX_STACK_ARG(inG,"inG")
	HX_STACK_ARG(matrix,"matrix")
	HX_STACK_ARG(inStyles,"inStyles")
	HX_STACK_LINE(437)
	if ((inG->exists(HX_CSTRING("transform")))){
		HX_STACK_LINE(439)
		matrix = matrix->clone();
		HX_STACK_LINE(440)
		this->applyTransform(matrix,inG->get(HX_CSTRING("transform")));
	}
	HX_STACK_LINE(444)
	if ((inG->exists(HX_CSTRING("inkscape:label")))){
		HX_STACK_LINE(446)
		g->name = inG->get(HX_CSTRING("inkscape:label"));
	}
	else{
		HX_STACK_LINE(448)
		if ((inG->exists(HX_CSTRING("id")))){
			HX_STACK_LINE(450)
			g->name = inG->get(HX_CSTRING("id"));
		}
	}
	HX_STACK_LINE(454)
	::haxe::ds::StringMap styles = this->getStyles(inG,inStyles);		HX_STACK_VAR(styles,"styles");
	HX_STACK_LINE(456)
	for(::cpp::FastIterator_obj< ::Xml > *__it = ::cpp::CreateFastIterator< ::Xml >(inG->elements());  __it->hasNext(); ){
		::Xml el = __it->next();
		{
			HX_STACK_LINE(458)
			::String name = el->get_nodeName();		HX_STACK_VAR(name,"name");
			HX_STACK_LINE(460)
			if (((name.substr((int)0,(int)4) == HX_CSTRING("svg:")))){
				HX_STACK_LINE(462)
				name = name.substr((int)4,null());
			}
			HX_STACK_LINE(466)
			if (((name == HX_CSTRING("defs")))){
				HX_STACK_LINE(468)
				this->loadDefs(el);
			}
			else{
				HX_STACK_LINE(470)
				if (((name == HX_CSTRING("g")))){
					HX_STACK_LINE(472)
					if ((!(((  ((el->exists(HX_CSTRING("display")))) ? bool((el->get(HX_CSTRING("display")) == HX_CSTRING("none"))) : bool(false) ))))){
						HX_STACK_LINE(474)
						g->children->push(::format::svg::DisplayElement_obj::DisplayGroup(this->loadGroup(::format::svg::Group_obj::__new(),el,matrix,styles)));
					}
				}
				else{
					HX_STACK_LINE(478)
					if (((bool((bool((name == HX_CSTRING("path"))) || bool((name == HX_CSTRING("line"))))) || bool((name == HX_CSTRING("polyline")))))){
						HX_STACK_LINE(480)
						g->children->push(::format::svg::DisplayElement_obj::DisplayPath(this->loadPath(el,matrix,styles,false,false,null())));
					}
					else{
						HX_STACK_LINE(482)
						if (((name == HX_CSTRING("rect")))){
							HX_STACK_LINE(484)
							g->children->push(::format::svg::DisplayElement_obj::DisplayPath(this->loadPath(el,matrix,styles,true,false,null())));
						}
						else{
							HX_STACK_LINE(486)
							if (((name == HX_CSTRING("polygon")))){
								HX_STACK_LINE(488)
								g->children->push(::format::svg::DisplayElement_obj::DisplayPath(this->loadPath(el,matrix,styles,false,false,null())));
							}
							else{
								HX_STACK_LINE(490)
								if (((name == HX_CSTRING("ellipse")))){
									HX_STACK_LINE(492)
									g->children->push(::format::svg::DisplayElement_obj::DisplayPath(this->loadPath(el,matrix,styles,false,true,null())));
								}
								else{
									HX_STACK_LINE(494)
									if (((name == HX_CSTRING("circle")))){
										HX_STACK_LINE(496)
										g->children->push(::format::svg::DisplayElement_obj::DisplayPath(this->loadPath(el,matrix,styles,false,true,true)));
									}
									else{
										HX_STACK_LINE(498)
										if (((name == HX_CSTRING("text")))){
											HX_STACK_LINE(500)
											g->children->push(::format::svg::DisplayElement_obj::DisplayText(this->loadText(el,matrix,styles)));
										}
										else{
											HX_STACK_LINE(502)
											if (((name == HX_CSTRING("linearGradient")))){
												HX_STACK_LINE(504)
												this->loadGradient(el,::flash::display::GradientType_obj::LINEAR,true);
											}
											else{
												HX_STACK_LINE(506)
												if (((name == HX_CSTRING("radialGradient")))){
													HX_STACK_LINE(508)
													this->loadGradient(el,::flash::display::GradientType_obj::RADIAL,true);
												}
												else{
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
;
	}
	HX_STACK_LINE(518)
	return g;
}


HX_DEFINE_DYNAMIC_FUNC4(SVGData_obj,loadGroup,return )

::format::svg::Path SVGData_obj::loadPath( ::Xml inPath,::flash::geom::Matrix matrix,::haxe::ds::StringMap inStyles,bool inIsRect,bool inIsEllipse,hx::Null< bool >  __o_inIsCircle){
bool inIsCircle = __o_inIsCircle.Default(false);
	HX_STACK_FRAME("format.svg.SVGData","loadPath",0xad5130ac,"format.svg.SVGData.loadPath","format/svg/SVGData.hx",523,0x27702913)
	HX_STACK_THIS(this)
	HX_STACK_ARG(inPath,"inPath")
	HX_STACK_ARG(matrix,"matrix")
	HX_STACK_ARG(inStyles,"inStyles")
	HX_STACK_ARG(inIsRect,"inIsRect")
	HX_STACK_ARG(inIsEllipse,"inIsEllipse")
	HX_STACK_ARG(inIsCircle,"inIsCircle")
{
		HX_STACK_LINE(525)
		if ((inPath->exists(HX_CSTRING("transform")))){
			HX_STACK_LINE(527)
			matrix = matrix->clone();
			HX_STACK_LINE(528)
			this->applyTransform(matrix,inPath->get(HX_CSTRING("transform")));
		}
		HX_STACK_LINE(532)
		::haxe::ds::StringMap styles = this->getStyles(inPath,inStyles);		HX_STACK_VAR(styles,"styles");
		HX_STACK_LINE(533)
		::String name;		HX_STACK_VAR(name,"name");
		HX_STACK_LINE(533)
		if ((inPath->exists(HX_CSTRING("id")))){
			HX_STACK_LINE(533)
			name = inPath->get(HX_CSTRING("id"));
		}
		else{
			HX_STACK_LINE(533)
			name = HX_CSTRING("");
		}
		HX_STACK_LINE(534)
		::format::svg::Path path = ::format::svg::Path_obj::__new();		HX_STACK_VAR(path,"path");
		HX_STACK_LINE(536)
		path->fill = this->getFillStyle(HX_CSTRING("fill"),inPath,styles);
		HX_STACK_LINE(537)
		path->alpha = this->getFloatStyle(HX_CSTRING("opacity"),inPath,styles,1.0);
		HX_STACK_LINE(538)
		path->fill_alpha = this->getFloatStyle(HX_CSTRING("fill-opacity"),inPath,styles,1.0);
		HX_STACK_LINE(539)
		path->stroke_alpha = this->getFloatStyle(HX_CSTRING("stroke-opacity"),inPath,styles,1.0);
		HX_STACK_LINE(540)
		path->stroke_colour = this->getStrokeStyle(HX_CSTRING("stroke"),inPath,styles,null());
		HX_STACK_LINE(541)
		path->stroke_width = this->getFloatStyle(HX_CSTRING("stroke-width"),inPath,styles,1.0);
		HX_STACK_LINE(542)
		path->stroke_caps = ::flash::display::CapsStyle_obj::ROUND;
		HX_STACK_LINE(543)
		path->joint_style = ::flash::display::JointStyle_obj::ROUND;
		HX_STACK_LINE(544)
		path->miter_limit = this->getFloatStyle(HX_CSTRING("stroke-miterlimit"),inPath,styles,3.0);
		HX_STACK_LINE(545)
		path->segments = Array_obj< ::Dynamic >::__new();
		HX_STACK_LINE(546)
		path->matrix = matrix;
		HX_STACK_LINE(547)
		path->name = name;
		HX_STACK_LINE(549)
		if ((inIsRect)){
			HX_STACK_LINE(551)
			Float x;		HX_STACK_VAR(x,"x");
			HX_STACK_LINE(551)
			if ((inPath->exists(HX_CSTRING("x")))){
				HX_STACK_LINE(551)
				x = ::Std_obj::parseFloat(inPath->get(HX_CSTRING("x")));
			}
			else{
				HX_STACK_LINE(551)
				x = (int)0;
			}
			HX_STACK_LINE(552)
			Float y;		HX_STACK_VAR(y,"y");
			HX_STACK_LINE(552)
			if ((inPath->exists(HX_CSTRING("y")))){
				HX_STACK_LINE(552)
				y = ::Std_obj::parseFloat(inPath->get(HX_CSTRING("y")));
			}
			else{
				HX_STACK_LINE(552)
				y = (int)0;
			}
			HX_STACK_LINE(553)
			Float w = ::Std_obj::parseFloat(inPath->get(HX_CSTRING("width")));		HX_STACK_VAR(w,"w");
			HX_STACK_LINE(554)
			Float h = ::Std_obj::parseFloat(inPath->get(HX_CSTRING("height")));		HX_STACK_VAR(h,"h");
			HX_STACK_LINE(555)
			Float rx;		HX_STACK_VAR(rx,"rx");
			HX_STACK_LINE(555)
			if ((inPath->exists(HX_CSTRING("rx")))){
				HX_STACK_LINE(555)
				rx = ::Std_obj::parseFloat(inPath->get(HX_CSTRING("rx")));
			}
			else{
				HX_STACK_LINE(555)
				rx = 0.0;
			}
			HX_STACK_LINE(556)
			Float ry;		HX_STACK_VAR(ry,"ry");
			HX_STACK_LINE(556)
			if ((inPath->exists(HX_CSTRING("ry")))){
				HX_STACK_LINE(556)
				ry = ::Std_obj::parseFloat(inPath->get(HX_CSTRING("ry")));
			}
			else{
				HX_STACK_LINE(556)
				ry = 0.0;
			}
			HX_STACK_LINE(558)
			if (((bool((rx == (int)0)) || bool((ry == (int)0))))){
				HX_STACK_LINE(560)
				path->segments->push(::format::svg::MoveSegment_obj::__new(x,y));
				HX_STACK_LINE(561)
				path->segments->push(::format::svg::DrawSegment_obj::__new((x + w),y));
				HX_STACK_LINE(562)
				path->segments->push(::format::svg::DrawSegment_obj::__new((x + w),(y + h)));
				HX_STACK_LINE(563)
				path->segments->push(::format::svg::DrawSegment_obj::__new(x,(y + h)));
				HX_STACK_LINE(564)
				path->segments->push(::format::svg::DrawSegment_obj::__new(x,y));
			}
			else{
				HX_STACK_LINE(568)
				path->segments->push(::format::svg::MoveSegment_obj::__new(x,(y + ry)));
				HX_STACK_LINE(571)
				path->segments->push(::format::svg::QuadraticSegment_obj::__new(x,y,(x + rx),y));
				HX_STACK_LINE(572)
				path->segments->push(::format::svg::DrawSegment_obj::__new(((x + w) - rx),y));
				HX_STACK_LINE(575)
				path->segments->push(::format::svg::QuadraticSegment_obj::__new((x + w),y,(x + w),(y + rx)));
				HX_STACK_LINE(576)
				path->segments->push(::format::svg::DrawSegment_obj::__new((x + w),((y + h) - ry)));
				HX_STACK_LINE(579)
				path->segments->push(::format::svg::QuadraticSegment_obj::__new((x + w),(y + h),((x + w) - rx),(y + h)));
				HX_STACK_LINE(580)
				path->segments->push(::format::svg::DrawSegment_obj::__new((x + rx),(y + h)));
				HX_STACK_LINE(583)
				path->segments->push(::format::svg::QuadraticSegment_obj::__new(x,(y + h),x,((y + h) - ry)));
				HX_STACK_LINE(584)
				path->segments->push(::format::svg::DrawSegment_obj::__new(x,(y + ry)));
			}
		}
		else{
			HX_STACK_LINE(588)
			if ((inIsEllipse)){
				HX_STACK_LINE(590)
				Float x;		HX_STACK_VAR(x,"x");
				HX_STACK_LINE(590)
				if ((inPath->exists(HX_CSTRING("cx")))){
					HX_STACK_LINE(590)
					x = ::Std_obj::parseFloat(inPath->get(HX_CSTRING("cx")));
				}
				else{
					HX_STACK_LINE(590)
					x = (int)0;
				}
				HX_STACK_LINE(591)
				Float y;		HX_STACK_VAR(y,"y");
				HX_STACK_LINE(591)
				if ((inPath->exists(HX_CSTRING("cy")))){
					HX_STACK_LINE(591)
					y = ::Std_obj::parseFloat(inPath->get(HX_CSTRING("cy")));
				}
				else{
					HX_STACK_LINE(591)
					y = (int)0;
				}
				HX_STACK_LINE(592)
				Float r;		HX_STACK_VAR(r,"r");
				HX_STACK_LINE(592)
				if (((  ((inIsCircle)) ? bool(inPath->exists(HX_CSTRING("r"))) : bool(false) ))){
					HX_STACK_LINE(592)
					r = ::Std_obj::parseFloat(inPath->get(HX_CSTRING("r")));
				}
				else{
					HX_STACK_LINE(592)
					r = 0.0;
				}
				HX_STACK_LINE(593)
				Float w;		HX_STACK_VAR(w,"w");
				HX_STACK_LINE(593)
				if ((inIsCircle)){
					HX_STACK_LINE(593)
					w = r;
				}
				else{
					HX_STACK_LINE(593)
					if ((inPath->exists(HX_CSTRING("rx")))){
						HX_STACK_LINE(593)
						w = ::Std_obj::parseFloat(inPath->get(HX_CSTRING("rx")));
					}
					else{
						HX_STACK_LINE(593)
						w = 0.0;
					}
				}
				HX_STACK_LINE(594)
				Float w_ = (w * ::format::svg::SVGData_obj::SIN45);		HX_STACK_VAR(w_,"w_");
				HX_STACK_LINE(595)
				Float cw_ = (w * ::format::svg::SVGData_obj::TAN22);		HX_STACK_VAR(cw_,"cw_");
				HX_STACK_LINE(596)
				Float h;		HX_STACK_VAR(h,"h");
				HX_STACK_LINE(596)
				if ((inIsCircle)){
					HX_STACK_LINE(596)
					h = r;
				}
				else{
					HX_STACK_LINE(596)
					if ((inPath->exists(HX_CSTRING("ry")))){
						HX_STACK_LINE(596)
						h = ::Std_obj::parseFloat(inPath->get(HX_CSTRING("ry")));
					}
					else{
						HX_STACK_LINE(596)
						h = 0.0;
					}
				}
				HX_STACK_LINE(597)
				Float h_ = (h * ::format::svg::SVGData_obj::SIN45);		HX_STACK_VAR(h_,"h_");
				HX_STACK_LINE(598)
				Float ch_ = (h * ::format::svg::SVGData_obj::TAN22);		HX_STACK_VAR(ch_,"ch_");
				HX_STACK_LINE(600)
				path->segments->push(::format::svg::MoveSegment_obj::__new((x + w),y));
				HX_STACK_LINE(601)
				path->segments->push(::format::svg::QuadraticSegment_obj::__new((x + w),(y + ch_),(x + w_),(y + h_)));
				HX_STACK_LINE(602)
				path->segments->push(::format::svg::QuadraticSegment_obj::__new((x + cw_),(y + h),x,(y + h)));
				HX_STACK_LINE(603)
				path->segments->push(::format::svg::QuadraticSegment_obj::__new((x - cw_),(y + h),(x - w_),(y + h_)));
				HX_STACK_LINE(604)
				path->segments->push(::format::svg::QuadraticSegment_obj::__new((x - w),(y + ch_),(x - w),y));
				HX_STACK_LINE(605)
				path->segments->push(::format::svg::QuadraticSegment_obj::__new((x - w),(y - ch_),(x - w_),(y - h_)));
				HX_STACK_LINE(606)
				path->segments->push(::format::svg::QuadraticSegment_obj::__new((x - cw_),(y - h),x,(y - h)));
				HX_STACK_LINE(607)
				path->segments->push(::format::svg::QuadraticSegment_obj::__new((x + cw_),(y - h),(x + w_),(y - h_)));
				HX_STACK_LINE(608)
				path->segments->push(::format::svg::QuadraticSegment_obj::__new((x + w),(y - ch_),(x + w),y));
			}
			else{
				HX_STACK_LINE(612)
				::String d;		HX_STACK_VAR(d,"d");
				HX_STACK_LINE(612)
				if ((inPath->exists(HX_CSTRING("points")))){
					HX_STACK_LINE(612)
					d = ((HX_CSTRING("M") + inPath->get(HX_CSTRING("points"))) + HX_CSTRING("z"));
				}
				else{
					HX_STACK_LINE(613)
					if ((inPath->exists(HX_CSTRING("x1")))){
						HX_STACK_LINE(613)
						::String _g = ((HX_CSTRING("M") + inPath->get(HX_CSTRING("x1"))) + HX_CSTRING(","));		HX_STACK_VAR(_g,"_g");
						HX_STACK_LINE(613)
						::String _g1 = ((_g + inPath->get(HX_CSTRING("y1"))) + HX_CSTRING(" "));		HX_STACK_VAR(_g1,"_g1");
						HX_STACK_LINE(613)
						::String _g2 = ((_g1 + inPath->get(HX_CSTRING("x2"))) + HX_CSTRING(","));		HX_STACK_VAR(_g2,"_g2");
						HX_STACK_LINE(613)
						d = ((_g2 + inPath->get(HX_CSTRING("y2"))) + HX_CSTRING("z"));
					}
					else{
						HX_STACK_LINE(614)
						d = inPath->get(HX_CSTRING("d"));
					}
				}
				HX_STACK_LINE(616)
				{
					HX_STACK_LINE(616)
					int _g = (int)0;		HX_STACK_VAR(_g,"_g");
					HX_STACK_LINE(616)
					Array< ::Dynamic > _g1 = this->mPathParser->parse(d,this->mConvertCubics);		HX_STACK_VAR(_g1,"_g1");
					HX_STACK_LINE(616)
					while(((_g < _g1->length))){
						HX_STACK_LINE(616)
						::format::svg::PathSegment segment = _g1->__get(_g).StaticCast< ::format::svg::PathSegment >();		HX_STACK_VAR(segment,"segment");
						HX_STACK_LINE(616)
						++(_g);
						HX_STACK_LINE(618)
						path->segments->push(segment);
					}
				}
			}
		}
		HX_STACK_LINE(624)
		return path;
	}
}


HX_DEFINE_DYNAMIC_FUNC6(SVGData_obj,loadPath,return )

::format::svg::Text SVGData_obj::loadText( ::Xml inText,::flash::geom::Matrix matrix,::haxe::ds::StringMap inStyles){
	HX_STACK_FRAME("format.svg.SVGData","loadText",0xaff917b4,"format.svg.SVGData.loadText","format/svg/SVGData.hx",629,0x27702913)
	HX_STACK_THIS(this)
	HX_STACK_ARG(inText,"inText")
	HX_STACK_ARG(matrix,"matrix")
	HX_STACK_ARG(inStyles,"inStyles")
	HX_STACK_LINE(631)
	if ((inText->exists(HX_CSTRING("transform")))){
		HX_STACK_LINE(633)
		matrix = matrix->clone();
		HX_STACK_LINE(634)
		this->applyTransform(matrix,inText->get(HX_CSTRING("transform")));
	}
	HX_STACK_LINE(638)
	::haxe::ds::StringMap styles = this->getStyles(inText,inStyles);		HX_STACK_VAR(styles,"styles");
	HX_STACK_LINE(639)
	::format::svg::Text text = ::format::svg::Text_obj::__new();		HX_STACK_VAR(text,"text");
	HX_STACK_LINE(641)
	text->matrix = matrix;
	HX_STACK_LINE(642)
	if ((inText->exists(HX_CSTRING("id")))){
		HX_STACK_LINE(642)
		text->name = inText->get(HX_CSTRING("id"));
	}
	else{
		HX_STACK_LINE(642)
		text->name = HX_CSTRING("");
	}
	HX_STACK_LINE(643)
	text->x = this->getFloat(inText,HX_CSTRING("x"),0.0);
	HX_STACK_LINE(644)
	text->y = this->getFloat(inText,HX_CSTRING("y"),0.0);
	HX_STACK_LINE(645)
	text->fill = this->getFillStyle(HX_CSTRING("fill"),inText,styles);
	HX_STACK_LINE(646)
	text->fill_alpha = this->getFloatStyle(HX_CSTRING("fill-opacity"),inText,styles,1.0);
	HX_STACK_LINE(647)
	text->stroke_alpha = this->getFloatStyle(HX_CSTRING("stroke-opacity"),inText,styles,1.0);
	HX_STACK_LINE(648)
	text->stroke_colour = this->getStrokeStyle(HX_CSTRING("stroke"),inText,styles,null());
	HX_STACK_LINE(649)
	text->stroke_width = this->getFloatStyle(HX_CSTRING("stroke-width"),inText,styles,1.0);
	HX_STACK_LINE(650)
	text->font_family = this->getStyle(HX_CSTRING("font-family"),inText,styles,HX_CSTRING(""));
	HX_STACK_LINE(651)
	text->font_size = this->getFloatStyle(HX_CSTRING("font-size"),inText,styles,(int)12);
	HX_STACK_LINE(652)
	text->letter_spacing = this->getFloatStyle(HX_CSTRING("letter-spacing"),inText,styles,(int)0);
	HX_STACK_LINE(653)
	text->kerning = this->getFloatStyle(HX_CSTRING("kerning"),inText,styles,(int)0);
	HX_STACK_LINE(655)
	::String string = HX_CSTRING("");		HX_STACK_VAR(string,"string");
	HX_STACK_LINE(657)
	for(::cpp::FastIterator_obj< ::Xml > *__it = ::cpp::CreateFastIterator< ::Xml >(inText->elements());  __it->hasNext(); ){
		::Xml el = __it->next();
		hx::AddEq(string,el->toString());
	}
	HX_STACK_LINE(664)
	text->text = string;
	HX_STACK_LINE(665)
	return text;
}


HX_DEFINE_DYNAMIC_FUNC3(SVGData_obj,loadText,return )

Float SVGData_obj::SIN45;

Float SVGData_obj::TAN22;

::EReg SVGData_obj::mStyleSplit;

::EReg SVGData_obj::mStyleValue;

::EReg SVGData_obj::mTranslateMatch;

::EReg SVGData_obj::mScaleMatch;

::EReg SVGData_obj::mMatrixMatch;

::EReg SVGData_obj::mURLMatch;

::format::svg::FillType SVGData_obj::defaultFill;


SVGData_obj::SVGData_obj()
{
}

void SVGData_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(SVGData);
	HX_MARK_MEMBER_NAME(height,"height");
	HX_MARK_MEMBER_NAME(width,"width");
	HX_MARK_MEMBER_NAME(mConvertCubics,"mConvertCubics");
	HX_MARK_MEMBER_NAME(mGrads,"mGrads");
	HX_MARK_MEMBER_NAME(mPathParser,"mPathParser");
	::format::svg::Group_obj::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void SVGData_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(height,"height");
	HX_VISIT_MEMBER_NAME(width,"width");
	HX_VISIT_MEMBER_NAME(mConvertCubics,"mConvertCubics");
	HX_VISIT_MEMBER_NAME(mGrads,"mGrads");
	HX_VISIT_MEMBER_NAME(mPathParser,"mPathParser");
	::format::svg::Group_obj::__Visit(HX_VISIT_ARG);
}

Dynamic SVGData_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"SIN45") ) { return SIN45; }
		if (HX_FIELD_EQ(inName,"TAN22") ) { return TAN22; }
		if (HX_FIELD_EQ(inName,"width") ) { return width; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"height") ) { return height; }
		if (HX_FIELD_EQ(inName,"mGrads") ) { return mGrads; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"getFloat") ) { return getFloat_dyn(); }
		if (HX_FIELD_EQ(inName,"getStyle") ) { return getStyle_dyn(); }
		if (HX_FIELD_EQ(inName,"loadDefs") ) { return loadDefs_dyn(); }
		if (HX_FIELD_EQ(inName,"loadPath") ) { return loadPath_dyn(); }
		if (HX_FIELD_EQ(inName,"loadText") ) { return loadText_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"mURLMatch") ) { return mURLMatch; }
		if (HX_FIELD_EQ(inName,"dumpGroup") ) { return dumpGroup_dyn(); }
		if (HX_FIELD_EQ(inName,"getStyles") ) { return getStyles_dyn(); }
		if (HX_FIELD_EQ(inName,"loadGroup") ) { return loadGroup_dyn(); }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"mStyleSplit") ) { return mStyleSplit; }
		if (HX_FIELD_EQ(inName,"mStyleValue") ) { return mStyleValue; }
		if (HX_FIELD_EQ(inName,"mScaleMatch") ) { return mScaleMatch; }
		if (HX_FIELD_EQ(inName,"defaultFill") ) { return defaultFill; }
		if (HX_FIELD_EQ(inName,"mPathParser") ) { return mPathParser; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"mMatrixMatch") ) { return mMatrixMatch; }
		if (HX_FIELD_EQ(inName,"getFillStyle") ) { return getFillStyle_dyn(); }
		if (HX_FIELD_EQ(inName,"loadGradient") ) { return loadGradient_dyn(); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"getColorStyle") ) { return getColorStyle_dyn(); }
		if (HX_FIELD_EQ(inName,"getFloatStyle") ) { return getFloatStyle_dyn(); }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"mConvertCubics") ) { return mConvertCubics; }
		if (HX_FIELD_EQ(inName,"applyTransform") ) { return applyTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"getStrokeStyle") ) { return getStrokeStyle_dyn(); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"mTranslateMatch") ) { return mTranslateMatch; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic SVGData_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"SIN45") ) { SIN45=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"TAN22") ) { TAN22=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"width") ) { width=inValue.Cast< Float >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"height") ) { height=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"mGrads") ) { mGrads=inValue.Cast< ::haxe::ds::StringMap >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"mURLMatch") ) { mURLMatch=inValue.Cast< ::EReg >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"mStyleSplit") ) { mStyleSplit=inValue.Cast< ::EReg >(); return inValue; }
		if (HX_FIELD_EQ(inName,"mStyleValue") ) { mStyleValue=inValue.Cast< ::EReg >(); return inValue; }
		if (HX_FIELD_EQ(inName,"mScaleMatch") ) { mScaleMatch=inValue.Cast< ::EReg >(); return inValue; }
		if (HX_FIELD_EQ(inName,"defaultFill") ) { defaultFill=inValue.Cast< ::format::svg::FillType >(); return inValue; }
		if (HX_FIELD_EQ(inName,"mPathParser") ) { mPathParser=inValue.Cast< ::format::svg::PathParser >(); return inValue; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"mMatrixMatch") ) { mMatrixMatch=inValue.Cast< ::EReg >(); return inValue; }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"mConvertCubics") ) { mConvertCubics=inValue.Cast< bool >(); return inValue; }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"mTranslateMatch") ) { mTranslateMatch=inValue.Cast< ::EReg >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void SVGData_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("height"));
	outFields->push(HX_CSTRING("width"));
	outFields->push(HX_CSTRING("mConvertCubics"));
	outFields->push(HX_CSTRING("mGrads"));
	outFields->push(HX_CSTRING("mPathParser"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("SIN45"),
	HX_CSTRING("TAN22"),
	HX_CSTRING("mStyleSplit"),
	HX_CSTRING("mStyleValue"),
	HX_CSTRING("mTranslateMatch"),
	HX_CSTRING("mScaleMatch"),
	HX_CSTRING("mMatrixMatch"),
	HX_CSTRING("mURLMatch"),
	HX_CSTRING("defaultFill"),
	String(null()) };

#if HXCPP_SCRIPTABLE
static hx::StorageInfo sMemberStorageInfo[] = {
	{hx::fsFloat,(int)offsetof(SVGData_obj,height),HX_CSTRING("height")},
	{hx::fsFloat,(int)offsetof(SVGData_obj,width),HX_CSTRING("width")},
	{hx::fsBool,(int)offsetof(SVGData_obj,mConvertCubics),HX_CSTRING("mConvertCubics")},
	{hx::fsObject /*::haxe::ds::StringMap*/ ,(int)offsetof(SVGData_obj,mGrads),HX_CSTRING("mGrads")},
	{hx::fsObject /*::format::svg::PathParser*/ ,(int)offsetof(SVGData_obj,mPathParser),HX_CSTRING("mPathParser")},
	{ hx::fsUnknown, 0, null()}
};
#endif

static ::String sMemberFields[] = {
	HX_CSTRING("height"),
	HX_CSTRING("width"),
	HX_CSTRING("mConvertCubics"),
	HX_CSTRING("mGrads"),
	HX_CSTRING("mPathParser"),
	HX_CSTRING("applyTransform"),
	HX_CSTRING("dumpGroup"),
	HX_CSTRING("getColorStyle"),
	HX_CSTRING("getFillStyle"),
	HX_CSTRING("getFloat"),
	HX_CSTRING("getFloatStyle"),
	HX_CSTRING("getStrokeStyle"),
	HX_CSTRING("getStyle"),
	HX_CSTRING("getStyles"),
	HX_CSTRING("loadDefs"),
	HX_CSTRING("loadGradient"),
	HX_CSTRING("loadGroup"),
	HX_CSTRING("loadPath"),
	HX_CSTRING("loadText"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(SVGData_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(SVGData_obj::SIN45,"SIN45");
	HX_MARK_MEMBER_NAME(SVGData_obj::TAN22,"TAN22");
	HX_MARK_MEMBER_NAME(SVGData_obj::mStyleSplit,"mStyleSplit");
	HX_MARK_MEMBER_NAME(SVGData_obj::mStyleValue,"mStyleValue");
	HX_MARK_MEMBER_NAME(SVGData_obj::mTranslateMatch,"mTranslateMatch");
	HX_MARK_MEMBER_NAME(SVGData_obj::mScaleMatch,"mScaleMatch");
	HX_MARK_MEMBER_NAME(SVGData_obj::mMatrixMatch,"mMatrixMatch");
	HX_MARK_MEMBER_NAME(SVGData_obj::mURLMatch,"mURLMatch");
	HX_MARK_MEMBER_NAME(SVGData_obj::defaultFill,"defaultFill");
};

#ifdef HXCPP_VISIT_ALLOCS
static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(SVGData_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(SVGData_obj::SIN45,"SIN45");
	HX_VISIT_MEMBER_NAME(SVGData_obj::TAN22,"TAN22");
	HX_VISIT_MEMBER_NAME(SVGData_obj::mStyleSplit,"mStyleSplit");
	HX_VISIT_MEMBER_NAME(SVGData_obj::mStyleValue,"mStyleValue");
	HX_VISIT_MEMBER_NAME(SVGData_obj::mTranslateMatch,"mTranslateMatch");
	HX_VISIT_MEMBER_NAME(SVGData_obj::mScaleMatch,"mScaleMatch");
	HX_VISIT_MEMBER_NAME(SVGData_obj::mMatrixMatch,"mMatrixMatch");
	HX_VISIT_MEMBER_NAME(SVGData_obj::mURLMatch,"mURLMatch");
	HX_VISIT_MEMBER_NAME(SVGData_obj::defaultFill,"defaultFill");
};

#endif

Class SVGData_obj::__mClass;

void SVGData_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("format.svg.SVGData"), hx::TCanCast< SVGData_obj> ,sStaticFields,sMemberFields,
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

void SVGData_obj::__boot()
{
	SIN45= 0.70710678118654752440084436210485;
	TAN22= 0.4142135623730950488016887242097;
	mStyleSplit= ::EReg_obj::__new(HX_CSTRING(";"),HX_CSTRING("g"));
	mStyleValue= ::EReg_obj::__new(HX_CSTRING("\\s*(.*)\\s*:\\s*(.*)\\s*"),HX_CSTRING(""));
	mTranslateMatch= ::EReg_obj::__new(HX_CSTRING("translate\\((.*)[, ](.*)\\)"),HX_CSTRING(""));
	mScaleMatch= ::EReg_obj::__new(HX_CSTRING("scale\\((.*)\\)"),HX_CSTRING(""));
	mMatrixMatch= ::EReg_obj::__new(HX_CSTRING("matrix\\((.*)[, ](.*)[, ](.*)[, ](.*)[, ](.*)[, ](.*)\\)"),HX_CSTRING(""));
	mURLMatch= ::EReg_obj::__new(HX_CSTRING("url\\(#(.*)\\)"),HX_CSTRING(""));
	defaultFill= ::format::svg::FillType_obj::FillSolid((int)0);
}

} // end namespace format
} // end namespace svg
