
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class QuickSyntaxParser : global::haxe.lang.HxObject {
		public    QuickSyntaxParser(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    QuickSyntaxParser(string str){
			unchecked {
				#line 41 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				global::nx3.qs.QuickSyntaxParser.__hx_ctor_nx3_qs_QuickSyntaxParser(this, str);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_qs_QuickSyntaxParser(global::nx3.qs.QuickSyntaxParser __temp_me208, string str){
			unchecked {
				#line 43 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				str = global::nx3.qs.QSyntaxTools.removeComments(str);
				str = global::nx3.qs.QSyntaxTools.removeSpaces(str);
				__temp_me208.str = str;
				__temp_me208.tokens = __temp_me208.parseTokens(__temp_me208.str);
				#line 48 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				__temp_me208.qsnotes = new global::haxe.ds.StringMap<object>();
				#line 50 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				__temp_me208.modeparser = new global::nx3.qs.ModeParser(((global::nx3.qs.QuickSyntaxParser) (__temp_me208) ));
				__temp_me208.barparser = new global::nx3.qs.BarParser(((global::nx3.qs.QuickSyntaxParser) (__temp_me208) ));
				__temp_me208.noteparser = new global::nx3.qs.NoteParser(((global::nx3.qs.QuickSyntaxParser) (__temp_me208) ));
				__temp_me208.lyricsparser = new global::nx3.qs.LyricsParser(((global::nx3.qs.QuickSyntaxParser) (__temp_me208) ));
				#line 55 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				__temp_me208.mode = global::nx3.qs.ContentMode.Notes;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				return new global::nx3.qs.QuickSyntaxParser(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				return new global::nx3.qs.QuickSyntaxParser(global::haxe.lang.Runtime.toString(arr[0]));
			}
			#line default
		}
		
		
		public  string str;
		
		public  global::Array<object> tokens;
		
		public  global::haxe.ds.StringMap<object> qsnotes;
		
		public  global::nx3.qs.ModeParser modeparser;
		
		public  global::nx3.qs.BarParser barparser;
		
		public  global::nx3.qs.NoteParser noteparser;
		
		public  global::nx3.qs.LyricsParser lyricsparser;
		
		public  global::nx3.qs.ContentMode mode;
		
		public virtual   global::haxe.ds.StringMap<object> parseToQSyntaxNotes(){
			unchecked {
				#line 62 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				{
					#line 62 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
					int _g = 0;
					#line 62 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
					global::Array<object> _g1 = this.tokens;
					#line 62 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
					while (( _g < _g1.length )){
						#line 62 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						string token = global::haxe.lang.Runtime.toString(_g1[_g]);
						#line 62 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						 ++ _g;
						#line 66 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						string testtoken = token;
						testtoken = this.modeparser.parse(token, this);
						if (string.Equals(testtoken, "")) {
							#line 68 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
							continue;
						}
						
						#line 69 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						testtoken = this.barparser.parse(token, this);
						if (string.Equals(testtoken, "")) {
							#line 70 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
							continue;
						}
						
						#line 71 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						{
							#line 71 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
							global::nx3.qs.ContentMode _g2 = this.mode;
							#line 71 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
							switch (global::Type.enumIndex(_g2)){
								case 0:
								{
									#line 74 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
									testtoken = this.noteparser.parse(token, this);
									if (string.Equals(testtoken, "")) {
										#line 75 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
										continue;
									}
									
									#line 73 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
									break;
								}
								
								
								case 2:
								{
									#line 77 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
									global::haxe.Log.trace.__hx_invoke2_o(default(double), "LYYYRICS", default(double), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"parseToQSyntaxNotes", "nx3.qs.QuickSyntaxParser", "QuickSyntaxParser.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (77) )})));
									testtoken = this.lyricsparser.parse(token, this);
									#line 76 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
									break;
								}
								
								
								default:
								{
									#line 71 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
									{
									}
									
									#line 71 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
									break;
								}
								
							}
							
						}
						
					}
					
				}
				
				#line 83 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				return this.qsnotes;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> parseTokens(string str){
			unchecked {
				#line 88 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				global::Array<object> result = new global::Array<object>(new object[]{});
				result = global::haxe.lang.StringExt.split(str, " ");
				return result;
			}
			#line default
		}
		
		
		public virtual   void addNote(global::nx3.NNote nnote, object bpvIndex){
			unchecked {
				#line 95 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				if (global::haxe.lang.Runtime.refEq(bpvIndex, default(object))) {
					#line 95 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
					bpvIndex = this.barparser.getBpvIndex();
				}
				
				#line 97 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				string bpvString = global::nx3.qs.QSyntaxTools.bpvToString(bpvIndex);
				#line 99 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				if ( ! (this.qsnotes.exists(bpvString)) ) {
					#line 99 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
					global::Array<object> @value = new global::Array<object>();
					#line 99 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
					this.qsnotes.@set(bpvString, @value);
				}
				
				#line 100 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.qsnotes.@get(((string) (bpvString) )).@value) ))) ).push(nnote);
			}
			#line default
		}
		
		
		public virtual   void passEvent(global::nx3.qs.ParserEvents @event){
			unchecked {
				#line 107 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				this.modeparser.recieveEvent(@event);
				this.barparser.recieveEvent(@event);
				this.noteparser.recieveEvent(@event);
				#line 111 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				switch (global::Type.enumIndex(@event)){
					case 3:
					{
						#line 111 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						global::nx3.qs.ContentMode mode = ((global::nx3.qs.ContentMode) (@event.@params[0]) );
						#line 114 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						this.mode = mode;
						#line 113 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						break;
					}
					
					
					default:
					{
						#line 111 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						{
						}
						
						#line 111 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						break;
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				switch (hash){
					case 1214305123:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						this.mode = ((global::nx3.qs.ContentMode) (@value) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return @value;
					}
					
					
					case 104823571:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						this.lyricsparser = ((global::nx3.qs.LyricsParser) (@value) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return @value;
					}
					
					
					case 1460155985:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						this.noteparser = ((global::nx3.qs.NoteParser) (@value) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return @value;
					}
					
					
					case 1587474162:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						this.barparser = ((global::nx3.qs.BarParser) (@value) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return @value;
					}
					
					
					case 60202114:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						this.modeparser = ((global::nx3.qs.ModeParser) (@value) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return @value;
					}
					
					
					case 1976485407:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						this.qsnotes = ((global::haxe.ds.StringMap<object>) (global::haxe.ds.StringMap<object>.__hx_cast<object>(((global::haxe.ds.StringMap) (@value) ))) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return @value;
					}
					
					
					case 300357466:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						this.tokens = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return @value;
					}
					
					
					case 5744817:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						this.str = global::haxe.lang.Runtime.toString(@value);
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return @value;
					}
					
					
					default:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				switch (hash){
					case 668745097:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("passEvent") ), ((int) (668745097) ))) );
					}
					
					
					case 88562355:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("addNote") ), ((int) (88562355) ))) );
					}
					
					
					case 220447725:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("parseTokens") ), ((int) (220447725) ))) );
					}
					
					
					case 1447932827:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("parseToQSyntaxNotes") ), ((int) (1447932827) ))) );
					}
					
					
					case 1214305123:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return this.mode;
					}
					
					
					case 104823571:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return this.lyricsparser;
					}
					
					
					case 1460155985:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return this.noteparser;
					}
					
					
					case 1587474162:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return this.barparser;
					}
					
					
					case 60202114:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return this.modeparser;
					}
					
					
					case 1976485407:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return this.qsnotes;
					}
					
					
					case 300357466:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return this.tokens;
					}
					
					
					case 5744817:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return this.str;
					}
					
					
					default:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				switch (hash){
					case 668745097:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						this.passEvent(((global::nx3.qs.ParserEvents) (dynargs[0]) ));
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						break;
					}
					
					
					case 88562355:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						this.addNote(((global::nx3.NNote) (dynargs[0]) ), dynargs[1]);
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						break;
					}
					
					
					case 220447725:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return this.parseTokens(global::haxe.lang.Runtime.toString(dynargs[0]));
					}
					
					
					case 1447932827:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return this.parseToQSyntaxNotes();
					}
					
					
					default:
					{
						#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				baseArr.push("mode");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				baseArr.push("lyricsparser");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				baseArr.push("noteparser");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				baseArr.push("barparser");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				baseArr.push("modeparser");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				baseArr.push("qsnotes");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				baseArr.push("tokens");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				baseArr.push("str");
				#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
				{
					#line 17 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxParser.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


