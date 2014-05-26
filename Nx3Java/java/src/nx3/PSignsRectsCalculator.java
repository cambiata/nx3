package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PSignsRectsCalculator extends haxe.lang.HxObject
{
	public    PSignsRectsCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PSignsRectsCalculator(haxe.root.Array<java.lang.Object> signs)
	{
		nx3.PSignsRectsCalculator.__hx_ctor_nx3_PSignsRectsCalculator(this, signs);
	}
	
	
	public static   void __hx_ctor_nx3_PSignsRectsCalculator(nx3.PSignsRectsCalculator __temp_me134, haxe.root.Array<java.lang.Object> signs)
	{
		__temp_me134.signs = signs;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PSignsRectsCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PSignsRectsCalculator(((haxe.root.Array<java.lang.Object>) (arr.__get(0)) ));
	}
	
	
	public  haxe.root.Array<java.lang.Object> signs;
	
	public   haxe.root.Array<nx3.geom.Rectangle> getSignRects(haxe.root.Array<nx3.geom.Rectangle> headsRects)
	{
		haxe.root.Array<nx3.geom.Rectangle> rects = new haxe.root.Array<nx3.geom.Rectangle>();
		if (( headsRects == null )) 
		{
			headsRects = new haxe.root.Array<nx3.geom.Rectangle>(new nx3.geom.Rectangle[]{});
		}
		
		{
			int _g = 0;
			haxe.root.Array<java.lang.Object> _g1 = this.signs;
			while (( _g < _g1.length ))
			{
				java.lang.Object sign = _g1.__get(_g);
				 ++ _g;
				nx3.geom.Rectangle rect = this.getSignRect(((nx3.ESign) (haxe.lang.Runtime.getField(sign, "sign", true)) ));
				rect.offset( - (rect.width) , ((double) (((int) (haxe.lang.Runtime.getField_f(sign, "level", true)) )) ));
				{
					int _g2 = 0;
					while (( _g2 < headsRects.length ))
					{
						nx3.geom.Rectangle hr = headsRects.__get(_g2);
						 ++ _g2;
						nx3.geom.Rectangle i = rect.intersection(hr);
						int count = 0;
						while (( i.width > 0.0000001 ))
						{
							rect.offset( - (i.width) , ((double) (0) ));
							i = rect.intersection(hr);
							if (( count > 5 )) 
							{
								break;
							}
							
							count++;
						}
						
					}
					
				}
				
				{
					int _g21 = 0;
					while (( _g21 < rects.length ))
					{
						nx3.geom.Rectangle r = rects.__get(_g21);
						 ++ _g21;
						nx3.geom.Rectangle i1 = r.intersection(rect);
						while (( ( i1.width > 0 ) || ( i1.height > 0 ) ))
						{
							rect.x = ( r.x - rect.width );
							i1 = r.intersection(rect);
						}
						
					}
					
				}
				
				rects.push(rect);
			}
			
		}
		
		return rects;
	}
	
	
	public   nx3.geom.Rectangle getSignRect(nx3.ESign sign)
	{
		switch (haxe.root.Type.enumIndex(sign))
		{
			case 0:
			{
				return null;
			}
			
			
			case 5:
			{
				return new nx3.geom.Rectangle(((java.lang.Object) (0) ), ((java.lang.Object) (-1.5) ), ((java.lang.Object) (2.6) ), ((java.lang.Object) (3) ));
			}
			
			
			case 7:case 8:case 6:
			{
				return new nx3.geom.Rectangle(((java.lang.Object) (0) ), ((java.lang.Object) (-2) ), ((java.lang.Object) (4.4) ), ((java.lang.Object) (4) ));
			}
			
			
			case 2:
			{
				return new nx3.geom.Rectangle(((java.lang.Object) (0) ), ((java.lang.Object) (-3) ), ((java.lang.Object) (2.6) ), ((java.lang.Object) (5) ));
			}
			
			
			default:
			{
				return new nx3.geom.Rectangle(((java.lang.Object) (0) ), ((java.lang.Object) (-3) ), ((java.lang.Object) (2.6) ), ((java.lang.Object) (6) ));
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef761 = true;
			switch (field.hashCode())
			{
				case 109435478:
				{
					if (field.equals("signs")) 
					{
						__temp_executeDef761 = false;
						this.signs = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef761) 
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
			boolean __temp_executeDef762 = true;
			switch (field.hashCode())
			{
				case -1905802569:
				{
					if (field.equals("getSignRect")) 
					{
						__temp_executeDef762 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getSignRect"))) );
					}
					
					break;
				}
				
				
				case 109435478:
				{
					if (field.equals("signs")) 
					{
						__temp_executeDef762 = false;
						return this.signs;
					}
					
					break;
				}
				
				
				case 1049662620:
				{
					if (field.equals("getSignRects")) 
					{
						__temp_executeDef762 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getSignRects"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef762) 
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
			boolean __temp_executeDef763 = true;
			switch (field.hashCode())
			{
				case -1905802569:
				{
					if (field.equals("getSignRect")) 
					{
						__temp_executeDef763 = false;
						return this.getSignRect(((nx3.ESign) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 1049662620:
				{
					if (field.equals("getSignRects")) 
					{
						__temp_executeDef763 = false;
						return this.getSignRects(((haxe.root.Array<nx3.geom.Rectangle>) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef763) 
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
		baseArr.push("signs");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


