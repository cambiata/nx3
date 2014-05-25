package cx.java;

import java.io.File;
import java.io.Writer;
import java.io.InputStream;
import java.io.FileInputStream;
import java.io.StringWriter;
import java.io.StringBufferInputStream;
import java.io.FileWriter;
import java.io.BufferedWriter;
import com.btr.svg2java.java2d.SvgToJava2DTranscoder;

/**
 * SvgToG2d
 * @author Jonas Nyström
 */
class SvgTranscoder 
{
	var svgString:String;

	public function new(svgString:String) 
	{
		this.svgString = svgString;
	}
	
	public function toClassCode(className:String='ResultingClassName'):String
	{
		var writer:java.io.StringWriter = null;
		var inputStream:InputStream = new StringBufferInputStream(this.svgString);
		try
		{
			writer = new java.io.StringWriter();
		}
		catch  (e:Dynamic  )
		{
			trace(e);
		}
		var transcoder:SvgToJava2DTranscoder = new SvgToJava2DTranscoder();
		transcoder.transcode(inputStream, writer, className);
		var text = writer.toString();
		return text;
	}
	
	static public function extractShapeCode(str:String):String
	{
		var r = ~/paintShapeNode_0_0_0_0\(Graphics2D g\) \{([\s\S]*?)g\.setPaint/;
	        r.match(str);
		var shapeCode = r.matched(1);
		return shapeCode;
	}
	
	static public function addNamespace(svgString:String):String
	{
		try {
			
			var xml = Xml.parse(svgString);
			if (!xml.firstElement().exists('xmlns')) 
				xml.firstElement().set('xmlns', 'http://www.w3.org/2000/svg');
			return xml.toString();
		} catch (e:Dynamic)
		{
			return svgString;
		}
	}
	
	static public function getShapeProcedureCode(shapeCode:String, fieldName:String='testField'):String
	{
		return 'static public function $fieldName():GeneralPath { \r $shapeCode  \r\t shape0.closePath(); \r \t return shape0; \r }';
	}
	
}