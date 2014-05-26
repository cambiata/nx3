package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PScore extends haxe.lang.HxObject
{
	public    PScore(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PScore(nx3.NScore nscore)
	{
		nx3.PScore.__hx_ctor_nx3_PScore(this, nscore);
	}
	
	
	public static   void __hx_ctor_nx3_PScore(nx3.PScore __temp_me129, nx3.NScore nscore)
	{
		__temp_me129.prevSystemwidth = ((double) (0) );
		__temp_me129.nscore = nscore;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PScore(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PScore(((nx3.NScore) (arr.__get(0)) ));
	}
	
	
	public  nx3.NScore nscore;
	
	public  haxe.root.Array<nx3.PBar> bars;
	
	public   haxe.root.Array<nx3.PBar> getBars()
	{
		if (( this.bars != null )) 
		{
			return this.bars;
		}
		
		this.bars = new haxe.root.Array<nx3.PBar>(new nx3.PBar[]{});
		{
			int _g = 0;
			haxe.root.Array<nx3.NBar> _g1 = this.nscore.nbars;
			while (( _g < _g1.length ))
			{
				nx3.NBar nbar = _g1.__get(_g);
				 ++ _g;
				nx3.PBar bar = new nx3.PBar(((nx3.NBar) (nbar) ));
				bar.score = this;
				this.bars.push(bar);
			}
			
		}
		
		return this.bars;
	}
	
	
	public   haxe.root.Array<nx3.NBar> getNBars()
	{
		haxe.root.Array<nx3.NBar> result = new haxe.root.Array<nx3.NBar>(new nx3.NBar[]{});
		{
			int _g = 0;
			haxe.root.Array<nx3.PBar> _g1 = this.getBars();
			while (( _g < _g1.length ))
			{
				nx3.PBar bar = _g1.__get(_g);
				 ++ _g;
				result.push(bar.nbar);
			}
			
		}
		
		return result;
	}
	
	
	public  haxe.root.Array<nx3.PSystem> systems;
	
	public  double prevSystemwidth;
	
	public   haxe.root.Array<nx3.PSystem> getSystems(double systemwidth)
	{
		if (( systemwidth != this.prevSystemwidth )) 
		{
			this.systems = null;
		}
		
		if (( this.systems != null )) 
		{
			return this.systems;
		}
		
		this.systems = new nx3.PScoreSystemsGenerator(((haxe.root.Array<nx3.PBar>) (this.getBars()) )).getsSystems(new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (systemwidth) )}));
		{
			int _g = 0;
			haxe.root.Array<nx3.PSystem> _g1 = this.systems;
			while (( _g < _g1.length ))
			{
				nx3.PSystem system = _g1.__get(_g);
				 ++ _g;
				system.calculateSystembarXs();
			}
			
		}
		
		{
			int _g2 = 0;
			haxe.root.Array<nx3.PSystem> _g11 = this.systems;
			while (( _g2 < _g11.length ))
			{
				nx3.PSystem system1 = _g11.__get(_g2);
				 ++ _g2;
				double ifMoreThan = 0.0;
				nx3.PSystem __temp_stmt746 = null;
				{
					haxe.root.Array<nx3.PSystem> array = this.systems;
					__temp_stmt746 = array.__get(( array.length - 1 ));
				}
				
				if (( system1 != __temp_stmt746 )) 
				{
					ifMoreThan = ((double) (0) );
				}
				 else 
				{
					ifMoreThan = ( system1.getSystemBreakWidth() * .7 );
				}
				
				new nx3.PScoreSystemStretcher(((nx3.PSystem) (system1) )).stretchTo(system1.getSystemBreakWidth(), ifMoreThan);
			}
			
		}
		
		return this.systems;
	}
	
	
	public   nx3.PBar getBar(int idx)
	{
		if (( ( idx < 0 ) || ( idx > this.getBars().length ) )) 
		{
			return null;
		}
		 else 
		{
			return this.getBars().__get(idx);
		}
		
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef747 = true;
			switch (field.hashCode())
			{
				case -1819510588:
				{
					if (field.equals("prevSystemwidth")) 
					{
						__temp_executeDef747 = false;
						this.prevSystemwidth = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef747) 
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
			boolean __temp_executeDef748 = true;
			switch (field.hashCode())
			{
				case -1819510588:
				{
					if (field.equals("prevSystemwidth")) 
					{
						__temp_executeDef748 = false;
						this.prevSystemwidth = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -1036496156:
				{
					if (field.equals("nscore")) 
					{
						__temp_executeDef748 = false;
						this.nscore = ((nx3.NScore) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1737370588:
				{
					if (field.equals("systems")) 
					{
						__temp_executeDef748 = false;
						this.systems = ((haxe.root.Array<nx3.PSystem>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3016384:
				{
					if (field.equals("bars")) 
					{
						__temp_executeDef748 = false;
						this.bars = ((haxe.root.Array<nx3.PBar>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef748) 
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
			boolean __temp_executeDef749 = true;
			switch (field.hashCode())
			{
				case -1249366819:
				{
					if (field.equals("getBar")) 
					{
						__temp_executeDef749 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBar"))) );
					}
					
					break;
				}
				
				
				case -1036496156:
				{
					if (field.equals("nscore")) 
					{
						__temp_executeDef749 = false;
						return this.nscore;
					}
					
					break;
				}
				
				
				case -700510226:
				{
					if (field.equals("getSystems")) 
					{
						__temp_executeDef749 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getSystems"))) );
					}
					
					break;
				}
				
				
				case 3016384:
				{
					if (field.equals("bars")) 
					{
						__temp_executeDef749 = false;
						return this.bars;
					}
					
					break;
				}
				
				
				case -1819510588:
				{
					if (field.equals("prevSystemwidth")) 
					{
						__temp_executeDef749 = false;
						return this.prevSystemwidth;
					}
					
					break;
				}
				
				
				case -75665610:
				{
					if (field.equals("getBars")) 
					{
						__temp_executeDef749 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBars"))) );
					}
					
					break;
				}
				
				
				case -1737370588:
				{
					if (field.equals("systems")) 
					{
						__temp_executeDef749 = false;
						return this.systems;
					}
					
					break;
				}
				
				
				case 1959475864:
				{
					if (field.equals("getNBars")) 
					{
						__temp_executeDef749 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNBars"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef749) 
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
			boolean __temp_executeDef750 = true;
			switch (field.hashCode())
			{
				case -1819510588:
				{
					if (field.equals("prevSystemwidth")) 
					{
						__temp_executeDef750 = false;
						return this.prevSystemwidth;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef750) 
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
			boolean __temp_executeDef751 = true;
			switch (field.hashCode())
			{
				case -1249366819:
				{
					if (field.equals("getBar")) 
					{
						__temp_executeDef751 = false;
						return this.getBar(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
				case -75665610:
				{
					if (field.equals("getBars")) 
					{
						__temp_executeDef751 = false;
						return this.getBars();
					}
					
					break;
				}
				
				
				case -700510226:
				{
					if (field.equals("getSystems")) 
					{
						__temp_executeDef751 = false;
						return this.getSystems(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
				case 1959475864:
				{
					if (field.equals("getNBars")) 
					{
						__temp_executeDef751 = false;
						return this.getNBars();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef751) 
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
		baseArr.push("prevSystemwidth");
		baseArr.push("systems");
		baseArr.push("bars");
		baseArr.push("nscore");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


