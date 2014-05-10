
namespace _Xml{
	public enum RealXmlType{
		Element, PCData, CData, Comment, DocType, ProcessingInstruction, Document
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
public  class Xml : global::haxe.lang.HxObject {
	static Xml() {
		#line 335 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
		{
			#line 336 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			global::Xml.Element = ((global::_Xml.RealXmlType) (((object) (global::_Xml.RealXmlType.Element) )) );
			global::Xml.PCData = ((global::_Xml.RealXmlType) (((object) (global::_Xml.RealXmlType.PCData) )) );
			global::Xml.CData = ((global::_Xml.RealXmlType) (((object) (global::_Xml.RealXmlType.CData) )) );
			global::Xml.Comment = ((global::_Xml.RealXmlType) (((object) (global::_Xml.RealXmlType.Comment) )) );
			global::Xml.DocType = ((global::_Xml.RealXmlType) (((object) (global::_Xml.RealXmlType.DocType) )) );
			global::Xml.ProcessingInstruction = ((global::_Xml.RealXmlType) (((object) (global::_Xml.RealXmlType.ProcessingInstruction) )) );
			global::Xml.Document = ((global::_Xml.RealXmlType) (((object) (global::_Xml.RealXmlType.Document) )) );
		}
		
	}
	public    Xml(global::haxe.lang.EmptyObject empty){
		unchecked {
			#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			{
			}
			
		}
		#line default
	}
	
	
	public    Xml(){
		unchecked {
			#line 61 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			global::Xml.__hx_ctor__Xml(this);
		}
		#line default
	}
	
	
	public static   void __hx_ctor__Xml(global::Xml __temp_me12){
		unchecked {
			#line 61 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			{
			}
			
		}
		#line default
	}
	
	
	public static  global::_Xml.RealXmlType Element;
	
	public static  global::_Xml.RealXmlType PCData;
	
	public static  global::_Xml.RealXmlType CData;
	
	public static  global::_Xml.RealXmlType Comment;
	
	public static  global::_Xml.RealXmlType DocType;
	
	public static  global::_Xml.RealXmlType ProcessingInstruction;
	
	public static  global::_Xml.RealXmlType Document;
	
	public static   global::Xml parse(string str){
		unchecked {
			#line 58 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			return global::haxe.xml.Parser.parse(str);
		}
		#line default
	}
	
	
	public static   global::Xml createElement(string name){
		unchecked {
			#line 65 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			global::Xml r = new global::Xml();
			r.nodeType = global::Xml.Element;
			r._children = new global::Array<object>();
			r._attributes = new global::haxe.ds.StringMap<object>();
			r.set_nodeName(name);
			return r;
		}
		#line default
	}
	
	
	public static   global::Xml createPCData(string data){
		unchecked {
			#line 74 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			global::Xml r = new global::Xml();
			r.nodeType = global::Xml.PCData;
			r.set_nodeValue(data);
			return r;
		}
		#line default
	}
	
	
	public static   global::Xml createCData(string data){
		unchecked {
			#line 81 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			global::Xml r = new global::Xml();
			r.nodeType = global::Xml.CData;
			r.set_nodeValue(data);
			return r;
		}
		#line default
	}
	
	
	public static   global::Xml createComment(string data){
		unchecked {
			#line 88 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			global::Xml r = new global::Xml();
			r.nodeType = global::Xml.Comment;
			r.set_nodeValue(data);
			return r;
		}
		#line default
	}
	
	
	public static   global::Xml createDocType(string data){
		unchecked {
			#line 95 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			global::Xml r = new global::Xml();
			r.nodeType = global::Xml.DocType;
			r.set_nodeValue(data);
			return r;
		}
		#line default
	}
	
	
	public static   global::Xml createProcessingInstruction(string data){
		unchecked {
			#line 102 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			global::Xml r = new global::Xml();
			r.nodeType = global::Xml.ProcessingInstruction;
			r.set_nodeValue(data);
			return r;
		}
		#line default
	}
	
	
	public static   global::Xml createDocument(){
		unchecked {
			#line 109 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			global::Xml r = new global::Xml();
			r.nodeType = global::Xml.Document;
			r._children = new global::Array<object>();
			return r;
		}
		#line default
	}
	
	
	public static  new object __hx_createEmpty(){
		unchecked {
			#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			return new global::Xml(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
		}
		#line default
	}
	
	
	public static  new object __hx_create(global::Array arr){
		unchecked {
			#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			return new global::Xml();
		}
		#line default
	}
	
	
	public  global::_Xml.RealXmlType nodeType;
	
