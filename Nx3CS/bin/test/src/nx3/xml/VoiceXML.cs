
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.xml{
	public  class VoiceXML : global::haxe.lang.HxObject {
		static VoiceXML() {
			#line 17 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
			global::nx3.xml.VoiceXML.XVOICE = "voice";
			global::nx3.xml.VoiceXML.XVOICE_TYPE = "type";
			global::nx3.xml.VoiceXML.XVOICE_BARPAUSE = "barpause";
			global::nx3.xml.VoiceXML.XVOICE_DIRECTION = "direction";
		}
		public    VoiceXML(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VoiceXML(){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
				global::nx3.xml.VoiceXML.__hx_ctor_nx3_xml_VoiceXML(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_xml_VoiceXML(global::nx3.xml.VoiceXML __temp_me151){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static  string XVOICE;
		
		public static  string XVOICE_TYPE;
		
		public static  string XVOICE_BARPAUSE;
		
		public static  string XVOICE_DIRECTION;
		
		public static   global::Xml toXml(global::nx3.NVoice voice){
			unchecked {
				#line 24 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
				global::Xml xml = global::Xml.createElement("voice");
				#line 27 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
				{
					#line 27 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
					global::nx3.EVoiceType _g = voice.type;
					#line 27 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
					switch (global::Type.enumIndex(_g)){
						case 1:
						{
							#line 30 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
							xml.@set("type", global::Std.@string(voice.type));
							#line 30 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
							break;
						}
						
						
						default:
						{
							#line 27 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
							{
							}
							
							#line 27 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
							break;
						}
						
					}
					
				}
				
				#line 34 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
				if (( voice.direction != global::nx3.EDirectionUAD.Auto )) {
					#line 34 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
					xml.@set("direction", global::Std.@string(voice.direction));
				}
				
				#line 36 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
				if (( voice.nnotes != default(global::Array<object>) )) {
					#line 38 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
					int _g1 = 0;
					#line 38 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
					global::Array<object> _g11 = voice.nnotes;
					#line 38 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
					while (( _g1 < _g11.length )){
						#line 38 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
						global::nx3.NNote note = ((global::nx3.NNote) (_g11[_g1]) );
						#line 38 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
						 ++ _g1;
						global::Xml noteXml = global::nx3.xml.NoteXML.toXml(note);
						xml.addChild(noteXml);
					}
					
				}
				
				#line 44 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
				return xml;
			}
			#line default
		}
		
		
		public static   global::nx3.NVoice fromXmlStr(string xmlStr){
			unchecked {
				#line 49 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
				global::Xml xml = global::Xml.parse(xmlStr).firstElement();
				#line 52 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
				string typeStr = xml.@get("type");
				global::nx3.EVoiceType type = global::cx.EnumTools.createFromString<global::nx3.EVoiceType>(typeof(global::nx3.EVoiceType), typeStr);
				#line 55 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
				string directionStr = xml.@get("direction");
				global::nx3.EDirectionUAD direction = default(global::nx3.EDirectionUAD);
				if (string.Equals(directionStr, default(string))) {
					#line 57 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
					direction = global::nx3.EDirectionUAD.Auto;
				}
				 else {
					#line 57 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
					direction = global::cx.EnumTools.createFromString<global::nx3.EDirectionUAD>(typeof(global::nx3.EDirectionUAD), directionStr);
				}
				
				#line 60 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
				global::Array<object> notes = new global::Array<object>(new object[]{});
				#line 62 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
				{
					#line 62 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
					object __temp_iterator178 = xml.elements();
					#line 62 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
					while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator178, "hasNext", 407283053, default(global::Array)))){
						#line 62 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
						global::Xml n = ((global::Xml) (global::haxe.lang.Runtime.callField(__temp_iterator178, "next", 1224901875, default(global::Array))) );
						#line 64 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
						global::nx3.NNote note = global::nx3.xml.NoteXML.fromXmlStr(n.toString());
						notes.push(note);
					}
					
				}
				
				#line 68 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
				return new global::nx3.NVoice(((global::Array<object>) (notes) ), ((global::nx3.EVoiceType) (type) ), ((global::nx3.EDirectionUAD) (direction) ));
			}
			#line default
		}
		
		
		public static   bool test(global::nx3.NVoice item){
			unchecked {
				#line 73 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
				string str = global::nx3.xml.VoiceXML.toXml(item).toString();
				global::nx3.NVoice item2 = global::nx3.xml.VoiceXML.fromXmlStr(str);
				string str2 = global::nx3.xml.VoiceXML.toXml(item2).toString();
				global::haxe.Log.trace.__hx_invoke2_o(default(double), str, default(double), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"test", "nx3.xml.VoiceXML", "VoiceXML.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (76) )})));
				global::haxe.Log.trace.__hx_invoke2_o(default(double), str2, default(double), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"test", "nx3.xml.VoiceXML", "VoiceXML.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (77) )})));
				return string.Equals(str, str2);
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
				return new global::nx3.xml.VoiceXML(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\xml\\VoiceXML.hx"
				return new global::nx3.xml.VoiceXML();
			}
			#line default
		}
		
		
	}
}


