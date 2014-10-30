package haxe;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class CallStack extends haxe.lang.HxObject
{
	public    CallStack(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    CallStack()
	{
		haxe.CallStack.__hx_ctor_haxe_CallStack(this);
	}
	
	
	public static   void __hx_ctor_haxe_CallStack(haxe.CallStack __temp_me40)
	{
		{
		}
		
	}
	
	
	public static   haxe.root.Array<haxe.StackItem> exceptionStack()
	{
		haxe.root.Array<haxe.StackItem> stack = new haxe.root.Array<haxe.StackItem>(new haxe.StackItem[]{});
		{
			int _g = 0;
			java.lang.StackTraceElement[] _g1 = haxe.lang.Exceptions.currentException().getStackTrace();
			while (( _g < _g1.length ))
			{
				java.lang.StackTraceElement el = _g1[_g];
				 ++ _g;
				java.lang.String className = el.getClassName();
				java.lang.String methodName = el.getMethodName();
				java.lang.String fileName = el.getFileName();
				int lineNumber = el.getLineNumber();
				haxe.StackItem method = haxe.StackItem.Method(className, methodName);
				if (( ( fileName != null ) || ( lineNumber >= 0 ) )) 
				{
					stack.push(haxe.StackItem.FilePos(method, fileName, lineNumber));
				}
				 else 
				{
					stack.push(method);
				}
				
			}
			
		}
		
		stack.shift();
		stack.pop();
		return stack;
	}
	
	
	public static   java.lang.String toString(haxe.root.Array<haxe.StackItem> stack)
	{
		haxe.root.StringBuf b = new haxe.root.StringBuf();
		{
			int _g = 0;
			while (( _g < stack.length ))
			{
				haxe.StackItem s = stack.__get(_g);
				 ++ _g;
				b.add("\nCalled from ");
				haxe.CallStack.itemToString(b, s);
			}
			
		}
		
		return b.toString();
	}
	
	
	public static   void itemToString(haxe.root.StringBuf b, haxe.StackItem s)
	{
		switch (haxe.root.Type.enumIndex(s))
		{
			case 0:
			{
				b.add("a C function");
				break;
			}
			
			
			case 1:
			{
				java.lang.String m = haxe.lang.Runtime.toString(s.params.__get(0));
				{
					b.add("module ");
					b.add(m);
				}
				
				break;
			}
			
			
			case 2:
			{
				int line = ((int) (haxe.lang.Runtime.toInt(s.params.__get(2))) );
				java.lang.String file = haxe.lang.Runtime.toString(s.params.__get(1));
				haxe.StackItem s1 = ((haxe.StackItem) (s.params.__get(0)) );
				{
					if (( s1 != null )) 
					{
						haxe.CallStack.itemToString(b, s1);
						b.add(" (");
					}
					
					b.add(file);
					b.add(" line ");
					b.add(line);
					if (( s1 != null )) 
					{
						b.add(")");
					}
					
				}
				
				break;
			}
			
			
			case 3:
			{
				java.lang.String meth = haxe.lang.Runtime.toString(s.params.__get(1));
				java.lang.String cname = haxe.lang.Runtime.toString(s.params.__get(0));
				{
					b.add(cname);
					b.add(".");
					b.add(meth);
				}
				
				break;
			}
			
			
			case 4:
			{
				int n = ((int) (haxe.lang.Runtime.toInt(s.params.__get(0))) );
				{
					b.add("local function #");
					b.add(n);
				}
				
				break;
			}
			
			
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new haxe.CallStack(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new haxe.CallStack();
	}
	
	
}


