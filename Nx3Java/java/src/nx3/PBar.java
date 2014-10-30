package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PBar extends haxe.lang.HxObject
{
	public    PBar(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PBar(nx3.NBar nbar)
	{
		nx3.PBar.__hx_ctor_nx3_PBar(this, nbar);
	}
	
	
	public static   void __hx_ctor_nx3_PBar(nx3.PBar __temp_me79, nx3.NBar nbar)
	{
		__temp_me79.stretchwidth = ((double) (0) );
		__temp_me79._keys = null;
		__temp_me79._clefs = null;
		__temp_me79.nbar = nbar;
		__temp_me79.value = 0;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PBar(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PBar(((nx3.NBar) (arr.__get(0)) ));
	}
	
	
	public  nx3.NBar nbar;
	
	public   java.lang.Object iterator()
	{
		{
			haxe.root.Array<nx3.PPart> _this = this.getParts();
			return new _Array.ArrayIterator<nx3.PPart>(((haxe.root.Array<nx3.PPart>) (_this) ));
		}
		
	}
	
	
	public  int length;
	
	public   int get_length()
	{
		return this.getParts().length;
	}
	
	
	public  nx3.PScore score;
	
	public   nx3.PScore getScore()
	{
		return this.score;
	}
	
	
	public  nx3.PSystemBar systembar;
	
	public   nx3.PSystemBar getSystembar()
	{
		return this.systembar;
	}
	
	
	public  haxe.root.Array<nx3.EClef> clefs;
	
	public  haxe.root.Array<nx3.EKey> keys;
	
	public  nx3.ETime time;
	
	public  haxe.root.Array<nx3.EClef> _clefs;
	
	public   haxe.root.Array<nx3.EClef> get_clefs()
	{
		if (( this._clefs != null )) 
		{
			return this._clefs;
		}
		
		this._clefs = new haxe.root.Array<nx3.EClef>();
		{
			int _g = 0;
			haxe.root.Array<nx3.PPart> _g1 = this.getParts();
			while (( _g < _g1.length ))
			{
				nx3.PPart vpart = _g1.__get(_g);
				 ++ _g;
				this._clefs.push(vpart.npart.clef);
			}
			
		}
		
		return this._clefs;
	}
	
	
	public  haxe.root.Array<nx3.EKey> _keys;
	
	public   haxe.root.Array<nx3.EKey> get_keys()
	{
		if (( this._keys != null )) 
		{
			return this._keys;
		}
		
		this._keys = new haxe.root.Array<nx3.EKey>();
		{
			int _g = 0;
			haxe.root.Array<nx3.PPart> _g1 = this.getParts();
			while (( _g < _g1.length ))
			{
				nx3.PPart vpart = _g1.__get(_g);
				 ++ _g;
				this._keys.push(vpart.npart.key);
			}
			
		}
		
		return this._keys;
	}
	
	
	public   nx3.ETime get_time()
	{
		return this.nbar.time;
	}
	
	
	public  nx3.EDisplayALN displayClefs;
	
	public  nx3.EDisplayALN displayKeys;
	
	public  nx3.EDisplayALN displayTime;
	
	public   nx3.EDisplayALN get_displayClefs()
	{
		nx3.EDisplayALN result = nx3.EDisplayALN.Never;
		{
			int _g = 0;
			haxe.root.Array<nx3.PPart> _g1 = this.getParts();
			while (( _g < _g1.length ))
			{
				nx3.PPart vpart = _g1.__get(_g);
				 ++ _g;
				if (( vpart.npart.clefDisplay == null )) 
				{
					result = nx3.EDisplayALN.Layout;
				}
				
				if (( vpart.npart.clefDisplay == nx3.EDisplayALN.Layout )) 
				{
					result = nx3.EDisplayALN.Layout;
				}
				
				if (( vpart.npart.clefDisplay == nx3.EDisplayALN.Always )) 
				{
					result = nx3.EDisplayALN.Always;
					break;
				}
				
			}
			
		}
		
		return result;
	}
	
	
	public   nx3.EDisplayALN get_displayKeys()
	{
		nx3.EDisplayALN result = nx3.EDisplayALN.Never;
		{
			int _g = 0;
			haxe.root.Array<nx3.PPart> _g1 = this.getParts();
			while (( _g < _g1.length ))
			{
				nx3.PPart vpart = _g1.__get(_g);
				 ++ _g;
				if (( vpart.npart.keyDisplay == null )) 
				{
					result = nx3.EDisplayALN.Layout;
				}
				
				if (( vpart.npart.keyDisplay == nx3.EDisplayALN.Layout )) 
				{
					result = nx3.EDisplayALN.Layout;
				}
				
				if (( vpart.npart.keyDisplay == nx3.EDisplayALN.Always )) 
				{
					result = nx3.EDisplayALN.Always;
					break;
				}
				
			}
			
		}
		
		return result;
	}
	
	
	public   nx3.EDisplayALN get_displayTime()
	{
		nx3.EDisplayALN result = null;
		if (( this.nbar.timeDisplay != null )) 
		{
			result = this.nbar.timeDisplay;
		}
		 else 
		{
			result = nx3.EDisplayALN.Layout;
		}
		
		return this.nbar.timeDisplay;
	}
	
	
	public  haxe.root.Array<nx3.PPart> parts;
	
	public   haxe.root.Array<nx3.PPart> getParts()
	{
		if (( this.parts != null )) 
		{
			return this.parts;
		}
		
		this.parts = new haxe.root.Array<nx3.PPart>(new nx3.PPart[]{});
		{
			int _g = 0;
			haxe.root.Array<nx3.NPart> _g1 = this.nbar.nparts;
			while (( _g < _g1.length ))
			{
				nx3.NPart npart = _g1.__get(_g);
				 ++ _g;
				nx3.PPart ppart = new nx3.PPart(((nx3.NPart) (npart) ));
				ppart.bar = this;
				this.parts.push(ppart);
			}
			
		}
		
		return this.parts;
	}
	
	
	public   nx3.PPart getPart(int idx)
	{
		if (( ( idx < 0 ) || ( idx > this.getParts().length ) )) 
		{
			return null;
		}
		 else 
		{
			return this.getParts().__get(idx);
		}
		
	}
	
	
	public  haxe.root.Array<nx3.PColumn> columns;
	
	public   haxe.root.Array<nx3.PColumn> getColumns()
	{
		if (( this.columns != null )) 
		{
			return this.columns;
		}
		
		nx3.PColumnsGenerator generator = new nx3.PColumnsGenerator(((nx3.PBar) (this) ));
		this.columns = generator.getColumns();
		this.calculateMDistances();
		return this.columns;
	}
	
	
	public   int getIndex()
	{
		return this.getScore().getBars().indexOf(this, null);
	}
	
	
	public   void calculateMDistances()
	{
		if (( this.columns == null )) 
		{
			this.getColumns();
		}
		
		new nx3.PColumnsDistancesCalculator(((nx3.PBar) (this) )).calculate();
	}
	
	
	public   void calculateAPositions()
	{
		new nx3.PColumnsAllotmentCalculator(((nx3.PBar) (this) )).calculate(null);
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
			haxe.root.Array<nx3.PPart> _g1 = this.getParts();
			while (( _g < _g1.length ))
			{
				nx3.PPart part = _g1.__get(_g);
				 ++ _g;
				{
					double x = java.lang.Math.max(((double) (this.value) ), ((double) (part.getValue()) ));
					this.value = ((int) (x) );
				}
				
			}
			
		}
		
		return this.value;
	}
	
	
	public  java.lang.Object contentwidth;
	
	public   double getContentwidth()
	{
		if (( ! (( this.contentwidth == null )) )) 
		{
			return ((double) (haxe.lang.Runtime.toDouble(this.contentwidth)) );
		}
		
		nx3.PColumn lastcolumn = null;
		{
			haxe.root.Array<nx3.PColumn> array = this.getColumns();
			lastcolumn = array.__get(( array.length - 1 ));
		}
		
		this.contentwidth = ( lastcolumn.getAPostion() + java.lang.Math.max(lastcolumn.getADistance(), lastcolumn.getRightX()) );
		return ((double) (haxe.lang.Runtime.toDouble(this.contentwidth)) );
	}
	
	
	public  java.lang.Object contentx;
	
	public   double getContentXZero()
	{
		nx3.PColumn firstcolumn = null;
		{
			haxe.root.Array<nx3.PColumn> array = this.getColumns();
			firstcolumn = array.__get(0);
		}
		
		this.contentx =  - (firstcolumn.getLeftX()) ;
		return ((double) (haxe.lang.Runtime.toDouble(this.contentx)) );
	}
	
	
	public  double stretchwidth;
	
	public  java.lang.Object allottedDistanceSum;
	
	public   double getAllottedDistanceSum()
	{
		if (( ! (( this.allottedDistanceSum == null )) )) 
		{
			return ((double) (haxe.lang.Runtime.toDouble(this.allottedDistanceSum)) );
		}
		
		this.getContentwidth();
		return ((double) (haxe.lang.Runtime.toDouble(this.allottedDistanceSum)) );
	}
	
	
	public   double getStretchWidth()
	{
		return this.stretchwidth;
	}
	
	
	public  haxe.root.Array<java.lang.Object> tieconnections;
	
	public   haxe.root.Array<java.lang.Object> getTieConnections()
	{
		if (( this.tieconnections != null )) 
		{
			return this.tieconnections;
		}
		
		this.tieconnections = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		nx3.PBar nextBar = null;
		{
			haxe.root.Array<nx3.PBar> a = this.score.getBars();
			int idx = ( this.getIndex() + 1 );
			if (( ( idx < 0 ) || ( idx > ( a.length - 1 ) ) )) 
			{
				nextBar = null;
			}
			 else 
			{
				nextBar = a.__get(idx);
			}
			
		}
		
		if (( nextBar == null )) 
		{
			return this.tieconnections;
		}
		
		{
			int _g = 0;
			haxe.root.Array<nx3.PPart> _g1 = this.getParts();
			while (( _g < _g1.length ))
			{
				nx3.PPart part = _g1.__get(_g);
				 ++ _g;
				nx3.PPart nextPart = null;
				{
					haxe.root.Array<nx3.PPart> a1 = nextBar.getParts();
					int idx1 = part.getIndex();
					if (( ( idx1 < 0 ) || ( idx1 > ( a1.length - 1 ) ) )) 
					{
						nextPart = null;
					}
					 else 
					{
						nextPart = a1.__get(idx1);
					}
					
				}
				
				{
					int _g2 = 0;
					haxe.root.Array<nx3.PVoice> _g3 = part.getVoices();
					while (( _g2 < _g3.length ))
					{
						nx3.PVoice voice = _g3.__get(_g2);
						 ++ _g2;
						nx3.PNote lastnote = null;
						{
							haxe.root.Array<nx3.PNote> array = voice.getNotes();
							lastnote = array.__get(( array.length - 1 ));
						}
						
						if (( ! (haxe.lang.Runtime.toBool(lastnote.getHasTie())) )) 
						{
							continue;
						}
						
						{
							int _g4 = 0;
							haxe.root.Array<nx3.NHead> _g5 = lastnote.nnote.get_nheads();
							while (( _g4 < _g5.length ))
							{
								nx3.NHead nhead = _g5.__get(_g4);
								 ++ _g4;
								if (( nhead.tie != null )) 
								{
									int level = nhead.level;
									nx3.PPart nextPart1 = null;
									{
										haxe.root.Array<nx3.PPart> a2 = nextBar.getParts();
										int idx2 = part.getIndex();
										if (( ( idx2 < 0 ) || ( idx2 > ( a2.length - 1 ) ) )) 
										{
											nextPart1 = null;
										}
										 else 
										{
											nextPart1 = a2.__get(idx2);
										}
										
									}
									
									if (( nextPart1 == null )) 
									{
										break;
									}
									
									{
										int _g6 = 0;
										haxe.root.Array<nx3.PVoice> _g7 = nextPart1.getVoices();
										while (( _g6 < _g7.length ))
										{
											nx3.PVoice voice1 = _g7.__get(_g6);
											 ++ _g6;
											nx3.PNote nextnote = null;
											{
												haxe.root.Array<nx3.PNote> array1 = voice1.getNotes();
												nextnote = array1.__get(0);
											}
											
											{
												int _g8 = 0;
												haxe.root.Array<nx3.NHead> _g9 = nextnote.nnote.get_nheads();
												while (( _g8 < _g9.length ))
												{
													nx3.NHead nnhead = _g9.__get(_g8);
													 ++ _g8;
													if (( nnhead.level == nhead.level )) 
													{
														this.tieconnections.push(new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"from", "tie", "to"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{lastnote, nhead.tie, nextnote}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"level"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (nhead.level) )) )})));
														break;
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
		
		return this.tieconnections;
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef606 = true;
			switch (field.hashCode())
			{
				case 339597513:
				{
					if (field.equals("allottedDistanceSum")) 
					{
						__temp_executeDef606 = false;
						this.allottedDistanceSum = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef606 = false;
						this.length = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1936318945:
				{
					if (field.equals("stretchwidth")) 
					{
						__temp_executeDef606 = false;
						this.stretchwidth = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef606 = false;
						this.value = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -567321825:
				{
					if (field.equals("contentx")) 
					{
						__temp_executeDef606 = false;
						this.contentx = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 853662957:
				{
					if (field.equals("contentwidth")) 
					{
						__temp_executeDef606 = false;
						this.contentwidth = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef606) 
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
			boolean __temp_executeDef607 = true;
			switch (field.hashCode())
			{
				case -1675713851:
				{
					if (field.equals("tieconnections")) 
					{
						__temp_executeDef607 = false;
						this.tieconnections = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3374309:
				{
					if (field.equals("nbar")) 
					{
						__temp_executeDef607 = false;
						this.nbar = ((nx3.NBar) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 339597513:
				{
					if (field.equals("allottedDistanceSum")) 
					{
						__temp_executeDef607 = false;
						this.allottedDistanceSum = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef607 = false;
						this.length = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 1936318945:
				{
					if (field.equals("stretchwidth")) 
					{
						__temp_executeDef607 = false;
						this.stretchwidth = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 109264530:
				{
					if (field.equals("score")) 
					{
						__temp_executeDef607 = false;
						this.score = ((nx3.PScore) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -567321825:
				{
					if (field.equals("contentx")) 
					{
						__temp_executeDef607 = false;
						this.contentx = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1129129860:
				{
					if (field.equals("systembar")) 
					{
						__temp_executeDef607 = false;
						this.systembar = ((nx3.PSystemBar) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 853662957:
				{
					if (field.equals("contentwidth")) 
					{
						__temp_executeDef607 = false;
						this.contentwidth = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 94746345:
				{
					if (field.equals("clefs")) 
					{
						__temp_executeDef607 = false;
						this.clefs = ((haxe.root.Array<nx3.EClef>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef607 = false;
						this.value = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 3288564:
				{
					if (field.equals("keys")) 
					{
						__temp_executeDef607 = false;
						this.keys = ((haxe.root.Array<nx3.EKey>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 949721053:
				{
					if (field.equals("columns")) 
					{
						__temp_executeDef607 = false;
						this.columns = ((haxe.root.Array<nx3.PColumn>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3560141:
				{
					if (field.equals("time")) 
					{
						__temp_executeDef607 = false;
						this.time = ((nx3.ETime) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 106437344:
				{
					if (field.equals("parts")) 
					{
						__temp_executeDef607 = false;
						this.parts = ((haxe.root.Array<nx3.PPart>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1480451606:
				{
					if (field.equals("_clefs")) 
					{
						__temp_executeDef607 = false;
						this._clefs = ((haxe.root.Array<nx3.EClef>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1714335407:
				{
					if (field.equals("displayTime")) 
					{
						__temp_executeDef607 = false;
						this.displayTime = ((nx3.EDisplayALN) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 91023059:
				{
					if (field.equals("_keys")) 
					{
						__temp_executeDef607 = false;
						this._keys = ((haxe.root.Array<nx3.EKey>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1714063830:
				{
					if (field.equals("displayKeys")) 
					{
						__temp_executeDef607 = false;
						this.displayKeys = ((nx3.EDisplayALN) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1589172039:
				{
					if (field.equals("displayClefs")) 
					{
						__temp_executeDef607 = false;
						this.displayClefs = ((nx3.EDisplayALN) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef607) 
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
			boolean __temp_executeDef608 = true;
			switch (field.hashCode())
			{
				case -299886693:
				{
					if (field.equals("getTieConnections")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getTieConnections"))) );
					}
					
					break;
				}
				
				
				case 3374309:
				{
					if (field.equals("nbar")) 
					{
						__temp_executeDef608 = false;
						return this.nbar;
					}
					
					break;
				}
				
				
				case -1675713851:
				{
					if (field.equals("tieconnections")) 
					{
						__temp_executeDef608 = false;
						return this.tieconnections;
					}
					
					break;
				}
				
				
				case 1182533742:
				{
					if (field.equals("iterator")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("iterator"))) );
					}
					
					break;
				}
				
				
				case -761691081:
				{
					if (field.equals("getStretchWidth")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getStretchWidth"))) );
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef608 = false;
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
				
				
				case 1819129235:
				{
					if (field.equals("getAllottedDistanceSum")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getAllottedDistanceSum"))) );
					}
					
					break;
				}
				
				
				case 974314479:
				{
					if (field.equals("get_length")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_length"))) );
					}
					
					break;
				}
				
				
				case 339597513:
				{
					if (field.equals("allottedDistanceSum")) 
					{
						__temp_executeDef608 = false;
						return this.allottedDistanceSum;
					}
					
					break;
				}
				
				
				case 109264530:
				{
					if (field.equals("score")) 
					{
						__temp_executeDef608 = false;
						return this.score;
					}
					
					break;
				}
				
				
				case 1936318945:
				{
					if (field.equals("stretchwidth")) 
					{
						__temp_executeDef608 = false;
						return this.stretchwidth;
					}
					
					break;
				}
				
				
				case 1965090012:
				{
					if (field.equals("getScore")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getScore"))) );
					}
					
					break;
				}
				
				
				case -1843869507:
				{
					if (field.equals("getContentXZero")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getContentXZero"))) );
					}
					
					break;
				}
				
				
				case 1129129860:
				{
					if (field.equals("systembar")) 
					{
						__temp_executeDef608 = false;
						return this.systembar;
					}
					
					break;
				}
				
				
				case -567321825:
				{
					if (field.equals("contentx")) 
					{
						__temp_executeDef608 = false;
						return this.contentx;
					}
					
					break;
				}
				
				
				case 1119525070:
				{
					if (field.equals("getSystembar")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getSystembar"))) );
					}
					
					break;
				}
				
				
				case -1814794397:
				{
					if (field.equals("getContentwidth")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getContentwidth"))) );
					}
					
					break;
				}
				
				
				case 94746345:
				{
					if (field.equals("clefs")) 
					{
						__temp_executeDef608 = false;
						if (handleProperties) 
						{
							return this.get_clefs();
						}
						 else 
						{
							return this.clefs;
						}
						
					}
					
					break;
				}
				
				
				case 853662957:
				{
					if (field.equals("contentwidth")) 
					{
						__temp_executeDef608 = false;
						return this.contentwidth;
					}
					
					break;
				}
				
				
				case 3288564:
				{
					if (field.equals("keys")) 
					{
						__temp_executeDef608 = false;
						if (handleProperties) 
						{
							return this.get_keys();
						}
						 else 
						{
							return this.keys;
						}
						
					}
					
					break;
				}
				
				
				case 1967798203:
				{
					if (field.equals("getValue")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getValue"))) );
					}
					
					break;
				}
				
				
				case 3560141:
				{
					if (field.equals("time")) 
					{
						__temp_executeDef608 = false;
						if (handleProperties) 
						{
							return this.get_time();
						}
						 else 
						{
							return this.time;
						}
						
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef608 = false;
						return this.value;
					}
					
					break;
				}
				
				
				case -1480451606:
				{
					if (field.equals("_clefs")) 
					{
						__temp_executeDef608 = false;
						return this._clefs;
					}
					
					break;
				}
				
				
				case 541909263:
				{
					if (field.equals("calculateAPositions")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("calculateAPositions"))) );
					}
					
					break;
				}
				
				
				case 1131696320:
				{
					if (field.equals("get_clefs")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_clefs"))) );
					}
					
					break;
				}
				
				
				case 1123915063:
				{
					if (field.equals("calculateMDistances")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("calculateMDistances"))) );
					}
					
					break;
				}
				
				
				case 91023059:
				{
					if (field.equals("_keys")) 
					{
						__temp_executeDef608 = false;
						return this._keys;
					}
					
					break;
				}
				
				
				case 1956171548:
				{
					if (field.equals("getIndex")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getIndex"))) );
					}
					
					break;
				}
				
				
				case 1976401213:
				{
					if (field.equals("get_keys")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_keys"))) );
					}
					
					break;
				}
				
				
				case 1986581415:
				{
					if (field.equals("getColumns")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getColumns"))) );
					}
					
					break;
				}
				
				
				case 1976672790:
				{
					if (field.equals("get_time")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_time"))) );
					}
					
					break;
				}
				
				
				case 949721053:
				{
					if (field.equals("columns")) 
					{
						__temp_executeDef608 = false;
						return this.columns;
					}
					
					break;
				}
				
				
				case 1589172039:
				{
					if (field.equals("displayClefs")) 
					{
						__temp_executeDef608 = false;
						if (handleProperties) 
						{
							return this.get_displayClefs();
						}
						 else 
						{
							return this.displayClefs;
						}
						
					}
					
					break;
				}
				
				
				case -75248535:
				{
					if (field.equals("getPart")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getPart"))) );
					}
					
					break;
				}
				
				
				case 1714063830:
				{
					if (field.equals("displayKeys")) 
					{
						__temp_executeDef608 = false;
						if (handleProperties) 
						{
							return this.get_displayKeys();
						}
						 else 
						{
							return this.displayKeys;
						}
						
					}
					
					break;
				}
				
				
				case 1962262826:
				{
					if (field.equals("getParts")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getParts"))) );
					}
					
					break;
				}
				
				
				case 1714335407:
				{
					if (field.equals("displayTime")) 
					{
						__temp_executeDef608 = false;
						if (handleProperties) 
						{
							return this.get_displayTime();
						}
						 else 
						{
							return this.displayTime;
						}
						
					}
					
					break;
				}
				
				
				case 106437344:
				{
					if (field.equals("parts")) 
					{
						__temp_executeDef608 = false;
						return this.parts;
					}
					
					break;
				}
				
				
				case 1863896464:
				{
					if (field.equals("get_displayClefs")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_displayClefs"))) );
					}
					
					break;
				}
				
				
				case -1740485818:
				{
					if (field.equals("get_displayTime")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_displayTime"))) );
					}
					
					break;
				}
				
				
				case -1740757395:
				{
					if (field.equals("get_displayKeys")) 
					{
						__temp_executeDef608 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_displayKeys"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef608) 
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
			boolean __temp_executeDef609 = true;
			switch (field.hashCode())
			{
				case 339597513:
				{
					if (field.equals("allottedDistanceSum")) 
					{
						__temp_executeDef609 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.allottedDistanceSum)) );
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef609 = false;
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
				
				
				case 1936318945:
				{
					if (field.equals("stretchwidth")) 
					{
						__temp_executeDef609 = false;
						return this.stretchwidth;
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef609 = false;
						return ((double) (this.value) );
					}
					
					break;
				}
				
				
				case -567321825:
				{
					if (field.equals("contentx")) 
					{
						__temp_executeDef609 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.contentx)) );
					}
					
					break;
				}
				
				
				case 853662957:
				{
					if (field.equals("contentwidth")) 
					{
						__temp_executeDef609 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.contentwidth)) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef609) 
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
			boolean __temp_executeDef610 = true;
			switch (field.hashCode())
			{
				case -299886693:
				{
					if (field.equals("getTieConnections")) 
					{
						__temp_executeDef610 = false;
						return this.getTieConnections();
					}
					
					break;
				}
				
				
				case 1182533742:
				{
					if (field.equals("iterator")) 
					{
						__temp_executeDef610 = false;
						return this.iterator();
					}
					
					break;
				}
				
				
				case -761691081:
				{
					if (field.equals("getStretchWidth")) 
					{
						__temp_executeDef610 = false;
						return this.getStretchWidth();
					}
					
					break;
				}
				
				
				case 974314479:
				{
					if (field.equals("get_length")) 
					{
						__temp_executeDef610 = false;
						return this.get_length();
					}
					
					break;
				}
				
				
				case 1819129235:
				{
					if (field.equals("getAllottedDistanceSum")) 
					{
						__temp_executeDef610 = false;
						return this.getAllottedDistanceSum();
					}
					
					break;
				}
				
				
				case 1965090012:
				{
					if (field.equals("getScore")) 
					{
						__temp_executeDef610 = false;
						return this.getScore();
					}
					
					break;
				}
				
				
				case -1843869507:
				{
					if (field.equals("getContentXZero")) 
					{
						__temp_executeDef610 = false;
						return this.getContentXZero();
					}
					
					break;
				}
				
				
				case 1119525070:
				{
					if (field.equals("getSystembar")) 
					{
						__temp_executeDef610 = false;
						return this.getSystembar();
					}
					
					break;
				}
				
				
				case -1814794397:
				{
					if (field.equals("getContentwidth")) 
					{
						__temp_executeDef610 = false;
						return this.getContentwidth();
					}
					
					break;
				}
				
				
				case 1131696320:
				{
					if (field.equals("get_clefs")) 
					{
						__temp_executeDef610 = false;
						return this.get_clefs();
					}
					
					break;
				}
				
				
				case 1967798203:
				{
					if (field.equals("getValue")) 
					{
						__temp_executeDef610 = false;
						return this.getValue();
					}
					
					break;
				}
				
				
				case 1976401213:
				{
					if (field.equals("get_keys")) 
					{
						__temp_executeDef610 = false;
						return this.get_keys();
					}
					
					break;
				}
				
				
				case 541909263:
				{
					if (field.equals("calculateAPositions")) 
					{
						__temp_executeDef610 = false;
						this.calculateAPositions();
					}
					
					break;
				}
				
				
				case 1976672790:
				{
					if (field.equals("get_time")) 
					{
						__temp_executeDef610 = false;
						return this.get_time();
					}
					
					break;
				}
				
				
				case 1123915063:
				{
					if (field.equals("calculateMDistances")) 
					{
						__temp_executeDef610 = false;
						this.calculateMDistances();
					}
					
					break;
				}
				
				
				case 1863896464:
				{
					if (field.equals("get_displayClefs")) 
					{
						__temp_executeDef610 = false;
						return this.get_displayClefs();
					}
					
					break;
				}
				
				
				case 1956171548:
				{
					if (field.equals("getIndex")) 
					{
						__temp_executeDef610 = false;
						return this.getIndex();
					}
					
					break;
				}
				
				
				case -1740757395:
				{
					if (field.equals("get_displayKeys")) 
					{
						__temp_executeDef610 = false;
						return this.get_displayKeys();
					}
					
					break;
				}
				
				
				case 1986581415:
				{
					if (field.equals("getColumns")) 
					{
						__temp_executeDef610 = false;
						return this.getColumns();
					}
					
					break;
				}
				
				
				case -1740485818:
				{
					if (field.equals("get_displayTime")) 
					{
						__temp_executeDef610 = false;
						return this.get_displayTime();
					}
					
					break;
				}
				
				
				case -75248535:
				{
					if (field.equals("getPart")) 
					{
						__temp_executeDef610 = false;
						return this.getPart(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
				case 1962262826:
				{
					if (field.equals("getParts")) 
					{
						__temp_executeDef610 = false;
						return this.getParts();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef610) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("tieconnections");
		baseArr.push("allottedDistanceSum");
		baseArr.push("stretchwidth");
		baseArr.push("contentx");
		baseArr.push("contentwidth");
		baseArr.push("value");
		baseArr.push("columns");
		baseArr.push("parts");
		baseArr.push("displayTime");
		baseArr.push("displayKeys");
		baseArr.push("displayClefs");
		baseArr.push("_keys");
		baseArr.push("_clefs");
		baseArr.push("time");
		baseArr.push("keys");
		baseArr.push("clefs");
		baseArr.push("systembar");
		baseArr.push("score");
		baseArr.push("length");
		baseArr.push("nbar");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


