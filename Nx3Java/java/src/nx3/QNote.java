package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class QNote extends nx3.NNote
{
	public    QNote(haxe.lang.EmptyObject empty)
	{
		super(haxe.lang.EmptyObject.EMPTY);
	}
	
	
	public    QNote(java.lang.Object headLevel, haxe.root.Array<java.lang.Object> headLevels, nx3.NHead head, haxe.root.Array<nx3.NHead> heads, nx3.ENoteVal value, java.lang.String signs, nx3.EDirectionUAD direction)
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.QNote.__hx_ctor_nx3_QNote(this, headLevel, headLevels, head, heads, value, signs, direction);
	}
	
	
	public static   void __hx_ctor_nx3_QNote(nx3.QNote __temp_me150, java.lang.Object headLevel, haxe.root.Array<java.lang.Object> headLevels, nx3.NHead head, haxe.root.Array<nx3.NHead> heads, nx3.ENoteVal value, java.lang.String signs, nx3.EDirectionUAD direction)
	{
		if (( signs == null )) 
		{
			signs = "";
		}
		
		signs += "...........";
		haxe.root.Array<java.lang.String> aSigns = haxe.lang.StringExt.split(signs, "");
		if (( ! (( headLevel == null )) )) 
		{
			headLevels = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{headLevel});
		}
		
		if (( headLevels != null )) 
		{
			heads = new haxe.root.Array<nx3.NHead>(new nx3.NHead[]{});
			int i = 0;
			{
				int _g = 0;
				while (( _g < headLevels.length ))
				{
					int level = ((int) (haxe.lang.Runtime.toInt(headLevels.__get(_g))) );
					 ++ _g;
					heads.push(new nx3.NHead(((nx3.EHeadType) (null) ), ((java.lang.Object) (level) ), ((nx3.ESign) (__temp_me150.getSign(aSigns.__get(i++))) ), ((nx3.ETie) (null) ), ((nx3.ETie) (null) )));
				}
				
			}
			
		}
		
		if (( head != null )) 
		{
			heads = new haxe.root.Array<nx3.NHead>(new nx3.NHead[]{head});
		}
		
		if (( heads == null )) 
		{
			heads = new haxe.root.Array<nx3.NHead>(new nx3.NHead[]{new nx3.NHead(((nx3.EHeadType) (null) ), ((java.lang.Object) (0) ), ((nx3.ESign) (null) ), ((nx3.ETie) (null) ), ((nx3.ETie) (null) ))});
		}
		
		if (( value == null )) 
		{
			value = nx3.ENoteVal.Nv4;
		}
		
		nx3.NNote.__hx_ctor_nx3_NNote(__temp_me150, null, heads, value, direction);
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.QNote(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.QNote(((java.lang.Object) (arr.__get(0)) ), ((haxe.root.Array<java.lang.Object>) (arr.__get(1)) ), ((nx3.NHead) (arr.__get(2)) ), ((haxe.root.Array<nx3.NHead>) (arr.__get(3)) ), ((nx3.ENoteVal) (arr.__get(4)) ), haxe.lang.Runtime.toString(arr.__get(5)), ((nx3.EDirectionUAD) (arr.__get(6)) ));
	}
	
	
	public   nx3.ESign getSign(java.lang.String val)
	{
		{
			java.lang.String __temp_svar812 = (val);
			int __temp_hash814 = __temp_svar812.hashCode();
			boolean __temp_executeDef813 = true;
			switch (__temp_hash814)
			{
				case 35:
				{
					if (__temp_svar812.equals("#")) 
					{
						__temp_executeDef813 = false;
						return nx3.ESign.Sharp;
					}
					
					break;
				}
				
				
				case 110:case 78:
				{
					if (( (( ( __temp_hash814 == 110 ) && __temp_svar812.equals("n") )) || __temp_svar812.equals("N") )) 
					{
						__temp_executeDef813 = false;
						return nx3.ESign.Natural;
					}
					
					break;
				}
				
				
				case 98:
				{
					if (__temp_svar812.equals("b")) 
					{
						__temp_executeDef813 = false;
						return nx3.ESign.Flat;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef813) 
			{
				return null;
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
			boolean __temp_executeDef815 = true;
			switch (field.hashCode())
			{
				case -75151821:
				{
					if (field.equals("getSign")) 
					{
						__temp_executeDef815 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getSign"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef815) 
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
			boolean __temp_executeDef816 = true;
			switch (field.hashCode())
			{
				case -75151821:
				{
					if (field.equals("getSign")) 
					{
						__temp_executeDef816 = false;
						return this.getSign(haxe.lang.Runtime.toString(dynargs.__get(0)));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef816) 
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


