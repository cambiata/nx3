package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class NNote extends haxe.lang.HxObject implements hxlazy.Lazy
{
	public    NNote(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    NNote(nx3.ENoteType type, haxe.root.Array<nx3.NHead> heads, nx3.ENoteVal value, nx3.EDirectionUAD direction)
	{
		nx3.NNote.__hx_ctor_nx3_NNote(this, type, heads, value, direction);
	}
	
	
	public static   void __hx_ctor_nx3_NNote(nx3.NNote __temp_me73, nx3.ENoteType type, haxe.root.Array<nx3.NHead> heads, nx3.ENoteVal value, nx3.EDirectionUAD direction)
	{
		if (( type == null )) 
		{
			if (( heads != null )) 
			{
				type = nx3.ENoteType.Note(heads, null, null, null);
			}
			 else 
			{
				type = nx3.ENoteType.Note(new haxe.root.Array<nx3.NHead>(new nx3.NHead[]{new nx3.NHead(((nx3.EHeadType) (null) ), ((java.lang.Object) (null) ), ((nx3.ESign) (null) ), ((nx3.ETie) (null) ), ((nx3.ETie) (null) ))}), null, null, null);
			}
			
		}
		
		if (( heads != null )) 
		{
			int _g = 0;
			while (( _g < heads.length ))
			{
				nx3.NHead head = heads.__get(_g);
				 ++ _g;
				head.nnote = __temp_me73;
			}
			
		}
		
		if (( type == null )) 
		{
			__temp_me73.type = nx3.ENoteType.Note(heads, null, null, null);
		}
		 else 
		{
			__temp_me73.type = type;
		}
		
		if (( value == null )) 
		{
			__temp_me73.value = nx3.ENoteVal.Nv4;
		}
		 else 
		{
			__temp_me73.value = value;
		}
		
		if (( direction == null )) 
		{
			__temp_me73.direction = nx3.EDirectionUAD.Auto;
		}
		 else 
		{
			__temp_me73.direction = direction;
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.NNote(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.NNote(((nx3.ENoteType) (arr.__get(0)) ), ((haxe.root.Array<nx3.NHead>) (arr.__get(1)) ), ((nx3.ENoteVal) (arr.__get(2)) ), ((nx3.EDirectionUAD) (arr.__get(3)) ));
	}
	
	
	public  nx3.ENoteType type;
	
	public  nx3.ENoteVal value;
	
	public  nx3.EDirectionUAD direction;
	
	public  haxe.root.Array<nx3.NHead> nheads;
	
	public  nx3.NVoice nvoice;
	
	public   java.lang.Object iterator()
	{
		{
			haxe.root.Array<nx3.NHead> _this = this.get_nheads();
			return new _Array.ArrayIterator<nx3.NHead>(((haxe.root.Array<nx3.NHead>) (_this) ));
		}
		
	}
	
	
	public  int length;
	
	public   int get_length()
	{
		return this.get_nheads().length;
	}
	
	
	public  haxe.root.Array<nx3.NHead> nheads_;
	
	public   haxe.root.Array<nx3.NHead> get_nheads()
	{
		if (( this.nheads_ != null )) 
		{
			return this.nheads_;
		}
		
		{
			nx3.ENoteType _g = this.type;
			switch (haxe.root.Type.enumIndex(_g))
			{
				case 0:
				{
					haxe.root.Array<nx3.ENoteAttributes> attributes = ((haxe.root.Array<nx3.ENoteAttributes>) (_g.params.__get(3)) );
					haxe.root.Array<nx3.ENoteArticulation> articulations = ((haxe.root.Array<nx3.ENoteArticulation>) (_g.params.__get(2)) );
					nx3.ENotationVariant variant = ((nx3.ENotationVariant) (_g.params.__get(1)) );
					haxe.root.Array<nx3.NHead> nheads = ((haxe.root.Array<nx3.NHead>) (_g.params.__get(0)) );
					{
						nheads.sort(( (( nx3.NNote_get_nheads_53__Fun.__hx_current != null )) ? (nx3.NNote_get_nheads_53__Fun.__hx_current) : (nx3.NNote_get_nheads_53__Fun.__hx_current = ((nx3.NNote_get_nheads_53__Fun) (new nx3.NNote_get_nheads_53__Fun()) )) ));
						this.nheads_ = nheads;
					}
					
					break;
				}
				
				
				case 1:
				{
					int level = ((int) (haxe.lang.Runtime.toInt(_g.params.__get(0))) );
					this.nheads_ = new haxe.root.Array<nx3.NHead>(new nx3.NHead[]{new nx3.NHead(((nx3.EHeadType) (nx3.EHeadType.Pause) ), ((java.lang.Object) (level) ), ((nx3.ESign) (null) ), ((nx3.ETie) (null) ), ((nx3.ETie) (null) ))});
					break;
				}
				
				
				default:
				{
					this.nheads_ = new haxe.root.Array<nx3.NHead>(new nx3.NHead[]{new nx3.NHead(((nx3.EHeadType) (nx3.EHeadType.Other) ), ((java.lang.Object) (0) ), ((nx3.ESign) (null) ), ((nx3.ETie) (null) ), ((nx3.ETie) (null) ))});
					break;
				}
				
			}
			
		}
		
		return this.nheads_;
	}
	
	
	public   nx3.NHead getNHead(int idx)
	{
		if (( ( idx < 0 ) || ( idx > this.get_nheads().length ) )) 
		{
			return null;
		}
		 else 
		{
			return this.get_nheads().__get(idx);
		}
		
	}
	
	
	@Override public   java.lang.String toString()
	{
		java.lang.String str = "";
		if ( ! (haxe.lang.Runtime.valEq(haxe.root.Type.enumConstructor(this.type), "Note")) ) 
		{
			str += ( " " + haxe.root.Type.enumConstructor(this.type) );
		}
		 else 
		{
			str += "";
		}
		
		java.lang.String heads = "";
		{
			int _g = 0;
			haxe.root.Array<nx3.NHead> _g1 = this.get_nheads();
			while (( _g < _g1.length ))
			{
				nx3.NHead head = _g1.__get(_g);
				 ++ _g;
				heads += head.toString();
			}
			
		}
		
		return ( ( ( "NNote(" + str ) + "):" ) + heads );
	}
	
	
	public  haxe.root.Array<java.lang.Object> __lazyheadLevels;
	
	
	
	public   haxe.root.Array<java.lang.Object> get_headLevels()
	{
		if (( this.__lazyheadLevels != null )) 
		{
			return this.__lazyheadLevels;
		}
		
		return this.__lazyheadLevels = ((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (haxe.root.Lambda.array(((haxe.root.List<java.lang.Object>) (((haxe.root.List) (haxe.root.Lambda.map(this, ( (( nx3.NNote_get_headLevels_68__Fun.__hx_current != null )) ? (nx3.NNote_get_headLevels_68__Fun.__hx_current) : (nx3.NNote_get_headLevels_68__Fun.__hx_current = ((nx3.NNote_get_headLevels_68__Fun) (new nx3.NNote_get_headLevels_68__Fun()) )) ))) )) ))) )) );
	}
	
	
	public  java.lang.Object __lazytopLevel;
	
	
	
	public   java.lang.Object get_topLevel()
	{
		if (( ! (( this.__lazytopLevel == null )) )) 
		{
			return this.__lazytopLevel;
		}
		
		return this.__lazytopLevel = this.get_nheads().__get(0).level;
	}
	
	
	public  java.lang.Object __lazybottomLevel;
	
	
	
	public   java.lang.Object get_bottomLevel()
	{
		if (( ! (( this.__lazybottomLevel == null )) )) 
		{
			return this.__lazybottomLevel;
		}
		
		return this.__lazybottomLevel = this.get_nheads().__get(( this.get_nheads().length - 1 )).level;
	}
	
	
	public  haxe.root.Array<nx3.ETie> __lazyties;
	
	
	
	public   haxe.root.Array<nx3.ETie> get_ties()
	{
		if (( this.__lazyties != null )) 
		{
			return this.__lazyties;
		}
		
		return this.__lazyties = ((haxe.root.Array<nx3.ETie>) (((haxe.root.Array) (haxe.root.Lambda.array(((haxe.root.List<nx3.ETie>) (((haxe.root.List) (((haxe.root.List<nx3.NHead>) (((haxe.root.List) (haxe.root.Lambda.filter(this, ( (( nx3.NNote_get_ties_71__Fun.__hx_current != null )) ? (nx3.NNote_get_ties_71__Fun.__hx_current) : (nx3.NNote_get_ties_71__Fun.__hx_current = ((nx3.NNote_get_ties_71__Fun) (new nx3.NNote_get_ties_71__Fun()) )) ))) )) ).map(( (( nx3.NNote_get_ties_71__Fun_0.__hx_current != null )) ? (nx3.NNote_get_ties_71__Fun_0.__hx_current) : (nx3.NNote_get_ties_71__Fun_0.__hx_current = ((nx3.NNote_get_ties_71__Fun_0) (new nx3.NNote_get_ties_71__Fun_0()) )) ))) )) ))) )) );
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef583 = true;
			switch (field.hashCode())
			{
				case 1238296645:
				{
					if (field.equals("__lazybottomLevel")) 
					{
						__temp_executeDef583 = false;
						this.__lazybottomLevel = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef583 = false;
						this.length = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1111003779:
				{
					if (field.equals("__lazytopLevel")) 
					{
						__temp_executeDef583 = false;
						this.__lazytopLevel = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef583) 
			{
				return super.__hx_setField_f(field, value, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef584 = true;
			switch (field.hashCode())
			{
				case 1643132727:
				{
					if (field.equals("__lazyties")) 
					{
						__temp_executeDef584 = false;
						this.__lazyties = ((haxe.root.Array<nx3.ETie>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3575610:
				{
					if (field.equals("type")) 
					{
						__temp_executeDef584 = false;
						this.type = ((nx3.ENoteType) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1238296645:
				{
					if (field.equals("__lazybottomLevel")) 
					{
						__temp_executeDef584 = false;
						this.__lazybottomLevel = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef584 = false;
						this.value = ((nx3.ENoteVal) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1111003779:
				{
					if (field.equals("__lazytopLevel")) 
					{
						__temp_executeDef584 = false;
						this.__lazytopLevel = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -962590849:
				{
					if (field.equals("direction")) 
					{
						__temp_executeDef584 = false;
						this.direction = ((nx3.EDirectionUAD) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 202587587:
				{
					if (field.equals("__lazyheadLevels")) 
					{
						__temp_executeDef584 = false;
						this.__lazyheadLevels = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1046609179:
				{
					if (field.equals("nheads")) 
					{
						__temp_executeDef584 = false;
						this.nheads = ((haxe.root.Array<nx3.NHead>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1914853914:
				{
					if (field.equals("nheads_")) 
					{
						__temp_executeDef584 = false;
						this.nheads_ = ((haxe.root.Array<nx3.NHead>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1033374332:
				{
					if (field.equals("nvoice")) 
					{
						__temp_executeDef584 = false;
						this.nvoice = ((nx3.NVoice) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef584 = false;
						this.length = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef584) 
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
			boolean __temp_executeDef585 = true;
			switch (field.hashCode())
			{
				case 1976672556:
				{
					if (field.equals("get_ties")) 
					{
						__temp_executeDef585 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_ties"))) );
					}
					
					break;
				}
				
				
				case 3575610:
				{
					if (field.equals("type")) 
					{
						__temp_executeDef585 = false;
						return this.type;
					}
					
					break;
				}
				
				
				case 3559907:
				{
					if (field.equals("ties")) 
					{
						__temp_executeDef585 = false;
						return this.get_ties();
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef585 = false;
						return this.value;
					}
					
					break;
				}
				
				
				case 1643132727:
				{
					if (field.equals("__lazyties")) 
					{
						__temp_executeDef585 = false;
						return this.__lazyties;
					}
					
					break;
				}
				
				
				case -962590849:
				{
					if (field.equals("direction")) 
					{
						__temp_executeDef585 = false;
						return this.direction;
					}
					
					break;
				}
				
				
				case 213209264:
				{
					if (field.equals("get_bottomLevel")) 
					{
						__temp_executeDef585 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_bottomLevel"))) );
					}
					
					break;
				}
				
				
				case -1046609179:
				{
					if (field.equals("nheads")) 
					{
						__temp_executeDef585 = false;
						if (handleProperties) 
						{
							return this.get_nheads();
						}
						 else 
						{
							return this.nheads;
						}
						
					}
					
					break;
				}
				
				
				case -626936807:
				{
					if (field.equals("bottomLevel")) 
					{
						__temp_executeDef585 = false;
						return ((int) (haxe.lang.Runtime.toInt(this.get_bottomLevel())) );
					}
					
					break;
				}
				
				
				case -1033374332:
				{
					if (field.equals("nvoice")) 
					{
						__temp_executeDef585 = false;
						return this.nvoice;
					}
					
					break;
				}
				
				
				case 1238296645:
				{
					if (field.equals("__lazybottomLevel")) 
					{
						__temp_executeDef585 = false;
						return this.__lazybottomLevel;
					}
					
					break;
				}
				
				
				case 1182533742:
				{
					if (field.equals("iterator")) 
					{
						__temp_executeDef585 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("iterator"))) );
					}
					
					break;
				}
				
				
				case 1387919864:
				{
					if (field.equals("get_topLevel")) 
					{
						__temp_executeDef585 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_topLevel"))) );
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef585 = false;
						if (handleProperties) 
						{
							return this.get_length();
						}
						 else 
						{
							return this.length;
						}
						
					}
					
					break;
				}
				
				
				case -983992529:
				{
					if (field.equals("topLevel")) 
					{
						__temp_executeDef585 = false;
						return ((int) (haxe.lang.Runtime.toInt(this.get_topLevel())) );
					}
					
					break;
				}
				
				
				case 974314479:
				{
					if (field.equals("get_length")) 
					{
						__temp_executeDef585 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_length"))) );
					}
					
					break;
				}
				
				
				case 1111003779:
				{
					if (field.equals("__lazytopLevel")) 
					{
						__temp_executeDef585 = false;
						return this.__lazytopLevel;
					}
					
					break;
				}
				
				
				case 1914853914:
				{
					if (field.equals("nheads_")) 
					{
						__temp_executeDef585 = false;
						return this.nheads_;
					}
					
					break;
				}
				
				
				case 30972920:
				{
					if (field.equals("get_headLevels")) 
					{
						__temp_executeDef585 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_headLevels"))) );
					}
					
					break;
				}
				
				
				case 1034068974:
				{
					if (field.equals("get_nheads")) 
					{
						__temp_executeDef585 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_nheads"))) );
					}
					
					break;
				}
				
				
				case 1250797423:
				{
					if (field.equals("headLevels")) 
					{
						__temp_executeDef585 = false;
						return this.get_headLevels();
					}
					
					break;
				}
				
				
				case 1959657912:
				{
					if (field.equals("getNHead")) 
					{
						__temp_executeDef585 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNHead"))) );
					}
					
					break;
				}
				
				
				case 202587587:
				{
					if (field.equals("__lazyheadLevels")) 
					{
						__temp_executeDef585 = false;
						return this.__lazyheadLevels;
					}
					
					break;
				}
				
				
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef585 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("toString"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef585) 
			{
				return super.__hx_getField(field, throwErrors, isCheck, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   double __hx_getField_f(java.lang.String field, boolean throwErrors, boolean handleProperties)
	{
		{
			boolean __temp_executeDef586 = true;
			switch (field.hashCode())
			{
				case -626936807:
				{
					if (field.equals("bottomLevel")) 
					{
						__temp_executeDef586 = false;
						return ((double) (((int) (haxe.lang.Runtime.toInt(this.get_bottomLevel())) )) );
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef586 = false;
						if (handleProperties) 
						{
							return ((double) (this.get_length()) );
						}
						 else 
						{
							return ((double) (this.length) );
						}
						
					}
					
					break;
				}
				
				
				case 1238296645:
				{
					if (field.equals("__lazybottomLevel")) 
					{
						__temp_executeDef586 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.__lazybottomLevel)) );
					}
					
					break;
				}
				
				
				case 1111003779:
				{
					if (field.equals("__lazytopLevel")) 
					{
						__temp_executeDef586 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.__lazytopLevel)) );
					}
					
					break;
				}
				
				
				case -983992529:
				{
					if (field.equals("topLevel")) 
					{
						__temp_executeDef586 = false;
						return ((double) (((int) (haxe.lang.Runtime.toInt(this.get_topLevel())) )) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef586) 
			{
				return super.__hx_getField_f(field, throwErrors, handleProperties);
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
			boolean __temp_executeDef587 = true;
			switch (field.hashCode())
			{
				case 1976672556:
				{
					if (field.equals("get_ties")) 
					{
						__temp_executeDef587 = false;
						return this.get_ties();
					}
					
					break;
				}
				
				
				case 1182533742:
				{
					if (field.equals("iterator")) 
					{
						__temp_executeDef587 = false;
						return this.iterator();
					}
					
					break;
				}
				
				
				case 213209264:
				{
					if (field.equals("get_bottomLevel")) 
					{
						__temp_executeDef587 = false;
						return this.get_bottomLevel();
					}
					
					break;
				}
				
				
				case 974314479:
				{
					if (field.equals("get_length")) 
					{
						__temp_executeDef587 = false;
						return this.get_length();
					}
					
					break;
				}
				
				
				case 1387919864:
				{
					if (field.equals("get_topLevel")) 
					{
						__temp_executeDef587 = false;
						return this.get_topLevel();
					}
					
					break;
				}
				
				
				case 1034068974:
				{
					if (field.equals("get_nheads")) 
					{
						__temp_executeDef587 = false;
						return this.get_nheads();
					}
					
					break;
				}
				
				
				case 30972920:
				{
					if (field.equals("get_headLevels")) 
					{
						__temp_executeDef587 = false;
						return this.get_headLevels();
					}
					
					break;
				}
				
				
				case 1959657912:
				{
					if (field.equals("getNHead")) 
					{
						__temp_executeDef587 = false;
						return this.getNHead(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef587 = false;
						return this.toString();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef587) 
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
		baseArr.push("ties");
		baseArr.push("__lazyties");
		baseArr.push("bottomLevel");
		baseArr.push("__lazybottomLevel");
		baseArr.push("topLevel");
		baseArr.push("__lazytopLevel");
		baseArr.push("headLevels");
		baseArr.push("__lazyheadLevels");
		baseArr.push("nheads_");
		baseArr.push("length");
		baseArr.push("nvoice");
		baseArr.push("nheads");
		baseArr.push("direction");
		baseArr.push("value");
		baseArr.push("type");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


