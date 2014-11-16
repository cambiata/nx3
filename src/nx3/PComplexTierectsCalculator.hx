package nx3;
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;
import nx3.PComplex;
using cx.ArrayTools;
using nx3.ENoteValTools;
/**
 * ...
 * @author Jonas Nyström
 */
class PComplexTierectsCalculator
{
	var complex:PComplex;

	public function new(complex:PComplex) 
	{
		this.complex = complex;
	}
	
	public function getTieRects():Rectangles
	{
		var nrofnotes = this.complex.getNotes().length;
		
		var firstnote = this.complex.getNotes().first();
		var firstties:ETies = firstnote.getTies();		
		var secondnote = (nrofnotes == 2) ? this.complex.getNotes().second() : null;
		var secondties:ETies = (nrofnotes == 2) ? this.complex.getNotes().second().getTies() : [];
		if (firstties == [] && secondties == []) return [];		
		//trace(firstties);
		var headrects = this.complex.getHeadsRects();
		var dotrects = this.complex.getDotRects();
		
		//trace(headrects.length);
		var tieinfos = new PTieinfos();
		
		var rects = new Rectangles();
		
		var headIdx = 0;
		var dotidx = 0;
		var adjusty = 0.0;
		var tiewidth = Constants.TIE_WIDTH_CHORD;
		var tieheight = Constants.TIE_HEIGHT;
		
		//--------------------------------------------------------------------------------
		
		for (head in firstnote.getHeads())
		{
			//trace(headIdx);
			var headrect = this.complex.getHeadsRects()[headIdx];
			var rx = headrect.x + headrect.width;
			if (firstnote.nnote.value.dotlevel() > 0)
			{
				var dotrect = this.complex.getDotRects()[dotidx];
				rx = dotrect.x + dotrect.width;
				dotidx++;
			}
			
			if (head.nhead.tie != null) 
			{
				var tielevel = 0;
				switch head.nhead.tie
				{
					case ETie.Tie(tiedir, tlevel): tielevel = tlevel;
					default:
				}
				
				
				var level = head.nhead.level + tielevel;
				
				var direction:EDirectionUD = EDirectionUD.Up;
				
				if (firstties.length == 1) 
				{					
					if (secondnote == null)
					{
						level = (firstnote.getDirection() == EDirectionUD.Up) ? level + 1 : level - 1;
						direction = (firstnote.getDirection() == EDirectionUD.Up) ? EDirectionUD.Down : EDirectionUD.Up;
						adjusty = (firstnote.getDirection() == EDirectionUD.Up) ? .8 : -.8;
						//rx -= 1; tiewidth += 1;
					}
					else
					{
						level = (firstnote.getDirection() == EDirectionUD.Up) ? level - 1 : level - 1;						
					}	
					tiewidth = Constants.TIE_WIDTH_SINGLE;
				}
				else 
				{
					if (secondnote == null && (head == firstnote.getHeads().last()))
					{
						direction = EDirectionUD.Down;
						adjusty = .5;
					}
					else
					{
						adjusty = -.5;
					}
				}
				var r = new Rectangle(rx, level -Constants.TIE_HEIGHT/2 + adjusty, tiewidth, Constants.TIE_HEIGHT);
				rects.push(r);
				tieinfos.push( { direction:direction, rect:r , head:head, target:null} );
			}
			headIdx++;
		}
		
		//--------------------------------------------------------------------------------
		tiewidth = Constants.TIE_WIDTH_CHORD;
		if (secondnote != null)
		{
			for (head in secondnote.getHeads())
			{
				if (head.nhead.tie != null) 
				{					
					
					
					var level = head.nhead.level;
					
					var headrect = this.complex.getHeadsRects()[headIdx];
					var rx = headrect.x + headrect.width;
					if (secondnote.nnote.value.dotlevel() > 0)
					{
						var dotrect = this.complex.getDotRects()[dotidx];
						rx = dotrect.x + dotrect.width;
						dotidx++;
					}				
					
					if (secondties.length == 1) 
					{		
						level++;						
						tiewidth = Constants.TIE_WIDTH_SINGLE;
						//rx -= 0.5;
					}
					
					var r = new Rectangle(rx, level -Constants.TIE_HEIGHT/2, tiewidth, Constants.TIE_HEIGHT);
					rects.push(r);
					tieinfos.push( { direction:EDirectionUD.Down, rect:r, head:head, target:null } );
				}
				headIdx++;
			}			
		}
		this.complex.setTieinfos(tieinfos);
		return rects;
	}
	
	public function getNoteTies(note:PNote)
	{

		
	}
	
	
}