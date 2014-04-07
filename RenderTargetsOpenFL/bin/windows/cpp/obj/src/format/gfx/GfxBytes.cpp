#include <hxcpp.h>

#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_Type
#include <Type.h>
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
#ifndef INCLUDED_flash_display_LineScaleMode
#include <flash/display/LineScaleMode.h>
#endif
#ifndef INCLUDED_flash_display_SpreadMethod
#include <flash/display/SpreadMethod.h>
#endif
#ifndef INCLUDED_flash_geom_Matrix
#include <flash/geom/Matrix.h>
#endif
#ifndef INCLUDED_flash_utils_ByteArray
#include <flash/utils/ByteArray.h>
#endif
#ifndef INCLUDED_flash_utils_CompressionAlgorithm
#include <flash/utils/CompressionAlgorithm.h>
#endif
#ifndef INCLUDED_flash_utils_IDataInput
#include <flash/utils/IDataInput.h>
#endif
#ifndef INCLUDED_flash_utils_IDataOutput
#include <flash/utils/IDataOutput.h>
#endif
#ifndef INCLUDED_format_gfx_Gfx
#include <format/gfx/Gfx.h>
#endif
#ifndef INCLUDED_format_gfx_GfxBytes
#include <format/gfx/GfxBytes.h>
#endif
#ifndef INCLUDED_format_gfx_Gradient
#include <format/gfx/Gradient.h>
#endif
#ifndef INCLUDED_format_gfx_LineStyle
#include <format/gfx/LineStyle.h>
#endif
#ifndef INCLUDED_haxe_Log
#include <haxe/Log.h>
#endif
#ifndef INCLUDED_haxe_crypto_BaseCode
#include <haxe/crypto/BaseCode.h>
#endif
#ifndef INCLUDED_haxe_io_Bytes
#include <haxe/io/Bytes.h>
#endif
#ifndef INCLUDED_openfl_utils_IMemoryRange
#include <openfl/utils/IMemoryRange.h>
#endif
namespace format{
namespace gfx{

Void GfxBytes_obj::__construct(::flash::utils::ByteArray inBuffer,hx::Null< int >  __o_inFlags)
{
HX_STACK_FRAME("format.gfx.GfxBytes","new",0x2d296170,"format.gfx.GfxBytes.new","format/gfx/GfxBytes.hx",55,0x1ef332be)

HX_STACK_ARG(inBuffer,"inBuffer")

HX_STACK_ARG(__o_inFlags,"inFlags")
int inFlags = __o_inFlags.Default(0);
{
	HX_STACK_LINE(56)
	super::__construct();
	HX_STACK_LINE(57)
	if (((inBuffer == null()))){
		HX_STACK_LINE(57)
		this->buffer = ::flash::utils::ByteArray_obj::__new(null());
	}
	else{
		HX_STACK_LINE(57)
		this->buffer = inBuffer;
	}
}
;
	return null();
}

//GfxBytes_obj::~GfxBytes_obj() { }

Dynamic GfxBytes_obj::__CreateEmpty() { return  new GfxBytes_obj; }
hx::ObjectPtr< GfxBytes_obj > GfxBytes_obj::__new(::flash::utils::ByteArray inBuffer,hx::Null< int >  __o_inFlags)
{  hx::ObjectPtr< GfxBytes_obj > result = new GfxBytes_obj();
	result->__construct(inBuffer,__o_inFlags);
	return result;}

Dynamic GfxBytes_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< GfxBytes_obj > result = new GfxBytes_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}

::String GfxBytes_obj::toString( ){
	HX_STACK_FRAME("format.gfx.GfxBytes","toString",0x8c81659c,"format.gfx.GfxBytes.toString","format/gfx/GfxBytes.hx",61,0x1ef332be)
	HX_STACK_THIS(this)
	HX_STACK_LINE(69)
	::flash::utils::ByteArray buf = ::flash::utils::ByteArray_obj::__new(this->buffer->length);		HX_STACK_VAR(buf,"buf");
	HX_STACK_LINE(71)
	this->buffer->position = (int)0;
	HX_STACK_LINE(72)
	this->buffer->readBytes(buf,null(),null());
	HX_STACK_LINE(73)
	buf->compress(null());
	HX_STACK_LINE(74)
	if (((::format::gfx::GfxBytes_obj::baseCoder == null()))){
		HX_STACK_LINE(75)
		::format::gfx::GfxBytes_obj::baseCoder = ::haxe::crypto::BaseCode_obj::__new(::haxe::io::Bytes_obj::ofString(::format::gfx::GfxBytes_obj::base64));
	}
	HX_STACK_LINE(79)
	return ::format::gfx::GfxBytes_obj::baseCoder->encodeBytes(buf)->toString();
}


HX_DEFINE_DYNAMIC_FUNC0(GfxBytes_obj,toString,return )

Void GfxBytes_obj::eof( ){
{
		HX_STACK_FRAME("format.gfx.GfxBytes","eof",0x2d2295cc,"format.gfx.GfxBytes.eof","format/gfx/GfxBytes.hx",101,0x1ef332be)
		HX_STACK_THIS(this)
		HX_STACK_LINE(101)
		::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
		HX_STACK_LINE(101)
		_this->ensureElem(_this->position,true);
		HX_STACK_LINE(101)
		_this->b[(_this->position)++] = (int)0;
	}
return null();
}


Void GfxBytes_obj::iterate( ::format::gfx::Gfx inGfx){
{
		HX_STACK_FRAME("format.gfx.GfxBytes","iterate",0xeeabd30a,"format.gfx.GfxBytes.iterate","format/gfx/GfxBytes.hx",110,0x1ef332be)
		HX_STACK_THIS(this)
		HX_STACK_ARG(inGfx,"inGfx")
		HX_STACK_LINE(111)
		this->buffer->position = (int)0;
		HX_STACK_LINE(112)
		while((true)){
			HX_STACK_LINE(114)
			int _g;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(114)
			{
				HX_STACK_LINE(114)
				::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
				HX_STACK_LINE(114)
				int value;		HX_STACK_VAR(value,"value");
				HX_STACK_LINE(114)
				if (((_this->position < _this->length))){
					HX_STACK_LINE(114)
					int pos = (_this->position)++;		HX_STACK_VAR(pos,"pos");
					HX_STACK_LINE(114)
					value = _this->b->__get(pos);
				}
				else{
					HX_STACK_LINE(114)
					value = _this->__throwEOFi();
				}
				HX_STACK_LINE(114)
				if (((((int(value) & int((int)128))) != (int)0))){
					HX_STACK_LINE(114)
					_g = (value - (int)256);
				}
				else{
					HX_STACK_LINE(114)
					_g = value;
				}
			}
			HX_STACK_LINE(114)
			switch( (int)(_g)){
				case (int)0: {
					HX_STACK_LINE(117)
					return null();
				}
				;break;
				case (int)1: {
					HX_STACK_LINE(120)
					Float w = this->buffer->readFloat();		HX_STACK_VAR(w,"w");
					HX_STACK_LINE(121)
					Float h = this->buffer->readFloat();		HX_STACK_VAR(h,"h");
					HX_STACK_LINE(122)
					inGfx->size(w,h);
				}
				;break;
				case (int)10: {
					HX_STACK_LINE(125)
					int col = this->readRGB();		HX_STACK_VAR(col,"col");
					HX_STACK_LINE(126)
					Float alpha = this->buffer->readFloat();		HX_STACK_VAR(alpha,"alpha");
					HX_STACK_LINE(127)
					inGfx->beginFill(col,alpha);
				}
				;break;
				case (int)11: {
					HX_STACK_LINE(130)
					::format::gfx::Gradient grad = ::format::gfx::Gradient_obj::__new();		HX_STACK_VAR(grad,"grad");
					struct _Function_3_1{
						inline static int Block( ::format::gfx::GfxBytes_obj *__this){
							HX_STACK_FRAME("*","closure",0x5bdab937,"*.closure","format/gfx/GfxBytes.hx",131,0x1ef332be)
							{
								HX_STACK_LINE(131)
								::flash::utils::ByteArray _this = __this->buffer;		HX_STACK_VAR(_this,"_this");
								HX_STACK_LINE(131)
								int value;		HX_STACK_VAR(value,"value");
								HX_STACK_LINE(131)
								if (((_this->position < _this->length))){
									HX_STACK_LINE(131)
									int pos = (_this->position)++;		HX_STACK_VAR(pos,"pos");
									HX_STACK_LINE(131)
									value = _this->b->__get(pos);
								}
								else{
									HX_STACK_LINE(131)
									value = _this->__throwEOFi();
								}
								HX_STACK_LINE(131)
								return (  (((((int(value) & int((int)128))) != (int)0))) ? int((value - (int)256)) : int(value) );
							}
							return null();
						}
					};
					HX_STACK_LINE(131)
					grad->type = ::Type_obj::createEnumIndex(hx::ClassOf< ::flash::display::GradientType >(),_Function_3_1::Block(this),null());
					HX_STACK_LINE(132)
					int len;		HX_STACK_VAR(len,"len");
					HX_STACK_LINE(132)
					{
						HX_STACK_LINE(132)
						::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
						HX_STACK_LINE(132)
						int value;		HX_STACK_VAR(value,"value");
						HX_STACK_LINE(132)
						if (((_this->position < _this->length))){
							HX_STACK_LINE(132)
							int pos = (_this->position)++;		HX_STACK_VAR(pos,"pos");
							HX_STACK_LINE(132)
							value = _this->b->__get(pos);
						}
						else{
							HX_STACK_LINE(132)
							value = _this->__throwEOFi();
						}
						HX_STACK_LINE(132)
						if (((((int(value) & int((int)128))) != (int)0))){
							HX_STACK_LINE(132)
							len = (value - (int)256);
						}
						else{
							HX_STACK_LINE(132)
							len = value;
						}
					}
					HX_STACK_LINE(133)
					{
						HX_STACK_LINE(133)
						int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
						HX_STACK_LINE(133)
						while(((_g1 < len))){
							HX_STACK_LINE(133)
							int i = (_g1)++;		HX_STACK_VAR(i,"i");
							HX_STACK_LINE(135)
							grad->colors->push(this->readRGB());
							struct _Function_5_1{
								inline static int Block( ::format::gfx::GfxBytes_obj *__this){
									HX_STACK_FRAME("*","closure",0x5bdab937,"*.closure","format/gfx/GfxBytes.hx",136,0x1ef332be)
									{
										HX_STACK_LINE(136)
										::flash::utils::ByteArray _this = __this->buffer;		HX_STACK_VAR(_this,"_this");
										HX_STACK_LINE(136)
										int value;		HX_STACK_VAR(value,"value");
										HX_STACK_LINE(136)
										if (((_this->position < _this->length))){
											HX_STACK_LINE(136)
											int pos = (_this->position)++;		HX_STACK_VAR(pos,"pos");
											HX_STACK_LINE(136)
											value = _this->b->__get(pos);
										}
										else{
											HX_STACK_LINE(136)
											value = _this->__throwEOFi();
										}
										HX_STACK_LINE(136)
										return (  (((((int(value) & int((int)128))) != (int)0))) ? int((value - (int)256)) : int(value) );
									}
									return null();
								}
							};
							HX_STACK_LINE(136)
							grad->alphas->push((Float(_Function_5_1::Block(this)) / Float(255.0)));
							struct _Function_5_2{
								inline static int Block( ::format::gfx::GfxBytes_obj *__this){
									HX_STACK_FRAME("*","closure",0x5bdab937,"*.closure","format/gfx/GfxBytes.hx",137,0x1ef332be)
									{
										HX_STACK_LINE(137)
										::flash::utils::ByteArray _this = __this->buffer;		HX_STACK_VAR(_this,"_this");
										HX_STACK_LINE(137)
										int value;		HX_STACK_VAR(value,"value");
										HX_STACK_LINE(137)
										if (((_this->position < _this->length))){
											HX_STACK_LINE(137)
											int pos = (_this->position)++;		HX_STACK_VAR(pos,"pos");
											HX_STACK_LINE(137)
											value = _this->b->__get(pos);
										}
										else{
											HX_STACK_LINE(137)
											value = _this->__throwEOFi();
										}
										HX_STACK_LINE(137)
										return (  (((((int(value) & int((int)128))) != (int)0))) ? int((value - (int)256)) : int(value) );
									}
									return null();
								}
							};
							HX_STACK_LINE(137)
							grad->ratios->push(_Function_5_2::Block(this));
						}
					}
					HX_STACK_LINE(139)
					grad->matrix->a = this->buffer->readFloat();
					HX_STACK_LINE(140)
					grad->matrix->b = this->buffer->readFloat();
					HX_STACK_LINE(141)
					grad->matrix->c = this->buffer->readFloat();
					HX_STACK_LINE(142)
					grad->matrix->d = this->buffer->readFloat();
					HX_STACK_LINE(143)
					grad->matrix->tx = this->buffer->readFloat();
					HX_STACK_LINE(144)
					grad->matrix->ty = this->buffer->readFloat();
					struct _Function_3_2{
						inline static int Block( ::format::gfx::GfxBytes_obj *__this){
							HX_STACK_FRAME("*","closure",0x5bdab937,"*.closure","format/gfx/GfxBytes.hx",145,0x1ef332be)
							{
								HX_STACK_LINE(145)
								::flash::utils::ByteArray _this = __this->buffer;		HX_STACK_VAR(_this,"_this");
								HX_STACK_LINE(145)
								int value;		HX_STACK_VAR(value,"value");
								HX_STACK_LINE(145)
								if (((_this->position < _this->length))){
									HX_STACK_LINE(145)
									int pos = (_this->position)++;		HX_STACK_VAR(pos,"pos");
									HX_STACK_LINE(145)
									value = _this->b->__get(pos);
								}
								else{
									HX_STACK_LINE(145)
									value = _this->__throwEOFi();
								}
								HX_STACK_LINE(145)
								return (  (((((int(value) & int((int)128))) != (int)0))) ? int((value - (int)256)) : int(value) );
							}
							return null();
						}
					};
					HX_STACK_LINE(145)
					grad->spread = ::format::gfx::GfxBytes_obj::spreadMethods->__get(_Function_3_2::Block(this)).StaticCast< ::flash::display::SpreadMethod >();
					struct _Function_3_3{
						inline static int Block( ::format::gfx::GfxBytes_obj *__this){
							HX_STACK_FRAME("*","closure",0x5bdab937,"*.closure","format/gfx/GfxBytes.hx",146,0x1ef332be)
							{
								HX_STACK_LINE(146)
								::flash::utils::ByteArray _this = __this->buffer;		HX_STACK_VAR(_this,"_this");
								HX_STACK_LINE(146)
								int value;		HX_STACK_VAR(value,"value");
								HX_STACK_LINE(146)
								if (((_this->position < _this->length))){
									HX_STACK_LINE(146)
									int pos = (_this->position)++;		HX_STACK_VAR(pos,"pos");
									HX_STACK_LINE(146)
									value = _this->b->__get(pos);
								}
								else{
									HX_STACK_LINE(146)
									value = _this->__throwEOFi();
								}
								HX_STACK_LINE(146)
								return (  (((((int(value) & int((int)128))) != (int)0))) ? int((value - (int)256)) : int(value) );
							}
							return null();
						}
					};
					HX_STACK_LINE(146)
					grad->interp = ::format::gfx::GfxBytes_obj::interpolationMethods->__get(_Function_3_3::Block(this)).StaticCast< ::flash::display::InterpolationMethod >();
					HX_STACK_LINE(147)
					grad->focus = this->buffer->readFloat();
					HX_STACK_LINE(148)
					inGfx->beginGradientFill(grad);
				}
				;break;
				case (int)12: {
					HX_STACK_LINE(151)
					inGfx->endFill();
				}
				;break;
				case (int)20: {
					HX_STACK_LINE(154)
					::format::gfx::LineStyle style = ::format::gfx::LineStyle_obj::__new();		HX_STACK_VAR(style,"style");
					HX_STACK_LINE(155)
					style->thickness = this->buffer->readFloat();
					HX_STACK_LINE(156)
					style->color = this->readRGB();
					HX_STACK_LINE(157)
					style->alpha = this->buffer->readFloat();
					struct _Function_3_1{
						inline static int Block( ::format::gfx::GfxBytes_obj *__this){
							HX_STACK_FRAME("*","closure",0x5bdab937,"*.closure","format/gfx/GfxBytes.hx",158,0x1ef332be)
							{
								HX_STACK_LINE(158)
								::flash::utils::ByteArray _this = __this->buffer;		HX_STACK_VAR(_this,"_this");
								HX_STACK_LINE(158)
								int value;		HX_STACK_VAR(value,"value");
								HX_STACK_LINE(158)
								if (((_this->position < _this->length))){
									HX_STACK_LINE(158)
									int pos = (_this->position)++;		HX_STACK_VAR(pos,"pos");
									HX_STACK_LINE(158)
									value = _this->b->__get(pos);
								}
								else{
									HX_STACK_LINE(158)
									value = _this->__throwEOFi();
								}
								HX_STACK_LINE(158)
								return (  (((((int(value) & int((int)128))) != (int)0))) ? int((value - (int)256)) : int(value) );
							}
							return null();
						}
					};
					HX_STACK_LINE(158)
					style->pixelHinting = (_Function_3_1::Block(this) > (int)0);
					struct _Function_3_2{
						inline static int Block( ::format::gfx::GfxBytes_obj *__this){
							HX_STACK_FRAME("*","closure",0x5bdab937,"*.closure","format/gfx/GfxBytes.hx",159,0x1ef332be)
							{
								HX_STACK_LINE(159)
								::flash::utils::ByteArray _this = __this->buffer;		HX_STACK_VAR(_this,"_this");
								HX_STACK_LINE(159)
								int value;		HX_STACK_VAR(value,"value");
								HX_STACK_LINE(159)
								if (((_this->position < _this->length))){
									HX_STACK_LINE(159)
									int pos = (_this->position)++;		HX_STACK_VAR(pos,"pos");
									HX_STACK_LINE(159)
									value = _this->b->__get(pos);
								}
								else{
									HX_STACK_LINE(159)
									value = _this->__throwEOFi();
								}
								HX_STACK_LINE(159)
								return (  (((((int(value) & int((int)128))) != (int)0))) ? int((value - (int)256)) : int(value) );
							}
							return null();
						}
					};
					HX_STACK_LINE(159)
					style->scaleMode = ::format::gfx::GfxBytes_obj::scaleModes->__get(_Function_3_2::Block(this)).StaticCast< ::flash::display::LineScaleMode >();
					struct _Function_3_3{
						inline static int Block( ::format::gfx::GfxBytes_obj *__this){
							HX_STACK_FRAME("*","closure",0x5bdab937,"*.closure","format/gfx/GfxBytes.hx",160,0x1ef332be)
							{
								HX_STACK_LINE(160)
								::flash::utils::ByteArray _this = __this->buffer;		HX_STACK_VAR(_this,"_this");
								HX_STACK_LINE(160)
								int value;		HX_STACK_VAR(value,"value");
								HX_STACK_LINE(160)
								if (((_this->position < _this->length))){
									HX_STACK_LINE(160)
									int pos = (_this->position)++;		HX_STACK_VAR(pos,"pos");
									HX_STACK_LINE(160)
									value = _this->b->__get(pos);
								}
								else{
									HX_STACK_LINE(160)
									value = _this->__throwEOFi();
								}
								HX_STACK_LINE(160)
								return (  (((((int(value) & int((int)128))) != (int)0))) ? int((value - (int)256)) : int(value) );
							}
							return null();
						}
					};
					HX_STACK_LINE(160)
					style->capsStyle = ::format::gfx::GfxBytes_obj::capsStyles->__get(_Function_3_3::Block(this)).StaticCast< ::flash::display::CapsStyle >();
					struct _Function_3_4{
						inline static int Block( ::format::gfx::GfxBytes_obj *__this){
							HX_STACK_FRAME("*","closure",0x5bdab937,"*.closure","format/gfx/GfxBytes.hx",161,0x1ef332be)
							{
								HX_STACK_LINE(161)
								::flash::utils::ByteArray _this = __this->buffer;		HX_STACK_VAR(_this,"_this");
								HX_STACK_LINE(161)
								int value;		HX_STACK_VAR(value,"value");
								HX_STACK_LINE(161)
								if (((_this->position < _this->length))){
									HX_STACK_LINE(161)
									int pos = (_this->position)++;		HX_STACK_VAR(pos,"pos");
									HX_STACK_LINE(161)
									value = _this->b->__get(pos);
								}
								else{
									HX_STACK_LINE(161)
									value = _this->__throwEOFi();
								}
								HX_STACK_LINE(161)
								return (  (((((int(value) & int((int)128))) != (int)0))) ? int((value - (int)256)) : int(value) );
							}
							return null();
						}
					};
					HX_STACK_LINE(161)
					style->jointStyle = ::format::gfx::GfxBytes_obj::jointStyles->__get(_Function_3_4::Block(this)).StaticCast< ::flash::display::JointStyle >();
					HX_STACK_LINE(162)
					style->miterLimit = this->buffer->readFloat();
					HX_STACK_LINE(163)
					inGfx->lineStyle(style);
				}
				;break;
				case (int)21: {
					HX_STACK_LINE(166)
					inGfx->endLineStyle();
				}
				;break;
				case (int)30: {
					HX_STACK_LINE(169)
					Float x = this->buffer->readFloat();		HX_STACK_VAR(x,"x");
					HX_STACK_LINE(170)
					Float y = this->buffer->readFloat();		HX_STACK_VAR(y,"y");
					HX_STACK_LINE(171)
					inGfx->moveTo(x,y);
				}
				;break;
				case (int)31: {
					HX_STACK_LINE(174)
					Float x = this->buffer->readFloat();		HX_STACK_VAR(x,"x");
					HX_STACK_LINE(175)
					Float y = this->buffer->readFloat();		HX_STACK_VAR(y,"y");
					HX_STACK_LINE(176)
					inGfx->lineTo(x,y);
				}
				;break;
				case (int)32: {
					HX_STACK_LINE(179)
					Float cx = this->buffer->readFloat();		HX_STACK_VAR(cx,"cx");
					HX_STACK_LINE(180)
					Float cy = this->buffer->readFloat();		HX_STACK_VAR(cy,"cy");
					HX_STACK_LINE(181)
					Float x = this->buffer->readFloat();		HX_STACK_VAR(x,"x");
					HX_STACK_LINE(182)
					Float y = this->buffer->readFloat();		HX_STACK_VAR(y,"y");
					HX_STACK_LINE(183)
					inGfx->curveTo(cx,cy,x,y);
				}
				;break;
				default: {
					HX_STACK_LINE(185)
					HX_STACK_DO_THROW(HX_CSTRING("Unknown gfx buffer format."));
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(GfxBytes_obj,iterate,(void))

Void GfxBytes_obj::size( Float inWidth,Float inHeight){
{
		HX_STACK_FRAME("format.gfx.GfxBytes","size",0x5a5cfdb1,"format.gfx.GfxBytes.size","format/gfx/GfxBytes.hx",192,0x1ef332be)
		HX_STACK_THIS(this)
		HX_STACK_ARG(inWidth,"inWidth")
		HX_STACK_ARG(inHeight,"inHeight")
		HX_STACK_LINE(193)
		{
			HX_STACK_LINE(193)
			::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
			HX_STACK_LINE(193)
			_this->ensureElem(_this->position,true);
			HX_STACK_LINE(193)
			_this->b[(_this->position)++] = (int)1;
		}
		HX_STACK_LINE(194)
		this->buffer->writeFloat(inWidth);
		HX_STACK_LINE(195)
		this->buffer->writeFloat(inHeight);
	}
return null();
}


Void GfxBytes_obj::pushClipped( Float inVal){
{
		HX_STACK_FRAME("format.gfx.GfxBytes","pushClipped",0x87c68e55,"format.gfx.GfxBytes.pushClipped","format/gfx/GfxBytes.hx",200,0x1ef332be)
		HX_STACK_THIS(this)
		HX_STACK_ARG(inVal,"inVal")
		HX_STACK_LINE(200)
		::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
		HX_STACK_LINE(200)
		int value;		HX_STACK_VAR(value,"value");
		HX_STACK_LINE(200)
		if (((inVal < (int)0))){
			HX_STACK_LINE(200)
			value = (int)0;
		}
		else{
			HX_STACK_LINE(200)
			if (((inVal > 255.0))){
				HX_STACK_LINE(200)
				value = (int)255;
			}
			else{
				HX_STACK_LINE(200)
				value = ::Std_obj::_int(inVal);
			}
		}
		HX_STACK_LINE(200)
		_this->ensureElem(_this->position,true);
		HX_STACK_LINE(200)
		_this->b[(_this->position)++] = value;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(GfxBytes_obj,pushClipped,(void))

Void GfxBytes_obj::writeRGB( int inVal){
{
		HX_STACK_FRAME("format.gfx.GfxBytes","writeRGB",0x7809b45e,"format.gfx.GfxBytes.writeRGB","format/gfx/GfxBytes.hx",203,0x1ef332be)
		HX_STACK_THIS(this)
		HX_STACK_ARG(inVal,"inVal")
		HX_STACK_LINE(204)
		{
			HX_STACK_LINE(204)
			::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
			HX_STACK_LINE(204)
			_this->ensureElem(_this->position,true);
			HX_STACK_LINE(204)
			_this->b[(_this->position)++] = (int((int(inVal) >> int((int)16))) & int((int)255));
		}
		HX_STACK_LINE(205)
		{
			HX_STACK_LINE(205)
			::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
			HX_STACK_LINE(205)
			_this->ensureElem(_this->position,true);
			HX_STACK_LINE(205)
			_this->b[(_this->position)++] = (int((int(inVal) >> int((int)8))) & int((int)255));
		}
		HX_STACK_LINE(206)
		{
			HX_STACK_LINE(206)
			::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
			HX_STACK_LINE(206)
			_this->ensureElem(_this->position,true);
			HX_STACK_LINE(206)
			_this->b[(_this->position)++] = (int(inVal) & int((int)255));
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(GfxBytes_obj,writeRGB,(void))

int GfxBytes_obj::readRGB( ){
	HX_STACK_FRAME("format.gfx.GfxBytes","readRGB",0x0eabbe67,"format.gfx.GfxBytes.readRGB","format/gfx/GfxBytes.hx",209,0x1ef332be)
	HX_STACK_THIS(this)
	HX_STACK_LINE(210)
	int r;		HX_STACK_VAR(r,"r");
	HX_STACK_LINE(210)
	{
		HX_STACK_LINE(210)
		::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
		HX_STACK_LINE(210)
		int value;		HX_STACK_VAR(value,"value");
		HX_STACK_LINE(210)
		if (((_this->position < _this->length))){
			HX_STACK_LINE(210)
			int pos = (_this->position)++;		HX_STACK_VAR(pos,"pos");
			HX_STACK_LINE(210)
			value = _this->b->__get(pos);
		}
		else{
			HX_STACK_LINE(210)
			value = _this->__throwEOFi();
		}
		HX_STACK_LINE(210)
		if (((((int(value) & int((int)128))) != (int)0))){
			HX_STACK_LINE(210)
			r = (value - (int)256);
		}
		else{
			HX_STACK_LINE(210)
			r = value;
		}
	}
	HX_STACK_LINE(211)
	int g;		HX_STACK_VAR(g,"g");
	HX_STACK_LINE(211)
	{
		HX_STACK_LINE(211)
		::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
		HX_STACK_LINE(211)
		int value;		HX_STACK_VAR(value,"value");
		HX_STACK_LINE(211)
		if (((_this->position < _this->length))){
			HX_STACK_LINE(211)
			int pos = (_this->position)++;		HX_STACK_VAR(pos,"pos");
			HX_STACK_LINE(211)
			value = _this->b->__get(pos);
		}
		else{
			HX_STACK_LINE(211)
			value = _this->__throwEOFi();
		}
		HX_STACK_LINE(211)
		if (((((int(value) & int((int)128))) != (int)0))){
			HX_STACK_LINE(211)
			g = (value - (int)256);
		}
		else{
			HX_STACK_LINE(211)
			g = value;
		}
	}
	HX_STACK_LINE(212)
	int b;		HX_STACK_VAR(b,"b");
	HX_STACK_LINE(212)
	{
		HX_STACK_LINE(212)
		::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
		HX_STACK_LINE(212)
		int value;		HX_STACK_VAR(value,"value");
		HX_STACK_LINE(212)
		if (((_this->position < _this->length))){
			HX_STACK_LINE(212)
			int pos = (_this->position)++;		HX_STACK_VAR(pos,"pos");
			HX_STACK_LINE(212)
			value = _this->b->__get(pos);
		}
		else{
			HX_STACK_LINE(212)
			value = _this->__throwEOFi();
		}
		HX_STACK_LINE(212)
		if (((((int(value) & int((int)128))) != (int)0))){
			HX_STACK_LINE(212)
			b = (value - (int)256);
		}
		else{
			HX_STACK_LINE(212)
			b = value;
		}
	}
	HX_STACK_LINE(213)
	return (int((int((int(r) << int((int)16))) | int((int(g) << int((int)8))))) | int(b));
}


HX_DEFINE_DYNAMIC_FUNC0(GfxBytes_obj,readRGB,return )

Void GfxBytes_obj::beginGradientFill( ::format::gfx::Gradient grad){
{
		HX_STACK_FRAME("format.gfx.GfxBytes","beginGradientFill",0x1ace896c,"format.gfx.GfxBytes.beginGradientFill","format/gfx/GfxBytes.hx",219,0x1ef332be)
		HX_STACK_THIS(this)
		HX_STACK_ARG(grad,"grad")
		HX_STACK_LINE(220)
		{
			HX_STACK_LINE(220)
			::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
			HX_STACK_LINE(220)
			_this->ensureElem(_this->position,true);
			HX_STACK_LINE(220)
			_this->b[(_this->position)++] = (int)11;
		}
		HX_STACK_LINE(221)
		{
			HX_STACK_LINE(221)
			::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
			HX_STACK_LINE(221)
			int value = grad->type->__Index();		HX_STACK_VAR(value,"value");
			HX_STACK_LINE(221)
			_this->ensureElem(_this->position,true);
			HX_STACK_LINE(221)
			_this->b[(_this->position)++] = value;
		}
		HX_STACK_LINE(222)
		{
			HX_STACK_LINE(222)
			::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
			HX_STACK_LINE(222)
			_this->ensureElem(_this->position,true);
			HX_STACK_LINE(222)
			_this->b[(_this->position)++] = grad->colors->length;
		}
		HX_STACK_LINE(223)
		{
			HX_STACK_LINE(223)
			int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(223)
			int _g = grad->colors->length;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(223)
			while(((_g1 < _g))){
				HX_STACK_LINE(223)
				int i = (_g1)++;		HX_STACK_VAR(i,"i");
				HX_STACK_LINE(225)
				this->writeRGB(::Std_obj::_int(grad->colors->__get(i)));
				HX_STACK_LINE(226)
				{
					HX_STACK_LINE(226)
					Float inVal = (grad->alphas->__get(i) * 255.0);		HX_STACK_VAR(inVal,"inVal");
					HX_STACK_LINE(226)
					{
						HX_STACK_LINE(226)
						::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
						HX_STACK_LINE(226)
						int value;		HX_STACK_VAR(value,"value");
						HX_STACK_LINE(226)
						if (((inVal < (int)0))){
							HX_STACK_LINE(226)
							value = (int)0;
						}
						else{
							HX_STACK_LINE(226)
							if (((inVal > 255.0))){
								HX_STACK_LINE(226)
								value = (int)255;
							}
							else{
								HX_STACK_LINE(226)
								value = ::Std_obj::_int(inVal);
							}
						}
						HX_STACK_LINE(226)
						_this->ensureElem(_this->position,true);
						HX_STACK_LINE(226)
						_this->b[(_this->position)++] = value;
					}
				}
				HX_STACK_LINE(227)
				{
					HX_STACK_LINE(227)
					Float inVal = grad->ratios->__get(i);		HX_STACK_VAR(inVal,"inVal");
					HX_STACK_LINE(227)
					{
						HX_STACK_LINE(227)
						::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
						HX_STACK_LINE(227)
						int value;		HX_STACK_VAR(value,"value");
						HX_STACK_LINE(227)
						if (((inVal < (int)0))){
							HX_STACK_LINE(227)
							value = (int)0;
						}
						else{
							HX_STACK_LINE(227)
							if (((inVal > 255.0))){
								HX_STACK_LINE(227)
								value = (int)255;
							}
							else{
								HX_STACK_LINE(227)
								value = ::Std_obj::_int(inVal);
							}
						}
						HX_STACK_LINE(227)
						_this->ensureElem(_this->position,true);
						HX_STACK_LINE(227)
						_this->b[(_this->position)++] = value;
					}
				}
			}
		}
		HX_STACK_LINE(229)
		this->buffer->writeFloat(grad->matrix->a);
		HX_STACK_LINE(230)
		this->buffer->writeFloat(grad->matrix->b);
		HX_STACK_LINE(231)
		this->buffer->writeFloat(grad->matrix->c);
		HX_STACK_LINE(232)
		this->buffer->writeFloat(grad->matrix->d);
		HX_STACK_LINE(233)
		this->buffer->writeFloat(grad->matrix->tx);
		HX_STACK_LINE(234)
		this->buffer->writeFloat(grad->matrix->ty);
		HX_STACK_LINE(235)
		{
			HX_STACK_LINE(235)
			::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
			HX_STACK_LINE(235)
			int value = grad->spread->__Index();		HX_STACK_VAR(value,"value");
			HX_STACK_LINE(235)
			_this->ensureElem(_this->position,true);
			HX_STACK_LINE(235)
			_this->b[(_this->position)++] = value;
		}
		HX_STACK_LINE(236)
		{
			HX_STACK_LINE(236)
			::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
			HX_STACK_LINE(236)
			int value = grad->interp->__Index();		HX_STACK_VAR(value,"value");
			HX_STACK_LINE(236)
			_this->ensureElem(_this->position,true);
			HX_STACK_LINE(236)
			_this->b[(_this->position)++] = value;
		}
		HX_STACK_LINE(237)
		this->buffer->writeFloat(grad->focus);
	}
return null();
}


Void GfxBytes_obj::beginFill( int color,Float alpha){
{
		HX_STACK_FRAME("format.gfx.GfxBytes","beginFill",0xc8c56a5c,"format.gfx.GfxBytes.beginFill","format/gfx/GfxBytes.hx",241,0x1ef332be)
		HX_STACK_THIS(this)
		HX_STACK_ARG(color,"color")
		HX_STACK_ARG(alpha,"alpha")
		HX_STACK_LINE(242)
		{
			HX_STACK_LINE(242)
			::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
			HX_STACK_LINE(242)
			_this->ensureElem(_this->position,true);
			HX_STACK_LINE(242)
			_this->b[(_this->position)++] = (int)10;
		}
		HX_STACK_LINE(243)
		this->writeRGB(color);
		HX_STACK_LINE(244)
		this->buffer->writeFloat(alpha);
	}
return null();
}


Void GfxBytes_obj::endFill( ){
{
		HX_STACK_FRAME("format.gfx.GfxBytes","endFill",0x31bbe10e,"format.gfx.GfxBytes.endFill","format/gfx/GfxBytes.hx",248,0x1ef332be)
		HX_STACK_THIS(this)
		HX_STACK_LINE(248)
		::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
		HX_STACK_LINE(248)
		_this->ensureElem(_this->position,true);
		HX_STACK_LINE(248)
		_this->b[(_this->position)++] = (int)12;
	}
return null();
}


Void GfxBytes_obj::lineStyle( ::format::gfx::LineStyle style){
{
		HX_STACK_FRAME("format.gfx.GfxBytes","lineStyle",0x074865ad,"format.gfx.GfxBytes.lineStyle","format/gfx/GfxBytes.hx",252,0x1ef332be)
		HX_STACK_THIS(this)
		HX_STACK_ARG(style,"style")
		HX_STACK_LINE(253)
		{
			HX_STACK_LINE(253)
			::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
			HX_STACK_LINE(253)
			_this->ensureElem(_this->position,true);
			HX_STACK_LINE(253)
			_this->b[(_this->position)++] = (int)20;
		}
		HX_STACK_LINE(254)
		this->buffer->writeFloat(style->thickness);
		HX_STACK_LINE(255)
		this->writeRGB(style->color);
		HX_STACK_LINE(256)
		this->buffer->writeFloat(style->alpha);
		HX_STACK_LINE(257)
		{
			HX_STACK_LINE(257)
			::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
			HX_STACK_LINE(257)
			_this->ensureElem(_this->position,true);
			HX_STACK_LINE(257)
			int _g = (_this->position)++;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(257)
			if ((style->pixelHinting)){
				HX_STACK_LINE(257)
				_this->b[_g] = (int)1;
			}
			else{
				HX_STACK_LINE(257)
				_this->b[_g] = (int)0;
			}
		}
		HX_STACK_LINE(258)
		{
			HX_STACK_LINE(258)
			::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
			HX_STACK_LINE(258)
			int value = style->scaleMode->__Index();		HX_STACK_VAR(value,"value");
			HX_STACK_LINE(258)
			_this->ensureElem(_this->position,true);
			HX_STACK_LINE(258)
			_this->b[(_this->position)++] = value;
		}
		HX_STACK_LINE(261)
		int capsStyleIdx = (int)0;		HX_STACK_VAR(capsStyleIdx,"capsStyleIdx");
		HX_STACK_LINE(262)
		{
			HX_STACK_LINE(262)
			::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
			HX_STACK_LINE(262)
			_this->ensureElem(_this->position,true);
			HX_STACK_LINE(262)
			_this->b[(_this->position)++] = capsStyleIdx;
		}
		HX_STACK_LINE(263)
		::haxe::Log_obj::trace(capsStyleIdx,hx::SourceInfo(HX_CSTRING("GfxBytes.hx"),263,HX_CSTRING("format.gfx.GfxBytes"),HX_CSTRING("lineStyle")));
		HX_STACK_LINE(265)
		int jointStyleIdx = (int)0;		HX_STACK_VAR(jointStyleIdx,"jointStyleIdx");
		HX_STACK_LINE(266)
		::haxe::Log_obj::trace(jointStyleIdx,hx::SourceInfo(HX_CSTRING("GfxBytes.hx"),266,HX_CSTRING("format.gfx.GfxBytes"),HX_CSTRING("lineStyle")));
		HX_STACK_LINE(267)
		{
			HX_STACK_LINE(267)
			::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
			HX_STACK_LINE(267)
			_this->ensureElem(_this->position,true);
			HX_STACK_LINE(267)
			_this->b[(_this->position)++] = jointStyleIdx;
		}
		HX_STACK_LINE(268)
		this->buffer->writeFloat(style->miterLimit);
	}
return null();
}


Void GfxBytes_obj::endLineStyle( ){
{
		HX_STACK_FRAME("format.gfx.GfxBytes","endLineStyle",0x1d327e32,"format.gfx.GfxBytes.endLineStyle","format/gfx/GfxBytes.hx",274,0x1ef332be)
		HX_STACK_THIS(this)
		HX_STACK_LINE(274)
		::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
		HX_STACK_LINE(274)
		_this->ensureElem(_this->position,true);
		HX_STACK_LINE(274)
		_this->b[(_this->position)++] = (int)21;
	}
return null();
}


Void GfxBytes_obj::moveTo( Float inX,Float inY){
{
		HX_STACK_FRAME("format.gfx.GfxBytes","moveTo",0x757b4bdc,"format.gfx.GfxBytes.moveTo","format/gfx/GfxBytes.hx",278,0x1ef332be)
		HX_STACK_THIS(this)
		HX_STACK_ARG(inX,"inX")
		HX_STACK_ARG(inY,"inY")
		HX_STACK_LINE(279)
		{
			HX_STACK_LINE(279)
			::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
			HX_STACK_LINE(279)
			_this->ensureElem(_this->position,true);
			HX_STACK_LINE(279)
			_this->b[(_this->position)++] = (int)30;
		}
		HX_STACK_LINE(280)
		this->buffer->writeFloat(inX);
		HX_STACK_LINE(281)
		this->buffer->writeFloat(inY);
	}
return null();
}


Void GfxBytes_obj::lineTo( Float inX,Float inY){
{
		HX_STACK_FRAME("format.gfx.GfxBytes","lineTo",0x956ebf7f,"format.gfx.GfxBytes.lineTo","format/gfx/GfxBytes.hx",285,0x1ef332be)
		HX_STACK_THIS(this)
		HX_STACK_ARG(inX,"inX")
		HX_STACK_ARG(inY,"inY")
		HX_STACK_LINE(286)
		{
			HX_STACK_LINE(286)
			::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
			HX_STACK_LINE(286)
			_this->ensureElem(_this->position,true);
			HX_STACK_LINE(286)
			_this->b[(_this->position)++] = (int)31;
		}
		HX_STACK_LINE(287)
		this->buffer->writeFloat(inX);
		HX_STACK_LINE(288)
		this->buffer->writeFloat(inY);
	}
return null();
}


Void GfxBytes_obj::curveTo( Float inCX,Float inCY,Float inX,Float inY){
{
		HX_STACK_FRAME("format.gfx.GfxBytes","curveTo",0xda63b91a,"format.gfx.GfxBytes.curveTo","format/gfx/GfxBytes.hx",292,0x1ef332be)
		HX_STACK_THIS(this)
		HX_STACK_ARG(inCX,"inCX")
		HX_STACK_ARG(inCY,"inCY")
		HX_STACK_ARG(inX,"inX")
		HX_STACK_ARG(inY,"inY")
		HX_STACK_LINE(293)
		{
			HX_STACK_LINE(293)
			::flash::utils::ByteArray _this = this->buffer;		HX_STACK_VAR(_this,"_this");
			HX_STACK_LINE(293)
			_this->ensureElem(_this->position,true);
			HX_STACK_LINE(293)
			_this->b[(_this->position)++] = (int)32;
		}
		HX_STACK_LINE(294)
		this->buffer->writeFloat(inCX);
		HX_STACK_LINE(295)
		this->buffer->writeFloat(inCY);
		HX_STACK_LINE(296)
		this->buffer->writeFloat(inX);
		HX_STACK_LINE(297)
		this->buffer->writeFloat(inY);
	}
return null();
}


int GfxBytes_obj::_EOF;

int GfxBytes_obj::SIZE;

int GfxBytes_obj::BEGIN_FILL;

int GfxBytes_obj::GRADIENT_FILL;

int GfxBytes_obj::END_FILL;

int GfxBytes_obj::LINE_STYLE;

int GfxBytes_obj::END_LINE_STYLE;

int GfxBytes_obj::MOVE;

int GfxBytes_obj::LINE;

int GfxBytes_obj::CURVE;

::String GfxBytes_obj::base64;

::haxe::crypto::BaseCode GfxBytes_obj::baseCoder;

::format::gfx::GfxBytes GfxBytes_obj::fromString( ::String inString){
	HX_STACK_FRAME("format.gfx.GfxBytes","fromString",0xc209decb,"format.gfx.GfxBytes.fromString","format/gfx/GfxBytes.hx",84,0x1ef332be)
	HX_STACK_ARG(inString,"inString")
	HX_STACK_LINE(85)
	if (((::format::gfx::GfxBytes_obj::baseCoder == null()))){
		HX_STACK_LINE(86)
		::format::gfx::GfxBytes_obj::baseCoder = ::haxe::crypto::BaseCode_obj::__new(::haxe::io::Bytes_obj::ofString(::format::gfx::GfxBytes_obj::base64));
	}
	HX_STACK_LINE(93)
	::flash::utils::ByteArray bytes = ::flash::utils::ByteArray_obj::fromBytes(::format::gfx::GfxBytes_obj::baseCoder->decodeBytes(::haxe::io::Bytes_obj::ofString(inString)));		HX_STACK_VAR(bytes,"bytes");
	HX_STACK_LINE(96)
	bytes->uncompress(null());
	HX_STACK_LINE(98)
	return ::format::gfx::GfxBytes_obj::__new(bytes,null());
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(GfxBytes_obj,fromString,return )

Array< ::Dynamic > GfxBytes_obj::scaleModes;

Array< ::Dynamic > GfxBytes_obj::capsStyles;

Array< ::Dynamic > GfxBytes_obj::jointStyles;

Array< ::Dynamic > GfxBytes_obj::spreadMethods;

Array< ::Dynamic > GfxBytes_obj::interpolationMethods;


GfxBytes_obj::GfxBytes_obj()
{
}

void GfxBytes_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(GfxBytes);
	HX_MARK_MEMBER_NAME(buffer,"buffer");
	HX_MARK_END_CLASS();
}

void GfxBytes_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(buffer,"buffer");
}

Dynamic GfxBytes_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"eof") ) { return eof_dyn(); }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"size") ) { return size_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"base64") ) { return base64; }
		if (HX_FIELD_EQ(inName,"buffer") ) { return buffer; }
		if (HX_FIELD_EQ(inName,"moveTo") ) { return moveTo_dyn(); }
		if (HX_FIELD_EQ(inName,"lineTo") ) { return lineTo_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"iterate") ) { return iterate_dyn(); }
		if (HX_FIELD_EQ(inName,"readRGB") ) { return readRGB_dyn(); }
		if (HX_FIELD_EQ(inName,"endFill") ) { return endFill_dyn(); }
		if (HX_FIELD_EQ(inName,"curveTo") ) { return curveTo_dyn(); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"toString") ) { return toString_dyn(); }
		if (HX_FIELD_EQ(inName,"writeRGB") ) { return writeRGB_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"baseCoder") ) { return baseCoder; }
		if (HX_FIELD_EQ(inName,"beginFill") ) { return beginFill_dyn(); }
		if (HX_FIELD_EQ(inName,"lineStyle") ) { return lineStyle_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"fromString") ) { return fromString_dyn(); }
		if (HX_FIELD_EQ(inName,"scaleModes") ) { return scaleModes; }
		if (HX_FIELD_EQ(inName,"capsStyles") ) { return capsStyles; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"jointStyles") ) { return jointStyles; }
		if (HX_FIELD_EQ(inName,"pushClipped") ) { return pushClipped_dyn(); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"endLineStyle") ) { return endLineStyle_dyn(); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"spreadMethods") ) { return spreadMethods; }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"beginGradientFill") ) { return beginGradientFill_dyn(); }
		break;
	case 20:
		if (HX_FIELD_EQ(inName,"interpolationMethods") ) { return interpolationMethods; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic GfxBytes_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 6:
		if (HX_FIELD_EQ(inName,"base64") ) { base64=inValue.Cast< ::String >(); return inValue; }
		if (HX_FIELD_EQ(inName,"buffer") ) { buffer=inValue.Cast< ::flash::utils::ByteArray >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"baseCoder") ) { baseCoder=inValue.Cast< ::haxe::crypto::BaseCode >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"scaleModes") ) { scaleModes=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"capsStyles") ) { capsStyles=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"jointStyles") ) { jointStyles=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"spreadMethods") ) { spreadMethods=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
		break;
	case 20:
		if (HX_FIELD_EQ(inName,"interpolationMethods") ) { interpolationMethods=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void GfxBytes_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("buffer"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("EOF"),
	HX_CSTRING("SIZE"),
	HX_CSTRING("BEGIN_FILL"),
	HX_CSTRING("GRADIENT_FILL"),
	HX_CSTRING("END_FILL"),
	HX_CSTRING("LINE_STYLE"),
	HX_CSTRING("END_LINE_STYLE"),
	HX_CSTRING("MOVE"),
	HX_CSTRING("LINE"),
	HX_CSTRING("CURVE"),
	HX_CSTRING("base64"),
	HX_CSTRING("baseCoder"),
	HX_CSTRING("fromString"),
	HX_CSTRING("scaleModes"),
	HX_CSTRING("capsStyles"),
	HX_CSTRING("jointStyles"),
	HX_CSTRING("spreadMethods"),
	HX_CSTRING("interpolationMethods"),
	String(null()) };

#if HXCPP_SCRIPTABLE
static hx::StorageInfo sMemberStorageInfo[] = {
	{hx::fsObject /*::flash::utils::ByteArray*/ ,(int)offsetof(GfxBytes_obj,buffer),HX_CSTRING("buffer")},
	{ hx::fsUnknown, 0, null()}
};
#endif

static ::String sMemberFields[] = {
	HX_CSTRING("buffer"),
	HX_CSTRING("toString"),
	HX_CSTRING("eof"),
	HX_CSTRING("iterate"),
	HX_CSTRING("size"),
	HX_CSTRING("pushClipped"),
	HX_CSTRING("writeRGB"),
	HX_CSTRING("readRGB"),
	HX_CSTRING("beginGradientFill"),
	HX_CSTRING("beginFill"),
	HX_CSTRING("endFill"),
	HX_CSTRING("lineStyle"),
	HX_CSTRING("endLineStyle"),
	HX_CSTRING("moveTo"),
	HX_CSTRING("lineTo"),
	HX_CSTRING("curveTo"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(GfxBytes_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(GfxBytes_obj::_EOF,"EOF");
	HX_MARK_MEMBER_NAME(GfxBytes_obj::SIZE,"SIZE");
	HX_MARK_MEMBER_NAME(GfxBytes_obj::BEGIN_FILL,"BEGIN_FILL");
	HX_MARK_MEMBER_NAME(GfxBytes_obj::GRADIENT_FILL,"GRADIENT_FILL");
	HX_MARK_MEMBER_NAME(GfxBytes_obj::END_FILL,"END_FILL");
	HX_MARK_MEMBER_NAME(GfxBytes_obj::LINE_STYLE,"LINE_STYLE");
	HX_MARK_MEMBER_NAME(GfxBytes_obj::END_LINE_STYLE,"END_LINE_STYLE");
	HX_MARK_MEMBER_NAME(GfxBytes_obj::MOVE,"MOVE");
	HX_MARK_MEMBER_NAME(GfxBytes_obj::LINE,"LINE");
	HX_MARK_MEMBER_NAME(GfxBytes_obj::CURVE,"CURVE");
	HX_MARK_MEMBER_NAME(GfxBytes_obj::base64,"base64");
	HX_MARK_MEMBER_NAME(GfxBytes_obj::baseCoder,"baseCoder");
	HX_MARK_MEMBER_NAME(GfxBytes_obj::scaleModes,"scaleModes");
	HX_MARK_MEMBER_NAME(GfxBytes_obj::capsStyles,"capsStyles");
	HX_MARK_MEMBER_NAME(GfxBytes_obj::jointStyles,"jointStyles");
	HX_MARK_MEMBER_NAME(GfxBytes_obj::spreadMethods,"spreadMethods");
	HX_MARK_MEMBER_NAME(GfxBytes_obj::interpolationMethods,"interpolationMethods");
};

#ifdef HXCPP_VISIT_ALLOCS
static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(GfxBytes_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(GfxBytes_obj::_EOF,"EOF");
	HX_VISIT_MEMBER_NAME(GfxBytes_obj::SIZE,"SIZE");
	HX_VISIT_MEMBER_NAME(GfxBytes_obj::BEGIN_FILL,"BEGIN_FILL");
	HX_VISIT_MEMBER_NAME(GfxBytes_obj::GRADIENT_FILL,"GRADIENT_FILL");
	HX_VISIT_MEMBER_NAME(GfxBytes_obj::END_FILL,"END_FILL");
	HX_VISIT_MEMBER_NAME(GfxBytes_obj::LINE_STYLE,"LINE_STYLE");
	HX_VISIT_MEMBER_NAME(GfxBytes_obj::END_LINE_STYLE,"END_LINE_STYLE");
	HX_VISIT_MEMBER_NAME(GfxBytes_obj::MOVE,"MOVE");
	HX_VISIT_MEMBER_NAME(GfxBytes_obj::LINE,"LINE");
	HX_VISIT_MEMBER_NAME(GfxBytes_obj::CURVE,"CURVE");
	HX_VISIT_MEMBER_NAME(GfxBytes_obj::base64,"base64");
	HX_VISIT_MEMBER_NAME(GfxBytes_obj::baseCoder,"baseCoder");
	HX_VISIT_MEMBER_NAME(GfxBytes_obj::scaleModes,"scaleModes");
	HX_VISIT_MEMBER_NAME(GfxBytes_obj::capsStyles,"capsStyles");
	HX_VISIT_MEMBER_NAME(GfxBytes_obj::jointStyles,"jointStyles");
	HX_VISIT_MEMBER_NAME(GfxBytes_obj::spreadMethods,"spreadMethods");
	HX_VISIT_MEMBER_NAME(GfxBytes_obj::interpolationMethods,"interpolationMethods");
};

#endif

Class GfxBytes_obj::__mClass;

void GfxBytes_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("format.gfx.GfxBytes"), hx::TCanCast< GfxBytes_obj> ,sStaticFields,sMemberFields,
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

void GfxBytes_obj::__boot()
{
	_EOF= (int)0;
	SIZE= (int)1;
	BEGIN_FILL= (int)10;
	GRADIENT_FILL= (int)11;
	END_FILL= (int)12;
	LINE_STYLE= (int)20;
	END_LINE_STYLE= (int)21;
	MOVE= (int)30;
	LINE= (int)31;
	CURVE= (int)32;
	base64= HX_CSTRING("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
	scaleModes= Array_obj< ::Dynamic >::__new().Add(::flash::display::LineScaleMode_obj::NORMAL).Add(::flash::display::LineScaleMode_obj::NONE).Add(::flash::display::LineScaleMode_obj::VERTICAL).Add(::flash::display::LineScaleMode_obj::HORIZONTAL);
	capsStyles= Array_obj< ::Dynamic >::__new().Add(::flash::display::CapsStyle_obj::ROUND).Add(::flash::display::CapsStyle_obj::NONE).Add(::flash::display::CapsStyle_obj::SQUARE);
	jointStyles= Array_obj< ::Dynamic >::__new().Add(::flash::display::JointStyle_obj::ROUND).Add(::flash::display::JointStyle_obj::MITER).Add(::flash::display::JointStyle_obj::BEVEL);
	spreadMethods= Array_obj< ::Dynamic >::__new().Add(::flash::display::SpreadMethod_obj::PAD).Add(::flash::display::SpreadMethod_obj::REPEAT).Add(::flash::display::SpreadMethod_obj::REFLECT);
	interpolationMethods= Array_obj< ::Dynamic >::__new().Add(::flash::display::InterpolationMethod_obj::RGB).Add(::flash::display::InterpolationMethod_obj::LINEAR_RGB);
}

} // end namespace format
} // end namespace gfx
