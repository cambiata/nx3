package nx3;
import nx3.audio.NotenrBarsCalculator;
import nx3.audio.NotenrItem;
import nx3.audio.NotenrTools;
import nx3.geom.Point;
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;
import nx3.geom.RectangleTools;
import nx3.PSystems;
import nx3.utils.VoiceSplitter;
using Lambda;

/**
 * PSystemsTools
 * @author Jonas Nyström
 */

class PSystemsTools 
{
	var systems:PSystems;
	public function new(systems:PSystems) {
		this.systems = systems;
	}
	
	var columns:PColumns;		
	public function getColumns():PColumns {		
		if (this.columns != null) return this.columns;
		this.columns = [];		
		for (system in this.systems) {
			for (sysbar in system.getSystembars()) {
				for (column in sysbar.bar.getColumns()) {
					this.columns.push(column);			
				}			
			}				
		};
		return this.columns;		
	}
	
	var columnsSysbars:Map<PColumn, PSystemBar>;
	public function  getColumnsSysbars(): Map<PColumn, PSystemBar> {
		if (this.columnsSysbars != null) return this.columnsSysbars;		
		this.columnsSysbars = new Map<PColumn, PSystemBar>();
		for (system in this.systems) {
			for (sysbar in system.getSystembars()) {
				for (column in sysbar.bar.getColumns()) {
					this.columnsSysbars.set(column, sysbar);
				}			
			}		
		}
		return this.columnsSysbars;		
	}	
	
	var columnsPointH:Map<PColumn, TPointH>;
	public function getColumnsPointH() {
		if (this.columnsPointH != null) return this.columnsPointH;
		this.columnsPointH = new Map<PColumn, TPointH>();
		var ADD_TO_ENDS = 4;		
		for (column in this.getColumns()) {
			var sysbar:PSystemBar = this.getColumnsSysbars().get(column);
			
			var contentX = sysbar.getBarMeasurements().getContentXPosition();
			var columnX = column.getSPosition();
			var sysbarX = sysbar.getXPosition();
			
			var systemY = sysbar.system.getY();
			
			var x =  sysbarX + contentX + columnX;				
			var y = systemY+ sysbar.system.getTopPartY() - ADD_TO_ENDS;
			var y2 = systemY + sysbar.system.getBottomPartY() + ADD_TO_ENDS;
			var h = y2 - y;
			this.columnsPointH.set(column,{x:x, y:y, height:h});
		}
		return this.columnsPointH;
	}	

	var pnotes:PNotes;
	public function getNotes():PNotes {
		if (this.pnotes != null) return this.pnotes else this.pnotes = [];
		for (system in this.systems) {
			for (sysbar in system.getSystembars()) {
				for (part in sysbar.bar) {
					for (voice in part) {
						for (note in voice) {
							this.pnotes.push(note);							
						}
					}
				}
			}
		}
		return this.pnotes;
	}
	
	
	var pnotesParts:Map<PNote, PPart>;
	public function getNotesParts():Map<PNote, PPart> {
		if (this.pnotesParts != null) return this.pnotesParts else this.pnotesParts = new Map<PNote, PPart>();	
		for (system in this.systems) {
			for (sysbar in system.getSystembars()) {
				for (part in sysbar.bar) {
					for (voice in part) {
						for (note in voice) {
							this.pnotesParts.set(note, part);					
						}
					}
				}
			}
		}
		return this.pnotesParts;		
	}
	
	var pnotesRects:Map<PNote, Rectangle>;
	public function getNotesRects():Map<PNote, Rectangle> {
		if (this.pnotesRects != null) return this.pnotesRects else this.pnotesRects = new Map<PNote, Rectangle>();		
		for (note in this.getNotes()) {			
			var column:PColumn = note.getComplex().getColumn();
			var columnPointH = this.getColumnsPointH().get(column);
			var part = this.getNotesParts().get(note);
			var partIdx = part.getIndex();
			var sysbar:PSystemBar = this.getColumnsSysbars().get(column);
			var system:PSystem = sysbar.system;			
			var noteRect = RectangleTools.union( note.getHeadsRects());
			noteRect.offset(columnPointH.x, system.getY() + system.getPartY(partIdx));
			this.pnotesRects.set(note, noteRect);						
		}
		return this.pnotesRects;		
	}
	
