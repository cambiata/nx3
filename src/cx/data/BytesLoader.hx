package cx.data;

import haxe.io.Bytes;
import haxe.io.BytesData;
import haxe.io.BytesInput;


#if js
import js.html.ArrayBuffer;
import js.html.DataView;
import js.html.XMLHttpRequest;
import js.html.XMLHttpRequestProgressEvent;
import js.html.EventTarget;
#end

#if flash
import flash.events.Event;
import flash.net.URLLoader;
import flash.net.URLLoaderDataFormat;
import flash.net.URLRequest;
import flash.utils.ByteArray;
#end

/**
 * ...
 * @author Jonas Nyström
 */
 
class BytesLoader
{
	var filename:String;
	var callbck: Bytes->Void;
	public function new(filename:String, callbck:Bytes->Void) 
	{
		this.filename = filename;
		this.callbck = callbck;		
	}

#if (sys)
	public function loadBytes():Void
	{
		var bytes = sys.io.File.getBytes(filename);	
		this.callbck(bytes);
	}	
#elseif js	
	public function loadBytes():Void
	{
		var request:XMLHttpRequest = new XMLHttpRequest(); 
		request.open('GET', this.filename, true);
		request.responseType = 'arraybuffer';
		request.onload = function (e) {
			  var arrayBuffer:ArrayBuffer = request.response; 	
			  if (arrayBuffer != null) {
				var dataview:DataView = new DataView(arrayBuffer);
				var bytesData = new BytesData();
				for (i in 0...dataview.byteLength) bytesData.push( dataview.getUint8(i));
				var bytes = Bytes.ofData(bytesData);			
				this.callbck(bytes);	    
			  }
		};		
		request.send(null);
	}
#elseif flash
	public function loadBytes():Void
	{
	        var req = new  flash.net.URLLoader();
	        req.dataFormat =  flash.net.URLLoaderDataFormat.BINARY;
	        req.addEventListener(
		 flash.events.Event.COMPLETE
	        , function ( e: Event )
		{
			var arr: ByteArray = cast( e.target,  flash.net.URLLoader ).data;
			var bytes = Bytes.ofData( arr );
			this.callbck(bytes);
		}
	        );	        
		req.load( new  flash.net.URLRequest(this.filename) );
	}
#end
}
