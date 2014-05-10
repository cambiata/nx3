
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VBeamgroup : global::haxe.lang.HxObject {
		public    VBeamgroup(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VBeamgroup(global::Array<object> vnotes){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				global::nx3.VBeamgroup.__hx_ctor_nx3_VBeamgroup(this, vnotes);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VBeamgroup(global::nx3.VBeamgroup __temp_me165, global::Array<object> vnotes){
			unchecked {
				#line 76 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				__temp_me165.@value = default(global::haxe.lang.Null<int>);
				#line 17 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				__temp_me165.vnotes = vnotes;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				return new global::nx3.VBeamgroup(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				return new global::nx3.VBeamgroup(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ));
			}
			#line default
		}
		
		
		public  global::Array<object> vnotes;
		
		public  global::nx3.EDirectionUD direction;
		
		public virtual   global::nx3.EDirectionUD getDirection(){
			unchecked {
				#line 23 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				if (( this.direction != default(global::nx3.EDirectionUD) )) {
					#line 23 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
					return this.direction;
				}
				
				#line 24 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				this.direction = new global::nx3.VBeamgroupDirectionCalculator(((global::nx3.VBeamgroup) (this) )).getDirection();
				return this.direction;
			}
			#line default
		}
		
		
		public virtual   global::nx3.EDirectionUD setDirection(global::nx3.EDirectionUD val){
			unchecked {
				#line 29 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				return this.direction = val;
			}
			#line default
		}
		
		
		public  global::nx3.EDirectionUD calculatedDirection;
		
		public virtual   global::nx3.EDirectionUD getCalculatedDirection(){
			unchecked {
				#line 35 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				if (( this.calculatedDirection == default(global::nx3.EDirectionUD) )) {
					#line 35 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
					throw global::haxe.lang.HaxeException.wrap("direction is not calculated");
				}
				
				#line 36 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				return this.calculatedDirection;
			}
			#line default
		}
		
		
		public virtual   void setCalculatedDirection(global::nx3.EDirectionUD direction){
			unchecked {
				#line 41 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				this.calculatedDirection = direction;
			}
			#line default
		}
		
		
		public  global::nx3.VBeamgroupFrameCalculator calculator;
		
		public  object frame;
		
		public virtual   object getFrame(){
			unchecked {
				#line 49 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				if (( ! (global::haxe.lang.Runtime.refEq(this.frame, default(object))) )) {
					#line 49 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
					return this.frame;
				}
				
				#line 51 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				global::nx3.NNote firstnote = ((global::nx3.VNote) (this.vnotes[0]) ).nnote;
				#line 55 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				if ( ! (string.Equals(global::Type.enumConstructor(firstnote.type), "Note")) ) {
					#line 55 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
					return default(object);
				}
				
				#line 56 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				if (( this.vnotes.length == 1 )) {
					#line 58 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
					int stavinglevel = global::nx3.ENoteValTools.stavinglevel(firstnote.@value);
					if (( stavinglevel <= 0 )) {
						#line 59 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return default(object);
					}
					
				}
				
				#line 63 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				if (( this.calculatedDirection == default(global::nx3.EDirectionUD) )) {
					#line 65 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
					throw global::haxe.lang.HaxeException.wrap("error");
				}
				
				#line 70 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				this.calculator = new global::nx3.VBeamgroupFrameCalculator(((global::nx3.VBeamgroup) (this) ));
				this.frame = this.calculator.getFrame();
				#line 73 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				return this.frame;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<int> @value;
		
		public virtual   int getValue(){
			unchecked {
				#line 79 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				if (this.@value.hasValue) {
					#line 79 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
					return this.@value.@value;
				}
				
				#line 80 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				this.@value = new global::haxe.lang.Null<int>(0, true);
				{
					#line 81 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
					int _g = 0;
					#line 81 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
					global::Array<object> _g1 = this.vnotes;
					#line 81 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
					while (( _g < _g1.length )){
						#line 81 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						global::nx3.VNote vnote = ((global::nx3.VNote) (_g1[_g]) );
						#line 81 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						 ++ _g;
						#line 83 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						{
							#line 83 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
							global::nx3.VBeamgroup __temp_dynop238 = this;
							#line 83 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
							__temp_dynop238.@value = new global::haxe.lang.Null<int>(( __temp_dynop238.@value.@value + global::nx3.ENoteValTools.@value(vnote.nnote.@value) ), true);
						}
						
					}
					
				}
				
				#line 85 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				return this.@value.@value;
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				switch (hash){
					case 109279277:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						this.frame = ((object) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return @value;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				switch (hash){
					case 834174833:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						this.@value = global::haxe.lang.Null<object>.ofDynamic<int>(@value);
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return @value;
					}
					
					
					case 109279277:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						this.frame = ((object) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return @value;
					}
					
					
					case 936914178:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						this.calculator = ((global::nx3.VBeamgroupFrameCalculator) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return @value;
					}
					
					
					case 1243588129:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						this.calculatedDirection = ((global::nx3.EDirectionUD) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return @value;
					}
					
					
					case 272654911:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						this.direction = ((global::nx3.EDirectionUD) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return @value;
					}
					
					
					case 1307013131:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						this.vnotes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return @value;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				switch (hash){
					case 294620923:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getValue") ), ((int) (294620923) ))) );
					}
					
					
					case 834174833:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return (this.@value).toDynamic();
					}
					
					
					case 1717209015:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getFrame") ), ((int) (1717209015) ))) );
					}
					
					
					case 109279277:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return this.frame;
					}
					
					
					case 936914178:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return this.calculator;
					}
					
					
					case 1440911263:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("setCalculatedDirection") ), ((int) (1440911263) ))) );
					}
					
					
					case 574034731:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getCalculatedDirection") ), ((int) (574034731) ))) );
					}
					
					
					case 1243588129:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return this.calculatedDirection;
					}
					
					
					case 881861181:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("setDirection") ), ((int) (881861181) ))) );
					}
					
					
					case 529989321:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getDirection") ), ((int) (529989321) ))) );
					}
					
					
					case 272654911:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return this.direction;
					}
					
					
					case 1307013131:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return this.vnotes;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				switch (hash){
					case 109279277:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return ((double) (global::haxe.lang.Runtime.toDouble(this.frame)) );
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				switch (hash){
					case 294620923:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return this.getValue();
					}
					
					
					case 1717209015:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return this.getFrame();
					}
					
					
					case 1440911263:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						this.setCalculatedDirection(((global::nx3.EDirectionUD) (dynargs[0]) ));
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						break;
					}
					
					
					case 574034731:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return this.getCalculatedDirection();
					}
					
					
					case 881861181:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return this.setDirection(((global::nx3.EDirectionUD) (dynargs[0]) ));
					}
					
					
					case 529989321:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return this.getDirection();
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				baseArr.push("value");
				#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				baseArr.push("frame");
				#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				baseArr.push("calculator");
				#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				baseArr.push("calculatedDirection");
				#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				baseArr.push("direction");
				#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				baseArr.push("vnotes");
				#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
				{
					#line 12 "F:\\nx3\\src\\nx3\\VBeamgroup.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


