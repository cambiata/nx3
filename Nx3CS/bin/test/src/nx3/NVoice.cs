
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
				#line 20 "F:\\nx3\\src\\nx3\\NVoice.hx"
				global::nx3.NVoice.__hx_ctor_nx3_NVoice(this, notes, type, direction);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_NVoice(global::nx3.NVoice __temp_me73, global::Array<object> notes, global::nx3.EVoiceType type, global::nx3.EDirectionUAD direction){
			unchecked {
				#line 23 "F:\\nx3\\src\\nx3\\NVoice.hx"
				if (( ( notes == default(global::Array<object>) ) || ( notes.length == 0 ) )) {
					#line 25 "F:\\nx3\\src\\nx3\\NVoice.hx"
					__temp_me73.nnotes = new global::Array<object>(new object[]{});
					__temp_me73.type = global::nx3.EVoiceType.Barpause(0);
				}
				 else {
					#line 30 "F:\\nx3\\src\\nx3\\NVoice.hx"
					__temp_me73.nnotes = notes;
					if (( type != default(global::nx3.EVoiceType) )) {
						#line 31 "F:\\nx3\\src\\nx3\\NVoice.hx"
						__temp_me73.type = type;
					}
					 else {
						#line 31 "F:\\nx3\\src\\nx3\\NVoice.hx"
						__temp_me73.type = global::nx3.EVoiceType.Normal;
					}
					
				}
				
				#line 34 "F:\\nx3\\src\\nx3\\NVoice.hx"
				{
					#line 34 "F:\\nx3\\src\\nx3\\NVoice.hx"
					int _g = 0;
					#line 34 "F:\\nx3\\src\\nx3\\NVoice.hx"
					while (( _g < notes.length )){
						#line 34 "F:\\nx3\\src\\nx3\\NVoice.hx"
						global::nx3.NNote note = ((global::nx3.NNote) (notes[_g]) );
						#line 34 "F:\\nx3\\src\\nx3\\NVoice.hx"
						 ++ _g;
						#line 34 "F:\\nx3\\src\\nx3\\NVoice.hx"
						note.nvoice = __temp_me73;
					}
					
				}
				
				#line 36 "F:\\nx3\\src\\nx3\\NVoice.hx"
				if (( direction != default(global::nx3.EDirectionUAD) )) {
					#line 36 "F:\\nx3\\src\\nx3\\NVoice.hx"
					__temp_me73.direction = direction;
				}
				 else {
					#line 36 "F:\\nx3\\src\\nx3\\NVoice.hx"
					__temp_me73.direction = global::nx3.EDirectionUAD.Auto;
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
		
		public  global::nx3.NPart npart;
		
		public virtual   object iterator(){
			unchecked {
				#line 39 "F:\\nx3\\src\\nx3\\NVoice.hx"
				return ((object) (new global::_Array.ArrayIterator<object>(((global::Array<object>) (this.nnotes) ))) );
			}
			#line default
		}
		
		
		public  int length;
		
		public virtual   int get_length(){
			unchecked {
				#line 41 "F:\\nx3\\src\\nx3\\NVoice.hx"
				return this.nnotes.length;
			}
			#line default
		}
		
		
		public virtual   global::nx3.NNote getNNote(int idx){
			unchecked {
				#line 44 "F:\\nx3\\src\\nx3\\NVoice.hx"
				if (( ( idx < 0 ) || ( idx > this.nnotes.length ) )) {
					#line 44 "F:\\nx3\\src\\nx3\\NVoice.hx"
					return default(global::nx3.NNote);
				}
				 else {
					#line 44 "F:\\nx3\\src\\nx3\\NVoice.hx"
					return ((global::nx3.NNote) (this.nnotes[idx]) );
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
				switch (hash){
					case 520590566:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						this.length = ((int) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
				switch (hash){
					case 520590566:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						this.length = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return @value;
					}
					
					
					case 543535969:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						this.npart = ((global::nx3.NPart) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return @value;
					}
					
					
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
					case 1775117066:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNNote") ), ((int) (1775117066) ))) );
					}
					
					
					case 261031087:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_length") ), ((int) (261031087) ))) );
					}
					
					
					case 520590566:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						if (handleProperties) {
							#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
							return this.get_length();
						}
						 else {
							#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
							return this.length;
						}
						
					}
					
					
					case 328878574:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("iterator") ), ((int) (328878574) ))) );
					}
					
					
					case 543535969:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return this.npart;
					}
					
					
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
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
				switch (hash){
					case 520590566:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						if (handleProperties) {
							#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
							return ((double) (this.get_length()) );
						}
						 else {
							#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
							return ((double) (this.length) );
						}
						
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
				switch (hash){
					case 1775117066:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return this.getNNote(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ));
					}
					
					
					case 261031087:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return this.get_length();
					}
					
					
					case 328878574:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return this.iterator();
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
				baseArr.push("length");
				#line 11 "F:\\nx3\\src\\nx3\\NVoice.hx"
				baseArr.push("npart");
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


