(function ($hx_exports) { "use strict";
$hx_exports.openfl = $hx_exports.openfl || {};
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { };
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.preloader = null;
ApplicationMain.embed = $hx_exports.openfl.embed = function(elementName,width,height,background) {
	var element = null;
	if(elementName != null) element = window.document.getElementById(elementName);
	var color = null;
	if(background != null) {
		background = StringTools.replace(background,"#","");
		if(background.indexOf("0x") > -1) color = Std.parseInt(background); else color = Std.parseInt("0x" + background);
	}
	openfl.Lib.create(element,width,height,color);
	ApplicationMain.preloader = new NMEPreloader();
	openfl.Lib.current.addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	var sounds = [];
	var id;
	if(ApplicationMain.total == 0) ApplicationMain.start(); else {
		var $it0 = ApplicationMain.urlLoaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var urlLoader = ApplicationMain.urlLoaders.get(path);
			urlLoader.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader.load(new openfl.net.URLRequest(path));
		}
		var _g = 0;
		while(_g < sounds.length) {
			var soundName = sounds[_g];
			++_g;
			var sound = new openfl.media.Sound();
			sound.addEventListener(openfl.events.Event.COMPLETE,ApplicationMain.sound_onComplete);
			sound.addEventListener(openfl.events.IOErrorEvent.IO_ERROR,ApplicationMain.sound_onIOError);
			sound.load(new openfl.net.URLRequest(soundName + ".ogg"));
		}
	}
};
ApplicationMain.main = function() {
};
ApplicationMain.start = function() {
	ApplicationMain.preloader.addEventListener(openfl.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	ApplicationMain.preloader.onLoaded();
};
ApplicationMain.image_onLoad = function(_) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
ApplicationMain.loader_onComplete = function(event) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
ApplicationMain.preloader_onComplete = function(event) {
	ApplicationMain.preloader.removeEventListener(openfl.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	openfl.Lib.current.removeChild(ApplicationMain.preloader);
	ApplicationMain.preloader = null;
	var hasMain = false;
	var _g = 0;
	var _g1 = Type.getClassFields(Main);
	while(_g < _g1.length) {
		var methodName = _g1[_g];
		++_g;
		if(methodName == "main") {
			hasMain = true;
			break;
		}
	}
	if(hasMain) Reflect.callMethod(Main,Reflect.field(Main,"main"),[]); else {
		var instance = Type.createInstance(DocumentClass,[]);
		if(js.Boot.__instanceof(instance,openfl.display.DisplayObject)) openfl.Lib.current.addChild(instance); else {
			haxe.Log.trace("Error: No entry point found",{ fileName : "ApplicationMain.hx", lineNumber : 180, className : "ApplicationMain", methodName : "preloader_onComplete"});
			haxe.Log.trace("If you are using DCE with a static main, you may need to @:keep the function",{ fileName : "ApplicationMain.hx", lineNumber : 181, className : "ApplicationMain", methodName : "preloader_onComplete"});
		}
	}
};
ApplicationMain.sound_onComplete = function(event) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
ApplicationMain.sound_onIOError = function(event) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
var Main = function() {
	var original = new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead()])]);
	var differ = new cx.diff.Differ(original);
	var mod1 = new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,3)])]);
	differ.modify(mod1,"change head level");
	var mod2 = new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,3),new nx3.NHead(null,5)])]);
	differ.modify(mod2,"add head");
	var restore1 = differ.undo().obj;
	haxe.Log.trace(Std.string(mod1) == Std.string(restore1),{ fileName : "Main.hx", lineNumber : 32, className : "Main", methodName : "new"});
	var restoreOriginal = differ.undo().obj;
	haxe.Log.trace(Std.string(original) == Std.string(restoreOriginal),{ fileName : "Main.hx", lineNumber : 35, className : "Main", methodName : "new"});
};
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.prototype = {
	__class__: Main
};
var DocumentClass = function() {
	Main.call(this);
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = ["DocumentClass"];
DocumentClass.__super__ = Main;
DocumentClass.prototype = $extend(Main.prototype,{
	__class__: DocumentClass
});
var openfl = {};
openfl.AssetLibrary = function() {
};
$hxClasses["openfl.AssetLibrary"] = openfl.AssetLibrary;
openfl.AssetLibrary.__name__ = ["openfl","AssetLibrary"];
openfl.AssetLibrary.prototype = {
	exists: function(id,type) {
		return false;
	}
	,getBitmapData: function(id) {
		return null;
	}
	,getBytes: function(id) {
		return null;
	}
	,getFont: function(id) {
		return null;
	}
	,getMovieClip: function(id) {
		return null;
	}
	,getMusic: function(id) {
		return this.getSound(id);
	}
	,getPath: function(id) {
		return null;
	}
	,getSound: function(id) {
		return null;
	}
	,getText: function(id) {
		var bytes = this.getBytes(id);
		if(bytes == null) return null; else return bytes.readUTFBytes(bytes.length);
	}
	,isLocal: function(id,type) {
		return true;
	}
	,list: function(type) {
		return null;
	}
	,load: function(handler) {
		handler(this);
	}
	,loadBitmapData: function(id,handler) {
		handler(this.getBitmapData(id));
	}
	,loadBytes: function(id,handler) {
		handler(this.getBytes(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadMovieClip: function(id,handler) {
		handler(this.getMovieClip(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,loadText: function(id,handler) {
		var callback = function(bytes) {
			if(bytes == null) handler(null); else handler(bytes.readUTFBytes(bytes.length));
		};
		this.loadBytes(id,callback);
	}
	,__class__: openfl.AssetLibrary
};
var DefaultAssetLibrary = function() {
	this.type = new haxe.ds.StringMap();
	this.path = new haxe.ds.StringMap();
	this.className = new haxe.ds.StringMap();
	openfl.AssetLibrary.call(this);
	var id;
};
$hxClasses["DefaultAssetLibrary"] = DefaultAssetLibrary;
DefaultAssetLibrary.__name__ = ["DefaultAssetLibrary"];
DefaultAssetLibrary.__super__ = openfl.AssetLibrary;
DefaultAssetLibrary.prototype = $extend(openfl.AssetLibrary.prototype,{
	exists: function(id,type) {
		var assetType = this.type.get(id);
		if(assetType != null) {
			if(assetType == type || (type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC) && (assetType == openfl.AssetType.MUSIC || assetType == openfl.AssetType.SOUND)) return true;
			if(type == openfl.AssetType.BINARY || type == null) return true;
		}
		return false;
	}
	,getBitmapData: function(id) {
		return openfl.display.BitmapData.fromImage((function($this) {
			var $r;
			var key = $this.path.get(id);
			$r = ApplicationMain.images.get(key);
			return $r;
		}(this)));
	}
	,getBytes: function(id) {
		var bytes = null;
		var data = ((function($this) {
			var $r;
			var key = $this.path.get(id);
			$r = ApplicationMain.urlLoaders.get(key);
			return $r;
		}(this))).data;
		if(typeof(data) == "string") {
			bytes = new openfl.utils.ByteArray();
			bytes.writeUTFBytes(data);
		} else if(js.Boot.__instanceof(data,openfl.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes;
		} else return null;
	}
	,getFont: function(id) {
		return js.Boot.__cast(Type.createInstance(this.className.get(id),[]) , openfl.text.Font);
	}
	,getMusic: function(id) {
		var sound = new openfl.media.Sound();
		sound.__buffer = true;
		sound.load(new openfl.net.URLRequest(this.path.get(id)));
		return sound;
	}
	,getPath: function(id) {
		return this.path.get(id);
	}
	,getSound: function(id) {
		return new openfl.media.Sound(new openfl.net.URLRequest(this.path.get(id)));
	}
	,getText: function(id) {
		var bytes = null;
		var data = ((function($this) {
			var $r;
			var key = $this.path.get(id);
			$r = ApplicationMain.urlLoaders.get(key);
			return $r;
		}(this))).data;
		if(typeof(data) == "string") return data; else if(js.Boot.__instanceof(data,openfl.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes.readUTFBytes(bytes.length);
		} else return null;
	}
	,isLocal: function(id,type) {
		return true;
	}
	,list: function(type) {
		var items = [];
		var $it0 = this.type.keys();
		while( $it0.hasNext() ) {
			var id = $it0.next();
			if(type == null || this.exists(id,type)) items.push(id);
		}
		return items;
	}
	,loadBitmapData: function(id,handler) {
		if(this.path.exists(id)) {
			var loader = new openfl.display.Loader();
			loader.contentLoaderInfo.addEventListener(openfl.events.Event.COMPLETE,function(event) {
				handler((js.Boot.__cast(event.currentTarget.content , openfl.display.Bitmap)).bitmapData);
			});
			loader.load(new openfl.net.URLRequest(this.path.get(id)));
		} else handler(this.getBitmapData(id));
	}
	,loadBytes: function(id,handler) {
		if(this.path.exists(id)) {
			var loader = new openfl.net.URLLoader();
			loader.addEventListener(openfl.events.Event.COMPLETE,function(event) {
				var bytes = new openfl.utils.ByteArray();
				bytes.writeUTFBytes(event.currentTarget.data);
				bytes.position = 0;
				handler(bytes);
			});
			loader.load(new openfl.net.URLRequest(this.path.get(id)));
		} else handler(this.getBytes(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,loadText: function(id,handler) {
		if(this.path.exists(id)) {
			var loader = new openfl.net.URLLoader();
			loader.addEventListener(openfl.events.Event.COMPLETE,function(event) {
				handler(event.currentTarget.data);
			});
			loader.load(new openfl.net.URLRequest(this.path.get(id)));
		} else handler(this.getText(id));
	}
	,__class__: DefaultAssetLibrary
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) return this.r.m[n]; else throw "EReg::matched";
	}
	,split: function(s) {
		var d = "#__delim__#";
		return s.replace(this.r,d).split(d);
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,__class__: EReg
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
};
HxOverrides.strDate = function(s) {
	var _g = s.length;
	switch(_g) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k1 = s.split("-");
		return new Date(k1[0],k1[1] - 1,k1[2],0,0,0);
	case 19:
		var k2 = s.split(" ");
		var y = k2[0].split("-");
		var t = k2[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
};
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
$hxClasses["Lambda"] = Lambda;
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
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
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
var IMap = function() { };
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
IMap.prototype = {
	__class__: IMap
};
Math.__name__ = ["Math"];
openfl.events = {};
openfl.events.IEventDispatcher = function() { };
$hxClasses["openfl.events.IEventDispatcher"] = openfl.events.IEventDispatcher;
openfl.events.IEventDispatcher.__name__ = ["openfl","events","IEventDispatcher"];
openfl.events.IEventDispatcher.prototype = {
	__class__: openfl.events.IEventDispatcher
};
openfl.events.EventDispatcher = function(target) {
	if(target != null) this.__targetDispatcher = target;
};
$hxClasses["openfl.events.EventDispatcher"] = openfl.events.EventDispatcher;
openfl.events.EventDispatcher.__name__ = ["openfl","events","EventDispatcher"];
openfl.events.EventDispatcher.__interfaces__ = [openfl.events.IEventDispatcher];
openfl.events.EventDispatcher.__sortByPriority = function(l1,l2) {
	if(l1.priority == l2.priority) return 0; else if(l1.priority > l2.priority) return -1; else return 1;
};
openfl.events.EventDispatcher.prototype = {
	addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		if(this.__eventMap == null) this.__eventMap = new haxe.ds.StringMap();
		if(!this.__eventMap.exists(type)) {
			var list = new Array();
			list.push(new openfl.events._EventDispatcher.Listener(listener,useCapture,priority));
			this.__eventMap.set(type,list);
		} else {
			var list1 = this.__eventMap.get(type);
			list1.push(new openfl.events._EventDispatcher.Listener(listener,useCapture,priority));
			list1.sort(openfl.events.EventDispatcher.__sortByPriority);
		}
	}
	,dispatchEvent: function(event) {
		if(this.__eventMap == null || event == null) return false;
		var list = this.__eventMap.get(event.type);
		if(list == null) return false;
		if(event.target == null) {
			if(this.__targetDispatcher != null) event.target = this.__targetDispatcher; else event.target = this;
		}
		event.currentTarget = this;
		var capture = event.eventPhase == 0;
		var index = 0;
		var listener;
		while(index < list.length) {
			listener = list[index];
			if(listener.useCapture == capture) {
				listener.callback(event);
				if(event.__isCancelledNow) return true;
			}
			if(listener == list[index]) index++;
		}
		return true;
	}
	,hasEventListener: function(type) {
		if(this.__eventMap == null) return false;
		return this.__eventMap.exists(type);
	}
	,removeEventListener: function(type,listener,capture) {
		if(capture == null) capture = false;
		if(this.__eventMap == null) return;
		var list = this.__eventMap.get(type);
		if(list == null) return;
		var _g1 = 0;
		var _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].match(listener,capture)) {
				list.splice(i,1);
				break;
			}
		}
		if(list.length == 0) this.__eventMap.remove(type);
		if(!this.__eventMap.iterator().hasNext()) this.__eventMap = null;
	}
	,toString: function() {
		var full = Type.getClassName(Type.getClass(this));
		var $short = full.split(".").pop();
		return "[object " + $short + "]";
	}
	,willTrigger: function(type) {
		return this.hasEventListener(type);
	}
	,__class__: openfl.events.EventDispatcher
};
openfl.display = {};
openfl.display.IBitmapDrawable = function() { };
$hxClasses["openfl.display.IBitmapDrawable"] = openfl.display.IBitmapDrawable;
openfl.display.IBitmapDrawable.__name__ = ["openfl","display","IBitmapDrawable"];
openfl.display.IBitmapDrawable.prototype = {
	__class__: openfl.display.IBitmapDrawable
};
openfl.display.DisplayObject = function() {
	openfl.events.EventDispatcher.call(this);
	this.set_alpha(1);
	this.set_rotation(0);
	this.set_scaleX(1);
	this.set_scaleY(1);
	this.set_visible(true);
	this.set_x(0);
	this.set_y(0);
	this.__worldAlpha = 1;
	this.__worldTransform = new openfl.geom.Matrix();
	this.set_name("instance" + ++openfl.display.DisplayObject.__instanceCount);
};
$hxClasses["openfl.display.DisplayObject"] = openfl.display.DisplayObject;
openfl.display.DisplayObject.__name__ = ["openfl","display","DisplayObject"];
openfl.display.DisplayObject.__interfaces__ = [openfl.display.IBitmapDrawable];
openfl.display.DisplayObject.__super__ = openfl.events.EventDispatcher;
openfl.display.DisplayObject.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	dispatchEvent: function(event) {
		var result = openfl.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
		if(event.__isCancelled) return true;
		if(event.bubbles && this.parent != null && this.parent != this) {
			event.eventPhase = 2;
			this.parent.dispatchEvent(event);
		}
		return result;
	}
	,getBounds: function(targetCoordinateSpace) {
		var matrix = this.__getTransform();
		if(targetCoordinateSpace != null) {
			matrix = new openfl.geom.Matrix(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			matrix.concat(targetCoordinateSpace.__worldTransform.clone().invert());
		}
		var bounds = new openfl.geom.Rectangle();
		this.__getBounds(bounds,matrix);
		return bounds;
	}
	,getRect: function(targetCoordinateSpace) {
		return this.getBounds(targetCoordinateSpace);
	}
	,globalToLocal: function(pos) {
		return this.__getTransform().clone().invert().transformPoint(pos);
	}
	,hitTestObject: function(obj) {
		return false;
	}
	,hitTestPoint: function(x,y,shapeFlag) {
		if(shapeFlag == null) shapeFlag = false;
		return false;
	}
	,localToGlobal: function(point) {
		return this.__getTransform().transformPoint(point);
	}
	,__applyStyle: function(renderSession,setTransform,setAlpha,setClip) {
		if(setTransform && this.__worldTransformChanged) this.__style.setProperty(renderSession.transformProperty,this.__worldTransform.to3DString(renderSession.roundPixels),null);
		if(this.__worldZ != ++renderSession.z) {
			this.__worldZ = renderSession.z;
			this.__style.setProperty("z-index",Std.string(this.__worldZ),null);
		}
		if(setAlpha && this.__worldAlphaChanged) {
			if(this.__worldAlpha < 1) this.__style.setProperty("opacity",Std.string(this.__worldAlpha),null); else this.__style.removeProperty("opacity");
		}
		if(setClip && this.__worldClipChanged) {
			if(this.__worldClip == null) this.__style.removeProperty("clip"); else {
				var clip = this.__worldClip.transform(this.__worldTransform.clone().invert());
				this.__style.setProperty("clip","rect(" + clip.y + "px, " + clip.get_right() + "px, " + clip.get_bottom() + "px, " + clip.x + "px)",null);
			}
		}
	}
	,__broadcast: function(event,notifyChilden) {
		if(this.__eventMap != null && this.hasEventListener(event.type)) {
			var result = openfl.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
			if(event.__isCancelled) return true;
			return result;
		}
		return false;
	}
	,__getBounds: function(rect,matrix) {
	}
	,__getInteractive: function(stack) {
	}
	,__getLocalBounds: function(rect) {
		this.__getTransform();
		this.__getBounds(rect,new openfl.geom.Matrix());
	}
	,__getTransform: function() {
		if(openfl.display.DisplayObject.__worldTransformDirty > 0) {
			var list = [];
			var current = this;
			var transformDirty = this.__transformDirty;
			while(current.parent != null) {
				list.push(current);
				current = current.parent;
				if(current.__transformDirty) transformDirty = true;
			}
			if(transformDirty) {
				var i = list.length;
				while(--i >= 0) list[i].__update(true,false);
			}
		}
		return this.__worldTransform;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		return false;
	}
	,__initializeElement: function(element,renderSession) {
		this.__style = element.style;
		this.__style.setProperty("position","absolute",null);
		this.__style.setProperty("top","0",null);
		this.__style.setProperty("left","0",null);
		this.__style.setProperty(renderSession.transformOriginProperty,"0 0 0",null);
		renderSession.element.appendChild(element);
		this.__worldAlphaChanged = true;
		this.__worldClipChanged = true;
		this.__worldTransformChanged = true;
		this.__worldVisibleChanged = true;
		this.__worldZ = -1;
	}
	,__renderCanvas: function(renderSession) {
	}
	,__renderDOM: function(renderSession) {
	}
	,__renderGL: function(renderSession) {
	}
	,__renderMask: function(renderSession) {
	}
	,__setStageReference: function(stage) {
		if(this.stage != stage) {
			if(this.stage != null) this.dispatchEvent(new openfl.events.Event(openfl.events.Event.REMOVED_FROM_STAGE,false,false));
			this.stage = stage;
			if(stage != null) this.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED_TO_STAGE,false,false));
		}
	}
	,__setRenderDirty: function() {
		if(!this.__renderDirty) {
			this.__renderDirty = true;
			openfl.display.DisplayObject.__worldRenderDirty++;
		}
	}
	,__setTransformDirty: function() {
		if(!this.__transformDirty) {
			this.__transformDirty = true;
			openfl.display.DisplayObject.__worldTransformDirty++;
		}
	}
	,__update: function(transformOnly,updateChildren) {
		this.__renderable = this.get_visible() && this.get_scaleX() != 0 && this.get_scaleY() != 0 && !this.__isMask;
		if(this.get_rotation() != this.__rotationCache) {
			this.__rotationCache = this.get_rotation();
			var radians = this.get_rotation() * (Math.PI / 180);
			this.__rotationSine = Math.sin(radians);
			this.__rotationCosine = Math.cos(radians);
		}
		if(this.parent != null) {
			var parentTransform = this.parent.__worldTransform;
			var a00 = this.__rotationCosine * this.get_scaleX();
			var a01 = this.__rotationSine * this.get_scaleX();
			var a10 = -this.__rotationSine * this.get_scaleY();
			var a11 = this.__rotationCosine * this.get_scaleY();
			var b00 = parentTransform.a;
			var b01 = parentTransform.b;
			var b10 = parentTransform.c;
			var b11 = parentTransform.d;
			this.__worldTransform.a = a00 * b00 + a01 * b10;
			this.__worldTransform.b = a00 * b01 + a01 * b11;
			this.__worldTransform.c = a10 * b00 + a11 * b10;
			this.__worldTransform.d = a10 * b01 + a11 * b11;
			if(this.get_scrollRect() == null) {
				this.__worldTransform.tx = this.get_x() * b00 + this.get_y() * b10 + parentTransform.tx;
				this.__worldTransform.ty = this.get_x() * b01 + this.get_y() * b11 + parentTransform.ty;
			} else {
				this.__worldTransform.tx = (this.get_x() - this.get_scrollRect().x) * b00 + (this.get_y() - this.get_scrollRect().y) * b10 + parentTransform.tx;
				this.__worldTransform.ty = (this.get_x() - this.get_scrollRect().x) * b01 + (this.get_y() - this.get_scrollRect().y) * b11 + parentTransform.ty;
			}
		} else {
			this.__worldTransform.a = this.__rotationCosine * this.get_scaleX();
			this.__worldTransform.c = -this.__rotationSine * this.get_scaleY();
			this.__worldTransform.b = this.__rotationSine * this.get_scaleX();
			this.__worldTransform.d = this.__rotationCosine * this.get_scaleY();
			if(this.get_scrollRect() == null) {
				this.__worldTransform.tx = this.get_x();
				this.__worldTransform.ty = this.get_y();
			} else {
				this.__worldTransform.tx = this.get_y() - this.get_scrollRect().x;
				this.__worldTransform.ty = this.get_y() - this.get_scrollRect().y;
			}
		}
		if(updateChildren && this.__transformDirty) {
			this.__transformDirty = false;
			openfl.display.DisplayObject.__worldTransformDirty--;
		}
		if(!transformOnly) {
			if(this.parent != null) this.__worldAlpha = this.get_alpha() * this.parent.__worldAlpha; else this.__worldAlpha = this.get_alpha();
			if(updateChildren && this.__renderDirty) this.__renderDirty = false;
		}
	}
	,__updateChildren: function(transformOnly) {
		this.__renderable = this.get_visible() && this.get_scaleX() != 0 && this.get_scaleY() != 0 && !this.__isMask;
		if(!this.__renderable && !this.__isMask) return;
		this.__worldAlpha = this.get_alpha();
		if(this.__transformDirty) {
			this.__transformDirty = false;
			openfl.display.DisplayObject.__worldTransformDirty--;
		}
	}
	,get_alpha: function() {
		return this.__alpha;
	}
	,set_alpha: function(value) {
		if(value != this.__alpha) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
		}
		return this.__alpha = value;
	}
	,get_filters: function() {
		if(this.__filters == null) return new Array(); else return this.__filters.slice();
	}
	,set_filters: function(value) {
		return value;
	}
	,get_height: function() {
		var bounds = new openfl.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new openfl.geom.Matrix());
		return bounds.height * this.get_scaleY();
	}
	,set_height: function(value) {
		var bounds = new openfl.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new openfl.geom.Matrix());
		if(value != bounds.height) this.set_scaleY(value / bounds.height); else this.set_scaleY(1);
		return value;
	}
	,get_mask: function() {
		return this.__mask;
	}
	,set_mask: function(value) {
		if(value != this.__mask) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
		}
		if(this.__mask != null) this.__mask.__isMask = false;
		if(value != null) value.__isMask = true;
		return this.__mask = value;
	}
	,get_mouseX: function() {
		if(this.stage != null) return this.globalToLocal(new openfl.geom.Point(this.stage.__mouseX,0)).x;
		return 0;
	}
	,get_mouseY: function() {
		if(this.stage != null) return this.globalToLocal(new openfl.geom.Point(0,this.stage.__mouseY)).y;
		return 0;
	}
	,get_name: function() {
		return this.__name;
	}
	,set_name: function(value) {
		return this.__name = value;
	}
	,get_root: function() {
		if(this.stage != null) return openfl.Lib.current;
		return null;
	}
	,get_rotation: function() {
		return this.__rotation;
	}
	,set_rotation: function(value) {
		if(value != this.__rotation) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__rotation = value;
	}
	,get_scaleX: function() {
		return this.__scaleX;
	}
	,set_scaleX: function(value) {
		if(value != this.__scaleX) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__scaleX = value;
	}
	,get_scaleY: function() {
		return this.__scaleY;
	}
	,set_scaleY: function(value) {
		if(this.__scaleY != value) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__scaleY = value;
	}
	,get_scrollRect: function() {
		return this.__scrollRect;
	}
	,set_scrollRect: function(value) {
		if(value != this.__scrollRect) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__scrollRect = value;
	}
	,get_transform: function() {
		if(this.__transform == null) this.__transform = new openfl.geom.Transform(this);
		return this.__transform;
	}
	,set_transform: function(value) {
		if(value == null) throw new openfl.errors.TypeError("Parameter transform must be non-null.");
		if(this.__transform == null) this.__transform = new openfl.geom.Transform(this);
		if(!this.__transformDirty) {
			this.__transformDirty = true;
			openfl.display.DisplayObject.__worldTransformDirty++;
		}
		this.__transform.set_matrix(value.get_matrix().clone());
		this.__transform.colorTransform = new openfl.geom.ColorTransform(value.colorTransform.redMultiplier,value.colorTransform.greenMultiplier,value.colorTransform.blueMultiplier,value.colorTransform.alphaMultiplier,value.colorTransform.redOffset,value.colorTransform.greenOffset,value.colorTransform.blueOffset,value.colorTransform.alphaOffset);
		return this.__transform;
	}
	,get_visible: function() {
		return this.__visible;
	}
	,set_visible: function(value) {
		if(value != this.__visible) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
		}
		return this.__visible = value;
	}
	,get_width: function() {
		var bounds = new openfl.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new openfl.geom.Matrix());
		return bounds.width * this.get_scaleX();
	}
	,set_width: function(value) {
		var bounds = new openfl.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new openfl.geom.Matrix());
		if(value != bounds.width) this.set_scaleX(value / bounds.width); else this.set_scaleX(1);
		return value;
	}
	,get_x: function() {
		return this.__x;
	}
	,set_x: function(value) {
		if(value != this.__x) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__x = value;
	}
	,get_y: function() {
		return this.__y;
	}
	,set_y: function(value) {
		if(value != this.__y) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__y = value;
	}
	,__class__: openfl.display.DisplayObject
});
openfl.display.InteractiveObject = function() {
	openfl.display.DisplayObject.call(this);
	this.doubleClickEnabled = false;
	this.mouseEnabled = true;
	this.needsSoftKeyboard = false;
	this.tabEnabled = true;
	this.tabIndex = -1;
};
$hxClasses["openfl.display.InteractiveObject"] = openfl.display.InteractiveObject;
openfl.display.InteractiveObject.__name__ = ["openfl","display","InteractiveObject"];
openfl.display.InteractiveObject.__super__ = openfl.display.DisplayObject;
openfl.display.InteractiveObject.prototype = $extend(openfl.display.DisplayObject.prototype,{
	requestSoftKeyboard: function() {
		openfl.Lib.notImplemented("InteractiveObject.requestSoftKeyboard");
		return false;
	}
	,__getInteractive: function(stack) {
		stack.push(this);
		if(this.parent != null) this.parent.__getInteractive(stack);
	}
	,__class__: openfl.display.InteractiveObject
});
openfl.display.DisplayObjectContainer = function() {
	openfl.display.InteractiveObject.call(this);
	this.mouseChildren = true;
	this.__children = new Array();
	this.__removedChildren = new Array();
};
$hxClasses["openfl.display.DisplayObjectContainer"] = openfl.display.DisplayObjectContainer;
openfl.display.DisplayObjectContainer.__name__ = ["openfl","display","DisplayObjectContainer"];
openfl.display.DisplayObjectContainer.__super__ = openfl.display.InteractiveObject;
openfl.display.DisplayObjectContainer.prototype = $extend(openfl.display.InteractiveObject.prototype,{
	addChild: function(child) {
		if(child != null) {
			if(child.parent != null) child.parent.removeChild(child);
			this.__children.push(child);
			child.parent = this;
			if(this.stage != null) child.__setStageReference(this.stage);
			if(!child.__transformDirty) {
				child.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
			child.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED,true));
		}
		return child;
	}
	,addChildAt: function(child,index) {
		if(index > this.__children.length || index < 0) throw "Invalid index position " + index;
		if(child.parent == this) HxOverrides.remove(this.__children,child); else {
			if(child.parent != null) child.parent.removeChild(child);
			child.parent = this;
			if(this.stage != null) child.__setStageReference(this.stage);
			if(!child.__transformDirty) {
				child.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
			child.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED,true));
		}
		this.__children.splice(index,0,child);
		return child;
	}
	,areInaccessibleObjectsUnderPoint: function(point) {
		return false;
	}
	,contains: function(child) {
		return HxOverrides.indexOf(this.__children,child,0) > -1;
	}
	,getChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.__children[index];
		return null;
	}
	,getChildByName: function(name) {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_name() == name) return child;
		}
		return null;
	}
	,getChildIndex: function(child) {
		var _g1 = 0;
		var _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__children[i] == child) return i;
		}
		return -1;
	}
	,getObjectsUnderPoint: function(point) {
		point = this.localToGlobal(point);
		var stack = new Array();
		this.__hitTest(point.x,point.y,false,stack,false);
		stack.shift();
		return stack;
	}
	,removeChild: function(child) {
		if(child != null && child.parent == this) {
			if(this.stage != null) child.__setStageReference(null);
			child.parent = null;
			HxOverrides.remove(this.__children,child);
			this.__removedChildren.push(child);
			if(!child.__transformDirty) {
				child.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
			child.dispatchEvent(new openfl.events.Event(openfl.events.Event.REMOVED,true));
		}
		return child;
	}
	,removeChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.removeChild(this.__children[index]);
		return null;
	}
	,removeChildren: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 2147483647;
		if(beginIndex == null) beginIndex = 0;
		if(endIndex == 2147483647) {
			endIndex = this.__children.length - 1;
			if(endIndex < 0) return;
		}
		if(beginIndex > this.__children.length - 1) return; else if(endIndex < beginIndex || beginIndex < 0 || endIndex > this.__children.length) throw new openfl.errors.RangeError("The supplied index is out of bounds.");
		var numRemovals = endIndex - beginIndex;
		while(numRemovals >= 0) {
			this.removeChildAt(beginIndex);
			numRemovals--;
		}
	}
	,setChildIndex: function(child,index) {
		if(index >= 0 && index <= this.__children.length && child.parent == this) {
			HxOverrides.remove(this.__children,child);
			this.__children.splice(index,0,child);
		}
	}
	,swapChildren: function(child1,child2) {
		if(child1.parent == this && child2.parent == this) {
			var index1 = HxOverrides.indexOf(this.__children,child1,0);
			var index2 = HxOverrides.indexOf(this.__children,child2,0);
			this.__children[index1] = child2;
			this.__children[index2] = child1;
		}
	}
	,swapChildrenAt: function(child1,child2) {
		var swap = this.__children[child1];
		this.__children[child1] = this.__children[child2];
		this.__children[child2] = swap;
		swap = null;
	}
	,__broadcast: function(event,notifyChilden) {
		if(event.target == null) event.target = this;
		if(notifyChilden) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__broadcast(event,true);
				if(event.__isCancelled) return true;
			}
		}
		return openfl.display.InteractiveObject.prototype.__broadcast.call(this,event,notifyChilden);
	}
	,__getBounds: function(rect,matrix) {
		if(this.__children.length == 0) return;
		var matrixCache = null;
		if(matrix != null) {
			matrixCache = this.__worldTransform;
			this.__worldTransform = matrix;
			this.__updateChildren(true);
		}
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(!child.__renderable) continue;
			child.__getBounds(rect,null);
		}
		if(matrix != null) {
			this.__worldTransform = matrixCache;
			this.__updateChildren(true);
		}
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || interactiveOnly && !this.mouseEnabled) return false;
		var i = this.__children.length;
		if(interactiveOnly && (stack == null || !this.mouseChildren)) {
			while(--i >= 0) if(this.__children[i].__hitTest(x,y,shapeFlag,null,interactiveOnly)) {
				if(stack != null) stack.push(this);
				return true;
			}
		} else if(stack != null) {
			var length = stack.length;
			while(--i >= 0) if(this.__children[i].__hitTest(x,y,shapeFlag,stack,interactiveOnly)) {
				stack.splice(length,0,this);
				return true;
			}
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.get_scrollRect() != null) renderSession.maskManager.pushRect(this.get_scrollRect(),this.__worldTransform);
		if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderCanvas(renderSession);
		}
		this.__removedChildren = [];
		if(this.__mask != null) renderSession.maskManager.popMask();
		if(this.get_scrollRect() != null) renderSession.maskManager.popMask();
	}
	,__renderDOM: function(renderSession) {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderDOM(renderSession);
		}
		var _g2 = 0;
		var _g11 = this.__removedChildren;
		while(_g2 < _g11.length) {
			var orphan = _g11[_g2];
			++_g2;
			if(orphan.stage == null) orphan.__renderDOM(renderSession);
		}
		this.__removedChildren = [];
	}
	,__renderGL: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderGL(renderSession);
		}
		this.__removedChildren = [];
	}
	,__renderMask: function(renderSession) {
		var bounds = new openfl.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new openfl.geom.Matrix());
		renderSession.context.rect(0,0,bounds.width,bounds.height);
	}
	,__setStageReference: function(stage) {
		if(this.stage != stage) {
			if(this.stage != null) this.dispatchEvent(new openfl.events.Event(openfl.events.Event.REMOVED_FROM_STAGE,false,false));
			this.stage = stage;
			if(stage != null) this.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED_TO_STAGE,false,false));
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__setStageReference(stage);
			}
		}
	}
	,__update: function(transformOnly,updateChildren) {
		openfl.display.InteractiveObject.prototype.__update.call(this,transformOnly,updateChildren);
		if(!this.__renderable) return;
		if(updateChildren) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__update(transformOnly,true);
			}
		}
	}
	,__updateChildren: function(transformOnly) {
		openfl.display.InteractiveObject.prototype.__updateChildren.call(this,transformOnly);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__update(transformOnly,true);
		}
	}
	,get_numChildren: function() {
		return this.__children.length;
	}
	,__class__: openfl.display.DisplayObjectContainer
});
openfl.display.Sprite = function() {
	openfl.display.DisplayObjectContainer.call(this);
	this.buttonMode = false;
	this.useHandCursor = true;
};
$hxClasses["openfl.display.Sprite"] = openfl.display.Sprite;
openfl.display.Sprite.__name__ = ["openfl","display","Sprite"];
openfl.display.Sprite.__super__ = openfl.display.DisplayObjectContainer;
openfl.display.Sprite.prototype = $extend(openfl.display.DisplayObjectContainer.prototype,{
	startDrag: function(lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		if(this.stage != null) this.stage.__startDrag(this,lockCenter,bounds);
	}
	,stopDrag: function() {
		if(this.stage != null) this.stage.__stopDrag(this);
	}
	,__getBounds: function(rect,matrix) {
		openfl.display.DisplayObjectContainer.prototype.__getBounds.call(this,rect,matrix);
		if(this.__graphics != null) this.__graphics.__getBounds(rect,matrix != null?matrix:this.__worldTransform);
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || interactiveOnly && !this.mouseEnabled) return false;
		var length = 0;
		if(stack != null) length = stack.length;
		if(openfl.display.DisplayObjectContainer.prototype.__hitTest.call(this,x,y,shapeFlag,stack,interactiveOnly)) return true; else if(this.__graphics != null && this.__graphics.__hitTest(x,y,shapeFlag,this.__worldTransform)) {
			if(stack != null) stack.splice(length,0,this);
			return true;
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.__graphics != null) {
			this.__graphics.__render();
			if(this.__graphics.__canvas != null) {
				if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
				var context = renderSession.context;
				context.globalAlpha = this.__worldAlpha;
				var transform = this.__worldTransform;
				if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
				if(this.get_scrollRect() == null) context.drawImage(this.__graphics.__canvas,this.__graphics.__bounds.x,this.__graphics.__bounds.y); else context.drawImage(this.__graphics.__canvas,this.get_scrollRect().x - this.__graphics.__bounds.x,this.get_scrollRect().y - this.__graphics.__bounds.y,this.get_scrollRect().width,this.get_scrollRect().height,this.__graphics.__bounds.x + this.get_scrollRect().x,this.__graphics.__bounds.y + this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height);
				if(this.__mask != null) renderSession.maskManager.popMask();
			}
		}
		openfl.display.DisplayObjectContainer.prototype.__renderCanvas.call(this,renderSession);
	}
	,__renderDOM: function(renderSession) {
		if(this.stage != null && this.__worldVisible && this.__renderable && this.__graphics != null) {
			if(this.__graphics.__dirty || this.__worldAlphaChanged || this.__canvas == null && this.__graphics.__canvas != null) {
				this.__graphics.__render();
				if(this.__graphics.__canvas != null) {
					if(this.__canvas == null) {
						this.__canvas = window.document.createElement("canvas");
						this.__canvasContext = this.__canvas.getContext("2d");
						this.__initializeElement(this.__canvas,renderSession);
					}
					this.__canvas.width = this.__graphics.__canvas.width;
					this.__canvas.height = this.__graphics.__canvas.height;
					this.__canvasContext.globalAlpha = this.__worldAlpha;
					this.__canvasContext.drawImage(this.__graphics.__canvas,0,0);
				} else if(this.__canvas != null) {
					renderSession.element.removeChild(this.__canvas);
					this.__canvas = null;
					this.__style = null;
				}
			}
			if(this.__canvas != null) {
				if(this.__worldTransformChanged) {
					var transform = new openfl.geom.Matrix();
					transform.translate(this.__graphics.__bounds.x,this.__graphics.__bounds.y);
					transform = transform.mult(this.__worldTransform);
					this.__style.setProperty(renderSession.transformProperty,renderSession.roundPixels?"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + (transform.tx | 0) + ", " + (transform.ty | 0) + ", 0, 1)":"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + transform.tx + ", " + transform.ty + ", 0, 1)",null);
				}
				this.__applyStyle(renderSession,false,false,true);
			}
		} else if(this.__canvas != null) {
			renderSession.element.removeChild(this.__canvas);
			this.__canvas = null;
			this.__style = null;
		}
		openfl.display.DisplayObjectContainer.prototype.__renderDOM.call(this,renderSession);
	}
	,__renderMask: function(renderSession) {
		if(this.__graphics != null) this.__graphics.__renderMask(renderSession); else openfl.display.DisplayObjectContainer.prototype.__renderMask.call(this,renderSession);
	}
	,get_graphics: function() {
		if(this.__graphics == null) this.__graphics = new openfl.display.Graphics();
		return this.__graphics;
	}
	,__class__: openfl.display.Sprite
});
var NMEPreloader = function() {
	openfl.display.Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 9;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 3;
	this.outline = new openfl.display.Sprite();
	this.outline.get_graphics().lineStyle(1,color,0.15,true);
	this.outline.get_graphics().drawRoundRect(0,0,width,height,padding * 2,padding * 2);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new openfl.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = openfl.display.Sprite;
NMEPreloader.prototype = $extend(openfl.display.Sprite.prototype,{
	getBackgroundColor: function() {
		return 16777215;
	}
	,getHeight: function() {
		var height = 480;
		if(height > 0) return height; else return openfl.Lib.current.stage.stageHeight;
	}
	,getWidth: function() {
		var width = 800;
		if(width > 0) return width; else return openfl.Lib.current.stage.stageWidth;
	}
	,onInit: function() {
	}
	,onLoaded: function() {
		this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
	}
	,onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded == 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,__class__: NMEPreloader
});
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
};
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compare = function(a,b) {
	if(a == b) return 0; else if(a > b) return 1; else return -1;
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
var Std = function() { };
$hxClasses["Std"] = Std;
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
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	add: function(x) {
		this.b += Std.string(x);
	}
	,addSub: function(s,pos,len) {
		if(len == null) this.b += HxOverrides.substr(s,pos,null); else this.b += HxOverrides.substr(s,pos,len);
	}
	,__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
};
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
};
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
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
};
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
};
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
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
Type.createEnumIndex = function(e,index,params) {
	var c = e.__constructs__[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
};
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	HxOverrides.remove(a,"__name__");
	HxOverrides.remove(a,"__interfaces__");
	HxOverrides.remove(a,"__properties__");
	HxOverrides.remove(a,"__super__");
	HxOverrides.remove(a,"prototype");
	return a;
};
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
};
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c;
		if((v instanceof Array) && v.__enum__ == null) c = Array; else c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
var XmlType = $hxClasses["XmlType"] = { __ename__ : ["XmlType"], __constructs__ : [] };
var Xml = function() {
};
$hxClasses["Xml"] = Xml;
Xml.__name__ = ["Xml"];
Xml.Element = null;
Xml.PCData = null;
Xml.CData = null;
Xml.Comment = null;
Xml.DocType = null;
Xml.ProcessingInstruction = null;
Xml.Document = null;
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
	get_nodeName: function() {
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
$hxClasses["cx.ArrayTools"] = cx.ArrayTools;
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
cx.EnumTools = function() { };
$hxClasses["cx.EnumTools"] = cx.EnumTools;
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
$hxClasses["cx.MapTools"] = cx.MapTools;
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
$hxClasses["cx.MathTools"] = cx.MathTools;
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
$hxClasses["cx.StrTools"] = cx.StrTools;
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
cx.diff = {};
cx.diff.DiffTools = function() { };
$hxClasses["cx.diff.DiffTools"] = cx.diff.DiffTools;
cx.diff.DiffTools.__name__ = ["cx","diff","DiffTools"];
cx.diff.DiffTools.diffObject = function(obj1,obj2) {
	return cx.diff.mtwin.text.Diff.diff(cx.diff.DiffTools.serializeObject(obj1),cx.diff.DiffTools.serializeObject(obj2));
};
cx.diff.DiffTools.patchOject = function(obj,diff) {
	var patchedStr = cx.diff.mtwin.text.Diff.patch(cx.diff.DiffTools.serializeObject(obj),diff);
	return cx.diff.DiffTools.unserializeObject(patchedStr);
};
cx.diff.DiffTools.unpatchObject = function(obj,diff) {
	var unpatchedStr = cx.diff.mtwin.text.Diff.unpatch(cx.diff.DiffTools.serializeObject(obj),diff);
	return cx.diff.DiffTools.unserializeObject(unpatchedStr);
};
cx.diff.DiffTools.serializeObject = function(obj) {
	haxe.Serializer.USE_CACHE = true;
	var sObj = haxe.Serializer.run(obj);
	sObj = StringTools.replace(sObj,":","\n") + "\n";
	return sObj;
};
cx.diff.DiffTools.unserializeObject = function(objString) {
	objString = HxOverrides.substr(objString,0,-1);
	objString = StringTools.replace(objString,"\n",":");
	return haxe.Unserializer.run(objString);
};
cx.diff.Differ = function(originalObject) {
	this.diffinfos = [];
	this.currentObject = { };
	this.modify(originalObject,"Init");
};
$hxClasses["cx.diff.Differ"] = cx.diff.Differ;
cx.diff.Differ.__name__ = ["cx","diff","Differ"];
cx.diff.Differ.prototype = {
	modify: function(modifiedObject,label) {
		if(label == null) label = "Change";
		var diff = cx.diff.DiffTools.diffObject(this.currentObject,modifiedObject);
		var diffstamp = { time : new Date(), label : label, diff : diff};
		this.diffinfos.push(diffstamp);
		this.currentObject = modifiedObject;
	}
	,undo: function() {
		if(this.diffinfos.length <= 1) throw "Nothing to undo";
		var lastdiff = this.diffinfos.pop();
		var restoredObject = cx.diff.DiffTools.unpatchObject(this.currentObject,lastdiff.diff);
		this.currentObject = restoredObject;
		return { info : lastdiff, obj : restoredObject};
	}
	,current: function() {
		return haxe.Unserializer.run(haxe.Serializer.run(this.currentObject));
	}
	,initial: function() {
		var firstdiff = this.diffinfos[0];
		return cx.diff.DiffTools.patchOject({ },firstdiff.diff);
	}
	,getDiffinfos: function() {
		return this.diffinfos;
	}
	,test: function(obj1,obj2) {
		var diff = cx.diff.DiffTools.diffObject(obj1,obj2);
		var patched = cx.diff.DiffTools.patchOject(obj1,diff);
		var unpatched = cx.diff.DiffTools.unpatchObject(obj2,diff);
		haxe.Log.trace(obj1,{ fileName : "Differ.hx", lineNumber : 62, className : "cx.diff.Differ", methodName : "test"});
		haxe.Log.trace(obj2,{ fileName : "Differ.hx", lineNumber : 63, className : "cx.diff.Differ", methodName : "test"});
		haxe.Log.trace(patched,{ fileName : "Differ.hx", lineNumber : 64, className : "cx.diff.Differ", methodName : "test"});
		haxe.Log.trace(unpatched,{ fileName : "Differ.hx", lineNumber : 65, className : "cx.diff.Differ", methodName : "test"});
	}
	,__class__: cx.diff.Differ
};
cx.diff.mtwin = {};
cx.diff.mtwin.text = {};
cx.diff.mtwin.text.Diff = function() { };
$hxClasses["cx.diff.mtwin.text.Diff"] = cx.diff.mtwin.text.Diff;
cx.diff.mtwin.text.Diff.__name__ = ["cx","diff","mtwin","text","Diff"];
cx.diff.mtwin.text.Diff.longestCommonSubsequence = function(src,dst) {
	var m = src.length;
	var n = dst.length;
	var cursor = new Array();
	var c = new Array();
	var _g1 = 0;
	var _g = m + 1;
	while(_g1 < _g) {
		var i = _g1++;
		cursor[i] = new Array();
		cursor[i][n] = 0;
		c[i] = new Array();
		c[i][n] = 0;
	}
	var _g11 = 0;
	var _g2 = n + 1;
	while(_g11 < _g2) {
		var j = _g11++;
		cursor[m][j] = 0;
		c[m][j] = 0;
	}
	var i1 = m - 1;
	while(i1 >= 0) {
		var j1 = n - 1;
		while(j1 >= 0) {
			if(src[i1] == dst[j1]) {
				c[i1][j1] = c[i1 + 1][j1 + 1] + 1;
				cursor[i1][j1] = 3;
			} else if(c[i1 + 1][j1] >= c[i1][j1 + 1]) {
				c[i1][j1] = c[i1 + 1][j1];
				cursor[i1][j1] = 1;
			} else {
				c[i1][j1] = c[i1][j1 + 1];
				cursor[i1][j1] = 2;
			}
			j1--;
		}
		i1--;
	}
	return cursor;
};
cx.diff.mtwin.text.Diff.lcsToStack = function(c) {
	var stack = new List();
	var i = 0;
	var w = c.length - 1;
	var j = 0;
	var h = c[0].length - 1;
	var prev = -1;
	try {
		while(true) {
			if(c[i][j] != prev) stack.add([i,j]);
			prev = c[i][j];
			var _g = c[i][j];
			switch(_g) {
			case 1:
				i++;
				break;
			case 2:
				j++;
				break;
			case 3:
				i++;
				j++;
				break;
			case 0:
				throw "__break__";
				break;
			default:
				throw "Unknown " + c[i][j] + " at " + i + ":" + j;
				i = 0;
				j = 0;
			}
		}
	} catch( e ) { if( e != "__break__" ) throw e; }
	return stack;
};
cx.diff.mtwin.text.Diff.split = function(txt) {
	var res = new Array();
	var old = 0;
	var pos = txt.indexOf("\n",0);
	while(pos != -1) {
		res.push(HxOverrides.substr(txt,old,pos + 1 - old));
		old = pos + 1;
		pos = txt.indexOf("\n",old);
	}
	res.push(HxOverrides.substr(txt,old,txt.length));
	return res;
};
cx.diff.mtwin.text.Diff.diff = function(source,dest) {
	var srcNoNewLine = false;
	var dstNoNewLine = false;
	var sourceLines = cx.diff.mtwin.text.Diff.split(source);
	if(sourceLines[sourceLines.length - 1].length > 0) {
		sourceLines.push("");
		srcNoNewLine = true;
	}
	var destLines = cx.diff.mtwin.text.Diff.split(dest);
	if(destLines[destLines.length - 1].length > 0) {
		destLines.push("");
		dstNoNewLine = true;
	}
	var m = sourceLines.length;
	var n = destLines.length;
	var lcs = cx.diff.mtwin.text.Diff.longestCommonSubsequence(sourceLines,destLines);
	var stack = cx.diff.mtwin.text.Diff.lcsToStack(lcs);
	var cursorKind = function(p) {
		return lcs[p[0]][p[1]];
	};
	var operationAdd = function(after,from,to) {
		var op = new StringBuf();
		if(after == null) op.b += "null"; else op.b += "" + after;
		op.b += "a";
		if(from == to) if(from == null) op.b += "null"; else op.b += "" + from; else {
			if(from == null) op.b += "null"; else op.b += "" + from;
			op.b += ",";
			if(to == null) op.b += "null"; else op.b += "" + to;
		}
		op.b += "\n";
		var _g = from - 1;
		while(_g < to) {
			var i = _g++;
			op.b += "> ";
			op.b += Std.string(destLines[i]);
			if(dstNoNewLine && i == destLines.length - 2) {
				op.b += Std.string(cx.diff.mtwin.text.Diff.NO_NEW_LINE);
				break;
			}
		}
		return op.b;
	};
	var operationDel = function(from1,to1,dest1) {
		var op1 = new StringBuf();
		if(from1 == to1) if(from1 == null) op1.b += "null"; else op1.b += "" + from1; else {
			if(from1 == null) op1.b += "null"; else op1.b += "" + from1;
			op1.b += ",";
			if(to1 == null) op1.b += "null"; else op1.b += "" + to1;
		}
		op1.b += "d";
		if(dest1 == null) op1.b += "null"; else op1.b += "" + dest1;
		op1.b += "\n";
		var _g1 = from1 - 1;
		while(_g1 < to1) {
			var i1 = _g1++;
			op1.b += "< ";
			op1.b += Std.string(sourceLines[i1]);
			if(srcNoNewLine && i1 == sourceLines.length - 2) {
				op1.b += Std.string(cx.diff.mtwin.text.Diff.NO_NEW_LINE);
				break;
			}
		}
		return op1.b;
	};
	var operationUpd = function(from2,to2,byFrom,byTo) {
		var op2 = new StringBuf();
		if(from2 == to2) if(from2 == null) op2.b += "null"; else op2.b += "" + from2; else {
			if(from2 == null) op2.b += "null"; else op2.b += "" + from2;
			op2.b += ",";
			if(to2 == null) op2.b += "null"; else op2.b += "" + to2;
		}
		op2.b += "c";
		if(byFrom == byTo) if(byFrom == null) op2.b += "null"; else op2.b += "" + byFrom; else {
			if(byFrom == null) op2.b += "null"; else op2.b += "" + byFrom;
			op2.b += ",";
			if(byTo == null) op2.b += "null"; else op2.b += "" + byTo;
		}
		op2.b += "\n";
		var _g2 = from2 - 1;
		while(_g2 < to2) {
			var i2 = _g2++;
			op2.b += "< ";
			op2.b += Std.string(sourceLines[i2]);
			if(srcNoNewLine && i2 == sourceLines.length - 2) {
				op2.b += Std.string(cx.diff.mtwin.text.Diff.NO_NEW_LINE);
				break;
			}
		}
		op2.b += "---\n";
		var _g3 = byFrom - 1;
		while(_g3 < byTo) {
			var i3 = _g3++;
			op2.b += "> ";
			op2.b += Std.string(destLines[i3]);
			if(dstNoNewLine && i3 == destLines.length - 2) {
				op2.b += Std.string(cx.diff.mtwin.text.Diff.NO_NEW_LINE);
				break;
			}
		}
		return op2.b;
	};
	var result = new StringBuf();
	while(stack.length > 0) {
		var pos = stack.pop();
		var _g4 = cursorKind(pos);
		switch(_g4) {
		case 3:
			break;
		case 1:
			var end = stack.pop();
			if(cursorKind(end) == 2) {
				var del = stack.pop();
				stack.push(del);
				result.add(operationUpd(pos[0] + 1,end[0],pos[1] + 1,del[1]));
			} else {
				stack.push(end);
				result.add(operationDel(pos[0] + 1,end[0],end[1]));
			}
			break;
		case 2:
			var end1 = stack.pop();
			stack.push(end1);
			result.add(operationAdd(pos[0],pos[1] + 1,end1[1]));
			break;
		case 0:
			if(pos[0] < m) result.add(operationDel(pos[0],m - 1,n - 1));
			if(pos[1] < n) result.add(operationAdd(m - 1,pos[1],n - 1));
			break;
		}
	}
	return result.b;
};
cx.diff.mtwin.text.Diff.parsePatchOp = function(left,op,right) {
	var l = Lambda.array(Lambda.map(left.split(","),function(v) {
		return Std.parseInt(v);
	}));
	if(l.length == 1) l.push(l[0]);
	var r = Lambda.array(Lambda.map(right.split(","),function(v1) {
		return Std.parseInt(v1);
	}));
	if(r.length == 1) r.push(r[0]);
	return { op : op, left : l, right : r, data : []};
};
cx.diff.mtwin.text.Diff.patch = function(src,patch) {
	var opRegexp = new EReg("^([0-9,]+)([adc])([0-9,]+)$","");
	var lines = src.split("\n");
	var counter = 0;
	var result = new StringBuf();
	var patchLines = patch.split("\n");
	while(patchLines.length > 0) {
		var patchLine = patchLines.shift();
		if(opRegexp.match(patchLine)) {
			var op = cx.diff.mtwin.text.Diff.parsePatchOp(opRegexp.matched(1),opRegexp.matched(2),opRegexp.matched(3));
			var tmp = patchLines.shift();
			while(tmp != "" && tmp != null && !opRegexp.match(tmp)) {
				op.data.push(tmp);
				tmp = patchLines.shift();
			}
			if(tmp != null) patchLines.unshift(tmp);
			var _g = op.op;
			switch(_g) {
			case "a":
				while(counter < op.left[0]) {
					result.b += Std.string(lines[counter]);
					result.b += "\n";
					counter++;
				}
				var _g2 = 0;
				var _g1 = op.data.length;
				while(_g2 < _g1) {
					var i = _g2++;
					var line = op.data[i];
					if(HxOverrides.substr(line,0,2) == "> ") {
						result.add(HxOverrides.substr(line,2,line.length));
						if(i == op.data.length - 1 || HxOverrides.substr(op.data[i + 1],0,2) != "\\ ") result.b += "\n";
					}
				}
				break;
			case "d":
				while(counter < op.left[0] - 1) {
					result.b += Std.string(lines[counter]);
					result.b += "\n";
					counter++;
				}
				counter = op.left[1];
				break;
			case "c":
				while(counter < op.left[0] - 1) {
					result.b += Std.string(lines[counter]);
					result.b += "\n";
					counter++;
				}
				var _g21 = 0;
				var _g11 = op.data.length;
				while(_g21 < _g11) {
					var i1 = _g21++;
					var line1 = op.data[i1];
					if(HxOverrides.substr(line1,0,2) == "> ") {
						result.add(HxOverrides.substr(line1,2,line1.length));
						if(i1 == op.data.length - 1 || HxOverrides.substr(op.data[i1 + 1],0,2) != "\\ ") result.b += "\n";
					}
				}
				counter = op.left[1];
				break;
			}
		}
	}
	var _g12 = counter;
	var _g3 = lines.length - 1;
	while(_g12 < _g3) {
		var i2 = _g12++;
		result.b += Std.string(lines[i2]);
		result.b += "\n";
	}
	return result.b;
};
cx.diff.mtwin.text.Diff.unpatch = function(src,patch) {
	var opRegexp = new EReg("^([0-9,]+)([adc])([0-9,]+)$","");
	var lines = src.split("\n");
	var counter = 0;
	var result = new StringBuf();
	var patchLines = patch.split("\n");
	while(patchLines.length > 0) {
		var patchLine = patchLines.shift();
		if(opRegexp.match(patchLine)) {
			var op = cx.diff.mtwin.text.Diff.parsePatchOp(opRegexp.matched(1),opRegexp.matched(2),opRegexp.matched(3));
			var tmp = patchLines.shift();
			while(tmp != "" && tmp != null && !opRegexp.match(tmp)) {
				op.data.push(tmp);
				tmp = patchLines.shift();
			}
			if(tmp != null) patchLines.unshift(tmp);
			var _g = op.op;
			switch(_g) {
			case "a":
				while(counter < op.right[0] - 1) {
					result.b += Std.string(lines[counter]);
					result.b += "\n";
					counter++;
				}
				counter = op.right[1];
				break;
			case "d":
				while(counter < op.right[0]) {
					result.b += Std.string(lines[counter]);
					result.b += "\n";
					counter++;
				}
				var _g2 = 0;
				var _g1 = op.data.length;
				while(_g2 < _g1) {
					var i = _g2++;
					var line = op.data[i];
					if(HxOverrides.substr(line,0,2) == "< ") {
						result.add(HxOverrides.substr(line,2,line.length));
						if(i == op.data.length - 1 || HxOverrides.substr(op.data[i + 1],0,2) != "\\ ") result.b += "\n";
					}
				}
				break;
			case "c":
				while(counter < op.right[0] - 1) {
					result.b += Std.string(lines[counter]);
					result.b += "\n";
					counter++;
				}
				var _g21 = 0;
				var _g11 = op.data.length;
				while(_g21 < _g11) {
					var i1 = _g21++;
					var line1 = op.data[i1];
					if(HxOverrides.substr(line1,0,2) == "< ") {
						result.add(HxOverrides.substr(line1,2,line1.length));
						if(i1 == op.data.length - 1 || HxOverrides.substr(op.data[i1 + 1],0,2) != "\\ ") result.b += "\n";
					}
				}
				counter = op.right[1];
				break;
			}
		}
	}
	var _g12 = counter;
	var _g3 = lines.length - 1;
	while(_g12 < _g3) {
		var i2 = _g12++;
		result.b += Std.string(lines[i2]);
		result.b += "\n";
	}
	return result.b;
};
cx.flash = {};
cx.flash.Tooltipsprite = function(rect) {
	openfl.display.Sprite.call(this);
	this.rect = rect;
	this.textfield = new openfl.text.TextField();
	this.textfield.set_defaultTextFormat(new openfl.text.TextFormat("Open Sans",14));
	this.textfield.set_text("Helsan");
	this.textfield.set_x(8);
	this.textfield.set_y(4);
	this.textfield.set_autoSize(openfl.text.TextFieldAutoSize.LEFT);
	this.addChild(this.textfield);
};
$hxClasses["cx.flash.Tooltipsprite"] = cx.flash.Tooltipsprite;
cx.flash.Tooltipsprite.__name__ = ["cx","flash","Tooltipsprite"];
cx.flash.Tooltipsprite.__super__ = openfl.display.Sprite;
cx.flash.Tooltipsprite.prototype = $extend(openfl.display.Sprite.prototype,{
	draw: function(text,rect) {
		if(this.rect.width != rect.width || this.rect.height != rect.height) {
			this.rect = rect;
			this.drawBackground();
		}
		this.textfield.set_text(text);
	}
	,drawBackground: function() {
		($_=this.get_graphics(),$bind($_,$_.clear));
		this.get_graphics().beginFill(16773834);
		this.get_graphics().lineStyle(2,6710886);
		this.get_graphics().drawRoundRect(0,0,this.rect.width,this.rect.height,8,8);
	}
	,__class__: cx.flash.Tooltipsprite
});
var format = {};
format.SVG = function(content) {
	this.data = new format.svg.SVGData(Xml.parse(content));
};
$hxClasses["format.SVG"] = format.SVG;
format.SVG.__name__ = ["format","SVG"];
format.SVG.prototype = {
	render: function(graphics,x,y,width,height) {
		if(height == null) height = -1;
		if(width == null) width = -1;
		if(y == null) y = 0;
		if(x == null) x = 0;
		var matrix = new openfl.geom.Matrix();
		matrix.identity();
		matrix.translate(x,y);
		if(width > -1 && height > -1) matrix.scale(width / this.data.width,height / this.data.height);
		var renderer = new format.svg.SVGRenderer(this.data);
		renderer.render(graphics,matrix);
	}
	,__class__: format.SVG
};
format.gfx = {};
format.gfx.Gfx = function() {
};
$hxClasses["format.gfx.Gfx"] = format.gfx.Gfx;
format.gfx.Gfx.__name__ = ["format","gfx","Gfx"];
format.gfx.Gfx.prototype = {
	geometryOnly: function() {
		return false;
	}
	,size: function(inWidth,inHeight) {
	}
	,beginGradientFill: function(grad) {
	}
	,beginFill: function(color,alpha) {
	}
	,endFill: function() {
	}
	,lineStyle: function(style) {
	}
	,endLineStyle: function() {
	}
	,moveTo: function(inX,inY) {
	}
	,lineTo: function(inX,inY) {
	}
	,curveTo: function(inCX,inCY,inX,inY) {
	}
	,renderText: function(text) {
	}
	,eof: function() {
	}
	,__class__: format.gfx.Gfx
};
format.gfx.Gfx2Haxe = function() {
	format.gfx.Gfx.call(this);
	this.commands = [];
};
$hxClasses["format.gfx.Gfx2Haxe"] = format.gfx.Gfx2Haxe;
format.gfx.Gfx2Haxe.__name__ = ["format","gfx","Gfx2Haxe"];
format.gfx.Gfx2Haxe.__super__ = format.gfx.Gfx;
format.gfx.Gfx2Haxe.prototype = $extend(format.gfx.Gfx.prototype,{
	f2a: function(f) {
		if(Math.abs(f) < 0.000001) return "0";
		if(Math.abs(1 - f) < 0.000001) return "1";
		return f + "";
	}
	,newMatrix: function(m) {
		return "new Matrix(" + this.f2a(m.a) + "," + this.f2a(m.b) + "," + this.f2a(m.c) + "," + this.f2a(m.d) + "," + this.f2a(m.tx) + "," + this.f2a(m.ty) + ")";
	}
	,beginGradientFill: function(grad) {
		this.commands.push("g.beginGradientFill(" + Std.string(grad.type) + "," + Std.string(grad.colors) + "," + Std.string(grad.alphas) + "," + Std.string(grad.ratios) + "," + this.newMatrix(grad.matrix) + "," + Std.string(grad.spread) + "," + Std.string(grad.interp) + "," + grad.focus + ");");
	}
	,beginFill: function(color,alpha) {
		this.commands.push("g.beginFill(" + color + "," + this.f2a(alpha) + ");");
	}
	,endFill: function() {
		this.commands.push("g.endFill();");
	}
	,lineStyle: function(style) {
		this.commands.push("g.lineStyle(" + this.f2a(style.thickness) + "," + style.color + "," + this.f2a(style.alpha) + "," + (style.pixelHinting == null?"null":"" + style.pixelHinting) + "," + Std.string(style.scaleMode) + "," + Std.string(style.capsStyle) + "," + Std.string(style.jointStyle) + "," + this.f2a(style.miterLimit));
	}
	,endLineStyle: function() {
		this.commands.push("g.lineStyle();");
	}
	,moveTo: function(inX,inY) {
		this.commands.push("g.moveTo(" + inX + "," + inY + ");");
	}
	,lineTo: function(inX,inY) {
		this.commands.push("g.lineTo(" + inX + "," + inY + ");");
	}
	,curveTo: function(inCX,inCY,inX,inY) {
		this.commands.push("g.curveTo(" + inCX + "," + inCY + "," + inX + "," + inY + ");");
	}
	,__class__: format.gfx.Gfx2Haxe
});
openfl.display.InterpolationMethod = $hxClasses["openfl.display.InterpolationMethod"] = { __ename__ : ["openfl","display","InterpolationMethod"], __constructs__ : ["RGB","LINEAR_RGB"] };
openfl.display.InterpolationMethod.RGB = ["RGB",0];
openfl.display.InterpolationMethod.RGB.toString = $estr;
openfl.display.InterpolationMethod.RGB.__enum__ = openfl.display.InterpolationMethod;
openfl.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
openfl.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
openfl.display.InterpolationMethod.LINEAR_RGB.__enum__ = openfl.display.InterpolationMethod;
openfl.display.LineScaleMode = $hxClasses["openfl.display.LineScaleMode"] = { __ename__ : ["openfl","display","LineScaleMode"], __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] };
openfl.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
openfl.display.LineScaleMode.HORIZONTAL.toString = $estr;
openfl.display.LineScaleMode.HORIZONTAL.__enum__ = openfl.display.LineScaleMode;
openfl.display.LineScaleMode.NONE = ["NONE",1];
openfl.display.LineScaleMode.NONE.toString = $estr;
openfl.display.LineScaleMode.NONE.__enum__ = openfl.display.LineScaleMode;
openfl.display.LineScaleMode.NORMAL = ["NORMAL",2];
openfl.display.LineScaleMode.NORMAL.toString = $estr;
openfl.display.LineScaleMode.NORMAL.__enum__ = openfl.display.LineScaleMode;
openfl.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
openfl.display.LineScaleMode.VERTICAL.toString = $estr;
openfl.display.LineScaleMode.VERTICAL.__enum__ = openfl.display.LineScaleMode;
openfl.display.SpreadMethod = $hxClasses["openfl.display.SpreadMethod"] = { __ename__ : ["openfl","display","SpreadMethod"], __constructs__ : ["REPEAT","REFLECT","PAD"] };
openfl.display.SpreadMethod.REPEAT = ["REPEAT",0];
openfl.display.SpreadMethod.REPEAT.toString = $estr;
openfl.display.SpreadMethod.REPEAT.__enum__ = openfl.display.SpreadMethod;
openfl.display.SpreadMethod.REFLECT = ["REFLECT",1];
openfl.display.SpreadMethod.REFLECT.toString = $estr;
openfl.display.SpreadMethod.REFLECT.__enum__ = openfl.display.SpreadMethod;
openfl.display.SpreadMethod.PAD = ["PAD",2];
openfl.display.SpreadMethod.PAD.toString = $estr;
openfl.display.SpreadMethod.PAD.__enum__ = openfl.display.SpreadMethod;
format.gfx.GfxBytes = function(inBuffer,inFlags) {
	if(inFlags == null) inFlags = 0;
	format.gfx.Gfx.call(this);
	if(inBuffer == null) this.buffer = new openfl.utils.ByteArray(); else this.buffer = inBuffer;
};
$hxClasses["format.gfx.GfxBytes"] = format.gfx.GfxBytes;
format.gfx.GfxBytes.__name__ = ["format","gfx","GfxBytes"];
format.gfx.GfxBytes.baseCoder = null;
format.gfx.GfxBytes.fromString = function(inString) {
	if(format.gfx.GfxBytes.baseCoder == null) format.gfx.GfxBytes.baseCoder = new haxe.crypto.BaseCode(haxe.io.Bytes.ofString(format.gfx.GfxBytes.base64));
	var bytes = new openfl.utils.ByteArray();
	bytes.writeUTF(inString);
	return new format.gfx.GfxBytes(bytes);
};
format.gfx.GfxBytes.__super__ = format.gfx.Gfx;
format.gfx.GfxBytes.prototype = $extend(format.gfx.Gfx.prototype,{
	toString: function() {
		return "";
	}
	,eof: function() {
		this.buffer.writeByte(0);
	}
	,iterate: function(inGfx) {
		this.buffer.position = 0;
		while(true) {
			var _g = this.buffer.readByte();
			switch(_g) {
			case 0:
				return;
			case 1:
				var w = this.buffer.readFloat();
				var h = this.buffer.readFloat();
				inGfx.size(w,h);
				break;
			case 10:
				var col = this.readRGB();
				var alpha = this.buffer.readFloat();
				inGfx.beginFill(col,alpha);
				break;
			case 11:
				var grad = new format.gfx.Gradient();
				grad.type = Type.createEnumIndex(openfl.display.GradientType,this.buffer.readByte());
				var len = this.buffer.readByte();
				var _g1 = 0;
				while(_g1 < len) {
					var i = _g1++;
					grad.colors.push(this.readRGB());
					grad.alphas.push(this.buffer.readByte() / 255.0);
					grad.ratios.push(this.buffer.readByte());
				}
				grad.matrix.a = this.buffer.readFloat();
				grad.matrix.b = this.buffer.readFloat();
				grad.matrix.c = this.buffer.readFloat();
				grad.matrix.d = this.buffer.readFloat();
				grad.matrix.tx = this.buffer.readFloat();
				grad.matrix.ty = this.buffer.readFloat();
				grad.spread = format.gfx.GfxBytes.spreadMethods[this.buffer.readByte()];
				grad.interp = format.gfx.GfxBytes.interpolationMethods[this.buffer.readByte()];
				grad.focus = this.buffer.readFloat();
				inGfx.beginGradientFill(grad);
				break;
			case 12:
				inGfx.endFill();
				break;
			case 20:
				var style = new format.gfx.LineStyle();
				style.thickness = this.buffer.readFloat();
				style.color = this.readRGB();
				style.alpha = this.buffer.readFloat();
				style.pixelHinting = this.buffer.readByte() > 0;
				style.scaleMode = format.gfx.GfxBytes.scaleModes[this.buffer.readByte()];
				style.capsStyle = format.gfx.GfxBytes.capsStyles[this.buffer.readByte()];
				style.jointStyle = format.gfx.GfxBytes.jointStyles[this.buffer.readByte()];
				style.miterLimit = this.buffer.readFloat();
				inGfx.lineStyle(style);
				break;
			case 21:
				inGfx.endLineStyle();
				break;
			case 30:
				var x = this.buffer.readFloat();
				var y = this.buffer.readFloat();
				inGfx.moveTo(x,y);
				break;
			case 31:
				var x1 = this.buffer.readFloat();
				var y1 = this.buffer.readFloat();
				inGfx.lineTo(x1,y1);
				break;
			case 32:
				var cx = this.buffer.readFloat();
				var cy = this.buffer.readFloat();
				var x2 = this.buffer.readFloat();
				var y2 = this.buffer.readFloat();
				inGfx.curveTo(cx,cy,x2,y2);
				break;
			default:
				throw "Unknown gfx buffer format.";
			}
		}
	}
	,size: function(inWidth,inHeight) {
		this.buffer.writeByte(1);
		this.buffer.writeFloat(inWidth);
		this.buffer.writeFloat(inHeight);
	}
	,pushClipped: function(inVal) {
		this.buffer.writeByte(inVal < 0?0:inVal > 255.0?255:inVal | 0);
	}
	,writeRGB: function(inVal) {
		this.buffer.writeByte(inVal >> 16 & 255);
		this.buffer.writeByte(inVal >> 8 & 255);
		this.buffer.writeByte(inVal & 255);
	}
	,readRGB: function() {
		var r = this.buffer.readByte();
		var g = this.buffer.readByte();
		var b = this.buffer.readByte();
		return r << 16 | g << 8 | b;
	}
	,beginGradientFill: function(grad) {
		this.buffer.writeByte(11);
		this.buffer.writeByte(grad.type[1]);
		this.buffer.writeByte(grad.colors.length);
		var _g1 = 0;
		var _g = grad.colors.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.writeRGB(grad.colors[i] | 0);
			this.pushClipped(grad.alphas[i] * 255.0);
			this.pushClipped(grad.ratios[i]);
		}
		this.buffer.writeFloat(grad.matrix.a);
		this.buffer.writeFloat(grad.matrix.b);
		this.buffer.writeFloat(grad.matrix.c);
		this.buffer.writeFloat(grad.matrix.d);
		this.buffer.writeFloat(grad.matrix.tx);
		this.buffer.writeFloat(grad.matrix.ty);
		this.buffer.writeByte(grad.spread[1]);
		this.buffer.writeByte(grad.interp[1]);
		this.buffer.writeFloat(grad.focus);
	}
	,beginFill: function(color,alpha) {
		this.buffer.writeByte(10);
		this.writeRGB(color);
		this.buffer.writeFloat(alpha);
	}
	,endFill: function() {
		this.buffer.writeByte(12);
	}
	,lineStyle: function(style) {
		this.buffer.writeByte(20);
		this.buffer.writeFloat(style.thickness);
		this.writeRGB(style.color);
		this.buffer.writeFloat(style.alpha);
		this.buffer.writeByte(style.pixelHinting?1:0);
		this.buffer.writeByte(style.scaleMode[1]);
		var capsStyleIdx = 0;
		this.buffer.writeByte(capsStyleIdx);
		haxe.Log.trace(capsStyleIdx,{ fileName : "GfxBytes.hx", lineNumber : 263, className : "format.gfx.GfxBytes", methodName : "lineStyle"});
		var jointStyleIdx = 0;
		haxe.Log.trace(jointStyleIdx,{ fileName : "GfxBytes.hx", lineNumber : 266, className : "format.gfx.GfxBytes", methodName : "lineStyle"});
		this.buffer.writeByte(jointStyleIdx);
		this.buffer.writeFloat(style.miterLimit);
	}
	,endLineStyle: function() {
		this.buffer.writeByte(21);
	}
	,moveTo: function(inX,inY) {
		this.buffer.writeByte(30);
		this.buffer.writeFloat(inX);
		this.buffer.writeFloat(inY);
	}
	,lineTo: function(inX,inY) {
		this.buffer.writeByte(31);
		this.buffer.writeFloat(inX);
		this.buffer.writeFloat(inY);
	}
	,curveTo: function(inCX,inCY,inX,inY) {
		this.buffer.writeByte(32);
		this.buffer.writeFloat(inCX);
		this.buffer.writeFloat(inCY);
		this.buffer.writeFloat(inX);
		this.buffer.writeFloat(inY);
	}
	,__class__: format.gfx.GfxBytes
});
format.gfx.GfxExtent = function() {
	format.gfx.Gfx.call(this);
	this.extent = null;
};
$hxClasses["format.gfx.GfxExtent"] = format.gfx.GfxExtent;
format.gfx.GfxExtent.__name__ = ["format","gfx","GfxExtent"];
format.gfx.GfxExtent.__super__ = format.gfx.Gfx;
format.gfx.GfxExtent.prototype = $extend(format.gfx.Gfx.prototype,{
	addExtent: function(inX,inY) {
		if(this.extent == null) {
			this.extent = new openfl.geom.Rectangle(inX,inY,0,0);
			return;
		}
		if(inX < this.extent.get_left()) this.extent.set_left(inX);
		if(inX > this.extent.get_right()) this.extent.set_right(inX);
		if(inY < this.extent.get_top()) this.extent.set_top(inY);
		if(inY > this.extent.get_bottom()) this.extent.set_bottom(inY);
	}
	,geometryOnly: function() {
		return true;
	}
	,moveTo: function(inX,inY) {
		this.addExtent(inX,inY);
	}
	,lineTo: function(inX,inY) {
		this.addExtent(inX,inY);
	}
	,curveTo: function(inCX,inCY,inX,inY) {
		this.addExtent(inCX,inCY);
		this.addExtent(inX,inY);
	}
	,__class__: format.gfx.GfxExtent
});
format.gfx.GfxGraphics = function(inGraphics) {
	format.gfx.Gfx.call(this);
	this.graphics = inGraphics;
};
$hxClasses["format.gfx.GfxGraphics"] = format.gfx.GfxGraphics;
format.gfx.GfxGraphics.__name__ = ["format","gfx","GfxGraphics"];
format.gfx.GfxGraphics.__super__ = format.gfx.Gfx;
format.gfx.GfxGraphics.prototype = $extend(format.gfx.Gfx.prototype,{
	beginGradientFill: function(grad) {
		this.graphics.beginGradientFill(grad.type,grad.colors,grad.alphas,grad.ratios,grad.matrix,grad.spread,grad.interp,grad.focus);
	}
	,beginFill: function(color,alpha) {
		this.graphics.beginFill(color,alpha);
	}
	,endFill: function() {
		this.graphics.endFill();
	}
	,lineStyle: function(style) {
		this.graphics.lineStyle(style.thickness,style.color,style.alpha,style.pixelHinting,style.scaleMode,style.capsStyle,style.jointStyle,style.miterLimit);
	}
	,endLineStyle: function() {
		this.graphics.lineStyle();
	}
	,moveTo: function(inX,inY) {
		this.graphics.moveTo(inX,inY);
	}
	,lineTo: function(inX,inY) {
		this.graphics.lineTo(inX,inY);
	}
	,curveTo: function(inCX,inCY,inX,inY) {
		this.graphics.curveTo(inCX,inCY,inX,inY);
	}
	,__class__: format.gfx.GfxGraphics
});
format.gfx.GfxTextFinder = function() {
	format.gfx.Gfx.call(this);
};
$hxClasses["format.gfx.GfxTextFinder"] = format.gfx.GfxTextFinder;
format.gfx.GfxTextFinder.__name__ = ["format","gfx","GfxTextFinder"];
format.gfx.GfxTextFinder.__super__ = format.gfx.Gfx;
format.gfx.GfxTextFinder.prototype = $extend(format.gfx.Gfx.prototype,{
	geometryOnly: function() {
		return true;
	}
	,renderText: function(inText) {
		if(this.text == null) this.text = inText;
	}
	,__class__: format.gfx.GfxTextFinder
});
format.gfx.Gradient = function() {
	this.type = openfl.display.GradientType.LINEAR;
	this.colors = [];
	this.alphas = [];
	this.ratios = [];
	this.matrix = new openfl.geom.Matrix();
	this.spread = openfl.display.SpreadMethod.PAD;
	this.interp = openfl.display.InterpolationMethod.RGB;
	this.focus = 0.0;
};
$hxClasses["format.gfx.Gradient"] = format.gfx.Gradient;
format.gfx.Gradient.__name__ = ["format","gfx","Gradient"];
format.gfx.Gradient.prototype = {
	__class__: format.gfx.Gradient
};
format.gfx.LineStyle = function() {
	this.thickness = 1.0;
	this.color = 0;
	this.alpha = 1.0;
	this.pixelHinting = false;
	this.scaleMode = openfl.display.LineScaleMode.NORMAL;
	this.capsStyle = "round";
	this.jointStyle = "round";
	this.miterLimit = 3.0;
};
$hxClasses["format.gfx.LineStyle"] = format.gfx.LineStyle;
format.gfx.LineStyle.__name__ = ["format","gfx","LineStyle"];
format.gfx.LineStyle.prototype = {
	__class__: format.gfx.LineStyle
};
format.svg = {};
format.svg.FillType = $hxClasses["format.svg.FillType"] = { __ename__ : ["format","svg","FillType"], __constructs__ : ["FillGrad","FillSolid","FillNone"] };
format.svg.FillType.FillGrad = function(grad) { var $x = ["FillGrad",0,grad]; $x.__enum__ = format.svg.FillType; $x.toString = $estr; return $x; };
format.svg.FillType.FillSolid = function(colour) { var $x = ["FillSolid",1,colour]; $x.__enum__ = format.svg.FillType; $x.toString = $estr; return $x; };
format.svg.FillType.FillNone = ["FillNone",2];
format.svg.FillType.FillNone.toString = $estr;
format.svg.FillType.FillNone.__enum__ = format.svg.FillType;
format.svg.Grad = function(inType) {
	format.gfx.Gradient.call(this);
	this.type = inType;
	this.radius = 0.0;
	this.gradMatrix = new openfl.geom.Matrix();
	this.x1 = 0.0;
	this.y1 = 0.0;
	this.x2 = 0.0;
	this.y2 = 0.0;
};
$hxClasses["format.svg.Grad"] = format.svg.Grad;
format.svg.Grad.__name__ = ["format","svg","Grad"];
format.svg.Grad.__super__ = format.gfx.Gradient;
format.svg.Grad.prototype = $extend(format.gfx.Gradient.prototype,{
	updateMatrix: function(inMatrix) {
		var dx = this.x2 - this.x1;
		var dy = this.y2 - this.y1;
		var theta = Math.atan2(dy,dx);
		var len = Math.sqrt(dx * dx + dy * dy);
		var mtx = new openfl.geom.Matrix();
		if(this.type == openfl.display.GradientType.LINEAR) {
			mtx.createGradientBox(1.0,1.0);
			mtx.scale(len,len);
		} else {
			if(this.radius != 0.0) this.focus = len / this.radius;
			mtx.createGradientBox(1.0,1.0);
			mtx.translate(-0.5,-0.5);
			mtx.scale(this.radius * 2,this.radius * 2);
		}
		mtx.rotate(theta);
		mtx.translate(this.x1,this.y1);
		mtx.concat(this.gradMatrix);
		mtx.concat(inMatrix);
		this.matrix = mtx;
	}
	,__class__: format.svg.Grad
});
format.svg.Group = function() {
	this.name = "";
	this.children = [];
};
$hxClasses["format.svg.Group"] = format.svg.Group;
format.svg.Group.__name__ = ["format","svg","Group"];
format.svg.Group.prototype = {
	hasGroup: function(inName) {
		return this.findGroup(inName) != null;
	}
	,findGroup: function(inName) {
		var _g = 0;
		var _g1 = this.children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			switch(child[1]) {
			case 1:
				var group = child[2];
				if(group.name == inName) return group;
				break;
			default:
			}
		}
		return null;
	}
	,__class__: format.svg.Group
};
format.svg.DisplayElement = $hxClasses["format.svg.DisplayElement"] = { __ename__ : ["format","svg","DisplayElement"], __constructs__ : ["DisplayPath","DisplayGroup","DisplayText"] };
format.svg.DisplayElement.DisplayPath = function(path) { var $x = ["DisplayPath",0,path]; $x.__enum__ = format.svg.DisplayElement; $x.toString = $estr; return $x; };
format.svg.DisplayElement.DisplayGroup = function(group) { var $x = ["DisplayGroup",1,group]; $x.__enum__ = format.svg.DisplayElement; $x.toString = $estr; return $x; };
format.svg.DisplayElement.DisplayText = function(text) { var $x = ["DisplayText",2,text]; $x.__enum__ = format.svg.DisplayElement; $x.toString = $estr; return $x; };
format.svg.Path = function() {
};
$hxClasses["format.svg.Path"] = format.svg.Path;
format.svg.Path.__name__ = ["format","svg","Path"];
format.svg.Path.prototype = {
	__class__: format.svg.Path
};
format.svg.PathParser = function() {
	if(format.svg.PathParser.sCommandArgs == null) {
		format.svg.PathParser.sCommandArgs = [];
		var _g = 0;
		while(_g < 128) {
			var i = _g++;
			format.svg.PathParser.sCommandArgs[i] = this.commandArgs(i);
		}
	}
};
$hxClasses["format.svg.PathParser"] = format.svg.PathParser;
format.svg.PathParser.__name__ = ["format","svg","PathParser"];
format.svg.PathParser.sCommandArgs = null;
format.svg.PathParser.prototype = {
	parse: function(pathToParse,inConvertCubics) {
		this.lastMoveX = this.lastMoveY = 0;
		var pos = 0;
		var args = new Array();
		var segments = new Array();
		var current_command_pos = 0;
		var current_command = -1;
		var current_args = -1;
		this.prev = null;
		var len = pathToParse.length;
		var finished = false;
		while(pos <= len) {
			var code;
			if(pos == len) code = 32; else code = HxOverrides.cca(pathToParse,pos);
			var command;
			if(code > 0 && code < 128) command = format.svg.PathParser.sCommandArgs[code]; else command = format.svg.PathParser.UNKNOWN;
			if(command == format.svg.PathParser.UNKNOWN) throw "failed parsing path near '" + HxOverrides.substr(pathToParse,pos,null) + "'";
			if(command == format.svg.PathParser.SEPARATOR) pos++; else if(command <= format.svg.PathParser.FLOAT) {
				var end = pos + 1;
				var e_pos = -1;
				var seen_dot = command == format.svg.PathParser.FLOAT_DOT;
				if(command == format.svg.PathParser.FLOAT_EXP) {
					e_pos = 0;
					seen_dot = true;
				}
				while(end < pathToParse.length) {
					var ch = HxOverrides.cca(pathToParse,end);
					var code1;
					if(ch < 0 || ch > 127) code1 = format.svg.PathParser.UNKNOWN; else code1 = format.svg.PathParser.sCommandArgs[ch];
					if(code1 > format.svg.PathParser.FLOAT) break;
					if(code1 == format.svg.PathParser.FLOAT_DOT && seen_dot) break;
					if(e_pos >= 0) {
						if(code1 == format.svg.PathParser.FLOAT_SIGN) {
							if(e_pos != 0) break;
						} else if(code1 != format.svg.PathParser.FLOAT) break;
						e_pos++;
					} else if(code1 == format.svg.PathParser.FLOAT_EXP) {
						if(e_pos >= 0) break;
						e_pos = 0;
						seen_dot = true;
					} else if(code1 == format.svg.PathParser.FLOAT_SIGN) break;
					end++;
				}
				if(current_command < 0) {
				} else {
					var f = Std.parseFloat(HxOverrides.substr(pathToParse,pos,end - pos));
					args.push(f);
				}
				pos = end;
			} else {
				current_command = code;
				current_args = command;
				finished = false;
				current_command_pos = pos;
				args = [];
				pos++;
			}
			var px = 0.0;
			var py = 0.0;
			if(current_command >= 0) {
				if(current_args == args.length) {
					if(inConvertCubics && this.prev != null) {
						px = this.prev.prevX();
						py = this.prev.prevY();
					}
					this.prev = this.createCommand(current_command,args);
					if(this.prev == null) throw "Unknown command " + String.fromCharCode(current_command) + " near '" + HxOverrides.substr(pathToParse,current_command_pos,null) + "'";
					if(inConvertCubics && this.prev.getType() == 4) {
						var cubic = this.prev;
						var quads = cubic.toQuadratics(px,py);
						var _g = 0;
						while(_g < quads.length) {
							var q = quads[_g];
							++_g;
							segments.push(q);
						}
					} else segments.push(this.prev);
					finished = true;
					if(current_args == 0) {
						current_args = -1;
						current_command = -1;
					} else if(current_command == 77) current_command = 76; else if(current_command == 109) current_command = 108;
					current_command_pos = pos;
					args = [];
				}
			}
		}
		if(current_command >= 0 && !finished) throw "Unfinished command (" + args.length + "/" + current_args + ") near '" + HxOverrides.substr(pathToParse,current_command_pos,null) + "'";
		return segments;
	}
	,commandArgs: function(inCode) {
		if(inCode == 10) return format.svg.PathParser.SEPARATOR;
		var str = String.fromCharCode(inCode).toUpperCase();
		if(str >= "0" && str <= "9") return format.svg.PathParser.FLOAT;
		switch(str) {
		case "Z":
			return 0;
		case "H":case "V":
			return 1;
		case "M":case "L":case "T":
			return 2;
		case "S":case "Q":
			return 4;
		case "C":
			return 6;
		case "A":
			return 7;
		case "\t":case "\n":case " ":case "\r":case ",":
			return format.svg.PathParser.SEPARATOR;
		case "-":
			return format.svg.PathParser.FLOAT_SIGN;
		case "+":
			return format.svg.PathParser.FLOAT_SIGN;
		case "E":case "e":
			return format.svg.PathParser.FLOAT_EXP;
		case ".":
			return format.svg.PathParser.FLOAT_DOT;
		}
		return format.svg.PathParser.UNKNOWN;
	}
	,prevX: function() {
		if(this.prev != null) return this.prev.prevX(); else return 0;
	}
	,prevY: function() {
		if(this.prev != null) return this.prev.prevY(); else return 0;
	}
	,prevCX: function() {
		if(this.prev != null) return this.prev.prevCX(); else return 0;
	}
	,prevCY: function() {
		if(this.prev != null) return this.prev.prevCY(); else return 0;
	}
	,createCommand: function(code,a) {
		switch(code) {
		case 77:
			this.lastMoveX = a[0];
			this.lastMoveY = a[1];
			return new format.svg.MoveSegment(this.lastMoveX,this.lastMoveY);
		case 109:
			this.lastMoveX = a[0] + this.prevX();
			this.lastMoveY = a[1] + this.prevY();
			return new format.svg.MoveSegment(this.lastMoveX,this.lastMoveY);
		case 76:
			return new format.svg.DrawSegment(a[0],a[1]);
		case 108:
			return new format.svg.DrawSegment(a[0] + this.prevX(),a[1] + this.prevY());
		case 72:
			return new format.svg.DrawSegment(a[0],this.prevY());
		case 104:
			return new format.svg.DrawSegment(a[0] + this.prevX(),this.prevY());
		case 86:
			return new format.svg.DrawSegment(this.prevX(),a[0]);
		case 118:
			return new format.svg.DrawSegment(this.prevX(),a[0] + this.prevY());
		case 67:
			return new format.svg.CubicSegment(a[0],a[1],a[2],a[3],a[4],a[5]);
		case 99:
			var rx = this.prevX();
			var ry = this.prevY();
			return new format.svg.CubicSegment(a[0] + rx,a[1] + ry,a[2] + rx,a[3] + ry,a[4] + rx,a[5] + ry);
		case 83:
			var rx1 = this.prevX();
			var ry1 = this.prevY();
			return new format.svg.CubicSegment(rx1 * 2 - this.prevCX(),ry1 * 2 - this.prevCY(),a[0],a[1],a[2],a[3]);
		case 115:
			var rx2 = this.prevX();
			var ry2 = this.prevY();
			return new format.svg.CubicSegment(rx2 * 2 - this.prevCX(),ry2 * 2 - this.prevCY(),a[0] + rx2,a[1] + ry2,a[2] + rx2,a[3] + ry2);
		case 81:
			return new format.svg.QuadraticSegment(a[0],a[1],a[2],a[3]);
		case 113:
			var rx3 = this.prevX();
			var ry3 = this.prevY();
			return new format.svg.QuadraticSegment(a[0] + rx3,a[1] + ry3,a[2] + rx3,a[3] + ry3);
		case 84:
			var rx4 = this.prevX();
			var ry4 = this.prevY();
			return new format.svg.QuadraticSegment(rx4 * 2 - this.prevCX(),rx4 * 2 - this.prevCY(),a[2],a[3]);
		case 116:
			var rx5 = this.prevX();
			var ry5 = this.prevY();
			return new format.svg.QuadraticSegment(rx5 * 2 - this.prevCX(),ry5 * 2 - this.prevCY(),a[0] + rx5,a[1] + ry5);
		case 65:
			return new format.svg.ArcSegment(this.prevX(),this.prevY(),a[0],a[1],a[2],a[3] != 0.,a[4] != 0.,a[5],a[6]);
		case 97:
			var rx6 = this.prevX();
			var ry6 = this.prevY();
			return new format.svg.ArcSegment(rx6,ry6,a[0],a[1],a[2],a[3] != 0.,a[4] != 0.,a[5] + rx6,a[6] + ry6);
		case 90:
			return new format.svg.DrawSegment(this.lastMoveX,this.lastMoveY);
		case 122:
			return new format.svg.DrawSegment(this.lastMoveX,this.lastMoveY);
		}
		return null;
	}
	,__class__: format.svg.PathParser
};
format.svg.PathSegment = function(inX,inY) {
	this.x = inX;
	this.y = inY;
};
$hxClasses["format.svg.PathSegment"] = format.svg.PathSegment;
format.svg.PathSegment.__name__ = ["format","svg","PathSegment"];
format.svg.PathSegment.prototype = {
	getType: function() {
		return 0;
	}
	,prevX: function() {
		return this.x;
	}
	,prevY: function() {
		return this.y;
	}
	,prevCX: function() {
		return this.x;
	}
	,prevCY: function() {
		return this.y;
	}
	,toGfx: function(inGfx,ioContext) {
		ioContext.setLast(this.x,this.y);
		ioContext.firstX = ioContext.lastX;
		ioContext.firstY = ioContext.lastY;
		inGfx.moveTo(ioContext.lastX,ioContext.lastY);
	}
	,__class__: format.svg.PathSegment
};
format.svg.MoveSegment = function(inX,inY) {
	format.svg.PathSegment.call(this,inX,inY);
};
$hxClasses["format.svg.MoveSegment"] = format.svg.MoveSegment;
format.svg.MoveSegment.__name__ = ["format","svg","MoveSegment"];
format.svg.MoveSegment.__super__ = format.svg.PathSegment;
format.svg.MoveSegment.prototype = $extend(format.svg.PathSegment.prototype,{
	getType: function() {
		return 1;
	}
	,__class__: format.svg.MoveSegment
});
format.svg.DrawSegment = function(inX,inY) {
	format.svg.PathSegment.call(this,inX,inY);
};
$hxClasses["format.svg.DrawSegment"] = format.svg.DrawSegment;
format.svg.DrawSegment.__name__ = ["format","svg","DrawSegment"];
format.svg.DrawSegment.__super__ = format.svg.PathSegment;
format.svg.DrawSegment.prototype = $extend(format.svg.PathSegment.prototype,{
	toGfx: function(inGfx,ioContext) {
		ioContext.setLast(this.x,this.y);
		inGfx.lineTo(ioContext.lastX,ioContext.lastY);
	}
	,getType: function() {
		return 2;
	}
	,__class__: format.svg.DrawSegment
});
format.svg.QuadraticSegment = function(inCX,inCY,inX,inY) {
	format.svg.PathSegment.call(this,inX,inY);
	this.cx = inCX;
	this.cy = inCY;
};
$hxClasses["format.svg.QuadraticSegment"] = format.svg.QuadraticSegment;
format.svg.QuadraticSegment.__name__ = ["format","svg","QuadraticSegment"];
format.svg.QuadraticSegment.__super__ = format.svg.PathSegment;
format.svg.QuadraticSegment.prototype = $extend(format.svg.PathSegment.prototype,{
	prevCX: function() {
		return this.cx;
	}
	,prevCY: function() {
		return this.cy;
	}
	,toGfx: function(inGfx,ioContext) {
		ioContext.setLast(this.x,this.y);
		inGfx.curveTo(ioContext.transX(this.cx,this.cy),ioContext.transY(this.cx,this.cy),ioContext.lastX,ioContext.lastY);
	}
	,getType: function() {
		return 3;
	}
	,__class__: format.svg.QuadraticSegment
});
format.svg.CubicSegment = function(inCX1,inCY1,inCX2,inCY2,inX,inY) {
	format.svg.PathSegment.call(this,inX,inY);
	this.cx1 = inCX1;
	this.cy1 = inCY1;
	this.cx2 = inCX2;
	this.cy2 = inCY2;
};
$hxClasses["format.svg.CubicSegment"] = format.svg.CubicSegment;
format.svg.CubicSegment.__name__ = ["format","svg","CubicSegment"];
format.svg.CubicSegment.__super__ = format.svg.PathSegment;
format.svg.CubicSegment.prototype = $extend(format.svg.PathSegment.prototype,{
	prevCX: function() {
		return this.cx2;
	}
	,prevCY: function() {
		return this.cy2;
	}
	,Interp: function(a,b,frac) {
		return a + (b - a) * frac;
	}
	,toGfx: function(inGfx,ioContext) {
		var tx0 = ioContext.lastX;
		var ty0 = ioContext.lastY;
		var tx1 = ioContext.transX(this.cx1,this.cy1);
		var ty1 = ioContext.transY(this.cx1,this.cy1);
		var tx2 = ioContext.transX(this.cx2,this.cy2);
		var ty2 = ioContext.transY(this.cx2,this.cy2);
		ioContext.setLast(this.x,this.y);
		var tx3 = ioContext.lastX;
		var ty3 = ioContext.lastY;
		var pa_x = this.Interp(tx0,tx1,0.75);
		var pa_y = this.Interp(ty0,ty1,0.75);
		var pb_x = this.Interp(tx3,tx2,0.75);
		var pb_y = this.Interp(ty3,ty2,0.75);
		var dx = (tx3 - tx0) / 16;
		var dy = (ty3 - ty0) / 16;
		var pcx_1 = this.Interp(tx0,tx1,0.375);
		var pcy_1 = this.Interp(ty0,ty1,0.375);
		var pcx_2 = this.Interp(pa_x,pb_x,0.375) - dx;
		var pcy_2 = this.Interp(pa_y,pb_y,0.375) - dy;
		var pcx_3 = this.Interp(pb_x,pa_x,0.375) + dx;
		var pcy_3 = this.Interp(pb_y,pa_y,0.375) + dy;
		var pcx_4 = this.Interp(tx3,tx2,0.375);
		var pcy_4 = this.Interp(ty3,ty2,0.375);
		var pax_1 = (pcx_1 + pcx_2) * 0.5;
		var pay_1 = (pcy_1 + pcy_2) * 0.5;
		var pax_2 = (pa_x + pb_x) * 0.5;
		var pay_2 = (pa_y + pb_y) * 0.5;
		var pax_3 = (pcx_3 + pcx_4) * 0.5;
		var pay_3 = (pcy_3 + pcy_4) * 0.5;
		inGfx.curveTo(pcx_1,pcy_1,pax_1,pay_1);
		inGfx.curveTo(pcx_2,pcy_2,pax_2,pay_2);
		inGfx.curveTo(pcx_3,pcy_3,pax_3,pay_3);
		inGfx.curveTo(pcx_4,pcy_4,tx3,ty3);
	}
	,toQuadratics: function(tx0,ty0) {
		var result = new Array();
		var pa_x = this.Interp(tx0,this.cx1,0.75);
		var pa_y = this.Interp(ty0,this.cy1,0.75);
		var pb_x = this.Interp(this.x,this.cx2,0.75);
		var pb_y = this.Interp(this.y,this.cy2,0.75);
		var dx = (this.x - tx0) / 16;
		var dy = (this.y - ty0) / 16;
		var pcx_1 = this.Interp(tx0,this.cx1,0.375);
		var pcy_1 = this.Interp(ty0,this.cy1,0.375);
		var pcx_2 = this.Interp(pa_x,pb_x,0.375) - dx;
		var pcy_2 = this.Interp(pa_y,pb_y,0.375) - dy;
		var pcx_3 = this.Interp(pb_x,pa_x,0.375) + dx;
		var pcy_3 = this.Interp(pb_y,pa_y,0.375) + dy;
		var pcx_4 = this.Interp(this.x,this.cx2,0.375);
		var pcy_4 = this.Interp(this.y,this.cy2,0.375);
		var pax_1 = (pcx_1 + pcx_2) * 0.5;
		var pay_1 = (pcy_1 + pcy_2) * 0.5;
		var pax_2 = (pa_x + pb_x) * 0.5;
		var pay_2 = (pa_y + pb_y) * 0.5;
		var pax_3 = (pcx_3 + pcx_4) * 0.5;
		var pay_3 = (pcy_3 + pcy_4) * 0.5;
		result.push(new format.svg.QuadraticSegment(pcx_1,pcy_1,pax_1,pay_1));
		result.push(new format.svg.QuadraticSegment(pcx_2,pcy_2,pax_2,pay_2));
		result.push(new format.svg.QuadraticSegment(pcx_3,pcy_3,pax_3,pay_3));
		result.push(new format.svg.QuadraticSegment(pcx_4,pcy_4,this.x,this.y));
		return result;
	}
	,getType: function() {
		return 4;
	}
	,__class__: format.svg.CubicSegment
});
format.svg.ArcSegment = function(inX1,inY1,inRX,inRY,inRotation,inLargeArc,inSweep,x,y) {
	this.x1 = inX1;
	this.y1 = inY1;
	format.svg.PathSegment.call(this,x,y);
	this.rx = inRX;
	this.ry = inRY;
	this.phi = inRotation;
	this.fA = inLargeArc;
	this.fS = inSweep;
};
$hxClasses["format.svg.ArcSegment"] = format.svg.ArcSegment;
format.svg.ArcSegment.__name__ = ["format","svg","ArcSegment"];
format.svg.ArcSegment.__super__ = format.svg.PathSegment;
format.svg.ArcSegment.prototype = $extend(format.svg.PathSegment.prototype,{
	toGfx: function(inGfx,ioContext) {
		if(this.x1 == this.x && this.y1 == this.y) return;
		ioContext.setLast(this.x,this.y);
		if(this.rx == 0 || this.ry == 0) {
			inGfx.lineTo(ioContext.lastX,ioContext.lastY);
			return;
		}
		if(this.rx < 0) this.rx = -this.rx;
		if(this.ry < 0) this.ry = -this.ry;
		var p = this.phi * Math.PI / 180.0;
		var cos = Math.cos(p);
		var sin = Math.sin(p);
		var dx = (this.x1 - this.x) * 0.5;
		var dy = (this.y1 - this.y) * 0.5;
		var x1_ = cos * dx + sin * dy;
		var y1_ = -sin * dx + cos * dy;
		var rx2 = this.rx * this.rx;
		var ry2 = this.ry * this.ry;
		var x1_2 = x1_ * x1_;
		var y1_2 = y1_ * y1_;
		var s = (rx2 * ry2 - rx2 * y1_2 - ry2 * x1_2) / (rx2 * y1_2 + ry2 * x1_2);
		if(s < 0) s = 0; else if(this.fA == this.fS) s = -Math.sqrt(s); else s = Math.sqrt(s);
		var cx_ = s * this.rx * y1_ / this.ry;
		var cy_ = -s * this.ry * x1_ / this.rx;
		var xm = (this.x1 + this.x) * 0.5;
		var ym = (this.y1 + this.y) * 0.5;
		var cx = cos * cx_ - sin * cy_ + xm;
		var cy = sin * cx_ + cos * cy_ + ym;
		var theta = Math.atan2((y1_ - cy_) / this.ry,(x1_ - cx_) / this.rx);
		var dtheta = Math.atan2((-y1_ - cy_) / this.ry,(-x1_ - cx_) / this.rx) - theta;
		if(this.fS && dtheta < 0) dtheta += 2.0 * Math.PI; else if(!this.fS && dtheta > 0) dtheta -= 2.0 * Math.PI;
		var m = ioContext.matrix;
		var Txc;
		var Txs;
		var Tx0;
		var Tyc;
		var Tys;
		var Ty0;
		if(m != null) {
			Txc = m.a * this.rx;
			Txs = m.c * this.ry;
			Tx0 = m.a * cx + m.c * cy + m.tx;
			Tyc = m.b * this.rx;
			Tys = m.d * this.ry;
			Ty0 = m.b * cx + m.d * cy + m.ty;
		} else {
			Txc = this.rx;
			Txs = 0;
			Tx0 = cx + m.tx;
			Tyc = 0;
			Tys = this.ry;
			Ty0 = cy + m.ty;
		}
		var len = Math.abs(dtheta) * Math.sqrt(Txc * Txc + Txs * Txs + Tyc * Tyc + Tys * Tys);
		len *= 5;
		var steps = Math.round(len);
		if(steps > 1) {
			dtheta /= steps;
			var _g1 = 1;
			var _g = steps - 1;
			while(_g1 < _g) {
				var i = _g1++;
				var c = Math.cos(theta);
				var s1 = Math.sin(theta);
				theta += dtheta;
				inGfx.lineTo(Txc * c + Txs * s1 + Tx0,Tyc * c + Tys * s1 + Ty0);
			}
		}
		inGfx.lineTo(ioContext.lastX,ioContext.lastY);
	}
	,getType: function() {
		return 5;
	}
	,__class__: format.svg.ArcSegment
});
format.svg.RenderContext = function(inMatrix,inRect,inW,inH) {
	this.matrix = inMatrix;
	this.rect = inRect;
	if(inW != null) this.rectW = inW; else if(inRect != null) this.rectW = inRect.width; else this.rectW = 1;
	if(inH != null) this.rectH = inH; else if(inRect != null) this.rectH = inRect.height; else this.rectH = 1;
	this.firstX = 0;
	this.firstY = 0;
	this.lastX = 0;
	this.lastY = 0;
};
$hxClasses["format.svg.RenderContext"] = format.svg.RenderContext;
format.svg.RenderContext.__name__ = ["format","svg","RenderContext"];
format.svg.RenderContext.prototype = {
	transX: function(inX,inY) {
		if(this.rect != null && inX > this.rect.x) {
			if(inX > this.rect.get_right()) inX += this.rectW - this.rect.width; else inX = this.rect.x + this.rectW * (inX - this.rect.x) / this.rect.width;
		}
		return inX * this.matrix.a + inY * this.matrix.c + this.matrix.tx;
	}
	,transY: function(inX,inY) {
		if(this.rect != null && inY > this.rect.y) {
			if(inY > this.rect.get_right()) inY += this.rectH - this.rect.height; else inY = this.rect.y + this.rectH * (inY - this.rect.y) / this.rect.height;
		}
		return inX * this.matrix.b + inY * this.matrix.d + this.matrix.ty;
	}
	,setLast: function(inX,inY) {
		this.lastX = this.transX(inX,inY);
		this.lastY = this.transY(inX,inY);
	}
	,__class__: format.svg.RenderContext
};
format.svg.SVG2Gfx = function(inXml) {
	this.renderer = new format.svg.SVGRenderer(new format.svg.SVGData(inXml));
};
$hxClasses["format.svg.SVG2Gfx"] = format.svg.SVG2Gfx;
format.svg.SVG2Gfx.__name__ = ["format","svg","SVG2Gfx"];
format.svg.SVG2Gfx.prototype = {
	createShape: function() {
		return this.renderer.createShape();
	}
	,__class__: format.svg.SVG2Gfx
};
format.svg.SVGData = function(inXML,inConvertCubics) {
	if(inConvertCubics == null) inConvertCubics = false;
	format.svg.Group.call(this);
	var svg = inXML.firstElement();
	if(svg == null || svg.get_nodeName() != "svg" && svg.get_nodeName() != "svg:svg") throw "Not an SVG file (" + (svg == null?"null":svg.get_nodeName()) + ")";
	this.mGrads = new haxe.ds.StringMap();
	this.mPathParser = new format.svg.PathParser();
	this.mConvertCubics = inConvertCubics;
	this.width = this.getFloatStyle("width",svg,null,0.0);
	this.height = this.getFloatStyle("height",svg,null,0.0);
	if(this.width == 0 && this.height == 0) this.width = this.height = 400; else if(this.width == 0) this.width = this.height; else if(this.height == 0) this.height = this.width;
	this.loadGroup(this,svg,new openfl.geom.Matrix(),null);
};
$hxClasses["format.svg.SVGData"] = format.svg.SVGData;
format.svg.SVGData.__name__ = ["format","svg","SVGData"];
format.svg.SVGData.__super__ = format.svg.Group;
format.svg.SVGData.prototype = $extend(format.svg.Group.prototype,{
	applyTransform: function(ioMatrix,inTrans) {
		var scale = 1.0;
		if(format.svg.SVGData.mTranslateMatch.match(inTrans)) ioMatrix.translate(Std.parseFloat(format.svg.SVGData.mTranslateMatch.matched(1)),Std.parseFloat(format.svg.SVGData.mTranslateMatch.matched(2))); else if(format.svg.SVGData.mScaleMatch.match(inTrans)) {
			var s = Std.parseFloat(format.svg.SVGData.mScaleMatch.matched(1));
			ioMatrix.scale(s,s);
			scale = s;
		} else if(format.svg.SVGData.mMatrixMatch.match(inTrans)) {
			var m = new openfl.geom.Matrix(Std.parseFloat(format.svg.SVGData.mMatrixMatch.matched(1)),Std.parseFloat(format.svg.SVGData.mMatrixMatch.matched(2)),Std.parseFloat(format.svg.SVGData.mMatrixMatch.matched(3)),Std.parseFloat(format.svg.SVGData.mMatrixMatch.matched(4)),Std.parseFloat(format.svg.SVGData.mMatrixMatch.matched(5)),Std.parseFloat(format.svg.SVGData.mMatrixMatch.matched(6)));
			m.concat(ioMatrix);
			ioMatrix.a = m.a;
			ioMatrix.b = m.b;
			ioMatrix.c = m.c;
			ioMatrix.d = m.d;
			ioMatrix.tx = m.tx;
			ioMatrix.ty = m.ty;
			scale = Math.sqrt(ioMatrix.a * ioMatrix.a + ioMatrix.c * ioMatrix.c);
		} else haxe.Log.trace("Warning, unknown transform:" + inTrans,{ fileName : "SVGData.hx", lineNumber : 130, className : "format.svg.SVGData", methodName : "applyTransform"});
		return scale;
	}
	,dumpGroup: function(g,indent) {
		haxe.Log.trace(indent + "Group:" + g.name,{ fileName : "SVGData.hx", lineNumber : 141, className : "format.svg.SVGData", methodName : "dumpGroup"});
		indent += "  ";
		var _g = 0;
		var _g1 = g.children;
		while(_g < _g1.length) {
			var e = _g1[_g];
			++_g;
			switch(e[1]) {
			case 0:
				var path = e[2];
				haxe.Log.trace(indent + "Path" + "  " + Std.string(path.matrix),{ fileName : "SVGData.hx", lineNumber : 148, className : "format.svg.SVGData", methodName : "dumpGroup"});
				break;
			case 1:
				var group = e[2];
				this.dumpGroup(group,indent + "   ");
				break;
			case 2:
				var text = e[2];
				haxe.Log.trace(indent + "Text " + text.text,{ fileName : "SVGData.hx", lineNumber : 150, className : "format.svg.SVGData", methodName : "dumpGroup"});
				break;
			}
		}
	}
	,getColorStyle: function(inKey,inNode,inStyles,inDefault) {
		var s = this.getStyle(inKey,inNode,inStyles,"");
		if(s == "") return inDefault;
		if(s.charAt(0) == "#") return Std.parseInt("0x" + HxOverrides.substr(s,1,null));
		return Std.parseInt(s);
	}
	,getFillStyle: function(inKey,inNode,inStyles) {
		var s = this.getStyle(inKey,inNode,inStyles,"");
		if(s == "") return format.svg.SVGData.defaultFill;
		if(s.charAt(0) == "#") return format.svg.FillType.FillSolid(Std.parseInt("0x" + HxOverrides.substr(s,1,null)));
		if(s == "none") return format.svg.FillType.FillNone;
		if(format.svg.SVGData.mURLMatch.match(s)) {
			var url = format.svg.SVGData.mURLMatch.matched(1);
			if(this.mGrads.exists(url)) return format.svg.FillType.FillGrad(this.mGrads.get(url));
			throw "Unknown url:" + url;
		}
		throw "Unknown fill string:" + s;
		return format.svg.FillType.FillNone;
	}
	,getFloat: function(inXML,inName,inDef) {
		if(inDef == null) inDef = 0.0;
		if(inXML.exists(inName)) return Std.parseFloat(inXML.get(inName));
		return inDef;
	}
	,getFloatStyle: function(inKey,inNode,inStyles,inDefault) {
		var s = this.getStyle(inKey,inNode,inStyles,"");
		if(s == "") return inDefault;
		return Std.parseFloat(s);
	}
	,getStrokeStyle: function(inKey,inNode,inStyles,inDefault) {
		var s = this.getStyle(inKey,inNode,inStyles,"");
		if(s == "") return inDefault;
		if(s == "none") return null;
		if(s.charAt(0) == "#") return Std.parseInt("0x" + HxOverrides.substr(s,1,null));
		return Std.parseInt(s);
	}
	,getStyle: function(inKey,inNode,inStyles,inDefault) {
		if(inNode != null && inNode.exists(inKey)) return inNode.get(inKey);
		if(inStyles != null && inStyles.exists(inKey)) return inStyles.get(inKey);
		return inDefault;
	}
	,getStyles: function(inNode,inPrevStyles) {
		if(!inNode.exists("style")) return inPrevStyles;
		var styles = new haxe.ds.StringMap();
		if(inPrevStyles != null) {
			var $it0 = inPrevStyles.keys();
			while( $it0.hasNext() ) {
				var s = $it0.next();
				styles.set(s,inPrevStyles.get(s));
			}
		}
		var style = inNode.get("style");
		var strings = format.svg.SVGData.mStyleSplit.split(style);
		var _g = 0;
		while(_g < strings.length) {
			var s1 = strings[_g];
			++_g;
			if(format.svg.SVGData.mStyleValue.match(s1)) styles.set(format.svg.SVGData.mStyleValue.matched(1),format.svg.SVGData.mStyleValue.matched(2));
		}
		return styles;
	}
	,loadDefs: function(inXML) {
		var _g = 0;
		while(_g < 2) {
			var pass = _g++;
			var $it0 = inXML.elements();
			while( $it0.hasNext() ) {
				var def = $it0.next();
				var name = def.get_nodeName();
				if(HxOverrides.substr(name,0,4) == "svg:") name = HxOverrides.substr(name,4,null);
				if(name == "linearGradient") this.loadGradient(def,openfl.display.GradientType.LINEAR,pass == 1); else if(name == "radialGradient") this.loadGradient(def,openfl.display.GradientType.RADIAL,pass == 1);
			}
		}
	}
	,loadGradient: function(inGrad,inType,inCrossLink) {
		var name = inGrad.get("id");
		var grad = new format.svg.Grad(inType);
		if(inCrossLink && inGrad.exists("xlink:href")) {
			var xlink = inGrad.get("xlink:href");
			if(xlink.charAt(0) != "#") throw "xlink - unkown syntax : " + xlink;
			var base = this.mGrads.get(HxOverrides.substr(xlink,1,null));
			if(base != null) {
				grad.colors = base.colors;
				grad.alphas = base.alphas;
				grad.ratios = base.ratios;
				grad.gradMatrix = base.gradMatrix.clone();
				grad.spread = base.spread;
				grad.interp = base.interp;
				grad.radius = base.radius;
			} else throw "Unknown xlink : " + xlink;
		}
		if(inGrad.exists("x1")) {
			grad.x1 = this.getFloat(inGrad,"x1");
			grad.y1 = this.getFloat(inGrad,"y1");
			grad.x2 = this.getFloat(inGrad,"x2");
			grad.y2 = this.getFloat(inGrad,"y2");
		} else {
			grad.x1 = this.getFloat(inGrad,"cx");
			grad.y1 = this.getFloat(inGrad,"cy");
			grad.x2 = this.getFloat(inGrad,"fx",grad.x1);
			grad.y2 = this.getFloat(inGrad,"fy",grad.y1);
		}
		grad.radius = this.getFloat(inGrad,"r");
		if(inGrad.exists("gradientTransform")) this.applyTransform(grad.gradMatrix,inGrad.get("gradientTransform"));
		var $it0 = inGrad.elements();
		while( $it0.hasNext() ) {
			var stop = $it0.next();
			var styles = this.getStyles(stop,null);
			grad.colors.push(this.getColorStyle("stop-color",stop,styles,0));
			grad.alphas.push(this.getFloatStyle("stop-opacity",stop,styles,1.0));
			grad.ratios.push(Std["int"](Std.parseFloat(stop.get("offset")) * 255.0));
		}
		this.mGrads.set(name,grad);
	}
	,loadGroup: function(g,inG,matrix,inStyles) {
		if(inG.exists("transform")) {
			matrix = new openfl.geom.Matrix(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			this.applyTransform(matrix,inG.get("transform"));
		}
		if(inG.exists("inkscape:label")) g.name = inG.get("inkscape:label"); else if(inG.exists("id")) g.name = inG.get("id");
		var styles = this.getStyles(inG,inStyles);
		var $it0 = inG.elements();
		while( $it0.hasNext() ) {
			var el = $it0.next();
			var name = el.get_nodeName();
			if(HxOverrides.substr(name,0,4) == "svg:") name = HxOverrides.substr(name,4,null);
			if(name == "defs") this.loadDefs(el); else if(name == "g") {
				if(!(el.exists("display") && el.get("display") == "none")) g.children.push(format.svg.DisplayElement.DisplayGroup(this.loadGroup(new format.svg.Group(),el,matrix,styles)));
			} else if(name == "path" || name == "line" || name == "polyline") g.children.push(format.svg.DisplayElement.DisplayPath(this.loadPath(el,matrix,styles,false,false))); else if(name == "rect") g.children.push(format.svg.DisplayElement.DisplayPath(this.loadPath(el,matrix,styles,true,false))); else if(name == "polygon") g.children.push(format.svg.DisplayElement.DisplayPath(this.loadPath(el,matrix,styles,false,false))); else if(name == "ellipse") g.children.push(format.svg.DisplayElement.DisplayPath(this.loadPath(el,matrix,styles,false,true))); else if(name == "circle") g.children.push(format.svg.DisplayElement.DisplayPath(this.loadPath(el,matrix,styles,false,true,true))); else if(name == "text") g.children.push(format.svg.DisplayElement.DisplayText(this.loadText(el,matrix,styles))); else if(name == "linearGradient") this.loadGradient(el,openfl.display.GradientType.LINEAR,true); else if(name == "radialGradient") this.loadGradient(el,openfl.display.GradientType.RADIAL,true); else {
			}
		}
		return g;
	}
	,loadPath: function(inPath,matrix,inStyles,inIsRect,inIsEllipse,inIsCircle) {
		if(inIsCircle == null) inIsCircle = false;
		if(inPath.exists("transform")) {
			matrix = new openfl.geom.Matrix(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			this.applyTransform(matrix,inPath.get("transform"));
		}
		var styles = this.getStyles(inPath,inStyles);
		var name;
		if(inPath.exists("id")) name = inPath.get("id"); else name = "";
		var path = new format.svg.Path();
		path.fill = this.getFillStyle("fill",inPath,styles);
		path.alpha = this.getFloatStyle("opacity",inPath,styles,1.0);
		path.fill_alpha = this.getFloatStyle("fill-opacity",inPath,styles,1.0);
		path.stroke_alpha = this.getFloatStyle("stroke-opacity",inPath,styles,1.0);
		path.stroke_colour = this.getStrokeStyle("stroke",inPath,styles,null);
		path.stroke_width = this.getFloatStyle("stroke-width",inPath,styles,1.0);
		path.stroke_caps = "round";
		path.joint_style = "round";
		path.miter_limit = this.getFloatStyle("stroke-miterlimit",inPath,styles,3.0);
		path.segments = [];
		path.matrix = matrix;
		path.name = name;
		if(inIsRect) {
			var x;
			if(inPath.exists("x")) x = Std.parseFloat(inPath.get("x")); else x = 0;
			var y;
			if(inPath.exists("y")) y = Std.parseFloat(inPath.get("y")); else y = 0;
			var w = Std.parseFloat(inPath.get("width"));
			var h = Std.parseFloat(inPath.get("height"));
			var rx;
			if(inPath.exists("rx")) rx = Std.parseFloat(inPath.get("rx")); else rx = 0.0;
			var ry;
			if(inPath.exists("ry")) ry = Std.parseFloat(inPath.get("ry")); else ry = 0.0;
			if(rx == 0 || ry == 0) {
				path.segments.push(new format.svg.MoveSegment(x,y));
				path.segments.push(new format.svg.DrawSegment(x + w,y));
				path.segments.push(new format.svg.DrawSegment(x + w,y + h));
				path.segments.push(new format.svg.DrawSegment(x,y + h));
				path.segments.push(new format.svg.DrawSegment(x,y));
			} else {
				path.segments.push(new format.svg.MoveSegment(x,y + ry));
				path.segments.push(new format.svg.QuadraticSegment(x,y,x + rx,y));
				path.segments.push(new format.svg.DrawSegment(x + w - rx,y));
				path.segments.push(new format.svg.QuadraticSegment(x + w,y,x + w,y + rx));
				path.segments.push(new format.svg.DrawSegment(x + w,y + h - ry));
				path.segments.push(new format.svg.QuadraticSegment(x + w,y + h,x + w - rx,y + h));
				path.segments.push(new format.svg.DrawSegment(x + rx,y + h));
				path.segments.push(new format.svg.QuadraticSegment(x,y + h,x,y + h - ry));
				path.segments.push(new format.svg.DrawSegment(x,y + ry));
			}
		} else if(inIsEllipse) {
			var x1;
			if(inPath.exists("cx")) x1 = Std.parseFloat(inPath.get("cx")); else x1 = 0;
			var y1;
			if(inPath.exists("cy")) y1 = Std.parseFloat(inPath.get("cy")); else y1 = 0;
			var r;
			if(inIsCircle && inPath.exists("r")) r = Std.parseFloat(inPath.get("r")); else r = 0.0;
			var w1;
			if(inIsCircle) w1 = r; else if(inPath.exists("rx")) w1 = Std.parseFloat(inPath.get("rx")); else w1 = 0.0;
			var w_ = w1 * format.svg.SVGData.SIN45;
			var cw_ = w1 * format.svg.SVGData.TAN22;
			var h1;
			if(inIsCircle) h1 = r; else if(inPath.exists("ry")) h1 = Std.parseFloat(inPath.get("ry")); else h1 = 0.0;
			var h_ = h1 * format.svg.SVGData.SIN45;
			var ch_ = h1 * format.svg.SVGData.TAN22;
			path.segments.push(new format.svg.MoveSegment(x1 + w1,y1));
			path.segments.push(new format.svg.QuadraticSegment(x1 + w1,y1 + ch_,x1 + w_,y1 + h_));
			path.segments.push(new format.svg.QuadraticSegment(x1 + cw_,y1 + h1,x1,y1 + h1));
			path.segments.push(new format.svg.QuadraticSegment(x1 - cw_,y1 + h1,x1 - w_,y1 + h_));
			path.segments.push(new format.svg.QuadraticSegment(x1 - w1,y1 + ch_,x1 - w1,y1));
			path.segments.push(new format.svg.QuadraticSegment(x1 - w1,y1 - ch_,x1 - w_,y1 - h_));
			path.segments.push(new format.svg.QuadraticSegment(x1 - cw_,y1 - h1,x1,y1 - h1));
			path.segments.push(new format.svg.QuadraticSegment(x1 + cw_,y1 - h1,x1 + w_,y1 - h_));
			path.segments.push(new format.svg.QuadraticSegment(x1 + w1,y1 - ch_,x1 + w1,y1));
		} else {
			var d;
			if(inPath.exists("points")) d = "M" + inPath.get("points") + "z"; else if(inPath.exists("x1")) d = "M" + inPath.get("x1") + "," + inPath.get("y1") + " " + inPath.get("x2") + "," + inPath.get("y2") + "z"; else d = inPath.get("d");
			var _g = 0;
			var _g1 = this.mPathParser.parse(d,this.mConvertCubics);
			while(_g < _g1.length) {
				var segment = _g1[_g];
				++_g;
				path.segments.push(segment);
			}
		}
		return path;
	}
	,loadText: function(inText,matrix,inStyles) {
		if(inText.exists("transform")) {
			matrix = new openfl.geom.Matrix(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			this.applyTransform(matrix,inText.get("transform"));
		}
		var styles = this.getStyles(inText,inStyles);
		var text = new format.svg.Text();
		text.matrix = matrix;
		if(inText.exists("id")) text.name = inText.get("id"); else text.name = "";
		text.x = this.getFloat(inText,"x",0.0);
		text.y = this.getFloat(inText,"y",0.0);
		text.fill = this.getFillStyle("fill",inText,styles);
		text.fill_alpha = this.getFloatStyle("fill-opacity",inText,styles,1.0);
		text.stroke_alpha = this.getFloatStyle("stroke-opacity",inText,styles,1.0);
		text.stroke_colour = this.getStrokeStyle("stroke",inText,styles,null);
		text.stroke_width = this.getFloatStyle("stroke-width",inText,styles,1.0);
		text.font_family = this.getStyle("font-family",inText,styles,"");
		text.font_size = this.getFloatStyle("font-size",inText,styles,12);
		text.letter_spacing = this.getFloatStyle("letter-spacing",inText,styles,0);
		text.kerning = this.getFloatStyle("kerning",inText,styles,0);
		var string = "";
		var $it0 = inText.elements();
		while( $it0.hasNext() ) {
			var el = $it0.next();
			string += el.toString();
		}
		text.text = string;
		return text;
	}
	,__class__: format.svg.SVGData
});
format.svg.SVGRenderer = function(inSvg,inLayer) {
	this.mSvg = inSvg;
	this.width = this.mSvg.width;
	this.height = this.mSvg.height;
	this.mRoot = this.mSvg;
	if(inLayer != null) {
		this.mRoot = this.mSvg.findGroup(inLayer);
		if(this.mRoot == null) throw "Could not find SVG group: " + inLayer;
	}
};
$hxClasses["format.svg.SVGRenderer"] = format.svg.SVGRenderer;
format.svg.SVGRenderer.__name__ = ["format","svg","SVGRenderer"];
format.svg.SVGRenderer.toHaxe = function(inXML,inFilter) {
	return new format.svg.SVGRenderer(new format.svg.SVGData(inXML,true)).iterate(new format.gfx.Gfx2Haxe(),inFilter).commands;
};
format.svg.SVGRenderer.toBytes = function(inXML,inFilter) {
	return new format.svg.SVGRenderer(new format.svg.SVGData(inXML,true)).iterate(new format.gfx.GfxBytes(),inFilter);
};
format.svg.SVGRenderer.prototype = {
	iterate: function(inGfx,inFilter) {
		this.mGfx = inGfx;
		this.mMatrix = new openfl.geom.Matrix();
		this.mFilter = inFilter;
		this.mGroupPath = [];
		this.mGfx.size(this.width,this.height);
		this.iterateGroup(this.mRoot,true);
		this.mGfx.eof();
		return inGfx;
	}
	,hasGroup: function(inName) {
		return this.mRoot.hasGroup(inName);
	}
	,iterateText: function(inText) {
		if(this.mFilter != null && !this.mFilter(inText.name,this.mGroupPath)) return;
		this.mGfx.renderText(inText);
	}
	,iteratePath: function(inPath) {
		if(this.mFilter != null && !this.mFilter(inPath.name,this.mGroupPath)) return;
		if(inPath.segments.length == 0 || this.mGfx == null) return;
		var px = 0.0;
		var py = 0.0;
		var m = inPath.matrix.clone();
		m.concat(this.mMatrix);
		var context = new format.svg.RenderContext(m,this.mScaleRect,this.mScaleW,this.mScaleH);
		var geomOnly = this.mGfx.geometryOnly();
		if(!geomOnly) {
			inPath.segments[0].toGfx(this.mGfx,context);
			{
				var _g = inPath.fill;
				switch(_g[1]) {
				case 0:
					var grad = _g[2];
					grad.updateMatrix(m);
					this.mGfx.beginGradientFill(grad);
					break;
				case 1:
					var colour = _g[2];
					this.mGfx.beginFill(colour,inPath.fill_alpha * inPath.alpha);
					break;
				case 2:
					break;
				}
			}
			if(inPath.stroke_colour == null) {
			} else {
				var style = new format.gfx.LineStyle();
				var scale = Math.sqrt(m.a * m.a + m.c * m.c);
				style.thickness = inPath.stroke_width * scale;
				style.alpha = inPath.stroke_alpha * inPath.alpha;
				style.color = inPath.stroke_colour;
				style.capsStyle = inPath.stroke_caps;
				style.jointStyle = inPath.joint_style;
				style.miterLimit = inPath.miter_limit;
				this.mGfx.lineStyle(style);
			}
		}
		var _g1 = 0;
		var _g11 = inPath.segments;
		while(_g1 < _g11.length) {
			var segment = _g11[_g1];
			++_g1;
			segment.toGfx(this.mGfx,context);
		}
		this.mGfx.endFill();
		this.mGfx.endLineStyle();
	}
	,iterateGroup: function(inGroup,inIgnoreDot) {
		if(inIgnoreDot && inGroup.name != null && HxOverrides.substr(inGroup.name,0,1) == ".") return;
		this.mGroupPath.push(inGroup.name);
		var _g = 0;
		var _g1 = inGroup.children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			switch(child[1]) {
			case 1:
				var group = child[2];
				this.iterateGroup(group,inIgnoreDot);
				break;
			case 0:
				var path = child[2];
				this.iteratePath(path);
				break;
			case 2:
				var text = child[2];
				this.iterateText(text);
				break;
			}
		}
		this.mGroupPath.pop();
	}
	,render: function(inGfx,inMatrix,inFilter,inScaleRect,inScaleW,inScaleH) {
		this.mGfx = new format.gfx.GfxGraphics(inGfx);
		if(inMatrix == null) this.mMatrix = new openfl.geom.Matrix(); else this.mMatrix = new openfl.geom.Matrix(inMatrix.a,inMatrix.b,inMatrix.c,inMatrix.d,inMatrix.tx,inMatrix.ty);
		this.mScaleRect = inScaleRect;
		this.mScaleW = inScaleW;
		this.mScaleH = inScaleH;
		this.mFilter = inFilter;
		this.mGroupPath = [];
		this.iterateGroup(this.mRoot,inFilter == null);
	}
	,renderRect: function(inGfx,inFilter,scaleRect,inBounds,inRect) {
		var matrix = new openfl.geom.Matrix();
		matrix.tx = inRect.x - inBounds.x;
		matrix.ty = inRect.y - inBounds.y;
		if(scaleRect != null) {
			var extraX = inRect.width - (inBounds.width - scaleRect.width);
			var extraY = inRect.height - (inBounds.height - scaleRect.height);
			this.render(inGfx,matrix,inFilter,scaleRect,extraX,extraY);
		} else this.render(inGfx,matrix,inFilter);
	}
	,renderRect0: function(inGfx,inFilter,scaleRect,inBounds,inRect) {
		var matrix = new openfl.geom.Matrix();
		matrix.tx = -inBounds.x;
		matrix.ty = -inBounds.y;
		if(scaleRect != null) {
			var extraX = inRect.width - (inBounds.width - scaleRect.width);
			var extraY = inRect.height - (inBounds.height - scaleRect.height);
			this.render(inGfx,matrix,inFilter,scaleRect,extraX,extraY);
		} else this.render(inGfx,matrix,inFilter);
	}
	,getExtent: function(inMatrix,inFilter,inIgnoreDot) {
		if(inIgnoreDot == null) inIgnoreDot = inFilter == null;
		var gfx = new format.gfx.GfxExtent();
		this.mGfx = gfx;
		if(inMatrix == null) this.mMatrix = new openfl.geom.Matrix(); else this.mMatrix = new openfl.geom.Matrix(inMatrix.a,inMatrix.b,inMatrix.c,inMatrix.d,inMatrix.tx,inMatrix.ty);
		this.mFilter = inFilter;
		this.mGroupPath = [];
		this.iterateGroup(this.mRoot,inIgnoreDot);
		return gfx.extent;
	}
	,findText: function(inFilter) {
		this.mFilter = inFilter;
		this.mGroupPath = [];
		var finder = new format.gfx.GfxTextFinder();
		this.mGfx = finder;
		this.iterateGroup(this.mRoot,false);
		return finder.text;
	}
	,getMatchingRect: function(inMatch) {
		return this.getExtent(null,function(_,groups) {
			return groups[1] != null && inMatch.match(groups[1]);
		},false);
	}
	,renderObject: function(inObj,inGfx,inMatrix,inFilter,inScale9) {
		this.render(inGfx,inMatrix,inFilter,inScale9);
		var rect = this.getExtent(inMatrix,function(_,groups) {
			return groups[1] == ".scale9";
		});
	}
	,renderSprite: function(inObj,inMatrix,inFilter,inScale9) {
		this.renderObject(inObj,inObj.get_graphics(),inMatrix,inFilter,inScale9);
	}
	,createShape: function(inMatrix,inFilter,inScale9) {
		var shape = new openfl.display.Shape();
		this.renderObject(shape,shape.get_graphics(),inMatrix,inFilter,inScale9);
		return shape;
	}
	,namedShape: function(inName) {
		return this.createShape(null,function(name,_) {
			return name == inName;
		});
	}
	,renderBitmap: function(inRect,inScale) {
		if(inScale == null) inScale = 1.0;
		this.mMatrix = new openfl.geom.Matrix(inScale,0,0,inScale,-inRect.x * inScale,-inRect.y * inScale);
		var w = Std["int"](Math.ceil(inRect == null?this.width:inRect.width * inScale));
		var h = Std["int"](Math.ceil(inRect == null?this.width:inRect.height * inScale));
		var bmp = new openfl.display.BitmapData(w,h,true,0);
		var shape = new openfl.display.Shape();
		this.mGfx = new format.gfx.GfxGraphics(shape.get_graphics());
		this.mGroupPath = [];
		this.iterateGroup(this.mRoot,true);
		bmp.draw(shape);
		this.mGfx = null;
		return bmp;
	}
	,__class__: format.svg.SVGRenderer
};
format.svg.Text = function() {
};
$hxClasses["format.svg.Text"] = format.svg.Text;
format.svg.Text.__name__ = ["format","svg","Text"];
format.svg.Text.prototype = {
	__class__: format.svg.Text
};
var haxe = {};
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","LocalFunction"] };
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.LocalFunction = function(v) { var $x = ["LocalFunction",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.CallStack = function() { };
$hxClasses["haxe.CallStack"] = haxe.CallStack;
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
$hxClasses["haxe.Log"] = haxe.Log;
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
};
haxe.Serializer = function() {
	this.buf = new StringBuf();
	this.cache = new Array();
	this.useCache = haxe.Serializer.USE_CACHE;
	this.useEnumIndex = haxe.Serializer.USE_ENUM_INDEX;
	this.shash = new haxe.ds.StringMap();
	this.scount = 0;
};
$hxClasses["haxe.Serializer"] = haxe.Serializer;
haxe.Serializer.__name__ = ["haxe","Serializer"];
haxe.Serializer.run = function(v) {
	var s = new haxe.Serializer();
	s.serialize(v);
	return s.toString();
};
haxe.Serializer.prototype = {
	toString: function() {
		return this.buf.b;
	}
	,serializeString: function(s) {
		var x = this.shash.get(s);
		if(x != null) {
			this.buf.b += "R";
			if(x == null) this.buf.b += "null"; else this.buf.b += "" + x;
			return;
		}
		this.shash.set(s,this.scount++);
		this.buf.b += "y";
		s = encodeURIComponent(s);
		if(s.length == null) this.buf.b += "null"; else this.buf.b += "" + s.length;
		this.buf.b += ":";
		if(s == null) this.buf.b += "null"; else this.buf.b += "" + s;
	}
	,serializeRef: function(v) {
		var vt = typeof(v);
		var _g1 = 0;
		var _g = this.cache.length;
		while(_g1 < _g) {
			var i = _g1++;
			var ci = this.cache[i];
			if(typeof(ci) == vt && ci == v) {
				this.buf.b += "r";
				if(i == null) this.buf.b += "null"; else this.buf.b += "" + i;
				return true;
			}
		}
		this.cache.push(v);
		return false;
	}
	,serializeFields: function(v) {
		var _g = 0;
		var _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.serializeString(f);
			this.serialize(Reflect.field(v,f));
		}
		this.buf.b += "g";
	}
	,serialize: function(v) {
		{
			var _g = Type["typeof"](v);
			switch(_g[1]) {
			case 0:
				this.buf.b += "n";
				break;
			case 1:
				var v1 = v;
				if(v1 == 0) {
					this.buf.b += "z";
					return;
				}
				this.buf.b += "i";
				if(v1 == null) this.buf.b += "null"; else this.buf.b += "" + v1;
				break;
			case 2:
				var v2 = v;
				if(Math.isNaN(v2)) this.buf.b += "k"; else if(!Math.isFinite(v2)) if(v2 < 0) this.buf.b += "m"; else this.buf.b += "p"; else {
					this.buf.b += "d";
					if(v2 == null) this.buf.b += "null"; else this.buf.b += "" + v2;
				}
				break;
			case 3:
				if(v) this.buf.b += "t"; else this.buf.b += "f";
				break;
			case 6:
				var c = _g[2];
				if(c == String) {
					this.serializeString(v);
					return;
				}
				if(this.useCache && this.serializeRef(v)) return;
				switch(c) {
				case Array:
					var ucount = 0;
					this.buf.b += "a";
					var l = v.length;
					var _g1 = 0;
					while(_g1 < l) {
						var i = _g1++;
						if(v[i] == null) ucount++; else {
							if(ucount > 0) {
								if(ucount == 1) this.buf.b += "n"; else {
									this.buf.b += "u";
									if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
								}
								ucount = 0;
							}
							this.serialize(v[i]);
						}
					}
					if(ucount > 0) {
						if(ucount == 1) this.buf.b += "n"; else {
							this.buf.b += "u";
							if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
						}
					}
					this.buf.b += "h";
					break;
				case List:
					this.buf.b += "l";
					var v3 = v;
					var $it0 = v3.iterator();
					while( $it0.hasNext() ) {
						var i1 = $it0.next();
						this.serialize(i1);
					}
					this.buf.b += "h";
					break;
				case Date:
					var d = v;
					this.buf.b += "v";
					this.buf.add(HxOverrides.dateStr(d));
					break;
				case haxe.ds.StringMap:
					this.buf.b += "b";
					var v4 = v;
					var $it1 = v4.keys();
					while( $it1.hasNext() ) {
						var k = $it1.next();
						this.serializeString(k);
						this.serialize(v4.get(k));
					}
					this.buf.b += "h";
					break;
				case haxe.ds.IntMap:
					this.buf.b += "q";
					var v5 = v;
					var $it2 = v5.keys();
					while( $it2.hasNext() ) {
						var k1 = $it2.next();
						this.buf.b += ":";
						if(k1 == null) this.buf.b += "null"; else this.buf.b += "" + k1;
						this.serialize(v5.get(k1));
					}
					this.buf.b += "h";
					break;
				case haxe.ds.ObjectMap:
					this.buf.b += "M";
					var v6 = v;
					var $it3 = v6.keys();
					while( $it3.hasNext() ) {
						var k2 = $it3.next();
						var id = Reflect.field(k2,"__id__");
						Reflect.deleteField(k2,"__id__");
						this.serialize(k2);
						k2.__id__ = id;
						this.serialize(v6.h[k2.__id__]);
					}
					this.buf.b += "h";
					break;
				case haxe.io.Bytes:
					var v7 = v;
					var i2 = 0;
					var max = v7.length - 2;
					var charsBuf = new StringBuf();
					var b64 = haxe.Serializer.BASE64;
					while(i2 < max) {
						var b1 = v7.get(i2++);
						var b2 = v7.get(i2++);
						var b3 = v7.get(i2++);
						charsBuf.add(b64.charAt(b1 >> 2));
						charsBuf.add(b64.charAt((b1 << 4 | b2 >> 4) & 63));
						charsBuf.add(b64.charAt((b2 << 2 | b3 >> 6) & 63));
						charsBuf.add(b64.charAt(b3 & 63));
					}
					if(i2 == max) {
						var b11 = v7.get(i2++);
						var b21 = v7.get(i2++);
						charsBuf.add(b64.charAt(b11 >> 2));
						charsBuf.add(b64.charAt((b11 << 4 | b21 >> 4) & 63));
						charsBuf.add(b64.charAt(b21 << 2 & 63));
					} else if(i2 == max + 1) {
						var b12 = v7.get(i2++);
						charsBuf.add(b64.charAt(b12 >> 2));
						charsBuf.add(b64.charAt(b12 << 4 & 63));
					}
					var chars = charsBuf.b;
					this.buf.b += "s";
					if(chars.length == null) this.buf.b += "null"; else this.buf.b += "" + chars.length;
					this.buf.b += ":";
					if(chars == null) this.buf.b += "null"; else this.buf.b += "" + chars;
					break;
				default:
					if(this.useCache) this.cache.pop();
					if(v.hxSerialize != null) {
						this.buf.b += "C";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						v.hxSerialize(this);
						this.buf.b += "g";
					} else {
						this.buf.b += "c";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						this.serializeFields(v);
					}
				}
				break;
			case 4:
				if(this.useCache && this.serializeRef(v)) return;
				this.buf.b += "o";
				this.serializeFields(v);
				break;
			case 7:
				var e = _g[2];
				if(this.useCache) {
					if(this.serializeRef(v)) return;
					this.cache.pop();
				}
				if(this.useEnumIndex) this.buf.b += "j"; else this.buf.b += "w";
				this.serializeString(Type.getEnumName(e));
				if(this.useEnumIndex) {
					this.buf.b += ":";
					this.buf.b += Std.string(v[1]);
				} else this.serializeString(v[0]);
				this.buf.b += ":";
				var l1 = v.length;
				this.buf.b += Std.string(l1 - 2);
				var _g11 = 2;
				while(_g11 < l1) {
					var i3 = _g11++;
					this.serialize(v[i3]);
				}
				if(this.useCache) this.cache.push(v);
				break;
			case 5:
				throw "Cannot serialize function";
				break;
			default:
				throw "Cannot serialize " + Std.string(v);
			}
		}
	}
	,__class__: haxe.Serializer
};
haxe.Timer = function() { };
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
};
haxe.Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe.Unserializer;
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0;
	var _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
};
haxe.Unserializer.run = function(v) {
	return new haxe.Unserializer(v).unserialize();
};
haxe.Unserializer.prototype = {
	setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_1) {
			return null;
		}}; else this.resolver = r;
	}
	,get: function(p) {
		return this.buf.charCodeAt(p);
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!(typeof(k) == "string")) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.get(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserialize: function() {
		var _g = this.get(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			var p1 = this.pos;
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
			}
			return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
		case 121:
			var len = this.readDigits();
			if(this.get(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = decodeURIComponent(s.split("+").join(" "));
			this.scache.push(s);
			return s;
		case 107:
			return Math.NaN;
		case 109:
			return Math.NEGATIVE_INFINITY;
		case 112:
			return Math.POSITIVE_INFINITY;
		case 97:
			var buf = this.buf;
			var a = new Array();
			this.cache.push(a);
			while(true) {
				var c1 = this.buf.charCodeAt(this.pos);
				if(c1 == 104) {
					this.pos++;
					break;
				}
				if(c1 == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n1 = this.readDigits();
			if(n1 < 0 || n1 >= this.cache.length) throw "Invalid reference";
			return this.cache[n1];
		case 82:
			var n2 = this.readDigits();
			if(n2 < 0 || n2 >= this.scache.length) throw "Invalid string reference";
			return this.scache[n2];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o1 = Type.createEmptyInstance(cl);
			this.cache.push(o1);
			this.unserializeObject(o1);
			return o1;
		case 119:
			var name1 = this.unserialize();
			var edecl = this.resolver.resolveEnum(name1);
			if(edecl == null) throw "Enum not found " + name1;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name2 = this.unserialize();
			var edecl1 = this.resolver.resolveEnum(name2);
			if(edecl1 == null) throw "Enum not found " + name2;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl1)[index];
			if(tag == null) throw "Unknown enum index " + name2 + "@" + index;
			var e1 = this.unserializeEnum(edecl1,tag);
			this.cache.push(e1);
			return e1;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf1 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe.ds.StringMap();
			this.cache.push(h);
			var buf2 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s1 = this.unserialize();
				h.set(s1,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h1 = new haxe.ds.IntMap();
			this.cache.push(h1);
			var buf3 = this.buf;
			var c2 = this.get(this.pos++);
			while(c2 == 58) {
				var i = this.readDigits();
				h1.set(i,this.unserialize());
				c2 = this.get(this.pos++);
			}
			if(c2 != 104) throw "Invalid IntMap format";
			return h1;
		case 77:
			var h2 = new haxe.ds.ObjectMap();
			this.cache.push(h2);
			var buf4 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s2 = this.unserialize();
				h2.set(s2,this.unserialize());
			}
			this.pos++;
			return h2;
		case 118:
			var d;
			var s3 = HxOverrides.substr(this.buf,this.pos,19);
			d = HxOverrides.strDate(s3);
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len1 = this.readDigits();
			var buf5 = this.buf;
			if(this.get(this.pos++) != 58 || this.length - this.pos < len1) throw "Invalid bytes length";
			var codes = haxe.Unserializer.CODES;
			if(codes == null) {
				codes = haxe.Unserializer.initCodes();
				haxe.Unserializer.CODES = codes;
			}
			var i1 = this.pos;
			var rest = len1 & 3;
			var size;
			size = (len1 >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i1 + (len1 - rest);
			var bytes = haxe.io.Bytes.alloc(size);
			var bpos = 0;
			while(i1 < max) {
				var c11 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c21 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c11 << 2 | c21 >> 4);
				var c3 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c21 << 4 | c3 >> 2);
				var c4 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c3 << 6 | c4);
			}
			if(rest >= 2) {
				var c12 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c22 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c12 << 2 | c22 >> 4);
				if(rest == 3) {
					var c31 = codes[StringTools.fastCodeAt(buf5,i1++)];
					bytes.set(bpos++,c22 << 4 | c31 >> 2);
				}
			}
			this.pos += len1;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name3 = this.unserialize();
			var cl1 = this.resolver.resolveClass(name3);
			if(cl1 == null) throw "Class not found " + name3;
			var o2 = Type.createEmptyInstance(cl1);
			this.cache.push(o2);
			o2.hxUnserialize(this);
			if(this.get(this.pos++) != 103) throw "Invalid custom data";
			return o2;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,__class__: haxe.Unserializer
};
haxe.Utf8 = function() { };
$hxClasses["haxe.Utf8"] = haxe.Utf8;
haxe.Utf8.__name__ = ["haxe","Utf8"];
haxe.Utf8.decode = function(s) {
	throw "Not implemented";
	return s;
};
haxe.crypto = {};
haxe.crypto.BaseCode = function(base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) nbits++;
	if(nbits > 8 || len != 1 << nbits) throw "BaseCode : base length must be a power of two.";
	this.base = base;
	this.nbits = nbits;
};
$hxClasses["haxe.crypto.BaseCode"] = haxe.crypto.BaseCode;
haxe.crypto.BaseCode.__name__ = ["haxe","crypto","BaseCode"];
haxe.crypto.BaseCode.prototype = {
	encodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		var size = b.length * 8 / nbits | 0;
		var out = haxe.io.Bytes.alloc(size + (b.length * 8 % nbits == 0?0:1));
		var buf = 0;
		var curbits = 0;
		var mask = (1 << nbits) - 1;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < nbits) {
				curbits += 8;
				buf <<= 8;
				buf |= b.get(pin++);
			}
			curbits -= nbits;
			out.set(pout++,base.b[buf >> curbits & mask]);
		}
		if(curbits > 0) out.set(pout++,base.b[buf << nbits - curbits & mask]);
		return out;
	}
	,__class__: haxe.crypto.BaseCode
};
haxe.ds = {};
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = ["haxe","ds","IntMap"];
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	set: function(key,value) {
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
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
haxe.ds.ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe.ds.ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe.ds.ObjectMap
};
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,__class__: haxe.ds.StringMap
};
haxe.ds._Vector = {};
haxe.ds._Vector.Vector_Impl_ = function() { };
$hxClasses["haxe.ds._Vector.Vector_Impl_"] = haxe.ds._Vector.Vector_Impl_;
haxe.ds._Vector.Vector_Impl_.__name__ = ["haxe","ds","_Vector","Vector_Impl_"];
haxe.ds._Vector.Vector_Impl_.blit = function(src,srcPos,dest,destPos,len) {
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		dest[destPos + i] = src[srcPos + i];
	}
};
haxe.ds._Vector.Vector_Impl_.toArray = function(this1) {
	var a = new Array();
	var len = this1.length;
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		a[i] = this1[i];
	}
	return a;
};
haxe.io = {};
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
};
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var i = 0;
	while(i < s.length) {
		var c = StringTools.fastCodeAt(s,i++);
		if(55296 <= c && c <= 56319) c = c - 55232 << 10 | StringTools.fastCodeAt(s,i++) & 1023;
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe.io.Bytes(a.length,a);
};
haxe.io.Bytes.ofData = function(b) {
	return new haxe.io.Bytes(b.length,b);
};
haxe.io.Bytes.prototype = {
	get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,getString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c21 = b[i++];
				var c3 = b[i++];
				var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
				s += fcc((u >> 10) + 55232);
				s += fcc(u & 1023 | 56320);
			}
		}
		return s;
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,__class__: haxe.io.Bytes
};
haxe.io.Eof = function() { };
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
};
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; };
haxe.io.Path = function(path) {
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		this.dir = HxOverrides.substr(path,0,c2);
		path = HxOverrides.substr(path,c2 + 1,null);
		this.backslash = true;
	} else if(c2 < c1) {
		this.dir = HxOverrides.substr(path,0,c1);
		path = HxOverrides.substr(path,c1 + 1,null);
	} else this.dir = null;
	var cp = path.lastIndexOf(".");
	if(cp != -1) {
		this.ext = HxOverrides.substr(path,cp + 1,null);
		this.file = HxOverrides.substr(path,0,cp);
	} else {
		this.ext = null;
		this.file = path;
	}
};
$hxClasses["haxe.io.Path"] = haxe.io.Path;
haxe.io.Path.__name__ = ["haxe","io","Path"];
haxe.io.Path.withoutExtension = function(path) {
	var s = new haxe.io.Path(path);
	s.ext = null;
	return s.toString();
};
haxe.io.Path.prototype = {
	toString: function() {
		return (this.dir == null?"":this.dir + (this.backslash?"\\":"/")) + this.file + (this.ext == null?"":"." + this.ext);
	}
	,__class__: haxe.io.Path
};
haxe.xml = {};
haxe.xml.Parser = function() { };
$hxClasses["haxe.xml.Parser"] = haxe.xml.Parser;
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
$hxClasses["hxlazy.Lazy"] = hxlazy.Lazy;
hxlazy.Lazy.__name__ = ["hxlazy","Lazy"];
var js = {};
js.Boot = function() { };
$hxClasses["js.Boot"] = js.Boot;
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
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
};
var nx3 = {};
nx3.Constants = function() { };
$hxClasses["nx3.Constants"] = nx3.Constants;
nx3.Constants.__name__ = ["nx3","Constants"];
nx3.EAllotment = $hxClasses["nx3.EAllotment"] = { __ename__ : ["nx3","EAllotment"], __constructs__ : ["LeftAlign","Equal","Logaritmic","Linear"] };
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
nx3.EBarType = $hxClasses["nx3.EBarType"] = { __ename__ : ["nx3","EBarType"], __constructs__ : ["Normal","Repeat","Ignore","Folded"] };
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
nx3.EBarline = $hxClasses["nx3.EBarline"] = { __ename__ : ["nx3","EBarline"], __constructs__ : ["Normal","None","Double","Final","Dotted","Breath","EndRepeat","EndAndStartRepeat"] };
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
nx3.EBarlineLeft = $hxClasses["nx3.EBarlineLeft"] = { __ename__ : ["nx3","EBarlineLeft"], __constructs__ : ["None","Single","Double","StartRepeat"] };
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
nx3.EBeamflagType = $hxClasses["nx3.EBeamflagType"] = { __ename__ : ["nx3","EBeamflagType"], __constructs__ : ["None","Start16","End16","Full16"] };
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
nx3.EClef = $hxClasses["nx3.EClef"] = { __ename__ : ["nx3","EClef"], __constructs__ : ["ClefG","ClefF","ClefC"] };
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
$hxClasses["nx3.EDirectionTools"] = nx3.EDirectionTools;
nx3.EDirectionTools.__name__ = ["nx3","EDirectionTools"];
nx3.EDirectionTools.uadToUd = function(directionUAD) {
	if(directionUAD == nx3.EDirectionUAD.Up) return nx3.EDirectionUD.Up;
	return nx3.EDirectionUD.Down;
};
nx3.EDirectionUAD = $hxClasses["nx3.EDirectionUAD"] = { __ename__ : ["nx3","EDirectionUAD"], __constructs__ : ["Up","Auto","Down"] };
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
$hxClasses["nx3.EDirectionUADTools"] = nx3.EDirectionUADTools;
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
nx3.EDirectionUD = $hxClasses["nx3.EDirectionUD"] = { __ename__ : ["nx3","EDirectionUD"], __constructs__ : ["Up","Down"] };
nx3.EDirectionUD.Up = ["Up",0];
nx3.EDirectionUD.Up.toString = $estr;
nx3.EDirectionUD.Up.__enum__ = nx3.EDirectionUD;
nx3.EDirectionUD.Down = ["Down",1];
nx3.EDirectionUD.Down.toString = $estr;
nx3.EDirectionUD.Down.__enum__ = nx3.EDirectionUD;
nx3.EDirectionUDTools = function() { };
$hxClasses["nx3.EDirectionUDTools"] = nx3.EDirectionUDTools;
nx3.EDirectionUDTools.__name__ = ["nx3","EDirectionUDTools"];
nx3.EDirectionUDTools.toUAD = function(direction) {
	if(direction == nx3.EDirectionUD.Up) return nx3.EDirectionUAD.Up; else return nx3.EDirectionUAD.Down;
};
nx3.EDisplayALN = $hxClasses["nx3.EDisplayALN"] = { __ename__ : ["nx3","EDisplayALN"], __constructs__ : ["Always","Layout","Never"] };
nx3.EDisplayALN.Always = ["Always",0];
nx3.EDisplayALN.Always.toString = $estr;
nx3.EDisplayALN.Always.__enum__ = nx3.EDisplayALN;
nx3.EDisplayALN.Layout = ["Layout",1];
nx3.EDisplayALN.Layout.toString = $estr;
nx3.EDisplayALN.Layout.__enum__ = nx3.EDisplayALN;
nx3.EDisplayALN.Never = ["Never",2];
nx3.EDisplayALN.Never.toString = $estr;
nx3.EDisplayALN.Never.__enum__ = nx3.EDisplayALN;
nx3.EHeadPosition = $hxClasses["nx3.EHeadPosition"] = { __ename__ : ["nx3","EHeadPosition"], __constructs__ : ["Left","Center","Right"] };
nx3.EHeadPosition.Left = ["Left",0];
nx3.EHeadPosition.Left.toString = $estr;
nx3.EHeadPosition.Left.__enum__ = nx3.EHeadPosition;
nx3.EHeadPosition.Center = ["Center",1];
nx3.EHeadPosition.Center.toString = $estr;
nx3.EHeadPosition.Center.__enum__ = nx3.EHeadPosition;
nx3.EHeadPosition.Right = ["Right",2];
nx3.EHeadPosition.Right.toString = $estr;
nx3.EHeadPosition.Right.__enum__ = nx3.EHeadPosition;
nx3.EHeadType = $hxClasses["nx3.EHeadType"] = { __ename__ : ["nx3","EHeadType"], __constructs__ : ["Normal","Rythmic","Crossed","Pause","Other"] };
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
nx3.EHeadValueType = $hxClasses["nx3.EHeadValueType"] = { __ename__ : ["nx3","EHeadValueType"], __constructs__ : ["HVT4","HVT2","HVT1"] };
nx3.EHeadValueType.HVT4 = ["HVT4",0];
nx3.EHeadValueType.HVT4.toString = $estr;
nx3.EHeadValueType.HVT4.__enum__ = nx3.EHeadValueType;
nx3.EHeadValueType.HVT2 = ["HVT2",1];
nx3.EHeadValueType.HVT2.toString = $estr;
nx3.EHeadValueType.HVT2.__enum__ = nx3.EHeadValueType;
nx3.EHeadValueType.HVT1 = ["HVT1",2];
nx3.EHeadValueType.HVT1.toString = $estr;
nx3.EHeadValueType.HVT1.__enum__ = nx3.EHeadValueType;
nx3.EKey = $hxClasses["nx3.EKey"] = { __ename__ : ["nx3","EKey"], __constructs__ : ["Sharp6","Sharp5","Sharp4","Sharp3","Sharp2","Sharp1","Natural","Flat1","Flat2","Flat3","Flat4","Flat5","Flat6"] };
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
nx3.ELyricContinuation = $hxClasses["nx3.ELyricContinuation"] = { __ename__ : ["nx3","ELyricContinuation"], __constructs__ : ["Hyphen","Melisma"] };
nx3.ELyricContinuation.Hyphen = ["Hyphen",0];
nx3.ELyricContinuation.Hyphen.toString = $estr;
nx3.ELyricContinuation.Hyphen.__enum__ = nx3.ELyricContinuation;
nx3.ELyricContinuation.Melisma = ["Melisma",1];
nx3.ELyricContinuation.Melisma.toString = $estr;
nx3.ELyricContinuation.Melisma.__enum__ = nx3.ELyricContinuation;
nx3.ENotationVariant = $hxClasses["nx3.ENotationVariant"] = { __ename__ : ["nx3","ENotationVariant"], __constructs__ : ["Normal","Rythmic","RythmicSingleLevel","HeadsOnly","StavesOnly"] };
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
nx3.ENoteArticulation = $hxClasses["nx3.ENoteArticulation"] = { __ename__ : ["nx3","ENoteArticulation"], __constructs__ : ["Staccato","Tenuto","Marcato"] };
nx3.ENoteArticulation.Staccato = ["Staccato",0];
nx3.ENoteArticulation.Staccato.toString = $estr;
nx3.ENoteArticulation.Staccato.__enum__ = nx3.ENoteArticulation;
nx3.ENoteArticulation.Tenuto = ["Tenuto",1];
nx3.ENoteArticulation.Tenuto.toString = $estr;
nx3.ENoteArticulation.Tenuto.__enum__ = nx3.ENoteArticulation;
nx3.ENoteArticulation.Marcato = ["Marcato",2];
nx3.ENoteArticulation.Marcato.toString = $estr;
nx3.ENoteArticulation.Marcato.__enum__ = nx3.ENoteArticulation;
nx3.ENoteAttributes = $hxClasses["nx3.ENoteAttributes"] = { __ename__ : ["nx3","ENoteAttributes"], __constructs__ : ["Arpeggio","Clef"] };
nx3.ENoteAttributes.Arpeggio = function(top,bottomY) { var $x = ["Arpeggio",0,top,bottomY]; $x.__enum__ = nx3.ENoteAttributes; $x.toString = $estr; return $x; };
nx3.ENoteAttributes.Clef = function(variant) { var $x = ["Clef",1,variant]; $x.__enum__ = nx3.ENoteAttributes; $x.toString = $estr; return $x; };
nx3.ENoteType = $hxClasses["nx3.ENoteType"] = { __ename__ : ["nx3","ENoteType"], __constructs__ : ["Note","Pause","BarPause","Tpl","Lyric","Chord","Dynamics"] };
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
nx3.ENoteVal = $hxClasses["nx3.ENoteVal"] = { __ename__ : ["nx3","ENoteVal"], __constructs__ : ["Nv1","Nv1dot","Nv1ddot","Nv1tri","Nv2","Nv2dot","Nv2ddot","Nv2tri","Nv4","Nv4dot","Nv4ddot","Nv4tri","Nv8","Nv8dot","Nv8ddot","Nv8tri","Nv16","Nv16dot","Nv16ddot","Nv16tri","Nv32","Nv32dot","Nv32ddot","Nv32tri"] };
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
$hxClasses["nx3.ENoteValTools"] = nx3.ENoteValTools;
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
nx3.EPartType = $hxClasses["nx3.EPartType"] = { __ename__ : ["nx3","EPartType"], __constructs__ : ["Normal","Lyrics","Tplrow","Tplchain","Dynamics","Chords","Ignore","Hidden"] };
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
nx3.EPosition = $hxClasses["nx3.EPosition"] = { __ename__ : ["nx3","EPosition"], __constructs__ : ["X","Y","XY","XYW"] };
nx3.EPosition.X = function(x) { var $x = ["X",0,x]; $x.__enum__ = nx3.EPosition; $x.toString = $estr; return $x; };
nx3.EPosition.Y = function(y) { var $x = ["Y",1,y]; $x.__enum__ = nx3.EPosition; $x.toString = $estr; return $x; };
nx3.EPosition.XY = function(x,y) { var $x = ["XY",2,x,y]; $x.__enum__ = nx3.EPosition; $x.toString = $estr; return $x; };
nx3.EPosition.XYW = function(x,y,w) { var $x = ["XYW",3,x,y,w]; $x.__enum__ = nx3.EPosition; $x.toString = $estr; return $x; };
nx3.ESign = $hxClasses["nx3.ESign"] = { __ename__ : ["nx3","ESign"], __constructs__ : ["None","Natural","Flat","Sharp","DoubleFlat","DoubleSharp","ParNatural","ParFlat","ParSharp"] };
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
nx3.ETie = $hxClasses["nx3.ETie"] = { __ename__ : ["nx3","ETie"], __constructs__ : ["Tie","Gliss"] };
nx3.ETie.Tie = function(direction,level) { var $x = ["Tie",0,direction,level]; $x.__enum__ = nx3.ETie; $x.toString = $estr; return $x; };
nx3.ETie.Gliss = function(direction,levelLeft,levelRight) { var $x = ["Gliss",1,direction,levelLeft,levelRight]; $x.__enum__ = nx3.ETie; $x.toString = $estr; return $x; };
nx3.ETime = $hxClasses["nx3.ETime"] = { __ename__ : ["nx3","ETime"], __constructs__ : ["Time2_2","Time3_2","Time4_2","Time2_4","Time3_4","Time4_4","Time5_4","Time6_4","Time7_4","Time2_8","Time3_8","Time4_8","Time5_8","Time6_8","Time7_8","Time9_8","Time12_8","TimeCommon","TimeAllabreve"] };
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
$hxClasses["nx3.ETimeUtils"] = nx3.ETimeUtils;
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
nx3.EVoiceType = $hxClasses["nx3.EVoiceType"] = { __ename__ : ["nx3","EVoiceType"], __constructs__ : ["Normal","Barpause"] };
nx3.EVoiceType.Normal = ["Normal",0];
nx3.EVoiceType.Normal.toString = $estr;
nx3.EVoiceType.Normal.__enum__ = nx3.EVoiceType;
nx3.EVoiceType.Barpause = function(level) { var $x = ["Barpause",1,level]; $x.__enum__ = nx3.EVoiceType; $x.toString = $estr; return $x; };
nx3.IBarWidthCalculator = function() { };
$hxClasses["nx3.IBarWidthCalculator"] = nx3.IBarWidthCalculator;
nx3.IBarWidthCalculator.__name__ = ["nx3","IBarWidthCalculator"];
nx3.IBarWidthCalculator.prototype = {
	__class__: nx3.IBarWidthCalculator
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
$hxClasses["nx3.NBar"] = nx3.NBar;
nx3.NBar.__name__ = ["nx3","NBar"];
nx3.NBar.prototype = {
	getNNote: function(partIdx,voiceIdx,noteIdx) {
		return this.getNPart(partIdx).getNVoice(voiceIdx).getNNote(noteIdx);
	}
	,getNPart: function(idx) {
		if(idx < 0 || idx > this.nparts.length) return null; else return this.nparts[idx];
	}
	,iterator: function() {
		return HxOverrides.iter(this.nparts);
	}
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
$hxClasses["nx3.NHead"] = nx3.NHead;
nx3.NHead.__name__ = ["nx3","NHead"];
nx3.NHead.prototype = {
	toString: function() {
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
$hxClasses["nx3.NNote"] = nx3.NNote;
nx3.NNote.__name__ = ["nx3","NNote"];
nx3.NNote.__interfaces__ = [hxlazy.Lazy];
nx3.NNote.prototype = {
	iterator: function() {
		var _this = this.get_nheads();
		return HxOverrides.iter(_this);
	}
	,get_length: function() {
		return this.get_nheads().length;
	}
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
	,get_headLevels: function() {
		if(this.__lazyheadLevels != null) return this.__lazyheadLevels;
		return this.__lazyheadLevels = Lambda.array(Lambda.map(this,function(head) {
			return head.level;
		}));
	}
	,get_topLevel: function() {
		if(this.__lazytopLevel != null) return this.__lazytopLevel;
		return this.__lazytopLevel = this.get_nheads()[0].level;
	}
	,get_bottomLevel: function() {
		if(this.__lazybottomLevel != null) return this.__lazybottomLevel;
		return this.__lazybottomLevel = this.get_nheads()[this.get_nheads().length - 1].level;
	}
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
$hxClasses["nx3.NPart"] = nx3.NPart;
nx3.NPart.__name__ = ["nx3","NPart"];
nx3.NPart.prototype = {
	iterator: function() {
		return HxOverrides.iter(this.nvoices);
	}
	,get_length: function() {
		return this.nvoices.length;
	}
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
$hxClasses["nx3.NScore"] = nx3.NScore;
nx3.NScore.__name__ = ["nx3","NScore"];
nx3.NScore.prototype = {
	getNBar: function(idx) {
		if(idx < 0 || idx > this.nbars.length) return null; else return this.nbars[idx];
	}
	,iterator: function() {
		return HxOverrides.iter(this.nbars);
	}
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
$hxClasses["nx3.NVoice"] = nx3.NVoice;
nx3.NVoice.__name__ = ["nx3","NVoice"];
nx3.NVoice.prototype = {
	iterator: function() {
		return HxOverrides.iter(this.nnotes);
	}
	,get_length: function() {
		return this.nnotes.length;
	}
	,getNNote: function(idx) {
		if(idx < 0 || idx > this.nnotes.length) return null; else return this.nnotes[idx];
	}
	,__class__: nx3.NVoice
};
nx3.PAttributesRectsCalculator = function() { };
$hxClasses["nx3.PAttributesRectsCalculator"] = nx3.PAttributesRectsCalculator;
nx3.PAttributesRectsCalculator.__name__ = ["nx3","PAttributesRectsCalculator"];
nx3.PAttributesRectsCalculator.getClefRect = function(clef) {
	switch(clef[1]) {
	case 2:
		return new openfl.geom.Rectangle(0,-3,9,6);
	case 1:
		return new openfl.geom.Rectangle(0,-4,9,8);
	case 0:
		return new openfl.geom.Rectangle(0,-5,9,10);
	}
};
nx3.PAttributesRectsCalculator.getKeyRect = function(key) {
	switch(key[1]) {
	case 6:
		return new openfl.geom.Rectangle(0,-3,1,6);
	case 7:case 5:
		return new openfl.geom.Rectangle(0,-3,4.4,6);
	case 8:case 4:
		return new openfl.geom.Rectangle(0,-3,6.8,6);
	case 9:case 3:
		return new openfl.geom.Rectangle(0,-3,9.2,6);
	case 10:case 2:
		return new openfl.geom.Rectangle(0,-3,11.6,6);
	case 11:case 1:
		return new openfl.geom.Rectangle(0,-3,14.,6);
	default:
		return new openfl.geom.Rectangle(0,-2,.5,4);
	}
};
nx3.PAttributesRectsCalculator.getTimeRect = function(time) {
	if(time == null) return new openfl.geom.Rectangle(0,-3,.5,3);
	switch(time[1]) {
	case 16:
		return new openfl.geom.Rectangle(0,-3,6,6);
	default:
		return new openfl.geom.Rectangle(0,-3,4,3);
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
$hxClasses["nx3.PBamegroupFrameTipCalculator"] = nx3.PBamegroupFrameTipCalculator;
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
	getTips: function() {
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
$hxClasses["nx3.PBar"] = nx3.PBar;
nx3.PBar.__name__ = ["nx3","PBar"];
nx3.PBar.prototype = {
	iterator: function() {
		var _this = this.getParts();
		return HxOverrides.iter(_this);
	}
	,get_length: function() {
		return this.getParts().length;
	}
	,getScore: function() {
		return this.score;
	}
	,getSystembar: function() {
		return this.systembar;
	}
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
	,getContentwidth: function() {
		if(this.contentwidth != null) return this.contentwidth;
		var lastcolumn = cx.ArrayTools.last(this.getColumns());
		this.contentwidth = lastcolumn.getAPostion() + Math.max(lastcolumn.getADistance(),lastcolumn.getRightX());
		return this.contentwidth;
	}
	,getContentXZero: function() {
		var firstcolumn = cx.ArrayTools.first(this.getColumns());
		this.contentx = -firstcolumn.getLeftX();
		return this.contentx;
	}
	,getAllottedDistanceSum: function() {
		if(this.allottedDistanceSum != null) return this.allottedDistanceSum;
		this.getContentwidth();
		return this.allottedDistanceSum;
	}
	,getStretchWidth: function() {
		return this.stretchwidth;
	}
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
$hxClasses["nx3.PBarConfig"] = nx3.PBarConfig;
nx3.PBarConfig.__name__ = ["nx3","PBarConfig"];
nx3.PBarConfig.prototype = {
	__class__: nx3.PBarConfig
};
nx3.PBarStretchCalculator = function(systembar) {
	this.systembar = systembar;
};
$hxClasses["nx3.PBarStretchCalculator"] = nx3.PBarStretchCalculator;
nx3.PBarStretchCalculator.__name__ = ["nx3","PBarStretchCalculator"];
nx3.PBarStretchCalculator.prototype = {
	stretch: function(amount) {
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
$hxClasses["nx3.PBarWidthCalculator"] = nx3.PBarWidthCalculator;
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
$hxClasses["nx3.PBaseRectCalculator"] = nx3.PBaseRectCalculator;
nx3.PBaseRectCalculator.__name__ = ["nx3","PBaseRectCalculator"];
nx3.PBaseRectCalculator.prototype = {
	getBaseRect: function() {
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
					return new openfl.geom.Rectangle(-2.8000000000000003,-3,5.6000000000000005,3 * 2);
				default:
					return new openfl.geom.Rectangle(-2.2,-3,4.4,3 * 2);
				}
				break;
			case 4:
				var f = _g[5];
				var c = _g[4];
				var o = _g[3];
				var text = _g[2];
				return cx.ArrayTools.first(this.note.getHeadsRects()).clone();
			default:
				return new openfl.geom.Rectangle(-4,-3,8,3 * 2);
			}
		}
	}
	,__class__: nx3.PBaseRectCalculator
};
nx3.PBeamflagCalculator = function(beamgroup) {
	this.beamgroup = beamgroup;
};
$hxClasses["nx3.PBeamflagCalculator"] = nx3.PBeamflagCalculator;
nx3.PBeamflagCalculator.__name__ = ["nx3","PBeamflagCalculator"];
nx3.PBeamflagCalculator.prototype = {
	getBeamflags: function() {
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
$hxClasses["nx3.PBeamgroup"] = nx3.PBeamgroup;
nx3.PBeamgroup.__name__ = ["nx3","PBeamgroup"];
nx3.PBeamgroup.prototype = {
	getValue: function() {
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
	,getPVoice: function() {
		return this.voice;
	}
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
		return "PBeamgroup \r" + Std.string(this.getFrame().beamflags);
	}
	,__class__: nx3.PBeamgroup
};
nx3.PBeamgroupDirectionCalculator = function(beamgroup) {
	this.beamgroup = beamgroup;
};
$hxClasses["nx3.PBeamgroupDirectionCalculator"] = nx3.PBeamgroupDirectionCalculator;
nx3.PBeamgroupDirectionCalculator.__name__ = ["nx3","PBeamgroupDirectionCalculator"];
nx3.PBeamgroupDirectionCalculator.prototype = {
	getDirection: function() {
		this.topLevel = this.findTopLevel();
		this.bottomLevel = this.findBottomLevel();
		if(this.topLevel + this.bottomLevel <= 0) return nx3.EDirectionUD.Down;
		return nx3.EDirectionUD.Up;
	}
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
$hxClasses["nx3.PBeamgroupFrameCalculator"] = nx3.PBeamgroupFrameCalculator;
nx3.PBeamgroupFrameCalculator.__name__ = ["nx3","PBeamgroupFrameCalculator"];
nx3.PBeamgroupFrameCalculator.prototype = {
	getFrame: function() {
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
$hxClasses["nx3.PColumn"] = nx3.PColumn;
nx3.PColumn.__name__ = ["nx3","PColumn"];
nx3.PColumn.prototype = {
	getComplexes: function() {
		return this.complexes;
	}
	,getValueposition: function() {
		return this.valueposition;
	}
	,getValue: function() {
		if(this.value == null) throw "value shouldnt be null";
		return this.value;
	}
	,getMDistance: function() {
		if(this.mdistance == null) throw "mdistance shouldnt be null";
		return this.mdistance;
	}
	,getMDistanceBenefit: function() {
		if(this.mdistanceBenefit != null) return this.mdistanceBenefit;
		this.mdistanceBenefit = Math.max(0,this.getMDistance() - 3.2);
		return this.mdistanceBenefit;
	}
	,getDistanceDelta: function() {
		if(this.distancedelta != null) return this.distancedelta;
		this.bar.getContentwidth();
		this.distancedelta = this.allottedDistance / this.bar.getAllottedDistanceSum();
		return this.distancedelta;
	}
	,getMPosition: function() {
		return this.mposition;
	}
	,getADistance: function() {
		if(this.adistance != null) return this.adistance;
		this.bar.calculateAPositions();
		return this.adistance;
	}
	,getADistanceBenefit: function() {
		return this.adistanceBenefit;
	}
	,getAPostion: function() {
		if(this.aposition != null) return this.aposition;
		this.bar.calculateAPositions();
		return this.aposition;
	}
	,getSPosition: function() {
		if(this.sposition != null) return this.sposition;
		return this.getAPostion();
	}
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
$hxClasses["nx3.PColumnsAllotmentCalculator"] = nx3.PColumnsAllotmentCalculator;
nx3.PColumnsAllotmentCalculator.__name__ = ["nx3","PColumnsAllotmentCalculator"];
nx3.PColumnsAllotmentCalculator.prototype = {
	calculate: function(stretch) {
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
$hxClasses["nx3.PColumnsDistancesCalculator"] = nx3.PColumnsDistancesCalculator;
nx3.PColumnsDistancesCalculator.__name__ = ["nx3","PColumnsDistancesCalculator"];
nx3.PColumnsDistancesCalculator.prototype = {
	calculate: function() {
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
$hxClasses["nx3.PColumnsGenerator"] = nx3.PColumnsGenerator;
nx3.PColumnsGenerator.__name__ = ["nx3","PColumnsGenerator"];
nx3.PColumnsGenerator.prototype = {
	getColumns: function() {
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
$hxClasses["nx3.PComplex"] = nx3.PComplex;
nx3.PComplex.__name__ = ["nx3","PComplex"];
nx3.PComplex.prototype = {
	getNotes: function() {
		return this.notes;
	}
	,getValueposition: function() {
		return this.valueposition;
	}
	,getPart: function() {
		return this.part;
	}
	,getColumn: function() {
		if(this.column != null) return this.column;
		this.part.getBar().getColumns();
		if(this.column == null) throw "this shouldn't happen";
		return this.column;
	}
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
	,getSignsRects: function() {
		if(this.signsrects != null) return this.signsrects;
		if(this.getVisibleSigns().length == 0) return [];
		this.signsrects = new nx3.PSignsRectsCalculator(this.getVisibleSigns()).getSignRects(this.getHeadsRects());
		return this.signsrects;
	}
	,getNoteXOffset: function(note) {
		if(note == cx.ArrayTools.first(this.getNotes())) return 0;
		if(this.secondoffset != null) return this.secondoffset;
		this.secondoffset = new nx3.PNoteOffsetCalculator(this).getNoteOffset(cx.ArrayTools.second(this.getNotes()));
		return this.secondoffset;
	}
	,getSigns: function() {
		if(this.signs != null) return this.signs;
		this.signs = new nx3.PSignsCalculator(this.getNotes()).getSigns();
		return this.signs;
	}
	,getVisibleSigns: function() {
		if(this.visiblesigns != null) return this.visiblesigns;
		this.visiblesigns = new nx3.PSignsCalculator(this.getNotes()).getVisibleSigns();
		return this.visiblesigns;
	}
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
	,getTieRects: function() {
		if(this.tierects != null) return this.tierects;
		this.tierects = new nx3.PComplexTierectsCalculator(this).getTieRects();
		return this.tierects;
	}
	,getDotRects: function() {
		if(this.dotrects != null) return this.dotrects;
		this.dotrects = new nx3.PComplexDotsrectsCalculator(this).getDotRects();
		return this.dotrects;
	}
	,getBaseRect: function() {
		if(this.baserect != null) return this.baserect;
		this.baserect = new openfl.geom.Rectangle(0,0,0,0);
		var _g = 0;
		var _g1 = this.getNotes();
		while(_g < _g1.length) {
			var note = _g1[_g];
			++_g;
			this.baserect = this.baserect.union(note.getBaseRect());
		}
		return this.baserect;
	}
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
	,getRect: function() {
		this.rect = nx3.geom.RectanglesTools.unionAll(this.getAllRects());
		return this.rect;
	}
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
	,getLeftX: function() {
		if(this.leftX != null) return this.leftX;
		this.leftX = this.getRect().x;
		return this.leftX;
	}
	,getRightX: function() {
		if(this.rightX != null) return this.rightX;
		this.rightX = this.getRect().x + this.getRect().width;
		return this.rightX;
	}
	,getNext: function() {
		if(this.next != null) return this.next;
		this.next = this.getColumn().getNextComplex(this);
		return this.next;
	}
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
			result = result.concat(note.get_heads());
		}
		return result;
	}
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
$hxClasses["nx3.PComplexDistancesCalculator"] = nx3.PComplexDistancesCalculator;
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
$hxClasses["nx3.PComplexDotsrectsCalculator"] = nx3.PComplexDotsrectsCalculator;
nx3.PComplexDotsrectsCalculator.__name__ = ["nx3","PComplexDotsrectsCalculator"];
nx3.PComplexDotsrectsCalculator.prototype = {
	getDotRects: function() {
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
			rects.push(new openfl.geom.Rectangle(rectX,level1 - 0.5,dotwidth,1));
		}
		return rects;
	}
	,__class__: nx3.PComplexDotsrectsCalculator
};
nx3.PComplexTieTargetCalculator = function(tieinfos) {
	this.tieinfos = tieinfos;
};
$hxClasses["nx3.PComplexTieTargetCalculator"] = nx3.PComplexTieTargetCalculator;
nx3.PComplexTieTargetCalculator.__name__ = ["nx3","PComplexTieTargetCalculator"];
nx3.PComplexTieTargetCalculator.prototype = {
	findTargetHeads: function() {
		var _g = 0;
		var _g1 = this.tieinfos;
		while(_g < _g1.length) {
			var info = _g1[_g];
			++_g;
			var head = info.head;
			var headlevel = head.nhead.level;
			var nextnote = head.getNote().getNext();
			if(nextnote == null) continue;
			var nextheads = nextnote.get_heads();
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
$hxClasses["nx3.PComplexTierectsCalculator"] = nx3.PComplexTierectsCalculator;
nx3.PComplexTierectsCalculator.__name__ = ["nx3","PComplexTierectsCalculator"];
nx3.PComplexTierectsCalculator.prototype = {
	getTieRects: function() {
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
		var _g1 = firstnote.get_heads();
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
				} else if(secondnote == null && head == cx.ArrayTools.last(firstnote.get_heads())) {
					direction = nx3.EDirectionUD.Down;
					adjusty = .5;
				} else adjusty = -.5;
				var r = new openfl.geom.Rectangle(rx,level - 0.8 + adjusty,tiewidth,1.6);
				rects.push(r);
				tieinfos.push({ direction : direction, rect : r, head : head, target : null});
			}
			headIdx++;
		}
		tiewidth = 3.2;
		if(secondnote != null) {
			var _g3 = 0;
			var _g11 = secondnote.get_heads();
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
					var r1 = new openfl.geom.Rectangle(rx1,level1 - 0.8,tiewidth,1.6);
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
$hxClasses["nx3.PHead"] = nx3.PHead;
nx3.PHead.__name__ = ["nx3","PHead"];
nx3.PHead.prototype = {
	getNote: function() {
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
$hxClasses["nx3.PHeadPlacementsCalculator"] = nx3.PHeadPlacementsCalculator;
nx3.PHeadPlacementsCalculator.__name__ = ["nx3","PHeadPlacementsCalculator"];
nx3.PHeadPlacementsCalculator.prototype = {
	getHeadsPlacements: function() {
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
	this.vheads = note.get_heads();
	this.placements = new nx3.PHeadPlacementsCalculator(this.vheads,this.direction).getHeadsPlacements();
	this.notevalue = note.nnote.value;
};
$hxClasses["nx3.PHeadsRectsCalculator"] = nx3.PHeadsRectsCalculator;
nx3.PHeadsRectsCalculator.__name__ = ["nx3","PHeadsRectsCalculator"];
nx3.PHeadsRectsCalculator.prototype = {
	getHeadsRects: function() {
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
			var rect1 = new openfl.geom.Rectangle(-headw,-1,2 * headw,2);
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
				return new openfl.geom.Rectangle(-2.2,-1,4.4,2);
			default:
				return new openfl.geom.Rectangle(-1.6,-1,3.2,2);
			}
			break;
		case 3:
			var _g1 = nx3.ENoteValTools.beaminglevel(this.notevalue);
			switch(_g1) {
			case 1:
				return new openfl.geom.Rectangle(-1.8,-3,3.6,6);
			case 2:
				return new openfl.geom.Rectangle(-2,-3,4,6);
			default:
				return new openfl.geom.Rectangle(-1.6,-3.3,3.2,6.6);
			}
			break;
		default:
			return new openfl.geom.Rectangle(-2,-2,4,4);
		}
		return new openfl.geom.Rectangle(-2,-2,4,4);
	}
	,__class__: nx3.PHeadsRectsCalculator
};
nx3.PNote = function(nnote) {
	this.nnote = nnote;
};
$hxClasses["nx3.PNote"] = nx3.PNote;
nx3.PNote.__name__ = ["nx3","PNote"];
nx3.PNote.__interfaces__ = [hxlazy.Lazy];
nx3.PNote.prototype = {
	iterator: function() {
		var _this = this.get_heads();
		return HxOverrides.iter(_this);
	}
	,get_length: function() {
		return this.get_heads().length;
	}
	,getVoice: function() {
		return this.voice;
	}
	,getBeamgroup: function() {
		if(this.voice == null) throw "PNote doesn't have a parent PVoice";
		if(this.beamgroup == null) this.voice.getBeamgroups();
		if(this.beamgroup == null) throw "this should not happen";
		return this.beamgroup;
	}
	,getDirection: function() {
		return this.getBeamgroup().getDirection();
	}
	,getComplex: function() {
		if(this.voice == null) throw "PNote doesn't have a parent PVoice";
		if(this.complex == null) this.voice.getPart().getComplexes();
		if(this.complex == null) throw "Shouldn't happen";
		return this.complex;
	}
	,getTies: function() {
		return this.nnote.get_ties();
	}
	,get_heads: function() {
		var _g = this;
		if(this.__lazyheads != null) return this.__lazyheads;
		return this.__lazyheads = Lambda.array(Lambda.map(this.nnote,function(nhead) {
			var phead = new nx3.PHead(nhead);
			phead.note = _g;
			return phead;
		}));
	}
	,getHeadsRects: function() {
		if(this.__lazyheadsRects != null) return this.__lazyheadsRects;
		return this.__lazyheadsRects = new nx3.PNoteheadsRectsCalculator(this).getHeadsRects();
	}
	,getStaveRect: function() {
		if(this.__lazystaveRect != null) return this.__lazystaveRect;
		return this.__lazystaveRect = this.getComplex().getStaveRect(this);
	}
	,getStaveXPosition: function() {
		if(this.__lazystaveXPosition != null) return this.__lazystaveXPosition;
		var staverect = this.getStaveRect();
		if(staverect == null) return this.__lazystaveXPosition = 0;
		return this.getDirection() == nx3.EDirectionUD.Up?this.__lazystaveXPosition = staverect.width:this.__lazystaveXPosition = staverect.x;
	}
	,getBaseRect: function() {
		if(this.__lazybaseRect != null) return this.__lazybaseRect;
		return this.__lazybaseRect = new nx3.PBaseRectCalculator(this).getBaseRect();
	}
	,getXOffset: function() {
		if(this.__lazyxOffset != null) return this.__lazyxOffset;
		return this.__lazyxOffset = this.getComplex().getNoteXOffset(this);
	}
	,getXPosition: function() {
		if(this.__lazyxPosition != null) return this.__lazyxPosition;
		return this.__lazyxPosition = this.getComplex().getXPosition() + this.getXOffset();
	}
	,getNext: function() {
		if(this.__lazynext != null) return this.__lazynext;
		var idx;
		var _this = this.voice.getNotes();
		idx = HxOverrides.indexOf(_this,this,0);
		return this.__lazynext = cx.ArrayTools.indexOrNull(this.voice.getNotes(),idx + 1);
	}
	,getHasTie: function() {
		if(this.__lazyhasTie != null) return this.__lazyhasTie;
		return this.__lazyhasTie = !Lambda.foreach(this.nnote,function(nhead) {
			return !(nhead.tie != null);
		});
	}
	,__class__: nx3.PNote
};
nx3.PNoteHeadsRectTplCalculator = function(note) {
	this.note = note;
};
$hxClasses["nx3.PNoteHeadsRectTplCalculator"] = nx3.PNoteHeadsRectTplCalculator;
nx3.PNoteHeadsRectTplCalculator.__name__ = ["nx3","PNoteHeadsRectTplCalculator"];
nx3.PNoteHeadsRectTplCalculator.prototype = {
	getHeadsRects: function() {
		return [new openfl.geom.Rectangle(-6,-5.3,10,8.8)];
	}
	,__class__: nx3.PNoteHeadsRectTplCalculator
};
nx3.PNoteHeadsRectsLyricsCalculator = function(note,text,font) {
	this.note = note;
	this.text = text;
	this.font = font;
};
$hxClasses["nx3.PNoteHeadsRectsLyricsCalculator"] = nx3.PNoteHeadsRectsLyricsCalculator;
nx3.PNoteHeadsRectsLyricsCalculator.__name__ = ["nx3","PNoteHeadsRectsLyricsCalculator"];
nx3.PNoteHeadsRectsLyricsCalculator.prototype = {
	getHeadsRects: function() {
		var target = new nx3.render.TargetSprite();
		if(this.font != null) target.setFont(this.font);
		var width = target.textwidth(this.text);
		var height = target.textheight(this.text);
		return [new openfl.geom.Rectangle(-width / 2,-height / 2,width,height)];
		return null;
	}
	,__class__: nx3.PNoteHeadsRectsLyricsCalculator
};
nx3.PNoteHeadsRectsPausesCalculator = function(vnote) {
	this.vnote = vnote;
};
$hxClasses["nx3.PNoteHeadsRectsPausesCalculator"] = nx3.PNoteHeadsRectsPausesCalculator;
nx3.PNoteHeadsRectsPausesCalculator.__name__ = ["nx3","PNoteHeadsRectsPausesCalculator"];
nx3.PNoteHeadsRectsPausesCalculator.prototype = {
	getHeadsRects: function() {
		var rects;
		var _g = nx3.ENoteValTools.beaminglevel(this.vnote.nnote.value);
		switch(_g) {
		case 1:
			rects = [new openfl.geom.Rectangle(-1.8,-3,3.6,6)];
			break;
		case 2:
			rects = [new openfl.geom.Rectangle(-2,-3,4,6)];
			break;
		default:
			rects = [new openfl.geom.Rectangle(-1.6,-3.3,3.2,6.6)];
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
$hxClasses["nx3.PNoteOffsetCalculator"] = nx3.PNoteOffsetCalculator;
nx3.PNoteOffsetCalculator.__name__ = ["nx3","PNoteOffsetCalculator"];
nx3.PNoteOffsetCalculator.prototype = {
	getNoteOffset: function(note) {
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
$hxClasses["nx3.PNoteheadsRectsCalculator"] = nx3.PNoteheadsRectsCalculator;
nx3.PNoteheadsRectsCalculator.__name__ = ["nx3","PNoteheadsRectsCalculator"];
nx3.PNoteheadsRectsCalculator.prototype = {
	getHeadsRects: function() {
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
	this.npart = npart;
	this.value = 0;
};
$hxClasses["nx3.PPart"] = nx3.PPart;
nx3.PPart.__name__ = ["nx3","PPart"];
nx3.PPart.prototype = {
	iterator: function() {
		var _this = this.getVoices();
		return HxOverrides.iter(_this);
	}
	,get_length: function() {
		return this.getVoices().length;
	}
	,getBar: function() {
		return this.bar;
	}
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
	,getComplexes: function() {
		if(this.complexes != null) return this.complexes;
		var generator = new nx3.PPartComplexesGenerator(this);
		this.complexes = generator.getComplexes();
		return this.complexes;
	}
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
	,getYPosition: function() {
		return this.getIndex() * 20;
	}
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
	,__class__: nx3.PPart
};
nx3.PPartComplexesGenerator = function(part) {
	this.part = part;
	this.vvoices = part.getVoices();
};
$hxClasses["nx3.PPartComplexesGenerator"] = nx3.PPartComplexesGenerator;
nx3.PPartComplexesGenerator.__name__ = ["nx3","PPartComplexesGenerator"];
nx3.PPartComplexesGenerator.prototype = {
	getComplexes: function() {
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
$hxClasses["nx3.PPartbeamgroupsDirectionCalculator"] = nx3.PPartbeamgroupsDirectionCalculator;
nx3.PPartbeamgroupsDirectionCalculator.__name__ = ["nx3","PPartbeamgroupsDirectionCalculator"];
nx3.PPartbeamgroupsDirectionCalculator.prototype = {
	calculateBeamgroupsDirections: function() {
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
$hxClasses["nx3.PScore"] = nx3.PScore;
nx3.PScore.__name__ = ["nx3","PScore"];
nx3.PScore.prototype = {
	getBars: function() {
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
	,getSystems: function(systemwidth) {
		if(systemwidth != this.prevSystemwidth) this.systems = null;
		if(this.systems != null) return this.systems;
		this.systems = new nx3.PScoreSystemsGenerator(this.getBars()).getsSystems([systemwidth]);
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
	,__class__: nx3.PScore
};
nx3.PScoreSystemStretcher = function(system) {
	this.system = system;
};
$hxClasses["nx3.PScoreSystemStretcher"] = nx3.PScoreSystemStretcher;
nx3.PScoreSystemStretcher.__name__ = ["nx3","PScoreSystemStretcher"];
nx3.PScoreSystemStretcher.prototype = {
	stretchTo: function(stretchSystemToWidth,ifMoreThan) {
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
nx3.PScoreSystemsGenerator = function(bars) {
	this.bars = bars;
};
$hxClasses["nx3.PScoreSystemsGenerator"] = nx3.PScoreSystemsGenerator;
nx3.PScoreSystemsGenerator.__name__ = ["nx3","PScoreSystemsGenerator"];
nx3.PScoreSystemsGenerator.prototype = {
	getsSystems: function(systemwidths) {
		var tempbars = this.bars.slice();
		var result = new Array();
		var sysidx = 0;
		var prevbarAttributes = null;
		while(tempbars.length > 0) {
			var syswidth;
			if((sysidx < 0 || sysidx > systemwidths.length - 1?null:systemwidths[sysidx]) != null) syswidth = systemwidths[sysidx]; else syswidth = systemwidths[0];
			var generator = new nx3.PSystemBarsGenerator(tempbars,{ showFirstClef : true, showFirstKey : true, showFirstTime : sysidx == 0},prevbarAttributes,syswidth,new nx3.PBarWidthCalculator());
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
$hxClasses["nx3.PSignsCalculator"] = nx3.PSignsCalculator;
nx3.PSignsCalculator.__name__ = ["nx3","PSignsCalculator"];
nx3.PSignsCalculator.prototype = {
	getSigns: function() {
		var signs;
		signs = this.calcUnsortedSigns(this.notes);
		signs = this.calcSortSigns(signs);
		return signs;
	}
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
$hxClasses["nx3.PSignsRectsCalculator"] = nx3.PSignsRectsCalculator;
nx3.PSignsRectsCalculator.__name__ = ["nx3","PSignsRectsCalculator"];
nx3.PSignsRectsCalculator.prototype = {
	getSignRects: function(headsRects) {
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
			return new openfl.geom.Rectangle(0,-1.5,2.6,3);
		case 7:case 8:case 6:
			return new openfl.geom.Rectangle(0,-2,4.4,4);
		case 2:
			return new openfl.geom.Rectangle(0,-3,2.6,5);
		default:
			return new openfl.geom.Rectangle(0,-3,2.6,6);
		}
		throw "This shouldn't happen!";
		return null;
	}
	,__class__: nx3.PSignsRectsCalculator
};
nx3.PStaveRectCalculator = function(note) {
	this.note = note;
};
$hxClasses["nx3.PStaveRectCalculator"] = nx3.PStaveRectCalculator;
nx3.PStaveRectCalculator.__name__ = ["nx3","PStaveRectCalculator"];
nx3.PStaveRectCalculator.prototype = {
	getStaveRect: function() {
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
		if(this.note.getDirection() == nx3.EDirectionUD.Up) rect = new openfl.geom.Rectangle(0,this.note.nnote.get_bottomLevel() - 7,headw,7); else rect = new openfl.geom.Rectangle(-headw,this.note.nnote.get_topLevel(),headw,7);
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
				if(this.note.getDirection() == nx3.EDirectionUD.Up) rect = new openfl.geom.Rectangle(headw,this.note.nnote.get_bottomLevel() - 7,2.6,4.8); else rect = new openfl.geom.Rectangle(-headw,this.note.nnote.get_topLevel() + 7 - 4.8,2.6,4.8);
				rect.offset(this.note.getXOffset(),0);
				return rect;
			}
		}
		return null;
	}
	,__class__: nx3.PStaveRectCalculator
};
nx3.PSystem = function() {
	this.systemBreakWidth = 0;
	this.systembars = [];
	this.width = 0;
};
$hxClasses["nx3.PSystem"] = nx3.PSystem;
nx3.PSystem.__name__ = ["nx3","PSystem"];
nx3.PSystem.prototype = {
	getStatus: function() {
		return this.status;
	}
	,getWidth: function() {
		return this.width;
	}
	,getSystembars: function() {
		return this.systembars;
	}
	,getLastBarAttributes: function() {
		if(this.systembars.length == 0) return null;
		return cx.ArrayTools.last(this.systembars).actAttributes;
	}
	,getSystemBreakWidth: function() {
		return this.systemBreakWidth;
	}
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
	,__class__: nx3.PSystem
};
nx3.PSystemBar = function(bar,barConfig,barMeasurements,actAttributes,caAttributes) {
	this.stretchamount = 0;
	this.bar = bar;
	this.bar.systembar = this;
	this.barConfig = barConfig;
	this.barMeasurements = barMeasurements;
	this.actAttributes = actAttributes;
	this.caAttributes = caAttributes;
};
$hxClasses["nx3.PSystemBar"] = nx3.PSystemBar;
nx3.PSystemBar.__name__ = ["nx3","PSystemBar"];
nx3.PSystemBar.prototype = {
	setBarStretch: function(amount) {
		if(amount == this.stretchamount) return;
		var calculator = new nx3.PBarStretchCalculator(this);
		if(amount == 0) calculator.resetStretch(); else calculator.stretch(amount);
	}
	,getBarMeasurements: function() {
		if(this.barMeasurements != null) return this.barMeasurements;
		this.barMeasurements = new nx3.PSystembarMeasurements(this.bar).init(this.actAttributes,this.barConfig,this.caAttributes);
		return this.barMeasurements;
	}
	,getXPosition: function() {
		return this.xposition;
	}
	,__class__: nx3.PSystemBar
};
nx3.PSystemBarsGenerator = function(bars,systemConfig,prevBarAttributes,breakSystemwidth,barWidthCalculator) {
	this.bars = bars;
	this.systemConfig = systemConfig;
	this.prevBarAttributes = prevBarAttributes;
	this.breakSystemwidth = breakSystemwidth;
	this.system = new nx3.PSystem();
	this.barWidthCalculator = barWidthCalculator;
};
$hxClasses["nx3.PSystemBarsGenerator"] = nx3.PSystemBarsGenerator;
nx3.PSystemBarsGenerator.__name__ = ["nx3","PSystemBarsGenerator"];
nx3.PSystemBarsGenerator.prototype = {
	getSystem: function() {
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
			this.system.getSystembars().push(new nx3.PSystemBar(currentBar,currentBarConfig,currentMeasurements,currentBarAttributes,null));
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
nx3.PSystemStatus = $hxClasses["nx3.PSystemStatus"] = { __ename__ : ["nx3","PSystemStatus"], __constructs__ : ["Ok","Problem"] };
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
$hxClasses["nx3.PSystembarMeasurements"] = nx3.PSystembarMeasurements;
nx3.PSystembarMeasurements.__name__ = ["nx3","PSystembarMeasurements"];
nx3.PSystembarMeasurements.prototype = {
	getAckoladeXPosition: function() {
		return 0;
	}
	,getClefXPosition: function() {
		return this.getAckoladeXPosition() + this.ackoladeWidth;
	}
	,getKeyXPosition: function() {
		return this.getClefXPosition() + this.clefWidth;
	}
	,getTimeXPosition: function() {
		return this.getKeyXPosition() + this.keyWidth;
	}
	,getLeftContentMarginXPosition: function() {
		return this.getTimeXPosition() + this.timeWidth;
	}
	,getContentXZero: function() {
		return this.contentXZero;
	}
	,getContentXPosition: function() {
		return this.getLeftContentMarginXPosition() + this.leftContentMarginWidth;
	}
	,getContentWidth: function() {
		return this.contentWidth;
	}
	,setContentWidth: function(val) {
		this.contentWidth = val;
	}
	,getCautClefXPosition: function() {
		return this.getContentXPosition() + this.contentWidth;
	}
	,getCautKeyXPosition: function() {
		return this.getCautClefXPosition() + this.cautClefWidth;
	}
	,getCautTimeXPosition: function() {
		return this.getCautKeyXPosition() + this.cautKeyWidth;
	}
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
$hxClasses["nx3.PVoice"] = nx3.PVoice;
nx3.PVoice.__name__ = ["nx3","PVoice"];
nx3.PVoice.prototype = {
	iterator: function() {
		var _this = this.getNotes();
		return HxOverrides.iter(_this);
	}
	,get_length: function() {
		return this.getNotes().length;
	}
	,getPart: function() {
		return this.part;
	}
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
	,getBeamgroups: function(pattern) {
		if(pattern != null && pattern != this.beampattern) {
			this.beampattern = pattern;
			this.beamgroups = null;
		}
		if(this.beamgroups != null) return this.beamgroups;
		this.beamgroups = new nx3.PVoiceBeamgroupsGenerator(this.getNotes(),pattern).getBeamgroups();
		return this.beamgroups;
	}
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
$hxClasses["nx3.PVoiceBeamgroupsGenerator"] = nx3.PVoiceBeamgroupsGenerator;
nx3.PVoiceBeamgroupsGenerator.__name__ = ["nx3","PVoiceBeamgroupsGenerator"];
nx3.PVoiceBeamgroupsGenerator.prototype = {
	getBeamgroups: function() {
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
$hxClasses["nx3.QHead"] = nx3.QHead;
nx3.QHead.__name__ = ["nx3","QHead"];
nx3.QHead.__super__ = nx3.NHead;
nx3.QHead.prototype = $extend(nx3.NHead.prototype,{
	__class__: nx3.QHead
});
nx3.QHeadSharp = function(level) {
	if(level == null) level = 0;
	nx3.QHead.call(this,level,nx3.ESign.Sharp);
};
$hxClasses["nx3.QHeadSharp"] = nx3.QHeadSharp;
nx3.QHeadSharp.__name__ = ["nx3","QHeadSharp"];
nx3.QHeadSharp.__super__ = nx3.QHead;
nx3.QHeadSharp.prototype = $extend(nx3.QHead.prototype,{
	__class__: nx3.QHeadSharp
});
nx3.QHeadFlat = function(level) {
	if(level == null) level = 0;
	nx3.QHead.call(this,level,nx3.ESign.Flat);
};
$hxClasses["nx3.QHeadFlat"] = nx3.QHeadFlat;
nx3.QHeadFlat.__name__ = ["nx3","QHeadFlat"];
nx3.QHeadFlat.__super__ = nx3.QHead;
nx3.QHeadFlat.prototype = $extend(nx3.QHead.prototype,{
	__class__: nx3.QHeadFlat
});
nx3.QHeadNatural = function(level) {
	if(level == null) level = 0;
	nx3.QHead.call(this,level,nx3.ESign.Natural);
};
$hxClasses["nx3.QHeadNatural"] = nx3.QHeadNatural;
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
$hxClasses["nx3.QNote"] = nx3.QNote;
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
$hxClasses["nx3.QPause16"] = nx3.QPause16;
nx3.QPause16.__name__ = ["nx3","QPause16"];
nx3.QPause16.__super__ = nx3.NNote;
nx3.QPause16.prototype = $extend(nx3.NNote.prototype,{
	__class__: nx3.QPause16
});
nx3.QPause8 = function(level) {
	if(level == null) level = 0;
	nx3.NNote.call(this,nx3.ENoteType.Pause(level),null,nx3.ENoteVal.Nv8);
};
$hxClasses["nx3.QPause8"] = nx3.QPause8;
nx3.QPause8.__name__ = ["nx3","QPause8"];
nx3.QPause8.__super__ = nx3.NNote;
nx3.QPause8.prototype = $extend(nx3.NNote.prototype,{
	__class__: nx3.QPause8
});
nx3.QPause4 = function(level) {
	if(level == null) level = 0;
	nx3.NNote.call(this,nx3.ENoteType.Pause(level),null,nx3.ENoteVal.Nv4);
};
$hxClasses["nx3.QPause4"] = nx3.QPause4;
nx3.QPause4.__name__ = ["nx3","QPause4"];
nx3.QPause4.__super__ = nx3.NNote;
nx3.QPause4.prototype = $extend(nx3.NNote.prototype,{
	__class__: nx3.QPause4
});
nx3.QPause2 = function(level) {
	if(level == null) level = 0;
	nx3.NNote.call(this,nx3.ENoteType.Pause(level),null,nx3.ENoteVal.Nv2);
};
$hxClasses["nx3.QPause2"] = nx3.QPause2;
nx3.QPause2.__name__ = ["nx3","QPause2"];
nx3.QPause2.__super__ = nx3.NNote;
nx3.QPause2.prototype = $extend(nx3.NNote.prototype,{
	__class__: nx3.QPause2
});
nx3.QPause1 = function(level) {
	if(level == null) level = 0;
	nx3.NNote.call(this,nx3.ENoteType.Pause(level),null,nx3.ENoteVal.Nv1);
};
$hxClasses["nx3.QPause1"] = nx3.QPause1;
nx3.QPause1.__name__ = ["nx3","QPause1"];
nx3.QPause1.__super__ = nx3.NNote;
nx3.QPause1.prototype = $extend(nx3.NNote.prototype,{
	__class__: nx3.QPause1
});
nx3.QLyric8 = function(text) {
	if(text == null) text = "QLyric4";
	nx3.NNote.call(this,nx3.ENoteType.Lyric(text),null,nx3.ENoteVal.Nv8);
};
$hxClasses["nx3.QLyric8"] = nx3.QLyric8;
nx3.QLyric8.__name__ = ["nx3","QLyric8"];
nx3.QLyric8.__super__ = nx3.NNote;
nx3.QLyric8.prototype = $extend(nx3.NNote.prototype,{
	__class__: nx3.QLyric8
});
nx3.QLyric4 = function(text) {
	if(text == null) text = "QLyric4";
	nx3.NNote.call(this,nx3.ENoteType.Lyric(text),null,nx3.ENoteVal.Nv4);
};
$hxClasses["nx3.QLyric4"] = nx3.QLyric4;
nx3.QLyric4.__name__ = ["nx3","QLyric4"];
nx3.QLyric4.__super__ = nx3.NNote;
nx3.QLyric4.prototype = $extend(nx3.NNote.prototype,{
	__class__: nx3.QLyric4
});
nx3.QLyric2 = function(text) {
	if(text == null) text = "QLyric4";
	nx3.NNote.call(this,nx3.ENoteType.Lyric(text),null,nx3.ENoteVal.Nv2);
};
$hxClasses["nx3.QLyric2"] = nx3.QLyric2;
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
$hxClasses["nx3.QNote4"] = nx3.QNote4;
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
$hxClasses["nx3.QNote8"] = nx3.QNote8;
nx3.QNote8.__name__ = ["nx3","QNote8"];
nx3.QNote8.__super__ = nx3.QNote;
nx3.QNote8.prototype = $extend(nx3.QNote.prototype,{
	__class__: nx3.QNote8
});
nx3.QNote16 = function(headLevel,headLevels,signs) {
	if(signs == null) signs = "";
	nx3.QNote.call(this,headLevel,headLevels,null,null,nx3.ENoteVal.Nv16,signs);
};
$hxClasses["nx3.QNote16"] = nx3.QNote16;
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
$hxClasses["nx3.QNote2"] = nx3.QNote2;
nx3.QNote2.__name__ = ["nx3","QNote2"];
nx3.QNote2.__super__ = nx3.QNote;
nx3.QNote2.prototype = $extend(nx3.QNote.prototype,{
	__class__: nx3.QNote2
});
nx3.QNote1 = function(headLevel,headLevels,signs) {
	if(signs == null) signs = "";
	nx3.QNote.call(this,headLevel,headLevels,null,null,nx3.ENoteVal.Nv1,signs);
};
$hxClasses["nx3.QNote1"] = nx3.QNote1;
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
$hxClasses["nx3.QVoice"] = nx3.QVoice;
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
$hxClasses["nx3.QVoiceDown"] = nx3.QVoiceDown;
nx3.QVoiceDown.__name__ = ["nx3","QVoiceDown"];
nx3.QVoiceDown.__super__ = nx3.QVoice;
nx3.QVoiceDown.prototype = $extend(nx3.QVoice.prototype,{
	__class__: nx3.QVoiceDown
});
nx3.QVoiceUp = function(notevalues,notevalue,headlevels,levelrepeats,signs) {
	nx3.QVoice.call(this,notevalues,notevalue,headlevels,levelrepeats,signs,nx3.EDirectionUAD.Up);
};
$hxClasses["nx3.QVoiceUp"] = nx3.QVoiceUp;
nx3.QVoiceUp.__name__ = ["nx3","QVoiceUp"];
nx3.QVoiceUp.__super__ = nx3.QVoice;
nx3.QVoiceUp.prototype = $extend(nx3.QVoice.prototype,{
	__class__: nx3.QVoiceUp
});
nx3.action = {};
nx3.action.EActionInfo = $hxClasses["nx3.action.EActionInfo"] = { __ename__ : ["nx3","action","EActionInfo"], __constructs__ : ["TargetXY"] };
nx3.action.EActionInfo.TargetXY = function(target,x,y) { var $x = ["TargetXY",0,target,x,y]; $x.__enum__ = nx3.action.EActionInfo; $x.toString = $estr; return $x; };
nx3.action.EActionType = $hxClasses["nx3.action.EActionType"] = { __ename__ : ["nx3","action","EActionType"], __constructs__ : ["HeadAction","NoteAction"] };
nx3.action.EActionType.HeadAction = function(type,head,info) { var $x = ["HeadAction",0,type,head,info]; $x.__enum__ = nx3.action.EActionType; $x.toString = $estr; return $x; };
nx3.action.EActionType.NoteAction = function(type,note,info) { var $x = ["NoteAction",1,type,note,info]; $x.__enum__ = nx3.action.EActionType; $x.toString = $estr; return $x; };
nx3.action.EActivityType = $hxClasses["nx3.action.EActivityType"] = { __ename__ : ["nx3","action","EActivityType"], __constructs__ : ["MouseDown","MouseUp","MouseOver","MouseOut"] };
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
nx3.events = {};
nx3.events.BarEvent = $hxClasses["nx3.events.BarEvent"] = { __ename__ : ["nx3","events","BarEvent"], __constructs__ : ["NotesChange","NotesDelete","NotesAdd"] };
nx3.events.BarEvent.NotesChange = function(notes,action) { var $x = ["NotesChange",0,notes,action]; $x.__enum__ = nx3.events.BarEvent; $x.toString = $estr; return $x; };
nx3.events.BarEvent.NotesDelete = function(notes,removedNotes) { var $x = ["NotesDelete",1,notes,removedNotes]; $x.__enum__ = nx3.events.BarEvent; $x.toString = $estr; return $x; };
nx3.events.BarEvent.NotesAdd = function(notes,noteinfos) { var $x = ["NotesAdd",2,notes,noteinfos]; $x.__enum__ = nx3.events.BarEvent; $x.toString = $estr; return $x; };
nx3.events.NoteChange = $hxClasses["nx3.events.NoteChange"] = { __ename__ : ["nx3","events","NoteChange"], __constructs__ : ["LevelRel","LevelAbs","Tie","ValAbs","ValRel","Dot","HeadLevelRel","HeadLevelAbs","Pause","Sign"] };
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
nx3.events.NoteInfo = $hxClasses["nx3.events.NoteInfo"] = { __ename__ : ["nx3","events","NoteInfo"], __constructs__ : ["Note","Pause","Lyric"] };
nx3.events.NoteInfo.Note = function(val,levels,signs,ties) { var $x = ["Note",0,val,levels,signs,ties]; $x.__enum__ = nx3.events.NoteInfo; $x.toString = $estr; return $x; };
nx3.events.NoteInfo.Pause = function(val,level) { var $x = ["Pause",1,val,level]; $x.__enum__ = nx3.events.NoteInfo; $x.toString = $estr; return $x; };
nx3.events.NoteInfo.Lyric = function(val,text) { var $x = ["Lyric",2,val,text]; $x.__enum__ = nx3.events.NoteInfo; $x.toString = $estr; return $x; };
nx3.geom = {};
nx3.geom.Point = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
};
$hxClasses["nx3.geom.Point"] = nx3.geom.Point;
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
	add: function(v) {
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
nx3.geom.RectanglesTools = function() { };
$hxClasses["nx3.geom.RectanglesTools"] = nx3.geom.RectanglesTools;
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
$hxClasses["nx3.qs.BaseParser"] = nx3.qs.BaseParser;
nx3.qs.BaseParser.__name__ = ["nx3","qs","BaseParser"];
nx3.qs.BaseParser.prototype = {
	getTokenfunction: function(functions,token) {
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
$hxClasses["nx3.qs.BarParser"] = nx3.qs.BarParser;
nx3.qs.BarParser.__name__ = ["nx3","qs","BarParser"];
nx3.qs.BarParser.__super__ = nx3.qs.BaseParser;
nx3.qs.BarParser.prototype = $extend(nx3.qs.BaseParser.prototype,{
	createFunctions: function() {
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
nx3.qs.ContentMode = $hxClasses["nx3.qs.ContentMode"] = { __ename__ : ["nx3","qs","ContentMode"], __constructs__ : ["Notes","Tpls","Lyrics"] };
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
$hxClasses["nx3.qs.LyricsParser"] = nx3.qs.LyricsParser;
nx3.qs.LyricsParser.__name__ = ["nx3","qs","LyricsParser"];
nx3.qs.LyricsParser.__super__ = nx3.qs.BaseParser;
nx3.qs.LyricsParser.prototype = $extend(nx3.qs.BaseParser.prototype,{
	createFunctions: function() {
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
$hxClasses["nx3.qs.ModeParser"] = nx3.qs.ModeParser;
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
$hxClasses["nx3.qs.NoteParser"] = nx3.qs.NoteParser;
nx3.qs.NoteParser.__name__ = ["nx3","qs","NoteParser"];
nx3.qs.NoteParser.__super__ = nx3.qs.BaseParser;
nx3.qs.NoteParser.prototype = $extend(nx3.qs.BaseParser.prototype,{
	createFunctions: function() {
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
nx3.qs.ParserEvents = $hxClasses["nx3.qs.ParserEvents"] = { __ename__ : ["nx3","qs","ParserEvents"], __constructs__ : ["SetGuessOctave","SetOctave","SetNoteVal","SetMode","SetBarClef"] };
nx3.qs.ParserEvents.SetGuessOctave = function(mode) { var $x = ["SetGuessOctave",0,mode]; $x.__enum__ = nx3.qs.ParserEvents; $x.toString = $estr; return $x; };
nx3.qs.ParserEvents.SetOctave = function(octave) { var $x = ["SetOctave",1,octave]; $x.__enum__ = nx3.qs.ParserEvents; $x.toString = $estr; return $x; };
nx3.qs.ParserEvents.SetNoteVal = function(value) { var $x = ["SetNoteVal",2,value]; $x.__enum__ = nx3.qs.ParserEvents; $x.toString = $estr; return $x; };
nx3.qs.ParserEvents.SetMode = function(mode) { var $x = ["SetMode",3,mode]; $x.__enum__ = nx3.qs.ParserEvents; $x.toString = $estr; return $x; };
nx3.qs.ParserEvents.SetBarClef = function(clef) { var $x = ["SetBarClef",4,clef]; $x.__enum__ = nx3.qs.ParserEvents; $x.toString = $estr; return $x; };
nx3.qs.QSyntaxTools = function() { };
$hxClasses["nx3.qs.QSyntaxTools"] = nx3.qs.QSyntaxTools;
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
$hxClasses["nx3.qs.QuickSyntaxBuilder"] = nx3.qs.QuickSyntaxBuilder;
nx3.qs.QuickSyntaxBuilder.__name__ = ["nx3","qs","QuickSyntaxBuilder"];
nx3.qs.QuickSyntaxBuilder.prototype = {
	getNBars: function() {
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
$hxClasses["nx3.qs.QuickSyntaxParser"] = nx3.qs.QuickSyntaxParser;
nx3.qs.QuickSyntaxParser.__name__ = ["nx3","qs","QuickSyntaxParser"];
nx3.qs.QuickSyntaxParser.prototype = {
	parseToQSyntaxNotes: function() {
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
$hxClasses["nx3.render.ITarget"] = nx3.render.ITarget;
nx3.render.ITarget.__name__ = ["nx3","render","ITarget"];
nx3.render.ITarget.prototype = {
	__class__: nx3.render.ITarget
};
nx3.render.TargetSprite = function(target,scaling) {
	if(target == null) target = new openfl.display.Sprite();
	this.sprite = target;
	this.graphics = target.get_graphics();
	if(scaling != null) this.scaling = scaling; else this.scaling = nx3.render.scaling.Scaling.NORMAL;
	this.textformat = new openfl.text.TextFormat();
	this.textfield = new openfl.text.TextField();
	this.setFont(nx3.Constants.FONT_TEXT_DEFAULTFORMAT);
};
$hxClasses["nx3.render.TargetSprite"] = nx3.render.TargetSprite;
nx3.render.TargetSprite.__name__ = ["nx3","render","TargetSprite"];
nx3.render.TargetSprite.__interfaces__ = [nx3.render.ITarget];
nx3.render.TargetSprite.prototype = {
	getTargetSprite: function(x,y) {
		if(y == null) y = 0;
		if(x == null) x = 0;
		this.sprite.set_x(x);
		this.sprite.set_y(y);
		return this.sprite;
	}
	,testLines: function(x,y,width) {
		this.sprite.get_graphics().lineStyle(this.scaling.linesWidth,11184810);
		var _g = -2;
		while(_g < 3) {
			var i = _g++;
			var cy = y + i * this.scaling.space;
			this.sprite.get_graphics().moveTo(x,cy);
			this.sprite.get_graphics().lineTo(x + width,cy);
		}
	}
	,rect: function(x,y,rect,lineWidth,lineColor) {
		this.sprite.get_graphics().lineStyle(lineWidth,lineColor);
		this.sprite.get_graphics().drawRect(x + rect.x,y + rect.y,rect.width,rect.height);
	}
	,rectangle: function(x,y,rect,lineWidth,lineColor) {
		if(lineColor == null) lineColor = 0;
		if(lineWidth == null) lineWidth = 1;
		this.sprite.get_graphics().lineStyle(lineWidth,lineColor);
		this.sprite.get_graphics().drawRect(x + rect.x * this.scaling.unitX,y + rect.y * this.scaling.unitY,rect.width * this.scaling.unitX,rect.height * this.scaling.unitY);
	}
	,rectangles: function(x,y,rects,lineWidth,lineColor) {
		if(lineColor == null) lineColor = 0;
		if(lineWidth == null) lineWidth = 1;
		var _g = 0;
		while(_g < rects.length) {
			var rect = rects[_g];
			++_g;
			this.rectangle(x,y,rect,lineWidth,lineColor);
		}
	}
	,getScaling: function() {
		return this.scaling;
	}
	,line: function(x,y,x2,y2,lineWidth,lineColor) {
		if(lineColor == null) lineColor = 0;
		if(lineWidth == null) lineWidth = 1;
		this.sprite.get_graphics().lineStyle(lineWidth * this.scaling.linesWidth,lineColor);
		this.sprite.get_graphics().moveTo(x,y);
		this.sprite.get_graphics().lineTo(x2,y2);
	}
	,shape: function(x,y,xmlStr,fillColor) {
		if(fillColor == null) fillColor = 0;
		var shape = nx3.render.svg.ShapeTools.getShape(xmlStr,this.scaling);
		shape.set_x(x);
		shape.set_y(y + this.scaling.svgY);
		this.sprite.addChild(shape);
	}
	,text: function(x,y,text) {
		var textfield = new openfl.text.TextField();
		textfield.set_defaultTextFormat(this.textformat);
		textfield.set_text(text);
		textfield.set_x(x + -.3 * this.scaling.unitX);
		textfield.set_y(y + -1.2 * this.scaling.unitY);
		textfield.set_autoSize(openfl.text.TextFieldAutoSize.LEFT);
		textfield.selectable = false;
		this.sprite.addChild(textfield);
	}
	,textwidth: function(text) {
		this.textfield.set_text(text);
		var width = this.textfield.get_textWidth() / this.scaling.unitX;
		return width;
	}
	,textheight: function(text) {
		return this.textformat.size / this.scaling.unitY;
	}
	,setFont: function(font) {
		this.textformat.font = font.name;
		this.textformat.size = font.size * this.scaling.fontScaling;
		this.textformat.bold = font.bold;
		this.textformat.italic = font.italic;
		this.textfield.set_defaultTextFormat(this.textformat);
		this.textfield.set_autoSize(openfl.text.TextFieldAutoSize.LEFT);
	}
	,filledrectangle: function(x,y,rect,lineWidth,lineColor,fillColor) {
		this.sprite.get_graphics().beginFill(fillColor);
		this.sprite.get_graphics().lineStyle(lineWidth * this.scaling.linesWidth,lineColor);
		this.sprite.get_graphics().drawRect(x + rect.x * this.scaling.unitX,y + rect.y * this.scaling.unitY,rect.width * this.scaling.unitX,rect.height * this.scaling.unitY);
		this.sprite.get_graphics().endFill();
	}
	,filledellipse: function(x,y,rect,lineWidth,lineColor,fillColor) {
		this.sprite.get_graphics().beginFill(fillColor);
		this.sprite.get_graphics().lineStyle(lineWidth * this.scaling.linesWidth,lineColor);
		this.sprite.get_graphics().drawEllipse(x + rect.x * this.scaling.unitX,y + rect.y * this.scaling.unitY,rect.width * this.scaling.unitX,rect.height * this.scaling.unitY);
		this.sprite.get_graphics().endFill();
	}
	,parallellogram: function(x,y,x2,y2,pheight,lineWidth,lineColor,fillColor) {
		if(fillColor == null) fillColor = 16711680;
		if(lineColor == null) lineColor = 0;
		if(lineWidth == null) lineWidth = 1;
		var g = this.sprite.get_graphics();
		g.lineStyle(lineWidth * this.scaling.linesWidth,lineColor);
		g.beginFill(fillColor);
		g.moveTo(x,y);
		g.lineTo(x2,y2);
		g.lineTo(x2,y2 + pheight);
		g.lineTo(x,y + pheight);
		g.lineTo(x,y);
		this.sprite.get_graphics().endFill();
	}
	,clear: function() {
		this.sprite.get_graphics().clear();
		while(this.sprite.get_numChildren() > 0) this.sprite.removeChildAt(0);
	}
	,drawShape: function(shape,x,y,rect) {
		if(shape == null) return;
		shape.set_x(x + rect.x * this.scaling.unitX + this.scaling.svgX);
		shape.set_y(y + rect.y * this.scaling.unitY + this.scaling.svgY);
		this.sprite.addChild(shape);
	}
	,bezieerX: function(anchor1,control1,control2,anchor2,lineWidth,lineColor) {
		if(lineColor == null) lineColor = 0;
		if(lineWidth == null) lineWidth = 1;
		var anchor11 = new nx3.geom.Point(100,100);
		var control11 = new nx3.geom.Point(100,10);
		var control21 = new nx3.geom.Point(300,10);
		var anchor21 = new nx3.geom.Point(300,100);
		var coord = [];
		coord.push(anchor11);
		var posx;
		var posy;
		var _g = 0;
		while(_g < 100) {
			var i = _g++;
			var u = i / 100;
			posx = Math.pow(u,3) * (anchor21.x + 3 * (control11.x - control21.x) - anchor11.x) + 3 * Math.pow(u,2) * (anchor11.x - 2 * control11.x + control21.x) + 3 * u * (control11.x - anchor11.x) + anchor11.x;
			posy = Math.pow(u,3) * (anchor21.y + 3 * (control11.y - control21.y) - anchor11.y) + 3 * Math.pow(u,2) * (anchor11.y - 2 * control11.y + control21.y) + 3 * u * (control11.y - anchor11.y) + anchor11.y;
			coord.push({ x : posx, y : posy});
		}
		coord.push(anchor21);
		this.sprite.get_graphics().lineStyle(lineWidth,lineColor);
		this.sprite.get_graphics().moveTo(anchor11.x,anchor11.y);
		var _g1 = 0;
		while(_g1 < coord.length) {
			var co = coord[_g1];
			++_g1;
			this.sprite.get_graphics().lineTo(co.x,co.y);
		}
	}
	,polyline: function(x,y,coordinates,lineWidth,lineColor) {
		if(lineColor == null) lineColor = 0;
		if(lineWidth == null) lineWidth = 1;
		this.sprite.get_graphics().lineStyle(lineWidth,lineColor);
		var first = coordinates.shift();
		this.sprite.get_graphics().moveTo(x + first.x * this.scaling.unitX,y + first.y * this.scaling.unitY);
		var _g = 0;
		while(_g < coordinates.length) {
			var co = coordinates[_g];
			++_g;
			this.sprite.get_graphics().lineTo(x + co.x * this.scaling.unitX,y + co.y * this.scaling.unitY);
		}
	}
	,polyfill: function(x,y,coordinates,lineWidth,lineColor,fillColor) {
		if(fillColor == null) fillColor = 255;
		if(lineColor == null) lineColor = 0;
		if(lineWidth == null) lineWidth = 1;
		this.sprite.get_graphics().beginFill(fillColor);
		this.polyline(x,y,coordinates,lineWidth,lineColor);
		this.sprite.get_graphics().endFill();
	}
	,interactiveEllipse: function(x,y,rect,lineWidth,lineColor,fillColor,cb) {
		if(fillColor == null) fillColor = 65280;
		var rect1 = this.scaleRect(rect,1,1.2);
		var s = new nx3.render.el.HoverSprite(rect1,lineColor,lineWidth);
		s.set_x(x);
		s.set_y(y);
		this.sprite.addChild(s);
		s.addEventListener(openfl.events.MouseEvent.ROLL_OVER,function(e) {
			if(cb != null) cb(nx3.action.EActivityType.MouseOver);
		});
		s.addEventListener(openfl.events.MouseEvent.ROLL_OUT,function(e1) {
			if(cb != null) cb(nx3.action.EActivityType.MouseOut);
		});
		s.addEventListener(openfl.events.MouseEvent.MOUSE_DOWN,function(e2) {
			if(cb != null) cb(nx3.action.EActivityType.MouseDown);
		});
		s.addEventListener(openfl.events.MouseEvent.MOUSE_UP,function(e3) {
			if(cb != null) cb(nx3.action.EActivityType.MouseUp);
		});
	}
	,scaleRect: function(rect,inflateX,inflateY) {
		if(inflateY == null) inflateY = 0;
		if(inflateX == null) inflateX = 0;
		var result = new openfl.geom.Rectangle(rect.x * this.scaling.unitX,rect.y * this.scaling.unitY,rect.width * this.scaling.unitX,rect.height * this.scaling.unitX);
		if(inflateX != 0 || inflateY != 0) result.inflate(inflateX * this.scaling.unitX,inflateY * this.scaling.unitY);
		return result;
	}
	,tooltipShow: function(rect,text) {
		if(this.tooltip == null) {
			this.tooltip = new cx.flash.Tooltipsprite(new openfl.geom.Rectangle(10,10,140,40));
			this.sprite.addChild(this.tooltip);
		}
		this.tooltip.set_x(rect.x);
		this.tooltip.set_y(rect.y);
		this.tooltip.set_alpha(1);
		this.tooltip.draw(text,rect);
	}
	,tooltipHide: function() {
		if(this.tooltip != null) {
			this.tooltip.set_alpha(0);
			this.tooltip.set_x(-200);
		}
	}
	,__class__: nx3.render.TargetSprite
};
nx3.render.el = {};
nx3.render.el.HoverSprite = function(rect,lineColor,lineWidth) {
	if(lineWidth == null) lineWidth = 1;
	if(lineColor == null) lineColor = 5132490;
	var _g = this;
	this.lineWidth = lineWidth;
	this.lineColor = lineColor;
	openfl.display.Sprite.call(this);
	this.rect = rect;
	this.redraw(0,this.lineWidth / 3,0.2);
	this.get_graphics().lineStyle(lineWidth,lineColor);
	this.addEventListener(openfl.events.MouseEvent.ROLL_OVER,function(e) {
		_g.redraw(_g.lineColor,_g.lineWidth,0.6);
	});
	this.addEventListener(openfl.events.MouseEvent.ROLL_OUT,function(e1) {
		_g.redraw(0,_g.lineWidth / 3,0.2);
	});
};
$hxClasses["nx3.render.el.HoverSprite"] = nx3.render.el.HoverSprite;
nx3.render.el.HoverSprite.__name__ = ["nx3","render","el","HoverSprite"];
nx3.render.el.HoverSprite.__super__ = openfl.display.Sprite;
nx3.render.el.HoverSprite.prototype = $extend(openfl.display.Sprite.prototype,{
	redraw: function(lineColor,lineWidth,alpha) {
		if(alpha == null) alpha = 1;
		if(lineWidth == null) lineWidth = 1;
		if(lineColor == null) lineColor = 16711680;
		this.get_graphics().clear();
		this.get_graphics().lineStyle(lineWidth,lineColor,alpha);
		this.get_graphics().beginFill(0,0.0);
		this.get_graphics().drawEllipse(this.rect.x,this.rect.y,this.rect.width,this.rect.height);
	}
	,__class__: nx3.render.el.HoverSprite
});
nx3.render.scaling = {};
nx3.render.scaling.Scaling = function() { };
$hxClasses["nx3.render.scaling.Scaling"] = nx3.render.scaling.Scaling;
nx3.render.scaling.Scaling.__name__ = ["nx3","render","scaling","Scaling"];
nx3.render.scaling.Scaling.scaleRect = function(scaling,rect) {
	return new openfl.geom.Rectangle(rect.x * scaling.unitX,rect.y * scaling.unitY,rect.width * scaling.unitX,rect.height * scaling.unitY);
};
nx3.render.svg = {};
nx3.render.svg.ShapeTools = function() { };
$hxClasses["nx3.render.svg.ShapeTools"] = nx3.render.svg.ShapeTools;
nx3.render.svg.ShapeTools.__name__ = ["nx3","render","svg","ShapeTools"];
nx3.render.svg.ShapeTools.getShape = function(xmlStr,scaling) {
	if(xmlStr == null) return null;
	var svg = new format.svg.SVG2Gfx(Xml.parse(xmlStr));
	var shape = svg.createShape();
	shape.set_scaleX(shape.set_scaleY(scaling.svgScale));
	shape.cacheAsBitmap = true;
	return shape;
};
nx3.render.svg.ShapeTools.getElementStr = function(element) {
	try {
		var str = Reflect.field(nx3.render.svg.SvgElements,element);
		return str;
	} catch( err ) {
		return nx3.render.svg.SvgElements.noteBlack;
	}
	return null;
};
nx3.render.svg.SvgElements = function() { };
$hxClasses["nx3.render.svg.SvgElements"] = nx3.render.svg.SvgElements;
nx3.render.svg.SvgElements.__name__ = ["nx3","render","svg","SvgElements"];
nx3.test = {};
nx3.test.TestItems = function() { };
$hxClasses["nx3.test.TestItems"] = nx3.test.TestItems;
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
	var generator = new nx3.PSystemBarsGenerator(bars,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,400,calculator);
	var system = generator.getSystem();
	return system;
};
nx3.test.TestItems.scoreTest1 = function() {
	var n0 = new nx3.NBar([new nx3.NPart([new nx3.QVoice([.4,16,16,4,4],null,null,null,"#.b.")],null,nx3.EClef.ClefC,null,nx3.EKey.Flat2)],null,nx3.ETime.Time2_4);
	var n1 = new nx3.NBar([new nx3.NPart([new nx3.QVoice([4,.4,8],null,[2,3,4],null,".#")])]);
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
	var score = new nx3.PScore(nscore);
	var xmlStr2 = nx3.xml.BarsXML.toXml(nbars).toString();
	return score;
};
nx3.test.TestItems.scoreTpl = function() {
	var nbars = [new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.QNote4(null,2),new nx3.QNote4(null,4),new nx3.QNote4(null,3),new nx3.QNote4(null,-1)])]),new nx3.NPart([new nx3.NVoice([new nx3.NNote(nx3.ENoteType.Tpl(0)),new nx3.NNote(nx3.ENoteType.Tpl(2)),new nx3.NNote(nx3.ENoteType.Tpl(1)),new nx3.NNote(nx3.ENoteType.Tpl(-3))])],nx3.EPartType.Tplchain)])];
	var nscore = new nx3.NScore(nbars);
	var score = new nx3.PScore(nscore);
	return score;
};
nx3.test.TestItems.scoreTies = function() {
	var nbar0 = new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,1,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,-1))]),new nx3.NNote(null,[new nx3.NHead(null,1,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,1))])]),new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,3,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,1))])])]),new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0)]),new nx3.NNote(null,[new nx3.NHead(null,5,null,nx3.ETie.Tie(nx3.EDirectionUAD.Auto,1))])])])]);
	var nbar1 = new nx3.NBar([new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,3)]),new nx3.NNote(null,[new nx3.NHead(null,0)])])]),new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,3)]),new nx3.NNote(null,[new nx3.NHead(null,0)])]),new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,5)]),new nx3.NNote(null,[new nx3.NHead(null,0)])])])]);
	var score = new nx3.PScore(new nx3.NScore([nbar0,nbar1]));
	var xmlstr = nx3.xml.BarsXML.toXml(score.getNBars()).toString();
	haxe.Log.trace(xmlstr,{ fileName : "TestItems.hx", lineNumber : 660, className : "nx3.test.TestItems", methodName : "scoreTies"});
	var bars2 = nx3.xml.BarsXML.fromXmlStr(xmlstr);
	var xmlstr2 = nx3.xml.BarsXML.toXml(bars2).toString();
	haxe.Log.trace(xmlstr,{ fileName : "TestItems.hx", lineNumber : 663, className : "nx3.test.TestItems", methodName : "scoreTies"});
	return score;
};
nx3.xml = {};
nx3.xml.BarXML = function() { };
$hxClasses["nx3.xml.BarXML"] = nx3.xml.BarXML;
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
$hxClasses["nx3.xml.BarsXML"] = nx3.xml.BarsXML;
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
$hxClasses["nx3.xml.HeadXML"] = nx3.xml.HeadXML;
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
$hxClasses["nx3.xml.NoteXML"] = nx3.xml.NoteXML;
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
$hxClasses["nx3.xml.PartXML"] = nx3.xml.PartXML;
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
$hxClasses["nx3.xml.VoiceXML"] = nx3.xml.VoiceXML;
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
openfl.AssetCache = function() {
	this.enabled = true;
	this.bitmapData = new haxe.ds.StringMap();
	this.font = new haxe.ds.StringMap();
	this.sound = new haxe.ds.StringMap();
};
$hxClasses["openfl.AssetCache"] = openfl.AssetCache;
openfl.AssetCache.__name__ = ["openfl","AssetCache"];
openfl.AssetCache.prototype = {
	clear: function(prefix) {
		if(prefix == null) {
			this.bitmapData = new haxe.ds.StringMap();
			this.font = new haxe.ds.StringMap();
			this.sound = new haxe.ds.StringMap();
		} else {
			var keys = this.bitmapData.keys();
			while( keys.hasNext() ) {
				var key = keys.next();
				if(StringTools.startsWith(key,prefix)) this.bitmapData.remove(key);
			}
			var keys1 = this.font.keys();
			while( keys1.hasNext() ) {
				var key1 = keys1.next();
				if(StringTools.startsWith(key1,prefix)) this.font.remove(key1);
			}
			var keys2 = this.sound.keys();
			while( keys2.hasNext() ) {
				var key2 = keys2.next();
				if(StringTools.startsWith(key2,prefix)) this.sound.remove(key2);
			}
		}
	}
	,__class__: openfl.AssetCache
};
openfl.Assets = function() { };
$hxClasses["openfl.Assets"] = openfl.Assets;
openfl.Assets.__name__ = ["openfl","Assets"];
openfl.Assets.addEventListener = function(type,listener,useCapture,priority,useWeakReference) {
	if(useWeakReference == null) useWeakReference = false;
	if(priority == null) priority = 0;
	if(useCapture == null) useCapture = false;
	openfl.Assets.initialize();
	openfl.Assets.dispatcher.addEventListener(type,listener,useCapture,priority,useWeakReference);
};
openfl.Assets.dispatchEvent = function(event) {
	openfl.Assets.initialize();
	return openfl.Assets.dispatcher.dispatchEvent(event);
};
openfl.Assets.exists = function(id,type) {
	openfl.Assets.initialize();
	if(type == null) type = openfl.AssetType.BINARY;
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.exists(symbolName,type);
	return false;
};
openfl.Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) return bitmapData;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(library.isLocal(symbolName,openfl.AssetType.IMAGE)) {
				var bitmapData1 = library.getBitmapData(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.bitmapData.set(id,bitmapData1);
				return bitmapData1;
			} else haxe.Log.trace("[openfl.Assets] BitmapData asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 139, className : "openfl.Assets", methodName : "getBitmapData"});
		} else haxe.Log.trace("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 145, className : "openfl.Assets", methodName : "getBitmapData"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 151, className : "openfl.Assets", methodName : "getBitmapData"});
	return null;
};
openfl.Assets.getBytes = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			if(library.isLocal(symbolName,openfl.AssetType.BINARY)) return library.getBytes(symbolName); else haxe.Log.trace("[openfl.Assets] String or ByteArray asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 188, className : "openfl.Assets", methodName : "getBytes"});
		} else haxe.Log.trace("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 194, className : "openfl.Assets", methodName : "getBytes"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 200, className : "openfl.Assets", methodName : "getBytes"});
	return null;
};
openfl.Assets.getFont = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) return openfl.Assets.cache.font.get(id);
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(library.isLocal(symbolName,openfl.AssetType.FONT)) {
				var font = library.getFont(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.font.set(id,font);
				return font;
			} else haxe.Log.trace("[openfl.Assets] Font asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 251, className : "openfl.Assets", methodName : "getFont"});
		} else haxe.Log.trace("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 257, className : "openfl.Assets", methodName : "getFont"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 263, className : "openfl.Assets", methodName : "getFont"});
	return null;
};
openfl.Assets.getLibrary = function(name) {
	if(name == null || name == "") name = "default";
	return openfl.Assets.libraries.get(name);
};
openfl.Assets.getMovieClip = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			if(library.isLocal(symbolName,openfl.AssetType.MOVIE_CLIP)) return library.getMovieClip(symbolName); else haxe.Log.trace("[openfl.Assets] MovieClip asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 313, className : "openfl.Assets", methodName : "getMovieClip"});
		} else haxe.Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 319, className : "openfl.Assets", methodName : "getMovieClip"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 325, className : "openfl.Assets", methodName : "getMovieClip"});
	return null;
};
openfl.Assets.getMusic = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) return sound;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MUSIC)) {
			if(library.isLocal(symbolName,openfl.AssetType.MUSIC)) {
				var sound1 = library.getMusic(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.sound.set(id,sound1);
				return sound1;
			} else haxe.Log.trace("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 382, className : "openfl.Assets", methodName : "getMusic"});
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 388, className : "openfl.Assets", methodName : "getMusic"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 394, className : "openfl.Assets", methodName : "getMusic"});
	return null;
};
openfl.Assets.getPath = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,null)) return library.getPath(symbolName); else haxe.Log.trace("[openfl.Assets] There is no asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 429, className : "openfl.Assets", methodName : "getPath"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 435, className : "openfl.Assets", methodName : "getPath"});
	return null;
};
openfl.Assets.getSound = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) return sound;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(library.isLocal(symbolName,openfl.AssetType.SOUND)) {
				var sound1 = library.getSound(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.sound.set(id,sound1);
				return sound1;
			} else haxe.Log.trace("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 492, className : "openfl.Assets", methodName : "getSound"});
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 498, className : "openfl.Assets", methodName : "getSound"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 504, className : "openfl.Assets", methodName : "getSound"});
	return null;
};
openfl.Assets.getText = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.TEXT)) {
			if(library.isLocal(symbolName,openfl.AssetType.TEXT)) return library.getText(symbolName); else haxe.Log.trace("[openfl.Assets] String asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 541, className : "openfl.Assets", methodName : "getText"});
		} else haxe.Log.trace("[openfl.Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 547, className : "openfl.Assets", methodName : "getText"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 553, className : "openfl.Assets", methodName : "getText"});
	return null;
};
openfl.Assets.hasEventListener = function(type) {
	openfl.Assets.initialize();
	return openfl.Assets.dispatcher.hasEventListener(type);
};
openfl.Assets.initialize = function() {
	if(!openfl.Assets.initialized) {
		openfl.Assets.registerLibrary("default",new DefaultAssetLibrary());
		openfl.Assets.initialized = true;
	}
};
openfl.Assets.isLocal = function(id,type,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled) {
		if(type == openfl.AssetType.IMAGE || type == null) {
			if(openfl.Assets.cache.bitmapData.exists(id)) return true;
		}
		if(type == openfl.AssetType.FONT || type == null) {
			if(openfl.Assets.cache.font.exists(id)) return true;
		}
		if(type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC || type == null) {
			if(openfl.Assets.cache.sound.exists(id)) return true;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.isLocal(symbolName,type);
	return false;
};
openfl.Assets.isValidBitmapData = function(bitmapData) {
	return bitmapData.__sourceImage != null || bitmapData.__sourceCanvas != null;
	return true;
};
openfl.Assets.isValidSound = function(sound) {
	return true;
};
openfl.Assets.list = function(type) {
	openfl.Assets.initialize();
	var items = [];
	var $it0 = openfl.Assets.libraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var libraryItems = library.list(type);
		if(libraryItems != null) items = items.concat(libraryItems);
	}
	return items;
};
openfl.Assets.loadBitmapData = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) {
			handler(bitmapData);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadBitmapData(symbolName,function(bitmapData1) {
				openfl.Assets.cache.bitmapData.set(id,bitmapData1);
				handler(bitmapData1);
			}); else library.loadBitmapData(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 750, className : "openfl.Assets", methodName : "loadBitmapData"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 756, className : "openfl.Assets", methodName : "loadBitmapData"});
	handler(null);
};
openfl.Assets.loadBytes = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			library.loadBytes(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 786, className : "openfl.Assets", methodName : "loadBytes"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 792, className : "openfl.Assets", methodName : "loadBytes"});
	handler(null);
};
openfl.Assets.loadFont = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) {
		handler(openfl.Assets.cache.font.get(id));
		return;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadFont(symbolName,function(font) {
				openfl.Assets.cache.font.set(id,font);
				handler(font);
			}); else library.loadFont(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 843, className : "openfl.Assets", methodName : "loadFont"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 849, className : "openfl.Assets", methodName : "loadFont"});
	handler(null);
};
openfl.Assets.loadLibrary = function(name,handler) {
	openfl.Assets.initialize();
	var data = openfl.Assets.getText("libraries/" + name + ".dat");
	if(data != null && data != "") {
		var unserializer = new haxe.Unserializer(data);
		unserializer.setResolver({ resolveEnum : openfl.Assets.resolveEnum, resolveClass : openfl.Assets.resolveClass});
		var library = unserializer.unserialize();
		openfl.Assets.libraries.set(name,library);
		library.eventCallback = openfl.Assets.library_onEvent;
		library.load(handler);
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + name + "\"",{ fileName : "Assets.hx", lineNumber : 880, className : "openfl.Assets", methodName : "loadLibrary"});
};
openfl.Assets.loadMusic = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) {
			handler(sound);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MUSIC)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadMusic(symbolName,function(sound1) {
				openfl.Assets.cache.sound.set(id,sound1);
				handler(sound1);
			}); else library.loadMusic(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 935, className : "openfl.Assets", methodName : "loadMusic"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 941, className : "openfl.Assets", methodName : "loadMusic"});
	handler(null);
};
openfl.Assets.loadMovieClip = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			library.loadMovieClip(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 971, className : "openfl.Assets", methodName : "loadMovieClip"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 977, className : "openfl.Assets", methodName : "loadMovieClip"});
	handler(null);
};
openfl.Assets.loadSound = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) {
			handler(sound);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadSound(symbolName,function(sound1) {
				openfl.Assets.cache.sound.set(id,sound1);
				handler(sound1);
			}); else library.loadSound(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 1034, className : "openfl.Assets", methodName : "loadSound"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 1040, className : "openfl.Assets", methodName : "loadSound"});
	handler(null);
};
openfl.Assets.loadText = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.TEXT)) {
			library.loadText(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 1070, className : "openfl.Assets", methodName : "loadText"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 1076, className : "openfl.Assets", methodName : "loadText"});
	handler(null);
};
openfl.Assets.registerLibrary = function(name,library) {
	if(openfl.Assets.libraries.exists(name)) openfl.Assets.unloadLibrary(name);
	if(library != null) library.eventCallback = openfl.Assets.library_onEvent;
	openfl.Assets.libraries.set(name,library);
};
openfl.Assets.removeEventListener = function(type,listener,capture) {
	if(capture == null) capture = false;
	openfl.Assets.initialize();
	openfl.Assets.dispatcher.removeEventListener(type,listener,capture);
};
openfl.Assets.resolveClass = function(name) {
	return Type.resolveClass(name);
};
openfl.Assets.resolveEnum = function(name) {
	var value = Type.resolveEnum(name);
	return value;
};
openfl.Assets.unloadLibrary = function(name) {
	openfl.Assets.initialize();
	var library = openfl.Assets.libraries.get(name);
	if(library != null) {
		openfl.Assets.cache.clear(name + ":");
		library.eventCallback = null;
	}
	openfl.Assets.libraries.remove(name);
};
openfl.Assets.library_onEvent = function(library,type) {
	if(type == "change") {
		openfl.Assets.cache.clear();
		openfl.Assets.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE));
	}
};
openfl.AssetData = function() {
};
$hxClasses["openfl.AssetData"] = openfl.AssetData;
openfl.AssetData.__name__ = ["openfl","AssetData"];
openfl.AssetData.prototype = {
	__class__: openfl.AssetData
};
openfl.AssetType = $hxClasses["openfl.AssetType"] = { __ename__ : ["openfl","AssetType"], __constructs__ : ["BINARY","FONT","IMAGE","MOVIE_CLIP","MUSIC","SOUND","TEMPLATE","TEXT"] };
openfl.AssetType.BINARY = ["BINARY",0];
openfl.AssetType.BINARY.toString = $estr;
openfl.AssetType.BINARY.__enum__ = openfl.AssetType;
openfl.AssetType.FONT = ["FONT",1];
openfl.AssetType.FONT.toString = $estr;
openfl.AssetType.FONT.__enum__ = openfl.AssetType;
openfl.AssetType.IMAGE = ["IMAGE",2];
openfl.AssetType.IMAGE.toString = $estr;
openfl.AssetType.IMAGE.__enum__ = openfl.AssetType;
openfl.AssetType.MOVIE_CLIP = ["MOVIE_CLIP",3];
openfl.AssetType.MOVIE_CLIP.toString = $estr;
openfl.AssetType.MOVIE_CLIP.__enum__ = openfl.AssetType;
openfl.AssetType.MUSIC = ["MUSIC",4];
openfl.AssetType.MUSIC.toString = $estr;
openfl.AssetType.MUSIC.__enum__ = openfl.AssetType;
openfl.AssetType.SOUND = ["SOUND",5];
openfl.AssetType.SOUND.toString = $estr;
openfl.AssetType.SOUND.__enum__ = openfl.AssetType;
openfl.AssetType.TEMPLATE = ["TEMPLATE",6];
openfl.AssetType.TEMPLATE.toString = $estr;
openfl.AssetType.TEMPLATE.__enum__ = openfl.AssetType;
openfl.AssetType.TEXT = ["TEXT",7];
openfl.AssetType.TEXT.toString = $estr;
openfl.AssetType.TEXT.__enum__ = openfl.AssetType;
openfl.Lib = function() { };
$hxClasses["openfl.Lib"] = openfl.Lib;
openfl.Lib.__name__ = ["openfl","Lib"];
openfl.Lib.current = null;
openfl.Lib["as"] = function(v,c) {
	if(js.Boot.__instanceof(v,c)) return v; else return null;
};
openfl.Lib.attach = function(name) {
	return new openfl.display.MovieClip();
};
openfl.Lib.create = function(element,width,height,backgroundColor) {
	if(width == null) width = 0;
	if(height == null) height = 0;
	
			var lastTime = 0;
			var vendors = ['ms', 'moz', 'webkit', 'o'];
			for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
										   || window[vendors[x]+'CancelRequestAnimationFrame'];
			}
			
			if (!window.requestAnimationFrame)
				window.requestAnimationFrame = function(callback, element) {
					var currTime = new Date().getTime();
					var timeToCall = Math.max(0, 16 - (currTime - lastTime));
					var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
					  timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};
			
			if (!window.cancelAnimationFrame)
				window.cancelAnimationFrame = function(id) {
					clearTimeout(id);
				};
			
			window.requestAnimFrame = window.requestAnimationFrame;
		;
	var stage = new openfl.display.Stage(width,height,element,backgroundColor);
	if(openfl.Lib.current == null) {
		openfl.Lib.current = new openfl.display.MovieClip();
		stage.addChild(openfl.Lib.current);
	}
};
openfl.Lib.getTimer = function() {
	return Std["int"]((haxe.Timer.stamp() - openfl.Lib.__startTime) * 1000);
};
openfl.Lib.getURL = function(request,target) {
	if(target == null) target = "_blank";
	window.open(request.url,target);
};
openfl.Lib.notImplemented = function(api) {
	if(!openfl.Lib.__sentWarnings.exists(api)) {
		openfl.Lib.__sentWarnings.set(api,true);
		haxe.Log.trace("Warning: " + api + " is not implemented",{ fileName : "Lib.hx", lineNumber : 114, className : "openfl.Lib", methodName : "notImplemented"});
	}
};
openfl.Lib.preventDefaultTouchMove = function() {
	window.document.addEventListener("touchmove",function(evt) {
		evt.preventDefault();
	},false);
};
openfl.Lib.trace = function(arg) {
	haxe.Log.trace(arg,{ fileName : "Lib.hx", lineNumber : 134, className : "openfl.Lib", methodName : "trace"});
};
openfl.Memory = function() { };
$hxClasses["openfl.Memory"] = openfl.Memory;
openfl.Memory.__name__ = ["openfl","Memory"];
openfl.Memory.gcRef = null;
openfl.Memory.len = null;
openfl.Memory._setPositionTemporarily = function(position,action) {
	var oldPosition = openfl.Memory.gcRef.position;
	openfl.Memory.gcRef.position = position;
	var value = action();
	openfl.Memory.gcRef.position = oldPosition;
	return value;
};
openfl.Memory.getByte = function(addr) {
	return openfl.Memory.gcRef.__get(addr);
};
openfl.Memory.getDouble = function(addr) {
	return openfl.Memory._setPositionTemporarily(addr,function() {
		return openfl.Memory.gcRef.readDouble();
	});
};
openfl.Memory.getFloat = function(addr) {
	return openfl.Memory._setPositionTemporarily(addr,function() {
		return openfl.Memory.gcRef.readFloat();
	});
};
openfl.Memory.getI32 = function(addr) {
	return openfl.Memory._setPositionTemporarily(addr,function() {
		return openfl.Memory.gcRef.readInt();
	});
};
openfl.Memory.getUI16 = function(addr) {
	return openfl.Memory._setPositionTemporarily(addr,function() {
		return openfl.Memory.gcRef.readUnsignedShort();
	});
};
openfl.Memory.select = function(inBytes) {
	openfl.Memory.gcRef = inBytes;
	if(inBytes != null) openfl.Memory.len = inBytes.length; else openfl.Memory.len = 0;
};
openfl.Memory.setByte = function(addr,v) {
	openfl.Memory.gcRef.__set(addr,v);
};
openfl.Memory.setDouble = function(addr,v) {
	openfl.Memory._setPositionTemporarily(addr,function() {
		openfl.Memory.gcRef.writeDouble(v);
	});
};
openfl.Memory.setFloat = function(addr,v) {
	openfl.Memory._setPositionTemporarily(addr,function() {
		openfl.Memory.gcRef.writeFloat(v);
	});
};
openfl.Memory.setI16 = function(addr,v) {
	openfl.Memory._setPositionTemporarily(addr,function() {
		openfl.Memory.gcRef.writeUnsignedShort(v);
	});
};
openfl.Memory.setI32 = function(addr,v) {
	openfl.Memory._setPositionTemporarily(addr,function() {
		openfl.Memory.gcRef.writeInt(v);
	});
};
openfl._Vector = {};
openfl._Vector.Vector_Impl_ = function() { };
$hxClasses["openfl._Vector.Vector_Impl_"] = openfl._Vector.Vector_Impl_;
openfl._Vector.Vector_Impl_.__name__ = ["openfl","_Vector","Vector_Impl_"];
openfl._Vector.Vector_Impl_._new = function(length,fixed) {
	if(fixed == null) fixed = false;
	if(length == null) length = 0;
	var this1;
	this1 = new openfl.VectorData();
	var this2;
	this2 = new Array(length);
	this1.data = this2;
	this1.length = length;
	this1.fixed = fixed;
	return this1;
};
openfl._Vector.Vector_Impl_.concat = function(this1,a) {
	var vectorData = new openfl.VectorData();
	if(a != null) vectorData.length = this1.length + a.length; else vectorData.length = this1.length;
	vectorData.fixed = false;
	var this2;
	this2 = new Array(vectorData.length);
	vectorData.data = this2;
	haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,vectorData.data,0,this1.length);
	if(a != null) haxe.ds._Vector.Vector_Impl_.blit(a.data,0,vectorData.data,this1.length,a.length);
	return vectorData;
};
openfl._Vector.Vector_Impl_.copy = function(this1) {
	var vectorData = new openfl.VectorData();
	vectorData.length = this1.length;
	vectorData.fixed = this1.fixed;
	var this2;
	this2 = new Array(this1.length);
	vectorData.data = this2;
	haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,vectorData.data,0,this1.length);
	return vectorData;
};
openfl._Vector.Vector_Impl_.iterator = function(this1) {
	return new openfl.VectorDataIterator(this1);
};
openfl._Vector.Vector_Impl_.join = function(this1,sep) {
	var output = "";
	var _g1 = 0;
	var _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(i > 0) output += sep;
		output += Std.string(this1.data[i]);
	}
	return output;
};
openfl._Vector.Vector_Impl_.pop = function(this1) {
	if(!this1.fixed) {
		if(this1.length > 0) {
			this1.length--;
			return this1.data[this1.length];
		}
	}
	return null;
};
openfl._Vector.Vector_Impl_.push = function(this1,x) {
	if(!this1.fixed) {
		this1.length++;
		if(this1.data.length < this1.length) {
			var data;
			var this2;
			this2 = new Array(this1.data.length + 10);
			data = this2;
			haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,data,0,this1.data.length);
			this1.data = data;
		}
		this1.data[this1.length - 1] = x;
	}
	return this1.length;
};
openfl._Vector.Vector_Impl_.reverse = function(this1) {
	var data;
	var this2;
	this2 = new Array(this1.length);
	data = this2;
	var _g1 = 0;
	var _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		data[this1.length - 1 - i] = this1.data[i];
	}
	this1.data = data;
};
openfl._Vector.Vector_Impl_.shift = function(this1) {
	if(!this1.fixed && this1.length > 0) {
		var value = this1.data[0];
		this1.length--;
		haxe.ds._Vector.Vector_Impl_.blit(this1.data,1,this1.data,0,this1.length);
		return value;
	}
	return null;
};
openfl._Vector.Vector_Impl_.unshift = function(this1,x) {
	if(!this1.fixed) {
		this1.length++;
		if(this1.data.length < this1.length) {
			var data;
			var this2;
			this2 = new Array(this1.length + 10);
			data = this2;
			haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,data,1,this1.data.length);
			this1.data = data;
		} else haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,this1.data,1,this1.length - 1);
		this1.data[0] = x;
	}
};
openfl._Vector.Vector_Impl_.slice = function(this1,pos,end) {
	if(end == null) end = 0;
	if(pos == null) pos = 0;
	if(pos < 0) pos += this1.length;
	if(end <= 0) end += this1.length;
	if(end > this1.length) end = this1.length;
	var length = end - pos;
	if(length <= 0 || length > this1.length) length = this1.length;
	var vectorData = new openfl.VectorData();
	vectorData.length = end - pos;
	vectorData.fixed = true;
	var this2;
	this2 = new Array(length);
	vectorData.data = this2;
	haxe.ds._Vector.Vector_Impl_.blit(this1.data,pos,vectorData.data,0,length);
	return vectorData;
};
openfl._Vector.Vector_Impl_.sort = function(this1,f) {
	var array = haxe.ds._Vector.Vector_Impl_.toArray(this1.data);
	array.sort(f);
	var vec;
	var this2;
	this2 = new Array(array.length);
	vec = this2;
	var _g1 = 0;
	var _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		vec[i] = array[i];
	}
	this1.data = vec;
};
openfl._Vector.Vector_Impl_.splice = function(this1,pos,len) {
	if(pos < 0) pos += this1.length;
	if(pos + len > this1.length) len = this1.length - pos;
	if(len < 0) len = 0;
	var vectorData = new openfl.VectorData();
	vectorData.length = len;
	vectorData.fixed = false;
	var this2;
	this2 = new Array(len);
	vectorData.data = this2;
	haxe.ds._Vector.Vector_Impl_.blit(this1.data,pos,vectorData.data,0,len);
	if(len > 0) {
		this1.length -= len;
		haxe.ds._Vector.Vector_Impl_.blit(this1.data,pos + len,this1.data,pos,this1.length - pos);
	}
	return vectorData;
};
openfl._Vector.Vector_Impl_.toString = function(this1) {
	return "";
};
openfl._Vector.Vector_Impl_.indexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var _g1 = from;
	var _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this1.data[i] == x) return i;
	}
	return -1;
};
openfl._Vector.Vector_Impl_.lastIndexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var i = this1.length - 1;
	while(i >= from) {
		if(this1.data[i] == x) return i;
		i--;
	}
	return -1;
};
openfl._Vector.Vector_Impl_.ofArray = function(a) {
	var vectorData = new openfl.VectorData();
	vectorData.length = a.length;
	vectorData.fixed = true;
	var vec;
	var this1;
	this1 = new Array(a.length);
	vec = this1;
	var _g1 = 0;
	var _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		vec[i] = a[i];
	}
	vectorData.data = vec;
	return vectorData;
};
openfl._Vector.Vector_Impl_.convert = function(v) {
	return v;
};
openfl._Vector.Vector_Impl_.arrayAccess = function(this1,key) {
	return this1.data[key];
};
openfl._Vector.Vector_Impl_.arrayWrite = function(this1,key,value) {
	if(key >= this1.length && !this1.fixed) this1.length = key + 1;
	return this1.data[key] = value;
};
openfl._Vector.Vector_Impl_.fromArray = function(value) {
	var vectorData = new openfl.VectorData();
	vectorData.length = value.length;
	vectorData.fixed = true;
	var vec;
	var this1;
	this1 = new Array(value.length);
	vec = this1;
	var _g1 = 0;
	var _g = value.length;
	while(_g1 < _g) {
		var i = _g1++;
		vec[i] = value[i];
	}
	vectorData.data = vec;
	return vectorData;
};
openfl._Vector.Vector_Impl_.toArray = function(this1) {
	var value = new Array();
	var _g1 = 0;
	var _g = this1.data.length;
	while(_g1 < _g) {
		var i = _g1++;
		value.push(this1.data[i]);
	}
	return value;
};
openfl._Vector.Vector_Impl_.fromHaxeVector = function(value) {
	var vectorData = new openfl.VectorData();
	vectorData.length = value.length;
	vectorData.fixed = true;
	vectorData.data = value;
	return vectorData;
};
openfl._Vector.Vector_Impl_.toHaxeVector = function(this1) {
	return this1.data;
};
openfl._Vector.Vector_Impl_.fromVectorData = function(value) {
	return value;
};
openfl._Vector.Vector_Impl_.toVectorData = function(this1) {
	return this1;
};
openfl._Vector.Vector_Impl_.get_length = function(this1) {
	return this1.length;
};
openfl._Vector.Vector_Impl_.set_length = function(this1,value) {
	if(!this1.fixed) {
		if(value > this1.length) {
			var data;
			var this2;
			this2 = new Array(value);
			data = this2;
			haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,data,0,Std["int"](Math.min(this1.data.length,value)));
			this1.data = data;
		}
		this1.length = value;
	}
	return value;
};
openfl._Vector.Vector_Impl_.get_fixed = function(this1) {
	return this1.fixed;
};
openfl._Vector.Vector_Impl_.set_fixed = function(this1,value) {
	return this1.fixed = value;
};
openfl.VectorData = function() {
	this.length = 0;
};
$hxClasses["openfl.VectorData"] = openfl.VectorData;
openfl.VectorData.__name__ = ["openfl","VectorData"];
openfl.VectorData.prototype = {
	__class__: openfl.VectorData
};
openfl.VectorDataIterator = function(data) {
	this.index = 0;
	this.vectorData = data;
};
$hxClasses["openfl.VectorDataIterator"] = openfl.VectorDataIterator;
openfl.VectorDataIterator.__name__ = ["openfl","VectorDataIterator"];
openfl.VectorDataIterator.prototype = {
	hasNext: function() {
		return this.index < this.vectorData.length;
	}
	,next: function() {
		var index = this.index++;
		return this.vectorData.data[index];
	}
	,__class__: openfl.VectorDataIterator
};
openfl.display.Bitmap = function(bitmapData,pixelSnapping,smoothing) {
	if(smoothing == null) smoothing = false;
	openfl.display.DisplayObjectContainer.call(this);
	this.bitmapData = bitmapData;
	this.pixelSnapping = pixelSnapping;
	this.smoothing = smoothing;
	if(pixelSnapping == null) this.pixelSnapping = openfl.display.PixelSnapping.AUTO;
};
$hxClasses["openfl.display.Bitmap"] = openfl.display.Bitmap;
openfl.display.Bitmap.__name__ = ["openfl","display","Bitmap"];
openfl.display.Bitmap.__super__ = openfl.display.DisplayObjectContainer;
openfl.display.Bitmap.prototype = $extend(openfl.display.DisplayObjectContainer.prototype,{
	__getBounds: function(rect,matrix) {
		if(this.bitmapData != null) {
			var bounds = new openfl.geom.Rectangle(0,0,this.bitmapData.width,this.bitmapData.height);
			bounds = bounds.transform(this.__worldTransform);
			rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
		}
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || this.bitmapData == null) return false;
		var point = this.globalToLocal(new openfl.geom.Point(x,y));
		if(point.x > 0 && point.y > 0 && point.x <= this.bitmapData.width && point.y <= this.bitmapData.height) {
			if(stack != null) stack.push(this);
			return true;
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		var context = renderSession.context;
		if(this.bitmapData != null && this.bitmapData.__valid) {
			if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
			this.bitmapData.__syncImageData();
			context.globalAlpha = this.__worldAlpha;
			var transform = this.__worldTransform;
			if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
			if(!this.smoothing) {
				context.mozImageSmoothingEnabled = false;
				context.webkitImageSmoothingEnabled = false;
				context.imageSmoothingEnabled = false;
			}
			if(this.get_scrollRect() == null) {
				if(this.bitmapData.__sourceImage != null) context.drawImage(this.bitmapData.__sourceImage,0,0); else context.drawImage(this.bitmapData.__sourceCanvas,0,0);
			} else if(this.bitmapData.__sourceImage != null) context.drawImage(this.bitmapData.__sourceImage,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height); else context.drawImage(this.bitmapData.__sourceCanvas,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height);
			if(!this.smoothing) {
				context.mozImageSmoothingEnabled = true;
				context.webkitImageSmoothingEnabled = true;
				context.imageSmoothingEnabled = true;
			}
			if(this.__mask != null) renderSession.maskManager.popMask();
		}
	}
	,__renderDOM: function(renderSession) {
		if(this.stage != null && this.__worldVisible && this.__renderable && this.bitmapData != null && this.bitmapData.__valid) {
			if(this.bitmapData.__sourceImage != null) this.__renderDOMImage(renderSession); else this.__renderDOMCanvas(renderSession);
		} else {
			if(this.__image != null) {
				renderSession.element.removeChild(this.__image);
				this.__image = null;
				this.__style = null;
			}
			if(this.__canvas != null) {
				renderSession.element.removeChild(this.__canvas);
				this.__canvas = null;
				this.__style = null;
			}
		}
	}
	,__renderDOMCanvas: function(renderSession) {
		if(this.__image != null) {
			renderSession.element.removeChild(this.__image);
			this.__image = null;
		}
		if(this.__canvas == null) {
			this.__canvas = window.document.createElement("canvas");
			this.__canvasContext = this.__canvas.getContext("2d");
			if(!this.smoothing) {
				this.__canvasContext.mozImageSmoothingEnabled = false;
				this.__canvasContext.webkitImageSmoothingEnabled = false;
				this.__canvasContext.imageSmoothingEnabled = false;
			}
			this.__initializeElement(this.__canvas,renderSession);
		}
		this.bitmapData.__syncImageData();
		this.__canvas.width = this.bitmapData.width;
		this.__canvas.height = this.bitmapData.height;
		this.__canvasContext.globalAlpha = this.__worldAlpha;
		this.__canvasContext.drawImage(this.bitmapData.__sourceCanvas,0,0);
		this.__applyStyle(renderSession,true,false,true);
	}
	,__renderDOMImage: function(renderSession) {
		if(this.__canvas != null) {
			renderSession.element.removeChild(this.__canvas);
			this.__canvas = null;
		}
		if(this.__image == null) {
			this.__image = window.document.createElement("img");
			this.__image.src = this.bitmapData.__sourceImage.src;
			this.__initializeElement(this.__image,renderSession);
		}
		this.__applyStyle(renderSession,true,true,true);
	}
	,__renderMask: function(renderSession) {
		renderSession.context.rect(0,0,this.get_width(),this.get_height());
	}
	,get_height: function() {
		if(this.bitmapData != null) return this.bitmapData.height * this.get_scaleY();
		return 0;
	}
	,set_height: function(value) {
		if(this.bitmapData != null) {
			if(value != this.bitmapData.height) {
				if(!this.__transformDirty) {
					this.__transformDirty = true;
					openfl.display.DisplayObject.__worldTransformDirty++;
				}
				this.set_scaleY(value / this.bitmapData.height);
			}
			return value;
		}
		return 0;
	}
	,get_width: function() {
		if(this.bitmapData != null) return this.bitmapData.width * this.get_scaleX();
		return 0;
	}
	,set_width: function(value) {
		if(this.bitmapData != null) {
			if(value != this.bitmapData.width) {
				if(!this.__transformDirty) {
					this.__transformDirty = true;
					openfl.display.DisplayObject.__worldTransformDirty++;
				}
				this.set_scaleX(value / this.bitmapData.width);
			}
			return value;
		}
		return 0;
	}
	,__class__: openfl.display.Bitmap
});
openfl.display.BitmapData = function(width,height,transparent,fillColor) {
	if(fillColor == null) fillColor = -1;
	if(transparent == null) transparent = true;
	this.transparent = transparent;
	if(width > 0 && height > 0) {
		this.width = width;
		this.height = height;
		this.rect = new openfl.geom.Rectangle(0,0,width,height);
		this.__createCanvas(width,height);
		if(!transparent) fillColor = -16777216 | fillColor & 16777215;
		this.__fillRect(new openfl.geom.Rectangle(0,0,width,height),fillColor);
	}
};
$hxClasses["openfl.display.BitmapData"] = openfl.display.BitmapData;
openfl.display.BitmapData.__name__ = ["openfl","display","BitmapData"];
openfl.display.BitmapData.__interfaces__ = [openfl.display.IBitmapDrawable];
openfl.display.BitmapData.__base64Encoder = null;
openfl.display.BitmapData.fromBase64 = function(base64,type,onload) {
	var bitmapData = new openfl.display.BitmapData(0,0,true);
	bitmapData.__loadFromBase64(base64,type,onload);
	return bitmapData;
};
openfl.display.BitmapData.fromBytes = function(bytes,rawAlpha,onload) {
	var bitmapData = new openfl.display.BitmapData(0,0,true);
	bitmapData.__loadFromBytes(bytes,rawAlpha,onload);
	return bitmapData;
};
openfl.display.BitmapData.fromFile = function(path,onload,onfail) {
	var bitmapData = new openfl.display.BitmapData(0,0,true);
	bitmapData.__sourceImage = new Image();
	bitmapData.__sourceImage.onload = function(_) {
		bitmapData.width = bitmapData.__sourceImage.width;
		bitmapData.height = bitmapData.__sourceImage.height;
		bitmapData.rect = new openfl.geom.Rectangle(0,0,bitmapData.__sourceImage.width,bitmapData.__sourceImage.height);
		bitmapData.__valid = true;
		if(onload != null) onload(bitmapData);
	};
	bitmapData.__sourceImage.onerror = function(_1) {
		bitmapData.__valid = false;
		if(onfail != null) onfail();
	};
	bitmapData.__sourceImage.src = path;
	if(bitmapData.__sourceImage.complete) {
	}
	return bitmapData;
};
openfl.display.BitmapData.fromImage = function(image,transparent) {
	if(transparent == null) transparent = true;
	var bitmapData = new openfl.display.BitmapData(0,0,transparent);
	bitmapData.__sourceImage = image;
	bitmapData.width = image.width;
	bitmapData.height = image.height;
	bitmapData.rect = new openfl.geom.Rectangle(0,0,image.width,image.height);
	bitmapData.__valid = true;
	return bitmapData;
};
openfl.display.BitmapData.fromCanvas = function(canvas,transparent) {
	if(transparent == null) transparent = true;
	var bitmapData = new openfl.display.BitmapData(0,0,transparent);
	bitmapData.width = canvas.width;
	bitmapData.height = canvas.height;
	bitmapData.rect = new openfl.geom.Rectangle(0,0,canvas.width,canvas.height);
	bitmapData.__createCanvas(canvas.width,canvas.height);
	bitmapData.__sourceContext.drawImage(canvas,0,0);
	return bitmapData;
};
openfl.display.BitmapData.__base64Encode = function(bytes) {
	var extension;
	var _g = bytes.length % 3;
	switch(_g) {
	case 1:
		extension = "==";
		break;
	case 2:
		extension = "=";
		break;
	default:
		extension = "";
	}
	if(openfl.display.BitmapData.__base64Encoder == null) openfl.display.BitmapData.__base64Encoder = new haxe.crypto.BaseCode(haxe.io.Bytes.ofString(openfl.display.BitmapData.__base64Chars));
	return openfl.display.BitmapData.__base64Encoder.encodeBytes(haxe.io.Bytes.ofData(bytes.byteView)).toString() + extension;
};
openfl.display.BitmapData.__flipPixel = function(pixel) {
	return (pixel & 255) << 24 | (pixel >> 8 & 255) << 16 | (pixel >> 16 & 255) << 8 | pixel >> 24 & 255;
};
openfl.display.BitmapData.__isJPG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 255 && bytes.readByte() == 216;
};
openfl.display.BitmapData.__isPNG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 137 && bytes.readByte() == 80 && bytes.readByte() == 78 && bytes.readByte() == 71 && bytes.readByte() == 13 && bytes.readByte() == 10 && bytes.readByte() == 26 && bytes.readByte() == 10;
};
openfl.display.BitmapData.__isGIF = function(bytes) {
	bytes.position = 0;
	if(bytes.readByte() == 71 && bytes.readByte() == 73 && bytes.readByte() == 70 && bytes.readByte() == 38) {
		var b = bytes.readByte();
		return (b == 7 || b == 9) && bytes.readByte() == 97;
	}
	return false;
};
openfl.display.BitmapData.__ucompare = function(n1,n2) {
	var tmp1;
	var tmp2;
	tmp1 = n1 >> 24 & 255;
	tmp2 = n2 >> 24 & 255;
	if(tmp1 != tmp2) if(tmp1 > tmp2) return 1; else return -1; else {
		tmp1 = n1 >> 16 & 255;
		tmp2 = n2 >> 16 & 255;
		if(tmp1 != tmp2) if(tmp1 > tmp2) return 1; else return -1; else {
			tmp1 = n1 >> 8 & 255;
			tmp2 = n2 >> 8 & 255;
			if(tmp1 != tmp2) if(tmp1 > tmp2) return 1; else return -1; else {
				tmp1 = n1 & 255;
				tmp2 = n2 & 255;
				if(tmp1 != tmp2) if(tmp1 > tmp2) return 1; else return -1; else return 0;
			}
		}
	}
};
openfl.display.BitmapData.prototype = {
	applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
		if(!this.__valid || sourceBitmapData == null || !sourceBitmapData.__valid) return;
		this.__convertToCanvas();
		this.__createImageData();
		sourceBitmapData.__convertToCanvas();
		sourceBitmapData.__createImageData();
		filter.__applyFilter(this.__sourceImageData,sourceBitmapData.__sourceImageData,sourceRect,destPoint);
		this.__sourceImageDataChanged = true;
	}
	,clone: function() {
		this.__syncImageData();
		if(!this.__valid) return new openfl.display.BitmapData(this.width,this.height,this.transparent); else if(this.__sourceImage != null) return openfl.display.BitmapData.fromImage(this.__sourceImage,this.transparent); else return openfl.display.BitmapData.fromCanvas(this.__sourceCanvas,this.transparent);
	}
	,colorTransform: function(rect,colorTransform) {
		rect = this.__clipRect(rect);
		if(!this.__valid || rect == null) return;
		this.__convertToCanvas();
		this.__createImageData();
		var data = this.__sourceImageData.data;
		var stride = this.width * 4;
		var offset;
		var _g1 = rect.y | 0;
		var _g = rect.height | 0;
		while(_g1 < _g) {
			var row = _g1++;
			var _g3 = rect.x | 0;
			var _g2 = rect.width | 0;
			while(_g3 < _g2) {
				var column = _g3++;
				offset = row * stride + column * 4;
				data[offset] = data[offset] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
				data[offset + 1] = data[offset + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
				data[offset + 2] = data[offset + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
				data[offset + 3] = data[offset + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
			}
		}
		this.__sourceImageDataChanged = true;
	}
	,copyChannel: function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
		sourceRect = this.__clipRect(sourceRect);
		if(!this.__valid || sourceRect == null) return;
		if(destChannel == 8 && !this.transparent) return;
		if(sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.width) sourceRect.width = sourceBitmapData.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.height) sourceRect.height = sourceBitmapData.height - sourceRect.y;
		var destIdx = -1;
		if(destChannel == 8) destIdx = 3; else if(destChannel == 4) destIdx = 2; else if(destChannel == 2) destIdx = 1; else if(destChannel == 1) destIdx = 0; else throw "Invalid destination BitmapDataChannel passed to BitmapData::copyChannel.";
		var srcIdx = -1;
		if(sourceChannel == 8) srcIdx = 3; else if(sourceChannel == 4) srcIdx = 2; else if(sourceChannel == 2) srcIdx = 1; else if(sourceChannel == 1) srcIdx = 0; else throw "Invalid source BitmapDataChannel passed to BitmapData::copyChannel.";
		sourceBitmapData.__convertToCanvas();
		sourceBitmapData.__createImageData();
		var srcData = sourceBitmapData.__sourceImageData.data;
		var srcStride = sourceBitmapData.width * 4 | 0;
		var srcPosition = sourceRect.x * 4 + srcStride * sourceRect.y + srcIdx | 0;
		var srcRowOffset = srcStride - (4 * sourceRect.width | 0);
		var srcRowEnd = 4 * (sourceRect.x + sourceRect.width) | 0;
		this.__convertToCanvas();
		this.__createImageData();
		var destData = this.__sourceImageData.data;
		var destStride = this.width * 4 | 0;
		var destPosition = destPoint.x * 4 + destStride * destPoint.y + destIdx | 0;
		var destRowOffset = destStride - (4 * sourceRect.width | 0);
		var destRowEnd = 4 * (destPoint.x + sourceRect.width) | 0;
		var length = sourceRect.width * sourceRect.height | 0;
		var _g = 0;
		while(_g < length) {
			var i = _g++;
			destData[destPosition] = srcData[srcPosition];
			srcPosition += 4;
			destPosition += 4;
			if(srcPosition % srcStride > srcRowEnd) srcPosition += srcRowOffset;
			if(destPosition % destStride > destRowEnd) destPosition += destRowOffset;
		}
		this.__sourceImageDataChanged = true;
	}
	,copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(!this.__valid || sourceBitmapData == null) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.width) sourceRect.width = sourceBitmapData.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.height) sourceRect.height = sourceBitmapData.height - sourceRect.y;
		if(sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(alphaBitmapData != null && alphaBitmapData.transparent) {
			if(alphaPoint == null) alphaPoint = new openfl.geom.Point();
			var tempData = this.clone();
			tempData.copyChannel(alphaBitmapData,new openfl.geom.Rectangle(alphaPoint.x,alphaPoint.y,sourceRect.width,sourceRect.height),new openfl.geom.Point(sourceRect.x,sourceRect.y),8,8);
			sourceBitmapData = tempData;
		}
		this.__syncImageData();
		if(!mergeAlpha) {
			if(this.transparent && sourceBitmapData.transparent) this.__sourceContext.clearRect(destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
		}
		sourceBitmapData.__syncImageData();
		if(sourceBitmapData.__sourceImage != null) this.__sourceContext.drawImage(sourceBitmapData.__sourceImage,sourceRect.x | 0,sourceRect.y | 0,sourceRect.width | 0,sourceRect.height | 0,destPoint.x | 0,destPoint.y | 0,sourceRect.width | 0,sourceRect.height | 0); else if(sourceBitmapData.__sourceCanvas != null) this.__sourceContext.drawImage(sourceBitmapData.__sourceCanvas,sourceRect.x | 0,sourceRect.y | 0,sourceRect.width | 0,sourceRect.height | 0,destPoint.x | 0,destPoint.y | 0,sourceRect.width | 0,sourceRect.height | 0);
	}
	,dispose: function() {
		this.__sourceImage = null;
		this.__sourceCanvas = null;
		this.__sourceContext = null;
		this.width = 0;
		this.height = 0;
		this.rect = null;
		this.__valid = false;
	}
	,draw: function(source,matrix,colorTransform,blendMode,clipRect,smoothing) {
		if(smoothing == null) smoothing = false;
		if(!this.__valid) return;
		this.__convertToCanvas();
		this.__syncImageData();
		var renderSession = new openfl.display.RenderSession();
		renderSession.context = this.__sourceContext;
		renderSession.roundPixels = true;
		if(!smoothing) {
			this.__sourceContext.mozImageSmoothingEnabled = false;
			this.__sourceContext.webkitImageSmoothingEnabled = false;
			this.__sourceContext.imageSmoothingEnabled = false;
		}
		var matrixCache = source.__worldTransform;
		if(matrix != null) source.__worldTransform = matrix; else source.__worldTransform = new openfl.geom.Matrix();
		source.__updateChildren(false);
		source.__renderCanvas(renderSession);
		source.__worldTransform = matrixCache;
		source.__updateChildren(true);
		if(!smoothing) {
			this.__sourceContext.mozImageSmoothingEnabled = true;
			this.__sourceContext.webkitImageSmoothingEnabled = true;
			this.__sourceContext.imageSmoothingEnabled = true;
		}
		this.__sourceContext.setTransform(1,0,0,1,0,0);
	}
	,encode: function(rect,compressor,byteArray) {
		openfl.Lib.notImplemented("BitmapData.encode");
		return null;
	}
	,fillRect: function(rect,color) {
		rect = this.__clipRect(rect);
		if(!this.__valid || rect == null) return;
		this.__convertToCanvas();
		this.__syncImageData();
		if(rect.x == 0 && rect.y == 0 && rect.width == this.width && rect.height == this.height) {
			if(this.transparent && (color & -16777216) == 0) {
				this.__sourceCanvas.width = this.width;
				return;
			}
		}
		this.__fillRect(rect,color);
	}
	,floodFill: function(x,y,color) {
		if(!this.__valid) return;
		this.__convertToCanvas();
		this.__createImageData();
		var data = this.__sourceImageData.data;
		var offset = y * (this.width * 4) + x * 4;
		var hitColorR = data[offset];
		var hitColorG = data[offset + 1];
		var hitColorB = data[offset + 2];
		var hitColorA;
		if(this.transparent) hitColorA = data[offset + 3]; else hitColorA = 255;
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		var a;
		if(this.transparent) a = (color & -16777216) >>> 24; else a = 255;
		if(hitColorR == r && hitColorG == g && hitColorB == b && hitColorA == a) return;
		var dx = [0,-1,1,0];
		var dy = [-1,0,0,1];
		var queue = new Array();
		queue.push(x);
		queue.push(y);
		while(queue.length > 0) {
			var curPointY = queue.pop();
			var curPointX = queue.pop();
			var _g = 0;
			while(_g < 4) {
				var i = _g++;
				var nextPointX = curPointX + dx[i];
				var nextPointY = curPointY + dy[i];
				if(nextPointX < 0 || nextPointY < 0 || nextPointX >= this.width || nextPointY >= this.height) continue;
				var nextPointOffset = (nextPointY * this.width + nextPointX) * 4;
				if(data[nextPointOffset] == hitColorR && data[nextPointOffset + 1] == hitColorG && data[nextPointOffset + 2] == hitColorB && data[nextPointOffset + 3] == hitColorA) {
					data[nextPointOffset] = r;
					data[nextPointOffset + 1] = g;
					data[nextPointOffset + 2] = b;
					data[nextPointOffset + 3] = a;
					queue.push(nextPointX);
					queue.push(nextPointY);
				}
			}
		}
		this.__sourceImageDataChanged = true;
	}
	,generateFilterRect: function(sourceRect,filter) {
		return sourceRect.clone();
	}
	,getColorBoundsRect: function(mask,color,findColor) {
		if(findColor == null) findColor = true;
		return this.rect.clone();
	}
	,getPixel: function(x,y) {
		if(!this.__valid || x < 0 || y < 0 || x >= this.width || y >= this.height) return 0;
		this.__convertToCanvas();
		this.__createImageData();
		var offset = 4 * y * this.width + x * 4;
		return this.__sourceImageData.data[offset] << 16 | this.__sourceImageData.data[offset + 1] << 8 | this.__sourceImageData.data[offset + 2];
	}
	,getPixel32: function(x,y) {
		if(!this.__valid || x < 0 || y < 0 || x >= this.width || y >= this.height) return 0;
		this.__convertToCanvas();
		this.__createImageData();
		return this.__getInt32(4 * y * this.width + x * 4,this.__sourceImageData.data);
	}
	,getPixels: function(rect) {
		if(!this.__valid) return null;
		this.__convertToCanvas();
		this.__createImageData();
		var byteArray = new openfl.utils.ByteArray();
		if(rect == null || rect.equals(this.rect)) {
			byteArray.set_length(this.__sourceImageData.data.length);
			byteArray.byteView.set(this.__sourceImageData.data);
		} else {
			var srcData = this.__sourceImageData.data;
			var srcStride = this.width * 4 | 0;
			var srcPosition = rect.x * 4 + srcStride * rect.y | 0;
			var srcRowOffset = srcStride - (4 * rect.width | 0);
			var srcRowEnd = 4 * (rect.x + rect.width) | 0;
			var length = 4 * rect.width * rect.height | 0;
			if(byteArray.allocated < length) byteArray.___resizeBuffer(byteArray.allocated = Std["int"](Math.max(length,byteArray.allocated * 2))); else if(byteArray.allocated > length) byteArray.___resizeBuffer(byteArray.allocated = length);
			byteArray.length = length;
			length;
			var _g = 0;
			while(_g < length) {
				var i = _g++;
				byteArray.__set(i,srcData[srcPosition++]);
				if(srcPosition % srcStride > srcRowEnd) srcPosition += srcRowOffset;
			}
		}
		byteArray.position = 0;
		return byteArray;
	}
	,getVector: function(rect) {
		var pixels = this.getPixels(rect);
		var result = openfl._Vector.Vector_Impl_._new();
		var _g1 = 0;
		var _g = pixels.length / 4 | 0;
		while(_g1 < _g) {
			var i = _g1++;
			var x = pixels.readUnsignedInt();
			if(!result.fixed) {
				result.length++;
				if(result.data.length < result.length) {
					var data;
					var this1;
					this1 = new Array(result.data.length + 10);
					data = this1;
					haxe.ds._Vector.Vector_Impl_.blit(result.data,0,data,0,result.data.length);
					result.data = data;
				}
				result.data[result.length - 1] = x;
			}
			result.length;
		}
		return result;
	}
	,histogram: function(hRect) {
		var rect;
		if(hRect != null) rect = hRect; else rect = new openfl.geom.Rectangle(0,0,this.width,this.height);
		var pixels = this.getPixels(rect);
		var result;
		var _g = [];
		var _g1 = 0;
		while(_g1 < 4) {
			var i = _g1++;
			_g.push((function($this) {
				var $r;
				var _g2 = [];
				{
					var _g3 = 0;
					while(_g3 < 256) {
						var j = _g3++;
						_g2.push(0);
					}
				}
				$r = _g2;
				return $r;
			}(this)));
		}
		result = _g;
		var _g21 = 0;
		var _g11 = pixels.length;
		while(_g21 < _g11) {
			var i1 = _g21++;
			++result[i1 % 4][pixels.readUnsignedByte()];
		}
		return result;
	}
	,hitTest: function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
		if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
		if(!this.__valid) return false;
		openfl.Lib.notImplemented("BitmapData.hitTest");
		return false;
	}
	,lock: function() {
	}
	,noise: function(randomSeed,low,high,channelOptions,grayScale) {
		if(grayScale == null) grayScale = false;
		if(channelOptions == null) channelOptions = 7;
		if(high == null) high = 255;
		if(low == null) low = 0;
		if(!this.__valid) return;
		openfl.Lib.notImplemented("BitmapData.noise");
	}
	,paletteMap: function(sourceBitmapData,sourceRect,destPoint,redArray,greenArray,blueArray,alphaArray) {
		var memory = new openfl.utils.ByteArray();
		var sw = sourceRect.width | 0;
		var sh = sourceRect.height | 0;
		memory.set_length(sw * sh * 4);
		memory = this.getPixels(sourceRect);
		memory.position = 0;
		openfl.Memory.select(memory);
		var position;
		var pixelValue;
		var r;
		var g;
		var b;
		var color;
		var _g1 = 0;
		var _g = sh * sw;
		while(_g1 < _g) {
			var i = _g1++;
			position = i * 4;
			pixelValue = openfl.Memory._setPositionTemporarily(position,function() {
				return openfl.Memory.gcRef.readInt();
			});
			r = pixelValue >> 8 & 255;
			g = pixelValue >> 16 & 255;
			b = pixelValue >> 24 & 255;
			color = openfl.display.BitmapData.__flipPixel(-16777216 | redArray[r] | greenArray[g] | blueArray[b]);
			openfl.Memory.setI32(position,color);
		}
		memory.position = 0;
		var destRect = new openfl.geom.Rectangle(destPoint.x,destPoint.y,sw,sh);
		this.setPixels(destRect,memory);
		openfl.Memory.select(null);
	}
	,perlinNoise: function(baseX,baseY,numOctaves,randomSeed,stitch,fractalNoise,channelOptions,grayScale,offsets) {
		if(grayScale == null) grayScale = false;
		if(channelOptions == null) channelOptions = 7;
		openfl.Lib.notImplemented("BitmapData.perlinNoise");
	}
	,scroll: function(x,y) {
		openfl.Lib.notImplemented("BitmapData.scroll");
	}
	,setVector: function(rect,inputVector) {
		var byteArray = new openfl.utils.ByteArray();
		byteArray.set_length(inputVector.length * 4);
		var _g = 0;
		while(_g < inputVector.length) {
			var color = inputVector.data[_g];
			++_g;
			byteArray.writeUnsignedInt(color);
		}
		byteArray.position = 0;
		this.setPixels(rect,byteArray);
	}
	,setPixel: function(x,y,color) {
		if(!this.__valid || x < 0 || y < 0 || x >= this.width || y >= this.height) return;
		this.__convertToCanvas();
		this.__createImageData();
		var offset = 4 * y * this.width + x * 4;
		this.__sourceImageData.data[offset] = (color & 16711680) >>> 16;
		this.__sourceImageData.data[offset + 1] = (color & 65280) >>> 8;
		this.__sourceImageData.data[offset + 2] = color & 255;
		if(this.transparent) this.__sourceImageData.data[offset + 3] = 255;
		this.__sourceImageDataChanged = true;
	}
	,setPixel32: function(x,y,color) {
		if(!this.__valid || x < 0 || y < 0 || x >= this.width || y >= this.height) return;
		this.__convertToCanvas();
		this.__createImageData();
		var offset = 4 * y * this.width + x * 4;
		this.__sourceImageData.data[offset] = (color & 16711680) >>> 16;
		this.__sourceImageData.data[offset + 1] = (color & 65280) >>> 8;
		this.__sourceImageData.data[offset + 2] = color & 255;
		if(this.transparent) this.__sourceImageData.data[offset + 3] = (color & -16777216) >>> 24; else this.__sourceImageData.data[offset + 3] = 255;
		this.__sourceImageDataChanged = true;
	}
	,setPixels: function(rect,byteArray) {
		rect = this.__clipRect(rect);
		if(!this.__valid || rect == null) return;
		this.__convertToCanvas();
		var len = Math.round(4 * rect.width * rect.height);
		if(rect.x == 0 && rect.y == 0 && rect.width == this.width && rect.height == this.height) {
			if(this.__sourceImageData == null) this.__sourceImageData = this.__sourceContext.createImageData(this.width,this.height);
			this.__sourceImageData.data.set(byteArray.byteView);
		} else {
			this.__createImageData();
			var offset = Math.round(4 * this.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var data = this.__sourceImageData.data;
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.width * 4) > boundR - 1) pos += this.width * 4 - boundR;
				data[pos] = byteArray.readByte();
				pos++;
			}
		}
		this.__sourceImageDataChanged = true;
	}
	,threshold: function(sourceBitmapData,sourceRect,destPoint,operation,threshold,color,mask,copySource) {
		if(copySource == null) copySource = false;
		if(mask == null) mask = -1;
		if(color == null) color = 0;
		if(sourceBitmapData == this && sourceRect.equals(this.rect) && destPoint.x == 0 && destPoint.y == 0) {
			var hits = 0;
			threshold = (threshold & 255) << 24 | (threshold >> 8 & 255) << 16 | (threshold >> 16 & 255) << 8 | threshold >> 24 & 255;
			color = (color & 255) << 24 | (color >> 8 & 255) << 16 | (color >> 16 & 255) << 8 | color >> 24 & 255;
			var memory = new openfl.utils.ByteArray();
			memory.set_length(this.width * this.height * 4);
			memory = this.getPixels(this.rect);
			memory.position = 0;
			openfl.Memory.select(memory);
			var thresholdMask = threshold & mask;
			var width_yy;
			var position;
			var pixelMask;
			var pixelValue;
			var i;
			var test;
			var _g1 = 0;
			var _g = this.height;
			while(_g1 < _g) {
				var yy = _g1++;
				width_yy = this.width * yy;
				var _g3 = 0;
				var _g2 = this.width;
				while(_g3 < _g2) {
					var xx = _g3++;
					position = (width_yy + xx) * 4;
					pixelValue = openfl.Memory._setPositionTemporarily(position,function() {
						return openfl.Memory.gcRef.readInt();
					});
					pixelMask = pixelValue & mask;
					i = openfl.display.BitmapData.__ucompare(pixelMask,thresholdMask);
					test = false;
					if(operation == "==") test = i == 0; else if(operation == "<") test = i == -1; else if(operation == ">") test = i == 1; else if(operation == "!=") test = i != 0; else if(operation == "<=") test = i == 0 || i == -1; else if(operation == ">=") test = i == 0 || i == 1;
					if(test) {
						openfl.Memory.setI32(position,color);
						hits++;
					}
				}
			}
			memory.position = 0;
			this.setPixels(this.rect,memory);
			openfl.Memory.select(null);
			return hits;
		} else {
			var sx = sourceRect.x | 0;
			var sy = sourceRect.y | 0;
			var sw = sourceBitmapData.width | 0;
			var sh = sourceBitmapData.height | 0;
			var dx = destPoint.x | 0;
			var dy = destPoint.y | 0;
			var bw = this.width - sw - dx;
			var bh = this.height - sh - dy;
			var dw;
			if(bw < 0) dw = sw + (this.width - sw - dx); else dw = sw;
			var dh;
			if(bw < 0) dh = sh + (this.height - sh - dy); else dh = sh;
			var hits1 = 0;
			threshold = (threshold & 255) << 24 | (threshold >> 8 & 255) << 16 | (threshold >> 16 & 255) << 8 | threshold >> 24 & 255;
			color = (color & 255) << 24 | (color >> 8 & 255) << 16 | (color >> 16 & 255) << 8 | color >> 24 & 255;
			var canvasMemory = sw * sh * 4;
			var sourceMemory = 0;
			if(copySource) sourceMemory = sw * sh * 4;
			var totalMemory = canvasMemory + sourceMemory;
			var memory1 = new openfl.utils.ByteArray();
			if(memory1.allocated < totalMemory) memory1.___resizeBuffer(memory1.allocated = Std["int"](Math.max(totalMemory,memory1.allocated * 2))); else if(memory1.allocated > totalMemory) memory1.___resizeBuffer(memory1.allocated = totalMemory);
			memory1.length = totalMemory;
			totalMemory;
			memory1.position = 0;
			var bitmapData = sourceBitmapData.clone();
			var pixels = bitmapData.getPixels(sourceRect);
			memory1.writeBytes(pixels);
			memory1.position = canvasMemory;
			if(copySource) memory1.writeBytes(pixels);
			memory1.position = 0;
			openfl.Memory.select(memory1);
			var thresholdMask1 = threshold & mask;
			var position1;
			var pixelMask1;
			var pixelValue1;
			var i1;
			var test1;
			var _g4 = 0;
			while(_g4 < dh) {
				var yy1 = _g4++;
				var _g11 = 0;
				while(_g11 < dw) {
					var xx1 = _g11++;
					position1 = (xx1 + sx + (yy1 + sy) * sw) * 4;
					pixelValue1 = openfl.Memory._setPositionTemporarily(position1,function() {
						return openfl.Memory.gcRef.readInt();
					});
					pixelMask1 = pixelValue1 & mask;
					i1 = openfl.display.BitmapData.__ucompare(pixelMask1,thresholdMask1);
					test1 = false;
					if(operation == "==") test1 = i1 == 0; else if(operation == "<") test1 = i1 == -1; else if(operation == ">") test1 = i1 == 1; else if(operation == "!=") test1 = i1 != 0; else if(operation == "<=") test1 = i1 == 0 || i1 == -1; else if(operation == ">=") test1 = i1 == 0 || i1 == 1;
					if(test1) {
						openfl.Memory.setI32(position1,color);
						hits1++;
					} else if(copySource) openfl.Memory.setI32(position1,openfl.Memory._setPositionTemporarily(canvasMemory + position1,function() {
						return openfl.Memory.gcRef.readInt();
					}));
				}
			}
			memory1.position = 0;
			bitmapData.setPixels(sourceRect,memory1);
			this.copyPixels(bitmapData,bitmapData.rect,destPoint);
			openfl.Memory.select(null);
			return hits1;
		}
	}
	,unlock: function(changeRect) {
	}
	,__clipRect: function(r) {
		if(r == null) return null;
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= this.width) {
			r.width -= r.x + r.width - this.width;
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= this.height) {
			r.height -= r.y + r.height - this.height;
			if(r.height <= 0) return null;
		}
		return r;
	}
	,__convertToCanvas: function() {
		if(this.__loading) return;
		if(this.__sourceImage != null) {
			if(this.__sourceCanvas == null) {
				this.__createCanvas(this.__sourceImage.width,this.__sourceImage.height);
				this.__sourceContext.drawImage(this.__sourceImage,0,0);
			}
			this.__sourceImage = null;
		}
	}
	,__createCanvas: function(width,height) {
		if(this.__sourceCanvas == null) {
			this.__sourceCanvas = window.document.createElement("canvas");
			this.__sourceCanvas.width = width;
			this.__sourceCanvas.height = height;
			if(!this.transparent) {
				if(!this.transparent) this.__sourceCanvas.setAttribute("moz-opaque","true");
				this.__sourceContext = this.__sourceCanvas.getContext ("2d", { alpha: false });
			} else this.__sourceContext = this.__sourceCanvas.getContext("2d");
			this.__sourceContext.mozImageSmoothingEnabled = false;
			this.__sourceContext.webkitImageSmoothingEnabled = false;
			this.__sourceContext.imageSmoothingEnabled = false;
			this.__valid = true;
		}
	}
	,__createImageData: function() {
		if(this.__sourceImageData == null) this.__sourceImageData = this.__sourceContext.getImageData(0,0,this.width,this.height);
	}
	,__fillRect: function(rect,color) {
		var a;
		if(this.transparent) a = (color & -16777216) >>> 24; else a = 255;
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		this.__sourceContext.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
		this.__sourceContext.fillRect(rect.x,rect.y,rect.width,rect.height);
	}
	,__getInt32: function(offset,data) {
		return (this.transparent?data[offset + 3]:255) << 24 | data[offset] << 16 | data[offset + 1] << 8 | data[offset + 2];
	}
	,__loadFromBase64: function(base64,type,onload) {
		var _g = this;
		this.__sourceImage = window.document.createElement("img");
		var image_onLoaded = function(event) {
			if(_g.__sourceImage == null) _g.__sourceImage = event.target;
			_g.width = _g.__sourceImage.width;
			_g.height = _g.__sourceImage.height;
			_g.rect = new openfl.geom.Rectangle(0,0,_g.width,_g.height);
			_g.__valid = true;
			if(onload != null) onload(_g);
		};
		this.__sourceImage.addEventListener("load",image_onLoaded,false);
		this.__sourceImage.src = "data:" + type + ";base64," + base64;
	}
	,__loadFromBytes: function(bytes,rawAlpha,onload) {
		var _g = this;
		var type = "";
		if(openfl.display.BitmapData.__isPNG(bytes)) type = "image/png"; else if(openfl.display.BitmapData.__isJPG(bytes)) type = "image/jpeg"; else if(openfl.display.BitmapData.__isGIF(bytes)) type = "image/gif"; else throw new openfl.errors.IOError("BitmapData tried to read a PNG/JPG ByteArray, but found an invalid header.");
		if(rawAlpha != null) this.__loadFromBase64(openfl.display.BitmapData.__base64Encode(bytes),type,function(_) {
			_g.__convertToCanvas();
			_g.__createImageData();
			var data = _g.__sourceImageData.data;
			var _g2 = 0;
			var _g1 = rawAlpha.length;
			while(_g2 < _g1) {
				var i = _g2++;
				data[i * 4 + 3] = rawAlpha.readUnsignedByte();
			}
			_g.__sourceImageDataChanged = true;
			if(onload != null) onload(_g);
		}); else this.__loadFromBase64(openfl.display.BitmapData.__base64Encode(bytes),type,onload);
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__valid) return;
		this.__syncImageData();
		var context = renderSession.context;
		if(this.__worldTransform == null) this.__worldTransform = new openfl.geom.Matrix();
		context.globalAlpha = 1;
		var transform = this.__worldTransform;
		if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		if(this.__sourceImage != null) context.drawImage(this.__sourceImage,0,0); else context.drawImage(this.__sourceCanvas,0,0);
	}
	,__renderMask: function(renderSession) {
	}
	,__syncImageData: function() {
		if(this.__sourceImageDataChanged) {
			this.__sourceContext.putImageData(this.__sourceImageData,0,0);
			this.__sourceImageData = null;
			this.__sourceImageDataChanged = false;
		}
	}
	,__updateChildren: function(transformOnly) {
	}
	,__class__: openfl.display.BitmapData
};
openfl.display.BitmapDataChannel = function() { };
$hxClasses["openfl.display.BitmapDataChannel"] = openfl.display.BitmapDataChannel;
openfl.display.BitmapDataChannel.__name__ = ["openfl","display","BitmapDataChannel"];
openfl.display.BlendMode = $hxClasses["openfl.display.BlendMode"] = { __ename__ : ["openfl","display","BlendMode"], __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] };
openfl.display.BlendMode.ADD = ["ADD",0];
openfl.display.BlendMode.ADD.toString = $estr;
openfl.display.BlendMode.ADD.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.ALPHA = ["ALPHA",1];
openfl.display.BlendMode.ALPHA.toString = $estr;
openfl.display.BlendMode.ALPHA.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.DARKEN = ["DARKEN",2];
openfl.display.BlendMode.DARKEN.toString = $estr;
openfl.display.BlendMode.DARKEN.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
openfl.display.BlendMode.DIFFERENCE.toString = $estr;
openfl.display.BlendMode.DIFFERENCE.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.ERASE = ["ERASE",4];
openfl.display.BlendMode.ERASE.toString = $estr;
openfl.display.BlendMode.ERASE.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
openfl.display.BlendMode.HARDLIGHT.toString = $estr;
openfl.display.BlendMode.HARDLIGHT.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.INVERT = ["INVERT",6];
openfl.display.BlendMode.INVERT.toString = $estr;
openfl.display.BlendMode.INVERT.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.LAYER = ["LAYER",7];
openfl.display.BlendMode.LAYER.toString = $estr;
openfl.display.BlendMode.LAYER.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
openfl.display.BlendMode.LIGHTEN.toString = $estr;
openfl.display.BlendMode.LIGHTEN.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
openfl.display.BlendMode.MULTIPLY.toString = $estr;
openfl.display.BlendMode.MULTIPLY.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.NORMAL = ["NORMAL",10];
openfl.display.BlendMode.NORMAL.toString = $estr;
openfl.display.BlendMode.NORMAL.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.OVERLAY = ["OVERLAY",11];
openfl.display.BlendMode.OVERLAY.toString = $estr;
openfl.display.BlendMode.OVERLAY.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.SCREEN = ["SCREEN",12];
openfl.display.BlendMode.SCREEN.toString = $estr;
openfl.display.BlendMode.SCREEN.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
openfl.display.BlendMode.SUBTRACT.toString = $estr;
openfl.display.BlendMode.SUBTRACT.__enum__ = openfl.display.BlendMode;
openfl.display._CapsStyle = {};
openfl.display._CapsStyle.CapsStyle_Impl_ = function() { };
$hxClasses["openfl.display._CapsStyle.CapsStyle_Impl_"] = openfl.display._CapsStyle.CapsStyle_Impl_;
openfl.display._CapsStyle.CapsStyle_Impl_.__name__ = ["openfl","display","_CapsStyle","CapsStyle_Impl_"];
openfl.display.FrameLabel = function(name,frame) {
	openfl.events.EventDispatcher.call(this);
	this.__name = name;
	this.__frame = frame;
};
$hxClasses["openfl.display.FrameLabel"] = openfl.display.FrameLabel;
openfl.display.FrameLabel.__name__ = ["openfl","display","FrameLabel"];
openfl.display.FrameLabel.__super__ = openfl.events.EventDispatcher;
openfl.display.FrameLabel.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	get_frame: function() {
		return this.__frame;
	}
	,get_name: function() {
		return this.__name;
	}
	,__class__: openfl.display.FrameLabel
});
openfl.display.GradientType = $hxClasses["openfl.display.GradientType"] = { __ename__ : ["openfl","display","GradientType"], __constructs__ : ["RADIAL","LINEAR"] };
openfl.display.GradientType.RADIAL = ["RADIAL",0];
openfl.display.GradientType.RADIAL.toString = $estr;
openfl.display.GradientType.RADIAL.__enum__ = openfl.display.GradientType;
openfl.display.GradientType.LINEAR = ["LINEAR",1];
openfl.display.GradientType.LINEAR.toString = $estr;
openfl.display.GradientType.LINEAR.__enum__ = openfl.display.GradientType;
openfl.display.Graphics = function() {
	this.__commands = new Array();
	this.__halfStrokeWidth = 0;
	this.__positionX = 0;
	this.__positionY = 0;
};
$hxClasses["openfl.display.Graphics"] = openfl.display.Graphics;
openfl.display.Graphics.__name__ = ["openfl","display","Graphics"];
openfl.display.Graphics.prototype = {
	beginBitmapFill: function(bitmap,matrix,repeat,smooth) {
		if(smooth == null) smooth = false;
		if(repeat == null) repeat = true;
		this.__commands.push(openfl.display.DrawCommand.BeginBitmapFill(bitmap,matrix,repeat,smooth));
		this.__visible = true;
	}
	,beginFill: function(rgb,alpha) {
		if(alpha == null) alpha = 1;
		this.__commands.push(openfl.display.DrawCommand.BeginFill(rgb & 16777215,alpha));
		if(alpha > 0) this.__visible = true;
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		openfl.Lib.notImplemented("Graphics.beginGradientFill");
	}
	,clear: function() {
		this.__commands = new Array();
		this.__halfStrokeWidth = 0;
		if(this.__bounds != null) {
			this.__dirty = true;
			this.__bounds = null;
		}
		this.__visible = false;
	}
	,curveTo: function(cx,cy,x,y) {
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__inflateBounds(cx,cy);
		this.__positionX = x;
		this.__positionY = y;
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__commands.push(openfl.display.DrawCommand.CurveTo(cx,cy,x,y));
		this.__dirty = true;
	}
	,drawCircle: function(x,y,radius) {
		if(radius <= 0) return;
		this.__inflateBounds(x - radius - this.__halfStrokeWidth,y - radius - this.__halfStrokeWidth);
		this.__inflateBounds(x + radius + this.__halfStrokeWidth,y + radius + this.__halfStrokeWidth);
		this.__commands.push(openfl.display.DrawCommand.DrawCircle(x,y,radius));
		this.__dirty = true;
	}
	,drawEllipse: function(x,y,width,height) {
		if(width <= 0 || height <= 0) return;
		this.__inflateBounds(x - this.__halfStrokeWidth,y - this.__halfStrokeWidth);
		this.__inflateBounds(x + width + this.__halfStrokeWidth,y + height + this.__halfStrokeWidth);
		this.__commands.push(openfl.display.DrawCommand.DrawEllipse(x,y,width,height));
		this.__dirty = true;
	}
	,drawGraphicsData: function(graphicsData) {
		openfl.Lib.notImplemented("Graphics.drawGraphicsData");
	}
	,drawPath: function(commands,data,winding) {
		openfl.Lib.notImplemented("Graphics.drawPath");
	}
	,drawRect: function(x,y,width,height) {
		if(width <= 0 || height <= 0) return;
		this.__inflateBounds(x - this.__halfStrokeWidth,y - this.__halfStrokeWidth);
		this.__inflateBounds(x + width + this.__halfStrokeWidth,y + height + this.__halfStrokeWidth);
		this.__commands.push(openfl.display.DrawCommand.DrawRect(x,y,width,height));
		this.__dirty = true;
	}
	,drawRoundRect: function(x,y,width,height,rx,ry) {
		if(ry == null) ry = -1;
		openfl.Lib.notImplemented("Graphics.drawRoundRect");
	}
	,drawRoundRectComplex: function(x,y,width,height,topLeftRadius,topRightRadius,bottomLeftRadius,bottomRightRadius) {
		openfl.Lib.notImplemented("Graphics.drawRoundRectComplex");
	}
	,drawTiles: function(sheet,tileData,smooth,flags,count) {
		if(count == null) count = -1;
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		this.__inflateBounds(0,0);
		this.__inflateBounds(openfl.Lib.current.stage.stageWidth,openfl.Lib.current.stage.stageHeight);
		this.__commands.push(openfl.display.DrawCommand.DrawTiles(sheet,tileData,smooth,flags,count));
		this.__dirty = true;
		this.__visible = true;
	}
	,drawTriangles: function(vertices,indices,uvtData,culling) {
		openfl.Lib.notImplemented("Graphics.drawTriangles");
	}
	,endFill: function() {
		this.__commands.push(openfl.display.DrawCommand.EndFill);
	}
	,lineBitmapStyle: function(bitmap,matrix,repeat,smooth) {
		if(smooth == null) smooth = false;
		if(repeat == null) repeat = true;
		openfl.Lib.notImplemented("Graphics.lineBitmapStyle");
	}
	,lineGradientStyle: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		openfl.Lib.notImplemented("Graphics.lineGradientStyle");
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		if(thickness != null) this.__halfStrokeWidth = thickness / 2; else this.__halfStrokeWidth = 0;
		this.__commands.push(openfl.display.DrawCommand.LineStyle(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit));
		if(thickness != null) this.__visible = true;
	}
	,lineTo: function(x,y) {
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__positionX = x;
		this.__positionY = y;
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__commands.push(openfl.display.DrawCommand.LineTo(x,y));
		this.__dirty = true;
	}
	,moveTo: function(x,y) {
		this.__commands.push(openfl.display.DrawCommand.MoveTo(x,y));
		this.__positionX = x;
		this.__positionY = y;
	}
	,__beginPath: function() {
		if(!this.__inPath) {
			this.__context.beginPath();
			this.__inPath = true;
		}
	}
	,__beginPatternFill: function(bitmapFill,bitmapRepeat) {
		if(this.__setFill || bitmapFill == null) return;
		if(this.__pattern == null) {
			if(bitmapFill.__sourceImage != null) this.__pattern = this.__context.createPattern(bitmapFill.__sourceImage,bitmapRepeat?"repeat":"no-repeat"); else this.__pattern = this.__context.createPattern(bitmapFill.__sourceCanvas,bitmapRepeat?"repeat":"no-repeat");
		}
		this.__context.fillStyle = this.__pattern;
		this.__setFill = true;
	}
	,__closePath: function(closeFill) {
		if(this.__inPath) {
			if(this.__hasFill) {
				this.__context.translate(-this.__bounds.x,-this.__bounds.y);
				if(this.__pendingMatrix != null) {
					this.__context.transform(this.__pendingMatrix.a,this.__pendingMatrix.b,this.__pendingMatrix.c,this.__pendingMatrix.d,this.__pendingMatrix.tx,this.__pendingMatrix.ty);
					this.__context.fill();
					this.__context.transform(this.__inversePendingMatrix.a,this.__inversePendingMatrix.b,this.__inversePendingMatrix.c,this.__inversePendingMatrix.d,this.__inversePendingMatrix.tx,this.__inversePendingMatrix.ty);
				} else this.__context.fill();
				this.__context.translate(this.__bounds.x,this.__bounds.y);
			}
			this.__context.closePath();
			if(this.__hasStroke) this.__context.stroke();
		}
		this.__inPath = false;
		if(closeFill) {
			this.__hasFill = false;
			this.__hasStroke = false;
			this.__pendingMatrix = null;
			this.__inversePendingMatrix = null;
		}
	}
	,__getBounds: function(rect,matrix) {
		if(this.__bounds == null) return;
		var bounds = this.__bounds.clone().transform(matrix);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
	}
	,__hitTest: function(x,y,shapeFlag,matrix) {
		if(this.__bounds == null) return false;
		var bounds = this.__bounds.clone().transform(matrix);
		return x > bounds.x && y > bounds.y && x <= bounds.get_right() && y <= bounds.get_bottom();
	}
	,__inflateBounds: function(x,y) {
		if(this.__bounds == null) {
			this.__bounds = new openfl.geom.Rectangle(x,y,0,0);
			return;
		}
		if(x < this.__bounds.x) {
			this.__bounds.width += this.__bounds.x - x;
			this.__bounds.x = x;
		}
		if(y < this.__bounds.y) {
			this.__bounds.height += this.__bounds.y - y;
			this.__bounds.y = y;
		}
		if(x > this.__bounds.x + this.__bounds.width) this.__bounds.width = x - this.__bounds.x;
		if(y > this.__bounds.y + this.__bounds.height) this.__bounds.height = y - this.__bounds.y;
	}
	,__render: function() {
		if(this.__dirty) {
			this.__hasFill = false;
			this.__hasStroke = false;
			this.__inPath = false;
			this.__positionX = 0;
			this.__positionY = 0;
			if(!this.__visible || this.__commands.length == 0 || this.__bounds == null || this.__bounds.width == 0 || this.__bounds.height == 0) {
				this.__canvas = null;
				this.__context = null;
			} else {
				if(this.__canvas == null) {
					this.__canvas = window.document.createElement("canvas");
					this.__context = this.__canvas.getContext("2d");
				}
				this.__canvas.width = Math.ceil(this.__bounds.width);
				this.__canvas.height = Math.ceil(this.__bounds.height);
				var offsetX = this.__bounds.x;
				var offsetY = this.__bounds.y;
				var bitmapFill = null;
				var bitmapRepeat = false;
				var _g = 0;
				var _g1 = this.__commands;
				while(_g < _g1.length) {
					var command = _g1[_g];
					++_g;
					switch(command[1]) {
					case 0:
						var smooth = command[5];
						var repeat = command[4];
						var matrix = command[3];
						var bitmap = command[2];
						this.__closePath(false);
						if(bitmap != bitmapFill || repeat != bitmapRepeat) {
							bitmapFill = bitmap;
							bitmapRepeat = repeat;
							this.__pattern = null;
							this.__setFill = false;
							bitmap.__syncImageData();
						}
						if(matrix != null) {
							this.__pendingMatrix = matrix;
							this.__inversePendingMatrix = new openfl.geom.Matrix(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
							this.__inversePendingMatrix.invert();
						} else {
							this.__pendingMatrix = null;
							this.__inversePendingMatrix = null;
						}
						this.__hasFill = true;
						break;
					case 1:
						var alpha = command[3];
						var rgb = command[2];
						this.__closePath(false);
						if(alpha == 1) this.__context.fillStyle = "#" + StringTools.hex(rgb,6); else {
							var r = (rgb & 16711680) >>> 16;
							var g = (rgb & 65280) >>> 8;
							var b = rgb & 255;
							this.__context.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
						}
						bitmapFill = null;
						this.__setFill = true;
						this.__hasFill = true;
						break;
					case 2:
						var y = command[5];
						var x = command[4];
						var cy = command[3];
						var cx = command[2];
						this.__beginPatternFill(bitmapFill,bitmapRepeat);
						this.__beginPath();
						this.__context.quadraticCurveTo(cx - offsetX,cy - offsetY,x - offsetX,y - offsetY);
						this.__positionX = x;
						this.__positionY = y;
						break;
					case 3:
						var radius = command[4];
						var y1 = command[3];
						var x1 = command[2];
						this.__beginPatternFill(bitmapFill,bitmapRepeat);
						this.__beginPath();
						this.__context.moveTo(x1 - offsetX + radius,y1 - offsetY);
						this.__context.arc(x1 - offsetX,y1 - offsetY,radius,0,Math.PI * 2,true);
						break;
					case 4:
						var height = command[5];
						var width = command[4];
						var y2 = command[3];
						var x2 = command[2];
						x2 -= offsetX;
						y2 -= offsetY;
						var kappa = .5522848;
						var ox = width / 2 * kappa;
						var oy = height / 2 * kappa;
						var xe = x2 + width;
						var ye = y2 + height;
						var xm = x2 + width / 2;
						var ym = y2 + height / 2;
						this.__beginPatternFill(bitmapFill,bitmapRepeat);
						this.__beginPath();
						this.__context.moveTo(x2,ym);
						this.__context.bezierCurveTo(x2,ym - oy,xm - ox,y2,xm,y2);
						this.__context.bezierCurveTo(xm + ox,y2,xe,ym - oy,xe,ym);
						this.__context.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
						this.__context.bezierCurveTo(xm - ox,ye,x2,ym + oy,x2,ym);
						break;
					case 5:
						var height1 = command[5];
						var width1 = command[4];
						var y3 = command[3];
						var x3 = command[2];
						var optimizationUsed = false;
						if(bitmapFill != null) {
							var st = 0;
							var sr = 0;
							var sb = 0;
							var sl = 0;
							var canOptimizeMatrix = true;
							if(this.__pendingMatrix != null) {
								if(this.__pendingMatrix.b != 0 || this.__pendingMatrix.c != 0) canOptimizeMatrix = false; else {
									var stl = this.__inversePendingMatrix.transformPoint(new openfl.geom.Point(x3,y3));
									var sbr = this.__inversePendingMatrix.transformPoint(new openfl.geom.Point(x3 + width1,y3 + height1));
									st = stl.y;
									sl = stl.x;
									sb = sbr.y;
									sr = sbr.x;
								}
							} else {
								st = y3;
								sl = x3;
								sb = y3 + height1;
								sr = x3 + width1;
							}
							if(canOptimizeMatrix && st >= 0 && sl >= 0 && sr <= bitmapFill.width && sb <= bitmapFill.height) {
								optimizationUsed = true;
								if(bitmapFill.__sourceImage != null) this.__context.drawImage(bitmapFill.__sourceImage,sl,st,sr - sl,sb - st,x3,y3,width1,height1); else this.__context.drawImage(bitmapFill.__sourceCanvas,sl,st,sr - sl,sb - st,x3,y3,width1,height1);
							}
						}
						if(!optimizationUsed) {
							this.__beginPatternFill(bitmapFill,bitmapRepeat);
							this.__beginPath();
							this.__context.rect(x3 - offsetX,y3 - offsetY,width1,height1);
						}
						break;
					case 6:
						var count = command[6];
						var flags = command[5];
						var smooth1 = command[4];
						var tileData = command[3];
						var sheet = command[2];
						this.__closePath(false);
						var useScale = (flags & 1) > 0;
						var useRotation = (flags & 2) > 0;
						var useTransform = (flags & 16) > 0;
						var useRGB = (flags & 4) > 0;
						var useAlpha = (flags & 8) > 0;
						if(useTransform) {
							useScale = false;
							useRotation = false;
						}
						var scaleIndex = 0;
						var rotationIndex = 0;
						var rgbIndex = 0;
						var alphaIndex = 0;
						var transformIndex = 0;
						var numValues = 3;
						if(useScale) {
							scaleIndex = numValues;
							numValues++;
						}
						if(useRotation) {
							rotationIndex = numValues;
							numValues++;
						}
						if(useTransform) {
							transformIndex = numValues;
							numValues += 4;
						}
						if(useRGB) {
							rgbIndex = numValues;
							numValues += 3;
						}
						if(useAlpha) {
							alphaIndex = numValues;
							numValues++;
						}
						var totalCount = tileData.length;
						if(count >= 0 && totalCount > count) totalCount = count;
						var itemCount = totalCount / numValues | 0;
						var index = 0;
						var rect = null;
						var center = null;
						var previousTileID = -1;
						var surface;
						sheet.__bitmap.__syncImageData();
						if(sheet.__bitmap.__sourceImage != null) surface = sheet.__bitmap.__sourceImage; else surface = sheet.__bitmap.__sourceCanvas;
						while(index < totalCount) {
							var tileID = tileData[index + 2] | 0;
							if(tileID != previousTileID) {
								rect = sheet.__tileRects[tileID];
								center = sheet.__centerPoints[tileID];
								previousTileID = tileID;
							}
							if(rect != null && rect.width > 0 && rect.height > 0 && center != null) {
								this.__context.save();
								this.__context.translate(tileData[index],tileData[index + 1]);
								if(useRotation) this.__context.rotate(tileData[index + rotationIndex]);
								var scale = 1.0;
								if(useScale) scale = tileData[index + scaleIndex];
								if(useTransform) this.__context.transform(tileData[index + transformIndex],tileData[index + transformIndex + 1],tileData[index + transformIndex + 2],tileData[index + transformIndex + 3],0,0);
								if(useAlpha) this.__context.globalAlpha = tileData[index + alphaIndex];
								this.__context.drawImage(surface,rect.x,rect.y,rect.width,rect.height,-center.x * scale,-center.y * scale,rect.width * scale,rect.height * scale);
								this.__context.restore();
							}
							index += numValues;
						}
						break;
					case 7:
						this.__closePath(true);
						break;
					case 8:
						var miterLimit = command[9];
						var joints = command[8];
						var caps = command[7];
						var scaleMode = command[6];
						var pixelHinting = command[5];
						var alpha1 = command[4];
						var color = command[3];
						var thickness = command[2];
						this.__closePath(false);
						if(thickness == null) this.__hasStroke = false; else {
							this.__context.lineWidth = thickness;
							this.__context.lineJoin = joints;
							this.__context.lineCap = caps;
							this.__context.miterLimit = miterLimit;
							this.__context.strokeStyle = "#" + StringTools.hex(color,6);
							this.__hasStroke = true;
						}
						break;
					case 9:
						var y4 = command[3];
						var x4 = command[2];
						this.__beginPatternFill(bitmapFill,bitmapRepeat);
						this.__beginPath();
						this.__context.lineTo(x4 - offsetX,y4 - offsetY);
						this.__positionX = x4;
						this.__positionY = y4;
						break;
					case 10:
						var y5 = command[3];
						var x5 = command[2];
						this.__beginPath();
						this.__context.moveTo(x5 - offsetX,y5 - offsetY);
						this.__positionX = x5;
						this.__positionY = y5;
						break;
					}
				}
			}
			this.__dirty = false;
			this.__closePath(false);
		}
	}
	,__renderMask: function(renderSession) {
		if(this.__commands.length != 0) {
			var __context = renderSession.context;
			var __positionX = 0.0;
			var __positionY = 0.0;
			var offsetX = 0;
			var offsetY = 0;
			var _g = 0;
			var _g1 = this.__commands;
			while(_g < _g1.length) {
				var command = _g1[_g];
				++_g;
				switch(command[1]) {
				case 2:
					var y = command[5];
					var x = command[4];
					var cy = command[3];
					var cx = command[2];
					__context.quadraticCurveTo(cx,cy,x,y);
					__positionX = x;
					__positionY = y;
					break;
				case 3:
					var radius = command[4];
					var y1 = command[3];
					var x1 = command[2];
					__context.arc(x1 - offsetX,y1 - offsetY,radius,0,Math.PI * 2,true);
					break;
				case 4:
					var height = command[5];
					var width = command[4];
					var y2 = command[3];
					var x2 = command[2];
					x2 -= offsetX;
					y2 -= offsetY;
					var kappa = .5522848;
					var ox = width / 2 * kappa;
					var oy = height / 2 * kappa;
					var xe = x2 + width;
					var ye = y2 + height;
					var xm = x2 + width / 2;
					var ym = y2 + height / 2;
					__context.moveTo(x2,ym);
					__context.bezierCurveTo(x2,ym - oy,xm - ox,y2,xm,y2);
					__context.bezierCurveTo(xm + ox,y2,xe,ym - oy,xe,ym);
					__context.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
					__context.bezierCurveTo(xm - ox,ye,x2,ym + oy,x2,ym);
					break;
				case 5:
					var height1 = command[5];
					var width1 = command[4];
					var y3 = command[3];
					var x3 = command[2];
					__context.rect(x3 - offsetX,y3 - offsetY,width1,height1);
					break;
				case 9:
					var y4 = command[3];
					var x4 = command[2];
					__context.lineTo(x4 - offsetX,y4 - offsetY);
					__positionX = x4;
					__positionY = y4;
					break;
				case 10:
					var y5 = command[3];
					var x5 = command[2];
					__context.moveTo(x5 - offsetX,y5 - offsetY);
					__positionX = x5;
					__positionY = y5;
					break;
				default:
				}
			}
		}
	}
	,__class__: openfl.display.Graphics
};
openfl.display.DrawCommand = $hxClasses["openfl.display.DrawCommand"] = { __ename__ : ["openfl","display","DrawCommand"], __constructs__ : ["BeginBitmapFill","BeginFill","CurveTo","DrawCircle","DrawEllipse","DrawRect","DrawTiles","EndFill","LineStyle","LineTo","MoveTo"] };
openfl.display.DrawCommand.BeginBitmapFill = function(bitmap,matrix,repeat,smooth) { var $x = ["BeginBitmapFill",0,bitmap,matrix,repeat,smooth]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.BeginFill = function(rgb,alpha) { var $x = ["BeginFill",1,rgb,alpha]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.CurveTo = function(cx,cy,x,y) { var $x = ["CurveTo",2,cx,cy,x,y]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawCircle = function(x,y,radius) { var $x = ["DrawCircle",3,x,y,radius]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawEllipse = function(x,y,width,height) { var $x = ["DrawEllipse",4,x,y,width,height]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawRect = function(x,y,width,height) { var $x = ["DrawRect",5,x,y,width,height]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawTiles = function(sheet,tileData,smooth,flags,count) { var $x = ["DrawTiles",6,sheet,tileData,smooth,flags,count]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.EndFill = ["EndFill",7];
openfl.display.DrawCommand.EndFill.toString = $estr;
openfl.display.DrawCommand.EndFill.__enum__ = openfl.display.DrawCommand;
openfl.display.DrawCommand.LineStyle = function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) { var $x = ["LineStyle",8,thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.LineTo = function(x,y) { var $x = ["LineTo",9,x,y]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.MoveTo = function(x,y) { var $x = ["MoveTo",10,x,y]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.GraphicsPathWinding = $hxClasses["openfl.display.GraphicsPathWinding"] = { __ename__ : ["openfl","display","GraphicsPathWinding"], __constructs__ : ["EVEN_ODD","NON_ZERO"] };
openfl.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD",0];
openfl.display.GraphicsPathWinding.EVEN_ODD.toString = $estr;
openfl.display.GraphicsPathWinding.EVEN_ODD.__enum__ = openfl.display.GraphicsPathWinding;
openfl.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO",1];
openfl.display.GraphicsPathWinding.NON_ZERO.toString = $estr;
openfl.display.GraphicsPathWinding.NON_ZERO.__enum__ = openfl.display.GraphicsPathWinding;
openfl.display.IGraphicsData = function() { };
$hxClasses["openfl.display.IGraphicsData"] = openfl.display.IGraphicsData;
openfl.display.IGraphicsData.__name__ = ["openfl","display","IGraphicsData"];
openfl.display.IGraphicsData.prototype = {
	__class__: openfl.display.IGraphicsData
};
openfl.display.GraphicsDataType = $hxClasses["openfl.display.GraphicsDataType"] = { __ename__ : ["openfl","display","GraphicsDataType"], __constructs__ : ["STROKE","SOLID","GRADIENT","PATH","BITMAP","END"] };
openfl.display.GraphicsDataType.STROKE = ["STROKE",0];
openfl.display.GraphicsDataType.STROKE.toString = $estr;
openfl.display.GraphicsDataType.STROKE.__enum__ = openfl.display.GraphicsDataType;
openfl.display.GraphicsDataType.SOLID = ["SOLID",1];
openfl.display.GraphicsDataType.SOLID.toString = $estr;
openfl.display.GraphicsDataType.SOLID.__enum__ = openfl.display.GraphicsDataType;
openfl.display.GraphicsDataType.GRADIENT = ["GRADIENT",2];
openfl.display.GraphicsDataType.GRADIENT.toString = $estr;
openfl.display.GraphicsDataType.GRADIENT.__enum__ = openfl.display.GraphicsDataType;
openfl.display.GraphicsDataType.PATH = ["PATH",3];
openfl.display.GraphicsDataType.PATH.toString = $estr;
openfl.display.GraphicsDataType.PATH.__enum__ = openfl.display.GraphicsDataType;
openfl.display.GraphicsDataType.BITMAP = ["BITMAP",4];
openfl.display.GraphicsDataType.BITMAP.toString = $estr;
openfl.display.GraphicsDataType.BITMAP.__enum__ = openfl.display.GraphicsDataType;
openfl.display.GraphicsDataType.END = ["END",5];
openfl.display.GraphicsDataType.END.toString = $estr;
openfl.display.GraphicsDataType.END.__enum__ = openfl.display.GraphicsDataType;
openfl.display._JointStyle = {};
openfl.display._JointStyle.JointStyle_Impl_ = function() { };
$hxClasses["openfl.display._JointStyle.JointStyle_Impl_"] = openfl.display._JointStyle.JointStyle_Impl_;
openfl.display._JointStyle.JointStyle_Impl_.__name__ = ["openfl","display","_JointStyle","JointStyle_Impl_"];
openfl.display.Loader = function() {
	openfl.display.Sprite.call(this);
	this.contentLoaderInfo = openfl.display.LoaderInfo.create(this);
};
$hxClasses["openfl.display.Loader"] = openfl.display.Loader;
openfl.display.Loader.__name__ = ["openfl","display","Loader"];
openfl.display.Loader.__super__ = openfl.display.Sprite;
openfl.display.Loader.prototype = $extend(openfl.display.Sprite.prototype,{
	load: function(request,context) {
		var extension = "";
		var parts = request.url.split(".");
		if(parts.length > 0) extension = parts[parts.length - 1].toLowerCase();
		var transparent = true;
		this.contentLoaderInfo.url = request.url;
		if(request.contentType == null && request.contentType != "") switch(extension) {
		case "swf":
			this.contentLoaderInfo.contentType = "application/x-shockwave-flash";
			break;
		case "jpg":case "jpeg":
			transparent = false;
			this.contentLoaderInfo.contentType = "image/jpeg";
			break;
		case "png":
			this.contentLoaderInfo.contentType = "image/png";
			break;
		case "gif":
			this.contentLoaderInfo.contentType = "image/gif";
			break;
		default:
			this.contentLoaderInfo.contentType = "application/x-www-form-urlencoded";
		} else this.contentLoaderInfo.contentType = request.contentType;
		openfl.display.BitmapData.fromFile(request.url,$bind(this,this.BitmapData_onLoad),$bind(this,this.BitmapData_onError));
	}
	,loadBytes: function(buffer) {
		openfl.display.BitmapData.fromBytes(buffer,null,$bind(this,this.BitmapData_onLoad));
	}
	,unload: function() {
		if(this.get_numChildren() > 0) {
			while(this.get_numChildren() > 0) this.removeChildAt(0);
			this.content = null;
			this.contentLoaderInfo.url = null;
			this.contentLoaderInfo.contentType = null;
			this.contentLoaderInfo.content = null;
			this.contentLoaderInfo.bytesLoaded = 0;
			this.contentLoaderInfo.bytesTotal = 0;
			this.contentLoaderInfo.width = 0;
			this.contentLoaderInfo.height = 0;
			var event = new openfl.events.Event(openfl.events.Event.UNLOAD);
			event.currentTarget = this;
			this.dispatchEvent(event);
		}
	}
	,BitmapData_onLoad: function(bitmapData) {
		this.contentLoaderInfo.content = new openfl.display.Bitmap(bitmapData);
		this.content = this.contentLoaderInfo.content;
		this.addChild(this.contentLoaderInfo.content);
		var event = new openfl.events.Event(openfl.events.Event.COMPLETE);
		event.target = this.contentLoaderInfo;
		event.currentTarget = this.contentLoaderInfo;
		this.contentLoaderInfo.dispatchEvent(event);
	}
	,BitmapData_onError: function() {
		var event = new openfl.events.IOErrorEvent(openfl.events.IOErrorEvent.IO_ERROR);
		event.target = this.contentLoaderInfo;
		event.currentTarget = this.contentLoaderInfo;
		this.contentLoaderInfo.dispatchEvent(event);
	}
	,__class__: openfl.display.Loader
});
openfl.display.LoaderInfo = function() {
	openfl.events.EventDispatcher.call(this);
	this.applicationDomain = openfl.system.ApplicationDomain.currentDomain;
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["openfl.display.LoaderInfo"] = openfl.display.LoaderInfo;
openfl.display.LoaderInfo.__name__ = ["openfl","display","LoaderInfo"];
openfl.display.LoaderInfo.create = function(ldr) {
	var li = new openfl.display.LoaderInfo();
	if(ldr != null) li.loader = ldr; else li.url = "";
	return li;
};
openfl.display.LoaderInfo.__super__ = openfl.events.EventDispatcher;
openfl.display.LoaderInfo.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	__class__: openfl.display.LoaderInfo
});
openfl.display.MovieClip = function() {
	openfl.display.Sprite.call(this);
	this.__currentFrame = 0;
	this.__currentLabels = [];
	this.__totalFrames = 0;
	this.enabled = true;
	this.loaderInfo = openfl.display.LoaderInfo.create(null);
};
$hxClasses["openfl.display.MovieClip"] = openfl.display.MovieClip;
openfl.display.MovieClip.__name__ = ["openfl","display","MovieClip"];
openfl.display.MovieClip.__super__ = openfl.display.Sprite;
openfl.display.MovieClip.prototype = $extend(openfl.display.Sprite.prototype,{
	gotoAndPlay: function(frame,scene) {
	}
	,gotoAndStop: function(frame,scene) {
	}
	,nextFrame: function() {
	}
	,play: function() {
	}
	,prevFrame: function() {
	}
	,stop: function() {
	}
	,get_currentFrame: function() {
		return this.__currentFrame;
	}
	,get_currentFrameLabel: function() {
		return this.__currentFrameLabel;
	}
	,get_currentLabel: function() {
		return this.__currentLabel;
	}
	,get_currentLabels: function() {
		return this.__currentLabels;
	}
	,get_framesLoaded: function() {
		return this.__totalFrames;
	}
	,get_totalFrames: function() {
		return this.__totalFrames;
	}
	,__class__: openfl.display.MovieClip
});
openfl.display.PixelSnapping = $hxClasses["openfl.display.PixelSnapping"] = { __ename__ : ["openfl","display","PixelSnapping"], __constructs__ : ["NEVER","AUTO","ALWAYS"] };
openfl.display.PixelSnapping.NEVER = ["NEVER",0];
openfl.display.PixelSnapping.NEVER.toString = $estr;
openfl.display.PixelSnapping.NEVER.__enum__ = openfl.display.PixelSnapping;
openfl.display.PixelSnapping.AUTO = ["AUTO",1];
openfl.display.PixelSnapping.AUTO.toString = $estr;
openfl.display.PixelSnapping.AUTO.__enum__ = openfl.display.PixelSnapping;
openfl.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
openfl.display.PixelSnapping.ALWAYS.toString = $estr;
openfl.display.PixelSnapping.ALWAYS.__enum__ = openfl.display.PixelSnapping;
openfl.display.Shape = function() {
	openfl.display.DisplayObject.call(this);
};
$hxClasses["openfl.display.Shape"] = openfl.display.Shape;
openfl.display.Shape.__name__ = ["openfl","display","Shape"];
openfl.display.Shape.__super__ = openfl.display.DisplayObject;
openfl.display.Shape.prototype = $extend(openfl.display.DisplayObject.prototype,{
	__getBounds: function(rect,matrix) {
		if(this.__graphics != null) this.__graphics.__getBounds(rect,this.__worldTransform);
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(this.get_visible() && this.__graphics != null && this.__graphics.__hitTest(x,y,shapeFlag,this.__worldTransform)) {
			if(!interactiveOnly) stack.push(this);
			return true;
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.__graphics != null) {
			this.__graphics.__render();
			if(this.__graphics.__canvas != null) {
				var context = renderSession.context;
				context.globalAlpha = this.__worldAlpha;
				var transform = this.__worldTransform;
				if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
				if(this.get_scrollRect() == null) context.drawImage(this.__graphics.__canvas,this.__graphics.__bounds.x,this.__graphics.__bounds.y); else context.drawImage(this.__graphics.__canvas,this.get_scrollRect().x - this.__graphics.__bounds.x,this.get_scrollRect().y - this.__graphics.__bounds.y,this.get_scrollRect().width,this.get_scrollRect().height,this.__graphics.__bounds.x + this.get_scrollRect().x,this.__graphics.__bounds.y + this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height);
			}
		}
	}
	,__renderDOM: function(renderSession) {
		if(this.stage != null && this.__worldVisible && this.__renderable && this.__graphics != null) {
			if(this.__graphics.__dirty || this.__worldAlphaChanged || this.__canvas == null && this.__graphics.__canvas != null) {
				this.__graphics.__render();
				if(this.__graphics.__canvas != null) {
					if(this.__canvas == null) {
						this.__canvas = window.document.createElement("canvas");
						this.__canvasContext = this.__canvas.getContext("2d");
						this.__initializeElement(this.__canvas,renderSession);
					}
					this.__canvas.width = this.__graphics.__canvas.width;
					this.__canvas.height = this.__graphics.__canvas.height;
					this.__canvasContext.globalAlpha = this.__worldAlpha;
					this.__canvasContext.drawImage(this.__graphics.__canvas,0,0);
				} else if(this.__canvas != null) {
					renderSession.element.removeChild(this.__canvas);
					this.__canvas = null;
					this.__style = null;
				}
			}
			if(this.__canvas != null) {
				if(this.__worldTransformChanged) {
					var transform = new openfl.geom.Matrix();
					transform.translate(this.__graphics.__bounds.x,this.__graphics.__bounds.y);
					transform = transform.mult(this.__worldTransform);
					this.__style.setProperty(renderSession.transformProperty,renderSession.roundPixels?"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + (transform.tx | 0) + ", " + (transform.ty | 0) + ", 0, 1)":"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + transform.tx + ", " + transform.ty + ", 0, 1)",null);
				}
				this.__applyStyle(renderSession,false,false,true);
			}
		} else if(this.__canvas != null) {
			renderSession.element.removeChild(this.__canvas);
			this.__canvas = null;
			this.__style = null;
		}
	}
	,get_graphics: function() {
		if(this.__graphics == null) this.__graphics = new openfl.display.Graphics();
		return this.__graphics;
	}
	,__class__: openfl.display.Shape
});
openfl.display.Stage = function(width,height,element,color) {
	this.__mouseY = 0;
	this.__mouseX = 0;
	openfl.display.Sprite.call(this);
	this.__element = element;
	if(color == null) {
		this.__transparent = true;
		this.set_color(0);
	} else this.set_color(color);
	this.set_name(null);
	this.__mouseX = 0;
	this.__mouseY = 0;
	if(!this.__initializeGL()) this.__initializeCanvas();
	this.__originalWidth = width;
	this.__originalHeight = height;
	if(width == 0 && height == 0) {
		if(element != null) {
			width = element.clientWidth;
			height = element.clientHeight;
		} else {
			width = window.innerWidth;
			height = window.innerHeight;
		}
		this.__fullscreen = true;
	}
	this.stageWidth = width;
	this.stageHeight = height;
	if(this.__canvas != null) {
		this.__canvas.width = width;
		this.__canvas.height = height;
	} else {
		this.__div.style.width = width + "px";
		this.__div.style.height = height + "px";
	}
	this.__resize();
	window.addEventListener("resize",$bind(this,this.window_onResize));
	window.addEventListener("focus",$bind(this,this.window_onFocus));
	window.addEventListener("blur",$bind(this,this.window_onBlur));
	if(element != null) {
		if(this.__canvas != null) {
			if(element != this.__canvas) element.appendChild(this.__canvas);
		} else element.appendChild(this.__div);
	}
	this.stage = this;
	this.align = openfl.display.StageAlign.TOP_LEFT;
	this.allowsFullScreen = false;
	this.set_displayState(openfl.display.StageDisplayState.NORMAL);
	this.frameRate = 60;
	this.quality = "high";
	this.scaleMode = openfl.display.StageScaleMode.NO_SCALE;
	this.stageFocusRect = true;
	this.__clearBeforeRender = true;
	this.__stack = [];
	var keyEvents = ["keydown","keyup"];
	var touchEvents = ["touchstart","touchmove","touchend"];
	var mouseEvents = ["mousedown","mousemove","mouseup","dblclick","mousewheel"];
	var focusEvents = ["focus","blur"];
	var element1;
	if(this.__canvas != null) element1 = this.__canvas; else element1 = this.__div;
	var _g = 0;
	while(_g < keyEvents.length) {
		var type = keyEvents[_g];
		++_g;
		window.addEventListener(type,$bind(this,this.window_onKey),false);
	}
	var _g1 = 0;
	while(_g1 < touchEvents.length) {
		var type1 = touchEvents[_g1];
		++_g1;
		element1.addEventListener(type1,$bind(this,this.element_onTouch),true);
	}
	var _g2 = 0;
	while(_g2 < mouseEvents.length) {
		var type2 = mouseEvents[_g2];
		++_g2;
		element1.addEventListener(type2,$bind(this,this.element_onMouse),true);
	}
	var _g3 = 0;
	while(_g3 < focusEvents.length) {
		var type3 = focusEvents[_g3];
		++_g3;
		element1.addEventListener(type3,$bind(this,this.element_onFocus),true);
	}
	window.requestAnimationFrame($bind(this,this.__render));
};
$hxClasses["openfl.display.Stage"] = openfl.display.Stage;
openfl.display.Stage.__name__ = ["openfl","display","Stage"];
openfl.display.Stage.__super__ = openfl.display.Sprite;
openfl.display.Stage.prototype = $extend(openfl.display.Sprite.prototype,{
	globalToLocal: function(pos) {
		return pos;
	}
	,invalidate: function() {
		this.__invalidated = true;
	}
	,localToGlobal: function(pos) {
		return pos;
	}
	,__drag: function(mouse) {
		var parent = this.__dragObject.parent;
		if(parent != null) mouse = parent.globalToLocal(mouse);
		var x = mouse.x + this.__dragOffsetX;
		var y = mouse.y + this.__dragOffsetY;
		if(this.__dragBounds != null) {
			if(x < this.__dragBounds.x) x = this.__dragBounds.x; else if(x > this.__dragBounds.get_right()) x = this.__dragBounds.get_right();
			if(y < this.__dragBounds.y) y = this.__dragBounds.y; else if(y > this.__dragBounds.get_bottom()) y = this.__dragBounds.get_bottom();
		}
		this.__dragObject.set_x(x);
		this.__dragObject.set_y(y);
	}
	,__fireEvent: function(event,stack) {
		var length = stack.length;
		if(length == 0) {
			event.eventPhase = 1;
			event.target.__broadcast(event,false);
		} else {
			event.eventPhase = 0;
			event.target = stack[stack.length - 1];
			var _g1 = 0;
			var _g = length - 1;
			while(_g1 < _g) {
				var i = _g1++;
				stack[i].__broadcast(event,false);
				if(event.__isCancelled) return;
			}
			event.eventPhase = 1;
			event.target.__broadcast(event,false);
			if(event.__isCancelled) return;
			if(event.bubbles) {
				event.eventPhase = 2;
				var i1 = length - 2;
				while(i1 >= 0) {
					stack[i1].__broadcast(event,false);
					if(event.__isCancelled) return;
					i1--;
				}
			}
		}
	}
	,__getInteractive: function(stack) {
		stack.push(this);
	}
	,__initializeCanvas: function() {
		if(js.Boot.__instanceof(this.__element,HTMLCanvasElement)) this.__canvas = this.__element; else this.__canvas = window.document.createElement("canvas");
		if(this.__transparent) this.__context = this.__canvas.getContext("2d"); else {
			this.__canvas.setAttribute("moz-opaque","true");
			this.__context = this.__canvas.getContext ("2d", { alpha: false });
		}
		var style = this.__canvas.style;
		style.setProperty("-webkit-transform","translateZ(0)",null);
		style.setProperty("transform","translateZ(0)",null);
		this.__renderSession = new openfl.display.RenderSession();
		this.__renderSession.context = this.__context;
		this.__renderSession.roundPixels = true;
	}
	,__initializeDOM: function() {
		this.__div = window.document.createElement("div");
		var style = this.__div.style;
		if(!this.__transparent) style.backgroundColor = this.__colorString;
		style.setProperty("-webkit-transform","translate3D(0,0,0)",null);
		style.setProperty("transform","translate3D(0,0,0)",null);
		style.position = "relative";
		style.overflow = "hidden";
		style.setProperty("-webkit-user-select","none",null);
		style.setProperty("-moz-user-select","none",null);
		style.setProperty("-ms-user-select","none",null);
		style.setProperty("-o-user-select","none",null);
		window.document.addEventListener("dragstart",function(e) {
			if(e.target.nodeName.toLowerCase() == "img") {
				e.preventDefault();
				return false;
			}
			return true;
		},false);
		this.__renderSession = new openfl.display.RenderSession();
		this.__renderSession.element = this.__div;
		this.__renderSession.roundPixels = true;
		var prefix = (function () {
		  var styles = window.getComputedStyle(document.documentElement, ''),
			pre = (Array.prototype.slice
			  .call(styles)
			  .join('') 
			  .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
			)[1],
			dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
		  return {
			dom: dom,
			lowercase: pre,
			css: '-' + pre + '-',
			js: pre[0].toUpperCase() + pre.substr(1)
		  };
		})();
		this.__renderSession.vendorPrefix = prefix.lowercase;
		if(prefix.lowercase == "webkit") this.__renderSession.transformProperty = "-webkit-transform"; else this.__renderSession.transformProperty = "transform";
		if(prefix.lowercase == "webkit") this.__renderSession.transformOriginProperty = "-webkit-transform-origin"; else this.__renderSession.transformOriginProperty = "transform-origin";
	}
	,__initializeGL: function() {
		return false;
	}
	,__render: function() {
		this.__broadcast(new openfl.events.Event(openfl.events.Event.ENTER_FRAME),true);
		if(this.__invalidated) {
			this.__invalidated = false;
			this.__broadcast(new openfl.events.Event(openfl.events.Event.RENDER),true);
		}
		this.__renderable = true;
		this.__update(false,true);
		if(this.__canvas != null) {
			if(!this.__fullscreen || this.__element != this.__canvas) {
				if(this.stageWidth != this.__canvas.width || this.stageHeight != this.__canvas.height) {
					this.__canvas.width = this.stageWidth;
					this.__canvas.height = this.stageHeight;
				}
			} else {
				this.stageWidth = this.__canvas.width;
				this.stageHeight = this.__canvas.height;
			}
			if(this.__gl != null) {
				if(!this.__glContextLost) {
					this.__gl.viewport(0,0,this.stageWidth,this.stageHeight);
					this.__gl.bindFramebuffer(36160,null);
					if(this.__transparent) this.__gl.clearColor(0,0,0,0); else this.__gl.clearColor(this.__colorSplit[0],this.__colorSplit[1],this.__colorSplit[2],1);
					this.__gl.clear(16384);
					this.__renderGL(this.__renderSession);
				}
			} else {
				this.__context.setTransform(1,0,0,1,0,0);
				this.__context.globalAlpha = 1;
				if(!this.__transparent && this.__clearBeforeRender) {
					this.__context.fillStyle = this.__colorString;
					this.__context.fillRect(0,0,this.stageWidth,this.stageHeight);
				} else if(this.__transparent && this.__clearBeforeRender) this.__context.clearRect(0,0,this.stageWidth,this.stageHeight);
				this.__renderCanvas(this.__renderSession);
			}
		} else {
			this.__renderSession.z = 1;
			this.__renderDOM(this.__renderSession);
		}
		window.requestAnimationFrame($bind(this,this.__render));
	}
	,__resize: function() {
		if(this.__element != null && (this.__div == null || this.__div != null && this.__fullscreen)) {
			if(this.__fullscreen) {
				this.stageWidth = this.__element.clientWidth;
				this.stageHeight = this.__element.clientHeight;
				if(this.__canvas != null) {
					if(this.__element != this.__canvas) {
						this.__canvas.width = this.stageWidth;
						this.__canvas.height = this.stageHeight;
					}
				} else {
					this.__div.style.width = this.stageWidth + "px";
					this.__div.style.height = this.stageHeight + "px";
				}
			} else {
				var scaleX = this.__element.clientWidth / this.__originalWidth;
				var scaleY = this.__element.clientHeight / this.__originalHeight;
				var currentRatio = scaleX / scaleY;
				var targetRatio = Math.min(scaleX,scaleY);
				if(this.__canvas != null) {
					if(this.__element != this.__canvas) {
						this.__canvas.style.width = this.__originalWidth * targetRatio + "px";
						this.__canvas.style.height = this.__originalHeight * targetRatio + "px";
						this.__canvas.style.marginLeft = (this.__element.clientWidth - this.__originalWidth * targetRatio) / 2 + "px";
						this.__canvas.style.marginTop = (this.__element.clientHeight - this.__originalHeight * targetRatio) / 2 + "px";
					}
				} else {
					this.__div.style.width = this.__originalWidth * targetRatio + "px";
					this.__div.style.height = this.__originalHeight * targetRatio + "px";
					this.__div.style.marginLeft = (this.__element.clientWidth - this.__originalWidth * targetRatio) / 2 + "px";
					this.__div.style.marginTop = (this.__element.clientHeight - this.__originalHeight * targetRatio) / 2 + "px";
				}
			}
		}
	}
	,__setCursor: function(cursor) {
		if(this.__cursor != cursor) {
			this.__cursor = cursor;
			if(!this.__cursorHidden) {
				var element;
				if(this.__canvas != null) element = this.__canvas; else element = this.__div;
				element.style.cursor = cursor;
			}
		}
	}
	,__setCursorHidden: function(value) {
		if(this.__cursorHidden != value) {
			this.__cursorHidden = value;
			var element;
			if(this.__canvas != null) element = this.__canvas; else element = this.__div;
			if(value) element.style.cursor = "none"; else element.style.cursor = this.__cursor;
		}
	}
	,__startDrag: function(sprite,lockCenter,bounds) {
		if(bounds == null) this.__dragBounds = null; else this.__dragBounds = bounds.clone();
		this.__dragObject = sprite;
		if(this.__dragObject != null) {
			if(lockCenter) {
				this.__dragOffsetX = -this.__dragObject.get_width() / 2;
				this.__dragOffsetY = -this.__dragObject.get_height() / 2;
			} else {
				var mouse = new openfl.geom.Point(this.get_mouseX(),this.get_mouseY());
				var parent = this.__dragObject.parent;
				if(parent != null) mouse = parent.globalToLocal(mouse);
				this.__dragOffsetX = this.__dragObject.get_x() - mouse.x;
				this.__dragOffsetY = this.__dragObject.get_y() - mouse.y;
			}
		}
	}
	,__stopDrag: function(sprite) {
		this.__dragBounds = null;
		this.__dragObject = null;
	}
	,__update: function(transformOnly,updateChildren) {
		if(transformOnly) {
			if(openfl.display.DisplayObject.__worldTransformDirty > 0) {
				openfl.display.Sprite.prototype.__update.call(this,true,updateChildren);
				if(updateChildren) {
					openfl.display.DisplayObject.__worldTransformDirty = 0;
					this.__dirty = true;
				}
			}
		} else if(openfl.display.DisplayObject.__worldTransformDirty > 0 || this.__dirty || openfl.display.DisplayObject.__worldRenderDirty > 0) {
			openfl.display.Sprite.prototype.__update.call(this,false,updateChildren);
			if(updateChildren) {
				openfl.display.DisplayObject.__worldTransformDirty = 0;
				openfl.display.DisplayObject.__worldRenderDirty = 0;
				this.__dirty = false;
			}
		}
	}
	,get_mouseX: function() {
		return this.__mouseX;
	}
	,get_mouseY: function() {
		return this.__mouseY;
	}
	,canvas_onContextLost: function(event) {
		this.__glContextLost = true;
	}
	,canvas_onContextRestored: function(event) {
		this.__glContextLost = false;
	}
	,element_onFocus: function(event) {
	}
	,element_onTouch: function(event) {
		event.preventDefault();
		var rect;
		if(this.__canvas != null) rect = this.__canvas.getBoundingClientRect(); else rect = this.__div.getBoundingClientRect();
		var touch = event.changedTouches[0];
		var point = new openfl.geom.Point((touch.pageX - rect.left) * (this.stageWidth / rect.width),(touch.pageY - rect.top) * (this.stageHeight / rect.height));
		this.__mouseX = point.x;
		this.__mouseY = point.y;
		this.__stack = [];
		var type = null;
		var mouseType = null;
		var _g = event.type;
		switch(_g) {
		case "touchstart":
			type = "touchBegin";
			mouseType = openfl.events.MouseEvent.MOUSE_DOWN;
			break;
		case "touchmove":
			type = "touchMove";
			mouseType = openfl.events.MouseEvent.MOUSE_MOVE;
			break;
		case "touchend":
			type = "touchEnd";
			mouseType = openfl.events.MouseEvent.MOUSE_UP;
			break;
		default:
		}
		if(this.__hitTest(this.get_mouseX(),this.get_mouseY(),false,this.__stack,true)) {
			var target = this.__stack[this.__stack.length - 1];
			var localPoint = target.globalToLocal(point);
			var touchEvent = openfl.events.TouchEvent.__create(type,event,touch,localPoint,target);
			touchEvent.touchPointID = touch.identifier;
			touchEvent.isPrimaryTouchPoint = true;
			var mouseEvent = openfl.events.MouseEvent.__create(mouseType,event,localPoint,target);
			mouseEvent.buttonDown = type != "touchEnd";
			this.__fireEvent(touchEvent,this.__stack);
			this.__fireEvent(mouseEvent,this.__stack);
		} else {
			var touchEvent1 = openfl.events.TouchEvent.__create(type,event,touch,point,this);
			touchEvent1.touchPointID = touch.identifier;
			touchEvent1.isPrimaryTouchPoint = true;
			var mouseEvent1 = openfl.events.MouseEvent.__create(mouseType,event,point,this);
			mouseEvent1.buttonDown = type != "touchEnd";
			this.__fireEvent(touchEvent1,[this]);
			this.__fireEvent(mouseEvent1,[this]);
		}
		if(type == "touchMove" && this.__dragObject != null) this.__drag(point);
	}
	,element_onMouse: function(event) {
		var rect;
		if(this.__canvas != null) {
			rect = this.__canvas.getBoundingClientRect();
			this.__mouseX = (event.clientX - rect.left) * (this.stageWidth / rect.width);
			this.__mouseY = (event.clientY - rect.top) * (this.stageHeight / rect.height);
		} else {
			rect = this.__div.getBoundingClientRect();
			this.__mouseX = event.clientX - rect.left;
			this.__mouseY = event.clientY - rect.top;
		}
		this.__stack = [];
		var type;
		var _g = event.type;
		switch(_g) {
		case "mousedown":
			type = openfl.events.MouseEvent.MOUSE_DOWN;
			break;
		case "mouseup":
			type = openfl.events.MouseEvent.MOUSE_UP;
			break;
		case "mousemove":
			type = openfl.events.MouseEvent.MOUSE_MOVE;
			break;
		case "dblclick":
			type = openfl.events.MouseEvent.DOUBLE_CLICK;
			break;
		case "mousewheel":
			type = openfl.events.MouseEvent.MOUSE_WHEEL;
			break;
		default:
			type = null;
		}
		if(this.__hitTest(this.get_mouseX(),this.get_mouseY(),false,this.__stack,true)) {
			var target = this.__stack[this.__stack.length - 1];
			this.__setCursor(target.buttonMode?"pointer":"default");
			this.__fireEvent(openfl.events.MouseEvent.__create(type,event,target.globalToLocal(new openfl.geom.Point(this.get_mouseX(),this.get_mouseY())),target),this.__stack);
			if(type == openfl.events.MouseEvent.MOUSE_UP) this.__fireEvent(openfl.events.MouseEvent.__create(openfl.events.MouseEvent.CLICK,event,target.globalToLocal(new openfl.geom.Point(this.get_mouseX(),this.get_mouseY())),target),this.__stack);
		} else {
			this.__setCursor(this.buttonMode?"pointer":"default");
			this.__fireEvent(openfl.events.MouseEvent.__create(type,event,new openfl.geom.Point(this.get_mouseX(),this.get_mouseY()),this),[this]);
			if(type == openfl.events.MouseEvent.MOUSE_UP) this.__fireEvent(openfl.events.MouseEvent.__create(openfl.events.MouseEvent.CLICK,event,new openfl.geom.Point(this.get_mouseX(),this.get_mouseY()),this),[this]);
		}
		if(this.__dragObject != null) this.__drag(new openfl.geom.Point(this.get_mouseX(),this.get_mouseY()));
	}
	,window_onKey: function(event) {
		var keyCode;
		if(event.keyCode != null) keyCode = event.keyCode; else keyCode = event.which;
		keyCode = openfl.ui.Keyboard.__convertMozillaCode(keyCode);
		var location;
		if(event.location != null) location = event.location; else location = event.keyLocation;
		var keyLocation;
		keyLocation = js.Boot.__cast(location , Int);
		var stack = new Array();
		if(this.__focus == null) this.__getInteractive(stack); else this.__focus.__getInteractive(stack);
		if(stack.length > 0) {
			stack.reverse();
			this.__fireEvent(new openfl.events.KeyboardEvent(event.type == "keydown"?openfl.events.KeyboardEvent.KEY_DOWN:openfl.events.KeyboardEvent.KEY_UP,true,false,event.charCode,keyCode,keyLocation,event.ctrlKey,event.altKey,event.shiftKey),stack);
		}
	}
	,window_onResize: function(event) {
		this.__resize();
		var event1 = new openfl.events.Event(openfl.events.Event.RESIZE);
		this.__broadcast(event1,false);
	}
	,window_onFocus: function(event) {
		var event1 = new openfl.events.Event(openfl.events.Event.ACTIVATE);
		this.__broadcast(event1,true);
	}
	,window_onBlur: function(event) {
		var event1 = new openfl.events.Event(openfl.events.Event.DEACTIVATE);
		this.__broadcast(event1,true);
	}
	,get_color: function() {
		return this.__color;
	}
	,set_color: function(value) {
		var r = (value & 16711680) >>> 16;
		var g = (value & 65280) >>> 8;
		var b = value & 255;
		this.__colorSplit = [r / 255,g / 255,b / 255];
		this.__colorString = "#" + StringTools.hex(value,6);
		return this.__color = value;
	}
	,get_focus: function() {
		return this.__focus;
	}
	,set_focus: function(value) {
		if(value != this.__focus) {
			if(this.__focus != null) {
				var event = new openfl.events.FocusEvent(openfl.events.FocusEvent.FOCUS_OUT,true,false,value,false,0);
				this.__stack = [];
				this.__focus.__getInteractive(this.__stack);
				this.__stack.reverse();
				this.__fireEvent(event,this.__stack);
			}
			if(value != null) {
				var event1 = new openfl.events.FocusEvent(openfl.events.FocusEvent.FOCUS_IN,true,false,this.__focus,false,0);
				this.__stack = [];
				value.__getInteractive(this.__stack);
				this.__stack.reverse();
				this.__fireEvent(event1,this.__stack);
			}
			this.__focus = value;
		}
		return this.__focus;
	}
	,set_displayState: function(value) {
		switch(value[1]) {
		case 0:
			var fs_exit_function = function() {
			    if (document.exitFullscreen) {
			      document.exitFullscreen();
			    } else if (document.msExitFullscreen) {
			      document.msExitFullscreen();
			    } else if (document.mozCancelFullScreen) {
			      document.mozCancelFullScreen();
			    } else if (document.webkitExitFullscreen) {
			      document.webkitExitFullscreen();
			    }
				}
			fs_exit_function();
			break;
		case 1:case 2:
			var fsfunction = function(elem) {
					if (elem.requestFullscreen) elem.requestFullscreen();
					else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
					else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
					else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
				}
			fsfunction(this.__element);
			break;
		}
		this.displayState = value;
		return value;
	}
	,__class__: openfl.display.Stage
});
openfl.display.RenderSession = function() {
	this.maskManager = new openfl.display.MaskManager(this);
};
$hxClasses["openfl.display.RenderSession"] = openfl.display.RenderSession;
openfl.display.RenderSession.__name__ = ["openfl","display","RenderSession"];
openfl.display.RenderSession.prototype = {
	__class__: openfl.display.RenderSession
};
openfl.display.MaskManager = function(renderSession) {
	this.renderSession = renderSession;
};
$hxClasses["openfl.display.MaskManager"] = openfl.display.MaskManager;
openfl.display.MaskManager.__name__ = ["openfl","display","MaskManager"];
openfl.display.MaskManager.prototype = {
	pushMask: function(mask) {
		var context = this.renderSession.context;
		context.save();
		var transform = mask.__worldTransform;
		if(transform == null) transform = new openfl.geom.Matrix();
		context.setTransform(transform.a,transform.c,transform.b,transform.d,transform.tx,transform.ty);
		context.beginPath();
		mask.__renderMask(this.renderSession);
		context.clip();
	}
	,pushRect: function(rect,transform) {
		var context = this.renderSession.context;
		context.save();
		context.setTransform(transform.a,transform.c,transform.b,transform.d,transform.tx,transform.ty);
		context.beginPath();
		context.rect(rect.x,rect.y,rect.width,rect.height);
		context.clip();
	}
	,popMask: function() {
		this.renderSession.context.restore();
	}
	,__class__: openfl.display.MaskManager
};
openfl.display.StageAlign = $hxClasses["openfl.display.StageAlign"] = { __ename__ : ["openfl","display","StageAlign"], __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] };
openfl.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
openfl.display.StageAlign.TOP_RIGHT.toString = $estr;
openfl.display.StageAlign.TOP_RIGHT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
openfl.display.StageAlign.TOP_LEFT.toString = $estr;
openfl.display.StageAlign.TOP_LEFT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.TOP = ["TOP",2];
openfl.display.StageAlign.TOP.toString = $estr;
openfl.display.StageAlign.TOP.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.RIGHT = ["RIGHT",3];
openfl.display.StageAlign.RIGHT.toString = $estr;
openfl.display.StageAlign.RIGHT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.LEFT = ["LEFT",4];
openfl.display.StageAlign.LEFT.toString = $estr;
openfl.display.StageAlign.LEFT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
openfl.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
openfl.display.StageAlign.BOTTOM_RIGHT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
openfl.display.StageAlign.BOTTOM_LEFT.toString = $estr;
openfl.display.StageAlign.BOTTOM_LEFT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.BOTTOM = ["BOTTOM",7];
openfl.display.StageAlign.BOTTOM.toString = $estr;
openfl.display.StageAlign.BOTTOM.__enum__ = openfl.display.StageAlign;
openfl.display.StageDisplayState = $hxClasses["openfl.display.StageDisplayState"] = { __ename__ : ["openfl","display","StageDisplayState"], __constructs__ : ["NORMAL","FULL_SCREEN","FULL_SCREEN_INTERACTIVE"] };
openfl.display.StageDisplayState.NORMAL = ["NORMAL",0];
openfl.display.StageDisplayState.NORMAL.toString = $estr;
openfl.display.StageDisplayState.NORMAL.__enum__ = openfl.display.StageDisplayState;
openfl.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",1];
openfl.display.StageDisplayState.FULL_SCREEN.toString = $estr;
openfl.display.StageDisplayState.FULL_SCREEN.__enum__ = openfl.display.StageDisplayState;
openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE = ["FULL_SCREEN_INTERACTIVE",2];
openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.toString = $estr;
openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.__enum__ = openfl.display.StageDisplayState;
openfl.display._StageQuality = {};
openfl.display._StageQuality.StageQuality_Impl_ = function() { };
$hxClasses["openfl.display._StageQuality.StageQuality_Impl_"] = openfl.display._StageQuality.StageQuality_Impl_;
openfl.display._StageQuality.StageQuality_Impl_.__name__ = ["openfl","display","_StageQuality","StageQuality_Impl_"];
openfl.display.StageScaleMode = $hxClasses["openfl.display.StageScaleMode"] = { __ename__ : ["openfl","display","StageScaleMode"], __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] };
openfl.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
openfl.display.StageScaleMode.SHOW_ALL.toString = $estr;
openfl.display.StageScaleMode.SHOW_ALL.__enum__ = openfl.display.StageScaleMode;
openfl.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
openfl.display.StageScaleMode.NO_SCALE.toString = $estr;
openfl.display.StageScaleMode.NO_SCALE.__enum__ = openfl.display.StageScaleMode;
openfl.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
openfl.display.StageScaleMode.NO_BORDER.toString = $estr;
openfl.display.StageScaleMode.NO_BORDER.__enum__ = openfl.display.StageScaleMode;
openfl.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
openfl.display.StageScaleMode.EXACT_FIT.toString = $estr;
openfl.display.StageScaleMode.EXACT_FIT.__enum__ = openfl.display.StageScaleMode;
openfl.display.Tilesheet = function(image) {
	this.__bitmap = image;
	this.__centerPoints = new Array();
	this.__tileRects = new Array();
	this.__tileUVs = new Array();
};
$hxClasses["openfl.display.Tilesheet"] = openfl.display.Tilesheet;
openfl.display.Tilesheet.__name__ = ["openfl","display","Tilesheet"];
openfl.display.Tilesheet.prototype = {
	addTileRect: function(rectangle,centerPoint) {
		this.__tileRects.push(rectangle);
		if(centerPoint == null) centerPoint = new openfl.geom.Point();
		this.__centerPoints.push(centerPoint);
		this.__tileUVs.push(new openfl.geom.Rectangle(rectangle.get_left() / this.__bitmap.width,rectangle.get_top() / this.__bitmap.height,rectangle.get_right() / this.__bitmap.width,rectangle.get_bottom() / this.__bitmap.height));
		return this.__tileRects.length - 1;
	}
	,drawTiles: function(graphics,tileData,smooth,flags,count) {
		if(count == null) count = -1;
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		graphics.drawTiles(this,tileData,smooth,flags,count);
	}
	,getTileCenter: function(index) {
		return this.__centerPoints[index];
	}
	,getTileRect: function(index) {
		return this.__tileRects[index];
	}
	,getTileUVs: function(index) {
		return this.__tileUVs[index];
	}
	,__class__: openfl.display.Tilesheet
};
openfl.display.TriangleCulling = $hxClasses["openfl.display.TriangleCulling"] = { __ename__ : ["openfl","display","TriangleCulling"], __constructs__ : ["NEGATIVE","NONE","POSITIVE"] };
openfl.display.TriangleCulling.NEGATIVE = ["NEGATIVE",0];
openfl.display.TriangleCulling.NEGATIVE.toString = $estr;
openfl.display.TriangleCulling.NEGATIVE.__enum__ = openfl.display.TriangleCulling;
openfl.display.TriangleCulling.NONE = ["NONE",1];
openfl.display.TriangleCulling.NONE.toString = $estr;
openfl.display.TriangleCulling.NONE.__enum__ = openfl.display.TriangleCulling;
openfl.display.TriangleCulling.POSITIVE = ["POSITIVE",2];
openfl.display.TriangleCulling.POSITIVE.toString = $estr;
openfl.display.TriangleCulling.POSITIVE.__enum__ = openfl.display.TriangleCulling;
openfl.errors = {};
openfl.errors.Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
	this.name = "Error";
};
$hxClasses["openfl.errors.Error"] = openfl.errors.Error;
openfl.errors.Error.__name__ = ["openfl","errors","Error"];
openfl.errors.Error.prototype = {
	getStackTrace: function() {
		return haxe.CallStack.toString(haxe.CallStack.exceptionStack());
	}
	,toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,__class__: openfl.errors.Error
};
openfl.errors.IOError = function(message) {
	if(message == null) message = "";
	openfl.errors.Error.call(this,message);
};
$hxClasses["openfl.errors.IOError"] = openfl.errors.IOError;
openfl.errors.IOError.__name__ = ["openfl","errors","IOError"];
openfl.errors.IOError.__super__ = openfl.errors.Error;
openfl.errors.IOError.prototype = $extend(openfl.errors.Error.prototype,{
	__class__: openfl.errors.IOError
});
openfl.errors.RangeError = function(inMessage) {
	if(inMessage == null) inMessage = "";
	openfl.errors.Error.call(this,inMessage,0);
};
$hxClasses["openfl.errors.RangeError"] = openfl.errors.RangeError;
openfl.errors.RangeError.__name__ = ["openfl","errors","RangeError"];
openfl.errors.RangeError.__super__ = openfl.errors.Error;
openfl.errors.RangeError.prototype = $extend(openfl.errors.Error.prototype,{
	__class__: openfl.errors.RangeError
});
openfl.errors.TypeError = function(inMessage) {
	if(inMessage == null) inMessage = "";
	openfl.errors.Error.call(this,inMessage,0);
};
$hxClasses["openfl.errors.TypeError"] = openfl.errors.TypeError;
openfl.errors.TypeError.__name__ = ["openfl","errors","TypeError"];
openfl.errors.TypeError.__super__ = openfl.errors.Error;
openfl.errors.TypeError.prototype = $extend(openfl.errors.Error.prototype,{
	__class__: openfl.errors.TypeError
});
openfl.events.Event = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
	this.eventPhase = 1;
};
$hxClasses["openfl.events.Event"] = openfl.events.Event;
openfl.events.Event.__name__ = ["openfl","events","Event"];
openfl.events.Event.prototype = {
	clone: function() {
		var event = new openfl.events.Event(this.type,this.bubbles,this.cancelable);
		event.eventPhase = this.eventPhase;
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		return event;
	}
	,isDefaultPrevented: function() {
		return this.__isCancelled || this.__isCancelledNow;
	}
	,stopImmediatePropagation: function() {
		this.__isCancelled = true;
		this.__isCancelledNow = true;
	}
	,stopPropagation: function() {
		this.__isCancelled = true;
	}
	,toString: function() {
		return "[Event type=" + this.type + " bubbles=" + Std.string(this.bubbles) + " cancelable=" + Std.string(this.cancelable) + "]";
	}
	,__class__: openfl.events.Event
};
openfl.events.TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["openfl.events.TextEvent"] = openfl.events.TextEvent;
openfl.events.TextEvent.__name__ = ["openfl","events","TextEvent"];
openfl.events.TextEvent.__super__ = openfl.events.Event;
openfl.events.TextEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.TextEvent
});
openfl.events.ErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.TextEvent.call(this,type,bubbles,cancelable);
	this.text = text;
	this.errorID = id;
};
$hxClasses["openfl.events.ErrorEvent"] = openfl.events.ErrorEvent;
openfl.events.ErrorEvent.__name__ = ["openfl","events","ErrorEvent"];
openfl.events.ErrorEvent.__super__ = openfl.events.TextEvent;
openfl.events.ErrorEvent.prototype = $extend(openfl.events.TextEvent.prototype,{
	__class__: openfl.events.ErrorEvent
});
openfl.events._EventDispatcher = {};
openfl.events._EventDispatcher.Listener = function(callback,useCapture,priority) {
	this.callback = callback;
	this.useCapture = useCapture;
	this.priority = priority;
};
$hxClasses["openfl.events._EventDispatcher.Listener"] = openfl.events._EventDispatcher.Listener;
openfl.events._EventDispatcher.Listener.__name__ = ["openfl","events","_EventDispatcher","Listener"];
openfl.events._EventDispatcher.Listener.prototype = {
	match: function(callback,useCapture) {
		return this.callback == callback && this.useCapture == useCapture;
	}
	,__class__: openfl.events._EventDispatcher.Listener
};
openfl.events._EventPhase = {};
openfl.events._EventPhase.EventPhase_Impl_ = function() { };
$hxClasses["openfl.events._EventPhase.EventPhase_Impl_"] = openfl.events._EventPhase.EventPhase_Impl_;
openfl.events._EventPhase.EventPhase_Impl_.__name__ = ["openfl","events","_EventPhase","EventPhase_Impl_"];
openfl.events.FocusEvent = function(type,bubbles,cancelable,relatedObject,shiftKey,keyCode) {
	if(keyCode == null) keyCode = 0;
	if(shiftKey == null) shiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = keyCode;
	if(shiftKey == null) this.shiftKey = false; else this.shiftKey = shiftKey;
	this.relatedObject = relatedObject;
};
$hxClasses["openfl.events.FocusEvent"] = openfl.events.FocusEvent;
openfl.events.FocusEvent.__name__ = ["openfl","events","FocusEvent"];
openfl.events.FocusEvent.__super__ = openfl.events.Event;
openfl.events.FocusEvent.prototype = $extend(openfl.events.Event.prototype,{
	clone: function() {
		var event = new openfl.events.FocusEvent(this.type,this.bubbles,this.cancelable,this.relatedObject,this.shiftKey,this.keyCode);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	}
	,__class__: openfl.events.FocusEvent
});
openfl.events.HTTPStatusEvent = function(type,bubbles,cancelable,status) {
	if(status == null) status = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.status = status;
	openfl.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["openfl.events.HTTPStatusEvent"] = openfl.events.HTTPStatusEvent;
openfl.events.HTTPStatusEvent.__name__ = ["openfl","events","HTTPStatusEvent"];
openfl.events.HTTPStatusEvent.__super__ = openfl.events.Event;
openfl.events.HTTPStatusEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.HTTPStatusEvent
});
openfl.events.IOErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl.events.ErrorEvent.call(this,type,bubbles,cancelable,text,id);
};
$hxClasses["openfl.events.IOErrorEvent"] = openfl.events.IOErrorEvent;
openfl.events.IOErrorEvent.__name__ = ["openfl","events","IOErrorEvent"];
openfl.events.IOErrorEvent.__super__ = openfl.events.ErrorEvent;
openfl.events.IOErrorEvent.prototype = $extend(openfl.events.ErrorEvent.prototype,{
	clone: function() {
		return new openfl.events.IOErrorEvent(this.type,this.bubbles,this.cancelable,this.text,this.errorID);
	}
	,toString: function() {
		return "[IOErrorEvent type=" + this.type + " bubbles=" + Std.string(this.bubbles) + " cancelable=" + Std.string(this.cancelable) + " text=" + this.text + " errorID=" + this.errorID + "]";
	}
	,__class__: openfl.events.IOErrorEvent
});
openfl.events.KeyboardEvent = function(type,bubbles,cancelable,charCodeValue,keyCodeValue,keyLocationValue,ctrlKeyValue,altKeyValue,shiftKeyValue,controlKeyValue,commandKeyValue) {
	if(commandKeyValue == null) commandKeyValue = false;
	if(controlKeyValue == null) controlKeyValue = false;
	if(shiftKeyValue == null) shiftKeyValue = false;
	if(altKeyValue == null) altKeyValue = false;
	if(ctrlKeyValue == null) ctrlKeyValue = false;
	if(keyCodeValue == null) keyCodeValue = 0;
	if(charCodeValue == null) charCodeValue = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.charCode = charCodeValue;
	this.keyCode = keyCodeValue;
	if(keyLocationValue != null) this.keyLocation = keyLocationValue; else this.keyLocation = 0;
	this.ctrlKey = ctrlKeyValue;
	this.altKey = altKeyValue;
	this.shiftKey = shiftKeyValue;
	this.controlKey = controlKeyValue;
	this.commandKey = commandKeyValue;
};
$hxClasses["openfl.events.KeyboardEvent"] = openfl.events.KeyboardEvent;
openfl.events.KeyboardEvent.__name__ = ["openfl","events","KeyboardEvent"];
openfl.events.KeyboardEvent.__super__ = openfl.events.Event;
openfl.events.KeyboardEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.KeyboardEvent
});
openfl.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
};
$hxClasses["openfl.events.MouseEvent"] = openfl.events.MouseEvent;
openfl.events.MouseEvent.__name__ = ["openfl","events","MouseEvent"];
openfl.events.MouseEvent.__buttonDown = null;
openfl.events.MouseEvent.__create = function(type,event,local,target) {
	var delta = 2;
	if(type == openfl.events.MouseEvent.MOUSE_WHEEL) {
		var mouseEvent = event;
		if(mouseEvent.wheelDelta) delta = mouseEvent.wheelDelta / 120 | 0; else if(mouseEvent.detail) -mouseEvent.detail | 0;
	}
	if(type == openfl.events.MouseEvent.MOUSE_DOWN) openfl.events.MouseEvent.__buttonDown = true; else if(type == openfl.events.MouseEvent.MOUSE_UP) openfl.events.MouseEvent.__buttonDown = false;
	var pseudoEvent = new openfl.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,openfl.events.MouseEvent.__buttonDown,delta);
	pseudoEvent.stageX = openfl.Lib.current.stage.get_mouseX();
	pseudoEvent.stageY = openfl.Lib.current.stage.get_mouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
};
openfl.events.MouseEvent.__super__ = openfl.events.Event;
openfl.events.MouseEvent.prototype = $extend(openfl.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,__class__: openfl.events.MouseEvent
});
openfl.events.ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["openfl.events.ProgressEvent"] = openfl.events.ProgressEvent;
openfl.events.ProgressEvent.__name__ = ["openfl","events","ProgressEvent"];
openfl.events.ProgressEvent.__super__ = openfl.events.Event;
openfl.events.ProgressEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.ProgressEvent
});
openfl.events.SecurityErrorEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.ErrorEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["openfl.events.SecurityErrorEvent"] = openfl.events.SecurityErrorEvent;
openfl.events.SecurityErrorEvent.__name__ = ["openfl","events","SecurityErrorEvent"];
openfl.events.SecurityErrorEvent.__super__ = openfl.events.ErrorEvent;
openfl.events.SecurityErrorEvent.prototype = $extend(openfl.events.ErrorEvent.prototype,{
	__class__: openfl.events.SecurityErrorEvent
});
openfl.events.TouchEvent = function(type,bubbles,cancelable,localX,localY,sizeX,sizeY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(sizeY == null) sizeY = 1;
	if(sizeX == null) sizeX = 1;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.pressure = 1;
	this.touchPointID = 0;
	this.isPrimaryTouchPoint = true;
};
$hxClasses["openfl.events.TouchEvent"] = openfl.events.TouchEvent;
openfl.events.TouchEvent.__name__ = ["openfl","events","TouchEvent"];
openfl.events.TouchEvent.__create = function(type,event,touch,local,target) {
	var evt = new openfl.events.TouchEvent(type,true,false,local.x,local.y,null,null,null,event.ctrlKey,event.altKey,event.shiftKey,false,0,null,0);
	evt.stageX = openfl.Lib.current.stage.get_mouseX();
	evt.stageY = openfl.Lib.current.stage.get_mouseY();
	evt.target = target;
	return evt;
};
openfl.events.TouchEvent.__super__ = openfl.events.Event;
openfl.events.TouchEvent.prototype = $extend(openfl.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,__class__: openfl.events.TouchEvent
});
openfl.filters = {};
openfl.filters.BitmapFilter = function() {
};
$hxClasses["openfl.filters.BitmapFilter"] = openfl.filters.BitmapFilter;
openfl.filters.BitmapFilter.__name__ = ["openfl","filters","BitmapFilter"];
openfl.filters.BitmapFilter.prototype = {
	clone: function() {
		return new openfl.filters.BitmapFilter();
	}
	,__applyFilter: function(sourceData,targetData,sourceRect,destPoint) {
	}
	,__class__: openfl.filters.BitmapFilter
};
openfl.geom = {};
openfl.geom.ColorTransform = function(redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset) {
	if(alphaOffset == null) alphaOffset = 0;
	if(blueOffset == null) blueOffset = 0;
	if(greenOffset == null) greenOffset = 0;
	if(redOffset == null) redOffset = 0;
	if(alphaMultiplier == null) alphaMultiplier = 1;
	if(blueMultiplier == null) blueMultiplier = 1;
	if(greenMultiplier == null) greenMultiplier = 1;
	if(redMultiplier == null) redMultiplier = 1;
	this.redMultiplier = redMultiplier;
	this.greenMultiplier = greenMultiplier;
	this.blueMultiplier = blueMultiplier;
	this.alphaMultiplier = alphaMultiplier;
	this.redOffset = redOffset;
	this.greenOffset = greenOffset;
	this.blueOffset = blueOffset;
	this.alphaOffset = alphaOffset;
};
$hxClasses["openfl.geom.ColorTransform"] = openfl.geom.ColorTransform;
openfl.geom.ColorTransform.__name__ = ["openfl","geom","ColorTransform"];
openfl.geom.ColorTransform.prototype = {
	concat: function(second) {
		this.redMultiplier += second.redMultiplier;
		this.greenMultiplier += second.greenMultiplier;
		this.blueMultiplier += second.blueMultiplier;
		this.alphaMultiplier += second.alphaMultiplier;
	}
	,get_color: function() {
		return (this.redOffset | 0) << 16 | (this.greenOffset | 0) << 8 | (this.blueOffset | 0);
	}
	,set_color: function(value) {
		this.redOffset = value >> 16 & 255;
		this.greenOffset = value >> 8 & 255;
		this.blueOffset = value & 255;
		this.redMultiplier = 0;
		this.greenMultiplier = 0;
		this.blueMultiplier = 0;
		return this.get_color();
	}
	,__class__: openfl.geom.ColorTransform
};
openfl.geom.Matrix = function(a,b,c,d,tx,ty) {
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(d == null) d = 1;
	if(c == null) c = 0;
	if(b == null) b = 0;
	if(a == null) a = 1;
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = tx;
	this.ty = ty;
};
$hxClasses["openfl.geom.Matrix"] = openfl.geom.Matrix;
openfl.geom.Matrix.__name__ = ["openfl","geom","Matrix"];
openfl.geom.Matrix.prototype = {
	clone: function() {
		return new openfl.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.ty = this.tx * m.b + this.ty * m.d + m.ty;
		this.tx = tx1;
	}
	,copyColumnFrom: function(column,vector3D) {
		if(column > 2) throw "Column " + column + " out of bounds (2)"; else if(column == 0) {
			this.a = vector3D.x;
			this.c = vector3D.y;
		} else if(column == 1) {
			this.b = vector3D.x;
			this.d = vector3D.y;
		} else {
			this.tx = vector3D.x;
			this.ty = vector3D.y;
		}
	}
	,copyColumnTo: function(column,vector3D) {
		if(column > 2) throw "Column " + column + " out of bounds (2)"; else if(column == 0) {
			vector3D.x = this.a;
			vector3D.y = this.c;
			vector3D.z = 0;
		} else if(column == 1) {
			vector3D.x = this.b;
			vector3D.y = this.d;
			vector3D.z = 0;
		} else {
			vector3D.x = this.tx;
			vector3D.y = this.ty;
			vector3D.z = 1;
		}
	}
	,copyFrom: function(sourceMatrix) {
		this.a = sourceMatrix.a;
		this.b = sourceMatrix.b;
		this.c = sourceMatrix.c;
		this.d = sourceMatrix.d;
		this.tx = sourceMatrix.tx;
		this.ty = sourceMatrix.ty;
	}
	,copyRowFrom: function(row,vector3D) {
		if(row > 2) throw "Row " + row + " out of bounds (2)"; else if(row == 0) {
			this.a = vector3D.x;
			this.c = vector3D.y;
		} else if(row == 1) {
			this.b = vector3D.x;
			this.d = vector3D.y;
		} else {
			this.tx = vector3D.x;
			this.ty = vector3D.y;
		}
	}
	,copyRowTo: function(row,vector3D) {
		if(row > 2) throw "Row " + row + " out of bounds (2)"; else if(row == 0) {
			vector3D.x = this.a;
			vector3D.y = this.b;
			vector3D.z = this.tx;
		} else if(row == 1) {
			vector3D.x = this.c;
			vector3D.y = this.d;
			vector3D.z = this.ty;
		} else {
			vector3D.x = 0;
			vector3D.y = 0;
			vector3D.z = 1;
		}
	}
	,createBox: function(scaleX,scaleY,rotation,tx,ty) {
		if(ty == null) ty = 0;
		if(tx == null) tx = 0;
		if(rotation == null) rotation = 0;
		this.a = scaleX;
		this.d = scaleY;
		this.b = rotation;
		this.tx = tx;
		this.ty = ty;
	}
	,createGradientBox: function(width,height,rotation,tx,ty) {
		if(ty == null) ty = 0;
		if(tx == null) tx = 0;
		if(rotation == null) rotation = 0;
		this.a = width / 1638.4;
		this.d = height / 1638.4;
		if(rotation != 0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.b = sin * this.d;
			this.c = -sin * this.a;
			this.a *= cos;
			this.d *= cos;
		} else {
			this.b = 0;
			this.c = 0;
		}
		this.tx = tx + width / 2;
		this.ty = ty + height / 2;
	}
	,equals: function(matrix) {
		return matrix != null && this.tx == matrix.tx && this.ty == matrix.ty && this.a == matrix.a && this.b == matrix.b && this.c == matrix.c && this.d == matrix.d;
	}
	,deltaTransformPoint: function(point) {
		return new openfl.geom.Point(point.x * this.a + point.y * this.c,point.x * this.b + point.y * this.d);
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.tx = 0;
		this.ty = 0;
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.tx = -this.tx;
			this.ty = -this.ty;
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.ty = -this.b * this.tx - this.d * this.ty;
			this.tx = tx1;
		}
		return this;
	}
	,mult: function(m) {
		var result = new openfl.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
		result.concat(m);
		return result;
	}
	,rotate: function(theta) {
		var cos = Math.cos(theta);
		var sin = Math.sin(theta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.ty = this.tx * sin + this.ty * cos;
		this.tx = tx1;
	}
	,scale: function(sx,sy) {
		this.a *= sx;
		this.b *= sy;
		this.c *= sx;
		this.d *= sy;
		this.tx *= sx;
		this.ty *= sy;
	}
	,setRotation: function(theta,scale) {
		if(scale == null) scale = 1;
		this.a = Math.cos(theta) * scale;
		this.c = Math.sin(theta) * scale;
		this.b = -this.c;
		this.d = this.a;
	}
	,setTo: function(a,b,c,d,tx,ty) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
	}
	,to3DString: function(roundPixels) {
		if(roundPixels == null) roundPixels = false;
		if(roundPixels) return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + (this.tx | 0) + ", " + (this.ty | 0) + ", 0, 1)"; else return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", 0, 1)";
	}
	,toMozString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + "px, " + this.ty + "px)";
	}
	,toString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	}
	,transformPoint: function(pos) {
		return new openfl.geom.Point(pos.x * this.a + pos.y * this.c + this.tx,pos.x * this.b + pos.y * this.d + this.ty);
	}
	,translate: function(dx,dy) {
		var m = new openfl.geom.Matrix();
		m.tx = dx;
		m.ty = dy;
		this.concat(m);
	}
	,__cleanValues: function() {
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.tx = Math.round(this.tx * 10) / 10;
		this.ty = Math.round(this.ty * 10) / 10;
	}
	,__transformX: function(pos) {
		return pos.x * this.a + pos.y * this.c + this.tx;
	}
	,__transformY: function(pos) {
		return pos.x * this.b + pos.y * this.d + this.ty;
	}
	,__translateTransformed: function(pos) {
		this.tx = pos.x * this.a + pos.y * this.c + this.tx;
		this.ty = pos.x * this.b + pos.y * this.d + this.ty;
	}
	,__class__: openfl.geom.Matrix
};
openfl.geom.Point = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
};
$hxClasses["openfl.geom.Point"] = openfl.geom.Point;
openfl.geom.Point.__name__ = ["openfl","geom","Point"];
openfl.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
};
openfl.geom.Point.interpolate = function(pt1,pt2,f) {
	return new openfl.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
};
openfl.geom.Point.polar = function(len,angle) {
	return new openfl.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
};
openfl.geom.Point.prototype = {
	add: function(v) {
		return new openfl.geom.Point(v.x + this.x,v.y + this.y);
	}
	,clone: function() {
		return new openfl.geom.Point(this.x,this.y);
	}
	,equals: function(toCompare) {
		return toCompare != null && toCompare.x == this.x && toCompare.y == this.y;
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
	,setTo: function(xa,ya) {
		this.x = xa;
		this.y = ya;
	}
	,subtract: function(v) {
		return new openfl.geom.Point(this.x - v.x,this.y - v.y);
	}
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,__class__: openfl.geom.Point
};
openfl.geom.Rectangle = function(x,y,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
$hxClasses["openfl.geom.Rectangle"] = openfl.geom.Rectangle;
openfl.geom.Rectangle.__name__ = ["openfl","geom","Rectangle"];
openfl.geom.Rectangle.prototype = {
	clone: function() {
		return new openfl.geom.Rectangle(this.x,this.y,this.width,this.height);
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
		return toCompare != null && this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
	}
	,inflate: function(dx,dy) {
		this.x -= dx;
		this.width += dx * 2;
		this.y -= dy;
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
		if(x1 <= x0) return new openfl.geom.Rectangle();
		var y0;
		if(this.y < toIntersect.y) y0 = toIntersect.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() > toIntersect.get_bottom()) y1 = toIntersect.get_bottom(); else y1 = this.get_bottom();
		if(y1 <= y0) return new openfl.geom.Rectangle();
		return new openfl.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
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
		this.x += dx;
		this.y += dy;
	}
	,offsetPoint: function(point) {
		this.x += point.x;
		this.y += point.y;
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,setTo: function(xa,ya,widtha,heighta) {
		this.x = xa;
		this.y = ya;
		this.width = widtha;
		this.height = heighta;
	}
	,transform: function(m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = tx0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		return new openfl.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,union: function(toUnion) {
		if(this.width == 0 || this.height == 0) return toUnion.clone(); else if(toUnion.width == 0 || toUnion.height == 0) return this.clone();
		var x0;
		if(this.x > toUnion.x) x0 = toUnion.x; else x0 = this.x;
		var x1;
		if(this.get_right() < toUnion.get_right()) x1 = toUnion.get_right(); else x1 = this.get_right();
		var y0;
		if(this.y > toUnion.y) y0 = toUnion.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() < toUnion.get_bottom()) y1 = toUnion.get_bottom(); else y1 = this.get_bottom();
		return new openfl.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,__contract: function(x,y,width,height) {
		if(this.width == 0 && this.height == 0) return;
		var cacheRight = this.get_right();
		var cacheBottom = this.get_bottom();
		if(this.x < x) this.x = x;
		if(this.y < y) this.y = y;
		if(this.get_right() > x + width) this.width = x + width - this.x;
		if(this.get_bottom() > y + height) this.height = y + height - this.y;
	}
	,__expand: function(x,y,width,height) {
		if(this.width == 0 && this.height == 0) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			return;
		}
		var cacheRight = this.get_right();
		var cacheBottom = this.get_bottom();
		if(this.x > x) this.x = x;
		if(this.y > y) this.y = y;
		if(cacheRight < x + width) this.width = x + width - this.x;
		if(cacheBottom < y + height) this.height = y + height - this.y;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,set_bottom: function(b) {
		this.height = b - this.y;
		return b;
	}
	,get_bottomRight: function() {
		return new openfl.geom.Point(this.x + this.width,this.y + this.height);
	}
	,set_bottomRight: function(p) {
		this.width = p.x - this.x;
		this.height = p.y - this.y;
		return p.clone();
	}
	,get_left: function() {
		return this.x;
	}
	,set_left: function(l) {
		this.width -= l - this.x;
		this.x = l;
		return l;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_right: function(r) {
		this.width = r - this.x;
		return r;
	}
	,get_size: function() {
		return new openfl.geom.Point(this.width,this.height);
	}
	,set_size: function(p) {
		this.width = p.x;
		this.height = p.y;
		return p.clone();
	}
	,get_top: function() {
		return this.y;
	}
	,set_top: function(t) {
		this.height -= t - this.y;
		this.y = t;
		return t;
	}
	,get_topLeft: function() {
		return new openfl.geom.Point(this.x,this.y);
	}
	,set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
	,__class__: openfl.geom.Rectangle
};
openfl.geom.Transform = function(displayObject) {
	this.colorTransform = new openfl.geom.ColorTransform();
	this.concatenatedColorTransform = new openfl.geom.ColorTransform();
	this.concatenatedMatrix = new openfl.geom.Matrix();
	this.pixelBounds = new openfl.geom.Rectangle();
	this.__displayObject = displayObject;
	this.__matrix = new openfl.geom.Matrix();
};
$hxClasses["openfl.geom.Transform"] = openfl.geom.Transform;
openfl.geom.Transform.__name__ = ["openfl","geom","Transform"];
openfl.geom.Transform.prototype = {
	get_matrix: function() {
		if(this.__matrix != null) {
			this.__matrix.identity();
			this.__matrix.scale(this.__displayObject.get_scaleX(),this.__displayObject.get_scaleY());
			this.__matrix.rotate(this.__displayObject.get_rotation() * (Math.PI / 180));
			this.__matrix.translate(this.__displayObject.get_x(),this.__displayObject.get_y());
			return this.__matrix.clone();
		}
		return null;
	}
	,set_matrix: function(value) {
		if(value == null) return this.__matrix = null;
		if(this.__displayObject != null) {
			this.__displayObject.set_x(value.tx);
			this.__displayObject.set_y(value.ty);
			this.__displayObject.set_scaleX(Math.sqrt(value.a * value.a + value.b * value.b));
			this.__displayObject.set_scaleY(Math.sqrt(value.c * value.c + value.d * value.d));
			this.__displayObject.set_rotation(Math.atan2(value.b,value.a) * (180 / Math.PI));
		}
		return value;
	}
	,__class__: openfl.geom.Transform
};
openfl.geom.Vector3D = function(x,y,z,w) {
	if(w == null) w = 0.;
	if(z == null) z = 0.;
	if(y == null) y = 0.;
	if(x == null) x = 0.;
	this.w = w;
	this.x = x;
	this.y = y;
	this.z = z;
};
$hxClasses["openfl.geom.Vector3D"] = openfl.geom.Vector3D;
openfl.geom.Vector3D.__name__ = ["openfl","geom","Vector3D"];
openfl.geom.Vector3D.X_AXIS = null;
openfl.geom.Vector3D.Y_AXIS = null;
openfl.geom.Vector3D.Z_AXIS = null;
openfl.geom.Vector3D.angleBetween = function(a,b) {
	var a0 = new openfl.geom.Vector3D(a.x,a.y,a.z,a.w);
	a0.normalize();
	var b0 = new openfl.geom.Vector3D(b.x,b.y,b.z,b.w);
	b0.normalize();
	return Math.acos(a0.x * b0.x + a0.y * b0.y + a0.z * b0.z);
};
openfl.geom.Vector3D.distance = function(pt1,pt2) {
	var x = pt2.x - pt1.x;
	var y = pt2.y - pt1.y;
	var z = pt2.z - pt1.z;
	return Math.sqrt(x * x + y * y + z * z);
};
openfl.geom.Vector3D.get_X_AXIS = function() {
	return new openfl.geom.Vector3D(1,0,0);
};
openfl.geom.Vector3D.get_Y_AXIS = function() {
	return new openfl.geom.Vector3D(0,1,0);
};
openfl.geom.Vector3D.get_Z_AXIS = function() {
	return new openfl.geom.Vector3D(0,0,1);
};
openfl.geom.Vector3D.prototype = {
	add: function(a) {
		return new openfl.geom.Vector3D(this.x + a.x,this.y + a.y,this.z + a.z);
	}
	,clone: function() {
		return new openfl.geom.Vector3D(this.x,this.y,this.z,this.w);
	}
	,copyFrom: function(sourceVector3D) {
		this.x = sourceVector3D.x;
		this.y = sourceVector3D.y;
		this.z = sourceVector3D.z;
	}
	,crossProduct: function(a) {
		return new openfl.geom.Vector3D(this.y * a.z - this.z * a.y,this.z * a.x - this.x * a.z,this.x * a.y - this.y * a.x,1);
	}
	,decrementBy: function(a) {
		this.x -= a.x;
		this.y -= a.y;
		this.z -= a.z;
	}
	,dotProduct: function(a) {
		return this.x * a.x + this.y * a.y + this.z * a.z;
	}
	,equals: function(toCompare,allFour) {
		if(allFour == null) allFour = false;
		return this.x == toCompare.x && this.y == toCompare.y && this.z == toCompare.z && (!allFour || this.w == toCompare.w);
	}
	,incrementBy: function(a) {
		this.x += a.x;
		this.y += a.y;
		this.z += a.z;
	}
	,nearEquals: function(toCompare,tolerance,allFour) {
		if(allFour == null) allFour = false;
		return Math.abs(this.x - toCompare.x) < tolerance && Math.abs(this.y - toCompare.y) < tolerance && Math.abs(this.z - toCompare.z) < tolerance && (!allFour || Math.abs(this.w - toCompare.w) < tolerance);
	}
	,negate: function() {
		this.x *= -1;
		this.y *= -1;
		this.z *= -1;
	}
	,normalize: function() {
		var l = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
		if(l != 0) {
			this.x /= l;
			this.y /= l;
			this.z /= l;
		}
		return l;
	}
	,project: function() {
		this.x /= this.w;
		this.y /= this.w;
		this.z /= this.w;
	}
	,scaleBy: function(s) {
		this.x *= s;
		this.y *= s;
		this.z *= s;
	}
	,setTo: function(xa,ya,za) {
		this.x = xa;
		this.y = ya;
		this.z = za;
	}
	,subtract: function(a) {
		return new openfl.geom.Vector3D(this.x - a.x,this.y - a.y,this.z - a.z);
	}
	,toString: function() {
		return "Vector3D(" + this.x + ", " + this.y + ", " + this.z + ")";
	}
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	,get_lengthSquared: function() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	,__class__: openfl.geom.Vector3D
};
openfl.media = {};
openfl.media.ID3Info = function() {
};
$hxClasses["openfl.media.ID3Info"] = openfl.media.ID3Info;
openfl.media.ID3Info.__name__ = ["openfl","media","ID3Info"];
openfl.media.ID3Info.prototype = {
	__class__: openfl.media.ID3Info
};
openfl.media.Sound = function(stream,context) {
	openfl.events.EventDispatcher.call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.id3 = null;
	this.isBuffering = false;
	this.length = 0;
	this.url = null;
	if(stream != null) this.load(stream,context);
};
$hxClasses["openfl.media.Sound"] = openfl.media.Sound;
openfl.media.Sound.__name__ = ["openfl","media","Sound"];
openfl.media.Sound.__super__ = openfl.events.EventDispatcher;
openfl.media.Sound.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	close: function() {
		if(openfl.media.Sound.__registeredSounds.exists(this.__soundID)) createjs.Sound.removeSound(this.__soundID);
	}
	,load: function(stream,context) {
		this.url = stream.url;
		this.__soundID = haxe.io.Path.withoutExtension(stream.url);
		if(!openfl.media.Sound.__registeredSounds.exists(this.__soundID)) {
			openfl.media.Sound.__registeredSounds.set(this.__soundID,true);
			createjs.Sound.addEventListener("fileload",$bind(this,this.SoundJS_onFileLoad));
			createjs.Sound.registerSound(this.url,this.__soundID);
		} else this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
	}
	,loadCompressedDataFromByteArray: function(bytes,bytesLength) {
		openfl.Lib.notImplemented("Sound.loadCompressedDataFromByteArray");
	}
	,loadPCMFromByteArray: function(bytes,samples,format,stereo,sampleRate) {
		if(sampleRate == null) sampleRate = 44100;
		if(stereo == null) stereo = true;
		openfl.Lib.notImplemented("Sound.loadPCMFromByteArray");
	}
	,play: function(startTime,loops,sndTransform) {
		if(loops == null) loops = 0;
		if(startTime == null) startTime = 0.0;
		if(sndTransform == null) sndTransform = new openfl.media.SoundTransform(1,0);
		var instance = createjs.Sound.play(this.__soundID,"any",0,startTime | 0,loops,sndTransform.volume,sndTransform.pan);
		return new openfl.media.SoundChannel(instance);
	}
	,get_id3: function() {
		return new openfl.media.ID3Info();
	}
	,SoundJS_onFileLoad: function(event) {
		if(event.id == this.__soundID) {
			createjs.Sound.removeEventListener("fileload",$bind(this,this.SoundJS_onFileLoad));
			this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
		}
	}
	,__class__: openfl.media.Sound
});
openfl.media.SoundChannel = function(soundInstance) {
	openfl.events.EventDispatcher.call(this,this);
	this.__soundInstance = soundInstance;
	this.__soundInstance.addEventListener("complete",$bind(this,this.soundInstance_onComplete));
};
$hxClasses["openfl.media.SoundChannel"] = openfl.media.SoundChannel;
openfl.media.SoundChannel.__name__ = ["openfl","media","SoundChannel"];
openfl.media.SoundChannel.__super__ = openfl.events.EventDispatcher;
openfl.media.SoundChannel.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	stop: function() {
		this.__soundInstance.stop();
	}
	,__dispose: function() {
		this.__soundInstance.stop();
		this.__soundInstance = null;
	}
	,get_position: function() {
		return this.__soundInstance.getPosition();
	}
	,set_position: function(value) {
		this.__soundInstance.setPosition(value | 0);
		return this.__soundInstance.getPosition();
	}
	,get_soundTransform: function() {
		return new openfl.media.SoundTransform(this.__soundInstance.getVolume(),this.__soundInstance.getPan());
	}
	,set_soundTransform: function(value) {
		this.__soundInstance.setVolume(value.volume);
		this.__soundInstance.setPan(value.pan);
		return value;
	}
	,soundInstance_onComplete: function(_) {
		this.dispatchEvent(new openfl.events.Event(openfl.events.Event.SOUND_COMPLETE));
	}
	,__class__: openfl.media.SoundChannel
});
openfl.media.SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	if(bufferTime == null) bufferTime = 0;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["openfl.media.SoundLoaderContext"] = openfl.media.SoundLoaderContext;
openfl.media.SoundLoaderContext.__name__ = ["openfl","media","SoundLoaderContext"];
openfl.media.SoundLoaderContext.prototype = {
	__class__: openfl.media.SoundLoaderContext
};
openfl.media.SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
	this.volume = vol;
	this.pan = panning;
	this.leftToLeft = 0;
	this.leftToRight = 0;
	this.rightToLeft = 0;
	this.rightToRight = 0;
};
$hxClasses["openfl.media.SoundTransform"] = openfl.media.SoundTransform;
openfl.media.SoundTransform.__name__ = ["openfl","media","SoundTransform"];
openfl.media.SoundTransform.prototype = {
	__class__: openfl.media.SoundTransform
};
openfl.net = {};
openfl.net.URLLoader = function(request) {
	openfl.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.set_dataFormat(openfl.net.URLLoaderDataFormat.TEXT);
	if(request != null) this.load(request);
};
$hxClasses["openfl.net.URLLoader"] = openfl.net.URLLoader;
openfl.net.URLLoader.__name__ = ["openfl","net","URLLoader"];
openfl.net.URLLoader.__super__ = openfl.events.EventDispatcher;
openfl.net.URLLoader.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	close: function() {
	}
	,getData: function() {
		return null;
	}
	,load: function(request) {
		this.requestUrl(request.url,request.method,request.data,request.formatRequestHeaders());
	}
	,registerEvents: function(subject) {
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState != 4) return;
			var s;
			try {
				s = subject.status;
			} catch( e ) {
				s = null;
			}
			if(s == undefined) s = null;
			if(s != null) self.onStatus(s);
			if(s != null && s >= 200 && s < 400) self.onData(subject.response); else if(s == null) self.onError("Failed to connect or resolve host"); else if(s == 12029) self.onError("Failed to connect to host"); else if(s == 12007) self.onError("Unknown host"); else if(s == 0) {
				self.onError("Unable to make request (may be blocked due to cross-domain permissions)");
				self.onSecurityError("Unable to make request (may be blocked due to cross-domain permissions)");
			} else self.onError("Http Error #" + subject.status);
		};
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js.Boot.__instanceof(data,openfl.utils.ByteArray)) {
			var data1 = data;
			var _g = this.dataFormat;
			switch(_g[1]) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js.Boot.__instanceof(data,openfl.net.URLVariables)) {
			var data2 = data;
			var _g1 = 0;
			var _g11 = Reflect.fields(data2);
			while(_g1 < _g11.length) {
				var p = _g11[_g1];
				++_g1;
				if(uri.length != 0) uri += "&";
				uri += encodeURIComponent(p) + "=" + StringTools.urlEncode(Reflect.field(data2,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open(method,url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(method,url,true);
		} catch( e ) {
			this.onError(e.toString());
			return;
		}
		var _g2 = this.dataFormat;
		switch(_g2[1]) {
		case 0:
			xmlHttpRequest.responseType = "arraybuffer";
			break;
		default:
		}
		var _g3 = 0;
		while(_g3 < requestHeaders.length) {
			var header = requestHeaders[_g3];
			++_g3;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		this.onOpen();
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
	}
	,onData: function(_) {
		var content = this.getData();
		var _g = this.dataFormat;
		switch(_g[1]) {
		case 0:
			this.data = openfl.utils.ByteArray.__ofBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var evt = new openfl.events.Event(openfl.events.Event.COMPLETE);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onError: function(msg) {
		var evt = new openfl.events.IOErrorEvent(openfl.events.IOErrorEvent.IO_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onOpen: function() {
		var evt = new openfl.events.Event(openfl.events.Event.OPEN);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onProgress: function(event) {
		var evt = new openfl.events.ProgressEvent(openfl.events.ProgressEvent.PROGRESS);
		evt.currentTarget = this;
		evt.bytesLoaded = event.loaded;
		evt.bytesTotal = event.total;
		this.dispatchEvent(evt);
	}
	,onSecurityError: function(msg) {
		var evt = new openfl.events.SecurityErrorEvent(openfl.events.SecurityErrorEvent.SECURITY_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onStatus: function(status) {
		var evt = new openfl.events.HTTPStatusEvent(openfl.events.HTTPStatusEvent.HTTP_STATUS,false,false,status);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,set_dataFormat: function(inputVal) {
		if(inputVal == openfl.net.URLLoaderDataFormat.BINARY && !Reflect.hasField(window,"ArrayBuffer")) this.dataFormat = openfl.net.URLLoaderDataFormat.TEXT; else this.dataFormat = inputVal;
		return this.dataFormat;
	}
	,__class__: openfl.net.URLLoader
});
openfl.net.URLLoaderDataFormat = $hxClasses["openfl.net.URLLoaderDataFormat"] = { __ename__ : ["openfl","net","URLLoaderDataFormat"], __constructs__ : ["BINARY","TEXT","VARIABLES"] };
openfl.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
openfl.net.URLLoaderDataFormat.BINARY.toString = $estr;
openfl.net.URLLoaderDataFormat.BINARY.__enum__ = openfl.net.URLLoaderDataFormat;
openfl.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
openfl.net.URLLoaderDataFormat.TEXT.toString = $estr;
openfl.net.URLLoaderDataFormat.TEXT.__enum__ = openfl.net.URLLoaderDataFormat;
openfl.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
openfl.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
openfl.net.URLLoaderDataFormat.VARIABLES.__enum__ = openfl.net.URLLoaderDataFormat;
openfl.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = openfl.net.URLRequestMethod.GET;
	this.contentType = null;
};
$hxClasses["openfl.net.URLRequest"] = openfl.net.URLRequest;
openfl.net.URLRequest.__name__ = ["openfl","net","URLRequest"];
openfl.net.URLRequest.prototype = {
	formatRequestHeaders: function() {
		var res = this.requestHeaders;
		if(res == null) res = [];
		if(this.method == openfl.net.URLRequestMethod.GET || this.data == null) return res;
		if(typeof(this.data) == "string" || js.Boot.__instanceof(this.data,openfl.utils.ByteArray)) {
			res = res.slice();
			res.push(new openfl.net.URLRequestHeader("Content-Type",this.contentType != null?this.contentType:"application/x-www-form-urlencoded"));
		}
		return res;
	}
	,__class__: openfl.net.URLRequest
};
openfl.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["openfl.net.URLRequestHeader"] = openfl.net.URLRequestHeader;
openfl.net.URLRequestHeader.__name__ = ["openfl","net","URLRequestHeader"];
openfl.net.URLRequestHeader.prototype = {
	__class__: openfl.net.URLRequestHeader
};
openfl.net.URLRequestMethod = function() { };
$hxClasses["openfl.net.URLRequestMethod"] = openfl.net.URLRequestMethod;
openfl.net.URLRequestMethod.__name__ = ["openfl","net","URLRequestMethod"];
openfl.net.URLVariables = function(inEncoded) {
	if(inEncoded != null) this.decode(inEncoded);
};
$hxClasses["openfl.net.URLVariables"] = openfl.net.URLVariables;
openfl.net.URLVariables.__name__ = ["openfl","net","URLVariables"];
openfl.net.URLVariables.prototype = {
	decode: function(inVars) {
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			Reflect.deleteField(this,f);
		}
		var fields1 = inVars.split(";").join("&").split("&");
		var _g1 = 0;
		while(_g1 < fields1.length) {
			var f1 = fields1[_g1];
			++_g1;
			var eq = f1.indexOf("=");
			if(eq > 0) Reflect.setField(this,StringTools.urlDecode(HxOverrides.substr(f1,0,eq)),StringTools.urlDecode(HxOverrides.substr(f1,eq + 1,null))); else if(eq != 0) Reflect.setField(this,decodeURIComponent(f1.split("+").join(" ")),"");
		}
	}
	,toString: function() {
		var result = new Array();
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			result.push(encodeURIComponent(f) + "=" + StringTools.urlEncode(Reflect.field(this,f)));
		}
		return result.join("&");
	}
	,__class__: openfl.net.URLVariables
};
openfl.system = {};
openfl.system.ApplicationDomain = function(parentDomain) {
	if(parentDomain != null) this.parentDomain = parentDomain; else this.parentDomain = openfl.system.ApplicationDomain.currentDomain;
};
$hxClasses["openfl.system.ApplicationDomain"] = openfl.system.ApplicationDomain;
openfl.system.ApplicationDomain.__name__ = ["openfl","system","ApplicationDomain"];
openfl.system.ApplicationDomain.prototype = {
	getDefinition: function(name) {
		return Type.resolveClass(name);
	}
	,hasDefinition: function(name) {
		return Type.resolveClass(name) != null;
	}
	,__class__: openfl.system.ApplicationDomain
};
openfl.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
	this.securityDomain = securityDomain;
	this.applicationDomain = applicationDomain;
	this.allowCodeImport = true;
	this.allowLoadBytesCodeExecution = true;
};
$hxClasses["openfl.system.LoaderContext"] = openfl.system.LoaderContext;
openfl.system.LoaderContext.__name__ = ["openfl","system","LoaderContext"];
openfl.system.LoaderContext.prototype = {
	__class__: openfl.system.LoaderContext
};
openfl.system.SecurityDomain = function() {
};
$hxClasses["openfl.system.SecurityDomain"] = openfl.system.SecurityDomain;
openfl.system.SecurityDomain.__name__ = ["openfl","system","SecurityDomain"];
openfl.system.SecurityDomain.prototype = {
	__class__: openfl.system.SecurityDomain
};
openfl.text = {};
openfl.text._AntiAliasType = {};
openfl.text._AntiAliasType.AntiAliasType_Impl_ = function() { };
$hxClasses["openfl.text._AntiAliasType.AntiAliasType_Impl_"] = openfl.text._AntiAliasType.AntiAliasType_Impl_;
openfl.text._AntiAliasType.AntiAliasType_Impl_.__name__ = ["openfl","text","_AntiAliasType","AntiAliasType_Impl_"];
openfl.text.Font = function() {
};
$hxClasses["openfl.text.Font"] = openfl.text.Font;
openfl.text.Font.__name__ = ["openfl","text","Font"];
openfl.text.Font.enumerateFonts = function(enumerateDeviceFonts) {
	if(enumerateDeviceFonts == null) enumerateDeviceFonts = false;
	return [];
};
openfl.text.Font.registerFont = function(font) {
};
openfl.text.Font.prototype = {
	__class__: openfl.text.Font
};
openfl.text.FontStyle = $hxClasses["openfl.text.FontStyle"] = { __ename__ : ["openfl","text","FontStyle"], __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] };
openfl.text.FontStyle.REGULAR = ["REGULAR",0];
openfl.text.FontStyle.REGULAR.toString = $estr;
openfl.text.FontStyle.REGULAR.__enum__ = openfl.text.FontStyle;
openfl.text.FontStyle.ITALIC = ["ITALIC",1];
openfl.text.FontStyle.ITALIC.toString = $estr;
openfl.text.FontStyle.ITALIC.__enum__ = openfl.text.FontStyle;
openfl.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
openfl.text.FontStyle.BOLD_ITALIC.toString = $estr;
openfl.text.FontStyle.BOLD_ITALIC.__enum__ = openfl.text.FontStyle;
openfl.text.FontStyle.BOLD = ["BOLD",3];
openfl.text.FontStyle.BOLD.toString = $estr;
openfl.text.FontStyle.BOLD.__enum__ = openfl.text.FontStyle;
openfl.text.FontType = $hxClasses["openfl.text.FontType"] = { __ename__ : ["openfl","text","FontType"], __constructs__ : ["DEVICE","EMBEDDED","EMBEDDED_CFF"] };
openfl.text.FontType.DEVICE = ["DEVICE",0];
openfl.text.FontType.DEVICE.toString = $estr;
openfl.text.FontType.DEVICE.__enum__ = openfl.text.FontType;
openfl.text.FontType.EMBEDDED = ["EMBEDDED",1];
openfl.text.FontType.EMBEDDED.toString = $estr;
openfl.text.FontType.EMBEDDED.__enum__ = openfl.text.FontType;
openfl.text.FontType.EMBEDDED_CFF = ["EMBEDDED_CFF",2];
openfl.text.FontType.EMBEDDED_CFF.toString = $estr;
openfl.text.FontType.EMBEDDED_CFF.__enum__ = openfl.text.FontType;
openfl.text.GridFitType = $hxClasses["openfl.text.GridFitType"] = { __ename__ : ["openfl","text","GridFitType"], __constructs__ : ["NONE","PIXEL","SUBPIXEL"] };
openfl.text.GridFitType.NONE = ["NONE",0];
openfl.text.GridFitType.NONE.toString = $estr;
openfl.text.GridFitType.NONE.__enum__ = openfl.text.GridFitType;
openfl.text.GridFitType.PIXEL = ["PIXEL",1];
openfl.text.GridFitType.PIXEL.toString = $estr;
openfl.text.GridFitType.PIXEL.__enum__ = openfl.text.GridFitType;
openfl.text.GridFitType.SUBPIXEL = ["SUBPIXEL",2];
openfl.text.GridFitType.SUBPIXEL.toString = $estr;
openfl.text.GridFitType.SUBPIXEL.__enum__ = openfl.text.GridFitType;
openfl.text.TextField = function() {
	openfl.display.InteractiveObject.call(this);
	this.__width = 100;
	this.__height = 100;
	this.__text = "";
	this.set_type(openfl.text.TextFieldType.DYNAMIC);
	this.set_autoSize(openfl.text.TextFieldAutoSize.NONE);
	this.displayAsPassword = false;
	this.embedFonts = false;
	this.selectable = true;
	this.set_borderColor(0);
	this.set_border(false);
	this.set_backgroundColor(16777215);
	this.set_background(false);
	this.gridFitType = openfl.text.GridFitType.PIXEL;
	this.maxChars = 0;
	this.multiline = false;
	this.sharpness = 0;
	this.scrollH = 0;
	this.scrollV = 1;
	this.set_wordWrap(false);
	if(openfl.text.TextField.__defaultTextFormat == null) {
		openfl.text.TextField.__defaultTextFormat = new openfl.text.TextFormat("Times New Roman",12,0,false,false,false,"","",openfl.text.TextFormatAlign.LEFT,0,0,0,0);
		openfl.text.TextField.__defaultTextFormat.blockIndent = 0;
		openfl.text.TextField.__defaultTextFormat.bullet = false;
		openfl.text.TextField.__defaultTextFormat.letterSpacing = 0;
		openfl.text.TextField.__defaultTextFormat.kerning = false;
	}
	this.__textFormat = openfl.text.TextField.__defaultTextFormat.clone();
};
$hxClasses["openfl.text.TextField"] = openfl.text.TextField;
openfl.text.TextField.__name__ = ["openfl","text","TextField"];
openfl.text.TextField.__defaultTextFormat = null;
openfl.text.TextField.__super__ = openfl.display.InteractiveObject;
openfl.text.TextField.prototype = $extend(openfl.display.InteractiveObject.prototype,{
	appendText: function(text) {
		var _g = this;
		_g.set_text(_g.get_text() + text);
	}
	,getCharBoundaries: function(a) {
		openfl.Lib.notImplemented("TextField.getCharBoundaries");
		return null;
	}
	,getCharIndexAtPoint: function(x,y) {
		openfl.Lib.notImplemented("TextField.getCharIndexAtPoint");
		return 0;
	}
	,getLineIndexAtPoint: function(x,y) {
		openfl.Lib.notImplemented("TextField.getLineIndexAtPoint");
		return 0;
	}
	,getLineMetrics: function(lineIndex) {
		openfl.Lib.notImplemented("TextField.getLineMetrics");
		return null;
	}
	,getLineOffset: function(lineIndex) {
		openfl.Lib.notImplemented("TextField.getLineOffset");
		return 0;
	}
	,getLineText: function(lineIndex) {
		openfl.Lib.notImplemented("TextField.getLineText");
		return "";
	}
	,getTextFormat: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		return this.__textFormat.clone();
	}
	,setSelection: function(beginIndex,endIndex) {
		openfl.Lib.notImplemented("TextField.setSelection");
	}
	,setTextFormat: function(format,beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		if(format.font != null) this.__textFormat.font = format.font;
		if(format.size != null) this.__textFormat.size = format.size;
		if(format.color != null) this.__textFormat.color = format.color;
		if(format.bold != null) this.__textFormat.bold = format.bold;
		if(format.italic != null) this.__textFormat.italic = format.italic;
		if(format.underline != null) this.__textFormat.underline = format.underline;
		if(format.url != null) this.__textFormat.url = format.url;
		if(format.target != null) this.__textFormat.target = format.target;
		if(format.align != null) this.__textFormat.align = format.align;
		if(format.leftMargin != null) this.__textFormat.leftMargin = format.leftMargin;
		if(format.rightMargin != null) this.__textFormat.rightMargin = format.rightMargin;
		if(format.indent != null) this.__textFormat.indent = format.indent;
		if(format.leading != null) this.__textFormat.leading = format.leading;
		if(format.blockIndent != null) this.__textFormat.blockIndent = format.blockIndent;
		if(format.bullet != null) this.__textFormat.bullet = format.bullet;
		if(format.kerning != null) this.__textFormat.kerning = format.kerning;
		if(format.letterSpacing != null) this.__textFormat.letterSpacing = format.letterSpacing;
		if(format.tabStops != null) this.__textFormat.tabStops = format.tabStops;
		this.__dirty = true;
	}
	,__getBounds: function(rect,matrix) {
		var bounds = new openfl.geom.Rectangle(0,0,this.__width,this.__height);
		bounds.transform(this.__worldTransform);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
	}
	,__getFont: function(format) {
		var font;
		if(format.italic) font = "italic "; else font = "normal ";
		font += "normal ";
		if(format.bold) font += "bold "; else font += "normal ";
		font += format.size + "px";
		font += "/" + (format.size + format.leading + 4) + "px ";
		font += "'" + (function($this) {
			var $r;
			var _g = format.font;
			$r = (function($this) {
				var $r;
				switch(_g) {
				case "_sans":
					$r = "sans-serif";
					break;
				case "_serif":
					$r = "serif";
					break;
				case "_typewriter":
					$r = "monospace";
					break;
				default:
					$r = format.font;
				}
				return $r;
			}($this));
			return $r;
		}(this));
		font += "'";
		return font;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || interactiveOnly && !this.mouseEnabled) return false;
		var point = this.globalToLocal(new openfl.geom.Point(x,y));
		if(point.x > 0 && point.y > 0 && point.x <= this.__width && point.y <= this.__height) {
			if(stack != null) stack.push(this);
			return true;
		}
		return false;
	}
	,__measureText: function() {
		if(this.__ranges == null) {
			this.__context.font = this.__getFont(this.__textFormat);
			return [this.__context.measureText(this.__text).width];
		} else {
			var measurements = [];
			var _g = 0;
			var _g1 = this.__ranges;
			while(_g < _g1.length) {
				var range = _g1[_g];
				++_g;
				this.__context.font = this.__getFont(range.format);
				measurements.push(this.__context.measureText(this.get_text().substring(range.start,range.end)).width);
			}
			return measurements;
		}
	}
	,__measureTextWithDOM: function() {
		var div = this.__div;
		if(this.__div == null) {
			div = window.document.createElement("div");
			div.innerHTML = this.__text;
			div.style.setProperty("font",this.__getFont(this.__textFormat),null);
			div.style.position = "absolute";
			div.style.top = "110%";
			window.document.body.appendChild(div);
		}
		this.__measuredWidth = div.clientWidth;
		if(this.__div == null) div.style.width = Std.string(this.__width) + "px";
		this.__measuredHeight = div.clientHeight;
		if(this.__div == null) window.document.body.removeChild(div);
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.__dirty) {
			if((this.__text == null || this.__text == "") && !this.background && !this.border || (this.get_width() <= 0 || this.get_height() <= 0) && this.autoSize != openfl.text.TextFieldAutoSize.LEFT) {
				this.__canvas = null;
				this.__context = null;
			} else {
				if(this.__canvas == null) {
					this.__canvas = window.document.createElement("canvas");
					this.__context = this.__canvas.getContext("2d");
				}
				if(this.__text != null && this.__text != "") {
					var measurements = this.__measureText();
					var textWidth = 0.0;
					var _g = 0;
					while(_g < measurements.length) {
						var measurement = measurements[_g];
						++_g;
						textWidth += measurement;
					}
					if(this.autoSize == openfl.text.TextFieldAutoSize.LEFT) this.__width = textWidth + 4;
					this.__canvas.width = Math.ceil(this.__width);
					this.__canvas.height = Math.ceil(this.__height);
					if(this.border || this.background) {
						this.__context.rect(0.5,0.5,this.__width - 1,this.__height - 1);
						if(this.background) {
							this.__context.fillStyle = "#" + StringTools.hex(this.backgroundColor,6);
							this.__context.fill();
						}
						if(this.border) {
							this.__context.lineWidth = 1;
							this.__context.strokeStyle = "#" + StringTools.hex(this.borderColor,6);
							this.__context.stroke();
						}
					}
					if(this.__ranges == null) this.__renderText(this.get_text(),this.__textFormat,0); else {
						var currentIndex = 0;
						var range;
						var offsetX = 0.0;
						var _g1 = 0;
						var _g2 = this.__ranges.length;
						while(_g1 < _g2) {
							var i = _g1++;
							range = this.__ranges[i];
							this.__renderText(this.get_text().substring(range.start,range.end),range.format,offsetX);
							offsetX += measurements[i];
						}
					}
				} else {
					if(this.autoSize == openfl.text.TextFieldAutoSize.LEFT) this.__width = 4;
					this.__canvas.width = Math.ceil(this.__width);
					this.__canvas.height = Math.ceil(this.__height);
					if(this.border || this.background) {
						if(this.border) this.__context.rect(0.5,0.5,this.__width - 1,this.__height - 1); else this.__context.rect(0,0,this.__width,this.__height);
						if(this.background) {
							this.__context.fillStyle = "#" + StringTools.hex(this.backgroundColor,6);
							this.__context.fill();
						}
						if(this.border) {
							this.__context.lineWidth = 1;
							this.__context.lineCap = "square";
							this.__context.strokeStyle = "#" + StringTools.hex(this.borderColor,6);
							this.__context.stroke();
						}
					}
				}
			}
			this.__dirty = false;
		}
		if(this.__canvas != null) {
			var context = renderSession.context;
			context.globalAlpha = this.__worldAlpha;
			var transform = this.__worldTransform;
			if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
			if(this.get_scrollRect() == null) context.drawImage(this.__canvas,0,0); else context.drawImage(this.__canvas,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height);
		}
	}
	,__renderDOM: function(renderSession) {
		if(this.stage != null && this.__worldVisible && this.__renderable) {
			if(this.__dirty || this.__div == null) {
				if(this.__text != "" || this.background || this.border) {
					if(this.__div == null) {
						this.__div = window.document.createElement("div");
						this.__initializeElement(this.__div,renderSession);
						this.__style.setProperty("cursor","inherit",null);
					}
					this.__div.innerHTML = this.__text;
					if(this.background) this.__style.setProperty("background-color","#" + StringTools.hex(this.backgroundColor,6),null); else this.__style.removeProperty("background-color");
					if(this.border) this.__style.setProperty("border","solid 1px #" + StringTools.hex(this.borderColor,6),null); else this.__style.removeProperty("border");
					this.__style.setProperty("font",this.__getFont(this.__textFormat),null);
					this.__style.setProperty("color","#" + StringTools.hex(this.__textFormat.color,6),null);
					if(this.autoSize != openfl.text.TextFieldAutoSize.NONE) this.__style.setProperty("width","auto",null); else this.__style.setProperty("width",this.__width + "px",null);
					this.__style.setProperty("height",this.__height + "px",null);
					var _g = this.__textFormat.align;
					switch(_g[1]) {
					case 3:
						this.__style.setProperty("text-align","center",null);
						break;
					case 1:
						this.__style.setProperty("text-align","right",null);
						break;
					default:
						this.__style.setProperty("text-align","left",null);
					}
					this.__dirty = false;
				} else if(this.__div != null) {
					renderSession.element.removeChild(this.__div);
					this.__div = null;
				}
			}
			if(this.__div != null) this.__applyStyle(renderSession,true,true,false);
		} else if(this.__div != null) {
			renderSession.element.removeChild(this.__div);
			this.__div = null;
			this.__style = null;
		}
	}
	,__renderText: function(text,format,offsetX) {
		this.__context.font = this.__getFont(format);
		this.__context.textBaseline = "top";
		this.__context.fillStyle = "#" + StringTools.hex(format.color,6);
		var lines = text.split("\n");
		var yOffset = 0;
		var _g = 0;
		while(_g < lines.length) {
			var line = lines[_g];
			++_g;
			var _g1 = format.align;
			switch(_g1[1]) {
			case 3:
				this.__context.textAlign = "center";
				this.__context.fillText(line,this.__width / 2,2 + yOffset,this.__width - 4);
				break;
			case 1:
				this.__context.textAlign = "end";
				this.__context.fillText(line,this.__width - 2,2 + yOffset,this.__width - 4);
				break;
			default:
				this.__context.textAlign = "start";
				this.__context.fillText(line,2 + offsetX,2 + yOffset,this.__width - 4);
			}
			yOffset += this.get_textHeight();
		}
	}
	,set_autoSize: function(value) {
		if(value != this.autoSize) this.__dirty = true;
		return this.autoSize = value;
	}
	,set_background: function(value) {
		if(value != this.background) this.__dirty = true;
		return this.background = value;
	}
	,set_backgroundColor: function(value) {
		if(value != this.backgroundColor) this.__dirty = true;
		return this.backgroundColor = value;
	}
	,set_border: function(value) {
		if(value != this.border) this.__dirty = true;
		return this.border = value;
	}
	,set_borderColor: function(value) {
		if(value != this.borderColor) this.__dirty = true;
		return this.borderColor = value;
	}
	,get_bottomScrollV: function() {
		return this.get_numLines();
	}
	,get_caretPos: function() {
		return 0;
	}
	,get_defaultTextFormat: function() {
		return this.__textFormat.clone();
	}
	,set_defaultTextFormat: function(value) {
		this.__textFormat.__merge(value);
		return value;
	}
	,get_height: function() {
		return this.__height * this.get_scaleY();
	}
	,set_height: function(value) {
		if(this.get_scaleY() != 1 || value != this.__height) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			this.__dirty = true;
		}
		this.set_scaleY(1);
		return this.__height = value;
	}
	,get_htmlText: function() {
		return this.__text;
	}
	,set_htmlText: function(value) {
		if(!this.__isHTML || this.__text != value) this.__dirty = true;
		this.__ranges = null;
		this.__isHTML = true;
		if(this.__div == null) {
			value = new EReg("<br>","g").replace(value,"\n");
			value = new EReg("<br/>","g").replace(value,"\n");
			var segments = value.split("<font");
			if(segments.length == 1) {
				value = new EReg("<.*?>","g").replace(value,"");
				return this.__text = value;
			} else {
				value = "";
				this.__ranges = [];
				var _g = 0;
				while(_g < segments.length) {
					var segment = segments[_g];
					++_g;
					if(segment == "") continue;
					var closeFontIndex = segment.indexOf("</font>");
					if(closeFontIndex > -1) {
						var start = segment.indexOf(">") + 1;
						var end = closeFontIndex;
						var format = this.__textFormat.clone();
						var faceIndex = segment.indexOf("face=");
						var colorIndex = segment.indexOf("color=");
						var sizeIndex = segment.indexOf("size=");
						if(faceIndex > -1 && faceIndex < start) {
							var len = segment.indexOf("\"",faceIndex);
							format.font = HxOverrides.substr(segment,faceIndex + 6,len);
						}
						if(colorIndex > -1 && colorIndex < start) format.color = Std.parseInt("0x" + HxOverrides.substr(segment,colorIndex + 8,6));
						if(sizeIndex > -1 && sizeIndex < start) format.size = Std.parseInt((function($this) {
							var $r;
							var len1 = segment.indexOf("\"",sizeIndex);
							$r = HxOverrides.substr(segment,sizeIndex + 6,len1);
							return $r;
						}(this)));
						var sub = segment.substring(start,end);
						sub = new EReg("<.*?>","g").replace(sub,"");
						this.__ranges.push(new openfl.text.TextFormatRange(format,value.length,value.length + sub.length));
						value += sub;
						if(closeFontIndex + 7 < segment.length) {
							sub = HxOverrides.substr(segment,closeFontIndex + 7,null);
							this.__ranges.push(new openfl.text.TextFormatRange(this.__textFormat,value.length,value.length + sub.length));
							value += sub;
						}
					} else {
						this.__ranges.push(new openfl.text.TextFormatRange(this.__textFormat,value.length,value.length + segment.length));
						value += segment;
					}
				}
			}
		}
		return this.__text = value;
	}
	,get_maxScrollH: function() {
		return 0;
	}
	,get_maxScrollV: function() {
		return 1;
	}
	,get_numLines: function() {
		if(this.get_text() != "" && this.get_text() != null) {
			var count = this.get_text().split("\n").length;
			if(this.__isHTML) count += this.get_text().split("<br>").length - 1;
			return count;
		}
		return 1;
	}
	,get_text: function() {
		if(this.__isHTML) {
		}
		return this.__text;
	}
	,set_text: function(value) {
		if(this.__isHTML || this.__text != value) this.__dirty = true;
		this.__ranges = null;
		this.__isHTML = false;
		return this.__text = value;
	}
	,get_textColor: function() {
		return this.__textFormat.color;
	}
	,set_textColor: function(value) {
		if(value != this.__textFormat.color) this.__dirty = true;
		if(this.__ranges != null) {
			var _g = 0;
			var _g1 = this.__ranges;
			while(_g < _g1.length) {
				var range = _g1[_g];
				++_g;
				range.format.color = value;
			}
		}
		return this.__textFormat.color = value;
	}
	,get_textWidth: function() {
		if(this.__canvas != null) {
			var sizes = this.__measureText();
			var total = 0;
			var _g = 0;
			while(_g < sizes.length) {
				var size = sizes[_g];
				++_g;
				total += size;
			}
			return total;
		} else if(this.__div != null) return this.__div.clientWidth; else {
			this.__measureTextWithDOM();
			return this.__measuredWidth;
		}
	}
	,get_textHeight: function() {
		if(this.__canvas != null) return this.__textFormat.size * 1.185; else if(this.__div != null) return this.__div.clientHeight; else {
			this.__measureTextWithDOM();
			return this.__measuredHeight + this.__textFormat.size * 0.185;
		}
	}
	,set_type: function(value) {
		return this.type = value;
	}
	,get_width: function() {
		if(this.autoSize == openfl.text.TextFieldAutoSize.LEFT) return (this.get_textWidth() + 4) * this.get_scaleX(); else return this.__width * this.get_scaleX();
	}
	,set_width: function(value) {
		if(this.get_scaleX() != 1 || this.__width != value) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			this.__dirty = true;
		}
		this.set_scaleX(1);
		return this.__width = value;
	}
	,get_wordWrap: function() {
		return this.wordWrap;
	}
	,set_wordWrap: function(value) {
		return this.wordWrap = value;
	}
	,__class__: openfl.text.TextField
});
openfl.text.TextFormatRange = function(format,start,end) {
	this.format = format;
	this.start = start;
	this.end = end;
};
$hxClasses["openfl.text.TextFormatRange"] = openfl.text.TextFormatRange;
openfl.text.TextFormatRange.__name__ = ["openfl","text","TextFormatRange"];
openfl.text.TextFormatRange.prototype = {
	__class__: openfl.text.TextFormatRange
};
openfl.text.TextFieldAutoSize = $hxClasses["openfl.text.TextFieldAutoSize"] = { __ename__ : ["openfl","text","TextFieldAutoSize"], __constructs__ : ["CENTER","LEFT","NONE","RIGHT"] };
openfl.text.TextFieldAutoSize.CENTER = ["CENTER",0];
openfl.text.TextFieldAutoSize.CENTER.toString = $estr;
openfl.text.TextFieldAutoSize.CENTER.__enum__ = openfl.text.TextFieldAutoSize;
openfl.text.TextFieldAutoSize.LEFT = ["LEFT",1];
openfl.text.TextFieldAutoSize.LEFT.toString = $estr;
openfl.text.TextFieldAutoSize.LEFT.__enum__ = openfl.text.TextFieldAutoSize;
openfl.text.TextFieldAutoSize.NONE = ["NONE",2];
openfl.text.TextFieldAutoSize.NONE.toString = $estr;
openfl.text.TextFieldAutoSize.NONE.__enum__ = openfl.text.TextFieldAutoSize;
openfl.text.TextFieldAutoSize.RIGHT = ["RIGHT",3];
openfl.text.TextFieldAutoSize.RIGHT.toString = $estr;
openfl.text.TextFieldAutoSize.RIGHT.__enum__ = openfl.text.TextFieldAutoSize;
openfl.text.TextFieldType = $hxClasses["openfl.text.TextFieldType"] = { __ename__ : ["openfl","text","TextFieldType"], __constructs__ : ["DYNAMIC","INPUT"] };
openfl.text.TextFieldType.DYNAMIC = ["DYNAMIC",0];
openfl.text.TextFieldType.DYNAMIC.toString = $estr;
openfl.text.TextFieldType.DYNAMIC.__enum__ = openfl.text.TextFieldType;
openfl.text.TextFieldType.INPUT = ["INPUT",1];
openfl.text.TextFieldType.INPUT.toString = $estr;
openfl.text.TextFieldType.INPUT.__enum__ = openfl.text.TextFieldType;
openfl.text.TextFormat = function(font,size,color,bold,italic,underline,url,target,align,leftMargin,rightMargin,indent,leading) {
	this.font = font;
	this.size = size;
	this.color = color;
	this.bold = bold;
	this.italic = italic;
	this.underline = underline;
	this.url = url;
	this.target = target;
	this.align = align;
	this.leftMargin = leftMargin;
	this.rightMargin = rightMargin;
	this.indent = indent;
	this.leading = leading;
};
$hxClasses["openfl.text.TextFormat"] = openfl.text.TextFormat;
openfl.text.TextFormat.__name__ = ["openfl","text","TextFormat"];
openfl.text.TextFormat.prototype = {
	clone: function() {
		var newFormat = new openfl.text.TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
		newFormat.align = this.align;
		newFormat.leftMargin = this.leftMargin;
		newFormat.rightMargin = this.rightMargin;
		newFormat.indent = this.indent;
		newFormat.leading = this.leading;
		newFormat.blockIndent = this.blockIndent;
		newFormat.bullet = this.bullet;
		newFormat.kerning = this.kerning;
		newFormat.letterSpacing = this.letterSpacing;
		newFormat.tabStops = this.tabStops;
		return newFormat;
	}
	,__merge: function(format) {
		if(format.font != null) this.font = format.font;
		if(format.size != null) this.size = format.size;
		if(format.color != null) this.color = format.color;
		if(format.bold != null) this.bold = format.bold;
		if(format.italic != null) this.italic = format.italic;
		if(format.underline != null) this.underline = format.underline;
		if(format.url != null) this.url = format.url;
		if(format.target != null) this.target = format.target;
		if(format.align != null) this.align = format.align;
		if(format.leftMargin != null) this.leftMargin = format.leftMargin;
		if(format.rightMargin != null) this.rightMargin = format.rightMargin;
		if(format.indent != null) this.indent = format.indent;
		if(format.leading != null) this.leading = format.leading;
		if(format.blockIndent != null) this.blockIndent = format.blockIndent;
		if(format.bullet != null) this.bullet = format.bullet;
		if(format.kerning != null) this.kerning = format.kerning;
		if(format.letterSpacing != null) this.letterSpacing = format.letterSpacing;
		if(format.tabStops != null) this.tabStops = format.tabStops;
	}
	,__class__: openfl.text.TextFormat
};
openfl.text.TextFormatAlign = $hxClasses["openfl.text.TextFormatAlign"] = { __ename__ : ["openfl","text","TextFormatAlign"], __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] };
openfl.text.TextFormatAlign.LEFT = ["LEFT",0];
openfl.text.TextFormatAlign.LEFT.toString = $estr;
openfl.text.TextFormatAlign.LEFT.__enum__ = openfl.text.TextFormatAlign;
openfl.text.TextFormatAlign.RIGHT = ["RIGHT",1];
openfl.text.TextFormatAlign.RIGHT.toString = $estr;
openfl.text.TextFormatAlign.RIGHT.__enum__ = openfl.text.TextFormatAlign;
openfl.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
openfl.text.TextFormatAlign.JUSTIFY.toString = $estr;
openfl.text.TextFormatAlign.JUSTIFY.__enum__ = openfl.text.TextFormatAlign;
openfl.text.TextFormatAlign.CENTER = ["CENTER",3];
openfl.text.TextFormatAlign.CENTER.toString = $estr;
openfl.text.TextFormatAlign.CENTER.__enum__ = openfl.text.TextFormatAlign;
openfl.text.TextLineMetrics = function(x,width,height,ascent,descent,leading) {
	this.x = x;
	this.width = width;
	this.height = height;
	this.ascent = ascent;
	this.descent = descent;
	this.leading = leading;
};
$hxClasses["openfl.text.TextLineMetrics"] = openfl.text.TextLineMetrics;
openfl.text.TextLineMetrics.__name__ = ["openfl","text","TextLineMetrics"];
openfl.text.TextLineMetrics.prototype = {
	__class__: openfl.text.TextLineMetrics
};
openfl.ui = {};
openfl.ui._KeyLocation = {};
openfl.ui._KeyLocation.KeyLocation_Impl_ = function() { };
$hxClasses["openfl.ui._KeyLocation.KeyLocation_Impl_"] = openfl.ui._KeyLocation.KeyLocation_Impl_;
openfl.ui._KeyLocation.KeyLocation_Impl_.__name__ = ["openfl","ui","_KeyLocation","KeyLocation_Impl_"];
openfl.ui.Keyboard = function() { };
$hxClasses["openfl.ui.Keyboard"] = openfl.ui.Keyboard;
openfl.ui.Keyboard.__name__ = ["openfl","ui","Keyboard"];
openfl.ui.Keyboard.capsLock = null;
openfl.ui.Keyboard.numLock = null;
openfl.ui.Keyboard.isAccessible = function() {
	return false;
};
openfl.ui.Keyboard.__convertMozillaCode = function(code) {
	switch(code) {
	case 8:
		return 8;
	case 9:
		return 9;
	case 13:
		return 13;
	case 14:
		return 13;
	case 16:
		return 16;
	case 17:
		return 17;
	case 20:
		return 20;
	case 27:
		return 27;
	case 32:
		return 32;
	case 33:
		return 33;
	case 34:
		return 34;
	case 35:
		return 35;
	case 36:
		return 36;
	case 37:
		return 37;
	case 39:
		return 39;
	case 38:
		return 38;
	case 40:
		return 40;
	case 45:
		return 45;
	case 46:
		return 46;
	case 144:
		return 144;
	default:
		return code;
	}
};
openfl.ui.Keyboard.__convertWebkitCode = function(code) {
	var _g = code.toLowerCase();
	switch(_g) {
	case "backspace":
		return 8;
	case "tab":
		return 9;
	case "enter":
		return 13;
	case "shift":
		return 16;
	case "control":
		return 17;
	case "capslock":
		return 20;
	case "escape":
		return 27;
	case "space":
		return 32;
	case "pageup":
		return 33;
	case "pagedown":
		return 34;
	case "end":
		return 35;
	case "home":
		return 36;
	case "left":
		return 37;
	case "right":
		return 39;
	case "up":
		return 38;
	case "down":
		return 40;
	case "insert":
		return 45;
	case "delete":
		return 46;
	case "numlock":
		return 144;
	case "break":
		return 19;
	}
	if(code.indexOf("U+") == 0) return Std.parseInt("0x" + HxOverrides.substr(code,3,null));
	throw "Unrecognized key code: " + code;
	return 0;
};
openfl.utils = {};
openfl.utils.ByteArray = function() {
	this.littleEndian = false;
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	this.___resizeBuffer(this.allocated);
};
$hxClasses["openfl.utils.ByteArray"] = openfl.utils.ByteArray;
openfl.utils.ByteArray.__name__ = ["openfl","utils","ByteArray"];
openfl.utils.ByteArray.fromBytes = function(inBytes) {
	var result = new openfl.utils.ByteArray();
	result.byteView = new Uint8Array(inBytes.b);
	result.set_length(result.byteView.length);
	result.allocated = result.length;
	return result;
};
openfl.utils.ByteArray.__ofBuffer = function(buffer) {
	var bytes = new openfl.utils.ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
};
openfl.utils.ByteArray.prototype = {
	clear: function() {
		if(this.allocated < 0) this.___resizeBuffer(this.allocated = Std["int"](Math.max(0,this.allocated * 2))); else if(this.allocated > 0) this.___resizeBuffer(this.allocated = 0);
		this.length = 0;
		0;
		this.position = 0;
	}
	,readBoolean: function() {
		return this.readByte() != 0;
	}
	,readByte: function() {
		var data = this.data;
		return data.getInt8(this.position++);
	}
	,readBytes: function(bytes,offset,length) {
		if(length == null) length = 0;
		if(offset == null) offset = 0;
		if(offset < 0 || length < 0) throw new openfl.errors.IOError("Read error - Out of bounds");
		if(length == 0) length = this.length - this.position;
		var lengthToEnsure = offset + length;
		if(bytes.length < lengthToEnsure) {
			if(bytes.allocated < lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = Std["int"](Math.max(lengthToEnsure,bytes.allocated * 2))); else if(bytes.allocated > lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = lengthToEnsure);
			bytes.length = lengthToEnsure;
			lengthToEnsure;
		}
		bytes.byteView.set(this.byteView.subarray(this.position,this.position + length),offset);
		bytes.position = offset;
		this.position += length;
		if(bytes.position + length > bytes.length) bytes.set_length(bytes.position + length);
	}
	,readDouble: function() {
		var $double = this.data.getFloat64(this.position,this.littleEndian);
		this.position += 8;
		return $double;
	}
	,readFloat: function() {
		var $float = this.data.getFloat32(this.position,this.littleEndian);
		this.position += 4;
		return $float;
	}
	,readFullBytes: function(bytes,pos,len) {
		if(this.length < len) {
			if(this.allocated < len) this.___resizeBuffer(this.allocated = Std["int"](Math.max(len,this.allocated * 2))); else if(this.allocated > len) this.___resizeBuffer(this.allocated = len);
			this.length = len;
			len;
		}
		var _g1 = pos;
		var _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			var data = this.data;
			data.setInt8(this.position++,bytes.b[i]);
		}
	}
	,readInt: function() {
		var $int = this.data.getInt32(this.position,this.littleEndian);
		this.position += 4;
		return $int;
	}
	,readMultiByte: function(length,charSet) {
		return this.readUTFBytes(length);
	}
	,readShort: function() {
		var $short = this.data.getInt16(this.position,this.littleEndian);
		this.position += 2;
		return $short;
	}
	,readUnsignedByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readUnsignedInt: function() {
		var uInt = this.data.getUint32(this.position,this.littleEndian);
		this.position += 4;
		return uInt;
	}
	,readUnsignedShort: function() {
		var uShort = this.data.getUint16(this.position,this.littleEndian);
		this.position += 2;
		return uShort;
	}
	,readUTF: function() {
		var bytesCount = this.readUnsignedShort();
		return this.readUTFBytes(bytesCount);
	}
	,readUTFBytes: function(len) {
		var value = "";
		var max = this.position + len;
		while(this.position < max) {
			var data = this.data;
			var c = data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				value += String.fromCharCode(c);
			} else if(c < 224) value += String.fromCharCode((c & 63) << 6 | data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | data.getUint8(this.position++) & 127);
			} else {
				var c21 = data.getUint8(this.position++);
				var c3 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 15) << 18 | (c21 & 127) << 12 | c3 << 6 & 127 | data.getUint8(this.position++) & 127);
			}
		}
		return value;
	}
	,toString: function() {
		var cachePosition = this.position;
		this.position = 0;
		var value = this.readUTFBytes(this.length);
		this.position = cachePosition;
		return value;
	}
	,writeBoolean: function(value) {
		this.writeByte(value?1:0);
	}
	,writeByte: function(value) {
		var lengthToEnsure = this.position + 1;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		var data = this.data;
		data.setInt8(this.position,value);
		this.position += 1;
	}
	,writeBytes: function(bytes,offset,length) {
		if(length == null) length = 0;
		if(offset == null) offset = 0;
		if(offset < 0 || length < 0) throw new openfl.errors.IOError("Write error - Out of bounds");
		if(length == 0) length = bytes.length;
		var lengthToEnsure = this.position + length;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.byteView.set(bytes.byteView.subarray(offset,offset + length),this.position);
		this.position += length;
	}
	,writeDouble: function(x) {
		var lengthToEnsure = this.position + 8;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat64(this.position,x,this.littleEndian);
		this.position += 8;
	}
	,writeFloat: function(x) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat32(this.position,x,this.littleEndian);
		this.position += 4;
	}
	,writeInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUnsignedInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeUnsignedShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUTF: function(value) {
		this.writeUnsignedShort(this._getUTFBytesCount(value));
		this.writeUTFBytes(value);
	}
	,writeUTFBytes: function(value) {
		var _g1 = 0;
		var _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) this.writeByte(c); else if(c <= 2047) {
				this.writeByte(192 | c >> 6);
				this.writeByte(128 | c & 63);
			} else if(c <= 65535) {
				this.writeByte(224 | c >> 12);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			} else {
				this.writeByte(240 | c >> 18);
				this.writeByte(128 | c >> 12 & 63);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			}
		}
	}
	,__fromBytes: function(inBytes) {
		this.byteView = new Uint8Array(inBytes.b);
		this.set_length(this.byteView.length);
		this.allocated = this.length;
	}
	,__get: function(pos) {
		return this.data.getInt8(pos);
	}
	,_getUTFBytesCount: function(value) {
		var count = 0;
		var _g1 = 0;
		var _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) count += 1; else if(c <= 2047) count += 2; else if(c <= 65535) count += 3; else count += 4;
		}
		return count;
	}
	,___resizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,__getBuffer: function() {
		return this.data.buffer;
	}
	,__set: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,get_bytesAvailable: function() {
		return this.length - this.position;
	}
	,get_endian: function() {
		if(this.littleEndian) return "littleEndian"; else return "bigEndian";
	}
	,set_endian: function(endian) {
		this.littleEndian = endian == "littleEndian";
		return endian;
	}
	,set_length: function(value) {
		if(this.allocated < value) this.___resizeBuffer(this.allocated = Std["int"](Math.max(value,this.allocated * 2))); else if(this.allocated > value) this.___resizeBuffer(this.allocated = value);
		this.length = value;
		return value;
	}
	,__class__: openfl.utils.ByteArray
};
openfl.utils.Endian = function() { };
$hxClasses["openfl.utils.Endian"] = openfl.utils.Endian;
openfl.utils.Endian.__name__ = ["openfl","utils","Endian"];
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
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
if(window.createjs != null) createjs.Sound.alternateExtensions = ["ogg","mp3","wav"];
ApplicationMain.images = new haxe.ds.StringMap();
ApplicationMain.urlLoaders = new haxe.ds.StringMap();
ApplicationMain.assetsLoaded = 0;
ApplicationMain.total = 0;
openfl.display.DisplayObject.__instanceCount = 0;
openfl.display.DisplayObject.__worldRenderDirty = 0;
openfl.display.DisplayObject.__worldTransformDirty = 0;
cx.diff.mtwin.text.Diff.END = 0;
cx.diff.mtwin.text.Diff.DOWN = 1;
cx.diff.mtwin.text.Diff.RIGHT = 2;
cx.diff.mtwin.text.Diff.DOWN_RIGHT = 3;
cx.diff.mtwin.text.Diff.NO_NEW_LINE = "\n\\ No newline at end of file\n";
format.gfx.GfxBytes.EOF = 0;
format.gfx.GfxBytes.SIZE = 1;
format.gfx.GfxBytes.BEGIN_FILL = 10;
format.gfx.GfxBytes.GRADIENT_FILL = 11;
format.gfx.GfxBytes.END_FILL = 12;
format.gfx.GfxBytes.LINE_STYLE = 20;
format.gfx.GfxBytes.END_LINE_STYLE = 21;
format.gfx.GfxBytes.MOVE = 30;
format.gfx.GfxBytes.LINE = 31;
format.gfx.GfxBytes.CURVE = 32;
format.gfx.GfxBytes.base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
format.gfx.GfxBytes.scaleModes = [openfl.display.LineScaleMode.NORMAL,openfl.display.LineScaleMode.NONE,openfl.display.LineScaleMode.VERTICAL,openfl.display.LineScaleMode.HORIZONTAL];
format.gfx.GfxBytes.capsStyles = ["round","butt","square"];
format.gfx.GfxBytes.jointStyles = ["round","miter","bevel"];
format.gfx.GfxBytes.spreadMethods = [openfl.display.SpreadMethod.PAD,openfl.display.SpreadMethod.REPEAT,openfl.display.SpreadMethod.REFLECT];
format.gfx.GfxBytes.interpolationMethods = [openfl.display.InterpolationMethod.RGB,openfl.display.InterpolationMethod.LINEAR_RGB];
format.svg.PathParser.MOVE = 77;
format.svg.PathParser.MOVER = 109;
format.svg.PathParser.LINE = 76;
format.svg.PathParser.LINER = 108;
format.svg.PathParser.HLINE = 72;
format.svg.PathParser.HLINER = 104;
format.svg.PathParser.VLINE = 86;
format.svg.PathParser.VLINER = 118;
format.svg.PathParser.CUBIC = 67;
format.svg.PathParser.CUBICR = 99;
format.svg.PathParser.SCUBIC = 83;
format.svg.PathParser.SCUBICR = 115;
format.svg.PathParser.QUAD = 81;
format.svg.PathParser.QUADR = 113;
format.svg.PathParser.SQUAD = 84;
format.svg.PathParser.SQUADR = 116;
format.svg.PathParser.ARC = 65;
format.svg.PathParser.ARCR = 97;
format.svg.PathParser.CLOSE = 90;
format.svg.PathParser.CLOSER = 122;
format.svg.PathParser.UNKNOWN = -1;
format.svg.PathParser.SEPARATOR = -2;
format.svg.PathParser.FLOAT = -3;
format.svg.PathParser.FLOAT_SIGN = -4;
format.svg.PathParser.FLOAT_DOT = -5;
format.svg.PathParser.FLOAT_EXP = -6;
format.svg.PathSegment.MOVE = 1;
format.svg.PathSegment.DRAW = 2;
format.svg.PathSegment.CURVE = 3;
format.svg.PathSegment.CUBIC = 4;
format.svg.PathSegment.ARC = 5;
format.svg.SVGData.SIN45 = 0.70710678118654752440084436210485;
format.svg.SVGData.TAN22 = 0.4142135623730950488016887242097;
format.svg.SVGData.mStyleSplit = new EReg(";","g");
format.svg.SVGData.mStyleValue = new EReg("\\s*(.*)\\s*:\\s*(.*)\\s*","");
format.svg.SVGData.mTranslateMatch = new EReg("translate\\((.*)[, ](.*)\\)","");
format.svg.SVGData.mScaleMatch = new EReg("scale\\((.*)\\)","");
format.svg.SVGData.mMatrixMatch = new EReg("matrix\\((.*)[, ](.*)[, ](.*)[, ](.*)[, ](.*)[, ](.*)\\)","");
format.svg.SVGData.mURLMatch = new EReg("url\\(#(.*)\\)","");
format.svg.SVGData.defaultFill = format.svg.FillType.FillSolid(0);
haxe.Serializer.USE_CACHE = false;
haxe.Serializer.USE_ENUM_INDEX = false;
haxe.Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.CODES = null;
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
nx3.Constants.FONT_TEXT_DEFAULTFORMAT = { name : "Georgia", size : 12, bold : false, italic : false};
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
openfl.Assets.cache = new openfl.AssetCache();
openfl.Assets.libraries = new haxe.ds.StringMap();
openfl.Assets.dispatcher = new openfl.events.EventDispatcher();
openfl.Assets.initialized = false;
openfl.Lib.__sentWarnings = new haxe.ds.StringMap();
openfl.Lib.__startTime = haxe.Timer.stamp();
openfl.display.BitmapData.__base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
openfl.display.BitmapDataChannel.ALPHA = 8;
openfl.display.BitmapDataChannel.BLUE = 4;
openfl.display.BitmapDataChannel.GREEN = 2;
openfl.display.BitmapDataChannel.RED = 1;
openfl.display._CapsStyle.CapsStyle_Impl_.NONE = "butt";
openfl.display._CapsStyle.CapsStyle_Impl_.ROUND = "round";
openfl.display._CapsStyle.CapsStyle_Impl_.SQUARE = "square";
openfl.display.Graphics.TILE_SCALE = 1;
openfl.display.Graphics.TILE_ROTATION = 2;
openfl.display.Graphics.TILE_RGB = 4;
openfl.display.Graphics.TILE_ALPHA = 8;
openfl.display.Graphics.TILE_TRANS_2x2 = 16;
openfl.display.Graphics.TILE_BLEND_NORMAL = 0;
openfl.display.Graphics.TILE_BLEND_ADD = 65536;
openfl.display._JointStyle.JointStyle_Impl_.MITER = "miter";
openfl.display._JointStyle.JointStyle_Impl_.ROUND = "round";
openfl.display._JointStyle.JointStyle_Impl_.BEVEL = "bevel";
openfl.display._StageQuality.StageQuality_Impl_.BEST = "best";
openfl.display._StageQuality.StageQuality_Impl_.HIGH = "high";
openfl.display._StageQuality.StageQuality_Impl_.MEDIUM = "medium";
openfl.display._StageQuality.StageQuality_Impl_.LOW = "low";
openfl.display.Tilesheet.TILE_SCALE = 1;
openfl.display.Tilesheet.TILE_ROTATION = 2;
openfl.display.Tilesheet.TILE_RGB = 4;
openfl.display.Tilesheet.TILE_ALPHA = 8;
openfl.display.Tilesheet.TILE_TRANS_2x2 = 16;
openfl.display.Tilesheet.TILE_BLEND_NORMAL = 0;
openfl.display.Tilesheet.TILE_BLEND_ADD = 65536;
openfl.display.Tilesheet.TILE_BLEND_MULTIPLY = 131072;
openfl.display.Tilesheet.TILE_BLEND_SCREEN = 262144;
openfl.errors.Error.DEFAULT_TO_STRING = "Error";
openfl.events.Event.ACTIVATE = "activate";
openfl.events.Event.ADDED = "added";
openfl.events.Event.ADDED_TO_STAGE = "addedToStage";
openfl.events.Event.CANCEL = "cancel";
openfl.events.Event.CHANGE = "change";
openfl.events.Event.CLOSE = "close";
openfl.events.Event.COMPLETE = "complete";
openfl.events.Event.CONNECT = "connect";
openfl.events.Event.CONTEXT3D_CREATE = "context3DCreate";
openfl.events.Event.DEACTIVATE = "deactivate";
openfl.events.Event.ENTER_FRAME = "enterFrame";
openfl.events.Event.ID3 = "id3";
openfl.events.Event.INIT = "init";
openfl.events.Event.MOUSE_LEAVE = "mouseLeave";
openfl.events.Event.OPEN = "open";
openfl.events.Event.REMOVED = "removed";
openfl.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
openfl.events.Event.RENDER = "render";
openfl.events.Event.RESIZE = "resize";
openfl.events.Event.SCROLL = "scroll";
openfl.events.Event.SELECT = "select";
openfl.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
openfl.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
openfl.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
openfl.events.Event.UNLOAD = "unload";
openfl.events.Event.SOUND_COMPLETE = "soundComplete";
openfl.events.TextEvent.LINK = "link";
openfl.events.TextEvent.TEXT_INPUT = "textInput";
openfl.events.ErrorEvent.ERROR = "error";
openfl.events._EventPhase.EventPhase_Impl_.CAPTURING_PHASE = 0;
openfl.events._EventPhase.EventPhase_Impl_.AT_TARGET = 1;
openfl.events._EventPhase.EventPhase_Impl_.BUBBLING_PHASE = 2;
openfl.events.FocusEvent.FOCUS_IN = "focusIn";
openfl.events.FocusEvent.FOCUS_OUT = "focusOut";
openfl.events.FocusEvent.KEY_FOCUS_CHANGE = "keyFocusChange";
openfl.events.FocusEvent.MOUSE_FOCUS_CHANGE = "mouseFocusChange";
openfl.events.HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus";
openfl.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus";
openfl.events.IOErrorEvent.IO_ERROR = "ioError";
openfl.events.KeyboardEvent.KEY_DOWN = "keyDown";
openfl.events.KeyboardEvent.KEY_UP = "keyUp";
openfl.events.MouseEvent.CLICK = "click";
openfl.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
openfl.events.MouseEvent.MIDDLE_CLICK = "middleClick";
openfl.events.MouseEvent.MIDDLE_MOUSE_DOWN = "middleMouseDown";
openfl.events.MouseEvent.MIDDLE_MOUSE_UP = "middleMouseUp";
openfl.events.MouseEvent.MOUSE_DOWN = "mouseDown";
openfl.events.MouseEvent.MOUSE_MOVE = "mouseMove";
openfl.events.MouseEvent.MOUSE_OUT = "mouseOut";
openfl.events.MouseEvent.MOUSE_OVER = "mouseOver";
openfl.events.MouseEvent.MOUSE_UP = "mouseUp";
openfl.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
openfl.events.MouseEvent.RIGHT_CLICK = "rightClick";
openfl.events.MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
openfl.events.MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
openfl.events.MouseEvent.ROLL_OUT = "rollOut";
openfl.events.MouseEvent.ROLL_OVER = "rollOver";
openfl.events.ProgressEvent.PROGRESS = "progress";
openfl.events.ProgressEvent.SOCKET_DATA = "socketData";
openfl.events.SecurityErrorEvent.SECURITY_ERROR = "securityError";
openfl.events.TouchEvent.TOUCH_BEGIN = "touchBegin";
openfl.events.TouchEvent.TOUCH_END = "touchEnd";
openfl.events.TouchEvent.TOUCH_MOVE = "touchMove";
openfl.events.TouchEvent.TOUCH_OUT = "touchOut";
openfl.events.TouchEvent.TOUCH_OVER = "touchOver";
openfl.events.TouchEvent.TOUCH_ROLL_OUT = "touchRollOut";
openfl.events.TouchEvent.TOUCH_ROLL_OVER = "touchRollOver";
openfl.events.TouchEvent.TOUCH_TAP = "touchTap";
openfl.geom.Matrix.__identity = new openfl.geom.Matrix();
openfl.media.Sound.__registeredSounds = new haxe.ds.StringMap();
openfl.net.URLRequestMethod.DELETE = "DELETE";
openfl.net.URLRequestMethod.GET = "GET";
openfl.net.URLRequestMethod.HEAD = "HEAD";
openfl.net.URLRequestMethod.OPTIONS = "OPTIONS";
openfl.net.URLRequestMethod.POST = "POST";
openfl.net.URLRequestMethod.PUT = "PUT";
openfl.system.ApplicationDomain.currentDomain = new openfl.system.ApplicationDomain(null);
openfl.system.SecurityDomain.currentDomain = new openfl.system.SecurityDomain();
openfl.text._AntiAliasType.AntiAliasType_Impl_.ADVANCED = "advanced";
openfl.text._AntiAliasType.AntiAliasType_Impl_.NORMAL = "normal";
openfl.ui._KeyLocation.KeyLocation_Impl_.STANDARD = 0;
openfl.ui._KeyLocation.KeyLocation_Impl_.LEFT = 1;
openfl.ui._KeyLocation.KeyLocation_Impl_.RIGHT = 2;
openfl.ui._KeyLocation.KeyLocation_Impl_.NUM_PAD = 3;
openfl.ui.Keyboard.NUMBER_0 = 48;
openfl.ui.Keyboard.NUMBER_1 = 49;
openfl.ui.Keyboard.NUMBER_2 = 50;
openfl.ui.Keyboard.NUMBER_3 = 51;
openfl.ui.Keyboard.NUMBER_4 = 52;
openfl.ui.Keyboard.NUMBER_5 = 53;
openfl.ui.Keyboard.NUMBER_6 = 54;
openfl.ui.Keyboard.NUMBER_7 = 55;
openfl.ui.Keyboard.NUMBER_8 = 56;
openfl.ui.Keyboard.NUMBER_9 = 57;
openfl.ui.Keyboard.A = 65;
openfl.ui.Keyboard.B = 66;
openfl.ui.Keyboard.C = 67;
openfl.ui.Keyboard.D = 68;
openfl.ui.Keyboard.E = 69;
openfl.ui.Keyboard.F = 70;
openfl.ui.Keyboard.G = 71;
openfl.ui.Keyboard.H = 72;
openfl.ui.Keyboard.I = 73;
openfl.ui.Keyboard.J = 74;
openfl.ui.Keyboard.K = 75;
openfl.ui.Keyboard.L = 76;
openfl.ui.Keyboard.M = 77;
openfl.ui.Keyboard.N = 78;
openfl.ui.Keyboard.O = 79;
openfl.ui.Keyboard.P = 80;
openfl.ui.Keyboard.Q = 81;
openfl.ui.Keyboard.R = 82;
openfl.ui.Keyboard.S = 83;
openfl.ui.Keyboard.T = 84;
openfl.ui.Keyboard.U = 85;
openfl.ui.Keyboard.V = 86;
openfl.ui.Keyboard.W = 87;
openfl.ui.Keyboard.X = 88;
openfl.ui.Keyboard.Y = 89;
openfl.ui.Keyboard.Z = 90;
openfl.ui.Keyboard.NUMPAD_0 = 96;
openfl.ui.Keyboard.NUMPAD_1 = 97;
openfl.ui.Keyboard.NUMPAD_2 = 98;
openfl.ui.Keyboard.NUMPAD_3 = 99;
openfl.ui.Keyboard.NUMPAD_4 = 100;
openfl.ui.Keyboard.NUMPAD_5 = 101;
openfl.ui.Keyboard.NUMPAD_6 = 102;
openfl.ui.Keyboard.NUMPAD_7 = 103;
openfl.ui.Keyboard.NUMPAD_8 = 104;
openfl.ui.Keyboard.NUMPAD_9 = 105;
openfl.ui.Keyboard.NUMPAD_MULTIPLY = 106;
openfl.ui.Keyboard.NUMPAD_ADD = 107;
openfl.ui.Keyboard.NUMPAD_ENTER = 108;
openfl.ui.Keyboard.NUMPAD_SUBTRACT = 109;
openfl.ui.Keyboard.NUMPAD_DECIMAL = 110;
openfl.ui.Keyboard.NUMPAD_DIVIDE = 111;
openfl.ui.Keyboard.F1 = 112;
openfl.ui.Keyboard.F2 = 113;
openfl.ui.Keyboard.F3 = 114;
openfl.ui.Keyboard.F4 = 115;
openfl.ui.Keyboard.F5 = 116;
openfl.ui.Keyboard.F6 = 117;
openfl.ui.Keyboard.F7 = 118;
openfl.ui.Keyboard.F8 = 119;
openfl.ui.Keyboard.F9 = 120;
openfl.ui.Keyboard.F10 = 121;
openfl.ui.Keyboard.F11 = 122;
openfl.ui.Keyboard.F12 = 123;
openfl.ui.Keyboard.F13 = 124;
openfl.ui.Keyboard.F14 = 125;
openfl.ui.Keyboard.F15 = 126;
openfl.ui.Keyboard.BACKSPACE = 8;
openfl.ui.Keyboard.TAB = 9;
openfl.ui.Keyboard.ALTERNATE = 18;
openfl.ui.Keyboard.ENTER = 13;
openfl.ui.Keyboard.COMMAND = 15;
openfl.ui.Keyboard.SHIFT = 16;
openfl.ui.Keyboard.CONTROL = 17;
openfl.ui.Keyboard.CAPS_LOCK = 20;
openfl.ui.Keyboard.NUMPAD = 21;
openfl.ui.Keyboard.ESCAPE = 27;
openfl.ui.Keyboard.SPACE = 32;
openfl.ui.Keyboard.PAGE_UP = 33;
openfl.ui.Keyboard.PAGE_DOWN = 34;
openfl.ui.Keyboard.END = 35;
openfl.ui.Keyboard.HOME = 36;
openfl.ui.Keyboard.LEFT = 37;
openfl.ui.Keyboard.RIGHT = 39;
openfl.ui.Keyboard.UP = 38;
openfl.ui.Keyboard.DOWN = 40;
openfl.ui.Keyboard.INSERT = 45;
openfl.ui.Keyboard.DELETE = 46;
openfl.ui.Keyboard.NUMLOCK = 144;
openfl.ui.Keyboard.BREAK = 19;
openfl.ui.Keyboard.SEMICOLON = 186;
openfl.ui.Keyboard.EQUAL = 187;
openfl.ui.Keyboard.COMMA = 188;
openfl.ui.Keyboard.MINUS = 189;
openfl.ui.Keyboard.PERIOD = 190;
openfl.ui.Keyboard.SLASH = 191;
openfl.ui.Keyboard.BACKQUOTE = 192;
openfl.ui.Keyboard.LEFTBRACKET = 219;
openfl.ui.Keyboard.BACKSLASH = 220;
openfl.ui.Keyboard.RIGHTBRACKET = 221;
openfl.ui.Keyboard.QUOTE = 222;
openfl.ui.Keyboard.DOM_VK_CANCEL = 3;
openfl.ui.Keyboard.DOM_VK_HELP = 6;
openfl.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
openfl.ui.Keyboard.DOM_VK_TAB = 9;
openfl.ui.Keyboard.DOM_VK_CLEAR = 12;
openfl.ui.Keyboard.DOM_VK_RETURN = 13;
openfl.ui.Keyboard.DOM_VK_ENTER = 14;
openfl.ui.Keyboard.DOM_VK_SHIFT = 16;
openfl.ui.Keyboard.DOM_VK_CONTROL = 17;
openfl.ui.Keyboard.DOM_VK_ALT = 18;
openfl.ui.Keyboard.DOM_VK_PAUSE = 19;
openfl.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
openfl.ui.Keyboard.DOM_VK_ESCAPE = 27;
openfl.ui.Keyboard.DOM_VK_SPACE = 32;
openfl.ui.Keyboard.DOM_VK_PAGE_UP = 33;
openfl.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
openfl.ui.Keyboard.DOM_VK_END = 35;
openfl.ui.Keyboard.DOM_VK_HOME = 36;
openfl.ui.Keyboard.DOM_VK_LEFT = 37;
openfl.ui.Keyboard.DOM_VK_UP = 38;
openfl.ui.Keyboard.DOM_VK_RIGHT = 39;
openfl.ui.Keyboard.DOM_VK_DOWN = 40;
openfl.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
openfl.ui.Keyboard.DOM_VK_INSERT = 45;
openfl.ui.Keyboard.DOM_VK_DELETE = 46;
openfl.ui.Keyboard.DOM_VK_0 = 48;
openfl.ui.Keyboard.DOM_VK_1 = 49;
openfl.ui.Keyboard.DOM_VK_2 = 50;
openfl.ui.Keyboard.DOM_VK_3 = 51;
openfl.ui.Keyboard.DOM_VK_4 = 52;
openfl.ui.Keyboard.DOM_VK_5 = 53;
openfl.ui.Keyboard.DOM_VK_6 = 54;
openfl.ui.Keyboard.DOM_VK_7 = 55;
openfl.ui.Keyboard.DOM_VK_8 = 56;
openfl.ui.Keyboard.DOM_VK_9 = 57;
openfl.ui.Keyboard.DOM_VK_SEMICOLON = 59;
openfl.ui.Keyboard.DOM_VK_EQUALS = 61;
openfl.ui.Keyboard.DOM_VK_A = 65;
openfl.ui.Keyboard.DOM_VK_B = 66;
openfl.ui.Keyboard.DOM_VK_C = 67;
openfl.ui.Keyboard.DOM_VK_D = 68;
openfl.ui.Keyboard.DOM_VK_E = 69;
openfl.ui.Keyboard.DOM_VK_F = 70;
openfl.ui.Keyboard.DOM_VK_G = 71;
openfl.ui.Keyboard.DOM_VK_H = 72;
openfl.ui.Keyboard.DOM_VK_I = 73;
openfl.ui.Keyboard.DOM_VK_J = 74;
openfl.ui.Keyboard.DOM_VK_K = 75;
openfl.ui.Keyboard.DOM_VK_L = 76;
openfl.ui.Keyboard.DOM_VK_M = 77;
openfl.ui.Keyboard.DOM_VK_N = 78;
openfl.ui.Keyboard.DOM_VK_O = 79;
openfl.ui.Keyboard.DOM_VK_P = 80;
openfl.ui.Keyboard.DOM_VK_Q = 81;
openfl.ui.Keyboard.DOM_VK_R = 82;
openfl.ui.Keyboard.DOM_VK_S = 83;
openfl.ui.Keyboard.DOM_VK_T = 84;
openfl.ui.Keyboard.DOM_VK_U = 85;
openfl.ui.Keyboard.DOM_VK_V = 86;
openfl.ui.Keyboard.DOM_VK_W = 87;
openfl.ui.Keyboard.DOM_VK_X = 88;
openfl.ui.Keyboard.DOM_VK_Y = 89;
openfl.ui.Keyboard.DOM_VK_Z = 90;
openfl.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
openfl.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
openfl.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
openfl.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
openfl.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
openfl.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
openfl.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
openfl.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
openfl.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
openfl.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
openfl.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
openfl.ui.Keyboard.DOM_VK_MULTIPLY = 106;
openfl.ui.Keyboard.DOM_VK_ADD = 107;
openfl.ui.Keyboard.DOM_VK_SEPARATOR = 108;
openfl.ui.Keyboard.DOM_VK_SUBTRACT = 109;
openfl.ui.Keyboard.DOM_VK_DECIMAL = 110;
openfl.ui.Keyboard.DOM_VK_DIVIDE = 111;
openfl.ui.Keyboard.DOM_VK_F1 = 112;
openfl.ui.Keyboard.DOM_VK_F2 = 113;
openfl.ui.Keyboard.DOM_VK_F3 = 114;
openfl.ui.Keyboard.DOM_VK_F4 = 115;
openfl.ui.Keyboard.DOM_VK_F5 = 116;
openfl.ui.Keyboard.DOM_VK_F6 = 117;
openfl.ui.Keyboard.DOM_VK_F7 = 118;
openfl.ui.Keyboard.DOM_VK_F8 = 119;
openfl.ui.Keyboard.DOM_VK_F9 = 120;
openfl.ui.Keyboard.DOM_VK_F10 = 121;
openfl.ui.Keyboard.DOM_VK_F11 = 122;
openfl.ui.Keyboard.DOM_VK_F12 = 123;
openfl.ui.Keyboard.DOM_VK_F13 = 124;
openfl.ui.Keyboard.DOM_VK_F14 = 125;
openfl.ui.Keyboard.DOM_VK_F15 = 126;
openfl.ui.Keyboard.DOM_VK_F16 = 127;
openfl.ui.Keyboard.DOM_VK_F17 = 128;
openfl.ui.Keyboard.DOM_VK_F18 = 129;
openfl.ui.Keyboard.DOM_VK_F19 = 130;
openfl.ui.Keyboard.DOM_VK_F20 = 131;
openfl.ui.Keyboard.DOM_VK_F21 = 132;
openfl.ui.Keyboard.DOM_VK_F22 = 133;
openfl.ui.Keyboard.DOM_VK_F23 = 134;
openfl.ui.Keyboard.DOM_VK_F24 = 135;
openfl.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
openfl.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
openfl.ui.Keyboard.DOM_VK_COMMA = 188;
openfl.ui.Keyboard.DOM_VK_PERIOD = 190;
openfl.ui.Keyboard.DOM_VK_SLASH = 191;
openfl.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
openfl.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
openfl.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
openfl.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
openfl.ui.Keyboard.DOM_VK_QUOTE = 222;
openfl.ui.Keyboard.DOM_VK_META = 224;
openfl.ui.Keyboard.DOM_VK_KANA = 21;
openfl.ui.Keyboard.DOM_VK_HANGUL = 21;
openfl.ui.Keyboard.DOM_VK_JUNJA = 23;
openfl.ui.Keyboard.DOM_VK_FINAL = 24;
openfl.ui.Keyboard.DOM_VK_HANJA = 25;
openfl.ui.Keyboard.DOM_VK_KANJI = 25;
openfl.ui.Keyboard.DOM_VK_CONVERT = 28;
openfl.ui.Keyboard.DOM_VK_NONCONVERT = 29;
openfl.ui.Keyboard.DOM_VK_ACEPT = 30;
openfl.ui.Keyboard.DOM_VK_MODECHANGE = 31;
openfl.ui.Keyboard.DOM_VK_SELECT = 41;
openfl.ui.Keyboard.DOM_VK_PRINT = 42;
openfl.ui.Keyboard.DOM_VK_EXECUTE = 43;
openfl.ui.Keyboard.DOM_VK_SLEEP = 95;
openfl.utils.Endian.BIG_ENDIAN = "bigEndian";
openfl.utils.Endian.LITTLE_ENDIAN = "littleEndian";
ApplicationMain.main();
})(typeof window != "undefined" ? window : exports);
