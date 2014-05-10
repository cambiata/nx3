
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.xml{
	public  class HeadXML : global::haxe.lang.HxObject {
		static HeadXML() {
			#line 63 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
			global::nx3.xml.HeadXML.XHEAD = "headx";
			global::nx3.xml.HeadXML.XHEAD_TYPE = "type";
			global::nx3.xml.HeadXML.XHEAD_LEVEL = "level";
			global::nx3.xml.HeadXML.XHEAD_SIGN = "sign";
			global::nx3.xml.HeadXML.XHEAD_TIE = "tie";
			global::nx3.xml.HeadXML.XHEAD_TIETO = "tieto";
		}
		public    HeadXML(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    HeadXML(){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				global::nx3.xml.HeadXML.__hx_ctor_nx3_xml_HeadXML(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_xml_HeadXML(global::nx3.xml.HeadXML __temp_me148){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static   global::Xml toXml(global::nx3.NHead head){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				global::Xml xml = global::Xml.createElement(global::nx3.xml.HeadXML.XHEAD);
				#line 21 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				{
					#line 21 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
					global::nx3.EHeadType _g = head.type;
					#line 21 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
					switch (global::Type.enumIndex(_g)){
						case 2:case 1:
						{
							#line 24 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							xml.@set(global::nx3.xml.HeadXML.XHEAD_TYPE, global::Std.@string(head.type));
							#line 24 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							break;
						}
						
						
						default:
						{
							#line 21 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							{
							}
							
							#line 21 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							break;
						}
						
					}
					
				}
				
				#line 29 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				xml.@set(global::nx3.xml.HeadXML.XHEAD_LEVEL, global::Std.@string(head.level));
				#line 32 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				if (( head.sign != global::nx3.ESign.None )) {
					#line 32 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
					xml.@set(global::nx3.xml.HeadXML.XHEAD_SIGN, global::Std.@string(head.sign));
				}
				
				#line 35 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				if (( head.tie != default(global::nx3.ETie) )) {
					#line 37 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
					global::nx3.ETie _g1 = head.tie;
					#line 37 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
					switch (global::Type.enumIndex(_g1)){
						case 0:
						{
							#line 37 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							int level = ((int) (global::haxe.lang.Runtime.toInt(_g1.@params[1])) );
							#line 37 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							global::nx3.EDirectionUAD direction = ((global::nx3.EDirectionUAD) (_g1.@params[0]) );
							#line 40 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							xml.@set(global::nx3.xml.HeadXML.XHEAD_TIE, global::Std.@string(head.tie));
							#line 39 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							break;
						}
						
						
						case 1:
						{
							#line 37 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							int levelRight = ((int) (global::haxe.lang.Runtime.toInt(_g1.@params[2])) );
							#line 37 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							int levelLeft = ((int) (global::haxe.lang.Runtime.toInt(_g1.@params[1])) );
							#line 37 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							global::nx3.EDirectionUAD direction1 = ((global::nx3.EDirectionUAD) (_g1.@params[0]) );
							#line 43 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							xml.@set(global::nx3.xml.HeadXML.XHEAD_TIE, global::Std.@string(head.tie));
							#line 42 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							break;
						}
						
						
					}
					
				}
				
				#line 48 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				if (( head.tieTo != default(global::nx3.ETie) )) {
					#line 50 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
					global::nx3.ETie _g2 = head.tieTo;
					#line 50 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
					switch (global::Type.enumIndex(_g2)){
						case 0:
						{
							#line 50 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							int level1 = ((int) (global::haxe.lang.Runtime.toInt(_g2.@params[1])) );
							#line 50 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							global::nx3.EDirectionUAD direction2 = ((global::nx3.EDirectionUAD) (_g2.@params[0]) );
							#line 53 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							xml.@set(global::nx3.xml.HeadXML.XHEAD_TIETO, global::Std.@string(head.tieTo));
							#line 52 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							break;
						}
						
						
						case 1:
						{
							#line 50 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							int levelRight1 = ((int) (global::haxe.lang.Runtime.toInt(_g2.@params[2])) );
							#line 50 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							int levelLeft1 = ((int) (global::haxe.lang.Runtime.toInt(_g2.@params[1])) );
							#line 50 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							global::nx3.EDirectionUAD direction3 = ((global::nx3.EDirectionUAD) (_g2.@params[0]) );
							#line 55 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							xml.@set(global::nx3.xml.HeadXML.XHEAD_TIETO, global::Std.@string(head.tieTo));
							#line 54 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
							break;
						}
						
						
					}
					
				}
				
				#line 60 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				return xml;
			}
			#line default
		}
		
		
		public static  string XHEAD;
		
		public static  string XHEAD_TYPE;
		
		public static  string XHEAD_LEVEL;
		
		public static  string XHEAD_SIGN;
		
		public static  string XHEAD_TIE;
		
		public static  string XHEAD_TIETO;
		
		public static   global::nx3.NHead fromXmlStr(string xmlStr){
			unchecked {
				#line 73 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				global::Xml xml = global::Xml.parse(xmlStr).firstElement();
				#line 76 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				string typeStr = xml.@get(global::nx3.xml.HeadXML.XHEAD_TYPE);
				global::nx3.EHeadType type = global::cx.EnumTools.createFromString<global::nx3.EHeadType>(typeof(global::nx3.EHeadType), typeStr);
				#line 80 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				int level = global::Std.parseInt(xml.@get(global::nx3.xml.HeadXML.XHEAD_LEVEL)).@value;
				#line 83 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				global::nx3.ESign sign = global::cx.EnumTools.createFromString<global::nx3.ESign>(typeof(global::nx3.ESign), xml.@get(global::nx3.xml.HeadXML.XHEAD_SIGN));
				#line 88 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				global::nx3.ETie tie = default(global::nx3.ETie);
				if ( ! (string.Equals(xml.@get(global::nx3.xml.HeadXML.XHEAD_TIE), default(string))) ) {
					#line 89 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
					tie = global::nx3.ETie.Tie(global::nx3.EDirectionUAD.Auto, 0);
				}
				
				#line 93 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				global::nx3.ETie tieTo = ((global::nx3.ETie) (global::cx.EnumTools.createFromString<object>(typeof(global::nx3.ETie), xml.@get(global::nx3.xml.HeadXML.XHEAD_TIETO))) );
				#line 95 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				return new global::nx3.NHead(((global::nx3.EHeadType) (type) ), new global::haxe.lang.Null<int>(level, true), ((global::nx3.ESign) (sign) ), ((global::nx3.ETie) (tie) ), ((global::nx3.ETie) (tieTo) ));
			}
			#line default
		}
		
		
		public static   bool test(global::nx3.NHead item){
			unchecked {
				#line 135 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				string str = global::nx3.xml.HeadXML.toXml(item).toString();
				global::nx3.NHead item2 = global::nx3.xml.HeadXML.fromXmlStr(str);
				string str2 = global::nx3.xml.HeadXML.toXml(item2).toString();
				global::haxe.Log.trace.__hx_invoke2_o(default(double), str, default(double), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"test", "nx3.xml.HeadXML", "HeadXML.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (138) )})));
				global::haxe.Log.trace.__hx_invoke2_o(default(double), str2, default(double), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"test", "nx3.xml.HeadXML", "HeadXML.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (139) )})));
				return string.Equals(str, str2);
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				return new global::nx3.xml.HeadXML(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\xml\\HeadXML.hx"
				return new global::nx3.xml.HeadXML();
			}
			#line default
		}
		
		
	}
}


