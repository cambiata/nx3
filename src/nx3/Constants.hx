package nx3;


/**
 * ...
 * @author Jonas Nyström
 */
class Constants
{
	static public inline var BASE_NOTE_VALUE					:Int = 3024;			
	static public inline var STAVE_LENGTH						:Float = 6.8;	
	static public inline var STAVE_BASIC_LENGTH:Float = 7;
	
	static public inline var SIGN_TO_NOTE_DISTANCE				:Float = 0.8;
	static public inline var COMPLEX_COLLISION_OVERLAP_XTRA		:Float = 0.6;	
	static public inline var SIGN_NORMAL_WIDTH					:Float = 2.6;
	static public inline var SIGN_PARENTHESIS_WIDTH				:Float = 4.4;
	static public inline var HEAD_ADJUST_X						:Float = 0;

	static public inline var COMPLEX_COLLISION_ADJUST_SAMELINE	:Float = 3.0;
	static public inline var COMPLEX_COLLISION_ADJUST_NEXTLINE		:Float = 2.2;
	static public inline var COMPLEX_COLLISION_ADJUST_SAMELINE_WHOLE:Float = 4.3;
	static public inline var COMPLEX_COLLISION_ADJUST_NEXTLINE_WHOLE:Float = 4;

	static public inline var NOTE_STEM_X_NORMAL					:Float = 1.6;	
	
	static public inline var HEAD_HALFWIDTH_NORMAL: Float = 1.6;
	static public inline var HEAD_HALFWIDTH_WIDE: Float = 2.2;
	static public inline var COMPLEX_COLLISION_CHORD_INTERSECTION:Float = 0.8;
	static public inline var COMPLEX_COLLISION_NEXTLINEDELTA:Float = 0.7;
	static public inline var COMPLEX_COLLISION_NEXTLINEDELTA_H1:Float = 0.9;
	static public inline var DOT_WIDTH:Float = 3.0;
	static public inline var DDOT_WIDTH:Float = 4.0;
	static public inline var FLAG_HEIGHT:Float = 4.8;
	static public inline var FLAG_WIDTH:Float = 2.6;
	static public inline var FLOAT_QUASI_ZERO:Float = 0.0000001;
	static public  var FONT_TEXT_DEFAULTFORMAT:TFontInfo = { name:'Georgia', size:12, bold:false, italic:false };
	static public inline var JS_CANVAS_TEXT_MEASUREMENT:String = "CanvasTextMeasurement";
	static public inline var FONT_TEXT_X_ADJUST_SVG:Float = -0.2;
	static public inline var FONT_TEXT_Y_ADJUST_SVG:Float = 9.6;
	static public inline var FONT_TEXT_Y_ADJUST_FLASH:Float = -1.2;
	static public inline var FONT_TEXT_X_ADJUST_FLASH:Float = -.3;
} 