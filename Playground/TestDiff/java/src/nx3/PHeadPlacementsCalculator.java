package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PHeadPlacementsCalculator extends haxe.lang.HxObject
{
	public    PHeadPlacementsCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PHeadPlacementsCalculator(haxe.root.Array<nx3.PHead> vheads, nx3.EDirectionUD direction)
	{
		nx3.PHeadPlacementsCalculator.__hx_ctor_nx3_PHeadPlacementsCalculator(this, vheads, direction);
	}
	
	
	public static   void __hx_ctor_nx3_PHeadPlacementsCalculator(nx3.PHeadPlacementsCalculator __temp_me96, haxe.root.Array<nx3.PHead> vheads, nx3.EDirectionUD direction)
	{
		__temp_me96.vheads = vheads;
		__temp_me96.direction = direction;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PHeadPlacementsCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PHeadPlacementsCalculator(((haxe.root.Array<nx3.PHead>) (arr.__get(0)) ), ((nx3.EDirectionUD) (arr.__get(1)) ));
	}
	
	
	public  haxe.root.Array<nx3.PHead> vheads;
	
	public  nx3.EDirectionUD direction;
	
	public   haxe.root.Array<java.lang.Object> getHeadsPlacements()
	{
		if (( this.vheads.length == 1 )) 
		{
			java.lang.Object __temp_stmt524 = null;
			{
				int __temp_odecl523 = this.vheads.__get(0).nhead.level;
				__temp_stmt524 = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"pos"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{nx3.EHeadPosition.Center}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"level"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (__temp_odecl523) )) )}));
			}
			
			return new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{__temp_stmt524});
		}
		
		int len = this.vheads.length;
		haxe.root.Array<java.lang.Object> placements = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		haxe.root.Array<java.lang.Object> tempArray = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		{
			int _g = 0;
			haxe.root.Array<nx3.PHead> _g1 = this.vheads;
			while (( _g < _g1.length ))
			{
				nx3.PHead vhead = _g1.__get(_g);
				 ++ _g;
				java.lang.Object placement = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"pos"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{nx3.EHeadPosition.Center}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"level"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (vhead.nhead.level) )) )}));
				placements.push(placement);
				tempArray.push(0);
			}
			
		}
		
		if (( this.direction == nx3.EDirectionUD.Up )) 
		{
			int _g11 = 0;
			int _g2 = ( len - 1 );
			while (( _g11 < _g2 ))
			{
				int j = _g11++;
				int i = ( ( len - j ) - 1 );
				nx3.PHead vhead1 = this.vheads.__get(i);
				nx3.PHead vheadNext = this.vheads.__get(( i - 1 ));
				int lDiff = ( vhead1.nhead.level - vheadNext.nhead.level );
				if (( lDiff < 2 )) 
				{
					if (( ((int) (haxe.lang.Runtime.toInt(tempArray.__get(i))) ) == ((int) (haxe.lang.Runtime.toInt(tempArray.__get(( i - 1 )))) ) )) 
					{
						tempArray.__set(( i - 1 ), 1);
						haxe.lang.Runtime.setField(placements.__get(( i - 1 )), "pos", nx3.EHeadPosition.Right);
					}
					
				}
				
			}
			
		}
		 else 
		{
			int _g12 = 0;
			int _g3 = ( len - 1 );
			while (( _g12 < _g3 ))
			{
				int i1 = _g12++;
				nx3.PHead vhead2 = this.vheads.__get(i1);
				nx3.PHead vheadNext1 = this.vheads.__get(( i1 + 1 ));
				int lDiff1 = ( vheadNext1.nhead.level - vhead2.nhead.level );
				if (( lDiff1 < 2 )) 
				{
					if (( ((int) (haxe.lang.Runtime.toInt(tempArray.__get(i1))) ) == ((int) (haxe.lang.Runtime.toInt(tempArray.__get(( i1 + 1 )))) ) )) 
					{
						tempArray.__set(( i1 + 1 ), -1);
						haxe.lang.Runtime.setField(placements.__get(( i1 + 1 )), "pos", nx3.EHeadPosition.Left);
					}
					
				}
				
			}
			
		}
		
		return placements;
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef525 = true;
			switch (field.hashCode())
			{
				case -962590849:
				{
					if (field.equals("direction")) 
					{
						__temp_executeDef525 = false;
						this.direction = ((nx3.EDirectionUD) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -817575971:
				{
					if (field.equals("vheads")) 
					{
						__temp_executeDef525 = false;
						this.vheads = ((haxe.root.Array<nx3.PHead>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef525) 
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
			boolean __temp_executeDef526 = true;
			switch (field.hashCode())
			{
				case 763497195:
				{
					if (field.equals("getHeadsPlacements")) 
					{
						__temp_executeDef526 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getHeadsPlacements"))) );
					}
					
					break;
				}
				
				
				case -817575971:
				{
					if (field.equals("vheads")) 
					{
						__temp_executeDef526 = false;
						return this.vheads;
					}
					
					break;
				}
				
				
				case -962590849:
				{
					if (field.equals("direction")) 
					{
						__temp_executeDef526 = false;
						return this.direction;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef526) 
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
			boolean __temp_executeDef527 = true;
			switch (field.hashCode())
			{
				case 763497195:
				{
					if (field.equals("getHeadsPlacements")) 
					{
						__temp_executeDef527 = false;
						return this.getHeadsPlacements();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef527) 
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
		baseArr.push("direction");
		baseArr.push("vheads");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


