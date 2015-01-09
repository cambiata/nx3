package nx3;
import nx3.PSystem;

/**
 * PSystemTools
 * @author Jonas Nyström
 */
class PSystemTools 
{
	var system:PSystem;

	public function new(system:PSystem) 
	{
		this.system = system;
	}
	
	var sysbarColumns:Map<PColumn, PSystemBar>;
	public function  getSysbarsColumns(): Map<PColumn, PSystemBar> {
		if (this.sysbarColumns != null) return this.sysbarColumns;		
		this.sysbarColumns = new Map<PColumn, PSystemBar>();
		for (sysbar in this.system.getSystembars()) {
			for (column in sysbar.bar.getColumns()) {
				this.sysbarColumns.set(column, sysbar);
			}			
		}		
		return this.sysbarColumns;		
	}
	
	var columns:PColumns;
	public function getColumns():PColumns {
		
		if (this.columns != null) return this.columns;
		this.columns = [];		
		for (sysbar in this.system.getSystembars()) {
			for (column in sysbar.bar.getColumns()) {
				this.columns.push(column);			
			}			
		}		
		return this.columns;
	}	
	
	
	var columnsPointH:Map<PColumn, TPointH>;
	public function getColumnsPointH() {
		
		if (this.columnsPointH != null) return this.columnsPointH;
		this.columnsPointH = new Map<PColumn, TPointH>();
		
		var ADD_TO_ENDS = 4;
		
		for (column in this.getColumns()) {
			var sysbar:PSystemBar = this.getSysbarsColumns().get(column);
			
			var contentX = sysbar.getBarMeasurements().getContentXPosition();
			var columnX = column.getSPosition();
			var sysbarX = sysbar.getXPosition();
			
			var x =  sysbarX + contentX + columnX;			
			var y = this.system.getTopPartY() - ADD_TO_ENDS;
			var y2 = this.system.getBottomPartY() + ADD_TO_ENDS;
			var h = y2 - y;
			this.columnsPointH.set(column,{x:x, y:y, height:h});
		}
		return this.columnsPointH;
	}
}