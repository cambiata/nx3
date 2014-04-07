#include <hxcpp.h>

#include <sys/io/FileOutput.h>
#include <openfl/utils/WeakRef.h>
#include <openfl/utils/Float32Array.h>
#include <openfl/utils/ArrayBufferView.h>
#include <openfl/gl/GLTexture.h>
#include <openfl/gl/GLShader.h>
#include <openfl/gl/GLRenderbuffer.h>
#include <openfl/gl/GLProgram.h>
#include <openfl/gl/GLFramebuffer.h>
#include <openfl/gl/GLBuffer.h>
#include <openfl/gl/GLObject.h>
#include <openfl/gl/GL.h>
#include <openfl/events/SystemEvent.h>
#include <openfl/events/JoystickEvent.h>
#include <openfl/display/Tilesheet.h>
#include <openfl/display/OpenGLView.h>
#include <openfl/display/ManagedStage.h>
#include <openfl/display/DirectRenderer.h>
#include <openfl/AssetType.h>
#include <openfl/AssetData.h>
#include <openfl/Assets.h>
#include <openfl/AssetCache.h>
#include <nx3/render/svg/ShapeTools.h>
#include <nx3/render/svg/Elements.h>
#include <nx3/render/scaling/Scaling.h>
#include <nx3/render/TestTarget.h>
#include <nx3/render/TargetOpenFl.h>
#include <nx3/render/TargetSpriteBase.h>
#include <nx3/render/ITarget.h>
#include <nx3/render/IRenderer.h>
#include <haxe/zip/Uncompress.h>
#include <haxe/zip/FlushMode.h>
#include <haxe/zip/Compress.h>
#include <haxe/io/Path.h>
#include <haxe/io/Error.h>
#include <haxe/io/Eof.h>
#include <haxe/io/BytesBuffer.h>
#include <haxe/ds/StringMap.h>
#include <haxe/ds/ObjectMap.h>
#include <haxe/ds/IntMap.h>
#include <haxe/crypto/BaseCode.h>
#include <haxe/Unserializer.h>
#include <haxe/Timer.h>
#include <haxe/Resource.h>
#include <haxe/Log.h>
#include <haxe/CallStack.h>
#include <haxe/StackItem.h>
#include <format/svg/Text.h>
#include <format/svg/SVGRenderer.h>
#include <format/svg/SVGData.h>
#include <format/svg/SVG2Gfx.h>
#include <format/svg/RenderContext.h>
#include <format/svg/ArcSegment.h>
#include <format/svg/CubicSegment.h>
#include <format/svg/QuadraticSegment.h>
#include <format/svg/DrawSegment.h>
#include <format/svg/MoveSegment.h>
#include <format/svg/PathSegment.h>
#include <format/svg/PathParser.h>
#include <format/svg/Path.h>
#include <format/svg/DisplayElement.h>
#include <format/svg/Group.h>
#include <format/svg/Grad.h>
#include <format/svg/FillType.h>
#include <format/gfx/LineStyle.h>
#include <format/gfx/Gradient.h>
#include <format/gfx/GfxTextFinder.h>
#include <format/gfx/GfxGraphics.h>
#include <format/gfx/GfxExtent.h>
#include <format/gfx/GfxBytes.h>
#include <format/gfx/Gfx2Haxe.h>
#include <format/gfx/Gfx.h>
#include <format/SVG.h>
#include <flash/utils/Endian.h>
#include <flash/utils/CompressionAlgorithm.h>
#include <flash/utils/ByteArray.h>
#include <flash/utils/IDataInput.h>
#include <openfl/utils/IMemoryRange.h>
#include <flash/utils/IDataOutput.h>
#include <flash/ui/Keyboard.h>
#include <flash/text/TextLineMetrics.h>
#include <flash/text/TextFormat.h>
#include <flash/text/TextFieldType.h>
#include <flash/text/TextFieldAutoSize.h>
#include <flash/text/TextField.h>
#include <flash/text/GridFitType.h>
#include <flash/text/FontType.h>
#include <flash/text/FontStyle.h>
#include <flash/text/Font.h>
#include <flash/text/AntiAliasType.h>
#include <flash/system/SecurityDomain.h>
#include <flash/system/ScreenMode.h>
#include <flash/system/PixelFormat.h>
#include <flash/system/LoaderContext.h>
#include <flash/system/ApplicationDomain.h>
#include <flash/net/URLVariables.h>
#include <flash/net/URLRequestMethod.h>
#include <flash/net/URLRequestHeader.h>
#include <flash/net/URLRequest.h>
#include <flash/net/URLLoaderDataFormat.h>
#include <flash/media/SoundTransform.h>
#include <flash/media/SoundLoaderContext.h>
#include <flash/media/AudioThreadState.h>
#include <flash/media/SoundChannel.h>
#include <flash/media/InternalAudioType.h>
#include <flash/media/Sound.h>
#include <flash/media/ID3Info.h>
#include <flash/geom/Vector3D.h>
#include <flash/geom/Transform.h>
#include <flash/geom/Rectangle.h>
#include <flash/geom/Point.h>
#include <flash/geom/Matrix3D.h>
#include <flash/geom/Matrix.h>
#include <flash/geom/ColorTransform.h>
#include <flash/filters/BitmapFilter.h>
#include <flash/events/UncaughtErrorEvents.h>
#include <flash/events/UncaughtErrorEvent.h>
#include <flash/events/SampleDataEvent.h>
#include <flash/events/ProgressEvent.h>
#include <flash/events/KeyboardEvent.h>
#include <flash/events/IOErrorEvent.h>
#include <flash/events/HTTPStatusEvent.h>
#include <flash/events/FocusEvent.h>
#include <flash/events/EventPhase.h>
#include <flash/events/Listener.h>
#include <flash/events/ErrorEvent.h>
#include <flash/events/TextEvent.h>
#include <flash/errors/RangeError.h>
#include <flash/errors/EOFError.h>
#include <flash/errors/ArgumentError.h>
#include <flash/errors/Error.h>
#include <flash/display/TriangleCulling.h>
#include <flash/display/StageScaleMode.h>
#include <flash/display/StageQuality.h>
#include <flash/display/StageDisplayState.h>
#include <flash/display/StageAlign.h>
#include <flash/display/TouchInfo.h>
#include <flash/display/Stage.h>
#include <flash/events/TouchEvent.h>
#include <flash/events/MouseEvent.h>
#include <flash/events/Event.h>
#include <flash/display/SpreadMethod.h>
#include <flash/display/Shape.h>
#include <flash/display/PixelSnapping.h>
#include <flash/display/MovieClip.h>
#include <flash/display/LoaderInfo.h>
#include <flash/net/URLLoader.h>
#include <flash/display/Loader.h>
#include <flash/display/LineScaleMode.h>
#include <flash/display/JointStyle.h>
#include <flash/display/InterpolationMethod.h>
#include <flash/display/IGraphicsData.h>
#include <flash/display/GraphicsPathWinding.h>
#include <flash/display/Graphics.h>
#include <flash/display/GradientType.h>
#include <flash/display/FrameLabel.h>
#include <flash/display/CapsStyle.h>
#include <flash/display/BlendMode.h>
#include <flash/display/OptimizedPerlin.h>
#include <flash/display/BitmapData.h>
#include <flash/display/Bitmap.h>
#include <flash/_Vector/Vector_Impl_.h>
#include <flash/Memory.h>
#include <cx/MathTools.h>
#include <cpp/vm/Thread.h>
#include <cpp/vm/Mutex.h>
#include <cpp/rtti/FieldNumericIntegerLookup.h>
#include <Xml.h>
#include <XmlType.h>
#include <Type.h>
#include <StringTools.h>
#include <StringBuf.h>
#include <Reflect.h>
#include <IMap.h>
#include <List.h>
#include <Lambda.h>
#include <EReg.h>
#include <DefaultAssetLibrary.h>
#include <openfl/AssetLibrary.h>
#include <Date.h>
#include <DocumentClass.h>
#include <Main.h>
#include <flash/display/Sprite.h>
#include <flash/display/DisplayObjectContainer.h>
#include <flash/display/InteractiveObject.h>
#include <flash/display/DisplayObject.h>
#include <flash/Lib.h>
#include <Std.h>
#include <sys/io/_Process/Stdout.h>
#include <haxe/io/Input.h>
#include <haxe/io/Bytes.h>
#include <sys/io/_Process/Stdin.h>
#include <haxe/io/Output.h>
#include <sys/io/Process.h>
#include <Sys.h>
#include <cpp/Lib.h>
#include <flash/display/IBitmapDrawable.h>
#include <flash/events/EventDispatcher.h>
#include <flash/events/IEventDispatcher.h>
#include <ApplicationMain.h>

