package ;

import haxe.unit.TestCase;
import haxe.unit.TestRunner;
import nx3.EDirectionUD;
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
using cx.ArrayTools;
 
class Main
{
	static public function main() 
	{		
		Unittests.performTests();
		var s = new SvgComposer();
		s.addLine(10, 20, 30, 40);
		//trace(s.getXml().toString());
	
	}
}

	
