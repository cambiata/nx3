package nx3;
import haxe.ds.IntMap.IntMap;
import nx3.PPart;
using cx.ArrayTools;
using cx.MapTools;
/**
 * ...
 * @author Jonas Nyström
 */

 

 class PPartComplexesGenerator 
 {
	 var part:PPart;
	 
	 public var vvoices(default, null) :PVoices;
	 public function new(part:PPart) 
	 { 
		 this.part = part;
		this.vvoices = part.getVoices();
		//this.part = this.vvoices.first().part;
	  }
	  
	  var complexes:PComplexes;
	  public function getComplexes():PComplexes
	  {
		  if (this.complexes != null) return this.complexes;
		  this.positionsMap = calcPositionsMap();
		  calcComplexes(this.positionsMap);
		  return this.complexes;
	  }
	  
	  /*
	  var positionsComplexes:IntMap<PComplex>;
	  public function getPositionsComplexes():IntMap<PComplex>
	  {
		  if (this.complexes == null) this.getComplexes();
		  return this.positionsComplexes;
	  }
	  */
	  
	  /*
	  var complexesPositions:Map<PComplex, Int>;
	  public function getComplexesPositions():Map<PComplex, Int>
	  {
		  if (this.complexes == null) this.getComplexes();
		  return this.complexesPositions;
	  }
	  */
	  function calcComplexes(positions:Map < Int, PNotes> )
	  {
		  this.complexes = [];
		  var poskeys = positions.keys().keysToArray();
		  poskeys = poskeys.sortarray();
		  for (pos in poskeys)
		  {
			  var vnotes = positions.get(pos);
			  var vcomplex = new PComplex( this.part, vnotes, pos);
			  this.complexes.push(vcomplex);
		  }
	  }
	  
	  var positionsMap: Map<Int, PNotes>;
	  
	  
	  function calcPositionsMap()
	  {
		  var positionsMap = new Map<Int, PNotes>();
		  for (vvoice in this.vvoices)
		  {
			  for (vnote in vvoice.getNotes())
			  {
				  var npos = vvoice.getNotePositions().get(vnote);
				  if (!positionsMap.exists(npos)) positionsMap.set(npos, []);
				  positionsMap.get(npos).push(vnote);
			  }
		  }
		  return positionsMap;
	  }
	  
}
