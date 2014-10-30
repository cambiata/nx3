package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class QVoice extends nx3.NVoice
{
	public    QVoice(haxe.lang.EmptyObject empty)
	{
		super(haxe.lang.EmptyObject.EMPTY);
	}
	
	
	public    QVoice(haxe.root.Array<java.lang.Object> notevalues, java.lang.Object notevalue, haxe.root.Array<java.lang.Object> headlevels, java.lang.Object levelrepeats, java.lang.String signs, nx3.EDirectionUAD direction)
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.QVoice.__hx_ctor_nx3_QVoice(this, notevalues, notevalue, headlevels, levelrepeats, signs, direction);
	}
	
	
	public static   void __hx_ctor_nx3_QVoice(nx3.QVoice __temp_me161, haxe.root.Array<java.lang.Object> notevalues, java.lang.Object notevalue, haxe.root.Array<java.lang.Object> headlevels, java.lang.Object levelrepeats, java.lang.String signs, nx3.EDirectionUAD direction)
	{
		java.lang.Object __temp_levelrepeats160 = ( (( levelrepeats == null )) ? (((java.lang.Object) (1) )) : (((java.lang.Object) (levelrepeats) )) );
		haxe.root.Array<java.lang.Object> _notevalues = notevalues;
		if (( _notevalues == null )) 
		{
			_notevalues = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (notevalue) )});
		}
		
		if (( _notevalues == null )) 
		{
			_notevalues = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (4) )});
		}
		
		haxe.root.Array<java.lang.Object> _headlevels = null;
		if (( headlevels != null )) 
		{
			_headlevels = headlevels;
		}
		 else 
		{
			_headlevels = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{0});
		}
		
		while (( _notevalues.length > _headlevels.length ))
		{
			_headlevels.push(0);
		}
		
		int r = 1;
		haxe.root.Array<java.lang.Object> copy = ((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (_headlevels.copy()) )) );
		while (( haxe.lang.Runtime.compare(r, __temp_levelrepeats160) < 0 ))
		{
			_headlevels = ((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (_headlevels.concat(((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (copy) )) ))) )) );
			r++;
		}
		
		while (( _headlevels.length > _notevalues.length ))
		{
			_notevalues = ((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (_notevalues.concat(((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (_notevalues) )) ))) )) );
		}
		
		haxe.root.Array<nx3.NNote> notes = new haxe.root.Array<nx3.NNote>(new nx3.NNote[]{});
		if (( signs == null )) 
		{
			signs = "-";
		}
		
		haxe.root.Array<java.lang.String> asigns = haxe.lang.StringExt.split(signs, "");
		while (( _headlevels.length > asigns.length ))
		{
			asigns = asigns.concat(asigns);
		}
		
		int i = 0;
		{
			int _g = 0;
			while (( _g < _headlevels.length ))
			{
				int level = ((int) (haxe.lang.Runtime.toInt(_headlevels.__get(_g))) );
				 ++ _g;
				nx3.ESign sign = __temp_me161.getSign(asigns.__get(i));
				nx3.QHead head = new nx3.QHead(((java.lang.Object) (level) ), ((nx3.ESign) (sign) ));
				nx3.QNote note = new nx3.QNote(((java.lang.Object) (null) ), ((haxe.root.Array<java.lang.Object>) (null) ), ((nx3.NHead) (head) ), ((haxe.root.Array<nx3.NHead>) (null) ), ((nx3.ENoteVal) (__temp_me161.getNotevalue(((double) (haxe.lang.Runtime.toDouble(_notevalues.__get(i))) ))) ), haxe.lang.Runtime.toString(null), ((nx3.EDirectionUAD) (null) ));
				notes.push(note);
				i++;
			}
			
		}
		
		nx3.NVoice.__hx_ctor_nx3_NVoice(__temp_me161, notes, null, direction);
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.QVoice(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.QVoice(((haxe.root.Array<java.lang.Object>) (arr.__get(0)) ), ((java.lang.Object) (arr.__get(1)) ), ((haxe.root.Array<java.lang.Object>) (arr.__get(2)) ), ((java.lang.Object) (arr.__get(3)) ), haxe.lang.Runtime.toString(arr.__get(4)), ((nx3.EDirectionUAD) (arr.__get(5)) ));
	}
	
	
	public   nx3.ESign getSign(java.lang.String val)
	{
		{
			java.lang.String __temp_svar804 = (val);
			int __temp_hash806 = __temp_svar804.hashCode();
			boolean __temp_executeDef805 = true;
			switch (__temp_hash806)
			{
				case 35:
				{
					if (__temp_svar804.equals("#")) 
					{
						__temp_executeDef805 = false;
						return nx3.ESign.Sharp;
					}
					
					break;
				}
				
				
				case 110:case 78:
				{
					if (( (( ( __temp_hash806 == 110 ) && __temp_svar804.equals("n") )) || __temp_svar804.equals("N") )) 
					{
						__temp_executeDef805 = false;
						return nx3.ESign.Natural;
					}
					
					break;
				}
				
				
				case 98:
				{
					if (__temp_svar804.equals("b")) 
					{
						__temp_executeDef805 = false;
						return nx3.ESign.Flat;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef805) 
			{
				return null;
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	public   nx3.ENoteVal getNotevalue(double val)
	{
		{
			double __temp_switch807 = (val);
			if (( __temp_switch807 == 16.0 )) 
			{
				return nx3.ENoteVal.Nv16;
			}
			 else 
			{
				if (( __temp_switch807 == .16 )) 
				{
					return nx3.ENoteVal.Nv16dot;
				}
				 else 
				{
					if (( __temp_switch807 == 8.0 )) 
					{
						return nx3.ENoteVal.Nv8;
					}
					 else 
					{
						if (( __temp_switch807 == .8 )) 
						{
							return nx3.ENoteVal.Nv8dot;
						}
						 else 
						{
							if (( __temp_switch807 == 4.0 )) 
							{
								return nx3.ENoteVal.Nv4;
							}
							 else 
							{
								if (( __temp_switch807 == .4 )) 
								{
									return nx3.ENoteVal.Nv4dot;
								}
								 else 
								{
									if (( __temp_switch807 == 2.0 )) 
									{
										return nx3.ENoteVal.Nv2;
									}
									 else 
									{
										if (( __temp_switch807 == .2 )) 
										{
											return nx3.ENoteVal.Nv2dot;
										}
										 else 
										{
											if (( __temp_switch807 == 1.0 )) 
											{
												return nx3.ENoteVal.Nv1;
											}
											 else 
											{
												if (( __temp_switch807 == .1 )) 
												{
													return nx3.ENoteVal.Nv1dot;
												}
												 else 
												{
													throw haxe.lang.HaxeException.wrap(( "Unknown notevalue: " + haxe.lang.Runtime.toString(val) ));
												}
												
											}
											
										}
										
									}
									
								}
								
							}
							
						}
						
					}
					
				}
				
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_getField(java.lang.String field, boolean throwErrors, boolean isCheck, boolean handleProperties)
	{
		{
			boolean __temp_executeDef808 = true;
			switch (field.hashCode())
			{
				case 1792047625:
				{
					if (field.equals("getNotevalue")) 
					{
						__temp_executeDef808 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNotevalue"))) );
					}
					
					break;
				}
				
				
				case -75151821:
				{
					if (field.equals("getSign")) 
					{
						__temp_executeDef808 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getSign"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef808) 
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
			boolean __temp_executeDef809 = true;
			switch (field.hashCode())
			{
				case 1792047625:
				{
					if (field.equals("getNotevalue")) 
					{
						__temp_executeDef809 = false;
						return this.getNotevalue(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
				case -75151821:
				{
					if (field.equals("getSign")) 
					{
						__temp_executeDef809 = false;
						return this.getSign(haxe.lang.Runtime.toString(dynargs.__get(0)));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef809) 
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


