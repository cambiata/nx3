package;


import haxe.Timer;
import haxe.Unserializer;
import lime.app.Preloader;
import lime.audio.openal.AL;
import lime.audio.AudioBuffer;
import lime.graphics.Font;
import lime.graphics.Image;
import lime.utils.ByteArray;
import lime.utils.UInt8Array;
import lime.Assets;

#if (sys || nodejs)
import sys.FileSystem;
#end

#if flash
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.Loader;
import flash.events.Event;
import flash.media.Sound;
import flash.net.URLLoader;
import flash.net.URLRequest;
#end


class DefaultAssetLibrary extends AssetLibrary {
	
	
	public var className (default, null) = new Map <String, Dynamic> ();
	public var path (default, null) = new Map <String, String> ();
	public var type (default, null) = new Map <String, AssetType> ();
	
	private var lastModified:Float;
	private var timer:Timer;
	
	
	public function new () {
		
		super ();
		
		#if flash
		
		className.set ("assets/openfl.svg", __ASSET__assets_openfl_svg);
		type.set ("assets/openfl.svg", AssetType.TEXT);
		className.set ("assets/sounds/piano/48.mp3", __ASSET__assets_sounds_piano_48_mp3);
		type.set ("assets/sounds/piano/48.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/49.mp3", __ASSET__assets_sounds_piano_49_mp3);
		type.set ("assets/sounds/piano/49.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/50.mp3", __ASSET__assets_sounds_piano_50_mp3);
		type.set ("assets/sounds/piano/50.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/51.mp3", __ASSET__assets_sounds_piano_51_mp3);
		type.set ("assets/sounds/piano/51.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/52.mp3", __ASSET__assets_sounds_piano_52_mp3);
		type.set ("assets/sounds/piano/52.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/53.mp3", __ASSET__assets_sounds_piano_53_mp3);
		type.set ("assets/sounds/piano/53.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/54.mp3", __ASSET__assets_sounds_piano_54_mp3);
		type.set ("assets/sounds/piano/54.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/55.mp3", __ASSET__assets_sounds_piano_55_mp3);
		type.set ("assets/sounds/piano/55.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/56.mp3", __ASSET__assets_sounds_piano_56_mp3);
		type.set ("assets/sounds/piano/56.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/57.mp3", __ASSET__assets_sounds_piano_57_mp3);
		type.set ("assets/sounds/piano/57.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/58.mp3", __ASSET__assets_sounds_piano_58_mp3);
		type.set ("assets/sounds/piano/58.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/59.mp3", __ASSET__assets_sounds_piano_59_mp3);
		type.set ("assets/sounds/piano/59.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/60.mp3", __ASSET__assets_sounds_piano_60_mp3);
		type.set ("assets/sounds/piano/60.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/61.mp3", __ASSET__assets_sounds_piano_61_mp3);
		type.set ("assets/sounds/piano/61.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/62.mp3", __ASSET__assets_sounds_piano_62_mp3);
		type.set ("assets/sounds/piano/62.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/63.mp3", __ASSET__assets_sounds_piano_63_mp3);
		type.set ("assets/sounds/piano/63.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/64.mp3", __ASSET__assets_sounds_piano_64_mp3);
		type.set ("assets/sounds/piano/64.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/65.mp3", __ASSET__assets_sounds_piano_65_mp3);
		type.set ("assets/sounds/piano/65.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/66.mp3", __ASSET__assets_sounds_piano_66_mp3);
		type.set ("assets/sounds/piano/66.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/67.mp3", __ASSET__assets_sounds_piano_67_mp3);
		type.set ("assets/sounds/piano/67.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/68.mp3", __ASSET__assets_sounds_piano_68_mp3);
		type.set ("assets/sounds/piano/68.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/69.mp3", __ASSET__assets_sounds_piano_69_mp3);
		type.set ("assets/sounds/piano/69.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/70.mp3", __ASSET__assets_sounds_piano_70_mp3);
		type.set ("assets/sounds/piano/70.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/71.mp3", __ASSET__assets_sounds_piano_71_mp3);
		type.set ("assets/sounds/piano/71.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/72.mp3", __ASSET__assets_sounds_piano_72_mp3);
		type.set ("assets/sounds/piano/72.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/73.mp3", __ASSET__assets_sounds_piano_73_mp3);
		type.set ("assets/sounds/piano/73.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/74.mp3", __ASSET__assets_sounds_piano_74_mp3);
		type.set ("assets/sounds/piano/74.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/75.mp3", __ASSET__assets_sounds_piano_75_mp3);
		type.set ("assets/sounds/piano/75.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/76.mp3", __ASSET__assets_sounds_piano_76_mp3);
		type.set ("assets/sounds/piano/76.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/77.mp3", __ASSET__assets_sounds_piano_77_mp3);
		type.set ("assets/sounds/piano/77.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/78.mp3", __ASSET__assets_sounds_piano_78_mp3);
		type.set ("assets/sounds/piano/78.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/79.mp3", __ASSET__assets_sounds_piano_79_mp3);
		type.set ("assets/sounds/piano/79.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/80.mp3", __ASSET__assets_sounds_piano_80_mp3);
		type.set ("assets/sounds/piano/80.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/81.mp3", __ASSET__assets_sounds_piano_81_mp3);
		type.set ("assets/sounds/piano/81.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/82.mp3", __ASSET__assets_sounds_piano_82_mp3);
		type.set ("assets/sounds/piano/82.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/83.mp3", __ASSET__assets_sounds_piano_83_mp3);
		type.set ("assets/sounds/piano/83.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/84.mp3", __ASSET__assets_sounds_piano_84_mp3);
		type.set ("assets/sounds/piano/84.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/85.mp3", __ASSET__assets_sounds_piano_85_mp3);
		type.set ("assets/sounds/piano/85.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/86.mp3", __ASSET__assets_sounds_piano_86_mp3);
		type.set ("assets/sounds/piano/86.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/87.mp3", __ASSET__assets_sounds_piano_87_mp3);
		type.set ("assets/sounds/piano/87.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/88.mp3", __ASSET__assets_sounds_piano_88_mp3);
		type.set ("assets/sounds/piano/88.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/89.mp3", __ASSET__assets_sounds_piano_89_mp3);
		type.set ("assets/sounds/piano/89.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/90.mp3", __ASSET__assets_sounds_piano_90_mp3);
		type.set ("assets/sounds/piano/90.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/91.mp3", __ASSET__assets_sounds_piano_91_mp3);
		type.set ("assets/sounds/piano/91.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/92.mp3", __ASSET__assets_sounds_piano_92_mp3);
		type.set ("assets/sounds/piano/92.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/93.mp3", __ASSET__assets_sounds_piano_93_mp3);
		type.set ("assets/sounds/piano/93.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/94.mp3", __ASSET__assets_sounds_piano_94_mp3);
		type.set ("assets/sounds/piano/94.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/95.mp3", __ASSET__assets_sounds_piano_95_mp3);
		type.set ("assets/sounds/piano/95.mp3", AssetType.MUSIC);
		className.set ("assets/sounds/piano/96.mp3", __ASSET__assets_sounds_piano_96_mp3);
		type.set ("assets/sounds/piano/96.mp3", AssetType.MUSIC);
		
		
		#elseif html5
		
		var id;
		id = "assets/openfl.svg";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "assets/sounds/piano/48.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/49.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/50.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/51.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/52.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/53.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/54.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/55.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/56.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/57.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/58.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/59.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/60.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/61.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/62.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/63.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/64.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/65.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/66.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/67.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/68.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/69.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/70.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/71.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/72.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/73.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/74.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/75.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/76.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/77.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/78.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/79.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/80.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/81.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/82.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/83.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/84.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/85.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/86.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/87.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/88.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/89.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/90.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/91.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/92.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/93.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/94.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/95.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		id = "assets/sounds/piano/96.mp3";
		path.set (id, id);
		
		type.set (id, AssetType.MUSIC);
		
		
		#else
		
		#if openfl
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		#end
		
		#if (windows || mac || linux)
		
		/*var useManifest = false;
		
		className.set ("assets/openfl.svg", __ASSET__assets_openfl_svg);
		type.set ("assets/openfl.svg", AssetType.TEXT);
		
		className.set ("assets/sounds/piano/48.mp3", __ASSET__assets_sounds_piano_48_mp3);
		type.set ("assets/sounds/piano/48.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/49.mp3", __ASSET__assets_sounds_piano_49_mp3);
		type.set ("assets/sounds/piano/49.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/50.mp3", __ASSET__assets_sounds_piano_50_mp3);
		type.set ("assets/sounds/piano/50.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/51.mp3", __ASSET__assets_sounds_piano_51_mp3);
		type.set ("assets/sounds/piano/51.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/52.mp3", __ASSET__assets_sounds_piano_52_mp3);
		type.set ("assets/sounds/piano/52.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/53.mp3", __ASSET__assets_sounds_piano_53_mp3);
		type.set ("assets/sounds/piano/53.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/54.mp3", __ASSET__assets_sounds_piano_54_mp3);
		type.set ("assets/sounds/piano/54.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/55.mp3", __ASSET__assets_sounds_piano_55_mp3);
		type.set ("assets/sounds/piano/55.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/56.mp3", __ASSET__assets_sounds_piano_56_mp3);
		type.set ("assets/sounds/piano/56.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/57.mp3", __ASSET__assets_sounds_piano_57_mp3);
		type.set ("assets/sounds/piano/57.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/58.mp3", __ASSET__assets_sounds_piano_58_mp3);
		type.set ("assets/sounds/piano/58.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/59.mp3", __ASSET__assets_sounds_piano_59_mp3);
		type.set ("assets/sounds/piano/59.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/60.mp3", __ASSET__assets_sounds_piano_60_mp3);
		type.set ("assets/sounds/piano/60.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/61.mp3", __ASSET__assets_sounds_piano_61_mp3);
		type.set ("assets/sounds/piano/61.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/62.mp3", __ASSET__assets_sounds_piano_62_mp3);
		type.set ("assets/sounds/piano/62.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/63.mp3", __ASSET__assets_sounds_piano_63_mp3);
		type.set ("assets/sounds/piano/63.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/64.mp3", __ASSET__assets_sounds_piano_64_mp3);
		type.set ("assets/sounds/piano/64.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/65.mp3", __ASSET__assets_sounds_piano_65_mp3);
		type.set ("assets/sounds/piano/65.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/66.mp3", __ASSET__assets_sounds_piano_66_mp3);
		type.set ("assets/sounds/piano/66.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/67.mp3", __ASSET__assets_sounds_piano_67_mp3);
		type.set ("assets/sounds/piano/67.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/68.mp3", __ASSET__assets_sounds_piano_68_mp3);
		type.set ("assets/sounds/piano/68.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/69.mp3", __ASSET__assets_sounds_piano_69_mp3);
		type.set ("assets/sounds/piano/69.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/70.mp3", __ASSET__assets_sounds_piano_70_mp3);
		type.set ("assets/sounds/piano/70.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/71.mp3", __ASSET__assets_sounds_piano_71_mp3);
		type.set ("assets/sounds/piano/71.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/72.mp3", __ASSET__assets_sounds_piano_72_mp3);
		type.set ("assets/sounds/piano/72.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/73.mp3", __ASSET__assets_sounds_piano_73_mp3);
		type.set ("assets/sounds/piano/73.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/74.mp3", __ASSET__assets_sounds_piano_74_mp3);
		type.set ("assets/sounds/piano/74.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/75.mp3", __ASSET__assets_sounds_piano_75_mp3);
		type.set ("assets/sounds/piano/75.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/76.mp3", __ASSET__assets_sounds_piano_76_mp3);
		type.set ("assets/sounds/piano/76.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/77.mp3", __ASSET__assets_sounds_piano_77_mp3);
		type.set ("assets/sounds/piano/77.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/78.mp3", __ASSET__assets_sounds_piano_78_mp3);
		type.set ("assets/sounds/piano/78.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/79.mp3", __ASSET__assets_sounds_piano_79_mp3);
		type.set ("assets/sounds/piano/79.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/80.mp3", __ASSET__assets_sounds_piano_80_mp3);
		type.set ("assets/sounds/piano/80.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/81.mp3", __ASSET__assets_sounds_piano_81_mp3);
		type.set ("assets/sounds/piano/81.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/82.mp3", __ASSET__assets_sounds_piano_82_mp3);
		type.set ("assets/sounds/piano/82.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/83.mp3", __ASSET__assets_sounds_piano_83_mp3);
		type.set ("assets/sounds/piano/83.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/84.mp3", __ASSET__assets_sounds_piano_84_mp3);
		type.set ("assets/sounds/piano/84.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/85.mp3", __ASSET__assets_sounds_piano_85_mp3);
		type.set ("assets/sounds/piano/85.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/86.mp3", __ASSET__assets_sounds_piano_86_mp3);
		type.set ("assets/sounds/piano/86.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/87.mp3", __ASSET__assets_sounds_piano_87_mp3);
		type.set ("assets/sounds/piano/87.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/88.mp3", __ASSET__assets_sounds_piano_88_mp3);
		type.set ("assets/sounds/piano/88.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/89.mp3", __ASSET__assets_sounds_piano_89_mp3);
		type.set ("assets/sounds/piano/89.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/90.mp3", __ASSET__assets_sounds_piano_90_mp3);
		type.set ("assets/sounds/piano/90.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/91.mp3", __ASSET__assets_sounds_piano_91_mp3);
		type.set ("assets/sounds/piano/91.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/92.mp3", __ASSET__assets_sounds_piano_92_mp3);
		type.set ("assets/sounds/piano/92.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/93.mp3", __ASSET__assets_sounds_piano_93_mp3);
		type.set ("assets/sounds/piano/93.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/94.mp3", __ASSET__assets_sounds_piano_94_mp3);
		type.set ("assets/sounds/piano/94.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/95.mp3", __ASSET__assets_sounds_piano_95_mp3);
		type.set ("assets/sounds/piano/95.mp3", AssetType.MUSIC);
		
		className.set ("assets/sounds/piano/96.mp3", __ASSET__assets_sounds_piano_96_mp3);
		type.set ("assets/sounds/piano/96.mp3", AssetType.MUSIC);
		*/
		var useManifest = true;
		
		if (useManifest) {
			
			loadManifest ();
			
			if (Sys.args ().indexOf ("-livereload") > -1) {
				
				var path = FileSystem.fullPath ("manifest");
				lastModified = FileSystem.stat (path).mtime.getTime ();
				
				timer = new Timer (2000);
				timer.run = function () {
					
					var modified = FileSystem.stat (path).mtime.getTime ();
					
					if (modified > lastModified) {
						
						lastModified = modified;
						loadManifest ();
						
						if (eventCallback != null) {
							
							eventCallback (this, "change");
							
						}
						
					}
					
				}
				
			}
			
		}
		
		#else
		
		loadManifest ();
		
		#end
		#end
		
	}
	
	
	public override function exists (id:String, type:String):Bool {
		
		var requestedType = type != null ? cast (type, AssetType) : null;
		var assetType = this.type.get (id);
		
		if (assetType != null) {
			
			if (assetType == requestedType || ((requestedType == SOUND || requestedType == MUSIC) && (assetType == MUSIC || assetType == SOUND))) {
				
				return true;
				
			}
			
			#if flash
			
			if ((assetType == BINARY || assetType == TEXT) && requestedType == BINARY) {
				
				return true;
				
			} else if (path.exists (id)) {
				
				return true;
				
			}
			
			#else
			
			if (requestedType == BINARY || requestedType == null || (assetType == BINARY && requestedType == TEXT)) {
				
				return true;
				
			}
			
			#end
			
		}
		
		return false;
		
	}
	
	
	public override function getAudioBuffer (id:String):AudioBuffer {
		
		#if flash
		
		var buffer = new AudioBuffer ();
		buffer.src = cast (Type.createInstance (className.get (id), []), Sound);
		return buffer;
		
		#elseif html5
		
		return null;
		//return new Sound (new URLRequest (path.get (id)));
		
		#else
		
		return AudioBuffer.fromFile (path.get (id));
		//if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), Sound);
		//else return new Sound (new URLRequest (path.get (id)), null, type.get (id) == MUSIC);
		
		#end
		
	}
	
	
	public override function getBytes (id:String):ByteArray {
		
		#if flash
		
		return cast (Type.createInstance (className.get (id), []), ByteArray);
		
		#elseif html5
		
		var bytes:ByteArray = null;
		var data = Preloader.loaders.get (path.get (id)).data;
		
		if (Std.is (data, String)) {
			
			bytes = new ByteArray ();
			bytes.writeUTFBytes (data);
			
		} else if (Std.is (data, ByteArray)) {
			
			bytes = cast data;
			
		} else {
			
			bytes = null;
			
		}
		
		if (bytes != null) {
			
			bytes.position = 0;
			return bytes;
			
		} else {
			
			return null;
		}
		
		#else
		
		//return null;
		//if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), ByteArray);
		//else 
		return ByteArray.readFile (path.get (id));
		
		#end
		
	}
	
	
	public override function getFont (id:String):Dynamic /*Font*/ {
		
		// TODO: Complete Lime Font API
		
		#if openfl
		#if (flash || js)
		
		return cast (Type.createInstance (className.get (id), []), openfl.text.Font);
		
		#else
		
		if (className.exists (id)) {
			
			var fontClass = className.get (id);
			openfl.text.Font.registerFont (fontClass);
			return cast (Type.createInstance (fontClass, []), openfl.text.Font);
			
		} else {
			
			return new openfl.text.Font (path.get (id));
			
		}
		
		#end
		#end
		
		return null;
		
	}
	
	
	public override function getImage (id:String):Image {
		
		#if flash
		
		return Image.fromBitmapData (cast (Type.createInstance (className.get (id), []), BitmapData));
		
		#elseif html5
		
		return Image.fromImageElement (Preloader.images.get (path.get (id)));
		
		#else
		
		return Image.fromFile (path.get (id));
		
		#end
		
	}
	
	
	/*public override function getMusic (id:String):Dynamic {
		
		#if flash
		
		return cast (Type.createInstance (className.get (id), []), Sound);
		
		#elseif openfl_html5
		
		//var sound = new Sound ();
		//sound.__buffer = true;
		//sound.load (new URLRequest (path.get (id)));
		//return sound;
		return null;
		
		#elseif html5
		
		return null;
		//return new Sound (new URLRequest (path.get (id)));
		
		#else
		
		return null;
		//if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), Sound);
		//else return new Sound (new URLRequest (path.get (id)), null, true);
		
		#end
		
	}*/
	
	
	public override function getPath (id:String):String {
		
		//#if ios
		
		//return SystemPath.applicationDirectory + "/assets/" + path.get (id);
		
		//#else
		
		return path.get (id);
		
		//#end
		
	}
	
	
	public override function getText (id:String):String {
		
		#if html5
		
		var bytes:ByteArray = null;
		var data = Preloader.loaders.get (path.get (id)).data;
		
		if (Std.is (data, String)) {
			
			return cast data;
			
		} else if (Std.is (data, ByteArray)) {
			
			bytes = cast data;
			
		} else {
			
			bytes = null;
			
		}
		
		if (bytes != null) {
			
			bytes.position = 0;
			return bytes.readUTFBytes (bytes.length);
			
		} else {
			
			return null;
		}
		
		#else
		
		var bytes = getBytes (id);
		
		if (bytes == null) {
			
			return null;
			
		} else {
			
			return bytes.readUTFBytes (bytes.length);
			
		}
		
		#end
		
	}
	
	
	public override function isLocal (id:String, type:String):Bool {
		
		var requestedType = type != null ? cast (type, AssetType) : null;
		
		#if flash
		
		if (requestedType != AssetType.MUSIC && requestedType != AssetType.SOUND) {
			
			return className.exists (id);
			
		}
		
		#end
		
		return true;
		
	}
	
	
	public override function list (type:String):Array<String> {
		
		var requestedType = type != null ? cast (type, AssetType) : null;
		var items = [];
		
		for (id in this.type.keys ()) {
			
			if (requestedType == null || exists (id, type)) {
				
				items.push (id);
				
			}
			
		}
		
		return items;
		
	}
	
	
	public override function loadAudioBuffer (id:String, handler:AudioBuffer -> Void):Void {
		
		#if (flash || js)
		
		//if (path.exists (id)) {
			
		//	var loader = new Loader ();
		//	loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event) {
				
		//		handler (cast (event.currentTarget.content, Bitmap).bitmapData);
				
		//	});
		//	loader.load (new URLRequest (path.get (id)));
			
		//} else {
			
			handler (getAudioBuffer (id));
			
		//}
		
		#else
		
		handler (getAudioBuffer (id));
		
		#end
		
	}
	
	
	public override function loadBytes (id:String, handler:ByteArray -> Void):Void {
		
		#if flash
		
		if (path.exists (id)) {
			
			var loader = new URLLoader ();
			loader.addEventListener (Event.COMPLETE, function (event:Event) {
				
				var bytes = new ByteArray ();
				bytes.writeUTFBytes (event.currentTarget.data);
				bytes.position = 0;
				
				handler (bytes);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getBytes (id));
			
		}
		
		#else
		
		handler (getBytes (id));
		
		#end
		
	}
	
	
	public override function loadImage (id:String, handler:Image -> Void):Void {
		
		#if flash
		
		if (path.exists (id)) {
			
			var loader = new Loader ();
			loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event:Event) {
				
				var bitmapData = cast (event.currentTarget.content, Bitmap).bitmapData;
				handler (Image.fromBitmapData (bitmapData));
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getImage (id));
			
		}
		
		#else
		
		handler (getImage (id));
		
		#end
		
	}
	
	
	#if (!flash && !html5)
	private function loadManifest ():Void {
		
		try {
			
			#if blackberry
			var bytes = ByteArray.readFile ("app/native/manifest");
			#elseif tizen
			var bytes = ByteArray.readFile ("../res/manifest");
			#elseif emscripten
			var bytes = ByteArray.readFile ("assets/manifest");
			#else
			var bytes = ByteArray.readFile ("manifest");
			#end
			
			if (bytes != null) {
				
				bytes.position = 0;
				
				if (bytes.length > 0) {
					
					var data = bytes.readUTFBytes (bytes.length);
					
					if (data != null && data.length > 0) {
						
						var manifest:Array<Dynamic> = Unserializer.run (data);
						
						for (asset in manifest) {
							
							if (!className.exists (asset.id)) {
								
								path.set (asset.id, asset.path);
								type.set (asset.id, cast (asset.type, AssetType));
								
							}
							
						}
						
					}
					
				}
				
			} else {
				
				trace ("Warning: Could not load asset manifest (bytes was null)");
				
			}
		
		} catch (e:Dynamic) {
			
			trace ('Warning: Could not load asset manifest (${e})');
			
		}
		
	}
	#end
	
	
	/*public override function loadMusic (id:String, handler:Dynamic -> Void):Void {
		
		#if (flash || js)
		
		//if (path.exists (id)) {
			
		//	var loader = new Loader ();
		//	loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event) {
				
		//		handler (cast (event.currentTarget.content, Bitmap).bitmapData);
				
		//	});
		//	loader.load (new URLRequest (path.get (id)));
			
		//} else {
			
			handler (getMusic (id));
			
		//}
		
		#else
		
		handler (getMusic (id));
		
		#end
		
	}*/
	
	
	public override function loadText (id:String, handler:String -> Void):Void {
		
		//#if html5
		
		/*if (path.exists (id)) {
			
			var loader = new URLLoader ();
			loader.addEventListener (Event.COMPLETE, function (event:Event) {
				
				handler (event.currentTarget.data);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getText (id));
			
		}*/
		
		//#else
		
		var callback = function (bytes:ByteArray):Void {
			
			if (bytes == null) {
				
				handler (null);
				
			} else {
				
				handler (bytes.readUTFBytes (bytes.length));
				
			}
			
		}
		
		loadBytes (id, callback);
		
		//#end
		
	}
	
	
}


