package nx3;

/**
 * ...
 * @author Jonas Nyström
 */

import nx3.geom.Rectangle;
import nx3.geom.Rectangles;


using cx.ArrayTools;
using nx3.ENoteValTools;

class VComplex 
{
	public var vnotes(default, null) :VNotes;
	public function new(vnotes:VNotes, directions: EDirectionUDs=null)
	{
		if (vnotes.length > 2) throw "VComplex nr of VNote(s) limited to max 2 - for now";
		this.vnotes = vnotes;
		//if (directions != null) this.setDirections( directions);
	}
	
	var signs:VSigns;
	var visibleSigns:VSigns;
	var calculator:VComplexSignsCalculator;

	public function getVNotes():VNotes
	{
		return this.vnotes;
	}
	
	public function getSigns():VSigns
	{
		this.calculator = new VComplexSignsCalculator(this.vnotes);
		this.signs = calculator.getSigns();
		this.visibleSigns = calculator.getVisibleSigns();
		return this.signs;
	}
	
	public function getVisibleSigns():VSigns
	{
		if (visibleSigns != null) return this.visibleSigns;
		this.getSigns();
		return this.visibleSigns;
	}	
	
	var signRects:Rectangles;
	public function getSignsRects(headsRects:Rectangles=null):Rectangles
	{
		if (this.signRects != null) return this.signRects;		
		if (this.getVisibleSigns().length == 0) return [];
		this.signRects = new VComplexSignsRectsCalculator(this.getVisibleSigns()).getSignRects(headsRects);
		return this.signRects;
		//return [];
	}
	
	
	var tiestoRects:Rectangles;	
	public function getTiestoRects(headsRects:Rectangles=null):Rectangles
	{
		if (this.signRects == null) this.getSignsRects(headsRects);
		if (this.tiestoRects != null) return this.tiestoRects;
		
		var rects = (this.signRects != null && this.signRects.length > 0) ? this.signRects: headsRects;
		
		this.tiestoRects = new VComplexTiestoRectsCalculator(this.getComplexTiestos()).getTiestoRects(rects);
		
		return this.tiestoRects;
		
	}
	
	public function getComplexTiestos()
	{
		// TODO!
		return null;
	}
	
	
	var dotsRects:Rectangles;
	public function getDotsRects(headsRects:Rectangles=null, directions: EDirectionUDs=null): Rectangles
	{
		if (this.dotsRects != null) return this.dotsRects;
		
		this.dotsRects = new VComplexDotsRectsCalculator(this.getDots(directions)).getDotsRects(headsRects);
		
		return this.dotsRects;
	}
	
	public  function getDots( directions: EDirectionUDs=null): EDots
	{		
		
		var result:EDots = null;
		
		for (vnote in this.getVNotes())
		{
			var dotlevel = vnote.nnote.value.dotlevel() ;			
			if (dotlevel != 0)
			{
				if (result == null) result = new EDots();
				for (nhead in vnote.nnote.nheads)
				{
					var dot:EDot = EDot.Normal(nhead.level);
					if (dotlevel == 2) dot = EDot.Double(nhead.level);
					result.push(dot);
				}				
			}
		}
		// TODO
		// do stuff to organize dot placement according to voice and directions...
		return result;
	}
	
	
	//------------------------------------------------------------------------------------------------------------
	
	public function getHeadsCollisionOffsetX(note:VNote, direction:EDirectionUD=null):Float
	{
		//trace(direction);
		if (this.vnotes.length == 1) return 0;
		
		if (note == this.vnotes.first()) return 0;

		// note IS second!
		var firstnote = this.vnotes.first();
		var secondnote = note;
		
		//trace([secondnote]);
	
		//var offsetX = getRectanglesXIntersection(firstnote.getVHeadsRectanglesDir(EDirectionUD.Up), secondnote.getVHeadsRectanglesDir(direction));
		
		var diff = secondnote.nnote.getTopLevel() - firstnote.nnote.getBottomLevel();
	
		var offsetX = 0.0;
		
		if (diff < 1) offsetX =  (firstnote.nnote.value.head() == nx3.EHeadValueType.HVT1) ? Constants.HEAD_HALFWIDTH_WIDE*2 : Constants.HEAD_HALFWIDTH_NORMAL*2;
		
		// touch...
		if (diff == 1)  
		{
			offsetX =  (firstnote.nnote.value.head() == nx3.EHeadValueType.HVT1) ? Constants.HEAD_HALFWIDTH_WIDE*2 : Constants.HEAD_HALFWIDTH_NORMAL*2;
			offsetX = (firstnote.nnote.value.head() == nx3.EHeadValueType.HVT1) ? Constants.COMPLEX_COLLISION_NEXTLINEDELTA_H1 * offsetX : Constants.COMPLEX_COLLISION_NEXTLINEDELTA * offsetX;
		}
		
		/*
		// chord intersection
		if (diff < 1 && offsetX == 0)
		{
			offsetX = -Constants.COMPLEX_COLLISION_CHORD_INTERSECTION;
		}
		*/
		
		return offsetX;
	}
	
