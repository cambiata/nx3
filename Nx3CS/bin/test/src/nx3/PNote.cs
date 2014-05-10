
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PNote : global::haxe.lang.HxObject {
		public    PNote(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
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
		
		
		public static   void __hx_ctor_nx3_PNote(global::nx3.PNote __temp_me103, global::nx3.NNote nnote){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PNote.hx"
				__temp_me103.nnote = nnote;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				return new global::nx3.PNote(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				return new global::nx3.PNote(((global::nx3.NNote) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.NNote nnote;
		
		public  global::nx3.PVoice voice;
		
		public virtual   global::nx3.PVoice getVoice(){
			unchecked {
				#line 26 "F:\\nx3\\src\\nx3\\PNote.hx"
				return this.voice;
			}
			#line default
		}
		
		
		public  global::Array<object> heads;
		
		public virtual   global::Array<object> getHeads(){
			unchecked {
				#line 34 "F:\\nx3\\src\\nx3\\PNote.hx"
				if (( this.heads != default(global::Array<object>) )) {
					#line 34 "F:\\nx3\\src\\nx3\\PNote.hx"
					return this.heads;
				}
				
				#line 35 "F:\\nx3\\src\\nx3\\PNote.hx"
				this.heads = new global::Array<object>(new object[]{});
				#line 37 "F:\\nx3\\src\\nx3\\PNote.hx"
				{
					#line 37 "F:\\nx3\\src\\nx3\\PNote.hx"
					int _g = 0;
					#line 37 "F:\\nx3\\src\\nx3\\PNote.hx"
					global::Array<object> _g1 = this.nnote.get_nheads();
					#line 37 "F:\\nx3\\src\\nx3\\PNote.hx"
					while (( _g < _g1.length )){
						#line 37 "F:\\nx3\\src\\nx3\\PNote.hx"
						global::nx3.NHead nhead = ((global::nx3.NHead) (_g1[_g]) );
						#line 37 "F:\\nx3\\src\\nx3\\PNote.hx"
						 ++ _g;
						#line 39 "F:\\nx3\\src\\nx3\\PNote.hx"
						global::nx3.PHead phead = new global::nx3.PHead(((global::nx3.NHead) (nhead) ));
						phead.note = this;
						this.heads.push(phead);
					}
					
				}
				
				#line 43 "F:\\nx3\\src\\nx3\\PNote.hx"
				return this.heads;
			}
			#line default
		}
		
		
		public  global::nx3.PBeamgroup beamgroup;
		
		public virtual   global::nx3.PBeamgroup getBeamgroup(){
			unchecked {
				#line 51 "F:\\nx3\\src\\nx3\\PNote.hx"
				if (( this.beamgroup == default(global::nx3.PBeamgroup) )) {
					#line 53 "F:\\nx3\\src\\nx3\\PNote.hx"
					this.voice.getBeamgroups(default(global::Array<global::nx3.ENoteVal>));
				}
				
				#line 55 "F:\\nx3\\src\\nx3\\PNote.hx"
				if (( this.beamgroup == default(global::nx3.PBeamgroup) )) {
					#line 55 "F:\\nx3\\src\\nx3\\PNote.hx"
					throw global::haxe.lang.HaxeException.wrap("this should not happen");
				}
				
				#line 56 "F:\\nx3\\src\\nx3\\PNote.hx"
				return this.beamgroup;
			}
			#line default
		}
		
		
		public virtual   global::nx3.EDirectionUD getDirection(){
			unchecked {
				#line 61 "F:\\nx3\\src\\nx3\\PNote.hx"
				return this.getBeamgroup().getDirection();
			}
			#line default
		}
		
		
		public  global::nx3.PComplex complex;
		
		public virtual   global::nx3.PComplex getComplex(){
			unchecked {
				#line 67 "F:\\nx3\\src\\nx3\\PNote.hx"
				if (( this.complex == default(global::nx3.PComplex) )) {
					#line 69 "F:\\nx3\\src\\nx3\\PNote.hx"
					this.voice.getPart().getComplexes();
				}
				
				#line 71 "F:\\nx3\\src\\nx3\\PNote.hx"
				if (( this.complex == default(global::nx3.PComplex) )) {
					#line 71 "F:\\nx3\\src\\nx3\\PNote.hx"
					throw global::haxe.lang.HaxeException.wrap("Shouldn\'t happen");
				}
				
				#line 72 "F:\\nx3\\src\\nx3\\PNote.hx"
				return this.complex;
			}
			#line default
		}
		
		
		public  global::Array<object> headsRects;
		
		public virtual   global::Array<object> getHeadsRects(){
			unchecked {
				#line 78 "F:\\nx3\\src\\nx3\\PNote.hx"
				if (( this.headsRects != default(global::Array<object>) )) {
					#line 78 "F:\\nx3\\src\\nx3\\PNote.hx"
					return this.headsRects;
				}
				
				#line 79 "F:\\nx3\\src\\nx3\\PNote.hx"
				global::nx3.PNoteheadsRectsCalculator calculator = new global::nx3.PNoteheadsRectsCalculator(((global::nx3.PNote) (this) ));
				this.headsRects = calculator.getHeadsRects();
				return this.headsRects;
			}
			#line default
		}
		
		
		public  global::nx3.geom.Rectangle staveRect;
		
		public  bool staveRectChecked;
		
		public virtual   global::nx3.geom.Rectangle getStaveRect(){
			unchecked {
				#line 88 "F:\\nx3\\src\\nx3\\PNote.hx"
				if (this.staveRectChecked) {
					#line 88 "F:\\nx3\\src\\nx3\\PNote.hx"
					return this.staveRect;
				}
				
				#line 89 "F:\\nx3\\src\\nx3\\PNote.hx"
				this.staveRect = this.getComplex().getStaveRect(this);
				this.staveRectChecked = true;
				return this.staveRect;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> staveXPosition;
		
		public virtual   double getStaveXPosition(){
			unchecked {
				#line 97 "F:\\nx3\\src\\nx3\\PNote.hx"
				if (this.staveXPosition.hasValue) {
					#line 97 "F:\\nx3\\src\\nx3\\PNote.hx"
					return this.staveXPosition.@value;
				}
				
				#line 99 "F:\\nx3\\src\\nx3\\PNote.hx"
				global::nx3.geom.Rectangle staverect = this.getStaveRect();
				if (( staverect == default(global::nx3.geom.Rectangle) )) {
					#line 100 "F:\\nx3\\src\\nx3\\PNote.hx"
					return ((double) (0) );
				}
				
				#line 102 "F:\\nx3\\src\\nx3\\PNote.hx"
				if (( this.getDirection() == global::nx3.EDirectionUD.Up )) {
					#line 102 "F:\\nx3\\src\\nx3\\PNote.hx"
					this.staveXPosition = new global::haxe.lang.Null<double>(staverect.width, true);
				}
				 else {
					#line 102 "F:\\nx3\\src\\nx3\\PNote.hx"
					this.staveXPosition = new global::haxe.lang.Null<double>(staverect.x, true);
				}
				
				#line 103 "F:\\nx3\\src\\nx3\\PNote.hx"
				return this.staveXPosition.@value;
			}
			#line default
		}
		
		
		public  global::nx3.geom.Rectangle baserect;
		
		public virtual   global::nx3.geom.Rectangle getBaseRect(){
			unchecked {
				#line 109 "F:\\nx3\\src\\nx3\\PNote.hx"
				if (( this.baserect != default(global::nx3.geom.Rectangle) )) {
					#line 109 "F:\\nx3\\src\\nx3\\PNote.hx"
					return this.baserect;
				}
				
				#line 110 "F:\\nx3\\src\\nx3\\PNote.hx"
				this.baserect = new global::nx3.PBaseRectCalculator(((global::nx3.PNote) (this) )).getBaseRect();
				return this.baserect;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> xoffset;
		
		public virtual   double getXOffset(){
			unchecked {
				#line 117 "F:\\nx3\\src\\nx3\\PNote.hx"
				if (this.xoffset.hasValue) {
					#line 117 "F:\\nx3\\src\\nx3\\PNote.hx"
					return this.xoffset.@value;
				}
				
				#line 118 "F:\\nx3\\src\\nx3\\PNote.hx"
				this.xoffset = new global::haxe.lang.Null<double>(this.getComplex().getNoteXOffset(this), true);
				return this.xoffset.@value;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> xposition;
		
		public virtual   double getXPosition(){
			unchecked {
				#line 125 "F:\\nx3\\src\\nx3\\PNote.hx"
				if (this.xposition.hasValue) {
					#line 125 "F:\\nx3\\src\\nx3\\PNote.hx"
					return this.xposition.@value;
				}
				
				#line 126 "F:\\nx3\\src\\nx3\\PNote.hx"
				this.xposition = new global::haxe.lang.Null<double>(( this.getComplex().getXPosition() + this.getXOffset() ), true);
				return this.xposition.@value;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getTies(){
			unchecked {
				#line 132 "F:\\nx3\\src\\nx3\\PNote.hx"
				return this.nnote.getTies();
			}
			#line default
		}
		
		
		public  global::nx3.PNote next;
		
		public virtual   global::nx3.PNote getNext(){
			unchecked {
				#line 138 "F:\\nx3\\src\\nx3\\PNote.hx"
				if (( this.next != default(global::nx3.PNote) )) {
					#line 138 "F:\\nx3\\src\\nx3\\PNote.hx"
					return this.next;
				}
				
				#line 139 "F:\\nx3\\src\\nx3\\PNote.hx"
				int idx = this.voice.getNotes().indexOf(this, default(global::haxe.lang.Null<int>));
				{
					#line 140 "F:\\nx3\\src\\nx3\\PNote.hx"
					global::Array<object> a = this.voice.getNotes();
					#line 140 "F:\\nx3\\src\\nx3\\PNote.hx"
					int idx1 = ( idx + 1 );
					#line 140 "F:\\nx3\\src\\nx3\\PNote.hx"
					if (( ( idx1 < 0 ) || ( idx1 > ( a.length - 1 ) ) )) {
						#line 140 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.next = default(global::nx3.PNote);
					}
					 else {
						#line 140 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.next = ((global::nx3.PNote) (a[idx1]) );
					}
					
				}
				
				#line 141 "F:\\nx3\\src\\nx3\\PNote.hx"
				return this.next;
			}
			#line default
		}
		
		
		public virtual   void setTiesInfo(global::Array<object> info){
			unchecked {
				#line 147 "F:\\nx3\\src\\nx3\\PNote.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				switch (hash){
					case 1224901875:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.next = ((global::nx3.PNote) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 740546849:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.xposition = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 1582252555:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.xoffset = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 354161077:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.baserect = ((global::nx3.geom.Rectangle) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 1680673650:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.staveXPosition = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 1524653780:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.staveRectChecked = global::haxe.lang.Runtime.toBool(@value);
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 2063959187:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.staveRect = ((global::nx3.geom.Rectangle) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 921887356:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.headsRects = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 57763376:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.complex = ((global::nx3.PComplex) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 1104035696:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.beamgroup = ((global::nx3.PBeamgroup) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 616092499:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.heads = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 989275570:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.voice = ((global::nx3.PVoice) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					case 522053472:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.nnote = ((global::nx3.NNote) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return @value;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				switch (hash){
					case 1933492467:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("setTiesInfo") ), ((int) (1933492467) ))) );
					}
					
					
					case 461714601:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNext") ), ((int) (461714601) ))) );
					}
					
					
					case 1224901875:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.next;
					}
					
					
					case 528446681:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getTies") ), ((int) (528446681) ))) );
					}
					
					
					case 355217867:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getXPosition") ), ((int) (355217867) ))) );
					}
					
					
					case 740546849:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return (this.xposition).toDynamic();
					}
					
					
					case 1648704565:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getXOffset") ), ((int) (1648704565) ))) );
					}
					
					
					case 1582252555:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return (this.xoffset).toDynamic();
					}
					
					
					case 636027019:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBaseRect") ), ((int) (636027019) ))) );
					}
					
					
					case 354161077:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.baserect;
					}
					
					
					case 1453374120:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getStaveXPosition") ), ((int) (1453374120) ))) );
					}
					
					
					case 1680673650:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return (this.staveXPosition).toDynamic();
					}
					
					
					case 173809949:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getStaveRect") ), ((int) (173809949) ))) );
					}
					
					
					case 1524653780:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.staveRectChecked;
					}
					
					
					case 2063959187:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.staveRect;
					}
					
					
					case 325402290:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHeadsRects") ), ((int) (325402290) ))) );
					}
					
					
					case 921887356:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.headsRects;
					}
					
					
					case 1389554746:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getComplex") ), ((int) (1389554746) ))) );
					}
					
					
					case 57763376:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.complex;
					}
					
					
					case 529989321:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getDirection") ), ((int) (529989321) ))) );
					}
					
					
					case 1361370106:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBeamgroup") ), ((int) (1361370106) ))) );
					}
					
					
					case 1104035696:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.beamgroup;
					}
					
					
					case 76538589:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHeads") ), ((int) (76538589) ))) );
					}
					
					
					case 616092499:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.heads;
					}
					
					
					case 449721660:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVoice") ), ((int) (449721660) ))) );
					}
					
					
					case 989275570:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.voice;
					}
					
					
					case 522053472:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.nnote;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				switch (hash){
					case 1933492467:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						this.setTiesInfo(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ));
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						break;
					}
					
					
					case 461714601:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getNext();
					}
					
					
					case 528446681:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getTies();
					}
					
					
					case 355217867:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getXPosition();
					}
					
					
					case 1648704565:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getXOffset();
					}
					
					
					case 636027019:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getBaseRect();
					}
					
					
					case 1453374120:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getStaveXPosition();
					}
					
					
					case 173809949:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getStaveRect();
					}
					
					
					case 325402290:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getHeadsRects();
					}
					
					
					case 1389554746:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getComplex();
					}
					
					
					case 529989321:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getDirection();
					}
					
					
					case 1361370106:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getBeamgroup();
					}
					
					
					case 76538589:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getHeads();
					}
					
					
					case 449721660:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return this.getVoice();
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("next");
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("xposition");
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("xoffset");
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("baserect");
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("staveXPosition");
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("staveRectChecked");
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("staveRect");
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("headsRects");
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("complex");
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("beamgroup");
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("heads");
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("voice");
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				baseArr.push("nnote");
				#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
				{
					#line 12 "F:\\nx3\\src\\nx3\\PNote.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


