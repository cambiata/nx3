
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class NNote : global::haxe.lang.HxObject, global::hxlazy.Lazy {
		public    NNote(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    NNote(global::nx3.ENoteType type, global::Array<object> heads, global::nx3.ENoteVal @value, global::nx3.EDirectionUAD direction){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\NNote.hx"
				global::nx3.NNote.__hx_ctor_nx3_NNote(this, type, heads, @value, direction);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_NNote(global::nx3.NNote __temp_me70, global::nx3.ENoteType type, global::Array<object> heads, global::nx3.ENoteVal @value, global::nx3.EDirectionUAD direction){
			unchecked {
				#line 27 "F:\\nx3\\src\\nx3\\NNote.hx"
				if (( type == default(global::nx3.ENoteType) )) {
					#line 29 "F:\\nx3\\src\\nx3\\NNote.hx"
					if (( heads != default(global::Array<object>) )) {
						#line 29 "F:\\nx3\\src\\nx3\\NNote.hx"
						type = global::nx3.ENoteType.Note(heads, default(global::nx3.ENotationVariant), default(global::Array<global::nx3.ENoteArticulation>), default(global::Array<object>));
					}
					 else {
						#line 29 "F:\\nx3\\src\\nx3\\NNote.hx"
						type = global::nx3.ENoteType.Note(new global::Array<object>(new object[]{new global::nx3.NHead(((global::nx3.EHeadType) (default(global::nx3.EHeadType)) ), ((global::haxe.lang.Null<int>) (default(global::haxe.lang.Null<int>)) ), ((global::nx3.ESign) (default(global::nx3.ESign)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ))}), default(global::nx3.ENotationVariant), default(global::Array<global::nx3.ENoteArticulation>), default(global::Array<object>));
					}
					
				}
				
				#line 32 "F:\\nx3\\src\\nx3\\NNote.hx"
				if (( heads != default(global::Array<object>) )) {
					#line 32 "F:\\nx3\\src\\nx3\\NNote.hx"
					int _g = 0;
					#line 32 "F:\\nx3\\src\\nx3\\NNote.hx"
					while (( _g < heads.length )){
						#line 32 "F:\\nx3\\src\\nx3\\NNote.hx"
						global::nx3.NHead head = ((global::nx3.NHead) (heads[_g]) );
						#line 32 "F:\\nx3\\src\\nx3\\NNote.hx"
						 ++ _g;
						#line 32 "F:\\nx3\\src\\nx3\\NNote.hx"
						head.nnote = __temp_me70;
					}
					
				}
				
				#line 34 "F:\\nx3\\src\\nx3\\NNote.hx"
				if (( type == default(global::nx3.ENoteType) )) {
					#line 34 "F:\\nx3\\src\\nx3\\NNote.hx"
					__temp_me70.type = global::nx3.ENoteType.Note(heads, default(global::nx3.ENotationVariant), default(global::Array<global::nx3.ENoteArticulation>), default(global::Array<object>));
				}
				 else {
					#line 34 "F:\\nx3\\src\\nx3\\NNote.hx"
					__temp_me70.type = type;
				}
				
				#line 35 "F:\\nx3\\src\\nx3\\NNote.hx"
				if (( @value == default(global::nx3.ENoteVal) )) {
					#line 35 "F:\\nx3\\src\\nx3\\NNote.hx"
					__temp_me70.@value = global::nx3.ENoteVal.Nv4;
				}
				 else {
					#line 35 "F:\\nx3\\src\\nx3\\NNote.hx"
					__temp_me70.@value = @value;
				}
				
				#line 36 "F:\\nx3\\src\\nx3\\NNote.hx"
				if (( direction == default(global::nx3.EDirectionUAD) )) {
					#line 36 "F:\\nx3\\src\\nx3\\NNote.hx"
					__temp_me70.direction = global::nx3.EDirectionUAD.Auto;
				}
				 else {
					#line 36 "F:\\nx3\\src\\nx3\\NNote.hx"
					__temp_me70.direction = direction;
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				return new global::nx3.NNote(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				return new global::nx3.NNote(((global::nx3.ENoteType) (arr[0]) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[1]) ))) ), ((global::nx3.ENoteVal) (arr[2]) ), ((global::nx3.EDirectionUAD) (arr[3]) ));
			}
			#line default
		}
		
		
		public  global::nx3.ENoteType type;
		
		public  global::nx3.ENoteVal @value;
		
		public  global::nx3.EDirectionUAD direction;
		
		public  global::Array<object> nheads;
		
		public  global::nx3.NVoice nvoice;
		
		public virtual   object iterator(){
			unchecked {
				#line 39 "F:\\nx3\\src\\nx3\\NNote.hx"
				{
					#line 39 "F:\\nx3\\src\\nx3\\NNote.hx"
					global::Array<object> _this = this.get_nheads();
					#line 39 "F:\\nx3\\src\\nx3\\NNote.hx"
					return new global::_Array.ArrayIterator<object>(((global::Array<object>) (_this) ));
				}
				
			}
			#line default
		}
		
		
		public  int length;
		
		public virtual   int get_length(){
			unchecked {
				#line 41 "F:\\nx3\\src\\nx3\\NNote.hx"
				return this.get_nheads().length;
			}
			#line default
		}
		
		
		public  global::Array<object> nheads_;
		
		public virtual   global::Array<object> get_nheads(){
			unchecked {
				#line 47 "F:\\nx3\\src\\nx3\\NNote.hx"
				if (( this.nheads_ != default(global::Array<object>) )) {
					#line 47 "F:\\nx3\\src\\nx3\\NNote.hx"
					return this.nheads_;
				}
				
				#line 49 "F:\\nx3\\src\\nx3\\NNote.hx"
				{
					#line 49 "F:\\nx3\\src\\nx3\\NNote.hx"
					global::nx3.ENoteType _g = this.type;
					#line 49 "F:\\nx3\\src\\nx3\\NNote.hx"
					switch (global::Type.enumIndex(_g)){
						case 0:
						{
							#line 49 "F:\\nx3\\src\\nx3\\NNote.hx"
							global::Array<object> attributes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (_g.@params[3]) ))) );
							#line 49 "F:\\nx3\\src\\nx3\\NNote.hx"
							global::Array<global::nx3.ENoteArticulation> articulations = ((global::Array<global::nx3.ENoteArticulation>) (global::Array<object>.__hx_cast<global::nx3.ENoteArticulation>(((global::Array) (_g.@params[2]) ))) );
							#line 49 "F:\\nx3\\src\\nx3\\NNote.hx"
							global::nx3.ENotationVariant variant = ((global::nx3.ENotationVariant) (_g.@params[1]) );
							#line 49 "F:\\nx3\\src\\nx3\\NNote.hx"
							global::Array<object> nheads = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (_g.@params[0]) ))) );
							#line 51 "F:\\nx3\\src\\nx3\\NNote.hx"
							{
								#line 53 "F:\\nx3\\src\\nx3\\NNote.hx"
								nheads.sort(( (( global::nx3.NNote_get_nheads_53__Fun.__hx_current != default(global::nx3.NNote_get_nheads_53__Fun) )) ? (global::nx3.NNote_get_nheads_53__Fun.__hx_current) : (global::nx3.NNote_get_nheads_53__Fun.__hx_current = ((global::nx3.NNote_get_nheads_53__Fun) (new global::nx3.NNote_get_nheads_53__Fun()) )) ));
								#line 55 "F:\\nx3\\src\\nx3\\NNote.hx"
								this.nheads_ = nheads;
							}
							
							#line 51 "F:\\nx3\\src\\nx3\\NNote.hx"
							break;
						}
						
						
						case 1:
						{
							#line 49 "F:\\nx3\\src\\nx3\\NNote.hx"
							int level = ((int) (global::haxe.lang.Runtime.toInt(_g.@params[0])) );
							#line 57 "F:\\nx3\\src\\nx3\\NNote.hx"
							this.nheads_ = new global::Array<object>(new object[]{new global::nx3.NHead(((global::nx3.EHeadType) (global::nx3.EHeadType.Pause) ), new global::haxe.lang.Null<int>(level, true), ((global::nx3.ESign) (default(global::nx3.ESign)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ))});
							#line 56 "F:\\nx3\\src\\nx3\\NNote.hx"
							break;
						}
						
						
						default:
						{
							#line 60 "F:\\nx3\\src\\nx3\\NNote.hx"
							this.nheads_ = new global::Array<object>(new object[]{new global::nx3.NHead(((global::nx3.EHeadType) (global::nx3.EHeadType.Other) ), new global::haxe.lang.Null<int>(0, true), ((global::nx3.ESign) (default(global::nx3.ESign)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ))});
							#line 60 "F:\\nx3\\src\\nx3\\NNote.hx"
							break;
						}
						
					}
					
				}
				
				#line 62 "F:\\nx3\\src\\nx3\\NNote.hx"
				return this.nheads_;
			}
			#line default
		}
		
		
		public virtual   global::nx3.NHead getNHead(int idx){
			unchecked {
				#line 66 "F:\\nx3\\src\\nx3\\NNote.hx"
				if (( ( idx < 0 ) || ( idx > this.get_nheads().length ) )) {
					#line 66 "F:\\nx3\\src\\nx3\\NNote.hx"
					return default(global::nx3.NHead);
				}
				 else {
					#line 66 "F:\\nx3\\src\\nx3\\NNote.hx"
					return ((global::nx3.NHead) (this.get_nheads()[idx]) );
				}
				
			}
			#line default
		}
		
		
		public virtual   string toString(){
			unchecked {
				#line 75 "F:\\nx3\\src\\nx3\\NNote.hx"
				string str = "";
				if ( ! (string.Equals(global::Type.enumConstructor(this.type), "Note")) ) {
					#line 76 "F:\\nx3\\src\\nx3\\NNote.hx"
					str = global::haxe.lang.Runtime.concat(str, global::haxe.lang.Runtime.concat(" ", global::Type.enumConstructor(this.type)));
				}
				 else {
					#line 76 "F:\\nx3\\src\\nx3\\NNote.hx"
					str = global::haxe.lang.Runtime.concat(str, "");
				}
				
				#line 77 "F:\\nx3\\src\\nx3\\NNote.hx"
				string heads = "";
				{
					#line 78 "F:\\nx3\\src\\nx3\\NNote.hx"
					int _g = 0;
					#line 78 "F:\\nx3\\src\\nx3\\NNote.hx"
					global::Array<object> _g1 = this.get_nheads();
					#line 78 "F:\\nx3\\src\\nx3\\NNote.hx"
					while (( _g < _g1.length )){
						#line 78 "F:\\nx3\\src\\nx3\\NNote.hx"
						global::nx3.NHead head = ((global::nx3.NHead) (_g1[_g]) );
						#line 78 "F:\\nx3\\src\\nx3\\NNote.hx"
						 ++ _g;
						#line 78 "F:\\nx3\\src\\nx3\\NNote.hx"
						heads = global::haxe.lang.Runtime.concat(heads, head.toString());
					}
					
				}
				
				#line 79 "F:\\nx3\\src\\nx3\\NNote.hx"
				return global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat("NNote(", str), "):"), heads);
			}
			#line default
		}
		
		
		public  global::Array<int> __lazyheadLevels;
		
		
		
		public virtual   global::Array<int> get_headLevels(){
			unchecked {
				#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				if (( this.__lazyheadLevels != default(global::Array<int>) )) {
					#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
					return this.__lazyheadLevels;
				}
				
				#line 98 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				return this.__lazyheadLevels = global::Lambda.array<int>(((global::List<int>) (global::List<object>.__hx_cast<int>(((global::List) (global::Lambda.map<object, object>(this, ( (( global::nx3.NNote_get_headLevels_68__Fun.__hx_current != default(global::nx3.NNote_get_headLevels_68__Fun) )) ? (global::nx3.NNote_get_headLevels_68__Fun.__hx_current) : (global::nx3.NNote_get_headLevels_68__Fun.__hx_current = ((global::nx3.NNote_get_headLevels_68__Fun) (new global::nx3.NNote_get_headLevels_68__Fun()) )) ))) ))) ));
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<int> __lazytopLevel;
		
		
		
		public virtual   global::haxe.lang.Null<int> get_topLevel(){
			unchecked {
				#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				if (this.__lazytopLevel.hasValue) {
					#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
					return this.__lazytopLevel;
				}
				
				#line 98 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				return this.__lazytopLevel = new global::haxe.lang.Null<int>(((global::nx3.NHead) (this.get_nheads()[0]) ).level, true);
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<int> __lazybottomLevel;
		
		
		
		public virtual   global::haxe.lang.Null<int> get_bottomLevel(){
			unchecked {
				#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				if (this.__lazybottomLevel.hasValue) {
					#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
					return this.__lazybottomLevel;
				}
				
				#line 98 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				return this.__lazybottomLevel = new global::haxe.lang.Null<int>(((global::nx3.NHead) (this.get_nheads()[( this.get_nheads().length - 1 )]) ).level, true);
			}
			#line default
		}
		
		
		public  global::Array<object> __lazyties;
		
		
		
		public virtual   global::Array<object> get_ties(){
			unchecked {
				#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				if (( this.__lazyties != default(global::Array<object>) )) {
					#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
					return this.__lazyties;
				}
				
				#line 98 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				return this.__lazyties = global::Lambda.array<object>(global::Lambda.filter<object>(this, ( (( global::nx3.NNote_get_ties_71__Fun.__hx_current != default(global::nx3.NNote_get_ties_71__Fun) )) ? (global::nx3.NNote_get_ties_71__Fun.__hx_current) : (global::nx3.NNote_get_ties_71__Fun.__hx_current = ((global::nx3.NNote_get_ties_71__Fun) (new global::nx3.NNote_get_ties_71__Fun()) )) )).map<object>(( (( global::nx3.NNote_get_ties_71__Fun_0.__hx_current != default(global::nx3.NNote_get_ties_71__Fun_0) )) ? (global::nx3.NNote_get_ties_71__Fun_0.__hx_current) : (global::nx3.NNote_get_ties_71__Fun_0.__hx_current = ((global::nx3.NNote_get_ties_71__Fun_0) (new global::nx3.NNote_get_ties_71__Fun_0()) )) )));
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				switch (hash){
					case 520590566:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.length = ((int) (@value) );
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return @value;
					}
					
					
					default:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				switch (hash){
					case 1176867511:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.__lazyties = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return @value;
					}
					
					
					case 1247311749:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.__lazybottomLevel = global::haxe.lang.Null<object>.ofDynamic<int>(@value);
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return @value;
					}
					
					
					case 1234455107:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.__lazytopLevel = global::haxe.lang.Null<object>.ofDynamic<int>(@value);
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return @value;
					}
					
					
					case 478947395:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.__lazyheadLevels = ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (@value) ))) );
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return @value;
					}
					
					
					case 1530469530:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.nheads_ = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return @value;
					}
					
					
					case 520590566:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.length = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return @value;
					}
					
					
					case 909694596:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.nvoice = ((global::nx3.NVoice) (@value) );
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return @value;
					}
					
					
					case 536511525:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.nheads = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return @value;
					}
					
					
					case 272654911:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.direction = ((global::nx3.EDirectionUAD) (@value) );
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return @value;
					}
					
					
					case 834174833:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.@value = ((global::nx3.ENoteVal) (@value) );
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return @value;
					}
					
					
					case 1292432058:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						this.type = ((global::nx3.ENoteType) (@value) );
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return @value;
					}
					
					
					default:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				switch (hash){
					case 1287094444:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_ties") ), ((int) (1287094444) ))) );
					}
					
					
					case 1291633955:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.get_ties();
					}
					
					
					case 1176867511:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.__lazyties;
					}
					
					
					case 416637488:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_bottomLevel") ), ((int) (416637488) ))) );
					}
					
					
					case 1475586713:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.get_bottomLevel().@value;
					}
					
					
					case 1247311749:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return (this.__lazybottomLevel).toDynamic();
					}
					
					
					case 1967969976:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_topLevel") ), ((int) (1967969976) ))) );
					}
					
					
					case 1077093039:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.get_topLevel().@value;
					}
					
					
					case 1234455107:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return (this.__lazytopLevel).toDynamic();
					}
					
					
					case 282622968:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_headLevels") ), ((int) (282622968) ))) );
					}
					
					
					case 451081135:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.get_headLevels();
					}
					
					
					case 478947395:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.__lazyheadLevels;
					}
					
					
					case 946786476:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("toString") ), ((int) (946786476) ))) );
					}
					
					
					case 1708078136:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNHead") ), ((int) (1708078136) ))) );
					}
					
					
					case 276952046:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_nheads") ), ((int) (276952046) ))) );
					}
					
					
					case 1530469530:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.nheads_;
					}
					
					
					case 261031087:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_length") ), ((int) (261031087) ))) );
					}
					
					
					case 520590566:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						if (handleProperties) {
							#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
							return this.get_length();
						}
						 else {
							#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
							return this.length;
						}
						
					}
					
					
					case 328878574:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("iterator") ), ((int) (328878574) ))) );
					}
					
					
					case 909694596:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.nvoice;
					}
					
					
					case 536511525:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						if (handleProperties) {
							#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
							return this.get_nheads();
						}
						 else {
							#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
							return this.nheads;
						}
						
					}
					
					
					case 272654911:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.direction;
					}
					
					
					case 834174833:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.@value;
					}
					
					
					case 1292432058:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.type;
					}
					
					
					default:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				switch (hash){
					case 1475586713:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return ((double) (this.get_bottomLevel().@value) );
					}
					
					
					case 1077093039:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return ((double) (this.get_topLevel().@value) );
					}
					
					
					case 520590566:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						if (handleProperties) {
							#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
							return ((double) (this.get_length()) );
						}
						 else {
							#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
							return ((double) (this.length) );
						}
						
					}
					
					
					default:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				switch (hash){
					case 1287094444:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.get_ties();
					}
					
					
					case 416637488:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return (this.get_bottomLevel()).toDynamic();
					}
					
					
					case 1967969976:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return (this.get_topLevel()).toDynamic();
					}
					
					
					case 282622968:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.get_headLevels();
					}
					
					
					case 946786476:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.toString();
					}
					
					
					case 1708078136:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.getNHead(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ));
					}
					
					
					case 276952046:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.get_nheads();
					}
					
					
					case 261031087:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.get_length();
					}
					
					
					case 328878574:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return this.iterator();
					}
					
					
					default:
					{
						#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("ties");
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("__lazyties");
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("bottomLevel");
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("__lazybottomLevel");
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("topLevel");
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("__lazytopLevel");
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("headLevels");
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("__lazyheadLevels");
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("nheads_");
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("length");
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("nvoice");
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("nheads");
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("direction");
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("value");
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				baseArr.push("type");
				#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
				{
					#line 16 "F:\\nx3\\src\\nx3\\NNote.hx"
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



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class NNote_get_nheads_53__Fun : global::haxe.lang.Function {
		public    NNote_get_nheads_53__Fun() : base(2, 1){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::nx3.NNote_get_nheads_53__Fun __hx_current;
		
		public override   double __hx_invoke2_f(double __fn_float1, object __fn_dyn1, double __fn_float2, object __fn_dyn2){
			unchecked {
				#line 53 "F:\\nx3\\src\\nx3\\NNote.hx"
				global::nx3.NHead b = ( (global::haxe.lang.Runtime.eq(__fn_dyn2, global::haxe.lang.Runtime.undefined)) ? (((global::nx3.NHead) (((object) (__fn_float2) )) )) : (((global::nx3.NHead) (__fn_dyn2) )) );
				#line 53 "F:\\nx3\\src\\nx3\\NNote.hx"
				global::nx3.NHead a = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (((global::nx3.NHead) (((object) (__fn_float1) )) )) : (((global::nx3.NHead) (__fn_dyn1) )) );
				#line 53 "F:\\nx3\\src\\nx3\\NNote.hx"
				return ((double) (global::Reflect.compare<int>(a.level, b.level)) );
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class NNote_get_headLevels_68__Fun : global::haxe.lang.Function {
		public    NNote_get_headLevels_68__Fun() : base(1, 1){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::nx3.NNote_get_headLevels_68__Fun __hx_current;
		
		public override   double __hx_invoke1_f(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 68 "F:\\nx3\\src\\nx3\\NNote.hx"
				global::nx3.NHead head = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (((global::nx3.NHead) (((object) (__fn_float1) )) )) : (((global::nx3.NHead) (__fn_dyn1) )) );
				#line 68 "F:\\nx3\\src\\nx3\\NNote.hx"
				return ((double) (head.level) );
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class NNote_get_ties_71__Fun_0 : global::haxe.lang.Function {
		public    NNote_get_ties_71__Fun_0() : base(1, 0){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::nx3.NNote_get_ties_71__Fun_0 __hx_current;
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 71 "F:\\nx3\\src\\nx3\\NNote.hx"
				global::nx3.NHead head1 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (((global::nx3.NHead) (((object) (__fn_float1) )) )) : (((global::nx3.NHead) (__fn_dyn1) )) );
				#line 71 "F:\\nx3\\src\\nx3\\NNote.hx"
				return head1.tie;
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class NNote_get_ties_71__Fun : global::haxe.lang.Function {
		public    NNote_get_ties_71__Fun() : base(1, 0){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::nx3.NNote_get_ties_71__Fun __hx_current;
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 71 "F:\\nx3\\src\\nx3\\NNote.hx"
				global::nx3.NHead head = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (((global::nx3.NHead) (((object) (__fn_float1) )) )) : (((global::nx3.NHead) (__fn_dyn1) )) );
				#line 71 "F:\\nx3\\src\\nx3\\NNote.hx"
				return ( head.tie != default(global::nx3.ETie) );
			}
			#line default
		}
		
		
	}
}


