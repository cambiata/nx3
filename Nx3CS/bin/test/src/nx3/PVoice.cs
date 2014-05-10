
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PVoice : global::haxe.lang.HxObject {
		public    PVoice(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PVoice(global::nx3.NVoice nvoice){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PVoice.hx"
				global::nx3.PVoice.__hx_ctor_nx3_PVoice(this, nvoice);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PVoice(global::nx3.PVoice __temp_me124, global::nx3.NVoice nvoice){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PVoice.hx"
				__temp_me124.nvoice = nvoice;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
				return new global::nx3.PVoice(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
				return new global::nx3.PVoice(((global::nx3.NVoice) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.NVoice nvoice;
		
		public  global::nx3.PPart part;
		
		public virtual   global::nx3.PPart getPart(){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\PVoice.hx"
				return this.part;
			}
			#line default
		}
		
		
		public  global::Array<object> notes;
		
		public virtual   global::Array<object> getNotes(){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\PVoice.hx"
				if (( this.notes != default(global::Array<object>) )) {
					#line 25 "F:\\nx3\\src\\nx3\\PVoice.hx"
					return this.notes;
				}
				
				#line 26 "F:\\nx3\\src\\nx3\\PVoice.hx"
				this.notes = new global::Array<object>(new object[]{});
				#line 28 "F:\\nx3\\src\\nx3\\PVoice.hx"
				{
					#line 28 "F:\\nx3\\src\\nx3\\PVoice.hx"
					int _g = 0;
					#line 28 "F:\\nx3\\src\\nx3\\PVoice.hx"
					global::Array<object> _g1 = this.nvoice.nnotes;
					#line 28 "F:\\nx3\\src\\nx3\\PVoice.hx"
					while (( _g < _g1.length )){
						#line 28 "F:\\nx3\\src\\nx3\\PVoice.hx"
						global::nx3.NNote nnote = ((global::nx3.NNote) (_g1[_g]) );
						#line 28 "F:\\nx3\\src\\nx3\\PVoice.hx"
						 ++ _g;
						#line 30 "F:\\nx3\\src\\nx3\\PVoice.hx"
						global::nx3.PNote pnote = new global::nx3.PNote(((global::nx3.NNote) (nnote) ));
						pnote.voice = this;
						this.notes.push(pnote);
					}
					
				}
				
				#line 34 "F:\\nx3\\src\\nx3\\PVoice.hx"
				return this.notes;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<int> @value;
		
		public virtual   int getValue(){
			unchecked {
				#line 40 "F:\\nx3\\src\\nx3\\PVoice.hx"
				if (this.@value.hasValue) {
					#line 40 "F:\\nx3\\src\\nx3\\PVoice.hx"
					return this.@value.@value;
				}
				
				#line 41 "F:\\nx3\\src\\nx3\\PVoice.hx"
				if (( this.notes == default(global::Array<object>) )) {
					#line 41 "F:\\nx3\\src\\nx3\\PVoice.hx"
					this.getNotes();
				}
				
				#line 42 "F:\\nx3\\src\\nx3\\PVoice.hx"
				this.@value = new global::haxe.lang.Null<int>(0, true);
				{
					#line 43 "F:\\nx3\\src\\nx3\\PVoice.hx"
					int _g = 0;
					#line 43 "F:\\nx3\\src\\nx3\\PVoice.hx"
					global::Array<object> _g1 = this.notes;
					#line 43 "F:\\nx3\\src\\nx3\\PVoice.hx"
					while (( _g < _g1.length )){
						#line 43 "F:\\nx3\\src\\nx3\\PVoice.hx"
						global::nx3.PNote pnote = ((global::nx3.PNote) (_g1[_g]) );
						#line 43 "F:\\nx3\\src\\nx3\\PVoice.hx"
						 ++ _g;
						#line 43 "F:\\nx3\\src\\nx3\\PVoice.hx"
						{
							#line 43 "F:\\nx3\\src\\nx3\\PVoice.hx"
							global::nx3.PVoice __temp_dynop172 = this;
							#line 43 "F:\\nx3\\src\\nx3\\PVoice.hx"
							__temp_dynop172.@value = new global::haxe.lang.Null<int>(( __temp_dynop172.@value.@value + global::nx3.ENoteValTools.@value(pnote.nnote.@value) ), true);
						}
						
					}
					
				}
				
				#line 44 "F:\\nx3\\src\\nx3\\PVoice.hx"
				return this.@value.@value;
			}
			#line default
		}
		
		
		public  global::Array<object> beamgroups;
		
		public  global::Array<global::nx3.ENoteVal> beampattern;
		
		public virtual   global::Array<object> getBeamgroups(global::Array<global::nx3.ENoteVal> pattern){
			unchecked {
				#line 54 "F:\\nx3\\src\\nx3\\PVoice.hx"
				if (( ( pattern != default(global::Array<global::nx3.ENoteVal>) ) && ( pattern != this.beampattern ) )) {
					#line 56 "F:\\nx3\\src\\nx3\\PVoice.hx"
					this.beampattern = pattern;
					this.beamgroups = default(global::Array<object>);
				}
				
				#line 60 "F:\\nx3\\src\\nx3\\PVoice.hx"
				if (( this.beamgroups != default(global::Array<object>) )) {
					#line 60 "F:\\nx3\\src\\nx3\\PVoice.hx"
					return this.beamgroups;
				}
				
				#line 62 "F:\\nx3\\src\\nx3\\PVoice.hx"
				this.beamgroups = new global::nx3.PVoiceBeamgroupsGenerator(((global::Array<object>) (this.getNotes()) ), ((global::Array<global::nx3.ENoteVal>) (pattern) )).getBeamgroups();
				return this.beamgroups;
			}
			#line default
		}
		
		
		public  global::haxe.ds.ObjectMap<object, int> pnotePositions;
		
		public virtual   global::haxe.ds.ObjectMap<object, int> getNotePositions(){
			unchecked {
				#line 69 "F:\\nx3\\src\\nx3\\PVoice.hx"
				if (( this.pnotePositions != default(global::haxe.ds.ObjectMap<object, int>) )) {
					#line 69 "F:\\nx3\\src\\nx3\\PVoice.hx"
					return this.pnotePositions;
				}
				
				#line 70 "F:\\nx3\\src\\nx3\\PVoice.hx"
				if (( this.notes == default(global::Array<object>) )) {
					#line 70 "F:\\nx3\\src\\nx3\\PVoice.hx"
					this.getNotes();
				}
				
				#line 71 "F:\\nx3\\src\\nx3\\PVoice.hx"
				this.pnotePositions = new global::haxe.ds.ObjectMap<object, int>();
				#line 73 "F:\\nx3\\src\\nx3\\PVoice.hx"
				int pos = 0;
				{
					#line 74 "F:\\nx3\\src\\nx3\\PVoice.hx"
					int _g = 0;
					#line 74 "F:\\nx3\\src\\nx3\\PVoice.hx"
					global::Array<object> _g1 = this.notes;
					#line 74 "F:\\nx3\\src\\nx3\\PVoice.hx"
					while (( _g < _g1.length )){
						#line 74 "F:\\nx3\\src\\nx3\\PVoice.hx"
						global::nx3.PNote pnote = ((global::nx3.PNote) (_g1[_g]) );
						#line 74 "F:\\nx3\\src\\nx3\\PVoice.hx"
						 ++ _g;
						#line 76 "F:\\nx3\\src\\nx3\\PVoice.hx"
						this.pnotePositions.@set(pnote, pos);
						pos += global::nx3.ENoteValTools.@value(pnote.nnote.@value);
					}
					
				}
				
				#line 79 "F:\\nx3\\src\\nx3\\PVoice.hx"
				return this.pnotePositions;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
				switch (hash){
					case 1524213480:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						this.pnotePositions = ((global::haxe.ds.ObjectMap<object, int>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, int>(((global::haxe.ds.ObjectMap) (@value) ))) );
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return @value;
					}
					
					
					case 200327361:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						this.beampattern = ((global::Array<global::nx3.ENoteVal>) (global::Array<object>.__hx_cast<global::nx3.ENoteVal>(((global::Array) (@value) ))) );
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return @value;
					}
					
					
					case 1386824451:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						this.beamgroups = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return @value;
					}
					
					
					case 834174833:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						this.@value = global::haxe.lang.Null<object>.ofDynamic<int>(@value);
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return @value;
					}
					
					
					case 533388353:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						this.notes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return @value;
					}
					
					
					case 1246880755:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						this.part = ((global::nx3.PPart) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return @value;
					}
					
					
					case 909694596:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						this.nvoice = ((global::nx3.NVoice) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return @value;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
				switch (hash){
					case 421910242:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNotePositions") ), ((int) (421910242) ))) );
					}
					
					
					case 1524213480:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.pnotePositions;
					}
					
					
					case 790339385:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBeamgroups") ), ((int) (790339385) ))) );
					}
					
					
					case 200327361:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.beampattern;
					}
					
					
					case 1386824451:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.beamgroups;
					}
					
					
					case 294620923:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getValue") ), ((int) (294620923) ))) );
					}
					
					
					case 834174833:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return (this.@value).toDynamic();
					}
					
					
					case 2141318091:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNotes") ), ((int) (2141318091) ))) );
					}
					
					
					case 533388353:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.notes;
					}
					
					
					case 483693481:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getPart") ), ((int) (483693481) ))) );
					}
					
					
					case 1246880755:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.part;
					}
					
					
					case 909694596:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.nvoice;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
				switch (hash){
					case 421910242:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.getNotePositions();
					}
					
					
					case 790339385:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.getBeamgroups(((global::Array<global::nx3.ENoteVal>) (global::Array<object>.__hx_cast<global::nx3.ENoteVal>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 294620923:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.getValue();
					}
					
					
					case 2141318091:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.getNotes();
					}
					
					
					case 483693481:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return this.getPart();
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
				baseArr.push("pnotePositions");
				#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
				baseArr.push("beampattern");
				#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
				baseArr.push("beamgroups");
				#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
				baseArr.push("value");
				#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
				baseArr.push("notes");
				#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
				baseArr.push("part");
				#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
				baseArr.push("nvoice");
				#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
				{
					#line 8 "F:\\nx3\\src\\nx3\\PVoice.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


