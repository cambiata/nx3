package haxeui.flashdevelop.preview;

import haxe.crypto.Base64;
import haxe.io.Bytes;
import haxe.ui.toolkit.resources.IResourceHook;
import haxe.ui.toolkit.util.ByteConverter;
import openfl.Assets;
import openfl.display.BitmapData;
import openfl.display.Loader;
import openfl.events.Event;
import openfl.external.ExternalInterface;
import openfl.geom.Rectangle;
import openfl.utils.ByteArray;
import haxe.crypto.BaseCode;

class FDResourceHook implements IResourceHook {
	public function new() {
		
	}

	public function getBitmapData(resourceId:String, locale:String = null):BitmapData {
		try {
			var resultString:String = ExternalInterface.call("getBitmapData", resourceId);
			if (resultString == null) {
				return null;
			}
			var resultArray:Array<String> = resultString.split("|");
			var bmpString:String = resultArray[2];
			var bytes:Bytes = Base64.decode(bmpString);
			var width:Int = Std.parseInt(resultArray[0]);
			var height:Int = Std.parseInt(resultArray[1]);
			var bmp:BitmapData = new BitmapData(width, height, true, 0);
			bmp.lock();
			bmp.setPixels(bmp.rect,bytes.getData());
			bmp.unlock();
			return bmp;
		} catch (e:Dynamic) {
			trace("Problem getting bitmap in haxe hook: " + e);
		}
		return null;
	}
	
	public function getText(resourceId:String, locale:String = null):String {
		try {
			var resultString:String = ExternalInterface.call("getText", resourceId);
			if (resultString == null) {
				return null;
			}
			return resultString;
		} catch (e:Dynamic) {
			trace("Problem getting text in haxe hook: " + e);
		}
		return null;
	}
	
	public function getBytes(resourceId:String, locale:String = null):ByteArray {
		try {
			var resultString:String = ExternalInterface.call("getBytes", resourceId);
			if (resultString == null) {
				return null;
			}
			var bytes:Bytes = Base64.decode(resultString);
			var ba:ByteArray = bytes.getData();
			return ba;
		} catch (e:Dynamic) {
			trace("Problem getting bytes in haxe hook: " + e);
		}
		return null;
	}
}