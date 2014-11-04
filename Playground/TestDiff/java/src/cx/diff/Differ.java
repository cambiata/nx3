package cx.diff;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class Differ extends haxe.lang.HxObject
{
	public    Differ(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    Differ(java.lang.Object originalObject)
	{
		cx.diff.Differ.__hx_ctor_cx_diff_Differ(this, originalObject);
	}
	
	
	public static   void __hx_ctor_cx_diff_Differ(cx.diff.Differ __temp_me33, java.lang.Object originalObject)
	{
		__temp_me33.diffinfos = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		__temp_me33.currentObject = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
		__temp_me33.modify(originalObject, "Init");
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new cx.diff.Differ(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new cx.diff.Differ(((java.lang.Object) (arr.__get(0)) ));
	}
	
	
	public  java.lang.Object currentObject;
	
	public  haxe.root.Array<java.lang.Object> diffinfos;
	
	public   void modify(java.lang.Object modifiedObject, java.lang.String label)
	{
		if (( label == null )) 
		{
			label = "Change";
		}
		
		java.lang.String diff = cx.diff.DiffTools.diffObject(this.currentObject, modifiedObject);
		java.lang.Object diffstamp = null;
		{
			haxe.root.Date __temp_odecl258 = haxe.root.Date.now();
			diffstamp = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"diff", "label", "time"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{diff, label, __temp_odecl258}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
		}
		
		this.diffinfos.push(diffstamp);
		this.currentObject = modifiedObject;
	}
	
	
	public   java.lang.Object undo()
	{
		if (( this.diffinfos.length <= 1 )) 
		{
			throw haxe.lang.HaxeException.wrap("Nothing to undo");
		}
		
		java.lang.Object lastdiff = this.diffinfos.pop();
		java.lang.Object restoredObject = cx.diff.DiffTools.unpatchObject(this.currentObject, haxe.lang.Runtime.toString(haxe.lang.Runtime.getField(lastdiff, "diff", true)));
		this.currentObject = restoredObject;
		return new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"info", "obj"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{lastdiff, restoredObject}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
	}
	
	
	public   java.lang.Object current()
	{
		return haxe.Unserializer.run(haxe.Serializer.run(this.currentObject));
	}
	
	
	public   java.lang.Object initial()
	{
		java.lang.Object firstdiff = this.diffinfos.__get(0);
		return cx.diff.DiffTools.patchOject(new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{})), haxe.lang.Runtime.toString(haxe.lang.Runtime.getField(firstdiff, "diff", true)));
	}
	
	
	public   haxe.root.Array<java.lang.Object> getDiffinfos()
	{
		return this.diffinfos;
	}
	
	
	public   void test(java.lang.Object obj1, java.lang.Object obj2)
	{
		java.lang.String diff = cx.diff.DiffTools.diffObject(obj1, obj2);
		java.lang.Object patched = cx.diff.DiffTools.patchOject(obj1, diff);
		java.lang.Object unpatched = cx.diff.DiffTools.unpatchObject(obj2, diff);
		haxe.Log.trace.__hx_invoke2_o(0.0, obj1, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"cx.diff.Differ", "Differ.hx", "test"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (62) )) )})));
		haxe.Log.trace.__hx_invoke2_o(0.0, obj2, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"cx.diff.Differ", "Differ.hx", "test"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (63) )) )})));
		haxe.Log.trace.__hx_invoke2_o(0.0, patched, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"cx.diff.Differ", "Differ.hx", "test"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (64) )) )})));
		haxe.Log.trace.__hx_invoke2_o(0.0, unpatched, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"cx.diff.Differ", "Differ.hx", "test"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (65) )) )})));
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef259 = true;
			switch (field.hashCode())
			{
				case 2111933976:
				{
					if (field.equals("currentObject")) 
					{
						__temp_executeDef259 = false;
						this.currentObject = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef259) 
			{
				return super.__hx_setField_f(field, value, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef260 = true;
			switch (field.hashCode())
			{
				case 1306255520:
				{
					if (field.equals("diffinfos")) 
					{
						__temp_executeDef260 = false;
						this.diffinfos = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 2111933976:
				{
					if (field.equals("currentObject")) 
					{
						__temp_executeDef260 = false;
						this.currentObject = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef260) 
			{
				return super.__hx_setField(field, value, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_getField(java.lang.String field, boolean throwErrors, boolean isCheck, boolean handleProperties)
	{
		{
			boolean __temp_executeDef261 = true;
			switch (field.hashCode())
			{
				case 3556498:
				{
					if (field.equals("test")) 
					{
						__temp_executeDef261 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("test"))) );
					}
					
					break;
				}
				
				
				case 2111933976:
				{
					if (field.equals("currentObject")) 
					{
						__temp_executeDef261 = false;
						return this.currentObject;
					}
					
					break;
				}
				
				
				case 1296650730:
				{
					if (field.equals("getDiffinfos")) 
					{
						__temp_executeDef261 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getDiffinfos"))) );
					}
					
					break;
				}
				
				
				case 1306255520:
				{
					if (field.equals("diffinfos")) 
					{
						__temp_executeDef261 = false;
						return this.diffinfos;
					}
					
					break;
				}
				
				
				case 1948342084:
				{
					if (field.equals("initial")) 
					{
						__temp_executeDef261 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("initial"))) );
					}
					
					break;
				}
				
				
				case -1068795718:
				{
					if (field.equals("modify")) 
					{
						__temp_executeDef261 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("modify"))) );
					}
					
					break;
				}
				
				
				case 1126940025:
				{
					if (field.equals("current")) 
					{
						__temp_executeDef261 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("current"))) );
					}
					
					break;
				}
				
				
				case 3594468:
				{
					if (field.equals("undo")) 
					{
						__temp_executeDef261 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("undo"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef261) 
			{
				return super.__hx_getField(field, throwErrors, isCheck, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   double __hx_getField_f(java.lang.String field, boolean throwErrors, boolean handleProperties)
	{
		{
			boolean __temp_executeDef262 = true;
			switch (field.hashCode())
			{
				case 2111933976:
				{
					if (field.equals("currentObject")) 
					{
						__temp_executeDef262 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.currentObject)) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef262) 
			{
				return super.__hx_getField_f(field, throwErrors, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_invokeField(java.lang.String field, haxe.root.Array dynargs)
	{
		{
			boolean __temp_executeDef263 = true;
			switch (field.hashCode())
			{
				case 3556498:
				{
					if (field.equals("test")) 
					{
						__temp_executeDef263 = false;
						this.test(dynargs.__get(0), dynargs.__get(1));
					}
					
					break;
				}
				
				
				case -1068795718:
				{
					if (field.equals("modify")) 
					{
						__temp_executeDef263 = false;
						this.modify(dynargs.__get(0), haxe.lang.Runtime.toString(dynargs.__get(1)));
					}
					
					break;
				}
				
				
				case 1296650730:
				{
					if (field.equals("getDiffinfos")) 
					{
						__temp_executeDef263 = false;
						return this.getDiffinfos();
					}
					
					break;
				}
				
				
				case 3594468:
				{
					if (field.equals("undo")) 
					{
						__temp_executeDef263 = false;
						return this.undo();
					}
					
					break;
				}
				
				
				case 1948342084:
				{
					if (field.equals("initial")) 
					{
						__temp_executeDef263 = false;
						return this.initial();
					}
					
					break;
				}
				
				
				case 1126940025:
				{
					if (field.equals("current")) 
					{
						__temp_executeDef263 = false;
						return this.current();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef263) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("diffinfos");
		baseArr.push("currentObject");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