	public function getRectanglesXIntersection(rectsA:Rectangles, rectsB:Rectangles)
	{
		var rectsB2 = new Rectangles();
		for (r in rectsB) rectsB2.push(r.clone());		
		function check():Float
		{
			for (ra in rectsA)
			{
				for (rb in rectsB2)
				{
					var i = ra.intersection(rb);	
					if (i.width > 0) return i.width;
				}			
			}
			return 0;
		}		
		var x:Float = 0;
		var moveX:Float = check();
		while (moveX > 0)
		{
			x += moveX;
			for (r in rectsB2) r.offset(moveX, 0);			
			moveX = check();
		}		
		return x;		
	}	
	
	
	
	public function getNoteHeadsRects(note:VNote, dir:EDirectionUD=null): Rectangles
	{
		if (dir == null)  dir = new VNoteInternalDirectionCalculator(note.getVHeads()).getDirection();		
		
		// first voice
		if (note == this.vnotes.first())
		{		
			//trace(['voice 0', 0]);
			return note.getVHeadsRectanglesDir(dir);
		}		
		
		// second voice
		var rects:Rectangles = note.getVHeadsRectanglesDir(dir);
		var offsetX = getHeadsCollisionOffsetX(note, dir);
		//trace(['voice 1', offsetX]);
		for (rect in rects) rect.offset(offsetX, 0);		
		return rects;		
	}
	
	
	
	public function getNoteRect(note:VNote, dir:EDirectionUD=null):Rectangle
	{
		// TODO: Optimize!
		
		var result:Rectangle = null;
		
		// first vnote
		if (note == this.vnotes.first())
		{			
			if (dir == null)  dir = new VNoteInternalDirectionCalculator(note.getVHeads()).getDirection();		
			var rects = note.getVHeadsRectanglesDir(dir);
			result = rects.first().clone();
			for (i in 1...rects.length)
			{
				result = result.union(rects[i]);				
			}			
			return  result;
		}
		
		//---------------------------------------------------------------------------------------------------------
		// second vnote
		if (dir == null) dir = new VNoteInternalDirectionCalculator(note.getVHeads()).getDirection();		
		var rects = note.getVHeadsRectanglesDir(dir);
		result = rects.first().clone();
		for (i in 1...rects.length)
		{
			result = result.union(rects[i]);				
		}			

		// offset to avoid collisiions! 
		var offsetX = getHeadsCollisionOffsetX(note, dir);
		result.offset(offsetX, 0);
		
		return result;		
	}
	
	public function getNotesRects(directions:EDirectionUDs):Rectangles
	{
		if (directions.length != this.getVNotes().length) throw "Directions.length != vnotes.length";
		var result = new Rectangles();
		for (i in 0...this.getVNotes().length)
		{
			var vnote = this.getVNotes()[i];
			var rect = getNoteRect(vnote,  directions[i]);
			result.push(rect);
		}
		return result;		
	}	
	
	
	var notesHeadsRectsDirCheck:EDirectionUDs = null;
	var notesHeadsRects:nx3.geom.Rectangles = null;
	public function getNotesHeadsRects(directions:EDirectionUDs):Rectangles
	{
		if (notesHeadsRects != null && notesHeadsRectsDirCheck == directions) return this.notesHeadsRects;
		this.notesHeadsRectsDirCheck = directions;
		
		if (directions.length != this.getVNotes().length) throw "Directions.length != vnotes.length";
		this.notesHeadsRects = new Rectangles();
		for (i in 0...this.getVNotes().length)
		{
			var vnote:VNote = this.getVNotes()[i];
			var rects = this.getNoteHeadsRects(vnote, directions[i]);
			for (rect in rects) this.notesHeadsRects.push(rect);
		}
		return this.notesHeadsRects;				
	}
	
	
	
	
	public function getStaveBasicRects(directions:EDirectionUDs, beamgroups:VBeamgroups=null):Rectangles
	{
		if (directions.length != this.getVNotes().length) throw "Directions.length != vnotes.length";		
		var firstnote = this.getVNotes().first();		
		var result = new Rectangles();
		var flags = new Rectangles();
		for (i in 0...this.getVNotes().length)
		{
			
			var vnote = this.getVNotes()[i];
			if (vnote.nnote.value.stavinglevel() == 0) continue;
			if (vnote.nnote.type.getName() != 'Note') continue;
			
			var beamgroup:VBeamgroup = (beamgroups != null) ? beamgroups[i] : null;

			var direction:EDirectionUD = directions[i];
			var rect:Rectangle = null;
			var headw:Float = switch vnote.nnote.value.head()
			{
				case EHeadValueType.HVT1: Constants.HEAD_HALFWIDTH_WIDE;
				default: Constants.HEAD_HALFWIDTH_NORMAL;
			}
			
			// ----------------------------------------------------------------------------------------------
			var offset = 0.0;
			if (vnote != firstnote) offset = getHeadsCollisionOffsetX(vnote, direction);	
			//trace(['stave $i', offset]);
			
			// stave rect
			if (direction == EDirectionUD.Up) 
			{
				rect = new Rectangle( 0, vnote.nnote.getBottomLevel() - Constants.STAVE_BASIC_LENGTH, headw, Constants.STAVE_BASIC_LENGTH);
			}
			else
			{
				rect = new Rectangle( -headw, vnote.nnote.getTopLevel(), headw, Constants.STAVE_BASIC_LENGTH);
			}
			
			// apply offset
			if (offset != 0) rect.offset(offset, 0);
			
			result.push(rect);
			
			//-----------------------------------------------------------------------------------------
			// flag rect
			if (beamgroup != null && beamgroup.vnotes.length == 1)
			{
				if (vnote.nnote.value.beaminglevel() > 0 ) 
				{
					var flagrect:Rectangle = null; 
					if (direction == EDirectionUD.Up) 
					{				
						flagrect = new Rectangle(headw, vnote.nnote.getBottomLevel() - Constants.STAVE_BASIC_LENGTH, Constants.FLAG_WIDTH, Constants.FLAG_HEIGHT);
					}
					else
					{
						flagrect = new Rectangle( -headw, vnote.nnote.getTopLevel() + Constants.STAVE_BASIC_LENGTH - Constants.FLAG_HEIGHT, Constants.FLAG_WIDTH, Constants.FLAG_HEIGHT);
					}			
					
					if (offset != 0) flagrect.offset(offset, 0);					
					
					flags.push(flagrect);
					//-----------------------------------------------------------------------------------------
				}		
			}
		}
		
		if (flags != []) result = result.concat(flags);
		
		return result;
	}
	
