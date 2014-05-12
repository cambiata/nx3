package cx;

import haxe.Timer;

/**
 * ...
 * @author Jonas Nyström
 */

class TimerTools 
{
	

	static private var _timer:Timer = null; 
	static public function timeout(func:Void->Void, milliSeconds:Int = 500) 
	{
		if (_timer != null) _timer.stop();		
		 _timer = Timer.delay(func, milliSeconds);
	}
	 
	
	 //----------------------------------------------------------------------------------------------------------------
	 
	static public function delay(func:Void->Void, milliSeconds:Int = 500) 
	{
		#if neko
			neko.vm.Thread.create(function() 
			{
				Sys.sleep(milliSeconds / 1000);
				func();
			});
		#else
			Timer.delay(func, milliSeconds);
		#end
	}
	
	//---------------------------------------------------------------------------------------------------------------
	
	static public function timer(func:Void->Void, milliSeconds:Int = 500):Dynamic
	{
		var timer:Timer = new Timer(milliSeconds);
		timer.run = func;
		return timer;
	}
	
	
}