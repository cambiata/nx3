#include <hxcpp.h>

#ifndef INCLUDED_DefaultAssetLibrary
#include <DefaultAssetLibrary.h>
#endif
#ifndef INCLUDED_IMap
#include <IMap.h>
#endif
#ifndef INCLUDED_flash_display_BitmapData
#include <flash/display/BitmapData.h>
#endif
#ifndef INCLUDED_flash_display_IBitmapDrawable
#include <flash/display/IBitmapDrawable.h>
#endif
#ifndef INCLUDED_flash_events_EventDispatcher
#include <flash/events/EventDispatcher.h>
#endif
#ifndef INCLUDED_flash_events_IEventDispatcher
#include <flash/events/IEventDispatcher.h>
#endif
#ifndef INCLUDED_flash_media_Sound
#include <flash/media/Sound.h>
#endif
#ifndef INCLUDED_flash_media_SoundLoaderContext
#include <flash/media/SoundLoaderContext.h>
#endif
#ifndef INCLUDED_flash_net_URLRequest
#include <flash/net/URLRequest.h>
#endif
#ifndef INCLUDED_flash_text_Font
#include <flash/text/Font.h>
#endif
#ifndef INCLUDED_flash_text_FontStyle
#include <flash/text/FontStyle.h>
#endif
#ifndef INCLUDED_flash_text_FontType
#include <flash/text/FontType.h>
#endif
#ifndef INCLUDED_flash_utils_ByteArray
#include <flash/utils/ByteArray.h>
#endif
#ifndef INCLUDED_flash_utils_IDataInput
#include <flash/utils/IDataInput.h>
#endif
#ifndef INCLUDED_flash_utils_IDataOutput
#include <flash/utils/IDataOutput.h>
#endif
#ifndef INCLUDED_haxe_Log
#include <haxe/Log.h>
#endif
#ifndef INCLUDED_haxe_Unserializer
#include <haxe/Unserializer.h>
#endif
#ifndef INCLUDED_haxe_ds_StringMap
#include <haxe/ds/StringMap.h>
#endif
#ifndef INCLUDED_haxe_io_Bytes
#include <haxe/io/Bytes.h>
#endif
#ifndef INCLUDED_openfl_AssetData
#include <openfl/AssetData.h>
#endif
#ifndef INCLUDED_openfl_AssetLibrary
#include <openfl/AssetLibrary.h>
#endif
#ifndef INCLUDED_openfl_AssetType
#include <openfl/AssetType.h>
#endif
#ifndef INCLUDED_openfl_utils_IMemoryRange
#include <openfl/utils/IMemoryRange.h>
#endif

Void DefaultAssetLibrary_obj::__construct()
{
HX_STACK_FRAME("DefaultAssetLibrary","new",0xbc37e41e,"DefaultAssetLibrary.new","DefaultAssetLibrary.hx",34,0x0fc48912)
{
	HX_STACK_LINE(36)
	super::__construct();
	HX_STACK_LINE(51)
	try
	{
	HX_STACK_CATCHABLE(Dynamic, 0);
	{
		HX_STACK_LINE(60)
		::flash::utils::ByteArray bytes = ::flash::utils::ByteArray_obj::readFile(HX_CSTRING("manifest"));		HX_STACK_VAR(bytes,"bytes");
		HX_STACK_LINE(63)
		if (((bytes != null()))){
			HX_STACK_LINE(65)
			bytes->position = (int)0;
			HX_STACK_LINE(67)
			if (((bytes->length > (int)0))){
				HX_STACK_LINE(69)
				::String data = bytes->readUTFBytes(bytes->length);		HX_STACK_VAR(data,"data");
				HX_STACK_LINE(71)
				if (((bool((data != null())) && bool((data.length > (int)0))))){
					HX_STACK_LINE(73)
					Array< ::Dynamic > manifest = ::haxe::Unserializer_obj::run(data);		HX_STACK_VAR(manifest,"manifest");
					HX_STACK_LINE(75)
					{
						HX_STACK_LINE(75)
						int _g = (int)0;		HX_STACK_VAR(_g,"_g");
						HX_STACK_LINE(75)
						while(((_g < manifest->length))){
							HX_STACK_LINE(75)
							::openfl::AssetData asset = manifest->__get(_g).StaticCast< ::openfl::AssetData >();		HX_STACK_VAR(asset,"asset");
							HX_STACK_LINE(75)
							++(_g);
							HX_STACK_LINE(77)
							::DefaultAssetLibrary_obj::path->set(asset->id,asset->path);
							HX_STACK_LINE(78)
							::DefaultAssetLibrary_obj::type->set(asset->id,asset->type);
						}
					}
				}
			}
		}
		else{
			HX_STACK_LINE(88)
			::haxe::Log_obj::trace(HX_CSTRING("Warning: Could not load asset manifest"),hx::SourceInfo(HX_CSTRING("DefaultAssetLibrary.hx"),88,HX_CSTRING("DefaultAssetLibrary"),HX_CSTRING("new")));
		}
	}
	}
	catch(Dynamic __e){
		{
			HX_STACK_BEGIN_CATCH
			Dynamic e = __e;{
				HX_STACK_LINE(94)
				::haxe::Log_obj::trace(HX_CSTRING("Warning: Could not load asset manifest"),hx::SourceInfo(HX_CSTRING("DefaultAssetLibrary.hx"),94,HX_CSTRING("DefaultAssetLibrary"),HX_CSTRING("new")));
			}
		}
	}
}
;
	return null();
}

