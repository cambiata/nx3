
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class NBar : global::haxe.lang.HxObject {
		public    NBar(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    NBar(global::Array<object> parts, global::nx3.EBarType type, global::nx3.ETime time, global::nx3.EDisplayALN timeDisplay, global::nx3.EAllotment allotment, global::haxe.lang.Null<double> spacing){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\NBar.hx"
				global::nx3.NBar.__hx_ctor_nx3_NBar(this, parts, type, time, timeDisplay, allotment, spacing);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_NBar(global::nx3.NBar __temp_me65, global::Array<object> parts, global::nx3.EBarType type, global::nx3.ETime time, global::nx3.EDisplayALN timeDisplay, global::nx3.EAllotment allotment, global::haxe.lang.Null<double> spacing){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\NBar.hx"
				global::haxe.lang.Null<double> __temp_spacing64 = ( ( ! (spacing.hasValue) ) ? (new global::haxe.lang.Null<double>(((double) (8) ), true)) : (((global::haxe.lang.Null<double>) (spacing) )) );
				__temp_me65.nparts = parts;
				if (( type == default(global::nx3.EBarType) )) {
					#line 15 "F:\\nx3\\src\\nx3\\NBar.hx"
					__temp_me65.type = global::nx3.EBarType.Normal;
				}
				 else {
					#line 15 "F:\\nx3\\src\\nx3\\NBar.hx"
					__temp_me65.type = type;
				}
				
				#line 17 "F:\\nx3\\src\\nx3\\NBar.hx"
				__temp_me65.time = time;
				if (( timeDisplay == default(global::nx3.EDisplayALN) )) {
					#line 18 "F:\\nx3\\src\\nx3\\NBar.hx"
					__temp_me65.timeDisplay = global::nx3.EDisplayALN.Layout;
				}
				 else {
					#line 18 "F:\\nx3\\src\\nx3\\NBar.hx"
					__temp_me65.timeDisplay = timeDisplay;
				}
				
				#line 19 "F:\\nx3\\src\\nx3\\NBar.hx"
				if (( allotment == default(global::nx3.EAllotment) )) {
					#line 19 "F:\\nx3\\src\\nx3\\NBar.hx"
					__temp_me65.allotment = global::nx3.EAllotment.Logaritmic;
				}
				 else {
					#line 19 "F:\\nx3\\src\\nx3\\NBar.hx"
					__temp_me65.allotment = allotment;
				}
				
				#line 20 "F:\\nx3\\src\\nx3\\NBar.hx"
				__temp_me65.spacing = __temp_spacing64.@value;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
				return new global::nx3.NBar(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
				return new global::nx3.NBar(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ), ((global::nx3.EBarType) (arr[1]) ), ((global::nx3.ETime) (arr[2]) ), ((global::nx3.EDisplayALN) (arr[3]) ), ((global::nx3.EAllotment) (arr[4]) ), global::haxe.lang.Null<object>.ofDynamic<double>(arr[5]));
			}
			#line default
		}
		
		
		public  global::Array<object> nparts;
		
		public  global::nx3.EBarType type;
		
		public  global::nx3.ETime time;
		
		public  global::nx3.EDisplayALN timeDisplay;
		
		public  global::nx3.EAllotment allotment;
		
		public  double spacing;
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
				switch (hash){
					case 297481091:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						this.spacing = ((double) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						return @value;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
				switch (hash){
					case 297481091:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						this.spacing = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						return @value;
					}
					
					
					case 239117604:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						this.allotment = ((global::nx3.EAllotment) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						return @value;
					}
					
					
					case 765448629:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						this.timeDisplay = ((global::nx3.EDisplayALN) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						return @value;
					}
					
					
					case 1291635725:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						this.time = ((global::nx3.ETime) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						return @value;
					}
					
					
					case 1292432058:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						this.type = ((global::nx3.EBarType) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						return @value;
					}
					
					
					case 949436914:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						this.nparts = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						return @value;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
				switch (hash){
					case 297481091:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						return this.spacing;
					}
					
					
					case 239117604:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						return this.allotment;
					}
					
					
					case 765448629:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						return this.timeDisplay;
					}
					
					
					case 1291635725:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						return this.time;
					}
					
					
					case 1292432058:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						return this.type;
					}
					
					
					case 949436914:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						return this.nparts;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
				switch (hash){
					case 297481091:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						return this.spacing;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
				baseArr.push("spacing");
				#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
				baseArr.push("allotment");
				#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
				baseArr.push("timeDisplay");
				#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
				baseArr.push("time");
				#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
				baseArr.push("type");
				#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
				baseArr.push("nparts");
				#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
				{
					#line 8 "F:\\nx3\\src\\nx3\\NBar.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


