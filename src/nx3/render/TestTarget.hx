package nx3.render;
import nx3.NBar;
import nx3.NPart;
import nx3.NVoice;
import nx3.QNote.QNote16;
import nx3.render.ITarget;
import nx3.render.svg.SvgElements;
import nx3.VBar;

/**
 * ...
 * @author Jonas Nyström
 */
class TestTarget
{
	var target:ITarget;

	public function new(target:ITarget) 
	{
		this.target = target;
	}
	
	public function test()
	{
		this.target.testLines(0, 80, 240);
		this.target.testSymbol(20, 80);		
		this.target.testSymbol(60,80, SvgElements.clefG);		
		this.target.testSymbol(120,80, SvgElements.clefC);		
		this.target.testSymbol(180,80, SvgElements.clefF);		
	}	

	static public function testBar1():VBar
	{
		var vbar = new VBar(new NBar([
			new NPart([new QVoice([8, 8, 8, 8], [ -1, -2, 1, 1])]),
			new NPart([	
				new NVoice([
					new QNote16([ -1, 0]), new QNote16([ 0, 1 ], '#'),  new QNote16([ 1, 2 ]),  new QNote16([ 5, 7 ]),
					new QNote16([ 0, 1]), new QNote16([ 0, 2 ]),  new QNote16([ 0, 3 ]),  new QNote16([ 0, 2 ]),
					])
			]),
		]));				
		return vbar;		
	}
	
}