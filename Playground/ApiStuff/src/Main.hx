package;

#if js
import js.Browser;
import js.Browser.document in doc;
import js.html.CanvasElement;
import js.html.Element;
import js.html.svg.SVGElement;
import nx3.utils.JsSvgTools;
#end

import nx3.EAllotment;
import nx3.EClef;
import nx3.EDisplayALN;
import nx3.EKey;
import nx3.ENoteVal;
import nx3.ESign;
import nx3.ETime;
import nx3.NBar;
import nx3.NHead;
import nx3.NNote;
import nx3.NPart;
import nx3.NScore;
import nx3.NVoice;
import nx3.PColumn;
import nx3.PScore;
import nx3.PSystem;
import nx3.PSystemBar;
import nx3.PSystemConfig;
import nx3.PSystemsTools;
import nx3.PSystemTools;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.test.TestItems;
import nx3.test.TestItemsBach;
import nx3.TPointH;

import nx3.utils.ScoreDrawingTools;

import audiotools.utils.Wav16PartsBuilder;
import audiotools.sound.Wav16SoundManager;

/*
import nx3.render.TargetSprite;
import openfl.display.Sprite;
import openfl.events.MouseEvent;
import openfl.Lib;
*/
using cx.ArrayTools;
using nx3.render.scaling.ScalingTools;
using nx3.geom.RectangleTools;

/**
 * ...
 * @author Jonas Nyström
 */

class Main #if flash extends flash.display.Sprite #end
{
	var nscore1:nx3.NScore;
	var nscore2:nx3.NScore;
	var drawingTools:nx3.utils.ScoreDrawingTools;
	
	#if flash
	var labelTime:flash.text.TextField;
	#end
	
	#if js
	public static function main() {
		new Main();
	}
	#end

	public function new() 
	{
		#if flash super(); #end
		
		// Assets:
		// openfl.Assets.getBitmapData("img/assetname.jpg");
		
		nscore2 = new NScore([
			new NBar([new NPart([new NVoice([
				new NNote([new NHead(0)])
				, new NNote([new NHead(0)])
				, new NNote([new NHead(0)])
				,new NNote([new NHead(4, ESign.Flat)], ENoteVal.Nv16)
				,new NNote([new NHead(3)], ENoteVal.Nv16)
				,new NNote([new NHead(1, ESign.Flat)], ENoteVal.Nv16)
				,new NNote([new NHead(4, ESign.Flat)], ENoteVal.Nv16)	
			])])])
			
			, new NBar([new NPart([new NVoice([
				new NNote([new NHead(4, ESign.Flat)], ENoteVal.Nv4)
				,new NNote([new NHead(4, ESign.Flat)], ENoteVal.Nv4)
				, new NNote([new NHead(0)])
				, new NNote([new NHead(0)])
			])])])
		]);
		
		nscore1= TestItemsBach.scoreBachSinfonia4();		
		
		var scaling = Scaling.NORMAL;
		var pscore1 = new PScore(nscore1);		

		#if flash
		var sprite = new flash.display.Sprite();
		sprite.y = 60;
		this.addChild(sprite);
		var target = new nx3.render.TargetSprite(sprite, scaling);
		#end
		
		#if js
		var target = new nx3.render.TargetSvgXml('test', scaling);
		#end
		
		var render = new Renderer(target);				
		
		var width = 800 / scaling.unitX;
		
		var size = render.renderScore(pscore1, 0, 0, width);
		
		#if js
			var svgXml = target.getXml().toString();
				
			var div = JsSvgTools.createDivElement(svgXml);			
			doc.body.appendChild(div);
			
			var canvas:CanvasElement = cast div.children[1];
			trace(canvas.id);
			var ctx = canvas.getContext2d();
			
			drawingTools = new ScoreDrawingTools(pscore1, width, scaling, 60,  ctx);		
			
			canvas.addEventListener("mousemove", function(e: js.html.MouseEvent) {			
				var rect = canvas.getBoundingClientRect();
				var x = e.clientX - rect.left;
				//trace(x);
				var time = x / size.width;
				drawingTools.drawColumnFromTime(time * 30);
			});
			
		#end
		
		#if flash 
			var layer = new flash.display.Sprite();
			sprite.addChild(layer);
			var ctx = layer.graphics;
			
			drawingTools = new ScoreDrawingTools(pscore1, width, scaling, 60,  ctx);		
			
			sprite.graphics.beginFill(0x00FF00, 0.0);
			sprite.graphics.drawRect(0, 0, size.width, size.height);
			
			//drawingTools.setLineStyle(0xFFFF00, 2);
			
			sprite.addEventListener(flash.events.MouseEvent.MOUSE_MOVE , function(e) {				
				//trace(layer.mouseX);		
				var x = layer.mouseX;
				var time = x / size.width;
				drawingTools.drawColumnFromTime(time * 30);				
			});			
		#end

		//drawingTools.drawNotesRects(0xFF0000);
		this.setupUI();

	}
	
