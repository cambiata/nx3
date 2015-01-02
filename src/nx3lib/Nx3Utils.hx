package nx3lib;
import flash.display.Sprite;
import flash.text.TextField;
import nx3.Constants;
import nx3.PScore;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.TargetSprite;
import nx3.render.TestscoreSprite;
import nx3.test.TestItems;
import nx3.test.TestItemsBach;


/**
 * Nx3Utils
 * @author Jonas Nyström
 */
class Nx3Utils 
{

	  public static function getHello():String {
		  return "Hello from Nx3Utils!";		  
	  }
	  
	  public static function getSprite():Sprite {
		  var s = new Sprite();
		  
		  s.graphics.beginFill(0xFF0000);
		  s.graphics.drawRect(10, 10, 50, 50);
		  
		  return s;
	  }
	  
	  public static function getConstant():Int {
		  return Constants.BASE_NOTE_VALUE;
	  }
	  
	  public static function getNScore():Dynamic {		  
		  return TestItemsBach.scoreBachSinfonia4();
	  }
	  
	  static   public function testCopy():Array<Int> {
		  
		  var a = [1, 2, 3];
		  var b = copyArray(a);
		  return b;
		  
	  }
	  
	  inline public static function copyArray<A>( it : Iterable<A> ) : Array<A> {
		var a = new Array<A>();
		for(i in it)
			a.push(i);
		return a;
	}		  
	  
	  public static function getScoreSprite():Sprite {
		var sprite = new Sprite();
		var target = new TargetSprite(sprite, Scaling.MINI);	
		var renderer = new Renderer(target, 0, 0);
		var nscore = TestItemsBach.scoreBachSinfonia4();
		var pscore = new PScore(nscore);
		
		renderer.renderScore(pscore, 0, 0, 500);		
  
		 
		 return sprite;
	  }
	  
	  public static function passArray(a:Array<String>) {
		  if (textDebug == null) throw "textDebug is null";
		  textDebug.text = 'Array passed: ' + Std.string(a);
	  }
	  
	  static public var textDebug:TextField = null;
	  static public function setDebugField(tf:TextField) {
		  if (tf == null) throw "textDebug is null";
		  textDebug = tf;
		  textDebug.text = 'Hello from Haxe!';
	  }
	  
	  

	
}