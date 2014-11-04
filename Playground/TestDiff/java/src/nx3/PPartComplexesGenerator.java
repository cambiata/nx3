package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PPartComplexesGenerator extends haxe.lang.HxObject
{
	public    PPartComplexesGenerator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PPartComplexesGenerator(nx3.PPart part)
	{
		nx3.PPartComplexesGenerator.__hx_ctor_nx3_PPartComplexesGenerator(this, part);
	}
	
	
	public static   void __hx_ctor_nx3_PPartComplexesGenerator(nx3.PPartComplexesGenerator __temp_me105, nx3.PPart part)
	{
		__temp_me105.part = part;
		__temp_me105.vvoices = part.getVoices();
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PPartComplexesGenerator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PPartComplexesGenerator(((nx3.PPart) (arr.__get(0)) ));
	}
	
	
	public  nx3.PPart part;
	
	public  haxe.root.Array<nx3.PVoice> vvoices;
	
	public  haxe.root.Array<nx3.PComplex> complexes;
	
	public   haxe.root.Array<nx3.PComplex> getComplexes()
	{
		if (( this.complexes != null )) 
		{
			return this.complexes;
		}
		
		this.positionsMap = this.calcPositionsMap();
		this.calcComplexes(this.positionsMap);
		return this.complexes;
	}
	
	
	public   void calcComplexes(haxe.ds.IntMap<haxe.root.Array> positions)
	{
		this.complexes = new haxe.root.Array<nx3.PComplex>(new nx3.PComplex[]{});
		haxe.root.Array<java.lang.Object> poskeys = ((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (cx.MapTools.keysToArray(positions.keys())) )) );
		poskeys = ((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (cx.MapTools.sortarray(((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (poskeys) )) ))) )) );
		{
			int _g = 0;
			while (( _g < poskeys.length ))
			{
				int pos = ((int) (haxe.lang.Runtime.toInt(poskeys.__get(_g))) );
				 ++ _g;
				haxe.root.Array<nx3.PNote> vnotes = ((haxe.root.Array<nx3.PNote>) (((haxe.root.Array) (positions.get(((int) (pos) ))) )) );
				nx3.PComplex vcomplex = new nx3.PComplex(((nx3.PPart) (this.part) ), ((haxe.root.Array<nx3.PNote>) (vnotes) ), ((int) (pos) ));
				this.complexes.push(vcomplex);
			}
			
		}
		
	}
	
	
	public  haxe.ds.IntMap<haxe.root.Array> positionsMap;
	
	public   haxe.ds.IntMap<haxe.root.Array> calcPositionsMap()
	{
		haxe.ds.IntMap<haxe.root.Array> positionsMap = new haxe.ds.IntMap<haxe.root.Array>();
		{
			int _g = 0;
			haxe.root.Array<nx3.PVoice> _g1 = this.vvoices;
			while (( _g < _g1.length ))
			{
				nx3.PVoice vvoice = _g1.__get(_g);
				 ++ _g;
				{
					int _g2 = 0;
					haxe.root.Array<nx3.PNote> _g3 = vvoice.getNotes();
					while (( _g2 < _g3.length ))
					{
						nx3.PNote vnote = _g3.__get(_g2);
						 ++ _g2;
						java.lang.Object npos = null;
						{
							haxe.root.IMap<nx3.PNote, java.lang.Object> this1 = vvoice.getNotePositions();
							npos = this1.get(vnote);
						}
						
						if ( ! (positionsMap.exists(((int) (haxe.lang.Runtime.toInt(npos)) ))) ) 
						{
							positionsMap.set(((int) (haxe.lang.Runtime.toInt(npos)) ), ((haxe.root.Array) (new haxe.root.Array<nx3.PNote>(new nx3.PNote[]{})) ));
						}
						
						((haxe.root.Array<nx3.PNote>) (((haxe.root.Array) (positionsMap.get(((int) (haxe.lang.Runtime.toInt(npos)) ))) )) ).push(vnote);
					}
					
				}
				
			}
			
		}
		
		return positionsMap;
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef559 = true;
			switch (field.hashCode())
			{
				case 34951314:
				{
					if (field.equals("positionsMap")) 
					{
						__temp_executeDef559 = false;
						this.positionsMap = ((haxe.ds.IntMap<haxe.root.Array>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3433459:
				{
					if (field.equals("part")) 
					{
						__temp_executeDef559 = false;
						this.part = ((nx3.PPart) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1402927778:
				{
					if (field.equals("complexes")) 
					{
						__temp_executeDef559 = false;
						this.complexes = ((haxe.root.Array<nx3.PComplex>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 835229047:
				{
					if (field.equals("vvoices")) 
					{
						__temp_executeDef559 = false;
						this.vvoices = ((haxe.root.Array<nx3.PVoice>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef559) 
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
			boolean __temp_executeDef560 = true;
			switch (field.hashCode())
			{
				case -643217529:
				{
					if (field.equals("calcPositionsMap")) 
					{
						__temp_executeDef560 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("calcPositionsMap"))) );
					}
					
					break;
				}
				
				
				case 3433459:
				{
					if (field.equals("part")) 
					{
						__temp_executeDef560 = false;
						return this.part;
					}
					
					break;
				}
				
				
				case 34951314:
				{
					if (field.equals("positionsMap")) 
					{
						__temp_executeDef560 = false;
						return this.positionsMap;
					}
					
					break;
				}
				
				
				case 835229047:
				{
					if (field.equals("vvoices")) 
					{
						__temp_executeDef560 = false;
						return this.vvoices;
					}
					
					break;
				}
				
				
				case -1817150839:
				{
					if (field.equals("calcComplexes")) 
					{
						__temp_executeDef560 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("calcComplexes"))) );
					}
					
					break;
				}
				
				
				case -1402927778:
				{
					if (field.equals("complexes")) 
					{
						__temp_executeDef560 = false;
						return this.complexes;
					}
					
					break;
				}
				
				
				case -1412532568:
				{
					if (field.equals("getComplexes")) 
					{
						__temp_executeDef560 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getComplexes"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef560) 
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
			boolean __temp_executeDef561 = true;
			switch (field.hashCode())
			{
				case -643217529:
				{
					if (field.equals("calcPositionsMap")) 
					{
						__temp_executeDef561 = false;
						return this.calcPositionsMap();
					}
					
					break;
				}
				
				
				case -1412532568:
				{
					if (field.equals("getComplexes")) 
					{
						__temp_executeDef561 = false;
						return this.getComplexes();
					}
					
					break;
				}
				
				
				case -1817150839:
				{
					if (field.equals("calcComplexes")) 
					{
						__temp_executeDef561 = false;
						this.calcComplexes(((haxe.ds.IntMap<haxe.root.Array>) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef561) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("positionsMap");
		baseArr.push("complexes");
		baseArr.push("vvoices");
		baseArr.push("part");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


