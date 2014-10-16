package audio.flash.ui;
import flash.display.Graphics;
import flash.Vector;
import flash.display.GraphicsPathCommand;

/**
 * ...
 * @author Jonas Nyström
 */

 enum GraphicArrowType
 {
	 LEFT;
	 UP;
	 RIGHT;
	 DOWN;
 }
 
 
class GraphicArrows
{

	public function new() 
	{
		
	
		
	}
	
	static public function drawArrow(graphics:Graphics, color:Int, type:GraphicArrowType, x:Float, y:Float)
	{		
		graphics.beginFill(color);
		var commands:Vector<Int> = new Vector<Int>(4, true);
		commands[0] = GraphicsPathCommand.MOVE_TO;
		commands[1] = GraphicsPathCommand.LINE_TO;
		commands[2] = GraphicsPathCommand.LINE_TO;
		commands[3] = GraphicsPathCommand.LINE_TO;
		var data:Vector<Float> = new Vector<Float>(8, true);		
		switch type
		{
			case GraphicArrowType.UP:
				data[0] = x ;
				data[1] = y;
				data[2] = x+5;
				data[3] = y+10;
				data[4] = x-5;
				data[5] = y +10;
				data[6] = x;
				data[7] = y;
			case GraphicArrowType.LEFT:
				data[0] = x ;
				data[1] = y;
				data[2] = x;
				data[3] = y+10;
				data[4] = x-10;
				data[5] = y+5;
				data[6] = x;
				data[7] = y;
			case GraphicArrowType.RIGHT:
				data[0] = x ;
				data[1] = y;
				data[2] = x;
				data[3] = y+10;
				data[4] = x+10;
				data[5] = y+5;
				data[6] = x;
				data[7] = y;				
			default:
				graphics.drawCircle(x, y, 8);
		}
		graphics.drawPath(commands, data);						
	}
}