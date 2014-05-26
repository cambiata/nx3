package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class NNote extends haxe.lang.HxObject
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
	
	
	public static   void __hx_ctor_nx3_NNote(nx3.NNote __temp_me74, nx3.ENoteType type, haxe.root.Array<nx3.NHead> heads, nx3.ENoteVal value, nx3.EDirectionUAD direction)
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
				head.nnote = __temp_me74;
			}
			
		}
		
		if (( type == null )) 
		{
			__temp_me74.type = nx3.ENoteType.Note(heads, null, null, null);
		}
		 else 
		{
			__temp_me74.type = type;
		}
		
		if (( value == null )) 
		{
			__temp_me74.value = nx3.ENoteVal.Nv4;
		}
		 else 
		{
			__temp_me74.value = value;
		}
		
		if (( direction == null )) 
		{
			__temp_me74.direction = nx3.EDirectionUAD.Auto;
		}
		 else 
		{
			__temp_me74.direction = direction;
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
						nheads.sort(( (( nx3.NNote_get_nheads_46__Fun.__hx_current != null )) ? (nx3.NNote_get_nheads_46__Fun.__hx_current) : (nx3.NNote_get_nheads_46__Fun.__hx_current = ((nx3.NNote_get_nheads_46__Fun) (new nx3.NNote_get_nheads_46__Fun()) )) ));
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
	
	
	public  haxe.root.Array<java.lang.Object> headLevels;
	
	public   haxe.root.Array<java.lang.Object> getHeadLevels()
	{
		if (( this.headLevels != null )) 
		{
			return this.headLevels;
		}
		
		this.headLevels = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		{
			int _g = 0;
			haxe.root.Array<nx3.NHead> _g1 = this.get_nheads();
			while (( _g < _g1.length ))
			{
				nx3.NHead head = _g1.__get(_g);
				 ++ _g;
				this.headLevels.push(head.level);
			}
			
		}
		
		return this.headLevels;
	}
	
	
	public   int getTopLevel()
	{
		return this.get_nheads().__get(0).level;
	}
	
	
	public   int getBottomLevel()
	{
		return this.get_nheads().__get(( this.get_nheads().length - 1 )).level;
	}
	
	
	public  haxe.root.Array<nx3.ETie> ties;
	
	public   haxe.root.Array<nx3.ETie> getTies()
	{
		if (( this.ties != null )) 
		{
			return this.ties;
		}
		
		this.ties = new haxe.root.Array<nx3.ETie>();
		{
			int _g = 0;
			haxe.root.Array<nx3.NHead> _g1 = this.get_nheads();
			while (( _g < _g1.length ))
			{
				nx3.NHead head = _g1.__get(_g);
				 ++ _g;
				if (( head.tie != null )) 
				{
					this.ties.push(head.tie);
				}
				
			}
			
		}
		
		return this.ties;
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
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef600 = true;
			switch (field.hashCode())
			{
				case 3559907:
				{
					if (field.equals("ties")) 
					{
						__temp_executeDef600 = false;
						this.ties = ((haxe.root.Array<nx3.ETie>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3575610:
				{
					if (field.equals("type")) 
					{
						__temp_executeDef600 = false;
						this.type = ((nx3.ENoteType) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1250797423:
				{
					if (field.equals("headLevels")) 
					{
						__temp_executeDef600 = false;
						this.headLevels = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef600 = false;
						this.value = ((nx3.ENoteVal) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1914853914:
				{
					if (field.equals("nheads_")) 
					{
						__temp_executeDef600 = false;
						this.nheads_ = ((haxe.root.Array<nx3.NHead>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -962590849:
				{
					if (field.equals("direction")) 
					{
						__temp_executeDef600 = false;
						this.direction = ((nx3.EDirectionUAD) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1033374332:
				{
					if (field.equals("nvoice")) 
					{
						__temp_executeDef600 = false;
						this.nvoice = ((nx3.NVoice) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1046609179:
				{
					if (field.equals("nheads")) 
					{
						__temp_executeDef600 = false;
						this.nheads = ((haxe.root.Array<nx3.NHead>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef600) 
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
			boolean __temp_executeDef601 = true;
			switch (field.hashCode())
			{
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef601 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("toString"))) );
					}
					
					break;
				}
				
				
				case 3575610:
				{
					if (field.equals("type")) 
					{
						__temp_executeDef601 = false;
						return this.type;
					}
					
					break;
				}
				
				
				case -75122087:
				{
					if (field.equals("getTies")) 
					{
						__temp_executeDef601 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getTies"))) );
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef601 = false;
						return this.value;
					}
					
					break;
				}
				
				
				case 3559907:
				{
					if (field.equals("ties")) 
					{
						__temp_executeDef601 = false;
						return this.ties;
					}
					
					break;
				}
				
				
				case -962590849:
				{
					if (field.equals("direction")) 
					{
						__temp_executeDef601 = false;
						return this.direction;
					}
					
					break;
				}
				
				
				case -1267205405:
				{
					if (field.equals("getBottomLevel")) 
					{
						__temp_executeDef601 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBottomLevel"))) );
					}
					
					break;
				}
				
				
				case -1046609179:
				{
					if (field.equals("nheads")) 
					{
						__temp_executeDef601 = false;
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
				
				
				case 1093907621:
				{
					if (field.equals("getTopLevel")) 
					{
						__temp_executeDef601 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getTopLevel"))) );
					}
					
					break;
				}
				
				
				case -1033374332:
				{
					if (field.equals("nvoice")) 
					{
						__temp_executeDef601 = false;
						return this.nvoice;
					}
					
					break;
				}
				
				
				case 953048933:
				{
					if (field.equals("getHeadLevels")) 
					{
						__temp_executeDef601 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getHeadLevels"))) );
					}
					
					break;
				}
				
				
				case 1914853914:
				{
					if (field.equals("nheads_")) 
					{
						__temp_executeDef601 = false;
						return this.nheads_;
					}
					
					break;
				}
				
				
				case 1250797423:
				{
					if (field.equals("headLevels")) 
					{
						__temp_executeDef601 = false;
						return this.headLevels;
					}
					
					break;
				}
				
				
				case 1034068974:
				{
					if (field.equals("get_nheads")) 
					{
						__temp_executeDef601 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_nheads"))) );
					}
					
					break;
				}
				
				
				case 1959657912:
				{
					if (field.equals("getNHead")) 
					{
						__temp_executeDef601 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNHead"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef601) 
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
			boolean __temp_executeDef602 = true;
			switch (field.hashCode())
			{
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef602 = false;
						return this.toString();
					}
					
					break;
				}
				
				
				case 1034068974:
				{
					if (field.equals("get_nheads")) 
					{
						__temp_executeDef602 = false;
						return this.get_nheads();
					}
					
					break;
				}
				
				
				case -75122087:
				{
					if (field.equals("getTies")) 
					{
						__temp_executeDef602 = false;
						return this.getTies();
					}
					
					break;
				}
				
				
				case 1959657912:
				{
					if (field.equals("getNHead")) 
					{
						__temp_executeDef602 = false;
						return this.getNHead(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
				case -1267205405:
				{
					if (field.equals("getBottomLevel")) 
					{
						__temp_executeDef602 = false;
						return this.getBottomLevel();
					}
					
					break;
				}
				
				
				case 953048933:
				{
					if (field.equals("getHeadLevels")) 
					{
						__temp_executeDef602 = false;
						return this.getHeadLevels();
					}
					
					break;
				}
				
				
				case 1093907621:
				{
					if (field.equals("getTopLevel")) 
					{
						__temp_executeDef602 = false;
						return this.getTopLevel();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef602) 
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
		baseArr.push("headLevels");
		baseArr.push("nheads_");
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


