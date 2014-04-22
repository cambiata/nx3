package nx3;
import nx3.PBar;
import nx3.PComplexes;

/**
 * ...
 * @author Jonas Nyström
 */
class PColumn
{
	var bar:PBar;
	var complexes:PComplexes;
	var position:Int;	
	 public function new(bar:PBar,complexes:PComplexes, pos:Int, value:Int) 
	 { 
		 this.bar = bar;
		this.complexes = complexes;
		this.position = pos;
		this.value = value;
		this.xposition = 0.0;
		this.distanceBenefit = 0;
	 }
	 
	 public function getComplexes():PComplexes
	 {
		 return this.complexes;
	 }
	 
	 public function getPosition():Int
	 {
		 return this.position;
	 }
	 
	 public function getValue():Int return this.value;
	 
	 var distance:Float;
	 public function setDistance(val:Float):PColumn
	 {
		 this.distance = val;
		 this.distanceBenefit = Math.max(0, this.distance - Constants.HEAD_HALFWIDTH_NORMAL * 2);
		 return this;
	 }
	 
	 var distanceBenefit:Null<Float>;
	 public function getDistanceBenefit():Float
	 {
		 if (this.distanceBenefit == null) throw "Shouldnt be null";
		 return this.distanceBenefit;
	 }
	 
	 var valuedelta:Null<Float>;
	 public function getValueDelta():Float
	 {
		 if (this.valuedelta != null) return this.valuedelta;
		this.valuedelta = this.getValue() / this.bar.getValue() ;
		 return this.valuedelta;		 
	 }
	 
	 var xposition:Float;
	 var value:Int;
	 public function setXPosition(val:Float):PColumn
	 {
		 this.xposition = val;
		 return this;
	 }
	 public function getXPosition():Float 
	 {		 
		 return this.xposition;
	 }
	 
	 public function toString():String
	 {
		 return "PColumn";
	 }
	 
}

class PColumn2
{
	var bar:PBar;
	//var complexes:PComplexes;
	var position:Int;	
	public function new(bar:PBar, pos:Int)
	{

		
	}
	
}