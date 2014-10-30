package nx3.utils;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class ScoreModifier extends haxe.lang.HxObject
{
	public    ScoreModifier(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    ScoreModifier(nx3.NScore nscore)
	{
		nx3.utils.ScoreModifier.__hx_ctor_nx3_utils_ScoreModifier(this, nscore);
	}
	
	
	public static   void __hx_ctor_nx3_utils_ScoreModifier(nx3.utils.ScoreModifier __temp_me188, nx3.NScore nscore)
	{
		__temp_me188.score = nscore;
	}
	
	
	public static   int randomInt(int from, int to)
	{
		return ( from + ((int) (java.lang.Math.floor(( (( ( to - from ) + 1 )) * java.lang.Math.random() ))) ) );
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.utils.ScoreModifier(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.utils.ScoreModifier(((nx3.NScore) (arr.__get(0)) ));
	}
	
	
	public  nx3.NScore score;
	
	public   nx3.NScore getBarNrAsScore(int barNr)
	{
		if (( this.score == null )) 
		{
			throw haxe.lang.HaxeException.wrap("score is null");
		}
		
		if (( barNr < 0 )) 
		{
			throw haxe.lang.HaxeException.wrap("bar index error");
		}
		
		if (( barNr > ( this.score.nbars.length - 1 ) )) 
		{
			throw haxe.lang.HaxeException.wrap("bar index error");
		}
		
		nx3.NBar nbar = this.score.nbars.__get(barNr);
		nx3.NBar firstbar = this.score.nbars.__get(0);
		if (( nbar.time == null )) 
		{
			nbar.time = firstbar.time;
		}
		
		{
			int _g1 = 0;
			int _g = nbar.nparts.length;
			while (( _g1 < _g ))
			{
				int partnr = _g1++;
				if (( nbar.nparts.__get(partnr).clef == null )) 
				{
					nbar.nparts.__get(partnr).clef = firstbar.nparts.__get(partnr).clef;
				}
				
			}
			
		}
		
		{
			int _g11 = 0;
			int _g2 = nbar.nparts.length;
			while (( _g11 < _g2 ))
			{
				int partnr1 = _g11++;
				if (( nbar.nparts.__get(partnr1).key == null )) 
				{
					nbar.nparts.__get(partnr1).key = firstbar.nparts.__get(partnr1).key;
				}
				
			}
			
		}
		
		nx3.NScore score = new nx3.NScore(((haxe.root.Array<nx3.NBar>) (new haxe.root.Array<nx3.NBar>(new nx3.NBar[]{nbar})) ));
		return score;
	}
	
	
	public   nx3.NScore addBarToScore(nx3.NBar nbar)
	{
		if (( this.score == null )) 
		{
			return this.score = new nx3.NScore(((haxe.root.Array<nx3.NBar>) (new haxe.root.Array<nx3.NBar>(new nx3.NBar[]{nbar})) ));
		}
		
		haxe.root.Array<nx3.NBar> bars = this.score.nbars;
		bars.push(nbar);
		this.score = new nx3.NScore(((haxe.root.Array<nx3.NBar>) (bars) ));
		return this.score;
	}
	
	
	public   nx3.NScore removeLastBarInScore()
	{
		if (( this.score == null )) 
		{
			return null;
		}
		
		haxe.root.Array<nx3.NBar> bars = this.score.nbars;
		if (( bars.length <= 1 )) 
		{
			return this.score = null;
		}
		
		bars.pop();
		return this.score = new nx3.NScore(((haxe.root.Array<nx3.NBar>) (bars) ));
	}
	
	
	public   nx3.NScore getRandomScore(int length, java.lang.Object startWithIdx, java.lang.Object endWithIdx, java.lang.Object avoidCloseRepeat)
	{
		boolean __temp_avoidCloseRepeat187 = ( (( avoidCloseRepeat == null )) ? (haxe.lang.Runtime.toBool(true)) : (haxe.lang.Runtime.toBool(avoidCloseRepeat)) );
		haxe.root.Array<nx3.NBar> nbars = this.score.nbars;
		int count = nbars.length;
		haxe.root.Array<java.lang.Object> result = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		{
			int _g = 0;
			while (( _g < length ))
			{
				int idx = _g++;
				java.lang.Object r = null;
				if (( ! (( startWithIdx == null )) )) 
				{
					r = startWithIdx;
				}
				 else 
				{
					r = ((int) (java.lang.Math.floor(( (( ( count - 1 ) + 1 )) * java.lang.Math.random() ))) );
				}
				
				if (( result.length > 0 )) 
				{
					r = ((int) (java.lang.Math.floor(( (( ( count - 1 ) + 1 )) * java.lang.Math.random() ))) );
					while (haxe.lang.Runtime.eq(r, ((int) (haxe.lang.Runtime.toInt(result.__get(( result.length - 1 )))) )))
					{
						r = ((int) (java.lang.Math.floor(( (( ( count - 1 ) + 1 )) * java.lang.Math.random() ))) );
					}
					
				}
				
				result.push(r);
			}
			
		}
		
		this.randomstring = result.join("");
		haxe.root.Array<nx3.NBar> newbars = new haxe.root.Array<nx3.NBar>(new nx3.NBar[]{});
		{
			int _g1 = 0;
			while (( _g1 < result.length ))
			{
				int r1 = ((int) (haxe.lang.Runtime.toInt(result.__get(_g1))) );
				 ++ _g1;
				nx3.NBar nbar = nbars.__get(r1);
				newbars.push(nbar);
			}
			
		}
		
		return new nx3.NScore(((haxe.root.Array<nx3.NBar>) (newbars) ));
	}
	
	
	public  java.lang.String randomstring;
	
	public   void clear()
	{
		this.score = null;
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef858 = true;
			switch (field.hashCode())
			{
				case 361522836:
				{
					if (field.equals("randomstring")) 
					{
						__temp_executeDef858 = false;
						this.randomstring = haxe.lang.Runtime.toString(value);
						return value;
					}
					
					break;
				}
				
				
				case 109264530:
				{
					if (field.equals("score")) 
					{
						__temp_executeDef858 = false;
						this.score = ((nx3.NScore) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef858) 
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
			boolean __temp_executeDef859 = true;
			switch (field.hashCode())
			{
				case 94746189:
				{
					if (field.equals("clear")) 
					{
						__temp_executeDef859 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("clear"))) );
					}
					
					break;
				}
				
				
				case 109264530:
				{
					if (field.equals("score")) 
					{
						__temp_executeDef859 = false;
						return this.score;
					}
					
					break;
				}
				
				
				case 361522836:
				{
					if (field.equals("randomstring")) 
					{
						__temp_executeDef859 = false;
						return this.randomstring;
					}
					
					break;
				}
				
				
				case 753038015:
				{
					if (field.equals("getBarNrAsScore")) 
					{
						__temp_executeDef859 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBarNrAsScore"))) );
					}
					
					break;
				}
				
				
				case -1351404967:
				{
					if (field.equals("getRandomScore")) 
					{
						__temp_executeDef859 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getRandomScore"))) );
					}
					
					break;
				}
				
				
				case 322487493:
				{
					if (field.equals("addBarToScore")) 
					{
						__temp_executeDef859 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("addBarToScore"))) );
					}
					
					break;
				}
				
				
				case -33105484:
				{
					if (field.equals("removeLastBarInScore")) 
					{
						__temp_executeDef859 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("removeLastBarInScore"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef859) 
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
			boolean __temp_executeDef860 = true;
			switch (field.hashCode())
			{
				case 94746189:
				{
					if (field.equals("clear")) 
					{
						__temp_executeDef860 = false;
						this.clear();
					}
					
					break;
				}
				
				
				case 753038015:
				{
					if (field.equals("getBarNrAsScore")) 
					{
						__temp_executeDef860 = false;
						return this.getBarNrAsScore(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
				case -1351404967:
				{
					if (field.equals("getRandomScore")) 
					{
						__temp_executeDef860 = false;
						return this.getRandomScore(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ), dynargs.__get(1), dynargs.__get(2), dynargs.__get(3));
					}
					
					break;
				}
				
				
				case 322487493:
				{
					if (field.equals("addBarToScore")) 
					{
						__temp_executeDef860 = false;
						return this.addBarToScore(((nx3.NBar) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -33105484:
				{
					if (field.equals("removeLastBarInScore")) 
					{
						__temp_executeDef860 = false;
						return this.removeLastBarInScore();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef860) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("randomstring");
		baseArr.push("score");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


