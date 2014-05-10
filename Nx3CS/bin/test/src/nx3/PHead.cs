
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PHead : global::haxe.lang.HxObject {
		public    PHead(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PHead(global::nx3.NHead nhead){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PHead.hx"
				global::nx3.PHead.__hx_ctor_nx3_PHead(this, nhead);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PHead(global::nx3.PHead __temp_me100, global::nx3.NHead nhead){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PHead.hx"
				__temp_me100.nhead = nhead;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
				return new global::nx3.PHead(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
				return new global::nx3.PHead(((global::nx3.NHead) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.NHead nhead;
		
		public  global::nx3.PNote note;
		
		public virtual   global::nx3.PNote getNote(){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\PHead.hx"
				return this.note;
			}
			#line default
		}
		
		
		public virtual   string toString(){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\PHead.hx"
				return global::haxe.lang.Runtime.concat("PHead  \r", global::Std.@string(this.nhead));
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
				switch (hash){
					case 1225398258:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
						this.note = ((global::nx3.PNote) (@value) );
						#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
						return @value;
					}
					
					
					case 455014542:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
						this.nhead = ((global::nx3.NHead) (@value) );
						#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
						return @value;
					}
					
					
					default:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
				switch (hash){
					case 946786476:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("toString") ), ((int) (946786476) ))) );
					}
					
					
					case 462210984:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNote") ), ((int) (462210984) ))) );
					}
					
					
					case 1225398258:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
						return this.note;
					}
					
					
					case 455014542:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
						return this.nhead;
					}
					
					
					default:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
				switch (hash){
					case 946786476:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
						return this.toString();
					}
					
					
					case 462210984:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
						return this.getNote();
					}
					
					
					default:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
				baseArr.push("note");
				#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
				baseArr.push("nhead");
				#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
				{
					#line 7 "F:\\nx3\\src\\nx3\\PHead.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
		public override string ToString(){
			return this.toString();
		}
		
		
	}
}