	public  string _nodeName;
	
	public  string _nodeValue;
	
	public  global::haxe.ds.StringMap<object> _attributes;
	
	public  global::Array<object> _children;
	
	public  global::Xml _parent;
	
	public virtual   string get_nodeName(){
		unchecked {
			#line 116 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			if (( this.nodeType != global::Xml.Element )) {
				#line 117 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				throw global::haxe.lang.HaxeException.wrap("bad nodeType");
			}
			
			#line 118 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			return this._nodeName;
		}
		#line default
	}
	
	
	public virtual   string set_nodeName(string n){
		unchecked {
			#line 122 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			if (( this.nodeType != global::Xml.Element )) {
				#line 123 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				throw global::haxe.lang.HaxeException.wrap("bad nodeType");
			}
			
			#line 124 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			return this._nodeName = n;
		}
		#line default
	}
	
	
	public virtual   string set_nodeValue(string v){
		unchecked {
			#line 134 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			if (( ( this.nodeType == global::Xml.Element ) || ( this.nodeType == global::Xml.Document ) )) {
				#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				throw global::haxe.lang.HaxeException.wrap("bad nodeType");
			}
			
			#line 136 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			return this._nodeValue = v;
		}
		#line default
	}
	
	
	public virtual   string @get(string att){
		unchecked {
			#line 144 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			if (( this.nodeType != global::Xml.Element )) {
				#line 145 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				throw global::haxe.lang.HaxeException.wrap("bad nodeType");
			}
			
			#line 146 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			return global::haxe.lang.Runtime.toString(this._attributes.@get(((string) (att) )).@value);
		}
		#line default
	}
	
	
	public virtual   void @set(string att, string @value){
		unchecked {
			#line 150 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			if (( this.nodeType != global::Xml.Element )) {
				#line 151 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				throw global::haxe.lang.HaxeException.wrap("bad nodeType");
			}
			
			#line 152 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			this._attributes.@set(att, @value);
		}
		#line default
	}
	
	
	public virtual   bool exists(string att){
		unchecked {
			#line 162 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			if (( this.nodeType != global::Xml.Element )) {
				#line 163 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				throw global::haxe.lang.HaxeException.wrap("bad nodeType");
			}
			
			#line 164 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			return this._attributes.exists(att);
		}
		#line default
	}
	
	
	public virtual   object iterator(){
		unchecked {
			#line 174 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			if (( this._children == default(global::Array<object>) )) {
				#line 174 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				throw global::haxe.lang.HaxeException.wrap("bad nodetype");
			}
			
			#line 175 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			global::Array<int> cur = new global::Array<int>(new int[]{0});
			global::Array<object> x = new global::Array<object>(new object[]{this._children});
			{
				#line 178 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				global::haxe.lang.Function __temp_odecl179 = new global::Xml_iterator_178__Fun(((global::Array<int>) (cur) ), ((global::Array<object>) (x) ));
				#line 181 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				global::haxe.lang.Function __temp_odecl180 = new global::Xml_iterator_181__Fun(((global::Array<int>) (cur) ), ((global::Array<object>) (x) ));
				#line 177 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				return new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{407283053, 1224901875}), new global::Array<object>(new object[]{__temp_odecl179, __temp_odecl180}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{}));
			}
			
		}
		#line default
	}
	
	
	public virtual   object elements(){
		unchecked {
			#line 188 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			if (( this._children == default(global::Array<object>) )) {
				#line 188 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				throw global::haxe.lang.HaxeException.wrap("bad nodetype");
			}
			
			#line 189 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			global::Array<int> cur = new global::Array<int>(new int[]{0});
			global::Array<object> x = new global::Array<object>(new object[]{this._children});
			{
				#line 192 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				global::haxe.lang.Function __temp_odecl181 = new global::Xml_elements_192__Fun(((global::Array<int>) (cur) ), ((global::Array<object>) (x) ));
				#line 203 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				global::haxe.lang.Function __temp_odecl182 = new global::Xml_elements_203__Fun(((global::Array<int>) (cur) ), ((global::Array<object>) (x) ));
				#line 191 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				return new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{407283053, 1224901875}), new global::Array<object>(new object[]{__temp_odecl181, __temp_odecl182}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{}));
			}
			
		}
		#line default
	}
	
	
	public virtual   object elementsNamed(string name){
		unchecked {
			#line 219 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			global::Array<object> name1 = new global::Array<object>(new object[]{name});
			if (( this._children == default(global::Array<object>) )) {
				#line 220 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				throw global::haxe.lang.HaxeException.wrap("bad nodetype");
			}
			
			#line 221 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			global::Array<object> x = new global::Array<object>(new object[]{this._children});
			global::Array<int> cur = new global::Array<int>(new int[]{0});
			{
				#line 226 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				global::haxe.lang.Function __temp_odecl183 = new global::Xml_elementsNamed_226__Fun(((global::Array<object>) (name1) ), ((global::Array<int>) (cur) ), ((global::Array<object>) (x) ));
				#line 238 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				global::haxe.lang.Function __temp_odecl184 = new global::Xml_elementsNamed_238__Fun(((global::Array<object>) (name1) ), ((global::Array<int>) (cur) ), ((global::Array<object>) (x) ));
				#line 223 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				return new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{120, 407283053, 1224901875}), new global::Array<object>(new object[]{this._children, __temp_odecl183, __temp_odecl184}), new global::Array<int>(new int[]{4949376}), new global::Array<double>(new double[]{((double) (0) )}));
			}
			
		}
		#line default
	}
	
	
	public virtual   global::Xml firstElement(){
		unchecked {
			#line 260 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			if (( this._children == default(global::Array<object>) )) {
				#line 260 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				throw global::haxe.lang.HaxeException.wrap("bad nodetype");
			}
			
			#line 261 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			int cur = 0;
			int l = this._children.length;
			while (( cur < l )){
				#line 264 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				global::Xml n = ((global::Xml) (this._children[cur]) );
				if (( n.nodeType == global::Xml.Element )) {
					#line 266 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return n;
				}
				
				#line 267 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				cur++;
			}
			
			#line 269 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			return default(global::Xml);
		}
		#line default
	}
	
	
	public virtual   void addChild(global::Xml x){
		unchecked {
			#line 273 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			if (( this._children == default(global::Array<object>) )) {
				#line 273 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				throw global::haxe.lang.HaxeException.wrap("bad nodetype");
			}
			
			#line 274 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			if (( x._parent != default(global::Xml) )) {
				#line 274 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				x._parent._children.@remove(x);
			}
			
			#line 275 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			x._parent = this;
			this._children.push(x);
		}
		#line default
	}
	
	
	public virtual   string toString(){
		unchecked {
			#line 295 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			if (( this.nodeType == global::Xml.PCData )) {
				#line 296 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				return global::StringTools.htmlEscape(this._nodeValue, default(global::haxe.lang.Null<bool>));
			}
			
			#line 297 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			if (( this.nodeType == global::Xml.CData )) {
				#line 298 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				return global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat("<![CDATA[", this._nodeValue), "]]>");
			}
			
			#line 299 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			if (( this.nodeType == global::Xml.Comment )) {
				#line 300 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				return global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat("<!--", this._nodeValue), "-->");
			}
			
			#line 301 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			if (( this.nodeType == global::Xml.DocType )) {
				#line 302 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				return global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat("<!DOCTYPE ", this._nodeValue), ">");
			}
			
			#line 303 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			if (( this.nodeType == global::Xml.ProcessingInstruction )) {
				#line 304 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				return global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat("<?", this._nodeValue), "?>");
			}
			
			#line 305 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			global::StringBuf s = new global::StringBuf();
			#line 307 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			if (( this.nodeType == global::Xml.Element )) {
				#line 308 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				s.b.Append(((object) ("<") ));
				s.b.Append(((object) (global::Std.@string(this._nodeName)) ));
				{
					#line 310 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					object __temp_iterator157 = this._attributes.keys();
					#line 310 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator157, "hasNext", 407283053, default(global::Array)))){
						#line 310 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
						string k = global::haxe.lang.Runtime.toString(global::haxe.lang.Runtime.callField(__temp_iterator157, "next", 1224901875, default(global::Array)));
						s.b.Append(((object) (" ") ));
						s.b.Append(((object) (global::Std.@string(k)) ));
						s.b.Append(((object) ("=\"") ));
						{
							#line 314 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
							string x = global::haxe.lang.Runtime.toString(this._attributes.@get(((string) (k) )).@value);
							#line 314 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
							s.b.Append(((object) (global::Std.@string(x)) ));
						}
						
						#line 315 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
						s.b.Append(((object) ("\"") ));
					}
					
				}
				
				#line 317 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				if (( this._children.length == 0 )) {
					#line 318 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					s.b.Append(((object) ("/>") ));
					return s.toString();
				}
				
				#line 321 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				s.b.Append(((object) (">") ));
			}
			
			#line 324 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			{
				#line 324 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				object __temp_iterator158 = this.iterator();
				#line 324 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator158, "hasNext", 407283053, default(global::Array)))){
					#line 324 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					global::Xml x1 = ((global::Xml) (global::haxe.lang.Runtime.callField(__temp_iterator158, "next", 1224901875, default(global::Array))) );
					string x2 = x1.toString();
					#line 325 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					s.b.Append(((object) (global::Std.@string(x2)) ));
				}
				
			}
			
			#line 327 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			if (( this.nodeType == global::Xml.Element )) {
				#line 328 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				s.b.Append(((object) ("</") ));
				s.b.Append(((object) (global::Std.@string(this._nodeName)) ));
				s.b.Append(((object) (">") ));
			}
			
			#line 332 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			return s.toString();
		}
		#line default
	}
	
	
	public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
		unchecked {
			#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			switch (hash){
				case 1542788809:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					this._parent = ((global::Xml) (@value) );
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return @value;
				}
				
				
				case 939528350:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					this._children = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return @value;
				}
				
				
				case 1778087414:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					this._attributes = ((global::haxe.ds.StringMap<object>) (global::haxe.ds.StringMap<object>.__hx_cast<object>(((global::haxe.ds.StringMap) (@value) ))) );
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return @value;
				}
				
				
				case 831576528:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					this._nodeValue = global::haxe.lang.Runtime.toString(@value);
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return @value;
				}
				
				
				case 974309580:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					this._nodeName = global::haxe.lang.Runtime.toString(@value);
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return @value;
				}
				
				
				case 1988514268:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					this.nodeType = ((global::_Xml.RealXmlType) (@value) );
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return @value;
				}
				
				
				default:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return base.__hx_setField(field, hash, @value, handleProperties);
				}
				
			}
			
		}
		#line default
	}
	
	
	public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
		unchecked {
			#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			switch (hash){
				case 946786476:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("toString") ), ((int) (946786476) ))) );
				}
				
				
				case 1058459579:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("addChild") ), ((int) (1058459579) ))) );
				}
				
				
				case 798803052:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("firstElement") ), ((int) (798803052) ))) );
				}
				
				
				case 1116398082:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("elementsNamed") ), ((int) (1116398082) ))) );
				}
				
				
				case 63190583:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("elements") ), ((int) (63190583) ))) );
				}
				
				
				case 328878574:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("iterator") ), ((int) (328878574) ))) );
				}
				
				
				case 1071652316:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("exists") ), ((int) (1071652316) ))) );
				}
				
				
				case 5741474:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("set") ), ((int) (5741474) ))) );
				}
				
				
				case 5144726:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get") ), ((int) (5144726) ))) );
				}
				
				
				case 1549276146:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("set_nodeValue") ), ((int) (1549276146) ))) );
				}
				
				
				case 1016047850:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("set_nodeName") ), ((int) (1016047850) ))) );
				}
				
				
				case 664175990:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_nodeName") ), ((int) (664175990) ))) );
				}
				
				
				case 1542788809:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return this._parent;
				}
				
				
				case 939528350:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return this._children;
				}
				
				
				case 1778087414:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return this._attributes;
				}
				
				
				case 831576528:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return this._nodeValue;
				}
				
				
				case 974309580:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return this._nodeName;
				}
				
				
				case 1988514268:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return this.nodeType;
				}
				
				
				default:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
				}
				
			}
			
		}
		#line default
	}
	
	
	public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
		unchecked {
			#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			switch (hash){
				case 946786476:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return this.toString();
				}
				
				
				case 1058459579:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					this.addChild(((global::Xml) (dynargs[0]) ));
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					break;
				}
				
				
				case 798803052:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return this.firstElement();
				}
				
				
				case 1116398082:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return this.elementsNamed(global::haxe.lang.Runtime.toString(dynargs[0]));
				}
				
				
				case 63190583:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return this.elements();
				}
				
				
				case 328878574:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return this.iterator();
				}
				
				
				case 1071652316:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return this.exists(global::haxe.lang.Runtime.toString(dynargs[0]));
				}
				
				
				case 5741474:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					this.@set(global::haxe.lang.Runtime.toString(dynargs[0]), global::haxe.lang.Runtime.toString(dynargs[1]));
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					break;
				}
				
				
				case 5144726:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return this.@get(global::haxe.lang.Runtime.toString(dynargs[0]));
				}
				
				
				case 1549276146:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return this.set_nodeValue(global::haxe.lang.Runtime.toString(dynargs[0]));
				}
				
				
				case 1016047850:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return this.set_nodeName(global::haxe.lang.Runtime.toString(dynargs[0]));
				}
				
				
				case 664175990:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return this.get_nodeName();
				}
				
				
				default:
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					return base.__hx_invokeField(field, hash, dynargs);
				}
				
			}
			
			#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			return default(object);
		}
		#line default
	}
	
	
	public override   void __hx_getFields(global::Array<object> baseArr){
		unchecked {
			#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			baseArr.push("_parent");
			#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			baseArr.push("_children");
			#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			baseArr.push("_attributes");
			#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			baseArr.push("_nodeValue");
			#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			baseArr.push("_nodeName");
			#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			baseArr.push("nodeType");
			#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			{
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				base.__hx_getFields(baseArr);
			}
			
		}
		#line default
	}
	
	
	public override string ToString(){
		return this.toString();
	}
	
	
}



