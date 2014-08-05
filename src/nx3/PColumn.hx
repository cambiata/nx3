package nx3;
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;
import nx3.PBar;
import nx3.PComplexes;
using cx.ArrayTools;

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
	 
	 var value:Null<Int>;
	 public function getValue():Int 
	 {
		 if (this.value == null) throw "value shouldnt be null";
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
	 
	 
	 
	 var allottedDistance:Float = 0;
	 var distancedelta:Null<Float>;
	 public function getDistanceDelta():Float
	 {
		 if (this.distancedelta != null) return this.distancedelta;
		this.bar.getContentwidth();
		 this.distancedelta = this.allottedDistance / this.bar.getAllottedDistanceSum();
		 return this.distancedelta;		 
	 }
	 
	 var mposition:Null<Float>;	 

	 public function getMPosition():Float 
	 {		 
		 return this.mposition;
	 }
	 
	 var adistance:Null<Float>;
	 public function getADistance():Float
	 {
		if (this.adistance != null) return this.adistance;
		this.bar.calculateAPositions();
		//if (this.aposition == null) throw "aposition shouldn't be null";
		return this.adistance;
	 }	 
	 
	 var adistanceBenefit:Null<Float>;
	 public function getADistanceBenefit():Float return adistanceBenefit;
	 
	 var aposition:Null<Float>;
	 public function getAPostion():Float
	 {
		if (this.aposition != null) return this.aposition;
		this.bar.calculateAPositions();
		//if (this.aposition == null) throw "aposition shouldn't be null";
		return this.aposition;
	 }
	 
	 
	 var sposition:Null<Float>;
	 public function getSPosition():Float
	 {
		 if (this.sposition != null) return this.sposition;
		 
		 // OBS!!!
		 // this.sposition is set from PBarStrecthCalculator!
		 
		return this.getAPostion(); 
	 }
	 
	 var rightX:Null<Float>;
	 public function getRightX():Float
	 {
		 if (this.rightX != null) return this.rightX;
		 this.rightX = 0;
		for (complex in this.getComplexes())
		{
			if (complex != null)
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
			if (complex != null) this.leftX = Math.min(this.leftX, complex.getLeftX());
		}	
		return this.leftX;
	 }
	 
	 public function getNextComplex(complex:PComplex):PComplex
	 {
		if (this == this.bar.getColumns().last()) return null;
		 var partIndex = this.getComplexes().indexOf(complex);
		 var nextColumnIdx = this.bar.getColumns().indexOf(this)+1;
		 for (ci in nextColumnIdx...this.bar.getColumns().length)
		 {
			 var complex = this.bar.getColumns()[ci].getComplexes()[partIndex];
			 if (complex != null) return complex;			 
		 }
		 return null;
	 }
	 	 
	 public function toString():String
	 {
		 return "PColumn";
	 }	 
	 
	 
}


