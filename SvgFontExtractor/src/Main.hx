package ;

import cx.FileTools;
import cx.XmlTools;
import haxe.ds.StringMap.StringMap;
import neko.Lib;

/**
 * ...
 * @author Jonas Nyström
 */
using cx.ArrayTools;
 
class Main 
{
	static var exportglyphs:StringMap<String> = 
	[
		'uniE050' => 'clefG',
		'uniE05C'=> 'clefC',
		'uniE061' => 'clefF',		
		
		'uniE080' => 'time0',		
		'uniE081' => 'time1',		
		'uniE082' => 'time2',		
		'uniE083' => 'time3',		
		'uniE084' => 'time4',		
		'uniE085' => 'time5',		
		'uniE086' => 'time6',		
		'uniE087' => 'time7',		
		'uniE088' => 'time8',		
		'uniE089' => 'time9',		
		'uniE08A' => 'timeCommon',		
		'uniE08B' => 'timeCommonCut',		
		
		'uniE0A0' => 'headDoubleWhole',		
		'uniE0A1' => 'headWhole',		
		'uniE0A2' => 'headHalf',		
		'uniE0A3' => 'headBlack',		
		
		'uniE220' => 'flag8Up',		
		'uniE221' => 'flag8Down',		
		'uniE222' => 'flag16Up',		
		'uniE223' => 'flag16Down',		
		
		'uniE240' => 'signFlat',		
		'uniE241' => 'signNatural',		
		'uniE242' => 'signSharp',		
		'uniE243' => 'signDoubleSharp',		
		'uniE244' => 'signDoubleFlat',		
		
		'uniE4C2' => 'restWhole',		
		'uniE4C3' => 'restHalf',		
		'uniE4C4' => 'restQuarter',		
		'uniE4C5' => 'rest8th',		
		'uniE4C6' => 'rest16th',		
	];
	
	static function main() 
	{
		
		
		
		var xmlStr = FileTools.getContent('Bravura.svg');		
		var xml = Xml.parse(xmlStr);
		var glyphs =  xml.firstElement().elementsNamed('defs').next().elementsNamed('font').next().elementsNamed('glyph');
		for (glyph in glyphs)
		{
			var name = glyph.get('glyph-name');
			var pathd = glyph.get('d');
			
			if (exportglyphs.exists(name)) createGlyph(exportglyphs.get(name), pathd);
			//if (exportglyphs.has(name)) createGlyph(name, pathd);
		}
	}
	
	
	
	
	static public function createGlyph(name:String, pathdata:String)
	{
		var svg = Xml.createElement('svg');
		
		var g = Xml.createElement('g');
		g.set('transform', 'scale(0.5,-0.5)');
		var path = Xml.createElement('path');
		path.set('d', pathdata);
		g.addChild(path);
		svg.addChild(g);
		
		var xmlStr = svg.toString();		
		var filename = 'svg/$name.svg';
		
		FileTools.putContent(filename, xmlStr);		
	}
	
	
	
}