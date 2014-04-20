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
	 public function new(bar:PBar,complexes:PComplexes, pos:Int) 
	 { 
		 this.bar = bar;
		this.complexes = complexes;
		this.position = pos;
		this.xposition = 0.0;
	 }
	 
	 public function getComplexes():PComplexes
	 {
		 return this.complexes;
	 }
	 
	 public function getPosition():Int
	 {
		 return this.position;
	 }
	 
	 var distance:Float;
	 public function setDistance(val:Float):PColumn
	 {
		 this.distance = val;
		 return this;
	 }
	 
	 var xposition:Float;
	 public function setXPosition(val:Float):PColumn
	 {
		 this.xposition = val;
		 return this;
	 }
	 public function getXPosition():Float return this.xposition;
	 
	 
	 
	 
	 public function toString():String
	 {
		 return "hello";
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