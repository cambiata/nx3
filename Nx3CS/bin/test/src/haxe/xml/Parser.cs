
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace haxe.xml{
	public  class Parser : global::haxe.lang.HxObject {
		static Parser() {
			#line 51 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
			{
				#line 52 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
				global::haxe.ds.StringMap<object> h = new global::haxe.ds.StringMap<object>();
				h.@set("lt", "<");
				h.@set("gt", ">");
				h.@set("amp", "&");
				h.@set("quot", "\"");
				h.@set("apos", "\'");
				h.@set("nbsp", new string(((char) (160) ), 1));
				global::haxe.xml.Parser.escapes = h;
			}
			
		}
		public    Parser(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 49 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    Parser(){
			unchecked {
				#line 49 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
				global::haxe.xml.Parser.__hx_ctor_haxe_xml_Parser(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_haxe_xml_Parser(global::haxe.xml.Parser __temp_me59){
			unchecked {
				#line 49 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static  global::haxe.ds.StringMap<object> escapes;
		
		public static   global::Xml parse(string str){
			unchecked {
				#line 64 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
				global::Xml doc = global::Xml.createDocument();
				global::haxe.xml.Parser.doParse(str, new global::haxe.lang.Null<int>(0, true), doc);
				return doc;
			}
			#line default
		}
		
		
		public static   int doParse(string str, global::haxe.lang.Null<int> p, global::Xml parent){
			unchecked {
				#line 70 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
				int __temp_p58 = ( ( ! (p.hasValue) ) ? (((int) (0) )) : (p.@value) );
				global::Xml xml = default(global::Xml);
				int state = 1;
				int next = 1;
				string aname = default(string);
				int start = 0;
				int nsubs = 0;
				int nbrackets = 0;
				int c = default(int);
				#line 78 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
				if (( ((uint) (__temp_p58) ) < str.Length )) {
					#line 78 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
					c = ((int) (global::haxe.lang.Runtime.toInt(str[__temp_p58])) );
				}
				 else {
					#line 78 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
					c = -1;
				}
				
				#line 79 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
				global::StringBuf buf = new global::StringBuf();
				while ( ! ((( c == -1 ))) ){
					#line 82 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
					switch (state){
						case 0:
						{
							#line 85 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							switch (c){
								case 10:case 13:case 9:case 32:
								{
									#line 88 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									{
									}
									
									#line 88 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									break;
								}
								
								
								default:
								{
									#line 93 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									state = next;
									continue;
								}
								
							}
							
							#line 85 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							break;
						}
						
						
						case 1:
						{
							#line 97 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							switch (c){
								case 60:
								{
									#line 100 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									state = 0;
									next = 2;
									#line 99 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									break;
								}
								
								
								default:
								{
									#line 103 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									start = __temp_p58;
									state = 13;
									continue;
								}
								
							}
							
							#line 97 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							break;
						}
						
						
						case 13:
						{
							#line 108 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							if (( c == 60 )) {
								#line 113 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								global::Xml child = global::Xml.createPCData(global::haxe.lang.Runtime.concat(buf.toString(), global::haxe.lang.StringExt.substr(str, start, new global::haxe.lang.Null<int>(( __temp_p58 - start ), true))));
								#line 115 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								buf = new global::StringBuf();
								parent.addChild(child);
								nsubs++;
								state = 0;
								next = 2;
							}
							 else {
								#line 122 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								if (( c == 38 )) {
									#line 123 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									buf.addSub(str, start, new global::haxe.lang.Null<int>(( __temp_p58 - start ), true));
									state = 18;
									next = 13;
									start = ( __temp_p58 + 1 );
								}
								
							}
							
							#line 108 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							break;
						}
						
						
						case 17:
						{
							#line 130 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							bool __temp_boolv211 = ( c == 93 );
							#line 130 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							bool __temp_boolv210 = false;
							#line 130 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							bool __temp_boolv209 = false;
							#line 130 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							if (__temp_boolv211) {
								#line 130 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								int __temp_stmt212 = default(int);
								#line 130 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								{
									#line 130 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									int index = ( __temp_p58 + 1 );
									#line 130 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									__temp_stmt212 = ( (( ((uint) (index) ) < str.Length )) ? (((int) (global::haxe.lang.Runtime.toInt(str[index])) )) : (-1) );
								}
								
								#line 130 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								__temp_boolv210 = ( __temp_stmt212 == 93 );
								#line 130 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								if (__temp_boolv210) {
									#line 130 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									int __temp_stmt213 = default(int);
									#line 130 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									{
										#line 130 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										int index1 = ( __temp_p58 + 2 );
										#line 130 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										__temp_stmt213 = ( (( ((uint) (index1) ) < str.Length )) ? (((int) (global::haxe.lang.Runtime.toInt(str[index1])) )) : (-1) );
									}
									
									#line 130 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									__temp_boolv209 = ( __temp_stmt213 == 62 );
								}
								
							}
							
							#line 130 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							bool __temp_stmt208 = ( ( __temp_boolv211 && __temp_boolv210 ) && __temp_boolv209 );
							#line 130 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							if (__temp_stmt208) {
								#line 132 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								global::Xml child1 = global::Xml.createCData(global::haxe.lang.StringExt.substr(str, start, new global::haxe.lang.Null<int>(( __temp_p58 - start ), true)));
								parent.addChild(child1);
								nsubs++;
								__temp_p58 += 2;
								state = 1;
							}
							
							#line 130 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							break;
						}
						
						
						case 2:
						{
							#line 139 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							switch (c){
								case 33:
								{
									#line 142 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									int __temp_stmt214 = default(int);
									#line 142 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									{
										#line 142 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										int index2 = ( __temp_p58 + 1 );
										#line 142 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										__temp_stmt214 = ( (( ((uint) (index2) ) < str.Length )) ? (((int) (global::haxe.lang.Runtime.toInt(str[index2])) )) : (-1) );
									}
									
									#line 142 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									if (( __temp_stmt214 == 91 )) {
										#line 144 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										__temp_p58 += 2;
										if ( ! (string.Equals(global::haxe.lang.StringExt.substr(str, __temp_p58, new global::haxe.lang.Null<int>(6, true)).ToUpper(), "CDATA[")) ) {
											#line 146 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
											throw global::haxe.lang.HaxeException.wrap("Expected <![CDATA[");
										}
										
										#line 147 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										__temp_p58 += 5;
										state = 17;
										start = ( __temp_p58 + 1 );
									}
									 else {
										#line 151 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										int __temp_stmt217 = default(int);
										#line 151 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										{
											#line 151 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
											int index3 = ( __temp_p58 + 1 );
											#line 151 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
											__temp_stmt217 = ( (( ((uint) (index3) ) < str.Length )) ? (((int) (global::haxe.lang.Runtime.toInt(str[index3])) )) : (-1) );
										}
										
										#line 151 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										bool __temp_stmt216 = ( __temp_stmt217 == 68 );
										#line 151 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										bool __temp_boolv218 = false;
										#line 151 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										if ( ! (__temp_stmt216) ) {
											#line 151 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
											int __temp_stmt219 = default(int);
											#line 151 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
											{
												#line 151 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
												int index4 = ( __temp_p58 + 1 );
												#line 151 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
												__temp_stmt219 = ( (( ((uint) (index4) ) < str.Length )) ? (((int) (global::haxe.lang.Runtime.toInt(str[index4])) )) : (-1) );
											}
											
											#line 151 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
											__temp_boolv218 = ( __temp_stmt219 == 100 );
										}
										
										#line 151 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										bool __temp_stmt215 = ( __temp_stmt216 || __temp_boolv218 );
										#line 151 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										if (__temp_stmt215) {
											#line 153 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
											if ( ! (string.Equals(global::haxe.lang.StringExt.substr(str, ( __temp_p58 + 2 ), new global::haxe.lang.Null<int>(6, true)).ToUpper(), "OCTYPE")) ) {
												#line 154 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
												throw global::haxe.lang.HaxeException.wrap("Expected <!DOCTYPE");
											}
											
											#line 155 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
											__temp_p58 += 8;
											state = 16;
											start = ( __temp_p58 + 1 );
										}
										 else {
											#line 159 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
											int __temp_stmt222 = default(int);
											#line 159 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
											{
												#line 159 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
												int index5 = ( __temp_p58 + 1 );
												#line 159 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
												__temp_stmt222 = ( (( ((uint) (index5) ) < str.Length )) ? (((int) (global::haxe.lang.Runtime.toInt(str[index5])) )) : (-1) );
											}
											
											#line 159 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
											bool __temp_stmt221 = ( __temp_stmt222 != 45 );
											#line 159 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
											bool __temp_boolv223 = false;
											#line 159 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
											if ( ! (__temp_stmt221) ) {
												#line 159 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
												int __temp_stmt224 = default(int);
												#line 159 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
												{
													#line 159 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
													int index6 = ( __temp_p58 + 2 );
													#line 159 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
													__temp_stmt224 = ( (( ((uint) (index6) ) < str.Length )) ? (((int) (global::haxe.lang.Runtime.toInt(str[index6])) )) : (-1) );
												}
												
												#line 159 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
												__temp_boolv223 = ( __temp_stmt224 != 45 );
											}
											
											#line 159 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
											bool __temp_stmt220 = ( __temp_stmt221 || __temp_boolv223 );
											#line 159 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
											if (__temp_stmt220) {
												#line 160 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
												throw global::haxe.lang.HaxeException.wrap("Expected <!--");
											}
											 else {
												#line 163 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
												__temp_p58 += 2;
												state = 15;
												start = ( __temp_p58 + 1 );
											}
											
										}
										
									}
									
									#line 142 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									break;
								}
								
								
								case 63:
								{
									#line 168 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									state = 14;
									start = __temp_p58;
									#line 167 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									break;
								}
								
								
								case 47:
								{
									#line 171 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									if (( parent == default(global::Xml) )) {
										#line 172 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										throw global::haxe.lang.HaxeException.wrap("Expected node name");
									}
									
									#line 173 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									start = ( __temp_p58 + 1 );
									state = 0;
									next = 10;
									#line 170 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									break;
								}
								
								
								default:
								{
									#line 177 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									state = 3;
									start = __temp_p58;
									continue;
								}
								
							}
							
							#line 139 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							break;
						}
						
						
						case 3:
						{
							#line 182 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							if ( ! ((( ( ( ( ( ( ( ( c >= 97 ) && ( c <= 122 ) ) || ( ( c >= 65 ) && ( c <= 90 ) ) ) || ( ( c >= 48 ) && ( c <= 57 ) ) ) || ( c == 58 ) ) || ( c == 46 ) ) || ( c == 95 ) ) || ( c == 45 ) ))) ) {
								#line 184 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								if (( __temp_p58 == start )) {
									#line 185 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									throw global::haxe.lang.HaxeException.wrap("Expected node name");
								}
								
								#line 186 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								xml = global::Xml.createElement(global::haxe.lang.StringExt.substr(str, start, new global::haxe.lang.Null<int>(( __temp_p58 - start ), true)));
								parent.addChild(xml);
								state = 0;
								next = 4;
								continue;
							}
							
							#line 182 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							break;
						}
						
						
						case 4:
						{
							#line 193 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							switch (c){
								case 47:
								{
									#line 196 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									state = 11;
									nsubs++;
									#line 195 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									break;
								}
								
								
								case 62:
								{
									#line 199 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									state = 9;
									nsubs++;
									#line 198 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									break;
								}
								
								
								default:
								{
									#line 202 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									state = 5;
									start = __temp_p58;
									continue;
								}
								
							}
							
							#line 193 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							break;
						}
						
						
						case 5:
						{
							#line 207 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							if ( ! ((( ( ( ( ( ( ( ( c >= 97 ) && ( c <= 122 ) ) || ( ( c >= 65 ) && ( c <= 90 ) ) ) || ( ( c >= 48 ) && ( c <= 57 ) ) ) || ( c == 58 ) ) || ( c == 46 ) ) || ( c == 95 ) ) || ( c == 45 ) ))) ) {
								#line 209 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								string tmp = default(string);
								if (( start == __temp_p58 )) {
									#line 211 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									throw global::haxe.lang.HaxeException.wrap("Expected attribute name");
								}
								
								#line 212 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								tmp = global::haxe.lang.StringExt.substr(str, start, new global::haxe.lang.Null<int>(( __temp_p58 - start ), true));
								aname = tmp;
								if (xml.exists(aname)) {
									#line 215 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									throw global::haxe.lang.HaxeException.wrap("Duplicate attribute");
								}
								
								#line 216 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								state = 0;
								next = 6;
								continue;
							}
							
							#line 207 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							break;
						}
						
						
						case 6:
						{
							#line 221 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							switch (c){
								case 61:
								{
									#line 224 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									state = 0;
									next = 7;
									#line 223 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									break;
								}
								
								
								default:
								{
									#line 227 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									throw global::haxe.lang.HaxeException.wrap("Expected =");
								}
								
							}
							
							#line 221 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							break;
						}
						
						
						case 7:
						{
							#line 230 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							switch (c){
								case 34:case 39:
								{
									#line 233 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									state = 8;
									start = __temp_p58;
									#line 232 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									break;
								}
								
								
								default:
								{
									#line 236 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									throw global::haxe.lang.HaxeException.wrap("Expected \"");
								}
								
							}
							
							#line 230 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							break;
						}
						
						
						case 8:
						{
							#line 239 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							if (( c == (( (( ((uint) (start) ) < str.Length )) ? (((int) (global::haxe.lang.Runtime.toInt(str[start])) )) : (-1) )) )) {
								#line 241 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								string val = global::haxe.lang.StringExt.substr(str, ( start + 1 ), new global::haxe.lang.Null<int>(( ( __temp_p58 - start ) - 1 ), true));
								xml.@set(aname, val);
								state = 0;
								next = 4;
							}
							
							#line 239 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							break;
						}
						
						
						case 9:
						{
							#line 247 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							__temp_p58 = global::haxe.xml.Parser.doParse(str, new global::haxe.lang.Null<int>(__temp_p58, true), xml);
							start = __temp_p58;
							state = 1;
							#line 246 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							break;
						}
						
						
						case 11:
						{
							#line 251 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							switch (c){
								case 62:
								{
									#line 254 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									state = 1;
									#line 254 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									break;
								}
								
								
								default:
								{
									#line 256 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									throw global::haxe.lang.HaxeException.wrap("Expected >");
								}
								
							}
							
							#line 251 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							break;
						}
						
						
						case 12:
						{
							#line 259 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							switch (c){
								case 62:
								{
									#line 262 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									if (( nsubs == 0 )) {
										#line 263 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										parent.addChild(global::Xml.createPCData(""));
									}
									
									#line 264 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									return __temp_p58;
								}
								
								
								default:
								{
									#line 266 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									throw global::haxe.lang.HaxeException.wrap("Expected >");
								}
								
							}
							
						}
						
						
						case 10:
						{
							#line 269 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							if ( ! ((( ( ( ( ( ( ( ( c >= 97 ) && ( c <= 122 ) ) || ( ( c >= 65 ) && ( c <= 90 ) ) ) || ( ( c >= 48 ) && ( c <= 57 ) ) ) || ( c == 58 ) ) || ( c == 46 ) ) || ( c == 95 ) ) || ( c == 45 ) ))) ) {
								#line 271 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								if (( start == __temp_p58 )) {
									#line 272 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									throw global::haxe.lang.HaxeException.wrap("Expected node name");
								}
								
								#line 274 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								string v = global::haxe.lang.StringExt.substr(str, start, new global::haxe.lang.Null<int>(( __temp_p58 - start ), true));
								if ( ! (string.Equals(v, parent.get_nodeName())) ) {
									#line 276 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									throw global::haxe.lang.HaxeException.wrap(global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat("Expected </", parent.get_nodeName()), ">"));
								}
								
								#line 278 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								state = 0;
								next = 12;
								continue;
							}
							
							#line 269 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							break;
						}
						
						
						case 15:
						{
							#line 283 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							bool __temp_boolv228 = ( c == 45 );
							#line 283 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							bool __temp_boolv227 = false;
							#line 283 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							bool __temp_boolv226 = false;
							#line 283 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							if (__temp_boolv228) {
								#line 283 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								int __temp_stmt229 = default(int);
								#line 283 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								{
									#line 283 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									int index7 = ( __temp_p58 + 1 );
									#line 283 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									__temp_stmt229 = ( (( ((uint) (index7) ) < str.Length )) ? (((int) (global::haxe.lang.Runtime.toInt(str[index7])) )) : (-1) );
								}
								
								#line 283 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								__temp_boolv227 = ( __temp_stmt229 == 45 );
								#line 283 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								if (__temp_boolv227) {
									#line 283 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									int __temp_stmt230 = default(int);
									#line 283 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									{
										#line 283 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										int index8 = ( __temp_p58 + 2 );
										#line 283 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										__temp_stmt230 = ( (( ((uint) (index8) ) < str.Length )) ? (((int) (global::haxe.lang.Runtime.toInt(str[index8])) )) : (-1) );
									}
									
									#line 283 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									__temp_boolv226 = ( __temp_stmt230 == 62 );
								}
								
							}
							
							#line 283 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							bool __temp_stmt225 = ( ( __temp_boolv228 && __temp_boolv227 ) && __temp_boolv226 );
							#line 283 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							if (__temp_stmt225) {
								#line 285 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								parent.addChild(global::Xml.createComment(global::haxe.lang.StringExt.substr(str, start, new global::haxe.lang.Null<int>(( __temp_p58 - start ), true))));
								__temp_p58 += 2;
								state = 1;
							}
							
							#line 283 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							break;
						}
						
						
						case 16:
						{
							#line 290 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							if (( c == 91 )) {
								#line 291 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								nbrackets++;
							}
							 else {
								#line 292 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								if (( c == 93 )) {
									#line 293 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									nbrackets--;
								}
								 else {
									#line 294 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									if (( ( c == 62 ) && ( nbrackets == 0 ) )) {
										#line 296 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										parent.addChild(global::Xml.createDocType(global::haxe.lang.StringExt.substr(str, start, new global::haxe.lang.Null<int>(( __temp_p58 - start ), true))));
										state = 1;
									}
									
								}
								
							}
							
							#line 290 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							break;
						}
						
						
						case 14:
						{
							#line 300 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							bool __temp_boolv233 = ( c == 63 );
							#line 300 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							bool __temp_boolv232 = false;
							#line 300 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							if (__temp_boolv233) {
								#line 300 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								int __temp_stmt234 = default(int);
								#line 300 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								{
									#line 300 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									int index9 = ( __temp_p58 + 1 );
									#line 300 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									__temp_stmt234 = ( (( ((uint) (index9) ) < str.Length )) ? (((int) (global::haxe.lang.Runtime.toInt(str[index9])) )) : (-1) );
								}
								
								#line 300 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								__temp_boolv232 = ( __temp_stmt234 == 62 );
							}
							
							#line 300 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							bool __temp_stmt231 = ( __temp_boolv233 && __temp_boolv232 );
							#line 300 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							if (__temp_stmt231) {
								#line 302 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								__temp_p58++;
								string str1 = global::haxe.lang.StringExt.substr(str, ( start + 1 ), new global::haxe.lang.Null<int>(( ( __temp_p58 - start ) - 2 ), true));
								parent.addChild(global::Xml.createProcessingInstruction(str1));
								state = 1;
							}
							
							#line 300 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							break;
						}
						
						
						case 18:
						{
							#line 308 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							if (( c == 59 )) {
								#line 310 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								string s = global::haxe.lang.StringExt.substr(str, start, new global::haxe.lang.Null<int>(( __temp_p58 - start ), true));
								if (( (( (( ((uint) (0) ) < s.Length )) ? (((int) (global::haxe.lang.Runtime.toInt(s[0])) )) : (-1) )) == 35 )) {
									#line 312 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									global::haxe.lang.Null<int> i = default(global::haxe.lang.Null<int>);
									#line 312 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									if (( (( (( ((uint) (1) ) < s.Length )) ? (((int) (global::haxe.lang.Runtime.toInt(s[1])) )) : (-1) )) == 120 )) {
										#line 313 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										i = global::Std.parseInt(global::haxe.lang.Runtime.concat("0", global::haxe.lang.StringExt.substr(s, 1, new global::haxe.lang.Null<int>(( s.Length - 1 ), true))));
									}
									 else {
										#line 314 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										i = global::Std.parseInt(global::haxe.lang.StringExt.substr(s, 1, new global::haxe.lang.Null<int>(( s.Length - 1 ), true)));
									}
									
									#line 315 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									{
										#line 315 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										string x = new string(((char) (i.@value) ), 1);
										#line 315 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										buf.b.Append(((object) (global::Std.@string(x)) ));
									}
									
								}
								 else {
									#line 316 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
									if ( ! (global::haxe.xml.Parser.escapes.exists(s)) ) {
										#line 317 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										buf.b.Append(((object) (global::Std.@string(global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat("&", s), ";"))) ));
									}
									 else {
										#line 319 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										string x1 = global::haxe.lang.Runtime.toString(global::haxe.xml.Parser.escapes.@get(((string) (s) )).@value);
										#line 319 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
										buf.b.Append(((object) (global::Std.@string(x1)) ));
									}
									
								}
								
								#line 320 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
								start = ( __temp_p58 + 1 );
								state = next;
							}
							
							#line 308 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							break;
						}
						
						
					}
					
					#line 324 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
					{
						#line 324 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
						int index10 =  ++ __temp_p58;
						#line 324 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
						if (( ((uint) (index10) ) < str.Length )) {
							#line 324 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							c = ((int) (global::haxe.lang.Runtime.toInt(str[index10])) );
						}
						 else {
							#line 324 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
							c = -1;
						}
						
					}
					
				}
				
				#line 327 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
				if (( state == 1 )) {
					#line 329 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
					start = __temp_p58;
					state = 13;
				}
				
				#line 333 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
				if (( state == 13 )) {
					#line 335 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
					if (( ( __temp_p58 != start ) || ( nsubs == 0 ) )) {
						#line 336 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
						parent.addChild(global::Xml.createPCData(global::haxe.lang.Runtime.concat(buf.toString(), global::haxe.lang.StringExt.substr(str, start, new global::haxe.lang.Null<int>(( __temp_p58 - start ), true)))));
					}
					
					#line 337 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
					return __temp_p58;
				}
				
				#line 340 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
				throw global::haxe.lang.HaxeException.wrap("Unexpected end");
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 49 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
				return new global::haxe.xml.Parser(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 49 "F:\\HaxeToolkit\\haxe\\std\\haxe\\xml\\Parser.hx"
				return new global::haxe.xml.Parser();
			}
			#line default
		}
		
		
	}
}


