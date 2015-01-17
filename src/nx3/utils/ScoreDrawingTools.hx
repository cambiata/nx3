package nx3.utils;
//import js.html.CanvasRenderingContext2D;
import nx3.PColumn;
import nx3.PScore;
import nx3.render.scaling.TScaling;

using nx3.render.scaling.ScalingTools;
using nx3.utils.DrawTools;

/**
 * ScoreDrawingTools
 * @author Jonas Nyström
 */
class ScoreDrawingTools 
{
	var score:PScore;
	var width:Float;
	var systools:nx3.PSystemsTools;
	var scaling:TScaling;
	var columnsPositions:Map<PColumn, Int>;
	var columnsPos:Map<PColumn, TPointH>;
	var columnsTime:Map<PColumn, Float>;
	var timesColumns:Array<{time: Float, column:PColumn}>;
	var columns:nx3.PColumns;
	var tempo:Int;
	var scoreWidth:Float;
	var scoreHeight:Float;
	var lastTime:Float = -1;
	var lastTimeIdx:Int = 0;
	
	#if flash  
		var context: flash.display.Graphics;
	#end 
	
	#if js  
		var context: js.html.CanvasRenderingContext2D;
	#end 

	public function new(score:PScore, width:Float, scaling:TScaling, tempo:Int=60, context: #if flash flash.display.Graphics #end #if js js.html.CanvasRenderingContext2D #end) 
	{
		this.context = context;
		this.score = score;
		this.scaling = scaling;
		this.width = width;		
		this.tempo = tempo;
		//trace('tempo' + tempo);
		this.systools = new PSystemsTools(this.score.getSystems(this.width));
		
		this.scoreWidth = this.score.getWidth() * this.scaling.unitX;
		this.scoreHeight = this.score.getHeight() * this.scaling.unitY;
		
		this.columnsPos = systools.getColumnsPointH();
		this.columns = systools.getColumns();	
		this.columnsPositions = systools.getColumnsPositions();
		this.columnsTime = systools.getColumnsTimeFixed(this.tempo, 1);
		this.timesColumns = this.systools.getTimesColumns(this.tempo).copy();
	}
	
	/*
	public function setLineStyle(color:Int, width:Float=1) {
		#if flash 
			this.context.lineStyle(width ,color);
		#end
		
		#if js
			var strokestyle =  '#' + StringTools.hex(color, 6);
			trace(strokestyle);
			this.context.strokeStyle = strokestyle;
		#end
	}
	*/
	
	public function clean() this.context.clean(this.scoreWidth, this.scoreHeight);
	
	public function drawNotesRects(color:Int=0x0000FF) {
			
		var notes = systools.getNotes();		
		var notesRects = systools.getNotesRects();			

		this.context.setLineStyle(color);
		
		for (note in notes) {			
			var noteRect = notesRects.get(note);
			var scaledRect = this.scaling.scaleRect(noteRect);
			this.context.draw(scaledRect);
		}				
	}
	
	public function drawColumns(color:Int = 0xFF0000) {		
		var columnsPos:Map<PColumn, TPointH> = systools.getColumnsPointH();
		
		this.context.setLineStyle(color);
		
		for (column in columns) {
			
			var columnPosH = columnsPos.get(column);
			var x = columnPosH.x * scaling.unitX;
			var y = columnPosH.y * scaling.unitY;			
			var h = columnPosH.height  * scaling.unitY;	

			this.context.drawLine(x, y, x, y + h);
		}		
	}
	
	public function drawColumnFromTime(time:Float, color:Int=0xff8200, width:Int=3) {

		if (lastTime == time) return;		
		var column:PColumn = null;

		var timeIdx = 0;
		var startIdx = (time > this.lastTime) ? this.lastTimeIdx : 0;
		//var startIdx = 0;
		
		
		for (i in startIdx ... this.timesColumns.length) {
			
			var timeColumn = this.timesColumns[i];
			if (timeColumn.time >= time) {
				
				var idx =Std.int(Math.max(0,  i - 1));
				column = this.timesColumns[idx].column;
				timeIdx = idx;
				break;
			}
		}


		
		
		//column = null;

		if (column == null) return;
		var pos = this.columnsPos.get(column);				

		this.clean();
		this.context.setLineStyle(color, width);
		this.context.drawLine(pos.x * scaling.unitX, pos.y * scaling.unitY, pos.x * scaling.unitX, (pos.y + pos.height) * scaling.unitY);
		
		this.lastTime = time;
		this.lastTimeIdx = timeIdx;		
	}
	
	public function setLineStyle(color:Int, width:Float=1) {
		this.context.setLineStyle(Std.int(width) ,color);
	}	
	
	
}