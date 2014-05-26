package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PColumn extends haxe.lang.HxObject
{
	public    PColumn(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PColumn(nx3.PBar bar, haxe.root.Array<nx3.PComplex> complexes, int valueposition, int value)
	{
		nx3.PColumn.__hx_ctor_nx3_PColumn(this, bar, complexes, valueposition, value);
	}
	
	
	public static   void __hx_ctor_nx3_PColumn(nx3.PColumn __temp_me106, nx3.PBar bar, haxe.root.Array<nx3.PComplex> complexes, int valueposition, int value)
	{
		__temp_me106.allottedDistance = ((double) (0) );
		__temp_me106.bar = bar;
		__temp_me106.complexes = complexes;
		__temp_me106.valueposition = valueposition;
		__temp_me106.value = value;
		__temp_me106.mposition = 0.0;
		__temp_me106.mdistanceBenefit = 0;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PColumn(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PColumn(((nx3.PBar) (arr.__get(0)) ), ((haxe.root.Array<nx3.PComplex>) (arr.__get(1)) ), ((int) (haxe.lang.Runtime.toInt(arr.__get(2))) ), ((int) (haxe.lang.Runtime.toInt(arr.__get(3))) ));
	}
	
	
	public  nx3.PBar bar;
	
	public  haxe.root.Array<nx3.PComplex> complexes;
	
	public  int valueposition;
	
	public   haxe.root.Array<nx3.PComplex> getComplexes()
	{
		return this.complexes;
	}
	
	
	public   int getValueposition()
	{
		return this.valueposition;
	}
	
	
	public  java.lang.Object value;
	
	public   int getValue()
	{
		if (( this.value == null )) 
		{
			throw haxe.lang.HaxeException.wrap("value shouldnt be null");
		}
		
		return ((int) (haxe.lang.Runtime.toInt(this.value)) );
	}
	
	
	public  java.lang.Object mdistance;
	
	public   double getMDistance()
	{
		if (( this.mdistance == null )) 
		{
			throw haxe.lang.HaxeException.wrap("mdistance shouldnt be null");
		}
		
		return ((double) (haxe.lang.Runtime.toDouble(this.mdistance)) );
	}
	
	
	public  java.lang.Object mdistanceBenefit;
	
	public   double getMDistanceBenefit()
	{
		if (( ! (( this.mdistanceBenefit == null )) )) 
		{
			return ((double) (haxe.lang.Runtime.toDouble(this.mdistanceBenefit)) );
		}
		
		this.mdistanceBenefit = java.lang.Math.max(((double) (0) ), ( this.getMDistance() - 3.2 ));
		return ((double) (haxe.lang.Runtime.toDouble(this.mdistanceBenefit)) );
	}
	
	
	public  double allottedDistance;
	
	public  java.lang.Object distancedelta;
	
	public   double getDistanceDelta()
	{
		if (( ! (( this.distancedelta == null )) )) 
		{
			return ((double) (haxe.lang.Runtime.toDouble(this.distancedelta)) );
		}
		
		this.bar.getContentwidth();
		this.distancedelta = ( this.allottedDistance / this.bar.getAllottedDistanceSum() );
		return ((double) (haxe.lang.Runtime.toDouble(this.distancedelta)) );
	}
	
	
	public  java.lang.Object mposition;
	
	public   double getMPosition()
	{
		return ((double) (haxe.lang.Runtime.toDouble(this.mposition)) );
	}
	
	
	public  java.lang.Object adistance;
	
	public   double getADistance()
	{
		if (( ! (( this.adistance == null )) )) 
		{
			return ((double) (haxe.lang.Runtime.toDouble(this.adistance)) );
		}
		
		this.bar.calculateAPositions();
		return ((double) (haxe.lang.Runtime.toDouble(this.adistance)) );
	}
	
	
	public  java.lang.Object adistanceBenefit;
	
	public   double getADistanceBenefit()
	{
		return ((double) (haxe.lang.Runtime.toDouble(this.adistanceBenefit)) );
	}
	
	
	public  java.lang.Object aposition;
	
	public   double getAPostion()
	{
		if (( ! (( this.aposition == null )) )) 
		{
			return ((double) (haxe.lang.Runtime.toDouble(this.aposition)) );
		}
		
		this.bar.calculateAPositions();
		return ((double) (haxe.lang.Runtime.toDouble(this.aposition)) );
	}
	
	
	public  java.lang.Object sposition;
	
	public   double getSPosition()
	{
		if (( ! (( this.sposition == null )) )) 
		{
			return ((double) (haxe.lang.Runtime.toDouble(this.sposition)) );
		}
		
		return this.getAPostion();
	}
	
	
	public  java.lang.Object rightX;
	
	public   double getRightX()
	{
		if (( ! (( this.rightX == null )) )) 
		{
			return ((double) (haxe.lang.Runtime.toDouble(this.rightX)) );
		}
		
		this.rightX = 0;
		{
			int _g = 0;
			haxe.root.Array<nx3.PComplex> _g1 = this.getComplexes();
			while (( _g < _g1.length ))
			{
				nx3.PComplex complex = _g1.__get(_g);
				 ++ _g;
				if (( complex != null )) 
				{
					this.rightX = java.lang.Math.max(((double) (haxe.lang.Runtime.toDouble(this.rightX)) ), complex.getRightX());
				}
				
			}
			
		}
		
		return ((double) (haxe.lang.Runtime.toDouble(this.rightX)) );
	}
	
	
	public  java.lang.Object leftX;
	
	public   double getLeftX()
	{
		if (( ! (( this.leftX == null )) )) 
		{
			return ((double) (haxe.lang.Runtime.toDouble(this.leftX)) );
		}
		
		this.leftX = 0;
		{
			int _g = 0;
			haxe.root.Array<nx3.PComplex> _g1 = this.getComplexes();
			while (( _g < _g1.length ))
			{
				nx3.PComplex complex = _g1.__get(_g);
				 ++ _g;
				if (( complex != null )) 
				{
					this.leftX = java.lang.Math.min(((double) (haxe.lang.Runtime.toDouble(this.leftX)) ), complex.getLeftX());
				}
				
			}
			
		}
		
		return ((double) (haxe.lang.Runtime.toDouble(this.leftX)) );
	}
	
	
	public   nx3.PComplex getNextComplex(nx3.PComplex complex)
	{
		nx3.PColumn __temp_stmt659 = null;
		{
			haxe.root.Array<nx3.PColumn> array = this.bar.getColumns();
			__temp_stmt659 = array.__get(( array.length - 1 ));
		}
		
		if (( this == __temp_stmt659 )) 
		{
			return null;
		}
		
		int partIndex = this.getComplexes().indexOf(complex, null);
		int nextColumnIdx = ( this.bar.getColumns().indexOf(this, null) + 1 );
		{
			int _g1 = nextColumnIdx;
			int _g = this.bar.getColumns().length;
			while (( _g1 < _g ))
			{
				int ci = _g1++;
				nx3.PComplex complex1 = this.bar.getColumns().__get(ci).getComplexes().__get(partIndex);
				if (( complex1 != null )) 
				{
					return complex1;
				}
				
			}
			
		}
		
		return null;
	}
	
	
	@Override public   java.lang.String toString()
	{
		return "PColumn";
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef660 = true;
			switch (field.hashCode())
			{
				case 102850865:
				{
					if (field.equals("leftX")) 
					{
						__temp_executeDef660 = false;
						this.leftX = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -61658726:
				{
					if (field.equals("valueposition")) 
					{
						__temp_executeDef660 = false;
						this.valueposition = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -931102276:
				{
					if (field.equals("rightX")) 
					{
						__temp_executeDef660 = false;
						this.rightX = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef660 = false;
						this.value = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -951028068:
				{
					if (field.equals("sposition")) 
					{
						__temp_executeDef660 = false;
						this.sposition = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 844418914:
				{
					if (field.equals("mdistance")) 
					{
						__temp_executeDef660 = false;
						this.mdistance = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1518381194:
				{
					if (field.equals("aposition")) 
					{
						__temp_executeDef660 = false;
						this.aposition = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1956235989:
				{
					if (field.equals("mdistanceBenefit")) 
					{
						__temp_executeDef660 = false;
						this.mdistanceBenefit = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -507288479:
				{
					if (field.equals("adistanceBenefit")) 
					{
						__temp_executeDef660 = false;
						this.adistanceBenefit = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1779933730:
				{
					if (field.equals("allottedDistance")) 
					{
						__temp_executeDef660 = false;
						this.allottedDistance = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1059035990:
				{
					if (field.equals("adistance")) 
					{
						__temp_executeDef660 = false;
						this.adistance = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -556703517:
				{
					if (field.equals("distancedelta")) 
					{
						__temp_executeDef660 = false;
						this.distancedelta = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1303764118:
				{
					if (field.equals("mposition")) 
					{
						__temp_executeDef660 = false;
						this.mposition = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef660) 
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
			boolean __temp_executeDef661 = true;
			switch (field.hashCode())
			{
				case 102850865:
				{
					if (field.equals("leftX")) 
					{
						__temp_executeDef661 = false;
						this.leftX = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 97299:
				{
					if (field.equals("bar")) 
					{
						__temp_executeDef661 = false;
						this.bar = ((nx3.PBar) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -931102276:
				{
					if (field.equals("rightX")) 
					{
						__temp_executeDef661 = false;
						this.rightX = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1402927778:
				{
					if (field.equals("complexes")) 
					{
						__temp_executeDef661 = false;
						this.complexes = ((haxe.root.Array<nx3.PComplex>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -951028068:
				{
					if (field.equals("sposition")) 
					{
						__temp_executeDef661 = false;
						this.sposition = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -61658726:
				{
					if (field.equals("valueposition")) 
					{
						__temp_executeDef661 = false;
						this.valueposition = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 1518381194:
				{
					if (field.equals("aposition")) 
					{
						__temp_executeDef661 = false;
						this.aposition = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef661 = false;
						this.value = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -507288479:
				{
					if (field.equals("adistanceBenefit")) 
					{
						__temp_executeDef661 = false;
						this.adistanceBenefit = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 844418914:
				{
					if (field.equals("mdistance")) 
					{
						__temp_executeDef661 = false;
						this.mdistance = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1059035990:
				{
					if (field.equals("adistance")) 
					{
						__temp_executeDef661 = false;
						this.adistance = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1956235989:
				{
					if (field.equals("mdistanceBenefit")) 
					{
						__temp_executeDef661 = false;
						this.mdistanceBenefit = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1303764118:
				{
					if (field.equals("mposition")) 
					{
						__temp_executeDef661 = false;
						this.mposition = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1779933730:
				{
					if (field.equals("allottedDistance")) 
					{
						__temp_executeDef661 = false;
						this.allottedDistance = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -556703517:
				{
					if (field.equals("distancedelta")) 
					{
						__temp_executeDef661 = false;
						this.distancedelta = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef661) 
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
			boolean __temp_executeDef662 = true;
			switch (field.hashCode())
			{
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef662 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("toString"))) );
					}
					
					break;
				}
				
				
				case 97299:
				{
					if (field.equals("bar")) 
					{
						__temp_executeDef662 = false;
						return this.bar;
					}
					
					break;
				}
				
				
				case 1662062855:
				{
					if (field.equals("getNextComplex")) 
					{
						__temp_executeDef662 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNextComplex"))) );
					}
					
					break;
				}
				
				
				case -1402927778:
				{
					if (field.equals("complexes")) 
					{
						__temp_executeDef662 = false;
						return this.complexes;
					}
					
					break;
				}
				
				
				case 1958676347:
				{
					if (field.equals("getLeftX")) 
					{
						__temp_executeDef662 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getLeftX"))) );
					}
					
					break;
				}
				
				
				case -61658726:
				{
					if (field.equals("valueposition")) 
					{
						__temp_executeDef662 = false;
						return this.valueposition;
					}
					
					break;
				}
				
				
				case 102850865:
				{
					if (field.equals("leftX")) 
					{
						__temp_executeDef662 = false;
						return this.leftX;
					}
					
					break;
				}
				
				
				case -1412532568:
				{
					if (field.equals("getComplexes")) 
					{
						__temp_executeDef662 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getComplexes"))) );
					}
					
					break;
				}
				
				
				case 764912818:
				{
					if (field.equals("getRightX")) 
					{
						__temp_executeDef662 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getRightX"))) );
					}
					
					break;
				}
				
				
				case -1179458076:
				{
					if (field.equals("getValueposition")) 
					{
						__temp_executeDef662 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getValueposition"))) );
					}
					
					break;
				}
				
				
				case -931102276:
				{
					if (field.equals("rightX")) 
					{
						__temp_executeDef662 = false;
						return this.rightX;
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef662 = false;
						return this.value;
					}
					
					break;
				}
				
				
				case -895988730:
				{
					if (field.equals("getSPosition")) 
					{
						__temp_executeDef662 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getSPosition"))) );
					}
					
					break;
				}
				
				
				case 1967798203:
				{
					if (field.equals("getValue")) 
					{
						__temp_executeDef662 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getValue"))) );
					}
					
					break;
				}
				
				
				case -951028068:
				{
					if (field.equals("sposition")) 
					{
						__temp_executeDef662 = false;
						return this.sposition;
					}
					
					break;
				}
				
				
				case 844418914:
				{
					if (field.equals("mdistance")) 
					{
						__temp_executeDef662 = false;
						return this.mdistance;
					}
					
					break;
				}
				
				
				case 605262141:
				{
					if (field.equals("getAPostion")) 
					{
						__temp_executeDef662 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getAPostion"))) );
					}
					
					break;
				}
				
				
				case 899458252:
				{
					if (field.equals("getMDistance")) 
					{
						__temp_executeDef662 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getMDistance"))) );
					}
					
					break;
				}
				
				
				case 1518381194:
				{
					if (field.equals("aposition")) 
					{
						__temp_executeDef662 = false;
						return this.aposition;
					}
					
					break;
				}
				
				
				case 1956235989:
				{
					if (field.equals("mdistanceBenefit")) 
					{
						__temp_executeDef662 = false;
						return this.mdistanceBenefit;
					}
					
					break;
				}
				
				
				case 1311671223:
				{
					if (field.equals("getADistanceBenefit")) 
					{
						__temp_executeDef662 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getADistanceBenefit"))) );
					}
					
					break;
				}
				
				
				case -519771605:
				{
					if (field.equals("getMDistanceBenefit")) 
					{
						__temp_executeDef662 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getMDistanceBenefit"))) );
					}
					
					break;
				}
				
				
				case -507288479:
				{
					if (field.equals("adistanceBenefit")) 
					{
						__temp_executeDef662 = false;
						return this.adistanceBenefit;
					}
					
					break;
				}
				
				
				case 1779933730:
				{
					if (field.equals("allottedDistance")) 
					{
						__temp_executeDef662 = false;
						return this.allottedDistance;
					}
					
					break;
				}
				
				
				case 1114075328:
				{
					if (field.equals("getADistance")) 
					{
						__temp_executeDef662 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getADistance"))) );
					}
					
					break;
				}
				
				
				case -556703517:
				{
					if (field.equals("distancedelta")) 
					{
						__temp_executeDef662 = false;
						return this.distancedelta;
					}
					
					break;
				}
				
				
				case 1059035990:
				{
					if (field.equals("adistance")) 
					{
						__temp_executeDef662 = false;
						return this.adistance;
					}
					
					break;
				}
				
				
				case -1704055539:
				{
					if (field.equals("getDistanceDelta")) 
					{
						__temp_executeDef662 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getDistanceDelta"))) );
					}
					
					break;
				}
				
				
				case 1358803456:
				{
					if (field.equals("getMPosition")) 
					{
						__temp_executeDef662 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getMPosition"))) );
					}
					
					break;
				}
				
				
				case 1303764118:
				{
					if (field.equals("mposition")) 
					{
						__temp_executeDef662 = false;
						return this.mposition;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef662) 
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
			boolean __temp_executeDef663 = true;
			switch (field.hashCode())
			{
				case 102850865:
				{
					if (field.equals("leftX")) 
					{
						__temp_executeDef663 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.leftX)) );
					}
					
					break;
				}
				
				
				case -61658726:
				{
					if (field.equals("valueposition")) 
					{
						__temp_executeDef663 = false;
						return ((double) (this.valueposition) );
					}
					
					break;
				}
				
				
				case -931102276:
				{
					if (field.equals("rightX")) 
					{
						__temp_executeDef663 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.rightX)) );
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef663 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.value)) );
					}
					
					break;
				}
				
				
				case -951028068:
				{
					if (field.equals("sposition")) 
					{
						__temp_executeDef663 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.sposition)) );
					}
					
					break;
				}
				
				
				case 844418914:
				{
					if (field.equals("mdistance")) 
					{
						__temp_executeDef663 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.mdistance)) );
					}
					
					break;
				}
				
				
				case 1518381194:
				{
					if (field.equals("aposition")) 
					{
						__temp_executeDef663 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.aposition)) );
					}
					
					break;
				}
				
				
				case 1956235989:
				{
					if (field.equals("mdistanceBenefit")) 
					{
						__temp_executeDef663 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.mdistanceBenefit)) );
					}
					
					break;
				}
				
				
				case -507288479:
				{
					if (field.equals("adistanceBenefit")) 
					{
						__temp_executeDef663 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.adistanceBenefit)) );
					}
					
					break;
				}
				
				
				case 1779933730:
				{
					if (field.equals("allottedDistance")) 
					{
						__temp_executeDef663 = false;
						return this.allottedDistance;
					}
					
					break;
				}
				
				
				case 1059035990:
				{
					if (field.equals("adistance")) 
					{
						__temp_executeDef663 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.adistance)) );
					}
					
					break;
				}
				
				
				case -556703517:
				{
					if (field.equals("distancedelta")) 
					{
						__temp_executeDef663 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.distancedelta)) );
					}
					
					break;
				}
				
				
				case 1303764118:
				{
					if (field.equals("mposition")) 
					{
						__temp_executeDef663 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.mposition)) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef663) 
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
			boolean __temp_executeDef664 = true;
			switch (field.hashCode())
			{
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef664 = false;
						return this.toString();
					}
					
					break;
				}
				
				
				case -1412532568:
				{
					if (field.equals("getComplexes")) 
					{
						__temp_executeDef664 = false;
						return this.getComplexes();
					}
					
					break;
				}
				
				
				case 1662062855:
				{
					if (field.equals("getNextComplex")) 
					{
						__temp_executeDef664 = false;
						return this.getNextComplex(((nx3.PComplex) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -1179458076:
				{
					if (field.equals("getValueposition")) 
					{
						__temp_executeDef664 = false;
						return this.getValueposition();
					}
					
					break;
				}
				
				
				case 1958676347:
				{
					if (field.equals("getLeftX")) 
					{
						__temp_executeDef664 = false;
						return this.getLeftX();
					}
					
					break;
				}
				
				
				case 1967798203:
				{
					if (field.equals("getValue")) 
					{
						__temp_executeDef664 = false;
						return this.getValue();
					}
					
					break;
				}
				
				
				case 764912818:
				{
					if (field.equals("getRightX")) 
					{
						__temp_executeDef664 = false;
						return this.getRightX();
					}
					
					break;
				}
				
				
				case 899458252:
				{
					if (field.equals("getMDistance")) 
					{
						__temp_executeDef664 = false;
						return this.getMDistance();
					}
					
					break;
				}
				
				
				case -895988730:
				{
					if (field.equals("getSPosition")) 
					{
						__temp_executeDef664 = false;
						return this.getSPosition();
					}
					
					break;
				}
				
				
				case -519771605:
				{
					if (field.equals("getMDistanceBenefit")) 
					{
						__temp_executeDef664 = false;
						return this.getMDistanceBenefit();
					}
					
					break;
				}
				
				
				case 605262141:
				{
					if (field.equals("getAPostion")) 
					{
						__temp_executeDef664 = false;
						return this.getAPostion();
					}
					
					break;
				}
				
				
				case -1704055539:
				{
					if (field.equals("getDistanceDelta")) 
					{
						__temp_executeDef664 = false;
						return this.getDistanceDelta();
					}
					
					break;
				}
				
				
				case 1311671223:
				{
					if (field.equals("getADistanceBenefit")) 
					{
						__temp_executeDef664 = false;
						return this.getADistanceBenefit();
					}
					
					break;
				}
				
				
				case 1358803456:
				{
					if (field.equals("getMPosition")) 
					{
						__temp_executeDef664 = false;
						return this.getMPosition();
					}
					
					break;
				}
				
				
				case 1114075328:
				{
					if (field.equals("getADistance")) 
					{
						__temp_executeDef664 = false;
						return this.getADistance();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef664) 
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
		baseArr.push("leftX");
		baseArr.push("rightX");
		baseArr.push("sposition");
		baseArr.push("aposition");
		baseArr.push("adistanceBenefit");
		baseArr.push("adistance");
		baseArr.push("mposition");
		baseArr.push("distancedelta");
		baseArr.push("allottedDistance");
		baseArr.push("mdistanceBenefit");
		baseArr.push("mdistance");
		baseArr.push("value");
		baseArr.push("valueposition");
		baseArr.push("complexes");
		baseArr.push("bar");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


