(function () { "use strict";
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
ApplicationMain.main = function() {
	var element = window.document.getElementById("openfl-embed");
	flash.Lib.create(800,480,element,16777215);
	ApplicationMain.preloader = new NMEPreloader();
	flash.Lib.current.addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	var sounds = [];
	var id;
	var image = new Image();
	id = "styles/gradient/arrow_down.png";
	ApplicationMain.images.set(id,image);
	image.onload = ApplicationMain.image_onLoad;
	image.src = id;
	ApplicationMain.total++;
	var image1 = new Image();
	id = "styles/gradient/arrow_down_dark.png";
	ApplicationMain.images.set(id,image1);
	image1.onload = ApplicationMain.image_onLoad;
	image1.src = id;
	ApplicationMain.total++;
	var image2 = new Image();
	id = "styles/gradient/arrow_down_disabled.png";
	ApplicationMain.images.set(id,image2);
	image2.onload = ApplicationMain.image_onLoad;
	image2.src = id;
	ApplicationMain.total++;
	var image3 = new Image();
	id = "styles/gradient/arrow_left.png";
	ApplicationMain.images.set(id,image3);
	image3.onload = ApplicationMain.image_onLoad;
	image3.src = id;
	ApplicationMain.total++;
	var image4 = new Image();
	id = "styles/gradient/arrow_left_disabled.png";
	ApplicationMain.images.set(id,image4);
	image4.onload = ApplicationMain.image_onLoad;
	image4.src = id;
	ApplicationMain.total++;
	var image5 = new Image();
	id = "styles/gradient/arrow_right.png";
	ApplicationMain.images.set(id,image5);
	image5.onload = ApplicationMain.image_onLoad;
	image5.src = id;
	ApplicationMain.total++;
	var image6 = new Image();
	id = "styles/gradient/arrow_right2.png";
	ApplicationMain.images.set(id,image6);
	image6.onload = ApplicationMain.image_onLoad;
	image6.src = id;
	ApplicationMain.total++;
	var image7 = new Image();
	id = "styles/gradient/arrow_right_dark.png";
	ApplicationMain.images.set(id,image7);
	image7.onload = ApplicationMain.image_onLoad;
	image7.src = id;
	ApplicationMain.total++;
	var image8 = new Image();
	id = "styles/gradient/arrow_right_disabled.png";
	ApplicationMain.images.set(id,image8);
	image8.onload = ApplicationMain.image_onLoad;
	image8.src = id;
	ApplicationMain.total++;
	var image9 = new Image();
	id = "styles/gradient/arrow_up.png";
	ApplicationMain.images.set(id,image9);
	image9.onload = ApplicationMain.image_onLoad;
	image9.src = id;
	ApplicationMain.total++;
	var image10 = new Image();
	id = "styles/gradient/arrow_up_disabled.png";
	ApplicationMain.images.set(id,image10);
	image10.onload = ApplicationMain.image_onLoad;
	image10.src = id;
	ApplicationMain.total++;
	var image11 = new Image();
	id = "styles/gradient/circle_dark.png";
	ApplicationMain.images.set(id,image11);
	image11.onload = ApplicationMain.image_onLoad;
	image11.src = id;
	ApplicationMain.total++;
	var image12 = new Image();
	id = "styles/gradient/cross_dark.png";
	ApplicationMain.images.set(id,image12);
	image12.onload = ApplicationMain.image_onLoad;
	image12.src = id;
	ApplicationMain.total++;
	var image13 = new Image();
	id = "styles/gradient/cross_dark_disabled.png";
	ApplicationMain.images.set(id,image13);
	image13.onload = ApplicationMain.image_onLoad;
	image13.src = id;
	ApplicationMain.total++;
	var image14 = new Image();
	id = "styles/gradient/gripper_horizontal.png";
	ApplicationMain.images.set(id,image14);
	image14.onload = ApplicationMain.image_onLoad;
	image14.src = id;
	ApplicationMain.total++;
	var image15 = new Image();
	id = "styles/gradient/gripper_horizontal_disabled.png";
	ApplicationMain.images.set(id,image15);
	image15.onload = ApplicationMain.image_onLoad;
	image15.src = id;
	ApplicationMain.total++;
	var image16 = new Image();
	id = "styles/gradient/gripper_vertical.png";
	ApplicationMain.images.set(id,image16);
	image16.onload = ApplicationMain.image_onLoad;
	image16.src = id;
	ApplicationMain.total++;
	var image17 = new Image();
	id = "styles/gradient/gripper_vertical_disabled.png";
	ApplicationMain.images.set(id,image17);
	image17.onload = ApplicationMain.image_onLoad;
	image17.src = id;
	ApplicationMain.total++;
	var image18 = new Image();
	id = "styles/windows/button.png";
	ApplicationMain.images.set(id,image18);
	image18.onload = ApplicationMain.image_onLoad;
	image18.src = id;
	ApplicationMain.total++;
	var image19 = new Image();
	id = "styles/windows/checkbox.png";
	ApplicationMain.images.set(id,image19);
	image19.onload = ApplicationMain.image_onLoad;
	image19.src = id;
	ApplicationMain.total++;
	var image20 = new Image();
	id = "styles/windows/container.png";
	ApplicationMain.images.set(id,image20);
	image20.onload = ApplicationMain.image_onLoad;
	image20.src = id;
	ApplicationMain.total++;
	var image21 = new Image();
	id = "styles/windows/glyphs/down_arrow.png";
	ApplicationMain.images.set(id,image21);
	image21.onload = ApplicationMain.image_onLoad;
	image21.src = id;
	ApplicationMain.total++;
	var image22 = new Image();
	id = "styles/windows/glyphs/hscroll_thumb_gripper_down.png";
	ApplicationMain.images.set(id,image22);
	image22.onload = ApplicationMain.image_onLoad;
	image22.src = id;
	ApplicationMain.total++;
	var image23 = new Image();
	id = "styles/windows/glyphs/hscroll_thumb_gripper_over.png";
	ApplicationMain.images.set(id,image23);
	image23.onload = ApplicationMain.image_onLoad;
	image23.src = id;
	ApplicationMain.total++;
	var image24 = new Image();
	id = "styles/windows/glyphs/hscroll_thumb_gripper_up.png";
	ApplicationMain.images.set(id,image24);
	image24.onload = ApplicationMain.image_onLoad;
	image24.src = id;
	ApplicationMain.total++;
	var image25 = new Image();
	id = "styles/windows/glyphs/left_arrow.png";
	ApplicationMain.images.set(id,image25);
	image25.onload = ApplicationMain.image_onLoad;
	image25.src = id;
	ApplicationMain.total++;
	var image26 = new Image();
	id = "styles/windows/glyphs/right_arrow.png";
	ApplicationMain.images.set(id,image26);
	image26.onload = ApplicationMain.image_onLoad;
	image26.src = id;
	ApplicationMain.total++;
	var image27 = new Image();
	id = "styles/windows/glyphs/up_arrow.png";
	ApplicationMain.images.set(id,image27);
	image27.onload = ApplicationMain.image_onLoad;
	image27.src = id;
	ApplicationMain.total++;
	var image28 = new Image();
	id = "styles/windows/glyphs/vscroll_thumb_gripper_down.png";
	ApplicationMain.images.set(id,image28);
	image28.onload = ApplicationMain.image_onLoad;
	image28.src = id;
	ApplicationMain.total++;
	var image29 = new Image();
	id = "styles/windows/glyphs/vscroll_thumb_gripper_over.png";
	ApplicationMain.images.set(id,image29);
	image29.onload = ApplicationMain.image_onLoad;
	image29.src = id;
	ApplicationMain.total++;
	var image30 = new Image();
	id = "styles/windows/glyphs/vscroll_thumb_gripper_up.png";
	ApplicationMain.images.set(id,image30);
	image30.onload = ApplicationMain.image_onLoad;
	image30.src = id;
	ApplicationMain.total++;
	var image31 = new Image();
	id = "styles/windows/hprogress.png";
	ApplicationMain.images.set(id,image31);
	image31.onload = ApplicationMain.image_onLoad;
	image31.src = id;
	ApplicationMain.total++;
	var image32 = new Image();
	id = "styles/windows/hscroll.png";
	ApplicationMain.images.set(id,image32);
	image32.onload = ApplicationMain.image_onLoad;
	image32.src = id;
	ApplicationMain.total++;
	var image33 = new Image();
	id = "styles/windows/listview.png";
	ApplicationMain.images.set(id,image33);
	image33.onload = ApplicationMain.image_onLoad;
	image33.src = id;
	ApplicationMain.total++;
	var image34 = new Image();
	id = "styles/windows/optionbox.png";
	ApplicationMain.images.set(id,image34);
	image34.onload = ApplicationMain.image_onLoad;
	image34.src = id;
	ApplicationMain.total++;
	var image35 = new Image();
	id = "styles/windows/popup.png";
	ApplicationMain.images.set(id,image35);
	image35.onload = ApplicationMain.image_onLoad;
	image35.src = id;
	ApplicationMain.total++;
	var image36 = new Image();
	id = "styles/windows/tab.png";
	ApplicationMain.images.set(id,image36);
	image36.onload = ApplicationMain.image_onLoad;
	image36.src = id;
	ApplicationMain.total++;
	var image37 = new Image();
	id = "styles/windows/textinput.png";
	ApplicationMain.images.set(id,image37);
	image37.onload = ApplicationMain.image_onLoad;
	image37.src = id;
	ApplicationMain.total++;
	var image38 = new Image();
	id = "styles/windows/vprogress.png";
	ApplicationMain.images.set(id,image38);
	image38.onload = ApplicationMain.image_onLoad;
	image38.src = id;
	ApplicationMain.total++;
	var image39 = new Image();
	id = "styles/windows/vscroll.png";
	ApplicationMain.images.set(id,image39);
	image39.onload = ApplicationMain.image_onLoad;
	image39.src = id;
	ApplicationMain.total++;
	var image40 = new Image();
	id = "img/rtfview/edit-alignment-center.png";
	ApplicationMain.images.set(id,image40);
	image40.onload = ApplicationMain.image_onLoad;
	image40.src = id;
	ApplicationMain.total++;
	var image41 = new Image();
	id = "img/rtfview/edit-alignment-justify.png";
	ApplicationMain.images.set(id,image41);
	image41.onload = ApplicationMain.image_onLoad;
	image41.src = id;
	ApplicationMain.total++;
	var image42 = new Image();
	id = "img/rtfview/edit-alignment-left.png";
	ApplicationMain.images.set(id,image42);
	image42.onload = ApplicationMain.image_onLoad;
	image42.src = id;
	ApplicationMain.total++;
	var image43 = new Image();
	id = "img/rtfview/edit-alignment-right.png";
	ApplicationMain.images.set(id,image43);
	image43.onload = ApplicationMain.image_onLoad;
	image43.src = id;
	ApplicationMain.total++;
	var image44 = new Image();
	id = "img/rtfview/edit-bold.png";
	ApplicationMain.images.set(id,image44);
	image44.onload = ApplicationMain.image_onLoad;
	image44.src = id;
	ApplicationMain.total++;
	var image45 = new Image();
	id = "img/rtfview/edit-italic.png";
	ApplicationMain.images.set(id,image45);
	image45.onload = ApplicationMain.image_onLoad;
	image45.src = id;
	ApplicationMain.total++;
	var image46 = new Image();
	id = "img/rtfview/edit-list.png";
	ApplicationMain.images.set(id,image46);
	image46.onload = ApplicationMain.image_onLoad;
	image46.src = id;
	ApplicationMain.total++;
	var image47 = new Image();
	id = "img/rtfview/edit-underline.png";
	ApplicationMain.images.set(id,image47);
	image47.onload = ApplicationMain.image_onLoad;
	image47.src = id;
	ApplicationMain.total++;
	var image48 = new Image();
	id = "img/slinky_small.jpg";
	ApplicationMain.images.set(id,image48);
	image48.onload = ApplicationMain.image_onLoad;
	image48.src = id;
	ApplicationMain.total++;
	var image49 = new Image();
	id = "img/slinky_tiny.jpg";
	ApplicationMain.images.set(id,image49);
	image49.onload = ApplicationMain.image_onLoad;
	image49.src = id;
	ApplicationMain.total++;
	if(ApplicationMain.total == 0) ApplicationMain.start(); else {
		var $it0 = ApplicationMain.urlLoaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var urlLoader = ApplicationMain.urlLoaders.get(path);
			urlLoader.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader.load(new flash.net.URLRequest(path));
		}
		var _g = 0;
		while(_g < sounds.length) {
			var soundName = sounds[_g];
			++_g;
			var sound = new flash.media.Sound();
			sound.addEventListener(flash.events.Event.COMPLETE,ApplicationMain.sound_onComplete);
			sound.addEventListener(flash.events.IOErrorEvent.IO_ERROR,ApplicationMain.sound_onIOError);
			sound.load(new flash.net.URLRequest(soundName + ".ogg"));
		}
	}
};
ApplicationMain.start = function() {
	ApplicationMain.preloader.addEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
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
	ApplicationMain.preloader.removeEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	flash.Lib.current.removeChild(ApplicationMain.preloader);
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
		if(js.Boot.__instanceof(instance,flash.display.DisplayObject)) flash.Lib.current.addChild(instance); else {
			haxe.Log.trace("Error: No entry point found",{ fileName : "ApplicationMain.hx", lineNumber : 704, className : "ApplicationMain", methodName : "preloader_onComplete"});
			haxe.Log.trace("If you are using DCE with a static main, you may need to @:keep the function",{ fileName : "ApplicationMain.hx", lineNumber : 705, className : "ApplicationMain", methodName : "preloader_onComplete"});
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
var flash = {};
flash.events = {};
flash.events.IEventDispatcher = function() { };
$hxClasses["flash.events.IEventDispatcher"] = flash.events.IEventDispatcher;
flash.events.IEventDispatcher.__name__ = ["flash","events","IEventDispatcher"];
flash.events.IEventDispatcher.prototype = {
	__class__: flash.events.IEventDispatcher
};
flash.events.EventDispatcher = function(target) {
	if(target != null) this.__targetDispatcher = target;
};
$hxClasses["flash.events.EventDispatcher"] = flash.events.EventDispatcher;
flash.events.EventDispatcher.__name__ = ["flash","events","EventDispatcher"];
flash.events.EventDispatcher.__interfaces__ = [flash.events.IEventDispatcher];
flash.events.EventDispatcher.__sortByPriority = function(l1,l2) {
	if(l1.priority == l2.priority) return 0; else if(l1.priority > l2.priority) return -1; else return 1;
};
flash.events.EventDispatcher.prototype = {
	addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		if(this.__eventMap == null) this.__eventMap = new haxe.ds.StringMap();
		if(!this.__eventMap.exists(type)) {
			var list = new Array();
			list.push(new flash.events._EventDispatcher.Listener(listener,useCapture,priority));
			this.__eventMap.set(type,list);
		} else {
			var list1 = this.__eventMap.get(type);
			list1.push(new flash.events._EventDispatcher.Listener(listener,useCapture,priority));
			list1.sort(flash.events.EventDispatcher.__sortByPriority);
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
	,__class__: flash.events.EventDispatcher
};
flash.display = {};
flash.display.IBitmapDrawable = function() { };
$hxClasses["flash.display.IBitmapDrawable"] = flash.display.IBitmapDrawable;
flash.display.IBitmapDrawable.__name__ = ["flash","display","IBitmapDrawable"];
flash.display.IBitmapDrawable.prototype = {
	__class__: flash.display.IBitmapDrawable
};
flash.display.DisplayObject = function() {
	flash.events.EventDispatcher.call(this);
	this.set_alpha(1);
	this.set_rotation(0);
	this.set_scaleX(1);
	this.set_scaleY(1);
	this.set_visible(true);
	this.set_x(0);
	this.set_y(0);
	this.__worldAlpha = 1;
	this.__worldTransform = new flash.geom.Matrix();
	this.set_name("instance" + ++flash.display.DisplayObject.__instanceCount);
};
$hxClasses["flash.display.DisplayObject"] = flash.display.DisplayObject;
flash.display.DisplayObject.__name__ = ["flash","display","DisplayObject"];
flash.display.DisplayObject.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.DisplayObject.__super__ = flash.events.EventDispatcher;
flash.display.DisplayObject.prototype = $extend(flash.events.EventDispatcher.prototype,{
	dispatchEvent: function(event) {
		var result = flash.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
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
			matrix = new flash.geom.Matrix(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			matrix.concat(targetCoordinateSpace.__worldTransform.clone().invert());
		}
		var bounds = new flash.geom.Rectangle();
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
			var result = flash.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
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
		this.__getBounds(rect,new flash.geom.Matrix());
	}
	,__getTransform: function() {
		if(flash.display.DisplayObject.__worldTransformDirty > 0) {
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
	,__renderMask: function(renderSession) {
	}
	,__setStageReference: function(stage) {
		if(this.stage != stage) {
			if(this.stage != null) this.dispatchEvent(new flash.events.Event(flash.events.Event.REMOVED_FROM_STAGE,false,false));
			this.stage = stage;
			if(stage != null) this.dispatchEvent(new flash.events.Event(flash.events.Event.ADDED_TO_STAGE,false,false));
		}
	}
	,__setRenderDirty: function() {
		if(!this.__renderDirty) {
			this.__renderDirty = true;
			flash.display.DisplayObject.__worldRenderDirty++;
		}
	}
	,__setTransformDirty: function() {
		if(!this.__transformDirty) {
			this.__transformDirty = true;
			flash.display.DisplayObject.__worldTransformDirty++;
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
			flash.display.DisplayObject.__worldTransformDirty--;
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
			flash.display.DisplayObject.__worldTransformDirty--;
		}
	}
	,get_alpha: function() {
		return this.__alpha;
	}
	,set_alpha: function(value) {
		if(value != this.__alpha) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				flash.display.DisplayObject.__worldRenderDirty++;
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
		return 0;
	}
	,set_height: function(value) {
		return 0;
	}
	,get_mask: function() {
		return this.__mask;
	}
	,set_mask: function(value) {
		if(value != this.__mask) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				flash.display.DisplayObject.__worldRenderDirty++;
			}
		}
		if(this.__mask != null) this.__mask.__isMask = false;
		if(value != null) value.__isMask = true;
		return this.__mask = value;
	}
	,get_mouseX: function() {
		return this.globalToLocal(new flash.geom.Point(this.stage.__mouseX,0)).x;
	}
	,get_mouseY: function() {
		return this.globalToLocal(new flash.geom.Point(0,this.stage.__mouseY)).y;
	}
	,get_name: function() {
		return this.__name;
	}
	,set_name: function(value) {
		return this.__name = value;
	}
	,get_rotation: function() {
		return this.__rotation;
	}
	,set_rotation: function(value) {
		if(value != this.__rotation) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				flash.display.DisplayObject.__worldTransformDirty++;
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
				flash.display.DisplayObject.__worldTransformDirty++;
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
				flash.display.DisplayObject.__worldTransformDirty++;
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
				flash.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__scrollRect = value;
	}
	,get_transform: function() {
		if(this.__transform == null) this.__transform = new flash.geom.Transform(this);
		return this.__transform;
	}
	,set_transform: function(value) {
		if(value == null) throw new flash.errors.TypeError("Parameter transform must be non-null.");
		if(this.__transform == null) this.__transform = new flash.geom.Transform(this);
		if(!this.__transformDirty) {
			this.__transformDirty = true;
			flash.display.DisplayObject.__worldTransformDirty++;
		}
		this.__transform.set_matrix(value.get_matrix().clone());
		this.__transform.colorTransform = new flash.geom.ColorTransform(value.colorTransform.redMultiplier,value.colorTransform.greenMultiplier,value.colorTransform.blueMultiplier,value.colorTransform.alphaMultiplier,value.colorTransform.redOffset,value.colorTransform.greenOffset,value.colorTransform.blueOffset,value.colorTransform.alphaOffset);
		return this.__transform;
	}
	,get_visible: function() {
		return this.__visible;
	}
	,set_visible: function(value) {
		if(value != this.__visible) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				flash.display.DisplayObject.__worldRenderDirty++;
			}
		}
		return this.__visible = value;
	}
	,get_width: function() {
		return 0;
	}
	,set_width: function(value) {
		return 0;
	}
	,get_x: function() {
		return this.__x;
	}
	,set_x: function(value) {
		if(value != this.__x) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				flash.display.DisplayObject.__worldTransformDirty++;
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
				flash.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__y = value;
	}
	,__class__: flash.display.DisplayObject
	,__properties__: {set_y:"set_y",get_y:"get_y",set_x:"set_x",get_x:"get_x",set_width:"set_width",get_width:"get_width",set_visible:"set_visible",get_visible:"get_visible",set_transform:"set_transform",get_transform:"get_transform",set_scrollRect:"set_scrollRect",get_scrollRect:"get_scrollRect",set_scaleY:"set_scaleY",get_scaleY:"get_scaleY",set_scaleX:"set_scaleX",get_scaleX:"get_scaleX",set_rotation:"set_rotation",get_rotation:"get_rotation",set_name:"set_name",get_name:"get_name",get_mouseY:"get_mouseY",get_mouseX:"get_mouseX",set_mask:"set_mask",get_mask:"get_mask",set_height:"set_height",get_height:"get_height",set_filters:"set_filters",get_filters:"get_filters",set_alpha:"set_alpha",get_alpha:"get_alpha"}
});
flash.display.InteractiveObject = function() {
	flash.display.DisplayObject.call(this);
	this.mouseEnabled = true;
};
$hxClasses["flash.display.InteractiveObject"] = flash.display.InteractiveObject;
flash.display.InteractiveObject.__name__ = ["flash","display","InteractiveObject"];
flash.display.InteractiveObject.__super__ = flash.display.DisplayObject;
flash.display.InteractiveObject.prototype = $extend(flash.display.DisplayObject.prototype,{
	__getInteractive: function(stack) {
		stack.push(this);
		if(this.parent != null) this.parent.__getInteractive(stack);
	}
	,__class__: flash.display.InteractiveObject
});
flash.display.DisplayObjectContainer = function() {
	flash.display.InteractiveObject.call(this);
	this.mouseChildren = true;
	this.__children = new Array();
	this.__removedChildren = new Array();
};
$hxClasses["flash.display.DisplayObjectContainer"] = flash.display.DisplayObjectContainer;
flash.display.DisplayObjectContainer.__name__ = ["flash","display","DisplayObjectContainer"];
flash.display.DisplayObjectContainer.__super__ = flash.display.InteractiveObject;
flash.display.DisplayObjectContainer.prototype = $extend(flash.display.InteractiveObject.prototype,{
	addChild: function(child) {
		if(child != null) {
			if(child.parent != null) child.parent.removeChild(child);
			this.__children.push(child);
			child.parent = this;
			if(this.stage != null) child.__setStageReference(this.stage);
			if(!child.__transformDirty) {
				child.__transformDirty = true;
				flash.display.DisplayObject.__worldTransformDirty++;
			}
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				flash.display.DisplayObject.__worldRenderDirty++;
			}
			child.dispatchEvent(new flash.events.Event(flash.events.Event.ADDED,true));
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
				flash.display.DisplayObject.__worldTransformDirty++;
			}
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				flash.display.DisplayObject.__worldRenderDirty++;
			}
			child.dispatchEvent(new flash.events.Event(flash.events.Event.ADDED,true));
		}
		this.__children.splice(index,0,child);
		return child;
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
				flash.display.DisplayObject.__worldTransformDirty++;
			}
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				flash.display.DisplayObject.__worldRenderDirty++;
			}
			child.dispatchEvent(new flash.events.Event(flash.events.Event.REMOVED,true));
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
		if(beginIndex > this.__children.length - 1) return; else if(endIndex < beginIndex || beginIndex < 0 || endIndex > this.__children.length) throw new flash.errors.RangeError("The supplied index is out of bounds.");
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
		return flash.display.InteractiveObject.prototype.__broadcast.call(this,event,notifyChilden);
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
	,__renderMask: function(renderSession) {
		var bounds = new flash.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new flash.geom.Matrix());
		renderSession.context.rect(0,0,bounds.width,bounds.height);
	}
	,__setStageReference: function(stage) {
		if(this.stage != stage) {
			if(this.stage != null) this.dispatchEvent(new flash.events.Event(flash.events.Event.REMOVED_FROM_STAGE,false,false));
			this.stage = stage;
			if(stage != null) this.dispatchEvent(new flash.events.Event(flash.events.Event.ADDED_TO_STAGE,false,false));
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
		flash.display.InteractiveObject.prototype.__update.call(this,transformOnly,updateChildren);
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
		flash.display.InteractiveObject.prototype.__updateChildren.call(this,transformOnly);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__update(transformOnly,true);
		}
	}
	,get_height: function() {
		var bounds = new flash.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new flash.geom.Matrix());
		return bounds.height * this.get_scaleY();
	}
	,set_height: function(value) {
		var bounds = new flash.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new flash.geom.Matrix());
		if(value != bounds.height) this.set_scaleY(value / bounds.height); else this.set_scaleY(1);
		return value;
	}
	,get_numChildren: function() {
		return this.__children.length;
	}
	,get_width: function() {
		var bounds = new flash.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new flash.geom.Matrix());
		return bounds.width * this.get_scaleX();
	}
	,set_width: function(value) {
		var bounds = new flash.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new flash.geom.Matrix());
		if(value != bounds.width) this.set_scaleX(value / bounds.width); else this.set_scaleX(1);
		return value;
	}
	,__class__: flash.display.DisplayObjectContainer
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{get_numChildren:"get_numChildren"})
});
flash.display.Sprite = function() {
	flash.display.DisplayObjectContainer.call(this);
};
$hxClasses["flash.display.Sprite"] = flash.display.Sprite;
flash.display.Sprite.__name__ = ["flash","display","Sprite"];
flash.display.Sprite.__super__ = flash.display.DisplayObjectContainer;
flash.display.Sprite.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	__getBounds: function(rect,matrix) {
		flash.display.DisplayObjectContainer.prototype.__getBounds.call(this,rect,matrix);
		if(this.__graphics != null) this.__graphics.__getBounds(rect,matrix != null?matrix:this.__worldTransform);
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || interactiveOnly && !this.mouseEnabled) return false;
		var length = 0;
		if(stack != null) length = stack.length;
		if(flash.display.DisplayObjectContainer.prototype.__hitTest.call(this,x,y,shapeFlag,stack,interactiveOnly)) return true; else if(this.__graphics != null && this.__graphics.__hitTest(x,y,shapeFlag,this.__worldTransform)) {
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
		flash.display.DisplayObjectContainer.prototype.__renderCanvas.call(this,renderSession);
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
					var transform = new flash.geom.Matrix();
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
		flash.display.DisplayObjectContainer.prototype.__renderDOM.call(this,renderSession);
	}
	,__renderMask: function(renderSession) {
		if(this.__graphics != null) this.__graphics.__renderMask(renderSession); else flash.display.DisplayObjectContainer.prototype.__renderMask.call(this,renderSession);
	}
	,get_graphics: function() {
		if(this.__graphics == null) this.__graphics = new flash.display.Graphics();
		return this.__graphics;
	}
	,__class__: flash.display.Sprite
	,__properties__: $extend(flash.display.DisplayObjectContainer.prototype.__properties__,{get_graphics:"get_graphics"})
});
var Main = function() {
	flash.display.Sprite.call(this);
	this.addEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.added));
};
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.main = function() {
	flash.Lib.current.stage.align = flash.display.StageAlign.TOP_LEFT;
	flash.Lib.current.stage.scaleMode = flash.display.StageScaleMode.NO_SCALE;
	flash.Lib.current.addChild(new Main());
};
Main.__super__ = flash.display.Sprite;
Main.prototype = $extend(flash.display.Sprite.prototype,{
	resize: function(e) {
		if(!this.inited) this.init();
	}
	,init: function() {
		if(this.inited) return;
		this.inited = true;
		haxe.ui.toolkit.core.Toolkit.init();
		haxe.ui.toolkit.core.Toolkit.openFullscreen(function(root) {
			var button = new haxe.ui.toolkit.controls.Button();
			button.set_x(button.set_y(100));
			button.set_text("Click me");
			root.addChild(button);
		});
	}
	,added: function(e) {
		this.removeEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.added));
		this.stage.addEventListener(flash.events.Event.RESIZE,$bind(this,this.resize));
		this.init();
	}
	,__class__: Main
});
var DocumentClass = function() {
	this.stage = flash.Lib.current.stage;
	Main.call(this);
	this.dispatchEvent(new flash.events.Event(flash.events.Event.ADDED_TO_STAGE,false,false));
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = ["DocumentClass"];
DocumentClass.__super__ = Main;
DocumentClass.prototype = $extend(Main.prototype,{
	__class__: DocumentClass
});
var DateTools = function() { };
$hxClasses["DateTools"] = DateTools;
DateTools.__name__ = ["DateTools"];
DateTools.__format_get = function(d,e) {
	switch(e) {
	case "%":
		return "%";
	case "C":
		return StringTools.lpad(Std.string(Std["int"](d.getFullYear() / 100)),"0",2);
	case "d":
		return StringTools.lpad(Std.string(d.getDate()),"0",2);
	case "D":
		return DateTools.__format(d,"%m/%d/%y");
	case "e":
		return Std.string(d.getDate());
	case "H":case "k":
		return StringTools.lpad(Std.string(d.getHours()),e == "H"?"0":" ",2);
	case "I":case "l":
		var hour = d.getHours() % 12;
		return StringTools.lpad(Std.string(hour == 0?12:hour),e == "I"?"0":" ",2);
	case "m":
		return StringTools.lpad(Std.string(d.getMonth() + 1),"0",2);
	case "M":
		return StringTools.lpad(Std.string(d.getMinutes()),"0",2);
	case "n":
		return "\n";
	case "p":
		if(d.getHours() > 11) return "PM"; else return "AM";
		break;
	case "r":
		return DateTools.__format(d,"%I:%M:%S %p");
	case "R":
		return DateTools.__format(d,"%H:%M");
	case "s":
		return Std.string(Std["int"](d.getTime() / 1000));
	case "S":
		return StringTools.lpad(Std.string(d.getSeconds()),"0",2);
	case "t":
		return "\t";
	case "T":
		return DateTools.__format(d,"%H:%M:%S");
	case "u":
		var t = d.getDay();
		if(t == 0) return "7"; else if(t == null) return "null"; else return "" + t;
		break;
	case "w":
		return Std.string(d.getDay());
	case "y":
		return StringTools.lpad(Std.string(d.getFullYear() % 100),"0",2);
	case "Y":
		return Std.string(d.getFullYear());
	default:
		throw "Date.format %" + e + "- not implemented yet.";
	}
};
DateTools.__format = function(d,f) {
	var r = new StringBuf();
	var p = 0;
	while(true) {
		var np = f.indexOf("%",p);
		if(np < 0) break;
		r.addSub(f,p,np - p);
		r.add(DateTools.__format_get(d,HxOverrides.substr(f,np + 1,1)));
		p = np + 2;
	}
	r.addSub(f,p,f.length - p);
	return r.b;
};
DateTools.format = function(d,f) {
	return DateTools.__format(d,f);
};
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
		haxe.Log.trace("AssetLibrary getBytes",{ fileName : "Assets.hx", lineNumber : 1139, className : "openfl.AssetLibrary", methodName : "getBytes"});
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
	openfl.AssetLibrary.call(this);
	this.addExternal("styles/gradient/arrow_down.png","image","styles/gradient/arrow_down.png");
	this.addExternal("styles/gradient/arrow_down_dark.png","image","styles/gradient/arrow_down_dark.png");
	this.addExternal("styles/gradient/arrow_down_disabled.png","image","styles/gradient/arrow_down_disabled.png");
	this.addExternal("styles/gradient/arrow_left.png","image","styles/gradient/arrow_left.png");
	this.addExternal("styles/gradient/arrow_left_disabled.png","image","styles/gradient/arrow_left_disabled.png");
	this.addExternal("styles/gradient/arrow_right.png","image","styles/gradient/arrow_right.png");
	this.addExternal("styles/gradient/arrow_right2.png","image","styles/gradient/arrow_right2.png");
	this.addExternal("styles/gradient/arrow_right_dark.png","image","styles/gradient/arrow_right_dark.png");
	this.addExternal("styles/gradient/arrow_right_disabled.png","image","styles/gradient/arrow_right_disabled.png");
	this.addExternal("styles/gradient/arrow_up.png","image","styles/gradient/arrow_up.png");
	this.addExternal("styles/gradient/arrow_up_disabled.png","image","styles/gradient/arrow_up_disabled.png");
	this.addExternal("styles/gradient/circle_dark.png","image","styles/gradient/circle_dark.png");
	this.addExternal("styles/gradient/cross_dark.png","image","styles/gradient/cross_dark.png");
	this.addExternal("styles/gradient/cross_dark_disabled.png","image","styles/gradient/cross_dark_disabled.png");
	this.addExternal("styles/gradient/gripper_horizontal.png","image","styles/gradient/gripper_horizontal.png");
	this.addExternal("styles/gradient/gripper_horizontal_disabled.png","image","styles/gradient/gripper_horizontal_disabled.png");
	this.addExternal("styles/gradient/gripper_vertical.png","image","styles/gradient/gripper_vertical.png");
	this.addExternal("styles/gradient/gripper_vertical_disabled.png","image","styles/gradient/gripper_vertical_disabled.png");
	this.addExternal("styles/windows/button.png","image","styles/windows/button.png");
	this.addExternal("styles/windows/checkbox.png","image","styles/windows/checkbox.png");
	this.addExternal("styles/windows/container.png","image","styles/windows/container.png");
	this.addExternal("styles/windows/glyphs/down_arrow.png","image","styles/windows/glyphs/down_arrow.png");
	this.addExternal("styles/windows/glyphs/hscroll_thumb_gripper_down.png","image","styles/windows/glyphs/hscroll_thumb_gripper_down.png");
	this.addExternal("styles/windows/glyphs/hscroll_thumb_gripper_over.png","image","styles/windows/glyphs/hscroll_thumb_gripper_over.png");
	this.addExternal("styles/windows/glyphs/hscroll_thumb_gripper_up.png","image","styles/windows/glyphs/hscroll_thumb_gripper_up.png");
	this.addExternal("styles/windows/glyphs/left_arrow.png","image","styles/windows/glyphs/left_arrow.png");
	this.addExternal("styles/windows/glyphs/right_arrow.png","image","styles/windows/glyphs/right_arrow.png");
	this.addExternal("styles/windows/glyphs/up_arrow.png","image","styles/windows/glyphs/up_arrow.png");
	this.addExternal("styles/windows/glyphs/vscroll_thumb_gripper_down.png","image","styles/windows/glyphs/vscroll_thumb_gripper_down.png");
	this.addExternal("styles/windows/glyphs/vscroll_thumb_gripper_over.png","image","styles/windows/glyphs/vscroll_thumb_gripper_over.png");
	this.addExternal("styles/windows/glyphs/vscroll_thumb_gripper_up.png","image","styles/windows/glyphs/vscroll_thumb_gripper_up.png");
	this.addExternal("styles/windows/hprogress.png","image","styles/windows/hprogress.png");
	this.addExternal("styles/windows/hscroll.png","image","styles/windows/hscroll.png");
	this.addExternal("styles/windows/listview.png","image","styles/windows/listview.png");
	this.addExternal("styles/windows/optionbox.png","image","styles/windows/optionbox.png");
	this.addExternal("styles/windows/popup.png","image","styles/windows/popup.png");
	this.addExternal("styles/windows/tab.png","image","styles/windows/tab.png");
	this.addExternal("styles/windows/textinput.png","image","styles/windows/textinput.png");
	this.addExternal("styles/windows/vprogress.png","image","styles/windows/vprogress.png");
	this.addExternal("styles/windows/vscroll.png","image","styles/windows/vscroll.png");
	this.addExternal("img/rtfview/edit-alignment-center.png","image","img/rtfview/edit-alignment-center.png");
	this.addExternal("img/rtfview/edit-alignment-justify.png","image","img/rtfview/edit-alignment-justify.png");
	this.addExternal("img/rtfview/edit-alignment-left.png","image","img/rtfview/edit-alignment-left.png");
	this.addExternal("img/rtfview/edit-alignment-right.png","image","img/rtfview/edit-alignment-right.png");
	this.addExternal("img/rtfview/edit-bold.png","image","img/rtfview/edit-bold.png");
	this.addExternal("img/rtfview/edit-italic.png","image","img/rtfview/edit-italic.png");
	this.addExternal("img/rtfview/edit-list.png","image","img/rtfview/edit-list.png");
	this.addExternal("img/rtfview/edit-underline.png","image","img/rtfview/edit-underline.png");
	this.addExternal("img/slinky_small.jpg","image","img/slinky_small.jpg");
	this.addExternal("img/slinky_tiny.jpg","image","img/slinky_tiny.jpg");
};
$hxClasses["DefaultAssetLibrary"] = DefaultAssetLibrary;
DefaultAssetLibrary.__name__ = ["DefaultAssetLibrary"];
DefaultAssetLibrary.__super__ = openfl.AssetLibrary;
DefaultAssetLibrary.prototype = $extend(openfl.AssetLibrary.prototype,{
	addEmbed: function(id,kind,value) {
		var value1 = value;
		DefaultAssetLibrary.className.set(id,value1);
		var value2 = Reflect.field(openfl.AssetType,kind.toUpperCase());
		DefaultAssetLibrary.type.set(id,value2);
	}
	,addExternal: function(id,kind,value) {
		DefaultAssetLibrary.path.set(id,value);
		var value1 = Reflect.field(openfl.AssetType,kind.toUpperCase());
		DefaultAssetLibrary.type.set(id,value1);
	}
	,exists: function(id,type) {
		var assetType = DefaultAssetLibrary.type.get(id);
		if(assetType != null) {
			if(assetType == type || (type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC) && (assetType == openfl.AssetType.MUSIC || assetType == openfl.AssetType.SOUND)) return true;
			if(type == openfl.AssetType.BINARY || type == null) return true;
		}
		return false;
	}
	,getBitmapData: function(id) {
		return flash.display.BitmapData.fromImage((function($this) {
			var $r;
			var key = DefaultAssetLibrary.path.get(id);
			$r = ApplicationMain.images.get(key);
			return $r;
		}(this)));
	}
	,getBytes: function(id) {
		return null;
	}
	,getFont: function(id) {
		return js.Boot.__cast(Type.createInstance(DefaultAssetLibrary.className.get(id),[]) , flash.text.Font);
	}
	,getMusic: function(id) {
		var sound = new flash.media.Sound();
		sound.__buffer = true;
		sound.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
		return sound;
	}
	,getPath: function(id) {
		return DefaultAssetLibrary.path.get(id);
	}
	,getSound: function(id) {
		return new flash.media.Sound(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
	}
	,getText: function(id) {
		var bytes = null;
		var data = ((function($this) {
			var $r;
			var key = DefaultAssetLibrary.path.get(id);
			$r = ApplicationMain.urlLoaders.get(key);
			return $r;
		}(this))).data;
		if(typeof(data) == "string") return data; else if(js.Boot.__instanceof(data,flash.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes.readUTFBytes(bytes.length);
		} else return null;
	}
	,isLocal: function(id,type) {
		return true;
	}
	,loadBitmapData: function(id,handler) {
		if(DefaultAssetLibrary.path.exists(id)) {
			var loader = new flash.display.Loader();
			loader.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,function(event) {
				handler((js.Boot.__cast(event.currentTarget.content , flash.display.Bitmap)).bitmapData);
			});
			loader.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
		} else handler(this.getBitmapData(id));
	}
	,loadBytes: function(id,handler) {
		if(DefaultAssetLibrary.path.exists(id)) {
			var loader = new flash.net.URLLoader();
			loader.addEventListener(flash.events.Event.COMPLETE,function(event) {
				var bytes = new flash.utils.ByteArray();
				bytes.writeUTFBytes(event.currentTarget.data);
				bytes.position = 0;
				handler(bytes);
			});
			loader.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
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
		if(DefaultAssetLibrary.path.exists(id)) {
			var loader = new flash.net.URLLoader();
			loader.addEventListener(flash.events.Event.COMPLETE,function(event) {
				handler(event.currentTarget.data);
			});
			loader.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
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
	,matchedPos: function() {
		if(this.r.m == null) throw "No string matched";
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchSub: function(s,pos,len) {
		if(len == null) len = -1;
		if(this.r.global) {
			this.r.lastIndex = pos;
			this.r.m = this.r.exec(len < 0?s:HxOverrides.substr(s,0,pos + len));
			var b = this.r.m != null;
			if(b) this.r.s = s;
			return b;
		} else {
			var b1 = this.match(len < 0?HxOverrides.substr(s,pos,null):HxOverrides.substr(s,pos,len));
			if(b1) {
				this.r.s = s;
				this.r.m.index += pos;
			}
			return b1;
		}
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,map: function(s,f) {
		var offset = 0;
		var buf = new StringBuf();
		do {
			if(offset >= s.length) break; else if(!this.matchSub(s,offset)) {
				buf.add(HxOverrides.substr(s,offset,null));
				break;
			}
			var p = this.matchedPos();
			buf.add(HxOverrides.substr(s,offset,p.pos - offset));
			buf.add(f(this));
			if(p.len == 0) {
				buf.add(HxOverrides.substr(s,p.pos,1));
				offset = p.pos + 1;
			} else offset = p.pos + p.len;
		} while(this.r.global);
		if(!this.r.global && offset > 0 && offset < s.length) buf.add(HxOverrides.substr(s,offset,null));
		return buf.b;
	}
	,__class__: EReg
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
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
var IntIterator = function(min,max) {
	this.min = min;
	this.max = max;
};
$hxClasses["IntIterator"] = IntIterator;
IntIterator.__name__ = ["IntIterator"];
IntIterator.prototype = {
	__class__: IntIterator
};
var Lambda = function() { };
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
Lambda.has = function(it,elt) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(x == elt) return true;
	}
	return false;
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
	,first: function() {
		if(this.h == null) return null; else return this.h[0];
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,clear: function() {
		this.h = null;
		this.q = null;
		this.length = 0;
	}
	,remove: function(v) {
		var prev = null;
		var l = this.h;
		while(l != null) {
			if(l[0] == v) {
				if(prev == null) this.h = l[1]; else prev[1] = l[1];
				if(this.q == l) this.q = prev;
				this.length--;
				return true;
			}
			prev = l;
			l = l[1];
		}
		return false;
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
	,__class__: List
};
var IMap = function() { };
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
IMap.prototype = {
	__class__: IMap
};
Math.__name__ = ["Math"];
var NMEPreloader = function() {
	flash.display.Sprite.call(this);
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
	this.outline = new flash.display.Sprite();
	this.outline.get_graphics().lineStyle(1,color,0.15,true);
	this.outline.get_graphics().drawRoundRect(0,0,width,height,padding * 2,padding * 2);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new flash.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = flash.display.Sprite;
NMEPreloader.prototype = $extend(flash.display.Sprite.prototype,{
	getBackgroundColor: function() {
		return 16777215;
	}
	,getHeight: function() {
		var height = 480;
		if(height > 0) return height; else return flash.Lib.current.stage.stageHeight;
	}
	,getWidth: function() {
		var width = 800;
		if(width > 0) return width; else return flash.Lib.current.stage.stageWidth;
	}
	,onInit: function() {
	}
	,onLoaded: function() {
		this.dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
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
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) return null; else if(o.__properties__ && (tmp = o.__properties__["get_" + field])) return o[tmp](); else return o[field];
};
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
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
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = Array.prototype.slice.call(arguments);
		return f(a);
	};
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
};
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
StringTools.lpad = function(s,c,l) {
	if(c.length <= 0) return s;
	while(s.length < l) s = c + s;
	return s;
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
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
Type.getSuperClass = function(c) {
	return c.__super__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
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
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2;
		var _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e1 ) {
		return false;
	}
	return true;
};
var XmlType = $hxClasses["XmlType"] = { __ename__ : true, __constructs__ : [] };
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
	,get_nodeValue: function() {
		if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue;
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
	,attributes: function() {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.keys();
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
	,__properties__: {set_nodeValue:"set_nodeValue",get_nodeValue:"get_nodeValue",set_nodeName:"set_nodeName",get_nodeName:"get_nodeName"}
};
var haxe = {};
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
};
haxe.Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe.Timer
};
flash.Lib = function() { };
$hxClasses["flash.Lib"] = flash.Lib;
flash.Lib.__name__ = ["flash","Lib"];
flash.Lib.current = null;
flash.Lib["as"] = function(v,c) {
	if(js.Boot.__instanceof(v,c)) return v; else return null;
};
flash.Lib.attach = function(name) {
	return new flash.display.MovieClip();
};
flash.Lib.create = function(width,height,element,backgroundColor) {
	
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
	var stage = new flash.display.Stage(width,height,element,backgroundColor);
	if(flash.Lib.current == null) {
		flash.Lib.current = new flash.display.MovieClip();
		stage.addChild(flash.Lib.current);
	}
};
flash.Lib.getTimer = function() {
	return Std["int"]((haxe.Timer.stamp() - flash.Lib.__startTime) * 1000);
};
flash.Lib.getURL = function(request,target) {
	if(target == null) target = "_blank";
	window.open(request.url,target);
};
flash.Lib.preventDefaultTouchMove = function() {
	window.document.addEventListener("touchmove",function(evt) {
		evt.preventDefault();
	},false);
};
flash.Lib.trace = function(arg) {
	haxe.Log.trace(arg,{ fileName : "Lib.hx", lineNumber : 108, className : "flash.Lib", methodName : "trace"});
};
flash._Vector = {};
flash._Vector.Vector_Impl_ = function() { };
$hxClasses["flash._Vector.Vector_Impl_"] = flash._Vector.Vector_Impl_;
flash._Vector.Vector_Impl_.__name__ = ["flash","_Vector","Vector_Impl_"];
flash._Vector.Vector_Impl_.__properties__ = {set_fixed:"set_fixed",get_fixed:"get_fixed",set_length:"set_length",get_length:"get_length"}
flash._Vector.Vector_Impl_._new = function(length,fixed) {
	return new Array();
};
flash._Vector.Vector_Impl_.concat = function(this1,a) {
	return this1.concat(a);
};
flash._Vector.Vector_Impl_.copy = function(this1) {
	var a = this1.slice();
	return a;
};
flash._Vector.Vector_Impl_.iterator = function(this1) {
	return HxOverrides.iter(this1);
};
flash._Vector.Vector_Impl_.join = function(this1,sep) {
	return this1.join(sep);
};
flash._Vector.Vector_Impl_.pop = function(this1) {
	return this1.pop();
};
flash._Vector.Vector_Impl_.push = function(this1,x) {
	return this1.push(x);
};
flash._Vector.Vector_Impl_.reverse = function(this1) {
	this1.reverse();
};
flash._Vector.Vector_Impl_.shift = function(this1) {
	return this1.shift();
};
flash._Vector.Vector_Impl_.unshift = function(this1,x) {
	this1.unshift(x);
};
flash._Vector.Vector_Impl_.slice = function(this1,pos,end) {
	return this1.slice(pos,end);
};
flash._Vector.Vector_Impl_.sort = function(this1,f) {
	this1.sort(f);
};
flash._Vector.Vector_Impl_.splice = function(this1,pos,len) {
	return this1.splice(pos,len);
};
flash._Vector.Vector_Impl_.toString = function(this1) {
	return this1.toString();
};
flash._Vector.Vector_Impl_.indexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var _g1 = from;
	var _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this1[i] == x) return i;
	}
	return -1;
};
flash._Vector.Vector_Impl_.lastIndexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var i = this1.length;
	while(--i >= from) if(this1[i] == x) return i;
	return -1;
};
flash._Vector.Vector_Impl_.ofArray = function(a) {
	return flash._Vector.Vector_Impl_.concat(flash._Vector.Vector_Impl_._new(),a);
};
flash._Vector.Vector_Impl_.convert = function(v) {
	return v;
};
flash._Vector.Vector_Impl_.fromArray = function(a) {
	return a;
};
flash._Vector.Vector_Impl_.toArray = function(this1) {
	return this1;
};
flash._Vector.Vector_Impl_.get_length = function(this1) {
	return this1.length;
};
flash._Vector.Vector_Impl_.set_length = function(this1,value) {
	return value;
};
flash._Vector.Vector_Impl_.get_fixed = function(this1) {
	return false;
};
flash._Vector.Vector_Impl_.set_fixed = function(this1,value) {
	return value;
};
flash.display.Bitmap = function(bitmapData,pixelSnapping,smoothing) {
	if(smoothing == null) smoothing = false;
	flash.display.DisplayObjectContainer.call(this);
	this.bitmapData = bitmapData;
	this.pixelSnapping = pixelSnapping;
	this.smoothing = smoothing;
	if(pixelSnapping == null) this.pixelSnapping = flash.display.PixelSnapping.AUTO;
};
$hxClasses["flash.display.Bitmap"] = flash.display.Bitmap;
flash.display.Bitmap.__name__ = ["flash","display","Bitmap"];
flash.display.Bitmap.__super__ = flash.display.DisplayObjectContainer;
flash.display.Bitmap.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	__getBounds: function(rect,matrix) {
		if(this.bitmapData != null) {
			var bounds = new flash.geom.Rectangle(0,0,this.bitmapData.width,this.bitmapData.height);
			bounds = bounds.transform(this.__worldTransform);
			rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
		}
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || this.bitmapData == null) return false;
		var point = this.globalToLocal(new flash.geom.Point(x,y));
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
					flash.display.DisplayObject.__worldTransformDirty++;
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
					flash.display.DisplayObject.__worldTransformDirty++;
				}
				this.set_scaleX(value / this.bitmapData.width);
			}
			return value;
		}
		return 0;
	}
	,__class__: flash.display.Bitmap
});
flash.display.BitmapData = function(width,height,transparent,fillColor) {
	if(fillColor == null) fillColor = -1;
	if(transparent == null) transparent = true;
	this.transparent = transparent;
	if(width > 0 && height > 0) {
		this.width = width;
		this.height = height;
		this.rect = new flash.geom.Rectangle(0,0,width,height);
		this.__createCanvas(width,height);
		if(!transparent) fillColor = -16777216 | fillColor & 16777215;
		this.__fillRect(new flash.geom.Rectangle(0,0,width,height),fillColor);
	}
};
$hxClasses["flash.display.BitmapData"] = flash.display.BitmapData;
flash.display.BitmapData.__name__ = ["flash","display","BitmapData"];
flash.display.BitmapData.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.BitmapData.__base64Encoder = null;
flash.display.BitmapData.fromBase64 = function(base64,type,onload) {
	var bitmapData = new flash.display.BitmapData(0,0,true);
	bitmapData.__loadFromBase64(base64,type,onload);
	return bitmapData;
};
flash.display.BitmapData.fromBytes = function(bytes,rawAlpha,onload) {
	var bitmapData = new flash.display.BitmapData(0,0,true);
	bitmapData.__loadFromBytes(bytes,rawAlpha,onload);
	return bitmapData;
};
flash.display.BitmapData.fromFile = function(path,onload) {
	var bitmapData = new flash.display.BitmapData(0,0,true);
	bitmapData.__sourceImage = new Image();
	bitmapData.__sourceImage.onload = function(_) {
		bitmapData.width = bitmapData.__sourceImage.width;
		bitmapData.height = bitmapData.__sourceImage.height;
		bitmapData.rect = new flash.geom.Rectangle(0,0,bitmapData.__sourceImage.width,bitmapData.__sourceImage.height);
		bitmapData.__valid = true;
		if(onload != null) onload(bitmapData);
	};
	bitmapData.__sourceImage.src = path;
	if(bitmapData.__sourceImage.complete) {
	}
	return bitmapData;
};
flash.display.BitmapData.fromImage = function(image,transparent) {
	if(transparent == null) transparent = true;
	var bitmapData = new flash.display.BitmapData(0,0,transparent);
	bitmapData.__sourceImage = image;
	bitmapData.width = image.width;
	bitmapData.height = image.height;
	bitmapData.rect = new flash.geom.Rectangle(0,0,image.width,image.height);
	bitmapData.__valid = true;
	return bitmapData;
};
flash.display.BitmapData.fromCanvas = function(canvas,transparent) {
	if(transparent == null) transparent = true;
	var bitmapData = new flash.display.BitmapData(0,0,transparent);
	bitmapData.width = canvas.width;
	bitmapData.height = canvas.height;
	bitmapData.rect = new flash.geom.Rectangle(0,0,canvas.width,canvas.height);
	bitmapData.__createCanvas(canvas.width,canvas.height);
	bitmapData.__sourceContext.drawImage(canvas,0,0);
	return bitmapData;
};
flash.display.BitmapData.__base64Encode = function(bytes) {
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
	if(flash.display.BitmapData.__base64Encoder == null) flash.display.BitmapData.__base64Encoder = new haxe.crypto.BaseCode(haxe.io.Bytes.ofString(flash.display.BitmapData.__base64Chars));
	return flash.display.BitmapData.__base64Encoder.encodeBytes(haxe.io.Bytes.ofData(bytes.byteView)).toString() + extension;
};
flash.display.BitmapData.__isJPG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 255 && bytes.readByte() == 216;
};
flash.display.BitmapData.__isPNG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 137 && bytes.readByte() == 80 && bytes.readByte() == 78 && bytes.readByte() == 71 && bytes.readByte() == 13 && bytes.readByte() == 10 && bytes.readByte() == 26 && bytes.readByte() == 10;
};
flash.display.BitmapData.__isGIF = function(bytes) {
	bytes.position = 0;
	if(bytes.readByte() == 71 && bytes.readByte() == 73 && bytes.readByte() == 70 && bytes.readByte() == 38) {
		var b = bytes.readByte();
		return (b == 7 || b == 9) && bytes.readByte() == 97;
	}
	return false;
};
flash.display.BitmapData.prototype = {
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
		if(!this.__valid) return new flash.display.BitmapData(this.width,this.height,this.transparent); else if(this.__sourceImage != null) return flash.display.BitmapData.fromImage(this.__sourceImage,this.transparent); else return flash.display.BitmapData.fromCanvas(this.__sourceCanvas,this.transparent);
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
		this.__convertToCanvas();
		this.__createImageData();
		var data = this.__sourceImageData.data;
		sourceBitmapData.__convertToCanvas();
		var sourceData = sourceBitmapData.__sourceContext.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height).data;
		var pos = 4 * (Math.round(destPoint.x) + Math.round(destPoint.y) * this.width) + destIdx;
		var boundR = Math.round(4 * (destPoint.x + sourceRect.width));
		while(srcIdx < sourceData.length) {
			if(pos % (this.width * 4) > boundR - 1) pos += this.width * 4 - boundR;
			data[pos] = sourceData[srcIdx];
			pos += 4;
			srcIdx += 4;
		}
		this.__sourceImageDataChanged = true;
	}
	,copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(!this.__valid) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.width) sourceRect.width = sourceBitmapData.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.height) sourceRect.height = sourceBitmapData.height - sourceRect.y;
		if(sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(alphaBitmapData != null && alphaBitmapData.transparent) {
			if(alphaPoint == null) alphaPoint = new flash.geom.Point();
			var tempData = this.clone();
			tempData.copyChannel(alphaBitmapData,new flash.geom.Rectangle(alphaPoint.x,alphaPoint.y,sourceRect.width,sourceRect.height),new flash.geom.Point(sourceRect.x,sourceRect.y),8,8);
			sourceBitmapData = tempData;
		}
		this.__syncImageData();
		if(!mergeAlpha) {
			if(this.transparent && sourceBitmapData.transparent) this.__sourceContext.clearRect(destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
		}
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
		var renderSession = new flash.display.RenderSession();
		renderSession.context = this.__sourceContext;
		renderSession.roundPixels = true;
		var matrixCache = source.__worldTransform;
		if(matrix != null) source.__worldTransform = matrix; else source.__worldTransform = new flash.geom.Matrix();
		source.__updateChildren(false);
		source.__renderCanvas(renderSession);
		source.__worldTransform = matrixCache;
		source.__updateChildren(true);
		this.__sourceContext.setTransform(1,0,0,1,0,0);
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
		var byteArray = new flash.utils.ByteArray();
		byteArray.set_length(this.__sourceImageData.data.length);
		byteArray.byteView.set(this.__sourceImageData.data);
		byteArray.position = 0;
		return byteArray;
	}
	,hitTest: function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
		if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
		if(!this.__valid) return false;
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
		haxe.Log.trace("BitmapData.threshold not implemented",{ fileName : "BitmapData.hx", lineNumber : 765, className : "flash.display.BitmapData", methodName : "threshold"});
		return 0;
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
			_g.rect = new flash.geom.Rectangle(0,0,_g.width,_g.height);
			_g.__valid = true;
			if(onload != null) onload(_g);
		};
		this.__sourceImage.addEventListener("load",image_onLoaded,false);
		this.__sourceImage.src = "data:" + type + ";base64," + base64;
	}
	,__loadFromBytes: function(bytes,rawAlpha,onload) {
		var _g = this;
		var type = "";
		if(flash.display.BitmapData.__isPNG(bytes)) type = "image/png"; else if(flash.display.BitmapData.__isJPG(bytes)) type = "image/jpeg"; else if(flash.display.BitmapData.__isGIF(bytes)) type = "image/gif"; else throw new flash.errors.IOError("BitmapData tried to read a PNG/JPG ByteArray, but found an invalid header.");
		if(rawAlpha != null) this.__loadFromBase64(flash.display.BitmapData.__base64Encode(bytes),type,function(_) {
			_g.__convertToCanvas();
			var pixels = _g.__sourceContext.getImageData(0,0,_g.width,_g.height);
			var _g2 = 0;
			var _g1 = rawAlpha.length;
			while(_g2 < _g1) {
				var i = _g2++;
				pixels.data[i * 4 + 3] = rawAlpha.readUnsignedByte();
			}
			_g.__sourceContext.putImageData(pixels,0,0);
			if(onload != null) onload(_g);
		}); else this.__loadFromBase64(flash.display.BitmapData.__base64Encode(bytes),type,onload);
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__valid) return;
		this.__syncImageData();
		var context = renderSession.context;
		if(this.__worldTransform == null) this.__worldTransform = new flash.geom.Matrix();
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
	,__class__: flash.display.BitmapData
};
flash.display.BitmapDataChannel = function() { };
$hxClasses["flash.display.BitmapDataChannel"] = flash.display.BitmapDataChannel;
flash.display.BitmapDataChannel.__name__ = ["flash","display","BitmapDataChannel"];
flash.display.BlendMode = $hxClasses["flash.display.BlendMode"] = { __ename__ : true, __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] };
flash.display.BlendMode.ADD = ["ADD",0];
flash.display.BlendMode.ADD.toString = $estr;
flash.display.BlendMode.ADD.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ALPHA = ["ALPHA",1];
flash.display.BlendMode.ALPHA.toString = $estr;
flash.display.BlendMode.ALPHA.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DARKEN = ["DARKEN",2];
flash.display.BlendMode.DARKEN.toString = $estr;
flash.display.BlendMode.DARKEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
flash.display.BlendMode.DIFFERENCE.toString = $estr;
flash.display.BlendMode.DIFFERENCE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ERASE = ["ERASE",4];
flash.display.BlendMode.ERASE.toString = $estr;
flash.display.BlendMode.ERASE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
flash.display.BlendMode.HARDLIGHT.toString = $estr;
flash.display.BlendMode.HARDLIGHT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.INVERT = ["INVERT",6];
flash.display.BlendMode.INVERT.toString = $estr;
flash.display.BlendMode.INVERT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LAYER = ["LAYER",7];
flash.display.BlendMode.LAYER.toString = $estr;
flash.display.BlendMode.LAYER.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
flash.display.BlendMode.LIGHTEN.toString = $estr;
flash.display.BlendMode.LIGHTEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
flash.display.BlendMode.MULTIPLY.toString = $estr;
flash.display.BlendMode.MULTIPLY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.NORMAL = ["NORMAL",10];
flash.display.BlendMode.NORMAL.toString = $estr;
flash.display.BlendMode.NORMAL.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.OVERLAY = ["OVERLAY",11];
flash.display.BlendMode.OVERLAY.toString = $estr;
flash.display.BlendMode.OVERLAY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SCREEN = ["SCREEN",12];
flash.display.BlendMode.SCREEN.toString = $estr;
flash.display.BlendMode.SCREEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
flash.display.BlendMode.SUBTRACT.toString = $estr;
flash.display.BlendMode.SUBTRACT.__enum__ = flash.display.BlendMode;
flash.display._CapsStyle = {};
flash.display._CapsStyle.CapsStyle_Impl_ = function() { };
$hxClasses["flash.display._CapsStyle.CapsStyle_Impl_"] = flash.display._CapsStyle.CapsStyle_Impl_;
flash.display._CapsStyle.CapsStyle_Impl_.__name__ = ["flash","display","_CapsStyle","CapsStyle_Impl_"];
flash.display.GradientType = $hxClasses["flash.display.GradientType"] = { __ename__ : true, __constructs__ : ["RADIAL","LINEAR"] };
flash.display.GradientType.RADIAL = ["RADIAL",0];
flash.display.GradientType.RADIAL.toString = $estr;
flash.display.GradientType.RADIAL.__enum__ = flash.display.GradientType;
flash.display.GradientType.LINEAR = ["LINEAR",1];
flash.display.GradientType.LINEAR.toString = $estr;
flash.display.GradientType.LINEAR.__enum__ = flash.display.GradientType;
flash.display.Graphics = function() {
	this.__commands = new Array();
	this.__halfStrokeWidth = 0;
	this.__positionX = 0;
	this.__positionY = 0;
};
$hxClasses["flash.display.Graphics"] = flash.display.Graphics;
flash.display.Graphics.__name__ = ["flash","display","Graphics"];
flash.display.Graphics.prototype = {
	beginBitmapFill: function(bitmap,matrix,repeat,smooth) {
		if(smooth == null) smooth = false;
		if(repeat == null) repeat = true;
		this.__commands.push(flash.display.DrawCommand.BeginBitmapFill(bitmap,matrix,repeat,smooth));
		this.__visible = true;
	}
	,beginFill: function(rgb,alpha) {
		if(alpha == null) alpha = 1;
		this.__commands.push(flash.display.DrawCommand.BeginFill(rgb & 16777215,alpha));
		if(alpha > 0) this.__visible = true;
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	}
	,clear: function() {
		this.__commands = new Array();
		this.__halfStrokeWidth = 0;
		if(this.__bounds != null) this.__dirty = true;
		this.__bounds = null;
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
		this.__commands.push(flash.display.DrawCommand.CurveTo(cx,cy,x,y));
		this.__dirty = true;
	}
	,drawCircle: function(x,y,radius) {
		if(radius <= 0) return;
		this.__inflateBounds(x - radius - this.__halfStrokeWidth,y - radius - this.__halfStrokeWidth);
		this.__inflateBounds(x + radius + this.__halfStrokeWidth,y + radius + this.__halfStrokeWidth);
		this.__commands.push(flash.display.DrawCommand.DrawCircle(x,y,radius));
		this.__dirty = true;
	}
	,drawEllipse: function(x,y,width,height) {
		if(width <= 0 || height <= 0) return;
		this.__inflateBounds(x - this.__halfStrokeWidth,y - this.__halfStrokeWidth);
		this.__inflateBounds(x + width + this.__halfStrokeWidth,y + height + this.__halfStrokeWidth);
		this.__commands.push(flash.display.DrawCommand.DrawEllipse(x,y,width,height));
		this.__dirty = true;
	}
	,drawGraphicsData: function(graphicsData) {
	}
	,drawRect: function(x,y,width,height) {
		if(width <= 0 || height <= 0) return;
		this.__inflateBounds(x - this.__halfStrokeWidth,y - this.__halfStrokeWidth);
		this.__inflateBounds(x + width + this.__halfStrokeWidth,y + height + this.__halfStrokeWidth);
		this.__commands.push(flash.display.DrawCommand.DrawRect(x,y,width,height));
		this.__dirty = true;
	}
	,drawRoundRect: function(x,y,width,height,rx,ry) {
		if(ry == null) ry = -1;
	}
	,drawRoundRectComplex: function(x,y,width,height,topLeftRadius,topRightRadius,bottomLeftRadius,bottomRightRadius) {
	}
	,drawTiles: function(sheet,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		this.__inflateBounds(0,0);
		this.__inflateBounds(flash.Lib.current.stage.stageWidth,flash.Lib.current.stage.stageHeight);
		this.__commands.push(flash.display.DrawCommand.DrawTiles(sheet,tileData,smooth,flags));
		this.__dirty = true;
		this.__visible = true;
	}
	,drawTriangles: function(vertices,indices,uvtData,culling) {
	}
	,endFill: function() {
		this.__commands.push(flash.display.DrawCommand.EndFill);
	}
	,lineGradientStyle: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		if(thickness != null) this.__halfStrokeWidth = thickness / 2; else this.__halfStrokeWidth = 0;
		this.__commands.push(flash.display.DrawCommand.LineStyle(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit));
		if(alpha != null) this.__visible = true;
	}
	,lineTo: function(x,y) {
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__positionX = x;
		this.__positionY = y;
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__commands.push(flash.display.DrawCommand.LineTo(x,y));
		this.__dirty = true;
	}
	,moveTo: function(x,y) {
		this.__commands.push(flash.display.DrawCommand.MoveTo(x,y));
		this.__positionX = x;
		this.__positionY = y;
	}
	,__beginPath: function() {
		if(!this.__inPath) {
			this.__context.beginPath();
			this.__context.moveTo(this.__positionX,this.__positionY);
			this.__inPath = true;
		}
	}
	,__closePath: function(closeFill) {
		if(this.__inPath) {
			if(this.__hasFill) this.__context.fill();
			this.__context.closePath();
			if(this.__hasStroke) this.__context.stroke();
		}
		this.__inPath = false;
		if(closeFill) {
			this.__hasFill = false;
			this.__hasStroke = false;
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
			this.__bounds = new flash.geom.Rectangle(x,y,0,0);
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
				var bitmapMatrix = null;
				var bitmapRepeat = false;
				var pattern = null;
				var setFill = false;
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
							pattern = null;
							setFill = false;
						}
						bitmapMatrix = matrix;
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
						setFill = true;
						this.__hasFill = true;
						break;
					case 2:
						var y = command[5];
						var x = command[4];
						var cy = command[3];
						var cx = command[2];
						this.__beginPath();
						this.__context.quadraticCurveTo(cx,cy,x,y);
						this.__positionX = x;
						this.__positionY = y;
						break;
					case 3:
						var radius = command[4];
						var y1 = command[3];
						var x1 = command[2];
						if(!setFill && bitmapFill != null) {
							if(pattern == null) {
								if(bitmapFill.__sourceImage != null) pattern = this.__context.createPattern(bitmapFill.__sourceImage,bitmapRepeat?"repeat":"no-repeat"); else pattern = this.__context.createPattern(bitmapFill.__sourceCanvas,bitmapRepeat?"repeat":"no-repeat");
							}
							this.__context.fillStyle = pattern;
							setFill = true;
						}
						this.__closePath(false);
						this.__beginPath();
						this.__context.arc(x1 - offsetX,y1 - offsetY,radius,0,Math.PI * 2,true);
						this.__closePath(false);
						break;
					case 4:
						var height = command[5];
						var width = command[4];
						var y2 = command[3];
						var x2 = command[2];
						if(!setFill && bitmapFill != null) {
							if(pattern == null) {
								if(bitmapFill.__sourceImage != null) pattern = this.__context.createPattern(bitmapFill.__sourceImage,bitmapRepeat?"repeat":"no-repeat"); else pattern = this.__context.createPattern(bitmapFill.__sourceCanvas,bitmapRepeat?"repeat":"no-repeat");
							}
							this.__context.fillStyle = pattern;
							setFill = true;
						}
						x2 -= offsetX;
						y2 -= offsetY;
						var kappa = .5522848;
						var ox = width / 2 * kappa;
						var oy = height / 2 * kappa;
						var xe = x2 + width;
						var ye = y2 + height;
						var xm = x2 + width / 2;
						var ym = y2 + height / 2;
						this.__closePath(false);
						this.__beginPath();
						this.__context.moveTo(x2,ym);
						this.__context.bezierCurveTo(x2,ym - oy,xm - ox,y2,xm,y2);
						this.__context.bezierCurveTo(xm + ox,y2,xe,ym - oy,xe,ym);
						this.__context.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
						this.__context.bezierCurveTo(xm - ox,ye,x2,ym + oy,x2,ym);
						this.__closePath(false);
						break;
					case 5:
						var height1 = command[5];
						var width1 = command[4];
						var y3 = command[3];
						var x3 = command[2];
						if(bitmapFill != null && width1 <= bitmapFill.width && height1 <= bitmapFill.height) {
							this.__closePath(false);
							var dx = x3;
							var dy = y3;
							if(bitmapMatrix != null) {
								dx -= bitmapMatrix.tx;
								dy -= bitmapMatrix.ty;
							}
							if(bitmapFill.__sourceImage != null) this.__context.drawImage(bitmapFill.__sourceImage,dx,dy,width1,height1,x3,y3,width1,height1); else this.__context.drawImage(bitmapFill.__sourceCanvas,dx,dy,width1,height1,x3,y3,width1,height1);
						} else {
							this.__closePath(false);
							this.__beginPath();
							if(!setFill && bitmapFill != null) {
								if(pattern == null) {
									if(bitmapFill.__sourceImage != null) pattern = this.__context.createPattern(bitmapFill.__sourceImage,bitmapRepeat?"repeat":"no-repeat"); else pattern = this.__context.createPattern(bitmapFill.__sourceCanvas,bitmapRepeat?"repeat":"no-repeat");
								}
								this.__context.fillStyle = pattern;
								setFill = true;
							}
							this.__context.rect(x3 - offsetX,y3 - offsetY,width1,height1);
							this.__closePath(false);
						}
						break;
					case 6:
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
						var itemCount = totalCount / numValues | 0;
						var index = 0;
						var rect = null;
						var center = null;
						var previousTileID = -1;
						var surface;
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
						if(this.__inPath) {
							if(this.__hasFill) {
								this.__context.fill();
								this.__context.closePath();
							}
							if(this.__hasStroke) this.__context.stroke();
						}
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
						if(thickness == null) {
							this.__hasStroke = false;
							this.__closePath(false);
						} else {
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
			if(this.__inPath) {
				if(this.__hasFill) {
					this.__context.fill();
					this.__context.closePath();
				}
				if(this.__hasStroke) this.__context.stroke();
			}
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
	,__class__: flash.display.Graphics
};
flash.display.DrawCommand = $hxClasses["flash.display.DrawCommand"] = { __ename__ : true, __constructs__ : ["BeginBitmapFill","BeginFill","CurveTo","DrawCircle","DrawEllipse","DrawRect","DrawTiles","EndFill","LineStyle","LineTo","MoveTo"] };
flash.display.DrawCommand.BeginBitmapFill = function(bitmap,matrix,repeat,smooth) { var $x = ["BeginBitmapFill",0,bitmap,matrix,repeat,smooth]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.DrawCommand.BeginFill = function(rgb,alpha) { var $x = ["BeginFill",1,rgb,alpha]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.DrawCommand.CurveTo = function(cx,cy,x,y) { var $x = ["CurveTo",2,cx,cy,x,y]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.DrawCommand.DrawCircle = function(x,y,radius) { var $x = ["DrawCircle",3,x,y,radius]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.DrawCommand.DrawEllipse = function(x,y,width,height) { var $x = ["DrawEllipse",4,x,y,width,height]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.DrawCommand.DrawRect = function(x,y,width,height) { var $x = ["DrawRect",5,x,y,width,height]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.DrawCommand.DrawTiles = function(sheet,tileData,smooth,flags) { var $x = ["DrawTiles",6,sheet,tileData,smooth,flags]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.DrawCommand.EndFill = ["EndFill",7];
flash.display.DrawCommand.EndFill.toString = $estr;
flash.display.DrawCommand.EndFill.__enum__ = flash.display.DrawCommand;
flash.display.DrawCommand.LineStyle = function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) { var $x = ["LineStyle",8,thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.DrawCommand.LineTo = function(x,y) { var $x = ["LineTo",9,x,y]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.DrawCommand.MoveTo = function(x,y) { var $x = ["MoveTo",10,x,y]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.IGraphicsData = function() { };
$hxClasses["flash.display.IGraphicsData"] = flash.display.IGraphicsData;
flash.display.IGraphicsData.__name__ = ["flash","display","IGraphicsData"];
flash.display.IGraphicsData.prototype = {
	__class__: flash.display.IGraphicsData
};
flash.display.GraphicsDataType = $hxClasses["flash.display.GraphicsDataType"] = { __ename__ : true, __constructs__ : ["STROKE","SOLID","GRADIENT","PATH"] };
flash.display.GraphicsDataType.STROKE = ["STROKE",0];
flash.display.GraphicsDataType.STROKE.toString = $estr;
flash.display.GraphicsDataType.STROKE.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.SOLID = ["SOLID",1];
flash.display.GraphicsDataType.SOLID.toString = $estr;
flash.display.GraphicsDataType.SOLID.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.GRADIENT = ["GRADIENT",2];
flash.display.GraphicsDataType.GRADIENT.toString = $estr;
flash.display.GraphicsDataType.GRADIENT.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.PATH = ["PATH",3];
flash.display.GraphicsDataType.PATH.toString = $estr;
flash.display.GraphicsDataType.PATH.__enum__ = flash.display.GraphicsDataType;
flash.display.InterpolationMethod = $hxClasses["flash.display.InterpolationMethod"] = { __ename__ : true, __constructs__ : ["RGB","LINEAR_RGB"] };
flash.display.InterpolationMethod.RGB = ["RGB",0];
flash.display.InterpolationMethod.RGB.toString = $estr;
flash.display.InterpolationMethod.RGB.__enum__ = flash.display.InterpolationMethod;
flash.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
flash.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
flash.display.InterpolationMethod.LINEAR_RGB.__enum__ = flash.display.InterpolationMethod;
flash.display._JointStyle = {};
flash.display._JointStyle.JointStyle_Impl_ = function() { };
$hxClasses["flash.display._JointStyle.JointStyle_Impl_"] = flash.display._JointStyle.JointStyle_Impl_;
flash.display._JointStyle.JointStyle_Impl_.__name__ = ["flash","display","_JointStyle","JointStyle_Impl_"];
flash.display.LineScaleMode = $hxClasses["flash.display.LineScaleMode"] = { __ename__ : true, __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] };
flash.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
flash.display.LineScaleMode.HORIZONTAL.toString = $estr;
flash.display.LineScaleMode.HORIZONTAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NONE = ["NONE",1];
flash.display.LineScaleMode.NONE.toString = $estr;
flash.display.LineScaleMode.NONE.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NORMAL = ["NORMAL",2];
flash.display.LineScaleMode.NORMAL.toString = $estr;
flash.display.LineScaleMode.NORMAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
flash.display.LineScaleMode.VERTICAL.toString = $estr;
flash.display.LineScaleMode.VERTICAL.__enum__ = flash.display.LineScaleMode;
flash.display.Loader = function() {
	flash.display.Sprite.call(this);
	this.contentLoaderInfo = flash.display.LoaderInfo.create(this);
};
$hxClasses["flash.display.Loader"] = flash.display.Loader;
flash.display.Loader.__name__ = ["flash","display","Loader"];
flash.display.Loader.__super__ = flash.display.Sprite;
flash.display.Loader.prototype = $extend(flash.display.Sprite.prototype,{
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
		flash.display.BitmapData.fromFile(request.url,$bind(this,this.BitmapData_onLoad));
	}
	,loadBytes: function(buffer) {
		flash.display.BitmapData.fromBytes(buffer,null,$bind(this,this.BitmapData_onLoad));
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
			var event = new flash.events.Event(flash.events.Event.UNLOAD);
			event.currentTarget = this;
			this.dispatchEvent(event);
		}
	}
	,BitmapData_onLoad: function(bitmapData) {
		this.contentLoaderInfo.content = new flash.display.Bitmap(bitmapData);
		this.content = this.contentLoaderInfo.content;
		this.addChild(this.contentLoaderInfo.content);
		var event = new flash.events.Event(flash.events.Event.COMPLETE);
		event.target = this.contentLoaderInfo;
		event.currentTarget = this.contentLoaderInfo;
		this.contentLoaderInfo.dispatchEvent(event);
	}
	,__class__: flash.display.Loader
});
flash.display.LoaderInfo = function() {
	flash.events.EventDispatcher.call(this);
	this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["flash.display.LoaderInfo"] = flash.display.LoaderInfo;
flash.display.LoaderInfo.__name__ = ["flash","display","LoaderInfo"];
flash.display.LoaderInfo.create = function(ldr) {
	var li = new flash.display.LoaderInfo();
	if(ldr != null) li.loader = ldr; else li.url = "";
	return li;
};
flash.display.LoaderInfo.__super__ = flash.events.EventDispatcher;
flash.display.LoaderInfo.prototype = $extend(flash.events.EventDispatcher.prototype,{
	__class__: flash.display.LoaderInfo
});
flash.display.MovieClip = function() {
	flash.display.Sprite.call(this);
	this.__currentFrame = 0;
	this.__totalFrames = 0;
	this.loaderInfo = flash.display.LoaderInfo.create(null);
};
$hxClasses["flash.display.MovieClip"] = flash.display.MovieClip;
flash.display.MovieClip.__name__ = ["flash","display","MovieClip"];
flash.display.MovieClip.__super__ = flash.display.Sprite;
flash.display.MovieClip.prototype = $extend(flash.display.Sprite.prototype,{
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
	,__class__: flash.display.MovieClip
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{get_totalFrames:"get_totalFrames",get_framesLoaded:"get_framesLoaded",get_currentLabels:"get_currentLabels",get_currentLabel:"get_currentLabel",get_currentFrameLabel:"get_currentFrameLabel",get_currentFrame:"get_currentFrame"})
});
flash.display.PixelSnapping = $hxClasses["flash.display.PixelSnapping"] = { __ename__ : true, __constructs__ : ["NEVER","AUTO","ALWAYS"] };
flash.display.PixelSnapping.NEVER = ["NEVER",0];
flash.display.PixelSnapping.NEVER.toString = $estr;
flash.display.PixelSnapping.NEVER.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.AUTO = ["AUTO",1];
flash.display.PixelSnapping.AUTO.toString = $estr;
flash.display.PixelSnapping.AUTO.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
flash.display.PixelSnapping.ALWAYS.toString = $estr;
flash.display.PixelSnapping.ALWAYS.__enum__ = flash.display.PixelSnapping;
flash.display.Shape = function() {
	flash.display.DisplayObject.call(this);
};
$hxClasses["flash.display.Shape"] = flash.display.Shape;
flash.display.Shape.__name__ = ["flash","display","Shape"];
flash.display.Shape.__super__ = flash.display.DisplayObject;
flash.display.Shape.prototype = $extend(flash.display.DisplayObject.prototype,{
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
					var transform = new flash.geom.Matrix();
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
		if(this.__graphics == null) this.__graphics = new flash.display.Graphics();
		return this.__graphics;
	}
	,__class__: flash.display.Shape
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{get_graphics:"get_graphics"})
});
flash.display.SpreadMethod = $hxClasses["flash.display.SpreadMethod"] = { __ename__ : true, __constructs__ : ["REPEAT","REFLECT","PAD"] };
flash.display.SpreadMethod.REPEAT = ["REPEAT",0];
flash.display.SpreadMethod.REPEAT.toString = $estr;
flash.display.SpreadMethod.REPEAT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.REFLECT = ["REFLECT",1];
flash.display.SpreadMethod.REFLECT.toString = $estr;
flash.display.SpreadMethod.REFLECT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.PAD = ["PAD",2];
flash.display.SpreadMethod.PAD.toString = $estr;
flash.display.SpreadMethod.PAD.__enum__ = flash.display.SpreadMethod;
flash.display.Stage = function(width,height,element,color) {
	if(color == null) color = 16777215;
	this.__mouseY = 0;
	this.__mouseX = 0;
	flash.display.Sprite.call(this);
	this.__element = element;
	this.set_color(color);
	this.set_name(null);
	this.__mouseX = 0;
	this.__mouseY = 0;
	this.__canvas = window.document.createElement("canvas");
	this.__canvas.setAttribute("moz-opaque","true");
	this.__context = this.__canvas.getContext ("2d", { alpha: false });
	var style = this.__canvas.style;
	style.setProperty("-webkit-transform","translateZ(0)",null);
	style.setProperty("transform","translateZ(0)",null);
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
		if(this.__canvas != null) element.appendChild(this.__canvas); else element.appendChild(this.__div);
	}
	this.stage = this;
	this.quality = "high";
	this.__clearBeforeRender = true;
	this.__stack = [];
	this.__renderSession = new flash.display.RenderSession();
	this.__renderSession.context = this.__context;
	this.__renderSession.roundPixels = true;
	if(this.__div != null) {
		this.__renderSession.element = this.__div;
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
	var keyEvents = ["keydown","keyup"];
	var touchEvents = ["touchstart","touchmove","touchend"];
	var mouseEvents = ["mousedown","mousemove","mouseup","click","dblclick"];
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
$hxClasses["flash.display.Stage"] = flash.display.Stage;
flash.display.Stage.__name__ = ["flash","display","Stage"];
flash.display.Stage.__super__ = flash.display.Sprite;
flash.display.Stage.prototype = $extend(flash.display.Sprite.prototype,{
	globalToLocal: function(pos) {
		return pos;
	}
	,invalidate: function() {
		this.__invalidated = true;
	}
	,localToGlobal: function(pos) {
		return pos;
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
	,__render: function() {
		this.__broadcast(new flash.events.Event(flash.events.Event.ENTER_FRAME),true);
		if(this.__invalidated) {
			this.__invalidated = false;
			this.__broadcast(new flash.events.Event(flash.events.Event.RENDER),true);
		}
		this.__renderable = true;
		this.__update(false,true);
		if(this.__canvas != null) {
			if(this.stageWidth != this.__canvas.width || this.stageHeight != this.__canvas.height) {
				this.__canvas.width = this.stageWidth;
				this.__canvas.height = this.stageHeight;
			}
			this.__context.setTransform(1,0,0,1,0,0);
			this.__context.globalAlpha = 1;
			if(!this.__transparent && this.__clearBeforeRender) {
				this.__context.fillStyle = this.__colorString;
				this.__context.fillRect(0,0,this.stageWidth,this.stageHeight);
			} else if(this.__transparent && this.__clearBeforeRender) this.__context.clearRect(0,0,this.stageWidth,this.stageHeight);
			this.__renderCanvas(this.__renderSession);
		} else {
			this.__renderSession.z = 1;
			this.__renderDOM(this.__renderSession);
		}
		window.requestAnimationFrame($bind(this,this.__render));
	}
	,__resize: function() {
		if(this.__element != null && this.__div == null) {
			if(this.__fullscreen) {
				this.stageWidth = this.__element.clientWidth;
				this.stageHeight = this.__element.clientHeight;
				if(this.__canvas != null) {
					this.__canvas.width = this.stageWidth;
					this.__canvas.height = this.stageHeight;
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
					this.__canvas.style.width = this.__originalWidth * targetRatio + "px";
					this.__canvas.style.height = this.__originalHeight * targetRatio + "px";
					this.__canvas.style.marginLeft = (this.__element.clientWidth - this.__originalWidth * targetRatio) / 2 + "px";
					this.__canvas.style.marginTop = (this.__element.clientHeight - this.__originalHeight * targetRatio) / 2 + "px";
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
	,__update: function(transformOnly,updateChildren) {
		if(transformOnly) {
			if(flash.display.DisplayObject.__worldTransformDirty > 0) {
				flash.display.Sprite.prototype.__update.call(this,true,updateChildren);
				if(updateChildren) {
					flash.display.DisplayObject.__worldTransformDirty = 0;
					this.__dirty = true;
				}
			}
		} else if(flash.display.DisplayObject.__worldTransformDirty > 0 || this.__dirty || flash.display.DisplayObject.__worldRenderDirty > 0) {
			flash.display.Sprite.prototype.__update.call(this,false,updateChildren);
			if(updateChildren) {
				flash.display.DisplayObject.__worldTransformDirty = 0;
				flash.display.DisplayObject.__worldRenderDirty = 0;
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
	,element_onFocus: function(event) {
	}
	,element_onTouch: function(event) {
		event.preventDefault();
		var rect;
		if(this.__canvas != null) rect = this.__canvas.getBoundingClientRect(); else rect = this.__div.getBoundingClientRect();
		var touch = event.changedTouches[0];
		var point = new flash.geom.Point(touch.pageX - rect.left,touch.pageY - rect.top);
		this.__mouseX = point.x;
		this.__mouseY = point.y;
		this.__stack = [];
		var type = null;
		var mouseType = null;
		var _g = event.type;
		switch(_g) {
		case "touchstart":
			type = "touchBegin";
			mouseType = flash.events.MouseEvent.MOUSE_DOWN;
			break;
		case "touchmove":
			type = "touchMove";
			mouseType = flash.events.MouseEvent.MOUSE_MOVE;
			break;
		case "touchend":
			type = "touchEnd";
			mouseType = flash.events.MouseEvent.MOUSE_UP;
			break;
		default:
		}
		if(this.__hitTest(this.get_mouseX(),this.get_mouseY(),false,this.__stack,true)) {
			var target = this.__stack[this.__stack.length - 1];
			var localPoint = target.globalToLocal(point);
			var touchEvent = flash.events.TouchEvent.__create(type,event,touch,localPoint,target);
			touchEvent.touchPointID = touch.identifier;
			touchEvent.isPrimaryTouchPoint = true;
			var mouseEvent = flash.events.MouseEvent.__create(mouseType,event,localPoint,target);
			mouseEvent.buttonDown = type != "touchEnd";
			this.__fireEvent(touchEvent,this.__stack);
			this.__fireEvent(mouseEvent,this.__stack);
		} else {
			var touchEvent1 = flash.events.TouchEvent.__create(type,event,touch,point,this);
			touchEvent1.touchPointID = touch.identifier;
			touchEvent1.isPrimaryTouchPoint = true;
			var mouseEvent1 = flash.events.MouseEvent.__create(mouseType,event,point,this);
			mouseEvent1.buttonDown = type != "touchEnd";
			this.__fireEvent(touchEvent1,[this]);
			this.__fireEvent(mouseEvent1,[this]);
		}
	}
	,element_onMouse: function(event) {
		var rect;
		if(this.__canvas != null) {
			rect = this.__canvas.getBoundingClientRect();
			this.__mouseX = (event.clientX - rect.left) * (this.__canvas.width / rect.width);
			this.__mouseY = (event.clientY - rect.top) * (this.__canvas.height / rect.height);
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
			type = flash.events.MouseEvent.MOUSE_DOWN;
			break;
		case "mouseup":
			type = flash.events.MouseEvent.MOUSE_UP;
			break;
		case "mousemove":
			type = flash.events.MouseEvent.MOUSE_MOVE;
			break;
		case "click":
			type = flash.events.MouseEvent.CLICK;
			break;
		case "dblclick":
			type = flash.events.MouseEvent.DOUBLE_CLICK;
			break;
		default:
			type = null;
		}
		if(this.__hitTest(this.get_mouseX(),this.get_mouseY(),false,this.__stack,true)) {
			var target = this.__stack[this.__stack.length - 1];
			this.__setCursor(target.buttonMode?"pointer":"default");
			this.__fireEvent(flash.events.MouseEvent.__create(type,event,target.globalToLocal(new flash.geom.Point(this.get_mouseX(),this.get_mouseY())),target),this.__stack);
		} else {
			this.__setCursor(this.buttonMode?"pointer":"default");
			this.__fireEvent(flash.events.MouseEvent.__create(type,event,new flash.geom.Point(this.get_mouseX(),this.get_mouseY()),this),[this]);
		}
	}
	,window_onKey: function(event) {
		var keyCode;
		if(event.keyCode != null) keyCode = event.keyCode; else keyCode = event.which;
		keyCode = flash.ui.Keyboard.__convertMozillaCode(keyCode);
		var location;
		if(event.location != null) location = event.location; else location = event.keyLocation;
		var keyLocation;
		keyLocation = js.Boot.__cast(location , Int);
		var stack = new Array();
		if(this.__focus == null) this.__getInteractive(stack); else this.__focus.__getInteractive(stack);
		if(stack.length > 0) {
			stack.reverse();
			this.__fireEvent(new flash.events.KeyboardEvent(event.type == "keydown"?flash.events.KeyboardEvent.KEY_DOWN:flash.events.KeyboardEvent.KEY_UP,true,false,event.charCode,keyCode,keyLocation,event.ctrlKey,event.altKey,event.shiftKey),stack);
		}
	}
	,window_onResize: function(event) {
		this.__resize();
		var event1 = new flash.events.Event(flash.events.Event.RESIZE);
		this.__broadcast(event1,false);
	}
	,window_onFocus: function(event) {
		var event1 = new flash.events.Event(flash.events.Event.ACTIVATE);
		this.__broadcast(event1,true);
	}
	,window_onBlur: function(event) {
		var event1 = new flash.events.Event(flash.events.Event.DEACTIVATE);
		this.__broadcast(event1,true);
	}
	,get_color: function() {
		return this.__color;
	}
	,set_color: function(value) {
		this.__colorString = "#" + StringTools.hex(value,6);
		return this.__color = value;
	}
	,get_focus: function() {
		return this.__focus;
	}
	,set_focus: function(value) {
		if(value != this.__focus) {
			if(this.__focus != null) {
				var event = new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_OUT,true,false,value,false,0);
				this.__stack = [];
				this.__focus.__getInteractive(this.__stack);
				this.__stack.reverse();
				this.__fireEvent(event,this.__stack);
			}
			if(value != null) {
				var event1 = new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_IN,true,false,this.__focus,false,0);
				this.__stack = [];
				value.__getInteractive(this.__stack);
				this.__stack.reverse();
				this.__fireEvent(event1,this.__stack);
			}
			this.__focus = value;
		}
		return this.__focus;
	}
	,__class__: flash.display.Stage
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{set_focus:"set_focus",get_focus:"get_focus",set_color:"set_color",get_color:"get_color"})
});
flash.display.RenderSession = function() {
	this.maskManager = new flash.display.MaskManager(this);
};
$hxClasses["flash.display.RenderSession"] = flash.display.RenderSession;
flash.display.RenderSession.__name__ = ["flash","display","RenderSession"];
flash.display.RenderSession.prototype = {
	__class__: flash.display.RenderSession
};
flash.display.MaskManager = function(renderSession) {
	this.renderSession = renderSession;
};
$hxClasses["flash.display.MaskManager"] = flash.display.MaskManager;
flash.display.MaskManager.__name__ = ["flash","display","MaskManager"];
flash.display.MaskManager.prototype = {
	pushMask: function(mask) {
		var context = this.renderSession.context;
		context.save();
		var transform = mask.__worldTransform;
		if(transform == null) transform = new flash.geom.Matrix();
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
	,__class__: flash.display.MaskManager
};
flash.display.StageAlign = $hxClasses["flash.display.StageAlign"] = { __ename__ : true, __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] };
flash.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
flash.display.StageAlign.TOP_RIGHT.toString = $estr;
flash.display.StageAlign.TOP_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
flash.display.StageAlign.TOP_LEFT.toString = $estr;
flash.display.StageAlign.TOP_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP = ["TOP",2];
flash.display.StageAlign.TOP.toString = $estr;
flash.display.StageAlign.TOP.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.RIGHT = ["RIGHT",3];
flash.display.StageAlign.RIGHT.toString = $estr;
flash.display.StageAlign.RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.LEFT = ["LEFT",4];
flash.display.StageAlign.LEFT.toString = $estr;
flash.display.StageAlign.LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
flash.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
flash.display.StageAlign.BOTTOM_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
flash.display.StageAlign.BOTTOM_LEFT.toString = $estr;
flash.display.StageAlign.BOTTOM_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM = ["BOTTOM",7];
flash.display.StageAlign.BOTTOM.toString = $estr;
flash.display.StageAlign.BOTTOM.__enum__ = flash.display.StageAlign;
flash.display.StageDisplayState = $hxClasses["flash.display.StageDisplayState"] = { __ename__ : true, __constructs__ : ["NORMAL","FULL_SCREEN","FULL_SCREEN_INTERACTIVE"] };
flash.display.StageDisplayState.NORMAL = ["NORMAL",0];
flash.display.StageDisplayState.NORMAL.toString = $estr;
flash.display.StageDisplayState.NORMAL.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",1];
flash.display.StageDisplayState.FULL_SCREEN.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE = ["FULL_SCREEN_INTERACTIVE",2];
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.__enum__ = flash.display.StageDisplayState;
flash.display._StageQuality = {};
flash.display._StageQuality.StageQuality_Impl_ = function() { };
$hxClasses["flash.display._StageQuality.StageQuality_Impl_"] = flash.display._StageQuality.StageQuality_Impl_;
flash.display._StageQuality.StageQuality_Impl_.__name__ = ["flash","display","_StageQuality","StageQuality_Impl_"];
flash.display.StageScaleMode = $hxClasses["flash.display.StageScaleMode"] = { __ename__ : true, __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] };
flash.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
flash.display.StageScaleMode.SHOW_ALL.toString = $estr;
flash.display.StageScaleMode.SHOW_ALL.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
flash.display.StageScaleMode.NO_SCALE.toString = $estr;
flash.display.StageScaleMode.NO_SCALE.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
flash.display.StageScaleMode.NO_BORDER.toString = $estr;
flash.display.StageScaleMode.NO_BORDER.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
flash.display.StageScaleMode.EXACT_FIT.toString = $estr;
flash.display.StageScaleMode.EXACT_FIT.__enum__ = flash.display.StageScaleMode;
flash.display.TriangleCulling = $hxClasses["flash.display.TriangleCulling"] = { __ename__ : true, __constructs__ : ["NEGATIVE","NONE","POSITIVE"] };
flash.display.TriangleCulling.NEGATIVE = ["NEGATIVE",0];
flash.display.TriangleCulling.NEGATIVE.toString = $estr;
flash.display.TriangleCulling.NEGATIVE.__enum__ = flash.display.TriangleCulling;
flash.display.TriangleCulling.NONE = ["NONE",1];
flash.display.TriangleCulling.NONE.toString = $estr;
flash.display.TriangleCulling.NONE.__enum__ = flash.display.TriangleCulling;
flash.display.TriangleCulling.POSITIVE = ["POSITIVE",2];
flash.display.TriangleCulling.POSITIVE.toString = $estr;
flash.display.TriangleCulling.POSITIVE.__enum__ = flash.display.TriangleCulling;
flash.errors = {};
flash.errors.Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
};
$hxClasses["flash.errors.Error"] = flash.errors.Error;
flash.errors.Error.__name__ = ["flash","errors","Error"];
flash.errors.Error.prototype = {
	getStackTrace: function() {
		return haxe.CallStack.toString(haxe.CallStack.exceptionStack());
	}
	,toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,__class__: flash.errors.Error
};
flash.errors.IOError = function(message) {
	if(message == null) message = "";
	flash.errors.Error.call(this,message);
};
$hxClasses["flash.errors.IOError"] = flash.errors.IOError;
flash.errors.IOError.__name__ = ["flash","errors","IOError"];
flash.errors.IOError.__super__ = flash.errors.Error;
flash.errors.IOError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.IOError
});
flash.errors.RangeError = function(inMessage) {
	if(inMessage == null) inMessage = "";
	flash.errors.Error.call(this,inMessage,0);
};
$hxClasses["flash.errors.RangeError"] = flash.errors.RangeError;
flash.errors.RangeError.__name__ = ["flash","errors","RangeError"];
flash.errors.RangeError.__super__ = flash.errors.Error;
flash.errors.RangeError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.RangeError
});
flash.errors.TypeError = function(inMessage) {
	if(inMessage == null) inMessage = "";
	flash.errors.Error.call(this,inMessage,0);
};
$hxClasses["flash.errors.TypeError"] = flash.errors.TypeError;
flash.errors.TypeError.__name__ = ["flash","errors","TypeError"];
flash.errors.TypeError.__super__ = flash.errors.Error;
flash.errors.TypeError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.TypeError
});
flash.events.Event = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
	this.eventPhase = 1;
};
$hxClasses["flash.events.Event"] = flash.events.Event;
flash.events.Event.__name__ = ["flash","events","Event"];
flash.events.Event.prototype = {
	clone: function() {
		var event = new flash.events.Event(this.type,this.bubbles,this.cancelable);
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
	,__class__: flash.events.Event
};
flash.events.TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.TextEvent"] = flash.events.TextEvent;
flash.events.TextEvent.__name__ = ["flash","events","TextEvent"];
flash.events.TextEvent.__super__ = flash.events.Event;
flash.events.TextEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.TextEvent
});
flash.events.ErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.TextEvent.call(this,type,bubbles,cancelable);
	this.text = text;
	this.errorID = id;
};
$hxClasses["flash.events.ErrorEvent"] = flash.events.ErrorEvent;
flash.events.ErrorEvent.__name__ = ["flash","events","ErrorEvent"];
flash.events.ErrorEvent.__super__ = flash.events.TextEvent;
flash.events.ErrorEvent.prototype = $extend(flash.events.TextEvent.prototype,{
	__class__: flash.events.ErrorEvent
});
flash.events._EventDispatcher = {};
flash.events._EventDispatcher.Listener = function(callback,useCapture,priority) {
	this.callback = callback;
	this.useCapture = useCapture;
	this.priority = priority;
};
$hxClasses["flash.events._EventDispatcher.Listener"] = flash.events._EventDispatcher.Listener;
flash.events._EventDispatcher.Listener.__name__ = ["flash","events","_EventDispatcher","Listener"];
flash.events._EventDispatcher.Listener.prototype = {
	match: function(callback,useCapture) {
		return this.callback == callback && this.useCapture == useCapture;
	}
	,__class__: flash.events._EventDispatcher.Listener
};
flash.events._EventPhase = {};
flash.events._EventPhase.EventPhase_Impl_ = function() { };
$hxClasses["flash.events._EventPhase.EventPhase_Impl_"] = flash.events._EventPhase.EventPhase_Impl_;
flash.events._EventPhase.EventPhase_Impl_.__name__ = ["flash","events","_EventPhase","EventPhase_Impl_"];
flash.events.FocusEvent = function(type,bubbles,cancelable,relatedObject,shiftKey,keyCode) {
	if(keyCode == null) keyCode = 0;
	if(shiftKey == null) shiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = keyCode;
	if(shiftKey == null) this.shiftKey = false; else this.shiftKey = shiftKey;
	this.relatedObject = relatedObject;
};
$hxClasses["flash.events.FocusEvent"] = flash.events.FocusEvent;
flash.events.FocusEvent.__name__ = ["flash","events","FocusEvent"];
flash.events.FocusEvent.__super__ = flash.events.Event;
flash.events.FocusEvent.prototype = $extend(flash.events.Event.prototype,{
	clone: function() {
		var event = new flash.events.FocusEvent(this.type,this.bubbles,this.cancelable,this.relatedObject,this.shiftKey,this.keyCode);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	}
	,__class__: flash.events.FocusEvent
});
flash.events.HTTPStatusEvent = function(type,bubbles,cancelable,status) {
	if(status == null) status = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.status = status;
	flash.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["flash.events.HTTPStatusEvent"] = flash.events.HTTPStatusEvent;
flash.events.HTTPStatusEvent.__name__ = ["flash","events","HTTPStatusEvent"];
flash.events.HTTPStatusEvent.__super__ = flash.events.Event;
flash.events.HTTPStatusEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.HTTPStatusEvent
});
flash.events.IOErrorEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.IOErrorEvent"] = flash.events.IOErrorEvent;
flash.events.IOErrorEvent.__name__ = ["flash","events","IOErrorEvent"];
flash.events.IOErrorEvent.__super__ = flash.events.Event;
flash.events.IOErrorEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.IOErrorEvent
});
flash.events.KeyboardEvent = function(type,bubbles,cancelable,charCodeValue,keyCodeValue,keyLocationValue,ctrlKeyValue,altKeyValue,shiftKeyValue,controlKeyValue,commandKeyValue) {
	if(commandKeyValue == null) commandKeyValue = false;
	if(controlKeyValue == null) controlKeyValue = false;
	if(shiftKeyValue == null) shiftKeyValue = false;
	if(altKeyValue == null) altKeyValue = false;
	if(ctrlKeyValue == null) ctrlKeyValue = false;
	if(keyCodeValue == null) keyCodeValue = 0;
	if(charCodeValue == null) charCodeValue = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.charCode = charCodeValue;
	this.keyCode = keyCodeValue;
	if(keyLocationValue != null) this.keyLocation = keyLocationValue; else this.keyLocation = 0;
	this.ctrlKey = ctrlKeyValue;
	this.altKey = altKeyValue;
	this.commandKey = commandKeyValue;
	this.controlKey = controlKeyValue;
};
$hxClasses["flash.events.KeyboardEvent"] = flash.events.KeyboardEvent;
flash.events.KeyboardEvent.__name__ = ["flash","events","KeyboardEvent"];
flash.events.KeyboardEvent.__super__ = flash.events.Event;
flash.events.KeyboardEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.KeyboardEvent
});
flash.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
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
	flash.events.Event.call(this,type,bubbles,cancelable);
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
$hxClasses["flash.events.MouseEvent"] = flash.events.MouseEvent;
flash.events.MouseEvent.__name__ = ["flash","events","MouseEvent"];
flash.events.MouseEvent.__create = function(type,event,local,target) {
	var __mouseDown = false;
	var delta = 2;
	if(type == flash.events.MouseEvent.MOUSE_WHEEL) {
		var mouseEvent = event;
		if(mouseEvent.wheelDelta) delta = mouseEvent.wheelDelta / 120 | 0; else if(mouseEvent.detail) -mouseEvent.detail | 0;
	}
	if(type == flash.events.MouseEvent.MOUSE_DOWN || type == flash.events.MouseEvent.MOUSE_MOVE) if(event.which != null) __mouseDown = event.which == 1; else if(event.button != null) __mouseDown = event.button == 0; else __mouseDown = false; else if(type == flash.events.MouseEvent.MOUSE_UP) {
		if(event.which != null) {
			if(event.which == 1) __mouseDown = false; else if(event.button != null) {
				if(event.button == 0) __mouseDown = false; else __mouseDown = false;
			}
		}
	}
	var pseudoEvent = new flash.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,__mouseDown,delta);
	pseudoEvent.stageX = flash.Lib.current.stage.get_mouseX();
	pseudoEvent.stageY = flash.Lib.current.stage.get_mouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
};
flash.events.MouseEvent.__super__ = flash.events.Event;
flash.events.MouseEvent.prototype = $extend(flash.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,__class__: flash.events.MouseEvent
});
flash.events.ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["flash.events.ProgressEvent"] = flash.events.ProgressEvent;
flash.events.ProgressEvent.__name__ = ["flash","events","ProgressEvent"];
flash.events.ProgressEvent.__super__ = flash.events.Event;
flash.events.ProgressEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.ProgressEvent
});
flash.events.SecurityErrorEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.ErrorEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.SecurityErrorEvent"] = flash.events.SecurityErrorEvent;
flash.events.SecurityErrorEvent.__name__ = ["flash","events","SecurityErrorEvent"];
flash.events.SecurityErrorEvent.__super__ = flash.events.ErrorEvent;
flash.events.SecurityErrorEvent.prototype = $extend(flash.events.ErrorEvent.prototype,{
	__class__: flash.events.SecurityErrorEvent
});
flash.events.TimerEvent = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["flash.events.TimerEvent"] = flash.events.TimerEvent;
flash.events.TimerEvent.__name__ = ["flash","events","TimerEvent"];
flash.events.TimerEvent.__super__ = flash.events.Event;
flash.events.TimerEvent.prototype = $extend(flash.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,__class__: flash.events.TimerEvent
});
flash.events.TouchEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
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
	flash.events.Event.call(this,type,bubbles,cancelable);
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
	this.touchPointID = 0;
	this.isPrimaryTouchPoint = true;
};
$hxClasses["flash.events.TouchEvent"] = flash.events.TouchEvent;
flash.events.TouchEvent.__name__ = ["flash","events","TouchEvent"];
flash.events.TouchEvent.__create = function(type,event,touch,local,target) {
	var evt = new flash.events.TouchEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,false,0,null,0);
	evt.stageX = flash.Lib.current.stage.get_mouseX();
	evt.stageY = flash.Lib.current.stage.get_mouseY();
	evt.target = target;
	return evt;
};
flash.events.TouchEvent.__super__ = flash.events.Event;
flash.events.TouchEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.TouchEvent
});
flash.filters = {};
flash.filters.BitmapFilter = function() {
};
$hxClasses["flash.filters.BitmapFilter"] = flash.filters.BitmapFilter;
flash.filters.BitmapFilter.__name__ = ["flash","filters","BitmapFilter"];
flash.filters.BitmapFilter.prototype = {
	clone: function() {
		return new flash.filters.BitmapFilter();
	}
	,__applyFilter: function(sourceData,targetData,sourceRect,destPoint) {
	}
	,__class__: flash.filters.BitmapFilter
};
flash.filters.BlurFilter = function(blurX,blurY,quality) {
	if(quality == null) quality = 1;
	if(blurY == null) blurY = 4;
	if(blurX == null) blurX = 4;
	flash.filters.BitmapFilter.call(this);
	this.blurX = blurX;
	this.blurY = blurY;
	this.quality = quality;
};
$hxClasses["flash.filters.BlurFilter"] = flash.filters.BlurFilter;
flash.filters.BlurFilter.__name__ = ["flash","filters","BlurFilter"];
flash.filters.BlurFilter.__super__ = flash.filters.BitmapFilter;
flash.filters.BlurFilter.prototype = $extend(flash.filters.BitmapFilter.prototype,{
	clone: function() {
		return new flash.filters.BlurFilter(this.blurX,this.blurY,this.quality);
	}
	,__class__: flash.filters.BlurFilter
});
flash.filters.DropShadowFilter = function(distance,angle,color,alpha,blurX,blurY,strength,quality,inner,knockout,hideObject) {
	if(hideObject == null) hideObject = false;
	if(knockout == null) knockout = false;
	if(inner == null) inner = false;
	if(quality == null) quality = 1;
	if(strength == null) strength = 1;
	if(blurY == null) blurY = 4;
	if(blurX == null) blurX = 4;
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	if(angle == null) angle = 45;
	if(distance == null) distance = 4;
	flash.filters.BitmapFilter.call(this);
	this.distance = distance;
	this.angle = angle;
	this.color = color;
	this.alpha = alpha;
	this.blurX = blurX;
	this.blurY = blurY;
	this.strength = strength;
	this.quality = quality;
	this.inner = inner;
	this.knockout = knockout;
	this.hideObject = hideObject;
};
$hxClasses["flash.filters.DropShadowFilter"] = flash.filters.DropShadowFilter;
flash.filters.DropShadowFilter.__name__ = ["flash","filters","DropShadowFilter"];
flash.filters.DropShadowFilter.__super__ = flash.filters.BitmapFilter;
flash.filters.DropShadowFilter.prototype = $extend(flash.filters.BitmapFilter.prototype,{
	clone: function() {
		return new flash.filters.DropShadowFilter(this.distance,this.angle,this.color,this.alpha,this.blurX,this.blurY,this.strength,this.quality,this.inner,this.knockout,this.hideObject);
	}
	,__class__: flash.filters.DropShadowFilter
});
flash.filters.GlowFilter = function(color,alpha,blurX,blurY,strength,quality,inner,knockout) {
	if(knockout == null) knockout = false;
	if(inner == null) inner = false;
	if(quality == null) quality = 1;
	if(strength == null) strength = 2;
	if(blurY == null) blurY = 6;
	if(blurX == null) blurX = 6;
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	flash.filters.BitmapFilter.call(this);
	this.color = color;
	this.alpha = alpha;
	this.blurX = blurX;
	this.blurY = blurY;
	this.strength = strength;
	this.quality = quality;
	this.inner = inner;
	this.knockout = knockout;
};
$hxClasses["flash.filters.GlowFilter"] = flash.filters.GlowFilter;
flash.filters.GlowFilter.__name__ = ["flash","filters","GlowFilter"];
flash.filters.GlowFilter.__super__ = flash.filters.BitmapFilter;
flash.filters.GlowFilter.prototype = $extend(flash.filters.BitmapFilter.prototype,{
	clone: function() {
		return new flash.filters.GlowFilter(this.color,this.alpha,this.blurX,this.blurY,this.strength,this.quality,this.inner,this.knockout);
	}
	,__class__: flash.filters.GlowFilter
});
flash.geom = {};
flash.geom.ColorTransform = function(redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset) {
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
$hxClasses["flash.geom.ColorTransform"] = flash.geom.ColorTransform;
flash.geom.ColorTransform.__name__ = ["flash","geom","ColorTransform"];
flash.geom.ColorTransform.prototype = {
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
	,__class__: flash.geom.ColorTransform
	,__properties__: {set_color:"set_color",get_color:"get_color"}
};
flash.geom.Matrix = function(a,b,c,d,tx,ty) {
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
$hxClasses["flash.geom.Matrix"] = flash.geom.Matrix;
flash.geom.Matrix.__name__ = ["flash","geom","Matrix"];
flash.geom.Matrix.prototype = {
	clone: function() {
		return new flash.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
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
	,copyFrom: function(sourceMatrix) {
		this.a = sourceMatrix.a;
		this.b = sourceMatrix.b;
		this.c = sourceMatrix.c;
		this.d = sourceMatrix.d;
		this.tx = sourceMatrix.tx;
		this.ty = sourceMatrix.ty;
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
		var result = new flash.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
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
		return new flash.geom.Point(pos.x * this.a + pos.y * this.c + this.tx,pos.x * this.b + pos.y * this.d + this.ty);
	}
	,translate: function(dx,dy) {
		var m = new flash.geom.Matrix();
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
	,__class__: flash.geom.Matrix
};
flash.geom.Point = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
};
$hxClasses["flash.geom.Point"] = flash.geom.Point;
flash.geom.Point.__name__ = ["flash","geom","Point"];
flash.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
};
flash.geom.Point.interpolate = function(pt1,pt2,f) {
	return new flash.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
};
flash.geom.Point.polar = function(len,angle) {
	return new flash.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
};
flash.geom.Point.prototype = {
	add: function(v) {
		return new flash.geom.Point(v.x + this.x,v.y + this.y);
	}
	,clone: function() {
		return new flash.geom.Point(this.x,this.y);
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
		return new flash.geom.Point(this.x - v.x,this.y - v.y);
	}
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,__class__: flash.geom.Point
	,__properties__: {get_length:"get_length"}
};
flash.geom.Rectangle = function(x,y,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
$hxClasses["flash.geom.Rectangle"] = flash.geom.Rectangle;
flash.geom.Rectangle.__name__ = ["flash","geom","Rectangle"];
flash.geom.Rectangle.prototype = {
	clone: function() {
		return new flash.geom.Rectangle(this.x,this.y,this.width,this.height);
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
		if(x1 <= x0) return new flash.geom.Rectangle();
		var y0;
		if(this.y < toIntersect.y) y0 = toIntersect.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() > toIntersect.get_bottom()) y1 = toIntersect.get_bottom(); else y1 = this.get_bottom();
		if(y1 <= y0) return new flash.geom.Rectangle();
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
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
		return new flash.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
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
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
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
		return new flash.geom.Point(this.x + this.width,this.y + this.height);
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
		return new flash.geom.Point(this.width,this.height);
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
		return new flash.geom.Point(this.x,this.y);
	}
	,set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
	,__class__: flash.geom.Rectangle
	,__properties__: {set_topLeft:"set_topLeft",get_topLeft:"get_topLeft",set_top:"set_top",get_top:"get_top",set_size:"set_size",get_size:"get_size",set_right:"set_right",get_right:"get_right",set_left:"set_left",get_left:"get_left",set_bottomRight:"set_bottomRight",get_bottomRight:"get_bottomRight",set_bottom:"set_bottom",get_bottom:"get_bottom"}
};
flash.geom.Transform = function(displayObject) {
	this.colorTransform = new flash.geom.ColorTransform();
	this.concatenatedColorTransform = new flash.geom.ColorTransform();
	this.concatenatedMatrix = new flash.geom.Matrix();
	this.pixelBounds = new flash.geom.Rectangle();
	this.__displayObject = displayObject;
	this.__matrix = new flash.geom.Matrix();
};
$hxClasses["flash.geom.Transform"] = flash.geom.Transform;
flash.geom.Transform.__name__ = ["flash","geom","Transform"];
flash.geom.Transform.prototype = {
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
	,__class__: flash.geom.Transform
	,__properties__: {set_matrix:"set_matrix",get_matrix:"get_matrix"}
};
flash.media = {};
flash.media.Sound = function(stream,context) {
	flash.events.EventDispatcher.call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.id3 = null;
	this.isBuffering = false;
	this.length = 0;
	this.url = null;
	if(stream != null) this.load(stream,context);
};
$hxClasses["flash.media.Sound"] = flash.media.Sound;
flash.media.Sound.__name__ = ["flash","media","Sound"];
flash.media.Sound.__super__ = flash.events.EventDispatcher;
flash.media.Sound.prototype = $extend(flash.events.EventDispatcher.prototype,{
	close: function() {
		if(flash.media.Sound.__registeredSounds.exists(this.__soundID)) createjs.Sound.removeSound(this.__soundID);
	}
	,load: function(stream,context) {
		this.url = stream.url;
		this.__soundID = haxe.io.Path.withoutExtension(stream.url);
		if(!flash.media.Sound.__registeredSounds.exists(this.__soundID)) {
			flash.media.Sound.__registeredSounds.set(this.__soundID,true);
			createjs.Sound.addEventListener("fileload",$bind(this,this.SoundJS_onFileLoad));
			createjs.Sound.registerSound(this.url,this.__soundID);
		} else this.dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
	}
	,play: function(startTime,loops,sndTransform) {
		if(loops == null) loops = 0;
		if(startTime == null) startTime = 0.0;
		if(sndTransform == null) sndTransform = new flash.media.SoundTransform(1,0);
		var instance = createjs.Sound.play(this.__soundID,"any",0,startTime | 0,loops,sndTransform.volume,sndTransform.pan);
		return new flash.media.SoundChannel(instance);
	}
	,SoundJS_onFileLoad: function(event) {
		if(event.id == this.__soundID) {
			createjs.Sound.removeEventListener("fileload",$bind(this,this.SoundJS_onFileLoad));
			this.dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
		}
	}
	,__class__: flash.media.Sound
});
flash.media.SoundChannel = function(soundInstance) {
	flash.events.EventDispatcher.call(this,this);
	this.__soundInstance = soundInstance;
	this.__soundInstance.addEventListener("complete",$bind(this,this.soundInstance_onComplete));
};
$hxClasses["flash.media.SoundChannel"] = flash.media.SoundChannel;
flash.media.SoundChannel.__name__ = ["flash","media","SoundChannel"];
flash.media.SoundChannel.__super__ = flash.events.EventDispatcher;
flash.media.SoundChannel.prototype = $extend(flash.events.EventDispatcher.prototype,{
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
		return new flash.media.SoundTransform(this.__soundInstance.getVolume(),this.__soundInstance.getPan());
	}
	,set_soundTransform: function(value) {
		this.__soundInstance.setVolume(value.volume);
		this.__soundInstance.setPan(value.pan);
		return value;
	}
	,soundInstance_onComplete: function(_) {
		this.dispatchEvent(new flash.events.Event(flash.events.Event.SOUND_COMPLETE));
	}
	,__class__: flash.media.SoundChannel
	,__properties__: {set_soundTransform:"set_soundTransform",get_soundTransform:"get_soundTransform",set_position:"set_position",get_position:"get_position"}
});
flash.media.SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	if(bufferTime == null) bufferTime = 0;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["flash.media.SoundLoaderContext"] = flash.media.SoundLoaderContext;
flash.media.SoundLoaderContext.__name__ = ["flash","media","SoundLoaderContext"];
flash.media.SoundLoaderContext.prototype = {
	__class__: flash.media.SoundLoaderContext
};
flash.media.SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
	this.volume = vol;
	this.pan = panning;
	this.leftToLeft = 0;
	this.leftToRight = 0;
	this.rightToLeft = 0;
	this.rightToRight = 0;
};
$hxClasses["flash.media.SoundTransform"] = flash.media.SoundTransform;
flash.media.SoundTransform.__name__ = ["flash","media","SoundTransform"];
flash.media.SoundTransform.prototype = {
	__class__: flash.media.SoundTransform
};
flash.net = {};
flash.net.URLLoader = function(request) {
	flash.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.set_dataFormat(flash.net.URLLoaderDataFormat.TEXT);
	if(request != null) this.load(request);
};
$hxClasses["flash.net.URLLoader"] = flash.net.URLLoader;
flash.net.URLLoader.__name__ = ["flash","net","URLLoader"];
flash.net.URLLoader.__super__ = flash.events.EventDispatcher;
flash.net.URLLoader.prototype = $extend(flash.events.EventDispatcher.prototype,{
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
		if(js.Boot.__instanceof(data,flash.utils.ByteArray)) {
			var data1 = data;
			var _g = this.dataFormat;
			switch(_g[1]) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js.Boot.__instanceof(data,flash.net.URLVariables)) {
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
			this.data = flash.utils.ByteArray.__ofBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var evt = new flash.events.Event(flash.events.Event.COMPLETE);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onError: function(msg) {
		var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onOpen: function() {
		var evt = new flash.events.Event(flash.events.Event.OPEN);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onProgress: function(event) {
		var evt = new flash.events.ProgressEvent(flash.events.ProgressEvent.PROGRESS);
		evt.currentTarget = this;
		evt.bytesLoaded = event.loaded;
		evt.bytesTotal = event.total;
		this.dispatchEvent(evt);
	}
	,onSecurityError: function(msg) {
		var evt = new flash.events.SecurityErrorEvent(flash.events.SecurityErrorEvent.SECURITY_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onStatus: function(status) {
		var evt = new flash.events.HTTPStatusEvent(flash.events.HTTPStatusEvent.HTTP_STATUS,false,false,status);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,set_dataFormat: function(inputVal) {
		if(inputVal == flash.net.URLLoaderDataFormat.BINARY && !Reflect.hasField(window,"ArrayBuffer")) this.dataFormat = flash.net.URLLoaderDataFormat.TEXT; else this.dataFormat = inputVal;
		return this.dataFormat;
	}
	,__class__: flash.net.URLLoader
	,__properties__: {set_dataFormat:"set_dataFormat"}
});
flash.net.URLLoaderDataFormat = $hxClasses["flash.net.URLLoaderDataFormat"] = { __ename__ : true, __constructs__ : ["BINARY","TEXT","VARIABLES"] };
flash.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
flash.net.URLLoaderDataFormat.BINARY.toString = $estr;
flash.net.URLLoaderDataFormat.BINARY.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
flash.net.URLLoaderDataFormat.TEXT.toString = $estr;
flash.net.URLLoaderDataFormat.TEXT.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
flash.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
flash.net.URLLoaderDataFormat.VARIABLES.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = flash.net.URLRequestMethod.GET;
	this.contentType = null;
};
$hxClasses["flash.net.URLRequest"] = flash.net.URLRequest;
flash.net.URLRequest.__name__ = ["flash","net","URLRequest"];
flash.net.URLRequest.prototype = {
	formatRequestHeaders: function() {
		var res = this.requestHeaders;
		if(res == null) res = [];
		if(this.method == flash.net.URLRequestMethod.GET || this.data == null) return res;
		if(typeof(this.data) == "string" || js.Boot.__instanceof(this.data,flash.utils.ByteArray)) {
			res = res.slice();
			res.push(new flash.net.URLRequestHeader("Content-Type",this.contentType != null?this.contentType:"application/x-www-form-urlencoded"));
		}
		return res;
	}
	,__class__: flash.net.URLRequest
};
flash.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["flash.net.URLRequestHeader"] = flash.net.URLRequestHeader;
flash.net.URLRequestHeader.__name__ = ["flash","net","URLRequestHeader"];
flash.net.URLRequestHeader.prototype = {
	__class__: flash.net.URLRequestHeader
};
flash.net.URLRequestMethod = function() { };
$hxClasses["flash.net.URLRequestMethod"] = flash.net.URLRequestMethod;
flash.net.URLRequestMethod.__name__ = ["flash","net","URLRequestMethod"];
flash.net.URLVariables = function(inEncoded) {
	if(inEncoded != null) this.decode(inEncoded);
};
$hxClasses["flash.net.URLVariables"] = flash.net.URLVariables;
flash.net.URLVariables.__name__ = ["flash","net","URLVariables"];
flash.net.URLVariables.prototype = {
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
	,__class__: flash.net.URLVariables
};
flash.system = {};
flash.system.ApplicationDomain = function(parentDomain) {
	if(parentDomain != null) this.parentDomain = parentDomain; else this.parentDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.ApplicationDomain"] = flash.system.ApplicationDomain;
flash.system.ApplicationDomain.__name__ = ["flash","system","ApplicationDomain"];
flash.system.ApplicationDomain.prototype = {
	getDefinition: function(name) {
		return Type.resolveClass(name);
	}
	,hasDefinition: function(name) {
		return Type.resolveClass(name) != null;
	}
	,__class__: flash.system.ApplicationDomain
};
flash.system.Capabilities = function() { };
$hxClasses["flash.system.Capabilities"] = flash.system.Capabilities;
flash.system.Capabilities.__name__ = ["flash","system","Capabilities"];
flash.system.Capabilities.__properties__ = {get_language:"get_language",get_screenResolutionY:"get_screenResolutionY",get_screenResolutionX:"get_screenResolutionX",get_screenDPI:"get_screenDPI",get_pixelAspectRatio:"get_pixelAspectRatio"}
flash.system.Capabilities.pixelAspectRatio = null;
flash.system.Capabilities.screenDPI = null;
flash.system.Capabilities.screenResolutionX = null;
flash.system.Capabilities.screenResolutionY = null;
flash.system.Capabilities.language = null;
flash.system.Capabilities.get_pixelAspectRatio = function() {
	return 1;
};
flash.system.Capabilities.get_screenDPI = function() {
	if(flash.system.Capabilities.screenDPI > 0) return flash.system.Capabilities.screenDPI;
	var body = window.document.getElementsByTagName("body")[0];
	var testDiv = window.document.createElement("div");
	testDiv.style.width = testDiv.style.height = "1in";
	testDiv.style.padding = testDiv.style.margin = "0px";
	testDiv.style.position = "absolute";
	testDiv.style.top = "-100%";
	body.appendChild(testDiv);
	flash.system.Capabilities.screenDPI = testDiv.offsetWidth;
	body.removeChild(testDiv);
	return flash.system.Capabilities.screenDPI;
};
flash.system.Capabilities.get_screenResolutionX = function() {
	return window.screen.width;
};
flash.system.Capabilities.get_screenResolutionY = function() {
	return window.screen.height;
};
flash.system.Capabilities.get_language = function() {
	return navigator.language;
};
flash.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
	this.securityDomain = securityDomain;
	if(applicationDomain != null) this.applicationDomain = applicationDomain; else this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.LoaderContext"] = flash.system.LoaderContext;
flash.system.LoaderContext.__name__ = ["flash","system","LoaderContext"];
flash.system.LoaderContext.prototype = {
	__class__: flash.system.LoaderContext
};
flash.system.SecurityDomain = function() {
};
$hxClasses["flash.system.SecurityDomain"] = flash.system.SecurityDomain;
flash.system.SecurityDomain.__name__ = ["flash","system","SecurityDomain"];
flash.system.SecurityDomain.prototype = {
	__class__: flash.system.SecurityDomain
};
flash.text = {};
flash.text._AntiAliasType = {};
flash.text._AntiAliasType.AntiAliasType_Impl_ = function() { };
$hxClasses["flash.text._AntiAliasType.AntiAliasType_Impl_"] = flash.text._AntiAliasType.AntiAliasType_Impl_;
flash.text._AntiAliasType.AntiAliasType_Impl_.__name__ = ["flash","text","_AntiAliasType","AntiAliasType_Impl_"];
flash.text.Font = function() {
};
$hxClasses["flash.text.Font"] = flash.text.Font;
flash.text.Font.__name__ = ["flash","text","Font"];
flash.text.Font.registerFont = function(font) {
};
flash.text.Font.prototype = {
	__class__: flash.text.Font
};
flash.text.FontStyle = $hxClasses["flash.text.FontStyle"] = { __ename__ : true, __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] };
flash.text.FontStyle.REGULAR = ["REGULAR",0];
flash.text.FontStyle.REGULAR.toString = $estr;
flash.text.FontStyle.REGULAR.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.ITALIC = ["ITALIC",1];
flash.text.FontStyle.ITALIC.toString = $estr;
flash.text.FontStyle.ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
flash.text.FontStyle.BOLD_ITALIC.toString = $estr;
flash.text.FontStyle.BOLD_ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD = ["BOLD",3];
flash.text.FontStyle.BOLD.toString = $estr;
flash.text.FontStyle.BOLD.__enum__ = flash.text.FontStyle;
flash.text.FontType = $hxClasses["flash.text.FontType"] = { __ename__ : true, __constructs__ : ["EMBEDDED","DEVICE"] };
flash.text.FontType.EMBEDDED = ["EMBEDDED",0];
flash.text.FontType.EMBEDDED.toString = $estr;
flash.text.FontType.EMBEDDED.__enum__ = flash.text.FontType;
flash.text.FontType.DEVICE = ["DEVICE",1];
flash.text.FontType.DEVICE.toString = $estr;
flash.text.FontType.DEVICE.__enum__ = flash.text.FontType;
flash.text.GridFitType = $hxClasses["flash.text.GridFitType"] = { __ename__ : true, __constructs__ : ["NONE","PIXEL","SUBPIXEL"] };
flash.text.GridFitType.NONE = ["NONE",0];
flash.text.GridFitType.NONE.toString = $estr;
flash.text.GridFitType.NONE.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.PIXEL = ["PIXEL",1];
flash.text.GridFitType.PIXEL.toString = $estr;
flash.text.GridFitType.PIXEL.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.SUBPIXEL = ["SUBPIXEL",2];
flash.text.GridFitType.SUBPIXEL.toString = $estr;
flash.text.GridFitType.SUBPIXEL.__enum__ = flash.text.GridFitType;
flash.text.TextField = function() {
	flash.display.InteractiveObject.call(this);
	this.__width = 100;
	this.__height = 100;
	this.__text = "";
	this.set_type(flash.text.TextFieldType.DYNAMIC);
	this.set_autoSize(flash.text.TextFieldAutoSize.NONE);
	this.selectable = true;
	this.set_borderColor(0);
	this.set_border(false);
	this.set_backgroundColor(16777215);
	this.set_background(false);
	this.gridFitType = flash.text.GridFitType.PIXEL;
	this.sharpness = 0;
	if(flash.text.TextField.__defaultTextFormat == null) {
		flash.text.TextField.__defaultTextFormat = new flash.text.TextFormat("Times New Roman",12,0,false,false,false,"","",flash.text.TextFormatAlign.LEFT,0,0,0,0);
		flash.text.TextField.__defaultTextFormat.blockIndent = 0;
		flash.text.TextField.__defaultTextFormat.bullet = false;
		flash.text.TextField.__defaultTextFormat.letterSpacing = 0;
		flash.text.TextField.__defaultTextFormat.kerning = false;
	}
	this.__textFormat = flash.text.TextField.__defaultTextFormat.clone();
};
$hxClasses["flash.text.TextField"] = flash.text.TextField;
flash.text.TextField.__name__ = ["flash","text","TextField"];
flash.text.TextField.__defaultTextFormat = null;
flash.text.TextField.__super__ = flash.display.InteractiveObject;
flash.text.TextField.prototype = $extend(flash.display.InteractiveObject.prototype,{
	appendText: function(text) {
		var _g = this;
		_g.set_text(_g.get_text() + text);
	}
	,getCharBoundaries: function(a) {
		return null;
	}
	,getCharIndexAtPoint: function(x,y) {
		return 0;
	}
	,getLineIndexAtPoint: function(x,y) {
		return 0;
	}
	,getTextFormat: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		return this.__textFormat.clone();
	}
	,setSelection: function(beginIndex,endIndex) {
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
		var bounds = new flash.geom.Rectangle(0,0,this.__width,this.__height);
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
		var point = this.globalToLocal(new flash.geom.Point(x,y));
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
		if(this.__div == null) div.style.width = Std.string(this.get_width()) + "px";
		this.__measuredHeight = div.clientHeight;
		if(this.__div == null) window.document.body.removeChild(div);
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.__dirty) {
			if((this.__text == null || this.__text == "") && !this.background && !this.border || (this.get_width() <= 0 || this.get_height() <= 0) && this.autoSize != flash.text.TextFieldAutoSize.LEFT) {
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
					if(this.autoSize == flash.text.TextFieldAutoSize.LEFT) this.__width = textWidth + 4;
					this.__canvas.width = Math.ceil(this.__width);
					this.__canvas.height = Math.ceil(this.__height);
					if(this.border || this.background) {
						this.__context.rect(0,0,this.__width,this.__height);
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
					if(this.autoSize == flash.text.TextFieldAutoSize.LEFT) this.__width = 4;
					this.__canvas.width = Math.ceil(this.__width);
					this.__canvas.height = Math.ceil(this.__height);
					if(this.border || this.background) {
						this.__context.rect(0,0,this.__width,this.__height);
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
					if(this.autoSize != flash.text.TextFieldAutoSize.NONE) this.__style.setProperty("width","auto",null); else this.__style.setProperty("width",this.__width + "px",null);
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
		var _g = format.align;
		switch(_g[1]) {
		case 3:
			this.__context.textAlign = "center";
			this.__context.fillText(text,this.__width / 2,2,this.__width - 4);
			break;
		case 1:
			this.__context.textAlign = "end";
			this.__context.fillText(text,this.__width - 2,2,this.__width - 4);
			break;
		default:
			this.__context.textAlign = "start";
			this.__context.fillText(text,2 + offsetX,2,this.__width - 4);
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
		return 0;
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
				flash.display.DisplayObject.__worldTransformDirty++;
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
						this.__ranges.push(new flash.text.TextFormatRange(format,value.length,value.length + sub.length));
						value += sub;
						if(closeFontIndex + 7 < segment.length) {
							sub = HxOverrides.substr(segment,closeFontIndex + 7,null);
							this.__ranges.push(new flash.text.TextFormatRange(this.__textFormat,value.length,value.length + sub.length));
							value += sub;
						}
					} else {
						this.__ranges.push(new flash.text.TextFormatRange(this.__textFormat,value.length,value.length + segment.length));
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
		return 0;
	}
	,get_numLines: function() {
		return 0;
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
		return this.__width * this.get_scaleX();
	}
	,set_width: function(value) {
		if(this.get_scaleX() != 1 || this.__width != value) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				flash.display.DisplayObject.__worldTransformDirty++;
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
	,__class__: flash.text.TextField
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{set_wordWrap:"set_wordWrap",get_wordWrap:"get_wordWrap",set_type:"set_type",get_textWidth:"get_textWidth",get_textHeight:"get_textHeight",set_textColor:"set_textColor",get_textColor:"get_textColor",set_text:"set_text",get_text:"get_text",get_numLines:"get_numLines",get_maxScrollV:"get_maxScrollV",get_maxScrollH:"get_maxScrollH",set_htmlText:"set_htmlText",get_htmlText:"get_htmlText",set_defaultTextFormat:"set_defaultTextFormat",get_defaultTextFormat:"get_defaultTextFormat",get_caretPos:"get_caretPos",get_bottomScrollV:"get_bottomScrollV",set_borderColor:"set_borderColor",set_border:"set_border",set_backgroundColor:"set_backgroundColor",set_background:"set_background",set_autoSize:"set_autoSize"})
});
flash.text.TextFormatRange = function(format,start,end) {
	this.format = format;
	this.start = start;
	this.end = end;
};
$hxClasses["flash.text.TextFormatRange"] = flash.text.TextFormatRange;
flash.text.TextFormatRange.__name__ = ["flash","text","TextFormatRange"];
flash.text.TextFormatRange.prototype = {
	__class__: flash.text.TextFormatRange
};
flash.text.TextFieldAutoSize = $hxClasses["flash.text.TextFieldAutoSize"] = { __ename__ : true, __constructs__ : ["CENTER","LEFT","NONE","RIGHT"] };
flash.text.TextFieldAutoSize.CENTER = ["CENTER",0];
flash.text.TextFieldAutoSize.CENTER.toString = $estr;
flash.text.TextFieldAutoSize.CENTER.__enum__ = flash.text.TextFieldAutoSize;
flash.text.TextFieldAutoSize.LEFT = ["LEFT",1];
flash.text.TextFieldAutoSize.LEFT.toString = $estr;
flash.text.TextFieldAutoSize.LEFT.__enum__ = flash.text.TextFieldAutoSize;
flash.text.TextFieldAutoSize.NONE = ["NONE",2];
flash.text.TextFieldAutoSize.NONE.toString = $estr;
flash.text.TextFieldAutoSize.NONE.__enum__ = flash.text.TextFieldAutoSize;
flash.text.TextFieldAutoSize.RIGHT = ["RIGHT",3];
flash.text.TextFieldAutoSize.RIGHT.toString = $estr;
flash.text.TextFieldAutoSize.RIGHT.__enum__ = flash.text.TextFieldAutoSize;
flash.text.TextFieldType = $hxClasses["flash.text.TextFieldType"] = { __ename__ : true, __constructs__ : ["DYNAMIC","INPUT"] };
flash.text.TextFieldType.DYNAMIC = ["DYNAMIC",0];
flash.text.TextFieldType.DYNAMIC.toString = $estr;
flash.text.TextFieldType.DYNAMIC.__enum__ = flash.text.TextFieldType;
flash.text.TextFieldType.INPUT = ["INPUT",1];
flash.text.TextFieldType.INPUT.toString = $estr;
flash.text.TextFieldType.INPUT.__enum__ = flash.text.TextFieldType;
flash.text.TextFormat = function(font,size,color,bold,italic,underline,url,target,align,leftMargin,rightMargin,indent,leading) {
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
$hxClasses["flash.text.TextFormat"] = flash.text.TextFormat;
flash.text.TextFormat.__name__ = ["flash","text","TextFormat"];
flash.text.TextFormat.prototype = {
	clone: function() {
		var newFormat = new flash.text.TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
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
	,__class__: flash.text.TextFormat
};
flash.text.TextFormatAlign = $hxClasses["flash.text.TextFormatAlign"] = { __ename__ : true, __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] };
flash.text.TextFormatAlign.LEFT = ["LEFT",0];
flash.text.TextFormatAlign.LEFT.toString = $estr;
flash.text.TextFormatAlign.LEFT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.RIGHT = ["RIGHT",1];
flash.text.TextFormatAlign.RIGHT.toString = $estr;
flash.text.TextFormatAlign.RIGHT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
flash.text.TextFormatAlign.JUSTIFY.toString = $estr;
flash.text.TextFormatAlign.JUSTIFY.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.CENTER = ["CENTER",3];
flash.text.TextFormatAlign.CENTER.toString = $estr;
flash.text.TextFormatAlign.CENTER.__enum__ = flash.text.TextFormatAlign;
flash.ui = {};
flash.ui._KeyLocation = {};
flash.ui._KeyLocation.KeyLocation_Impl_ = function() { };
$hxClasses["flash.ui._KeyLocation.KeyLocation_Impl_"] = flash.ui._KeyLocation.KeyLocation_Impl_;
flash.ui._KeyLocation.KeyLocation_Impl_.__name__ = ["flash","ui","_KeyLocation","KeyLocation_Impl_"];
flash.ui.Keyboard = function() { };
$hxClasses["flash.ui.Keyboard"] = flash.ui.Keyboard;
flash.ui.Keyboard.__name__ = ["flash","ui","Keyboard"];
flash.ui.Keyboard.capsLock = null;
flash.ui.Keyboard.numLock = null;
flash.ui.Keyboard.isAccessible = function() {
	return false;
};
flash.ui.Keyboard.__convertMozillaCode = function(code) {
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
flash.ui.Keyboard.__convertWebkitCode = function(code) {
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
flash.ui.Mouse = function() { };
$hxClasses["flash.ui.Mouse"] = flash.ui.Mouse;
flash.ui.Mouse.__name__ = ["flash","ui","Mouse"];
flash.ui.Mouse.hide = function() {
	flash.Lib.current.stage.__setCursorHidden(true);
};
flash.ui.Mouse.show = function() {
	flash.Lib.current.stage.__setCursorHidden(false);
};
flash.utils = {};
flash.utils.ByteArray = function() {
	this.littleEndian = false;
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	this.___resizeBuffer(this.allocated);
};
$hxClasses["flash.utils.ByteArray"] = flash.utils.ByteArray;
flash.utils.ByteArray.__name__ = ["flash","utils","ByteArray"];
flash.utils.ByteArray.fromBytes = function(inBytes) {
	var result = new flash.utils.ByteArray();
	result.byteView = new Uint8Array(inBytes.b);
	result.set_length(result.byteView.length);
	result.allocated = result.length;
	return result;
};
flash.utils.ByteArray.__ofBuffer = function(buffer) {
	var bytes = new flash.utils.ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
};
flash.utils.ByteArray.prototype = {
	clear: function() {
		if(this.allocated < 0) this.___resizeBuffer(this.allocated = Std["int"](Math.max(0,this.allocated * 2))); else if(this.allocated > 0) this.___resizeBuffer(this.allocated = 0);
		this.length = 0;
		0;
	}
	,readBoolean: function() {
		return this.readByte() != 0;
	}
	,readByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readBytes: function(bytes,offset,length) {
		if(length == null) length = 0;
		if(offset == null) offset = 0;
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Read error - Out of bounds");
		if(length == 0) length = this.length;
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
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Write error - Out of bounds");
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
		return this.data.getUint8(pos);
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
	,__class__: flash.utils.ByteArray
	,__properties__: {set_length:"set_length",set_endian:"set_endian",get_endian:"get_endian",get_bytesAvailable:"get_bytesAvailable"}
};
flash.utils.Endian = function() { };
$hxClasses["flash.utils.Endian"] = flash.utils.Endian;
flash.utils.Endian.__name__ = ["flash","utils","Endian"];
flash.utils.Timer = function(delay,repeatCount) {
	if(repeatCount == null) repeatCount = 0;
	flash.events.EventDispatcher.call(this);
	this.running = false;
	this.set_delay(delay);
	this.set_repeatCount(repeatCount);
	this.currentCount = 0;
};
$hxClasses["flash.utils.Timer"] = flash.utils.Timer;
flash.utils.Timer.__name__ = ["flash","utils","Timer"];
flash.utils.Timer.__super__ = flash.events.EventDispatcher;
flash.utils.Timer.prototype = $extend(flash.events.EventDispatcher.prototype,{
	reset: function() {
		this.stop();
		this.currentCount = 0;
	}
	,start: function() {
		if(this.running) return;
		this.running = true;
		this.timerId = window.setInterval($bind(this,this.__onInterval),this.delay | 0);
	}
	,stop: function() {
		if(this.timerId != null) {
			window.clearInterval(this.timerId);
			this.timerId = null;
		}
		this.running = false;
	}
	,__onInterval: function() {
		this.currentCount++;
		if(this.repeatCount > 0 && this.currentCount >= this.repeatCount) {
			this.stop();
			this.dispatchEvent(new flash.events.TimerEvent("timer"));
			this.dispatchEvent(new flash.events.TimerEvent("timerComplete"));
		} else this.dispatchEvent(new flash.events.TimerEvent("timer"));
	}
	,set_delay: function(v) {
		if(v != this.delay) {
			var wasRunning = this.running;
			if(this.running) this.stop();
			this.delay = v;
			if(wasRunning) this.start();
		}
		return v;
	}
	,set_repeatCount: function(v) {
		if(this.running && v != 0 && v <= this.currentCount) this.stop();
		this.repeatCount = v;
		return v;
	}
	,__class__: flash.utils.Timer
	,__properties__: {set_repeatCount:"set_repeatCount",set_delay:"set_delay"}
});
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : true, __constructs__ : ["CFunction","Module","FilePos","Method","LocalFunction"] };
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
haxe.CallStack.callStack = function() {
	var oldValue = Error.prepareStackTrace;
	Error.prepareStackTrace = function(error,callsites) {
		var stack = [];
		var _g = 0;
		while(_g < callsites.length) {
			var site = callsites[_g];
			++_g;
			var method = null;
			var fullName = site.getFunctionName();
			if(fullName != null) {
				var idx = fullName.lastIndexOf(".");
				if(idx >= 0) {
					var className = HxOverrides.substr(fullName,0,idx);
					var methodName = HxOverrides.substr(fullName,idx + 1,null);
					method = haxe.StackItem.Method(className,methodName);
				}
			}
			stack.push(haxe.StackItem.FilePos(method,site.getFileName(),site.getLineNumber()));
		}
		return stack;
	};
	var a = haxe.CallStack.makeStack(new Error().stack);
	a.shift();
	Error.prepareStackTrace = oldValue;
	return a;
};
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
haxe.CallStack.makeStack = function(s) {
	if(typeof(s) == "string") {
		var stack = s.split("\n");
		var m = [];
		var _g = 0;
		while(_g < stack.length) {
			var line = stack[_g];
			++_g;
			m.push(haxe.StackItem.Module(line));
		}
		return m;
	} else return s;
};
haxe.Log = function() { };
$hxClasses["haxe.Log"] = haxe.Log;
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
};
haxe.Resource = function() { };
$hxClasses["haxe.Resource"] = haxe.Resource;
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.content = null;
haxe.Resource.getString = function(name) {
	var _g = 0;
	var _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return x.str;
			var b = haxe.crypto.Base64.decode(x.data);
			return b.toString();
		}
	}
	return null;
};
haxe.Resource.getBytes = function(name) {
	var _g = 0;
	var _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return haxe.io.Bytes.ofString(x.str);
			return haxe.crypto.Base64.decode(x.data);
		}
	}
	return null;
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
	var _g1 = 0;
	var _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = s.charCodeAt(i);
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
	,readString: function(pos,len) {
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
				s += fcc((c & 15) << 18 | (c21 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
			}
		}
		return s;
	}
	,toString: function() {
		return this.readString(0,this.length);
	}
	,__class__: haxe.io.Bytes
};
haxe.crypto = {};
haxe.crypto.Base64 = function() { };
$hxClasses["haxe.crypto.Base64"] = haxe.crypto.Base64;
haxe.crypto.Base64.__name__ = ["haxe","crypto","Base64"];
haxe.crypto.Base64.decode = function(str,complement) {
	if(complement == null) complement = true;
	if(complement) while(HxOverrides.cca(str,str.length - 1) == 61) str = HxOverrides.substr(str,0,-1);
	return new haxe.crypto.BaseCode(haxe.crypto.Base64.BYTES).decodeBytes(haxe.io.Bytes.ofString(str));
};
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
	,initTable: function() {
		var tbl = new Array();
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			tbl[i] = -1;
		}
		var _g1 = 0;
		var _g2 = this.base.length;
		while(_g1 < _g2) {
			var i1 = _g1++;
			tbl[this.base.b[i1]] = i1;
		}
		this.tbl = tbl;
	}
	,decodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		if(this.tbl == null) this.initTable();
		var tbl = this.tbl;
		var size = b.length * nbits >> 3;
		var out = haxe.io.Bytes.alloc(size);
		var buf = 0;
		var curbits = 0;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < 8) {
				curbits += nbits;
				buf <<= nbits;
				var i = tbl[b.get(pin++)];
				if(i == -1) throw "BaseCode : invalid encoded char";
				buf |= i;
			}
			curbits -= 8;
			out.set(pout++,buf >> curbits & 255);
		}
		return out;
	}
	,__class__: haxe.crypto.BaseCode
};
haxe.ds = {};
haxe.ds.GenericCell = function(elt,next) {
	this.elt = elt;
	this.next = next;
};
$hxClasses["haxe.ds.GenericCell"] = haxe.ds.GenericCell;
haxe.ds.GenericCell.__name__ = ["haxe","ds","GenericCell"];
haxe.ds.GenericCell.prototype = {
	__class__: haxe.ds.GenericCell
};
haxe.ds.GenericStack = function() {
};
$hxClasses["haxe.ds.GenericStack"] = haxe.ds.GenericStack;
haxe.ds.GenericStack.__name__ = ["haxe","ds","GenericStack"];
haxe.ds.GenericStack.prototype = {
	add: function(item) {
		this.head = new haxe.ds.GenericCell(item,this.head);
	}
	,pop: function() {
		var k = this.head;
		if(k == null) return null; else {
			this.head = k.next;
			return k.elt;
		}
	}
	,__class__: haxe.ds.GenericStack
};
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
	,exists: function(key) {
		return this.h.__keys__[key.__id__] != null;
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
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
haxe.io.BytesBuffer = function() {
	this.b = new Array();
};
$hxClasses["haxe.io.BytesBuffer"] = haxe.io.BytesBuffer;
haxe.io.BytesBuffer.__name__ = ["haxe","io","BytesBuffer"];
haxe.io.BytesBuffer.prototype = {
	getBytes: function() {
		var bytes = new haxe.io.Bytes(this.b.length,this.b);
		this.b = null;
		return bytes;
	}
	,__class__: haxe.io.BytesBuffer
};
haxe.io.Input = function() { };
$hxClasses["haxe.io.Input"] = haxe.io.Input;
haxe.io.Input.__name__ = ["haxe","io","Input"];
haxe.io.Input.prototype = {
	readByte: function() {
		throw "Not implemented";
	}
	,readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) throw haxe.io.Error.OutsideBounds;
		while(k > 0) {
			b[pos] = this.readByte();
			pos++;
			k--;
		}
		return len;
	}
	,readFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.readBytes(s,pos,len);
			pos += k;
			len -= k;
		}
	}
	,readString: function(len) {
		var b = haxe.io.Bytes.alloc(len);
		this.readFullBytes(b,0,len);
		return b.toString();
	}
	,__class__: haxe.io.Input
};
haxe.io.BytesInput = function(b,pos,len) {
	if(pos == null) pos = 0;
	if(len == null) len = b.length - pos;
	if(pos < 0 || len < 0 || pos + len > b.length) throw haxe.io.Error.OutsideBounds;
	this.b = b.b;
	this.pos = pos;
	this.len = len;
	this.totlen = len;
};
$hxClasses["haxe.io.BytesInput"] = haxe.io.BytesInput;
haxe.io.BytesInput.__name__ = ["haxe","io","BytesInput"];
haxe.io.BytesInput.__super__ = haxe.io.Input;
haxe.io.BytesInput.prototype = $extend(haxe.io.Input.prototype,{
	readByte: function() {
		if(this.len == 0) throw new haxe.io.Eof();
		this.len--;
		return this.b[this.pos++];
	}
	,readBytes: function(buf,pos,len) {
		if(pos < 0 || len < 0 || pos + len > buf.length) throw haxe.io.Error.OutsideBounds;
		if(this.len == 0 && len > 0) throw new haxe.io.Eof();
		if(this.len < len) len = this.len;
		var b1 = this.b;
		var b2 = buf.b;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b2[pos + i] = b1[this.pos + i];
		}
		this.pos += len;
		this.len -= len;
		return len;
	}
	,__class__: haxe.io.BytesInput
});
haxe.io.Output = function() { };
$hxClasses["haxe.io.Output"] = haxe.io.Output;
haxe.io.Output.__name__ = ["haxe","io","Output"];
haxe.io.BytesOutput = function() {
	this.b = new haxe.io.BytesBuffer();
};
$hxClasses["haxe.io.BytesOutput"] = haxe.io.BytesOutput;
haxe.io.BytesOutput.__name__ = ["haxe","io","BytesOutput"];
haxe.io.BytesOutput.__super__ = haxe.io.Output;
haxe.io.BytesOutput.prototype = $extend(haxe.io.Output.prototype,{
	writeByte: function(c) {
		this.b.b.push(c);
	}
	,getBytes: function() {
		return this.b.getBytes();
	}
	,__class__: haxe.io.BytesOutput
});
haxe.io.Eof = function() {
};
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
};
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : true, __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
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
haxe.io.StringInput = function(s) {
	haxe.io.BytesInput.call(this,haxe.io.Bytes.ofString(s));
};
$hxClasses["haxe.io.StringInput"] = haxe.io.StringInput;
haxe.io.StringInput.__name__ = ["haxe","io","StringInput"];
haxe.io.StringInput.__super__ = haxe.io.BytesInput;
haxe.io.StringInput.prototype = $extend(haxe.io.BytesInput.prototype,{
	__class__: haxe.io.StringInput
});
haxe.macro = {};
haxe.macro.Constant = $hxClasses["haxe.macro.Constant"] = { __ename__ : true, __constructs__ : ["CInt","CFloat","CString","CIdent","CRegexp"] };
haxe.macro.Constant.CInt = function(v) { var $x = ["CInt",0,v]; $x.__enum__ = haxe.macro.Constant; $x.toString = $estr; return $x; };
haxe.macro.Constant.CFloat = function(f) { var $x = ["CFloat",1,f]; $x.__enum__ = haxe.macro.Constant; $x.toString = $estr; return $x; };
haxe.macro.Constant.CString = function(s) { var $x = ["CString",2,s]; $x.__enum__ = haxe.macro.Constant; $x.toString = $estr; return $x; };
haxe.macro.Constant.CIdent = function(s) { var $x = ["CIdent",3,s]; $x.__enum__ = haxe.macro.Constant; $x.toString = $estr; return $x; };
haxe.macro.Constant.CRegexp = function(r,opt) { var $x = ["CRegexp",4,r,opt]; $x.__enum__ = haxe.macro.Constant; $x.toString = $estr; return $x; };
haxe.macro.Binop = $hxClasses["haxe.macro.Binop"] = { __ename__ : true, __constructs__ : ["OpAdd","OpMult","OpDiv","OpSub","OpAssign","OpEq","OpNotEq","OpGt","OpGte","OpLt","OpLte","OpAnd","OpOr","OpXor","OpBoolAnd","OpBoolOr","OpShl","OpShr","OpUShr","OpMod","OpAssignOp","OpInterval","OpArrow"] };
haxe.macro.Binop.OpAdd = ["OpAdd",0];
haxe.macro.Binop.OpAdd.toString = $estr;
haxe.macro.Binop.OpAdd.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpMult = ["OpMult",1];
haxe.macro.Binop.OpMult.toString = $estr;
haxe.macro.Binop.OpMult.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpDiv = ["OpDiv",2];
haxe.macro.Binop.OpDiv.toString = $estr;
haxe.macro.Binop.OpDiv.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpSub = ["OpSub",3];
haxe.macro.Binop.OpSub.toString = $estr;
haxe.macro.Binop.OpSub.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpAssign = ["OpAssign",4];
haxe.macro.Binop.OpAssign.toString = $estr;
haxe.macro.Binop.OpAssign.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpEq = ["OpEq",5];
haxe.macro.Binop.OpEq.toString = $estr;
haxe.macro.Binop.OpEq.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpNotEq = ["OpNotEq",6];
haxe.macro.Binop.OpNotEq.toString = $estr;
haxe.macro.Binop.OpNotEq.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpGt = ["OpGt",7];
haxe.macro.Binop.OpGt.toString = $estr;
haxe.macro.Binop.OpGt.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpGte = ["OpGte",8];
haxe.macro.Binop.OpGte.toString = $estr;
haxe.macro.Binop.OpGte.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpLt = ["OpLt",9];
haxe.macro.Binop.OpLt.toString = $estr;
haxe.macro.Binop.OpLt.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpLte = ["OpLte",10];
haxe.macro.Binop.OpLte.toString = $estr;
haxe.macro.Binop.OpLte.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpAnd = ["OpAnd",11];
haxe.macro.Binop.OpAnd.toString = $estr;
haxe.macro.Binop.OpAnd.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpOr = ["OpOr",12];
haxe.macro.Binop.OpOr.toString = $estr;
haxe.macro.Binop.OpOr.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpXor = ["OpXor",13];
haxe.macro.Binop.OpXor.toString = $estr;
haxe.macro.Binop.OpXor.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpBoolAnd = ["OpBoolAnd",14];
haxe.macro.Binop.OpBoolAnd.toString = $estr;
haxe.macro.Binop.OpBoolAnd.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpBoolOr = ["OpBoolOr",15];
haxe.macro.Binop.OpBoolOr.toString = $estr;
haxe.macro.Binop.OpBoolOr.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpShl = ["OpShl",16];
haxe.macro.Binop.OpShl.toString = $estr;
haxe.macro.Binop.OpShl.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpShr = ["OpShr",17];
haxe.macro.Binop.OpShr.toString = $estr;
haxe.macro.Binop.OpShr.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpUShr = ["OpUShr",18];
haxe.macro.Binop.OpUShr.toString = $estr;
haxe.macro.Binop.OpUShr.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpMod = ["OpMod",19];
haxe.macro.Binop.OpMod.toString = $estr;
haxe.macro.Binop.OpMod.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpAssignOp = function(op) { var $x = ["OpAssignOp",20,op]; $x.__enum__ = haxe.macro.Binop; $x.toString = $estr; return $x; };
haxe.macro.Binop.OpInterval = ["OpInterval",21];
haxe.macro.Binop.OpInterval.toString = $estr;
haxe.macro.Binop.OpInterval.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpArrow = ["OpArrow",22];
haxe.macro.Binop.OpArrow.toString = $estr;
haxe.macro.Binop.OpArrow.__enum__ = haxe.macro.Binop;
haxe.macro.Unop = $hxClasses["haxe.macro.Unop"] = { __ename__ : true, __constructs__ : ["OpIncrement","OpDecrement","OpNot","OpNeg","OpNegBits"] };
haxe.macro.Unop.OpIncrement = ["OpIncrement",0];
haxe.macro.Unop.OpIncrement.toString = $estr;
haxe.macro.Unop.OpIncrement.__enum__ = haxe.macro.Unop;
haxe.macro.Unop.OpDecrement = ["OpDecrement",1];
haxe.macro.Unop.OpDecrement.toString = $estr;
haxe.macro.Unop.OpDecrement.__enum__ = haxe.macro.Unop;
haxe.macro.Unop.OpNot = ["OpNot",2];
haxe.macro.Unop.OpNot.toString = $estr;
haxe.macro.Unop.OpNot.__enum__ = haxe.macro.Unop;
haxe.macro.Unop.OpNeg = ["OpNeg",3];
haxe.macro.Unop.OpNeg.toString = $estr;
haxe.macro.Unop.OpNeg.__enum__ = haxe.macro.Unop;
haxe.macro.Unop.OpNegBits = ["OpNegBits",4];
haxe.macro.Unop.OpNegBits.toString = $estr;
haxe.macro.Unop.OpNegBits.__enum__ = haxe.macro.Unop;
haxe.macro.ExprDef = $hxClasses["haxe.macro.ExprDef"] = { __ename__ : true, __constructs__ : ["EConst","EArray","EBinop","EField","EParenthesis","EObjectDecl","EArrayDecl","ECall","ENew","EUnop","EVars","EFunction","EBlock","EFor","EIn","EIf","EWhile","ESwitch","ETry","EReturn","EBreak","EContinue","EUntyped","EThrow","ECast","EDisplay","EDisplayNew","ETernary","ECheckType","EMeta"] };
haxe.macro.ExprDef.EConst = function(c) { var $x = ["EConst",0,c]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EArray = function(e1,e2) { var $x = ["EArray",1,e1,e2]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EBinop = function(op,e1,e2) { var $x = ["EBinop",2,op,e1,e2]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EField = function(e,field) { var $x = ["EField",3,e,field]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EParenthesis = function(e) { var $x = ["EParenthesis",4,e]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EObjectDecl = function(fields) { var $x = ["EObjectDecl",5,fields]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EArrayDecl = function(values) { var $x = ["EArrayDecl",6,values]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ECall = function(e,params) { var $x = ["ECall",7,e,params]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ENew = function(t,params) { var $x = ["ENew",8,t,params]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EUnop = function(op,postFix,e) { var $x = ["EUnop",9,op,postFix,e]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EVars = function(vars) { var $x = ["EVars",10,vars]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EFunction = function(name,f) { var $x = ["EFunction",11,name,f]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EBlock = function(exprs) { var $x = ["EBlock",12,exprs]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EFor = function(it,expr) { var $x = ["EFor",13,it,expr]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EIn = function(e1,e2) { var $x = ["EIn",14,e1,e2]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EIf = function(econd,eif,eelse) { var $x = ["EIf",15,econd,eif,eelse]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EWhile = function(econd,e,normalWhile) { var $x = ["EWhile",16,econd,e,normalWhile]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ESwitch = function(e,cases,edef) { var $x = ["ESwitch",17,e,cases,edef]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ETry = function(e,catches) { var $x = ["ETry",18,e,catches]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EReturn = function(e) { var $x = ["EReturn",19,e]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EBreak = ["EBreak",20];
haxe.macro.ExprDef.EBreak.toString = $estr;
haxe.macro.ExprDef.EBreak.__enum__ = haxe.macro.ExprDef;
haxe.macro.ExprDef.EContinue = ["EContinue",21];
haxe.macro.ExprDef.EContinue.toString = $estr;
haxe.macro.ExprDef.EContinue.__enum__ = haxe.macro.ExprDef;
haxe.macro.ExprDef.EUntyped = function(e) { var $x = ["EUntyped",22,e]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EThrow = function(e) { var $x = ["EThrow",23,e]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ECast = function(e,t) { var $x = ["ECast",24,e,t]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EDisplay = function(e,isCall) { var $x = ["EDisplay",25,e,isCall]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EDisplayNew = function(t) { var $x = ["EDisplayNew",26,t]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ETernary = function(econd,eif,eelse) { var $x = ["ETernary",27,econd,eif,eelse]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ECheckType = function(e,t) { var $x = ["ECheckType",28,e,t]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EMeta = function(s,e) { var $x = ["EMeta",29,s,e]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ComplexType = $hxClasses["haxe.macro.ComplexType"] = { __ename__ : true, __constructs__ : ["TPath","TFunction","TAnonymous","TParent","TExtend","TOptional"] };
haxe.macro.ComplexType.TPath = function(p) { var $x = ["TPath",0,p]; $x.__enum__ = haxe.macro.ComplexType; $x.toString = $estr; return $x; };
haxe.macro.ComplexType.TFunction = function(args,ret) { var $x = ["TFunction",1,args,ret]; $x.__enum__ = haxe.macro.ComplexType; $x.toString = $estr; return $x; };
haxe.macro.ComplexType.TAnonymous = function(fields) { var $x = ["TAnonymous",2,fields]; $x.__enum__ = haxe.macro.ComplexType; $x.toString = $estr; return $x; };
haxe.macro.ComplexType.TParent = function(t) { var $x = ["TParent",3,t]; $x.__enum__ = haxe.macro.ComplexType; $x.toString = $estr; return $x; };
haxe.macro.ComplexType.TExtend = function(p,fields) { var $x = ["TExtend",4,p,fields]; $x.__enum__ = haxe.macro.ComplexType; $x.toString = $estr; return $x; };
haxe.macro.ComplexType.TOptional = function(t) { var $x = ["TOptional",5,t]; $x.__enum__ = haxe.macro.ComplexType; $x.toString = $estr; return $x; };
haxe.macro.Access = $hxClasses["haxe.macro.Access"] = { __ename__ : true, __constructs__ : ["APublic","APrivate","AStatic","AOverride","ADynamic","AInline","AMacro"] };
haxe.macro.Access.APublic = ["APublic",0];
haxe.macro.Access.APublic.toString = $estr;
haxe.macro.Access.APublic.__enum__ = haxe.macro.Access;
haxe.macro.Access.APrivate = ["APrivate",1];
haxe.macro.Access.APrivate.toString = $estr;
haxe.macro.Access.APrivate.__enum__ = haxe.macro.Access;
haxe.macro.Access.AStatic = ["AStatic",2];
haxe.macro.Access.AStatic.toString = $estr;
haxe.macro.Access.AStatic.__enum__ = haxe.macro.Access;
haxe.macro.Access.AOverride = ["AOverride",3];
haxe.macro.Access.AOverride.toString = $estr;
haxe.macro.Access.AOverride.__enum__ = haxe.macro.Access;
haxe.macro.Access.ADynamic = ["ADynamic",4];
haxe.macro.Access.ADynamic.toString = $estr;
haxe.macro.Access.ADynamic.__enum__ = haxe.macro.Access;
haxe.macro.Access.AInline = ["AInline",5];
haxe.macro.Access.AInline.toString = $estr;
haxe.macro.Access.AInline.__enum__ = haxe.macro.Access;
haxe.macro.Access.AMacro = ["AMacro",6];
haxe.macro.Access.AMacro.toString = $estr;
haxe.macro.Access.AMacro.__enum__ = haxe.macro.Access;
haxe.macro.FieldType = $hxClasses["haxe.macro.FieldType"] = { __ename__ : true, __constructs__ : ["FVar","FFun","FProp"] };
haxe.macro.FieldType.FVar = function(t,e) { var $x = ["FVar",0,t,e]; $x.__enum__ = haxe.macro.FieldType; $x.toString = $estr; return $x; };
haxe.macro.FieldType.FFun = function(f) { var $x = ["FFun",1,f]; $x.__enum__ = haxe.macro.FieldType; $x.toString = $estr; return $x; };
haxe.macro.FieldType.FProp = function(get,set,t,e) { var $x = ["FProp",2,get,set,t,e]; $x.__enum__ = haxe.macro.FieldType; $x.toString = $estr; return $x; };
haxe.macro.Type = $hxClasses["haxe.macro.Type"] = { __ename__ : true, __constructs__ : ["TMono","TEnum","TInst","TType","TFun","TAnonymous","TDynamic","TLazy","TAbstract"] };
haxe.macro.Type.TMono = function(t) { var $x = ["TMono",0,t]; $x.__enum__ = haxe.macro.Type; $x.toString = $estr; return $x; };
haxe.macro.Type.TEnum = function(t,params) { var $x = ["TEnum",1,t,params]; $x.__enum__ = haxe.macro.Type; $x.toString = $estr; return $x; };
haxe.macro.Type.TInst = function(t,params) { var $x = ["TInst",2,t,params]; $x.__enum__ = haxe.macro.Type; $x.toString = $estr; return $x; };
haxe.macro.Type.TType = function(t,params) { var $x = ["TType",3,t,params]; $x.__enum__ = haxe.macro.Type; $x.toString = $estr; return $x; };
haxe.macro.Type.TFun = function(args,ret) { var $x = ["TFun",4,args,ret]; $x.__enum__ = haxe.macro.Type; $x.toString = $estr; return $x; };
haxe.macro.Type.TAnonymous = function(a) { var $x = ["TAnonymous",5,a]; $x.__enum__ = haxe.macro.Type; $x.toString = $estr; return $x; };
haxe.macro.Type.TDynamic = function(t) { var $x = ["TDynamic",6,t]; $x.__enum__ = haxe.macro.Type; $x.toString = $estr; return $x; };
haxe.macro.Type.TLazy = function(f) { var $x = ["TLazy",7,f]; $x.__enum__ = haxe.macro.Type; $x.toString = $estr; return $x; };
haxe.macro.Type.TAbstract = function(t,params) { var $x = ["TAbstract",8,t,params]; $x.__enum__ = haxe.macro.Type; $x.toString = $estr; return $x; };
haxe.ui = {};
haxe.ui.toolkit = {};
haxe.ui.toolkit.core = {};
haxe.ui.toolkit.core.interfaces = {};
haxe.ui.toolkit.core.interfaces.IClonable = function() { };
$hxClasses["haxe.ui.toolkit.core.interfaces.IClonable"] = haxe.ui.toolkit.core.interfaces.IClonable;
haxe.ui.toolkit.core.interfaces.IClonable.__name__ = ["haxe","ui","toolkit","core","interfaces","IClonable"];
haxe.ui.toolkit.core.interfaces.IClonable.prototype = {
	__class__: haxe.ui.toolkit.core.interfaces.IClonable
};
haxe.ui.toolkit.core.interfaces.IDrawable = function() { };
$hxClasses["haxe.ui.toolkit.core.interfaces.IDrawable"] = haxe.ui.toolkit.core.interfaces.IDrawable;
haxe.ui.toolkit.core.interfaces.IDrawable.__name__ = ["haxe","ui","toolkit","core","interfaces","IDrawable"];
haxe.ui.toolkit.core.interfaces.IDrawable.prototype = {
	__class__: haxe.ui.toolkit.core.interfaces.IDrawable
};
haxe.ui.toolkit.core.interfaces.IEventDispatcher = function() { };
$hxClasses["haxe.ui.toolkit.core.interfaces.IEventDispatcher"] = haxe.ui.toolkit.core.interfaces.IEventDispatcher;
haxe.ui.toolkit.core.interfaces.IEventDispatcher.__name__ = ["haxe","ui","toolkit","core","interfaces","IEventDispatcher"];
haxe.ui.toolkit.core.interfaces.IEventDispatcher.prototype = {
	__class__: haxe.ui.toolkit.core.interfaces.IEventDispatcher
};
haxe.ui.toolkit.core.interfaces.IDisplayObject = function() { };
$hxClasses["haxe.ui.toolkit.core.interfaces.IDisplayObject"] = haxe.ui.toolkit.core.interfaces.IDisplayObject;
haxe.ui.toolkit.core.interfaces.IDisplayObject.__name__ = ["haxe","ui","toolkit","core","interfaces","IDisplayObject"];
haxe.ui.toolkit.core.interfaces.IDisplayObject.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable,haxe.ui.toolkit.core.interfaces.IEventDispatcher];
haxe.ui.toolkit.core.interfaces.IDisplayObject.prototype = {
	__class__: haxe.ui.toolkit.core.interfaces.IDisplayObject
};
haxe.ui.toolkit.core.DisplayObject = function() {
	this._valign = "top";
	this._halign = "left";
	this._invalidating = false;
	this._ready = false;
	this._percentHeight = -1;
	this._percentWidth = -1;
	this._height = 0;
	this._width = 0;
	this._y = 0;
	this._x = 0;
	this._sprite = new flash.display.Sprite();
	this._sprite.tabChildren = false;
	this.addEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this._onAddedToStage),false,100);
};
$hxClasses["haxe.ui.toolkit.core.DisplayObject"] = haxe.ui.toolkit.core.DisplayObject;
haxe.ui.toolkit.core.DisplayObject.__name__ = ["haxe","ui","toolkit","core","DisplayObject"];
haxe.ui.toolkit.core.DisplayObject.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable,haxe.ui.toolkit.core.interfaces.IDrawable,haxe.ui.toolkit.core.interfaces.IDisplayObject,haxe.ui.toolkit.core.interfaces.IEventDispatcher];
haxe.ui.toolkit.core.DisplayObject.prototype = {
	preInitialize: function() {
	}
	,initialize: function() {
	}
	,postInitialize: function() {
	}
	,_onAddedToStage: function(event) {
		this.removeEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this._onAddedToStage));
		this.preInitialize();
		this._ready = true;
		this.initialize();
		this.postInitialize();
		this.invalidate(273);
		var event1 = new haxe.ui.toolkit.events.UIEvent("haxeui_" + "init");
		this.dispatchEvent(event1);
		var event2 = new haxe.ui.toolkit.events.UIEvent("haxeui_" + "ready");
		this.dispatchEvent(event2);
	}
	,get_parent: function() {
		return this._parent;
	}
	,set_parent: function(value) {
		this._parent = value;
		return value;
	}
	,get_root: function() {
		return this._root;
	}
	,set_root: function(value) {
		this._root = value;
		return value;
	}
	,get_id: function() {
		return this._id;
	}
	,set_id: function(value) {
		this._id = value;
		return value;
	}
	,get_x: function() {
		return this._x;
	}
	,set_x: function(value) {
		this._x = value | 0;
		this._sprite.set_x(this._x);
		return value;
	}
	,get_y: function() {
		return this._y;
	}
	,set_y: function(value) {
		this._y = value | 0;
		this._sprite.set_y(this._y);
		return value;
	}
	,get_width: function() {
		return this._width;
	}
	,set_width: function(value) {
		value = value | 0;
		if(this._width == value) return value;
		this._width = value;
		this._invalidating = false;
		this.invalidate(272);
		if(this._parent != null) this._parent.invalidate(1);
		var event = new haxe.ui.toolkit.events.UIEvent("haxeui_" + "resize");
		this.dispatchEvent(event);
		return value;
	}
	,get_height: function() {
		return this._height;
	}
	,set_height: function(value) {
		value = value | 0;
		if(this._height == value) return value;
		this._height = value;
		this._invalidating = false;
		this.invalidate(272);
		if(this._parent != null) this._parent.invalidate(1);
		var event = new haxe.ui.toolkit.events.UIEvent("haxeui_" + "resize");
		this.dispatchEvent(event);
		return value;
	}
	,get_percentWidth: function() {
		return this._percentWidth;
	}
	,set_percentWidth: function(value) {
		if(this._percentWidth == value) return value;
		this._percentWidth = value;
		this.invalidate();
		if(this._parent != null) this._parent.invalidate(1);
		return value;
	}
	,get_percentHeight: function() {
		return this._percentHeight;
	}
	,set_percentHeight: function(value) {
		if(this._percentHeight == value) return value;
		this._percentHeight = value;
		this.invalidate();
		if(this._parent != null) this._parent.invalidate(1);
		return value;
	}
	,get_ready: function() {
		return this._ready;
	}
	,get_sprite: function() {
		return this._sprite;
	}
	,get_stageX: function() {
		var c;
		c = js.Boot.__cast(this , haxe.ui.toolkit.core.interfaces.IDisplayObject);
		var xpos = 0;
		while(c != null) {
			xpos += c.get_x();
			if(c.get_sprite().get_scrollRect() != null) xpos -= c.get_sprite().get_scrollRect().get_left();
			c = c.get_parent();
		}
		return xpos;
	}
	,get_stageY: function() {
		var c;
		c = js.Boot.__cast(this , haxe.ui.toolkit.core.interfaces.IDisplayObject);
		var ypos = 0;
		while(c != null) {
			ypos += c.get_y();
			if(c.get_sprite().get_scrollRect() != null) ypos -= c.get_sprite().get_scrollRect().get_top();
			c = c.get_parent();
		}
		return ypos;
	}
	,get_visible: function() {
		return this._sprite.get_visible();
	}
	,set_visible: function(value) {
		this._sprite.set_visible(value);
		if(this._parent != null) this._parent.invalidate(1);
		return value;
	}
	,get_horizontalAlign: function() {
		return this._halign;
	}
	,set_horizontalAlign: function(value) {
		this._halign = value;
		if(this._ready) this.get_parent().invalidate(1);
		return value;
	}
	,get_verticalAlign: function() {
		return this._valign;
	}
	,set_verticalAlign: function(value) {
		this._valign = value;
		if(this._ready) this.get_parent().invalidate(1);
		return value;
	}
	,hitTest: function(xpos,ypos) {
		var b = false;
		var sx = this.get_stageX();
		var sy = this.get_stageY();
		if(xpos > sx && xpos < sx + this.get_width() && ypos > sy && ypos < sy + this.get_height()) b = true;
		return b;
	}
	,invalidate: function(type,recursive) {
		if(recursive == null) recursive = false;
		if(type == null) type = 1118481;
		if(!this._ready || this._invalidating) return;
		this._invalidating = true;
		if((type & 16) == 16 || (type & 4096) == 4096) this.paint();
		this._invalidating = false;
	}
	,dispose: function() {
		this.removeAllEventListeners();
	}
	,interceptEvent: function(event) {
		var uiEvent = new haxe.ui.toolkit.events.UIEvent("haxeui_" + event.type);
		if(js.Boot.__instanceof(event,flash.events.MouseEvent)) {
			var mouseEvent = event;
			uiEvent.stageX = mouseEvent.stageX;
			uiEvent.stageY = mouseEvent.stageY;
		}
		this.dispatchEvent(uiEvent);
	}
	,addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		if(StringTools.startsWith(type,"haxeui_")) {
			var interceptEventType = HxOverrides.substr(type,"haxeui_".length,type.length);
			if(this.getListenerCount(interceptEventType,$bind(this,this.interceptEvent)) == 0) this.addEventListener(interceptEventType,$bind(this,this.interceptEvent),useCapture,priority,useWeakReference);
		}
		if(this._eventListeners == null) this._eventListeners = new haxe.ds.StringMap();
		var list = this._eventListeners.get(type);
		if(list == null) {
			list = new List();
			this._eventListeners.set(type,list);
		}
		list.add(listener);
		this._sprite.addEventListener(type,listener,useCapture,priority,useWeakReference);
	}
	,dispatchEvent: function(event) {
		if(js.Boot.__instanceof(event,haxe.ui.toolkit.events.UIEvent)) (js.Boot.__cast(event , haxe.ui.toolkit.events.UIEvent)).displayObject = this;
		return this._sprite.dispatchEvent(event);
	}
	,hasEventListener: function(type) {
		return this._sprite.hasEventListener(type);
	}
	,removeEventListener: function(type,listener,useCapture) {
		if(useCapture == null) useCapture = false;
		if(StringTools.startsWith(type,"haxeui_")) {
			var interceptEventType = HxOverrides.substr(type,"haxeui_".length,type.length);
			if(this._eventListeners.exists(type) == false || this._eventListeners.get(type).length <= 1) this.removeEventListener(interceptEventType,$bind(this,this.interceptEvent),useCapture);
		}
		if(this._eventListeners != null && this._eventListeners.exists(type)) {
			var list = this._eventListeners.get(type);
			if(list != null) list.remove(listener);
		}
		this._sprite.removeEventListener(type,listener,useCapture);
	}
	,willTrigger: function(type) {
		return this._sprite.willTrigger(type);
	}
	,get_graphics: function() {
		return this._sprite.get_graphics();
	}
	,paint: function() {
		this._sprite.get_graphics().clear();
		this._sprite.get_graphics().beginFill(13421772);
		this._sprite.get_graphics().lineStyle(1,8947848);
		this._sprite.get_graphics().drawRect(0,0,this._width,this._height);
		this._sprite.get_graphics().endFill();
	}
	,removeEventListenerType: function(eventType) {
		if(this._eventListeners != null) {
			var list = this._eventListeners.get(eventType);
			if(list != null) while(list.isEmpty() == false) this.removeEventListener(eventType,list.first());
		}
	}
	,removeAllEventListeners: function() {
		if(this._eventListeners != null) {
			var $it0 = this._eventListeners.keys();
			while( $it0.hasNext() ) {
				var eventType = $it0.next();
				var list = this._eventListeners.get(eventType);
				while(list.isEmpty() == false) {
					this.removeEventListener(eventType,list.first());
					list = this._eventListeners.get(eventType);
				}
			}
		}
	}
	,getListenerCount: function(type,listener) {
		var count = 0;
		if(this._eventListeners.exists(type)) {
			var list = this._eventListeners.get(type);
			var $it0 = list.iterator();
			while( $it0.hasNext() ) {
				var l = $it0.next();
				if(l == listener) count++;
			}
		}
		return count;
	}
	,_handleEvent: function(event) {
		var fnName = "on" + haxe.ui.toolkit.util.StringUtil.capitalizeFirstLetter(StringTools.replace(event.type,"haxeui_",""));
		var fn = Reflect.field(this,fnName);
		if(fn != null) {
			var fnEvent = new haxe.ui.toolkit.events.UIEvent("haxeui_" + event.type,event.get_component());
			fnEvent.data = event.data;
			fnEvent.displayObject = this;
			fn(fnEvent);
		}
	}
	,set_onInit: function(value) {
		this.onInit = value;
		this.addEventListener("haxeui_" + "init",$bind(this,this._handleEvent));
		return value;
	}
	,set_onResize: function(value) {
		this.onResize = value;
		this.addEventListener("haxeui_" + "resize",$bind(this,this._handleEvent));
		return value;
	}
	,set_onReady: function(value) {
		this.onReady = value;
		this.addEventListener("haxeui_" + "ready",$bind(this,this._handleEvent));
		return value;
	}
	,set_onClick: function(value) {
		this.onClick = value;
		this.addEventListener("haxeui_" + "click",$bind(this,this._handleEvent));
		return value;
	}
	,set_onMouseDown: function(value) {
		this.onMouseDown = value;
		this.addEventListener("haxeui_" + "mouseDown",$bind(this,this._handleEvent));
		return value;
	}
	,set_onMouseUp: function(value) {
		this.onMouseUp = value;
		this.addEventListener("haxeui_" + "mouseUp",$bind(this,this._handleEvent));
		return value;
	}
	,set_onMouseOver: function(value) {
		this.onMouseOver = value;
		this.addEventListener("haxeui_" + "mouseOver",$bind(this,this._handleEvent));
		return value;
	}
	,set_onMouseOut: function(value) {
		this.onMouseOut = value;
		this.addEventListener("haxeui_" + "mouseOut",$bind(this,this._handleEvent));
		return value;
	}
	,set_onMouseMove: function(value) {
		this.onMouseMove = value;
		this.addEventListener("haxeui_" + "mouseMove",$bind(this,this._handleEvent));
		return value;
	}
	,set_onDoubleClick: function(value) {
		this.onDoubleClick = value;
		this.addEventListener("haxeui_" + "doubleClick",$bind(this,this._handleEvent));
		return value;
	}
	,set_onRollOver: function(value) {
		this.onRollOver = value;
		this.addEventListener("haxeui_" + "rollOver",$bind(this,this._handleEvent));
		return value;
	}
	,set_onRollOut: function(value) {
		this.onRollOut = value;
		this.addEventListener("haxeui_" + "rollOut",$bind(this,this._handleEvent));
		return value;
	}
	,set_onChange: function(value) {
		this.onChange = value;
		this.addEventListener("haxeui_" + "change",$bind(this,this._handleEvent));
		return value;
	}
	,set_onScroll: function(value) {
		this.onScroll = value;
		this.addEventListener("haxeui_" + "scroll",$bind(this,this._handleEvent));
		return value;
	}
	,set_onAdded: function(value) {
		this.onAdded = value;
		this.addEventListener("haxeui_" + "added",$bind(this,this._handleEvent));
		return value;
	}
	,set_onAddedToStage: function(value) {
		this.onAddedToStage = value;
		this.addEventListener("haxeui_" + "addedToStage",$bind(this,this._handleEvent));
		return value;
	}
	,set_onRemoved: function(value) {
		this.onRemoved = value;
		this.addEventListener("haxeui_" + "removed",$bind(this,this._handleEvent));
		return value;
	}
	,set_onRemovedFromStage: function(value) {
		this.onRemovedFromStage = value;
		this.addEventListener("haxeui_" + "removedFromStage",$bind(this,this._handleEvent));
		return value;
	}
	,set_onActivate: function(value) {
		this.onActivate = value;
		this.addEventListener("haxeui_" + "activate",$bind(this,this._handleEvent));
		return value;
	}
	,set_onDeactivate: function(value) {
		this.onDeactivate = value;
		this.addEventListener("haxeui_" + "deactivate",$bind(this,this._handleEvent));
		return value;
	}
	,set_onGlyphClick: function(value) {
		this.onGlyphClick = value;
		this.addEventListener("haxeui_" + "glyphClick",$bind(this,this._handleEvent));
		return value;
	}
	,clone: function() {
		var c = this.self();
		c.set_id(this.get_id());
		c.set_x(this.get_x());
		c.set_y(this.get_y());
		c.set_width(this.get_width());
		c.set_height(this.get_height());
		c.set_percentWidth(this.get_percentWidth());
		c.set_percentHeight(this.get_percentHeight());
		c.set_horizontalAlign(this.get_horizontalAlign());
		c.set_verticalAlign(this.get_verticalAlign());
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.core.DisplayObject();
	}
	,__class__: haxe.ui.toolkit.core.DisplayObject
	,__properties__: {set_onGlyphClick:"set_onGlyphClick",set_onDeactivate:"set_onDeactivate",set_onActivate:"set_onActivate",set_onRemovedFromStage:"set_onRemovedFromStage",set_onRemoved:"set_onRemoved",set_onAddedToStage:"set_onAddedToStage",set_onAdded:"set_onAdded",set_onScroll:"set_onScroll",set_onChange:"set_onChange",set_onRollOut:"set_onRollOut",set_onRollOver:"set_onRollOver",set_onDoubleClick:"set_onDoubleClick",set_onMouseMove:"set_onMouseMove",set_onMouseOut:"set_onMouseOut",set_onMouseOver:"set_onMouseOver",set_onMouseUp:"set_onMouseUp",set_onMouseDown:"set_onMouseDown",set_onClick:"set_onClick",set_onReady:"set_onReady",set_onResize:"set_onResize",set_onInit:"set_onInit",get_graphics:"get_graphics",set_verticalAlign:"set_verticalAlign",get_verticalAlign:"get_verticalAlign",set_horizontalAlign:"set_horizontalAlign",get_horizontalAlign:"get_horizontalAlign",set_visible:"set_visible",get_visible:"get_visible",get_stageY:"get_stageY",get_stageX:"get_stageX",get_sprite:"get_sprite",get_ready:"get_ready",set_percentHeight:"set_percentHeight",get_percentHeight:"get_percentHeight",set_percentWidth:"set_percentWidth",get_percentWidth:"get_percentWidth",set_height:"set_height",get_height:"get_height",set_width:"set_width",get_width:"get_width",set_y:"set_y",get_y:"get_y",set_x:"set_x",get_x:"get_x",set_id:"set_id",get_id:"get_id",set_root:"set_root",get_root:"get_root",set_parent:"set_parent",get_parent:"get_parent"}
};
haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer = function() { };
$hxClasses["haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer"] = haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer;
haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer.__name__ = ["haxe","ui","toolkit","core","interfaces","IDisplayObjectContainer"];
haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IDisplayObject];
haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer.prototype = {
	__class__: haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer
};
haxe.ui.toolkit.core.DisplayObjectContainer = function() {
	this._autoSize = false;
	haxe.ui.toolkit.core.DisplayObject.call(this);
	this._layout = new haxe.ui.toolkit.layout.DefaultLayout();
	this._children = new Array();
};
$hxClasses["haxe.ui.toolkit.core.DisplayObjectContainer"] = haxe.ui.toolkit.core.DisplayObjectContainer;
haxe.ui.toolkit.core.DisplayObjectContainer.__name__ = ["haxe","ui","toolkit","core","DisplayObjectContainer"];
haxe.ui.toolkit.core.DisplayObjectContainer.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable,haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer];
haxe.ui.toolkit.core.DisplayObjectContainer.__super__ = haxe.ui.toolkit.core.DisplayObject;
haxe.ui.toolkit.core.DisplayObjectContainer.prototype = $extend(haxe.ui.toolkit.core.DisplayObject.prototype,{
	initialize: function() {
		haxe.ui.toolkit.core.DisplayObject.prototype.initialize.call(this);
		this._layout.set_container(this);
		if(this._childrenToAdd != null) {
			var _g = 0;
			var _g1 = this._childrenToAdd;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				this.addChild(child);
			}
			this._childrenToAdd = null;
		}
	}
	,invalidate: function(type,recursive) {
		if(recursive == null) recursive = false;
		if(type == null) type = 1118481;
		if(!this._ready || this._invalidating) return;
		haxe.ui.toolkit.core.DisplayObject.prototype.invalidate.call(this,type,recursive);
		this._invalidating = true;
		if((type & 256) == 256 || (type & 1) == 1) this._layout.refresh();
		this._invalidating = false;
		if(recursive == true) {
			var _g = 0;
			var _g1 = this._children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.invalidate(type,recursive);
			}
		}
	}
	,get_numChildren: function() {
		var arr = this._children;
		if(this._childrenToAdd != null) arr = arr.concat(this._childrenToAdd);
		return arr.length;
	}
	,get_children: function() {
		var arr = this._children;
		if(this._childrenToAdd != null) arr = arr.concat(this._childrenToAdd);
		return arr;
	}
	,indexOfChild: function(child) {
		var index = Lambda.indexOf(this.get_children(),child);
		return index;
	}
	,getChildAt: function(index) {
		return this.get_children()[index];
	}
	,addChildAt: function(child,index) {
		if(child == null) return null;
		if(this._ready == false) {
			if(this._childrenToAdd == null) this._childrenToAdd = new Array();
			this._childrenToAdd.splice(index,0,child);
			return child;
		}
		var childSprite = child.get_sprite();
		if(js.Boot.__instanceof(child,haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer)) (js.Boot.__cast(child , haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer)).set_parent(this);
		child.set_root(this.get_root());
		this._children.splice(index,0,child);
		this._sprite.addChildAt(childSprite,index);
		this.invalidate(1);
		return child;
	}
	,addChild: function(child) {
		if(child == null) return null;
		if(this._ready == false) {
			if(this._childrenToAdd == null) this._childrenToAdd = new Array();
			this._childrenToAdd.push(child);
			return child;
		}
		var childSprite = child.get_sprite();
		if(js.Boot.__instanceof(child,haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer)) (js.Boot.__cast(child , haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer)).set_parent(this);
		child.set_root(this.get_root());
		this._children.push(child);
		this._sprite.addChild(childSprite);
		this.invalidate(1);
		return child;
	}
	,removeChild: function(child,dispose) {
		if(dispose == null) dispose = true;
		if(child == null) return null;
		var childSprite = child.get_sprite();
		this._sprite.removeChild(childSprite);
		HxOverrides.remove(this._children,child);
		if(dispose == true) child.dispose();
		this.invalidate(1);
		if(this._childrenToAdd != null) {
			var success = HxOverrides.remove(this._childrenToAdd,child);
			if(dispose && success) child.dispose();
		}
		return child;
	}
	,removeChildAt: function(index,dispose) {
		if(dispose == null) dispose = true;
		return this.removeChild(this.getChildAt(index),dispose);
	}
	,removeAllChildren: function() {
		var arr = this.get_children();
		while(arr.length > 0) {
			var child = arr[0];
			this.removeChild(child);
		}
		while(this.get_sprite().get_numChildren() > 0) this.get_sprite().removeChildAt(0);
		this._childrenToAdd = null;
	}
	,contains: function(child) {
		if(child == null) return false;
		if(this._childrenToAdd != null) return Lambda.has(this._childrenToAdd,child);
		return this.get_sprite().contains(child.get_sprite());
	}
	,setChildIndex: function(child,index) {
		if(child != null) this.get_sprite().setChildIndex(child.get_sprite(),index);
		if(this._childrenToAdd != null) {
			HxOverrides.remove(this._childrenToAdd,child);
			this._childrenToAdd.splice(index,0,child);
		}
	}
	,findChildAs: function(type) {
		var match = null;
		var _g = 0;
		var _g1 = this.get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(js.Boot.__instanceof(child,type)) {
				match = child;
				break;
			}
		}
		return match;
	}
	,findChild: function(id,type,recursive) {
		if(recursive == null) recursive = false;
		var match = null;
		var _g = 0;
		var _g1 = this.get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_id() == id) {
				match = child;
				break;
			}
		}
		if(match == null && recursive == true) {
			var _g2 = 0;
			var _g11 = this.get_children();
			while(_g2 < _g11.length) {
				var child1 = _g11[_g2];
				++_g2;
				if(js.Boot.__instanceof(child1,haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer)) {
					var c;
					c = js.Boot.__cast(child1 , haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer);
					var temp = c.findChild(id,type,recursive);
					if(temp != null) {
						match = temp;
						break;
					}
				}
			}
		}
		return match;
	}
	,findComponentUnderPoint: function(stageX,stageY) {
		var c = null;
		var _g = 0;
		var _g1 = this.get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.hitTest(stageX,stageY) == true) {
				c = child;
				break;
			}
		}
		return c;
	}
	,get_layout: function() {
		return this._layout;
	}
	,set_layout: function(value) {
		this._layout = value;
		this._layout.set_container(this);
		return value;
	}
	,get_autoSize: function() {
		return this._autoSize;
	}
	,set_autoSize: function(value) {
		this._autoSize = value;
		return this._autoSize;
	}
	,dispose: function() {
		var _g = 0;
		var _g1 = this.get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			try {
				this.removeChild(child);
			} catch( e ) {
				var stack = haxe.CallStack.exceptionStack();
				haxe.Log.trace("Problem removing component: " + Std.string(this) + ", " + Std.string(child) + "(" + Std.string(e) + "), callstack:",{ fileName : "DisplayObjectContainer.hx", lineNumber : 305, className : "haxe.ui.toolkit.core.DisplayObjectContainer", methodName : "dispose"});
				haxe.Log.trace(haxe.CallStack.toString(stack),{ fileName : "DisplayObjectContainer.hx", lineNumber : 306, className : "haxe.ui.toolkit.core.DisplayObjectContainer", methodName : "dispose"});
			}
		}
		haxe.ui.toolkit.core.DisplayObject.prototype.dispose.call(this);
	}
	,set_root: function(value) {
		haxe.ui.toolkit.core.DisplayObject.prototype.set_root.call(this,value);
		var _g = 0;
		var _g1 = this.get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.set_root(value);
		}
		return value;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.DisplayObject.prototype.clone.call(this);
		c.set_autoSize(this.get_autoSize());
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.core.DisplayObjectContainer();
	}
	,__class__: haxe.ui.toolkit.core.DisplayObjectContainer
	,__properties__: $extend(haxe.ui.toolkit.core.DisplayObject.prototype.__properties__,{set_autoSize:"set_autoSize",get_autoSize:"get_autoSize",get_children:"get_children",set_layout:"set_layout",get_layout:"get_layout",get_numChildren:"get_numChildren"})
});
haxe.ui.toolkit.core.interfaces.IStyleableDisplayObject = function() { };
$hxClasses["haxe.ui.toolkit.core.interfaces.IStyleableDisplayObject"] = haxe.ui.toolkit.core.interfaces.IStyleableDisplayObject;
haxe.ui.toolkit.core.interfaces.IStyleableDisplayObject.__name__ = ["haxe","ui","toolkit","core","interfaces","IStyleableDisplayObject"];
haxe.ui.toolkit.core.interfaces.IStyleableDisplayObject.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer];
haxe.ui.toolkit.core.interfaces.IStyleableDisplayObject.prototype = {
	__class__: haxe.ui.toolkit.core.interfaces.IStyleableDisplayObject
};
haxe.ui.toolkit.core.StyleableDisplayObject = function() {
	haxe.ui.toolkit.core.DisplayObjectContainer.call(this);
};
$hxClasses["haxe.ui.toolkit.core.StyleableDisplayObject"] = haxe.ui.toolkit.core.StyleableDisplayObject;
haxe.ui.toolkit.core.StyleableDisplayObject.__name__ = ["haxe","ui","toolkit","core","StyleableDisplayObject"];
haxe.ui.toolkit.core.StyleableDisplayObject.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable,haxe.ui.toolkit.core.interfaces.IStyleableDisplayObject];
haxe.ui.toolkit.core.StyleableDisplayObject.__super__ = haxe.ui.toolkit.core.DisplayObjectContainer;
haxe.ui.toolkit.core.StyleableDisplayObject.prototype = $extend(haxe.ui.toolkit.core.DisplayObjectContainer.prototype,{
	preInitialize: function() {
		haxe.ui.toolkit.core.DisplayObjectContainer.prototype.preInitialize.call(this);
		this._setStyle = this._style;
		this.refreshStyle();
		this._style.merge(this._setStyle);
	}
	,paint: function() {
		if(this._width == 0 || this._height == 0) return;
		var rc = new flash.geom.Rectangle(0,0,this._width,this._height);
		haxe.ui.toolkit.style.StyleHelper.paintStyle(this.get_graphics(),this.get_style(),rc);
	}
	,invalidate: function(type,recursive) {
		if(recursive == null) recursive = false;
		if(type == null) type = 1118481;
		if(!this._ready || this._invalidating) return;
		haxe.ui.toolkit.core.DisplayObjectContainer.prototype.invalidate.call(this,type,recursive);
		if((type & 1048576) == 1048576) this.refreshStyle();
	}
	,set_id: function(value) {
		if(value == this.get_id()) return value;
		var v = haxe.ui.toolkit.core.DisplayObjectContainer.prototype.set_id.call(this,value);
		if(this._ready) {
			this.buildStyles();
			this._style = haxe.ui.toolkit.style.StyleManager.get_instance().buildStyleFor(this);
			this._style.merge(this._setStyle);
			this.invalidate(16);
		}
		return v;
	}
	,get_style: function() {
		if(this._style == null) this._style = new haxe.ui.toolkit.style.Style();
		return this._style;
	}
	,set_style: function(value) {
		this._style = value;
		this._style.set_target(this);
		return value;
	}
	,get_styleName: function() {
		return this._styleName;
	}
	,set_styleName: function(value) {
		this._styleName = value;
		if(this._ready) {
			this.buildStyles();
			this._style = haxe.ui.toolkit.style.StyleManager.get_instance().buildStyleFor(this);
			this._style.merge(this._setStyle);
			this.invalidate(16);
		}
		return value;
	}
	,get_inlineStyle: function() {
		if(this._inlineStyle == null) this._inlineStyle = new haxe.ui.toolkit.style.Style();
		return this._inlineStyle;
	}
	,set_inlineStyle: function(value) {
		this._inlineStyle = value;
		if(this._inlineStyle != null) this._inlineStyle.set_target(this);
		if(this._ready) {
			this.buildStyles();
			this._style = haxe.ui.toolkit.style.StyleManager.get_instance().buildStyleFor(this);
			this._style.merge(this._setStyle);
			this.invalidate(16);
		}
		return value;
	}
	,storeStyle: function(id,value) {
		if(this._storedStyles == null) this._storedStyles = new haxe.ds.StringMap();
		this._storedStyles.set(id,value);
	}
	,retrieveStyle: function(id) {
		if(this._storedStyles == null) return null;
		return this._storedStyles.get(id);
	}
	,applyStyle: function() {
		if(this._style == null) return;
		if(this._inlineStyle != null) this._style.merge(this._inlineStyle);
		if(this._style != null) {
			if(this._style.get_alpha() != -1) this._sprite.set_alpha(this._style.get_alpha()); else this._sprite.set_alpha(1);
		}
		this.invalidate(16);
	}
	,buildStyles: function() {
	}
	,refreshStyle: function() {
		this.buildStyles();
		if(js.Boot.__instanceof(this,haxe.ui.toolkit.core.StateComponent)) {
			var state = (js.Boot.__cast(this , haxe.ui.toolkit.core.StateComponent)).get_state();
			if(state == null) state = "normal";
			this._style = this.retrieveStyle(state);
			if(this._style == null) this._style = haxe.ui.toolkit.style.StyleManager.get_instance().buildStyleFor(this,(js.Boot.__cast(this , haxe.ui.toolkit.core.StateComponent)).get_state());
		} else this._style = haxe.ui.toolkit.style.StyleManager.get_instance().buildStyleFor(this);
		this._style.merge(this._inlineStyle);
		if(this._style != null) {
			if(this._style.get_width() != -1 && this.get_width() == 0) this.set_width(this._style.get_width());
			if(this._style.get_height() != -1 && this.get_height() == 0) this.set_height(this._style.get_height());
			if(this._style.get_percentWidth() != -1 && this.get_percentWidth() == -1) this.set_percentWidth(this._style.get_percentWidth());
			if(this._style.get_percentHeight() != -1 && this.get_percentHeight() == -1) this.set_percentHeight(this._style.get_percentHeight());
			if(this._style.get_autoSizeSet()) this.set_autoSize(this._style.get_autoSize());
			if(this.get_layout() != null) {
				if(this._style.get_paddingLeft() != -1) this.get_layout().get_padding().set_left(this._style.get_paddingLeft());
				if(this._style.get_paddingTop() != -1) this.get_layout().get_padding().set_top(this._style.get_paddingTop());
				if(this._style.get_paddingRight() != -1) this.get_layout().get_padding().set_right(this._style.get_paddingRight());
				if(this._style.get_paddingBottom() != -1) this.get_layout().get_padding().set_bottom(this._style.get_paddingBottom());
				if(this._style.get_spacingX() != -1) this._layout.set_spacingX(this._style.get_spacingX());
				if(this._style.get_spacingY() != -1) this._layout.set_spacingY(this._style.get_spacingY());
			}
		}
		this.applyStyle();
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.DisplayObjectContainer.prototype.clone.call(this);
		c.set_styleName(this.get_styleName());
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.core.StyleableDisplayObject();
	}
	,__class__: haxe.ui.toolkit.core.StyleableDisplayObject
	,__properties__: $extend(haxe.ui.toolkit.core.DisplayObjectContainer.prototype.__properties__,{set_inlineStyle:"set_inlineStyle",get_inlineStyle:"get_inlineStyle",set_styleName:"set_styleName",get_styleName:"get_styleName",set_style:"set_style",get_style:"get_style"})
});
haxe.ui.toolkit.core.interfaces.IComponent = function() { };
$hxClasses["haxe.ui.toolkit.core.interfaces.IComponent"] = haxe.ui.toolkit.core.interfaces.IComponent;
haxe.ui.toolkit.core.interfaces.IComponent.__name__ = ["haxe","ui","toolkit","core","interfaces","IComponent"];
haxe.ui.toolkit.core.interfaces.IComponent.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IStyleableDisplayObject];
haxe.ui.toolkit.core.interfaces.IComponent.prototype = {
	__class__: haxe.ui.toolkit.core.interfaces.IComponent
};
haxe.ui.toolkit.core.Component = function() {
	this._disabled = false;
	this._clipContent = false;
	haxe.ui.toolkit.core.StyleableDisplayObject.call(this);
};
$hxClasses["haxe.ui.toolkit.core.Component"] = haxe.ui.toolkit.core.Component;
haxe.ui.toolkit.core.Component.__name__ = ["haxe","ui","toolkit","core","Component"];
haxe.ui.toolkit.core.Component.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable,haxe.ui.toolkit.core.interfaces.IComponent];
haxe.ui.toolkit.core.Component.__super__ = haxe.ui.toolkit.core.StyleableDisplayObject;
haxe.ui.toolkit.core.Component.prototype = $extend(haxe.ui.toolkit.core.StyleableDisplayObject.prototype,{
	initialize: function() {
		haxe.ui.toolkit.core.StyleableDisplayObject.prototype.initialize.call(this);
		if(js.Boot.__instanceof(this,haxe.ui.toolkit.core.interfaces.IDraggable)) this.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onComponentMouseDown));
	}
	,postInitialize: function() {
		if(this._disabled == true) this.set_disabled(true);
	}
	,invalidate: function(type,recursive) {
		if(recursive == null) recursive = false;
		if(type == null) type = 1118481;
		if(!this._ready || this._invalidating) return;
		haxe.ui.toolkit.core.StyleableDisplayObject.prototype.invalidate.call(this,type,recursive);
		this._invalidating = true;
		if((type & 256) == 256 && this._clipContent == true) this.get_sprite().set_scrollRect(new flash.geom.Rectangle(0,0,this.get_width(),this.get_height()));
		this._invalidating = false;
	}
	,get_text: function() {
		return this._text;
	}
	,set_text: function(value) {
		if(value != null) {
			if(StringTools.startsWith(value,"@#")) value = HxOverrides.substr(value,2,value.length) + "_" + haxe.ui.toolkit.core.Client.get_instance().get_language(); else if(StringTools.startsWith(value,"asset://")) {
				var assetId = HxOverrides.substr(value,8,value.length);
				value = haxe.ui.toolkit.resources.ResourceManager.get_instance().getText(assetId);
				value = StringTools.replace(value,"\r","");
			}
			this._text = value;
		}
		return value;
	}
	,get_clipWidth: function() {
		if(this.get_sprite().get_scrollRect() == null) return this.get_width();
		return this.get_sprite().get_scrollRect().width;
	}
	,set_clipWidth: function(value) {
		this.get_sprite().set_scrollRect(new flash.geom.Rectangle(0,0,value,this.get_clipHeight()));
		return value;
	}
	,get_clipHeight: function() {
		if(this.get_sprite().get_scrollRect() == null) return this.get_height();
		return this.get_sprite().get_scrollRect().height;
	}
	,set_clipHeight: function(value) {
		this.get_sprite().set_scrollRect(new flash.geom.Rectangle(0,0,this.get_clipWidth(),value));
		return value;
	}
	,get_clipContent: function() {
		return this._clipContent;
	}
	,set_clipContent: function(value) {
		this._clipContent = value;
		this.invalidate(256);
		return value;
	}
	,clearClip: function() {
		this.get_sprite().set_scrollRect(null);
	}
	,get_disabled: function() {
		return this._disabled;
	}
	,set_disabled: function(value) {
		if(value == true) {
			if(this._cachedListeners == null) this._cachedListeners = new haxe.ds.StringMap();
			var $it0 = this._eventListeners.keys();
			while( $it0.hasNext() ) {
				var type = $it0.next();
				if(this.disablableEventType(type) == true) {
					var list = this._eventListeners.get(type);
					var cachedList = this._cachedListeners.get(type);
					if(cachedList == null) {
						cachedList = new List();
						this._cachedListeners.set(type,cachedList);
					}
					var $it1 = list.iterator();
					while( $it1.hasNext() ) {
						var listener = $it1.next();
						cachedList.push(listener);
						this.removeEventListener(type,listener);
					}
				}
			}
		}
		this._disabled = value;
		var _g = 0;
		var _g1 = this.get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(js.Boot.__instanceof(child,haxe.ui.toolkit.core.Component)) (js.Boot.__cast(child , haxe.ui.toolkit.core.Component)).set_disabled(value);
		}
		if(value == false) {
			if(this._cachedListeners != null) {
				var $it2 = this._cachedListeners.keys();
				while( $it2.hasNext() ) {
					var type1 = $it2.next();
					var list1 = this._cachedListeners.get(type1);
					var $it3 = list1.iterator();
					while( $it3.hasNext() ) {
						var listener1 = $it3.next();
						this.addEventListener(type1,listener1);
					}
					list1.clear();
				}
				this._cachedListeners = null;
			}
		}
		if(js.Boot.__instanceof(this,haxe.ui.toolkit.core.StateComponent)) {
			var stateComponent;
			stateComponent = js.Boot.__cast(this , haxe.ui.toolkit.core.StateComponent);
			if(value == true) {
				if(stateComponent.hasState("disabled")) stateComponent.set_state("disabled");
			} else if(stateComponent.hasState("normal")) stateComponent.set_state("normal");
		}
		return value;
	}
	,get_value: function() {
		return this.get_text();
	}
	,set_value: function(newValue) {
		this.set_text(newValue);
		return newValue;
	}
	,addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		if(this._disabled == true && this.disablableEventType(type) == true) {
			if(this._cachedListeners == null) this._cachedListeners = new haxe.ds.StringMap();
			var list = this._cachedListeners.get(type);
			if(list == null) {
				list = new List();
				this._cachedListeners.set(type,list);
			}
			list.push(listener);
			return;
		}
		haxe.ui.toolkit.core.StyleableDisplayObject.prototype.addEventListener.call(this,type,listener,useCapture,priority,useWeakReference);
	}
	,removeEventListener: function(type,listener,useCapture) {
		if(useCapture == null) useCapture = false;
		if(this._disabled == true && this.disablableEventType(type) == true) {
			if(this._cachedListeners != null) {
				var list = this._cachedListeners.get(type);
				if(list != null) {
					list.remove(listener);
					if(list.length == 0) this._cachedListeners.remove(type);
				}
			}
			return;
		}
		haxe.ui.toolkit.core.StyleableDisplayObject.prototype.removeEventListener.call(this,type,listener,useCapture);
	}
	,disablableEventType: function(type) {
		return type == flash.events.MouseEvent.MOUSE_DOWN || type == flash.events.MouseEvent.MOUSE_MOVE || type == flash.events.MouseEvent.MOUSE_OVER || type == flash.events.MouseEvent.MOUSE_OUT || type == flash.events.MouseEvent.MOUSE_UP || type == flash.events.MouseEvent.MOUSE_WHEEL || type == flash.events.MouseEvent.CLICK;
	}
	,_onComponentMouseDown: function(event) {
		if(js.Boot.__instanceof(this,haxe.ui.toolkit.core.interfaces.IDraggable)) {
			if((js.Boot.__cast(this , haxe.ui.toolkit.core.interfaces.IDraggable)).allowDrag(event) == false) return;
		}
		this.mouseDownPos = new flash.geom.Point(event.stageX - this.get_stageX(),event.stageY - this.get_stageY());
		this.get_root().addEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this._onComponentMouseMove));
		this.get_root().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onComponentMouseUp));
	}
	,_onComponentMouseUp: function(event) {
		this.get_root().removeEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this._onComponentMouseMove));
		this.get_root().removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onComponentMouseUp));
	}
	,_onComponentMouseMove: function(event) {
		this.set_x(event.stageX - this.mouseDownPos.x);
		this.set_y(event.stageY - this.mouseDownPos.y);
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.StyleableDisplayObject.prototype.clone.call(this);
		c.set_text(this.get_text());
		c.set_disabled(this.get_disabled());
		c.userData = this.userData;
		c.set_value(this.get_value());
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.core.Component();
	}
	,__class__: haxe.ui.toolkit.core.Component
	,__properties__: $extend(haxe.ui.toolkit.core.StyleableDisplayObject.prototype.__properties__,{set_value:"set_value",get_value:"get_value",set_disabled:"set_disabled",get_disabled:"get_disabled",set_clipContent:"set_clipContent",get_clipContent:"get_clipContent",set_clipHeight:"set_clipHeight",get_clipHeight:"get_clipHeight",set_clipWidth:"set_clipWidth",get_clipWidth:"get_clipWidth",set_text:"set_text",get_text:"get_text"})
});
haxe.ui.toolkit.containers = {};
haxe.ui.toolkit.containers.Container = function() {
	haxe.ui.toolkit.core.Component.call(this);
};
$hxClasses["haxe.ui.toolkit.containers.Container"] = haxe.ui.toolkit.containers.Container;
haxe.ui.toolkit.containers.Container.__name__ = ["haxe","ui","toolkit","containers","Container"];
haxe.ui.toolkit.containers.Container.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.containers.Container.__super__ = haxe.ui.toolkit.core.Component;
haxe.ui.toolkit.containers.Container.prototype = $extend(haxe.ui.toolkit.core.Component.prototype,{
	clone: function() {
		var c = haxe.ui.toolkit.core.Component.prototype.clone.call(this);
		var _g = 0;
		var _g1 = this.get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			c.addChild(child.clone());
		}
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.Container();
	}
	,__class__: haxe.ui.toolkit.containers.Container
});
haxe.ui.toolkit.containers.VBox = function() {
	haxe.ui.toolkit.containers.Container.call(this);
	this.set_autoSize(true);
	this.set_layout(new haxe.ui.toolkit.layout.VerticalLayout());
};
$hxClasses["haxe.ui.toolkit.containers.VBox"] = haxe.ui.toolkit.containers.VBox;
haxe.ui.toolkit.containers.VBox.__name__ = ["haxe","ui","toolkit","containers","VBox"];
haxe.ui.toolkit.containers.VBox.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.containers.VBox.__super__ = haxe.ui.toolkit.containers.Container;
haxe.ui.toolkit.containers.VBox.prototype = $extend(haxe.ui.toolkit.containers.Container.prototype,{
	clone: function() {
		var c = haxe.ui.toolkit.containers.Container.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.VBox();
	}
	,__class__: haxe.ui.toolkit.containers.VBox
});
haxe.ui.toolkit.containers.Accordion = function() {
	this._selectedIndex = -1;
	haxe.ui.toolkit.containers.VBox.call(this);
	this._autoSize = false;
	this._panels = new Array();
	this._buttons = new Array();
};
$hxClasses["haxe.ui.toolkit.containers.Accordion"] = haxe.ui.toolkit.containers.Accordion;
haxe.ui.toolkit.containers.Accordion.__name__ = ["haxe","ui","toolkit","containers","Accordion"];
haxe.ui.toolkit.containers.Accordion.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.containers.Accordion.__super__ = haxe.ui.toolkit.containers.VBox;
haxe.ui.toolkit.containers.Accordion.prototype = $extend(haxe.ui.toolkit.containers.VBox.prototype,{
	initialize: function() {
		haxe.ui.toolkit.containers.VBox.prototype.initialize.call(this);
		if(this._selectedIndex != -1) {
			var cachedIndex = this._selectedIndex;
			this._selectedIndex = -1;
			this.showPage(cachedIndex);
		}
	}
	,addChild: function(child) {
		var r = null;
		if(js.Boot.__instanceof(child,haxe.ui.toolkit.containers.AccordionButton)) r = haxe.ui.toolkit.containers.VBox.prototype.addChild.call(this,child); else {
			if(js.Boot.__instanceof(child,haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer)) (js.Boot.__cast(child , haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer)).set_autoSize(false);
			if(js.Boot.__instanceof(child,haxe.ui.toolkit.core.StyleableDisplayObject)) (js.Boot.__cast(child , haxe.ui.toolkit.core.StyleableDisplayObject)).set_styleName("page");
			child.set_percentHeight(100);
			child.set_percentWidth(100);
			this._panels.push(child);
			var button = new haxe.ui.toolkit.containers.AccordionButton();
			button.set_styleName("expandable");
			if(js.Boot.__instanceof(child,haxe.ui.toolkit.core.Component)) button.set_text((js.Boot.__cast(child , haxe.ui.toolkit.core.Component)).get_text());
			button.set_percentWidth(100);
			button.set_toggle(true);
			button.set_selected(false);
			button.userData = this._panels.length - 1;
			button.addEventListener("haxeui_" + "click",$bind(this,this._onButtonClick));
			this._buttons.push(button);
			this.addChild(button);
			child.set_visible(false);
			r = haxe.ui.toolkit.containers.VBox.prototype.addChild.call(this,child);
		}
		return r;
	}
	,removeChild: function(child,dispose) {
		if(dispose == null) dispose = true;
		if(js.Boot.__instanceof(child,haxe.ui.toolkit.containers.AccordionButton)) HxOverrides.remove(this._buttons,child); else HxOverrides.remove(this._panels,child);
		return haxe.ui.toolkit.containers.VBox.prototype.removeChild.call(this,child,dispose);
	}
	,get_selectedIndex: function() {
		return this._selectedIndex;
	}
	,set_selectedIndex: function(value) {
		if(this._ready == true) this._buttons[value].set_selected(true); else this._selectedIndex = value;
		return value;
	}
	,get_selectedButton: function() {
		if(this._selectedIndex == -1) return null;
		return this.getButton(this._selectedIndex);
	}
	,getButton: function(index) {
		return this._buttons[index];
	}
	,showPage: function(index) {
		var button = this._buttons[index];
		button.set_selected(true);
	}
	,_onButtonClick: function(event) {
		var index = event.get_component().userData;
		this.showPanel(index);
		this.dispatchEvent(new haxe.ui.toolkit.events.UIEvent("haxeui_" + "change"));
	}
	,showPanel: function(index) {
		var button = this._buttons[index];
		var panel = this._panels[index];
		var buttonOld = null;
		var panelOld = null;
		var ucy = this.get_layout().get_usableHeight();
		if(this._selectedIndex > -1) {
			buttonOld = this._buttons[this._selectedIndex];
			panelOld = this._panels[this._selectedIndex];
			this.unselectButton(buttonOld);
		}
		var transition = haxe.ui.toolkit.core.Toolkit.getTransitionForClass(haxe.ui.toolkit.containers.Accordion);
		if(transition == "slide") {
			panel.set_percentHeight(-1);
			panel.set_height(0);
			panel.set_visible(true);
			motion.Actuate.tween(panel,.2,{ height : ucy, clipHeight : ucy},true).ease(motion.easing.Linear.get_easeNone()).onUpdate($bind(this,this._onTweenUpdate),[ucy,panel,panelOld]).onComplete($bind(this,this._onTweenComplete),[panel,panelOld,buttonOld]);
		} else if(transition == "fade") {
			panel.get_sprite().set_alpha(0);
			panel.set_visible(true);
			if(panelOld != null) panelOld.set_visible(false);
			motion.Actuate.tween(panel.get_sprite(),.2,{ alpha : 1},true).ease(motion.easing.Linear.get_easeNone());
		} else {
			panel.set_visible(true);
			if(panelOld != null) panelOld.set_visible(false);
		}
		if(panelOld == panel) this._selectedIndex = -1; else this._selectedIndex = index;
	}
	,unselectButton: function(button) {
		button.set_allowSelection(false);
		button.set_selected(false);
		button.set_allowSelection(true);
	}
	,_onTweenUpdate: function(ucy,panel,panelOld) {
		if(panelOld != null) {
			panelOld.set_height(ucy - panel.get_height());
			panelOld.set_clipHeight(panelOld.get_height());
		}
	}
	,_onTweenComplete: function(panel,panelOld,buttonOld) {
		panel.clearClip();
		panel.set_percentHeight(100);
		if(panelOld != null) {
			panelOld.set_visible(false);
			this.unselectButton(buttonOld);
		}
	}
	,clone: function() {
		var c = haxe.ui.toolkit.containers.VBox.prototype.clone.call(this);
		c.removeAllChildren();
		var _g = 0;
		var _g1 = this.get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(js.Boot.__instanceof(child,haxe.ui.toolkit.containers.AccordionButton) == false) c.addChild(child.clone());
		}
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.Accordion();
	}
	,__class__: haxe.ui.toolkit.containers.Accordion
	,__properties__: $extend(haxe.ui.toolkit.containers.VBox.prototype.__properties__,{get_selectedButton:"get_selectedButton",set_selectedIndex:"set_selectedIndex",get_selectedIndex:"get_selectedIndex"})
});
haxe.ui.toolkit.core.interfaces.IStateComponent = function() { };
$hxClasses["haxe.ui.toolkit.core.interfaces.IStateComponent"] = haxe.ui.toolkit.core.interfaces.IStateComponent;
haxe.ui.toolkit.core.interfaces.IStateComponent.__name__ = ["haxe","ui","toolkit","core","interfaces","IStateComponent"];
haxe.ui.toolkit.core.interfaces.IStateComponent.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IComponent];
haxe.ui.toolkit.core.interfaces.IStateComponent.prototype = {
	__class__: haxe.ui.toolkit.core.interfaces.IStateComponent
};
haxe.ui.toolkit.core.StateComponent = function() {
	haxe.ui.toolkit.core.Component.call(this);
	this._states = new Array();
};
$hxClasses["haxe.ui.toolkit.core.StateComponent"] = haxe.ui.toolkit.core.StateComponent;
haxe.ui.toolkit.core.StateComponent.__name__ = ["haxe","ui","toolkit","core","StateComponent"];
haxe.ui.toolkit.core.StateComponent.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable,haxe.ui.toolkit.core.interfaces.IStateComponent];
haxe.ui.toolkit.core.StateComponent.__super__ = haxe.ui.toolkit.core.Component;
haxe.ui.toolkit.core.StateComponent.prototype = $extend(haxe.ui.toolkit.core.Component.prototype,{
	buildStyles: function() {
		var _g = 0;
		var _g1 = this.get_states();
		while(_g < _g1.length) {
			var s = _g1[_g];
			++_g;
			var stateStyle = haxe.ui.toolkit.style.StyleManager.get_instance().buildStyleFor(this,s);
			if(stateStyle != null) {
				stateStyle.merge(this._setStyle);
				this.storeStyle(s,stateStyle);
			}
		}
	}
	,addStates: function(stateNames,rebuildStyles) {
		if(rebuildStyles == null) rebuildStyles = true;
		var _g = 0;
		while(_g < stateNames.length) {
			var stateName = stateNames[_g];
			++_g;
			this.addState(stateName,false);
		}
		if(rebuildStyles == true && this._ready) this.buildStyles();
	}
	,addState: function(stateName,rebuildStyles) {
		if(rebuildStyles == null) rebuildStyles = true;
		if(this.hasState(stateName) == false) {
			this._states.push(stateName);
			if(rebuildStyles == true && this._ready) this.buildStyles();
		}
	}
	,get_state: function() {
		return this._state;
	}
	,set_state: function(value) {
		if(this._state != value) {
			this._state = value;
			if(this.retrieveStyle(this._state) != null) this.set_style(this.retrieveStyle(this._state)); else this.invalidate(4096);
		}
		return value;
	}
	,get_states: function() {
		return this._states;
	}
	,hasState: function(state) {
		if(this.get_states() == null) return false;
		return Lambda.indexOf(this.get_states(),state) != -1;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.Component.prototype.clone.call(this);
		c.set_state(this.get_state());
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.core.StateComponent();
	}
	,__class__: haxe.ui.toolkit.core.StateComponent
	,__properties__: $extend(haxe.ui.toolkit.core.Component.prototype.__properties__,{get_states:"get_states",set_state:"set_state",get_state:"get_state"})
});
haxe.ui.toolkit.core.interfaces.IFocusable = function() { };
$hxClasses["haxe.ui.toolkit.core.interfaces.IFocusable"] = haxe.ui.toolkit.core.interfaces.IFocusable;
haxe.ui.toolkit.core.interfaces.IFocusable.__name__ = ["haxe","ui","toolkit","core","interfaces","IFocusable"];
haxe.ui.toolkit.core.interfaces.IFocusable.prototype = {
	__class__: haxe.ui.toolkit.core.interfaces.IFocusable
};
haxe.ui.toolkit.controls = {};
haxe.ui.toolkit.controls.Button = function() {
	this._allowSelection = true;
	this._selected = false;
	this._toggle = false;
	this._down = false;
	this._remainPressed = false;
	this._allowFocus = true;
	haxe.ui.toolkit.core.StateComponent.call(this);
	this.get_sprite().buttonMode = true;
	this.get_sprite().useHandCursor = true;
	this.set_state("normal");
	this._layout = new haxe.ui.toolkit.controls.ButtonLayout();
	this._label = new haxe.ui.toolkit.controls.Text();
	this._label.set_id("label");
	this.set_autoSize(true);
	if(haxe.ui.toolkit.controls.Button._groups == null) haxe.ui.toolkit.controls.Button._groups = new haxe.ds.StringMap();
};
$hxClasses["haxe.ui.toolkit.controls.Button"] = haxe.ui.toolkit.controls.Button;
haxe.ui.toolkit.controls.Button.__name__ = ["haxe","ui","toolkit","controls","Button"];
haxe.ui.toolkit.controls.Button.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable,haxe.ui.toolkit.core.interfaces.IFocusable];
haxe.ui.toolkit.controls.Button._groups = null;
haxe.ui.toolkit.controls.Button.optionInGroup = function(value,option) {
	var exists = false;
	var arr = haxe.ui.toolkit.controls.Button._groups.get(value);
	if(arr != null) {
		var _g = 0;
		while(_g < arr.length) {
			var test = arr[_g];
			++_g;
			if(test == option) {
				exists = true;
				break;
			}
		}
	}
	return exists;
};
haxe.ui.toolkit.controls.Button.__super__ = haxe.ui.toolkit.core.StateComponent;
haxe.ui.toolkit.controls.Button.prototype = $extend(haxe.ui.toolkit.core.StateComponent.prototype,{
	get_remainPressed: function() {
		return this._remainPressed;
	}
	,set_remainPressed: function(value) {
		this._remainPressed = value;
		return value;
	}
	,get_icon: function() {
		if(this._icon == null) return null;
		return this._icon.get_resource();
	}
	,set_icon: function(value) {
		if(value != null) {
			if(this._icon == null) {
				this._icon = new haxe.ui.toolkit.controls.Image();
				this.addChild(this._icon);
			}
			this._icon.set_resource(value);
		}
		return value;
	}
	,preInitialize: function() {
		haxe.ui.toolkit.core.StateComponent.prototype.preInitialize.call(this);
		this.resizeButton();
	}
	,initialize: function() {
		haxe.ui.toolkit.core.StateComponent.prototype.initialize.call(this);
		this.addChild(this._label);
		this.addEventListener(flash.events.MouseEvent.MOUSE_OVER,$bind(this,this._onMouseOver));
		this.addEventListener(flash.events.MouseEvent.MOUSE_OUT,$bind(this,this._onMouseOut));
		this.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onMouseDown));
		this.addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onMouseUp));
		this.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this._onMouseClick));
	}
	,set_disabled: function(value) {
		haxe.ui.toolkit.core.StateComponent.prototype.set_disabled.call(this,value);
		if(value == true) {
			this.get_sprite().buttonMode = false;
			this.get_sprite().useHandCursor = false;
		} else {
			this.get_sprite().buttonMode = true;
			this.get_sprite().useHandCursor = true;
		}
		return value;
	}
	,get_text: function() {
		return this._label.get_text();
	}
	,set_text: function(value) {
		value = haxe.ui.toolkit.core.StateComponent.prototype.set_text.call(this,value);
		this._label.set_text(value);
		if(this._ready) this.resizeButton(true);
		return value;
	}
	,_onMouseOver: function(event) {
		if(this._selected == false) {
			if(event.buttonDown == false || this._down == false) this.set_state("over"); else this.set_state("down");
		}
	}
	,_onMouseOut: function(event) {
		if(this._selected == false) {
			if(this._remainPressed == false || event.buttonDown == false) this.set_state("normal"); else {
			}
		}
	}
	,_onMouseDown: function(event) {
		if(this._allowSelection == true) {
			this._down = true;
			this.set_state("down");
			haxe.ui.toolkit.core.Screen.get_instance().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onMouseUp));
		}
	}
	,_onMouseUp: function(event) {
		if(this._allowSelection == true && this.get_toggle() == false) {
			this._down = false;
			if(this.hitTest(event.stageX,event.stageY)) this.set_state("over"); else this.set_state("normal");
			haxe.ui.toolkit.core.Screen.get_instance().removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onMouseUp));
		}
	}
	,_onMouseClick: function(event) {
		if(this._icon != null && this._icon.hitTest(event.stageX,event.stageY)) this.dispatchEvent(new haxe.ui.toolkit.events.UIEvent("haxeui_" + "glyphClick"));
		if(this._toggle == true && this._allowSelection == true) {
			this.set_selected(!this.get_selected());
			if(this.get_selected() == false && this.hitTest(event.stageX,event.stageY)) this.set_state("over");
		}
	}
	,get_states: function() {
		return ["normal","over","down","disabled"];
	}
	,set_state: function(value) {
		haxe.ui.toolkit.core.StateComponent.prototype.set_state.call(this,value);
		if(value == "down") this._down = true;
		return value;
	}
	,get_allowFocus: function() {
		return this._allowFocus;
	}
	,set_allowFocus: function(value) {
		return value;
	}
	,get_iconPosition: function() {
		if(js.Boot.__instanceof(this._layout,haxe.ui.toolkit.controls.ButtonLayout)) return (js.Boot.__cast(this._layout , haxe.ui.toolkit.controls.ButtonLayout)).get_iconPosition();
		return "";
	}
	,set_iconPosition: function(value) {
		if(js.Boot.__instanceof(this._layout,haxe.ui.toolkit.controls.ButtonLayout)) (js.Boot.__cast(this._layout , haxe.ui.toolkit.controls.ButtonLayout)).set_iconPosition(value);
		return value;
	}
	,get_toggle: function() {
		return this._toggle;
	}
	,set_toggle: function(value) {
		this._toggle = value;
		return value;
	}
	,get_selected: function() {
		return this._selected;
	}
	,set_selected: function(value) {
		if(this._toggle == true && this._selected != value) {
			if(this._group != null && value == true) {
				var arr = haxe.ui.toolkit.controls.Button._groups.get(this._group);
				if(arr != null) {
					var _g = 0;
					while(_g < arr.length) {
						var button = arr[_g];
						++_g;
						if(button != this) button.set_selected(false);
					}
				}
			}
			this._selected = value;
			var event = new flash.events.Event(flash.events.Event.CHANGE);
			this.dispatchEvent(event);
		}
		this._selected = value;
		if(this._selected == true) this.set_state("down"); else if(this.get_root() != null && this.hitTest(this.get_root().get_mousePosition().x,this.get_root().get_mousePosition().y) == true) this.set_state("over"); else this.set_state("normal");
		return value;
	}
	,get_group: function() {
		return this._group;
	}
	,set_group: function(value) {
		if(value != null) {
			var arr = haxe.ui.toolkit.controls.Button._groups.get(value);
			if(arr != null) HxOverrides.remove(arr,this);
		}
		this._group = value;
		if(value == null) return value;
		var arr1 = haxe.ui.toolkit.controls.Button._groups.get(value);
		if(arr1 == null) arr1 = new Array();
		if(haxe.ui.toolkit.controls.Button.optionInGroup(value,this) == false) arr1.push(this);
		haxe.ui.toolkit.controls.Button._groups.set(value,arr1);
		return value;
	}
	,get_allowSelection: function() {
		return this._allowSelection;
	}
	,set_allowSelection: function(value) {
		this._allowSelection = value;
		return value;
	}
	,applyStyle: function() {
		haxe.ui.toolkit.core.StateComponent.prototype.applyStyle.call(this);
		if(this._label != null) {
			var labelStyle = new haxe.ui.toolkit.style.Style();
			if(this._style != null) {
				labelStyle.set_fontName(this._style.get_fontName());
				labelStyle.set_fontSize(this._style.get_fontSize());
				labelStyle.set_fontEmbedded(this._style.get_fontEmbedded());
				labelStyle.set_color(this._style.get_color());
			}
			this._label.set_style(labelStyle);
		}
		if(this._style != null) {
			if(this._style.get_icon() != null) this.set_icon(this._style.get_icon());
			if(this._style.get_iconPosition() != null && js.Boot.__instanceof(this._layout,haxe.ui.toolkit.controls.ButtonLayout)) {
				(js.Boot.__cast(this._layout , haxe.ui.toolkit.controls.ButtonLayout)).set_iconPosition(this._style.get_iconPosition());
				this.invalidate(1);
			}
			if(this._style.get_labelPosition() != null && js.Boot.__instanceof(this._layout,haxe.ui.toolkit.controls.ButtonLayout)) (js.Boot.__cast(this._layout , haxe.ui.toolkit.controls.ButtonLayout)).set_labelPosition(this._style.get_labelPosition());
		}
	}
	,resizeButton: function(force) {
		if(force == null) force = false;
		if(this.get_text().length > 0 && this.get_autoSize() == true && js.Boot.__instanceof(this._layout,haxe.ui.toolkit.controls.ButtonLayout)) {
			var buttonLayout;
			buttonLayout = js.Boot.__cast(this._layout , haxe.ui.toolkit.controls.ButtonLayout);
			if(this.get_width() == 0 || force == true) {
				var cx = this._label.get_width() + this._layout.get_padding().get_left() + this._layout.get_padding().get_right();
				if(this._icon != null) {
					if(buttonLayout.get_iconPosition() == "farLeft" || buttonLayout.get_iconPosition() == "left" || buttonLayout.get_iconPosition() == "right" || buttonLayout.get_iconPosition() == "farRight") cx += (this._icon.get_width() + this._layout.get_spacingX()) * 2;
				}
				this.set_width(cx);
			}
			if(this.get_height() == 0 || force == true) {
				var cy = this._label.get_height() + this._layout.get_padding().get_top() + this._layout.get_padding().get_bottom();
				this.set_height(cy);
			}
		}
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.StateComponent.prototype.clone.call(this);
		c.set_remainPressed(this.get_remainPressed());
		c.set_icon(this.get_icon());
		c.set_allowFocus(this.get_allowFocus());
		c.set_iconPosition(this.get_iconPosition());
		c.set_toggle(this.get_toggle());
		c.set_selected(this.get_selected());
		c.set_group(this.get_group());
		c.set_allowSelection(this.get_allowSelection());
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.Button();
	}
	,__class__: haxe.ui.toolkit.controls.Button
	,__properties__: $extend(haxe.ui.toolkit.core.StateComponent.prototype.__properties__,{set_allowSelection:"set_allowSelection",get_allowSelection:"get_allowSelection",set_group:"set_group",get_group:"get_group",set_selected:"set_selected",get_selected:"get_selected",set_toggle:"set_toggle",get_toggle:"get_toggle",set_iconPosition:"set_iconPosition",get_iconPosition:"get_iconPosition",set_allowFocus:"set_allowFocus",get_allowFocus:"get_allowFocus",set_icon:"set_icon",get_icon:"get_icon",set_remainPressed:"set_remainPressed",get_remainPressed:"get_remainPressed"})
});
haxe.ui.toolkit.containers.AccordionButton = function() {
	haxe.ui.toolkit.controls.Button.call(this);
};
$hxClasses["haxe.ui.toolkit.containers.AccordionButton"] = haxe.ui.toolkit.containers.AccordionButton;
haxe.ui.toolkit.containers.AccordionButton.__name__ = ["haxe","ui","toolkit","containers","AccordionButton"];
haxe.ui.toolkit.containers.AccordionButton.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.containers.AccordionButton.__super__ = haxe.ui.toolkit.controls.Button;
haxe.ui.toolkit.containers.AccordionButton.prototype = $extend(haxe.ui.toolkit.controls.Button.prototype,{
	clone: function() {
		var c = haxe.ui.toolkit.controls.Button.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.AccordionButton();
	}
	,__class__: haxe.ui.toolkit.containers.AccordionButton
});
haxe.ui.toolkit.containers.Box = function() {
	haxe.ui.toolkit.containers.Container.call(this);
	this.set_autoSize(true);
	this.set_layout(new haxe.ui.toolkit.layout.BoxLayout());
};
$hxClasses["haxe.ui.toolkit.containers.Box"] = haxe.ui.toolkit.containers.Box;
haxe.ui.toolkit.containers.Box.__name__ = ["haxe","ui","toolkit","containers","Box"];
haxe.ui.toolkit.containers.Box.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.containers.Box.__super__ = haxe.ui.toolkit.containers.Container;
haxe.ui.toolkit.containers.Box.prototype = $extend(haxe.ui.toolkit.containers.Container.prototype,{
	clone: function() {
		var c = haxe.ui.toolkit.containers.Container.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.Box();
	}
	,__class__: haxe.ui.toolkit.containers.Box
});
haxe.ui.toolkit.containers.CalendarView = function() {
	haxe.ui.toolkit.containers.VBox.call(this);
	this._calendar = new haxe.ui.toolkit.controls.Calendar();
	this._autoSize = false;
	this._calendar.set_percentWidth(100);
	this._calendar.set_percentHeight(100);
};
$hxClasses["haxe.ui.toolkit.containers.CalendarView"] = haxe.ui.toolkit.containers.CalendarView;
haxe.ui.toolkit.containers.CalendarView.__name__ = ["haxe","ui","toolkit","containers","CalendarView"];
haxe.ui.toolkit.containers.CalendarView.__super__ = haxe.ui.toolkit.containers.VBox;
haxe.ui.toolkit.containers.CalendarView.prototype = $extend(haxe.ui.toolkit.containers.VBox.prototype,{
	initialize: function() {
		haxe.ui.toolkit.containers.VBox.prototype.initialize.call(this);
		var hbox = new haxe.ui.toolkit.containers.HBox();
		hbox.set_percentWidth(100);
		this._prevMonthButton = new haxe.ui.toolkit.controls.Button();
		this._prevMonthButton.set_text("<");
		this._prevMonthButton.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this._onPrevClicked));
		hbox.addChild(this._prevMonthButton);
		var spacer = new haxe.ui.toolkit.controls.Spacer();
		spacer.set_percentWidth(50);
		hbox.addChild(spacer);
		this._currentMonthYear = new haxe.ui.toolkit.controls.Text();
		this._currentMonthYear.set_text("December 2013");
		hbox.addChild(this._currentMonthYear);
		var spacer1 = new haxe.ui.toolkit.controls.Spacer();
		spacer1.set_percentWidth(50);
		hbox.addChild(spacer1);
		this._nextMonthButton = new haxe.ui.toolkit.controls.Button();
		this._nextMonthButton.set_text(">");
		this._nextMonthButton.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this._onNextClicked));
		hbox.addChild(this._nextMonthButton);
		this.addChild(hbox);
		this._calendar.addEventListener(flash.events.Event.CHANGE,$bind(this,this._onDateChanged));
		this.addChild(this._calendar);
		this.displayMonthYear();
	}
	,get_date: function() {
		return this._calendar.get_date();
	}
	,set_date: function(value) {
		this._calendar.set_date(value);
		return value;
	}
	,get_selectedDate: function() {
		return this._calendar.get_selectedDate();
	}
	,set_selectedDate: function(value) {
		this._calendar.set_selectedDate(value);
		return value;
	}
	,_onPrevClicked: function(event) {
		this._calendar.previousMonth();
		this.displayMonthYear();
	}
	,_onNextClicked: function(event) {
		this._calendar.nextMonth();
		this.displayMonthYear();
	}
	,_onDateChanged: function(event) {
		this.dispatchEvent(new flash.events.Event(flash.events.Event.CHANGE));
	}
	,displayMonthYear: function() {
		var monthName = haxe.ui.toolkit.containers.CalendarView.MONTH_NAMES[this._calendar.get_date().getMonth()];
		this._currentMonthYear.set_text(monthName + " " + this._calendar.get_date().getFullYear());
	}
	,clone: function() {
		var c = haxe.ui.toolkit.containers.VBox.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.CalendarView();
	}
	,__class__: haxe.ui.toolkit.containers.CalendarView
	,__properties__: $extend(haxe.ui.toolkit.containers.VBox.prototype.__properties__,{set_selectedDate:"set_selectedDate",get_selectedDate:"get_selectedDate",set_date:"set_date",get_date:"get_date"})
});
haxe.ui.toolkit.containers.ContinuousBox = function() {
	haxe.ui.toolkit.containers.Container.call(this);
	this.set_autoSize(true);
	this._layout = new haxe.ui.toolkit.layout.HorizontalContinuousLayout();
};
$hxClasses["haxe.ui.toolkit.containers.ContinuousBox"] = haxe.ui.toolkit.containers.ContinuousBox;
haxe.ui.toolkit.containers.ContinuousBox.__name__ = ["haxe","ui","toolkit","containers","ContinuousBox"];
haxe.ui.toolkit.containers.ContinuousBox.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.containers.ContinuousBox.__super__ = haxe.ui.toolkit.containers.Container;
haxe.ui.toolkit.containers.ContinuousBox.prototype = $extend(haxe.ui.toolkit.containers.Container.prototype,{
	clone: function() {
		var c = haxe.ui.toolkit.containers.Container.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.ContinuousBox();
	}
	,__class__: haxe.ui.toolkit.containers.ContinuousBox
});
haxe.ui.toolkit.containers.ExpandablePanel = function() {
	this.startExpanded = true;
	haxe.ui.toolkit.containers.VBox.call(this);
};
$hxClasses["haxe.ui.toolkit.containers.ExpandablePanel"] = haxe.ui.toolkit.containers.ExpandablePanel;
haxe.ui.toolkit.containers.ExpandablePanel.__name__ = ["haxe","ui","toolkit","containers","ExpandablePanel"];
haxe.ui.toolkit.containers.ExpandablePanel.__super__ = haxe.ui.toolkit.containers.VBox;
haxe.ui.toolkit.containers.ExpandablePanel.prototype = $extend(haxe.ui.toolkit.containers.VBox.prototype,{
	initialize: function() {
		haxe.ui.toolkit.containers.VBox.prototype.initialize.call(this);
	}
	,addChild: function(child) {
		if(this._button == null) {
			this._button = new haxe.ui.toolkit.containers.ExpandableButton();
			this._button.set_percentWidth(100);
			this._button.set_text(this.get_text());
			this._button.set_toggle(true);
			this._button.set_selected(this.startExpanded?true:false);
			this._button.addEventListener("haxeui_" + "change",$bind(this,this.onClickButton));
			this._button.set_styleName("expandable");
			haxe.ui.toolkit.containers.VBox.prototype.addChild.call(this,this._button);
		}
		if(this._panel == null) {
			this._panel = new haxe.ui.toolkit.containers.VBox();
			this._panel.set_id("content");
			this._panel.set_percentWidth(100);
			haxe.ui.toolkit.containers.VBox.prototype.addChild.call(this,this._panel);
			this._panel.addEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.panelAdded));
		}
		return this._panel.addChild(child);
	}
	,onClickButton: function(e) {
		if(this._button.get_selected()) this.showPanel(); else this.hidePanel();
	}
	,panelAdded: function(e) {
		this.removeEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.panelAdded));
		if(!this.startExpanded) this._panel.set_visible(false);
	}
	,showPanel: function() {
		var _g = this;
		var transition = haxe.ui.toolkit.core.Toolkit.getTransitionForClass(haxe.ui.toolkit.containers.ExpandablePanel);
		if(transition == "slide") {
			var startH = this._panel.get_height();
			this._panel.invalidate(256);
			var finalH = this._panel.get_height();
			this._panel.set_visible(true);
			this._panel._height = startH;
			this._panel.set_clipHeight(startH);
			motion.Actuate.tween(this._panel,.2,{ _height : finalH, clipHeight : finalH},true).ease(motion.easing.Linear.get_easeNone()).onUpdate(function() {
				_g.invalidate(256);
			});
		} else this._panel.set_visible(true);
	}
	,hidePanel: function() {
		var _g = this;
		var transition = haxe.ui.toolkit.core.Toolkit.getTransitionForClass(haxe.ui.toolkit.containers.ExpandablePanel);
		if(transition == "slide") motion.Actuate.tween(this._panel,.2,{ _height : 0, clipHeight : 0},true).ease(motion.easing.Linear.get_easeNone()).onUpdate(function() {
			_g.invalidate(256);
		}).onComplete(function() {
			_g._panel.set_visible(false);
		}); else this._panel.set_visible(false);
	}
	,clone: function() {
		var c = haxe.ui.toolkit.containers.VBox.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.ExpandablePanel();
	}
	,__class__: haxe.ui.toolkit.containers.ExpandablePanel
});
haxe.ui.toolkit.containers.ExpandableButton = function() {
	haxe.ui.toolkit.controls.Button.call(this);
};
$hxClasses["haxe.ui.toolkit.containers.ExpandableButton"] = haxe.ui.toolkit.containers.ExpandableButton;
haxe.ui.toolkit.containers.ExpandableButton.__name__ = ["haxe","ui","toolkit","containers","ExpandableButton"];
haxe.ui.toolkit.containers.ExpandableButton.__super__ = haxe.ui.toolkit.controls.Button;
haxe.ui.toolkit.containers.ExpandableButton.prototype = $extend(haxe.ui.toolkit.controls.Button.prototype,{
	clone: function() {
		var c = haxe.ui.toolkit.controls.Button.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.ExpandableButton();
	}
	,__class__: haxe.ui.toolkit.containers.ExpandableButton
});
haxe.ui.toolkit.containers.Frame = function() {
	haxe.ui.toolkit.core.Component.call(this);
	this.set_autoSize(true);
	this._layout = new haxe.ui.toolkit.containers.FrameLayout();
	this._content = new haxe.ui.toolkit.containers.Box();
	this._content.set_layout(new haxe.ui.toolkit.layout.VerticalLayout());
	this._content.set_id(this.get_id() + "_content");
	this._content.set_percentWidth(this._content.set_percentHeight(100));
	this.addChild(this._content);
	this._title = new haxe.ui.toolkit.controls.Text();
	this._title.set_text(this.get_text());
	this._title.set_id(this.get_id() + "_title");
	this._title.set_styleName("frame");
	this._title.get_style().set_backgroundColor(16777215);
	this.addChild(this._title);
};
$hxClasses["haxe.ui.toolkit.containers.Frame"] = haxe.ui.toolkit.containers.Frame;
haxe.ui.toolkit.containers.Frame.__name__ = ["haxe","ui","toolkit","containers","Frame"];
haxe.ui.toolkit.containers.Frame.__super__ = haxe.ui.toolkit.core.Component;
haxe.ui.toolkit.containers.Frame.prototype = $extend(haxe.ui.toolkit.core.Component.prototype,{
	addChild: function(child) {
		var r = null;
		if(child.get_id() == this.get_id() + "_content" || child.get_id() == this.get_id() + "_title") r = haxe.ui.toolkit.core.Component.prototype.addChild.call(this,child); else r = this._content.addChild(child);
		return r;
	}
	,set_layout: function(value) {
		this._content.set_layout(value);
		return value;
	}
	,set_text: function(value) {
		haxe.ui.toolkit.core.Component.prototype.set_text.call(this,value);
		this._title.set_text(value);
		return value;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.Component.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.Frame();
	}
	,__class__: haxe.ui.toolkit.containers.Frame
});
haxe.ui.toolkit.core.interfaces.ILayout = function() { };
$hxClasses["haxe.ui.toolkit.core.interfaces.ILayout"] = haxe.ui.toolkit.core.interfaces.ILayout;
haxe.ui.toolkit.core.interfaces.ILayout.__name__ = ["haxe","ui","toolkit","core","interfaces","ILayout"];
haxe.ui.toolkit.core.interfaces.ILayout.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.core.interfaces.ILayout.prototype = {
	__class__: haxe.ui.toolkit.core.interfaces.ILayout
};
haxe.ui.toolkit.layout = {};
haxe.ui.toolkit.layout.Layout = function() {
	this._spacingY = 0;
	this._spacingX = 0;
	this._padding = new flash.geom.Rectangle();
};
$hxClasses["haxe.ui.toolkit.layout.Layout"] = haxe.ui.toolkit.layout.Layout;
haxe.ui.toolkit.layout.Layout.__name__ = ["haxe","ui","toolkit","layout","Layout"];
haxe.ui.toolkit.layout.Layout.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable,haxe.ui.toolkit.core.interfaces.ILayout];
haxe.ui.toolkit.layout.Layout.prototype = {
	get_container: function() {
		return this._container;
	}
	,set_container: function(value) {
		this._container = value;
		this.refresh();
		return value;
	}
	,get_padding: function() {
		return this._padding;
	}
	,set_padding: function(value) {
		this._padding = value;
		this.refresh();
		return value;
	}
	,get_spacingX: function() {
		return this._spacingX;
	}
	,set_spacingX: function(value) {
		this._spacingX = value;
		this.refresh();
		return value;
	}
	,get_spacingY: function() {
		return this._spacingY;
	}
	,set_spacingY: function(value) {
		this._spacingY = value;
		this.refresh();
		return value;
	}
	,refresh: function() {
		if(this.get_container() != null && this.get_container().get_ready()) {
			this.resizeChildren();
			this.repositionChildren();
		}
	}
	,resizeChildren: function() {
	}
	,repositionChildren: function() {
	}
	,get_innerWidth: function() {
		if(this.get_container() == null) return 0;
		var icx = this.get_container().get_width() - (this.get_padding().get_left() + this.get_padding().get_right());
		return icx;
	}
	,get_innerHeight: function() {
		if(this.get_container() == null) return 0;
		var icy = this.get_container().get_height() - (this.get_padding().get_top() + this.get_padding().get_bottom());
		return icy;
	}
	,get_usableWidth: function() {
		var ucx = this.get_innerWidth();
		return ucx;
	}
	,get_usableHeight: function() {
		var ucy = this.get_innerHeight();
		return ucy;
	}
	,clone: function() {
		var c = this.self();
		c.set_padding(this.get_padding());
		c.set_spacingX(this.get_spacingX());
		c.set_spacingY(this.get_spacingY());
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.layout.Layout();
	}
	,__class__: haxe.ui.toolkit.layout.Layout
	,__properties__: {get_usableHeight:"get_usableHeight",get_usableWidth:"get_usableWidth",get_innerHeight:"get_innerHeight",get_innerWidth:"get_innerWidth",set_spacingY:"set_spacingY",get_spacingY:"get_spacingY",set_spacingX:"set_spacingX",get_spacingX:"get_spacingX",set_padding:"set_padding",get_padding:"get_padding",set_container:"set_container",get_container:"get_container"}
};
haxe.ui.toolkit.layout.DefaultLayout = function() {
	haxe.ui.toolkit.layout.Layout.call(this);
};
$hxClasses["haxe.ui.toolkit.layout.DefaultLayout"] = haxe.ui.toolkit.layout.DefaultLayout;
haxe.ui.toolkit.layout.DefaultLayout.__name__ = ["haxe","ui","toolkit","layout","DefaultLayout"];
haxe.ui.toolkit.layout.DefaultLayout.__super__ = haxe.ui.toolkit.layout.Layout;
haxe.ui.toolkit.layout.DefaultLayout.prototype = $extend(haxe.ui.toolkit.layout.Layout.prototype,{
	resizeChildren: function() {
		haxe.ui.toolkit.layout.Layout.prototype.resizeChildren.call(this);
		var ucx = this.get_usableWidth();
		var ucy = this.get_usableHeight();
		var totalWidth = 0;
		var totalHeight = 0;
		var _g = 0;
		var _g1 = this.get_container().get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_visible() == false) continue;
			if(child.get_percentWidth() > -1) child.set_width(ucx * child.get_percentWidth() / 100);
			if(child.get_percentHeight() > -1) child.set_height(ucy * child.get_percentHeight() / 100);
			if(child.get_width() > totalWidth) totalWidth = child.get_width();
			if(child.get_height() > totalHeight) totalHeight = child.get_height();
		}
		if(this.get_container().get_autoSize()) {
			if(totalWidth > 0 && totalWidth != this.get_innerWidth() && this.get_container().get_percentWidth() == -1) this.get_container().set_width(totalWidth + (this.get_padding().get_left() + this.get_padding().get_right()));
			if(totalHeight > 0 && totalHeight != this.get_innerHeight() && this.get_container().get_percentHeight() == -1) this.get_container().set_height(totalHeight + (this.get_padding().get_top() + this.get_padding().get_bottom()));
		}
	}
	,repositionChildren: function() {
		haxe.ui.toolkit.layout.Layout.prototype.repositionChildren.call(this);
		var xpos = this.get_padding().get_left();
		var ypos = this.get_padding().get_top();
		var _g = 0;
		var _g1 = this.get_container().get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_visible() == false) continue;
			child.set_x(xpos);
			child.set_y(ypos);
		}
	}
	,clone: function() {
		var c = haxe.ui.toolkit.layout.Layout.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.layout.DefaultLayout();
	}
	,__class__: haxe.ui.toolkit.layout.DefaultLayout
});
haxe.ui.toolkit.containers.FrameLayout = function() {
	haxe.ui.toolkit.layout.DefaultLayout.call(this);
};
$hxClasses["haxe.ui.toolkit.containers.FrameLayout"] = haxe.ui.toolkit.containers.FrameLayout;
haxe.ui.toolkit.containers.FrameLayout.__name__ = ["haxe","ui","toolkit","containers","FrameLayout"];
haxe.ui.toolkit.containers.FrameLayout.__super__ = haxe.ui.toolkit.layout.DefaultLayout;
haxe.ui.toolkit.containers.FrameLayout.prototype = $extend(haxe.ui.toolkit.layout.DefaultLayout.prototype,{
	repositionChildren: function() {
		haxe.ui.toolkit.layout.DefaultLayout.prototype.repositionChildren.call(this);
		var title = this.get_container().findChildAs(haxe.ui.toolkit.controls.Text);
		if(title != null) {
			title.set_x(10);
			title.set_y(-(title.get_height() / 2));
		}
	}
	,clone: function() {
		var c = haxe.ui.toolkit.layout.DefaultLayout.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.FrameLayout();
	}
	,__class__: haxe.ui.toolkit.containers.FrameLayout
});
haxe.ui.toolkit.containers.Grid = function() {
	haxe.ui.toolkit.containers.Container.call(this);
	this.set_autoSize(true);
	this.set_layout(new haxe.ui.toolkit.layout.GridLayout());
};
$hxClasses["haxe.ui.toolkit.containers.Grid"] = haxe.ui.toolkit.containers.Grid;
haxe.ui.toolkit.containers.Grid.__name__ = ["haxe","ui","toolkit","containers","Grid"];
haxe.ui.toolkit.containers.Grid.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.containers.Grid.__super__ = haxe.ui.toolkit.containers.Container;
haxe.ui.toolkit.containers.Grid.prototype = $extend(haxe.ui.toolkit.containers.Container.prototype,{
	get_columns: function() {
		return (js.Boot.__cast(this._layout , haxe.ui.toolkit.layout.GridLayout)).get_columns();
	}
	,set_columns: function(value) {
		(js.Boot.__cast(this._layout , haxe.ui.toolkit.layout.GridLayout)).set_columns(value);
		return value;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.containers.Container.prototype.clone.call(this);
		c.set_columns(this.get_columns());
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.Grid();
	}
	,__class__: haxe.ui.toolkit.containers.Grid
	,__properties__: $extend(haxe.ui.toolkit.containers.Container.prototype.__properties__,{set_columns:"set_columns",get_columns:"get_columns"})
});
haxe.ui.toolkit.containers.HBox = function() {
	haxe.ui.toolkit.containers.Container.call(this);
	this.set_autoSize(true);
	this.set_layout(new haxe.ui.toolkit.layout.HorizontalLayout());
};
$hxClasses["haxe.ui.toolkit.containers.HBox"] = haxe.ui.toolkit.containers.HBox;
haxe.ui.toolkit.containers.HBox.__name__ = ["haxe","ui","toolkit","containers","HBox"];
haxe.ui.toolkit.containers.HBox.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.containers.HBox.__super__ = haxe.ui.toolkit.containers.Container;
haxe.ui.toolkit.containers.HBox.prototype = $extend(haxe.ui.toolkit.containers.Container.prototype,{
	clone: function() {
		var c = haxe.ui.toolkit.containers.Container.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.HBox();
	}
	,__class__: haxe.ui.toolkit.containers.HBox
});
haxe.ui.toolkit.containers.ScrollView = function() {
	this._virtualScrolling = false;
	this._autoHideScrolls = false;
	this._scrollSensitivity = 1;
	this._showVScroll = true;
	this._showHScroll = true;
	haxe.ui.toolkit.core.StateComponent.call(this);
	this.addStates(["normal","disabled"]);
	this._layout = new haxe.ui.toolkit.containers.ScrollViewLayout();
	this._eventTarget = new flash.display.Sprite();
	this._eventTarget.set_visible(false);
	this._container = new haxe.ui.toolkit.containers.Box();
	this._container.set_id("container");
	this._container.set_percentWidth(this._container.set_percentHeight(100));
	this.addChild(this._container);
};
$hxClasses["haxe.ui.toolkit.containers.ScrollView"] = haxe.ui.toolkit.containers.ScrollView;
haxe.ui.toolkit.containers.ScrollView.__name__ = ["haxe","ui","toolkit","containers","ScrollView"];
haxe.ui.toolkit.containers.ScrollView.__super__ = haxe.ui.toolkit.core.StateComponent;
haxe.ui.toolkit.containers.ScrollView.prototype = $extend(haxe.ui.toolkit.core.StateComponent.prototype,{
	preInitialize: function() {
		haxe.ui.toolkit.core.StateComponent.prototype.preInitialize.call(this);
		if(this._style != null) {
			this._autoHideScrolls = this._style.get_autoHideScrolls();
			if(Reflect.getProperty(this._layout,"inlineScrolls") != null) Reflect.setProperty(this._layout,"inlineScrolls",this._style.get_inlineScrolls());
		}
	}
	,initialize: function() {
		haxe.ui.toolkit.core.StateComponent.prototype.initialize.call(this);
		this.addEventListener(flash.events.MouseEvent.MOUSE_WHEEL,$bind(this,this._onMouseWheel));
		this.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onMouseDown));
		this.get_sprite().addChild(this._eventTarget);
	}
	,postInitialize: function() {
		var _g = this;
		haxe.ui.toolkit.core.StateComponent.prototype.postInitialize.call(this);
		var content = this._container.getChildAt(0);
		if(content != null) (js.Boot.__cast(content , haxe.ui.toolkit.core.interfaces.IEventDispatcher)).addEventListener("haxeui_" + "resize",function(e) {
			_g.invalidate(256);
		});
	}
	,addChild: function(child) {
		var r = null;
		if(child == this._container || child == this._hscroll || child == this._vscroll) r = haxe.ui.toolkit.core.StateComponent.prototype.addChild.call(this,child); else r = this._container.addChild(child);
		return r;
	}
	,addChildAt: function(child,index) {
		var r = null;
		if(child == this._container || child == this._hscroll || child == this._vscroll) r = haxe.ui.toolkit.core.StateComponent.prototype.addChildAt.call(this,child,index); else r = this._container.addChildAt(child,index);
		return r;
	}
	,removeChild: function(child,dispose) {
		if(dispose == null) dispose = true;
		var r = null;
		if(child == this._container || child == this._hscroll || child == this._vscroll) r = haxe.ui.toolkit.core.StateComponent.prototype.removeChild.call(this,child,dispose); else r = this._container.removeChild(child,dispose);
		return r;
	}
	,dispose: function() {
		this.get_sprite().removeChild(this._eventTarget);
		haxe.ui.toolkit.core.StateComponent.prototype.dispose.call(this);
	}
	,get_virtualScrolling: function() {
		return this._virtualScrolling;
	}
	,set_virtualScrolling: function(value) {
		this._virtualScrolling = value;
		return value;
	}
	,get_showHScroll: function() {
		return this._showHScroll;
	}
	,set_showHScroll: function(value) {
		this._showHScroll = value;
		return value;
	}
	,get_showVScroll: function() {
		return this._showVScroll;
	}
	,set_showVScroll: function(value) {
		this._showVScroll = value;
		return value;
	}
	,get_hscrollPos: function() {
		if(this._hscroll != null) return this._hscroll.get_pos();
		return 0;
	}
	,set_hscrollPos: function(value) {
		if(this._hscroll != null) this._hscroll.set_pos(value);
		return value;
	}
	,get_hscrollMin: function() {
		if(this._hscroll != null) return this._hscroll.get_min();
		return 0;
	}
	,set_hscrollMin: function(value) {
		if(this._virtualScrolling == true) {
		}
		return value;
	}
	,get_hscrollMax: function() {
		if(this._hscroll != null) return this._hscroll.get_max();
		return 0;
	}
	,set_hscrollMax: function(value) {
		if(this._virtualScrolling == true) {
			this.createHScroll(true);
			this._hscroll.set_max(value);
		}
		return value;
	}
	,get_hscrollPageSize: function() {
		if(this._hscroll != null) return this._hscroll.get_pageSize();
		return 0;
	}
	,set_hscrollPageSize: function(value) {
		if(this._virtualScrolling == true) {
		}
		return value;
	}
	,get_vscrollPos: function() {
		if(this._vscroll != null) return this._vscroll.get_pos();
		return 0;
	}
	,set_vscrollPos: function(value) {
		if(this._vscroll != null) this._vscroll.set_pos(value);
		return value;
	}
	,get_vscrollMin: function() {
		if(this._vscroll != null) return this._vscroll.get_min();
		return 0;
	}
	,set_vscrollMin: function(value) {
		if(this._virtualScrolling == true) {
		}
		return value;
	}
	,get_vscrollMax: function() {
		if(this._vscroll != null) return this._vscroll.get_max();
		return 0;
	}
	,set_vscrollMax: function(value) {
		if(this._virtualScrolling == true) {
			this.createVScroll(true);
			this._vscroll.set_max(value);
		}
		return value;
	}
	,get_vscrollPageSize: function() {
		if(this._vscroll != null) return this._vscroll.get_pageSize();
		return 0;
	}
	,set_vscrollPageSize: function(value) {
		if(this._virtualScrolling == true) {
		}
		return value;
	}
	,invalidate: function(type,recursive) {
		if(recursive == null) recursive = false;
		if(type == null) type = 1118481;
		if(!this._ready || this._invalidating) return;
		haxe.ui.toolkit.core.StateComponent.prototype.invalidate.call(this,type,recursive);
		this._invalidating = true;
		if((type & 256) == 256) {
			this.checkScrolls();
			this.updateScrollRect();
			this.resizeEventTarget();
		}
		this._invalidating = false;
	}
	,_onHScrollChange: function(event) {
		this.updateScrollRect();
		var event1 = new haxe.ui.toolkit.events.UIEvent("haxeui_" + "scroll");
		this.dispatchEvent(event1);
	}
	,_onVScrollChange: function(event) {
		this.updateScrollRect();
		var event1 = new haxe.ui.toolkit.events.UIEvent("haxeui_" + "scroll");
		this.dispatchEvent(event1);
	}
	,_onMouseWheel: function(event) {
		var content = this._container.getChildAt(0);
		if(event.shiftKey || content.get_height() < this.get_layout().get_usableHeight()) {
			if(this._hscroll != null && content.get_width() > this.get_layout().get_usableWidth()) {
				if(event.delta != 0) {
					if(event.delta < 0) this._hscroll.incrementValue(); else if(event.delta > 0) this._hscroll.deincrementValue();
				}
			}
		} else if(this._vscroll != null && content.get_height() > this.get_layout().get_usableHeight()) {
			if(event.delta != 0) {
				if(event.delta < 0) this._vscroll.incrementValue(); else if(event.delta > 0) this._vscroll.deincrementValue();
			}
		}
	}
	,_onMouseDown: function(event) {
		var inScroll = false;
		if(this._vscroll != null && this._vscroll.get_visible() == true) inScroll = this._vscroll.hitTest(event.stageX,event.stageY);
		if(this._hscroll != null && this._hscroll.get_visible() == true && inScroll == false) inScroll = this._hscroll.hitTest(event.stageX,event.stageY);
		var content = this._container.getChildAt(0);
		if(content != null && inScroll == false && this._virtualScrolling == false) {
			if(content.get_width() > this.get_layout().get_usableWidth() || content.get_height() > this.get_layout().get_usableHeight()) {
				this._downPos = new flash.geom.Point(event.stageX,event.stageY);
				haxe.ui.toolkit.core.Screen.get_instance().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onScreenMouseUp));
				haxe.ui.toolkit.core.Screen.get_instance().addEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this._onScreenMouseMove));
			}
		}
		if(this._virtualScrolling == true && (this._vscroll != null || this._hscroll != null)) {
			this._downPos = new flash.geom.Point(event.stageX,event.stageY);
			haxe.ui.toolkit.core.Screen.get_instance().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onScreenMouseUp));
			haxe.ui.toolkit.core.Screen.get_instance().addEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this._onScreenMouseMove));
		}
	}
	,_onScreenMouseMove: function(event) {
		if(this._downPos != null) {
			var ypos = event.stageY - this._downPos.y;
			var xpos = event.stageX - this._downPos.x;
			var target = event.target;
			while(target != null && js.Boot.__instanceof(target,flash.display.DisplayObject)) {
				xpos /= target.get_scaleX();
				ypos /= target.get_scaleY();
				target = target.parent;
			}
			if(Math.abs(xpos) >= this._scrollSensitivity || Math.abs(ypos) >= this._scrollSensitivity) {
				this._eventTarget.set_visible(true);
				var content = this._container.getChildAt(0);
				if(content != null) {
					if(xpos != 0 && (content.get_width() > this.get_layout().get_usableWidth() || this._virtualScrolling == true)) {
						if(this._showHScroll == true && this._autoHideScrolls == true) this._hscroll.set_visible(true);
						if(this._hscroll != null) {
							var _g = this._hscroll;
							_g.set_pos(_g.get_pos() - xpos);
						}
					}
					if(ypos != 0 && (content.get_height() > this.get_layout().get_usableHeight() || this._virtualScrolling == true)) {
						if(this._showVScroll == true && this._autoHideScrolls == true) this._vscroll.set_visible(true);
						if(this._vscroll != null) {
							var _g1 = this._vscroll;
							_g1.set_pos(_g1.get_pos() - ypos);
						}
					}
					this._downPos = new flash.geom.Point(event.stageX,event.stageY);
				}
			}
		}
	}
	,_onScreenMouseUp: function(event) {
		this._eventTarget.set_visible(false);
		this._downPos = null;
		haxe.ui.toolkit.core.Screen.get_instance().removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onScreenMouseUp));
		haxe.ui.toolkit.core.Screen.get_instance().removeEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this._onScreenMouseMove));
		if(this._hscroll != null && this._showHScroll == true && this._autoHideScrolls == true) this._hscroll.set_visible(false);
		if(this._vscroll != null && this._showVScroll == true && this._autoHideScrolls == true) this._vscroll.set_visible(false);
	}
	,checkScrolls: function() {
		if(this._virtualScrolling == true) return;
		var content = this._container.getChildAt(0);
		if(content != null) {
			var invalidateLayout = false;
			var hpos = 0;
			if(this._hscroll != null) hpos = this._hscroll.get_pos();
			if(content.get_width() - hpos > this.get_layout().get_usableWidth()) {
				if(this.createHScroll() == true) {
					this._hscroll.set_visible(false);
					invalidateLayout = true;
				}
				this._hscroll.set_max(content.get_width() - this.get_layout().get_usableWidth());
				this._hscroll.set_pageSize(this.get_layout().get_usableWidth() / content.get_width() * this._hscroll.get_max());
				if(this._hscroll.get_visible() == false && this._showHScroll == true && this._autoHideScrolls == false) {
					this._hscroll.set_visible(true);
					invalidateLayout = true;
				}
			} else if(this._hscroll != null) {
				if(this._hscroll.get_pos() != 0) this._hscroll.set_pos(content.get_width() - this.get_layout().get_usableWidth());
				if(this._hscroll.get_pos() == 0) {
					if(this._hscroll.get_visible() == true) {
						this._hscroll.set_visible(false);
						invalidateLayout = true;
					}
				} else {
					this._hscroll.set_max(content.get_width() - this.get_layout().get_usableWidth());
					this._hscroll.set_pageSize(this.get_layout().get_usableWidth() / content.get_width() * this._hscroll.get_max());
				}
			}
			var vpos = 0;
			if(this._vscroll != null) vpos = this._vscroll.get_pos();
			if(content.get_height() - vpos > this.get_layout().get_usableHeight()) {
				if(this.createVScroll() == true) {
					this._vscroll.set_visible(false);
					invalidateLayout = true;
				}
				this._vscroll.set_max(content.get_height() - this.get_layout().get_usableHeight());
				this._vscroll.set_pageSize(this.get_layout().get_usableHeight() / content.get_height() * this._vscroll.get_max());
				if(this._vscroll.get_visible() == false && this._showVScroll == true && this._autoHideScrolls == false) {
					this._vscroll.set_visible(true);
					invalidateLayout = true;
				}
			} else if(this._vscroll != null) {
				if(this._vscroll.get_pos() != 0) this._vscroll.set_pos(content.get_height() - this.get_layout().get_usableHeight());
				if(this._vscroll.get_pos() == 0) {
					if(this._vscroll.get_visible() == true) {
						this._vscroll.set_visible(false);
						invalidateLayout = true;
					}
				} else {
					this._vscroll.set_max(content.get_height() - this.get_layout().get_usableHeight());
					this._vscroll.set_pageSize(this.get_layout().get_usableHeight() / content.get_height() * this._vscroll.get_max());
				}
			}
			if(invalidateLayout) {
				this._invalidating = false;
				this.invalidate(1);
			}
		}
	}
	,createHScroll: function(invalidateLayout) {
		if(invalidateLayout == null) invalidateLayout = false;
		var created = false;
		if(this._hscroll == null) {
			this._hscroll = new haxe.ui.toolkit.controls.HScroll();
			this._hscroll.set_percentWidth(100);
			this._hscroll.addEventListener(flash.events.Event.CHANGE,$bind(this,this._onHScrollChange));
			this._hscroll.set_visible(true);
			this.addChild(this._hscroll);
			created = true;
		}
		if(invalidateLayout) {
			this._invalidating = false;
			this.invalidate(1);
		}
		return created;
	}
	,createVScroll: function(invalidateLayout) {
		if(invalidateLayout == null) invalidateLayout = false;
		var created = false;
		if(this._vscroll == null) {
			this._vscroll = new haxe.ui.toolkit.controls.VScroll();
			this._vscroll.set_percentHeight(100);
			this._vscroll.addEventListener(flash.events.Event.CHANGE,$bind(this,this._onVScrollChange));
			this._vscroll.set_visible(true);
			this.addChild(this._vscroll);
		}
		if(invalidateLayout) {
			this._invalidating = false;
			this.invalidate(1);
		}
		return created;
	}
	,updateScrollRect: function() {
		if(this.get_numChildren() > 0 && this._virtualScrolling == false) {
			var content = this._container.getChildAt(0);
			if(content != null) {
				var xpos = 0;
				if(this._hscroll != null) xpos = this._hscroll.get_pos();
				var ypos = 0;
				if(this._vscroll != null) ypos = this._vscroll.get_pos();
				content.set_x(-xpos);
				content.set_y(-ypos);
				this._container.get_sprite().set_scrollRect(new flash.geom.Rectangle(0,0,this.get_layout().get_usableWidth(),this.get_layout().get_usableHeight()));
			}
		} else this._container.get_sprite().set_scrollRect(new flash.geom.Rectangle(0,0,this.get_layout().get_usableWidth(),this.get_layout().get_usableHeight()));
	}
	,resizeEventTarget: function() {
		var targetX = this.get_layout().get_padding().get_left();
		var targetY = this.get_layout().get_padding().get_top();
		var targetCX = this.get_width() - (this.get_layout().get_padding().get_left() + this.get_layout().get_padding().get_right());
		var targetCY = this.get_height() - (this.get_layout().get_padding().get_top() + this.get_layout().get_padding().get_bottom());
		if(this._vscroll != null && this._vscroll.get_visible() == true) targetCX -= this._vscroll.get_width();
		if(this._hscroll != null && this._hscroll.get_visible() == true) targetCY -= this._hscroll.get_height();
		this._eventTarget.set_alpha(0);
		this._eventTarget.get_graphics().clear();
		this._eventTarget.get_graphics().beginFill(16711935);
		this._eventTarget.get_graphics().lineStyle(0);
		this._eventTarget.get_graphics().drawRect(targetX,targetY,targetCX,targetCY);
		this._eventTarget.get_graphics().endFill();
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.StateComponent.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.ScrollView();
	}
	,__class__: haxe.ui.toolkit.containers.ScrollView
	,__properties__: $extend(haxe.ui.toolkit.core.StateComponent.prototype.__properties__,{set_vscrollPageSize:"set_vscrollPageSize",get_vscrollPageSize:"get_vscrollPageSize",set_vscrollMax:"set_vscrollMax",get_vscrollMax:"get_vscrollMax",set_vscrollMin:"set_vscrollMin",get_vscrollMin:"get_vscrollMin",set_vscrollPos:"set_vscrollPos",get_vscrollPos:"get_vscrollPos",set_hscrollPageSize:"set_hscrollPageSize",get_hscrollPageSize:"get_hscrollPageSize",set_hscrollMax:"set_hscrollMax",get_hscrollMax:"get_hscrollMax",set_hscrollMin:"set_hscrollMin",get_hscrollMin:"get_hscrollMin",set_hscrollPos:"set_hscrollPos",get_hscrollPos:"get_hscrollPos",set_showVScroll:"set_showVScroll",get_showVScroll:"get_showVScroll",set_showHScroll:"set_showHScroll",get_showHScroll:"get_showHScroll",set_virtualScrolling:"set_virtualScrolling",get_virtualScrolling:"get_virtualScrolling"})
});
haxe.ui.toolkit.core.interfaces.IDataComponent = function() { };
$hxClasses["haxe.ui.toolkit.core.interfaces.IDataComponent"] = haxe.ui.toolkit.core.interfaces.IDataComponent;
haxe.ui.toolkit.core.interfaces.IDataComponent.__name__ = ["haxe","ui","toolkit","core","interfaces","IDataComponent"];
haxe.ui.toolkit.core.interfaces.IDataComponent.prototype = {
	__class__: haxe.ui.toolkit.core.interfaces.IDataComponent
};
haxe.ui.toolkit.containers.ListView = function() {
	this._lastSelection = -1;
	haxe.ui.toolkit.containers.ScrollView.call(this);
	this.set_autoSize(false);
	this.set_dataSource(new haxe.ui.toolkit.data.ArrayDataSource());
	this._selectedItems = new Array();
	this._content = new haxe.ui.toolkit.containers.VBox();
	this._content.set_id("content");
	this._content.set_percentWidth(100);
	this.addChild(this._content);
	this._itemRenderer = haxe.ui.toolkit.core.renderers.BasicItemRenderer;
};
$hxClasses["haxe.ui.toolkit.containers.ListView"] = haxe.ui.toolkit.containers.ListView;
haxe.ui.toolkit.containers.ListView.__name__ = ["haxe","ui","toolkit","containers","ListView"];
haxe.ui.toolkit.containers.ListView.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IDataComponent];
haxe.ui.toolkit.containers.ListView.__super__ = haxe.ui.toolkit.containers.ScrollView;
haxe.ui.toolkit.containers.ListView.prototype = $extend(haxe.ui.toolkit.containers.ScrollView.prototype,{
	initialize: function() {
		haxe.ui.toolkit.containers.ScrollView.prototype.initialize.call(this);
		if(this._dataSource == null) this.set_dataSource(new haxe.ui.toolkit.data.ArrayDataSource());
		this._dataSource.open();
		this.syncUI();
		this.checkScrolls();
	}
	,dispose: function() {
		if(this._dataSource != null) this._dataSource.close();
		haxe.ui.toolkit.containers.ScrollView.prototype.dispose.call(this);
	}
	,addChild: function(child) {
		if(js.Boot.__instanceof(child,haxe.ui.toolkit.core.interfaces.IItemRenderer)) {
			this._itemRenderer = child;
			return child;
		}
		return haxe.ui.toolkit.containers.ScrollView.prototype.addChild.call(this,child);
	}
	,addChildAt: function(child,index) {
		return haxe.ui.toolkit.containers.ScrollView.prototype.addChildAt.call(this,child,index);
	}
	,get_listSize: function() {
		return this._content.get_children().length;
	}
	,get_itemHeight: function() {
		if(this._content.get_children().length == 0) return 0;
		var n = 0;
		var cy = this._content.get_layout().get_padding().get_top() + this._content.get_layout().get_padding().get_bottom();
		var scy = this._content.get_layout().get_spacingY();
		var _g = 0;
		var _g1 = this._content.get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			cy += child.get_height() + scy;
			n++;
			if(n > 100) break;
		}
		if(n > 0) cy -= scy;
		return cy / n;
	}
	,getItem: function(index) {
		return js.Boot.__cast(this._content.get_children()[index] , haxe.ui.toolkit.core.interfaces.IItemRenderer);
	}
	,get_selectedItems: function() {
		return this._selectedItems;
	}
	,get_selectedIndex: function() {
		var index = -1;
		if(this._selectedItems != null && this._selectedItems.length > 0) index = Lambda.indexOf(this._content.get_children(),this._selectedItems[0]);
		return index;
	}
	,set_selectedIndex: function(value) {
		if(this._ready == false) return value;
		if(value < 0) {
			var _g = 0;
			var _g1 = this._selectedItems;
			while(_g < _g1.length) {
				var selectedItem = _g1[_g];
				++_g;
				selectedItem.set_state("normal");
			}
			this._selectedItems = new Array();
		} else if(this._content.getChildAt(value) != null) {
			var item;
			item = js.Boot.__cast(this._content.getChildAt(value) , haxe.ui.toolkit.core.interfaces.IItemRenderer);
			if(item != null) this.handleListSelection(item,null);
		}
		return value;
	}
	,get_content: function() {
		var c = null;
		if(this.get_numChildren() > 0) c = js.Boot.__cast(this.getChildAt(0) , haxe.ui.toolkit.core.Component);
		return c;
	}
	,get_itemRenderer: function() {
		return this._itemRenderer;
	}
	,set_itemRenderer: function(value) {
		this._itemRenderer = value;
		return value;
	}
	,get_dataSource: function() {
		return this._dataSource;
	}
	,set_dataSource: function(value) {
		if(this._dataSource != null) {
			if(js.Boot.__instanceof(this._dataSource,haxe.ui.toolkit.core.interfaces.IEventDispatcher)) (js.Boot.__cast(this._dataSource , haxe.ui.toolkit.core.interfaces.IEventDispatcher)).removeEventListener(flash.events.Event.CHANGE,$bind(this,this._onDataSourceChanged));
		}
		this._dataSource = value;
		if(js.Boot.__instanceof(this._dataSource,haxe.ui.toolkit.core.interfaces.IEventDispatcher)) (js.Boot.__cast(this._dataSource , haxe.ui.toolkit.core.interfaces.IEventDispatcher)).addEventListener(flash.events.Event.CHANGE,$bind(this,this._onDataSourceChanged));
		if(this._ready == true) this.syncUI();
		this._lastSelection = -1;
		return value;
	}
	,_onDataSourceChanged: function(event) {
		this.syncUI();
	}
	,syncUI: function() {
		var pos = 0;
		if(this._dataSource != null) {
			if(this.get_dataSource().moveFirst()) do {
				var dataHash = this.get_dataSource().hash();
				var data = this.get_dataSource().get();
				var item = null;
				if(this._content.getChildAt(pos) != null) item = js.Boot.__cast(this._content.getChildAt(pos) , haxe.ui.toolkit.core.interfaces.IItemRenderer);
				if(item == null) {
					this.addListViewItem(dataHash,data,pos);
					pos++;
				} else if(item.hash == dataHash) pos++; else {
					while(item != null && item.hash != dataHash) {
						this.removeListViewItem(pos);
						item = js.Boot.__cast(this._content.getChildAt(pos) , haxe.ui.toolkit.core.interfaces.IItemRenderer);
					}
					pos++;
				}
			} while(this.get_dataSource().moveNext());
		}
		var _g1 = pos;
		var _g = this._content.get_children().length;
		while(_g1 < _g) {
			var n = _g1++;
			this.removeListViewItem(n);
		}
		var n1 = 0;
		var _g2 = 0;
		var _g11 = this._content.get_children();
		while(_g2 < _g11.length) {
			var child = _g11[_g2];
			++_g2;
			var item1;
			item1 = js.Boot.__cast(child , haxe.ui.toolkit.core.interfaces.IItemRenderer);
			if(js.Boot.__instanceof(item1,haxe.ui.toolkit.core.StyleableDisplayObject)) {
				var styleName;
				if(n1 % 2 == 0) styleName = "even"; else styleName = "odd";
				(js.Boot.__cast(item1 , haxe.ui.toolkit.core.StyleableDisplayObject)).set_styleName(styleName);
			}
			n1++;
		}
	}
	,addListViewItem: function(dataHash,data,index) {
		if(index == null) index = -1;
		if(data == null) return;
		var item = this.createRendererInstance();
		item.set_autoSize(true);
		item.hash = dataHash;
		item.set_percentWidth(100);
		item.set_data(data);
		if(js.Boot.__instanceof(item,haxe.ui.toolkit.core.StyleableDisplayObject)) {
			var styleName;
			if(this._content.get_numChildren() % 2 == 0) styleName = "even"; else styleName = "odd";
			(js.Boot.__cast(item , haxe.ui.toolkit.core.StyleableDisplayObject)).set_styleName(styleName);
		}
		if(index == -1) this._content.addChild(item); else this._content.addChildAt(item,index);
		this.invalidate(256);
		(js.Boot.__cast(item , haxe.ui.toolkit.core.interfaces.IDisplayObject)).addEventListener("haxeui_" + "mouseOver",$bind(this,this._onListItemMouseOver));
		(js.Boot.__cast(item , haxe.ui.toolkit.core.interfaces.IDisplayObject)).addEventListener("haxeui_" + "mouseOut",$bind(this,this._onListItemMouseOut));
		(js.Boot.__cast(item , haxe.ui.toolkit.core.interfaces.IDisplayObject)).addEventListener("haxeui_" + "click",$bind(this,this._onListItemClick));
	}
	,removeListViewItem: function(index) {
		var item;
		item = js.Boot.__cast(this._content.getChildAt(index) , haxe.ui.toolkit.core.interfaces.IItemRenderer);
		var sIndex = Lambda.indexOf(this._selectedItems,item);
		if(sIndex != -1) HxOverrides.remove(this._selectedItems,item);
		if(item != null) {
			this._content.removeChild(item);
			this.invalidate(256);
		}
	}
	,_onListItemMouseOver: function(event) {
		if(Std["is"](event.get_component(),haxe.ui.toolkit.core.interfaces.IStateComponent)) (js.Boot.__cast(event.get_component() , haxe.ui.toolkit.core.interfaces.IStateComponent)).set_state("over");
	}
	,_onListItemMouseOut: function(event) {
		if(Std["is"](event.get_component(),haxe.ui.toolkit.core.interfaces.IStateComponent)) {
			var item = event.get_component();
			if(this.isSelected(item)) (js.Boot.__cast(item , haxe.ui.toolkit.core.interfaces.IStateComponent)).set_state("selected"); else (js.Boot.__cast(item , haxe.ui.toolkit.core.interfaces.IStateComponent)).set_state("normal");
		}
	}
	,_onListItemClick: function(event) {
		if(Std["is"](event.get_component(),haxe.ui.toolkit.core.interfaces.IItemRenderer)) {
			var item = event.get_component();
			if(item.allowSelection(event.stageX,event.stageY)) {
				this.handleListSelection(item,event);
				this.handleClick(item);
			}
		}
	}
	,handleListSelection: function(item,event,raiseEvent) {
		if(raiseEvent == null) raiseEvent = true;
		var shiftPressed = false;
		var ctrlPressed = false;
		if(event != null && js.Boot.__instanceof(event,flash.events.MouseEvent)) {
			var mouseEvent;
			mouseEvent = js.Boot.__cast(event , flash.events.MouseEvent);
			shiftPressed = mouseEvent.shiftKey;
			ctrlPressed = mouseEvent.ctrlKey;
		}
		if(ctrlPressed == true) {
		} else if(shiftPressed == true) {
		} else {
			var _g = 0;
			var _g1 = this._selectedItems;
			while(_g < _g1.length) {
				var selectedItem = _g1[_g];
				++_g;
				if(selectedItem != item) selectedItem.set_state("normal");
			}
			this._selectedItems = new Array();
		}
		if(this.isSelected(item)) {
			HxOverrides.remove(this._selectedItems,item);
			item.set_state("over");
		} else {
			this._selectedItems.push(item);
			item.set_state("selected");
		}
		this.ensureVisible(item);
		if(raiseEvent == true) {
			var event1 = new haxe.ui.toolkit.events.UIEvent("haxeui_" + "change");
			this.dispatchEvent(event1);
		}
	}
	,handleClick: function(item) {
		var index = Lambda.indexOf(this._content.get_children(),item);
		if(this._lastSelection == index) {
			var event = new haxe.ui.toolkit.events.UIEvent("haxeui_" + "doubleClick");
			this.dispatchEvent(event);
			this._lastSelection = -1;
		} else this._lastSelection = index;
	}
	,isSelected: function(item) {
		return Lambda.indexOf(this._selectedItems,item) != -1;
	}
	,getItemIndex: function(item) {
		var index = -1;
		if(item != null) index = Lambda.indexOf(this._content.get_children(),item);
		return index;
	}
	,setSelectedIndexNoEvent: function(value) {
		if(this._ready == false) return value;
		if(this._content.getChildAt(value) != null) {
			var item;
			item = js.Boot.__cast(this._content.getChildAt(value) , haxe.ui.toolkit.core.interfaces.IItemRenderer);
			if(item != null) this.handleListSelection(item,null,false);
		}
		return value;
	}
	,ensureVisible: function(item) {
		if(item == null) return;
		var vpos = 0;
		if(this._vscroll != null) vpos = this._vscroll.get_pos();
		if(item.get_y() + item.get_height() > vpos + this._content.get_clipHeight()) this._vscroll.set_pos(item.get_y() + item.get_height() - this._content.get_clipHeight()); else if(item.get_y() < vpos) this._vscroll.set_pos(item.get_y());
	}
	,createRendererInstance: function() {
		var r = null;
		if(this._itemRenderer == null) return null;
		if(js.Boot.__instanceof(this._itemRenderer,haxe.ui.toolkit.core.interfaces.IItemRenderer)) r = (js.Boot.__cast(this._itemRenderer , haxe.ui.toolkit.core.interfaces.IItemRenderer)).clone(); else if(js.Boot.__instanceof(this._itemRenderer,Class)) {
			var cls;
			cls = js.Boot.__cast(this._itemRenderer , Class);
			r = Type.createInstance(cls,[]);
		} else if(typeof(this._itemRenderer) == "string") {
			var classString;
			classString = js.Boot.__cast(this._itemRenderer , String);
			var cls1 = Type.resolveClass(classString);
			r = Type.createInstance(cls1,[]);
		}
		if(r != null) r.eventDispatcher = this;
		return r;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.containers.ScrollView.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.ListView();
	}
	,set_onComponentEvent: function(value) {
		this.onComponentEvent = value;
		this.addEventListener("haxeui_" + "componentEvent",$bind(this,this._handleEvent));
		return value;
	}
	,__class__: haxe.ui.toolkit.containers.ListView
	,__properties__: $extend(haxe.ui.toolkit.containers.ScrollView.prototype.__properties__,{set_onComponentEvent:"set_onComponentEvent",set_dataSource:"set_dataSource",get_dataSource:"get_dataSource",set_itemRenderer:"set_itemRenderer",get_itemRenderer:"get_itemRenderer",get_content:"get_content",set_selectedIndex:"set_selectedIndex",get_selectedIndex:"get_selectedIndex",get_selectedItems:"get_selectedItems",get_itemHeight:"get_itemHeight",get_listSize:"get_listSize"})
});
haxe.ui.toolkit.containers.MenuBar = function() {
	haxe.ui.toolkit.containers.HBox.call(this);
	this._autoSize = false;
};
$hxClasses["haxe.ui.toolkit.containers.MenuBar"] = haxe.ui.toolkit.containers.MenuBar;
haxe.ui.toolkit.containers.MenuBar.__name__ = ["haxe","ui","toolkit","containers","MenuBar"];
haxe.ui.toolkit.containers.MenuBar.__super__ = haxe.ui.toolkit.containers.HBox;
haxe.ui.toolkit.containers.MenuBar.prototype = $extend(haxe.ui.toolkit.containers.HBox.prototype,{
	clone: function() {
		var c = haxe.ui.toolkit.containers.HBox.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.MenuBar();
	}
	,__class__: haxe.ui.toolkit.containers.MenuBar
});
haxe.ui.toolkit.containers.RTFView = function() {
	this._systemFonts = false;
	haxe.ui.toolkit.containers.VBox.call(this);
	this._rtf = new haxe.ui.toolkit.controls.extended.RTF();
	this._rtf.set_multiline(true);
	this._rtf.set_wrapLines(true);
	this._rtf.set_percentWidth(100);
	this._rtf.set_percentHeight(100);
};
$hxClasses["haxe.ui.toolkit.containers.RTFView"] = haxe.ui.toolkit.containers.RTFView;
haxe.ui.toolkit.containers.RTFView.__name__ = ["haxe","ui","toolkit","containers","RTFView"];
haxe.ui.toolkit.containers.RTFView.__super__ = haxe.ui.toolkit.containers.VBox;
haxe.ui.toolkit.containers.RTFView.prototype = $extend(haxe.ui.toolkit.containers.VBox.prototype,{
	initialize: function() {
		var _g = this;
		haxe.ui.toolkit.containers.VBox.prototype.initialize.call(this);
		var hbox = new haxe.ui.toolkit.containers.HBox();
		this._fontNameList = new haxe.ui.toolkit.controls.selection.ListSelector();
		this._fontNameList.set_width(200);
		this._fontNameList.set_text("_sans");
		if(this._systemFonts == true) {
		} else {
			this._fontNameList.get_dataSource().add({ text : "_sans"});
			this._fontNameList.get_dataSource().add({ text : "_serif"});
			this._fontNameList.get_dataSource().add({ text : "_typewriter"});
			this._fontNameList.get_dataSource().add({ text : "Arial"});
			this._fontNameList.get_dataSource().add({ text : "Courier"});
			this._fontNameList.get_dataSource().add({ text : "Courier New"});
			this._fontNameList.get_dataSource().add({ text : "Geneva"});
			this._fontNameList.get_dataSource().add({ text : "Georgia"});
			this._fontNameList.get_dataSource().add({ text : "Helvetica"});
			this._fontNameList.get_dataSource().add({ text : "Times New Roman"});
			this._fontNameList.get_dataSource().add({ text : "Times"});
			this._fontNameList.get_dataSource().add({ text : "Verdana"});
		}
		this._fontNameList.addEventListener(flash.events.Event.CHANGE,$bind(this,this._onFontNameChange));
		hbox.addChild(this._fontNameList);
		this._fontSizeList = new haxe.ui.toolkit.controls.selection.ListSelector();
		this._fontSizeList.set_text("13");
		this._fontSizeList.get_dataSource().add({ text : 10});
		this._fontSizeList.get_dataSource().add({ text : 12});
		this._fontSizeList.get_dataSource().add({ text : 13});
		this._fontSizeList.get_dataSource().add({ text : 14});
		this._fontSizeList.get_dataSource().add({ text : 16});
		this._fontSizeList.get_dataSource().add({ text : 18});
		this._fontSizeList.get_dataSource().add({ text : 20});
		this._fontSizeList.get_dataSource().add({ text : 24});
		this._fontSizeList.get_dataSource().add({ text : 26});
		this._fontSizeList.get_dataSource().add({ text : 28});
		this._fontSizeList.get_dataSource().add({ text : 36});
		this._fontSizeList.get_dataSource().add({ text : 48});
		this._fontSizeList.get_dataSource().add({ text : 72});
		this._fontSizeList.addEventListener(flash.events.Event.CHANGE,$bind(this,this._onFontSizeChange));
		hbox.addChild(this._fontSizeList);
		var spacer = new haxe.ui.toolkit.controls.Spacer();
		spacer.set_width(10);
		hbox.addChild(spacer);
		this._boldButton = new haxe.ui.toolkit.containers.RTFToolButton();
		this._boldButton.set_id("bold");
		this._boldButton.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this._onBoldClick));
		hbox.addChild(this._boldButton);
		this._italicButton = new haxe.ui.toolkit.containers.RTFToolButton();
		this._italicButton.set_id("italic");
		this._italicButton.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this._onItalicClick));
		hbox.addChild(this._italicButton);
		this._underlineButton = new haxe.ui.toolkit.containers.RTFToolButton();
		this._underlineButton.set_id("underline");
		this._underlineButton.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this._onUnderlineClick));
		hbox.addChild(this._underlineButton);
		var spacer1 = new haxe.ui.toolkit.controls.Spacer();
		spacer1.set_width(10);
		hbox.addChild(spacer1);
		this._bulletButton = new haxe.ui.toolkit.containers.RTFToolButton();
		this._bulletButton.set_id("bullet");
		this._bulletButton.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this._onBulletClick));
		hbox.addChild(this._bulletButton);
		var spacer2 = new haxe.ui.toolkit.controls.Spacer();
		spacer2.set_width(10);
		hbox.addChild(spacer2);
		this._leftAlignButton = new haxe.ui.toolkit.containers.RTFToolButton();
		this._leftAlignButton.set_id("alignLeft");
		this._leftAlignButton.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this._onLeftAlignClick));
		hbox.addChild(this._leftAlignButton);
		this._centerAlignButton = new haxe.ui.toolkit.containers.RTFToolButton();
		this._centerAlignButton.set_id("alignCenter");
		this._centerAlignButton.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this._onCenterAlignClick));
		hbox.addChild(this._centerAlignButton);
		this._rightAlignButton = new haxe.ui.toolkit.containers.RTFToolButton();
		this._rightAlignButton.set_id("alignRight");
		this._rightAlignButton.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this._onRightAlignClick));
		hbox.addChild(this._rightAlignButton);
		this._justifyAlignButton = new haxe.ui.toolkit.containers.RTFToolButton();
		this._justifyAlignButton.set_id("alignJustify");
		this._justifyAlignButton.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this._onJustifyAlignClick));
		hbox.addChild(this._justifyAlignButton);
		var button = new haxe.ui.toolkit.containers.RTFToolButton();
		button.set_text("");
		button.addEventListener(flash.events.MouseEvent.CLICK,function(e) {
			_g._rtf.set_text(_g._rtf.get_htmlText());
		});
		hbox.addChild(button);
		this.addChild(hbox);
		this.addChild(this._rtf);
	}
	,get_htmlText: function() {
		return this._rtf.get_htmlText();
	}
	,set_htmlText: function(value) {
		this._rtf.set_htmlText(value);
		return value;
	}
	,set_text: function(value) {
		this._rtf.set_text(value);
		return value;
	}
	,_onBoldClick: function(event) {
		this._rtf.bold();
	}
	,_onItalicClick: function(event) {
		this._rtf.italic();
	}
	,_onUnderlineClick: function(event) {
		this._rtf.underline();
	}
	,_onBulletClick: function(event) {
		this._rtf.bullet();
	}
	,_onFontNameChange: function(event) {
	}
	,_onFontSizeChange: function(event) {
	}
	,_onLeftAlignClick: function(event) {
		this._rtf.alignLeft();
	}
	,_onCenterAlignClick: function(event) {
		this._rtf.alignCenter();
	}
	,_onRightAlignClick: function(event) {
		this._rtf.alignRight();
	}
	,_onJustifyAlignClick: function(event) {
		this._rtf.alignJustify();
	}
	,clone: function() {
		var c = haxe.ui.toolkit.containers.VBox.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.RTFView();
	}
	,__class__: haxe.ui.toolkit.containers.RTFView
	,__properties__: $extend(haxe.ui.toolkit.containers.VBox.prototype.__properties__,{set_htmlText:"set_htmlText",get_htmlText:"get_htmlText"})
});
haxe.ui.toolkit.containers.RTFToolButton = function() {
	haxe.ui.toolkit.controls.Button.call(this);
};
$hxClasses["haxe.ui.toolkit.containers.RTFToolButton"] = haxe.ui.toolkit.containers.RTFToolButton;
haxe.ui.toolkit.containers.RTFToolButton.__name__ = ["haxe","ui","toolkit","containers","RTFToolButton"];
haxe.ui.toolkit.containers.RTFToolButton.__super__ = haxe.ui.toolkit.controls.Button;
haxe.ui.toolkit.containers.RTFToolButton.prototype = $extend(haxe.ui.toolkit.controls.Button.prototype,{
	clone: function() {
		var c = haxe.ui.toolkit.controls.Button.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.RTFToolButton();
	}
	,__class__: haxe.ui.toolkit.containers.RTFToolButton
});
haxe.ui.toolkit.containers.ScrollViewLayout = function() {
	this._inlineScrolls = false;
	haxe.ui.toolkit.layout.DefaultLayout.call(this);
};
$hxClasses["haxe.ui.toolkit.containers.ScrollViewLayout"] = haxe.ui.toolkit.containers.ScrollViewLayout;
haxe.ui.toolkit.containers.ScrollViewLayout.__name__ = ["haxe","ui","toolkit","containers","ScrollViewLayout"];
haxe.ui.toolkit.containers.ScrollViewLayout.__super__ = haxe.ui.toolkit.layout.DefaultLayout;
haxe.ui.toolkit.containers.ScrollViewLayout.prototype = $extend(haxe.ui.toolkit.layout.DefaultLayout.prototype,{
	resizeChildren: function() {
		haxe.ui.toolkit.layout.DefaultLayout.prototype.resizeChildren.call(this);
	}
	,repositionChildren: function() {
		haxe.ui.toolkit.layout.DefaultLayout.prototype.repositionChildren.call(this);
		var hscroll = this.get_container().findChildAs(haxe.ui.toolkit.controls.HScroll);
		var vscroll = this.get_container().findChildAs(haxe.ui.toolkit.controls.VScroll);
		if(hscroll != null) hscroll.set_y(this.get_container().get_height() - hscroll.get_height() - this.get_padding().get_bottom());
		if(vscroll != null) vscroll.set_x(this.get_container().get_width() - vscroll.get_width() - this.get_padding().get_right());
	}
	,get_usableWidth: function() {
		var ucx = this.get_innerWidth();
		var vscroll = this.get_container().findChildAs(haxe.ui.toolkit.controls.VScroll);
		if(vscroll != null && vscroll.get_visible() == true && this._inlineScrolls == false) ucx -= vscroll.get_width() + this.get_spacingX();
		return ucx;
	}
	,get_usableHeight: function() {
		var ucy = this.get_innerHeight();
		var hscroll = this.get_container().findChildAs(haxe.ui.toolkit.controls.HScroll);
		if(hscroll != null && hscroll.get_visible() && this._inlineScrolls == false) ucy -= hscroll.get_height() + this.get_spacingY();
		return ucy;
	}
	,get_inlineScrolls: function() {
		return this._inlineScrolls;
	}
	,set_inlineScrolls: function(value) {
		this._inlineScrolls = value;
		return value;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.layout.DefaultLayout.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.ScrollViewLayout();
	}
	,__class__: haxe.ui.toolkit.containers.ScrollViewLayout
	,__properties__: $extend(haxe.ui.toolkit.layout.DefaultLayout.prototype.__properties__,{set_inlineScrolls:"set_inlineScrolls",get_inlineScrolls:"get_inlineScrolls"})
});
haxe.ui.toolkit.containers.Stack = function() {
	this._selectedIndex = -1;
	haxe.ui.toolkit.core.Component.call(this);
	this._clipContent = true;
};
$hxClasses["haxe.ui.toolkit.containers.Stack"] = haxe.ui.toolkit.containers.Stack;
haxe.ui.toolkit.containers.Stack.__name__ = ["haxe","ui","toolkit","containers","Stack"];
haxe.ui.toolkit.containers.Stack.__super__ = haxe.ui.toolkit.core.Component;
haxe.ui.toolkit.containers.Stack.prototype = $extend(haxe.ui.toolkit.core.Component.prototype,{
	addChild: function(child) {
		var r = haxe.ui.toolkit.core.Component.prototype.addChild.call(this,child);
		r.set_visible(this.get_children().length - 1 == this._selectedIndex);
		r.get_sprite().set_alpha(1);
		return r;
	}
	,get_selectedIndex: function() {
		return this._selectedIndex;
	}
	,set_selectedIndex: function(value) {
		if(value != this._selectedIndex) {
			var transition = haxe.ui.toolkit.core.Toolkit.getTransitionForClass(haxe.ui.toolkit.containers.Stack);
			transition = "none";
			var _g1 = 0;
			var _g = this.get_children().length;
			while(_g1 < _g) {
				var n = _g1++;
				var item = [this.get_children()[n]];
				if(n == value) {
					if(transition == "slide") {
						if(value > this._selectedIndex) {
							item[0].set_x(-item[0].get_width());
							item[0].get_sprite().set_alpha(1);
							item[0].set_visible(true);
							motion.Actuate.tween(item[0],.2,{ x : this.get_layout().get_padding().get_left()},true).ease(motion.easing.Linear.get_easeNone()).onComplete((function() {
								return function() {
								};
							})());
						} else {
							item[0].set_x(this.get_width());
							item[0].get_sprite().set_alpha(1);
							item[0].set_visible(true);
							motion.Actuate.tween(item[0],.2,{ x : this.get_layout().get_padding().get_left()},true).ease(motion.easing.Linear.get_easeNone()).onComplete((function() {
								return function() {
								};
							})());
						}
					} else if(transition == "fade") {
						item[0].set_x(this.get_layout().get_padding().get_left());
						item[0].get_sprite().set_alpha(0);
						item[0].set_visible(true);
						motion.Actuate.tween(item[0].get_sprite(),.2,{ alpha : 1},true).ease(motion.easing.Linear.get_easeNone()).onComplete((function() {
							return function() {
							};
						})());
					} else {
						item[0].set_x(this.get_layout().get_padding().get_left());
						item[0].get_sprite().set_alpha(1);
						item[0].set_visible(true);
					}
				} else if(n == this._selectedIndex) {
					if(transition == "slide") {
						item[0].get_sprite().set_alpha(1);
						if(value > this._selectedIndex) motion.Actuate.tween(item[0],.2,{ x : this.get_width()},true).ease(motion.easing.Linear.get_easeNone()).onComplete((function(item) {
							return function() {
								item[0].set_visible(false);
							};
						})(item)); else motion.Actuate.tween(item[0],.2,{ x : -item[0].get_width()},true).ease(motion.easing.Linear.get_easeNone()).onComplete((function(item) {
							return function() {
								item[0].set_visible(false);
							};
						})(item));
					} else if(transition == "fade") {
						item[0].set_x(this.get_layout().get_padding().get_left());
						motion.Actuate.tween(item[0].get_sprite(),.2,{ alpha : 0},true).ease(motion.easing.Linear.get_easeNone()).onComplete((function(item) {
							return function() {
								item[0].set_visible(false);
							};
						})(item));
					} else {
						item[0].set_x(this.get_layout().get_padding().get_left());
						item[0].get_sprite().set_alpha(1);
						item[0].set_visible(false);
					}
				}
			}
			this._selectedIndex = value;
			var event = new flash.events.Event(flash.events.Event.CHANGE);
			this.dispatchEvent(event);
		}
		return value;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.Component.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.Stack();
	}
	,__class__: haxe.ui.toolkit.containers.Stack
	,__properties__: $extend(haxe.ui.toolkit.core.Component.prototype.__properties__,{set_selectedIndex:"set_selectedIndex",get_selectedIndex:"get_selectedIndex"})
});
haxe.ui.toolkit.containers.TabView = function() {
	haxe.ui.toolkit.core.Component.call(this);
	this._layout = new haxe.ui.toolkit.layout.VerticalLayout();
	this._tabs = new haxe.ui.toolkit.controls.TabBar();
	this._tabs.set_percentWidth(100);
	this._tabs.addEventListener(flash.events.Event.CHANGE,$bind(this,this._onTabsChange));
	this._tabs.addEventListener("haxeui_" + "glyphClick",$bind(this,this._onGlyphClick));
	this.addChild(this._tabs);
	this._stack = new haxe.ui.toolkit.containers.Stack();
	this._stack.set_percentWidth(this._stack.set_percentHeight(100));
	this.addChild(this._stack);
};
$hxClasses["haxe.ui.toolkit.containers.TabView"] = haxe.ui.toolkit.containers.TabView;
haxe.ui.toolkit.containers.TabView.__name__ = ["haxe","ui","toolkit","containers","TabView"];
haxe.ui.toolkit.containers.TabView.__super__ = haxe.ui.toolkit.core.Component;
haxe.ui.toolkit.containers.TabView.prototype = $extend(haxe.ui.toolkit.core.Component.prototype,{
	_onTabsChange: function(event) {
		this._stack.set_selectedIndex(this._tabs.get_selectedIndex());
		var event1 = new haxe.ui.toolkit.events.UIEvent("haxeui_" + "change");
		this.dispatchEvent(event1);
	}
	,_onGlyphClick: function(event) {
		var newEvent = new haxe.ui.toolkit.events.UIEvent("haxeui_" + "glyphClick");
		newEvent.data = event.data;
		this.dispatchEvent(newEvent);
	}
	,initialize: function() {
		haxe.ui.toolkit.core.Component.prototype.initialize.call(this);
		this.set_selectedIndex(0);
	}
	,addChild: function(child) {
		var r = null;
		if(child == this._tabs || child == this._stack) r = haxe.ui.toolkit.core.Component.prototype.addChild.call(this,child); else {
			r = this._stack.addChild(child);
			var label = "";
			var styleName = null;
			if(js.Boot.__instanceof(child,haxe.ui.toolkit.core.Component)) {
				label = (js.Boot.__cast(child , haxe.ui.toolkit.core.Component)).get_text();
				styleName = (js.Boot.__cast(child , haxe.ui.toolkit.core.Component)).get_styleName();
			}
			this._tabs.addTab(label).set_styleName(styleName);
		}
		return r;
	}
	,addChildAt: function(child,index) {
		var r = null;
		if(child == this._tabs || child == this._stack) r = haxe.ui.toolkit.core.Component.prototype.addChildAt.call(this,child,index); else {
			r = this._stack.addChildAt(child,index);
			var label = "";
			if(js.Boot.__instanceof(child,haxe.ui.toolkit.core.Component)) label = (js.Boot.__cast(child , haxe.ui.toolkit.core.Component)).get_text();
			this._tabs.addTab(label);
		}
		return r;
	}
	,removeChild: function(child,dispose) {
		if(dispose == null) dispose = true;
		var r = null;
		if(child == this._tabs || child == this._stack) r = haxe.ui.toolkit.core.Component.prototype.removeChild.call(this,child,dispose); else r = this._stack.removeChild(child,dispose);
		return r;
	}
	,get_selectedIndex: function() {
		return this._tabs.get_selectedIndex();
	}
	,set_selectedIndex: function(value) {
		this._tabs.set_selectedIndex(value);
		return value;
	}
	,get_pageCount: function() {
		return this._stack.get_numChildren();
	}
	,setTabText: function(index,text) {
		this._tabs.setTabText(index,text);
	}
	,removeTab: function(index) {
		this._stack.removeChildAt(index);
		this._tabs.removeTab(index);
	}
	,getTabButton: function(index) {
		return this._tabs.getTabButton(index);
	}
	,removeAllTabs: function() {
		this._stack.removeAllChildren();
		this._tabs.removeAllTabs();
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.Component.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.TabView();
	}
	,__class__: haxe.ui.toolkit.containers.TabView
	,__properties__: $extend(haxe.ui.toolkit.core.Component.prototype.__properties__,{get_pageCount:"get_pageCount",set_selectedIndex:"set_selectedIndex",get_selectedIndex:"get_selectedIndex"})
});
haxe.ui.toolkit.containers.TableView = function() {
	this._lastSelection = -1;
	haxe.ui.toolkit.core.Component.call(this);
	this._columnDefs = new haxe.ui.toolkit.containers.TableViewColumnDefs();
	this.set_dataSource(new haxe.ui.toolkit.data.ArrayDataSource());
	this._scrollView = new haxe.ui.toolkit.containers.ScrollView();
	this._scrollView.get_style().set_borderSize(0);
	this._selectedItems = new Array();
	this._scrollView.set_percentWidth(100);
	this._scrollView.set_percentHeight(100);
	this._scrollContent = new haxe.ui.toolkit.containers.VBox();
	this._scrollContent.set_id("tableContent");
	this._scrollContent.set_autoSize(true);
	this._scrollView.addChild(this._scrollContent);
};
$hxClasses["haxe.ui.toolkit.containers.TableView"] = haxe.ui.toolkit.containers.TableView;
haxe.ui.toolkit.containers.TableView.__name__ = ["haxe","ui","toolkit","containers","TableView"];
haxe.ui.toolkit.containers.TableView.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IDataComponent];
haxe.ui.toolkit.containers.TableView.__super__ = haxe.ui.toolkit.core.Component;
haxe.ui.toolkit.containers.TableView.prototype = $extend(haxe.ui.toolkit.core.Component.prototype,{
	initialize: function() {
		haxe.ui.toolkit.core.Component.prototype.initialize.call(this);
		this.addChild(this._scrollView);
		if(this._dataSource == null) this.set_dataSource(new haxe.ui.toolkit.data.ArrayDataSource());
		this._dataSource.open();
		this.syncUI();
	}
	,invalidate: function(type,recursive) {
		if(recursive == null) recursive = false;
		if(type == null) type = 1118481;
		haxe.ui.toolkit.core.Component.prototype.invalidate.call(this,type,recursive);
		if(this._ready && (type & 256) == 256) {
			if(this._scrollView.get_layout().get_usableWidth() > 0) this.resizeColumns();
		}
	}
	,get_dataSource: function() {
		return this._dataSource;
	}
	,set_dataSource: function(value) {
		if(this._dataSource != null) {
			if(js.Boot.__instanceof(this._dataSource,flash.events.IEventDispatcher)) (js.Boot.__cast(this._dataSource , flash.events.IEventDispatcher)).removeEventListener(flash.events.Event.CHANGE,$bind(this,this._onDataSourceChanged));
		}
		this._dataSource = value;
		if(js.Boot.__instanceof(this._dataSource,flash.events.IEventDispatcher)) (js.Boot.__cast(this._dataSource , flash.events.IEventDispatcher)).addEventListener(flash.events.Event.CHANGE,$bind(this,this._onDataSourceChanged));
		if(this._ready == true) this.syncUI();
		return value;
	}
	,_onDataSourceChanged: function(event) {
		this.syncUI();
	}
	,get_columns: function() {
		return this._columnDefs;
	}
	,set_columns: function(value) {
		this._columnDefs = value;
		return value;
	}
	,syncUI: function() {
		var pos = 0;
		if(this._dataSource != null) {
			if(this.get_dataSource().moveFirst()) do {
				var dataHash = this.get_dataSource().hash();
				var data = this.get_dataSource().get();
				var item = null;
				if(this._scrollContent.getChildAt(pos) != null) item = js.Boot.__cast(this._scrollContent.getChildAt(pos) , haxe.ui.toolkit.containers.TableViewRow);
				if(item == null) {
					this.addTableRow(dataHash,data,pos);
					pos++;
				} else if(item.hash == dataHash) pos++; else {
					while(item != null && item.hash != dataHash) item = js.Boot.__cast(this._scrollContent.getChildAt(pos) , haxe.ui.toolkit.containers.TableViewRow);
					pos++;
				}
			} while(this.get_dataSource().moveNext());
		}
	}
	,addTableRow: function(dataHash,data,index) {
		if(index == null) index = -1;
		if(data == null) return;
		var _g = 0;
		var _g1 = Reflect.fields(data);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			if(f != "__get_id__") {
				if(this._columnDefs.has(f) == false) {
					this._columnDefs.add(f);
					haxe.Log.trace(f,{ fileName : "TableView.hx", lineNumber : 167, className : "haxe.ui.toolkit.containers.TableView", methodName : "addTableRow"});
				}
			}
		}
		var item = new haxe.ui.toolkit.containers.TableViewRow(this);
		item.set_autoSize(true);
		item.set_data(data);
		item.hash = dataHash;
		var id;
		if(this._scrollContent.get_numChildren() % 2 == 0) id = "even"; else id = "odd";
		item.set_id(id);
		if(index == -1) this._scrollContent.addChild(item); else this._scrollContent.addChildAt(item,index);
		this._scrollView.invalidate(256);
	}
	,resizeColumns: function() {
		if(this._scrollContent.get_numChildren() == 0) return;
		var sx = (js.Boot.__cast(this._scrollContent.getChildAt(0) , haxe.ui.toolkit.containers.TableViewRow)).get_layout().get_spacingX();
		var cols = this._columnDefs.iterator();
		var totalWidth = 0;
		var _g = 0;
		while(_g < cols.length) {
			var c = cols[_g];
			++_g;
			totalWidth += c.calculatedWidth + sx;
		}
		if(totalWidth < this._scrollView.get_layout().get_usableWidth()) {
			var diff = this._scrollView.get_layout().get_usableWidth() - totalWidth;
			var newWidth = cols[cols.length - 1].calculatedWidth + diff;
			var _g1 = 0;
			var _g11 = this._scrollContent.get_children();
			while(_g1 < _g11.length) {
				var child = _g11[_g1];
				++_g1;
				var temp;
				temp = js.Boot.__cast(child , haxe.ui.toolkit.containers.TableViewRow);
				temp.getChildAt(temp.get_numChildren() - 1).set_width(newWidth);
			}
		}
	}
	,handleListSelection: function(item,event,raiseEvent) {
		if(raiseEvent == null) raiseEvent = true;
		var shiftPressed = false;
		var ctrlPressed = false;
		if(event != null && js.Boot.__instanceof(event,flash.events.MouseEvent)) {
			var mouseEvent;
			mouseEvent = js.Boot.__cast(event , flash.events.MouseEvent);
			shiftPressed = mouseEvent.shiftKey;
			ctrlPressed = mouseEvent.ctrlKey;
		}
		if(ctrlPressed == true) {
		} else if(shiftPressed == true) {
		} else {
			var _g = 0;
			var _g1 = this._selectedItems;
			while(_g < _g1.length) {
				var selectedItem = _g1[_g];
				++_g;
				if(selectedItem != item) selectedItem.set_state("normal");
			}
			this._selectedItems = new Array();
		}
		if(this.isSelected(item)) {
			HxOverrides.remove(this._selectedItems,item);
			item.set_state("over");
		} else {
			this._selectedItems.push(item);
			item.set_state("selected");
		}
		if(raiseEvent == true) {
			var event1 = new flash.events.Event(flash.events.Event.CHANGE);
			this.dispatchEvent(event1);
		}
	}
	,handleClick: function(item,event) {
		var index = Lambda.indexOf(this._scrollContent.get_children(),item);
		if(this._lastSelection == index) {
			var event1 = new flash.events.MouseEvent(flash.events.MouseEvent.DOUBLE_CLICK);
			this.dispatchEvent(event1);
			this._lastSelection = -1;
		} else this._lastSelection = index;
	}
	,isSelected: function(item) {
		return Lambda.indexOf(this._selectedItems,item) != -1;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.Component.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.TableView();
	}
	,__class__: haxe.ui.toolkit.containers.TableView
	,__properties__: $extend(haxe.ui.toolkit.core.Component.prototype.__properties__,{set_columns:"set_columns",get_columns:"get_columns",set_dataSource:"set_dataSource",get_dataSource:"get_dataSource"})
});
haxe.ui.toolkit.containers.TableViewColumnDefs = function() {
	this._columns = new Array();
};
$hxClasses["haxe.ui.toolkit.containers.TableViewColumnDefs"] = haxe.ui.toolkit.containers.TableViewColumnDefs;
haxe.ui.toolkit.containers.TableViewColumnDefs.__name__ = ["haxe","ui","toolkit","containers","TableViewColumnDefs"];
haxe.ui.toolkit.containers.TableViewColumnDefs.prototype = {
	add: function(id,width,title) {
		if(title == null) title = "";
		if(width == null) width = 0;
		if(this.has(id) == false) {
			var c = new haxe.ui.toolkit.containers.TableViewColumnDef();
			c.id = id;
			c.width = width;
			this._columns.push(c);
		}
	}
	,has: function(id) {
		var b = false;
		var _g = 0;
		var _g1 = this._columns;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c.id == id) b = true;
		}
		return b;
	}
	,iterator: function() {
		return this._columns;
	}
	,findColumn: function(id) {
		var c = null;
		var _g = 0;
		var _g1 = this._columns;
		while(_g < _g1.length) {
			var test = _g1[_g];
			++_g;
			if(test.id == id) {
				c = test;
				break;
			}
		}
		return c;
	}
	,__class__: haxe.ui.toolkit.containers.TableViewColumnDefs
};
haxe.ui.toolkit.containers.TableViewColumnDef = function() {
	this.calculatedWidth = 0;
	this.width = 0;
	this.type = "text";
};
$hxClasses["haxe.ui.toolkit.containers.TableViewColumnDef"] = haxe.ui.toolkit.containers.TableViewColumnDef;
haxe.ui.toolkit.containers.TableViewColumnDef.__name__ = ["haxe","ui","toolkit","containers","TableViewColumnDef"];
haxe.ui.toolkit.containers.TableViewColumnDef.prototype = {
	__class__: haxe.ui.toolkit.containers.TableViewColumnDef
};
haxe.ui.toolkit.containers.TableViewRow = function(parentTable) {
	haxe.ui.toolkit.containers.HBox.call(this);
	this._states = new Array();
	this.get_sprite().buttonMode = true;
	this.get_sprite().useHandCursor = true;
	this.set_state("normal");
	this._parentTable = parentTable;
};
$hxClasses["haxe.ui.toolkit.containers.TableViewRow"] = haxe.ui.toolkit.containers.TableViewRow;
haxe.ui.toolkit.containers.TableViewRow.__name__ = ["haxe","ui","toolkit","containers","TableViewRow"];
haxe.ui.toolkit.containers.TableViewRow.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IStateComponent];
haxe.ui.toolkit.containers.TableViewRow.__super__ = haxe.ui.toolkit.containers.HBox;
haxe.ui.toolkit.containers.TableViewRow.prototype = $extend(haxe.ui.toolkit.containers.HBox.prototype,{
	initialize: function() {
		haxe.ui.toolkit.containers.HBox.prototype.initialize.call(this);
		this.addEventListener(flash.events.MouseEvent.MOUSE_OVER,$bind(this,this._onMouseOver));
		this.addEventListener(flash.events.MouseEvent.MOUSE_OUT,$bind(this,this._onMouseOut));
		this.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this._onMouseClick));
	}
	,_onMouseOver: function(event) {
		this.set_state("over");
	}
	,_onMouseOut: function(event) {
		if(this._parentTable.isSelected(this)) this.set_state("selected"); else this.set_state("normal");
	}
	,_onMouseClick: function(event) {
		this._parentTable.handleListSelection(this,event);
		this._parentTable.handleClick(this,event);
	}
	,get_data: function() {
		return this._data;
	}
	,set_data: function(value) {
		this._data = value;
		var _g = 0;
		var _g1 = this._parentTable.get_columns().iterator();
		while(_g < _g1.length) {
			var colDef = [_g1[_g]];
			++_g;
			if(Object.prototype.hasOwnProperty.call(value,colDef[0].id)) {
				var c = [null];
				var colValue = Reflect.field(value,colDef[0].id);
				var type = "text";
				if(typeof(colValue) == "string") c[0] = this.createColumnComponent(colValue,"text"); else {
					if(Object.prototype.hasOwnProperty.call(colValue,"type")) type = js.Boot.__cast(Reflect.field(colValue,"type") , String);
					var componentValue = null;
					if(Object.prototype.hasOwnProperty.call(colValue,"value")) componentValue = Reflect.field(colValue,"value");
					c[0] = this.createColumnComponent(componentValue,type);
				}
				if(c[0] != null) {
					if(type == "list") {
						if(Object.prototype.hasOwnProperty.call(colValue,"dataSource")) {
							var controlDataSource = Reflect.field(colValue,"dataSource");
							var ds = null;
							if((controlDataSource instanceof Array) && controlDataSource.__enum__ == null) {
								ds = new haxe.ui.toolkit.data.ArrayDataSource();
								var _g2 = 0;
								var _g3;
								_g3 = js.Boot.__cast(controlDataSource , Array);
								while(_g2 < _g3.length) {
									var o = _g3[_g2];
									++_g2;
									ds.add(o);
								}
							}
							(js.Boot.__cast(c[0] , haxe.ui.toolkit.controls.selection.ListSelector)).set_dataSource(ds);
						}
					}
					c[0].set_autoSize(true);
					this.addChild(c[0]);
					c[0].addEventListener(flash.events.Event.ADDED_TO_STAGE,(function(c,colDef) {
						return function(e) {
							if(colDef[0].width <= 0) {
								if(c[0].get_width() > colDef[0].calculatedWidth) colDef[0].calculatedWidth = c[0].get_width(); else c[0].set_width(colDef[0].calculatedWidth);
							} else {
								c[0].set_width(colDef[0].width);
								colDef[0].calculatedWidth = colDef[0].width;
							}
						};
					})(c,colDef));
				}
			}
		}
		return value;
	}
	,createColumnComponent: function(value,type) {
		var c = null;
		if(value == null) {
			c = new haxe.ui.toolkit.controls.Spacer();
			return c;
		}
		switch(type) {
		case "text":
			c = new haxe.ui.toolkit.controls.Text();
			c.set_autoSize(false);
			(js.Boot.__cast(c , haxe.ui.toolkit.controls.Text)).set_text(js.Boot.__cast(value , String));
			(js.Boot.__cast(c , haxe.ui.toolkit.controls.Text)).addStates(this.get_states());
			break;
		case "button":
			c = new haxe.ui.toolkit.controls.Button();
			(js.Boot.__cast(c , haxe.ui.toolkit.controls.Button)).set_text(js.Boot.__cast(value , String));
			break;
		case "slider":
			c = new haxe.ui.toolkit.controls.HSlider();
			(js.Boot.__cast(c , haxe.ui.toolkit.controls.HSlider)).set_pos(Std.parseInt(value));
			break;
		case "progress":
			c = new haxe.ui.toolkit.controls.HProgress();
			(js.Boot.__cast(c , haxe.ui.toolkit.controls.HProgress)).set_pos(Std.parseInt(value));
			break;
		case "list":
			c = new haxe.ui.toolkit.controls.selection.ListSelector();
			(js.Boot.__cast(c , haxe.ui.toolkit.controls.selection.ListSelector)).set_text(js.Boot.__cast(value , String));
			break;
		default:
			c = new haxe.ui.toolkit.controls.Spacer();
		}
		return c;
	}
	,buildStyles: function() {
		var _g = 0;
		var _g1 = this.get_states();
		while(_g < _g1.length) {
			var s = _g1[_g];
			++_g;
			var stateStyle = haxe.ui.toolkit.style.StyleManager.get_instance().buildStyleFor(this,s);
			if(stateStyle != null) {
				stateStyle.merge(this._setStyle);
				this.storeStyle(s,stateStyle);
			}
		}
	}
	,addStates: function(stateNames) {
		var _g = 0;
		while(_g < stateNames.length) {
			var stateName = stateNames[_g];
			++_g;
			this._states.push(stateName);
		}
		if(this._ready) this.buildStyles();
	}
	,get_state: function() {
		return this._state;
	}
	,set_state: function(value) {
		if(this._state != value) {
			this._state = value;
			if(this.retrieveStyle(this._state) != null) this.set_style(this.retrieveStyle(this._state)); else this.invalidate(4096);
			var _g = 0;
			var _g1 = this.get_children();
			while(_g < _g1.length) {
				var c = _g1[_g];
				++_g;
				if(js.Boot.__instanceof(c,haxe.ui.toolkit.controls.Text)) {
					var cx = (js.Boot.__cast(c , haxe.ui.toolkit.controls.Text)).get_width();
					(js.Boot.__cast(c , haxe.ui.toolkit.controls.Text)).set_state(value);
					(js.Boot.__cast(c , haxe.ui.toolkit.controls.Text)).set_width(cx);
				}
			}
		}
		return value;
	}
	,get_states: function() {
		return ["normal","over","selected"];
	}
	,hasState: function(state) {
		if(this.get_states() == null) return false;
		return Lambda.indexOf(this.get_states(),state) != -1;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.containers.HBox.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.containers.TableViewRow();
	}
	,__class__: haxe.ui.toolkit.containers.TableViewRow
	,__properties__: $extend(haxe.ui.toolkit.containers.HBox.prototype.__properties__,{get_states:"get_states",set_state:"set_state",get_state:"get_state",set_data:"set_data",get_data:"get_data"})
});
haxe.ui.toolkit.controls.ButtonLayout = function() {
	this._labelPos = "center";
	this._iconPos = "center";
	haxe.ui.toolkit.layout.Layout.call(this);
};
$hxClasses["haxe.ui.toolkit.controls.ButtonLayout"] = haxe.ui.toolkit.controls.ButtonLayout;
haxe.ui.toolkit.controls.ButtonLayout.__name__ = ["haxe","ui","toolkit","controls","ButtonLayout"];
haxe.ui.toolkit.controls.ButtonLayout.__super__ = haxe.ui.toolkit.layout.Layout;
haxe.ui.toolkit.controls.ButtonLayout.prototype = $extend(haxe.ui.toolkit.layout.Layout.prototype,{
	get_iconPosition: function() {
		return this._iconPos;
	}
	,set_iconPosition: function(value) {
		this._iconPos = value;
		return value;
	}
	,get_labelPosition: function() {
		return this._labelPos;
	}
	,set_labelPosition: function(value) {
		this._labelPos = value;
		return value;
	}
	,repositionChildren: function() {
		haxe.ui.toolkit.layout.Layout.prototype.repositionChildren.call(this);
		var labelX = 0;
		var labelY = 0;
		var imageX = 0;
		var imageY = 0;
		var label = this.get_container().findChildAs(haxe.ui.toolkit.controls.Text);
		var icon = this.get_container().findChildAs(haxe.ui.toolkit.controls.Image);
		if(label != null) {
			if(this._labelPos == "center") {
				labelX = this.get_container().get_width() / 2 - label.get_width() / 2;
				labelY = this.get_container().get_height() / 2 - label.get_height() / 2;
			} else if(this._labelPos == "left") {
				labelX = this.get_padding().get_left();
				labelY = this.get_container().get_height() / 2 - label.get_height() / 2;
				if(icon != null && (this._iconPos == "left" || this._iconPos == "farLeft")) labelX += icon.get_width() + 5;
			}
		}
		if(icon != null) {
			if(this._iconPos == "left") {
				imageX = labelX - icon.get_width();
				imageY = this.get_container().get_height() / 2 - icon.get_height() / 2;
			} else if(this._iconPos == "right") {
				imageX = labelX;
				if(label != null) imageX += label.get_width();
				imageY = this.get_container().get_height() / 2 - icon.get_height() / 2;
			} else if(this._iconPos == "farLeft") {
				imageX = this.get_padding().get_left();
				imageY = this.get_container().get_height() / 2 - icon.get_height() / 2;
			} else if(this._iconPos == "farRight") {
				imageX = this.get_container().get_width() - icon.get_width() - this.get_padding().get_right();
				imageY = this.get_container().get_height() / 2 - icon.get_height() / 2;
			} else if(this._iconPos == "top" || this._iconPos == "center") {
				imageX = this.get_container().get_width() / 2 - icon.get_width() / 2;
				var combinedHeight = icon.get_height();
				if(label != null) combinedHeight += label.get_height();
				imageY = this.get_container().get_height() / 2 - combinedHeight / 2;
				labelY = imageY + icon.get_height();
			}
		}
		if(label != null) {
			label.set_x(labelX);
			label.set_y(labelY);
		}
		if(icon != null) {
			icon.set_x(imageX);
			icon.set_y(imageY);
		}
	}
	,clone: function() {
		var c = haxe.ui.toolkit.layout.Layout.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.ButtonLayout();
	}
	,__class__: haxe.ui.toolkit.controls.ButtonLayout
	,__properties__: $extend(haxe.ui.toolkit.layout.Layout.prototype.__properties__,{set_labelPosition:"set_labelPosition",get_labelPosition:"get_labelPosition",set_iconPosition:"set_iconPosition",get_iconPosition:"get_iconPosition"})
});
haxe.ui.toolkit.controls.Calendar = function() {
	haxe.ui.toolkit.core.Component.call(this);
	this._layout = new haxe.ui.toolkit.controls.CalendarLayout();
	this._autoSize = false;
	this._dayItems = new Array();
	this._selectedDate = new Date();
};
$hxClasses["haxe.ui.toolkit.controls.Calendar"] = haxe.ui.toolkit.controls.Calendar;
haxe.ui.toolkit.controls.Calendar.__name__ = ["haxe","ui","toolkit","controls","Calendar"];
haxe.ui.toolkit.controls.Calendar.__super__ = haxe.ui.toolkit.core.Component;
haxe.ui.toolkit.controls.Calendar.prototype = $extend(haxe.ui.toolkit.core.Component.prototype,{
	preInitialize: function() {
		haxe.ui.toolkit.core.Component.prototype.preInitialize.call(this);
		var _g = 0;
		while(_g < 6) {
			var i = _g++;
			var _g1 = 0;
			while(_g1 < 7) {
				var j = _g1++;
				var dayItem = new haxe.ui.toolkit.controls.CalendarDay();
				dayItem.addEventListener(flash.events.MouseEvent.CLICK,this.buildMouseClickFunction(this._dayItems.length));
				this._dayItems.push(dayItem);
				this.addChild(dayItem);
			}
		}
		this.set_date(new Date());
	}
	,previousMonth: function() {
		this._month--;
		if(this._month < 0) {
			this._month = 11;
			this._year--;
		}
		this._day = js.Boot.__cast(Math.min(this._day,this.getEndDay(this._month,this._year)) , Int);
		this.set_date(new Date(this._year,this._month,this._day,0,0,0));
	}
	,nextMonth: function() {
		this._month++;
		if(this._month > 11) {
			this._month = 0;
			this._year++;
		}
		this._day = js.Boot.__cast(Math.min(this._day,this.getEndDay(this._month,this._year)) , Int);
		this.set_date(new Date(this._year,this._month,this._day,0,0,0));
	}
	,get_date: function() {
		return this._date;
	}
	,set_date: function(value) {
		this._date = value;
		this._year = this._date.getFullYear();
		this._month = this._date.getMonth();
		this._day = this._date.getDate();
		var startDay = new Date(this._year,this._month,1,0,0,0).getDay();
		var endDay = this.getEndDay(this._month,this._year);
		var _g = 0;
		var _g1 = this._dayItems;
		while(_g < _g1.length) {
			var item = _g1[_g];
			++_g;
			item.set_visible(false);
			item.set_id(null);
		}
		var _g2 = 0;
		while(_g2 < endDay) {
			var i = _g2++;
			var item1 = this._dayItems[i + startDay];
			item1.set_visible(true);
			item1.set_text("" + (i + 1));
			if(i + 1 == this._selectedDate.getDate() && this._month == this._selectedDate.getMonth() && this._year == this._selectedDate.getFullYear()) item1.set_id("selectedDay");
		}
		return value;
	}
	,get_selectedDate: function() {
		return this._selectedDate;
	}
	,set_selectedDate: function(value) {
		this._selectedDate = value;
		this.set_date(this._date);
		return value;
	}
	,getEndDay: function(month,year) {
		var endDay = -1;
		switch(month) {
		case 1:
			if(year % 400 == 0 || year % 100 != 0 && year % 4 == 0) endDay = 29; else endDay = 28;
			break;
		case 3:case 5:case 8:case 10:
			endDay = 30;
			break;
		default:
			endDay = 31;
		}
		return endDay;
	}
	,buildMouseClickFunction: function(index) {
		var _g = this;
		return function(event) {
			_g.mouseClickButton(index);
		};
	}
	,mouseClickButton: function(index) {
		var item = this._dayItems[index];
		var day = Std.parseInt(item.get_text());
		this.set_selectedDate(new Date(this._year,this._month,day,0,0,0));
		this.dispatchEvent(new flash.events.Event(flash.events.Event.CHANGE));
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.Component.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.Calendar();
	}
	,__class__: haxe.ui.toolkit.controls.Calendar
	,__properties__: $extend(haxe.ui.toolkit.core.Component.prototype.__properties__,{set_selectedDate:"set_selectedDate",get_selectedDate:"get_selectedDate",set_date:"set_date",get_date:"get_date"})
});
haxe.ui.toolkit.controls.CalendarDay = function() {
	haxe.ui.toolkit.controls.Button.call(this);
};
$hxClasses["haxe.ui.toolkit.controls.CalendarDay"] = haxe.ui.toolkit.controls.CalendarDay;
haxe.ui.toolkit.controls.CalendarDay.__name__ = ["haxe","ui","toolkit","controls","CalendarDay"];
haxe.ui.toolkit.controls.CalendarDay.__super__ = haxe.ui.toolkit.controls.Button;
haxe.ui.toolkit.controls.CalendarDay.prototype = $extend(haxe.ui.toolkit.controls.Button.prototype,{
	clone: function() {
		var c = haxe.ui.toolkit.controls.Button.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.CalendarDay();
	}
	,__class__: haxe.ui.toolkit.controls.CalendarDay
});
haxe.ui.toolkit.controls.CalendarLayout = function() {
	haxe.ui.toolkit.layout.Layout.call(this);
};
$hxClasses["haxe.ui.toolkit.controls.CalendarLayout"] = haxe.ui.toolkit.controls.CalendarLayout;
haxe.ui.toolkit.controls.CalendarLayout.__name__ = ["haxe","ui","toolkit","controls","CalendarLayout"];
haxe.ui.toolkit.controls.CalendarLayout.__super__ = haxe.ui.toolkit.layout.Layout;
haxe.ui.toolkit.controls.CalendarLayout.prototype = $extend(haxe.ui.toolkit.layout.Layout.prototype,{
	resizeChildren: function() {
		haxe.ui.toolkit.layout.Layout.prototype.resizeChildren.call(this);
		var children = this.get_container().get_children();
		var ucx = this.get_usableWidth() - 6 * this.get_spacingX();
		var ucy = this.get_usableHeight() - 5 * this.get_spacingY();
		var bcx = ucx / 7;
		var bcy = ucy / 6;
		var xpos = 0;
		var ypos = 0;
		var n = 0;
		var _g = 0;
		while(_g < 6) {
			var i = _g++;
			var _g1 = 0;
			while(_g1 < 7) {
				var j = _g1++;
				var child = children[n];
				if(child != null) {
					child.set_x(xpos);
					child.set_y(ypos);
					child.set_width(bcx);
					child.set_height(bcy);
					n++;
					xpos += bcx + this.get_spacingX();
				}
			}
			xpos = 0;
			ypos += bcy + this.get_spacingY();
		}
	}
	,clone: function() {
		var c = haxe.ui.toolkit.layout.Layout.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.CalendarLayout();
	}
	,__class__: haxe.ui.toolkit.controls.CalendarLayout
});
haxe.ui.toolkit.controls.CheckBox = function() {
	haxe.ui.toolkit.core.Component.call(this);
	this.set_autoSize(true);
	this.get_sprite().buttonMode = true;
	this.get_sprite().useHandCursor = true;
	this._value = new haxe.ui.toolkit.controls.CheckBoxValue();
	this._label = new haxe.ui.toolkit.controls.Text();
	this.set_layout(new haxe.ui.toolkit.layout.HorizontalLayout());
};
$hxClasses["haxe.ui.toolkit.controls.CheckBox"] = haxe.ui.toolkit.controls.CheckBox;
haxe.ui.toolkit.controls.CheckBox.__name__ = ["haxe","ui","toolkit","controls","CheckBox"];
haxe.ui.toolkit.controls.CheckBox.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.controls.CheckBox.__super__ = haxe.ui.toolkit.core.Component;
haxe.ui.toolkit.controls.CheckBox.prototype = $extend(haxe.ui.toolkit.core.Component.prototype,{
	initialize: function() {
		var _g = this;
		haxe.ui.toolkit.core.Component.prototype.initialize.call(this);
		this._value.set_verticalAlign("center");
		this.addChild(this._value);
		this.addChild(this._label);
		this._label.addEventListener("haxeui_" + "click",function(e) {
			_g._value.cycleValues();
		});
		this._value.addEventListener("haxeui_" + "change",function(e1) {
			_g.set_selected(_g._value.get_value() == "selected");
		});
	}
	,get_text: function() {
		return this._label.get_text();
	}
	,set_text: function(value) {
		value = haxe.ui.toolkit.core.Component.prototype.set_text.call(this,value);
		this._label.set_text(value);
		return value;
	}
	,get_selected: function() {
		return this._selected;
	}
	,set_selected: function(value) {
		if(this._selected == value) return value;
		this._value.set_value(value == true?"selected":"unselected");
		this._selected = value;
		var event = new flash.events.Event(flash.events.Event.CHANGE);
		this.dispatchEvent(event);
		return value;
	}
	,applyStyle: function() {
		haxe.ui.toolkit.core.Component.prototype.applyStyle.call(this);
		if(this._label != null) {
			var labelStyle = new haxe.ui.toolkit.style.Style();
			if(this._style != null) {
				labelStyle.set_fontName(this._style.get_fontName());
				labelStyle.set_fontSize(this._style.get_fontSize());
				labelStyle.set_fontEmbedded(this._style.get_fontEmbedded());
				labelStyle.set_color(this._style.get_color());
			}
			this._label.set_style(labelStyle);
		}
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.Component.prototype.clone.call(this);
		c.set_selected(this.get_selected());
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.CheckBox();
	}
	,__class__: haxe.ui.toolkit.controls.CheckBox
	,__properties__: $extend(haxe.ui.toolkit.core.Component.prototype.__properties__,{set_selected:"set_selected",get_selected:"get_selected"})
});
haxe.ui.toolkit.controls.Value = function() {
	this._interactive = true;
	this._value = "";
	haxe.ui.toolkit.core.StateComponent.call(this);
	this.addStates(["normal","disabled"]);
	this._autoSize = false;
	this._layout = new haxe.ui.toolkit.layout.AbsoluteLayout();
	this._values = new haxe.ds.StringMap();
	this._valuesList = new Array();
	this.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this._onMouseClick));
};
$hxClasses["haxe.ui.toolkit.controls.Value"] = haxe.ui.toolkit.controls.Value;
haxe.ui.toolkit.controls.Value.__name__ = ["haxe","ui","toolkit","controls","Value"];
haxe.ui.toolkit.controls.Value.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.controls.Value.__super__ = haxe.ui.toolkit.core.StateComponent;
haxe.ui.toolkit.controls.Value.prototype = $extend(haxe.ui.toolkit.core.StateComponent.prototype,{
	addValue: function(value) {
		if(this._values.get(value) == null) {
			var valueControl = new haxe.ui.toolkit.controls.Button();
			valueControl.set_id(value);
			valueControl.set_percentWidth(100);
			valueControl.set_percentHeight(100);
			this._values.set(value,valueControl);
			this._valuesList.push(value);
			valueControl.set_visible(this._value == value);
			this.addChild(valueControl);
		}
	}
	,cycleValues: function() {
		var currentIndex = Lambda.indexOf(this._valuesList,this._value);
		currentIndex++;
		if(currentIndex > this._valuesList.length - 1) currentIndex = 0;
		this.set_value(this._valuesList[currentIndex]);
	}
	,_onMouseClick: function(event) {
		if(this._interactive == true) this.cycleValues();
	}
	,get_value: function() {
		return this._value;
	}
	,set_value: function(newValue) {
		if(newValue != this._value) {
			var valueControl;
			var key = newValue;
			valueControl = this._values.get(key);
			if(valueControl != null) {
				var currentControl = this._values.get(this._value);
				if(currentControl != null) currentControl.set_visible(false);
				this._value = newValue;
				valueControl.set_visible(true);
			}
			this.dispatchEvent(new haxe.ui.toolkit.events.UIEvent("haxeui_" + "change"));
		}
		return newValue;
	}
	,get_interactive: function() {
		return this._interactive;
	}
	,set_interactive: function(value) {
		this._interactive = value;
		return value;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.StateComponent.prototype.clone.call(this);
		var _g = 0;
		var _g1 = this._valuesList;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			c.addValue(v);
		}
		return c;
		c.set_interactive(this.get_interactive());
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.Value();
	}
	,__class__: haxe.ui.toolkit.controls.Value
	,__properties__: $extend(haxe.ui.toolkit.core.StateComponent.prototype.__properties__,{set_interactive:"set_interactive",get_interactive:"get_interactive"})
});
haxe.ui.toolkit.controls.CheckBoxValue = function() {
	haxe.ui.toolkit.controls.Value.call(this);
	this._value = "unselected";
	this.addValue("selected");
	this.addValue("unselected");
};
$hxClasses["haxe.ui.toolkit.controls.CheckBoxValue"] = haxe.ui.toolkit.controls.CheckBoxValue;
haxe.ui.toolkit.controls.CheckBoxValue.__name__ = ["haxe","ui","toolkit","controls","CheckBoxValue"];
haxe.ui.toolkit.controls.CheckBoxValue.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.controls.CheckBoxValue.__super__ = haxe.ui.toolkit.controls.Value;
haxe.ui.toolkit.controls.CheckBoxValue.prototype = $extend(haxe.ui.toolkit.controls.Value.prototype,{
	clone: function() {
		var c = haxe.ui.toolkit.controls.Value.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.CheckBoxValue();
	}
	,__class__: haxe.ui.toolkit.controls.CheckBoxValue
});
haxe.ui.toolkit.core.interfaces.IDirectional = function() { };
$hxClasses["haxe.ui.toolkit.core.interfaces.IDirectional"] = haxe.ui.toolkit.core.interfaces.IDirectional;
haxe.ui.toolkit.core.interfaces.IDirectional.__name__ = ["haxe","ui","toolkit","core","interfaces","IDirectional"];
haxe.ui.toolkit.core.interfaces.IDirectional.prototype = {
	__class__: haxe.ui.toolkit.core.interfaces.IDirectional
};
haxe.ui.toolkit.core.interfaces.IScrollable = function() { };
$hxClasses["haxe.ui.toolkit.core.interfaces.IScrollable"] = haxe.ui.toolkit.core.interfaces.IScrollable;
haxe.ui.toolkit.core.interfaces.IScrollable.__name__ = ["haxe","ui","toolkit","core","interfaces","IScrollable"];
haxe.ui.toolkit.core.interfaces.IScrollable.prototype = {
	__class__: haxe.ui.toolkit.core.interfaces.IScrollable
};
haxe.ui.toolkit.controls.Progress = function() {
	this._incrementSize = 1;
	this._pos = 0;
	this._max = 100;
	this._min = 0;
	haxe.ui.toolkit.core.StateComponent.call(this);
	this.addStates(["normal","disabled"]);
	this.set_direction("horizontal");
	this._valueBgComp = new haxe.ui.toolkit.core.StateComponent();
	this._valueBgComp.addStates(["normal","disabled"]);
	this._valueBgComp.set_id("background");
	this._valueComp = new haxe.ui.toolkit.core.StateComponent();
	this._valueComp.addStates(["normal","disabled"]);
	this._valueComp.set_id("value");
};
$hxClasses["haxe.ui.toolkit.controls.Progress"] = haxe.ui.toolkit.controls.Progress;
haxe.ui.toolkit.controls.Progress.__name__ = ["haxe","ui","toolkit","controls","Progress"];
haxe.ui.toolkit.controls.Progress.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable,haxe.ui.toolkit.core.interfaces.IDirectional,haxe.ui.toolkit.core.interfaces.IScrollable];
haxe.ui.toolkit.controls.Progress.__super__ = haxe.ui.toolkit.core.StateComponent;
haxe.ui.toolkit.controls.Progress.prototype = $extend(haxe.ui.toolkit.core.StateComponent.prototype,{
	initialize: function() {
		haxe.ui.toolkit.core.StateComponent.prototype.initialize.call(this);
		this.addChild(this._valueBgComp);
		this._valueBgComp.addChild(this._valueComp);
	}
	,get_direction: function() {
		return this._direction;
	}
	,set_direction: function(value) {
		this._direction = value;
		if(value == "horizontal") this._layout = new haxe.ui.toolkit.controls.HProgressLayout(); else if(value == "vertical") this._layout = new haxe.ui.toolkit.controls.VProgressLayout();
		return value;
	}
	,get_min: function() {
		return this._min;
	}
	,set_min: function(value) {
		if(value != this._min) {
			this._min = value;
			var changeEvent = new flash.events.Event(flash.events.Event.CHANGE);
			this.dispatchEvent(changeEvent);
			this.invalidate(1);
		}
		return value;
	}
	,get_max: function() {
		return this._max;
	}
	,set_max: function(value) {
		if(value != this._max) {
			this._max = value;
			var changeEvent = new flash.events.Event(flash.events.Event.CHANGE);
			this.dispatchEvent(changeEvent);
			this.invalidate(1);
		}
		return this._max;
	}
	,get_pos: function() {
		return this._pos;
	}
	,set_pos: function(value) {
		if(this._ready) {
			if(value < this._min) value = this._min;
			if(value > this._max) value = this._max;
		}
		if(value != this._pos) {
			this._pos = value;
			var changeEvent = new flash.events.Event(flash.events.Event.CHANGE);
			this.dispatchEvent(changeEvent);
			this.invalidate(1);
		}
		return value;
	}
	,get_pageSize: function() {
		return 0;
	}
	,set_pageSize: function(value) {
		return value;
	}
	,get_incrementSize: function() {
		return this._incrementSize;
	}
	,set_incrementSize: function(value) {
		this._incrementSize = value;
		return value;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.StateComponent.prototype.clone.call(this);
		c.set_direction(this.get_direction());
		c.set_min(this.get_min());
		c.set_max(this.get_max());
		c.set_pos(this.get_pos());
		c.set_pageSize(this.get_pageSize());
		c.set_incrementSize(this.get_incrementSize());
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.Progress();
	}
	,__class__: haxe.ui.toolkit.controls.Progress
	,__properties__: $extend(haxe.ui.toolkit.core.StateComponent.prototype.__properties__,{set_incrementSize:"set_incrementSize",get_incrementSize:"get_incrementSize",set_pageSize:"set_pageSize",get_pageSize:"get_pageSize",set_pos:"set_pos",get_pos:"get_pos",set_max:"set_max",get_max:"get_max",set_min:"set_min",get_min:"get_min",set_direction:"set_direction",get_direction:"get_direction"})
});
haxe.ui.toolkit.controls.HProgress = function() {
	haxe.ui.toolkit.controls.Progress.call(this);
	this.set_direction("horizontal");
};
$hxClasses["haxe.ui.toolkit.controls.HProgress"] = haxe.ui.toolkit.controls.HProgress;
haxe.ui.toolkit.controls.HProgress.__name__ = ["haxe","ui","toolkit","controls","HProgress"];
haxe.ui.toolkit.controls.HProgress.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.controls.HProgress.__super__ = haxe.ui.toolkit.controls.Progress;
haxe.ui.toolkit.controls.HProgress.prototype = $extend(haxe.ui.toolkit.controls.Progress.prototype,{
	clone: function() {
		var c = haxe.ui.toolkit.controls.Progress.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.HProgress();
	}
	,__class__: haxe.ui.toolkit.controls.HProgress
});
haxe.ui.toolkit.controls.Scroll = function() {
	this._direction = "vertical";
	haxe.ui.toolkit.core.StateComponent.call(this);
	this.addStates(["normal","disabled"]);
};
$hxClasses["haxe.ui.toolkit.controls.Scroll"] = haxe.ui.toolkit.controls.Scroll;
haxe.ui.toolkit.controls.Scroll.__name__ = ["haxe","ui","toolkit","controls","Scroll"];
haxe.ui.toolkit.controls.Scroll.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IDirectional];
haxe.ui.toolkit.controls.Scroll.__super__ = haxe.ui.toolkit.core.StateComponent;
haxe.ui.toolkit.controls.Scroll.prototype = $extend(haxe.ui.toolkit.core.StateComponent.prototype,{
	get_direction: function() {
		return this._direction;
	}
	,set_direction: function(value) {
		this._direction = value;
		return value;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.StateComponent.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.Scroll();
	}
	,__class__: haxe.ui.toolkit.controls.Scroll
	,__properties__: $extend(haxe.ui.toolkit.core.StateComponent.prototype.__properties__,{set_direction:"set_direction",get_direction:"get_direction"})
});
haxe.ui.toolkit.controls.HScroll = function() {
	this._hasButtons = true;
	this._scrollDirection = 0;
	this._mouseDownOffset = -1;
	this._incrementSize = 20;
	this._pageSize = 0;
	this._max = 100;
	this._min = 0;
	this._pos = 0;
	haxe.ui.toolkit.controls.Scroll.call(this);
	this._layout = new haxe.ui.toolkit.controls.HScrollLayout();
};
$hxClasses["haxe.ui.toolkit.controls.HScroll"] = haxe.ui.toolkit.controls.HScroll;
haxe.ui.toolkit.controls.HScroll.__name__ = ["haxe","ui","toolkit","controls","HScroll"];
haxe.ui.toolkit.controls.HScroll.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable,haxe.ui.toolkit.core.interfaces.IScrollable];
haxe.ui.toolkit.controls.HScroll.__super__ = haxe.ui.toolkit.controls.Scroll;
haxe.ui.toolkit.controls.HScroll.prototype = $extend(haxe.ui.toolkit.controls.Scroll.prototype,{
	preInitialize: function() {
		haxe.ui.toolkit.controls.Scroll.prototype.preInitialize.call(this);
		if(this._style != null) this._hasButtons = this._style.get_hasButtons();
	}
	,initialize: function() {
		haxe.ui.toolkit.controls.Scroll.prototype.initialize.call(this);
		if(this._hasButtons == true) {
			this._deincButton = new haxe.ui.toolkit.controls.Button();
			this._deincButton.set_width(this.get_layout().get_innerHeight());
			this._deincButton.set_percentHeight(100);
			this._deincButton.set_id("deinc");
			this._deincButton.set_styleName("left");
			this._deincButton.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onDeinc));
			this.addChild(this._deincButton);
			this._incButton = new haxe.ui.toolkit.controls.Button();
			this._incButton.set_width(this.get_layout().get_innerHeight());
			this._incButton.set_percentHeight(100);
			this._incButton.set_id("inc");
			this._incButton.set_styleName("right");
			this._incButton.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onInc));
			this.addChild(this._incButton);
		}
		this._thumb = new haxe.ui.toolkit.controls.Button();
		this._thumb.set_width(50);
		this._thumb.set_percentHeight(100);
		this._thumb.set_id("thumb");
		this._thumb.set_styleName("thumb");
		this._thumb.set_remainPressed(true);
		this._thumb.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onThumbMouseDown));
		this.addChild(this._thumb);
		this.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onMouseDown));
	}
	,_onThumbMouseDown: function(event) {
		var ptStage = new flash.geom.Point(event.stageX,event.stageY);
		this._mouseDownOffset = ptStage.x - this._thumb.get_x();
		haxe.ui.toolkit.core.Screen.get_instance().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onScreenMouseUp));
		haxe.ui.toolkit.core.Screen.get_instance().addEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this._onScreenMouseMove));
	}
	,_onScreenMouseMove: function(event) {
		var xpos = event.stageX - this._mouseDownOffset;
		var minX = 0;
		if(this._deincButton != null) minX = this._deincButton.get_width() + this.get_layout().get_spacingX();
		var maxX = this.get_layout().get_usableWidth() - this._thumb.get_width();
		if(this._deincButton != null) maxX += this._deincButton.get_width() + this.get_layout().get_spacingX();
		if(xpos < minX) xpos = minX; else if(xpos > maxX) xpos = maxX;
		var ucx = this.get_layout().get_usableWidth();
		ucx -= this._thumb.get_width();
		var m = Std["int"](this.get_max() - this.get_min());
		var v = xpos - minX;
		var newValue = this.get_min() + v / ucx * m;
		this.set_pos(newValue | 0);
	}
	,_onScreenMouseUp: function(event) {
		this._mouseDownOffset = -1;
		if(this._scrollTimer != null) this._scrollTimer.stop();
		haxe.ui.toolkit.core.Screen.get_instance().removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onScreenMouseUp));
		haxe.ui.toolkit.core.Screen.get_instance().removeEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this._onScreenMouseMove));
	}
	,_onDeinc: function(event) {
		this.deincrementValue();
		this._scrollDirection = 0;
		haxe.ui.toolkit.core.Screen.get_instance().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onScreenMouseUp));
		if(this._scrollTimer == null) {
			this._scrollTimer = new flash.utils.Timer(50,1);
			this._scrollTimer.addEventListener("timerComplete",$bind(this,this._onScrollTimerComplete));
		}
		this._scrollTimer.reset();
		this._scrollTimer.start();
	}
	,_onInc: function(event) {
		this.incrementValue();
		this._scrollDirection = 1;
		haxe.ui.toolkit.core.Screen.get_instance().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onScreenMouseUp));
		if(this._scrollTimer == null) {
			this._scrollTimer = new flash.utils.Timer(50,1);
			this._scrollTimer.addEventListener("timerComplete",$bind(this,this._onScrollTimerComplete));
		}
		this._scrollTimer.reset();
		this._scrollTimer.start();
	}
	,_onScrollTimerComplete: function(event) {
		if(this._scrollTimer != null) {
			if(this._scrollDirection == 1) this.incrementValue(); else if(this._scrollDirection == 0) this.deincrementValue();
			this._scrollTimer.reset();
			this._scrollTimer.start();
		}
	}
	,_onMouseDown: function(event) {
		var performPaging = !this._thumb.hitTest(event.stageX,event.stageY);
		if(this._deincButton != null && this._deincButton.hitTest(event.stageX,event.stageY) == true) performPaging = false;
		if(this._incButton != null && this._incButton.hitTest(event.stageX,event.stageY) == true) performPaging = false;
		if(performPaging == true) {
			if(event.localX > this._thumb.get_x()) {
				var _g = this;
				_g.set_pos(_g.get_pos() + this.get_pageSize());
			} else {
				var _g1 = this;
				_g1.set_pos(_g1.get_pos() - this.get_pageSize());
			}
		}
	}
	,get_pos: function() {
		return this._pos;
	}
	,set_pos: function(value) {
		if(value < this._min) value = this._min;
		if(value > this._max) value = this._max;
		if(value != this._pos) {
			this._pos = value;
			var changeEvent = new flash.events.Event(flash.events.Event.CHANGE);
			this.dispatchEvent(changeEvent);
			this.invalidate(1);
		}
		return value;
	}
	,get_min: function() {
		return this._min;
	}
	,set_min: function(value) {
		if(value != this._min) {
			this._min = value;
			if(this._pos < this._min) this._pos = this._min;
			this.invalidate(1);
		}
		return value;
	}
	,get_max: function() {
		return this._max;
	}
	,set_max: function(value) {
		if(value != this._max) {
			this._max = value;
			if(this._pos > this._max) this._pos = this._max;
			this.invalidate(1);
		}
		return value;
	}
	,get_pageSize: function() {
		return this._pageSize;
	}
	,set_pageSize: function(value) {
		if(value != this._pageSize) {
			this._pageSize = value;
			this.invalidate(1);
		}
		return value;
	}
	,get_incrementSize: function() {
		return this._incrementSize;
	}
	,set_incrementSize: function(value) {
		this._incrementSize = value;
		return value;
	}
	,deincrementValue: function() {
		var _g = this;
		_g.set_pos(_g.get_pos() - this._incrementSize);
	}
	,incrementValue: function() {
		var _g = this;
		_g.set_pos(_g.get_pos() + this._incrementSize);
	}
	,clone: function() {
		var c = haxe.ui.toolkit.controls.Scroll.prototype.clone.call(this);
		c.set_pos(this.get_pos());
		c.set_min(this.get_min());
		c.set_max(this.get_max());
		c.set_pageSize(this.get_pageSize());
		c.set_incrementSize(this.get_incrementSize());
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.HScroll();
	}
	,__class__: haxe.ui.toolkit.controls.HScroll
	,__properties__: $extend(haxe.ui.toolkit.controls.Scroll.prototype.__properties__,{set_incrementSize:"set_incrementSize",get_incrementSize:"get_incrementSize",set_pageSize:"set_pageSize",get_pageSize:"get_pageSize",set_max:"set_max",get_max:"get_max",set_min:"set_min",get_min:"get_min",set_pos:"set_pos",get_pos:"get_pos"})
});
haxe.ui.toolkit.controls.HScrollLayout = function() {
	haxe.ui.toolkit.layout.DefaultLayout.call(this);
};
$hxClasses["haxe.ui.toolkit.controls.HScrollLayout"] = haxe.ui.toolkit.controls.HScrollLayout;
haxe.ui.toolkit.controls.HScrollLayout.__name__ = ["haxe","ui","toolkit","controls","HScrollLayout"];
haxe.ui.toolkit.controls.HScrollLayout.__super__ = haxe.ui.toolkit.layout.DefaultLayout;
haxe.ui.toolkit.controls.HScrollLayout.prototype = $extend(haxe.ui.toolkit.layout.DefaultLayout.prototype,{
	resizeChildren: function() {
		haxe.ui.toolkit.layout.DefaultLayout.prototype.resizeChildren.call(this);
		var scroll;
		scroll = js.Boot.__cast(this.get_container() , haxe.ui.toolkit.core.interfaces.IScrollable);
		var thumb = this.get_container().findChild("thumb");
		if(thumb != null) {
			var m = scroll.get_max() - scroll.get_min();
			var ucx = this.get_usableWidth();
			var thumbWidth = scroll.get_pageSize() / m * ucx;
			if(thumbWidth < 20) thumbWidth = 20; else if(thumbWidth > ucx) thumbWidth = ucx;
			thumb.set_width(thumbWidth);
		}
	}
	,repositionChildren: function() {
		haxe.ui.toolkit.layout.DefaultLayout.prototype.repositionChildren.call(this);
		var deinc = this.get_container().findChild("deinc");
		var inc = this.get_container().findChild("inc");
		if(inc != null) inc.set_x(this.get_container().get_width() - inc.get_width() - this.get_padding().get_right());
		var scroll;
		scroll = js.Boot.__cast(this.get_container() , haxe.ui.toolkit.core.interfaces.IScrollable);
		var thumb = this.get_container().findChild("thumb");
		if(thumb != null) {
			var m = scroll.get_max() - scroll.get_min();
			var u = this.get_usableWidth();
			u -= thumb.get_width();
			var x = (scroll.get_pos() - scroll.get_min()) / m * u;
			x += this.get_padding().get_left();
			if(deinc != null) x += deinc.get_width() + this.get_spacingX();
			thumb.set_x(x);
		}
	}
	,get_usableWidth: function() {
		var ucx = this.get_innerWidth();
		var deinc = this.get_container().findChild("deinc");
		var inc = this.get_container().findChild("inc");
		if(deinc != null) ucx -= deinc.get_width() + this.get_spacingX();
		if(inc != null) ucx -= inc.get_width() + this.get_spacingX();
		return ucx;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.layout.DefaultLayout.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.HScrollLayout();
	}
	,__class__: haxe.ui.toolkit.controls.HScrollLayout
});
haxe.ui.toolkit.controls.Slider = function() {
	this._mouseDownOffset = -1;
	haxe.ui.toolkit.controls.Progress.call(this);
	this._valueBgComp.get_sprite().buttonMode = true;
	this._valueBgComp.get_sprite().useHandCursor = true;
};
$hxClasses["haxe.ui.toolkit.controls.Slider"] = haxe.ui.toolkit.controls.Slider;
haxe.ui.toolkit.controls.Slider.__name__ = ["haxe","ui","toolkit","controls","Slider"];
haxe.ui.toolkit.controls.Slider.__super__ = haxe.ui.toolkit.controls.Progress;
haxe.ui.toolkit.controls.Slider.prototype = $extend(haxe.ui.toolkit.controls.Progress.prototype,{
	initialize: function() {
		haxe.ui.toolkit.controls.Progress.prototype.initialize.call(this);
		this._thumb = new haxe.ui.toolkit.controls.Button();
		this._thumb.set_id("thumb");
		this._thumb.set_remainPressed(true);
		this._thumb.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onMouseDown));
		this.addChild(this._thumb);
		this.addEventListener(flash.events.MouseEvent.MOUSE_WHEEL,$bind(this,this._onMouseWheel));
		this.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onBackgroundMouseDown));
	}
	,get_value: function() {
		return this.get_pos();
	}
	,set_value: function(newValue) {
		this.set_pos(Std.parseFloat(newValue));
		return newValue;
	}
	,_onMouseDown: function(event) {
	}
	,_onScreenMouseMove: function(event) {
	}
	,_onScreenMouseUp: function(event) {
		this._mouseDownOffset = -1;
		haxe.ui.toolkit.core.Screen.get_instance().removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onScreenMouseUp));
		haxe.ui.toolkit.core.Screen.get_instance().removeEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this._onScreenMouseMove));
	}
	,_onBackgroundMouseDown: function(event) {
	}
	,calcPosFromCoord: function(coord) {
		return 0;
	}
	,_onMouseWheel: function(event) {
		if(event.delta != 0) {
			if(this._direction == "horizontal") {
				if(event.delta < 0) {
					var _g = this;
					_g.set_pos(_g.get_pos() + 5);
				} else if(event.delta > 0) {
					var _g1 = this;
					_g1.set_pos(_g1.get_pos() - 5);
				}
			} else if(this._direction == "vertical") {
				if(event.delta < 0) {
					var _g2 = this;
					_g2.set_pos(_g2.get_pos() - 5);
				} else if(event.delta > 0) {
					var _g3 = this;
					_g3.set_pos(_g3.get_pos() + 5);
				}
			}
		}
	}
	,clone: function() {
		var c = haxe.ui.toolkit.controls.Progress.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.Slider();
	}
	,__class__: haxe.ui.toolkit.controls.Slider
});
haxe.ui.toolkit.controls.HSlider = function() {
	haxe.ui.toolkit.controls.Slider.call(this);
	this.set_direction("horizontal");
};
$hxClasses["haxe.ui.toolkit.controls.HSlider"] = haxe.ui.toolkit.controls.HSlider;
haxe.ui.toolkit.controls.HSlider.__name__ = ["haxe","ui","toolkit","controls","HSlider"];
haxe.ui.toolkit.controls.HSlider.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.controls.HSlider.__super__ = haxe.ui.toolkit.controls.Slider;
haxe.ui.toolkit.controls.HSlider.prototype = $extend(haxe.ui.toolkit.controls.Slider.prototype,{
	_onMouseDown: function(event) {
		this.startTracking(event.stageX - this._thumb.get_stageX());
	}
	,_onScreenMouseMove: function(event) {
		var xpos = event.stageX - this.get_stageX() - this._mouseDownOffset;
		this.set_pos(Std["int"](this.calcPosFromCoord(xpos)));
	}
	,_onBackgroundMouseDown: function(event) {
		if(this._thumb.hitTest(event.stageX,event.stageY) == false) {
			var xpos = event.stageX - this.get_stageX();
			xpos -= this._thumb.get_width() / 2;
			this.set_pos(Std["int"](this.calcPosFromCoord(xpos)));
			this._thumb.set_state("down");
			this.startTracking(this._thumb.get_width() / 2);
		}
	}
	,startTracking: function(offset) {
		this._mouseDownOffset = offset;
		haxe.ui.toolkit.core.Screen.get_instance().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onScreenMouseUp));
		haxe.ui.toolkit.core.Screen.get_instance().addEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this._onScreenMouseMove));
	}
	,calcPosFromCoord: function(xpos) {
		var minX = 0;
		var maxX = this.get_layout().get_usableWidth() - this._thumb.get_width();
		if(xpos < minX) xpos = minX; else if(xpos > maxX) xpos = maxX;
		var ucx = this.get_layout().get_usableWidth();
		ucx -= this._thumb.get_width();
		var m = Std["int"](this.get_max() - this.get_min());
		var v = xpos - minX;
		var newValue = this.get_min() + v / ucx * m;
		return newValue;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.controls.Slider.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.HSlider();
	}
	,__class__: haxe.ui.toolkit.controls.HSlider
});
haxe.ui.toolkit.controls.Image = function() {
	this._autoDisposeBitmapData = false;
	haxe.ui.toolkit.core.Component.call(this);
	this.set_autoSize(true);
};
$hxClasses["haxe.ui.toolkit.controls.Image"] = haxe.ui.toolkit.controls.Image;
haxe.ui.toolkit.controls.Image.__name__ = ["haxe","ui","toolkit","controls","Image"];
haxe.ui.toolkit.controls.Image.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.controls.Image.__super__ = haxe.ui.toolkit.core.Component;
haxe.ui.toolkit.controls.Image.prototype = $extend(haxe.ui.toolkit.core.Component.prototype,{
	initialize: function() {
		haxe.ui.toolkit.core.Component.prototype.initialize.call(this);
		if(this._bmp != null) {
			this.get_sprite().addChild(this._bmp);
			if(this.get_height() > this._bmp.get_height()) this._bmp.set_y(Std["int"](this.get_height() / 2 - this._bmp.get_height() / 2));
		}
	}
	,dispose: function() {
		if(this._bmp != null) {
			if(this._autoDisposeBitmapData == true) this._bmp.bitmapData.dispose();
			this.get_sprite().removeChild(this._bmp);
			this._bmp = null;
		}
		haxe.ui.toolkit.core.Component.prototype.dispose.call(this);
	}
	,invalidate: function(type,recursive) {
		if(recursive == null) recursive = false;
		if(type == null) type = 1118481;
		haxe.ui.toolkit.core.Component.prototype.invalidate.call(this,type,recursive);
		if((type & 256) == 256) {
			if(this._stretch && this._bmp != null) {
				this._bmp.set_width(this.get_width());
				this._bmp.set_height(this.get_height());
			}
		}
	}
	,get_value: function() {
		return this.get_resource();
	}
	,set_value: function(newValue) {
		this.set_resource(newValue);
		return newValue;
	}
	,get_resource: function() {
		return this._resource;
	}
	,set_resource: function(value) {
		if(this._bmp != null) {
			if(this._autoDisposeBitmapData == true) this._bmp.bitmapData.dispose();
			this.get_sprite().removeChild(this._bmp);
			this._bmp = null;
		}
		var bmpData = haxe.ui.toolkit.resources.ResourceManager.get_instance().getBitmapData(value);
		if(bmpData != null) {
			this._bmp = new flash.display.Bitmap(bmpData);
			this.get_sprite().addChild(this._bmp);
			if(this.get_autoSize() == true) {
				this.set_width(bmpData.width);
				this.set_height(bmpData.height);
			}
		}
		this._resource = value;
		return value;
	}
	,get_stretch: function() {
		return this._stretch;
	}
	,set_stretch: function(value) {
		if(this._stretch == value) return value;
		this._stretch = value;
		this.invalidate(256);
		return value;
	}
	,get_autoDisposeBitmapData: function() {
		return this._autoDisposeBitmapData;
	}
	,set_autoDisposeBitmapData: function(value) {
		this._autoDisposeBitmapData = value;
		return value;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.Component.prototype.clone.call(this);
		c.set_resource(this.get_resource());
		c.set_stretch(this.get_stretch());
		c.set_autoDisposeBitmapData(this.get_autoDisposeBitmapData());
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.Image();
	}
	,__class__: haxe.ui.toolkit.controls.Image
	,__properties__: $extend(haxe.ui.toolkit.core.Component.prototype.__properties__,{set_autoDisposeBitmapData:"set_autoDisposeBitmapData",get_autoDisposeBitmapData:"get_autoDisposeBitmapData",set_stretch:"set_stretch",get_stretch:"get_stretch",set_resource:"set_resource",get_resource:"get_resource"})
});
haxe.ui.toolkit.controls.Menu = function() {
	haxe.ui.toolkit.containers.VBox.call(this);
	this._subMenus = new haxe.ds.ObjectMap();
};
$hxClasses["haxe.ui.toolkit.controls.Menu"] = haxe.ui.toolkit.controls.Menu;
haxe.ui.toolkit.controls.Menu.__name__ = ["haxe","ui","toolkit","controls","Menu"];
haxe.ui.toolkit.controls.Menu.__super__ = haxe.ui.toolkit.containers.VBox;
haxe.ui.toolkit.controls.Menu.prototype = $extend(haxe.ui.toolkit.containers.VBox.prototype,{
	initialize: function() {
		haxe.ui.toolkit.containers.VBox.prototype.initialize.call(this);
		if(this.get_rootMenu() == this) this.get_root().addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onRootMouseDown));
	}
	,addChild: function(child) {
		var r = null;
		if(js.Boot.__instanceof(child,haxe.ui.toolkit.controls.MenuItem)) {
			(js.Boot.__cast(child , haxe.ui.toolkit.controls.MenuItem)).addEventListener(flash.events.MouseEvent.MOUSE_OVER,this.buildMouseOverFunction(this.get_numChildren()));
			(js.Boot.__cast(child , haxe.ui.toolkit.controls.MenuItem)).addEventListener(flash.events.MouseEvent.CLICK,this.buildMouseClickFunction(this.get_numChildren()));
			r = haxe.ui.toolkit.containers.VBox.prototype.addChild.call(this,child);
		} else if(js.Boot.__instanceof(child,haxe.ui.toolkit.controls.Menu)) {
			var item = new haxe.ui.toolkit.controls.MenuItem();
			(js.Boot.__cast(child , haxe.ui.toolkit.controls.Menu))._parentMenu = this;
			item.set_text((js.Boot.__cast(child , haxe.ui.toolkit.controls.Menu)).get_text());
			item.set_styleName("expandable");
			var value;
			value = js.Boot.__cast(child , haxe.ui.toolkit.controls.Menu);
			this._subMenus.set(item,value);
			this.addChild(item);
		}
		return r;
	}
	,_onRootMouseDown: function(event) {
		var mouseIn = false;
		var menu = this.get_rootMenu();
		while(menu != null) {
			if(menu.hitTest(event.stageX,event.stageY) == true) {
				mouseIn = true;
				break;
			}
			menu = menu._currentSubMenu;
		}
		if(mouseIn == false) this.get_rootMenu().hideSubMenus();
	}
	,buildMouseOverFunction: function(index) {
		var _g = this;
		return function(event) {
			_g.mouseOverItem(index);
		};
	}
	,buildMouseClickFunction: function(index) {
		var _g = this;
		return function(event) {
			_g.mouseClickItem(index);
		};
	}
	,mouseClickItem: function(index) {
		if(this.getChildAt(index) == null) return;
		var item;
		item = js.Boot.__cast(this.getChildAt(index) , haxe.ui.toolkit.controls.MenuItem);
		var subMenu = this._subMenus.h[item.__id__];
		if(subMenu == null) {
			this.get_rootMenu().hideSubMenus();
			var e = new haxe.ui.toolkit.events.MenuEvent(haxe.ui.toolkit.events.MenuEvent.SELECT,item);
			this.get_rootMenu().dispatchEvent(e);
		}
	}
	,mouseOverItem: function(index) {
		if(this.getChildAt(index) == null) return;
		var item;
		item = js.Boot.__cast(this.getChildAt(index) , haxe.ui.toolkit.controls.MenuItem);
		var subMenu = this._subMenus.h[item.__id__];
		if(this._currentItem != null) {
			this._currentItem.set_selected(false);
			this._currentItem = null;
		}
		if(this._currentSubMenu != null && this._currentSubMenu != subMenu) this.hideSubMenus();
		if(subMenu != null) {
			this.showSubMenu(item);
			this._currentItem = item;
		} else {
		}
	}
	,showSubMenu: function(item) {
		item.set_selected(true);
		var subMenu = this._subMenus.h[item.__id__];
		if(subMenu != null && subMenu != this._currentSubMenu) {
			subMenu.set_x(item.get_stageX() + item.get_width());
			subMenu.set_y(item.get_stageY());
			this.get_root().addChild(subMenu);
			this._currentSubMenu = subMenu;
			var transition = haxe.ui.toolkit.core.Toolkit.getTransitionForClass(haxe.ui.toolkit.controls.Menu);
			if(transition == "slide") {
				subMenu.set_clipHeight(0);
				subMenu.get_sprite().set_alpha(1);
				subMenu.set_visible(true);
				motion.Actuate.tween(subMenu,.1,{ clipHeight : subMenu.get_height()},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
					subMenu.clearClip();
				});
			} else if(transition == "fade") {
				subMenu.get_sprite().set_alpha(0);
				subMenu.set_visible(true);
				motion.Actuate.tween(subMenu.get_sprite(),.1,{ alpha : 1},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
				});
			} else {
				subMenu.get_sprite().set_alpha(1);
				subMenu.set_visible(true);
			}
			var e = new haxe.ui.toolkit.events.MenuEvent(haxe.ui.toolkit.events.MenuEvent.OPEN,item);
			e.menu = subMenu;
			this.get_rootMenu().dispatchEvent(e);
		}
	}
	,hideSubMenus: function() {
		var _g = this;
		if(this._currentSubMenu == null) return;
		var ref = this._currentSubMenu;
		ref.hideSubMenus();
		var transition = haxe.ui.toolkit.core.Toolkit.getTransitionForClass(haxe.ui.toolkit.controls.Menu);
		if(transition == "slide") {
			this._currentSubMenu.get_sprite().set_alpha(1);
			motion.Actuate.tween(ref,.1,{ clipHeight : 0},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
				ref.set_visible(false);
				ref.clearClip();
				_g.get_root().removeChild(ref,false);
				_g._currentSubMenu = null;
				ref.hideSubMenus();
			});
		} else if(transition == "fade") motion.Actuate.tween(ref.get_sprite(),.1,{ alpha : 0},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
			ref.set_visible(false);
			_g.get_root().removeChild(ref,false);
			_g._currentSubMenu = null;
			ref.hideSubMenus();
		}); else {
			ref.get_sprite().set_alpha(1);
			ref.set_visible(false);
			this.get_root().removeChild(ref,false);
			this._currentSubMenu = null;
			ref.hideSubMenus();
		}
		if(this._currentItem != null) {
			this._currentItem.set_selected(false);
			this._currentItem = null;
		}
	}
	,get_currentSubMenu: function() {
		return this._currentSubMenu;
	}
	,get_parentMenu: function() {
		return this._parentMenu;
	}
	,get_rootMenu: function() {
		var menu = this;
		while(menu._parentMenu != null) menu = menu._parentMenu;
		return menu;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.containers.VBox.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.Menu();
	}
	,__class__: haxe.ui.toolkit.controls.Menu
	,__properties__: $extend(haxe.ui.toolkit.containers.VBox.prototype.__properties__,{get_rootMenu:"get_rootMenu",get_parentMenu:"get_parentMenu",get_currentSubMenu:"get_currentSubMenu"})
});
haxe.ui.toolkit.controls.MenuButton = function() {
	haxe.ui.toolkit.controls.Button.call(this);
	this.set_toggle(true);
	this.set_allowSelection(false);
};
$hxClasses["haxe.ui.toolkit.controls.MenuButton"] = haxe.ui.toolkit.controls.MenuButton;
haxe.ui.toolkit.controls.MenuButton.__name__ = ["haxe","ui","toolkit","controls","MenuButton"];
haxe.ui.toolkit.controls.MenuButton._currentMenuButton = null;
haxe.ui.toolkit.controls.MenuButton.__super__ = haxe.ui.toolkit.controls.Button;
haxe.ui.toolkit.controls.MenuButton.prototype = $extend(haxe.ui.toolkit.controls.Button.prototype,{
	initialize: function() {
		haxe.ui.toolkit.controls.Button.prototype.initialize.call(this);
		if(this._menu != null) {
			this._menu.addEventListener(haxe.ui.toolkit.events.MenuEvent.SELECT,$bind(this,this._onMenuSelect));
			this._menu.addEventListener(haxe.ui.toolkit.events.MenuEvent.OPEN,$bind(this,this._onMenuOpen));
		}
	}
	,addChild: function(child) {
		var r = null;
		if(js.Boot.__instanceof(child,haxe.ui.toolkit.controls.MenuItem)) {
			if(this._menu == null) {
				this._menu = new haxe.ui.toolkit.controls.Menu();
				this._menu.set_root(this.get_root());
			}
			this._menu.addChild(child);
		} else if(js.Boot.__instanceof(child,haxe.ui.toolkit.controls.Menu)) this._menu = js.Boot.__cast(child , haxe.ui.toolkit.controls.Menu); else r = haxe.ui.toolkit.controls.Button.prototype.addChild.call(this,child);
		return r;
	}
	,_onMouseOver: function(event) {
		haxe.ui.toolkit.controls.Button.prototype._onMouseOver.call(this,event);
		if(haxe.ui.toolkit.controls.MenuButton._currentMenuButton != null && haxe.ui.toolkit.controls.MenuButton._currentMenuButton != this) {
			haxe.ui.toolkit.controls.MenuButton._currentMenuButton.hideMenu();
			this.showMenu();
		}
	}
	,_onMouseClick: function(event) {
		if(this.get_root().indexOfChild(this._menu) == -1) this.showMenu(); else this.hideMenu();
	}
	,set_selected: function(value) {
		this._selected = value;
		if(this._selected == true) this.set_state("down"); else this.set_state("normal");
		return value;
	}
	,_onRootMouseDown: function(event) {
		var mouseIn = false;
		if(this.hitTest(event.stageX,event.stageY) == true) mouseIn = true;
		if(this._menu != null && this._menu.hitTest(event.stageX,event.stageY) == true) mouseIn = true;
		if(this._menu != null && mouseIn == false) {
			var menu = this._menu.get_rootMenu();
			while(menu != null) {
				if(menu.hitTest(event.stageX,event.stageY) == true) {
					mouseIn = true;
					break;
				}
				menu = menu.get_currentSubMenu();
			}
		}
		if(this._menu != null && mouseIn == false) this.hideMenu();
	}
	,_onMenuSelect: function(event) {
		this.hideMenu();
		var e = new haxe.ui.toolkit.events.MenuEvent(haxe.ui.toolkit.events.MenuEvent.SELECT,event.menuItem);
		this.dispatchEvent(e);
	}
	,_onMenuOpen: function(event) {
		var e = new haxe.ui.toolkit.events.MenuEvent(haxe.ui.toolkit.events.MenuEvent.OPEN);
		e.menu = event.menu;
		this.dispatchEvent(e);
	}
	,showMenu: function() {
		var _g = this;
		this.set_selected(true);
		this._menu.set_x(this.get_stageX() - this.get_root().get_stageX());
		this._menu.set_y(this.get_stageY() + this.get_height() - this.get_root().get_stageY());
		this.get_root().addChild(this._menu);
		this.get_root().addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onRootMouseDown));
		haxe.ui.toolkit.controls.MenuButton._currentMenuButton = this;
		var transition = haxe.ui.toolkit.core.Toolkit.getTransitionForClass(haxe.ui.toolkit.controls.Menu);
		if(transition == "slide") {
			this._menu.set_clipHeight(0);
			this._menu.get_sprite().set_alpha(1);
			this._menu.set_visible(true);
			motion.Actuate.tween(this._menu,.1,{ clipHeight : this._menu.get_height()},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
				_g._menu.clearClip();
			});
		} else if(transition == "fade") {
			this._menu.get_sprite().set_alpha(0);
			this._menu.set_visible(true);
			motion.Actuate.tween(this._menu.get_sprite(),.1,{ alpha : 1},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
			});
		} else {
			this._menu.get_sprite().set_alpha(1);
			this._menu.set_visible(true);
		}
		var event = new haxe.ui.toolkit.events.MenuEvent(haxe.ui.toolkit.events.MenuEvent.OPEN);
		event.menu = this._menu;
		this.dispatchEvent(event);
	}
	,hideMenu: function() {
		var _g = this;
		this.set_selected(false);
		this._menu.hideSubMenus();
		this.get_root().removeEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onRootMouseDown));
		var transition = haxe.ui.toolkit.core.Toolkit.getTransitionForClass(haxe.ui.toolkit.controls.Menu);
		if(transition == "slide") {
			this._menu.get_sprite().set_alpha(1);
			motion.Actuate.tween(this._menu,.1,{ clipHeight : 0},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
				_g._menu.set_visible(false);
				_g._menu.clearClip();
				_g.get_root().removeChild(_g._menu,false);
			});
		} else if(transition == "fade") motion.Actuate.tween(this._menu.get_sprite(),.1,{ alpha : 0},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
			_g._menu.set_visible(false);
			_g.get_root().removeChild(_g._menu,false);
		}); else {
			this._menu.get_sprite().set_alpha(1);
			this._menu.set_visible(false);
			this.get_root().removeChild(this._menu,false);
		}
		haxe.ui.toolkit.controls.MenuButton._currentMenuButton = null;
		this.set_selected(false);
	}
	,clone: function() {
		var c = haxe.ui.toolkit.controls.Button.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.MenuButton();
	}
	,__class__: haxe.ui.toolkit.controls.MenuButton
});
haxe.ui.toolkit.controls.MenuItem = function() {
	haxe.ui.toolkit.controls.Button.call(this);
	this.set_toggle(true);
	this.set_allowSelection(false);
};
$hxClasses["haxe.ui.toolkit.controls.MenuItem"] = haxe.ui.toolkit.controls.MenuItem;
haxe.ui.toolkit.controls.MenuItem.__name__ = ["haxe","ui","toolkit","controls","MenuItem"];
haxe.ui.toolkit.controls.MenuItem.__super__ = haxe.ui.toolkit.controls.Button;
haxe.ui.toolkit.controls.MenuItem.prototype = $extend(haxe.ui.toolkit.controls.Button.prototype,{
	set_selected: function(value) {
		this._selected = value;
		if(this._selected == true) this.set_state("down"); else this.set_state("normal");
		return value;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.controls.Button.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.MenuItem();
	}
	,__class__: haxe.ui.toolkit.controls.MenuItem
});
haxe.ui.toolkit.controls.OptionBox = function() {
	haxe.ui.toolkit.core.Component.call(this);
	this.get_sprite().buttonMode = true;
	this.get_sprite().useHandCursor = true;
	if(haxe.ui.toolkit.controls.OptionBox._groups == null) haxe.ui.toolkit.controls.OptionBox._groups = new haxe.ds.StringMap();
	this._value = new haxe.ui.toolkit.controls.OptionBoxValue();
	this._value.set_interactive(false);
	this._label = new haxe.ui.toolkit.controls.Text();
	this._layout = new haxe.ui.toolkit.layout.HorizontalLayout();
	this._autoSize = true;
};
$hxClasses["haxe.ui.toolkit.controls.OptionBox"] = haxe.ui.toolkit.controls.OptionBox;
haxe.ui.toolkit.controls.OptionBox.__name__ = ["haxe","ui","toolkit","controls","OptionBox"];
haxe.ui.toolkit.controls.OptionBox.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.controls.OptionBox._groups = null;
haxe.ui.toolkit.controls.OptionBox.optionInGroup = function(value,option) {
	var exists = false;
	var arr = haxe.ui.toolkit.controls.OptionBox._groups.get(value);
	if(arr != null) {
		var _g = 0;
		while(_g < arr.length) {
			var test = arr[_g];
			++_g;
			if(test == option) {
				exists = true;
				break;
			}
		}
	}
	return exists;
};
haxe.ui.toolkit.controls.OptionBox.__super__ = haxe.ui.toolkit.core.Component;
haxe.ui.toolkit.controls.OptionBox.prototype = $extend(haxe.ui.toolkit.core.Component.prototype,{
	initialize: function() {
		var _g = this;
		haxe.ui.toolkit.core.Component.prototype.initialize.call(this);
		this._value.set_verticalAlign("center");
		this.addChild(this._value);
		this.addChild(this._label);
		this.addEventListener(flash.events.MouseEvent.CLICK,function(e) {
			if(_g.get_selected() == false) _g.set_selected(!_g.get_selected());
		});
	}
	,get_text: function() {
		return this._label.get_text();
	}
	,set_text: function(value) {
		value = haxe.ui.toolkit.core.Component.prototype.set_text.call(this,value);
		this._label.set_text(value);
		return value;
	}
	,get_selected: function() {
		return this._value.get_value() == "selected";
	}
	,set_selected: function(value) {
		if(this.get_selected() == value) return value;
		this._value.set_value(value == true?"selected":"unselected");
		if(this._group != null && value == true) {
			var arr = haxe.ui.toolkit.controls.OptionBox._groups.get(this._group);
			if(arr != null) {
				var _g = 0;
				while(_g < arr.length) {
					var option = arr[_g];
					++_g;
					if(option != this) option.set_selected(false);
				}
			}
		}
		var event = new flash.events.Event(flash.events.Event.CHANGE);
		this.dispatchEvent(event);
		return value;
	}
	,get_group: function() {
		return this._group;
	}
	,set_group: function(value) {
		if(value != null) {
			var arr = haxe.ui.toolkit.controls.OptionBox._groups.get(value);
			if(arr != null) HxOverrides.remove(arr,this);
		}
		this._group = value;
		var arr1 = haxe.ui.toolkit.controls.OptionBox._groups.get(value);
		if(arr1 == null) arr1 = new Array();
		if(haxe.ui.toolkit.controls.OptionBox.optionInGroup(value,this) == false) arr1.push(this);
		haxe.ui.toolkit.controls.OptionBox._groups.set(value,arr1);
		return value;
	}
	,applyStyle: function() {
		haxe.ui.toolkit.core.Component.prototype.applyStyle.call(this);
		if(this._label != null) {
			var labelStyle = new haxe.ui.toolkit.style.Style();
			if(this._style != null) {
				labelStyle.set_fontName(this._style.get_fontName());
				labelStyle.set_fontSize(this._style.get_fontSize());
				labelStyle.set_fontEmbedded(this._style.get_fontEmbedded());
				labelStyle.set_color(this._style.get_color());
			}
			this._label.set_style(labelStyle);
		}
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.Component.prototype.clone.call(this);
		c.set_selected(this.get_selected());
		c.set_group(this.get_group());
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.OptionBox();
	}
	,__class__: haxe.ui.toolkit.controls.OptionBox
	,__properties__: $extend(haxe.ui.toolkit.core.Component.prototype.__properties__,{set_group:"set_group",get_group:"get_group",set_selected:"set_selected",get_selected:"get_selected"})
});
haxe.ui.toolkit.controls.OptionBoxValue = function() {
	haxe.ui.toolkit.controls.Value.call(this);
	this._value = "unselected";
	this.addValue("selected");
	this.addValue("unselected");
};
$hxClasses["haxe.ui.toolkit.controls.OptionBoxValue"] = haxe.ui.toolkit.controls.OptionBoxValue;
haxe.ui.toolkit.controls.OptionBoxValue.__name__ = ["haxe","ui","toolkit","controls","OptionBoxValue"];
haxe.ui.toolkit.controls.OptionBoxValue.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.controls.OptionBoxValue.__super__ = haxe.ui.toolkit.controls.Value;
haxe.ui.toolkit.controls.OptionBoxValue.prototype = $extend(haxe.ui.toolkit.controls.Value.prototype,{
	clone: function() {
		var c = haxe.ui.toolkit.controls.Value.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.OptionBoxValue();
	}
	,__class__: haxe.ui.toolkit.controls.OptionBoxValue
});
haxe.ui.toolkit.controls.HProgressLayout = function() {
	haxe.ui.toolkit.layout.DefaultLayout.call(this);
};
$hxClasses["haxe.ui.toolkit.controls.HProgressLayout"] = haxe.ui.toolkit.controls.HProgressLayout;
haxe.ui.toolkit.controls.HProgressLayout.__name__ = ["haxe","ui","toolkit","controls","HProgressLayout"];
haxe.ui.toolkit.controls.HProgressLayout.__super__ = haxe.ui.toolkit.layout.DefaultLayout;
haxe.ui.toolkit.controls.HProgressLayout.prototype = $extend(haxe.ui.toolkit.layout.DefaultLayout.prototype,{
	resizeChildren: function() {
		haxe.ui.toolkit.layout.DefaultLayout.prototype.resizeChildren.call(this);
		var background = this.get_container().findChild("background",haxe.ui.toolkit.core.Component);
		var value = null;
		if(background != null) value = background.findChild("value");
		var scroll;
		scroll = js.Boot.__cast(this.get_container() , haxe.ui.toolkit.core.interfaces.IScrollable);
		if(value != null) {
			var m = scroll.get_max() - scroll.get_min();
			var ucx = this.get_usableWidth();
			var thumb = this.get_container().findChild("thumb");
			if(thumb != null) ucx -= thumb.get_width();
			value.set_percentWidth(-1);
			var cx = scroll.get_pos() / m * ucx;
			if(cx < 0) cx = 0; else if(cx > ucx) cx = ucx;
			if(thumb != null) cx += thumb.get_width() / 2;
			if(cx == 0) value.set_visible(false); else {
				value.set_width(cx);
				value.set_visible(true);
			}
		}
	}
	,repositionChildren: function() {
		haxe.ui.toolkit.layout.DefaultLayout.prototype.repositionChildren.call(this);
		var background = this.get_container().findChild("background",haxe.ui.toolkit.core.Component);
		var value = null;
		if(background != null) {
			background.set_y(this.get_container().get_height() / 2 - background.get_height() / 2);
			value = background.findChild("value");
		}
		var scroll;
		scroll = js.Boot.__cast(this.get_container() , haxe.ui.toolkit.core.interfaces.IScrollable);
		if(value != null) {
			var thumb = this.get_container().findChild("thumb");
			if(thumb != null) {
				var xpos = value.get_x() + value.get_width() - thumb.get_width() / 2;
				thumb.set_x(xpos | 0);
			}
		}
	}
	,clone: function() {
		var c = haxe.ui.toolkit.layout.DefaultLayout.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.HProgressLayout();
	}
	,__class__: haxe.ui.toolkit.controls.HProgressLayout
});
haxe.ui.toolkit.controls.VProgressLayout = function() {
	haxe.ui.toolkit.layout.DefaultLayout.call(this);
};
$hxClasses["haxe.ui.toolkit.controls.VProgressLayout"] = haxe.ui.toolkit.controls.VProgressLayout;
haxe.ui.toolkit.controls.VProgressLayout.__name__ = ["haxe","ui","toolkit","controls","VProgressLayout"];
haxe.ui.toolkit.controls.VProgressLayout.__super__ = haxe.ui.toolkit.layout.DefaultLayout;
haxe.ui.toolkit.controls.VProgressLayout.prototype = $extend(haxe.ui.toolkit.layout.DefaultLayout.prototype,{
	resizeChildren: function() {
		haxe.ui.toolkit.layout.DefaultLayout.prototype.resizeChildren.call(this);
		var background = this.get_container().findChild("background",haxe.ui.toolkit.core.Component);
		var value = null;
		if(background != null) value = background.findChild("value");
		var scroll;
		scroll = js.Boot.__cast(this.get_container() , haxe.ui.toolkit.core.interfaces.IScrollable);
		if(value != null) {
			var m = scroll.get_max() - scroll.get_min();
			var ucy = this.get_usableHeight();
			var thumb = this.get_container().findChild("thumb");
			if(thumb != null) ucy -= thumb.get_height();
			value.set_percentHeight(-1);
			var cy = scroll.get_pos() / m * ucy;
			if(cy < 0) cy = 0; else if(cy > ucy) cy = ucy;
			if(thumb != null) cy += thumb.get_height() / 2;
			if(cy == 0) value.set_visible(false); else {
				value.set_height(cy);
				value.set_visible(true);
			}
		}
	}
	,repositionChildren: function() {
		haxe.ui.toolkit.layout.DefaultLayout.prototype.repositionChildren.call(this);
		var background = this.get_container().findChild("background",haxe.ui.toolkit.core.Component);
		var value = null;
		if(background != null) {
			background.set_x(this.get_container().get_width() / 2 - background.get_width() / 2);
			value = background.findChild("value");
		}
		var scroll;
		scroll = js.Boot.__cast(this.get_container() , haxe.ui.toolkit.core.interfaces.IScrollable);
		if(value != null) {
			var ucy = this.get_usableHeight();
			value.set_y(ucy - value.get_height() - background.get_layout().get_padding().get_bottom());
			var thumb = this.get_container().findChild("thumb");
			if(thumb != null) {
				var ypos = value.get_y() - thumb.get_height() / 2;
				thumb.set_y(ypos | 0);
			}
		}
	}
	,clone: function() {
		var c = haxe.ui.toolkit.layout.DefaultLayout.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.VProgressLayout();
	}
	,__class__: haxe.ui.toolkit.controls.VProgressLayout
});
haxe.ui.toolkit.controls.Spacer = function() {
	haxe.ui.toolkit.core.Component.call(this);
};
$hxClasses["haxe.ui.toolkit.controls.Spacer"] = haxe.ui.toolkit.controls.Spacer;
haxe.ui.toolkit.controls.Spacer.__name__ = ["haxe","ui","toolkit","controls","Spacer"];
haxe.ui.toolkit.controls.Spacer.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.controls.Spacer.__super__ = haxe.ui.toolkit.core.Component;
haxe.ui.toolkit.controls.Spacer.prototype = $extend(haxe.ui.toolkit.core.Component.prototype,{
	clone: function() {
		var c = haxe.ui.toolkit.core.Component.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.Spacer();
	}
	,__class__: haxe.ui.toolkit.controls.Spacer
});
haxe.ui.toolkit.controls.TabBar = function() {
	this._selectedIndex = -1;
	haxe.ui.toolkit.containers.ScrollView.call(this);
	this.set_autoSize(false);
	this._scrollSensitivity = 5;
	this._showHScroll = this._showVScroll = false;
	this._content = new haxe.ui.toolkit.containers.HBox();
	this._content.set_percentHeight(100);
	this.addChild(this._content);
};
$hxClasses["haxe.ui.toolkit.controls.TabBar"] = haxe.ui.toolkit.controls.TabBar;
haxe.ui.toolkit.controls.TabBar.__name__ = ["haxe","ui","toolkit","controls","TabBar"];
haxe.ui.toolkit.controls.TabBar.__super__ = haxe.ui.toolkit.containers.ScrollView;
haxe.ui.toolkit.controls.TabBar.prototype = $extend(haxe.ui.toolkit.containers.ScrollView.prototype,{
	initialize: function() {
		haxe.ui.toolkit.containers.ScrollView.prototype.initialize.call(this);
	}
	,get_selectedIndex: function() {
		return this._selectedIndex;
	}
	,set_selectedIndex: function(value) {
		if(value != this._selectedIndex) {
			var _g1 = 0;
			var _g = this._content.get_children().length;
			while(_g1 < _g) {
				var n = _g1++;
				var button;
				button = js.Boot.__cast(this._content.get_children()[n] , haxe.ui.toolkit.controls.Button);
				if(n == value) button.set_selected(true); else button.set_selected(false);
			}
			this._selectedIndex = value;
			var event = new flash.events.Event(flash.events.Event.CHANGE);
			this.dispatchEvent(event);
		}
		return value;
	}
	,get_numTabs: function() {
		return this._content.get_numChildren();
	}
	,addTab: function(text) {
		var button = new haxe.ui.toolkit.controls.Button();
		button.set_text(text);
		button.set_toggle(true);
		button.set_id("tabButton");
		button.set_allowSelection(false);
		this._content.addChild(button);
		button.set_selected(this._content.get_children().length - 1 == this._selectedIndex);
		button.addEventListener("haxeui_" + "click",$bind(this,this.tabButtonClick),false,1);
		button.addEventListener("haxeui_" + "glyphClick",$bind(this,this.tabGlyphClick));
		return button;
	}
	,removeTab: function(index) {
		this._content.removeChildAt(index);
		var newIndex = this.get_selectedIndex();
		if(newIndex > this._content.get_numChildren() - 1) newIndex = this._content.get_numChildren() - 1;
		this.set_selectedIndex(-1);
		this.set_selectedIndex(newIndex);
	}
	,getTabButton: function(index) {
		return this._content.getChildAt(index);
	}
	,removeAllTabs: function() {
		this._content.removeAllChildren();
		this._selectedIndex = -1;
	}
	,setTabText: function(index,text) {
		var button;
		button = js.Boot.__cast(this._content.getChildAt(index) , haxe.ui.toolkit.controls.Button);
		button.set_text(text);
	}
	,tabButtonClick: function(event) {
		this.set_selectedIndex(this._content.indexOfChild(event.displayObject));
	}
	,tabGlyphClick: function(event) {
		var newEvent = new haxe.ui.toolkit.events.UIEvent("haxeui_" + "glyphClick");
		newEvent.data = this._content.indexOfChild(event.displayObject);
		this.dispatchEvent(newEvent);
	}
	,clone: function() {
		var c = haxe.ui.toolkit.containers.ScrollView.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.TabBar();
	}
	,__class__: haxe.ui.toolkit.controls.TabBar
	,__properties__: $extend(haxe.ui.toolkit.containers.ScrollView.prototype.__properties__,{get_numTabs:"get_numTabs",set_selectedIndex:"set_selectedIndex",get_selectedIndex:"get_selectedIndex"})
});
haxe.ui.toolkit.controls.Text = function() {
	haxe.ui.toolkit.core.StateComponent.call(this);
	this._valign = "center";
	this.set_autoSize(true);
	this._textDisplay = new haxe.ui.toolkit.text.TextDisplay();
	this._textDisplay.set_text("");
};
$hxClasses["haxe.ui.toolkit.controls.Text"] = haxe.ui.toolkit.controls.Text;
haxe.ui.toolkit.controls.Text.__name__ = ["haxe","ui","toolkit","controls","Text"];
haxe.ui.toolkit.controls.Text.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.controls.Text.__super__ = haxe.ui.toolkit.core.StateComponent;
haxe.ui.toolkit.controls.Text.prototype = $extend(haxe.ui.toolkit.core.StateComponent.prototype,{
	initialize: function() {
		haxe.ui.toolkit.core.StateComponent.prototype.initialize.call(this);
		this.get_sprite().addChild(this._textDisplay.get_display());
		this._textDisplay.set_text(this.get_text());
		if(this.get_autoSize() == true) {
			if(this.get_width() == 0) this.set_width(this._textDisplay.get_display().get_width());
			if(this.get_height() == 0) this.set_height(this._textDisplay.get_display().get_height());
		}
	}
	,dispose: function() {
		if(this.get_sprite().contains(this._textDisplay.get_display())) this.get_sprite().removeChild(this._textDisplay.get_display());
		haxe.ui.toolkit.core.StateComponent.prototype.dispose.call(this);
	}
	,get_text: function() {
		return this._textDisplay.get_text();
	}
	,set_text: function(value) {
		value = haxe.ui.toolkit.core.StateComponent.prototype.set_text.call(this,value);
		this._textDisplay.set_text(value);
		if(this.get_autoSize() == true) {
			this.set_width(this._textDisplay.get_display().get_width());
			this.set_height(this._textDisplay.get_display().get_height());
		}
		return value;
	}
	,set_width: function(value) {
		haxe.ui.toolkit.core.StateComponent.prototype.set_width.call(this,value);
		this._textDisplay.get_display().set_width(value);
		this._textDisplay.set_text(this.get_text());
		this.set_height(this._textDisplay.get_display().get_height());
		return value;
	}
	,applyStyle: function() {
		haxe.ui.toolkit.core.StateComponent.prototype.applyStyle.call(this);
		if(this._textDisplay != null) {
			this._textDisplay.set_style(this.get_style());
			if(this.get_autoSize() == true) {
				this.set_width(this._textDisplay.get_display().get_width());
				this.set_height(this._textDisplay.get_display().get_height());
			}
		}
	}
	,get_multiline: function() {
		return this._textDisplay.get_multiline();
	}
	,set_multiline: function(value) {
		this._textDisplay.set_multiline(value);
		return value;
	}
	,get_wrapLines: function() {
		return this._textDisplay.get_wrapLines();
	}
	,set_wrapLines: function(value) {
		this._textDisplay.set_wrapLines(value);
		return value;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.StateComponent.prototype.clone.call(this);
		c.set_multiline(this.get_multiline());
		c.set_wrapLines(this.get_wrapLines());
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.Text();
	}
	,__class__: haxe.ui.toolkit.controls.Text
	,__properties__: $extend(haxe.ui.toolkit.core.StateComponent.prototype.__properties__,{set_wrapLines:"set_wrapLines",get_wrapLines:"get_wrapLines",set_multiline:"set_multiline",get_multiline:"get_multiline"})
});
haxe.ui.toolkit.controls.TextInput = function() {
	haxe.ui.toolkit.core.StateComponent.call(this);
	this.addStates(["normal","disabled"]);
	this._layout = new haxe.ui.toolkit.controls.TextInputLayout();
	this._textDisplay = new haxe.ui.toolkit.text.TextDisplay();
	this._textDisplay.set_interactive(true);
	this._textDisplay.set_text("");
};
$hxClasses["haxe.ui.toolkit.controls.TextInput"] = haxe.ui.toolkit.controls.TextInput;
haxe.ui.toolkit.controls.TextInput.__name__ = ["haxe","ui","toolkit","controls","TextInput"];
haxe.ui.toolkit.controls.TextInput.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.controls.TextInput.__super__ = haxe.ui.toolkit.core.StateComponent;
haxe.ui.toolkit.controls.TextInput.prototype = $extend(haxe.ui.toolkit.core.StateComponent.prototype,{
	preInitialize: function() {
		haxe.ui.toolkit.core.StateComponent.prototype.preInitialize.call(this);
	}
	,initialize: function() {
		haxe.ui.toolkit.core.StateComponent.prototype.initialize.call(this);
		this.get_sprite().addChild(this._textDisplay.get_display());
		if(this.get_multiline() == true) {
			this._textDisplay.get_display().set_width(this._layout.get_innerWidth());
			this._textDisplay.get_display().set_height(this._layout.get_innerHeight());
		}
		this._textDisplay.get_display().addEventListener(flash.events.Event.CHANGE,$bind(this,this._onTextChange));
		this._textDisplay.get_display().addEventListener(flash.events.Event.SCROLL,$bind(this,this._onTextScroll));
		this.checkScrolls();
		if(this._textPlaceHolder != null && this.contains(this._textPlaceHolder) == false) this.addChild(this._textPlaceHolder);
		if(this._textPlaceHolder != null) this.setChildIndex(this._textPlaceHolder,0);
	}
	,dispose: function() {
		this._textDisplay.get_display().removeEventListener(flash.events.Event.CHANGE,$bind(this,this._onTextChange));
		this._textDisplay.get_display().removeEventListener(flash.events.Event.SCROLL,$bind(this,this._onTextScroll));
		this.get_sprite().removeChild(this._textDisplay.get_display());
		if(this._textPlaceHolder != null && this.contains(this._textPlaceHolder)) this.removeChild(this._textPlaceHolder);
		haxe.ui.toolkit.core.StateComponent.prototype.dispose.call(this);
	}
	,invalidate: function(type,recursive) {
		if(recursive == null) recursive = false;
		if(type == null) type = 1118481;
		if(!this._ready || this._invalidating) return;
		haxe.ui.toolkit.core.StateComponent.prototype.invalidate.call(this,type,recursive);
		this._invalidating = true;
		if((type & 256) == 256) this.checkScrolls();
		this._invalidating = false;
	}
	,set_disabled: function(value) {
		haxe.ui.toolkit.core.StateComponent.prototype.set_disabled.call(this,value);
		if(value == true) this._textDisplay.set_interactive(false); else this._textDisplay.set_interactive(true);
		return value;
	}
	,_onTextChange: function(event) {
		this.checkScrolls();
		if(this._textPlaceHolder != null) this._textPlaceHolder.set_visible(this.get_text().length == 0);
	}
	,_onTextScroll: function(event) {
		this.checkScrolls();
	}
	,_onVScrollChange: function(event) {
		var tf;
		tf = js.Boot.__cast(this._textDisplay.get_display() , flash.text.TextField);
	}
	,_onHScrollChange: function(event) {
		var tf;
		tf = js.Boot.__cast(this._textDisplay.get_display() , flash.text.TextField);
	}
	,get_text: function() {
		return this._textDisplay.get_text();
	}
	,set_text: function(value) {
		value = haxe.ui.toolkit.core.StateComponent.prototype.set_text.call(this,value);
		this._textDisplay.set_text(value);
		return value;
	}
	,applyStyle: function() {
		haxe.ui.toolkit.core.StateComponent.prototype.applyStyle.call(this);
		if(this._textDisplay != null) this._textDisplay.set_style(this.get_style());
		if(this._textPlaceHolder != null) {
			var placeholderStyle = new haxe.ui.toolkit.style.Style();
			placeholderStyle.merge(this.get_style());
			placeholderStyle.set_borderSize(0);
			placeholderStyle.set_backgroundColor(-1);
			placeholderStyle.set_backgroundImage(null);
			placeholderStyle.set_padding(0);
			this._textPlaceHolder.set_style(placeholderStyle);
		}
	}
	,get_multiline: function() {
		return this._textDisplay.get_multiline();
	}
	,set_multiline: function(value) {
		this._textDisplay.set_wrapLines(value);
		this._textDisplay.set_multiline(value);
		return value;
	}
	,get_selectionBeginIndex: function() {
		var tf;
		tf = js.Boot.__cast(this._textDisplay.get_display() , flash.text.TextField);
		var n = 0;
		return n;
	}
	,get_selectionEndIndex: function() {
		var tf;
		tf = js.Boot.__cast(this._textDisplay.get_display() , flash.text.TextField);
		var n = 0;
		return n;
	}
	,get_selectedTextFormat: function() {
		var tf;
		tf = js.Boot.__cast(this._textDisplay.get_display() , flash.text.TextField);
		return tf.getTextFormat(this.get_selectionBeginIndex() - 1,this.get_selectionEndIndex());
	}
	,get_wrapLines: function() {
		return this._textDisplay.get_wrapLines();
	}
	,set_wrapLines: function(value) {
		this._textDisplay.set_wrapLines(value);
		return value;
	}
	,get_displayAsPassword: function() {
		return this._textDisplay.get_displayAsPassword();
	}
	,set_displayAsPassword: function(value) {
		this._textDisplay.set_displayAsPassword(value);
		return value;
	}
	,get_placeholderText: function() {
		if(this._textPlaceHolder == null) return null;
		return this._textPlaceHolder.get_text();
	}
	,set_placeholderText: function(value) {
		if(this._textPlaceHolder == null) {
			this._textPlaceHolder = new haxe.ui.toolkit.controls.Text();
			this._textPlaceHolder.set_id("placeholder");
		}
		this._textPlaceHolder.set_text(value);
		if(this._ready && this.contains(this._textPlaceHolder) == false && value != null) {
			haxe.Log.trace("addding",{ fileName : "TextInput.hx", lineNumber : 257, className : "haxe.ui.toolkit.controls.TextInput", methodName : "set_placeholderText"});
			this.addChild(this._textPlaceHolder);
		}
		if(value == null) {
			if(this.contains(this._textPlaceHolder)) this.removeChild(this._textPlaceHolder);
			this._textPlaceHolder = null;
		}
		if(this._textPlaceHolder != null) this._textPlaceHolder.set_visible(this.get_text().length == 0);
		return value;
	}
	,get_vscrollPos: function() {
		if(this._vscroll != null) return this._vscroll.get_pos();
		return 0;
	}
	,set_vscrollPos: function(value) {
		if(this._vscroll != null) this._vscroll.set_pos(value);
		return value;
	}
	,get_vscrollMin: function() {
		if(this._vscroll != null) return this._vscroll.get_min();
		return 0;
	}
	,get_vscrollMax: function() {
		if(this._vscroll != null) return this._vscroll.get_max();
		return 0;
	}
	,replaceSelectedText: function(s) {
		var tf;
		tf = js.Boot.__cast(this._textDisplay.get_display() , flash.text.TextField);
	}
	,focus: function() {
		var tf;
		tf = js.Boot.__cast(this._textDisplay.get_display() , flash.text.TextField);
		tf.stage.set_focus(tf);
	}
	,checkScrolls: function() {
		if(this.get_multiline() == false || this.get_ready() == false) return;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.StateComponent.prototype.clone.call(this);
		c.set_multiline(this.get_multiline());
		c.set_wrapLines(this.get_wrapLines());
		c.set_displayAsPassword(this.get_displayAsPassword());
		c.set_placeholderText(this.get_placeholderText());
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.TextInput();
	}
	,__class__: haxe.ui.toolkit.controls.TextInput
	,__properties__: $extend(haxe.ui.toolkit.core.StateComponent.prototype.__properties__,{get_vscrollMax:"get_vscrollMax",get_vscrollMin:"get_vscrollMin",set_vscrollPos:"set_vscrollPos",get_vscrollPos:"get_vscrollPos",set_placeholderText:"set_placeholderText",get_placeholderText:"get_placeholderText",set_displayAsPassword:"set_displayAsPassword",get_displayAsPassword:"get_displayAsPassword",set_wrapLines:"set_wrapLines",get_wrapLines:"get_wrapLines",get_selectedTextFormat:"get_selectedTextFormat",get_selectionEndIndex:"get_selectionEndIndex",get_selectionBeginIndex:"get_selectionBeginIndex",set_multiline:"set_multiline",get_multiline:"get_multiline"})
});
haxe.ui.toolkit.controls.TextInputLayout = function() {
	haxe.ui.toolkit.layout.DefaultLayout.call(this);
};
$hxClasses["haxe.ui.toolkit.controls.TextInputLayout"] = haxe.ui.toolkit.controls.TextInputLayout;
haxe.ui.toolkit.controls.TextInputLayout.__name__ = ["haxe","ui","toolkit","controls","TextInputLayout"];
haxe.ui.toolkit.controls.TextInputLayout.__super__ = haxe.ui.toolkit.layout.DefaultLayout;
haxe.ui.toolkit.controls.TextInputLayout.prototype = $extend(haxe.ui.toolkit.layout.DefaultLayout.prototype,{
	resizeChildren: function() {
		haxe.ui.toolkit.layout.DefaultLayout.prototype.resizeChildren.call(this);
		if(this.get_container().get_sprite().get_numChildren() > 0) {
			var vscroll = this.get_container().findChildAs(haxe.ui.toolkit.controls.VScroll);
			var text = this.findTextField();
			if(text != null) {
				text.set_x(this.get_padding().get_left());
				if(text.multiline == true) {
					text.set_y(this.get_padding().get_top());
					text.set_height(this.get_usableHeight());
				} else {
					text.set_height(text.get_defaultTextFormat().size + 8);
					text.set_y(this.get_container().get_height() / 2 - text.get_height() / 2);
				}
				text.set_width(this.get_usableWidth());
				var placeholder = this.get_container().findChild("placeholder");
				if(placeholder != null) {
					placeholder.set_width(text.get_width());
					placeholder.set_height(text.get_height());
				}
			}
		}
	}
	,repositionChildren: function() {
		haxe.ui.toolkit.layout.DefaultLayout.prototype.repositionChildren.call(this);
		var vscroll = this.get_container().findChildAs(haxe.ui.toolkit.controls.VScroll);
		if(vscroll != null) vscroll.set_x(this.get_container().get_width() - vscroll.get_width() - this.get_padding().get_right());
		var hscroll = this.get_container().findChildAs(haxe.ui.toolkit.controls.HScroll);
		if(hscroll != null) hscroll.set_y(this.get_container().get_height() - hscroll.get_height() - this.get_padding().get_bottom());
		var text = this.findTextField();
		var placeholder = this.get_container().findChild("placeholder");
		if(text != null && placeholder != null) {
			placeholder.set_x(text.get_x());
			placeholder.set_y(text.get_y() + 1);
		}
	}
	,get_usableWidth: function() {
		var ucx = this.get_innerWidth();
		var vscroll = this.get_container().findChildAs(haxe.ui.toolkit.controls.VScroll);
		if(vscroll != null && vscroll.get_visible() == true) ucx -= vscroll.get_width() + this.get_spacingX();
		return ucx;
	}
	,get_usableHeight: function() {
		var ucy = this.get_innerHeight();
		var hscroll = this.get_container().findChildAs(haxe.ui.toolkit.controls.HScroll);
		if(hscroll != null && hscroll.get_visible() == true) ucy -= hscroll.get_height() - this.get_spacingY();
		return ucy;
	}
	,findTextField: function() {
		var tf = null;
		var _g1 = 0;
		var _g = this.get_container().get_sprite().get_numChildren();
		while(_g1 < _g) {
			var i = _g1++;
			var child = this.get_container().get_sprite().getChildAt(i);
			if(js.Boot.__instanceof(child,flash.text.TextField)) {
				tf = js.Boot.__cast(child , flash.text.TextField);
				break;
			}
		}
		return tf;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.layout.DefaultLayout.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.TextInputLayout();
	}
	,__class__: haxe.ui.toolkit.controls.TextInputLayout
});
haxe.ui.toolkit.controls.VProgress = function() {
	haxe.ui.toolkit.controls.Progress.call(this);
	this.set_direction("vertical");
};
$hxClasses["haxe.ui.toolkit.controls.VProgress"] = haxe.ui.toolkit.controls.VProgress;
haxe.ui.toolkit.controls.VProgress.__name__ = ["haxe","ui","toolkit","controls","VProgress"];
haxe.ui.toolkit.controls.VProgress.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.controls.VProgress.__super__ = haxe.ui.toolkit.controls.Progress;
haxe.ui.toolkit.controls.VProgress.prototype = $extend(haxe.ui.toolkit.controls.Progress.prototype,{
	clone: function() {
		var c = haxe.ui.toolkit.controls.Progress.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.VProgress();
	}
	,__class__: haxe.ui.toolkit.controls.VProgress
});
haxe.ui.toolkit.controls.VScroll = function() {
	this._hasButtons = true;
	this._scrollDirection = 0;
	this._mouseDownOffset = -1;
	this._incrementSize = 20;
	this._pageSize = 0;
	this._max = 100;
	this._min = 0;
	this._pos = 0;
	haxe.ui.toolkit.controls.Scroll.call(this);
	this._layout = new haxe.ui.toolkit.controls.VScrollLayout();
};
$hxClasses["haxe.ui.toolkit.controls.VScroll"] = haxe.ui.toolkit.controls.VScroll;
haxe.ui.toolkit.controls.VScroll.__name__ = ["haxe","ui","toolkit","controls","VScroll"];
haxe.ui.toolkit.controls.VScroll.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable,haxe.ui.toolkit.core.interfaces.IScrollable];
haxe.ui.toolkit.controls.VScroll.__super__ = haxe.ui.toolkit.controls.Scroll;
haxe.ui.toolkit.controls.VScroll.prototype = $extend(haxe.ui.toolkit.controls.Scroll.prototype,{
	preInitialize: function() {
		haxe.ui.toolkit.controls.Scroll.prototype.preInitialize.call(this);
		if(this._style != null) this._hasButtons = this._style.get_hasButtons();
	}
	,initialize: function() {
		haxe.ui.toolkit.controls.Scroll.prototype.initialize.call(this);
		if(this._hasButtons == true) {
			this._deincButton = new haxe.ui.toolkit.controls.Button();
			this._deincButton.set_percentWidth(100);
			this._deincButton.set_height(this.get_layout().get_innerWidth());
			this._deincButton.set_id("deinc");
			this._deincButton.set_styleName("up");
			this._deincButton.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onDeinc));
			this.addChild(this._deincButton);
			this._incButton = new haxe.ui.toolkit.controls.Button();
			this._incButton.set_percentWidth(100);
			this._incButton.set_height(this.get_layout().get_innerWidth());
			this._incButton.set_id("inc");
			this._incButton.set_styleName("down");
			this._incButton.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onInc));
			this.addChild(this._incButton);
		}
		this._thumb = new haxe.ui.toolkit.controls.Button();
		this._thumb.set_percentWidth(100);
		this._thumb.set_height(50);
		this._thumb.set_id("thumb");
		this._thumb.set_styleName("thumb");
		this._thumb.set_remainPressed(true);
		this._thumb.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onThumbMouseDown));
		this.addChild(this._thumb);
		this.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onMouseDown));
	}
	,_onThumbMouseDown: function(event) {
		var ptStage = new flash.geom.Point(event.stageX,event.stageY);
		this._mouseDownOffset = ptStage.y - this._thumb.get_y();
		haxe.ui.toolkit.core.Screen.get_instance().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onScreenMouseUp));
		haxe.ui.toolkit.core.Screen.get_instance().addEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this._onScreenMouseMove));
	}
	,_onScreenMouseMove: function(event) {
		var ypos = event.stageY - this._mouseDownOffset;
		var minY = 0;
		if(this._deincButton != null) minY = this._deincButton.get_height() + this.get_layout().get_spacingY();
		var maxY = this.get_layout().get_usableHeight() - this._thumb.get_height();
		if(this._deincButton != null) maxY += this._deincButton.get_height() + this.get_layout().get_spacingY();
		if(ypos < minY) ypos = minY; else if(ypos > maxY) ypos = maxY;
		var ucy = this.get_layout().get_usableHeight();
		ucy -= this._thumb.get_height();
		var m = Std["int"](this.get_max() - this.get_min());
		var v = ypos - minY;
		var newValue = this.get_min() + v / ucy * m;
		this.set_pos(newValue | 0);
	}
	,_onScreenMouseUp: function(event) {
		this._mouseDownOffset = -1;
		if(this._scrollTimer != null) this._scrollTimer.stop();
		haxe.ui.toolkit.core.Screen.get_instance().removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onScreenMouseUp));
		haxe.ui.toolkit.core.Screen.get_instance().removeEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this._onScreenMouseMove));
	}
	,_onDeinc: function(event) {
		this.deincrementValue();
		this._scrollDirection = 0;
		haxe.ui.toolkit.core.Screen.get_instance().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onScreenMouseUp));
		if(this._scrollTimer == null) {
			this._scrollTimer = new flash.utils.Timer(50,1);
			this._scrollTimer.addEventListener("timerComplete",$bind(this,this._onScrollTimerComplete));
		}
		this._scrollTimer.reset();
		this._scrollTimer.start();
	}
	,_onInc: function(event) {
		this.incrementValue();
		this._scrollDirection = 1;
		haxe.ui.toolkit.core.Screen.get_instance().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onScreenMouseUp));
		if(this._scrollTimer == null) {
			this._scrollTimer = new flash.utils.Timer(50,1);
			this._scrollTimer.addEventListener("timerComplete",$bind(this,this._onScrollTimerComplete));
		}
		this._scrollTimer.reset();
		this._scrollTimer.start();
	}
	,_onScrollTimerComplete: function(event) {
		if(this._scrollTimer != null) {
			if(this._scrollDirection == 1) this.incrementValue(); else if(this._scrollDirection == 0) this.deincrementValue();
			this._scrollTimer.reset();
			this._scrollTimer.start();
		}
	}
	,_onMouseDown: function(event) {
		var performPaging = !this._thumb.hitTest(event.stageX,event.stageY);
		if(this._deincButton != null && this._deincButton.hitTest(event.stageX,event.stageY) == true) performPaging = false;
		if(this._incButton != null && this._incButton.hitTest(event.stageX,event.stageY) == true) performPaging = false;
		if(performPaging == true) {
			if(event.localY > this._thumb.get_y()) {
				var _g = this;
				_g.set_pos(_g.get_pos() + this.get_pageSize());
			} else {
				var _g1 = this;
				_g1.set_pos(_g1.get_pos() - this.get_pageSize());
			}
		}
	}
	,get_pos: function() {
		return this._pos;
	}
	,set_pos: function(value) {
		if(value < this._min) value = this._min;
		if(value > this._max) value = this._max;
		if(value != this._pos) {
			this._pos = value;
			var changeEvent = new flash.events.Event(flash.events.Event.CHANGE);
			this.dispatchEvent(changeEvent);
			this.invalidate(1);
		}
		return value;
	}
	,get_min: function() {
		return this._min;
	}
	,set_min: function(value) {
		if(value != this._min) {
			this._min = value;
			if(this._pos < this._min) this._pos = this._min;
			this.invalidate(1);
		}
		return value;
	}
	,get_max: function() {
		return this._max;
	}
	,set_max: function(value) {
		if(value != this._max) {
			this._max = value;
			if(this._pos > this._max) this._pos = this._max;
			this.invalidate(1);
		}
		return value;
	}
	,get_pageSize: function() {
		return this._pageSize;
	}
	,set_pageSize: function(value) {
		if(value != this._pageSize) {
			this._pageSize = value;
			this.invalidate(1);
		}
		return value;
	}
	,get_incrementSize: function() {
		return this._incrementSize;
	}
	,set_incrementSize: function(value) {
		this._incrementSize = value;
		return value;
	}
	,deincrementValue: function() {
		var _g = this;
		_g.set_pos(_g.get_pos() - this._incrementSize);
	}
	,incrementValue: function() {
		var _g = this;
		_g.set_pos(_g.get_pos() + this._incrementSize);
	}
	,clone: function() {
		var c = haxe.ui.toolkit.controls.Scroll.prototype.clone.call(this);
		c.set_pos(this.get_pos());
		c.set_min(this.get_min());
		c.set_max(this.get_max());
		c.set_pageSize(this.get_pageSize());
		c.set_incrementSize(this.get_incrementSize());
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.VScroll();
	}
	,__class__: haxe.ui.toolkit.controls.VScroll
	,__properties__: $extend(haxe.ui.toolkit.controls.Scroll.prototype.__properties__,{set_incrementSize:"set_incrementSize",get_incrementSize:"get_incrementSize",set_pageSize:"set_pageSize",get_pageSize:"get_pageSize",set_max:"set_max",get_max:"get_max",set_min:"set_min",get_min:"get_min",set_pos:"set_pos",get_pos:"get_pos"})
});
haxe.ui.toolkit.controls.VScrollLayout = function() {
	haxe.ui.toolkit.layout.DefaultLayout.call(this);
};
$hxClasses["haxe.ui.toolkit.controls.VScrollLayout"] = haxe.ui.toolkit.controls.VScrollLayout;
haxe.ui.toolkit.controls.VScrollLayout.__name__ = ["haxe","ui","toolkit","controls","VScrollLayout"];
haxe.ui.toolkit.controls.VScrollLayout.__super__ = haxe.ui.toolkit.layout.DefaultLayout;
haxe.ui.toolkit.controls.VScrollLayout.prototype = $extend(haxe.ui.toolkit.layout.DefaultLayout.prototype,{
	resizeChildren: function() {
		haxe.ui.toolkit.layout.DefaultLayout.prototype.resizeChildren.call(this);
		var scroll;
		scroll = js.Boot.__cast(this.get_container() , haxe.ui.toolkit.core.interfaces.IScrollable);
		var thumb = this.get_container().findChild("thumb");
		if(thumb != null) {
			var m = scroll.get_max() - scroll.get_min();
			var ucy = this.get_usableHeight();
			var thumbHeight = scroll.get_pageSize() / m * ucy;
			if(thumbHeight < 20) thumbHeight = 20; else if(thumbHeight > ucy) thumbHeight = ucy;
			thumb.set_height(thumbHeight);
		}
	}
	,repositionChildren: function() {
		haxe.ui.toolkit.layout.DefaultLayout.prototype.repositionChildren.call(this);
		var deinc = this.get_container().findChild("deinc");
		var inc = this.get_container().findChild("inc");
		if(inc != null) inc.set_y(this.get_container().get_height() - inc.get_height() - this.get_padding().get_bottom());
		var scroll;
		scroll = js.Boot.__cast(this.get_container() , haxe.ui.toolkit.core.interfaces.IScrollable);
		var thumb = this.get_container().findChild("thumb");
		if(thumb != null) {
			var m = scroll.get_max() - scroll.get_min();
			var u = this.get_usableHeight();
			u -= thumb.get_height();
			var y = (scroll.get_pos() - scroll.get_min()) / m * u;
			y += this.get_padding().get_top();
			if(deinc != null) y += deinc.get_height() + this.get_spacingY();
			thumb.set_y(y);
		}
	}
	,get_usableHeight: function() {
		var ucy = this.get_innerHeight();
		var deinc = this.get_container().findChild("deinc");
		var inc = this.get_container().findChild("inc");
		if(deinc != null) ucy -= deinc.get_height() + this.get_spacingY();
		if(inc != null) ucy -= inc.get_height() + this.get_spacingY();
		return ucy;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.layout.DefaultLayout.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.VScrollLayout();
	}
	,__class__: haxe.ui.toolkit.controls.VScrollLayout
});
haxe.ui.toolkit.controls.VSlider = function() {
	haxe.ui.toolkit.controls.Slider.call(this);
	this.set_direction("vertical");
};
$hxClasses["haxe.ui.toolkit.controls.VSlider"] = haxe.ui.toolkit.controls.VSlider;
haxe.ui.toolkit.controls.VSlider.__name__ = ["haxe","ui","toolkit","controls","VSlider"];
haxe.ui.toolkit.controls.VSlider.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.controls.VSlider.__super__ = haxe.ui.toolkit.controls.Slider;
haxe.ui.toolkit.controls.VSlider.prototype = $extend(haxe.ui.toolkit.controls.Slider.prototype,{
	_onMouseDown: function(event) {
		this.startTracking(event.stageY - this._thumb.get_stageY());
	}
	,_onScreenMouseMove: function(event) {
		var ypos = event.stageY - this.get_stageY() - this._mouseDownOffset;
		this.set_pos(Std["int"](this.calcPosFromCoord(ypos)));
	}
	,_onBackgroundMouseDown: function(event) {
		if(this._thumb.hitTest(event.stageX,event.stageY) == false) {
			var ypos = event.stageY - this.get_stageY();
			ypos -= this._thumb.get_height() / 2;
			this.set_pos(Std["int"](this.calcPosFromCoord(ypos)));
			this._thumb.set_state("down");
			this.startTracking(this._thumb.get_height() / 2);
		}
	}
	,startTracking: function(offset) {
		this._mouseDownOffset = offset;
		haxe.ui.toolkit.core.Screen.get_instance().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onScreenMouseUp));
		haxe.ui.toolkit.core.Screen.get_instance().addEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this._onScreenMouseMove));
	}
	,calcPosFromCoord: function(ypos) {
		var minY = 0;
		var maxY = this.get_layout().get_usableHeight() - this._thumb.get_height();
		if(ypos < minY) ypos = minY; else if(ypos > maxY) ypos = maxY;
		var ucy = this.get_layout().get_usableHeight();
		ucy -= this._thumb.get_height();
		var m = Std["int"](this.get_max() - this.get_min());
		var v = ypos - minY;
		var newValue = this.get_max() - v / ucy * m;
		return newValue;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.controls.Slider.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.VSlider();
	}
	,__class__: haxe.ui.toolkit.controls.VSlider
});
haxe.ui.toolkit.controls.extended = {};
haxe.ui.toolkit.controls.extended.Code = function() {
	this._async = false;
	haxe.ui.toolkit.controls.TextInput.call(this);
	this.set_multiline(true);
	this.set_wrapLines(false);
	var tf;
	tf = js.Boot.__cast(this._textDisplay.get_display() , flash.text.TextField);
	this._syntax = haxe.ui.toolkit.controls.extended.syntax.CodeSyntax.getSyntax("");
};
$hxClasses["haxe.ui.toolkit.controls.extended.Code"] = haxe.ui.toolkit.controls.extended.Code;
haxe.ui.toolkit.controls.extended.Code.__name__ = ["haxe","ui","toolkit","controls","extended","Code"];
haxe.ui.toolkit.controls.extended.Code.__super__ = haxe.ui.toolkit.controls.TextInput;
haxe.ui.toolkit.controls.extended.Code.prototype = $extend(haxe.ui.toolkit.controls.TextInput.prototype,{
	initialize: function() {
		haxe.ui.toolkit.controls.TextInput.prototype.initialize.call(this);
		this._textDisplay.get_display().addEventListener(flash.events.Event.CHANGE,$bind(this,this._onCodeChange));
		this._textDisplay.get_display().addEventListener(flash.events.KeyboardEvent.KEY_DOWN,$bind(this,this._onCodeKeyDown));
		this.applyRules();
	}
	,dispose: function() {
		this._textDisplay.get_display().removeEventListener(flash.events.Event.CHANGE,$bind(this,this._onCodeChange));
		this._textDisplay.get_display().removeEventListener(flash.events.KeyboardEvent.KEY_DOWN,$bind(this,this._onCodeKeyDown));
		haxe.ui.toolkit.controls.TextInput.prototype.dispose.call(this);
	}
	,set_text: function(value) {
		if(value != null) {
			value = haxe.ui.toolkit.controls.TextInput.prototype.set_text.call(this,value);
			value = StringTools.replace(value,"\t","    ");
			haxe.ui.toolkit.controls.TextInput.prototype.set_text.call(this,value);
			this.applyRules();
		}
		return value;
	}
	,get_syntax: function() {
		return this._syntax.get_identifier();
	}
	,set_syntax: function(value) {
		this._syntax = haxe.ui.toolkit.controls.extended.syntax.CodeSyntax.getSyntax(value);
		this.applyRules();
		return value;
	}
	,get_async: function() {
		return this._async;
	}
	,set_async: function(value) {
		this._async = value;
		return value;
	}
	,_onCodeChange: function(event) {
		this.applyRules();
	}
	,_onCodeKeyDown: function(event) {
		if(event.keyCode == 9 && event.ctrlKey == false && event.altKey == false && event.shiftKey == false) {
			this.replaceSelectedText("    ");
			this.applyRules();
		}
	}
	,applyRules: function() {
		var tf;
		tf = js.Boot.__cast(this._textDisplay.get_display() , flash.text.TextField);
		if(this._async == false) {
			var runner = new haxe.ui.toolkit.controls.extended._Code.SyntaxHighlightRunner(tf,this._syntax);
			runner.set_needToExit(function() {
				return false;
			});
			runner.run();
		} else {
			if(this._caller != null) this._caller.cancel();
			this._caller = new haxe.ui.toolkit.util.pseudothreads.AsyncThreadCaller(new haxe.ui.toolkit.controls.extended._Code.SyntaxHighlightRunner(tf,this._syntax));
			this._caller.start();
		}
	}
	,clone: function() {
		var c = haxe.ui.toolkit.controls.TextInput.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.extended.Code();
	}
	,__class__: haxe.ui.toolkit.controls.extended.Code
	,__properties__: $extend(haxe.ui.toolkit.controls.TextInput.prototype.__properties__,{set_async:"set_async",get_async:"get_async",set_syntax:"set_syntax",get_syntax:"get_syntax"})
});
haxe.ui.toolkit.util = {};
haxe.ui.toolkit.util.pseudothreads = {};
haxe.ui.toolkit.util.pseudothreads.IRunnable = function() { };
$hxClasses["haxe.ui.toolkit.util.pseudothreads.IRunnable"] = haxe.ui.toolkit.util.pseudothreads.IRunnable;
haxe.ui.toolkit.util.pseudothreads.IRunnable.__name__ = ["haxe","ui","toolkit","util","pseudothreads","IRunnable"];
haxe.ui.toolkit.util.pseudothreads.IRunnable.prototype = {
	__class__: haxe.ui.toolkit.util.pseudothreads.IRunnable
};
haxe.ui.toolkit.util.pseudothreads.Runner = function() {
	this._runningTimeShare = .6;
};
$hxClasses["haxe.ui.toolkit.util.pseudothreads.Runner"] = haxe.ui.toolkit.util.pseudothreads.Runner;
haxe.ui.toolkit.util.pseudothreads.Runner.__name__ = ["haxe","ui","toolkit","util","pseudothreads","Runner"];
haxe.ui.toolkit.util.pseudothreads.Runner.__interfaces__ = [haxe.ui.toolkit.util.pseudothreads.IRunnable];
haxe.ui.toolkit.util.pseudothreads.Runner.prototype = {
	run: function() {
	}
	,get_isComplete: function() {
		return this._isComplete;
	}
	,get_progress: function() {
		return this._progress;
	}
	,get_total: function() {
		return this._total;
	}
	,get_runningTimeShare: function() {
		return this._runningTimeShare;
	}
	,set_needToExit: function(value) {
		this._needToExit = value;
		return value;
	}
	,get_data: function() {
		return this._data;
	}
	,__class__: haxe.ui.toolkit.util.pseudothreads.Runner
	,__properties__: {get_data:"get_data",set_needToExit:"set_needToExit",get_runningTimeShare:"get_runningTimeShare",get_total:"get_total",get_progress:"get_progress",get_isComplete:"get_isComplete"}
};
haxe.ui.toolkit.controls.extended._Code = {};
haxe.ui.toolkit.controls.extended._Code.SyntaxHighlightRunner = function(tf,syntax,timeShare) {
	if(timeShare == null) timeShare = .9;
	this._ruleIndex = 0;
	this._matchIndex = 0;
	this._matchedSyntax = false;
	haxe.ui.toolkit.util.pseudothreads.Runner.call(this);
	this._tf = tf;
	this._syntax = syntax;
	this._runningTimeShare = timeShare;
	this._syntaxRules = new Array();
	var $it0 = (function($this) {
		var $r;
		var this1 = $this._syntax.get_rules();
		$r = this1.keys();
		return $r;
	}(this));
	while( $it0.hasNext() ) {
		var rule = $it0.next();
		this._syntaxRules.push(rule);
	}
	this._matches = new haxe.ds.StringMap();
	this._txt = tf.get_text();
	if(this._txt != "") tf.setTextFormat(this._syntax.get_defaultFormat(),0,this._txt.length);
};
$hxClasses["haxe.ui.toolkit.controls.extended._Code.SyntaxHighlightRunner"] = haxe.ui.toolkit.controls.extended._Code.SyntaxHighlightRunner;
haxe.ui.toolkit.controls.extended._Code.SyntaxHighlightRunner.__name__ = ["haxe","ui","toolkit","controls","extended","_Code","SyntaxHighlightRunner"];
haxe.ui.toolkit.controls.extended._Code.SyntaxHighlightRunner.__super__ = haxe.ui.toolkit.util.pseudothreads.Runner;
haxe.ui.toolkit.controls.extended._Code.SyntaxHighlightRunner.prototype = $extend(haxe.ui.toolkit.util.pseudothreads.Runner.prototype,{
	run: function() {
		if(this._matchedSyntax == false) {
			var _g1 = this._ruleIndex;
			var _g = this._syntaxRules.length;
			while(_g1 < _g) {
				var n = _g1++;
				if(this._needToExit() == true) {
					this._ruleIndex = n;
					return;
				}
				var rule = this._syntaxRules[n];
				var matches = [new Array()];
				this._matches.set(rule,matches[0]);
				var r = this._syntax.getCompiledRule(rule);
				r.map(this._txt,(function(matches) {
					return function(e) {
						var pos = e.matchedPos();
						matches[0].push(pos);
						return "";
					};
				})(matches));
			}
			this._ruleIndex = 0;
			this._matchedSyntax = true;
		}
		if(this._matchedSyntax == true) {
			var _g11 = this._ruleIndex;
			var _g2 = this._syntaxRules.length;
			while(_g11 < _g2) {
				var n1 = _g11++;
				if(this._needToExit() == true) {
					this._ruleIndex = n1;
					return;
				}
				var rule1 = this._syntaxRules[n1];
				var matches1 = this._matches.get(rule1);
				var _g3 = this._matchIndex;
				var _g21 = matches1.length;
				while(_g3 < _g21) {
					var m = _g3++;
					if(this._needToExit() == true) {
						this._ruleIndex = n1;
						this._matchIndex = m;
						return;
					}
					var match = matches1[m];
					this._tf.setTextFormat((function($this) {
						var $r;
						var this1 = $this._syntax.get_rules();
						$r = this1.get(rule1);
						return $r;
					}(this)),match.pos,match.pos + match.len);
				}
				this._matchIndex = 0;
			}
		}
		this._needToExit = null;
		this._isComplete = true;
	}
	,__class__: haxe.ui.toolkit.controls.extended._Code.SyntaxHighlightRunner
});
haxe.ui.toolkit.controls.extended.RTF = function() {
	haxe.ui.toolkit.controls.TextInput.call(this);
	this.set_multiline(true);
	var tf;
	tf = js.Boot.__cast(this._textDisplay.get_display() , flash.text.TextField);
};
$hxClasses["haxe.ui.toolkit.controls.extended.RTF"] = haxe.ui.toolkit.controls.extended.RTF;
haxe.ui.toolkit.controls.extended.RTF.__name__ = ["haxe","ui","toolkit","controls","extended","RTF"];
haxe.ui.toolkit.controls.extended.RTF.__super__ = haxe.ui.toolkit.controls.TextInput;
haxe.ui.toolkit.controls.extended.RTF.prototype = $extend(haxe.ui.toolkit.controls.TextInput.prototype,{
	get_htmlText: function() {
		var tf;
		tf = js.Boot.__cast(this._textDisplay.get_display() , flash.text.TextField);
		return tf.get_htmlText();
	}
	,set_htmlText: function(value) {
		if(StringTools.startsWith(value,"asset://")) {
			var assetId = HxOverrides.substr(value,8,value.length);
			value = haxe.ui.toolkit.resources.ResourceManager.get_instance().getText(assetId);
			value = StringTools.replace(value,"\r","");
		}
		var tf;
		tf = js.Boot.__cast(this._textDisplay.get_display() , flash.text.TextField);
		tf.set_htmlText(value);
		return value;
	}
	,bold: function() {
		this.applyRTFStyle("bold");
	}
	,italic: function() {
		this.applyRTFStyle("italic");
	}
	,underline: function() {
		this.applyRTFStyle("underline");
	}
	,fontSize: function(size) {
		this.applyRTFStyle("fontSize",size);
	}
	,fontName: function(name) {
		this.applyRTFStyle("fontName",name);
	}
	,bullet: function() {
		this.applyRTFStyle("bullet");
	}
	,alignLeft: function() {
		this.applyRTFStyle("align","left");
	}
	,alignCenter: function() {
		this.applyRTFStyle("align","center");
	}
	,alignRight: function() {
		this.applyRTFStyle("align","right");
	}
	,alignJustify: function() {
		this.applyRTFStyle("align","justify");
	}
	,applyRTFStyle: function(what,value) {
		if(this.get_selectionBeginIndex() == 0 && this.get_selectionEndIndex() == 0) return;
		if(this.get_selectionBeginIndex() == this.get_selectionEndIndex()) return;
		var tf;
		tf = js.Boot.__cast(this._textDisplay.get_display() , flash.text.TextField);
		var format = tf.getTextFormat(this.get_selectionBeginIndex(),this.get_selectionEndIndex());
		switch(what) {
		case "bold":
			format.bold = !format.bold;
			break;
		case "italic":
			format.italic = !format.italic;
			break;
		case "underline":
			format.underline = !format.underline;
			break;
		case "fontSize":
			format.size = js.Boot.__cast(value , Int);
			break;
		case "fontName":
			format.font = js.Boot.__cast(value , String);
			break;
		case "bullet":
			format.bullet = !format.bullet;
			break;
		case "align":
			var align = flash.text.TextFormatAlign.LEFT;
			var textAlign;
			textAlign = js.Boot.__cast(value , String);
			if(textAlign == "center") align = flash.text.TextFormatAlign.CENTER; else if(textAlign == "right") align = flash.text.TextFormatAlign.RIGHT; else if(textAlign == "justify") align = flash.text.TextFormatAlign.JUSTIFY;
			format.align = align;
			break;
		default:
		}
		tf.setTextFormat(format,this.get_selectionBeginIndex(),this.get_selectionEndIndex());
	}
	,clone: function() {
		var c = haxe.ui.toolkit.controls.TextInput.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.extended.RTF();
	}
	,__class__: haxe.ui.toolkit.controls.extended.RTF
	,__properties__: $extend(haxe.ui.toolkit.controls.TextInput.prototype.__properties__,{set_htmlText:"set_htmlText",get_htmlText:"get_htmlText"})
});
haxe.ui.toolkit.controls.extended.syntax = {};
haxe.ui.toolkit.controls.extended.syntax.CodeSyntax = function() {
	this._identifier = "";
	this._rules = new haxe.ds.StringMap();
	this._compiledRules = new haxe.ds.StringMap();
	this._defaultFormat = new flash.text.TextFormat("_typewriter",13,0);
};
$hxClasses["haxe.ui.toolkit.controls.extended.syntax.CodeSyntax"] = haxe.ui.toolkit.controls.extended.syntax.CodeSyntax;
haxe.ui.toolkit.controls.extended.syntax.CodeSyntax.__name__ = ["haxe","ui","toolkit","controls","extended","syntax","CodeSyntax"];
haxe.ui.toolkit.controls.extended.syntax.CodeSyntax.getSyntax = function(id) {
	var syntax = new haxe.ui.toolkit.controls.extended.syntax.CodeSyntax();
	if(id == "haxe") syntax = new haxe.ui.toolkit.controls.extended.syntax.HaxeSyntax(); else if(id == "xml") syntax = new haxe.ui.toolkit.controls.extended.syntax.XMLSyntax(); else if(id == "css") syntax = new haxe.ui.toolkit.controls.extended.syntax.CSSSyntax();
	return syntax;
};
haxe.ui.toolkit.controls.extended.syntax.CodeSyntax.prototype = {
	addRule: function(regex,color,bold) {
		if(bold == null) bold = false;
		var f = new flash.text.TextFormat(this._defaultFormat.font,this._defaultFormat.size,color);
		f.bold = bold;
		this._rules.set(regex,f);
	}
	,get_identifier: function() {
		return this._identifier;
	}
	,get_defaultFormat: function() {
		return this._defaultFormat;
	}
	,set_defaultFormat: function(value) {
		this._defaultFormat = value;
		return value;
	}
	,get_rules: function() {
		return this._rules;
	}
	,getCompiledRule: function(rule) {
		var r = this._compiledRules.get(rule);
		if(r == null) {
			r = new EReg(rule,"g");
			this._compiledRules.set(rule,r);
		}
		return r;
	}
	,__class__: haxe.ui.toolkit.controls.extended.syntax.CodeSyntax
	,__properties__: {get_rules:"get_rules",set_defaultFormat:"set_defaultFormat",get_defaultFormat:"get_defaultFormat",get_identifier:"get_identifier"}
};
haxe.ui.toolkit.controls.extended.syntax.CSSSyntax = function() {
	haxe.ui.toolkit.controls.extended.syntax.CodeSyntax.call(this);
	this._identifier = "css";
	this.addRule("(#|\\w|.)(.*?){|}",255,true);
	this.addRule("(\\w*)\\:",3840511,true);
	this.addRule(":(.*?)\\;",8912896);
};
$hxClasses["haxe.ui.toolkit.controls.extended.syntax.CSSSyntax"] = haxe.ui.toolkit.controls.extended.syntax.CSSSyntax;
haxe.ui.toolkit.controls.extended.syntax.CSSSyntax.__name__ = ["haxe","ui","toolkit","controls","extended","syntax","CSSSyntax"];
haxe.ui.toolkit.controls.extended.syntax.CSSSyntax.__super__ = haxe.ui.toolkit.controls.extended.syntax.CodeSyntax;
haxe.ui.toolkit.controls.extended.syntax.CSSSyntax.prototype = $extend(haxe.ui.toolkit.controls.extended.syntax.CodeSyntax.prototype,{
	__class__: haxe.ui.toolkit.controls.extended.syntax.CSSSyntax
});
haxe.ui.toolkit.controls.extended.syntax.HaxeSyntax = function() {
	haxe.ui.toolkit.controls.extended.syntax.CodeSyntax.call(this);
	this._identifier = "haxe";
	this.addRule("(class )|(extends )|(implements )|(function)|(package )|(import )|(var )|(null)|(if)|(while)|(trace)|(return)",255);
	this.addRule("(public )|(private )|(static )|(Void)|(Bool)|(Int)|(Dynamic)|(String)|(Float)",3840511);
	this.addRule("(?:#.*)",8947848);
	this.addRule("(?:/\\*(?:[^*]|(?:\\*+[^*/]))*\\*+/)|(?://.*)",34816);
};
$hxClasses["haxe.ui.toolkit.controls.extended.syntax.HaxeSyntax"] = haxe.ui.toolkit.controls.extended.syntax.HaxeSyntax;
haxe.ui.toolkit.controls.extended.syntax.HaxeSyntax.__name__ = ["haxe","ui","toolkit","controls","extended","syntax","HaxeSyntax"];
haxe.ui.toolkit.controls.extended.syntax.HaxeSyntax.__super__ = haxe.ui.toolkit.controls.extended.syntax.CodeSyntax;
haxe.ui.toolkit.controls.extended.syntax.HaxeSyntax.prototype = $extend(haxe.ui.toolkit.controls.extended.syntax.CodeSyntax.prototype,{
	__class__: haxe.ui.toolkit.controls.extended.syntax.HaxeSyntax
});
haxe.ui.toolkit.controls.extended.syntax.XMLSyntax = function() {
	haxe.ui.toolkit.controls.extended.syntax.CodeSyntax.call(this);
	this._identifier = "xml";
	this.addRule("(<(.*?) |</(.*?)>|/>)",255,true);
	this.addRule("(\\w*)\\=",3840511,true);
	this.addRule("\"(.*?)\"",8912896);
};
$hxClasses["haxe.ui.toolkit.controls.extended.syntax.XMLSyntax"] = haxe.ui.toolkit.controls.extended.syntax.XMLSyntax;
haxe.ui.toolkit.controls.extended.syntax.XMLSyntax.__name__ = ["haxe","ui","toolkit","controls","extended","syntax","XMLSyntax"];
haxe.ui.toolkit.controls.extended.syntax.XMLSyntax.__super__ = haxe.ui.toolkit.controls.extended.syntax.CodeSyntax;
haxe.ui.toolkit.controls.extended.syntax.XMLSyntax.prototype = $extend(haxe.ui.toolkit.controls.extended.syntax.CodeSyntax.prototype,{
	__class__: haxe.ui.toolkit.controls.extended.syntax.XMLSyntax
});
haxe.ui.toolkit.controls.popups = {};
haxe.ui.toolkit.controls.popups.PopupContent = function() {
	haxe.ui.toolkit.containers.VBox.call(this);
};
$hxClasses["haxe.ui.toolkit.controls.popups.PopupContent"] = haxe.ui.toolkit.controls.popups.PopupContent;
haxe.ui.toolkit.controls.popups.PopupContent.__name__ = ["haxe","ui","toolkit","controls","popups","PopupContent"];
haxe.ui.toolkit.controls.popups.PopupContent.__super__ = haxe.ui.toolkit.containers.VBox;
haxe.ui.toolkit.controls.popups.PopupContent.prototype = $extend(haxe.ui.toolkit.containers.VBox.prototype,{
	onButtonClicked: function(button) {
		return true;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.containers.VBox.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.popups.PopupContent();
	}
	,__class__: haxe.ui.toolkit.controls.popups.PopupContent
});
haxe.ui.toolkit.controls.popups.SimplePopupContent = function(text) {
	if(text == null) text = "";
	haxe.ui.toolkit.controls.popups.PopupContent.call(this);
	this._autoSize = false;
	this._textControl = new haxe.ui.toolkit.controls.Text();
	this._textControl.set_text(text);
};
$hxClasses["haxe.ui.toolkit.controls.popups.SimplePopupContent"] = haxe.ui.toolkit.controls.popups.SimplePopupContent;
haxe.ui.toolkit.controls.popups.SimplePopupContent.__name__ = ["haxe","ui","toolkit","controls","popups","SimplePopupContent"];
haxe.ui.toolkit.controls.popups.SimplePopupContent.__super__ = haxe.ui.toolkit.controls.popups.PopupContent;
haxe.ui.toolkit.controls.popups.SimplePopupContent.prototype = $extend(haxe.ui.toolkit.controls.popups.PopupContent.prototype,{
	initialize: function() {
		haxe.ui.toolkit.controls.popups.PopupContent.prototype.initialize.call(this);
		this.addChild(this._textControl);
		this.set_height(this._textControl.get_height());
	}
	,clone: function() {
		var c = haxe.ui.toolkit.controls.popups.PopupContent.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.popups.SimplePopupContent();
	}
	,__class__: haxe.ui.toolkit.controls.popups.SimplePopupContent
});
haxe.ui.toolkit.controls.popups.BusyPopupContent = function(text) {
	if(text == null) text = "";
	haxe.ui.toolkit.controls.popups.SimplePopupContent.call(this,text);
};
$hxClasses["haxe.ui.toolkit.controls.popups.BusyPopupContent"] = haxe.ui.toolkit.controls.popups.BusyPopupContent;
haxe.ui.toolkit.controls.popups.BusyPopupContent.__name__ = ["haxe","ui","toolkit","controls","popups","BusyPopupContent"];
haxe.ui.toolkit.controls.popups.BusyPopupContent.__super__ = haxe.ui.toolkit.controls.popups.SimplePopupContent;
haxe.ui.toolkit.controls.popups.BusyPopupContent.prototype = $extend(haxe.ui.toolkit.controls.popups.SimplePopupContent.prototype,{
	initialize: function() {
		this.addChild(this._textControl);
		this.set_height(this._textControl.get_height() + 15);
	}
	,clone: function() {
		var c = haxe.ui.toolkit.controls.popups.SimplePopupContent.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.popups.BusyPopupContent();
	}
	,__class__: haxe.ui.toolkit.controls.popups.BusyPopupContent
});
haxe.ui.toolkit.controls.popups.CalendarPopupContent = function() {
	haxe.ui.toolkit.controls.popups.PopupContent.call(this);
	this._cal = new haxe.ui.toolkit.containers.CalendarView();
	this._cal.set_percentWidth(100);
};
$hxClasses["haxe.ui.toolkit.controls.popups.CalendarPopupContent"] = haxe.ui.toolkit.controls.popups.CalendarPopupContent;
haxe.ui.toolkit.controls.popups.CalendarPopupContent.__name__ = ["haxe","ui","toolkit","controls","popups","CalendarPopupContent"];
haxe.ui.toolkit.controls.popups.CalendarPopupContent.__super__ = haxe.ui.toolkit.controls.popups.PopupContent;
haxe.ui.toolkit.controls.popups.CalendarPopupContent.prototype = $extend(haxe.ui.toolkit.controls.popups.PopupContent.prototype,{
	initialize: function() {
		haxe.ui.toolkit.controls.popups.PopupContent.prototype.initialize.call(this);
		this.addChild(this._cal);
		this.set_height(this._cal.get_height());
	}
	,get_selectedDate: function() {
		return this._cal.get_selectedDate();
	}
	,set_selectedDate: function(value) {
		this._cal.set_selectedDate(value);
		return value;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.controls.popups.PopupContent.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.popups.CalendarPopupContent();
	}
	,__class__: haxe.ui.toolkit.controls.popups.CalendarPopupContent
	,__properties__: $extend(haxe.ui.toolkit.controls.popups.PopupContent.prototype.__properties__,{set_selectedDate:"set_selectedDate",get_selectedDate:"get_selectedDate"})
});
haxe.ui.toolkit.controls.popups.CustomPopupContent = function(display) {
	haxe.ui.toolkit.controls.popups.PopupContent.call(this);
	this._display = display;
};
$hxClasses["haxe.ui.toolkit.controls.popups.CustomPopupContent"] = haxe.ui.toolkit.controls.popups.CustomPopupContent;
haxe.ui.toolkit.controls.popups.CustomPopupContent.__name__ = ["haxe","ui","toolkit","controls","popups","CustomPopupContent"];
haxe.ui.toolkit.controls.popups.CustomPopupContent.__super__ = haxe.ui.toolkit.controls.popups.PopupContent;
haxe.ui.toolkit.controls.popups.CustomPopupContent.prototype = $extend(haxe.ui.toolkit.controls.popups.PopupContent.prototype,{
	initialize: function() {
		haxe.ui.toolkit.controls.popups.PopupContent.prototype.initialize.call(this);
		this.addChild(this._display);
		this.set_height(this._display.get_height());
	}
	,clone: function() {
		var c = haxe.ui.toolkit.controls.popups.PopupContent.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.popups.CustomPopupContent();
	}
	,__class__: haxe.ui.toolkit.controls.popups.CustomPopupContent
});
haxe.ui.toolkit.controls.popups.ListPopupContent = function(dataSource,selectedIndex,fn) {
	if(selectedIndex == null) selectedIndex = -1;
	this._selectedIndex = -1;
	this._maxListSize = 4;
	haxe.ui.toolkit.controls.popups.PopupContent.call(this);
	this._selectedIndex = selectedIndex;
	this._fn = fn;
	this._list = new haxe.ui.toolkit.containers.ListView();
	this._list.set_percentWidth(100);
	this._list.set_dataSource(dataSource);
};
$hxClasses["haxe.ui.toolkit.controls.popups.ListPopupContent"] = haxe.ui.toolkit.controls.popups.ListPopupContent;
haxe.ui.toolkit.controls.popups.ListPopupContent.__name__ = ["haxe","ui","toolkit","controls","popups","ListPopupContent"];
haxe.ui.toolkit.controls.popups.ListPopupContent.__super__ = haxe.ui.toolkit.controls.popups.PopupContent;
haxe.ui.toolkit.controls.popups.ListPopupContent.prototype = $extend(haxe.ui.toolkit.controls.popups.PopupContent.prototype,{
	initialize: function() {
		haxe.ui.toolkit.controls.popups.PopupContent.prototype.initialize.call(this);
		this._list.addEventListener("haxeui_" + "change",$bind(this,this._onListChange));
		this.addChild(this._list);
		var n = this._maxListSize;
		if(n > this._list.get_listSize()) n = this._list.get_listSize();
		var listHeight = n * this._list.get_itemHeight() + (this._list.get_layout().get_padding().get_top() + this._list.get_layout().get_padding().get_bottom());
		this._list.set_height(listHeight);
		this.set_height(listHeight);
		this._list.setSelectedIndexNoEvent(this._selectedIndex);
	}
	,get_selectedIndex: function() {
		var index = this._selectedIndex;
		if(this._list.get_ready()) index = this._list.get_selectedIndex();
		return index;
	}
	,set_selectedIndex: function(value) {
		this._selectedIndex = value;
		if(this._list.get_ready()) this._list.set_selectedIndex(value);
		return value;
	}
	,get_listSize: function() {
		if(this._list.get_ready() == false) return -1;
		return this._list.get_listSize();
	}
	,_onListChange: function(event) {
		this.hideTimer = new flash.utils.Timer(400,1);
		this.hideTimer.addEventListener("timerComplete",$bind(this,this._onTimerComplete));
		this.hideTimer.start();
	}
	,_onTimerComplete: function(event) {
		this.hideTimer.removeEventListener("timerComplete",$bind(this,this._onTimerComplete));
		if(Std["is"](this.get_parent(),haxe.ui.toolkit.controls.popups.Popup)) haxe.ui.toolkit.core.PopupManager.get_instance().hidePopup(js.Boot.__cast(this.get_parent() , haxe.ui.toolkit.controls.popups.Popup));
		if(this._fn != null) {
			var item = this._list.get_selectedItems()[0];
			var index = Lambda.indexOf(this._list.get_selectedItems(),item);
			var param_text = item.get_text();
			var param_index = index;
			this._fn(item);
		}
	}
	,setSelectedIndexNoEvent: function(index) {
		this._selectedIndex = index;
		if(this._list.get_ready()) this._list.setSelectedIndexNoEvent(index);
	}
	,clone: function() {
		var c = haxe.ui.toolkit.controls.popups.PopupContent.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.popups.ListPopupContent();
	}
	,__class__: haxe.ui.toolkit.controls.popups.ListPopupContent
	,__properties__: $extend(haxe.ui.toolkit.controls.popups.PopupContent.prototype.__properties__,{get_listSize:"get_listSize",set_selectedIndex:"set_selectedIndex",get_selectedIndex:"get_selectedIndex"})
});
haxe.ui.toolkit.core.interfaces.IDraggable = function() { };
$hxClasses["haxe.ui.toolkit.core.interfaces.IDraggable"] = haxe.ui.toolkit.core.interfaces.IDraggable;
haxe.ui.toolkit.core.interfaces.IDraggable.__name__ = ["haxe","ui","toolkit","core","interfaces","IDraggable"];
haxe.ui.toolkit.core.interfaces.IDraggable.prototype = {
	__class__: haxe.ui.toolkit.core.interfaces.IDraggable
};
haxe.ui.toolkit.controls.popups.Popup = function(title,content,config,fn) {
	haxe.ui.toolkit.containers.VBox.call(this);
	this._autoSize = true;
	if(title != null) {
		this._titleBar = new haxe.ui.toolkit.containers.HBox();
		this._titleBar.set_autoSize(false);
		this._titleBar.set_id("titleBar");
	}
	this._content = content;
	this._content.popup = this;
	if(title != null) {
		this._title = new haxe.ui.toolkit.controls.Text();
		this._title.set_id("title");
		this._title.set_text(title);
	}
	this._buttonBar = new haxe.ui.toolkit.containers.HBox();
	this._buttonBar.set_id("buttonBar");
	this._buttonBar.set_horizontalAlign("center");
	this._config = config;
	if(this._config == null) {
		this._config = { };
		this._config.buttons = new Array();
	}
	if(this._config.id != null) this.set_id(this._config.id);
	if(this._config.styleName != null) this.set_styleName(this._config.styleName);
	this._fn = fn;
};
$hxClasses["haxe.ui.toolkit.controls.popups.Popup"] = haxe.ui.toolkit.controls.popups.Popup;
haxe.ui.toolkit.controls.popups.Popup.__name__ = ["haxe","ui","toolkit","controls","popups","Popup"];
haxe.ui.toolkit.controls.popups.Popup.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IDraggable];
haxe.ui.toolkit.controls.popups.Popup.__super__ = haxe.ui.toolkit.containers.VBox;
haxe.ui.toolkit.controls.popups.Popup.prototype = $extend(haxe.ui.toolkit.containers.VBox.prototype,{
	initialize: function() {
		var _g1 = this;
		haxe.ui.toolkit.containers.VBox.prototype.initialize.call(this);
		if(this._titleBar != null) {
			this._titleBar.set_percentWidth(100);
			this._titleBar.addChild(this._title);
			this._titleBar.get_sprite().buttonMode = true;
			this._titleBar.get_sprite().useHandCursor = true;
			this.addChild(this._titleBar);
		}
		if(this._content == null) this._content = new haxe.ui.toolkit.controls.popups.PopupContent();
		this._content.set_id("popupContent");
		this._content.set_percentWidth(100);
		this.addChild(this._content);
		if(this._config.buttons.length > 0) {
			var buttons = this._config.buttons;
			var _g = 0;
			while(_g < buttons.length) {
				var info = buttons[_g];
				++_g;
				if(info.type != 1048576) this.addStandardButton(info.type); else {
					var button = new haxe.ui.toolkit.controls.Button();
					button.set_text(info.text);
					button.addEventListener(flash.events.MouseEvent.CLICK,function(e) {
						_g1.clickButton(1048576);
					});
					this._buttonBar.addChild(button);
				}
			}
			this.addChild(this._buttonBar);
		}
		if(this._config.width != null) this.set_width(this._config.width);
		haxe.ui.toolkit.core.PopupManager.get_instance().centerPopup(this);
	}
	,allowDrag: function(event) {
		return this._titleBar.hitTest(event.stageX,event.stageY);
	}
	,get_content: function() {
		return this._content;
	}
	,get_config: function() {
		return this._config;
	}
	,addStandardButton: function(v) {
		var _g = this;
		if(v == 1) {
			var button = new haxe.ui.toolkit.controls.Button();
			button.set_text("OK");
			button.addEventListener(flash.events.MouseEvent.CLICK,function(e) {
				_g.clickButton(1);
			});
			this._buttonBar.addChild(button);
		}
		if(v == 16) {
			var button1 = new haxe.ui.toolkit.controls.Button();
			button1.set_text("Yes");
			button1.addEventListener(flash.events.MouseEvent.CLICK,function(e1) {
				_g.clickButton(16);
			});
			this._buttonBar.addChild(button1);
		}
		if(v == 256) {
			var button2 = new haxe.ui.toolkit.controls.Button();
			button2.set_text("No");
			button2.addEventListener(flash.events.MouseEvent.CLICK,function(e2) {
				_g.clickButton(256);
			});
			this._buttonBar.addChild(button2);
		}
		if(v == 4096) {
			var button3 = new haxe.ui.toolkit.controls.Button();
			button3.set_text("Cancel");
			button3.addEventListener(flash.events.MouseEvent.CLICK,function(e3) {
				_g.clickButton(4096);
			});
			this._buttonBar.addChild(button3);
		}
		if(v == 65536) {
			var button4 = new haxe.ui.toolkit.controls.Button();
			button4.set_text("Confirm");
			button4.addEventListener(flash.events.MouseEvent.CLICK,function(e4) {
				_g.clickButton(65536);
			});
			this._buttonBar.addChild(button4);
		}
	}
	,clickButton: function(button) {
		if(this._content.onButtonClicked(button) == true) haxe.ui.toolkit.core.PopupManager.get_instance().hidePopup(this);
		if(this._fn != null) this._fn(button);
	}
	,clone: function() {
		var c = haxe.ui.toolkit.containers.VBox.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.popups.Popup();
	}
	,__class__: haxe.ui.toolkit.controls.popups.Popup
	,__properties__: $extend(haxe.ui.toolkit.containers.VBox.prototype.__properties__,{get_config:"get_config",get_content:"get_content"})
});
haxe.ui.toolkit.controls.selection = {};
haxe.ui.toolkit.controls.selection.DateSelector = function() {
	this.dateFormat = "%d/%m/%Y";
	this._method = "";
	haxe.ui.toolkit.controls.Button.call(this);
	this.set_text("Select Date");
	this.set_toggle(true);
};
$hxClasses["haxe.ui.toolkit.controls.selection.DateSelector"] = haxe.ui.toolkit.controls.selection.DateSelector;
haxe.ui.toolkit.controls.selection.DateSelector.__name__ = ["haxe","ui","toolkit","controls","selection","DateSelector"];
haxe.ui.toolkit.controls.selection.DateSelector.__super__ = haxe.ui.toolkit.controls.Button;
haxe.ui.toolkit.controls.selection.DateSelector.prototype = $extend(haxe.ui.toolkit.controls.Button.prototype,{
	preInitialize: function() {
		haxe.ui.toolkit.controls.Button.prototype.preInitialize.call(this);
		if(this._style != null) {
			if(this._style.get_selectionMethod() != null) this._method = this._style.get_selectionMethod();
		}
	}
	,initialize: function() {
		haxe.ui.toolkit.controls.Button.prototype.initialize.call(this);
		this.set_autoSize(false);
	}
	,_onMouseClick: function(event) {
		haxe.ui.toolkit.controls.Button.prototype._onMouseClick.call(this,event);
		if(this._cal == null || this._cal.get_visible() == false) this.showCalendar(); else this.hideCalendar();
	}
	,applyStyle: function() {
		haxe.ui.toolkit.controls.Button.prototype.applyStyle.call(this);
		if(this._style != null) {
			if(this._style.get_selectionMethod() != null) this._method = this._style.get_selectionMethod();
		}
	}
	,showCalendar: function() {
		var _g = this;
		if(this._method == "popup") haxe.ui.toolkit.core.PopupManager.get_instance().showCalendar("Select Date",function(button,date) {
			_g.set_selected(false);
			if(button == 65536) {
				var dateString = DateTools.format(date,_g.dateFormat);
				_g.set_text(dateString);
			}
		}); else {
			if(this._cal == null) {
				this._cal = new haxe.ui.toolkit.containers.CalendarView();
				this._cal.addEventListener(flash.events.Event.CHANGE,$bind(this,this.onDateChange));
				this._cal.addEventListener(flash.events.Event.ADDED_TO_STAGE,function(e) {
					_g.showCalendar();
				});
				this.get_root().addChild(this._cal);
				return;
			}
			this.get_root().addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onRootMouseDown));
			this.get_root().addEventListener(flash.events.MouseEvent.MOUSE_WHEEL,$bind(this,this._onRootMouseDown));
			this._cal.set_x(this.get_stageX() - this.get_root().get_stageX());
			this._cal.set_y(this.get_stageY() + this.get_height() - this.get_root().get_stageY());
			this._cal.get_sprite().set_filters([new flash.filters.DropShadowFilter(4,45,8421504,1,4,4,1,3)]);
			var transition = haxe.ui.toolkit.core.Toolkit.getTransitionForClass(haxe.ui.toolkit.controls.selection.DateSelector);
			if(transition == "slide") {
				this._cal.set_clipHeight(0);
				this._cal.get_sprite().set_alpha(1);
				this._cal.set_visible(true);
				motion.Actuate.tween(this._cal,.1,{ clipHeight : this._cal.get_height()},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
					_g._cal.clearClip();
				});
			} else if(transition == "fade") {
				this._cal.get_sprite().set_alpha(0);
				this._cal.set_visible(true);
				motion.Actuate.tween(this._cal.get_sprite(),.2,{ alpha : 1},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
				});
			} else {
				this._cal.get_sprite().set_alpha(1);
				this._cal.set_visible(true);
			}
			this.set_selected(true);
		}
	}
	,hideCalendar: function() {
		var _g = this;
		if(this._cal != null) {
			var transition = haxe.ui.toolkit.core.Toolkit.getTransitionForClass(haxe.ui.toolkit.controls.selection.DateSelector);
			if(transition == "slide") {
				this._cal.get_sprite().set_alpha(1);
				motion.Actuate.tween(this._cal,.1,{ clipHeight : 0},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
					_g._cal.set_visible(false);
					_g._cal.clearClip();
				});
			} else if(transition == "fade") motion.Actuate.tween(this._cal.get_sprite(),.2,{ alpha : 0},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
				_g._cal.set_visible(false);
			}); else {
				this._cal.get_sprite().set_alpha(1);
				this._cal.set_visible(false);
			}
			this.set_selected(false);
		}
	}
	,get_method: function() {
		return this._method;
	}
	,set_method: function(value) {
		this._method = value;
		return value;
	}
	,get_date: function() {
		if(this._cal != null) return this._cal.get_selectedDate();
		return new Date();
	}
	,set_dateFormat: function(value) {
		this.dateFormat = value;
		if(this._cal != null) this.set_text(DateTools.format(this._cal.get_selectedDate(),this.dateFormat));
		return value;
	}
	,_onRootMouseDown: function(event) {
		var mouseInList = false;
		if(this._cal != null) mouseInList = this._cal.hitTest(event.stageX,event.stageY);
		var mouseIn = this.hitTest(event.stageX,event.stageY);
		if(mouseInList == false && this._cal != null && mouseIn == false) {
			this.get_root().removeEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onRootMouseDown));
			this.get_root().removeEventListener(flash.events.MouseEvent.MOUSE_WHEEL,$bind(this,this._onRootMouseDown));
			this.hideCalendar();
		}
	}
	,onDateChange: function(event) {
		var dateString = DateTools.format(this._cal.get_selectedDate(),this.dateFormat);
		this.set_text(dateString);
		this.hideCalendar();
	}
	,clone: function() {
		var c = haxe.ui.toolkit.controls.Button.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.selection.DateSelector();
	}
	,__class__: haxe.ui.toolkit.controls.selection.DateSelector
	,__properties__: $extend(haxe.ui.toolkit.controls.Button.prototype.__properties__,{set_dateFormat:"set_dateFormat",get_date:"get_date",set_method:"set_method",get_method:"get_method"})
});
haxe.ui.toolkit.controls.selection.ListSelector = function() {
	this._selectedIndex = -1;
	this._method = "";
	this._maxListSize = 4;
	haxe.ui.toolkit.controls.Button.call(this);
	this.set_toggle(true);
};
$hxClasses["haxe.ui.toolkit.controls.selection.ListSelector"] = haxe.ui.toolkit.controls.selection.ListSelector;
haxe.ui.toolkit.controls.selection.ListSelector.__name__ = ["haxe","ui","toolkit","controls","selection","ListSelector"];
haxe.ui.toolkit.controls.selection.ListSelector.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IDataComponent];
haxe.ui.toolkit.controls.selection.ListSelector.__super__ = haxe.ui.toolkit.controls.Button;
haxe.ui.toolkit.controls.selection.ListSelector.prototype = $extend(haxe.ui.toolkit.controls.Button.prototype,{
	preInitialize: function() {
		haxe.ui.toolkit.controls.Button.prototype.preInitialize.call(this);
		if(this._style != null) {
			if(this._style.get_selectionMethod() != null) this._method = this._style.get_selectionMethod();
		}
	}
	,initialize: function() {
		haxe.ui.toolkit.controls.Button.prototype.initialize.call(this);
		this.set_autoSize(false);
	}
	,_onMouseClick: function(event) {
		haxe.ui.toolkit.controls.Button.prototype._onMouseClick.call(this,event);
		if(this._list == null || this._list.get_visible() == false) this.showList(); else this.hideList();
	}
	,applyStyle: function() {
		haxe.ui.toolkit.controls.Button.prototype.applyStyle.call(this);
		if(this._style != null) {
			if(this._style.get_selectionMethod() != null) this._method = this._style.get_selectionMethod();
		}
	}
	,get_dataSource: function() {
		if(this._dataSource == null) this._dataSource = new haxe.ui.toolkit.data.ArrayDataSource();
		return this._dataSource;
	}
	,set_dataSource: function(value) {
		this._dataSource = value;
		return value;
	}
	,showList: function() {
		var _g = this;
		if(this._method == "popup") haxe.ui.toolkit.core.PopupManager.get_instance().showList(this.get_dataSource(),this._selectedIndex,"Select",function(item) {
			_g.set_text(item.get_text());
			_g._selectedItems = new Array();
			_g._selectedItems.push(item);
			_g.set_selected(false);
			var event = new flash.events.Event(flash.events.Event.CHANGE);
			_g.dispatchEvent(event);
		}); else {
			if(this._list == null) {
				this._list = new haxe.ui.toolkit.containers.ListView();
				this._list.addEventListener(flash.events.Event.CHANGE,$bind(this,this._onListChange));
				this._list.get_content().addEventListener(flash.events.Event.ADDED_TO_STAGE,function(e) {
					_g.showList();
				});
				this.get_root().addChild(this._list);
				return;
			}
			this._list.set_dataSource(this._dataSource);
			this.get_root().addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onRootMouseDown));
			this.get_root().addEventListener(flash.events.MouseEvent.MOUSE_WHEEL,$bind(this,this._onRootMouseDown));
			this._list.set_x(this.get_stageX() - this.get_root().get_stageX());
			this._list.set_y(this.get_stageY() + this.get_height() - this.get_root().get_stageY());
			if(this._list.get_width() == 0) this._list.set_width(this.get_width());
			var n = this._maxListSize;
			if(n > this._list.get_listSize()) n = this._list.get_listSize();
			var listHeight = n * this._list.get_itemHeight() + (this._list.get_layout().get_padding().get_top() + this._list.get_layout().get_padding().get_bottom());
			this._list.set_height(listHeight);
			this._list.setSelectedIndexNoEvent(this._selectedIndex);
			var transition = haxe.ui.toolkit.core.Toolkit.getTransitionForClass(haxe.ui.toolkit.controls.selection.ListSelector);
			if(transition == "slide") {
				this._list.set_clipHeight(0);
				this._list.get_sprite().set_alpha(1);
				this._list.set_visible(true);
				motion.Actuate.tween(this._list,.1,{ clipHeight : listHeight},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
					_g._list.clearClip();
				});
			} else if(transition == "fade") {
				this._list.get_sprite().set_alpha(0);
				this._list.set_visible(true);
				motion.Actuate.tween(this._list.get_sprite(),.2,{ alpha : 1},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
				});
			} else {
				this._list.get_sprite().set_alpha(1);
				this._list.set_visible(true);
			}
			this.set_selected(true);
		}
	}
	,hideList: function() {
		var _g = this;
		if(this._list != null) {
			var transition = haxe.ui.toolkit.core.Toolkit.getTransitionForClass(haxe.ui.toolkit.controls.selection.ListSelector);
			if(transition == "slide") {
				this._list.get_sprite().set_alpha(1);
				motion.Actuate.tween(this._list,.1,{ clipHeight : 0},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
					_g._list.set_visible(false);
					_g._list.clearClip();
				});
			} else if(transition == "fade") motion.Actuate.tween(this._list.get_sprite(),.2,{ alpha : 0},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
				_g._list.set_visible(false);
			}); else {
				this._list.get_sprite().set_alpha(1);
				this._list.set_visible(false);
			}
			this.set_selected(false);
		}
	}
	,get_method: function() {
		return this._method;
	}
	,set_method: function(value) {
		this._method = value;
		return value;
	}
	,get_selectedItems: function() {
		return this._selectedItems;
	}
	,get_selectedIndex: function() {
		return this._selectedIndex;
	}
	,set_selectedIndex: function(value) {
		this._selectedIndex = value;
		if(this._list != null) {
			this._list.set_selectedIndex(value);
			this._selectedItems = this._list.get_selectedItems();
		}
		if(this._selectedIndex > -1 && this._dataSource != null) {
			var n = 0;
			if(this.get_dataSource().moveFirst()) do {
				if(n == this._selectedIndex) {
					this.set_text(this._dataSource.get().text);
					break;
				}
				n++;
			} while(this.get_dataSource().moveNext());
		}
		return value;
	}
	,_onRootMouseDown: function(event) {
		var mouseInList = false;
		if(this._list != null) mouseInList = this._list.hitTest(event.stageX,event.stageY);
		var mouseIn = this.hitTest(event.stageX,event.stageY);
		if(mouseInList == false && this._list != null && mouseIn == false) {
			this.get_root().removeEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onRootMouseDown));
			this.get_root().removeEventListener(flash.events.MouseEvent.MOUSE_WHEEL,$bind(this,this._onRootMouseDown));
			this.hideList();
		}
	}
	,_onListChange: function(event) {
		if(this._list.get_selectedItems() != null && this._list.get_selectedItems().length > 0) {
			this.set_text(this._list.get_selectedItems()[0].get_text());
			this._selectedIndex = this._list.get_selectedIndex();
			this._selectedItems = this._list.get_selectedItems();
			this.hideList();
			var event1 = new flash.events.Event(flash.events.Event.CHANGE);
			this.dispatchEvent(event1);
		}
	}
	,clone: function() {
		var c = haxe.ui.toolkit.controls.Button.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.selection.ListSelector();
	}
	,__class__: haxe.ui.toolkit.controls.selection.ListSelector
	,__properties__: $extend(haxe.ui.toolkit.controls.Button.prototype.__properties__,{set_selectedIndex:"set_selectedIndex",get_selectedIndex:"get_selectedIndex",get_selectedItems:"get_selectedItems",set_method:"set_method",get_method:"get_method",set_dataSource:"set_dataSource",get_dataSource:"get_dataSource"})
});
haxe.ui.toolkit.controls.selection.DropDownList = function() {
	haxe.ui.toolkit.containers.ListView.call(this);
};
$hxClasses["haxe.ui.toolkit.controls.selection.DropDownList"] = haxe.ui.toolkit.controls.selection.DropDownList;
haxe.ui.toolkit.controls.selection.DropDownList.__name__ = ["haxe","ui","toolkit","controls","selection","DropDownList"];
haxe.ui.toolkit.controls.selection.DropDownList.__super__ = haxe.ui.toolkit.containers.ListView;
haxe.ui.toolkit.controls.selection.DropDownList.prototype = $extend(haxe.ui.toolkit.containers.ListView.prototype,{
	clone: function() {
		var c = haxe.ui.toolkit.containers.ListView.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.controls.selection.DropDownList();
	}
	,__class__: haxe.ui.toolkit.controls.selection.DropDownList
});
haxe.ui.toolkit.core.ClassManager = function() {
	this.registerDefaults();
};
$hxClasses["haxe.ui.toolkit.core.ClassManager"] = haxe.ui.toolkit.core.ClassManager;
haxe.ui.toolkit.core.ClassManager.__name__ = ["haxe","ui","toolkit","core","ClassManager"];
haxe.ui.toolkit.core.ClassManager.__properties__ = {get_instance:"get_instance"}
haxe.ui.toolkit.core.ClassManager._instance = null;
haxe.ui.toolkit.core.ClassManager.instance = null;
haxe.ui.toolkit.core.ClassManager.get_instance = function() {
	if(haxe.ui.toolkit.core.ClassManager._instance == null) haxe.ui.toolkit.core.ClassManager._instance = new haxe.ui.toolkit.core.ClassManager();
	return haxe.ui.toolkit.core.ClassManager._instance;
};
haxe.ui.toolkit.core.ClassManager.prototype = {
	registerDefaults: function() {
		var _g = this;
		_g.registerComponentClass(haxe.ui.toolkit.containers.Accordion,"accordion");
		_g.registerComponentClass(haxe.ui.toolkit.containers.Box,"box");
		_g.registerComponentClass(haxe.ui.toolkit.containers.CalendarView,"calendarview");
		_g.registerComponentClass(haxe.ui.toolkit.containers.Container,"container");
		_g.registerComponentClass(haxe.ui.toolkit.containers.ContinuousBox,"continuousbox");
		_g.registerComponentClass(haxe.ui.toolkit.containers.ExpandablePanel,"expandablepanel");
		_g.registerComponentClass(haxe.ui.toolkit.containers.Frame,"frame");
		_g.registerComponentClass(haxe.ui.toolkit.containers.Grid,"grid");
		_g.registerComponentClass(haxe.ui.toolkit.containers.HBox,"hbox");
		_g.registerComponentClass(haxe.ui.toolkit.containers.ListView,"listview");
		_g.registerComponentClass(haxe.ui.toolkit.containers.MenuBar,"menubar");
		_g.registerComponentClass(haxe.ui.toolkit.containers.RTFView,"rtfview");
		_g.registerComponentClass(haxe.ui.toolkit.containers.ScrollView,"scrollview");
		_g.registerComponentClass(haxe.ui.toolkit.containers.Stack,"stack");
		_g.registerComponentClass(haxe.ui.toolkit.containers.TableView,"tableview");
		_g.registerComponentClass(haxe.ui.toolkit.containers.TabView,"tabview");
		_g.registerComponentClass(haxe.ui.toolkit.containers.VBox,"vbox");
		_g.registerComponentClass(haxe.ui.toolkit.controls.Button,"button");
		_g.registerComponentClass(haxe.ui.toolkit.controls.Calendar,"calendar");
		_g.registerComponentClass(haxe.ui.toolkit.controls.CheckBox,"checkbox");
		_g.registerComponentClass(haxe.ui.toolkit.controls.HProgress,"hprogress");
		_g.registerComponentClass(haxe.ui.toolkit.controls.HScroll,"hscroll");
		_g.registerComponentClass(haxe.ui.toolkit.controls.HSlider,"hslider");
		_g.registerComponentClass(haxe.ui.toolkit.controls.Image,"image");
		_g.registerComponentClass(haxe.ui.toolkit.controls.Menu,"menu");
		_g.registerComponentClass(haxe.ui.toolkit.controls.MenuButton,"menubutton");
		_g.registerComponentClass(haxe.ui.toolkit.controls.MenuItem,"menuitem");
		_g.registerComponentClass(haxe.ui.toolkit.controls.OptionBox,"optionbox");
		_g.registerComponentClass(haxe.ui.toolkit.controls.Progress,"progress");
		_g.registerComponentClass(haxe.ui.toolkit.controls.Scroll,"scroll");
		_g.registerComponentClass(haxe.ui.toolkit.controls.Slider,"slider");
		_g.registerComponentClass(haxe.ui.toolkit.controls.Spacer,"spacer");
		_g.registerComponentClass(haxe.ui.toolkit.controls.TabBar,"tabbar");
		_g.registerComponentClass(haxe.ui.toolkit.controls.Text,"text");
		_g.registerComponentClass(haxe.ui.toolkit.controls.TextInput,"textinput");
		_g.registerComponentClass(haxe.ui.toolkit.controls.Value,"value");
		_g.registerComponentClass(haxe.ui.toolkit.controls.VProgress,"vprogress");
		_g.registerComponentClass(haxe.ui.toolkit.controls.VScroll,"vscroll");
		_g.registerComponentClass(haxe.ui.toolkit.controls.VSlider,"vslider");
		_g.registerComponentClass(haxe.ui.toolkit.controls.selection.DateSelector,"dateselector");
		_g.registerComponentClass(haxe.ui.toolkit.controls.selection.ListSelector,"listselector");
		_g.registerComponentClass(haxe.ui.toolkit.controls.extended.Code,"code");
		_g.registerComponentClass(haxe.ui.toolkit.controls.extended.RTF,"rtf");
		_g.registerComponentClass(haxe.ui.toolkit.core.Component,"component");
		_g.registerComponentClass(haxe.ui.toolkit.core.DisplayObject,"displayobject");
		_g.registerComponentClass(haxe.ui.toolkit.core.DisplayObjectContainer,"displayobjectcontainer");
		_g.registerComponentClass(haxe.ui.toolkit.core.Root,"root");
		_g.registerComponentClass(haxe.ui.toolkit.core.StateComponent,"statecomponent");
		_g.registerComponentClass(haxe.ui.toolkit.core.StyleableDisplayObject,"styleabledisplayobject");
		_g.registerComponentClass(haxe.ui.toolkit.core.renderers.BasicItemRenderer,"basicitemrenderer");
		_g.registerComponentClass(haxe.ui.toolkit.core.renderers.ComponentItemRenderer,"componentitemrenderer");
		_g.registerComponentClass(haxe.ui.toolkit.core.renderers.ItemRenderer,"itemrenderer");
		_g.registerDataSourceClass(haxe.ui.toolkit.data.ArrayDataSource,"array");
		_g.registerDataSourceClass(haxe.ui.toolkit.data.FilesDataSource,"files");
		_g.registerDataSourceClass(haxe.ui.toolkit.data.JSONDataSource,"json");
		_g.registerDataSourceClass(haxe.ui.toolkit.data.MySQLDataSource,"mysql");
		_g.registerDataSourceClass(haxe.ui.toolkit.data.XMLDataSource,"xml");
	}
	,getComponentClassName: function(simpleName) {
		if(this.componentClassMap == null) return null;
		var key = simpleName;
		var entry = this.componentClassMap.get(key);
		if(entry == null) return null;
		return entry.className;
	}
	,registerComponentClass: function(cls,simpleName) {
		var className = Type.getClassName(cls);
		this.registerComponentClassName(className,simpleName);
	}
	,registerComponentClassName: function(className,simpleName) {
		if(this.componentClassMap == null) this.componentClassMap = new haxe.ds.StringMap();
		var entry = new haxe.ui.toolkit.core._ClassManager.ComponentRegistryEntry();
		entry.simpleName = simpleName;
		entry.className = className;
		this.componentClassMap.set(simpleName,entry);
	}
	,hasDataSourceClass: function(simpleName) {
		if(this.dataSourceClassMap == null) return false;
		return this.dataSourceClassMap.exists(simpleName);
	}
	,getDataSourceClassName: function(simpleName) {
		if(this.dataSourceClassMap == null) return null;
		var entry = this.dataSourceClassMap.get(simpleName);
		if(entry == null) return null;
		return entry.className;
	}
	,registerDataSourceClass: function(cls,simpleName) {
		var className = Type.getClassName(cls);
		this.registerDataSourceClassName(className,simpleName);
	}
	,registerDataSourceClassName: function(className,simpleName) {
		if(this.dataSourceClassMap == null) this.dataSourceClassMap = new haxe.ds.StringMap();
		var entry = new haxe.ui.toolkit.core._ClassManager.DataSourceRegistryEntry();
		entry.simpleName = simpleName;
		entry.className = className;
		this.dataSourceClassMap.set(simpleName,entry);
	}
	,__class__: haxe.ui.toolkit.core.ClassManager
};
haxe.ui.toolkit.core._ClassManager = {};
haxe.ui.toolkit.core._ClassManager.ClassRegistryEntry = function() {
};
$hxClasses["haxe.ui.toolkit.core._ClassManager.ClassRegistryEntry"] = haxe.ui.toolkit.core._ClassManager.ClassRegistryEntry;
haxe.ui.toolkit.core._ClassManager.ClassRegistryEntry.__name__ = ["haxe","ui","toolkit","core","_ClassManager","ClassRegistryEntry"];
haxe.ui.toolkit.core._ClassManager.ClassRegistryEntry.prototype = {
	__class__: haxe.ui.toolkit.core._ClassManager.ClassRegistryEntry
};
haxe.ui.toolkit.core._ClassManager.ComponentRegistryEntry = function() {
	haxe.ui.toolkit.core._ClassManager.ClassRegistryEntry.call(this);
};
$hxClasses["haxe.ui.toolkit.core._ClassManager.ComponentRegistryEntry"] = haxe.ui.toolkit.core._ClassManager.ComponentRegistryEntry;
haxe.ui.toolkit.core._ClassManager.ComponentRegistryEntry.__name__ = ["haxe","ui","toolkit","core","_ClassManager","ComponentRegistryEntry"];
haxe.ui.toolkit.core._ClassManager.ComponentRegistryEntry.__super__ = haxe.ui.toolkit.core._ClassManager.ClassRegistryEntry;
haxe.ui.toolkit.core._ClassManager.ComponentRegistryEntry.prototype = $extend(haxe.ui.toolkit.core._ClassManager.ClassRegistryEntry.prototype,{
	__class__: haxe.ui.toolkit.core._ClassManager.ComponentRegistryEntry
});
haxe.ui.toolkit.core._ClassManager.DataSourceRegistryEntry = function() {
	haxe.ui.toolkit.core._ClassManager.ClassRegistryEntry.call(this);
};
$hxClasses["haxe.ui.toolkit.core._ClassManager.DataSourceRegistryEntry"] = haxe.ui.toolkit.core._ClassManager.DataSourceRegistryEntry;
haxe.ui.toolkit.core._ClassManager.DataSourceRegistryEntry.__name__ = ["haxe","ui","toolkit","core","_ClassManager","DataSourceRegistryEntry"];
haxe.ui.toolkit.core._ClassManager.DataSourceRegistryEntry.__super__ = haxe.ui.toolkit.core._ClassManager.ClassRegistryEntry;
haxe.ui.toolkit.core._ClassManager.DataSourceRegistryEntry.prototype = $extend(haxe.ui.toolkit.core._ClassManager.ClassRegistryEntry.prototype,{
	__class__: haxe.ui.toolkit.core._ClassManager.DataSourceRegistryEntry
});
haxe.ui.toolkit.core.Client = function() {
};
$hxClasses["haxe.ui.toolkit.core.Client"] = haxe.ui.toolkit.core.Client;
haxe.ui.toolkit.core.Client.__name__ = ["haxe","ui","toolkit","core","Client"];
haxe.ui.toolkit.core.Client.__properties__ = {get_instance:"get_instance"}
haxe.ui.toolkit.core.Client._instance = null;
haxe.ui.toolkit.core.Client.instance = null;
haxe.ui.toolkit.core.Client.get_instance = function() {
	if(haxe.ui.toolkit.core.Client._instance == null) {
		haxe.ui.toolkit.core.Client._instance = new haxe.ui.toolkit.core.Client();
		haxe.ui.toolkit.core.Client._instance.init();
	}
	return haxe.ui.toolkit.core.Client._instance;
};
haxe.ui.toolkit.core.Client.prototype = {
	init: function() {
	}
	,get_language: function() {
		return flash.system.Capabilities.get_language();
	}
	,get_dpi: function() {
		return flash.system.Capabilities.get_screenDPI();
	}
	,get_platform: function() {
		return "html5";
		return null;
	}
	,get_target: function() {
		return "html5";
		return null;
	}
	,get_screenWidth: function() {
		return flash.system.Capabilities.get_screenResolutionX();
	}
	,get_screenHeight: function() {
		return flash.system.Capabilities.get_screenResolutionY();
	}
	,__class__: haxe.ui.toolkit.core.Client
	,__properties__: {get_target:"get_target",get_screenHeight:"get_screenHeight",get_screenWidth:"get_screenWidth",get_platform:"get_platform",get_dpi:"get_dpi",get_language:"get_language"}
};
haxe.ui.toolkit.core.Controller = function(view,options) {
	if(js.Boot.__instanceof(view,haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer)) this._view = js.Boot.__cast(view , haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer); else if(js.Boot.__instanceof(view,Class)) {
		var cls;
		cls = js.Boot.__cast(view , Class);
		this._view = Type.createInstance(cls,[]);
	} else if(view != null) options = view;
	if(this._view == null) this._view = new haxe.ui.toolkit.core.Component();
	if(options != null) {
		var _g = 0;
		var _g1 = Reflect.fields(options);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			if(Reflect.getProperty(this._view,"set_" + f) != null) Reflect.setProperty(this._view,f,Reflect.field(options,f));
		}
	}
	this.refereshNamedComponents();
};
$hxClasses["haxe.ui.toolkit.core.Controller"] = haxe.ui.toolkit.core.Controller;
haxe.ui.toolkit.core.Controller.__name__ = ["haxe","ui","toolkit","core","Controller"];
haxe.ui.toolkit.core.Controller.prototype = {
	addChild: function(child,options) {
		var childObject = null;
		if(js.Boot.__instanceof(child,haxe.ui.toolkit.core.interfaces.IDisplayObject)) childObject = js.Boot.__cast(child , haxe.ui.toolkit.core.interfaces.IDisplayObject); else if(js.Boot.__instanceof(child,Class)) {
			var cls;
			cls = js.Boot.__cast(child , Class);
			childObject = Type.createInstance(cls,[]);
		} else if(child != null) options = child;
		if(childObject == null) childObject = new haxe.ui.toolkit.core.Component();
		if(options != null) {
			var _g = 0;
			var _g1 = Reflect.fields(options);
			while(_g < _g1.length) {
				var f = _g1[_g];
				++_g;
				if(Reflect.getProperty(childObject,"set_" + f) != null) Reflect.setProperty(childObject,f,Reflect.field(options,f));
			}
		}
		var retVal = this._view.addChild(childObject);
		this.refereshNamedComponents();
		return retVal;
	}
	,attachEvent: function(id,type,listener) {
		var c = this.getComponent(id);
		if(c != null) c.addEventListener(type,listener);
	}
	,detachEvent: function(id,type,listener) {
		var c = this.getComponent(id);
		if(c != null) c.removeEventListener(type,listener);
	}
	,detachEvents: function(id,type) {
		var c = this.getComponent(id);
		if(c != null) c.removeEventListenerType(type);
	}
	,getComponent: function(id) {
		return this.getComponentAs(id,haxe.ui.toolkit.core.Component);
	}
	,getComponentAs: function(id,type) {
		var c = this._namedComponents.get(id);
		if(c == null) return null;
		return c;
	}
	,refereshNamedComponents: function() {
		this._namedComponents = new haxe.ds.StringMap();
		this.addNamedComponentsFrom(this._view);
	}
	,addNamedComponentsFrom: function(parent) {
		if(parent == null) return;
		if(parent != null && parent.get_id() != null) this._namedComponents.set(parent.get_id(),parent);
		var _g = 0;
		var _g1 = parent.get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			this.addNamedComponentsFrom(js.Boot.__cast(child , haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer));
		}
	}
	,get_view: function() {
		return this._view;
	}
	,get_root: function() {
		if(this._view == null) return null;
		return this._view.get_root();
	}
	,get_popup: function() {
		var popup = null;
		if(Std["is"](this.get_view().get_parent(),haxe.ui.toolkit.controls.popups.PopupContent)) popup = (js.Boot.__cast(this.get_view().get_parent() , haxe.ui.toolkit.controls.popups.PopupContent)).popup;
		return popup;
	}
	,get_namedComponents: function() {
		return this._namedComponents;
	}
	,showPopup: function(text,title,config,fn) {
		if(config == null) config = 1;
		return this.showSimplePopup(text,title,config,fn);
	}
	,showSimplePopup: function(text,title,config,fn) {
		if(config == null) config = 1;
		return haxe.ui.toolkit.core.PopupManager.get_instance().showSimple(text,title,config,fn);
	}
	,showCustomPopup: function(content,title,config,fn) {
		if(config == null) config = 1;
		var display = null;
		if(js.Boot.__instanceof(content,haxe.ui.toolkit.core.interfaces.IDisplayObject)) display = js.Boot.__cast(content , haxe.ui.toolkit.core.interfaces.IDisplayObject); else if(typeof(content) == "string") display = haxe.ui.toolkit.core.Toolkit.processXmlResource(js.Boot.__cast(content , String));
		if(display == null) return null;
		return haxe.ui.toolkit.core.PopupManager.get_instance().showCustom(display,title,config,fn);
	}
	,showListPopup: function(items,selectedIndex,title,fn) {
		if(selectedIndex == null) selectedIndex = -1;
		return haxe.ui.toolkit.core.PopupManager.get_instance().showList(items,selectedIndex,title,fn);
	}
	,showBusyPopup: function(text,delay,title,config,fn) {
		if(delay == null) delay = -1;
		return haxe.ui.toolkit.core.PopupManager.get_instance().showBusy(text,delay,title,config,fn);
	}
	,showCalendarPopup: function(title,fn) {
		return haxe.ui.toolkit.core.PopupManager.get_instance().showCalendar(title,fn);
	}
	,__class__: haxe.ui.toolkit.core.Controller
	,__properties__: {get_namedComponents:"get_namedComponents",get_popup:"get_popup",get_root:"get_root",get_view:"get_view"}
};
haxe.ui.toolkit.core.FocusManager = function() {
};
$hxClasses["haxe.ui.toolkit.core.FocusManager"] = haxe.ui.toolkit.core.FocusManager;
haxe.ui.toolkit.core.FocusManager.__name__ = ["haxe","ui","toolkit","core","FocusManager"];
haxe.ui.toolkit.core.FocusManager.__properties__ = {get_instance:"get_instance"}
haxe.ui.toolkit.core.FocusManager._instance = null;
haxe.ui.toolkit.core.FocusManager.instance = null;
haxe.ui.toolkit.core.FocusManager.get_instance = function() {
	if(haxe.ui.toolkit.core.FocusManager._instance == null) haxe.ui.toolkit.core.FocusManager._instance = new haxe.ui.toolkit.core.FocusManager();
	return haxe.ui.toolkit.core.FocusManager._instance;
};
haxe.ui.toolkit.core.FocusManager.prototype = {
	__class__: haxe.ui.toolkit.core.FocusManager
};
haxe.ui.toolkit.core.Macros = function() { };
$hxClasses["haxe.ui.toolkit.core.Macros"] = haxe.ui.toolkit.core.Macros;
haxe.ui.toolkit.core.Macros.__name__ = ["haxe","ui","toolkit","core","Macros"];
haxe.ui.toolkit.core.Macros.processNode = function(node,types) {
	var nodeName = node.get_nodeName();
	var n = nodeName.indexOf(":");
	if(n != -1) nodeName = HxOverrides.substr(nodeName,n + 1,nodeName.length);
	nodeName = nodeName.toLowerCase();
	var id = node.get("id");
	if(id != null && id.length > 0) {
		var cls = haxe.ui.toolkit.core.Macros.componentClasses.get(nodeName);
		if(cls != null) types.set(id,cls);
	}
	var $it0 = node.elements();
	while( $it0.hasNext() ) {
		var child = $it0.next();
		haxe.ui.toolkit.core.Macros.processNode(child,types);
	}
};
haxe.ui.toolkit.core.Macros.getFunction = function(name,fields) {
	var fn = null;
	var _g = 0;
	try {
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			if(f.name == name) {
				{
					var _g1 = f.kind;
					switch(_g1[1]) {
					case 1:
						var f1 = _g1[2];
						fn = f1;
						throw "__break__";
						break;
					default:
					}
				}
				throw "__break__";
			}
		}
	} catch( e ) { if( e != "__break__" ) throw e; }
	return fn;
};
haxe.ui.toolkit.core.Macros.addFunction = function(name,e,access,fields,pos) {
	var fn;
	{
		var _g = e.expr;
		switch(_g[1]) {
		case 11:
			var f = _g[3];
			fn = f;
			break;
		default:
			throw "false";
		}
	}
	fields.push({ name : name, doc : null, meta : [], access : access, kind : haxe.macro.FieldType.FFun(fn), pos : pos});
};
haxe.ui.toolkit.core.Macros.getFieldsWithMeta = function(meta,fields) {
	var arr = new Array();
	var _g = 0;
	while(_g < fields.length) {
		var f = fields[_g];
		++_g;
		if(haxe.ui.toolkit.core.Macros.hasMeta(f,meta)) arr.push(f);
	}
	return arr;
};
haxe.ui.toolkit.core.Macros.getSuperClass = function(t) {
	var superClass = null;
	switch(t[1]) {
	case 5:
		var t1 = t[2];
		break;
	case 0:
		var t2 = t[2];
		break;
	case 7:
		var t3 = t[2];
		break;
	case 4:
		var t4 = t[2];
		break;
	case 6:
		var t5 = t[2];
		break;
	case 2:
		var t6 = t[2];
		superClass = t6.get().superClass;
		break;
	case 1:
		var t7 = t[2];
		break;
	case 3:
		var t8 = t[2];
		break;
	case 8:
		var t9 = t[2];
		break;
	}
	return superClass;
};
haxe.ui.toolkit.core.Macros.insertLine = function(fn,e,location) {
	{
		var _g = fn.expr.expr;
		switch(_g[1]) {
		case 12:
			var el = _g[2];
			fn.expr = { expr : haxe.macro.ExprDef.EBlock(haxe.ui.toolkit.core.Macros.insertExpr(el,location,e)), pos : { file : "F:\\_haxelib/haxeui/1,3,0/haxe/ui/toolkit/core/Macros.hx", min : 8316, max : 8345}};
			break;
		default:
			fn.expr = { expr : haxe.macro.ExprDef.EBlock(haxe.ui.toolkit.core.Macros.insertExpr([fn.expr],location,e)), pos : { file : "F:\\_haxelib/haxeui/1,3,0/haxe/ui/toolkit/core/Macros.hx", min : 8368, max : 8406}};
		}
	}
};
haxe.ui.toolkit.core.Macros.insertExpr = function(arr,pos,item) {
	if(pos == -1) arr.push(item); else arr.splice(pos,0,item);
	return arr;
};
haxe.ui.toolkit.core.Macros.getClassNameFromType = function(t) {
	var className = "";
	switch(t[1]) {
	case 5:
		var t1 = t[2];
		className = t1.toString();
		break;
	case 0:
		var t2 = t[2];
		className = t2.toString();
		break;
	case 7:
		var t3 = t[2];
		className = "";
		break;
	case 4:
		var t4 = t[2];
		className = t4.toString();
		break;
	case 6:
		var t5 = t[2];
		className = "";
		break;
	case 2:
		var t6 = t[2];
		className = t6.toString();
		break;
	case 1:
		var t7 = t[2];
		className = t7.toString();
		break;
	case 3:
		var t8 = t[2];
		className = t8.toString();
		break;
	case 8:
		var t9 = t[2];
		className = t9.toString();
		break;
	}
	return className;
};
haxe.ui.toolkit.core.Macros.hasMeta = function(f,meta) {
	var has = false;
	var _g = 0;
	var _g1 = f.meta;
	while(_g < _g1.length) {
		var m = _g1[_g];
		++_g;
		if(m.name == meta || m.name == ":" + meta) {
			has = true;
			break;
		}
	}
	return has;
};
haxe.ui.toolkit.core.Macros.hasInterface = function(t,interfaceRequired) {
	var has = false;
	switch(t[1]) {
	case 5:
		var t1 = t[2];
		break;
	case 0:
		var t2 = t[2];
		break;
	case 7:
		var t3 = t[2];
		break;
	case 4:
		var t4 = t[2];
		break;
	case 6:
		var t5 = t[2];
		break;
	case 2:
		var t6 = t[2];
		while(t6 != null) {
			var _g = 0;
			var _g1 = t6.get().interfaces;
			while(_g < _g1.length) {
				var i = _g1[_g];
				++_g;
				var interfaceName = i.t.toString();
				if(interfaceName == interfaceRequired) {
					has = true;
					break;
				}
			}
			if(has == false) {
				if(t6.get().superClass != null) t6 = t6.get().superClass.t; else t6 = null;
			} else break;
		}
		break;
	case 1:
		var t7 = t[2];
		break;
	case 3:
		var t8 = t[2];
		break;
	case 8:
		var t9 = t[2];
		break;
	}
	return has;
};
haxe.ui.toolkit.core.PopupManager = function() {
	this.defaultWidth = 300;
	this.defaultTitle = "HaxeUI";
};
$hxClasses["haxe.ui.toolkit.core.PopupManager"] = haxe.ui.toolkit.core.PopupManager;
haxe.ui.toolkit.core.PopupManager.__name__ = ["haxe","ui","toolkit","core","PopupManager"];
haxe.ui.toolkit.core.PopupManager.__properties__ = {get_instance:"get_instance"}
haxe.ui.toolkit.core.PopupManager._instance = null;
haxe.ui.toolkit.core.PopupManager.instance = null;
haxe.ui.toolkit.core.PopupManager.get_instance = function() {
	if(haxe.ui.toolkit.core.PopupManager._instance == null) haxe.ui.toolkit.core.PopupManager._instance = new haxe.ui.toolkit.core.PopupManager();
	return haxe.ui.toolkit.core.PopupManager._instance;
};
haxe.ui.toolkit.core.PopupManager.prototype = {
	showSimple: function(text,title,config,fn) {
		if(config == null) config = 1;
		var p = this.buildPopup(new haxe.ui.toolkit.controls.popups.SimplePopupContent(text),title,config,fn);
		this.showPopup(p);
		return p;
	}
	,showCustom: function(display,title,config,fn) {
		if(config == null) config = 1;
		var p = this.buildPopup(new haxe.ui.toolkit.controls.popups.CustomPopupContent(display),title,config,fn);
		this.showPopup(p);
		return p;
	}
	,showList: function(items,selectedIndex,title,config,fn) {
		if(selectedIndex == null) selectedIndex = -1;
		var ds = null;
		if((items instanceof Array) && items.__enum__ == null) {
			var arr;
			arr = js.Boot.__cast(items , Array);
			ds = new haxe.ui.toolkit.data.ArrayDataSource();
			var _g = 0;
			while(_g < arr.length) {
				var item = arr[_g];
				++_g;
				if(typeof(item) == "string") {
					var o = { };
					o.text = js.Boot.__cast(item , String);
					ds.add(o);
				} else ds.add(item);
			}
		} else if(js.Boot.__instanceof(items,haxe.ui.toolkit.data.IDataSource)) ds = js.Boot.__cast(items , haxe.ui.toolkit.data.IDataSource);
		var p = this.buildPopup(new haxe.ui.toolkit.controls.popups.ListPopupContent(ds,selectedIndex,fn),title,config,fn);
		this.showPopup(p);
		return p;
	}
	,showCalendar: function(title,fn) {
		var config = { modal : true, buttons : 69632};
		var content = new haxe.ui.toolkit.controls.popups.CalendarPopupContent();
		var tempFn = function(button) {
			if(fn != null) {
				if(button == 65536) fn(button,content.get_selectedDate()); else fn(button,null);
			}
		};
		var p = this.buildPopup(content,title,config,tempFn);
		this.showPopup(p);
		return p;
	}
	,showBusy: function(text,delay,title,config,fn) {
		if(delay == null) delay = -1;
		var _g = this;
		if(config == null) config = { };
		config.useDefaultTitle = false;
		var p = this.buildPopup(new haxe.ui.toolkit.controls.popups.BusyPopupContent(text),title,config,fn);
		this.showPopup(p);
		if(delay > 0) {
			var timer = new haxe.Timer(delay);
			timer.run = function() {
				timer.stop();
				_g.hidePopup(p);
			};
		}
		return p;
	}
	,showPopup: function(p) {
		var modal = true;
		if(p.get_config().modal != null) modal = p.get_config().modal;
		if(modal == true) p.get_root().showModalOverlay();
		p.get_root().addChild(p);
		this.centerPopup(p);
		var transition = haxe.ui.toolkit.core.Toolkit.getTransitionForClass(haxe.ui.toolkit.controls.popups.Popup);
		if(transition == "slide") {
			var ypos = p.get_y();
			p.set_y(-p.get_height());
			p.set_visible(true);
			motion.Actuate.tween(p,.2,{ y : ypos},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
			});
		} else if(transition == "fade") {
			p.get_sprite().set_alpha(0);
			p.set_visible(true);
			motion.Actuate.tween(p.get_sprite(),.2,{ alpha : 1},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
			});
		} else p.set_visible(true);
	}
	,hidePopup: function(p,dispose) {
		if(dispose == null) dispose = true;
		var transition = haxe.ui.toolkit.core.Toolkit.getTransitionForClass(haxe.ui.toolkit.controls.popups.Popup);
		if(transition == "slide") motion.Actuate.tween(p,.2,{ y : p.get_root().get_height()},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
			p.get_root().removeChild(p,dispose);
			p.get_root().hideModalOverlay();
		}); else if(transition == "fade") motion.Actuate.tween(p.get_sprite(),.2,{ alpha : 0},true).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
			p.get_root().removeChild(p,dispose);
			p.get_root().hideModalOverlay();
		}); else {
			p.get_root().removeChild(p,dispose);
			p.get_root().hideModalOverlay();
		}
	}
	,centerPopup: function(p) {
		p.set_x(Std["int"](p.get_root().get_width() / 2 - p.get_width() / 2));
		p.set_y(Std["int"](p.get_root().get_height() / 2 - p.get_height() / 2));
	}
	,buildPopup: function(content,title,config,fn) {
		config = this.buildConfig(config);
		if(title == null && config.useDefaultTitle == true) title = haxe.ui.toolkit.core.PopupManager.get_instance().defaultTitle;
		var p = new haxe.ui.toolkit.controls.popups.Popup(title,content,config,fn);
		p.set_root(config.root);
		p.set_visible(false);
		return p;
	}
	,buildConfig: function(config) {
		var c = { };
		c.id = null;
		c.styleName = null;
		c.modal = true;
		c.width = haxe.ui.toolkit.core.PopupManager.get_instance().defaultWidth;
		c.useDefaultTitle = true;
		c.root = haxe.ui.toolkit.core.RootManager.get_instance().get_currentRoot();
		if(config != null && ((config | 0) === config) == false) {
			if(config.id != null) c.id = config.id; else c.id = null;
			if(config.styleName != null) c.styleName = config.styleName; else c.styleName = null;
			if(config.modal != null) c.modal = config.modal; else c.modal = true;
			if(config.width != null) c.width = config.width; else c.width = haxe.ui.toolkit.core.PopupManager.get_instance().defaultWidth;
			if(config.useDefaultTitle != null) c.useDefaultTitle = config.useDefaultTitle; else c.useDefaultTitle = true;
			if(config.root != null) c.root = config.root; else c.root = haxe.ui.toolkit.core.RootManager.get_instance().get_currentRoot();
		}
		c.buttons = new Array();
		if(config != null) {
			if(((config | 0) === config)) c.buttons = this.buildButtonArray(config); else if((config instanceof Array) && config.__enum__ == null) c.buttons = this.buildButtonArray(config); else if(config.buttons != null) c.buttons = this.buildButtonArray(config.buttons);
		}
		return c;
	}
	,buildButtonArray: function(data) {
		var buttons = new Array();
		if(((data | 0) === data)) {
			var n;
			n = js.Boot.__cast(data , Int);
			if((n & 1) == 1) buttons.push(new haxe.ui.toolkit.core.PopupButtonInfo(1));
			if((n & 16) == 16) buttons.push(new haxe.ui.toolkit.core.PopupButtonInfo(16));
			if((n & 256) == 256) buttons.push(new haxe.ui.toolkit.core.PopupButtonInfo(256));
			if((n & 4096) == 4096) buttons.push(new haxe.ui.toolkit.core.PopupButtonInfo(4096));
			if((n & 65536) == 65536) buttons.push(new haxe.ui.toolkit.core.PopupButtonInfo(65536));
		} else if((data instanceof Array) && data.__enum__ == null) {
			var arr = data;
			var _g = 0;
			while(_g < arr.length) {
				var item = arr[_g];
				++_g;
				if(((item | 0) === item)) buttons.push(new haxe.ui.toolkit.core.PopupButtonInfo(js.Boot.__cast(item , Int))); else {
					var type = 1048576;
					if(item.type != null) type = item.type;
					var text = item.text;
					var fn = item.fn;
					buttons.push(new haxe.ui.toolkit.core.PopupButtonInfo(type,text,fn));
				}
			}
		}
		return buttons;
	}
	,__class__: haxe.ui.toolkit.core.PopupManager
};
haxe.ui.toolkit.core.PopupButton = function() { };
$hxClasses["haxe.ui.toolkit.core.PopupButton"] = haxe.ui.toolkit.core.PopupButton;
haxe.ui.toolkit.core.PopupButton.__name__ = ["haxe","ui","toolkit","core","PopupButton"];
haxe.ui.toolkit.core.PopupButtonInfo = function(type,text,fn) {
	if(type == null) type = 1;
	this.type = -1;
	this.type = type;
	this.text = text;
	this.fn = fn;
};
$hxClasses["haxe.ui.toolkit.core.PopupButtonInfo"] = haxe.ui.toolkit.core.PopupButtonInfo;
haxe.ui.toolkit.core.PopupButtonInfo.__name__ = ["haxe","ui","toolkit","core","PopupButtonInfo"];
haxe.ui.toolkit.core.PopupButtonInfo.prototype = {
	__class__: haxe.ui.toolkit.core.PopupButtonInfo
};
haxe.ui.toolkit.core.Root = function() {
	this._modalOverlayCounter = 0;
	haxe.ui.toolkit.core.Component.call(this);
	this._layout = new haxe.ui.toolkit.layout.AbsoluteLayout();
	this._clipContent = true;
	this._mousePos = new flash.geom.Point(0,0);
	haxe.ui.toolkit.core.Screen.get_instance().addEventListener(flash.events.Event.RESIZE,$bind(this,this._onScreenResize));
};
$hxClasses["haxe.ui.toolkit.core.Root"] = haxe.ui.toolkit.core.Root;
haxe.ui.toolkit.core.Root.__name__ = ["haxe","ui","toolkit","core","Root"];
haxe.ui.toolkit.core.Root.__super__ = haxe.ui.toolkit.core.Component;
haxe.ui.toolkit.core.Root.prototype = $extend(haxe.ui.toolkit.core.Component.prototype,{
	preInitialize: function() {
		var _g = this;
		haxe.ui.toolkit.core.Component.prototype.preInitialize.call(this);
		this.addEventListener(flash.events.MouseEvent.MOUSE_MOVE,function(event) {
			_g._mousePos = new flash.geom.Point(event.stageX,event.stageY);
		});
		this.resizeRoot();
	}
	,_onScreenResize: function(event) {
		this.resizeRoot();
	}
	,get_mousePosition: function() {
		return this._mousePos;
	}
	,resizeRoot: function() {
		if(this.get_percentWidth() > 0) this.set_width(haxe.ui.toolkit.core.Screen.get_instance().get_width() * this.get_percentWidth() / 100);
		if(this.get_percentHeight() > 0) this.set_height(haxe.ui.toolkit.core.Screen.get_instance().get_height() * this.get_percentHeight() / 100);
	}
	,showModalOverlay: function() {
		this._modalOverlayCounter++;
		if(this._modalOverlay == null) {
			this._modalOverlay = new haxe.ui.toolkit.core.Component();
			this._modalOverlay.set_id("modalOverlay");
			this._modalOverlay.set_percentWidth(this._modalOverlay.set_percentHeight(100));
		}
		if(this.findChild("modalOverlay") == null) this.addChild(this._modalOverlay);
		this._modalOverlay.set_visible(true);
		var _g = 0;
		var _g1 = this.get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(js.Boot.__instanceof(child,haxe.ui.toolkit.controls.popups.Popup) == false && child.get_id() != "modalOverlay") {
				var c;
				c = js.Boot.__cast(child , haxe.ui.toolkit.core.Component);
			}
		}
	}
	,hideModalOverlay: function() {
		this._modalOverlayCounter--;
		if(this._modalOverlayCounter <= 0) {
			if(this._modalOverlay != null) this._modalOverlay.set_visible(false);
			var _g = 0;
			var _g1 = this.get_children();
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				if(js.Boot.__instanceof(child,haxe.ui.toolkit.controls.popups.Popup) == false && child.get_id() != "modalOverlay") {
					var c;
					c = js.Boot.__cast(child , haxe.ui.toolkit.core.Component);
				}
			}
			this._modalOverlayCounter = 0;
		}
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.Component.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.core.Root();
	}
	,__class__: haxe.ui.toolkit.core.Root
	,__properties__: $extend(haxe.ui.toolkit.core.Component.prototype.__properties__,{get_mousePosition:"get_mousePosition"})
});
haxe.ui.toolkit.core.RootManager = function() {
	this._roots = new Array();
};
$hxClasses["haxe.ui.toolkit.core.RootManager"] = haxe.ui.toolkit.core.RootManager;
haxe.ui.toolkit.core.RootManager.__name__ = ["haxe","ui","toolkit","core","RootManager"];
haxe.ui.toolkit.core.RootManager.__properties__ = {get_instance:"get_instance"}
haxe.ui.toolkit.core.RootManager._instance = null;
haxe.ui.toolkit.core.RootManager.instance = null;
haxe.ui.toolkit.core.RootManager.get_instance = function() {
	if(haxe.ui.toolkit.core.RootManager._instance == null) haxe.ui.toolkit.core.RootManager._instance = new haxe.ui.toolkit.core.RootManager();
	return haxe.ui.toolkit.core.RootManager._instance;
};
haxe.ui.toolkit.core.RootManager.prototype = {
	createRoot: function(options,fn) {
		if(options == null) options = { };
		if(options.parent != null) options.parent = options.parent; else options.parent = flash.Lib.current.stage;
		var root = new haxe.ui.toolkit.core.Root();
		root.addEventListener(flash.events.Event.ADDED_TO_STAGE,function(e) {
			if(fn != null) fn(root);
			root.removeEventListenerType(flash.events.Event.ADDED_TO_STAGE);
		});
		root.set_root(root);
		root.set_id(options.id != null?options.id:"root");
		root.set_styleName(options.styleName != null?options.styleName:null);
		root.set_x(options.x != null?options.x:0);
		root.set_y(options.y != null?options.y:0);
		root.set_width(options.width != null?options.width:0);
		root.set_height(options.height != null?options.height:0);
		root.set_percentWidth(options.percentWidth != null?options.percentWidth:-1);
		root.set_percentHeight(options.percentHeight != null?options.percentHeight:-1);
		options.parent.addChild(root.get_sprite());
		this._roots.push(root);
		return root;
	}
	,destroyRoot: function(root) {
		if(root.get_sprite().parent != null) root.get_sprite().parent.removeChild(root.get_sprite());
		root.dispose();
		HxOverrides.remove(this._roots,root);
	}
	,destroyAllRoots: function() {
		var _g = 0;
		var _g1 = this._roots;
		while(_g < _g1.length) {
			var root = _g1[_g];
			++_g;
			this.destroyRoot(root);
		}
	}
	,get_roots: function() {
		return this._roots;
	}
	,get_currentRoot: function() {
		if(this._roots.length == 0) return null;
		return this._roots[this._roots.length - 1];
	}
	,__class__: haxe.ui.toolkit.core.RootManager
	,__properties__: {get_currentRoot:"get_currentRoot",get_roots:"get_roots"}
};
haxe.ui.toolkit.core.Screen = function() {
};
$hxClasses["haxe.ui.toolkit.core.Screen"] = haxe.ui.toolkit.core.Screen;
haxe.ui.toolkit.core.Screen.__name__ = ["haxe","ui","toolkit","core","Screen"];
haxe.ui.toolkit.core.Screen.__properties__ = {get_instance:"get_instance"}
haxe.ui.toolkit.core.Screen._instance = null;
haxe.ui.toolkit.core.Screen.instance = null;
haxe.ui.toolkit.core.Screen.get_instance = function() {
	if(haxe.ui.toolkit.core.Screen._instance == null) haxe.ui.toolkit.core.Screen._instance = new haxe.ui.toolkit.core.Screen();
	return haxe.ui.toolkit.core.Screen._instance;
};
haxe.ui.toolkit.core.Screen.prototype = {
	addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		var target = flash.Lib.current.stage;
		target.addEventListener(type,listener,useCapture,priority,useWeakReference);
	}
	,removeEventListener: function(type,listener,useCapture) {
		if(useCapture == null) useCapture = false;
		var target = flash.Lib.current.stage;
		target.removeEventListener(type,listener,useCapture);
	}
	,get_width: function() {
		return flash.Lib.current.stage.stageWidth;
	}
	,get_height: function() {
		return flash.Lib.current.stage.stageHeight;
	}
	,__class__: haxe.ui.toolkit.core.Screen
	,__properties__: {get_height:"get_height",get_width:"get_width"}
};
haxe.ui.toolkit.core.Toolkit = function() {
	this.initInstance();
};
$hxClasses["haxe.ui.toolkit.core.Toolkit"] = haxe.ui.toolkit.core.Toolkit;
haxe.ui.toolkit.core.Toolkit.__name__ = ["haxe","ui","toolkit","core","Toolkit"];
haxe.ui.toolkit.core.Toolkit.__properties__ = {set_useDefaultStyles:"set_useDefaultStyles",get_useDefaultStyles:"get_useDefaultStyles",set_defaultTransition:"set_defaultTransition",get_defaultTransition:"get_defaultTransition",get_instance:"get_instance"}
haxe.ui.toolkit.core.Toolkit._instance = null;
haxe.ui.toolkit.core.Toolkit.instance = null;
haxe.ui.toolkit.core.Toolkit.get_instance = function() {
	if(haxe.ui.toolkit.core.Toolkit._instance == null) {
		flash.Lib.current.stage.align = flash.display.StageAlign.TOP_LEFT;
		flash.Lib.current.stage.scaleMode = flash.display.StageScaleMode.NO_SCALE;
		haxe.ui.toolkit.core.Toolkit._instance = new haxe.ui.toolkit.core.Toolkit();
	}
	return haxe.ui.toolkit.core.Toolkit._instance;
};
haxe.ui.toolkit.core.Toolkit.init = function() {
	haxe.ui.toolkit.core.Toolkit.get_instance();
	haxe.ui.toolkit.core.Toolkit.registerXMLProcessor(haxe.ui.toolkit.core.xml.UIProcessor,"ui");
	haxe.ui.toolkit.core.Toolkit.registerXMLProcessor(haxe.ui.toolkit.core.xml.UIProcessor,"selection");
	haxe.ui.toolkit.core.Toolkit.registerXMLProcessor(haxe.ui.toolkit.core.xml.StyleProcessor,"style");
	haxe.ui.toolkit.core.Toolkit.registerXMLProcessor(haxe.ui.toolkit.core.xml.DataProcessor,"data");
	if(haxe.ui.toolkit.core.Toolkit._defaultTransition != "none" && haxe.ui.toolkit.core.Toolkit._transitionRegister.get(Type.getClassName(haxe.ui.toolkit.controls.Menu)) == null) haxe.ui.toolkit.core.Toolkit.setTransitionForClass(haxe.ui.toolkit.controls.Menu,"fade");
	if(haxe.ui.toolkit.style.StyleManager.get_instance().get_hasStyles() == false && haxe.ui.toolkit.core.Toolkit._useDefaultStyles == true) haxe.ui.toolkit.style.StyleManager.get_instance().addStyles(new haxe.ui.toolkit.style.DefaultStyles());
};
haxe.ui.toolkit.core.Toolkit._registeredProcessors = null;
haxe.ui.toolkit.core.Toolkit.registerXMLProcessor = function(cls,prefix) {
	if(haxe.ui.toolkit.core.Toolkit._registeredProcessors == null) haxe.ui.toolkit.core.Toolkit._registeredProcessors = new haxe.ds.StringMap();
	haxe.ui.toolkit.core.Toolkit._registeredProcessors.set(prefix,Type.getClassName(cls));
};
haxe.ui.toolkit.core.Toolkit.processXmlResource = function(resourceId) {
	return haxe.ui.toolkit.core.Toolkit.processXml(haxe.ui.toolkit.resources.ResourceManager.get_instance().getXML(resourceId));
};
haxe.ui.toolkit.core.Toolkit.processXml = function(xml) {
	var result = null;
	result = haxe.ui.toolkit.core.Toolkit.processXmlNode(xml.firstElement());
	return result;
};
haxe.ui.toolkit.core.Toolkit.processXmlNode = function(node) {
	if(node == null) return null;
	var result = null;
	var nodeName = node.get_nodeName();
	var n = nodeName.indexOf(":");
	if(n != -1) nodeName = HxOverrides.substr(nodeName,n + 1,nodeName.length);
	nodeName = nodeName.toLowerCase();
	var condition = node.get("condition");
	if(condition != null) {
		var parser = new hscript.Parser();
		var program = parser.parseString(condition);
		var interp = new hscript.Interp();
		var clientWrapper = new haxe.ui.toolkit.hscript.ClientWrapper();
		interp.variables.set("Client",clientWrapper);
		var conditionResult = interp.execute(program);
		if(conditionResult == false) return null;
	}
	if(nodeName == "import") {
		var importResource = node.get("resource");
		if(importResource != null) {
			var importData = haxe.ui.toolkit.resources.ResourceManager.get_instance().getText(importResource);
			if(importData != null) {
				var importXml = Xml.parse(importData);
				return haxe.ui.toolkit.core.Toolkit.processXml(importXml);
			}
		}
	} else if(nodeName == "script") {
		var scriptResource = node.get("resource");
		var scriptData = "";
		if(scriptResource != null) scriptData += haxe.ui.toolkit.resources.ResourceManager.get_instance().getText(scriptResource);
		var scriptNodeData = node.firstChild().get_nodeValue();
		if(scriptNodeData != null) {
			scriptNodeData = StringTools.trim(scriptNodeData);
			scriptData += "\n\n" + scriptNodeData;
		}
		haxe.ui.toolkit.hscript.ScriptManager.get_instance().addScript(scriptData);
	} else if(nodeName == "style") {
		var p = new haxe.ui.toolkit.core.xml.StyleProcessor();
		result = p.process(node);
	} else if(haxe.ui.toolkit.core.ClassManager.get_instance().hasDataSourceClass(nodeName)) {
		var p1 = new haxe.ui.toolkit.core.xml.DataProcessor();
		result = p1.process(node);
	} else {
		var p2 = new haxe.ui.toolkit.core.xml.UIProcessor();
		result = p2.process(node);
	}
	var $it0 = node.elements();
	while( $it0.hasNext() ) {
		var child = $it0.next();
		var childResult = haxe.ui.toolkit.core.Toolkit.processXmlNode(child);
		if(js.Boot.__instanceof(childResult,haxe.ui.toolkit.data.IDataSource) && js.Boot.__instanceof(result,haxe.ui.toolkit.core.interfaces.IDataComponent)) (js.Boot.__cast(result , haxe.ui.toolkit.core.interfaces.IDataComponent)).set_dataSource(js.Boot.__cast(childResult , haxe.ui.toolkit.data.IDataSource));
		if(js.Boot.__instanceof(childResult,haxe.ui.toolkit.core.interfaces.IDisplayObject) && js.Boot.__instanceof(result,haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer)) (js.Boot.__cast(result , haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer)).addChild(js.Boot.__cast(childResult , haxe.ui.toolkit.core.interfaces.IDisplayObject));
	}
	return result;
};
haxe.ui.toolkit.core.Toolkit._transitionRegister = null;
haxe.ui.toolkit.core.Toolkit.get_defaultTransition = function() {
	return haxe.ui.toolkit.core.Toolkit._defaultTransition;
};
haxe.ui.toolkit.core.Toolkit.set_defaultTransition = function(value) {
	haxe.ui.toolkit.core.Toolkit._defaultTransition = value;
	return value;
};
haxe.ui.toolkit.core.Toolkit.get_useDefaultStyles = function() {
	return haxe.ui.toolkit.core.Toolkit._useDefaultStyles;
};
haxe.ui.toolkit.core.Toolkit.set_useDefaultStyles = function(value) {
	haxe.ui.toolkit.core.Toolkit._useDefaultStyles = value;
	return value;
};
haxe.ui.toolkit.core.Toolkit.getTransitionForClass = function(cls) {
	var s = haxe.ui.toolkit.core.Toolkit._defaultTransition;
	var className = Type.getClassName(cls);
	if(haxe.ui.toolkit.core.Toolkit._transitionRegister != null && haxe.ui.toolkit.core.Toolkit._transitionRegister.get(className) != null) s = haxe.ui.toolkit.core.Toolkit._transitionRegister.get(className);
	return s;
};
haxe.ui.toolkit.core.Toolkit.setTransitionForClass = function(cls,transition) {
	if(haxe.ui.toolkit.core.Toolkit._transitionRegister == null) haxe.ui.toolkit.core.Toolkit._transitionRegister = new haxe.ds.StringMap();
	var className = Type.getClassName(cls);
	haxe.ui.toolkit.core.Toolkit._transitionRegister.set(className,transition);
};
haxe.ui.toolkit.core.Toolkit.openFullscreen = function(fn) {
	var root = haxe.ui.toolkit.core.RootManager.get_instance().createRoot({ x : 0, y : 0, percentWidth : 100, percentHeight : 100},fn);
	return root;
};
haxe.ui.toolkit.core.Toolkit.openPopup = function(options,fn) {
	if(options == null) options = { };
	if(options.x != null) options.x = options.x; else options.x = 20;
	if(options.y != null) options.y = options.y; else options.y = 20;
	if(options.styleName != null) options.styleName = options.styleName; else options.styleName = "popup";
	var root = haxe.ui.toolkit.core.RootManager.get_instance().createRoot(options,fn);
	return root;
};
haxe.ui.toolkit.core.Toolkit.prototype = {
	initInstance: function() {
		haxe.ui.toolkit.core.Toolkit._transitionRegister = new haxe.ds.StringMap();
		haxe.ui.toolkit.core.ClassManager.get_instance();
	}
	,__class__: haxe.ui.toolkit.core.Toolkit
};
haxe.ui.toolkit.core.XMLController = function(xmlResourceId) {
	haxe.ui.toolkit.core.Controller.call(this,haxe.ui.toolkit.core.Toolkit.processXml(Xml.parse(haxe.ui.toolkit.resources.ResourceManager.get_instance().getText(xmlResourceId))));
};
$hxClasses["haxe.ui.toolkit.core.XMLController"] = haxe.ui.toolkit.core.XMLController;
haxe.ui.toolkit.core.XMLController.__name__ = ["haxe","ui","toolkit","core","XMLController"];
haxe.ui.toolkit.core.XMLController.__super__ = haxe.ui.toolkit.core.Controller;
haxe.ui.toolkit.core.XMLController.prototype = $extend(haxe.ui.toolkit.core.Controller.prototype,{
	__class__: haxe.ui.toolkit.core.XMLController
});
haxe.ui.toolkit.core.base = {};
haxe.ui.toolkit.core.base.HorizontalAlign = function() { };
$hxClasses["haxe.ui.toolkit.core.base.HorizontalAlign"] = haxe.ui.toolkit.core.base.HorizontalAlign;
haxe.ui.toolkit.core.base.HorizontalAlign.__name__ = ["haxe","ui","toolkit","core","base","HorizontalAlign"];
haxe.ui.toolkit.core.base.State = function() { };
$hxClasses["haxe.ui.toolkit.core.base.State"] = haxe.ui.toolkit.core.base.State;
haxe.ui.toolkit.core.base.State.__name__ = ["haxe","ui","toolkit","core","base","State"];
haxe.ui.toolkit.core.base.VerticalAlign = function() { };
$hxClasses["haxe.ui.toolkit.core.base.VerticalAlign"] = haxe.ui.toolkit.core.base.VerticalAlign;
haxe.ui.toolkit.core.base.VerticalAlign.__name__ = ["haxe","ui","toolkit","core","base","VerticalAlign"];
haxe.ui.toolkit.core.interfaces.Direction = function() { };
$hxClasses["haxe.ui.toolkit.core.interfaces.Direction"] = haxe.ui.toolkit.core.interfaces.Direction;
haxe.ui.toolkit.core.interfaces.Direction.__name__ = ["haxe","ui","toolkit","core","interfaces","Direction"];
haxe.ui.toolkit.core.interfaces.IItemRenderer = function() { };
$hxClasses["haxe.ui.toolkit.core.interfaces.IItemRenderer"] = haxe.ui.toolkit.core.interfaces.IItemRenderer;
haxe.ui.toolkit.core.interfaces.IItemRenderer.__name__ = ["haxe","ui","toolkit","core","interfaces","IItemRenderer"];
haxe.ui.toolkit.core.interfaces.IItemRenderer.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable,haxe.ui.toolkit.core.interfaces.IStateComponent];
haxe.ui.toolkit.core.interfaces.IItemRenderer.prototype = {
	__class__: haxe.ui.toolkit.core.interfaces.IItemRenderer
};
haxe.ui.toolkit.core.interfaces.InvalidationFlag = function() { };
$hxClasses["haxe.ui.toolkit.core.interfaces.InvalidationFlag"] = haxe.ui.toolkit.core.interfaces.InvalidationFlag;
haxe.ui.toolkit.core.interfaces.InvalidationFlag.__name__ = ["haxe","ui","toolkit","core","interfaces","InvalidationFlag"];
haxe.ui.toolkit.core.renderers = {};
haxe.ui.toolkit.core.renderers.ItemRenderer = function() {
	haxe.ui.toolkit.core.StateComponent.call(this);
	this.get_sprite().buttonMode = true;
	this.get_sprite().useHandCursor = true;
	this.set_state("normal");
};
$hxClasses["haxe.ui.toolkit.core.renderers.ItemRenderer"] = haxe.ui.toolkit.core.renderers.ItemRenderer;
haxe.ui.toolkit.core.renderers.ItemRenderer.__name__ = ["haxe","ui","toolkit","core","renderers","ItemRenderer"];
haxe.ui.toolkit.core.renderers.ItemRenderer.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable,haxe.ui.toolkit.core.interfaces.IItemRenderer];
haxe.ui.toolkit.core.renderers.ItemRenderer.__super__ = haxe.ui.toolkit.core.StateComponent;
haxe.ui.toolkit.core.renderers.ItemRenderer.prototype = $extend(haxe.ui.toolkit.core.StateComponent.prototype,{
	initialize: function() {
		haxe.ui.toolkit.core.StateComponent.prototype.initialize.call(this);
		this.addStatesRecursively(this);
	}
	,addStatesRecursively: function(c) {
		if(js.Boot.__instanceof(c,haxe.ui.toolkit.core.StateComponent) && c != this) (js.Boot.__cast(c , haxe.ui.toolkit.core.StateComponent)).addStates(this.get_states());
		var _g = 0;
		var _g1 = c.get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(this.isInteractive(c)) continue;
			if(js.Boot.__instanceof(c,haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer)) this.addStatesRecursively(js.Boot.__cast(child , haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer));
		}
	}
	,get_data: function() {
		return this._data;
	}
	,set_data: function(value) {
		this._data = value;
		this.updateComponents();
		this.attachEvents(this);
		return value;
	}
	,update: function() {
		this.updateComponents();
	}
	,allowSelection: function(stageX,stageY) {
		var allow = true;
		var c = this.findComponentUnderPoint(stageX,stageY);
		while(c != null) {
			if(this.isInteractive(c)) {
				allow = false;
				break;
			}
			if(js.Boot.__instanceof(c,haxe.ui.toolkit.core.DisplayObjectContainer) == false) break;
			c = (js.Boot.__cast(c , haxe.ui.toolkit.core.DisplayObjectContainer)).findComponentUnderPoint(stageX,stageY);
		}
		return allow;
	}
	,attachEvents: function(c) {
		var _g = 0;
		var _g1 = c.get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(this.isInteractive(child)) this.attachEvent(child); else if(js.Boot.__instanceof(child,haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer)) this.attachEvents(js.Boot.__cast(child , haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer));
		}
	}
	,attachEvent: function(c) {
		if(js.Boot.__instanceof(c,haxe.ui.toolkit.controls.Slider)) {
			c.removeEventListener("haxeui_" + "change",$bind(this,this._onComponentEvent));
			c.addEventListener("haxeui_" + "change",$bind(this,this._onComponentEvent));
		} else if(js.Boot.__instanceof(c,haxe.ui.toolkit.controls.Button)) {
			c.removeEventListener("haxeui_" + "click",$bind(this,this._onComponentEvent));
			c.addEventListener("haxeui_" + "click",$bind(this,this._onComponentEvent));
		}
	}
	,_onComponentEvent: function(event) {
		if(this.eventDispatcher != null) {
			if(event.get_component() != null && event.get_component().get_id() != null && event.get_component().get_id().length > 0) Reflect.setField(this._data,event.get_component().get_id(),event.get_component().get_value());
			var uiEvent = new haxe.ui.toolkit.events.UIEvent("haxeui_" + "componentEvent",event.get_component());
			uiEvent.data = this._data;
			uiEvent.data.update = $bind(this,this.update);
			this.eventDispatcher.dispatchEvent(uiEvent);
		}
	}
	,updateComponents: function() {
		var fields = Reflect.fields(this._data);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			var componentId = f;
			var value = Reflect.field(this._data,f);
			var c = this.findChild(componentId,null,true);
			if(c != null) this.updateComponentValue(c,value);
		}
	}
	,updateComponentValue: function(c,value) {
		if(js.Boot.__instanceof(c,haxe.ui.toolkit.core.Component)) (js.Boot.__cast(c , haxe.ui.toolkit.core.Component)).set_value(value);
	}
	,get_states: function() {
		return ["normal","over","selected","disabled"];
	}
	,set_state: function(value) {
		this.setStateRecursively(value,this);
		return haxe.ui.toolkit.core.StateComponent.prototype.set_state.call(this,value);
	}
	,setStateRecursively: function(value,c) {
		if(js.Boot.__instanceof(c,haxe.ui.toolkit.core.StateComponent) && c != this) (js.Boot.__cast(c , haxe.ui.toolkit.core.StateComponent)).set_state(value);
		var _g = 0;
		var _g1 = c.get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(this.isInteractive(c)) continue;
			if(js.Boot.__instanceof(c,haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer)) this.setStateRecursively(value,js.Boot.__cast(child , haxe.ui.toolkit.core.interfaces.IDisplayObjectContainer));
		}
	}
	,isInteractive: function(c) {
		if(js.Boot.__instanceof(c,haxe.ui.toolkit.controls.Button) || js.Boot.__instanceof(c,haxe.ui.toolkit.controls.Slider)) return true;
		return false;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.StateComponent.prototype.clone.call(this);
		var _g = 0;
		var _g1 = this.get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			c.addChild(child.clone());
		}
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.core.renderers.ItemRenderer();
	}
	,__class__: haxe.ui.toolkit.core.renderers.ItemRenderer
	,__properties__: $extend(haxe.ui.toolkit.core.StateComponent.prototype.__properties__,{set_data:"set_data",get_data:"get_data"})
});
haxe.ui.toolkit.core.renderers.BasicItemRenderer = function() {
	haxe.ui.toolkit.core.renderers.ItemRenderer.call(this);
	this._layout = new haxe.ui.toolkit.layout.HorizontalLayout();
	var text = new haxe.ui.toolkit.controls.Text();
	text.set_text("Text");
	text.set_id("text");
	text.set_percentWidth(100);
	this.addChild(text);
};
$hxClasses["haxe.ui.toolkit.core.renderers.BasicItemRenderer"] = haxe.ui.toolkit.core.renderers.BasicItemRenderer;
haxe.ui.toolkit.core.renderers.BasicItemRenderer.__name__ = ["haxe","ui","toolkit","core","renderers","BasicItemRenderer"];
haxe.ui.toolkit.core.renderers.BasicItemRenderer.__super__ = haxe.ui.toolkit.core.renderers.ItemRenderer;
haxe.ui.toolkit.core.renderers.BasicItemRenderer.prototype = $extend(haxe.ui.toolkit.core.renderers.ItemRenderer.prototype,{
	set_data: function(value) {
		if(value.icon != null) {
			if(this.findChild("icon") == null) {
				var icon = new haxe.ui.toolkit.controls.Image();
				icon.set_id("icon");
				icon.set_verticalAlign("center");
				this.addChildAt(icon,0);
			}
		}
		return haxe.ui.toolkit.core.renderers.ItemRenderer.prototype.set_data.call(this,value);
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.renderers.ItemRenderer.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.core.renderers.BasicItemRenderer();
	}
	,__class__: haxe.ui.toolkit.core.renderers.BasicItemRenderer
});
haxe.ui.toolkit.core.renderers.ComponentItemRenderer = function() {
	haxe.ui.toolkit.core.renderers.BasicItemRenderer.call(this);
};
$hxClasses["haxe.ui.toolkit.core.renderers.ComponentItemRenderer"] = haxe.ui.toolkit.core.renderers.ComponentItemRenderer;
haxe.ui.toolkit.core.renderers.ComponentItemRenderer.__name__ = ["haxe","ui","toolkit","core","renderers","ComponentItemRenderer"];
haxe.ui.toolkit.core.renderers.ComponentItemRenderer.__super__ = haxe.ui.toolkit.core.renderers.BasicItemRenderer;
haxe.ui.toolkit.core.renderers.ComponentItemRenderer.prototype = $extend(haxe.ui.toolkit.core.renderers.BasicItemRenderer.prototype,{
	set_data: function(value) {
		var type = value.componentType;
		if(type != null) {
			var cls = this.getClassFromType(type);
			if(cls != null && js.Boot.__instanceof(this._component,cls) == false) {
				if(this._component != null) this.removeChild(this._component);
				this._component = Type.createInstance(cls,[]);
				this._component.set_verticalAlign("center");
				this._component.set_id("componentValue");
				this.addChild(this._component);
			}
		}
		return haxe.ui.toolkit.core.renderers.BasicItemRenderer.prototype.set_data.call(this,value);
	}
	,getClassFromType: function(type) {
		type = type.toLowerCase();
		if(type == "button") return haxe.ui.toolkit.controls.Button; else if(type == "slider") return haxe.ui.toolkit.controls.HSlider; else if(type == "image") return haxe.ui.toolkit.controls.Image;
		return null;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.core.renderers.BasicItemRenderer.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.core.renderers.ComponentItemRenderer();
	}
	,__class__: haxe.ui.toolkit.core.renderers.ComponentItemRenderer
});
haxe.ui.toolkit.core.xml = {};
haxe.ui.toolkit.core.xml.IXMLProcessor = function() { };
$hxClasses["haxe.ui.toolkit.core.xml.IXMLProcessor"] = haxe.ui.toolkit.core.xml.IXMLProcessor;
haxe.ui.toolkit.core.xml.IXMLProcessor.__name__ = ["haxe","ui","toolkit","core","xml","IXMLProcessor"];
haxe.ui.toolkit.core.xml.IXMLProcessor.prototype = {
	__class__: haxe.ui.toolkit.core.xml.IXMLProcessor
};
haxe.ui.toolkit.core.xml.XMLProcessor = function() {
};
$hxClasses["haxe.ui.toolkit.core.xml.XMLProcessor"] = haxe.ui.toolkit.core.xml.XMLProcessor;
haxe.ui.toolkit.core.xml.XMLProcessor.__name__ = ["haxe","ui","toolkit","core","xml","XMLProcessor"];
haxe.ui.toolkit.core.xml.XMLProcessor.__interfaces__ = [haxe.ui.toolkit.core.xml.IXMLProcessor];
haxe.ui.toolkit.core.xml.XMLProcessor.prototype = {
	process: function(node) {
		return null;
	}
	,stripNamespace: function(nodeName) {
		var n = nodeName.indexOf(":");
		if(n != -1) nodeName = HxOverrides.substr(nodeName,n + 1,nodeName.length);
		nodeName = nodeName.toLowerCase();
		return nodeName;
	}
	,__class__: haxe.ui.toolkit.core.xml.XMLProcessor
};
haxe.ui.toolkit.core.xml.DataProcessor = function() {
	haxe.ui.toolkit.core.xml.XMLProcessor.call(this);
};
$hxClasses["haxe.ui.toolkit.core.xml.DataProcessor"] = haxe.ui.toolkit.core.xml.DataProcessor;
haxe.ui.toolkit.core.xml.DataProcessor.__name__ = ["haxe","ui","toolkit","core","xml","DataProcessor"];
haxe.ui.toolkit.core.xml.DataProcessor.createDataSource = function(className,config) {
	var ds = Type.createInstance(Type.resolveClass(className),[]);
	if(ds != null) {
		ds.create(config);
		haxe.ui.toolkit.data.DataManager.get_instance().registerDataSource(ds);
	}
	return ds;
};
haxe.ui.toolkit.core.xml.DataProcessor.__super__ = haxe.ui.toolkit.core.xml.XMLProcessor;
haxe.ui.toolkit.core.xml.DataProcessor.prototype = $extend(haxe.ui.toolkit.core.xml.XMLProcessor.prototype,{
	process: function(node) {
		var result = null;
		var nodeName = this.stripNamespace(node.get_nodeName());
		nodeName = nodeName.toLowerCase();
		var className = haxe.ui.toolkit.core.ClassManager.get_instance().getDataSourceClassName(nodeName);
		if(className != null) result = haxe.ui.toolkit.core.xml.DataProcessor.createDataSource(className,node);
		return result;
	}
	,__class__: haxe.ui.toolkit.core.xml.DataProcessor
});
haxe.ui.toolkit.core.xml.StyleProcessor = function() {
	haxe.ui.toolkit.core.xml.XMLProcessor.call(this);
};
$hxClasses["haxe.ui.toolkit.core.xml.StyleProcessor"] = haxe.ui.toolkit.core.xml.StyleProcessor;
haxe.ui.toolkit.core.xml.StyleProcessor.__name__ = ["haxe","ui","toolkit","core","xml","StyleProcessor"];
haxe.ui.toolkit.core.xml.StyleProcessor.__super__ = haxe.ui.toolkit.core.xml.XMLProcessor;
haxe.ui.toolkit.core.xml.StyleProcessor.prototype = $extend(haxe.ui.toolkit.core.xml.XMLProcessor.prototype,{
	process: function(node) {
		var styleData = node.firstChild().get_nodeValue();
		styleData = StringTools.trim(styleData);
		var styles = haxe.ui.toolkit.style.StyleParser.fromString(styleData);
		haxe.ui.toolkit.style.StyleManager.get_instance().addStyles(styles);
		return null;
	}
	,__class__: haxe.ui.toolkit.core.xml.StyleProcessor
});
haxe.ui.toolkit.core.xml.UIProcessor = function() {
	haxe.ui.toolkit.core.xml.XMLProcessor.call(this);
};
$hxClasses["haxe.ui.toolkit.core.xml.UIProcessor"] = haxe.ui.toolkit.core.xml.UIProcessor;
haxe.ui.toolkit.core.xml.UIProcessor.__name__ = ["haxe","ui","toolkit","core","xml","UIProcessor"];
haxe.ui.toolkit.core.xml.UIProcessor.createComponent = function(className,config) {
	var c = Type.createInstance(Type.resolveClass(className),[]);
	try {
		var $it0 = config.attributes();
		while( $it0.hasNext() ) {
			var attr = $it0.next();
			if(StringTools.startsWith(attr,"xmlns:")) continue;
			var value = config.get(attr);
			if(haxe.ui.toolkit.hscript.ScriptUtils.isScript(value)) value = haxe.ui.toolkit.hscript.ScriptManager.get_instance().executeScript(value);
			if(attr == "width") {
				var width = 0;
				var percentWidth = -1;
				var widthString = value;
				if(widthString != null) {
					width = Std.parseFloat(widthString);
					if(widthString.indexOf("%") != -1) {
						width = 0;
						percentWidth = Std.parseFloat(HxOverrides.substr(widthString,0,widthString.length - 1));
					}
				}
				if(width != 0) c.set_width(width);
				if(percentWidth != -1) c.set_percentWidth(percentWidth);
			} else if(attr == "height") {
				var height = 0;
				var percentHeight = -1;
				var heightString = value;
				if(heightString != null) {
					height = Std.parseFloat(heightString);
					if(heightString.indexOf("%") != -1) {
						height = 0;
						percentHeight = Std.parseFloat(HxOverrides.substr(heightString,0,heightString.length - 1));
					}
				}
				if(height != 0) c.set_height(height);
				if(percentHeight != -1) c.set_percentHeight(percentHeight);
			} else if(attr == "style") {
				if(js.Boot.__instanceof(c,haxe.ui.toolkit.core.StyleableDisplayObject)) {
					var inlineStyles = haxe.ui.toolkit.style.StyleParser.fromString("_temp {" + value + "}");
					if(inlineStyles != null) {
						var style = inlineStyles.getStyle("_temp");
						if(style != null) (js.Boot.__cast(c , haxe.ui.toolkit.core.StyleableDisplayObject)).set_inlineStyle(style);
					}
				}
			} else if(attr == "condition") {
			} else if(attr == "layout") switch(value) {
			case "absolute":
				c.set_layout(new haxe.ui.toolkit.layout.AbsoluteLayout());
				throw "__break__";
				break;
			case "box":
				c.set_layout(new haxe.ui.toolkit.layout.BoxLayout());
				throw "__break__";
				break;
			case "grid":
				c.set_layout(new haxe.ui.toolkit.layout.GridLayout());
				throw "__break__";
				break;
			case "horizontal":
				c.set_layout(new haxe.ui.toolkit.layout.HorizontalLayout());
				throw "__break__";
				break;
			case "vertical":
				c.set_layout(new haxe.ui.toolkit.layout.VerticalLayout());
				throw "__break__";
				break;
			case "continuousVertical":
				c.set_layout(new haxe.ui.toolkit.layout.VerticalContinuousLayout());
				throw "__break__";
				break;
			case "continuousHorizontal":
				c.set_layout(new haxe.ui.toolkit.layout.HorizontalContinuousLayout());
				throw "__break__";
				break;
			default:
				c.set_layout(new haxe.ui.toolkit.layout.DefaultLayout());
				throw "__break__";
			} else if(attr == "dataSource") {
				if(js.Boot.__instanceof(c,haxe.ui.toolkit.core.interfaces.IDataComponent)) {
					var dataComponent;
					dataComponent = js.Boot.__cast(c , haxe.ui.toolkit.core.interfaces.IDataComponent);
					var registeredDataSource = haxe.ui.toolkit.data.DataManager.get_instance().getRegisteredDataSource(value);
					if(registeredDataSource != null) dataComponent.set_dataSource(registeredDataSource); else {
						var n = value.indexOf("://");
						if(n != -1) {
							var proto = HxOverrides.substr(value,0,n);
							value = HxOverrides.substr(value,n + 3,value.length);
							var className1 = haxe.ui.toolkit.core.ClassManager.get_instance().getDataSourceClassName(proto);
							var ds = Type.createInstance(Type.resolveClass(className1),[]);
							if(ds != null) {
								ds.createFromResource(value);
								haxe.ui.toolkit.data.DataManager.get_instance().registerDataSource(ds);
								dataComponent.set_dataSource(ds);
							}
						}
					}
				}
			} else if(attr == "text") c.set_text(value); else try {
				if(Std.parseInt(value) != null) Reflect.setProperty(c,attr,Std.parseInt(value)); else if(value == "true" || value == "yes" || value == "false" || value == "no") Reflect.setProperty(c,attr,haxe.ui.toolkit.util.TypeParser.parseBool(value)); else Reflect.setProperty(c,attr,value);
			} catch( e ) {
				haxe.Log.trace("Exception setting component property: " + attr + " (" + Std.string(e) + ")",{ fileName : "UIProcessor.hx", lineNumber : 160, className : "haxe.ui.toolkit.core.xml.UIProcessor", methodName : "createComponent"});
			}
		}
	} catch( e ) { if( e != "__break__" ) throw e; }
	return c;
};
haxe.ui.toolkit.core.xml.UIProcessor.__super__ = haxe.ui.toolkit.core.xml.XMLProcessor;
haxe.ui.toolkit.core.xml.UIProcessor.prototype = $extend(haxe.ui.toolkit.core.xml.XMLProcessor.prototype,{
	process: function(node) {
		var result = null;
		var nodeName = node.get_nodeName();
		var n = nodeName.indexOf(":");
		if(n != -1) nodeName = HxOverrides.substr(nodeName,n + 1,nodeName.length);
		nodeName = nodeName.toLowerCase();
		var className = haxe.ui.toolkit.core.ClassManager.get_instance().getComponentClassName(nodeName);
		var direction = node.get("direction");
		if(direction != null) {
			var directionalPrefix = HxOverrides.substr(direction,0,1);
			var directionalName = directionalPrefix + nodeName;
			var directionalClassName = haxe.ui.toolkit.core.ClassManager.get_instance().getComponentClassName(directionalName);
			if(directionalClassName != null) className = directionalClassName;
		}
		if(className != null) result = haxe.ui.toolkit.core.xml.UIProcessor.createComponent(className,node);
		return result;
	}
	,__class__: haxe.ui.toolkit.core.xml.UIProcessor
});
haxe.ui.toolkit.data = {};
haxe.ui.toolkit.data.IDataSource = function() { };
$hxClasses["haxe.ui.toolkit.data.IDataSource"] = haxe.ui.toolkit.data.IDataSource;
haxe.ui.toolkit.data.IDataSource.__name__ = ["haxe","ui","toolkit","data","IDataSource"];
haxe.ui.toolkit.data.IDataSource.prototype = {
	__class__: haxe.ui.toolkit.data.IDataSource
};
haxe.ui.toolkit.data.DataSource = function() {
	this.allowEvents = true;
	this.allowDeletions = true;
	this.allowUpdates = true;
	this.allowAdditions = true;
	flash.events.EventDispatcher.call(this);
};
$hxClasses["haxe.ui.toolkit.data.DataSource"] = haxe.ui.toolkit.data.DataSource;
haxe.ui.toolkit.data.DataSource.__name__ = ["haxe","ui","toolkit","data","DataSource"];
haxe.ui.toolkit.data.DataSource.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IEventDispatcher,haxe.ui.toolkit.data.IDataSource];
haxe.ui.toolkit.data.DataSource.__super__ = flash.events.EventDispatcher;
haxe.ui.toolkit.data.DataSource.prototype = $extend(flash.events.EventDispatcher.prototype,{
	get_config: function() {
		return this._config;
	}
	,clone: function() {
		var newDS = null;
		return newDS;
	}
	,get_id: function() {
		return this._id;
	}
	,set_id: function(value) {
		this._id = value;
		return value;
	}
	,create: function(config) {
		this._config = config;
		if(this._config == null) return;
		this._id = config.get("id");
	}
	,open: function() {
		return this._open();
	}
	,close: function() {
		return this._close();
	}
	,moveFirst: function() {
		return this._moveFirst();
	}
	,moveNext: function() {
		return this._moveNext();
	}
	,get: function() {
		return this._get();
	}
	,add: function(o) {
		var b = false;
		if(this.allowAdditions) {
			b = this._add(o);
			if(b == true) this.dispatchChanged();
		}
		return b;
	}
	,update: function(o) {
		var b = false;
		if(this.allowUpdates) {
			b = this._update(o);
			if(b) this.dispatchChanged();
		}
		return b;
	}
	,remove: function() {
		var b = false;
		if(this.allowDeletions) {
			b = this._remove();
			if(b) this.dispatchChanged();
		}
		return b;
	}
	,removeAll: function() {
		if(this.moveFirst()) do this.remove(); while(this.moveFirst());
	}
	,hash: function() {
		var o = this.get();
		if(o == null) return null;
		return "" + this.getObjectId(o);
	}
	,size: function() {
		return -1;
	}
	,_open: function() {
		return false;
	}
	,_close: function() {
		return false;
	}
	,_moveFirst: function() {
		return false;
	}
	,_moveNext: function() {
		return false;
	}
	,_get: function() {
		return null;
	}
	,_add: function(o) {
		return false;
	}
	,_update: function(o) {
		return false;
	}
	,_remove: function() {
		return false;
	}
	,createFromString: function(data,config) {
	}
	,createFromResource: function(resourceId,config) {
		if(resourceId != null) {
			var data = haxe.ui.toolkit.resources.ResourceManager.get_instance().getText(resourceId);
			this.createFromString(data,config);
		}
	}
	,dispatchChanged: function() {
		if(this.allowEvents == true) this.dispatchEvent(new flash.events.Event(flash.events.Event.CHANGE));
	}
	,getObjectId: function(obj) {
		if(js.Boot.__instanceof(obj,Class)) {
			if(obj.__cls_id__ == null) obj.__cls_id__ = haxe.ui.toolkit.data.DataSource.clsId++;
			return obj.__cls_id__;
		} else {
			if(obj.__get_id__ == null) {
				var cls = Type.getClass(obj);
				if(cls == null) {
					var id = Std.random(2147483647);
					obj.__get_id__ = function() {
						return id;
					};
					return id;
				}
				var fstid = Std.random(2147483647);
				var _this = this;
				cls.prototype.__get_id__ = function() {
					if(_this.___id___ == null) return _this.___id___ = Std.random(2147483647);
					return _this.___id___;
				};
			}
			return obj.__get_id__();
		}
	}
	,__class__: haxe.ui.toolkit.data.DataSource
	,__properties__: {set_id:"set_id",get_id:"get_id",get_config:"get_config"}
});
haxe.ui.toolkit.data.ArrayDataSource = function() {
	this.pos = 0;
	haxe.ui.toolkit.data.DataSource.call(this);
	this.array = new Array();
};
$hxClasses["haxe.ui.toolkit.data.ArrayDataSource"] = haxe.ui.toolkit.data.ArrayDataSource;
haxe.ui.toolkit.data.ArrayDataSource.__name__ = ["haxe","ui","toolkit","data","ArrayDataSource"];
haxe.ui.toolkit.data.ArrayDataSource.__super__ = haxe.ui.toolkit.data.DataSource;
haxe.ui.toolkit.data.ArrayDataSource.prototype = $extend(haxe.ui.toolkit.data.DataSource.prototype,{
	create: function(config) {
		haxe.ui.toolkit.data.DataSource.prototype.create.call(this,config);
		if(config == null) return;
		this._id = config.get("id");
		var delimeter = config.get("delimeter");
		if(delimeter == null) delimeter = ",";
		delimeter = StringTools.replace(delimeter,"\\n","\n");
		var resource = config.get("resource");
		if(resource != null) this.createFromResource(resource,{ delimeter : delimeter});
		var nodeText = null;
		if(config.firstChild() != null) nodeText = config.firstChild().get_nodeValue();
		if(nodeText != null) this.createFromString(nodeText,{ delimeter : delimeter});
	}
	,_moveFirst: function() {
		this.pos = 0;
		if(this.array == null || this.array.length == 0) return false;
		return true;
	}
	,_moveNext: function() {
		if(this.array == null || this.array.length == 0) return false;
		var b = false;
		if(this.pos + 1 < this.array.length) {
			this.pos += 1;
			b = true;
		}
		return b;
	}
	,_get: function() {
		if(this.array == null || this.array.length == 0) return null;
		return this.array[this.pos];
	}
	,_add: function(o) {
		this.array.push(o);
		return true;
	}
	,_remove: function() {
		var x = this.get();
		return HxOverrides.remove(this.array,x);
	}
	,size: function() {
		return this.array.length;
	}
	,createFromString: function(data,config) {
		if(data != null) {
			if(config == null) config = { };
			if(config.delimeter != null) config.delimeter = config.delimeter; else config.delimeter = ",";
			var arr = data.split(config.delimeter);
			if(arr != null) {
				var _g = 0;
				while(_g < arr.length) {
					var s = arr[_g];
					++_g;
					s = StringTools.trim(s);
					if(s.length > 0) {
						var o = { text : s};
						this.add(o);
					}
				}
			}
		}
	}
	,__class__: haxe.ui.toolkit.data.ArrayDataSource
});
haxe.ui.toolkit.data.DataManager = function() {
	this._dataSourceMap = new haxe.ds.StringMap();
};
$hxClasses["haxe.ui.toolkit.data.DataManager"] = haxe.ui.toolkit.data.DataManager;
haxe.ui.toolkit.data.DataManager.__name__ = ["haxe","ui","toolkit","data","DataManager"];
haxe.ui.toolkit.data.DataManager.__properties__ = {get_instance:"get_instance"}
haxe.ui.toolkit.data.DataManager._instance = null;
haxe.ui.toolkit.data.DataManager.instance = null;
haxe.ui.toolkit.data.DataManager.get_instance = function() {
	if(haxe.ui.toolkit.data.DataManager._instance == null) haxe.ui.toolkit.data.DataManager._instance = new haxe.ui.toolkit.data.DataManager();
	return haxe.ui.toolkit.data.DataManager._instance;
};
haxe.ui.toolkit.data.DataManager.prototype = {
	registerDataSource: function(dataSource) {
		var dataSourceId = dataSource.get_id();
		if(dataSourceId == null || dataSourceId.length == 0) {
			dataSourceId = haxe.ui.toolkit.util.Identifier.guid();
			dataSource.set_id(dataSourceId);
		}
		this._dataSourceMap.set(dataSourceId,dataSource);
	}
	,getRegisteredDataSource: function(id) {
		return this._dataSourceMap.get(id);
	}
	,get_dataSources: function() {
		var arr = new Array();
		var $it0 = this._dataSourceMap.iterator();
		while( $it0.hasNext() ) {
			var ds = $it0.next();
			arr.push(ds);
		}
		return arr;
	}
	,__class__: haxe.ui.toolkit.data.DataManager
	,__properties__: {get_dataSources:"get_dataSources"}
};
haxe.ui.toolkit.data.FilesDataSource = function() {
	haxe.ui.toolkit.data.ArrayDataSource.call(this);
};
$hxClasses["haxe.ui.toolkit.data.FilesDataSource"] = haxe.ui.toolkit.data.FilesDataSource;
haxe.ui.toolkit.data.FilesDataSource.__name__ = ["haxe","ui","toolkit","data","FilesDataSource"];
haxe.ui.toolkit.data.FilesDataSource.__super__ = haxe.ui.toolkit.data.ArrayDataSource;
haxe.ui.toolkit.data.FilesDataSource.prototype = $extend(haxe.ui.toolkit.data.ArrayDataSource.prototype,{
	create: function(config) {
		if(config == null) return;
		this._id = config.get("id");
		var resource = config.get("resource");
		if(resource != null) this.createFromString(resource);
	}
	,_open: function() {
		return true;
	}
	,createFromString: function(data,config) {
		if(data != null) this._dir = this.fixDir(data);
	}
	,createFromResource: function(resourceId,config) {
		this.createFromString(resourceId,config);
	}
	,isDir: function(dir) {
		var isDir = false;
		return isDir;
	}
	,isRoot: function(dir) {
		var isRoot = false;
		return isRoot;
	}
	,fixDir: function(dir) {
		if(dir == null) return "";
		var fixedDir = dir;
		fixedDir = StringTools.replace(fixedDir,"\\","/");
		if(fixedDir.lastIndexOf("/") == fixedDir.length - 1 || fixedDir.lastIndexOf("\\") == fixedDir.length - 1) fixedDir = HxOverrides.substr(fixedDir,0,fixedDir.length - 1);
		return fixedDir;
	}
	,__class__: haxe.ui.toolkit.data.FilesDataSource
});
haxe.ui.toolkit.data.JSONDataSource = function() {
	haxe.ui.toolkit.data.ArrayDataSource.call(this);
};
$hxClasses["haxe.ui.toolkit.data.JSONDataSource"] = haxe.ui.toolkit.data.JSONDataSource;
haxe.ui.toolkit.data.JSONDataSource.__name__ = ["haxe","ui","toolkit","data","JSONDataSource"];
haxe.ui.toolkit.data.JSONDataSource.__super__ = haxe.ui.toolkit.data.ArrayDataSource;
haxe.ui.toolkit.data.JSONDataSource.prototype = $extend(haxe.ui.toolkit.data.ArrayDataSource.prototype,{
	create: function(config) {
		if(config == null) return;
		this._id = config.get("id");
		var resource = config.get("resource");
		if(resource != null) this.createFromResource(resource);
		var nodeText = null;
		if(config.firstChild() != null) nodeText = config.firstChild().get_nodeValue();
		if(nodeText != null) this.createFromString(nodeText);
	}
	,createFromString: function(data,config) {
		if(data != null) {
			var jsonObject = JSON.parse(data);
			var arr = null;
			if((jsonObject instanceof Array) && jsonObject.__enum__ == null) {
				arr = js.Boot.__cast(jsonObject , Array);
				var _g = 0;
				while(_g < arr.length) {
					var o = arr[_g];
					++_g;
					this.add(o);
				}
			}
		}
	}
	,__class__: haxe.ui.toolkit.data.JSONDataSource
});
haxe.ui.toolkit.data.MySQLDataSource = function() {
	haxe.ui.toolkit.data.DataSource.call(this);
};
$hxClasses["haxe.ui.toolkit.data.MySQLDataSource"] = haxe.ui.toolkit.data.MySQLDataSource;
haxe.ui.toolkit.data.MySQLDataSource.__name__ = ["haxe","ui","toolkit","data","MySQLDataSource"];
haxe.ui.toolkit.data.MySQLDataSource.__super__ = haxe.ui.toolkit.data.DataSource;
haxe.ui.toolkit.data.MySQLDataSource.prototype = $extend(haxe.ui.toolkit.data.DataSource.prototype,{
	__class__: haxe.ui.toolkit.data.MySQLDataSource
});
haxe.ui.toolkit.data.XMLDataSource = function() {
	haxe.ui.toolkit.data.ArrayDataSource.call(this);
};
$hxClasses["haxe.ui.toolkit.data.XMLDataSource"] = haxe.ui.toolkit.data.XMLDataSource;
haxe.ui.toolkit.data.XMLDataSource.__name__ = ["haxe","ui","toolkit","data","XMLDataSource"];
haxe.ui.toolkit.data.XMLDataSource.__super__ = haxe.ui.toolkit.data.ArrayDataSource;
haxe.ui.toolkit.data.XMLDataSource.prototype = $extend(haxe.ui.toolkit.data.ArrayDataSource.prototype,{
	create: function(config) {
		if(config == null) return;
		this._id = config.get("id");
		var resource = config.get("resource");
		if(resource != null) this.createFromResource(resource);
		var nodeText = null;
		if(config.firstChild() != null) nodeText = config.firstElement().toString();
		if(nodeText != null) this.createFromString(nodeText);
	}
	,createFromString: function(data,config) {
		if(data != null) {
			var xml = Xml.parse(data);
			if(xml != null) {
				var it = xml.firstElement().elements();
				while( it.hasNext() ) {
					var e = it.next();
					var o = { };
					var $it0 = e.attributes();
					while( $it0.hasNext() ) {
						var attrName = $it0.next();
						Reflect.setField(o,attrName,e.get(attrName));
					}
					if(Reflect.fields(o).length != 0) this.add(o);
				}
			}
		}
	}
	,__class__: haxe.ui.toolkit.data.XMLDataSource
});
haxe.ui.toolkit.events = {};
haxe.ui.toolkit.events.MenuEvent = function(type,menuItem) {
	flash.events.Event.call(this,type);
	this.menuItem = menuItem;
};
$hxClasses["haxe.ui.toolkit.events.MenuEvent"] = haxe.ui.toolkit.events.MenuEvent;
haxe.ui.toolkit.events.MenuEvent.__name__ = ["haxe","ui","toolkit","events","MenuEvent"];
haxe.ui.toolkit.events.MenuEvent.__super__ = flash.events.Event;
haxe.ui.toolkit.events.MenuEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: haxe.ui.toolkit.events.MenuEvent
});
haxe.ui.toolkit.events.UIEvent = function(type,c,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this._component = c;
};
$hxClasses["haxe.ui.toolkit.events.UIEvent"] = haxe.ui.toolkit.events.UIEvent;
haxe.ui.toolkit.events.UIEvent.__name__ = ["haxe","ui","toolkit","events","UIEvent"];
haxe.ui.toolkit.events.UIEvent.__super__ = flash.events.Event;
haxe.ui.toolkit.events.UIEvent.prototype = $extend(flash.events.Event.prototype,{
	clone: function() {
		var c = new haxe.ui.toolkit.events.UIEvent(this.type,this._component,this.bubbles,this.cancelable);
		c.displayObject = this.displayObject;
		c.data = this.data;
		c.stageX = this.stageX;
		c.stageY = this.stageY;
		return c;
	}
	,get_component: function() {
		if(this._component != null) return this._component;
		if(this.displayObject == null || js.Boot.__instanceof(this.displayObject,haxe.ui.toolkit.core.Component) == false) return null;
		return js.Boot.__cast(this.displayObject , haxe.ui.toolkit.core.Component);
	}
	,getComponentAs: function(type) {
		var c = this.get_component();
		if(c == null) return null;
		return c;
	}
	,getDataAs: function(type) {
		var d = this.data;
		if(d == null) return null;
		return d;
	}
	,__class__: haxe.ui.toolkit.events.UIEvent
	,__properties__: {get_component:"get_component"}
});
haxe.ui.toolkit.hscript = {};
haxe.ui.toolkit.hscript.ClientWrapper = function() {
	this.language = haxe.ui.toolkit.core.Client.get_instance().get_language();
	this.dpi = haxe.ui.toolkit.core.Client.get_instance().get_dpi();
	this.platform = haxe.ui.toolkit.core.Client.get_instance().get_platform();
	this.target = haxe.ui.toolkit.core.Client.get_instance().get_target();
	this.screenWidth = haxe.ui.toolkit.core.Client.get_instance().get_screenWidth();
	this.screenHeight = haxe.ui.toolkit.core.Client.get_instance().get_screenHeight();
};
$hxClasses["haxe.ui.toolkit.hscript.ClientWrapper"] = haxe.ui.toolkit.hscript.ClientWrapper;
haxe.ui.toolkit.hscript.ClientWrapper.__name__ = ["haxe","ui","toolkit","hscript","ClientWrapper"];
haxe.ui.toolkit.hscript.ClientWrapper.prototype = {
	__class__: haxe.ui.toolkit.hscript.ClientWrapper
};
haxe.ui.toolkit.hscript.ScriptManager = function() {
	this._scripts = new Array();
};
$hxClasses["haxe.ui.toolkit.hscript.ScriptManager"] = haxe.ui.toolkit.hscript.ScriptManager;
haxe.ui.toolkit.hscript.ScriptManager.__name__ = ["haxe","ui","toolkit","hscript","ScriptManager"];
haxe.ui.toolkit.hscript.ScriptManager.__properties__ = {get_instance:"get_instance"}
haxe.ui.toolkit.hscript.ScriptManager._instance = null;
haxe.ui.toolkit.hscript.ScriptManager.instance = null;
haxe.ui.toolkit.hscript.ScriptManager.get_instance = function() {
	if(haxe.ui.toolkit.hscript.ScriptManager._instance == null) haxe.ui.toolkit.hscript.ScriptManager._instance = new haxe.ui.toolkit.hscript.ScriptManager();
	return haxe.ui.toolkit.hscript.ScriptManager._instance;
};
haxe.ui.toolkit.hscript.ScriptManager.prototype = {
	addScript: function(script) {
		this._scripts.push(script);
	}
	,executeScript: function(script) {
		var fullScript = "";
		var _g = 0;
		var _g1 = this._scripts;
		while(_g < _g1.length) {
			var s = _g1[_g];
			++_g;
			fullScript += s + "\n\n";
		}
		fullScript += script;
		var retVal = null;
		try {
			var parser = new hscript.Parser();
			var program = parser.parseString(fullScript);
			var interp = new hscript.Interp();
			var clientWrapper = new haxe.ui.toolkit.hscript.ClientWrapper();
			interp.variables.set("Client",clientWrapper);
			retVal = interp.execute(program);
		} catch( e ) {
			retVal = script;
		}
		return retVal;
	}
	,__class__: haxe.ui.toolkit.hscript.ScriptManager
};
haxe.ui.toolkit.hscript.ScriptUtils = function() { };
$hxClasses["haxe.ui.toolkit.hscript.ScriptUtils"] = haxe.ui.toolkit.hscript.ScriptUtils;
haxe.ui.toolkit.hscript.ScriptUtils.__name__ = ["haxe","ui","toolkit","hscript","ScriptUtils"];
haxe.ui.toolkit.hscript.ScriptUtils.isScript = function(data) {
	if(data.indexOf("+") != -1 || data.indexOf("-") != -1 || data.indexOf("*") != -1 || data.indexOf("/") != -1 || data.indexOf("(") != -1 || data.indexOf(")") != -1 || data.indexOf("[") != -1 || data.indexOf("]") != -1) return true;
	return false;
};
haxe.ui.toolkit.hscript.ScriptUtils.isCssException = function(name) {
	if(name == "filter" || name == "icon" || name == "backgroundImage" || name == "fontName") return true;
	return false;
};
haxe.ui.toolkit.layout.AbsoluteLayout = function() {
	haxe.ui.toolkit.layout.Layout.call(this);
};
$hxClasses["haxe.ui.toolkit.layout.AbsoluteLayout"] = haxe.ui.toolkit.layout.AbsoluteLayout;
haxe.ui.toolkit.layout.AbsoluteLayout.__name__ = ["haxe","ui","toolkit","layout","AbsoluteLayout"];
haxe.ui.toolkit.layout.AbsoluteLayout.__super__ = haxe.ui.toolkit.layout.Layout;
haxe.ui.toolkit.layout.AbsoluteLayout.prototype = $extend(haxe.ui.toolkit.layout.Layout.prototype,{
	resizeChildren: function() {
		haxe.ui.toolkit.layout.Layout.prototype.resizeChildren.call(this);
		var ucx = this.get_usableWidth();
		var ucy = this.get_usableHeight();
		var _g = 0;
		var _g1 = this.get_container().get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_visible() == false) continue;
			if(child.get_percentWidth() > -1) child.set_width(ucx * child.get_percentWidth() / 100);
			if(child.get_percentHeight() > -1) child.set_height(ucy * child.get_percentHeight() / 100);
		}
	}
	,clone: function() {
		var c = haxe.ui.toolkit.layout.Layout.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.layout.AbsoluteLayout();
	}
	,__class__: haxe.ui.toolkit.layout.AbsoluteLayout
});
haxe.ui.toolkit.layout.BoxLayout = function() {
	haxe.ui.toolkit.layout.Layout.call(this);
};
$hxClasses["haxe.ui.toolkit.layout.BoxLayout"] = haxe.ui.toolkit.layout.BoxLayout;
haxe.ui.toolkit.layout.BoxLayout.__name__ = ["haxe","ui","toolkit","layout","BoxLayout"];
haxe.ui.toolkit.layout.BoxLayout.__super__ = haxe.ui.toolkit.layout.Layout;
haxe.ui.toolkit.layout.BoxLayout.prototype = $extend(haxe.ui.toolkit.layout.Layout.prototype,{
	resizeChildren: function() {
		haxe.ui.toolkit.layout.Layout.prototype.resizeChildren.call(this);
		var ucx = this.get_usableWidth();
		var ucy = this.get_usableHeight();
		var totalWidth = 0;
		var totalHeight = 0;
		var _g = 0;
		var _g1 = this.get_container().get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_visible() == false) continue;
			if(child.get_percentWidth() > -1) child.set_width(ucx * child.get_percentWidth() / 100);
			if(child.get_percentHeight() > -1) child.set_height(ucy * child.get_percentHeight() / 100);
			if(child.get_width() > totalWidth) totalWidth = child.get_width();
			if(child.get_height() > totalHeight) totalHeight = child.get_height();
		}
		if(this.get_container().get_autoSize()) {
			if(totalWidth > 0 && totalWidth != this.get_innerWidth() && this.get_container().get_percentWidth() == -1) this.get_container().set_width(totalWidth + (this.get_padding().get_left() + this.get_padding().get_right()));
			if(totalHeight > 0 && totalHeight != this.get_innerHeight() && this.get_container().get_percentHeight() == -1) this.get_container().set_height(totalHeight + (this.get_padding().get_top() + this.get_padding().get_bottom()));
		}
	}
	,repositionChildren: function() {
		haxe.ui.toolkit.layout.Layout.prototype.repositionChildren.call(this);
		var _g = 0;
		var _g1 = this.get_container().get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_visible() == false) continue;
			var xpos = this.get_padding().get_left();
			var ypos = this.get_padding().get_top();
			var halign = child.get_horizontalAlign();
			var valign = child.get_verticalAlign();
			switch(halign) {
			case "center":
				xpos = this.get_container().get_width() / 2 - child.get_width() / 2;
				break;
			case "right":
				xpos = this.get_container().get_width() - child.get_width() - this.get_padding().get_right();
				break;
			default:
			}
			switch(valign) {
			case "center":
				ypos = this.get_container().get_height() / 2 - child.get_height() / 2;
				break;
			case "bottom":
				ypos = this.get_container().get_height() - child.get_height() - this.get_padding().get_bottom();
				break;
			default:
			}
			child.set_x(xpos);
			child.set_y(ypos);
		}
	}
	,get_usableWidth: function() {
		var ucx = haxe.ui.toolkit.layout.Layout.prototype.get_usableWidth.call(this);
		return ucx;
	}
	,get_usableHeight: function() {
		var ucy = haxe.ui.toolkit.layout.Layout.prototype.get_usableHeight.call(this);
		return ucy;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.layout.Layout.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.layout.BoxLayout();
	}
	,__class__: haxe.ui.toolkit.layout.BoxLayout
});
haxe.ui.toolkit.layout.GridLayout = function() {
	this._columns = 1;
	haxe.ui.toolkit.layout.Layout.call(this);
};
$hxClasses["haxe.ui.toolkit.layout.GridLayout"] = haxe.ui.toolkit.layout.GridLayout;
haxe.ui.toolkit.layout.GridLayout.__name__ = ["haxe","ui","toolkit","layout","GridLayout"];
haxe.ui.toolkit.layout.GridLayout.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.layout.GridLayout.__super__ = haxe.ui.toolkit.layout.Layout;
haxe.ui.toolkit.layout.GridLayout.prototype = $extend(haxe.ui.toolkit.layout.Layout.prototype,{
	get_columns: function() {
		return this._columns;
	}
	,set_columns: function(value) {
		this._columns = value;
		return value;
	}
	,resizeChildren: function() {
		haxe.ui.toolkit.layout.Layout.prototype.resizeChildren.call(this);
		var columnWidths = this.calcColumnWidths();
		var rowHeights = this.calcRowHeights();
		var totalWidth = 0;
		var totalHeight = 0;
		var rowIndex = 0;
		var columnIndex = 0;
		var _g = 0;
		var _g1 = this.get_container().get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_visible() == false) continue;
			if(child.get_percentWidth() > -1) {
				var ucx = columnWidths[columnIndex];
				child.set_width(ucx * child.get_percentWidth() / 100);
			}
			if(child.get_percentHeight() > -1) {
				var ucy = rowHeights[rowIndex];
				child.set_height(ucy * child.get_percentHeight() / 100);
			}
			columnIndex++;
			if(columnIndex >= this._columns) {
				columnIndex = 0;
				rowIndex++;
			}
		}
		var _g2 = 0;
		while(_g2 < columnWidths.length) {
			var cx = columnWidths[_g2];
			++_g2;
			totalWidth += cx;
		}
		if(columnWidths.length > 1) totalWidth += this.get_spacingX() * (columnWidths.length - 1);
		var _g3 = 0;
		while(_g3 < rowHeights.length) {
			var cy = rowHeights[_g3];
			++_g3;
			totalHeight += cy;
		}
		if(rowHeights.length > 1) totalHeight += this.get_spacingY() * (rowHeights.length - 1);
		if(this.get_container().get_autoSize()) {
			if(totalWidth > 0 && totalWidth != this.get_innerWidth() && this.get_container().get_percentWidth() == -1) this.get_container().set_width(totalWidth + (this.get_padding().get_left() + this.get_padding().get_right()));
			if(totalHeight > 0 && totalHeight != this.get_innerHeight() && this.get_container().get_percentHeight() == -1) this.get_container().set_height(totalHeight + (this.get_padding().get_top() + this.get_padding().get_bottom()));
		}
	}
	,repositionChildren: function() {
		haxe.ui.toolkit.layout.Layout.prototype.repositionChildren.call(this);
		var columnWidths = this.calcColumnWidths();
		var rowHeights = this.calcRowHeights();
		var rowIndex = 0;
		var columnIndex = 0;
		var xpos = this.get_padding().get_left();
		var ypos = this.get_padding().get_top();
		var _g = 0;
		var _g1 = this.get_container().get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_visible() == false) continue;
			var halign = child.get_horizontalAlign();
			var valign = child.get_verticalAlign();
			switch(halign) {
			case "center":
				child.set_x(xpos + (columnWidths[columnIndex] - child.get_width()) * 0.5);
				break;
			case "right":
				child.set_x(xpos + (columnWidths[columnIndex] - child.get_width()));
				break;
			default:
				child.set_x(xpos);
			}
			switch(valign) {
			case "center":
				child.set_y(ypos + (rowHeights[rowIndex] - child.get_height()) * 0.5);
				break;
			case "bottom":
				child.set_y(ypos + (rowHeights[rowIndex] - child.get_height()));
				break;
			default:
				child.set_y(ypos);
			}
			xpos += columnWidths[columnIndex] + this.get_spacingX();
			columnIndex++;
			if(columnIndex >= this._columns) {
				xpos = this.get_padding().get_left();
				ypos += rowHeights[rowIndex] + this.get_spacingY();
				columnIndex = 0;
				rowIndex++;
			}
		}
	}
	,get_usableWidth: function() {
		var ucx = haxe.ui.toolkit.layout.Layout.prototype.get_usableWidth.call(this);
		return ucx;
	}
	,get_usableHeight: function() {
		var ucy = haxe.ui.toolkit.layout.Layout.prototype.get_usableHeight.call(this);
		return ucy;
	}
	,calcColumnWidths: function() {
		var columnWidths = new Array();
		var _g1 = 0;
		var _g = this._columns;
		while(_g1 < _g) {
			var n = _g1++;
			columnWidths.push(0);
		}
		var rowIndex = 0;
		var columnIndex = 0;
		var _g2 = 0;
		var _g11 = this.get_container().get_children();
		while(_g2 < _g11.length) {
			var child = _g11[_g2];
			++_g2;
			if(child.get_visible() == false) continue;
			if(child.get_percentWidth() <= 0) {
				if(child.get_width() > columnWidths[columnIndex]) columnWidths[columnIndex] = child.get_width();
			}
			columnIndex++;
			if(columnIndex >= this._columns) {
				columnIndex = 0;
				rowIndex++;
			}
		}
		rowIndex = 0;
		columnIndex = 0;
		var _g3 = 0;
		var _g12 = this.get_container().get_children();
		while(_g3 < _g12.length) {
			var child1 = _g12[_g3];
			++_g3;
			if(child1.get_visible() == false) continue;
			if(child1.get_percentWidth() > 0) {
				var ucx = this.get_usableWidth() - (this.get_columns() - 1) * this.get_spacingX();
				var _g31 = 0;
				var _g21 = columnWidths.length;
				while(_g31 < _g21) {
					var n1 = _g31++;
					if(n1 != columnIndex) ucx -= columnWidths[n1];
				}
				var cx = ucx * child1.get_percentWidth() / 100;
				if(cx > columnWidths[columnIndex]) columnWidths[columnIndex] = cx;
			}
			columnIndex++;
			if(columnIndex >= this._columns) {
				columnIndex = 0;
				rowIndex++;
			}
		}
		return columnWidths;
	}
	,calcRowHeights: function() {
		var visibleChildren = 0;
		var _g = 0;
		var _g1 = this.get_container().get_children();
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c.get_visible()) visibleChildren++;
		}
		var rowCount = visibleChildren / this._columns | 0;
		if(visibleChildren % this._columns != 0) rowCount++;
		var rowHeights = new Array();
		var _g2 = 0;
		while(_g2 < rowCount) {
			var n = _g2++;
			rowHeights.push(0);
		}
		var rowIndex = 0;
		var columnIndex = 0;
		var _g3 = 0;
		var _g11 = this.get_container().get_children();
		while(_g3 < _g11.length) {
			var child = _g11[_g3];
			++_g3;
			if(child.get_visible() == false) continue;
			if(child.get_percentHeight() <= 0) {
				if(child.get_height() > rowHeights[rowIndex]) rowHeights[rowIndex] = child.get_height();
			}
			columnIndex++;
			if(columnIndex >= this._columns) {
				columnIndex = 0;
				rowIndex++;
			}
		}
		rowIndex = 0;
		columnIndex = 0;
		var _g4 = 0;
		var _g12 = this.get_container().get_children();
		while(_g4 < _g12.length) {
			var child1 = _g12[_g4];
			++_g4;
			if(child1.get_visible() == false) continue;
			if(child1.get_percentHeight() > 0) {
				var ucy = this.get_usableHeight() - (rowCount - 1) * this.get_spacingY();
				var _g31 = 0;
				var _g21 = rowHeights.length;
				while(_g31 < _g21) {
					var n1 = _g31++;
					if(n1 != rowIndex) ucy -= rowHeights[n1];
				}
				var cy = ucy * child1.get_percentHeight() / 100;
				if(cy > rowHeights[rowIndex]) rowHeights[rowIndex] = cy;
			}
			columnIndex++;
			if(columnIndex >= this._columns) {
				columnIndex = 0;
				rowIndex++;
			}
		}
		return rowHeights;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.layout.Layout.prototype.clone.call(this);
		c.set_columns(this.get_columns());
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.layout.GridLayout();
	}
	,__class__: haxe.ui.toolkit.layout.GridLayout
	,__properties__: $extend(haxe.ui.toolkit.layout.Layout.prototype.__properties__,{set_columns:"set_columns",get_columns:"get_columns"})
});
haxe.ui.toolkit.layout.HorizontalContinuousLayout = function() {
	haxe.ui.toolkit.layout.Layout.call(this);
};
$hxClasses["haxe.ui.toolkit.layout.HorizontalContinuousLayout"] = haxe.ui.toolkit.layout.HorizontalContinuousLayout;
haxe.ui.toolkit.layout.HorizontalContinuousLayout.__name__ = ["haxe","ui","toolkit","layout","HorizontalContinuousLayout"];
haxe.ui.toolkit.layout.HorizontalContinuousLayout.__super__ = haxe.ui.toolkit.layout.Layout;
haxe.ui.toolkit.layout.HorizontalContinuousLayout.prototype = $extend(haxe.ui.toolkit.layout.Layout.prototype,{
	repositionChildren: function() {
		haxe.ui.toolkit.layout.Layout.prototype.repositionChildren.call(this);
		var xpos = this.get_padding().get_left();
		var ypos = this.get_padding().get_top();
		var usedCX = this.get_padding().get_left() + this.get_padding().get_right();
		var usedCY = this.get_padding().get_top() + this.get_padding().get_bottom();
		var rowCY = 0;
		var rowHeights = new Array();
		var rowChildren = new Array();
		rowHeights.push(0);
		var row = 0;
		var maxCX = this.get_container().get_width();
		if(this.get_container().get_autoSize() == true && this.get_container().get_parent() != null) maxCX = this.get_container().get_parent().get_layout().get_usableWidth();
		var _g = 0;
		var _g1 = this.get_container().get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_visible() == false) continue;
			rowChildren.push(child);
			if(child.get_percentWidth() > -1) child.set_width((maxCX - this.get_spacingX()) * child.get_percentWidth() / 100);
			usedCX += child.get_width() + this.get_spacingX();
			if(usedCX - this.get_spacingX() > maxCX) {
				xpos = this.get_padding().get_left();
				rowHeights.push(0);
				ypos += rowHeights[row] + this.get_spacingY();
				row++;
				usedCX = this.get_padding().get_left() + this.get_padding().get_right() + child.get_width() + this.get_spacingX();
				rowChildren = new Array();
				rowChildren.push(child);
			}
			var reposition = false;
			if(child.get_height() > rowHeights[row]) {
				rowHeights[row] = child.get_height();
				reposition = true;
			}
			usedCY = this.get_padding().get_top() + this.get_padding().get_bottom();
			var _g2 = 0;
			while(_g2 < rowHeights.length) {
				var cy = rowHeights[_g2];
				++_g2;
				usedCY += cy + this.get_spacingY();
			}
			usedCY -= this.get_spacingY();
			if(reposition) {
				var _g21 = 0;
				while(_g21 < rowChildren.length) {
					var temp = rowChildren[_g21];
					++_g21;
					var valign = temp.get_verticalAlign();
					var tempYpos = temp.get_y();
					switch(valign) {
					case "center":
						tempYpos = usedCY - temp.get_height() - this.get_padding().get_top() - (rowHeights[row] / 2 - temp.get_height() / 2);
						break;
					case "bottom":
						tempYpos = usedCY - temp.get_height() - this.get_padding().get_top();
						break;
					default:
					}
					temp.set_y(tempYpos);
				}
			}
			if(usedCX - this.get_spacingX() > this.get_container().get_width() && this.get_container().get_autoSize()) this.get_container().set_width(usedCX - this.get_spacingX());
			if(usedCY > this.get_container().get_height() && this.get_container().get_autoSize()) this.get_container().set_height(usedCY);
			var valign1 = child.get_verticalAlign();
			switch(valign1) {
			case "center":
				ypos = usedCY - child.get_height() - this.get_padding().get_top() - (rowHeights[row] / 2 - child.get_height() / 2);
				break;
			case "bottom":
				ypos = usedCY - child.get_height() - this.get_padding().get_top();
				break;
			default:
			}
			child.set_x(xpos);
			child.set_y(ypos);
			xpos += child.get_width() + this.get_spacingX();
		}
	}
	,clone: function() {
		var c = haxe.ui.toolkit.layout.Layout.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.layout.HorizontalContinuousLayout();
	}
	,__class__: haxe.ui.toolkit.layout.HorizontalContinuousLayout
});
haxe.ui.toolkit.layout.HorizontalLayout = function() {
	haxe.ui.toolkit.layout.Layout.call(this);
};
$hxClasses["haxe.ui.toolkit.layout.HorizontalLayout"] = haxe.ui.toolkit.layout.HorizontalLayout;
haxe.ui.toolkit.layout.HorizontalLayout.__name__ = ["haxe","ui","toolkit","layout","HorizontalLayout"];
haxe.ui.toolkit.layout.HorizontalLayout.__super__ = haxe.ui.toolkit.layout.Layout;
haxe.ui.toolkit.layout.HorizontalLayout.prototype = $extend(haxe.ui.toolkit.layout.Layout.prototype,{
	resizeChildren: function() {
		haxe.ui.toolkit.layout.Layout.prototype.resizeChildren.call(this);
		var ucx = this.get_usableWidth();
		var ucy = this.get_usableHeight();
		var totalWidth = 0;
		var totalHeight = 0;
		var numChildren = 0;
		var _g = 0;
		var _g1 = this.get_container().get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_visible() == false) continue;
			numChildren++;
			if(child.get_percentWidth() > -1) child.set_width(ucx * child.get_percentWidth() / 100);
			if(child.get_percentHeight() > -1) child.set_height(ucy * child.get_percentHeight() / 100);
			totalWidth += child.get_width();
			if(child.get_height() > totalHeight) totalHeight = child.get_height();
		}
		if(numChildren > 1) totalWidth += this.get_spacingX() * (numChildren - 1);
		if(this.get_container().get_autoSize()) {
			if(totalWidth > 0 && totalWidth != this.get_innerWidth() && this.get_container().get_percentWidth() == -1) this.get_container().set_width(totalWidth + (this.get_padding().get_left() + this.get_padding().get_right()));
			if(totalHeight > 0 && totalHeight != this.get_innerHeight() && this.get_container().get_percentHeight() == -1) this.get_container().set_height(totalHeight + (this.get_padding().get_top() + this.get_padding().get_bottom()));
		}
	}
	,repositionChildren: function() {
		haxe.ui.toolkit.layout.Layout.prototype.repositionChildren.call(this);
		var xpos = this.get_padding().get_left();
		var _g = 0;
		var _g1 = this.get_container().get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_visible() == false) continue;
			var ypos = this.get_padding().get_top();
			var valign = child.get_verticalAlign();
			switch(valign) {
			case "center":
				ypos = this.get_container().get_height() / 2 - child.get_height() / 2;
				break;
			case "bottom":
				ypos = this.get_container().get_height() - child.get_height();
				break;
			default:
			}
			child.set_x(xpos);
			child.set_y(ypos);
			xpos += child.get_width() + this.get_spacingX();
		}
	}
	,get_usableWidth: function() {
		var ucx = haxe.ui.toolkit.layout.Layout.prototype.get_usableWidth.call(this);
		var visibleChildren = 0;
		var _g = 0;
		var _g1 = this.get_container().get_children();
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c.get_visible()) visibleChildren++;
		}
		if(visibleChildren > 1) ucx -= this.get_spacingX() * (visibleChildren - 1);
		var _g2 = 0;
		var _g11 = this.get_container().get_children();
		while(_g2 < _g11.length) {
			var child = _g11[_g2];
			++_g2;
			if(child.get_visible() == false) continue;
			if(child.get_width() > 0 && child.get_percentWidth() < 0) ucx -= child.get_width();
		}
		if(ucx < 0) ucx = 0;
		return ucx;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.layout.Layout.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.layout.HorizontalLayout();
	}
	,__class__: haxe.ui.toolkit.layout.HorizontalLayout
});
haxe.ui.toolkit.layout.VerticalContinuousLayout = function() {
	haxe.ui.toolkit.layout.Layout.call(this);
};
$hxClasses["haxe.ui.toolkit.layout.VerticalContinuousLayout"] = haxe.ui.toolkit.layout.VerticalContinuousLayout;
haxe.ui.toolkit.layout.VerticalContinuousLayout.__name__ = ["haxe","ui","toolkit","layout","VerticalContinuousLayout"];
haxe.ui.toolkit.layout.VerticalContinuousLayout.__super__ = haxe.ui.toolkit.layout.Layout;
haxe.ui.toolkit.layout.VerticalContinuousLayout.prototype = $extend(haxe.ui.toolkit.layout.Layout.prototype,{
	repositionChildren: function() {
		haxe.ui.toolkit.layout.Layout.prototype.repositionChildren.call(this);
		var xpos = this.get_padding().get_left();
		var ypos = this.get_padding().get_top();
		var usedCX = this.get_padding().get_left() + this.get_padding().get_right();
		var usedCY = this.get_padding().get_top() + this.get_padding().get_bottom();
		var colCX = 0;
		var colWidths = new Array();
		var colChildren = new Array();
		colWidths.push(0);
		var col = 0;
		var maxCY = this.get_container().get_height();
		if(this.get_container().get_autoSize() == true && this.get_container().get_parent() != null) maxCY = this.get_container().get_parent().get_layout().get_usableHeight();
		var _g = 0;
		var _g1 = this.get_container().get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_visible() == false) continue;
			colChildren.push(child);
			usedCY += child.get_height() + this.get_spacingY();
			if(usedCY - this.get_spacingY() > maxCY) {
				ypos = this.get_padding().get_top();
				colWidths.push(0);
				xpos += colWidths[col] + this.get_spacingX();
				col++;
				usedCY = this.get_padding().get_top() + this.get_padding().get_bottom() + child.get_height() + this.get_spacingY();
				colChildren = new Array();
				colChildren.push(child);
			}
			var reposition = false;
			if(child.get_width() > colWidths[col]) {
				colWidths[col] = child.get_width();
				reposition = true;
			}
			usedCX = this.get_padding().get_left() + this.get_padding().get_right();
			var _g2 = 0;
			while(_g2 < colWidths.length) {
				var cx = colWidths[_g2];
				++_g2;
				usedCX += cx + this.get_spacingX();
			}
			usedCX -= this.get_spacingX();
			if(reposition) {
				var _g21 = 0;
				while(_g21 < colChildren.length) {
					var temp = colChildren[_g21];
					++_g21;
					var halign = child.get_horizontalAlign();
					var tempXpos = temp.get_x();
					switch(halign) {
					case "center":
						tempXpos = usedCX - temp.get_width() - this.get_padding().get_left() - (colWidths[col] / 2 - temp.get_width() / 2);
						break;
					case "right":
						tempXpos = usedCX - temp.get_width() - this.get_padding().get_left();
						break;
					default:
					}
					temp.set_x(tempXpos);
				}
			}
			if(usedCY - this.get_spacingY() > this.get_container().get_height() && this.get_container().get_autoSize()) this.get_container().set_height(usedCY - this.get_spacingY());
			if(usedCX > this.get_container().get_width() && this.get_container().get_autoSize()) this.get_container().set_width(usedCX);
			var halign1 = child.get_horizontalAlign();
			switch(halign1) {
			case "center":
				xpos = usedCX - child.get_width() - this.get_padding().get_left() - (colWidths[col] / 2 - child.get_width() / 2);
				break;
			case "right":
				xpos = usedCX - child.get_width() - this.get_padding().get_left();
				break;
			default:
			}
			child.set_x(xpos);
			child.set_y(ypos);
			ypos += child.get_height() + this.get_spacingY();
		}
	}
	,clone: function() {
		var c = haxe.ui.toolkit.layout.Layout.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.layout.VerticalContinuousLayout();
	}
	,__class__: haxe.ui.toolkit.layout.VerticalContinuousLayout
});
haxe.ui.toolkit.layout.VerticalLayout = function() {
	haxe.ui.toolkit.layout.Layout.call(this);
};
$hxClasses["haxe.ui.toolkit.layout.VerticalLayout"] = haxe.ui.toolkit.layout.VerticalLayout;
haxe.ui.toolkit.layout.VerticalLayout.__name__ = ["haxe","ui","toolkit","layout","VerticalLayout"];
haxe.ui.toolkit.layout.VerticalLayout.__super__ = haxe.ui.toolkit.layout.Layout;
haxe.ui.toolkit.layout.VerticalLayout.prototype = $extend(haxe.ui.toolkit.layout.Layout.prototype,{
	resizeChildren: function() {
		haxe.ui.toolkit.layout.Layout.prototype.resizeChildren.call(this);
		var ucx = this.get_usableWidth();
		var ucy = this.get_usableHeight();
		var totalWidth = 0;
		var totalHeight = 0;
		var numChildren = 0;
		var _g = 0;
		var _g1 = this.get_container().get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_visible() == false) continue;
			numChildren++;
			if(child.get_percentWidth() > -1) child.set_width(ucx * child.get_percentWidth() / 100);
			if(child.get_percentHeight() > -1) child.set_height(ucy * child.get_percentHeight() / 100);
			totalHeight += child.get_height();
			if(child.get_width() > totalWidth) totalWidth = child.get_width();
		}
		if(numChildren > 1) totalHeight += this.get_spacingY() * (numChildren - 1);
		if(this.get_container().get_autoSize()) {
			if(totalWidth > 0 && totalWidth != this.get_innerWidth() && this.get_container().get_percentWidth() == -1) this.get_container().set_width(totalWidth + (this.get_padding().get_left() + this.get_padding().get_right()));
			if(totalHeight > 0 && totalHeight != this.get_innerHeight() && this.get_container().get_percentHeight() == -1) this.get_container().set_height(totalHeight + (this.get_padding().get_top() + this.get_padding().get_bottom()));
		}
	}
	,repositionChildren: function() {
		haxe.ui.toolkit.layout.Layout.prototype.repositionChildren.call(this);
		var ypos = this.get_padding().get_top();
		var _g = 0;
		var _g1 = this.get_container().get_children();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_visible() == false) continue;
			var xpos = this.get_padding().get_left();
			var halign = child.get_horizontalAlign();
			switch(halign) {
			case "center":
				xpos = this.get_container().get_width() / 2 - child.get_width() / 2;
				break;
			case "right":
				xpos = this.get_container().get_width() - child.get_width();
				break;
			default:
			}
			child.set_x(xpos);
			child.set_y(ypos);
			ypos += child.get_height() + this.get_spacingY();
		}
	}
	,get_usableHeight: function() {
		var ucy = haxe.ui.toolkit.layout.Layout.prototype.get_usableHeight.call(this);
		var visibleChildren = 0;
		var _g = 0;
		var _g1 = this.get_container().get_children();
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c.get_visible()) visibleChildren++;
		}
		if(visibleChildren > 1) ucy -= this.get_spacingY() * (visibleChildren - 1);
		var _g2 = 0;
		var _g11 = this.get_container().get_children();
		while(_g2 < _g11.length) {
			var child = _g11[_g2];
			++_g2;
			if(child.get_visible() == false) continue;
			if(child.get_height() > 0 && child.get_percentHeight() < 0) ucy -= child.get_height();
		}
		if(ucy < 0) ucy = 0;
		return ucy;
	}
	,clone: function() {
		var c = haxe.ui.toolkit.layout.Layout.prototype.clone.call(this);
		return c;
	}
	,self: function() {
		return new haxe.ui.toolkit.layout.VerticalLayout();
	}
	,__class__: haxe.ui.toolkit.layout.VerticalLayout
});
haxe.ui.toolkit.resources = {};
haxe.ui.toolkit.resources.ResourceManager = function() {
};
$hxClasses["haxe.ui.toolkit.resources.ResourceManager"] = haxe.ui.toolkit.resources.ResourceManager;
haxe.ui.toolkit.resources.ResourceManager.__name__ = ["haxe","ui","toolkit","resources","ResourceManager"];
haxe.ui.toolkit.resources.ResourceManager.__properties__ = {get_instance:"get_instance"}
haxe.ui.toolkit.resources.ResourceManager._instance = null;
haxe.ui.toolkit.resources.ResourceManager.instance = null;
haxe.ui.toolkit.resources.ResourceManager.get_instance = function() {
	if(haxe.ui.toolkit.resources.ResourceManager._instance == null) haxe.ui.toolkit.resources.ResourceManager._instance = new haxe.ui.toolkit.resources.ResourceManager();
	return haxe.ui.toolkit.resources.ResourceManager._instance;
};
haxe.ui.toolkit.resources.ResourceManager.prototype = {
	getXML: function(resourceId,locale) {
		var text = this.getText(resourceId,locale);
		var xml = null;
		if(text != null) xml = Xml.parse(text);
		return xml;
	}
	,getText: function(resourceId,locale) {
		var str = haxe.Resource.getString(resourceId);
		if(str == null) str = openfl.Assets.getText(resourceId);
		return str;
	}
	,getBitmapData: function(resourceId,locale) {
		if(resourceId == null || resourceId.length == 0) return null;
		var bmp = null;
		var bytes = haxe.Resource.getBytes(resourceId);
		if(bytes != null) {
			var ba = haxe.ui.toolkit.util.ByteConverter.fromHaxeBytes(bytes);
			var loader = new flash.display.Loader();
			loader.loadBytes(ba);
			if(loader.content != null) bmp = (js.Boot.__cast(loader.content , flash.display.Bitmap)).bitmapData;
		} else bmp = openfl.Assets.getBitmapData(resourceId,true);
		return bmp;
	}
	,reset: function() {
	}
	,__class__: haxe.ui.toolkit.resources.ResourceManager
};
haxe.ui.toolkit.style = {};
haxe.ui.toolkit.style.Styles = function() {
	this._styles = new haxe.ds.StringMap();
	this._styleRules = new Array();
};
$hxClasses["haxe.ui.toolkit.style.Styles"] = haxe.ui.toolkit.style.Styles;
haxe.ui.toolkit.style.Styles.__name__ = ["haxe","ui","toolkit","style","Styles"];
haxe.ui.toolkit.style.Styles.prototype = {
	addStyle: function(rule,style) {
		if(rule.indexOf(",") != -1) {
			var rules = rule.split(",");
			var _g = 0;
			while(_g < rules.length) {
				var r = rules[_g];
				++_g;
				r = StringTools.trim(r);
				this.addStyle(r,style);
			}
			return null;
		}
		var currentStyle = this.getStyle(rule);
		if(currentStyle != null) {
			currentStyle.merge(style);
			style = currentStyle;
		} else this._styleRules.push(rule);
		this._styles.set(rule,style);
		return style;
	}
	,getStyle: function(rule) {
		return this._styles.get(rule);
	}
	,get_rules: function() {
		return HxOverrides.iter(this._styleRules);
	}
	,__class__: haxe.ui.toolkit.style.Styles
	,__properties__: {get_rules:"get_rules"}
};
haxe.ui.toolkit.style.DefaultStyles = function() {
	haxe.ui.toolkit.style.Styles.call(this);
	this.addStyle("Root",new haxe.ui.toolkit.style.Style({ padding : 0}));
	this.addStyle("Text",new haxe.ui.toolkit.style.Style({ fontSize : 13, fontName : "_sans"}));
	this.addStyle("ScrollView, ScrollView VBox",new haxe.ui.toolkit.style.Style({ backgroundColor : 16777215, borderColor : 14540253, color : 0, padding : 0, borderSize : 0, spacing : 5}));
	this.addStyle("VBox, HBox, Grid, ListView",new haxe.ui.toolkit.style.Style({ spacing : 5}));
	this.addStyle("Stack",new haxe.ui.toolkit.style.Style({ padding : 5}));
	this.addStyle("Button",new haxe.ui.toolkit.style.Style({ backgroundColor : 16777215, backgroundColorGradientEnd : 15658734, padding : 10, borderColor : 13421772, borderSize : 1, cornerRadius : 3, filter : new flash.filters.DropShadowFilter(1,45,12566463,1,2,2,1,1)}));
	this.addStyle("Button:over",new haxe.ui.toolkit.style.Style({ backgroundColor : 16777215, backgroundColorGradientEnd : 14540253}));
	this.addStyle("Button:down",new haxe.ui.toolkit.style.Style({ backgroundColor : 16777215, backgroundColorGradientEnd : 13421772}));
	this.addStyle("TextInput",new haxe.ui.toolkit.style.Style({ backgroundColor : 16777215, width : 150, height : 30, borderColor : 13421772, padding : 2, cornerRadius : 2, filter : new flash.filters.DropShadowFilter(2,45,12566463,1,2,2,1,1,true), fontSize : 13, fontName : "_sans"}));
	this.addStyle("TextInput #placeholder",new haxe.ui.toolkit.style.Style({ color : 11184810}));
	this.addStyle("HProgress",new haxe.ui.toolkit.style.Style({ backgroundColor : 16777215, width : 100, height : 20, borderColor : 15724527, padding : 0, cornerRadius : 2, borderSize : 0, filter : new flash.filters.DropShadowFilter(1,45,12566463,1,2,2,1,1,true)}));
	this.addStyle("HProgress #background",new haxe.ui.toolkit.style.Style({ percentWidth : 100, percentHeight : 100, backgroundColor : 16777215, borderSize : 0}));
	this.addStyle("HProgress #value",new haxe.ui.toolkit.style.Style({ percentHeight : 100, backgroundColor : 16777215, backgroundColorGradientEnd : 15658734, borderColor : 14671839, cornerRadius : 2}));
	this.addStyle("HSlider",new haxe.ui.toolkit.style.Style({ width : 100, height : 26, borderColor : 15724527, padding : 3, cornerRadius : 2, borderSize : 0}));
	this.addStyle("HSlider #background",new haxe.ui.toolkit.style.Style({ percentWidth : 100, height : 10, borderSize : 1, backgroundColor : 15724527, cornerRadius : 2}));
	this.addStyle("HSlider #value",new haxe.ui.toolkit.style.Style({ height : 10, backgroundColor : 16777215, backgroundColorGradientEnd : 15658734, borderColor : 14671839, cornerRadius : 2}));
	this.addStyle("HSlider Button",new haxe.ui.toolkit.style.Style({ width : 10, percentHeight : 100, backgroundColor : 16777215, backgroundColorGradientEnd : 15658734, borderColor : 14671839, cornerRadius : 2}));
	this.addStyle("VScroll",new haxe.ui.toolkit.style.Style({ width : 10, height : 100, hasButtons : false}));
	this.addStyle("VScroll Button",new haxe.ui.toolkit.style.Style({ cornerRadius : 2, gradientType : "horizontal"}));
	this.addStyle("HScroll",new haxe.ui.toolkit.style.Style({ width : 100, height : 10, hasButtons : false}));
	this.addStyle("HScroll Button",new haxe.ui.toolkit.style.Style({ cornerRadius : 2}));
	this.addStyle("ListView",new haxe.ui.toolkit.style.Style({ color : 0, padding : 2, borderSize : 1, spacing : 2, cornerRadius : 2}));
	this.addStyle("ListViewItem",new haxe.ui.toolkit.style.Style({ padding : 5, cornerRadius : 3, backgroundColor : 16777215}));
	this.addStyle("ListView #even",new haxe.ui.toolkit.style.Style({ backgroundColor : 16382457}));
	this.addStyle("ListView #even:over, ListView #odd:over, ListViewItem:selected",new haxe.ui.toolkit.style.Style({ backgroundColor : 13421772}));
	this.addStyle("MenuBar",new haxe.ui.toolkit.style.Style({ height : 45}));
	this.addStyle("TabBar",new haxe.ui.toolkit.style.Style({ backgroundColor : 16777215, height : 45, paddingTop : 15, paddingLeft : 5, paddingRight : 5}));
	this.addStyle("TabBar HBox",new haxe.ui.toolkit.style.Style({ spacingX : 3}));
	this.addStyle("TabBar Button",new haxe.ui.toolkit.style.Style({ height : 30, iconPosition : "left", cornerRadiusBottomLeft : 0, cornerRadiusBottomRight : 0, backgroundColor : 15658734, backgroundColorGradientEnd : 13421772, borderColor : 14737632, color : 8947848}));
	this.addStyle("TabBar Button:down",new haxe.ui.toolkit.style.Style({ backgroundColor : 16777215, backgroundColorGradientEnd : 15658734, color : 0}));
	this.addStyle("TabView",new haxe.ui.toolkit.style.Style({ backgroundColor : 15658734}));
	this.addStyle("MenuBar",new haxe.ui.toolkit.style.Style({ backgroundColor : 14671325, percentWidth : 100, height : 50, padding : 5, cornerRadius : 0, filter : new flash.filters.DropShadowFilter(2,45,12566463,1,2,2,1,1)}));
	this.addStyle("Calendar, CalendarView",new haxe.ui.toolkit.style.Style({ width : 250, height : 250}));
	this.addStyle("Popup",new haxe.ui.toolkit.style.Style({ backgroundColor : 16777215, filter : new flash.filters.DropShadowFilter(2,45,12566463,1,2,2,1,1), borderColor : 11184810, borderSize : 1, cornerRadius : 3, padding : 2, width : 350}));
	this.addStyle("Popup #titleBar",new haxe.ui.toolkit.style.Style({ backgroundColor : 13421772, height : 30, paddingTop : 4, paddingLeft : 5}));
	this.addStyle("Popup #content",new haxe.ui.toolkit.style.Style({ padding : 5}));
	this.addStyle("Popup #buttonBar",new haxe.ui.toolkit.style.Style({ paddingTop : 10, paddingBottom : 5, height : 55}));
	this.addStyle("Popup #titleBar #text",new haxe.ui.toolkit.style.Style({ color : 6710886}));
	this.addStyle("Menu",new haxe.ui.toolkit.style.Style({ spacing : 0, backgroundColor : 16777215, filter : new flash.filters.DropShadowFilter(2,45,12566463,1,2,2,1,1), borderColor : 11184810, borderSize : 1, cornerRadius : 3, padding : 2, width : 150}));
	this.addStyle("MenuItem",new haxe.ui.toolkit.style.Style({ percentWidth : 100, backgroundColor : 16777215, borderSize : 0, labelPosition : "left", iconPosition : "farRight", cornerRadius : 0}));
	this.addStyle("MenuItem:over, MenuItem:down",new haxe.ui.toolkit.style.Style({ backgroundColor : 11184810}));
};
$hxClasses["haxe.ui.toolkit.style.DefaultStyles"] = haxe.ui.toolkit.style.DefaultStyles;
haxe.ui.toolkit.style.DefaultStyles.__name__ = ["haxe","ui","toolkit","style","DefaultStyles"];
haxe.ui.toolkit.style.DefaultStyles.__super__ = haxe.ui.toolkit.style.Styles;
haxe.ui.toolkit.style.DefaultStyles.prototype = $extend(haxe.ui.toolkit.style.Styles.prototype,{
	__class__: haxe.ui.toolkit.style.DefaultStyles
});
haxe.ui.toolkit.style.Style = function(defaults) {
	this._inlineScrolls = -1;
	this._autoHideScrolls = -1;
	this._hasButtons = -1;
	this._fontEmbedded = -1;
	this._fontScale = -1;
	this._fontSize = -1;
	this._alpha = -1;
	this._filterSet = false;
	this._cornerRadiusBottomRight = -1;
	this._cornerRadiusBottomLeft = -1;
	this._cornerRadiusTopRight = -1;
	this._cornerRadiusTopLeft = -1;
	this._spacingY = -1;
	this._spacingX = -1;
	this._paddingBottom = -1;
	this._paddingTop = -1;
	this._paddingRight = -1;
	this._paddingLeft = -1;
	this._color = -1;
	this._borderSize = -1;
	this._borderColor = -1;
	this._backgroundColorGradientEnd = -1;
	this._backgroundColor = -1;
	this._autoSize = -1;
	this._percentHeight = -1;
	this._percentWidth = -1;
	this._height = -1;
	this._width = -1;
	this._autoApply = true;
	var _g = 0;
	var _g1 = Reflect.fields(defaults);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		if(Reflect.getProperty(this,"set_" + field) != null) Reflect.setProperty(this,field,Reflect.field(defaults,field));
	}
};
$hxClasses["haxe.ui.toolkit.style.Style"] = haxe.ui.toolkit.style.Style;
haxe.ui.toolkit.style.Style.__name__ = ["haxe","ui","toolkit","style","Style"];
haxe.ui.toolkit.style.Style.__interfaces__ = [haxe.ui.toolkit.core.interfaces.IClonable];
haxe.ui.toolkit.style.Style.prototype = {
	get_target: function() {
		return this._target;
	}
	,set_target: function(value) {
		this._target = value;
		this.apply();
		return value;
	}
	,get_autoApply: function() {
		return this._autoApply;
	}
	,set_autoApply: function(value) {
		this._autoApply = value;
		return value;
	}
	,get_width: function() {
		if(this.hasDynamicValue("width")) return this.getDynamicValue("width");
		return this._width;
	}
	,set_width: function(value) {
		if(value != this._width) {
			this._width = value;
			this.apply();
		}
		return value;
	}
	,get_height: function() {
		if(this.hasDynamicValue("height")) return this.getDynamicValue("height");
		return this._height;
	}
	,set_height: function(value) {
		if(value != this._height) {
			this._height = value;
			this.apply();
		}
		return value;
	}
	,get_percentWidth: function() {
		if(this.hasDynamicValue("percentWidth")) return this.getDynamicValue("percentWidth");
		return this._percentWidth;
	}
	,set_percentWidth: function(value) {
		if(value != this._percentWidth) {
			this._percentWidth = value;
			this.apply();
		}
		return value;
	}
	,get_percentHeight: function() {
		if(this.hasDynamicValue("percentHeight")) return this.getDynamicValue("percentHeight");
		return this._percentHeight;
	}
	,set_percentHeight: function(value) {
		if(value != this._percentHeight) {
			this._percentHeight = value;
			this.apply();
		}
		return value;
	}
	,get_autoSize: function() {
		if(this.hasDynamicValue("autoSize")) return this.getDynamicValue("autoSize");
		if(this._autoSize == -1) return true;
		return this._autoSize == 1;
	}
	,set_autoSize: function(value) {
		if(value) this._autoSize = 1; else this._autoSize = 0;
		this.apply();
		return value;
	}
	,get_autoSizeSet: function() {
		if(this.hasDynamicValue("autoSize")) return true;
		if(this._autoSize != -1) return true;
		return false;
	}
	,get_backgroundImage: function() {
		if(this.hasDynamicValue("backgroundImage")) return this.getDynamicValue("backgroundImage");
		return this._backgroundImage;
	}
	,set_backgroundImage: function(value) {
		if(value != this._backgroundImage) {
			this._backgroundImage = value;
			this.apply();
		}
		return value;
	}
	,get_backgroundImageScale9: function() {
		if(this.hasDynamicValue("backgroundImageScale9")) return this.getDynamicValue("backgroundImageScale9");
		return this._backgroundImageScale9;
	}
	,set_backgroundImageScale9: function(value) {
		if(value != this._backgroundImageScale9) {
			this._backgroundImageScale9 = value;
			this.apply();
		}
		return value;
	}
	,get_backgroundImageRect: function() {
		if(this.hasDynamicValue("backgroundImageRect")) return this.getDynamicValue("backgroundImageRect");
		return this._backgroundImageRect;
	}
	,set_backgroundImageRect: function(value) {
		if(value != this._backgroundImageRect) {
			this._backgroundImageRect = value;
			this.apply();
		}
		return value;
	}
	,get_backgroundColor: function() {
		if(this.hasDynamicValue("backgroundColor")) return this.getDynamicValue("backgroundColor");
		return this._backgroundColor;
	}
	,set_backgroundColor: function(value) {
		if(value != this._backgroundColor) {
			this._backgroundColor = value;
			this.apply();
		}
		return value;
	}
	,get_backgroundColorGradientEnd: function() {
		if(this.hasDynamicValue("backgroundColorGradientEnd")) return this.getDynamicValue("backgroundColorGradientEnd");
		return this._backgroundColorGradientEnd;
	}
	,set_backgroundColorGradientEnd: function(value) {
		if(value != this._backgroundColorGradientEnd) {
			this._backgroundColorGradientEnd = value;
			this.apply();
		}
		return value;
	}
	,get_borderColor: function() {
		if(this.hasDynamicValue("borderColor")) return this.getDynamicValue("borderColor");
		return this._borderColor;
	}
	,set_borderColor: function(value) {
		if(value != this._borderColor) {
			this._borderColor = value;
			this.apply();
		}
		return value;
	}
	,get_borderSize: function() {
		if(this.hasDynamicValue("borderSize")) return this.getDynamicValue("borderSize");
		return this._borderSize;
	}
	,set_borderSize: function(value) {
		if(value != this._borderSize) {
			this._borderSize = value;
			this.apply();
		}
		return value;
	}
	,get_color: function() {
		if(this.hasDynamicValue("color")) return this.getDynamicValue("color");
		return this._color;
	}
	,set_color: function(value) {
		if(value != this._color) {
			this._color = value;
			this.apply();
		}
		return value;
	}
	,get_paddingLeft: function() {
		if(this.hasDynamicValue("paddingLeft")) return this.getDynamicValue("paddingRight");
		if(this.hasDynamicValue("padding")) return this.getDynamicValue("padding");
		return this._paddingLeft;
	}
	,set_paddingLeft: function(value) {
		if(value != this._paddingLeft) {
			this._paddingLeft = value;
			this.apply();
		}
		return value;
	}
	,get_paddingRight: function() {
		if(this.hasDynamicValue("paddingRight")) return this.getDynamicValue("paddingRight");
		if(this.hasDynamicValue("padding")) return this.getDynamicValue("padding");
		return this._paddingRight;
	}
	,set_paddingRight: function(value) {
		if(value != this._paddingRight) {
			this._paddingRight = value;
			this.apply();
		}
		return value;
	}
	,get_paddingTop: function() {
		if(this.hasDynamicValue("paddingTop")) return this.getDynamicValue("paddingTop");
		if(this.hasDynamicValue("padding")) return this.getDynamicValue("padding");
		return this._paddingTop;
	}
	,set_paddingTop: function(value) {
		if(value != this._paddingTop) {
			this._paddingTop = value;
			this.apply();
		}
		return value;
	}
	,get_paddingBottom: function() {
		if(this.hasDynamicValue("paddingBottom")) return this.getDynamicValue("paddingBottom");
		if(this.hasDynamicValue("padding")) return this.getDynamicValue("padding");
		return this._paddingBottom;
	}
	,set_paddingBottom: function(value) {
		if(value != this._paddingBottom) {
			this._paddingBottom = value;
			this.apply();
		}
		return value;
	}
	,get_padding: function() {
		if(this.hasDynamicValue("padding")) return this.getDynamicValue("padding");
		return js.Boot.__cast(this._paddingLeft | this._paddingRight | this._paddingTop | this._paddingBottom , Int);
	}
	,set_padding: function(value) {
		if(value != this._paddingLeft || value != this._paddingRight || value != this._paddingTop || value != this._paddingBottom) {
			this._paddingLeft = value;
			this._paddingRight = value;
			this._paddingTop = value;
			this._paddingBottom = value;
			this.apply();
		}
		return value;
	}
	,get_spacingX: function() {
		if(this.hasDynamicValue("spacingX")) return this.getDynamicValue("spacingX");
		if(this.hasDynamicValue("spacing")) return this.getDynamicValue("spacing");
		return this._spacingX;
	}
	,set_spacingX: function(value) {
		if(value != this._spacingX) {
			this._spacingX = value;
			this.apply();
		}
		return value;
	}
	,get_spacingY: function() {
		if(this.hasDynamicValue("spacingY")) return this.getDynamicValue("spacingY");
		if(this.hasDynamicValue("spacing")) return this.getDynamicValue("spacing");
		return this._spacingY;
	}
	,set_spacingY: function(value) {
		if(value != this._spacingY) {
			this._spacingY = value;
			this.apply();
		}
		return value;
	}
	,get_spacing: function() {
		if(this.hasDynamicValue("spacing")) return this.getDynamicValue("spacing");
		return this._spacingX | this._spacingY;
	}
	,set_spacing: function(value) {
		if(value != this._spacingX || value != this._spacingY) {
			this._spacingX = value;
			this._spacingY = value;
			this.apply();
		}
		return value;
	}
	,get_cornerRadiusTopLeft: function() {
		if(this.hasDynamicValue("cornerRadiusTopLeft")) return this.getDynamicValue("cornerRadiusTopLeft");
		if(this.hasDynamicValue("cornerRadius")) return this.getDynamicValue("cornerRadius");
		return this._cornerRadiusTopLeft;
	}
	,set_cornerRadiusTopLeft: function(value) {
		if(value != this._cornerRadiusTopLeft) {
			this._cornerRadiusTopLeft = value;
			this.apply();
		}
		return value;
	}
	,get_cornerRadiusTopRight: function() {
		if(this.hasDynamicValue("cornerRadiusTopRight")) return this.getDynamicValue("cornerRadiusTopRight");
		if(this.hasDynamicValue("cornerRadius")) return this.getDynamicValue("cornerRadius");
		return this._cornerRadiusTopRight;
	}
	,set_cornerRadiusTopRight: function(value) {
		if(value != this._cornerRadiusTopRight) {
			this._cornerRadiusTopRight = value;
			this.apply();
		}
		return value;
	}
	,get_cornerRadiusBottomLeft: function() {
		if(this.hasDynamicValue("cornerRadiusBottomLeft")) return this.getDynamicValue("cornerRadiusBottomLeft");
		if(this.hasDynamicValue("cornerRadius")) return this.getDynamicValue("cornerRadius");
		return this._cornerRadiusBottomLeft;
	}
	,set_cornerRadiusBottomLeft: function(value) {
		if(value != this._cornerRadiusBottomLeft) {
			this._cornerRadiusBottomLeft = value;
			this.apply();
		}
		return value;
	}
	,get_cornerRadiusBottomRight: function() {
		if(this.hasDynamicValue("cornerRadiusBottomRight")) return this.getDynamicValue("cornerRadiusBottomRight");
		if(this.hasDynamicValue("cornerRadius")) return this.getDynamicValue("cornerRadius");
		return this._cornerRadiusBottomRight;
	}
	,set_cornerRadiusBottomRight: function(value) {
		if(value != this._cornerRadiusBottomRight) {
			this._cornerRadiusBottomRight = value;
			this.apply();
		}
		return value;
	}
	,get_cornerRadius: function() {
		if(this.hasDynamicValue("cornerRadius")) return this.getDynamicValue("cornerRadius");
		return this._cornerRadiusTopLeft | this._cornerRadiusTopRight | this._cornerRadiusBottomLeft | this._cornerRadiusBottomRight;
	}
	,set_cornerRadius: function(value) {
		if(value != this._cornerRadiusTopLeft || value != this._cornerRadiusTopRight || value != this._cornerRadiusBottomLeft || value != this._cornerRadiusBottomRight) {
			this._cornerRadiusTopLeft = value;
			this._cornerRadiusTopRight = value;
			this._cornerRadiusBottomLeft = value;
			this._cornerRadiusBottomRight = value;
			this.apply();
		}
		return value;
	}
	,get_filter: function() {
		if(this.hasDynamicValue("filter")) return this.getDynamicValue("filter");
		return this._filter;
	}
	,set_filter: function(value) {
		this._filterSet = true;
		if(value != this._filter) {
			this._filter = value;
			this.apply();
		}
		return this._filter;
	}
	,get_alpha: function() {
		if(this.hasDynamicValue("alpha")) return this.getDynamicValue("alpha");
		return this._alpha;
	}
	,set_alpha: function(value) {
		if(value != this._alpha) {
			this._alpha = value;
			this.apply();
		}
		return value;
	}
	,get_fontName: function() {
		if(this.hasDynamicValue("fontName")) return this.getDynamicValue("fontName");
		return this._fontName;
	}
	,set_fontName: function(value) {
		if(value != this._fontName) {
			this._fontName = value;
			this.apply();
		}
		return value;
	}
	,get_fontSize: function() {
		if(this.hasDynamicValue("fontSize")) return this.getDynamicValue("fontSize");
		var size = this._fontSize;
		if(this._fontScale > 0) size = this._fontSize * this._fontScale;
		return size;
	}
	,set_fontSize: function(value) {
		if(value != this._fontSize) {
			this._fontSize = value;
			this.apply();
		}
		return value;
	}
	,get_fontScale: function() {
		if(this.hasDynamicValue("fontScale")) return this.getDynamicValue("fontScale");
		return this._fontScale;
	}
	,set_fontScale: function(value) {
		if(value != this._fontScale) {
			this._fontScale = value;
			this.apply();
		}
		return value;
	}
	,get_fontEmbedded: function() {
		if(this.hasDynamicValue("fontEmbedded")) return this.getDynamicValue("fontEmbedded");
		if(this._fontEmbedded == -1) return false;
		return this._fontEmbedded == 1;
	}
	,set_fontEmbedded: function(value) {
		if(value) this._fontEmbedded = 1; else this._fontEmbedded = 0;
		this.apply();
		return value;
	}
	,get_iconPosition: function() {
		if(this.hasDynamicValue("iconPosition")) return this.getDynamicValue("iconPosition");
		return this._iconPosition;
	}
	,set_iconPosition: function(value) {
		if(value != this._iconPosition) {
			this._iconPosition = value;
			this.apply();
		}
		return value;
	}
	,get_labelPosition: function() {
		if(this.hasDynamicValue("labelPosition")) return this.getDynamicValue("labelPosition");
		return this._labelPosition;
	}
	,set_labelPosition: function(value) {
		if(value != this._labelPosition) {
			this._labelPosition = value;
			this.apply();
		}
		return value;
	}
	,get_icon: function() {
		if(this.hasDynamicValue("icon")) return this.getDynamicValue("icon");
		return this._icon;
	}
	,set_icon: function(value) {
		if(value != this._icon) {
			this._icon = value;
			this.apply();
		}
		return value;
	}
	,get_hasButtons: function() {
		if(this.hasDynamicValue("hasButtons")) return this.getDynamicValue("hasButtons");
		if(this._hasButtons == -1) return true;
		return this._hasButtons == 1;
	}
	,set_hasButtons: function(value) {
		if(value) this._hasButtons = 1; else this._hasButtons = 0;
		this.apply();
		return value;
	}
	,get_gradientType: function() {
		if(this.hasDynamicValue("gradientType")) return this.getDynamicValue("gradientType");
		return this._gradientType;
	}
	,set_gradientType: function(value) {
		if(value != this._gradientType) {
			this._gradientType = value;
			this.apply();
		}
		return value;
	}
	,get_selectionMethod: function() {
		if(this.hasDynamicValue("selectionMethod")) return this.getDynamicValue("selectionMethod");
		return this._selectionMethod;
	}
	,set_selectionMethod: function(value) {
		if(value != this._selectionMethod) {
			this._selectionMethod = value;
			this.apply();
		}
		return value;
	}
	,get_autoHideScrolls: function() {
		if(this.hasDynamicValue("autoHideScrolls")) return this.getDynamicValue("autoHideScrolls");
		if(this._autoHideScrolls == -1) return false;
		return this._autoHideScrolls == 1;
	}
	,set_autoHideScrolls: function(value) {
		if(value) this._autoHideScrolls = 1; else this._autoHideScrolls = 0;
		this.apply();
		return value;
	}
	,get_inlineScrolls: function() {
		if(this.hasDynamicValue("inlineScrolls")) return this.getDynamicValue("inlineScrolls");
		if(this._inlineScrolls == -1) return false;
		return this._inlineScrolls == 1;
	}
	,set_inlineScrolls: function(value) {
		if(value) this._inlineScrolls = 1; else this._inlineScrolls = 0;
		this.apply();
		return value;
	}
	,apply: function() {
		if(this._target != null && this._autoApply == true) {
			if(js.Boot.__instanceof(this._target,haxe.ui.toolkit.core.StyleableDisplayObject)) (js.Boot.__cast(this._target , haxe.ui.toolkit.core.StyleableDisplayObject)).applyStyle();
		}
	}
	,addDynamicValue: function(property,script) {
		if(this._dynamicValues == null) this._dynamicValues = new haxe.ds.StringMap();
		this._dynamicValues.set(property,script);
	}
	,hasDynamicValue: function(property) {
		if(this._dynamicValues == null) return false;
		return this._dynamicValues.get(property) != null;
	}
	,getDynamicValue: function(property) {
		var script = this._dynamicValues.get(property);
		var retVal = haxe.ui.toolkit.hscript.ScriptManager.get_instance().executeScript(script);
		return retVal;
	}
	,merge: function($with) {
		if($with == null) return;
		if($with._width != -1) this._width = $with._width;
		if($with._height != -1) this._height = $with._height;
		if($with._percentWidth != -1) this._percentWidth = $with._percentWidth;
		if($with._percentHeight != -1) this._percentHeight = $with._percentHeight;
		if($with._autoSize != -1) this._autoSize = $with._autoSize;
		if($with._backgroundImage != null) {
			this._backgroundImage = $with._backgroundImage;
			this._backgroundImageScale9 = null;
			this._backgroundImageRect = null;
		}
		if($with._backgroundImageScale9 != null) this._backgroundImageScale9 = $with._backgroundImageScale9;
		if($with._backgroundImageRect != null) this._backgroundImageRect = $with._backgroundImageRect;
		if($with._backgroundColor == -2) {
			this._backgroundColor = -1;
			this._backgroundColorGradientEnd = -1;
		} else if($with._backgroundColor != -1) {
			this._backgroundColor = $with._backgroundColor;
			this._backgroundColorGradientEnd = -1;
		}
		if($with._backgroundColorGradientEnd != -1) this._backgroundColorGradientEnd = $with._backgroundColorGradientEnd;
		if($with._borderColor != -1) this._borderColor = $with._borderColor;
		if($with._borderSize != -1) this._borderSize = $with._borderSize;
		if($with._color != -1) this._color = $with._color;
		if($with._paddingLeft != -1) this._paddingLeft = $with._paddingLeft;
		if($with._paddingRight != -1) this._paddingRight = $with._paddingRight;
		if($with._paddingTop != -1) this._paddingTop = $with._paddingTop;
		if($with._paddingBottom != -1) this._paddingBottom = $with._paddingBottom;
		if($with._spacingX != -1) this._spacingX = $with._spacingX;
		if($with._spacingY != -1) this._spacingY = $with._spacingY;
		if($with._cornerRadiusTopLeft != -1) this._cornerRadiusTopLeft = $with._cornerRadiusTopLeft;
		if($with._cornerRadiusTopRight != -1) this._cornerRadiusTopRight = $with._cornerRadiusTopRight;
		if($with._cornerRadiusBottomLeft != -1) this._cornerRadiusBottomLeft = $with._cornerRadiusBottomLeft;
		if($with._cornerRadiusBottomRight != -1) this._cornerRadiusBottomRight = $with._cornerRadiusBottomRight;
		if($with._filterSet == true) this._filter = $with._filter;
		if($with._alpha != -1) this._alpha = $with._alpha;
		if($with._fontName != null) this._fontName = $with._fontName;
		if($with._fontSize != -1) this._fontSize = $with._fontSize;
		if($with._fontScale != -1) this._fontScale = $with._fontScale;
		if($with._fontEmbedded != -1) this._fontEmbedded = $with._fontEmbedded;
		if($with._iconPosition != null) this._iconPosition = $with._iconPosition;
		if($with._labelPosition != null) this._labelPosition = $with._labelPosition;
		if($with._icon != null) this._icon = $with._icon;
		if($with._hasButtons != -1) this._hasButtons = $with._hasButtons;
		if($with._gradientType != null) this._gradientType = $with._gradientType;
		if($with._selectionMethod != null) this._selectionMethod = $with._selectionMethod;
		if($with._autoHideScrolls != -1) this._autoHideScrolls = $with._autoHideScrolls;
		if($with._inlineScrolls != -1) this._inlineScrolls = $with._inlineScrolls;
		if($with._dynamicValues != null) {
			if(this._dynamicValues == null) this._dynamicValues = new haxe.ds.StringMap();
			var $it0 = $with._dynamicValues.keys();
			while( $it0.hasNext() ) {
				var property = $it0.next();
				var script = $with._dynamicValues.get(property);
				this._dynamicValues.set(property,script);
			}
		}
	}
	,toString: function() {
		var s = "";
		if(this._width != -1 || this.hasDynamicValue("width")) s += "width: " + (this._width != -1?Std.string(this._width):this._dynamicValues.get("width")) + ";\n";
		if(this._height != -1 || this.hasDynamicValue("height")) s += "height: " + (this._height != -1?Std.string(this._height):this._dynamicValues.get("height")) + ";\n";
		if(this._percentWidth != -1 || this.hasDynamicValue("percentWidth")) s += "width: " + (this._percentWidth != -1?Std.string(this._percentWidth):this._dynamicValues.get("percentWidth")) + "%;\n";
		if(this._percentHeight != -1 || this.hasDynamicValue("percentHeight")) s += "height: " + (this._percentHeight != -1?Std.string(this._percentHeight):this._dynamicValues.get("percentHeight")) + "%;\n";
		if(this._backgroundImage != null || this.hasDynamicValue("backgroundImage")) s += "backgroundImage: \"" + (this._backgroundImage != null?Std.string(this._backgroundImage):this._dynamicValues.get("backgroundImage")) + "\";\n";
		if(this._backgroundColor != -1 || this.hasDynamicValue("backgroundColor")) s += "backgroundColor: #" + (this._backgroundColor != -1?StringTools.hex(this._backgroundColor,6):this._dynamicValues.get("backgroundColor")) + ";\n";
		if(this._backgroundColorGradientEnd != -1 || this.hasDynamicValue("backgroundColorGradientEnd")) s += "backgroundColorGradientEnd: #" + (this._backgroundColorGradientEnd != -1?StringTools.hex(this._backgroundColorGradientEnd,6):this._dynamicValues.get("backgroundColorGradientEnd")) + ";\n";
		return s;
	}
	,self: function() {
		return new haxe.ui.toolkit.style.Style();
	}
	,clone: function() {
		var c = this.self();
		c.merge(this);
		return c;
	}
	,__class__: haxe.ui.toolkit.style.Style
	,__properties__: {set_autoApply:"set_autoApply",get_autoApply:"get_autoApply",set_target:"set_target",get_target:"get_target",set_inlineScrolls:"set_inlineScrolls",get_inlineScrolls:"get_inlineScrolls",set_autoHideScrolls:"set_autoHideScrolls",get_autoHideScrolls:"get_autoHideScrolls",set_selectionMethod:"set_selectionMethod",get_selectionMethod:"get_selectionMethod",set_gradientType:"set_gradientType",get_gradientType:"get_gradientType",set_hasButtons:"set_hasButtons",get_hasButtons:"get_hasButtons",set_icon:"set_icon",get_icon:"get_icon",set_labelPosition:"set_labelPosition",get_labelPosition:"get_labelPosition",set_iconPosition:"set_iconPosition",get_iconPosition:"get_iconPosition",set_fontEmbedded:"set_fontEmbedded",get_fontEmbedded:"get_fontEmbedded",set_fontScale:"set_fontScale",get_fontScale:"get_fontScale",set_fontSize:"set_fontSize",get_fontSize:"get_fontSize",set_fontName:"set_fontName",get_fontName:"get_fontName",set_alpha:"set_alpha",get_alpha:"get_alpha",set_filter:"set_filter",get_filter:"get_filter",set_cornerRadius:"set_cornerRadius",get_cornerRadius:"get_cornerRadius",set_cornerRadiusBottomRight:"set_cornerRadiusBottomRight",get_cornerRadiusBottomRight:"get_cornerRadiusBottomRight",set_cornerRadiusBottomLeft:"set_cornerRadiusBottomLeft",get_cornerRadiusBottomLeft:"get_cornerRadiusBottomLeft",set_cornerRadiusTopRight:"set_cornerRadiusTopRight",get_cornerRadiusTopRight:"get_cornerRadiusTopRight",set_cornerRadiusTopLeft:"set_cornerRadiusTopLeft",get_cornerRadiusTopLeft:"get_cornerRadiusTopLeft",set_spacing:"set_spacing",get_spacing:"get_spacing",set_spacingY:"set_spacingY",get_spacingY:"get_spacingY",set_spacingX:"set_spacingX",get_spacingX:"get_spacingX",set_padding:"set_padding",get_padding:"get_padding",set_paddingBottom:"set_paddingBottom",get_paddingBottom:"get_paddingBottom",set_paddingTop:"set_paddingTop",get_paddingTop:"get_paddingTop",set_paddingRight:"set_paddingRight",get_paddingRight:"get_paddingRight",set_paddingLeft:"set_paddingLeft",get_paddingLeft:"get_paddingLeft",set_color:"set_color",get_color:"get_color",set_borderSize:"set_borderSize",get_borderSize:"get_borderSize",set_borderColor:"set_borderColor",get_borderColor:"get_borderColor",set_backgroundColorGradientEnd:"set_backgroundColorGradientEnd",get_backgroundColorGradientEnd:"get_backgroundColorGradientEnd",set_backgroundColor:"set_backgroundColor",get_backgroundColor:"get_backgroundColor",set_backgroundImageRect:"set_backgroundImageRect",get_backgroundImageRect:"get_backgroundImageRect",set_backgroundImageScale9:"set_backgroundImageScale9",get_backgroundImageScale9:"get_backgroundImageScale9",set_backgroundImage:"set_backgroundImage",get_backgroundImage:"get_backgroundImage",get_autoSizeSet:"get_autoSizeSet",set_autoSize:"set_autoSize",get_autoSize:"get_autoSize",set_percentHeight:"set_percentHeight",get_percentHeight:"get_percentHeight",set_percentWidth:"set_percentWidth",get_percentWidth:"get_percentWidth",set_height:"set_height",get_height:"get_height",set_width:"set_width",get_width:"get_width"}
};
haxe.ui.toolkit.style.StyleHelper = function() { };
$hxClasses["haxe.ui.toolkit.style.StyleHelper"] = haxe.ui.toolkit.style.StyleHelper;
haxe.ui.toolkit.style.StyleHelper.__name__ = ["haxe","ui","toolkit","style","StyleHelper"];
haxe.ui.toolkit.style.StyleHelper.sectionCache = null;
haxe.ui.toolkit.style.StyleHelper.clearCache = function() {
	haxe.ui.toolkit.style.StyleHelper.sectionCache = new haxe.ds.StringMap();
};
haxe.ui.toolkit.style.StyleHelper.paintStyle = function(g,style,rc) {
	g.clear();
	if(style == null || rc.width == 0 || rc.height == 0) return;
	if(style.get_backgroundColor() != -1 || style.get_borderColor() != -1) {
		if(style.get_borderColor() != -1) {
			var borderSize = 1;
			if(style.get_borderSize() != -1) borderSize = style.get_borderSize();
			if(borderSize > 0) {
				g.lineStyle(borderSize,style.get_borderColor());
				rc.inflate(-(borderSize / 2),-(borderSize / 2));
				rc.x = rc.x | 0;
				rc.y = rc.y | 0;
			}
		}
		if(style.get_backgroundColor() != -1) {
			if(style.get_backgroundColorGradientEnd() != -1) {
				var w = rc.width | 0;
				var h = rc.height | 0;
				var colors = [style.get_backgroundColor(),style.get_backgroundColorGradientEnd()];
				var alphas = [1,1];
				var ratios = [0,255];
				var matrix = new flash.geom.Matrix();
				var gradientType = "vertical";
				if(style.get_gradientType() != null) gradientType = style.get_gradientType();
				if(gradientType == "vertical") matrix.createGradientBox(w - 2,h - 2,Math.PI / 2,0,0); else if(gradientType == "horizontal") matrix.createGradientBox(w - 2,h - 2,0,0,0);
				g.beginGradientFill(flash.display.GradientType.LINEAR,colors,alphas,ratios,matrix,flash.display.SpreadMethod.PAD,flash.display.InterpolationMethod.LINEAR_RGB,0);
			} else g.beginFill(style.get_backgroundColor());
		}
		if(style.get_cornerRadiusTopLeft() != -1 || style.get_cornerRadiusTopRight() != -1 || style.get_cornerRadiusBottomLeft() != -1 || style.get_cornerRadiusBottomRight() != -1) {
			var radiusTopLeft = style.get_cornerRadiusTopLeft();
			var radiusTopRight = style.get_cornerRadiusTopRight();
			var radiusBottomLeft = style.get_cornerRadiusBottomLeft();
			var radiusBottomRight = style.get_cornerRadiusBottomRight();
			if(((radiusTopLeft | 0) & (radiusTopRight | 0) & (radiusBottomLeft | 0) & (radiusBottomRight | 0)) == radiusTopLeft) g.drawRoundRect(rc.get_left(),rc.get_top(),rc.width,rc.height,radiusTopLeft + 2,radiusTopLeft + 2); else g.drawRect(rc.get_left(),rc.get_top(),rc.width,rc.height);
		} else g.drawRect(rc.get_left(),rc.get_top(),rc.width,rc.height);
		g.endFill();
	}
	if(style.get_backgroundImage() != null) {
		var backgroundImageRect = null;
		if(style.get_backgroundImageRect() != null) backgroundImageRect = style.get_backgroundImageRect();
		if(style.get_backgroundImageScale9() != null) haxe.ui.toolkit.style.StyleHelper.paintScale9(g,style.get_backgroundImage(),backgroundImageRect,style.get_backgroundImageScale9(),rc); else {
			var rects = new haxe.ds.StringMap();
			var bitmapData = haxe.ui.toolkit.style.StyleHelper.getBitmapSection(style.get_backgroundImage(),backgroundImageRect);
			if(bitmapData != null) {
				rects.set("middle",new flash.geom.Rectangle(0,0,bitmapData.width,bitmapData.height));
				haxe.ui.toolkit.style.StyleHelper.paintCompoundBitmap(g,style.get_backgroundImage(),backgroundImageRect,rects,rc);
			}
		}
	}
};
haxe.ui.toolkit.style.StyleHelper.paintScale9 = function(g,resourceId,resourceRect,scale9,rc) {
	if(scale9 != null) {
		var resource = haxe.ui.toolkit.style.StyleHelper.getBitmapSection(resourceId,resourceRect);
		if(resource == null) return;
		var w = resource.width;
		var h = resource.height;
		var x1 = Std["int"](scale9.get_left());
		var y1 = Std["int"](scale9.get_top());
		var x2 = Std["int"](scale9.get_right());
		var y2 = Std["int"](scale9.get_bottom());
		var rects = new haxe.ds.StringMap();
		rects.set("top.left",new flash.geom.Rectangle(0,0,x1,y1));
		rects.set("top",new flash.geom.Rectangle(x1,0,x2 - x1,y1));
		rects.set("top.right",new flash.geom.Rectangle(x2,0,w - x2,y1));
		rects.set("left",new flash.geom.Rectangle(0,y1,x1,y2 - y1));
		rects.set("middle",new flash.geom.Rectangle(x1,y1,x2 - x1,y2 - y1));
		rects.set("right",new flash.geom.Rectangle(x2,y1,w - x2,y2 - y1));
		rects.set("bottom.left",new flash.geom.Rectangle(0,y2,x1,h - y2));
		rects.set("bottom",new flash.geom.Rectangle(x1,y2,x2 - x1,h - y2));
		rects.set("bottom.right",new flash.geom.Rectangle(x2,y2,w - x2,h - y2));
		haxe.ui.toolkit.style.StyleHelper.paintCompoundBitmap(g,resourceId,resourceRect,rects,rc);
	}
};
haxe.ui.toolkit.style.StyleHelper.paintCompoundBitmap = function(g,resourceId,resourceRect,sourceRects,targetRect) {
	targetRect.set_left(Std["int"](targetRect.get_left()));
	targetRect.set_top(Std["int"](targetRect.get_top()));
	targetRect.set_right(Std["int"](targetRect.get_right()));
	targetRect.set_bottom(Std["int"](targetRect.get_bottom()));
	var tl = sourceRects.get("top.left");
	if(tl != null) haxe.ui.toolkit.style.StyleHelper.paintBitmapSection(g,resourceId,resourceRect,tl,new flash.geom.Rectangle(0,0,tl.width,tl.height)); else tl = new flash.geom.Rectangle();
	var tr = sourceRects.get("top.right");
	if(tr != null) haxe.ui.toolkit.style.StyleHelper.paintBitmapSection(g,resourceId,resourceRect,tr,new flash.geom.Rectangle(targetRect.width - tr.width,0,tr.width,tr.height)); else tr = new flash.geom.Rectangle();
	var t = sourceRects.get("top");
	if(t != null) haxe.ui.toolkit.style.StyleHelper.paintBitmapSection(g,resourceId,resourceRect,t,new flash.geom.Rectangle(tl.width,0,targetRect.width - tl.width - tr.width,t.height)); else t = new flash.geom.Rectangle();
	var bl = sourceRects.get("bottom.left");
	if(bl != null) haxe.ui.toolkit.style.StyleHelper.paintBitmapSection(g,resourceId,resourceRect,bl,new flash.geom.Rectangle(0,targetRect.height - bl.height,bl.width,bl.height)); else bl = new flash.geom.Rectangle();
	var br = sourceRects.get("bottom.right");
	if(br != null) haxe.ui.toolkit.style.StyleHelper.paintBitmapSection(g,resourceId,resourceRect,br,new flash.geom.Rectangle(targetRect.width - br.width,targetRect.height - br.height,br.width,br.height)); else br = new flash.geom.Rectangle();
	var b = sourceRects.get("bottom");
	if(b != null) haxe.ui.toolkit.style.StyleHelper.paintBitmapSection(g,resourceId,resourceRect,b,new flash.geom.Rectangle(bl.width,targetRect.height - b.height,targetRect.width - bl.width - br.width,b.height)); else b = new flash.geom.Rectangle();
	var l = sourceRects.get("left");
	if(l != null) haxe.ui.toolkit.style.StyleHelper.paintBitmapSection(g,resourceId,resourceRect,l,new flash.geom.Rectangle(0,tl.height,l.width,targetRect.height - tl.height - bl.height)); else l = new flash.geom.Rectangle();
	var r = sourceRects.get("right");
	if(r != null) haxe.ui.toolkit.style.StyleHelper.paintBitmapSection(g,resourceId,resourceRect,r,new flash.geom.Rectangle(targetRect.width - r.width,tr.height,r.width,targetRect.height - tl.height - bl.height)); else r = new flash.geom.Rectangle();
	var m = sourceRects.get("middle");
	if(m != null) haxe.ui.toolkit.style.StyleHelper.paintBitmapSection(g,resourceId,resourceRect,m,new flash.geom.Rectangle(l.width,t.height,targetRect.width - l.width - r.width,targetRect.height - t.height - b.height)); else m = new flash.geom.Rectangle();
};
haxe.ui.toolkit.style.StyleHelper.paintBitmapSection = function(g,resourceId,resourceRect,src,dst) {
	var srcData = haxe.ui.toolkit.style.StyleHelper.getBitmapSection(resourceId,resourceRect);
	if(srcData == null) return;
	if(src.width <= 0 || src.height <= 0 || dst.width <= 0 || dst.height <= 0) return;
	if(resourceRect == null) resourceRect = new flash.geom.Rectangle(0,0,srcData.width,srcData.height);
	var cacheId = resourceId + "_" + resourceRect.get_left() + "_" + resourceRect.get_top() + "_" + resourceRect.width + "_" + resourceRect.height + "___" + src.get_left() + "_" + src.get_top() + "_" + src.width + "_" + src.height;
	var section = haxe.ui.toolkit.style.StyleHelper.sectionCache.get(cacheId);
	if(section == null) {
		var fillcolor = 16777215;
		section = new flash.display.BitmapData(src.width | 0,src.height | 0,true,fillcolor);
		section.copyPixels(srcData,src,new flash.geom.Point(0,0));
		haxe.ui.toolkit.style.StyleHelper.sectionCache.set(cacheId,section);
	}
	src.set_left(Std["int"](src.get_left()));
	src.set_top(Std["int"](src.get_top()));
	src.set_bottom(Std["int"](src.get_bottom()));
	src.set_right(Std["int"](src.get_right()));
	dst.set_left(Std["int"](dst.get_left()));
	dst.set_top(Std["int"](dst.get_top()));
	dst.set_bottom(Std["int"](dst.get_bottom()));
	dst.set_right(Std["int"](dst.get_right()));
	var mat = new flash.geom.Matrix();
	mat.scale(dst.width / section.width,dst.height / section.height);
	mat.translate(dst.get_left(),dst.get_top());
	g.lineStyle(0,0,0);
	g.beginBitmapFill(section,mat,false,false);
	g.drawRect(dst.x,dst.y,dst.width,dst.height);
	g.endFill();
};
haxe.ui.toolkit.style.StyleHelper.getBitmapSection = function(resourceId,rc) {
	if(resourceId == null || resourceId.length == 0) return null;
	if(haxe.ui.toolkit.style.StyleHelper.sectionCache == null) haxe.ui.toolkit.style.StyleHelper.sectionCache = new haxe.ds.StringMap();
	if(rc == null) {
		var resource = haxe.ui.toolkit.resources.ResourceManager.get_instance().getBitmapData(resourceId);
		if(resource != null) rc = new flash.geom.Rectangle(0,0,resource.width,resource.height);
	}
	var cacheId = resourceId + "_" + rc.get_left() + "_" + rc.get_top() + "_" + rc.width + "_" + rc.height;
	var section = haxe.ui.toolkit.style.StyleHelper.sectionCache.get(cacheId);
	if(section == null) {
		var resource1 = haxe.ui.toolkit.resources.ResourceManager.get_instance().getBitmapData(resourceId);
		if(resource1 != null) {
			var fillcolor = 16777215;
			section = new flash.display.BitmapData(rc.width | 0,rc.height | 0,true,fillcolor);
			section.copyPixels(resource1,rc,new flash.geom.Point(0,0));
			haxe.ui.toolkit.style.StyleHelper.sectionCache.set(cacheId,section);
		}
	}
	return section;
};
haxe.ui.toolkit.style.StyleManager = function() {
	this._cacheStyles = true;
	this.stylesBuilt = 0;
	this._styles = new haxe.ds.StringMap();
	this._rules = new Array();
	this.stylesBuiltFor = new haxe.ds.StringMap();
};
$hxClasses["haxe.ui.toolkit.style.StyleManager"] = haxe.ui.toolkit.style.StyleManager;
haxe.ui.toolkit.style.StyleManager.__name__ = ["haxe","ui","toolkit","style","StyleManager"];
haxe.ui.toolkit.style.StyleManager.__properties__ = {get_instance:"get_instance"}
haxe.ui.toolkit.style.StyleManager._instance = null;
haxe.ui.toolkit.style.StyleManager.instance = null;
haxe.ui.toolkit.style.StyleManager.get_instance = function() {
	if(haxe.ui.toolkit.style.StyleManager._instance == null) haxe.ui.toolkit.style.StyleManager._instance = new haxe.ui.toolkit.style.StyleManager();
	return haxe.ui.toolkit.style.StyleManager._instance;
};
haxe.ui.toolkit.style.StyleManager.prototype = {
	addStyle: function(rule,style) {
		this._cachedStyles = null;
		var arr = rule.split(",");
		var _g = 0;
		while(_g < arr.length) {
			var a = arr[_g];
			++_g;
			a = StringTools.trim(a);
			var existingStyleRule = this._styles.get(a);
			var existingStyle = null;
			if(existingStyleRule != null) {
				var existingStyle1 = existingStyleRule.style;
				existingStyle1.merge(style);
				var styleRule = new haxe.ui.toolkit.style._StyleManager.StyleRule(a,existingStyle1);
				this._styles.set(a,styleRule);
			} else {
				var styleRule1 = new haxe.ui.toolkit.style._StyleManager.StyleRule(a,style);
				this._styles.set(a,styleRule1);
				this._rules.push(a);
			}
		}
	}
	,addStyles: function(styles) {
		var $it0 = styles.get_rules();
		while( $it0.hasNext() ) {
			var rule = $it0.next();
			this.addStyle(rule,styles.getStyle(rule));
		}
	}
	,findStyle: function(rule) {
		var existingStyleRule = this._styles.get(rule);
		if(existingStyleRule != null) return existingStyleRule.style;
		return null;
	}
	,clear: function() {
		this._styles = new haxe.ds.StringMap();
		this._rules = new Array();
		haxe.ui.toolkit.style.StyleHelper.clearCache();
	}
	,findAncestor: function(c,rulePart) {
		var a = null;
		var t = c;
		while(a == null) if(this.rulePartMatch(t,rulePart,null) == true) a = t; else {
			t = t.get_parent();
			if(t == null) break;
		}
		return a;
	}
	,rulePartMatch: function(c,rulePart,state,overriddenClassName) {
		var match = false;
		if(state == "normal") state = null;
		var className = Type.getClassName(Type.getClass(c));
		var n = className.lastIndexOf(".");
		className = HxOverrides.substr(className,n + 1,className.length);
		if(overriddenClassName != null) className = overriddenClassName;
		var id = c.get_id();
		var styleName = null;
		if(js.Boot.__instanceof(c,haxe.ui.toolkit.core.interfaces.IStyleableDisplayObject)) styleName = (js.Boot.__cast(c , haxe.ui.toolkit.core.interfaces.IStyleableDisplayObject)).get_styleName();
		var rulePartId = rulePart.id;
		var rulePartClassName = rulePart.className;
		var rulePartState = rulePart.state;
		var rulePartStyleName = rulePart.styleName;
		if(rulePartStyleName != null && rulePartStyleName.length == 0) rulePartStyleName = null;
		var s = new haxe.ui.toolkit.style.Style();
		if(rulePartId != null) {
			match = rulePartId == id;
			if(rulePartStyleName != null && match == true) match = rulePartStyleName == styleName;
		} else if(rulePartClassName != null) {
			match = rulePartClassName == className;
			if(rulePartStyleName != null && match == true) match = rulePartStyleName == styleName;
		} else if(rulePartStyleName != null) match = rulePartStyleName == styleName;
		if(rulePartState != null && match == true) match = rulePartState == state;
		return match;
	}
	,ruleMatch: function(c,rule,state,overriddenClassName) {
		var match = true;
		if(state == "normal") state = null;
		var className = Type.getClassName(Type.getClass(c));
		var n = className.lastIndexOf(".");
		className = HxOverrides.substr(className,n + 1,className.length);
		if(overriddenClassName != null) className = overriddenClassName;
		var id = c.get_id();
		var styleName = null;
		if(js.Boot.__instanceof(c,haxe.ui.toolkit.core.interfaces.IStyleableDisplayObject)) styleName = (js.Boot.__cast(c , haxe.ui.toolkit.core.interfaces.IStyleableDisplayObject)).get_styleName();
		var styleRule = this._styles.get(rule);
		var skipRule = true;
		if(styleRule.isRelevant(id,className,state,styleName) == true) skipRule = false;
		if(styleName != null && rule.indexOf("." + styleName) != -1) skipRule = false;
		if(skipRule == true) return false;
		var t = c;
		var _g = 0;
		var _g1 = styleRule.ruleParts;
		while(_g < _g1.length) {
			var rulePart = _g1[_g];
			++_g;
			var partMatch = this.rulePartMatch(t,rulePart,state,overriddenClassName);
			if(partMatch == false) {
				t = this.findAncestor(t,rulePart);
				if(t == null) {
					match = false;
					break;
				} else state = null;
			}
		}
		return match;
	}
	,buildStyleFor: function(c,state) {
		if(state == "normal") state = null;
		var cacheKey = null;
		if(this._cacheStyles == true) {
			cacheKey = this.buildFullCacheKey(c,state);
			if(this._cachedStyles == null) this._cachedStyles = new haxe.ds.StringMap();
			if(this._cachedStyles.get(cacheKey) != null) return this._cachedStyles.get(cacheKey);
		}
		var style = new haxe.ui.toolkit.style.Style();
		style.set_autoApply(false);
		var superClass = Type.getSuperClass(Type.getClass(c));
		while(superClass != haxe.ui.toolkit.core.Component && superClass != haxe.ui.toolkit.core.StateComponent && superClass != haxe.ui.toolkit.core.StyleableDisplayObject && superClass != haxe.ui.toolkit.core.DisplayObjectContainer && superClass != haxe.ui.toolkit.core.DisplayObject && superClass != null) {
			var superClassName = Type.getClassName(superClass);
			var n = superClassName.lastIndexOf(".");
			superClassName = HxOverrides.substr(superClassName,n + 1,superClassName.length);
			var _g = 0;
			var _g1 = this._rules;
			while(_g < _g1.length) {
				var rule = _g1[_g];
				++_g;
				if(this.ruleMatch(c,rule,state,superClassName) == true) {
					var matchedStyle = this._styles.get(rule).style;
					style.merge(matchedStyle);
				}
			}
			superClass = Type.getSuperClass(superClass);
		}
		var _g2 = 0;
		var _g11 = this._rules;
		while(_g2 < _g11.length) {
			var rule1 = _g11[_g2];
			++_g2;
			if(this.ruleMatch(c,rule1,state) == true) {
				var matchedStyle1 = this._styles.get(rule1).style;
				style.merge(matchedStyle1);
			}
		}
		this.stylesBuilt++;
		var className = Type.getClassName(Type.getClass(c));
		if(this.stylesBuiltFor.get(className) == null) this.stylesBuiltFor.set(className,0);
		var n1 = this.stylesBuiltFor.get(className);
		n1++;
		this.stylesBuiltFor.set(className,n1);
		if(this._cacheStyles == true && cacheKey != null) this._cachedStyles.set(cacheKey,style);
		style.set_target(c);
		style.set_autoApply(true);
		return style;
	}
	,buildCacheKey: function(c,state) {
		if(state == "normal") state = null;
		var className = Type.getClassName(Type.getClass(c));
		var n = className.lastIndexOf(".");
		className = HxOverrides.substr(className,n + 1,className.length);
		var id = c.get_id();
		var styleName = null;
		if(js.Boot.__instanceof(c,haxe.ui.toolkit.core.interfaces.IStyleableDisplayObject)) styleName = (js.Boot.__cast(c , haxe.ui.toolkit.core.interfaces.IStyleableDisplayObject)).get_styleName();
		var s = className;
		if(id != null) s += "#" + id;
		if(styleName != null) s += "." + styleName;
		if(state != null) s += ":" + state;
		return s;
	}
	,buildFullCacheKey: function(c,state) {
		if(state == "normal") state = null;
		var key = this.buildCacheKey(c,state);
		var p = c.get_parent();
		while(p != null) {
			key += ">" + this.buildCacheKey(p,null);
			p = p.get_parent();
		}
		return key;
	}
	,dump: function() {
		var $it0 = this.stylesBuiltFor.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			haxe.Log.trace("> " + key + " = " + this.stylesBuiltFor.get(key),{ fileName : "StyleManager.hx", lineNumber : 315, className : "haxe.ui.toolkit.style.StyleManager", methodName : "dump"});
		}
		haxe.Log.trace(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",{ fileName : "StyleManager.hx", lineNumber : 317, className : "haxe.ui.toolkit.style.StyleManager", methodName : "dump"});
	}
	,get_hasStyles: function() {
		if(this._styles == null) return false;
		return this._styles.keys().hasNext();
	}
	,__class__: haxe.ui.toolkit.style.StyleManager
	,__properties__: {get_hasStyles:"get_hasStyles"}
};
haxe.ui.toolkit.style._StyleManager = {};
haxe.ui.toolkit.style._StyleManager.StyleRule = function(rule,style) {
	this.style = style;
	this.ruleParts = new Array();
	var ruleArr = rule.split(" ");
	ruleArr.reverse();
	var _g = 0;
	while(_g < ruleArr.length) {
		var rulePart = ruleArr[_g];
		++_g;
		this.ruleParts.push(new haxe.ui.toolkit.style._StyleManager.StyleRulePart(rulePart));
	}
};
$hxClasses["haxe.ui.toolkit.style._StyleManager.StyleRule"] = haxe.ui.toolkit.style._StyleManager.StyleRule;
haxe.ui.toolkit.style._StyleManager.StyleRule.__name__ = ["haxe","ui","toolkit","style","_StyleManager","StyleRule"];
haxe.ui.toolkit.style._StyleManager.StyleRule.prototype = {
	containsClassName: function(className) {
		var found = false;
		var _g = 0;
		var _g1 = this.ruleParts;
		while(_g < _g1.length) {
			var rulePart = _g1[_g];
			++_g;
			if(rulePart.className != null && rulePart.className == className) {
				found = true;
				break;
			}
		}
		return found;
	}
	,isRelevant: function(id,className,state,styleName) {
		var relevant = false;
		var _g = 0;
		var _g1 = this.ruleParts;
		while(_g < _g1.length) {
			var rulePart = _g1[_g];
			++_g;
			if(rulePart.id != null && rulePart.id == id) {
				relevant = true;
				break;
			}
			if(rulePart.className != null && rulePart.className == className) {
				relevant = true;
				break;
			}
			if(rulePart.state != null && rulePart.state == state) {
				relevant = true;
				break;
			}
			if(rulePart.styleName != null && rulePart.styleName == styleName) {
				relevant = true;
				break;
			}
		}
		return relevant;
	}
	,__class__: haxe.ui.toolkit.style._StyleManager.StyleRule
};
haxe.ui.toolkit.style._StyleManager.StyleRulePart = function(rulePart) {
	var n = rulePart.indexOf(":");
	if(n != -1) {
		this.state = HxOverrides.substr(rulePart,n + 1,rulePart.length);
		rulePart = HxOverrides.substr(rulePart,0,n);
	}
	if(StringTools.startsWith(rulePart,"#")) {
		this.id = HxOverrides.substr(rulePart,1,rulePart.length);
		n = this.id.indexOf(".");
		if(n != -1) {
			this.styleName = HxOverrides.substr(this.id,n + 1,this.id.length);
			this.id = HxOverrides.substr(this.id,0,n);
		}
	} else {
		this.className = rulePart;
		n = this.className.indexOf(".");
		if(n != -1) {
			this.styleName = HxOverrides.substr(this.className,n + 1,this.className.length);
			this.className = HxOverrides.substr(this.className,0,n);
			if(this.className.length == 0) this.className = null;
		}
	}
	if(this.styleName != null && this.styleName.length == 0) this.styleName = null;
};
$hxClasses["haxe.ui.toolkit.style._StyleManager.StyleRulePart"] = haxe.ui.toolkit.style._StyleManager.StyleRulePart;
haxe.ui.toolkit.style._StyleManager.StyleRulePart.__name__ = ["haxe","ui","toolkit","style","_StyleManager","StyleRulePart"];
haxe.ui.toolkit.style._StyleManager.StyleRulePart.prototype = {
	__class__: haxe.ui.toolkit.style._StyleManager.StyleRulePart
};
haxe.ui.toolkit.style.StyleParser = function() { };
$hxClasses["haxe.ui.toolkit.style.StyleParser"] = haxe.ui.toolkit.style.StyleParser;
haxe.ui.toolkit.style.StyleParser.__name__ = ["haxe","ui","toolkit","style","StyleParser"];
haxe.ui.toolkit.style.StyleParser.fromString = function(styleString) {
	if(styleString == null || styleString.length == 0) return new haxe.ui.toolkit.style.Styles();
	var styles = new haxe.ui.toolkit.style.Styles();
	var n1 = -1;
	var n2 = styleString.indexOf("{",0);
	while(n2 > -1) {
		var n3 = styleString.indexOf("}",n2);
		var styleName = StringTools.trim(HxOverrides.substr(styleString,n1 + 1,n2 - n1 - 1));
		var styleData = HxOverrides.substr(styleString,n2 + 1,n3 - n2 - 1);
		var style = new haxe.ui.toolkit.style.Style();
		var props = styleData.split(";");
		var _g = 0;
		while(_g < props.length) {
			var prop = props[_g];
			++_g;
			prop = StringTools.trim(prop);
			if(prop != null && prop.length > 0) {
				var temp = prop.split(":");
				var propName = StringTools.trim(temp[0]);
				if(Reflect.field(style,"set_" + propName) == null) {
					haxe.Log.trace("Warning: " + propName + " no found",{ fileName : "StyleParser.hx", lineNumber : 31, className : "haxe.ui.toolkit.style.StyleParser", methodName : "fromString"});
					continue;
				}
				var propValue = StringTools.trim(temp[1]);
				if(temp.length == 3) propValue += ":" + StringTools.trim(temp[2]);
				propValue = StringTools.replace(propValue,"\"","");
				propValue = StringTools.replace(propValue,"'","");
				if(haxe.ui.toolkit.hscript.ScriptUtils.isScript(propValue) && !haxe.ui.toolkit.hscript.ScriptUtils.isCssException(propName)) {
					style.addDynamicValue(propName,propValue);
					continue;
				}
				if(propName == "width" && propValue.indexOf("%") != -1) {
					propName = "percentWidth";
					propValue = HxOverrides.substr(propValue,0,propValue.length - 1);
				} else if(propName == "height" && propValue.indexOf("%") != -1) {
					propName = "percentHeight";
					propValue = HxOverrides.substr(propValue,0,propValue.length - 1);
				} else if(propName == "filter") {
					style.set_filter(haxe.ui.toolkit.util.FilterParser.parseFilter(propValue));
					continue;
				} else if(propName == "backgroundImageScale9") {
					var coords = propValue.split(",");
					var x1 = Std.parseInt(coords[0]);
					var y1 = Std.parseInt(coords[1]);
					var x2 = Std.parseInt(coords[2]);
					var y2 = Std.parseInt(coords[3]);
					var scale9 = new flash.geom.Rectangle();
					scale9.set_left(x1);
					scale9.set_top(y1);
					scale9.set_right(x2);
					scale9.set_bottom(y2);
					style.set_backgroundImageScale9(scale9);
					continue;
				} else if(propName == "backgroundImageRect") {
					var arr = propValue.split(",");
					style.set_backgroundImageRect(new flash.geom.Rectangle(Std.parseInt(arr[0]),Std.parseInt(arr[1]),Std.parseInt(arr[2]),Std.parseInt(arr[3])));
					continue;
				}
				if(propValue.indexOf(",") != -1 || !StringTools.startsWith(propValue,"#") && Std.string(Std.parseFloat(propValue)) == Std.string(Math.NaN)) {
					if(propValue == "true" || propValue == "false") Reflect.setProperty(style,propName,propValue == "true"); else Reflect.setProperty(style,propName,propValue);
				} else {
					if(StringTools.startsWith(propValue,"#")) propValue = "0x" + HxOverrides.substr(propValue,1,propValue.length - 1);
					if(StringTools.startsWith(propValue,"0x")) Reflect.setProperty(style,propName,Std.parseInt(propValue)); else Reflect.setProperty(style,propName,Std.parseFloat(propValue));
				}
			}
		}
		if(styleName.indexOf(",") == -1) styles.addStyle(styleName,style); else {
			var arr1 = styleName.split(",");
			var _g1 = 0;
			while(_g1 < arr1.length) {
				var s = arr1[_g1];
				++_g1;
				s = StringTools.trim(s);
				styles.addStyle(s,style);
			}
		}
		n1 = n3;
		n2 = styleString.indexOf("{",n1);
	}
	return styles;
};
haxe.ui.toolkit.text = {};
haxe.ui.toolkit.text.ITextDisplay = function() { };
$hxClasses["haxe.ui.toolkit.text.ITextDisplay"] = haxe.ui.toolkit.text.ITextDisplay;
haxe.ui.toolkit.text.ITextDisplay.__name__ = ["haxe","ui","toolkit","text","ITextDisplay"];
haxe.ui.toolkit.text.ITextDisplay.prototype = {
	__class__: haxe.ui.toolkit.text.ITextDisplay
};
haxe.ui.toolkit.text.TextDisplay = function() {
	this._tf = new flash.text.TextField();
	this._tf.set_type(flash.text.TextFieldType.DYNAMIC);
	this._tf.selectable = false;
	this._tf.multiline = false;
	this._tf.mouseEnabled = false;
	this._tf.set_wordWrap(false);
	this._tf.set_autoSize(flash.text.TextFieldAutoSize.NONE);
	this._tf.set_text("");
};
$hxClasses["haxe.ui.toolkit.text.TextDisplay"] = haxe.ui.toolkit.text.TextDisplay;
haxe.ui.toolkit.text.TextDisplay.__name__ = ["haxe","ui","toolkit","text","TextDisplay"];
haxe.ui.toolkit.text.TextDisplay.__interfaces__ = [haxe.ui.toolkit.text.ITextDisplay];
haxe.ui.toolkit.text.TextDisplay.prototype = {
	get_text: function() {
		return this._tf.get_text();
	}
	,set_text: function(value) {
		if(value != null) {
			if(this._tf.multiline == false) this._tf.set_text(StringTools.replace(value,"\\n","\n")); else this._tf.set_text(StringTools.replace(value,"\\n","\n"));
		}
		this.set_style(this._style);
		if(value != null && value.length > 0) {
			if(this._tf.type == flash.text.TextFieldType.DYNAMIC && this._tf.multiline == false) {
				this._tf.set_width(this._tf.get_textWidth());
				this._tf.set_height(this._tf.get_textHeight() + 2);
			} else if(this._tf.type == flash.text.TextFieldType.DYNAMIC && this._tf.multiline == true) this._tf.set_height(this._tf.get_textHeight() + 2); else if(this._tf.type == flash.text.TextFieldType.INPUT && this._tf.multiline == false) {
			}
		} else if(this._tf.type == flash.text.TextFieldType.DYNAMIC) {
			this._tf.set_width(0);
			this._tf.set_height(0);
		} else if(this._tf.type == flash.text.TextFieldType.INPUT && this._tf.multiline == false) {
		}
		return value;
	}
	,get_style: function() {
		return this._style;
	}
	,set_style: function(value) {
		if(value == null) return value;
		this._style = value;
		var format = this._tf.getTextFormat();
		if(this._style.get_fontName() != null) {
			this._tf.embedFonts = this._style.get_fontEmbedded();
			format.font = this._style.get_fontName();
		}
		if(this._style.get_fontSize() != -1) format.size = this._style.get_fontSize();
		if(this._style.get_color() != -1) format.color = this._style.get_color();
		this._tf.set_defaultTextFormat(format);
		this._tf.setTextFormat(format);
		if(this.get_text().length > 0) {
			if(this._tf.type == flash.text.TextFieldType.DYNAMIC && this._tf.multiline == false) {
				this._tf.set_width(this._tf.get_textWidth());
				this._tf.set_height(this._tf.get_textHeight() + 2);
			} else if(this._tf.type == flash.text.TextFieldType.DYNAMIC && this._tf.multiline == true) this._tf.set_height(this._tf.get_textHeight() + 2); else if(this._tf.type == flash.text.TextFieldType.INPUT && this._tf.multiline == false) {
			}
		}
		return value;
	}
	,get_display: function() {
		return this._tf;
	}
	,get_interactive: function() {
		return this._tf.type == flash.text.TextFieldType.INPUT;
	}
	,set_interactive: function(value) {
		if(value == true) {
			this._tf.set_type(flash.text.TextFieldType.INPUT);
			this._tf.selectable = true;
			this._tf.mouseEnabled = true;
		} else {
			this._tf.set_type(flash.text.TextFieldType.DYNAMIC);
			this._tf.selectable = false;
			this._tf.mouseEnabled = false;
		}
		return value;
	}
	,get_multiline: function() {
		return this._tf.multiline;
	}
	,set_multiline: function(value) {
		this._tf.multiline = value;
		return value;
	}
	,get_wrapLines: function() {
		return this._tf.get_wordWrap();
	}
	,set_wrapLines: function(value) {
		this._tf.set_wordWrap(value);
		return value;
	}
	,get_displayAsPassword: function() {
		return this._tf.displayAsPassword;
	}
	,set_displayAsPassword: function(value) {
		this._tf.displayAsPassword = value;
		return value;
	}
	,get_visible: function() {
		return this._tf.get_visible();
	}
	,set_visible: function(value) {
		this._tf.set_visible(value);
		return value;
	}
	,__class__: haxe.ui.toolkit.text.TextDisplay
	,__properties__: {set_visible:"set_visible",get_visible:"get_visible",set_displayAsPassword:"set_displayAsPassword",get_displayAsPassword:"get_displayAsPassword",set_wrapLines:"set_wrapLines",get_wrapLines:"get_wrapLines",set_multiline:"set_multiline",get_multiline:"get_multiline",set_interactive:"set_interactive",get_interactive:"get_interactive",get_display:"get_display",set_style:"set_style",get_style:"get_style",set_text:"set_text",get_text:"get_text"}
};
haxe.ui.toolkit.util.ByteConverter = function() { };
$hxClasses["haxe.ui.toolkit.util.ByteConverter"] = haxe.ui.toolkit.util.ByteConverter;
haxe.ui.toolkit.util.ByteConverter.__name__ = ["haxe","ui","toolkit","util","ByteConverter"];
haxe.ui.toolkit.util.ByteConverter.fromHaxeBytes = function(bytes) {
	var ba = new flash.utils.ByteArray();
	var _g1 = 0;
	var _g = bytes.length;
	while(_g1 < _g) {
		var a = _g1++;
		ba.writeByte(bytes.b[a]);
	}
	return ba;
};
haxe.ui.toolkit.util.CallStackHelper = function() { };
$hxClasses["haxe.ui.toolkit.util.CallStackHelper"] = haxe.ui.toolkit.util.CallStackHelper;
haxe.ui.toolkit.util.CallStackHelper.__name__ = ["haxe","ui","toolkit","util","CallStackHelper"];
haxe.ui.toolkit.util.CallStackHelper.traceCallStack = function() {
	var arr = haxe.CallStack.callStack();
	if(arr == null) {
		haxe.Log.trace("Callstack is null!",{ fileName : "CallStackHelper.hx", lineNumber : 9, className : "haxe.ui.toolkit.util.CallStackHelper", methodName : "traceCallStack"});
		return;
	}
	haxe.Log.trace(haxe.CallStack.toString(arr),{ fileName : "CallStackHelper.hx", lineNumber : 12, className : "haxe.ui.toolkit.util.CallStackHelper", methodName : "traceCallStack"});
	haxe.Log.trace(">>>>>>>>>>>>>>>>>>>>>>>>>>>> END >>>>>>>>>>>>>>>>>>>>>>>>>>>>",{ fileName : "CallStackHelper.hx", lineNumber : 13, className : "haxe.ui.toolkit.util.CallStackHelper", methodName : "traceCallStack"});
};
haxe.ui.toolkit.util.FilterParser = function() { };
$hxClasses["haxe.ui.toolkit.util.FilterParser"] = haxe.ui.toolkit.util.FilterParser;
haxe.ui.toolkit.util.FilterParser.__name__ = ["haxe","ui","toolkit","util","FilterParser"];
haxe.ui.toolkit.util.FilterParser.parseFilter = function(filterString) {
	return null;
	var filter = null;
	var filterName = null;
	var filterParams = null;
	var n1 = filterString.indexOf("(");
	var n2 = filterString.indexOf(")");
	if(n1 != -1 && n2 != -1) {
		filterName = HxOverrides.substr(filterString,0,n1);
		filterParams = HxOverrides.substr(filterString,n1 + 1,n2 - n1 - 1);
	} else filterName = filterString;
	if(filterName != null) {
		filterName = StringTools.trim(filterName);
		filter = haxe.ui.toolkit.util.FilterParser.createFilter(filterName,filterParams);
	}
	return filter;
};
haxe.ui.toolkit.util.FilterParser.createFilter = function(filterName,filterParams) {
	var filter = null;
	var params = null;
	if(filterParams != null) params = filterParams.split(",");
	params = haxe.ui.toolkit.util.FilterParser.copyFilterDefaults(filterName,params);
	if(filterName == "blur") filter = haxe.ui.toolkit.util.FilterParser.createBlurFilter(params); else if(filterName == "dropShadow") filter = haxe.ui.toolkit.util.FilterParser.createDropShadowFilter(params); else if(filterName == "glow") filter = haxe.ui.toolkit.util.FilterParser.createGlowFilter(params);
	return filter;
};
haxe.ui.toolkit.util.FilterParser.createBlurFilter = function(params) {
	var filter = new flash.filters.BlurFilter(haxe.ui.toolkit.util.TypeParser.parseFloat(params[0]),haxe.ui.toolkit.util.TypeParser.parseFloat(params[1]),haxe.ui.toolkit.util.TypeParser.parseInt(params[2]));
	return filter;
};
haxe.ui.toolkit.util.FilterParser.createDropShadowFilter = function(params) {
	var filter = new flash.filters.DropShadowFilter(haxe.ui.toolkit.util.TypeParser.parseFloat(params[0]),haxe.ui.toolkit.util.TypeParser.parseFloat(params[1]),haxe.ui.toolkit.util.TypeParser.parseInt(params[2]),haxe.ui.toolkit.util.TypeParser.parseFloat(params[3]),haxe.ui.toolkit.util.TypeParser.parseFloat(params[4]),haxe.ui.toolkit.util.TypeParser.parseFloat(params[5]),haxe.ui.toolkit.util.TypeParser.parseFloat(params[6]),haxe.ui.toolkit.util.TypeParser.parseInt(params[7]),haxe.ui.toolkit.util.TypeParser.parseBool(params[8]),haxe.ui.toolkit.util.TypeParser.parseBool(params[9]),haxe.ui.toolkit.util.TypeParser.parseBool(params[10]));
	return filter;
};
haxe.ui.toolkit.util.FilterParser.createGlowFilter = function(params) {
	var filter = new flash.filters.GlowFilter(haxe.ui.toolkit.util.TypeParser.parseInt(params[0]),haxe.ui.toolkit.util.TypeParser.parseFloat(params[1]),haxe.ui.toolkit.util.TypeParser.parseFloat(params[2]),haxe.ui.toolkit.util.TypeParser.parseFloat(params[3]),haxe.ui.toolkit.util.TypeParser.parseFloat(params[4]),haxe.ui.toolkit.util.TypeParser.parseInt(params[5]),haxe.ui.toolkit.util.TypeParser.parseBool(params[6]),haxe.ui.toolkit.util.TypeParser.parseBool(params[7]));
	return filter;
};
haxe.ui.toolkit.util.FilterParser.copyFilterDefaults = function(filterName,params) {
	var copy = new Array();
	var defaultParams = Reflect.field(haxe.ui.toolkit.util.FilterParser.filterParamDefaults,filterName);
	if(defaultParams != null) {
		var _g = 0;
		while(_g < defaultParams.length) {
			var p = defaultParams[_g];
			++_g;
			copy.push(p);
		}
	}
	if(params != null) {
		var n = 0;
		var _g1 = 0;
		while(_g1 < params.length) {
			var p1 = params[_g1];
			++_g1;
			copy[n] = p1;
			n++;
		}
	}
	return copy;
};
haxe.ui.toolkit.util.Identifier = function() { };
$hxClasses["haxe.ui.toolkit.util.Identifier"] = haxe.ui.toolkit.util.Identifier;
haxe.ui.toolkit.util.Identifier.__name__ = ["haxe","ui","toolkit","util","Identifier"];
haxe.ui.toolkit.util.Identifier.createObjectId = function(instance) {
	return haxe.ui.toolkit.util.Identifier.createClassId(Type.getClass(instance));
};
haxe.ui.toolkit.util.Identifier.createClassId = function(type) {
	var className = Type.getClassName(type);
	var c = haxe.ui.toolkit.util.Identifier._objectCount.get(className);
	if(haxe.ui.toolkit.util.Identifier._objectCount.exists(className) == false) {
		haxe.ui.toolkit.util.Identifier._objectCount.set(className,-1);
		c = -1;
	}
	c++;
	haxe.ui.toolkit.util.Identifier._objectCount.set(className,c);
	var id = className + c;
	return id;
};
haxe.ui.toolkit.util.Identifier.guid = function() {
	return haxe.ui.toolkit.util.Identifier.S4() + haxe.ui.toolkit.util.Identifier.S4() + "-" + haxe.ui.toolkit.util.Identifier.S4() + "-" + haxe.ui.toolkit.util.Identifier.S4() + "-" + haxe.ui.toolkit.util.Identifier.S4() + "-" + haxe.ui.toolkit.util.Identifier.S4() + haxe.ui.toolkit.util.Identifier.S4() + haxe.ui.toolkit.util.Identifier.S4();
};
haxe.ui.toolkit.util.Identifier.S4 = function() {
	var n = (1 + Std.random(65536)) * 65536 | 0;
	var _this = StringTools.hex(n,4);
	return HxOverrides.substr(_this,0,4);
};
haxe.ui.toolkit.util.PerfTimer = function(s) {
	this.name = s;
	this.startStamp = haxe.Timer.stamp();
};
$hxClasses["haxe.ui.toolkit.util.PerfTimer"] = haxe.ui.toolkit.util.PerfTimer;
haxe.ui.toolkit.util.PerfTimer.__name__ = ["haxe","ui","toolkit","util","PerfTimer"];
haxe.ui.toolkit.util.PerfTimer.prototype = {
	end: function() {
		this.endStamp = haxe.Timer.stamp();
		var delta = this.endStamp - this.startStamp;
		haxe.Log.trace(">>>> " + this.name + ": took " + delta + " ms",{ fileName : "PerfTimer.hx", lineNumber : 17, className : "haxe.ui.toolkit.util.PerfTimer", methodName : "end"});
	}
	,__class__: haxe.ui.toolkit.util.PerfTimer
};
haxe.ui.toolkit.util.StringUtil = function() { };
$hxClasses["haxe.ui.toolkit.util.StringUtil"] = haxe.ui.toolkit.util.StringUtil;
haxe.ui.toolkit.util.StringUtil.__name__ = ["haxe","ui","toolkit","util","StringUtil"];
haxe.ui.toolkit.util.StringUtil.capitalizeFirstLetter = function(s) {
	s = HxOverrides.substr(s,0,1).toUpperCase() + HxOverrides.substr(s,1,s.length);
	return s;
};
haxe.ui.toolkit.util.TypeParser = function() { };
$hxClasses["haxe.ui.toolkit.util.TypeParser"] = haxe.ui.toolkit.util.TypeParser;
haxe.ui.toolkit.util.TypeParser.__name__ = ["haxe","ui","toolkit","util","TypeParser"];
haxe.ui.toolkit.util.TypeParser.parseInt = function(s) {
	var i = 0;
	if(s != null) {
		s = StringTools.trim(s);
		i = Std.parseInt(s);
	}
	return i;
};
haxe.ui.toolkit.util.TypeParser.parseFloat = function(s) {
	var f = 0;
	if(s != null) {
		s = StringTools.trim(s);
		f = Std.parseFloat(s);
	}
	return f;
};
haxe.ui.toolkit.util.TypeParser.parseBool = function(s) {
	var b = false;
	if(s != null) {
		s = StringTools.trim(s);
		s = s.toLowerCase();
		if(s == "true" || s == "yes" || s == "1") b = true;
	}
	return b;
};
haxe.ui.toolkit.util.TypeParser.parseColor = function(s) {
	var c = 0;
	if(s != null) {
		s = StringTools.trim(s);
		if(StringTools.startsWith(s,"#")) s = "0x" + HxOverrides.substr(s,1,s.length - 1);
		c = Std.parseInt(s);
	}
	return c;
};
haxe.ui.toolkit.util.pseudothreads.AsyncThreadCaller = function(runnable) {
	this._cancel = false;
	this._runs = 0;
	flash.events.EventDispatcher.call(this);
	this._runnableWorker = runnable;
	this._runnableWorker.set_needToExit($bind(this,this.needToExit));
};
$hxClasses["haxe.ui.toolkit.util.pseudothreads.AsyncThreadCaller"] = haxe.ui.toolkit.util.pseudothreads.AsyncThreadCaller;
haxe.ui.toolkit.util.pseudothreads.AsyncThreadCaller.__name__ = ["haxe","ui","toolkit","util","pseudothreads","AsyncThreadCaller"];
haxe.ui.toolkit.util.pseudothreads.AsyncThreadCaller.__super__ = flash.events.EventDispatcher;
haxe.ui.toolkit.util.pseudothreads.AsyncThreadCaller.prototype = $extend(flash.events.EventDispatcher.prototype,{
	start: function() {
		this._startTime = flash.Lib.getTimer();
		flash.Lib.current.stage.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.run),false,100);
		this.run(null);
	}
	,cancel: function() {
		this._cancel = true;
	}
	,needToExit: function() {
		return this._cancel || flash.Lib.getTimer() >= this._workerExitTime;
	}
	,run: function(event) {
		var frameRate = Math.floor(1000 / flash.Lib.current.stage.frameRate);
		this._workerExitTime = flash.Lib.getTimer() + frameRate * this._runnableWorker.get_runningTimeShare();
		this._runnableWorker.run();
		this._runs++;
		if(this._cancel == true) {
			this._endTime = flash.Lib.getTimer();
			this.dispose();
			this.dispatchEvent(new flash.events.Event(flash.events.Event.CANCEL));
		} else if(this._runnableWorker.get_isComplete()) {
			this._data = this._runnableWorker.get_data();
			this._endTime = flash.Lib.getTimer();
			this.dispose();
			this.dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
		} else this.dispatchEvent(new flash.events.ProgressEvent(flash.events.ProgressEvent.PROGRESS,false,false,this._runnableWorker.get_progress(),this._runnableWorker.get_total()));
	}
	,dispose: function() {
		flash.Lib.current.stage.removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.run));
		this._runnableWorker = null;
	}
	,get_data: function() {
		return this._data;
	}
	,get_runs: function() {
		return this._runs;
	}
	,get_executionTime: function() {
		return this._endTime - this._startTime;
	}
	,get_worker: function() {
		return this._runnableWorker;
	}
	,__class__: haxe.ui.toolkit.util.pseudothreads.AsyncThreadCaller
	,__properties__: {get_worker:"get_worker",get_executionTime:"get_executionTime",get_runs:"get_runs",get_data:"get_data"}
});
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
var hscript = {};
hscript.Const = $hxClasses["hscript.Const"] = { __ename__ : true, __constructs__ : ["CInt","CFloat","CString"] };
hscript.Const.CInt = function(v) { var $x = ["CInt",0,v]; $x.__enum__ = hscript.Const; $x.toString = $estr; return $x; };
hscript.Const.CFloat = function(f) { var $x = ["CFloat",1,f]; $x.__enum__ = hscript.Const; $x.toString = $estr; return $x; };
hscript.Const.CString = function(s) { var $x = ["CString",2,s]; $x.__enum__ = hscript.Const; $x.toString = $estr; return $x; };
hscript.Expr = $hxClasses["hscript.Expr"] = { __ename__ : true, __constructs__ : ["EConst","EIdent","EVar","EParent","EBlock","EField","EBinop","EUnop","ECall","EIf","EWhile","EFor","EBreak","EContinue","EFunction","EReturn","EArray","EArrayDecl","ENew","EThrow","ETry","EObject","ETernary"] };
hscript.Expr.EConst = function(c) { var $x = ["EConst",0,c]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.EIdent = function(v) { var $x = ["EIdent",1,v]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.EVar = function(n,t,e) { var $x = ["EVar",2,n,t,e]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.EParent = function(e) { var $x = ["EParent",3,e]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.EBlock = function(e) { var $x = ["EBlock",4,e]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.EField = function(e,f) { var $x = ["EField",5,e,f]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.EBinop = function(op,e1,e2) { var $x = ["EBinop",6,op,e1,e2]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.EUnop = function(op,prefix,e) { var $x = ["EUnop",7,op,prefix,e]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.ECall = function(e,params) { var $x = ["ECall",8,e,params]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.EIf = function(cond,e1,e2) { var $x = ["EIf",9,cond,e1,e2]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.EWhile = function(cond,e) { var $x = ["EWhile",10,cond,e]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.EFor = function(v,it,e) { var $x = ["EFor",11,v,it,e]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.EBreak = ["EBreak",12];
hscript.Expr.EBreak.toString = $estr;
hscript.Expr.EBreak.__enum__ = hscript.Expr;
hscript.Expr.EContinue = ["EContinue",13];
hscript.Expr.EContinue.toString = $estr;
hscript.Expr.EContinue.__enum__ = hscript.Expr;
hscript.Expr.EFunction = function(args,e,name,ret) { var $x = ["EFunction",14,args,e,name,ret]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.EReturn = function(e) { var $x = ["EReturn",15,e]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.EArray = function(e,index) { var $x = ["EArray",16,e,index]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.EArrayDecl = function(e) { var $x = ["EArrayDecl",17,e]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.ENew = function(cl,params) { var $x = ["ENew",18,cl,params]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.EThrow = function(e) { var $x = ["EThrow",19,e]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.ETry = function(e,v,t,ecatch) { var $x = ["ETry",20,e,v,t,ecatch]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.EObject = function(fl) { var $x = ["EObject",21,fl]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.Expr.ETernary = function(cond,e1,e2) { var $x = ["ETernary",22,cond,e1,e2]; $x.__enum__ = hscript.Expr; $x.toString = $estr; return $x; };
hscript.CType = $hxClasses["hscript.CType"] = { __ename__ : true, __constructs__ : ["CTPath","CTFun","CTAnon","CTParent"] };
hscript.CType.CTPath = function(path,params) { var $x = ["CTPath",0,path,params]; $x.__enum__ = hscript.CType; $x.toString = $estr; return $x; };
hscript.CType.CTFun = function(args,ret) { var $x = ["CTFun",1,args,ret]; $x.__enum__ = hscript.CType; $x.toString = $estr; return $x; };
hscript.CType.CTAnon = function(fields) { var $x = ["CTAnon",2,fields]; $x.__enum__ = hscript.CType; $x.toString = $estr; return $x; };
hscript.CType.CTParent = function(t) { var $x = ["CTParent",3,t]; $x.__enum__ = hscript.CType; $x.toString = $estr; return $x; };
hscript.Error = $hxClasses["hscript.Error"] = { __ename__ : true, __constructs__ : ["EInvalidChar","EUnexpected","EUnterminatedString","EUnterminatedComment","EUnknownVariable","EInvalidIterator","EInvalidOp","EInvalidAccess"] };
hscript.Error.EInvalidChar = function(c) { var $x = ["EInvalidChar",0,c]; $x.__enum__ = hscript.Error; $x.toString = $estr; return $x; };
hscript.Error.EUnexpected = function(s) { var $x = ["EUnexpected",1,s]; $x.__enum__ = hscript.Error; $x.toString = $estr; return $x; };
hscript.Error.EUnterminatedString = ["EUnterminatedString",2];
hscript.Error.EUnterminatedString.toString = $estr;
hscript.Error.EUnterminatedString.__enum__ = hscript.Error;
hscript.Error.EUnterminatedComment = ["EUnterminatedComment",3];
hscript.Error.EUnterminatedComment.toString = $estr;
hscript.Error.EUnterminatedComment.__enum__ = hscript.Error;
hscript.Error.EUnknownVariable = function(v) { var $x = ["EUnknownVariable",4,v]; $x.__enum__ = hscript.Error; $x.toString = $estr; return $x; };
hscript.Error.EInvalidIterator = function(v) { var $x = ["EInvalidIterator",5,v]; $x.__enum__ = hscript.Error; $x.toString = $estr; return $x; };
hscript.Error.EInvalidOp = function(op) { var $x = ["EInvalidOp",6,op]; $x.__enum__ = hscript.Error; $x.toString = $estr; return $x; };
hscript.Error.EInvalidAccess = function(f) { var $x = ["EInvalidAccess",7,f]; $x.__enum__ = hscript.Error; $x.toString = $estr; return $x; };
hscript._Interp = {};
hscript._Interp.Stop = $hxClasses["hscript._Interp.Stop"] = { __ename__ : true, __constructs__ : ["SBreak","SContinue","SReturn"] };
hscript._Interp.Stop.SBreak = ["SBreak",0];
hscript._Interp.Stop.SBreak.toString = $estr;
hscript._Interp.Stop.SBreak.__enum__ = hscript._Interp.Stop;
hscript._Interp.Stop.SContinue = ["SContinue",1];
hscript._Interp.Stop.SContinue.toString = $estr;
hscript._Interp.Stop.SContinue.__enum__ = hscript._Interp.Stop;
hscript._Interp.Stop.SReturn = function(v) { var $x = ["SReturn",2,v]; $x.__enum__ = hscript._Interp.Stop; $x.toString = $estr; return $x; };
hscript.Interp = function() {
	this.locals = new haxe.ds.StringMap();
	this.variables = new haxe.ds.StringMap();
	this.declared = new Array();
	this.variables.set("null",null);
	this.variables.set("true",true);
	this.variables.set("false",false);
	this.variables.set("trace",function(e) {
		haxe.Log.trace(Std.string(e),{ fileName : "hscript", lineNumber : 0});
	});
	this.initOps();
};
$hxClasses["hscript.Interp"] = hscript.Interp;
hscript.Interp.__name__ = ["hscript","Interp"];
hscript.Interp.prototype = {
	initOps: function() {
		var me = this;
		this.binops = new haxe.ds.StringMap();
		this.binops.set("+",function(e1,e2) {
			return me.expr(e1) + me.expr(e2);
		});
		this.binops.set("-",function(e11,e21) {
			return me.expr(e11) - me.expr(e21);
		});
		this.binops.set("*",function(e12,e22) {
			return me.expr(e12) * me.expr(e22);
		});
		this.binops.set("/",function(e13,e23) {
			return me.expr(e13) / me.expr(e23);
		});
		this.binops.set("%",function(e14,e24) {
			return me.expr(e14) % me.expr(e24);
		});
		this.binops.set("&",function(e15,e25) {
			return me.expr(e15) & me.expr(e25);
		});
		this.binops.set("|",function(e16,e26) {
			return me.expr(e16) | me.expr(e26);
		});
		this.binops.set("^",function(e17,e27) {
			return me.expr(e17) ^ me.expr(e27);
		});
		this.binops.set("<<",function(e18,e28) {
			return me.expr(e18) << me.expr(e28);
		});
		this.binops.set(">>",function(e19,e29) {
			return me.expr(e19) >> me.expr(e29);
		});
		this.binops.set(">>>",function(e110,e210) {
			return me.expr(e110) >>> me.expr(e210);
		});
		this.binops.set("==",function(e111,e211) {
			return me.expr(e111) == me.expr(e211);
		});
		this.binops.set("!=",function(e112,e212) {
			return me.expr(e112) != me.expr(e212);
		});
		this.binops.set(">=",function(e113,e213) {
			return me.expr(e113) >= me.expr(e213);
		});
		this.binops.set("<=",function(e114,e214) {
			return me.expr(e114) <= me.expr(e214);
		});
		this.binops.set(">",function(e115,e215) {
			return me.expr(e115) > me.expr(e215);
		});
		this.binops.set("<",function(e116,e216) {
			return me.expr(e116) < me.expr(e216);
		});
		this.binops.set("||",function(e117,e217) {
			return me.expr(e117) == true || me.expr(e217) == true;
		});
		this.binops.set("&&",function(e118,e218) {
			return me.expr(e118) == true && me.expr(e218) == true;
		});
		this.binops.set("=",$bind(this,this.assign));
		this.binops.set("...",function(e119,e219) {
			return new IntIterator(me.expr(e119),me.expr(e219));
		});
		this.assignOp("+=",function(v1,v2) {
			return v1 + v2;
		});
		this.assignOp("-=",function(v11,v21) {
			return v11 - v21;
		});
		this.assignOp("*=",function(v12,v22) {
			return v12 * v22;
		});
		this.assignOp("/=",function(v13,v23) {
			return v13 / v23;
		});
		this.assignOp("%=",function(v14,v24) {
			return v14 % v24;
		});
		this.assignOp("&=",function(v15,v25) {
			return v15 & v25;
		});
		this.assignOp("|=",function(v16,v26) {
			return v16 | v26;
		});
		this.assignOp("^=",function(v17,v27) {
			return v17 ^ v27;
		});
		this.assignOp("<<=",function(v18,v28) {
			return v18 << v28;
		});
		this.assignOp(">>=",function(v19,v29) {
			return v19 >> v29;
		});
		this.assignOp(">>>=",function(v110,v210) {
			return v110 >>> v210;
		});
	}
	,assign: function(e1,e2) {
		var v = this.expr(e2);
		switch(e1[1]) {
		case 1:
			var id = e1[2];
			var l = this.locals.get(id);
			if(l == null) this.variables.set(id,v); else l.r = v;
			break;
		case 5:
			var f = e1[3];
			var e = e1[2];
			v = this.set(this.expr(e),f,v);
			break;
		case 16:
			var index = e1[3];
			var e3 = e1[2];
			this.expr(e3)[this.expr(index)] = v;
			break;
		default:
			throw hscript.Error.EInvalidOp("=");
		}
		return v;
	}
	,assignOp: function(op,fop) {
		var me = this;
		this.binops.set(op,function(e1,e2) {
			return me.evalAssignOp(op,fop,e1,e2);
		});
	}
	,evalAssignOp: function(op,fop,e1,e2) {
		var v;
		switch(e1[1]) {
		case 1:
			var id = e1[2];
			var l = this.locals.get(id);
			v = fop(this.expr(e1),this.expr(e2));
			if(l == null) this.variables.set(id,v); else l.r = v;
			break;
		case 5:
			var f = e1[3];
			var e = e1[2];
			var obj = this.expr(e);
			v = fop(this.get(obj,f),this.expr(e2));
			v = this.set(obj,f,v);
			break;
		case 16:
			var index = e1[3];
			var e3 = e1[2];
			var arr = this.expr(e3);
			var index1 = this.expr(index);
			v = fop(arr[index1],this.expr(e2));
			arr[index1] = v;
			break;
		default:
			throw hscript.Error.EInvalidOp(op);
		}
		return v;
	}
	,increment: function(e,prefix,delta) {
		switch(e[1]) {
		case 1:
			var id = e[2];
			var l = this.locals.get(id);
			var v;
			if(l == null) v = this.variables.get(id); else v = l.r;
			if(prefix) {
				v += delta;
				if(l == null) {
					var value = v;
					this.variables.set(id,value);
				} else l.r = v;
			} else if(l == null) {
				var value1 = v + delta;
				this.variables.set(id,value1);
			} else l.r = v + delta;
			return v;
		case 5:
			var f = e[3];
			var e1 = e[2];
			var obj = this.expr(e1);
			var v1 = this.get(obj,f);
			if(prefix) {
				v1 += delta;
				this.set(obj,f,v1);
			} else this.set(obj,f,v1 + delta);
			return v1;
		case 16:
			var index = e[3];
			var e2 = e[2];
			var arr = this.expr(e2);
			var index1 = this.expr(index);
			var v2 = arr[index1];
			if(prefix) {
				v2 += delta;
				arr[index1] = v2;
			} else arr[index1] = v2 + delta;
			return v2;
		default:
			throw hscript.Error.EInvalidOp(delta > 0?"++":"--");
		}
	}
	,execute: function(expr) {
		this.locals = new haxe.ds.StringMap();
		return this.exprReturn(expr);
	}
	,exprReturn: function(e) {
		try {
			return this.expr(e);
		} catch( e1 ) {
			if( js.Boot.__instanceof(e1,hscript._Interp.Stop) ) {
				switch(e1[1]) {
				case 0:
					throw "Invalid break";
					break;
				case 1:
					throw "Invalid continue";
					break;
				case 2:
					var v = e1[2];
					return v;
				}
			} else throw(e1);
		}
		return null;
	}
	,duplicate: function(h) {
		var h2 = new haxe.ds.StringMap();
		var $it0 = h.keys();
		while( $it0.hasNext() ) {
			var k = $it0.next();
			var value = h.get(k);
			h2.set(k,value);
		}
		return h2;
	}
	,restore: function(old) {
		while(this.declared.length > old) {
			var d = this.declared.pop();
			this.locals.set(d.n,d.old);
		}
	}
	,resolve: function(id) {
		var l = this.locals.get(id);
		if(l != null) return l.r;
		var v = this.variables.get(id);
		if(v == null && !this.variables.exists(id)) throw hscript.Error.EUnknownVariable(id);
		return v;
	}
	,expr: function(e) {
		switch(e[1]) {
		case 0:
			var c = e[2];
			switch(c[1]) {
			case 0:
				var v = c[2];
				return v;
			case 1:
				var f = c[2];
				return f;
			case 2:
				var s = c[2];
				return s;
			}
			break;
		case 1:
			var id = e[2];
			return this.resolve(id);
		case 2:
			var e1 = e[4];
			var n = e[2];
			this.declared.push({ n : n, old : this.locals.get(n)});
			var value = { r : e1 == null?null:this.expr(e1)};
			this.locals.set(n,value);
			return null;
		case 3:
			var e2 = e[2];
			return this.expr(e2);
		case 4:
			var exprs = e[2];
			var old = this.declared.length;
			var v1 = null;
			var _g = 0;
			while(_g < exprs.length) {
				var e3 = exprs[_g];
				++_g;
				v1 = this.expr(e3);
			}
			this.restore(old);
			return v1;
		case 5:
			var f1 = e[3];
			var e4 = e[2];
			return this.get(this.expr(e4),f1);
		case 6:
			var e21 = e[4];
			var e11 = e[3];
			var op = e[2];
			var fop = this.binops.get(op);
			if(fop == null) throw hscript.Error.EInvalidOp(op);
			return fop(e11,e21);
		case 7:
			var e5 = e[4];
			var prefix = e[3];
			var op1 = e[2];
			switch(op1) {
			case "!":
				return this.expr(e5) != true;
			case "-":
				return -this.expr(e5);
			case "++":
				return this.increment(e5,prefix,1);
			case "--":
				return this.increment(e5,prefix,-1);
			case "~":
				return ~this.expr(e5);
			default:
				throw hscript.Error.EInvalidOp(op1);
			}
			break;
		case 8:
			var params = e[3];
			var e6 = e[2];
			var args = new Array();
			var _g1 = 0;
			while(_g1 < params.length) {
				var p = params[_g1];
				++_g1;
				args.push(this.expr(p));
			}
			switch(e6[1]) {
			case 5:
				var f2 = e6[3];
				var e7 = e6[2];
				var obj = this.expr(e7);
				if(obj == null) throw hscript.Error.EInvalidAccess(f2);
				return this.fcall(obj,f2,args);
			default:
				return this.call(null,this.expr(e6),args);
			}
			break;
		case 9:
			var e22 = e[4];
			var e12 = e[3];
			var econd = e[2];
			if(this.expr(econd) == true) return this.expr(e12); else if(e22 == null) return null; else return this.expr(e22);
			break;
		case 10:
			var e8 = e[3];
			var econd1 = e[2];
			this.whileLoop(econd1,e8);
			return null;
		case 11:
			var e9 = e[4];
			var it = e[3];
			var v2 = e[2];
			this.forLoop(v2,it,e9);
			return null;
		case 12:
			throw hscript._Interp.Stop.SBreak;
			break;
		case 13:
			throw hscript._Interp.Stop.SContinue;
			break;
		case 15:
			var e10 = e[2];
			throw hscript._Interp.Stop.SReturn(e10 == null?null:this.expr(e10));
			break;
		case 14:
			var name = e[4];
			var fexpr = e[3];
			var params1 = e[2];
			var capturedLocals = this.duplicate(this.locals);
			var me = this;
			var f3 = function(args1) {
				if(args1.length != params1.length) throw "Invalid number of parameters";
				var old1 = me.locals;
				me.locals = me.duplicate(capturedLocals);
				var _g11 = 0;
				var _g2 = params1.length;
				while(_g11 < _g2) {
					var i = _g11++;
					me.locals.set(params1[i].name,{ r : args1[i]});
				}
				var r = null;
				try {
					r = me.exprReturn(fexpr);
				} catch( e13 ) {
					me.locals = old1;
					throw e13;
				}
				me.locals = old1;
				return r;
			};
			var f4 = Reflect.makeVarArgs(f3);
			if(name != null) this.variables.set(name,f4);
			return f4;
		case 17:
			var arr = e[2];
			var a = new Array();
			var _g3 = 0;
			while(_g3 < arr.length) {
				var e14 = arr[_g3];
				++_g3;
				a.push(this.expr(e14));
			}
			return a;
		case 16:
			var index = e[3];
			var e15 = e[2];
			return this.expr(e15)[this.expr(index)];
		case 18:
			var params2 = e[3];
			var cl = e[2];
			var a1 = new Array();
			var _g4 = 0;
			while(_g4 < params2.length) {
				var e16 = params2[_g4];
				++_g4;
				a1.push(this.expr(e16));
			}
			return this.cnew(cl,a1);
		case 19:
			var e17 = e[2];
			throw this.expr(e17);
			break;
		case 20:
			var ecatch = e[5];
			var n1 = e[3];
			var e18 = e[2];
			var old2 = this.declared.length;
			try {
				var v3 = this.expr(e18);
				this.restore(old2);
				return v3;
			} catch( $e0 ) {
				if( js.Boot.__instanceof($e0,hscript._Interp.Stop) ) {
					var err = $e0;
					throw err;
				} else {
				var err1 = $e0;
				this.restore(old2);
				this.declared.push({ n : n1, old : this.locals.get(n1)});
				this.locals.set(n1,{ r : err1});
				var v4 = this.expr(ecatch);
				this.restore(old2);
				return v4;
				}
			}
			break;
		case 21:
			var fl = e[2];
			var o = { };
			var _g5 = 0;
			while(_g5 < fl.length) {
				var f5 = fl[_g5];
				++_g5;
				this.set(o,f5.name,this.expr(f5.e));
			}
			return o;
		case 22:
			var e23 = e[4];
			var e19 = e[3];
			var econd2 = e[2];
			if(this.expr(econd2) == true) return this.expr(e19); else return this.expr(e23);
			break;
		}
		return null;
	}
	,whileLoop: function(econd,e) {
		var old = this.declared.length;
		try {
			while(this.expr(econd) == true) try {
				this.expr(e);
			} catch( err ) {
				if( js.Boot.__instanceof(err,hscript._Interp.Stop) ) {
					switch(err[1]) {
					case 1:
						break;
					case 0:
						throw "__break__";
						break;
					case 2:
						throw err;
						break;
					}
				} else throw(err);
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		this.restore(old);
	}
	,makeIterator: function(v) {
		try {
			v = $iterator(v)();
		} catch( e ) {
		}
		if(v.hasNext == null || v.next == null) throw hscript.Error.EInvalidIterator(v);
		return v;
	}
	,forLoop: function(n,it,e) {
		var old = this.declared.length;
		this.declared.push({ n : n, old : this.locals.get(n)});
		var it1 = this.makeIterator(this.expr(it));
		try {
			while(it1.hasNext()) {
				var value = { r : it1.next()};
				this.locals.set(n,value);
				try {
					this.expr(e);
				} catch( err ) {
					if( js.Boot.__instanceof(err,hscript._Interp.Stop) ) {
						switch(err[1]) {
						case 1:
							break;
						case 0:
							throw "__break__";
							break;
						case 2:
							throw err;
							break;
						}
					} else throw(err);
				}
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		this.restore(old);
	}
	,get: function(o,f) {
		if(o == null) throw hscript.Error.EInvalidAccess(f);
		return Reflect.field(o,f);
	}
	,set: function(o,f,v) {
		if(o == null) throw hscript.Error.EInvalidAccess(f);
		o[f] = v;
		return v;
	}
	,fcall: function(o,f,args) {
		return this.call(o,Reflect.field(o,f),args);
	}
	,call: function(o,f,args) {
		return f.apply(o,args);
	}
	,cnew: function(cl,args) {
		var c = Type.resolveClass(cl);
		if(c == null) c = this.resolve(cl);
		return Type.createInstance(c,args);
	}
	,__class__: hscript.Interp
};
hscript.Token = $hxClasses["hscript.Token"] = { __ename__ : true, __constructs__ : ["TEof","TConst","TId","TOp","TPOpen","TPClose","TBrOpen","TBrClose","TDot","TComma","TSemicolon","TBkOpen","TBkClose","TQuestion","TDoubleDot"] };
hscript.Token.TEof = ["TEof",0];
hscript.Token.TEof.toString = $estr;
hscript.Token.TEof.__enum__ = hscript.Token;
hscript.Token.TConst = function(c) { var $x = ["TConst",1,c]; $x.__enum__ = hscript.Token; $x.toString = $estr; return $x; };
hscript.Token.TId = function(s) { var $x = ["TId",2,s]; $x.__enum__ = hscript.Token; $x.toString = $estr; return $x; };
hscript.Token.TOp = function(s) { var $x = ["TOp",3,s]; $x.__enum__ = hscript.Token; $x.toString = $estr; return $x; };
hscript.Token.TPOpen = ["TPOpen",4];
hscript.Token.TPOpen.toString = $estr;
hscript.Token.TPOpen.__enum__ = hscript.Token;
hscript.Token.TPClose = ["TPClose",5];
hscript.Token.TPClose.toString = $estr;
hscript.Token.TPClose.__enum__ = hscript.Token;
hscript.Token.TBrOpen = ["TBrOpen",6];
hscript.Token.TBrOpen.toString = $estr;
hscript.Token.TBrOpen.__enum__ = hscript.Token;
hscript.Token.TBrClose = ["TBrClose",7];
hscript.Token.TBrClose.toString = $estr;
hscript.Token.TBrClose.__enum__ = hscript.Token;
hscript.Token.TDot = ["TDot",8];
hscript.Token.TDot.toString = $estr;
hscript.Token.TDot.__enum__ = hscript.Token;
hscript.Token.TComma = ["TComma",9];
hscript.Token.TComma.toString = $estr;
hscript.Token.TComma.__enum__ = hscript.Token;
hscript.Token.TSemicolon = ["TSemicolon",10];
hscript.Token.TSemicolon.toString = $estr;
hscript.Token.TSemicolon.__enum__ = hscript.Token;
hscript.Token.TBkOpen = ["TBkOpen",11];
hscript.Token.TBkOpen.toString = $estr;
hscript.Token.TBkOpen.__enum__ = hscript.Token;
hscript.Token.TBkClose = ["TBkClose",12];
hscript.Token.TBkClose.toString = $estr;
hscript.Token.TBkClose.__enum__ = hscript.Token;
hscript.Token.TQuestion = ["TQuestion",13];
hscript.Token.TQuestion.toString = $estr;
hscript.Token.TQuestion.__enum__ = hscript.Token;
hscript.Token.TDoubleDot = ["TDoubleDot",14];
hscript.Token.TDoubleDot.toString = $estr;
hscript.Token.TDoubleDot.__enum__ = hscript.Token;
hscript.Parser = function() {
	this.line = 1;
	this.opChars = "+*/-=!><&|^%~";
	this.identChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
	var priorities = [["%"],["*","/"],["+","-"],["<<",">>",">>>"],["|","&","^"],["==","!=",">","<",">=","<="],["..."],["&&"],["||"],["=","+=","-=","*=","/=","%=","<<=",">>=",">>>=","|=","&=","^="]];
	this.opPriority = new haxe.ds.StringMap();
	this.opRightAssoc = new haxe.ds.StringMap();
	this.unops = new haxe.ds.StringMap();
	var _g1 = 0;
	var _g = priorities.length;
	while(_g1 < _g) {
		var i = _g1++;
		var _g2 = 0;
		var _g3 = priorities[i];
		while(_g2 < _g3.length) {
			var x = _g3[_g2];
			++_g2;
			this.opPriority.set(x,i);
			if(i == 9) this.opRightAssoc.set(x,true);
		}
	}
	var _g4 = 0;
	var _g11 = ["!","++","--","-","~"];
	while(_g4 < _g11.length) {
		var x1 = _g11[_g4];
		++_g4;
		this.unops.set(x1,x1 == "++" || x1 == "--");
	}
};
$hxClasses["hscript.Parser"] = hscript.Parser;
hscript.Parser.__name__ = ["hscript","Parser"];
hscript.Parser.prototype = {
	error: function(err,pmin,pmax) {
		throw err;
	}
	,invalidChar: function(c) {
		this.error(hscript.Error.EInvalidChar(c),0,0);
	}
	,parseString: function(s) {
		this.line = 1;
		return this.parse(new haxe.io.StringInput(s));
	}
	,parse: function(s) {
		this.tokens = new haxe.ds.GenericStack();
		this["char"] = -1;
		this.input = s;
		this.ops = new Array();
		this.idents = new Array();
		var _g1 = 0;
		var _g = this.opChars.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.ops[HxOverrides.cca(this.opChars,i)] = true;
		}
		var _g11 = 0;
		var _g2 = this.identChars.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			this.idents[HxOverrides.cca(this.identChars,i1)] = true;
		}
		var a = new Array();
		while(true) {
			var tk = this.token();
			if(tk == hscript.Token.TEof) break;
			this.tokens.add(tk);
			a.push(this.parseFullExpr());
		}
		if(a.length == 1) return a[0]; else return this.mk(hscript.Expr.EBlock(a),0,null);
	}
	,unexpected: function(tk) {
		this.error(hscript.Error.EUnexpected(this.tokenString(tk)),0,0);
		return null;
	}
	,push: function(tk) {
		this.tokens.add(tk);
	}
	,ensure: function(tk) {
		var t = this.token();
		if(t != tk) this.unexpected(t);
	}
	,expr: function(e) {
		return e;
	}
	,pmin: function(e) {
		return 0;
	}
	,pmax: function(e) {
		return 0;
	}
	,mk: function(e,pmin,pmax) {
		return e;
	}
	,isBlock: function(e) {
		switch(e[1]) {
		case 4:case 21:
			return true;
		case 14:
			var e1 = e[3];
			return this.isBlock(e1);
		case 2:
			var e2 = e[4];
			return e2 != null && this.isBlock(e2);
		case 9:
			var e21 = e[4];
			var e11 = e[3];
			if(e21 != null) return this.isBlock(e21); else return this.isBlock(e11);
			break;
		case 6:
			var e3 = e[4];
			return this.isBlock(e3);
		case 7:
			var e4 = e[4];
			var prefix = e[3];
			return !prefix && this.isBlock(e4);
		case 10:
			var e5 = e[3];
			return this.isBlock(e5);
		case 11:
			var e6 = e[4];
			return this.isBlock(e6);
		case 15:
			var e7 = e[2];
			return e7 != null && this.isBlock(e7);
		default:
			return false;
		}
	}
	,parseFullExpr: function() {
		var e = this.parseExpr();
		var tk = this.token();
		if(tk != hscript.Token.TSemicolon && tk != hscript.Token.TEof) {
			if(this.isBlock(e)) this.tokens.add(tk); else this.unexpected(tk);
		}
		return e;
	}
	,parseObject: function(p1) {
		var fl = new Array();
		try {
			while(true) {
				var tk = this.token();
				var id = null;
				switch(tk[1]) {
				case 2:
					var i = tk[2];
					id = i;
					break;
				case 1:
					var c = tk[2];
					if(!this.allowJSON) this.unexpected(tk);
					switch(c[1]) {
					case 2:
						var s = c[2];
						id = s;
						break;
					default:
						this.unexpected(tk);
					}
					break;
				case 7:
					throw "__break__";
					break;
				default:
					this.unexpected(tk);
				}
				this.ensure(hscript.Token.TDoubleDot);
				fl.push({ name : id, e : this.parseExpr()});
				tk = this.token();
				switch(tk[1]) {
				case 7:
					throw "__break__";
					break;
				case 9:
					break;
				default:
					this.unexpected(tk);
				}
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		return this.parseExprNext(this.mk(hscript.Expr.EObject(fl),p1,null));
	}
	,parseExpr: function() {
		var tk = this.token();
		switch(tk[1]) {
		case 2:
			var id = tk[2];
			var e = this.parseStructure(id);
			if(e == null) e = this.mk(hscript.Expr.EIdent(id),null,null);
			return this.parseExprNext(e);
		case 1:
			var c = tk[2];
			return this.parseExprNext(this.mk(hscript.Expr.EConst(c),null,null));
		case 4:
			var e1 = this.parseExpr();
			this.ensure(hscript.Token.TPClose);
			return this.parseExprNext(this.mk(hscript.Expr.EParent(e1),0,0));
		case 6:
			tk = this.token();
			switch(tk[1]) {
			case 7:
				return this.parseExprNext(this.mk(hscript.Expr.EObject([]),0,null));
			case 2:
				var tk2 = this.token();
				this.tokens.add(tk2);
				this.tokens.add(tk);
				switch(tk2[1]) {
				case 14:
					return this.parseExprNext(this.parseObject(0));
				default:
				}
				break;
			case 1:
				var c1 = tk[2];
				if(this.allowJSON) switch(c1[1]) {
				case 2:
					var tk21 = this.token();
					this.tokens.add(tk21);
					this.tokens.add(tk);
					switch(tk21[1]) {
					case 14:
						return this.parseExprNext(this.parseObject(0));
					default:
					}
					break;
				default:
					this.tokens.add(tk);
				} else this.tokens.add(tk);
				break;
			default:
				this.tokens.add(tk);
			}
			var a = new Array();
			while(true) {
				a.push(this.parseFullExpr());
				tk = this.token();
				if(tk == hscript.Token.TBrClose) break;
				this.tokens.add(tk);
			}
			return this.mk(hscript.Expr.EBlock(a),0,null);
		case 3:
			var op = tk[2];
			if(this.unops.exists(op)) return this.makeUnop(op,this.parseExpr());
			return this.unexpected(tk);
		case 11:
			var a1 = new Array();
			tk = this.token();
			while(tk != hscript.Token.TBkClose) {
				this.tokens.add(tk);
				a1.push(this.parseExpr());
				tk = this.token();
				if(tk == hscript.Token.TComma) tk = this.token();
			}
			return this.parseExprNext(this.mk(hscript.Expr.EArrayDecl(a1),0,null));
		default:
			return this.unexpected(tk);
		}
	}
	,makeUnop: function(op,e) {
		switch(e[1]) {
		case 6:
			var e2 = e[4];
			var e1 = e[3];
			var bop = e[2];
			return this.mk(hscript.Expr.EBinop(bop,this.makeUnop(op,e1),e2),0,0);
		case 22:
			var e3 = e[4];
			var e21 = e[3];
			var e11 = e[2];
			return this.mk(hscript.Expr.ETernary(this.makeUnop(op,e11),e21,e3),0,0);
		default:
			return this.mk(hscript.Expr.EUnop(op,true,e),0,0);
		}
	}
	,makeBinop: function(op,e1,e) {
		switch(e[1]) {
		case 6:
			var e3 = e[4];
			var e2 = e[3];
			var op2 = e[2];
			if(this.opPriority.get(op) <= this.opPriority.get(op2) && !this.opRightAssoc.exists(op)) return this.mk(hscript.Expr.EBinop(op2,this.makeBinop(op,e1,e2),e3),0,0); else return this.mk(hscript.Expr.EBinop(op,e1,e),0,0);
			break;
		case 22:
			var e4 = e[4];
			var e31 = e[3];
			var e21 = e[2];
			if(this.opRightAssoc.exists(op)) return this.mk(hscript.Expr.EBinop(op,e1,e),0,0); else return this.mk(hscript.Expr.ETernary(this.makeBinop(op,e1,e21),e31,e4),0,0);
			break;
		default:
			return this.mk(hscript.Expr.EBinop(op,e1,e),0,0);
		}
	}
	,parseStructure: function(id) {
		switch(id) {
		case "if":
			var cond = this.parseExpr();
			var e1 = this.parseExpr();
			var e2 = null;
			var semic = false;
			var tk = this.token();
			if(tk == hscript.Token.TSemicolon) {
				semic = true;
				tk = this.token();
			}
			if(Type.enumEq(tk,hscript.Token.TId("else"))) e2 = this.parseExpr(); else {
				this.tokens.add(tk);
				if(semic) this.tokens.add(hscript.Token.TSemicolon);
			}
			return this.mk(hscript.Expr.EIf(cond,e1,e2),0,e2 == null?0:0);
		case "var":
			var tk1 = this.token();
			var ident = null;
			switch(tk1[1]) {
			case 2:
				var id1 = tk1[2];
				ident = id1;
				break;
			default:
				this.unexpected(tk1);
			}
			tk1 = this.token();
			var t = null;
			if(tk1 == hscript.Token.TDoubleDot && this.allowTypes) {
				t = this.parseType();
				tk1 = this.token();
			}
			var e = null;
			if(Type.enumEq(tk1,hscript.Token.TOp("="))) e = this.parseExpr(); else this.tokens.add(tk1);
			return this.mk(hscript.Expr.EVar(ident,t,e),0,e == null?0:0);
		case "while":
			var econd = this.parseExpr();
			var e3 = this.parseExpr();
			return this.mk(hscript.Expr.EWhile(econd,e3),0,0);
		case "for":
			this.ensure(hscript.Token.TPOpen);
			var tk2 = this.token();
			var vname = null;
			switch(tk2[1]) {
			case 2:
				var id2 = tk2[2];
				vname = id2;
				break;
			default:
				this.unexpected(tk2);
			}
			tk2 = this.token();
			if(!Type.enumEq(tk2,hscript.Token.TId("in"))) this.unexpected(tk2);
			var eiter = this.parseExpr();
			this.ensure(hscript.Token.TPClose);
			var e4 = this.parseExpr();
			return this.mk(hscript.Expr.EFor(vname,eiter,e4),0,0);
		case "break":
			return hscript.Expr.EBreak;
		case "continue":
			return hscript.Expr.EContinue;
		case "else":
			return this.unexpected(hscript.Token.TId(id));
		case "function":
			var tk3 = this.token();
			var name = null;
			switch(tk3[1]) {
			case 2:
				var id3 = tk3[2];
				name = id3;
				break;
			default:
				this.tokens.add(tk3);
			}
			this.ensure(hscript.Token.TPOpen);
			var args = new Array();
			tk3 = this.token();
			if(tk3 != hscript.Token.TPClose) {
				var arg = true;
				while(arg) {
					var name1 = null;
					switch(tk3[1]) {
					case 2:
						var id4 = tk3[2];
						name1 = id4;
						break;
					default:
						this.unexpected(tk3);
					}
					tk3 = this.token();
					var t1 = null;
					if(tk3 == hscript.Token.TDoubleDot && this.allowTypes) {
						t1 = this.parseType();
						tk3 = this.token();
					}
					args.push({ name : name1, t : t1});
					switch(tk3[1]) {
					case 9:
						tk3 = this.token();
						break;
					case 5:
						arg = false;
						break;
					default:
						this.unexpected(tk3);
					}
				}
			}
			var ret = null;
			if(this.allowTypes) {
				tk3 = this.token();
				if(tk3 != hscript.Token.TDoubleDot) this.tokens.add(tk3); else ret = this.parseType();
			}
			var body = this.parseExpr();
			return this.mk(hscript.Expr.EFunction(args,body,name,ret),0,0);
		case "return":
			var tk4 = this.token();
			this.tokens.add(tk4);
			var e5;
			if(tk4 == hscript.Token.TSemicolon) e5 = null; else e5 = this.parseExpr();
			return this.mk(hscript.Expr.EReturn(e5),0,e5 == null?0:0);
		case "new":
			var a = new Array();
			var tk5 = this.token();
			switch(tk5[1]) {
			case 2:
				var id5 = tk5[2];
				a.push(id5);
				break;
			default:
				this.unexpected(tk5);
			}
			var next = true;
			while(next) {
				tk5 = this.token();
				switch(tk5[1]) {
				case 8:
					tk5 = this.token();
					switch(tk5[1]) {
					case 2:
						var id6 = tk5[2];
						a.push(id6);
						break;
					default:
						this.unexpected(tk5);
					}
					break;
				case 4:
					next = false;
					break;
				default:
					this.unexpected(tk5);
				}
			}
			var args1 = this.parseExprList(hscript.Token.TPClose);
			return this.mk(hscript.Expr.ENew(a.join("."),args1),0,null);
		case "throw":
			var e6 = this.parseExpr();
			return this.mk(hscript.Expr.EThrow(e6),0,0);
		case "try":
			var e7 = this.parseExpr();
			var tk6 = this.token();
			if(!Type.enumEq(tk6,hscript.Token.TId("catch"))) this.unexpected(tk6);
			this.ensure(hscript.Token.TPOpen);
			tk6 = this.token();
			var vname1;
			switch(tk6[1]) {
			case 2:
				var id7 = tk6[2];
				vname1 = id7;
				break;
			default:
				vname1 = this.unexpected(tk6);
			}
			this.ensure(hscript.Token.TDoubleDot);
			var t2 = null;
			if(this.allowTypes) t2 = this.parseType(); else {
				tk6 = this.token();
				if(!Type.enumEq(tk6,hscript.Token.TId("Dynamic"))) this.unexpected(tk6);
			}
			this.ensure(hscript.Token.TPClose);
			var ec = this.parseExpr();
			return this.mk(hscript.Expr.ETry(e7,vname1,t2,ec),0,0);
		default:
			return null;
		}
	}
	,parseExprNext: function(e1) {
		var tk = this.token();
		switch(tk[1]) {
		case 3:
			var op = tk[2];
			if(this.unops.get(op)) {
				if(this.isBlock(e1) || (function($this) {
					var $r;
					switch(e1[1]) {
					case 3:
						$r = true;
						break;
					default:
						$r = false;
					}
					return $r;
				}(this))) {
					this.tokens.add(tk);
					return e1;
				}
				return this.parseExprNext(this.mk(hscript.Expr.EUnop(op,false,e1),0,null));
			}
			return this.makeBinop(op,e1,this.parseExpr());
		case 8:
			tk = this.token();
			var field = null;
			switch(tk[1]) {
			case 2:
				var id = tk[2];
				field = id;
				break;
			default:
				this.unexpected(tk);
			}
			return this.parseExprNext(this.mk(hscript.Expr.EField(e1,field),0,null));
		case 4:
			return this.parseExprNext(this.mk(hscript.Expr.ECall(e1,this.parseExprList(hscript.Token.TPClose)),0,null));
		case 11:
			var e2 = this.parseExpr();
			this.ensure(hscript.Token.TBkClose);
			return this.parseExprNext(this.mk(hscript.Expr.EArray(e1,e2),0,null));
		case 13:
			var e21 = this.parseExpr();
			this.ensure(hscript.Token.TDoubleDot);
			var e3 = this.parseExpr();
			return this.mk(hscript.Expr.ETernary(e1,e21,e3),0,0);
		default:
			this.tokens.add(tk);
			return e1;
		}
	}
	,parseType: function() {
		var t = this.token();
		switch(t[1]) {
		case 2:
			var v = t[2];
			var path = [v];
			while(true) {
				t = this.token();
				if(t != hscript.Token.TDot) break;
				t = this.token();
				switch(t[1]) {
				case 2:
					var v1 = t[2];
					path.push(v1);
					break;
				default:
					this.unexpected(t);
				}
			}
			var params = null;
			switch(t[1]) {
			case 3:
				var op = t[2];
				if(op == "<") {
					params = [];
					try {
						while(true) {
							params.push(this.parseType());
							t = this.token();
							switch(t[1]) {
							case 9:
								continue;
								break;
							case 3:
								var op1 = t[2];
								if(op1 == ">") throw "__break__";
								break;
							default:
							}
							this.unexpected(t);
						}
					} catch( e ) { if( e != "__break__" ) throw e; }
				}
				break;
			default:
				this.tokens.add(t);
			}
			return this.parseTypeNext(hscript.CType.CTPath(path,params));
		case 4:
			var t1 = this.parseType();
			this.ensure(hscript.Token.TPClose);
			return this.parseTypeNext(hscript.CType.CTParent(t1));
		case 6:
			var fields = [];
			try {
				while(true) {
					t = this.token();
					switch(t[1]) {
					case 7:
						throw "__break__";
						break;
					case 2:
						var name = t[2];
						this.ensure(hscript.Token.TDoubleDot);
						fields.push({ name : name, t : this.parseType()});
						t = this.token();
						switch(t[1]) {
						case 9:
							break;
						case 7:
							throw "__break__";
							break;
						default:
							this.unexpected(t);
						}
						break;
					default:
						this.unexpected(t);
					}
				}
			} catch( e ) { if( e != "__break__" ) throw e; }
			return this.parseTypeNext(hscript.CType.CTAnon(fields));
		default:
			return this.unexpected(t);
		}
	}
	,parseTypeNext: function(t) {
		var tk = this.token();
		switch(tk[1]) {
		case 3:
			var op = tk[2];
			if(op != "->") {
				this.tokens.add(tk);
				return t;
			}
			break;
		default:
			this.tokens.add(tk);
			return t;
		}
		var t2 = this.parseType();
		switch(t2[1]) {
		case 1:
			var args = t2[2];
			args.unshift(t);
			return t2;
		default:
			return hscript.CType.CTFun([t],t2);
		}
	}
	,parseExprList: function(etk) {
		var args = new Array();
		var tk = this.token();
		if(tk == etk) return args;
		this.tokens.add(tk);
		try {
			while(true) {
				args.push(this.parseExpr());
				tk = this.token();
				switch(tk[1]) {
				case 9:
					break;
				default:
					if(tk == etk) throw "__break__";
					this.unexpected(tk);
				}
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		return args;
	}
	,incPos: function() {
	}
	,readChar: function() {
		try {
			return this.input.readByte();
		} catch( e ) {
			return 0;
		}
	}
	,readString: function(until) {
		var c = 0;
		var b = new haxe.io.BytesOutput();
		var esc = false;
		var old = this.line;
		var s = this.input;
		while(true) {
			try {
				c = s.readByte();
			} catch( e ) {
				this.line = old;
				throw hscript.Error.EUnterminatedString;
			}
			if(esc) {
				esc = false;
				switch(c) {
				case 110:
					b.writeByte(10);
					break;
				case 114:
					b.writeByte(13);
					break;
				case 116:
					b.writeByte(9);
					break;
				case 39:case 34:case 92:
					b.writeByte(c);
					break;
				case 47:
					if(this.allowJSON) b.writeByte(c); else this.invalidChar(c);
					break;
				case 117:
					if(!this.allowJSON) throw this.invalidChar(c);
					var code = null;
					try {
						code = s.readString(4);
					} catch( e1 ) {
						this.line = old;
						throw hscript.Error.EUnterminatedString;
					}
					var k = 0;
					var _g = 0;
					while(_g < 4) {
						var i = _g++;
						k <<= 4;
						var $char = HxOverrides.cca(code,i);
						switch($char) {
						case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
							k += $char - 48;
							break;
						case 65:case 66:case 67:case 68:case 69:case 70:
							k += $char - 55;
							break;
						case 97:case 98:case 99:case 100:case 101:case 102:
							k += $char - 87;
							break;
						default:
							this.invalidChar($char);
						}
					}
					if(k <= 127) b.writeByte(k); else if(k <= 2047) {
						b.writeByte(192 | k >> 6);
						b.writeByte(128 | k & 63);
					} else {
						b.writeByte(224 | k >> 12);
						b.writeByte(128 | k >> 6 & 63);
						b.writeByte(128 | k & 63);
					}
					break;
				default:
					this.invalidChar(c);
				}
			} else if(c == 92) esc = true; else if(c == until) break; else {
				if(c == 10) this.line++;
				b.writeByte(c);
			}
		}
		return b.getBytes().toString();
	}
	,token: function() {
		if(!(this.tokens.head == null)) return this.tokens.pop();
		var $char;
		if(this["char"] < 0) $char = this.readChar(); else {
			$char = this["char"];
			this["char"] = -1;
		}
		while(true) {
			switch($char) {
			case 0:
				return hscript.Token.TEof;
			case 32:case 9:case 13:
				break;
			case 10:
				this.line++;
				break;
			case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
				var n = ($char - 48) * 1.0;
				var exp = 0.;
				while(true) {
					$char = this.readChar();
					exp *= 10;
					switch($char) {
					case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
						n = n * 10 + ($char - 48);
						break;
					case 46:
						if(exp > 0) {
							if(exp == 10 && this.readChar() == 46) {
								this.push(hscript.Token.TOp("..."));
								var i = n | 0;
								return hscript.Token.TConst(i == n?hscript.Const.CInt(i):hscript.Const.CFloat(n));
							}
							this.invalidChar($char);
						}
						exp = 1.;
						break;
					case 120:
						if(n > 0 || exp > 0) this.invalidChar($char);
						var n1 = 0;
						while(true) {
							$char = this.readChar();
							switch($char) {
							case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
								n1 = (n1 << 4) + $char - 48;
								break;
							case 65:case 66:case 67:case 68:case 69:case 70:
								n1 = (n1 << 4) + ($char - 55);
								break;
							case 97:case 98:case 99:case 100:case 101:case 102:
								n1 = (n1 << 4) + ($char - 87);
								break;
							default:
								this["char"] = $char;
								return hscript.Token.TConst(hscript.Const.CInt(n1));
							}
						}
						break;
					default:
						this["char"] = $char;
						var i1 = n | 0;
						return hscript.Token.TConst(exp > 0?hscript.Const.CFloat(n * 10 / exp):i1 == n?hscript.Const.CInt(i1):hscript.Const.CFloat(n));
					}
				}
				break;
			case 59:
				return hscript.Token.TSemicolon;
			case 40:
				return hscript.Token.TPOpen;
			case 41:
				return hscript.Token.TPClose;
			case 44:
				return hscript.Token.TComma;
			case 46:
				$char = this.readChar();
				switch($char) {
				case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
					var n2 = $char - 48;
					var exp1 = 1;
					while(true) {
						$char = this.readChar();
						exp1 *= 10;
						switch($char) {
						case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
							n2 = n2 * 10 + ($char - 48);
							break;
						default:
							this["char"] = $char;
							return hscript.Token.TConst(hscript.Const.CFloat(n2 / exp1));
						}
					}
					break;
				case 46:
					$char = this.readChar();
					if($char != 46) this.invalidChar($char);
					return hscript.Token.TOp("...");
				default:
					this["char"] = $char;
					return hscript.Token.TDot;
				}
				break;
			case 123:
				return hscript.Token.TBrOpen;
			case 125:
				return hscript.Token.TBrClose;
			case 91:
				return hscript.Token.TBkOpen;
			case 93:
				return hscript.Token.TBkClose;
			case 39:
				return hscript.Token.TConst(hscript.Const.CString(this.readString(39)));
			case 34:
				return hscript.Token.TConst(hscript.Const.CString(this.readString(34)));
			case 63:
				return hscript.Token.TQuestion;
			case 58:
				return hscript.Token.TDoubleDot;
			default:
				if(this.ops[$char]) {
					var op = String.fromCharCode($char);
					while(true) {
						$char = this.readChar();
						if(!this.ops[$char]) {
							if(HxOverrides.cca(op,0) == 47) return this.tokenComment(op,$char);
							this["char"] = $char;
							return hscript.Token.TOp(op);
						}
						op += String.fromCharCode($char);
					}
				}
				if(this.idents[$char]) {
					var id = String.fromCharCode($char);
					while(true) {
						$char = this.readChar();
						if(!this.idents[$char]) {
							this["char"] = $char;
							return hscript.Token.TId(id);
						}
						id += String.fromCharCode($char);
					}
				}
				this.invalidChar($char);
			}
			$char = this.readChar();
		}
		return null;
	}
	,tokenComment: function(op,$char) {
		var c = HxOverrides.cca(op,1);
		var s = this.input;
		if(c == 47) {
			try {
				while($char != 10 && $char != 13) $char = s.readByte();
				this["char"] = $char;
			} catch( e ) {
			}
			return this.token();
		}
		if(c == 42) {
			var old = this.line;
			try {
				while(true) {
					while($char != 42) {
						if($char == 10) this.line++;
						$char = s.readByte();
					}
					$char = s.readByte();
					if($char == 47) break;
				}
			} catch( e1 ) {
				this.line = old;
				throw hscript.Error.EUnterminatedComment;
			}
			return this.token();
		}
		this["char"] = $char;
		return hscript.Token.TOp(op);
	}
	,constString: function(c) {
		switch(c[1]) {
		case 0:
			var v = c[2];
			if(v == null) return "null"; else return "" + v;
			break;
		case 1:
			var f = c[2];
			if(f == null) return "null"; else return "" + f;
			break;
		case 2:
			var s = c[2];
			return s;
		}
	}
	,tokenString: function(t) {
		switch(t[1]) {
		case 0:
			return "<eof>";
		case 1:
			var c = t[2];
			return this.constString(c);
		case 2:
			var s = t[2];
			return s;
		case 3:
			var s1 = t[2];
			return s1;
		case 4:
			return "(";
		case 5:
			return ")";
		case 6:
			return "{";
		case 7:
			return "}";
		case 8:
			return ".";
		case 9:
			return ",";
		case 10:
			return ";";
		case 11:
			return "[";
		case 12:
			return "]";
		case 13:
			return "?";
		case 14:
			return ":";
		}
	}
	,__class__: hscript.Parser
};
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
var motion = {};
motion.actuators = {};
motion.actuators.IGenericActuator = function() { };
$hxClasses["motion.actuators.IGenericActuator"] = motion.actuators.IGenericActuator;
motion.actuators.IGenericActuator.__name__ = ["motion","actuators","IGenericActuator"];
motion.actuators.IGenericActuator.prototype = {
	__class__: motion.actuators.IGenericActuator
};
motion.actuators.GenericActuator = function(target,duration,properties) {
	this._autoVisible = true;
	this._delay = 0;
	this._reflect = false;
	this._repeat = 0;
	this._reverse = false;
	this._smartRotation = false;
	this._snapping = false;
	this.special = false;
	this.target = target;
	this.properties = properties;
	this.duration = duration;
	this._ease = motion.Actuate.defaultEase;
};
$hxClasses["motion.actuators.GenericActuator"] = motion.actuators.GenericActuator;
motion.actuators.GenericActuator.__name__ = ["motion","actuators","GenericActuator"];
motion.actuators.GenericActuator.__interfaces__ = [motion.actuators.IGenericActuator];
motion.actuators.GenericActuator.prototype = {
	apply: function() {
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(Object.prototype.hasOwnProperty.call(this.target,i)) Reflect.setField(this.target,i,Reflect.field(this.properties,i)); else Reflect.setProperty(this.target,i,Reflect.field(this.properties,i));
		}
	}
	,autoVisible: function(value) {
		if(value == null) value = true;
		this._autoVisible = value;
		return this;
	}
	,callMethod: function(method,params) {
		if(params == null) params = [];
		return method.apply(method,params);
	}
	,change: function() {
		if(this._onUpdate != null) this.callMethod(this._onUpdate,this._onUpdateParams);
	}
	,complete: function(sendEvent) {
		if(sendEvent == null) sendEvent = true;
		if(sendEvent) {
			this.change();
			if(this._onComplete != null) this.callMethod(this._onComplete,this._onCompleteParams);
		}
		motion.Actuate.unload(this);
	}
	,delay: function(duration) {
		this._delay = duration;
		return this;
	}
	,ease: function(easing) {
		this._ease = easing;
		return this;
	}
	,move: function() {
	}
	,onComplete: function(handler,parameters) {
		this._onComplete = handler;
		if(parameters == null) this._onCompleteParams = []; else this._onCompleteParams = parameters;
		if(this.duration == 0) this.complete();
		return this;
	}
	,onRepeat: function(handler,parameters) {
		this._onRepeat = handler;
		if(parameters == null) this._onRepeatParams = []; else this._onRepeatParams = parameters;
		return this;
	}
	,onUpdate: function(handler,parameters) {
		this._onUpdate = handler;
		if(parameters == null) this._onUpdateParams = []; else this._onUpdateParams = parameters;
		return this;
	}
	,pause: function() {
	}
	,reflect: function(value) {
		if(value == null) value = true;
		this._reflect = value;
		this.special = true;
		return this;
	}
	,repeat: function(times) {
		if(times == null) times = -1;
		this._repeat = times;
		return this;
	}
	,resume: function() {
	}
	,reverse: function(value) {
		if(value == null) value = true;
		this._reverse = value;
		this.special = true;
		return this;
	}
	,smartRotation: function(value) {
		if(value == null) value = true;
		this._smartRotation = value;
		this.special = true;
		return this;
	}
	,snapping: function(value) {
		if(value == null) value = true;
		this._snapping = value;
		this.special = true;
		return this;
	}
	,stop: function(properties,complete,sendEvent) {
	}
	,__class__: motion.actuators.GenericActuator
};
motion.actuators.SimpleActuator = function(target,duration,properties) {
	this.active = true;
	this.propertyDetails = new Array();
	this.sendChange = false;
	this.paused = false;
	this.cacheVisible = false;
	this.initialized = false;
	this.setVisible = false;
	this.toggleVisible = false;
	this.startTime = flash.Lib.getTimer() / 1000;
	motion.actuators.GenericActuator.call(this,target,duration,properties);
	if(!motion.actuators.SimpleActuator.addedEvent) {
		motion.actuators.SimpleActuator.addedEvent = true;
		flash.Lib.current.stage.addEventListener(flash.events.Event.ENTER_FRAME,motion.actuators.SimpleActuator.stage_onEnterFrame);
	}
};
$hxClasses["motion.actuators.SimpleActuator"] = motion.actuators.SimpleActuator;
motion.actuators.SimpleActuator.__name__ = ["motion","actuators","SimpleActuator"];
motion.actuators.SimpleActuator.stage_onEnterFrame = function(event) {
	var currentTime = flash.Lib.getTimer() / 1000;
	var actuator;
	var j = 0;
	var cleanup = false;
	var _g1 = 0;
	var _g = motion.actuators.SimpleActuator.actuatorsLength;
	while(_g1 < _g) {
		var i = _g1++;
		actuator = motion.actuators.SimpleActuator.actuators[j];
		if(actuator.active) {
			if(currentTime > actuator.timeOffset) actuator.update(currentTime);
			j++;
		} else {
			motion.actuators.SimpleActuator.actuators.splice(j,1);
			--motion.actuators.SimpleActuator.actuatorsLength;
		}
	}
};
motion.actuators.SimpleActuator.__super__ = motion.actuators.GenericActuator;
motion.actuators.SimpleActuator.prototype = $extend(motion.actuators.GenericActuator.prototype,{
	autoVisible: function(value) {
		if(value == null) value = true;
		this._autoVisible = value;
		if(!value) {
			this.toggleVisible = false;
			if(this.setVisible) this.setField(this.target,"visible",this.cacheVisible);
		}
		return this;
	}
	,delay: function(duration) {
		this._delay = duration;
		this.timeOffset = this.startTime + duration;
		return this;
	}
	,getField: function(target,propertyName) {
		var value = null;
		if(Object.prototype.hasOwnProperty.call(target,propertyName)) value = Reflect.field(target,propertyName); else value = Reflect.getProperty(target,propertyName);
		return value;
	}
	,initialize: function() {
		var details;
		var start;
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			var isField = true;
			if(Object.prototype.hasOwnProperty.call(this.target,i)) start = Reflect.field(this.target,i); else {
				isField = false;
				start = Reflect.getProperty(this.target,i);
			}
			if(typeof(start) == "number") {
				details = new motion.actuators.PropertyDetails(this.target,i,start,this.getField(this.properties,i) - start,isField);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,move: function() {
		this.toggleVisible = Object.prototype.hasOwnProperty.call(this.properties,"alpha") && js.Boot.__instanceof(this.target,flash.display.DisplayObject);
		if(this.toggleVisible && this.properties.alpha != 0 && !this.getField(this.target,"visible")) {
			this.setVisible = true;
			this.cacheVisible = this.getField(this.target,"visible");
			this.setField(this.target,"visible",true);
		}
		this.timeOffset = this.startTime;
		motion.actuators.SimpleActuator.actuators.push(this);
		++motion.actuators.SimpleActuator.actuatorsLength;
	}
	,onUpdate: function(handler,parameters) {
		this._onUpdate = handler;
		if(parameters == null) this._onUpdateParams = []; else this._onUpdateParams = parameters;
		this.sendChange = true;
		return this;
	}
	,pause: function() {
		this.paused = true;
		this.pauseTime = flash.Lib.getTimer();
	}
	,resume: function() {
		if(this.paused) {
			this.paused = false;
			this.timeOffset += (flash.Lib.getTimer() - this.pauseTime) / 1000;
		}
	}
	,setField: function(target,propertyName,value) {
		if(Object.prototype.hasOwnProperty.call(target,propertyName)) target[propertyName] = value; else Reflect.setProperty(target,propertyName,value);
	}
	,setProperty: function(details,value) {
		if(details.isField) details.target[details.propertyName] = value; else Reflect.setProperty(details.target,details.propertyName,value);
	}
	,stop: function(properties,complete,sendEvent) {
		if(this.active) {
			if(properties == null) {
				this.active = false;
				if(complete) this.apply();
				this.complete(sendEvent);
				return;
			}
			var _g = 0;
			var _g1 = Reflect.fields(properties);
			while(_g < _g1.length) {
				var i = _g1[_g];
				++_g;
				if(Object.prototype.hasOwnProperty.call(this.properties,i)) {
					this.active = false;
					if(complete) this.apply();
					this.complete(sendEvent);
					return;
				}
			}
		}
	}
	,update: function(currentTime) {
		if(!this.paused) {
			var details;
			var easing;
			var i;
			var tweenPosition = (currentTime - this.timeOffset) / this.duration;
			if(tweenPosition > 1) tweenPosition = 1;
			if(!this.initialized) this.initialize();
			if(!this.special) {
				easing = this._ease.calculate(tweenPosition);
				var _g1 = 0;
				var _g = this.detailsLength;
				while(_g1 < _g) {
					var i1 = _g1++;
					details = this.propertyDetails[i1];
					this.setProperty(details,details.start + details.change * easing);
				}
			} else {
				if(!this._reverse) easing = this._ease.calculate(tweenPosition); else easing = this._ease.calculate(1 - tweenPosition);
				var endValue;
				var _g11 = 0;
				var _g2 = this.detailsLength;
				while(_g11 < _g2) {
					var i2 = _g11++;
					details = this.propertyDetails[i2];
					if(this._smartRotation && (details.propertyName == "rotation" || details.propertyName == "rotationX" || details.propertyName == "rotationY" || details.propertyName == "rotationZ")) {
						var rotation = details.change % 360;
						if(rotation > 180) rotation -= 360; else if(rotation < -180) rotation += 360;
						endValue = details.start + rotation * easing;
					} else endValue = details.start + details.change * easing;
					if(!this._snapping) {
						if(details.isField) details.target[details.propertyName] = endValue; else Reflect.setProperty(details.target,details.propertyName,endValue);
					} else this.setProperty(details,Math.round(endValue));
				}
			}
			if(tweenPosition == 1) {
				if(this._repeat == 0) {
					this.active = false;
					if(this.toggleVisible && this.getField(this.target,"alpha") == 0) this.setField(this.target,"visible",false);
					this.complete(true);
					return;
				} else {
					if(this._onRepeat != null) this.callMethod(this._onRepeat,this._onRepeatParams);
					if(this._reflect) this._reverse = !this._reverse;
					this.startTime = currentTime;
					this.timeOffset = this.startTime + this._delay;
					if(this._repeat > 0) this._repeat--;
				}
			}
			if(this.sendChange) this.change();
		}
	}
	,__class__: motion.actuators.SimpleActuator
});
motion.easing = {};
motion.easing.Expo = function() { };
$hxClasses["motion.easing.Expo"] = motion.easing.Expo;
motion.easing.Expo.__name__ = ["motion","easing","Expo"];
motion.easing.Expo.__properties__ = {get_easeOut:"get_easeOut",get_easeInOut:"get_easeInOut",get_easeIn:"get_easeIn"}
motion.easing.Expo.get_easeIn = function() {
	return new motion.easing.ExpoEaseIn();
};
motion.easing.Expo.get_easeInOut = function() {
	return new motion.easing.ExpoEaseInOut();
};
motion.easing.Expo.get_easeOut = function() {
	return new motion.easing.ExpoEaseOut();
};
motion.easing.IEasing = function() { };
$hxClasses["motion.easing.IEasing"] = motion.easing.IEasing;
motion.easing.IEasing.__name__ = ["motion","easing","IEasing"];
motion.easing.IEasing.prototype = {
	__class__: motion.easing.IEasing
};
motion.easing.ExpoEaseOut = function() {
};
$hxClasses["motion.easing.ExpoEaseOut"] = motion.easing.ExpoEaseOut;
motion.easing.ExpoEaseOut.__name__ = ["motion","easing","ExpoEaseOut"];
motion.easing.ExpoEaseOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.ExpoEaseOut.prototype = {
	calculate: function(k) {
		if(k == 1) return 1; else return 1 - Math.pow(2,-10 * k);
	}
	,ease: function(t,b,c,d) {
		if(t == d) return b + c; else return c * (1 - Math.pow(2,-10 * t / d)) + b;
	}
	,__class__: motion.easing.ExpoEaseOut
};
motion.Actuate = function() { };
$hxClasses["motion.Actuate"] = motion.Actuate;
motion.Actuate.__name__ = ["motion","Actuate"];
motion.Actuate.apply = function(target,properties,customActuator) {
	motion.Actuate.stop(target,properties);
	if(customActuator == null) customActuator = motion.Actuate.defaultActuator;
	var actuator = Type.createInstance(customActuator,[target,0,properties]);
	actuator.apply();
	return actuator;
};
motion.Actuate.effects = function(target,duration,overwrite) {
	if(overwrite == null) overwrite = true;
	return new motion._Actuate.EffectsOptions(target,duration,overwrite);
};
motion.Actuate.getLibrary = function(target,allowCreation) {
	if(allowCreation == null) allowCreation = true;
	if(!motion.Actuate.targetLibraries.exists(target) && allowCreation) motion.Actuate.targetLibraries.set(target,new Array());
	return motion.Actuate.targetLibraries.get(target);
};
motion.Actuate.motionPath = function(target,duration,properties,overwrite) {
	if(overwrite == null) overwrite = true;
	return motion.Actuate.tween(target,duration,properties,overwrite,motion.actuators.MotionPathActuator);
};
motion.Actuate.pause = function(target) {
	if(js.Boot.__instanceof(target,motion.actuators.GenericActuator)) (js.Boot.__cast(target , motion.actuators.GenericActuator)).pause(); else {
		var library = motion.Actuate.getLibrary(target,false);
		if(library != null) {
			var _g = 0;
			while(_g < library.length) {
				var actuator = library[_g];
				++_g;
				actuator.pause();
			}
		}
	}
};
motion.Actuate.pauseAll = function() {
	var $it0 = motion.Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var _g = 0;
		while(_g < library.length) {
			var actuator = library[_g];
			++_g;
			actuator.pause();
		}
	}
};
motion.Actuate.reset = function() {
	var $it0 = motion.Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var i = library.length - 1;
		while(i >= 0) {
			library[i].stop(null,false,false);
			i--;
		}
	}
	motion.Actuate.targetLibraries = new haxe.ds.ObjectMap();
};
motion.Actuate.resume = function(target) {
	if(js.Boot.__instanceof(target,motion.actuators.GenericActuator)) (js.Boot.__cast(target , motion.actuators.GenericActuator)).resume(); else {
		var library = motion.Actuate.getLibrary(target,false);
		if(library != null) {
			var _g = 0;
			while(_g < library.length) {
				var actuator = library[_g];
				++_g;
				actuator.resume();
			}
		}
	}
};
motion.Actuate.resumeAll = function() {
	var $it0 = motion.Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var _g = 0;
		while(_g < library.length) {
			var actuator = library[_g];
			++_g;
			actuator.resume();
		}
	}
};
motion.Actuate.stop = function(target,properties,complete,sendEvent) {
	if(sendEvent == null) sendEvent = true;
	if(complete == null) complete = false;
	if(target != null) {
		if(js.Boot.__instanceof(target,motion.actuators.GenericActuator)) (js.Boot.__cast(target , motion.actuators.GenericActuator)).stop(null,complete,sendEvent); else {
			var library = motion.Actuate.getLibrary(target,false);
			if(library != null) {
				if(typeof(properties) == "string") {
					var temp = { };
					Reflect.setField(temp,properties,null);
					properties = temp;
				} else if((properties instanceof Array) && properties.__enum__ == null) {
					var temp1 = { };
					var _g = 0;
					var _g1;
					_g1 = js.Boot.__cast(properties , Array);
					while(_g < _g1.length) {
						var property = _g1[_g];
						++_g;
						Reflect.setField(temp1,property,null);
					}
					properties = temp1;
				}
				var i = library.length - 1;
				while(i >= 0) {
					library[i].stop(properties,complete,sendEvent);
					i--;
				}
			}
		}
	}
};
motion.Actuate.timer = function(duration,customActuator) {
	return motion.Actuate.tween(new motion._Actuate.TweenTimer(0),duration,new motion._Actuate.TweenTimer(1),false,customActuator);
};
motion.Actuate.transform = function(target,duration,overwrite) {
	if(overwrite == null) overwrite = true;
	if(duration == null) duration = 0;
	return new motion._Actuate.TransformOptions(target,duration,overwrite);
};
motion.Actuate.tween = function(target,duration,properties,overwrite,customActuator) {
	if(overwrite == null) overwrite = true;
	if(target != null) {
		if(duration > 0) {
			if(customActuator == null) customActuator = motion.Actuate.defaultActuator;
			var actuator = Type.createInstance(customActuator,[target,duration,properties]);
			var library = motion.Actuate.getLibrary(actuator.target);
			if(overwrite) {
				var i = library.length - 1;
				while(i >= 0) {
					library[i].stop(actuator.properties,false,false);
					i--;
				}
			}
			library.push(actuator);
			actuator.move();
			return actuator;
		} else return motion.Actuate.apply(target,properties,customActuator);
	}
	return null;
};
motion.Actuate.unload = function(actuator) {
	var target = actuator.target;
	if(motion.Actuate.targetLibraries.h.__keys__[target.__id__] != null) {
		HxOverrides.remove(motion.Actuate.targetLibraries.h[target.__id__],actuator);
		if(motion.Actuate.targetLibraries.h[target.__id__].length == 0) motion.Actuate.targetLibraries.remove(target);
	}
};
motion.Actuate.update = function(target,duration,start,end,overwrite) {
	if(overwrite == null) overwrite = true;
	var properties = { start : start, end : end};
	return motion.Actuate.tween(target,duration,properties,overwrite,motion.actuators.MethodActuator);
};
motion._Actuate = {};
motion._Actuate.EffectsOptions = function(target,duration,overwrite) {
	this.target = target;
	this.duration = duration;
	this.overwrite = overwrite;
};
$hxClasses["motion._Actuate.EffectsOptions"] = motion._Actuate.EffectsOptions;
motion._Actuate.EffectsOptions.__name__ = ["motion","_Actuate","EffectsOptions"];
motion._Actuate.EffectsOptions.prototype = {
	filter: function(reference,properties) {
		properties.filter = reference;
		return motion.Actuate.tween(this.target,this.duration,properties,this.overwrite,motion.actuators.FilterActuator);
	}
	,__class__: motion._Actuate.EffectsOptions
};
motion._Actuate.TransformOptions = function(target,duration,overwrite) {
	this.target = target;
	this.duration = duration;
	this.overwrite = overwrite;
};
$hxClasses["motion._Actuate.TransformOptions"] = motion._Actuate.TransformOptions;
motion._Actuate.TransformOptions.__name__ = ["motion","_Actuate","TransformOptions"];
motion._Actuate.TransformOptions.prototype = {
	color: function(value,strength,alpha) {
		if(strength == null) strength = 1;
		if(value == null) value = 0;
		var properties = { colorValue : value, colorStrength : strength};
		if(alpha != null) properties.colorAlpha = alpha;
		return motion.Actuate.tween(this.target,this.duration,properties,this.overwrite,motion.actuators.TransformActuator);
	}
	,sound: function(volume,pan) {
		var properties = { };
		if(volume != null) properties.soundVolume = volume;
		if(pan != null) properties.soundPan = pan;
		return motion.Actuate.tween(this.target,this.duration,properties,this.overwrite,motion.actuators.TransformActuator);
	}
	,__class__: motion._Actuate.TransformOptions
};
motion._Actuate.TweenTimer = function(progress) {
	this.progress = progress;
};
$hxClasses["motion._Actuate.TweenTimer"] = motion._Actuate.TweenTimer;
motion._Actuate.TweenTimer.__name__ = ["motion","_Actuate","TweenTimer"];
motion._Actuate.TweenTimer.prototype = {
	__class__: motion._Actuate.TweenTimer
};
motion.MotionPath = function() {
	this._x = new motion.ComponentPath();
	this._y = new motion.ComponentPath();
	this._rotation = null;
};
$hxClasses["motion.MotionPath"] = motion.MotionPath;
motion.MotionPath.__name__ = ["motion","MotionPath"];
motion.MotionPath.prototype = {
	bezier: function(x,y,controlX,controlY,strength) {
		if(strength == null) strength = 1;
		this._x.addPath(new motion.BezierPath(x,controlX,strength));
		this._y.addPath(new motion.BezierPath(y,controlY,strength));
		return this;
	}
	,line: function(x,y,strength) {
		if(strength == null) strength = 1;
		this._x.addPath(new motion.LinearPath(x,strength));
		this._y.addPath(new motion.LinearPath(y,strength));
		return this;
	}
	,get_rotation: function() {
		if(this._rotation == null) this._rotation = new motion.RotationPath(this._x,this._y);
		return this._rotation;
	}
	,get_x: function() {
		return this._x;
	}
	,get_y: function() {
		return this._y;
	}
	,__class__: motion.MotionPath
	,__properties__: {get_y:"get_y",get_x:"get_x",get_rotation:"get_rotation"}
};
motion.IComponentPath = function() { };
$hxClasses["motion.IComponentPath"] = motion.IComponentPath;
motion.IComponentPath.__name__ = ["motion","IComponentPath"];
motion.IComponentPath.prototype = {
	__class__: motion.IComponentPath
};
motion.ComponentPath = function() {
	this.paths = new Array();
	this.start = 0;
	this.totalStrength = 0;
};
$hxClasses["motion.ComponentPath"] = motion.ComponentPath;
motion.ComponentPath.__name__ = ["motion","ComponentPath"];
motion.ComponentPath.__interfaces__ = [motion.IComponentPath];
motion.ComponentPath.prototype = {
	addPath: function(path) {
		this.paths.push(path);
		this.totalStrength += path.strength;
	}
	,calculate: function(k) {
		if(this.paths.length == 1) return this.paths[0].calculate(this.start,k); else {
			var ratio = k * this.totalStrength;
			var lastEnd = this.start;
			var _g = 0;
			var _g1 = this.paths;
			while(_g < _g1.length) {
				var path = _g1[_g];
				++_g;
				if(ratio > path.strength) {
					ratio -= path.strength;
					lastEnd = path.end;
				} else return path.calculate(lastEnd,ratio / path.strength);
			}
		}
		return 0;
	}
	,get_end: function() {
		if(this.paths.length > 0) {
			var path = this.paths[this.paths.length - 1];
			return path.end;
		} else return this.start;
	}
	,__class__: motion.ComponentPath
	,__properties__: {get_end:"get_end"}
};
motion.BezierPath = function(end,control,strength) {
	this.end = end;
	this.control = control;
	this.strength = strength;
};
$hxClasses["motion.BezierPath"] = motion.BezierPath;
motion.BezierPath.__name__ = ["motion","BezierPath"];
motion.BezierPath.prototype = {
	calculate: function(start,k) {
		return (1 - k) * (1 - k) * start + 2 * (1 - k) * k * this.control + k * k * this.end;
	}
	,__class__: motion.BezierPath
};
motion.LinearPath = function(end,strength) {
	motion.BezierPath.call(this,end,0,strength);
};
$hxClasses["motion.LinearPath"] = motion.LinearPath;
motion.LinearPath.__name__ = ["motion","LinearPath"];
motion.LinearPath.__super__ = motion.BezierPath;
motion.LinearPath.prototype = $extend(motion.BezierPath.prototype,{
	calculate: function(start,k) {
		return start + k * (this.end - start);
	}
	,__class__: motion.LinearPath
});
motion.RotationPath = function(x,y) {
	this.step = 0.01;
	this._x = x;
	this._y = y;
	this.offset = 0;
	this.start = this.calculate(0.0);
};
$hxClasses["motion.RotationPath"] = motion.RotationPath;
motion.RotationPath.__name__ = ["motion","RotationPath"];
motion.RotationPath.__interfaces__ = [motion.IComponentPath];
motion.RotationPath.prototype = {
	calculate: function(k) {
		var dX = this._x.calculate(k) - this._x.calculate(k + this.step);
		var dY = this._y.calculate(k) - this._y.calculate(k + this.step);
		var angle = Math.atan2(dY,dX) * (180 / Math.PI);
		angle = (angle + this.offset) % 360;
		return angle;
	}
	,get_end: function() {
		return this.calculate(1.0);
	}
	,__class__: motion.RotationPath
	,__properties__: {get_end:"get_end"}
};
motion.actuators.FilterActuator = function(target,duration,properties) {
	this.filterIndex = -1;
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
	if(js.Boot.__instanceof(properties.filter,Class)) {
		this.filterClass = properties.filter;
		var _g = 0;
		var _g1 = (js.Boot.__cast(target , flash.display.DisplayObject)).get_filters();
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			if(js.Boot.__instanceof(filter,this.filterClass)) this.filter = filter;
		}
	} else {
		this.filterIndex = properties.filter;
		this.filter = (js.Boot.__cast(target , flash.display.DisplayObject)).get_filters()[this.filterIndex];
	}
};
$hxClasses["motion.actuators.FilterActuator"] = motion.actuators.FilterActuator;
motion.actuators.FilterActuator.__name__ = ["motion","actuators","FilterActuator"];
motion.actuators.FilterActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.FilterActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	apply: function() {
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(propertyName != "filter") Reflect.setField(this.filter,propertyName,Reflect.field(this.properties,propertyName));
		}
		var filters = this.getField(this.target,"filters");
		Reflect.setField(filters,this.properties.filter,this.filter);
		this.setField(this.target,"filters",filters);
	}
	,initialize: function() {
		var details;
		var start;
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(propertyName != "filter") {
				start = this.getField(this.filter,propertyName);
				details = new motion.actuators.PropertyDetails(this.filter,propertyName,start,Reflect.field(this.properties,propertyName) - start);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,update: function(currentTime) {
		motion.actuators.SimpleActuator.prototype.update.call(this,currentTime);
		var filters = (js.Boot.__cast(this.target , flash.display.DisplayObject)).get_filters();
		if(this.filterIndex > -1) Reflect.setField(filters,this.properties.filter,this.filter); else {
			var _g1 = 0;
			var _g = filters.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(js.Boot.__instanceof(filters[i],this.filterClass)) filters[i] = this.filter;
			}
		}
		this.setField(this.target,"filters",filters);
	}
	,__class__: motion.actuators.FilterActuator
});
motion.actuators.MethodActuator = function(target,duration,properties) {
	this.currentParameters = new Array();
	this.tweenProperties = { };
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
	if(!Object.prototype.hasOwnProperty.call(properties,"start")) this.properties.start = new Array();
	if(!Object.prototype.hasOwnProperty.call(properties,"end")) this.properties.end = this.properties.start;
	var _g1 = 0;
	var _g = this.properties.start.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.currentParameters.push(null);
	}
};
$hxClasses["motion.actuators.MethodActuator"] = motion.actuators.MethodActuator;
motion.actuators.MethodActuator.__name__ = ["motion","actuators","MethodActuator"];
motion.actuators.MethodActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.MethodActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	apply: function() {
		this.callMethod(this.target,this.properties.end);
	}
	,complete: function(sendEvent) {
		if(sendEvent == null) sendEvent = true;
		var _g1 = 0;
		var _g = this.properties.start.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.currentParameters[i] = Reflect.field(this.tweenProperties,"param" + i);
		}
		this.callMethod(this.target,this.currentParameters);
		motion.actuators.SimpleActuator.prototype.complete.call(this,sendEvent);
	}
	,initialize: function() {
		var details;
		var propertyName;
		var start;
		var _g1 = 0;
		var _g = this.properties.start.length;
		while(_g1 < _g) {
			var i = _g1++;
			propertyName = "param" + i;
			start = this.properties.start[i];
			this.tweenProperties[propertyName] = start;
			if(typeof(start) == "number" || ((start | 0) === start)) {
				details = new motion.actuators.PropertyDetails(this.tweenProperties,propertyName,start,this.properties.end[i] - start);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,update: function(currentTime) {
		motion.actuators.SimpleActuator.prototype.update.call(this,currentTime);
		if(this.active) {
			var _g1 = 0;
			var _g = this.properties.start.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.currentParameters[i] = Reflect.field(this.tweenProperties,"param" + i);
			}
			this.callMethod(this.target,this.currentParameters);
		}
	}
	,__class__: motion.actuators.MethodActuator
});
motion.actuators.MotionPathActuator = function(target,duration,properties) {
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
};
$hxClasses["motion.actuators.MotionPathActuator"] = motion.actuators.MotionPathActuator;
motion.actuators.MotionPathActuator.__name__ = ["motion","actuators","MotionPathActuator"];
motion.actuators.MotionPathActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.MotionPathActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	apply: function() {
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(Object.prototype.hasOwnProperty.call(this.target,propertyName)) Reflect.setField(this.target,propertyName,(js.Boot.__cast(Reflect.field(this.properties,propertyName) , motion.IComponentPath)).get_end()); else Reflect.setProperty(this.target,propertyName,(js.Boot.__cast(Reflect.field(this.properties,propertyName) , motion.IComponentPath)).get_end());
		}
	}
	,initialize: function() {
		var details;
		var path;
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			path = js.Boot.__cast(Reflect.field(this.properties,propertyName) , motion.IComponentPath);
			if(path != null) {
				var isField = true;
				if(Object.prototype.hasOwnProperty.call(this.target,propertyName)) path.start = Reflect.field(this.target,propertyName); else {
					isField = false;
					path.start = Reflect.getProperty(this.target,propertyName);
				}
				details = new motion.actuators.PropertyPathDetails(this.target,propertyName,path,isField);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,update: function(currentTime) {
		if(!this.paused) {
			var details;
			var easing;
			var tweenPosition = (currentTime - this.timeOffset) / this.duration;
			if(tweenPosition > 1) tweenPosition = 1;
			if(!this.initialized) this.initialize();
			if(!this.special) {
				easing = this._ease.calculate(tweenPosition);
				var _g = 0;
				var _g1 = this.propertyDetails;
				while(_g < _g1.length) {
					var details1 = _g1[_g];
					++_g;
					if(details1.isField) Reflect.setField(details1.target,details1.propertyName,(js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing)); else Reflect.setProperty(details1.target,details1.propertyName,(js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing));
				}
			} else {
				if(!this._reverse) easing = this._ease.calculate(tweenPosition); else easing = this._ease.calculate(1 - tweenPosition);
				var endValue;
				var _g2 = 0;
				var _g11 = this.propertyDetails;
				while(_g2 < _g11.length) {
					var details2 = _g11[_g2];
					++_g2;
					if(!this._snapping) {
						if(details2.isField) Reflect.setField(details2.target,details2.propertyName,(js.Boot.__cast(details2 , motion.actuators.PropertyPathDetails)).path.calculate(easing)); else Reflect.setProperty(details2.target,details2.propertyName,(js.Boot.__cast(details2 , motion.actuators.PropertyPathDetails)).path.calculate(easing));
					} else if(details2.isField) Reflect.setField(details2.target,details2.propertyName,Math.round((js.Boot.__cast(details2 , motion.actuators.PropertyPathDetails)).path.calculate(easing))); else Reflect.setProperty(details2.target,details2.propertyName,Math.round((js.Boot.__cast(details2 , motion.actuators.PropertyPathDetails)).path.calculate(easing)));
				}
			}
			if(tweenPosition == 1) {
				if(this._repeat == 0) {
					this.active = false;
					if(this.toggleVisible && this.getField(this.target,"alpha") == 0) this.setField(this.target,"visible",false);
					this.complete(true);
					return;
				} else {
					if(this._reflect) this._reverse = !this._reverse;
					this.startTime = currentTime;
					this.timeOffset = this.startTime + this._delay;
					if(this._repeat > 0) this._repeat--;
				}
			}
			if(this.sendChange) this.change();
		}
	}
	,__class__: motion.actuators.MotionPathActuator
});
motion.actuators.PropertyDetails = function(target,propertyName,start,change,isField) {
	if(isField == null) isField = true;
	this.target = target;
	this.propertyName = propertyName;
	this.start = start;
	this.change = change;
	this.isField = isField;
};
$hxClasses["motion.actuators.PropertyDetails"] = motion.actuators.PropertyDetails;
motion.actuators.PropertyDetails.__name__ = ["motion","actuators","PropertyDetails"];
motion.actuators.PropertyDetails.prototype = {
	__class__: motion.actuators.PropertyDetails
};
motion.actuators.PropertyPathDetails = function(target,propertyName,path,isField) {
	if(isField == null) isField = true;
	motion.actuators.PropertyDetails.call(this,target,propertyName,0,0,isField);
	this.path = path;
};
$hxClasses["motion.actuators.PropertyPathDetails"] = motion.actuators.PropertyPathDetails;
motion.actuators.PropertyPathDetails.__name__ = ["motion","actuators","PropertyPathDetails"];
motion.actuators.PropertyPathDetails.__super__ = motion.actuators.PropertyDetails;
motion.actuators.PropertyPathDetails.prototype = $extend(motion.actuators.PropertyDetails.prototype,{
	__class__: motion.actuators.PropertyPathDetails
});
motion.actuators.TransformActuator = function(target,duration,properties) {
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
};
$hxClasses["motion.actuators.TransformActuator"] = motion.actuators.TransformActuator;
motion.actuators.TransformActuator.__name__ = ["motion","actuators","TransformActuator"];
motion.actuators.TransformActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.TransformActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	apply: function() {
		this.initialize();
		if(this.endColorTransform != null) {
			var transform = this.getField(this.target,"transform");
			this.setField(transform,"colorTransform",this.endColorTransform);
		}
		if(this.endSoundTransform != null) this.setField(this.target,"soundTransform",this.endSoundTransform);
	}
	,initialize: function() {
		if(Object.prototype.hasOwnProperty.call(this.properties,"colorValue") && js.Boot.__instanceof(this.target,flash.display.DisplayObject)) this.initializeColor();
		if(Object.prototype.hasOwnProperty.call(this.properties,"soundVolume") || Object.prototype.hasOwnProperty.call(this.properties,"soundPan")) this.initializeSound();
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,initializeColor: function() {
		this.endColorTransform = new flash.geom.ColorTransform();
		var color = this.properties.colorValue;
		var strength = this.properties.colorStrength;
		if(strength < 1) {
			var multiplier;
			var offset;
			if(strength < 0.5) {
				multiplier = 1;
				offset = strength * 2;
			} else {
				multiplier = 1 - (strength - 0.5) * 2;
				offset = 1;
			}
			this.endColorTransform.redMultiplier = multiplier;
			this.endColorTransform.greenMultiplier = multiplier;
			this.endColorTransform.blueMultiplier = multiplier;
			this.endColorTransform.redOffset = offset * (color >> 16 & 255);
			this.endColorTransform.greenOffset = offset * (color >> 8 & 255);
			this.endColorTransform.blueOffset = offset * (color & 255);
		} else {
			this.endColorTransform.redMultiplier = 0;
			this.endColorTransform.greenMultiplier = 0;
			this.endColorTransform.blueMultiplier = 0;
			this.endColorTransform.redOffset = color >> 16 & 255;
			this.endColorTransform.greenOffset = color >> 8 & 255;
			this.endColorTransform.blueOffset = color & 255;
		}
		var propertyNames = ["redMultiplier","greenMultiplier","blueMultiplier","redOffset","greenOffset","blueOffset"];
		if(Object.prototype.hasOwnProperty.call(this.properties,"colorAlpha")) {
			this.endColorTransform.alphaMultiplier = this.properties.colorAlpha;
			propertyNames.push("alphaMultiplier");
		} else this.endColorTransform.alphaMultiplier = this.getField(this.target,"alpha");
		var transform = this.getField(this.target,"transform");
		var begin = this.getField(transform,"colorTransform");
		this.tweenColorTransform = new flash.geom.ColorTransform();
		var details;
		var start;
		var _g = 0;
		while(_g < propertyNames.length) {
			var propertyName = propertyNames[_g];
			++_g;
			start = this.getField(begin,propertyName);
			details = new motion.actuators.PropertyDetails(this.tweenColorTransform,propertyName,start,this.getField(this.endColorTransform,propertyName) - start);
			this.propertyDetails.push(details);
		}
	}
	,initializeSound: function() {
		if(this.getField(this.target,"soundTransform") == null) this.setField(this.target,"soundTransform",new flash.media.SoundTransform());
		var start = this.getField(this.target,"soundTransform");
		this.endSoundTransform = this.getField(this.target,"soundTransform");
		this.tweenSoundTransform = new flash.media.SoundTransform();
		if(Object.prototype.hasOwnProperty.call(this.properties,"soundVolume")) {
			this.endSoundTransform.volume = this.properties.soundVolume;
			this.propertyDetails.push(new motion.actuators.PropertyDetails(this.tweenSoundTransform,"volume",start.volume,this.endSoundTransform.volume - start.volume));
		}
		if(Object.prototype.hasOwnProperty.call(this.properties,"soundPan")) {
			this.endSoundTransform.pan = this.properties.soundPan;
			this.propertyDetails.push(new motion.actuators.PropertyDetails(this.tweenSoundTransform,"pan",start.pan,this.endSoundTransform.pan - start.pan));
		}
	}
	,update: function(currentTime) {
		motion.actuators.SimpleActuator.prototype.update.call(this,currentTime);
		if(this.endColorTransform != null) {
			var transform = this.getField(this.target,"transform");
			this.setField(transform,"colorTransform",this.tweenColorTransform);
		}
		if(this.endSoundTransform != null) this.setField(this.target,"soundTransform",this.tweenSoundTransform);
	}
	,__class__: motion.actuators.TransformActuator
});
motion.easing.ExpoEaseIn = function() {
};
$hxClasses["motion.easing.ExpoEaseIn"] = motion.easing.ExpoEaseIn;
motion.easing.ExpoEaseIn.__name__ = ["motion","easing","ExpoEaseIn"];
motion.easing.ExpoEaseIn.__interfaces__ = [motion.easing.IEasing];
motion.easing.ExpoEaseIn.prototype = {
	calculate: function(k) {
		if(k == 0) return 0; else return Math.pow(2,10 * (k - 1));
	}
	,ease: function(t,b,c,d) {
		if(t == 0) return b; else return c * Math.pow(2,10 * (t / d - 1)) + b;
	}
	,__class__: motion.easing.ExpoEaseIn
};
motion.easing.ExpoEaseInOut = function() {
};
$hxClasses["motion.easing.ExpoEaseInOut"] = motion.easing.ExpoEaseInOut;
motion.easing.ExpoEaseInOut.__name__ = ["motion","easing","ExpoEaseInOut"];
motion.easing.ExpoEaseInOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.ExpoEaseInOut.prototype = {
	calculate: function(k) {
		if(k == 0) return 0;
		if(k == 1) return 1;
		if((k /= 0.5) < 1.0) return 0.5 * Math.pow(2,10 * (k - 1));
		return 0.5 * (2 - Math.pow(2,-10 * --k));
	}
	,ease: function(t,b,c,d) {
		if(t == 0) return b;
		if(t == d) return b + c;
		if((t /= d / 2.0) < 1.0) return c / 2 * Math.pow(2,10 * (t - 1)) + b;
		return c / 2 * (2 - Math.pow(2,-10 * --t)) + b;
	}
	,__class__: motion.easing.ExpoEaseInOut
};
motion.easing.Linear = function() { };
$hxClasses["motion.easing.Linear"] = motion.easing.Linear;
motion.easing.Linear.__name__ = ["motion","easing","Linear"];
motion.easing.Linear.__properties__ = {get_easeNone:"get_easeNone"}
motion.easing.Linear.get_easeNone = function() {
	return new motion.easing.LinearEaseNone();
};
motion.easing.LinearEaseNone = function() {
};
$hxClasses["motion.easing.LinearEaseNone"] = motion.easing.LinearEaseNone;
motion.easing.LinearEaseNone.__name__ = ["motion","easing","LinearEaseNone"];
motion.easing.LinearEaseNone.__interfaces__ = [motion.easing.IEasing];
motion.easing.LinearEaseNone.prototype = {
	calculate: function(k) {
		return k;
	}
	,ease: function(t,b,c,d) {
		return c * t / d + b;
	}
	,__class__: motion.easing.LinearEaseNone
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
	clear: function() {
		this.bitmapData = new haxe.ds.StringMap();
		this.font = new haxe.ds.StringMap();
		this.sound = new haxe.ds.StringMap();
	}
	,__class__: openfl.AssetCache
};
openfl.Assets = function() { };
$hxClasses["openfl.Assets"] = openfl.Assets;
openfl.Assets.__name__ = ["openfl","Assets"];
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
			} else haxe.Log.trace("[openfl.Assets] BitmapData asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 119, className : "openfl.Assets", methodName : "getBitmapData"});
		} else haxe.Log.trace("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 125, className : "openfl.Assets", methodName : "getBitmapData"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 131, className : "openfl.Assets", methodName : "getBitmapData"});
	return null;
};
openfl.Assets.getBytes = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	haxe.Log.trace(symbolName,{ fileName : "Assets.hx", lineNumber : 158, className : "openfl.Assets", methodName : "getBytes"});
	if(library != null) {
		haxe.Log.trace(" exists",{ fileName : "Assets.hx", lineNumber : 164, className : "openfl.Assets", methodName : "getBytes"});
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			if(library.isLocal(symbolName,openfl.AssetType.BINARY)) {
				haxe.Log.trace("library getBytes",{ fileName : "Assets.hx", lineNumber : 171, className : "openfl.Assets", methodName : "getBytes"});
				return library.getBytes(symbolName);
			} else haxe.Log.trace("[openfl.Assets] String or ByteArray asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 176, className : "openfl.Assets", methodName : "getBytes"});
		} else haxe.Log.trace("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 182, className : "openfl.Assets", methodName : "getBytes"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 188, className : "openfl.Assets", methodName : "getBytes"});
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
			} else haxe.Log.trace("[openfl.Assets] Font asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 239, className : "openfl.Assets", methodName : "getFont"});
		} else haxe.Log.trace("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 245, className : "openfl.Assets", methodName : "getFont"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 251, className : "openfl.Assets", methodName : "getFont"});
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
			if(library.isLocal(symbolName,openfl.AssetType.MOVIE_CLIP)) return library.getMovieClip(symbolName); else haxe.Log.trace("[openfl.Assets] MovieClip asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 301, className : "openfl.Assets", methodName : "getMovieClip"});
		} else haxe.Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 307, className : "openfl.Assets", methodName : "getMovieClip"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 313, className : "openfl.Assets", methodName : "getMovieClip"});
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
			} else haxe.Log.trace("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 370, className : "openfl.Assets", methodName : "getMusic"});
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 376, className : "openfl.Assets", methodName : "getMusic"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 382, className : "openfl.Assets", methodName : "getMusic"});
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
		if(library.exists(symbolName,null)) return library.getPath(symbolName); else haxe.Log.trace("[openfl.Assets] There is no asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 417, className : "openfl.Assets", methodName : "getPath"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 423, className : "openfl.Assets", methodName : "getPath"});
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
			} else haxe.Log.trace("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 480, className : "openfl.Assets", methodName : "getSound"});
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 486, className : "openfl.Assets", methodName : "getSound"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 492, className : "openfl.Assets", methodName : "getSound"});
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
			if(library.isLocal(symbolName,openfl.AssetType.TEXT)) return library.getText(symbolName); else haxe.Log.trace("[openfl.Assets] String asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 529, className : "openfl.Assets", methodName : "getText"});
		} else haxe.Log.trace("[openfl.Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 535, className : "openfl.Assets", methodName : "getText"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 541, className : "openfl.Assets", methodName : "getText"});
	return null;
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
		} else haxe.Log.trace("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 706, className : "openfl.Assets", methodName : "loadBitmapData"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 712, className : "openfl.Assets", methodName : "loadBitmapData"});
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
		} else haxe.Log.trace("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 744, className : "openfl.Assets", methodName : "loadBytes"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 750, className : "openfl.Assets", methodName : "loadBytes"});
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
		} else haxe.Log.trace("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 801, className : "openfl.Assets", methodName : "loadFont"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 807, className : "openfl.Assets", methodName : "loadFont"});
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
		library.load(handler);
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + name + "\"",{ fileName : "Assets.hx", lineNumber : 837, className : "openfl.Assets", methodName : "loadLibrary"});
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
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 892, className : "openfl.Assets", methodName : "loadMusic"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 898, className : "openfl.Assets", methodName : "loadMusic"});
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
		} else haxe.Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 928, className : "openfl.Assets", methodName : "loadMovieClip"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 934, className : "openfl.Assets", methodName : "loadMovieClip"});
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
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 991, className : "openfl.Assets", methodName : "loadSound"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 997, className : "openfl.Assets", methodName : "loadSound"});
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
		} else haxe.Log.trace("[openfl.Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 1027, className : "openfl.Assets", methodName : "loadText"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 1033, className : "openfl.Assets", methodName : "loadText"});
	handler(null);
};
openfl.Assets.registerLibrary = function(name,library) {
	if(openfl.Assets.libraries.exists(name)) openfl.Assets.unloadLibrary(name);
	openfl.Assets.libraries.set(name,library);
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
	var keys = openfl.Assets.cache.bitmapData.keys();
	while( keys.hasNext() ) {
		var key = keys.next();
		var libraryName = key.substring(0,key.indexOf(":"));
		var symbolName;
		var pos = key.indexOf(":") + 1;
		symbolName = HxOverrides.substr(key,pos,null);
		if(libraryName == name) openfl.Assets.cache.bitmapData.remove(key);
	}
	openfl.Assets.libraries.remove(name);
};
openfl.AssetData = function() {
};
$hxClasses["openfl.AssetData"] = openfl.AssetData;
openfl.AssetData.__name__ = ["openfl","AssetData"];
openfl.AssetData.prototype = {
	__class__: openfl.AssetData
};
openfl.AssetType = $hxClasses["openfl.AssetType"] = { __ename__ : true, __constructs__ : ["BINARY","FONT","IMAGE","MOVIE_CLIP","MUSIC","SOUND","TEMPLATE","TEXT"] };
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
openfl.display = {};
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
		if(centerPoint == null) centerPoint = new flash.geom.Point();
		this.__centerPoints.push(centerPoint);
		this.__tileUVs.push(new flash.geom.Rectangle(rectangle.get_left() / this.__bitmap.width,rectangle.get_top() / this.__bitmap.height,rectangle.get_right() / this.__bitmap.width,rectangle.get_bottom() / this.__bitmap.height));
		return this.__tileRects.length - 1;
	}
	,drawTiles: function(graphics,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		graphics.drawTiles(this,tileData,smooth,flags);
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
Xml.Element = "element";
Xml.PCData = "pcdata";
Xml.CData = "cdata";
Xml.Comment = "comment";
Xml.DocType = "doctype";
Xml.ProcessingInstruction = "processingInstruction";
Xml.Document = "document";
if(window.createjs != null) createjs.Sound.alternateExtensions = ["ogg","mp3","wav"];
haxe.Resource.content = [];
ApplicationMain.images = new haxe.ds.StringMap();
ApplicationMain.urlLoaders = new haxe.ds.StringMap();
ApplicationMain.assetsLoaded = 0;
ApplicationMain.total = 0;
flash.display.DisplayObject.__instanceCount = 0;
flash.display.DisplayObject.__worldRenderDirty = 0;
flash.display.DisplayObject.__worldTransformDirty = 0;
DefaultAssetLibrary.className = new haxe.ds.StringMap();
DefaultAssetLibrary.path = new haxe.ds.StringMap();
DefaultAssetLibrary.type = new haxe.ds.StringMap();
flash.Lib.__startTime = haxe.Timer.stamp();
flash.display.BitmapData.__base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
flash.display.BitmapDataChannel.ALPHA = 8;
flash.display.BitmapDataChannel.BLUE = 4;
flash.display.BitmapDataChannel.GREEN = 2;
flash.display.BitmapDataChannel.RED = 1;
flash.display._CapsStyle.CapsStyle_Impl_.NONE = "butt";
flash.display._CapsStyle.CapsStyle_Impl_.ROUND = "round";
flash.display._CapsStyle.CapsStyle_Impl_.SQUARE = "square";
flash.display.Graphics.TILE_SCALE = 1;
flash.display.Graphics.TILE_ROTATION = 2;
flash.display.Graphics.TILE_RGB = 4;
flash.display.Graphics.TILE_ALPHA = 8;
flash.display.Graphics.TILE_TRANS_2x2 = 16;
flash.display.Graphics.TILE_BLEND_NORMAL = 0;
flash.display.Graphics.TILE_BLEND_ADD = 65536;
flash.display._JointStyle.JointStyle_Impl_.MITER = "miter";
flash.display._JointStyle.JointStyle_Impl_.ROUND = "round";
flash.display._JointStyle.JointStyle_Impl_.BEVEL = "bevel";
flash.display._StageQuality.StageQuality_Impl_.BEST = "best";
flash.display._StageQuality.StageQuality_Impl_.HIGH = "high";
flash.display._StageQuality.StageQuality_Impl_.MEDIUM = "medium";
flash.display._StageQuality.StageQuality_Impl_.LOW = "low";
flash.errors.Error.DEFAULT_TO_STRING = "Error";
flash.events.Event.ACTIVATE = "activate";
flash.events.Event.ADDED = "added";
flash.events.Event.ADDED_TO_STAGE = "addedToStage";
flash.events.Event.CANCEL = "cancel";
flash.events.Event.CHANGE = "change";
flash.events.Event.CLOSE = "close";
flash.events.Event.COMPLETE = "complete";
flash.events.Event.CONNECT = "connect";
flash.events.Event.CONTEXT3D_CREATE = "context3DCreate";
flash.events.Event.DEACTIVATE = "deactivate";
flash.events.Event.ENTER_FRAME = "enterFrame";
flash.events.Event.ID3 = "id3";
flash.events.Event.INIT = "init";
flash.events.Event.MOUSE_LEAVE = "mouseLeave";
flash.events.Event.OPEN = "open";
flash.events.Event.REMOVED = "removed";
flash.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
flash.events.Event.RENDER = "render";
flash.events.Event.RESIZE = "resize";
flash.events.Event.SCROLL = "scroll";
flash.events.Event.SELECT = "select";
flash.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
flash.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
flash.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
flash.events.Event.UNLOAD = "unload";
flash.events.Event.SOUND_COMPLETE = "soundComplete";
flash.events.TextEvent.LINK = "link";
flash.events.TextEvent.TEXT_INPUT = "textInput";
flash.events.ErrorEvent.ERROR = "error";
flash.events._EventPhase.EventPhase_Impl_.CAPTURING_PHASE = 0;
flash.events._EventPhase.EventPhase_Impl_.AT_TARGET = 1;
flash.events._EventPhase.EventPhase_Impl_.BUBBLING_PHASE = 2;
flash.events.FocusEvent.FOCUS_IN = "focusIn";
flash.events.FocusEvent.FOCUS_OUT = "focusOut";
flash.events.FocusEvent.KEY_FOCUS_CHANGE = "keyFocusChange";
flash.events.FocusEvent.MOUSE_FOCUS_CHANGE = "mouseFocusChange";
flash.events.HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus";
flash.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus";
flash.events.IOErrorEvent.IO_ERROR = "ioError";
flash.events.KeyboardEvent.KEY_DOWN = "keyDown";
flash.events.KeyboardEvent.KEY_UP = "keyUp";
flash.events.MouseEvent.CLICK = "click";
flash.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
flash.events.MouseEvent.MOUSE_DOWN = "mouseDown";
flash.events.MouseEvent.MOUSE_MOVE = "mouseMove";
flash.events.MouseEvent.MOUSE_OUT = "mouseOut";
flash.events.MouseEvent.MOUSE_OVER = "mouseOver";
flash.events.MouseEvent.MOUSE_UP = "mouseUp";
flash.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
flash.events.MouseEvent.RIGHT_CLICK = "rightClick";
flash.events.MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
flash.events.MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
flash.events.MouseEvent.ROLL_OUT = "rollOut";
flash.events.MouseEvent.ROLL_OVER = "rollOver";
flash.events.ProgressEvent.PROGRESS = "progress";
flash.events.ProgressEvent.SOCKET_DATA = "socketData";
flash.events.SecurityErrorEvent.SECURITY_ERROR = "securityError";
flash.events.TimerEvent.TIMER = "timer";
flash.events.TimerEvent.TIMER_COMPLETE = "timerComplete";
flash.events.TouchEvent.TOUCH_BEGIN = "touchBegin";
flash.events.TouchEvent.TOUCH_END = "touchEnd";
flash.events.TouchEvent.TOUCH_MOVE = "touchMove";
flash.events.TouchEvent.TOUCH_OUT = "touchOut";
flash.events.TouchEvent.TOUCH_OVER = "touchOver";
flash.events.TouchEvent.TOUCH_ROLL_OUT = "touchRollOut";
flash.events.TouchEvent.TOUCH_ROLL_OVER = "touchRollOver";
flash.events.TouchEvent.TOUCH_TAP = "touchTap";
flash.geom.Matrix.__identity = new flash.geom.Matrix();
flash.media.Sound.__registeredSounds = new haxe.ds.StringMap();
flash.net.URLRequestMethod.DELETE = "DELETE";
flash.net.URLRequestMethod.GET = "GET";
flash.net.URLRequestMethod.HEAD = "HEAD";
flash.net.URLRequestMethod.OPTIONS = "OPTIONS";
flash.net.URLRequestMethod.POST = "POST";
flash.net.URLRequestMethod.PUT = "PUT";
flash.system.ApplicationDomain.currentDomain = new flash.system.ApplicationDomain(null);
flash.system.Capabilities.hasAccessibility = false;
flash.system.SecurityDomain.currentDomain = new flash.system.SecurityDomain();
flash.text._AntiAliasType.AntiAliasType_Impl_.ADVANCED = "advanced";
flash.text._AntiAliasType.AntiAliasType_Impl_.NORMAL = "normal";
flash.ui._KeyLocation.KeyLocation_Impl_.STANDARD = 0;
flash.ui._KeyLocation.KeyLocation_Impl_.LEFT = 1;
flash.ui._KeyLocation.KeyLocation_Impl_.RIGHT = 2;
flash.ui._KeyLocation.KeyLocation_Impl_.NUM_PAD = 3;
flash.ui.Keyboard.NUMBER_0 = 48;
flash.ui.Keyboard.NUMBER_1 = 49;
flash.ui.Keyboard.NUMBER_2 = 50;
flash.ui.Keyboard.NUMBER_3 = 51;
flash.ui.Keyboard.NUMBER_4 = 52;
flash.ui.Keyboard.NUMBER_5 = 53;
flash.ui.Keyboard.NUMBER_6 = 54;
flash.ui.Keyboard.NUMBER_7 = 55;
flash.ui.Keyboard.NUMBER_8 = 56;
flash.ui.Keyboard.NUMBER_9 = 57;
flash.ui.Keyboard.A = 65;
flash.ui.Keyboard.B = 66;
flash.ui.Keyboard.C = 67;
flash.ui.Keyboard.D = 68;
flash.ui.Keyboard.E = 69;
flash.ui.Keyboard.F = 70;
flash.ui.Keyboard.G = 71;
flash.ui.Keyboard.H = 72;
flash.ui.Keyboard.I = 73;
flash.ui.Keyboard.J = 74;
flash.ui.Keyboard.K = 75;
flash.ui.Keyboard.L = 76;
flash.ui.Keyboard.M = 77;
flash.ui.Keyboard.N = 78;
flash.ui.Keyboard.O = 79;
flash.ui.Keyboard.P = 80;
flash.ui.Keyboard.Q = 81;
flash.ui.Keyboard.R = 82;
flash.ui.Keyboard.S = 83;
flash.ui.Keyboard.T = 84;
flash.ui.Keyboard.U = 85;
flash.ui.Keyboard.V = 86;
flash.ui.Keyboard.W = 87;
flash.ui.Keyboard.X = 88;
flash.ui.Keyboard.Y = 89;
flash.ui.Keyboard.Z = 90;
flash.ui.Keyboard.NUMPAD_0 = 96;
flash.ui.Keyboard.NUMPAD_1 = 97;
flash.ui.Keyboard.NUMPAD_2 = 98;
flash.ui.Keyboard.NUMPAD_3 = 99;
flash.ui.Keyboard.NUMPAD_4 = 100;
flash.ui.Keyboard.NUMPAD_5 = 101;
flash.ui.Keyboard.NUMPAD_6 = 102;
flash.ui.Keyboard.NUMPAD_7 = 103;
flash.ui.Keyboard.NUMPAD_8 = 104;
flash.ui.Keyboard.NUMPAD_9 = 105;
flash.ui.Keyboard.NUMPAD_MULTIPLY = 106;
flash.ui.Keyboard.NUMPAD_ADD = 107;
flash.ui.Keyboard.NUMPAD_ENTER = 108;
flash.ui.Keyboard.NUMPAD_SUBTRACT = 109;
flash.ui.Keyboard.NUMPAD_DECIMAL = 110;
flash.ui.Keyboard.NUMPAD_DIVIDE = 111;
flash.ui.Keyboard.F1 = 112;
flash.ui.Keyboard.F2 = 113;
flash.ui.Keyboard.F3 = 114;
flash.ui.Keyboard.F4 = 115;
flash.ui.Keyboard.F5 = 116;
flash.ui.Keyboard.F6 = 117;
flash.ui.Keyboard.F7 = 118;
flash.ui.Keyboard.F8 = 119;
flash.ui.Keyboard.F9 = 120;
flash.ui.Keyboard.F10 = 121;
flash.ui.Keyboard.F11 = 122;
flash.ui.Keyboard.F12 = 123;
flash.ui.Keyboard.F13 = 124;
flash.ui.Keyboard.F14 = 125;
flash.ui.Keyboard.F15 = 126;
flash.ui.Keyboard.BACKSPACE = 8;
flash.ui.Keyboard.TAB = 9;
flash.ui.Keyboard.ALTERNATE = 18;
flash.ui.Keyboard.ENTER = 13;
flash.ui.Keyboard.COMMAND = 15;
flash.ui.Keyboard.SHIFT = 16;
flash.ui.Keyboard.CONTROL = 17;
flash.ui.Keyboard.CAPS_LOCK = 20;
flash.ui.Keyboard.NUMPAD = 21;
flash.ui.Keyboard.ESCAPE = 27;
flash.ui.Keyboard.SPACE = 32;
flash.ui.Keyboard.PAGE_UP = 33;
flash.ui.Keyboard.PAGE_DOWN = 34;
flash.ui.Keyboard.END = 35;
flash.ui.Keyboard.HOME = 36;
flash.ui.Keyboard.LEFT = 37;
flash.ui.Keyboard.RIGHT = 39;
flash.ui.Keyboard.UP = 38;
flash.ui.Keyboard.DOWN = 40;
flash.ui.Keyboard.INSERT = 45;
flash.ui.Keyboard.DELETE = 46;
flash.ui.Keyboard.NUMLOCK = 144;
flash.ui.Keyboard.BREAK = 19;
flash.ui.Keyboard.SEMICOLON = 186;
flash.ui.Keyboard.EQUAL = 187;
flash.ui.Keyboard.COMMA = 188;
flash.ui.Keyboard.MINUS = 189;
flash.ui.Keyboard.PERIOD = 190;
flash.ui.Keyboard.SLASH = 191;
flash.ui.Keyboard.BACKQUOTE = 192;
flash.ui.Keyboard.LEFTBRACKET = 219;
flash.ui.Keyboard.BACKSLASH = 220;
flash.ui.Keyboard.RIGHTBRACKET = 221;
flash.ui.Keyboard.QUOTE = 222;
flash.ui.Keyboard.DOM_VK_CANCEL = 3;
flash.ui.Keyboard.DOM_VK_HELP = 6;
flash.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
flash.ui.Keyboard.DOM_VK_TAB = 9;
flash.ui.Keyboard.DOM_VK_CLEAR = 12;
flash.ui.Keyboard.DOM_VK_RETURN = 13;
flash.ui.Keyboard.DOM_VK_ENTER = 14;
flash.ui.Keyboard.DOM_VK_SHIFT = 16;
flash.ui.Keyboard.DOM_VK_CONTROL = 17;
flash.ui.Keyboard.DOM_VK_ALT = 18;
flash.ui.Keyboard.DOM_VK_PAUSE = 19;
flash.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
flash.ui.Keyboard.DOM_VK_ESCAPE = 27;
flash.ui.Keyboard.DOM_VK_SPACE = 32;
flash.ui.Keyboard.DOM_VK_PAGE_UP = 33;
flash.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
flash.ui.Keyboard.DOM_VK_END = 35;
flash.ui.Keyboard.DOM_VK_HOME = 36;
flash.ui.Keyboard.DOM_VK_LEFT = 37;
flash.ui.Keyboard.DOM_VK_UP = 38;
flash.ui.Keyboard.DOM_VK_RIGHT = 39;
flash.ui.Keyboard.DOM_VK_DOWN = 40;
flash.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
flash.ui.Keyboard.DOM_VK_INSERT = 45;
flash.ui.Keyboard.DOM_VK_DELETE = 46;
flash.ui.Keyboard.DOM_VK_0 = 48;
flash.ui.Keyboard.DOM_VK_1 = 49;
flash.ui.Keyboard.DOM_VK_2 = 50;
flash.ui.Keyboard.DOM_VK_3 = 51;
flash.ui.Keyboard.DOM_VK_4 = 52;
flash.ui.Keyboard.DOM_VK_5 = 53;
flash.ui.Keyboard.DOM_VK_6 = 54;
flash.ui.Keyboard.DOM_VK_7 = 55;
flash.ui.Keyboard.DOM_VK_8 = 56;
flash.ui.Keyboard.DOM_VK_9 = 57;
flash.ui.Keyboard.DOM_VK_SEMICOLON = 59;
flash.ui.Keyboard.DOM_VK_EQUALS = 61;
flash.ui.Keyboard.DOM_VK_A = 65;
flash.ui.Keyboard.DOM_VK_B = 66;
flash.ui.Keyboard.DOM_VK_C = 67;
flash.ui.Keyboard.DOM_VK_D = 68;
flash.ui.Keyboard.DOM_VK_E = 69;
flash.ui.Keyboard.DOM_VK_F = 70;
flash.ui.Keyboard.DOM_VK_G = 71;
flash.ui.Keyboard.DOM_VK_H = 72;
flash.ui.Keyboard.DOM_VK_I = 73;
flash.ui.Keyboard.DOM_VK_J = 74;
flash.ui.Keyboard.DOM_VK_K = 75;
flash.ui.Keyboard.DOM_VK_L = 76;
flash.ui.Keyboard.DOM_VK_M = 77;
flash.ui.Keyboard.DOM_VK_N = 78;
flash.ui.Keyboard.DOM_VK_O = 79;
flash.ui.Keyboard.DOM_VK_P = 80;
flash.ui.Keyboard.DOM_VK_Q = 81;
flash.ui.Keyboard.DOM_VK_R = 82;
flash.ui.Keyboard.DOM_VK_S = 83;
flash.ui.Keyboard.DOM_VK_T = 84;
flash.ui.Keyboard.DOM_VK_U = 85;
flash.ui.Keyboard.DOM_VK_V = 86;
flash.ui.Keyboard.DOM_VK_W = 87;
flash.ui.Keyboard.DOM_VK_X = 88;
flash.ui.Keyboard.DOM_VK_Y = 89;
flash.ui.Keyboard.DOM_VK_Z = 90;
flash.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
flash.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
flash.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
flash.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
flash.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
flash.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
flash.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
flash.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
flash.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
flash.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
flash.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
flash.ui.Keyboard.DOM_VK_MULTIPLY = 106;
flash.ui.Keyboard.DOM_VK_ADD = 107;
flash.ui.Keyboard.DOM_VK_SEPARATOR = 108;
flash.ui.Keyboard.DOM_VK_SUBTRACT = 109;
flash.ui.Keyboard.DOM_VK_DECIMAL = 110;
flash.ui.Keyboard.DOM_VK_DIVIDE = 111;
flash.ui.Keyboard.DOM_VK_F1 = 112;
flash.ui.Keyboard.DOM_VK_F2 = 113;
flash.ui.Keyboard.DOM_VK_F3 = 114;
flash.ui.Keyboard.DOM_VK_F4 = 115;
flash.ui.Keyboard.DOM_VK_F5 = 116;
flash.ui.Keyboard.DOM_VK_F6 = 117;
flash.ui.Keyboard.DOM_VK_F7 = 118;
flash.ui.Keyboard.DOM_VK_F8 = 119;
flash.ui.Keyboard.DOM_VK_F9 = 120;
flash.ui.Keyboard.DOM_VK_F10 = 121;
flash.ui.Keyboard.DOM_VK_F11 = 122;
flash.ui.Keyboard.DOM_VK_F12 = 123;
flash.ui.Keyboard.DOM_VK_F13 = 124;
flash.ui.Keyboard.DOM_VK_F14 = 125;
flash.ui.Keyboard.DOM_VK_F15 = 126;
flash.ui.Keyboard.DOM_VK_F16 = 127;
flash.ui.Keyboard.DOM_VK_F17 = 128;
flash.ui.Keyboard.DOM_VK_F18 = 129;
flash.ui.Keyboard.DOM_VK_F19 = 130;
flash.ui.Keyboard.DOM_VK_F20 = 131;
flash.ui.Keyboard.DOM_VK_F21 = 132;
flash.ui.Keyboard.DOM_VK_F22 = 133;
flash.ui.Keyboard.DOM_VK_F23 = 134;
flash.ui.Keyboard.DOM_VK_F24 = 135;
flash.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
flash.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
flash.ui.Keyboard.DOM_VK_COMMA = 188;
flash.ui.Keyboard.DOM_VK_PERIOD = 190;
flash.ui.Keyboard.DOM_VK_SLASH = 191;
flash.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
flash.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
flash.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
flash.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
flash.ui.Keyboard.DOM_VK_QUOTE = 222;
flash.ui.Keyboard.DOM_VK_META = 224;
flash.ui.Keyboard.DOM_VK_KANA = 21;
flash.ui.Keyboard.DOM_VK_HANGUL = 21;
flash.ui.Keyboard.DOM_VK_JUNJA = 23;
flash.ui.Keyboard.DOM_VK_FINAL = 24;
flash.ui.Keyboard.DOM_VK_HANJA = 25;
flash.ui.Keyboard.DOM_VK_KANJI = 25;
flash.ui.Keyboard.DOM_VK_CONVERT = 28;
flash.ui.Keyboard.DOM_VK_NONCONVERT = 29;
flash.ui.Keyboard.DOM_VK_ACEPT = 30;
flash.ui.Keyboard.DOM_VK_MODECHANGE = 31;
flash.ui.Keyboard.DOM_VK_SELECT = 41;
flash.ui.Keyboard.DOM_VK_PRINT = 42;
flash.ui.Keyboard.DOM_VK_EXECUTE = 43;
flash.ui.Keyboard.DOM_VK_SLEEP = 95;
flash.utils.Endian.BIG_ENDIAN = "bigEndian";
flash.utils.Endian.LITTLE_ENDIAN = "littleEndian";
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.CODES = null;
haxe.crypto.Base64.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
haxe.crypto.Base64.BYTES = haxe.io.Bytes.ofString(haxe.crypto.Base64.CHARS);
haxe.ds.ObjectMap.count = 0;
haxe.ui.toolkit.core.DisplayObject.__meta__ = { fields : { onInit : { exclude : null}, set_onInit : { exclude : null}, onResize : { exclude : null}, set_onResize : { exclude : null}, onReady : { exclude : null}, set_onReady : { exclude : null}, onClick : { exclude : null}, set_onClick : { exclude : null}, onMouseDown : { exclude : null}, set_onMouseDown : { exclude : null}, onMouseUp : { exclude : null}, set_onMouseUp : { exclude : null}, onMouseOver : { exclude : null}, set_onMouseOver : { exclude : null}, onMouseOut : { exclude : null}, set_onMouseOut : { exclude : null}, onMouseMove : { exclude : null}, set_onMouseMove : { exclude : null}, onDoubleClick : { exclude : null}, set_onDoubleClick : { exclude : null}, onRollOver : { exclude : null}, set_onRollOver : { exclude : null}, onRollOut : { exclude : null}, set_onRollOut : { exclude : null}, onChange : { exclude : null}, set_onChange : { exclude : null}, onScroll : { exclude : null}, set_onScroll : { exclude : null}, onAdded : { exclude : null}, set_onAdded : { exclude : null}, onAddedToStage : { exclude : null}, set_onAddedToStage : { exclude : null}, onRemoved : { exclude : null}, set_onRemoved : { exclude : null}, onRemovedFromStage : { exclude : null}, set_onRemovedFromStage : { exclude : null}, onActivate : { exclude : null}, set_onActivate : { exclude : null}, onDeactivate : { exclude : null}, set_onDeactivate : { exclude : null}, onGlyphClick : { exclude : null}, set_onGlyphClick : { exclude : null}}};
haxe.ui.toolkit.controls.Button.STATE_NORMAL = "normal";
haxe.ui.toolkit.controls.Button.STATE_OVER = "over";
haxe.ui.toolkit.controls.Button.STATE_DOWN = "down";
haxe.ui.toolkit.controls.Button.STATE_DISABLED = "disabled";
haxe.ui.toolkit.containers.AccordionButton.__meta__ = { obj : { exclude : null}};
haxe.ui.toolkit.containers.CalendarView.MONTH_NAMES = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
haxe.ui.toolkit.containers.ExpandableButton.__meta__ = { obj : { exclude : null}};
haxe.ui.toolkit.containers.FrameLayout.__meta__ = { obj : { exclude : null}};
haxe.ui.toolkit.containers.ListView.__meta__ = { fields : { onComponentEvent : { exclude : null}, set_onComponentEvent : { exclude : null}}};
haxe.ui.toolkit.containers.RTFToolButton.__meta__ = { obj : { exclude : null}};
haxe.ui.toolkit.containers.ScrollViewLayout.__meta__ = { obj : { exclude : null}};
haxe.ui.toolkit.containers.TableViewRow.STATE_NORMAL = "normal";
haxe.ui.toolkit.containers.TableViewRow.STATE_OVER = "over";
haxe.ui.toolkit.containers.TableViewRow.STATE_SELECTED = "selected";
haxe.ui.toolkit.controls.ButtonLayout.__meta__ = { obj : { exclude : null}};
haxe.ui.toolkit.controls.CalendarDay.__meta__ = { obj : { exclude : null}};
haxe.ui.toolkit.controls.CalendarLayout.__meta__ = { obj : { exclude : null}};
haxe.ui.toolkit.controls.CheckBoxValue.__meta__ = { obj : { exclude : null}};
haxe.ui.toolkit.controls.HScrollLayout.__meta__ = { obj : { exclude : null}};
haxe.ui.toolkit.controls.OptionBoxValue.__meta__ = { obj : { exclude : null}};
haxe.ui.toolkit.controls.HProgressLayout.__meta__ = { obj : { exclude : null}};
haxe.ui.toolkit.controls.VProgressLayout.__meta__ = { obj : { exclude : null}};
haxe.ui.toolkit.controls.TextInputLayout.__meta__ = { obj : { exclude : null}};
haxe.ui.toolkit.controls.VScrollLayout.__meta__ = { obj : { exclude : null}};
haxe.ui.toolkit.controls.popups.Popup.__meta__ = { fields : { clickButton : { exclude : null}}};
haxe.ui.toolkit.core.Macros.componentClasses = new haxe.ds.StringMap();
haxe.ui.toolkit.core.PopupButton.OK = 1;
haxe.ui.toolkit.core.PopupButton.YES = 16;
haxe.ui.toolkit.core.PopupButton.NO = 256;
haxe.ui.toolkit.core.PopupButton.CANCEL = 4096;
haxe.ui.toolkit.core.PopupButton.CONFIRM = 65536;
haxe.ui.toolkit.core.PopupButton.CUSTOM = 1048576;
haxe.ui.toolkit.core.Toolkit._useDefaultStyles = true;
haxe.ui.toolkit.core.Toolkit._defaultTransition = "slide";
haxe.ui.toolkit.core.base.HorizontalAlign.LEFT = "left";
haxe.ui.toolkit.core.base.HorizontalAlign.RIGHT = "right";
haxe.ui.toolkit.core.base.HorizontalAlign.CENTER = "center";
haxe.ui.toolkit.core.base.State.NORMAL = "normal";
haxe.ui.toolkit.core.base.State.OVER = "over";
haxe.ui.toolkit.core.base.State.DOWN = "down";
haxe.ui.toolkit.core.base.State.DISABLED = "disabled";
haxe.ui.toolkit.core.base.VerticalAlign.TOP = "top";
haxe.ui.toolkit.core.base.VerticalAlign.BOTTOM = "bottom";
haxe.ui.toolkit.core.base.VerticalAlign.CENTER = "center";
haxe.ui.toolkit.core.interfaces.Direction.HORIZONTAL = "horizontal";
haxe.ui.toolkit.core.interfaces.Direction.VERTICAL = "vertical";
haxe.ui.toolkit.core.interfaces.InvalidationFlag.LAYOUT = 1;
haxe.ui.toolkit.core.interfaces.InvalidationFlag.DISPLAY = 16;
haxe.ui.toolkit.core.interfaces.InvalidationFlag.SIZE = 256;
haxe.ui.toolkit.core.interfaces.InvalidationFlag.STATE = 4096;
haxe.ui.toolkit.core.interfaces.InvalidationFlag.DATA = 65536;
haxe.ui.toolkit.core.interfaces.InvalidationFlag.STYLE = 1048576;
haxe.ui.toolkit.core.interfaces.InvalidationFlag.ALL = 1118481;
haxe.ui.toolkit.core.renderers.ItemRenderer.STATE_NORMAL = "normal";
haxe.ui.toolkit.core.renderers.ItemRenderer.STATE_OVER = "over";
haxe.ui.toolkit.core.renderers.ItemRenderer.STATE_SELECTED = "selected";
haxe.ui.toolkit.core.renderers.ItemRenderer.STATE_DISABLED = "disabled";
haxe.ui.toolkit.data.DataSource.SAFE_NUM = 2147483647;
haxe.ui.toolkit.data.DataSource.clsId = 0;
haxe.ui.toolkit.events.MenuEvent.SELECT = flash.events.Event.SELECT;
haxe.ui.toolkit.events.MenuEvent.OPEN = flash.events.Event.OPEN;
haxe.ui.toolkit.events.UIEvent.PREFIX = "haxeui_";
haxe.ui.toolkit.events.UIEvent.INIT = "haxeui_" + "init";
haxe.ui.toolkit.events.UIEvent.RESIZE = "haxeui_" + "resize";
haxe.ui.toolkit.events.UIEvent.READY = "haxeui_" + "ready";
haxe.ui.toolkit.events.UIEvent.CLICK = "haxeui_" + "click";
haxe.ui.toolkit.events.UIEvent.MOUSE_DOWN = "haxeui_" + "mouseDown";
haxe.ui.toolkit.events.UIEvent.MOUSE_UP = "haxeui_" + "mouseUp";
haxe.ui.toolkit.events.UIEvent.MOUSE_OVER = "haxeui_" + "mouseOver";
haxe.ui.toolkit.events.UIEvent.MOUSE_OUT = "haxeui_" + "mouseOut";
haxe.ui.toolkit.events.UIEvent.MOUSE_MOVE = "haxeui_" + "mouseMove";
haxe.ui.toolkit.events.UIEvent.DOUBLE_CLICK = "haxeui_" + "doubleClick";
haxe.ui.toolkit.events.UIEvent.ROLL_OVER = "haxeui_" + "rollOver";
haxe.ui.toolkit.events.UIEvent.ROLL_OUT = "haxeui_" + "rollOut";
haxe.ui.toolkit.events.UIEvent.CHANGE = "haxeui_" + "change";
haxe.ui.toolkit.events.UIEvent.SCROLL = "haxeui_" + "scroll";
haxe.ui.toolkit.events.UIEvent.ADDED = "haxeui_" + "added";
haxe.ui.toolkit.events.UIEvent.ADDED_TO_STAGE = "haxeui_" + "addedToStage";
haxe.ui.toolkit.events.UIEvent.REMOVED = "haxeui_" + "removed";
haxe.ui.toolkit.events.UIEvent.REMOVED_FROM_STAGE = "haxeui_" + "removedFromStage";
haxe.ui.toolkit.events.UIEvent.ACTIVATE = "haxeui_" + "activate";
haxe.ui.toolkit.events.UIEvent.DEACTIVATE = "haxeui_" + "deactivate";
haxe.ui.toolkit.events.UIEvent.GLYPH_CLICK = "haxeui_" + "glyphClick";
haxe.ui.toolkit.events.UIEvent.COMPONENT_EVENT = "haxeui_" + "componentEvent";
haxe.ui.toolkit.style.Style.NONE = -2;
haxe.ui.toolkit.text.TextDisplay.X_PADDING = 0;
haxe.ui.toolkit.text.TextDisplay.Y_PADDING = 2;
haxe.ui.toolkit.util.FilterParser.filterParamDefaults = { blur : ["4","4","1"], dropShadow : ["4","45","0","1","4","4","1","1","false","false","false"], glow : ["16711680","1","6","6","2","1","false","false"]};
haxe.ui.toolkit.util.Identifier._objectCount = new haxe.ds.StringMap();
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
hscript.Parser.p1 = 0;
hscript.Parser.readPos = 0;
hscript.Parser.tokenMin = 0;
hscript.Parser.tokenMax = 0;
motion.actuators.SimpleActuator.actuators = new Array();
motion.actuators.SimpleActuator.actuatorsLength = 0;
motion.actuators.SimpleActuator.addedEvent = false;
motion.Actuate.defaultActuator = motion.actuators.SimpleActuator;
motion.Actuate.defaultEase = motion.easing.Expo.get_easeOut();
motion.Actuate.targetLibraries = new haxe.ds.ObjectMap();
openfl.Assets.cache = new openfl.AssetCache();
openfl.Assets.libraries = new haxe.ds.StringMap();
openfl.Assets.initialized = false;
openfl.display.Tilesheet.TILE_SCALE = 1;
openfl.display.Tilesheet.TILE_ROTATION = 2;
openfl.display.Tilesheet.TILE_RGB = 4;
openfl.display.Tilesheet.TILE_ALPHA = 8;
openfl.display.Tilesheet.TILE_TRANS_2x2 = 16;
openfl.display.Tilesheet.TILE_BLEND_NORMAL = 0;
openfl.display.Tilesheet.TILE_BLEND_ADD = 65536;
openfl.display.Tilesheet.TILE_BLEND_MULTIPLY = 131072;
openfl.display.Tilesheet.TILE_BLEND_SCREEN = 262144;
ApplicationMain.main();
})();
