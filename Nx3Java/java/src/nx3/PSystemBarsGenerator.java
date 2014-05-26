package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PSystemBarsGenerator extends haxe.lang.HxObject
{
	static 
	{
		nx3.PSystemBarsGenerator.defaultClef = nx3.EClef.ClefF;
		nx3.PSystemBarsGenerator.defaultKey = nx3.EKey.Flat2;
		nx3.PSystemBarsGenerator.defaultTime = nx3.ETime.Time6_4;
	}
	public    PSystemBarsGenerator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PSystemBarsGenerator(haxe.root.Array<nx3.PBar> bars, java.lang.Object systemConfig, java.lang.Object prevBarAttributes, double breakSystemwidth, nx3.IBarWidthCalculator barWidthCalculator)
	{
		nx3.PSystemBarsGenerator.__hx_ctor_nx3_PSystemBarsGenerator(this, bars, systemConfig, prevBarAttributes, breakSystemwidth, barWidthCalculator);
	}
	
	
	public static   void __hx_ctor_nx3_PSystemBarsGenerator(nx3.PSystemBarsGenerator __temp_me138, haxe.root.Array<nx3.PBar> bars, java.lang.Object systemConfig, java.lang.Object prevBarAttributes, double breakSystemwidth, nx3.IBarWidthCalculator barWidthCalculator)
	{
		__temp_me138.bars = bars;
		__temp_me138.systemConfig = systemConfig;
		__temp_me138.prevBarAttributes = prevBarAttributes;
		__temp_me138.breakSystemwidth = breakSystemwidth;
		__temp_me138.system = new nx3.PSystem();
		__temp_me138.barWidthCalculator = barWidthCalculator;
	}
	
	
	public static  nx3.EClef defaultClef;
	
	public static  nx3.EKey defaultKey;
	
	public static  nx3.ETime defaultTime;
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PSystemBarsGenerator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PSystemBarsGenerator(((haxe.root.Array<nx3.PBar>) (arr.__get(0)) ), ((java.lang.Object) (arr.__get(1)) ), ((java.lang.Object) (arr.__get(2)) ), ((double) (haxe.lang.Runtime.toDouble(arr.__get(3))) ), ((nx3.IBarWidthCalculator) (arr.__get(4)) ));
	}
	
	
	public  haxe.root.Array<nx3.PBar> bars;
	
	public  java.lang.Object systemConfig;
	
	public  java.lang.Object prevBarAttributes;
	
	public  double breakSystemwidth;
	
	public  nx3.PSystem system;
	
	public  nx3.IBarWidthCalculator barWidthCalculator;
	
	public   nx3.PSystem getSystem()
	{
		this.system.systemBreakWidth = this.breakSystemwidth;
		boolean tryAnotherBar = true;
		while (tryAnotherBar)
		{
			nx3.PBar currentBar = this.bars.__get(0);
			nx3.PBarConfig currentBarConfig = new nx3.PBarConfig(((java.lang.Object) (null) ), ((java.lang.Object) (null) ), ((java.lang.Object) (null) ), ((java.lang.Object) (null) ), ((java.lang.Object) (null) ), ((java.lang.Object) (null) ));
			java.lang.Object currentBarAttributes = this.getBarAttributes(currentBar);
			if (( ! (( this.prevBarAttributes == null )) )) 
			{
				this.overrideActualAttributesFromPrevBarAttributes(currentBarAttributes, currentBar, this.prevBarAttributes);
			}
			
			this.overrideActualAttributesWithDefaultsIfStillNotSet(currentBarAttributes);
			if (( this.system.getSystembars().length == 0 )) 
			{
				this.adaptBarConfig(currentBar, currentBarConfig, this.prevBarAttributes, haxe.lang.Runtime.toBool(haxe.lang.Runtime.getField(this.systemConfig, "showFirstClef", true)), haxe.lang.Runtime.toBool(haxe.lang.Runtime.getField(this.systemConfig, "showFirstKey", true)), haxe.lang.Runtime.toBool(haxe.lang.Runtime.getField(this.systemConfig, "showFirstTime", true)));
			}
			 else 
			{
				this.adaptBarConfig(currentBar, currentBarConfig, this.prevBarAttributes, haxe.lang.Runtime.toBool(haxe.lang.Runtime.getField(this.systemConfig, "showFollowingClef", true)), haxe.lang.Runtime.toBool(haxe.lang.Runtime.getField(this.systemConfig, "showFollowingKey", true)), haxe.lang.Runtime.toBool(haxe.lang.Runtime.getField(this.systemConfig, "showFollowingTime", true)));
			}
			
			nx3.PSystembarMeasurements currentMeasurements = new nx3.PSystembarMeasurements(((nx3.PBar) (currentBar) )).init(currentBarAttributes, currentBarConfig, null);
			double testSystemWidth = ( this.system.width + currentMeasurements.getTotalWidth() );
			if (( testSystemWidth > this.breakSystemwidth )) 
			{
				this.takeCareOfLastBarCautions();
				return this.system;
			}
			
			this.system.width += currentMeasurements.getTotalWidth();
			this.system.getSystembars().push(new nx3.PSystemBar(((nx3.PBar) (currentBar) ), ((nx3.PBarConfig) (currentBarConfig) ), ((nx3.PSystembarMeasurements) (currentMeasurements) ), ((java.lang.Object) (currentBarAttributes) ), ((java.lang.Object) (null) )));
			this.bars.shift();
			this.prevBarAttributes = this.copyBarAttributes(currentBarAttributes);
			if (( this.bars.length < 1 )) 
			{
				tryAnotherBar = false;
			}
			
		}
		
		this.system.status = nx3.PSystemStatus.Ok;
		return this.system;
	}
	
	
	public   void takeCareOfLastBarCautions()
	{
		this.system.status = nx3.PSystemStatus.Ok;
		nx3.PSystemBar __temp_stmt778 = null;
		{
			haxe.root.Array<nx3.PSystemBar> array = this.system.getSystembars();
			__temp_stmt778 = array.__get(( array.length - 1 ));
		}
		
		nx3.PBar sysBar = __temp_stmt778.bar;
		nx3.PSystemBar __temp_stmt779 = null;
		{
			haxe.root.Array<nx3.PSystemBar> array1 = this.system.getSystembars();
			__temp_stmt779 = array1.__get(( array1.length - 1 ));
		}
		
		java.lang.Object sysBarAttributes = __temp_stmt779.actAttributes;
		nx3.PBar __temp_stmt780 = null;
		{
			haxe.root.Array<nx3.PBar> array2 = this.bars;
			__temp_stmt780 = array2.__get(( array2.length - 1 ));
		}
		
		if (( sysBar != __temp_stmt780 )) 
		{
			nx3.PBar nextBar = this.bars.__get(0);
			java.lang.Object nextBarAttributes = this.getBarAttributes(nextBar);
			boolean newClef = this.arrayBNullOrDiffers(((haxe.root.Array<nx3.EClef>) (haxe.lang.Runtime.getField(sysBarAttributes, "clefs", true)) ), ((haxe.root.Array<nx3.EClef>) (haxe.lang.Runtime.getField(nextBarAttributes, "clefs", true)) ));
			boolean newKey = this.arrayBNullOrDiffers(((haxe.root.Array<nx3.EKey>) (haxe.lang.Runtime.getField(sysBarAttributes, "keys", true)) ), ((haxe.root.Array<nx3.EKey>) (haxe.lang.Runtime.getField(nextBarAttributes, "keys", true)) ));
			boolean newTime = this.nullOrDiffers(((nx3.ETime) (haxe.lang.Runtime.getField(sysBarAttributes, "time", true)) ), ((nx3.ETime) (haxe.lang.Runtime.getField(nextBarAttributes, "time", true)) ));
			if (( ( newClef || newKey ) || newTime )) 
			{
				java.lang.Object sysBarCautAttributes = this.copyAndRemoveRedundantAttributes(sysBarAttributes, nextBarAttributes);
				nx3.PSystemBar __temp_stmt781 = null;
				{
					haxe.root.Array<nx3.PSystemBar> array3 = this.system.getSystembars();
					__temp_stmt781 = array3.__get(( array3.length - 1 ));
				}
				
				nx3.PBarConfig sysBarConfig = __temp_stmt781.barConfig;
				nx3.PSystemBar __temp_stmt783 = null;
				{
					haxe.root.Array<nx3.PSystemBar> array4 = this.system.getSystembars();
					__temp_stmt783 = array4.__get(( array4.length - 1 ));
				}
				
				nx3.PSystembarMeasurements __temp_stmt782 = __temp_stmt783.getBarMeasurements();
				double sysBarWidth = __temp_stmt782.getTotalWidth();
				double systemWidthWithoutLastBar = ( this.system.width - sysBarWidth );
				nx3.PBarConfig sysBarConfigWithCautions = new nx3.PBarConfig(((java.lang.Object) (sysBarConfig.showClef) ), ((java.lang.Object) (sysBarConfig.showKey) ), ((java.lang.Object) (sysBarConfig.showTime) ), ((java.lang.Object) (null) ), ((java.lang.Object) (null) ), ((java.lang.Object) (null) ));
				if (newClef) 
				{
					sysBarConfigWithCautions.showCautClef = true;
				}
				
				if (newKey) 
				{
					sysBarConfigWithCautions.showCautKey = true;
				}
				
				if (newTime) 
				{
					sysBarConfigWithCautions.showCautTime = true;
				}
				
				nx3.PSystembarMeasurements measurementsWithCautions = new nx3.PSystembarMeasurements(((nx3.PBar) (sysBar) )).init(sysBarAttributes, sysBarConfigWithCautions, sysBarCautAttributes);
				if (( ( systemWidthWithoutLastBar + measurementsWithCautions.getTotalWidth() ) <= this.breakSystemwidth )) 
				{
					nx3.PSystemBar __temp_stmt784 = null;
					{
						haxe.root.Array<nx3.PSystemBar> array5 = this.system.getSystembars();
						__temp_stmt784 = array5.__get(( array5.length - 1 ));
					}
					
					__temp_stmt784.caAttributes = sysBarCautAttributes;
					nx3.PSystemBar __temp_stmt785 = null;
					{
						haxe.root.Array<nx3.PSystemBar> array6 = this.system.getSystembars();
						__temp_stmt785 = array6.__get(( array6.length - 1 ));
					}
					
					__temp_stmt785.barConfig = sysBarConfigWithCautions;
					double __temp_stmt786 = ( this.system.getWidth() - sysBarWidth );
					nx3.PSystemBar __temp_stmt789 = null;
					{
						haxe.root.Array<nx3.PSystemBar> array7 = this.system.getSystembars();
						__temp_stmt789 = array7.__get(( array7.length - 1 ));
					}
					
					nx3.PSystembarMeasurements __temp_stmt788 = __temp_stmt789.getBarMeasurements();
					double __temp_stmt787 = __temp_stmt788.getTotalWidth();
					this.system.width = ( __temp_stmt786 + __temp_stmt787 );
				}
				 else 
				{
					this.system.status = nx3.PSystemStatus.Problem(101, "Last bar fits without caution attributes but not with them");
					if (( this.system.getSystembars().length == 1 )) 
					{
						this.system.status = nx3.PSystemStatus.Problem(102, "First bar doesn\'t fit when adding required cational attributes");
						return ;
					}
					
					this.system.getSystembars().pop();
					this.bars.unshift(sysBar);
					this.system.width = ( this.system.width - sysBarWidth );
					this.system.status = nx3.PSystemStatus.Ok;
				}
				
			}
			
		}
		
	}
	
	
	public   java.lang.Object copyAndRemoveRedundantAttributes(java.lang.Object sysBarAttributes, java.lang.Object nextBarAttributes)
	{
		java.lang.Object result = this.copyBarAttributes(nextBarAttributes);
		{
			int _g1 = 0;
			int _g = ((haxe.root.Array<nx3.EClef>) (haxe.lang.Runtime.getField(sysBarAttributes, "clefs", true)) ).length;
			while (( _g1 < _g ))
			{
				int i = _g1++;
				if (( ((haxe.root.Array<nx3.EClef>) (haxe.lang.Runtime.getField(result, "clefs", true)) ).__get(i) == ((haxe.root.Array<nx3.EClef>) (haxe.lang.Runtime.getField(sysBarAttributes, "clefs", true)) ).__get(i) )) 
				{
					((haxe.root.Array<nx3.EClef>) (haxe.lang.Runtime.getField(result, "clefs", true)) ).__set(i, null);
				}
				
			}
			
		}
		
		{
			int _g11 = 0;
			int _g2 = ((haxe.root.Array<nx3.EKey>) (haxe.lang.Runtime.getField(sysBarAttributes, "keys", true)) ).length;
			while (( _g11 < _g2 ))
			{
				int i1 = _g11++;
				if (( ((haxe.root.Array<nx3.EKey>) (haxe.lang.Runtime.getField(result, "keys", true)) ).__get(i1) == ((haxe.root.Array<nx3.EKey>) (haxe.lang.Runtime.getField(sysBarAttributes, "keys", true)) ).__get(i1) )) 
				{
					((haxe.root.Array<nx3.EKey>) (haxe.lang.Runtime.getField(result, "keys", true)) ).__set(i1, null);
				}
				
			}
			
		}
		
		if (( ((nx3.ETime) (haxe.lang.Runtime.getField(result, "time", true)) ) == ((nx3.ETime) (haxe.lang.Runtime.getField(sysBarAttributes, "time", true)) ) )) 
		{
			haxe.lang.Runtime.setField(result, "time", null);
		}
		
		return result;
	}
	
	
	public   void adaptBarConfig(nx3.PBar bar, nx3.PBarConfig barConfig, java.lang.Object prevBarAttributes, boolean showClef, boolean showKey, boolean showTime)
	{
		if (( showClef == true )) 
		{
			showClef = true;
		}
		 else 
		{
			showClef = false;
		}
		
		if (( showKey == true )) 
		{
			showKey = true;
		}
		 else 
		{
			showKey = false;
		}
		
		if (( showTime == true )) 
		{
			showTime = true;
		}
		 else 
		{
			showTime = false;
		}
		
		java.lang.Object barAttributes = this.getBarAttributes(bar);
		{
			nx3.EDisplayALN _g = bar.get_displayClefs();
			switch (haxe.root.Type.enumIndex(_g))
			{
				case 2:
				{
					barConfig.showClef = false;
					break;
				}
				
				
				case 0:
				{
					barConfig.showClef = true;
					break;
				}
				
				
				default:
				{
					barConfig.showClef = showClef;
					if (( ( showClef == false ) && ( ! (( prevBarAttributes == null )) ) )) 
					{
						int _g2 = 0;
						int _g1 = ((haxe.root.Array<nx3.EClef>) (haxe.lang.Runtime.getField(prevBarAttributes, "clefs", true)) ).length;
						while (( _g2 < _g1 ))
						{
							int i = _g2++;
							if (( bar.get_clefs().__get(i) == null )) 
							{
								continue;
							}
							
							if (( bar.get_clefs().__get(i) == ((haxe.root.Array<nx3.EClef>) (haxe.lang.Runtime.getField(prevBarAttributes, "clefs", true)) ).__get(i) )) 
							{
								continue;
							}
							
							barConfig.showClef = true;
							break;
						}
						
					}
					
					break;
				}
				
			}
			
		}
		
		{
			nx3.EDisplayALN _g3 = bar.get_displayKeys();
			switch (haxe.root.Type.enumIndex(_g3))
			{
				case 2:
				{
					barConfig.showKey = false;
					break;
				}
				
				
				case 0:
				{
					barConfig.showKey = true;
					break;
				}
				
				
				default:
				{
					barConfig.showKey = showKey;
					if (( ( showKey == false ) && ( ! (( prevBarAttributes == null )) ) )) 
					{
						int _g21 = 0;
						int _g11 = ((haxe.root.Array<nx3.EKey>) (haxe.lang.Runtime.getField(prevBarAttributes, "keys", true)) ).length;
						while (( _g21 < _g11 ))
						{
							int i1 = _g21++;
							if (( bar.get_keys().__get(i1) == null )) 
							{
								continue;
							}
							
							if (( bar.get_keys().__get(i1) == ((haxe.root.Array<nx3.EKey>) (haxe.lang.Runtime.getField(prevBarAttributes, "keys", true)) ).__get(i1) )) 
							{
								continue;
							}
							
							barConfig.showKey = true;
							break;
						}
						
					}
					
					break;
				}
				
			}
			
		}
		
		{
			nx3.EDisplayALN _g4 = bar.get_displayTime();
			switch (haxe.root.Type.enumIndex(_g4))
			{
				case 2:
				{
					barConfig.showTime = false;
					break;
				}
				
				
				case 0:
				{
					barConfig.showTime = true;
					break;
				}
				
				
				default:
				{
					barConfig.showTime = showTime;
					if (( ( showTime == false ) && ( ! (( prevBarAttributes == null )) ) )) 
					{
						if (( bar.get_time() == null )) 
						{
							{
							}
							
						}
						 else 
						{
							if (( bar.get_time() == ((nx3.ETime) (haxe.lang.Runtime.getField(prevBarAttributes, "time", true)) ) )) 
							{
								{
								}
								
							}
							 else 
							{
								barConfig.showTime = true;
							}
							
						}
						
					}
					
					break;
				}
				
			}
			
		}
		
	}
	
	
	public   java.lang.Object copyBarAttributes(java.lang.Object barAttributes)
	{
		java.lang.Object result = null;
		{
			haxe.root.Array<nx3.EClef> __temp_odecl790 = new haxe.root.Array<nx3.EClef>();
			haxe.root.Array<nx3.EKey> __temp_odecl791 = new haxe.root.Array<nx3.EKey>();
			result = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"clefs", "keys", "time"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{__temp_odecl790, __temp_odecl791, null}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
		}
		
		haxe.lang.Runtime.setField(result, "clefs", ((haxe.root.Array<nx3.EClef>) (haxe.lang.Runtime.getField(barAttributes, "clefs", true)) ).copy());
		haxe.lang.Runtime.setField(result, "keys", ((haxe.root.Array<nx3.EKey>) (haxe.lang.Runtime.getField(barAttributes, "keys", true)) ).copy());
		haxe.lang.Runtime.setField(result, "time", ((nx3.ETime) (haxe.lang.Runtime.getField(barAttributes, "time", true)) ));
		return result;
	}
	
	
	public   void overrideActualAttributesWithDefaultsIfStillNotSet(java.lang.Object currentBarAttributes)
	{
		{
			int _g1 = 0;
			int _g = ((haxe.root.Array<nx3.EClef>) (haxe.lang.Runtime.getField(currentBarAttributes, "clefs", true)) ).length;
			while (( _g1 < _g ))
			{
				int i = _g1++;
				if (( ((haxe.root.Array<nx3.EClef>) (haxe.lang.Runtime.getField(currentBarAttributes, "clefs", true)) ).__get(i) == null )) 
				{
					((haxe.root.Array<nx3.EClef>) (haxe.lang.Runtime.getField(currentBarAttributes, "clefs", true)) ).__set(i, nx3.PSystemBarsGenerator.defaultClef);
				}
				
			}
			
		}
		
		{
			int _g11 = 0;
			int _g2 = ((haxe.root.Array<nx3.EKey>) (haxe.lang.Runtime.getField(currentBarAttributes, "keys", true)) ).length;
			while (( _g11 < _g2 ))
			{
				int i1 = _g11++;
				if (( ((haxe.root.Array<nx3.EKey>) (haxe.lang.Runtime.getField(currentBarAttributes, "keys", true)) ).__get(i1) == null )) 
				{
					((haxe.root.Array<nx3.EKey>) (haxe.lang.Runtime.getField(currentBarAttributes, "keys", true)) ).__set(i1, nx3.PSystemBarsGenerator.defaultKey);
				}
				
			}
			
		}
		
		if (( ((nx3.ETime) (haxe.lang.Runtime.getField(currentBarAttributes, "time", true)) ) == null )) 
		{
			haxe.lang.Runtime.setField(currentBarAttributes, "time", nx3.PSystemBarsGenerator.defaultTime);
		}
		
	}
	
	
	public   void overrideActualAttributesFromPrevBarAttributes(java.lang.Object currentBarAttributes, nx3.PBar currentBar, java.lang.Object prevBarAttributes)
	{
		if ( ! (this.compareBarAttributesValidity(currentBarAttributes, prevBarAttributes)) ) 
		{
			throw haxe.lang.HaxeException.wrap("Attributes non compatible");
		}
		
		{
			int _g1 = 0;
			int _g = currentBar.get_clefs().length;
			while (( _g1 < _g ))
			{
				int i = _g1++;
				if (( ( currentBar.get_clefs().__get(i) == null ) && ( ((haxe.root.Array<nx3.EClef>) (haxe.lang.Runtime.getField(prevBarAttributes, "clefs", true)) ).__get(i) != null ) )) 
				{
					((haxe.root.Array<nx3.EClef>) (haxe.lang.Runtime.getField(currentBarAttributes, "clefs", true)) ).__set(i, ((haxe.root.Array<nx3.EClef>) (haxe.lang.Runtime.getField(prevBarAttributes, "clefs", true)) ).__get(i));
				}
				
			}
			
		}
		
		{
			int _g11 = 0;
			int _g2 = currentBar.get_keys().length;
			while (( _g11 < _g2 ))
			{
				int i1 = _g11++;
				if (( ( currentBar.get_keys().__get(i1) == null ) && ( ((haxe.root.Array<nx3.EKey>) (haxe.lang.Runtime.getField(prevBarAttributes, "keys", true)) ).__get(i1) != null ) )) 
				{
					((haxe.root.Array<nx3.EKey>) (haxe.lang.Runtime.getField(currentBarAttributes, "keys", true)) ).__set(i1, ((haxe.root.Array<nx3.EKey>) (haxe.lang.Runtime.getField(prevBarAttributes, "keys", true)) ).__get(i1));
				}
				
			}
			
		}
		
		if (( ( currentBar.get_time() == null ) && ( ((nx3.ETime) (haxe.lang.Runtime.getField(prevBarAttributes, "time", true)) ) != null ) )) 
		{
			haxe.lang.Runtime.setField(currentBarAttributes, "time", ((nx3.ETime) (haxe.lang.Runtime.getField(prevBarAttributes, "time", true)) ));
		}
		
	}
	
	
	public   java.lang.Object getBarAttributes(nx3.PBar bar)
	{
		nx3.ETime time = null;
		{
			haxe.root.Array<nx3.ETime> array = new haxe.root.Array<nx3.ETime>(new nx3.ETime[]{bar.get_time()}).copy();
			time = array.__get(0);
		}
		
		java.lang.Object result = null;
		{
			haxe.root.Array<nx3.EClef> __temp_odecl792 = bar.get_clefs().copy();
			haxe.root.Array<nx3.EKey> __temp_odecl793 = bar.get_keys().copy();
			result = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"clefs", "keys", "time"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{__temp_odecl792, __temp_odecl793, time}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
		}
		
		return result;
	}
	
	
	public   boolean compareBarAttributesValidity(java.lang.Object barAttributesA, java.lang.Object barAttributesB)
	{
		if (( ((haxe.root.Array<nx3.EClef>) (haxe.lang.Runtime.getField(barAttributesA, "clefs", true)) ).length != ((haxe.root.Array<nx3.EClef>) (haxe.lang.Runtime.getField(barAttributesB, "clefs", true)) ).length )) 
		{
			return false;
		}
		
		if (( ((haxe.root.Array<nx3.EKey>) (haxe.lang.Runtime.getField(barAttributesA, "keys", true)) ).length != ((haxe.root.Array<nx3.EKey>) (haxe.lang.Runtime.getField(barAttributesB, "keys", true)) ).length )) 
		{
			return false;
		}
		
		return true;
	}
	
	
	public  <T> boolean arrayBNullOrDiffers(haxe.root.Array<T> itemA, haxe.root.Array<T> itemB)
	{
		if (cx.ArrayTools.allNull(itemB)) 
		{
			return false;
		}
		
		{
			int _g1 = 0;
			int _g = itemA.length;
			while (( _g1 < _g ))
			{
				int i = _g1++;
				if (( ( ! (( itemB.__get(i) == null )) ) && ( ! (haxe.lang.Runtime.eq(itemB.__get(i), itemA.__get(i))) ) )) 
				{
					return true;
				}
				
			}
			
		}
		
		return false;
	}
	
	
	public  <T> boolean nullOrDiffers(T itemA, T itemB)
	{
		if (( itemB == null )) 
		{
			return false;
		}
		
		return ( ! (haxe.lang.Runtime.eq(itemB, itemA)) );
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef794 = true;
			switch (field.hashCode())
			{
				case 438880888:
				{
					if (field.equals("breakSystemwidth")) 
					{
						__temp_executeDef794 = false;
						this.breakSystemwidth = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1150795183:
				{
					if (field.equals("systemConfig")) 
					{
						__temp_executeDef794 = false;
						this.systemConfig = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1845477801:
				{
					if (field.equals("prevBarAttributes")) 
					{
						__temp_executeDef794 = false;
						this.prevBarAttributes = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef794) 
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
			boolean __temp_executeDef795 = true;
			switch (field.hashCode())
			{
				case -935417643:
				{
					if (field.equals("barWidthCalculator")) 
					{
						__temp_executeDef795 = false;
						this.barWidthCalculator = ((nx3.IBarWidthCalculator) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3016384:
				{
					if (field.equals("bars")) 
					{
						__temp_executeDef795 = false;
						this.bars = ((haxe.root.Array<nx3.PBar>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -887328209:
				{
					if (field.equals("system")) 
					{
						__temp_executeDef795 = false;
						this.system = ((nx3.PSystem) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1150795183:
				{
					if (field.equals("systemConfig")) 
					{
						__temp_executeDef795 = false;
						this.systemConfig = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 438880888:
				{
					if (field.equals("breakSystemwidth")) 
					{
						__temp_executeDef795 = false;
						this.breakSystemwidth = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -1845477801:
				{
					if (field.equals("prevBarAttributes")) 
					{
						__temp_executeDef795 = false;
						this.prevBarAttributes = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef795) 
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
			boolean __temp_executeDef796 = true;
			switch (field.hashCode())
			{
				case -1451582953:
				{
					if (field.equals("nullOrDiffers")) 
					{
						__temp_executeDef796 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("nullOrDiffers"))) );
					}
					
					break;
				}
				
				
				case 3016384:
				{
					if (field.equals("bars")) 
					{
						__temp_executeDef796 = false;
						return this.bars;
					}
					
					break;
				}
				
				
				case 1735174030:
				{
					if (field.equals("arrayBNullOrDiffers")) 
					{
						__temp_executeDef796 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("arrayBNullOrDiffers"))) );
					}
					
					break;
				}
				
				
				case -1150795183:
				{
					if (field.equals("systemConfig")) 
					{
						__temp_executeDef796 = false;
						return this.systemConfig;
					}
					
					break;
				}
				
				
				case 357890871:
				{
					if (field.equals("compareBarAttributesValidity")) 
					{
						__temp_executeDef796 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("compareBarAttributesValidity"))) );
					}
					
					break;
				}
				
				
				case -1845477801:
				{
					if (field.equals("prevBarAttributes")) 
					{
						__temp_executeDef796 = false;
						return this.prevBarAttributes;
					}
					
					break;
				}
				
				
				case -760282604:
				{
					if (field.equals("getBarAttributes")) 
					{
						__temp_executeDef796 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBarAttributes"))) );
					}
					
					break;
				}
				
				
				case 438880888:
				{
					if (field.equals("breakSystemwidth")) 
					{
						__temp_executeDef796 = false;
						return this.breakSystemwidth;
					}
					
					break;
				}
				
				
				case -1842552100:
				{
					if (field.equals("overrideActualAttributesFromPrevBarAttributes")) 
					{
						__temp_executeDef796 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("overrideActualAttributesFromPrevBarAttributes"))) );
					}
					
					break;
				}
				
				
				case -887328209:
				{
					if (field.equals("system")) 
					{
						__temp_executeDef796 = false;
						return this.system;
					}
					
					break;
				}
				
				
				case 1379649585:
				{
					if (field.equals("overrideActualAttributesWithDefaultsIfStillNotSet")) 
					{
						__temp_executeDef796 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("overrideActualAttributesWithDefaultsIfStillNotSet"))) );
					}
					
					break;
				}
				
				
				case -935417643:
				{
					if (field.equals("barWidthCalculator")) 
					{
						__temp_executeDef796 = false;
						return this.barWidthCalculator;
					}
					
					break;
				}
				
				
				case 1454459989:
				{
					if (field.equals("copyBarAttributes")) 
					{
						__temp_executeDef796 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("copyBarAttributes"))) );
					}
					
					break;
				}
				
				
				case 808686885:
				{
					if (field.equals("getSystem")) 
					{
						__temp_executeDef796 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getSystem"))) );
					}
					
					break;
				}
				
				
				case 486441011:
				{
					if (field.equals("adaptBarConfig")) 
					{
						__temp_executeDef796 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("adaptBarConfig"))) );
					}
					
					break;
				}
				
				
				case 1450919670:
				{
					if (field.equals("takeCareOfLastBarCautions")) 
					{
						__temp_executeDef796 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("takeCareOfLastBarCautions"))) );
					}
					
					break;
				}
				
				
				case -2132200706:
				{
					if (field.equals("copyAndRemoveRedundantAttributes")) 
					{
						__temp_executeDef796 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("copyAndRemoveRedundantAttributes"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef796) 
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
			boolean __temp_executeDef797 = true;
			switch (field.hashCode())
			{
				case 438880888:
				{
					if (field.equals("breakSystemwidth")) 
					{
						__temp_executeDef797 = false;
						return this.breakSystemwidth;
					}
					
					break;
				}
				
				
				case -1150795183:
				{
					if (field.equals("systemConfig")) 
					{
						__temp_executeDef797 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.systemConfig)) );
					}
					
					break;
				}
				
				
				case -1845477801:
				{
					if (field.equals("prevBarAttributes")) 
					{
						__temp_executeDef797 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.prevBarAttributes)) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef797) 
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
			boolean __temp_executeDef798 = true;
			switch (field.hashCode())
			{
				case -1451582953:
				{
					if (field.equals("nullOrDiffers")) 
					{
						__temp_executeDef798 = false;
						return this.nullOrDiffers(dynargs.__get(0), dynargs.__get(1));
					}
					
					break;
				}
				
				
				case 808686885:
				{
					if (field.equals("getSystem")) 
					{
						__temp_executeDef798 = false;
						return this.getSystem();
					}
					
					break;
				}
				
				
				case 1735174030:
				{
					if (field.equals("arrayBNullOrDiffers")) 
					{
						__temp_executeDef798 = false;
						return this.arrayBNullOrDiffers(((haxe.root.Array<java.lang.Object>) (dynargs.__get(0)) ), ((haxe.root.Array<java.lang.Object>) (dynargs.__get(1)) ));
					}
					
					break;
				}
				
				
				case 1450919670:
				{
					if (field.equals("takeCareOfLastBarCautions")) 
					{
						__temp_executeDef798 = false;
						this.takeCareOfLastBarCautions();
					}
					
					break;
				}
				
				
				case 357890871:
				{
					if (field.equals("compareBarAttributesValidity")) 
					{
						__temp_executeDef798 = false;
						return this.compareBarAttributesValidity(dynargs.__get(0), dynargs.__get(1));
					}
					
					break;
				}
				
				
				case -2132200706:
				{
					if (field.equals("copyAndRemoveRedundantAttributes")) 
					{
						__temp_executeDef798 = false;
						return this.copyAndRemoveRedundantAttributes(dynargs.__get(0), dynargs.__get(1));
					}
					
					break;
				}
				
				
				case -760282604:
				{
					if (field.equals("getBarAttributes")) 
					{
						__temp_executeDef798 = false;
						return this.getBarAttributes(((nx3.PBar) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 486441011:
				{
					if (field.equals("adaptBarConfig")) 
					{
						__temp_executeDef798 = false;
						this.adaptBarConfig(((nx3.PBar) (dynargs.__get(0)) ), ((nx3.PBarConfig) (dynargs.__get(1)) ), dynargs.__get(2), haxe.lang.Runtime.toBool(dynargs.__get(3)), haxe.lang.Runtime.toBool(dynargs.__get(4)), haxe.lang.Runtime.toBool(dynargs.__get(5)));
					}
					
					break;
				}
				
				
				case -1842552100:
				{
					if (field.equals("overrideActualAttributesFromPrevBarAttributes")) 
					{
						__temp_executeDef798 = false;
						this.overrideActualAttributesFromPrevBarAttributes(dynargs.__get(0), ((nx3.PBar) (dynargs.__get(1)) ), dynargs.__get(2));
					}
					
					break;
				}
				
				
				case 1454459989:
				{
					if (field.equals("copyBarAttributes")) 
					{
						__temp_executeDef798 = false;
						return this.copyBarAttributes(dynargs.__get(0));
					}
					
					break;
				}
				
				
				case 1379649585:
				{
					if (field.equals("overrideActualAttributesWithDefaultsIfStillNotSet")) 
					{
						__temp_executeDef798 = false;
						this.overrideActualAttributesWithDefaultsIfStillNotSet(dynargs.__get(0));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef798) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("barWidthCalculator");
		baseArr.push("system");
		baseArr.push("breakSystemwidth");
		baseArr.push("prevBarAttributes");
		baseArr.push("systemConfig");
		baseArr.push("bars");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


