package nx3.render;
import nx3.render.scaling.TScaling;
import snap.Snap;

/**
 * ...
 * @author Jonas Nyström
 */
class TargetSvg implements ITarget
{
	var targetDivId:String;
	var jsFileName:String;
	var scaling:TScaling;
	var snap:Snap;

	public function new(targetDivId: String, scaling:TScaling, jsFileName:String=null) 
	{
		this.targetDivId = targetDivId;
		this.scaling = scaling;
		this.jsFileName = jsFileName;
		this.snap = new Snap(targetDivId);
	}
		
	public function test():Void 
	{
		var bigCircle = this.snap.circle(150, 150, 100);
		bigCircle.attr({
    		fill: "#bada55",
    		stroke: "#000",
    		strokeWidth: 5
		});
	}
	
	public function test2():Void
	{
		var c = this.snap.circle(250, 250, 100);
		c.attr({
    		fill: "#ff0000",
    		stroke: "#000",
    		strokeWidth: 3
		});
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function testLines(x:Float, y:Float, width:Float):Void 
	{
		//this.snap.line(x, y, x + width, y);
		//this.target.graphics.lineStyle(this.scaling.linesWidth, 0xAAAAAA);	
		
		for (i in -2...3)
		{
			var cy = y + i * scaling.space;
			//this.target.graphics.moveTo(x, cy);
			//this.target.graphics.lineTo(x + width, cy);			
			var line = this.snap.line(x, cy, x + width, cy);
			line.attr( {
				stroke: "#000",
				strokeWidth: scaling.linesWidth,
			});
		}		
		
		
	}

	
	
	/*
	public function getHtml():String
	{
		var html = '<!DOCTYPE html><html lang="en"><head>	<meta charset="utf-8"/>	<title>_nx3-examples</title>	<meta name="description" content="" />	<script src="snap.svg.js"></script></head><body>		  <svg id="{$this.targetDivId}" style="width:500px;height:500px;background:green;">	  </svg>		<script src="{this.jsFileName}"></script>	<script>	</script></body></html>';
		return html;
	}
	*/
}