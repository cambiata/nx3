
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser : global::nx3.qs.BaseParser {
		public    NoteParser(global::haxe.lang.EmptyObject empty) : base(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) )){
			unchecked {
			}
			#line default
		}
		
		
		public    NoteParser(global::nx3.qs.QuickSyntaxParser parser) : base(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) )){
			unchecked {
				#line 37 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				global::nx3.qs.NoteParser.__hx_ctor_nx3_qs_NoteParser(this, parser);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_qs_NoteParser(global::nx3.qs.NoteParser __temp_me205, global::nx3.qs.QuickSyntaxParser parser){
			unchecked {
				#line 37 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				global::nx3.qs.BaseParser.__hx_ctor_nx3_qs_BaseParser(__temp_me205, parser);
				#line 33 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				__temp_me205.guessOctave = false;
				#line 39 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				__temp_me205.notelevels = new global::Array<int>(new int[]{});
				__temp_me205.notesigns = new global::Array<global::nx3.ESign>(new global::nx3.ESign[]{});
				__temp_me205.notevalue = default(global::nx3.ENoteVal);
				#line 43 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				__temp_me205.prevlevel = 3;
				__temp_me205.prevlevels = new global::Array<int>(new int[]{3});
				__temp_me205.prevsigns = new global::Array<global::nx3.ESign>(new global::nx3.ESign[]{global::nx3.ESign.None});
				__temp_me205.prevvalue = global::nx3.ENoteVal.Nv4;
				#line 48 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				__temp_me205.clefAdjust = 0;
				__temp_me205.octAdjust = 0;
				#line 51 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				__temp_me205.pause = false;
				__temp_me205.pauselevel = 0;
				__temp_me205.tie = false;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return new global::nx3.qs.NoteParser(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return new global::nx3.qs.NoteParser(((global::nx3.qs.QuickSyntaxParser) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::Array<int> notelevels;
		
		public  global::nx3.ENoteVal notevalue;
		
		public  global::Array<global::nx3.ESign> notesigns;
		
		public  global::Array<int> prevlevels;
		
		public  global::nx3.ENoteVal prevvalue;
		
		public  global::Array<global::nx3.ESign> prevsigns;
		
		public  int clefAdjust;
		
		public  int octAdjust;
		
		public  bool pause;
		
		public  int pauselevel;
		
		public  int prevlevel;
		
		public  bool tie;
		
		public  bool guessOctave;
		
		public override   void createFunctions(){
			unchecked {
				#line 56 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				global::Array<object> _g = new global::Array<object>(new object[]{this});
				#line 60 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this.functions.@set("c#", new global::nx3.qs.NoteParser_createFunctions_60__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("cB", new global::nx3.qs.NoteParser_createFunctions_61__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("cN", new global::nx3.qs.NoteParser_createFunctions_62__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("c", new global::nx3.qs.NoteParser_createFunctions_63__Fun(((global::Array<object>) (_g) )));
				#line 65 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this.functions.@set("d#", new global::nx3.qs.NoteParser_createFunctions_65__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("dB", new global::nx3.qs.NoteParser_createFunctions_66__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("dN", new global::nx3.qs.NoteParser_createFunctions_67__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("d", new global::nx3.qs.NoteParser_createFunctions_68__Fun(((global::Array<object>) (_g) )));
				#line 70 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this.functions.@set("e#", new global::nx3.qs.NoteParser_createFunctions_70__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("eB", new global::nx3.qs.NoteParser_createFunctions_71__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("eN", new global::nx3.qs.NoteParser_createFunctions_72__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("e", new global::nx3.qs.NoteParser_createFunctions_73__Fun(((global::Array<object>) (_g) )));
				#line 75 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this.functions.@set("f#", new global::nx3.qs.NoteParser_createFunctions_75__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("fB", new global::nx3.qs.NoteParser_createFunctions_76__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("fN", new global::nx3.qs.NoteParser_createFunctions_77__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("f", new global::nx3.qs.NoteParser_createFunctions_78__Fun(((global::Array<object>) (_g) )));
				#line 80 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this.functions.@set("g#", new global::nx3.qs.NoteParser_createFunctions_80__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("gB", new global::nx3.qs.NoteParser_createFunctions_81__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("gN", new global::nx3.qs.NoteParser_createFunctions_82__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("g", new global::nx3.qs.NoteParser_createFunctions_83__Fun(((global::Array<object>) (_g) )));
				#line 85 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this.functions.@set("a#", new global::nx3.qs.NoteParser_createFunctions_85__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("aB", new global::nx3.qs.NoteParser_createFunctions_86__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("aN", new global::nx3.qs.NoteParser_createFunctions_87__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("a", new global::nx3.qs.NoteParser_createFunctions_88__Fun(((global::Array<object>) (_g) )));
				#line 90 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this.functions.@set("b#", new global::nx3.qs.NoteParser_createFunctions_90__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("bB", new global::nx3.qs.NoteParser_createFunctions_91__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("bN", new global::nx3.qs.NoteParser_createFunctions_92__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("b", new global::nx3.qs.NoteParser_createFunctions_93__Fun(((global::Array<object>) (_g) )));
				#line 95 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this.functions.@set("1.", new global::nx3.qs.NoteParser_createFunctions_95__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("1", new global::nx3.qs.NoteParser_createFunctions_96__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("2.", new global::nx3.qs.NoteParser_createFunctions_97__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("2", new global::nx3.qs.NoteParser_createFunctions_98__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("4.", new global::nx3.qs.NoteParser_createFunctions_99__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("4", new global::nx3.qs.NoteParser_createFunctions_100__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("8.", new global::nx3.qs.NoteParser_createFunctions_101__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("8", new global::nx3.qs.NoteParser_createFunctions_102__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("16.", new global::nx3.qs.NoteParser_createFunctions_103__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("16", new global::nx3.qs.NoteParser_createFunctions_104__Fun(((global::Array<object>) (_g) )));
				#line 106 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this.functions.@set("_", new global::nx3.qs.NoteParser_createFunctions_106__Fun(((global::Array<object>) (_g) )));
				#line 108 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this.functions.@set("=", new global::nx3.qs.NoteParser_createFunctions_108__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("+", new global::nx3.qs.NoteParser_createFunctions_109__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("++", new global::nx3.qs.NoteParser_createFunctions_110__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("-", new global::nx3.qs.NoteParser_createFunctions_111__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("--", new global::nx3.qs.NoteParser_createFunctions_112__Fun(((global::Array<object>) (_g) )));
				#line 114 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this.functions.@set("p", new global::nx3.qs.NoteParser_createFunctions_114__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("p+", new global::nx3.qs.NoteParser_createFunctions_115__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("p-", new global::nx3.qs.NoteParser_createFunctions_116__Fun(((global::Array<object>) (_g) )));
			}
			#line default
		}
		
		
		public virtual   void pushNotelevel(int @value){
			unchecked {
				#line 125 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				if (this.guessOctave) {
					#line 127 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
					int delta = ( ( @value + this.octAdjust ) - this.prevlevel );
					global::haxe.Log.trace.__hx_invoke2_o(default(double), new global::Array<object>(new object[]{( @value + this.octAdjust ), this.prevlevel, ( ( @value + this.octAdjust ) - this.prevlevel )}), default(double), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"pushNotelevel", "nx3.qs.NoteParser", "NoteParser.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (128) )})));
					if (( delta >= 4 )) {
						#line 129 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.octAdjust = ( this.octAdjust - 7 );
					}
					
					#line 130 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
					if (( delta <= -4 )) {
						#line 130 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.octAdjust = ( this.octAdjust + 7 );
					}
					
				}
				
				#line 132 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this.notelevels.push(@value);
			}
			#line default
		}
		
		
		public override   void tokenFinished(string originaltoken){
			unchecked {
				#line 138 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				if (global::Lambda.has<object>(new global::Array<object>(new object[]{"+", "++", "-", "--", "="}), originaltoken)) {
					#line 138 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
					return ;
				}
				
				#line 140 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				if (( this.notelevels.length < 1 )) {
					#line 140 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
					this.notelevels = this.prevlevels.copy();
				}
				
				#line 141 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				if (( this.notesigns.length < 1 )) {
					#line 141 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
					this.notesigns = this.prevsigns.copy();
				}
				
				#line 142 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				if (( this.notevalue == default(global::nx3.ENoteVal) )) {
					#line 142 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
					this.notevalue = this.prevvalue;
				}
				
				#line 144 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				global::nx3.ENoteVal val = this.notevalue;
				global::nx3.NNote nnote = default(global::nx3.NNote);
				#line 147 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				if (this.pause) {
					#line 149 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
					nnote = new global::nx3.NNote(((global::nx3.ENoteType) (global::nx3.ENoteType.Pause(this.pauselevel)) ), ((global::Array<object>) (default(global::Array<object>)) ), ((global::nx3.ENoteVal) (val) ), ((global::nx3.EDirectionUAD) (default(global::nx3.EDirectionUAD)) ));
					this.pause = false;
				}
				 else {
					#line 154 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
					global::Array<object> nheads = new global::Array<object>(new object[]{});
					{
						#line 155 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						int _g1 = 0;
						#line 155 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						int _g = this.notelevels.length;
						#line 155 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						while (( _g1 < _g )){
							#line 155 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
							int i = _g1++;
							#line 157 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
							int level = ( ( this.notelevels[i] + this.octAdjust ) + this.clefAdjust );
							global::nx3.ESign sign = this.notesigns[i];
							global::nx3.ETie tie = default(global::nx3.ETie);
							#line 159 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
							if (this.tie) {
								#line 159 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
								tie = global::nx3.ETie.Tie(global::nx3.EDirectionUAD.Auto, 0);
							}
							 else {
								#line 159 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
								tie = default(global::nx3.ETie);
							}
							
							#line 160 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
							nheads.push(new global::nx3.NHead(((global::nx3.EHeadType) (default(global::nx3.EHeadType)) ), new global::haxe.lang.Null<int>(level, true), ((global::nx3.ESign) (sign) ), ((global::nx3.ETie) (tie) ), ((global::nx3.ETie) (default(global::nx3.ETie)) )));
							this.prevlevel = level;
						}
						
					}
					
					#line 163 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
					nnote = new global::nx3.NNote(((global::nx3.ENoteType) (default(global::nx3.ENoteType)) ), ((global::Array<object>) (nheads) ), ((global::nx3.ENoteVal) (val) ), ((global::nx3.EDirectionUAD) (default(global::nx3.EDirectionUAD)) ));
				}
				
				#line 167 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this.builder.addNote(nnote, default(object));
				this.prevlevels = this.notelevels.copy();
				this.prevsigns = this.notesigns.copy();
				this.prevvalue = this.notevalue;
				#line 172 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this.notelevels = new global::Array<int>(new int[]{});
				this.notesigns = new global::Array<global::nx3.ESign>(new global::nx3.ESign[]{});
				this.notevalue = default(global::nx3.ENoteVal);
				this.tie = false;
			}
			#line default
		}
		
		
		public override   void recieveEvent(global::nx3.qs.ParserEvents @event){
			unchecked {
				#line 181 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				switch (global::Type.enumIndex(@event)){
					case 1:
					{
						#line 181 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						int octave = ((int) (global::haxe.lang.Runtime.toInt(@event.@params[0])) );
						#line 184 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.octAdjust = octave;
						#line 183 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						break;
					}
					
					
					case 2:
					{
						#line 181 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						global::nx3.ENoteVal val = ((global::nx3.ENoteVal) (@event.@params[0]) );
						#line 186 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.notevalue = val;
						#line 185 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						break;
					}
					
					
					case 0:
					{
						#line 181 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						bool mode = global::haxe.lang.Runtime.toBool(@event.@params[0]);
						#line 188 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.guessOctave = mode;
						#line 187 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						break;
					}
					
					
					default:
					{
						#line 181 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						{
						}
						
						#line 181 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						break;
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				switch (hash){
					case 1250706865:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.prevlevel = ((int) (@value) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return @value;
					}
					
					
					case 883835598:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.pauselevel = ((int) (@value) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return @value;
					}
					
					
					case 1150728591:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.octAdjust = ((int) (@value) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return @value;
					}
					
					
					case 1422344057:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.clefAdjust = ((int) (@value) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return @value;
					}
					
					
					default:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				switch (hash){
					case 946187047:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.guessOctave = global::haxe.lang.Runtime.toBool(@value);
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return @value;
					}
					
					
					case 5792080:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.tie = global::haxe.lang.Runtime.toBool(@value);
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return @value;
					}
					
					
					case 1250706865:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.prevlevel = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return @value;
					}
					
					
					case 883835598:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.pauselevel = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return @value;
					}
					
					
					case 1029166838:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.pause = global::haxe.lang.Runtime.toBool(@value);
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return @value;
					}
					
					
					case 1150728591:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.octAdjust = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return @value;
					}
					
					
					case 1422344057:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.clefAdjust = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return @value;
					}
					
					
					case 1425266115:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.prevsigns = ((global::Array<global::nx3.ESign>) (global::Array<object>.__hx_cast<global::nx3.ESign>(((global::Array) (@value) ))) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return @value;
					}
					
					
					case 165785502:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.prevvalue = ((global::nx3.ENoteVal) (@value) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return @value;
					}
					
					
					case 1882240418:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.prevlevels = ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (@value) ))) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return @value;
					}
					
					
					case 657096804:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.notesigns = ((global::Array<global::nx3.ESign>) (global::Array<object>.__hx_cast<global::nx3.ESign>(((global::Array) (@value) ))) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return @value;
					}
					
					
					case 1545099839:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.notevalue = ((global::nx3.ENoteVal) (@value) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return @value;
					}
					
					
					case 231692257:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.notelevels = ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (@value) ))) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return @value;
					}
					
					
					default:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				switch (hash){
					case 664337087:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("recieveEvent") ), ((int) (664337087) ))) );
					}
					
					
					case 1779233675:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("tokenFinished") ), ((int) (1779233675) ))) );
					}
					
					
					case 1366602520:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("pushNotelevel") ), ((int) (1366602520) ))) );
					}
					
					
					case 1425523647:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("createFunctions") ), ((int) (1425523647) ))) );
					}
					
					
					case 946187047:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return this.guessOctave;
					}
					
					
					case 5792080:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return this.tie;
					}
					
					
					case 1250706865:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return this.prevlevel;
					}
					
					
					case 883835598:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return this.pauselevel;
					}
					
					
					case 1029166838:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return this.pause;
					}
					
					
					case 1150728591:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return this.octAdjust;
					}
					
					
					case 1422344057:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return this.clefAdjust;
					}
					
					
					case 1425266115:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return this.prevsigns;
					}
					
					
					case 165785502:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return this.prevvalue;
					}
					
					
					case 1882240418:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return this.prevlevels;
					}
					
					
					case 657096804:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return this.notesigns;
					}
					
					
					case 1545099839:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return this.notevalue;
					}
					
					
					case 231692257:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return this.notelevels;
					}
					
					
					default:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				switch (hash){
					case 1250706865:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return ((double) (this.prevlevel) );
					}
					
					
					case 883835598:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return ((double) (this.pauselevel) );
					}
					
					
					case 1150728591:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return ((double) (this.octAdjust) );
					}
					
					
					case 1422344057:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return ((double) (this.clefAdjust) );
					}
					
					
					default:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				switch (hash){
					case 1425523647:case 1779233675:case 664337087:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return global::haxe.lang.Runtime.slowCallField(this, field, dynargs);
					}
					
					
					case 1366602520:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						this.pushNotelevel(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ));
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						break;
					}
					
					
					default:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				baseArr.push("guessOctave");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				baseArr.push("tie");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				baseArr.push("prevlevel");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				baseArr.push("pauselevel");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				baseArr.push("pause");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				baseArr.push("octAdjust");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				baseArr.push("clefAdjust");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				baseArr.push("prevsigns");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				baseArr.push("prevvalue");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				baseArr.push("prevlevels");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				baseArr.push("notesigns");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				baseArr.push("notevalue");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				baseArr.push("notelevels");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				{
					#line 17 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_60__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_60__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 60 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 60 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 60 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(6);
				#line 60 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Sharp);
				#line 60 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_61__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_61__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 61 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 61 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token1 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 61 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(6);
				#line 61 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Flat);
				#line 61 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token1, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_62__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_62__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 62 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 62 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token2 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 62 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(6);
				#line 62 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Natural);
				#line 62 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token2, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_63__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_63__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 63 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 63 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token3 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 63 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(6);
				#line 63 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.None);
				#line 63 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token3, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_65__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_65__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 65 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 65 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token4 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 65 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(5);
				#line 65 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Sharp);
				#line 65 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token4, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_66__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_66__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 66 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 66 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token5 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 66 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(5);
				#line 66 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Flat);
				#line 66 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token5, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_67__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_67__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 67 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 67 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token6 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 67 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(5);
				#line 67 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Natural);
				#line 67 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token6, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_68__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_68__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 68 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 68 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token7 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 68 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(5);
				#line 68 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.None);
				#line 68 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token7, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_70__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_70__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 70 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 70 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token8 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 70 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(4);
				#line 70 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Sharp);
				#line 70 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token8, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_71__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_71__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 71 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 71 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token9 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 71 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(4);
				#line 71 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Flat);
				#line 71 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token9, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_72__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_72__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 72 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 72 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token10 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 72 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(4);
				#line 72 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Natural);
				#line 72 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token10, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_73__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_73__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 73 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 73 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token11 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 73 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(4);
				#line 73 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.None);
				#line 73 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token11, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_75__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_75__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 75 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 75 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token12 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 75 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(3);
				#line 75 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Sharp);
				#line 75 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token12, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_76__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_76__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 76 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 76 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token13 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 76 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(3);
				#line 76 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Flat);
				#line 76 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token13, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_77__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_77__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 77 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 77 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token14 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 77 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(3);
				#line 77 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Natural);
				#line 77 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token14, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_78__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_78__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 78 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 78 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token15 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 78 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(3);
				#line 78 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.None);
				#line 78 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token15, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_80__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_80__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 80 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 80 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token16 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 80 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(2);
				#line 80 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Sharp);
				#line 80 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token16, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_81__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_81__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 81 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 81 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token17 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 81 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(2);
				#line 81 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Flat);
				#line 81 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token17, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_82__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_82__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 82 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 82 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token18 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 82 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(2);
				#line 82 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Natural);
				#line 82 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token18, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_83__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_83__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 83 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 83 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token19 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 83 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(2);
				#line 83 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.None);
				#line 83 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token19, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_85__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_85__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 85 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 85 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token20 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 85 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(1);
				#line 85 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Sharp);
				#line 85 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token20, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_86__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_86__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 86 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 86 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token21 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 86 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(1);
				#line 86 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Flat);
				#line 86 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token21, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_87__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_87__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 87 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 87 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token22 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 87 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(1);
				#line 87 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Natural);
				#line 87 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token22, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_88__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_88__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 88 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 88 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token23 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 88 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(1);
				#line 88 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.None);
				#line 88 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token23, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_90__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_90__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 90 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 90 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token24 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 90 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(0);
				#line 90 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Sharp);
				#line 90 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token24, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_91__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_91__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 91 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 91 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token25 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 91 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(0);
				#line 91 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Flat);
				#line 91 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token25, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_92__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_92__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 92 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 92 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token26 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 92 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(0);
				#line 92 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.Natural);
				#line 92 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token26, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_93__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_93__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 93 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 93 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token27 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 93 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pushNotelevel(0);
				#line 93 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notesigns.push(global::nx3.ESign.None);
				#line 93 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token27, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_95__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_95__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 95 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 95 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token28 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 95 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv1dot;
				#line 95 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token28, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_96__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_96__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 96 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 96 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token29 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 96 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv1;
				#line 96 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token29, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_97__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_97__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 97 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 97 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token30 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 97 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv2dot;
				#line 97 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token30, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_98__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_98__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 98 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 98 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token31 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 98 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv2;
				#line 98 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token31, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_99__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_99__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 99 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 99 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token32 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 99 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv4dot;
				#line 99 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token32, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_100__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_100__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 100 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 100 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token33 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 100 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv4;
				#line 100 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token33, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_101__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_101__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 101 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 101 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token34 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 101 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv8dot;
				#line 101 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token34, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_102__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_102__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 102 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 102 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token35 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 102 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv8;
				#line 102 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token35, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_103__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_103__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 103 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 103 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token36 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 103 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv16dot;
				#line 103 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token36, 3, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_104__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_104__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 104 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 104 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token37 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 104 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv16;
				#line 104 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token37, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_106__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_106__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 106 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 106 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token38 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 106 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).tie = true;
				#line 106 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token38, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_108__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_108__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 108 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 108 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token39 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 108 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).prevlevel = 3;
				#line 108 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).octAdjust = 0;
				#line 108 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token39, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_109__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_109__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 109 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 109 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token40 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 109 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).prevlevel = -4;
				#line 109 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).octAdjust = -7;
				#line 109 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token40, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_110__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_110__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 110 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 110 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token41 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 110 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).prevlevel = -11;
				#line 110 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).octAdjust = -14;
				#line 110 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token41, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_111__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_111__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 111 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 111 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token42 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 111 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).prevlevel = 10;
				#line 111 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).octAdjust = 7;
				#line 111 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token42, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_112__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_112__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 112 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 112 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token43 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 112 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).prevlevel = 17;
				#line 112 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).octAdjust = 14;
				#line 112 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token43, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_114__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_114__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 114 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 114 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token44 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 114 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pause = true;
				#line 114 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pauselevel = 0;
				#line 114 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token44, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_115__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_115__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 115 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 115 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token45 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 115 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pause = true;
				#line 115 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pauselevel = -1;
				#line 115 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token45, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class NoteParser_createFunctions_116__Fun : global::haxe.lang.Function {
		public    NoteParser_createFunctions_116__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 116 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 116 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				string token46 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 116 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pause = true;
				#line 116 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				((global::nx3.qs.NoteParser) (this._g[0]) ).pauselevel = 1;
				#line 116 "F:\\nx3\\src\\nx3\\qs\\NoteParser.hx"
				return global::haxe.lang.StringExt.substr(token46, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}


