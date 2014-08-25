package nx3;
 import haxe.ds.IntMap.IntMap;
 import nx3.PBar;
 using cx.MapTools;
 using cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */
@:access(nx3.PComplex)
 
class PColumnsGenerator
 {
	 var vparts:PParts;
	 public function new(bar:PBar) 
	 { 		 
		 this.bar = bar;
		this.vparts = this.bar.getParts();
	 }
	 
	 var positions:Array<Int>;
	 var columns:PColumns;
	 var positionsColumns:IntMap<PColumn>;
	 var bar:PBar;
	 
	 public function getColumns():PColumns
	 {
		if (this.columns != null) return this.columns;
		 this.positions =  calcPositions(this.vparts);		 		
		calcColumns(this.positions, this.vparts);
		
		
		return this.columns;
	 }
	 
	 /*
	 public function getPositionsColumns():IntMap<PColumn>
	 {
		 if (this.columns == null) this.getColumns();
		 return this.positionsColumns;
	 }
	 */
	 
	 /*
	 var vcomplexesVColumns: Map<PComplex, PColumn>;
	 public function getVComplexesVColumns():Map<PComplex, PColumn>
	 {
		 if (this.columns == null) this.getColumns();
		 return this.vcomplexesVColumns;
	 }
	 */
	 
	 function calcColumns(positions:Array<Int>, vparts:PParts)
	 {
		 var partsCount = vparts.length;
		this.columns = [];
		this.positionsColumns = new IntMap<PColumn>();
		
		var barvalue = this.bar.getValue();

		var idx = 0;
		 for (pos in positions)
		 {
			 var nextpos = ArrayTools.indexOrNull(positions, idx + 1);
			 if (nextpos == null) nextpos = barvalue;
			 var value = nextpos - pos;
			 
			 var vcomplexes:PComplexes = [];

			 for (i in 0...this.vparts.length)
			 {				
				 var part = this.vparts[i];		
				var x = part.getPositionsComplexes();
				
				var complex:PComplex = part.getPositionsComplexes().get(pos);
				vcomplexes.push(complex);
			 }

			var vcolumn = new PColumn(this.bar, vcomplexes, pos, value);

			
			this.columns.push(vcolumn);
			
			for (complex in vcomplexes) 
			{
				if (complex != null) complex.column = vcolumn;
			}			
			this.positionsColumns.set(pos, vcolumn);			
			
			
			idx++;
		 }
		 
	 }
	 
	 function calcPositions(vparts:PParts)
	 {
		 var positionsMap = new IntMap<Bool>();
		 
		for (vpart in vparts)
		{
			var poss = vpart.getPositionsComplexes().keys().keysToArray().copy();
			for (pos in poss) positionsMap.set(pos, true);
		}
		
		var positions:Array<Int> = positionsMap.keys().keysToArray();
		//trace(positions);
		positions.sort(function(a, b) { return Reflect.compare(a, b); } );
		//trace(positions);
		return positions;
	 }
	 
	 
 }