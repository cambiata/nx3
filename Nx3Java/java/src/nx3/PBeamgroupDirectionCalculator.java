package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PBeamgroupDirectionCalculator extends haxe.lang.HxObject
{
	public    PBeamgroupDirectionCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PBeamgroupDirectionCalculator(nx3.PBeamgroup beamgroup)
	{
		nx3.PBeamgroupDirectionCalculator.__hx_ctor_nx3_PBeamgroupDirectionCalculator(this, beamgroup);
	}
	
	
	public static   void __hx_ctor_nx3_PBeamgroupDirectionCalculator(nx3.PBeamgroupDirectionCalculator __temp_me92, nx3.PBeamgroup beamgroup)
	{
		__temp_me92.beamgroup = beamgroup;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PBeamgroupDirectionCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PBeamgroupDirectionCalculator(((nx3.PBeamgroup) (arr.__get(0)) ));
	}
	
	
	public  nx3.PBeamgroup beamgroup;
	
	public   nx3.EDirectionUD getDirection()
	{
		this.topLevel = this.findTopLevel();
		this.bottomLevel = this.findBottomLevel();
		if (( ( this.topLevel + this.bottomLevel ) <= 0 )) 
		{
			return nx3.EDirectionUD.Down;
		}
		
		return nx3.EDirectionUD.Up;
	}
	
	
	public  int topLevel;
	
	public   int findTopLevel()
	{
		int topLevel = ((int) (haxe.lang.Runtime.toInt(this.beamgroup.pnotes.__get(0).nnote.get_topLevel())) );
		if (( this.beamgroup.pnotes.length == 1 )) 
		{
			return topLevel;
		}
		
		{
			int _g1 = 1;
			int _g = this.beamgroup.pnotes.length;
			while (( _g1 < _g ))
			{
				int i = _g1++;
				int level = ((int) (haxe.lang.Runtime.toInt(this.beamgroup.pnotes.__get(i).nnote.get_topLevel())) );
				{
					double x = java.lang.Math.min(((double) (topLevel) ), ((double) (level) ));
					topLevel = ((int) (x) );
				}
				
			}
			
		}
		
		return topLevel;
	}
	
	
	public  int bottomLevel;
	
	public   int findBottomLevel()
	{
		int bottomLevel = ((int) (haxe.lang.Runtime.toInt(this.beamgroup.pnotes.__get(0).nnote.get_bottomLevel())) );
		if (( this.beamgroup.pnotes.length == 1 )) 
		{
			return bottomLevel;
		}
		
		{
			int _g1 = 1;
			int _g = this.beamgroup.pnotes.length;
			while (( _g1 < _g ))
			{
				int i = _g1++;
				int level = ((int) (haxe.lang.Runtime.toInt(this.beamgroup.pnotes.__get(i).nnote.get_bottomLevel())) );
				{
					double x = java.lang.Math.max(((double) (bottomLevel) ), ((double) (level) ));
					bottomLevel = ((int) (x) );
				}
				
			}
			
		}
		
		return bottomLevel;
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef632 = true;
			switch (field.hashCode())
			{
				case -626936807:
				{
					if (field.equals("bottomLevel")) 
					{
						__temp_executeDef632 = false;
						this.bottomLevel = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -983992529:
				{
					if (field.equals("topLevel")) 
					{
						__temp_executeDef632 = false;
						this.topLevel = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef632) 
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
			boolean __temp_executeDef633 = true;
			switch (field.hashCode())
			{
				case -626936807:
				{
					if (field.equals("bottomLevel")) 
					{
						__temp_executeDef633 = false;
						this.bottomLevel = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -1993942992:
				{
					if (field.equals("beamgroup")) 
					{
						__temp_executeDef633 = false;
						this.beamgroup = ((nx3.PBeamgroup) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -983992529:
				{
					if (field.equals("topLevel")) 
					{
						__temp_executeDef633 = false;
						this.topLevel = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef633) 
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
			boolean __temp_executeDef634 = true;
			switch (field.hashCode())
			{
				case 757123232:
				{
					if (field.equals("findBottomLevel")) 
					{
						__temp_executeDef634 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("findBottomLevel"))) );
					}
					
					break;
				}
				
				
				case -1993942992:
				{
					if (field.equals("beamgroup")) 
					{
						__temp_executeDef634 = false;
						return this.beamgroup;
					}
					
					break;
				}
				
				
				case -626936807:
				{
					if (field.equals("bottomLevel")) 
					{
						__temp_executeDef634 = false;
						return this.bottomLevel;
					}
					
					break;
				}
				
				
				case -972195639:
				{
					if (field.equals("getDirection")) 
					{
						__temp_executeDef634 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getDirection"))) );
					}
					
					break;
				}
				
				
				case -837613560:
				{
					if (field.equals("findTopLevel")) 
					{
						__temp_executeDef634 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("findTopLevel"))) );
					}
					
					break;
				}
				
				
				case -983992529:
				{
					if (field.equals("topLevel")) 
					{
						__temp_executeDef634 = false;
						return this.topLevel;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef634) 
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
			boolean __temp_executeDef635 = true;
			switch (field.hashCode())
			{
				case -626936807:
				{
					if (field.equals("bottomLevel")) 
					{
						__temp_executeDef635 = false;
						return ((double) (this.bottomLevel) );
					}
					
					break;
				}
				
				
				case -983992529:
				{
					if (field.equals("topLevel")) 
					{
						__temp_executeDef635 = false;
						return ((double) (this.topLevel) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef635) 
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
			boolean __temp_executeDef636 = true;
			switch (field.hashCode())
			{
				case 757123232:
				{
					if (field.equals("findBottomLevel")) 
					{
						__temp_executeDef636 = false;
						return this.findBottomLevel();
					}
					
					break;
				}
				
				
				case -972195639:
				{
					if (field.equals("getDirection")) 
					{
						__temp_executeDef636 = false;
						return this.getDirection();
					}
					
					break;
				}
				
				
				case -837613560:
				{
					if (field.equals("findTopLevel")) 
					{
						__temp_executeDef636 = false;
						return this.findTopLevel();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef636) 
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
		baseArr.push("bottomLevel");
		baseArr.push("topLevel");
		baseArr.push("beamgroup");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


