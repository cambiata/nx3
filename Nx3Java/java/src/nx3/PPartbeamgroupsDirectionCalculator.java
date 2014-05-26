package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PPartbeamgroupsDirectionCalculator extends haxe.lang.HxObject
{
	public    PPartbeamgroupsDirectionCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PPartbeamgroupsDirectionCalculator(nx3.PPart ppart)
	{
		nx3.PPartbeamgroupsDirectionCalculator.__hx_ctor_nx3_PPartbeamgroupsDirectionCalculator(this, ppart);
	}
	
	
	public static   void __hx_ctor_nx3_PPartbeamgroupsDirectionCalculator(nx3.PPartbeamgroupsDirectionCalculator __temp_me128, nx3.PPart ppart)
	{
		__temp_me128.ppart = ppart;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PPartbeamgroupsDirectionCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PPartbeamgroupsDirectionCalculator(((nx3.PPart) (arr.__get(0)) ));
	}
	
	
	public  nx3.PPart ppart;
	
	public   void calculateBeamgroupsDirections()
	{
		haxe.root.Array<haxe.root.Array> partbeamgroups = new haxe.root.Array<haxe.root.Array>(new haxe.root.Array[]{});
		{
			int _g = 0;
			haxe.root.Array<nx3.PVoice> _g1 = this.ppart.getVoices();
			while (( _g < _g1.length ))
			{
				nx3.PVoice pvoice = _g1.__get(_g);
				 ++ _g;
				partbeamgroups.push(((haxe.root.Array) (pvoice.getBeamgroups(null)) ));
			}
			
		}
		
		haxe.root.Array<nx3.PBeamgroup> beamgroups0 = ((haxe.root.Array<nx3.PBeamgroup>) (((haxe.root.Array) (partbeamgroups.__get(0)) )) );
		nx3.EDirectionUAD voiceDirection0 = this.ppart.getVoices().__get(0).nvoice.direction;
		if (( voiceDirection0 == null )) 
		{
			voiceDirection0 = nx3.EDirectionUAD.Auto;
		}
		
		if (( partbeamgroups.length == 1 )) 
		{
			int _g2 = 0;
			while (( _g2 < beamgroups0.length ))
			{
				nx3.PBeamgroup beamgroup = beamgroups0.__get(_g2);
				 ++ _g2;
				nx3.EDirectionUD direction = null;
				switch (haxe.root.Type.enumIndex(voiceDirection0))
				{
					case 0:
					{
						direction = nx3.EDirectionUD.Up;
						break;
					}
					
					
					case 2:
					{
						direction = nx3.EDirectionUD.Down;
						break;
					}
					
					
					case 1:
					{
						nx3.PBeamgroupDirectionCalculator calculator = new nx3.PBeamgroupDirectionCalculator(((nx3.PBeamgroup) (beamgroup) ));
						direction = calculator.getDirection();
						break;
					}
					
					
				}
				
				beamgroup.setDirection(direction);
			}
			
		}
		 else 
		{
			if (( partbeamgroups.length == 2 )) 
			{
				haxe.root.Array<nx3.PBeamgroup> beamgroups1 = ((haxe.root.Array<nx3.PBeamgroup>) (((haxe.root.Array) (partbeamgroups.__get(1)) )) );
				nx3.EDirectionUAD voiceDirection1 = this.ppart.getVoices().__get(1).nvoice.direction;
				if (( voiceDirection1 == null )) 
				{
					voiceDirection0 = nx3.EDirectionUAD.Auto;
				}
				
				nx3.PVoice voice0 = this.ppart.getVoices().__get(0);
				nx3.PVoice voice1 = this.ppart.getVoices().__get(1);
				if (( ( voiceDirection0 == nx3.EDirectionUAD.Auto ) && ( voiceDirection1 == nx3.EDirectionUAD.Auto ) )) 
				{
					int voice0value = voice0.getValue();
					int voice1value = voice1.getValue();
					nx3.EDirectionUD direction1 = null;
					int bgPosition = 0;
					{
						int _g3 = 0;
						while (( _g3 < beamgroups0.length ))
						{
							nx3.PBeamgroup beamgroup1 = beamgroups0.__get(_g3);
							 ++ _g3;
							if (( bgPosition < voice1value )) 
							{
								direction1 = nx3.EDirectionUD.Up;
							}
							 else 
							{
								nx3.PBeamgroupDirectionCalculator calculator1 = new nx3.PBeamgroupDirectionCalculator(((nx3.PBeamgroup) (beamgroup1) ));
								direction1 = calculator1.getDirection();
							}
							
							beamgroup1.setDirection(direction1);
							bgPosition += beamgroup1.getValue();
						}
						
					}
					
					int bgPosition1 = 0;
					{
						int _g4 = 0;
						while (( _g4 < beamgroups1.length ))
						{
							nx3.PBeamgroup beamgroup2 = beamgroups1.__get(_g4);
							 ++ _g4;
							if (( bgPosition1 < voice0value )) 
							{
								direction1 = nx3.EDirectionUD.Down;
							}
							 else 
							{
								nx3.PBeamgroupDirectionCalculator calculator2 = new nx3.PBeamgroupDirectionCalculator(((nx3.PBeamgroup) (beamgroup2) ));
								direction1 = calculator2.getDirection();
							}
							
							beamgroup2.setDirection(direction1);
							bgPosition1 += beamgroup2.getValue();
						}
						
					}
					
				}
				 else 
				{
					{
						int _g5 = 0;
						while (( _g5 < beamgroups0.length ))
						{
							nx3.PBeamgroup beamgroup3 = beamgroups0.__get(_g5);
							 ++ _g5;
							beamgroup3.setDirection(nx3.EDirectionTools.uadToUd(voice0.nvoice.direction));
						}
						
					}
					
					{
						int _g6 = 0;
						while (( _g6 < beamgroups1.length ))
						{
							nx3.PBeamgroup beamgroup4 = beamgroups1.__get(_g6);
							 ++ _g6;
							beamgroup4.setDirection(nx3.EDirectionTools.uadToUd(voice1.nvoice.direction));
						}
						
					}
					
				}
				
			}
			 else 
			{
				throw haxe.lang.HaxeException.wrap("SHOULDN\'T HAPPEN");
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef743 = true;
			switch (field.hashCode())
			{
				case 106867811:
				{
					if (field.equals("ppart")) 
					{
						__temp_executeDef743 = false;
						this.ppart = ((nx3.PPart) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef743) 
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
			boolean __temp_executeDef744 = true;
			switch (field.hashCode())
			{
				case 225756157:
				{
					if (field.equals("calculateBeamgroupsDirections")) 
					{
						__temp_executeDef744 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("calculateBeamgroupsDirections"))) );
					}
					
					break;
				}
				
				
				case 106867811:
				{
					if (field.equals("ppart")) 
					{
						__temp_executeDef744 = false;
						return this.ppart;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef744) 
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
			boolean __temp_executeDef745 = true;
			switch (field.hashCode())
			{
				case 225756157:
				{
					if (field.equals("calculateBeamgroupsDirections")) 
					{
						__temp_executeDef745 = false;
						this.calculateBeamgroupsDirections();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef745) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("ppart");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


