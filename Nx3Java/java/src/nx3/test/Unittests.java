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
	
	
	public static   void __hx_ctor_nx3_test_Unittests(nx3.test.Unittests __temp_me186)
	{
		{
		}
		
	}
	
	
	public static   void performTests()
	{
		haxe.unit.TestRunner runner = new haxe.unit.TestRunner();
		runner.add(new nx3.test.TestN());
		runner.add(new nx3.test.TestSound());
		boolean success = runner.run();
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


