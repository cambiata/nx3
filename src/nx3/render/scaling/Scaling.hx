package nx3.render.scaling;
import nx3.geom.Rectangle;

/**
 * ...
 * @author 
 */
class Scaling
{
	static public var MID:TScaling = 
	{
	#if js			
		linesWidth:			0.8,
	#elseif flash
		linesWidth:			1.5,
	#else
		linesWidth:			1.25,
	#end			
		space:					12.0,
		unitY: 			6.0,
		noteWidth:			10,
		unitX:		5,
		quarterNoteWidth: 	2.5,
		signPosWidth:		14.0,
		svgScale:				.27,
		svgX:					0,
		svgY:					-55.0,
		fontScaling:			1.5,		
	}
	
	static public var NORMAL:TScaling = 
	{
	#if js
		linesWidth:			.5,
	#else
		linesWidth:			.75,
	#end
		space:					8.0,
		unitY: 			4.0,
		noteWidth:			7.0 , //11.0, 
		unitX:		3.5, // 5.5
		quarterNoteWidth: 	1.75, // 2.75
		signPosWidth:		9.5,
		svgScale:				.175,
		svgX:					0,
		svgY:					-36.0,
		fontScaling:			1.0,		
	}
	
	static public var SMALL:TScaling =
	{
		linesWidth:			.5,
		space:					6.0,
		unitY: 			3.0,
		noteWidth:			5.0, //8.0,
		unitX:		2.5, // 4.0
		quarterNoteWidth: 	1.25, // 2.0
		signPosWidth:		7.0,
		svgScale:				.14,
		svgX:					-0,
		svgY:					-28.5,
		fontScaling:			0.75,		

	}
	
	static public var BIG:TScaling =
	{
			linesWidth:			1.5,
			space:					16.0,
			unitY: 				8.0,
			noteWidth:				14.0,
			unitX:		7.0,
			quarterNoteWidth: 	5.5,
			signPosWidth:		19.0,
			svgScale:				.36,
			svgX:					-0.0,
			svgY:					-74.0,
			fontScaling:			2.0,		
	}
	
	static public var PRINT1:TScaling =
	{
			linesWidth:			3,
			space:					32.0,
			unitY: 			16.0,
			noteWidth:			28.0,
			unitX:		14.0,
			quarterNoteWidth: 	11.0,
			signPosWidth:		38.0,
			svgScale:				.72,
			svgX:					-0.0,
			svgY:					-148.0,
			fontScaling:			4.0,
	}
	
	//--------------------------------------------------------------------------------------------------------
	
	static public function scaleRect(scaling:TScaling, rect:Rectangle):Rectangle
	{
		return new Rectangle(rect.x * scaling.unitX, rect.y * scaling.unitY, rect.width * scaling.unitX, rect.height * scaling.unitY);
	}
	
}