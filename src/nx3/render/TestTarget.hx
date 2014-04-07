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
		this.target.testLines(0, 0, 200);
		this.target.testSymbol(20, 0);		
		this.target.testSymbol(60,0, Elements.clefG);		
		this.target.testSymbol(120,0, Elements.clefC);		
		this.target.testLines(0, 100, 200);
		this.target.testSymbol(20, 100);		
		this.target.testSymbol(60,100, Elements.clefG);		
		this.target.testSymbol(120,100, Elements.clefC);		
	}	
	
	
}