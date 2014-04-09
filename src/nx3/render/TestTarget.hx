package nx3.render;
import nx3.render.ITarget;
import nx3.render.svg.Elements;

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
		this.target.testSymbol(60,80, Elements.clefG);		
		this.target.testSymbol(120,80, Elements.clefC);		
		this.target.testSymbol(180,80, Elements.clefF);		
	}	
	
	
}