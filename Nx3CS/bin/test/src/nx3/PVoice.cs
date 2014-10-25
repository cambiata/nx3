
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PVoice : global::haxe.lang.HxObject {
		public    PVoice(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PVoice(global::nx3.NVoice nvoice){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\PVoice.hx"
				global::nx3.PVoice.__hx_ctor_nx3_PVoice(this, nvoice);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PVoice(global::nx3.PVoice __temp_me125, global::nx3.NVoice nvoice){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\PVoice.hx"
				__temp_me125.nvoice = nvoice;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
				return new global::nx3.PVoice(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
				return new global::nx3.PVoice(((global::nx3.NVoice) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.NVoice nvoice;
		
		public virtual   object iterator(){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\PVoice.hx"
				{
					#line 21 "F:\\nx3\\src\\nx3\\PVoice.hx"
					global::Array<object> _this = this.getNotes();
					#line 21 "F:\\nx3\\src\\nx3\\PVoice.hx"
					return new global::_Array.ArrayIterator<object>(((global::Array<object>) (_this) ));
				}
				
			}
			#line default
		}
		
		
		public  int length;
		
		public virtual   int get_length(){
			unchecked {
				#line 23 "F:\\nx3\\src\\nx3\\PVoice.hx"
				return this.getNotes().length;
			}
			#line default
		}
		
		
		public  global::nx3.PPart part;
		
		public virtual   global::nx3.PPart getPart(){
			unchecked {
				#line 26 "F:\\nx3\\src\\nx3\\PVoice.hx"
				return this.part;
			}
			#line default
		}
		
		
		public  global::Array<object> notes;
		
		public virtual   global::Array<object> getNotes(){
			unchecked {
				#line 31 "F:\\nx3\\src\\nx3\\PVoice.hx"
				if (( this.notes != default(global::Array<object>) )) {
					#line 31 "F:\\nx3\\src\\nx3\\PVoice.hx"
					return this.notes;
				}
				
				#line 32 "F:\\nx3\\src\\nx3\\PVoice.hx"
				this.notes = new global::Array<object>(new object[]{});
				#line 34 "F:\\nx3\\src\\nx3\\PVoice.hx"
				{
					#line 34 "F:\\nx3\\src\\nx3\\PVoice.hx"
					int _g = 0;
					#line 34 "F:\\nx3\\src\\nx3\\PVoice.hx"
					global::Array<object> _g1 = this.nvoice.nnotes;
					#line 34 "F:\\nx3\\src\\nx3\\PVoice.hx"
					while (( _g < _g1.length )){
						#line 34 "F:\\nx3\\src\\nx3\\PVoice.hx"
						global::nx3.NNote nnote = ((global::nx3.NNote) (_g1[_g]) );
						#line 34 "F:\\nx3\\src\\nx3\\PVoice.hx"
						 ++ _g;
						#line 36 "F:\\nx3\\src\\nx3\\PVoice.hx"
						global::nx3.PNote pnote = new global::nx3.PNote(((global::nx3.NNote) (nnote) ));
						pnote.voice = this;
						this.notes.push(pnote);
					}
					
				}
				
				#line 40 "F:\\nx3\\src\\nx3\\PVoice.hx"
				return this.notes;
			}
			#line default
		}
		
		
		public virtual   global::nx3.PNote getNote(int idx){
			unchecked {
				#line 43 "F:\\nx3\\src\\nx3\\PVoice.hx"
				if (( ( idx < 0 ) || ( idx > this.getNotes().length ) )) {
					#line 43 "F:\\nx3\\src\\nx3\\PVoice.hx"
					return default(global::nx3.PNote);
				}
				 else {
					#line 43 "F:\\nx3\\src\\nx3\\PVoice.hx"
					return ((global::nx3.PNote) (this.getNotes()[idx]) );
				}
				
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<int> @value;
		
		public virtual   int getValue(){
			unchecked {
				#line 49 "F:\\nx3\\src\\nx3\\PVoice.hx"
				if (this.@value.hasValue) {
					#line 49 "F:\\nx3\\src\\nx3\\PVoice.hx"
					return this.@value.@value;
				}
				
				#line 50 "F:\\nx3\\src\\nx3\\PVoice.hx"
				if (( this.notes == default(global::Array<object>) )) {
					#line 50 "F:\\nx3\\src\\nx3\\PVoice.hx"
					this.getNotes();
				}
				
				#line 51 "F:\\nx3\\src\\nx3\\PVoice.hx"
				this.@value = new global::haxe.lang.Null<int>(0, true);
				{
					#line 52 "F:\\nx3\\src\\nx3\\PVoice.hx"
					int _g = 0;
					#line 52 "F:\\nx3\\src\\nx3\\PVoice.hx"
					global::Array<object> _g1 = this.notes;
					#line 52 "F:\\nx3\\src\\nx3\\PVoice.hx"
					while (( _g < _g1.length )){
						#line 52 "F:\\nx3\\src\\nx3\\PVoice.hx"
						global::nx3.PNote pnote = ((global::nx3.PNote) (_g1[_g]) );
						#line 52 "F:\\nx3\\src\\nx3\\PVoice.hx"
						 ++ _g;
						#line 52 "F:\\nx3\\src\\nx3\\PVoice.hx"
						{
							#line 52 "F:\\nx3\\src\\nx3\\PVoice.hx"
							global::nx3.PVoice __temp_dynop163 = this;
							#line 52 "F:\\nx3\\src\\nx3\\PVoice.hx"
							__temp_dynop163.@value = new global::haxe.lang.Null<int>(( __temp_dynop163.@value.@value + global::nx3.ENoteValTools.@value(pnote.nnote.@value) ), true);
						}
						
					}
					
				}
				
				#line 53 "F:\\nx3\\src\\nx3\\PVoice.hx"
				return this.@value.@value;
			}
			#line default
		}
		
		
		public  global::Array<object> beamgroups;
		
		public  global::Array<global::nx3.ENoteVal> beampattern;
		
		public virtual   global::Array<object> getBeamgroups(global::Array<global::nx3.ENoteVal> pattern){
			unchecked {
				#line 63 "F:\\nx3\\src\\nx3\\PVoice.hx"
				if (( ( pattern != default(global::Array<global::nx3.ENoteVal>) ) && ( pattern != this.beampattern ) )) {
					#line 65 "F:\\nx3\\src\\nx3\\PVoice.hx"
					this.beampattern = pattern;
					this.beamgroups = default(global::Array<object>);
				}
				
				#line 69 "F:\\nx3\\src\\nx3\\PVoice.hx"
				if (( this.beamgroups != default(global::Array<object>) )) {
					#line 69 "F:\\nx3\\src\\nx3\\PVoice.hx"
					return this.beamgroups;
				}
				
				#line 71 "F:\\nx3\\src\\nx3\\PVoice.hx"
				this.beamgroups = new global::nx3.PVoiceBeamgroupsGenerator(((global::Array<object>) (this.getNotes()) ), ((global::Array<global::nx3.ENoteVal>) (pattern) )).getBeamgroups();
				return this.beamgroups;
			}
			#line default
		}
		
		
		public  global::haxe.ds.ObjectMap<object, int> pnotePositions;
		
		public virtual   global::haxe.ds.ObjectMap<object, int> getNotePositions(){
			unchecked {
				#line 78 "F:\\nx3\\src\\nx3\\PVoice.hx"
				if (( this.pnotePositions != default(global::haxe.ds.ObjectMap<object, int>) )) {
					#line 78 "F:\\nx3\\src\\nx3\\PVoice.hx"
					return this.pnotePositions;
				}
				
				#line 79 "F:\\nx3\\src\\nx3\\PVoice.hx"
				if (( this.notes == default(global::Array<object>) )) {
					#line 79 "F:\\nx3\\src\\nx3\\PVoice.hx"
					this.getNotes();
				}
				
				#line 80 "F:\\nx3\\src\\nx3\\PVoice.hx"
				this.pnotePositions = new global::haxe.ds.ObjectMap<object, int>();
				#line 82 "F:\\nx3\\src\\nx3\\PVoice.hx"
				int pos = 0;
				{
					#line 83 "F:\\nx3\\src\\nx3\\PVoice.hx"
					int _g = 0;
					#line 83 "F:\\nx3\\src\\nx3\\PVoice.hx"
					global::Array<object> _g1 = this.notes;
					#line 83 "F:\\nx3\\src\\nx3\\PVoice.hx"
					while (( _g < _g1.length )){
						#line 83 "F:\\nx3\\src\\nx3\\PVoice.hx"
						global::nx3.PNote pnote = ((global::nx3.PNote) (_g1[_g]) );
						#line 83 "F:\\nx3\\src\\nx3\\PVoice.hx"
						 ++ _g;
						#line 85 "F:\\nx3\\src\\nx3\\PVoice.hx"
						this.pnotePositions.@set(pnote, pos);
						pos += global::nx3.ENoteValTools.@value(pnote.nnote.@value);
					}
					
				}
				
				#line 88 "F:\\nx3\\src\\nx3\\PVoice.hx"
				return this.pnotePositions;
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
				switch (hash){
					case 520590566:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						this.length = ((int) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return @value;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
				switch (hash){
					case 1524213480:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						this.pnotePositions = ((global::haxe.ds.ObjectMap<object, int>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, int>(((global::haxe.ds.ObjectMap) (@value) ))) );
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return @value;
					}
					
					
					case 200327361:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						this.beampattern = ((global::Array<global::nx3.ENoteVal>) (global::Array<object>.__hx_cast<global::nx3.ENoteVal>(((global::Array) (@value) ))) );
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return @value;
					}
					
					
					case 1386824451:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						this.beamgroups = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return @value;
					}
					
					
					case 834174833:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						this.@value = global::haxe.lang.Null<object>.ofDynamic<int>(@value);
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return @value;
					}
					
					
					case 533388353:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						this.notes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return @value;
					}
					
					
					case 1246880755:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						this.part = ((global::nx3.PPart) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return @value;
					}
					
					
					case 520590566:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						this.length = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return @value;
					}
					
					
					case 909694596:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						this.nvoice = ((global::nx3.NVoice) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return @value;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
				switch (hash){
					case 421910242:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNotePositions") ), ((int) (421910242) ))) );
					}
					
					
					case 1524213480:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.pnotePositions;
					}
					
					
					case 790339385:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBeamgroups") ), ((int) (790339385) ))) );
					}
					
					
					case 200327361:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.beampattern;
					}
					
					
					case 1386824451:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.beamgroups;
					}
					
					
					case 294620923:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getValue") ), ((int) (294620923) ))) );
					}
					
					
					case 834174833:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return (this.@value).toDynamic();
					}
					
					
					case 462210984:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNote") ), ((int) (462210984) ))) );
					}
					
					
					case 2141318091:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNotes") ), ((int) (2141318091) ))) );
					}
					
					
					case 533388353:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.notes;
					}
					
					
					case 483693481:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getPart") ), ((int) (483693481) ))) );
					}
					
					
					case 1246880755:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.part;
					}
					
					
					case 261031087:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_length") ), ((int) (261031087) ))) );
					}
					
					
					case 520590566:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						if (handleProperties) {
							#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
							return this.get_length();
						}
						 else {
							#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
							return this.length;
						}
						
					}
					
					
					case 328878574:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("iterator") ), ((int) (328878574) ))) );
					}
					
					
					case 909694596:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.nvoice;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
				switch (hash){
					case 520590566:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						if (handleProperties) {
							#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
							return ((double) (this.get_length()) );
						}
						 else {
							#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
							return ((double) (this.length) );
						}
						
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
				switch (hash){
					case 421910242:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.getNotePositions();
					}
					
					
					case 790339385:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.getBeamgroups(((global::Array<global::nx3.ENoteVal>) (global::Array<object>.__hx_cast<global::nx3.ENoteVal>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 294620923:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.getValue();
					}
					
					
					case 462210984:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.getNote(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ));
					}
					
					
					case 2141318091:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.getNotes();
					}
					
					
					case 483693481:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.getPart();
					}
					
					
					case 261031087:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.get_length();
					}
					
					
					case 328878574:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.iterator();
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
				baseArr.push("pnotePositions");
				#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
				baseArr.push("beampattern");
				#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
				baseArr.push("beamgroups");
				#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
				baseArr.push("value");
				#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
				baseArr.push("notes");
				#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
				baseArr.push("part");
				#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
				baseArr.push("length");
				#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
				baseArr.push("nvoice");
				#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
				{
					#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


