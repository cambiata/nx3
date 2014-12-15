package nx3;
import nx3.NBars;
using Lambda;
/**
 * ...
 * @author Jonas Nyström
 */
@:access(nx3.NBar)
 
class NScore
{
	public var nbars(default, null):NBars;

	public var configuration(default, default): Dynamic;
	
	
	public function new(nbars:NBars) 
	{
		this.nbars = nbars;
		for (bar in nbars) bar.nscore = this;
		this.configuration = { };
		this.configuration.test = 123;
		this.configuration.rtempo = 80;
		this.configuration.rlength = 3;		
		this.configuration.rcountin = 2;		
	}
	
	public function getNBar(idx:Int):NBar return (idx < 0 || idx > this.nbars.length) ? null : this.nbars[idx];
	
	public function iterator() return this.nbars.iterator();
	public var length (get, null):Int;
	private function get_length():Int return this.nbars.length;		
	
	public function getTag():String {
		var bartags = '';
		this.nbars.iter(function(nbar) bartags += nbar.getTag());
		return '#$bartags';			
	}
	
}