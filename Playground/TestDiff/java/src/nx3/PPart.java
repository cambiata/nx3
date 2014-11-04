package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PPart extends haxe.lang.HxObject
{
	public    PPart(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PPart(nx3.NPart npart)
	{
		nx3.PPart.__hx_ctor_nx3_PPart(this, npart);
	}
	
	
	public static   void __hx_ctor_nx3_PPart(nx3.PPart __temp_me104, nx3.NPart npart)
	{
		__temp_me104.npart = npart;
		__temp_me104.value = 0;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PPart(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PPart(((nx3.NPart) (arr.__get(0)) ));
	}
	
	
	public  nx3.NPart npart;
	
	public   java.lang.Object iterator()
	{
		{
			haxe.root.Array<nx3.PVoice> _this = this.getVoices();
			return new _Array.ArrayIterator<nx3.PVoice>(((haxe.root.Array<nx3.PVoice>) (_this) ));
		}
		
	}
	
	
	public  int length;
	
	public   int get_length()
	{
		return this.getVoices().length;
	}
	
	
	public  nx3.PBar bar;
	
	public   nx3.PBar getBar()
	{
		return this.bar;
	}
	
	
	public  haxe.root.Array<nx3.PVoice> voices;
	
	public   haxe.root.Array<nx3.PVoice> getVoices()
	{
		if (( this.voices != null )) 
		{
			return this.voices;
		}
		
		this.voices = new haxe.root.Array<nx3.PVoice>(new nx3.PVoice[]{});
		{
			int _g = 0;
			haxe.root.Array<nx3.NVoice> _g1 = this.npart.nvoices;
			while (( _g < _g1.length ))
			{
				nx3.NVoice nvoice = _g1.__get(_g);
				 ++ _g;
				nx3.PVoice voice = new nx3.PVoice(((nx3.NVoice) (nvoice) ));
				voice.part = this;
				this.voices.push(voice);
			}
			
		}
		
		return this.voices;
	}
	
	
	public   nx3.PVoice getVoice(int idx)
	{
		if (( ( idx < 0 ) || ( idx > this.getVoices().length ) )) 
		{
			return null;
		}
		 else 
		{
			return this.getVoices().__get(idx);
		}
		
	}
	
	
	public  haxe.root.Array<nx3.PComplex> complexes;
	
	public   haxe.root.Array<nx3.PComplex> getComplexes()
	{
		if (( this.complexes != null )) 
		{
			return this.complexes;
		}
		
		nx3.PPartComplexesGenerator generator = new nx3.PPartComplexesGenerator(((nx3.PPart) (this) ));
		this.complexes = generator.getComplexes();
		return this.complexes;
	}
	
	
	public  haxe.ds.IntMap<nx3.PComplex> positionsComplexes;
	
	public   haxe.ds.IntMap<nx3.PComplex> getPositionsComplexes()
	{
		if (( this.positionsComplexes != null )) 
		{
			return this.positionsComplexes;
		}
		
		this.positionsComplexes = new haxe.ds.IntMap<nx3.PComplex>();
		{
			int _g = 0;
			haxe.root.Array<nx3.PComplex> _g1 = this.getComplexes();
			while (( _g < _g1.length ))
			{
				nx3.PComplex complex = _g1.__get(_g);
				 ++ _g;
				this.positionsComplexes.set(complex.getValueposition(), complex);
			}
			
		}
		
		return this.positionsComplexes;
	}
	
	
	public   int getIndex()
	{
		return this.bar.getParts().indexOf(this, null);
	}
	
	
	public   double getYPosition()
	{
		return ((double) (( this.getIndex() * 20 )) );
	}
	
	
	public  int value;
	
	public   int getValue()
	{
		if (( this.value != 0 )) 
		{
			return this.value;
		}
		
		{
			int _g = 0;
			haxe.root.Array<nx3.PVoice> _g1 = this.getVoices();
			while (( _g < _g1.length ))
			{
				nx3.PVoice voice = _g1.__get(_g);
				 ++ _g;
				{
					double x = java.lang.Math.max(((double) (this.value) ), ((double) (voice.getValue()) ));
					this.value = ((int) (x) );
				}
				
			}
			
		}
		
		return this.value;
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef554 = true;
			switch (field.hashCode())
			{
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef554 = false;
						this.value = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef554 = false;
						this.length = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef554) 
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
			boolean __temp_executeDef555 = true;
			switch (field.hashCode())
			{
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef555 = false;
						this.value = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 105020769:
				{
					if (field.equals("npart")) 
					{
						__temp_executeDef555 = false;
						this.npart = ((nx3.NPart) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -2040991724:
				{
					if (field.equals("positionsComplexes")) 
					{
						__temp_executeDef555 = false;
						this.positionsComplexes = ((haxe.ds.IntMap<nx3.PComplex>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef555 = false;
						this.length = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -1402927778:
				{
					if (field.equals("complexes")) 
					{
						__temp_executeDef555 = false;
						this.complexes = ((haxe.root.Array<nx3.PComplex>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 97299:
				{
					if (field.equals("bar")) 
					{
						__temp_executeDef555 = false;
						this.bar = ((nx3.PBar) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -810990207:
				{
					if (field.equals("voices")) 
					{
						__temp_executeDef555 = false;
						this.voices = ((haxe.root.Array<nx3.PVoice>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef555) 
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
			boolean __temp_executeDef556 = true;
			switch (field.hashCode())
			{
				case 1967798203:
				{
					if (field.equals("getValue")) 
					{
						__temp_executeDef556 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getValue"))) );
					}
					
					break;
				}
				
				
				case 105020769:
				{
					if (field.equals("npart")) 
					{
						__temp_executeDef556 = false;
						return this.npart;
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef556 = false;
						return this.value;
					}
					
					break;
				}
				
				
				case 1182533742:
				{
					if (field.equals("iterator")) 
					{
						__temp_executeDef556 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("iterator"))) );
					}
					
					break;
				}
				
				
				case 1144186380:
				{
					if (field.equals("getYPosition")) 
					{
						__temp_executeDef556 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getYPosition"))) );
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef556 = false;
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
				
				
				case 1956171548:
				{
					if (field.equals("getIndex")) 
					{
						__temp_executeDef556 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getIndex"))) );
					}
					
					break;
				}
				
				
				case 974314479:
				{
					if (field.equals("get_length")) 
					{
						__temp_executeDef556 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_length"))) );
					}
					
					break;
				}
				
				
				case -1716170230:
				{
					if (field.equals("getPositionsComplexes")) 
					{
						__temp_executeDef556 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getPositionsComplexes"))) );
					}
					
					break;
				}
				
				
				case 97299:
				{
					if (field.equals("bar")) 
					{
						__temp_executeDef556 = false;
						return this.bar;
					}
					
					break;
				}
				
				
				case -2040991724:
				{
					if (field.equals("positionsComplexes")) 
					{
						__temp_executeDef556 = false;
						return this.positionsComplexes;
					}
					
					break;
				}
				
				
				case -1249366819:
				{
					if (field.equals("getBar")) 
					{
						__temp_executeDef556 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBar"))) );
					}
					
					break;
				}
				
				
				case -1412532568:
				{
					if (field.equals("getComplexes")) 
					{
						__temp_executeDef556 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getComplexes"))) );
					}
					
					break;
				}
				
				
				case -810990207:
				{
					if (field.equals("voices")) 
					{
						__temp_executeDef556 = false;
						return this.voices;
					}
					
					break;
				}
				
				
				case -1402927778:
				{
					if (field.equals("complexes")) 
					{
						__temp_executeDef556 = false;
						return this.complexes;
					}
					
					break;
				}
				
				
				case 885024887:
				{
					if (field.equals("getVoices")) 
					{
						__temp_executeDef556 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getVoices"))) );
					}
					
					break;
				}
				
				
				case 1968211836:
				{
					if (field.equals("getVoice")) 
					{
						__temp_executeDef556 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getVoice"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef556) 
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
			boolean __temp_executeDef557 = true;
			switch (field.hashCode())
			{
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef557 = false;
						return ((double) (this.value) );
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef557 = false;
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
				
				
			}
			
			if (__temp_executeDef557) 
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
			boolean __temp_executeDef558 = true;
			switch (field.hashCode())
			{
				case 1967798203:
				{
					if (field.equals("getValue")) 
					{
						__temp_executeDef558 = false;
						return this.getValue();
					}
					
					break;
				}
				
				
				case 1182533742:
				{
					if (field.equals("iterator")) 
					{
						__temp_executeDef558 = false;
						return this.iterator();
					}
					
					break;
				}
				
				
				case 1144186380:
				{
					if (field.equals("getYPosition")) 
					{
						__temp_executeDef558 = false;
						return this.getYPosition();
					}
					
					break;
				}
				
				
				case 974314479:
				{
					if (field.equals("get_length")) 
					{
						__temp_executeDef558 = false;
						return this.get_length();
					}
					
					break;
				}
				
				
				case 1956171548:
				{
					if (field.equals("getIndex")) 
					{
						__temp_executeDef558 = false;
						return this.getIndex();
					}
					
					break;
				}
				
				
				case -1249366819:
				{
					if (field.equals("getBar")) 
					{
						__temp_executeDef558 = false;
						return this.getBar();
					}
					
					break;
				}
				
				
				case -1716170230:
				{
					if (field.equals("getPositionsComplexes")) 
					{
						__temp_executeDef558 = false;
						return this.getPositionsComplexes();
					}
					
					break;
				}
				
				
				case 885024887:
				{
					if (field.equals("getVoices")) 
					{
						__temp_executeDef558 = false;
						return this.getVoices();
					}
					
					break;
				}
				
				
				case -1412532568:
				{
					if (field.equals("getComplexes")) 
					{
						__temp_executeDef558 = false;
						return this.getComplexes();
					}
					
					break;
				}
				
				
				case 1968211836:
				{
					if (field.equals("getVoice")) 
					{
						__temp_executeDef558 = false;
						return this.getVoice(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef558) 
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
		baseArr.push("value");
		baseArr.push("positionsComplexes");
		baseArr.push("complexes");
		baseArr.push("voices");
		baseArr.push("bar");
		baseArr.push("length");
		baseArr.push("npart");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


