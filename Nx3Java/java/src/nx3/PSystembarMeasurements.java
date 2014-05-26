package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PSystembarMeasurements extends haxe.lang.HxObject
{
	public    PSystembarMeasurements(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PSystembarMeasurements(nx3.PBar bar)
	{
		nx3.PSystembarMeasurements.__hx_ctor_nx3_PSystembarMeasurements(this, bar);
	}
	
	
	public static   void __hx_ctor_nx3_PSystembarMeasurements(nx3.PSystembarMeasurements __temp_me139, nx3.PBar bar)
	{
		__temp_me139.barlineWidth = ((double) (0) );
		__temp_me139.cautTimeWidth = ((double) (0) );
		__temp_me139.cautKeyWidth = ((double) (0) );
		__temp_me139.cautClefWidth = ((double) (0) );
		__temp_me139.contentWidth = ((double) (0) );
		__temp_me139.contentXZero = ((double) (0) );
		__temp_me139.leftContentMarginWidth = ((double) (0) );
		__temp_me139.timeWidth = ((double) (0) );
		__temp_me139.keyWidth = ((double) (0) );
		__temp_me139.clefWidth = ((double) (0) );
		__temp_me139.ackoladeWidth = ((double) (0) );
		__temp_me139.bar = bar;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PSystembarMeasurements(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PSystembarMeasurements(((nx3.PBar) (arr.__get(0)) ));
	}
	
	
	public  nx3.PBar bar;
	
	public  double ackoladeWidth;
	
	public   double getAckoladeXPosition()
	{
		return ((double) (0) );
	}
	
	
	public  double clefWidth;
	
	public   double getClefXPosition()
	{
		return ( this.getAckoladeXPosition() + this.ackoladeWidth );
	}
	
	
	public  double keyWidth;
	
	public   double getKeyXPosition()
	{
		return ( this.getClefXPosition() + this.clefWidth );
	}
	
	
	public  double timeWidth;
	
	public   double getTimeXPosition()
	{
		return ( this.getKeyXPosition() + this.keyWidth );
	}
	
	
	public  double leftContentMarginWidth;
	
	public   double getLeftContentMarginXPosition()
	{
		return ( this.getTimeXPosition() + this.timeWidth );
	}
	
	
	public  double contentXZero;
	
	public   double getContentXZero()
	{
		return this.contentXZero;
	}
	
	
	public  double contentWidth;
	
	public   double getContentXPosition()
	{
		return ( this.getLeftContentMarginXPosition() + this.leftContentMarginWidth );
	}
	
	
	public   double getContentWidth()
	{
		return this.contentWidth;
	}
	
	
	public   void setContentWidth(double val)
	{
		this.contentWidth = val;
	}
	
	
	public  double cautClefWidth;
	
	public   double getCautClefXPosition()
	{
		return ( this.getContentXPosition() + this.contentWidth );
	}
	
	
	public  double cautKeyWidth;
	
	public   double getCautKeyXPosition()
	{
		return ( this.getCautClefXPosition() + this.cautClefWidth );
	}
	
	
	public  double cautTimeWidth;
	
	public   double getCautTimeXPosition()
	{
		return ( this.getCautKeyXPosition() + this.cautKeyWidth );
	}
	
	
	public  double barlineWidth;
	
	public   double getBarlineXPosition()
	{
		return ( this.getCautTimeXPosition() + this.cautTimeWidth );
	}
	
	
	public   double getTotalWidth()
	{
		return ( this.getBarlineXPosition() + this.barlineWidth );
	}
	
	
	public   nx3.PSystembarMeasurements init(java.lang.Object barAttributes, nx3.PBarConfig barConfig, java.lang.Object cautAttributes)
	{
		nx3.PBarWidthCalculator calculator = new nx3.PBarWidthCalculator();
		this.ackoladeWidth = calculator.getLeftBarlineWidth(nx3.EBarlineLeft.None);
		if (barConfig.showClef) 
		{
			this.clefWidth = calculator.getClefsWidth(((haxe.root.Array<nx3.EClef>) (haxe.lang.Runtime.getField(barAttributes, "clefs", true)) ));
		}
		
		if (barConfig.showKey) 
		{
			this.keyWidth = calculator.getKeysWidth(((haxe.root.Array<nx3.EKey>) (haxe.lang.Runtime.getField(barAttributes, "keys", true)) ));
		}
		
		if (barConfig.showTime) 
		{
			this.timeWidth += calculator.getTimeWidth(((nx3.ETime) (haxe.lang.Runtime.getField(barAttributes, "time", true)) ));
		}
		
		this.leftContentMarginWidth = calculator.getContentLeftMarginWidth(this.bar);
		this.contentWidth = calculator.getContentWidth(this.bar);
		this.contentXZero = this.bar.getContentXZero();
		if (( barConfig.showCautClef && ( ! (( cautAttributes == null )) ) )) 
		{
			this.cautClefWidth = calculator.getClefsWidth(((haxe.root.Array<nx3.EClef>) (haxe.lang.Runtime.getField(cautAttributes, "clefs", true)) ));
		}
		
		if (( barConfig.showCautKey && ( ! (( cautAttributes == null )) ) )) 
		{
			this.cautKeyWidth = calculator.getKeysWidth(((haxe.root.Array<nx3.EKey>) (haxe.lang.Runtime.getField(cautAttributes, "keys", true)) ));
		}
		
		if (( barConfig.showCautTime && ( ! (( cautAttributes == null )) ) )) 
		{
			this.cautTimeWidth += calculator.getTimeWidth(((nx3.ETime) (haxe.lang.Runtime.getField(cautAttributes, "time", true)) ));
		}
		
		this.barlineWidth = calculator.getBarlineWidth(nx3.EBarline.Normal);
		return this;
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef799 = true;
			switch (field.hashCode())
			{
				case -1176907905:
				{
					if (field.equals("barlineWidth")) 
					{
						__temp_executeDef799 = false;
						this.barlineWidth = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -985932694:
				{
					if (field.equals("ackoladeWidth")) 
					{
						__temp_executeDef799 = false;
						this.ackoladeWidth = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1576264700:
				{
					if (field.equals("cautTimeWidth")) 
					{
						__temp_executeDef799 = false;
						this.cautTimeWidth = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1152071396:
				{
					if (field.equals("clefWidth")) 
					{
						__temp_executeDef799 = false;
						this.clefWidth = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1513149764:
				{
					if (field.equals("cautKeyWidth")) 
					{
						__temp_executeDef799 = false;
						this.cautKeyWidth = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 493404839:
				{
					if (field.equals("keyWidth")) 
					{
						__temp_executeDef799 = false;
						this.keyWidth = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 395250207:
				{
					if (field.equals("cautClefWidth")) 
					{
						__temp_executeDef799 = false;
						this.cautClefWidth = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 28943097:
				{
					if (field.equals("timeWidth")) 
					{
						__temp_executeDef799 = false;
						this.timeWidth = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 824110285:
				{
					if (field.equals("contentWidth")) 
					{
						__temp_executeDef799 = false;
						this.contentWidth = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -142787866:
				{
					if (field.equals("leftContentMarginWidth")) 
					{
						__temp_executeDef799 = false;
						this.leftContentMarginWidth = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 824587847:
				{
					if (field.equals("contentXZero")) 
					{
						__temp_executeDef799 = false;
						this.contentXZero = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef799) 
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
			boolean __temp_executeDef800 = true;
			switch (field.hashCode())
			{
				case -1176907905:
				{
					if (field.equals("barlineWidth")) 
					{
						__temp_executeDef800 = false;
						this.barlineWidth = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 97299:
				{
					if (field.equals("bar")) 
					{
						__temp_executeDef800 = false;
						this.bar = ((nx3.PBar) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1576264700:
				{
					if (field.equals("cautTimeWidth")) 
					{
						__temp_executeDef800 = false;
						this.cautTimeWidth = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -985932694:
				{
					if (field.equals("ackoladeWidth")) 
					{
						__temp_executeDef800 = false;
						this.ackoladeWidth = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 1513149764:
				{
					if (field.equals("cautKeyWidth")) 
					{
						__temp_executeDef800 = false;
						this.cautKeyWidth = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -1152071396:
				{
					if (field.equals("clefWidth")) 
					{
						__temp_executeDef800 = false;
						this.clefWidth = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 395250207:
				{
					if (field.equals("cautClefWidth")) 
					{
						__temp_executeDef800 = false;
						this.cautClefWidth = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 493404839:
				{
					if (field.equals("keyWidth")) 
					{
						__temp_executeDef800 = false;
						this.keyWidth = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 824110285:
				{
					if (field.equals("contentWidth")) 
					{
						__temp_executeDef800 = false;
						this.contentWidth = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 28943097:
				{
					if (field.equals("timeWidth")) 
					{
						__temp_executeDef800 = false;
						this.timeWidth = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 824587847:
				{
					if (field.equals("contentXZero")) 
					{
						__temp_executeDef800 = false;
						this.contentXZero = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -142787866:
				{
					if (field.equals("leftContentMarginWidth")) 
					{
						__temp_executeDef800 = false;
						this.leftContentMarginWidth = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef800) 
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
			boolean __temp_executeDef801 = true;
			switch (field.hashCode())
			{
				case 3237136:
				{
					if (field.equals("init")) 
					{
						__temp_executeDef801 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("init"))) );
					}
					
					break;
				}
				
				
				case 97299:
				{
					if (field.equals("bar")) 
					{
						__temp_executeDef801 = false;
						return this.bar;
					}
					
					break;
				}
				
				
				case -1010858792:
				{
					if (field.equals("getTotalWidth")) 
					{
						__temp_executeDef801 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getTotalWidth"))) );
					}
					
					break;
				}
				
				
				case -985932694:
				{
					if (field.equals("ackoladeWidth")) 
					{
						__temp_executeDef801 = false;
						return this.ackoladeWidth;
					}
					
					break;
				}
				
				
				case -320107920:
				{
					if (field.equals("getBarlineXPosition")) 
					{
						__temp_executeDef801 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBarlineXPosition"))) );
					}
					
					break;
				}
				
				
				case -659338833:
				{
					if (field.equals("getAckoladeXPosition")) 
					{
						__temp_executeDef801 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getAckoladeXPosition"))) );
					}
					
					break;
				}
				
				
				case -1176907905:
				{
					if (field.equals("barlineWidth")) 
					{
						__temp_executeDef801 = false;
						return this.barlineWidth;
					}
					
					break;
				}
				
				
				case -1152071396:
				{
					if (field.equals("clefWidth")) 
					{
						__temp_executeDef801 = false;
						return this.clefWidth;
					}
					
					break;
				}
				
				
				case -1072089023:
				{
					if (field.equals("getCautTimeXPosition")) 
					{
						__temp_executeDef801 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getCautTimeXPosition"))) );
					}
					
					break;
				}
				
				
				case 1953350241:
				{
					if (field.equals("getClefXPosition")) 
					{
						__temp_executeDef801 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getClefXPosition"))) );
					}
					
					break;
				}
				
				
				case 1576264700:
				{
					if (field.equals("cautTimeWidth")) 
					{
						__temp_executeDef801 = false;
						return this.cautTimeWidth;
					}
					
					break;
				}
				
				
				case 493404839:
				{
					if (field.equals("keyWidth")) 
					{
						__temp_executeDef801 = false;
						return this.keyWidth;
					}
					
					break;
				}
				
				
				case -619698763:
				{
					if (field.equals("getCautKeyXPosition")) 
					{
						__temp_executeDef801 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getCautKeyXPosition"))) );
					}
					
					break;
				}
				
				
				case -183053160:
				{
					if (field.equals("getKeyXPosition")) 
					{
						__temp_executeDef801 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getKeyXPosition"))) );
					}
					
					break;
				}
				
				
				case 1513149764:
				{
					if (field.equals("cautKeyWidth")) 
					{
						__temp_executeDef801 = false;
						return this.cautKeyWidth;
					}
					
					break;
				}
				
				
				case 28943097:
				{
					if (field.equals("timeWidth")) 
					{
						__temp_executeDef801 = false;
						return this.timeWidth;
					}
					
					break;
				}
				
				
				case 1302238436:
				{
					if (field.equals("getCautClefXPosition")) 
					{
						__temp_executeDef801 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getCautClefXPosition"))) );
					}
					
					break;
				}
				
				
				case -420977218:
				{
					if (field.equals("getTimeXPosition")) 
					{
						__temp_executeDef801 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getTimeXPosition"))) );
					}
					
					break;
				}
				
				
				case 395250207:
				{
					if (field.equals("cautClefWidth")) 
					{
						__temp_executeDef801 = false;
						return this.cautClefWidth;
					}
					
					break;
				}
				
				
				case -142787866:
				{
					if (field.equals("leftContentMarginWidth")) 
					{
						__temp_executeDef801 = false;
						return this.leftContentMarginWidth;
					}
					
					break;
				}
				
				
				case -933594545:
				{
					if (field.equals("setContentWidth")) 
					{
						__temp_executeDef801 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("setContentWidth"))) );
					}
					
					break;
				}
				
				
				case 1105366743:
				{
					if (field.equals("getLeftContentMarginXPosition")) 
					{
						__temp_executeDef801 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getLeftContentMarginXPosition"))) );
					}
					
					break;
				}
				
				
				case -1844347069:
				{
					if (field.equals("getContentWidth")) 
					{
						__temp_executeDef801 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getContentWidth"))) );
					}
					
					break;
				}
				
				
				case 824587847:
				{
					if (field.equals("contentXZero")) 
					{
						__temp_executeDef801 = false;
						return this.contentXZero;
					}
					
					break;
				}
				
				
				case -693808962:
				{
					if (field.equals("getContentXPosition")) 
					{
						__temp_executeDef801 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getContentXPosition"))) );
					}
					
					break;
				}
				
				
				case -1843869507:
				{
					if (field.equals("getContentXZero")) 
					{
						__temp_executeDef801 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getContentXZero"))) );
					}
					
					break;
				}
				
				
				case 824110285:
				{
					if (field.equals("contentWidth")) 
					{
						__temp_executeDef801 = false;
						return this.contentWidth;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef801) 
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
			boolean __temp_executeDef802 = true;
			switch (field.hashCode())
			{
				case -1176907905:
				{
					if (field.equals("barlineWidth")) 
					{
						__temp_executeDef802 = false;
						return this.barlineWidth;
					}
					
					break;
				}
				
				
				case -985932694:
				{
					if (field.equals("ackoladeWidth")) 
					{
						__temp_executeDef802 = false;
						return this.ackoladeWidth;
					}
					
					break;
				}
				
				
				case 1576264700:
				{
					if (field.equals("cautTimeWidth")) 
					{
						__temp_executeDef802 = false;
						return this.cautTimeWidth;
					}
					
					break;
				}
				
				
				case -1152071396:
				{
					if (field.equals("clefWidth")) 
					{
						__temp_executeDef802 = false;
						return this.clefWidth;
					}
					
					break;
				}
				
				
				case 1513149764:
				{
					if (field.equals("cautKeyWidth")) 
					{
						__temp_executeDef802 = false;
						return this.cautKeyWidth;
					}
					
					break;
				}
				
				
				case 493404839:
				{
					if (field.equals("keyWidth")) 
					{
						__temp_executeDef802 = false;
						return this.keyWidth;
					}
					
					break;
				}
				
				
				case 395250207:
				{
					if (field.equals("cautClefWidth")) 
					{
						__temp_executeDef802 = false;
						return this.cautClefWidth;
					}
					
					break;
				}
				
				
				case 28943097:
				{
					if (field.equals("timeWidth")) 
					{
						__temp_executeDef802 = false;
						return this.timeWidth;
					}
					
					break;
				}
				
				
				case 824110285:
				{
					if (field.equals("contentWidth")) 
					{
						__temp_executeDef802 = false;
						return this.contentWidth;
					}
					
					break;
				}
				
				
				case -142787866:
				{
					if (field.equals("leftContentMarginWidth")) 
					{
						__temp_executeDef802 = false;
						return this.leftContentMarginWidth;
					}
					
					break;
				}
				
				
				case 824587847:
				{
					if (field.equals("contentXZero")) 
					{
						__temp_executeDef802 = false;
						return this.contentXZero;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef802) 
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
			boolean __temp_executeDef803 = true;
			switch (field.hashCode())
			{
				case 3237136:
				{
					if (field.equals("init")) 
					{
						__temp_executeDef803 = false;
						return this.init(dynargs.__get(0), ((nx3.PBarConfig) (dynargs.__get(1)) ), dynargs.__get(2));
					}
					
					break;
				}
				
				
				case -659338833:
				{
					if (field.equals("getAckoladeXPosition")) 
					{
						__temp_executeDef803 = false;
						return this.getAckoladeXPosition();
					}
					
					break;
				}
				
				
				case -1010858792:
				{
					if (field.equals("getTotalWidth")) 
					{
						__temp_executeDef803 = false;
						return this.getTotalWidth();
					}
					
					break;
				}
				
				
				case 1953350241:
				{
					if (field.equals("getClefXPosition")) 
					{
						__temp_executeDef803 = false;
						return this.getClefXPosition();
					}
					
					break;
				}
				
				
				case -320107920:
				{
					if (field.equals("getBarlineXPosition")) 
					{
						__temp_executeDef803 = false;
						return this.getBarlineXPosition();
					}
					
					break;
				}
				
				
				case -183053160:
				{
					if (field.equals("getKeyXPosition")) 
					{
						__temp_executeDef803 = false;
						return this.getKeyXPosition();
					}
					
					break;
				}
				
				
				case -1072089023:
				{
					if (field.equals("getCautTimeXPosition")) 
					{
						__temp_executeDef803 = false;
						return this.getCautTimeXPosition();
					}
					
					break;
				}
				
				
				case -420977218:
				{
					if (field.equals("getTimeXPosition")) 
					{
						__temp_executeDef803 = false;
						return this.getTimeXPosition();
					}
					
					break;
				}
				
				
				case -619698763:
				{
					if (field.equals("getCautKeyXPosition")) 
					{
						__temp_executeDef803 = false;
						return this.getCautKeyXPosition();
					}
					
					break;
				}
				
				
				case 1105366743:
				{
					if (field.equals("getLeftContentMarginXPosition")) 
					{
						__temp_executeDef803 = false;
						return this.getLeftContentMarginXPosition();
					}
					
					break;
				}
				
				
				case 1302238436:
				{
					if (field.equals("getCautClefXPosition")) 
					{
						__temp_executeDef803 = false;
						return this.getCautClefXPosition();
					}
					
					break;
				}
				
				
				case -1843869507:
				{
					if (field.equals("getContentXZero")) 
					{
						__temp_executeDef803 = false;
						return this.getContentXZero();
					}
					
					break;
				}
				
				
				case -933594545:
				{
					if (field.equals("setContentWidth")) 
					{
						__temp_executeDef803 = false;
						this.setContentWidth(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
				case -693808962:
				{
					if (field.equals("getContentXPosition")) 
					{
						__temp_executeDef803 = false;
						return this.getContentXPosition();
					}
					
					break;
				}
				
				
				case -1844347069:
				{
					if (field.equals("getContentWidth")) 
					{
						__temp_executeDef803 = false;
						return this.getContentWidth();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef803) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("barlineWidth");
		baseArr.push("cautTimeWidth");
		baseArr.push("cautKeyWidth");
		baseArr.push("cautClefWidth");
		baseArr.push("contentWidth");
		baseArr.push("contentXZero");
		baseArr.push("leftContentMarginWidth");
		baseArr.push("timeWidth");
		baseArr.push("keyWidth");
		baseArr.push("clefWidth");
		baseArr.push("ackoladeWidth");
		baseArr.push("bar");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


