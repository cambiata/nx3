package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PComplexDotsrectsCalculator extends haxe.lang.HxObject
{
	public    PComplexDotsrectsCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PComplexDotsrectsCalculator(nx3.PComplex complex)
	{
		nx3.PComplexDotsrectsCalculator.__hx_ctor_nx3_PComplexDotsrectsCalculator(this, complex);
	}
	
	
	public static   void __hx_ctor_nx3_PComplexDotsrectsCalculator(nx3.PComplexDotsrectsCalculator __temp_me92, nx3.PComplex complex)
	{
		__temp_me92.complex = complex;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PComplexDotsrectsCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PComplexDotsrectsCalculator(((nx3.PComplex) (arr.__get(0)) ));
	}
	
	
	public  nx3.PComplex complex;
	
	public   haxe.root.Array<nx3.geom.Rectangle> getDotRects()
	{
		int nrofnotes = this.complex.getNotes().length;
		nx3.PNote firstnote = null;
		{
			haxe.root.Array<nx3.PNote> array = this.complex.getNotes();
			firstnote = array.__get(0);
		}
		
		haxe.root.Array<nx3.geom.Rectangle> rects = this.getRectsForNote(firstnote, false);
		if (( nrofnotes == 2 )) 
		{
			nx3.PNote secondnote = null;
			{
				haxe.root.Array<nx3.PNote> array1 = this.complex.getNotes();
				secondnote = array1.__get(1);
			}
			
			haxe.root.Array<nx3.geom.Rectangle> secondrects = this.getRectsForNote(secondnote, true);
			rects = nx3.geom.RectanglesTools.concat(rects, secondrects);
		}
		
		return rects;
	}
	
	
	public   haxe.root.Array<nx3.geom.Rectangle> getRectsForNote(nx3.PNote note, java.lang.Object down)
	{
		boolean __temp_down91 = ( (( down == null )) ? (haxe.lang.Runtime.toBool(false)) : (haxe.lang.Runtime.toBool(down)) );
		if (( nx3.ENoteValTools.dotlevel(note.nnote.value) == 0 )) 
		{
			return new haxe.root.Array<nx3.geom.Rectangle>(new nx3.geom.Rectangle[]{});
		}
		
		haxe.root.Array<nx3.geom.Rectangle> rects = new haxe.root.Array<nx3.geom.Rectangle>(new nx3.geom.Rectangle[]{});
		double dotwidth = 0.0;
		if (( nx3.ENoteValTools.dotlevel(note.nnote.value) == 1 )) 
		{
			dotwidth = 2.0;
		}
		 else 
		{
			dotwidth = 3.0;
		}
		
		nx3.geom.Rectangle headrect = nx3.geom.RectanglesTools.unionAll(note.getHeadsRects());
		double rectX = ( headrect.x + headrect.width );
		haxe.ds.IntMap<java.lang.Object> dotlevels = new haxe.ds.IntMap<java.lang.Object>();
		{
			int _g = 0;
			haxe.root.Array<nx3.NHead> _g1 = note.nnote.get_nheads();
			while (( _g < _g1.length ))
			{
				nx3.NHead head = _g1.__get(_g);
				 ++ _g;
				int level = head.level;
				int adj = 0;
				{
					double x = java.lang.Math.abs(((double) (( (( level - 1 )) % 2 )) ));
					adj = ((int) (x) );
				}
				
				int dotlevel = 0;
				if (__temp_down91) 
				{
					dotlevel = ( level + adj );
				}
				 else 
				{
					dotlevel = ( level - adj );
				}
				
				dotlevels.set(dotlevel, true);
			}
			
		}
		
		haxe.root.Array<java.lang.Object> dotkeys = ((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (cx.ArrayTools.fromHashKeys(dotlevels.keys())) )) );
		{
			int _g2 = 0;
			while (( _g2 < dotkeys.length ))
			{
				int level1 = ((int) (haxe.lang.Runtime.toInt(dotkeys.__get(_g2))) );
				 ++ _g2;
				rects.push(new nx3.geom.Rectangle(((java.lang.Object) (rectX) ), ((java.lang.Object) (( level1 - 0.5 )) ), ((java.lang.Object) (dotwidth) ), ((java.lang.Object) (1) )));
			}
			
		}
		
		return rects;
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef506 = true;
			switch (field.hashCode())
			{
				case 950494384:
				{
					if (field.equals("complex")) 
					{
						__temp_executeDef506 = false;
						this.complex = ((nx3.PComplex) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef506) 
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
			boolean __temp_executeDef507 = true;
			switch (field.hashCode())
			{
				case 413314242:
				{
					if (field.equals("getRectsForNote")) 
					{
						__temp_executeDef507 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getRectsForNote"))) );
					}
					
					break;
				}
				
				
				case 950494384:
				{
					if (field.equals("complex")) 
					{
						__temp_executeDef507 = false;
						return this.complex;
					}
					
					break;
				}
				
				
				case -901214020:
				{
					if (field.equals("getDotRects")) 
					{
						__temp_executeDef507 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getDotRects"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef507) 
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
			boolean __temp_executeDef508 = true;
			switch (field.hashCode())
			{
				case 413314242:
				{
					if (field.equals("getRectsForNote")) 
					{
						__temp_executeDef508 = false;
						return this.getRectsForNote(((nx3.PNote) (dynargs.__get(0)) ), dynargs.__get(1));
					}
					
					break;
				}
				
				
				case -901214020:
				{
					if (field.equals("getDotRects")) 
					{
						__temp_executeDef508 = false;
						return this.getDotRects();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef508) 
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
		baseArr.push("complex");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


