package nx3;

import haxe.ds.IntMap.IntMap;
using cx.ArrayTools;

/**
 * ...
 * @author Jonas Nyström
 */

 class VBarColumnsMinDistancesGenerator
 {
	 var vbar:VBar;
	 
	 public function new(vbar:VBar)
	 {
		 this.vbar = vbar;
	 }
	 
	 public function getDistancesData(): {distances:Map<VColumn, Float>, positions:Map<VColumn, Float>}
	 {
		 var distances = this.getDistances(); 
		 var positions = this.getPositions(distances); 
		 return { distances:distances, positions:positions };
	 }
	 
	 private function getDistances(): Map<VColumn, Float>
	 {
		var distances = new Map < VColumn, Float >();		
		var positions = new Map < VColumn, Float >();
		
		var nrOfColumns = this.vbar.getVColumns().length;
		var nrOfParts = this.vbar.getVParts().length;
		
		var prevComplexBucket = new IntMap<VComplex>();
		var prevColumnBucket = new IntMap<VColumn>();
		
		var curpos:Float = 0;
		
		for (ic in 0...nrOfColumns)
		 {
			var column:VColumn = this.vbar.getVColumns()[ic];
			var nextColumn:VColumn = this.vbar.getVColumns().indexOrNull(ic + 1);
			
			var maxdist:Float = 0;
			for (ip in 0...nrOfParts)
			{				
				var vpart = this.vbar.getVParts()[ip];				
				var complex:VComplex  = column.vcomplexes[ip];							
				var nextcomplex:VComplex  = (nextColumn != null) ? nextColumn.vcomplexes[ip] : null;

				//trace('PART $ip');
				if (complex != null && nextcomplex != null)
				{
					//trace( '- both');
					var dist = new VPartComplexesMinDistancesCalculator(vpart).getDistance(complex, nextcomplex);
					//trace(dist);
					maxdist = Math.max(maxdist, dist);
					//trace(' - store complex in bucket');
					prevComplexBucket.set(ip, complex);
					prevColumnBucket.set(ip, column);
				}
				else if (complex == null && nextcomplex != null)
				{
					//trace('- NO complex but nextcomplex');
					maxdist = Math.max(Constants.HEAD_HALFWIDTH_NORMAL*2, maxdist);
				}
				else if (complex != null && nextcomplex == null)
				{
					var dist = new VPartComplexesMinDistancesCalculator(vpart).getDistance(complex, nextcomplex);
					maxdist = Math.max(maxdist, dist);					
					prevComplexBucket.set(ip, complex);
					prevColumnBucket.set(ip, column);
				}
				else
				{
					// both current column and next are null...
				}
			}
			
			distances.set(column, maxdist);
			positions.set(column, curpos);
			curpos = /*MathTools.round2*/(curpos + maxdist);
			//trace(curpos);
			//trace('--- store position for column $ic : $curpos');			
		 }		 
		
		/*
		 for (key in this.vbar.getVColumns())
		 {
			 trace([positions.get(key), distances.get(key)]);
		 }
		*/
		 
		 return distances;
	 }	 

	 private function getPositions(distances:Map<VColumn, Float>):Map<VColumn, Float>
	 {
		 var positions = new Map<VColumn, Float>();
		 var curpos:Float = this.getFirstColumnPosition();
		
		 for (vcolumn in this.vbar.getVColumns())
		 {
			 var distance = distances.get(vcolumn);			 
			 positions.set(vcolumn, curpos);
			curpos = /*MathTools.round2*/(curpos + distance);
		 }
		
		/*
		 for (key in positions.keys())
		 {
			 trace(positions.get(key));
		 }		 
		*/
		 
		 return positions;
	 }
	 
	 private function getFirstColumnPosition():Float
	 {
		 var pos:Float = 0;
		 
		 for (vpart in this.vbar.getVParts())
		 {
			 var distanceCalculator = new VPartComplexesMinDistancesCalculator(vpart);
			 var firstcomplex = vpart.getVComplexes().first();
			 var distancedata = distanceCalculator.getComplexLeftside(firstcomplex);			
			 for (rect in distancedata.rects)
			 {
				 pos = Math.max(pos, -rect.x);				 
			 }
		 }	
		 return pos;
	 }
 }
 