	function setupUI() {
		
		#if js
			js.Browser.document.getElementById('btn1').addEventListener('click', function(_) {
				Wav16PartsBuilder.getInstance().getScoreWav16Async(this.nscore1, 60).handle(function(wav16) {
					trace('FINISHED nscore1');
					 Wav16SoundManager.getInstance().initSound(wav16, playCallback, nscore1.uuid + '60');
					 this.drawingTools.drawColumnFromTime(0);
					 Wav16SoundManager.getInstance().start(0);										
				});		 				 
			});
			
			js.Browser.document.getElementById('btn2').addEventListener('click', function(_) {
				Wav16PartsBuilder.getInstance().getScoreWav16Async(this.nscore1, 120).handle(function(wav16) {
					trace('FINISHED nscore1 120');
					 Wav16SoundManager.getInstance().initSound(wav16, playCallback, nscore1.uuid+ '120');
					 Wav16SoundManager.getInstance().start(0);		
					 this.drawingTools.drawColumnFromTime(0);
				});					 
			});	
			
			js.Browser.document.getElementById('stop').addEventListener('click', function(_) {
				 Wav16SoundManager.getInstance().stop();
			});	
		#end
		
		#if flash
			var b1 = new flash.display.Sprite();
			flash.Lib.current.addChild(b1);
			b1.graphics.beginFill(0x0000FF);
			b1.graphics.drawRect(10, 10, 70, 30);
			b1.addEventListener(flash.events.MouseEvent.CLICK, function(e) {
				//var w16 = Wav16PartsBuilder.getInstance().getScore(nscore1, 60);
				 //Wav16SoundManager.getInstance().initSound(w16, playCallback, nscore1.uuid);
				 //Wav16SoundManager.getInstance().start(0);					
				Wav16PartsBuilder.getInstance().getScoreWav16Async(this.nscore1, 60).handle(function(wav16) {
					trace('FINISHED nscore1');
					 Wav16SoundManager.getInstance().initSound(wav16, playCallback, nscore1.uuid + '60');
					 Wav16SoundManager.getInstance().start(0);										
				});					 
				 
			});

			var b2 = new flash.display.Sprite();
			flash.Lib.current.addChild(b2);
			b2.graphics.beginFill(0x0000FF);
			b2.graphics.drawRect(110, 10, 70, 30);
			b2.addEventListener(flash.events.MouseEvent.CLICK, function(e) {
				/*
				var w16 = Wav16PartsBuilder.getInstance().getScore(nscore2, 60);	
				 Wav16SoundManager.getInstance().initSound(w16, playCallback, nscore2.uuid);
				 Wav16SoundManager.getInstance().start(0);				
				 */
				Wav16PartsBuilder.getInstance().getScoreWav16Async(this.nscore1, 120).handle(function(wav16) {
					trace('FINISHED nscore1 120');
					 Wav16SoundManager.getInstance().initSound(wav16, playCallback, nscore2.uuid+ '120');
					 Wav16SoundManager.getInstance().start(0);										
				});					 
				 
			});
			
			var bStop = new flash.display.Sprite();
			flash.Lib.current.addChild(bStop);
			bStop.graphics.beginFill(0x0000FF);
			bStop.graphics.drawRect(210, 10, 70, 30);
			bStop.addEventListener(flash.events.MouseEvent.CLICK, function(e) {
				 Wav16SoundManager.getInstance().stop();				
			});
			
			labelTime = new flash.text.TextField();
			labelTime.text = '123';
			labelTime.x = 300;
			labelTime.y = 0;
			this.addChild(labelTime);
			
			
		#end
	}	
	
	function playCallback(key:String, pos:Float):Void {
		#if js
			js.Browser.document.getElementById('label').textContent = Std.string(pos);
		#end
		
		#if flash
			this.labelTime.text = Std.string(pos);
		#end
		
		this.drawingTools.drawColumnFromTime(pos);	
	}	
	
	
}
