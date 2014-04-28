package nx3;
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;
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
		this.mposition = 0.0;
		this.mdistanceBenefit = 0;
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
	 
	 
	 var mdistance:Null<Float>;
	 public function getMDistance():Float
	 {
		  if (this.mdistance == null) throw "mdistance shouldnt be null";
		 return this.mdistance;
	 }
	
	 /*
	 var mwidth:Null<Float>;
	 public function getMWidth():Float
	 {
		  if (this.mwidth == null) throw "Shouldnt be null";
		 return this.mwidth;
	 }	 
	 */
	 
	 var mdistanceBenefit:Null<Float>;
	 public function getMDistanceBenefit():Float
	 {
		 if (this.mdistanceBenefit != null) return this.mdistanceBenefit;
		 this.mdistanceBenefit = Math.max(0, this.getMDistance() - Constants.HEAD_WIDTH_NORMAL);
		 return this.mdistanceBenefit;
	 }
	 
	 var valuedelta:Null<Float>;
	 public function getValueDelta():Float
	 {
		 if (this.valuedelta != null) return this.valuedelta;
		this.valuedelta = this.getValue() / this.bar.getValue() ;
		 return this.valuedelta;		 
	 }
	 
	 var mposition:Null<Float>;	 

	 public function getMPosition():Float 
	 {		 
		 return this.mposition;
	 }
	 
	 var aposition:Null<Float>;
	 public function getAPostion():Float
	 {
		if (this.aposition != null) return this.aposition;
		this.bar.calculateAPositions();
		if (this.aposition == null) throw "this shouldn't happen";
		return this.aposition;
	 }
	 
	 var rightX:Null<Float>;
	 public function getRightX():Float
	 {
		 if (this.rightX != null) return this.rightX;
		 this.rightX = 0;
		for (complex in this.getComplexes())
		{
			this.rightX = Math.max(this.rightX, complex.getRightX());			
		}
		return this.rightX;
	 }
	 
	 var leftX:Null<Float>;
	 public function getLeftX():Float
	 {
		 if (this.leftX != null) return this.leftX;
		 this.leftX = 0;
		for (complex in this.getComplexes())
		{			
			this.leftX = Math.min(this.leftX, complex.getLeftX());			
		}
		return this.leftX;
	 }
	 
	 
	 
	 public function toString():String
	 {
		 return "PColumn";
	 }
	 
	 
	 
	 
	 
}


