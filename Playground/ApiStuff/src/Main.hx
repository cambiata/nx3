package;

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
import nx3.PScore;
import nx3.PSystem;
import nx3.PSystemBar;
import nx3.PSystemConfig;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.TargetSprite;
import nx3.test.TestItems;
import nx3.test.TestItemsBach;
import openfl.display.Sprite;
import openfl.Lib;
using cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */

class Main extends Sprite 
{

	public function new() 
	{
		super();
		
		// Assets:
		// openfl.Assets.getBitmapData("img/assetname.jpg");
		
		var nscore = new NScore([
			new NBar([new NPart([new NVoice([
				new NNote([new NHead(4, ESign.Flat)], ENoteVal.Nv16)
				,new NNote([new NHead(3)], ENoteVal.Nv16)
				,new NNote([new NHead(1, ESign.Flat)], ENoteVal.Nv16)
				,new NNote([new NHead(4, ESign.Flat)], ENoteVal.Nv16)	
			])], EClef.ClefG, EDisplayALN.Never, EKey.Sharp1, EDisplayALN.Never)], ETime.Time4_4, EDisplayALN.Never, EAllotment.Logaritmic, 8)
		]);
		
		//var nscore = TestItemsBach.scoreBachSinfonia4();		
		var pscore = new PScore(nscore);		
		var target = new TargetSprite(this, Scaling.SMALL);
		var render = new Renderer(target);		
		var system = pscore.getSystems(1000).first();
		var sysbar = system.getSystembars().first();
		render.drawBarAttributes(system, sysbar);
		render.drawBarContent(system, sysbar);
		
	}
}
