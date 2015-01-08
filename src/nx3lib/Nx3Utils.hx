package nx3lib;
import flash.display.Sprite;
import flash.text.TextField;
import nx3.Constants;
import nx3.EAllotment;
import nx3.EDisplayALN;
import nx3.NBar;
import nx3.NPart;
import nx3.NScore;
import nx3.NVoice;
import nx3.PScore;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.scaling.TScaling;
import nx3.render.TargetSprite;
import nx3.render.TestscoreSprite;
import nx3.test.TestItems;
import nx3.test.TestItemsBach;
import nx3lib.abc.ArrayProcessor;
using cx.ArrayTools;

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
	  
	  public static function  getScoreSpriteFromArray(abcArray:Array<String>,drawBarAttributes:Bool=false, drawBarFrame:Bool=false,  xOffset:Int = 0, yOffset:Int = 0,  rightBarlineX:Int=0, rightBarlineY:Int= 16, scalingPreset=3):Sprite {
		
		 var scaling:TScaling = switch scalingPreset {
			 case  1: Scaling.MINI;
			 case 2: Scaling.SMALL;
			 case 3: Scaling.NORMAL;
			 case 4: Scaling.MID;
			 case 5: Scaling.PRINT1;	
			 case _:Scaling.NORMAL;
		 }
		  
		var processor = new ArrayProcessor();
		var notes = processor.getNx3Notes(abcArray);
		var nscore = new NScore([ new NBar( [ new NPart ([ new NVoice( 
			notes
		) ], EDisplayALN.Never, EDisplayALN.Never) ], EDisplayALN.Never, EAllotment.Logaritmic) ]);
		
		//var scaling = Scaling.NORMAL;
		var sprite = new Sprite();		
		var target = new TargetSprite(sprite, scaling);	
		var renderer = new Renderer(target, 0, 0);		
		var pscore = new PScore(nscore);
		//renderer.renderScore(pscore, 0, 0, 500);		
		var render = new Renderer(target);		
		
		var system = pscore.getSystems(1000).first();
		var sysbar = system.getSystembars().first();
		if (drawBarAttributes) render.drawBarAttributes(system, sysbar);
		render.drawBarContent(system, sysbar);		
		
		var sw = system.getWidth() * scaling.unitX;
		var sh = system.getHeight() * scaling.unitY;		
		
		var resultSprite = new Sprite();
		sprite.x = xOffset;
		sprite.y = yOffset;
		resultSprite.addChild(sprite);		
		
		if (drawBarFrame) {
			resultSprite.graphics.lineStyle(1, 0xaaaaaa);
			resultSprite.graphics.drawRoundRect(-xOffset, -yOffset, sw, sh, 6, 6);
		}		
		
		if (rightBarlineX > 0) {
			var barlineHeight = scaling.unitY * 8;
			resultSprite.graphics.lineStyle(1.5, 0);
			resultSprite.graphics.moveTo(rightBarlineX, rightBarlineY);
			resultSprite.graphics.lineTo(rightBarlineX, rightBarlineY + barlineHeight);
		}		
		
		return resultSprite;		
		  
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