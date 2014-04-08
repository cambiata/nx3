package nx3.render;
import nx3.render.scaling.TScaling;

/**
 * @author Jonas Nyström
 */

interface ITarget 
{
	public function getScaling():TScaling;
	public function test(): Void;
	public function testLines(x:Float, y:Float, width:Float):Void;
	public function testSymbol(x:Float, y:Float,xmlStr:String=null):Void;
}