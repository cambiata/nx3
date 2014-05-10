
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.xml{
	public  class PartXML : global::haxe.lang.HxObject {
		static PartXML() {
			#line 19 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
			global::nx3.xml.PartXML.XPART = "part";
			global::nx3.xml.PartXML.XPART_TYPE = "type";
			global::nx3.xml.PartXML.XPART_CLEF = "clef";
			global::nx3.xml.PartXML.XPART_CLEFDISPLAY = "clefdisplay";
			global::nx3.xml.PartXML.XPART_KEY = "key";
			global::nx3.xml.PartXML.XPART_KEYDISPLAY = "keydisplay";
		}
		public    PartXML(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PartXML(){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				global::nx3.xml.PartXML.__hx_ctor_nx3_xml_PartXML(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_xml_PartXML(global::nx3.xml.PartXML __temp_me150){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static  string XPART;
		
		public static  string XPART_TYPE;
		
		public static  string XPART_CLEF;
		
		public static  string XPART_CLEFDISPLAY;
		
		public static  string XPART_KEY;
		
		public static  string XPART_KEYDISPLAY;
		
		public static   global::Xml toXml(global::nx3.NPart part){
			unchecked {
				#line 28 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				global::Xml xml = global::Xml.createElement("part");
				#line 31 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				{
					#line 31 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					int _g = 0;
					#line 31 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					global::Array<object> _g1 = part.nvoices;
					#line 31 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					while (( _g < _g1.length )){
						#line 31 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
						global::nx3.NVoice voice = ((global::nx3.NVoice) (_g1[_g]) );
						#line 31 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
						 ++ _g;
						#line 33 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
						global::Xml voiceXml = global::nx3.xml.VoiceXML.toXml(voice);
						xml.addChild(voiceXml);
					}
					
				}
				
				#line 38 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				{
					#line 38 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					global::nx3.EPartType _g2 = part.type;
					#line 38 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					switch (global::Type.enumIndex(_g2)){
						case 0:
						{
							#line 40 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							{
							}
							
							#line 40 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							break;
						}
						
						
						default:
						{
							#line 43 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							xml.@set("type", global::Std.@string(part.type));
							#line 43 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							break;
						}
						
					}
					
				}
				
				#line 49 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				if (( part.clef != default(global::nx3.EClef) )) {
					#line 50 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					global::nx3.EClef _g3 = part.clef;
					#line 50 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					switch (global::Type.enumIndex(_g3)){
						case 0:
						{
							#line 52 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							{
							}
							
							#line 52 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							break;
						}
						
						
						default:
						{
							#line 55 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							xml.@set("clef", global::Std.@string(part.clef));
							#line 55 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							break;
						}
						
					}
					
				}
				
				#line 58 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				if (( part.key != default(global::nx3.EKey) )) {
					#line 59 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					global::nx3.EKey _g4 = part.key;
					#line 59 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					switch (global::Type.enumIndex(_g4)){
						case 6:
						{
							#line 61 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							{
							}
							
							#line 61 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							break;
						}
						
						
						default:
						{
							#line 64 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							xml.@set("key", global::Std.@string(part.key));
							#line 64 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							break;
						}
						
					}
					
				}
				
				#line 69 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				{
					#line 69 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					global::nx3.EDisplayALN _g5 = part.clefDisplay;
					#line 69 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					switch (global::Type.enumIndex(_g5)){
						case 1:
						{
							#line 71 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							{
							}
							
							#line 71 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							break;
						}
						
						
						default:
						{
							#line 74 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							xml.@set("clefdisplay", global::Std.@string(part.clefDisplay));
							#line 74 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							break;
						}
						
					}
					
				}
				
				#line 91 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				{
					#line 91 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					global::nx3.EDisplayALN _g6 = part.keyDisplay;
					#line 91 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					switch (global::Type.enumIndex(_g6)){
						case 1:
						{
							#line 93 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							{
							}
							
							#line 93 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							break;
						}
						
						
						default:
						{
							#line 96 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							xml.@set("keydisplay", global::Std.@string(part.keyDisplay));
							#line 96 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
							break;
						}
						
					}
					
				}
				
				#line 99 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				return xml;
			}
			#line default
		}
		
		
		public static   global::nx3.NPart fromXmlStr(string xmlStr){
			unchecked {
				#line 104 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				global::Xml xml = global::Xml.parse(xmlStr).firstElement();
				#line 106 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				global::Array<object> voices = new global::Array<object>(new object[]{});
				{
					#line 107 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					object __temp_iterator177 = xml.elements();
					#line 107 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator177, "hasNext", 407283053, default(global::Array)))){
						#line 107 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
						global::Xml v = ((global::Xml) (global::haxe.lang.Runtime.callField(__temp_iterator177, "next", 1224901875, default(global::Array))) );
						#line 109 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
						global::nx3.NVoice voice = global::nx3.xml.VoiceXML.fromXmlStr(v.toString());
						voices.push(voice);
					}
					
				}
				
				#line 114 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				string typeStr = xml.@get("type");
				global::nx3.EPartType type = global::cx.EnumTools.createFromString<global::nx3.EPartType>(typeof(global::nx3.EPartType), typeStr);
				#line 118 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				string str = xml.@get("clef");
				global::nx3.EClef clef = default(global::nx3.EClef);
				if ( ! (string.Equals(str, default(string))) ) {
					#line 120 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					clef = global::cx.EnumTools.createFromString<global::nx3.EClef>(typeof(global::nx3.EClef), str);
				}
				
				#line 123 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				string clefDisplayStr = xml.@get("clefdisplay");
				global::nx3.EDisplayALN clefDisplay = default(global::nx3.EDisplayALN);
				#line 124 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				if (string.Equals(clefDisplayStr, default(string))) {
					#line 124 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					clefDisplay = global::nx3.EDisplayALN.Layout;
				}
				 else {
					#line 124 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					clefDisplay = global::cx.EnumTools.createFromString<global::nx3.EDisplayALN>(typeof(global::nx3.EDisplayALN), clefDisplayStr);
				}
				
				#line 127 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				string str1 = xml.@get("key");
				global::nx3.EKey key = default(global::nx3.EKey);
				if ( ! (string.Equals(str1, default(string))) ) {
					#line 129 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					key = global::cx.EnumTools.createFromString<global::nx3.EKey>(typeof(global::nx3.EKey), str1);
				}
				
				#line 133 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				string keyDisplayStr = xml.@get("keydisplay");
				global::nx3.EDisplayALN keyDisplay = default(global::nx3.EDisplayALN);
				#line 134 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				if (string.Equals(keyDisplayStr, default(string))) {
					#line 134 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					keyDisplay = global::nx3.EDisplayALN.Layout;
				}
				 else {
					#line 134 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
					keyDisplay = global::cx.EnumTools.createFromString<global::nx3.EDisplayALN>(typeof(global::nx3.EDisplayALN), keyDisplayStr);
				}
				
				#line 136 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				return new global::nx3.NPart(((global::Array<object>) (voices) ), ((global::nx3.EPartType) (type) ), ((global::nx3.EClef) (clef) ), ((global::nx3.EDisplayALN) (clefDisplay) ), ((global::nx3.EKey) (key) ), ((global::nx3.EDisplayALN) (keyDisplay) ));
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				return new global::nx3.xml.PartXML(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\xml\\PartXML.hx"
				return new global::nx3.xml.PartXML();
			}
			#line default
		}
		
		
	}
}