	public function getStaveNoteBasicRectAndDirections(note:VNote, directions:EDirectionUDs):{rect: Rectangle, dir:EDirectionUD}
	{
		var rects = this.getStaveBasicRects(directions);
		if (note == this.getVNotes().first()) return {rect: rects[0], dir:directions[0]};
		return {rect: rects[1], dir:directions[1]};		
	}
	
	public function getStavesBasicX(directions:EDirectionUDs):TPoints
	{
		var rects = this.getStaveBasicRects(directions);		
		var result = new  TPoints();

		for (i in 0...this.getVNotes().length)
		{
			var vnote = this.getVNotes()[i];		
			var rectDir = this.getStaveNoteBasicRectAndDirections(vnote, directions);
			var direction = rectDir.dir;
			var rect = rectDir.rect;
			
			if (rect == null) 
			{
				result.push({x:0, y:0});
				continue;				
			}
			
			var x = 0.0;
			var y = 0.0;
			
			if (direction == EDirectionUD.Up) 
			{				
				x += rect.width;
				y = vnote.nnote.getBottomLevel();
			}
			else
			{								
				x = rect.x;
				y = vnote.nnote.getTopLevel();
			}			
			result.push({x:x, y:y});
		}
		
		return result;
	}
	
	/*
	public function getStavesBasicX2(directions:EDirectionUDs):TPoints
	{
		if (directions.length != this.getVNotes().length) throw "Directions.length != vnotes.length";		
		var firstnote = this.getVNotes().first();		
		
		var result = new  TPoints();
		
		for (i in 0...this.getVNotes().length)
		{
			var vnote = this.getVNotes()[i];
			
			//if (vnote.nnote.value.stavinglevel() == 0) continue;
				
			var direction:EDirectionUD = directions[i];

			var rect:Rectangle = null;
			var headw:Float = switch vnote.nnote.value.head()
			{
				case EHeadValueType.HVT1: Constants.HEAD_HALFWIDTH_WIDE;
				default: Constants.HEAD_HALFWIDTH_NORMAL;
			}
			
			// stave rect
			var x:Float = 0;
			var y:Float = 0;
			if (direction == EDirectionUD.Up) 
			{
				rect = new Rectangle( 0, vnote.nnote.getBottomLevel() - Constants.STAVE_BASIC_LENGTH, headw, Constants.STAVE_BASIC_LENGTH);
				x = headw;
				y = vnote.nnote.getBottomLevel();
			}
			else
			{
				rect = new Rectangle( -headw, vnote.nnote.getTopLevel(), headw, Constants.STAVE_BASIC_LENGTH);
				x = -headw;
				y = vnote.nnote.getTopLevel();
			}

			
			result.push({x:x, y:y});
		}
		
		return result;
	}
	*/
	/*
	public function getFlagRects(directions:EDirectionUDs): Rectangles
	{
		if (directions.length != this.getVNotes().length) throw "Directions.length != vnotes.length";
		var result = new Rectangles();
		for (i in 0...this.getVNotes().length)
		{
			var vnote = this.getVNotes()[i];
			if (vnote.nnote.value.beaminglevel() == 0) continue;
		}
		
		
	}
	*/
	
}
