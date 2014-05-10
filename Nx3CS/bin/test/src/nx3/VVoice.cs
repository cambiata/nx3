
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VVoice : global::haxe.lang.HxObject {
		public    VVoice(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VVoice(global::nx3.NVoice nvoice){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VVoice.hx"
				global::nx3.VVoice.__hx_ctor_nx3_VVoice(this, nvoice);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VVoice(global::nx3.VVoice __temp_me190, global::nx3.NVoice nvoice){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VVoice.hx"
				__temp_me190.nvoice = nvoice;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
				return new global::nx3.VVoice(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
				return new global::nx3.VVoice(((global::nx3.NVoice) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.NVoice nvoice;
		
		public  global::Array<object> vnotes;
		
		public virtual   global::Array<object> getVNotes(){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\VVoice.hx"
				if (( this.vnotes != default(global::Array<object>) )) {
					#line 18 "F:\\nx3\\src\\nx3\\VVoice.hx"
					return this.vnotes;
				}
				
				#line 19 "F:\\nx3\\src\\nx3\\VVoice.hx"
				this.vnotes = new global::Array<object>(new object[]{});
				{
					#line 20 "F:\\nx3\\src\\nx3\\VVoice.hx"
					int _g = 0;
					#line 20 "F:\\nx3\\src\\nx3\\VVoice.hx"
					global::Array<object> _g1 = this.nvoice.nnotes;
					#line 20 "F:\\nx3\\src\\nx3\\VVoice.hx"
					while (( _g < _g1.length )){
						#line 20 "F:\\nx3\\src\\nx3\\VVoice.hx"
						global::nx3.NNote nnote = ((global::nx3.NNote) (_g1[_g]) );
						#line 20 "F:\\nx3\\src\\nx3\\VVoice.hx"
						 ++ _g;
						#line 22 "F:\\nx3\\src\\nx3\\VVoice.hx"
						this.vnotes.push(new global::nx3.VNote(((global::nx3.NNote) (nnote) )));
					}
					
				}
				
				#line 24 "F:\\nx3\\src\\nx3\\VVoice.hx"
				return this.vnotes;
			}
			#line default
		}
		
		
		public  global::haxe.ds.ObjectMap<object, int> vnotePositions;
		
		public virtual   global::haxe.ds.ObjectMap<object, int> getVNotePositions(){
			unchecked {
				#line 30 "F:\\nx3\\src\\nx3\\VVoice.hx"
				if (( this.vnotePositions != default(global::haxe.ds.ObjectMap<object, int>) )) {
					#line 30 "F:\\nx3\\src\\nx3\\VVoice.hx"
					return this.vnotePositions;
				}
				
				#line 31 "F:\\nx3\\src\\nx3\\VVoice.hx"
				if (( this.vnotes == default(global::Array<object>) )) {
					#line 31 "F:\\nx3\\src\\nx3\\VVoice.hx"
					this.getVNotes();
				}
				
				#line 32 "F:\\nx3\\src\\nx3\\VVoice.hx"
				this.vnotePositions = new global::haxe.ds.ObjectMap<object, int>();
				#line 34 "F:\\nx3\\src\\nx3\\VVoice.hx"
				int pos = 0;
				{
					#line 35 "F:\\nx3\\src\\nx3\\VVoice.hx"
					int _g = 0;
					#line 35 "F:\\nx3\\src\\nx3\\VVoice.hx"
					global::Array<object> _g1 = this.vnotes;
					#line 35 "F:\\nx3\\src\\nx3\\VVoice.hx"
					while (( _g < _g1.length )){
						#line 35 "F:\\nx3\\src\\nx3\\VVoice.hx"
						global::nx3.VNote vnote = ((global::nx3.VNote) (_g1[_g]) );
						#line 35 "F:\\nx3\\src\\nx3\\VVoice.hx"
						 ++ _g;
						#line 37 "F:\\nx3\\src\\nx3\\VVoice.hx"
						this.vnotePositions.@set(vnote, pos);
						pos += global::nx3.ENoteValTools.@value(vnote.nnote.@value);
					}
					
				}
				
				#line 40 "F:\\nx3\\src\\nx3\\VVoice.hx"
				return this.vnotePositions;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<int> @value;
		
		public virtual   int getValue(){
			unchecked {
				#line 47 "F:\\nx3\\src\\nx3\\VVoice.hx"
				if (this.@value.hasValue) {
					#line 47 "F:\\nx3\\src\\nx3\\VVoice.hx"
					return this.@value.@value;
				}
				
				#line 48 "F:\\nx3\\src\\nx3\\VVoice.hx"
				if (( this.vnotes == default(global::Array<object>) )) {
					#line 48 "F:\\nx3\\src\\nx3\\VVoice.hx"
					this.getVNotes();
				}
				
				#line 49 "F:\\nx3\\src\\nx3\\VVoice.hx"
				this.@value = new global::haxe.lang.Null<int>(0, true);
				{
					#line 50 "F:\\nx3\\src\\nx3\\VVoice.hx"
					int _g = 0;
					#line 50 "F:\\nx3\\src\\nx3\\VVoice.hx"
					global::Array<object> _g1 = this.vnotes;
					#line 50 "F:\\nx3\\src\\nx3\\VVoice.hx"
					while (( _g < _g1.length )){
						#line 50 "F:\\nx3\\src\\nx3\\VVoice.hx"
						global::nx3.VNote vnote = ((global::nx3.VNote) (_g1[_g]) );
						#line 50 "F:\\nx3\\src\\nx3\\VVoice.hx"
						 ++ _g;
						#line 50 "F:\\nx3\\src\\nx3\\VVoice.hx"
						{
							#line 50 "F:\\nx3\\src\\nx3\\VVoice.hx"
							global::nx3.VVoice __temp_dynop240 = this;
							#line 50 "F:\\nx3\\src\\nx3\\VVoice.hx"
							__temp_dynop240.@value = new global::haxe.lang.Null<int>(( __temp_dynop240.@value.@value + global::nx3.ENoteValTools.@value(vnote.nnote.@value) ), true);
						}
						
					}
					
				}
				
				#line 51 "F:\\nx3\\src\\nx3\\VVoice.hx"
				return this.@value.@value;
			}
			#line default
		}
		
		
		public  global::Array<object> beamgroups;
		
		public  global::Array<global::nx3.ENoteVal> beampattern;
		
		public virtual   global::Array<object> getBeamgroups(global::Array<global::nx3.ENoteVal> pattern){
			unchecked {
				#line 77 "F:\\nx3\\src\\nx3\\VVoice.hx"
				if (( ( pattern != default(global::Array<global::nx3.ENoteVal>) ) && ( pattern != this.beampattern ) )) {
					#line 79 "F:\\nx3\\src\\nx3\\VVoice.hx"
					this.beampattern = pattern;
					this.beamgroups = default(global::Array<object>);
				}
				
				#line 83 "F:\\nx3\\src\\nx3\\VVoice.hx"
				if (( this.beamgroups != default(global::Array<object>) )) {
					#line 83 "F:\\nx3\\src\\nx3\\VVoice.hx"
					return this.beamgroups;
				}
				
				#line 85 "F:\\nx3\\src\\nx3\\VVoice.hx"
				this.beamgroups = new global::nx3.VVoiceBeamgroupsGenerator(((global::Array<object>) (this.getVNotes()) ), ((global::Array<global::nx3.ENoteVal>) (pattern) )).getBeamgroups();
				return this.beamgroups;
			}
			#line default
		}
		
		
		public  global::haxe.ds.ObjectMap<object, object> notesBeamgroups;
		
		public virtual   global::haxe.ds.ObjectMap<object, object> getNotesBeamgroups(global::Array<global::nx3.ENoteVal> pattern){
			unchecked {
				#line 92 "F:\\nx3\\src\\nx3\\VVoice.hx"
				if (( ( pattern != default(global::Array<global::nx3.ENoteVal>) ) && ( pattern != this.beampattern ) )) {
					#line 92 "F:\\nx3\\src\\nx3\\VVoice.hx"
					this.notesBeamgroups = default(global::haxe.ds.ObjectMap<object, object>);
				}
				
				#line 93 "F:\\nx3\\src\\nx3\\VVoice.hx"
				if (( this.notesBeamgroups != default(global::haxe.ds.ObjectMap<object, object>) )) {
					#line 93 "F:\\nx3\\src\\nx3\\VVoice.hx"
					return this.notesBeamgroups;
				}
				
				#line 94 "F:\\nx3\\src\\nx3\\VVoice.hx"
				if (( this.beamgroups == default(global::Array<object>) )) {
					#line 94 "F:\\nx3\\src\\nx3\\VVoice.hx"
					this.getBeamgroups(pattern);
				}
				
				#line 95 "F:\\nx3\\src\\nx3\\VVoice.hx"
				this.notesBeamgroups = new global::haxe.ds.ObjectMap<object, object>();
				{
					#line 96 "F:\\nx3\\src\\nx3\\VVoice.hx"
					int _g = 0;
					#line 96 "F:\\nx3\\src\\nx3\\VVoice.hx"
					global::Array<object> _g1 = this.beamgroups;
					#line 96 "F:\\nx3\\src\\nx3\\VVoice.hx"
					while (( _g < _g1.length )){
						#line 96 "F:\\nx3\\src\\nx3\\VVoice.hx"
						global::nx3.VBeamgroup beamgroup = ((global::nx3.VBeamgroup) (_g1[_g]) );
						#line 96 "F:\\nx3\\src\\nx3\\VVoice.hx"
						 ++ _g;
						#line 98 "F:\\nx3\\src\\nx3\\VVoice.hx"
						{
							#line 98 "F:\\nx3\\src\\nx3\\VVoice.hx"
							int _g2 = 0;
							#line 98 "F:\\nx3\\src\\nx3\\VVoice.hx"
							global::Array<object> _g3 = beamgroup.vnotes;
							#line 98 "F:\\nx3\\src\\nx3\\VVoice.hx"
							while (( _g2 < _g3.length )){
								#line 98 "F:\\nx3\\src\\nx3\\VVoice.hx"
								global::nx3.VNote vnote = ((global::nx3.VNote) (_g3[_g2]) );
								#line 98 "F:\\nx3\\src\\nx3\\VVoice.hx"
								 ++ _g2;
								#line 100 "F:\\nx3\\src\\nx3\\VVoice.hx"
								this.notesBeamgroups.@set(vnote, beamgroup);
							}
							
						}
						
					}
					
				}
				
				#line 103 "F:\\nx3\\src\\nx3\\VVoice.hx"
				return this.notesBeamgroups;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
				switch (hash){
					case 642342564:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						this.notesBeamgroups = ((global::haxe.ds.ObjectMap<object, object>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, object>(((global::haxe.ds.ObjectMap) (@value) ))) );
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return @value;
					}
					
					
					case 200327361:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						this.beampattern = ((global::Array<global::nx3.ENoteVal>) (global::Array<object>.__hx_cast<global::nx3.ENoteVal>(((global::Array) (@value) ))) );
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return @value;
					}
					
					
					case 1386824451:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						this.beamgroups = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return @value;
					}
					
					
					case 834174833:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						this.@value = global::haxe.lang.Null<object>.ofDynamic<int>(@value);
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return @value;
					}
					
					
					case 1793694498:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						this.vnotePositions = ((global::haxe.ds.ObjectMap<object, int>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, int>(((global::haxe.ds.ObjectMap) (@value) ))) );
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return @value;
					}
					
					
					case 1307013131:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						this.vnotes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return @value;
					}
					
					
					case 909694596:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						this.nvoice = ((global::nx3.NVoice) (@value) );
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return @value;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
				switch (hash){
					case 1494154926:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNotesBeamgroups") ), ((int) (1494154926) ))) );
					}
					
					
					case 642342564:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return this.notesBeamgroups;
					}
					
					
					case 790339385:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBeamgroups") ), ((int) (790339385) ))) );
					}
					
					
					case 200327361:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return this.beampattern;
					}
					
					
					case 1386824451:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return this.beamgroups;
					}
					
					
					case 294620923:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getValue") ), ((int) (294620923) ))) );
					}
					
					
					case 834174833:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return (this.@value).toDynamic();
					}
					
					
					case 625842744:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVNotePositions") ), ((int) (625842744) ))) );
					}
					
					
					case 1793694498:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return this.vnotePositions;
					}
					
					
					case 1567320353:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVNotes") ), ((int) (1567320353) ))) );
					}
					
					
					case 1307013131:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return this.vnotes;
					}
					
					
					case 909694596:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return this.nvoice;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
				switch (hash){
					case 1494154926:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return this.getNotesBeamgroups(((global::Array<global::nx3.ENoteVal>) (global::Array<object>.__hx_cast<global::nx3.ENoteVal>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 790339385:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return this.getBeamgroups(((global::Array<global::nx3.ENoteVal>) (global::Array<object>.__hx_cast<global::nx3.ENoteVal>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 294620923:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return this.getValue();
					}
					
					
					case 625842744:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return this.getVNotePositions();
					}
					
					
					case 1567320353:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return this.getVNotes();
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
				baseArr.push("notesBeamgroups");
				#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
				baseArr.push("beampattern");
				#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
				baseArr.push("beamgroups");
				#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
				baseArr.push("value");
				#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
				baseArr.push("vnotePositions");
				#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
				baseArr.push("vnotes");
				#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
				baseArr.push("nvoice");
				#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
				{
					#line 10 "F:\\nx3\\src\\nx3\\VVoice.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