#pragma warning disable 109, 114, 219, 429, 168, 162
public  class Xml_iterator_178__Fun : global::haxe.lang.Function {
	public    Xml_iterator_178__Fun(global::Array<int> cur, global::Array<object> x) : base(0, 0){
		unchecked {
			#line 179 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			this.cur = cur;
			#line 179 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			this.x = x;
		}
		#line default
	}
	
	
	public override   object __hx_invoke0_o(){
		unchecked {
			#line 179 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			return ( this.cur[0] < ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.x[0]) ))) ).length );
		}
		#line default
	}
	
	
	public  global::Array<int> cur;
	
	public  global::Array<object> x;
	
}



#pragma warning disable 109, 114, 219, 429, 168, 162
public  class Xml_iterator_181__Fun : global::haxe.lang.Function {
	public    Xml_iterator_181__Fun(global::Array<int> cur, global::Array<object> x) : base(0, 0){
		unchecked {
			#line 182 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			this.cur = cur;
			#line 182 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			this.x = x;
		}
		#line default
	}
	
	
	public override   object __hx_invoke0_o(){
		unchecked {
			#line 182 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			return ((global::Xml) (((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.x[0]) ))) )[this.cur[0]++]) );
		}
		#line default
	}
	
	
	public  global::Array<int> cur;
	
