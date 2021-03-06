(function () { "use strict";
var $estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
EReg.__name__ = ["EReg"];
EReg.prototype = {
	r: null
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,__class__: EReg
};
var HxOverrides = function() { };
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Lambda = function() { };
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
};
Lambda.map = function(it,f) {
	var l = new List();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(x));
	}
	return l;
};
Lambda.has = function(it,elt) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(x == elt) return true;
	}
	return false;
};
Lambda.foreach = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(!f(x)) return false;
	}
	return true;
};
Lambda.filter = function(it,f) {
	var l = new List();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) l.add(x);
	}
	return l;
};
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
};
var List = function() {
	this.length = 0;
};
List.__name__ = ["List"];
List.prototype = {
	h: null
	,q: null
	,length: null
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,map: function(f) {
		var b = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			b.add(f(v));
		}
		return b;
	}
	,__class__: List
};
var Main = function() { };
Main.__name__ = ["Main"];
Main.main = function() {
	var target = new nx3.render.TargetSvg("#small",nx3.render.scaling.Scaling.SMALL);
	nx3.test.TestRenderer.testRenderP(new nx3.render.Renderer(target,10,80));
	var target1 = new nx3.render.TargetSvg("#normal",nx3.render.scaling.Scaling.NORMAL);
	nx3.test.TestRenderer.testRenderP(new nx3.render.Renderer(target1,10,80));
	var target2 = new nx3.render.TargetSvg("#big",nx3.render.scaling.Scaling.BIG);
	nx3.test.TestRenderer.testRenderP(new nx3.render.Renderer(target2,10,80));
	var target3 = new nx3.render.TargetSvgXml("#test",nx3.render.scaling.Scaling.NORMAL);
	var renderer = new nx3.render.Renderer(target3,10,80);
	renderer.renderScore(new nx3.PScore(nx3.test.TestItems.scoreTest1().nscore));
	var xml = target3.getXml();
	haxe.Log.trace(xml,{ fileName : "Main.hx", lineNumber : 39, className : "Main", methodName : "main"});
};
var IMap = function() { };
IMap.__name__ = ["IMap"];
IMap.prototype = {
	get: null
	,__class__: IMap
};
Math.__name__ = ["Math"];
var Reflect = function() { };
Reflect.__name__ = ["Reflect"];
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compare = function(a,b) {
	if(a == b) return 0; else if(a > b) return 1; else return -1;
};
var Std = function() { };
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
};
Std.random = function(x) {
	if(x <= 0) return 0; else return Math.floor(Math.random() * x);
};
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	b: null
	,add: function(x) {
		this.b += Std.string(x);
	}
	,addSub: function(s,pos,len) {
		if(len == null) this.b += HxOverrides.substr(s,pos,null); else this.b += HxOverrides.substr(s,pos,len);
	}
	,__class__: StringBuf
};
var StringTools = function() { };
StringTools.__name__ = ["StringTools"];
StringTools.htmlEscape = function(s,quotes) {
	s = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
	if(quotes) return s.split("\"").join("&quot;").split("'").join("&#039;"); else return s;
};
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
};
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
var Type = function() { };
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
};
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
};
var XmlType = { __ename__ : true, __constructs__ : [] };
var Xml = function() {
};
Xml.__name__ = ["Xml"];
Xml.parse = function(str) {
	return haxe.xml.Parser.parse(str);
};
Xml.createElement = function(name) {
	var r = new Xml();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new haxe.ds.StringMap();
	r.set_nodeName(name);
	return r;
};
Xml.createPCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.PCData;
	r.set_nodeValue(data);
	return r;
};
Xml.createCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.CData;
	r.set_nodeValue(data);
	return r;
};
Xml.createComment = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Comment;
	r.set_nodeValue(data);
	return r;
};
Xml.createDocType = function(data) {
	var r = new Xml();
	r.nodeType = Xml.DocType;
	r.set_nodeValue(data);
	return r;
};
Xml.createProcessingInstruction = function(data) {
	var r = new Xml();
	r.nodeType = Xml.ProcessingInstruction;
	r.set_nodeValue(data);
	return r;
};
Xml.createDocument = function() {
	var r = new Xml();
	r.nodeType = Xml.Document;
	r._children = new Array();
	return r;
};
Xml.prototype = {
	nodeType: null
	,_nodeName: null
	,_nodeValue: null
	,_attributes: null
	,_children: null
	,_parent: null
	,get_nodeName: function() {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName;
	}
	,set_nodeName: function(n) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName = n;
	}
	,set_nodeValue: function(v) {
		if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue = v;
	}
	,get: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.get(att);
	}
	,set: function(att,value) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		this._attributes.set(att,value);
	}
	,exists: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.exists(att);
	}
	,iterator: function() {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			return this.cur < this.x.length;
		}, next : function() {
			return this.x[this.cur++];
		}};
	}
	,elements: function() {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				if(this.x[k].nodeType == Xml.Element) break;
				k += 1;
			}
			this.cur = k;
			return k < l;
		}, next : function() {
			var k1 = this.cur;
			var l1 = this.x.length;
			while(k1 < l1) {
				var n = this.x[k1];
				k1 += 1;
				if(n.nodeType == Xml.Element) {
					this.cur = k1;
					return n;
				}
			}
			return null;
		}};
	}
	,elementsNamed: function(name) {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				if(n.nodeType == Xml.Element && n._nodeName == name) break;
				k++;
			}
			this.cur = k;
			return k < l;
		}, next : function() {
			var k1 = this.cur;
			var l1 = this.x.length;
			while(k1 < l1) {
				var n1 = this.x[k1];
				k1++;
				if(n1.nodeType == Xml.Element && n1._nodeName == name) {
					this.cur = k1;
					return n1;
				}
			}
			return null;
		}};
	}
	,firstChild: function() {
		if(this._children == null) throw "bad nodetype";
		return this._children[0];
	}
	,firstElement: function() {
		if(this._children == null) throw "bad nodetype";
		var cur = 0;
		var l = this._children.length;
		while(cur < l) {
			var n = this._children[cur];
			if(n.nodeType == Xml.Element) return n;
			cur++;
		}
		return null;
	}
	,addChild: function(x) {
		if(this._children == null) throw "bad nodetype";
		if(x._parent != null) HxOverrides.remove(x._parent._children,x);
		x._parent = this;
		this._children.push(x);
	}
	,toString: function() {
		if(this.nodeType == Xml.PCData) return StringTools.htmlEscape(this._nodeValue);
		if(this.nodeType == Xml.CData) return "<![CDATA[" + this._nodeValue + "]]>";
		if(this.nodeType == Xml.Comment) return "<!--" + this._nodeValue + "-->";
		if(this.nodeType == Xml.DocType) return "<!DOCTYPE " + this._nodeValue + ">";
		if(this.nodeType == Xml.ProcessingInstruction) return "<?" + this._nodeValue + "?>";
		var s = new StringBuf();
		if(this.nodeType == Xml.Element) {
			s.b += "<";
			s.b += Std.string(this._nodeName);
			var $it0 = this._attributes.keys();
			while( $it0.hasNext() ) {
				var k = $it0.next();
				s.b += " ";
				if(k == null) s.b += "null"; else s.b += "" + k;
				s.b += "=\"";
				s.add(this._attributes.get(k));
				s.b += "\"";
			}
			if(this._children.length == 0) {
				s.b += "/>";
				return s.b;
			}
			s.b += ">";
		}
		var $it1 = this.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			s.add(x.toString());
		}
		if(this.nodeType == Xml.Element) {
			s.b += "</";
			s.b += Std.string(this._nodeName);
			s.b += ">";
		}
		return s.b;
	}
	,__class__: Xml
};
var cx = {};
cx.ArrayTools = function() { };
cx.ArrayTools.__name__ = ["cx","ArrayTools"];
cx.ArrayTools.next = function(a,item) {
	var idx = HxOverrides.indexOf(a,item,0);
	if(idx == -1) return null;
	if(idx == a.length - 1) return null;
	return a[idx + 1];
};
cx.ArrayTools.prev = function(a,item) {
	var idx = HxOverrides.indexOf(a,item,0);
	if(idx <= 0) return null;
	return a[idx - 1];
};
cx.ArrayTools.has = function(a,item) {
	return HxOverrides.indexOf(a,item,0) != -1;
};
cx.ArrayTools.indexOrNull = function(a,idx) {
	if(idx < 0 || idx > a.length - 1) return null; else return a[idx];
};
cx.ArrayTools.indexOrValue = function(a,idx,fallbackValue) {
	if((idx < 0 || idx > a.length - 1?null:a[idx]) != null) return a[idx]; else return fallbackValue;
};
cx.ArrayTools.equals = function(a,b) {
	return a.toString() == b.toString();
};
cx.ArrayTools.unique = function(arr) {
	var result = new Array();
	var _g = 0;
	while(_g < arr.length) {
		var item = arr[_g];
		++_g;
		if(!Lambda.has(result,item)) result.push(item);
	}
	result.sort(function(a,b) {
		return Reflect.compare(a,b);
	});
	return result;
};
cx.ArrayTools.fromIterator = function(it) {
	var result = [];
	while( it.hasNext() ) {
		var v = it.next();
		result.push(v);
	}
	return result;
};
cx.ArrayTools.fromIterables = function(it) {
	return cx.ArrayTools.fromIterator($iterator(it)());
};
cx.ArrayTools.fromHashKeys = function(it) {
	return cx.ArrayTools.fromIterator(it);
};
cx.ArrayTools.allNull = function(it) {
	var _g = 0;
	while(_g < it.length) {
		var v = it[_g];
		++_g;
		if(v != null) return false;
	}
	return true;
};
cx.ArrayTools.doOverlap = function(array1,array2) {
	var _g = 0;
	while(_g < array1.length) {
		var item = array1[_g];
		++_g;
		if(Lambda.has(array2,item)) return true;
	}
	return false;
};
cx.ArrayTools.overlap = function(array1,array2) {
	return Lambda.array(array1.filter(function(value1) {
		var ret = Lambda.has(array2,value1);
		return ret;
	}));
};
cx.ArrayTools.diff = function(array1,array2) {
	var result = new Array();
	var _g = 0;
	while(_g < array1.length) {
		var item = array1[_g];
		++_g;
		if(!Lambda.has(array2,item)) result.push(item);
	}
	var _g1 = 0;
	while(_g1 < array2.length) {
		var item1 = array2[_g1];
		++_g1;
		if(!Lambda.has(array1,item1)) result.push(item1);
	}
	return result;
};
cx.ArrayTools.first = function(array) {
	return array[0];
};
cx.ArrayTools.isFirst = function(array,item) {
	return array[0] == item;
};
cx.ArrayTools.last = function(array) {
	return array[array.length - 1];
};
cx.ArrayTools.isLast = function(array,item) {
	return array[array.length - 1] == item;
};
cx.ArrayTools.secondLast = function(array) {
	return array[array.length - 2];
};
cx.ArrayTools.index = function(array,item) {
	return Lambda.indexOf(array,item);
};
cx.ArrayTools.second = function(array) {
	return array[1];
};
cx.ArrayTools.third = function(array) {
	return array[2];
};
cx.ArrayTools.fourth = function(array) {
	return array[3];
};
cx.ArrayTools.fifth = function(array) {
	return array[4];
};
cx.ArrayTools.sixth = function(array) {
	return array[5];
};
cx.ArrayTools.seventh = function(array) {
	return array[6];
};
cx.ArrayTools.eighth = function(array) {
	return array[7];
};
cx.ArrayTools.nineth = function(array) {
	return array[8];
};
cx.ArrayTools.shuffle = function(a) {
	var t = cx.ArrayTools.range(a.length);
	var arr = [];
	while(t.length > 0) {
		var pos = Std.random(t.length);
		var index = t[pos];
		t.splice(pos,1);
		arr.push(a[index]);
	}
	return arr;
};
cx.ArrayTools.countItem = function(a,item) {
	var cnt = 0;
	var _g = 0;
	while(_g < a.length) {
		var ai = a[_g];
		++_g;
		if(ai == item) cnt++;
	}
	return cnt;
};
cx.ArrayTools.sorta = function(a) {
	a.sort(function(a1,b) {
		return Reflect.compare(a1,b);
	});
	return a;
};
cx.ArrayTools.range = function(start,stop,step) {
	if(step == null) step = 1;
	if(null == stop) {
		stop = start;
		start = 0;
	}
	if((stop - start) / step == Math.POSITIVE_INFINITY) throw "infinite range";
	var range = [];
	var i = -1;
	var j;
	if(step < 0) while((j = start + step * ++i) > stop) range.push(j); else while((j = start + step * ++i) < stop) range.push(j);
	return range;
};
cx.ArrayTools.intsMin = function(a) {
	var r = a[0];
	var _g = 0;
	while(_g < a.length) {
		var v = a[_g];
		++_g;
		if(v < r) r = v;
	}
	return r;
};
cx.EnumTools = function() { };
cx.EnumTools.__name__ = ["cx","EnumTools"];
cx.EnumTools.createFromString = function(e,str) {
	try {
		var type = str;
		var params = [];
		if(cx.StrTools.has(str,"(")) {
			var parIdx = str.indexOf("(");
			type = HxOverrides.substr(str,0,parIdx);
			params = StringTools.replace(StringTools.replace(HxOverrides.substr(str,parIdx,null),"(",""),")","").split(",");
		}
		return Type.createEnum(e,type,params);
	} catch( e1 ) {
	}
	return null;
};
cx.MapTools = function() { };
cx.MapTools.__name__ = ["cx","MapTools"];
cx.MapTools.keysToArray = function(it) {
	var result = [];
	while( it.hasNext() ) {
		var v = it.next();
		result.push(v);
	}
	return result;
};
cx.MapTools.sortarray = function(a) {
	a.sort(function(a1,b) {
		return Reflect.compare(a1,b);
	});
	return a;
};
cx.MathTools = function() { };
cx.MathTools.__name__ = ["cx","MathTools"];
cx.MathTools.floatFromString = function(str,comma) {
	if(comma == null) comma = ",";
	str = StringTools.replace(str,",",".");
	return Std.parseFloat(str);
};
cx.MathTools.floatToString = function(val,comma) {
	if(comma == null) comma = ",";
	var result;
	if(val == null) result = "null"; else result = "" + val;
	if(comma != ".") result = StringTools.replace(result,".",comma);
	return result;
};
cx.MathTools.floatEquals = function(a,b) {
	return Math.abs(a - b) <= 0.00001;
};
cx.MathTools.inRange = function(min,value,max) {
	if(value < min) return false;
	if(value > max) return false;
	return true;
};
cx.MathTools.floatRange = function(min,value,max) {
	if(value < min) return min;
	if(value > max) return max;
	return value;
};
cx.MathTools.round2 = function(number,precision) {
	if(precision == null) precision = 6;
	number = number * Math.pow(10,precision);
	number = Math.round(number) / Math.pow(10,precision);
	return number;
};
cx.MathTools.intRange = function(min,value,max) {
	if(value < min) return min;
	if(value > max) return max;
	return value;
};
cx.MathTools.intMin = function(a,b) {
	if(a < b) return a;
	return b;
};
cx.MathTools.intMax = function(a,b) {
	if(a > b) return a;
	return b;
};
cx.MathTools.ipol = function(a,b,delta) {
	return delta * (b - a) + a;
};
cx.StrTools = function() { };
cx.StrTools.__name__ = ["cx","StrTools"];
cx.StrTools.countSub = function(str,lookForStr) {
	return str.split(lookForStr).length - 1;
};
cx.StrTools.until = function(str,untilStr,includeUntilStr) {
	if(includeUntilStr == null) includeUntilStr = false;
	var pos = str.indexOf(untilStr);
	if(includeUntilStr) pos++;
	return str.substring(0,pos);
};
cx.StrTools.untilLast = function(str,untilStr,includeUntilStr) {
	if(includeUntilStr == null) includeUntilStr = false;
	var pos = str.lastIndexOf(untilStr);
	if(includeUntilStr) pos++;
	return str.substring(0,pos);
};
cx.StrTools.tab = function(str) {
	return str + "\t";
};
cx.StrTools.newline = function(str) {
	return str + "\n";
};
cx.StrTools.repeat = function(repeatString,count) {
	var result = "";
	var _g = 0;
	while(_g < count) {
		var i = _g++;
		result += repeatString;
	}
	return result;
};
cx.StrTools.fill = function(str,toLength,$with,replaceNull) {
	if(replaceNull == null) replaceNull = "-";
	if($with == null) $with = " ";
	if(toLength == null) toLength = 32;
	if(str == null) str = replaceNull;
	do str += $with; while(str.length < toLength);
	return HxOverrides.substr(str,0,toLength);
};
cx.StrTools.splitTrim = function(str,delimiter) {
	if(delimiter == null) delimiter = ",";
	if(str == null) return [];
	var a = str.split(delimiter);
	var a2 = new Array();
	var _g = 0;
	while(_g < a.length) {
		var part = a[_g];
		++_g;
		var part2 = StringTools.trim(part);
		if(part2.length > 0) a2.push(part2);
	}
	return a2;
};
cx.StrTools.replaceNull = function(str,$with) {
	if($with == null) $with = "-";
	if(str == null) return $with; else return str;
};
cx.StrTools.firstUpperCase = function(str,restToLowercase) {
	if(restToLowercase == null) restToLowercase = true;
	var rest;
	if(restToLowercase) rest = HxOverrides.substr(str,1,null).toLowerCase(); else rest = HxOverrides.substr(str,1,null);
	return HxOverrides.substr(str,0,1).toUpperCase() + rest;
};
cx.StrTools.afterLast = function(str,$char,includeChar) {
	if(includeChar == null) includeChar = false;
	var idx = str.lastIndexOf($char);
	if(idx == -1) return str;
	if(!includeChar) idx += $char.length;
	return HxOverrides.substr(str,idx,null);
};
cx.StrTools.similarityCaseIgnore = function(strA,strB) {
	return cx.StrTools.similarity(strA.toLowerCase(),strB.toLowerCase());
};
cx.StrTools.similarityCaseBalance = function(strA,strB) {
	return (cx.StrTools.similarity(strA,strB) + cx.StrTools.similarity(strA.toLowerCase(),strB.toLowerCase())) / 2;
};
cx.StrTools.similarity = function(strA,strB) {
	if(strA == strB) return 1;
	if(strA.length > strB.length) {
		var strC = strA;
		strA = strB;
		strB = strC;
	}
	return cx.StrTools._similarity(strA,strB);
};
cx.StrTools.similarityAssymetric = function(strShorter,strLonger) {
	if(strShorter == strLonger) return 1;
	return cx.StrTools._similarity(strShorter,strShorter);
};
cx.StrTools._similarity = function(strA,strB) {
	var lengthA = strA.length;
	var lengthB = strB.length;
	var i = 0;
	var segmentCount = 0;
	var segmentsInfos = new Array();
	var segment = "";
	while(i < lengthA) {
		var $char = strA.charAt(i);
		if(strB.indexOf($char) > -1) {
			segment += $char;
			if(strB.indexOf(segment) > -1) {
				var segmentPosA = i - segment.length + 1;
				var segmentPosB = strB.indexOf(segment);
				var positionDiff = Math.abs(segmentPosA - segmentPosB);
				var posFactor = (lengthA - positionDiff) / lengthB;
				var lengthFactor = segment.length / lengthA;
				segmentsInfos[segmentCount] = { segment : segment, score : posFactor * lengthFactor};
			} else {
				segment = "";
				segmentCount++;
				i--;
			}
		} else {
			segment = "";
			segmentCount++;
		}
		i++;
	}
	var usedSegmentsCount = -2;
	var totalScore = 0.0;
	var _g = 0;
	while(_g < segmentsInfos.length) {
		var si = segmentsInfos[_g];
		++_g;
		if(si != null) {
			totalScore += si.score;
			usedSegmentsCount++;
		}
	}
	totalScore = totalScore - Math.max(usedSegmentsCount,0) * 0.02;
	return Math.max(0,Math.min(totalScore,1));
};
cx.StrTools.has = function(str,substr) {
	return str.indexOf(substr) > -1;
};
cx.StrTools.reverse = function(string) {
	var result = "";
	var _g1 = 0;
	var _g = string.length;
	while(_g1 < _g) {
		var i = _g1++;
		result = string.charAt(i) + result;
	}
	return result;
};
cx.StrTools.intToChar = function($int,offset) {
	if(offset == null) offset = 65;
	if($int > 9) throw "int to char error";
	if($int < 0) throw "int to char error";
	var c = $int + offset;
	var $char = String.fromCharCode(c);
	return $char;
};
cx.StrTools.charToInt = function($char,offset) {
	if(offset == null) offset = 65;
	if($char.length > 1) throw "char to int error";
	return HxOverrides.cca($char,0) - offset;
};
cx.StrTools.numToStr = function(numStr,offset) {
	if(offset == null) offset = 65;
	var testParse = Std.parseInt(numStr);
	var result = "";
	var _g1 = 0;
	var _g = numStr.length;
	while(_g1 < _g) {
		var i = _g1++;
		var $int = Std.parseInt(numStr.charAt(i));
		var $char = cx.StrTools.intToChar($int,offset);
		result += $char;
	}
	return result;
};
cx.StrTools.strToNum = function(str,offset) {
	if(offset == null) offset = 65;
	var result = "";
	var _g1 = 0;
	var _g = str.length;
	while(_g1 < _g) {
		var i = _g1++;
		var $char = str.charAt(i);
		var $int = cx.StrTools.charToInt($char,offset);
		if($int == null) result += "null"; else result += "" + $int;
	}
	return result;
};
cx.StrTools.rotate = function(str,positions) {
	if(positions == null) positions = 1;
	var result = str;
	var _g = 0;
	while(_g < positions) {
		var i = _g++;
		result = HxOverrides.substr(result,1,result.length) + HxOverrides.substr(result,0,1);
	}
	return result;
};
cx.StrTools.rotateBack = function(str,positions) {
	if(positions == null) positions = 1;
	var result = str;
	var _g = 0;
	while(_g < positions) {
		var i = _g++;
		result = HxOverrides.substr(result,-1,null) + HxOverrides.substr(result,0,result.length - 1);
	}
	return result;
};
cx.StrTools.toLatin1 = function(str) {
	return haxe.Utf8.decode(str);
	return str;
};
cx.StrTools.lastIdxOf = function(str,search,lastPos) {
	if(lastPos == null) lastPos = 0;
	if(lastPos == 0) return str.lastIndexOf(search);
	var _g = 0;
	while(_g < lastPos) {
		var i = _g++;
		var len = str.lastIndexOf(search);
		str = HxOverrides.substr(str,0,len);
	}
	return str.lastIndexOf(search);
};
cx.StrTools.toInt = function(str) {
	return Std.parseInt(str);
};
cx.StrTools.toFloat = function(str) {
	return Std.parseFloat(str);
};
cx.TimerTools = function() { };
cx.TimerTools.__name__ = ["cx","TimerTools"];
cx.TimerTools.timeout = function(func,milliSeconds) {
	if(milliSeconds == null) milliSeconds = 500;
	if(cx.TimerTools._timer != null) cx.TimerTools._timer.stop();
	cx.TimerTools._timer = haxe.Timer.delay(func,milliSeconds);
};
cx.TimerTools.delay = function(func,milliSeconds) {
	if(milliSeconds == null) milliSeconds = 500;
	haxe.Timer.delay(func,milliSeconds);
};
cx.TimerTools.timer = function(func,milliSeconds) {
	if(milliSeconds == null) milliSeconds = 500;
	var timer = new haxe.Timer(milliSeconds);
	timer.run = func;
	return timer;
};
var haxe = {};
haxe.StackItem = { __ename__ : true, __constructs__ : ["CFunction","Module","FilePos","Method","LocalFunction"] };
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.LocalFunction = function(v) { var $x = ["LocalFunction",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.CallStack = function() { };
haxe.CallStack.__name__ = ["haxe","CallStack"];
haxe.CallStack.exceptionStack = function() {
	return [];
};
haxe.CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe.CallStack.itemToString(b,s);
	}
	return b.b;
};
haxe.CallStack.itemToString = function(b,s) {
	switch(s[1]) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = s[2];
		b.b += "module ";
		if(m == null) b.b += "null"; else b.b += "" + m;
		break;
	case 2:
		var line = s[4];
		var file = s[3];
		var s1 = s[2];
		if(s1 != null) {
			haxe.CallStack.itemToString(b,s1);
			b.b += " (";
		}
		if(file == null) b.b += "null"; else b.b += "" + file;
		b.b += " line ";
		if(line == null) b.b += "null"; else b.b += "" + line;
		if(s1 != null) b.b += ")";
		break;
	case 3:
		var meth = s[3];
		var cname = s[2];
		if(cname == null) b.b += "null"; else b.b += "" + cname;
		b.b += ".";
		if(meth == null) b.b += "null"; else b.b += "" + meth;
		break;
	case 4:
		var n = s[2];
		b.b += "local function #";
		if(n == null) b.b += "null"; else b.b += "" + n;
		break;
	}
};
haxe.Log = function() { };
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
};
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe.Timer.prototype = {
	id: null
	,stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe.Timer
};
haxe.Utf8 = function() { };
haxe.Utf8.__name__ = ["haxe","Utf8"];
haxe.Utf8.decode = function(s) {
	throw "Not implemented";
	return s;
};
haxe.ds = {};
haxe.ds.IntMap = function() {
	this.h = { };
};
haxe.ds.IntMap.__name__ = ["haxe","ds","IntMap"];
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	h: null
	,set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe.ds.IntMap
};
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
haxe.ds.ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	h: null
	,set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe.ds.ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,__class__: haxe.ds.ObjectMap
};
haxe.ds.StringMap = function() {
	this.h = { };
};
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	h: null
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe.ds.StringMap
};
haxe.unit = {};
haxe.unit.TestCase = function() {
};
haxe.unit.TestCase.__name__ = ["haxe","unit","TestCase"];
haxe.unit.TestCase.prototype = {
	currentTest: null
	,setup: function() {
	}
	,tearDown: function() {
	}
	,print: function(v) {
		haxe.unit.TestRunner.print(v);
	}
	,assertTrue: function(b,c) {
		this.currentTest.done = true;
		if(b == false) {
			this.currentTest.success = false;
			this.currentTest.error = "expected true but was false";
			this.currentTest.posInfos = c;
			throw this.currentTest;
		}
	}
	,assertFalse: function(b,c) {
		this.currentTest.done = true;
		if(b == true) {
			this.currentTest.success = false;
			this.currentTest.error = "expected false but was true";
			this.currentTest.posInfos = c;
			throw this.currentTest;
		}
	}
	,assertEquals: function(expected,actual,c) {
		this.currentTest.done = true;
		if(actual != expected) {
			this.currentTest.success = false;
			this.currentTest.error = "expected '" + Std.string(expected) + "' but was '" + Std.string(actual) + "'";
			this.currentTest.posInfos = c;
			throw this.currentTest;
		}
	}
	,__class__: haxe.unit.TestCase
};
haxe.unit.TestResult = function() {
	this.m_tests = new List();
	this.success = true;
};
haxe.unit.TestResult.__name__ = ["haxe","unit","TestResult"];
haxe.unit.TestResult.prototype = {
	m_tests: null
	,success: null
	,add: function(t) {
		this.m_tests.add(t);
		if(!t.success) this.success = false;
	}
	,toString: function() {
		var buf = new StringBuf();
		var failures = 0;
		var $it0 = this.m_tests.iterator();
		while( $it0.hasNext() ) {
			var test = $it0.next();
			if(test.success == false) {
				buf.b += "* ";
				if(test.classname == null) buf.b += "null"; else buf.b += "" + test.classname;
				buf.b += "::";
				if(test.method == null) buf.b += "null"; else buf.b += "" + test.method;
				buf.b += "()";
				buf.b += "\n";
				buf.b += "ERR: ";
				if(test.posInfos != null) {
					buf.b += Std.string(test.posInfos.fileName);
					buf.b += ":";
					buf.b += Std.string(test.posInfos.lineNumber);
					buf.b += "(";
					buf.b += Std.string(test.posInfos.className);
					buf.b += ".";
					buf.b += Std.string(test.posInfos.methodName);
					buf.b += ") - ";
				}
				if(test.error == null) buf.b += "null"; else buf.b += "" + test.error;
				buf.b += "\n";
				if(test.backtrace != null) {
					if(test.backtrace == null) buf.b += "null"; else buf.b += "" + test.backtrace;
					buf.b += "\n";
				}
				buf.b += "\n";
				failures++;
			}
		}
		buf.b += "\n";
		if(failures == 0) buf.b += "OK "; else buf.b += "FAILED ";
		buf.b += Std.string(this.m_tests.length);
		buf.b += " tests, ";
		if(failures == null) buf.b += "null"; else buf.b += "" + failures;
		buf.b += " failed, ";
		buf.b += Std.string(this.m_tests.length - failures);
		buf.b += " success";
		buf.b += "\n";
		return buf.b;
	}
	,__class__: haxe.unit.TestResult
};
haxe.unit.TestRunner = function() {
	this.result = new haxe.unit.TestResult();
	this.cases = new List();
};
haxe.unit.TestRunner.__name__ = ["haxe","unit","TestRunner"];
haxe.unit.TestRunner.print = function(v) {
	var msg = js.Boot.__string_rec(v,"");
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) {
		msg = msg.split("\n").join("<br/>");
		d.innerHTML += StringTools.htmlEscape(msg) + "<br/>";
	} else if(typeof process != "undefined" && process.stdout != null && process.stdout.write != null) process.stdout.write(msg); else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
haxe.unit.TestRunner.customTrace = function(v,p) {
	haxe.unit.TestRunner.print(p.fileName + ":" + p.lineNumber + ": " + Std.string(v) + "\n");
};
haxe.unit.TestRunner.prototype = {
	result: null
	,cases: null
	,add: function(c) {
		this.cases.add(c);
	}
	,run: function() {
		this.result = new haxe.unit.TestResult();
		var $it0 = this.cases.iterator();
		while( $it0.hasNext() ) {
			var c = $it0.next();
			this.runCase(c);
		}
		haxe.unit.TestRunner.print(this.result.toString());
		return this.result.success;
	}
	,runCase: function(t) {
		var old = haxe.Log.trace;
		haxe.Log.trace = haxe.unit.TestRunner.customTrace;
		var cl = Type.getClass(t);
		var fields = Type.getInstanceFields(cl);
		haxe.unit.TestRunner.print("Class: " + Type.getClassName(cl) + " ");
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			var fname = f;
			var field = Reflect.field(t,f);
			if(StringTools.startsWith(fname,"test") && Reflect.isFunction(field)) {
				t.currentTest = new haxe.unit.TestStatus();
				t.currentTest.classname = Type.getClassName(cl);
				t.currentTest.method = fname;
				t.setup();
				try {
					Reflect.callMethod(t,field,new Array());
					if(t.currentTest.done) {
						t.currentTest.success = true;
						haxe.unit.TestRunner.print(".");
					} else {
						t.currentTest.success = false;
						t.currentTest.error = "(warning) no assert";
						haxe.unit.TestRunner.print("W");
					}
				} catch( $e0 ) {
					if( js.Boot.__instanceof($e0,haxe.unit.TestStatus) ) {
						var e = $e0;
						haxe.unit.TestRunner.print("F");
						t.currentTest.backtrace = haxe.CallStack.toString(haxe.CallStack.exceptionStack());
					} else {
					var e1 = $e0;
					haxe.unit.TestRunner.print("E");
					if(e1.message != null) t.currentTest.error = "exception thrown : " + Std.string(e1) + " [" + Std.string(e1.message) + "]"; else t.currentTest.error = "exception thrown : " + Std.string(e1);
					t.currentTest.backtrace = haxe.CallStack.toString(haxe.CallStack.exceptionStack());
					}
				}
				this.result.add(t.currentTest);
				t.tearDown();
			}
		}
		haxe.unit.TestRunner.print("\n");
		haxe.Log.trace = old;
	}
	,__class__: haxe.unit.TestRunner
};
haxe.unit.TestStatus = function() {
	this.done = false;
	this.success = false;
};
haxe.unit.TestStatus.__name__ = ["haxe","unit","TestStatus"];
haxe.unit.TestStatus.prototype = {
	done: null
	,success: null
	,error: null
	,method: null
	,classname: null
	,posInfos: null
	,backtrace: null
	,__class__: haxe.unit.TestStatus
};
haxe.xml = {};
haxe.xml.Parser = function() { };
haxe.xml.Parser.__name__ = ["haxe","xml","Parser"];
haxe.xml.Parser.parse = function(str) {
	var doc = Xml.createDocument();
	haxe.xml.Parser.doParse(str,0,doc);
	return doc;
};
haxe.xml.Parser.doParse = function(str,p,parent) {
	if(p == null) p = 0;
	var xml = null;
	var state = 1;
	var next = 1;
	var aname = null;
	var start = 0;
	var nsubs = 0;
	var nbrackets = 0;
	var c = str.charCodeAt(p);
	var buf = new StringBuf();
	while(!(c != c)) {
		switch(state) {
		case 0:
			switch(c) {
			case 10:case 13:case 9:case 32:
				break;
			default:
				state = next;
				continue;
			}
			break;
		case 1:
			switch(c) {
			case 60:
				state = 0;
				next = 2;
				break;
			default:
				start = p;
				state = 13;
				continue;
			}
			break;
		case 13:
			if(c == 60) {
				var child = Xml.createPCData(buf.b + HxOverrides.substr(str,start,p - start));
				buf = new StringBuf();
				parent.addChild(child);
				nsubs++;
				state = 0;
				next = 2;
			} else if(c == 38) {
				buf.addSub(str,start,p - start);
				state = 18;
				next = 13;
				start = p + 1;
			}
			break;
		case 17:
			if(c == 93 && str.charCodeAt(p + 1) == 93 && str.charCodeAt(p + 2) == 62) {
				var child1 = Xml.createCData(HxOverrides.substr(str,start,p - start));
				parent.addChild(child1);
				nsubs++;
				p += 2;
				state = 1;
			}
			break;
		case 2:
			switch(c) {
			case 33:
				if(str.charCodeAt(p + 1) == 91) {
					p += 2;
					if(HxOverrides.substr(str,p,6).toUpperCase() != "CDATA[") throw "Expected <![CDATA[";
					p += 5;
					state = 17;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) == 68 || str.charCodeAt(p + 1) == 100) {
					if(HxOverrides.substr(str,p + 2,6).toUpperCase() != "OCTYPE") throw "Expected <!DOCTYPE";
					p += 8;
					state = 16;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) != 45 || str.charCodeAt(p + 2) != 45) throw "Expected <!--"; else {
					p += 2;
					state = 15;
					start = p + 1;
				}
				break;
			case 63:
				state = 14;
				start = p;
				break;
			case 47:
				if(parent == null) throw "Expected node name";
				start = p + 1;
				state = 0;
				next = 10;
				break;
			default:
				state = 3;
				start = p;
				continue;
			}
			break;
		case 3:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(p == start) throw "Expected node name";
				xml = Xml.createElement(HxOverrides.substr(str,start,p - start));
				parent.addChild(xml);
				state = 0;
				next = 4;
				continue;
			}
			break;
		case 4:
			switch(c) {
			case 47:
				state = 11;
				nsubs++;
				break;
			case 62:
				state = 9;
				nsubs++;
				break;
			default:
				state = 5;
				start = p;
				continue;
			}
			break;
		case 5:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				var tmp;
				if(start == p) throw "Expected attribute name";
				tmp = HxOverrides.substr(str,start,p - start);
				aname = tmp;
				if(xml.exists(aname)) throw "Duplicate attribute";
				state = 0;
				next = 6;
				continue;
			}
			break;
		case 6:
			switch(c) {
			case 61:
				state = 0;
				next = 7;
				break;
			default:
				throw "Expected =";
			}
			break;
		case 7:
			switch(c) {
			case 34:case 39:
				state = 8;
				start = p;
				break;
			default:
				throw "Expected \"";
			}
			break;
		case 8:
			if(c == str.charCodeAt(start)) {
				var val = HxOverrides.substr(str,start + 1,p - start - 1);
				xml.set(aname,val);
				state = 0;
				next = 4;
			}
			break;
		case 9:
			p = haxe.xml.Parser.doParse(str,p,xml);
			start = p;
			state = 1;
			break;
		case 11:
			switch(c) {
			case 62:
				state = 1;
				break;
			default:
				throw "Expected >";
			}
			break;
		case 12:
			switch(c) {
			case 62:
				if(nsubs == 0) parent.addChild(Xml.createPCData(""));
				return p;
			default:
				throw "Expected >";
			}
			break;
		case 10:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(start == p) throw "Expected node name";
				var v = HxOverrides.substr(str,start,p - start);
				if(v != parent.get_nodeName()) throw "Expected </" + parent.get_nodeName() + ">";
				state = 0;
				next = 12;
				continue;
			}
			break;
		case 15:
			if(c == 45 && str.charCodeAt(p + 1) == 45 && str.charCodeAt(p + 2) == 62) {
				parent.addChild(Xml.createComment(HxOverrides.substr(str,start,p - start)));
				p += 2;
				state = 1;
			}
			break;
		case 16:
			if(c == 91) nbrackets++; else if(c == 93) nbrackets--; else if(c == 62 && nbrackets == 0) {
				parent.addChild(Xml.createDocType(HxOverrides.substr(str,start,p - start)));
				state = 1;
			}
			break;
		case 14:
			if(c == 63 && str.charCodeAt(p + 1) == 62) {
				p++;
				var str1 = HxOverrides.substr(str,start + 1,p - start - 2);
				parent.addChild(Xml.createProcessingInstruction(str1));
				state = 1;
			}
			break;
		case 18:
			if(c == 59) {
				var s = HxOverrides.substr(str,start,p - start);
				if(s.charCodeAt(0) == 35) {
					var i;
					if(s.charCodeAt(1) == 120) i = Std.parseInt("0" + HxOverrides.substr(s,1,s.length - 1)); else i = Std.parseInt(HxOverrides.substr(s,1,s.length - 1));
					buf.add(String.fromCharCode(i));
				} else if(!haxe.xml.Parser.escapes.exists(s)) buf.b += Std.string("&" + s + ";"); else buf.add(haxe.xml.Parser.escapes.get(s));
				start = p + 1;
				state = next;
			}
			break;
		}
		c = StringTools.fastCodeAt(str,++p);
	}
	if(state == 1) {
		start = p;
		state = 13;
	}
	if(state == 13) {
		if(p != start || nsubs == 0) parent.addChild(Xml.createPCData(buf.b + HxOverrides.substr(str,start,p - start)));
		return p;
	}
	throw "Unexpected end";
};
var hxlazy = {};
hxlazy.Lazy = function() { };
hxlazy.Lazy.__name__ = ["hxlazy","Lazy"];
var js = {};
js.Boot = function() { };
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js.Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js.Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js.Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js.Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
};
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js.Boot.__interfLoop(js.Boot.getClass(o),cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js.Lib = function() { };
js.Lib.__name__ = ["js","Lib"];
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
};
var nx3 = {};
nx3.Constants = function() { };
nx3.Constants.__name__ = ["nx3","Constants"];
nx3.EAllotment = { __ename__ : true, __constructs__ : ["LeftAlign","Equal","Logaritmic","Linear"] };
nx3.EAllotment.LeftAlign = ["LeftAlign",0];
nx3.EAllotment.LeftAlign.toString = $estr;
nx3.EAllotment.LeftAlign.__enum__ = nx3.EAllotment;
nx3.EAllotment.Equal = ["Equal",1];
nx3.EAllotment.Equal.toString = $estr;
nx3.EAllotment.Equal.__enum__ = nx3.EAllotment;
nx3.EAllotment.Logaritmic = ["Logaritmic",2];
nx3.EAllotment.Logaritmic.toString = $estr;
nx3.EAllotment.Logaritmic.__enum__ = nx3.EAllotment;
nx3.EAllotment.Linear = ["Linear",3];
nx3.EAllotment.Linear.toString = $estr;
nx3.EAllotment.Linear.__enum__ = nx3.EAllotment;
nx3.EBarType = { __ename__ : true, __constructs__ : ["Normal","Repeat","Ignore","Folded"] };
nx3.EBarType.Normal = ["Normal",0];
nx3.EBarType.Normal.toString = $estr;
nx3.EBarType.Normal.__enum__ = nx3.EBarType;
nx3.EBarType.Repeat = ["Repeat",1];
nx3.EBarType.Repeat.toString = $estr;
nx3.EBarType.Repeat.__enum__ = nx3.EBarType;
nx3.EBarType.Ignore = ["Ignore",2];
nx3.EBarType.Ignore.toString = $estr;
nx3.EBarType.Ignore.__enum__ = nx3.EBarType;
nx3.EBarType.Folded = ["Folded",3];
nx3.EBarType.Folded.toString = $estr;
nx3.EBarType.Folded.__enum__ = nx3.EBarType;
nx3.EBarline = { __ename__ : true, __constructs__ : ["Normal","None","Double","Final","Dotted","Breath","EndRepeat","EndAndStartRepeat"] };
nx3.EBarline.Normal = ["Normal",0];
nx3.EBarline.Normal.toString = $estr;
nx3.EBarline.Normal.__enum__ = nx3.EBarline;
nx3.EBarline.None = ["None",1];
nx3.EBarline.None.toString = $estr;
nx3.EBarline.None.__enum__ = nx3.EBarline;
nx3.EBarline.Double = ["Double",2];
nx3.EBarline.Double.toString = $estr;
nx3.EBarline.Double.__enum__ = nx3.EBarline;
nx3.EBarline.Final = ["Final",3];
nx3.EBarline.Final.toString = $estr;
nx3.EBarline.Final.__enum__ = nx3.EBarline;
nx3.EBarline.Dotted = ["Dotted",4];
nx3.EBarline.Dotted.toString = $estr;
nx3.EBarline.Dotted.__enum__ = nx3.EBarline;
nx3.EBarline.Breath = ["Breath",5];
nx3.EBarline.Breath.toString = $estr;
nx3.EBarline.Breath.__enum__ = nx3.EBarline;
nx3.EBarline.EndRepeat = ["EndRepeat",6];
nx3.EBarline.EndRepeat.toString = $estr;
nx3.EBarline.EndRepeat.__enum__ = nx3.EBarline;
nx3.EBarline.EndAndStartRepeat = ["EndAndStartRepeat",7];
nx3.EBarline.EndAndStartRepeat.toString = $estr;
nx3.EBarline.EndAndStartRepeat.__enum__ = nx3.EBarline;
nx3.EBarlineLeft = { __ename__ : true, __constructs__ : ["None","Single","Double","StartRepeat"] };
nx3.EBarlineLeft.None = ["None",0];
nx3.EBarlineLeft.None.toString = $estr;
nx3.EBarlineLeft.None.__enum__ = nx3.EBarlineLeft;
nx3.EBarlineLeft.Single = ["Single",1];
nx3.EBarlineLeft.Single.toString = $estr;
nx3.EBarlineLeft.Single.__enum__ = nx3.EBarlineLeft;
nx3.EBarlineLeft.Double = ["Double",2];
nx3.EBarlineLeft.Double.toString = $estr;
nx3.EBarlineLeft.Double.__enum__ = nx3.EBarlineLeft;
nx3.EBarlineLeft.StartRepeat = ["StartRepeat",3];
nx3.EBarlineLeft.StartRepeat.toString = $estr;
nx3.EBarlineLeft.StartRepeat.__enum__ = nx3.EBarlineLeft;
nx3.EBeamflagType = { __ename__ : true, __constructs__ : ["None","Start16","End16","Full16"] };
nx3.EBeamflagType.None = ["None",0];
nx3.EBeamflagType.None.toString = $estr;
nx3.EBeamflagType.None.__enum__ = nx3.EBeamflagType;
nx3.EBeamflagType.Start16 = ["Start16",1];
nx3.EBeamflagType.Start16.toString = $estr;
nx3.EBeamflagType.Start16.__enum__ = nx3.EBeamflagType;
nx3.EBeamflagType.End16 = ["End16",2];
nx3.EBeamflagType.End16.toString = $estr;
nx3.EBeamflagType.End16.__enum__ = nx3.EBeamflagType;
nx3.EBeamflagType.Full16 = ["Full16",3];
nx3.EBeamflagType.Full16.toString = $estr;
nx3.EBeamflagType.Full16.__enum__ = nx3.EBeamflagType;
nx3.EClef = { __ename__ : true, __constructs__ : ["ClefG","ClefF","ClefC"] };
nx3.EClef.ClefG = ["ClefG",0];
nx3.EClef.ClefG.toString = $estr;
nx3.EClef.ClefG.__enum__ = nx3.EClef;
nx3.EClef.ClefF = ["ClefF",1];
nx3.EClef.ClefF.toString = $estr;
nx3.EClef.ClefF.__enum__ = nx3.EClef;
nx3.EClef.ClefC = ["ClefC",2];
nx3.EClef.ClefC.toString = $estr;
nx3.EClef.ClefC.__enum__ = nx3.EClef;
nx3.EDirectionTools = function() { };
nx3.EDirectionTools.__name__ = ["nx3","EDirectionTools"];
nx3.EDirectionTools.uadToUd = function(directionUAD) {
	if(directionUAD == nx3.EDirectionUAD.Up) return nx3.EDirectionUD.Up;
	return nx3.EDirectionUD.Down;
};
nx3.EDirectionUAD = { __ename__ : true, __constructs__ : ["Up","Auto","Down"] };
nx3.EDirectionUAD.Up = ["Up",0];
nx3.EDirectionUAD.Up.toString = $estr;
nx3.EDirectionUAD.Up.__enum__ = nx3.EDirectionUAD;
nx3.EDirectionUAD.Auto = ["Auto",1];
nx3.EDirectionUAD.Auto.toString = $estr;
nx3.EDirectionUAD.Auto.__enum__ = nx3.EDirectionUAD;
nx3.EDirectionUAD.Down = ["Down",2];
nx3.EDirectionUAD.Down.toString = $estr;
nx3.EDirectionUAD.Down.__enum__ = nx3.EDirectionUAD;
nx3.EDirectionUADTools = function() { };
nx3.EDirectionUADTools.__name__ = ["nx3","EDirectionUADTools"];
nx3.EDirectionUADTools.toUD = function(direction) {
	switch(direction[1]) {
	case 0:
		return nx3.EDirectionUD.Up;
	case 2:
		return nx3.EDirectionUD.Down;
	default:
		return nx3.EDirectionUD.Down;
	}
};
nx3.EDirectionUD = { __ename__ : true, __constructs__ : ["Up","Down"] };
nx3.EDirectionUD.Up = ["Up",0];
nx3.EDirectionUD.Up.toString = $estr;
nx3.EDirectionUD.Up.__enum__ = nx3.EDirectionUD;
nx3.EDirectionUD.Down = ["Down",1];
nx3.EDirectionUD.Down.toString = $estr;
nx3.EDirectionUD.Down.__enum__ = nx3.EDirectionUD;
nx3.EDirectionUDTools = function() { };
nx3.EDirectionUDTools.__name__ = ["nx3","EDirectionUDTools"];
nx3.EDirectionUDTools.toUAD = function(direction) {
	if(direction == nx3.EDirectionUD.Up) return nx3.EDirectionUAD.Up; else return nx3.EDirectionUAD.Down;
};
nx3.EDisplayALN = { __ename__ : true, __constructs__ : ["Always","Layout","Never"] };
nx3.EDisplayALN.Always = ["Always",0];
nx3.EDisplayALN.Always.toString = $estr;
nx3.EDisplayALN.Always.__enum__ = nx3.EDisplayALN;
nx3.EDisplayALN.Layout = ["Layout",1];
nx3.EDisplayALN.Layout.toString = $estr;
nx3.EDisplayALN.Layout.__enum__ = nx3.EDisplayALN;
nx3.EDisplayALN.Never = ["Never",2];
nx3.EDisplayALN.Never.toString = $estr;
nx3.EDisplayALN.Never.__enum__ = nx3.EDisplayALN;
nx3.EHeadPosition = { __ename__ : true, __constructs__ : ["Left","Center","Right"] };
nx3.EHeadPosition.Left = ["Left",0];
nx3.EHeadPosition.Left.toString = $estr;
nx3.EHeadPosition.Left.__enum__ = nx3.EHeadPosition;
nx3.EHeadPosition.Center = ["Center",1];
nx3.EHeadPosition.Center.toString = $estr;
nx3.EHeadPosition.Center.__enum__ = nx3.EHeadPosition;
nx3.EHeadPosition.Right = ["Right",2];
nx3.EHeadPosition.Right.toString = $estr;
nx3.EHeadPosition.Right.__enum__ = nx3.EHeadPosition;
nx3.EHeadType = { __ename__ : true, __constructs__ : ["Normal","Rythmic","Crossed","Pause","Other"] };
nx3.EHeadType.Normal = ["Normal",0];
nx3.EHeadType.Normal.toString = $estr;
nx3.EHeadType.Normal.__enum__ = nx3.EHeadType;
nx3.EHeadType.Rythmic = ["Rythmic",1];
nx3.EHeadType.Rythmic.toString = $estr;
nx3.EHeadType.Rythmic.__enum__ = nx3.EHeadType;
nx3.EHeadType.Crossed = ["Crossed",2];
nx3.EHeadType.Crossed.toString = $estr;
nx3.EHeadType.Crossed.__enum__ = nx3.EHeadType;
nx3.EHeadType.Pause = ["Pause",3];
nx3.EHeadType.Pause.toString = $estr;
nx3.EHeadType.Pause.__enum__ = nx3.EHeadType;
nx3.EHeadType.Other = ["Other",4];
nx3.EHeadType.Other.toString = $estr;
nx3.EHeadType.Other.__enum__ = nx3.EHeadType;
nx3.EHeadValueType = { __ename__ : true, __constructs__ : ["HVT4","HVT2","HVT1"] };
nx3.EHeadValueType.HVT4 = ["HVT4",0];
nx3.EHeadValueType.HVT4.toString = $estr;
nx3.EHeadValueType.HVT4.__enum__ = nx3.EHeadValueType;
nx3.EHeadValueType.HVT2 = ["HVT2",1];
nx3.EHeadValueType.HVT2.toString = $estr;
nx3.EHeadValueType.HVT2.__enum__ = nx3.EHeadValueType;
nx3.EHeadValueType.HVT1 = ["HVT1",2];
nx3.EHeadValueType.HVT1.toString = $estr;
nx3.EHeadValueType.HVT1.__enum__ = nx3.EHeadValueType;
nx3.EKey = { __ename__ : true, __constructs__ : ["Sharp6","Sharp5","Sharp4","Sharp3","Sharp2","Sharp1","Natural","Flat1","Flat2","Flat3","Flat4","Flat5","Flat6"] };
nx3.EKey.Sharp6 = ["Sharp6",0];
nx3.EKey.Sharp6.toString = $estr;
nx3.EKey.Sharp6.__enum__ = nx3.EKey;
nx3.EKey.Sharp5 = ["Sharp5",1];
nx3.EKey.Sharp5.toString = $estr;
nx3.EKey.Sharp5.__enum__ = nx3.EKey;
nx3.EKey.Sharp4 = ["Sharp4",2];
nx3.EKey.Sharp4.toString = $estr;
nx3.EKey.Sharp4.__enum__ = nx3.EKey;
nx3.EKey.Sharp3 = ["Sharp3",3];
nx3.EKey.Sharp3.toString = $estr;
nx3.EKey.Sharp3.__enum__ = nx3.EKey;
nx3.EKey.Sharp2 = ["Sharp2",4];
nx3.EKey.Sharp2.toString = $estr;
nx3.EKey.Sharp2.__enum__ = nx3.EKey;
nx3.EKey.Sharp1 = ["Sharp1",5];
nx3.EKey.Sharp1.toString = $estr;
nx3.EKey.Sharp1.__enum__ = nx3.EKey;
nx3.EKey.Natural = ["Natural",6];
nx3.EKey.Natural.toString = $estr;
nx3.EKey.Natural.__enum__ = nx3.EKey;
nx3.EKey.Flat1 = ["Flat1",7];
nx3.EKey.Flat1.toString = $estr;
nx3.EKey.Flat1.__enum__ = nx3.EKey;
nx3.EKey.Flat2 = ["Flat2",8];
nx3.EKey.Flat2.toString = $estr;
nx3.EKey.Flat2.__enum__ = nx3.EKey;
nx3.EKey.Flat3 = ["Flat3",9];
nx3.EKey.Flat3.toString = $estr;
nx3.EKey.Flat3.__enum__ = nx3.EKey;
nx3.EKey.Flat4 = ["Flat4",10];
nx3.EKey.Flat4.toString = $estr;
nx3.EKey.Flat4.__enum__ = nx3.EKey;
nx3.EKey.Flat5 = ["Flat5",11];
nx3.EKey.Flat5.toString = $estr;
nx3.EKey.Flat5.__enum__ = nx3.EKey;
nx3.EKey.Flat6 = ["Flat6",12];
nx3.EKey.Flat6.toString = $estr;
nx3.EKey.Flat6.__enum__ = nx3.EKey;
nx3.EKeysTools = function() { };
nx3.EKeysTools.__name__ = ["nx3","EKeysTools"];
nx3.EKeysTools.getLevels = function(key,clef) {
	var result = new Array();
	switch(key[1]) {
	case 7:
		result = [0];
		break;
	case 8:
		result = [0,-3];
		break;
	case 9:
		result = [0,-3,1,-2];
		break;
	case 10:
		result = [0,-3,1,-2];
		break;
	case 11:
		result = [0,-3,1,-2,2,-1];
		break;
	case 12:
		result = [0,-3,1,-2,2,-1,3];
		break;
	case 5:
		result = [-4];
		break;
	case 4:
		result = [-4,-1];
		break;
	case 3:
		result = [-4,-1,-5];
		break;
	case 2:
		result = [-4,-1,-5,-2];
		break;
	case 1:
		result = [-4,-1,-5,-2,1];
		break;
	case 0:
		result = [-4,-1,-5,-2,1,-3];
		break;
	default:
		result = [];
	}
	var adjust;
	switch(clef[1]) {
	case 0:
		adjust = -1;
		break;
	case 1:
		adjust = 1;
		break;
	default:
		adjust = 0;
	}
	var _g1 = 0;
	var _g = result.length;
	while(_g1 < _g) {
		var i = _g1++;
		result[i] = result[i] + adjust;
	}
	return result;
};
nx3.EKeysTools.getSigncode = function(key) {
	switch(key[1]) {
	case 7:case 8:case 9:case 10:case 11:case 12:
		return -1;
	case 5:case 4:case 3:case 2:case 1:case 0:
		return 1;
	default:
		return 0;
	}
};
nx3.ELyricContinuation = { __ename__ : true, __constructs__ : ["Hyphen","Melisma"] };
nx3.ELyricContinuation.Hyphen = ["Hyphen",0];
nx3.ELyricContinuation.Hyphen.toString = $estr;
nx3.ELyricContinuation.Hyphen.__enum__ = nx3.ELyricContinuation;
nx3.ELyricContinuation.Melisma = ["Melisma",1];
nx3.ELyricContinuation.Melisma.toString = $estr;
nx3.ELyricContinuation.Melisma.__enum__ = nx3.ELyricContinuation;
nx3.ENotationVariant = { __ename__ : true, __constructs__ : ["Normal","Rythmic","RythmicSingleLevel","HeadsOnly","StavesOnly"] };
nx3.ENotationVariant.Normal = ["Normal",0];
nx3.ENotationVariant.Normal.toString = $estr;
nx3.ENotationVariant.Normal.__enum__ = nx3.ENotationVariant;
nx3.ENotationVariant.Rythmic = ["Rythmic",1];
nx3.ENotationVariant.Rythmic.toString = $estr;
nx3.ENotationVariant.Rythmic.__enum__ = nx3.ENotationVariant;
nx3.ENotationVariant.RythmicSingleLevel = function(level) { var $x = ["RythmicSingleLevel",2,level]; $x.__enum__ = nx3.ENotationVariant; $x.toString = $estr; return $x; };
nx3.ENotationVariant.HeadsOnly = ["HeadsOnly",3];
nx3.ENotationVariant.HeadsOnly.toString = $estr;
nx3.ENotationVariant.HeadsOnly.__enum__ = nx3.ENotationVariant;
nx3.ENotationVariant.StavesOnly = ["StavesOnly",4];
nx3.ENotationVariant.StavesOnly.toString = $estr;
nx3.ENotationVariant.StavesOnly.__enum__ = nx3.ENotationVariant;
nx3.ENoteArticulation = { __ename__ : true, __constructs__ : ["Staccato","Tenuto","Marcato"] };
nx3.ENoteArticulation.Staccato = ["Staccato",0];
nx3.ENoteArticulation.Staccato.toString = $estr;
nx3.ENoteArticulation.Staccato.__enum__ = nx3.ENoteArticulation;
nx3.ENoteArticulation.Tenuto = ["Tenuto",1];
nx3.ENoteArticulation.Tenuto.toString = $estr;
nx3.ENoteArticulation.Tenuto.__enum__ = nx3.ENoteArticulation;
nx3.ENoteArticulation.Marcato = ["Marcato",2];
nx3.ENoteArticulation.Marcato.toString = $estr;
nx3.ENoteArticulation.Marcato.__enum__ = nx3.ENoteArticulation;
nx3.ENoteAttributes = { __ename__ : true, __constructs__ : ["Arpeggio","Clef"] };
nx3.ENoteAttributes.Arpeggio = function(top,bottomY) { var $x = ["Arpeggio",0,top,bottomY]; $x.__enum__ = nx3.ENoteAttributes; $x.toString = $estr; return $x; };
nx3.ENoteAttributes.Clef = function(variant) { var $x = ["Clef",1,variant]; $x.__enum__ = nx3.ENoteAttributes; $x.toString = $estr; return $x; };
nx3.ENoteType = { __ename__ : true, __constructs__ : ["Note","Pause","BarPause","Tpl","Lyric","Chord","Dynamics"] };
nx3.ENoteType.Note = function(heads,variant,articulations,attributes) { var $x = ["Note",0,heads,variant,articulations,attributes]; $x.__enum__ = nx3.ENoteType; $x.toString = $estr; return $x; };
nx3.ENoteType.Pause = function(level) { var $x = ["Pause",1,level]; $x.__enum__ = nx3.ENoteType; $x.toString = $estr; return $x; };
nx3.ENoteType.BarPause = ["BarPause",2];
nx3.ENoteType.BarPause.toString = $estr;
nx3.ENoteType.BarPause.__enum__ = nx3.ENoteType;
nx3.ENoteType.Tpl = function(level) { var $x = ["Tpl",3,level]; $x.__enum__ = nx3.ENoteType; $x.toString = $estr; return $x; };
nx3.ENoteType.Lyric = function(text,offset,continuation,font) { var $x = ["Lyric",4,text,offset,continuation,font]; $x.__enum__ = nx3.ENoteType; $x.toString = $estr; return $x; };
nx3.ENoteType.Chord = ["Chord",5];
nx3.ENoteType.Chord.toString = $estr;
nx3.ENoteType.Chord.__enum__ = nx3.ENoteType;
nx3.ENoteType.Dynamics = ["Dynamics",6];
nx3.ENoteType.Dynamics.toString = $estr;
nx3.ENoteType.Dynamics.__enum__ = nx3.ENoteType;
nx3.ENoteVal = { __ename__ : true, __constructs__ : ["Nv1","Nv1dot","Nv1ddot","Nv1tri","Nv2","Nv2dot","Nv2ddot","Nv2tri","Nv4","Nv4dot","Nv4ddot","Nv4tri","Nv8","Nv8dot","Nv8ddot","Nv8tri","Nv16","Nv16dot","Nv16ddot","Nv16tri","Nv32","Nv32dot","Nv32ddot","Nv32tri"] };
nx3.ENoteVal.Nv1 = ["Nv1",0];
nx3.ENoteVal.Nv1.toString = $estr;
nx3.ENoteVal.Nv1.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv1dot = ["Nv1dot",1];
nx3.ENoteVal.Nv1dot.toString = $estr;
nx3.ENoteVal.Nv1dot.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv1ddot = ["Nv1ddot",2];
nx3.ENoteVal.Nv1ddot.toString = $estr;
nx3.ENoteVal.Nv1ddot.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv1tri = ["Nv1tri",3];
nx3.ENoteVal.Nv1tri.toString = $estr;
nx3.ENoteVal.Nv1tri.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv2 = ["Nv2",4];
nx3.ENoteVal.Nv2.toString = $estr;
nx3.ENoteVal.Nv2.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv2dot = ["Nv2dot",5];
nx3.ENoteVal.Nv2dot.toString = $estr;
nx3.ENoteVal.Nv2dot.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv2ddot = ["Nv2ddot",6];
nx3.ENoteVal.Nv2ddot.toString = $estr;
nx3.ENoteVal.Nv2ddot.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv2tri = ["Nv2tri",7];
nx3.ENoteVal.Nv2tri.toString = $estr;
nx3.ENoteVal.Nv2tri.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv4 = ["Nv4",8];
nx3.ENoteVal.Nv4.toString = $estr;
nx3.ENoteVal.Nv4.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv4dot = ["Nv4dot",9];
nx3.ENoteVal.Nv4dot.toString = $estr;
nx3.ENoteVal.Nv4dot.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv4ddot = ["Nv4ddot",10];
nx3.ENoteVal.Nv4ddot.toString = $estr;
nx3.ENoteVal.Nv4ddot.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv4tri = ["Nv4tri",11];
nx3.ENoteVal.Nv4tri.toString = $estr;
nx3.ENoteVal.Nv4tri.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv8 = ["Nv8",12];
nx3.ENoteVal.Nv8.toString = $estr;
nx3.ENoteVal.Nv8.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv8dot = ["Nv8dot",13];
nx3.ENoteVal.Nv8dot.toString = $estr;
nx3.ENoteVal.Nv8dot.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv8ddot = ["Nv8ddot",14];
nx3.ENoteVal.Nv8ddot.toString = $estr;
nx3.ENoteVal.Nv8ddot.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv8tri = ["Nv8tri",15];
nx3.ENoteVal.Nv8tri.toString = $estr;
nx3.ENoteVal.Nv8tri.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv16 = ["Nv16",16];
nx3.ENoteVal.Nv16.toString = $estr;
nx3.ENoteVal.Nv16.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv16dot = ["Nv16dot",17];
nx3.ENoteVal.Nv16dot.toString = $estr;
nx3.ENoteVal.Nv16dot.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv16ddot = ["Nv16ddot",18];
nx3.ENoteVal.Nv16ddot.toString = $estr;
nx3.ENoteVal.Nv16ddot.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv16tri = ["Nv16tri",19];
nx3.ENoteVal.Nv16tri.toString = $estr;
nx3.ENoteVal.Nv16tri.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv32 = ["Nv32",20];
nx3.ENoteVal.Nv32.toString = $estr;
nx3.ENoteVal.Nv32.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv32dot = ["Nv32dot",21];
nx3.ENoteVal.Nv32dot.toString = $estr;
nx3.ENoteVal.Nv32dot.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv32ddot = ["Nv32ddot",22];
nx3.ENoteVal.Nv32ddot.toString = $estr;
nx3.ENoteVal.Nv32ddot.__enum__ = nx3.ENoteVal;
nx3.ENoteVal.Nv32tri = ["Nv32tri",23];
nx3.ENoteVal.Nv32tri.toString = $estr;
nx3.ENoteVal.Nv32tri.__enum__ = nx3.ENoteVal;
nx3.ENoteValTools = function() { };
nx3.ENoteValTools.__name__ = ["nx3","ENoteValTools"];
nx3.ENoteValTools.beaminglevel = function(val) {
	switch(val[1]) {
	case 12:
		return 1;
	case 15:
		return 1;
	case 13:
		return 1;
	case 14:
		return 1;
	case 16:
		return 2;
	case 19:
		return 2;
	case 17:
		return 2;
	case 18:
		return 2;
	case 20:
		return 3;
	case 23:
		return 3;
	case 21:
		return 3;
	case 22:
		return 3;
	default:
		return 0;
	}
};
nx3.ENoteValTools.stavinglevel = function(val) {
	switch(val[1]) {
	case 0:
		return 0;
	case 3:
		return 0;
	case 1:
		return 0;
	case 2:
		return 0;
	default:
		return 1;
	}
};
nx3.ENoteValTools.dotlevel = function(val) {
	switch(val[1]) {
	case 1:case 5:case 9:case 13:case 17:case 21:
		return 1;
	case 2:case 6:case 10:case 14:case 18:case 22:
		return 2;
	default:
		return 0;
	}
};
nx3.ENoteValTools.head = function(val) {
	switch(val[1]) {
	case 0:
		return nx3.EHeadValueType.HVT1;
	case 3:
		return nx3.EHeadValueType.HVT1;
	case 1:
		return nx3.EHeadValueType.HVT1;
	case 2:
		return nx3.EHeadValueType.HVT1;
	case 4:
		return nx3.EHeadValueType.HVT2;
	case 7:
		return nx3.EHeadValueType.HVT2;
	case 5:
		return nx3.EHeadValueType.HVT2;
	case 6:
		return nx3.EHeadValueType.HVT2;
	default:
		return nx3.EHeadValueType.HVT4;
	}
};
nx3.ENoteValTools.value = function(noteval) {
	switch(noteval[1]) {
	case 0:
		return 12096;
	case 1:
		return 18144;
	case 2:
		return 21168;
	case 3:
		return 8063;
	case 4:
		return 6048;
	case 5:
		return 9072;
	case 6:
		return 10584;
	case 7:
		return 4031;
	case 8:
		return 3024;
	case 9:
		return 4536;
	case 10:
		return 5292;
	case 11:
		return 2015;
	case 12:
		return 1512;
	case 13:
		return 2268;
	case 14:
		return 2646;
	case 15:
		return 1007;
	case 16:
		return 756;
	case 17:
		return 1134;
	case 18:
		return 1323;
	case 19:
		return 503;
	case 20:
		return 378;
	case 21:
		return 567;
	case 22:
		return 661;
	case 23:
		return 251;
	}
};
nx3.ENoteValTools.getFromValue = function(value) {
	switch(value) {
	case 12096:
		return nx3.ENoteVal.Nv1;
	case 18144:
		return nx3.ENoteVal.Nv1dot;
	case 21168:
		return nx3.ENoteVal.Nv1ddot;
	case 8063:
		return nx3.ENoteVal.Nv1tri;
	case 6048:
		return nx3.ENoteVal.Nv2;
	case 9072:
		return nx3.ENoteVal.Nv2dot;
	case 10584:
		return nx3.ENoteVal.Nv2ddot;
	case 4031:
		return nx3.ENoteVal.Nv2tri;
	case 3024:
		return nx3.ENoteVal.Nv4;
	case 4536:
		return nx3.ENoteVal.Nv4dot;
	case 5292:
		return nx3.ENoteVal.Nv4ddot;
	case 2015:
		return nx3.ENoteVal.Nv4tri;
	case 1512:
		return nx3.ENoteVal.Nv8;
	case 2268:
		return nx3.ENoteVal.Nv8dot;
	case 2646:
		return nx3.ENoteVal.Nv8ddot;
	case 1007:
		return nx3.ENoteVal.Nv8tri;
	case 756:
		return nx3.ENoteVal.Nv16;
	case 1134:
		return nx3.ENoteVal.Nv16dot;
	case 1323:
		return nx3.ENoteVal.Nv16ddot;
	case 503:
		return nx3.ENoteVal.Nv16tri;
	case 378:
		return nx3.ENoteVal.Nv32;
	case 567:
		return nx3.ENoteVal.Nv32dot;
	case 661:
		return nx3.ENoteVal.Nv32ddot;
	case 251:
		return nx3.ENoteVal.Nv32tri;
	default:
		return null;
	}
};
nx3.ENoteValTools.toValString = function(val) {
	switch(val[1]) {
	case 0:
		return "1";
	case 1:
		return "1.";
	case 2:
		return "1..";
	case 3:
		return "1-3";
	case 4:
		return "2";
	case 5:
		return "2.";
	case 6:
		return "2..";
	case 7:
		return "2-3";
	case 8:
		return "4";
	case 9:
		return "4.";
	case 10:
		return "4..";
	case 11:
		return "4-3";
	case 12:
		return "8";
	case 13:
		return "8.";
	case 14:
		return "8..";
	case 15:
		return "8-3";
	case 16:
		return "16";
	case 17:
		return "16.";
	case 18:
		return "16..";
	case 19:
		return "16-3";
	case 20:
		return "32";
	case 21:
		return "32.";
	case 22:
		return "32..";
	case 23:
		return "32-3";
	}
};
nx3.ENoteValTools.fromValString = function(valString) {
	if(valString == null) return nx3.ENoteVal.Nv4; else switch(valString) {
	case "":
		return nx3.ENoteVal.Nv4;
	case "1":
		return nx3.ENoteVal.Nv1;
	case "1.":
		return nx3.ENoteVal.Nv1dot;
	case "1..":
		return nx3.ENoteVal.Nv1ddot;
	case "1-3":
		return nx3.ENoteVal.Nv1tri;
	case "2":
		return nx3.ENoteVal.Nv2;
	case "2.":
		return nx3.ENoteVal.Nv2dot;
	case "2..":
		return nx3.ENoteVal.Nv2ddot;
	case "2-3":
		return nx3.ENoteVal.Nv2tri;
	case "4":
		return nx3.ENoteVal.Nv4;
	case "4.":
		return nx3.ENoteVal.Nv4dot;
	case "4..":
		return nx3.ENoteVal.Nv4ddot;
	case "4-3":
		return nx3.ENoteVal.Nv4tri;
	case "8":
		return nx3.ENoteVal.Nv8;
	case "8.":
		return nx3.ENoteVal.Nv8dot;
	case "8..":
		return nx3.ENoteVal.Nv8ddot;
	case "8-3":
		return nx3.ENoteVal.Nv8tri;
	case "16":
		return nx3.ENoteVal.Nv16;
	case "16.":
		return nx3.ENoteVal.Nv16dot;
	case "16..":
		return nx3.ENoteVal.Nv16ddot;
	case "16-3":
		return nx3.ENoteVal.Nv16tri;
	case "32":
		return nx3.ENoteVal.Nv32;
	case "32.":
		return nx3.ENoteVal.Nv32dot;
	case "32..":
		return nx3.ENoteVal.Nv32ddot;
	case "32-3":
		return nx3.ENoteVal.Nv32tri;
	default:
		throw "unhandled note value: " + valString;
	}
};
nx3.EPartType = { __ename__ : true, __constructs__ : ["Normal","Lyrics","Tplrow","Tplchain","Dynamics","Chords","Ignore","Hidden"] };
nx3.EPartType.Normal = ["Normal",0];
nx3.EPartType.Normal.toString = $estr;
nx3.EPartType.Normal.__enum__ = nx3.EPartType;
nx3.EPartType.Lyrics = ["Lyrics",1];
nx3.EPartType.Lyrics.toString = $estr;
nx3.EPartType.Lyrics.__enum__ = nx3.EPartType;
nx3.EPartType.Tplrow = ["Tplrow",2];
nx3.EPartType.Tplrow.toString = $estr;
nx3.EPartType.Tplrow.__enum__ = nx3.EPartType;
nx3.EPartType.Tplchain = ["Tplchain",3];
nx3.EPartType.Tplchain.toString = $estr;
nx3.EPartType.Tplchain.__enum__ = nx3.EPartType;
nx3.EPartType.Dynamics = ["Dynamics",4];
nx3.EPartType.Dynamics.toString = $estr;
nx3.EPartType.Dynamics.__enum__ = nx3.EPartType;
nx3.EPartType.Chords = ["Chords",5];
nx3.EPartType.Chords.toString = $estr;
nx3.EPartType.Chords.__enum__ = nx3.EPartType;
nx3.EPartType.Ignore = ["Ignore",6];
nx3.EPartType.Ignore.toString = $estr;
nx3.EPartType.Ignore.__enum__ = nx3.EPartType;
nx3.EPartType.Hidden = ["Hidden",7];
nx3.EPartType.Hidden.toString = $estr;
nx3.EPartType.Hidden.__enum__ = nx3.EPartType;
nx3.EPosition = { __ename__ : true, __constructs__ : ["X","Y","XY","XYW"] };
nx3.EPosition.X = function(x) { var $x = ["X",0,x]; $x.__enum__ = nx3.EPosition; $x.toString = $estr; return $x; };
nx3.EPosition.Y = function(y) { var $x = ["Y",1,y]; $x.__enum__ = nx3.EPosition; $x.toString = $estr; return $x; };
nx3.EPosition.XY = function(x,y) { var $x = ["XY",2,x,y]; $x.__enum__ = nx3.EPosition; $x.toString = $estr; return $x; };
nx3.EPosition.XYW = function(x,y,w) { var $x = ["XYW",3,x,y,w]; $x.__enum__ = nx3.EPosition; $x.toString = $estr; return $x; };
nx3.ESign = { __ename__ : true, __constructs__ : ["None","Natural","Flat","Sharp","DoubleFlat","DoubleSharp","ParNatural","ParFlat","ParSharp"] };
nx3.ESign.None = ["None",0];
nx3.ESign.None.toString = $estr;
nx3.ESign.None.__enum__ = nx3.ESign;
nx3.ESign.Natural = ["Natural",1];
nx3.ESign.Natural.toString = $estr;
nx3.ESign.Natural.__enum__ = nx3.ESign;
nx3.ESign.Flat = ["Flat",2];
nx3.ESign.Flat.toString = $estr;
nx3.ESign.Flat.__enum__ = nx3.ESign;
nx3.ESign.Sharp = ["Sharp",3];
nx3.ESign.Sharp.toString = $estr;
nx3.ESign.Sharp.__enum__ = nx3.ESign;
nx3.ESign.DoubleFlat = ["DoubleFlat",4];
nx3.ESign.DoubleFlat.toString = $estr;
nx3.ESign.DoubleFlat.__enum__ = nx3.ESign;
nx3.ESign.DoubleSharp = ["DoubleSharp",5];
nx3.ESign.DoubleSharp.toString = $estr;
nx3.ESign.DoubleSharp.__enum__ = nx3.ESign;
nx3.ESign.ParNatural = ["ParNatural",6];
nx3.ESign.ParNatural.toString = $estr;
nx3.ESign.ParNatural.__enum__ = nx3.ESign;
nx3.ESign.ParFlat = ["ParFlat",7];
nx3.ESign.ParFlat.toString = $estr;
nx3.ESign.ParFlat.__enum__ = nx3.ESign;
nx3.ESign.ParSharp = ["ParSharp",8];
nx3.ESign.ParSharp.toString = $estr;
nx3.ESign.ParSharp.__enum__ = nx3.ESign;
nx3.ETie = { __ename__ : true, __constructs__ : ["Tie","Gliss"] };
nx3.ETie.Tie = function(direction,level) { var $x = ["Tie",0,direction,level]; $x.__enum__ = nx3.ETie; $x.toString = $estr; return $x; };
nx3.ETie.Gliss = function(direction,levelLeft,levelRight) { var $x = ["Gliss",1,direction,levelLeft,levelRight]; $x.__enum__ = nx3.ETie; $x.toString = $estr; return $x; };
nx3.ETime = { __ename__ : true, __constructs__ : ["Time2_2","Time3_2","Time4_2","Time2_4","Time3_4","Time4_4","Time5_4","Time6_4","Time7_4","Time2_8","Time3_8","Time4_8","Time5_8","Time6_8","Time7_8","Time9_8","Time12_8","TimeCommon","TimeAllabreve"] };
nx3.ETime.Time2_2 = ["Time2_2",0];
nx3.ETime.Time2_2.toString = $estr;
nx3.ETime.Time2_2.__enum__ = nx3.ETime;
nx3.ETime.Time3_2 = ["Time3_2",1];
nx3.ETime.Time3_2.toString = $estr;
nx3.ETime.Time3_2.__enum__ = nx3.ETime;
nx3.ETime.Time4_2 = ["Time4_2",2];
nx3.ETime.Time4_2.toString = $estr;
nx3.ETime.Time4_2.__enum__ = nx3.ETime;
nx3.ETime.Time2_4 = ["Time2_4",3];
nx3.ETime.Time2_4.toString = $estr;
nx3.ETime.Time2_4.__enum__ = nx3.ETime;
nx3.ETime.Time3_4 = ["Time3_4",4];
nx3.ETime.Time3_4.toString = $estr;
nx3.ETime.Time3_4.__enum__ = nx3.ETime;
nx3.ETime.Time4_4 = ["Time4_4",5];
nx3.ETime.Time4_4.toString = $estr;
nx3.ETime.Time4_4.__enum__ = nx3.ETime;
nx3.ETime.Time5_4 = ["Time5_4",6];
nx3.ETime.Time5_4.toString = $estr;
nx3.ETime.Time5_4.__enum__ = nx3.ETime;
nx3.ETime.Time6_4 = ["Time6_4",7];
nx3.ETime.Time6_4.toString = $estr;
nx3.ETime.Time6_4.__enum__ = nx3.ETime;
nx3.ETime.Time7_4 = ["Time7_4",8];
nx3.ETime.Time7_4.toString = $estr;
nx3.ETime.Time7_4.__enum__ = nx3.ETime;
nx3.ETime.Time2_8 = ["Time2_8",9];
nx3.ETime.Time2_8.toString = $estr;
nx3.ETime.Time2_8.__enum__ = nx3.ETime;
nx3.ETime.Time3_8 = ["Time3_8",10];
nx3.ETime.Time3_8.toString = $estr;
nx3.ETime.Time3_8.__enum__ = nx3.ETime;
nx3.ETime.Time4_8 = ["Time4_8",11];
nx3.ETime.Time4_8.toString = $estr;
nx3.ETime.Time4_8.__enum__ = nx3.ETime;
nx3.ETime.Time5_8 = ["Time5_8",12];
nx3.ETime.Time5_8.toString = $estr;
nx3.ETime.Time5_8.__enum__ = nx3.ETime;
nx3.ETime.Time6_8 = ["Time6_8",13];
nx3.ETime.Time6_8.toString = $estr;
nx3.ETime.Time6_8.__enum__ = nx3.ETime;
nx3.ETime.Time7_8 = ["Time7_8",14];
nx3.ETime.Time7_8.toString = $estr;
nx3.ETime.Time7_8.__enum__ = nx3.ETime;
nx3.ETime.Time9_8 = ["Time9_8",15];
nx3.ETime.Time9_8.toString = $estr;
nx3.ETime.Time9_8.__enum__ = nx3.ETime;
nx3.ETime.Time12_8 = ["Time12_8",16];
nx3.ETime.Time12_8.toString = $estr;
nx3.ETime.Time12_8.__enum__ = nx3.ETime;
nx3.ETime.TimeCommon = ["TimeCommon",17];
nx3.ETime.TimeCommon.toString = $estr;
nx3.ETime.TimeCommon.__enum__ = nx3.ETime;
nx3.ETime.TimeAllabreve = ["TimeAllabreve",18];
nx3.ETime.TimeAllabreve.toString = $estr;
nx3.ETime.TimeAllabreve.__enum__ = nx3.ETime;
nx3.ETimeUtils = function() { };
nx3.ETimeUtils.__name__ = ["nx3","ETimeUtils"];
nx3.ETimeUtils.toString = function(time) {
	switch(time[1]) {
	case 0:
		return "2/2";
	case 1:
		return "3/2";
	case 2:
		return "4/2";
	case 8:
		return "7/4";
	case 7:
		return "6/4";
	case 6:
		return "5/4";
	case 5:
		return "4/4";
	case 4:
		return "3/4";
	case 3:
		return "2/4";
	case 9:
		return "2/8";
	case 10:
		return "3/8";
	case 11:
		return "4/8";
	case 12:
		return "5/8";
	case 13:
		return "6/8";
	case 14:
		return "7/8";
	case 15:
		return "9/8";
	case 16:
		return "12/8";
	case 17:
		return "C";
	case 18:
		return "AllaBreve";
	}
	return "time-unknown";
};
nx3.ETimeUtils.fromString = function(str) {
	if(str == null) return null;
	switch(str) {
	case "4/2":
		return nx3.ETime.Time4_2;
	case "3/2":
		return nx3.ETime.Time3_2;
	case "224":
		return nx3.ETime.Time2_2;
	case "7/4":
		return nx3.ETime.Time7_4;
	case "6/4":
		return nx3.ETime.Time6_4;
	case "5/4":
		return nx3.ETime.Time5_4;
	case "4/4":
		return nx3.ETime.Time4_4;
	case "3/4":
		return nx3.ETime.Time3_4;
	case "2/4":
		return nx3.ETime.Time2_4;
	case "2/8":
		return nx3.ETime.Time2_8;
	case "3/8":
		return nx3.ETime.Time3_8;
	case "4/8":
		return nx3.ETime.Time4_8;
	case "5/8":
		return nx3.ETime.Time5_8;
	case "6/8":
		return nx3.ETime.Time6_8;
	case "7/8":
		return nx3.ETime.Time7_8;
	case "9/8":
		return nx3.ETime.Time9_8;
	case "12/8":
		return nx3.ETime.Time12_8;
	case "C":
		return nx3.ETime.TimeCommon;
	case "AllaBreve":
		return nx3.ETime.TimeAllabreve;
	default:
		return null;
	}
	return null;
};
nx3.EVoiceType = { __ename__ : true, __constructs__ : ["Normal","Barpause"] };
nx3.EVoiceType.Normal = ["Normal",0];
nx3.EVoiceType.Normal.toString = $estr;
nx3.EVoiceType.Normal.__enum__ = nx3.EVoiceType;
nx3.EVoiceType.Barpause = function(level) { var $x = ["Barpause",1,level]; $x.__enum__ = nx3.EVoiceType; $x.toString = $estr; return $x; };
nx3.IBarWidthCalculator = function() { };
nx3.IBarWidthCalculator.__name__ = ["nx3","IBarWidthCalculator"];
nx3.IBarWidthCalculator.prototype = {
	getLeftBarlineWidth: null
	,getClefWidth: null
	,getKeyWidth: null
	,getTimeWidth: null
	,getContentLeftMarginWidth: null
	,getContentWidth: null
	,getBarlineWidth: null
	,getClefsWidth: null
	,getKeysWidth: null
	,__class__: nx3.IBarWidthCalculator
};
nx3.NBar = function(parts,type,time,timeDisplay,allotment,spacing) {
	if(spacing == null) spacing = 8;
	this.nparts = parts;
	var _g = 0;
	while(_g < parts.length) {
		var part = parts[_g];
		++_g;
		part.nbar = this;
	}
	if(type == null) this.type = nx3.EBarType.Normal; else this.type = type;
	this.time = time;
	if(timeDisplay == null) this.timeDisplay = nx3.EDisplayALN.Layout; else this.timeDisplay = timeDisplay;
	if(allotment == null) this.allotment = nx3.EAllotment.Logaritmic; else this.allotment = allotment;
	this.spacing = spacing;
};
nx3.NBar.__name__ = ["nx3","NBar"];
nx3.NBar.prototype = {
	nscore: null
	,nparts: null
	,type: null
	,time: null
	,timeDisplay: null
	,allotment: null
	,spacing: null
	,getNNote: function(partIdx,voiceIdx,noteIdx) {
		return this.getNPart(partIdx).getNVoice(voiceIdx).getNNote(noteIdx);
	}
	,getNPart: function(idx) {
		if(idx < 0 || idx > this.nparts.length) return null; else return this.nparts[idx];
	}
	,iterator: function() {
		return HxOverrides.iter(this.nparts);
	}
	,length: null
	,get_length: function() {
		return this.nparts.length;
	}
	,__class__: nx3.NBar
};
nx3.NHead = function(type,level,sign,tie,tieTo) {
	if(level == null) level = 0;
	if(type != null) this.type = type; else this.type = nx3.EHeadType.Normal;
	if(sign != null) this.sign = sign; else this.sign = nx3.ESign.None;
	if(tie != null) this.tie = tie; else this.tie = null;
	if(tieTo != null) this.tieTo = tieTo; else this.tieTo = null;
	this.level = level;
};
nx3.NHead.__name__ = ["nx3","NHead"];
nx3.NHead.prototype = {
	level: null
	,type: null
	,sign: null
	,tie: null
	,tieTo: null
	,nnote: null
	,toString: function() {
		var str = "" + this.level;
		if(this.type != nx3.EHeadType.Normal) str += " " + this.type[0]; else str += "";
		if(this.sign != nx3.ESign.None) str += " " + this.sign[0]; else str += "";
		return "NHead(" + str + ")";
	}
	,__class__: nx3.NHead
};
nx3.NNote = function(type,heads,value,direction) {
	if(type == null) if(heads != null) type = nx3.ENoteType.Note(heads); else type = nx3.ENoteType.Note([new nx3.NHead()]);
	if(heads != null) {
		var _g = 0;
		while(_g < heads.length) {
			var head = heads[_g];
			++_g;
			head.nnote = this;
		}
	}
	if(type == null) this.type = nx3.ENoteType.Note(heads); else this.type = type;
	if(value == null) this.value = nx3.ENoteVal.Nv4; else this.value = value;
	if(direction == null) this.direction = nx3.EDirectionUAD.Auto; else this.direction = direction;
};
nx3.NNote.__name__ = ["nx3","NNote"];
nx3.NNote.__interfaces__ = [hxlazy.Lazy];
nx3.NNote.prototype = {
	type: null
	,value: null
	,direction: null
	,nheads: null
	,nvoice: null
	,iterator: function() {
		var _this = this.get_nheads();
		return HxOverrides.iter(_this);
	}
	,length: null
	,get_length: function() {
		return this.get_nheads().length;
	}
	,nheads_: null
	,get_nheads: function() {
		if(this.nheads_ != null) return this.nheads_;
		{
			var _g = this.type;
			switch(_g[1]) {
			case 0:
				var attributes = _g[5];
				var articulations = _g[4];
				var variant = _g[3];
				var nheads = _g[2];
				nheads.sort(function(a,b) {
					return Reflect.compare(a.level,b.level);
				});
				this.nheads_ = nheads;
				break;
			case 1:
				var level = _g[2];
				this.nheads_ = [new nx3.NHead(nx3.EHeadType.Pause,level)];
				break;
			default:
				this.nheads_ = [new nx3.NHead(nx3.EHeadType.Other,0)];
			}
		}
		return this.nheads_;
	}
	,getNHead: function(idx) {
		if(idx < 0 || idx > this.get_nheads().length) return null; else return this.get_nheads()[idx];
	}
	,toString: function() {
		var str = "";
		if(this.type[0] != "Note") str += " " + this.type[0]; else str += "";
		var heads = "";
		var _g = 0;
		var _g1 = this.get_nheads();
		while(_g < _g1.length) {
			var head = _g1[_g];
			++_g;
			heads += head.toString();
		}
		return "NNote(" + str + "):" + heads;
	}
	,__lazyheadLevels: null
	,get_headLevels: function() {
		if(this.__lazyheadLevels != null) return this.__lazyheadLevels;
		return this.__lazyheadLevels = Lambda.array(Lambda.map(this,function(head) {
			return head.level;
		}));
	}
	,__lazytopLevel: null
	,get_topLevel: function() {
		if(this.__lazytopLevel != null) return this.__lazytopLevel;
		return this.__lazytopLevel = this.get_nheads()[0].level;
	}
	,__lazybottomLevel: null
	,get_bottomLevel: function() {
		if(this.__lazybottomLevel != null) return this.__lazybottomLevel;
		return this.__lazybottomLevel = this.get_nheads()[this.get_nheads().length - 1].level;
	}
	,__lazyties: null
	,get_ties: function() {
		if(this.__lazyties != null) return this.__lazyties;
		return this.__lazyties = Lambda.array(Lambda.filter(this,function(head) {
			return head.tie != null;
		}).map(function(head1) {
			return head1.tie;
		}));
	}
	,__class__: nx3.NNote
};
nx3.NPart = function(voices,type,clef,clefDisplay,key,keyDisplay) {
	this.nvoices = voices;
	var _g = 0;
	while(_g < voices.length) {
		var voice = voices[_g];
		++_g;
		voice.npart = this;
	}
	if(this.nvoices.length > 2) throw "For now, NPart can't have more than two voices";
	if(type == null) this.type = nx3.EPartType.Normal; else this.type = type;
	this.clef = clef;
	if(clefDisplay == null) this.clefDisplay = nx3.EDisplayALN.Layout; else this.clefDisplay = clefDisplay;
	this.key = key;
	if(keyDisplay == null) this.keyDisplay = nx3.EDisplayALN.Layout; else this.keyDisplay = keyDisplay;
};
nx3.NPart.__name__ = ["nx3","NPart"];
nx3.NPart.prototype = {
	iterator: function() {
		return HxOverrides.iter(this.nvoices);
	}
	,length: null
	,get_length: function() {
		return this.nvoices.length;
	}
	,nbar: null
	,type: null
	,nvoices: null
	,clef: null
	,clefDisplay: null
	,key: null
	,keyDisplay: null
	,getNVoice: function(idx) {
		if(idx < 0 || idx > this.nvoices.length) return null; else return this.nvoices[idx];
	}
	,__class__: nx3.NPart
};
nx3.NScore = function(nbars) {
	this.nbars = nbars;
	var _g = 0;
	while(_g < nbars.length) {
		var bar = nbars[_g];
		++_g;
		bar.nscore = this;
	}
	this.configuration = { };
	this.configuration.test = 123;
	this.configuration.rtempo = 80;
	this.configuration.rlength = 3;
	this.configuration.rcountin = 2;
};
nx3.NScore.__name__ = ["nx3","NScore"];
nx3.NScore.prototype = {
	nbars: null
	,configuration: null
	,getNBar: function(idx) {
		if(idx < 0 || idx > this.nbars.length) return null; else return this.nbars[idx];
	}
	,iterator: function() {
		return HxOverrides.iter(this.nbars);
	}
	,length: null
	,get_length: function() {
		return this.nbars.length;
	}
	,__class__: nx3.NScore
};
nx3.NVoice = function(notes,type,direction) {
	if(notes == null || notes.length == 0) {
		this.nnotes = [];
		this.type = nx3.EVoiceType.Barpause(0);
	} else {
		this.nnotes = notes;
		if(type != null) this.type = type; else this.type = nx3.EVoiceType.Normal;
	}
	var _g = 0;
	while(_g < notes.length) {
		var note = notes[_g];
		++_g;
		note.nvoice = this;
	}
	if(direction != null) this.direction = direction; else this.direction = nx3.EDirectionUAD.Auto;
};
nx3.NVoice.__name__ = ["nx3","NVoice"];
nx3.NVoice.prototype = {
	direction: null
	,nnotes: null
	,type: null
	,npart: null
	,iterator: function() {
		return HxOverrides.iter(this.nnotes);
	}
	,length: null
	,get_length: function() {
		return this.nnotes.length;
	}
	,getNNote: function(idx) {
		if(idx < 0 || idx > this.nnotes.length) return null; else return this.nnotes[idx];
	}
	,__class__: nx3.NVoice
};
nx3.PAttributesRectsCalculator = function() { };
nx3.PAttributesRectsCalculator.__name__ = ["nx3","PAttributesRectsCalculator"];
nx3.PAttributesRectsCalculator.getClefRect = function(clef) {
	switch(clef[1]) {
	case 2:
		return new nx3.geom.Rectangle(0,-3,9,6);
	case 1:
		return new nx3.geom.Rectangle(0,-4,9,8);
	case 0:
		return new nx3.geom.Rectangle(0,-5,9,10);
	}
};
nx3.PAttributesRectsCalculator.getKeyRect = function(key) {
	switch(key[1]) {
	case 6:
		return new nx3.geom.Rectangle(0,-3,1,6);
	case 7:case 5:
		return new nx3.geom.Rectangle(0,-3,4.4,6);
	case 8:case 4:
		return new nx3.geom.Rectangle(0,-3,6.8,6);
	case 9:case 3:
		return new nx3.geom.Rectangle(0,-3,9.2,6);
	case 10:case 2:
		return new nx3.geom.Rectangle(0,-3,11.6,6);
	case 11:case 1:
		return new nx3.geom.Rectangle(0,-3,14.,6);
	default:
		return new nx3.geom.Rectangle(0,-2,.5,4);
	}
};
nx3.PAttributesRectsCalculator.getTimeRect = function(time) {
	if(time == null) return new nx3.geom.Rectangle(0,-3,.5,3);
	switch(time[1]) {
	case 16:
		return new nx3.geom.Rectangle(0,-3,6,6);
	default:
		return new nx3.geom.Rectangle(0,-3,4,3);
	}
};
nx3.PBamegroupFrameTipCalculator = function(notelevels,direction) {
	if(direction == nx3.EDirectionUD.Down) {
		var invertedLevels = new Array();
		var _g = 0;
		while(_g < notelevels.length) {
			var level = notelevels[_g];
			++_g;
			invertedLevels.push(level * -1);
		}
		notelevels = invertedLevels;
	}
	this.notelevels = notelevels;
	this.direction = direction;
};
nx3.PBamegroupFrameTipCalculator.__name__ = ["nx3","PBamegroupFrameTipCalculator"];
nx3.PBamegroupFrameTipCalculator.floatMin = function(levels) {
	var result = levels[0];
	if(levels.length == 1) return result;
	var _g = 0;
	while(_g < levels.length) {
		var level = levels[_g];
		++_g;
		result = Math.min(result,level);
	}
	return result;
};
nx3.PBamegroupFrameTipCalculator.intMin = function(levels) {
	var result = levels[0];
	if(levels.length == 1) return result;
	var _g = 0;
	while(_g < levels.length) {
		var level = levels[_g];
		++_g;
		result = Std["int"](Math.min(result,level));
	}
	return result;
};
nx3.PBamegroupFrameTipCalculator.intMax = function(levels) {
	var result = levels[0];
	if(levels.length == 1) return result;
	var _g = 0;
	while(_g < levels.length) {
		var level = levels[_g];
		++_g;
		result = Std["int"](Math.max(result,level));
	}
	return result;
};
nx3.PBamegroupFrameTipCalculator.prototype = {
	notelevels: null
	,direction: null
	,getTips: function() {
		var stemLength = 7;
		var min = nx3.PBamegroupFrameTipCalculator.intMin(this.notelevels);
		var leftTip = this.notelevels[0];
		var rightTip = cx.ArrayTools.last(this.notelevels);
		if(this.notelevels.length == 2) {
			var slopevalue = 1;
			leftTip = nx3.PBamegroupFrameTipCalculator.floatMin([leftTip,rightTip + slopevalue,stemLength]);
			rightTip = nx3.PBamegroupFrameTipCalculator.floatMin([rightTip,leftTip + slopevalue,stemLength]);
		} else {
			var slopevalue1 = this.notelevels.length * .25;
			var inlevels = this.notelevels.slice();
			inlevels.shift();
			inlevels.pop();
			var inmin = nx3.PBamegroupFrameTipCalculator.intMin(inlevels);
			if(leftTip >= inmin && rightTip >= inmin) {
				leftTip = inmin;
				rightTip = inmin;
			} else if(rightTip < leftTip && min < leftTip) leftTip = nx3.PBamegroupFrameTipCalculator.floatMin([min + slopevalue1,leftTip]); else if(leftTip < rightTip && min < rightTip) rightTip = nx3.PBamegroupFrameTipCalculator.floatMin([min + slopevalue1,rightTip]);
		}
		leftTip = Std["int"](Math.min(stemLength,leftTip));
		rightTip = Std["int"](Math.min(stemLength,rightTip));
		if(this.direction == nx3.EDirectionUD.Down) return { leftTip : -leftTip, rightTip : -rightTip};
		return { leftTip : leftTip, rightTip : rightTip};
	}
	,__class__: nx3.PBamegroupFrameTipCalculator
};
nx3.PBar = function(nbar) {
	this.stretchwidth = 0;
	this._keys = null;
	this._clefs = null;
	this.nbar = nbar;
	this.value = 0;
};
nx3.PBar.__name__ = ["nx3","PBar"];
nx3.PBar.prototype = {
	nbar: null
	,iterator: function() {
		var _this = this.getParts();
		return HxOverrides.iter(_this);
	}
	,length: null
	,get_length: function() {
		return this.getParts().length;
	}
	,score: null
	,getScore: function() {
		return this.score;
	}
	,systembar: null
	,getSystembar: function() {
		return this.systembar;
	}
	,clefs: null
	,keys: null
	,time: null
	,_clefs: null
	,get_clefs: function() {
		if(this._clefs != null) return this._clefs;
		this._clefs = new Array();
		var _g = 0;
		var _g1 = this.getParts();
		while(_g < _g1.length) {
			var vpart = _g1[_g];
			++_g;
			this._clefs.push(vpart.npart.clef);
		}
		return this._clefs;
	}
	,_keys: null
	,get_keys: function() {
		if(this._keys != null) return this._keys;
		this._keys = new Array();
		var _g = 0;
		var _g1 = this.getParts();
		while(_g < _g1.length) {
			var vpart = _g1[_g];
			++_g;
			this._keys.push(vpart.npart.key);
		}
		return this._keys;
	}
	,get_time: function() {
		return this.nbar.time;
	}
	,displayClefs: null
	,displayKeys: null
	,displayTime: null
	,get_displayClefs: function() {
		var result = nx3.EDisplayALN.Never;
		var _g = 0;
		var _g1 = this.getParts();
		while(_g < _g1.length) {
			var vpart = _g1[_g];
			++_g;
			if(vpart.npart.clefDisplay == null) result = nx3.EDisplayALN.Layout;
			if(vpart.npart.clefDisplay == nx3.EDisplayALN.Layout) result = nx3.EDisplayALN.Layout;
			if(vpart.npart.clefDisplay == nx3.EDisplayALN.Always) {
				result = nx3.EDisplayALN.Always;
				break;
			}
		}
		return result;
	}
	,get_displayKeys: function() {
		var result = nx3.EDisplayALN.Never;
		var _g = 0;
		var _g1 = this.getParts();
		while(_g < _g1.length) {
			var vpart = _g1[_g];
			++_g;
			if(vpart.npart.keyDisplay == null) result = nx3.EDisplayALN.Layout;
			if(vpart.npart.keyDisplay == nx3.EDisplayALN.Layout) result = nx3.EDisplayALN.Layout;
			if(vpart.npart.keyDisplay == nx3.EDisplayALN.Always) {
				result = nx3.EDisplayALN.Always;
				break;
			}
		}
		return result;
	}
	,get_displayTime: function() {
		var result;
		if(this.nbar.timeDisplay != null) result = this.nbar.timeDisplay; else result = nx3.EDisplayALN.Layout;
		return this.nbar.timeDisplay;
	}
	,parts: null
	,getParts: function() {
		if(this.parts != null) return this.parts;
		this.parts = [];
		var _g = 0;
		var _g1 = this.nbar.nparts;
		while(_g < _g1.length) {
			var npart = _g1[_g];
			++_g;
			var ppart = new nx3.PPart(npart);
			ppart.bar = this;
			this.parts.push(ppart);
		}
		return this.parts;
	}
	,getPart: function(idx) {
		if(idx < 0 || idx > this.getParts().length) return null; else return this.getParts()[idx];
	}
	,columns: null
	,getColumns: function() {
		if(this.columns != null) return this.columns;
		var generator = new nx3.PColumnsGenerator(this);
		this.columns = generator.getColumns();
		this.calculateMDistances();
		return this.columns;
	}
	,getIndex: function() {
		var _this = this.getScore().getBars();
		return HxOverrides.indexOf(_this,this,0);
	}
	,calculateMDistances: function() {
		if(this.columns == null) this.getColumns();
		new nx3.PColumnsDistancesCalculator(this).calculate();
	}
	,calculateAPositions: function() {
		new nx3.PColumnsAllotmentCalculator(this).calculate();
	}
	,value: null
	,getValue: function() {
		if(this.value != 0) return this.value;
		var _g = 0;
		var _g1 = this.getParts();
		while(_g < _g1.length) {
			var part = _g1[_g];
			++_g;
			this.value = Std["int"](Math.max(this.value,part.getValue()));
		}
		return this.value;
	}
	,contentwidth: null
	,getContentwidth: function() {
		if(this.contentwidth != null) return this.contentwidth;
		var lastcolumn = cx.ArrayTools.last(this.getColumns());
		this.contentwidth = lastcolumn.getAPostion() + Math.max(lastcolumn.getADistance(),lastcolumn.getRightX());
		return this.contentwidth;
	}
	,contentx: null
	,getContentXZero: function() {
		var firstcolumn = cx.ArrayTools.first(this.getColumns());
		this.contentx = -firstcolumn.getLeftX();
		return this.contentx;
	}
	,stretchwidth: null
	,allottedDistanceSum: null
	,getAllottedDistanceSum: function() {
		if(this.allottedDistanceSum != null) return this.allottedDistanceSum;
		this.getContentwidth();
		return this.allottedDistanceSum;
	}
	,getStretchWidth: function() {
		return this.stretchwidth;
	}
	,tieconnections: null
	,getTieConnections: function() {
		if(this.tieconnections != null) return this.tieconnections;
		this.tieconnections = [];
		var nextBar = cx.ArrayTools.indexOrNull(this.score.getBars(),this.getIndex() + 1);
		if(nextBar == null) return this.tieconnections;
		var _g = 0;
		var _g1 = this.getParts();
		while(_g < _g1.length) {
			var part = _g1[_g];
			++_g;
			var nextPart = cx.ArrayTools.indexOrNull(nextBar.getParts(),part.getIndex());
			var _g2 = 0;
			var _g3 = part.getVoices();
			while(_g2 < _g3.length) {
				var voice = _g3[_g2];
				++_g2;
				var lastnote = cx.ArrayTools.last(voice.getNotes());
				if(!lastnote.getHasTie()) continue;
				var _g4 = 0;
				var _g5 = lastnote.nnote.get_nheads();
				while(_g4 < _g5.length) {
					var nhead = _g5[_g4];
					++_g4;
					if(nhead.tie != null) {
						var level = nhead.level;
						var nextPart1 = cx.ArrayTools.indexOrNull(nextBar.getParts(),part.getIndex());
						if(nextPart1 == null) break;
						var _g6 = 0;
						var _g7 = nextPart1.getVoices();
						while(_g6 < _g7.length) {
							var voice1 = _g7[_g6];
							++_g6;
							var nextnote = cx.ArrayTools.first(voice1.getNotes());
							var _g8 = 0;
							var _g9 = nextnote.nnote.get_nheads();
							while(_g8 < _g9.length) {
								var nnhead = _g9[_g8];
								++_g8;
								if(nnhead.level == nhead.level) {
									this.tieconnections.push({ from : lastnote, to : nextnote, level : nhead.level, tie : nhead.tie});
									break;
								}
							}
						}
					}
				}
			}
		}
		return this.tieconnections;
	}
	,__class__: nx3.PBar
};
nx3.PBarConfig = function(showClef,showKey,showTime,showCautClef,showCautKey,showCautTime) {
	if(showCautTime == null) showCautTime = false;
	if(showCautKey == null) showCautKey = false;
	if(showCautClef == null) showCautClef = false;
	if(showTime == null) showTime = false;
	if(showKey == null) showKey = false;
	if(showClef == null) showClef = false;
	this.showClef = showClef;
	this.showKey = showKey;
	this.showTime = showTime;
	this.showCautClef = showCautClef;
	this.showCautKey = showCautKey;
	this.showCautTime = showCautTime;
};
nx3.PBarConfig.__name__ = ["nx3","PBarConfig"];
nx3.PBarConfig.prototype = {
	showClef: null
	,showKey: null
	,showTime: null
	,showCautClef: null
	,showCautKey: null
	,showCautTime: null
	,calculatedWidth: null
	,__class__: nx3.PBarConfig
};
nx3.PBarStretchCalculator = function(systembar) {
	this.systembar = systembar;
};
nx3.PBarStretchCalculator.__name__ = ["nx3","PBarStretchCalculator"];
nx3.PBarStretchCalculator.prototype = {
	systembar: null
	,stretch: function(amount) {
		this.systembar.getBarMeasurements().setContentWidth(this.systembar.getBarMeasurements().getContentWidth() + amount);
		if(this.systembar.bar.getColumns().length < 2) return;
		var columns = this.systembar.bar.getColumns();
		var firstcolumn = columns[0];
		var aDistance = new haxe.ds.ObjectMap();
		var gotShared = new haxe.ds.ObjectMap();
		var _g = 0;
		while(_g < columns.length) {
			var column = columns[_g];
			++_g;
			var value = column.getADistance();
			aDistance.set(column,value);
			gotShared.set(column,0);
		}
		var seedThreshold = new haxe.ds.IntMap();
		var seedrest = amount;
		var countIterations = 0;
		while(seedrest > 0) {
			var seed = .5;
			var _g1 = 0;
			while(_g1 < columns.length) {
				var column1 = columns[_g1];
				++_g1;
				var grain = column1.getDistanceDelta() * seed;
				var valueDeltaInt = Std["int"](column1.getDistanceDelta() * 100000);
				if(!seedThreshold.exists(valueDeltaInt)) seedThreshold.set(valueDeltaInt,0);
				var value1 = seedThreshold.get(valueDeltaInt) + grain;
				seedThreshold.set(valueDeltaInt,value1);
				var threshold = seedThreshold.get(valueDeltaInt);
				var benefit;
				if(column1 == firstcolumn) benefit = 0.0; else benefit = column1.getADistanceBenefit();
				if(threshold > benefit) {
					var value2 = gotShared.h[column1.__id__] + grain;
					gotShared.set(column1,value2);
					seedrest -= grain;
				}
			}
			countIterations++;
		}
		var gain = 0.0;
		var _g2 = 0;
		while(_g2 < columns.length) {
			var column2 = columns[_g2];
			++_g2;
			column2.sposition = column2.getAPostion() + gain;
			gain += gotShared.h[column2.__id__];
		}
	}
	,resetStretch: function() {
		var _g = 0;
		var _g1 = this.systembar.bar.getColumns();
		while(_g < _g1.length) {
			var column = _g1[_g];
			++_g;
			column.sposition = null;
		}
	}
	,__class__: nx3.PBarStretchCalculator
};
nx3.PBarWidthCalculator = function() {
};
nx3.PBarWidthCalculator.__name__ = ["nx3","PBarWidthCalculator"];
nx3.PBarWidthCalculator.__interfaces__ = [nx3.IBarWidthCalculator];
nx3.PBarWidthCalculator.prototype = {
	getClefWidth: function(clef) {
		return nx3.PAttributesRectsCalculator.getClefRect(clef).width;
	}
	,getKeyWidth: function(key) {
		return nx3.PAttributesRectsCalculator.getKeyRect(key).width;
	}
	,getTimeWidth: function(time) {
		return nx3.PAttributesRectsCalculator.getTimeRect(time).width;
	}
	,getContentLeftMarginWidth: function(bar) {
		return 3.0;
	}
	,getContentWidth: function(bar) {
		return bar.getContentwidth();
	}
	,getBarlineWidth: function(barline) {
		return 1.0;
	}
	,getLeftBarlineWidth: function(barline) {
		return 1.0;
	}
	,getClefsWidth: function(clefs) {
		var result = 0.0;
		var _g = 0;
		while(_g < clefs.length) {
			var clef = clefs[_g];
			++_g;
			if(clef == null) continue;
			result = Math.max(result,nx3.PAttributesRectsCalculator.getClefRect(clef).width);
		}
		return result;
	}
	,getKeysWidth: function(keys) {
		var result = 0.0;
		var _g = 0;
		while(_g < keys.length) {
			var key = keys[_g];
			++_g;
			if(key == null) continue;
			result = Math.max(result,nx3.PAttributesRectsCalculator.getKeyRect(key).width);
		}
		return result;
	}
	,__class__: nx3.PBarWidthCalculator
};
nx3.PBaseRectCalculator = function(note) {
	this.note = note;
};
nx3.PBaseRectCalculator.__name__ = ["nx3","PBaseRectCalculator"];
nx3.PBaseRectCalculator.prototype = {
	note: null
	,getBaseRect: function() {
		{
			var _g = this.note.nnote.type;
			switch(_g[1]) {
			case 0:
				var atr = _g[5];
				var a = _g[4];
				var v = _g[3];
				var h = _g[2];
				var _g1 = nx3.ENoteValTools.head(this.note.nnote.value);
				switch(_g1[1]) {
				case 2:
					return new nx3.geom.Rectangle(-2.8000000000000003,-3,5.6000000000000005,3 * 2);
				default:
					return new nx3.geom.Rectangle(-2.2,-3,4.4,3 * 2);
				}
				break;
			case 4:
				var f = _g[5];
				var c = _g[4];
				var o = _g[3];
				var text = _g[2];
				return cx.ArrayTools.first(this.note.getHeadsRects()).clone();
			default:
				return new nx3.geom.Rectangle(-4,-3,8,3 * 2);
			}
		}
	}
	,__class__: nx3.PBaseRectCalculator
};
nx3.PBeamflagCalculator = function(beamgroup) {
	this.beamgroup = beamgroup;
};
nx3.PBeamflagCalculator.__name__ = ["nx3","PBeamflagCalculator"];
nx3.PBeamflagCalculator.prototype = {
	beamgroup: null
	,getBeamflags: function() {
		var firstpass = [];
		var noteIdx = 0;
		var holder = [];
		var holderIdx = 0;
		var _g = 0;
		var _g1 = this.beamgroup.pnotes;
		while(_g < _g1.length) {
			var note = _g1[_g];
			++_g;
			var nextnote = cx.ArrayTools.indexOrNull(this.beamgroup.pnotes,noteIdx + 1);
			if(nextnote == null) continue;
			if(nx3.ENoteValTools.beaminglevel(note.nnote.value) > 1 && nx3.ENoteValTools.beaminglevel(nextnote.nnote.value) > 1) {
				holder.push(2);
				firstpass.push(nx3.EBeamflagType.Full16);
			} else if(nx3.ENoteValTools.beaminglevel(note.nnote.value) == 1 && nx3.ENoteValTools.beaminglevel(nextnote.nnote.value) > 1) {
				holder.push(-1);
				firstpass.push(nx3.EBeamflagType.End16);
			} else if(nx3.ENoteValTools.beaminglevel(note.nnote.value) > 1 && nx3.ENoteValTools.beaminglevel(nextnote.nnote.value) == 1) {
				holder.push(1);
				firstpass.push(nx3.EBeamflagType.Start16);
			} else {
				holder.push(0);
				firstpass.push(nx3.EBeamflagType.None);
			}
			noteIdx++;
		}
		var result = [];
		var _g2 = 0;
		while(_g2 < firstpass.length) {
			var r = firstpass[_g2];
			++_g2;
			var rnext = cx.ArrayTools.next(firstpass,r);
			var rprev = cx.ArrayTools.prev(firstpass,r);
			if(rnext == nx3.EBeamflagType.Full16 && r == nx3.EBeamflagType.End16) result.push(nx3.EBeamflagType.None); else if(rprev == nx3.EBeamflagType.Full16 && r == nx3.EBeamflagType.Start16) result.push(nx3.EBeamflagType.None); else result.push(r);
		}
		return result;
	}
	,__class__: nx3.PBeamflagCalculator
};
nx3.PBeamgroup = function(pnotes) {
	this.value = null;
	this.voice = pnotes[0].voice;
	this.pnotes = pnotes;
	var _g = 0;
	while(_g < pnotes.length) {
		var pnote = pnotes[_g];
		++_g;
		pnote.beamgroup = this;
	}
};
nx3.PBeamgroup.__name__ = ["nx3","PBeamgroup"];
nx3.PBeamgroup.prototype = {
	pnotes: null
	,value: null
	,getValue: function() {
		if(this.value != null) return this.value;
		this.value = 0;
		var _g = 0;
		var _g1 = this.pnotes;
		while(_g < _g1.length) {
			var pnote = _g1[_g];
			++_g;
			this.value += nx3.ENoteValTools.value(pnote.nnote.value);
		}
		return this.value;
	}
	,direction: null
	,setDirection: function(direction) {
		this.direction = direction;
	}
	,getDirection: function() {
		if(this.direction == null) {
			var calculator = new nx3.PPartbeamgroupsDirectionCalculator(this.voice.getPart());
			calculator.calculateBeamgroupsDirections();
		}
		return this.direction;
	}
	,voice: null
	,getPVoice: function() {
		return this.voice;
	}
	,stavexpositions: null
	,getNotesStemXPositions: function() {
		if(this.stavexpositions != null) return this.stavexpositions;
		this.stavexpositions = [];
		var _g = 0;
		var _g1 = this.pnotes;
		while(_g < _g1.length) {
			var note = _g1[_g];
			++_g;
			this.stavexpositions.push(note.getComplex().getXPosition() + note.getStaveXPosition());
		}
		return this.stavexpositions;
	}
	,frame: null
	,getFrame: function() {
		if(this.frame != null) return this.frame;
		var firstnote = this.pnotes[0].nnote;
		if(firstnote.type[0] != "Note") return null;
		if(this.pnotes.length == 1) {
			var stavinglevel = nx3.ENoteValTools.stavinglevel(firstnote.value);
			if(stavinglevel <= 0) return null;
		}
		var calculator = new nx3.PBeamgroupFrameCalculator(this);
		this.frame = calculator.getFrame();
		return this.frame;
	}
	,toString: function() {
		return "PBeamgroup \r";
	}
	,__class__: nx3.PBeamgroup
};
nx3.PBeamgroupDirectionCalculator = function(beamgroup) {
	this.beamgroup = beamgroup;
};
nx3.PBeamgroupDirectionCalculator.__name__ = ["nx3","PBeamgroupDirectionCalculator"];
nx3.PBeamgroupDirectionCalculator.prototype = {
	beamgroup: null
	,getDirection: function() {
		this.topLevel = this.findTopLevel();
		this.bottomLevel = this.findBottomLevel();
		if(this.topLevel + this.bottomLevel <= 0) return nx3.EDirectionUD.Down;
		return nx3.EDirectionUD.Up;
	}
	,topLevel: null
	,findTopLevel: function() {
		var topLevel = this.beamgroup.pnotes[0].nnote.get_topLevel();
		if(this.beamgroup.pnotes.length == 1) return topLevel;
		var _g1 = 1;
		var _g = this.beamgroup.pnotes.length;
		while(_g1 < _g) {
			var i = _g1++;
			var level = this.beamgroup.pnotes[i].nnote.get_topLevel();
			topLevel = Std["int"](Math.min(topLevel,level));
		}
		return topLevel;
	}
	,bottomLevel: null
	,findBottomLevel: function() {
		var bottomLevel = this.beamgroup.pnotes[0].nnote.get_bottomLevel();
		if(this.beamgroup.pnotes.length == 1) return bottomLevel;
		var _g1 = 1;
		var _g = this.beamgroup.pnotes.length;
		while(_g1 < _g) {
			var i = _g1++;
			var level = this.beamgroup.pnotes[i].nnote.get_bottomLevel();
			bottomLevel = Std["int"](Math.max(bottomLevel,level));
		}
		return bottomLevel;
	}
	,__class__: nx3.PBeamgroupDirectionCalculator
};
nx3.PBeamgroupFrameCalculator = function(beamgroup) {
	this.beamgroup = beamgroup;
};
nx3.PBeamgroupFrameCalculator.__name__ = ["nx3","PBeamgroupFrameCalculator"];
nx3.PBeamgroupFrameCalculator.prototype = {
	beamgroup: null
	,outerLevels: null
	,innerLevels: null
	,getFrame: function() {
		this.calcLevelArrays();
		var frame = this.calcFramePrototype();
		return frame;
	}
	,calcFramePrototype: function() {
		var count = this.innerLevels.length;
		var tips = this.calcTips();
		var beamflags = new nx3.PBeamflagCalculator(this.beamgroup).getBeamflags();
		return { leftInnerY : this.innerLevels[0], leftOuterY : this.outerLevels[0], rightInnerY : this.innerLevels[count - 1], rightOuterY : this.outerLevels[count - 1], leftTipY : tips.leftTip, rightTipY : tips.rightTip, outerLevels : this.outerLevels, innerLevels : this.innerLevels, beamflags : beamflags};
	}
	,getTopLevels: function() {
		var levels = [];
		var _g = 0;
		var _g1 = this.beamgroup.pnotes;
		while(_g < _g1.length) {
			var note = _g1[_g];
			++_g;
			levels.push(note.nnote.get_topLevel());
		}
		return levels;
	}
	,getBottomLevels: function() {
		var levels = [];
		var _g = 0;
		var _g1 = this.beamgroup.pnotes;
		while(_g < _g1.length) {
			var note = _g1[_g];
			++_g;
			levels.push(note.nnote.get_bottomLevel());
		}
		return levels;
	}
	,calcLevelArrays: function() {
		var _g = this.beamgroup.getDirection();
		switch(_g[1]) {
		case 0:
			this.outerLevels = this.getTopLevels();
			this.innerLevels = this.getBottomLevels();
			break;
		case 1:
			this.outerLevels = this.getBottomLevels();
			this.innerLevels = this.getTopLevels();
			break;
		}
	}
	,calcTips: function() {
		var stemLenght = 7;
		var direction = this.beamgroup.getDirection();
		var calculator = new nx3.PBamegroupFrameTipCalculator(this.outerLevels,direction);
		var tips = calculator.getTips();
		if(direction == nx3.EDirectionUD.Up) tips.leftTip = tips.leftTip - stemLenght; else tips.leftTip = tips.leftTip + stemLenght;
		if(direction == nx3.EDirectionUD.Up) tips.rightTip = tips.rightTip - stemLenght; else tips.rightTip = tips.rightTip + stemLenght;
		return tips;
	}
	,__class__: nx3.PBeamgroupFrameCalculator
};
nx3.PColumn = function(bar,complexes,valueposition,value) {
	this.allottedDistance = 0;
	this.bar = bar;
	this.complexes = complexes;
	this.valueposition = valueposition;
	this.value = value;
	this.mposition = 0.0;
	this.mdistanceBenefit = 0;
};
nx3.PColumn.__name__ = ["nx3","PColumn"];
nx3.PColumn.prototype = {
	bar: null
	,complexes: null
	,valueposition: null
	,getComplexes: function() {
		return this.complexes;
	}
	,getValueposition: function() {
		return this.valueposition;
	}
	,value: null
	,getValue: function() {
		if(this.value == null) throw "value shouldnt be null";
		return this.value;
	}
	,mdistance: null
	,getMDistance: function() {
		if(this.mdistance == null) throw "mdistance shouldnt be null";
		return this.mdistance;
	}
	,mdistanceBenefit: null
	,getMDistanceBenefit: function() {
		if(this.mdistanceBenefit != null) return this.mdistanceBenefit;
		this.mdistanceBenefit = Math.max(0,this.getMDistance() - 3.2);
		return this.mdistanceBenefit;
	}
	,allottedDistance: null
	,distancedelta: null
	,getDistanceDelta: function() {
		if(this.distancedelta != null) return this.distancedelta;
		this.bar.getContentwidth();
		this.distancedelta = this.allottedDistance / this.bar.getAllottedDistanceSum();
		return this.distancedelta;
	}
	,mposition: null
	,getMPosition: function() {
		return this.mposition;
	}
	,adistance: null
	,getADistance: function() {
		if(this.adistance != null) return this.adistance;
		this.bar.calculateAPositions();
		return this.adistance;
	}
	,adistanceBenefit: null
	,getADistanceBenefit: function() {
		return this.adistanceBenefit;
	}
	,aposition: null
	,getAPostion: function() {
		if(this.aposition != null) return this.aposition;
		this.bar.calculateAPositions();
		return this.aposition;
	}
	,sposition: null
	,getSPosition: function() {
		if(this.sposition != null) return this.sposition;
		return this.getAPostion();
	}
	,rightX: null
	,getRightX: function() {
		if(this.rightX != null) return this.rightX;
		this.rightX = 0;
		var _g = 0;
		var _g1 = this.getComplexes();
		while(_g < _g1.length) {
			var complex = _g1[_g];
			++_g;
			if(complex != null) this.rightX = Math.max(this.rightX,complex.getRightX());
		}
		return this.rightX;
	}
	,leftX: null
	,getLeftX: function() {
		if(this.leftX != null) return this.leftX;
		this.leftX = 0;
		var _g = 0;
		var _g1 = this.getComplexes();
		while(_g < _g1.length) {
			var complex = _g1[_g];
			++_g;
			if(complex != null) this.leftX = Math.min(this.leftX,complex.getLeftX());
		}
		return this.leftX;
	}
	,getNextComplex: function(complex) {
		if(this == cx.ArrayTools.last(this.bar.getColumns())) return null;
		var partIndex;
		var _this = this.getComplexes();
		partIndex = HxOverrides.indexOf(_this,complex,0);
		var nextColumnIdx;
		nextColumnIdx = (function($this) {
			var $r;
			var _this1 = $this.bar.getColumns();
			$r = HxOverrides.indexOf(_this1,$this,0);
			return $r;
		}(this)) + 1;
		var _g1 = nextColumnIdx;
		var _g = this.bar.getColumns().length;
		while(_g1 < _g) {
			var ci = _g1++;
			var complex1 = this.bar.getColumns()[ci].getComplexes()[partIndex];
			if(complex1 != null) return complex1;
		}
		return null;
	}
	,toString: function() {
		return "PColumn";
	}
	,__class__: nx3.PColumn
};
nx3.PColumnsAllotmentCalculator = function(bar) {
	this.bar = bar;
	this.spacing = bar.nbar.spacing;
	this.bar.allottedDistanceSum = 0;
};
nx3.PColumnsAllotmentCalculator.__name__ = ["nx3","PColumnsAllotmentCalculator"];
nx3.PColumnsAllotmentCalculator.prototype = {
	bar: null
	,spacing: null
	,calculate: function(stretch) {
		if(stretch == null) stretch = 0;
		var aposition = this.bar.getContentXZero();
		var _g = 0;
		var _g1 = this.bar.getColumns();
		while(_g < _g1.length) {
			var column = _g1[_g];
			++_g;
			var dist = this.getADistance(column.getValue(),column);
			column.allottedDistance = dist;
			this.bar.allottedDistanceSum += dist;
			var adistance = Math.max(column.getMDistance(),dist);
			var adistanceBenefit = Math.max(0,column.getMDistance() - dist);
			column.aposition = aposition;
			column.adistance = adistance;
			column.adistanceBenefit = adistanceBenefit;
			aposition += adistance;
		}
	}
	,getADistance: function(val,column) {
		var _g = this.bar.nbar.allotment;
		switch(_g[1]) {
		case 1:
			return this.spacing;
		case 0:
			return column.getMDistance();
		case 2:
			return (0.5 + val / 3024 / 2) * this.spacing;
		default:
			return val / 3024 * this.spacing;
		}
	}
	,__class__: nx3.PColumnsAllotmentCalculator
};
nx3.PColumnsDistancesCalculator = function(bar) {
	this.bar = bar;
	this.prevLeftComplex = new haxe.ds.IntMap();
};
nx3.PColumnsDistancesCalculator.__name__ = ["nx3","PColumnsDistancesCalculator"];
nx3.PColumnsDistancesCalculator.prototype = {
	bar: null
	,calculate: function() {
		var leftColumn = null;
		var xposition = 0.0;
		var _g1 = 0;
		var _g = this.bar.getColumns().length;
		while(_g1 < _g) {
			var columnIdx = _g1++;
			var rightColumn = this.bar.getColumns()[columnIdx];
			rightColumn.mdistance = 0;
			if(columnIdx == 0) {
				var complexId = 0;
				var _g2 = 0;
				var _g3 = cx.ArrayTools.first(this.bar.getColumns()).getComplexes();
				while(_g2 < _g3.length) {
					var complex = _g3[_g2];
					++_g2;
					this.prevLeftComplex.set(complexId,{ leftComplex : complex, columnIdx : 0});
					complexId++;
				}
			} else if(columnIdx < this.bar.getColumns().length) {
				var leftComplexes = leftColumn.getComplexes();
				var rightComplexes = rightColumn.getComplexes();
				var columndistance = 0.0;
				var _g31 = 0;
				var _g21 = leftComplexes.length;
				while(_g31 < _g21) {
					var complexIdx = _g31++;
					var leftComplex = leftComplexes[complexIdx];
					var rightComplex = rightComplexes[complexIdx];
					var distance = this.getComplexDistances(columnIdx,complexIdx,leftComplex,rightComplex);
					columndistance = Math.max(columndistance,distance);
				}
				columndistance = cx.MathTools.round2(columndistance,null);
				leftColumn.mdistance = columndistance;
				xposition += columndistance;
				rightColumn.mposition = xposition;
			}
			if(columnIdx == this.bar.getColumns().length - 1) {
				var lastColumn = this.bar.getColumns()[columnIdx];
				lastColumn.mdistance = lastColumn.getRightX();
				return;
			}
			leftColumn = rightColumn;
		}
	}
	,prevLeftComplex: null
	,getComplexDistances: function(columnIdx,complexIdx,leftComplex,rightComplex) {
		if(rightComplex == null) {
			if(leftComplex != null) {
				var leftColumnIdx = columnIdx - 1;
				this.prevLeftComplex.set(complexIdx,{ leftComplex : leftComplex, columnIdx : leftColumnIdx});
			}
			return 0;
		}
		if(leftComplex == null) {
			var currentLeftColumIdx = columnIdx - 1;
			var prevLeftColumnIdx = this.prevLeftComplex.get(complexIdx).columnIdx;
			var currentLeftXPos = this.bar.getColumns()[currentLeftColumIdx].getMPosition();
			var prevLeftXPos = this.bar.getColumns()[prevLeftColumnIdx].getMPosition();
			var distanceBenefit = currentLeftXPos - prevLeftXPos;
			var currentLeftComplex = this.prevLeftComplex.get(complexIdx).leftComplex;
			var distance = new nx3.PComplexDistancesCalculator().getDistance(currentLeftComplex,rightComplex);
			var actualDistance = Math.max(0,distance - distanceBenefit);
			return actualDistance;
		}
		var leftColumnIdx1 = columnIdx - 1;
		var distance1 = new nx3.PComplexDistancesCalculator().getDistance(leftComplex,rightComplex);
		this.prevLeftComplex.set(complexIdx,{ leftComplex : leftComplex, columnIdx : leftColumnIdx1});
		return distance1;
	}
	,__class__: nx3.PColumnsDistancesCalculator
};
nx3.PColumnsGenerator = function(bar) {
	this.bar = bar;
	this.vparts = this.bar.getParts();
};
nx3.PColumnsGenerator.__name__ = ["nx3","PColumnsGenerator"];
nx3.PColumnsGenerator.prototype = {
	vparts: null
	,positions: null
	,columns: null
	,positionsColumns: null
	,bar: null
	,getColumns: function() {
		if(this.columns != null) return this.columns;
		this.positions = this.calcPositions(this.vparts);
		this.calcColumns(this.positions,this.vparts);
		return this.columns;
	}
	,calcColumns: function(positions,vparts) {
		var partsCount = vparts.length;
		this.columns = [];
		this.positionsColumns = new haxe.ds.IntMap();
		var barvalue = this.bar.getValue();
		var idx = 0;
		var _g = 0;
		while(_g < positions.length) {
			var pos = positions[_g];
			++_g;
			var nextpos = cx.ArrayTools.indexOrNull(positions,idx + 1);
			if(nextpos == null) nextpos = barvalue;
			var value = nextpos - pos;
			var vcomplexes = [];
			var _g2 = 0;
			var _g1 = this.vparts.length;
			while(_g2 < _g1) {
				var i = _g2++;
				var part = this.vparts[i];
				var x = part.getPositionsComplexes();
				var complex = part.getPositionsComplexes().get(pos);
				vcomplexes.push(complex);
			}
			var vcolumn = new nx3.PColumn(this.bar,vcomplexes,pos,value);
			this.columns.push(vcolumn);
			var _g11 = 0;
			while(_g11 < vcomplexes.length) {
				var complex1 = vcomplexes[_g11];
				++_g11;
				if(complex1 != null) complex1.column = vcolumn;
			}
			this.positionsColumns.set(pos,vcolumn);
			idx++;
		}
	}
	,calcPositions: function(vparts) {
		var positionsMap = new haxe.ds.IntMap();
		var _g = 0;
		while(_g < vparts.length) {
			var vpart = vparts[_g];
			++_g;
			var poss;
			var _this = cx.MapTools.keysToArray(vpart.getPositionsComplexes().keys());
			poss = _this.slice();
			var _g1 = 0;
			while(_g1 < poss.length) {
				var pos = poss[_g1];
				++_g1;
				positionsMap.set(pos,true);
			}
		}
		var positions = cx.MapTools.keysToArray(positionsMap.keys());
		positions.sort(function(a,b) {
			return Reflect.compare(a,b);
		});
		return positions;
	}
	,__class__: nx3.PColumnsGenerator
};
nx3.PComplex = function(part,notes,valueposition) {
	this.part = part;
	if(notes.length > 2) throw "PComplex nr of PNote(s) limited to max 2 - for now";
	this.notes = notes;
	var _g = 0;
	var _g1 = this.notes;
	while(_g < _g1.length) {
		var note = _g1[_g];
		++_g;
		note.complex = this;
	}
	this.valueposition = valueposition;
};
nx3.PComplex.__name__ = ["nx3","PComplex"];
nx3.PComplex.prototype = {
	part: null
	,valueposition: null
	,notes: null
	,getNotes: function() {
		return this.notes;
	}
	,getValueposition: function() {
		return this.valueposition;
	}
	,getPart: function() {
		return this.part;
	}
	,column: null
	,getColumn: function() {
		if(this.column != null) return this.column;
		this.part.getBar().getColumns();
		if(this.column == null) throw "this shouldn't happen";
		return this.column;
	}
	,headsrects: null
	,getHeadsRects: function() {
		if(this.headsrects != null) return this.headsrects;
		var firstrects = this.notes[0].getHeadsRects();
		if(this.notes.length == 1) return firstrects;
		var secondrects;
		var _this = this.notes[1].getHeadsRects();
		secondrects = _this.slice();
		var xoffset = this.getNoteXOffset(this.notes[1]);
		nx3.geom.RectanglesTools.offset(secondrects,xoffset,0);
		this.headsrects = firstrects.concat(secondrects);
		return this.headsrects;
	}
	,signsrects: null
	,getSignsRects: function() {
		if(this.signsrects != null) return this.signsrects;
		if(this.getVisibleSigns().length == 0) return [];
		this.signsrects = new nx3.PSignsRectsCalculator(this.getVisibleSigns()).getSignRects(this.getHeadsRects());
		return this.signsrects;
	}
	,secondoffset: null
	,getNoteXOffset: function(note) {
		if(note == cx.ArrayTools.first(this.getNotes())) return 0;
		if(this.secondoffset != null) return this.secondoffset;
		this.secondoffset = new nx3.PNoteOffsetCalculator(this).getNoteOffset(cx.ArrayTools.second(this.getNotes()));
		return this.secondoffset;
	}
	,signs: null
	,getSigns: function() {
		if(this.signs != null) return this.signs;
		this.signs = new nx3.PSignsCalculator(this.getNotes()).getSigns();
		return this.signs;
	}
	,visiblesigns: null
	,getVisibleSigns: function() {
		if(this.visiblesigns != null) return this.visiblesigns;
		this.visiblesigns = new nx3.PSignsCalculator(this.getNotes()).getVisibleSigns();
		return this.visiblesigns;
	}
	,stavesrects: null
	,getStavesRects: function() {
		if(this.stavesrects != null) return this.stavesrects;
		this.stavesrects = [];
		var _g = 0;
		var _g1 = this.notes;
		while(_g < _g1.length) {
			var note = _g1[_g];
			++_g;
			var rect = this.getStaveRect(note);
			if(rect != null) this.stavesrects.push(rect);
		}
		var _g2 = 0;
		var _g11 = this.notes;
		while(_g2 < _g11.length) {
			var note1 = _g11[_g2];
			++_g2;
			var flagrect = new nx3.PStaveRectCalculator(note1).getFlagRect();
			if(flagrect != null) this.stavesrects.push(flagrect);
		}
		return this.stavesrects;
	}
	,getStaveRect: function(note) {
		return new nx3.PStaveRectCalculator(note).getStaveRect();
	}
	,tierects: null
	,getTieRects: function() {
		if(this.tierects != null) return this.tierects;
		this.tierects = new nx3.PComplexTierectsCalculator(this).getTieRects();
		return this.tierects;
	}
	,dotrects: null
	,getDotRects: function() {
		if(this.dotrects != null) return this.dotrects;
		this.dotrects = new nx3.PComplexDotsrectsCalculator(this).getDotRects();
		return this.dotrects;
	}
	,baserect: null
	,getBaseRect: function() {
		if(this.baserect != null) return this.baserect;
		this.baserect = new nx3.geom.Rectangle(0,0,0,0);
		var _g = 0;
		var _g1 = this.getNotes();
		while(_g < _g1.length) {
			var note = _g1[_g];
			++_g;
			this.baserect = this.baserect.union(note.getBaseRect());
		}
		return this.baserect;
	}
	,allrects: null
	,getAllRects: function() {
		if(this.allrects != null) return this.allrects;
		this.allrects = [];
		this.allrects = nx3.geom.RectanglesTools.concat(this.allrects,this.getHeadsRects());
		this.allrects = nx3.geom.RectanglesTools.concat(this.allrects,this.getStavesRects());
		this.allrects = nx3.geom.RectanglesTools.concat(this.allrects,this.getSignsRects());
		this.allrects = nx3.geom.RectanglesTools.concat(this.allrects,this.getTieRects());
		this.allrects = nx3.geom.RectanglesTools.concat(this.allrects,this.getDotRects());
		return this.allrects;
	}
	,rect: null
	,getRect: function() {
		this.rect = nx3.geom.RectanglesTools.unionAll(this.getAllRects());
		return this.rect;
	}
	,xposition: null
	,getXPosition: function() {
		if(this.xposition != null) return this.xposition;
		this.getHeadsRects();
		this.xposition = this.getColumn().getSPosition();
		return this.xposition;
	}
	,getIndex: function() {
		var _this = this.part.getComplexes();
		return HxOverrides.indexOf(_this,this,0);
	}
	,leftX: null
	,getLeftX: function() {
		if(this.leftX != null) return this.leftX;
		this.leftX = this.getRect().x;
		return this.leftX;
	}
	,rightX: null
	,getRightX: function() {
		if(this.rightX != null) return this.rightX;
		this.rightX = this.getRect().x + this.getRect().width;
		return this.rightX;
	}
	,next: null
	,getNext: function() {
		if(this.next != null) return this.next;
		this.next = this.getColumn().getNextComplex(this);
		return this.next;
	}
	,tieinfos: null
	,setTieinfos: function(val) {
		this.tieinfos = val;
	}
	,getTieinfos: function() {
		if(this.tieinfos == null) this.getTieRects();
		if(this.getTieRects().length == 0) return [];
		this.tieinfos = new nx3.PComplexTieTargetCalculator(this.tieinfos).findTargetHeads();
		return this.tieinfos;
	}
	,getHeads: function() {
		var result = [];
		var _g = 0;
		var _g1 = this.getNotes();
		while(_g < _g1.length) {
			var note = _g1[_g];
			++_g;
			result = result.concat(note.heads);
		}
		return result;
	}
	,hasTie: null
	,getHasTie: function() {
		if(this.hasTie != null) return this.hasTie;
		var _g = 0;
		var _g1 = this.getNotes();
		while(_g < _g1.length) {
			var note = _g1[_g];
			++_g;
			if(note.getHasTie() == true) {
				this.hasTie = true;
				return this.hasTie;
			}
		}
		this.hasTie = false;
		return this.hasTie;
	}
	,headlevels: null
	,getHeadLevels: function() {
		if(this.headlevels != null) return this.headlevels;
		this.headlevels = [];
		var _g = 0;
		var _g1 = this.getNotes();
		while(_g < _g1.length) {
			var note = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = note.nnote.get_nheads();
			while(_g2 < _g3.length) {
				var nhead = _g3[_g2];
				++_g2;
				this.headlevels.push(nhead.level);
			}
		}
		return this.headlevels;
	}
	,toString: function() {
		var str = "PComplex: \r";
		var _g = 0;
		var _g1 = this.getNotes();
		while(_g < _g1.length) {
			var note = _g1[_g];
			++_g;
			str += "- Note: " + Std.string(note.nnote) + "\r";
		}
		return str;
	}
	,__class__: nx3.PComplex
};
nx3.PComplexDistancesCalculator = function() {
};
nx3.PComplexDistancesCalculator.__name__ = ["nx3","PComplexDistancesCalculator"];
nx3.PComplexDistancesCalculator.prototype = {
	getDistance: function(leftComplex,rightComplex) {
		var leftBaseRects = [leftComplex.getBaseRect()];
		var rightBaseRects = [rightComplex.getBaseRect()];
		var minDistance = nx3.geom.RectanglesTools.getXIntersection(leftBaseRects,rightBaseRects);
		var leftRects = leftComplex.getAllRects();
		var rightRects = rightComplex.getAllRects();
		var objDistance = nx3.geom.RectanglesTools.getXIntersection(leftRects,rightRects);
		var objDistanceMargin = objDistance + 0.6;
		return Math.max(minDistance,objDistanceMargin);
	}
	,getRects: function(complex) {
		var rects = [];
		rects.concat(complex.getHeadsRects());
		rects.concat(complex.getStavesRects());
		rects.concat(complex.getSignsRects());
		return rects;
	}
	,__class__: nx3.PComplexDistancesCalculator
};
nx3.PComplexDotsrectsCalculator = function(complex) {
	this.complex = complex;
};
nx3.PComplexDotsrectsCalculator.__name__ = ["nx3","PComplexDotsrectsCalculator"];
nx3.PComplexDotsrectsCalculator.prototype = {
	complex: null
	,getDotRects: function() {
		var nrofnotes = this.complex.getNotes().length;
		var firstnote = cx.ArrayTools.first(this.complex.getNotes());
		var rects = this.getRectsForNote(firstnote,false);
		if(nrofnotes == 2) {
			var secondnote = cx.ArrayTools.second(this.complex.getNotes());
			var secondrects = this.getRectsForNote(secondnote,true);
			rects = nx3.geom.RectanglesTools.concat(rects,secondrects);
		}
		return rects;
	}
	,getRectsForNote: function(note,down) {
		if(down == null) down = false;
		if(nx3.ENoteValTools.dotlevel(note.nnote.value) == 0) return [];
		var rects = [];
		var dotwidth;
		if(nx3.ENoteValTools.dotlevel(note.nnote.value) == 1) dotwidth = 2.0; else dotwidth = 3.0;
		var headrect = nx3.geom.RectanglesTools.unionAll(note.getHeadsRects());
		var rectX = headrect.x + headrect.width;
		var dotlevels = new haxe.ds.IntMap();
		var _g = 0;
		var _g1 = note.nnote.get_nheads();
		while(_g < _g1.length) {
			var head = _g1[_g];
			++_g;
			var level = head.level;
			var adj = Std["int"](Math.abs((level - 1) % 2));
			var dotlevel;
			if(down) dotlevel = level + adj; else dotlevel = level - adj;
			dotlevels.set(dotlevel,true);
		}
		var dotkeys = cx.ArrayTools.fromHashKeys(dotlevels.keys());
		var _g2 = 0;
		while(_g2 < dotkeys.length) {
			var level1 = dotkeys[_g2];
			++_g2;
			rects.push(new nx3.geom.Rectangle(rectX,level1 - 0.5,dotwidth,1));
		}
		return rects;
	}
	,__class__: nx3.PComplexDotsrectsCalculator
};
nx3.PComplexTieTargetCalculator = function(tieinfos) {
	this.tieinfos = tieinfos;
};
nx3.PComplexTieTargetCalculator.__name__ = ["nx3","PComplexTieTargetCalculator"];
nx3.PComplexTieTargetCalculator.prototype = {
	tieinfos: null
	,findTargetHeads: function() {
		var _g = 0;
		var _g1 = this.tieinfos;
		while(_g < _g1.length) {
			var info = _g1[_g];
			++_g;
			var head = info.head;
			var headlevel = head.nhead.level;
			var nextnote = head.getNote().getNext();
			if(nextnote == null) continue;
			var nextheads = nextnote.getHeads();
			var _g2 = 0;
			while(_g2 < nextheads.length) {
				var nexthead = nextheads[_g2];
				++_g2;
				if(headlevel == nexthead.nhead.level) {
					info.target = nexthead;
					break;
				}
			}
		}
		return this.tieinfos;
	}
	,__class__: nx3.PComplexTieTargetCalculator
};
nx3.PComplexTierectsCalculator = function(complex) {
	this.complex = complex;
};
nx3.PComplexTierectsCalculator.__name__ = ["nx3","PComplexTierectsCalculator"];
nx3.PComplexTierectsCalculator.prototype = {
	complex: null
	,getTieRects: function() {
		var nrofnotes = this.complex.getNotes().length;
		var firstnote = cx.ArrayTools.first(this.complex.getNotes());
		var firstties = firstnote.getTies();
		var secondnote;
		if(nrofnotes == 2) secondnote = cx.ArrayTools.second(this.complex.getNotes()); else secondnote = null;
		var secondties;
		if(nrofnotes == 2) secondties = cx.ArrayTools.second(this.complex.getNotes()).getTies(); else secondties = [];
		if(firstties == [] && secondties == []) return [];
		var headrects = this.complex.getHeadsRects();
		var dotrects = this.complex.getDotRects();
		var tieinfos = new Array();
		var rects = new Array();
		var headIdx = 0;
		var dotidx = 0;
		var adjusty = 0.0;
		var tiewidth = 3.2;
		var tieheight = 1.6;
		var _g = 0;
		var _g1 = firstnote.getHeads();
		while(_g < _g1.length) {
			var head = _g1[_g];
			++_g;
			var headrect = this.complex.getHeadsRects()[headIdx];
			var rx = headrect.x + headrect.width;
			if(nx3.ENoteValTools.dotlevel(firstnote.nnote.value) > 0) {
				var dotrect = this.complex.getDotRects()[dotidx];
				rx = dotrect.x + dotrect.width;
				dotidx++;
			}
			if(head.nhead.tie != null) {
				var tielevel = 0;
				{
					var _g2 = head.nhead.tie;
					switch(_g2[1]) {
					case 0:
						var tlevel = _g2[3];
						var tiedir = _g2[2];
						tielevel = tlevel;
						break;
					default:
					}
				}
				var level = head.nhead.level + tielevel;
				var direction = nx3.EDirectionUD.Up;
				if(firstties.length == 1) {
					if(secondnote == null) {
						if(firstnote.getDirection() == nx3.EDirectionUD.Up) level = level + 1; else level = level - 1;
						if(firstnote.getDirection() == nx3.EDirectionUD.Up) direction = nx3.EDirectionUD.Down; else direction = nx3.EDirectionUD.Up;
						if(firstnote.getDirection() == nx3.EDirectionUD.Up) adjusty = .8; else adjusty = -.8;
					} else if(firstnote.getDirection() == nx3.EDirectionUD.Up) level = level - 1; else level = level - 1;
					tiewidth = 3;
				} else if(secondnote == null && head == cx.ArrayTools.last(firstnote.getHeads())) {
					direction = nx3.EDirectionUD.Down;
					adjusty = .5;
				} else adjusty = -.5;
				var r = new nx3.geom.Rectangle(rx,level - 0.8 + adjusty,tiewidth,1.6);
				rects.push(r);
				tieinfos.push({ direction : direction, rect : r, head : head, target : null});
			}
			headIdx++;
		}
		tiewidth = 3.2;
		if(secondnote != null) {
			var _g3 = 0;
			var _g11 = secondnote.getHeads();
			while(_g3 < _g11.length) {
				var head1 = _g11[_g3];
				++_g3;
				if(head1.nhead.tie != null) {
					var level1 = head1.nhead.level;
					var headrect1 = this.complex.getHeadsRects()[headIdx];
					var rx1 = headrect1.x + headrect1.width;
					if(nx3.ENoteValTools.dotlevel(secondnote.nnote.value) > 0) {
						var dotrect1 = this.complex.getDotRects()[dotidx];
						rx1 = dotrect1.x + dotrect1.width;
						dotidx++;
					}
					if(secondties.length == 1) {
						level1++;
						tiewidth = 3;
					}
					var r1 = new nx3.geom.Rectangle(rx1,level1 - 0.8,tiewidth,1.6);
					rects.push(r1);
					tieinfos.push({ direction : nx3.EDirectionUD.Down, rect : r1, head : head1, target : null});
				}
				headIdx++;
			}
		}
		this.complex.setTieinfos(tieinfos);
		return rects;
	}
	,getNoteTies: function(note) {
	}
	,__class__: nx3.PComplexTierectsCalculator
};
nx3.PHead = function(nhead) {
	this.nhead = nhead;
};
nx3.PHead.__name__ = ["nx3","PHead"];
nx3.PHead.prototype = {
	nhead: null
	,note: null
	,getNote: function() {
		return this.note;
	}
	,toString: function() {
		return "PHead  \r" + Std.string(this.nhead);
	}
	,__class__: nx3.PHead
};
nx3.PHeadPlacementsCalculator = function(vheads,direction) {
	this.vheads = vheads;
	this.direction = direction;
};
nx3.PHeadPlacementsCalculator.__name__ = ["nx3","PHeadPlacementsCalculator"];
nx3.PHeadPlacementsCalculator.prototype = {
	vheads: null
	,direction: null
	,getHeadsPlacements: function() {
		if(this.vheads.length == 1) return [{ level : this.vheads[0].nhead.level, pos : nx3.EHeadPosition.Center}];
		var len = this.vheads.length;
		var placements = [];
		var tempArray = [];
		var _g = 0;
		var _g1 = this.vheads;
		while(_g < _g1.length) {
			var vhead = _g1[_g];
			++_g;
			var placement = { level : vhead.nhead.level, pos : nx3.EHeadPosition.Center};
			placements.push(placement);
			tempArray.push(0);
		}
		if(this.direction == nx3.EDirectionUD.Up) {
			var _g11 = 0;
			var _g2 = len - 1;
			while(_g11 < _g2) {
				var j = _g11++;
				var i = len - j - 1;
				var vhead1 = this.vheads[i];
				var vheadNext = this.vheads[i - 1];
				var lDiff = vhead1.nhead.level - vheadNext.nhead.level;
				if(lDiff < 2) {
					if(tempArray[i] == tempArray[i - 1]) {
						tempArray[i - 1] = 1;
						placements[i - 1].pos = nx3.EHeadPosition.Right;
					}
				}
			}
		} else {
			var _g12 = 0;
			var _g3 = len - 1;
			while(_g12 < _g3) {
				var i1 = _g12++;
				var vhead2 = this.vheads[i1];
				var vheadNext1 = this.vheads[i1 + 1];
				var lDiff1 = vheadNext1.nhead.level - vhead2.nhead.level;
				if(lDiff1 < 2) {
					if(tempArray[i1] == tempArray[i1 + 1]) {
						tempArray[i1 + 1] = -1;
						placements[i1 + 1].pos = nx3.EHeadPosition.Left;
					}
				}
			}
		}
		return placements;
	}
	,__class__: nx3.PHeadPlacementsCalculator
};
nx3.PHeadsRectsCalculator = function(note,direction) {
	if(direction != null) this.direction = direction; else this.direction = note.getDirection();
	this.vheads = note.getHeads();
	this.placements = new nx3.PHeadPlacementsCalculator(this.vheads,this.direction).getHeadsPlacements();
	this.notevalue = note.nnote.value;
};
nx3.PHeadsRectsCalculator.__name__ = ["nx3","PHeadsRectsCalculator"];
nx3.PHeadsRectsCalculator.prototype = {
	vheads: null
	,placements: null
	,notevalue: null
	,notetype: null
	,direction: null
	,getHeadsRects: function() {
		var rects = new Array();
		var i = 0;
		var _g = 0;
		var _g1 = this.placements;
		while(_g < _g1.length) {
			var placement = _g1[_g];
			++_g;
			var headtype = this.vheads[i].nhead.type;
			var rect = null;
			var headw = 0;
			this.headRect(headtype,this.notevalue);
			var _g2 = nx3.ENoteValTools.head(this.notevalue);
			switch(_g2[1]) {
			case 2:
				headw = 2.2;
				break;
			default:
				headw = 1.6;
			}
			var rect1 = new nx3.geom.Rectangle(-headw,-1,2 * headw,2);
			var pos = 0.0;
			var _g21 = placement.pos;
			switch(_g21[1]) {
			case 0:
				pos = -2 * headw;
				break;
			case 2:
				pos = 2 * headw;
				break;
			default:
				pos = 0;
			}
			rect1.offset(pos,placement.level);
			rects.push(rect1);
			i++;
		}
		return rects;
	}
	,headRect: function(type,notevalue) {
		var headw = 2;
		var headh = 2;
		switch(type[1]) {
		case 0:
			var _g = nx3.ENoteValTools.head(this.notevalue);
			switch(_g[1]) {
			case 2:
				return new nx3.geom.Rectangle(-2.2,-1,4.4,2);
			default:
				return new nx3.geom.Rectangle(-1.6,-1,3.2,2);
			}
			break;
		case 3:
			var _g1 = nx3.ENoteValTools.beaminglevel(this.notevalue);
			switch(_g1) {
			case 1:
				return new nx3.geom.Rectangle(-1.8,-3,3.6,6);
			case 2:
				return new nx3.geom.Rectangle(-2,-3,4,6);
			default:
				return new nx3.geom.Rectangle(-1.6,-3.3,3.2,6.6);
			}
			break;
		default:
			return new nx3.geom.Rectangle(-2,-2,4,4);
		}
		return new nx3.geom.Rectangle(-2,-2,4,4);
	}
	,__class__: nx3.PHeadsRectsCalculator
};
nx3.PNote = function(nnote) {
	this.nnote = nnote;
};
nx3.PNote.__name__ = ["nx3","PNote"];
nx3.PNote.prototype = {
	nnote: null
	,iterator: function() {
		return HxOverrides.iter(this.heads);
	}
	,length: null
	,get_length: function() {
		return this.heads.length;
	}
	,voice: null
	,getVoice: function() {
		return this.voice;
	}
	,heads: null
	,getHeads: function() {
		if(this.heads != null) return this.heads;
		this.heads = [];
		var _g = 0;
		var _g1 = this.nnote.get_nheads();
		while(_g < _g1.length) {
			var nhead = _g1[_g];
			++_g;
			var phead = new nx3.PHead(nhead);
			phead.note = this;
			this.heads.push(phead);
		}
		return this.heads;
	}
	,beamgroup: null
	,getBeamgroup: function() {
		if(this.voice == null) throw "PNote doesn't have a parent PVoice";
		if(this.beamgroup == null) this.voice.getBeamgroups();
		if(this.beamgroup == null) throw "this should not happen";
		return this.beamgroup;
	}
	,getDirection: function() {
		return this.getBeamgroup().getDirection();
	}
	,complex: null
	,getComplex: function() {
		if(this.voice == null) throw "PNote doesn't have a parent PVoice";
		if(this.complex == null) this.voice.getPart().getComplexes();
		if(this.complex == null) throw "Shouldn't happen";
		return this.complex;
	}
	,headsRects: null
	,getHeadsRects: function() {
		if(this.voice == null) throw "PNote doesn't have a parent PVoice";
		if(this.headsRects != null) return this.headsRects;
		var calculator = new nx3.PNoteheadsRectsCalculator(this);
		this.headsRects = calculator.getHeadsRects();
		return this.headsRects;
	}
	,staveRect: null
	,staveRectChecked: null
	,getStaveRect: function() {
		if(this.voice == null) throw "PNote doesn't have a parent PVoice";
		if(this.staveRectChecked) return this.staveRect;
		this.staveRect = this.getComplex().getStaveRect(this);
		this.staveRectChecked = true;
		return this.staveRect;
	}
	,staveXPosition: null
	,getStaveXPosition: function() {
		if(this.voice == null) throw "PNote doesn't have a parent PVoice";
		if(this.staveXPosition != null) return this.staveXPosition;
		var staverect = this.getStaveRect();
		if(staverect == null) return 0;
		if(this.getDirection() == nx3.EDirectionUD.Up) this.staveXPosition = staverect.width; else this.staveXPosition = staverect.x;
		return this.staveXPosition;
	}
	,baserect: null
	,getBaseRect: function() {
		if(this.voice == null) throw "PNote doesn't have a parent PVoice";
		if(this.baserect != null) return this.baserect;
		this.baserect = new nx3.PBaseRectCalculator(this).getBaseRect();
		return this.baserect;
	}
	,xoffset: null
	,getXOffset: function() {
		if(this.voice == null) throw "PNote doesn't have a parent PVoice";
		if(this.xoffset != null) return this.xoffset;
		this.xoffset = this.getComplex().getNoteXOffset(this);
		return this.xoffset;
	}
	,xposition: null
	,getXPosition: function() {
		if(this.voice == null) throw "PNote doesn't have a parent PVoice";
		if(this.xposition != null) return this.xposition;
		this.xposition = this.getComplex().getXPosition() + this.getXOffset();
		return this.xposition;
	}
	,getTies: function() {
		return this.nnote.get_ties();
	}
	,next: null
	,getNext: function() {
		if(this.voice == null) throw "PNote doesn't have a parent PVoice";
		if(this.next != null) return this.next;
		var idx;
		var _this = this.voice.getNotes();
		idx = HxOverrides.indexOf(_this,this,0);
		this.next = cx.ArrayTools.indexOrNull(this.voice.getNotes(),idx + 1);
		return this.next;
	}
	,getHasTie: function() {
		return !Lambda.foreach(this.nnote,function(nhead) {
			return !(nhead.tie != null);
		});
	}
	,__class__: nx3.PNote
};
nx3.PNoteHeadsRectTplCalculator = function(note) {
	this.note = note;
	var level;
	{
		var _g = note.nnote.type;
		switch(_g[1]) {
		case 3:
			var level1 = _g[2];
			level = level1;
			break;
		default:
			level = 0;
		}
	}
	var part = this.note.getVoice().getPart().npart;
	var _g1 = part.type;
	switch(_g1[1]) {
	case 3:
		this.level = level * 3;
		break;
	case 2:
		this.level = 0;
		break;
	default:
		this.level = 0;
	}
};
nx3.PNoteHeadsRectTplCalculator.__name__ = ["nx3","PNoteHeadsRectTplCalculator"];
nx3.PNoteHeadsRectTplCalculator.prototype = {
	note: null
	,level: null
	,getHeadsRects: function() {
		return [new nx3.geom.Rectangle(-5.5,-5.3 + this.level,10,8.8)];
	}
	,__class__: nx3.PNoteHeadsRectTplCalculator
};
nx3.PNoteHeadsRectsLyricsCalculator = function(note,text,font) {
	this.note = note;
	this.text = text;
	this.font = font;
};
nx3.PNoteHeadsRectsLyricsCalculator.__name__ = ["nx3","PNoteHeadsRectsLyricsCalculator"];
nx3.PNoteHeadsRectsLyricsCalculator.prototype = {
	note: null
	,text: null
	,font: null
	,getHeadsRects: function() {
		var target = new nx3.render.TargetSvg();
		if(this.font != null) target.setFont(this.font);
		var width = target.textwidth(this.text);
		var height = target.textheight(this.text);
		return [new nx3.geom.Rectangle(-width / 2,-height / 2,width,height)];
		return null;
	}
	,__class__: nx3.PNoteHeadsRectsLyricsCalculator
};
nx3.PNoteHeadsRectsPausesCalculator = function(vnote) {
	this.vnote = vnote;
};
nx3.PNoteHeadsRectsPausesCalculator.__name__ = ["nx3","PNoteHeadsRectsPausesCalculator"];
nx3.PNoteHeadsRectsPausesCalculator.prototype = {
	vnote: null
	,getHeadsRects: function() {
		var rects;
		var _g = nx3.ENoteValTools.beaminglevel(this.vnote.nnote.value);
		switch(_g) {
		case 1:
			rects = [new nx3.geom.Rectangle(-1.8,-3,3.6,6)];
			break;
		case 2:
			rects = [new nx3.geom.Rectangle(-2,-3,4,6)];
			break;
		default:
			rects = [new nx3.geom.Rectangle(-1.6,-3.3,3.2,6.6)];
		}
		var level = 0;
		{
			var _g1 = this.vnote.nnote.type;
			switch(_g1[1]) {
			case 1:
				var l = _g1[2];
				level = l;
				break;
			default:
			}
		}
		rects[0].offset(0,level);
		return rects;
	}
	,__class__: nx3.PNoteHeadsRectsPausesCalculator
};
nx3.PNoteOffsetCalculator = function(complex) {
	this.complex = complex;
};
nx3.PNoteOffsetCalculator.__name__ = ["nx3","PNoteOffsetCalculator"];
nx3.PNoteOffsetCalculator.prototype = {
	complex: null
	,getNoteOffset: function(note) {
		if(note == cx.ArrayTools.first(this.complex.getNotes())) return 0;
		var firstrects = this.complex.notes[0].getHeadsRects();
		var secondrects;
		var _this = this.complex.notes[1].getHeadsRects();
		secondrects = _this.slice();
		var secondoffset = nx3.geom.RectanglesTools.getXIntersection(firstrects,secondrects);
		var firstnote = cx.ArrayTools.first(this.complex.getNotes());
		var diff = note.nnote.get_topLevel() - firstnote.nnote.get_bottomLevel();
		if(diff == 1) secondoffset = secondoffset * 0.8;
		if(diff < 1) {
			if(nx3.ENoteValTools.dotlevel(firstnote.nnote.value) > 0) if(nx3.ENoteValTools.dotlevel(firstnote.nnote.value) == 1) secondoffset += 2.0; else secondoffset += 3.0;
		}
		return secondoffset;
	}
	,__class__: nx3.PNoteOffsetCalculator
};
nx3.PNoteheadsRectsCalculator = function(note) {
	this.note = note;
};
nx3.PNoteheadsRectsCalculator.__name__ = ["nx3","PNoteheadsRectsCalculator"];
nx3.PNoteheadsRectsCalculator.prototype = {
	note: null
	,heads: null
	,placements: null
	,getHeadsRects: function() {
		{
			var _g = this.note.nnote.type;
			switch(_g[1]) {
			case 0:
				var a2 = _g[5];
				var a = _g[4];
				var v = _g[3];
				var h = _g[2];
				return new nx3.PHeadsRectsCalculator(this.note).getHeadsRects();
			case 1:
				var l = _g[2];
				return new nx3.PNoteHeadsRectsPausesCalculator(this.note).getHeadsRects();
			case 4:
				var font = _g[5];
				var c = _g[4];
				var o = _g[3];
				var text = _g[2];
				return new nx3.PNoteHeadsRectsLyricsCalculator(this.note,text,font).getHeadsRects();
			case 3:
				var l1 = _g[2];
				return new nx3.PNoteHeadsRectTplCalculator(this.note).getHeadsRects();
			default:
				throw "Non implemented ENoteType: " + this.note.nnote.type[0];
				return [];
			}
		}
	}
	,__class__: nx3.PNoteheadsRectsCalculator
};
nx3.PPart = function(npart) {
	this.rect = null;
	this.npart = npart;
	this.value = 0;
};
nx3.PPart.__name__ = ["nx3","PPart"];
nx3.PPart.prototype = {
	npart: null
	,iterator: function() {
		var _this = this.getVoices();
		return HxOverrides.iter(_this);
	}
	,length: null
	,get_length: function() {
		return this.getVoices().length;
	}
	,bar: null
	,getBar: function() {
		return this.bar;
	}
	,voices: null
	,getVoices: function() {
		if(this.voices != null) return this.voices;
		this.voices = [];
		var _g = 0;
		var _g1 = this.npart.nvoices;
		while(_g < _g1.length) {
			var nvoice = _g1[_g];
			++_g;
			var voice = new nx3.PVoice(nvoice);
			voice.part = this;
			this.voices.push(voice);
		}
		return this.voices;
	}
	,getVoice: function(idx) {
		if(idx < 0 || idx > this.getVoices().length) return null; else return this.getVoices()[idx];
	}
	,complexes: null
	,getComplexes: function() {
		if(this.complexes != null) return this.complexes;
		var generator = new nx3.PPartComplexesGenerator(this);
		this.complexes = generator.getComplexes();
		return this.complexes;
	}
	,positionsComplexes: null
	,getPositionsComplexes: function() {
		if(this.positionsComplexes != null) return this.positionsComplexes;
		this.positionsComplexes = new haxe.ds.IntMap();
		var _g = 0;
		var _g1 = this.getComplexes();
		while(_g < _g1.length) {
			var complex = _g1[_g];
			++_g;
			this.positionsComplexes.set(complex.getValueposition(),complex);
		}
		return this.positionsComplexes;
	}
	,getIndex: function() {
		var _this = this.bar.getParts();
		return HxOverrides.indexOf(_this,this,0);
	}
	,value: null
	,getValue: function() {
		if(this.value != 0) return this.value;
		var _g = 0;
		var _g1 = this.getVoices();
		while(_g < _g1.length) {
			var voice = _g1[_g];
			++_g;
			this.value = Std["int"](Math.max(this.value,voice.getValue()));
		}
		return this.value;
	}
	,rect: null
	,getRect: function() {
		if(this.rect != null) return this.rect;
		var result;
		var _g = this.npart.type;
		result = new nx3.geom.Rectangle(0,-4,1,8);
		var _g1 = 0;
		var _g11 = this.getComplexes();
		while(_g1 < _g11.length) {
			var complex = _g11[_g1];
			++_g1;
			var cr = complex.getRect();
			result = result.union(cr);
		}
		var _g2 = 0;
		var _g12 = this.getVoices();
		while(_g2 < _g12.length) {
			var voice = _g12[_g2];
			++_g2;
			var _g21 = 0;
			var _g3 = voice.getBeamgroups();
			while(_g21 < _g3.length) {
				var beamgroup = _g3[_g21];
				++_g21;
				var dir = beamgroup.getDirection();
				var frame = beamgroup.getFrame();
				if(frame == null) continue;
				var top;
				if(dir == nx3.EDirectionUD.Up) top = Math.min(frame.leftTipY,frame.rightTipY); else top = 0;
				var bottom;
				if(dir == nx3.EDirectionUD.Up) bottom = 0; else bottom = Math.max(frame.leftTipY,frame.rightTipY);
				var br = new nx3.geom.Rectangle(0,top,1,bottom - top);
				result = result.union(br);
			}
		}
		this.rect = result;
		return result;
	}
	,getYAbove: function() {
		var result = 0.0;
		var index;
		var _this = this.bar.getParts();
		index = HxOverrides.indexOf(_this,this,0);
		if(index == 0) result = this.getRect().y; else {
			var prevPart = this.bar.getPart(index - 1);
			result = prevPart.getRect().get_bottom() + -this.getRect().y;
		}
		return result;
	}
	,__class__: nx3.PPart
};
nx3.PPartComplexesGenerator = function(part) {
	this.part = part;
	this.vvoices = part.getVoices();
};
nx3.PPartComplexesGenerator.__name__ = ["nx3","PPartComplexesGenerator"];
nx3.PPartComplexesGenerator.prototype = {
	part: null
	,vvoices: null
	,complexes: null
	,getComplexes: function() {
		if(this.complexes != null) return this.complexes;
		this.positionsMap = this.calcPositionsMap();
		this.calcComplexes(this.positionsMap);
		return this.complexes;
	}
	,calcComplexes: function(positions) {
		this.complexes = [];
		var poskeys = cx.MapTools.keysToArray(positions.keys());
		poskeys = cx.MapTools.sortarray(poskeys);
		var _g = 0;
		while(_g < poskeys.length) {
			var pos = poskeys[_g];
			++_g;
			var vnotes = positions.get(pos);
			var vcomplex = new nx3.PComplex(this.part,vnotes,pos);
			this.complexes.push(vcomplex);
		}
	}
	,positionsMap: null
	,calcPositionsMap: function() {
		var positionsMap = new haxe.ds.IntMap();
		var _g = 0;
		var _g1 = this.vvoices;
		while(_g < _g1.length) {
			var vvoice = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = vvoice.getNotes();
			while(_g2 < _g3.length) {
				var vnote = _g3[_g2];
				++_g2;
				var npos;
				var this1 = vvoice.getNotePositions();
				npos = this1.get(vnote);
				if(!positionsMap.exists(npos)) positionsMap.set(npos,[]);
				positionsMap.get(npos).push(vnote);
			}
		}
		return positionsMap;
	}
	,__class__: nx3.PPartComplexesGenerator
};
nx3.PPartbeamgroupsDirectionCalculator = function(ppart) {
	this.ppart = ppart;
};
nx3.PPartbeamgroupsDirectionCalculator.__name__ = ["nx3","PPartbeamgroupsDirectionCalculator"];
nx3.PPartbeamgroupsDirectionCalculator.prototype = {
	ppart: null
	,calculateBeamgroupsDirections: function() {
		var partbeamgroups = [];
		var _g = 0;
		var _g1 = this.ppart.getVoices();
		while(_g < _g1.length) {
			var pvoice = _g1[_g];
			++_g;
			partbeamgroups.push(pvoice.getBeamgroups());
		}
		var beamgroups0 = partbeamgroups[0];
		var voiceDirection0 = this.ppart.getVoices()[0].nvoice.direction;
		if(voiceDirection0 == null) voiceDirection0 = nx3.EDirectionUAD.Auto;
		if(partbeamgroups.length == 1) {
			var _g2 = 0;
			while(_g2 < beamgroups0.length) {
				var beamgroup = beamgroups0[_g2];
				++_g2;
				var direction = null;
				switch(voiceDirection0[1]) {
				case 0:
					direction = nx3.EDirectionUD.Up;
					break;
				case 2:
					direction = nx3.EDirectionUD.Down;
					break;
				case 1:
					var calculator = new nx3.PBeamgroupDirectionCalculator(beamgroup);
					direction = calculator.getDirection();
					break;
				}
				beamgroup.setDirection(direction);
			}
		} else if(partbeamgroups.length == 2) {
			var beamgroups1 = partbeamgroups[1];
			var voiceDirection1 = this.ppart.getVoices()[1].nvoice.direction;
			if(voiceDirection1 == null) voiceDirection0 = nx3.EDirectionUAD.Auto;
			var voice0 = this.ppart.getVoices()[0];
			var voice1 = this.ppart.getVoices()[1];
			if(voiceDirection0 == nx3.EDirectionUAD.Auto && voiceDirection1 == nx3.EDirectionUAD.Auto) {
				var voice0value = voice0.getValue();
				var voice1value = voice1.getValue();
				var direction1 = null;
				var bgPosition = 0;
				var _g3 = 0;
				while(_g3 < beamgroups0.length) {
					var beamgroup1 = beamgroups0[_g3];
					++_g3;
					if(bgPosition < voice1value) direction1 = nx3.EDirectionUD.Up; else {
						var calculator1 = new nx3.PBeamgroupDirectionCalculator(beamgroup1);
						direction1 = calculator1.getDirection();
					}
					beamgroup1.setDirection(direction1);
					bgPosition += beamgroup1.getValue();
				}
				var bgPosition1 = 0;
				var _g4 = 0;
				while(_g4 < beamgroups1.length) {
					var beamgroup2 = beamgroups1[_g4];
					++_g4;
					if(bgPosition1 < voice0value) direction1 = nx3.EDirectionUD.Down; else {
						var calculator2 = new nx3.PBeamgroupDirectionCalculator(beamgroup2);
						direction1 = calculator2.getDirection();
					}
					beamgroup2.setDirection(direction1);
					bgPosition1 += beamgroup2.getValue();
				}
			} else {
				var _g5 = 0;
				while(_g5 < beamgroups0.length) {
					var beamgroup3 = beamgroups0[_g5];
					++_g5;
					beamgroup3.setDirection(nx3.EDirectionTools.uadToUd(voice0.nvoice.direction));
				}
				var _g6 = 0;
				while(_g6 < beamgroups1.length) {
					var beamgroup4 = beamgroups1[_g6];
					++_g6;
					beamgroup4.setDirection(nx3.EDirectionTools.uadToUd(voice1.nvoice.direction));
				}
			}
		} else throw "SHOULDN'T HAPPEN";
	}
	,__class__: nx3.PPartbeamgroupsDirectionCalculator
};
nx3.PScore = function(nscore) {
	this.prevSystemwidth = 0;
	this.nscore = nscore;
};
nx3.PScore.__name__ = ["nx3","PScore"];
nx3.PScore.prototype = {
	nscore: null
	,bars: null
	,getBars: function() {
		if(this.bars != null) return this.bars;
		this.bars = [];
		var _g = 0;
		var _g1 = this.nscore.nbars;
		while(_g < _g1.length) {
			var nbar = _g1[_g];
			++_g;
			var bar = new nx3.PBar(nbar);
			bar.score = this;
			this.bars.push(bar);
		}
		return this.bars;
	}
	,getNBars: function() {
		var result = [];
		var _g = 0;
		var _g1 = this.getBars();
		while(_g < _g1.length) {
			var bar = _g1[_g];
			++_g;
			result.push(bar.nbar);
		}
		return result;
	}
	,systems: null
	,prevSystemwidth: null
	,getSystems: function(systemwidth) {
		if(systemwidth != this.prevSystemwidth) this.systems = null;
		if(this.systems != null) return this.systems;
		this.systems = new nx3.PScoreSystemsGenerator(this,this.getBars()).getsSystems([systemwidth]);
		var _g = 0;
		var _g1 = this.systems;
		while(_g < _g1.length) {
			var system = _g1[_g];
			++_g;
			system.calculateSystembarXs();
		}
		var _g2 = 0;
		var _g11 = this.systems;
		while(_g2 < _g11.length) {
			var system1 = _g11[_g2];
			++_g2;
			var ifMoreThan;
			if(system1 != cx.ArrayTools.last(this.systems)) ifMoreThan = 0; else ifMoreThan = system1.getSystemBreakWidth() * .7;
			new nx3.PScoreSystemStretcher(system1).stretchTo(system1.getSystemBreakWidth(),ifMoreThan);
		}
		return this.systems;
	}
	,getBar: function(idx) {
		if(idx < 0 || idx > this.getBars().length) return null; else return this.getBars()[idx];
	}
	,getSystemY: function(system) {
		if(this.systems == null) throw "Systems == null";
		var systemidx = HxOverrides.indexOf(this.systems,system,0);
		var sysY = .0;
		var _g = 0;
		while(_g < systemidx) {
			var i = _g++;
			sysY += this.systems[i].getHeight();
		}
		return sysY;
	}
	,getHeight: function() {
		if(this.systems == null) throw "Systems == null";
		var lastsystem = cx.ArrayTools.last(this.systems);
		return this.getSystemY(lastsystem) + lastsystem.getHeight();
	}
	,getWidth: function() {
		if(this.systems == null) throw "Systems == null";
		var w = .0;
		var _g = 0;
		var _g1 = this.systems;
		while(_g < _g1.length) {
			var sys = _g1[_g];
			++_g;
			w = Math.max(w,sys.getBarsWidth());
		}
		return w;
	}
	,__class__: nx3.PScore
};
nx3.PScoreSystemStretcher = function(system) {
	this.system = system;
};
nx3.PScoreSystemStretcher.__name__ = ["nx3","PScoreSystemStretcher"];
nx3.PScoreSystemStretcher.prototype = {
	system: null
	,stretchTo: function(stretchSystemToWidth,ifMoreThan) {
		if(ifMoreThan == null) ifMoreThan = 0;
		if(ifMoreThan > 0) {
			if(this.system.getWidth() <= ifMoreThan) return true;
		}
		var diff = stretchSystemToWidth - this.system.getWidth();
		var totalvalue = this.system.getValue();
		var _g = 0;
		var _g1 = this.system.getSystembars();
		while(_g < _g1.length) {
			var systembar = _g1[_g];
			++_g;
			var stretchamount = systembar.bar.getValue() / totalvalue * diff;
			systembar.setBarStretch(stretchamount);
		}
		this.system.calculateSystembarXs();
		return false;
	}
	,__class__: nx3.PScoreSystemStretcher
};
nx3.PScoreSystemsGenerator = function(score,bars) {
	this.bars = bars;
	this.score = score;
};
nx3.PScoreSystemsGenerator.__name__ = ["nx3","PScoreSystemsGenerator"];
nx3.PScoreSystemsGenerator.prototype = {
	bars: null
	,score: null
	,getsSystems: function(systemwidths) {
		var tempbars = this.bars.slice();
		var result = new Array();
		var sysidx = 0;
		var prevbarAttributes = null;
		while(tempbars.length > 0) {
			var syswidth;
			if((sysidx < 0 || sysidx > systemwidths.length - 1?null:systemwidths[sysidx]) != null) syswidth = systemwidths[sysidx]; else syswidth = systemwidths[0];
			var generator = new nx3.PSystemBarsGenerator(this.score,tempbars,{ showFirstClef : true, showFirstKey : true, showFirstTime : sysidx == 0},prevbarAttributes,syswidth,new nx3.PBarWidthCalculator());
			var system = generator.getSystem();
			prevbarAttributes = system.getLastBarAttributes();
			result.push(system);
			sysidx++;
		}
		return result;
	}
	,__class__: nx3.PScoreSystemsGenerator
};
nx3.PSignsCalculator = function(notes) {
	this.notes = notes;
};
nx3.PSignsCalculator.__name__ = ["nx3","PSignsCalculator"];
nx3.PSignsCalculator.prototype = {
	notes: null
	,getSigns: function() {
		var signs;
		signs = this.calcUnsortedSigns(this.notes);
		signs = this.calcSortSigns(signs);
		return signs;
	}
	,visibleSigns: null
	,getVisibleSigns: function() {
		return this.calcVisibleSigns(this.getSigns());
	}
	,calcVisibleSigns: function(signs) {
		var visibleSigns = [];
		var _g = 0;
		while(_g < signs.length) {
			var sign = signs[_g];
			++_g;
			if(sign.sign == nx3.ESign.None) continue;
			visibleSigns.push(sign);
		}
		return visibleSigns;
	}
	,calcUnsortedSigns: function(notes) {
		var PSigns = [];
		var _g = 0;
		while(_g < notes.length) {
			var note = notes[_g];
			++_g;
			var _g1 = 0;
			var _g2 = note.nnote.get_nheads();
			while(_g1 < _g2.length) {
				var nhead = _g2[_g1];
				++_g1;
				var tsign = { sign : nhead.sign, level : nhead.level, position : 0};
				PSigns.push(tsign);
			}
		}
		return PSigns;
	}
	,calcSortSigns: function(PSigns) {
		PSigns.sort(function(a,b) {
			return Reflect.compare(a.level,b.level);
		});
		return PSigns;
	}
	,__class__: nx3.PSignsCalculator
};
nx3.PSignsRectsCalculator = function(signs) {
	this.signs = signs;
};
nx3.PSignsRectsCalculator.__name__ = ["nx3","PSignsRectsCalculator"];
nx3.PSignsRectsCalculator.prototype = {
	signs: null
	,getSignRects: function(headsRects) {
		var rects = new Array();
		if(headsRects == null) headsRects = [];
		var _g = 0;
		var _g1 = this.signs;
		while(_g < _g1.length) {
			var sign = _g1[_g];
			++_g;
			var rect = this.getSignRect(sign.sign);
			rect.offset(-rect.width,sign.level);
			var _g2 = 0;
			while(_g2 < headsRects.length) {
				var hr = headsRects[_g2];
				++_g2;
				var i = rect.intersection(hr);
				var count = 0;
				while(i.width > 0.0000001) {
					rect.offset(-i.width,0);
					i = rect.intersection(hr);
					if(count > 5) break;
					count++;
				}
			}
			var _g21 = 0;
			while(_g21 < rects.length) {
				var r = rects[_g21];
				++_g21;
				var i1 = r.intersection(rect);
				while(i1.width > 0 || i1.height > 0) {
					rect.x = r.x - rect.width;
					i1 = r.intersection(rect);
				}
			}
			rects.push(rect);
		}
		return rects;
	}
	,getSignRect: function(sign) {
		switch(sign[1]) {
		case 0:
			return null;
		case 5:
			return new nx3.geom.Rectangle(0,-1.5,2.6,3);
		case 7:case 8:case 6:
			return new nx3.geom.Rectangle(0,-2,4.4,4);
		case 2:
			return new nx3.geom.Rectangle(0,-3,2.6,5);
		default:
			return new nx3.geom.Rectangle(0,-3,2.6,6);
		}
		throw "This shouldn't happen!";
		return null;
	}
	,__class__: nx3.PSignsRectsCalculator
};
nx3.PStaveRectCalculator = function(note) {
	this.note = note;
};
nx3.PStaveRectCalculator.__name__ = ["nx3","PStaveRectCalculator"];
nx3.PStaveRectCalculator.prototype = {
	note: null
	,getStaveRect: function() {
		if(this.note.nnote.type[0] != "Note") return null;
		if(nx3.ENoteValTools.stavinglevel(this.note.nnote.value) < 1) return null;
		var headw;
		var _g = nx3.ENoteValTools.head(this.note.nnote.value);
		switch(_g[1]) {
		case 2:
			headw = 2.2;
			break;
		default:
			headw = 1.6;
		}
		var rect = null;
		if(this.note.getDirection() == nx3.EDirectionUD.Up) rect = new nx3.geom.Rectangle(0,this.note.nnote.get_bottomLevel() - 7,headw,7); else rect = new nx3.geom.Rectangle(-headw,this.note.nnote.get_topLevel(),headw,7);
		rect.offset(this.note.getXOffset(),0);
		return rect;
	}
	,getFlagRect: function() {
		if(this.note.nnote.type[0] != "Note") return null;
		if(nx3.ENoteValTools.beaminglevel(this.note.nnote.value) < 1) return null;
		var beamgroup = this.note.getBeamgroup();
		if(beamgroup != null && beamgroup.pnotes.length == 1) {
			if(nx3.ENoteValTools.beaminglevel(this.note.nnote.value) > 0) {
				var headw;
				var _g = nx3.ENoteValTools.head(this.note.nnote.value);
				switch(_g[1]) {
				case 2:
					headw = 2.2;
					break;
				default:
					headw = 1.6;
				}
				var rect = null;
				if(this.note.getDirection() == nx3.EDirectionUD.Up) rect = new nx3.geom.Rectangle(headw,this.note.nnote.get_bottomLevel() - 7,2.6,4.8); else rect = new nx3.geom.Rectangle(-headw,this.note.nnote.get_topLevel() + 7 - 4.8,2.6,4.8);
				rect.offset(this.note.getXOffset(),0);
				return rect;
			}
		}
		return null;
	}
	,__class__: nx3.PStaveRectCalculator
};
nx3.PSystem = function(score) {
	this.systemBreakWidth = 0;
	this.systembars = [];
	this.width = 0;
	this.score = score;
};
nx3.PSystem.__name__ = ["nx3","PSystem"];
nx3.PSystem.prototype = {
	score: null
	,status: null
	,getStatus: function() {
		return this.status;
	}
	,width: null
	,getWidth: function() {
		return this.width;
	}
	,systembars: null
	,getSystembars: function() {
		return this.systembars;
	}
	,getLastBarAttributes: function() {
		if(this.systembars.length == 0) return null;
		return cx.ArrayTools.last(this.systembars).actAttributes;
	}
	,systemBreakWidth: null
	,getSystemBreakWidth: function() {
		return this.systemBreakWidth;
	}
	,value: null
	,getValue: function() {
		if(this.value != null) return this.value;
		this.value = 0;
		var _g = 0;
		var _g1 = this.getSystembars();
		while(_g < _g1.length) {
			var systembar = _g1[_g];
			++_g;
			this.value += systembar.bar.getValue();
		}
		return this.value;
	}
	,calculateSystembarXs: function() {
		var x = 0.0;
		var _g = 0;
		var _g1 = this.getSystembars();
		while(_g < _g1.length) {
			var systemBar = _g1[_g];
			++_g;
			systemBar.xposition = x;
			x += systemBar.getBarMeasurements().getTotalWidth();
		}
	}
	,getSpaceAbovePart: function(partIdx) {
		var distance = 0.0;
		var baridx = 0;
		var _g = 0;
		var _g1 = this.getSystembars();
		while(_g < _g1.length) {
			var systembar = _g1[_g];
			++_g;
			var part = systembar.bar.getPart(partIdx);
			if(part == null) {
				haxe.Log.trace("part == null",{ fileName : "PSystem.hx", lineNumber : 71, className : "nx3.PSystem", methodName : "getSpaceAbovePart"});
				continue;
			}
			var partdistance = 0.0;
			var partrect = part.getRect();
			if(partIdx == 0) partdistance = -partrect.get_top(); else {
				var prevpart = systembar.bar.getParts()[partIdx - 1];
				var prevpartrect = prevpart.getRect();
				partdistance = prevpartrect.get_bottom() + -partrect.get_top();
			}
			distance = Math.max(distance,partdistance);
			baridx++;
		}
		return distance;
	}
	,getPartY: function(partidx) {
		var party = 0.0;
		var _g1 = 0;
		var _g = partidx + 1;
		while(_g1 < _g) {
			var idx = _g1++;
			party += this.getSpaceAbovePart(idx);
		}
		return party;
	}
	,getHeight: function() {
		var partcount = this.getSystembars()[0].bar.getParts().length - 1;
		var partbottom;
		var pb = 0.0;
		var _g = 0;
		var _g1 = this.getSystembars();
		while(_g < _g1.length) {
			var sb = _g1[_g];
			++_g;
			pb = Math.max(pb,sb.bar.getPart(partcount).getRect().get_bottom());
		}
		partbottom = pb;
		return this.getPartY(partcount) + partbottom;
	}
	,getSystembarX: function(systembar) {
		var idx;
		var _this = this.getSystembars();
		idx = HxOverrides.indexOf(_this,systembar,0);
		var x = .0;
		var _g = 0;
		var _g1 = this.getSystembars();
		while(_g < _g1.length) {
			var sb = _g1[_g];
			++_g;
			if(sb == systembar) return x;
			x += sb.getBarMeasurements().getTotalWidth();
		}
		return 0;
	}
	,getBarsWidth: function() {
		var lastbar = cx.ArrayTools.last(this.getSystembars());
		return this.getSystembarX(lastbar) + lastbar.getBarMeasurements().getTotalWidth();
	}
	,getY: function() {
		if(this.score == null) {
			return 0;
			throw "Score == null";
		}
		return this.score.getSystemY(this);
	}
	,__class__: nx3.PSystem
};
nx3.PSystemBar = function(system,bar,barConfig,barMeasurements,actAttributes,caAttributes) {
	this.stretchamount = 0;
	this.system = system;
	this.bar = bar;
	this.bar.systembar = this;
	this.barConfig = barConfig;
	this.barMeasurements = barMeasurements;
	this.actAttributes = actAttributes;
	this.caAttributes = caAttributes;
};
nx3.PSystemBar.__name__ = ["nx3","PSystemBar"];
nx3.PSystemBar.prototype = {
	system: null
	,bar: null
	,barConfig: null
	,actAttributes: null
	,caAttributes: null
	,stretchamount: null
	,setBarStretch: function(amount) {
		if(amount == this.stretchamount) return;
		var calculator = new nx3.PBarStretchCalculator(this);
		if(amount == 0) calculator.resetStretch(); else calculator.stretch(amount);
	}
	,barMeasurements: null
	,getBarMeasurements: function() {
		if(this.barMeasurements != null) return this.barMeasurements;
		this.barMeasurements = new nx3.PSystembarMeasurements(this.bar).init(this.actAttributes,this.barConfig,this.caAttributes);
		return this.barMeasurements;
	}
	,xposition: null
	,getXPosition: function() {
		return this.xposition;
	}
	,getX: function() {
		if(this.system == null) throw "System == null";
		return this.system.getSystembarX(this);
	}
	,__class__: nx3.PSystemBar
};
nx3.PSystemBarsGenerator = function(score,bars,systemConfig,prevBarAttributes,breakSystemwidth,barWidthCalculator) {
	this.score = score;
	this.bars = bars;
	this.systemConfig = systemConfig;
	this.prevBarAttributes = prevBarAttributes;
	this.breakSystemwidth = breakSystemwidth;
	this.system = new nx3.PSystem(this.score);
	this.barWidthCalculator = barWidthCalculator;
};
nx3.PSystemBarsGenerator.__name__ = ["nx3","PSystemBarsGenerator"];
nx3.PSystemBarsGenerator.prototype = {
	bars: null
	,systemConfig: null
	,prevBarAttributes: null
	,breakSystemwidth: null
	,system: null
	,barWidthCalculator: null
	,score: null
	,getSystem: function() {
		this.system.systemBreakWidth = this.breakSystemwidth;
		var tryAnotherBar = true;
		while(tryAnotherBar) {
			var currentBar = this.bars[0];
			var currentBarConfig = new nx3.PBarConfig();
			var currentBarAttributes = this.getBarAttributes(currentBar);
			if(this.prevBarAttributes != null) this.overrideActualAttributesFromPrevBarAttributes(currentBarAttributes,currentBar,this.prevBarAttributes);
			this.overrideActualAttributesWithDefaultsIfStillNotSet(currentBarAttributes);
			if(this.system.getSystembars().length == 0) this.adaptBarConfig(currentBar,currentBarConfig,this.prevBarAttributes,this.systemConfig.showFirstClef,this.systemConfig.showFirstKey,this.systemConfig.showFirstTime); else this.adaptBarConfig(currentBar,currentBarConfig,this.prevBarAttributes,this.systemConfig.showFollowingClef,this.systemConfig.showFollowingKey,this.systemConfig.showFollowingTime);
			var currentMeasurements = new nx3.PSystembarMeasurements(currentBar).init(currentBarAttributes,currentBarConfig);
			var testSystemWidth = this.system.width + currentMeasurements.getTotalWidth();
			if(testSystemWidth > this.breakSystemwidth) {
				this.takeCareOfLastBarCautions();
				return this.system;
			}
			this.system.width += currentMeasurements.getTotalWidth();
			this.system.getSystembars().push(new nx3.PSystemBar(this.system,currentBar,currentBarConfig,currentMeasurements,currentBarAttributes,null));
			this.bars.shift();
			this.prevBarAttributes = this.copyBarAttributes(currentBarAttributes);
			if(this.bars.length < 1) tryAnotherBar = false;
		}
		this.system.status = nx3.PSystemStatus.Ok;
		return this.system;
	}
	,takeCareOfLastBarCautions: function() {
		this.system.status = nx3.PSystemStatus.Ok;
		var sysBar = cx.ArrayTools.last(this.system.getSystembars()).bar;
		var sysBarAttributes = cx.ArrayTools.last(this.system.getSystembars()).actAttributes;
		if(sysBar != cx.ArrayTools.last(this.bars)) {
			var nextBar = this.bars[0];
			var nextBarAttributes = this.getBarAttributes(nextBar);
			var newClef = this.arrayBNullOrDiffers(sysBarAttributes.clefs,nextBarAttributes.clefs);
			var newKey = this.arrayBNullOrDiffers(sysBarAttributes.keys,nextBarAttributes.keys);
			var newTime = this.nullOrDiffers(sysBarAttributes.time,nextBarAttributes.time);
			if(newClef || newKey || newTime) {
				var sysBarCautAttributes = this.copyAndRemoveRedundantAttributes(sysBarAttributes,nextBarAttributes);
				var sysBarConfig = cx.ArrayTools.last(this.system.getSystembars()).barConfig;
				var sysBarWidth = cx.ArrayTools.last(this.system.getSystembars()).getBarMeasurements().getTotalWidth();
				var systemWidthWithoutLastBar = this.system.width - sysBarWidth;
				var sysBarConfigWithCautions = new nx3.PBarConfig(sysBarConfig.showClef,sysBarConfig.showKey,sysBarConfig.showTime);
				if(newClef) sysBarConfigWithCautions.showCautClef = true;
				if(newKey) sysBarConfigWithCautions.showCautKey = true;
				if(newTime) sysBarConfigWithCautions.showCautTime = true;
				var measurementsWithCautions = new nx3.PSystembarMeasurements(sysBar).init(sysBarAttributes,sysBarConfigWithCautions,sysBarCautAttributes);
				if(systemWidthWithoutLastBar + measurementsWithCautions.getTotalWidth() <= this.breakSystemwidth) {
					cx.ArrayTools.last(this.system.getSystembars()).caAttributes = sysBarCautAttributes;
					cx.ArrayTools.last(this.system.getSystembars()).barConfig = sysBarConfigWithCautions;
					this.system.width = this.system.getWidth() - sysBarWidth + cx.ArrayTools.last(this.system.getSystembars()).getBarMeasurements().getTotalWidth();
				} else {
					this.system.status = nx3.PSystemStatus.Problem(101,"Last bar fits without caution attributes but not with them");
					if(this.system.getSystembars().length == 1) {
						this.system.status = nx3.PSystemStatus.Problem(102,"First bar doesn't fit when adding required cational attributes");
						return;
					}
					this.system.getSystembars().pop();
					this.bars.unshift(sysBar);
					this.system.width = this.system.width - sysBarWidth;
					this.system.status = nx3.PSystemStatus.Ok;
				}
			}
		}
	}
	,copyAndRemoveRedundantAttributes: function(sysBarAttributes,nextBarAttributes) {
		var result = this.copyBarAttributes(nextBarAttributes);
		var _g1 = 0;
		var _g = sysBarAttributes.clefs.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(result.clefs[i] == sysBarAttributes.clefs[i]) result.clefs[i] = null;
		}
		var _g11 = 0;
		var _g2 = sysBarAttributes.keys.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			if(result.keys[i1] == sysBarAttributes.keys[i1]) result.keys[i1] = null;
		}
		if(result.time == sysBarAttributes.time) result.time = null;
		return result;
	}
	,adaptBarConfig: function(bar,barConfig,prevBarAttributes,showClef,showKey,showTime) {
		if(showClef == true) showClef = true; else showClef = false;
		if(showKey == true) showKey = true; else showKey = false;
		if(showTime == true) showTime = true; else showTime = false;
		var barAttributes = this.getBarAttributes(bar);
		var _g = bar.get_displayClefs();
		switch(_g[1]) {
		case 2:
			barConfig.showClef = false;
			break;
		case 0:
			barConfig.showClef = true;
			break;
		default:
			barConfig.showClef = showClef;
			if(showClef == false && prevBarAttributes != null) {
				var _g2 = 0;
				var _g1 = prevBarAttributes.clefs.length;
				while(_g2 < _g1) {
					var i = _g2++;
					if(bar.get_clefs()[i] == null) continue;
					if(bar.get_clefs()[i] == prevBarAttributes.clefs[i]) continue;
					barConfig.showClef = true;
					break;
				}
			}
		}
		var _g3 = bar.get_displayKeys();
		switch(_g3[1]) {
		case 2:
			barConfig.showKey = false;
			break;
		case 0:
			barConfig.showKey = true;
			break;
		default:
			barConfig.showKey = showKey;
			if(showKey == false && prevBarAttributes != null) {
				var _g21 = 0;
				var _g11 = prevBarAttributes.keys.length;
				while(_g21 < _g11) {
					var i1 = _g21++;
					if(bar.get_keys()[i1] == null) continue;
					if(bar.get_keys()[i1] == prevBarAttributes.keys[i1]) continue;
					barConfig.showKey = true;
					break;
				}
			}
		}
		var _g4 = bar.get_displayTime();
		switch(_g4[1]) {
		case 2:
			barConfig.showTime = false;
			break;
		case 0:
			barConfig.showTime = true;
			break;
		default:
			barConfig.showTime = showTime;
			if(showTime == false && prevBarAttributes != null) {
				if(bar.get_time() == null) {
				} else if(bar.get_time() == prevBarAttributes.time) {
				} else barConfig.showTime = true;
			}
		}
	}
	,copyBarAttributes: function(barAttributes) {
		var result = { clefs : new Array(), keys : new Array(), time : null};
		result.clefs = barAttributes.clefs.slice();
		result.keys = barAttributes.keys.slice();
		result.time = barAttributes.time;
		return result;
	}
	,overrideActualAttributesWithDefaultsIfStillNotSet: function(currentBarAttributes) {
		var _g1 = 0;
		var _g = currentBarAttributes.clefs.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(currentBarAttributes.clefs[i] == null) currentBarAttributes.clefs[i] = nx3.PSystemBarsGenerator.defaultClef;
		}
		var _g11 = 0;
		var _g2 = currentBarAttributes.keys.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			if(currentBarAttributes.keys[i1] == null) currentBarAttributes.keys[i1] = nx3.PSystemBarsGenerator.defaultKey;
		}
		if(currentBarAttributes.time == null) currentBarAttributes.time = nx3.PSystemBarsGenerator.defaultTime;
	}
	,overrideActualAttributesFromPrevBarAttributes: function(currentBarAttributes,currentBar,prevBarAttributes) {
		if(!this.compareBarAttributesValidity(currentBarAttributes,prevBarAttributes)) throw "Attributes non compatible";
		var _g1 = 0;
		var _g = currentBar.get_clefs().length;
		while(_g1 < _g) {
			var i = _g1++;
			if(currentBar.get_clefs()[i] == null && prevBarAttributes.clefs[i] != null) currentBarAttributes.clefs[i] = prevBarAttributes.clefs[i];
		}
		var _g11 = 0;
		var _g2 = currentBar.get_keys().length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			if(currentBar.get_keys()[i1] == null && prevBarAttributes.keys[i1] != null) currentBarAttributes.keys[i1] = prevBarAttributes.keys[i1];
		}
		if(currentBar.get_time() == null && prevBarAttributes.time != null) currentBarAttributes.time = prevBarAttributes.time;
	}
	,getBarAttributes: function(bar) {
		var time = cx.ArrayTools.first((function($this) {
			var $r;
			var _this = [bar.get_time()];
			$r = _this.slice();
			return $r;
		}(this)));
		var result = { clefs : (function($this) {
			var $r;
			var _this1 = bar.get_clefs();
			$r = _this1.slice();
			return $r;
		}(this)), keys : (function($this) {
			var $r;
			var _this2 = bar.get_keys();
			$r = _this2.slice();
			return $r;
		}(this)), time : time};
		return result;
	}
	,compareBarAttributesValidity: function(barAttributesA,barAttributesB) {
		if(barAttributesA.clefs.length != barAttributesB.clefs.length) return false;
		if(barAttributesA.keys.length != barAttributesB.keys.length) return false;
		return true;
	}
	,arrayBNullOrDiffers: function(itemA,itemB) {
		if(cx.ArrayTools.allNull(itemB)) return false;
		var _g1 = 0;
		var _g = itemA.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(itemB[i] != null && itemB[i] != itemA[i]) return true;
		}
		return false;
	}
	,nullOrDiffers: function(itemA,itemB) {
		if(itemB == null) return false;
		return itemB != itemA;
	}
	,__class__: nx3.PSystemBarsGenerator
};
nx3.PSystemStatus = { __ename__ : true, __constructs__ : ["Ok","Problem"] };
nx3.PSystemStatus.Ok = ["Ok",0];
nx3.PSystemStatus.Ok.toString = $estr;
nx3.PSystemStatus.Ok.__enum__ = nx3.PSystemStatus;
nx3.PSystemStatus.Problem = function(code,msg) { var $x = ["Problem",1,code,msg]; $x.__enum__ = nx3.PSystemStatus; $x.toString = $estr; return $x; };
nx3.PSystembarMeasurements = function(bar) {
	this.barlineWidth = 0;
	this.cautTimeWidth = 0;
	this.cautKeyWidth = 0;
	this.cautClefWidth = 0;
	this.contentWidth = 0;
	this.contentXZero = 0;
	this.leftContentMarginWidth = 0;
	this.timeWidth = 0;
	this.keyWidth = 0;
	this.clefWidth = 0;
	this.ackoladeWidth = 0;
	this.bar = bar;
};
nx3.PSystembarMeasurements.__name__ = ["nx3","PSystembarMeasurements"];
nx3.PSystembarMeasurements.prototype = {
	bar: null
	,ackoladeWidth: null
	,getAckoladeXPosition: function() {
		return 0;
	}
	,clefWidth: null
	,getClefXPosition: function() {
		return this.getAckoladeXPosition() + this.ackoladeWidth;
	}
	,keyWidth: null
	,getKeyXPosition: function() {
		return this.getClefXPosition() + this.clefWidth;
	}
	,timeWidth: null
	,getTimeXPosition: function() {
		return this.getKeyXPosition() + this.keyWidth;
	}
	,leftContentMarginWidth: null
	,getLeftContentMarginXPosition: function() {
		return this.getTimeXPosition() + this.timeWidth;
	}
	,contentXZero: null
	,getContentXZero: function() {
		return this.contentXZero;
	}
	,contentWidth: null
	,getContentXPosition: function() {
		return this.getLeftContentMarginXPosition() + this.leftContentMarginWidth;
	}
	,getContentWidth: function() {
		return this.contentWidth;
	}
	,setContentWidth: function(val) {
		this.contentWidth = val;
	}
	,cautClefWidth: null
	,getCautClefXPosition: function() {
		return this.getContentXPosition() + this.contentWidth;
	}
	,cautKeyWidth: null
	,getCautKeyXPosition: function() {
		return this.getCautClefXPosition() + this.cautClefWidth;
	}
	,cautTimeWidth: null
	,getCautTimeXPosition: function() {
		return this.getCautKeyXPosition() + this.cautKeyWidth;
	}
	,barlineWidth: null
	,getBarlineXPosition: function() {
		return this.getCautTimeXPosition() + this.cautTimeWidth;
	}
	,getTotalWidth: function() {
		return this.getBarlineXPosition() + this.barlineWidth;
	}
	,init: function(barAttributes,barConfig,cautAttributes) {
		var calculator = new nx3.PBarWidthCalculator();
		this.ackoladeWidth = calculator.getLeftBarlineWidth(nx3.EBarlineLeft.None);
		if(barConfig.showClef) this.clefWidth = calculator.getClefsWidth(barAttributes.clefs);
		if(barConfig.showKey) this.keyWidth = calculator.getKeysWidth(barAttributes.keys);
		if(barConfig.showTime) this.timeWidth += calculator.getTimeWidth(barAttributes.time);
		this.leftContentMarginWidth = calculator.getContentLeftMarginWidth(this.bar);
		this.contentWidth = calculator.getContentWidth(this.bar);
		this.contentXZero = this.bar.getContentXZero();
		if(barConfig.showCautClef && cautAttributes != null) this.cautClefWidth = calculator.getClefsWidth(cautAttributes.clefs);
		if(barConfig.showCautKey && cautAttributes != null) this.cautKeyWidth = calculator.getKeysWidth(cautAttributes.keys);
		if(barConfig.showCautTime && cautAttributes != null) this.cautTimeWidth += calculator.getTimeWidth(cautAttributes.time);
		this.barlineWidth = calculator.getBarlineWidth(nx3.EBarline.Normal);
		return this;
	}
	,__class__: nx3.PSystembarMeasurements
};
nx3.PVoice = function(nvoice) {
	this.nvoice = nvoice;
};
nx3.PVoice.__name__ = ["nx3","PVoice"];
nx3.PVoice.prototype = {
	nvoice: null
	,iterator: function() {
		var _this = this.getNotes();
		return HxOverrides.iter(_this);
	}
	,length: null
	,get_length: function() {
		return this.getNotes().length;
	}
	,part: null
	,getPart: function() {
		return this.part;
	}
	,notes: null
	,getNotes: function() {
		if(this.notes != null) return this.notes;
		this.notes = [];
		var _g = 0;
		var _g1 = this.nvoice.nnotes;
		while(_g < _g1.length) {
			var nnote = _g1[_g];
			++_g;
			var pnote = new nx3.PNote(nnote);
			pnote.voice = this;
			this.notes.push(pnote);
		}
		return this.notes;
	}
	,getNote: function(idx) {
		if(idx < 0 || idx > this.getNotes().length) return null; else return this.getNotes()[idx];
	}
	,value: null
	,getValue: function() {
		if(this.value != null) return this.value;
		if(this.notes == null) this.getNotes();
		this.value = 0;
		var _g = 0;
		var _g1 = this.notes;
		while(_g < _g1.length) {
			var pnote = _g1[_g];
			++_g;
			this.value += nx3.ENoteValTools.value(pnote.nnote.value);
		}
		return this.value;
	}
	,beamgroups: null
	,beampattern: null
	,getBeamgroups: function(pattern) {
		if(pattern != null && pattern != this.beampattern) {
			this.beampattern = pattern;
			this.beamgroups = null;
		}
		if(this.beamgroups != null) return this.beamgroups;
		this.beamgroups = new nx3.PVoiceBeamgroupsGenerator(this.getNotes(),pattern).getBeamgroups();
		return this.beamgroups;
	}
	,pnotePositions: null
	,getNotePositions: function() {
		if(this.pnotePositions != null) return this.pnotePositions;
		if(this.notes == null) this.getNotes();
		this.pnotePositions = new haxe.ds.ObjectMap();
		var pos = 0;
		var _g = 0;
		var _g1 = this.notes;
		while(_g < _g1.length) {
			var pnote = _g1[_g];
			++_g;
			this.pnotePositions.set(pnote,pos);
			pos += nx3.ENoteValTools.value(pnote.nnote.value);
		}
		return this.pnotePositions;
	}
	,__class__: nx3.PVoice
};
nx3.PVoiceBeamgroupsGenerator = function(pnotes,pattern) {
	if(pattern == null) pattern = [nx3.ENoteVal.Nv4];
	this.voice = pnotes[0].getVoice();
	this.notes = pnotes;
	this.pattern = pattern;
	this.adjustPatternLenght();
};
nx3.PVoiceBeamgroupsGenerator.__name__ = ["nx3","PVoiceBeamgroupsGenerator"];
nx3.PVoiceBeamgroupsGenerator.prototype = {
	notes: null
	,pattern: null
	,voice: null
	,getBeamgroups: function() {
		var patternPositions = this.getPatternPositions();
		var notesPositions = this.getNotesPositions();
		var notesBeamgroupPosIndexes = this.getNotesBeamgroupPosIndexes(patternPositions,notesPositions);
		var beamgroups = this.createBeamgroups(notesBeamgroupPosIndexes);
		return beamgroups;
	}
	,createBeamgroups: function(indexes) {
		var noteIdx = 0;
		var prevBeamgroupPosIdx = -1;
		var groupIdx = -1;
		var result = [];
		var pnoteGroupIdx = [];
		var groupIdxpnotes = [];
		var _g = 0;
		var _g1 = this.notes;
		while(_g < _g1.length) {
			var pnote = _g1[_g];
			++_g;
			var beamgroupPosIdx = indexes[noteIdx];
			if(beamgroupPosIdx == -1) {
				groupIdx++;
				pnoteGroupIdx.push(groupIdx);
			} else {
				if(prevBeamgroupPosIdx != beamgroupPosIdx) groupIdx++;
				pnoteGroupIdx.push(groupIdx);
			}
			prevBeamgroupPosIdx = beamgroupPosIdx;
			noteIdx++;
		}
		var noteIdx1 = 0;
		var grouppnotes = [];
		var pnotes = null;
		var _g2 = 0;
		var _g11 = this.notes;
		while(_g2 < _g11.length) {
			var pnote1 = _g11[_g2];
			++_g2;
			var groupIdx1 = pnoteGroupIdx[noteIdx1];
			if(grouppnotes[groupIdx1] == null) grouppnotes[groupIdx1] = [];
			grouppnotes[groupIdx1].push(pnote1);
			noteIdx1++;
		}
		var _g3 = 0;
		while(_g3 < grouppnotes.length) {
			var group = grouppnotes[_g3];
			++_g3;
			var beamgroup = new nx3.PBeamgroup(group);
			result.push(beamgroup);
		}
		return result;
	}
	,getNotesBeamgroupPosIndexes: function(patternPositions,notesPositions) {
		var findPatternIdxForNote = function(curNotePos) {
			var _g1 = 0;
			var _g = patternPositions.length;
			while(_g1 < _g) {
				var p = _g1++;
				var curPatternPos = patternPositions[p];
				if(curNotePos.start >= curPatternPos.start && curNotePos.end <= curPatternPos.end) return p;
			}
			return -1;
		};
		var result = [];
		var p1 = 0;
		var curPatternPos1 = patternPositions[p1];
		var _g11 = 0;
		var _g2 = this.notes.length;
		while(_g11 < _g2) {
			var n = _g11++;
			var curNotePos1 = notesPositions[n];
			var nnote = this.notes[n].nnote;
			var patternIdx;
			{
				var _g21 = nnote.type;
				switch(_g21[1]) {
				case 0:
					var attributes = _g21[5];
					var articluation = _g21[4];
					var variant = _g21[3];
					var heads = _g21[2];
					if(nx3.ENoteValTools.beaminglevel(nnote.value) <= 0) patternIdx = -1; else patternIdx = findPatternIdxForNote(curNotePos1);
					break;
				case 1:
					var level = _g21[2];
					patternIdx = -1;
					break;
				default:
					patternIdx = -1;
				}
			}
			result.push(patternIdx);
		}
		return result;
	}
	,getNotesPositions: function() {
		var result = [];
		var currPos = 0;
		var _g = 0;
		var _g1 = this.notes;
		while(_g < _g1.length) {
			var pnote = _g1[_g];
			++_g;
			var value = nx3.ENoteValTools.value(pnote.nnote.value);
			var posinfo = { start : currPos, end : currPos + value};
			result.push(posinfo);
			currPos += value;
		}
		return result;
	}
	,getPatternPositions: function() {
		var result = [];
		var currPos = 0;
		var _g = 0;
		var _g1 = this.pattern;
		while(_g < _g1.length) {
			var segment = _g1[_g];
			++_g;
			var value = nx3.ENoteValTools.value(segment);
			var posinfo = { start : currPos, end : currPos + value};
			result.push(posinfo);
			currPos += value;
		}
		return result;
	}
	,adjustPatternLenght: function() {
		var notesValue = 0;
		var _g = 0;
		var _g1 = this.notes;
		while(_g < _g1.length) {
			var pnote = _g1[_g];
			++_g;
			notesValue += nx3.ENoteValTools.value(pnote.nnote.value);
		}
		var patternValue = 0;
		var _g2 = 0;
		var _g11 = this.pattern;
		while(_g2 < _g11.length) {
			var value = _g11[_g2];
			++_g2;
			patternValue += nx3.ENoteValTools.value(value);
		}
		while(patternValue < notesValue) {
			this.pattern = this.pattern.concat(this.pattern);
			patternValue *= 2;
		}
	}
	,__class__: nx3.PVoiceBeamgroupsGenerator
};
nx3.QHead = function(level,sign) {
	if(level == null) level = 0;
	nx3.NHead.call(this,null,level,sign);
};
nx3.QHead.__name__ = ["nx3","QHead"];
nx3.QHead.__super__ = nx3.NHead;
nx3.QHead.prototype = $extend(nx3.NHead.prototype,{
	__class__: nx3.QHead
});
nx3.QHeadSharp = function(level) {
	if(level == null) level = 0;
	nx3.QHead.call(this,level,nx3.ESign.Sharp);
};
nx3.QHeadSharp.__name__ = ["nx3","QHeadSharp"];
nx3.QHeadSharp.__super__ = nx3.QHead;
nx3.QHeadSharp.prototype = $extend(nx3.QHead.prototype,{
	__class__: nx3.QHeadSharp
});
nx3.QHeadFlat = function(level) {
	if(level == null) level = 0;
	nx3.QHead.call(this,level,nx3.ESign.Flat);
};
nx3.QHeadFlat.__name__ = ["nx3","QHeadFlat"];
nx3.QHeadFlat.__super__ = nx3.QHead;
nx3.QHeadFlat.prototype = $extend(nx3.QHead.prototype,{
	__class__: nx3.QHeadFlat
});
nx3.QHeadNatural = function(level) {
	if(level == null) level = 0;
	nx3.QHead.call(this,level,nx3.ESign.Natural);
};
nx3.QHeadNatural.__name__ = ["nx3","QHeadNatural"];
nx3.QHeadNatural.__super__ = nx3.QHead;
nx3.QHeadNatural.prototype = $extend(nx3.QHead.prototype,{
	__class__: nx3.QHeadNatural
});
nx3.QNote = function(headLevel,headLevels,head,heads,value,signs,direction) {
	if(signs == null) signs = "";
	signs += "...........";
	var aSigns = signs.split("");
	if(headLevel != null) headLevels = [headLevel];
	if(headLevels != null) {
		heads = [];
		var i = 0;
		var _g = 0;
		while(_g < headLevels.length) {
			var level = headLevels[_g];
			++_g;
			heads.push(new nx3.NHead(null,level,this.getSign(aSigns[i++])));
		}
	}
	if(head != null) heads = [head];
	if(heads == null) heads = [new nx3.NHead(null,0)];
	if(value == null) value = nx3.ENoteVal.Nv4;
	nx3.NNote.call(this,null,heads,value,direction);
};
nx3.QNote.__name__ = ["nx3","QNote"];
nx3.QNote.__super__ = nx3.NNote;
nx3.QNote.prototype = $extend(nx3.NNote.prototype,{
	getSign: function(val) {
		switch(val) {
		case "#":
			return nx3.ESign.Sharp;
		case "b":
			return nx3.ESign.Flat;
		case "N":case "n":
			return nx3.ESign.Natural;
		default:
			return null;
		}
	}
	,__class__: nx3.QNote
});
nx3.QPause16 = function(level) {
	if(level == null) level = 0;
	nx3.NNote.call(this,nx3.ENoteType.Pause(level),null,nx3.ENoteVal.Nv16);
};
nx3.QPause16.__name__ = ["nx3","QPause16"];
nx3.QPause16.__super__ = nx3.NNote;
nx3.QPause16.prototype = $extend(nx3.NNote.prototype,{
	__class__: nx3.QPause16
});
nx3.QPause8 = function(level) {
	if(level == null) level = 0;
	nx3.NNote.call(this,nx3.ENoteType.Pause(level),null,nx3.ENoteVal.Nv8);
};
nx3.QPause8.__name__ = ["nx3","QPause8"];
nx3.QPause8.__super__ = nx3.NNote;
nx3.QPause8.prototype = $extend(nx3.NNote.prototype,{
	__class__: nx3.QPause8
});
nx3.QPause4 = function(level) {
	if(level == null) level = 0;
	nx3.NNote.call(this,nx3.ENoteType.Pause(level),null,nx3.ENoteVal.Nv4);
};
nx3.QPause4.__name__ = ["nx3","QPause4"];
nx3.QPause4.__super__ = nx3.NNote;
nx3.QPause4.prototype = $extend(nx3.NNote.prototype,{
	__class__: nx3.QPause4
});
nx3.QPause2 = function(level) {
	if(level == null) level = 0;
	nx3.NNote.call(this,nx3.ENoteType.Pause(level),null,nx3.ENoteVal.Nv2);
};
nx3.QPause2.__name__ = ["nx3","QPause2"];
nx3.QPause2.__super__ = nx3.NNote;
nx3.QPause2.prototype = $extend(nx3.NNote.prototype,{
	__class__: nx3.QPause2
});
nx3.QPause1 = function(level) {
	if(level == null) level = 0;
	nx3.NNote.call(this,nx3.ENoteType.Pause(level),null,nx3.ENoteVal.Nv1);
};
nx3.QPause1.__name__ = ["nx3","QPause1"];
nx3.QPause1.__super__ = nx3.NNote;
nx3.QPause1.prototype = $extend(nx3.NNote.prototype,{
	__class__: nx3.QPause1
});
nx3.QLyric8 = function(text) {
	if(text == null) text = "QLyric4";
	nx3.NNote.call(this,nx3.ENoteType.Lyric(text),null,nx3.ENoteVal.Nv8);
};
nx3.QLyric8.__name__ = ["nx3","QLyric8"];
nx3.QLyric8.__super__ = nx3.NNote;
nx3.QLyric8.prototype = $extend(nx3.NNote.prototype,{
	__class__: nx3.QLyric8
});
nx3.QLyric4 = function(text) {
	if(text == null) text = "QLyric4";
	nx3.NNote.call(this,nx3.ENoteType.Lyric(text),null,nx3.ENoteVal.Nv4);
};
nx3.QLyric4.__name__ = ["nx3","QLyric4"];
nx3.QLyric4.__super__ = nx3.NNote;
nx3.QLyric4.prototype = $extend(nx3.NNote.prototype,{
	__class__: nx3.QLyric4
});
nx3.QLyric2 = function(text) {
	if(text == null) text = "QLyric4";
	nx3.NNote.call(this,nx3.ENoteType.Lyric(text),null,nx3.ENoteVal.Nv2);
};
nx3.QLyric2.__name__ = ["nx3","QLyric2"];
nx3.QLyric2.__super__ = nx3.NNote;
nx3.QLyric2.prototype = $extend(nx3.NNote.prototype,{
	__class__: nx3.QLyric2
});
nx3.QNote4 = function(dot,headLevel,headLevels,signs) {
	if(signs == null) signs = "";
	if(dot == null) dot = false;
	var val;
	if(dot) val = nx3.ENoteVal.Nv4dot; else val = nx3.ENoteVal.Nv4;
	nx3.QNote.call(this,headLevel,headLevels,null,null,val,signs);
};
nx3.QNote4.__name__ = ["nx3","QNote4"];
nx3.QNote4.__super__ = nx3.QNote;
nx3.QNote4.prototype = $extend(nx3.QNote.prototype,{
	__class__: nx3.QNote4
});
nx3.QNote8 = function(dot,headLevel,headLevels,signs) {
	if(signs == null) signs = "";
	if(dot == null) dot = false;
	var val;
	if(dot) val = nx3.ENoteVal.Nv8dot; else val = nx3.ENoteVal.Nv8;
	nx3.QNote.call(this,headLevel,headLevels,null,null,val,signs);
};
nx3.QNote8.__name__ = ["nx3","QNote8"];
nx3.QNote8.__super__ = nx3.QNote;
nx3.QNote8.prototype = $extend(nx3.QNote.prototype,{
	__class__: nx3.QNote8
});
nx3.QNote16 = function(headLevel,headLevels,signs) {
	if(signs == null) signs = "";
	nx3.QNote.call(this,headLevel,headLevels,null,null,nx3.ENoteVal.Nv16,signs);
};
nx3.QNote16.__name__ = ["nx3","QNote16"];
nx3.QNote16.__super__ = nx3.QNote;
nx3.QNote16.prototype = $extend(nx3.QNote.prototype,{
	__class__: nx3.QNote16
});
nx3.QNote2 = function(dot,headLevel,headLevels,signs) {
	if(signs == null) signs = "";
	if(dot == null) dot = false;
	var val;
	if(dot) val = nx3.ENoteVal.Nv2dot; else val = nx3.ENoteVal.Nv2;
	nx3.QNote.call(this,headLevel,headLevels,null,null,val,signs);
};
nx3.QNote2.__name__ = ["nx3","QNote2"];
nx3.QNote2.__super__ = nx3.QNote;
nx3.QNote2.prototype = $extend(nx3.QNote.prototype,{
	__class__: nx3.QNote2
});
nx3.QNote1 = function(headLevel,headLevels,signs) {
	if(signs == null) signs = "";
	nx3.QNote.call(this,headLevel,headLevels,null,null,nx3.ENoteVal.Nv1,signs);
};
nx3.QNote1.__name__ = ["nx3","QNote1"];
nx3.QNote1.__super__ = nx3.QNote;
nx3.QNote1.prototype = $extend(nx3.QNote.prototype,{
	__class__: nx3.QNote1
});
nx3.QVoice = function(notevalues,notevalue,headlevels,levelrepeats,signs,direction) {
	if(levelrepeats == null) levelrepeats = 1;
	var _notevalues = notevalues;
	if(_notevalues == null) _notevalues = [notevalue];
	if(_notevalues == null) _notevalues = [4];
	var _headlevels;
	if(headlevels != null) _headlevels = headlevels; else _headlevels = [0];
	while(_notevalues.length > _headlevels.length) _headlevels.push(0);
	var r = 1;
	var copy = _headlevels.slice();
	while(r < levelrepeats) {
		_headlevels = _headlevels.concat(copy);
		r++;
	}
	while(_headlevels.length > _notevalues.length) _notevalues = _notevalues.concat(_notevalues);
	var notes = [];
	if(signs == null) signs = "-";
	var asigns = signs.split("");
	while(_headlevels.length > asigns.length) asigns = asigns.concat(asigns);
	var i = 0;
	var _g = 0;
	while(_g < _headlevels.length) {
		var level = _headlevels[_g];
		++_g;
		var sign = this.getSign(asigns[i]);
		var head = new nx3.QHead(level,sign);
		var note = new nx3.QNote(null,null,head,null,this.getNotevalue(_notevalues[i]));
		notes.push(note);
		i++;
	}
	nx3.NVoice.call(this,notes,null,direction);
};
nx3.QVoice.__name__ = ["nx3","QVoice"];
nx3.QVoice.__super__ = nx3.NVoice;
nx3.QVoice.prototype = $extend(nx3.NVoice.prototype,{
	getSign: function(val) {
		switch(val) {
		case "#":
			return nx3.ESign.Sharp;
		case "b":
			return nx3.ESign.Flat;
		case "N":case "n":
			return nx3.ESign.Natural;
		default:
			return null;
		}
	}
	,getNotevalue: function(val) {
		switch(val) {
		case 16.0:
			return nx3.ENoteVal.Nv16;
		case .16:
			return nx3.ENoteVal.Nv16dot;
		case 8.0:
			return nx3.ENoteVal.Nv8;
		case .8:
			return nx3.ENoteVal.Nv8dot;
		case 4.0:
			return nx3.ENoteVal.Nv4;
		case .4:
			return nx3.ENoteVal.Nv4dot;
		case 2.0:
			return nx3.ENoteVal.Nv2;
		case .2:
			return nx3.ENoteVal.Nv2dot;
		case 1.0:
			return nx3.ENoteVal.Nv1;
		case .1:
			return nx3.ENoteVal.Nv1dot;
		default:
			throw "Unknown notevalue: " + val;
		}
		return nx3.ENoteVal.Nv4;
	}
	,__class__: nx3.QVoice
});
nx3.QVoiceDown = function(notevalues,notevalue,headlevels,levelrepeats,signs) {
	nx3.QVoice.call(this,notevalues,notevalue,headlevels,levelrepeats,signs,nx3.EDirectionUAD.Down);
};
nx3.QVoiceDown.__name__ = ["nx3","QVoiceDown"];
nx3.QVoiceDown.__super__ = nx3.QVoice;
nx3.QVoiceDown.prototype = $extend(nx3.QVoice.prototype,{
	__class__: nx3.QVoiceDown
});
nx3.QVoiceUp = function(notevalues,notevalue,headlevels,levelrepeats,signs) {
	nx3.QVoice.call(this,notevalues,notevalue,headlevels,levelrepeats,signs,nx3.EDirectionUAD.Up);
};
nx3.QVoiceUp.__name__ = ["nx3","QVoiceUp"];
nx3.QVoiceUp.__super__ = nx3.QVoice;
nx3.QVoiceUp.prototype = $extend(nx3.QVoice.prototype,{
	__class__: nx3.QVoiceUp
});
nx3.action = {};
nx3.action.EActionInfo = { __ename__ : true, __constructs__ : ["TargetXY"] };
nx3.action.EActionInfo.TargetXY = function(target,x,y) { var $x = ["TargetXY",0,target,x,y]; $x.__enum__ = nx3.action.EActionInfo; $x.toString = $estr; return $x; };
nx3.action.EActionType = { __ename__ : true, __constructs__ : ["HeadAction","NoteAction"] };
nx3.action.EActionType.HeadAction = function(type,head,info) { var $x = ["HeadAction",0,type,head,info]; $x.__enum__ = nx3.action.EActionType; $x.toString = $estr; return $x; };
nx3.action.EActionType.NoteAction = function(type,note,info) { var $x = ["NoteAction",1,type,note,info]; $x.__enum__ = nx3.action.EActionType; $x.toString = $estr; return $x; };
nx3.action.EActivityType = { __ename__ : true, __constructs__ : ["MouseDown","MouseUp","MouseOver","MouseOut"] };
nx3.action.EActivityType.MouseDown = ["MouseDown",0];
nx3.action.EActivityType.MouseDown.toString = $estr;
nx3.action.EActivityType.MouseDown.__enum__ = nx3.action.EActivityType;
nx3.action.EActivityType.MouseUp = ["MouseUp",1];
nx3.action.EActivityType.MouseUp.toString = $estr;
nx3.action.EActivityType.MouseUp.__enum__ = nx3.action.EActivityType;
nx3.action.EActivityType.MouseOver = ["MouseOver",2];
nx3.action.EActivityType.MouseOver.toString = $estr;
nx3.action.EActivityType.MouseOver.__enum__ = nx3.action.EActivityType;
nx3.action.EActivityType.MouseOut = ["MouseOut",3];
nx3.action.EActivityType.MouseOut.toString = $estr;
nx3.action.EActivityType.MouseOut.__enum__ = nx3.action.EActivityType;
nx3.action.IInteractivity = function() { };
nx3.action.IInteractivity.__name__ = ["nx3","action","IInteractivity"];
nx3.action.IInteractivity.prototype = {
	handleAction: null
	,__class__: nx3.action.IInteractivity
};
nx3.action.InteractivityBase = function() {
};
nx3.action.InteractivityBase.__name__ = ["nx3","action","InteractivityBase"];
nx3.action.InteractivityBase.__interfaces__ = [nx3.action.IInteractivity];
nx3.action.InteractivityBase.prototype = {
	handleAction: function(action) {
		switch(action[1]) {
		case 1:
			var info = action[4];
			var note = action[3];
			var type = action[2];
			switch(type[1]) {
			case 0:
				this.onNoteMouseDown(note,info);
				break;
			case 1:
				this.onNoteMouseUp(note,info);
				break;
			case 2:
				this.onNoteMouseOver(note,info);
				break;
			case 3:
				this.onNoteMouseOut(note,info);
				break;
			}
			break;
		default:
		}
	}
	,onNoteMouseDown: function(note,info) {
	}
	,onNoteMouseUp: function(note,info) {
	}
	,onNoteMouseOver: function(note,info) {
	}
	,onNoteMouseOut: function(note,info) {
	}
	,__class__: nx3.action.InteractivityBase
};
nx3.action.TestInteractivity = function() {
	nx3.action.InteractivityBase.call(this);
};
nx3.action.TestInteractivity.__name__ = ["nx3","action","TestInteractivity"];
nx3.action.TestInteractivity.__super__ = nx3.action.InteractivityBase;
nx3.action.TestInteractivity.prototype = $extend(nx3.action.InteractivityBase.prototype,{
	onNoteMouseOver: function(note,info) {
		var _g = this;
		cx.TimerTools.timeout(function() {
			haxe.Log.trace("OVER",{ fileName : "TestInteractivity.hx", lineNumber : 25, className : "nx3.action.TestInteractivity", methodName : "onNoteMouseOver"});
			{
				var y = info[4];
				var x = info[3];
				var target = info[2];
				target.tooltipShow(new nx3.geom.Rectangle(x + 20,y - 10,160,32),_g.valueToSwedish(note.nnote.value,note.nnote.type));
			}
		},300);
	}
	,onNoteMouseOut: function(note,info) {
		cx.TimerTools.timeout(function() {
			{
				var y = info[4];
				var x = info[3];
				var target = info[2];
				target.tooltipHide();
			}
		},100);
	}
	,valueToSwedish: function(val,type) {
		switch(type[1]) {
		case 1:
			var l = type[2];
			switch(val[1]) {
			case 0:
				return "Helpaus";
			case 4:
				return "Halvpaus";
			case 8:
				return "Fjärdelspaus";
			case 12:
				return "Åttondelspaus";
			case 16:
				return "Sextondelspaus";
			default:
				return "Annan paus";
			}
			break;
		case 0:
			var atr = type[5];
			var a = type[4];
			var v = type[3];
			var h = type[2];
			switch(val[1]) {
			case 4:
				return "Halvnot";
			case 8:
				return "Fjärdedelsnot";
			case 9:
				return "Punkterad fjärdedelsnot";
			case 12:
				return "Åttondelsnot";
			case 13:
				return "Punkterad åttondelsnot";
			case 16:
				return "Sextondelsnot";
			default:
				return "Annat notvärde...";
			}
			break;
		default:
			return "Annan nottyp";
		}
	}
	,__class__: nx3.action.TestInteractivity
});
nx3.events = {};
nx3.events.BarEvent = { __ename__ : true, __constructs__ : ["NotesChange","NotesDelete","NotesAdd"] };
nx3.events.BarEvent.NotesChange = function(notes,action) { var $x = ["NotesChange",0,notes,action]; $x.__enum__ = nx3.events.BarEvent; $x.toString = $estr; return $x; };
nx3.events.BarEvent.NotesDelete = function(notes,removedNotes) { var $x = ["NotesDelete",1,notes,removedNotes]; $x.__enum__ = nx3.events.BarEvent; $x.toString = $estr; return $x; };
nx3.events.BarEvent.NotesAdd = function(notes,noteinfos) { var $x = ["NotesAdd",2,notes,noteinfos]; $x.__enum__ = nx3.events.BarEvent; $x.toString = $estr; return $x; };
nx3.events.NoteChange = { __ename__ : true, __constructs__ : ["LevelRel","LevelAbs","Tie","ValAbs","ValRel","Dot","HeadLevelRel","HeadLevelAbs","Pause","Sign"] };
nx3.events.NoteChange.LevelRel = function(level) { var $x = ["LevelRel",0,level]; $x.__enum__ = nx3.events.NoteChange; $x.toString = $estr; return $x; };
nx3.events.NoteChange.LevelAbs = function(level) { var $x = ["LevelAbs",1,level]; $x.__enum__ = nx3.events.NoteChange; $x.toString = $estr; return $x; };
nx3.events.NoteChange.Tie = function(useTie) { var $x = ["Tie",2,useTie]; $x.__enum__ = nx3.events.NoteChange; $x.toString = $estr; return $x; };
nx3.events.NoteChange.ValAbs = function(val) { var $x = ["ValAbs",3,val]; $x.__enum__ = nx3.events.NoteChange; $x.toString = $estr; return $x; };
nx3.events.NoteChange.ValRel = function(factor) { var $x = ["ValRel",4,factor]; $x.__enum__ = nx3.events.NoteChange; $x.toString = $estr; return $x; };
nx3.events.NoteChange.Dot = function(useDot) { var $x = ["Dot",5,useDot]; $x.__enum__ = nx3.events.NoteChange; $x.toString = $estr; return $x; };
nx3.events.NoteChange.HeadLevelRel = function(headIdx,level) { var $x = ["HeadLevelRel",6,headIdx,level]; $x.__enum__ = nx3.events.NoteChange; $x.toString = $estr; return $x; };
nx3.events.NoteChange.HeadLevelAbs = function(headIdx,level) { var $x = ["HeadLevelAbs",7,headIdx,level]; $x.__enum__ = nx3.events.NoteChange; $x.toString = $estr; return $x; };
nx3.events.NoteChange.Pause = function(on) { var $x = ["Pause",8,on]; $x.__enum__ = nx3.events.NoteChange; $x.toString = $estr; return $x; };
nx3.events.NoteChange.Sign = function(type) { var $x = ["Sign",9,type]; $x.__enum__ = nx3.events.NoteChange; $x.toString = $estr; return $x; };
nx3.events.NoteInfo = { __ename__ : true, __constructs__ : ["Note","Pause","Lyric"] };
nx3.events.NoteInfo.Note = function(val,levels,signs,ties) { var $x = ["Note",0,val,levels,signs,ties]; $x.__enum__ = nx3.events.NoteInfo; $x.toString = $estr; return $x; };
nx3.events.NoteInfo.Pause = function(val,level) { var $x = ["Pause",1,val,level]; $x.__enum__ = nx3.events.NoteInfo; $x.toString = $estr; return $x; };
nx3.events.NoteInfo.Lyric = function(val,text) { var $x = ["Lyric",2,val,text]; $x.__enum__ = nx3.events.NoteInfo; $x.toString = $estr; return $x; };
nx3.geom = {};
nx3.geom.BezieerTool = function() { };
nx3.geom.BezieerTool.__name__ = ["nx3","geom","BezieerTool"];
nx3.geom.BezieerTool.bezieerCoordinates = function(anchor1,control1,control2,anchor2,lineWidth,lineColor,segments) {
	if(segments == null) segments = 10;
	if(lineColor == null) lineColor = 0;
	if(lineWidth == null) lineWidth = 1;
	var coord = [];
	coord.push(anchor1);
	var posx;
	var posy;
	var _g = 0;
	while(_g < segments) {
		var i = _g++;
		var u = i / segments;
		posx = Math.pow(u,3) * (anchor2.x + 3 * (control1.x - control2.x) - anchor1.x) + 3 * Math.pow(u,2) * (anchor1.x - 2 * control1.x + control2.x) + 3 * u * (control1.x - anchor1.x) + anchor1.x;
		posy = Math.pow(u,3) * (anchor2.y + 3 * (control1.y - control2.y) - anchor1.y) + 3 * Math.pow(u,2) * (anchor1.y - 2 * control1.y + control2.y) + 3 * u * (control1.y - anchor1.y) + anchor1.y;
		coord.push({ x : posx, y : posy});
	}
	coord.push(anchor2);
	return coord;
};
nx3.geom.Point = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
};
nx3.geom.Point.__name__ = ["nx3","geom","Point"];
nx3.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
};
nx3.geom.Point.interpolate = function(pt1,pt2,f) {
	return new nx3.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
};
nx3.geom.Point.polar = function(len,angle) {
	return new nx3.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
};
nx3.geom.Point.prototype = {
	length: null
	,x: null
	,y: null
	,add: function(v) {
		return new nx3.geom.Point(v.x + this.x,v.y + this.y);
	}
	,clone: function() {
		return new nx3.geom.Point(this.x,this.y);
	}
	,copyFrom: function(sourcePoint) {
		this.x = sourcePoint.x;
		this.y = sourcePoint.y;
	}
	,equals: function(toCompare) {
		return toCompare.x == this.x && toCompare.y == this.y;
	}
	,normalize: function(thickness) {
		if(this.x == 0 && this.y == 0) return; else {
			var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= norm;
			this.y *= norm;
		}
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,setTo: function(x,y) {
		this.x = x;
		this.y = y;
	}
	,subtract: function(v) {
		return new nx3.geom.Point(this.x - v.x,this.y - v.y);
	}
	,toString: function() {
		return "(" + this.x + ", " + this.y + ")";
	}
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,__class__: nx3.geom.Point
};
nx3.geom.Rectangle = function(x,y,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
nx3.geom.Rectangle.__name__ = ["nx3","geom","Rectangle"];
nx3.geom.Rectangle.prototype = {
	height: null
	,width: null
	,x: null
	,y: null
	,clone: function() {
		return new nx3.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,contains: function(x,y) {
		return x >= this.x && y >= this.y && x < this.get_right() && y < this.get_bottom();
	}
	,containsPoint: function(point) {
		return this.contains(point.x,point.y);
	}
	,containsRect: function(rect) {
		if(rect.width <= 0 || rect.height <= 0) return rect.x > this.x && rect.y > this.y && rect.get_right() < this.get_right() && rect.get_bottom() < this.get_bottom(); else return rect.x >= this.x && rect.y >= this.y && rect.get_right() <= this.get_right() && rect.get_bottom() <= this.get_bottom();
	}
	,copyFrom: function(sourceRect) {
		this.x = sourceRect.x;
		this.y = sourceRect.y;
		this.width = sourceRect.width;
		this.height = sourceRect.height;
	}
	,equals: function(toCompare) {
		return this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
	}
	,extendBounds: function(r) {
		var dx = this.x - r.x;
		if(dx > 0) {
			this.x -= dx;
			this.width += dx;
		}
		var dy = this.y - r.y;
		if(dy > 0) {
			this.y -= dy;
			this.height += dy;
		}
		if(r.get_right() > this.get_right()) this.set_right(r.get_right());
		if(r.get_bottom() > this.get_bottom()) this.set_bottom(r.get_bottom());
	}
	,inflate: function(dx,dy) {
		this.x -= dx;
		this.y -= dy;
		this.width += dx * 2;
		this.height += dy * 2;
	}
	,inflatePoint: function(point) {
		this.inflate(point.x,point.y);
	}
	,intersection: function(toIntersect) {
		var x0;
		if(this.x < toIntersect.x) x0 = toIntersect.x; else x0 = this.x;
		var x1;
		if(this.get_right() > toIntersect.get_right()) x1 = toIntersect.get_right(); else x1 = this.get_right();
		if(x1 <= x0) return new nx3.geom.Rectangle();
		var y0;
		if(this.y < toIntersect.y) y0 = toIntersect.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() > toIntersect.get_bottom()) y1 = toIntersect.get_bottom(); else y1 = this.get_bottom();
		if(y1 <= y0) return new nx3.geom.Rectangle();
		return new nx3.geom.Rectangle(x0,y0,cx.MathTools.round2(x1 - x0,null),cx.MathTools.round2(y1 - y0,null));
	}
	,intersects: function(toIntersect) {
		var x0;
		if(this.x < toIntersect.x) x0 = toIntersect.x; else x0 = this.x;
		var x1;
		if(this.get_right() > toIntersect.get_right()) x1 = toIntersect.get_right(); else x1 = this.get_right();
		if(x1 <= x0) return false;
		var y0;
		if(this.y < toIntersect.y) y0 = toIntersect.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() > toIntersect.get_bottom()) y1 = toIntersect.get_bottom(); else y1 = this.get_bottom();
		return y1 > y0;
	}
	,isEmpty: function() {
		return this.width <= 0 || this.height <= 0;
	}
	,offset: function(dx,dy) {
		this.x = cx.MathTools.round2(this.x + dx,null);
		this.y = cx.MathTools.round2(this.y + dy,null);
	}
	,offsetPoint: function(point) {
		this.x += point.x;
		this.y += point.y;
	}
	,setEmpty: function() {
		this.x = 0;
		this.y = 0;
		this.width = 0;
		this.height = 0;
	}
	,toString: function() {
		return "(x=" + this.x + ", y=" + this.y + ", width=" + this.width + ", height=" + this.height + ")";
	}
	,union: function(toUnion) {
		var x0;
		if(this.x > toUnion.x) x0 = toUnion.x; else x0 = this.x;
		var x1;
		if(this.get_right() < toUnion.get_right()) x1 = toUnion.get_right(); else x1 = this.get_right();
		var y0;
		if(this.y > toUnion.y) y0 = toUnion.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() < toUnion.get_bottom()) y1 = toUnion.get_bottom(); else y1 = this.get_bottom();
		return new nx3.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,set_bottom: function(value) {
		this.height = value - this.y;
		return value;
	}
	,get_bottomRight: function() {
		return new nx3.geom.Point(this.x + this.width,this.y + this.height);
	}
	,set_bottomRight: function(value) {
		this.width = value.x - this.x;
		this.height = value.y - this.y;
		return value.clone();
	}
	,get_left: function() {
		return this.x;
	}
	,set_left: function(value) {
		this.width -= value - this.x;
		this.x = value;
		return value;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_right: function(value) {
		this.width = value - this.x;
		return value;
	}
	,get_size: function() {
		return new nx3.geom.Point(this.width,this.height);
	}
	,set_size: function(value) {
		this.width = value.x;
		this.height = value.y;
		return value.clone();
	}
	,get_top: function() {
		return this.y;
	}
	,set_top: function(value) {
		this.height -= value - this.y;
		this.y = value;
		return value;
	}
	,get_topLeft: function() {
		return new nx3.geom.Point(this.x,this.y);
	}
	,set_topLeft: function(value) {
		this.x = value.x;
		this.y = value.y;
		return value.clone();
	}
	,__class__: nx3.geom.Rectangle
};
nx3.geom.RectanglesTools = function() { };
nx3.geom.RectanglesTools.__name__ = ["nx3","geom","RectanglesTools"];
nx3.geom.RectanglesTools.getXIntersection = function(rectsA,rectsB) {
	var rectsB2 = new Array();
	var _g = 0;
	while(_g < rectsB.length) {
		var r = rectsB[_g];
		++_g;
		rectsB2.push(r.clone());
	}
	var check = function() {
		var _g1 = 0;
		while(_g1 < rectsA.length) {
			var ra = rectsA[_g1];
			++_g1;
			var _g11 = 0;
			while(_g11 < rectsB2.length) {
				var rb = rectsB2[_g11];
				++_g11;
				var i = ra.intersection(rb);
				i.width = cx.MathTools.round2(i.width,8);
				if(i.width > 0) return i.width;
			}
		}
		return 0;
	};
	var x = 0;
	var moveX = check();
	while(moveX > 0) {
		x += moveX;
		var _g2 = 0;
		while(_g2 < rectsB2.length) {
			var r1 = rectsB2[_g2];
			++_g2;
			r1.offset(moveX,0);
		}
		moveX = check();
	}
	return x;
};
nx3.geom.RectanglesTools.clone = function(rects) {
	if(rects == null) return null;
	var result = new Array();
	var _g = 0;
	while(_g < rects.length) {
		var r = rects[_g];
		++_g;
		result.push(r);
	}
	return result;
};
nx3.geom.RectanglesTools.offset = function(rects,x,y) {
	var _g = 0;
	while(_g < rects.length) {
		var r = rects[_g];
		++_g;
		r.offset(x,y);
	}
};
nx3.geom.RectanglesTools.unionAll = function(rects) {
	if(rects == null) return null;
	if(rects.length == 1) return rects[0].clone();
	var r = rects[0].clone();
	var _g1 = 1;
	var _g = rects.length;
	while(_g1 < _g) {
		var i = _g1++;
		r = r.union(rects[i]);
	}
	return r;
};
nx3.geom.RectanglesTools.concat = function(rectsA,rectsB) {
	var _g = 0;
	while(_g < rectsB.length) {
		var r = rectsB[_g];
		++_g;
		rectsA.push(r);
	}
	return rectsA;
};
nx3.qs = {};
nx3.qs.BaseParser = function(builder) {
	this.builder = builder;
	this.functions = new haxe.ds.StringMap();
	this.createFunctions();
};
nx3.qs.BaseParser.__name__ = ["nx3","qs","BaseParser"];
nx3.qs.BaseParser.prototype = {
	builder: null
	,functions: null
	,getTokenfunction: function(functions,token) {
		var keys = cx.ArrayTools.fromHashKeys(functions.keys());
		keys.sort(function(a,b) {
			return -Reflect.compare(a.length,b.length);
		});
		var _g = 0;
		while(_g < keys.length) {
			var key = keys[_g];
			++_g;
			if(StringTools.startsWith(token,key)) return functions.get(key);
		}
		var _g1 = 0;
		while(_g1 < keys.length) {
			var key1 = keys[_g1];
			++_g1;
			if(key1 == "__ALL__") return functions.get(key1);
		}
		return null;
	}
	,parse: function(token,parser) {
		var originaltoken = token;
		var func = this.getTokenfunction(this.functions,token);
		while(func != null) {
			token = func.apply(null,[token]);
			if(token == "") {
				this.tokenFinished(originaltoken);
				return "";
			}
			func = this.getTokenfunction(this.functions,token);
		}
		if(originaltoken == token) return token;
		return "";
	}
	,tokenFinished: function(originaltoken) {
		haxe.Log.trace("all is taken care of",{ fileName : "BaseParser.hx", lineNumber : 75, className : "nx3.qs.BaseParser", methodName : "tokenFinished"});
	}
	,createFunctions: function() {
		haxe.Log.trace("should be overridden",{ fileName : "BaseParser.hx", lineNumber : 80, className : "nx3.qs.BaseParser", methodName : "createFunctions"});
	}
	,sendEvent: function(event) {
		this.builder.passEvent(event);
	}
	,recieveEvent: function(event) {
		throw "shouldBeOverridden";
	}
	,__class__: nx3.qs.BaseParser
};
nx3.qs.BarParser = function(parser) {
	nx3.qs.BaseParser.call(this,parser);
	this.barIndex = 0;
	this.partIndex = 0;
	this.voiceIndex = 0;
};
nx3.qs.BarParser.__name__ = ["nx3","qs","BarParser"];
nx3.qs.BarParser.__super__ = nx3.qs.BaseParser;
nx3.qs.BarParser.prototype = $extend(nx3.qs.BaseParser.prototype,{
	barIndex: null
	,partIndex: null
	,voiceIndex: null
	,createFunctions: function() {
		var _g = this;
		this.functions.set(";",function(token) {
			_g.barIndex++;
			return HxOverrides.substr(token,1,null);
		});
		this.functions.set("|",function(token1) {
			_g.barIndex++;
			_g.partIndex = 0;
			_g.voiceIndex = 0;
			return HxOverrides.substr(token1,1,null);
		});
		this.functions.set("//",function(token2) {
			_g.partIndex++;
			_g.barIndex = 0;
			return HxOverrides.substr(token2,2,null);
		});
		this.functions.set("/",function(token3) {
			_g.partIndex++;
			_g.voiceIndex = 0;
			return HxOverrides.substr(token3,1,null);
		});
		this.functions.set("%%",function(token4) {
			_g.voiceIndex++;
			_g.barIndex = 0;
			if(_g.voiceIndex > 1) {
				_g.partIndex++;
				_g.voiceIndex = 0;
			}
			return HxOverrides.substr(token4,2,null);
		});
		this.functions.set("%",function(token5) {
			_g.voiceIndex++;
			_g.sendEvent(nx3.qs.ParserEvents.SetOctave(0));
			_g.sendEvent(nx3.qs.ParserEvents.SetNoteVal(nx3.ENoteVal.Nv4));
			return HxOverrides.substr(token5,1,null);
		});
		this.functions.set("clef:G",function(token6) {
			_g.sendEvent(nx3.qs.ParserEvents.SetBarClef(nx3.EClef.ClefG));
			return HxOverrides.substr(token6,6,null);
		});
	}
	,tokenFinished: function(originaltoken) {
	}
	,getBpvIndex: function() {
		var bpvIndex = { barIndex : this.barIndex, partIndex : this.partIndex, voiceIndex : this.voiceIndex};
		return bpvIndex;
	}
	,recieveEvent: function(event) {
	}
	,__class__: nx3.qs.BarParser
});
nx3.qs.ContentMode = { __ename__ : true, __constructs__ : ["Notes","Tpls","Lyrics"] };
nx3.qs.ContentMode.Notes = ["Notes",0];
nx3.qs.ContentMode.Notes.toString = $estr;
nx3.qs.ContentMode.Notes.__enum__ = nx3.qs.ContentMode;
nx3.qs.ContentMode.Tpls = ["Tpls",1];
nx3.qs.ContentMode.Tpls.toString = $estr;
nx3.qs.ContentMode.Tpls.__enum__ = nx3.qs.ContentMode;
nx3.qs.ContentMode.Lyrics = ["Lyrics",2];
nx3.qs.ContentMode.Lyrics.toString = $estr;
nx3.qs.ContentMode.Lyrics.__enum__ = nx3.qs.ContentMode;
nx3.qs.LyricsParser = function(builder) {
	nx3.qs.BaseParser.call(this,builder);
	this.notevalue = nx3.ENoteVal.Nv4;
	this.flagWord = false;
};
nx3.qs.LyricsParser.__name__ = ["nx3","qs","LyricsParser"];
nx3.qs.LyricsParser.__super__ = nx3.qs.BaseParser;
nx3.qs.LyricsParser.prototype = $extend(nx3.qs.BaseParser.prototype,{
	notevalue: null
	,flagWord: null
	,createFunctions: function() {
		var _g = this;
		this.functions.set("1.",function(token) {
			_g.notevalue = nx3.ENoteVal.Nv1dot;
			return HxOverrides.substr(token,2,null);
		});
		this.functions.set("1",function(token1) {
			_g.notevalue = nx3.ENoteVal.Nv1;
			return HxOverrides.substr(token1,1,null);
		});
		this.functions.set("2.",function(token2) {
			_g.notevalue = nx3.ENoteVal.Nv2dot;
			return HxOverrides.substr(token2,2,null);
		});
		this.functions.set("2",function(token3) {
			_g.notevalue = nx3.ENoteVal.Nv2;
			return HxOverrides.substr(token3,1,null);
		});
		this.functions.set("4.",function(token4) {
			_g.notevalue = nx3.ENoteVal.Nv4dot;
			return HxOverrides.substr(token4,2,null);
		});
		this.functions.set("4",function(token5) {
			_g.notevalue = nx3.ENoteVal.Nv4;
			return HxOverrides.substr(token5,1,null);
		});
		this.functions.set("8.",function(token6) {
			_g.notevalue = nx3.ENoteVal.Nv8dot;
			return HxOverrides.substr(token6,2,null);
		});
		this.functions.set("8",function(token7) {
			_g.notevalue = nx3.ENoteVal.Nv8;
			return HxOverrides.substr(token7,1,null);
		});
		this.functions.set("16.",function(token8) {
			_g.notevalue = nx3.ENoteVal.Nv16dot;
			return HxOverrides.substr(token8,3,null);
		});
		this.functions.set("16",function(token9) {
			_g.notevalue = nx3.ENoteVal.Nv16;
			return HxOverrides.substr(token9,2,null);
		});
		this.functions.set("__ALL__",function(token10) {
			haxe.Log.trace("HANDLE __ALL___",{ fileName : "LyricsParser.hx", lineNumber : 40, className : "nx3.qs.LyricsParser", methodName : "createFunctions"});
			_g.flagWord = true;
			return HxOverrides.substr(token10,token10.length,null);
		});
	}
	,tokenFinished: function(originaltoken) {
		if(this.flagWord) {
			var nnote = new nx3.NNote(nx3.ENoteType.Lyric(originaltoken),null,this.notevalue);
			this.builder.addNote(nnote);
			this.flagWord = false;
		}
	}
	,__class__: nx3.qs.LyricsParser
});
nx3.qs.ModeParser = function(parser) {
	nx3.qs.BaseParser.call(this,parser);
};
nx3.qs.ModeParser.__name__ = ["nx3","qs","ModeParser"];
nx3.qs.ModeParser.__super__ = nx3.qs.BaseParser;
nx3.qs.ModeParser.prototype = $extend(nx3.qs.BaseParser.prototype,{
	createFunctions: function() {
		var _g = this;
		this.functions.set("not:",function(token) {
			_g.sendEvent(nx3.qs.ParserEvents.SetMode(nx3.qs.ContentMode.Notes));
			haxe.Log.trace("handle notes...",{ fileName : "ModeParser.hx", lineNumber : 21, className : "nx3.qs.ModeParser", methodName : "createFunctions"});
			return HxOverrides.substr(token,4,null);
		});
		this.functions.set("tpl:",function(token1) {
			_g.sendEvent(nx3.qs.ParserEvents.SetMode(nx3.qs.ContentMode.Tpls));
			haxe.Log.trace("handle tpls...",{ fileName : "ModeParser.hx", lineNumber : 27, className : "nx3.qs.ModeParser", methodName : "createFunctions"});
			return HxOverrides.substr(token1,4,null);
		});
		this.functions.set("lyr:",function(token2) {
			_g.sendEvent(nx3.qs.ParserEvents.SetMode(nx3.qs.ContentMode.Lyrics));
			haxe.Log.trace("handle lyrics...",{ fileName : "ModeParser.hx", lineNumber : 33, className : "nx3.qs.ModeParser", methodName : "createFunctions"});
			return HxOverrides.substr(token2,4,null);
		});
		this.functions.set("xxx",function(token3) {
			haxe.Log.trace("handle xxx...",{ fileName : "ModeParser.hx", lineNumber : 38, className : "nx3.qs.ModeParser", methodName : "createFunctions"});
			return HxOverrides.substr(token3,3,null);
		});
		this.functions.set("guess:",function(token4) {
			_g.sendEvent(nx3.qs.ParserEvents.SetGuessOctave(true));
			return HxOverrides.substr(token4,6,null);
		});
	}
	,tokenFinished: function(originaltoken) {
	}
	,recieveEvent: function(event) {
	}
	,__class__: nx3.qs.ModeParser
});
nx3.qs.NoteParser = function(parser) {
	this.guessOctave = false;
	nx3.qs.BaseParser.call(this,parser);
	this.notelevels = [];
	this.notesigns = [];
	this.notevalue = null;
	this.prevlevel = 3;
	this.prevlevels = [3];
	this.prevsigns = [nx3.ESign.None];
	this.prevvalue = nx3.ENoteVal.Nv4;
	this.clefAdjust = 0;
	this.octAdjust = 0;
	this.pause = false;
	this.pauselevel = 0;
	this.tie = false;
};
nx3.qs.NoteParser.__name__ = ["nx3","qs","NoteParser"];
nx3.qs.NoteParser.__super__ = nx3.qs.BaseParser;
nx3.qs.NoteParser.prototype = $extend(nx3.qs.BaseParser.prototype,{
	notelevels: null
	,notevalue: null
	,notesigns: null
	,prevlevels: null
	,prevvalue: null
	,prevsigns: null
	,clefAdjust: null
	,octAdjust: null
	,pause: null
	,pauselevel: null
	,prevlevel: null
	,tie: null
	,guessOctave: null
	,createFunctions: function() {
		var _g = this;
		this.functions.set("c#",function(token) {
			_g.pushNotelevel(6);
			_g.notesigns.push(nx3.ESign.Sharp);
			return HxOverrides.substr(token,2,null);
		});
		this.functions.set("cB",function(token1) {
			_g.pushNotelevel(6);
			_g.notesigns.push(nx3.ESign.Flat);
			return HxOverrides.substr(token1,2,null);
		});
		this.functions.set("cN",function(token2) {
			_g.pushNotelevel(6);
			_g.notesigns.push(nx3.ESign.Natural);
			return HxOverrides.substr(token2,2,null);
		});
		this.functions.set("c",function(token3) {
			_g.pushNotelevel(6);
			_g.notesigns.push(nx3.ESign.None);
			return HxOverrides.substr(token3,1,null);
		});
		this.functions.set("d#",function(token4) {
			_g.pushNotelevel(5);
			_g.notesigns.push(nx3.ESign.Sharp);
			return HxOverrides.substr(token4,2,null);
		});
		this.functions.set("dB",function(token5) {
			_g.pushNotelevel(5);
			_g.notesigns.push(nx3.ESign.Flat);
			return HxOverrides.substr(token5,2,null);
		});
		this.functions.set("dN",function(token6) {
			_g.pushNotelevel(5);
			_g.notesigns.push(nx3.ESign.Natural);
			return HxOverrides.substr(token6,2,null);
		});
		this.functions.set("d",function(token7) {
			_g.pushNotelevel(5);
			_g.notesigns.push(nx3.ESign.None);
			return HxOverrides.substr(token7,1,null);
		});
		this.functions.set("e#",function(token8) {
			_g.pushNotelevel(4);
			_g.notesigns.push(nx3.ESign.Sharp);
			return HxOverrides.substr(token8,2,null);
		});
		this.functions.set("eB",function(token9) {
			_g.pushNotelevel(4);
			_g.notesigns.push(nx3.ESign.Flat);
			return HxOverrides.substr(token9,2,null);
		});
		this.functions.set("eN",function(token10) {
			_g.pushNotelevel(4);
			_g.notesigns.push(nx3.ESign.Natural);
			return HxOverrides.substr(token10,2,null);
		});
		this.functions.set("e",function(token11) {
			_g.pushNotelevel(4);
			_g.notesigns.push(nx3.ESign.None);
			return HxOverrides.substr(token11,1,null);
		});
		this.functions.set("f#",function(token12) {
			_g.pushNotelevel(3);
			_g.notesigns.push(nx3.ESign.Sharp);
			return HxOverrides.substr(token12,2,null);
		});
		this.functions.set("fB",function(token13) {
			_g.pushNotelevel(3);
			_g.notesigns.push(nx3.ESign.Flat);
			return HxOverrides.substr(token13,2,null);
		});
		this.functions.set("fN",function(token14) {
			_g.pushNotelevel(3);
			_g.notesigns.push(nx3.ESign.Natural);
			return HxOverrides.substr(token14,2,null);
		});
		this.functions.set("f",function(token15) {
			_g.pushNotelevel(3);
			_g.notesigns.push(nx3.ESign.None);
			return HxOverrides.substr(token15,1,null);
		});
		this.functions.set("g#",function(token16) {
			_g.pushNotelevel(2);
			_g.notesigns.push(nx3.ESign.Sharp);
			return HxOverrides.substr(token16,2,null);
		});
		this.functions.set("gB",function(token17) {
			_g.pushNotelevel(2);
			_g.notesigns.push(nx3.ESign.Flat);
			return HxOverrides.substr(token17,2,null);
		});
		this.functions.set("gN",function(token18) {
			_g.pushNotelevel(2);
			_g.notesigns.push(nx3.ESign.Natural);
			return HxOverrides.substr(token18,2,null);
		});
		this.functions.set("g",function(token19) {
			_g.pushNotelevel(2);
			_g.notesigns.push(nx3.ESign.None);
			return HxOverrides.substr(token19,1,null);
		});
		this.functions.set("a#",function(token20) {
			_g.pushNotelevel(1);
			_g.notesigns.push(nx3.ESign.Sharp);
			return HxOverrides.substr(token20,2,null);
		});
		this.functions.set("aB",function(token21) {
			_g.pushNotelevel(1);
			_g.notesigns.push(nx3.ESign.Flat);
			return HxOverrides.substr(token21,2,null);
		});
		this.functions.set("aN",function(token22) {
			_g.pushNotelevel(1);
			_g.notesigns.push(nx3.ESign.Natural);
			return HxOverrides.substr(token22,2,null);
		});
		this.functions.set("a",function(token23) {
			_g.pushNotelevel(1);
			_g.notesigns.push(nx3.ESign.None);
			return HxOverrides.substr(token23,1,null);
		});
		this.functions.set("b#",function(token24) {
			_g.pushNotelevel(0);
			_g.notesigns.push(nx3.ESign.Sharp);
			return HxOverrides.substr(token24,2,null);
		});
		this.functions.set("bB",function(token25) {
			_g.pushNotelevel(0);
			_g.notesigns.push(nx3.ESign.Flat);
			return HxOverrides.substr(token25,2,null);
		});
		this.functions.set("bN",function(token26) {
			_g.pushNotelevel(0);
			_g.notesigns.push(nx3.ESign.Natural);
			return HxOverrides.substr(token26,2,null);
		});
		this.functions.set("b",function(token27) {
			_g.pushNotelevel(0);
			_g.notesigns.push(nx3.ESign.None);
			return HxOverrides.substr(token27,1,null);
		});
		this.functions.set("1.",function(token28) {
			_g.notevalue = nx3.ENoteVal.Nv1dot;
			return HxOverrides.substr(token28,2,null);
		});
		this.functions.set("1",function(token29) {
			_g.notevalue = nx3.ENoteVal.Nv1;
			return HxOverrides.substr(token29,1,null);
		});
		this.functions.set("2.",function(token30) {
			_g.notevalue = nx3.ENoteVal.Nv2dot;
			return HxOverrides.substr(token30,2,null);
		});
		this.functions.set("2",function(token31) {
			_g.notevalue = nx3.ENoteVal.Nv2;
			return HxOverrides.substr(token31,1,null);
		});
		this.functions.set("4.",function(token32) {
			_g.notevalue = nx3.ENoteVal.Nv4dot;
			return HxOverrides.substr(token32,2,null);
		});
		this.functions.set("4",function(token33) {
			_g.notevalue = nx3.ENoteVal.Nv4;
			return HxOverrides.substr(token33,1,null);
		});
		this.functions.set("8.",function(token34) {
			_g.notevalue = nx3.ENoteVal.Nv8dot;
			return HxOverrides.substr(token34,2,null);
		});
		this.functions.set("8",function(token35) {
			_g.notevalue = nx3.ENoteVal.Nv8;
			return HxOverrides.substr(token35,1,null);
		});
		this.functions.set("16.",function(token36) {
			_g.notevalue = nx3.ENoteVal.Nv16dot;
			return HxOverrides.substr(token36,3,null);
		});
		this.functions.set("16",function(token37) {
			_g.notevalue = nx3.ENoteVal.Nv16;
			return HxOverrides.substr(token37,2,null);
		});
		this.functions.set("_",function(token38) {
			_g.tie = true;
			return HxOverrides.substr(token38,1,null);
		});
		this.functions.set("=",function(token39) {
			_g.prevlevel = 3;
			_g.octAdjust = 0;
			return HxOverrides.substr(token39,1,null);
		});
		this.functions.set("+",function(token40) {
			_g.prevlevel = -4;
			_g.octAdjust = -7;
			return HxOverrides.substr(token40,1,null);
		});
		this.functions.set("++",function(token41) {
			_g.prevlevel = -11;
			_g.octAdjust = -14;
			return HxOverrides.substr(token41,2,null);
		});
		this.functions.set("-",function(token42) {
			_g.prevlevel = 10;
			_g.octAdjust = 7;
			return HxOverrides.substr(token42,1,null);
		});
		this.functions.set("--",function(token43) {
			_g.prevlevel = 17;
			_g.octAdjust = 14;
			return HxOverrides.substr(token43,2,null);
		});
		this.functions.set("p",function(token44) {
			_g.pause = true;
			_g.pauselevel = 0;
			return HxOverrides.substr(token44,1,null);
		});
		this.functions.set("p+",function(token45) {
			_g.pause = true;
			_g.pauselevel = -1;
			return HxOverrides.substr(token45,2,null);
		});
		this.functions.set("p-",function(token46) {
			_g.pause = true;
			_g.pauselevel = 1;
			return HxOverrides.substr(token46,2,null);
		});
	}
	,pushNotelevel: function(value) {
		if(this.guessOctave) {
			var delta = value + this.octAdjust - this.prevlevel;
			haxe.Log.trace([value + this.octAdjust,this.prevlevel,value + this.octAdjust - this.prevlevel],{ fileName : "NoteParser.hx", lineNumber : 128, className : "nx3.qs.NoteParser", methodName : "pushNotelevel"});
			if(delta >= 4) this.octAdjust = this.octAdjust - 7;
			if(delta <= -4) this.octAdjust = this.octAdjust + 7;
		}
		this.notelevels.push(value);
	}
	,tokenFinished: function(originaltoken) {
		if(Lambda.has(["+","++","-","--","="],originaltoken)) return;
		if(this.notelevels.length < 1) this.notelevels = this.prevlevels.slice();
		if(this.notesigns.length < 1) this.notesigns = this.prevsigns.slice();
		if(this.notevalue == null) this.notevalue = this.prevvalue;
		var val = this.notevalue;
		var nnote = null;
		if(this.pause) {
			nnote = new nx3.NNote(nx3.ENoteType.Pause(this.pauselevel),null,val);
			this.pause = false;
		} else {
			var nheads = [];
			var _g1 = 0;
			var _g = this.notelevels.length;
			while(_g1 < _g) {
				var i = _g1++;
				var level = this.notelevels[i] + this.octAdjust + this.clefAdjust;
				var sign = this.notesigns[i];
				var tie;
				if(this.tie) tie = nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0); else tie = null;
				nheads.push(new nx3.NHead(null,level,sign,tie));
				this.prevlevel = level;
			}
			nnote = new nx3.NNote(null,nheads,val);
		}
		this.builder.addNote(nnote);
		this.prevlevels = this.notelevels.slice();
		this.prevsigns = this.notesigns.slice();
		this.prevvalue = this.notevalue;
		this.notelevels = [];
		this.notesigns = [];
		this.notevalue = null;
		this.tie = false;
	}
	,recieveEvent: function(event) {
		switch(event[1]) {
		case 1:
			var octave = event[2];
			this.octAdjust = octave;
			break;
		case 2:
			var val = event[2];
			this.notevalue = val;
			break;
		case 0:
			var mode = event[2];
			this.guessOctave = mode;
			break;
		default:
		}
	}
	,__class__: nx3.qs.NoteParser
});
nx3.qs.ParserEvents = { __ename__ : true, __constructs__ : ["SetGuessOctave","SetOctave","SetNoteVal","SetMode","SetBarClef"] };
nx3.qs.ParserEvents.SetGuessOctave = function(mode) { var $x = ["SetGuessOctave",0,mode]; $x.__enum__ = nx3.qs.ParserEvents; $x.toString = $estr; return $x; };
nx3.qs.ParserEvents.SetOctave = function(octave) { var $x = ["SetOctave",1,octave]; $x.__enum__ = nx3.qs.ParserEvents; $x.toString = $estr; return $x; };
nx3.qs.ParserEvents.SetNoteVal = function(value) { var $x = ["SetNoteVal",2,value]; $x.__enum__ = nx3.qs.ParserEvents; $x.toString = $estr; return $x; };
nx3.qs.ParserEvents.SetMode = function(mode) { var $x = ["SetMode",3,mode]; $x.__enum__ = nx3.qs.ParserEvents; $x.toString = $estr; return $x; };
nx3.qs.ParserEvents.SetBarClef = function(clef) { var $x = ["SetBarClef",4,clef]; $x.__enum__ = nx3.qs.ParserEvents; $x.toString = $estr; return $x; };
nx3.qs.QSyntaxTools = function() { };
nx3.qs.QSyntaxTools.__name__ = ["nx3","qs","QSyntaxTools"];
nx3.qs.QSyntaxTools.bpvToString = function(val) {
	return "" + val.barIndex + "-" + val.partIndex + "-" + val.voiceIndex;
};
nx3.qs.QSyntaxTools.stringToBpv = function(bpvString) {
	var segments = bpvString.split("-");
	var bpv = { barIndex : Std.parseInt(segments[0]), partIndex : Std.parseInt(segments[1]), voiceIndex : Std.parseInt(segments[2])};
	return bpv;
};
nx3.qs.QSyntaxTools.getBpv = function(barIndex,partIndex,voiceIndex) {
	var bpv = { barIndex : barIndex, partIndex : partIndex, voiceIndex : voiceIndex};
	return bpv;
};
nx3.qs.QSyntaxTools.getBpvString = function(barIndex,partIndex,voiceIndex) {
	return "" + barIndex + "-" + partIndex + "-" + voiceIndex;
};
nx3.qs.QSyntaxTools.removeComments = function(code) {
	var r = new EReg("/\\*([a-zA-Z0-9-+=\" ]*)\\*/","g");
	code = r.replace(code," ");
	return code;
};
nx3.qs.QSyntaxTools.removeSpaces = function(code) {
	var r = new EReg("[ \t]{2,}","g");
	code = r.replace(code," ");
	return code;
};
nx3.qs.QuickSyntaxBuilder = function(qsnotes) {
	this.qsnotes = qsnotes;
};
nx3.qs.QuickSyntaxBuilder.__name__ = ["nx3","qs","QuickSyntaxBuilder"];
nx3.qs.QuickSyntaxBuilder.prototype = {
	qsnotes: null
	,getNBars: function() {
		var barMax = 0;
		var partMax = 0;
		var voiceMax = 0;
		var $it0 = this.qsnotes.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			var bpv = nx3.qs.QSyntaxTools.stringToBpv(key);
			barMax = this.max(bpv.barIndex,barMax);
			partMax = this.max(bpv.partIndex,partMax);
		}
		barMax++;
		partMax++;
		var nbars = [];
		var _g = 0;
		while(_g < barMax) {
			var barIndex = _g++;
			var nparts = [];
			var _g1 = 0;
			while(_g1 < partMax) {
				var partIndex = _g1++;
				var nvoices = [];
				if((function($this) {
					var $r;
					var key1 = nx3.qs.QSyntaxTools.getBpvString(barIndex,partIndex,0);
					$r = $this.qsnotes.exists(key1);
					return $r;
				}(this))) {
					var nnotes;
					var key2 = nx3.qs.QSyntaxTools.getBpvString(barIndex,partIndex,0);
					nnotes = this.qsnotes.get(key2);
					var nvoice = new nx3.NVoice(nnotes);
					nvoices.push(nvoice);
				} else {
				}
				if((function($this) {
					var $r;
					var key3 = nx3.qs.QSyntaxTools.getBpvString(barIndex,partIndex,1);
					$r = $this.qsnotes.exists(key3);
					return $r;
				}(this))) {
					var nnotes1;
					var key4 = nx3.qs.QSyntaxTools.getBpvString(barIndex,partIndex,1);
					nnotes1 = this.qsnotes.get(key4);
					var nvoice1 = new nx3.NVoice(nnotes1);
					nvoices.push(nvoice1);
				} else {
				}
				var npart = new nx3.NPart(nvoices);
				nparts.push(npart);
			}
			var nbar = new nx3.NBar(nparts,null,null,null,nx3.EAllotment.Logaritmic);
			nbars.push(nbar);
		}
		return nbars;
	}
	,getNScore: function() {
		var nscore = new nx3.NScore(this.getNBars());
		return nscore;
	}
	,max: function(valA,valB) {
		if(valA > valB) return valA;
		return valB;
	}
	,__class__: nx3.qs.QuickSyntaxBuilder
};
nx3.qs.QuickSyntaxParser = function(str) {
	str = nx3.qs.QSyntaxTools.removeComments(str);
	str = nx3.qs.QSyntaxTools.removeSpaces(str);
	this.str = str;
	this.tokens = this.parseTokens(this.str);
	this.qsnotes = new haxe.ds.StringMap();
	this.modeparser = new nx3.qs.ModeParser(this);
	this.barparser = new nx3.qs.BarParser(this);
	this.noteparser = new nx3.qs.NoteParser(this);
	this.lyricsparser = new nx3.qs.LyricsParser(this);
	this.mode = nx3.qs.ContentMode.Notes;
};
nx3.qs.QuickSyntaxParser.__name__ = ["nx3","qs","QuickSyntaxParser"];
nx3.qs.QuickSyntaxParser.prototype = {
	str: null
	,tokens: null
	,qsnotes: null
	,modeparser: null
	,barparser: null
	,noteparser: null
	,lyricsparser: null
	,mode: null
	,parseToQSyntaxNotes: function() {
		var _g = 0;
		var _g1 = this.tokens;
		while(_g < _g1.length) {
			var token = _g1[_g];
			++_g;
			var testtoken = token;
			testtoken = this.modeparser.parse(token,this);
			if(testtoken == "") continue;
			testtoken = this.barparser.parse(token,this);
			if(testtoken == "") continue;
			var _g2 = this.mode;
			switch(_g2[1]) {
			case 0:
				testtoken = this.noteparser.parse(token,this);
				if(testtoken == "") continue;
				break;
			case 2:
				haxe.Log.trace("LYYYRICS",{ fileName : "QuickSyntaxParser.hx", lineNumber : 77, className : "nx3.qs.QuickSyntaxParser", methodName : "parseToQSyntaxNotes"});
				testtoken = this.lyricsparser.parse(token,this);
				break;
			default:
			}
		}
		return this.qsnotes;
	}
	,parseTokens: function(str) {
		var result = [];
		result = str.split(" ");
		return result;
	}
	,addNote: function(nnote,bpvIndex) {
		if(bpvIndex == null) bpvIndex = this.barparser.getBpvIndex();
		var bpvString = nx3.qs.QSyntaxTools.bpvToString(bpvIndex);
		if(!this.qsnotes.exists(bpvString)) {
			var value = new Array();
			this.qsnotes.set(bpvString,value);
		}
		this.qsnotes.get(bpvString).push(nnote);
	}
	,passEvent: function(event) {
		this.modeparser.recieveEvent(event);
		this.barparser.recieveEvent(event);
		this.noteparser.recieveEvent(event);
		switch(event[1]) {
		case 3:
			var mode = event[2];
			this.mode = mode;
			break;
		default:
		}
	}
	,__class__: nx3.qs.QuickSyntaxParser
};
nx3.render = {};
nx3.render.ITarget = function() { };
nx3.render.ITarget.__name__ = ["nx3","render","ITarget"];
nx3.render.ITarget.prototype = {
	getScaling: null
	,clear: null
	,testLines: null
	,rect: null
	,rectangle: null
	,rectangles: null
	,filledrectangle: null
	,filledellipse: null
	,line: null
	,shape: null
	,text: null
	,textwidth: null
	,textheight: null
	,setFont: null
	,parallellogram: null
	,polyline: null
	,polyfill: null
	,interactiveEllipse: null
	,scaleRect: null
	,tooltipShow: null
	,tooltipHide: null
	,totalWidth: null
	,totalHeight: null
	,__class__: nx3.render.ITarget
};
nx3.render.Renderer = function(target,targetX,targetY,interactions) {
	this.target = target;
	this.targetX = targetX;
	this.targetY = targetY;
	this.scaling = this.target.getScaling();
	if(interactions != null) this.interactions = interactions; else this.interactions = [];
};
nx3.render.Renderer.__name__ = ["nx3","render","Renderer"];
nx3.render.Renderer.prototype = {
	target: null
	,targetY: null
	,targetX: null
	,scaling: null
	,interactions: null
	,xToUnitX: function(x) {
		return x * (1 / this.scaling.unitX);
	}
	,yToUnitY: function(y) {
		return y * (1 / this.scaling.unitY);
	}
	,renderSystem: function(system,newX,newY) {
		if(newY == null) newY = -1;
		if(newX == null) newX = -1;
		if(newX != -1) this.targetX = newX;
		if(newY != -1) this.targetY = newY;
		this.drawSystem(system);
	}
	,renderScore: function(score,newX,newY,systemwidth) {
		if(systemwidth == null) systemwidth = 400;
		if(newY == null) newY = -1;
		if(newX == null) newX = -1;
		if(newX != -1) this.targetX = newX;
		if(newY != -1) this.targetY = newY;
		this.drawSystems(score.getSystems(systemwidth));
		this.target.totalWidth = score.getWidth() * this.scaling.unitX;
		this.target.totalHeight = score.getHeight() * this.scaling.unitY;
	}
	,testText: function() {
		this.target.setFont(nx3.Constants.FONT_TEXT_DEFAULTFORMAT);
		var str = "ABC abc 123";
		this.target.text(0,0,str);
		var w = this.target.textwidth(str);
		var h = this.target.textheight(str);
		this.target.rectangle(0,0,new nx3.geom.Rectangle(0,0,w,h),1,16711680);
	}
	,addInteraction: function(interaction) {
		this.interactions.push(interaction);
	}
	,drawSystems: function(systems) {
		var _g = 0;
		while(_g < systems.length) {
			var system = systems[_g];
			++_g;
			this.drawSystem(system);
		}
	}
	,drawSystemExtras: function(systems,system,nx,ny) {
		if(ny == null) ny = 0;
		if(nx == null) nx = 0;
		var tx = this.targetX + nx * this.scaling.unitX;
		var ty = this.targetY + ny * this.scaling.unitY;
		var _g = 0;
		var _g1 = system.getSystembars();
		while(_g < _g1.length) {
			var systembar = _g1[_g];
			++_g;
			if(systembar == cx.ArrayTools.first(system.getSystembars())) {
				if(system != systems[0]) {
					var prevSystem = cx.ArrayTools.prev(systems,system);
					var prevSystembar = cx.ArrayTools.last(prevSystem.getSystembars());
					var tieconnections = prevSystembar.bar.getTieConnections();
					var _g2 = 0;
					while(_g2 < tieconnections.length) {
						var connection = tieconnections[_g2];
						++_g2;
						var fromBarX = systembar.getXPosition();
						var fromNoteX = systembar.getBarMeasurements().getLeftContentMarginXPosition() + connection.from.getXPosition();
						var part = connection.to.getComplex().getPart();
						var partidx;
						var _this = part.getBar().getParts();
						partidx = HxOverrides.indexOf(_this,part,0);
						var party = partidx * 20 * this.scaling.unitY;
						var tielevel = 0;
						{
							var _g3 = connection.tie;
							switch(_g3[1]) {
							case 0:
								var tlevel = _g3[3];
								var tdir = _g3[2];
								tielevel = tlevel;
								break;
							default:
							}
						}
						var xshift = -5;
						var tiewidth = 3;
						var tierect = new nx3.geom.Rectangle(fromBarX + fromNoteX + xshift,connection.level + tielevel,tiewidth,1);
						this.drawTie(system,tx,ty + party,tierect,nx3.EDirectionUD.Down);
					}
				}
			}
			if(systembar == cx.ArrayTools.last(system.getSystembars())) {
				var tieconnections1 = systembar.bar.getTieConnections();
				var _g21 = 0;
				while(_g21 < tieconnections1.length) {
					var connection1 = tieconnections1[_g21];
					++_g21;
					var fromBarX1 = systembar.getXPosition();
					var fromNoteX1 = systembar.getBarMeasurements().getLeftContentMarginXPosition() + connection1.from.getXPosition();
					var toBarX = systembar.getXPosition() + systembar.getBarMeasurements().getTotalWidth();
					var part1 = connection1.to.getComplex().getPart();
					var partidx1;
					var _this1 = part1.getBar().getParts();
					partidx1 = HxOverrides.indexOf(_this1,part1,0);
					var party1 = partidx1 * 20 * this.scaling.unitY;
					var tielevel1 = 0;
					{
						var _g31 = connection1.tie;
						switch(_g31[1]) {
						case 0:
							var tlevel1 = _g31[3];
							var tdir1 = _g31[2];
							tielevel1 = tlevel1;
							break;
						default:
						}
					}
					var xshift1 = 2;
					var tierect1 = new nx3.geom.Rectangle(fromBarX1 + fromNoteX1 + xshift1,connection1.level + tielevel1,toBarX - (fromBarX1 + fromNoteX1),2);
					this.drawTie(system,tx,ty + party1,tierect1,nx3.EDirectionUD.Down);
				}
			} else {
				var tieconnections2 = systembar.bar.getTieConnections();
				var _g22 = 0;
				while(_g22 < tieconnections2.length) {
					var connection2 = tieconnections2[_g22];
					++_g22;
					var fromBarX2 = systembar.getXPosition();
					var nextsystembar = connection2.to.getComplex().getPart().getBar().getSystembar();
					var toBarX1 = nextsystembar.getXPosition();
					var fromNoteX2 = systembar.getBarMeasurements().getLeftContentMarginXPosition() + connection2.from.getXPosition();
					var toNoteX = nextsystembar.getBarMeasurements().getLeftContentMarginXPosition() + connection2.to.getXPosition();
					var part2 = connection2.to.getComplex().getPart();
					var partidx2;
					var _this2 = part2.getBar().getParts();
					partidx2 = HxOverrides.indexOf(_this2,part2,0);
					var party2 = partidx2 * 20 * this.scaling.unitY;
					var xshift2 = 2;
					var tielevel2 = 0;
					{
						var _g32 = connection2.tie;
						switch(_g32[1]) {
						case 0:
							var tlevel2 = _g32[3];
							var tdir2 = _g32[2];
							tielevel2 = tlevel2;
							break;
						default:
						}
					}
					var tierect2 = new nx3.geom.Rectangle(fromBarX2 + fromNoteX2 + xshift2,connection2.level + tielevel2,toBarX1 + toNoteX - (fromBarX2 + fromNoteX2) - xshift2 - xshift2,2);
					this.drawTie(system,tx,ty + party2,tierect2,nx3.EDirectionUD.Down);
				}
			}
		}
	}
	,drawSystem: function(system) {
		this.drawBarlines(system,system.getSystembars());
		var _g = 0;
		var _g1 = system.getSystembars();
		while(_g < _g1.length) {
			var systembar = _g1[_g];
			++_g;
			this.drawBarAttributes(system,systembar);
			this.drawBarContent(system,systembar);
		}
	}
	,drawBarlines: function(system,systembars) {
		var tx = this.targetX;
		var ty = this.targetY + system.getY() * this.scaling.unitY;
		var part = cx.ArrayTools.first(systembars[0].bar.getParts());
		var partidx;
		var _this = part.getBar().getParts();
		partidx = HxOverrides.indexOf(_this,part,0);
		var party = system.getPartY(0) * this.scaling.unitY;
		var partFirstY = party - 4 * this.scaling.unitY;
		var partY = 0.0;
		var _g = 0;
		while(_g < systembars.length) {
			var systembar = systembars[_g];
			++_g;
			var barX = systembar.getX();
			var barWidth = systembar.getBarMeasurements().getTotalWidth();
			var _g1 = 0;
			var _g2 = systembar.bar.getParts();
			while(_g1 < _g2.length) {
				var part1 = _g2[_g1];
				++_g1;
				var partidx1;
				var _this1 = part1.getBar().getParts();
				partidx1 = HxOverrides.indexOf(_this1,part1,0);
				var part_getYPosition = system.getPartY(partidx1);
				var _g3 = part1.npart.type;
				switch(_g3[1]) {
				case 0:
					var barlineTop = (part_getYPosition - 4) * this.scaling.unitY;
					var barlineBottom = (part_getYPosition + 4) * this.scaling.unitY;
					var barlineX = tx + (barX + barWidth) * this.scaling.unitX;
					this.target.line(barlineX,ty + barlineTop,barlineX,ty + barlineBottom,1.4,0);
					partY = part_getYPosition;
					break;
				default:
				}
			}
		}
		var partLastY = (partY + 4) * this.scaling.unitY;
		this.target.line(tx,ty + partFirstY,tx,ty + partLastY,2,0);
	}
	,drawBarAttributes: function(system,systembar) {
		var tx = this.targetX;
		var _g = 0;
		var _g1 = systembar.bar.getParts();
		while(_g < _g1.length) {
			var part = _g1[_g];
			++_g;
			if(part.npart.type[0] != "Normal") continue;
			var partIdx;
			var _this = systembar.bar.getParts();
			partIdx = HxOverrides.indexOf(_this,part,0);
			var partX = this.targetX + systembar.getX() * this.scaling.unitX;
			var partY = this.targetY + (system.getY() + system.getPartY(partIdx)) * this.scaling.unitY;
			this.target.testLines(partX,partY,systembar.getBarMeasurements().getTotalWidth() * this.scaling.unitX);
			this.drawBarAttributeClef(system,systembar,part);
			this.drawBarAttributeKey(system,systembar,part);
			this.drawBarAttributeTime(system,systembar,part);
		}
	}
	,drawBarAttributeTime: function(system,systembar,part) {
		var showTime = systembar.barConfig.showTime;
		if(!showTime) return;
		var acttime = systembar.actAttributes.time;
		var tx = this.targetX + systembar.getX() * this.scaling.unitX;
		var ty = this.targetY;
		var timeX = systembar.getBarMeasurements().getTimeXPosition() * this.scaling.unitX;
		var partidx;
		var _this = part.getBar().getParts();
		partidx = HxOverrides.indexOf(_this,part,0);
		var part_getYPosition = system.getY() + system.getPartY(partidx);
		var timeChars = nx3.ETimeUtils.toString(acttime).split("/");
		if(timeChars.length == 2) {
			var upperXmlStr = this.getSvgNumber(timeChars[0]);
			var timeY = -3 * this.scaling.unitY;
			this.target.shape(tx + timeX,ty + timeY + part_getYPosition * this.scaling.unitY,upperXmlStr);
			var lowerXmlStr = this.getSvgNumber(timeChars[1]);
			var timeY1 = this.scaling.unitY;
			this.target.shape(tx + timeX,ty + timeY1 + part_getYPosition * this.scaling.unitY,lowerXmlStr);
		} else {
			var midXmlStr = this.getSvgNumber(timeChars[0]);
			var timeY2 = -1 * this.scaling.unitY;
			this.target.shape(tx + timeX,ty + timeY2 + part_getYPosition * this.scaling.unitY,midXmlStr);
		}
	}
	,drawBarAttributeKey: function(system,systembar,part) {
		var showkey = systembar.barConfig.showKey;
		if(!showkey) return;
		var partidx;
		var _this = systembar.bar.getParts();
		partidx = HxOverrides.indexOf(_this,part,0);
		var part_getYPosition = system.getPartY(partidx);
		var actkey = systembar.actAttributes.keys[partidx];
		var tx = this.targetX + systembar.getX() * this.scaling.unitX;
		var ty = this.targetY + system.getY() * this.scaling.unitY;
		var keyX = systembar.getBarMeasurements().getKeyXPosition() * this.scaling.unitX;
		var keyY = this.scaling.unitY;
		var keyCode = nx3.EKeysTools.getSigncode(actkey);
		var svgXmlstr;
		if(keyCode == -1) svgXmlstr = nx3.render.svg.SvgElements.signFlat; else svgXmlstr = nx3.render.svg.SvgElements.signSharp;
		var keyLevels = nx3.EKeysTools.getLevels(actkey,systembar.actAttributes.clefs[partidx]);
		var _g = 0;
		while(_g < keyLevels.length) {
			var level = keyLevels[_g];
			++_g;
			var keyY1 = level * this.scaling.unitY;
			this.target.shape(tx + keyX,ty + keyY1 + part_getYPosition * this.scaling.unitY,svgXmlstr);
			keyX += 2.4 * this.target.getScaling().unitX;
		}
	}
	,drawBarAttributeClef: function(system,systembar,part) {
		var showclef = systembar.barConfig.showClef;
		if(!showclef) return;
		var partidx;
		var _this = systembar.bar.getParts();
		partidx = HxOverrides.indexOf(_this,part,0);
		var part_getYPosition = system.getPartY(partidx);
		var actclef = systembar.actAttributes.clefs[partidx];
		var tx = this.targetX + systembar.getX() * this.scaling.unitX;
		var ty = this.targetY + system.getY() * this.scaling.unitY;
		var clefX = systembar.getBarMeasurements().getClefXPosition() * this.scaling.unitX;
		var clefY = this.scaling.unitY;
		var svgXmlstr;
		switch(actclef[1]) {
		case 2:
			svgXmlstr = nx3.render.svg.SvgElements.clefC;
			break;
		case 0:
			svgXmlstr = nx3.render.svg.SvgElements.clefG;
			break;
		case 1:
			svgXmlstr = nx3.render.svg.SvgElements.clefF;
			break;
		}
		this.target.shape(tx + clefX,ty + clefY + part_getYPosition * this.scaling.unitY,svgXmlstr);
	}
	,drawBarContent: function(system,systembar) {
		var bar = systembar.bar;
		var barx = systembar.getX() + systembar.getBarMeasurements().getContentXPosition();
		var nx = systembar.getBarMeasurements().getContentXPosition();
		var tx = this.targetX + barx * this.scaling.unitX;
		var ty = this.targetY;
		var contentwidth = bar.getContentwidth();
		var _g = 0;
		var _g1 = bar.getParts();
		while(_g < _g1.length) {
			var part = _g1[_g];
			++_g;
			var rect = part.getRect();
			var partidx;
			var _this = part.getBar().getParts();
			partidx = HxOverrides.indexOf(_this,part,0);
			var py = this.targetY + (system.getY() + system.getPartY(partidx)) * this.scaling.unitY;
			this.target.rectangle(tx,py,rect,3,65280);
		}
		var _g2 = 0;
		var _g11 = bar.getParts();
		while(_g2 < _g11.length) {
			var part1 = _g11[_g2];
			++_g2;
			var _g21 = 0;
			var _g3 = part1.getVoices();
			while(_g21 < _g3.length) {
				var voice = _g3[_g21];
				++_g21;
				var _g4 = 0;
				var _g5 = voice.getBeamgroups();
				while(_g4 < _g5.length) {
					var beamgroup = _g5[_g4];
					++_g4;
					this.drawBeamgroup(system,systembar,beamgroup);
				}
			}
		}
		var _g6 = 0;
		var _g12 = bar.getColumns();
		while(_g6 < _g12.length) {
			var column = _g12[_g6];
			++_g6;
			var _g22 = 0;
			var _g31 = column.getComplexes();
			while(_g22 < _g31.length) {
				var complex = _g31[_g22];
				++_g22;
				this.drawComplex(system,systembar,complex);
			}
		}
	}
	,drawNoteHeads: function(system,systembar,note) {
		var _g3 = this;
		var part = note.getComplex().getPart();
		var partidx;
		var _this = part.getBar().getParts();
		partidx = HxOverrides.indexOf(_this,part,0);
		var part_getYPosition = system.getPartY(partidx);
		var barx = systembar.getX() + systembar.getBarMeasurements().getContentXPosition();
		var x = this.targetX + (barx + note.getComplex().getXPosition()) * this.target.getScaling().unitX;
		var y = this.targetY + (system.getY() + part_getYPosition) * this.target.getScaling().unitY;
		{
			var _g = note.nnote.type;
			switch(_g[1]) {
			case 4:
				var font = _g[5];
				var c = _g[4];
				var o = _g[3];
				var text = _g[2];
				var rect = cx.ArrayTools.first(note.getHeadsRects());
				this.target.text(x + rect.x * this.scaling.unitX,y + rect.y * this.scaling.unitY,text);
				break;
			case 3:
				var level = _g[2];
				var rect1 = cx.ArrayTools.first(note.getHeadsRects()).clone();
				rect1.inflate(-0.8,-0.8);
				this.target.filledellipse(x,y,rect1,3,0,16777215);
				var textlevel = (level * -1 + 21) % 7 + 1;
				var text1;
				if(textlevel == null) text1 = "null"; else text1 = "" + textlevel;
				this.target.setFont({ name : "Arial", size : 24, bold : false, italic : false});
				var textwidth = this.target.textwidth(text1) * this.scaling.unitX;
				var textheight = this.target.textheight(text1) * this.scaling.unitY;
				var ny;
				if(note.getVoice().getPart().npart.type[0] == "Tplchain") ny = y + level * 3 * this.scaling.unitY; else ny = y;
				var tx = x - textwidth / 2 - .5 * this.scaling.unitX;
				var ty = ny - textheight / 5;
				this.target.text(tx,ty,text1);
				break;
			default:
				var svginfo = nx3.render.RendererTools.getHeadSvgInfo(note.nnote);
				var hx1 = x;
				var hx2 = x;
				var _g1 = 0;
				var _g2 = note.getHeadsRects();
				while(_g1 < _g2.length) {
					var rect2 = [_g2[_g1]];
					++_g1;
					this.target.shape(x + rect2[0].x * this.scaling.unitX,y + (rect2[0].y + svginfo.y) * this.scaling.unitY,svginfo.xmlStr);
					this.target.interactiveEllipse(x,y,rect2[0],5 * this.scaling.linesWidth,3585587,null,(function(rect2) {
						return function(activityType) {
							var _g4 = 0;
							var _g5 = _g3.interactions;
							while(_g4 < _g5.length) {
								var interaction = _g5[_g4];
								++_g4;
								interaction.handleAction(nx3.action.EActionType.NoteAction(activityType,note,nx3.action.EActionInfo.TargetXY(_g3.target,x + rect2[0].x * _g3.scaling.unitX,y + rect2[0].y * _g3.scaling.unitY)));
							}
						};
					})(rect2));
				}
				var i = 0;
				var _g11 = 0;
				var _g21 = note.getHeadsRects();
				while(_g11 < _g21.length) {
					var rect3 = _g21[_g11];
					++_g11;
					var level1 = note.getHeads()[i].nhead.level;
					if(level1 > 5 || level1 < -5) {
						hx1 = Math.min(hx1,x + (rect3.x - 0.6) * this.scaling.unitX);
						hx2 = Math.max(hx2,x + (rect3.x + rect3.width + 0.6) * this.scaling.unitX);
					}
					i++;
				}
				var _g12 = 0;
				var _g22 = note.getHeads();
				while(_g12 < _g22.length) {
					var head = _g22[_g12];
					++_g12;
					var level2 = head.nhead.level;
					if(level2 < 5 && level2 > -5) continue;
					var lev1;
					if(level2 < 0) lev1 = level2; else lev1 = 5;
					var lev2;
					if(level2 < 0) lev2 = -4; else lev2 = level2 + 1;
					var _g31 = lev1;
					while(_g31 < lev2) {
						var l = _g31++;
						if((l + 100) % 2 == 1) continue;
						var hy = y + l * this.scaling.unitY;
						this.target.line(hx1,hy,hx2,hy,1,0);
					}
				}
			}
		}
	}
	,drawComplex: function(system,systembar,complex) {
		if(complex == null) return;
		var _g = 0;
		var _g1 = complex.getNotes();
		while(_g < _g1.length) {
			var note = _g1[_g];
			++_g;
			this.drawNoteHeads(system,systembar,note);
		}
		this.drawComplexSigns(system,systembar,complex);
		this.drawComplexDots(system,systembar,complex);
		this.drawComplexTies(system,systembar,complex);
	}
	,drawComplexTies: function(system,systembar,complex,nx,ny) {
		if(ny == null) ny = 0;
		if(nx == null) nx = 0;
		var part = complex.getPart();
		var partidx;
		var _this = part.getBar().getParts();
		partidx = HxOverrides.indexOf(_this,part,0);
		var part_getYPosition = system.getPartY(partidx);
		var barx = systembar.getX() + systembar.getBarMeasurements().getContentXPosition();
		var x = this.targetX + (barx + complex.getXPosition()) * this.target.getScaling().unitX;
		var y = this.targetY + (system.getY() + part_getYPosition) * this.target.getScaling().unitY;
		var _g = 0;
		var _g1 = complex.getTieinfos();
		while(_g < _g1.length) {
			var info = _g1[_g];
			++_g;
			var rect = info.rect;
			var direction = info.direction;
			if(info.target != null) {
				var targetcomplex = info.target.getNote().getComplex();
				var thisx = complex.getXPosition() + rect.x;
				var targetAllRect = nx3.geom.RectanglesTools.unionAll(targetcomplex.getAllRects());
				var targetx = targetcomplex.getXPosition() + targetAllRect.x;
				var xshift = .5 * this.scaling.unitX;
				rect.width = targetx - thisx - 0.5;
				this.drawTie(system,x + xshift,y,rect,direction);
			} else rect.width = 6;
		}
	}
	,drawComplexDots: function(system,systembar,complex,nx,ny) {
		if(ny == null) ny = 0;
		if(nx == null) nx = 0;
		var _g = 0;
		var _g1 = complex.getDotRects();
		while(_g < _g1.length) {
			var r = _g1[_g];
			++_g;
			var part = complex.getPart();
			var partidx;
			var _this = part.getBar().getParts();
			partidx = HxOverrides.indexOf(_this,part,0);
			var part_getYPosition = system.getPartY(partidx);
			var barx = systembar.getX() + systembar.getBarMeasurements().getContentXPosition();
			var x = this.targetX + (barx + complex.getXPosition()) * this.target.getScaling().unitX;
			var y = this.targetY + (system.getY() + part_getYPosition) * this.target.getScaling().unitY;
			var crect = r.clone();
			var ddot = crect.width == 3.0;
			crect.offset(0.9,0.2);
			crect.width = 0.7;
			crect.height = 0.6;
			this.target.filledellipse(x,y,crect,0,0,0);
			if(!ddot) continue;
			crect.offset(1.3,0);
			this.target.filledellipse(x,y,crect,0,0,0);
		}
	}
	,drawComplexSigns: function(system,systembar,complex,nx,ny) {
		if(ny == null) ny = 0;
		if(nx == null) nx = 0;
		var part = complex.getPart();
		var partidx;
		var _this = part.getBar().getParts();
		partidx = HxOverrides.indexOf(_this,part,0);
		var part_getYPosition = system.getPartY(partidx);
		var barx = systembar.getX() + systembar.getBarMeasurements().getContentXPosition();
		var x = this.targetX + (barx + complex.getXPosition()) * this.target.getScaling().unitX;
		var y = this.targetY + (system.getY() + part_getYPosition) * this.target.getScaling().unitY;
		var signs = complex.getVisibleSigns();
		var rects = complex.getSignsRects();
		var _g1 = 0;
		var _g = signs.length;
		while(_g1 < _g) {
			var i = _g1++;
			var sign = signs[i];
			var rect = rects[i];
			var xmlStr;
			var _g2 = sign.sign;
			switch(_g2[1]) {
			case 2:
				xmlStr = nx3.render.svg.SvgElements.signFlat;
				break;
			case 1:
				xmlStr = nx3.render.svg.SvgElements.signNatural;
				break;
			case 3:
				xmlStr = nx3.render.svg.SvgElements.signSharp;
				break;
			default:
				xmlStr = null;
			}
			if(xmlStr != null) this.target.shape(x + rect.x * this.scaling.unitX,y + (rect.y + 2) * this.scaling.unitY,xmlStr);
		}
	}
	,drawBeamgroup: function(system,systembar,beamgroup) {
		var frame = beamgroup.getFrame();
		if(frame == null) return;
		var barx = systembar.getX() + systembar.getBarMeasurements().getContentXPosition();
		var tx = this.targetX + barx * this.scaling.unitX;
		var ty = this.targetY + system.getY() * this.scaling.unitY;
		var part = beamgroup.getPVoice().getPart();
		var partidx;
		var _this = part.getBar().getParts();
		partidx = HxOverrides.indexOf(_this,part,0);
		var part_getYPosition = system.getPartY(partidx);
		var rightY = ty + part_getYPosition * this.target.getScaling().unitY;
		var direction = beamgroup.getDirection();
		var firstnote = beamgroup.pnotes[0];
		var leftX = cx.ArrayTools.first(beamgroup.getNotesStemXPositions()) * this.scaling.unitX;
		var leftOuterY = frame.leftOuterY * this.scaling.unitY;
		var leftInnerY = frame.leftInnerY * this.scaling.unitY;
		var leftTipY = frame.leftTipY * this.scaling.unitY;
		this.target.line(tx + leftX,rightY + leftInnerY,tx + leftX,rightY + leftTipY,1,0);
		if(beamgroup.pnotes.length == 1) {
			if(nx3.ENoteValTools.beaminglevel(firstnote.nnote.value) > 0) {
				if(beamgroup.getDirection() == nx3.EDirectionUD.Up) {
					var adjustX = 0.6 * this.scaling.unitX;
					var adjustY = this.scaling.unitY;
					var flag;
					if(nx3.ENoteValTools.beaminglevel(firstnote.nnote.value) == 2) flag = nx3.render.svg.SvgElements.flagUp16; else flag = nx3.render.svg.SvgElements.flagUp8;
					this.target.shape(tx + leftX - adjustX,rightY + adjustY + leftTipY,flag,0);
				} else {
					var adjustX1 = 0.6 * this.scaling.unitX;
					var adjustY1 = -3 * this.scaling.unitY;
					var flag1;
					if(nx3.ENoteValTools.beaminglevel(firstnote.nnote.value) == 2) flag1 = nx3.render.svg.SvgElements.flagDown16; else flag1 = nx3.render.svg.SvgElements.flagDown8;
					this.target.shape(tx + leftX - adjustX1,rightY + adjustY1 + leftTipY,flag1,0);
				}
			}
		}
		if(beamgroup.pnotes.length < 2) return;
		var storeY = [rightY + leftTipY];
		var storeX = [tx + leftX];
		var lastnote = cx.ArrayTools.last(beamgroup.pnotes);
		var rightX = cx.ArrayTools.last(beamgroup.getNotesStemXPositions()) * this.scaling.unitX;
		var rightOuterY = frame.rightOuterY * this.scaling.unitY;
		var rightInnerY = frame.rightInnerY * this.scaling.unitY;
		var rightTipY = frame.rightTipY * this.scaling.unitY;
		this.target.line(tx + rightX,rightY + rightInnerY,tx + rightX,rightY + rightTipY,1,0);
		var beamh = 0.95 * this.scaling.unitY;
		if(beamgroup.getDirection() == nx3.EDirectionUD.Up) beamh = -beamh; else beamh = beamh;
		this.target.parallellogram(tx + leftX,rightY + leftTipY - beamh,tx + rightX,rightY + rightTipY - beamh,beamh,0,0,0);
		if(beamgroup.pnotes.length > 2) {
			var _g1 = 1;
			var _g = frame.outerLevels.length - 1;
			while(_g1 < _g) {
				var i = _g1++;
				var midX = beamgroup.getNotesStemXPositions()[i] * this.scaling.unitX;
				var midInnerY = frame.innerLevels[i] * this.scaling.unitY;
				var delta = (midX - leftX) / (rightX - leftX);
				var midTipY = leftTipY + (rightTipY - leftTipY) * delta;
				this.target.line(tx + midX,rightY + midInnerY,tx + midX,rightY + midTipY,1,0);
				storeY.push(rightY + midTipY);
				storeX.push(tx + midX);
			}
		}
		storeY.push(rightY + rightTipY);
		storeX.push(tx + rightX);
		var idx = 0;
		var beamh1 = 0.95 * this.scaling.unitY;
		var _g2 = 0;
		var _g11 = beamgroup.getFrame().beamflags;
		while(_g2 < _g11.length) {
			var flagtype = _g11[_g2];
			++_g2;
			var adjustY2;
			if(beamgroup.getDirection() == nx3.EDirectionUD.Up) adjustY2 = 2.1; else adjustY2 = -2.1;
			adjustY2 *= this.scaling.unitY;
			var currX = storeX[idx];
			var currY = storeY[idx] + adjustY2;
			var nextX = storeX[idx + 1];
			var nextY = storeY[idx + 1] + adjustY2;
			var factor = 2.2 * this.scaling.unitX;
			switch(flagtype[1]) {
			case 3:
				this.target.parallellogram(currX,currY - beamh1 / 2,nextX,nextY - beamh1 / 2,beamh1,0,0,0);
				break;
			case 1:
				var endX = currX + factor;
				var endY = factor / (nextX - currX) * (nextY - currY) + currY;
				this.target.parallellogram(currX,currY - beamh1 / 2,endX,endY - beamh1 / 2,beamh1,0,0,0);
				break;
			case 2:
				var startX = nextX - factor;
				var startY = -((nextX - startX) / (nextX - currX)) * (nextY - currY) + nextY;
				this.target.parallellogram(startX,startY - beamh1 / 2,nextX,nextY - beamh1 / 2,beamh1,0,0,0);
				break;
			default:
			}
			idx++;
		}
	}
	,drawBeamgroupX: function(system,beamgroup,nx,ny) {
		if(ny == null) ny = 0;
		if(nx == null) nx = 0;
		var frame = beamgroup.getFrame();
		if(frame == null) return;
		var tx = this.targetX + nx * this.scaling.unitX;
		var ty = this.targetY + ny * this.scaling.unitY;
		var part = beamgroup.getPVoice().getPart();
		var partidx;
		var _this = part.getBar().getParts();
		partidx = HxOverrides.indexOf(_this,part,0);
		var part_getYPosition = partidx * 20;
		var rightY = this.targetY + part_getYPosition * this.target.getScaling().unitY;
		var direction = beamgroup.getDirection();
		var firstnote = beamgroup.pnotes[0];
		var leftX = cx.ArrayTools.first(beamgroup.getNotesStemXPositions()) * this.scaling.unitX;
		var leftOuterY = frame.leftOuterY * this.scaling.unitY;
		var leftInnerY = frame.leftInnerY * this.scaling.unitY;
		var leftTipY = frame.leftTipY * this.scaling.unitY;
		this.target.line(this.targetX + leftX,rightY + leftInnerY,this.targetX + leftX,rightY + leftTipY,1,0);
		if(beamgroup.pnotes.length == 1) {
			if(nx3.ENoteValTools.beaminglevel(firstnote.nnote.value) > 0) {
				if(beamgroup.getDirection() == nx3.EDirectionUD.Up) {
					var adjustX = 0.6 * this.scaling.unitX;
					var adjustY = this.scaling.unitY;
					var flag;
					if(nx3.ENoteValTools.beaminglevel(firstnote.nnote.value) == 2) flag = nx3.render.svg.SvgElements.flagUp16; else flag = nx3.render.svg.SvgElements.flagUp8;
					this.target.shape(this.targetX + leftX - adjustX,rightY + adjustY + leftTipY,flag,0);
				} else {
					var adjustX1 = 0.6 * this.scaling.unitX;
					var adjustY1 = -3 * this.scaling.unitY;
					var flag1;
					if(nx3.ENoteValTools.beaminglevel(firstnote.nnote.value) == 2) flag1 = nx3.render.svg.SvgElements.flagDown16; else flag1 = nx3.render.svg.SvgElements.flagDown8;
					this.target.shape(this.targetX + leftX - adjustX1,rightY + adjustY1 + leftTipY,flag1,0);
				}
			}
		}
		if(beamgroup.pnotes.length < 2) return;
		var storeY = [rightY + leftTipY];
		var storeX = [this.targetX + leftX];
		var lastnote = cx.ArrayTools.last(beamgroup.pnotes);
		var rightX = cx.ArrayTools.last(beamgroup.getNotesStemXPositions()) * this.scaling.unitX;
		var rightOuterY = frame.rightOuterY * this.scaling.unitY;
		var rightInnerY = frame.rightInnerY * this.scaling.unitY;
		var rightTipY = frame.rightTipY * this.scaling.unitY;
		this.target.line(this.targetX + rightX,rightY + rightInnerY,this.targetX + rightX,rightY + rightTipY,1,0);
		var beamh = 0.95 * this.scaling.unitY;
		if(beamgroup.getDirection() == nx3.EDirectionUD.Up) beamh = -beamh; else beamh = beamh;
		this.target.parallellogram(this.targetX + leftX,rightY + leftTipY - beamh,this.targetX + rightX,rightY + rightTipY - beamh,beamh,0,0,0);
		if(beamgroup.pnotes.length > 2) {
			var _g1 = 1;
			var _g = frame.outerLevels.length - 1;
			while(_g1 < _g) {
				var i = _g1++;
				var midX = beamgroup.getNotesStemXPositions()[i] * this.scaling.unitX;
				var midInnerY = frame.innerLevels[i] * this.scaling.unitY;
				var delta = (midX - leftX) / (rightX - leftX);
				var midTipY = leftTipY + (rightTipY - leftTipY) * delta;
				this.target.line(this.targetX + midX,rightY + midInnerY,this.targetX + midX,rightY + midTipY,1,0);
				storeY.push(rightY + midTipY);
				storeX.push(this.targetX + midX);
			}
		}
		storeY.push(rightY + rightTipY);
		storeX.push(this.targetX + rightX);
		var idx = 0;
		var beamh1 = 0.95 * this.scaling.unitY;
		var _g2 = 0;
		var _g11 = beamgroup.getFrame().beamflags;
		while(_g2 < _g11.length) {
			var flagtype = _g11[_g2];
			++_g2;
			var adjustY2;
			if(beamgroup.getDirection() == nx3.EDirectionUD.Up) adjustY2 = 2.1; else adjustY2 = -2.1;
			adjustY2 *= this.scaling.unitY;
			var currX = storeX[idx];
			var currY = storeY[idx] + adjustY2;
			var nextX = storeX[idx + 1];
			var nextY = storeY[idx + 1] + adjustY2;
			var factor = 2.2 * this.scaling.unitX;
			switch(flagtype[1]) {
			case 3:
				this.target.parallellogram(currX,currY - beamh1 / 2,nextX,nextY - beamh1 / 2,beamh1,0,0,0);
				break;
			case 1:
				var endX = currX + factor;
				var endY = factor / (nextX - currX) * (nextY - currY) + currY;
				this.target.parallellogram(currX,currY - beamh1 / 2,endX,endY - beamh1 / 2,beamh1,0,0,0);
				break;
			case 2:
				var startX = nextX - factor;
				var startY = -((nextX - startX) / (nextX - currX)) * (nextY - currY) + nextY;
				this.target.parallellogram(startX,startY - beamh1 / 2,nextX,nextY - beamh1 / 2,beamh1,0,0,0);
				break;
			default:
			}
			idx++;
		}
	}
	,drawTie: function(system,x,y,rect,direction) {
		var a1 = null;
		var c1 = null;
		var c2 = null;
		var a2 = null;
		if(direction == nx3.EDirectionUD.Down) {
			a1 = { x : rect.x, y : rect.y};
			c1 = { x : rect.x + 1, y : rect.get_bottom()};
			c2 = { x : rect.get_right() - 1, y : rect.get_bottom()};
			a2 = { x : rect.get_right(), y : rect.y};
		} else {
			a1 = { x : rect.x, y : rect.get_bottom()};
			c1 = { x : rect.x + 1, y : rect.y};
			c2 = { x : rect.get_right() - 1, y : rect.y};
			a2 = { x : rect.get_right(), y : rect.get_bottom()};
		}
		var coords1 = nx3.geom.BezieerTool.bezieerCoordinates(a1,c1,c2,a2);
		var thickness = 0.06 * this.scaling.unitY;
		if(direction == nx3.EDirectionUD.Down) {
			c1 = { x : rect.x, y : rect.get_bottom() - thickness};
			c2 = { x : rect.get_right(), y : rect.get_bottom() - thickness};
		} else {
			c1 = { x : rect.x, y : rect.y + thickness};
			c2 = { x : rect.get_right(), y : rect.y + thickness};
		}
		var coords2 = nx3.geom.BezieerTool.bezieerCoordinates(a2,c2,c1,a1);
		coords1.shift();
		var coords = coords1.concat(coords2);
		this.target.polyfill(x,y,coords);
	}
	,getSvgNumber: function($char) {
		switch($char) {
		case "0":
			return nx3.render.svg.SvgElements.time0;
		case "1":
			return nx3.render.svg.SvgElements.time1;
		case "2":
			return nx3.render.svg.SvgElements.time2;
		case "3":
			return nx3.render.svg.SvgElements.time3;
		case "4":
			return nx3.render.svg.SvgElements.time4;
		case "5":
			return nx3.render.svg.SvgElements.time5;
		case "6":
			return nx3.render.svg.SvgElements.time6;
		case "7":
			return nx3.render.svg.SvgElements.time7;
		case "8":
			return nx3.render.svg.SvgElements.time8;
		case "9":
			return nx3.render.svg.SvgElements.time9;
		case "C":
			return nx3.render.svg.SvgElements.timeCommon;
		case "AllaBreve":
			return nx3.render.svg.SvgElements.timeAllabreve;
		default:
			return "";
		}
	}
	,getTarget: function() {
		return this.target;
	}
	,interactiveComplex: function(system,complex,nx,ny) {
		if(complex == null) return;
		var part = complex.getPart();
		var partidx;
		var _this = part.getBar().getParts();
		partidx = HxOverrides.indexOf(_this,part,0);
		var part_getYPosition = partidx * 20;
		var x = this.targetX + (nx + complex.getXPosition()) * this.target.getScaling().unitX;
		var y = this.targetY + (ny + part_getYPosition) * this.target.getScaling().unitY;
		var _g = 0;
		var _g1 = complex.getNotes();
		while(_g < _g1.length) {
			var note = _g1[_g];
			++_g;
			this.interactiveNote(system,note,nx,ny);
		}
	}
	,interactiveNote: function(system,note,nx,ny) {
		var part = note.getComplex().getPart();
		var partidx;
		var _this = part.getBar().getParts();
		partidx = HxOverrides.indexOf(_this,part,0);
		var part_getYPosition = partidx * 20;
		var x = this.targetX + (nx + note.getComplex().getXPosition()) * this.target.getScaling().unitX;
		var y = this.targetY + (ny + part_getYPosition) * this.target.getScaling().unitY;
	}
	,__class__: nx3.render.Renderer
};
nx3.render.RendererTools = function() { };
nx3.render.RendererTools.__name__ = ["nx3","render","RendererTools"];
nx3.render.RendererTools.getHeadSvgInfo = function(nnote) {
	{
		var _g = nnote.type;
		switch(_g[1]) {
		case 0:
			var attributes = _g[5];
			var articulations = _g[4];
			var variant = _g[3];
			var heads = _g[2];
			var _g1 = nx3.ENoteValTools.head(nnote.value);
			switch(_g1[1]) {
			case 2:
				return { xmlStr : nx3.render.svg.SvgElements.noteWhole, y : 0};
			case 1:
				return { xmlStr : nx3.render.svg.SvgElements.noteWhite, y : 0};
			default:
				return { xmlStr : nx3.render.svg.SvgElements.noteBlack, y : 0};
			}
			break;
		case 1:
			var level = _g[2];
			var _g11 = nx3.ENoteValTools.beaminglevel(nnote.value);
			switch(_g11) {
			case 0:
				var _g2 = nx3.ENoteValTools.head(nnote.value);
				switch(_g2[1]) {
				case 0:
					return { xmlStr : nx3.render.svg.SvgElements.pauseNv4, y : 2};
				case 1:
					return { xmlStr : nx3.render.svg.SvgElements.pauseNv2, y : 2};
				case 2:
					return { xmlStr : nx3.render.svg.SvgElements.pauseNv1, y : 2};
				}
				break;
			case 1:
				return { xmlStr : nx3.render.svg.SvgElements.pauseNv8, y : 2};
			case 2:
				return { xmlStr : nx3.render.svg.SvgElements.pauseNv16, y : 2};
			case 3:
				return { xmlStr : nx3.render.svg.SvgElements.pauseNv16, y : 2};
			default:
				return { xmlStr : nx3.render.svg.SvgElements.clefG, y : 2};
			}
			break;
		default:
			return { xmlStr : nx3.render.svg.SvgElements.clefG, y : 2};
		}
	}
};
nx3.render.TargetSvg = function(svgId,scaling,jsFileName) {
	this.svgId = svgId;
	if(scaling != null) this.scaling = scaling; else this.scaling = nx3.render.scaling.Scaling.NORMAL;
	this.jsFileName = jsFileName;
	this.snap = new Snap(svgId);
	this.font = nx3.Constants.FONT_TEXT_DEFAULTFORMAT;
};
nx3.render.TargetSvg.__name__ = ["nx3","render","TargetSvg"];
nx3.render.TargetSvg.__interfaces__ = [nx3.render.ITarget];
nx3.render.TargetSvg.hex = function($int) {
	if($int == 0) return "#000"; else return "#" + StringTools.hex($int);
};
nx3.render.TargetSvg.prototype = {
	svgId: null
	,jsFileName: null
	,scaling: null
	,snap: null
	,totalHeight: null
	,totalWidth: null
	,testLines: function(x,y,width) {
		var _g = -2;
		while(_g < 3) {
			var i = _g++;
			var cy = y + i * this.scaling.space;
			var line = this.snap.line(x,cy,x + width,cy);
			line.attr({ stroke : "#000", strokeWidth : this.scaling.linesWidth});
		}
	}
	,getScaling: function() {
		return this.scaling;
	}
	,rect: function(x,y,rect,lineWidth,lineColor) {
		if(lineColor == null) lineColor = 0;
		var r = this.snap.rect(x + rect.x,y + rect.y,rect.width,rect.height);
		r.attr({ fill : "none", stroke : lineColor == 0?"#000":"#" + StringTools.hex(lineColor), strokeWidth : lineWidth});
	}
	,rectangle: function(x,y,rect,lineWidth,lineColor) {
		if(lineColor == null) lineColor = 0;
		if(lineWidth == null) lineWidth = 1;
		var r = this.snap.rect(x + rect.x * this.scaling.unitX,y + rect.y * this.scaling.unitY,rect.width * this.scaling.unitX,rect.height * this.scaling.unitY);
		r.attr({ fill : "none", stroke : lineColor == 0?"#000":"#" + StringTools.hex(lineColor), strokeWidth : lineWidth * this.scaling.linesWidth});
	}
	,rectangles: function(x,y,rects,lineWidth,lineColor) {
		if(lineColor == null) lineColor = 0;
		var _g = 0;
		while(_g < rects.length) {
			var rect = rects[_g];
			++_g;
			this.rectangle(x,y,rect,lineWidth,lineColor);
		}
	}
	,line: function(x,y,x2,y2,lineWidth,lineColor) {
		if(lineColor == null) lineColor = 0;
		this.snap.line(x,y,x2,y2).attr({ stroke : lineColor == 0?"#000":"#" + StringTools.hex(lineColor), strokeWidth : lineWidth * this.scaling.linesWidth});
	}
	,shape: function(x,y,xmlStr,fillColor) {
		if(fillColor == null) fillColor = 0;
		var xml = Xml.parse(xmlStr);
		var element = null;
		var elementTag = xml.firstElement().firstChild().firstChild().get_nodeName().toLowerCase();
		switch(elementTag) {
		case "path":
			var pathD = xml.firstElement().firstChild().firstChild().get("d");
			element = this.snap.path(pathD).attr({ fill : "#000000", stroke : "none"});
			break;
		case "rect":
			var rectXml = xml.firstElement().firstChild().firstChild();
			element = this.snap.rect(Std.parseFloat(rectXml.get("x")),Std.parseFloat(rectXml.get("y")),Std.parseFloat(rectXml.get("width")),Std.parseFloat(rectXml.get("height"))).attr({ fill : "#000000", stroke : "none"});
			break;
		default:
		}
		y = y + this.scaling.svgY;
		x = x + this.scaling.svgX;
		var g = this.snap.el("svg",{ x : x, y : y});
		g.append(element);
		var sc = this.scaling.svgScale;
		element.transform("matrix(" + sc + ",0,0," + sc + ",0,0)");
	}
	,text: function(x,y,text) {
		var fontsize = this.font.size * this.scaling.fontScaling;
		x = x + -0.2 * this.scaling.fontScaling;
		y = y + 9.6 * this.scaling.fontScaling;
		var etext = this.snap.text(x,y,text).attr({ fontSize : "" + fontsize + "px ", fontFamily : this.font.name});
	}
	,context: null
	,textwidth: function(text) {
		if(this.context == null) {
			var canvas = window.document.getElementById("CanvasTextMeasurement");
			if(canvas == null) js.Lib.alert("Canvas element " + "CanvasTextMeasurement" + " is missing!");
			this.context = canvas.getContext("2d");
		}
		var fontsize = this.font.size * this.scaling.fontScaling;
		var fontstr = "" + fontsize + "px " + this.font.name;
		this.context.font = fontstr;
		var measure = this.context.measureText(text);
		return measure.width / this.scaling.unitX;
	}
	,textheight: function(text) {
		return this.font.size / 3.8;
	}
	,font: null
	,setFont: function(font) {
		this.font = font;
	}
	,filledrectangle: function(x,y,rect,lineWidth,lineColor,fillColor) {
	}
	,filledellipse: function(x,y,rect,lineWidth,lineColor,fillColor) {
		if(fillColor == null) fillColor = 65280;
		if(lineColor == null) lineColor = 16711680;
		if(lineWidth == null) lineWidth = 1;
		var el = this.snap.ellipse(x + (rect.x + rect.width / 2) * this.scaling.unitX,y + (rect.y + rect.height / 2) * this.scaling.unitY,rect.width / 2 * this.scaling.unitX,rect.height / 2 * this.scaling.unitY);
		el.attr({ fill : fillColor == 0?"#000":"#" + StringTools.hex(fillColor), stroke : lineColor == 0?"#000":"#" + StringTools.hex(lineColor), strokeWidth : lineWidth * this.scaling.linesWidth});
	}
	,parallellogram: function(x,y,x2,y2,pheight,lineWidth,lineColor,fillColor) {
		if(fillColor == null) fillColor = 65280;
		if(lineColor == null) lineColor = 16711680;
		if(lineWidth == null) lineWidth = 1;
		var pathStr = "M " + x + " " + y + " L " + x2 + " " + y2 + "  L " + x2 + " " + (y2 + pheight) + "  L " + x + "  " + (y + pheight) + "  L " + x + " " + y;
		var el = this.snap.path(pathStr);
		el.attr({ fill : fillColor == 0?"#000":"#" + StringTools.hex(fillColor), stroke : lineColor == 0?"#000":"#" + StringTools.hex(lineColor), strokeWidth : lineWidth * this.scaling.linesWidth});
	}
	,clear: function() {
		var svgElement = new js.JQuery(this.svgId);
		svgElement.empty();
	}
	,polyline: function(x,y,coordinates,lineWidth,lineColor) {
		if(lineColor == null) lineColor = 0;
		if(lineWidth == null) lineWidth = 1;
		var pathStr = this.getPathString(x,y,coordinates);
		var el = this.snap.path(pathStr);
		el.attr({ stroke : lineColor == 0?"#000":"#" + StringTools.hex(lineColor), strokeWidth : lineWidth * this.scaling.linesWidth});
	}
	,polyfill: function(x,y,coordinates,lineWidth,lineColor,fillColor) {
		if(fillColor == null) fillColor = 0;
		if(lineColor == null) lineColor = 0;
		if(lineWidth == null) lineWidth = 1;
		var pathStr = this.getPathString(x,y,coordinates);
		var el = this.snap.path(pathStr);
		el.attr({ fill : fillColor == 0?"#000":"#" + StringTools.hex(fillColor), stroke : lineColor == 0?"#000":"#" + StringTools.hex(lineColor), strokeWidth : lineWidth * this.scaling.linesWidth});
	}
	,interactiveEllipse: function(x,y,rect,lineWidth,lineColor,fillColor,cb) {
		var rect1 = this.scaleRect(rect);
		x = x + this.scaling.unitX;
		y = y + this.scaling.unitY;
		var el = this.snap.ellipse(x + rect1.x * this.scaling.unitX,y + rect1.y * this.scaling.unitY,rect1.width,rect1.height);
		el.attr({ fill : fillColor == 0?"#000":"#" + StringTools.hex(fillColor), stroke : "#ddd", strokeWidth : lineWidth, fillOpacity : 0.0, strokeOpacity : 0.1});
		el.mouseover(function(e) {
			el.attr({ fillOpacity : 0.0, strokeOpacity : 0.5, stroke : lineColor == 0?"#000":"#" + StringTools.hex(lineColor)});
			cb(nx3.action.EActivityType.MouseOver);
		});
		el.mouseout(function(e1) {
			el.attr({ fillOpacity : 0.0, strokeOpacity : 0.1, stroke : "#ddd"});
			cb(nx3.action.EActivityType.MouseOut);
		});
		if(cb != null) el.mousedown(function(e2) {
			cb(nx3.action.EActivityType.MouseDown);
		});
		el.mouseup(function(e3) {
			cb(nx3.action.EActivityType.MouseUp);
		});
	}
	,scaleRect: function(rect,inflateX,inflateY) {
		if(inflateY == null) inflateY = 0;
		if(inflateX == null) inflateX = 0;
		var result = new nx3.geom.Rectangle(rect.x,rect.y,rect.width * this.scaling.unitX,rect.height * this.scaling.unitX);
		if(inflateX != 0 || inflateY != 0) result.inflate(inflateX * this.scaling.unitX,inflateY * this.scaling.unitY);
		return result;
	}
	,tooltipShow: function(rect,text) {
		if(this.tooltip == null) this.createTooltip(rect,text);
		if(this.tooltip != null) {
			this.tooltip.attr({ x : Math.round(rect.x), y : Math.round(rect.y), visibility : "visible"});
			this.toolText.node.textContent = text;
		}
	}
	,tooltipHide: function() {
		if(this.tooltip != null) this.tooltip.attr({ visibility : "hidden"});
	}
	,tooltip: null
	,toolText: null
	,createTooltip: function(rect,text) {
		this.tooltip = this.snap.el("svg",{ x : rect.x, y : rect.y});
		var toolBackground = this.snap.rect(0,0,rect.width,rect.height);
		toolBackground.attr({ fill : "#fff2ca", stroke : "#666666", rx : 4, ry : 4, strokeWidth : 1});
		this.tooltip.append(toolBackground);
		this.toolText = this.snap.text(8,19,"");
		this.toolText.attr({ fontSize : "13px ", fontFamily : "Open Sans"});
		this.tooltip.append(this.toolText);
		this.tooltip.attr({ visibility : "hidden"});
	}
	,getPathString: function(x,y,coordinates) {
		var pathStr = "";
		var first = coordinates.shift();
		var cx = x + first.x * this.scaling.unitX;
		var cy = y + first.y * this.scaling.unitY;
		pathStr += "M " + cx + " " + cy + " ";
		var _g = 0;
		while(_g < coordinates.length) {
			var coord = coordinates[_g];
			++_g;
			var cx1 = x + coord.x * this.scaling.unitX;
			var cy1 = y + coord.y * this.scaling.unitY;
			pathStr += "L " + cx1 + " " + cy1 + " ";
		}
		return pathStr;
	}
	,__class__: nx3.render.TargetSvg
};
nx3.render.TargetSvgXml = function(svgId,scaling) {
	this.svg = Xml.createElement("svg");
	this.svg.set("id",svgId);
	this.svg.set("height","400");
	if(scaling != null) this.scaling = scaling; else this.scaling = nx3.render.scaling.Scaling.NORMAL;
};
nx3.render.TargetSvgXml.__name__ = ["nx3","render","TargetSvgXml"];
nx3.render.TargetSvgXml.__interfaces__ = [nx3.render.ITarget];
nx3.render.TargetSvgXml.hex = function($int) {
	if($int == 0) return "#000"; else return "#" + StringTools.hex($int);
};
nx3.render.TargetSvgXml.prototype = {
	svg: null
	,scaling: null
	,totalHeight: null
	,totalWidth: null
	,getXml: function() {
		this.svg.set("width",Std.string(this.totalWidth));
		this.svg.set("height",Std.string(this.totalHeight));
		return this.svg;
	}
	,getScaling: function() {
		return this.scaling;
	}
	,testLines: function(x,y,width) {
		var _g = -2;
		while(_g < 3) {
			var i = _g++;
			var cy = y + i * this.scaling.space;
			this.line(x,cy,x + width,cy,this.scaling.linesWidth,0);
		}
	}
	,rect: function(x,y,rect,lineWidth,lineColor) {
	}
	,rectangle: function(x,y,rect,lineWidth,lineColor) {
	}
	,rectangles: function(x,y,rects,lineWidth,lineColor) {
	}
	,filledrectangle: function(x,y,rect,lineWidth,lineColor,fillColor) {
	}
	,filledellipse: function(x,y,rect,lineWidth,lineColor,fillColor) {
	}
	,line: function(x,y,x2,y2,lineWidth,lineColor) {
		if(lineColor == null) lineColor = 16711680;
		if(lineWidth == null) lineWidth = 1;
		var el = Xml.createElement("line");
		el.set("x1",x == null?"null":"" + x);
		el.set("y1",y == null?"null":"" + y);
		el.set("x2",x2 == null?"null":"" + x2);
		el.set("y2",y2 == null?"null":"" + y2);
		el.set("stroke",lineColor == 0?"#000":"#" + StringTools.hex(lineColor));
		el.set("style","stroke-width:" + lineWidth * this.scaling.linesWidth);
		this.svg.addChild(el);
	}
	,shape: function(x,y,xmlStr,fillColor) {
		if(fillColor == null) fillColor = 0;
		var xml = Xml.parse(xmlStr);
		var elementTag = xml.firstElement().firstChild().firstChild().get_nodeName().toLowerCase();
		var element = Xml.createElement("dummy");
		if(elementTag == "path") {
			element = Xml.createElement("path");
			var pathD = xml.firstElement().firstChild().firstChild().get("d");
			element.set("d",pathD);
			element.set("stroke","none");
			element.set("fill",fillColor == 0?"#000":"#" + StringTools.hex(fillColor));
		} else if(elementTag == "rect") {
			var rectXml = xml.firstElement().firstChild().firstChild();
			element = Xml.createElement("rect");
			element.set("x",rectXml.get("x"));
			element.set("y",rectXml.get("y"));
			element.set("width",rectXml.get("width"));
			element.set("height",rectXml.get("height"));
		} else throw "Shape element " + elementTag + " - UNIMPLEMENTED";
		var sc = this.scaling.svgScale;
		element.set("transform","matrix(" + sc + ",0,0," + sc + ",0,0)");
		var svg = Xml.createElement("svg");
		svg.set("x",Std.string(x + this.scaling.svgX));
		svg.set("y",Std.string(y + this.scaling.svgY));
		svg.addChild(element);
		this.svg.addChild(svg);
	}
	,textwidth: function(text) {
		return 0;
	}
	,textheight: function(text) {
		return 0;
	}
	,parallellogram: function(x,y,x2,y2,pheight,lineWidth,lineColor,fillColor) {
		var pathStr = "M " + x + " " + y + " L " + x2 + " " + y2 + "  L " + x2 + " " + (y2 + pheight) + "  L " + x + "  " + (y + pheight) + "  L " + x + " " + y;
		var el = Xml.createElement("path");
		el.set("d",pathStr);
		el.set("fill",fillColor == 0?"#000":"#" + StringTools.hex(fillColor));
		el.set("stroke",lineColor == 0?"#000":"#" + StringTools.hex(lineColor));
		el.set("style","stroke-width:" + lineWidth * this.scaling.linesWidth);
		this.svg.addChild(el);
	}
	,clear: function() {
	}
	,polyline: function(x,y,coordinates,lineWidth,lineColor) {
		if(lineColor == null) lineColor = 0;
		if(lineWidth == null) lineWidth = 1;
	}
	,polyfill: function(x,y,coordinates,lineWidth,lineColor,fillColor) {
		if(fillColor == null) fillColor = 255;
		if(lineColor == null) lineColor = 0;
		if(lineWidth == null) lineWidth = 1;
	}
	,sline: function(x,y,start,end,lineWidth,lineColor) {
	}
	,interactiveEllipse: function(x,y,rect,lineWidth,lineColor,fillColor,cb) {
	}
	,scaleRect: function(rect,inflateX,inflateY) {
		if(inflateY == null) inflateY = 0;
		if(inflateX == null) inflateX = 0;
		return null;
	}
	,tooltipShow: function(rect,text) {
	}
	,tooltipHide: function() {
	}
	,font: null
	,setFont: function(font) {
		this.font = font;
	}
	,text: function(x,y,text) {
		var fontsize = this.font.size * this.scaling.fontScaling;
		x = x + -0.2 * this.scaling.fontScaling;
		y = y + 9.6 * this.scaling.fontScaling;
	}
	,context: null
	,textwidthJS: function(text) {
		if(this.context == null) {
			var canvas = window.document.getElementById("CanvasTextMeasurement");
			if(canvas == null) js.Lib.alert("Canvas element " + "CanvasTextMeasurement" + " is missing!");
			this.context = canvas.getContext("2d");
		}
		var fontsize = this.font.size * this.scaling.fontScaling;
		var fontstr = "" + fontsize + "px " + this.font.name;
		this.context.font = fontstr;
		var measure = this.context.measureText(text);
		return measure.width / this.scaling.unitX;
	}
	,textheightJS: function(text) {
		return this.font.size / 3.8;
	}
	,__class__: nx3.render.TargetSvgXml
};
nx3.render.scaling = {};
nx3.render.scaling.Scaling = function() { };
nx3.render.scaling.Scaling.__name__ = ["nx3","render","scaling","Scaling"];
nx3.render.scaling.Scaling.scaleRect = function(scaling,rect) {
	return new nx3.geom.Rectangle(rect.x * scaling.unitX,rect.y * scaling.unitY,rect.width * scaling.unitX,rect.height * scaling.unitY);
};
nx3.render.svg = {};
nx3.render.svg.SvgElements = function() { };
nx3.render.svg.SvgElements.__name__ = ["nx3","render","svg","SvgElements"];
nx3.test = {};
nx3.test.TestItems = function() { };
nx3.test.TestItems.__name__ = ["nx3","test","TestItems"];
nx3.test.TestItems.nbar1 = function() {
	return new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote8(null,3),new nx3.QPause8(0),new nx3.QNote8(null,-2),new nx3.QNote8(null,4),new nx3.QPause16(),new nx3.QPause8(),new nx3.QPause4(),new nx3.QPause2(),new nx3.QPause1()])]),new nx3.NPart([new nx3.NVoice([new nx3.QNote16(null,[-1,0]),new nx3.QNote16(null,[0,1],"#"),new nx3.QNote16(null,[1,2]),new nx3.QNote16(null,[5,7]),new nx3.QNote16(null,[0,1]),new nx3.QNote16(null,[0,2]),new nx3.QNote16(null,[0,3]),new nx3.QNote16(null,[0,2])])])]);
};
nx3.test.TestItems.nvoicePause1 = function() {
	return new nx3.NVoice([new nx3.QNote4(null,0),new nx3.NNote(nx3.ENoteType.Pause(0),null,nx3.ENoteVal.Nv4)]);
};
nx3.test.TestItems.nvoiceLyrics1 = function() {
	return new nx3.NVoice([new nx3.NNote(nx3.ENoteType.Lyric("Hello"),null,nx3.ENoteVal.Nv8),new nx3.NNote(nx3.ENoteType.Lyric("World!"),null,nx3.ENoteVal.Nv8)]);
};
nx3.test.TestItems.ppartComplex1 = function() {
	var part = new nx3.PPart(new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,null,[-3,-1,0],"#"),new nx3.QNote4(null,null,[-1,-2]),new nx3.QNote4(null,2,null,"b")]),new nx3.NVoice([new nx3.QNote4(null,null,[0,2],"#b"),new nx3.QNote4(null,null,[2,3])])]));
	return part;
};
nx3.test.TestItems.pbarColumns1 = function() {
	var pbar = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote2(),new nx3.QNote4(),new nx3.QNote4()]),new nx3.NVoice([new nx3.QNote1(2)])]),new nx3.NPart([new nx3.NVoice([new nx3.QNote4(),new nx3.QNote2(),new nx3.QNote4()])])]));
	return pbar;
};
nx3.test.TestItems.pbarColumnsDistances = function() {
	var pbar = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote4(),new nx3.QNote4(),new nx3.QNote4()])]),new nx3.NPart([new nx3.NVoice([new nx3.QNote2(),new nx3.QNote4()])])]));
	return pbar;
};
nx3.test.TestItems.pbarTest = function() {
	return new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,0),new nx3.QNote8(null,3),new nx3.QNote8(null,2),new nx3.QNote2(null,0,null,"#"),new nx3.QNote4(null,null,[-3,-2],"b"),new nx3.QNote8(true,3),new nx3.QNote16(-2)]),new nx3.NVoice([new nx3.QNote4(null,1)])]),new nx3.NPart([new nx3.NVoice([new nx3.QNote2(null,1),new nx3.QNote4(null,0),new nx3.QNote16(1),new nx3.QNote8(null,-2),new nx3.QNote16(-4),new nx3.QNote4(null,0)])])],null,null,null,nx3.EAllotment.Logaritmic));
};
nx3.test.TestItems.pbarFlags = function() {
	return new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote8(null,null,[-1,0]),new nx3.QNote4(null,0,null,"#"),new nx3.QNote8(null,1),new nx3.QNote4(null,1)])])]));
};
nx3.test.TestItems.pbarWhole = function() {
	return new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote1(0)]),new nx3.NVoice([new nx3.QNote1(1)])])]));
};
nx3.test.TestItems.pbarDistances = function() {
	return new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,0),new nx3.QNote1(0)]),new nx3.NVoice([new nx3.QNote4(null,2)])])]));
};
nx3.test.TestItems.pbarLyrics = function() {
	return new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QLyric2("Hejsan"),new nx3.QLyric4("Hoppsan"),new nx3.QLyric8("i"),new nx3.QLyric8("LINGONSKOGEN")])])],null,null,null,nx3.EAllotment.LeftAlign));
};
nx3.test.TestItems.pbarContentwidth1 = function() {
	return new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,0,null,"#"),new nx3.QNote4()])])],null,null,null,nx3.EAllotment.Logaritmic));
};
nx3.test.TestItems.pbarAllotLinear = function() {
	return new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote1(0),new nx3.QNote2(null,0),new nx3.QNote4(null,0),new nx3.QNote8(null,0),new nx3.QNote8(null,0),new nx3.QNote16(0),new nx3.QNote16(0),new nx3.QNote16(0),new nx3.QNote16(0)])])],null,null,null,nx3.EAllotment.Linear));
};
nx3.test.TestItems.pbarAllotLogaritmic = function() {
	return new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote1(0),new nx3.QNote2(null,0),new nx3.QNote4(null,0),new nx3.QNote8(null,0),new nx3.QNote8(null,0),new nx3.QNote16(0),new nx3.QNote16(0),new nx3.QNote16(0),new nx3.QNote16(0)])])],null,null,null,nx3.EAllotment.Logaritmic));
};
nx3.test.TestItems.pbarAllotEqual = function() {
	return new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote1(0),new nx3.QNote2(null,0),new nx3.QNote4(null,0),new nx3.QNote8(null,0),new nx3.QNote8(null,0),new nx3.QNote16(0),new nx3.QNote16(0),new nx3.QNote16(0),new nx3.QNote16(0)])])],null,null,null,nx3.EAllotment.Equal));
};
nx3.test.TestItems.pbarAllotLeftalign = function() {
	return new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote1(0),new nx3.QNote2(null,0),new nx3.QNote4(null,0),new nx3.QNote8(null,0),new nx3.QNote8(null,0),new nx3.QNote16(0),new nx3.QNote16(0),new nx3.QNote16(0),new nx3.QNote16(0)])])],null,null,null,nx3.EAllotment.LeftAlign));
};
nx3.test.TestItems.pbarTies = function() {
	return new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,1,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0))],nx3.ENoteVal.Nv4),new nx3.QNote4(null,1),new nx3.NNote(null,[new nx3.NHead(null,-1,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0))],nx3.ENoteVal.Nv4),new nx3.QNote4(null,-1),new nx3.NNote(null,[new nx3.NHead(null,1,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0))],nx3.ENoteVal.Nv4),new nx3.QNote4(null,1),new nx3.NNote(null,[new nx3.NHead(null,-1,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0))],nx3.ENoteVal.Nv4),new nx3.QNote4(null,-1),new nx3.NNote(null,[new nx3.NHead(null,1,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0)),new nx3.NHead(null,-1,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0))],nx3.ENoteVal.Nv4),new nx3.QNote4(null,1),new nx3.NNote(null,[new nx3.NHead(null,-1,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0))],nx3.ENoteVal.Nv4),new nx3.QNote4(null,-1)]),new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,5,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0))],nx3.ENoteVal.Nv2dot),new nx3.QNote4(null,5)])])],null,null,null,nx3.EAllotment.Logaritmic));
};
nx3.test.TestItems.pbarDots = function() {
	return new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0)],nx3.ENoteVal.Nv4dot),new nx3.NNote(null,[new nx3.NHead(null,1)],nx3.ENoteVal.Nv4dot),new nx3.NNote(null,[new nx3.NHead(null,2)],nx3.ENoteVal.Nv4dot),new nx3.NNote(null,[new nx3.NHead(null,0)],nx3.ENoteVal.Nv4dot),new nx3.NNote(null,[new nx3.NHead(null,-1)],nx3.ENoteVal.Nv4dot),new nx3.NNote(null,[new nx3.NHead(null,-2)],nx3.ENoteVal.Nv4dot),new nx3.NNote(null,[new nx3.NHead(null,-3),new nx3.NHead(null,-2)],nx3.ENoteVal.Nv4dot),new nx3.NNote(null,[new nx3.NHead(null,1),new nx3.NHead(null,6)],nx3.ENoteVal.Nv4dot)])])],null,null,null,nx3.EAllotment.LeftAlign));
};
nx3.test.TestItems.pbarDots2 = function() {
	return new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0)],nx3.ENoteVal.Nv4dot),new nx3.NNote(null,[new nx3.NHead(null,0)],nx3.ENoteVal.Nv4dot),new nx3.NNote(null,[new nx3.NHead(null,0)],nx3.ENoteVal.Nv4dot),new nx3.NNote(null,[new nx3.NHead(null,-1)],nx3.ENoteVal.Nv4dot)]),new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0)],nx3.ENoteVal.Nv4dot),new nx3.NNote(null,[new nx3.NHead(null,1)],nx3.ENoteVal.Nv4dot),new nx3.NNote(null,[new nx3.NHead(null,2)],nx3.ENoteVal.Nv4dot),new nx3.NNote(null,[new nx3.NHead(null,3)],nx3.ENoteVal.Nv4dot),new nx3.NNote(null,[new nx3.NHead(null,4)],nx3.ENoteVal.Nv4dot),new nx3.NNote(null,[new nx3.NHead(null,5)],nx3.ENoteVal.Nv4dot),new nx3.NNote(null,[new nx3.NHead(null,0),new nx3.NHead(null,1)],nx3.ENoteVal.Nv1dot)])])],null,null,null,nx3.EAllotment.LeftAlign));
};
nx3.test.TestItems.systemTest1 = function() {
	var bars = [];
	var n0 = new nx3.NPart([new nx3.QVoice([.4,16,16,4,4],null,null,null,"#.b.")],null,nx3.EClef.ClefC,null,nx3.EKey.Flat2);
	bars.push(new nx3.PBar(new nx3.NBar([n0],null,nx3.ETime.Time2_4)));
	var n1 = new nx3.NPart([new nx3.QVoice([4,.4,8],null,[2,3,4],null,".#")]);
	bars.push(new nx3.PBar(new nx3.NBar([n1])));
	var calculator = new nx3.PBarWidthCalculator();
	var generator = new nx3.PSystemBarsGenerator(null,bars,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,400,calculator);
	var system = generator.getSystem();
	return system;
};
nx3.test.TestItems.scoreTest1 = function() {
	var n0 = new nx3.NBar([new nx3.NPart([new nx3.QVoice(null,1)],null,nx3.EClef.ClefG,null,nx3.EKey.Flat2),new nx3.NPart([new nx3.QVoice(null,1,[-8])],null,nx3.EClef.ClefC,null,nx3.EKey.Flat2)],null,nx3.ETime.Time2_4);
	var n1 = new nx3.NBar([new nx3.NPart([new nx3.QVoice(null,1,[-8])],null,nx3.EClef.ClefG,null,nx3.EKey.Flat2),new nx3.NPart([new nx3.QVoice(null,1,null,0)],null,nx3.EClef.ClefC,null,nx3.EKey.Flat2)],null,nx3.ETime.Time2_4);
	var nscore = new nx3.NScore([n0,n1]);
	var score = new nx3.PScore(nscore);
	return score;
};
nx3.test.TestItems.scoreStretch = function(systemwidth) {
	var n0 = new nx3.NBar([new nx3.NPart([new nx3.QVoice([.4,16,16,4,4],null,null,null,"#.b.")],null,nx3.EClef.ClefC,null,nx3.EKey.Flat2)],null,nx3.ETime.Time2_4);
	var nscore = new nx3.NScore([n0]);
	var score = new nx3.PScore(nscore);
	cx.ArrayTools.first(cx.ArrayTools.first(score.getSystems(systemwidth)).getSystembars());
	return score;
};
nx3.test.TestItems.scoreLinebreakX = function() {
	var b0 = new nx3.NBar([new nx3.NPart([new nx3.QVoice([4,4,4],null,null,null,"")],null,nx3.EClef.ClefC,null,nx3.EKey.Sharp5)],null,nx3.ETime.Time3_4);
	var b1 = new nx3.NBar([new nx3.NPart([new nx3.QVoice([4,4,4,4],null,null,null,"")])]);
	var b2 = new nx3.NBar([new nx3.NPart([new nx3.QVoice([4,4],null,null,null,"")])]);
	var b3 = new nx3.NBar([new nx3.NPart([new nx3.QVoice([4,4],null,null,null,"")])]);
	var b4 = new nx3.NBar([new nx3.NPart([new nx3.QVoice([4,4,4],null,null,null,"")])]);
	var b5 = new nx3.NBar([new nx3.NPart([new nx3.QVoice([4,4,4,4],null,null,null,"")])]);
	var b6 = new nx3.NBar([new nx3.NPart([new nx3.QVoice([4,4,4],null,null,null,"")])]);
	var b7 = new nx3.NBar([new nx3.NPart([new nx3.QVoice([4,4],null,null,null,"")])]);
	var nscore = new nx3.NScore([b0,b1,b2,b3,b4,b5,b6,b7]);
	var score = new nx3.PScore(nscore);
	return score;
};
nx3.test.TestItems.scoreLinebreak = function() {
	var b0 = new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(nx3.ENoteType.Pause(2),null,nx3.ENoteVal.Nv4),new nx3.NNote(null,[new nx3.NHead(null,0)]),new nx3.NNote(null,[new nx3.NHead(null,0)])])],null,nx3.EClef.ClefG,null,nx3.EKey.Sharp5)],null,nx3.ETime.Time3_4);
	var b1 = new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0)]),new nx3.NNote(null,[new nx3.NHead(null,0)]),new nx3.NNote(null,[new nx3.NHead(null,0)]),new nx3.NNote(null,[new nx3.NHead(null,0)])])])]);
	var b2 = new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0)]),new nx3.NNote(null,[new nx3.NHead(null,0)])])])]);
	var b3 = new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0)]),new nx3.NNote(null,[new nx3.NHead(null,0)])])])]);
	var b4 = new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0)]),new nx3.NNote(null,[new nx3.NHead(null,0)]),new nx3.NNote(null,[new nx3.NHead(null,0)])])])]);
	var b5 = new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0)]),new nx3.NNote(null,[new nx3.NHead(null,0)]),new nx3.NNote(null,[new nx3.NHead(null,0)]),new nx3.NNote(null,[new nx3.NHead(null,0)])])])]);
	var b6 = new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0)]),new nx3.NNote(null,[new nx3.NHead(null,0)])])])]);
	var b7 = new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0)]),new nx3.NNote(null,[new nx3.NHead(null,0)]),new nx3.NNote(null,[new nx3.NHead(null,0)])])])]);
	var nscore = new nx3.NScore([b0,b1,b2,b3,b4,b5,b6,b7]);
	var score = new nx3.PScore(nscore);
	return score;
};
nx3.test.TestItems.scoreTest2 = function() {
	var code = "c d e f#8 g / c2 dB | e8 p g4_ g + c / + p - = bB a g16 aB g f | b8 a4 g8 f g4 c8 / e4 f# g c# |";
	return nx3.test.TestItems.scoreFromCode(code);
};
nx3.test.TestItems.scoreFromCode = function(code) {
	var parser = new nx3.qs.QuickSyntaxParser(code);
	var qsnotes = parser.parseToQSyntaxNotes();
	var builder = new nx3.qs.QuickSyntaxBuilder(qsnotes);
	var nscore = builder.getNScore();
	var score = new nx3.PScore(nscore);
	return score;
};
nx3.test.TestItems.scoreBachSinfonia4 = function() {
	var xmlStr = "<bars><bar time=\"C\"><part key=\"Flat1\" clef=\"ClefG\"><voice><pause level=\"-5\" val=\"16\"/><note val=\"16\"><headx level=\"-2\"/></note><note val=\"16\"><headx level=\"-1\" sign=\"Sharp\"/></note><note val=\"16\"><headx level=\"-2\"/></note><note val=\"8\"><headx level=\"1\"/></note><note val=\"8\"><headx level=\"-4\" tie=\"true\"/></note><note val=\"16\"><headx level=\"-4\"/></note><note val=\"16\"><headx level=\"-3\"/></note><note val=\"16\"><headx level=\"-2\"/></note><note val=\"16\"><headx level=\"-3\"/></note><note val=\"8\"><headx level=\"1\"/></note><note val=\"8\"><headx level=\"-5\" tie=\"true\"/></note></voice><voice><pause level=\"2\" val=\"1\"/></voice></part><part clef=\"ClefF\" key=\"Flat1\"><voice><note val=\"8\"><headx level=\"0\"/></note><note val=\"8\"><headx level=\"-1\"/></note><note val=\"8\"><headx level=\"-2\"/></note><note val=\"8\"><headx level=\"0\"/></note><note val=\"8\"><headx level=\"-4\"/></note><note val=\"8\"><headx level=\"-5\" sign=\"Natural\"/></note><note val=\"8\"><headx level=\"-6\" sign=\"Sharp\"/></note><note val=\"8\"><headx level=\"-4\"/></note></voice></part></bar><bar><part><voice><note val=\"16\"><headx level=\"-5\"/></note><note val=\"16\"><headx level=\"-4\"/></note><note val=\"16\"><headx level=\"-3\"/></note><note val=\"16\"><headx level=\"-2\"/></note><note><headx level=\"-6\" tie=\"true\"/></note><note val=\"16\"><headx level=\"-6\"/></note><note val=\"16\"><headx level=\"-5\" sign=\"Sharp\"/></note><note val=\"16\"><headx level=\"-4\" sign=\"Sharp\"/></note><note val=\"16\"><headx level=\"-5\"/></note><note val=\"8.\"><headx level=\"-5\"/></note><note val=\"16\"><headx level=\"-6\"/></note></voice><voice><pause val=\"16\"/><note val=\"16\"><headx level=\"1\"/></note><note val=\"16\"><headx level=\"2\" sign=\"Sharp\"/></note><note val=\"16\"><headx level=\"1\"/></note><note val=\"8\"><headx level=\"4\"/></note><note val=\"8\"><headx level=\"-1\" tie=\"true\"/></note><note val=\"16\"><headx level=\"-1\"/></note><note val=\"16\"><headx level=\"0\" sign=\"Natural\"/></note><note val=\"16\"><headx level=\"1\"/></note><note val=\"16\"><headx level=\"0\"/></note><note val=\"8\"><headx level=\"4\"/></note><note val=\"8\"><headx level=\"-2\" tie=\"true\"/></note></voice></part><part><voice><note><headx level=\"-7\" tie=\"true\"/></note><note val=\"16\"><headx level=\"-7\"/></note><note val=\"16\"><headx level=\"-6\" sign=\"Natural\"/></note><note val=\"16\"><headx level=\"-5\" sign=\"Natural\"/></note><note val=\"16\"><headx level=\"-4\"/></note><note><headx level=\"-8\"/></note><note><headx level=\"-1\"/></note></voice></part></bar><bar><part><voice><note><headx level=\"-6\" tie=\"true\"/></note><note val=\"16\"><headx level=\"-6\"/></note><note val=\"16\"><headx level=\"-2\"/></note><note val=\"16\"><headx level=\"-1\" sign=\"Sharp\"/></note><note val=\"16\"><headx level=\"-2\"/></note><note><headx level=\"-5\" sign=\"Natural\" tie=\"true\"/></note><note val=\"16\"><headx level=\"-5\"/></note><note val=\"16\"><headx level=\"-1\" sign=\"Sharp\"/></note><note val=\"16\"><headx level=\"0\" sign=\"Natural\"/></note><note val=\"16\"><headx level=\"-1\"/></note></voice><voice><note val=\"16\"><headx level=\"-2\"/></note><note val=\"16\"><headx level=\"-1\"/></note><note val=\"16\"><headx level=\"0\" sign=\"Natural\"/></note><note val=\"16\"><headx level=\"-1\"/></note><note><headx level=\"-4\" tie=\"true\" tielevel=\"4\" /></note><note val=\"16\"><headx level=\"-4\"/></note><note val=\"16\"><headx level=\"0\"/></note><note val=\"16\"><headx level=\"1\"/></note><note val=\"16\"><headx level=\"0\"/></note><note><headx level=\"-3\" tie=\"true\" tielevel=\"5\" /></note></voice></part><part><voice><note><headx level=\"3\"/></note><pause/><pause val=\"2\"/></voice></part></bar><bar><part><voice><note val=\"4.\"><headx level=\"-4\"/></note><note val=\"8\"><headx level=\"-6\"/></note><note><headx level=\"-5\" tie=\"true\"/></note><note val=\"16\"><headx level=\"-5\"/></note><note val=\"16\"><headx level=\"-4\"/></note><note val=\"16\"><headx level=\"-3\"/></note><note val=\"16\"><headx level=\"-4\"/></note></voice><voice><note val=\"8\"><headx level=\"-3\"/></note><note val=\"8\"><headx level=\"1\"/></note><note val=\"16\"><headx level=\"-2\"/></note><note val=\"16\"><headx level=\"-3\"/></note><note val=\"16\"><headx level=\"-2\"/></note><note val=\"16\"><headx level=\"-1\" sign=\"Natural\"/></note><note val=\"8.\"><headx level=\"0\" sign=\"Natural\"/></note><note val=\"16\"><headx level=\"-1\" sign=\"Sharp\"/></note><note><headx level=\"-1\"/></note></voice></part><part><voice><pause val=\"16\"/><note val=\"16\"><headx level=\"0\"/></note><note val=\"16\"><headx level=\"1\" sign=\"Sharp\"/></note><note val=\"16\"><headx level=\"0\"/></note><note val=\"8\"><headx level=\"3\"/></note><note val=\"8\"><headx level=\"-2\" tie=\"true\"/></note><note val=\"16\"><headx level=\"-2\"/></note><note val=\"16\"><headx level=\"-1\"/></note><note val=\"16\"><headx level=\"0\"/></note><note val=\"16\"><headx level=\"-1\"/></note><note val=\"8\"><headx level=\"3\"/></note><note val=\"8\"><headx level=\"-3\" tie=\"true\"/></note></voice></part></bar><bar><part><voice><note><headx level=\"-2\"/></note><pause val=\"16\"/><note val=\"16\"><headx level=\"-7\"/></note><note val=\"16\"><headx level=\"-6\"/></note><note val=\"16\"><headx level=\"-7\"/></note><note><headx level=\"-3\" tie=\"true\"/></note><note val=\"16\"><headx level=\"-3\"/></note><note val=\"16\"><headx level=\"-6\"/></note><note val=\"16\"><headx level=\"-5\"/></note><note val=\"16\"><headx level=\"-6\"/></note></voice><voice><note val=\"16\"><headx level=\"-2\"/></note><note val=\"16\"><headx level=\"-2\"/></note><note val=\"16\"><headx level=\"-1\" sign=\"Sharp\"/></note><note val=\"16\"><headx level=\"-2\"/></note><note><headx level=\"2\" tie=\"true\"/></note><note val=\"16\"><headx level=\"2\"/></note><note val=\"16\"><headx level=\"-1\" sign=\"Natural\"/></note><note val=\"16\"><headx level=\"0\"/></note><note val=\"16\"><headx level=\"-1\"/></note><note><headx level=\"3\" tie=\"true\"/></note></voice></part><part><voice><note val=\"16\"><headx level=\"-3\"/></note><note val=\"16\"><headx level=\"-2\"/></note><note val=\"16\"><headx level=\"-1\"/></note><note val=\"16\"><headx level=\"0\"/></note><note><headx level=\"-5\" tie=\"true\"/></note><note val=\"16\"><headx level=\"-5\"/></note><note val=\"16\"><headx level=\"-1\"/></note><note val=\"16\"><headx level=\"0\"/></note><note val=\"16\"><headx level=\"1\"/></note><note><headx level=\"-4\" tie=\"true\"/></note></voice></part></bar><bar><part><voice><note><headx level=\"-2\" tie=\"true\"/></note><note val=\"16\"><headx level=\"-2\"/></note><note val=\"16\"><headx level=\"-2\"/></note><note val=\"16\"><headx level=\"-3\"/></note><note val=\"16\"><headx level=\"-4\"/></note><note><headx level=\"-5\" tie=\"true\"/></note><note val=\"16\"><headx level=\"-5\"/></note><note val=\"16\"><headx level=\"-4\"/></note><note val=\"16\"><headx level=\"-3\"/></note><note val=\"16\"><headx level=\"-2\"/></note></voice><voice><note val=\"16\"><headx level=\"3\"/></note><note val=\"16\"><headx level=\"0\"/></note><note val=\"16\"><headx level=\"1\"/></note><note val=\"16\"><headx level=\"-1\"/></note><note><headx level=\"0\" tie=\"true\"/></note><note val=\"16\"><headx level=\"0\"/></note><note val=\"16\"><headx level=\"-1\"/></note><note val=\"16\"><headx level=\"0\"/></note><note val=\"16\"><headx level=\"1\"/></note><note val=\"16\"><headx level=\"0\"/></note><note val=\"16\"><headx level=\"1\"/></note><note val=\"16\"><headx level=\"2\"/></note><note val=\"16\"><headx level=\"3\"/></note></voice></part><part><voice><note val=\"16\"><headx level=\"-4\"/></note><note val=\"16\"><headx level=\"0\"/></note><note val=\"16\"><headx level=\"1\"/></note><note val=\"16\"><headx level=\"0\"/></note><note val=\"8\"><headx level=\"4\"/></note><note val=\"8\"><headx level=\"-2\" tie=\"true\"/></note><note val=\"16\"><headx level=\"-2\"/></note><note val=\"16\"><headx level=\"-1\"/></note><note val=\"16\"><headx level=\"0\"/></note><note val=\"16\"><headx level=\"-1\"/></note><note val=\"8\"><headx level=\"1\"/></note><note val=\"8\"><headx level=\"-5\" tie=\"true\"/></note></voice></part></bar></bars>";
	var nbars = nx3.xml.BarsXML.fromXmlStr(xmlStr);
	var nscore = new nx3.NScore(nbars);
	return nscore;
};
nx3.test.TestItems.scoreTplRow = function() {
	var nbars = [new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(nx3.ENoteType.Tpl(0)),new nx3.NNote(nx3.ENoteType.Tpl(2)),new nx3.NNote(nx3.ENoteType.Tpl(1)),new nx3.NNote(nx3.ENoteType.Tpl(-3))])],nx3.EPartType.Tplrow),new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,2),new nx3.QNote4(null,4),new nx3.QNote4(null,3),new nx3.QNote4(null,-1)])])]),new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(nx3.ENoteType.Tpl(-2)),new nx3.NNote(nx3.ENoteType.Tpl(-3),null,nx3.ENoteVal.Nv8),new nx3.NNote(nx3.ENoteType.Tpl(-2),null,nx3.ENoteVal.Nv8),new nx3.NNote(nx3.ENoteType.Tpl(-1)),new nx3.NNote(nx3.ENoteType.Tpl(3),null,nx3.ENoteVal.Nv8),new nx3.NNote(nx3.ENoteType.Tpl(1),null,nx3.ENoteVal.Nv8)])],nx3.EPartType.Tplrow),new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,0),new nx3.QNote8(null,-1),new nx3.QNote8(null,0),new nx3.QNote4(null,1),new nx3.QNote8(null,5),new nx3.QNote8(null,3)])])]),new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(nx3.ENoteType.Tpl(0),null,nx3.ENoteVal.Nv1)])],nx3.EPartType.Tplrow),new nx3.NPart([new nx3.NVoice([new nx3.QNote1(2)])])])];
	var nscore = new nx3.NScore(nbars);
	return nscore;
};
nx3.test.TestItems.scoreTplChain = function() {
	var nbars = [new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,2),new nx3.QNote4(null,4),new nx3.QNote4(null,3),new nx3.QNote4(null,-1)])]),new nx3.NPart([new nx3.NVoice([new nx3.NNote(nx3.ENoteType.Tpl(0)),new nx3.NNote(nx3.ENoteType.Tpl(2)),new nx3.NNote(nx3.ENoteType.Tpl(1)),new nx3.NNote(nx3.ENoteType.Tpl(-3))])],nx3.EPartType.Tplchain)]),new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,0),new nx3.QNote8(null,-1),new nx3.QNote8(null,0),new nx3.QNote4(null,1),new nx3.QNote8(null,5),new nx3.QNote8(null,3)])]),new nx3.NPart([new nx3.NVoice([new nx3.NNote(nx3.ENoteType.Tpl(-2)),new nx3.NNote(nx3.ENoteType.Tpl(-3),null,nx3.ENoteVal.Nv8),new nx3.NNote(nx3.ENoteType.Tpl(-2),null,nx3.ENoteVal.Nv8),new nx3.NNote(nx3.ENoteType.Tpl(-1)),new nx3.NNote(nx3.ENoteType.Tpl(3),null,nx3.ENoteVal.Nv8),new nx3.NNote(nx3.ENoteType.Tpl(1),null,nx3.ENoteVal.Nv8)])],nx3.EPartType.Tplchain)]),new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote1(2)])]),new nx3.NPart([new nx3.NVoice([new nx3.NNote(nx3.ENoteType.Tpl(0),null,nx3.ENoteVal.Nv1)])],nx3.EPartType.Tplchain)])];
	var nscore = new nx3.NScore(nbars);
	return nscore;
};
nx3.test.TestItems.scoreTies = function() {
	var nbar0 = new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,1,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,-1))]),new nx3.NNote(null,[new nx3.NHead(null,1,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,1))])]),new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,3,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,1))])])]),new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0)]),new nx3.NNote(null,[new nx3.NHead(null,5,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,1))])])])]);
	var nbar1 = new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,3)]),new nx3.NNote(null,[new nx3.NHead(null,0)])])]),new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,3)]),new nx3.NNote(null,[new nx3.NHead(null,0)])]),new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,5)]),new nx3.NNote(null,[new nx3.NHead(null,0)])])])]);
	var score = new nx3.PScore(new nx3.NScore([nbar0,nbar1]));
	var xmlstr = nx3.xml.BarsXML.toXml(score.getNBars()).toString();
	haxe.Log.trace(xmlstr,{ fileName : "TestItems.hx", lineNumber : 786, className : "nx3.test.TestItems", methodName : "scoreTies"});
	var bars2 = nx3.xml.BarsXML.fromXmlStr(xmlstr);
	var xmlstr2 = nx3.xml.BarsXML.toXml(bars2).toString();
	haxe.Log.trace(xmlstr,{ fileName : "TestItems.hx", lineNumber : 789, className : "nx3.test.TestItems", methodName : "scoreTies"});
	return score;
};
nx3.test.TestItems.getSystemYItems = function() {
	var bars = [];
	var n0 = new nx3.NPart([new nx3.QVoice(null,1,[7])]);
	var n1 = new nx3.NPart([new nx3.QVoice(null,1,[-4])]);
	bars.push(new nx3.NBar([n0,n1]));
	var n01 = new nx3.NPart([new nx3.QVoice(null,1,[4])]);
	var n11 = new nx3.NPart([new nx3.QVoice(null,1,[5])]);
	bars.push(new nx3.NBar([n01,n11]));
	return new nx3.NScore(bars);
};
nx3.test.TestItems.scoreLyrics = function() {
	var bar0 = new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote4(),new nx3.QNote4(),new nx3.QNote4(),new nx3.QNote4()])],null,nx3.EClef.ClefG,null,nx3.EKey.Flat3),new nx3.NPart([new nx3.NVoice([new nx3.QLyric4("Hej"),new nx3.QLyric4("hoppj"),new nx3.QLyric4("i"),new nx3.QLyric4("galopp!")])],nx3.EPartType.Lyrics)],null,nx3.ETime.Time3_4);
	var bar1 = new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote4(),new nx3.QNote4(),new nx3.QNote4(),new nx3.QNote4()])]),new nx3.NPart([new nx3.NVoice([new nx3.QLyric4("Hej"),new nx3.QLyric4("hoppj"),new nx3.QLyric4("i"),new nx3.QLyric4("galopp!")])],nx3.EPartType.Lyrics)]);
	var score = new nx3.NScore([bar0,bar1]);
	return score;
};
nx3.test.TestP = function() {
	haxe.unit.TestCase.call(this);
};
nx3.test.TestP.__name__ = ["nx3","test","TestP"];
nx3.test.TestP.barConfToArr = function(conf) {
	return [conf.showClef,conf.showKey,conf.showTime];
};
nx3.test.TestP.__super__ = haxe.unit.TestCase;
nx3.test.TestP.prototype = $extend(haxe.unit.TestCase.prototype,{
	testPNote: function() {
		var nnote = new nx3.NNote(null,[new nx3.NHead(null,0)]);
		var pnote = new nx3.PNote(nnote);
		this.assertEquals(pnote.nnote.get_nheads().length,1,{ fileName : "TestP.hx", lineNumber : 58, className : "nx3.test.TestP", methodName : "testPNote"});
		this.assertEquals(pnote.getHeads().length,1,{ fileName : "TestP.hx", lineNumber : 59, className : "nx3.test.TestP", methodName : "testPNote"});
		this.assertEquals(cx.ArrayTools.first(pnote.getHeads()).getNote(),pnote,{ fileName : "TestP.hx", lineNumber : 60, className : "nx3.test.TestP", methodName : "testPNote"});
	}
	,testPNoteHeadsRects: function() {
		var part = new nx3.PPart(new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0)])])]));
		var note = cx.ArrayTools.first(cx.ArrayTools.first(part.getVoices()).getNotes());
		var rects = note.getHeadsRects();
		this.assertEquals(rects.length,1,{ fileName : "TestP.hx", lineNumber : 70, className : "nx3.test.TestP", methodName : "testPNoteHeadsRects"});
		this.assertTrue(this.rectEquals(rects[0],-1.6,-1.0,3.2,2.0),{ fileName : "TestP.hx", lineNumber : 71, className : "nx3.test.TestP", methodName : "testPNoteHeadsRects"});
		var part1 = new nx3.PPart(new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,null,[0,-1])])]));
		var note0 = cx.ArrayTools.first(cx.ArrayTools.first(part1.getVoices()).getNotes());
		var rects0 = note0.getHeadsRects();
		this.assertEquals(rects0.length,2,{ fileName : "TestP.hx", lineNumber : 78, className : "nx3.test.TestP", methodName : "testPNoteHeadsRects"});
		this.assertEquals(note0.getDirection(),nx3.EDirectionUD.Down,{ fileName : "TestP.hx", lineNumber : 79, className : "nx3.test.TestP", methodName : "testPNoteHeadsRects"});
		this.assertTrue(this.rectEquals(rects0[0],-1.6,-2.0,3.2,2.0),{ fileName : "TestP.hx", lineNumber : 80, className : "nx3.test.TestP", methodName : "testPNoteHeadsRects"});
		this.assertTrue(this.rectEquals(rects0[1],-4.8,-1,3.2,2.0),{ fileName : "TestP.hx", lineNumber : 81, className : "nx3.test.TestP", methodName : "testPNoteHeadsRects"});
		var part2 = new nx3.PPart(new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,null,[0,1])])]));
		var note01 = cx.ArrayTools.first(cx.ArrayTools.first(part2.getVoices()).getNotes());
		var rects01 = note01.getHeadsRects();
		this.assertEquals(rects01.length,2,{ fileName : "TestP.hx", lineNumber : 88, className : "nx3.test.TestP", methodName : "testPNoteHeadsRects"});
		this.assertEquals(note01.getDirection(),nx3.EDirectionUD.Up,{ fileName : "TestP.hx", lineNumber : 89, className : "nx3.test.TestP", methodName : "testPNoteHeadsRects"});
		this.assertTrue(this.rectEquals(rects01[0],1.6,-1,3.2,2.0),{ fileName : "TestP.hx", lineNumber : 90, className : "nx3.test.TestP", methodName : "testPNoteHeadsRects"});
		this.assertTrue(this.rectEquals(rects01[1],-1.6,0,3.2,2.0),{ fileName : "TestP.hx", lineNumber : 91, className : "nx3.test.TestP", methodName : "testPNoteHeadsRects"});
	}
	,testPVoice: function() {
		var nvoice = new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0)])]);
		var voice = new nx3.PVoice(nvoice);
		this.assertEquals(voice.nvoice.nnotes.length,1,{ fileName : "TestP.hx", lineNumber : 98, className : "nx3.test.TestP", methodName : "testPVoice"});
		this.assertEquals(voice.getNotes().length,1,{ fileName : "TestP.hx", lineNumber : 99, className : "nx3.test.TestP", methodName : "testPVoice"});
		this.assertEquals(cx.ArrayTools.first(voice.getNotes()).getVoice(),voice,{ fileName : "TestP.hx", lineNumber : 100, className : "nx3.test.TestP", methodName : "testPVoice"});
	}
	,testPVoiceBeamgroups: function() {
		var voice = new nx3.PVoice(new nx3.QVoice([8,8,8,8,8,8]));
		var beamgroups = voice.getBeamgroups([nx3.ENoteVal.Nv4dot]);
		this.assertEquals(2,beamgroups.length,{ fileName : "TestP.hx", lineNumber : 107, className : "nx3.test.TestP", methodName : "testPVoiceBeamgroups"});
		this.assertEquals(3,beamgroups[0].pnotes.length,{ fileName : "TestP.hx", lineNumber : 108, className : "nx3.test.TestP", methodName : "testPVoiceBeamgroups"});
		this.assertEquals(3,beamgroups[1].pnotes.length,{ fileName : "TestP.hx", lineNumber : 109, className : "nx3.test.TestP", methodName : "testPVoiceBeamgroups"});
		this.assertEquals(cx.ArrayTools.first(voice.getNotes()).getBeamgroup(),beamgroups[0],{ fileName : "TestP.hx", lineNumber : 110, className : "nx3.test.TestP", methodName : "testPVoiceBeamgroups"});
		this.assertEquals(cx.ArrayTools.second(voice.getNotes()).getBeamgroup(),beamgroups[0],{ fileName : "TestP.hx", lineNumber : 111, className : "nx3.test.TestP", methodName : "testPVoiceBeamgroups"});
		this.assertEquals(cx.ArrayTools.third(voice.getNotes()).getBeamgroup(),beamgroups[0],{ fileName : "TestP.hx", lineNumber : 112, className : "nx3.test.TestP", methodName : "testPVoiceBeamgroups"});
		this.assertEquals(cx.ArrayTools.fourth(voice.getNotes()).getBeamgroup(),beamgroups[1],{ fileName : "TestP.hx", lineNumber : 113, className : "nx3.test.TestP", methodName : "testPVoiceBeamgroups"});
		this.assertEquals(cx.ArrayTools.fifth(voice.getNotes()).getBeamgroup(),beamgroups[1],{ fileName : "TestP.hx", lineNumber : 114, className : "nx3.test.TestP", methodName : "testPVoiceBeamgroups"});
		this.assertEquals(cx.ArrayTools.sixth(voice.getNotes()).getBeamgroup(),beamgroups[1],{ fileName : "TestP.hx", lineNumber : 115, className : "nx3.test.TestP", methodName : "testPVoiceBeamgroups"});
	}
	,testPVoiceBeamgroupsPNote: function() {
		var voice = new nx3.PVoice(new nx3.QVoice([8,8,8,8,8,8]));
		var beamgroup = cx.ArrayTools.first(voice.getNotes()).getBeamgroup();
		this.assertEquals(beamgroup.pnotes[0],cx.ArrayTools.first(voice.getNotes()),{ fileName : "TestP.hx", lineNumber : 122, className : "nx3.test.TestP", methodName : "testPVoiceBeamgroupsPNote"});
		this.assertEquals(beamgroup.pnotes[1],cx.ArrayTools.second(voice.getNotes()),{ fileName : "TestP.hx", lineNumber : 123, className : "nx3.test.TestP", methodName : "testPVoiceBeamgroupsPNote"});
	}
	,testBeamgroupDirection: function() {
		var calculator = new nx3.PBeamgroupDirectionCalculator(new nx3.PBeamgroup([new nx3.PNote(new nx3.QNote4(null,0))]));
		var direction = calculator.getDirection();
		this.assertEquals(calculator.getDirection(),nx3.EDirectionUD.Down,{ fileName : "TestP.hx", lineNumber : 130, className : "nx3.test.TestP", methodName : "testBeamgroupDirection"});
	}
	,testPartbeamgroupsDirectionsTwoVoices: function() {
		var vpart = new nx3.PPart(new nx3.NPart([new nx3.QVoice([8,8,8,8],null,[-1,-1,-1,-1]),new nx3.QVoice([8,8],null,[1,1])]));
		this.assertEquals(cx.ArrayTools.first(cx.ArrayTools.first(vpart.getVoices()).getBeamgroups()).getDirection(),nx3.EDirectionUD.Up,{ fileName : "TestP.hx", lineNumber : 140, className : "nx3.test.TestP", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(cx.ArrayTools.second(cx.ArrayTools.first(vpart.getVoices()).getBeamgroups()).getDirection(),nx3.EDirectionUD.Down,{ fileName : "TestP.hx", lineNumber : 141, className : "nx3.test.TestP", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(cx.ArrayTools.first(cx.ArrayTools.second(vpart.getVoices()).getBeamgroups()).getDirection(),nx3.EDirectionUD.Down,{ fileName : "TestP.hx", lineNumber : 142, className : "nx3.test.TestP", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
	}
	,testBeamflags: function() {
		var vpart = new nx3.PPart(new nx3.NPart([new nx3.QVoice([16,16,16,16])]));
		var beamgroup = cx.ArrayTools.first(cx.ArrayTools.first(vpart.getVoices()).getBeamgroups());
		this.assertEquals(beamgroup.getFrame().beamflags.toString(),[nx3.EBeamflagType.Full16,nx3.EBeamflagType.Full16,nx3.EBeamflagType.Full16].toString(),{ fileName : "TestP.hx", lineNumber : 152, className : "nx3.test.TestP", methodName : "testBeamflags"});
	}
	,testPVoiceNoteDirections: function() {
		var vpart = new nx3.PPart(new nx3.NPart([new nx3.QVoice([8,8,8,8],null,[-1,-1,-1,-1]),new nx3.QVoice([8,8],null,[1,1])]));
		var voice0 = cx.ArrayTools.first(vpart.getVoices());
		this.assertEquals(cx.ArrayTools.first(voice0.getNotes()).getDirection(),nx3.EDirectionUD.Up,{ fileName : "TestP.hx", lineNumber : 164, className : "nx3.test.TestP", methodName : "testPVoiceNoteDirections"});
		this.assertEquals(cx.ArrayTools.second(voice0.getNotes()).getDirection(),nx3.EDirectionUD.Up,{ fileName : "TestP.hx", lineNumber : 165, className : "nx3.test.TestP", methodName : "testPVoiceNoteDirections"});
		this.assertEquals(cx.ArrayTools.third(voice0.getNotes()).getDirection(),nx3.EDirectionUD.Down,{ fileName : "TestP.hx", lineNumber : 166, className : "nx3.test.TestP", methodName : "testPVoiceNoteDirections"});
		this.assertEquals(cx.ArrayTools.fourth(voice0.getNotes()).getDirection(),nx3.EDirectionUD.Down,{ fileName : "TestP.hx", lineNumber : 167, className : "nx3.test.TestP", methodName : "testPVoiceNoteDirections"});
		var voice1 = cx.ArrayTools.second(vpart.getVoices());
		this.assertEquals(cx.ArrayTools.first(voice1.getNotes()).getDirection(),nx3.EDirectionUD.Down,{ fileName : "TestP.hx", lineNumber : 169, className : "nx3.test.TestP", methodName : "testPVoiceNoteDirections"});
		this.assertEquals(cx.ArrayTools.second(voice1.getNotes()).getDirection(),nx3.EDirectionUD.Down,{ fileName : "TestP.hx", lineNumber : 170, className : "nx3.test.TestP", methodName : "testPVoiceNoteDirections"});
	}
	,testPPart: function() {
		var npart = new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0)])])]);
		var ppart = new nx3.PPart(npart);
		this.assertEquals(ppart.npart.nvoices.length,1,{ fileName : "TestP.hx", lineNumber : 178, className : "nx3.test.TestP", methodName : "testPPart"});
		this.assertEquals(ppart.getVoices().length,1,{ fileName : "TestP.hx", lineNumber : 179, className : "nx3.test.TestP", methodName : "testPPart"});
		this.assertEquals(cx.ArrayTools.first(ppart.getVoices()).getPart(),ppart,{ fileName : "TestP.hx", lineNumber : 180, className : "nx3.test.TestP", methodName : "testPPart"});
	}
	,testPPartComplexes2: function() {
		var ppart = new nx3.PPart(new nx3.NPart([new nx3.QVoice([4,8,8,2]),new nx3.QVoice([4,4,2])]));
		var complexes = ppart.getComplexes();
		var positions = complexes.map(function(v) {
			return v.getValueposition();
		});
		this.assertEquals(positions.toString(),[0,3024,4536,6048].toString(),{ fileName : "TestP.hx", lineNumber : 218, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes[0].getNotes().length,2,{ fileName : "TestP.hx", lineNumber : 219, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes[0],cx.ArrayTools.first(cx.ArrayTools.first(ppart.getVoices()).getNotes()).getComplex(),{ fileName : "TestP.hx", lineNumber : 220, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes[0],cx.ArrayTools.first(cx.ArrayTools.second(ppart.getVoices()).getNotes()).getComplex(),{ fileName : "TestP.hx", lineNumber : 221, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes[1].getNotes().length,2,{ fileName : "TestP.hx", lineNumber : 222, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes[1],cx.ArrayTools.second(cx.ArrayTools.first(ppart.getVoices()).getNotes()).getComplex(),{ fileName : "TestP.hx", lineNumber : 223, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes[1],cx.ArrayTools.second(cx.ArrayTools.second(ppart.getVoices()).getNotes()).getComplex(),{ fileName : "TestP.hx", lineNumber : 224, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes[2].getNotes().length,1,{ fileName : "TestP.hx", lineNumber : 225, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes[2],cx.ArrayTools.third(cx.ArrayTools.first(ppart.getVoices()).getNotes()).getComplex(),{ fileName : "TestP.hx", lineNumber : 226, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes[3].getNotes().length,2,{ fileName : "TestP.hx", lineNumber : 227, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes[3],cx.ArrayTools.fourth(cx.ArrayTools.first(ppart.getVoices()).getNotes()).getComplex(),{ fileName : "TestP.hx", lineNumber : 228, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes[3],cx.ArrayTools.third(cx.ArrayTools.second(ppart.getVoices()).getNotes()).getComplex(),{ fileName : "TestP.hx", lineNumber : 229, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		var ppart1 = new nx3.PPart(new nx3.NPart([new nx3.QVoice([4,2,4]),new nx3.QVoice([2,4,4])]));
		var note0 = cx.ArrayTools.first(cx.ArrayTools.first(ppart1.getVoices()).getNotes());
		var complex = note0.getComplex();
		this.assertEquals(note0,cx.ArrayTools.first(complex.getNotes()),{ fileName : "TestP.hx", lineNumber : 238, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		var complexes1 = ppart1.getComplexes();
		this.assertEquals(complexes1[0].getNotes().length,2,{ fileName : "TestP.hx", lineNumber : 241, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes1[0],cx.ArrayTools.first(cx.ArrayTools.first(ppart1.getVoices()).getNotes()).getComplex(),{ fileName : "TestP.hx", lineNumber : 242, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes1[0],cx.ArrayTools.first(cx.ArrayTools.second(ppart1.getVoices()).getNotes()).getComplex(),{ fileName : "TestP.hx", lineNumber : 243, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes1[1].getNotes().length,1,{ fileName : "TestP.hx", lineNumber : 244, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes1[1],cx.ArrayTools.second(cx.ArrayTools.first(ppart1.getVoices()).getNotes()).getComplex(),{ fileName : "TestP.hx", lineNumber : 245, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes1[2].getNotes().length,1,{ fileName : "TestP.hx", lineNumber : 246, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes1[2],cx.ArrayTools.second(cx.ArrayTools.second(ppart1.getVoices()).getNotes()).getComplex(),{ fileName : "TestP.hx", lineNumber : 247, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes1[3].getNotes().length,2,{ fileName : "TestP.hx", lineNumber : 248, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes1[3],cx.ArrayTools.third(cx.ArrayTools.first(ppart1.getVoices()).getNotes()).getComplex(),{ fileName : "TestP.hx", lineNumber : 249, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
		this.assertEquals(complexes1[3],cx.ArrayTools.third(cx.ArrayTools.second(ppart1.getVoices()).getNotes()).getComplex(),{ fileName : "TestP.hx", lineNumber : 250, className : "nx3.test.TestP", methodName : "testPPartComplexes2"});
	}
	,testPBarComplexDots: function() {
		var pbar = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,-3)],nx3.ENoteVal.Nv4dot)])])]));
		var complex = cx.ArrayTools.first(cx.ArrayTools.first(pbar.getColumns()).getComplexes());
		var rects = complex.getDotRects();
		this.assertEquals(rects.length,1,{ fileName : "TestP.hx", lineNumber : 264, className : "nx3.test.TestP", methodName : "testPBarComplexDots"});
	}
	,testPBarComplexTies: function() {
		var pbar = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0))],nx3.ENoteVal.Nv4)])])]));
		var complex = cx.ArrayTools.first(cx.ArrayTools.first(pbar.getColumns()).getComplexes());
		var rects = complex.getTieRects();
		this.assertTrue(true,{ fileName : "TestP.hx", lineNumber : 281, className : "nx3.test.TestP", methodName : "testPBarComplexTies"});
		var pbar1 = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0)],nx3.ENoteVal.Nv4),new nx3.NNote(null,[new nx3.NHead(null,0,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0))],nx3.ENoteVal.Nv4),new nx3.NNote(null,[new nx3.NHead(null,0)],nx3.ENoteVal.Nv4)]),new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0))],nx3.ENoteVal.Nv2),new nx3.NNote(null,[new nx3.NHead(null,0)],nx3.ENoteVal.Nv4)])])]));
	}
	,testPBarComplexTieinfos: function() {
		var pbar = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0))],nx3.ENoteVal.Nv4),new nx3.QNote4()])])]));
		this.assertEquals(cx.ArrayTools.first(cx.ArrayTools.first(pbar.getColumns()).getComplexes()).getTieinfos().length,1,{ fileName : "TestP.hx", lineNumber : 311, className : "nx3.test.TestP", methodName : "testPBarComplexTieinfos"});
		this.assertEquals(cx.ArrayTools.first(cx.ArrayTools.first(cx.ArrayTools.first(pbar.getColumns()).getComplexes()).getTieinfos()).direction,nx3.EDirectionUD.Up,{ fileName : "TestP.hx", lineNumber : 312, className : "nx3.test.TestP", methodName : "testPBarComplexTieinfos"});
		var pbar1 = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,1,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0))],nx3.ENoteVal.Nv4),new nx3.QNote4()])])]));
		this.assertEquals(cx.ArrayTools.first(cx.ArrayTools.first(pbar1.getColumns()).getComplexes()).getTieinfos().length,1,{ fileName : "TestP.hx", lineNumber : 323, className : "nx3.test.TestP", methodName : "testPBarComplexTieinfos"});
		this.assertEquals(cx.ArrayTools.first(cx.ArrayTools.first(cx.ArrayTools.first(pbar1.getColumns()).getComplexes()).getTieinfos()).direction,nx3.EDirectionUD.Down,{ fileName : "TestP.hx", lineNumber : 324, className : "nx3.test.TestP", methodName : "testPBarComplexTieinfos"});
		var pbar2 = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,1,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0)),new nx3.NHead(null,3,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0))],nx3.ENoteVal.Nv4),new nx3.QNote4()])])]));
		this.assertEquals(cx.ArrayTools.first(cx.ArrayTools.first(pbar2.getColumns()).getComplexes()).getTieinfos().length,2,{ fileName : "TestP.hx", lineNumber : 334, className : "nx3.test.TestP", methodName : "testPBarComplexTieinfos"});
		this.assertEquals(cx.ArrayTools.first(cx.ArrayTools.first(cx.ArrayTools.first(pbar2.getColumns()).getComplexes()).getTieinfos()).direction,nx3.EDirectionUD.Up,{ fileName : "TestP.hx", lineNumber : 335, className : "nx3.test.TestP", methodName : "testPBarComplexTieinfos"});
		this.assertEquals(cx.ArrayTools.second(cx.ArrayTools.first(cx.ArrayTools.first(pbar2.getColumns()).getComplexes()).getTieinfos()).direction,nx3.EDirectionUD.Down,{ fileName : "TestP.hx", lineNumber : 336, className : "nx3.test.TestP", methodName : "testPBarComplexTieinfos"});
	}
	,testPBarComplexTieTargets: function() {
		var pbar = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0))],nx3.ENoteVal.Nv4),new nx3.QNote4(null,0)])])]));
		this.assertEquals(cx.ArrayTools.first(cx.ArrayTools.first(pbar.getColumns()).getComplexes()).getTieinfos().length,1,{ fileName : "TestP.hx", lineNumber : 350, className : "nx3.test.TestP", methodName : "testPBarComplexTieTargets"});
		this.assertEquals(cx.ArrayTools.first(cx.ArrayTools.first(cx.ArrayTools.first(pbar.getColumns()).getComplexes()).getTieinfos()).direction,nx3.EDirectionUD.Up,{ fileName : "TestP.hx", lineNumber : 351, className : "nx3.test.TestP", methodName : "testPBarComplexTieTargets"});
		var tieinfos = cx.ArrayTools.first(cx.ArrayTools.first(pbar.getColumns()).getComplexes()).getTieinfos();
		var calculator = new nx3.PComplexTieTargetCalculator(tieinfos);
		tieinfos = calculator.findTargetHeads();
		this.assertEquals(tieinfos[0].head,cx.ArrayTools.first(cx.ArrayTools.first(cx.ArrayTools.first(cx.ArrayTools.first(pbar.getColumns()).getComplexes()).getNotes()).getHeads()),{ fileName : "TestP.hx", lineNumber : 357, className : "nx3.test.TestP", methodName : "testPBarComplexTieTargets"});
		this.assertEquals(tieinfos[0].target,cx.ArrayTools.first(cx.ArrayTools.first(cx.ArrayTools.first(cx.ArrayTools.second(pbar.getColumns()).getComplexes()).getNotes()).getHeads()),{ fileName : "TestP.hx", lineNumber : 358, className : "nx3.test.TestP", methodName : "testPBarComplexTieTargets"});
	}
	,testPBarFindNextColumnComplex: function() {
		var pbar = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,0),new nx3.QNote2(null,0)])]),new nx3.NPart([new nx3.NVoice([new nx3.QNote2(null,0),new nx3.QNote4(null,0)])])]));
		var complex0 = cx.ArrayTools.first(cx.ArrayTools.first(pbar.getColumns()).getComplexes());
		var complex1 = complex0.getNext();
		this.assertEquals(complex1,cx.ArrayTools.first(cx.ArrayTools.second(pbar.getColumns()).getComplexes()),{ fileName : "TestP.hx", lineNumber : 382, className : "nx3.test.TestP", methodName : "testPBarFindNextColumnComplex"});
		var complexA = cx.ArrayTools.second(cx.ArrayTools.first(pbar.getColumns()).getComplexes());
		var complexC = cx.ArrayTools.second(cx.ArrayTools.third(pbar.getColumns()).getComplexes());
		this.assertEquals(complexA.getNext(),complexC,{ fileName : "TestP.hx", lineNumber : 386, className : "nx3.test.TestP", methodName : "testPBarFindNextColumnComplex"});
	}
	,testPBarColumnsDistances: function() {
		var pbar = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,0)])])]));
		this.assertEquals(cx.ArrayTools.first(pbar.getColumns()).getMPosition(),0,{ fileName : "TestP.hx", lineNumber : 454, className : "nx3.test.TestP", methodName : "testPBarColumnsDistances"});
		this.assertEquals(cx.ArrayTools.first(pbar.getColumns()).getMDistance(),1.6,{ fileName : "TestP.hx", lineNumber : 455, className : "nx3.test.TestP", methodName : "testPBarColumnsDistances"});
		var pbar1 = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,0),new nx3.QNote4(null,0)])])]));
		this.assertEquals(cx.ArrayTools.first(pbar1.getColumns()).getMPosition(),0,{ fileName : "TestP.hx", lineNumber : 465, className : "nx3.test.TestP", methodName : "testPBarColumnsDistances"});
		this.assertEquals(cx.ArrayTools.first(pbar1.getColumns()).getMDistance(),4.4,{ fileName : "TestP.hx", lineNumber : 466, className : "nx3.test.TestP", methodName : "testPBarColumnsDistances"});
		this.assertEquals(cx.ArrayTools.second(pbar1.getColumns()).getMPosition(),4.4,{ fileName : "TestP.hx", lineNumber : 467, className : "nx3.test.TestP", methodName : "testPBarColumnsDistances"});
		this.assertEquals(cx.ArrayTools.second(pbar1.getColumns()).getMDistance(),1.6,{ fileName : "TestP.hx", lineNumber : 468, className : "nx3.test.TestP", methodName : "testPBarColumnsDistances"});
		var pbar2 = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote1(0),new nx3.QNote4(null,0)])])]));
		this.assertEquals(cx.ArrayTools.first(pbar2.getColumns()).getMPosition(),0,{ fileName : "TestP.hx", lineNumber : 478, className : "nx3.test.TestP", methodName : "testPBarColumnsDistances"});
		this.assertEquals(cx.ArrayTools.first(pbar2.getColumns()).getMDistance(),5,{ fileName : "TestP.hx", lineNumber : 479, className : "nx3.test.TestP", methodName : "testPBarColumnsDistances"});
		this.assertEquals(cx.ArrayTools.second(pbar2.getColumns()).getMDistance(),1.6,{ fileName : "TestP.hx", lineNumber : 480, className : "nx3.test.TestP", methodName : "testPBarColumnsDistances"});
		var pbar3 = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,0),new nx3.QNote1(0)])])]));
		this.assertEquals(cx.ArrayTools.first(pbar3.getColumns()).getMPosition(),0,{ fileName : "TestP.hx", lineNumber : 491, className : "nx3.test.TestP", methodName : "testPBarColumnsDistances"});
		this.assertEquals(cx.ArrayTools.first(pbar3.getColumns()).getMDistance(),5,{ fileName : "TestP.hx", lineNumber : 492, className : "nx3.test.TestP", methodName : "testPBarColumnsDistances"});
		this.assertEquals(cx.ArrayTools.second(pbar3.getColumns()).getMPosition(),5,{ fileName : "TestP.hx", lineNumber : 493, className : "nx3.test.TestP", methodName : "testPBarColumnsDistances"});
		this.assertEquals(cx.ArrayTools.second(pbar3.getColumns()).getMDistance(),2.2,{ fileName : "TestP.hx", lineNumber : 494, className : "nx3.test.TestP", methodName : "testPBarColumnsDistances"});
		var pbar4 = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,0),new nx3.QNote4(null,0,null,"#")])])]));
		this.assertEquals(cx.ArrayTools.first(pbar4.getColumns()).getMPosition(),0,{ fileName : "TestP.hx", lineNumber : 505, className : "nx3.test.TestP", methodName : "testPBarColumnsDistances"});
		this.assertEquals(cx.ArrayTools.first(pbar4.getColumns()).getMDistance(),6.4,{ fileName : "TestP.hx", lineNumber : 506, className : "nx3.test.TestP", methodName : "testPBarColumnsDistances"});
		this.assertEquals(cx.ArrayTools.second(pbar4.getColumns()).getMPosition(),6.4,{ fileName : "TestP.hx", lineNumber : 507, className : "nx3.test.TestP", methodName : "testPBarColumnsDistances"});
		this.assertEquals(cx.MathTools.round2(cx.ArrayTools.second(pbar4.getColumns()).getMDistance(),null),1.6,{ fileName : "TestP.hx", lineNumber : 508, className : "nx3.test.TestP", methodName : "testPBarColumnsDistances"});
	}
	,testPBarColumnWidths: function() {
		var pbar = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,0),new nx3.QNote4(null,0)])]),new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,0,null,"#"),new nx3.QNote1(0)])])]));
		this.assertEquals(cx.ArrayTools.last(pbar.getColumns()).getRightX(),2.2,{ fileName : "TestP.hx", lineNumber : 529, className : "nx3.test.TestP", methodName : "testPBarColumnWidths"});
		this.assertEquals(cx.ArrayTools.first(pbar.getColumns()).getLeftX(),-4.2,{ fileName : "TestP.hx", lineNumber : 530, className : "nx3.test.TestP", methodName : "testPBarColumnWidths"});
	}
	,testPBarColumnsAllotmentTypes: function() {
		var pbar = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote2(null,0),new nx3.QNote4(null,0),new nx3.QNote8(null,0),new nx3.QNote8(null,0)])])],null,null,null,nx3.EAllotment.Linear));
		this.assertEquals(cx.ArrayTools.first(pbar.getColumns()).getMDistance(),4.4,{ fileName : "TestP.hx", lineNumber : 546, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.first(pbar.getColumns()).getADistance(),16,{ fileName : "TestP.hx", lineNumber : 547, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.first(pbar.getColumns()).getAPostion(),pbar.getContentXZero(),{ fileName : "TestP.hx", lineNumber : 548, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.first(pbar.getColumns()).getADistanceBenefit(),0,{ fileName : "TestP.hx", lineNumber : 549, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.second(pbar.getColumns()).getMDistance(),4.4,{ fileName : "TestP.hx", lineNumber : 551, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.second(pbar.getColumns()).getADistance(),8,{ fileName : "TestP.hx", lineNumber : 552, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.second(pbar.getColumns()).getAPostion(),16 + pbar.getContentXZero(),{ fileName : "TestP.hx", lineNumber : 553, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.second(pbar.getColumns()).getADistanceBenefit(),0,{ fileName : "TestP.hx", lineNumber : 554, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.third(pbar.getColumns()).getMDistance(),4.4,{ fileName : "TestP.hx", lineNumber : 556, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.third(pbar.getColumns()).getADistance(),4.4,{ fileName : "TestP.hx", lineNumber : 557, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.third(pbar.getColumns()).getAPostion(),24 + pbar.getContentXZero(),{ fileName : "TestP.hx", lineNumber : 558, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.MathTools.round2(cx.ArrayTools.third(pbar.getColumns()).getADistanceBenefit(),null),0.4,{ fileName : "TestP.hx", lineNumber : 559, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.fourth(pbar.getColumns()).getMDistance(),1.6,{ fileName : "TestP.hx", lineNumber : 561, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.fourth(pbar.getColumns()).getADistance(),4,{ fileName : "TestP.hx", lineNumber : 562, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.fourth(pbar.getColumns()).getAPostion(),28.4 + pbar.getContentXZero(),{ fileName : "TestP.hx", lineNumber : 563, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.fourth(pbar.getColumns()).getADistanceBenefit(),0,{ fileName : "TestP.hx", lineNumber : 564, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		var pbar1 = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote2(null,0),new nx3.QNote4(null,0),new nx3.QNote8(null,0),new nx3.QNote8(null,0)])])],null,null,null,nx3.EAllotment.Logaritmic));
		this.assertEquals(cx.ArrayTools.first(pbar1.getColumns()).getMDistance(),4.4,{ fileName : "TestP.hx", lineNumber : 577, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.first(pbar1.getColumns()).getADistance(),12,{ fileName : "TestP.hx", lineNumber : 578, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.first(pbar1.getColumns()).getAPostion(),pbar1.getContentXZero(),{ fileName : "TestP.hx", lineNumber : 579, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.first(pbar1.getColumns()).getADistanceBenefit(),0,{ fileName : "TestP.hx", lineNumber : 580, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.second(pbar1.getColumns()).getMDistance(),4.4,{ fileName : "TestP.hx", lineNumber : 582, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.second(pbar1.getColumns()).getADistance(),8,{ fileName : "TestP.hx", lineNumber : 583, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.second(pbar1.getColumns()).getAPostion(),12 + pbar1.getContentXZero(),{ fileName : "TestP.hx", lineNumber : 584, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.second(pbar1.getColumns()).getADistanceBenefit(),0,{ fileName : "TestP.hx", lineNumber : 585, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.third(pbar1.getColumns()).getMDistance(),4.4,{ fileName : "TestP.hx", lineNumber : 587, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.third(pbar1.getColumns()).getADistance(),6,{ fileName : "TestP.hx", lineNumber : 588, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.third(pbar1.getColumns()).getAPostion(),20 + pbar1.getContentXZero(),{ fileName : "TestP.hx", lineNumber : 589, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.third(pbar1.getColumns()).getADistanceBenefit(),0,{ fileName : "TestP.hx", lineNumber : 590, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.fourth(pbar1.getColumns()).getMDistance(),1.6,{ fileName : "TestP.hx", lineNumber : 592, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.fourth(pbar1.getColumns()).getADistance(),6,{ fileName : "TestP.hx", lineNumber : 593, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.fourth(pbar1.getColumns()).getAPostion(),26 + pbar1.getContentXZero(),{ fileName : "TestP.hx", lineNumber : 594, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.fourth(pbar1.getColumns()).getADistanceBenefit(),0,{ fileName : "TestP.hx", lineNumber : 595, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		var pbar2 = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,0),new nx3.QNote4(null,0)])]),new nx3.NPart([new nx3.NVoice([new nx3.QNote1(0)])])],null,null,null,nx3.EAllotment.Linear));
		this.assertEquals(cx.ArrayTools.first(pbar2.getColumns()).getMDistance(),4.4,{ fileName : "TestP.hx", lineNumber : 611, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.first(pbar2.getColumns()).getADistance(),8,{ fileName : "TestP.hx", lineNumber : 612, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.first(pbar2.getColumns()).getAPostion(),pbar2.getContentXZero(),{ fileName : "TestP.hx", lineNumber : 613, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.first(pbar2.getColumns()).getADistanceBenefit(),0,{ fileName : "TestP.hx", lineNumber : 614, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.second(pbar2.getColumns()).getMDistance(),1.6,{ fileName : "TestP.hx", lineNumber : 616, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.second(pbar2.getColumns()).getADistance(),24,{ fileName : "TestP.hx", lineNumber : 617, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.second(pbar2.getColumns()).getAPostion(),8 + pbar2.getContentXZero(),{ fileName : "TestP.hx", lineNumber : 618, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.second(pbar2.getColumns()).getADistanceBenefit(),0,{ fileName : "TestP.hx", lineNumber : 619, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		var pbar3 = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,0),new nx3.QNote4(null,0)])]),new nx3.NPart([new nx3.NVoice([new nx3.QNote1(0)])])],null,null,null,nx3.EAllotment.Logaritmic));
		this.assertEquals(cx.ArrayTools.first(pbar3.getColumns()).getMDistance(),4.4,{ fileName : "TestP.hx", lineNumber : 635, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.first(pbar3.getColumns()).getADistance(),8,{ fileName : "TestP.hx", lineNumber : 636, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.first(pbar3.getColumns()).getAPostion(),pbar3.getContentXZero(),{ fileName : "TestP.hx", lineNumber : 637, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.first(pbar3.getColumns()).getADistanceBenefit(),0,{ fileName : "TestP.hx", lineNumber : 638, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.second(pbar3.getColumns()).getMDistance(),1.6,{ fileName : "TestP.hx", lineNumber : 640, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.second(pbar3.getColumns()).getADistance(),16,{ fileName : "TestP.hx", lineNumber : 641, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.second(pbar3.getColumns()).getAPostion(),8 + pbar3.getContentXZero(),{ fileName : "TestP.hx", lineNumber : 642, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
		this.assertEquals(cx.ArrayTools.second(pbar3.getColumns()).getADistanceBenefit(),0,{ fileName : "TestP.hx", lineNumber : 643, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentTypes"});
	}
	,testPBarColumnsAllotmentDistanceBenefit: function() {
		var pbar = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote8(null,0),new nx3.QNote8(null,0,null,"#"),new nx3.QNote8(null,0)])])],null,null,null,nx3.EAllotment.Linear));
		this.assertEquals(cx.ArrayTools.first(pbar.getColumns()).getMDistance(),6.4,{ fileName : "TestP.hx", lineNumber : 658, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentDistanceBenefit"});
		this.assertEquals(cx.ArrayTools.first(pbar.getColumns()).getADistance(),6.4,{ fileName : "TestP.hx", lineNumber : 659, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentDistanceBenefit"});
		this.assertEquals(cx.ArrayTools.first(pbar.getColumns()).getAPostion(),pbar.getContentXZero(),{ fileName : "TestP.hx", lineNumber : 660, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentDistanceBenefit"});
		this.assertEquals(cx.MathTools.round2(cx.ArrayTools.first(pbar.getColumns()).getADistanceBenefit(),null),2.4,{ fileName : "TestP.hx", lineNumber : 661, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentDistanceBenefit"});
		this.assertEquals(cx.ArrayTools.second(pbar.getColumns()).getMDistance(),4.4,{ fileName : "TestP.hx", lineNumber : 663, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentDistanceBenefit"});
		this.assertEquals(cx.ArrayTools.second(pbar.getColumns()).getADistance(),4.4,{ fileName : "TestP.hx", lineNumber : 664, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentDistanceBenefit"});
		this.assertEquals(cx.ArrayTools.second(pbar.getColumns()).getAPostion(),6.4 + pbar.getContentXZero(),{ fileName : "TestP.hx", lineNumber : 665, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentDistanceBenefit"});
		this.assertEquals(cx.MathTools.round2(cx.ArrayTools.second(pbar.getColumns()).getADistanceBenefit(),null),0.4,{ fileName : "TestP.hx", lineNumber : 666, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentDistanceBenefit"});
		this.assertEquals(cx.ArrayTools.third(pbar.getColumns()).getMDistance(),1.6,{ fileName : "TestP.hx", lineNumber : 668, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentDistanceBenefit"});
		this.assertEquals(cx.ArrayTools.third(pbar.getColumns()).getADistance(),4,{ fileName : "TestP.hx", lineNumber : 669, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentDistanceBenefit"});
		this.assertEquals(cx.ArrayTools.third(pbar.getColumns()).getAPostion(),10.8 + pbar.getContentXZero(),{ fileName : "TestP.hx", lineNumber : 670, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentDistanceBenefit"});
		this.assertEquals(cx.ArrayTools.third(pbar.getColumns()).getADistanceBenefit(),0,{ fileName : "TestP.hx", lineNumber : 671, className : "nx3.test.TestP", methodName : "testPBarColumnsAllotmentDistanceBenefit"});
	}
	,testPBarLastColumnValue: function() {
		var pbar = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,0),new nx3.QNote4(null,0)])]),new nx3.NPart([new nx3.NVoice([new nx3.QNote1(0)])])]));
		this.assertEquals(pbar.getValue(),12096,{ fileName : "TestP.hx", lineNumber : 689, className : "nx3.test.TestP", methodName : "testPBarLastColumnValue"});
		this.assertEquals(cx.ArrayTools.first(pbar.getColumns()).getValue(),3024,{ fileName : "TestP.hx", lineNumber : 690, className : "nx3.test.TestP", methodName : "testPBarLastColumnValue"});
		this.assertEquals(cx.ArrayTools.second(pbar.getColumns()).getValue(),9072,{ fileName : "TestP.hx", lineNumber : 691, className : "nx3.test.TestP", methodName : "testPBarLastColumnValue"});
	}
	,testBarAttributes: function() {
		var rect = nx3.PAttributesRectsCalculator.getClefRect(nx3.EClef.ClefG);
		var rect1 = nx3.PAttributesRectsCalculator.getKeyRect(nx3.EKey.Flat3);
		this.assertTrue(true,{ fileName : "TestP.hx", lineNumber : 698, className : "nx3.test.TestP", methodName : "testBarAttributes"});
	}
	,testBarContentWidth: function() {
		var bar = new nx3.PBar(new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote8(null,0,null,".")])])],null,null,null,nx3.EAllotment.LeftAlign));
		var lastcolumn = cx.ArrayTools.last(bar.getColumns());
		this.assertEquals(bar.getContentwidth(),3.2,{ fileName : "TestP.hx", lineNumber : 712, className : "nx3.test.TestP", methodName : "testBarContentWidth"});
	}
	,rectEquals: function(a,bx,by,bwidth,bheight) {
		if(bheight == null) bheight = -1;
		if(bwidth == null) bwidth = -1;
		if(by == null) by = -1;
		if(bx == null) bx = -1;
		var result = false;
		if(bwidth == -1 || bheight == -1) throw "Rect comparison error";
		result = Math.abs(a.x - bx) <= 0.00001 && Math.abs(a.y - by) <= 0.00001 && Math.abs(a.width - bwidth) <= 0.00001 && Math.abs(a.height - bheight) <= 0.00001;
		if(!result) haxe.Log.trace(["Rectangle not equal",Std.string(a),Std.string(new nx3.geom.Rectangle(bx,by,bwidth,bheight))],{ fileName : "TestP.hx", lineNumber : 721, className : "nx3.test.TestP", methodName : "rectEquals"});
		return result;
	}
	,testSystemGeneratorOneBar: function() {
		var bars = [];
		var n0 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefC,null,nx3.EKey.Flat2);
		bars.push(new nx3.PBar(new nx3.NBar([n0],null,nx3.ETime.Time2_4)));
		var generator = new nx3.PSystemBarsGenerator(null,bars,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,400);
		var system = generator.getSystem();
		this.assertEquals(cx.ArrayTools.first(system.getSystembars()).actAttributes.clefs.toString(),[nx3.EClef.ClefC].toString(),{ fileName : "TestP.hx", lineNumber : 770, className : "nx3.test.TestP", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(cx.ArrayTools.first(system.getSystembars()).actAttributes.keys.toString(),[nx3.EKey.Flat2].toString(),{ fileName : "TestP.hx", lineNumber : 771, className : "nx3.test.TestP", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(cx.ArrayTools.first(system.getSystembars()).actAttributes.time,nx3.ETime.Time2_4,{ fileName : "TestP.hx", lineNumber : 772, className : "nx3.test.TestP", methodName : "testSystemGeneratorOneBar"});
		var bars1 = [];
		var n01 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars1.push(new nx3.PBar(new nx3.NBar([n01])));
		var generator1 = new nx3.PSystemBarsGenerator(null,bars1,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,400);
		var system1 = generator1.getSystem();
		this.assertEquals(cx.ArrayTools.first(system1.getSystembars()).actAttributes.clefs.toString(),[nx3.PSystemBarsGenerator.defaultClef].toString(),{ fileName : "TestP.hx", lineNumber : 781, className : "nx3.test.TestP", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(cx.ArrayTools.first(system1.getSystembars()).actAttributes.keys.toString(),[nx3.PSystemBarsGenerator.defaultKey].toString(),{ fileName : "TestP.hx", lineNumber : 782, className : "nx3.test.TestP", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(cx.ArrayTools.first(system1.getSystembars()).actAttributes.time,nx3.PSystemBarsGenerator.defaultTime,{ fileName : "TestP.hx", lineNumber : 783, className : "nx3.test.TestP", methodName : "testSystemGeneratorOneBar"});
		var bars2 = [];
		var n02 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars2.push(new nx3.PBar(new nx3.NBar([n02])));
		var prevBarAttributes = { clefs : [nx3.EClef.ClefF], keys : [nx3.EKey.Sharp4], time : nx3.ETime.Time5_8};
		var generator2 = new nx3.PSystemBarsGenerator(null,bars2,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes,400);
		var system2 = generator2.getSystem();
		this.assertEquals(cx.ArrayTools.first(system2.getSystembars()).actAttributes.clefs.toString(),[nx3.EClef.ClefF].toString(),{ fileName : "TestP.hx", lineNumber : 793, className : "nx3.test.TestP", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(cx.ArrayTools.first(system2.getSystembars()).actAttributes.keys.toString(),[nx3.EKey.Sharp4].toString(),{ fileName : "TestP.hx", lineNumber : 794, className : "nx3.test.TestP", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(cx.ArrayTools.first(system2.getSystembars()).actAttributes.time,nx3.ETime.Time5_8,{ fileName : "TestP.hx", lineNumber : 795, className : "nx3.test.TestP", methodName : "testSystemGeneratorOneBar"});
		var bars3 = [];
		var n03 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefC);
		var n1 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,null,nx3.EKey.Sharp5);
		bars3.push(new nx3.PBar(new nx3.NBar([n03,n1])));
		var generator3 = new nx3.PSystemBarsGenerator(null,bars3,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,400);
		var system3 = generator3.getSystem();
		this.assertEquals(cx.ArrayTools.first(system3.getSystembars()).actAttributes.clefs.toString(),[nx3.EClef.ClefC,nx3.PSystemBarsGenerator.defaultClef].toString(),{ fileName : "TestP.hx", lineNumber : 805, className : "nx3.test.TestP", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(cx.ArrayTools.first(system3.getSystembars()).actAttributes.keys.toString(),[nx3.PSystemBarsGenerator.defaultKey,nx3.EKey.Sharp5].toString(),{ fileName : "TestP.hx", lineNumber : 806, className : "nx3.test.TestP", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(cx.ArrayTools.first(system3.getSystembars()).actAttributes.time,nx3.PSystemBarsGenerator.defaultTime,{ fileName : "TestP.hx", lineNumber : 807, className : "nx3.test.TestP", methodName : "testSystemGeneratorOneBar"});
		var bars4 = [];
		var n04 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		var n11 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars4.push(new nx3.PBar(new nx3.NBar([n04,n11])));
		var prevBarAttributes1 = { clefs : [nx3.EClef.ClefF,nx3.EClef.ClefG], keys : [nx3.EKey.Sharp1,nx3.EKey.Flat3], time : nx3.ETime.Time5_8};
		var generator4 = new nx3.PSystemBarsGenerator(null,bars4,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes1,400);
		var system4 = generator4.getSystem();
		this.assertEquals(cx.ArrayTools.first(system4.getSystembars()).actAttributes.clefs.toString(),[nx3.EClef.ClefF,nx3.EClef.ClefG].toString(),{ fileName : "TestP.hx", lineNumber : 818, className : "nx3.test.TestP", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(cx.ArrayTools.first(system4.getSystembars()).actAttributes.keys.toString(),[nx3.EKey.Sharp1,nx3.EKey.Flat3].toString(),{ fileName : "TestP.hx", lineNumber : 819, className : "nx3.test.TestP", methodName : "testSystemGeneratorOneBar"});
		var bars5 = [];
		var n05 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefC);
		var n12 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,null,nx3.EKey.Sharp5);
		bars5.push(new nx3.PBar(new nx3.NBar([n05,n12])));
		var prevBarAttributes2 = { clefs : [nx3.EClef.ClefF,nx3.EClef.ClefG], keys : [nx3.EKey.Sharp1,nx3.EKey.Flat3], time : nx3.ETime.Time5_8};
		var generator5 = new nx3.PSystemBarsGenerator(null,bars5,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes2,400);
		var system5 = generator5.getSystem();
		this.assertEquals(cx.ArrayTools.first(system5.getSystembars()).actAttributes.clefs.toString(),[nx3.EClef.ClefC,nx3.EClef.ClefG].toString(),{ fileName : "TestP.hx", lineNumber : 830, className : "nx3.test.TestP", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(cx.ArrayTools.first(system5.getSystembars()).actAttributes.keys.toString(),[nx3.EKey.Sharp1,nx3.EKey.Sharp5].toString(),{ fileName : "TestP.hx", lineNumber : 831, className : "nx3.test.TestP", methodName : "testSystemGeneratorOneBar"});
	}
	,testSystemGeneratorBarConfigResult: function() {
		var bars = [];
		var n0 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefC);
		bars.push(new nx3.PBar(new nx3.NBar([n0])));
		var generator = new nx3.PSystemBarsGenerator(null,bars,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,400);
		var system = generator.getSystem();
		this.assertEquals(cx.ArrayTools.first(system.getSystembars()).barConfig.showClef,true,{ fileName : "TestP.hx", lineNumber : 844, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		var bars1 = [];
		var n01 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefC);
		bars1.push(new nx3.PBar(new nx3.NBar([n01])));
		var generator1 = new nx3.PSystemBarsGenerator(null,bars1,{ showFirstClef : false, showFirstKey : true, showFirstTime : true},null,400);
		var system1 = generator1.getSystem();
		this.assertEquals(cx.ArrayTools.first(system1.getSystembars()).barConfig.showClef,false,{ fileName : "TestP.hx", lineNumber : 851, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		var bars2 = [];
		var n02 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars2.push(new nx3.PBar(new nx3.NBar([n02])));
		var generator2 = new nx3.PSystemBarsGenerator(null,bars2,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,400);
		var system2 = generator2.getSystem();
		this.assertEquals(cx.ArrayTools.first(system2.getSystembars()).barConfig.showClef,true,{ fileName : "TestP.hx", lineNumber : 858, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		this.assertEquals(cx.ArrayTools.first(system2.getSystembars()).actAttributes.clefs.toString(),[nx3.PSystemBarsGenerator.defaultClef].toString(),{ fileName : "TestP.hx", lineNumber : 859, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		var bars3 = [];
		var n03 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars3.push(new nx3.PBar(new nx3.NBar([n03])));
		var prevBarAttributes = { clefs : [nx3.EClef.ClefF], keys : [nx3.EKey.Sharp4], time : nx3.ETime.Time5_8};
		var generator3 = new nx3.PSystemBarsGenerator(null,bars3,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes,400);
		var system3 = generator3.getSystem();
		this.assertEquals(cx.ArrayTools.first(system3.getSystembars()).barConfig.showClef,true,{ fileName : "TestP.hx", lineNumber : 867, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		this.assertEquals(cx.ArrayTools.first(system3.getSystembars()).actAttributes.clefs.toString(),[nx3.PSystemBarsGenerator.defaultClef].toString(),{ fileName : "TestP.hx", lineNumber : 868, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		var bars4 = [];
		var n04 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,nx3.EDisplayALN.Never);
		bars4.push(new nx3.PBar(new nx3.NBar([n04])));
		var prevBarAttributes1 = { clefs : [nx3.EClef.ClefF], keys : [nx3.EKey.Sharp4], time : nx3.ETime.Time5_8};
		var generator4 = new nx3.PSystemBarsGenerator(null,bars4,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes1,400);
		var system4 = generator4.getSystem();
		this.assertEquals(cx.ArrayTools.first(system4.getSystembars()).barConfig.showClef,false,{ fileName : "TestP.hx", lineNumber : 876, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		var bars5 = [];
		var n05 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefC,nx3.EDisplayALN.Always);
		bars5.push(new nx3.PBar(new nx3.NBar([n05])));
		var generator5 = new nx3.PSystemBarsGenerator(null,bars5,{ showFirstClef : false, showFirstKey : true, showFirstTime : true},null,400);
		var system5 = generator5.getSystem();
		this.assertEquals(cx.ArrayTools.first(system5.getSystembars()).barConfig.showClef,true,{ fileName : "TestP.hx", lineNumber : 883, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		var bars6 = [];
		var n06 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,nx3.EDisplayALN.Always);
		bars6.push(new nx3.PBar(new nx3.NBar([n06])));
		var generator6 = new nx3.PSystemBarsGenerator(null,bars6,{ showFirstClef : false, showFirstKey : true, showFirstTime : true},null,400);
		var system6 = generator6.getSystem();
		this.assertEquals(cx.ArrayTools.first(system6.getSystembars()).barConfig.showClef,true,{ fileName : "TestP.hx", lineNumber : 890, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		var bars7 = [];
		var n07 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,null,nx3.EKey.Sharp3);
		bars7.push(new nx3.PBar(new nx3.NBar([n07])));
		var generator7 = new nx3.PSystemBarsGenerator(null,bars7,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,400);
		var system7 = generator7.getSystem();
		this.assertEquals(cx.ArrayTools.first(system7.getSystembars()).barConfig.showKey,true,{ fileName : "TestP.hx", lineNumber : 899, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		var bars8 = [];
		var n08 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,null,nx3.EKey.Sharp3);
		bars8.push(new nx3.PBar(new nx3.NBar([n08])));
		var generator8 = new nx3.PSystemBarsGenerator(null,bars8,{ showFirstClef : false, showFirstKey : false, showFirstTime : true},null,400);
		var system8 = generator8.getSystem();
		this.assertEquals(cx.ArrayTools.first(system8.getSystembars()).barConfig.showKey,false,{ fileName : "TestP.hx", lineNumber : 906, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		var bars9 = [];
		var n09 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars9.push(new nx3.PBar(new nx3.NBar([n09])));
		var generator9 = new nx3.PSystemBarsGenerator(null,bars9,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,400);
		var system9 = generator9.getSystem();
		this.assertEquals(cx.ArrayTools.first(system9.getSystembars()).barConfig.showKey,true,{ fileName : "TestP.hx", lineNumber : 913, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		this.assertEquals(cx.ArrayTools.first(system9.getSystembars()).actAttributes.keys.toString(),[nx3.PSystemBarsGenerator.defaultKey].toString(),{ fileName : "TestP.hx", lineNumber : 914, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		var bars10 = [];
		var n010 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars10.push(new nx3.PBar(new nx3.NBar([n010])));
		var prevBarAttributes2 = { clefs : [nx3.EClef.ClefF], keys : [nx3.EKey.Sharp4], time : nx3.ETime.Time5_8};
		var generator10 = new nx3.PSystemBarsGenerator(null,bars10,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes2,400);
		var system10 = generator10.getSystem();
		this.assertEquals(cx.ArrayTools.first(system10.getSystembars()).barConfig.showKey,true,{ fileName : "TestP.hx", lineNumber : 922, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		this.assertEquals(cx.ArrayTools.first(system10.getSystembars()).actAttributes.keys.toString(),[nx3.EKey.Sharp4].toString(),{ fileName : "TestP.hx", lineNumber : 923, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		var bars11 = [];
		var n011 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,nx3.EDisplayALN.Layout,null,nx3.EDisplayALN.Never);
		bars11.push(new nx3.PBar(new nx3.NBar([n011])));
		var prevBarAttributes3 = { clefs : [nx3.EClef.ClefF], keys : [nx3.EKey.Sharp4], time : nx3.ETime.Time5_8};
		var generator11 = new nx3.PSystemBarsGenerator(null,bars11,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes3,400);
		var system11 = generator11.getSystem();
		this.assertEquals(cx.ArrayTools.first(system11.getSystembars()).barConfig.showKey,false,{ fileName : "TestP.hx", lineNumber : 931, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		var bars12 = [];
		var n012 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,null,nx3.EKey.Sharp3,nx3.EDisplayALN.Always);
		bars12.push(new nx3.PBar(new nx3.NBar([n012])));
		var generator12 = new nx3.PSystemBarsGenerator(null,bars12,{ showFirstClef : false, showFirstKey : false, showFirstTime : true},null,400);
		var system12 = generator12.getSystem();
		this.assertEquals(cx.ArrayTools.first(system12.getSystembars()).barConfig.showKey,true,{ fileName : "TestP.hx", lineNumber : 938, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		this.assertEquals(cx.ArrayTools.first(system12.getSystembars()).actAttributes.keys.toString(),[nx3.EKey.Sharp3].toString(),{ fileName : "TestP.hx", lineNumber : 939, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		var bars13 = [];
		var n013 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,null,null,nx3.EDisplayALN.Always);
		bars13.push(new nx3.PBar(new nx3.NBar([n013])));
		var generator13 = new nx3.PSystemBarsGenerator(null,bars13,{ showFirstClef : false, showFirstKey : true, showFirstTime : true},null,400);
		var system13 = generator13.getSystem();
		this.assertEquals(cx.ArrayTools.first(system13.getSystembars()).barConfig.showKey,true,{ fileName : "TestP.hx", lineNumber : 946, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		this.assertEquals(cx.ArrayTools.first(system13.getSystembars()).actAttributes.keys.toString(),[nx3.PSystemBarsGenerator.defaultKey].toString(),{ fileName : "TestP.hx", lineNumber : 947, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		var bars14 = [];
		var n014 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars14.push(new nx3.PBar(new nx3.NBar([n014],null,nx3.ETime.Time2_8)));
		var generator14 = new nx3.PSystemBarsGenerator(null,bars14,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,400);
		var system14 = generator14.getSystem();
		this.assertEquals(cx.ArrayTools.first(system14.getSystembars()).barConfig.showTime,true,{ fileName : "TestP.hx", lineNumber : 956, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		var bars15 = [];
		var n015 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars15.push(new nx3.PBar(new nx3.NBar([n015],null,nx3.ETime.Time2_8)));
		var generator15 = new nx3.PSystemBarsGenerator(null,bars15,{ showFirstClef : true, showFirstKey : true, showFirstTime : false},null,400);
		var system15 = generator15.getSystem();
		this.assertEquals(cx.ArrayTools.first(system15.getSystembars()).barConfig.showTime,false,{ fileName : "TestP.hx", lineNumber : 963, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		var bars16 = [];
		var n016 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars16.push(new nx3.PBar(new nx3.NBar([n016],null,nx3.ETime.Time2_8,nx3.EDisplayALN.Always)));
		var generator16 = new nx3.PSystemBarsGenerator(null,bars16,{ showFirstClef : true, showFirstKey : true, showFirstTime : false},null,400);
		var system16 = generator16.getSystem();
		this.assertEquals(cx.ArrayTools.first(system16.getSystembars()).barConfig.showTime,true,{ fileName : "TestP.hx", lineNumber : 970, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		var bars17 = [];
		var n017 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars17.push(new nx3.PBar(new nx3.NBar([n017],null,nx3.ETime.Time2_8,nx3.EDisplayALN.Never)));
		var generator17 = new nx3.PSystemBarsGenerator(null,bars17,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,400);
		var system17 = generator17.getSystem();
		this.assertEquals(cx.ArrayTools.first(system17.getSystembars()).barConfig.showTime,false,{ fileName : "TestP.hx", lineNumber : 977, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		var bars18 = [];
		var n018 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars18.push(new nx3.PBar(new nx3.NBar([n018])));
		var prevBarAttributes4 = { clefs : [nx3.EClef.ClefF], keys : [nx3.EKey.Sharp4], time : nx3.ETime.Time5_8};
		var generator18 = new nx3.PSystemBarsGenerator(null,bars18,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes4,400);
		var system18 = generator18.getSystem();
		this.assertEquals(cx.ArrayTools.first(system18.getSystembars()).barConfig.showTime,true,{ fileName : "TestP.hx", lineNumber : 985, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
		this.assertEquals(cx.ArrayTools.first(system18.getSystembars()).actAttributes.time,nx3.ETime.Time5_8,{ fileName : "TestP.hx", lineNumber : 986, className : "nx3.test.TestP", methodName : "testSystemGeneratorBarConfigResult"});
	}
	,testSystemGeneratorTwoBars: function() {
		var bars = [];
		var n0 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefG,null,nx3.EKey.Flat3);
		bars.push(new nx3.PBar(new nx3.NBar([n0],null,nx3.ETime.Time3_2)));
		var n01 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars.push(new nx3.PBar(new nx3.NBar([n01])));
		var generator = new nx3.PSystemBarsGenerator(null,bars,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,400);
		var system = generator.getSystem();
		this.assertEquals(system.getSystembars().length,2,{ fileName : "TestP.hx", lineNumber : 1029, className : "nx3.test.TestP", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(cx.ArrayTools.first(system.getSystembars()).actAttributes.clefs.toString(),[nx3.EClef.ClefG].toString(),{ fileName : "TestP.hx", lineNumber : 1030, className : "nx3.test.TestP", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(cx.ArrayTools.second(system.getSystembars()).actAttributes.clefs.toString(),[nx3.EClef.ClefG].toString(),{ fileName : "TestP.hx", lineNumber : 1031, className : "nx3.test.TestP", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(cx.ArrayTools.first(system.getSystembars()).actAttributes.keys.toString(),[nx3.EKey.Flat3].toString(),{ fileName : "TestP.hx", lineNumber : 1032, className : "nx3.test.TestP", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(cx.ArrayTools.second(system.getSystembars()).actAttributes.keys.toString(),[nx3.EKey.Flat3].toString(),{ fileName : "TestP.hx", lineNumber : 1033, className : "nx3.test.TestP", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(cx.ArrayTools.first(system.getSystembars()).actAttributes.time,nx3.ETime.Time3_2,{ fileName : "TestP.hx", lineNumber : 1034, className : "nx3.test.TestP", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(cx.ArrayTools.first(system.getSystembars()).barConfig.showClef,true,{ fileName : "TestP.hx", lineNumber : 1035, className : "nx3.test.TestP", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(cx.ArrayTools.second(system.getSystembars()).barConfig.showClef,false,{ fileName : "TestP.hx", lineNumber : 1036, className : "nx3.test.TestP", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(cx.ArrayTools.first(system.getSystembars()).barConfig.showKey,true,{ fileName : "TestP.hx", lineNumber : 1037, className : "nx3.test.TestP", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(cx.ArrayTools.second(system.getSystembars()).barConfig.showKey,false,{ fileName : "TestP.hx", lineNumber : 1038, className : "nx3.test.TestP", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(cx.ArrayTools.first(system.getSystembars()).barConfig.showTime,true,{ fileName : "TestP.hx", lineNumber : 1039, className : "nx3.test.TestP", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(cx.ArrayTools.second(system.getSystembars()).barConfig.showTime,false,{ fileName : "TestP.hx", lineNumber : 1040, className : "nx3.test.TestP", methodName : "testSystemGeneratorTwoBars"});
	}
	,testSystemGeneratorMoreBars: function() {
		var bars = [];
		var n0 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefG,null,nx3.EKey.Flat3);
		bars.push(new nx3.PBar(new nx3.NBar([n0],null,nx3.ETime.Time3_2)));
		var n01 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars.push(new nx3.PBar(new nx3.NBar([n01])));
		var n02 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,null,nx3.EKey.Sharp1);
		bars.push(new nx3.PBar(new nx3.NBar([n02])));
		var n03 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars.push(new nx3.PBar(new nx3.NBar([n03],null,nx3.ETime.Time6_8)));
		var n04 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars.push(new nx3.PBar(new nx3.NBar([n04])));
		var n05 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefF);
		bars.push(new nx3.PBar(new nx3.NBar([n05])));
		var generator = new nx3.PSystemBarsGenerator(null,bars,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,1000);
		var system = generator.getSystem();
		this.assertEquals(system.getSystembars().length,6,{ fileName : "TestP.hx", lineNumber : 1061, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(cx.ArrayTools.first(system.getSystembars()).actAttributes.clefs.toString(),[nx3.EClef.ClefG].toString(),{ fileName : "TestP.hx", lineNumber : 1062, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(cx.ArrayTools.second(system.getSystembars()).actAttributes.clefs.toString(),[nx3.EClef.ClefG].toString(),{ fileName : "TestP.hx", lineNumber : 1063, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(cx.ArrayTools.third(system.getSystembars()).actAttributes.clefs.toString(),[nx3.EClef.ClefG].toString(),{ fileName : "TestP.hx", lineNumber : 1064, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(cx.ArrayTools.fourth(system.getSystembars()).actAttributes.clefs.toString(),[nx3.EClef.ClefG].toString(),{ fileName : "TestP.hx", lineNumber : 1065, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(cx.ArrayTools.fifth(system.getSystembars()).actAttributes.clefs.toString(),[nx3.EClef.ClefG].toString(),{ fileName : "TestP.hx", lineNumber : 1066, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(cx.ArrayTools.sixth(system.getSystembars()).actAttributes.clefs.toString(),[nx3.EClef.ClefF].toString(),{ fileName : "TestP.hx", lineNumber : 1067, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(cx.ArrayTools.first(system.getSystembars()).actAttributes.keys.toString(),[nx3.EKey.Flat3].toString(),{ fileName : "TestP.hx", lineNumber : 1068, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(cx.ArrayTools.second(system.getSystembars()).actAttributes.keys.toString(),[nx3.EKey.Flat3].toString(),{ fileName : "TestP.hx", lineNumber : 1069, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(cx.ArrayTools.third(system.getSystembars()).actAttributes.keys.toString(),[nx3.EKey.Sharp1].toString(),{ fileName : "TestP.hx", lineNumber : 1070, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(cx.ArrayTools.fourth(system.getSystembars()).actAttributes.keys.toString(),[nx3.EKey.Sharp1].toString(),{ fileName : "TestP.hx", lineNumber : 1071, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(cx.ArrayTools.fifth(system.getSystembars()).actAttributes.keys.toString(),[nx3.EKey.Sharp1].toString(),{ fileName : "TestP.hx", lineNumber : 1072, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(cx.ArrayTools.sixth(system.getSystembars()).actAttributes.keys.toString(),[nx3.EKey.Sharp1].toString(),{ fileName : "TestP.hx", lineNumber : 1073, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(cx.ArrayTools.first(system.getSystembars()).actAttributes.time,nx3.ETime.Time3_2,{ fileName : "TestP.hx", lineNumber : 1074, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(cx.ArrayTools.second(system.getSystembars()).actAttributes.time,nx3.ETime.Time3_2,{ fileName : "TestP.hx", lineNumber : 1075, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(cx.ArrayTools.third(system.getSystembars()).actAttributes.time,nx3.ETime.Time3_2,{ fileName : "TestP.hx", lineNumber : 1076, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(cx.ArrayTools.fourth(system.getSystembars()).actAttributes.time,nx3.ETime.Time6_8,{ fileName : "TestP.hx", lineNumber : 1077, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(cx.ArrayTools.fifth(system.getSystembars()).actAttributes.time,nx3.ETime.Time6_8,{ fileName : "TestP.hx", lineNumber : 1078, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(cx.ArrayTools.sixth(system.getSystembars()).actAttributes.time,nx3.ETime.Time6_8,{ fileName : "TestP.hx", lineNumber : 1079, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(nx3.test.TestP.barConfToArr(cx.ArrayTools.first(system.getSystembars()).barConfig).toString(),[true,true,true].toString(),{ fileName : "TestP.hx", lineNumber : 1080, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(nx3.test.TestP.barConfToArr(cx.ArrayTools.second(system.getSystembars()).barConfig).toString(),[false,false,false].toString(),{ fileName : "TestP.hx", lineNumber : 1081, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(nx3.test.TestP.barConfToArr(cx.ArrayTools.third(system.getSystembars()).barConfig).toString(),[false,true,false].toString(),{ fileName : "TestP.hx", lineNumber : 1082, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(nx3.test.TestP.barConfToArr(cx.ArrayTools.fourth(system.getSystembars()).barConfig).toString(),[false,false,true].toString(),{ fileName : "TestP.hx", lineNumber : 1083, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(nx3.test.TestP.barConfToArr(cx.ArrayTools.fifth(system.getSystembars()).barConfig).toString(),[false,false,false].toString(),{ fileName : "TestP.hx", lineNumber : 1084, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(nx3.test.TestP.barConfToArr(cx.ArrayTools.sixth(system.getSystembars()).barConfig).toString(),[true,false,false].toString(),{ fileName : "TestP.hx", lineNumber : 1085, className : "nx3.test.TestP", methodName : "testSystemGeneratorMoreBars"});
	}
	,testBarTieConnections: function() {
		var nbar0 = new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0)]),new nx3.NNote(null,[new nx3.NHead(null,1,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0))])]),new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,3,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0))])])]),new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0)]),new nx3.NNote(null,[new nx3.NHead(null,5,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,0))])])])]);
		var nbar1 = new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,3)]),new nx3.NNote(null,[new nx3.NHead(null,0)])])]),new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,3)]),new nx3.NNote(null,[new nx3.NHead(null,0)])]),new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,5)]),new nx3.NNote(null,[new nx3.NHead(null,0)])])])]);
		var score = new nx3.PScore(new nx3.NScore([nbar0,nbar1]));
		var connections = cx.ArrayTools.first(score.getBars()).getTieConnections();
		this.assertEquals(connections.length,2,{ fileName : "TestP.hx", lineNumber : 1398, className : "nx3.test.TestP", methodName : "testBarTieConnections"});
	}
	,testSystemPartRects: function() {
		var bars = [new nx3.PBar(nx3.test.TestItems.getSystemYItems().nbars[0]),new nx3.PBar(nx3.test.TestItems.getSystemYItems().nbars[1])];
		var generator = new nx3.PSystemBarsGenerator(null,bars,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,400);
		var system = generator.getSystem();
		this.assertEquals(system.getSystembars().length,2,{ fileName : "TestP.hx", lineNumber : 1447, className : "nx3.test.TestP", methodName : "testSystemPartRects"});
		this.assertEquals(system.getSpaceAbovePart(0),4,{ fileName : "TestP.hx", lineNumber : 1449, className : "nx3.test.TestP", methodName : "testSystemPartRects"});
		this.assertEquals(system.getSpaceAbovePart(1),11,{ fileName : "TestP.hx", lineNumber : 1450, className : "nx3.test.TestP", methodName : "testSystemPartRects"});
		this.assertEquals(system.getPartY(0),4,{ fileName : "TestP.hx", lineNumber : 1452, className : "nx3.test.TestP", methodName : "testSystemPartRects"});
		this.assertEquals(system.getPartY(1),15,{ fileName : "TestP.hx", lineNumber : 1453, className : "nx3.test.TestP", methodName : "testSystemPartRects"});
		this.assertEquals(system.getHeight(),21,{ fileName : "TestP.hx", lineNumber : 1455, className : "nx3.test.TestP", methodName : "testSystemPartRects"});
	}
	,__class__: nx3.test.TestP
});
nx3.test.TestRenderer = function() { };
nx3.test.TestRenderer.__name__ = ["nx3","test","TestRenderer"];
nx3.test.TestRenderer.testRenderer = function(r) {
	var target = r.getTarget();
};
nx3.test.TestRenderer.testRenderP = function(r) {
	r.addInteraction(new nx3.action.TestInteractivity());
	r.renderScore(new nx3.PScore(nx3.test.TestItems.scoreBachSinfonia4()),0,0,300);
	r.testText();
};
nx3.test.Unittests = function() { };
nx3.test.Unittests.__name__ = ["nx3","test","Unittests"];
nx3.test.Unittests.performTests = function() {
	var runner = new haxe.unit.TestRunner();
	runner.add(new nx3.test.TestP());
	var success = runner.run();
};
nx3.xml = {};
nx3.xml.BarXML = function() { };
nx3.xml.BarXML.__name__ = ["nx3","xml","BarXML"];
nx3.xml.BarXML.toXml = function(bar) {
	var xml = Xml.createElement("bar");
	var _g = 0;
	var _g1 = bar.nparts;
	while(_g < _g1.length) {
		var part = _g1[_g];
		++_g;
		var partXml = nx3.xml.PartXML.toXml(part);
		xml.addChild(partXml);
	}
	var _g2 = bar.type;
	switch(_g2[1]) {
	case 0:
		break;
	default:
		xml.set("type",Std.string(bar.type));
	}
	if(bar.time != null) {
		var _g3 = bar.time;
		switch(_g3[1]) {
		case 5:
			break;
		default:
			xml.set("time",Std.string(nx3.ETimeUtils.toString(bar.time)));
		}
	}
	var _g4 = bar.timeDisplay;
	switch(_g4[1]) {
	case 1:
		break;
	default:
		xml.set("timedisplay",Std.string(bar.timeDisplay));
	}
	return xml;
};
nx3.xml.BarXML.fromXmlStr = function(xmlStr) {
	var xml = Xml.parse(xmlStr).firstElement();
	var parts = [];
	var $it0 = xml.elements();
	while( $it0.hasNext() ) {
		var p = $it0.next();
		var part = nx3.xml.PartXML.fromXmlStr(p.toString());
		parts.push(part);
	}
	var typeStr = xml.get("type");
	var type;
	if(typeStr == null) type = nx3.EBarType.Normal; else type = cx.EnumTools.createFromString(nx3.EBarType,typeStr);
	var time = null;
	var timeStr = xml.get("time");
	if(timeStr != null) time = nx3.ETimeUtils.fromString(timeStr);
	var timeDisplayStr = xml.get("timedisplay");
	var timeDisplay;
	if(timeDisplayStr == null) timeDisplay = nx3.EDisplayALN.Layout; else timeDisplay = cx.EnumTools.createFromString(nx3.EDisplayALN,timeDisplayStr);
	return new nx3.NBar(parts,type,time,timeDisplay);
};
nx3.xml.BarXML.test = function(item) {
	var str = nx3.xml.BarXML.toXml(item).toString();
	var item2 = nx3.xml.BarXML.fromXmlStr(str);
	var str2 = nx3.xml.BarXML.toXml(item2).toString();
	haxe.Log.trace(str,{ fileName : "BarXML.hx", lineNumber : 100, className : "nx3.xml.BarXML", methodName : "test"});
	haxe.Log.trace(str2,{ fileName : "BarXML.hx", lineNumber : 101, className : "nx3.xml.BarXML", methodName : "test"});
	return str == str2;
	return false;
};
nx3.xml.BarsXML = function() { };
nx3.xml.BarsXML.__name__ = ["nx3","xml","BarsXML"];
nx3.xml.BarsXML.toXml = function(bars) {
	var xml = Xml.createElement("bars");
	var _g = 0;
	while(_g < bars.length) {
		var bar = bars[_g];
		++_g;
		var barXml = nx3.xml.BarXML.toXml(bar);
		xml.addChild(barXml);
	}
	return xml;
};
nx3.xml.BarsXML.fromXmlStr = function(xmlStr) {
	var xml = Xml.parse(xmlStr).firstElement();
	var bars = [];
	var $it0 = xml.elements();
	while( $it0.hasNext() ) {
		var b = $it0.next();
		var bar = nx3.xml.BarXML.fromXmlStr(b.toString());
		bars.push(bar);
	}
	return bars;
};
nx3.xml.HeadXML = function() { };
nx3.xml.HeadXML.__name__ = ["nx3","xml","HeadXML"];
nx3.xml.HeadXML.toXml = function(head) {
	var xml = Xml.createElement(nx3.xml.HeadXML.XHEAD);
	var _g = head.type;
	switch(_g[1]) {
	case 2:case 1:
		xml.set(nx3.xml.HeadXML.XHEAD_TYPE,Std.string(head.type));
		break;
	default:
	}
	xml.set(nx3.xml.HeadXML.XHEAD_LEVEL,head.level == null?"null":"" + head.level);
	if(head.sign != nx3.ESign.None) xml.set(nx3.xml.HeadXML.XHEAD_SIGN,Std.string(head.sign));
	if(head.tie != null) {
		var _g1 = head.tie;
		switch(_g1[1]) {
		case 0:
			var level = _g1[3];
			var direction = _g1[2];
			xml.set(nx3.xml.HeadXML.XHEAD_TIE,"true");
			if(level != 0) xml.set(nx3.xml.HeadXML.XHEAD_TIE_LEVEL,level == null?"null":"" + level);
			if(direction != nx3.EDirectionUAD.Auto) xml.set(nx3.xml.HeadXML.XHEAD_TIE_DIRECTION,Std.string(direction[0]));
			break;
		case 1:
			var levelRight = _g1[4];
			var levelLeft = _g1[3];
			var direction1 = _g1[2];
			xml.set(nx3.xml.HeadXML.XHEAD_TIE,levelLeft == null?"null":"" + levelLeft);
			break;
		}
	}
	if(head.tieTo != null) {
		var _g2 = head.tieTo;
		switch(_g2[1]) {
		case 0:
			var level1 = _g2[3];
			var direction2 = _g2[2];
			xml.set(nx3.xml.HeadXML.XHEAD_TIETO,Std.string(head.tieTo));
			break;
		case 1:
			var levelRight1 = _g2[4];
			var levelLeft1 = _g2[3];
			var direction3 = _g2[2];
			xml.set(nx3.xml.HeadXML.XHEAD_TIETO,Std.string(head.tieTo));
			break;
		}
	}
	return xml;
};
nx3.xml.HeadXML.fromXmlStr = function(xmlStr) {
	var xml = Xml.parse(xmlStr).firstElement();
	var typeStr = xml.get(nx3.xml.HeadXML.XHEAD_TYPE);
	var type = cx.EnumTools.createFromString(nx3.EHeadType,typeStr);
	var level = Std.parseInt(xml.get(nx3.xml.HeadXML.XHEAD_LEVEL));
	var sign = cx.EnumTools.createFromString(nx3.ESign,xml.get(nx3.xml.HeadXML.XHEAD_SIGN));
	var tie = null;
	if(xml.get(nx3.xml.HeadXML.XHEAD_TIE) != null) {
		var tiedirection;
		if(xml.get(nx3.xml.HeadXML.XHEAD_TIE_DIRECTION) == null) tiedirection = nx3.EDirectionUAD.Auto; else tiedirection = nx3.EDirectionUAD.Up;
		var tielevel;
		if(xml.get(nx3.xml.HeadXML.XHEAD_TIE_LEVEL) == null) tielevel = 0; else tielevel = Std.parseInt(xml.get(nx3.xml.HeadXML.XHEAD_TIE_LEVEL));
		tie = nx3.ETie.Tie(tiedirection,tielevel);
	}
	var tieTo = cx.EnumTools.createFromString(nx3.ETie,xml.get(nx3.xml.HeadXML.XHEAD_TIETO));
	return new nx3.NHead(type,level,sign,tie,tieTo);
};
nx3.xml.HeadXML.test = function(item) {
	var str = nx3.xml.HeadXML.toXml(item).toString();
	var item2 = nx3.xml.HeadXML.fromXmlStr(str);
	var str2 = nx3.xml.HeadXML.toXml(item2).toString();
	haxe.Log.trace(str,{ fileName : "HeadXML.hx", lineNumber : 152, className : "nx3.xml.HeadXML", methodName : "test"});
	haxe.Log.trace(str2,{ fileName : "HeadXML.hx", lineNumber : 153, className : "nx3.xml.HeadXML", methodName : "test"});
	return str == str2;
};
nx3.xml.NoteXML = function() { };
nx3.xml.NoteXML.__name__ = ["nx3","xml","NoteXML"];
nx3.xml.NoteXML.toXml = function(note) {
	var xml = null;
	{
		var _g = note.type;
		switch(_g[1]) {
		case 0:
			var attributes = _g[5];
			var articulations = _g[4];
			var variant = _g[3];
			var heads = _g[2];
			xml = Xml.createElement("note");
			var _g1 = 0;
			while(_g1 < heads.length) {
				var head = heads[_g1];
				++_g1;
				var headXml = nx3.xml.HeadXML.toXml(head);
				xml.addChild(headXml);
			}
			if(variant != null) xml.set("variant",Std.string(variant));
			if(articulations != null) {
				var articulationStrings = [];
				var _g11 = 0;
				while(_g11 < articulations.length) {
					var articulation = articulations[_g11];
					++_g11;
					articulationStrings.push(Std.string(articulation));
				}
				xml.set("articulations",articulationStrings.join(";"));
			}
			if(attributes != null) {
				var attributesStrings = [];
				var _g12 = 0;
				while(_g12 < attributes.length) {
					var attribute = attributes[_g12];
					++_g12;
					attributesStrings.push(Std.string(attribute));
				}
				xml.set("attributes",attributesStrings.join(";"));
			}
			break;
		case 1:
			var level = _g[2];
			xml = Xml.createElement("pause");
			if(level != 0) xml.set("level",level == null?"null":"" + level);
			break;
		case 4:
			var format = _g[5];
			var continuation = _g[4];
			var offset = _g[3];
			var text = _g[2];
			xml = Xml.createElement("lyric");
			xml.set("text",text);
			if(continuation != null) xml.set("continuation",Std.string(continuation));
			if(offset != null) xml.set("offset",Std.string(offset));
			if(format != null) xml.set("format",Std.string(format));
			break;
		default:
			xml = Xml.createElement("undefined");
		}
	}
	if(nx3.ENoteValTools.value(note.value) != nx3.ENoteValTools.value(nx3.ENoteVal.Nv4)) xml.set("val",Std.string(nx3.ENoteValTools.toValString(note.value)));
	if(note.direction != nx3.EDirectionUAD.Auto) xml.set("direction",Std.string(note.direction));
	return xml;
};
nx3.xml.NoteXML.fromXmlStr = function(xmlStr) {
	var xml = Xml.parse(xmlStr).firstElement();
	var xmlType = xml.get_nodeName();
	var type = null;
	switch(xmlType) {
	case "note":
		var heads = [];
		var $it0 = xml.elementsNamed(nx3.xml.HeadXML.XHEAD);
		while( $it0.hasNext() ) {
			var h = $it0.next();
			var head = nx3.xml.HeadXML.fromXmlStr(h.toString());
			heads.push(head);
		}
		var variant = cx.EnumTools.createFromString(nx3.ENotationVariant,xml.get("variant"));
		var articulations = [];
		var articulationsStr = xml.get("articulations");
		if(articulationsStr != null) {
			var articulationStrings = articulationsStr.split(";");
			var _g = 0;
			while(_g < articulationStrings.length) {
				var articulationStr = articulationStrings[_g];
				++_g;
				articulations.push(cx.EnumTools.createFromString(nx3.ENoteArticulation,articulationStr));
			}
		}
		if(articulations.length == 0) articulations = null;
		var attributes = [];
		var attributesStr = xml.get("attributes");
		if(attributesStr != null) {
			var attributesStrings = attributesStr.split(";");
			var _g1 = 0;
			while(_g1 < attributesStrings.length) {
				var attributeStr = attributesStrings[_g1];
				++_g1;
				attributes.push(cx.EnumTools.createFromString(nx3.ENoteAttributes,attributeStr));
			}
		}
		if(attributes.length == 0) attributes = null;
		type = nx3.ENoteType.Note(heads,variant,articulations,attributes);
		break;
	case "pause":
		var pauseLevelStr = xml.get("level");
		var levelInt;
		if(pauseLevelStr == null) levelInt = 0; else levelInt = Std.parseInt(pauseLevelStr);
		type = nx3.ENoteType.Pause(levelInt);
		break;
	case "lyric":
		var text = xml.get("text");
		var offsetStr = xml.get("offset");
		var offset = cx.EnumTools.createFromString(nx3.EPosition,offsetStr);
		var continuationStr = xml.get("continuation");
		var continuation = cx.EnumTools.createFromString(nx3.ELyricContinuation,continuationStr);
		type = nx3.ENoteType.Lyric(text,offset,continuation);
		break;
	}
	var valStr = xml.get("val");
	var value = nx3.ENoteValTools.fromValString(valStr);
	var direction = cx.EnumTools.createFromString(nx3.EDirectionUAD,xml.get("direction"));
	return new nx3.NNote(type,null,value,direction);
};
nx3.xml.NoteXML.test = function(item) {
	var str = nx3.xml.NoteXML.toXml(item).toString();
	var item2 = nx3.xml.NoteXML.fromXmlStr(str);
	var str2 = nx3.xml.NoteXML.toXml(item2).toString();
	haxe.Log.trace(str,{ fileName : "NoteXML.hx", lineNumber : 204, className : "nx3.xml.NoteXML", methodName : "test"});
	haxe.Log.trace(str2,{ fileName : "NoteXML.hx", lineNumber : 205, className : "nx3.xml.NoteXML", methodName : "test"});
	return str == str2;
};
nx3.xml.NoteXML.clone = function(nnote) {
	return nx3.xml.NoteXML.fromXmlStr(nx3.xml.NoteXML.toXml(nnote).toString());
};
nx3.xml.PartXML = function() { };
nx3.xml.PartXML.__name__ = ["nx3","xml","PartXML"];
nx3.xml.PartXML.toXml = function(part) {
	var xml = Xml.createElement("part");
	var _g = 0;
	var _g1 = part.nvoices;
	while(_g < _g1.length) {
		var voice = _g1[_g];
		++_g;
		var voiceXml = nx3.xml.VoiceXML.toXml(voice);
		xml.addChild(voiceXml);
	}
	var _g2 = part.type;
	switch(_g2[1]) {
	case 0:
		break;
	default:
		xml.set("type",Std.string(part.type));
	}
	if(part.clef != null) {
		var _g3 = part.clef;
		switch(_g3[1]) {
		case 0:
			break;
		default:
			xml.set("clef",Std.string(part.clef));
		}
	}
	if(part.key != null) {
		var _g4 = part.key;
		switch(_g4[1]) {
		case 6:
			break;
		default:
			xml.set("key",Std.string(part.key));
		}
	}
	var _g5 = part.clefDisplay;
	switch(_g5[1]) {
	case 1:
		break;
	default:
		xml.set("clefdisplay",Std.string(part.clefDisplay));
	}
	var _g6 = part.keyDisplay;
	switch(_g6[1]) {
	case 1:
		break;
	default:
		xml.set("keydisplay",Std.string(part.keyDisplay));
	}
	return xml;
};
nx3.xml.PartXML.fromXmlStr = function(xmlStr) {
	var xml = Xml.parse(xmlStr).firstElement();
	var voices = [];
	var $it0 = xml.elements();
	while( $it0.hasNext() ) {
		var v = $it0.next();
		var voice = nx3.xml.VoiceXML.fromXmlStr(v.toString());
		voices.push(voice);
	}
	var typeStr = xml.get("type");
	var type = cx.EnumTools.createFromString(nx3.EPartType,typeStr);
	var str = xml.get("clef");
	var clef = null;
	if(str != null) clef = cx.EnumTools.createFromString(nx3.EClef,str);
	var clefDisplayStr = xml.get("clefdisplay");
	var clefDisplay;
	if(clefDisplayStr == null) clefDisplay = nx3.EDisplayALN.Layout; else clefDisplay = cx.EnumTools.createFromString(nx3.EDisplayALN,clefDisplayStr);
	var str1 = xml.get("key");
	var key = null;
	if(str1 != null) key = cx.EnumTools.createFromString(nx3.EKey,str1);
	var keyDisplayStr = xml.get("keydisplay");
	var keyDisplay;
	if(keyDisplayStr == null) keyDisplay = nx3.EDisplayALN.Layout; else keyDisplay = cx.EnumTools.createFromString(nx3.EDisplayALN,keyDisplayStr);
	return new nx3.NPart(voices,type,clef,clefDisplay,key,keyDisplay);
};
nx3.xml.VoiceXML = function() { };
nx3.xml.VoiceXML.__name__ = ["nx3","xml","VoiceXML"];
nx3.xml.VoiceXML.toXml = function(voice) {
	var xml = Xml.createElement("voice");
	var _g = voice.type;
	switch(_g[1]) {
	case 1:
		xml.set("type",Std.string(voice.type));
		break;
	default:
	}
	if(voice.direction != nx3.EDirectionUAD.Auto) xml.set("direction",Std.string(voice.direction));
	if(voice.nnotes != null) {
		var _g1 = 0;
		var _g11 = voice.nnotes;
		while(_g1 < _g11.length) {
			var note = _g11[_g1];
			++_g1;
			var noteXml = nx3.xml.NoteXML.toXml(note);
			xml.addChild(noteXml);
		}
	}
	return xml;
};
nx3.xml.VoiceXML.fromXmlStr = function(xmlStr) {
	var xml = Xml.parse(xmlStr).firstElement();
	var typeStr = xml.get("type");
	var type = cx.EnumTools.createFromString(nx3.EVoiceType,typeStr);
	var directionStr = xml.get("direction");
	var direction = null;
	if(directionStr == null) direction = nx3.EDirectionUAD.Auto; else direction = cx.EnumTools.createFromString(nx3.EDirectionUAD,directionStr);
	var notes = [];
	var $it0 = xml.elements();
	while( $it0.hasNext() ) {
		var n = $it0.next();
		var note = nx3.xml.NoteXML.fromXmlStr(n.toString());
		notes.push(note);
	}
	return new nx3.NVoice(notes,type,direction);
};
nx3.xml.VoiceXML.test = function(item) {
	var str = nx3.xml.VoiceXML.toXml(item).toString();
	var item2 = nx3.xml.VoiceXML.fromXmlStr(str);
	var str2 = nx3.xml.VoiceXML.toXml(item2).toString();
	haxe.Log.trace(str,{ fileName : "VoiceXML.hx", lineNumber : 76, className : "nx3.xml.VoiceXML", methodName : "test"});
	haxe.Log.trace(str2,{ fileName : "VoiceXML.hx", lineNumber : 77, className : "nx3.xml.VoiceXML", methodName : "test"});
	return str == str2;
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = String;
String.__name__ = ["String"];
Array.__name__ = ["Array"];
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
if(Array.prototype.map == null) Array.prototype.map = function(f) {
	var a = [];
	var _g1 = 0;
	var _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		a[i] = f(this[i]);
	}
	return a;
};
if(Array.prototype.filter == null) Array.prototype.filter = function(f1) {
	var a1 = [];
	var _g11 = 0;
	var _g2 = this.length;
	while(_g11 < _g2) {
		var i1 = _g11++;
		var e = this[i1];
		if(f1(e)) a1.push(e);
	}
	return a1;
};
Xml.Element = "element";
Xml.PCData = "pcdata";
Xml.CData = "cdata";
Xml.Comment = "comment";
Xml.DocType = "doctype";
Xml.ProcessingInstruction = "processingInstruction";
Xml.Document = "document";
var q = window.jQuery;
js.JQuery = q;
haxe.ds.ObjectMap.count = 0;
haxe.xml.Parser.escapes = (function($this) {
	var $r;
	var h = new haxe.ds.StringMap();
	h.set("lt","<");
	h.set("gt",">");
	h.set("amp","&");
	h.set("quot","\"");
	h.set("apos","'");
	h.set("nbsp",String.fromCharCode(160));
	$r = h;
	return $r;
}(this));
nx3.Constants.BASE_NOTE_VALUE = 3024;
nx3.Constants.STAVE_LENGTH = 6.8;
nx3.Constants.STAVE_BASIC_LENGTH = 7;
nx3.Constants.SIGN_TO_NOTE_DISTANCE = 0.8;
nx3.Constants.COMPLEX_COLLISION_OVERLAP_XTRA = 0.6;
nx3.Constants.SIGN_NORMAL_WIDTH = 2.6;
nx3.Constants.SIGN_PARENTHESIS_WIDTH = 4.4;
nx3.Constants.HEAD_ADJUST_X = 0;
nx3.Constants.COMPLEX_COLLISION_ADJUST_SAMELINE = 3.0;
nx3.Constants.COMPLEX_COLLISION_ADJUST_NEXTLINE = 2.2;
nx3.Constants.COMPLEX_COLLISION_ADJUST_SAMELINE_WHOLE = 4.3;
nx3.Constants.COMPLEX_COLLISION_ADJUST_NEXTLINE_WHOLE = 4;
nx3.Constants.NOTE_STEM_X_NORMAL = 1.6;
nx3.Constants.HEAD_WIDTH_NORMAL = 3.2;
nx3.Constants.HEAD_HALFWIDTH_NORMAL = 1.6;
nx3.Constants.HEAD_HALFWIDTH_WIDE = 2.2;
nx3.Constants.COMPLEX_COLLISION_CHORD_INTERSECTION = 0.8;
nx3.Constants.COMPLEX_COLLISION_NEXTLINEDELTA = 0.7;
nx3.Constants.COMPLEX_COLLISION_NEXTLINEDELTA_H1 = 0.9;
nx3.Constants.DOT_WIDTH = 2.0;
nx3.Constants.DDOT_WIDTH = 3.0;
nx3.Constants.FLAG_HEIGHT = 4.8;
nx3.Constants.FLAG_WIDTH = 2.6;
nx3.Constants.FLOAT_QUASI_ZERO = 0.0000001;
nx3.Constants.FONT_TEXT_DEFAULTFORMAT = { name : "Georgia", size : 20, bold : false, italic : false};
nx3.Constants.JS_CANVAS_TEXT_MEASUREMENT = "CanvasTextMeasurement";
nx3.Constants.FONT_TEXT_X_ADJUST_SVG = -0.2;
nx3.Constants.FONT_TEXT_Y_ADJUST_SVG = 9.6;
nx3.Constants.FONT_TEXT_Y_ADJUST_FLASH = -1.2;
nx3.Constants.FONT_TEXT_X_ADJUST_FLASH = -.3;
nx3.Constants.BEAM_HEIGHT = 0.95;
nx3.Constants.TIE_WIDTH_CHORD = 3.2;
nx3.Constants.TIE_WIDTH_SINGLE = 3;
nx3.Constants.TIE_HEIGHT = 1.6;
nx3.Constants.LEGER_MARGIN = 0.6;
nx3.Constants.OBJECT_XMARGIN = 0.6;
nx3.Constants.ATTRIBUTE_SIGN_WIDTH = 2.4;
nx3.Constants.SCORE_DEFAULT_COUNTIN = 0;
nx3.Constants.SCORE_DEFAULT_TEMPO = 80;
nx3.ENoteValTools.DOT = 1.5;
nx3.ENoteValTools.DOTDOT = 1.75;
nx3.ENoteValTools.TRI = 0.66666666;
nx3.ENoteValTools.N1 = 4;
nx3.ENoteValTools.N2 = 2;
nx3.ENoteValTools.N4 = 1;
nx3.ENoteValTools.N8 = .5;
nx3.ENoteValTools.N16 = .25;
nx3.ENoteValTools.N32 = .125;
nx3.ENoteValTools.valNv1 = 12096;
nx3.ENoteValTools.valNv1dot = 18144;
nx3.ENoteValTools.valNv1ddot = 21168;
nx3.ENoteValTools.valNv1tri = 8063;
nx3.ENoteValTools.valNv2 = 6048;
nx3.ENoteValTools.valNv2dot = 9072;
nx3.ENoteValTools.valNv2ddot = 10584;
nx3.ENoteValTools.valNv2tri = 4031;
nx3.ENoteValTools.valNv4 = 3024;
nx3.ENoteValTools.valNv4dot = 4536;
nx3.ENoteValTools.valNv4ddot = 5292;
nx3.ENoteValTools.valNv4tri = 2015;
nx3.ENoteValTools.valNv8 = 1512;
nx3.ENoteValTools.valNv8dot = 2268;
nx3.ENoteValTools.valNv8ddot = 2646;
nx3.ENoteValTools.valNv8tri = 1007;
nx3.ENoteValTools.valNv16 = 756;
nx3.ENoteValTools.valNv16dot = 1134;
nx3.ENoteValTools.valNv16ddot = 1323;
nx3.ENoteValTools.valNv16tri = 503;
nx3.ENoteValTools.valNv32 = 378;
nx3.ENoteValTools.valNv32dot = 567;
nx3.ENoteValTools.valNv32ddot = 661;
nx3.ENoteValTools.valNv32tri = 251;
nx3.PBaseRectCalculator.BASERECT_HEIGHT = 3;
nx3.PBaseRectCalculator.BASERECT_HEIGHT_X_2 = 3 * 2;
nx3.PBaseRectCalculator.BASERECT_MARGIN = 0.6;
nx3.PBaseRectCalculator.BASERECT_MARGIN_X_2 = 1.2;
nx3.PColumnsAllotmentCalculator.delta = 0.5;
nx3.PSystemBarsGenerator.defaultClef = nx3.EClef.ClefF;
nx3.PSystemBarsGenerator.defaultKey = nx3.EKey.Flat2;
nx3.PSystemBarsGenerator.defaultTime = nx3.ETime.Time6_4;
nx3.render.scaling.Scaling.MID = { linesWidth : 0.8, space : 12.0, unitY : 6.0, noteWidth : 10, unitX : 5, quarterNoteWidth : 2.5, signPosWidth : 14.0, svgScale : .27, svgX : 0, svgY : -55.0, fontScaling : 1.5};
nx3.render.scaling.Scaling.NORMAL = { linesWidth : .5, space : 8.0, unitY : 4.0, noteWidth : 7.0, unitX : 3.5, quarterNoteWidth : 1.75, signPosWidth : 9.5, svgScale : .175, svgX : 0, svgY : -36.0, fontScaling : 1.0};
nx3.render.scaling.Scaling.SMALL = { linesWidth : .5, space : 6.0, unitY : 3.0, noteWidth : 5.0, unitX : 2.5, quarterNoteWidth : 1.25, signPosWidth : 7.0, svgScale : .14, svgX : 0, svgY : -28.5, fontScaling : 0.75};
nx3.render.scaling.Scaling.MINI = { linesWidth : .5, space : 4.0, unitY : 2.0, noteWidth : 3.3333333333333335, unitX : 1.6666666666666667, quarterNoteWidth : 0.83333333333333337, signPosWidth : 4.666666666666667, svgScale : 0.093333333333333338, svgX : 0, svgY : -19., fontScaling : 0.5};
nx3.render.scaling.Scaling.BIG = { linesWidth : 1.5, space : 16.0, unitY : 8.0, noteWidth : 14.0, unitX : 7.0, quarterNoteWidth : 5.5, signPosWidth : 19.0, svgScale : .36, svgX : -0.0, svgY : -74.0, fontScaling : 2.0};
nx3.render.scaling.Scaling.PRINT1 = { linesWidth : 3, space : 32.0, unitY : 16.0, noteWidth : 28.0, unitX : 14.0, quarterNoteWidth : 11.0, signPosWidth : 38.0, svgScale : .72, svgX : -0.0, svgY : -148.0, fontScaling : 4.0};
nx3.render.svg.SvgElements.pauseNv2 = "<svg><g><rect height=\"23\" width=\"50\" x=\"8\" y=\"210\" /></g></svg>";
nx3.render.svg.SvgElements.pauseNv1 = "<svg><g><rect height=\"26\" width=\"50\" x=\"8\" y=\"234\" /></g></svg>";
nx3.render.svg.SvgElements.clefG = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\"\r\n\t\t\td=\"m 95.72971,266.7949 c -5.57504,2.79274 -12.48498,4.1891 -20.72511,4.1891 -9.69981,0 -18.99938,-1.66998 -27.91049,-5.00757 -8.90876,-3.33996 -16.75807,-7.86163 -23.54558,-13.56975 -6.78751,-5.70339 -12.24248,-12.38094 -16.36254,-20.03029 -4.12007,-7.64934 -6.1801,-15.78458 -6.1801,-24.40572 0,-29.26234 20.72746,-61.31506 62.18472,-96.1605 -1.3349,-5.34251 -2.33313,-10.74399 -2.99941,-16.209153 -0.66627,-5.460449 -1.00058,-11.107236 -1.00058,-16.938007 0,-8.010226 0.66392,-15.871864 1.99646,-23.582532 1.3302,-7.710668 3.23955,-14.935434 5.72336,-21.674325 2.48617,-6.738864 5.54208,-12.869193 9.17715,-18.393316 3.63272,-5.5265031 7.814,-10.1708424 12.53677,-13.9306366 16.47555,22.8253826 24.71097,44.6247216 24.71097,65.3862176 0,13.480109 -3.18069,26.321 -9.54442,38.522682 -6.36138,12.20404 -16.32959,24.07079 -29.90225,35.60967 l 7.99763,38.42834 c 4.36256,-0.35616 6.78751,-0.53307 7.2725,-0.53307 6.05767,0 11.72453,1.09209 16.99586,3.27863 5.27368,2.18418 9.88109,5.18919 13.82693,9.01269 3.94349,3.82349 7.07003,8.34517 9.37727,13.56502 2.30488,5.21986 3.4585,10.86193 3.46085,16.93329 -0.002,4.36836 -0.78869,8.68011 -2.36374,12.92581 -1.57504,4.25042 -3.814,8.28856 -6.72159,12.10969 -2.90994,3.82586 -6.36373,7.34272 -10.36137,10.55766 -3.99764,3.21965 -8.42141,5.98172 -13.26896,8.28856 0,-0.24294 0.18129,0.45523 0.54385,2.09218 0.36492,1.63932 0.8193,3.79048 1.36315,6.46291 0.5462,2.67008 1.18187,5.64443 1.90935,8.92306 0.72749,3.27626 1.36316,6.43224 1.90936,9.46556 0.5462,3.03568 1.02884,5.73878 1.45497,8.10222 0.42378,2.37052 0.63567,3.97681 0.63567,4.82595 0,5.70576 -1.21248,10.92561 -3.63508,15.65957 -2.42495,4.73396 -5.69746,8.80041 -9.81988,12.19933 -4.12006,3.39656 -8.90875,6.03833 -14.36136,7.9206 -5.45497,1.88226 -11.21364,2.82339 -17.27602,2.82339 -4.60506,0 -8.90641,-0.72885 -12.90875,-2.18654 -4,-1.45769 -7.515,-3.52157 -10.54502,-6.18929 -3.02765,-2.67244 -5.422,-5.91568 -7.18068,-9.73918 -1.75632,-3.82113 -2.63449,-8.03853 -2.63449,-12.64984 0,-3.27862 0.54621,-6.37563 1.63626,-9.2863 1.09005,-2.91066 2.60623,-5.39912 4.54384,-7.463 1.93996,-2.06389 4.3037,-3.7032 7.09122,-4.91323 2.78987,-1.21474 5.81989,-1.82329 9.09004,-1.82329 2.90994,0 5.63625,0.66988 8.18127,2.00492 2.54502,1.33503 4.72748,3.06634 6.54502,5.18919 1.81754,2.12521 3.27251,4.5547 4.36491,7.2861 1.09005,2.72905 1.63626,5.49111 1.63626,8.28384 0,6.31431 -2.33314,11.4752 -7.00176,15.48267 -4.66627,4.00512 -10.51205,6.37328 -17.54441,7.09976 5.57504,2.79509 11.329,4.19146 17.2666,4.1891 4.8452,0.002 9.57268,-0.87745 14.17773,-2.64177 4.6027,-1.75961 8.62859,-4.12777 12.08474,-7.10212 3.45379,-2.97436 6.24131,-6.43932 8.3602,-10.38547 2.11889,-3.94614 3.18069,-8.16354 3.18069,-12.65692 0,-1.70299 -0.18365,-3.58526 -0.54385,-5.64914 L 95.72971,266.7949 z M 95.18821,27.488123 c -1.21483,-0.243068 -2.30724,-0.365597 -3.27486,-0.365597 -3.75986,0 -7.24661,1.912917 -10.46026,5.738777 -3.21365,3.823478 -6.00352,8.80275 -8.36726,14.933079 -2.36374,6.132684 -4.21188,13.022518 -5.54914,20.671856 -1.33254,7.649365 -2.00117,15.298698 -2.00117,22.948042 0,3.158334 0.12478,6.194011 0.36492,9.10704 0.24485,2.91538 0.67333,5.70811 1.2831,8.37819 24.73216,-21.976242 37.09942,-41.768292 37.09942,-59.373819 0,-8.378205 -3.03237,-15.723276 -9.09475,-22.037568 z m 3.814,231.850857 c 5.94467,-4.37072 10.46026,-9.16837 13.55619,-14.39058 3.09123,-5.21986 4.63802,-10.86429 4.63802,-16.93801 0,-3.76216 -0.63802,-7.4347 -1.91171,-11.01996 -1.27134,-3.57818 -3.08887,-6.76718 -5.45497,-9.56227 -2.36609,-2.78801 -5.18657,-5.03588 -8.46143,-6.7318 -3.27486,-1.69828 -6.85108,-2.54506 -10.72865,-2.54506 -0.24249,0 -0.72749,0.0307 -1.45497,0.0873 -0.72513,0.0613 -1.75633,0.15097 -3.08887,0.2689 l 12.90639,60.83151 z M 81.56374,199.26225 c -3.75749,0.48354 -7.2725,1.42468 -10.545,2.82104 -3.27251,1.39637 -6.08828,3.12767 -8.45202,5.19155 -2.36374,2.06389 -4.24249,4.43205 -5.63625,7.10212 -1.39376,2.67244 -2.09064,5.58546 -2.09064,8.7438 0,9.34762 4.96527,17.11962 14.88874,23.31127 -8.24013,-1.33503 -14.84636,-4.52167 -19.81634,-9.56227 -4.96997,-5.03823 -7.45378,-11.38084 -7.45378,-19.03255 0,-4.49101 0.93937,-8.83106 2.81812,-13.02016 1.87875,-4.18909 4.39317,-7.95598 7.54325,-11.30065 3.15479,-3.34703 6.85108,-6.23647 11.09121,-8.66595 4.24249,-2.43421 8.72748,-4.13721 13.45261,-5.10664 l -7.63507,-36.42579 c -17.08768,12.86684 -30.02468,25.49546 -38.81101,37.88112 -8.78633,12.38567 -13.1795,24.64868 -13.1795,36.79139 0,6.67755 1.48322,12.99421 4.45438,18.94292 2.97115,5.95106 6.9735,11.14026 12.00469,15.5723 5.03119,4.4344 10.85107,7.92531 17.45966,10.47274 6.60623,2.55214 13.60563,3.82821 20.9982,3.82821 4.24249,0 8.18127,-0.39627 11.81634,-1.18408 3.63743,-0.79017 7.03001,-2.03558 10.1801,-3.73386 L 81.56374,199.26225 z\" />\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.clefC = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\"\r\n\t\t\td=\"M 90,276 C 86,276 81,275 77,274 73,273 70,271 67,268 64,266 61,263 60,260 58,256 57,253 57,249 57,247 57,245 58,243 59,241 60,239 61,238 63,236 64,235 66,234 68,233 70,232 72,232 74,232 76,233 77,233 79,234 81,236 82,237 84,238 85,240 86,242 87,244 87,246 87,248 87,250 86,252 85,253 84,255 82,256 80,258 79,259 77,260 76,261 75,262 74,262 74,263 74,267 79,269 88,269 92,269 96,268 98,267 101,266 103,264 105,261 107,258 108,255 109,250 110,245 110,239 110,232 110,228 110,224 109,220 108,216 107,212 105,210 104,207 102,204 100,203 98,201 96,200 93,200 84,200 76,207 67,222 66,217 65,213 64,209 63,205 62,201 60,199 59,196 57,193 55,192 53,190 52,189 49,189 48,189 47,189 46,190 L 46,275 39,275 39,93 46,93 46,179 C 46,179 47,179 47,179 48,180 48,180 49,180 51,180 53,179 55,177 57,175 59,173 60,170 62,167 63,163 64,159 65,155 66,151 67,147 77,160 86,166 92,166 94,166 97,165 99,164 101,162 103,160 104,157 106,155 107,151 108,148 109,144 109,140 109,135 109,128 109,122 108,117 107,113 106,109 104,107 102,104 99,102 96,101 93,100 89,100 84,100 75,100 71,102 71,105 71,106 73,107 75,108 80,110 83,112 85,114 86,116 87,118 87,121 87,123 87,124 86,126 85,128 84,130 83,131 81,133 80,134 78,135 76,136 74,137 72,137 68,137 64,135 61,132 58,129 56,125 56,120 56,114 58,108 62,102 66,98 70,95 74,94 79,93 83,92 88,92 95,92 101,93 106,95 112,96 116,99 120,102 124,105 127,110 129,114 131,119 132,125 132,131 132,136 131,142 129,147 128,152 125,157 122,161 119,165 116,168 112,170 108,173 103,174 98,174 89,174 81,172 76,169 L 76,169 C 74,169 72,170 71,173 70,175 69,178 69,182 69,184 69,186 69,188 70,191 70,193 71,194 72,196 72,197 73,198 74,199 75,200 76,200 79,197 82,194 86,193 89,191 93,190 97,190 102,190 107,191 111,194 116,196 120,200 123,204 126,209 129,214 130,219 132,225 133,231 133,237 133,250 129,259 122,266 114,273 104,276 90,276 Z M 27,93 L 27,275 4,275 4,93 27,93 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.clefF = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\"\r\n\t\t\td=\"M 8,240 C 21,236 32,230 39,224 45,218 51,211 57,204 62,197 67,190 70,183 74,176 77,168 79,161 81,153 82,146 82,139 82,133 81,127 80,122 78,118 76,113 73,110 70,106 66,103 62,101 58,99 53,98 48,98 44,98 41,99 37,100 33,101 30,103 27,106 24,108 22,111 20,114 18,117 17,120 17,123 17,125 17,126 18,126 18,126 18,126 19,125 20,125 20,124 22,123 23,123 24,122 26,122 27,121 29,121 31,121 33,121 35,121 36,122 38,123 40,124 41,126 42,127 43,129 44,131 45,133 45,135 45,137 45,143 43,147 40,151 36,155 32,157 26,157 23,157 20,156 18,155 16,154 14,152 12,149 10,147 9,144 8,141 7,138 7,134 7,131 7,126 8,121 11,116 13,111 16,107 21,104 25,101 29,98 35,96 40,94 46,93 52,93 62,93 71,95 78,98 85,101 91,105 95,111 99,116 102,122 104,128 105,134 106,140 106,147 106,150 106,154 105,157 105,161 104,164 102,168 101,172 99,176 97,180 94,185 91,190 88,195 84,202 78,209 71,215 64,221 57,226 50,230 43,235 36,238 29,240 23,243 18,244 14,244 10,244 8,243 8,240 Z M 121,116 C 121,113 122,111 124,110 125,108 127,107 130,107 133,107 135,108 136,110 138,111 139,113 139,116 139,119 138,121 136,122 135,124 133,125 130,125 127,125 125,124 124,122 122,121 121,119 121,116 Z M 121,162 C 121,159 122,157 124,156 125,154 127,153 130,153 133,153 135,154 136,156 138,157 139,159 139,162 139,165 138,167 136,168 135,170 133,171 130,171 127,171 125,170 124,168 122,167 121,165 121,162 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.HVT4 = nx3.render.svg.SvgElements.noteBlack;
nx3.render.svg.SvgElements.noteBlack = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\"\r\n\t\t\td = \"m 20.557649,250.57631 c -5.81753,-0.002 -10.6650905,-1.36806 -14.5450105,-4.0971 -3.87756,-2.73612 -5.81516995,-6.6516 -5.81516995,-11.74881 0,-4.12777 1.30193995,-8.10458 3.90816995,-11.92807 2.60387,-3.82585 5.9069905,-7.19411 9.9070005,-10.1095 3.99998,-2.91302 8.452014,-5.24816 13.360774,-7.01013 4.90876,-1.7596 9.66448,-2.63941 14.2719,-2.63941 6.1801,0 11.17834,1.42467 14.99703,4.27637 3.81636,2.85406 5.72572,6.70821 5.72572,11.56483 0,4.00747 -1.30195,7.92295 -3.90817,11.7488 -2.60623,3.8235 -5.93761,7.19412 -9.99882,10.10714 -4.05885,2.91303 -8.54382,5.27883 -13.45258,7.10448 -4.90878,1.81858 -9.72573,2.72905 -14.450844,2.7314 z\" />\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.HVT2 = nx3.render.svg.SvgElements.noteWhite;
nx3.render.svg.SvgElements.noteWhite = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\"\r\n\t\t\td=\"m -0.01820308,235.29885 c 0,-4.12777 1.15125988,-8.19421 3.45376988,-12.20168 2.30253,-4.00747 5.3325496,-7.55735 9.0900592,-10.65436 3.7575,-3.09701 7.96936,-5.58546 12.63565,-7.46772 4.66627,-1.88227 9.30428,-2.8234 13.90934,-2.8234 7.63741,0 13.69743,1.60865 18.18243,4.82831 4.48262,3.2173 6.72393,7.73898 6.72863,13.56739 -0.005,4.25042 -1.21482,8.25553 -3.63977,12.02006 -2.4226,3.76452 -5.57504,7.04315 -9.4526,9.83588 -3.87756,2.79037 -8.30134,5.00522 -13.27367,6.64689 -4.96763,1.63695 -10.06001,2.45779 -15.27249,2.46015 -6.18245,-0.002 -11.45615,-1.42939 -15.8186992,-4.28109 -4.36254,-2.85641 -6.54264988,-6.83322 -6.54264988,-11.93043 z M 49.439026,207.62158 c -1.93759,0 -4.39551,0.48589 -7.3643,1.45769 -2.97117,0.96944 -6.15186,2.2455 -9.54915,3.82113 -3.39257,1.57799 -6.75924,3.39893 -10.09297,5.46517 -3.33606,2.06388 -6.36843,4.18438 -9.09475,6.37091 -2.731,2.18182 -4.9417295,4.39902 -6.6391792,6.64453 -1.69512,2.24787 -2.54502,4.28109 -2.54738,6.10202 0.002,5.7034 3.4561299,8.55746 10.3684392,8.55746 3.27486,0 7.45849,-1.06143 12.55087,-3.18664 5.09241,-2.12285 10.0624,-4.73396 14.91464,-7.82861 4.84756,-3.097 9.03119,-6.34497 12.54619,-9.74153 3.51735,-3.40128 5.27603,-6.4346 5.27603,-9.10468 0,-5.7034 -3.45377,-8.55745 -10.36844,-8.55745 z\" />\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.HVT1 = nx3.render.svg.SvgElements.noteWhole;
nx3.render.svg.SvgElements.noteWhole = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\"\r\n\t\t\td=\"m 0.14197458,226.9183 c 0,-3.64187 1.21011002,-6.97946 3.63271012,-10.01514 2.4226,-3.03568 5.66217,-5.64679 9.7233503,-7.83569 4.0565,-2.18182 8.692204,-3.85179 13.899944,-5.00757 5.21012,-1.15106 10.54031,-1.72894 15.99057,-1.7313 5.09006,0.002 10.08827,0.64157 14.99232,1.91292 4.9064,1.27843 9.32782,3.00738 13.26661,5.19156 3.93643,2.18653 7.11712,4.76698 9.54208,7.74133 2.42025,2.97671 3.63271,6.22468 3.63271,9.74389 0,3.88718 -1.0312,7.34743 -3.08885,10.38311 -2.06004,3.03568 -4.99825,5.58546 -8.81461,7.64935 -3.81636,2.06388 -8.38843,3.67253 -13.71862,4.8283 -5.33019,1.15106 -11.26544,1.72895 -17.8081,1.73131 -5.81517,-0.002 -11.23482,-0.58025 -16.26603,-1.73131 -5.026479,-1.15577 -9.389044,-2.79508 -13.082984,-4.9203 -3.6962903,-2.12521 -6.6015203,-4.70565 -8.7204103,-7.73897 -2.1212401,-3.03568 -3.18069012,-6.43696 -3.18069012,-10.20149 z m 65.06407442,9.28158 c 0,-4.00511 -1.39376,-8.80276 -4.18363,-14.38822 -1.33254,-2.67007 -2.75691,-5.00757 -4.27074,-7.01248 -1.51618,-2.00256 -3.18305,-3.61121 -5.00057,-4.82595 -1.81754,-1.21239 -3.90817,-2.12522 -6.27193,-2.73141 -2.36373,-0.60619 -5.06179,-0.91047 -8.09181,-0.91047 -11.63506,0 -17.452602,4.675 -17.452602,14.02498 0,3.51922 0.696896,6.88984 2.090662,10.10714 1.39376,3.2173 3.24189,6.10202 5.54443,8.6518 2.30253,2.54978 4.84756,4.583 7.63508,6.09966 2.78751,1.51902 5.63859,2.27853 8.54853,2.27853 2.6651,0 5.17951,-0.12266 7.54324,-0.3656 2.36376,-0.24296 4.485,-0.72885 6.36375,-1.45769 1.8811,-0.72649 3.48674,-1.8516 4.81694,-3.36826 1.33489,-1.51666 2.24367,-3.55224 2.72865,-6.10203 z\" />\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.signNatural = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;display:inline\"\r\n\t\t\td=\"m 27.763524,289.1105 0,-36.43051 -27.82574358,9.65191 0,-97.8116 4.52499988,0 0.0183,36.60977 27.8092637,-9.83589 0,97.81632 -4.52736,0 z m -23.3007437,-42.80378 23.3007437,-8.38055 -0.0157,-30.60209 -23.2842537,8.55981 0,30.42283 z\" />\t\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.signSharp = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;display:inline\"\r\n\t\t\td=\"m 31.526296,208.23455 -17.48556,5.8284 0.0157,31.51021 17.46908,-5.82841 0,-31.5102 z m 4.52736,-43.89588 0.0131,26.0474 9.44083,-3.09464 0,16.5724 -9.4526,3.097 0,31.50785 9.4526,-3.09701 0,16.57476 -9.4526,3.09701 0,28.59482 -4.52736,0 0,-27.32111 -17.48556,5.82841 0,27.31875 -4.52736,0 0,-26.04268 -9.4526,3.09464 0,-16.57239 9.4526,-3.09701 -0.0131,-31.50785 -9.43847,3.09465 0,-16.5724 9.4526,-3.09701 0,-28.59482 4.52736,0 0.0157,27.32111 17.46908,-5.82841 0,-27.32347 4.52736,0 z\" />\t\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.signFlat = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;display:inline\"\r\n\t\t\t\td=\"m 0.119631,150.69109 5.81283,0 -1.25721,57.37598 c 3.63742,-5.96993 9.26898,-8.95607 16.901689,-8.95371 2.66507,-0.002 5.23835,0.45287 7.72451,1.3657 2.48383,0.91046 4.63332,2.15823 6.45084,3.73622 1.8152,1.58034 3.27018,3.46025 4.36022,5.64914 1.09004,2.18654 1.63625,4.55234 1.63625,7.10684 -0.24254,3.52158 -1.54679,7.44178 -3.90817,11.75353 -2.36373,4.3141 -6.39435,8.53622 -12.08944,12.66399 l -25.631519,18.95235 0,-109.65004 z m 16.901689,55.71308 c -5.082969,0 -8.960559,2.55214 -11.620919,7.65407 -0.71102,6.92521 -1.06652,12.87863 -1.06652,17.86026 0,8.62586 0.29665,14.63825 0.88758,18.03953 2.30253,-1.45769 4.75337,-3.61121 7.35491,-6.46763 2.603867,-2.85641 4.991139,-5.89445 7.171249,-9.11175 2.17775,-3.21966 3.96469,-6.43696 5.35609,-9.65898 1.39141,-3.21966 2.08592,-6.04541 2.08827,-8.47254 -0.002,-2.79509 -0.96997,-5.13494 -2.90523,-7.0172 -1.93762,-1.88463 -4.35784,-2.82576 -7.26543,-2.82576 z\" />\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.flagDown8 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 10,227 C 12,227 14,227 15,227 16,227 17,226 19,226 20,225 22,224 23,223 25,222 27,220 30,218 39,211 44,206 46,205 54,195 58,185 58,174 58,166 55,156 48,144 48,143 47,142 47,141 47,140 48,139 48,139 49,139 50,140 52,142 53,144 55,146 56,149 57,152 59,155 60,158 61,161 62,164 62,166 63,171 64,176 64,181 64,186 63,190 61,195 60,200 57,204 54,209 50,213 47,216 43,220 39,224 36,228 33,232 29,237 25,243 22,249 18,255 15,262 13,269 12,269 12,270 12,271 12,271 12,272 13,272 13,273 12,273 10,273 L 10,227 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.flagUp8 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 12,181 C 14,181 15,181 14,181 14,181 14,182 14,182 14,183 14,184 14,184 20,199 27,211 35,221 45,234 50,241 52,243 56,250 58,258 58,266 L 58,267 C 58,273 58,278 57,282 56,287 55,291 53,294 52,297 51,299 50,301 48,302 48,303 47,303 46,303 46,303 46,302 46,301 46,300 47,298 48,295 49,293 50,291 50,290 51,288 51,286 51,284 52,282 52,280 52,277 52,274 52,270 L 52,269 C 52,256 45,245 30,234 28,233 27,232 26,231 25,230 24,230 22,229 21,228 20,228 18,227 16,227 14,227 12,227 L 12,181 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.flagDown16 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 65,152 C 65,157 64,162 63,165 65,169 66,175 66,181 66,186 65,191 64,196 62,200 59,205 56,209 52,213 49,217 45,221 42,224 38,228 35,232 31,238 27,243 23,250 20,256 17,262 15,269 15,269 15,270 15,271 15,271 15,272 15,272 15,273 14,273 12,273 L 12,192 C 16,192 20,192 24,190 28,188 32,186 36,183 39,181 42,178 45,176 47,174 49,172 50,171 55,165 58,158 58,150 58,143 56,135 53,127 52,125 51,124 51,123 51,122 52,122 53,122 55,122 56,123 58,126 59,129 60,132 61,136 62,139 63,143 64,146 65,149 65,151 65,152 Z M 60,179 C 60,178 60,177 60,177 60,176 60,175 60,174 59,175 58,177 55,180 53,182 50,185 47,187 45,190 42,192 40,194 37,196 36,198 35,199 29,207 23,216 19,226 20,225 22,225 24,224 26,222 28,221 30,219 36,214 41,210 44,207 48,204 50,202 50,202 57,195 60,187 60,179 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.flagUp16 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 52,321 C 51,321 50,321 50,320 50,319 51,318 51,316 51,314 52,312 52,310 53,308 53,305 53,303 54,301 54,299 54,297 54,295 54,293 53,291 52,290 51,288 50,286 48,284 46,281 43,279 40,276 36,273 31,269 28,268 27,266 25,265 23,264 22,263 21,263 20,262 19,262 17,262 16,262 15,262 13,262 L 13,181 14,181 C 14,181 15,181 15,182 15,182 15,183 16,184 19,196 26,208 36,221 39,225 41,228 45,232 48,235 51,239 53,242 56,246 58,250 59,255 60,259 61,264 61,269 61,275 60,281 58,285 59,286 59,288 59,290 60,292 60,295 60,298 L 60,298 C 60,300 60,302 59,305 59,307 58,310 57,312 56,315 56,317 55,318 54,320 53,321 52,321 Z M 55,272 C 55,263 53,256 48,250 48,250 46,249 44,247 42,245 40,242 37,240 34,237 31,235 28,233 24,230 22,229 19,228 22,233 24,238 27,243 30,247 32,252 36,255 36,256 37,257 39,259 41,260 43,262 45,264 47,267 49,269 51,271 53,273 54,275 55,277 55,276 55,275 55,274 55,273 55,272 55,272 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.pauseNv4 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\"\r\n\t\t\td=\"M 54,263 C 49,261 43,260 38,260 34,260 30,261 27,263 24,266 22,269 22,273 22,280 26,287 34,294 33,295 33,295 32,295 31,295 29,294 26,292 23,291 20,288 17,285 14,283 12,280 9,276 7,273 6,269 6,266 6,264 6,261 7,258 8,256 9,254 11,252 12,250 14,248 17,247 19,246 21,245 24,245 28,245 31,246 35,248 34,246 32,244 30,241 29,239 27,237 24,234 22,231 20,228 17,225 14,221 11,217 7,213 20,201 26,191 26,181 26,179 25,176 24,173 23,170 21,167 19,165 18,162 16,160 15,158 13,156 13,155 13,155 13,154 14,153 16,153 L 48,198 C 37,212 31,222 31,228 31,231 32,233 34,236 35,239 37,242 40,245 42,248 45,251 47,254 50,257 52,260 54,263 Z\" />\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.pauseNv8 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\"\r\n\t\t\td=\"M 30,273 L 22,273 52,208 C 42,211 34,213 28,213 17,213 11,208 11,199 11,197 12,194 15,193 18,191 21,190 24,190 31,190 34,193 34,199 34,202 33,205 31,209 32,209 32,209 34,209 42,209 50,205 60,197 L 30,273 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.pauseNv16 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\"\r\n\t\t\td=\"M 26,314 L 18,314 44,253 C 37,256 30,258 23,258 12,258 6,254 6,245 6,242 8,240 10,238 13,236 16,235 20,235 27,235 30,238 30,244 30,246 29,249 27,253 28,253 29,253 29,253 30,253 31,253 31,253 34,253 39,252 46,249 L 65,207 C 57,210 49,212 42,212 31,212 25,208 25,200 25,197 26,194 29,192 31,190 34,189 38,189 44,189 48,192 48,198 48,201 47,204 45,208 46,208 47,208 48,208 53,208 62,204 73,196 L 26,314 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.time0 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 81,227 C 81,232 80,238 78,243 76,248 74,252 70,256 67,260 63,263 59,265 54,268 50,269 45,269 40,269 35,268 30,265 26,263 22,260 19,256 16,252 13,247 11,242 9,237 8,232 8,227 8,222 9,216 11,211 13,206 16,202 19,197 22,193 26,190 30,188 35,185 40,184 45,184 49,184 54,185 58,188 63,190 67,193 70,197 73,201 76,206 78,211 80,216 81,221 81,227 Z M 58,229 C 58,202 54,189 45,189 36,189 31,202 31,227 31,252 36,264 45,264 54,264 58,252 58,229 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.time1 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 10,269 C 10,266 11,264 13,264 16,263 18,262 19,261 20,259 20,257 20,253 L 20,215 C 20,211 20,208 19,207 19,207 18,208 17,210 16,211 15,212 13,214 12,216 11,217 9,219 8,220 8,221 7,221 7,221 6,221 5,221 14,203 19,191 20,184 21,184 23,185 25,185 26,185 29,185 31,185 37,185 41,185 43,184 L 43,253 C 43,257 44,259 45,261 46,262 47,262 48,263 50,263 51,264 52,264 53,265 54,266 54,269 L 10,269 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.time2 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 76,239 C 75,260 68,271 55,271 53,271 51,270 48,269 45,268 41,267 38,266 35,265 32,263 29,262 26,261 24,261 23,261 21,261 19,261 18,262 17,263 16,263 15,264 14,265 13,266 12,267 11,267 10,268 9,268 8,268 7,267 7,267 7,263 8,259 10,257 12,255 13,252 15,250 18,245 23,240 29,236 34,232 38,229 40,227 43,225 45,223 47,221 48,219 49,217 49,215 50,213 50,211 50,209 50,204 49,199 46,196 43,193 39,191 34,191 28,191 24,193 22,196 24,197 27,199 29,201 31,203 32,205 32,208 32,210 32,211 31,213 30,214 29,215 28,216 27,217 25,218 24,219 22,219 21,220 19,220 12,220 8,216 8,208 8,200 11,194 17,189 23,185 31,183 42,183 48,183 54,184 58,186 62,188 65,190 68,192 70,195 72,198 73,201 74,204 74,206 74,208 74,214 72,219 68,223 67,224 64,225 61,227 57,229 53,231 49,233 44,235 40,237 36,239 32,241 29,243 27,245 L 27,245 C 27,245 28,245 29,245 29,245 30,245 31,245 33,245 35,245 38,246 41,247 44,247 48,248 51,249 54,250 56,251 59,252 61,252 62,252 65,252 68,251 69,249 69,249 70,248 71,246 71,244 73,242 76,239 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.time3 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 70,245 C 70,253 67,260 61,264 56,268 48,270 37,270 33,270 29,270 25,269 21,268 18,267 15,265 12,263 10,261 8,259 7,257 6,254 6,251 6,248 7,245 10,243 12,241 15,240 18,240 21,240 24,241 26,243 28,245 29,247 29,250 29,255 27,259 24,262 26,264 30,265 35,265 39,265 43,263 45,260 48,257 49,253 49,249 49,243 48,239 46,237 44,234 41,232 37,231 33,231 30,231 28,230 25,230 24,229 24,228 24,227 24,225 24,225 24,224 25,223 25,223 26,223 27,223 28,223 29,223 30,222 32,222 37,222 41,220 44,218 47,216 48,212 48,206 48,195 43,189 32,189 28,189 25,190 23,192 25,194 26,196 28,198 29,200 30,202 30,205 30,208 29,211 27,212 24,214 22,215 19,215 15,215 13,214 10,212 8,210 7,207 7,203 7,197 10,192 15,189 21,186 28,184 37,184 46,184 54,186 60,190 65,194 68,199 68,207 68,211 67,215 64,219 61,222 58,225 53,226 L 54,227 C 58,228 62,230 65,233 68,236 70,240 70,245 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.time4 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 66,250 L 66,255 C 66,256 66,256 66,257 66,257 66,258 66,258 66,260 67,262 68,262 69,263 72,264 76,264 L 77,269 32,269 32,264 C 38,264 41,262 42,261 43,260 43,256 43,250 L 6,250 6,243 C 8,239 11,235 14,230 16,225 19,220 21,215 23,209 25,204 26,199 28,193 29,189 29,184 L 60,184 C 58,192 52,202 41,213 28,226 21,235 18,242 L 43,242 43,221 66,201 66,242 78,242 78,250 66,250 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.time5 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 4,249 C 4,245 5,242 8,239 10,236 13,235 16,235 25,235 29,239 29,247 29,248 29,250 28,251 27,253 27,254 26,255 25,256 24,258 24,258 23,259 22,260 22,260 24,263 28,264 32,264 43,264 48,256 48,241 48,234 47,230 44,226 42,222 38,220 33,220 29,220 24,222 18,225 17,225 17,225 17,226 17,226 16,226 16,226 16,227 15,227 14,227 13,227 11,227 9,228 9,223 10,217 10,209 11,202 11,193 12,183 20,185 31,186 44,186 52,186 61,185 69,184 68,197 56,204 34,204 34,204 32,204 31,204 30,204 28,204 27,204 25,203 23,203 22,203 21,203 20,203 19,203 19,203 18,204 18,205 18,206 18,207 18,209 18,210 17,212 17,213 17,215 17,217 17,218 24,215 31,213 39,213 43,213 47,214 51,215 56,216 59,218 62,220 65,223 68,226 69,229 71,232 72,236 72,240 72,245 71,249 69,252 67,256 65,259 62,261 58,264 55,266 50,267 46,268 41,269 36,269 31,269 26,268 23,267 19,266 15,265 13,263 10,261 8,259 6,256 5,254 4,251 4,249 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.time6 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 74,241 C 74,245 73,249 72,253 70,257 68,260 65,262 62,265 59,267 55,268 51,269 46,270 42,270 30,270 21,266 15,259 9,251 6,240 6,227 6,221 7,215 9,210 10,204 13,200 16,196 19,192 23,189 27,186 31,184 36,183 41,183 46,183 49,183 53,184 57,185 60,186 63,188 66,189 68,191 69,193 71,196 72,198 72,201 72,204 71,207 68,210 66,212 63,213 59,213 55,213 52,212 50,209 47,207 46,204 46,201 46,200 46,198 47,196 48,195 48,193 48,192 48,189 46,188 42,188 40,188 38,189 36,190 34,192 33,194 32,196 31,198 30,201 29,204 28,207 28,211 28,214 28,214 28,215 28,217 28,219 28,221 28,223 35,220 43,218 50,218 57,218 63,220 67,224 72,228 74,234 74,241 Z M 43,226 C 34,226 29,232 29,245 29,258 33,264 41,264 49,264 53,258 53,245 53,232 50,226 43,226 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.time7 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 77,188 C 77,194 72,207 63,227 54,245 50,259 50,269 L 50,271 C 47,270 42,270 34,270 32,270 29,270 27,270 25,270 24,271 22,271 23,257 32,242 49,225 55,219 59,214 61,209 56,212 50,213 45,213 44,213 41,213 39,212 36,211 34,210 31,209 28,208 26,207 23,206 21,206 20,205 19,205 18,205 16,207 15,209 14,212 13,214 12,217 10,215 9,213 8,211 L 8,203 C 8,203 8,201 8,200 8,198 8,197 8,195 L 8,186 C 14,188 17,190 17,190 18,190 18,189 20,189 21,188 23,187 25,186 26,185 28,185 30,184 32,183 34,183 36,183 38,183 40,184 42,185 45,186 48,188 50,190 53,192 55,193 57,195 59,196 61,197 62,197 67,197 71,193 72,187 L 74,187 C 76,187 77,187 77,188 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.time8 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 75,244 C 75,248 74,251 72,255 71,258 68,260 65,263 62,265 58,267 54,268 50,269 46,270 42,270 37,270 32,269 28,268 24,267 21,266 18,264 15,262 12,259 11,256 9,253 8,250 8,246 8,242 9,238 12,234 14,231 18,229 22,227 14,223 10,216 10,207 10,203 11,200 12,197 14,195 16,192 19,190 21,188 25,187 28,186 32,185 36,184 40,184 50,184 58,186 64,189 70,193 73,198 73,204 73,213 69,219 61,225 70,229 75,235 75,244 Z M 60,203 C 60,198 58,195 55,192 52,190 47,189 41,189 31,189 26,193 26,200 26,208 34,214 50,219 57,215 60,210 60,203 L 60,203 Z M 58,252 C 58,249 57,247 56,246 54,244 52,242 49,240 47,239 44,237 40,235 37,234 33,232 30,231 23,234 20,240 20,246 20,251 22,256 26,259 30,262 35,263 41,263 45,263 49,262 53,260 56,258 58,255 58,252 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.time9 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 4,212 C 4,202 7,195 13,190 20,185 28,183 39,183 50,183 58,187 64,195 70,203 73,213 73,227 73,233 72,238 70,244 68,249 66,253 63,257 59,261 55,264 51,267 46,269 41,270 36,270 32,270 29,270 25,269 22,268 19,267 16,265 14,263 11,262 10,259 8,257 7,255 7,252 7,249 8,246 11,244 13,241 15,240 19,240 23,240 26,241 28,244 30,246 31,249 31,253 31,254 31,255 30,257 30,259 29,260 29,261 29,264 31,265 35,265 45,265 50,254 50,232 L 50,229 C 42,233 35,235 29,235 21,235 15,233 11,229 6,225 4,219 4,212 Z M 38,189 C 34,189 30,191 28,195 25,198 24,203 24,209 24,214 25,218 27,222 29,225 32,227 36,227 45,227 50,221 50,209 50,203 49,199 47,195 45,191 42,189 38,189 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.timeCommon = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 78,247 C 77,250 76,253 74,255 72,258 70,261 67,263 64,265 61,267 58,268 55,269 52,270 49,270 43,270 37,269 32,267 27,264 23,261 19,257 16,253 13,248 11,243 9,238 8,232 8,226 8,220 9,214 11,209 13,204 15,199 19,196 22,192 26,189 31,187 36,185 42,184 48,184 51,184 55,184 59,185 62,186 66,187 68,189 71,190 73,192 75,194 76,197 77,199 77,202 77,205 76,208 73,210 71,212 68,213 65,213 62,213 59,212 56,210 53,208 52,205 52,202 52,198 54,193 59,189 56,189 54,189 52,189 48,189 45,190 42,192 39,193 36,196 34,199 32,202 31,205 30,210 29,214 28,218 28,224 28,229 29,234 30,239 31,244 33,248 35,252 37,256 39,259 42,261 45,264 48,265 52,265 60,265 69,259 78,247 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.timeAllabreve = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 39,191 C 30,197 26,207 26,223 26,227 26,230 27,234 28,238 29,241 30,245 31,248 32,251 34,254 35,257 37,259 39,261 L 39,191 Z M 74,247 C 73,250 72,253 70,256 68,259 66,261 63,263 61,265 58,267 55,268 52,270 49,270 46,270 L 45,270 45,284 39,284 39,270 C 34,269 29,267 25,264 21,262 18,259 15,255 12,251 10,246 8,241 7,236 6,231 6,225 6,220 7,215 8,210 10,205 12,201 15,198 18,194 21,191 25,188 29,186 34,185 39,184 L 39,171 45,171 45,184 C 49,184 52,184 56,185 59,186 63,187 65,189 68,191 70,192 72,195 73,197 74,199 74,202 74,205 73,207 70,210 68,212 65,213 62,213 59,213 56,212 53,210 50,208 49,205 49,202 49,198 51,193 56,189 55,189 54,189 52,189 51,188 50,188 49,188 48,188 48,188 47,188 46,188 46,188 45,189 L 45,265 C 46,265 48,265 49,265 57,265 66,259 74,247 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.SvgElements.tplCircle = "<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#FFFFFFF\"><path d=\"M 93,253 C 78,253 66,250 53,242 41,235 32,226 25,214 17,201 14,189 14,175 14,160 17,148 25,135 32,123 41,114 53,107 66,99 78,96 92,96 107,96 119,99 132,107 144,114 153,123 160,135 168,148 171,160 171,174 171,189 168,201 160,214 153,226 144,235 132,242 119,250 107,253 93,253 L 93,253 Z\"/></g><g style=\"stroke:#000000;fill:none\"><path style=\"fill:none\" d=\"M 93,253 C 78,253 66,250 53,242 41,235 32,226 25,214 17,201 14,189 14,175 14,160 17,148 25,135 32,123 41,114 53,107 66,99 78,96 92,96 107,96 119,99 132,107 144,114 153,123 160,135 168,148 171,160 171,174 171,189 168,201 160,214 153,226 144,235 132,242 119,250 107,253 93,253\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 71,256 C 64,254 57,252 50,248 44,244 38,239 33,234 28,229 23,223 19,217 15,210 13,203 11,196 9,189 8,182 8,175 8,167 9,160 11,153 13,146 15,139 19,132 23,126 28,120 33,115 38,110 44,105 50,101 57,97 64,95 71,93 78,91 85,90 92,90 100,90 107,91 114,93 121,95 128,97 135,101 141,105 147,110 152,115 157,120 162,126 166,132 170,139 172,146 174,153 176,160 177,167 177,174 177,182 176,189 174,196 172,203 170,210 166,217 162,223 157,229 152,234 147,239 141,244 135,248 128,252 121,254 114,256 107,258 100,259 93,259 85,259 78,258 71,256 Z M 130,239 C 136,236 141,232 145,227 150,223 154,218 157,212 160,206 163,200 165,194 166,188 167,181 167,174 167,168 166,161 165,155 163,149 160,143 157,137 154,131 150,126 145,122 141,117 136,113 130,110 124,107 118,104 112,102 106,101 99,100 92,100 86,100 79,101 73,102 67,104 61,107 55,110 49,113 44,117 40,122 35,126 31,131 28,137 25,143 22,149 20,155 19,161 18,168 18,175 18,181 19,188 20,194 22,200 25,206 28,212 31,218 35,223 40,227 44,232 49,236 55,239 61,242 67,245 73,247 79,248 86,249 93,249 99,249 106,248 112,247 118,245 124,242 130,239 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"8\" y=\"89\" width=\"170\" height=\"171\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"854\" height=\"964\"/></g><g/></g></g></g></svg>";
nx3.render.svg.SvgElements.tplCircleUp = "\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 71,256 C 64,254 57,252 50,248 44,244 38,239 33,234 28,229 23,223 19,217 15,210 13,203 11,196 9,189 8,182 8,175 8,167 9,160 11,153 13,146 15,139 19,132 23,126 28,120 33,115 38,110 44,105 50,101 57,97 64,95 71,93 78,91 85,90 92,90 100,90 107,91 114,93 121,95 128,97 135,101 141,105 147,110 152,115 157,120 162,126 166,132 170,139 172,146 174,153 176,160 177,167 177,174 177,182 176,189 174,196 172,203 170,210 166,217 162,223 157,229 152,234 147,239 141,244 135,248 128,252 121,254 114,256 107,258 100,259 93,259 85,259 78,258 71,256 Z M 130,239 C 136,236 141,232 145,227 150,223 154,218 157,212 160,206 163,200 165,194 166,188 167,181 167,174 167,168 166,161 165,155 163,149 160,143 157,137 154,131 150,126 145,122 141,117 136,113 130,110 124,107 118,104 112,102 106,101 99,100 92,100 86,100 79,101 73,102 67,104 61,107 55,110 49,113 44,117 40,122 35,126 31,131 28,137 25,143 22,149 20,155 19,161 18,168 18,175 18,181 19,188 20,194 22,200 25,206 28,212 31,218 35,223 40,227 44,232 49,236 55,239 61,242 67,245 73,247 79,248 86,249 93,249 99,249 106,248 112,247 118,245 124,242 130,239 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"8\" y=\"89\" width=\"170\" height=\"171\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"854\" height=\"964\"/></g><g/></g></g><g><desc>Group</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 70,52 L 92,10 114,52 70,52 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"70\" y=\"10\" width=\"45\" height=\"44\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 92,95 L 84,95 84,43 100,43 100,95 92,95 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"84\" y=\"43\" width=\"17\" height=\"53\"/></g><g/></g></g></g></g></svg>\r\n\t";
nx3.render.svg.SvgElements.tplArrowDown = "\t\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"854\" height=\"964\"/></g><g/></g></g><g><desc>Group</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 69,298 L 92,344 115,298 69,298 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"69\" y=\"298\" width=\"47\" height=\"47\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 92,252 L 100,252 100,309 84,309 84,252 92,252 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"83\" y=\"252\" width=\"18\" height=\"59\"/></g><g/></g></g></g></g></svg>\t\r\n\t";
nx3.render.svg.SvgElements.tplArrowUp = "\t\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"854\" height=\"964\"/></g><g/></g></g><g><desc>Group</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 70,52 L 92,10 114,52 70,52 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"70\" y=\"10\" width=\"45\" height=\"44\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 92,95 L 84,95 84,43 100,43 100,95 92,95 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"84\" y=\"43\" width=\"17\" height=\"53\"/></g><g/></g></g></g></g></svg>\r\n\t";
nx3.render.svg.SvgElements.tpl1 = "\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"503\" height=\"1205\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 106,225 L 93,225 93,146 C 90,149 86,152 82,155 77,158 73,160 69,161 L 69,149 C 76,146 82,142 87,137 92,133 96,128 98,124 L 106,124 106,225 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"69\" y=\"124\" width=\"38\" height=\"103\"/></g><g/></g></g></g></svg>\t\r\n\t";
nx3.render.svg.SvgElements.tpl2 = "\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"503\" height=\"1205\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 124,212 L 124,225 58,225 C 58,222 58,219 59,216 61,211 64,207 67,202 71,197 76,192 83,187 93,178 101,171 104,166 108,161 110,157 110,152 110,148 108,144 105,141 102,138 97,136 92,136 86,136 82,138 78,141 75,144 73,148 73,154 L 60,152 C 61,143 64,136 70,131 75,126 83,124 92,124 102,124 109,127 115,132 120,137 123,144 123,152 123,156 122,160 121,164 119,168 117,172 113,176 109,180 103,186 95,193 87,199 83,203 80,206 78,208 77,210 75,212 L 124,212 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"57\" y=\"124\" width=\"68\" height=\"103\"/></g><g/></g></g></g></svg>\t\r\n\t";
nx3.render.svg.SvgElements.tpl3 = "\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"503\" height=\"1205\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 60,198 L 73,196 C 74,202 77,207 80,210 83,213 87,214 92,214 99,214 104,212 107,208 111,204 113,200 113,194 113,189 111,184 108,181 104,177 99,176 94,176 91,176 88,176 85,177 L 86,165 C 87,165 88,165 88,165 93,165 98,164 102,161 106,159 108,155 108,150 108,146 106,143 103,140 100,137 97,136 92,136 87,136 83,137 80,140 77,143 75,147 74,152 L 61,150 C 63,142 66,135 71,131 77,126 83,124 91,124 97,124 102,125 107,127 111,130 115,133 117,137 120,141 121,145 121,150 121,154 120,158 117,161 115,165 112,167 107,169 113,171 118,174 121,178 124,182 126,188 126,194 126,203 123,211 116,217 110,223 102,226 92,226 83,226 76,223 70,218 64,213 61,206 60,198 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"60\" y=\"124\" width=\"67\" height=\"104\"/></g><g/></g></g></g></svg>\t\r\n\t";
nx3.render.svg.SvgElements.tpl4 = "\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"503\" height=\"1205\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 101,225 L 101,201 56,201 56,188 104,125 114,125 114,188 126,188 126,201 114,201 114,225 101,225 Z M 101,188 L 101,145 69,188 101,188 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"55\" y=\"125\" width=\"72\" height=\"101\"/></g><g/></g></g></g></svg>\t\r\n\t";
nx3.render.svg.SvgElements.tpl5 = "\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"503\" height=\"1205\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 60,198 L 73,197 C 74,203 76,207 79,210 83,213 87,214 92,214 98,214 103,212 107,208 111,204 113,198 113,191 113,185 111,179 108,176 104,172 99,170 93,170 88,170 85,171 82,173 79,174 77,176 75,179 L 62,177 72,125 121,125 121,138 83,138 78,165 C 84,160 90,158 96,158 104,158 112,161 117,167 123,173 126,181 126,190 126,199 123,207 118,214 112,222 103,226 92,226 83,226 76,223 70,218 64,213 61,206 60,198 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"60\" y=\"125\" width=\"67\" height=\"103\"/></g><g/></g></g></g></svg>\t\r\n\t";
nx3.render.svg.SvgElements.tpl6x = "\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"503\" height=\"1205\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 124,150 L 111,151 C 110,146 108,143 106,141 103,138 99,136 94,136 90,136 86,137 83,139 80,142 77,145 74,150 72,155 71,162 71,172 74,168 78,165 82,162 86,160 91,159 96,159 104,159 111,162 117,168 123,174 126,182 126,192 126,198 125,204 122,209 119,215 115,219 110,222 105,225 100,226 94,226 83,226 75,222 68,215 61,207 58,195 58,178 58,158 62,144 69,135 75,128 84,124 95,124 103,124 110,126 115,131 120,136 123,142 124,150 Z M 71,191 C 71,195 72,199 74,203 76,206 78,209 82,211 85,213 89,214 93,214 99,214 103,212 107,208 111,204 113,199 113,192 113,186 111,180 107,177 104,173 99,171 92,171 86,171 81,173 77,177 73,180 71,185 71,191 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"58\" y=\"124\" width=\"69\" height=\"104\"/></g><g/></g></g></g></svg>\t\r\n\t";
nx3.render.svg.SvgElements.tpl6 = "\r\n<svg ><g style=\"stroke:none;fill:#000000\"><path d=\"M 124,150 L 111,151 C 110,146 108,143 106,141 103,138 99,136 94,136 90,136 86,137 83,139 80,142 77,145 74,150 72,155 71,162 71,172 74,168 78,165 82,162 86,160 91,159 96,159 104,159 111,162 117,168 123,174 126,182 126,192 126,198 125,204 122,209 119,215 115,219 110,222 105,225 100,226 94,226 83,226 75,222 68,215 61,207 58,195 58,178 58,158 62,144 69,135 75,128 84,124 95,124 103,124 110,126 115,131 120,136 123,142 124,150 Z M 71,191 C 71,195 72,199 74,203 76,206 78,209 82,211 85,213 89,214 93,214 99,214 103,212 107,208 111,204 113,199 113,192 113,186 111,180 107,177 104,173 99,171 92,171 86,171 81,173 77,177 73,180 71,185 71,191 Z\"/></g></svg>\t\r\n\t";
nx3.render.svg.SvgElements.tpl7 = "\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"503\" height=\"1205\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 61,138 L 61,125 126,125 126,136 C 120,142 114,152 108,163 102,174 97,186 94,197 91,206 90,215 89,225 L 76,225 C 76,217 78,208 81,196 83,185 87,175 93,164 98,154 104,145 110,138 L 61,138 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"61\" y=\"125\" width=\"67\" height=\"101\"/></g><g/></g></g></g></svg>\t\r\n\t";
nx3.xml.BarXML.XBAR = "bar";
nx3.xml.BarXML.XBAR_TYPE = "type";
nx3.xml.BarXML.XBAR_TIME = "time";
nx3.xml.BarXML.XBAR_TIMEDISPLAY = "timedisplay";
nx3.xml.BarsXML.XBARS = "bars";
nx3.xml.HeadXML.XHEAD = "headx";
nx3.xml.HeadXML.XHEAD_TYPE = "type";
nx3.xml.HeadXML.XHEAD_LEVEL = "level";
nx3.xml.HeadXML.XHEAD_SIGN = "sign";
nx3.xml.HeadXML.XHEAD_TIE = "tie";
nx3.xml.HeadXML.XHEAD_TIETO = "tieto";
nx3.xml.HeadXML.XHEAD_TIE_DIRECTION = "tiedirection";
nx3.xml.HeadXML.XHEAD_TIE_LEVEL = "tielevel";
nx3.xml.NoteXML.XNOTE = "note";
nx3.xml.NoteXML.XPAUSE = "pause";
nx3.xml.NoteXML.XPAUSE_LEVEL = "level";
nx3.xml.NoteXML.XLYRIC = "lyric";
nx3.xml.NoteXML.XLYRIC_TEXT = "text";
nx3.xml.NoteXML.XUNDEFINED = "undefined";
nx3.xml.NoteXML.XNOTE_TYPE = "type";
nx3.xml.NoteXML.XNOTE_TYPE_NOTE = "note";
nx3.xml.NoteXML.XNOTE_TYPE_NOTATION_VARIANT = "variant";
nx3.xml.NoteXML.XNOTE_VALUE = "value";
nx3.xml.NoteXML.XNOTE_VAL = "val";
nx3.xml.NoteXML.XNOTE_DIRECTION = "direction";
nx3.xml.NoteXML.XNOTE_TYPE_PAUSE = "pause";
nx3.xml.NoteXML.XNOTE_TYPE_NOTE_ARTICULATIONS = "articulations";
nx3.xml.NoteXML.LIST_DELIMITER = ";";
nx3.xml.NoteXML.XNOTE_TYPE_NOTE_ATTRIBUTES = "attributes";
nx3.xml.NoteXML.XOFFSET = "offset";
nx3.xml.NoteXML.XLYRIC_CONTINUATION = "continuation";
nx3.xml.NoteXML.XLYRIC_FORMAT = "format";
nx3.xml.PartXML.XPART = "part";
nx3.xml.PartXML.XPART_TYPE = "type";
nx3.xml.PartXML.XPART_CLEF = "clef";
nx3.xml.PartXML.XPART_CLEFDISPLAY = "clefdisplay";
nx3.xml.PartXML.XPART_KEY = "key";
nx3.xml.PartXML.XPART_KEYDISPLAY = "keydisplay";
nx3.xml.VoiceXML.XVOICE = "voice";
nx3.xml.VoiceXML.XVOICE_TYPE = "type";
nx3.xml.VoiceXML.XVOICE_BARPAUSE = "barpause";
nx3.xml.VoiceXML.XVOICE_DIRECTION = "direction";
Main.main();
})();
