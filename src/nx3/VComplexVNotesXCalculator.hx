package nx3;

/**
 * ...
 * @author Jonas Nyström
 */

 import nx3.elements.VTree;
 
class VComplexVNotesXCalculator
{
	var vcomplex:VComplex;
	public function new(vcomplex:VComplex)
	{
		this.vcomplex = vcomplex;
	}
	
	public function getVNotesX():Array<Float>
	{
		if (this.vcomplex.vnotes.length == 1) return [0];
		
		var vnote0:VNote = this.vcomplex.vnotes[0];
		var vnote1:VNote = this.vcomplex.vnotes[1];
		
		var vnote0bottom = vnote0.nnote.getBottomLevel();
		var vnote1top = vnote1.nnote.getTopLevel();
		
		if (vnote1top <= vnote0bottom)
		{
			return [0, 2];
		}
		else if (vnote1top == vnote0bottom + 1)
		{
			return [0, 1];
		}
		else
		{
			return [0, 0];
		}
		throw "shouldn't happen";		
	}
}