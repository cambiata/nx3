
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class NPart : global::haxe.lang.HxObject {
		public    NPart(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    NPart(global::Array<object> voices, global::nx3.EPartType type, global::nx3.EClef clef, global::nx3.EDisplayALN clefDisplay, global::nx3.EKey key, global::nx3.EDisplayALN keyDisplay){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NPart.hx"
				global::nx3.NPart.__hx_ctor_nx3_NPart(this, voices, type, clef, clefDisplay, key, keyDisplay);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_NPart(global::nx3.NPart __temp_me71, global::Array<object> voices, global::nx3.EPartType type, global::nx3.EClef clef, global::nx3.EDisplayALN clefDisplay, global::nx3.EKey key, global::nx3.EDisplayALN keyDisplay){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\NPart.hx"
				__temp_me71.nvoices = voices;
				{
					#line 14 "F:\\nx3\\src\\nx3\\NPart.hx"
					int _g = 0;
					#line 14 "F:\\nx3\\src\\nx3\\NPart.hx"
					while (( _g < voices.length )){
						#line 14 "F:\\nx3\\src\\nx3\\NPart.hx"
						global::nx3.NVoice voice = ((global::nx3.NVoice) (voices[_g]) );
						#line 14 "F:\\nx3\\src\\nx3\\NPart.hx"
						 ++ _g;
						#line 14 "F:\\nx3\\src\\nx3\\NPart.hx"
						voice.npart = __temp_me71;
					}
					
				}
				
				#line 16 "F:\\nx3\\src\\nx3\\NPart.hx"
				if (( __temp_me71.nvoices.length > 2 )) {
					#line 18 "F:\\nx3\\src\\nx3\\NPart.hx"
					throw global::haxe.lang.HaxeException.wrap("For now, NPart can\'t have more than two voices");
				}
				
				#line 20 "F:\\nx3\\src\\nx3\\NPart.hx"
				if (( type == default(global::nx3.EPartType) )) {
					#line 20 "F:\\nx3\\src\\nx3\\NPart.hx"
					__temp_me71.type = global::nx3.EPartType.Normal;
				}
				 else {
					#line 20 "F:\\nx3\\src\\nx3\\NPart.hx"
					__temp_me71.type = type;
				}
				
				#line 22 "F:\\nx3\\src\\nx3\\NPart.hx"
				__temp_me71.clef = clef;
				if (( clefDisplay == default(global::nx3.EDisplayALN) )) {
					#line 23 "F:\\nx3\\src\\nx3\\NPart.hx"
					__temp_me71.clefDisplay = global::nx3.EDisplayALN.Layout;
				}
				 else {
					#line 23 "F:\\nx3\\src\\nx3\\NPart.hx"
					__temp_me71.clefDisplay = clefDisplay;
				}
				
				#line 25 "F:\\nx3\\src\\nx3\\NPart.hx"
				__temp_me71.key = key;
				if (( keyDisplay == default(global::nx3.EDisplayALN) )) {
					#line 26 "F:\\nx3\\src\\nx3\\NPart.hx"
					__temp_me71.keyDisplay = global::nx3.EDisplayALN.Layout;
				}
				 else {
					#line 26 "F:\\nx3\\src\\nx3\\NPart.hx"
					__temp_me71.keyDisplay = keyDisplay;
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
				return new global::nx3.NPart(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
				return new global::nx3.NPart(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ), ((global::nx3.EPartType) (arr[1]) ), ((global::nx3.EClef) (arr[2]) ), ((global::nx3.EDisplayALN) (arr[3]) ), ((global::nx3.EKey) (arr[4]) ), ((global::nx3.EDisplayALN) (arr[5]) ));
			}
			#line default
		}
		
		
		public virtual   object iterator(){
			unchecked {
				#line 29 "F:\\nx3\\src\\nx3\\NPart.hx"
				return ((object) (new global::_Array.ArrayIterator<object>(((global::Array<object>) (this.nvoices) ))) );
			}
			#line default
		}
		
		
		public  int length;
		
		public virtual   int get_length(){
			unchecked {
				#line 31 "F:\\nx3\\src\\nx3\\NPart.hx"
				return this.nvoices.length;
			}
			#line default
		}
		
		
		public  global::nx3.NBar nbar;
		
		public  global::nx3.EPartType type;
		
		public  global::Array<object> nvoices;
		
		public  global::nx3.EClef clef;
		
		public  global::nx3.EDisplayALN clefDisplay;
		
		public  global::nx3.EKey key;
		
		public  global::nx3.EDisplayALN keyDisplay;
		
		public virtual   global::nx3.NVoice getNVoice(int idx){
			unchecked {
				#line 42 "F:\\nx3\\src\\nx3\\NPart.hx"
				if (( ( idx < 0 ) || ( idx > this.nvoices.length ) )) {
					#line 42 "F:\\nx3\\src\\nx3\\NPart.hx"
					return default(global::nx3.NVoice);
				}
				 else {
					#line 42 "F:\\nx3\\src\\nx3\\NPart.hx"
					return ((global::nx3.NVoice) (this.nvoices[idx]) );
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
				switch (hash){
					case 520590566:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						this.length = ((int) (@value) );
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return @value;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
				switch (hash){
					case 701614691:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						this.keyDisplay = ((global::nx3.EDisplayALN) (@value) );
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return @value;
					}
					
					
					case 5343647:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						this.key = ((global::nx3.EKey) (@value) );
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return @value;
					}
					
					
					case 23151640:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						this.clefDisplay = ((global::nx3.EDisplayALN) (@value) );
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return @value;
					}
					
					
					case 1103260490:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						this.clef = ((global::nx3.EClef) (@value) );
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return @value;
					}
					
					
					case 998432111:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						this.nvoices = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return @value;
					}
					
					
					case 1292432058:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						this.type = ((global::nx3.EPartType) (@value) );
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return @value;
					}
					
					
					case 1224747557:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						this.nbar = ((global::nx3.NBar) (@value) );
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return @value;
					}
					
					
					case 520590566:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						this.length = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return @value;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
				switch (hash){
					case 1170001818:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNVoice") ), ((int) (1170001818) ))) );
					}
					
					
					case 701614691:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return this.keyDisplay;
					}
					
					
					case 5343647:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return this.key;
					}
					
					
					case 23151640:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return this.clefDisplay;
					}
					
					
					case 1103260490:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return this.clef;
					}
					
					
					case 998432111:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return this.nvoices;
					}
					
					
					case 1292432058:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return this.type;
					}
					
					
					case 1224747557:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return this.nbar;
					}
					
					
					case 261031087:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_length") ), ((int) (261031087) ))) );
					}
					
					
					case 520590566:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						if (handleProperties) {
							#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
							return this.get_length();
						}
						 else {
							#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
							return this.length;
						}
						
					}
					
					
					case 328878574:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("iterator") ), ((int) (328878574) ))) );
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
				switch (hash){
					case 520590566:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						if (handleProperties) {
							#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
							return ((double) (this.get_length()) );
						}
						 else {
							#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
							return ((double) (this.length) );
						}
						
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
				switch (hash){
					case 1170001818:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return this.getNVoice(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ));
					}
					
					
					case 261031087:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return this.get_length();
					}
					
					
					case 328878574:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return this.iterator();
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
				baseArr.push("keyDisplay");
				#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
				baseArr.push("key");
				#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
				baseArr.push("clefDisplay");
				#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
				baseArr.push("clef");
				#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
				baseArr.push("nvoices");
				#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
				baseArr.push("type");
				#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
				baseArr.push("nbar");
				#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
				baseArr.push("length");
				#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
				{
					#line 9 "F:\\nx3\\src\\nx3\\NPart.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


