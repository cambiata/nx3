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
	var valueposition:Int;	
	 public function new(bar:PBar,complexes:PComplexes, valueposition:Int, value:Int) 
	 { 
		 this.bar = bar;
		this.complexes = complexes;
		this.valueposition = valueposition;
		this.value = value;
		this.xposition = 0.0;
		this.distanceBenefit = 0;
	 }
	 
	 public function getComplexes():PComplexes
	 {
		 return this.complexes;
	 }
	 
	 public function getValueposition():Int
	 {
		 return this.valueposition;
	 }
	 
	 var value:Int;
	 public function getValue():Int 
	 {
		return this.value;
	 }	 
	 
	 
	 var distance:Null<Float>;
	 public function getDistance():Float
	 {
		  if (this.distance == null) throw "Shouldnt be null";
		 return this.distance;
	 }
	
	 
	 var distanceBenefit:Null<Float>;
	 public function getDistanceBenefit():Float
	 {
		 if (this.distanceBenefit != null) return this.distanceBenefit;
		 this.distanceBenefit = Math.max(0, this.getDistance() - Constants.HEAD_WIDTH_NORMAL);
		 return this.distanceBenefit;
	 }
	 
	 var valuedelta:Null<Float>;
	 public function getValueDelta():Float
	 {
		 if (this.valuedelta != null) return this.valuedelta;
		this.valuedelta = this.getValue() / this.bar.getValue() ;
		 return this.valuedelta;		 
	 }
	 
	 var xposition:Null<Float>;	 
	 /*
	 public function setXPosition(val:Float):PColumn
	 {
		 this.xposition = val;
		 return this;
	 }
	 */
	 public function getXPosition():Float 
	 {		 
		 return this.xposition;
	 }
	 
	 var aposition:Null<Float>;
	 public function getAPostion():Float
	 {
		if (this.aposition != null) return this.aposition;
		this.bar.calculateAPositions();
		if (this.aposition == null) throw "this shouldn't happen";
		return this.aposition;
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