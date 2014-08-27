package;


import haxe.Timer;
import haxe.Unserializer;
import openfl.display.Bitmap;
import openfl.display.BitmapData;
import openfl.display.MovieClip;
import openfl.events.Event;
import openfl.text.Font;
import openfl.media.Sound;
import openfl.net.URLRequest;
import openfl.utils.ByteArray;
import openfl.Assets;

#if (flash || js)
import openfl.display.Loader;
import openfl.events.Event;
import openfl.net.URLLoader;
#end

#if sys
import sys.FileSystem;
#end

#if ios
import openfl.utils.SystemPath;
#end


@:access(openfl.media.Sound)
class DefaultAssetLibrary extends AssetLibrary {
	
	
	public var className (default, null) = new Map <String, Dynamic> ();
	public var path (default, null) = new Map <String, String> ();
	public var type (default, null) = new Map <String, AssetType> ();
	
	private var lastModified:Float;
	private var timer:Timer;
	
	
	public function new () {
		
		super ();
		
		#if flash
		
		className.set ("wav/48.data", __ASSET__wav_48_data);
		type.set ("wav/48.data", AssetType.BINARY);
		className.set ("wav/49.data", __ASSET__wav_49_data);
		type.set ("wav/49.data", AssetType.BINARY);
		className.set ("wav/50.data", __ASSET__wav_50_data);
		type.set ("wav/50.data", AssetType.BINARY);
		className.set ("wav/51.data", __ASSET__wav_51_data);
		type.set ("wav/51.data", AssetType.BINARY);
		className.set ("wav/52.data", __ASSET__wav_52_data);
		type.set ("wav/52.data", AssetType.BINARY);
		className.set ("wav/53.data", __ASSET__wav_53_data);
		type.set ("wav/53.data", AssetType.BINARY);
		className.set ("wav/54.data", __ASSET__wav_54_data);
		type.set ("wav/54.data", AssetType.BINARY);
		className.set ("wav/55.data", __ASSET__wav_55_data);
		type.set ("wav/55.data", AssetType.BINARY);
		className.set ("wav/56.data", __ASSET__wav_56_data);
		type.set ("wav/56.data", AssetType.BINARY);
		className.set ("wav/57.data", __ASSET__wav_57_data);
		type.set ("wav/57.data", AssetType.BINARY);
		className.set ("wav/58.data", __ASSET__wav_58_data);
		type.set ("wav/58.data", AssetType.BINARY);
		className.set ("wav/59.data", __ASSET__wav_59_data);
		type.set ("wav/59.data", AssetType.BINARY);
		className.set ("wav/60.data", __ASSET__wav_60_data);
		type.set ("wav/60.data", AssetType.BINARY);
		className.set ("wav/61.data", __ASSET__wav_61_data);
		type.set ("wav/61.data", AssetType.BINARY);
		className.set ("wav/62.data", __ASSET__wav_62_data);
		type.set ("wav/62.data", AssetType.BINARY);
		className.set ("wav/63.data", __ASSET__wav_63_data);
		type.set ("wav/63.data", AssetType.BINARY);
		className.set ("wav/64.data", __ASSET__wav_64_data);
		type.set ("wav/64.data", AssetType.BINARY);
		className.set ("wav/65.data", __ASSET__wav_65_data);
		type.set ("wav/65.data", AssetType.BINARY);
		className.set ("wav/66.data", __ASSET__wav_66_data);
		type.set ("wav/66.data", AssetType.BINARY);
		className.set ("wav/67.data", __ASSET__wav_67_data);
		type.set ("wav/67.data", AssetType.BINARY);
		className.set ("wav/68.data", __ASSET__wav_68_data);
		type.set ("wav/68.data", AssetType.BINARY);
		className.set ("wav/69.data", __ASSET__wav_69_data);
		type.set ("wav/69.data", AssetType.BINARY);
		className.set ("wav/70.data", __ASSET__wav_70_data);
		type.set ("wav/70.data", AssetType.BINARY);
		className.set ("wav/71.data", __ASSET__wav_71_data);
		type.set ("wav/71.data", AssetType.BINARY);
		className.set ("wav/72.data", __ASSET__wav_72_data);
		type.set ("wav/72.data", AssetType.BINARY);
		className.set ("wav/73.data", __ASSET__wav_73_data);
		type.set ("wav/73.data", AssetType.BINARY);
		className.set ("wav/74.data", __ASSET__wav_74_data);
		type.set ("wav/74.data", AssetType.BINARY);
		className.set ("wav/75.data", __ASSET__wav_75_data);
		type.set ("wav/75.data", AssetType.BINARY);
		className.set ("wav/76.data", __ASSET__wav_76_data);
		type.set ("wav/76.data", AssetType.BINARY);
		className.set ("wav/77.data", __ASSET__wav_77_data);
		type.set ("wav/77.data", AssetType.BINARY);
		className.set ("wav/78.data", __ASSET__wav_78_data);
		type.set ("wav/78.data", AssetType.BINARY);
		className.set ("wav/79.data", __ASSET__wav_79_data);
		type.set ("wav/79.data", AssetType.BINARY);
		className.set ("wav/80.data", __ASSET__wav_80_data);
		type.set ("wav/80.data", AssetType.BINARY);
		className.set ("wav/81.data", __ASSET__wav_81_data);
		type.set ("wav/81.data", AssetType.BINARY);
		className.set ("wav/82.data", __ASSET__wav_82_data);
		type.set ("wav/82.data", AssetType.BINARY);
		className.set ("wav/83.data", __ASSET__wav_83_data);
		type.set ("wav/83.data", AssetType.BINARY);
		className.set ("wav/84.data", __ASSET__wav_84_data);
		type.set ("wav/84.data", AssetType.BINARY);
		className.set ("wav/85.data", __ASSET__wav_85_data);
		type.set ("wav/85.data", AssetType.BINARY);
		className.set ("wav/86.data", __ASSET__wav_86_data);
		type.set ("wav/86.data", AssetType.BINARY);
		className.set ("wav/87.data", __ASSET__wav_87_data);
		type.set ("wav/87.data", AssetType.BINARY);
		className.set ("wav/88.data", __ASSET__wav_88_data);
		type.set ("wav/88.data", AssetType.BINARY);
		className.set ("wav/89.data", __ASSET__wav_89_data);
		type.set ("wav/89.data", AssetType.BINARY);
		className.set ("wav/90.data", __ASSET__wav_90_data);
		type.set ("wav/90.data", AssetType.BINARY);
		className.set ("wav/91.data", __ASSET__wav_91_data);
		type.set ("wav/91.data", AssetType.BINARY);
		className.set ("wav/92.data", __ASSET__wav_92_data);
		type.set ("wav/92.data", AssetType.BINARY);
		className.set ("wav/93.data", __ASSET__wav_93_data);
		type.set ("wav/93.data", AssetType.BINARY);
		className.set ("wav/94.data", __ASSET__wav_94_data);
		type.set ("wav/94.data", AssetType.BINARY);
		className.set ("wav/95.data", __ASSET__wav_95_data);
		type.set ("wav/95.data", AssetType.BINARY);
		className.set ("wav/96.data", __ASSET__wav_96_data);
		type.set ("wav/96.data", AssetType.BINARY);
		
		
		#elseif html5
		
		var id;
		id = "wav/48.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/49.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/50.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/51.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/52.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/53.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/54.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/55.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/56.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/57.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/58.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/59.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/60.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/61.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/62.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/63.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/64.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/65.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/66.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/67.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/68.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/69.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/70.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/71.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/72.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/73.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/74.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/75.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/76.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/77.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/78.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/79.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/80.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/81.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/82.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/83.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/84.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/85.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/86.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/87.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/88.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/89.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/90.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/91.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/92.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/93.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/94.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/95.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		id = "wav/96.data";
		path.set (id, id);
		type.set (id, AssetType.BINARY);
		
		
		#else
		
		#if (windows || mac || linux)
		
		var useManifest = false;
		
		className.set ("wav/48.data", __ASSET__wav_48_data);
		type.set ("wav/48.data", AssetType.BINARY);
		
		className.set ("wav/49.data", __ASSET__wav_49_data);
		type.set ("wav/49.data", AssetType.BINARY);
		
		className.set ("wav/50.data", __ASSET__wav_50_data);
		type.set ("wav/50.data", AssetType.BINARY);
		
		className.set ("wav/51.data", __ASSET__wav_51_data);
		type.set ("wav/51.data", AssetType.BINARY);
		
		className.set ("wav/52.data", __ASSET__wav_52_data);
		type.set ("wav/52.data", AssetType.BINARY);
		
		className.set ("wav/53.data", __ASSET__wav_53_data);
		type.set ("wav/53.data", AssetType.BINARY);
		
		className.set ("wav/54.data", __ASSET__wav_54_data);
		type.set ("wav/54.data", AssetType.BINARY);
		
		className.set ("wav/55.data", __ASSET__wav_55_data);
		type.set ("wav/55.data", AssetType.BINARY);
		
		className.set ("wav/56.data", __ASSET__wav_56_data);
		type.set ("wav/56.data", AssetType.BINARY);
		
		className.set ("wav/57.data", __ASSET__wav_57_data);
		type.set ("wav/57.data", AssetType.BINARY);
		
		className.set ("wav/58.data", __ASSET__wav_58_data);
		type.set ("wav/58.data", AssetType.BINARY);
		
		className.set ("wav/59.data", __ASSET__wav_59_data);
		type.set ("wav/59.data", AssetType.BINARY);
		
		className.set ("wav/60.data", __ASSET__wav_60_data);
		type.set ("wav/60.data", AssetType.BINARY);
		
		className.set ("wav/61.data", __ASSET__wav_61_data);
		type.set ("wav/61.data", AssetType.BINARY);
		
		className.set ("wav/62.data", __ASSET__wav_62_data);
		type.set ("wav/62.data", AssetType.BINARY);
		
		className.set ("wav/63.data", __ASSET__wav_63_data);
		type.set ("wav/63.data", AssetType.BINARY);
		
		className.set ("wav/64.data", __ASSET__wav_64_data);
		type.set ("wav/64.data", AssetType.BINARY);
		
		className.set ("wav/65.data", __ASSET__wav_65_data);
		type.set ("wav/65.data", AssetType.BINARY);
		
		className.set ("wav/66.data", __ASSET__wav_66_data);
		type.set ("wav/66.data", AssetType.BINARY);
		
		className.set ("wav/67.data", __ASSET__wav_67_data);
		type.set ("wav/67.data", AssetType.BINARY);
		
		className.set ("wav/68.data", __ASSET__wav_68_data);
		type.set ("wav/68.data", AssetType.BINARY);
		
		className.set ("wav/69.data", __ASSET__wav_69_data);
		type.set ("wav/69.data", AssetType.BINARY);
		
		className.set ("wav/70.data", __ASSET__wav_70_data);
		type.set ("wav/70.data", AssetType.BINARY);
		
		className.set ("wav/71.data", __ASSET__wav_71_data);
		type.set ("wav/71.data", AssetType.BINARY);
		
		className.set ("wav/72.data", __ASSET__wav_72_data);
		type.set ("wav/72.data", AssetType.BINARY);
		
		className.set ("wav/73.data", __ASSET__wav_73_data);
		type.set ("wav/73.data", AssetType.BINARY);
		
		className.set ("wav/74.data", __ASSET__wav_74_data);
		type.set ("wav/74.data", AssetType.BINARY);
		
		className.set ("wav/75.data", __ASSET__wav_75_data);
		type.set ("wav/75.data", AssetType.BINARY);
		
		className.set ("wav/76.data", __ASSET__wav_76_data);
		type.set ("wav/76.data", AssetType.BINARY);
		
		className.set ("wav/77.data", __ASSET__wav_77_data);
		type.set ("wav/77.data", AssetType.BINARY);
		
		className.set ("wav/78.data", __ASSET__wav_78_data);
		type.set ("wav/78.data", AssetType.BINARY);
		
		className.set ("wav/79.data", __ASSET__wav_79_data);
		type.set ("wav/79.data", AssetType.BINARY);
		
		className.set ("wav/80.data", __ASSET__wav_80_data);
		type.set ("wav/80.data", AssetType.BINARY);
		
		className.set ("wav/81.data", __ASSET__wav_81_data);
		type.set ("wav/81.data", AssetType.BINARY);
		
		className.set ("wav/82.data", __ASSET__wav_82_data);
		type.set ("wav/82.data", AssetType.BINARY);
		
		className.set ("wav/83.data", __ASSET__wav_83_data);
		type.set ("wav/83.data", AssetType.BINARY);
		
		className.set ("wav/84.data", __ASSET__wav_84_data);
		type.set ("wav/84.data", AssetType.BINARY);
		
		className.set ("wav/85.data", __ASSET__wav_85_data);
		type.set ("wav/85.data", AssetType.BINARY);
		
		className.set ("wav/86.data", __ASSET__wav_86_data);
		type.set ("wav/86.data", AssetType.BINARY);
		
		className.set ("wav/87.data", __ASSET__wav_87_data);
		type.set ("wav/87.data", AssetType.BINARY);
		
		className.set ("wav/88.data", __ASSET__wav_88_data);
		type.set ("wav/88.data", AssetType.BINARY);
		
		className.set ("wav/89.data", __ASSET__wav_89_data);
		type.set ("wav/89.data", AssetType.BINARY);
		
		className.set ("wav/90.data", __ASSET__wav_90_data);
		type.set ("wav/90.data", AssetType.BINARY);
		
		className.set ("wav/91.data", __ASSET__wav_91_data);
		type.set ("wav/91.data", AssetType.BINARY);
		
		className.set ("wav/92.data", __ASSET__wav_92_data);
		type.set ("wav/92.data", AssetType.BINARY);
		
		className.set ("wav/93.data", __ASSET__wav_93_data);
		type.set ("wav/93.data", AssetType.BINARY);
		
		className.set ("wav/94.data", __ASSET__wav_94_data);
		type.set ("wav/94.data", AssetType.BINARY);
		
		className.set ("wav/95.data", __ASSET__wav_95_data);
		type.set ("wav/95.data", AssetType.BINARY);
		
		className.set ("wav/96.data", __ASSET__wav_96_data);
		type.set ("wav/96.data", AssetType.BINARY);
		
		
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
	
	
	public override function exists (id:String, type:AssetType):Bool {
		
		var assetType = this.type.get (id);
		
		#if pixi
		
		if (assetType == IMAGE) {
			
			return true;
			
		} else {
			
			return false;
			
		}
		
		#end
		
		if (assetType != null) {
			
			if (assetType == type || ((type == SOUND || type == MUSIC) && (assetType == MUSIC || assetType == SOUND))) {
				
				return true;
				
			}
			
			#if flash
			
			if ((assetType == BINARY || assetType == TEXT) && type == BINARY) {
				
				return true;
				
			} else if (path.exists (id)) {
				
				return true;
				
			}
			
			#else
			
			if (type == BINARY || type == null) {
				
				return true;
				
			}
			
			#end
			
		}
		
		return false;
		
	}
	
	
	public override function getBitmapData (id:String):BitmapData {
		
		#if pixi
		
		return BitmapData.fromImage (path.get (id));
		
		#elseif (flash)
		
		return cast (Type.createInstance (className.get (id), []), BitmapData);
		
		#elseif openfl_html5
		
		return BitmapData.fromImage (ApplicationMain.images.get (path.get (id)));
		
		#elseif js
		
		return cast (ApplicationMain.loaders.get (path.get (id)).contentLoaderInfo.content, Bitmap).bitmapData;
		
		#else
		
		if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), BitmapData);
		else return BitmapData.load (path.get (id));
		
