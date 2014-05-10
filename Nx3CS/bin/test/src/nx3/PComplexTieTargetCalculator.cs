
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PComplexTieTargetCalculator : global::haxe.lang.HxObject {
		public    PComplexTieTargetCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PComplexTieTargetCalculator(global::Array<object> tieinfos){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
				global::nx3.PComplexTieTargetCalculator.__hx_ctor_nx3_PComplexTieTargetCalculator(this, tieinfos);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PComplexTieTargetCalculator(global::nx3.PComplexTieTargetCalculator __temp_me98, global::Array<object> tieinfos){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
				__temp_me98.tieinfos = tieinfos;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
				return new global::nx3.PComplexTieTargetCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
				return new global::nx3.PComplexTieTargetCalculator(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ));
			}
			#line default
		}
		
		
		public  global::Array<object> tieinfos;
		
		public virtual   global::Array<object> findTargetHeads(){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
				{
					#line 20 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
					int _g = 0;
					#line 20 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
					global::Array<object> _g1 = this.tieinfos;
					#line 20 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
					while (( _g < _g1.length )){
						#line 20 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
						object info = _g1[_g];
						#line 20 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
						 ++ _g;
						#line 22 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
						global::nx3.PHead head = ((global::nx3.PHead) (global::haxe.lang.Runtime.getField(info, "head", 1158359328, true)) );
						int headlevel = head.nhead.level;
						global::nx3.PNote nextnote = head.getNote().getNext();
						if (( nextnote == default(global::nx3.PNote) )) {
							#line 25 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
							continue;
						}
						
						#line 27 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
						global::Array<object> nextheads = nextnote.getHeads();
						#line 29 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
						{
							#line 29 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
							int _g2 = 0;
							#line 29 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
							while (( _g2 < nextheads.length )){
								#line 29 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
								global::nx3.PHead nexthead = ((global::nx3.PHead) (nextheads[_g2]) );
								#line 29 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
								 ++ _g2;
								#line 31 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
								if (( headlevel == nexthead.nhead.level )) {
									#line 33 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
									global::haxe.lang.Runtime.setField(info, "target", 116192081, nexthead);
									break;
								}
								
							}
							
						}
						
					}
					
				}
				
				#line 38 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
				return this.tieinfos;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
				switch (hash){
					case 424346869:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
						this.tieinfos = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
				switch (hash){
					case 1981340297:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("findTargetHeads") ), ((int) (1981340297) ))) );
					}
					
					
					case 424346869:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
						return this.tieinfos;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
				switch (hash){
					case 1981340297:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
						return this.findTargetHeads();
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
				baseArr.push("tieinfos");
				#line 9 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
				{
					#line 9 "F:\\nx3\\src\\nx3\\PComplexTieTargetCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


