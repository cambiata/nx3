package nx3.qs;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class QuickSyntaxBuilder extends haxe.lang.HxObject
{
	public    QuickSyntaxBuilder(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    QuickSyntaxBuilder(haxe.ds.StringMap<haxe.root.Array> qsnotes)
	{
		nx3.qs.QuickSyntaxBuilder.__hx_ctor_nx3_qs_QuickSyntaxBuilder(this, qsnotes);
	}
	
	
	public static   void __hx_ctor_nx3_qs_QuickSyntaxBuilder(nx3.qs.QuickSyntaxBuilder __temp_me193, haxe.ds.StringMap<haxe.root.Array> qsnotes)
	{
		__temp_me193.qsnotes = qsnotes;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.qs.QuickSyntaxBuilder(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.qs.QuickSyntaxBuilder(((haxe.ds.StringMap<haxe.root.Array>) (arr.__get(0)) ));
	}
	
	
	public  haxe.ds.StringMap<haxe.root.Array> qsnotes;
	
	public   haxe.root.Array<nx3.NBar> getNBars()
	{
		int barMax = 0;
		int partMax = 0;
		int voiceMax = 0;
		{
			java.lang.Object __temp_iterator259 = this.qsnotes.keys();
			while (haxe.lang.Runtime.toBool(haxe.lang.Runtime.callField(__temp_iterator259, "hasNext", null)))
			{
				java.lang.String key = haxe.lang.Runtime.toString(haxe.lang.Runtime.callField(__temp_iterator259, "next", null));
				java.lang.Object bpv = nx3.qs.QSyntaxTools.stringToBpv(key);
				barMax = this.max(((int) (haxe.lang.Runtime.getField_f(bpv, "barIndex", true)) ), barMax);
				partMax = this.max(((int) (haxe.lang.Runtime.getField_f(bpv, "partIndex", true)) ), partMax);
			}
			
		}
		
		barMax++;
		partMax++;
		haxe.root.Array<nx3.NBar> nbars = new haxe.root.Array<nx3.NBar>(new nx3.NBar[]{});
		{
			int _g = 0;
			while (( _g < barMax ))
			{
				int barIndex = _g++;
				haxe.root.Array<nx3.NPart> nparts = new haxe.root.Array<nx3.NPart>(new nx3.NPart[]{});
				{
					int _g1 = 0;
					while (( _g1 < partMax ))
					{
						int partIndex = _g1++;
						haxe.root.Array<nx3.NVoice> nvoices = new haxe.root.Array<nx3.NVoice>(new nx3.NVoice[]{});
						boolean __temp_stmt866 = false;
						{
							java.lang.String key1 = nx3.qs.QSyntaxTools.getBpvString(barIndex, partIndex, 0);
							__temp_stmt866 = this.qsnotes.exists(key1);
						}
						
						if (__temp_stmt866) 
						{
							haxe.root.Array<nx3.NNote> nnotes = null;
							{
								java.lang.String key2 = nx3.qs.QSyntaxTools.getBpvString(barIndex, partIndex, 0);
								nnotes = ((haxe.root.Array<nx3.NNote>) (((haxe.root.Array) (this.qsnotes.get(key2)) )) );
							}
							
							nx3.NVoice nvoice = new nx3.NVoice(((haxe.root.Array<nx3.NNote>) (nnotes) ), ((nx3.EVoiceType) (null) ), ((nx3.EDirectionUAD) (null) ));
							nvoices.push(nvoice);
						}
						 else 
						{
							{
							}
							
						}
						
						boolean __temp_stmt867 = false;
						{
							java.lang.String key3 = nx3.qs.QSyntaxTools.getBpvString(barIndex, partIndex, 1);
							__temp_stmt867 = this.qsnotes.exists(key3);
						}
						
						if (__temp_stmt867) 
						{
							haxe.root.Array<nx3.NNote> nnotes1 = null;
							{
								java.lang.String key4 = nx3.qs.QSyntaxTools.getBpvString(barIndex, partIndex, 1);
								nnotes1 = ((haxe.root.Array<nx3.NNote>) (((haxe.root.Array) (this.qsnotes.get(key4)) )) );
							}
							
							nx3.NVoice nvoice1 = new nx3.NVoice(((haxe.root.Array<nx3.NNote>) (nnotes1) ), ((nx3.EVoiceType) (null) ), ((nx3.EDirectionUAD) (null) ));
							nvoices.push(nvoice1);
						}
						 else 
						{
							{
							}
							
						}
						
						nx3.NPart npart = new nx3.NPart(((haxe.root.Array<nx3.NVoice>) (nvoices) ), ((nx3.EPartType) (null) ), ((nx3.EClef) (null) ), ((nx3.EDisplayALN) (null) ), ((nx3.EKey) (null) ), ((nx3.EDisplayALN) (null) ));
						nparts.push(npart);
					}
					
				}
				
				nx3.NBar nbar = new nx3.NBar(((haxe.root.Array<nx3.NPart>) (nparts) ), ((nx3.EBarType) (null) ), ((nx3.ETime) (null) ), ((nx3.EDisplayALN) (null) ), ((nx3.EAllotment) (nx3.EAllotment.Logaritmic) ), ((java.lang.Object) (null) ));
				nbars.push(nbar);
			}
			
		}
		
		return nbars;
	}
	
	
	public   nx3.NScore getNScore()
	{
		nx3.NScore nscore = new nx3.NScore(((haxe.root.Array<nx3.NBar>) (this.getNBars()) ));
		return nscore;
	}
	
	
	public   int max(int valA, int valB)
	{
		if (( valA > valB )) 
		{
			return valA;
		}
		
		return valB;
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef868 = true;
			switch (field.hashCode())
			{
				case 606062047:
				{
					if (field.equals("qsnotes")) 
					{
						__temp_executeDef868 = false;
						this.qsnotes = ((haxe.ds.StringMap<haxe.root.Array>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef868) 
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
			boolean __temp_executeDef869 = true;
			switch (field.hashCode())
			{
				case 107876:
				{
					if (field.equals("max")) 
					{
						__temp_executeDef869 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("max"))) );
					}
					
					break;
				}
				
				
				case 606062047:
				{
					if (field.equals("qsnotes")) 
					{
						__temp_executeDef869 = false;
						return this.qsnotes;
					}
					
					break;
				}
				
				
				case 629966266:
				{
					if (field.equals("getNScore")) 
					{
						__temp_executeDef869 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNScore"))) );
					}
					
					break;
				}
				
				
				case 1959475864:
				{
					if (field.equals("getNBars")) 
					{
						__temp_executeDef869 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNBars"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef869) 
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
			boolean __temp_executeDef870 = true;
			switch (field.hashCode())
			{
				case 107876:
				{
					if (field.equals("max")) 
					{
						__temp_executeDef870 = false;
						return this.max(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ), ((int) (haxe.lang.Runtime.toInt(dynargs.__get(1))) ));
					}
					
					break;
				}
				
				
				case 1959475864:
				{
					if (field.equals("getNBars")) 
					{
						__temp_executeDef870 = false;
						return this.getNBars();
					}
					
					break;
				}
				
				
				case 629966266:
				{
					if (field.equals("getNScore")) 
					{
						__temp_executeDef870 = false;
						return this.getNScore();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef870) 
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
		baseArr.push("qsnotes");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


