package nx3.test;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class Unittests extends haxe.lang.HxObject
{
	public    Unittests(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    Unittests()
	{
		nx3.test.Unittests.__hx_ctor_nx3_test_Unittests(this);
	}
	
	
	public static   void __hx_ctor_nx3_test_Unittests(nx3.test.Unittests __temp_me211)
	{
		{
		}
		
	}
	
	
	public static   void performTests()
	{
		haxe.unit.TestRunner runner = new haxe.unit.TestRunner();
		haxe.root.Date start_time = haxe.root.Date.now();
		runner.add(new nx3.test.TestN());
		runner.add(new nx3.test.TestTargetSvgXml());
		runner.add(new nx3.test.TestEvents());
		haxe.root.Date end_time = haxe.root.Date.now();
		boolean success = runner.run();
		int __temp_stmt887 = 0;
		{
			double x = ( ((double) (end_time.date.getTime()) ) - ((double) (start_time.date.getTime()) ) );
			__temp_stmt887 = ((int) (x) );
		}
		
		haxe.unit.TestRunner.print.__hx_invoke1_o(0.0, ( ( "Testing time: " + __temp_stmt887 ) + "ms" ));
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.test.Unittests(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.test.Unittests();
	}
	
	
}


