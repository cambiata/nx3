package ;

import flash.display.Sprite;
import flash.events.Event;
import flash.Lib;
import nx3.audio.NoteSoundCalculator;
import nx3.audio.PlayerFactory;
import nx3.audio.WavConcatenator;
import nx3.ENoteValTools;
import nx3.flash.ScoreSprite;
import nx3.NBar;
import nx3.NScore;
import nx3.PNote;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.TargetSprite;
import nx3.test.TestItems;
import nx3.utils.ScoreModifier;
import nx3.xml.ScoreXML;
import thx.core.Tuple.Tuple2;

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

		// (your code here)
		
		// Stage:
		// stage.stageWidth x stage.stageHeight @ stage.dpiScale
		
		// Assets:
		// nme.Assets.getBitmapData("img/assetname.jpg");
		
		var xmlStr = '
<score>
	<config test="12345" />
	<bar time="2/4">
		<part clef="ClefG"
		      key="Natural">
			<voice>
				<note val="4.">
					<headx level="1" />
				</note>
				<note val="8">
					<headx level="1" />
				</note>
			</voice>
		</part>
	</bar>

	<bar>
		<part >
			<voice>
				<note val="4">
					<headx level="1" />
				</note>
				<note val="4">
					<headx level="1" />
				</note>
			</voice>
		</part>
	</bar>	
	
	<bar>
		<part >
			<voice>
				<note val="4">
					<headx level="1" />
				</note>
				<note val="8">
					<headx level="1" />
				</note>
				<note val="8">
					<headx level="1" />
				</note>				
			</voice>
		</part>
	</bar>		
	
	<bar>
		<part >
			<voice>
				<note val="8">
					<headx level="1" />
				</note>
				<note val="8">
					<headx level="1" />
				</note>
				<note val="4">
					<headx level="1" />
				</note>				
			</voice>
		</part>
	</bar>	
	
	<bar>
		<part >
			<voice>
				<note val="2">
					<headx level="1" />
				</note>		
			</voice>
		</part>
	</bar>			
</score>
';				

var xmlStr = '
<score>
	<config test="12345" />
	<bar time="2/4">
		<part clef="ClefG"
		      key="Sharp2">
			<voice>
				<note val="2">
					<headx level="7" />
				</note>
			</voice>
		</part>
	</bar>
	
	<bar>
		<part >
			<voice>
				<note val="2">
					<headx level="6" />
				</note>
			</voice>
		</part>
	</bar>
	
	<bar>
		<part >
			<voice>
				<note val="2">
					<headx level="5" />
				</note>
			</voice>
		</part>
	</bar>	
	
	<bar>
		<part >
			<voice>
				<note val="2">
					<headx level="4" />
				</note>
			</voice>
		</part>
	</bar>

	<bar>
		<part >
			<voice>
				<note val="2">
					<headx level="3" />
				</note>
			</voice>
		</part>
	</bar>	
	
	
</score>
';	

		var nsc:NoteSoundCalculator = new NoteSoundCalculator();
		var conc:WavConcatenator = new WavConcatenator();
		var player:PlayerFactory = new PlayerFactory();

		var nscore = ScoreXML.fromXmlStr(xmlStr);
		var ss = new ScoreSprite(nscore, Scaling.NORMAL);		
		this.addChild(ss);
		ss.y = -50;
		var mod = new ScoreModifier(nscore);
		
		
		var randomscore = mod.getRandomScore(5, null, null, true);
		var ssrandom = new ScoreSprite(randomscore, Scaling.NORMAL);
		this.addChild(ssrandom);
		ssrandom.y = 50;
		ssrandom.barClickHandler = function (barNr:Int, nbar:NBar, nscore:NScore) {
			var snotes = nsc.getPlayableNotesFromTopVoice(nscore);
			var wav = conc.getWav(snotes, 120);
			var play = player.getPlayFunction(wav);
			play();
		}		
		
		var modadd = new ScoreModifier(null);		
		var ssnew = new ScoreSprite(null, Scaling.MID);
		ssnew.y = 600;
		this.addChild(ssnew);		
		
		for (barnr in 0...nscore.nbars.length)
		{
			var barscore = mod.getBarNrAsScore(barnr);
			var bss = new ScoreSprite(barscore, Scaling.MID);
			bss.y = 300;
			bss.x = barnr * 220;
			this.addChild(bss);		
			bss.barClickHandler = function (baridx:Int, nbar:NBar, nscore:NScore) {
				var nscore = modadd.addBarToScore(nbar);
				ssnew.setScore(nscore);
			}			
		}
		
		ss.barClickHandler = function(barNr:Int, nbar:NBar, nscore:NScore) {
			var nscore = modadd.addBarToScore(nbar);			
			ssnew.setScore(nscore);
		};
		

		
		ssnew.barClickHandler = function (barNr:Int, nbar:NBar, nscore:NScore) {
			var snotes = nsc.getPlayableNotesFromTopVoice(nscore);
			var wav = conc.getWav(snotes, 120);
			var play = player.getPlayFunction(wav);
			play();
		}		
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