void __files__boot();

void __boot_all()
{
__files__boot();
hx::RegisterResources( hx::GetResources() );
::sys::io::FileOutput_obj::__register();
::openfl::utils::WeakRef_obj::__register();
::openfl::utils::Float32Array_obj::__register();
::openfl::utils::ArrayBufferView_obj::__register();
::openfl::gl::GLTexture_obj::__register();
::openfl::gl::GLShader_obj::__register();
::openfl::gl::GLRenderbuffer_obj::__register();
::openfl::gl::GLProgram_obj::__register();
::openfl::gl::GLFramebuffer_obj::__register();
::openfl::gl::GLBuffer_obj::__register();
::openfl::gl::GLObject_obj::__register();
::openfl::gl::GL_obj::__register();
::openfl::events::SystemEvent_obj::__register();
::openfl::events::JoystickEvent_obj::__register();
::openfl::display::Tilesheet_obj::__register();
::openfl::display::OpenGLView_obj::__register();
::openfl::display::ManagedStage_obj::__register();
::openfl::display::DirectRenderer_obj::__register();
::openfl::AssetType_obj::__register();
::openfl::AssetData_obj::__register();
::openfl::Assets_obj::__register();
::openfl::AssetCache_obj::__register();
::nx3::render::svg::ShapeTools_obj::__register();
::nx3::render::svg::Elements_obj::__register();
::nx3::render::scaling::Scaling_obj::__register();
::nx3::render::TestTarget_obj::__register();
::nx3::render::TargetOpenFl_obj::__register();
::nx3::render::TargetSpriteBase_obj::__register();
::nx3::render::ITarget_obj::__register();
::nx3::render::IRenderer_obj::__register();
::haxe::zip::Uncompress_obj::__register();
::haxe::zip::FlushMode_obj::__register();
::haxe::zip::Compress_obj::__register();
::haxe::io::Path_obj::__register();
::haxe::io::Error_obj::__register();
::haxe::io::Eof_obj::__register();
::haxe::io::BytesBuffer_obj::__register();
::haxe::ds::StringMap_obj::__register();
::haxe::ds::ObjectMap_obj::__register();
::haxe::ds::IntMap_obj::__register();
::haxe::crypto::BaseCode_obj::__register();
::haxe::Unserializer_obj::__register();
::haxe::Timer_obj::__register();
::haxe::Resource_obj::__register();
::haxe::Log_obj::__register();
::haxe::CallStack_obj::__register();
::haxe::StackItem_obj::__register();
::format::svg::Text_obj::__register();
::format::svg::SVGRenderer_obj::__register();
::format::svg::SVGData_obj::__register();
::format::svg::SVG2Gfx_obj::__register();
::format::svg::RenderContext_obj::__register();
::format::svg::ArcSegment_obj::__register();
::format::svg::CubicSegment_obj::__register();
::format::svg::QuadraticSegment_obj::__register();
::format::svg::DrawSegment_obj::__register();
::format::svg::MoveSegment_obj::__register();
::format::svg::PathSegment_obj::__register();
::format::svg::PathParser_obj::__register();
::format::svg::Path_obj::__register();
::format::svg::DisplayElement_obj::__register();
::format::svg::Group_obj::__register();
::format::svg::Grad_obj::__register();
::format::svg::FillType_obj::__register();
::format::gfx::LineStyle_obj::__register();
::format::gfx::Gradient_obj::__register();
::format::gfx::GfxTextFinder_obj::__register();
::format::gfx::GfxGraphics_obj::__register();
::format::gfx::GfxExtent_obj::__register();
::format::gfx::GfxBytes_obj::__register();
::format::gfx::Gfx2Haxe_obj::__register();
::format::gfx::Gfx_obj::__register();
::format::SVG_obj::__register();
::flash::utils::Endian_obj::__register();
::flash::utils::CompressionAlgorithm_obj::__register();
::flash::utils::ByteArray_obj::__register();
::flash::utils::IDataInput_obj::__register();
::openfl::utils::IMemoryRange_obj::__register();
::flash::utils::IDataOutput_obj::__register();
::flash::ui::Keyboard_obj::__register();
::flash::text::TextLineMetrics_obj::__register();
::flash::text::TextFormat_obj::__register();
::flash::text::TextFieldType_obj::__register();
::flash::text::TextFieldAutoSize_obj::__register();
::flash::text::TextField_obj::__register();
::flash::text::GridFitType_obj::__register();
::flash::text::FontType_obj::__register();
::flash::text::FontStyle_obj::__register();
::flash::text::Font_obj::__register();
::flash::text::AntiAliasType_obj::__register();
::flash::system::SecurityDomain_obj::__register();
::flash::system::ScreenMode_obj::__register();
::flash::system::PixelFormat_obj::__register();
::flash::system::LoaderContext_obj::__register();
::flash::system::ApplicationDomain_obj::__register();
::flash::net::URLVariables_obj::__register();
::flash::net::URLRequestMethod_obj::__register();
::flash::net::URLRequestHeader_obj::__register();
::flash::net::URLRequest_obj::__register();
::flash::net::URLLoaderDataFormat_obj::__register();
::flash::media::SoundTransform_obj::__register();
::flash::media::SoundLoaderContext_obj::__register();
::flash::media::AudioThreadState_obj::__register();
::flash::media::SoundChannel_obj::__register();
::flash::media::InternalAudioType_obj::__register();
::flash::media::Sound_obj::__register();
::flash::media::ID3Info_obj::__register();
::flash::geom::Vector3D_obj::__register();
::flash::geom::Transform_obj::__register();
::flash::geom::Rectangle_obj::__register();
::flash::geom::Point_obj::__register();
::flash::geom::Matrix3D_obj::__register();
::flash::geom::Matrix_obj::__register();
::flash::geom::ColorTransform_obj::__register();
::flash::filters::BitmapFilter_obj::__register();
::flash::events::UncaughtErrorEvents_obj::__register();
::flash::events::UncaughtErrorEvent_obj::__register();
::flash::events::SampleDataEvent_obj::__register();
::flash::events::ProgressEvent_obj::__register();
::flash::events::KeyboardEvent_obj::__register();
::flash::events::IOErrorEvent_obj::__register();
::flash::events::HTTPStatusEvent_obj::__register();
::flash::events::FocusEvent_obj::__register();
::flash::events::EventPhase_obj::__register();
::flash::events::Listener_obj::__register();
::flash::events::ErrorEvent_obj::__register();
::flash::events::TextEvent_obj::__register();
::flash::errors::RangeError_obj::__register();
::flash::errors::EOFError_obj::__register();
::flash::errors::ArgumentError_obj::__register();
::flash::errors::Error_obj::__register();
::flash::display::TriangleCulling_obj::__register();
::flash::display::StageScaleMode_obj::__register();
::flash::display::StageQuality_obj::__register();
::flash::display::StageDisplayState_obj::__register();
::flash::display::StageAlign_obj::__register();
::flash::display::TouchInfo_obj::__register();
::flash::display::Stage_obj::__register();
::flash::events::TouchEvent_obj::__register();
::flash::events::MouseEvent_obj::__register();
::flash::events::Event_obj::__register();
::flash::display::SpreadMethod_obj::__register();
::flash::display::Shape_obj::__register();
::flash::display::PixelSnapping_obj::__register();
::flash::display::MovieClip_obj::__register();
::flash::display::LoaderInfo_obj::__register();
::flash::net::URLLoader_obj::__register();
::flash::display::Loader_obj::__register();
::flash::display::LineScaleMode_obj::__register();
::flash::display::JointStyle_obj::__register();
::flash::display::InterpolationMethod_obj::__register();
::flash::display::IGraphicsData_obj::__register();
::flash::display::GraphicsPathWinding_obj::__register();
::flash::display::Graphics_obj::__register();
::flash::display::GradientType_obj::__register();
::flash::display::FrameLabel_obj::__register();
::flash::display::CapsStyle_obj::__register();
::flash::display::BlendMode_obj::__register();
::flash::display::OptimizedPerlin_obj::__register();
::flash::display::BitmapData_obj::__register();
::flash::display::Bitmap_obj::__register();
::flash::_Vector::Vector_Impl__obj::__register();
::flash::Memory_obj::__register();
::cx::MathTools_obj::__register();
::cpp::vm::Thread_obj::__register();
::cpp::vm::Mutex_obj::__register();
::cpp::rtti::FieldNumericIntegerLookup_obj::__register();
::Xml_obj::__register();
::XmlType_obj::__register();
::Type_obj::__register();
::StringTools_obj::__register();
::StringBuf_obj::__register();
::Reflect_obj::__register();
::IMap_obj::__register();
::List_obj::__register();
::Lambda_obj::__register();
::EReg_obj::__register();
::DefaultAssetLibrary_obj::__register();
::openfl::AssetLibrary_obj::__register();
::Date_obj::__register();
::DocumentClass_obj::__register();
::Main_obj::__register();
::flash::display::Sprite_obj::__register();
::flash::display::DisplayObjectContainer_obj::__register();
::flash::display::InteractiveObject_obj::__register();
::flash::display::DisplayObject_obj::__register();
::flash::Lib_obj::__register();
::Std_obj::__register();
::sys::io::_Process::Stdout_obj::__register();
::haxe::io::Input_obj::__register();
::haxe::io::Bytes_obj::__register();
::sys::io::_Process::Stdin_obj::__register();
::haxe::io::Output_obj::__register();
::sys::io::Process_obj::__register();
::Sys_obj::__register();
::cpp::Lib_obj::__register();
::flash::display::IBitmapDrawable_obj::__register();
::flash::events::EventDispatcher_obj::__register();
::flash::events::IEventDispatcher_obj::__register();
::ApplicationMain_obj::__register();
::Xml_obj::__init__();
::flash::utils::ByteArray_obj::__init__();
::cpp::Lib_obj::__boot();
::EReg_obj::__boot();
::Xml_obj::__boot();
::cpp::rtti::FieldNumericIntegerLookup_obj::__boot();
::cpp::vm::Mutex_obj::__boot();
::cpp::vm::Thread_obj::__boot();
::haxe::Log_obj::__boot();
::ApplicationMain_obj::__boot();
::flash::events::IEventDispatcher_obj::__boot();
::flash::events::EventDispatcher_obj::__boot();
::flash::display::IBitmapDrawable_obj::__boot();
::Sys_obj::__boot();
::sys::io::Process_obj::__boot();
::haxe::io::Output_obj::__boot();
::sys::io::_Process::Stdin_obj::__boot();
::haxe::io::Bytes_obj::__boot();
::haxe::io::Input_obj::__boot();
::sys::io::_Process::Stdout_obj::__boot();
::Std_obj::__boot();
::flash::Lib_obj::__boot();
::flash::display::DisplayObject_obj::__boot();
::flash::display::InteractiveObject_obj::__boot();
::flash::display::DisplayObjectContainer_obj::__boot();
::flash::display::Sprite_obj::__boot();
::Main_obj::__boot();
::DocumentClass_obj::__boot();
::Date_obj::__boot();
::openfl::AssetLibrary_obj::__boot();
::DefaultAssetLibrary_obj::__boot();
::Lambda_obj::__boot();
::List_obj::__boot();
::IMap_obj::__boot();
::Reflect_obj::__boot();
::StringBuf_obj::__boot();
::StringTools_obj::__boot();
::Type_obj::__boot();
::XmlType_obj::__boot();
::cx::MathTools_obj::__boot();
::flash::Memory_obj::__boot();
::flash::_Vector::Vector_Impl__obj::__boot();
::flash::display::Bitmap_obj::__boot();
::flash::display::BitmapData_obj::__boot();
::flash::display::OptimizedPerlin_obj::__boot();
::flash::display::BlendMode_obj::__boot();
::flash::display::CapsStyle_obj::__boot();
::flash::display::FrameLabel_obj::__boot();
::flash::display::GradientType_obj::__boot();
::flash::display::Graphics_obj::__boot();
::flash::display::GraphicsPathWinding_obj::__boot();
::flash::display::IGraphicsData_obj::__boot();
::flash::display::InterpolationMethod_obj::__boot();
::flash::display::JointStyle_obj::__boot();
::flash::display::LineScaleMode_obj::__boot();
::flash::display::Loader_obj::__boot();
::flash::net::URLLoader_obj::__boot();
::flash::display::LoaderInfo_obj::__boot();
::flash::display::MovieClip_obj::__boot();
::flash::display::PixelSnapping_obj::__boot();
::flash::display::Shape_obj::__boot();
::flash::display::SpreadMethod_obj::__boot();
::flash::events::Event_obj::__boot();
::flash::events::MouseEvent_obj::__boot();
::flash::events::TouchEvent_obj::__boot();
::flash::display::Stage_obj::__boot();
::flash::display::TouchInfo_obj::__boot();
::flash::display::StageAlign_obj::__boot();
::flash::display::StageDisplayState_obj::__boot();
::flash::display::StageQuality_obj::__boot();
::flash::display::StageScaleMode_obj::__boot();
::flash::display::TriangleCulling_obj::__boot();
::flash::errors::Error_obj::__boot();
::flash::errors::ArgumentError_obj::__boot();
::flash::errors::EOFError_obj::__boot();
::flash::errors::RangeError_obj::__boot();
::flash::events::TextEvent_obj::__boot();
::flash::events::ErrorEvent_obj::__boot();
::flash::events::Listener_obj::__boot();
::flash::events::EventPhase_obj::__boot();
::flash::events::FocusEvent_obj::__boot();
::flash::events::HTTPStatusEvent_obj::__boot();
::flash::events::IOErrorEvent_obj::__boot();
::flash::events::KeyboardEvent_obj::__boot();
::flash::events::ProgressEvent_obj::__boot();
::flash::events::SampleDataEvent_obj::__boot();
::flash::events::UncaughtErrorEvent_obj::__boot();
::flash::events::UncaughtErrorEvents_obj::__boot();
::flash::filters::BitmapFilter_obj::__boot();
::flash::geom::ColorTransform_obj::__boot();
::flash::geom::Matrix_obj::__boot();
::flash::geom::Matrix3D_obj::__boot();
::flash::geom::Point_obj::__boot();
::flash::geom::Rectangle_obj::__boot();
::flash::geom::Transform_obj::__boot();
::flash::geom::Vector3D_obj::__boot();
::flash::media::ID3Info_obj::__boot();
::flash::media::Sound_obj::__boot();
::flash::media::InternalAudioType_obj::__boot();
::flash::media::SoundChannel_obj::__boot();
::flash::media::AudioThreadState_obj::__boot();
::flash::media::SoundLoaderContext_obj::__boot();
::flash::media::SoundTransform_obj::__boot();
::flash::net::URLLoaderDataFormat_obj::__boot();
::flash::net::URLRequest_obj::__boot();
::flash::net::URLRequestHeader_obj::__boot();
::flash::net::URLRequestMethod_obj::__boot();
::flash::net::URLVariables_obj::__boot();
::flash::system::ApplicationDomain_obj::__boot();
::flash::system::LoaderContext_obj::__boot();
::flash::system::PixelFormat_obj::__boot();
::flash::system::ScreenMode_obj::__boot();
::flash::system::SecurityDomain_obj::__boot();
::flash::text::AntiAliasType_obj::__boot();
::flash::text::Font_obj::__boot();
::flash::text::FontStyle_obj::__boot();
::flash::text::FontType_obj::__boot();
::flash::text::GridFitType_obj::__boot();
::flash::text::TextField_obj::__boot();
::flash::text::TextFieldAutoSize_obj::__boot();
::flash::text::TextFieldType_obj::__boot();
::flash::text::TextFormat_obj::__boot();
::flash::text::TextLineMetrics_obj::__boot();
::flash::ui::Keyboard_obj::__boot();
::flash::utils::IDataOutput_obj::__boot();
::openfl::utils::IMemoryRange_obj::__boot();
::flash::utils::IDataInput_obj::__boot();
::flash::utils::ByteArray_obj::__boot();
::flash::utils::CompressionAlgorithm_obj::__boot();
::flash::utils::Endian_obj::__boot();
::format::SVG_obj::__boot();
::format::gfx::Gfx_obj::__boot();
::format::gfx::Gfx2Haxe_obj::__boot();
::format::gfx::GfxBytes_obj::__boot();
::format::gfx::GfxExtent_obj::__boot();
::format::gfx::GfxGraphics_obj::__boot();
::format::gfx::GfxTextFinder_obj::__boot();
::format::gfx::Gradient_obj::__boot();
::format::gfx::LineStyle_obj::__boot();
::format::svg::FillType_obj::__boot();
::format::svg::Grad_obj::__boot();
::format::svg::Group_obj::__boot();
::format::svg::DisplayElement_obj::__boot();
::format::svg::Path_obj::__boot();
::format::svg::PathParser_obj::__boot();
::format::svg::PathSegment_obj::__boot();
::format::svg::MoveSegment_obj::__boot();
::format::svg::DrawSegment_obj::__boot();
::format::svg::QuadraticSegment_obj::__boot();
::format::svg::CubicSegment_obj::__boot();
::format::svg::ArcSegment_obj::__boot();
::format::svg::RenderContext_obj::__boot();
::format::svg::SVG2Gfx_obj::__boot();
::format::svg::SVGData_obj::__boot();
::format::svg::SVGRenderer_obj::__boot();
::format::svg::Text_obj::__boot();
::haxe::StackItem_obj::__boot();
::haxe::CallStack_obj::__boot();
::haxe::Resource_obj::__boot();
::haxe::Timer_obj::__boot();
::haxe::Unserializer_obj::__boot();
::haxe::crypto::BaseCode_obj::__boot();
::haxe::ds::IntMap_obj::__boot();
::haxe::ds::ObjectMap_obj::__boot();
::haxe::ds::StringMap_obj::__boot();
::haxe::io::BytesBuffer_obj::__boot();
::haxe::io::Eof_obj::__boot();
::haxe::io::Error_obj::__boot();
::haxe::io::Path_obj::__boot();
::haxe::zip::Compress_obj::__boot();
::haxe::zip::FlushMode_obj::__boot();
::haxe::zip::Uncompress_obj::__boot();
::nx3::render::IRenderer_obj::__boot();
::nx3::render::ITarget_obj::__boot();
::nx3::render::TargetSpriteBase_obj::__boot();
::nx3::render::TargetOpenFl_obj::__boot();
::nx3::render::TestTarget_obj::__boot();
::nx3::render::scaling::Scaling_obj::__boot();
::nx3::render::svg::Elements_obj::__boot();
::nx3::render::svg::ShapeTools_obj::__boot();
::openfl::AssetCache_obj::__boot();
::openfl::Assets_obj::__boot();
::openfl::AssetData_obj::__boot();
::openfl::AssetType_obj::__boot();
::openfl::display::DirectRenderer_obj::__boot();
::openfl::display::ManagedStage_obj::__boot();
::openfl::display::OpenGLView_obj::__boot();
::openfl::display::Tilesheet_obj::__boot();
::openfl::events::JoystickEvent_obj::__boot();
::openfl::events::SystemEvent_obj::__boot();
::openfl::gl::GL_obj::__boot();
::openfl::gl::GLObject_obj::__boot();
::openfl::gl::GLBuffer_obj::__boot();
::openfl::gl::GLFramebuffer_obj::__boot();
::openfl::gl::GLProgram_obj::__boot();
::openfl::gl::GLRenderbuffer_obj::__boot();
::openfl::gl::GLShader_obj::__boot();
::openfl::gl::GLTexture_obj::__boot();
::openfl::utils::ArrayBufferView_obj::__boot();
::openfl::utils::Float32Array_obj::__boot();
::openfl::utils::WeakRef_obj::__boot();
::sys::io::FileOutput_obj::__boot();
}