//DefaultAssetLibrary_obj::~DefaultAssetLibrary_obj() { }

Dynamic DefaultAssetLibrary_obj::__CreateEmpty() { return  new DefaultAssetLibrary_obj; }
hx::ObjectPtr< DefaultAssetLibrary_obj > DefaultAssetLibrary_obj::__new()
{  hx::ObjectPtr< DefaultAssetLibrary_obj > result = new DefaultAssetLibrary_obj();
	result->__construct();
	return result;}

Dynamic DefaultAssetLibrary_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< DefaultAssetLibrary_obj > result = new DefaultAssetLibrary_obj();
	result->__construct();
	return result;}

bool DefaultAssetLibrary_obj::exists( ::String id,::openfl::AssetType type){
	HX_STACK_FRAME("DefaultAssetLibrary","exists",0x972074de,"DefaultAssetLibrary.exists","DefaultAssetLibrary.hx",117,0x0fc48912)
	HX_STACK_THIS(this)
	HX_STACK_ARG(id,"id")
	HX_STACK_ARG(type,"type")
	HX_STACK_LINE(119)
	::openfl::AssetType assetType = ::DefaultAssetLibrary_obj::type->get(id);		HX_STACK_VAR(assetType,"assetType");
	HX_STACK_LINE(135)
	if (((assetType != null()))){
		HX_STACK_LINE(137)
		if (((bool((assetType == type)) || bool((bool(((bool((type == ::openfl::AssetType_obj::SOUND)) || bool((type == ::openfl::AssetType_obj::MUSIC))))) && bool(((bool((assetType == ::openfl::AssetType_obj::MUSIC)) || bool((assetType == ::openfl::AssetType_obj::SOUND)))))))))){
			HX_STACK_LINE(139)
			return true;
		}
		HX_STACK_LINE(157)
		if (((bool((type == ::openfl::AssetType_obj::BINARY)) || bool((type == null()))))){
			HX_STACK_LINE(159)
			return true;
		}
	}
	HX_STACK_LINE(167)
	return false;
}


::flash::display::BitmapData DefaultAssetLibrary_obj::getBitmapData( ::String id){
	HX_STACK_FRAME("DefaultAssetLibrary","getBitmapData",0xb8207f2d,"DefaultAssetLibrary.getBitmapData","DefaultAssetLibrary.hx",192,0x0fc48912)
	HX_STACK_THIS(this)
	HX_STACK_ARG(id,"id")
	HX_STACK_LINE(192)
	return ::flash::display::BitmapData_obj::load(::DefaultAssetLibrary_obj::path->get(id),null());
}


::flash::utils::ByteArray DefaultAssetLibrary_obj::getBytes( ::String id){
	HX_STACK_FRAME("DefaultAssetLibrary","getBytes",0x86b4b377,"DefaultAssetLibrary.getBytes","DefaultAssetLibrary.hx",245,0x0fc48912)
	HX_STACK_THIS(this)
	HX_STACK_ARG(id,"id")
	HX_STACK_LINE(245)
	return ::flash::utils::ByteArray_obj::readFile(::DefaultAssetLibrary_obj::path->get(id));
}


