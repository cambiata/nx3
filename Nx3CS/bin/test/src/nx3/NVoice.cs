
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class NVoice : global::haxe.lang.HxObject {
		public    NVoice(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    NVoice(global::Array<object> notes, global::nx3.EVoiceType type, global::nx3.EDirectionUAD direction){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\NVoice.hx"
				global::nx3.NVoice.__hx_ctor_nx3_NVoice(this, notes, type, direction);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_NVoice(global::nx3.NVoice __temp_me71, global::Array<object> notes, global::nx3.EVoiceType type, global::nx3.EDirectionUAD direction){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\NVoice.hx"
				if (( ( notes == default(global::Array<object>) ) || ( notes == new global::Array<object>(new object[]{}) ) )) {
					#line 22 "F:\\nx3\\src\\nx3\\NVoice.hx"
					__temp_me71.nnotes = default(global::Array<object>);
					__temp_me71.type = global::nx3.EVoiceType.Barpause;
				}
				 else {
					#line 27 "F:\\nx3\\src\\nx3\\NVoice.hx"
					__temp_me71.nnotes = notes;
					if (( type != default(global::nx3.EVoiceType) )) {
						#line 28 "F:\\nx3\\src\\nx3\\NVoice.hx"
						__temp_me71.type = type;
					}
					 else {
						#line 28 "F:\\nx3\\src\\nx3\\NVoice.hx"
						__temp_me71.type = global::nx3.EVoiceType.Normal;
					}
					
				}
				
				#line 30 "F:\\nx3\\src\\nx3\\NVoice.hx"
				if (( direction != default(global::nx3.EDirectionUAD) )) {
					#line 30 "F:\\nx3\\src\\nx3\\NVoice.hx"
					__temp_me71.direction = direction;
				}
				 else {
					#line 30 "F:\\nx3\\src\\nx3\\NVoice.hx"
					__temp_me71.direction = global::nx3.EDirectionUAD.Auto;
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
				return new global::nx3.NVoice(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
				return new global::nx3.NVoice(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ), ((global::nx3.EVoiceType) (arr[1]) ), ((global::nx3.EDirectionUAD) (arr[2]) ));
			}
			#line default
		}
		
		
		public  global::nx3.EDirectionUAD direction;
		
		public  global::Array<object> nnotes;
		
		public  global::nx3.EVoiceType type;
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
				switch (hash){
					case 1292432058:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						this.type = ((global::nx3.EVoiceType) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return @value;
					}
					
					
					case 453807379:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						this.nnotes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return @value;
					}
					
					
					case 272654911:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						this.direction = ((global::nx3.EDirectionUAD) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
				switch (hash){
					case 1292432058:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return this.type;
					}
					
					
					case 453807379:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return this.nnotes;
					}
					
					
					case 272654911:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return this.direction;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
				baseArr.push("type");
				#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
				baseArr.push("nnotes");
				#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
				baseArr.push("direction");
				#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
				{
					#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


