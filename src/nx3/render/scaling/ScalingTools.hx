package nx3.render.scaling;
import nx3.geom.Rectangle;
import nx3.TPoint;

/**
 * ScalingTools
 * @author Jonas Nyström
 */
class ScalingTools 
{
	inline static public function scaleRect(scaling:TScaling, rect:Rectangle):Rectangle  return new Rectangle(rect.x * scaling.unitX, rect.y * scaling.unitY, rect.width * scaling.unitX, rect.height * scaling.unitY);		
	inline static public function targetRect(scaling:TScaling, rect:Rectangle):Rectangle  return new Rectangle(rect.x / scaling.unitX, rect.y / scaling.unitY, rect.width / scaling.unitX, rect.height / scaling.unitY);			

	inline static public function scalePoint(scaling:TScaling, x:Float, y:Float):TPoint return { x: x * scaling.unitX, y: y * scaling.unitY };
	inline static public function targetPoint(scaling:TScaling,  x:Float, y:Float):TPoint return { x: x / scaling.unitX, y: y / scaling.unitY };	
	
	inline static public function scaleX(scaling:TScaling, x:Float) return x * scaling.unitX;
	inline static public function scaleY(scaling:TScaling, y:Float) return y * scaling.unitY;
	inline static public function targetX(scaling:TScaling, x:Float) return x / scaling.unitX;
	inline static public function targetY(scaling:TScaling, y:Float) return y / scaling.unitY;	
	
	static public function fromString(scl:String) : nx3.render.scaling.TScaling
	{
		if (scl == null) return Scaling.NORMAL;
		if (scl == '') return Scaling.NORMAL;
		scl = scl.toLowerCase();
		return switch scl {
			case 'mini', '1': Scaling.MINI;
			case 'small', '2': Scaling.SMALL;
			case 'normal', '3': Scaling.NORMAL;
			case 'mid', '4': Scaling.MID;
			case 'big', '5': Scaling.BIG;
			case 'print1', '6': Scaling.PRINT1;
			case _: Scaling.NORMAL;
		}
	}
}