	public  global::Array<object> x;
	
}



#pragma warning disable 109, 114, 219, 429, 168, 162
public  class Xml_elements_192__Fun : global::haxe.lang.Function {
	public    Xml_elements_192__Fun(global::Array<int> cur, global::Array<object> x) : base(0, 0){
		unchecked {
			#line 192 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			this.cur = cur;
			#line 192 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			this.x = x;
		}
		#line default
	}
	
	
	public override   object __hx_invoke0_o(){
		unchecked {
			#line 193 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			int k = this.cur[0];
			int l = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.x[0]) ))) ).length;
			while (( k < l )){
				#line 196 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				if (( ((global::Xml) (((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.x[0]) ))) )[k]) ).nodeType == global::Xml.Element )) {
					#line 197 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					break;
				}
				
				#line 198 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				k += 1;
			}
			
			#line 200 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			this.cur[0] = k;
			return ( k < l );
		}
		#line default
	}
	
	
	public  global::Array<int> cur;
	
	public  global::Array<object> x;
	
}



#pragma warning disable 109, 114, 219, 429, 168, 162
public  class Xml_elements_203__Fun : global::haxe.lang.Function {
	public    Xml_elements_203__Fun(global::Array<int> cur, global::Array<object> x) : base(0, 0){
		unchecked {
			#line 203 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			this.cur = cur;
			#line 203 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			this.x = x;
		}
		#line default
	}
	
	
	public override   object __hx_invoke0_o(){
		unchecked {
			#line 204 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			int k1 = this.cur[0];
			int l1 = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.x[0]) ))) ).length;
			while (( k1 < l1 )){
				#line 207 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				global::Xml n = ((global::Xml) (((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.x[0]) ))) )[k1]) );
				k1 += 1;
				if (( n.nodeType == global::Xml.Element )) {
					#line 210 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					this.cur[0] = k1;
					return n;
				}
				
			}
			
			#line 214 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			return default(global::Xml);
		}
		#line default
	}
	
	
	public  global::Array<int> cur;
	
	public  global::Array<object> x;
	
}



