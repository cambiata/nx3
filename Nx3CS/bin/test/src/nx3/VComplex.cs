
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VComplex : global::haxe.lang.HxObject {
		public    VComplex(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VComplex(global::Array<object> vnotes, global::Array<global::nx3.EDirectionUD> directions){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\VComplex.hx"
				global::nx3.VComplex.__hx_ctor_nx3_VComplex(this, vnotes, directions);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VComplex(global::nx3.VComplex __temp_me169, global::Array<object> vnotes, global::Array<global::nx3.EDirectionUD> directions){
			unchecked {
				#line 258 "F:\\nx3\\src\\nx3\\VComplex.hx"
				__temp_me169.notesHeadsRects = default(global::Array<object>);
				#line 257 "F:\\nx3\\src\\nx3\\VComplex.hx"
				__temp_me169.notesHeadsRectsDirCheck = default(global::Array<global::nx3.EDirectionUD>);
				#line 20 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( vnotes.length > 2 )) {
					#line 20 "F:\\nx3\\src\\nx3\\VComplex.hx"
					throw global::haxe.lang.HaxeException.wrap("VComplex nr of VNote(s) limited to max 2 - for now");
				}
				
				#line 21 "F:\\nx3\\src\\nx3\\VComplex.hx"
				__temp_me169.vnotes = vnotes;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
				return new global::nx3.VComplex(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
				return new global::nx3.VComplex(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ), ((global::Array<global::nx3.EDirectionUD>) (global::Array<object>.__hx_cast<global::nx3.EDirectionUD>(((global::Array) (arr[1]) ))) ));
			}
			#line default
		}
		
		
		public  global::Array<object> vnotes;
		
		public  global::Array<object> signs;
		
		public  global::Array<object> visibleSigns;
		
		public  global::nx3.VComplexSignsCalculator calculator;
		
		public virtual   global::Array<object> getVNotes(){
			unchecked {
				#line 31 "F:\\nx3\\src\\nx3\\VComplex.hx"
				return this.vnotes;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getSigns(){
			unchecked {
				#line 36 "F:\\nx3\\src\\nx3\\VComplex.hx"
				this.calculator = new global::nx3.VComplexSignsCalculator(((global::Array<object>) (this.vnotes) ));
				this.signs = this.calculator.getSigns();
				this.visibleSigns = this.calculator.getVisibleSigns();
				return this.signs;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getVisibleSigns(){
			unchecked {
				#line 44 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( this.visibleSigns != default(global::Array<object>) )) {
					#line 44 "F:\\nx3\\src\\nx3\\VComplex.hx"
					return this.visibleSigns;
				}
				
				#line 45 "F:\\nx3\\src\\nx3\\VComplex.hx"
				this.getSigns();
				return this.visibleSigns;
			}
			#line default
		}
		
		
		public  global::Array<object> signRects;
		
		public virtual   global::Array<object> getSignsRects(global::Array<object> headsRects){
			unchecked {
				#line 52 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( this.signRects != default(global::Array<object>) )) {
					#line 52 "F:\\nx3\\src\\nx3\\VComplex.hx"
					return this.signRects;
				}
				
				#line 53 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( this.getVisibleSigns().length == 0 )) {
					#line 53 "F:\\nx3\\src\\nx3\\VComplex.hx"
					return new global::Array<object>(new object[]{});
				}
				
				#line 54 "F:\\nx3\\src\\nx3\\VComplex.hx"
				this.signRects = new global::nx3.VComplexSignsRectsCalculator(((global::Array<object>) (this.getVisibleSigns()) )).getSignRects(headsRects);
				return this.signRects;
			}
			#line default
		}
		
		
		public  global::Array<object> tiestoRects;
		
		public virtual   global::Array<object> getTiestoRects(global::Array<object> headsRects){
			unchecked {
				#line 63 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( this.signRects == default(global::Array<object>) )) {
					#line 63 "F:\\nx3\\src\\nx3\\VComplex.hx"
					this.getSignsRects(headsRects);
				}
				
				#line 64 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( this.tiestoRects != default(global::Array<object>) )) {
					#line 64 "F:\\nx3\\src\\nx3\\VComplex.hx"
					return this.tiestoRects;
				}
				
				#line 66 "F:\\nx3\\src\\nx3\\VComplex.hx"
				global::Array<object> rects = default(global::Array<object>);
				#line 66 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( ( this.signRects != default(global::Array<object>) ) && ( this.signRects.length > 0 ) )) {
					#line 66 "F:\\nx3\\src\\nx3\\VComplex.hx"
					rects = this.signRects;
				}
				 else {
					#line 66 "F:\\nx3\\src\\nx3\\VComplex.hx"
					rects = headsRects;
				}
				
				#line 68 "F:\\nx3\\src\\nx3\\VComplex.hx"
				this.tiestoRects = new global::nx3.VComplexTiestoRectsCalculator(((global::Array<object>) (this.getComplexTiestos()) )).getTiestoRects(rects);
				#line 70 "F:\\nx3\\src\\nx3\\VComplex.hx"
				return this.tiestoRects;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getComplexTiestos(){
			unchecked {
				#line 77 "F:\\nx3\\src\\nx3\\VComplex.hx"
				return default(global::Array<object>);
			}
			#line default
		}
		
		
		public  global::Array<object> dotsRects;
		
		public virtual   global::Array<object> getDotsRects(global::Array<object> headsRects, global::Array<global::nx3.EDirectionUD> directions){
			unchecked {
				#line 84 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( this.dotsRects != default(global::Array<object>) )) {
					#line 84 "F:\\nx3\\src\\nx3\\VComplex.hx"
					return this.dotsRects;
				}
				
				#line 86 "F:\\nx3\\src\\nx3\\VComplex.hx"
				this.dotsRects = new global::nx3.VComplexDotsRectsCalculator(((global::Array<object>) (this.getDots(directions)) )).getDotsRects(headsRects);
				#line 88 "F:\\nx3\\src\\nx3\\VComplex.hx"
				return this.dotsRects;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getDots(global::Array<global::nx3.EDirectionUD> directions){
			unchecked {
				#line 94 "F:\\nx3\\src\\nx3\\VComplex.hx"
				global::Array<object> result = default(global::Array<object>);
				#line 96 "F:\\nx3\\src\\nx3\\VComplex.hx"
				{
					#line 96 "F:\\nx3\\src\\nx3\\VComplex.hx"
					int _g = 0;
					#line 96 "F:\\nx3\\src\\nx3\\VComplex.hx"
					global::Array<object> _g1 = this.getVNotes();
					#line 96 "F:\\nx3\\src\\nx3\\VComplex.hx"
					while (( _g < _g1.length )){
						#line 96 "F:\\nx3\\src\\nx3\\VComplex.hx"
						global::nx3.VNote vnote = ((global::nx3.VNote) (_g1[_g]) );
						#line 96 "F:\\nx3\\src\\nx3\\VComplex.hx"
						 ++ _g;
						#line 98 "F:\\nx3\\src\\nx3\\VComplex.hx"
						int dotlevel = global::nx3.ENoteValTools.dotlevel(vnote.nnote.@value);
						if (( dotlevel != 0 )) {
							#line 101 "F:\\nx3\\src\\nx3\\VComplex.hx"
							if (( result == default(global::Array<object>) )) {
								#line 101 "F:\\nx3\\src\\nx3\\VComplex.hx"
								result = new global::Array<object>();
							}
							
							#line 102 "F:\\nx3\\src\\nx3\\VComplex.hx"
							{
								#line 102 "F:\\nx3\\src\\nx3\\VComplex.hx"
								int _g2 = 0;
								#line 102 "F:\\nx3\\src\\nx3\\VComplex.hx"
								global::Array<object> _g3 = vnote.nnote.get_nheads();
								#line 102 "F:\\nx3\\src\\nx3\\VComplex.hx"
								while (( _g2 < _g3.length )){
									#line 102 "F:\\nx3\\src\\nx3\\VComplex.hx"
									global::nx3.NHead nhead = ((global::nx3.NHead) (_g3[_g2]) );
									#line 102 "F:\\nx3\\src\\nx3\\VComplex.hx"
									 ++ _g2;
									#line 104 "F:\\nx3\\src\\nx3\\VComplex.hx"
									global::nx3.EDot dot = global::nx3.EDot.Normal(nhead.level);
									if (( dotlevel == 2 )) {
										#line 105 "F:\\nx3\\src\\nx3\\VComplex.hx"
										dot = global::nx3.EDot.Double(nhead.level);
									}
									
									#line 106 "F:\\nx3\\src\\nx3\\VComplex.hx"
									result.push(dot);
								}
								
							}
							
						}
						
					}
					
				}
				
				#line 112 "F:\\nx3\\src\\nx3\\VComplex.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   double getHeadsCollisionOffsetX(global::nx3.VNote note, global::nx3.EDirectionUD direction){
			unchecked {
				#line 121 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( this.vnotes.length == 1 )) {
					#line 121 "F:\\nx3\\src\\nx3\\VComplex.hx"
					return ((double) (0) );
				}
				
				#line 123 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( note == ((global::nx3.VNote) (this.vnotes[0]) ) )) {
					#line 123 "F:\\nx3\\src\\nx3\\VComplex.hx"
					return ((double) (0) );
				}
				
				#line 126 "F:\\nx3\\src\\nx3\\VComplex.hx"
				global::nx3.VNote firstnote = ((global::nx3.VNote) (this.vnotes[0]) );
				global::nx3.VNote secondnote = note;
				#line 133 "F:\\nx3\\src\\nx3\\VComplex.hx"
				int diff = ( secondnote.nnote.getTopLevel() - firstnote.nnote.getBottomLevel() );
				#line 135 "F:\\nx3\\src\\nx3\\VComplex.hx"
				double offsetX = 0.0;
				#line 137 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( diff < 1 )) {
					#line 137 "F:\\nx3\\src\\nx3\\VComplex.hx"
					if (( global::nx3.ENoteValTools.head(firstnote.nnote.@value) == global::nx3.EHeadValueType.HVT1 )) {
						#line 137 "F:\\nx3\\src\\nx3\\VComplex.hx"
						offsetX = 4.4;
					}
					 else {
						#line 137 "F:\\nx3\\src\\nx3\\VComplex.hx"
						offsetX = 3.2;
					}
					
				}
				
				#line 140 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( diff == 1 )) {
					#line 142 "F:\\nx3\\src\\nx3\\VComplex.hx"
					if (( global::nx3.ENoteValTools.head(firstnote.nnote.@value) == global::nx3.EHeadValueType.HVT1 )) {
						#line 142 "F:\\nx3\\src\\nx3\\VComplex.hx"
						offsetX = 4.4;
					}
					 else {
						#line 142 "F:\\nx3\\src\\nx3\\VComplex.hx"
						offsetX = 3.2;
					}
					
					#line 143 "F:\\nx3\\src\\nx3\\VComplex.hx"
					if (( global::nx3.ENoteValTools.head(firstnote.nnote.@value) == global::nx3.EHeadValueType.HVT1 )) {
						#line 143 "F:\\nx3\\src\\nx3\\VComplex.hx"
						offsetX = ( 0.9 * offsetX );
					}
					 else {
						#line 143 "F:\\nx3\\src\\nx3\\VComplex.hx"
						offsetX = ( 0.7 * offsetX );
					}
					
				}
				
				#line 154 "F:\\nx3\\src\\nx3\\VComplex.hx"
				return offsetX;
			}
			#line default
		}
		
		
		public virtual   double getRectanglesXIntersection(global::Array<object> rectsA, global::Array<object> rectsB){
			unchecked {
				#line 157 "F:\\nx3\\src\\nx3\\VComplex.hx"
				global::Array<object> rectsA1 = new global::Array<object>(new object[]{rectsA});
				#line 159 "F:\\nx3\\src\\nx3\\VComplex.hx"
				global::Array<object> rectsB2 = new global::Array<object>(new object[]{new global::Array<object>()});
				{
					#line 160 "F:\\nx3\\src\\nx3\\VComplex.hx"
					int _g = 0;
					#line 160 "F:\\nx3\\src\\nx3\\VComplex.hx"
					while (( _g < rectsB.length )){
						#line 160 "F:\\nx3\\src\\nx3\\VComplex.hx"
						global::nx3.geom.Rectangle r = ((global::nx3.geom.Rectangle) (rectsB[_g]) );
						#line 160 "F:\\nx3\\src\\nx3\\VComplex.hx"
						 ++ _g;
						#line 160 "F:\\nx3\\src\\nx3\\VComplex.hx"
						((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (rectsB2[0]) ))) ).push(r.clone());
					}
					
				}
				
				#line 161 "F:\\nx3\\src\\nx3\\VComplex.hx"
				global::haxe.lang.Function check = new global::nx3.VComplex_getRectanglesXIntersection_161__Fun(((global::Array<object>) (rectsA1) ), ((global::Array<object>) (rectsB2) ));
				#line 173 "F:\\nx3\\src\\nx3\\VComplex.hx"
				double x = ((double) (0) );
				double moveX = ((double) (check.__hx_invoke0_f()) );
				while (( moveX > 0 )){
					#line 177 "F:\\nx3\\src\\nx3\\VComplex.hx"
					x += moveX;
					{
						#line 178 "F:\\nx3\\src\\nx3\\VComplex.hx"
						int _g2 = 0;
						#line 178 "F:\\nx3\\src\\nx3\\VComplex.hx"
						while (( _g2 < ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (rectsB2[0]) ))) ).length )){
							#line 178 "F:\\nx3\\src\\nx3\\VComplex.hx"
							global::nx3.geom.Rectangle r1 = ((global::nx3.geom.Rectangle) (((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (rectsB2[0]) ))) )[_g2]) );
							#line 178 "F:\\nx3\\src\\nx3\\VComplex.hx"
							 ++ _g2;
							#line 178 "F:\\nx3\\src\\nx3\\VComplex.hx"
							r1.offset(moveX, ((double) (0) ));
						}
						
					}
					
					#line 179 "F:\\nx3\\src\\nx3\\VComplex.hx"
					moveX = ((double) (check.__hx_invoke0_f()) );
				}
				
				#line 181 "F:\\nx3\\src\\nx3\\VComplex.hx"
				return x;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getNoteHeadsRects(global::nx3.VNote note, global::nx3.EDirectionUD dir){
			unchecked {
				#line 188 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( dir == default(global::nx3.EDirectionUD) )) {
					#line 188 "F:\\nx3\\src\\nx3\\VComplex.hx"
					dir = new global::nx3.VNoteInternalDirectionCalculator(((global::Array<object>) (note.getVHeads()) )).getDirection();
				}
				
				#line 191 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( note == ((global::nx3.VNote) (this.vnotes[0]) ) )) {
					#line 194 "F:\\nx3\\src\\nx3\\VComplex.hx"
					return note.getVHeadsRectanglesDir(dir);
				}
				
				#line 198 "F:\\nx3\\src\\nx3\\VComplex.hx"
				global::Array<object> rects = note.getVHeadsRectanglesDir(dir);
				double offsetX = this.getHeadsCollisionOffsetX(note, dir);
				#line 201 "F:\\nx3\\src\\nx3\\VComplex.hx"
				{
					#line 201 "F:\\nx3\\src\\nx3\\VComplex.hx"
					int _g = 0;
					#line 201 "F:\\nx3\\src\\nx3\\VComplex.hx"
					while (( _g < rects.length )){
						#line 201 "F:\\nx3\\src\\nx3\\VComplex.hx"
						global::nx3.geom.Rectangle rect = ((global::nx3.geom.Rectangle) (rects[_g]) );
						#line 201 "F:\\nx3\\src\\nx3\\VComplex.hx"
						 ++ _g;
						#line 201 "F:\\nx3\\src\\nx3\\VComplex.hx"
						rect.offset(offsetX, ((double) (0) ));
					}
					
				}
				
				#line 202 "F:\\nx3\\src\\nx3\\VComplex.hx"
				return rects;
			}
			#line default
		}
		
		
		public virtual   global::nx3.geom.Rectangle getNoteRect(global::nx3.VNote note, global::nx3.EDirectionUD dir){
			unchecked {
				#line 211 "F:\\nx3\\src\\nx3\\VComplex.hx"
				global::nx3.geom.Rectangle result = default(global::nx3.geom.Rectangle);
				#line 214 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( note == ((global::nx3.VNote) (this.vnotes[0]) ) )) {
					#line 216 "F:\\nx3\\src\\nx3\\VComplex.hx"
					if (( dir == default(global::nx3.EDirectionUD) )) {
						#line 216 "F:\\nx3\\src\\nx3\\VComplex.hx"
						dir = new global::nx3.VNoteInternalDirectionCalculator(((global::Array<object>) (note.getVHeads()) )).getDirection();
					}
					
					#line 217 "F:\\nx3\\src\\nx3\\VComplex.hx"
					global::Array<object> rects = note.getVHeadsRectanglesDir(dir);
					result = ((global::nx3.geom.Rectangle) (rects[0]) ).clone();
					{
						#line 219 "F:\\nx3\\src\\nx3\\VComplex.hx"
						int _g1 = 1;
						#line 219 "F:\\nx3\\src\\nx3\\VComplex.hx"
						int _g = rects.length;
						#line 219 "F:\\nx3\\src\\nx3\\VComplex.hx"
						while (( _g1 < _g )){
							#line 219 "F:\\nx3\\src\\nx3\\VComplex.hx"
							int i = _g1++;
							#line 221 "F:\\nx3\\src\\nx3\\VComplex.hx"
							result = result.union(((global::nx3.geom.Rectangle) (rects[i]) ));
						}
						
					}
					
					#line 223 "F:\\nx3\\src\\nx3\\VComplex.hx"
					return result;
				}
				
				#line 228 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( dir == default(global::nx3.EDirectionUD) )) {
					#line 228 "F:\\nx3\\src\\nx3\\VComplex.hx"
					dir = new global::nx3.VNoteInternalDirectionCalculator(((global::Array<object>) (note.getVHeads()) )).getDirection();
				}
				
				#line 229 "F:\\nx3\\src\\nx3\\VComplex.hx"
				global::Array<object> rects1 = note.getVHeadsRectanglesDir(dir);
				result = ((global::nx3.geom.Rectangle) (rects1[0]) ).clone();
				{
					#line 231 "F:\\nx3\\src\\nx3\\VComplex.hx"
					int _g11 = 1;
					#line 231 "F:\\nx3\\src\\nx3\\VComplex.hx"
					int _g2 = rects1.length;
					#line 231 "F:\\nx3\\src\\nx3\\VComplex.hx"
					while (( _g11 < _g2 )){
						#line 231 "F:\\nx3\\src\\nx3\\VComplex.hx"
						int i1 = _g11++;
						#line 233 "F:\\nx3\\src\\nx3\\VComplex.hx"
						result = result.union(((global::nx3.geom.Rectangle) (rects1[i1]) ));
					}
					
				}
				
				#line 237 "F:\\nx3\\src\\nx3\\VComplex.hx"
				double offsetX = this.getHeadsCollisionOffsetX(note, dir);
				result.offset(offsetX, ((double) (0) ));
				#line 240 "F:\\nx3\\src\\nx3\\VComplex.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getNotesRects(global::Array<global::nx3.EDirectionUD> directions){
			unchecked {
				#line 245 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( directions.length != this.getVNotes().length )) {
					#line 245 "F:\\nx3\\src\\nx3\\VComplex.hx"
					throw global::haxe.lang.HaxeException.wrap("Directions.length != vnotes.length");
				}
				
				#line 246 "F:\\nx3\\src\\nx3\\VComplex.hx"
				global::Array<object> result = new global::Array<object>();
				{
					#line 247 "F:\\nx3\\src\\nx3\\VComplex.hx"
					int _g1 = 0;
					#line 247 "F:\\nx3\\src\\nx3\\VComplex.hx"
					int _g = this.getVNotes().length;
					#line 247 "F:\\nx3\\src\\nx3\\VComplex.hx"
					while (( _g1 < _g )){
						#line 247 "F:\\nx3\\src\\nx3\\VComplex.hx"
						int i = _g1++;
						#line 249 "F:\\nx3\\src\\nx3\\VComplex.hx"
						global::nx3.VNote vnote = ((global::nx3.VNote) (this.getVNotes()[i]) );
						global::nx3.geom.Rectangle rect = this.getNoteRect(vnote, directions[i]);
						result.push(rect);
					}
					
				}
				
				#line 253 "F:\\nx3\\src\\nx3\\VComplex.hx"
				return result;
			}
			#line default
		}
		
		
		public  global::Array<global::nx3.EDirectionUD> notesHeadsRectsDirCheck;
		
		public  global::Array<object> notesHeadsRects;
		
		public virtual   global::Array<object> getNotesHeadsRects(global::Array<global::nx3.EDirectionUD> directions){
			unchecked {
				#line 261 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( ( this.notesHeadsRects != default(global::Array<object>) ) && ( this.notesHeadsRectsDirCheck == directions ) )) {
					#line 261 "F:\\nx3\\src\\nx3\\VComplex.hx"
					return this.notesHeadsRects;
				}
				
				#line 262 "F:\\nx3\\src\\nx3\\VComplex.hx"
				this.notesHeadsRectsDirCheck = directions;
				#line 264 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( directions.length != this.getVNotes().length )) {
					#line 264 "F:\\nx3\\src\\nx3\\VComplex.hx"
					throw global::haxe.lang.HaxeException.wrap("Directions.length != vnotes.length");
				}
				
				#line 265 "F:\\nx3\\src\\nx3\\VComplex.hx"
				this.notesHeadsRects = new global::Array<object>();
				{
					#line 266 "F:\\nx3\\src\\nx3\\VComplex.hx"
					int _g1 = 0;
					#line 266 "F:\\nx3\\src\\nx3\\VComplex.hx"
					int _g = this.getVNotes().length;
					#line 266 "F:\\nx3\\src\\nx3\\VComplex.hx"
					while (( _g1 < _g )){
						#line 266 "F:\\nx3\\src\\nx3\\VComplex.hx"
						int i = _g1++;
						#line 268 "F:\\nx3\\src\\nx3\\VComplex.hx"
						global::nx3.VNote vnote = ((global::nx3.VNote) (this.getVNotes()[i]) );
						global::Array<object> rects = this.getNoteHeadsRects(vnote, directions[i]);
						{
							#line 270 "F:\\nx3\\src\\nx3\\VComplex.hx"
							int _g2 = 0;
							#line 270 "F:\\nx3\\src\\nx3\\VComplex.hx"
							while (( _g2 < rects.length )){
								#line 270 "F:\\nx3\\src\\nx3\\VComplex.hx"
								global::nx3.geom.Rectangle rect = ((global::nx3.geom.Rectangle) (rects[_g2]) );
								#line 270 "F:\\nx3\\src\\nx3\\VComplex.hx"
								 ++ _g2;
								#line 270 "F:\\nx3\\src\\nx3\\VComplex.hx"
								this.notesHeadsRects.push(rect);
							}
							
						}
						
					}
					
				}
				
				#line 272 "F:\\nx3\\src\\nx3\\VComplex.hx"
				return this.notesHeadsRects;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getStaveBasicRects(global::Array<global::nx3.EDirectionUD> directions, global::Array<object> beamgroups){
			unchecked {
				#line 280 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( directions.length != this.getVNotes().length )) {
					#line 280 "F:\\nx3\\src\\nx3\\VComplex.hx"
					throw global::haxe.lang.HaxeException.wrap("Directions.length != vnotes.length");
				}
				
				#line 281 "F:\\nx3\\src\\nx3\\VComplex.hx"
				global::nx3.VNote firstnote = default(global::nx3.VNote);
				#line 281 "F:\\nx3\\src\\nx3\\VComplex.hx"
				{
					#line 281 "F:\\nx3\\src\\nx3\\VComplex.hx"
					global::Array<object> array = this.getVNotes();
					#line 281 "F:\\nx3\\src\\nx3\\VComplex.hx"
					firstnote = ((global::nx3.VNote) (array[0]) );
				}
				
				#line 282 "F:\\nx3\\src\\nx3\\VComplex.hx"
				global::Array<object> result = new global::Array<object>();
				global::Array<object> flags = new global::Array<object>();
				{
					#line 284 "F:\\nx3\\src\\nx3\\VComplex.hx"
					int _g1 = 0;
					#line 284 "F:\\nx3\\src\\nx3\\VComplex.hx"
					int _g = this.getVNotes().length;
					#line 284 "F:\\nx3\\src\\nx3\\VComplex.hx"
					while (( _g1 < _g )){
						#line 284 "F:\\nx3\\src\\nx3\\VComplex.hx"
						int i = _g1++;
						#line 287 "F:\\nx3\\src\\nx3\\VComplex.hx"
						global::nx3.VNote vnote = ((global::nx3.VNote) (this.getVNotes()[i]) );
						if (( global::nx3.ENoteValTools.stavinglevel(vnote.nnote.@value) == 0 )) {
							#line 288 "F:\\nx3\\src\\nx3\\VComplex.hx"
							continue;
						}
						
						#line 289 "F:\\nx3\\src\\nx3\\VComplex.hx"
						if ( ! (string.Equals(global::Type.enumConstructor(vnote.nnote.type), "Note")) ) {
							#line 289 "F:\\nx3\\src\\nx3\\VComplex.hx"
							continue;
						}
						
						#line 291 "F:\\nx3\\src\\nx3\\VComplex.hx"
						global::nx3.VBeamgroup beamgroup = default(global::nx3.VBeamgroup);
						#line 291 "F:\\nx3\\src\\nx3\\VComplex.hx"
						if (( beamgroups != default(global::Array<object>) )) {
							#line 291 "F:\\nx3\\src\\nx3\\VComplex.hx"
							beamgroup = ((global::nx3.VBeamgroup) (beamgroups[i]) );
						}
						 else {
							#line 291 "F:\\nx3\\src\\nx3\\VComplex.hx"
							beamgroup = default(global::nx3.VBeamgroup);
						}
						
						#line 293 "F:\\nx3\\src\\nx3\\VComplex.hx"
						global::nx3.EDirectionUD direction = directions[i];
						global::nx3.geom.Rectangle rect = default(global::nx3.geom.Rectangle);
						double headw = default(double);
						#line 295 "F:\\nx3\\src\\nx3\\VComplex.hx"
						{
							#line 295 "F:\\nx3\\src\\nx3\\VComplex.hx"
							global::nx3.EHeadValueType _g2 = global::nx3.ENoteValTools.head(vnote.nnote.@value);
							#line 295 "F:\\nx3\\src\\nx3\\VComplex.hx"
							switch (global::Type.enumIndex(_g2)){
								case 2:
								{
									#line 297 "F:\\nx3\\src\\nx3\\VComplex.hx"
									headw = 2.2;
									#line 297 "F:\\nx3\\src\\nx3\\VComplex.hx"
									break;
								}
								
								
								default:
								{
									#line 298 "F:\\nx3\\src\\nx3\\VComplex.hx"
									headw = 1.6;
									#line 298 "F:\\nx3\\src\\nx3\\VComplex.hx"
									break;
								}
								
							}
							
						}
						
						#line 302 "F:\\nx3\\src\\nx3\\VComplex.hx"
						double offset = 0.0;
						if (( vnote != firstnote )) {
							#line 303 "F:\\nx3\\src\\nx3\\VComplex.hx"
							offset = this.getHeadsCollisionOffsetX(vnote, direction);
						}
						
						#line 307 "F:\\nx3\\src\\nx3\\VComplex.hx"
						if (( direction == global::nx3.EDirectionUD.Up )) {
							#line 309 "F:\\nx3\\src\\nx3\\VComplex.hx"
							rect = new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(( vnote.nnote.getBottomLevel() - ((double) (7) ) ), true), new global::haxe.lang.Null<double>(headw, true), new global::haxe.lang.Null<double>(((double) (7) ), true));
						}
						 else {
							#line 313 "F:\\nx3\\src\\nx3\\VComplex.hx"
							rect = new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>( - (headw) , true), new global::haxe.lang.Null<double>(((double) (vnote.nnote.getTopLevel()) ), true), new global::haxe.lang.Null<double>(headw, true), new global::haxe.lang.Null<double>(((double) (7) ), true));
						}
						
						#line 317 "F:\\nx3\\src\\nx3\\VComplex.hx"
						if (( offset != 0 )) {
							#line 317 "F:\\nx3\\src\\nx3\\VComplex.hx"
							rect.offset(offset, ((double) (0) ));
						}
						
						#line 319 "F:\\nx3\\src\\nx3\\VComplex.hx"
						result.push(rect);
						#line 323 "F:\\nx3\\src\\nx3\\VComplex.hx"
						if (( ( beamgroup != default(global::nx3.VBeamgroup) ) && ( beamgroup.vnotes.length == 1 ) )) {
							#line 325 "F:\\nx3\\src\\nx3\\VComplex.hx"
							if (( global::nx3.ENoteValTools.beaminglevel(vnote.nnote.@value) > 0 )) {
								#line 327 "F:\\nx3\\src\\nx3\\VComplex.hx"
								global::nx3.geom.Rectangle flagrect = default(global::nx3.geom.Rectangle);
								if (( direction == global::nx3.EDirectionUD.Up )) {
									#line 330 "F:\\nx3\\src\\nx3\\VComplex.hx"
									flagrect = new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(headw, true), new global::haxe.lang.Null<double>(( vnote.nnote.getBottomLevel() - ((double) (7) ) ), true), new global::haxe.lang.Null<double>(2.6, true), new global::haxe.lang.Null<double>(4.8, true));
								}
								 else {
									#line 334 "F:\\nx3\\src\\nx3\\VComplex.hx"
									flagrect = new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>( - (headw) , true), new global::haxe.lang.Null<double>(( ( vnote.nnote.getTopLevel() + ((double) (7) ) ) - 4.8 ), true), new global::haxe.lang.Null<double>(2.6, true), new global::haxe.lang.Null<double>(4.8, true));
								}
								
								#line 337 "F:\\nx3\\src\\nx3\\VComplex.hx"
								if (( offset != 0 )) {
									#line 337 "F:\\nx3\\src\\nx3\\VComplex.hx"
									flagrect.offset(offset, ((double) (0) ));
								}
								
								#line 339 "F:\\nx3\\src\\nx3\\VComplex.hx"
								flags.push(flagrect);
							}
							
						}
						
					}
					
				}
				
				#line 345 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( flags != new global::Array<object>(new object[]{}) )) {
					#line 345 "F:\\nx3\\src\\nx3\\VComplex.hx"
					result = result.concat(flags);
				}
				
				#line 347 "F:\\nx3\\src\\nx3\\VComplex.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   object getStaveNoteBasicRectAndDirections(global::nx3.VNote note, global::Array<global::nx3.EDirectionUD> directions){
			unchecked {
				#line 352 "F:\\nx3\\src\\nx3\\VComplex.hx"
				global::Array<object> rects = this.getStaveBasicRects(directions, default(global::Array<object>));
				global::nx3.VNote __temp_stmt344 = default(global::nx3.VNote);
				#line 353 "F:\\nx3\\src\\nx3\\VComplex.hx"
				{
					#line 353 "F:\\nx3\\src\\nx3\\VComplex.hx"
					global::Array<object> array = this.getVNotes();
					#line 353 "F:\\nx3\\src\\nx3\\VComplex.hx"
					__temp_stmt344 = ((global::nx3.VNote) (array[0]) );
				}
				
				#line 353 "F:\\nx3\\src\\nx3\\VComplex.hx"
				if (( note == __temp_stmt344 )) {
					#line 353 "F:\\nx3\\src\\nx3\\VComplex.hx"
					return new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{4996429, 1269255460}), new global::Array<object>(new object[]{directions[0], ((global::nx3.geom.Rectangle) (rects[0]) )}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{}));
				}
				
				#line 354 "F:\\nx3\\src\\nx3\\VComplex.hx"
				return new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{4996429, 1269255460}), new global::Array<object>(new object[]{directions[1], ((global::nx3.geom.Rectangle) (rects[1]) )}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{}));
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getStavesBasicX(global::Array<global::nx3.EDirectionUD> directions){
			unchecked {
				#line 359 "F:\\nx3\\src\\nx3\\VComplex.hx"
				global::Array<object> rects = this.getStaveBasicRects(directions, default(global::Array<object>));
				global::Array<object> result = new global::Array<object>();
				#line 362 "F:\\nx3\\src\\nx3\\VComplex.hx"
				{
					#line 362 "F:\\nx3\\src\\nx3\\VComplex.hx"
					int _g1 = 0;
					#line 362 "F:\\nx3\\src\\nx3\\VComplex.hx"
					int _g = this.getVNotes().length;
					#line 362 "F:\\nx3\\src\\nx3\\VComplex.hx"
					while (( _g1 < _g )){
						#line 362 "F:\\nx3\\src\\nx3\\VComplex.hx"
						int i = _g1++;
						#line 364 "F:\\nx3\\src\\nx3\\VComplex.hx"
						global::nx3.VNote vnote = ((global::nx3.VNote) (this.getVNotes()[i]) );
						object rectDir = this.getStaveNoteBasicRectAndDirections(vnote, directions);
						global::nx3.EDirectionUD direction = ((global::nx3.EDirectionUD) (global::haxe.lang.Runtime.getField(rectDir, "dir", 4996429, true)) );
						global::nx3.geom.Rectangle rect = ((global::nx3.geom.Rectangle) (global::haxe.lang.Runtime.getField(rectDir, "rect", 1269255460, true)) );
						#line 369 "F:\\nx3\\src\\nx3\\VComplex.hx"
						if (( rect == default(global::nx3.geom.Rectangle) )) {
							#line 371 "F:\\nx3\\src\\nx3\\VComplex.hx"
							result.push(new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{}), new global::Array<object>(new object[]{}), new global::Array<int>(new int[]{120, 121}), new global::Array<double>(new double[]{((double) (0) ), ((double) (0) )})));
							continue;
						}
						
						#line 375 "F:\\nx3\\src\\nx3\\VComplex.hx"
						double x = 0.0;
						double y = 0.0;
						#line 378 "F:\\nx3\\src\\nx3\\VComplex.hx"
						if (( direction == global::nx3.EDirectionUD.Up )) {
							#line 380 "F:\\nx3\\src\\nx3\\VComplex.hx"
							x += rect.width;
							y = ((double) (vnote.nnote.getBottomLevel()) );
						}
						 else {
							#line 385 "F:\\nx3\\src\\nx3\\VComplex.hx"
							x = rect.x;
							y = ((double) (vnote.nnote.getTopLevel()) );
						}
						
						#line 388 "F:\\nx3\\src\\nx3\\VComplex.hx"
						result.push(new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{}), new global::Array<object>(new object[]{}), new global::Array<int>(new int[]{120, 121}), new global::Array<double>(new double[]{x, y})));
					}
					
				}
				
				#line 391 "F:\\nx3\\src\\nx3\\VComplex.hx"
				return result;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
				switch (hash){
					case 177405469:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						this.notesHeadsRects = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return @value;
					}
					
					
					case 90248056:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						this.notesHeadsRectsDirCheck = ((global::Array<global::nx3.EDirectionUD>) (global::Array<object>.__hx_cast<global::nx3.EDirectionUD>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return @value;
					}
					
					
					case 2145022117:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						this.dotsRects = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return @value;
					}
					
					
					case 1635513489:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						this.tiestoRects = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return @value;
					}
					
					
					case 1752241490:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						this.signRects = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return @value;
					}
					
					
					case 936914178:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						this.calculator = ((global::nx3.VComplexSignsCalculator) (@value) );
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return @value;
					}
					
					
					case 1917829060:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						this.visibleSigns = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return @value;
					}
					
					
					case 2093655446:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						this.signs = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return @value;
					}
					
					
					case 1307013131:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						this.vnotes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return @value;
					}
					
					
					default:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
				switch (hash){
					case 1895432324:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getStavesBasicX") ), ((int) (1895432324) ))) );
					}
					
					
					case 2000329988:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getStaveNoteBasicRectAndDirections") ), ((int) (2000329988) ))) );
					}
					
					
					case 975541754:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getStaveBasicRects") ), ((int) (975541754) ))) );
					}
					
					
					case 1029217831:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNotesHeadsRects") ), ((int) (1029217831) ))) );
					}
					
					
					case 177405469:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.notesHeadsRects;
					}
					
					
					case 90248056:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.notesHeadsRectsDirCheck;
					}
					
					
					case 988157700:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNotesRects") ), ((int) (988157700) ))) );
					}
					
					
					case 13513964:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNoteRect") ), ((int) (13513964) ))) );
					}
					
					
					case 663081028:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNoteHeadsRects") ), ((int) (663081028) ))) );
					}
					
					
					case 1380542695:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getRectanglesXIntersection") ), ((int) (1380542695) ))) );
					}
					
					
					case 1350722576:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHeadsCollisionOffsetX") ), ((int) (1350722576) ))) );
					}
					
					
					case 351315328:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getDots") ), ((int) (351315328) ))) );
					}
					
					
					case 254872879:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getDotsRects") ), ((int) (254872879) ))) );
					}
					
					
					case 2145022117:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.dotsRects;
					}
					
					
					case 375967803:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getComplexTiestos") ), ((int) (375967803) ))) );
					}
					
					
					case 1763329947:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getTiestoRects") ), ((int) (1763329947) ))) );
					}
					
					
					case 1635513489:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.tiestoRects;
					}
					
					
					case 425941391:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getSignsRects") ), ((int) (425941391) ))) );
					}
					
					
					case 1752241490:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.signRects;
					}
					
					
					case 356128122:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVisibleSigns") ), ((int) (356128122) ))) );
					}
					
					
					case 1554101536:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getSigns") ), ((int) (1554101536) ))) );
					}
					
					
					case 1567320353:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVNotes") ), ((int) (1567320353) ))) );
					}
					
					
					case 936914178:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.calculator;
					}
					
					
					case 1917829060:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.visibleSigns;
					}
					
					
					case 2093655446:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.signs;
					}
					
					
					case 1307013131:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.vnotes;
					}
					
					
					default:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
				switch (hash){
					case 1895432324:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.getStavesBasicX(((global::Array<global::nx3.EDirectionUD>) (global::Array<object>.__hx_cast<global::nx3.EDirectionUD>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 2000329988:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.getStaveNoteBasicRectAndDirections(((global::nx3.VNote) (dynargs[0]) ), ((global::Array<global::nx3.EDirectionUD>) (global::Array<object>.__hx_cast<global::nx3.EDirectionUD>(((global::Array) (dynargs[1]) ))) ));
					}
					
					
					case 975541754:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.getStaveBasicRects(((global::Array<global::nx3.EDirectionUD>) (global::Array<object>.__hx_cast<global::nx3.EDirectionUD>(((global::Array) (dynargs[0]) ))) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[1]) ))) ));
					}
					
					
					case 1029217831:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.getNotesHeadsRects(((global::Array<global::nx3.EDirectionUD>) (global::Array<object>.__hx_cast<global::nx3.EDirectionUD>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 988157700:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.getNotesRects(((global::Array<global::nx3.EDirectionUD>) (global::Array<object>.__hx_cast<global::nx3.EDirectionUD>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 13513964:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.getNoteRect(((global::nx3.VNote) (dynargs[0]) ), ((global::nx3.EDirectionUD) (dynargs[1]) ));
					}
					
					
					case 663081028:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.getNoteHeadsRects(((global::nx3.VNote) (dynargs[0]) ), ((global::nx3.EDirectionUD) (dynargs[1]) ));
					}
					
					
					case 1380542695:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.getRectanglesXIntersection(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[1]) ))) ));
					}
					
					
					case 1350722576:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.getHeadsCollisionOffsetX(((global::nx3.VNote) (dynargs[0]) ), ((global::nx3.EDirectionUD) (dynargs[1]) ));
					}
					
					
					case 351315328:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.getDots(((global::Array<global::nx3.EDirectionUD>) (global::Array<object>.__hx_cast<global::nx3.EDirectionUD>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 254872879:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.getDotsRects(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ), ((global::Array<global::nx3.EDirectionUD>) (global::Array<object>.__hx_cast<global::nx3.EDirectionUD>(((global::Array) (dynargs[1]) ))) ));
					}
					
					
					case 375967803:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.getComplexTiestos();
					}
					
					
					case 1763329947:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.getTiestoRects(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 425941391:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.getSignsRects(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 356128122:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.getVisibleSigns();
					}
					
					
					case 1554101536:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.getSigns();
					}
					
					
					case 1567320353:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return this.getVNotes();
					}
					
					
					default:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
				baseArr.push("notesHeadsRects");
				#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
				baseArr.push("notesHeadsRectsDirCheck");
				#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
				baseArr.push("dotsRects");
				#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
				baseArr.push("tiestoRects");
				#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
				baseArr.push("signRects");
				#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
				baseArr.push("calculator");
				#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
				baseArr.push("visibleSigns");
				#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
				baseArr.push("signs");
				#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
				baseArr.push("vnotes");
				#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
				{
					#line 15 "F:\\nx3\\src\\nx3\\VComplex.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VComplex_getRectanglesXIntersection_161__Fun : global::haxe.lang.Function {
		public    VComplex_getRectanglesXIntersection_161__Fun(global::Array<object> rectsA1, global::Array<object> rectsB2) : base(0, 1){
			unchecked {
				#line 162 "F:\\nx3\\src\\nx3\\VComplex.hx"
				this.rectsA1 = rectsA1;
				#line 162 "F:\\nx3\\src\\nx3\\VComplex.hx"
				this.rectsB2 = rectsB2;
			}
			#line default
		}
		
		
		public override   double __hx_invoke0_f(){
			unchecked {
				#line 163 "F:\\nx3\\src\\nx3\\VComplex.hx"
				{
					#line 163 "F:\\nx3\\src\\nx3\\VComplex.hx"
					int _g1 = 0;
					#line 163 "F:\\nx3\\src\\nx3\\VComplex.hx"
					while (( _g1 < ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.rectsA1[0]) ))) ).length )){
						#line 163 "F:\\nx3\\src\\nx3\\VComplex.hx"
						global::nx3.geom.Rectangle ra = ((global::nx3.geom.Rectangle) (((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.rectsA1[0]) ))) )[_g1]) );
						#line 163 "F:\\nx3\\src\\nx3\\VComplex.hx"
						 ++ _g1;
						#line 165 "F:\\nx3\\src\\nx3\\VComplex.hx"
						{
							#line 165 "F:\\nx3\\src\\nx3\\VComplex.hx"
							int _g11 = 0;
							#line 165 "F:\\nx3\\src\\nx3\\VComplex.hx"
							while (( _g11 < ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.rectsB2[0]) ))) ).length )){
								#line 165 "F:\\nx3\\src\\nx3\\VComplex.hx"
								global::nx3.geom.Rectangle rb = ((global::nx3.geom.Rectangle) (((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.rectsB2[0]) ))) )[_g11]) );
								#line 165 "F:\\nx3\\src\\nx3\\VComplex.hx"
								 ++ _g11;
								#line 167 "F:\\nx3\\src\\nx3\\VComplex.hx"
								global::nx3.geom.Rectangle i = ra.intersection(rb);
								if (( i.width > 0 )) {
									#line 168 "F:\\nx3\\src\\nx3\\VComplex.hx"
									return i.width;
								}
								
							}
							
						}
						
					}
					
				}
				
				#line 171 "F:\\nx3\\src\\nx3\\VComplex.hx"
				return ((double) (0) );
			}
			#line default
		}
		
		
		public  global::Array<object> rectsA1;
		
		public  global::Array<object> rectsB2;
		
	}
}


