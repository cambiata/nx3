package nx3;
import haxe.ds.IntMap.IntMap;


/**
 * ...
 * @author Jonas Nyström
 */
using cx.ArrayTools;
 using nx3.ENoteValTools;
using nx3.geom.Rectangles.RectanglesTools;
 
 class VBar
 {
	 public var nbar(default, null):NBar;
	 public function new(nbar:NBar) this.nbar = nbar;

	 public var clefs(get, null):EClefs;
	 public var keys(get, null):EKeys;
	 public var time(get, null):ETime;	 
	 
	 var _clefs:EClefs = null;
	 private function get_clefs():EClefs
	 {
		 if (this._clefs != null) return this._clefs;
		 this._clefs = new EClefs();
		 for (vpart in this.getVParts()) this._clefs.push(vpart.npart.clef);
		 return this._clefs;
	 }

	 var _keys:EKeys = null;
	 private function get_keys():EKeys
	 {
		 if (this._keys != null) return this._keys;
		 this._keys = new EKeys();
		 for (vpart in this.getVParts()) this._keys.push(vpart.npart.key);
		 return this._keys;
	 }
	 
	 private function get_time():ETime
	 {
		 return this.nbar.time;
	 }

	 public var displayClefs(get, null):EDisplayALN;
	 public var displayKeys(get, null):EDisplayALN;
	 public var displayTime(get, null):EDisplayALN;
	 
	 public function get_displayClefs():EDisplayALN
	 {
		 var result = EDisplayALN.Never;
		 for (vpart in this.getVParts())
		 {
			 if (vpart.npart.clefDisplay == null) result = EDisplayALN.Layout;
			 if (vpart.npart.clefDisplay == EDisplayALN.Layout) result = EDisplayALN.Layout;
			 if (vpart.npart.clefDisplay == EDisplayALN.Always) 
			 {
				 result = EDisplayALN.Always;
				 break;
			 }
		 }
		 return result;
	 }

	 public function get_displayKeys():EDisplayALN
	 {
		 var result = EDisplayALN.Never;
		 for (vpart in this.getVParts())
		 {
			 if (vpart.npart.keyDisplay == null) result = EDisplayALN.Layout;
			 if (vpart.npart.keyDisplay == EDisplayALN.Layout) result = EDisplayALN.Layout;
			 if (vpart.npart.keyDisplay == EDisplayALN.Always) 
			 {
				 result = EDisplayALN.Always;
				 break;
			 }
			 
		 }
		 return result;
	 }
	 
	 public function get_displayTime():EDisplayALN
	 {
		 var result = this.nbar.timeDisplay != null ? this.nbar.timeDisplay : EDisplayALN.Layout;
		 return this.nbar.timeDisplay;
	 }
	 
	 
	 
	 
	 
	 var vparts:VParts;
	 public function getVParts():VParts
	 {
		 if (this.vparts != null) return this.vparts;
		 this.vparts = [];
		 for (npart in this.nbar.nparts)  this.vparts.push(new VPart(npart));
		 return this.vparts;
	 }	 
	 
	 var vcolumns:VColumns;
	 public function getVColumns():VColumns
	 {
		 if (this.vcolumns != null) return this.vcolumns;
		 if (this.vparts == null) this.getVParts();
		 var generator = new VBarColumnsGenerator(this.vparts);
		 this.vcolumns = generator.getColumns();
		 this.positionsVColumns = generator.getPositionsColumns();
		 return this.vcolumns;
	 }
	 
	 var positionsVColumns:IntMap<VColumn>;
	 public function getPositionsColumns():IntMap<VColumn>
	 {
		 if (this.positionsVColumns == null) this.getVColumns();
		 return this.positionsVColumns;
	 }
	
	 var vcolumnsPositions:Map<VColumn, Int>;
	 public function getVColumnsPositions():Map<VColumn, Int>
	 {
		 if (this.positionsVColumns == null) this.getVColumns();
		 
		 this.vcolumnsPositions = new Map<VColumn, Int>();
		 
		 for (pos in this.positionsVColumns.keys())
		 {
			 var vcolumn = this.positionsVColumns.get(pos);
			 this.vcolumnsPositions.set(vcolumn, pos);
		 }
		 
		 return this.vcolumnsPositions;
	 }
	 
	 
	var value:Null<Int>;
	public function getValue():Int
	{
		if (this.value != null) return this.value;
		var value = .0;
		for (vpart in this.getVParts())
		{
			value = Math.max(value, vpart.getValue());
		}
		this.value = Std.int(value);
		return this.value;
	}
	
	var vnotesVColumns:Map<VNote, VColumn>;
	 public function getVNotesVColumns(): Map<VNote, VColumn>
	 {
		 if (this.vnotesVColumns != null) return this.vnotesVColumns;
		 this.vnotesVColumns = new Map<VNote, VColumn>();
		 for (vpart in this.getVParts())
		 {
			 for (vvoice in vpart.getVVoices())
			 {
				for (vnote in vvoice.getVNotes())
				{
					var pos = vvoice.getVNotePositions().get(vnote);
					var vcolumn = this.getPositionsColumns().get(pos);
					this.vnotesVColumns.set(vnote, vcolumn);
				}
			 }
		 }
		 return this.vnotesVColumns;
	 }
	 
	 var vcomplexesVColumns:Map<VComplex, VColumn>;
	 public function getVComplexesVColumns():Map<VComplex, VColumn>
	 {
		 if (this.vcomplexesVColumns != null) return this.vcomplexesVColumns;
		 this.vcomplexesVColumns = new Map<VComplex, VColumn>();
		 for (vpart in this.getVParts())
		 {
			 //vpart.getPositionsVComplexes().get(
			 for (vcomplex in vpart.getVComplexes())
			 {
				 var pos = vpart.getVComplexesPositions().get(vcomplex);
				 var vcolumn = this.getPositionsColumns().get(pos);
				 this.vcomplexesVColumns.set(vcomplex, vcolumn);
			 }
		 }
		 return this.vcomplexesVColumns;
	 }
	 
	 // ======================================================================
	 // distances
	 
	 var vcolumnsMinDistances: Map < VColumn, Float >;
	 var vcolumnsMinPositions: Map < VColumn, Float >;
	 
	 public function getVColumnsMinDistances() : Map < VColumn, Float >
	 {
		 if (this.vcolumnsMinDistances != null) return this.vcolumnsMinDistances;		 
		 var distancesData = new VBarColumnsMinDistancesGenerator(this).getDistancesData();
		 
		 this.vcolumnsMinDistances = distancesData.distances;
		 this.vcolumnsMinPositions = distancesData.positions;
		 return this.vcolumnsMinDistances;
	 }
	 
	 public function getVColumnsMinPositions():Map<VColumn, Float>
	 {
		 if (this.vcolumnsMinPositions != null) return this.vcolumnsMinPositions;
		 if (this.vcolumnsMinDistances == null) this.getVColumnsMinDistances();
		 return this.vcolumnsMinPositions;		 		 
	 }
	 
	 var vcolumnsMinWidth:Null<Float>;
	 public function getVColumnsMinWidth():Float
	 {
		 if (this.vcolumnsMinWidth != null)  return this.vcolumnsMinWidth;
		 if (this.vcolumnsMinDistances == null) this.getVColumnsMinDistances();
		 var lastColumn:VColumn = this.getVColumns().last();
		 var lastPosition = this.getVColumnsMinPositions().get(lastColumn);
		 var lastDistance = this.getVColumnsMinDistances().get(lastColumn);
		 this.vcolumnsMinWidth = lastPosition + lastDistance;
		return this.vcolumnsMinWidth; 
	 }
	 
 }