package ;

import js.Lib;
import snap.Snap;

/**
 * ...
 * @author Jonas Nyström
 */

class Main 
{
	
	static function main() 
	{
		var s = new Snap("#main");

		var bigCircle = s.circle(150, 150, 100);
		bigCircle.attr({
    		fill: "#bada55",
    		stroke: "#000",
    		strokeWidth: 5
		});

		var smallCircle = s.circle(100, 150, 70);
		var discs = s.group(s, [smallCircle, s.circle(200, 150, 70)]);
		discs.attr({
		    fill: "#fff"
		});

		bigCircle.attr({
    		mask: discs
		});

		smallCircle.animate({r: 50}, 1000);

		discs.select("circle:nth-child(2)").animate({r: 50}, 1000);

		var p:SnapElement = s.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
	        fill: "none",
	        stroke: "#bada55",
	        strokeWidth: 5
    	});

		p = p.pattern(0, 0, 10, 10);
		bigCircle.attr({
		    fill: p
		});

		discs.attr({
		    fill: new Snap("#pattern")
		});
		discs.attr({fill: "r()#fff-#000"});
		discs.attr({fill: "R(150, 150, 100)#fff-#000"});
		p.select("path").animate({stroke: "#f00"}, 1000);
		
		Snap.load("mascot.svg", function (f) {
		    f.selectAll("polygon[fill='#09B39C']").attr({fill: "#bada55"});
		    var g = f.select("g");			
			s.el('g', null).append(g);						
		    g.drag();
		});
		
		Snap.load("clefG.svg", function (f) {
			s.el('g', null).append(f);					    
		});				
		
		s.text(200, 100, "Snap.svg");
		var t = s.text(200, 120, ["Snap", ".", "svg"]);		
		
	}
	
}