
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class NNote : global::haxe.lang.HxObject {
		public    NNote(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    NNote(global::nx3.ENoteType type, global::Array<object> heads, global::nx3.ENoteVal @value, global::nx3.EDirectionUAD direction){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\NNote.hx"
				global::nx3.NNote.__hx_ctor_nx3_NNote(this, type, heads, @value, direction);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_NNote(global::nx3.NNote __temp_me68, global::nx3.ENoteType type, global::Array<object> heads, global::nx3.ENoteVal @value, global::nx3.EDirectionUAD direction){
			unchecked {
				#line 24 "F:\\nx3\\src\\nx3\\NNote.hx"
				if (( type == default(global::nx3.ENoteType) )) {
					#line 26 "F:\\nx3\\src\\nx3\\NNote.hx"
					if (( heads != default(global::Array<object>) )) {
						#line 26 "F:\\nx3\\src\\nx3\\NNote.hx"
						type = global::nx3.ENoteType.Note(heads, default(global::nx3.ENotationVariant), default(global::Array<global::nx3.ENoteArticulation>), default(global::Array<object>));
					}
					 else {
						#line 26 "F:\\nx3\\src\\nx3\\NNote.hx"
						type = global::nx3.ENoteType.Note(new global::Array<object>(new object[]{new global::nx3.NHead(((global::nx3.EHeadType) (default(global::nx3.EHeadType)) ), ((global::haxe.lang.Null<int>) (default(global::haxe.lang.Null<int>)) ), ((global::nx3.ESign) (default(global::nx3.ESign)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ))}), default(global::nx3.ENotationVariant), default(global::Array<global::nx3.ENoteArticulation>), default(global::Array<object>));
					}
					
				}
				
				#line 29 "F:\\nx3\\src\\nx3\\NNote.hx"
				if (( type == default(global::nx3.ENoteType) )) {
					#line 29 "F:\\nx3\\src\\nx3\\NNote.hx"
					__temp_me68.type = global::nx3.ENoteType.Note(heads, default(global::nx3.ENotationVariant), default(global::Array<global::nx3.ENoteArticulation>), default(global::Array<object>));
				}
				 else {
					#line 29 "F:\\nx3\\src\\nx3\\NNote.hx"
					__temp_me68.type = type;
				}
				
				#line 30 "F:\\nx3\\src\\nx3\\NNote.hx"
				if (( @value == default(global::nx3.ENoteVal) )) {
					#line 30 "F:\\nx3\\src\\nx3\\NNote.hx"
					__temp_me68.@value = global::nx3.ENoteVal.Nv4;
				}
				 else {
					#line 30 "F:\\nx3\\src\\nx3\\NNote.hx"
					__temp_me68.@value = @value;
				}
				
				#line 31 "F:\\nx3\\src\\nx3\\NNote.hx"
				if (( direction == default(global::nx3.EDirectionUAD) )) {
					#line 31 "F:\\nx3\\src\\nx3\\NNote.hx"
					__temp_me68.direction = global::nx3.EDirectionUAD.Auto;
				}
				 else {
					#line 31 "F:\\nx3\\src\\nx3\\NNote.hx"
					__temp_me68.direction = direction;
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
				return new global::nx3.NNote(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
				return new global::nx3.NNote(((global::nx3.ENoteType) (arr[0]) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[1]) ))) ), ((global::nx3.ENoteVal) (arr[2]) ), ((global::nx3.EDirectionUAD) (arr[3]) ));
			}
			#line default
		}
		
		
		public  global::nx3.ENoteType type;
		
		public  global::nx3.ENoteVal @value;
		
		public  global::nx3.EDirectionUAD direction;
		
		public  global::Array<object> nheads;
		
		public  global::Array<object> nheads_;
		
		public virtual   global::Array<object> get_nheads(){
			unchecked {
				#line 37 "F:\\nx3\\src\\nx3\\NNote.hx"
				if (( this.nheads_ != default(global::Array<object>) )) {
					#line 37 "F:\\nx3\\src\\nx3\\NNote.hx"
					return this.nheads_;
				}
				
				#line 39 "F:\\nx3\\src\\nx3\\NNote.hx"
				{
					#line 39 "F:\\nx3\\src\\nx3\\NNote.hx"
					global::nx3.ENoteType _g = this.type;
					#line 39 "F:\\nx3\\src\\nx3\\NNote.hx"
					switch (global::Type.enumIndex(_g)){
						case 0:
						{
							#line 39 "F:\\nx3\\src\\nx3\\NNote.hx"
							global::Array<object> attributes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (_g.@params[3]) ))) );
							#line 39 "F:\\nx3\\src\\nx3\\NNote.hx"
							global::Array<global::nx3.ENoteArticulation> articulations = ((global::Array<global::nx3.ENoteArticulation>) (global::Array<object>.__hx_cast<global::nx3.ENoteArticulation>(((global::Array) (_g.@params[2]) ))) );
							#line 39 "F:\\nx3\\src\\nx3\\NNote.hx"
							global::nx3.ENotationVariant variant = ((global::nx3.ENotationVariant) (_g.@params[1]) );
							#line 39 "F:\\nx3\\src\\nx3\\NNote.hx"
							global::Array<object> nheads = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (_g.@params[0]) ))) );
							#line 41 "F:\\nx3\\src\\nx3\\NNote.hx"
							{
								#line 43 "F:\\nx3\\src\\nx3\\NNote.hx"
								nheads.sort(( (( global::nx3.NNote_get_nheads_43__Fun.__hx_current != default(global::nx3.NNote_get_nheads_43__Fun) )) ? (global::nx3.NNote_get_nheads_43__Fun.__hx_current) : (global::nx3.NNote_get_nheads_43__Fun.__hx_current = ((global::nx3.NNote_get_nheads_43__Fun) (new global::nx3.NNote_get_nheads_43__Fun()) )) ));
								#line 45 "F:\\nx3\\src\\nx3\\NNote.hx"
								this.nheads_ = nheads;
							}
							
							#line 41 "F:\\nx3\\src\\nx3\\NNote.hx"
							break;
						}
						
						
						case 1:
						{
							#line 39 "F:\\nx3\\src\\nx3\\NNote.hx"
							int level = ((int) (global::haxe.lang.Runtime.toInt(_g.@params[0])) );
							#line 47 "F:\\nx3\\src\\nx3\\NNote.hx"
							this.nheads_ = new global::Array<object>(new object[]{new global::nx3.NHead(((global::nx3.EHeadType) (global::nx3.EHeadType.Pause) ), new global::haxe.lang.Null<int>(level, true), ((global::nx3.ESign) (default(global::nx3.ESign)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ))});
							#line 46 "F:\\nx3\\src\\nx3\\NNote.hx"
							break;
						}
						
						
						default:
						{
							#line 50 "F:\\nx3\\src\\nx3\\NNote.hx"
							this.nheads_ = new global::Array<object>(new object[]{new global::nx3.NHead(((global::nx3.EHeadType) (global::nx3.EHeadType.Other) ), new global::haxe.lang.Null<int>(0, true), ((global::nx3.ESign) (default(global::nx3.ESign)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ))});
							#line 50 "F:\\nx3\\src\\nx3\\NNote.hx"
							break;
						}
						
					}
					
				}
				
				#line 52 "F:\\nx3\\src\\nx3\\NNote.hx"
				return this.nheads_;
			}
			#line default
		}
		
		
		public  global::Array<int> headLevels;
		
		public virtual   global::Array<int> getHeadLevels(){
			unchecked {
				#line 59 "F:\\nx3\\src\\nx3\\NNote.hx"
				if (( this.headLevels != default(global::Array<int>) )) {
					#line 59 "F:\\nx3\\src\\nx3\\NNote.hx"
					return this.headLevels;
				}
				
				#line 60 "F:\\nx3\\src\\nx3\\NNote.hx"
				this.headLevels = new global::Array<int>(new int[]{});
				{
					#line 61 "F:\\nx3\\src\\nx3\\NNote.hx"
					int _g = 0;
					#line 61 "F:\\nx3\\src\\nx3\\NNote.hx"
					global::Array<object> _g1 = this.get_nheads();
					#line 61 "F:\\nx3\\src\\nx3\\NNote.hx"
					while (( _g < _g1.length )){
						#line 61 "F:\\nx3\\src\\nx3\\NNote.hx"
						global::nx3.NHead head = ((global::nx3.NHead) (_g1[_g]) );
						#line 61 "F:\\nx3\\src\\nx3\\NNote.hx"
						 ++ _g;
						#line 61 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.headLevels.push(head.level);
					}
					
				}
				
				#line 62 "F:\\nx3\\src\\nx3\\NNote.hx"
				return this.headLevels;
			}
			#line default
		}
		
		
		public virtual   int getTopLevel(){
			unchecked {
				#line 67 "F:\\nx3\\src\\nx3\\NNote.hx"
				return ((global::nx3.NHead) (this.get_nheads()[0]) ).level;
			}
			#line default
		}
		
		
		public virtual   int getBottomLevel(){
			unchecked {
				#line 72 "F:\\nx3\\src\\nx3\\NNote.hx"
				return ((global::nx3.NHead) (this.get_nheads()[( this.get_nheads().length - 1 )]) ).level;
			}
			#line default
		}
		
		
		public  global::Array<object> ties;
		
		public virtual   global::Array<object> getTies(){
			unchecked {
				#line 78 "F:\\nx3\\src\\nx3\\NNote.hx"
				if (( this.ties != default(global::Array<object>) )) {
					#line 78 "F:\\nx3\\src\\nx3\\NNote.hx"
					return this.ties;
				}
				
				#line 79 "F:\\nx3\\src\\nx3\\NNote.hx"
				this.ties = new global::Array<object>();
				{
					#line 80 "F:\\nx3\\src\\nx3\\NNote.hx"
					int _g = 0;
					#line 80 "F:\\nx3\\src\\nx3\\NNote.hx"
					global::Array<object> _g1 = this.get_nheads();
					#line 80 "F:\\nx3\\src\\nx3\\NNote.hx"
					while (( _g < _g1.length )){
						#line 80 "F:\\nx3\\src\\nx3\\NNote.hx"
						global::nx3.NHead head = ((global::nx3.NHead) (_g1[_g]) );
						#line 80 "F:\\nx3\\src\\nx3\\NNote.hx"
						 ++ _g;
						#line 82 "F:\\nx3\\src\\nx3\\NNote.hx"
						if (( head.tie != default(global::nx3.ETie) )) {
							#line 82 "F:\\nx3\\src\\nx3\\NNote.hx"
							this.ties.push(head.tie);
						}
						
					}
					
				}
				
				#line 84 "F:\\nx3\\src\\nx3\\NNote.hx"
				return this.ties;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
				switch (hash){
					case 1291633955:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.ties = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return @value;
					}
					
					
					case 451081135:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.headLevels = ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (@value) ))) );
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return @value;
					}
					
					
					case 1530469530:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.nheads_ = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return @value;
					}
					
					
					case 536511525:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.nheads = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return @value;
					}
					
					
					case 272654911:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.direction = ((global::nx3.EDirectionUAD) (@value) );
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return @value;
					}
					
					
					case 834174833:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.@value = ((global::nx3.ENoteVal) (@value) );
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return @value;
					}
					
					
					case 1292432058:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.type = ((global::nx3.ENoteType) (@value) );
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return @value;
					}
					
					
					default:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
				switch (hash){
					case 528446681:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getTies") ), ((int) (528446681) ))) );
					}
					
					
					case 1291633955:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.ties;
					}
					
					
					case 1603403171:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBottomLevel") ), ((int) (1603403171) ))) );
					}
					
					
					case 1713825125:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getTopLevel") ), ((int) (1713825125) ))) );
					}
					
					
					case 2002079717:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHeadLevels") ), ((int) (2002079717) ))) );
					}
					
					
					case 451081135:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.headLevels;
					}
					
					
					case 276952046:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_nheads") ), ((int) (276952046) ))) );
					}
					
					
					case 1530469530:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.nheads_;
					}
					
					
					case 536511525:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						if (handleProperties) {
							#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
							return this.get_nheads();
						}
						 else {
							#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
							return this.nheads;
						}
						
					}
					
					
					case 272654911:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.direction;
					}
					
					
					case 834174833:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.@value;
					}
					
					
					case 1292432058:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.type;
					}
					
					
					default:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
				switch (hash){
					case 528446681:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.getTies();
					}
					
					
					case 1603403171:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.getBottomLevel();
					}
					
					
					case 1713825125:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.getTopLevel();
					}
					
					
					case 2002079717:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.getHeadLevels();
					}
					
					
					case 276952046:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.get_nheads();
					}
					
					
					default:
					{
						#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("ties");
				#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("headLevels");
				#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("nheads_");
				#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("nheads");
				#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("direction");
				#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("value");
				#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("type");
				#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
				{
					#line 14 "F:\\nx3\\src\\nx3\\NNote.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class NNote_get_nheads_43__Fun : global::haxe.lang.Function {
		public    NNote_get_nheads_43__Fun() : base(2, 1){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::nx3.NNote_get_nheads_43__Fun __hx_current;
		
		public override   double __hx_invoke2_f(double __fn_float1, object __fn_dyn1, double __fn_float2, object __fn_dyn2){
			unchecked {
				#line 43 "F:\\nx3\\src\\nx3\\NNote.hx"
				global::nx3.NHead b = ( (global::haxe.lang.Runtime.eq(__fn_dyn2, global::haxe.lang.Runtime.undefined)) ? (((global::nx3.NHead) (((object) (__fn_float2) )) )) : (((global::nx3.NHead) (__fn_dyn2) )) );
				#line 43 "F:\\nx3\\src\\nx3\\NNote.hx"
				global::nx3.NHead a = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (((global::nx3.NHead) (((object) (__fn_float1) )) )) : (((global::nx3.NHead) (__fn_dyn1) )) );
				#line 43 "F:\\nx3\\src\\nx3\\NNote.hx"
				return ((double) (global::Reflect.compare<int>(a.level, b.level)) );
			}
			#line default
		}
		
		
	}
}


