
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.test{
	public  class TestN : global::haxe.unit.TestCase {
		public    TestN(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    TestN() : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 30 "F:\\HaxeToolkit\\haxe\\std\\haxe\\unit\\TestCase.hx"
				global::nx3.test.TestN.__hx_ctor_nx3_test_TestN(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_test_TestN(global::nx3.test.TestN __temp_me213){
			unchecked {
				#line 30 "F:\\HaxeToolkit\\haxe\\std\\haxe\\unit\\TestCase.hx"
				global::haxe.unit.TestCase.__hx_ctor_haxe_unit_TestCase(__temp_me213);
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
				return new global::nx3.test.TestN(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
				return new global::nx3.test.TestN();
			}
			#line default
		}
		
		
		public virtual   void testHeadXml(){
			unchecked {
				#line 42 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
				global::nx3.NHead item1 = new global::nx3.NHead(((global::nx3.EHeadType) (default(global::nx3.EHeadType)) ), new global::haxe.lang.Null<int>(2, true), ((global::nx3.ESign) (global::nx3.ESign.Flat) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ));
				string xmlstr1 = global::nx3.xml.HeadXML.toXml(item1).toString();
				global::nx3.NHead item2 = global::nx3.xml.HeadXML.fromXmlStr(xmlstr1);
				string xmlstr2 = global::nx3.xml.HeadXML.toXml(item2).toString();
				#line 47 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
				this.assertEquals<object>(xmlstr1, xmlstr2, new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"testHeadXml", "nx3.test.TestN", "TestN.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (47) )})));
			}
			#line default
		}
		
		
		public virtual   void testNoteXml(){
			unchecked {
				#line 53 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
				global::nx3.NNote item1 = new global::nx3.NNote(((global::nx3.ENoteType) (default(global::nx3.ENoteType)) ), ((global::Array<object>) (new global::Array<object>(new object[]{new global::nx3.NHead(((global::nx3.EHeadType) (default(global::nx3.EHeadType)) ), new global::haxe.lang.Null<int>(-3, true), ((global::nx3.ESign) (default(global::nx3.ESign)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) )), new global::nx3.NHead(((global::nx3.EHeadType) (default(global::nx3.EHeadType)) ), new global::haxe.lang.Null<int>(-2, true), ((global::nx3.ESign) (global::nx3.ESign.Flat) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) )), new global::nx3.NHead(((global::nx3.EHeadType) (default(global::nx3.EHeadType)) ), new global::haxe.lang.Null<int>(4, true), ((global::nx3.ESign) (global::nx3.ESign.Natural) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) )), new global::nx3.NHead(((global::nx3.EHeadType) (default(global::nx3.EHeadType)) ), new global::haxe.lang.Null<int>(1, true), ((global::nx3.ESign) (default(global::nx3.ESign)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ))})) ), ((global::nx3.ENoteVal) (global::nx3.ENoteVal.Nv2dot) ), ((global::nx3.EDirectionUAD) (global::nx3.EDirectionUAD.Down) ));
				string xmlstr1 = global::nx3.xml.NoteXML.toXml(item1).toString();
				global::nx3.NNote item2 = global::nx3.xml.NoteXML.fromXmlStr(xmlstr1);
				string xmlstr2 = global::nx3.xml.NoteXML.toXml(item2).toString();
				#line 58 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
				this.assertEquals<object>(xmlstr1, xmlstr2, new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"testNoteXml", "nx3.test.TestN", "TestN.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (58) )})));
				#line 61 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
				this.assertEquals<object>(new global::Array<int>(new int[]{-3, -2, 1, 4}).toString(), item1.getHeadLevels().toString(), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"testNoteXml", "nx3.test.TestN", "TestN.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (61) )})));
			}
			#line default
		}
		
		
		public virtual   void testNotePause(){
			unchecked {
				#line 66 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
				global::nx3.NNote note = new global::nx3.NNote(((global::nx3.ENoteType) (global::nx3.ENoteType.Pause(1)) ), ((global::Array<object>) (default(global::Array<object>)) ), ((global::nx3.ENoteVal) (global::nx3.ENoteVal.Nv4) ), ((global::nx3.EDirectionUAD) (default(global::nx3.EDirectionUAD)) ));
				string xmlStr = global::nx3.xml.NoteXML.toXml(note).toString();
				global::nx3.NNote note2 = global::nx3.xml.NoteXML.fromXmlStr(xmlStr);
				string xmlStr2 = global::nx3.xml.NoteXML.toXml(note2).toString();
				this.assertEquals<object>(xmlStr, xmlStr2, new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"testNotePause", "nx3.test.TestN", "TestN.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (70) )})));
			}
			#line default
		}
		
		
		public virtual   void testNoteXml2(){
			unchecked {
				#line 75 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
				global::nx3.NNote item = new global::nx3.NNote(((global::nx3.ENoteType) (global::nx3.ENoteType.Pause(0)) ), ((global::Array<object>) (default(global::Array<object>)) ), ((global::nx3.ENoteVal) (global::nx3.ENoteVal.Nv4) ), ((global::nx3.EDirectionUAD) (default(global::nx3.EDirectionUAD)) ));
				this.assertEquals<int>(global::Type.enumIndex(item.type), 1, new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"testNoteXml2", "nx3.test.TestN", "TestN.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (76) )})));
				global::nx3.NNote item1 = new global::nx3.NNote(((global::nx3.ENoteType) (global::nx3.ENoteType.Lyric("Hello", default(global::nx3.EPosition), default(global::nx3.ELyricContinuation), default(object))) ), ((global::Array<object>) (default(global::Array<object>)) ), ((global::nx3.ENoteVal) (global::nx3.ENoteVal.Nv4) ), ((global::nx3.EDirectionUAD) (default(global::nx3.EDirectionUAD)) ));
				this.assertEquals<int>(global::Type.enumIndex(item1.type), 4, new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"testNoteXml2", "nx3.test.TestN", "TestN.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (78) )})));
			}
			#line default
		}
		
		
		public virtual   void testVoiceXml(){
			unchecked {
				#line 83 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
				global::nx3.NVoice nvoice = new global::nx3.NVoice(((global::Array<object>) (new global::Array<object>(new object[]{new global::nx3.QNote4(((global::haxe.lang.Null<bool>) (default(global::haxe.lang.Null<bool>)) ), new global::haxe.lang.Null<int>(1, true), ((global::Array<int>) (default(global::Array<int>)) ), ((string) (default(string)) )), new global::nx3.NNote(((global::nx3.ENoteType) (global::nx3.ENoteType.Pause(1)) ), ((global::Array<object>) (default(global::Array<object>)) ), ((global::nx3.ENoteVal) (global::nx3.ENoteVal.Nv4) ), ((global::nx3.EDirectionUAD) (default(global::nx3.EDirectionUAD)) ))})) ), ((global::nx3.EVoiceType) (default(global::nx3.EVoiceType)) ), ((global::nx3.EDirectionUAD) (default(global::nx3.EDirectionUAD)) ));
				#line 89 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
				string xmlStr = global::nx3.xml.VoiceXML.toXml(nvoice).toString();
				#line 92 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
				global::nx3.NVoice nvoice2 = global::nx3.xml.VoiceXML.fromXmlStr(xmlStr);
				string xmlStr2 = global::nx3.xml.VoiceXML.toXml(nvoice2).toString();
				this.assertEquals<object>(xmlStr, xmlStr2, new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"testVoiceXml", "nx3.test.TestN", "TestN.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (94) )})));
			}
			#line default
		}
		
		
		public virtual   void testBarXml(){
			unchecked {
				#line 100 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
				global::nx3.VBar vbar = global::nx3.test.TestItems.vbar1();
				global::nx3.NBar nbar = vbar.nbar;
				string xmlStr = global::nx3.xml.BarXML.toXml(nbar).toString();
				#line 104 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
				global::nx3.NBar nbar2 = global::nx3.xml.BarXML.fromXmlStr(xmlStr);
				string xmlStr2 = global::nx3.xml.BarXML.toXml(nbar2).toString();
				this.assertEquals<object>(xmlStr, xmlStr2, new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"testBarXml", "nx3.test.TestN", "TestN.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (106) )})));
				#line 108 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
				global::nx3.VBar vbar1 = global::nx3.test.TestItems.vbarSigns();
				global::nx3.NBar nbar1 = vbar1.nbar;
				string xmlStr1 = global::nx3.xml.BarXML.toXml(nbar1).toString();
				global::nx3.NBar nbar21 = global::nx3.xml.BarXML.fromXmlStr(xmlStr1);
				string xmlStr21 = global::nx3.xml.BarXML.toXml(nbar21).toString();
				this.assertEquals<object>(xmlStr1, xmlStr21, new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"testBarXml", "nx3.test.TestN", "TestN.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (113) )})));
			}
			#line default
		}
		
		
		public virtual   void xmlStrExport(string filename, string xmlStr){
			unchecked {
				#line 118 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
				switch (hash){
					case 479938606:
					{
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("xmlStrExport") ), ((int) (479938606) ))) );
					}
					
					
					case 1835622326:
					{
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("testBarXml") ), ((int) (1835622326) ))) );
					}
					
					
					case 390087095:
					{
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("testVoiceXml") ), ((int) (390087095) ))) );
					}
					
					
					case 1373567487:
					{
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("testNoteXml2") ), ((int) (1373567487) ))) );
					}
					
					
					case 773824242:
					{
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("testNotePause") ), ((int) (773824242) ))) );
					}
					
					
					case 169869011:
					{
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("testNoteXml") ), ((int) (169869011) ))) );
					}
					
					
					case 533159525:
					{
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("testHeadXml") ), ((int) (533159525) ))) );
					}
					
					
					default:
					{
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
				switch (hash){
					case 479938606:
					{
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						this.xmlStrExport(global::haxe.lang.Runtime.toString(dynargs[0]), global::haxe.lang.Runtime.toString(dynargs[1]));
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						break;
					}
					
					
					case 1835622326:
					{
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						this.testBarXml();
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						break;
					}
					
					
					case 390087095:
					{
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						this.testVoiceXml();
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						break;
					}
					
					
					case 1373567487:
					{
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						this.testNoteXml2();
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						break;
					}
					
					
					case 773824242:
					{
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						this.testNotePause();
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						break;
					}
					
					
					case 169869011:
					{
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						this.testNoteXml();
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						break;
					}
					
					
					case 533159525:
					{
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						this.testHeadXml();
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						break;
					}
					
					
					default:
					{
						#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 37 "F:\\nx3\\src\\nx3\\test\\TestN.hx"
				return default(object);
			}
			#line default
		}
		
		
	}
}


