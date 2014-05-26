package nx3.geom;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class RectanglesTools extends haxe.lang.HxObject
{
	public    RectanglesTools(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    RectanglesTools()
	{
		nx3.geom.RectanglesTools.__hx_ctor_nx3_geom_RectanglesTools(this);
	}
	
	
	public static   void __hx_ctor_nx3_geom_RectanglesTools(nx3.geom.RectanglesTools __temp_me186)
	{
		{
		}
		
	}
	
	
	public static   double getXIntersection(haxe.root.Array<nx3.geom.Rectangle> rectsA, haxe.root.Array<nx3.geom.Rectangle> rectsB)
	{
		haxe.root.Array<haxe.root.Array> rectsA1 = new haxe.root.Array<haxe.root.Array>(new haxe.root.Array[]{((haxe.root.Array) (rectsA) )});
		haxe.root.Array<haxe.root.Array> rectsB2 = new haxe.root.Array<haxe.root.Array>(new haxe.root.Array[]{((haxe.root.Array) (new haxe.root.Array<nx3.geom.Rectangle>()) )});
		{
			int _g = 0;
			while (( _g < rectsB.length ))
			{
				nx3.geom.Rectangle r = rectsB.__get(_g);
				 ++ _g;
				((haxe.root.Array<nx3.geom.Rectangle>) (((haxe.root.Array) (rectsB2.__get(0)) )) ).push(r.clone());
			}
			
		}
		
		haxe.lang.Function check = new nx3.geom.RectanglesTools_getXIntersection_16__Fun(((haxe.root.Array<haxe.root.Array>) (rectsA1) ), ((haxe.root.Array<haxe.root.Array>) (rectsB2) ));
		double x = ((double) (0) );
		double moveX = ((double) (check.__hx_invoke0_f()) );
		while (( moveX > 0 ))
		{
			x += moveX;
			{
				int _g2 = 0;
				while (( _g2 < ((haxe.root.Array<nx3.geom.Rectangle>) (((haxe.root.Array) (rectsB2.__get(0)) )) ).length ))
				{
					nx3.geom.Rectangle r1 = ((haxe.root.Array<nx3.geom.Rectangle>) (((haxe.root.Array) (rectsB2.__get(0)) )) ).__get(_g2);
					 ++ _g2;
					r1.offset(moveX, ((double) (0) ));
				}
				
			}
			
			moveX = ((double) (check.__hx_invoke0_f()) );
		}
		
		return x;
	}
	
	
	public static   haxe.root.Array<nx3.geom.Rectangle> clone(haxe.root.Array<nx3.geom.Rectangle> rects)
	{
		if (( rects == null )) 
		{
			return null;
		}
		
		haxe.root.Array<nx3.geom.Rectangle> result = new haxe.root.Array<nx3.geom.Rectangle>();
		{
			int _g = 0;
			while (( _g < rects.length ))
			{
				nx3.geom.Rectangle r = rects.__get(_g);
				 ++ _g;
				result.push(r);
			}
			
		}
		
		return result;
	}
	
	
	public static   void offset(haxe.root.Array<nx3.geom.Rectangle> rects, double x, double y)
	{
		int _g = 0;
		while (( _g < rects.length ))
		{
			nx3.geom.Rectangle r = rects.__get(_g);
			 ++ _g;
			r.offset(x, y);
		}
		
	}
	
	
	public static   nx3.geom.Rectangle unionAll(haxe.root.Array<nx3.geom.Rectangle> rects)
	{
		if (( rects == null )) 
		{
			return null;
		}
		
		if (( rects.length == 1 )) 
		{
			return rects.__get(0).clone();
		}
		
		nx3.geom.Rectangle r = rects.__get(0).clone();
		{
			int _g1 = 1;
			int _g = rects.length;
			while (( _g1 < _g ))
			{
				int i = _g1++;
				r = r.union(rects.__get(i));
			}
			
		}
		
		return r;
	}
	
	
	public static   haxe.root.Array<nx3.geom.Rectangle> concat(haxe.root.Array<nx3.geom.Rectangle> rectsA, haxe.root.Array<nx3.geom.Rectangle> rectsB)
	{
		{
			int _g = 0;
			while (( _g < rectsB.length ))
			{
				nx3.geom.Rectangle r = rectsB.__get(_g);
				 ++ _g;
				rectsA.push(r);
			}
			
		}
		
		return rectsA;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.geom.RectanglesTools(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.geom.RectanglesTools();
	}
	
	
}


