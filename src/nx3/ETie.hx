package nx3;

/**
 * ...
 * @author Jonas Nyström
 */

enum ETie 
{	
	Tie(direction:EDirectionUAD, level:Int);	
	Gliss(direction:EDirectionUAD, levelLeft:Int, levelRight:Int);
}