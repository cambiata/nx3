
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PHeadPlacementsCalculator : global::haxe.lang.HxObject {
		public    PHeadPlacementsCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PHeadPlacementsCalculator(global::Array<object> vheads, global::nx3.EDirectionUD direction){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
				global::nx3.PHeadPlacementsCalculator.__hx_ctor_nx3_PHeadPlacementsCalculator(this, vheads, direction);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PHeadPlacementsCalculator(global::nx3.PHeadPlacementsCalculator __temp_me103, global::Array<object> vheads, global::nx3.EDirectionUD direction){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
				__temp_me103.vheads = vheads;
				__temp_me103.direction = direction;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
				return new global::nx3.PHeadPlacementsCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
				return new global::nx3.PHeadPlacementsCalculator(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ), ((global::nx3.EDirectionUD) (arr[1]) ));
			}
			#line default
		}
		
		
		public  global::Array<object> vheads;
		
		public  global::nx3.EDirectionUD direction;
		
		public virtual   global::Array<object> getHeadsPlacements(){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
				if (( this.vheads.length == 1 )) {
					#line 21 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
					return new global::Array<object>(new object[]{new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{5594516}), new global::Array<object>(new object[]{global::nx3.EHeadPosition.Center}), new global::Array<int>(new int[]{1919096196}), new global::Array<double>(new double[]{((double) (((global::nx3.PHead) (this.vheads[0]) ).nhead.level) )}))});
				}
				
				#line 23 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
				int len = this.vheads.length;
				#line 25 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
				global::Array<object> placements = new global::Array<object>(new object[]{});
				global::Array<int> tempArray = new global::Array<int>(new int[]{});
				#line 28 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
				{
					#line 28 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
					int _g = 0;
					#line 28 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
					global::Array<object> _g1 = this.vheads;
					#line 28 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
					while (( _g < _g1.length )){
						#line 28 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
						global::nx3.PHead vhead = ((global::nx3.PHead) (_g1[_g]) );
						#line 28 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
						 ++ _g;
						#line 30 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
						object placement = new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{5594516}), new global::Array<object>(new object[]{global::nx3.EHeadPosition.Center}), new global::Array<int>(new int[]{1919096196}), new global::Array<double>(new double[]{((double) (vhead.nhead.level) )}));
						placements.push(placement);
						tempArray.push(0);
					}
					
				}
				
				#line 35 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
				if (( this.direction == global::nx3.EDirectionUD.Up )) {
					#line 37 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
					int _g11 = 0;
					#line 37 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
					int _g2 = ( len - 1 );
					#line 37 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
					while (( _g11 < _g2 )){
						#line 37 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
						int j = _g11++;
						int i = ( ( len - j ) - 1 );
						global::nx3.PHead vhead1 = ((global::nx3.PHead) (this.vheads[i]) );
						global::nx3.PHead vheadNext = ((global::nx3.PHead) (this.vheads[( i - 1 )]) );
						int lDiff = ( vhead1.nhead.level - vheadNext.nhead.level );
						if (( lDiff < 2 )) {
							#line 43 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
							if (( tempArray[i] == tempArray[( i - 1 )] )) {
								#line 44 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
								tempArray[( i - 1 )] = 1;
								global::haxe.lang.Runtime.setField(placements[( i - 1 )], "pos", 5594516, global::nx3.EHeadPosition.Right);
							}
							
						}
						
					}
					
				}
				 else {
					#line 50 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
					int _g12 = 0;
					#line 50 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
					int _g3 = ( len - 1 );
					#line 50 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
					while (( _g12 < _g3 )){
						#line 50 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
						int i1 = _g12++;
						global::nx3.PHead vhead2 = ((global::nx3.PHead) (this.vheads[i1]) );
						global::nx3.PHead vheadNext1 = ((global::nx3.PHead) (this.vheads[( i1 + 1 )]) );
						int lDiff1 = ( vheadNext1.nhead.level - vhead2.nhead.level );
						if (( lDiff1 < 2 )) {
							#line 55 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
							if (( tempArray[i1] == tempArray[( i1 + 1 )] )) {
								#line 56 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
								tempArray[( i1 + 1 )] = -1;
								global::haxe.lang.Runtime.setField(placements[( i1 + 1 )], "pos", 5594516, global::nx3.EHeadPosition.Left);
							}
							
						}
						
					}
					
				}
				
				#line 64 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
				return placements;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
				switch (hash){
					case 272654911:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
						this.direction = ((global::nx3.EDirectionUD) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
						return @value;
					}
					
					
					case 1389717277:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
						this.vheads = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
				switch (hash){
					case 1171782699:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHeadsPlacements") ), ((int) (1171782699) ))) );
					}
					
					
					case 272654911:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
						return this.direction;
					}
					
					
					case 1389717277:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
						return this.vheads;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
				switch (hash){
					case 1171782699:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
						return this.getHeadsPlacements();
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
				baseArr.push("direction");
				#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
				baseArr.push("vheads");
				#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
				{
					#line 8 "F:\\nx3\\src\\nx3\\PHeadPlacementsCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


