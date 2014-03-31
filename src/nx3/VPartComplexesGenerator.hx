package nx3;
import haxe.ds.IntMap.IntMap;
using nx3.VMapTools;
/**
 * ...
 * @author Jonas Nyström
 */

 

 class VPartComplexesGenerator 
 {
	 public var vvoices(default, null) :VVoices;
	 public function new(vvoices: VVoices) 
	 { 
		this.vvoices = vvoices;
	  }
	  
	  var complexes:VComplexes;
	  public function getComplexes():VComplexes
	  {
		  if (this.complexes != null) return this.complexes;
		  this.positionsMap = calcPositionsMap();
		  calcComplexes(this.positionsMap);
		  return this.complexes;
	  }
	  
	  var positionsComplexes:IntMap<VComplex>;
	  public function getPositionsComplexes():IntMap<VComplex>
	  {
		  if (this.complexes == null) this.getComplexes();
		  return this.positionsComplexes;
	  }
	  
	  var complexesPositions:Map<VComplex, Int>;
	  public function getComplexesPositions():Map<VComplex, Int>
	  {
		  if (this.complexes == null) this.getComplexes();
		  return this.complexesPositions;
	  }
	  
	  function calcComplexes(positions:Map < Int, Array<VNote> > )
	  {
		  this.complexes = [];
		  this.positionsComplexes = new IntMap<VComplex>();
		  this.complexesPositions = new Map<VComplex, Int>();
		  var poskeys = positions.keys().keysToArray();
		  poskeys = poskeys.sortarray();
		  for (pos in poskeys)
		  {
			  var vnotes = positions.get(pos);
			  var vcomplex = new VComplex(vnotes);
			  this.complexes.push(vcomplex);
			  this.positionsComplexes.set(pos, vcomplex);
			  this.complexesPositions.set(vcomplex, pos);
		  }
	  }
	  
	  var positionsMap: Map<Int, VNotes>;
	  function calcPositionsMap()
	  {
		  var positionsMap = new Map<Int, VNotes>();
		  for (vvoice in this.vvoices)
		  {
			  for (vnote in vvoice.getVNotes())
			  {
				  var npos = vvoice.getVNotePositions().get(vnote);
				  if (!positionsMap.exists(npos)) positionsMap.set(npos, []);
				  positionsMap.get(npos).push(vnote);
			  }
		  }
		  return positionsMap;
	  }
	  
}
