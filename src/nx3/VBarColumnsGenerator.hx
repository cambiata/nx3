package nx3;

/**
 * ...
 * @author Jonas Nyström
 */

 import haxe.ds.IntMap.IntMap;
 using nx3.VMapTools;

 class VBarColumnsGenerator 
 {
	 var vparts:VParts;
	 public function new(vparts:VParts) 
	 { 
		this.vparts = vparts;
	 }
	 
	 var positions:Array<Int>;
	 var columns:VColumns;
	 var positionsColumns:IntMap<VColumn>;
	 
	 public function getColumns():VColumns
	 {
		if (this.columns != null) return this.columns;
		 this.positions =  calcPositions(this.vparts);		 
		calcColumns(this.positions, this.vparts);
		return this.columns;
	 }
	 
	 public function getPositionsColumns():IntMap<VColumn>
	 {
		 if (this.columns == null) this.getColumns();
		 return this.positionsColumns;
	 }
	 
	 var vcomplexesVColumns: Map<VComplex, VColumn>;
	 public function getVComplexesVColumns():Map<VComplex, VColumn>
	 {
		 if (this.columns == null) this.getColumns();
		 return this.vcomplexesVColumns;
	 }
	 
	 function calcColumns(positions:Array<Int>, vparts:VParts)
	 {
		 var partsCount = vparts.length;
		this.columns = [];
		this.positionsColumns = new IntMap<VColumn>();
		
		 for (pos in positions)
		 {
			// var vcolumn:VColumns = null;
			 var vcomplexes:VComplexes = [];
			 for (vpart in vparts)
			 {
				var complex:VComplex = vpart.getPositionsVComplexes().get(pos);
				vcomplexes.push(complex);
			 }
			 
			var vcolumn = new VColumn(vcomplexes);
			this.columns.push(vcolumn);
			this.positionsColumns.set(pos, vcolumn);
		 }
		 
	 }
	 
	 function calcPositions(vparts:VParts)
	 {
		 var positionsMap = new IntMap<Bool>();
		 
		for (vpart in vparts)
		{
			var poss = vpart.getPositionsVComplexes().keys().keysToArray();
			for (pos in poss) positionsMap.set(pos, true);
		}
		
		var positions:Array<Int> = positionsMap.keys().keysToArray();
		//trace(positions);
		positions.sort(function(a, b) { return Reflect.compare(a, b); } );
		//trace(positions);
		return positions;
	 }
	 
	 
 }