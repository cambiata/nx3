package ;

import flash.display.Shape;
import flash.display.Sprite;
import flash.events.Event;
import flash.Lib;
import nx3.render.scaling.Scaling;
import nx3.render.svg.Elements;
import nx3.render.svg.ShapeTools;

/**
 * ...
 * @author Jonas Nyström
 */

class Main extends Sprite 
{
	var inited:Bool;

	/* ENTRY POINT */
	
	function resize(e) 
	{
		if (!inited) init();
		// else (resize or orientation change)
	}
	
	function init() 
	{
		if (inited) return;
		inited = true;

		var xmlstr:String = TestSvg.testsvg;
		var shape:Shape = ShapeTools.getShape(xmlstr, Scaling.NORMAL);
		this.addChild(shape);
		shape.y = 100;
		shape.x = 100;
	}

	/* SETUP */

	public function new() 
	{
		super();	
		addEventListener(Event.ADDED_TO_STAGE, added);
	}

	function added(e) 
	{
		removeEventListener(Event.ADDED_TO_STAGE, added);
		stage.addEventListener(Event.RESIZE, resize);
		#if ios
		haxe.Timer.delay(init, 100); // iOS 6
		#else
		init();
		#end
	}
	
	public static function main() 
	{
		// static entry point
		Lib.current.stage.align = flash.display.StageAlign.TOP_LEFT;
		Lib.current.stage.scaleMode = flash.display.StageScaleMode.NO_SCALE;
		Lib.current.addChild(new Main());
	}
}

class TestSvg
{
	static public var testsvg:String = '<svg><g transform="matrix(0.5,0,0,-0.5,0,600)"><path d="M677 25v-14c0 -112 -70 -203 -182 -245c13 -90 25 -149 25 -149c4 -25 6 -48 6 -69c0 -157 -106 -201 -177 -205c-8 0 -16 -1 -23 -1c-165 0 -190 103 -190 158c0 21 3 36 4 36c6 45 45 81 91 84h7c54 0 97 -43 102 -95v-7c0 -45 -29 -81 -70 -94c-9 -4 -16 -4 -25 -6 c-5 -2 -9 -4 -9 -8c0 -3 3 -7 9 -11c21 -15 49 -20 83 -20h19c12 0 134 2 134 165c0 20 -2 43 -6 68l-23 140h-5c-22 -3 -45 -4 -68 -4c-164 0 -353 77 -372 319c-1 10 -1 20 -1 30c0 193 165 340 312 466l-12 63c-5 35 -7 69 -7 102c0 181 66 332 162 374c0 0 36 -6 75 -95 c28 -65 43 -129 43 -192c0 -136 -68 -267 -202 -391c10 -54 21 -106 32 -171c4 2 9 2 13 2h11c128 0 236 -101 244 -230zM468 943c-79 -4 -127 -163 -127 -266c0 -13 0 -25 2 -36c0 -6 4 -25 8 -49c107 81 169 166 181 249c1 8 2 15 2 22c0 54 -33 80 -66 80zM86 16v-8 c6 -175 184 -224 293 -224c28 0 51 3 66 8l-54 320c-66 -11 -118 -44 -118 -114v-10c2 -41 47 -90 67 -99c8 -4 15 -12 15 -18c0 -4 -4 -8 -12 -8c-5 0 -12 1 -21 4c-47 15 -92 65 -108 133c-4 14 -6 29 -6 44c0 90 71 175 161 202l-25 156c-131 -97 -258 -219 -258 -386z M488 -197c70 30 107 81 107 151v11c-4 84 -76 151 -160 151h-4c21 -113 41 -222 57 -313z"/></g></svg> ';
	}
