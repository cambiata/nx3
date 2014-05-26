package nx3.events;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class EvHeadSign extends haxe.lang.HxObject implements nx3.events.IEvent
{
	public    EvHeadSign(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    EvHeadSign(java.lang.Object ref, nx3.ESign sign)
	{
		nx3.events.EvHeadSign.__hx_ctor_nx3_events_EvHeadSign(this, ref, sign);
	}
	
	
	public static   void __hx_ctor_nx3_events_EvHeadSign(nx3.events.EvHeadSign __temp_me177, java.lang.Object ref, nx3.ESign sign)
	{
		__temp_me177.ref = ref;
		__temp_me177.status = false;
		__temp_me177.sign = sign;
		__temp_me177.prevsign = null;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.events.EvHeadSign(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.events.EvHeadSign(((java.lang.Object) (arr.__get(0)) ), ((nx3.ESign) (arr.__get(1)) ));
	}
	
	
	public  java.lang.Object ref;
	
	public  nx3.ESign sign;
	
	public  nx3.ESign prevsign;
	
	public  boolean status;
	
	public  nx3.NHead changedhead;
	
	public   void doEvent()
	{
		if (( this.status == true )) 
		{
			throw haxe.lang.HaxeException.wrap("Cant perform doEvent() twice");
		}
		
		if (nx3.NRefTools.checkRefNoteError(this.ref)) 
		{
			throw haxe.lang.HaxeException.wrap("Reference note error");
		}
		
		nx3.NHead targethead = ((nx3.NScore) (haxe.lang.Runtime.getField(this.ref, "score", true)) ).getNBar(((int) (haxe.lang.Runtime.getField_f(this.ref, "bar", true)) )).getNPart(((int) (haxe.lang.Runtime.getField_f(this.ref, "part", true)) )).getNVoice(((int) (haxe.lang.Runtime.getField_f(this.ref, "voice", true)) )).getNNote(((int) (haxe.lang.Runtime.getField_f(this.ref, "note", true)) )).getNHead(((int) (haxe.lang.Runtime.getField_f(this.ref, "head", true)) ));
		this.prevsign = targethead.sign;
		targethead.sign = this.sign;
		this.changedhead = targethead;
		this.status = true;
	}
	
	
	public   void undoEvent()
	{
		if (( this.status == false )) 
		{
			throw haxe.lang.HaxeException.wrap("Cant perform undoEvent() twice");
		}
		
		this.changedhead.sign = this.prevsign;
		this.status = false;
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef828 = true;
			switch (field.hashCode())
			{
				case 112787:
				{
					if (field.equals("ref")) 
					{
						__temp_executeDef828 = false;
						this.ref = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef828) 
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
			boolean __temp_executeDef829 = true;
			switch (field.hashCode())
			{
				case -1650215276:
				{
					if (field.equals("changedhead")) 
					{
						__temp_executeDef829 = false;
						this.changedhead = ((nx3.NHead) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 112787:
				{
					if (field.equals("ref")) 
					{
						__temp_executeDef829 = false;
						this.ref = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -892481550:
				{
					if (field.equals("status")) 
					{
						__temp_executeDef829 = false;
						this.status = haxe.lang.Runtime.toBool(value);
						return value;
					}
					
					break;
				}
				
				
				case 3530173:
				{
					if (field.equals("sign")) 
					{
						__temp_executeDef829 = false;
						this.sign = ((nx3.ESign) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1273483664:
				{
					if (field.equals("prevsign")) 
					{
						__temp_executeDef829 = false;
						this.prevsign = ((nx3.ESign) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef829) 
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
			boolean __temp_executeDef830 = true;
			switch (field.hashCode())
			{
				case -781936618:
				{
					if (field.equals("undoEvent")) 
					{
						__temp_executeDef830 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("undoEvent"))) );
					}
					
					break;
				}
				
				
				case 112787:
				{
					if (field.equals("ref")) 
					{
						__temp_executeDef830 = false;
						return this.ref;
					}
					
					break;
				}
				
				
				case 1801229519:
				{
					if (field.equals("doEvent")) 
					{
						__temp_executeDef830 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("doEvent"))) );
					}
					
					break;
				}
				
				
				case 3530173:
				{
					if (field.equals("sign")) 
					{
						__temp_executeDef830 = false;
						return this.sign;
					}
					
					break;
				}
				
				
				case -1650215276:
				{
					if (field.equals("changedhead")) 
					{
						__temp_executeDef830 = false;
						return this.changedhead;
					}
					
					break;
				}
				
				
				case -1273483664:
				{
					if (field.equals("prevsign")) 
					{
						__temp_executeDef830 = false;
						return this.prevsign;
					}
					
					break;
				}
				
				
				case -892481550:
				{
					if (field.equals("status")) 
					{
						__temp_executeDef830 = false;
						return this.status;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef830) 
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
			boolean __temp_executeDef831 = true;
			switch (field.hashCode())
			{
				case 112787:
				{
					if (field.equals("ref")) 
					{
						__temp_executeDef831 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.ref)) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef831) 
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
			boolean __temp_executeDef832 = true;
			switch (field.hashCode())
			{
				case -781936618:
				{
					if (field.equals("undoEvent")) 
					{
						__temp_executeDef832 = false;
						this.undoEvent();
					}
					
					break;
				}
				
				
				case 1801229519:
				{
					if (field.equals("doEvent")) 
					{
						__temp_executeDef832 = false;
						this.doEvent();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef832) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("changedhead");
		baseArr.push("status");
		baseArr.push("prevsign");
		baseArr.push("sign");
		baseArr.push("ref");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


