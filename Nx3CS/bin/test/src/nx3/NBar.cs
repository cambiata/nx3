
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class NBar : global::haxe.lang.HxObject {
		public    NBar(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    NBar(global::Array<object> parts, global::nx3.EBarType type, global::nx3.ETime time, global::nx3.EDisplayALN timeDisplay, global::nx3.EAllotment allotment, global::haxe.lang.Null<double> spacing){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\NBar.hx"
				global::nx3.NBar.__hx_ctor_nx3_NBar(this, parts, type, time, timeDisplay, allotment, spacing);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_NBar(global::nx3.NBar __temp_me67, global::Array<object> parts, global::nx3.EBarType type, global::nx3.ETime time, global::nx3.EDisplayALN timeDisplay, global::nx3.EAllotment allotment, global::haxe.lang.Null<double> spacing){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\NBar.hx"
				global::haxe.lang.Null<double> __temp_spacing66 = ( ( ! (spacing.hasValue) ) ? (new global::haxe.lang.Null<double>(((double) (8) ), true)) : (((global::haxe.lang.Null<double>) (spacing) )) );
				__temp_me67.nparts = parts;
				{
					#line 16 "F:\\nx3\\src\\nx3\\NBar.hx"
					int _g = 0;
					#line 16 "F:\\nx3\\src\\nx3\\NBar.hx"
					while (( _g < parts.length )){
						#line 16 "F:\\nx3\\src\\nx3\\NBar.hx"
						global::nx3.NPart part = ((global::nx3.NPart) (parts[_g]) );
						#line 16 "F:\\nx3\\src\\nx3\\NBar.hx"
						 ++ _g;
						#line 16 "F:\\nx3\\src\\nx3\\NBar.hx"
						part.nbar = __temp_me67;
					}
					
				}
				
				#line 18 "F:\\nx3\\src\\nx3\\NBar.hx"
				if (( type == default(global::nx3.EBarType) )) {
					#line 18 "F:\\nx3\\src\\nx3\\NBar.hx"
					__temp_me67.type = global::nx3.EBarType.Normal;
				}
				 else {
					#line 18 "F:\\nx3\\src\\nx3\\NBar.hx"
					__temp_me67.type = type;
				}
				
				#line 20 "F:\\nx3\\src\\nx3\\NBar.hx"
				__temp_me67.time = time;
				if (( timeDisplay == default(global::nx3.EDisplayALN) )) {
					#line 21 "F:\\nx3\\src\\nx3\\NBar.hx"
					__temp_me67.timeDisplay = global::nx3.EDisplayALN.Layout;
				}
				 else {
					#line 21 "F:\\nx3\\src\\nx3\\NBar.hx"
					__temp_me67.timeDisplay = timeDisplay;
				}
				
				#line 22 "F:\\nx3\\src\\nx3\\NBar.hx"
				if (( allotment == default(global::nx3.EAllotment) )) {
					#line 22 "F:\\nx3\\src\\nx3\\NBar.hx"
					__temp_me67.allotment = global::nx3.EAllotment.Logaritmic;
				}
				 else {
					#line 22 "F:\\nx3\\src\\nx3\\NBar.hx"
					__temp_me67.allotment = allotment;
				}
				
				#line 23 "F:\\nx3\\src\\nx3\\NBar.hx"
				__temp_me67.spacing = __temp_spacing66.@value;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
				return new global::nx3.NBar(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
				return new global::nx3.NBar(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ), ((global::nx3.EBarType) (arr[1]) ), ((global::nx3.ETime) (arr[2]) ), ((global::nx3.EDisplayALN) (arr[3]) ), ((global::nx3.EAllotment) (arr[4]) ), global::haxe.lang.Null<object>.ofDynamic<double>(arr[5]));
			}
			#line default
		}
		
		
		public  global::nx3.NScore nscore;
		
		public  global::Array<object> nparts;
		
		public  global::nx3.EBarType type;
		
		public  global::nx3.ETime time;
		
		public  global::nx3.EDisplayALN timeDisplay;
		
		public  global::nx3.EAllotment allotment;
		
		public  double spacing;
		
		public virtual   global::nx3.NNote getNNote(int partIdx, int voiceIdx, int noteIdx){
			unchecked {
				#line 35 "F:\\nx3\\src\\nx3\\NBar.hx"
				return this.getNPart(partIdx).getNVoice(voiceIdx).getNNote(noteIdx);
			}
			#line default
		}
		
		
		public virtual   global::nx3.NPart getNPart(int idx){
			unchecked {
				#line 37 "F:\\nx3\\src\\nx3\\NBar.hx"
				if (( ( idx < 0 ) || ( idx > this.nparts.length ) )) {
					#line 37 "F:\\nx3\\src\\nx3\\NBar.hx"
					return default(global::nx3.NPart);
				}
				 else {
					#line 37 "F:\\nx3\\src\\nx3\\NBar.hx"
					return ((global::nx3.NPart) (this.nparts[idx]) );
				}
				
			}
			#line default
		}
		
		
		public virtual   object iterator(){
			unchecked {
				#line 39 "F:\\nx3\\src\\nx3\\NBar.hx"
				return ((object) (new global::_Array.ArrayIterator<object>(((global::Array<object>) (this.nparts) ))) );
			}
			#line default
		}
		
		
		public  int length;
		
		public virtual   int get_length(){
			unchecked {
				#line 41 "F:\\nx3\\src\\nx3\\NBar.hx"
				return this.nparts.length;
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
				switch (hash){
					case 520590566:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						this.length = ((int) (@value) );
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return @value;
					}
					
					
					case 297481091:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						this.spacing = ((double) (@value) );
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return @value;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
				switch (hash){
					case 520590566:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						this.length = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return @value;
					}
					
					
					case 297481091:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						this.spacing = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return @value;
					}
					
					
					case 239117604:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						this.allotment = ((global::nx3.EAllotment) (@value) );
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return @value;
					}
					
					
					case 765448629:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						this.timeDisplay = ((global::nx3.EDisplayALN) (@value) );
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return @value;
					}
					
					
					case 1291635725:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						this.time = ((global::nx3.ETime) (@value) );
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return @value;
					}
					
					
					case 1292432058:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						this.type = ((global::nx3.EBarType) (@value) );
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return @value;
					}
					
					
					case 949436914:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						this.nparts = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return @value;
					}
					
					
					case 1947935780:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						this.nscore = ((global::nx3.NScore) (@value) );
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return @value;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
				switch (hash){
					case 261031087:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_length") ), ((int) (261031087) ))) );
					}
					
					
					case 520590566:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						if (handleProperties) {
							#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
							return this.get_length();
						}
						 else {
							#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
							return this.length;
						}
						
					}
					
					
					case 328878574:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("iterator") ), ((int) (328878574) ))) );
					}
					
					
					case 1796599563:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNPart") ), ((int) (1796599563) ))) );
					}
					
					
					case 1775117066:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNNote") ), ((int) (1775117066) ))) );
					}
					
					
					case 297481091:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return this.spacing;
					}
					
					
					case 239117604:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return this.allotment;
					}
					
					
					case 765448629:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return this.timeDisplay;
					}
					
					
					case 1291635725:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return this.time;
					}
					
					
					case 1292432058:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return this.type;
					}
					
					
					case 949436914:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return this.nparts;
					}
					
					
					case 1947935780:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return this.nscore;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
				switch (hash){
					case 520590566:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						if (handleProperties) {
							#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
							return ((double) (this.get_length()) );
						}
						 else {
							#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
							return ((double) (this.length) );
						}
						
					}
					
					
					case 297481091:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return this.spacing;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
				switch (hash){
					case 261031087:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return this.get_length();
					}
					
					
					case 328878574:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return this.iterator();
					}
					
					
					case 1796599563:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return this.getNPart(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ));
					}
					
					
					case 1775117066:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return this.getNNote(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ), ((int) (global::haxe.lang.Runtime.toInt(dynargs[1])) ), ((int) (global::haxe.lang.Runtime.toInt(dynargs[2])) ));
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
				baseArr.push("length");
				#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
				baseArr.push("spacing");
				#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
				baseArr.push("allotment");
				#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
				baseArr.push("timeDisplay");
				#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
				baseArr.push("time");
				#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
				baseArr.push("type");
				#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
				baseArr.push("nparts");
				#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
				baseArr.push("nscore");
				#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
				{
					#line 10 "F:\\nx3\\src\\nx3\\NBar.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