::flash::text::Font DefaultAssetLibrary_obj::getFont( ::String id){
	HX_STACK_FRAME("DefaultAssetLibrary","getFont",0x974ed843,"DefaultAssetLibrary.getFont","DefaultAssetLibrary.hx",264,0x0fc48912)
	HX_STACK_THIS(this)
	HX_STACK_ARG(id,"id")
	HX_STACK_LINE(264)
	return ::flash::text::Font_obj::__new(::DefaultAssetLibrary_obj::path->get(id),null(),null());
}


::flash::media::Sound DefaultAssetLibrary_obj::getMusic( ::String id){
	HX_STACK_FRAME("DefaultAssetLibrary","getMusic",0xd9777bb1,"DefaultAssetLibrary.getMusic","DefaultAssetLibrary.hx",294,0x0fc48912)
	HX_STACK_THIS(this)
	HX_STACK_ARG(id,"id")
	HX_STACK_LINE(294)
	return ::flash::media::Sound_obj::__new(::flash::net::URLRequest_obj::__new(::DefaultAssetLibrary_obj::path->get(id)),null(),true);
}


::String DefaultAssetLibrary_obj::getPath( ::String id){
	HX_STACK_FRAME("DefaultAssetLibrary","getPath",0x9de06019,"DefaultAssetLibrary.getPath","DefaultAssetLibrary.hx",309,0x0fc48912)
	HX_STACK_THIS(this)
	HX_STACK_ARG(id,"id")
	HX_STACK_LINE(309)
	return ::DefaultAssetLibrary_obj::path->get(id);
}


::flash::media::Sound DefaultAssetLibrary_obj::getSound( ::String id){
	HX_STACK_FRAME("DefaultAssetLibrary","getSound",0x49e937db,"DefaultAssetLibrary.getSound","DefaultAssetLibrary.hx",316,0x0fc48912)
	HX_STACK_THIS(this)
	HX_STACK_ARG(id,"id")
	HX_STACK_LINE(332)
	::flash::net::URLRequest _g = ::flash::net::URLRequest_obj::__new(::DefaultAssetLibrary_obj::path->get(id));		HX_STACK_VAR(_g,"_g");
	HX_STACK_LINE(332)
	return ::flash::media::Sound_obj::__new(_g,null(),(::DefaultAssetLibrary_obj::type->get(id) == ::openfl::AssetType_obj::MUSIC));
}


::String DefaultAssetLibrary_obj::getText( ::String id){
	HX_STACK_FRAME("DefaultAssetLibrary","getText",0xa0884721,"DefaultAssetLibrary.getText","DefaultAssetLibrary.hx",339,0x0fc48912)
	HX_STACK_THIS(this)
	HX_STACK_ARG(id,"id")
	HX_STACK_LINE(372)
	::flash::utils::ByteArray bytes = this->getBytes(id);		HX_STACK_VAR(bytes,"bytes");
	HX_STACK_LINE(374)
	if (((bytes == null()))){
		HX_STACK_LINE(376)
		return null();
	}
	else{
		HX_STACK_LINE(380)
		return bytes->readUTFBytes(bytes->length);
	}
	HX_STACK_LINE(374)
	return null();
}


bool DefaultAssetLibrary_obj::isLocal( ::String id,::openfl::AssetType type){
	HX_STACK_FRAME("DefaultAssetLibrary","isLocal",0x968237df,"DefaultAssetLibrary.isLocal","DefaultAssetLibrary.hx",401,0x0fc48912)
	HX_STACK_THIS(this)
	HX_STACK_ARG(id,"id")
	HX_STACK_ARG(type,"type")
	HX_STACK_LINE(401)
	return true;
}


