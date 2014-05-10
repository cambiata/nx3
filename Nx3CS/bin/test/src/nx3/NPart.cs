
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class NPart : global::haxe.lang.HxObject {
		public    NPart(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    NPart(global::Array<object> voices, global::nx3.EPartType type, global::nx3.EClef clef, global::nx3.EDisplayALN clefDisplay, global::nx3.EKey key, global::nx3.EDisplayALN keyDisplay){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
				global::nx3.NPart.__hx_ctor_nx3_NPart(this, voices, type, clef, clefDisplay, key, keyDisplay);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_NPart(global::nx3.NPart __temp_me69, global::Array<object> voices, global::nx3.EPartType type, global::nx3.EClef clef, global::nx3.EDisplayALN clefDisplay, global::nx3.EKey key, global::nx3.EDisplayALN keyDisplay){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NPart.hx"
				__temp_me69.nvoices = voices;
				if (( __temp_me69.nvoices.length > 2 )) {
					#line 14 "F:\\nx3\\src\\nx3\\NPart.hx"
					throw global::haxe.lang.HaxeException.wrap("For now, NPart can\'t have more than two voices");
				}
				
				#line 16 "F:\\nx3\\src\\nx3\\NPart.hx"
				if (( type == default(global::nx3.EPartType) )) {
					#line 16 "F:\\nx3\\src\\nx3\\NPart.hx"
					__temp_me69.type = global::nx3.EPartType.Normal;
				}
				 else {
					#line 16 "F:\\nx3\\src\\nx3\\NPart.hx"
					__temp_me69.type = type;
				}
				
				#line 18 "F:\\nx3\\src\\nx3\\NPart.hx"
				__temp_me69.clef = clef;
				if (( clefDisplay == default(global::nx3.EDisplayALN) )) {
					#line 19 "F:\\nx3\\src\\nx3\\NPart.hx"
					__temp_me69.clefDisplay = global::nx3.EDisplayALN.Layout;
				}
				 else {
					#line 19 "F:\\nx3\\src\\nx3\\NPart.hx"
					__temp_me69.clefDisplay = clefDisplay;
				}
				
				#line 21 "F:\\nx3\\src\\nx3\\NPart.hx"
				__temp_me69.key = key;
				if (( keyDisplay == default(global::nx3.EDisplayALN) )) {
					#line 22 "F:\\nx3\\src\\nx3\\NPart.hx"
					__temp_me69.keyDisplay = global::nx3.EDisplayALN.Layout;
				}
				 else {
					#line 22 "F:\\nx3\\src\\nx3\\NPart.hx"
					__temp_me69.keyDisplay = keyDisplay;
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
				return new global::nx3.NPart(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
				return new global::nx3.NPart(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ), ((global::nx3.EPartType) (arr[1]) ), ((global::nx3.EClef) (arr[2]) ), ((global::nx3.EDisplayALN) (arr[3]) ), ((global::nx3.EKey) (arr[4]) ), ((global::nx3.EDisplayALN) (arr[5]) ));
			}
			#line default
		}
		
		
		public  global::nx3.EPartType type;
		
		public  global::Array<object> nvoices;
		
		public  global::nx3.EClef clef;
		
		public  global::nx3.EDisplayALN clefDisplay;
		
		public  global::nx3.EKey key;
		
		public  global::nx3.EDisplayALN keyDisplay;
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
				switch (hash){
					case 701614691:
					{
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						this.keyDisplay = ((global::nx3.EDisplayALN) (@value) );
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						return @value;
					}
					
					
					case 5343647:
					{
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						this.key = ((global::nx3.EKey) (@value) );
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						return @value;
					}
					
					
					case 23151640:
					{
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						this.clefDisplay = ((global::nx3.EDisplayALN) (@value) );
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						return @value;
					}
					
					
					case 1103260490:
					{
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						this.clef = ((global::nx3.EClef) (@value) );
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						return @value;
					}
					
					
					case 998432111:
					{
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						this.nvoices = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						return @value;
					}
					
					
					case 1292432058:
					{
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						this.type = ((global::nx3.EPartType) (@value) );
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						return @value;
					}
					
					
					default:
					{
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
				switch (hash){
					case 701614691:
					{
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						return this.keyDisplay;
					}
					
					
					case 5343647:
					{
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						return this.key;
					}
					
					
					case 23151640:
					{
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						return this.clefDisplay;
					}
					
					
					case 1103260490:
					{
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						return this.clef;
					}
					
					
					case 998432111:
					{
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						return this.nvoices;
					}
					
					
					case 1292432058:
					{
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						return this.type;
					}
					
					
					default:
					{
						#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
				baseArr.push("keyDisplay");
				#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
				baseArr.push("key");
				#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
				baseArr.push("clefDisplay");
				#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
				baseArr.push("clef");
				#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
				baseArr.push("nvoices");
				#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
				baseArr.push("type");
				#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
				{
					#line 7 "F:\\nx3\\src\\nx3\\NPart.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


