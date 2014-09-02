package nx3;
using cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */
class PBamegroupFrameTipCalculator
{

	 var notelevels:Array<Int>;
	 var direction:EDirectionUD;
	 
	 public function new (notelevels:Array<Int>, direction:EDirectionUD)
	 {
		 if (direction == EDirectionUD.Down)
		 {
			 var invertedLevels = new Array<Int>();
			 for (level in notelevels)
			 {
				 invertedLevels.push(level * -1);
			 }
			 notelevels = invertedLevels;
		 }		 
		 this.notelevels = notelevels;
		 this.direction = direction;		 
	 }
	 
	 public function getTips():PFrametips
	 {
		 var stemLength = 7;
		 
		 var min = intMin(this.notelevels);
		 
		 var leftTip:Float = this.notelevels.first();
		 var rightTip:Float = this.notelevels.last();
		
		 

		
		if (this.notelevels.length == 2)
		{
			var slopevalue = 1; 
			leftTip = floatMin([leftTip, rightTip + slopevalue, stemLength]);
			rightTip = floatMin([rightTip, leftTip + slopevalue, stemLength]); 			
			
		}	
		else
		{
			var slopevalue = (notelevels.length  * .25);
			 var inlevels = this.notelevels.copy();
			 inlevels.shift();
			 inlevels.pop();
			 var inmin = intMin(inlevels);
			
			if (leftTip >= inmin && rightTip >= inmin)
			{
				leftTip = inmin;
				rightTip = inmin;
			}			
			else if (rightTip < leftTip  && min < leftTip) 
			{
				leftTip = floatMin([min+slopevalue, leftTip]);			
			}
			else if (leftTip < rightTip && min < rightTip) 
			{
				rightTip = floatMin([min + slopevalue, rightTip]);
			}
		}
		 
		leftTip = Std.int(Math.min(stemLength, leftTip));
		rightTip = Std.int(Math.min(stemLength, rightTip));
		
		//rightTip = rightTip + 2;
		
		if (this.direction == EDirectionUD.Down) return  {leftTip:-leftTip, rightTip:-rightTip};		
		return {leftTip:leftTip, rightTip:rightTip};
	 }
	 
	 static public inline function intMin(levels:Array<Int>):Int
	 {
		var result = levels.first();
		if (levels.length == 1) return result;
		for (level in levels)
		{
			result = Std.int(Math.min(result, level));
		}
		return result;
	 }

	 static public inline function floatMin(levels:Array<Float>):Float
	 {
		var result = levels.first();
		if (levels.length == 1) return result;
		for (level in levels)
		{
			result = Math.min(result, level);
		}
		return result;
	 }
	 
	 
	 
	 static public inline function intMax(levels:Array<Int>):Int
	 {
		var result = levels.first();
		if (levels.length == 1) return result;
		for (level in levels)
		{
			result = Std.int(Math.max(result, level));
		}
		return result;
	 }	 
	
}