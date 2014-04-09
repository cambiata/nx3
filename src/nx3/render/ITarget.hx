package nx3.render;
import nx3.EDirectionUD;
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;
import nx3.render.scaling.TScaling;
import nx3.TPoints;
import nx3.VBeamgroup;
import nx3.VNote;

/**
 * @author Jonas Nyström
 */

interface ITarget 
{
	public function getScaling():TScaling;
	public function test(): Void;
	public function testLines(x:Float, y:Float, width:Float):Void;
	public function testSymbol(x:Float, y:Float, xmlStr:String = null):Void;
	public function rect(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int):Void;
	public function rectangle(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int):Void;
	public function rectangles(x:Float, y:Float, rects:Rectangles, ?lineWidth:Float, ?lineColor:Int):Void;
	
	public function line(x:Float, y:Float, x2:Float, y2:Float, ?lineWidth:Float, ?lineColor:Int):Void;
	
	public function shape(x:Float, y:Float, xmlStr:String):Void;
	//public function heads(x:Float, y:Float, vnote:VNote, direction:EDirectionUD):Void;
	//public function beamgroup(x: Float, y:Float, beamgroup:VBeamgroup, points:TPoints, direction:EDirectionUD):Void;

}