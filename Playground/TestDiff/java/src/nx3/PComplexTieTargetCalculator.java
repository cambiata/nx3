package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PComplexTieTargetCalculator extends haxe.lang.HxObject
{
	public    PComplexTieTargetCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PComplexTieTargetCalculator(haxe.root.Array<java.lang.Object> tieinfos)
	{
		nx3.PComplexTieTargetCalculator.__hx_ctor_nx3_PComplexTieTargetCalculator(this, tieinfos);
	}
	
	
	public static   void __hx_ctor_nx3_PComplexTieTargetCalculator(nx3.PComplexTieTargetCalculator __temp_me93, haxe.root.Array<java.lang.Object> tieinfos)
	{
		__temp_me93.tieinfos = tieinfos;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PComplexTieTargetCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PComplexTieTargetCalculator(((haxe.root.Array<java.lang.Object>) (arr.__get(0)) ));
	}
	
	
	public  haxe.root.Array<java.lang.Object> tieinfos;
	
	public   haxe.root.Array<java.lang.Object> findTargetHeads()
	{
		{
			int _g = 0;
			haxe.root.Array<java.lang.Object> _g1 = this.tieinfos;
			while (( _g < _g1.length ))
			{
				java.lang.Object info = _g1.__get(_g);
				 ++ _g;
				nx3.PHead head = ((nx3.PHead) (haxe.lang.Runtime.getField(info, "head", true)) );
				int headlevel = head.nhead.level;
				nx3.PNote nextnote = head.getNote().getNext();
				if (( nextnote == null )) 
				{
					continue;
				}
				
				haxe.root.Array<nx3.PHead> nextheads = nextnote.get_heads();
				{
					int _g2 = 0;
					while (( _g2 < nextheads.length ))
					{
						nx3.PHead nexthead = nextheads.__get(_g2);
						 ++ _g2;
						if (( headlevel == nexthead.nhead.level )) 
						{
							haxe.lang.Runtime.setField(info, "target", nexthead);
							break;
						}
						
					}
					
				}
				
			}
			
		}
		
		return this.tieinfos;
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef509 = true;
			switch (field.hashCode())
			{
				case 1993034485:
				{
					if (field.equals("tieinfos")) 
					{
						__temp_executeDef509 = false;
						this.tieinfos = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef509) 
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
			boolean __temp_executeDef510 = true;
			switch (field.hashCode())
			{
				case -722209783:
				{
					if (field.equals("findTargetHeads")) 
					{
						__temp_executeDef510 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("findTargetHeads"))) );
					}
					
					break;
				}
				
				
				case 1993034485:
				{
					if (field.equals("tieinfos")) 
					{
						__temp_executeDef510 = false;
						return this.tieinfos;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef510) 
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
			boolean __temp_executeDef511 = true;
			switch (field.hashCode())
			{
				case -722209783:
				{
					if (field.equals("findTargetHeads")) 
					{
						__temp_executeDef511 = false;
						return this.findTargetHeads();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef511) 
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
		baseArr.push("tieinfos");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


