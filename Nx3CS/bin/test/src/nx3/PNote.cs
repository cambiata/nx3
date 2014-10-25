
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PNote : global::haxe.lang.HxObject, global::hxlazy.Lazy {
		public    PNote(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PNote(global::nx3.NNote nnote){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\PNote.hx"
				global::nx3.PNote.__hx_ctor_nx3_PNote(this, nnote);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PNote(global::nx3.PNote __temp_me105, global::nx3.NNote nnote){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PNote.hx"
				__temp_me105.nnote = nnote;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				return new global::nx3.PNote(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				return new global::nx3.PNote(((global::nx3.NNote) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.NNote nnote;
		
		public virtual   object iterator(){
			unchecked {
				#line 23 "F:\\nx3\\src\\nx3\\PNote.hx"
				{
					#line 23 "F:\\nx3\\src\\nx3\\PNote.hx"
					global::Array<object> _this = this.get_heads();
					#line 23 "F:\\nx3\\src\\nx3\\PNote.hx"
					return new global::_Array.ArrayIterator<object>(((global::Array<object>) (_this) ));
				}
				
			}
			#line default
		}
		
		
		public  int length;
		
		public virtual   int get_length(){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\PNote.hx"
				return this.get_heads().length;
			}
			#line default
		}
		
		
		public  global::nx3.PVoice voice;
		
		public virtual   global::nx3.PVoice getVoice(){
			unchecked {
				#line 31 "F:\\nx3\\src\\nx3\\PNote.hx"
				return this.voice;
			}
			#line default
		}
		
		
		public  global::nx3.PBeamgroup beamgroup;
		
		public virtual   global::nx3.PBeamgroup getBeamgroup(){
			unchecked {
				#line 67 "F:\\nx3\\src\\nx3\\PNote.hx"
				if (( this.voice == default(global::nx3.PVoice) )) {
					#line 67 "F:\\nx3\\src\\nx3\\PNote.hx"
					throw global::haxe.lang.HaxeException.wrap("PNote doesn\'t have a parent PVoice");
				}
				
				#line 68 "F:\\nx3\\src\\nx3\\PNote.hx"
				if (( this.beamgroup == default(global::nx3.PBeamgroup) )) {
					#line 70 "F:\\nx3\\src\\nx3\\PNote.hx"
					this.voice.getBeamgroups(default(global::Array<global::nx3.ENoteVal>));
				}
				
				#line 72 "F:\\nx3\\src\\nx3\\PNote.hx"
				if (( this.beamgroup == default(global::nx3.PBeamgroup) )) {
					#line 72 "F:\\nx3\\src\\nx3\\PNote.hx"
					throw global::haxe.lang.HaxeException.wrap("this should not happen");
				}
				
				#line 73 "F:\\nx3\\src\\nx3\\PNote.hx"
				return this.beamgroup;
			}
			#line default
		}
		
		
		public virtual   global::nx3.EDirectionUD getDirection(){
			unchecked {
				#line 79 "F:\\nx3\\src\\nx3\\PNote.hx"
				return this.getBeamgroup().getDirection();
			}
			#line default
		}
		
		
		public  global::nx3.PComplex complex;
		
		public virtual   global::nx3.PComplex getComplex(){
			unchecked {
				#line 85 "F:\\nx3\\src\\nx3\\PNote.hx"
				if (( this.voice == default(global::nx3.PVoice) )) {
					#line 85 "F:\\nx3\\src\\nx3\\PNote.hx"
					throw global::haxe.lang.HaxeException.wrap("PNote doesn\'t have a parent PVoice");
				}
				
				#line 86 "F:\\nx3\\src\\nx3\\PNote.hx"
				if (( this.complex == default(global::nx3.PComplex) )) {
					#line 88 "F:\\nx3\\src\\nx3\\PNote.hx"
					this.voice.getPart().getComplexes();
				}
				
				#line 90 "F:\\nx3\\src\\nx3\\PNote.hx"
				if (( this.complex == default(global::nx3.PComplex) )) {
					#line 90 "F:\\nx3\\src\\nx3\\PNote.hx"
					throw global::haxe.lang.HaxeException.wrap("Shouldn\'t happen");
				}
				
				#line 91 "F:\\nx3\\src\\nx3\\PNote.hx"
				return this.complex;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getTies(){
			unchecked {
				#line 204 "F:\\nx3\\src\\nx3\\PNote.hx"
				return this.nnote.get_ties();
			}
			#line default
		}
		
		
		public  global::Array<object> __lazyheads;
		
		
		
		public virtual   global::Array<object> get_heads(){
			unchecked {
				#line 7 "F:\\nx3\\src\\hxlazy\\Lazy.hx"
				global::Array<object> _g = new global::Array<object>(new object[]{this});
				#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				if (( this.__lazyheads != default(global::Array<object>) )) {
					#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
					return this.__lazyheads;
				}
				
				#line 98 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				return this.__lazyheads = global::Lambda.array<object>(global::Lambda.map<object, object>(this.nnote, new global::nx3.PNote_get_heads_54__Fun(((global::Array<object>) (_g) ))));
			}
			#line default
		}
		
		
		public  global::Array<object> __lazyheadsRects;
		
		public virtual   global::Array<object> getHeadsRects(){
			unchecked {
				#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				if (( this.__lazyheadsRects != default(global::Array<object>) )) {
					#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
					return this.__lazyheadsRects;
				}
				
				#line 98 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				return this.__lazyheadsRects = new global::nx3.PNoteheadsRectsCalculator(((global::nx3.PNote) (this) )).getHeadsRects();
			}
			#line default
		}
		
		
		public  global::nx3.geom.Rectangle __lazystaveRect;
		
		public virtual   global::nx3.geom.Rectangle getStaveRect(){
			unchecked {
				#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				if (( this.__lazystaveRect != default(global::nx3.geom.Rectangle) )) {
					#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
					return this.__lazystaveRect;
				}
				
				#line 98 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				return this.__lazystaveRect = this.getComplex().getStaveRect(this);
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> __lazystaveXPosition;
		
		public virtual   global::haxe.lang.Null<double> getStaveXPosition(){
			unchecked {
				#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				if (this.__lazystaveXPosition.hasValue) {
					#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
					return this.__lazystaveXPosition;
				}
				
				#line 146 "F:\\nx3\\src\\nx3\\PNote.hx"
				global::nx3.geom.Rectangle staverect = this.getStaveRect();
				if (( staverect == default(global::nx3.geom.Rectangle) )) {
					#line 98 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
					return this.__lazystaveXPosition = new global::haxe.lang.Null<double>(((double) (0) ), true);
				}
				
				#line 148 "F:\\nx3\\src\\nx3\\PNote.hx"
				return ( (( this.getDirection() == global::nx3.EDirectionUD.Up )) ? (this.__lazystaveXPosition = new global::haxe.lang.Null<double>(staverect.width, true)) : (this.__lazystaveXPosition = new global::haxe.lang.Null<double>(staverect.x, true)) );
			}
			#line default
		}
		
		
		public  global::nx3.geom.Rectangle __lazybaseRect;
		
		public virtual   global::nx3.geom.Rectangle getBaseRect(){
			unchecked {
				#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				if (( this.__lazybaseRect != default(global::nx3.geom.Rectangle) )) {
					#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
					return this.__lazybaseRect;
				}
				
				#line 98 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				return this.__lazybaseRect = new global::nx3.PBaseRectCalculator(((global::nx3.PNote) (this) )).getBaseRect();
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> __lazyxOffset;
		
		public virtual   global::haxe.lang.Null<double> getXOffset(){
			unchecked {
				#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				if (this.__lazyxOffset.hasValue) {
					#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
					return this.__lazyxOffset;
				}
				
				#line 98 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				return this.__lazyxOffset = new global::haxe.lang.Null<double>(this.getComplex().getNoteXOffset(this), true);
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> __lazyxPosition;
		
		public virtual   global::haxe.lang.Null<double> getXPosition(){
			unchecked {
				#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				if (this.__lazyxPosition.hasValue) {
					#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
					return this.__lazyxPosition;
				}
				
				#line 98 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				return this.__lazyxPosition = new global::haxe.lang.Null<double>(( this.getComplex().getXPosition() + this.getXOffset().@value ), true);
			}
			#line default
		}
		
		
		public  global::nx3.PNote __lazynext;
		
		public virtual   global::nx3.PNote getNext(){
			unchecked {
				#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				if (( this.__lazynext != default(global::nx3.PNote) )) {
					#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
					return this.__lazynext;
				}
				
				#line 220 "F:\\nx3\\src\\nx3\\PNote.hx"
				int idx = this.voice.getNotes().indexOf(this, default(global::haxe.lang.Null<int>));
				{
					#line 221 "F:\\nx3\\src\\nx3\\PNote.hx"
					global::Array<object> a = this.voice.getNotes();
					#line 221 "F:\\nx3\\src\\nx3\\PNote.hx"
					int idx1 = ( idx + 1 );
					#line 221 "F:\\nx3\\src\\nx3\\PNote.hx"
					return ( (( ( idx1 < 0 ) || ( idx1 > ( a.length - 1 ) ) )) ? (this.__lazynext = default(global::nx3.PNote)) : (this.__lazynext = ((global::nx3.PNote) (a[idx1]) )) );
				}
				
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<bool> __lazyhasTie;
		
		public virtual   global::haxe.lang.Null<bool> getHasTie(){
			unchecked {
				#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				if (this.__lazyhasTie.hasValue) {
					#line 108 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
					return this.__lazyhasTie;
				}
				
				#line 98 "F:\\nx3\\src\\hxlazy\\LazyBuilder.hx"
				return this.__lazyhasTie = new global::haxe.lang.Null<bool>( ! (global::Lambda.@foreach<object>(this.nnote, ( (( global::nx3.PNote_getHasTie_225__Fun.__hx_current != default(global::nx3.PNote_getHasTie_225__Fun) )) ? (global::nx3.PNote_getHasTie_225__Fun.__hx_current) : (global::nx3.PNote_getHasTie_225__Fun.__hx_current = ((global::nx3.PNote_getHasTie_225__Fun) (new global::nx3.PNote_getHasTie_225__Fun()) )) ))) , true);
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				switch (hash){
					case 520590566:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.length = ((int) (@value) );
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					default:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				switch (hash){
					case 1785055402:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.__lazyhasTie = global::haxe.lang.Null<object>.ofDynamic<bool>(@value);
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 1110135431:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.__lazynext = ((global::nx3.PNote) (@value) );
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 829886253:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.__lazyxPosition = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 625777943:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.__lazyxOffset = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 156657001:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.__lazybaseRect = ((global::nx3.geom.Rectangle) (@value) );
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 2077104646:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.__lazystaveXPosition = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 648478335:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.__lazystaveRect = ((global::nx3.geom.Rectangle) (@value) );
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 949753616:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.__lazyheadsRects = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 792979263:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.__lazyheads = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 57763376:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.complex = ((global::nx3.PComplex) (@value) );
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 1104035696:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.beamgroup = ((global::nx3.PBeamgroup) (@value) );
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 989275570:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.voice = ((global::nx3.PVoice) (@value) );
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 520590566:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.length = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 522053472:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.nnote = ((global::nx3.NNote) (@value) );
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					default:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				switch (hash){
					case 932575052:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHasTie") ), ((int) (932575052) ))) );
					}
					
					
					case 1785055402:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return (this.__lazyhasTie).toDynamic();
					}
					
					
					case 461714601:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNext") ), ((int) (461714601) ))) );
					}
					
					
					case 1110135431:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.__lazynext;
					}
					
					
					case 355217867:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getXPosition") ), ((int) (355217867) ))) );
					}
					
					
					case 829886253:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return (this.__lazyxPosition).toDynamic();
					}
					
					
					case 1648704565:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getXOffset") ), ((int) (1648704565) ))) );
					}
					
					
					case 625777943:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return (this.__lazyxOffset).toDynamic();
					}
					
					
					case 636027019:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBaseRect") ), ((int) (636027019) ))) );
					}
					
					
					case 156657001:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.__lazybaseRect;
					}
					
					
					case 1453374120:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getStaveXPosition") ), ((int) (1453374120) ))) );
					}
					
					
					case 2077104646:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return (this.__lazystaveXPosition).toDynamic();
					}
					
					
					case 173809949:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getStaveRect") ), ((int) (173809949) ))) );
					}
					
					
					case 648478335:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.__lazystaveRect;
					}
					
					
					case 325402290:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHeadsRects") ), ((int) (325402290) ))) );
					}
					
					
					case 949753616:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.__lazyheadsRects;
					}
					
					
					case 1751265194:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_heads") ), ((int) (1751265194) ))) );
					}
					
					
					case 616092499:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.get_heads();
					}
					
					
					case 792979263:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.__lazyheads;
					}
					
					
					case 528446681:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getTies") ), ((int) (528446681) ))) );
					}
					
					
					case 1389554746:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getComplex") ), ((int) (1389554746) ))) );
					}
					
					
					case 57763376:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.complex;
					}
					
					
					case 529989321:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getDirection") ), ((int) (529989321) ))) );
					}
					
					
					case 1361370106:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBeamgroup") ), ((int) (1361370106) ))) );
					}
					
					
					case 1104035696:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.beamgroup;
					}
					
					
					case 449721660:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVoice") ), ((int) (449721660) ))) );
					}
					
					
					case 989275570:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.voice;
					}
					
					
					case 261031087:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_length") ), ((int) (261031087) ))) );
					}
					
					
					case 520590566:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						if (handleProperties) {
							#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
							return this.get_length();
						}
						 else {
							#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
							return this.length;
						}
						
					}
					
					
					case 328878574:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("iterator") ), ((int) (328878574) ))) );
					}
					
					
					case 522053472:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.nnote;
					}
					
					
					default:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				switch (hash){
					case 520590566:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						if (handleProperties) {
							#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
							return ((double) (this.get_length()) );
						}
						 else {
							#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
							return ((double) (this.length) );
						}
						
					}
					
					
					default:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				switch (hash){
					case 932575052:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return (this.getHasTie()).toDynamic();
					}
					
					
					case 461714601:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getNext();
					}
					
					
					case 355217867:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return (this.getXPosition()).toDynamic();
					}
					
					
					case 1648704565:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return (this.getXOffset()).toDynamic();
					}
					
					
					case 636027019:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getBaseRect();
					}
					
					
					case 1453374120:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return (this.getStaveXPosition()).toDynamic();
					}
					
					
					case 173809949:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getStaveRect();
					}
					
					
					case 325402290:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getHeadsRects();
					}
					
					
					case 1751265194:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.get_heads();
					}
					
					
					case 528446681:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getTies();
					}
					
					
					case 1389554746:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getComplex();
					}
					
					
					case 529989321:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getDirection();
					}
					
					
					case 1361370106:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getBeamgroup();
					}
					
					
					case 449721660:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getVoice();
					}
					
					
					case 261031087:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.get_length();
					}
					
					
					case 328878574:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.iterator();
					}
					
					
					default:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("__lazyhasTie");
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("__lazynext");
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("__lazyxPosition");
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("__lazyxOffset");
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("__lazybaseRect");
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("__lazystaveXPosition");
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("__lazystaveRect");
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("__lazyheadsRects");
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("heads");
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("__lazyheads");
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("complex");
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("beamgroup");
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("voice");
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("length");
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("nnote");
				#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
				{
					#line 14 "F:\\nx3\\src\\nx3\\PNote.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PNote_get_heads_54__Fun : global::haxe.lang.Function {
		public    PNote_get_heads_54__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 54 "F:\\nx3\\src\\nx3\\PNote.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 54 "F:\\nx3\\src\\nx3\\PNote.hx"
				global::nx3.NHead nhead = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (((global::nx3.NHead) (((object) (__fn_float1) )) )) : (((global::nx3.NHead) (__fn_dyn1) )) );
				global::nx3.PHead phead = new global::nx3.PHead(((global::nx3.NHead) (nhead) ));
				#line 55 "F:\\nx3\\src\\nx3\\PNote.hx"
				phead.note = ((global::nx3.PNote) (this._g[0]) );
				#line 55 "F:\\nx3\\src\\nx3\\PNote.hx"
				return phead;
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PNote_getHasTie_225__Fun : global::haxe.lang.Function {
		public    PNote_getHasTie_225__Fun() : base(1, 0){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::nx3.PNote_getHasTie_225__Fun __hx_current;
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 225 "F:\\nx3\\src\\nx3\\PNote.hx"
				global::nx3.NHead nhead = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (((global::nx3.NHead) (((object) (__fn_float1) )) )) : (((global::nx3.NHead) (__fn_dyn1) )) );
				#line 225 "F:\\nx3\\src\\nx3\\PNote.hx"
				return  ! ((( nhead.tie != default(global::nx3.ETie) ))) ;
			}
			#line default
		}
		
		
	}
}


