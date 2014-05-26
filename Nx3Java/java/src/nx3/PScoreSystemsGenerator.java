package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PScoreSystemsGenerator extends haxe.lang.HxObject
{
	public    PScoreSystemsGenerator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PScoreSystemsGenerator(haxe.root.Array<nx3.PBar> bars)
	{
		nx3.PScoreSystemsGenerator.__hx_ctor_nx3_PScoreSystemsGenerator(this, bars);
	}
	
	
	public static   void __hx_ctor_nx3_PScoreSystemsGenerator(nx3.PScoreSystemsGenerator __temp_me132, haxe.root.Array<nx3.PBar> bars)
	{
		__temp_me132.bars = bars;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PScoreSystemsGenerator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PScoreSystemsGenerator(((haxe.root.Array<nx3.PBar>) (arr.__get(0)) ));
	}
	
	
	public  haxe.root.Array<nx3.PBar> bars;
	
	public   haxe.root.Array<nx3.PSystem> getsSystems(haxe.root.Array<java.lang.Object> systemwidths)
	{
		haxe.root.Array<nx3.PBar> tempbars = this.bars.copy();
		haxe.root.Array<nx3.PSystem> result = new haxe.root.Array<nx3.PSystem>();
		int sysidx = 0;
		java.lang.Object prevbarAttributes = null;
		while (( tempbars.length > 0 ))
		{
			double syswidth = 0.0;
			if (( ! (( (( (( ( sysidx < 0 ) || ( sysidx > ( systemwidths.length - 1 ) ) )) ? (null) : (((double) (haxe.lang.Runtime.toDouble(systemwidths.__get(sysidx))) )) )) == null )) )) 
			{
				syswidth = ((double) (haxe.lang.Runtime.toDouble(systemwidths.__get(sysidx))) );
			}
			 else 
			{
				syswidth = ((double) (haxe.lang.Runtime.toDouble(systemwidths.__get(0))) );
			}
			
			nx3.PSystemBarsGenerator generator = new nx3.PSystemBarsGenerator(((haxe.root.Array<nx3.PBar>) (tempbars) ), ((java.lang.Object) (new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"showFirstClef", "showFirstKey", "showFirstTime"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{true, true, ( sysidx == 0 )}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}))) ), ((java.lang.Object) (prevbarAttributes) ), ((double) (syswidth) ), ((nx3.IBarWidthCalculator) (new nx3.PBarWidthCalculator()) ));
			nx3.PSystem system = generator.getSystem();
			prevbarAttributes = system.getLastBarAttributes();
			result.push(system);
			sysidx++;
		}
		
		return result;
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef755 = true;
			switch (field.hashCode())
			{
				case 3016384:
				{
					if (field.equals("bars")) 
					{
						__temp_executeDef755 = false;
						this.bars = ((haxe.root.Array<nx3.PBar>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef755) 
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
			boolean __temp_executeDef756 = true;
			switch (field.hashCode())
			{
				case 500264327:
				{
					if (field.equals("getsSystems")) 
					{
						__temp_executeDef756 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getsSystems"))) );
					}
					
					break;
				}
				
				
				case 3016384:
				{
					if (field.equals("bars")) 
					{
						__temp_executeDef756 = false;
						return this.bars;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef756) 
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
			boolean __temp_executeDef757 = true;
			switch (field.hashCode())
			{
				case 500264327:
				{
					if (field.equals("getsSystems")) 
					{
						__temp_executeDef757 = false;
						return this.getsSystems(((haxe.root.Array<java.lang.Object>) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef757) 
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
		baseArr.push("bars");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


