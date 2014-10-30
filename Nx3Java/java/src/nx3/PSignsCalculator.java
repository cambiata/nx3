package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PSignsCalculator extends haxe.lang.HxObject
{
	public    PSignsCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PSignsCalculator(haxe.root.Array<nx3.PNote> notes)
	{
		nx3.PSignsCalculator.__hx_ctor_nx3_PSignsCalculator(this, notes);
	}
	
	
	public static   void __hx_ctor_nx3_PSignsCalculator(nx3.PSignsCalculator __temp_me121, haxe.root.Array<nx3.PNote> notes)
	{
		__temp_me121.notes = notes;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PSignsCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PSignsCalculator(((haxe.root.Array<nx3.PNote>) (arr.__get(0)) ));
	}
	
	
	public  haxe.root.Array<nx3.PNote> notes;
	
	public   haxe.root.Array<java.lang.Object> getSigns()
	{
		haxe.root.Array<java.lang.Object> signs = null;
		signs = this.calcUnsortedSigns(this.notes);
		signs = this.calcSortSigns(signs);
		return signs;
	}
	
	
	public  haxe.root.Array<java.lang.Object> visibleSigns;
	
	public   haxe.root.Array<java.lang.Object> getVisibleSigns()
	{
		return this.calcVisibleSigns(this.getSigns());
	}
	
	
	public   haxe.root.Array<java.lang.Object> calcVisibleSigns(haxe.root.Array<java.lang.Object> signs)
	{
		haxe.root.Array<java.lang.Object> visibleSigns = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		{
			int _g = 0;
			while (( _g < signs.length ))
			{
				java.lang.Object sign = signs.__get(_g);
				 ++ _g;
				if (( ((nx3.ESign) (haxe.lang.Runtime.getField(sign, "sign", true)) ) == nx3.ESign.None )) 
				{
					continue;
				}
				
				visibleSigns.push(sign);
			}
			
		}
		
		return visibleSigns;
	}
	
	
	public   haxe.root.Array<java.lang.Object> calcUnsortedSigns(haxe.root.Array<nx3.PNote> notes)
	{
		haxe.root.Array<java.lang.Object> PSigns = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		{
			int _g = 0;
			while (( _g < notes.length ))
			{
				nx3.PNote note = notes.__get(_g);
				 ++ _g;
				{
					int _g1 = 0;
					haxe.root.Array<nx3.NHead> _g2 = note.nnote.get_nheads();
					while (( _g1 < _g2.length ))
					{
						nx3.NHead nhead = _g2.__get(_g1);
						 ++ _g1;
						java.lang.Object tsign = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"sign"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{nhead.sign}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"level", "position"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (nhead.level) )) ), ((java.lang.Object) (((double) (0) )) )}));
						PSigns.push(tsign);
					}
					
				}
				
			}
			
		}
		
		return PSigns;
	}
	
	
	public   haxe.root.Array<java.lang.Object> calcSortSigns(haxe.root.Array<java.lang.Object> PSigns)
	{
		PSigns.sort(( (( nx3.PSignsCalculator_calcSortSigns_63__Fun.__hx_current != null )) ? (nx3.PSignsCalculator_calcSortSigns_63__Fun.__hx_current) : (nx3.PSignsCalculator_calcSortSigns_63__Fun.__hx_current = ((nx3.PSignsCalculator_calcSortSigns_63__Fun) (new nx3.PSignsCalculator_calcSortSigns_63__Fun()) )) ));
		return PSigns;
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef745 = true;
			switch (field.hashCode())
			{
				case -248549116:
				{
					if (field.equals("visibleSigns")) 
					{
						__temp_executeDef745 = false;
						this.visibleSigns = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 105008833:
				{
					if (field.equals("notes")) 
					{
						__temp_executeDef745 = false;
						this.notes = ((haxe.root.Array<nx3.PNote>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef745) 
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
			boolean __temp_executeDef746 = true;
			switch (field.hashCode())
			{
				case -437568381:
				{
					if (field.equals("calcSortSigns")) 
					{
						__temp_executeDef746 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("calcSortSigns"))) );
					}
					
					break;
				}
				
				
				case 105008833:
				{
					if (field.equals("notes")) 
					{
						__temp_executeDef746 = false;
						return this.notes;
					}
					
					break;
				}
				
				
				case -529206005:
				{
					if (field.equals("calcUnsortedSigns")) 
					{
						__temp_executeDef746 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("calcUnsortedSigns"))) );
					}
					
					break;
				}
				
				
				case 1965260960:
				{
					if (field.equals("getSigns")) 
					{
						__temp_executeDef746 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getSigns"))) );
					}
					
					break;
				}
				
				
				case -926717959:
				{
					if (field.equals("calcVisibleSigns")) 
					{
						__temp_executeDef746 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("calcVisibleSigns"))) );
					}
					
					break;
				}
				
				
				case -248549116:
				{
					if (field.equals("visibleSigns")) 
					{
						__temp_executeDef746 = false;
						return this.visibleSigns;
					}
					
					break;
				}
				
				
				case 1377960826:
				{
					if (field.equals("getVisibleSigns")) 
					{
						__temp_executeDef746 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getVisibleSigns"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef746) 
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
			boolean __temp_executeDef747 = true;
			switch (field.hashCode())
			{
				case -437568381:
				{
					if (field.equals("calcSortSigns")) 
					{
						__temp_executeDef747 = false;
						return this.calcSortSigns(((haxe.root.Array<java.lang.Object>) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 1965260960:
				{
					if (field.equals("getSigns")) 
					{
						__temp_executeDef747 = false;
						return this.getSigns();
					}
					
					break;
				}
				
				
				case -529206005:
				{
					if (field.equals("calcUnsortedSigns")) 
					{
						__temp_executeDef747 = false;
						return this.calcUnsortedSigns(((haxe.root.Array<nx3.PNote>) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 1377960826:
				{
					if (field.equals("getVisibleSigns")) 
					{
						__temp_executeDef747 = false;
						return this.getVisibleSigns();
					}
					
					break;
				}
				
				
				case -926717959:
				{
					if (field.equals("calcVisibleSigns")) 
					{
						__temp_executeDef747 = false;
						return this.calcVisibleSigns(((haxe.root.Array<java.lang.Object>) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef747) 
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
		baseArr.push("visibleSigns");
		baseArr.push("notes");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


