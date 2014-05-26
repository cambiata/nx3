package nx3.geom;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class RectanglesTools_getXIntersection_16__Fun extends haxe.lang.Function
{
	public    RectanglesTools_getXIntersection_16__Fun(haxe.root.Array<haxe.root.Array> rectsA1, haxe.root.Array<haxe.root.Array> rectsB2)
	{
		super(0, 1);
		this.rectsA1 = rectsA1;
		this.rectsB2 = rectsB2;
	}
	
	
	@Override public   double __hx_invoke0_f()
	{
		{
			int _g1 = 0;
			while (( _g1 < ((haxe.root.Array<nx3.geom.Rectangle>) (((haxe.root.Array) (this.rectsA1.__get(0)) )) ).length ))
			{
				nx3.geom.Rectangle ra = ((haxe.root.Array<nx3.geom.Rectangle>) (((haxe.root.Array) (this.rectsA1.__get(0)) )) ).__get(_g1);
				 ++ _g1;
				{
					int _g11 = 0;
					while (( _g11 < ((haxe.root.Array<nx3.geom.Rectangle>) (((haxe.root.Array) (this.rectsB2.__get(0)) )) ).length ))
					{
						nx3.geom.Rectangle rb = ((haxe.root.Array<nx3.geom.Rectangle>) (((haxe.root.Array) (this.rectsB2.__get(0)) )) ).__get(_g11);
						 ++ _g11;
						nx3.geom.Rectangle i = ra.intersection(rb);
						{
							double number = i.width;
							number = ( number * java.lang.Math.pow(((double) (10) ), ((double) (8) )) );
							number = ( ((int) (java.lang.Math.round(number)) ) / java.lang.Math.pow(((double) (10) ), ((double) (8) )) );
							i.width = number;
						}
						
						if (( i.width > 0 )) 
						{
							return i.width;
						}
						
					}
					
				}
				
			}
			
		}
		
		return ((double) (0) );
	}
	
	
	public  haxe.root.Array<haxe.root.Array> rectsA1;
	
	public  haxe.root.Array<haxe.root.Array> rectsB2;
	
}


