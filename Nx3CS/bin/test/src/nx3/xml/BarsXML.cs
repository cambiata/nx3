
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.xml{
	public  class BarsXML : global::haxe.lang.HxObject {
		static BarsXML() {
			#line 15 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
			global::nx3.xml.BarsXML.XBARS = "bars";
		}
		public    BarsXML(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    BarsXML(){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
				global::nx3.xml.BarsXML.__hx_ctor_nx3_xml_BarsXML(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_xml_BarsXML(global::nx3.xml.BarsXML __temp_me147){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static  string XBARS;
		
		public static   global::Xml toXml(global::Array<object> bars){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
				global::Xml xml = global::Xml.createElement("bars");
				#line 21 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
				{
					#line 21 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
					int _g = 0;
					#line 21 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
					while (( _g < bars.length )){
						#line 21 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
						global::nx3.NBar bar = ((global::nx3.NBar) (bars[_g]) );
						#line 21 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
						 ++ _g;
						#line 23 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
						global::Xml barXml = global::nx3.xml.BarXML.toXml(bar);
						xml.addChild(barXml);
					}
					
				}
				
				#line 26 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
				return xml;
			}
			#line default
		}
		
		
		public static   global::Array<object> fromXmlStr(string xmlStr){
			unchecked {
				#line 31 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
				global::Xml xml = global::Xml.parse(xmlStr).firstElement();
				#line 33 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
				global::Array<object> bars = new global::Array<object>(new object[]{});
				#line 35 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
				{
					#line 35 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
					object __temp_iterator175 = xml.elements();
					#line 35 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
					while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator175, "hasNext", 407283053, default(global::Array)))){
						#line 35 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
						global::Xml b = ((global::Xml) (global::haxe.lang.Runtime.callField(__temp_iterator175, "next", 1224901875, default(global::Array))) );
						#line 37 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
						global::nx3.NBar bar = global::nx3.xml.BarXML.fromXmlStr(b.toString());
						bars.push(bar);
					}
					
				}
				
				#line 41 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
				return bars;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
				return new global::nx3.xml.BarsXML(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\xml\\BarsXML.hx"
				return new global::nx3.xml.BarsXML();
			}
			#line default
		}
		
		
	}
}


