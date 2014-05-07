package ;

import cx.MathTools;
import haxe.unit.TestCase;
import haxe.unit.TestRunner;
import nx3.render.svg.SvgComposer;
import nx3.render.svg.SvgElements;
import nx3.test.Unittests;
import nx3.test.TestN;
import nx3.test.TestQ;
import nx3.test.TestV;

/**
 * ...
 * @author Jonas Nyström
 */
using cx.MathTools;
 
class Main
{
	static public function main() 
	{		
		Unittests.performTests();
		
		/*
		var float = 203.39999999999998;
		var float2 = float.round2();
		trace([float, float2]);
		*/
		//var s = new SvgComposer();
		//s.addLine(10, 20, 30, 40);
		//trace(s.getXml().toString());
	
	}
}

	
