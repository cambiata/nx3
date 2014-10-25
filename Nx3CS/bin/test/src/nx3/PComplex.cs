
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PComplex : global::haxe.lang.HxObject {
		public    PComplex(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PComplex(global::nx3.PPart part, global::Array<object> notes, int valueposition){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\PComplex.hx"
				global::nx3.PComplex.__hx_ctor_nx3_PComplex(this, part, notes, valueposition);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PComplex(global::nx3.PComplex __temp_me96, global::nx3.PPart part, global::Array<object> notes, int valueposition){
			unchecked {
				#line 23 "F:\\nx3\\src\\nx3\\PComplex.hx"
				__temp_me96.part = part;
				if (( notes.length > 2 )) {
					#line 24 "F:\\nx3\\src\\nx3\\PComplex.hx"
					throw global::haxe.lang.HaxeException.wrap("PComplex nr of PNote(s) limited to max 2 - for now");
				}
				
				#line 25 "F:\\nx3\\src\\nx3\\PComplex.hx"
				__temp_me96.notes = notes;
				{
					#line 26 "F:\\nx3\\src\\nx3\\PComplex.hx"
					int _g = 0;
					#line 26 "F:\\nx3\\src\\nx3\\PComplex.hx"
					global::Array<object> _g1 = __temp_me96.notes;
					#line 26 "F:\\nx3\\src\\nx3\\PComplex.hx"
					while (( _g < _g1.length )){
						#line 26 "F:\\nx3\\src\\nx3\\PComplex.hx"
						global::nx3.PNote note = ((global::nx3.PNote) (_g1[_g]) );
						#line 26 "F:\\nx3\\src\\nx3\\PComplex.hx"
						 ++ _g;
						#line 26 "F:\\nx3\\src\\nx3\\PComplex.hx"
						note.complex = __temp_me96;
					}
					
				}
				
				#line 27 "F:\\nx3\\src\\nx3\\PComplex.hx"
				__temp_me96.valueposition = valueposition;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				return new global::nx3.PComplex(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				return new global::nx3.PComplex(((global::nx3.PPart) (arr[0]) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[1]) ))) ), ((int) (global::haxe.lang.Runtime.toInt(arr[2])) ));
			}
			#line default
		}
		
		
		public  global::nx3.PPart part;
		
		public  int valueposition;
		
		public  global::Array<object> notes;
		
		public virtual   global::Array<object> getNotes(){
			unchecked {
				#line 30 "F:\\nx3\\src\\nx3\\PComplex.hx"
				return this.notes;
			}
			#line default
		}
		
		
		public virtual   int getValueposition(){
			unchecked {
				#line 32 "F:\\nx3\\src\\nx3\\PComplex.hx"
				return this.valueposition;
			}
			#line default
		}
		
		
		public virtual   global::nx3.PPart getPart(){
			unchecked {
				#line 34 "F:\\nx3\\src\\nx3\\PComplex.hx"
				return this.part;
			}
			#line default
		}
		
		
		public  global::nx3.PColumn column;
		
		public virtual   global::nx3.PColumn getColumn(){
			unchecked {
				#line 39 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (( this.column != default(global::nx3.PColumn) )) {
					#line 39 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return this.column;
				}
				
				#line 40 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.part.getBar().getColumns();
				if (( this.column == default(global::nx3.PColumn) )) {
					#line 41 "F:\\nx3\\src\\nx3\\PComplex.hx"
					throw global::haxe.lang.HaxeException.wrap("this shouldn\'t happen");
				}
				
				#line 42 "F:\\nx3\\src\\nx3\\PComplex.hx"
				return this.column;
			}
			#line default
		}
		
		
		public  global::Array<object> headsrects;
		
		public virtual   global::Array<object> getHeadsRects(){
			unchecked {
				#line 49 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (( this.headsrects != default(global::Array<object>) )) {
					#line 49 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return this.headsrects;
				}
				
				#line 50 "F:\\nx3\\src\\nx3\\PComplex.hx"
				global::Array<object> firstrects = ((global::nx3.PNote) (this.notes[0]) ).getHeadsRects();
				if (( this.notes.length == 1 )) {
					#line 51 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return firstrects;
				}
				
				#line 52 "F:\\nx3\\src\\nx3\\PComplex.hx"
				global::Array<object> secondrects = ((global::nx3.PNote) (this.notes[1]) ).getHeadsRects().copy();
				double xoffset = this.getNoteXOffset(((global::nx3.PNote) (this.notes[1]) ));
				global::nx3.geom.RectanglesTools.offset(secondrects, xoffset, ((double) (0) ));
				this.headsrects = firstrects.concat(secondrects);
				return this.headsrects;
			}
			#line default
		}
		
		
		public  global::Array<object> signsrects;
		
		public virtual   global::Array<object> getSignsRects(){
			unchecked {
				#line 62 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (( this.signsrects != default(global::Array<object>) )) {
					#line 62 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return this.signsrects;
				}
				
				#line 63 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (( this.getVisibleSigns().length == 0 )) {
					#line 63 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return new global::Array<object>(new object[]{});
				}
				
				#line 64 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.signsrects = new global::nx3.PSignsRectsCalculator(((global::Array<object>) (this.getVisibleSigns()) )).getSignRects(this.getHeadsRects());
				return this.signsrects;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> secondoffset;
		
		public virtual   double getNoteXOffset(global::nx3.PNote note){
			unchecked {
				#line 71 "F:\\nx3\\src\\nx3\\PComplex.hx"
				global::nx3.PNote __temp_stmt242 = default(global::nx3.PNote);
				#line 71 "F:\\nx3\\src\\nx3\\PComplex.hx"
				{
					#line 71 "F:\\nx3\\src\\nx3\\PComplex.hx"
					global::Array<object> array = this.getNotes();
					#line 71 "F:\\nx3\\src\\nx3\\PComplex.hx"
					__temp_stmt242 = ((global::nx3.PNote) (array[0]) );
				}
				
				#line 71 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (( note == __temp_stmt242 )) {
					#line 71 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return ((double) (0) );
				}
				
				#line 72 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (this.secondoffset.hasValue) {
					#line 72 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return this.secondoffset.@value;
				}
				
				#line 73 "F:\\nx3\\src\\nx3\\PComplex.hx"
				global::nx3.PNote __temp_stmt243 = default(global::nx3.PNote);
				#line 73 "F:\\nx3\\src\\nx3\\PComplex.hx"
				{
					#line 73 "F:\\nx3\\src\\nx3\\PComplex.hx"
					global::Array<object> array1 = this.getNotes();
					#line 73 "F:\\nx3\\src\\nx3\\PComplex.hx"
					__temp_stmt243 = ((global::nx3.PNote) (array1[1]) );
				}
				
				#line 73 "F:\\nx3\\src\\nx3\\PComplex.hx"
				global::nx3.PNoteOffsetCalculator __temp_stmt244 = new global::nx3.PNoteOffsetCalculator(((global::nx3.PComplex) (this) ));
				#line 73 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.secondoffset = new global::haxe.lang.Null<double>(__temp_stmt244.getNoteOffset(__temp_stmt243), true);
				return this.secondoffset.@value;
			}
			#line default
		}
		
		
		public  global::Array<object> signs;
		
		public virtual   global::Array<object> getSigns(){
			unchecked {
				#line 80 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (( this.signs != default(global::Array<object>) )) {
					#line 80 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return this.signs;
				}
				
				#line 81 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.signs = new global::nx3.PSignsCalculator(((global::Array<object>) (this.getNotes()) )).getSigns();
				return this.signs;
			}
			#line default
		}
		
		
		public  global::Array<object> visiblesigns;
		
		public virtual   global::Array<object> getVisibleSigns(){
			unchecked {
				#line 88 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (( this.visiblesigns != default(global::Array<object>) )) {
					#line 88 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return this.visiblesigns;
				}
				
				#line 89 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.visiblesigns = new global::nx3.PSignsCalculator(((global::Array<object>) (this.getNotes()) )).getVisibleSigns();
				return this.visiblesigns;
			}
			#line default
		}
		
		
		public  global::Array<object> stavesrects;
		
		public virtual   global::Array<object> getStavesRects(){
			unchecked {
				#line 96 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (( this.stavesrects != default(global::Array<object>) )) {
					#line 96 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return this.stavesrects;
				}
				
				#line 97 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.stavesrects = new global::Array<object>(new object[]{});
				#line 99 "F:\\nx3\\src\\nx3\\PComplex.hx"
				{
					#line 99 "F:\\nx3\\src\\nx3\\PComplex.hx"
					int _g = 0;
					#line 99 "F:\\nx3\\src\\nx3\\PComplex.hx"
					global::Array<object> _g1 = this.notes;
					#line 99 "F:\\nx3\\src\\nx3\\PComplex.hx"
					while (( _g < _g1.length )){
						#line 99 "F:\\nx3\\src\\nx3\\PComplex.hx"
						global::nx3.PNote note = ((global::nx3.PNote) (_g1[_g]) );
						#line 99 "F:\\nx3\\src\\nx3\\PComplex.hx"
						 ++ _g;
						#line 101 "F:\\nx3\\src\\nx3\\PComplex.hx"
						global::nx3.geom.Rectangle rect = this.getStaveRect(note);
						if (( rect != default(global::nx3.geom.Rectangle) )) {
							#line 102 "F:\\nx3\\src\\nx3\\PComplex.hx"
							this.stavesrects.push(rect);
						}
						
					}
					
				}
				
				#line 104 "F:\\nx3\\src\\nx3\\PComplex.hx"
				{
					#line 104 "F:\\nx3\\src\\nx3\\PComplex.hx"
					int _g2 = 0;
					#line 104 "F:\\nx3\\src\\nx3\\PComplex.hx"
					global::Array<object> _g11 = this.notes;
					#line 104 "F:\\nx3\\src\\nx3\\PComplex.hx"
					while (( _g2 < _g11.length )){
						#line 104 "F:\\nx3\\src\\nx3\\PComplex.hx"
						global::nx3.PNote note1 = ((global::nx3.PNote) (_g11[_g2]) );
						#line 104 "F:\\nx3\\src\\nx3\\PComplex.hx"
						 ++ _g2;
						#line 106 "F:\\nx3\\src\\nx3\\PComplex.hx"
						global::nx3.geom.Rectangle flagrect = new global::nx3.PStaveRectCalculator(((global::nx3.PNote) (note1) )).getFlagRect();
						if (( flagrect != default(global::nx3.geom.Rectangle) )) {
							#line 107 "F:\\nx3\\src\\nx3\\PComplex.hx"
							this.stavesrects.push(flagrect);
						}
						
					}
					
				}
				
				#line 109 "F:\\nx3\\src\\nx3\\PComplex.hx"
				return this.stavesrects;
			}
			#line default
		}
		
		
		public virtual   global::nx3.geom.Rectangle getStaveRect(global::nx3.PNote note){
			unchecked {
				#line 114 "F:\\nx3\\src\\nx3\\PComplex.hx"
				return new global::nx3.PStaveRectCalculator(((global::nx3.PNote) (note) )).getStaveRect();
			}
			#line default
		}
		
		
		public  global::Array<object> tierects;
		
		public virtual   global::Array<object> getTieRects(){
			unchecked {
				#line 120 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (( this.tierects != default(global::Array<object>) )) {
					#line 120 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return this.tierects;
				}
				
				#line 121 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.tierects = new global::nx3.PComplexTierectsCalculator(((global::nx3.PComplex) (this) )).getTieRects();
				return this.tierects;
			}
			#line default
		}
		
		
		public  global::Array<object> dotrects;
		
		public virtual   global::Array<object> getDotRects(){
			unchecked {
				#line 128 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (( this.dotrects != default(global::Array<object>) )) {
					#line 128 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return this.dotrects;
				}
				
				#line 129 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.dotrects = new global::nx3.PComplexDotsrectsCalculator(((global::nx3.PComplex) (this) )).getDotRects();
				return this.dotrects;
			}
			#line default
		}
		
		
		public  global::nx3.geom.Rectangle baserect;
		
		public virtual   global::nx3.geom.Rectangle getBaseRect(){
			unchecked {
				#line 137 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (( this.baserect != default(global::nx3.geom.Rectangle) )) {
					#line 137 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return this.baserect;
				}
				
				#line 138 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.baserect = new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (0) ), true));
				{
					#line 139 "F:\\nx3\\src\\nx3\\PComplex.hx"
					int _g = 0;
					#line 139 "F:\\nx3\\src\\nx3\\PComplex.hx"
					global::Array<object> _g1 = this.getNotes();
					#line 139 "F:\\nx3\\src\\nx3\\PComplex.hx"
					while (( _g < _g1.length )){
						#line 139 "F:\\nx3\\src\\nx3\\PComplex.hx"
						global::nx3.PNote note = ((global::nx3.PNote) (_g1[_g]) );
						#line 139 "F:\\nx3\\src\\nx3\\PComplex.hx"
						 ++ _g;
						#line 141 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.baserect = this.baserect.union(note.getBaseRect());
					}
					
				}
				
				#line 143 "F:\\nx3\\src\\nx3\\PComplex.hx"
				return this.baserect;
			}
			#line default
		}
		
		
		public  global::Array<object> allrects;
		
		public virtual   global::Array<object> getAllRects(){
			unchecked {
				#line 149 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (( this.allrects != default(global::Array<object>) )) {
					#line 149 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return this.allrects;
				}
				
				#line 150 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.allrects = new global::Array<object>(new object[]{});
				this.allrects = global::nx3.geom.RectanglesTools.concat(this.allrects, this.getHeadsRects());
				this.allrects = global::nx3.geom.RectanglesTools.concat(this.allrects, this.getStavesRects());
				this.allrects = global::nx3.geom.RectanglesTools.concat(this.allrects, this.getSignsRects());
				this.allrects = global::nx3.geom.RectanglesTools.concat(this.allrects, this.getTieRects());
				this.allrects = global::nx3.geom.RectanglesTools.concat(this.allrects, this.getDotRects());
				#line 157 "F:\\nx3\\src\\nx3\\PComplex.hx"
				return this.allrects;
			}
			#line default
		}
		
		
		public  global::nx3.geom.Rectangle rect;
		
		public virtual   global::nx3.geom.Rectangle getRect(){
			unchecked {
				#line 163 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.rect = global::nx3.geom.RectanglesTools.unionAll(this.getAllRects());
				return this.rect;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> xposition;
		
		public virtual   double getXPosition(){
			unchecked {
				#line 170 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (this.xposition.hasValue) {
					#line 170 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return this.xposition.@value;
				}
				
				#line 172 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.getHeadsRects();
				#line 175 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.xposition = new global::haxe.lang.Null<double>(this.getColumn().getSPosition(), true);
				return this.xposition.@value;
			}
			#line default
		}
		
		
		public virtual   int getIndex(){
			unchecked {
				#line 181 "F:\\nx3\\src\\nx3\\PComplex.hx"
				return this.part.getComplexes().indexOf(this, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> leftX;
		
		public virtual   double getLeftX(){
			unchecked {
				#line 187 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (this.leftX.hasValue) {
					#line 187 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return this.leftX.@value;
				}
				
				#line 188 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.leftX = new global::haxe.lang.Null<double>(this.getRect().x, true);
				return this.leftX.@value;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> rightX;
		
		public virtual   double getRightX(){
			unchecked {
				#line 195 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (this.rightX.hasValue) {
					#line 195 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return this.rightX.@value;
				}
				
				#line 196 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.rightX = new global::haxe.lang.Null<double>(( this.getRect().x + this.getRect().width ), true);
				return this.rightX.@value;
			}
			#line default
		}
		
		
		public  global::nx3.PComplex next;
		
		public virtual   global::nx3.PComplex getNext(){
			unchecked {
				#line 203 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (( this.next != default(global::nx3.PComplex) )) {
					#line 203 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return this.next;
				}
				
				#line 204 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.next = this.getColumn().getNextComplex(this);
				return this.next;
			}
			#line default
		}
		
		
		public  global::Array<object> tieinfos;
		
		public virtual   void setTieinfos(global::Array<object> val){
			unchecked {
				#line 211 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.tieinfos = val;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getTieinfos(){
			unchecked {
				#line 216 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (( this.tieinfos == default(global::Array<object>) )) {
					#line 216 "F:\\nx3\\src\\nx3\\PComplex.hx"
					this.getTieRects();
				}
				
				#line 217 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (( this.getTieRects().length == 0 )) {
					#line 217 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return new global::Array<object>(new object[]{});
				}
				
				#line 218 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.tieinfos = new global::nx3.PComplexTieTargetCalculator(((global::Array<object>) (this.tieinfos) )).findTargetHeads();
				return this.tieinfos;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getHeads(){
			unchecked {
				#line 224 "F:\\nx3\\src\\nx3\\PComplex.hx"
				global::Array<object> result = new global::Array<object>(new object[]{});
				{
					#line 225 "F:\\nx3\\src\\nx3\\PComplex.hx"
					int _g = 0;
					#line 225 "F:\\nx3\\src\\nx3\\PComplex.hx"
					global::Array<object> _g1 = this.getNotes();
					#line 225 "F:\\nx3\\src\\nx3\\PComplex.hx"
					while (( _g < _g1.length )){
						#line 225 "F:\\nx3\\src\\nx3\\PComplex.hx"
						global::nx3.PNote note = ((global::nx3.PNote) (_g1[_g]) );
						#line 225 "F:\\nx3\\src\\nx3\\PComplex.hx"
						 ++ _g;
						#line 225 "F:\\nx3\\src\\nx3\\PComplex.hx"
						result = result.concat(note.get_heads());
					}
					
				}
				
				#line 226 "F:\\nx3\\src\\nx3\\PComplex.hx"
				return result;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<bool> hasTie;
		
		public virtual   bool getHasTie(){
			unchecked {
				#line 232 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (this.hasTie.hasValue) {
					#line 232 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return this.hasTie.@value;
				}
				
				#line 233 "F:\\nx3\\src\\nx3\\PComplex.hx"
				{
					#line 233 "F:\\nx3\\src\\nx3\\PComplex.hx"
					int _g = 0;
					#line 233 "F:\\nx3\\src\\nx3\\PComplex.hx"
					global::Array<object> _g1 = this.getNotes();
					#line 233 "F:\\nx3\\src\\nx3\\PComplex.hx"
					while (( _g < _g1.length )){
						#line 233 "F:\\nx3\\src\\nx3\\PComplex.hx"
						global::nx3.PNote note = ((global::nx3.PNote) (_g1[_g]) );
						#line 233 "F:\\nx3\\src\\nx3\\PComplex.hx"
						 ++ _g;
						#line 235 "F:\\nx3\\src\\nx3\\PComplex.hx"
						if (global::haxe.lang.Runtime.eq((note.getHasTie()).toDynamic(), true)) {
							#line 237 "F:\\nx3\\src\\nx3\\PComplex.hx"
							this.hasTie = new global::haxe.lang.Null<bool>(true, true);
							return this.hasTie.@value;
						}
						
					}
					
				}
				
				#line 241 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.hasTie = new global::haxe.lang.Null<bool>(false, true);
				return this.hasTie.@value;
			}
			#line default
		}
		
		
		public  global::Array<int> headlevels;
		
		public virtual   global::Array<int> getHeadLevels(){
			unchecked {
				#line 248 "F:\\nx3\\src\\nx3\\PComplex.hx"
				if (( this.headlevels != default(global::Array<int>) )) {
					#line 248 "F:\\nx3\\src\\nx3\\PComplex.hx"
					return this.headlevels;
				}
				
				#line 249 "F:\\nx3\\src\\nx3\\PComplex.hx"
				this.headlevels = new global::Array<int>(new int[]{});
				{
					#line 250 "F:\\nx3\\src\\nx3\\PComplex.hx"
					int _g = 0;
					#line 250 "F:\\nx3\\src\\nx3\\PComplex.hx"
					global::Array<object> _g1 = this.getNotes();
					#line 250 "F:\\nx3\\src\\nx3\\PComplex.hx"
					while (( _g < _g1.length )){
						#line 250 "F:\\nx3\\src\\nx3\\PComplex.hx"
						global::nx3.PNote note = ((global::nx3.PNote) (_g1[_g]) );
						#line 250 "F:\\nx3\\src\\nx3\\PComplex.hx"
						 ++ _g;
						#line 252 "F:\\nx3\\src\\nx3\\PComplex.hx"
						{
							#line 252 "F:\\nx3\\src\\nx3\\PComplex.hx"
							int _g2 = 0;
							#line 252 "F:\\nx3\\src\\nx3\\PComplex.hx"
							global::Array<object> _g3 = note.nnote.get_nheads();
							#line 252 "F:\\nx3\\src\\nx3\\PComplex.hx"
							while (( _g2 < _g3.length )){
								#line 252 "F:\\nx3\\src\\nx3\\PComplex.hx"
								global::nx3.NHead nhead = ((global::nx3.NHead) (_g3[_g2]) );
								#line 252 "F:\\nx3\\src\\nx3\\PComplex.hx"
								 ++ _g2;
								#line 252 "F:\\nx3\\src\\nx3\\PComplex.hx"
								this.headlevels.push(nhead.level);
							}
							
						}
						
					}
					
				}
				
				#line 254 "F:\\nx3\\src\\nx3\\PComplex.hx"
				return this.headlevels;
			}
			#line default
		}
		
		
		public virtual   string toString(){
			unchecked {
				#line 261 "F:\\nx3\\src\\nx3\\PComplex.hx"
				string str = "PComplex: \r";
				{
					#line 262 "F:\\nx3\\src\\nx3\\PComplex.hx"
					int _g = 0;
					#line 262 "F:\\nx3\\src\\nx3\\PComplex.hx"
					global::Array<object> _g1 = this.getNotes();
					#line 262 "F:\\nx3\\src\\nx3\\PComplex.hx"
					while (( _g < _g1.length )){
						#line 262 "F:\\nx3\\src\\nx3\\PComplex.hx"
						global::nx3.PNote note = ((global::nx3.PNote) (_g1[_g]) );
						#line 262 "F:\\nx3\\src\\nx3\\PComplex.hx"
						 ++ _g;
						#line 262 "F:\\nx3\\src\\nx3\\PComplex.hx"
						str = global::haxe.lang.Runtime.concat(str, global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat("- Note: ", global::Std.@string(note.nnote)), "\r"));
					}
					
				}
				
				#line 263 "F:\\nx3\\src\\nx3\\PComplex.hx"
				return str;
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				switch (hash){
					case 1415149850:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.valueposition = ((int) (@value) );
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					default:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				switch (hash){
					case 1716420495:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.headlevels = ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 994012694:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.hasTie = global::haxe.lang.Null<object>.ofDynamic<bool>(@value);
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 424346869:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.tieinfos = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 1224901875:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.next = ((global::nx3.PComplex) (@value) );
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 1311134972:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.rightX = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 1918303857:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.leftX = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 740546849:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.xposition = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 1269255460:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.rect = ((global::nx3.geom.Rectangle) (@value) );
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 1282572814:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.allrects = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 354161077:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.baserect = ((global::nx3.geom.Rectangle) (@value) );
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 665132966:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.dotrects = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 1106317183:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.tierects = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 438333067:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.stavesrects = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 1596084196:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.visiblesigns = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 2093655446:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.signs = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 1720088071:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.secondoffset = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 700681593:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.signsrects = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 600142492:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.headsrects = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 1183534806:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.column = ((global::nx3.PColumn) (@value) );
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 533388353:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.notes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 1415149850:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.valueposition = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					case 1246880755:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.part = ((global::nx3.PPart) (@value) );
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return @value;
					}
					
					
					default:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				switch (hash){
					case 946786476:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("toString") ), ((int) (946786476) ))) );
					}
					
					
					case 2002079717:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHeadLevels") ), ((int) (2002079717) ))) );
					}
					
					
					case 1716420495:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.headlevels;
					}
					
					
					case 932575052:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHasTie") ), ((int) (932575052) ))) );
					}
					
					
					case 994012694:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return (this.hasTie).toDynamic();
					}
					
					
					case 76538589:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHeads") ), ((int) (76538589) ))) );
					}
					
					
					case 1061078955:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getTieinfos") ), ((int) (1061078955) ))) );
					}
					
					
					case 1235996343:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("setTieinfos") ), ((int) (1235996343) ))) );
					}
					
					
					case 424346869:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.tieinfos;
					}
					
					
					case 461714601:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNext") ), ((int) (461714601) ))) );
					}
					
					
					case 1224901875:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.next;
					}
					
					
					case 1249697330:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getRightX") ), ((int) (1249697330) ))) );
					}
					
					
					case 1311134972:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return (this.rightX).toDynamic();
					}
					
					
					case 1378749947:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getLeftX") ), ((int) (1378749947) ))) );
					}
					
					
					case 1918303857:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return (this.leftX).toDynamic();
					}
					
					
					case 501983900:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getIndex") ), ((int) (501983900) ))) );
					}
					
					
					case 355217867:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getXPosition") ), ((int) (355217867) ))) );
					}
					
					
					case 740546849:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return (this.xposition).toDynamic();
					}
					
					
					case 506068186:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getRect") ), ((int) (506068186) ))) );
					}
					
					
					case 1269255460:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.rect;
					}
					
					
					case 93566116:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getAllRects") ), ((int) (93566116) ))) );
					}
					
					
					case 1282572814:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.allrects;
					}
					
					
					case 636027019:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBaseRect") ), ((int) (636027019) ))) );
					}
					
					
					case 354161077:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.baserect;
					}
					
					
					case 1623609916:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getDotRects") ), ((int) (1623609916) ))) );
					}
					
					
					case 665132966:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.dotrects;
					}
					
					
					case 2064794133:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getTieRects") ), ((int) (2064794133) ))) );
					}
					
					
					case 1106317183:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.tierects;
					}
					
					
					case 173809949:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getStaveRect") ), ((int) (173809949) ))) );
					}
					
					
					case 887894389:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getStavesRects") ), ((int) (887894389) ))) );
					}
					
					
					case 438333067:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.stavesrects;
					}
					
					
					case 356128122:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVisibleSigns") ), ((int) (356128122) ))) );
					}
					
					
					case 1596084196:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.visiblesigns;
					}
					
					
					case 1554101536:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getSigns") ), ((int) (1554101536) ))) );
					}
					
					
					case 2093655446:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.signs;
					}
					
					
					case 1308220259:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNoteXOffset") ), ((int) (1308220259) ))) );
					}
					
					
					case 1720088071:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return (this.secondoffset).toDynamic();
					}
					
					
					case 425941391:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getSignsRects") ), ((int) (425941391) ))) );
					}
					
					
					case 700681593:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.signsrects;
					}
					
					
					case 325402290:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHeadsRects") ), ((int) (325402290) ))) );
					}
					
					
					case 600142492:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.headsrects;
					}
					
					
					case 1122097164:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getColumn") ), ((int) (1122097164) ))) );
					}
					
					
					case 1183534806:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.column;
					}
					
					
					case 483693481:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getPart") ), ((int) (483693481) ))) );
					}
					
					
					case 1048191652:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getValueposition") ), ((int) (1048191652) ))) );
					}
					
					
					case 2141318091:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNotes") ), ((int) (2141318091) ))) );
					}
					
					
					case 533388353:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.notes;
					}
					
					
					case 1415149850:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.valueposition;
					}
					
					
					case 1246880755:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.part;
					}
					
					
					default:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				switch (hash){
					case 1415149850:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return ((double) (this.valueposition) );
					}
					
					
					default:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				switch (hash){
					case 946786476:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.toString();
					}
					
					
					case 2002079717:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getHeadLevels();
					}
					
					
					case 932575052:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getHasTie();
					}
					
					
					case 76538589:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getHeads();
					}
					
					
					case 1061078955:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getTieinfos();
					}
					
					
					case 1235996343:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						this.setTieinfos(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ));
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						break;
					}
					
					
					case 461714601:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getNext();
					}
					
					
					case 1249697330:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getRightX();
					}
					
					
					case 1378749947:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getLeftX();
					}
					
					
					case 501983900:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getIndex();
					}
					
					
					case 355217867:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getXPosition();
					}
					
					
					case 506068186:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getRect();
					}
					
					
					case 93566116:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getAllRects();
					}
					
					
					case 636027019:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getBaseRect();
					}
					
					
					case 1623609916:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getDotRects();
					}
					
					
					case 2064794133:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getTieRects();
					}
					
					
					case 173809949:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getStaveRect(((global::nx3.PNote) (dynargs[0]) ));
					}
					
					
					case 887894389:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getStavesRects();
					}
					
					
					case 356128122:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getVisibleSigns();
					}
					
					
					case 1554101536:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getSigns();
					}
					
					
					case 1308220259:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getNoteXOffset(((global::nx3.PNote) (dynargs[0]) ));
					}
					
					
					case 425941391:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getSignsRects();
					}
					
					
					case 325402290:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getHeadsRects();
					}
					
					
					case 1122097164:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getColumn();
					}
					
					
					case 483693481:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getPart();
					}
					
					
					case 1048191652:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getValueposition();
					}
					
					
					case 2141318091:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return this.getNotes();
					}
					
					
					default:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("headlevels");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("hasTie");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("tieinfos");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("next");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("rightX");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("leftX");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("xposition");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("rect");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("allrects");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("baserect");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("dotrects");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("tierects");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("stavesrects");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("visiblesigns");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("signs");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("secondoffset");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("signsrects");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("headsrects");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("column");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("notes");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("valueposition");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				baseArr.push("part");
				#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
				{
					#line 15 "F:\\nx3\\src\\nx3\\PComplex.hx"
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