		#end
		
	}
	
	
	public override function getBytes (id:String):ByteArray {
		
		#if (flash)
		
		return cast (Type.createInstance (className.get (id), []), ByteArray);

		#elseif (js || openfl_html5 || pixi)
		
		var bytes:ByteArray = null;
		var data = ApplicationMain.urlLoaders.get (path.get (id)).data;
		
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
		
		if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), ByteArray);
		else return ByteArray.readFile (path.get (id));
		
		#end
		
	}
	
	
	public override function getFont (id:String):Font {
		
		#if pixi
		
		return null;
		
		#elseif (flash || js)
		
		return cast (Type.createInstance (className.get (id), []), Font);
		
		#else
		
		if (className.exists(id)) {
			var fontClass = className.get(id);
			Font.registerFont(fontClass);
			return cast (Type.createInstance (fontClass, []), Font);
		} else return new Font (path.get (id));
		
		#end
		
	}
	
	
	public override function getMusic (id:String):Sound {
		
		#if pixi
		
		return null;
		
		#elseif (flash)
		
		return cast (Type.createInstance (className.get (id), []), Sound);
		
		#elseif openfl_html5
		
		var sound = new Sound ();
		sound.__buffer = true;
		sound.load (new URLRequest (path.get (id)));
		return sound; 
		
		#elseif js
		
		return new Sound (new URLRequest (path.get (id)));
		
		#else
		
		if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), Sound);
		else return new Sound (new URLRequest (path.get (id)), null, true);
		
		#end
		
	}
	
	
	public override function getPath (id:String):String {
		
		#if ios
		
		return SystemPath.applicationDirectory + "/assets/" + path.get (id);
		
		#else
		
		return path.get (id);
		
		#end
		
	}
	
	
	public override function getSound (id:String):Sound {
		
		#if pixi
		
		return null;
		
		#elseif (flash)
		
		return cast (Type.createInstance (className.get (id), []), Sound);
		
		#elseif js
		
		return new Sound (new URLRequest (path.get (id)));
		
		#else
		
		if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), Sound);
		else return new Sound (new URLRequest (path.get (id)), null, type.get (id) == MUSIC);
		
		#end
		
	}
	
	
	public override function getText (id:String):String {
		
		#if js
		
		var bytes:ByteArray = null;
		var data = ApplicationMain.urlLoaders.get (path.get (id)).data;
		
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
	
	
	public override function isLocal (id:String, type:AssetType):Bool {
		
		#if flash
		
		if (type != AssetType.MUSIC && type != AssetType.SOUND) {
			
			return className.exists (id);
			
		}
		
		#end
		
		return true;
		
	}
	
	
	public override function list (type:AssetType):Array<String> {
		
		var items = [];
		
		for (id in this.type.keys ()) {
			
			if (type == null || exists (id, type)) {
				
				items.push (id);
				
			}
			
		}
		
		return items;
		
	}
	
	
	public override function loadBitmapData (id:String, handler:BitmapData -> Void):Void {
		
		#if pixi
		
		handler (getBitmapData (id));
		
		#elseif (flash || js)
		
		if (path.exists (id)) {
			
			var loader = new Loader ();
			loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event:Event) {
				
				handler (cast (event.currentTarget.content, Bitmap).bitmapData);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getBitmapData (id));
			
		}
		
		#else
		
		handler (getBitmapData (id));
		
		#end
		
	}
	
	
	public override function loadBytes (id:String, handler:ByteArray -> Void):Void {
		
		#if pixi
		
		handler (getBytes (id));
		
		#elseif (flash || js)
		
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
	
	
	public override function loadFont (id:String, handler:Font -> Void):Void {
		
		#if (flash || js)
		
		/*if (path.exists (id)) {
			
			var loader = new Loader ();
			loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event) {
				
				handler (cast (event.currentTarget.content, Bitmap).bitmapData);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {*/
			
			handler (getFont (id));
			
		//}
		
		#else
		
		handler (getFont (id));
		
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
								type.set (asset.id, Type.createEnum (AssetType, asset.type));
								
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
	
	
	public override function loadMusic (id:String, handler:Sound -> Void):Void {
		
		#if (flash || js)
		
		/*if (path.exists (id)) {
			
			var loader = new Loader ();
			loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event) {
				
				handler (cast (event.currentTarget.content, Bitmap).bitmapData);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {*/
			
			handler (getMusic (id));
			
		//}
		
		#else
		
		handler (getMusic (id));
		
		#end
		
	}
	
	
	public override function loadSound (id:String, handler:Sound -> Void):Void {
		
		#if (flash || js)
		
		/*if (path.exists (id)) {
			
			var loader = new Loader ();
			loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event) {
				
				handler (cast (event.currentTarget.content, Bitmap).bitmapData);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {*/
			
			handler (getSound (id));
			
		//}
		
		#else
		
		handler (getSound (id));
		
		#end
		
	}
	
	
	public override function loadText (id:String, handler:String -> Void):Void {
		
		#if js
		
		if (path.exists (id)) {
			
			var loader = new URLLoader ();
			loader.addEventListener (Event.COMPLETE, function (event:Event) {
				
				handler (event.currentTarget.data);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getText (id));
			
		}
		
		#else
		
		var callback = function (bytes:ByteArray):Void {
			
			if (bytes == null) {
				
				handler (null);
				
			} else {
				
				handler (bytes.readUTFBytes (bytes.length));
				
			}
			
		}
		
		loadBytes (id, callback);
		
		#end
		
	}
	
	
}


#if pixi
#elseif flash

@:keep class __ASSET__wav_48_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_49_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_50_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_51_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_52_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_53_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_54_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_55_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_56_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_57_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_58_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_59_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_60_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_61_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_62_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_63_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_64_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_65_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_66_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_67_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_68_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_69_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_70_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_71_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_72_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_73_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_74_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_75_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_76_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_77_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_78_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_79_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_80_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_81_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_82_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_83_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_84_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_85_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_86_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_87_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_88_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_89_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_90_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_91_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_92_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_93_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_94_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_95_data extends openfl.utils.ByteArray { }
@:keep class __ASSET__wav_96_data extends openfl.utils.ByteArray { }


#elseif html5




















































#elseif (windows || mac || linux)


@:file("assets/wav/48.data") class __ASSET__wav_48_data extends flash.utils.ByteArray {}
@:file("assets/wav/49.data") class __ASSET__wav_49_data extends flash.utils.ByteArray {}
@:file("assets/wav/50.data") class __ASSET__wav_50_data extends flash.utils.ByteArray {}
@:file("assets/wav/51.data") class __ASSET__wav_51_data extends flash.utils.ByteArray {}
@:file("assets/wav/52.data") class __ASSET__wav_52_data extends flash.utils.ByteArray {}
@:file("assets/wav/53.data") class __ASSET__wav_53_data extends flash.utils.ByteArray {}
@:file("assets/wav/54.data") class __ASSET__wav_54_data extends flash.utils.ByteArray {}
@:file("assets/wav/55.data") class __ASSET__wav_55_data extends flash.utils.ByteArray {}
@:file("assets/wav/56.data") class __ASSET__wav_56_data extends flash.utils.ByteArray {}
@:file("assets/wav/57.data") class __ASSET__wav_57_data extends flash.utils.ByteArray {}
@:file("assets/wav/58.data") class __ASSET__wav_58_data extends flash.utils.ByteArray {}
@:file("assets/wav/59.data") class __ASSET__wav_59_data extends flash.utils.ByteArray {}
@:file("assets/wav/60.data") class __ASSET__wav_60_data extends flash.utils.ByteArray {}
@:file("assets/wav/61.data") class __ASSET__wav_61_data extends flash.utils.ByteArray {}
@:file("assets/wav/62.data") class __ASSET__wav_62_data extends flash.utils.ByteArray {}
@:file("assets/wav/63.data") class __ASSET__wav_63_data extends flash.utils.ByteArray {}
@:file("assets/wav/64.data") class __ASSET__wav_64_data extends flash.utils.ByteArray {}
@:file("assets/wav/65.data") class __ASSET__wav_65_data extends flash.utils.ByteArray {}
@:file("assets/wav/66.data") class __ASSET__wav_66_data extends flash.utils.ByteArray {}
@:file("assets/wav/67.data") class __ASSET__wav_67_data extends flash.utils.ByteArray {}
@:file("assets/wav/68.data") class __ASSET__wav_68_data extends flash.utils.ByteArray {}
@:file("assets/wav/69.data") class __ASSET__wav_69_data extends flash.utils.ByteArray {}
@:file("assets/wav/70.data") class __ASSET__wav_70_data extends flash.utils.ByteArray {}
@:file("assets/wav/71.data") class __ASSET__wav_71_data extends flash.utils.ByteArray {}
@:file("assets/wav/72.data") class __ASSET__wav_72_data extends flash.utils.ByteArray {}
@:file("assets/wav/73.data") class __ASSET__wav_73_data extends flash.utils.ByteArray {}
@:file("assets/wav/74.data") class __ASSET__wav_74_data extends flash.utils.ByteArray {}
@:file("assets/wav/75.data") class __ASSET__wav_75_data extends flash.utils.ByteArray {}
@:file("assets/wav/76.data") class __ASSET__wav_76_data extends flash.utils.ByteArray {}
@:file("assets/wav/77.data") class __ASSET__wav_77_data extends flash.utils.ByteArray {}
@:file("assets/wav/78.data") class __ASSET__wav_78_data extends flash.utils.ByteArray {}
@:file("assets/wav/79.data") class __ASSET__wav_79_data extends flash.utils.ByteArray {}
@:file("assets/wav/80.data") class __ASSET__wav_80_data extends flash.utils.ByteArray {}
@:file("assets/wav/81.data") class __ASSET__wav_81_data extends flash.utils.ByteArray {}
@:file("assets/wav/82.data") class __ASSET__wav_82_data extends flash.utils.ByteArray {}
@:file("assets/wav/83.data") class __ASSET__wav_83_data extends flash.utils.ByteArray {}
@:file("assets/wav/84.data") class __ASSET__wav_84_data extends flash.utils.ByteArray {}
@:file("assets/wav/85.data") class __ASSET__wav_85_data extends flash.utils.ByteArray {}
@:file("assets/wav/86.data") class __ASSET__wav_86_data extends flash.utils.ByteArray {}
@:file("assets/wav/87.data") class __ASSET__wav_87_data extends flash.utils.ByteArray {}
@:file("assets/wav/88.data") class __ASSET__wav_88_data extends flash.utils.ByteArray {}
@:file("assets/wav/89.data") class __ASSET__wav_89_data extends flash.utils.ByteArray {}
@:file("assets/wav/90.data") class __ASSET__wav_90_data extends flash.utils.ByteArray {}
@:file("assets/wav/91.data") class __ASSET__wav_91_data extends flash.utils.ByteArray {}
@:file("assets/wav/92.data") class __ASSET__wav_92_data extends flash.utils.ByteArray {}
@:file("assets/wav/93.data") class __ASSET__wav_93_data extends flash.utils.ByteArray {}
@:file("assets/wav/94.data") class __ASSET__wav_94_data extends flash.utils.ByteArray {}
@:file("assets/wav/95.data") class __ASSET__wav_95_data extends flash.utils.ByteArray {}
@:file("assets/wav/96.data") class __ASSET__wav_96_data extends flash.utils.ByteArray {}


#end
