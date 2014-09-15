package nx3.test;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class SystemTests extends haxe.lang.HxObject
{
	public    SystemTests(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    SystemTests()
	{
		nx3.test.SystemTests.__hx_ctor_nx3_test_SystemTests(this);
	}
	
	
	public static   void __hx_ctor_nx3_test_SystemTests(nx3.test.SystemTests __temp_me103)
	{
		{
		}
		
	}
	
	
	public static   void performTests()
	{
		haxe.unit.TestRunner runner = new haxe.unit.TestRunner();
		haxe.root.Date start_time = haxe.root.Date.now();
		runner.add(new nx3.test.TestNHead());
		runner.add(new nx3.test.TestNNote());
		runner.add(new nx3.test.TestNVoice());
		runner.add(new nx3.test.TestQSNote());
		haxe.root.Date end_time = haxe.root.Date.now();
		boolean success = runner.run();
		int __temp_stmt319 = 0;
		{
			double x = ( ((double) (end_time.date.getTime()) ) - ((double) (start_time.date.getTime()) ) );
			__temp_stmt319 = ((int) (x) );
		}
		
		haxe.unit.TestRunner.print.__hx_invoke1_o(0.0, ( ( "Testing time: " + __temp_stmt319 ) + "ms" ));
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.test.SystemTests(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.test.SystemTests();
	}
	
	
}


