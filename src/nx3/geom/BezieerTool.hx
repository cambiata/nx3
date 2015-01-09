package nx3.geom;

/**
 * ...
 * @author Jonas Nyström
 */
class BezieerTool
{
	static public function bezieerCoordinates(anchor1:Pnt, control1:Pnt, control2:Pnt, anchor2:Pnt, ?lineWidth:Float=1, ?lineColor:Int=0x000000, ?segments:Int=10):Pnts
	{
			var coord:Pnts = [];
			coord.push(anchor1);
			var posx:Float;
			var posy:Float;			
			for (i in 0...segments)
			{
				var u = i / segments;
				
				posx = Math.pow(u,3)*(anchor2.x+3*(control1.x-control2.x)-anchor1.x)
				+3*Math.pow(u,2)*(anchor1.x-2*control1.x+control2.x)
				+3*u*(control1.x-anchor1.x)+anchor1.x;
				
				posy = Math.pow(u,3)*(anchor2.y+3*(control1.y-control2.y)-anchor1.y)
				+3*Math.pow(u,2)*(anchor1.y-2*control1.y+control2.y)
				+3*u*(control1.y-anchor1.y)+anchor1.y;
			 
				coord.push({x:posx, y:posy});
			}
			coord.push(anchor2);							
			return coord;
	}
	
}