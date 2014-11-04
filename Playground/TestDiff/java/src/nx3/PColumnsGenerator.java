package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PColumnsGenerator extends haxe.lang.HxObject
{
	public    PColumnsGenerator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PColumnsGenerator(nx3.PBar bar)
	{
		nx3.PColumnsGenerator.__hx_ctor_nx3_PColumnsGenerator(this, bar);
	}
	
	
	public static   void __hx_ctor_nx3_PColumnsGenerator(nx3.PColumnsGenerator __temp_me88, nx3.PBar bar)
	{
		__temp_me88.bar = bar;
		__temp_me88.vparts = __temp_me88.bar.getParts();
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PColumnsGenerator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PColumnsGenerator(((nx3.PBar) (arr.__get(0)) ));
	}
	
	
	public  haxe.root.Array<nx3.PPart> vparts;
	
	public  haxe.root.Array<java.lang.Object> positions;
	
	public  haxe.root.Array<nx3.PColumn> columns;
	
	public  haxe.ds.IntMap<nx3.PColumn> positionsColumns;
	
	public  nx3.PBar bar;
	
	public   haxe.root.Array<nx3.PColumn> getColumns()
	{
		if (( this.columns != null )) 
		{
			return this.columns;
		}
		
		this.positions = this.calcPositions(this.vparts);
		this.calcColumns(this.positions, this.vparts);
		return this.columns;
	}
	
	
	public   void calcColumns(haxe.root.Array<java.lang.Object> positions, haxe.root.Array<nx3.PPart> vparts)
	{
		int partsCount = vparts.length;
		this.columns = new haxe.root.Array<nx3.PColumn>(new nx3.PColumn[]{});
		this.positionsColumns = new haxe.ds.IntMap<nx3.PColumn>();
		int barvalue = this.bar.getValue();
		int idx = 0;
		{
			int _g = 0;
			while (( _g < positions.length ))
			{
				int pos = ((int) (haxe.lang.Runtime.toInt(positions.__get(_g))) );
				 ++ _g;
				java.lang.Object nextpos = null;
				{
					int idx1 = ( idx + 1 );
					if (( ( idx1 < 0 ) || ( idx1 > ( positions.length - 1 ) ) )) 
					{
						nextpos = null;
					}
					 else 
					{
						nextpos = positions.__get(idx1);
					}
					
				}
				
				if (( nextpos == null )) 
				{
					nextpos = barvalue;
				}
				
				int value = ( ((int) (haxe.lang.Runtime.toInt(nextpos)) ) - ((int) (pos) ) );
				haxe.root.Array<nx3.PComplex> vcomplexes = new haxe.root.Array<nx3.PComplex>(new nx3.PComplex[]{});
				{
					int _g2 = 0;
					int _g1 = this.vparts.length;
					while (( _g2 < _g1 ))
					{
						int i = _g2++;
						nx3.PPart part = this.vparts.__get(i);
						haxe.ds.IntMap<nx3.PComplex> x = part.getPositionsComplexes();
						nx3.PComplex complex = part.getPositionsComplexes().get(((int) (pos) ));
						vcomplexes.push(complex);
					}
					
				}
				
				nx3.PColumn vcolumn = new nx3.PColumn(((nx3.PBar) (this.bar) ), ((haxe.root.Array<nx3.PComplex>) (vcomplexes) ), ((int) (pos) ), ((int) (value) ));
				this.columns.push(vcolumn);
				{
					int _g11 = 0;
					while (( _g11 < vcomplexes.length ))
					{
						nx3.PComplex complex1 = vcomplexes.__get(_g11);
						 ++ _g11;
						if (( complex1 != null )) 
						{
							complex1.column = vcolumn;
						}
						
					}
					
				}
				
				this.positionsColumns.set(pos, vcolumn);
				idx++;
			}
			
		}
		
	}
	
	
	public   haxe.root.Array<java.lang.Object> calcPositions(haxe.root.Array<nx3.PPart> vparts)
	{
		haxe.ds.IntMap<java.lang.Object> positionsMap = new haxe.ds.IntMap<java.lang.Object>();
		{
			int _g = 0;
			while (( _g < vparts.length ))
			{
				nx3.PPart vpart = vparts.__get(_g);
				 ++ _g;
				haxe.root.Array<java.lang.Object> poss = ((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (cx.MapTools.keysToArray(vpart.getPositionsComplexes().keys())) )) ).copy()) )) );
				{
					int _g1 = 0;
					while (( _g1 < poss.length ))
					{
						int pos = ((int) (haxe.lang.Runtime.toInt(poss.__get(_g1))) );
						 ++ _g1;
						positionsMap.set(pos, true);
					}
					
				}
				
			}
			
		}
		
		haxe.root.Array<java.lang.Object> positions = ((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (cx.MapTools.keysToArray(positionsMap.keys())) )) );
		positions.sort(( (( nx3.PColumnsGenerator_calcPositions_108__Fun.__hx_current != null )) ? (nx3.PColumnsGenerator_calcPositions_108__Fun.__hx_current) : (nx3.PColumnsGenerator_calcPositions_108__Fun.__hx_current = ((nx3.PColumnsGenerator_calcPositions_108__Fun) (new nx3.PColumnsGenerator_calcPositions_108__Fun()) )) ));
		return positions;
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef493 = true;
			switch (field.hashCode())
			{
				case 97299:
				{
					if (field.equals("bar")) 
					{
						__temp_executeDef493 = false;
						this.bar = ((nx3.PBar) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -810290134:
				{
					if (field.equals("vparts")) 
					{
						__temp_executeDef493 = false;
						this.vparts = ((haxe.root.Array<nx3.PPart>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1708832787:
				{
					if (field.equals("positionsColumns")) 
					{
						__temp_executeDef493 = false;
						this.positionsColumns = ((haxe.ds.IntMap<nx3.PColumn>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1707117674:
				{
					if (field.equals("positions")) 
					{
						__temp_executeDef493 = false;
						this.positions = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 949721053:
				{
					if (field.equals("columns")) 
					{
						__temp_executeDef493 = false;
						this.columns = ((haxe.root.Array<nx3.PColumn>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef493) 
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
			boolean __temp_executeDef494 = true;
			switch (field.hashCode())
			{
				case 1292894613:
				{
					if (field.equals("calcPositions")) 
					{
						__temp_executeDef494 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("calcPositions"))) );
					}
					
					break;
				}
				
				
				case -810290134:
				{
					if (field.equals("vparts")) 
					{
						__temp_executeDef494 = false;
						return this.vparts;
					}
					
					break;
				}
				
				
				case 2030853064:
				{
					if (field.equals("calcColumns")) 
					{
						__temp_executeDef494 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("calcColumns"))) );
					}
					
					break;
				}
				
				
				case 1707117674:
				{
					if (field.equals("positions")) 
					{
						__temp_executeDef494 = false;
						return this.positions;
					}
					
					break;
				}
				
				
				case 1986581415:
				{
					if (field.equals("getColumns")) 
					{
						__temp_executeDef494 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getColumns"))) );
					}
					
					break;
				}
				
				
				case 949721053:
				{
					if (field.equals("columns")) 
					{
						__temp_executeDef494 = false;
						return this.columns;
					}
					
					break;
				}
				
				
				case 97299:
				{
					if (field.equals("bar")) 
					{
						__temp_executeDef494 = false;
						return this.bar;
					}
					
					break;
				}
				
				
				case 1708832787:
				{
					if (field.equals("positionsColumns")) 
					{
						__temp_executeDef494 = false;
						return this.positionsColumns;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef494) 
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
			boolean __temp_executeDef495 = true;
			switch (field.hashCode())
			{
				case 1292894613:
				{
					if (field.equals("calcPositions")) 
					{
						__temp_executeDef495 = false;
						return this.calcPositions(((haxe.root.Array<nx3.PPart>) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 1986581415:
				{
					if (field.equals("getColumns")) 
					{
						__temp_executeDef495 = false;
						return this.getColumns();
					}
					
					break;
				}
				
				
				case 2030853064:
				{
					if (field.equals("calcColumns")) 
					{
						__temp_executeDef495 = false;
						this.calcColumns(((haxe.root.Array<java.lang.Object>) (dynargs.__get(0)) ), ((haxe.root.Array<nx3.PPart>) (dynargs.__get(1)) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef495) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("bar");
		baseArr.push("positionsColumns");
		baseArr.push("columns");
		baseArr.push("positions");
		baseArr.push("vparts");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


