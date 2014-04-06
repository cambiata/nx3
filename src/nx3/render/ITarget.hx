package nx3.render;

/**
 * @author Jonas Nyström
 */

interface ITarget 
{
	public function test(): Void;
	public function testLines(x:Float, y:Float, width:Float):Void;
}