Void DefaultAssetLibrary_obj::loadBitmapData( ::String id,Dynamic handler){
{
		HX_STACK_FRAME("DefaultAssetLibrary","loadBitmapData",0x9243e881,"DefaultAssetLibrary.loadBitmapData","DefaultAssetLibrary.hx",432,0x0fc48912)
		HX_STACK_THIS(this)
		HX_STACK_ARG(id,"id")
		HX_STACK_ARG(handler,"handler")
		HX_STACK_LINE(432)
		handler(this->getBitmapData(id)).Cast< Void >();
	}
return null();
}


Void DefaultAssetLibrary_obj::loadBytes( ::String id,Dynamic handler){
{
		HX_STACK_FRAME("DefaultAssetLibrary","loadBytes",0x8c71caa3,"DefaultAssetLibrary.loadBytes","DefaultAssetLibrary.hx",469,0x0fc48912)
		HX_STACK_THIS(this)
		HX_STACK_ARG(id,"id")
		HX_STACK_ARG(handler,"handler")
		HX_STACK_LINE(469)
		handler(this->getBytes(id)).Cast< Void >();
	}
return null();
}


Void DefaultAssetLibrary_obj::loadFont( ::String id,Dynamic handler){
{
		HX_STACK_FRAME("DefaultAssetLibrary","loadFont",0x1da5ca97,"DefaultAssetLibrary.loadFont","DefaultAssetLibrary.hx",498,0x0fc48912)
		HX_STACK_THIS(this)
		HX_STACK_ARG(id,"id")
		HX_STACK_ARG(handler,"handler")
		HX_STACK_LINE(498)
		handler(this->getFont(id)).Cast< Void >();
	}
return null();
}


Void DefaultAssetLibrary_obj::loadMusic( ::String id,Dynamic handler){
{
		HX_STACK_FRAME("DefaultAssetLibrary","loadMusic",0xdf3492dd,"DefaultAssetLibrary.loadMusic","DefaultAssetLibrary.hx",527,0x0fc48912)
		HX_STACK_THIS(this)
		HX_STACK_ARG(id,"id")
		HX_STACK_ARG(handler,"handler")
		HX_STACK_LINE(527)
		handler(this->getMusic(id)).Cast< Void >();
	}
return null();
}


Void DefaultAssetLibrary_obj::loadSound( ::String id,Dynamic handler){
{
		HX_STACK_FRAME("DefaultAssetLibrary","loadSound",0x4fa64f07,"DefaultAssetLibrary.loadSound","DefaultAssetLibrary.hx",556,0x0fc48912)
		HX_STACK_THIS(this)
		HX_STACK_ARG(id,"id")
		HX_STACK_ARG(handler,"handler")
		HX_STACK_LINE(556)
		handler(this->getSound(id)).Cast< Void >();
	}
return null();
}


Void DefaultAssetLibrary_obj::loadText( ::String id,Dynamic handler){
{
		HX_STACK_FRAME("DefaultAssetLibrary","loadText",0x26df3975,"DefaultAssetLibrary.loadText","DefaultAssetLibrary.hx",563,0x0fc48912)
		HX_STACK_THIS(this)
		HX_STACK_ARG(id,"id")
		HX_STACK_ARG(handler,"handler")
		HX_STACK_LINE(563)
		Dynamic handler1 = Dynamic( Array_obj<Dynamic>::__new().Add(handler));		HX_STACK_VAR(handler1,"handler1");

		HX_BEGIN_LOCAL_FUNC_S1(hx::LocalFunc,_Function_1_1,Dynamic,handler1)
		Void run(::flash::utils::ByteArray bytes){
			HX_STACK_FRAME("*","_Function_1_1",0x5200ed37,"*._Function_1_1","DefaultAssetLibrary.hx",587,0x0fc48912)
			HX_STACK_ARG(bytes,"bytes")
			{
				HX_STACK_LINE(587)
				if (((bytes == null()))){
					HX_STACK_LINE(589)
					handler1->__GetItem((int)0)(null()).Cast< Void >();
				}
				else{
					HX_STACK_LINE(593)
					handler1->__GetItem((int)0)(bytes->readUTFBytes(bytes->length)).Cast< Void >();
				}
			}
			return null();
		}
		HX_END_LOCAL_FUNC1((void))

		HX_STACK_LINE(585)
		Dynamic callback =  Dynamic(new _Function_1_1(handler1));		HX_STACK_VAR(callback,"callback");
		HX_STACK_LINE(599)
		this->loadBytes(id,callback);
	}
return null();
}


