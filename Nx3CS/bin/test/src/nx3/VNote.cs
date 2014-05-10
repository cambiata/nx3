
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VNote : global::haxe.lang.HxObject {
		public    VNote(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VNote(global::nx3.NNote nnote){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\VNote.hx"
				global::nx3.VNote.__hx_ctor_nx3_VNote(this, nnote);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VNote(global::nx3.VNote __temp_me130, global::nx3.NNote nnote){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\VNote.hx"
				__temp_me130.nnote = nnote;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
				return new global::nx3.VNote(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
				return new global::nx3.VNote(((global::nx3.NNote) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.NNote nnote;
		
		public  global::Array<object> vheads;
		
		public virtual   global::Array<object> getVHeads(){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\VNote.hx"
				if (( this.vheads != default(global::Array<object>) )) {
					#line 22 "F:\\nx3\\src\\nx3\\VNote.hx"
					return this.vheads;
				}
				
				#line 23 "F:\\nx3\\src\\nx3\\VNote.hx"
				this.vheads = new global::Array<object>(new object[]{});
				{
					#line 24 "F:\\nx3\\src\\nx3\\VNote.hx"
					int _g = 0;
					#line 24 "F:\\nx3\\src\\nx3\\VNote.hx"
					global::Array<object> _g1 = this.nnote.get_nheads();
					#line 24 "F:\\nx3\\src\\nx3\\VNote.hx"
					while (( _g < _g1.length )){
						#line 24 "F:\\nx3\\src\\nx3\\VNote.hx"
						global::nx3.NHead nhead = ((global::nx3.NHead) (_g1[_g]) );
						#line 24 "F:\\nx3\\src\\nx3\\VNote.hx"
						 ++ _g;
						#line 24 "F:\\nx3\\src\\nx3\\VNote.hx"
						this.vheads.push(new global::nx3.VHead(((global::nx3.NHead) (nhead) )));
					}
					
				}
				
				#line 25 "F:\\nx3\\src\\nx3\\VNote.hx"
				return this.vheads;
			}
			#line default
		}
		
		
		public  global::Array<object> vheadsPlacements;
		
		public virtual   global::Array<object> getVHeadsPlacements(){
			unchecked {
				#line 31 "F:\\nx3\\src\\nx3\\VNote.hx"
				if (( this.vheadsPlacements != default(global::Array<object>) )) {
					#line 31 "F:\\nx3\\src\\nx3\\VNote.hx"
					return this.vheadsPlacements;
				}
				
				#line 32 "F:\\nx3\\src\\nx3\\VNote.hx"
				if (( this.vheads == default(global::Array<object>) )) {
					#line 32 "F:\\nx3\\src\\nx3\\VNote.hx"
					this.getVHeads();
				}
				
				#line 34 "F:\\nx3\\src\\nx3\\VNote.hx"
				global::nx3.VHeadPlacementCalculator calculator = new global::nx3.VHeadPlacementCalculator(((global::Array<object>) (this.vheads) ), ((global::nx3.EDirectionUD) (this.getDirection()) ));
				this.vheadsPlacements = calculator.getHeadsPlacements();
				return this.vheadsPlacements;
			}
			#line default
		}
		
		
		public  global::Array<object> vheadsPlacementsUp;
		
		public virtual   global::Array<object> getVHeadPlacementsUp(){
			unchecked {
				#line 44 "F:\\nx3\\src\\nx3\\VNote.hx"
				if (( this.vheadsPlacementsUp != default(global::Array<object>) )) {
					#line 44 "F:\\nx3\\src\\nx3\\VNote.hx"
					return this.vheadsPlacementsUp;
				}
				
				#line 45 "F:\\nx3\\src\\nx3\\VNote.hx"
				if (( this.vheads == default(global::Array<object>) )) {
					#line 45 "F:\\nx3\\src\\nx3\\VNote.hx"
					this.getVHeads();
				}
				
				#line 46 "F:\\nx3\\src\\nx3\\VNote.hx"
				global::nx3.VHeadPlacementCalculator calculator = new global::nx3.VHeadPlacementCalculator(((global::Array<object>) (this.vheads) ), ((global::nx3.EDirectionUD) (global::nx3.EDirectionUD.Up) ));
				this.vheadsPlacementsUp = calculator.getHeadsPlacements();
				return this.vheadsPlacementsUp;
			}
			#line default
		}
		
		
		public  global::Array<object> vheadsPlacementsDown;
		
		public virtual   global::Array<object> getVHeadPlacementsDown(){
			unchecked {
				#line 53 "F:\\nx3\\src\\nx3\\VNote.hx"
				if (( this.vheadsPlacementsDown != default(global::Array<object>) )) {
					#line 53 "F:\\nx3\\src\\nx3\\VNote.hx"
					return this.vheadsPlacementsDown;
				}
				
				#line 54 "F:\\nx3\\src\\nx3\\VNote.hx"
				if (( this.vheads == default(global::Array<object>) )) {
					#line 54 "F:\\nx3\\src\\nx3\\VNote.hx"
					this.getVHeads();
				}
				
				#line 55 "F:\\nx3\\src\\nx3\\VNote.hx"
				global::nx3.VHeadPlacementCalculator calculator = new global::nx3.VHeadPlacementCalculator(((global::Array<object>) (this.vheads) ), ((global::nx3.EDirectionUD) (global::nx3.EDirectionUD.Down) ));
				this.vheadsPlacementsDown = calculator.getHeadsPlacements();
				return this.vheadsPlacementsDown;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getVHeadPlacementsDir(global::nx3.EDirectionUD dir){
			unchecked {
				#line 62 "F:\\nx3\\src\\nx3\\VNote.hx"
				if (( dir == global::nx3.EDirectionUD.Up )) {
					#line 62 "F:\\nx3\\src\\nx3\\VNote.hx"
					return this.getVHeadPlacementsUp();
				}
				 else {
					#line 62 "F:\\nx3\\src\\nx3\\VNote.hx"
					return this.getVHeadPlacementsDown();
				}
				
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getVHeadsRectanglesDir(global::nx3.EDirectionUD dir){
			unchecked {
				#line 82 "F:\\nx3\\src\\nx3\\VNote.hx"
				if (( dir == global::nx3.EDirectionUD.Up )) {
					#line 82 "F:\\nx3\\src\\nx3\\VNote.hx"
					return this.getVHeadsRectanglesUp();
				}
				 else {
					#line 82 "F:\\nx3\\src\\nx3\\VNote.hx"
					return this.getVHeadsRectanglesDown();
				}
				
			}
			#line default
		}
		
		
		public  global::Array<object> vheadsRectanglesUp;
		
		public virtual   global::Array<object> getVHeadsRectanglesUp(){
			unchecked {
				#line 88 "F:\\nx3\\src\\nx3\\VNote.hx"
				if (( this.vheadsRectanglesUp != default(global::Array<object>) )) {
					#line 88 "F:\\nx3\\src\\nx3\\VNote.hx"
					return this.vheadsRectanglesUp;
				}
				
				#line 89 "F:\\nx3\\src\\nx3\\VNote.hx"
				if (( this.vheads == default(global::Array<object>) )) {
					#line 89 "F:\\nx3\\src\\nx3\\VNote.hx"
					this.getVHeads();
				}
				
				#line 91 "F:\\nx3\\src\\nx3\\VNote.hx"
				global::nx3.VHeadsRectsCalculator calculator = new global::nx3.VHeadsRectsCalculator(((global::Array<object>) (this.getVHeads()) ), ((global::Array<object>) (this.getVHeadPlacementsUp()) ), ((global::nx3.ENoteVal) (this.nnote.@value) ));
				global::nx3.VNoteHeadsRectsCalculator calculator1 = new global::nx3.VNoteHeadsRectsCalculator(((global::nx3.VNote) (this) ), ((global::Array<object>) (this.getVHeadPlacementsUp()) ));
				#line 94 "F:\\nx3\\src\\nx3\\VNote.hx"
				this.vheadsRectanglesUp = calculator1.getHeadsRects();
				#line 96 "F:\\nx3\\src\\nx3\\VNote.hx"
				return this.vheadsRectanglesUp;
			}
			#line default
		}
		
		
		public  global::Array<object> vheadsRectanglesDown;
		
		public virtual   global::Array<object> getVHeadsRectanglesDown(){
			unchecked {
				#line 101 "F:\\nx3\\src\\nx3\\VNote.hx"
				if (( this.vheadsRectanglesDown != default(global::Array<object>) )) {
					#line 101 "F:\\nx3\\src\\nx3\\VNote.hx"
					return this.vheadsRectanglesDown;
				}
				
				#line 102 "F:\\nx3\\src\\nx3\\VNote.hx"
				if (( this.vheads == default(global::Array<object>) )) {
					#line 102 "F:\\nx3\\src\\nx3\\VNote.hx"
					this.getVHeads();
				}
				
				#line 104 "F:\\nx3\\src\\nx3\\VNote.hx"
				global::nx3.VHeadsRectsCalculator calculator = new global::nx3.VHeadsRectsCalculator(((global::Array<object>) (this.getVHeads()) ), ((global::Array<object>) (this.getVHeadPlacementsDown()) ), ((global::nx3.ENoteVal) (this.nnote.@value) ));
				#line 106 "F:\\nx3\\src\\nx3\\VNote.hx"
				global::nx3.VNoteHeadsRectsCalculator calculator1 = new global::nx3.VNoteHeadsRectsCalculator(((global::nx3.VNote) (this) ), ((global::Array<object>) (this.getVHeadPlacementsDown()) ));
				#line 108 "F:\\nx3\\src\\nx3\\VNote.hx"
				this.vheadsRectanglesDown = calculator1.getHeadsRects();
				return this.vheadsRectanglesDown;
			}
			#line default
		}
		
		
		public  object config;
		
		public virtual   void setConfig(object newConfig){
			unchecked {
				#line 115 "F:\\nx3\\src\\nx3\\VNote.hx"
				if (string.Equals(global::Std.@string(this.config), global::Std.@string(newConfig))) {
					#line 117 "F:\\nx3\\src\\nx3\\VNote.hx"
					return ;
				}
				 else {
					#line 122 "F:\\nx3\\src\\nx3\\VNote.hx"
					this.direction = default(global::nx3.EDirectionUD);
					this.vheadsPlacements = default(global::Array<object>);
				}
				
				#line 126 "F:\\nx3\\src\\nx3\\VNote.hx"
				this.config = newConfig;
			}
			#line default
		}
		
		
		public  global::nx3.EDirectionUD direction;
		
		public virtual   global::nx3.EDirectionUD getDirection(){
			unchecked {
				#line 133 "F:\\nx3\\src\\nx3\\VNote.hx"
				if (( this.direction != default(global::nx3.EDirectionUD) )) {
					#line 133 "F:\\nx3\\src\\nx3\\VNote.hx"
					return this.direction;
				}
				
				#line 134 "F:\\nx3\\src\\nx3\\VNote.hx"
				global::nx3.VNoteDirectionCalculator calculator = new global::nx3.VNoteDirectionCalculator(((global::nx3.VNote) (this) ));
				#line 136 "F:\\nx3\\src\\nx3\\VNote.hx"
				global::nx3.EDirectionUD configDirection = default(global::nx3.EDirectionUD);
				#line 136 "F:\\nx3\\src\\nx3\\VNote.hx"
				if (( ! (global::haxe.lang.Runtime.refEq(this.config, default(object))) )) {
					#line 136 "F:\\nx3\\src\\nx3\\VNote.hx"
					configDirection = ((global::nx3.EDirectionUD) (global::haxe.lang.Runtime.getField(this.config, "direction", 272654911, true)) );
				}
				 else {
					#line 136 "F:\\nx3\\src\\nx3\\VNote.hx"
					configDirection = default(global::nx3.EDirectionUD);
				}
				
				#line 137 "F:\\nx3\\src\\nx3\\VNote.hx"
				this.direction = calculator.getDirection(configDirection);
				return this.direction;
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
				switch (hash){
					case 1204967106:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						this.config = ((object) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
				switch (hash){
					case 272654911:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						this.direction = ((global::nx3.EDirectionUD) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return @value;
					}
					
					
					case 1204967106:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						this.config = ((object) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return @value;
					}
					
					
					case 1649856483:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						this.vheadsRectanglesDown = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return @value;
					}
					
					
					case 475835292:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						this.vheadsRectanglesUp = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return @value;
					}
					
					
					case 1096058477:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						this.vheadsPlacementsDown = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return @value;
					}
					
					
					case 998951846:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						this.vheadsPlacementsUp = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return @value;
					}
					
					
					case 1665486955:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						this.vheadsPlacements = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return @value;
					}
					
					
					case 1389717277:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						this.vheads = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return @value;
					}
					
					
					case 522053472:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						this.nnote = ((global::nx3.NNote) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
				switch (hash){
					case 529989321:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getDirection") ), ((int) (529989321) ))) );
					}
					
					
					case 272654911:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return this.direction;
					}
					
					
					case 662293508:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("setConfig") ), ((int) (662293508) ))) );
					}
					
					
					case 1204967106:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return this.config;
					}
					
					
					case 2099004281:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVHeadsRectanglesDown") ), ((int) (2099004281) ))) );
					}
					
					
					case 1649856483:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return this.vheadsRectanglesDown;
					}
					
					
					case 486337970:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVHeadsRectanglesUp") ), ((int) (486337970) ))) );
					}
					
					
					case 475835292:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return this.vheadsRectanglesUp;
					}
					
					
					case 1078338070:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVHeadsRectanglesDir") ), ((int) (1078338070) ))) );
					}
					
					
					case 174837407:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVHeadPlacementsDir") ), ((int) (174837407) ))) );
					}
					
					
					case 334335696:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVHeadPlacementsDown") ), ((int) (334335696) ))) );
					}
					
					
					case 1096058477:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return this.vheadsPlacementsDown;
					}
					
					
					case 2003821897:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVHeadPlacementsUp") ), ((int) (2003821897) ))) );
					}
					
					
					case 998951846:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return this.vheadsPlacementsUp;
					}
					
					
					case 2113388801:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVHeadsPlacements") ), ((int) (2113388801) ))) );
					}
					
					
					case 1665486955:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return this.vheadsPlacements;
					}
					
					
					case 1650024499:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVHeads") ), ((int) (1650024499) ))) );
					}
					
					
					case 1389717277:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return this.vheads;
					}
					
					
					case 522053472:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return this.nnote;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
				switch (hash){
					case 1204967106:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return ((double) (global::haxe.lang.Runtime.toDouble(this.config)) );
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
				switch (hash){
					case 529989321:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return this.getDirection();
					}
					
					
					case 662293508:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						this.setConfig(dynargs[0]);
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						break;
					}
					
					
					case 2099004281:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return this.getVHeadsRectanglesDown();
					}
					
					
					case 486337970:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return this.getVHeadsRectanglesUp();
					}
					
					
					case 1078338070:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return this.getVHeadsRectanglesDir(((global::nx3.EDirectionUD) (dynargs[0]) ));
					}
					
					
					case 174837407:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return this.getVHeadPlacementsDir(((global::nx3.EDirectionUD) (dynargs[0]) ));
					}
					
					
					case 334335696:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return this.getVHeadPlacementsDown();
					}
					
					
					case 2003821897:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return this.getVHeadPlacementsUp();
					}
					
					
					case 2113388801:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return this.getVHeadsPlacements();
					}
					
					
					case 1650024499:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return this.getVHeads();
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
				baseArr.push("direction");
				#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
				baseArr.push("config");
				#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
				baseArr.push("vheadsRectanglesDown");
				#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
				baseArr.push("vheadsRectanglesUp");
				#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
				baseArr.push("vheadsPlacementsDown");
				#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
				baseArr.push("vheadsPlacementsUp");
				#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
				baseArr.push("vheadsPlacements");
				#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
				baseArr.push("vheads");
				#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
				baseArr.push("nnote");
				#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
				{
					#line 11 "F:\\nx3\\src\\nx3\\VNote.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


