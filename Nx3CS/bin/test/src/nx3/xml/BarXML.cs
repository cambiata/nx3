
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.xml{
	public  class BarXML : global::haxe.lang.HxObject {
		static BarXML() {
			#line 18 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
			global::nx3.xml.BarXML.XBAR = "bar";
			global::nx3.xml.BarXML.XBAR_TYPE = "type";
			global::nx3.xml.BarXML.XBAR_TIME = "time";
			global::nx3.xml.BarXML.XBAR_TIMEDISPLAY = "timedisplay";
		}
		public    BarXML(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    BarXML(){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				global::nx3.xml.BarXML.__hx_ctor_nx3_xml_BarXML(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_xml_BarXML(global::nx3.xml.BarXML __temp_me136){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static  string XBAR;
		
		public static  string XBAR_TYPE;
		
		public static  string XBAR_TIME;
		
		public static  string XBAR_TIMEDISPLAY;
		
		public static   global::Xml toXml(global::nx3.NBar bar){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				global::Xml xml = global::Xml.createElement("bar");
				#line 30 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				{
					#line 30 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
					int _g = 0;
					#line 30 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
					global::Array<object> _g1 = bar.nparts;
					#line 30 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
					while (( _g < _g1.length )){
						#line 30 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
						global::nx3.NPart part = ((global::nx3.NPart) (_g1[_g]) );
						#line 30 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
						 ++ _g;
						#line 32 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
						global::Xml partXml = global::nx3.xml.PartXML.toXml(part);
						xml.addChild(partXml);
					}
					
				}
				
				#line 37 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				{
					#line 37 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
					global::nx3.EBarType _g2 = bar.type;
					#line 37 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
					switch (global::Type.enumIndex(_g2)){
						case 0:
						{
							#line 39 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
							{
							}
							
							#line 39 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
							break;
						}
						
						
						default:
						{
							#line 42 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
							xml.@set("type", global::Std.@string(bar.type));
							#line 42 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
							break;
						}
						
					}
					
				}
				
				#line 46 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				if (( bar.time != default(global::nx3.ETime) )) {
					#line 47 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
					global::nx3.ETime _g3 = bar.time;
					#line 47 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
					switch (global::Type.enumIndex(_g3)){
						case 5:
						{
							#line 49 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
							{
							}
							
							#line 49 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
							break;
						}
						
						
						default:
						{
							#line 52 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
							xml.@set("time", global::Std.@string(global::nx3.ETimeUtils.toString(bar.time)));
							#line 52 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
							break;
						}
						
					}
					
				}
				
				#line 56 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				{
					#line 56 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
					global::nx3.EDisplayALN _g4 = bar.timeDisplay;
					#line 56 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
					switch (global::Type.enumIndex(_g4)){
						case 1:
						{
							#line 58 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
							{
							}
							
							#line 58 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
							break;
						}
						
						
						default:
						{
							#line 61 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
							xml.@set("timedisplay", global::Std.@string(bar.timeDisplay));
							#line 61 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
							break;
						}
						
					}
					
				}
				
				#line 64 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				return xml;
			}
			#line default
		}
		
		
		public static   global::nx3.NBar fromXmlStr(string xmlStr){
			unchecked {
				#line 69 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				global::Xml xml = global::Xml.parse(xmlStr).firstElement();
				#line 72 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				global::Array<object> parts = new global::Array<object>(new object[]{});
				{
					#line 73 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
					object __temp_iterator164 = xml.elements();
					#line 73 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
					while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator164, "hasNext", 407283053, default(global::Array)))){
						#line 73 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
						global::Xml p = ((global::Xml) (global::haxe.lang.Runtime.callField(__temp_iterator164, "next", 1224901875, default(global::Array))) );
						#line 75 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
						global::nx3.NPart part = global::nx3.xml.PartXML.fromXmlStr(p.toString());
						parts.push(part);
					}
					
				}
				
				#line 80 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				string typeStr = xml.@get("type");
				global::nx3.EBarType type = default(global::nx3.EBarType);
				#line 81 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				if (string.Equals(typeStr, default(string))) {
					#line 81 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
					type = global::nx3.EBarType.Normal;
				}
				 else {
					#line 81 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
					type = global::cx.EnumTools.createFromString<global::nx3.EBarType>(typeof(global::nx3.EBarType), typeStr);
				}
				
				#line 84 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				global::nx3.ETime time = default(global::nx3.ETime);
				string timeStr = xml.@get("time");
				if ( ! (string.Equals(timeStr, default(string))) ) {
					#line 86 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
					time = global::nx3.ETimeUtils.fromString(timeStr);
				}
				
				#line 89 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				string timeDisplayStr = xml.@get("timedisplay");
				global::nx3.EDisplayALN timeDisplay = default(global::nx3.EDisplayALN);
				#line 90 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				if (string.Equals(timeDisplayStr, default(string))) {
					#line 90 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
					timeDisplay = global::nx3.EDisplayALN.Layout;
				}
				 else {
					#line 90 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
					timeDisplay = global::cx.EnumTools.createFromString<global::nx3.EDisplayALN>(typeof(global::nx3.EDisplayALN), timeDisplayStr);
				}
				
				#line 92 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				return new global::nx3.NBar(((global::Array<object>) (parts) ), ((global::nx3.EBarType) (type) ), ((global::nx3.ETime) (time) ), ((global::nx3.EDisplayALN) (timeDisplay) ), ((global::nx3.EAllotment) (default(global::nx3.EAllotment)) ), ((global::haxe.lang.Null<double>) (default(global::haxe.lang.Null<double>)) ));
			}
			#line default
		}
		
		
		public static   bool test(global::nx3.NBar item){
			unchecked {
				#line 97 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				string str = global::nx3.xml.BarXML.toXml(item).toString();
				global::nx3.NBar item2 = global::nx3.xml.BarXML.fromXmlStr(str);
				string str2 = global::nx3.xml.BarXML.toXml(item2).toString();
				global::haxe.Log.trace.__hx_invoke2_o(default(double), str, default(double), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"test", "nx3.xml.BarXML", "BarXML.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (100) )})));
				global::haxe.Log.trace.__hx_invoke2_o(default(double), str2, default(double), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"test", "nx3.xml.BarXML", "BarXML.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (101) )})));
				return string.Equals(str, str2);
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				return new global::nx3.xml.BarXML(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\xml\\BarXML.hx"
				return new global::nx3.xml.BarXML();
			}
			#line default
		}
		
		
	}
}


