package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PBeamgroupFrameCalculator extends haxe.lang.HxObject
{
	public    PBeamgroupFrameCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PBeamgroupFrameCalculator(nx3.PBeamgroup beamgroup)
	{
		nx3.PBeamgroupFrameCalculator.__hx_ctor_nx3_PBeamgroupFrameCalculator(this, beamgroup);
	}
	
	
	public static   void __hx_ctor_nx3_PBeamgroupFrameCalculator(nx3.PBeamgroupFrameCalculator __temp_me105, nx3.PBeamgroup beamgroup)
	{
		__temp_me105.beamgroup = beamgroup;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PBeamgroupFrameCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PBeamgroupFrameCalculator(((nx3.PBeamgroup) (arr.__get(0)) ));
	}
	
	
	public  nx3.PBeamgroup beamgroup;
	
	public  haxe.root.Array<java.lang.Object> outerLevels;
	
	public  haxe.root.Array<java.lang.Object> innerLevels;
	
	public   java.lang.Object getFrame()
	{
		this.calcLevelArrays();
		java.lang.Object frame = this.calcFramePrototype();
		return frame;
	}
	
	
	public   java.lang.Object calcFramePrototype()
	{
		int count = this.innerLevels.length;
		java.lang.Object tips = this.calcTips();
		haxe.root.Array<nx3.EBeamflagType> beamflags = new nx3.PBeamflagCalculator(((nx3.PBeamgroup) (this.beamgroup) )).getBeamflags();
		{
			int __temp_odecl650 = ((int) (haxe.lang.Runtime.toInt(this.innerLevels.__get(0))) );
			int __temp_odecl651 = ((int) (haxe.lang.Runtime.toInt(this.outerLevels.__get(0))) );
			int __temp_odecl652 = ((int) (haxe.lang.Runtime.toInt(this.innerLevels.__get(( count - 1 )))) );
			int __temp_odecl653 = ((int) (haxe.lang.Runtime.toInt(this.outerLevels.__get(( count - 1 )))) );
			double __temp_odecl654 = ((double) (haxe.lang.Runtime.getField_f(tips, "leftTip", true)) );
			double __temp_odecl655 = ((double) (haxe.lang.Runtime.getField_f(tips, "rightTip", true)) );
			return new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"beamflags", "innerLevels", "outerLevels"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{beamflags, this.innerLevels, this.outerLevels}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"leftInnerY", "leftOuterY", "leftTipY", "rightInnerY", "rightOuterY", "rightTipY"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (__temp_odecl650) )) ), ((java.lang.Object) (((double) (__temp_odecl651) )) ), ((java.lang.Object) (__temp_odecl654) ), ((java.lang.Object) (((double) (__temp_odecl652) )) ), ((java.lang.Object) (((double) (__temp_odecl653) )) ), ((java.lang.Object) (__temp_odecl655) )}));
		}
		
	}
	
	
	public   haxe.root.Array<java.lang.Object> getTopLevels()
	{
		haxe.root.Array<java.lang.Object> levels = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		{
			int _g = 0;
			haxe.root.Array<nx3.PNote> _g1 = this.beamgroup.pnotes;
			while (( _g < _g1.length ))
			{
				nx3.PNote note = _g1.__get(_g);
				 ++ _g;
				levels.push(note.nnote.getTopLevel());
			}
			
		}
		
		return levels;
	}
	
	
	public   haxe.root.Array<java.lang.Object> getBottomLevels()
	{
		haxe.root.Array<java.lang.Object> levels = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		{
			int _g = 0;
			haxe.root.Array<nx3.PNote> _g1 = this.beamgroup.pnotes;
			while (( _g < _g1.length ))
			{
				nx3.PNote note = _g1.__get(_g);
				 ++ _g;
				levels.push(note.nnote.getBottomLevel());
			}
			
		}
		
		return levels;
	}
	
	
	public   void calcLevelArrays()
	{
		nx3.EDirectionUD _g = this.beamgroup.getDirection();
		switch (haxe.root.Type.enumIndex(_g))
		{
			case 0:
			{
				this.outerLevels = this.getTopLevels();
				this.innerLevels = this.getBottomLevels();
				break;
			}
			
			
			case 1:
			{
				this.outerLevels = this.getBottomLevels();
				this.innerLevels = this.getTopLevels();
				break;
			}
			
			
		}
		
	}
	
	
	public   java.lang.Object calcTips()
	{
		int stemLenght = 7;
		nx3.EDirectionUD direction = this.beamgroup.getDirection();
		nx3.PBamegroupFrameTipCalculator calculator = new nx3.PBamegroupFrameTipCalculator(((haxe.root.Array<java.lang.Object>) (this.outerLevels) ), ((nx3.EDirectionUD) (direction) ));
		java.lang.Object tips = calculator.getTips();
		if (( direction == nx3.EDirectionUD.Up )) 
		{
			haxe.lang.Runtime.setField_f(tips, "leftTip", ((double) (( ((double) (haxe.lang.Runtime.getField_f(tips, "leftTip", true)) ) - ((double) (stemLenght) ) )) ));
		}
		 else 
		{
			haxe.lang.Runtime.setField_f(tips, "leftTip", ((double) (( ((double) (haxe.lang.Runtime.getField_f(tips, "leftTip", true)) ) + stemLenght )) ));
		}
		
		if (( direction == nx3.EDirectionUD.Up )) 
		{
			haxe.lang.Runtime.setField_f(tips, "rightTip", ((double) (( ((double) (haxe.lang.Runtime.getField_f(tips, "rightTip", true)) ) - ((double) (stemLenght) ) )) ));
		}
		 else 
		{
			haxe.lang.Runtime.setField_f(tips, "rightTip", ((double) (( ((double) (haxe.lang.Runtime.getField_f(tips, "rightTip", true)) ) + stemLenght )) ));
		}
		
		return tips;
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef656 = true;
			switch (field.hashCode())
			{
				case -795379867:
				{
					if (field.equals("innerLevels")) 
					{
						__temp_executeDef656 = false;
						this.innerLevels = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1993942992:
				{
					if (field.equals("beamgroup")) 
					{
						__temp_executeDef656 = false;
						this.beamgroup = ((nx3.PBeamgroup) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1972394442:
				{
					if (field.equals("outerLevels")) 
					{
						__temp_executeDef656 = false;
						this.outerLevels = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef656) 
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
			boolean __temp_executeDef657 = true;
			switch (field.hashCode())
			{
				case -180941011:
				{
					if (field.equals("calcTips")) 
					{
						__temp_executeDef657 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("calcTips"))) );
					}
					
					break;
				}
				
				
				case -1993942992:
				{
					if (field.equals("beamgroup")) 
					{
						__temp_executeDef657 = false;
						return this.beamgroup;
					}
					
					break;
				}
				
				
				case -1666874295:
				{
					if (field.equals("calcLevelArrays")) 
					{
						__temp_executeDef657 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("calcLevelArrays"))) );
					}
					
					break;
				}
				
				
				case 1972394442:
				{
					if (field.equals("outerLevels")) 
					{
						__temp_executeDef657 = false;
						return this.outerLevels;
					}
					
					break;
				}
				
				
				case -628661776:
				{
					if (field.equals("getBottomLevels")) 
					{
						__temp_executeDef657 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBottomLevels"))) );
					}
					
					break;
				}
				
				
				case -795379867:
				{
					if (field.equals("innerLevels")) 
					{
						__temp_executeDef657 = false;
						return this.innerLevels;
					}
					
					break;
				}
				
				
				case -448602002:
				{
					if (field.equals("getTopLevels")) 
					{
						__temp_executeDef657 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getTopLevels"))) );
					}
					
					break;
				}
				
				
				case 1953517495:
				{
					if (field.equals("getFrame")) 
					{
						__temp_executeDef657 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getFrame"))) );
					}
					
					break;
				}
				
				
				case 2073293802:
				{
					if (field.equals("calcFramePrototype")) 
					{
						__temp_executeDef657 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("calcFramePrototype"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef657) 
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
			boolean __temp_executeDef658 = true;
			switch (field.hashCode())
			{
				case -180941011:
				{
					if (field.equals("calcTips")) 
					{
						__temp_executeDef658 = false;
						return this.calcTips();
					}
					
					break;
				}
				
				
				case 1953517495:
				{
					if (field.equals("getFrame")) 
					{
						__temp_executeDef658 = false;
						return this.getFrame();
					}
					
					break;
				}
				
				
				case -1666874295:
				{
					if (field.equals("calcLevelArrays")) 
					{
						__temp_executeDef658 = false;
						this.calcLevelArrays();
					}
					
					break;
				}
				
				
				case 2073293802:
				{
					if (field.equals("calcFramePrototype")) 
					{
						__temp_executeDef658 = false;
						return this.calcFramePrototype();
					}
					
					break;
				}
				
				
				case -628661776:
				{
					if (field.equals("getBottomLevels")) 
					{
						__temp_executeDef658 = false;
						return this.getBottomLevels();
					}
					
					break;
				}
				
				
				case -448602002:
				{
					if (field.equals("getTopLevels")) 
					{
						__temp_executeDef658 = false;
						return this.getTopLevels();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef658) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("innerLevels");
		baseArr.push("outerLevels");
		baseArr.push("beamgroup");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


