package cx;
import haxe.io.BytesData;
import haxe.io.Eof;
import java.Lib;
//import neko.FileSystem;
//import neko.io.File;
import haxe.io.Bytes;
//import neko.Sys;

#if (neko || cpp) 
import sys.FileSystem;
import sys.io.File;
#end

#if java
import java.io.File;
import java.io.Writer;
import java.io.InputStream;
import java.io.FileInputStream;
import java.io.StringWriter;
import java.io.StringBufferInputStream;
import java.io.FileWriter;
import java.io.BufferedWriter;
#end


using StringTools;
/**
 * ...
 * @author Jonas Nyström
 */

class FileTools
{
	#if (java)
		static public function saveContent(filename:String, content:String) {
			try 
			{
				var file = new File(filename);
				var output = new BufferedWriter(new FileWriter(file));
				output.write(content);
				output.close();
			} catch ( e:Dynamic ) {
			   //e.printStackTrace();
			   trace(e);
			}

			
		}

		static public function getContent(filename:String):String {

			try {
				var bufferReader = new java.io.BufferedReader(new java.io.FileReader(filename));
				var stringBuilder = new java.lang.StringBuilder();
				var line = bufferReader.readLine();
				while (line != null)
				{
					stringBuilder.append(line);
					stringBuilder.append('\n');
					line = bufferReader.readLine();
				}
				return stringBuilder.toString();
			} catch (e : Dynamic) {
				trace(e);
			}
			throw 'Could not read the file $filename';
		}		
			/*
			    BufferedReader br = new BufferedReader(new FileReader("file.txt"));
    try {
        StringBuilder sb = new StringBuilder();
        String line = br.readLine();

        while (line != null) {
            sb.append(line);
            sb.append(System.lineSeparator());
            line = br.readLine();
        }
        String everything = sb.toString();
    } finally {
        br.close();
    }
			*/
			
			
		
	#end
	
	
	
	#if (neko || cpp)
	
	static public function saveContent(filename:String, content:String) {
		var f = File.write(filename, false);
		f.writeString(content);
		f.close();		
	}	

	static public function getContent(filename:String):String {
		return File.getContent(filename);
	}
	
	static public function getBytes(filename:String): Bytes {		
		return File.getBytes(filename);		
	}
	
	static public function saveBytes(filename:String, bytes:Bytes) {
		var f = File.write(filename, true);
		f.write(bytes);
		f.close();		
	}
	
	static public function saveStringAsBinary(filename:String, str:String) {
		var f = File.write(filename, true);
		f.writeString(str);
		f.close();			
	}

	static public function getFileAgeSeconds(filename:String):Null<Int> {
		if (FileSystem.exists(filename)) {
			var stat = FileSystem.stat(filename);
			var a = stat.atime;
			return Std.int((Date.now().getTime() - stat.atime.getTime())/1000);
		}		
		return null;
	}

	#end
	
	
	
}