#pragma warning disable 109, 114, 219, 429, 168, 162
public  class Xml_elementsNamed_226__Fun : global::haxe.lang.Function {
	public    Xml_elementsNamed_226__Fun(global::Array<object> name1, global::Array<int> cur, global::Array<object> x) : base(0, 0){
		unchecked {
			#line 226 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			this.name1 = name1;
			#line 226 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			this.cur = cur;
			#line 226 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			this.x = x;
		}
		#line default
	}
	
	
	public override   object __hx_invoke0_o(){
		unchecked {
			#line 227 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			int k = this.cur[0];
			int l = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.x[0]) ))) ).length;
			while (( k < l )){
				#line 230 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				global::Xml n = ((global::Xml) (((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.x[0]) ))) )[k]) );
				if (( ( n.nodeType == global::Xml.Element ) && string.Equals(n._nodeName, global::haxe.lang.Runtime.toString(this.name1[0])) )) {
					#line 232 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					break;
				}
				
				#line 233 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				k++;
			}
			
			#line 235 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			this.cur[0] = k;
			return ( k < l );
		}
		#line default
	}
	
	
	public  global::Array<object> name1;
	
	public  global::Array<int> cur;
	
	public  global::Array<object> x;
	
}



#pragma warning disable 109, 114, 219, 429, 168, 162
public  class Xml_elementsNamed_238__Fun : global::haxe.lang.Function {
	public    Xml_elementsNamed_238__Fun(global::Array<object> name1, global::Array<int> cur, global::Array<object> x) : base(0, 0){
		unchecked {
			#line 238 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			this.name1 = name1;
			#line 238 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			this.cur = cur;
			#line 238 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			this.x = x;
		}
		#line default
	}
	
	
	public override   object __hx_invoke0_o(){
		unchecked {
			#line 239 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			int k1 = this.cur[0];
			int l1 = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.x[0]) ))) ).length;
			while (( k1 < l1 )){
				#line 242 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
				global::Xml n1 = ((global::Xml) (((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.x[0]) ))) )[k1]) );
				k1++;
				if (( ( n1.nodeType == global::Xml.Element ) && string.Equals(n1._nodeName, global::haxe.lang.Runtime.toString(this.name1[0])) )) {
					#line 245 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
					this.cur[0] = k1;
					return n1;
				}
				
			}
			
			#line 249 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Xml.hx"
			return default(global::Xml);
		}
		#line default
	}
	
	
	public  global::Array<object> name1;
	
	public  global::Array<int> cur;
	
	public  global::Array<object> x;
	
}


