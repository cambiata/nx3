package nx3.utils;
import haxe.ds.StringMap;
import haxe.Timer;

/**
 * Performance
 * @author Jonas Nyström
 */
class Performance {
	var iterations:Int;
	
	var testfunctions:StringMap<Void->Void>;
	var timeout:Float;
	
	public function new(iterations:Int, timeout:Float=15) {
		this.iterations = iterations;
		this.timeout = timeout;
		this.testfunctions = new StringMap<Void->Void>();		
	}
	
	public function addFunction(descr:String, func:Void->Void) {
		this.testfunctions.set(descr, func);		
	}
	
	public function run(mainDescr:String = '') {
		if (mainDescr != '') trace('$mainDescr');
		
		for (descr in this.testfunctions.keys()) {			
			var func = this.testfunctions.get(descr);
			var max:Float = 0;
			var min:Float = 10000000;
			var total:Float = 0;
			var notify:Float = 0;
			var avg:Float = 0;
			for (i in 0 ... this.iterations) {
				var stamp = Timer.stamp();
				func(); 
				var time = Timer.stamp() - stamp;				
				max = Math.max(max, time);
				min = Math.min(min, time);
				total += time;
				notify += time;
				avg = total / i;
				if (notify > 5) {
					trace(' (running test $descr - $i of $iterations)');
					notify = 0;
				}
				if (time > timeout) {
					trace(' max testing timeout reached!');
					break;
				}
			}
			trace(' - $descr : $avg ms (max: $max, min: $min)');
		}
	}
}