#if !display
#if flash

@:keep @:bind #if display private #end class __ASSET__assets_openfl_svg extends flash.utils.ByteArray { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_48_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_49_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_50_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_51_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_52_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_53_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_54_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_55_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_56_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_57_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_58_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_59_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_60_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_61_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_62_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_63_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_64_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_65_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_66_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_67_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_68_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_69_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_70_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_71_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_72_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_73_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_74_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_75_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_76_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_77_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_78_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_79_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_80_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_81_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_82_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_83_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_84_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_85_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_86_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_87_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_88_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_89_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_90_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_91_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_92_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_93_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_94_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_95_mp3 extends flash.media.Sound { }
@:keep @:bind #if display private #end class __ASSET__assets_sounds_piano_96_mp3 extends flash.media.Sound { }


#elseif html5

#if openfl



















































#end

#else

#if openfl

#end

#if (windows || mac || linux)

//
//@:file("assets/openfl.svg") class __ASSET__assets_openfl_svg extends lime.utils.ByteArray {}
//@:sound("assets/sounds/piano/48.mp3") class __ASSET__assets_sounds_piano_48_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/49.mp3") class __ASSET__assets_sounds_piano_49_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/50.mp3") class __ASSET__assets_sounds_piano_50_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/51.mp3") class __ASSET__assets_sounds_piano_51_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/52.mp3") class __ASSET__assets_sounds_piano_52_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/53.mp3") class __ASSET__assets_sounds_piano_53_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/54.mp3") class __ASSET__assets_sounds_piano_54_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/55.mp3") class __ASSET__assets_sounds_piano_55_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/56.mp3") class __ASSET__assets_sounds_piano_56_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/57.mp3") class __ASSET__assets_sounds_piano_57_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/58.mp3") class __ASSET__assets_sounds_piano_58_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/59.mp3") class __ASSET__assets_sounds_piano_59_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/60.mp3") class __ASSET__assets_sounds_piano_60_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/61.mp3") class __ASSET__assets_sounds_piano_61_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/62.mp3") class __ASSET__assets_sounds_piano_62_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/63.mp3") class __ASSET__assets_sounds_piano_63_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/64.mp3") class __ASSET__assets_sounds_piano_64_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/65.mp3") class __ASSET__assets_sounds_piano_65_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/66.mp3") class __ASSET__assets_sounds_piano_66_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/67.mp3") class __ASSET__assets_sounds_piano_67_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/68.mp3") class __ASSET__assets_sounds_piano_68_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/69.mp3") class __ASSET__assets_sounds_piano_69_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/70.mp3") class __ASSET__assets_sounds_piano_70_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/71.mp3") class __ASSET__assets_sounds_piano_71_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/72.mp3") class __ASSET__assets_sounds_piano_72_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/73.mp3") class __ASSET__assets_sounds_piano_73_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/74.mp3") class __ASSET__assets_sounds_piano_74_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/75.mp3") class __ASSET__assets_sounds_piano_75_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/76.mp3") class __ASSET__assets_sounds_piano_76_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/77.mp3") class __ASSET__assets_sounds_piano_77_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/78.mp3") class __ASSET__assets_sounds_piano_78_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/79.mp3") class __ASSET__assets_sounds_piano_79_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/80.mp3") class __ASSET__assets_sounds_piano_80_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/81.mp3") class __ASSET__assets_sounds_piano_81_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/82.mp3") class __ASSET__assets_sounds_piano_82_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/83.mp3") class __ASSET__assets_sounds_piano_83_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/84.mp3") class __ASSET__assets_sounds_piano_84_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/85.mp3") class __ASSET__assets_sounds_piano_85_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/86.mp3") class __ASSET__assets_sounds_piano_86_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/87.mp3") class __ASSET__assets_sounds_piano_87_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/88.mp3") class __ASSET__assets_sounds_piano_88_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/89.mp3") class __ASSET__assets_sounds_piano_89_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/90.mp3") class __ASSET__assets_sounds_piano_90_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/91.mp3") class __ASSET__assets_sounds_piano_91_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/92.mp3") class __ASSET__assets_sounds_piano_92_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/93.mp3") class __ASSET__assets_sounds_piano_93_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/94.mp3") class __ASSET__assets_sounds_piano_94_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/95.mp3") class __ASSET__assets_sounds_piano_95_mp3 extends openfl.media.Sound {}
//@:sound("assets/sounds/piano/96.mp3") class __ASSET__assets_sounds_piano_96_mp3 extends openfl.media.Sound {}
//
//

#end

#end
#end

