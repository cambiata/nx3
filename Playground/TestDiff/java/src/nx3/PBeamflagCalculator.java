package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PBeamflagCalculator extends haxe.lang.HxObject
{
	public    PBeamflagCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PBeamflagCalculator(nx3.PBeamgroup beamgroup)
	{
		nx3.PBeamflagCalculator.__hx_ctor_nx3_PBeamflagCalculator(this, beamgroup);
	}
	
	
	public static   void __hx_ctor_nx3_PBeamflagCalculator(nx3.PBeamflagCalculator __temp_me80, nx3.PBeamgroup beamgroup)
	{
		__temp_me80.beamgroup = beamgroup;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PBeamflagCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PBeamflagCalculator(((nx3.PBeamgroup) (arr.__get(0)) ));
	}
	
	
	public  nx3.PBeamgroup beamgroup;
	
	public   haxe.root.Array<nx3.EBeamflagType> getBeamflags()
	{
		haxe.root.Array<nx3.EBeamflagType> firstpass = new haxe.root.Array<nx3.EBeamflagType>(new nx3.EBeamflagType[]{});
		int noteIdx = 0;
		haxe.root.Array<java.lang.Object> holder = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		int holderIdx = 0;
		{
			int _g = 0;
			haxe.root.Array<nx3.PNote> _g1 = this.beamgroup.pnotes;
			while (( _g < _g1.length ))
			{
				nx3.PNote note = _g1.__get(_g);
				 ++ _g;
				nx3.PNote nextnote = null;
				{
					haxe.root.Array<nx3.PNote> a = this.beamgroup.pnotes;
					int idx = ( noteIdx + 1 );
					if (( ( idx < 0 ) || ( idx > ( a.length - 1 ) ) )) 
					{
						nextnote = null;
					}
					 else 
					{
						nextnote = a.__get(idx);
					}
					
				}
				
				if (( nextnote == null )) 
				{
					continue;
				}
				
				if (( ( nx3.ENoteValTools.beaminglevel(note.nnote.value) > 1 ) && ( nx3.ENoteValTools.beaminglevel(nextnote.nnote.value) > 1 ) )) 
				{
					holder.push(2);
					firstpass.push(nx3.EBeamflagType.Full16);
				}
				 else 
				{
					if (( ( nx3.ENoteValTools.beaminglevel(note.nnote.value) == 1 ) && ( nx3.ENoteValTools.beaminglevel(nextnote.nnote.value) > 1 ) )) 
					{
						holder.push(-1);
						firstpass.push(nx3.EBeamflagType.End16);
					}
					 else 
					{
						if (( ( nx3.ENoteValTools.beaminglevel(note.nnote.value) > 1 ) && ( nx3.ENoteValTools.beaminglevel(nextnote.nnote.value) == 1 ) )) 
						{
							holder.push(1);
							firstpass.push(nx3.EBeamflagType.Start16);
						}
						 else 
						{
							holder.push(0);
							firstpass.push(nx3.EBeamflagType.None);
						}
						
					}
					
				}
				
				noteIdx++;
			}
			
		}
		
		haxe.root.Array<nx3.EBeamflagType> result = new haxe.root.Array<nx3.EBeamflagType>(new nx3.EBeamflagType[]{});
		{
			int _g2 = 0;
			while (( _g2 < firstpass.length ))
			{
				nx3.EBeamflagType r = firstpass.__get(_g2);
				 ++ _g2;
				nx3.EBeamflagType rnext = null;
				{
					int idx1 = firstpass.indexOf(r, null);
					if (( idx1 == -1 )) 
					{
						rnext = null;
					}
					 else 
					{
						if (( idx1 == ( firstpass.length - 1 ) )) 
						{
							rnext = null;
						}
						 else 
						{
							rnext = firstpass.__get(( idx1 + 1 ));
						}
						
					}
					
				}
				
				nx3.EBeamflagType rprev = null;
				{
					int idx2 = firstpass.indexOf(r, null);
					if (( idx2 <= 0 )) 
					{
						rprev = null;
					}
					 else 
					{
						rprev = firstpass.__get(( idx2 - 1 ));
					}
					
				}
				
				if (( ( rnext == nx3.EBeamflagType.Full16 ) && ( r == nx3.EBeamflagType.End16 ) )) 
				{
					result.push(nx3.EBeamflagType.None);
				}
				 else 
				{
					if (( ( rprev == nx3.EBeamflagType.Full16 ) && ( r == nx3.EBeamflagType.Start16 ) )) 
					{
						result.push(nx3.EBeamflagType.None);
					}
					 else 
					{
						result.push(r);
					}
					
				}
				
			}
			
		}
		
		return result;
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef456 = true;
			switch (field.hashCode())
			{
				case -1993942992:
				{
					if (field.equals("beamgroup")) 
					{
						__temp_executeDef456 = false;
						this.beamgroup = ((nx3.PBeamgroup) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef456) 
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
			boolean __temp_executeDef457 = true;
			switch (field.hashCode())
			{
				case -2004663934:
				{
					if (field.equals("getBeamflags")) 
					{
						__temp_executeDef457 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBeamflags"))) );
					}
					
					break;
				}
				
				
				case -1993942992:
				{
					if (field.equals("beamgroup")) 
					{
						__temp_executeDef457 = false;
						return this.beamgroup;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef457) 
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
			boolean __temp_executeDef458 = true;
			switch (field.hashCode())
			{
				case -2004663934:
				{
					if (field.equals("getBeamflags")) 
					{
						__temp_executeDef458 = false;
						return this.getBeamflags();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef458) 
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
		baseArr.push("beamgroup");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


