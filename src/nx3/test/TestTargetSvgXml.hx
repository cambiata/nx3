package nx3.test;
import haxe.unit.TestCase;
import nx3.render.TargetSvgXml;

/**
 * ...
 * @author Jonas Nyström
 */
class TestTargetSvgXml extends TestCase
{
	public function testNew()
	{
		this.assertTrue(true);
		var svg = new TargetSvgXml('test');
		svg.line(10, 10, 20, 20);
		var xmlStr = svg.getXml().toString();
		//trace(xmlStr);
	}
	
}