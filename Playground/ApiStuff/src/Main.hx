package;

import nx3.EAllotment;
import nx3.EClef;
import nx3.EDisplayALN;
import nx3.EKey;
import nx3.ENoteVal;
import nx3.ESign;
import nx3.ETime;
import nx3.NBar;
import nx3.NHead;
import nx3.NNote;
import nx3.NPart;
import nx3.NScore;
import nx3.NVoice;
import nx3.PColumn;
import nx3.PScore;
import nx3.PSystem;
import nx3.PSystemBar;
import nx3.PSystemConfig;
import nx3.PSystemsTools;
import nx3.PSystemTools;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.TargetSprite;
import nx3.test.TestItems;
import nx3.test.TestItemsBach;
import nx3.TPointH;
import openfl.display.Sprite;
import openfl.events.MouseEvent;
import openfl.Lib;
using cx.ArrayTools;
using nx3.render.scaling.ScalingTools;
using nx3.geom.RectangleTools;

/**
 * ...
 * @author Jonas Nyström
 */

class Main extends Sprite 
{

	public function new() 
	{
		super();
		
		// Assets:
		// openfl.Assets.getBitmapData("img/assetname.jpg");
		
		var nscore = new NScore([
			new NBar([new NPart([new NVoice([
				new NNote([new NHead(4, ESign.Flat)], ENoteVal.Nv16)
				,new NNote([new NHead(3)], ENoteVal.Nv16)
				,new NNote([new NHead(1, ESign.Flat)], ENoteVal.Nv16)
				,new NNote([new NHead(4, ESign.Flat)], ENoteVal.Nv16)	
			])])])
			
			, new NBar([new NPart([new NVoice([
				new NNote([new NHead(4, ESign.Flat)], ENoteVal.Nv4)
			])])])
		]);
		
		var nscore = TestItemsBach.scoreBachSinfonia4();		
		
		var scaling = Scaling.NORMAL;
		var pscore = new PScore(nscore);		
		var target = new TargetSprite(this, scaling);
		var render = new Renderer(target);				
		/*
		var system = pscore.getSystems(800).first();
		trace(system.getWidth());
		var tools =  new PSystemTools(system);
		var columns = tools.getColumns();
		trace(columns);
		*/		
		//var systools = new PSystemsTools(pscore.getSystems(800));
		
		render.renderScore(pscore, 0, 0, 500);
		var systools = new PSystemsTools(pscore.getSystems(500));
		var columns = systools.getColumns();
		
		var notes = systools.getNotes();
		trace(notes.length);
		var notesRects = systools.getNotesRects();
		
		this.graphics.lineStyle(2, 0x0000FF);
		for (note in notes) {			
			var noteRect = notesRects.get(note);
			var scaledRect = scaling.scaleRect(noteRect);
			this.graphics.drawAsEllipse(scaledRect, 2);
		}
		
		var columnsPos:Map<PColumn, TPointH> = systools.getColumnsPointH();
		this.graphics.lineStyle(1, 0xFF0000);
		for (column in columns) {
			
			var columnPosH = columnsPos.get(column);
			var x = columnPosH.x * scaling.unitX;
			var y = columnPosH.y * scaling.unitY;			
			var h = columnPosH.height  * scaling.unitY;			
		}
		
		var notesNotenritems = systools.getNotesNotenritems();
		
		this.stage.addEventListener(flash.events.MouseEvent.MOUSE_DOWN, function(e:MouseEvent) {
			var note = systools.getNoteFromCoord(scaling.targetX(stage.mouseX), scaling.targetY(stage.mouseY));
			if (note != null) {
				var playinfo = notesNotenritems.get(note.nnote);
				trace(playinfo);
			}
		});
	}
}
