package haxe.root;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class EReg extends haxe.lang.HxObject
{
	public    EReg(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    EReg(java.lang.String r, java.lang.String opt)
	{
		haxe.root.EReg.__hx_ctor__EReg(this, r, opt);
	}
	
	
	public static   void __hx_ctor__EReg(haxe.root.EReg __temp_me3, java.lang.String r, java.lang.String opt)
	{
		int flags = 0;
		{
			int _g1 = 0;
			int _g = opt.length();
			while (( _g1 < _g ))
			{
				int i = _g1++;
				{
					int _g2 = 0;
					if (( i < opt.length() )) 
					{
						_g2 = ((int) (opt.charAt(i)) );
					}
					 else 
					{
						_g2 = -1;
					}
					
					switch (_g2)
					{
						case 105:
						{
							flags |= java.util.regex.Pattern.CASE_INSENSITIVE;
							break;
						}
						
						
						case 109:
						{
							flags |= java.util.regex.Pattern.MULTILINE;
							break;
						}
						
						
						case 115:
						{
							flags |= java.util.regex.Pattern.DOTALL;
							break;
						}
						
						
						case 103:
						{
							__temp_me3.isGlobal = true;
							break;
						}
						
						
					}
					
				}
				
			}
			
		}
		
		__temp_me3.matcher = java.util.regex.Pattern.compile(haxe.lang.Runtime.toString(haxe.root.EReg.convert(r)), ((int) (flags) )).matcher(((java.lang.CharSequence) ("") ));
		__temp_me3.pattern = r;
	}
	
	
	public static   java.lang.String convert(java.lang.String r)
	{
		return r;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new haxe.root.EReg(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new haxe.root.EReg(haxe.lang.Runtime.toString(arr.__get(0)), haxe.lang.Runtime.toString(arr.__get(1)));
	}
	
	
	public  java.lang.String pattern;
	
	public  java.util.regex.Matcher matcher;
	
	public  java.lang.String cur;
	
	public  boolean isGlobal;
	
	public   boolean match(java.lang.String s)
	{
		this.cur = s;
		this.matcher = this.matcher.reset(((java.lang.CharSequence) (s) ));
		return this.matcher.find();
	}
	
	
	public   java.lang.String matched(int n)
	{
		if (( n == 0 )) 
		{
			return this.matcher.group();
		}
		 else 
		{
			return this.matcher.group(((int) (n) ));
		}
		
	}
	
	
	public   java.lang.String replace(java.lang.String s, java.lang.String by)
	{
		this.matcher.reset(((java.lang.CharSequence) (s) ));
		by = haxe.lang.StringExt.split(by, "$$").join("\\$");
		if (this.isGlobal) 
		{
			return this.matcher.replaceAll(haxe.lang.Runtime.toString(by));
		}
		 else 
		{
			return this.matcher.replaceFirst(haxe.lang.Runtime.toString(by));
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef260 = true;
			switch (field.hashCode())
			{
				case -568986259:
				{
					if (field.equals("isGlobal")) 
					{
						__temp_executeDef260 = false;
						this.isGlobal = haxe.lang.Runtime.toBool(value);
						return value;
					}
					
					break;
				}
				
				
				case -791090288:
				{
					if (field.equals("pattern")) 
					{
						__temp_executeDef260 = false;
						this.pattern = haxe.lang.Runtime.toString(value);
						return value;
					}
					
					break;
				}
				
				
				case 98880:
				{
					if (field.equals("cur")) 
					{
						__temp_executeDef260 = false;
						this.cur = haxe.lang.Runtime.toString(value);
						return value;
					}
					
					break;
				}
				
				
				case 840862002:
				{
					if (field.equals("matcher")) 
					{
						__temp_executeDef260 = false;
						this.matcher = ((java.util.regex.Matcher) (value) );
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
				case 1094496948:
				{
					if (field.equals("replace")) 
					{
						__temp_executeDef261 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("replace"))) );
					}
					
					break;
				}
				
				
				case -791090288:
				{
					if (field.equals("pattern")) 
					{
						__temp_executeDef261 = false;
						return this.pattern;
					}
					
					break;
				}
				
				
				case 840861988:
				{
					if (field.equals("matched")) 
					{
						__temp_executeDef261 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("matched"))) );
					}
					
					break;
				}
				
				
				case 840862002:
				{
					if (field.equals("matcher")) 
					{
						__temp_executeDef261 = false;
						return this.matcher;
					}
					
					break;
				}
				
				
				case 103668165:
				{
					if (field.equals("match")) 
					{
						__temp_executeDef261 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("match"))) );
					}
					
					break;
				}
				
				
				case 98880:
				{
					if (field.equals("cur")) 
					{
						__temp_executeDef261 = false;
						return this.cur;
					}
					
					break;
				}
				
				
				case -568986259:
				{
					if (field.equals("isGlobal")) 
					{
						__temp_executeDef261 = false;
						return this.isGlobal;
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
	
	
	@Override public   java.lang.Object __hx_invokeField(java.lang.String field, haxe.root.Array dynargs)
	{
		{
			boolean __temp_executeDef262 = true;
			switch (field.hashCode())
			{
				case 1094496948:
				{
					if (field.equals("replace")) 
					{
						__temp_executeDef262 = false;
						return this.replace(haxe.lang.Runtime.toString(dynargs.__get(0)), haxe.lang.Runtime.toString(dynargs.__get(1)));
					}
					
					break;
				}
				
				
				case 103668165:
				{
					if (field.equals("match")) 
					{
						__temp_executeDef262 = false;
						return this.match(haxe.lang.Runtime.toString(dynargs.__get(0)));
					}
					
					break;
				}
				
				
				case 840861988:
				{
					if (field.equals("matched")) 
					{
						__temp_executeDef262 = false;
						return this.matched(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef262) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("isGlobal");
		baseArr.push("cur");
		baseArr.push("matcher");
		baseArr.push("pattern");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


