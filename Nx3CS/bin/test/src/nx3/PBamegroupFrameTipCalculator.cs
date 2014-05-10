
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PBamegroupFrameTipCalculator : global::haxe.lang.HxObject {
		public    PBamegroupFrameTipCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PBamegroupFrameTipCalculator(global::Array<int> notelevels, global::nx3.EDirectionUD direction){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				global::nx3.PBamegroupFrameTipCalculator.__hx_ctor_nx3_PBamegroupFrameTipCalculator(this, notelevels, direction);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PBamegroupFrameTipCalculator(global::nx3.PBamegroupFrameTipCalculator __temp_me73, global::Array<int> notelevels, global::nx3.EDirectionUD direction){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				if (( direction == global::nx3.EDirectionUD.Down )) {
					#line 17 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					global::Array<int> invertedLevels = new global::Array<int>();
					{
						#line 18 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						int _g = 0;
						#line 18 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						while (( _g < notelevels.length )){
							#line 18 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							int level = notelevels[_g];
							#line 18 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							 ++ _g;
							#line 20 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							invertedLevels.push(( level * -1 ));
						}
						
					}
					
					#line 22 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					notelevels = invertedLevels;
				}
				
				#line 24 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				__temp_me73.notelevels = notelevels;
				__temp_me73.direction = direction;
			}
			#line default
		}
		
		
		public static   int intMin(global::Array<int> levels){
			unchecked {
				#line 71 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				int result = levels[0];
				if (( levels.length == 1 )) {
					#line 72 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					return result;
				}
				
				#line 73 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				{
					#line 73 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					int _g = 0;
					#line 73 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					while (( _g < levels.length )){
						#line 73 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						int level = levels[_g];
						#line 73 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						 ++ _g;
						#line 75 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						{
							#line 75 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							double x = global::System.Math.Min(((double) (result) ), ((double) (level) ));
							#line 75 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							result = ((int) (x) );
						}
						
					}
					
				}
				
				#line 77 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				return result;
			}
			#line default
		}
		
		
		public static   int intMax(global::Array<int> levels){
			unchecked {
				#line 82 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				int result = levels[0];
				if (( levels.length == 1 )) {
					#line 83 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					return result;
				}
				
				#line 84 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				{
					#line 84 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					int _g = 0;
					#line 84 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					while (( _g < levels.length )){
						#line 84 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						int level = levels[_g];
						#line 84 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						 ++ _g;
						#line 86 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						{
							#line 86 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							double x = global::System.Math.Max(((double) (result) ), ((double) (level) ));
							#line 86 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							result = ((int) (x) );
						}
						
					}
					
				}
				
				#line 88 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				return result;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				return new global::nx3.PBamegroupFrameTipCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				return new global::nx3.PBamegroupFrameTipCalculator(((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (arr[0]) ))) ), ((global::nx3.EDirectionUD) (arr[1]) ));
			}
			#line default
		}
		
		
		public  global::Array<int> notelevels;
		
		public  global::nx3.EDirectionUD direction;
		
		public virtual   object getTips(){
			unchecked {
				#line 30 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				int stemLength = 7;
				#line 32 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				int min = default(int);
				#line 32 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				{
					#line 32 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					global::Array<int> levels = this.notelevels;
					#line 32 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					int result = levels[0];
					#line 32 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					if (( levels.length == 1 )) {
						#line 32 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						min = result;
					}
					 else {
						#line 32 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						{
							#line 32 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							int _g = 0;
							#line 32 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							while (( _g < levels.length )){
								#line 32 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								int level = levels[_g];
								#line 32 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								 ++ _g;
								#line 32 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								{
									#line 32 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									double x = global::System.Math.Min(((double) (result) ), ((double) (level) ));
									#line 32 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									result = ((int) (x) );
								}
								
							}
							
						}
						
						#line 32 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						min = result;
					}
					
				}
				
				#line 34 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				int leftTip = this.notelevels[0];
				int rightTip = default(int);
				#line 35 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				{
					#line 35 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					global::Array<int> array = this.notelevels;
					#line 35 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					rightTip = array[( array.length - 1 )];
				}
				
				#line 37 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				{
					#line 37 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					global::Array<int> levels1 = new global::Array<int>(new int[]{leftTip, ( rightTip + 2 ), stemLength});
					#line 37 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					int result1 = levels1[0];
					#line 37 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					if (( levels1.length == 1 )) {
						#line 37 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						leftTip = result1;
					}
					 else {
						#line 37 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						{
							#line 37 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							int _g1 = 0;
							#line 37 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							while (( _g1 < levels1.length )){
								#line 37 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								int level1 = levels1[_g1];
								#line 37 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								 ++ _g1;
								#line 37 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								{
									#line 37 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									double x1 = global::System.Math.Min(((double) (result1) ), ((double) (level1) ));
									#line 37 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									result1 = ((int) (x1) );
								}
								
							}
							
						}
						
						#line 37 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						leftTip = result1;
					}
					
				}
				
				#line 38 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				{
					#line 38 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					global::Array<int> levels2 = new global::Array<int>(new int[]{rightTip, ( leftTip + 2 ), stemLength});
					#line 38 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					int result2 = levels2[0];
					#line 38 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					if (( levels2.length == 1 )) {
						#line 38 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						rightTip = result2;
					}
					 else {
						#line 38 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						{
							#line 38 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							int _g2 = 0;
							#line 38 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							while (( _g2 < levels2.length )){
								#line 38 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								int level2 = levels2[_g2];
								#line 38 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								 ++ _g2;
								#line 38 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								{
									#line 38 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									double x2 = global::System.Math.Min(((double) (result2) ), ((double) (level2) ));
									#line 38 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									result2 = ((int) (x2) );
								}
								
							}
							
						}
						
						#line 38 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						rightTip = result2;
					}
					
				}
				
				#line 40 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				if (( this.notelevels.length > 2 )) {
					#line 42 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					global::Array<int> inlevels = this.notelevels.copy();
					inlevels.shift();
					inlevels.pop();
					int inmin = default(int);
					#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					{
						#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						int result3 = inlevels[0];
						#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						if (( inlevels.length == 1 )) {
							#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							inmin = result3;
						}
						 else {
							#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							{
								#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								int _g3 = 0;
								#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								while (( _g3 < inlevels.length )){
									#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									int level3 = inlevels[_g3];
									#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									 ++ _g3;
									#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									{
										#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
										double x3 = global::System.Math.Min(((double) (result3) ), ((double) (level3) ));
										#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
										result3 = ((int) (x3) );
									}
									
								}
								
							}
							
							#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							inmin = result3;
						}
						
					}
					
					#line 47 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					if (( ( leftTip >= inmin ) && ( rightTip >= inmin ) )) {
						#line 49 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						leftTip = inmin;
						rightTip = inmin;
					}
					 else {
						#line 52 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						if (( ( rightTip < leftTip ) && ( min < leftTip ) )) {
							#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							global::Array<int> levels3 = new global::Array<int>(new int[]{( min + 2 ), leftTip});
							#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							int result4 = levels3[0];
							#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							if (( levels3.length == 1 )) {
								#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								leftTip = result4;
							}
							 else {
								#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								{
									#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									int _g4 = 0;
									#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									while (( _g4 < levels3.length )){
										#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
										int level4 = levels3[_g4];
										#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
										 ++ _g4;
										#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
										{
											#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
											double x4 = global::System.Math.Min(((double) (result4) ), ((double) (level4) ));
											#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
											result4 = ((int) (x4) );
										}
										
									}
									
								}
								
								#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								leftTip = result4;
							}
							
						}
						 else {
							#line 56 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							if (( ( leftTip < rightTip ) && ( min < rightTip ) )) {
								#line 58 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								global::Array<int> levels4 = new global::Array<int>(new int[]{( min + 2 ), rightTip});
								#line 58 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								int result5 = levels4[0];
								#line 58 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								if (( levels4.length == 1 )) {
									#line 58 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									rightTip = result5;
								}
								 else {
									#line 58 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									{
										#line 58 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
										int _g5 = 0;
										#line 58 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
										while (( _g5 < levels4.length )){
											#line 58 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
											int level5 = levels4[_g5];
											#line 58 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
											 ++ _g5;
											#line 58 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
											{
												#line 58 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
												double x5 = global::System.Math.Min(((double) (result5) ), ((double) (level5) ));
												#line 58 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
												result5 = ((int) (x5) );
											}
											
										}
										
									}
									
									#line 58 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									rightTip = result5;
								}
								
							}
							
						}
						
					}
					
				}
				
				#line 62 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				{
					#line 62 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					double x6 = global::System.Math.Min(((double) (stemLength) ), ((double) (leftTip) ));
					#line 62 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					leftTip = ((int) (x6) );
				}
				
				#line 63 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				{
					#line 63 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					double x7 = global::System.Math.Min(((double) (stemLength) ), ((double) (rightTip) ));
					#line 63 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					rightTip = ((int) (x7) );
				}
				
				#line 65 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				if (( this.direction == global::nx3.EDirectionUD.Down )) {
					#line 65 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					return new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{}), new global::Array<object>(new object[]{}), new global::Array<int>(new int[]{1679810271, 1961201556}), new global::Array<double>(new double[]{((double) ( - (rightTip) ) ), ((double) ( - (leftTip) ) )}));
				}
				
				#line 66 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				return new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{}), new global::Array<object>(new object[]{}), new global::Array<int>(new int[]{1679810271, 1961201556}), new global::Array<double>(new double[]{((double) (rightTip) ), ((double) (leftTip) )}));
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				switch (hash){
					case 272654911:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						this.direction = ((global::nx3.EDirectionUD) (@value) );
						#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						return @value;
					}
					
					
					case 231692257:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						this.notelevels = ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (@value) ))) );
						#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				switch (hash){
					case 528449134:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getTips") ), ((int) (528449134) ))) );
					}
					
					
					case 272654911:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						return this.direction;
					}
					
					
					case 231692257:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						return this.notelevels;
					}
					
					
					default:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				switch (hash){
					case 528449134:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						return this.getTips();
					}
					
					
					default:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				baseArr.push("direction");
				#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				baseArr.push("notelevels");
				#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				{
					#line 7 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


