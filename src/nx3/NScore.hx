package nx3;
import nx3.NBars;

/**
 * ...
 * @author Jonas Nyström
 */
@:access(nx3.NBar)
 
class NScore
{
	public var nbars(default, null):NBars;

	public function new(nbars:NBars) 
	{
		this.nbars = nbars;
		for (bar in nbars) bar.nscore = this;
	}
	
	public function getNBar(idx:Int):NBar return (idx < 0 || idx > this.nbars.length) ? null : this.nbars[idx];
	
}