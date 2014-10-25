
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
		
		
		public static   void __hx_ctor_nx3_PBamegroupFrameTipCalculator(global::nx3.PBamegroupFrameTipCalculator __temp_me75, global::Array<int> notelevels, global::nx3.EDirectionUD direction){
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
				__temp_me75.notelevels = notelevels;
				__temp_me75.direction = direction;
			}
			#line default
		}
		
		
		public static   double floatMin(global::Array<double> levels){
			unchecked {
				#line 82 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				double result = levels[0];
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
						double level = levels[_g];
						#line 84 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						 ++ _g;
						#line 86 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						result = global::System.Math.Min(((double) (result) ), ((double) (level) ));
					}
					
				}
				
				#line 88 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				return result;
			}
			#line default
		}
		
		
		public static   int intMin(global::Array<int> levels){
			unchecked {
				#line 93 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				int result = levels[0];
				if (( levels.length == 1 )) {
					#line 94 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					return result;
				}
				
				#line 95 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				{
					#line 95 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					int _g = 0;
					#line 95 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					while (( _g < levels.length )){
						#line 95 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						int level = levels[_g];
						#line 95 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						 ++ _g;
						#line 97 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						{
							#line 97 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							double x = global::System.Math.Min(((double) (result) ), ((double) (level) ));
							#line 97 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							result = ((int) (x) );
						}
						
					}
					
				}
				
				#line 99 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				return result;
			}
			#line default
		}
		
		
		public static   int intMax(global::Array<int> levels){
			unchecked {
				#line 104 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				int result = levels[0];
				if (( levels.length == 1 )) {
					#line 105 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					return result;
				}
				
				#line 106 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				{
					#line 106 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					int _g = 0;
					#line 106 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					while (( _g < levels.length )){
						#line 106 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						int level = levels[_g];
						#line 106 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						 ++ _g;
						#line 108 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						{
							#line 108 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							double x = global::System.Math.Max(((double) (result) ), ((double) (level) ));
							#line 108 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							result = ((int) (x) );
						}
						
					}
					
				}
				
				#line 110 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
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
				double leftTip = ((double) (this.notelevels[0]) );
				double rightTip = default(double);
				#line 35 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				{
					#line 35 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					global::Array<int> array = this.notelevels;
					#line 35 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					rightTip = ((double) (array[( array.length - 1 )]) );
				}
				
				#line 40 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				if (( this.notelevels.length == 2 )) {
					#line 42 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					int slopevalue = 1;
					{
						#line 43 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						global::Array<double> levels1 = new global::Array<double>(new double[]{leftTip, ( rightTip + slopevalue ), ((double) (stemLength) )});
						#line 43 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						double result1 = levels1[0];
						#line 43 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						if (( levels1.length == 1 )) {
							#line 43 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							leftTip = result1;
						}
						 else {
							#line 43 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							{
								#line 43 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								int _g1 = 0;
								#line 43 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								while (( _g1 < levels1.length )){
									#line 43 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									double level1 = levels1[_g1];
									#line 43 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									 ++ _g1;
									#line 43 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									result1 = global::System.Math.Min(((double) (result1) ), ((double) (level1) ));
								}
								
							}
							
							#line 43 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							leftTip = result1;
						}
						
					}
					
					#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					{
						#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						global::Array<double> levels2 = new global::Array<double>(new double[]{rightTip, ( leftTip + slopevalue ), ((double) (stemLength) )});
						#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						double result2 = levels2[0];
						#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						if (( levels2.length == 1 )) {
							#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							rightTip = result2;
						}
						 else {
							#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							{
								#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								int _g2 = 0;
								#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								while (( _g2 < levels2.length )){
									#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									double level2 = levels2[_g2];
									#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									 ++ _g2;
									#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									result2 = global::System.Math.Min(((double) (result2) ), ((double) (level2) ));
								}
								
							}
							
							#line 45 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							rightTip = result2;
						}
						
					}
					
				}
				 else {
					#line 50 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					double slopevalue1 = ( this.notelevels.length * .25 );
					global::Array<int> inlevels = this.notelevels.copy();
					inlevels.shift();
					inlevels.pop();
					int inmin = default(int);
					#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					{
						#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						int result3 = inlevels[0];
						#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						if (( inlevels.length == 1 )) {
							#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							inmin = result3;
						}
						 else {
							#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							{
								#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								int _g3 = 0;
								#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								while (( _g3 < inlevels.length )){
									#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									int level3 = inlevels[_g3];
									#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									 ++ _g3;
									#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									{
										#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
										double x1 = global::System.Math.Min(((double) (result3) ), ((double) (level3) ));
										#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
										result3 = ((int) (x1) );
									}
									
								}
								
							}
							
							#line 54 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							inmin = result3;
						}
						
					}
					
					#line 56 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					if (( ( leftTip >= inmin ) && ( rightTip >= inmin ) )) {
						#line 58 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						leftTip = ((double) (inmin) );
						rightTip = ((double) (inmin) );
					}
					 else {
						#line 61 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
						if (( ( rightTip < leftTip ) && ( min < leftTip ) )) {
							#line 63 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							global::Array<double> levels3 = new global::Array<double>(new double[]{( min + slopevalue1 ), leftTip});
							#line 63 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							double result4 = levels3[0];
							#line 63 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							if (( levels3.length == 1 )) {
								#line 63 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								leftTip = result4;
							}
							 else {
								#line 63 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								{
									#line 63 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									int _g4 = 0;
									#line 63 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									while (( _g4 < levels3.length )){
										#line 63 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
										double level4 = levels3[_g4];
										#line 63 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
										 ++ _g4;
										#line 63 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
										result4 = global::System.Math.Min(((double) (result4) ), ((double) (level4) ));
									}
									
								}
								
								#line 63 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								leftTip = result4;
							}
							
						}
						 else {
							#line 65 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
							if (( ( leftTip < rightTip ) && ( min < rightTip ) )) {
								#line 67 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								global::Array<double> levels4 = new global::Array<double>(new double[]{( min + slopevalue1 ), rightTip});
								#line 67 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								double result5 = levels4[0];
								#line 67 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
								if (( levels4.length == 1 )) {
									#line 67 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									rightTip = result5;
								}
								 else {
									#line 67 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									{
										#line 67 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
										int _g5 = 0;
										#line 67 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
										while (( _g5 < levels4.length )){
											#line 67 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
											double level5 = levels4[_g5];
											#line 67 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
											 ++ _g5;
											#line 67 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
											result5 = global::System.Math.Min(((double) (result5) ), ((double) (level5) ));
										}
										
									}
									
									#line 67 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
									rightTip = result5;
								}
								
							}
							
						}
						
					}
					
				}
				
				#line 71 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				{
					#line 71 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					double x2 = global::System.Math.Min(((double) (stemLength) ), ((double) (leftTip) ));
					#line 71 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					leftTip = ((double) (((int) (x2) )) );
				}
				
				#line 72 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				{
					#line 72 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					double x3 = global::System.Math.Min(((double) (stemLength) ), ((double) (rightTip) ));
					#line 72 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					rightTip = ((double) (((int) (x3) )) );
				}
				
				#line 76 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				if (( this.direction == global::nx3.EDirectionUD.Down )) {
					#line 76 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
					return new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{}), new global::Array<object>(new object[]{}), new global::Array<int>(new int[]{1679810271, 1961201556}), new global::Array<double>(new double[]{ - (rightTip) ,  - (leftTip) }));
				}
				
				#line 77 "F:\\nx3\\src\\nx3\\PBamegroupFrameTipCalculator.hx"
				return new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{}), new global::Array<object>(new object[]{}), new global::Array<int>(new int[]{1679810271, 1961201556}), new global::Array<double>(new double[]{rightTip, leftTip}));
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


