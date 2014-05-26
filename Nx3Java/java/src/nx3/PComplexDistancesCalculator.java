package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PComplexDistancesCalculator extends haxe.lang.HxObject
{
	public    PComplexDistancesCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PComplexDistancesCalculator()
	{
		nx3.PComplexDistancesCalculator.__hx_ctor_nx3_PComplexDistancesCalculator(this);
	}
	
	
	public static   void __hx_ctor_nx3_PComplexDistancesCalculator(nx3.PComplexDistancesCalculator __temp_me112)
	{
		{
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PComplexDistancesCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PComplexDistancesCalculator();
	}
	
	
	public   double getDistance(nx3.PComplex leftComplex, nx3.PComplex rightComplex)
	{
		haxe.root.Array<nx3.geom.Rectangle> leftBaseRects = new haxe.root.Array<nx3.geom.Rectangle>(new nx3.geom.Rectangle[]{leftComplex.getBaseRect()});
		haxe.root.Array<nx3.geom.Rectangle> rightBaseRects = new haxe.root.Array<nx3.geom.Rectangle>(new nx3.geom.Rectangle[]{rightComplex.getBaseRect()});
		double minDistance = nx3.geom.RectanglesTools.getXIntersection(leftBaseRects, rightBaseRects);
		haxe.root.Array<nx3.geom.Rectangle> leftRects = leftComplex.getAllRects();
		haxe.root.Array<nx3.geom.Rectangle> rightRects = rightComplex.getAllRects();
		double objDistance = nx3.geom.RectanglesTools.getXIntersection(leftRects, rightRects);
		double objDistanceMargin = ( objDistance + 0.6 );
		return java.lang.Math.max(minDistance, objDistanceMargin);
	}
	
	
	public   haxe.root.Array<nx3.geom.Rectangle> getRects(nx3.PComplex complex)
	{
		haxe.root.Array<nx3.geom.Rectangle> rects = new haxe.root.Array<nx3.geom.Rectangle>(new nx3.geom.Rectangle[]{});
		rects.concat(complex.getHeadsRects());
		rects.concat(complex.getStavesRects());
		rects.concat(complex.getSignsRects());
		return rects;
	}
	
	
	@Override public   java.lang.Object __hx_getField(java.lang.String field, boolean throwErrors, boolean isCheck, boolean handleProperties)
	{
		{
			boolean __temp_executeDef685 = true;
			switch (field.hashCode())
			{
				case 1964214617:
				{
					if (field.equals("getRects")) 
					{
						__temp_executeDef685 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getRects"))) );
					}
					
					break;
				}
				
				
				case -1928607381:
				{
					if (field.equals("getDistance")) 
					{
						__temp_executeDef685 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getDistance"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef685) 
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
			boolean __temp_executeDef686 = true;
			switch (field.hashCode())
			{
				case 1964214617:
				{
					if (field.equals("getRects")) 
					{
						__temp_executeDef686 = false;
						return this.getRects(((nx3.PComplex) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -1928607381:
				{
					if (field.equals("getDistance")) 
					{
						__temp_executeDef686 = false;
						return this.getDistance(((nx3.PComplex) (dynargs.__get(0)) ), ((nx3.PComplex) (dynargs.__get(1)) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef686) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
}