::haxe::ds::StringMap DefaultAssetLibrary_obj::className;

::haxe::ds::StringMap DefaultAssetLibrary_obj::path;

::haxe::ds::StringMap DefaultAssetLibrary_obj::type;


DefaultAssetLibrary_obj::DefaultAssetLibrary_obj()
{
}

Dynamic DefaultAssetLibrary_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"path") ) { return path; }
		if (HX_FIELD_EQ(inName,"type") ) { return type; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"exists") ) { return exists_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"getFont") ) { return getFont_dyn(); }
		if (HX_FIELD_EQ(inName,"getPath") ) { return getPath_dyn(); }
		if (HX_FIELD_EQ(inName,"getText") ) { return getText_dyn(); }
		if (HX_FIELD_EQ(inName,"isLocal") ) { return isLocal_dyn(); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"getBytes") ) { return getBytes_dyn(); }
		if (HX_FIELD_EQ(inName,"getMusic") ) { return getMusic_dyn(); }
		if (HX_FIELD_EQ(inName,"getSound") ) { return getSound_dyn(); }
		if (HX_FIELD_EQ(inName,"loadFont") ) { return loadFont_dyn(); }
		if (HX_FIELD_EQ(inName,"loadText") ) { return loadText_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"className") ) { return className; }
		if (HX_FIELD_EQ(inName,"loadBytes") ) { return loadBytes_dyn(); }
		if (HX_FIELD_EQ(inName,"loadMusic") ) { return loadMusic_dyn(); }
		if (HX_FIELD_EQ(inName,"loadSound") ) { return loadSound_dyn(); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"getBitmapData") ) { return getBitmapData_dyn(); }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"loadBitmapData") ) { return loadBitmapData_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic DefaultAssetLibrary_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"path") ) { path=inValue.Cast< ::haxe::ds::StringMap >(); return inValue; }
		if (HX_FIELD_EQ(inName,"type") ) { type=inValue.Cast< ::haxe::ds::StringMap >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"className") ) { className=inValue.Cast< ::haxe::ds::StringMap >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void DefaultAssetLibrary_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("className"),
	HX_CSTRING("path"),
	HX_CSTRING("type"),
	String(null()) };

#if HXCPP_SCRIPTABLE
static hx::StorageInfo *sMemberStorageInfo = 0;
#endif

static ::String sMemberFields[] = {
	HX_CSTRING("exists"),
	HX_CSTRING("getBitmapData"),
	HX_CSTRING("getBytes"),
	HX_CSTRING("getFont"),
	HX_CSTRING("getMusic"),
	HX_CSTRING("getPath"),
	HX_CSTRING("getSound"),
	HX_CSTRING("getText"),
	HX_CSTRING("isLocal"),
	HX_CSTRING("loadBitmapData"),
	HX_CSTRING("loadBytes"),
	HX_CSTRING("loadFont"),
	HX_CSTRING("loadMusic"),
	HX_CSTRING("loadSound"),
	HX_CSTRING("loadText"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(DefaultAssetLibrary_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(DefaultAssetLibrary_obj::className,"className");
	HX_MARK_MEMBER_NAME(DefaultAssetLibrary_obj::path,"path");
	HX_MARK_MEMBER_NAME(DefaultAssetLibrary_obj::type,"type");
};

#ifdef HXCPP_VISIT_ALLOCS
static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(DefaultAssetLibrary_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(DefaultAssetLibrary_obj::className,"className");
	HX_VISIT_MEMBER_NAME(DefaultAssetLibrary_obj::path,"path");
	HX_VISIT_MEMBER_NAME(DefaultAssetLibrary_obj::type,"type");
};

#endif

Class DefaultAssetLibrary_obj::__mClass;

void DefaultAssetLibrary_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("DefaultAssetLibrary"), hx::TCanCast< DefaultAssetLibrary_obj> ,sStaticFields,sMemberFields,
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

void DefaultAssetLibrary_obj::__boot()
{
	className= ::haxe::ds::StringMap_obj::__new();
	path= ::haxe::ds::StringMap_obj::__new();
	type= ::haxe::ds::StringMap_obj::__new();
}

