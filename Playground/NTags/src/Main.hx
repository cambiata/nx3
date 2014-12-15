package;

import haxe.ds.StringMap;
import haxe.Timer;
import neko.Lib;
import nx3.NBars;
import nx3.NScore;
import nx3.NTags;
import nx3.test.TestItemsBach;

/**
 * ...
 * @author Jonas Nyström
 */

class Main 
{
	
	static function main() 
	{
		var nscore:NScore = TestItemsBach.scoreBachSinfonia4();
		var tag:String = nscore.getTag();
		var bars = nscore.nbars;
		var newbars = new NBars();
		
		for (i in 0 ... 10)
			for (bar in bars)
				newbars.push(bar);
		
		trace(newbars.length);
		var newscore = new NScore(newbars);
		
		var perf = new Performance(1000);
		
		//perf.addFunction('create score', function() var nscore = TestItemsBach.scoreBachSinfonia4(););
		perf.addFunction('get tags', function() var tag = newscore.getTag());
		perf.run('Test some stuff:');		
	}
	
	
	
}

class Performance {
	var iterations:Int;
	
	var testfunctions:StringMap<Void->Void>;
	var timeout:Float;
	
	public function new(iterations:Int, maxtime:Float = 15) {
		this.iterations = iterations;
		this.timeout = maxtime;
		this.testfunctions = new StringMap<Void->Void>();		
	}
	
	public function addFunction(descr:String, func:Void->Void) {
		this.testfunctions.set(descr, func);		
	}
	
	public function run(mainDescr:String = '') {
		if (mainDescr != '') trace('$mainDescr $timeout');
		
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
					trace(' (running test $descr - $i of $iterations )');
					notify = 0;
				}
				if (total > timeout) {
					trace(' max testing timeout reached!');
					break;
				}
			}
			trace(' - $descr : $avg ms (max: $max, min: $min)');
		}
	}
}