	public function getNoteFromCoord(x:Float, y:Float) :PNote {
		var point = new Point(x, y);
		for (note in this.getNotes()) {			
			var rect = this.getNotesRects().get(note);
			if (rect.containsPoint(point)) return note;			
		}
		return null;		
	}
	
	var nbars:NBars;	
	public function getNBarsFromSystems():NBars {		
		if (this.nbars != null) return this.nbars else this.nbars = [];
		for (system in this.systems) {
			for (sysbar in system.getSystembars()) {
				var nbar = sysbar.bar.nbar;
				nbars.push(nbar);				
			}			
		}
		return this.nbars;
	}	
	
	var notesNotenritems:Map<NNote, NotenrItem> ;
	public function getNotesNotenritems(): Map<NNote, NotenrItem> {
		if (notesNotenritems != null) return this.notesNotenritems;
		this.notesNotenritems = new Map<NNote, NotenrItem> ();
		var nbars = this.getNBarsFromSystems();		
		if (VoiceSplitter.canSplit(nbars)) nbars = new VoiceSplitter(nbars).getVoicesplittedNBars();
		var partsnotes:PartsNotenrItems = new NotenrBarsCalculator(nbars).getPartsNotenrItems();
		this.notesNotenritems = NotenrTools.getNotesNotenritems(partsnotes);
		return this.notesNotenritems;
	}
	
	var columnsPositions: Map<PColumn, Int>;
	public function getColumnsPositions():Map<PColumn, Int> {
		if (this.columnsPositions != null) return this.columnsPositions;
		this.columnsPositions = new Map<PColumn, Int>();
		
		var barpos = 0;
		for (system in this.systems) {
			for (sysbar in system.getSystembars()) {
				for (column in sysbar.bar.getColumns()) {
					this.columnsPositions.set(column, column.getValueposition() + barpos);					
				}
				barpos += sysbar.bar.getValue();
			}			
		}		
		return this.columnsPositions;
	}	
	
	var columnsTime: Map<PColumn, Float>;
	public function getColumnsTimeFixed(fixedTempoBPM: Int = 60, beatfactor:Float = 1.0): Map<PColumn, Float> {
		if (columnsTime != null) return columnsTime;
		this.columnsTime = new Map<PColumn, Float>();
		
		var columnsPositions = this.getColumnsPositions();
		for (column in columnsPositions.keys()) {
			var position = columnsPositions.get(column);
			var time = (position / Constants.BASE_NOTE_VALUE) / (fixedTempoBPM / 60) / beatfactor;
			this.columnsTime.set(column, time);						
		}		
		
		return this.columnsTime;
	}
	
	var timesColumns: Array<{time: Float, column:PColumn}>;
	public function getTimesColumns(fixedTempoBPM: Int = 60, beatfactor:Float = 1.0) {
		if (this.timesColumns != null) return this.timesColumns;
		var columnsTime = this.getColumnsTimeFixed(fixedTempoBPM, beatfactor);
		
		
		//var times = getColumnsTimeFixed(fixedTempoBPM, beatfactor).array();
		
		this.timesColumns = [];
		
		for (column in columnsTime.keys()) {
			
			
			this.timesColumns.push( { time: columnsTime.get(column), column:column } );
			
			
		}
		
		this.timesColumns.sort(function(a, b) return Reflect.compare(a.time, b.time));
		
		//times.sort(function(a, b) return Reflect.compare(a, b));
		//trace(times);
		return this.timesColumns;
	}
	
	
	/*
	public function getNotesPlayinfos(nnote:NNote, partsnotes:PartsNotenrItems) {		
		for (items in partsnotes) {
			for (item in items) {
				var note = item.note;
			}
		}
		
	}*/

	/*
	public function getPlaynotes() {
		
		var partsnotes:Array<Array<NotenrItem>> = new NotenrBarsCalculator(new VoiceSplitter(nscore).getVoicesplittedScore()).getPartsNotenrItems();
		
	}
	*/
	
	
	
}