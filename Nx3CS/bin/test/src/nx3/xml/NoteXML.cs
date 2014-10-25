
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.xml{
	public  class NoteXML : global::haxe.lang.HxObject {
		static NoteXML() {
			#line 24 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
			global::nx3.xml.NoteXML.XNOTE = "note";
			global::nx3.xml.NoteXML.XPAUSE = "pause";
			global::nx3.xml.NoteXML.XPAUSE_LEVEL = "level";
			#line 28 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
			global::nx3.xml.NoteXML.XLYRIC = "lyric";
			global::nx3.xml.NoteXML.XLYRIC_TEXT = "text";
			global::nx3.xml.NoteXML.XUNDEFINED = "undefined";
			#line 32 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
			global::nx3.xml.NoteXML.XNOTE_TYPE = "type";
			global::nx3.xml.NoteXML.XNOTE_TYPE_NOTE = "note";
			global::nx3.xml.NoteXML.XNOTE_TYPE_NOTATION_VARIANT = "variant";
			global::nx3.xml.NoteXML.XNOTE_VALUE = "value";
			global::nx3.xml.NoteXML.XNOTE_VAL = "val";
			global::nx3.xml.NoteXML.XNOTE_DIRECTION = "direction";
			global::nx3.xml.NoteXML.XNOTE_TYPE_PAUSE = "pause";
			global::nx3.xml.NoteXML.XNOTE_TYPE_NOTE_ARTICULATIONS = "articulations";
			global::nx3.xml.NoteXML.LIST_DELIMITER = ";";
			global::nx3.xml.NoteXML.XNOTE_TYPE_NOTE_ATTRIBUTES = "attributes";
			global::nx3.xml.NoteXML.XOFFSET = "offset";
			global::nx3.xml.NoteXML.XLYRIC_CONTINUATION = "continuation";
			global::nx3.xml.NoteXML.XLYRIC_FORMAT = "format";
		}
		public    NoteXML(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    NoteXML(){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
				global::nx3.xml.NoteXML.__hx_ctor_nx3_xml_NoteXML(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_xml_NoteXML(global::nx3.xml.NoteXML __temp_me139){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static  string XNOTE;
		
		public static  string XPAUSE;
		
		public static  string XPAUSE_LEVEL;
		
		public static  string XLYRIC;
		
		public static  string XLYRIC_TEXT;
		
		public static  string XUNDEFINED;
		
		public static  string XNOTE_TYPE;
		
		public static  string XNOTE_TYPE_NOTE;
		
		public static  string XNOTE_TYPE_NOTATION_VARIANT;
		
		public static  string XNOTE_VALUE;
		
		public static  string XNOTE_VAL;
		
		public static  string XNOTE_DIRECTION;
		
		public static  string XNOTE_TYPE_PAUSE;
		
		public static  string XNOTE_TYPE_NOTE_ARTICULATIONS;
		
		public static  string LIST_DELIMITER;
		
		public static  string XNOTE_TYPE_NOTE_ATTRIBUTES;
		
		public static  string XOFFSET;
		
		public static  string XLYRIC_CONTINUATION;
		
		public static  string XLYRIC_FORMAT;
		
		public static   global::Xml toXml(global::nx3.NNote note){
			unchecked {
				#line 48 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
				global::Xml xml = default(global::Xml);
				#line 51 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
				{
					#line 51 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
					global::nx3.ENoteType _g = note.type;
					#line 51 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
					switch (global::Type.enumIndex(_g)){
						case 0:
						{
							#line 51 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							global::Array<object> attributes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (_g.@params[3]) ))) );
							#line 51 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							global::Array<global::nx3.ENoteArticulation> articulations = ((global::Array<global::nx3.ENoteArticulation>) (global::Array<object>.__hx_cast<global::nx3.ENoteArticulation>(((global::Array) (_g.@params[2]) ))) );
							#line 51 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							global::nx3.ENotationVariant variant = ((global::nx3.ENotationVariant) (_g.@params[1]) );
							#line 51 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							global::Array<object> heads = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (_g.@params[0]) ))) );
							#line 54 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							{
								#line 55 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
								xml = global::Xml.createElement("note");
								#line 57 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
								{
									#line 57 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
									int _g1 = 0;
									#line 57 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
									while (( _g1 < heads.length )){
										#line 57 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
										global::nx3.NHead head = ((global::nx3.NHead) (heads[_g1]) );
										#line 57 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
										 ++ _g1;
										global::Xml headXml = global::nx3.xml.HeadXML.toXml(head);
										xml.addChild(headXml);
									}
									
								}
								
								#line 62 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
								if (( variant != default(global::nx3.ENotationVariant) )) {
									#line 62 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
									xml.@set("variant", global::Std.@string(variant));
								}
								
								#line 64 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
								if (( articulations != default(global::Array<global::nx3.ENoteArticulation>) )) {
									#line 66 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
									global::Array<object> articulationStrings = new global::Array<object>(new object[]{});
									{
										#line 67 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
										int _g11 = 0;
										#line 67 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
										while (( _g11 < articulations.length )){
											#line 67 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
											global::nx3.ENoteArticulation articulation = articulations[_g11];
											#line 67 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
											 ++ _g11;
											#line 69 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
											articulationStrings.push(global::Std.@string(articulation));
										}
										
									}
									
									#line 71 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
									xml.@set("articulations", articulationStrings.@join(";"));
								}
								
								#line 74 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
								if (( attributes != default(global::Array<object>) )) {
									#line 76 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
									global::Array<object> attributesStrings = new global::Array<object>(new object[]{});
									{
										#line 77 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
										int _g12 = 0;
										#line 77 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
										while (( _g12 < attributes.length )){
											#line 77 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
											global::nx3.ENoteAttributes attribute = ((global::nx3.ENoteAttributes) (attributes[_g12]) );
											#line 77 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
											 ++ _g12;
											#line 79 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
											attributesStrings.push(global::Std.@string(attribute));
										}
										
									}
									
									#line 81 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
									xml.@set("attributes", attributesStrings.@join(";"));
								}
								
							}
							
							#line 54 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							break;
						}
						
						
						case 1:
						{
							#line 51 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							int level = ((int) (global::haxe.lang.Runtime.toInt(_g.@params[0])) );
							#line 85 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							{
								#line 86 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
								xml = global::Xml.createElement("pause");
								if (( level != 0 )) {
									#line 87 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
									xml.@set("level", global::Std.@string(level));
								}
								
							}
							
							#line 85 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							break;
						}
						
						
						case 4:
						{
							#line 51 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							object format = _g.@params[3];
							#line 51 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							global::nx3.ELyricContinuation continuation = ((global::nx3.ELyricContinuation) (_g.@params[2]) );
							#line 51 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							global::nx3.EPosition offset = ((global::nx3.EPosition) (_g.@params[1]) );
							#line 51 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							string text = global::haxe.lang.Runtime.toString(_g.@params[0]);
							#line 90 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							{
								#line 91 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
								xml = global::Xml.createElement("lyric");
								xml.@set("text", text);
								if (( continuation != default(global::nx3.ELyricContinuation) )) {
									#line 93 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
									xml.@set("continuation", global::Std.@string(continuation));
								}
								
								#line 94 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
								if (( offset != default(global::nx3.EPosition) )) {
									#line 94 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
									xml.@set("offset", global::Std.@string(offset));
								}
								
								#line 95 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
								if (( ! (global::haxe.lang.Runtime.refEq(format, default(object))) )) {
									#line 95 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
									xml.@set("format", global::Std.@string(format));
								}
								
							}
							
							#line 90 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							break;
						}
						
						
						default:
						{
							#line 98 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							xml = global::Xml.createElement("undefined");
							#line 98 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							break;
						}
						
					}
					
				}
				
				#line 102 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
				if (( global::nx3.ENoteValTools.@value(note.@value) != global::nx3.ENoteValTools.@value(global::nx3.ENoteVal.Nv4) )) {
					#line 105 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
					xml.@set("val", global::Std.@string(global::nx3.ENoteValTools.toValString(note.@value)));
				}
				
				#line 109 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
				if (( note.direction != global::nx3.EDirectionUAD.Auto )) {
					#line 109 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
					xml.@set("direction", global::Std.@string(note.direction));
				}
				
				#line 111 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
				return xml;
			}
			#line default
		}
		
		
		public static   global::nx3.NNote fromXmlStr(string xmlStr){
			unchecked {
				#line 116 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
				global::Xml xml = global::Xml.parse(xmlStr).firstElement();
				#line 118 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
				string xmlType = xml.get_nodeName();
				global::nx3.ENoteType type = default(global::nx3.ENoteType);
				#line 121 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
				switch (xmlType){
					case "note":
					{
						#line 126 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
						global::Array<object> heads = new global::Array<object>(new object[]{});
						{
							#line 127 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							object __temp_iterator166 = xml.elementsNamed(global::nx3.xml.HeadXML.XHEAD);
							#line 127 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator166, "hasNext", 407283053, default(global::Array)))){
								#line 127 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
								global::Xml h = ((global::Xml) (global::haxe.lang.Runtime.callField(__temp_iterator166, "next", 1224901875, default(global::Array))) );
								#line 129 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
								global::nx3.NHead head = global::nx3.xml.HeadXML.fromXmlStr(h.toString());
								heads.push(head);
							}
							
						}
						
						#line 133 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
						global::nx3.ENotationVariant variant = ((global::nx3.ENotationVariant) (global::cx.EnumTools.createFromString<object>(typeof(global::nx3.ENotationVariant), xml.@get("variant"))) );
						#line 136 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
						global::Array<global::nx3.ENoteArticulation> articulations = new global::Array<global::nx3.ENoteArticulation>(new global::nx3.ENoteArticulation[]{});
						string articulationsStr = xml.@get("articulations");
						if ( ! (string.Equals(articulationsStr, default(string))) ) {
							#line 140 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							global::Array<object> articulationStrings = global::haxe.lang.StringExt.split(articulationsStr, ";");
							{
								#line 141 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
								int _g = 0;
								#line 141 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
								while (( _g < articulationStrings.length )){
									#line 141 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
									string articulationStr = global::haxe.lang.Runtime.toString(articulationStrings[_g]);
									#line 141 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
									 ++ _g;
									#line 143 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
									articulations.push(global::cx.EnumTools.createFromString<global::nx3.ENoteArticulation>(typeof(global::nx3.ENoteArticulation), articulationStr));
								}
								
							}
							
						}
						
						#line 146 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
						if (( articulations.length == 0 )) {
							#line 146 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							articulations = default(global::Array<global::nx3.ENoteArticulation>);
						}
						
						#line 148 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
						global::Array<object> attributes = new global::Array<object>(new object[]{});
						string attributesStr = xml.@get("attributes");
						if ( ! (string.Equals(attributesStr, default(string))) ) {
							#line 152 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							global::Array<object> attributesStrings = global::haxe.lang.StringExt.split(attributesStr, ";");
							{
								#line 153 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
								int _g1 = 0;
								#line 153 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
								while (( _g1 < attributesStrings.length )){
									#line 153 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
									string attributeStr = global::haxe.lang.Runtime.toString(attributesStrings[_g1]);
									#line 153 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
									 ++ _g1;
									#line 155 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
									attributes.push(((global::nx3.ENoteAttributes) (global::cx.EnumTools.createFromString<object>(typeof(global::nx3.ENoteAttributes), attributeStr)) ));
								}
								
							}
							
						}
						
						#line 158 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
						if (( attributes.length == 0 )) {
							#line 158 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							attributes = default(global::Array<object>);
						}
						
						#line 160 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
						type = global::nx3.ENoteType.Note(heads, variant, articulations, attributes);
						#line 125 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
						break;
					}
					
					
					case "pause":
					{
						#line 164 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
						string pauseLevelStr = xml.@get("level");
						int levelInt = default(int);
						#line 165 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
						if (string.Equals(pauseLevelStr, default(string))) {
							#line 165 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							levelInt = 0;
						}
						 else {
							#line 165 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
							levelInt = global::Std.parseInt(pauseLevelStr).@value;
						}
						
						#line 166 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
						type = global::nx3.ENoteType.Pause(levelInt);
						#line 163 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
						break;
					}
					
					
					case "lyric":
					{
						#line 170 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
						string text = xml.@get("text");
						string offsetStr = xml.@get("offset");
						global::nx3.EPosition offset = ((global::nx3.EPosition) (global::cx.EnumTools.createFromString<object>(typeof(global::nx3.EPosition), offsetStr)) );
						string continuationStr = xml.@get("continuation");
						global::nx3.ELyricContinuation continuation = global::cx.EnumTools.createFromString<global::nx3.ELyricContinuation>(typeof(global::nx3.ELyricContinuation), continuationStr);
						#line 179 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
						type = global::nx3.ENoteType.Lyric(text, offset, continuation, default(object));
						#line 169 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
						break;
					}
					
					
				}
				
				#line 187 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
				string valStr = xml.@get("val");
				global::nx3.ENoteVal @value = global::nx3.ENoteValTools.fromValString(valStr);
				#line 194 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
				global::nx3.EDirectionUAD direction = global::cx.EnumTools.createFromString<global::nx3.EDirectionUAD>(typeof(global::nx3.EDirectionUAD), xml.@get("direction"));
				#line 196 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
				return new global::nx3.NNote(((global::nx3.ENoteType) (type) ), ((global::Array<object>) (default(global::Array<object>)) ), ((global::nx3.ENoteVal) (@value) ), ((global::nx3.EDirectionUAD) (direction) ));
			}
			#line default
		}
		
		
		public static   bool test(global::nx3.NNote item){
			unchecked {
				#line 201 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
				string str = global::nx3.xml.NoteXML.toXml(item).toString();
				global::nx3.NNote item2 = global::nx3.xml.NoteXML.fromXmlStr(str);
				string str2 = global::nx3.xml.NoteXML.toXml(item2).toString();
				global::haxe.Log.trace.__hx_invoke2_o(default(double), str, default(double), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"test", "nx3.xml.NoteXML", "NoteXML.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (204) )})));
				global::haxe.Log.trace.__hx_invoke2_o(default(double), str2, default(double), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"test", "nx3.xml.NoteXML", "NoteXML.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (205) )})));
				return string.Equals(str, str2);
			}
			#line default
		}
		
		
		public static   global::nx3.NNote clone(global::nx3.NNote nnote){
			unchecked {
				#line 211 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
				return global::nx3.xml.NoteXML.fromXmlStr(global::nx3.xml.NoteXML.toXml(nnote).toString());
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
				return new global::nx3.xml.NoteXML(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\xml\\NoteXML.hx"
				return new global::nx3.xml.NoteXML();
			}
			#line default
		}
		
		
	}
}


