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
			haxe.Log.trace("Error: No entry point found",{ fileName : "ApplicationMain.hx", lineNumber : 154, className : "ApplicationMain", methodName : "preloader_onComplete"});
			haxe.Log.trace("If you are using DCE with a static main, you may need to @:keep the function",{ fileName : "ApplicationMain.hx", lineNumber : 155, className : "ApplicationMain", methodName : "preloader_onComplete"});
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
	addEventListener: null
	,dispatchEvent: null
	,hasEventListener: null
	,removeEventListener: null
	,willTrigger: null
	,__class__: flash.events.IEventDispatcher
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
	__targetDispatcher: null
	,__eventMap: null
	,addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
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
		return "[ " + this.__name__ + " ]";
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
	__worldTransform: null
	,__renderCanvas: null
	,__renderMask: null
	,__updateChildren: null
	,__class__: flash.display.IBitmapDrawable
};
flash.display.DisplayObject = function() {
	flash.events.EventDispatcher.call(this);
	this.alpha = 1;
	this.rotation = 0;
	this.scaleX = 1;
	this.scaleY = 1;
	this.visible = true;
	this.x = 0;
	this.y = 0;
	this.__worldAlpha = 1;
	this.__worldTransform = new flash.geom.Matrix();
};
$hxClasses["flash.display.DisplayObject"] = flash.display.DisplayObject;
flash.display.DisplayObject.__name__ = ["flash","display","DisplayObject"];
flash.display.DisplayObject.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.DisplayObject.__super__ = flash.events.EventDispatcher;
flash.display.DisplayObject.prototype = $extend(flash.events.EventDispatcher.prototype,{
	alpha: null
	,blendMode: null
	,cacheAsBitmap: null
	,loaderInfo: null
	,mouseX: null
	,mouseY: null
	,name: null
	,parent: null
	,rotation: null
	,scale9Grid: null
	,scaleX: null
	,scaleY: null
	,scrollRect: null
	,stage: null
	,visible: null
	,x: null
	,y: null
	,__worldTransform: null
	,__filters: null
	,__interactive: null
	,__isMask: null
	,__mask: null
	,__renderable: null
	,__rotationCache: null
	,__rotationCosine: null
	,__rotationSine: null
	,__worldAlpha: null
	,getBounds: function(targetCoordinateSpace) {
		return null;
	}
	,getRect: function(targetCoordinateSpace) {
		return this.getBounds(targetCoordinateSpace);
	}
	,globalToLocal: function(pos) {
		return this.__worldTransform.clone().invert().transformPoint(pos);
	}
	,hitTestObject: function(obj) {
		return false;
	}
	,hitTestPoint: function(x,y,shapeFlag) {
		if(shapeFlag == null) shapeFlag = false;
		return false;
	}
	,localToGlobal: function(point) {
		return this.__worldTransform.transformPoint(point);
	}
	,__broadcast: function(event) {
		if(this.__eventMap != null && this.hasEventListener(event.type)) {
			if(event.target == null) event.target = this;
			event.currentTarget = this;
			this.dispatchEvent(event);
		}
	}
	,__getBounds: function(rect,matrix) {
	}
	,__getLocalBounds: function(rect) {
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		return false;
	}
	,__renderCanvas: function(renderSession) {
	}
	,__renderMask: function(renderSession) {
	}
	,__setStageReference: function(stage) {
		if(this.stage != stage) {
			this.stage = stage;
			if(stage != null) this.dispatchEvent(new flash.events.Event(flash.events.Event.ADDED_TO_STAGE,false,false));
		}
	}
	,__update: function() {
		this.__renderable = this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && !this.__isMask;
		if(!this.__renderable && !this.__isMask) return;
		if(this.rotation != this.__rotationCache) {
			this.__rotationCache = this.rotation;
			var radians = this.rotation * (Math.PI / 180);
			this.__rotationSine = Math.sin(radians);
			this.__rotationCosine = Math.cos(radians);
		}
		if(this.parent != null) {
			var parentTransform = this.parent.__worldTransform;
			var a00 = this.__rotationCosine * this.scaleX;
			var a01 = this.__rotationSine * this.scaleX;
			var a10 = -this.__rotationSine * this.scaleY;
			var a11 = this.__rotationCosine * this.scaleY;
			var b00 = parentTransform.a;
			var b01 = parentTransform.b;
			var b10 = parentTransform.c;
			var b11 = parentTransform.d;
			this.__worldTransform.a = a00 * b00 + a01 * b10;
			this.__worldTransform.b = a00 * b01 + a01 * b11;
			this.__worldTransform.c = a10 * b00 + a11 * b10;
			this.__worldTransform.d = a10 * b01 + a11 * b11;
			this.__worldTransform.tx = this.x * b00 + this.y * b10 + parentTransform.tx;
			this.__worldTransform.ty = this.x * b01 + this.y * b11 + parentTransform.ty;
			this.__worldAlpha = this.alpha * this.parent.__worldAlpha;
		} else {
			this.__worldTransform.a = this.__rotationCosine * this.scaleX;
			this.__worldTransform.c = -this.__rotationSine * this.scaleY;
			this.__worldTransform.tx = this.x;
			this.__worldTransform.b = this.__rotationSine * this.scaleX;
			this.__worldTransform.d = this.__rotationCosine * this.scaleY;
			this.__worldTransform.ty = this.y;
			this.__worldAlpha = this.alpha;
		}
	}
	,__updateChildren: function() {
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
	,get_transform: function() {
		return new flash.geom.Transform(this);
	}
	,set_transform: function(value) {
		return value;
	}
	,get_width: function() {
		return 0;
	}
	,set_width: function(value) {
		return 0;
	}
	,__class__: flash.display.DisplayObject
});
flash.display.InteractiveObject = function() {
	flash.display.DisplayObject.call(this);
	this.mouseEnabled = true;
};
$hxClasses["flash.display.InteractiveObject"] = flash.display.InteractiveObject;
flash.display.InteractiveObject.__name__ = ["flash","display","InteractiveObject"];
flash.display.InteractiveObject.__super__ = flash.display.DisplayObject;
flash.display.InteractiveObject.prototype = $extend(flash.display.DisplayObject.prototype,{
	doubleClickEnabled: null
	,focusRect: null
	,mouseEnabled: null
	,tabEnabled: null
	,tabIndex: null
	,__class__: flash.display.InteractiveObject
});
flash.display.DisplayObjectContainer = function() {
	flash.display.InteractiveObject.call(this);
	this.mouseChildren = true;
	this.__children = new Array();
};
$hxClasses["flash.display.DisplayObjectContainer"] = flash.display.DisplayObjectContainer;
flash.display.DisplayObjectContainer.__name__ = ["flash","display","DisplayObjectContainer"];
flash.display.DisplayObjectContainer.__super__ = flash.display.InteractiveObject;
flash.display.DisplayObjectContainer.prototype = $extend(flash.display.InteractiveObject.prototype,{
	mouseChildren: null
	,numChildren: null
	,tabChildren: null
	,__children: null
	,addChild: function(child) {
		if(child != null) {
			if(child.parent != null) child.parent.removeChild(child);
			this.__children.push(child);
			child.parent = this;
			if(this.stage != null) child.__setStageReference(this.stage);
		}
		return child;
	}
	,addChildAt: function(child,index) {
		if(index > this.__children.length || index < 0) throw "Invalid index position " + index;
		if(child.parent == this) HxOverrides.remove(this.__children,child); else {
			if(child.parent != null) child.parent.removeChild(child);
			child.parent = this;
			if(this.stage != null) child.__setStageReference(this.stage);
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
			if(child.name == name) return child;
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
	,__broadcast: function(event) {
		if(event.target == null) event.target = this;
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__broadcast(event);
		}
		if(this.__eventMap != null && this.hasEventListener(event.type)) {
			event.currentTarget = this;
			this.dispatchEvent(event);
		}
	}
	,__getBounds: function(rect,matrix) {
		if(this.__children.length == 0) return;
		if(matrix != null) {
			var matrixCache = this.__worldTransform;
			this.__worldTransform = matrix;
			this.__updateChildren();
			this.__worldTransform = matrixCache;
		}
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(!child.__renderable) continue;
			child.__getBounds(rect,matrix);
		}
	}
	,__getLocalBounds: function(rect) {
		var matrixCache = this.__worldTransform;
		this.__worldTransform = new flash.geom.Matrix();
		this.__updateChildren();
		this.__getBounds(rect,null);
		this.__worldTransform = matrixCache;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.visible || interactiveOnly && !this.mouseEnabled) return false;
		var i = this.__children.length - 1;
		if(interactiveOnly && (stack == null || !this.mouseChildren)) while(i >= 0) {
			if(this.__children[i].__hitTest(x,y,shapeFlag,null,interactiveOnly)) {
				if(stack != null) stack.push(this);
				return true;
			}
			i--;
		} else if(stack != null) {
			var length = stack.length;
			while(i >= 0) {
				if(this.__children[i].__hitTest(x,y,shapeFlag,stack,interactiveOnly)) {
					stack.splice(length,0,this);
					return true;
				}
				i--;
			}
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable) return;
		if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderCanvas(renderSession);
		}
		if(this.__mask != null) renderSession.maskManager.popMask();
	}
	,__renderMask: function(renderSession) {
		var bounds = new flash.geom.Rectangle();
		this.__getLocalBounds(bounds);
		renderSession.context.rect(0,0,bounds.width,bounds.height);
	}
	,__setStageReference: function(stage) {
		if(this.stage != stage) {
			this.stage = stage;
			if(stage != null) {
				var evt = new flash.events.Event(flash.events.Event.ADDED_TO_STAGE,false,false);
				this.dispatchEvent(evt);
			}
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__setStageReference(stage);
			}
		}
	}
	,__update: function() {
		flash.display.InteractiveObject.prototype.__update.call(this);
		if(!this.__renderable) return;
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__update();
		}
	}
	,__updateChildren: function() {
		this.__renderable = this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && !this.__isMask;
		if(!this.__renderable && !this.__isMask) return;
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__update();
		}
	}
	,get_height: function() {
		var bounds = new flash.geom.Rectangle();
		this.__getLocalBounds(bounds);
		return bounds.height;
	}
	,set_height: function(value) {
		var bounds = new flash.geom.Rectangle();
		this.__getLocalBounds(bounds);
		if(value != bounds.height) this.scaleY = value / bounds.height;
		return value;
	}
	,get_numChildren: function() {
		return this.__children.length;
	}
	,get_width: function() {
		var bounds = new flash.geom.Rectangle();
		this.__getLocalBounds(bounds);
		return bounds.height;
	}
	,set_width: function(value) {
		var bounds = new flash.geom.Rectangle();
		this.__getLocalBounds(bounds);
		if(value != bounds.width) this.scaleX = value / bounds.width;
		return value;
	}
	,__class__: flash.display.DisplayObjectContainer
});
flash.display.Sprite = function() {
	flash.display.DisplayObjectContainer.call(this);
};
$hxClasses["flash.display.Sprite"] = flash.display.Sprite;
flash.display.Sprite.__name__ = ["flash","display","Sprite"];
flash.display.Sprite.__super__ = flash.display.DisplayObjectContainer;
flash.display.Sprite.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	buttonMode: null
	,graphics: null
	,useHandCursor: null
	,__graphics: null
	,__getBounds: function(rect,matrix) {
		flash.display.DisplayObjectContainer.prototype.__getBounds.call(this,rect,matrix);
		if(this.__graphics != null) this.__graphics.__getBounds(rect,this.__worldTransform);
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.visible || interactiveOnly && !this.mouseEnabled) return false;
		var length = 0;
		if(stack != null) length = stack.length;
		if(flash.display.DisplayObjectContainer.prototype.__hitTest.call(this,x,y,shapeFlag,stack,interactiveOnly)) return true; else if(this.__graphics != null && this.__graphics.__hitTest(x,y,shapeFlag,this.__worldTransform)) {
			if(stack != null) stack.splice(length,0,this);
			return true;
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable) return;
		if(this.__graphics != null) {
			this.__graphics.__render();
			if(this.__graphics.__canvas != null) {
				if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
				var context = renderSession.context;
				context.globalAlpha = this.__worldAlpha;
				var transform = this.__worldTransform;
				if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
				context.drawImage(this.__graphics.__canvas,this.__graphics.__bounds.x,this.__graphics.__bounds.y);
				if(this.__mask != null) renderSession.maskManager.popMask();
			}
		}
		flash.display.DisplayObjectContainer.prototype.__renderCanvas.call(this,renderSession);
	}
	,__renderMask: function(renderSession) {
		if(this.__graphics != null) this.__graphics.__renderMask(renderSession); else flash.display.DisplayObjectContainer.prototype.__renderMask.call(this,renderSession);
	}
	,get_graphics: function() {
		if(this.__graphics == null) this.__graphics = new flash.display.Graphics();
		return this.__graphics;
	}
	,__class__: flash.display.Sprite
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
	inited: null
	,resize: function(e) {
		if(!this.inited) this.init();
	}
	,init: function() {
		if(this.inited) return;
		this.inited = true;
		var runner = new haxe.unit.TestRunner();
		runner.add(new nx3.test.TestQ());
		runner.add(new nx3.test.TestN());
		runner.add(new nx3.test.TestV());
		runner.add(new nx3.test.TestVRender());
		var success = runner.run();
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
	r: null
	,match: function(s) {
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
	,__class__: List
};
var IMap = function() { };
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
IMap.prototype = {
	get: null
	,keys: null
	,__class__: IMap
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
	this.outline.x = x;
	this.outline.y = y;
	this.addChild(this.outline);
	this.progress = new flash.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.x = x + padding;
	this.progress.y = y + padding;
	this.progress.scaleX = 0;
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = flash.display.Sprite;
NMEPreloader.prototype = $extend(flash.display.Sprite.prototype,{
	outline: null
	,progress: null
	,getBackgroundColor: function() {
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
		this.progress.scaleX = percentLoaded;
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
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
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
cx.ArrayTools.indexOrNull = function(a,idx) {
	if(idx < 0 || idx > a.length) return null; else return a[idx];
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
cx.EncodeTools = function() { };
$hxClasses["cx.EncodeTools"] = cx.EncodeTools;
cx.EncodeTools.__name__ = ["cx","EncodeTools"];
cx.EncodeTools.base64Encode = function(str) {
	return haxe.crypto.BaseCode.encode(str,cx.EncodeTools.BASE64SEED);
};
cx.EncodeTools.base64Decode = function(encodedStr) {
	return haxe.crypto.BaseCode.decode(encodedStr,cx.EncodeTools.BASE64SEED);
};
cx.EncodeTools.utf8 = function(str) {
	return str;
};
cx.EncodeTools.cliDecode = function(str) {
	if(str == null) return null;
	var r = "";
	var ii = 0;
	var _g1 = 0;
	var _g = str.length;
	while(_g1 < _g) {
		var i = _g1++;
		var cc = HxOverrides.cca(str,i);
		var ccc = HxOverrides.substr(str,i,1);
		var c = str.charAt(i);
		switch(cc) {
		case 229:
			r += String.fromCharCode(134);
			ii += 2;
			break;
		case 228:
			r += String.fromCharCode(132);
			ii += 2;
			break;
		case 246:
			r += String.fromCharCode(148);
			ii += 2;
			break;
		case 197:
			r += String.fromCharCode(143);
			ii += 2;
			break;
		case 196:
			r += String.fromCharCode(142);
			ii += 2;
			break;
		case 214:
			r += String.fromCharCode(153);
			ii += 2;
			break;
		case 224:
			r += String.fromCharCode(160);
			ii += 2;
			break;
		case 225:
			r += String.fromCharCode(133);
			ii += 2;
			break;
		case 193:
			r += String.fromCharCode(181);
			ii += 2;
			break;
		case 192:
			r += String.fromCharCode(183);
			ii += 2;
			break;
		case 243:
			r += String.fromCharCode(162);
			ii += 2;
			break;
		case 242:
			r += String.fromCharCode(149);
			ii += 2;
			break;
		case 211:
			r += String.fromCharCode(224);
			ii += 2;
			break;
		case 210:
			r += String.fromCharCode(227);
			ii += 2;
			break;
		case 233:
			r += String.fromCharCode(130);
			ii += 2;
			break;
		case 232:
			r += String.fromCharCode(138);
			ii += 2;
			break;
		case 201:
			r += String.fromCharCode(144);
			ii += 2;
			break;
		case 200:
			r += String.fromCharCode(212);
			ii += 2;
			break;
		case 252:
			r += String.fromCharCode(129);
			ii += 2;
			break;
		case 220:
			r += String.fromCharCode(154);
			ii += 2;
			break;
		default:
			r += str.charAt(ii++);
		}
	}
	return r;
};
cx.EncodeTools.cliEncode = function(str) {
	str = haxe.Utf8.decode(str);
	var r = haxe.Utf8.encode("");
	var _g1 = 0;
	var _g = str.length;
	while(_g1 < _g) {
		var i = _g1++;
		var cc = HxOverrides.cca(str,i);
		var c = str.charAt(i);
		switch(cc) {
		case 134:
			r += "å";
			break;
		case 132:
			r += "ä";
			break;
		case 148:
			r += "ö";
			break;
		case 143:
			r += "Å";
			break;
		case 142:
			r += "Ä";
			break;
		case 153:
			r += "Ö";
			break;
		case 160:
			r += "á";
			break;
		case 133:
			r += "à";
			break;
		case 181:
			r += "Á";
			break;
		case 183:
			r += "À";
			break;
		case 162:
			r += "ó";
			break;
		case 149:
			r += "ò";
			break;
		case 224:
			r += "Ó";
			break;
		case 227:
			r += "Ò";
			break;
		case 130:
			r += "é";
			break;
		case 138:
			r += "è";
			break;
		case 144:
			r += "É";
			break;
		case 212:
			r += "È";
			break;
		case 129:
			r += "ü";
			break;
		case 154:
			r += "U";
			break;
		default:
			r += c;
		}
	}
	return r;
};
cx.EncodeTools.pathsafe = function(str) {
	str = haxe.Utf8.decode(str);
	str = str.toLowerCase();
	str = StringTools.replace(StringTools.replace(StringTools.replace(str,".","-")," ","-"),"--","-");
	var r = haxe.Utf8.encode("");
	var _g1 = 0;
	var _g = str.length;
	while(_g1 < _g) {
		var i = _g1++;
		var cc = HxOverrides.cca(str,i);
		var c = str.charAt(i);
		switch(cc) {
		case 228:case 197:
			r += "a";
			break;
		case 229:case 196:
			r += "a";
			break;
		case 246:case 214:
			r += "o";
			break;
		case 252:case 220:
			r += "u";
			break;
		default:
			r += c;
		}
	}
	return r;
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
	if(precision == null) precision = 8;
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
cx.ReflectTools = function() { };
$hxClasses["cx.ReflectTools"] = cx.ReflectTools;
cx.ReflectTools.__name__ = ["cx","ReflectTools"];
cx.ReflectTools.getMethods = function(object) {
	var result = [];
	var fields = Type.getInstanceFields(Type.getClass(object));
	var _g = 0;
	while(_g < fields.length) {
		var field = fields[_g];
		++_g;
		var f = Reflect.field(object,field);
		if(Reflect.isFunction(f)) result.push(field);
	}
	return result;
};
cx.ReflectTools.callMethod = function(object,methodName,args) {
	if(args == null) args = [];
	try {
		return Reflect.callMethod(object,Reflect.field(object,methodName),args);
	} catch( e ) {
		throw "Error on ReflectTools.callMethod: " + methodName + " > " + Std.string(e);
	}
};
cx.ReflectTools.hasMethod = function(object,methodName) {
	return Lambda.has(cx.ReflectTools.getMethods(object),methodName);
};
cx.ReflectTools.getClass = function(object) {
	return Type.getClass(object);
};
cx.ReflectTools.getClassName = function(object) {
	return Type.getClassName(cx.ReflectTools.getClass(object));
};
cx.ReflectTools.getStaticFields = function(object) {
	return Reflect.fields(cx.ReflectTools.getClass(object));
};
cx.ReflectTools.getObjectFields = function(object) {
	return Reflect.fields(object);
};
cx.ReflectTools.getStaticField = function(object,fieldName) {
	return Reflect.field(cx.ReflectTools.getClass(object),fieldName);
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
	var sim = function(strA1,strB1) {
		var score = cx.StrTools._similarity(strA1,strB1);
		if(strA1.length != strB1.length) score = (score + cx.StrTools._similarity(strB1,strA1)) / 2;
		return score;
	};
	return sim(strA,strB);
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
var haxe = {};
haxe.Timer = function() { };
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
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
flash.Lib.trace = function(arg) {
	haxe.Log.trace(arg,{ fileName : "Lib.hx", lineNumber : 97, className : "flash.Lib", methodName : "trace"});
};
flash._Vector = {};
flash._Vector.Vector_Impl_ = function() { };
$hxClasses["flash._Vector.Vector_Impl_"] = flash._Vector.Vector_Impl_;
flash._Vector.Vector_Impl_.__name__ = ["flash","_Vector","Vector_Impl_"];
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
	var i = this1.length - 1;
	while(i >= from) {
		if(this1[i] == x) return i;
		i--;
	}
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
	bitmapData: null
	,pixelSnapping: null
	,smoothing: null
	,__getBounds: function(rect,matrix) {
		var bounds = new flash.geom.Rectangle(0,0,this.get_width(),this.get_height());
		bounds.transform(this.__worldTransform);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.visible || this.bitmapData == null) return false;
		var point = this.globalToLocal(new flash.geom.Point(x,y));
		if(point.x > 0 && point.y > 0 && point.x <= this.bitmapData.width && point.y <= this.bitmapData.height) {
			if(stack != null) stack.push(this);
			return true;
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable) return;
		var context = renderSession.context;
		if(this.bitmapData != null && this.bitmapData.__valid) {
			if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
			this.bitmapData.__syncImageData();
			context.globalAlpha = this.__worldAlpha;
			var transform = this.__worldTransform;
			if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
			if(this.bitmapData.__sourceImage != null) context.drawImage(this.bitmapData.__sourceImage,0,0); else context.drawImage(this.bitmapData.__sourceCanvas,0,0);
			if(this.__mask != null) renderSession.maskManager.popMask();
		}
	}
	,__renderMask: function(renderSession) {
		renderSession.context.rect(0,0,this.get_width(),this.get_height());
	}
	,get_height: function() {
		if(this.bitmapData != null) return this.bitmapData.height * this.scaleY;
		return 0;
	}
	,set_height: function(value) {
		if(this.bitmapData != null) {
			if(value != this.bitmapData.height) this.scaleY = value / this.bitmapData.height;
			return value;
		}
		return 0;
	}
	,get_width: function() {
		if(this.bitmapData != null) return this.bitmapData.width * this.scaleX;
		return 0;
	}
	,set_width: function(value) {
		if(this.bitmapData != null) {
			if(value != this.bitmapData.width) this.scaleX = value / this.bitmapData.width;
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
	bitmapData.__valid = true;
	return bitmapData;
};
flash.display.BitmapData.fromCanvas = function(canvas,transparent) {
	if(transparent == null) transparent = true;
	var bitmapData = new flash.display.BitmapData(0,0,transparent);
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
	height: null
	,rect: null
	,transparent: null
	,width: null
	,__worldTransform: null
	,__loading: null
	,__sourceCanvas: null
	,__sourceContext: null
	,__sourceImage: null
	,__sourceImageData: null
	,__sourceImageDataChanged: null
	,__valid: null
	,applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
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
		source.__updateChildren();
		source.__renderCanvas(renderSession);
		source.__worldTransform = matrixCache;
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
		var hitColor = data[offset] << 24;
		hitColor |= data[offset + 1] << 16;
		hitColor |= data[offset + 2] << 8;
		if(this.transparent) hitColor |= data[offset + 3];
		var dx = [0,-1,1,0];
		var dy = [-1,0,0,1];
		var queue = new Array();
		queue.push(x);
		queue.push(y);
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		var a;
		if(this.transparent) a = (color & -16777216) >>> 24; else a = 255;
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
				if(data[nextPointOffset] == (hitColor >> 24 & 255) && data[nextPointOffset + 1] == (hitColor >> 16 & 255) && data[nextPointOffset + 2] == (hitColor >> 8 & 255) && data[nextPointOffset + 3] == (hitColor & 255)) {
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
		haxe.Log.trace("BitmapData.threshold not implemented",{ fileName : "BitmapData.hx", lineNumber : 755, className : "flash.display.BitmapData", methodName : "threshold"});
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
	,__updateChildren: function() {
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
	__bounds: null
	,__canvas: null
	,__commands: null
	,__context: null
	,__dirty: null
	,__halfStrokeWidth: null
	,__hasFill: null
	,__hasStroke: null
	,__inPath: null
	,__positionX: null
	,__positionY: null
	,beginBitmapFill: function(bitmap,matrix,repeat,smooth) {
		if(smooth == null) smooth = false;
		if(repeat == null) repeat = true;
		this.__commands.push(flash.display.DrawCommand.BeginBitmapFill(bitmap,matrix,repeat,smooth));
	}
	,beginFill: function(rgb,alpha) {
		if(alpha == null) alpha = 1;
		this.__commands.push(flash.display.DrawCommand.BeginFill(rgb & 16777215,alpha));
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	}
	,clear: function() {
		this.__commands = new Array();
		this.__halfStrokeWidth = 0;
		if(this.__bounds != null) this.__dirty = true;
		this.__bounds = null;
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
			if(this.__commands.length == 0) {
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
							if(bitmapFill.__sourceImage != null) this.__context.drawImage(bitmapFill.__sourceImage,0,0,bitmapFill.width,bitmapFill.height,x3,y3,width1,height1); else this.__context.drawImage(bitmapFill.__sourceCanvas,0,0,bitmapFill.width,bitmapFill.height,x3,y3,width1,height1);
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
							if(rect != null && center != null) {
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
						this.__beginPath();
						this.__context.lineTo(x4,y4);
						this.__positionX = x4;
						this.__positionY = y4;
						break;
					case 10:
						var y5 = command[3];
						var x5 = command[2];
						this.__beginPath();
						this.__context.moveTo(x5,y5);
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
					__context.lineTo(x4,y4);
					__positionX = x4;
					__positionY = y4;
					break;
				case 10:
					var y5 = command[3];
					var x5 = command[2];
					__context.moveTo(x5,y5);
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
	__graphicsDataType: null
	,__class__: flash.display.IGraphicsData
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
	content: null
	,contentLoaderInfo: null
	,mImage: null
	,mShape: null
	,load: function(request,context) {
		var _g = this;
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
		var onload = function(bitmapData) {
			_g.contentLoaderInfo.content = new flash.display.Bitmap(bitmapData);
			_g.addChild(_g.contentLoaderInfo.content);
			var event = new flash.events.Event(flash.events.Event.COMPLETE);
			event.target = _g.contentLoaderInfo;
			event.currentTarget = _g.contentLoaderInfo;
			_g.contentLoaderInfo.dispatchEvent(event);
		};
		var bitmapData1 = flash.display.BitmapData.fromFile(request.url,onload);
	}
	,loadBytes: function(buffer) {
		try {
			this.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
		} catch( e ) {
			haxe.Log.trace("Error " + Std.string(e),{ fileName : "Loader.hx", lineNumber : 141, className : "flash.display.Loader", methodName : "loadBytes"});
			var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
			evt.currentTarget = this;
			this.contentLoaderInfo.dispatchEvent(evt);
		}
	}
	,handleLoad: function(e) {
		e.currentTarget = this;
		this.contentLoaderInfo.removeEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad));
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
	applicationDomain: null
	,bytes: null
	,bytesLoaded: null
	,bytesTotal: null
	,childAllowsParent: null
	,content: null
	,contentType: null
	,frameRate: null
	,height: null
	,loader: null
	,loaderURL: null
	,parameters: null
	,parentAllowsChild: null
	,sameDomain: null
	,sharedEvents: null
	,url: null
	,width: null
	,__class__: flash.display.LoaderInfo
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
	currentFrame: null
	,currentFrameLabel: null
	,currentLabel: null
	,currentLabels: null
	,enabled: null
	,framesLoaded: null
	,totalFrames: null
	,__currentFrame: null
	,__currentFrameLabel: null
	,__currentLabel: null
	,__currentLabels: null
	,__totalFrames: null
	,gotoAndPlay: function(frame,scene) {
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
	graphics: null
	,__graphics: null
	,__getBounds: function(rect,matrix) {
		if(this.__graphics != null) this.__graphics.__getBounds(rect,this.__worldTransform);
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(this.visible && this.__graphics != null && this.__graphics.__hitTest(x,y,shapeFlag,this.__worldTransform)) {
			if(!interactiveOnly) stack.push(this);
			return true;
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable) return;
		if(this.__graphics != null) {
			this.__graphics.__render();
			if(this.__graphics.__canvas != null) {
				var context = renderSession.context;
				context.globalAlpha = this.__worldAlpha;
				var transform = this.__worldTransform;
				if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
				context.drawImage(this.__graphics.__canvas,this.__graphics.__bounds.x,this.__graphics.__bounds.y);
			}
		}
	}
	,get_graphics: function() {
		if(this.__graphics == null) this.__graphics = new flash.display.Graphics();
		return this.__graphics;
	}
	,__class__: flash.display.Shape
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
	this.__mouseX = 0;
	this.__mouseY = 0;
	this.__canvas = window.document.createElement("canvas");
	this.__canvas.setAttribute("moz-opaque","true");
	this.__context = this.__canvas.getContext ("2d", { alpha: false });
	this.__canvas.style.transform = "translatez(0)";
	this.__canvas.style.position = "absolute";
	this.__canvas.style.top = "0px";
	this.__canvas.style.left = "0px";
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
	this.__canvas.width = width;
	this.__canvas.height = height;
	this.__element = element;
	this.set_color(color);
	this.__resize();
	window.addEventListener("resize",$bind(this,this.window_onResize));
	if(element != null) element.appendChild(this.__canvas);
	this.stage = this;
	this.parent = this;
	this.__clearBeforeRender = true;
	this.__eventQueue = [];
	this.__stack = [];
	this.__renderSession = new flash.display.RenderSession();
	this.__renderSession.context = this.__context;
	this.__renderSession.roundPixels = true;
	var windowEvents = ["keydown","keyup"];
	var canvasEvents = ["touchstart","touchmove","touchend","mousedown","mousemove","mouseup","click","dblclick"];
	var _g = 0;
	while(_g < windowEvents.length) {
		var event = windowEvents[_g];
		++_g;
		window.addEventListener(event,$bind(this,this.__queueEvent),false);
	}
	var _g1 = 0;
	while(_g1 < canvasEvents.length) {
		var event1 = canvasEvents[_g1];
		++_g1;
		this.__canvas.addEventListener(event1,$bind(this,this.__queueEvent),true);
	}
	window.requestAnimationFrame($bind(this,this.__render));
};
$hxClasses["flash.display.Stage"] = flash.display.Stage;
flash.display.Stage.__name__ = ["flash","display","Stage"];
flash.display.Stage.__super__ = flash.display.Sprite;
flash.display.Stage.prototype = $extend(flash.display.Sprite.prototype,{
	align: null
	,displayState: null
	,focus: null
	,frameRate: null
	,scaleMode: null
	,stageHeight: null
	,stageWidth: null
	,__canvas: null
	,__clearBeforeRender: null
	,__color: null
	,__colorString: null
	,__context: null
	,__cursor: null
	,__element: null
	,__eventQueue: null
	,__fullscreen: null
	,__mouseX: null
	,__mouseY: null
	,__originalWidth: null
	,__originalHeight: null
	,__renderSession: null
	,__stack: null
	,__transparent: null
	,globalToLocal: function(pos) {
		return pos;
	}
	,localToGlobal: function(pos) {
		return pos;
	}
	,__fireEvent: function(event,stack) {
		var l = stack.length;
		if(l > 0) {
			event.eventPhase = 0;
			stack.reverse();
			event.target = stack[0];
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.dispatchEvent(event);
				if(event.__isCancelled) return;
			}
		}
		event.eventPhase = 1;
		event.currentTarget = this;
		this.dispatchEvent(event);
		if(event.__isCancelled) return;
		if(event.bubbles) {
			event.eventPhase = 2;
			stack.reverse();
			var _g1 = 0;
			while(_g1 < stack.length) {
				var obj1 = stack[_g1];
				++_g1;
				event.currentTarget = obj1;
				obj1.dispatchEvent(event);
				if(event.__isCancelled) return;
			}
		}
	}
	,__queueEvent: function(event) {
		this.__eventQueue.push(event);
	}
	,__render: function() {
		var _g = 0;
		var _g1 = this.__eventQueue;
		while(_g < _g1.length) {
			var event = _g1[_g];
			++_g;
			var _g2 = event.type;
			switch(_g2) {
			case "keydown":case "keyup":
				this.window_onKey(event);
				break;
			case "touchstart":case "touchend":case "touchmove":
				this.canvas_onTouch(event);
				break;
			case "mousedown":case "mouseup":case "mousemove":case "click":case "dblclick":
				this.canvas_onMouse(event);
				break;
			default:
			}
		}
		this.__eventQueue.length = 0;
		this.__broadcast(new flash.events.Event(flash.events.Event.ENTER_FRAME));
		this.__renderable = true;
		this.__update();
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
		window.requestAnimationFrame($bind(this,this.__render));
	}
	,__resize: function() {
		if(this.__element != null) {
			if(this.__fullscreen) {
				this.stageWidth = this.__element.clientWidth;
				this.stageHeight = this.__element.clientHeight;
				this.__canvas.width = this.stageWidth;
				this.__canvas.height = this.stageHeight;
			} else {
				var scaleX = this.__element.clientWidth / this.__originalWidth;
				var scaleY = this.__element.clientHeight / this.__originalHeight;
				var currentRatio = scaleX / scaleY;
				var targetRatio = Math.min(scaleX,scaleY);
				this.__canvas.style.width = this.__originalWidth * targetRatio + "px";
				this.__canvas.style.height = this.__originalHeight * targetRatio + "px";
				this.__canvas.style.marginLeft = (this.__element.clientWidth - this.__originalWidth * targetRatio) / 2 + "px";
				this.__canvas.style.marginTop = (this.__element.clientHeight - this.__originalHeight * targetRatio) / 2 + "px";
			}
		}
	}
	,__setCursor: function(cursor) {
		if(this.__cursor != cursor) this.__canvas.style.cursor = this.__cursor = cursor;
	}
	,get_mouseX: function() {
		return this.__mouseX;
	}
	,get_mouseY: function() {
		return this.__mouseY;
	}
	,canvas_onTouch: function(event) {
		event.preventDefault();
		var rect = this.__canvas.getBoundingClientRect();
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
			this.__fireEvent(touchEvent,this.__stack);
			this.__fireEvent(flash.events.MouseEvent.__create(mouseType,event,localPoint,target),this.__stack);
		} else {
			var touchEvent1 = flash.events.TouchEvent.__create(type,event,touch,point,this);
			touchEvent1.touchPointID = touch.identifier;
			touchEvent1.isPrimaryTouchPoint = true;
			this.__fireEvent(touchEvent1,[this]);
			this.__fireEvent(flash.events.MouseEvent.__create(mouseType,event,point,this),[this]);
		}
	}
	,canvas_onMouse: function(event) {
		var rect = this.__canvas.getBoundingClientRect();
		this.__mouseX = (event.clientX - rect.left) * (this.__canvas.width / rect.width);
		this.__mouseY = (event.clientY - rect.top) * (this.__canvas.height / rect.height);
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
		this.dispatchEvent(new flash.events.KeyboardEvent(event.type == "keydown"?flash.events.KeyboardEvent.KEY_DOWN:flash.events.KeyboardEvent.KEY_UP,true,false,event.charCode,keyCode,event.keyLocation != null?js.Boot.__cast(event.keyLocation , Int):0,event.ctrlKey,event.altKey,event.shiftKey));
	}
	,window_onResize: function(event) {
		this.__resize();
		var event1 = new flash.events.Event(flash.events.Event.RESIZE);
		this.__broadcast(event1);
	}
	,get_color: function() {
		return this.__color;
	}
	,set_color: function(value) {
		this.__colorString = "#" + StringTools.hex(value,6);
		return this.__color = value;
	}
	,__class__: flash.display.Stage
});
flash.display.RenderSession = function() {
	this.maskManager = new flash.display.MaskManager(this);
};
$hxClasses["flash.display.RenderSession"] = flash.display.RenderSession;
flash.display.RenderSession.__name__ = ["flash","display","RenderSession"];
flash.display.RenderSession.prototype = {
	context: null
	,maskManager: null
	,roundPixels: null
	,__class__: flash.display.RenderSession
};
flash.display.MaskManager = function(renderSession) {
	this.renderSession = renderSession;
};
$hxClasses["flash.display.MaskManager"] = flash.display.MaskManager;
flash.display.MaskManager.__name__ = ["flash","display","MaskManager"];
flash.display.MaskManager.prototype = {
	renderSession: null
	,pushMask: function(mask) {
		var context = this.renderSession.context;
		context.save();
		var transform = mask.__worldTransform;
		if(transform == null) transform = new flash.geom.Matrix();
		context.setTransform(transform.a,transform.c,transform.b,transform.d,transform.tx,transform.ty);
		context.beginPath();
		mask.__renderMask(this.renderSession);
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
	errorID: null
	,message: null
	,name: null
	,getStackTrace: function() {
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
flash.events.Event = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
};
$hxClasses["flash.events.Event"] = flash.events.Event;
flash.events.Event.__name__ = ["flash","events","Event"];
flash.events.Event.prototype = {
	bubbles: null
	,cancelable: null
	,currentTarget: null
	,eventPhase: null
	,target: null
	,type: null
	,__isCancelled: null
	,__isCancelledNow: null
	,clone: function() {
		return new flash.events.Event(this.type,this.bubbles,this.cancelable);
	}
	,stopImmediatePropagation: function() {
		this.__isCancelled = true;
		this.__isCancelledNow = true;
	}
	,stopPropagation: function() {
		this.__isCancelled = true;
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
	text: null
	,__class__: flash.events.TextEvent
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
	errorID: null
	,__class__: flash.events.ErrorEvent
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
	callback: null
	,priority: null
	,useCapture: null
	,match: function(callback,useCapture) {
		return this.callback == callback && this.useCapture == useCapture;
	}
	,__class__: flash.events._EventDispatcher.Listener
};
flash.events._EventPhase = {};
flash.events._EventPhase.EventPhase_Impl_ = function() { };
$hxClasses["flash.events._EventPhase.EventPhase_Impl_"] = flash.events._EventPhase.EventPhase_Impl_;
flash.events._EventPhase.EventPhase_Impl_.__name__ = ["flash","events","_EventPhase","EventPhase_Impl_"];
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
	responseHeaders: null
	,responseURL: null
	,status: null
	,__class__: flash.events.HTTPStatusEvent
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
	text: null
	,__class__: flash.events.IOErrorEvent
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
	altKey: null
	,charCode: null
	,ctrlKey: null
	,commandKey: null
	,controlKey: null
	,keyCode: null
	,keyLocation: null
	,shiftKey: null
	,__class__: flash.events.KeyboardEvent
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
	if(type == flash.events.MouseEvent.MOUSE_DOWN) if(event.which != null) __mouseDown = event.which == 1; else if(event.button != null) __mouseDown = event.button == 0; else __mouseDown = false; else if(type == flash.events.MouseEvent.MOUSE_UP) {
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
	altKey: null
	,buttonDown: null
	,commandKey: null
	,clickCount: null
	,ctrlKey: null
	,delta: null
	,localX: null
	,localY: null
	,relatedObject: null
	,shiftKey: null
	,stageX: null
	,stageY: null
	,__createSimilar: function(type,related,targ) {
		var result = new flash.events.MouseEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.clickCount);
		if(targ != null) result.target = targ;
		return result;
	}
	,updateAfterEvent: function() {
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
	bytesLoaded: null
	,bytesTotal: null
	,__class__: flash.events.ProgressEvent
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
	altKey: null
	,buttonDown: null
	,commandKey: null
	,ctrlKey: null
	,delta: null
	,isPrimaryTouchPoint: null
	,localX: null
	,localY: null
	,relatedObject: null
	,shiftKey: null
	,stageX: null
	,stageY: null
	,touchPointID: null
	,__createSimilar: function(type,related,targ) {
		var result = new flash.events.TouchEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey);
		result.touchPointID = this.touchPointID;
		result.isPrimaryTouchPoint = this.isPrimaryTouchPoint;
		if(targ != null) result.target = targ;
		return result;
	}
	,__class__: flash.events.TouchEvent
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
	alphaMultiplier: null
	,alphaOffset: null
	,blueMultiplier: null
	,blueOffset: null
	,greenMultiplier: null
	,greenOffset: null
	,redMultiplier: null
	,redOffset: null
	,concat: function(second) {
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
	a: null
	,b: null
	,c: null
	,d: null
	,tx: null
	,ty: null
	,clone: function() {
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
	,copy: function(m) {
		this.a = m.a;
		this.b = m.b;
		this.c = m.c;
		this.d = m.d;
		this.tx = m.tx;
		this.ty = m.ty;
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
	,to3DString: function() {
		return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", " + "0, 1" + ")";
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
	length: null
	,x: null
	,y: null
	,add: function(v) {
		return new flash.geom.Point(v.x + this.x,v.y + this.y);
	}
	,clone: function() {
		return new flash.geom.Point(this.x,this.y);
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
	height: null
	,width: null
	,x: null
	,y: null
	,clone: function() {
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
	,equals: function(toCompare) {
		return this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
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
	,__expand: function(x,y,width,height) {
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
};
flash.geom.Transform = function(displayObject) {
	this.colorTransform = new flash.geom.ColorTransform();
	this.concatenatedColorTransform = new flash.geom.ColorTransform();
	this.concatenatedMatrix = new flash.geom.Matrix();
	this.matrix = new flash.geom.Matrix();
	this.pixelBounds = new flash.geom.Rectangle();
};
$hxClasses["flash.geom.Transform"] = flash.geom.Transform;
flash.geom.Transform.__name__ = ["flash","geom","Transform"];
flash.geom.Transform.prototype = {
	colorTransform: null
	,concatenatedColorTransform: null
	,concatenatedMatrix: null
	,matrix: null
	,pixelBounds: null
	,__class__: flash.geom.Transform
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
	bytesLoaded: null
	,bytesTotal: null
	,id3: null
	,isBuffering: null
	,length: null
	,url: null
	,__buffer: null
	,__howl: null
	,close: function() {
		if(this.__howl != null) this.__howl.unload();
	}
	,load: function(stream,context) {
		if(this.__howl != null) {
			if(stream.url == this.url) return; else this.__howl.unload();
		}
		this.url = stream.url;
		var file = haxe.io.Path.withoutExtension(stream.url);
		this.__howl = new Howl({ onload : $bind(this,this.howl_onLoad), onloaderror : $bind(this,this.howl_onLoadError), urls : [file + ".ogg",file + ".mp3",file + ".wav"], buffer : this.__buffer, loop : this.__buffer});
	}
	,play: function(startTime,loops,sndTransform) {
		if(loops == null) loops = 0;
		if(startTime == null) startTime = 0.0;
		if(sndTransform == null) sndTransform = new flash.media.SoundTransform(1,0);
		if(this.__buffer) loops++;
		return new flash.media.SoundChannel(this.__howl,startTime,loops,sndTransform);
	}
	,howl_onLoad: function(_) {
		this.dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
	}
	,howl_onLoadError: function(_) {
		this.dispatchEvent(new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR));
	}
	,__class__: flash.media.Sound
});
flash.media.SoundChannel = function(howl,startTime,loops,soundTransform) {
	flash.events.EventDispatcher.call(this,this);
	this.__loop = loops > 0;
	this.__soundTransform = soundTransform;
	this.__howl = howl;
	this.__howl.on("end",$bind(this,this.howl_onEnd));
	this.__howl.play(null,$bind(this,this.howl_onPlay));
};
$hxClasses["flash.media.SoundChannel"] = flash.media.SoundChannel;
flash.media.SoundChannel.__name__ = ["flash","media","SoundChannel"];
flash.media.SoundChannel.__super__ = flash.events.EventDispatcher;
flash.media.SoundChannel.prototype = $extend(flash.events.EventDispatcher.prototype,{
	leftPeak: null
	,position: null
	,rightPeak: null
	,__howl: null
	,__loop: null
	,__soundID: null
	,__soundTransform: null
	,__stopped: null
	,stop: function() {
		if(this.__soundID != null) this.__dispose();
		this.__stopped = true;
	}
	,__dispose: function() {
		if(this.__soundID != null && this.__howl != null) {
			this.__howl.off("end",$bind(this,this.howl_onEnd));
			this.__howl.stop(this.__soundID);
			this.__howl = null;
		}
	}
	,get_soundTransform: function() {
		return new flash.media.SoundTransform(this.__soundTransform.volume,this.__soundTransform.pan);
	}
	,set_soundTransform: function(value) {
		this.__soundTransform.volume = value.volume;
		this.__soundTransform.pan = value.pan;
		if(this.__soundID != null) {
			this.__howl.volume(this.__soundTransform.volume,this.__soundID);
			this.__howl.pos(this.__soundTransform.pan,this.__soundID);
		}
		return value;
	}
	,howl_onEnd: function(_) {
		if(!this.__loop) {
			this.__dispose();
			this.dispatchEvent(new flash.events.Event(flash.events.Event.SOUND_COMPLETE));
		}
	}
	,howl_onPlay: function(soundID) {
		this.__soundID = soundID;
		if(this.__stopped) this.__dispose(); else {
			this.__howl.volume(this.__soundTransform.volume,this.__soundID);
			this.__howl.pos(this.__soundTransform.pan,this.__soundID);
			if(this.__loop) this.__howl.loop(true);
		}
	}
	,__class__: flash.media.SoundChannel
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
	bufferTime: null
	,checkPolicyFile: null
	,__class__: flash.media.SoundLoaderContext
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
	leftToLeft: null
	,leftToRight: null
	,pan: null
	,rightToLeft: null
	,rightToRight: null
	,volume: null
	,__class__: flash.media.SoundTransform
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
	bytesLoaded: null
	,bytesTotal: null
	,data: null
	,dataFormat: null
	,close: function() {
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
	contentType: null
	,data: null
	,method: null
	,requestHeaders: null
	,url: null
	,formatRequestHeaders: function() {
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
	name: null
	,value: null
	,__class__: flash.net.URLRequestHeader
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
	parentDomain: null
	,getDefinition: function(name) {
		return Type.resolveClass(name);
	}
	,hasDefinition: function(name) {
		return Type.resolveClass(name) != null;
	}
	,__class__: flash.system.ApplicationDomain
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
	fontName: null
	,fontStyle: null
	,fontType: null
	,__class__: flash.text.Font
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
	antiAliasType: null
	,autoSize: null
	,background: null
	,backgroundColor: null
	,border: null
	,borderColor: null
	,bottomScrollV: null
	,caretIndex: null
	,caretPos: null
	,displayAsPassword: null
	,embedFonts: null
	,gridFitType: null
	,length: null
	,maxChars: null
	,maxScrollH: null
	,maxScrollV: null
	,multiline: null
	,numLines: null
	,restrict: null
	,scrollH: null
	,scrollV: null
	,selectable: null
	,selectionBeginIndex: null
	,selectionEndIndex: null
	,sharpness: null
	,textHeight: null
	,textWidth: null
	,type: null
	,wordWrap: null
	,__canvas: null
	,__context: null
	,__dirty: null
	,__height: null
	,__isHTML: null
	,__ranges: null
	,__text: null
	,__textFormat: null
	,__width: null
	,appendText: function(text) {
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
		return format;
	}
	,__getBounds: function(rect,matrix) {
		var bounds = new flash.geom.Rectangle(0,0,this.get_width(),this.get_height());
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
		var _g = format.font;
		switch(_g) {
		case "_sans":
			font += "sans-serif";
			break;
		case "_serif":
			font += "serif";
			break;
		case "_typewriter":
			font += "monospace";
			break;
		default:
			font += format.font;
		}
		return font;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.visible || interactiveOnly && !this.mouseEnabled) return false;
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
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable) return;
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
						if(this.border) {
							this.__context.lineWidth = 1;
							this.__context.strokeStyle = "#" + StringTools.hex(this.borderColor,6);
						}
						if(this.background) this.__context.fillStyle = "#" + StringTools.hex(this.backgroundColor,6);
						this.__context.rect(0,0,this.__width,this.__height);
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
						if(this.border) {
							this.__context.lineWidth = 1;
							this.__context.strokeStyle = "#" + StringTools.hex(this.borderColor,6);
						}
						if(this.background) this.__context.fillStyle = "#" + StringTools.hex(this.backgroundColor,6);
						this.__context.rect(0,0,this.__width,this.__height);
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
			context.drawImage(this.__canvas,0,0);
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
		this.__textFormat = flash.text.TextField.__defaultTextFormat.clone();
		this.__textFormat.__merge(value);
		return value;
	}
	,get_height: function() {
		return this.__height * this.scaleY;
	}
	,set_height: function(value) {
		if(this.scaleY != 1 || value != this.__height) this.__dirty = true;
		this.scaleY = 1;
		return this.__height = value;
	}
	,get_htmlText: function() {
		return this.__text;
	}
	,set_htmlText: function(value) {
		if(!this.__isHTML || this.__text != value) this.__dirty = true;
		this.__ranges = null;
		this.__isHTML = true;
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
				range.format.color = null;
			}
		}
		return this.__textFormat.color = value;
	}
	,get_textWidth: function() {
		return this.__width - 4;
	}
	,get_textHeight: function() {
		return this.__height - 4;
	}
	,set_type: function(value) {
		return this.type = value;
	}
	,get_width: function() {
		return this.__width * this.scaleX;
	}
	,set_width: function(value) {
		if(this.scaleX != 1 || this.__width != value) this.__dirty = true;
		this.scaleX = 1;
		return this.__width = value;
	}
	,set_wordWrap: function(value) {
		return this.wordWrap = value;
	}
	,__class__: flash.text.TextField
});
flash.text.TextFormatRange = function(format,start,end) {
	this.format = format;
	this.start = start;
	this.end = end;
};
$hxClasses["flash.text.TextFormatRange"] = flash.text.TextFormatRange;
flash.text.TextFormatRange.__name__ = ["flash","text","TextFormatRange"];
flash.text.TextFormatRange.prototype = {
	end: null
	,format: null
	,start: null
	,__class__: flash.text.TextFormatRange
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
	align: null
	,blockIndent: null
	,bold: null
	,bullet: null
	,color: null
	,font: null
	,indent: null
	,italic: null
	,kerning: null
	,leading: null
	,leftMargin: null
	,letterSpacing: null
	,rightMargin: null
	,size: null
	,tabStops: null
	,target: null
	,underline: null
	,url: null
	,clone: function() {
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
		return 18;
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
		return 18;
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
	bytesAvailable: null
	,length: null
	,objectEncoding: null
	,position: null
	,allocated: null
	,byteView: null
	,data: null
	,littleEndian: null
	,clear: function() {
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
		if((function($this) {
			var $r;
			var aNeg = 0 < 0;
			var bNeg = offset < 0;
			$r = aNeg != bNeg?aNeg:0 > offset;
			return $r;
		}(this)) || (function($this) {
			var $r;
			var aNeg1 = 0 < 0;
			var bNeg1 = length < 0;
			$r = aNeg1 != bNeg1?aNeg1:0 > length;
			return $r;
		}(this))) throw new flash.errors.IOError("Write error - Out of bounds");
		if((function($this) {
			var $r;
			var $int = length;
			$r = $int < 0?4294967296.0 + $int:$int + 0.0;
			return $r;
		}(this)) == 0) length = bytes.length;
		var lengthToEnsure = this.position + length;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.byteView.set(bytes.byteView.subarray(offset,offset + length),this.position);
		this.position = this.position + length;
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
};
flash.utils.Endian = function() { };
$hxClasses["flash.utils.Endian"] = flash.utils.Endian;
flash.utils.Endian.__name__ = ["flash","utils","Endian"];
var format = {};
format.SVG = function(content) {
	this.data = new format.svg.SVGData(Xml.parse(content));
};
$hxClasses["format.SVG"] = format.SVG;
format.SVG.__name__ = ["format","SVG"];
format.SVG.prototype = {
	data: null
	,render: function(graphics,x,y,width,height) {
		if(height == null) height = -1;
		if(width == null) width = -1;
		if(y == null) y = 0;
		if(x == null) x = 0;
		var matrix = new flash.geom.Matrix();
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
	commands: null
	,f2a: function(f) {
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
format.gfx.GfxBytes = function(inBuffer,inFlags) {
	if(inFlags == null) inFlags = 0;
	format.gfx.Gfx.call(this);
	if(inBuffer == null) this.buffer = new flash.utils.ByteArray(); else this.buffer = inBuffer;
};
$hxClasses["format.gfx.GfxBytes"] = format.gfx.GfxBytes;
format.gfx.GfxBytes.__name__ = ["format","gfx","GfxBytes"];
format.gfx.GfxBytes.baseCoder = null;
format.gfx.GfxBytes.fromString = function(inString) {
	if(format.gfx.GfxBytes.baseCoder == null) format.gfx.GfxBytes.baseCoder = new haxe.crypto.BaseCode(haxe.io.Bytes.ofString(format.gfx.GfxBytes.base64));
	var bytes = new flash.utils.ByteArray();
	bytes.writeUTF(inString);
	return new format.gfx.GfxBytes(bytes);
};
format.gfx.GfxBytes.__super__ = format.gfx.Gfx;
format.gfx.GfxBytes.prototype = $extend(format.gfx.Gfx.prototype,{
	buffer: null
	,toString: function() {
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
				grad.type = Type.createEnumIndex(flash.display.GradientType,this.buffer.readByte());
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
	extent: null
	,addExtent: function(inX,inY) {
		if(this.extent == null) {
			this.extent = new flash.geom.Rectangle(inX,inY,0,0);
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
	graphics: null
	,beginGradientFill: function(grad) {
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
	text: null
	,geometryOnly: function() {
		return true;
	}
	,renderText: function(inText) {
		if(this.text == null) this.text = inText;
	}
	,__class__: format.gfx.GfxTextFinder
});
format.gfx.Gradient = function() {
	this.type = flash.display.GradientType.LINEAR;
	this.colors = [];
	this.alphas = [];
	this.ratios = [];
	this.matrix = new flash.geom.Matrix();
	this.spread = flash.display.SpreadMethod.PAD;
	this.interp = flash.display.InterpolationMethod.RGB;
	this.focus = 0.0;
};
$hxClasses["format.gfx.Gradient"] = format.gfx.Gradient;
format.gfx.Gradient.__name__ = ["format","gfx","Gradient"];
format.gfx.Gradient.prototype = {
	type: null
	,colors: null
	,alphas: null
	,ratios: null
	,matrix: null
	,spread: null
	,interp: null
	,focus: null
	,__class__: format.gfx.Gradient
};
format.gfx.LineStyle = function() {
	this.thickness = 1.0;
	this.color = 0;
	this.alpha = 1.0;
	this.pixelHinting = false;
	this.scaleMode = flash.display.LineScaleMode.NORMAL;
	this.capsStyle = "round";
	this.jointStyle = "round";
	this.miterLimit = 3.0;
};
$hxClasses["format.gfx.LineStyle"] = format.gfx.LineStyle;
format.gfx.LineStyle.__name__ = ["format","gfx","LineStyle"];
format.gfx.LineStyle.prototype = {
	thickness: null
	,color: null
	,alpha: null
	,pixelHinting: null
	,scaleMode: null
	,capsStyle: null
	,jointStyle: null
	,miterLimit: null
	,__class__: format.gfx.LineStyle
};
format.svg = {};
format.svg.FillType = $hxClasses["format.svg.FillType"] = { __ename__ : true, __constructs__ : ["FillGrad","FillSolid","FillNone"] };
format.svg.FillType.FillGrad = function(grad) { var $x = ["FillGrad",0,grad]; $x.__enum__ = format.svg.FillType; $x.toString = $estr; return $x; };
format.svg.FillType.FillSolid = function(colour) { var $x = ["FillSolid",1,colour]; $x.__enum__ = format.svg.FillType; $x.toString = $estr; return $x; };
format.svg.FillType.FillNone = ["FillNone",2];
format.svg.FillType.FillNone.toString = $estr;
format.svg.FillType.FillNone.__enum__ = format.svg.FillType;
format.svg.Grad = function(inType) {
	format.gfx.Gradient.call(this);
	this.type = inType;
	this.radius = 0.0;
	this.gradMatrix = new flash.geom.Matrix();
	this.x1 = 0.0;
	this.y1 = 0.0;
	this.x2 = 0.0;
	this.y2 = 0.0;
};
$hxClasses["format.svg.Grad"] = format.svg.Grad;
format.svg.Grad.__name__ = ["format","svg","Grad"];
format.svg.Grad.__super__ = format.gfx.Gradient;
format.svg.Grad.prototype = $extend(format.gfx.Gradient.prototype,{
	gradMatrix: null
	,radius: null
	,x1: null
	,y1: null
	,x2: null
	,y2: null
	,updateMatrix: function(inMatrix) {
		var dx = this.x2 - this.x1;
		var dy = this.y2 - this.y1;
		var theta = Math.atan2(dy,dx);
		var len = Math.sqrt(dx * dx + dy * dy);
		var mtx = new flash.geom.Matrix();
		if(this.type == flash.display.GradientType.LINEAR) {
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
	,name: null
	,children: null
	,__class__: format.svg.Group
};
format.svg.DisplayElement = $hxClasses["format.svg.DisplayElement"] = { __ename__ : true, __constructs__ : ["DisplayPath","DisplayGroup","DisplayText"] };
format.svg.DisplayElement.DisplayPath = function(path) { var $x = ["DisplayPath",0,path]; $x.__enum__ = format.svg.DisplayElement; $x.toString = $estr; return $x; };
format.svg.DisplayElement.DisplayGroup = function(group) { var $x = ["DisplayGroup",1,group]; $x.__enum__ = format.svg.DisplayElement; $x.toString = $estr; return $x; };
format.svg.DisplayElement.DisplayText = function(text) { var $x = ["DisplayText",2,text]; $x.__enum__ = format.svg.DisplayElement; $x.toString = $estr; return $x; };
format.svg.Path = function() {
};
$hxClasses["format.svg.Path"] = format.svg.Path;
format.svg.Path.__name__ = ["format","svg","Path"];
format.svg.Path.prototype = {
	matrix: null
	,name: null
	,font_size: null
	,fill: null
	,alpha: null
	,fill_alpha: null
	,stroke_alpha: null
	,stroke_colour: null
	,stroke_width: null
	,stroke_caps: null
	,joint_style: null
	,miter_limit: null
	,segments: null
	,__class__: format.svg.Path
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
	lastMoveX: null
	,lastMoveY: null
	,prev: null
	,parse: function(pathToParse,inConvertCubics) {
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
	x: null
	,y: null
	,getType: function() {
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
	cx: null
	,cy: null
	,prevCX: function() {
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
	cx1: null
	,cy1: null
	,cx2: null
	,cy2: null
	,prevCX: function() {
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
	x1: null
	,y1: null
	,rx: null
	,ry: null
	,phi: null
	,fA: null
	,fS: null
	,toGfx: function(inGfx,ioContext) {
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
	,matrix: null
	,rect: null
	,rectW: null
	,rectH: null
	,firstX: null
	,firstY: null
	,lastX: null
	,lastY: null
	,__class__: format.svg.RenderContext
};
format.svg.SVG2Gfx = function(inXml) {
	this.renderer = new format.svg.SVGRenderer(new format.svg.SVGData(inXml));
};
$hxClasses["format.svg.SVG2Gfx"] = format.svg.SVG2Gfx;
format.svg.SVG2Gfx.__name__ = ["format","svg","SVG2Gfx"];
format.svg.SVG2Gfx.prototype = {
	renderer: null
	,createShape: function() {
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
	this.loadGroup(this,svg,new flash.geom.Matrix(),null);
};
$hxClasses["format.svg.SVGData"] = format.svg.SVGData;
format.svg.SVGData.__name__ = ["format","svg","SVGData"];
format.svg.SVGData.__super__ = format.svg.Group;
format.svg.SVGData.prototype = $extend(format.svg.Group.prototype,{
	height: null
	,width: null
	,mConvertCubics: null
	,mGrads: null
	,mPathParser: null
	,applyTransform: function(ioMatrix,inTrans) {
		var scale = 1.0;
		if(format.svg.SVGData.mTranslateMatch.match(inTrans)) ioMatrix.translate(Std.parseFloat(format.svg.SVGData.mTranslateMatch.matched(1)),Std.parseFloat(format.svg.SVGData.mTranslateMatch.matched(2))); else if(format.svg.SVGData.mScaleMatch.match(inTrans)) {
			var s = Std.parseFloat(format.svg.SVGData.mScaleMatch.matched(1));
			ioMatrix.scale(s,s);
			scale = s;
		} else if(format.svg.SVGData.mMatrixMatch.match(inTrans)) {
			var m = new flash.geom.Matrix(Std.parseFloat(format.svg.SVGData.mMatrixMatch.matched(1)),Std.parseFloat(format.svg.SVGData.mMatrixMatch.matched(2)),Std.parseFloat(format.svg.SVGData.mMatrixMatch.matched(3)),Std.parseFloat(format.svg.SVGData.mMatrixMatch.matched(4)),Std.parseFloat(format.svg.SVGData.mMatrixMatch.matched(5)),Std.parseFloat(format.svg.SVGData.mMatrixMatch.matched(6)));
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
				if(name == "linearGradient") this.loadGradient(def,flash.display.GradientType.LINEAR,pass == 1); else if(name == "radialGradient") this.loadGradient(def,flash.display.GradientType.RADIAL,pass == 1);
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
			matrix = new flash.geom.Matrix(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
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
			} else if(name == "path" || name == "line" || name == "polyline") g.children.push(format.svg.DisplayElement.DisplayPath(this.loadPath(el,matrix,styles,false,false))); else if(name == "rect") g.children.push(format.svg.DisplayElement.DisplayPath(this.loadPath(el,matrix,styles,true,false))); else if(name == "polygon") g.children.push(format.svg.DisplayElement.DisplayPath(this.loadPath(el,matrix,styles,false,false))); else if(name == "ellipse") g.children.push(format.svg.DisplayElement.DisplayPath(this.loadPath(el,matrix,styles,false,true))); else if(name == "circle") g.children.push(format.svg.DisplayElement.DisplayPath(this.loadPath(el,matrix,styles,false,true,true))); else if(name == "text") g.children.push(format.svg.DisplayElement.DisplayText(this.loadText(el,matrix,styles))); else if(name == "linearGradient") this.loadGradient(el,flash.display.GradientType.LINEAR,true); else if(name == "radialGradient") this.loadGradient(el,flash.display.GradientType.RADIAL,true); else {
			}
		}
		return g;
	}
	,loadPath: function(inPath,matrix,inStyles,inIsRect,inIsEllipse,inIsCircle) {
		if(inIsCircle == null) inIsCircle = false;
		if(inPath.exists("transform")) {
			matrix = new flash.geom.Matrix(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
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
			matrix = new flash.geom.Matrix(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
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
	width: null
	,height: null
	,mSvg: null
	,mRoot: null
	,mGfx: null
	,mMatrix: null
	,mScaleRect: null
	,mScaleW: null
	,mScaleH: null
	,mFilter: null
	,mGroupPath: null
	,iterate: function(inGfx,inFilter) {
		this.mGfx = inGfx;
		this.mMatrix = new flash.geom.Matrix();
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
		if(inMatrix == null) this.mMatrix = new flash.geom.Matrix(); else this.mMatrix = new flash.geom.Matrix(inMatrix.a,inMatrix.b,inMatrix.c,inMatrix.d,inMatrix.tx,inMatrix.ty);
		this.mScaleRect = inScaleRect;
		this.mScaleW = inScaleW;
		this.mScaleH = inScaleH;
		this.mFilter = inFilter;
		this.mGroupPath = [];
		this.iterateGroup(this.mRoot,inFilter == null);
	}
	,renderRect: function(inGfx,inFilter,scaleRect,inBounds,inRect) {
		var matrix = new flash.geom.Matrix();
		matrix.tx = inRect.x - inBounds.x;
		matrix.ty = inRect.y - inBounds.y;
		if(scaleRect != null) {
			var extraX = inRect.width - (inBounds.width - scaleRect.width);
			var extraY = inRect.height - (inBounds.height - scaleRect.height);
			this.render(inGfx,matrix,inFilter,scaleRect,extraX,extraY);
		} else this.render(inGfx,matrix,inFilter);
	}
	,renderRect0: function(inGfx,inFilter,scaleRect,inBounds,inRect) {
		var matrix = new flash.geom.Matrix();
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
		if(inMatrix == null) this.mMatrix = new flash.geom.Matrix(); else this.mMatrix = new flash.geom.Matrix(inMatrix.a,inMatrix.b,inMatrix.c,inMatrix.d,inMatrix.tx,inMatrix.ty);
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
		var shape = new flash.display.Shape();
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
		this.mMatrix = new flash.geom.Matrix(inScale,0,0,inScale,-inRect.x * inScale,-inRect.y * inScale);
		var w = Std["int"](Math.ceil(inRect == null?this.width:inRect.width * inScale));
		var h = Std["int"](Math.ceil(inRect == null?this.width:inRect.height * inScale));
		var bmp = new flash.display.BitmapData(w,h,true,0);
		var shape = new flash.display.Shape();
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
	name: null
	,x: null
	,y: null
	,matrix: null
	,text: null
	,fill: null
	,fill_alpha: null
	,stroke_alpha: null
	,stroke_colour: null
	,stroke_width: null
	,font_family: null
	,font_size: null
	,kerning: null
	,letter_spacing: null
	,__class__: format.svg.Text
};
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
	buf: null
	,pos: null
	,length: null
	,cache: null
	,scache: null
	,resolver: null
	,setResolver: function(r) {
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
haxe.Utf8.encode = function(s) {
	throw "Not implemented";
	return s;
};
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
haxe.crypto.BaseCode.encode = function(s,base) {
	var b = new haxe.crypto.BaseCode(haxe.io.Bytes.ofString(base));
	return b.encodeString(s);
};
haxe.crypto.BaseCode.decode = function(s,base) {
	var b = new haxe.crypto.BaseCode(haxe.io.Bytes.ofString(base));
	return b.decodeString(s);
};
haxe.crypto.BaseCode.prototype = {
	base: null
	,nbits: null
	,tbl: null
	,encodeBytes: function(b) {
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
	,encodeString: function(s) {
		return this.encodeBytes(haxe.io.Bytes.ofString(s)).toString();
	}
	,decodeString: function(s) {
		return this.decodeBytes(haxe.io.Bytes.ofString(s)).toString();
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
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
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
	length: null
	,b: null
	,get: function(pos) {
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
haxe.io.Eof = function() { };
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
	dir: null
	,file: null
	,ext: null
	,backslash: null
	,toString: function() {
		return (this.dir == null?"":this.dir + (this.backslash?"\\":"/")) + this.file + (this.ext == null?"":"." + this.ext);
	}
	,__class__: haxe.io.Path
};
haxe.unit = {};
haxe.unit.TestCase = function() {
};
$hxClasses["haxe.unit.TestCase"] = haxe.unit.TestCase;
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
$hxClasses["haxe.unit.TestResult"] = haxe.unit.TestResult;
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
$hxClasses["haxe.unit.TestRunner"] = haxe.unit.TestRunner;
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
$hxClasses["haxe.unit.TestStatus"] = haxe.unit.TestStatus;
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
var jasononeil = {};
jasononeil.CleverSort = function() { };
$hxClasses["jasononeil.CleverSort"] = jasononeil.CleverSort;
jasononeil.CleverSort.__name__ = ["jasononeil","CleverSort"];
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
nx3.EBarType = $hxClasses["nx3.EBarType"] = { __ename__ : true, __constructs__ : ["Normal","Repeat","Ignore","Folded"] };
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
nx3.EClef = $hxClasses["nx3.EClef"] = { __ename__ : true, __constructs__ : ["ClefG","ClefF","ClefC"] };
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
nx3.EDirectionUAD = $hxClasses["nx3.EDirectionUAD"] = { __ename__ : true, __constructs__ : ["Up","Auto","Down"] };
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
nx3.EDirectionUD = $hxClasses["nx3.EDirectionUD"] = { __ename__ : true, __constructs__ : ["Up","Down"] };
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
nx3.EDisplayALN = $hxClasses["nx3.EDisplayALN"] = { __ename__ : true, __constructs__ : ["Always","Layout","Never"] };
nx3.EDisplayALN.Always = ["Always",0];
nx3.EDisplayALN.Always.toString = $estr;
nx3.EDisplayALN.Always.__enum__ = nx3.EDisplayALN;
nx3.EDisplayALN.Layout = ["Layout",1];
nx3.EDisplayALN.Layout.toString = $estr;
nx3.EDisplayALN.Layout.__enum__ = nx3.EDisplayALN;
nx3.EDisplayALN.Never = ["Never",2];
nx3.EDisplayALN.Never.toString = $estr;
nx3.EDisplayALN.Never.__enum__ = nx3.EDisplayALN;
nx3.EDot = $hxClasses["nx3.EDot"] = { __ename__ : true, __constructs__ : ["Normal","Double"] };
nx3.EDot.Normal = function(level) { var $x = ["Normal",0,level]; $x.__enum__ = nx3.EDot; $x.toString = $estr; return $x; };
nx3.EDot.Double = function(level) { var $x = ["Double",1,level]; $x.__enum__ = nx3.EDot; $x.toString = $estr; return $x; };
nx3.EHeadPosition = $hxClasses["nx3.EHeadPosition"] = { __ename__ : true, __constructs__ : ["Left","Center","Right"] };
nx3.EHeadPosition.Left = ["Left",0];
nx3.EHeadPosition.Left.toString = $estr;
nx3.EHeadPosition.Left.__enum__ = nx3.EHeadPosition;
nx3.EHeadPosition.Center = ["Center",1];
nx3.EHeadPosition.Center.toString = $estr;
nx3.EHeadPosition.Center.__enum__ = nx3.EHeadPosition;
nx3.EHeadPosition.Right = ["Right",2];
nx3.EHeadPosition.Right.toString = $estr;
nx3.EHeadPosition.Right.__enum__ = nx3.EHeadPosition;
nx3.EHeadType = $hxClasses["nx3.EHeadType"] = { __ename__ : true, __constructs__ : ["Normal","Rythmic","Crossed"] };
nx3.EHeadType.Normal = ["Normal",0];
nx3.EHeadType.Normal.toString = $estr;
nx3.EHeadType.Normal.__enum__ = nx3.EHeadType;
nx3.EHeadType.Rythmic = ["Rythmic",1];
nx3.EHeadType.Rythmic.toString = $estr;
nx3.EHeadType.Rythmic.__enum__ = nx3.EHeadType;
nx3.EHeadType.Crossed = ["Crossed",2];
nx3.EHeadType.Crossed.toString = $estr;
nx3.EHeadType.Crossed.__enum__ = nx3.EHeadType;
nx3.EHeadValueType = $hxClasses["nx3.EHeadValueType"] = { __ename__ : true, __constructs__ : ["HVT4","HVT2","HVT1"] };
nx3.EHeadValueType.HVT4 = ["HVT4",0];
nx3.EHeadValueType.HVT4.toString = $estr;
nx3.EHeadValueType.HVT4.__enum__ = nx3.EHeadValueType;
nx3.EHeadValueType.HVT2 = ["HVT2",1];
nx3.EHeadValueType.HVT2.toString = $estr;
nx3.EHeadValueType.HVT2.__enum__ = nx3.EHeadValueType;
nx3.EHeadValueType.HVT1 = ["HVT1",2];
nx3.EHeadValueType.HVT1.toString = $estr;
nx3.EHeadValueType.HVT1.__enum__ = nx3.EHeadValueType;
nx3.EKey = $hxClasses["nx3.EKey"] = { __ename__ : true, __constructs__ : ["Sharp6","Sharp5","Sharp4","Sharp3","Sharp2","Sharp1","Natural","Flat1","Flat2","Flat3","Flat4","Flat5","Flat6"] };
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
nx3.ELyricContinuation = $hxClasses["nx3.ELyricContinuation"] = { __ename__ : true, __constructs__ : ["Hyphen","Melisma"] };
nx3.ELyricContinuation.Hyphen = ["Hyphen",0];
nx3.ELyricContinuation.Hyphen.toString = $estr;
nx3.ELyricContinuation.Hyphen.__enum__ = nx3.ELyricContinuation;
nx3.ELyricContinuation.Melisma = ["Melisma",1];
nx3.ELyricContinuation.Melisma.toString = $estr;
nx3.ELyricContinuation.Melisma.__enum__ = nx3.ELyricContinuation;
nx3.ELyricFormat = $hxClasses["nx3.ELyricFormat"] = { __ename__ : true, __constructs__ : ["Bold","Italic","Format"] };
nx3.ELyricFormat.Bold = ["Bold",0];
nx3.ELyricFormat.Bold.toString = $estr;
nx3.ELyricFormat.Bold.__enum__ = nx3.ELyricFormat;
nx3.ELyricFormat.Italic = ["Italic",1];
nx3.ELyricFormat.Italic.toString = $estr;
nx3.ELyricFormat.Italic.__enum__ = nx3.ELyricFormat;
nx3.ELyricFormat.Format = function(fontName,size,bold,Italic) { var $x = ["Format",2,fontName,size,bold,Italic]; $x.__enum__ = nx3.ELyricFormat; $x.toString = $estr; return $x; };
nx3.ENotationVariant = $hxClasses["nx3.ENotationVariant"] = { __ename__ : true, __constructs__ : ["Normal","Rythmic","RythmicSingleLevel","HeadsOnly","StavesOnly"] };
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
nx3.ENoteArticulation = $hxClasses["nx3.ENoteArticulation"] = { __ename__ : true, __constructs__ : ["Staccato","Tenuto","Marcato"] };
nx3.ENoteArticulation.Staccato = ["Staccato",0];
nx3.ENoteArticulation.Staccato.toString = $estr;
nx3.ENoteArticulation.Staccato.__enum__ = nx3.ENoteArticulation;
nx3.ENoteArticulation.Tenuto = ["Tenuto",1];
nx3.ENoteArticulation.Tenuto.toString = $estr;
nx3.ENoteArticulation.Tenuto.__enum__ = nx3.ENoteArticulation;
nx3.ENoteArticulation.Marcato = ["Marcato",2];
nx3.ENoteArticulation.Marcato.toString = $estr;
nx3.ENoteArticulation.Marcato.__enum__ = nx3.ENoteArticulation;
nx3.ENoteAttributes = $hxClasses["nx3.ENoteAttributes"] = { __ename__ : true, __constructs__ : ["Arpeggio","Clef"] };
nx3.ENoteAttributes.Arpeggio = function(top,bottomY) { var $x = ["Arpeggio",0,top,bottomY]; $x.__enum__ = nx3.ENoteAttributes; $x.toString = $estr; return $x; };
nx3.ENoteAttributes.Clef = function(variant) { var $x = ["Clef",1,variant]; $x.__enum__ = nx3.ENoteAttributes; $x.toString = $estr; return $x; };
nx3.ENoteType = $hxClasses["nx3.ENoteType"] = { __ename__ : true, __constructs__ : ["Note","Pause","BarPause","Tpl","Lyric","Chord","Dynam"] };
nx3.ENoteType.Note = function(heads,variant,articulations,attributes) { var $x = ["Note",0,heads,variant,articulations,attributes]; $x.__enum__ = nx3.ENoteType; $x.toString = $estr; return $x; };
nx3.ENoteType.Pause = function(level) { var $x = ["Pause",1,level]; $x.__enum__ = nx3.ENoteType; $x.toString = $estr; return $x; };
nx3.ENoteType.BarPause = ["BarPause",2];
nx3.ENoteType.BarPause.toString = $estr;
nx3.ENoteType.BarPause.__enum__ = nx3.ENoteType;
nx3.ENoteType.Tpl = ["Tpl",3];
nx3.ENoteType.Tpl.toString = $estr;
nx3.ENoteType.Tpl.__enum__ = nx3.ENoteType;
nx3.ENoteType.Lyric = function(text,offset,continuation,format) { var $x = ["Lyric",4,text,offset,continuation,format]; $x.__enum__ = nx3.ENoteType; $x.toString = $estr; return $x; };
nx3.ENoteType.Chord = ["Chord",5];
nx3.ENoteType.Chord.toString = $estr;
nx3.ENoteType.Chord.__enum__ = nx3.ENoteType;
nx3.ENoteType.Dynam = ["Dynam",6];
nx3.ENoteType.Dynam.toString = $estr;
nx3.ENoteType.Dynam.__enum__ = nx3.ENoteType;
nx3.ENoteVal = $hxClasses["nx3.ENoteVal"] = { __ename__ : true, __constructs__ : ["Nv1","Nv1dot","Nv1ddot","Nv1tri","Nv2","Nv2dot","Nv2ddot","Nv2tri","Nv4","Nv4dot","Nv4ddot","Nv4tri","Nv8","Nv8dot","Nv8ddot","Nv8tri","Nv16","Nv16dot","Nv16ddot","Nv16tri","Nv32","Nv32dot","Nv32ddot","Nv32tri"] };
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
nx3.EPartType = $hxClasses["nx3.EPartType"] = { __ename__ : true, __constructs__ : ["Normal","Lyrics","Tpl","Tplchain","Dynamics","Chords","Ignore","Hidden"] };
nx3.EPartType.Normal = ["Normal",0];
nx3.EPartType.Normal.toString = $estr;
nx3.EPartType.Normal.__enum__ = nx3.EPartType;
nx3.EPartType.Lyrics = ["Lyrics",1];
nx3.EPartType.Lyrics.toString = $estr;
nx3.EPartType.Lyrics.__enum__ = nx3.EPartType;
nx3.EPartType.Tpl = ["Tpl",2];
nx3.EPartType.Tpl.toString = $estr;
nx3.EPartType.Tpl.__enum__ = nx3.EPartType;
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
nx3.EPosition = $hxClasses["nx3.EPosition"] = { __ename__ : true, __constructs__ : ["X","Y","XY","XYW"] };
nx3.EPosition.X = function(x) { var $x = ["X",0,x]; $x.__enum__ = nx3.EPosition; $x.toString = $estr; return $x; };
nx3.EPosition.Y = function(y) { var $x = ["Y",1,y]; $x.__enum__ = nx3.EPosition; $x.toString = $estr; return $x; };
nx3.EPosition.XY = function(x,y) { var $x = ["XY",2,x,y]; $x.__enum__ = nx3.EPosition; $x.toString = $estr; return $x; };
nx3.EPosition.XYW = function(x,y,w) { var $x = ["XYW",3,x,y,w]; $x.__enum__ = nx3.EPosition; $x.toString = $estr; return $x; };
nx3.ESign = $hxClasses["nx3.ESign"] = { __ename__ : true, __constructs__ : ["None","Natural","Flat","Sharp","DoubleFlat","DoubleSharp","ParNatural","ParFlat","ParSharp"] };
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
nx3.ETie = $hxClasses["nx3.ETie"] = { __ename__ : true, __constructs__ : ["Tie","Gliss"] };
nx3.ETie.Tie = function(direction,level) { var $x = ["Tie",0,direction,level]; $x.__enum__ = nx3.ETie; $x.toString = $estr; return $x; };
nx3.ETie.Gliss = function(direction,levelLeft,levelRight) { var $x = ["Gliss",1,direction,levelLeft,levelRight]; $x.__enum__ = nx3.ETie; $x.toString = $estr; return $x; };
nx3.ETime = $hxClasses["nx3.ETime"] = { __ename__ : true, __constructs__ : ["Time2_2","Time3_2","Time4_2","Time2_4","Time3_4","Time4_4","Time5_4","Time6_4","Time7_4","Time2_8","Time3_8","Time4_8","Time5_8","Time6_8","Time7_8","Time9_8","Time12_8","TimeCommon","TimeAllabreve"] };
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
		return "Common";
	case 18:
		return "Allabreve";
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
	case "Common":
		return nx3.ETime.TimeCommon;
	case "Allabreve":
		return nx3.ETime.TimeAllabreve;
	default:
		return null;
	}
	return null;
};
nx3.EVoiceType = $hxClasses["nx3.EVoiceType"] = { __ename__ : true, __constructs__ : ["Normal","Barpause"] };
nx3.EVoiceType.Normal = ["Normal",0];
nx3.EVoiceType.Normal.toString = $estr;
nx3.EVoiceType.Normal.__enum__ = nx3.EVoiceType;
nx3.EVoiceType.Barpause = ["Barpause",1];
nx3.EVoiceType.Barpause.toString = $estr;
nx3.EVoiceType.Barpause.__enum__ = nx3.EVoiceType;
nx3.NBar = function(parts,type,time,timeDisplay) {
	this.nparts = parts;
	if(type == null) this.type = nx3.EBarType.Normal; else this.type = type;
	this.time = time;
	if(timeDisplay == null) this.timeDisplay = nx3.EDisplayALN.Layout; else this.timeDisplay = timeDisplay;
};
$hxClasses["nx3.NBar"] = nx3.NBar;
nx3.NBar.__name__ = ["nx3","NBar"];
nx3.NBar.prototype = {
	nparts: null
	,type: null
	,time: null
	,timeDisplay: null
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
	level: null
	,type: null
	,sign: null
	,tie: null
	,tieTo: null
	,__class__: nx3.NHead
};
nx3.NNote = function(type,heads,value,direction) {
	if(type == null) if(heads != null) type = nx3.ENoteType.Note(heads); else type = nx3.ENoteType.Note([new nx3.NHead()]);
	if(type == null) this.type = nx3.ENoteType.Note(heads); else this.type = type;
	if(value == null) this.value = nx3.ENoteVal.Nv4; else this.value = value;
	if(direction == null) this.direction = nx3.EDirectionUAD.Auto; else this.direction = direction;
};
$hxClasses["nx3.NNote"] = nx3.NNote;
nx3.NNote.__name__ = ["nx3","NNote"];
nx3.NNote.prototype = {
	type: null
	,value: null
	,direction: null
	,nheads: null
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
				nheads.sort(function(i1,i2) {
					var cmp;
					cmp = Reflect.compare(i1.level,i2.level);
					if(cmp != 0) return cmp;
					return 0;
				});
				this.nheads_ = nheads;
				break;
			default:
				this.nheads_ = [];
			}
		}
		return this.nheads_;
	}
	,headLevels: null
	,getHeadLevels: function() {
		if(this.headLevels != null) return this.headLevels;
		this.headLevels = [];
		var _g = 0;
		var _g1 = this.get_nheads();
		while(_g < _g1.length) {
			var head = _g1[_g];
			++_g;
			this.headLevels.push(head.level);
		}
		return this.headLevels;
	}
	,getTopLevel: function() {
		return this.get_nheads()[0].level;
	}
	,getBottomLevel: function() {
		return this.get_nheads()[this.get_nheads().length - 1].level;
	}
	,__class__: nx3.NNote
};
nx3.NPart = function(voices,type,clef,clefDisplay,key,keyDisplay) {
	this.nvoices = voices;
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
	type: null
	,nvoices: null
	,clef: null
	,clefDisplay: null
	,key: null
	,keyDisplay: null
	,__class__: nx3.NPart
};
nx3.NVoice = function(notes,type,direction) {
	if(notes == null || notes == []) {
		this.nnotes = null;
		this.type = nx3.EVoiceType.Barpause;
	} else {
		this.nnotes = notes;
		if(type != null) this.type = type; else this.type = nx3.EVoiceType.Normal;
	}
	if(direction != null) this.direction = direction; else this.direction = nx3.EDirectionUAD.Auto;
};
$hxClasses["nx3.NVoice"] = nx3.NVoice;
nx3.NVoice.__name__ = ["nx3","NVoice"];
nx3.NVoice.prototype = {
	direction: null
	,nnotes: null
	,type: null
	,__class__: nx3.NVoice
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
nx3.QNote4 = function(headLevel,headLevels,signs) {
	if(signs == null) signs = "";
	nx3.QNote.call(this,headLevel,headLevels,null,null,nx3.ENoteVal.Nv4,signs);
};
$hxClasses["nx3.QNote4"] = nx3.QNote4;
nx3.QNote4.__name__ = ["nx3","QNote4"];
nx3.QNote4.__super__ = nx3.QNote;
nx3.QNote4.prototype = $extend(nx3.QNote.prototype,{
	__class__: nx3.QNote4
});
nx3.QNote8 = function(headLevel,headLevels,signs) {
	if(signs == null) signs = "";
	nx3.QNote.call(this,headLevel,headLevels,null,null,nx3.ENoteVal.Nv8);
};
$hxClasses["nx3.QNote8"] = nx3.QNote8;
nx3.QNote8.__name__ = ["nx3","QNote8"];
nx3.QNote8.__super__ = nx3.QNote;
nx3.QNote8.prototype = $extend(nx3.QNote.prototype,{
	__class__: nx3.QNote8
});
nx3.QNote16 = function(headLevel,headLevels,signs) {
	if(signs == null) signs = "";
	nx3.QNote.call(this,headLevel,headLevels,null,null,nx3.ENoteVal.Nv16);
};
$hxClasses["nx3.QNote16"] = nx3.QNote16;
nx3.QNote16.__name__ = ["nx3","QNote16"];
nx3.QNote16.__super__ = nx3.QNote;
nx3.QNote16.prototype = $extend(nx3.QNote.prototype,{
	__class__: nx3.QNote16
});
nx3.QNote2 = function(headLevel,headLevels,signs) {
	if(signs == null) signs = "";
	nx3.QNote.call(this,headLevel,headLevels,null,null,nx3.ENoteVal.Nv2);
};
$hxClasses["nx3.QNote2"] = nx3.QNote2;
nx3.QNote2.__name__ = ["nx3","QNote2"];
nx3.QNote2.__super__ = nx3.QNote;
nx3.QNote2.prototype = $extend(nx3.QNote.prototype,{
	__class__: nx3.QNote2
});
nx3.QNote1 = function(headLevel,headLevels,signs) {
	if(signs == null) signs = "";
	nx3.QNote.call(this,headLevel,headLevels,null,null,nx3.ENoteVal.Nv1);
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
nx3.VBar = function(nbar) {
	this._keys = null;
	this._clefs = null;
	this.nbar = nbar;
};
$hxClasses["nx3.VBar"] = nx3.VBar;
nx3.VBar.__name__ = ["nx3","VBar"];
nx3.VBar.prototype = {
	nbar: null
	,clefs: null
	,keys: null
	,time: null
	,_clefs: null
	,get_clefs: function() {
		if(this._clefs != null) return this._clefs;
		this._clefs = new Array();
		var _g = 0;
		var _g1 = this.getVParts();
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
		var _g1 = this.getVParts();
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
		var _g1 = this.getVParts();
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
		var _g1 = this.getVParts();
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
	,vparts: null
	,getVParts: function() {
		if(this.vparts != null) return this.vparts;
		this.vparts = [];
		var _g = 0;
		var _g1 = this.nbar.nparts;
		while(_g < _g1.length) {
			var npart = _g1[_g];
			++_g;
			this.vparts.push(new nx3.VPart(npart));
		}
		return this.vparts;
	}
	,vcolumns: null
	,getVColumns: function() {
		if(this.vcolumns != null) return this.vcolumns;
		if(this.vparts == null) this.getVParts();
		var generator = new nx3.VBarColumnsGenerator(this.vparts);
		this.vcolumns = generator.getColumns();
		this.positionsVColumns = generator.getPositionsColumns();
		return this.vcolumns;
	}
	,positionsVColumns: null
	,getPositionsColumns: function() {
		if(this.positionsVColumns == null) this.getVColumns();
		return this.positionsVColumns;
	}
	,vcolumnsPositions: null
	,getVColumnsPositions: function() {
		if(this.positionsVColumns == null) this.getVColumns();
		this.vcolumnsPositions = new haxe.ds.ObjectMap();
		var $it0 = this.positionsVColumns.keys();
		while( $it0.hasNext() ) {
			var pos = $it0.next();
			var vcolumn = this.positionsVColumns.get(pos);
			this.vcolumnsPositions.set(vcolumn,pos);
		}
		return this.vcolumnsPositions;
	}
	,value: null
	,getValue: function() {
		if(this.value != null) return this.value;
		var value = .0;
		var _g = 0;
		var _g1 = this.getVParts();
		while(_g < _g1.length) {
			var vpart = _g1[_g];
			++_g;
			value = Math.max(value,vpart.getValue());
		}
		this.value = value | 0;
		return this.value;
	}
	,vnotesVColumns: null
	,getVNotesVColumns: function() {
		if(this.vnotesVColumns != null) return this.vnotesVColumns;
		this.vnotesVColumns = new haxe.ds.ObjectMap();
		var _g = 0;
		var _g1 = this.getVParts();
		while(_g < _g1.length) {
			var vpart = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = vpart.getVVoices();
			while(_g2 < _g3.length) {
				var vvoice = _g3[_g2];
				++_g2;
				var _g4 = 0;
				var _g5 = vvoice.getVNotes();
				while(_g4 < _g5.length) {
					var vnote = _g5[_g4];
					++_g4;
					var pos;
					var this1 = vvoice.getVNotePositions();
					pos = this1.get(vnote);
					var vcolumn = this.getPositionsColumns().get(pos);
					this.vnotesVColumns.set(vnote,vcolumn);
				}
			}
		}
		return this.vnotesVColumns;
	}
	,vcomplexesVColumns: null
	,getVComplexesVColumns: function() {
		if(this.vcomplexesVColumns != null) return this.vcomplexesVColumns;
		this.vcomplexesVColumns = new haxe.ds.ObjectMap();
		var _g = 0;
		var _g1 = this.getVParts();
		while(_g < _g1.length) {
			var vpart = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = vpart.getVComplexes();
			while(_g2 < _g3.length) {
				var vcomplex = _g3[_g2];
				++_g2;
				var pos;
				var this1 = vpart.getVComplexesPositions();
				pos = this1.get(vcomplex);
				var vcolumn = this.getPositionsColumns().get(pos);
				this.vcomplexesVColumns.set(vcomplex,vcolumn);
			}
		}
		return this.vcomplexesVColumns;
	}
	,vcolumnsMinDistances: null
	,vcolumnsMinPositions: null
	,getVColumnsMinDistances: function() {
		if(this.vcolumnsMinDistances != null) return this.vcolumnsMinDistances;
		var distancesData = new nx3.VBarColumnsMinDistancesGenerator(this).getDistancesData();
		this.vcolumnsMinDistances = distancesData.distances;
		this.vcolumnsMinPositions = distancesData.positions;
		return this.vcolumnsMinDistances;
	}
	,getVColumnsMinPositions: function() {
		if(this.vcolumnsMinPositions != null) return this.vcolumnsMinPositions;
		if(this.vcolumnsMinDistances == null) this.getVColumnsMinDistances();
		return this.vcolumnsMinPositions;
	}
	,vcolumnsMinWidth: null
	,getVColumnsMinWidth: function() {
		if(this.vcolumnsMinWidth != null) return this.vcolumnsMinWidth;
		if(this.vcolumnsMinDistances == null) this.getVColumnsMinDistances();
		var lastColumn = cx.ArrayTools.last(this.getVColumns());
		var lastPosition;
		var this1 = this.getVColumnsMinPositions();
		lastPosition = this1.get(lastColumn);
		var lastDistance;
		var this2 = this.getVColumnsMinDistances();
		lastDistance = this2.get(lastColumn);
		this.vcolumnsMinWidth = lastPosition + lastDistance;
		return this.vcolumnsMinWidth;
	}
	,__class__: nx3.VBar
};
nx3.VBarColumnsGenerator = function(vparts) {
	this.vparts = vparts;
};
$hxClasses["nx3.VBarColumnsGenerator"] = nx3.VBarColumnsGenerator;
nx3.VBarColumnsGenerator.__name__ = ["nx3","VBarColumnsGenerator"];
nx3.VBarColumnsGenerator.prototype = {
	vparts: null
	,positions: null
	,columns: null
	,positionsColumns: null
	,getColumns: function() {
		if(this.columns != null) return this.columns;
		this.positions = this.calcPositions(this.vparts);
		this.calcColumns(this.positions,this.vparts);
		return this.columns;
	}
	,getPositionsColumns: function() {
		if(this.columns == null) this.getColumns();
		return this.positionsColumns;
	}
	,vcomplexesVColumns: null
	,getVComplexesVColumns: function() {
		if(this.columns == null) this.getColumns();
		return this.vcomplexesVColumns;
	}
	,calcColumns: function(positions,vparts) {
		var partsCount = vparts.length;
		this.columns = [];
		this.positionsColumns = new haxe.ds.IntMap();
		var _g = 0;
		while(_g < positions.length) {
			var pos = positions[_g];
			++_g;
			var vcomplexes = [];
			var _g1 = 0;
			while(_g1 < vparts.length) {
				var vpart = vparts[_g1];
				++_g1;
				var complex = vpart.getPositionsVComplexes().get(pos);
				vcomplexes.push(complex);
			}
			var vcolumn = new nx3.VColumn(vcomplexes);
			this.columns.push(vcolumn);
			this.positionsColumns.set(pos,vcolumn);
		}
	}
	,calcPositions: function(vparts) {
		var positionsMap = new haxe.ds.IntMap();
		var _g = 0;
		while(_g < vparts.length) {
			var vpart = vparts[_g];
			++_g;
			var poss = nx3.VMapTools.keysToArray(vpart.getPositionsVComplexes().keys());
			var _g1 = 0;
			while(_g1 < poss.length) {
				var pos = poss[_g1];
				++_g1;
				positionsMap.set(pos,true);
			}
		}
		var positions = nx3.VMapTools.keysToArray(positionsMap.keys());
		positions.sort(function(a,b) {
			return Reflect.compare(a,b);
		});
		return positions;
	}
	,__class__: nx3.VBarColumnsGenerator
};
nx3.VBarColumnsMinDistancesGenerator = function(vbar) {
	this.vbar = vbar;
};
$hxClasses["nx3.VBarColumnsMinDistancesGenerator"] = nx3.VBarColumnsMinDistancesGenerator;
nx3.VBarColumnsMinDistancesGenerator.__name__ = ["nx3","VBarColumnsMinDistancesGenerator"];
nx3.VBarColumnsMinDistancesGenerator.prototype = {
	vbar: null
	,getDistancesData: function() {
		var distances = this.getDistances();
		var positions = this.getPositions(distances);
		return { distances : distances, positions : positions};
	}
	,getDistances: function() {
		var distances = new haxe.ds.ObjectMap();
		var positions = new haxe.ds.ObjectMap();
		var nrOfColumns = this.vbar.getVColumns().length;
		var nrOfParts = this.vbar.getVParts().length;
		var prevComplexBucket = new haxe.ds.IntMap();
		var prevColumnBucket = new haxe.ds.IntMap();
		var curpos = 0;
		var _g = 0;
		while(_g < nrOfColumns) {
			var ic = _g++;
			var column = this.vbar.getVColumns()[ic];
			var nextColumn = cx.ArrayTools.indexOrNull(this.vbar.getVColumns(),ic + 1);
			var maxdist = 0;
			var _g1 = 0;
			while(_g1 < nrOfParts) {
				var ip = _g1++;
				var vpart = this.vbar.getVParts()[ip];
				var complex = column.vcomplexes[ip];
				var nextcomplex;
				if(nextColumn != null) nextcomplex = nextColumn.vcomplexes[ip]; else nextcomplex = null;
				if(complex != null && nextcomplex != null) {
					var dist = new nx3.VPartComplexesMinDistancesCalculator(vpart).getDistance(complex,nextcomplex);
					maxdist = Math.max(maxdist,dist);
					prevComplexBucket.set(ip,complex);
					prevColumnBucket.set(ip,column);
				} else if(complex == null && nextcomplex != null) maxdist = Math.max(3.2,maxdist); else if(complex != null && nextcomplex == null) {
					var dist1 = new nx3.VPartComplexesMinDistancesCalculator(vpart).getDistance(complex,nextcomplex);
					maxdist = Math.max(maxdist,dist1);
					prevComplexBucket.set(ip,complex);
					prevColumnBucket.set(ip,column);
				} else {
				}
			}
			distances.set(column,maxdist);
			positions.set(column,curpos);
			curpos = curpos + maxdist;
		}
		return distances;
	}
	,getPositions: function(distances) {
		var positions = new haxe.ds.ObjectMap();
		var curpos = this.getFirstColumnPosition();
		var _g = 0;
		var _g1 = this.vbar.getVColumns();
		while(_g < _g1.length) {
			var vcolumn = _g1[_g];
			++_g;
			var distance = distances.h[vcolumn.__id__];
			positions.set(vcolumn,curpos);
			curpos = curpos + distance;
		}
		return positions;
	}
	,getFirstColumnPosition: function() {
		var pos = 0;
		var _g = 0;
		var _g1 = this.vbar.getVParts();
		while(_g < _g1.length) {
			var vpart = _g1[_g];
			++_g;
			var distanceCalculator = new nx3.VPartComplexesMinDistancesCalculator(vpart);
			var firstcomplex = cx.ArrayTools.first(vpart.getVComplexes());
			var distancedata = distanceCalculator.getComplexLeftside(firstcomplex);
			var _g2 = 0;
			var _g3 = distancedata.rects;
			while(_g2 < _g3.length) {
				var rect = _g3[_g2];
				++_g2;
				pos = Math.max(pos,-rect.x);
			}
		}
		return pos;
	}
	,__class__: nx3.VBarColumnsMinDistancesGenerator
};
nx3.VBarConfig = function(showClef,showKey,showTime,showCautClef,showCautKey,showCautTime) {
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
$hxClasses["nx3.VBarConfig"] = nx3.VBarConfig;
nx3.VBarConfig.__name__ = ["nx3","VBarConfig"];
nx3.VBarConfig.prototype = {
	showClef: null
	,showKey: null
	,showTime: null
	,showCautClef: null
	,showCautKey: null
	,showCautTime: null
	,calculatedWidth: null
	,__class__: nx3.VBarConfig
};
nx3.VBeamgroup = function(vnotes) {
	this.value = null;
	this.vnotes = vnotes;
};
$hxClasses["nx3.VBeamgroup"] = nx3.VBeamgroup;
nx3.VBeamgroup.__name__ = ["nx3","VBeamgroup"];
nx3.VBeamgroup.prototype = {
	vnotes: null
	,direction: null
	,getDirection: function() {
		if(this.direction != null) return this.direction;
		this.direction = new nx3.VBeamgroupDirectionCalculator(this).getDirection();
		return this.direction;
	}
	,setDirection: function(val) {
		return this.direction = val;
	}
	,calculator: null
	,frame: null
	,getFrame: function() {
		if(this.frame != null) return this.frame;
		if(this.direction == null) this.getDirection();
		this.calculator = new nx3.VBeamgroupFrameCalculator(this);
		this.frame = this.calculator.getFrame();
		return this.frame;
	}
	,value: null
	,getValue: function() {
		if(this.value != null) return this.value;
		this.value = 0;
		var _g = 0;
		var _g1 = this.vnotes;
		while(_g < _g1.length) {
			var vnote = _g1[_g];
			++_g;
			this.value += nx3.ENoteValTools.value(vnote.nnote.value);
		}
		return this.value;
	}
	,__class__: nx3.VBeamgroup
};
nx3.VBeamgroupDirectionCalculator = function(beamgroup) {
	this.beamgroup = beamgroup;
};
$hxClasses["nx3.VBeamgroupDirectionCalculator"] = nx3.VBeamgroupDirectionCalculator;
nx3.VBeamgroupDirectionCalculator.__name__ = ["nx3","VBeamgroupDirectionCalculator"];
nx3.VBeamgroupDirectionCalculator.prototype = {
	beamgroup: null
	,getDirection: function() {
		this.topLevel = this.findTopLevel();
		this.bottomLevel = this.findBottomLevel();
		if(this.topLevel + this.bottomLevel <= 0) return nx3.EDirectionUD.Down;
		return nx3.EDirectionUD.Up;
	}
	,topLevel: null
	,findTopLevel: function() {
		var topLevel = this.beamgroup.vnotes[0].nnote.getTopLevel();
		if(this.beamgroup.vnotes.length == 1) return topLevel;
		var _g1 = 1;
		var _g = this.beamgroup.vnotes.length;
		while(_g1 < _g) {
			var i = _g1++;
			var level = this.beamgroup.vnotes[i].nnote.getTopLevel();
			topLevel = Std["int"](Math.min(topLevel,level));
		}
		return topLevel;
	}
	,bottomLevel: null
	,findBottomLevel: function() {
		var bottomLevel = this.beamgroup.vnotes[0].nnote.getBottomLevel();
		if(this.beamgroup.vnotes.length == 1) return bottomLevel;
		var _g1 = 1;
		var _g = this.beamgroup.vnotes.length;
		while(_g1 < _g) {
			var i = _g1++;
			var level = this.beamgroup.vnotes[i].nnote.getBottomLevel();
			bottomLevel = Std["int"](Math.max(bottomLevel,level));
		}
		return bottomLevel;
	}
	,__class__: nx3.VBeamgroupDirectionCalculator
};
nx3.VBeamgroupFrameCalculator = function(beamgroup) {
	this.beamgroup = beamgroup;
};
$hxClasses["nx3.VBeamgroupFrameCalculator"] = nx3.VBeamgroupFrameCalculator;
nx3.VBeamgroupFrameCalculator.__name__ = ["nx3","VBeamgroupFrameCalculator"];
nx3.VBeamgroupFrameCalculator.prototype = {
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
		return { leftInnerY : this.innerLevels[0], leftOuterY : this.outerLevels[0], rightInnerY : this.innerLevels[count - 1], rightOuterY : this.outerLevels[count - 1]};
	}
	,getTopLevels: function() {
		var levels = [];
		var _g = 0;
		var _g1 = this.beamgroup.vnotes;
		while(_g < _g1.length) {
			var vnote = _g1[_g];
			++_g;
			levels.push(vnote.nnote.getTopLevel());
		}
		return levels;
	}
	,getBottomLevels: function() {
		var levels = [];
		var _g = 0;
		var _g1 = this.beamgroup.vnotes;
		while(_g < _g1.length) {
			var vnote = _g1[_g];
			++_g;
			levels.push(vnote.nnote.getBottomLevel());
		}
		return levels;
	}
	,calcLevelArrays: function() {
		if(this.beamgroup.getDirection() == nx3.EDirectionUD.Up) {
			this.outerLevels = this.getTopLevels();
			this.innerLevels = this.getBottomLevels();
		} else {
			this.outerLevels = this.getBottomLevels();
			this.innerLevels = this.getTopLevels();
		}
	}
	,__class__: nx3.VBeamgroupFrameCalculator
};
nx3.VColumn = function(vcomplexes) {
	this.vcomplexes = vcomplexes;
};
$hxClasses["nx3.VColumn"] = nx3.VColumn;
nx3.VColumn.__name__ = ["nx3","VColumn"];
nx3.VColumn.prototype = {
	vcomplexes: null
	,__class__: nx3.VColumn
};
nx3.VComplex = function(vnotes,directions) {
	if(vnotes.length > 2) throw "VComplex nr of VNote(s) limited to max 2 - for now";
	this.vnotes = vnotes;
};
$hxClasses["nx3.VComplex"] = nx3.VComplex;
nx3.VComplex.__name__ = ["nx3","VComplex"];
nx3.VComplex.prototype = {
	vnotes: null
	,signs: null
	,visibleSigns: null
	,calculator: null
	,getVNotes: function() {
		return this.vnotes;
	}
	,getSigns: function() {
		this.calculator = new nx3.VComplexSignsCalculator(this.vnotes);
		this.signs = this.calculator.getSigns();
		this.visibleSigns = this.calculator.getVisibleSigns();
		return this.signs;
	}
	,getVisibleSigns: function() {
		if(this.visibleSigns != null) return this.visibleSigns;
		this.getSigns();
		return this.visibleSigns;
	}
	,signRects: null
	,getSignsRects: function(headsRects) {
		if(this.signRects != null) return this.signRects;
		if(this.getVisibleSigns().length == 0) return [];
		this.signRects = new nx3.VComplexSignsRectsCalculator(this.getVisibleSigns()).getSignRects(headsRects);
		return this.signRects;
	}
	,tiestoRects: null
	,getTiestoRects: function(headsRects) {
		if(this.signRects == null) this.getSignsRects(headsRects);
		if(this.tiestoRects != null) return this.tiestoRects;
		var rects;
		if(this.signRects != null && this.signRects.length > 0) rects = this.signRects; else rects = headsRects;
		this.tiestoRects = new nx3.VComplexTiestoRectsCalculator(this.getComplexTiestos()).getTiestoRects(rects);
		return this.tiestoRects;
	}
	,getComplexTiestos: function() {
		return null;
	}
	,dotsRects: null
	,getDotsRects: function(headsRects,directions) {
		if(this.dotsRects != null) return this.dotsRects;
		this.dotsRects = new nx3.VComplexDotsRectsCalculator(this.getDots(directions)).getDotsRects(headsRects);
		return this.dotsRects;
	}
	,getDots: function(directions) {
		var result = null;
		var _g = 0;
		var _g1 = this.getVNotes();
		while(_g < _g1.length) {
			var vnote = _g1[_g];
			++_g;
			var dotlevel = nx3.ENoteValTools.dotlevel(vnote.nnote.value);
			if(dotlevel != 0) {
				if(result == null) result = new Array();
				var _g2 = 0;
				var _g3 = vnote.nnote.get_nheads();
				while(_g2 < _g3.length) {
					var nhead = _g3[_g2];
					++_g2;
					var dot = nx3.EDot.Normal(nhead.level);
					if(dotlevel == 2) dot = nx3.EDot.Double(nhead.level);
					result.push(dot);
				}
			}
		}
		return result;
	}
	,getHeadsCollisionOffsetX: function(note,direction) {
		if(this.vnotes.length == 1) return 0;
		if(note == this.vnotes[0]) return 0;
		var firstnote = this.vnotes[0];
		var secondnote = note;
		var offsetX = this.getRectanglesXIntersection(firstnote.getVHeadsRectanglesDir(nx3.EDirectionUD.Up),secondnote.getVHeadsRectanglesDir(direction));
		var diff = secondnote.nnote.getTopLevel() - firstnote.nnote.getBottomLevel();
		if(diff == 1) if(nx3.ENoteValTools.head(firstnote.nnote.value) == nx3.EHeadValueType.HVT1) offsetX = 0.9 * offsetX; else offsetX = 0.7 * offsetX;
		if(diff < 1 && offsetX == 0) offsetX = -0.8;
		return offsetX;
	}
	,getRectanglesXIntersection: function(rectsA,rectsB) {
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
	}
	,getNoteRect: function(note,dir) {
		var result = null;
		if(note == this.vnotes[0]) {
			if(dir == null) dir = new nx3.VNoteInternalDirectionCalculator(note.getVHeads()).getDirection();
			var rects = note.getVHeadsRectanglesDir(dir);
			result = rects[0].clone();
			var _g1 = 1;
			var _g = rects.length;
			while(_g1 < _g) {
				var i = _g1++;
				result = result.union(rects[i]);
			}
			return result;
		}
		if(dir == null) dir = new nx3.VNoteInternalDirectionCalculator(note.getVHeads()).getDirection();
		var rects1 = note.getVHeadsRectanglesDir(dir);
		result = rects1[0].clone();
		var _g11 = 1;
		var _g2 = rects1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			result = result.union(rects1[i1]);
		}
		var offsetX = this.getHeadsCollisionOffsetX(note,dir);
		result.offset(offsetX,0);
		return result;
	}
	,getNotesRects: function(directions) {
		if(directions.length != this.getVNotes().length) throw "Directions.length != vnotes.length";
		var result = new Array();
		var _g1 = 0;
		var _g = this.getVNotes().length;
		while(_g1 < _g) {
			var i = _g1++;
			var vnote = this.getVNotes()[i];
			var rect = this.getNoteRect(vnote,directions[i]);
			result.push(rect);
		}
		return result;
	}
	,getStaveBasicRects: function(directions) {
		if(directions.length != this.getVNotes().length) throw "Directions.length != vnotes.length";
		var firstnote = cx.ArrayTools.first(this.getVNotes());
		var result = new Array();
		var _g1 = 0;
		var _g = this.getVNotes().length;
		while(_g1 < _g) {
			var i = _g1++;
			var vnote = this.getVNotes()[i];
			if(nx3.ENoteValTools.stavinglevel(vnote.nnote.value) == 0) continue;
			var direction = directions[i];
			var rect = null;
			var headw;
			var _g2 = nx3.ENoteValTools.head(vnote.nnote.value);
			switch(_g2[1]) {
			case 2:
				headw = 2.0;
				break;
			default:
				headw = 1.6;
			}
			if(direction == nx3.EDirectionUD.Up) rect = new flash.geom.Rectangle(0,vnote.nnote.getBottomLevel() - 7,headw,7); else rect = new flash.geom.Rectangle(-headw,vnote.nnote.getTopLevel(),headw,7);
			if(vnote != firstnote) {
				var offset = this.getHeadsCollisionOffsetX(vnote,direction);
				rect.offset(offset,0);
			}
			result.push(rect);
			if(nx3.ENoteValTools.beaminglevel(vnote.nnote.value) > 0) {
				var flagrect = null;
				if(direction == nx3.EDirectionUD.Up) flagrect = new flash.geom.Rectangle(headw,vnote.nnote.getBottomLevel() - 7,2.6,4.8); else flagrect = new flash.geom.Rectangle(-headw,vnote.nnote.getTopLevel() + 7 - 4.8,2.6,4.8);
				if(vnote != firstnote) {
					var offset1 = this.getHeadsCollisionOffsetX(vnote,direction);
					flagrect.offset(offset1,0);
				}
				result.push(flagrect);
			}
		}
		return result;
	}
	,__class__: nx3.VComplex
};
nx3.VComplexDotsRectsCalculator = function(dots) {
	this.dots = dots;
};
$hxClasses["nx3.VComplexDotsRectsCalculator"] = nx3.VComplexDotsRectsCalculator;
nx3.VComplexDotsRectsCalculator.__name__ = ["nx3","VComplexDotsRectsCalculator"];
nx3.VComplexDotsRectsCalculator.prototype = {
	dots: null
	,getDotsRects: function(headsRects) {
		if(this.dots == null || this.dots == []) return [];
		if(headsRects == null) headsRects = [];
		var rects = [];
		var _g = 0;
		var _g1 = this.dots;
		while(_g < _g1.length) {
			var dot = _g1[_g];
			++_g;
			var rect = null;
			switch(dot[1]) {
			case 0:
				var level = dot[2];
				rect = new flash.geom.Rectangle(0,level - 1,3.0,2);
				break;
			case 1:
				var level1 = dot[2];
				rect = new flash.geom.Rectangle(0,level1 - 1,4.0,2);
				break;
			}
			var _g2 = 0;
			while(_g2 < headsRects.length) {
				var hr = headsRects[_g2];
				++_g2;
				var i = rect.intersection(hr);
				if(i.width > 0) rect.offset(i.width,0);
			}
			rects.push(rect);
		}
		return rects;
	}
	,__class__: nx3.VComplexDotsRectsCalculator
};
nx3.VComplexSignsCalculator = function(vnotes) {
	this.vnotes = vnotes;
};
$hxClasses["nx3.VComplexSignsCalculator"] = nx3.VComplexSignsCalculator;
nx3.VComplexSignsCalculator.__name__ = ["nx3","VComplexSignsCalculator"];
nx3.VComplexSignsCalculator.prototype = {
	vnotes: null
	,getSigns: function() {
		var signs;
		signs = this.calcUnsortedSigns(this.vnotes);
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
	,calcUnsortedSigns: function(vnotes) {
		var vsigns = [];
		var _g = 0;
		while(_g < vnotes.length) {
			var vnote = vnotes[_g];
			++_g;
			var _g1 = 0;
			var _g2 = vnote.nnote.get_nheads();
			while(_g1 < _g2.length) {
				var nhead = _g2[_g1];
				++_g1;
				var tsign = { sign : nhead.sign, level : nhead.level, position : 0};
				vsigns.push(tsign);
			}
		}
		return vsigns;
	}
	,calcSortSigns: function(vsigns) {
		vsigns.sort(function(a,b) {
			return Reflect.compare(a.level,b.level);
		});
		return vsigns;
	}
	,__class__: nx3.VComplexSignsCalculator
};
nx3.VComplexSignsRectsCalculator = function(vsigns) {
	this.vsigns = vsigns;
};
$hxClasses["nx3.VComplexSignsRectsCalculator"] = nx3.VComplexSignsRectsCalculator;
nx3.VComplexSignsRectsCalculator.__name__ = ["nx3","VComplexSignsRectsCalculator"];
nx3.VComplexSignsRectsCalculator.prototype = {
	vsigns: null
	,getSignRects: function(headsRects) {
		var rects = new Array();
		if(headsRects == null) headsRects = [];
		var _g = 0;
		var _g1 = this.vsigns;
		while(_g < _g1.length) {
			var vsign = _g1[_g];
			++_g;
			var rect = this.getSignRect(vsign.sign);
			rect.offset(-rect.width,vsign.level);
			var _g2 = 0;
			while(_g2 < headsRects.length) {
				var hr = headsRects[_g2];
				++_g2;
				var i = rect.intersection(hr);
				while(i.width > 0 || i.height > 0) {
					rect.offset(-i.width,0);
					i = rect.intersection(hr);
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
			return new flash.geom.Rectangle(0,-1.5,2.6,3);
		case 7:case 8:case 6:
			return new flash.geom.Rectangle(0,-2,4.4,4);
		case 2:
			return new flash.geom.Rectangle(0,-3,2.6,5);
		default:
			return new flash.geom.Rectangle(0,-3,2.6,6);
		}
		throw "This shouldn't happen!";
		return null;
	}
	,__class__: nx3.VComplexSignsRectsCalculator
};
nx3.VComplexTiestoRectsCalculator = function(ties) {
};
$hxClasses["nx3.VComplexTiestoRectsCalculator"] = nx3.VComplexTiestoRectsCalculator;
nx3.VComplexTiestoRectsCalculator.__name__ = ["nx3","VComplexTiestoRectsCalculator"];
nx3.VComplexTiestoRectsCalculator.prototype = {
	getTiestoRects: function(rects) {
		return null;
	}
	,__class__: nx3.VComplexTiestoRectsCalculator
};
nx3.VCreateBeamgroups = function(vnotes,pattern) {
	if(pattern == null) pattern = [nx3.ENoteVal.Nv4];
	this.vnotes = vnotes;
	this.pattern = pattern;
	this.adjustPatternLenght();
};
$hxClasses["nx3.VCreateBeamgroups"] = nx3.VCreateBeamgroups;
nx3.VCreateBeamgroups.__name__ = ["nx3","VCreateBeamgroups"];
nx3.VCreateBeamgroups.prototype = {
	vnotes: null
	,pattern: null
	,beamgropus: null
	,getBeamgroups: function() {
		this.preparePatternCalculation();
		this.preparePositionMaps();
		this.createBeamGroups();
		return this.beamgropus;
	}
	,adjustPatternLenght: function() {
		var notesValue = 0;
		var _g = 0;
		var _g1 = this.vnotes;
		while(_g < _g1.length) {
			var vnote = _g1[_g];
			++_g;
			notesValue += nx3.ENoteValTools.value(vnote.nnote.value);
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
	,patternValuePos: null
	,patternValueEnd: null
	,preparePatternCalculation: function() {
		this.patternValuePos = [];
		this.patternValueEnd = [];
		var vPos = 0;
		var i = 0;
		var _g = 0;
		var _g1 = this.pattern;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			var vValue = nx3.ENoteValTools.value(v);
			var vEnd = vPos + vValue;
			this.patternValuePos.push(vPos);
			this.patternValueEnd.push(vEnd);
			vPos = vEnd;
			i++;
		}
		return this;
	}
	,vnotePosition: null
	,vnotePositionEnd: null
	,preparePositionMaps: function() {
		this.vnotePosition = new haxe.ds.ObjectMap();
		this.vnotePositionEnd = new haxe.ds.ObjectMap();
		var pos = 0;
		var _g = 0;
		var _g1 = this.vnotes;
		while(_g < _g1.length) {
			var vnote = _g1[_g];
			++_g;
			this.vnotePosition.set(vnote,pos);
			var endpos = pos + nx3.ENoteValTools.value(vnote.nnote.value);
			var value = pos + nx3.ENoteValTools.value(vnote.nnote.value);
			this.vnotePositionEnd.set(vnote,value);
			pos = endpos;
		}
	}
	,createBeamGroups: function() {
		this.beamgropus = [];
		var vnoteGroupIdx = new haxe.ds.ObjectMap();
		var _g = 0;
		var _g1 = this.vnotes;
		while(_g < _g1.length) {
			var vnote = _g1[_g];
			++_g;
			var vnotePos = this.vnotePosition.h[vnote.__id__];
			var vnoteEnd = this.vnotePositionEnd.h[vnote.__id__];
			var groupIdx = -111;
			{
				var _g2 = vnote.nnote.type;
				switch(_g2[1]) {
				case 0:
					var attributes = _g2[5];
					var articulations = _g2[4];
					var variant = _g2[3];
					var heads = _g2[2];
					if(nx3.ENoteValTools.beaminglevel(vnote.nnote.value) < 1) groupIdx = -1; else groupIdx = this.findBeamGroupIndex(vnotePos,vnoteEnd);
					break;
				default:
					groupIdx = -2;
				}
			}
			vnoteGroupIdx.set(vnote,groupIdx);
		}
		var count = 0;
		var prevVNote = null;
		var arrVNote = [];
		var _g3 = 0;
		var _g11 = this.vnotes;
		while(_g3 < _g11.length) {
			var vnote1 = _g11[_g3];
			++_g3;
			if(prevVNote == null) {
				arrVNote.push(vnote1);
				prevVNote = vnote1;
				continue;
			}
			var prevIdx = vnoteGroupIdx.h[prevVNote.__id__];
			var groupIdx1 = vnoteGroupIdx.h[vnote1.__id__];
			if(prevIdx != groupIdx1 || prevIdx == -1) {
				var newBeamGroup = new nx3.VBeamgroup(arrVNote);
				this.beamgropus.push(newBeamGroup);
				count = 0;
				arrVNote = [vnote1];
			} else {
				count++;
				arrVNote.push(vnote1);
			}
			prevVNote = vnote1;
		}
		var newBeamGroup1 = new nx3.VBeamgroup(arrVNote);
		this.beamgropus.push(newBeamGroup1);
	}
	,findBeamGroupIndex: function(pos,endPos,countFrom) {
		if(countFrom == null) countFrom = 0;
		var _g1 = countFrom;
		var _g = this.patternValuePos.length;
		while(_g1 < _g) {
			var idx = _g1++;
			if(pos >= this.patternValuePos[idx] && endPos <= this.patternValueEnd[idx]) return idx;
		}
		return -1;
	}
	,__class__: nx3.VCreateBeamgroups
};
nx3.VHead = function(nhead) {
	this.nhead = nhead;
};
$hxClasses["nx3.VHead"] = nx3.VHead;
nx3.VHead.__name__ = ["nx3","VHead"];
nx3.VHead.prototype = {
	nhead: null
	,__class__: nx3.VHead
};
nx3.VHeadPlacementCalculator = function(vheads,direction) {
	this.vheads = vheads;
	this.direction = direction;
};
$hxClasses["nx3.VHeadPlacementCalculator"] = nx3.VHeadPlacementCalculator;
nx3.VHeadPlacementCalculator.__name__ = ["nx3","VHeadPlacementCalculator"];
nx3.VHeadPlacementCalculator.prototype = {
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
	,__class__: nx3.VHeadPlacementCalculator
};
nx3.VMapTools = function() { };
$hxClasses["nx3.VMapTools"] = nx3.VMapTools;
nx3.VMapTools.__name__ = ["nx3","VMapTools"];
nx3.VMapTools.keysToArray = function(it) {
	var result = [];
	while( it.hasNext() ) {
		var v = it.next();
		result.push(v);
	}
	return result;
};
nx3.VMapTools.sortarray = function(a) {
	a.sort(function(a1,b) {
		return Reflect.compare(a1,b);
	});
	return a;
};
nx3.VNote = function(nnote) {
	this.nnote = nnote;
};
$hxClasses["nx3.VNote"] = nx3.VNote;
nx3.VNote.__name__ = ["nx3","VNote"];
nx3.VNote.prototype = {
	nnote: null
	,vheads: null
	,getVHeads: function() {
		if(this.vheads != null) return this.vheads;
		this.vheads = [];
		var _g = 0;
		var _g1 = this.nnote.get_nheads();
		while(_g < _g1.length) {
			var nhead = _g1[_g];
			++_g;
			this.vheads.push(new nx3.VHead(nhead));
		}
		return this.vheads;
	}
	,vheadsPlacements: null
	,getVHeadsPlacements: function() {
		if(this.vheadsPlacements != null) return this.vheadsPlacements;
		if(this.vheads == null) this.getVHeads();
		var calculator = new nx3.VHeadPlacementCalculator(this.vheads,this.getDirection());
		this.vheadsPlacements = calculator.getHeadsPlacements();
		return this.vheadsPlacements;
	}
	,vheadsPlacementsUp: null
	,getVHeadPlacementsUp: function() {
		if(this.vheadsPlacementsUp != null) return this.vheadsPlacementsUp;
		if(this.vheads == null) this.getVHeads();
		var calculator = new nx3.VHeadPlacementCalculator(this.vheads,nx3.EDirectionUD.Up);
		this.vheadsPlacementsUp = calculator.getHeadsPlacements();
		return this.vheadsPlacementsUp;
	}
	,vheadsPlacementsDown: null
	,getVHeadPlacementsDown: function() {
		if(this.vheadsPlacementsDown != null) return this.vheadsPlacementsDown;
		if(this.vheads == null) this.getVHeads();
		var calculator = new nx3.VHeadPlacementCalculator(this.vheads,nx3.EDirectionUD.Down);
		this.vheadsPlacementsDown = calculator.getHeadsPlacements();
		return this.vheadsPlacementsDown;
	}
	,getVHeadPlacementsDir: function(dir) {
		if(dir == nx3.EDirectionUD.Up) return this.getVHeadPlacementsUp(); else return this.getVHeadPlacementsDown();
	}
	,getVHeadsRectanglesDir: function(dir) {
		if(dir == nx3.EDirectionUD.Up) return this.getVHeadsRectanglesUp(); else return this.getVHeadsRectanglesDown();
	}
	,vheadsRectanglesUp: null
	,getVHeadsRectanglesUp: function() {
		if(this.vheadsRectanglesUp != null) return this.vheadsRectanglesUp;
		if(this.vheads == null) this.getVHeads();
		var calculator = new nx3.VNoteHeadsRectsCalculator(this.getVHeads(),this.getVHeadPlacementsUp(),this.nnote.value);
		this.vheadsRectanglesUp = calculator.getHeadsRects();
		return this.vheadsRectanglesUp;
	}
	,vheadsRectanglesDown: null
	,getVHeadsRectanglesDown: function() {
		if(this.vheadsRectanglesDown != null) return this.vheadsRectanglesDown;
		if(this.vheads == null) this.getVHeads();
		var calculator = new nx3.VNoteHeadsRectsCalculator(this.getVHeads(),this.getVHeadPlacementsDown(),this.nnote.value);
		this.vheadsRectanglesDown = calculator.getHeadsRects();
		return this.vheadsRectanglesDown;
	}
	,config: null
	,setConfig: function(newConfig) {
		if(Std.string(this.config) == Std.string(newConfig)) return; else {
			this.direction = null;
			this.vheadsPlacements = null;
		}
		this.config = newConfig;
	}
	,direction: null
	,getDirection: function() {
		if(this.direction != null) return this.direction;
		var calculator = new nx3.VNoteDirectionCalculator(this);
		var configDirection;
		if(this.config != null) configDirection = this.config.direction; else configDirection = null;
		this.direction = calculator.getDirection(configDirection);
		return this.direction;
	}
	,__class__: nx3.VNote
};
nx3.VNoteDirectionCalculator = function(vnote) {
	this.vnote = vnote;
};
$hxClasses["nx3.VNoteDirectionCalculator"] = nx3.VNoteDirectionCalculator;
nx3.VNoteDirectionCalculator.__name__ = ["nx3","VNoteDirectionCalculator"];
nx3.VNoteDirectionCalculator.prototype = {
	vnote: null
	,getDirection: function(directionConfig) {
		if(this.vnote.nnote.type[1] != 0) return nx3.EDirectionUD.Down;
		var direction;
		if(this.vnote.nnote.direction != null) {
			var _g = this.vnote.nnote.direction;
			switch(_g[1]) {
			case 0:
				direction = nx3.EDirectionUD.Up;
				return direction;
			case 2:
				direction = nx3.EDirectionUD.Down;
				return direction;
			default:
			}
		}
		if(directionConfig != null) return directionConfig;
		var calculator = new nx3.VNoteInternalDirectionCalculator(this.vnote.getVHeads());
		return calculator.getDirection();
	}
	,__class__: nx3.VNoteDirectionCalculator
};
nx3.VNoteHeadsRectsCalculator = function(vheads,placements,notevalue) {
	this.vheads = vheads;
	this.placements = placements;
	this.notevalue = notevalue;
};
$hxClasses["nx3.VNoteHeadsRectsCalculator"] = nx3.VNoteHeadsRectsCalculator;
nx3.VNoteHeadsRectsCalculator.__name__ = ["nx3","VNoteHeadsRectsCalculator"];
nx3.VNoteHeadsRectsCalculator.prototype = {
	vheads: null
	,placements: null
	,notevalue: null
	,getHeadsRects: function() {
		var rects = new Array();
		var _g = 0;
		var _g1 = this.placements;
		while(_g < _g1.length) {
			var placement = _g1[_g];
			++_g;
			var rect = null;
			var headw = 0;
			var _g2 = nx3.ENoteValTools.head(this.notevalue);
			switch(_g2[1]) {
			case 2:
				headw = 2.0;
				break;
			default:
				headw = 1.6;
			}
			rect = new flash.geom.Rectangle(-headw,-1,2 * headw,2);
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
			rect.offset(pos,placement.level);
			rects.push(rect);
		}
		return rects;
	}
	,__class__: nx3.VNoteHeadsRectsCalculator
};
nx3.VNoteInternalDirectionCalculator = function(vheads) {
	this.vheads = vheads;
};
$hxClasses["nx3.VNoteInternalDirectionCalculator"] = nx3.VNoteInternalDirectionCalculator;
nx3.VNoteInternalDirectionCalculator.__name__ = ["nx3","VNoteInternalDirectionCalculator"];
nx3.VNoteInternalDirectionCalculator.prototype = {
	vheads: null
	,getDirection: function() {
		var headsCount = this.vheads.length;
		switch(headsCount) {
		case 0:
			return nx3.EDirectionUD.Down;
		case 1:
			return this.weightToDirection(this.vheads[0].nhead.level);
		default:
		}
		var weight = this.vheads[0].nhead.level + this.vheads[headsCount - 1].nhead.level;
		return this.weightToDirection(weight);
	}
	,weightToDirection: function(weight) {
		if(weight <= 0) return nx3.EDirectionUD.Down; else return nx3.EDirectionUD.Up;
	}
	,__class__: nx3.VNoteInternalDirectionCalculator
};
nx3.VPart = function(npart) {
	this.npart = npart;
};
$hxClasses["nx3.VPart"] = nx3.VPart;
nx3.VPart.__name__ = ["nx3","VPart"];
nx3.VPart.prototype = {
	npart: null
	,vvoices: null
	,getVVoices: function() {
		if(this.vvoices != null) return this.vvoices;
		this.vvoices = [];
		var _g = 0;
		var _g1 = this.npart.nvoices;
		while(_g < _g1.length) {
			var nvoice = _g1[_g];
			++_g;
			this.vvoices.push(new nx3.VVoice(nvoice));
		}
		return this.vvoices;
	}
	,vcomplexes: null
	,vcomplexesPositions: null
	,positionsVComplexes: null
	,generator: null
	,getVComplexes: function() {
		if(this.vcomplexes != null) return this.vcomplexes;
		this.generator = new nx3.VPartComplexesGenerator(this.getVVoices());
		this.vcomplexes = this.generator.getComplexes();
		this.vcomplexesPositions = this.generator.getComplexesPositions();
		this.positionsVComplexes = this.generator.getPositionsComplexes();
		return this.vcomplexes;
	}
	,getPositionsVComplexes: function() {
		if(this.vcomplexes == null) this.getVComplexes();
		return this.positionsVComplexes;
	}
	,getVComplexesPositions: function() {
		if(this.vcomplexes == null) this.getVComplexes();
		return this.vcomplexesPositions;
	}
	,vcomplexesMinDistances: null
	,getVComplexesMinDistances: function() {
		if(this.vcomplexesMinDistances != null) return this.vcomplexesMinDistances;
		this.vcomplexesMinDistances = new haxe.ds.ObjectMap();
		var complexes = this.getVComplexes();
		this.getBeamgroupsDirections();
		var i = 0;
		var _g1 = 0;
		var _g = complexes.length;
		while(_g1 < _g) {
			var i1 = _g1++;
			var leftComplex = complexes[i1];
			var rightComplex;
			if(i1 < complexes.length) rightComplex = complexes[i1 + 1]; else rightComplex = null;
			var distance = new nx3.VPartComplexesMinDistancesCalculator(this).getDistance(leftComplex,rightComplex);
			this.vcomplexesMinDistances.set(leftComplex,distance);
		}
		return this.vcomplexesMinDistances;
	}
	,value: null
	,getValue: function() {
		if(this.value != null) return this.value;
		if(this.getVVoices().length == 1) this.value = this.vvoices[0].getValue();
		var value = .0;
		var _g = 0;
		var _g1 = this.vvoices;
		while(_g < _g1.length) {
			var vvoice = _g1[_g];
			++_g;
			value = Math.max(value,vvoice.getValue());
		}
		this.value = value | 0;
		return this.value;
	}
	,partbeamgroups: null
	,getPartbeamgroups: function() {
		if(this.partbeamgroups != null) return this.partbeamgroups;
		this.partbeamgroups = new Array();
		var _g = 0;
		var _g1 = this.getVVoices();
		while(_g < _g1.length) {
			var vvoice = _g1[_g];
			++_g;
			this.partbeamgroups.push(vvoice.getBeamgroups());
		}
		return this.partbeamgroups;
	}
	,beamgroupsDirections: null
	,getBeamgroupsDirections: function() {
		if(this.beamgroupsDirections != null) return this.beamgroupsDirections;
		if(this.partbeamgroups == null) this.getPartbeamgroups();
		var calculator = new nx3.VPartbeamgroupsDirectionCalculator(this);
		this.beamgroupsDirections = calculator.getBeamgroupsDirections();
		return this.beamgroupsDirections;
	}
	,vnotesVVoices: null
	,getVNotesVVoices: function() {
		if(this.vnotesVVoices != null) return this.vnotesVVoices;
		this.vnotesVVoices = new haxe.ds.ObjectMap();
		var _g = 0;
		var _g1 = this.getVVoices();
		while(_g < _g1.length) {
			var vvoice = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = vvoice.getVNotes();
			while(_g2 < _g3.length) {
				var vnote = _g3[_g2];
				++_g2;
				this.vnotesVVoices.set(vnote,vvoice);
			}
		}
		return this.vnotesVVoices;
	}
	,vcomplexDirections: null
	,getVComplexDirections: function() {
		if(this.vcomplexDirections != null) return this.vcomplexDirections;
		this.vcomplexDirections = new haxe.ds.ObjectMap();
		var beamgroupsDirections = this.getBeamgroupsDirections();
		var _g = 0;
		var _g1 = this.getVComplexes();
		while(_g < _g1.length) {
			var vcomplex = _g1[_g];
			++_g;
			var directions = new Array();
			var _g2 = 0;
			var _g3 = vcomplex.getVNotes();
			while(_g2 < _g3.length) {
				var vnote = _g3[_g2];
				++_g2;
				var vvoice;
				var this1 = this.getVNotesVVoices();
				vvoice = this1.get(vnote);
				var beamgroup;
				var this2 = vvoice.getNotesBeamgroups();
				beamgroup = this2.get(vnote);
				var direction = beamgroupsDirections.h[beamgroup.__id__];
				directions.push(direction);
			}
			this.vcomplexDirections.set(vcomplex,directions);
		}
		return this.vcomplexDirections;
	}
	,__class__: nx3.VPart
};
nx3.VPartComplexesGenerator = function(vvoices) {
	this.vvoices = vvoices;
};
$hxClasses["nx3.VPartComplexesGenerator"] = nx3.VPartComplexesGenerator;
nx3.VPartComplexesGenerator.__name__ = ["nx3","VPartComplexesGenerator"];
nx3.VPartComplexesGenerator.prototype = {
	vvoices: null
	,complexes: null
	,getComplexes: function() {
		if(this.complexes != null) return this.complexes;
		this.positionsMap = this.calcPositionsMap();
		this.calcComplexes(this.positionsMap);
		return this.complexes;
	}
	,positionsComplexes: null
	,getPositionsComplexes: function() {
		if(this.complexes == null) this.getComplexes();
		return this.positionsComplexes;
	}
	,complexesPositions: null
	,getComplexesPositions: function() {
		if(this.complexes == null) this.getComplexes();
		return this.complexesPositions;
	}
	,calcComplexes: function(positions) {
		this.complexes = [];
		this.positionsComplexes = new haxe.ds.IntMap();
		this.complexesPositions = new haxe.ds.ObjectMap();
		var poskeys = nx3.VMapTools.keysToArray(positions.keys());
		poskeys = nx3.VMapTools.sortarray(poskeys);
		var _g = 0;
		while(_g < poskeys.length) {
			var pos = poskeys[_g];
			++_g;
			var vnotes = positions.get(pos);
			var vcomplex = new nx3.VComplex(vnotes);
			this.complexes.push(vcomplex);
			this.positionsComplexes.set(pos,vcomplex);
			this.complexesPositions.set(vcomplex,pos);
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
			var _g3 = vvoice.getVNotes();
			while(_g2 < _g3.length) {
				var vnote = _g3[_g2];
				++_g2;
				var npos;
				var this1 = vvoice.getVNotePositions();
				npos = this1.get(vnote);
				if(!positionsMap.exists(npos)) positionsMap.set(npos,[]);
				positionsMap.get(npos).push(vnote);
			}
		}
		return positionsMap;
	}
	,__class__: nx3.VPartComplexesGenerator
};
nx3.VPartComplexesMinDistancesCalculator = function(vpart) {
	this.vpart = vpart;
};
$hxClasses["nx3.VPartComplexesMinDistancesCalculator"] = nx3.VPartComplexesMinDistancesCalculator;
nx3.VPartComplexesMinDistancesCalculator.__name__ = ["nx3","VPartComplexesMinDistancesCalculator"];
nx3.VPartComplexesMinDistancesCalculator.prototype = {
	vpart: null
	,getDistance: function(leftComplex,rightComplex) {
		var left = this.getComplexRightside(leftComplex);
		var right = this.getComplexLeftside(rightComplex);
		var minDistance = left.minrect.width + left.minrect.x + -right.minrect.x;
		var rectsDistance = cx.MathTools.round2(nx3.geom.RectanglesTools.getXIntersection(left.rects,right.rects),null);
		return Math.max(minDistance,rectsDistance);
	}
	,getComplexRightside: function(complex) {
		if(complex == null) return { minrect : new flash.geom.Rectangle(0,0,0,0), rects : []};
		var directions;
		var this1 = this.vpart.getVComplexDirections();
		directions = this1.get(complex);
		var noterects = complex.getNotesRects(directions);
		var minrect = nx3.geom.RectanglesTools.unionAll(noterects);
		minrect.y = -5;
		minrect.height = 10;
		var rects = noterects;
		rects = rects.concat(complex.getStaveBasicRects(directions));
		var dotrects = complex.getDotsRects(noterects,directions);
		if(dotrects != null && dotrects != []) rects = rects.concat(dotrects);
		return { minrect : minrect, rects : rects};
	}
	,getComplexLeftside: function(complex) {
		if(complex == null) return { minrect : new flash.geom.Rectangle(0,0,0,0), rects : []};
		var directions;
		var this1 = this.vpart.getVComplexDirections();
		directions = this1.get(complex);
		var noterects = complex.getNotesRects(directions);
		var minrect = nx3.geom.RectanglesTools.unionAll(noterects);
		minrect.y = -5;
		minrect.height = 10;
		var rects = noterects;
		var vnotes = complex.getVNotes();
		rects = rects.concat(complex.getStaveBasicRects(directions));
		var signsrects = complex.getSignsRects(noterects);
		if(signsrects != null && signsrects != []) rects = rects.concat(signsrects);
		return { minrect : minrect, rects : rects};
	}
	,__class__: nx3.VPartComplexesMinDistancesCalculator
};
nx3.VPartbeamgroupsDirectionCalculator = function(vpart) {
	this.vpart = vpart;
};
$hxClasses["nx3.VPartbeamgroupsDirectionCalculator"] = nx3.VPartbeamgroupsDirectionCalculator;
nx3.VPartbeamgroupsDirectionCalculator.__name__ = ["nx3","VPartbeamgroupsDirectionCalculator"];
nx3.VPartbeamgroupsDirectionCalculator.prototype = {
	vpart: null
	,getBeamgroupsDirections: function() {
		var beamgroupsDirections = new haxe.ds.ObjectMap();
		var partbeamgroups = this.vpart.getPartbeamgroups();
		var beamgroups0 = partbeamgroups[0];
		var voiceDirection0 = this.vpart.getVVoices()[0].nvoice.direction;
		if(voiceDirection0 == null) voiceDirection0 = nx3.EDirectionUAD.Auto;
		if(partbeamgroups.length == 1) {
			var _g = 0;
			while(_g < beamgroups0.length) {
				var beamgroup = beamgroups0[_g];
				++_g;
				var direction = null;
				switch(voiceDirection0[1]) {
				case 0:
					direction = nx3.EDirectionUD.Up;
					break;
				case 2:
					direction = nx3.EDirectionUD.Down;
					break;
				case 1:
					var calculator = new nx3.VBeamgroupDirectionCalculator(beamgroup);
					direction = calculator.getDirection();
					break;
				}
				beamgroupsDirections.set(beamgroup,direction);
			}
		} else if(partbeamgroups.length == 2) {
			var beamgroups1 = partbeamgroups[1];
			var voiceDirection1 = this.vpart.getVVoices()[1].nvoice.direction;
			if(voiceDirection1 == null) voiceDirection0 = nx3.EDirectionUAD.Auto;
			var voice0 = this.vpart.getVVoices()[0];
			var voice1 = this.vpart.getVVoices()[1];
			if(voiceDirection0 == nx3.EDirectionUAD.Auto && voiceDirection1 == nx3.EDirectionUAD.Auto) {
				var voice0value = voice0.getValue();
				var voice1value = voice1.getValue();
				var direction1 = null;
				var bgPosition = 0;
				var _g1 = 0;
				while(_g1 < beamgroups0.length) {
					var beamgroup1 = beamgroups0[_g1];
					++_g1;
					if(bgPosition < voice1value) direction1 = nx3.EDirectionUD.Up; else {
						var calculator1 = new nx3.VBeamgroupDirectionCalculator(beamgroup1);
						direction1 = calculator1.getDirection();
					}
					beamgroupsDirections.set(beamgroup1,direction1);
					bgPosition += beamgroup1.getValue();
				}
				var bgPosition1 = 0;
				var _g2 = 0;
				while(_g2 < beamgroups1.length) {
					var beamgroup2 = beamgroups1[_g2];
					++_g2;
					if(bgPosition1 < voice0value) direction1 = nx3.EDirectionUD.Down; else {
						var calculator2 = new nx3.VBeamgroupDirectionCalculator(beamgroup2);
						direction1 = calculator2.getDirection();
					}
					beamgroupsDirections.set(beamgroup2,direction1);
					bgPosition1 += beamgroup2.getValue();
				}
			} else {
				var _g3 = 0;
				while(_g3 < beamgroups0.length) {
					var beamgroup3 = beamgroups0[_g3];
					++_g3;
					var value = nx3.EDirectionTools.uadToUd(voice0.nvoice.direction);
					beamgroupsDirections.set(beamgroup3,value);
				}
				var _g4 = 0;
				while(_g4 < beamgroups1.length) {
					var beamgroup4 = beamgroups1[_g4];
					++_g4;
					var value1 = nx3.EDirectionTools.uadToUd(voice1.nvoice.direction);
					beamgroupsDirections.set(beamgroup4,value1);
				}
			}
		} else throw "SHOULDN'T HAPPEN";
		return beamgroupsDirections;
	}
	,__class__: nx3.VPartbeamgroupsDirectionCalculator
};
nx3.VSystem = function() {
	this.bars = new Array();
	this.width = 0;
};
$hxClasses["nx3.VSystem"] = nx3.VSystem;
nx3.VSystem.__name__ = ["nx3","VSystem"];
nx3.VSystem.prototype = {
	bars: null
	,width: null
	,status: null
	,getLastBarAttributes: function() {
		if(this.bars.length == 0) return null;
		return cx.ArrayTools.last(this.bars).actAttributes;
	}
	,__class__: nx3.VSystem
};
nx3.VSystemGenerator = function(bars,systemConfig,prevBarAttributes,pagesize,barWidthCalculator) {
	this.bars = bars;
	this.systemConfig = systemConfig;
	this.prevBarAttributes = prevBarAttributes;
	this.pagesize = pagesize;
	this.system = new nx3.VSystem();
	if(barWidthCalculator != null) this.barWidthCalculator = barWidthCalculator; else this.barWidthCalculator = new nx3.SimpleBarWidthCalculator();
};
$hxClasses["nx3.VSystemGenerator"] = nx3.VSystemGenerator;
nx3.VSystemGenerator.__name__ = ["nx3","VSystemGenerator"];
nx3.VSystemGenerator.prototype = {
	bars: null
	,systemConfig: null
	,prevBarAttributes: null
	,pagesize: null
	,system: null
	,barWidthCalculator: null
	,getSystem: function() {
		var tryAnotherBar = true;
		while(tryAnotherBar) {
			var currentBar = this.bars[0];
			var currentBarConfig = new nx3.VBarConfig();
			var currentBarAttributes = this.getBarAttributes(currentBar);
			if(this.prevBarAttributes != null) this.overrideActualAttributesFromPrevBarAttributes(currentBarAttributes,currentBar,this.prevBarAttributes);
			this.overrideActualAttributesWithDefaultsIfStillNotSet(currentBarAttributes);
			if(this.system.bars.length == 0) this.adaptBarConfig(currentBar,currentBarConfig,this.prevBarAttributes,this.systemConfig.showFirstClef,this.systemConfig.showFirstKey,this.systemConfig.showFirstTime); else this.adaptBarConfig(currentBar,currentBarConfig,this.prevBarAttributes,this.systemConfig.showFollowingClef,this.systemConfig.showFollowingKey,this.systemConfig.showFollowingTime);
			var currentBarWidth = this.getBarWidth(currentBar,currentBarAttributes,currentBarConfig);
			var testSystemWidth = this.system.width + currentBarWidth;
			if(testSystemWidth > this.pagesize.width) {
				this.takeCareOfLastBarCautions();
				return this.system;
			}
			this.system.width += currentBarWidth;
			this.system.bars.push({ bar : currentBar, barConfig : currentBarConfig, width : currentBarWidth, actAttributes : currentBarAttributes, caAttributes : null});
			this.bars.shift();
			this.prevBarAttributes = this.copyBarAttributes(currentBarAttributes);
			if(this.bars.length < 1) tryAnotherBar = false;
		}
		this.system.status = nx3.VSystemStatus.Ok;
		return this.system;
	}
	,takeCareOfLastBarCautions: function() {
		this.system.status = nx3.VSystemStatus.Ok;
		var sysBar = cx.ArrayTools.last(this.system.bars).bar;
		var sysBarAttributes = cx.ArrayTools.last(this.system.bars).actAttributes;
		if(sysBar != cx.ArrayTools.last(this.bars)) {
			var nextBar = this.bars[0];
			var nextBarAttributes = this.getBarAttributes(nextBar);
			var newClef = this.arrayBNullOrDiffers(sysBarAttributes.clefs,nextBarAttributes.clefs);
			var newKey = this.arrayBNullOrDiffers(sysBarAttributes.keys,nextBarAttributes.keys);
			var newTime = this.nullOrDiffers(sysBarAttributes.time,nextBarAttributes.time);
			if(newClef || newKey || newTime) {
				var sysBarCautAttributes = this.copyAndRemoveRedundantAttributes(sysBarAttributes,nextBarAttributes);
				var sysBarConfig = cx.ArrayTools.last(this.system.bars).barConfig;
				var sysBarWidth = cx.ArrayTools.last(this.system.bars).width;
				var systemWidthWithoutLastBar = this.system.width - sysBarWidth;
				var sysBarConfigWithCautions = new nx3.VBarConfig(sysBarConfig.showClef,sysBarConfig.showKey,sysBarConfig.showTime);
				if(newClef) sysBarConfigWithCautions.showCautClef = true;
				if(newKey) sysBarConfigWithCautions.showCautKey = true;
				if(newTime) sysBarConfigWithCautions.showCautTime = true;
				var sysBarWidthWithCautions = this.getBarWidth(sysBar,sysBarAttributes,sysBarConfigWithCautions,sysBarCautAttributes);
				if(systemWidthWithoutLastBar + sysBarWidthWithCautions <= this.pagesize.width) {
					cx.ArrayTools.last(this.system.bars).caAttributes = sysBarCautAttributes;
					cx.ArrayTools.last(this.system.bars).barConfig = sysBarConfigWithCautions;
					cx.ArrayTools.last(this.system.bars).width = sysBarWidthWithCautions;
					this.system.width = this.system.width - sysBarWidth + sysBarWidthWithCautions;
				} else {
					this.system.status = nx3.VSystemStatus.Problem(101,"Last bar fits without caution attributes but not with them");
					if(this.system.bars.length == 1) {
						this.system.status = nx3.VSystemStatus.Problem(102,"First bar doesn't fit when adding required cational attributes");
						return;
					}
					this.system.bars.pop();
					this.bars.unshift(sysBar);
					this.system.width = this.system.width - sysBarWidth;
					this.system.status = nx3.VSystemStatus.Ok;
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
	,getBarWidth: function(bar,barAttributes,barConfig,cautAttributes) {
		var width = 0.0;
		var clefsWidth = 0.0;
		if(barConfig.showClef) {
			var _g = 0;
			var _g1 = barAttributes.clefs;
			while(_g < _g1.length) {
				var clef = _g1[_g];
				++_g;
				clefsWidth = Math.max(clefsWidth,this.barWidthCalculator.getClefWidth(clef));
			}
		}
		width += clefsWidth;
		var keysWidth = 0.0;
		if(barConfig.showKey) {
			var _g2 = 0;
			var _g11 = barAttributes.keys;
			while(_g2 < _g11.length) {
				var key = _g11[_g2];
				++_g2;
				keysWidth = Math.max(keysWidth,this.barWidthCalculator.getKeyWidth(key));
			}
		}
		width += keysWidth;
		var timeWidth = 0.0;
		if(barConfig.showTime) timeWidth += this.barWidthCalculator.getTimeWidth(barAttributes.time);
		width += timeWidth;
		var contentWidth = this.barWidthCalculator.getContentWidth(bar);
		width += contentWidth;
		var clefsWidth1 = 0.0;
		if(barConfig.showCautClef && cautAttributes != null) {
			var _g3 = 0;
			var _g12 = cautAttributes.clefs;
			while(_g3 < _g12.length) {
				var clef1 = _g12[_g3];
				++_g3;
				clefsWidth1 = Math.max(clefsWidth1,this.barWidthCalculator.getClefWidth(clef1));
			}
		}
		width += clefsWidth1;
		var keysWidth1 = 0.0;
		if(barConfig.showCautKey && cautAttributes != null) {
			var _g4 = 0;
			var _g13 = cautAttributes.keys;
			while(_g4 < _g13.length) {
				var key1 = _g13[_g4];
				++_g4;
				keysWidth1 = Math.max(keysWidth1,this.barWidthCalculator.getKeyWidth(key1));
			}
		}
		width += keysWidth1;
		var timeWidth1 = 0.0;
		if(barConfig.showCautTime && cautAttributes != null) timeWidth1 += this.barWidthCalculator.getTimeWidth(cautAttributes.time);
		width += timeWidth1;
		return width;
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
			if(currentBarAttributes.clefs[i] == null) currentBarAttributes.clefs[i] = nx3.VSystemGenerator.defaultClef;
		}
		var _g11 = 0;
		var _g2 = currentBarAttributes.keys.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			if(currentBarAttributes.keys[i1] == null) currentBarAttributes.keys[i1] = nx3.VSystemGenerator.defaultKey;
		}
		if(currentBarAttributes.time == null) currentBarAttributes.time = nx3.VSystemGenerator.defaultTime;
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
	,__class__: nx3.VSystemGenerator
};
nx3.IBarWidthCalculator = function() { };
$hxClasses["nx3.IBarWidthCalculator"] = nx3.IBarWidthCalculator;
nx3.IBarWidthCalculator.__name__ = ["nx3","IBarWidthCalculator"];
nx3.IBarWidthCalculator.prototype = {
	getClefWidth: null
	,getKeyWidth: null
	,getTimeWidth: null
	,getContentWidth: null
	,__class__: nx3.IBarWidthCalculator
};
nx3.SimpleBarWidthCalculator = function() {
};
$hxClasses["nx3.SimpleBarWidthCalculator"] = nx3.SimpleBarWidthCalculator;
nx3.SimpleBarWidthCalculator.__name__ = ["nx3","SimpleBarWidthCalculator"];
nx3.SimpleBarWidthCalculator.__interfaces__ = [nx3.IBarWidthCalculator];
nx3.SimpleBarWidthCalculator.prototype = {
	getClefWidth: function(clef) {
		if(clef == null) return 0;
		return 20;
	}
	,getKeyWidth: function(key) {
		if(key == null) return 0;
		switch(key[1]) {
		case 5:case 7:
			return 10;
		case 4:case 8:
			return 20;
		case 3:case 9:
			return 30;
		case 2:case 10:
			return 40;
		case 1:case 11:
			return 50;
		case 0:case 12:
			return 60;
		default:
			return 0;
		}
	}
	,getTimeWidth: function(time) {
		if(time == null) return 0;
		return 10;
	}
	,getContentWidth: function(bar) {
		return Std["int"](bar.getValue() / 100);
	}
	,__class__: nx3.SimpleBarWidthCalculator
};
nx3.VSystemStatus = $hxClasses["nx3.VSystemStatus"] = { __ename__ : true, __constructs__ : ["Ok","Problem"] };
nx3.VSystemStatus.Ok = ["Ok",0];
nx3.VSystemStatus.Ok.toString = $estr;
nx3.VSystemStatus.Ok.__enum__ = nx3.VSystemStatus;
nx3.VSystemStatus.Problem = function(code,msg) { var $x = ["Problem",1,code,msg]; $x.__enum__ = nx3.VSystemStatus; $x.toString = $estr; return $x; };
nx3.VVoice = function(nvoice) {
	this.nvoice = nvoice;
};
$hxClasses["nx3.VVoice"] = nx3.VVoice;
nx3.VVoice.__name__ = ["nx3","VVoice"];
nx3.VVoice.prototype = {
	nvoice: null
	,vnotes: null
	,getVNotes: function() {
		if(this.vnotes != null) return this.vnotes;
		this.vnotes = [];
		var _g = 0;
		var _g1 = this.nvoice.nnotes;
		while(_g < _g1.length) {
			var nnote = _g1[_g];
			++_g;
			this.vnotes.push(new nx3.VNote(nnote));
		}
		return this.vnotes;
	}
	,vnotePositions: null
	,getVNotePositions: function() {
		if(this.vnotePositions != null) return this.vnotePositions;
		if(this.vnotes == null) this.getVNotes();
		this.vnotePositions = new haxe.ds.ObjectMap();
		var pos = 0;
		var _g = 0;
		var _g1 = this.vnotes;
		while(_g < _g1.length) {
			var vnote = _g1[_g];
			++_g;
			this.vnotePositions.set(vnote,pos);
			pos += nx3.ENoteValTools.value(vnote.nnote.value);
		}
		return this.vnotePositions;
	}
	,value: null
	,getValue: function() {
		if(this.value != null) return this.value;
		if(this.vnotes == null) this.getVNotes();
		this.value = 0;
		var _g = 0;
		var _g1 = this.vnotes;
		while(_g < _g1.length) {
			var vnote = _g1[_g];
			++_g;
			this.value += nx3.ENoteValTools.value(vnote.nnote.value);
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
		this.beamgroups = new nx3.VCreateBeamgroups(this.getVNotes(),pattern).getBeamgroups();
		return this.beamgroups;
	}
	,notesBeamgroups: null
	,getNotesBeamgroups: function(pattern) {
		if(pattern != null && pattern != this.beampattern) this.notesBeamgroups = null;
		if(this.notesBeamgroups != null) return this.notesBeamgroups;
		if(this.beamgroups == null) this.getBeamgroups(pattern);
		this.notesBeamgroups = new haxe.ds.ObjectMap();
		var _g = 0;
		var _g1 = this.beamgroups;
		while(_g < _g1.length) {
			var beamgroup = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = beamgroup.vnotes;
			while(_g2 < _g3.length) {
				var vnote = _g3[_g2];
				++_g2;
				this.notesBeamgroups.set(vnote,beamgroup);
			}
		}
		return this.notesBeamgroups;
	}
	,__class__: nx3.VVoice
};
nx3.geom = {};
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
nx3.render = {};
nx3.render.ISpriteRenderer = function() { };
$hxClasses["nx3.render.ISpriteRenderer"] = nx3.render.ISpriteRenderer;
nx3.render.ISpriteRenderer.__name__ = ["nx3","render","ISpriteRenderer"];
nx3.render.ISpriteRenderer.prototype = {
	initTargetSprite: null
	,__class__: nx3.render.ISpriteRenderer
};
nx3.render.IRenderer = function() { };
$hxClasses["nx3.render.IRenderer"] = nx3.render.IRenderer;
nx3.render.IRenderer.__name__ = ["nx3","render","IRenderer"];
nx3.render.IRenderer.prototype = {
	notelines: null
	,__class__: nx3.render.IRenderer
};
nx3.render.FrameRenderer = function(target,scaling) {
	this.initTargetSprite(target,scaling);
};
$hxClasses["nx3.render.FrameRenderer"] = nx3.render.FrameRenderer;
nx3.render.FrameRenderer.__name__ = ["nx3","render","FrameRenderer"];
nx3.render.FrameRenderer.__interfaces__ = [nx3.render.ISpriteRenderer,nx3.render.IRenderer];
nx3.render.FrameRenderer.prototype = {
	scaling: null
	,target: null
	,initTargetSprite: function(target,scaling) {
		this.target = target;
		this.scaling = scaling;
	}
	,notelines: function(x,y,width) {
		this.target.get_graphics().lineStyle(this.scaling.linesWidth,11184810);
		var _g = -2;
		while(_g < 3) {
			var i = _g++;
			var cy = y + i * this.scaling.space;
			this.target.get_graphics().moveTo(x,cy);
			this.target.get_graphics().lineTo(x + width,cy);
		}
	}
	,drawRect: function(rect,x,y,lineColor,inflate) {
		if(inflate == null) inflate = 0;
		if(lineColor == null) lineColor = 0;
		this.target.get_graphics().lineStyle(1,lineColor);
		var r = nx3.render.scaling.Scaling.scaleRect(this.scaling,rect);
		r.offset(x,y);
		if(inflate != 0) r.inflate(inflate,inflate);
		this.target.get_graphics().drawRect(r.x,r.y,r.width,r.height);
	}
	,__class__: nx3.render.FrameRenderer
};
nx3.render.scaling = {};
nx3.render.scaling.Scaling = function() { };
$hxClasses["nx3.render.scaling.Scaling"] = nx3.render.scaling.Scaling;
nx3.render.scaling.Scaling.__name__ = ["nx3","render","scaling","Scaling"];
nx3.render.scaling.Scaling.scaleRect = function(scaling,rect) {
	return new flash.geom.Rectangle(rect.x * scaling.halfNoteWidth,rect.y * scaling.halfSpace,rect.width * scaling.halfNoteWidth,rect.height * scaling.halfSpace);
};
nx3.render.svg = {};
nx3.render.svg.Elements = function() { };
$hxClasses["nx3.render.svg.Elements"] = nx3.render.svg.Elements;
nx3.render.svg.Elements.__name__ = ["nx3","render","svg","Elements"];
nx3.render.svg.ShapeTools = function() { };
$hxClasses["nx3.render.svg.ShapeTools"] = nx3.render.svg.ShapeTools;
nx3.render.svg.ShapeTools.__name__ = ["nx3","render","svg","ShapeTools"];
nx3.render.svg.ShapeTools.getShape = function(xmlStr,scaling) {
	if(xmlStr == null) return null;
	var svg = new format.svg.SVG2Gfx(Xml.parse(xmlStr));
	var shape = svg.createShape();
	shape.scaleX = shape.scaleY = scaling.svgScale;
	shape.cacheAsBitmap = true;
	return shape;
};
nx3.render.svg.ShapeTools.getElementStr = function(element) {
	try {
		var str = Reflect.field(nx3.render.svg.Elements,element);
		return str;
	} catch( err ) {
		return nx3.render.svg.Elements.noteBlack;
	}
	return null;
};
nx3.render.tools = {};
nx3.render.tools.RenderTools = function() { };
$hxClasses["nx3.render.tools.RenderTools"] = nx3.render.tools.RenderTools;
nx3.render.tools.RenderTools.__name__ = ["nx3","render","tools","RenderTools"];
nx3.render.tools.RenderTools.spriteToPng = function(sprite,filename,extraWidth,extraHeight) {
	if(extraHeight == null) extraHeight = 100;
	if(extraWidth == null) extraWidth = 100;
};
nx3.test = {};
nx3.test.TestN = function() {
	haxe.unit.TestCase.call(this);
};
$hxClasses["nx3.test.TestN"] = nx3.test.TestN;
nx3.test.TestN.__name__ = ["nx3","test","TestN"];
nx3.test.TestN.__super__ = haxe.unit.TestCase;
nx3.test.TestN.prototype = $extend(haxe.unit.TestCase.prototype,{
	test1: function() {
		var item1 = new nx3.NHead(null,2,nx3.ESign.Flat);
		var xmlstr1 = nx3.xml.HeadXML.toXml(item1).toString();
		var item2 = nx3.xml.HeadXML.fromXmlStr(xmlstr1);
		var xmlstr2 = nx3.xml.HeadXML.toXml(item2).toString();
		this.assertEquals(Std.string(item1),Std.string(item2),{ fileName : "TestN.hx", lineNumber : 37, className : "nx3.test.TestN", methodName : "test1"});
		this.assertEquals(xmlstr1,xmlstr2,{ fileName : "TestN.hx", lineNumber : 38, className : "nx3.test.TestN", methodName : "test1"});
	}
	,test2: function() {
		var item1 = new nx3.NNote(null,[new nx3.NHead(null,-3),new nx3.NHead(null,-2,nx3.ESign.Flat),new nx3.NHead(null,4,nx3.ESign.Natural),new nx3.NHead(null,1)],nx3.ENoteVal.Nv2dot,nx3.EDirectionUAD.Down);
		var xmlstr1 = nx3.xml.NoteXML.toXml(item1).toString();
		var item2 = nx3.xml.NoteXML.fromXmlStr(xmlstr1);
		var xmlstr2 = nx3.xml.NoteXML.toXml(item2).toString();
		this.assertEquals(Std.string(item1),Std.string(item2),{ fileName : "TestN.hx", lineNumber : 49, className : "nx3.test.TestN", methodName : "test2"});
		this.assertEquals(xmlstr1,xmlstr2,{ fileName : "TestN.hx", lineNumber : 50, className : "nx3.test.TestN", methodName : "test2"});
		this.assertEquals([-3,-2,1,4].toString(),item1.getHeadLevels().toString(),{ fileName : "TestN.hx", lineNumber : 53, className : "nx3.test.TestN", methodName : "test2"});
	}
	,testText: function() {
		var item = new nx3.NNote(nx3.ENoteType.Pause(0),null,nx3.ENoteVal.Nv4);
		this.assertEquals(item.type[1],1,{ fileName : "TestN.hx", lineNumber : 59, className : "nx3.test.TestN", methodName : "testText"});
		var item1 = new nx3.NNote(nx3.ENoteType.Lyric("Hello"),null,nx3.ENoteVal.Nv4);
		this.assertEquals(item1.type[1],4,{ fileName : "TestN.hx", lineNumber : 61, className : "nx3.test.TestN", methodName : "testText"});
	}
	,__class__: nx3.test.TestN
});
nx3.test.TestQ = function() {
	haxe.unit.TestCase.call(this);
};
$hxClasses["nx3.test.TestQ"] = nx3.test.TestQ;
nx3.test.TestQ.__name__ = ["nx3","test","TestQ"];
nx3.test.TestQ.__super__ = haxe.unit.TestCase;
nx3.test.TestQ.prototype = $extend(haxe.unit.TestCase.prototype,{
	test0: function() {
		this.assertTrue(true,{ fileName : "TestQ.hx", lineNumber : 15, className : "nx3.test.TestQ", methodName : "test0"});
		var n = new nx3.QNote();
	}
	,test1: function() {
		var nnote = new nx3.QNote(-2);
		this.assertEquals(1,nnote.get_nheads().length,{ fileName : "TestQ.hx", lineNumber : 23, className : "nx3.test.TestQ", methodName : "test1"});
		this.assertEquals(-2,nnote.get_nheads()[0].level,{ fileName : "TestQ.hx", lineNumber : 24, className : "nx3.test.TestQ", methodName : "test1"});
		this.assertEquals(nx3.ENoteVal.Nv4,nnote.value,{ fileName : "TestQ.hx", lineNumber : 25, className : "nx3.test.TestQ", methodName : "test1"});
		var nnote1 = new nx3.QNote4(1,null,"#");
		this.assertEquals(nx3.ESign.Sharp,nnote1.get_nheads()[0].sign,{ fileName : "TestQ.hx", lineNumber : 28, className : "nx3.test.TestQ", methodName : "test1"});
		var nnote2 = new nx3.QNote4(null,[1],"#");
		this.assertEquals(nx3.ESign.Sharp,nnote2.get_nheads()[0].sign,{ fileName : "TestQ.hx", lineNumber : 31, className : "nx3.test.TestQ", methodName : "test1"});
		var nnote3 = new nx3.QNote(null,[-3,0,3],null,null,null,"# b");
		this.assertEquals(nx3.ESign.Sharp,nnote3.get_nheads()[0].sign,{ fileName : "TestQ.hx", lineNumber : 34, className : "nx3.test.TestQ", methodName : "test1"});
		this.assertEquals(nx3.ESign.None,nnote3.get_nheads()[1].sign,{ fileName : "TestQ.hx", lineNumber : 35, className : "nx3.test.TestQ", methodName : "test1"});
		this.assertEquals(nx3.ESign.Flat,nnote3.get_nheads()[2].sign,{ fileName : "TestQ.hx", lineNumber : 36, className : "nx3.test.TestQ", methodName : "test1"});
	}
	,test2: function() {
		var nvoice = new nx3.QVoice([4,8,8,2]);
		this.assertEquals(4,nvoice.nnotes.length,{ fileName : "TestQ.hx", lineNumber : 42, className : "nx3.test.TestQ", methodName : "test2"});
	}
	,__class__: nx3.test.TestQ
});
nx3.test.TestV = function() {
	haxe.unit.TestCase.call(this);
};
$hxClasses["nx3.test.TestV"] = nx3.test.TestV;
nx3.test.TestV.__name__ = ["nx3","test","TestV"];
nx3.test.TestV.barConfToArr = function(conf) {
	return [conf.showClef,conf.showKey,conf.showTime];
};
nx3.test.TestV.__super__ = haxe.unit.TestCase;
nx3.test.TestV.prototype = $extend(haxe.unit.TestCase.prototype,{
	testVNote1: function() {
		var vnote = new nx3.VNote(new nx3.QNote(null,[1,-2]));
		this.assertEquals(2,vnote.nnote.get_nheads().length,{ fileName : "TestV.hx", lineNumber : 51, className : "nx3.test.TestV", methodName : "testVNote1"});
		this.assertEquals([-2,1].toString(),vnote.nnote.getHeadLevels().toString(),{ fileName : "TestV.hx", lineNumber : 52, className : "nx3.test.TestV", methodName : "testVNote1"});
		this.assertEquals(nx3.ENoteVal.Nv4,vnote.nnote.value,{ fileName : "TestV.hx", lineNumber : 53, className : "nx3.test.TestV", methodName : "testVNote1"});
	}
	,testVNoteInternalDirection: function() {
		var calculator = new nx3.VNoteInternalDirectionCalculator(new nx3.VNote(new nx3.QNote(null,[0])).getVHeads());
		this.assertEquals(nx3.EDirectionUD.Down,calculator.getDirection(),{ fileName : "TestV.hx", lineNumber : 59, className : "nx3.test.TestV", methodName : "testVNoteInternalDirection"});
		var calculator1 = new nx3.VNoteInternalDirectionCalculator(new nx3.VNote(new nx3.QNote(null,[1])).getVHeads());
		this.assertEquals(nx3.EDirectionUD.Up,calculator1.getDirection(),{ fileName : "TestV.hx", lineNumber : 61, className : "nx3.test.TestV", methodName : "testVNoteInternalDirection"});
		var calculator2 = new nx3.VNoteInternalDirectionCalculator(new nx3.VNote(new nx3.QNote(null,[-5,5])).getVHeads());
		this.assertEquals(nx3.EDirectionUD.Down,calculator2.getDirection(),{ fileName : "TestV.hx", lineNumber : 64, className : "nx3.test.TestV", methodName : "testVNoteInternalDirection"});
		var calculator3 = new nx3.VNoteInternalDirectionCalculator(new nx3.VNote(new nx3.QNote(null,[-4,5])).getVHeads());
		this.assertEquals(nx3.EDirectionUD.Up,calculator3.getDirection(),{ fileName : "TestV.hx", lineNumber : 66, className : "nx3.test.TestV", methodName : "testVNoteInternalDirection"});
		var calculator4 = new nx3.VNoteInternalDirectionCalculator(new nx3.VNote(new nx3.QNote(null,[-5,1,2,3,4,5])).getVHeads());
		this.assertEquals(nx3.EDirectionUD.Down,calculator4.getDirection(),{ fileName : "TestV.hx", lineNumber : 69, className : "nx3.test.TestV", methodName : "testVNoteInternalDirection"});
		var calculator5 = new nx3.VNoteInternalDirectionCalculator(new nx3.VNote(new nx3.QNote(null,[-4,1,2,5])).getVHeads());
		this.assertEquals(nx3.EDirectionUD.Up,calculator5.getDirection(),{ fileName : "TestV.hx", lineNumber : 71, className : "nx3.test.TestV", methodName : "testVNoteInternalDirection"});
	}
	,testVHeadsPlacementsCalculator: function() {
		var vnote = new nx3.VNote(new nx3.QNote(null,[1,2]));
		var calculator = new nx3.VHeadPlacementCalculator(vnote.getVHeads(),nx3.EDirectionUD.Down);
		var placements = calculator.getHeadsPlacements();
		this.assertEquals(1,placements[0].level,{ fileName : "TestV.hx", lineNumber : 79, className : "nx3.test.TestV", methodName : "testVHeadsPlacementsCalculator"});
		this.assertEquals(nx3.EHeadPosition.Center,placements[0].pos,{ fileName : "TestV.hx", lineNumber : 80, className : "nx3.test.TestV", methodName : "testVHeadsPlacementsCalculator"});
		this.assertEquals(2,placements[1].level,{ fileName : "TestV.hx", lineNumber : 81, className : "nx3.test.TestV", methodName : "testVHeadsPlacementsCalculator"});
		this.assertEquals(nx3.EHeadPosition.Left,placements[1].pos,{ fileName : "TestV.hx", lineNumber : 82, className : "nx3.test.TestV", methodName : "testVHeadsPlacementsCalculator"});
		var calculator1 = new nx3.VHeadPlacementCalculator(vnote.getVHeads(),nx3.EDirectionUD.Up);
		var placements1 = calculator1.getHeadsPlacements();
		this.assertEquals(1,placements1[0].level,{ fileName : "TestV.hx", lineNumber : 86, className : "nx3.test.TestV", methodName : "testVHeadsPlacementsCalculator"});
		this.assertEquals(nx3.EHeadPosition.Right,placements1[0].pos,{ fileName : "TestV.hx", lineNumber : 87, className : "nx3.test.TestV", methodName : "testVHeadsPlacementsCalculator"});
		this.assertEquals(2,placements1[1].level,{ fileName : "TestV.hx", lineNumber : 88, className : "nx3.test.TestV", methodName : "testVHeadsPlacementsCalculator"});
		this.assertEquals(nx3.EHeadPosition.Center,placements1[1].pos,{ fileName : "TestV.hx", lineNumber : 89, className : "nx3.test.TestV", methodName : "testVHeadsPlacementsCalculator"});
	}
	,testVNoteHeadPlacement: function() {
		var vnote = new nx3.VNote(new nx3.QNote(null,[-1,0,1]));
		var placements = vnote.getVHeadsPlacements();
		this.assertEquals(nx3.EHeadPosition.Center,placements[0].pos,{ fileName : "TestV.hx", lineNumber : 97, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		this.assertEquals(nx3.EHeadPosition.Left,placements[1].pos,{ fileName : "TestV.hx", lineNumber : 98, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		this.assertEquals(nx3.EHeadPosition.Center,placements[2].pos,{ fileName : "TestV.hx", lineNumber : 99, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		var vnote1 = new nx3.VNote(new nx3.QNote(null,[0,1,2]));
		var placements1 = vnote1.getVHeadsPlacements();
		this.assertEquals(nx3.EHeadPosition.Center,placements1[0].pos,{ fileName : "TestV.hx", lineNumber : 103, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		this.assertEquals(nx3.EHeadPosition.Right,placements1[1].pos,{ fileName : "TestV.hx", lineNumber : 104, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		this.assertEquals(nx3.EHeadPosition.Center,placements1[2].pos,{ fileName : "TestV.hx", lineNumber : 105, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		var vnote2 = new nx3.VNote(new nx3.QNote(null,[-2,-1,0,1]));
		var placements2 = vnote2.getVHeadsPlacements();
		this.assertEquals(nx3.EHeadPosition.Center,placements2[0].pos,{ fileName : "TestV.hx", lineNumber : 109, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		this.assertEquals(nx3.EHeadPosition.Left,placements2[1].pos,{ fileName : "TestV.hx", lineNumber : 110, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		this.assertEquals(nx3.EHeadPosition.Center,placements2[2].pos,{ fileName : "TestV.hx", lineNumber : 111, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		this.assertEquals(nx3.EHeadPosition.Left,placements2[3].pos,{ fileName : "TestV.hx", lineNumber : 112, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		var vnote3 = new nx3.VNote(new nx3.QNote(null,[0,1,2,3]));
		var placements3 = vnote3.getVHeadsPlacements();
		this.assertEquals(nx3.EHeadPosition.Right,placements3[0].pos,{ fileName : "TestV.hx", lineNumber : 116, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		this.assertEquals(nx3.EHeadPosition.Center,placements3[1].pos,{ fileName : "TestV.hx", lineNumber : 117, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		this.assertEquals(nx3.EHeadPosition.Right,placements3[2].pos,{ fileName : "TestV.hx", lineNumber : 118, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		this.assertEquals(nx3.EHeadPosition.Center,placements3[3].pos,{ fileName : "TestV.hx", lineNumber : 119, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		var vnote4 = new nx3.VNote(new nx3.QNote(null,[0,1,2,3]));
		this.assertTrue(vnote4.vheadsPlacements == null,{ fileName : "TestV.hx", lineNumber : 122, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		vnote4.getVHeadsPlacements();
		this.assertTrue(vnote4.vheadsPlacements != null,{ fileName : "TestV.hx", lineNumber : 124, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		vnote4.setConfig({ direction : nx3.EDirectionUD.Down});
		this.assertTrue(vnote4.vheadsPlacements == null,{ fileName : "TestV.hx", lineNumber : 126, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		var placements4 = vnote4.getVHeadsPlacements();
		this.assertEquals(nx3.EHeadPosition.Center,placements4[0].pos,{ fileName : "TestV.hx", lineNumber : 128, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		this.assertEquals(nx3.EHeadPosition.Left,placements4[1].pos,{ fileName : "TestV.hx", lineNumber : 129, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		this.assertEquals(nx3.EHeadPosition.Center,placements4[2].pos,{ fileName : "TestV.hx", lineNumber : 130, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
		this.assertEquals(nx3.EHeadPosition.Left,placements4[3].pos,{ fileName : "TestV.hx", lineNumber : 131, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacement"});
	}
	,testVNoteHeadPlacementDir: function() {
		var vnote = new nx3.VNote(new nx3.QNote(null,[-1,0,1]));
		var placements = vnote.getVHeadPlacementsDir(nx3.EDirectionUD.Down);
		this.assertEquals(nx3.EHeadPosition.Center,placements[0].pos,{ fileName : "TestV.hx", lineNumber : 138, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacementDir"});
		this.assertEquals(nx3.EHeadPosition.Left,placements[1].pos,{ fileName : "TestV.hx", lineNumber : 139, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacementDir"});
		this.assertEquals(nx3.EHeadPosition.Center,placements[2].pos,{ fileName : "TestV.hx", lineNumber : 140, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacementDir"});
		var vnote1 = new nx3.VNote(new nx3.QNote(null,[-1,0,1]));
		var placements1 = vnote1.getVHeadPlacementsDir(nx3.EDirectionUD.Up);
		this.assertEquals(nx3.EHeadPosition.Center,placements1[0].pos,{ fileName : "TestV.hx", lineNumber : 144, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacementDir"});
		this.assertEquals(nx3.EHeadPosition.Right,placements1[1].pos,{ fileName : "TestV.hx", lineNumber : 145, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacementDir"});
		this.assertEquals(nx3.EHeadPosition.Center,placements1[2].pos,{ fileName : "TestV.hx", lineNumber : 146, className : "nx3.test.TestV", methodName : "testVNoteHeadPlacementDir"});
	}
	,testVNoteHeadRectanglesCalculator: function() {
		var vnote = new nx3.VNote(new nx3.QNote(0));
		var calculator = new nx3.VNoteHeadsRectsCalculator(vnote.getVHeads(),vnote.getVHeadsPlacements(),vnote.nnote.value);
		var rects = calculator.getHeadsRects();
		this.assertEquals(rects.length,1,{ fileName : "TestV.hx", lineNumber : 155, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesCalculator"});
		this.assertEquals(rects[0].x,-1.6,{ fileName : "TestV.hx", lineNumber : 156, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesCalculator"});
		var vnote1 = new nx3.VNote(new nx3.QNote(null,[0,1]));
		var calculator1 = new nx3.VNoteHeadsRectsCalculator(vnote1.getVHeads(),vnote1.getVHeadsPlacements(),vnote1.nnote.value);
		var rects1 = calculator1.getHeadsRects();
		this.assertEquals(rects1.length,2,{ fileName : "TestV.hx", lineNumber : 161, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesCalculator"});
		this.assertEquals(vnote1.getDirection(),nx3.EDirectionUD.Up,{ fileName : "TestV.hx", lineNumber : 162, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesCalculator"});
		this.assertEquals(rects1[0].x,1.6,{ fileName : "TestV.hx", lineNumber : 163, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesCalculator"});
		this.assertEquals(rects1[1].x,-1.6,{ fileName : "TestV.hx", lineNumber : 164, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesCalculator"});
		var vnote2 = new nx3.VNote(new nx3.QNote(null,[0,1],null,null,null,null,nx3.EDirectionUAD.Down));
		var calculator2 = new nx3.VNoteHeadsRectsCalculator(vnote2.getVHeads(),vnote2.getVHeadsPlacements(),vnote2.nnote.value);
		var rects2 = calculator2.getHeadsRects();
		this.assertEquals(rects2.length,2,{ fileName : "TestV.hx", lineNumber : 169, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesCalculator"});
		this.assertEquals(vnote2.getDirection(),nx3.EDirectionUD.Down,{ fileName : "TestV.hx", lineNumber : 170, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesCalculator"});
		this.assertEquals(rects2[0].x,-1.6,{ fileName : "TestV.hx", lineNumber : 171, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesCalculator"});
		this.assertTrue(Math.abs(rects2[1].x - -4.8000000000000007) <= 0.00001,{ fileName : "TestV.hx", lineNumber : 172, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesCalculator"});
		var vnote3 = new nx3.VNote(new nx3.QNote(null,[0,1]));
		vnote3.setConfig({ direction : nx3.EDirectionUD.Down});
		var calculator3 = new nx3.VNoteHeadsRectsCalculator(vnote3.getVHeads(),vnote3.getVHeadsPlacements(),vnote3.nnote.value);
		var rects3 = calculator3.getHeadsRects();
		this.assertEquals(rects3.length,2,{ fileName : "TestV.hx", lineNumber : 178, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesCalculator"});
		this.assertEquals(vnote3.getDirection(),nx3.EDirectionUD.Down,{ fileName : "TestV.hx", lineNumber : 179, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesCalculator"});
		this.assertEquals(rects3[0].x,-1.6,{ fileName : "TestV.hx", lineNumber : 180, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesCalculator"});
		this.assertTrue(Math.abs(rects3[1].x - -4.8000000000000007) <= 0.00001,{ fileName : "TestV.hx", lineNumber : 181, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesCalculator"});
	}
	,testVNoteHeadRectanglesDir: function() {
		var vnote = new nx3.VNote(new nx3.QNote(null,[-1,0,1]));
		this.assertEquals(vnote.getVHeadsRectanglesDown().toString(),vnote.getVHeadsRectanglesDir(nx3.EDirectionUD.Down).toString(),{ fileName : "TestV.hx", lineNumber : 187, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesDir"});
		this.assertEquals(vnote.getVHeadsRectanglesUp().toString(),vnote.getVHeadsRectanglesDir(nx3.EDirectionUD.Up).toString(),{ fileName : "TestV.hx", lineNumber : 188, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesDir"});
		var vnote1 = new nx3.VNote(new nx3.QNote(null,[0,1]));
		var rects = vnote1.getVHeadsRectanglesDir(nx3.EDirectionUD.Down);
		this.assertEquals(rects[0].x,-1.6,{ fileName : "TestV.hx", lineNumber : 192, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesDir"});
		this.assertTrue(Math.abs(rects[1].x - -4.8000000000000007) <= 0.00001,{ fileName : "TestV.hx", lineNumber : 193, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesDir"});
		var rects1 = vnote1.getVHeadsRectanglesDir(nx3.EDirectionUD.Up);
		this.assertEquals(rects1[0].x,1.6,{ fileName : "TestV.hx", lineNumber : 196, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesDir"});
		this.assertEquals(rects1[1].x,-1.6,{ fileName : "TestV.hx", lineNumber : 197, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesDir"});
		var vnote2 = new nx3.VNote(new nx3.QNote1(null,[0,1]));
		var rects2 = vnote2.getVHeadsRectanglesDir(nx3.EDirectionUD.Down);
		this.assertEquals(rects2[0].x,-2.,{ fileName : "TestV.hx", lineNumber : 201, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesDir"});
		this.assertEquals(rects2[1].x,-6.,{ fileName : "TestV.hx", lineNumber : 202, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesDir"});
		var rects3 = vnote2.getVHeadsRectanglesDir(nx3.EDirectionUD.Up);
		this.assertEquals(rects3[0].x,2.0,{ fileName : "TestV.hx", lineNumber : 205, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesDir"});
		this.assertEquals(rects3[1].x,-2.,{ fileName : "TestV.hx", lineNumber : 206, className : "nx3.test.TestV", methodName : "testVNoteHeadRectanglesDir"});
	}
	,testVNoteDirectionCalculator: function() {
		var vnote = new nx3.VNote(new nx3.QNote(null,[-1,0,1],null,null,null,null,nx3.EDirectionUAD.Auto));
		var calculator = new nx3.VNoteDirectionCalculator(vnote);
		this.assertEquals(nx3.EDirectionUD.Down,calculator.getDirection(null),{ fileName : "TestV.hx", lineNumber : 216, className : "nx3.test.TestV", methodName : "testVNoteDirectionCalculator"});
		var vnote1 = new nx3.VNote(new nx3.QNote(null,[-1,0,2],null,null,null,null,nx3.EDirectionUAD.Auto));
		var calculator1 = new nx3.VNoteDirectionCalculator(vnote1);
		this.assertEquals(nx3.EDirectionUD.Up,calculator1.getDirection(null),{ fileName : "TestV.hx", lineNumber : 220, className : "nx3.test.TestV", methodName : "testVNoteDirectionCalculator"});
		var vnote2 = new nx3.VNote(new nx3.QNote(null,[-1,0,2],null,null,null,null,nx3.EDirectionUAD.Down));
		var calculator2 = new nx3.VNoteDirectionCalculator(vnote2);
		this.assertEquals(nx3.EDirectionUD.Down,calculator2.getDirection(null),{ fileName : "TestV.hx", lineNumber : 224, className : "nx3.test.TestV", methodName : "testVNoteDirectionCalculator"});
		var vnote3 = new nx3.VNote(new nx3.QNote(null,[-1,0,2]));
		var calculator3 = new nx3.VNoteDirectionCalculator(vnote3);
		this.assertEquals(nx3.EDirectionUD.Down,calculator3.getDirection(nx3.EDirectionUD.Down),{ fileName : "TestV.hx", lineNumber : 228, className : "nx3.test.TestV", methodName : "testVNoteDirectionCalculator"});
		var vnote4 = new nx3.VNote(new nx3.QNote(null,[-1,0,2],null,null,null,null,nx3.EDirectionUAD.Up));
		var calculator4 = new nx3.VNoteDirectionCalculator(vnote4);
		this.assertEquals(nx3.EDirectionUD.Up,calculator4.getDirection(nx3.EDirectionUD.Down),{ fileName : "TestV.hx", lineNumber : 232, className : "nx3.test.TestV", methodName : "testVNoteDirectionCalculator"});
		var vnote5 = new nx3.VNote(new nx3.QNote(null,[-1,0,2]));
		this.assertEquals(vnote5.direction,null,{ fileName : "TestV.hx", lineNumber : 237, className : "nx3.test.TestV", methodName : "testVNoteDirectionCalculator"});
		this.assertEquals(nx3.EDirectionUD.Up,vnote5.getDirection(),{ fileName : "TestV.hx", lineNumber : 238, className : "nx3.test.TestV", methodName : "testVNoteDirectionCalculator"});
		vnote5.setConfig({ direction : nx3.EDirectionUD.Down});
		this.assertEquals(vnote5.direction,null,{ fileName : "TestV.hx", lineNumber : 240, className : "nx3.test.TestV", methodName : "testVNoteDirectionCalculator"});
		this.assertEquals(nx3.EDirectionUD.Down,vnote5.getDirection(),{ fileName : "TestV.hx", lineNumber : 241, className : "nx3.test.TestV", methodName : "testVNoteDirectionCalculator"});
		var vnote6 = new nx3.VNote(new nx3.QNote(null,[-1,0,2],null,null,null,null,nx3.EDirectionUAD.Down));
		this.assertEquals(nx3.EDirectionUD.Down,vnote6.getDirection(),{ fileName : "TestV.hx", lineNumber : 244, className : "nx3.test.TestV", methodName : "testVNoteDirectionCalculator"});
		var vnote7 = new nx3.VNote(new nx3.QNote(null,[-1,0,2]));
		vnote7.setConfig({ direction : nx3.EDirectionUD.Down});
		this.assertEquals(nx3.EDirectionUD.Down,vnote7.getDirection(),{ fileName : "TestV.hx", lineNumber : 248, className : "nx3.test.TestV", methodName : "testVNoteDirectionCalculator"});
		this.assertTrue(vnote7.direction != null,{ fileName : "TestV.hx", lineNumber : 249, className : "nx3.test.TestV", methodName : "testVNoteDirectionCalculator"});
		vnote7.setConfig({ direction : null});
		this.assertTrue(vnote7.direction == null,{ fileName : "TestV.hx", lineNumber : 251, className : "nx3.test.TestV", methodName : "testVNoteDirectionCalculator"});
		this.assertEquals(nx3.EDirectionUD.Up,vnote7.getDirection(),{ fileName : "TestV.hx", lineNumber : 252, className : "nx3.test.TestV", methodName : "testVNoteDirectionCalculator"});
	}
	,testVVoice1: function() {
		var vvoice = new nx3.VVoice(new nx3.QVoice([4,8,8,2]));
		this.assertEquals(4,vvoice.nvoice.nnotes.length,{ fileName : "TestV.hx", lineNumber : 259, className : "nx3.test.TestV", methodName : "testVVoice1"});
		this.assertEquals(4,vvoice.getVNotes().length,{ fileName : "TestV.hx", lineNumber : 260, className : "nx3.test.TestV", methodName : "testVVoice1"});
		this.assertEquals(nx3.ENoteVal.Nv8,vvoice.getVNotes()[1].nnote.value,{ fileName : "TestV.hx", lineNumber : 261, className : "nx3.test.TestV", methodName : "testVVoice1"});
		this.assertEquals(nx3.ENoteVal.Nv2,vvoice.getVNotes()[3].nnote.value,{ fileName : "TestV.hx", lineNumber : 262, className : "nx3.test.TestV", methodName : "testVVoice1"});
		this.assertEquals(0,(function($this) {
			var $r;
			var this1 = vvoice.getVNotePositions();
			var key = vvoice.getVNotes()[0];
			$r = this1.get(key);
			return $r;
		}(this)),{ fileName : "TestV.hx", lineNumber : 264, className : "nx3.test.TestV", methodName : "testVVoice1"});
		this.assertEquals(nx3.ENoteValTools.value(nx3.ENoteVal.Nv4),(function($this) {
			var $r;
			var this2 = vvoice.getVNotePositions();
			var key1 = vvoice.getVNotes()[1];
			$r = this2.get(key1);
			return $r;
		}(this)),{ fileName : "TestV.hx", lineNumber : 265, className : "nx3.test.TestV", methodName : "testVVoice1"});
		this.assertEquals(nx3.ENoteValTools.value(nx3.ENoteVal.Nv4) + nx3.ENoteValTools.value(nx3.ENoteVal.Nv8),(function($this) {
			var $r;
			var this3 = vvoice.getVNotePositions();
			var key2 = vvoice.getVNotes()[2];
			$r = this3.get(key2);
			return $r;
		}(this)),{ fileName : "TestV.hx", lineNumber : 266, className : "nx3.test.TestV", methodName : "testVVoice1"});
		this.assertEquals(nx3.ENoteValTools.value(nx3.ENoteVal.Nv4) + nx3.ENoteValTools.value(nx3.ENoteVal.Nv8) + nx3.ENoteValTools.value(nx3.ENoteVal.Nv8),(function($this) {
			var $r;
			var this4 = vvoice.getVNotePositions();
			var key3 = vvoice.getVNotes()[3];
			$r = this4.get(key3);
			return $r;
		}(this)),{ fileName : "TestV.hx", lineNumber : 267, className : "nx3.test.TestV", methodName : "testVVoice1"});
	}
	,testVVoice2: function() {
		var vvoice = new nx3.VVoice(new nx3.QVoice([4,8,8,2]));
		this.assertTrue(vvoice.vnotes == null,{ fileName : "TestV.hx", lineNumber : 274, className : "nx3.test.TestV", methodName : "testVVoice2"});
		vvoice.getVNotes();
		this.assertTrue(vvoice.vnotes != null,{ fileName : "TestV.hx", lineNumber : 276, className : "nx3.test.TestV", methodName : "testVVoice2"});
		this.assertTrue(vvoice.vnotePositions == null,{ fileName : "TestV.hx", lineNumber : 278, className : "nx3.test.TestV", methodName : "testVVoice2"});
		var this1 = vvoice.getVNotePositions();
		var key = vvoice.getVNotes()[0];
		this1.get(key);
		this.assertTrue(vvoice.vnotePositions != null,{ fileName : "TestV.hx", lineNumber : 280, className : "nx3.test.TestV", methodName : "testVVoice2"});
		var vvoice1 = new nx3.VVoice(new nx3.QVoice([4,8,8,2]));
		this.assertTrue(vvoice1.vnotes == null,{ fileName : "TestV.hx", lineNumber : 283, className : "nx3.test.TestV", methodName : "testVVoice2"});
		this.assertTrue(vvoice1.value == null,{ fileName : "TestV.hx", lineNumber : 284, className : "nx3.test.TestV", methodName : "testVVoice2"});
		var value = vvoice1.getValue();
		this.assertTrue(vvoice1.vnotes != null,{ fileName : "TestV.hx", lineNumber : 286, className : "nx3.test.TestV", methodName : "testVVoice2"});
		this.assertTrue(vvoice1.value != null,{ fileName : "TestV.hx", lineNumber : 287, className : "nx3.test.TestV", methodName : "testVVoice2"});
		this.assertEquals(nx3.ENoteValTools.value(nx3.ENoteVal.Nv4) * 4,vvoice1.value,{ fileName : "TestV.hx", lineNumber : 288, className : "nx3.test.TestV", methodName : "testVVoice2"});
	}
	,testBeamgroups: function() {
		var vvoice = new nx3.VVoice(new nx3.QVoice([8,8,8,8,8,8]));
		this.assertTrue(vvoice.beamgroups == null,{ fileName : "TestV.hx", lineNumber : 294, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		var beamgroups = vvoice.getBeamgroups([nx3.ENoteVal.Nv4]);
		this.assertEquals(3,beamgroups.length,{ fileName : "TestV.hx", lineNumber : 296, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(2,beamgroups[0].vnotes.length,{ fileName : "TestV.hx", lineNumber : 297, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(2,beamgroups[1].vnotes.length,{ fileName : "TestV.hx", lineNumber : 298, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(2,beamgroups[2].vnotes.length,{ fileName : "TestV.hx", lineNumber : 299, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertTrue(vvoice.beamgroups != null,{ fileName : "TestV.hx", lineNumber : 300, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		var beamgroups1 = vvoice.getBeamgroups([nx3.ENoteVal.Nv4dot]);
		this.assertEquals(2,beamgroups1.length,{ fileName : "TestV.hx", lineNumber : 302, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(3,beamgroups1[0].vnotes.length,{ fileName : "TestV.hx", lineNumber : 303, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(3,beamgroups1[1].vnotes.length,{ fileName : "TestV.hx", lineNumber : 304, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		var vvoice1 = new nx3.VVoice(new nx3.QVoice([4,8,8,8,8]));
		var beamgroups2 = vvoice1.getBeamgroups([nx3.ENoteVal.Nv4]);
		this.assertEquals(3,beamgroups2.length,{ fileName : "TestV.hx", lineNumber : 308, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(1,beamgroups2[0].vnotes.length,{ fileName : "TestV.hx", lineNumber : 309, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(2,beamgroups2[1].vnotes.length,{ fileName : "TestV.hx", lineNumber : 310, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(2,beamgroups2[2].vnotes.length,{ fileName : "TestV.hx", lineNumber : 311, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		var beamgroups3 = vvoice1.getBeamgroups([nx3.ENoteVal.Nv4dot]);
		this.assertEquals(3,beamgroups3.length,{ fileName : "TestV.hx", lineNumber : 313, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(1,beamgroups3[0].vnotes.length,{ fileName : "TestV.hx", lineNumber : 314, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(1,beamgroups3[1].vnotes.length,{ fileName : "TestV.hx", lineNumber : 315, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(3,beamgroups3[2].vnotes.length,{ fileName : "TestV.hx", lineNumber : 316, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		var vvoice2 = new nx3.VVoice(new nx3.QVoice([8,4,8,8,8]));
		var beamgroups4 = vvoice2.getBeamgroups([nx3.ENoteVal.Nv4]);
		this.assertEquals(4,beamgroups4.length,{ fileName : "TestV.hx", lineNumber : 320, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(1,beamgroups4[0].vnotes.length,{ fileName : "TestV.hx", lineNumber : 321, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(1,beamgroups4[1].vnotes.length,{ fileName : "TestV.hx", lineNumber : 322, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(1,beamgroups4[2].vnotes.length,{ fileName : "TestV.hx", lineNumber : 323, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(2,beamgroups4[3].vnotes.length,{ fileName : "TestV.hx", lineNumber : 324, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		var beamgroups5 = vvoice2.getBeamgroups([nx3.ENoteVal.Nv4dot]);
		this.assertEquals(3,beamgroups5.length,{ fileName : "TestV.hx", lineNumber : 326, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(1,beamgroups5[0].vnotes.length,{ fileName : "TestV.hx", lineNumber : 327, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(1,beamgroups5[1].vnotes.length,{ fileName : "TestV.hx", lineNumber : 328, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(3,beamgroups5[2].vnotes.length,{ fileName : "TestV.hx", lineNumber : 329, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		var vvoice3 = new nx3.VVoice(new nx3.QVoice([.2,16,16,16,16]));
		var beamgroups6 = vvoice3.getBeamgroups([nx3.ENoteVal.Nv4]);
		this.assertEquals(2,beamgroups6.length,{ fileName : "TestV.hx", lineNumber : 335, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(1,beamgroups6[0].vnotes.length,{ fileName : "TestV.hx", lineNumber : 336, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(4,beamgroups6[1].vnotes.length,{ fileName : "TestV.hx", lineNumber : 337, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		var vvoice4 = new nx3.VVoice(new nx3.NVoice([new nx3.NNote(nx3.ENoteType.Pause(0),null,nx3.ENoteVal.Nv8),new nx3.QNote8(),new nx3.QNote8(),new nx3.QNote8(),new nx3.QNote8(),new nx3.QNote8()]));
		var beamgroups7 = vvoice4.getBeamgroups([nx3.ENoteVal.Nv4]);
		this.assertEquals(beamgroups7.length,4,{ fileName : "TestV.hx", lineNumber : 351, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(beamgroups7[0].vnotes.length,1,{ fileName : "TestV.hx", lineNumber : 352, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(beamgroups7[1].vnotes.length,1,{ fileName : "TestV.hx", lineNumber : 353, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(beamgroups7[2].vnotes.length,2,{ fileName : "TestV.hx", lineNumber : 354, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(beamgroups7[3].vnotes.length,2,{ fileName : "TestV.hx", lineNumber : 355, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		var beamgroups8 = vvoice4.getBeamgroups([nx3.ENoteVal.Nv4dot]);
		this.assertEquals(beamgroups8.length,3,{ fileName : "TestV.hx", lineNumber : 358, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(beamgroups8[0].vnotes.length,1,{ fileName : "TestV.hx", lineNumber : 359, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(beamgroups8[1].vnotes.length,2,{ fileName : "TestV.hx", lineNumber : 360, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(beamgroups8[2].vnotes.length,3,{ fileName : "TestV.hx", lineNumber : 361, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		var vvoice5 = new nx3.VVoice(new nx3.NVoice([new nx3.NNote(nx3.ENoteType.Pause(0),null,nx3.ENoteVal.Nv8),new nx3.QNote4(),new nx3.QNote8(),new nx3.QNote8(),new nx3.QNote8()]));
		var beamgroups9 = vvoice5.getBeamgroups([nx3.ENoteVal.Nv4]);
		this.assertEquals(beamgroups9.length,4,{ fileName : "TestV.hx", lineNumber : 371, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(beamgroups9[0].vnotes.length,1,{ fileName : "TestV.hx", lineNumber : 372, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(beamgroups9[1].vnotes.length,1,{ fileName : "TestV.hx", lineNumber : 373, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(beamgroups9[2].vnotes.length,1,{ fileName : "TestV.hx", lineNumber : 374, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(beamgroups9[3].vnotes.length,2,{ fileName : "TestV.hx", lineNumber : 375, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		var vvoice6 = new nx3.VVoice(new nx3.NVoice([new nx3.NNote(nx3.ENoteType.Pause(0),null,nx3.ENoteVal.Nv8),new nx3.QNote4(),new nx3.QNote8(),new nx3.QNote8(),new nx3.QNote8()]));
		var beamgroups10 = vvoice6.getBeamgroups([nx3.ENoteVal.Nv4dot]);
		this.assertEquals(beamgroups10.length,3,{ fileName : "TestV.hx", lineNumber : 385, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(beamgroups10[0].vnotes.length,1,{ fileName : "TestV.hx", lineNumber : 386, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(beamgroups10[1].vnotes.length,1,{ fileName : "TestV.hx", lineNumber : 387, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(beamgroups10[2].vnotes.length,3,{ fileName : "TestV.hx", lineNumber : 388, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		var vvoice7 = new nx3.VVoice(new nx3.NVoice([new nx3.NNote(nx3.ENoteType.Pause(0),null,nx3.ENoteVal.Nv16),new nx3.QNote16(),new nx3.QNote16(),new nx3.QNote16(),new nx3.QNote16(),new nx3.QNote8(),new nx3.QNote16(),new nx3.QNote8(),new nx3.QNote16(),new nx3.QNote16()]));
		var beamgroups11 = vvoice7.getBeamgroups([nx3.ENoteVal.Nv4]);
		this.assertEquals(beamgroups11.length,4,{ fileName : "TestV.hx", lineNumber : 403, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(beamgroups11[0].vnotes.length,1,{ fileName : "TestV.hx", lineNumber : 404, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(beamgroups11[1].vnotes.length,3,{ fileName : "TestV.hx", lineNumber : 405, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(beamgroups11[2].vnotes.length,3,{ fileName : "TestV.hx", lineNumber : 406, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		this.assertEquals(beamgroups11[beamgroups11.length - 1].vnotes.length,3,{ fileName : "TestV.hx", lineNumber : 407, className : "nx3.test.TestV", methodName : "testBeamgroups"});
		var vvoice8 = new nx3.VVoice(new nx3.NVoice([new nx3.NNote(nx3.ENoteType.Pause(0),null,nx3.ENoteVal.Nv16),new nx3.QNote16(),new nx3.QNote16(),new nx3.QNote16(),new nx3.QNote16(),new nx3.QNote8(),new nx3.NNote(nx3.ENoteType.Pause(0),null,nx3.ENoteVal.Nv16),new nx3.QNote8(),new nx3.QNote16(),new nx3.NNote(nx3.ENoteType.Pause(0),null,nx3.ENoteVal.Nv16)]));
		var beamgroups12 = vvoice8.getBeamgroups([nx3.ENoteVal.Nv4]);
		this.assertEquals(beamgroups12.length,6,{ fileName : "TestV.hx", lineNumber : 422, className : "nx3.test.TestV", methodName : "testBeamgroups"});
	}
	,testBeamgroupDirection: function() {
		var calculator = new nx3.VBeamgroupDirectionCalculator(new nx3.VBeamgroup([new nx3.VNote(new nx3.QNote4(0))]));
		var direction = calculator.getDirection();
		this.assertEquals(calculator.getDirection(),nx3.EDirectionUD.Down,{ fileName : "TestV.hx", lineNumber : 430, className : "nx3.test.TestV", methodName : "testBeamgroupDirection"});
		this.assertEquals(0,calculator.topLevel,{ fileName : "TestV.hx", lineNumber : 431, className : "nx3.test.TestV", methodName : "testBeamgroupDirection"});
		this.assertEquals(0,calculator.bottomLevel,{ fileName : "TestV.hx", lineNumber : 432, className : "nx3.test.TestV", methodName : "testBeamgroupDirection"});
		var calculator1 = new nx3.VBeamgroupDirectionCalculator(new nx3.VBeamgroup([new nx3.VNote(new nx3.QNote4(5))]));
		var direction1 = calculator1.getDirection();
		this.assertEquals(calculator1.getDirection(),nx3.EDirectionUD.Up,{ fileName : "TestV.hx", lineNumber : 436, className : "nx3.test.TestV", methodName : "testBeamgroupDirection"});
		this.assertEquals(5,calculator1.topLevel,{ fileName : "TestV.hx", lineNumber : 437, className : "nx3.test.TestV", methodName : "testBeamgroupDirection"});
		this.assertEquals(5,calculator1.bottomLevel,{ fileName : "TestV.hx", lineNumber : 438, className : "nx3.test.TestV", methodName : "testBeamgroupDirection"});
		var calculator2 = new nx3.VBeamgroupDirectionCalculator(new nx3.VBeamgroup([new nx3.VNote(new nx3.QNote4(-2))]));
		var direction2 = calculator2.getDirection();
		this.assertEquals(calculator2.getDirection(),nx3.EDirectionUD.Down,{ fileName : "TestV.hx", lineNumber : 442, className : "nx3.test.TestV", methodName : "testBeamgroupDirection"});
		this.assertEquals(-2,calculator2.topLevel,{ fileName : "TestV.hx", lineNumber : 443, className : "nx3.test.TestV", methodName : "testBeamgroupDirection"});
		this.assertEquals(-2,calculator2.bottomLevel,{ fileName : "TestV.hx", lineNumber : 444, className : "nx3.test.TestV", methodName : "testBeamgroupDirection"});
		var vnotes = [new nx3.VNote(new nx3.QNote8(null,[-2,3]))];
		var calculator3 = new nx3.VBeamgroupDirectionCalculator(new nx3.VBeamgroup(vnotes));
		var direction3 = calculator3.getDirection();
		this.assertEquals(calculator3.getDirection(),nx3.EDirectionUD.Up,{ fileName : "TestV.hx", lineNumber : 449, className : "nx3.test.TestV", methodName : "testBeamgroupDirection"});
		this.assertEquals(-2,calculator3.topLevel,{ fileName : "TestV.hx", lineNumber : 450, className : "nx3.test.TestV", methodName : "testBeamgroupDirection"});
		this.assertEquals(3,calculator3.bottomLevel,{ fileName : "TestV.hx", lineNumber : 451, className : "nx3.test.TestV", methodName : "testBeamgroupDirection"});
		var vnotes1 = [new nx3.VNote(new nx3.QNote8(null,[3])),new nx3.VNote(new nx3.QNote8(null,[-2]))];
		var calculator4 = new nx3.VBeamgroupDirectionCalculator(new nx3.VBeamgroup(vnotes1));
		var direction4 = calculator4.getDirection();
		this.assertEquals(calculator4.getDirection(),nx3.EDirectionUD.Up,{ fileName : "TestV.hx", lineNumber : 456, className : "nx3.test.TestV", methodName : "testBeamgroupDirection"});
		this.assertEquals(-2,calculator4.topLevel,{ fileName : "TestV.hx", lineNumber : 457, className : "nx3.test.TestV", methodName : "testBeamgroupDirection"});
		this.assertEquals(3,calculator4.bottomLevel,{ fileName : "TestV.hx", lineNumber : 458, className : "nx3.test.TestV", methodName : "testBeamgroupDirection"});
		var vnotes2 = [new nx3.VNote(new nx3.QNote8(null,[3])),new nx3.VNote(new nx3.QNote8(null,[-5])),new nx3.VNote(new nx3.QNote8(null,[4]))];
		var calculator5 = new nx3.VBeamgroupDirectionCalculator(new nx3.VBeamgroup(vnotes2));
		var direction5 = calculator5.getDirection();
		this.assertEquals(calculator5.getDirection(),nx3.EDirectionUD.Down,{ fileName : "TestV.hx", lineNumber : 463, className : "nx3.test.TestV", methodName : "testBeamgroupDirection"});
		this.assertEquals(-5,calculator5.topLevel,{ fileName : "TestV.hx", lineNumber : 464, className : "nx3.test.TestV", methodName : "testBeamgroupDirection"});
		this.assertEquals(4,calculator5.bottomLevel,{ fileName : "TestV.hx", lineNumber : 465, className : "nx3.test.TestV", methodName : "testBeamgroupDirection"});
		var calculator6 = new nx3.VBeamgroupDirectionCalculator(new nx3.VBeamgroup([new nx3.VNote(new nx3.QNote4(0))]));
		this.assertEquals(nx3.EDirectionUD.Down,calculator6.getDirection(),{ fileName : "TestV.hx", lineNumber : 468, className : "nx3.test.TestV", methodName : "testBeamgroupDirection"});
	}
	,testBeamgroupDirectionSetter: function() {
		var beamgroup = new nx3.VBeamgroup([new nx3.VNote(new nx3.QNote4(0))]);
		this.assertEquals(nx3.EDirectionUD.Down,beamgroup.getDirection(),{ fileName : "TestV.hx", lineNumber : 474, className : "nx3.test.TestV", methodName : "testBeamgroupDirectionSetter"});
		var beamgroup1 = new nx3.VBeamgroup([new nx3.VNote(new nx3.QNote4(0))]);
		beamgroup1.setDirection(nx3.EDirectionUD.Up);
		this.assertEquals(nx3.EDirectionUD.Up,beamgroup1.getDirection(),{ fileName : "TestV.hx", lineNumber : 478, className : "nx3.test.TestV", methodName : "testBeamgroupDirectionSetter"});
	}
	,testBeamgroupCalculator: function() {
		var vnotes = [new nx3.VNote(new nx3.QNote8(null,[-2,2]))];
		var calc = new nx3.VBeamgroupFrameCalculator(new nx3.VBeamgroup(vnotes));
		var frame = calc.getFrame();
		this.assertEquals([-2].toString(),calc.getTopLevels().toString(),{ fileName : "TestV.hx", lineNumber : 487, className : "nx3.test.TestV", methodName : "testBeamgroupCalculator"});
		this.assertEquals([2].toString(),calc.getBottomLevels().toString(),{ fileName : "TestV.hx", lineNumber : 488, className : "nx3.test.TestV", methodName : "testBeamgroupCalculator"});
		var vnotes1 = [new nx3.VNote(new nx3.QNote8(null,[-2,4])),new nx3.VNote(new nx3.QNote8(null,[5,-3]))];
		var calc1 = new nx3.VBeamgroupFrameCalculator(new nx3.VBeamgroup(vnotes1));
		var frame1 = calc1.getFrame();
		this.assertEquals([-2,-3].toString(),calc1.getTopLevels().toString(),{ fileName : "TestV.hx", lineNumber : 493, className : "nx3.test.TestV", methodName : "testBeamgroupCalculator"});
		this.assertEquals([4,5].toString(),calc1.getBottomLevels().toString(),{ fileName : "TestV.hx", lineNumber : 494, className : "nx3.test.TestV", methodName : "testBeamgroupCalculator"});
		var vnotes2 = [new nx3.VNote(new nx3.QNote8(null,[-2,4])),new nx3.VNote(new nx3.QNote8(null,[6])),new nx3.VNote(new nx3.QNote8(null,[-4])),new nx3.VNote(new nx3.QNote8(null,[-3,5])),new nx3.VNote(new nx3.QNote8(null,[0]))];
		var calc2 = new nx3.VBeamgroupFrameCalculator(new nx3.VBeamgroup(vnotes2));
		var frame2 = calc2.getFrame();
		this.assertEquals([-2,6,-4,-3,0].toString(),calc2.getTopLevels().toString(),{ fileName : "TestV.hx", lineNumber : 499, className : "nx3.test.TestV", methodName : "testBeamgroupCalculator"});
		this.assertEquals([4,6,-4,5,0].toString(),calc2.getBottomLevels().toString(),{ fileName : "TestV.hx", lineNumber : 500, className : "nx3.test.TestV", methodName : "testBeamgroupCalculator"});
	}
	,testBeamgroupValue: function() {
		var vvoice = new nx3.VVoice(new nx3.QVoice([8,8,8,8,8,8]));
		var beamgroups = vvoice.getBeamgroups([nx3.ENoteVal.Nv4]);
		this.assertEquals(beamgroups.length,3,{ fileName : "TestV.hx", lineNumber : 508, className : "nx3.test.TestV", methodName : "testBeamgroupValue"});
		this.assertEquals(beamgroups[0].getValue(),nx3.ENoteValTools.value(nx3.ENoteVal.Nv4),{ fileName : "TestV.hx", lineNumber : 509, className : "nx3.test.TestV", methodName : "testBeamgroupValue"});
	}
	,testBeamgroupFrame: function() {
		var vnotes = [new nx3.VNote(new nx3.QNote8(null,[-2,1])),new nx3.VNote(new nx3.QNote8(null,[-4,3]))];
		var beamgroup = new nx3.VBeamgroup(vnotes);
		var frame = beamgroup.getFrame();
		this.assertEquals(nx3.EDirectionUD.Down,beamgroup.getDirection(),{ fileName : "TestV.hx", lineNumber : 517, className : "nx3.test.TestV", methodName : "testBeamgroupFrame"});
		beamgroup.getFrame();
		this.assertEquals([1,3].toString(),beamgroup.calculator.outerLevels.toString(),{ fileName : "TestV.hx", lineNumber : 519, className : "nx3.test.TestV", methodName : "testBeamgroupFrame"});
		this.assertEquals([-2,-4].toString(),beamgroup.calculator.innerLevels.toString(),{ fileName : "TestV.hx", lineNumber : 520, className : "nx3.test.TestV", methodName : "testBeamgroupFrame"});
		this.assertEquals(-2,frame.leftInnerY,{ fileName : "TestV.hx", lineNumber : 523, className : "nx3.test.TestV", methodName : "testBeamgroupFrame"});
		this.assertEquals(1,frame.leftOuterY,{ fileName : "TestV.hx", lineNumber : 524, className : "nx3.test.TestV", methodName : "testBeamgroupFrame"});
		this.assertEquals(-4,frame.rightInnerY,{ fileName : "TestV.hx", lineNumber : 525, className : "nx3.test.TestV", methodName : "testBeamgroupFrame"});
		this.assertEquals(3,frame.rightOuterY,{ fileName : "TestV.hx", lineNumber : 526, className : "nx3.test.TestV", methodName : "testBeamgroupFrame"});
		var vnotes1 = [new nx3.VNote(new nx3.QNote8(null,[-2,1])),new nx3.VNote(new nx3.QNote8(null,[-4,3]))];
		var beamgroup1 = new nx3.VBeamgroup(vnotes1);
		beamgroup1.setDirection(nx3.EDirectionUD.Up);
		var frame1 = beamgroup1.getFrame();
		this.assertEquals(nx3.EDirectionUD.Up,beamgroup1.getDirection(),{ fileName : "TestV.hx", lineNumber : 532, className : "nx3.test.TestV", methodName : "testBeamgroupFrame"});
		this.assertEquals([1,3].toString(),beamgroup1.calculator.innerLevels.toString(),{ fileName : "TestV.hx", lineNumber : 533, className : "nx3.test.TestV", methodName : "testBeamgroupFrame"});
		this.assertEquals([-2,-4].toString(),beamgroup1.calculator.outerLevels.toString(),{ fileName : "TestV.hx", lineNumber : 534, className : "nx3.test.TestV", methodName : "testBeamgroupFrame"});
		this.assertEquals(1,frame1.leftInnerY,{ fileName : "TestV.hx", lineNumber : 537, className : "nx3.test.TestV", methodName : "testBeamgroupFrame"});
		this.assertEquals(-2,frame1.leftOuterY,{ fileName : "TestV.hx", lineNumber : 538, className : "nx3.test.TestV", methodName : "testBeamgroupFrame"});
		this.assertEquals(3,frame1.rightInnerY,{ fileName : "TestV.hx", lineNumber : 539, className : "nx3.test.TestV", methodName : "testBeamgroupFrame"});
		this.assertEquals(-4,frame1.rightOuterY,{ fileName : "TestV.hx", lineNumber : 540, className : "nx3.test.TestV", methodName : "testBeamgroupFrame"});
	}
	,testNotesBeamgroups: function() {
		var vvoice = new nx3.VVoice(new nx3.QVoice([8,8,8,8,8,8]));
		var beamgroups = vvoice.getBeamgroups([nx3.ENoteVal.Nv4]);
		this.assertEquals(beamgroups.length,3,{ fileName : "TestV.hx", lineNumber : 547, className : "nx3.test.TestV", methodName : "testNotesBeamgroups"});
		this.assertEquals(nx3.VMapTools.keysToArray((function($this) {
			var $r;
			var this1 = vvoice.getNotesBeamgroups();
			$r = this1.keys();
			return $r;
		}(this))).length,6,{ fileName : "TestV.hx", lineNumber : 548, className : "nx3.test.TestV", methodName : "testNotesBeamgroups"});
		this.assertEquals((function($this) {
			var $r;
			var this2 = vvoice.getNotesBeamgroups();
			var key = cx.ArrayTools.first(vvoice.getVNotes());
			$r = this2.get(key);
			return $r;
		}(this)),beamgroups[0],{ fileName : "TestV.hx", lineNumber : 549, className : "nx3.test.TestV", methodName : "testNotesBeamgroups"});
		this.assertEquals((function($this) {
			var $r;
			var this3 = vvoice.getNotesBeamgroups();
			var key1 = cx.ArrayTools.second(vvoice.getVNotes());
			$r = this3.get(key1);
			return $r;
		}(this)),beamgroups[0],{ fileName : "TestV.hx", lineNumber : 550, className : "nx3.test.TestV", methodName : "testNotesBeamgroups"});
		this.assertEquals((function($this) {
			var $r;
			var this4 = vvoice.getNotesBeamgroups();
			var key2 = cx.ArrayTools.third(vvoice.getVNotes());
			$r = this4.get(key2);
			return $r;
		}(this)),beamgroups[1],{ fileName : "TestV.hx", lineNumber : 551, className : "nx3.test.TestV", methodName : "testNotesBeamgroups"});
		this.assertEquals((function($this) {
			var $r;
			var this5 = vvoice.getNotesBeamgroups();
			var key3 = cx.ArrayTools.fourth(vvoice.getVNotes());
			$r = this5.get(key3);
			return $r;
		}(this)),beamgroups[1],{ fileName : "TestV.hx", lineNumber : 552, className : "nx3.test.TestV", methodName : "testNotesBeamgroups"});
		this.assertEquals((function($this) {
			var $r;
			var this6 = vvoice.getNotesBeamgroups();
			var key4 = cx.ArrayTools.fifth(vvoice.getVNotes());
			$r = this6.get(key4);
			return $r;
		}(this)),beamgroups[2],{ fileName : "TestV.hx", lineNumber : 553, className : "nx3.test.TestV", methodName : "testNotesBeamgroups"});
		this.assertEquals((function($this) {
			var $r;
			var this7 = vvoice.getNotesBeamgroups();
			var key5 = cx.ArrayTools.sixth(vvoice.getVNotes());
			$r = this7.get(key5);
			return $r;
		}(this)),beamgroups[2],{ fileName : "TestV.hx", lineNumber : 554, className : "nx3.test.TestV", methodName : "testNotesBeamgroups"});
		var vvoice1 = new nx3.VVoice(new nx3.NVoice([new nx3.NNote(nx3.ENoteType.Pause(0),null,nx3.ENoteVal.Nv8),new nx3.QNote8(),new nx3.QNote8(),new nx3.QNote8(),new nx3.NNote(nx3.ENoteType.Pause(0),null,nx3.ENoteVal.Nv8),new nx3.QNote16(),new nx3.QNote16()]));
		var beamgroups1 = vvoice1.getBeamgroups([nx3.ENoteVal.Nv4dot]);
		this.assertEquals(beamgroups1.length,5,{ fileName : "TestV.hx", lineNumber : 566, className : "nx3.test.TestV", methodName : "testNotesBeamgroups"});
		this.assertEquals((function($this) {
			var $r;
			var this8 = vvoice1.getNotesBeamgroups();
			var key6 = cx.ArrayTools.first(vvoice1.getVNotes());
			$r = this8.get(key6);
			return $r;
		}(this)),beamgroups1[0],{ fileName : "TestV.hx", lineNumber : 567, className : "nx3.test.TestV", methodName : "testNotesBeamgroups"});
		this.assertEquals((function($this) {
			var $r;
			var this9 = vvoice1.getNotesBeamgroups();
			var key7 = cx.ArrayTools.second(vvoice1.getVNotes());
			$r = this9.get(key7);
			return $r;
		}(this)),beamgroups1[1],{ fileName : "TestV.hx", lineNumber : 568, className : "nx3.test.TestV", methodName : "testNotesBeamgroups"});
		this.assertEquals((function($this) {
			var $r;
			var this10 = vvoice1.getNotesBeamgroups();
			var key8 = cx.ArrayTools.third(vvoice1.getVNotes());
			$r = this10.get(key8);
			return $r;
		}(this)),beamgroups1[1],{ fileName : "TestV.hx", lineNumber : 569, className : "nx3.test.TestV", methodName : "testNotesBeamgroups"});
		this.assertEquals((function($this) {
			var $r;
			var this11 = vvoice1.getNotesBeamgroups();
			var key9 = cx.ArrayTools.fourth(vvoice1.getVNotes());
			$r = this11.get(key9);
			return $r;
		}(this)),beamgroups1[2],{ fileName : "TestV.hx", lineNumber : 570, className : "nx3.test.TestV", methodName : "testNotesBeamgroups"});
		this.assertEquals((function($this) {
			var $r;
			var this12 = vvoice1.getNotesBeamgroups();
			var key10 = cx.ArrayTools.fifth(vvoice1.getVNotes());
			$r = this12.get(key10);
			return $r;
		}(this)),beamgroups1[3],{ fileName : "TestV.hx", lineNumber : 571, className : "nx3.test.TestV", methodName : "testNotesBeamgroups"});
		this.assertEquals((function($this) {
			var $r;
			var this13 = vvoice1.getNotesBeamgroups();
			var key11 = cx.ArrayTools.sixth(vvoice1.getVNotes());
			$r = this13.get(key11);
			return $r;
		}(this)),beamgroups1[4],{ fileName : "TestV.hx", lineNumber : 572, className : "nx3.test.TestV", methodName : "testNotesBeamgroups"});
		this.assertEquals((function($this) {
			var $r;
			var this14 = vvoice1.getNotesBeamgroups();
			var key12 = cx.ArrayTools.seventh(vvoice1.getVNotes());
			$r = this14.get(key12);
			return $r;
		}(this)),beamgroups1[4],{ fileName : "TestV.hx", lineNumber : 573, className : "nx3.test.TestV", methodName : "testNotesBeamgroups"});
	}
	,testVComplexSigns: function() {
		var vcomplex = new nx3.VComplex([new nx3.VNote(new nx3.QNote4(0))]);
		this.assertEquals(1,vcomplex.getVNotes().length,{ fileName : "TestV.hx", lineNumber : 580, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		var signs = vcomplex.getSigns();
		this.assertEquals(signs[0].sign,nx3.ESign.None,{ fileName : "TestV.hx", lineNumber : 582, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs[0].level,0,{ fileName : "TestV.hx", lineNumber : 583, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		var vcomplex1 = new nx3.VComplex([new nx3.VNote(new nx3.QNote4(2,null,"#")),new nx3.VNote(new nx3.QNote4(-3,null,"n"))]);
		this.assertEquals(2,vcomplex1.getVNotes().length,{ fileName : "TestV.hx", lineNumber : 586, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		var signs1 = vcomplex1.getSigns();
		this.assertEquals(signs1.length,2,{ fileName : "TestV.hx", lineNumber : 588, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs1[0].level,-3,{ fileName : "TestV.hx", lineNumber : 589, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs1[0].sign,nx3.ESign.Natural,{ fileName : "TestV.hx", lineNumber : 590, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs1[1].level,2,{ fileName : "TestV.hx", lineNumber : 591, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs1[1].sign,nx3.ESign.Sharp,{ fileName : "TestV.hx", lineNumber : 592, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		var vcomplex2 = new nx3.VComplex([new nx3.VNote(new nx3.QNote4(null,[-4,1,3],"b.#"))]);
		var signs2 = vcomplex2.getSigns();
		this.assertEquals(signs2.length,3,{ fileName : "TestV.hx", lineNumber : 596, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs2[0].level,-4,{ fileName : "TestV.hx", lineNumber : 597, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs2[0].sign,nx3.ESign.Flat,{ fileName : "TestV.hx", lineNumber : 598, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs2[1].level,1,{ fileName : "TestV.hx", lineNumber : 599, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs2[1].sign,nx3.ESign.None,{ fileName : "TestV.hx", lineNumber : 600, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs2[2].level,3,{ fileName : "TestV.hx", lineNumber : 601, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs2[2].sign,nx3.ESign.Sharp,{ fileName : "TestV.hx", lineNumber : 602, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		var vcomplex3 = new nx3.VComplex([new nx3.VNote(new nx3.QNote4(null,[-2,0,2],"n#.")),new nx3.VNote(new nx3.QNote4(null,[-4,1,3],"b.#"))]);
		var signs3 = vcomplex3.getSigns();
		this.assertEquals(signs3.length,6,{ fileName : "TestV.hx", lineNumber : 606, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs3[0].level,-4,{ fileName : "TestV.hx", lineNumber : 607, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs3[0].sign,nx3.ESign.Flat,{ fileName : "TestV.hx", lineNumber : 608, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs3[1].level,-2,{ fileName : "TestV.hx", lineNumber : 609, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs3[1].sign,nx3.ESign.Natural,{ fileName : "TestV.hx", lineNumber : 610, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs3[2].level,0,{ fileName : "TestV.hx", lineNumber : 611, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs3[2].sign,nx3.ESign.Sharp,{ fileName : "TestV.hx", lineNumber : 612, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs3[3].level,1,{ fileName : "TestV.hx", lineNumber : 613, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs3[3].sign,nx3.ESign.None,{ fileName : "TestV.hx", lineNumber : 614, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs3[4].level,2,{ fileName : "TestV.hx", lineNumber : 615, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs3[4].sign,nx3.ESign.None,{ fileName : "TestV.hx", lineNumber : 616, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs3[5].level,3,{ fileName : "TestV.hx", lineNumber : 617, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs3[5].sign,nx3.ESign.Sharp,{ fileName : "TestV.hx", lineNumber : 618, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		var vcomplex4 = new nx3.VComplex([new nx3.VNote(new nx3.QNote4(0))]);
		var signs4 = vcomplex4.getVisibleSigns();
		this.assertEquals(0,signs4.length,{ fileName : "TestV.hx", lineNumber : 624, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		var vcomplex5 = new nx3.VComplex([new nx3.VNote(new nx3.QNote4(2,null,"#")),new nx3.VNote(new nx3.QNote4(-3,null,"."))]);
		this.assertEquals(2,vcomplex5.getVNotes().length,{ fileName : "TestV.hx", lineNumber : 627, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		var signs5 = vcomplex5.getVisibleSigns();
		this.assertEquals(signs5.length,1,{ fileName : "TestV.hx", lineNumber : 629, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs5[0].level,2,{ fileName : "TestV.hx", lineNumber : 630, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs5[0].sign,nx3.ESign.Sharp,{ fileName : "TestV.hx", lineNumber : 631, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		var vcomplex6 = new nx3.VComplex([new nx3.VNote(new nx3.QNote4(null,[-2,0,2],"n#.")),new nx3.VNote(new nx3.QNote4(null,[-4,1,3],"b.#"))]);
		var signs6 = vcomplex6.getVisibleSigns();
		this.assertEquals(signs6.length,4,{ fileName : "TestV.hx", lineNumber : 635, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs6[0].level,-4,{ fileName : "TestV.hx", lineNumber : 636, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs6[0].sign,nx3.ESign.Flat,{ fileName : "TestV.hx", lineNumber : 637, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs6[1].level,-2,{ fileName : "TestV.hx", lineNumber : 638, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs6[1].sign,nx3.ESign.Natural,{ fileName : "TestV.hx", lineNumber : 639, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs6[2].level,0,{ fileName : "TestV.hx", lineNumber : 640, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs6[2].sign,nx3.ESign.Sharp,{ fileName : "TestV.hx", lineNumber : 641, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs6[3].level,3,{ fileName : "TestV.hx", lineNumber : 642, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
		this.assertEquals(signs6[3].sign,nx3.ESign.Sharp,{ fileName : "TestV.hx", lineNumber : 643, className : "nx3.test.TestV", methodName : "testVComplexSigns"});
	}
	,testVComplexHeadsCollisionOffset: function() {
		var n0 = new nx3.VNote(new nx3.QNote(-2));
		var n1 = new nx3.VNote(new nx3.QNote(-2));
		var complex = new nx3.VComplex([n0,n1]);
		this.assertEquals(complex.getHeadsCollisionOffsetX(n0),0,{ fileName : "TestV.hx", lineNumber : 652, className : "nx3.test.TestV", methodName : "testVComplexHeadsCollisionOffset"});
		this.assertEquals(complex.getHeadsCollisionOffsetX(n1),3.2,{ fileName : "TestV.hx", lineNumber : 653, className : "nx3.test.TestV", methodName : "testVComplexHeadsCollisionOffset"});
		var n01 = new nx3.VNote(new nx3.QNote(-2));
		var n11 = new nx3.VNote(new nx3.QNote(-1));
		var complex1 = new nx3.VComplex([n01,n11]);
		this.assertEquals(complex1.getHeadsCollisionOffsetX(n01),0,{ fileName : "TestV.hx", lineNumber : 658, className : "nx3.test.TestV", methodName : "testVComplexHeadsCollisionOffset"});
		this.assertEquals(complex1.getHeadsCollisionOffsetX(n11),2.2399999999999998,{ fileName : "TestV.hx", lineNumber : 659, className : "nx3.test.TestV", methodName : "testVComplexHeadsCollisionOffset"});
		var n02 = new nx3.VNote(new nx3.QNote(-2));
		var n12 = new nx3.VNote(new nx3.QNote(0));
		var complex2 = new nx3.VComplex([n02,n12]);
		this.assertEquals(complex2.getHeadsCollisionOffsetX(n02),0,{ fileName : "TestV.hx", lineNumber : 664, className : "nx3.test.TestV", methodName : "testVComplexHeadsCollisionOffset"});
		this.assertEquals(complex2.getHeadsCollisionOffsetX(n12),0,{ fileName : "TestV.hx", lineNumber : 665, className : "nx3.test.TestV", methodName : "testVComplexHeadsCollisionOffset"});
	}
	,testVComplexHeadsIntersectionOffset: function() {
		var n0 = new nx3.VNote(new nx3.QNote(0));
		var n1 = new nx3.VNote(new nx3.QNote(2));
		var complex = new nx3.VComplex([n0,n1]);
		var rects0 = n0.getVHeadsRectanglesDir(nx3.EDirectionUD.Up);
		var rects1 = n1.getVHeadsRectanglesDir(nx3.EDirectionUD.Down);
		this.assertTrue(true,{ fileName : "TestV.hx", lineNumber : 678, className : "nx3.test.TestV", methodName : "testVComplexHeadsIntersectionOffset"});
	}
	,testVComplexNoteHeadsRectOneNote: function() {
		var n0 = new nx3.VNote(new nx3.QNote(0));
		var complex = new nx3.VComplex([n0]);
		var r0 = complex.getNoteRect(n0);
		this.assertTrue(this.rectEquals(r0,null,-1.6,-1,3.2,2),{ fileName : "TestV.hx", lineNumber : 686, className : "nx3.test.TestV", methodName : "testVComplexNoteHeadsRectOneNote"});
		var n01 = new nx3.VNote(new nx3.QNote(null,[0,1]));
		var complex1 = new nx3.VComplex([n01]);
		var r01 = complex1.getNoteRect(n01);
		this.assertTrue(this.rectEquals(r01,null,-1.6,-1,6.4,3),{ fileName : "TestV.hx", lineNumber : 691, className : "nx3.test.TestV", methodName : "testVComplexNoteHeadsRectOneNote"});
		var n02 = new nx3.VNote(new nx3.QNote(null,[0,1]));
		var complex2 = new nx3.VComplex([n02]);
		var r02 = complex2.getNoteRect(n02,nx3.EDirectionUD.Up);
		this.assertTrue(this.rectEquals(r02,null,-1.6,-1,6.4,3),{ fileName : "TestV.hx", lineNumber : 696, className : "nx3.test.TestV", methodName : "testVComplexNoteHeadsRectOneNote"});
		var n03 = new nx3.VNote(new nx3.QNote(null,[0,1]));
		var complex3 = new nx3.VComplex([n03]);
		var r03 = complex3.getNoteRect(n03,nx3.EDirectionUD.Down);
		this.assertTrue(this.rectEquals(r03,null,-4.8000000000000007,-1,6.4,3),{ fileName : "TestV.hx", lineNumber : 701, className : "nx3.test.TestV", methodName : "testVComplexNoteHeadsRectOneNote"});
	}
	,testComplexSignsRectsGenerator: function() {
		var signs = [{ sign : nx3.ESign.Flat, level : 0, position : 0},{ sign : nx3.ESign.Flat, level : 1, position : 0},{ sign : nx3.ESign.Flat, level : 5, position : 0}];
		var calculator = new nx3.VComplexSignsRectsCalculator(signs);
		var rects = calculator.getSignRects();
		this.assertEquals(rects.length,3,{ fileName : "TestV.hx", lineNumber : 821, className : "nx3.test.TestV", methodName : "testComplexSignsRectsGenerator"});
		var signs1 = [{ sign : nx3.ESign.Flat, level : 0, position : 0}];
		var calculator1 = new nx3.VComplexSignsRectsCalculator(signs1);
		var rects1 = calculator1.getSignRects();
		this.assertEquals(rects1.length,1,{ fileName : "TestV.hx", lineNumber : 826, className : "nx3.test.TestV", methodName : "testComplexSignsRectsGenerator"});
		var signs2 = [{ sign : nx3.ESign.Flat, level : 0, position : 0}];
		var calculator2 = new nx3.VComplexSignsRectsCalculator(signs2);
		var rects2 = calculator2.getSignRects([new flash.geom.Rectangle(-1,-10,5,20)]);
		this.assertEquals(rects2.length,1,{ fileName : "TestV.hx", lineNumber : 831, className : "nx3.test.TestV", methodName : "testComplexSignsRectsGenerator"});
	}
	,testVPartComplexesGenerator: function() {
		var vvoice = new nx3.VVoice(new nx3.QVoice([4,8,8,2]));
		var generator = new nx3.VPartComplexesGenerator([vvoice]);
		var complexes = generator.getComplexes();
		var keys = nx3.VMapTools.keysToArray(generator.positionsMap.keys());
		keys.sort(function(a,b) {
			return Reflect.compare(a,b);
		});
		this.assertEquals(keys.toString(),[0,3024,4536,6048].toString(),{ fileName : "TestV.hx", lineNumber : 845, className : "nx3.test.TestV", methodName : "testVPartComplexesGenerator"});
		this.assertEquals(complexes.length,4,{ fileName : "TestV.hx", lineNumber : 846, className : "nx3.test.TestV", methodName : "testVPartComplexesGenerator"});
		var vvoice0 = new nx3.VVoice(new nx3.QVoice([4,8,8,2]));
		var vvoice1 = new nx3.VVoice(new nx3.QVoice([4,4,2]));
		var generator1 = new nx3.VPartComplexesGenerator([vvoice0,vvoice1]);
		var complexes1 = generator1.getComplexes();
		var keys1 = nx3.VMapTools.keysToArray(generator1.positionsMap.keys());
		keys1.sort(function(a1,b1) {
			return Reflect.compare(a1,b1);
		});
		this.assertEquals(keys1.toString(),[0,3024,4536,6048].toString(),{ fileName : "TestV.hx", lineNumber : 854, className : "nx3.test.TestV", methodName : "testVPartComplexesGenerator"});
		this.assertEquals(complexes1.length,4,{ fileName : "TestV.hx", lineNumber : 855, className : "nx3.test.TestV", methodName : "testVPartComplexesGenerator"});
		this.assertEquals(complexes1[0].getVNotes().length,2,{ fileName : "TestV.hx", lineNumber : 856, className : "nx3.test.TestV", methodName : "testVPartComplexesGenerator"});
		this.assertEquals(complexes1[1].getVNotes().length,2,{ fileName : "TestV.hx", lineNumber : 857, className : "nx3.test.TestV", methodName : "testVPartComplexesGenerator"});
		this.assertEquals(complexes1[2].getVNotes().length,1,{ fileName : "TestV.hx", lineNumber : 858, className : "nx3.test.TestV", methodName : "testVPartComplexesGenerator"});
		this.assertEquals(complexes1[3].getVNotes().length,2,{ fileName : "TestV.hx", lineNumber : 859, className : "nx3.test.TestV", methodName : "testVPartComplexesGenerator"});
		var vvoice01 = new nx3.VVoice(new nx3.QVoice([4,8,8,4,4]));
		var vvoice11 = new nx3.VVoice(new nx3.QVoice([.4,.4,4]));
		var generator2 = new nx3.VPartComplexesGenerator([vvoice01,vvoice11]);
		var complexes2 = generator2.getComplexes();
		var keys2 = nx3.VMapTools.keysToArray(generator2.positionsMap.keys());
		keys2.sort(function(a2,b2) {
			return Reflect.compare(a2,b2);
		});
		this.assertEquals(keys2.toString(),[0,3024,4536,6048,9072].toString(),{ fileName : "TestV.hx", lineNumber : 867, className : "nx3.test.TestV", methodName : "testVPartComplexesGenerator"});
		this.assertEquals(complexes2.length,5,{ fileName : "TestV.hx", lineNumber : 868, className : "nx3.test.TestV", methodName : "testVPartComplexesGenerator"});
		this.assertEquals(complexes2[0].getVNotes().length,2,{ fileName : "TestV.hx", lineNumber : 869, className : "nx3.test.TestV", methodName : "testVPartComplexesGenerator"});
		this.assertEquals(complexes2[1].getVNotes().length,1,{ fileName : "TestV.hx", lineNumber : 870, className : "nx3.test.TestV", methodName : "testVPartComplexesGenerator"});
		this.assertEquals(complexes2[2].getVNotes().length,2,{ fileName : "TestV.hx", lineNumber : 871, className : "nx3.test.TestV", methodName : "testVPartComplexesGenerator"});
		this.assertEquals(complexes2[3].getVNotes().length,1,{ fileName : "TestV.hx", lineNumber : 872, className : "nx3.test.TestV", methodName : "testVPartComplexesGenerator"});
		this.assertEquals(complexes2[4].getVNotes().length,2,{ fileName : "TestV.hx", lineNumber : 873, className : "nx3.test.TestV", methodName : "testVPartComplexesGenerator"});
		var vvoice02 = new nx3.VVoice(new nx3.QVoice([4,8,8,2]));
		var vvoice12 = new nx3.VVoice(new nx3.QVoice([4,4,2]));
		var generator3 = new nx3.VPartComplexesGenerator([vvoice02,vvoice12]);
		var positionsComplexes = generator3.getPositionsComplexes();
		var keys3 = nx3.VMapTools.keysToArray(positionsComplexes.keys());
		keys3.sort(function(a3,b3) {
			return Reflect.compare(a3,b3);
		});
		this.assertEquals([0,3024,4536,6048].toString(),keys3.toString(),{ fileName : "TestV.hx", lineNumber : 881, className : "nx3.test.TestV", methodName : "testVPartComplexesGenerator"});
		var vcomplex1 = generator3.getComplexes()[1];
		var vcomplex2 = positionsComplexes.get(3024);
		this.assertEquals(vcomplex1,vcomplex2,{ fileName : "TestV.hx", lineNumber : 884, className : "nx3.test.TestV", methodName : "testVPartComplexesGenerator"});
		var vcomplex1pos;
		var this1 = generator3.getComplexesPositions();
		vcomplex1pos = this1.get(vcomplex1);
		this.assertEquals(vcomplex1pos,3024,{ fileName : "TestV.hx", lineNumber : 886, className : "nx3.test.TestV", methodName : "testVPartComplexesGenerator"});
	}
	,testVPartComplexes: function() {
		var vpart = new nx3.VPart(new nx3.NPart([new nx3.QVoice([4,8,8,2]),new nx3.QVoice([4,4,2])]));
		var vcomplexes = vpart.getVComplexes();
		this.assertEquals(vcomplexes.length,4,{ fileName : "TestV.hx", lineNumber : 897, className : "nx3.test.TestV", methodName : "testVPartComplexes"});
		var positions = nx3.VMapTools.keysToArray(vpart.getPositionsVComplexes().keys());
		positions.sort(function(a,b) {
			return Reflect.compare(a,b);
		});
		this.assertEquals([0,3024,4536,6048].toString(),positions.toString(),{ fileName : "TestV.hx", lineNumber : 900, className : "nx3.test.TestV", methodName : "testVPartComplexes"});
	}
	,testVPartComplexesMinDistances: function() {
		var vpart = new nx3.VPart(new nx3.NPart([new nx3.QVoice([4,1])]));
		var distances = vpart.getVComplexesMinDistances();
		this.assertEquals((function($this) {
			var $r;
			var key = cx.ArrayTools.first(vpart.getVComplexes());
			$r = distances.h[key.__id__];
			return $r;
		}(this)),3.6,{ fileName : "TestV.hx", lineNumber : 910, className : "nx3.test.TestV", methodName : "testVPartComplexesMinDistances"});
		this.assertEquals((function($this) {
			var $r;
			var key1 = cx.ArrayTools.second(vpart.getVComplexes());
			$r = distances.h[key1.__id__];
			return $r;
		}(this)),2,{ fileName : "TestV.hx", lineNumber : 911, className : "nx3.test.TestV", methodName : "testVPartComplexesMinDistances"});
		var vpart1 = new nx3.VPart(new nx3.NPart([new nx3.NVoice([new nx3.NNote(null,[new nx3.NHead(null,0)],nx3.ENoteVal.Nv4dot),new nx3.QNote()])]));
		var distances1 = vpart1.getVComplexesMinDistances();
		this.assertEquals((function($this) {
			var $r;
			var key2 = cx.ArrayTools.first(vpart1.getVComplexes());
			$r = distances1.h[key2.__id__];
			return $r;
		}(this)),6.2,{ fileName : "TestV.hx", lineNumber : 920, className : "nx3.test.TestV", methodName : "testVPartComplexesMinDistances"});
		this.assertEquals((function($this) {
			var $r;
			var key3 = cx.ArrayTools.second(vpart1.getVComplexes());
			$r = distances1.h[key3.__id__];
			return $r;
		}(this)),1.6,{ fileName : "TestV.hx", lineNumber : 921, className : "nx3.test.TestV", methodName : "testVPartComplexesMinDistances"});
		var vpart2 = new nx3.VPart(new nx3.NPart([new nx3.NVoice([new nx3.QNote(),new nx3.NNote(null,[new nx3.NHead(null,0,nx3.ESign.Flat)])])]));
		var distances2 = vpart2.getVComplexesMinDistances();
		this.assertEquals((function($this) {
			var $r;
			var key4 = cx.ArrayTools.first(vpart2.getVComplexes());
			$r = distances2.h[key4.__id__];
			return $r;
		}(this)),5.8,{ fileName : "TestV.hx", lineNumber : 930, className : "nx3.test.TestV", methodName : "testVPartComplexesMinDistances"});
		this.assertEquals((function($this) {
			var $r;
			var key5 = cx.ArrayTools.second(vpart2.getVComplexes());
			$r = distances2.h[key5.__id__];
			return $r;
		}(this)),1.6,{ fileName : "TestV.hx", lineNumber : 931, className : "nx3.test.TestV", methodName : "testVPartComplexesMinDistances"});
	}
	,testPartbeamgroups: function() {
		var vpart = new nx3.VPart(new nx3.NPart([new nx3.QVoice([4,8,8,2]),new nx3.QVoice([.2,4])]));
		this.assertEquals(vpart.getPartbeamgroups().length,2,{ fileName : "TestV.hx", lineNumber : 942, className : "nx3.test.TestV", methodName : "testPartbeamgroups"});
		this.assertEquals(cx.ArrayTools.first(vpart.getPartbeamgroups()).length,3,{ fileName : "TestV.hx", lineNumber : 943, className : "nx3.test.TestV", methodName : "testPartbeamgroups"});
		this.assertEquals(cx.ArrayTools.second(vpart.getPartbeamgroups()).length,2,{ fileName : "TestV.hx", lineNumber : 944, className : "nx3.test.TestV", methodName : "testPartbeamgroups"});
	}
	,testPartbeamgroupsDirectionsOneVoice: function() {
		var vpart = new nx3.VPart(new nx3.NPart([new nx3.QVoice([8,8,8,8,8,8],null,[0,0,1,1,-2,-2])]));
		var beamgroupsDirections = vpart.getBeamgroupsDirections();
		var partbeamgroups = vpart.getPartbeamgroups();
		this.assertEquals(partbeamgroups.length,1,{ fileName : "TestV.hx", lineNumber : 954, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsOneVoice"});
		this.assertEquals(partbeamgroups[0].length,3,{ fileName : "TestV.hx", lineNumber : 955, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsOneVoice"});
		var beamgroups = partbeamgroups[0];
		this.assertEquals(beamgroupsDirections.h[beamgroups[0].__id__],nx3.EDirectionUD.Down,{ fileName : "TestV.hx", lineNumber : 957, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsOneVoice"});
		this.assertEquals(beamgroupsDirections.h[beamgroups[1].__id__],nx3.EDirectionUD.Up,{ fileName : "TestV.hx", lineNumber : 958, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsOneVoice"});
		this.assertEquals(beamgroupsDirections.h[beamgroups[2].__id__],nx3.EDirectionUD.Down,{ fileName : "TestV.hx", lineNumber : 959, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsOneVoice"});
		var vpart1 = new nx3.VPart(new nx3.NPart([new nx3.QVoice([8,8,8,8,8,8],null,[0,0,1,1,-2,-2],null,null,nx3.EDirectionUAD.Up)]));
		var beamgroupsDirections1 = vpart1.getBeamgroupsDirections();
		var partbeamgroups1 = vpart1.getPartbeamgroups();
		this.assertEquals(partbeamgroups1.length,1,{ fileName : "TestV.hx", lineNumber : 966, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsOneVoice"});
		this.assertEquals(partbeamgroups1[0].length,3,{ fileName : "TestV.hx", lineNumber : 967, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsOneVoice"});
		var beamgroups1 = partbeamgroups1[0];
		this.assertEquals(beamgroupsDirections1.h[beamgroups1[0].__id__],nx3.EDirectionUD.Up,{ fileName : "TestV.hx", lineNumber : 969, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsOneVoice"});
		this.assertEquals(beamgroupsDirections1.h[beamgroups1[1].__id__],nx3.EDirectionUD.Up,{ fileName : "TestV.hx", lineNumber : 970, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsOneVoice"});
		this.assertEquals(beamgroupsDirections1.h[beamgroups1[2].__id__],nx3.EDirectionUD.Up,{ fileName : "TestV.hx", lineNumber : 971, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsOneVoice"});
	}
	,testPartbeamgroupsDirectionsTwoVoices: function() {
		var vpart = new nx3.VPart(new nx3.NPart([new nx3.QVoice([8,8,8,8],null,[-1,-1,-1,-1]),new nx3.QVoice([8,8],null,[1,1])]));
		var beamgroupsDirections = vpart.getBeamgroupsDirections();
		var partbeamgroups = vpart.getPartbeamgroups();
		var beamgroups0 = partbeamgroups[0];
		var beamgroups1 = partbeamgroups[1];
		this.assertEquals(beamgroups0.length,2,{ fileName : "TestV.hx", lineNumber : 984, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroups1.length,1,{ fileName : "TestV.hx", lineNumber : 985, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroupsDirections.h[beamgroups0[0].__id__],nx3.EDirectionUD.Up,{ fileName : "TestV.hx", lineNumber : 986, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroupsDirections.h[beamgroups0[1].__id__],nx3.EDirectionUD.Down,{ fileName : "TestV.hx", lineNumber : 987, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroupsDirections.h[beamgroups1[0].__id__],nx3.EDirectionUD.Down,{ fileName : "TestV.hx", lineNumber : 988, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		var vpart1 = new nx3.VPart(new nx3.NPart([new nx3.QVoice([8,8],null,[-1,-1]),new nx3.QVoice([8,8,8,8],null,[1,1,1,1])]));
		var beamgroupsDirections1 = vpart1.getBeamgroupsDirections();
		var partbeamgroups1 = vpart1.getPartbeamgroups();
		var beamgroups01 = partbeamgroups1[0];
		var beamgroups11 = partbeamgroups1[1];
		this.assertEquals(beamgroups01.length,1,{ fileName : "TestV.hx", lineNumber : 998, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroups11.length,2,{ fileName : "TestV.hx", lineNumber : 999, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroupsDirections1.h[beamgroups01[0].__id__],nx3.EDirectionUD.Up,{ fileName : "TestV.hx", lineNumber : 1000, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroupsDirections1.h[beamgroups11[0].__id__],nx3.EDirectionUD.Down,{ fileName : "TestV.hx", lineNumber : 1001, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroupsDirections1.h[beamgroups11[1].__id__],nx3.EDirectionUD.Up,{ fileName : "TestV.hx", lineNumber : 1002, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		var vpart2 = new nx3.VPart(new nx3.NPart([new nx3.QVoice([8,8,8,8],null,[-1,-1,-1,-1]),new nx3.QVoice([4],null,[1])]));
		var beamgroupsDirections2 = vpart2.getBeamgroupsDirections();
		var partbeamgroups2 = vpart2.getPartbeamgroups();
		var beamgroups02 = partbeamgroups2[0];
		var beamgroups12 = partbeamgroups2[1];
		this.assertEquals(beamgroups02.length,2,{ fileName : "TestV.hx", lineNumber : 1012, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroups12.length,1,{ fileName : "TestV.hx", lineNumber : 1013, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroupsDirections2.h[beamgroups02[0].__id__],nx3.EDirectionUD.Up,{ fileName : "TestV.hx", lineNumber : 1014, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroupsDirections2.h[beamgroups02[1].__id__],nx3.EDirectionUD.Down,{ fileName : "TestV.hx", lineNumber : 1015, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroupsDirections2.h[beamgroups12[0].__id__],nx3.EDirectionUD.Down,{ fileName : "TestV.hx", lineNumber : 1016, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		var vpart3 = new nx3.VPart(new nx3.NPart([new nx3.QVoice([8,8,8,8],null,[-1,-1,-1,-1]),new nx3.QVoice([.4],null,[1])]));
		var beamgroupsDirections3 = vpart3.getBeamgroupsDirections();
		var partbeamgroups3 = vpart3.getPartbeamgroups();
		var beamgroups03 = partbeamgroups3[0];
		var beamgroups13 = partbeamgroups3[1];
		this.assertEquals(beamgroups03.length,2,{ fileName : "TestV.hx", lineNumber : 1026, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroups13.length,1,{ fileName : "TestV.hx", lineNumber : 1027, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroupsDirections3.h[beamgroups03[0].__id__],nx3.EDirectionUD.Up,{ fileName : "TestV.hx", lineNumber : 1028, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroupsDirections3.h[beamgroups03[1].__id__],nx3.EDirectionUD.Up,{ fileName : "TestV.hx", lineNumber : 1029, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroupsDirections3.h[beamgroups13[0].__id__],nx3.EDirectionUD.Down,{ fileName : "TestV.hx", lineNumber : 1030, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		var vpart4 = new nx3.VPart(new nx3.NPart([new nx3.QVoice([8,8,8,8],null,[-1,-1,-1,-1]),new nx3.QVoice([.4,8],null,[1,1])]));
		var beamgroupsDirections4 = vpart4.getBeamgroupsDirections();
		var partbeamgroups4 = vpart4.getPartbeamgroups();
		var beamgroups04 = partbeamgroups4[0];
		var beamgroups14 = partbeamgroups4[1];
		this.assertEquals(beamgroups04.length,2,{ fileName : "TestV.hx", lineNumber : 1040, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroups14.length,2,{ fileName : "TestV.hx", lineNumber : 1041, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroupsDirections4.h[beamgroups04[0].__id__],nx3.EDirectionUD.Up,{ fileName : "TestV.hx", lineNumber : 1042, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroupsDirections4.h[beamgroups04[1].__id__],nx3.EDirectionUD.Up,{ fileName : "TestV.hx", lineNumber : 1043, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroupsDirections4.h[beamgroups14[0].__id__],nx3.EDirectionUD.Down,{ fileName : "TestV.hx", lineNumber : 1044, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroupsDirections4.h[beamgroups14[1].__id__],nx3.EDirectionUD.Down,{ fileName : "TestV.hx", lineNumber : 1045, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		var vpart5 = new nx3.VPart(new nx3.NPart([new nx3.QVoice([8,8,8,8],null,[-1,-1,-1,-1]),new nx3.QVoice([.4,8,8],null,[1,1,1])]));
		var beamgroupsDirections5 = vpart5.getBeamgroupsDirections();
		var partbeamgroups5 = vpart5.getPartbeamgroups();
		var beamgroups05 = partbeamgroups5[0];
		var beamgroups15 = partbeamgroups5[1];
		this.assertEquals(beamgroups05.length,2,{ fileName : "TestV.hx", lineNumber : 1055, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroups15.length,3,{ fileName : "TestV.hx", lineNumber : 1056, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroupsDirections5.h[beamgroups15[2].__id__],nx3.EDirectionUD.Up,{ fileName : "TestV.hx", lineNumber : 1057, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		var vpart6 = new nx3.VPart(new nx3.NPart([new nx3.QVoice([8,8,8,8,8,8],null,[-1,-1,-1,-1,-1,-1]),new nx3.QVoice([.4,8,8],null,[1,1,1])]));
		var beamgroupsDirections6 = vpart6.getBeamgroupsDirections();
		var partbeamgroups6 = vpart6.getPartbeamgroups();
		var beamgroups06 = partbeamgroups6[0];
		var beamgroups16 = partbeamgroups6[1];
		this.assertEquals(beamgroups06.length,3,{ fileName : "TestV.hx", lineNumber : 1067, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroups16.length,3,{ fileName : "TestV.hx", lineNumber : 1068, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroupsDirections6.h[beamgroups06[2].__id__],nx3.EDirectionUD.Up,{ fileName : "TestV.hx", lineNumber : 1069, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
		this.assertEquals(beamgroupsDirections6.h[beamgroups16[2].__id__],nx3.EDirectionUD.Down,{ fileName : "TestV.hx", lineNumber : 1070, className : "nx3.test.TestV", methodName : "testPartbeamgroupsDirectionsTwoVoices"});
	}
	,testBarColumnsGenerator: function() {
		var vpart = new nx3.VPart(new nx3.NPart([new nx3.QVoice([4,8,8,2]),new nx3.QVoice([4,4,2])]));
		var generator = new nx3.VBarColumnsGenerator([vpart]);
		var columns = generator.getColumns();
		this.assertFalse(false,{ fileName : "TestV.hx", lineNumber : 1081, className : "nx3.test.TestV", methodName : "testBarColumnsGenerator"});
		this.assertEquals(generator.positions.toString(),[0,3024,4536,6048].toString(),{ fileName : "TestV.hx", lineNumber : 1082, className : "nx3.test.TestV", methodName : "testBarColumnsGenerator"});
		this.assertEquals(columns.length,4,{ fileName : "TestV.hx", lineNumber : 1083, className : "nx3.test.TestV", methodName : "testBarColumnsGenerator"});
		var vpart0 = new nx3.VPart(new nx3.NPart([new nx3.QVoice([.4,.4,4])]));
		var vpart1 = new nx3.VPart(new nx3.NPart([new nx3.QVoice([4,8,8,4,4])]));
		var generator1 = new nx3.VBarColumnsGenerator([vpart0,vpart1]);
		var columns1 = generator1.getColumns();
		this.assertFalse(false,{ fileName : "TestV.hx", lineNumber : 1093, className : "nx3.test.TestV", methodName : "testBarColumnsGenerator"});
		this.assertEquals(generator1.positions.toString(),[0,3024,4536,6048,9072].toString(),{ fileName : "TestV.hx", lineNumber : 1094, className : "nx3.test.TestV", methodName : "testBarColumnsGenerator"});
		var column0 = columns1[0];
		this.assertEquals(column0.vcomplexes.length,2,{ fileName : "TestV.hx", lineNumber : 1097, className : "nx3.test.TestV", methodName : "testBarColumnsGenerator"});
		this.assertEquals(vpart0.getVVoices()[0].getVNotes()[0],column0.vcomplexes[0].getVNotes()[0],{ fileName : "TestV.hx", lineNumber : 1098, className : "nx3.test.TestV", methodName : "testBarColumnsGenerator"});
		this.assertEquals(vpart1.getVVoices()[0].getVNotes()[0],column0.vcomplexes[1].getVNotes()[0],{ fileName : "TestV.hx", lineNumber : 1099, className : "nx3.test.TestV", methodName : "testBarColumnsGenerator"});
		this.assertTrue(columns1[1].vcomplexes[0] == null,{ fileName : "TestV.hx", lineNumber : 1100, className : "nx3.test.TestV", methodName : "testBarColumnsGenerator"});
		this.assertEquals(vpart1.getVVoices()[0].getVNotes()[1],columns1[1].vcomplexes[1].getVNotes()[0],{ fileName : "TestV.hx", lineNumber : 1101, className : "nx3.test.TestV", methodName : "testBarColumnsGenerator"});
	}
	,testVBarValue: function() {
		var npart0 = new nx3.NPart([new nx3.QVoice([4]),new nx3.QVoice([4,4])]);
		var npart1 = new nx3.NPart([new nx3.QVoice([4,4,4,4]),new nx3.QVoice([4,4,4])]);
		var vbar = new nx3.VBar(new nx3.NBar([npart0,npart1]));
		var value = vbar.getValue();
		this.assertEquals(value,nx3.ENoteValTools.value(nx3.ENoteVal.Nv4) * 4,{ fileName : "TestV.hx", lineNumber : 1116, className : "nx3.test.TestV", methodName : "testVBarValue"});
	}
	,testVBar: function() {
		var npart0 = new nx3.NPart([new nx3.QVoice([2]),new nx3.QVoice([.4,8])]);
		var npart1 = new nx3.NPart([new nx3.QVoice([8,.4]),new nx3.QVoice([4,4])]);
		var vbar = new nx3.VBar(new nx3.NBar([npart0,npart1]));
		var positionsColumns = vbar.getPositionsColumns();
		var keys = nx3.VMapTools.keysToArray(positionsColumns.keys());
		keys.sort(function(a,b) {
			return Reflect.compare(a,b);
		});
		this.assertEquals(keys.toString(),[0,1512,3024,4536].toString(),{ fileName : "TestV.hx", lineNumber : 1133, className : "nx3.test.TestV", methodName : "testVBar"});
	}
	,testVBarAttributes: function() {
		var n0 = new nx3.NPart([new nx3.QVoice([4,4,4])],null,nx3.EClef.ClefC,null,nx3.EKey.Flat2);
		var n1 = new nx3.NPart([new nx3.QVoice([4,4,4])],null,nx3.EClef.ClefF,null,nx3.EKey.Sharp3);
		var b0 = new nx3.VBar(new nx3.NBar([n0,n1],null,nx3.ETime.Time12_8));
		this.assertEquals(b0.get_clefs().toString(),[nx3.EClef.ClefC,nx3.EClef.ClefF].toString(),{ fileName : "TestV.hx", lineNumber : 1141, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		this.assertEquals(b0.get_keys().toString(),[nx3.EKey.Flat2,nx3.EKey.Sharp3].toString(),{ fileName : "TestV.hx", lineNumber : 1142, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		this.assertEquals(b0.get_time(),nx3.ETime.Time12_8,{ fileName : "TestV.hx", lineNumber : 1143, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		var n01 = new nx3.NPart([new nx3.QVoice([4,4,4])],null,null,null,nx3.EKey.Flat2);
		var n11 = new nx3.NPart([new nx3.QVoice([4,4,4])],null,nx3.EClef.ClefF);
		var b01 = new nx3.VBar(new nx3.NBar([n01,n11]));
		this.assertEquals(b01.get_clefs().toString(),[null,nx3.EClef.ClefF].toString(),{ fileName : "TestV.hx", lineNumber : 1148, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		this.assertEquals(b01.get_keys().toString(),[nx3.EKey.Flat2,null].toString(),{ fileName : "TestV.hx", lineNumber : 1149, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		this.assertEquals(b01.get_time(),null,{ fileName : "TestV.hx", lineNumber : 1150, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		this.assertEquals(b01.get_displayClefs(),nx3.EDisplayALN.Layout,{ fileName : "TestV.hx", lineNumber : 1151, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		this.assertEquals(b01.get_displayKeys(),nx3.EDisplayALN.Layout,{ fileName : "TestV.hx", lineNumber : 1152, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		this.assertEquals(b01.get_displayTime(),nx3.EDisplayALN.Layout,{ fileName : "TestV.hx", lineNumber : 1153, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		var n02 = new nx3.NPart([new nx3.QVoice([4,4,4])],null,nx3.EClef.ClefC,nx3.EDisplayALN.Never,nx3.EKey.Flat2,nx3.EDisplayALN.Never);
		var n12 = new nx3.NPart([new nx3.QVoice([4,4,4])],null,nx3.EClef.ClefF,nx3.EDisplayALN.Never,nx3.EKey.Sharp3,nx3.EDisplayALN.Never);
		var b02 = new nx3.VBar(new nx3.NBar([n02,n12],null,nx3.ETime.Time12_8,nx3.EDisplayALN.Never));
		this.assertEquals(b02.get_clefs().toString(),[nx3.EClef.ClefC,nx3.EClef.ClefF].toString(),{ fileName : "TestV.hx", lineNumber : 1158, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		this.assertEquals(b02.get_keys().toString(),[nx3.EKey.Flat2,nx3.EKey.Sharp3].toString(),{ fileName : "TestV.hx", lineNumber : 1159, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		this.assertEquals(b02.get_time(),nx3.ETime.Time12_8,{ fileName : "TestV.hx", lineNumber : 1160, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		this.assertEquals(b02.get_displayClefs(),nx3.EDisplayALN.Never,{ fileName : "TestV.hx", lineNumber : 1161, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		this.assertEquals(b02.get_displayKeys(),nx3.EDisplayALN.Never,{ fileName : "TestV.hx", lineNumber : 1162, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		this.assertEquals(b02.get_displayTime(),nx3.EDisplayALN.Never,{ fileName : "TestV.hx", lineNumber : 1163, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		var n03 = new nx3.NPart([new nx3.QVoice([4,4,4])],null,nx3.EClef.ClefC,nx3.EDisplayALN.Never,nx3.EKey.Flat2,nx3.EDisplayALN.Always);
		var n13 = new nx3.NPart([new nx3.QVoice([4,4,4])],null,nx3.EClef.ClefF,nx3.EDisplayALN.Layout,nx3.EKey.Sharp3,nx3.EDisplayALN.Never);
		var b03 = new nx3.VBar(new nx3.NBar([n03,n13],null,nx3.ETime.Time12_8,nx3.EDisplayALN.Always));
		this.assertEquals(b03.get_clefs().toString(),[nx3.EClef.ClefC,nx3.EClef.ClefF].toString(),{ fileName : "TestV.hx", lineNumber : 1168, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		this.assertEquals(b03.get_keys().toString(),[nx3.EKey.Flat2,nx3.EKey.Sharp3].toString(),{ fileName : "TestV.hx", lineNumber : 1169, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		this.assertEquals(b03.get_time(),nx3.ETime.Time12_8,{ fileName : "TestV.hx", lineNumber : 1170, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		this.assertEquals(b03.get_displayClefs(),nx3.EDisplayALN.Layout,{ fileName : "TestV.hx", lineNumber : 1171, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		this.assertEquals(b03.get_displayKeys(),nx3.EDisplayALN.Always,{ fileName : "TestV.hx", lineNumber : 1172, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
		this.assertEquals(b03.get_displayTime(),nx3.EDisplayALN.Always,{ fileName : "TestV.hx", lineNumber : 1173, className : "nx3.test.TestV", methodName : "testVBarAttributes"});
	}
	,testVBarVNoteVColumn: function() {
		var npart0 = new nx3.NPart([new nx3.QVoice([2]),new nx3.QVoice([.4,8])]);
		var npart1 = new nx3.NPart([new nx3.QVoice([8,.4]),new nx3.QVoice([4,4])]);
		var vbar = new nx3.VBar(new nx3.NBar([npart0,npart1]));
		var vnotesVColumns = vbar.getVNotesVColumns();
		var vnote = vbar.getVParts()[0].getVVoices()[0].getVNotes()[0];
		var vcolumn = vbar.getVColumns()[0];
		this.assertEquals(vnotesVColumns.h[vnote.__id__],vcolumn,{ fileName : "TestV.hx", lineNumber : 1194, className : "nx3.test.TestV", methodName : "testVBarVNoteVColumn"});
		var vnote1 = vbar.getVParts()[0].getVVoices()[1].getVNotes()[1];
		var vcolumn1 = vbar.getVColumns()[3];
		this.assertEquals(vnotesVColumns.h[vnote1.__id__],vcolumn1,{ fileName : "TestV.hx", lineNumber : 1198, className : "nx3.test.TestV", methodName : "testVBarVNoteVColumn"});
		var vnote2 = vbar.getVParts()[1].getVVoices()[0].getVNotes()[1];
		var vcolumn2 = vbar.getVColumns()[1];
		this.assertEquals(vnotesVColumns.h[vnote2.__id__],vcolumn2,{ fileName : "TestV.hx", lineNumber : 1202, className : "nx3.test.TestV", methodName : "testVBarVNoteVColumn"});
		var vnote3 = vbar.getVParts()[1].getVVoices()[1].getVNotes()[1];
		var vcolumn3 = vbar.getVColumns()[2];
		this.assertEquals(vnotesVColumns.h[vnote3.__id__],vcolumn3,{ fileName : "TestV.hx", lineNumber : 1206, className : "nx3.test.TestV", methodName : "testVBarVNoteVColumn"});
	}
	,testVBarComplexColumn: function() {
		var npart0 = new nx3.NPart([new nx3.QVoice([2]),new nx3.QVoice([.4,8])]);
		var npart1 = new nx3.NPart([new nx3.QVoice([8,.4]),new nx3.QVoice([4,4])]);
		var vbar = new nx3.VBar(new nx3.NBar([npart0,npart1]));
		var vcomplexVColumns = vbar.getVComplexesVColumns();
		var vcomplex = cx.ArrayTools.first(cx.ArrayTools.first(vbar.getVParts()).getVComplexes());
		this.assertEquals(vcomplex.getVNotes().length,2,{ fileName : "TestV.hx", lineNumber : 1223, className : "nx3.test.TestV", methodName : "testVBarComplexColumn"});
		var vcolumn = cx.ArrayTools.first(vbar.getVColumns());
		this.assertEquals(vcolumn.vcomplexes.length,2,{ fileName : "TestV.hx", lineNumber : 1225, className : "nx3.test.TestV", methodName : "testVBarComplexColumn"});
		this.assertEquals((function($this) {
			var $r;
			var this1 = vbar.getVColumnsPositions();
			$r = this1.get(vcolumn);
			return $r;
		}(this)),0,{ fileName : "TestV.hx", lineNumber : 1226, className : "nx3.test.TestV", methodName : "testVBarComplexColumn"});
		this.assertEquals((function($this) {
			var $r;
			var this2 = vbar.getVComplexesVColumns();
			$r = this2.get(vcomplex);
			return $r;
		}(this)),vcolumn,{ fileName : "TestV.hx", lineNumber : 1227, className : "nx3.test.TestV", methodName : "testVBarComplexColumn"});
		var vcomplex1 = cx.ArrayTools.second(cx.ArrayTools.second(vbar.getVParts()).getVComplexes());
		var vcolumn1 = cx.ArrayTools.second(vbar.getVColumns());
		this.assertEquals((function($this) {
			var $r;
			var this3 = vbar.getVComplexesVColumns();
			$r = this3.get(vcomplex1);
			return $r;
		}(this)),vcolumn1,{ fileName : "TestV.hx", lineNumber : 1231, className : "nx3.test.TestV", methodName : "testVBarComplexColumn"});
	}
	,testSystemGeneratorOneBar: function() {
		var bars = [];
		var n0 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefC,null,nx3.EKey.Flat2);
		bars.push(new nx3.VBar(new nx3.NBar([n0],null,nx3.ETime.Time2_4)));
		var generator = new nx3.VSystemGenerator(bars,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system = generator.getSystem();
		this.assertEquals(system.bars[0].actAttributes.clefs.toString(),[nx3.EClef.ClefC].toString(),{ fileName : "TestV.hx", lineNumber : 1270, className : "nx3.test.TestV", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(system.bars[0].actAttributes.keys.toString(),[nx3.EKey.Flat2].toString(),{ fileName : "TestV.hx", lineNumber : 1271, className : "nx3.test.TestV", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(system.bars[0].actAttributes.time,nx3.ETime.Time2_4,{ fileName : "TestV.hx", lineNumber : 1272, className : "nx3.test.TestV", methodName : "testSystemGeneratorOneBar"});
		var bars1 = [];
		var n01 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars1.push(new nx3.VBar(new nx3.NBar([n01])));
		var generator1 = new nx3.VSystemGenerator(bars1,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system1 = generator1.getSystem();
		this.assertEquals(system1.bars[0].actAttributes.clefs.toString(),[nx3.VSystemGenerator.defaultClef].toString(),{ fileName : "TestV.hx", lineNumber : 1281, className : "nx3.test.TestV", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(system1.bars[0].actAttributes.keys.toString(),[nx3.VSystemGenerator.defaultKey].toString(),{ fileName : "TestV.hx", lineNumber : 1282, className : "nx3.test.TestV", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(system1.bars[0].actAttributes.time,nx3.VSystemGenerator.defaultTime,{ fileName : "TestV.hx", lineNumber : 1283, className : "nx3.test.TestV", methodName : "testSystemGeneratorOneBar"});
		var bars2 = [];
		var n02 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars2.push(new nx3.VBar(new nx3.NBar([n02])));
		var prevBarAttributes = { clefs : [nx3.EClef.ClefF], keys : [nx3.EKey.Sharp4], time : nx3.ETime.Time5_8};
		var generator2 = new nx3.VSystemGenerator(bars2,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes,{ width : 400, height : 600});
		var system2 = generator2.getSystem();
		this.assertEquals(system2.bars[0].actAttributes.clefs.toString(),[nx3.EClef.ClefF].toString(),{ fileName : "TestV.hx", lineNumber : 1293, className : "nx3.test.TestV", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(system2.bars[0].actAttributes.keys.toString(),[nx3.EKey.Sharp4].toString(),{ fileName : "TestV.hx", lineNumber : 1294, className : "nx3.test.TestV", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(system2.bars[0].actAttributes.time,nx3.ETime.Time5_8,{ fileName : "TestV.hx", lineNumber : 1295, className : "nx3.test.TestV", methodName : "testSystemGeneratorOneBar"});
		var bars3 = [];
		var n03 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefC);
		var n1 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,null,nx3.EKey.Sharp5);
		bars3.push(new nx3.VBar(new nx3.NBar([n03,n1])));
		var generator3 = new nx3.VSystemGenerator(bars3,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system3 = generator3.getSystem();
		this.assertEquals(system3.bars[0].actAttributes.clefs.toString(),[nx3.EClef.ClefC,nx3.VSystemGenerator.defaultClef].toString(),{ fileName : "TestV.hx", lineNumber : 1305, className : "nx3.test.TestV", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(system3.bars[0].actAttributes.keys.toString(),[nx3.VSystemGenerator.defaultKey,nx3.EKey.Sharp5].toString(),{ fileName : "TestV.hx", lineNumber : 1306, className : "nx3.test.TestV", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(system3.bars[0].actAttributes.time,nx3.VSystemGenerator.defaultTime,{ fileName : "TestV.hx", lineNumber : 1307, className : "nx3.test.TestV", methodName : "testSystemGeneratorOneBar"});
		var bars4 = [];
		var n04 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		var n11 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars4.push(new nx3.VBar(new nx3.NBar([n04,n11])));
		var prevBarAttributes1 = { clefs : [nx3.EClef.ClefF,nx3.EClef.ClefG], keys : [nx3.EKey.Sharp1,nx3.EKey.Flat3], time : nx3.ETime.Time5_8};
		var generator4 = new nx3.VSystemGenerator(bars4,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes1,{ width : 400, height : 600});
		var system4 = generator4.getSystem();
		this.assertEquals(system4.bars[0].actAttributes.clefs.toString(),[nx3.EClef.ClefF,nx3.EClef.ClefG].toString(),{ fileName : "TestV.hx", lineNumber : 1318, className : "nx3.test.TestV", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(system4.bars[0].actAttributes.keys.toString(),[nx3.EKey.Sharp1,nx3.EKey.Flat3].toString(),{ fileName : "TestV.hx", lineNumber : 1319, className : "nx3.test.TestV", methodName : "testSystemGeneratorOneBar"});
		var bars5 = [];
		var n05 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefC);
		var n12 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,null,nx3.EKey.Sharp5);
		bars5.push(new nx3.VBar(new nx3.NBar([n05,n12])));
		var prevBarAttributes2 = { clefs : [nx3.EClef.ClefF,nx3.EClef.ClefG], keys : [nx3.EKey.Sharp1,nx3.EKey.Flat3], time : nx3.ETime.Time5_8};
		var generator5 = new nx3.VSystemGenerator(bars5,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes2,{ width : 400, height : 600});
		var system5 = generator5.getSystem();
		this.assertEquals(system5.bars[0].actAttributes.clefs.toString(),[nx3.EClef.ClefC,nx3.EClef.ClefG].toString(),{ fileName : "TestV.hx", lineNumber : 1330, className : "nx3.test.TestV", methodName : "testSystemGeneratorOneBar"});
		this.assertEquals(system5.bars[0].actAttributes.keys.toString(),[nx3.EKey.Sharp1,nx3.EKey.Sharp5].toString(),{ fileName : "TestV.hx", lineNumber : 1331, className : "nx3.test.TestV", methodName : "testSystemGeneratorOneBar"});
	}
	,testSystemGeneratorBarConfigResult: function() {
		var bars = [];
		var n0 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefC);
		bars.push(new nx3.VBar(new nx3.NBar([n0])));
		var generator = new nx3.VSystemGenerator(bars,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system = generator.getSystem();
		this.assertEquals(system.bars[0].barConfig.showClef,true,{ fileName : "TestV.hx", lineNumber : 1342, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		var bars1 = [];
		var n01 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefC);
		bars1.push(new nx3.VBar(new nx3.NBar([n01])));
		var generator1 = new nx3.VSystemGenerator(bars1,{ showFirstClef : false, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system1 = generator1.getSystem();
		this.assertEquals(system1.bars[0].barConfig.showClef,false,{ fileName : "TestV.hx", lineNumber : 1349, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		var bars2 = [];
		var n02 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars2.push(new nx3.VBar(new nx3.NBar([n02])));
		var generator2 = new nx3.VSystemGenerator(bars2,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system2 = generator2.getSystem();
		this.assertEquals(system2.bars[0].barConfig.showClef,true,{ fileName : "TestV.hx", lineNumber : 1356, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		this.assertEquals(system2.bars[0].actAttributes.clefs.toString(),[nx3.VSystemGenerator.defaultClef].toString(),{ fileName : "TestV.hx", lineNumber : 1357, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		var bars3 = [];
		var n03 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars3.push(new nx3.VBar(new nx3.NBar([n03])));
		var prevBarAttributes = { clefs : [nx3.EClef.ClefF], keys : [nx3.EKey.Sharp4], time : nx3.ETime.Time5_8};
		var generator3 = new nx3.VSystemGenerator(bars3,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes,{ width : 400, height : 600});
		var system3 = generator3.getSystem();
		this.assertEquals(system3.bars[0].barConfig.showClef,true,{ fileName : "TestV.hx", lineNumber : 1365, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		this.assertEquals(system3.bars[0].actAttributes.clefs.toString(),[nx3.VSystemGenerator.defaultClef].toString(),{ fileName : "TestV.hx", lineNumber : 1366, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		var bars4 = [];
		var n04 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,nx3.EDisplayALN.Never);
		bars4.push(new nx3.VBar(new nx3.NBar([n04])));
		var prevBarAttributes1 = { clefs : [nx3.EClef.ClefF], keys : [nx3.EKey.Sharp4], time : nx3.ETime.Time5_8};
		var generator4 = new nx3.VSystemGenerator(bars4,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes1,{ width : 400, height : 600});
		var system4 = generator4.getSystem();
		this.assertEquals(system4.bars[0].barConfig.showClef,false,{ fileName : "TestV.hx", lineNumber : 1376, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		var bars5 = [];
		var n05 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefC,nx3.EDisplayALN.Always);
		bars5.push(new nx3.VBar(new nx3.NBar([n05])));
		var generator5 = new nx3.VSystemGenerator(bars5,{ showFirstClef : false, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system5 = generator5.getSystem();
		this.assertEquals(system5.bars[0].barConfig.showClef,true,{ fileName : "TestV.hx", lineNumber : 1383, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		var bars6 = [];
		var n06 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,nx3.EDisplayALN.Always);
		bars6.push(new nx3.VBar(new nx3.NBar([n06])));
		var generator6 = new nx3.VSystemGenerator(bars6,{ showFirstClef : false, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system6 = generator6.getSystem();
		this.assertEquals(system6.bars[0].barConfig.showClef,true,{ fileName : "TestV.hx", lineNumber : 1390, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		var bars7 = [];
		var n07 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,null,nx3.EKey.Sharp3);
		bars7.push(new nx3.VBar(new nx3.NBar([n07])));
		var generator7 = new nx3.VSystemGenerator(bars7,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system7 = generator7.getSystem();
		this.assertEquals(system7.bars[0].barConfig.showKey,true,{ fileName : "TestV.hx", lineNumber : 1399, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		var bars8 = [];
		var n08 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,null,nx3.EKey.Sharp3);
		bars8.push(new nx3.VBar(new nx3.NBar([n08])));
		var generator8 = new nx3.VSystemGenerator(bars8,{ showFirstClef : false, showFirstKey : false, showFirstTime : true},null,{ width : 400, height : 600});
		var system8 = generator8.getSystem();
		this.assertEquals(system8.bars[0].barConfig.showKey,false,{ fileName : "TestV.hx", lineNumber : 1406, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		var bars9 = [];
		var n09 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars9.push(new nx3.VBar(new nx3.NBar([n09])));
		var generator9 = new nx3.VSystemGenerator(bars9,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system9 = generator9.getSystem();
		this.assertEquals(system9.bars[0].barConfig.showKey,true,{ fileName : "TestV.hx", lineNumber : 1413, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		this.assertEquals(system9.bars[0].actAttributes.keys.toString(),[nx3.VSystemGenerator.defaultKey].toString(),{ fileName : "TestV.hx", lineNumber : 1414, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		var bars10 = [];
		var n010 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars10.push(new nx3.VBar(new nx3.NBar([n010])));
		var prevBarAttributes2 = { clefs : [nx3.EClef.ClefF], keys : [nx3.EKey.Sharp4], time : nx3.ETime.Time5_8};
		var generator10 = new nx3.VSystemGenerator(bars10,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes2,{ width : 400, height : 600});
		var system10 = generator10.getSystem();
		this.assertEquals(system10.bars[0].barConfig.showKey,true,{ fileName : "TestV.hx", lineNumber : 1422, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		this.assertEquals(system10.bars[0].actAttributes.keys.toString(),[nx3.EKey.Sharp4].toString(),{ fileName : "TestV.hx", lineNumber : 1423, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		var bars11 = [];
		var n011 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,nx3.EDisplayALN.Layout,null,nx3.EDisplayALN.Never);
		bars11.push(new nx3.VBar(new nx3.NBar([n011])));
		var prevBarAttributes3 = { clefs : [nx3.EClef.ClefF], keys : [nx3.EKey.Sharp4], time : nx3.ETime.Time5_8};
		var generator11 = new nx3.VSystemGenerator(bars11,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes3,{ width : 400, height : 600});
		var system11 = generator11.getSystem();
		this.assertEquals(system11.bars[0].barConfig.showKey,false,{ fileName : "TestV.hx", lineNumber : 1431, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		var bars12 = [];
		var n012 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,null,nx3.EKey.Sharp3,nx3.EDisplayALN.Always);
		bars12.push(new nx3.VBar(new nx3.NBar([n012])));
		var generator12 = new nx3.VSystemGenerator(bars12,{ showFirstClef : false, showFirstKey : false, showFirstTime : true},null,{ width : 400, height : 600});
		var system12 = generator12.getSystem();
		this.assertEquals(system12.bars[0].barConfig.showKey,true,{ fileName : "TestV.hx", lineNumber : 1438, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		this.assertEquals(system12.bars[0].actAttributes.keys.toString(),[nx3.EKey.Sharp3].toString(),{ fileName : "TestV.hx", lineNumber : 1439, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		var bars13 = [];
		var n013 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,null,null,nx3.EDisplayALN.Always);
		bars13.push(new nx3.VBar(new nx3.NBar([n013])));
		var generator13 = new nx3.VSystemGenerator(bars13,{ showFirstClef : false, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system13 = generator13.getSystem();
		this.assertEquals(system13.bars[0].barConfig.showKey,true,{ fileName : "TestV.hx", lineNumber : 1446, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		this.assertEquals(system13.bars[0].actAttributes.keys.toString(),[nx3.VSystemGenerator.defaultKey].toString(),{ fileName : "TestV.hx", lineNumber : 1447, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		var bars14 = [];
		var n014 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars14.push(new nx3.VBar(new nx3.NBar([n014],null,nx3.ETime.Time2_8)));
		var generator14 = new nx3.VSystemGenerator(bars14,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system14 = generator14.getSystem();
		this.assertEquals(system14.bars[0].barConfig.showTime,true,{ fileName : "TestV.hx", lineNumber : 1456, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		var bars15 = [];
		var n015 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars15.push(new nx3.VBar(new nx3.NBar([n015],null,nx3.ETime.Time2_8)));
		var generator15 = new nx3.VSystemGenerator(bars15,{ showFirstClef : true, showFirstKey : true, showFirstTime : false},null,{ width : 400, height : 600});
		var system15 = generator15.getSystem();
		this.assertEquals(system15.bars[0].barConfig.showTime,false,{ fileName : "TestV.hx", lineNumber : 1463, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		var bars16 = [];
		var n016 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars16.push(new nx3.VBar(new nx3.NBar([n016],null,nx3.ETime.Time2_8,nx3.EDisplayALN.Always)));
		var generator16 = new nx3.VSystemGenerator(bars16,{ showFirstClef : true, showFirstKey : true, showFirstTime : false},null,{ width : 400, height : 600});
		var system16 = generator16.getSystem();
		this.assertEquals(system16.bars[0].barConfig.showTime,true,{ fileName : "TestV.hx", lineNumber : 1470, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		var bars17 = [];
		var n017 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars17.push(new nx3.VBar(new nx3.NBar([n017],null,nx3.ETime.Time2_8,nx3.EDisplayALN.Never)));
		var generator17 = new nx3.VSystemGenerator(bars17,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system17 = generator17.getSystem();
		this.assertEquals(system17.bars[0].barConfig.showTime,false,{ fileName : "TestV.hx", lineNumber : 1477, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		var bars18 = [];
		var n018 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars18.push(new nx3.VBar(new nx3.NBar([n018])));
		var prevBarAttributes4 = { clefs : [nx3.EClef.ClefF], keys : [nx3.EKey.Sharp4], time : nx3.ETime.Time5_8};
		var generator18 = new nx3.VSystemGenerator(bars18,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes4,{ width : 400, height : 600});
		var system18 = generator18.getSystem();
		this.assertEquals(system18.bars[0].barConfig.showTime,true,{ fileName : "TestV.hx", lineNumber : 1485, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
		this.assertEquals(system18.bars[0].actAttributes.time,nx3.ETime.Time5_8,{ fileName : "TestV.hx", lineNumber : 1486, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResult"});
	}
	,testSystemGeneratorBarConfigResultTwoParts: function() {
		var bars = [];
		var n0 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefC);
		var n1 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefF);
		bars.push(new nx3.VBar(new nx3.NBar([n0,n1])));
		var generator = new nx3.VSystemGenerator(bars,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system = generator.getSystem();
		this.assertEquals(system.bars[0].barConfig.showClef,true,{ fileName : "TestV.hx", lineNumber : 1499, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResultTwoParts"});
		var bars1 = [];
		var n01 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefC,nx3.EDisplayALN.Never);
		var n11 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefF);
		bars1.push(new nx3.VBar(new nx3.NBar([n01,n11])));
		var generator1 = new nx3.VSystemGenerator(bars1,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system1 = generator1.getSystem();
		this.assertEquals(system1.bars[0].barConfig.showClef,true,{ fileName : "TestV.hx", lineNumber : 1507, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResultTwoParts"});
		var bars2 = [];
		var n02 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefC);
		var n12 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefF,nx3.EDisplayALN.Never);
		bars2.push(new nx3.VBar(new nx3.NBar([n02,n12])));
		var generator2 = new nx3.VSystemGenerator(bars2,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system2 = generator2.getSystem();
		this.assertEquals(system2.bars[0].barConfig.showClef,true,{ fileName : "TestV.hx", lineNumber : 1515, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResultTwoParts"});
		var bars3 = [];
		var n03 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefC,nx3.EDisplayALN.Never);
		var n13 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefF,nx3.EDisplayALN.Never);
		bars3.push(new nx3.VBar(new nx3.NBar([n03,n13])));
		var generator3 = new nx3.VSystemGenerator(bars3,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system3 = generator3.getSystem();
		this.assertEquals(system3.bars[0].barConfig.showClef,false,{ fileName : "TestV.hx", lineNumber : 1523, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResultTwoParts"});
		var bars4 = [];
		var n04 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefC,nx3.EDisplayALN.Always);
		var n14 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefF);
		bars4.push(new nx3.VBar(new nx3.NBar([n04,n14])));
		var generator4 = new nx3.VSystemGenerator(bars4,{ showFirstClef : false, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system4 = generator4.getSystem();
		this.assertEquals(system4.bars[0].barConfig.showClef,true,{ fileName : "TestV.hx", lineNumber : 1531, className : "nx3.test.TestV", methodName : "testSystemGeneratorBarConfigResultTwoParts"});
	}
	,testSystemGeneratorContentWidth: function() {
		var bars = [];
		var n0 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars.push(new nx3.VBar(new nx3.NBar([n0])));
		var generator = new nx3.VSystemGenerator(bars,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system = generator.getSystem();
		this.assertEquals(system.bars[0].width,170,{ fileName : "TestV.hx", lineNumber : 1543, className : "nx3.test.TestV", methodName : "testSystemGeneratorContentWidth"});
		this.assertTrue(true,{ fileName : "TestV.hx", lineNumber : 1544, className : "nx3.test.TestV", methodName : "testSystemGeneratorContentWidth"});
		var bars1 = [];
		var n01 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefF,null,nx3.EKey.Sharp4);
		bars1.push(new nx3.VBar(new nx3.NBar([n01],null,nx3.ETime.Time5_8)));
		var generator1 = new nx3.VSystemGenerator(bars1,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system1 = generator1.getSystem();
		this.assertEquals(system1.bars[0].width,190,{ fileName : "TestV.hx", lineNumber : 1551, className : "nx3.test.TestV", methodName : "testSystemGeneratorContentWidth"});
		this.assertTrue(true,{ fileName : "TestV.hx", lineNumber : 1552, className : "nx3.test.TestV", methodName : "testSystemGeneratorContentWidth"});
		var bars2 = [];
		var n02 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars2.push(new nx3.VBar(new nx3.NBar([n02])));
		var prevBarAttributes = { clefs : [nx3.EClef.ClefF], keys : [nx3.EKey.Sharp4], time : nx3.ETime.Time5_8};
		var generator2 = new nx3.VSystemGenerator(bars2,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes,{ width : 400, height : 600});
		var system2 = generator2.getSystem();
		this.assertEquals(system2.bars[0].width,190,{ fileName : "TestV.hx", lineNumber : 1560, className : "nx3.test.TestV", methodName : "testSystemGeneratorContentWidth"});
		this.assertTrue(true,{ fileName : "TestV.hx", lineNumber : 1561, className : "nx3.test.TestV", methodName : "testSystemGeneratorContentWidth"});
	}
	,testSystemGeneratorTwoBars: function() {
		var bars = [];
		var n0 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefG,null,nx3.EKey.Flat3);
		bars.push(new nx3.VBar(new nx3.NBar([n0],null,nx3.ETime.Time3_2)));
		var n01 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars.push(new nx3.VBar(new nx3.NBar([n01])));
		var generator = new nx3.VSystemGenerator(bars,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : 400, height : 600});
		var system = generator.getSystem();
		this.assertEquals(system.bars.length,2,{ fileName : "TestV.hx", lineNumber : 1576, className : "nx3.test.TestV", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(system.bars[0].actAttributes.clefs.toString(),[nx3.EClef.ClefG].toString(),{ fileName : "TestV.hx", lineNumber : 1577, className : "nx3.test.TestV", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(system.bars[1].actAttributes.clefs.toString(),[nx3.EClef.ClefG].toString(),{ fileName : "TestV.hx", lineNumber : 1578, className : "nx3.test.TestV", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(system.bars[0].actAttributes.keys.toString(),[nx3.EKey.Flat3].toString(),{ fileName : "TestV.hx", lineNumber : 1579, className : "nx3.test.TestV", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(system.bars[1].actAttributes.keys.toString(),[nx3.EKey.Flat3].toString(),{ fileName : "TestV.hx", lineNumber : 1580, className : "nx3.test.TestV", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(system.bars[0].actAttributes.time,nx3.ETime.Time3_2,{ fileName : "TestV.hx", lineNumber : 1581, className : "nx3.test.TestV", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(system.bars[0].barConfig.showClef,true,{ fileName : "TestV.hx", lineNumber : 1582, className : "nx3.test.TestV", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(system.bars[1].barConfig.showClef,false,{ fileName : "TestV.hx", lineNumber : 1583, className : "nx3.test.TestV", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(system.bars[0].barConfig.showKey,true,{ fileName : "TestV.hx", lineNumber : 1584, className : "nx3.test.TestV", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(system.bars[1].barConfig.showKey,false,{ fileName : "TestV.hx", lineNumber : 1585, className : "nx3.test.TestV", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(system.bars[0].barConfig.showTime,true,{ fileName : "TestV.hx", lineNumber : 1586, className : "nx3.test.TestV", methodName : "testSystemGeneratorTwoBars"});
		this.assertEquals(system.bars[1].barConfig.showTime,false,{ fileName : "TestV.hx", lineNumber : 1587, className : "nx3.test.TestV", methodName : "testSystemGeneratorTwoBars"});
	}
	,testSystemGeneratorMoreBars: function() {
		var bars = [];
		var n0 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefG,null,nx3.EKey.Flat3);
		bars.push(new nx3.VBar(new nx3.NBar([n0],null,nx3.ETime.Time3_2)));
		var n01 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars.push(new nx3.VBar(new nx3.NBar([n01])));
		var n02 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,null,nx3.EKey.Sharp1);
		bars.push(new nx3.VBar(new nx3.NBar([n02])));
		var n03 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars.push(new nx3.VBar(new nx3.NBar([n03],null,nx3.ETime.Time6_8)));
		var n04 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars.push(new nx3.VBar(new nx3.NBar([n04])));
		var n05 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefF);
		bars.push(new nx3.VBar(new nx3.NBar([n05])));
		var generator = new nx3.VSystemGenerator(bars,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : 1000, height : 600});
		var system = generator.getSystem();
		this.assertEquals(system.bars.length,6,{ fileName : "TestV.hx", lineNumber : 1608, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(system.bars[0].actAttributes.clefs.toString(),[nx3.EClef.ClefG].toString(),{ fileName : "TestV.hx", lineNumber : 1609, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(system.bars[1].actAttributes.clefs.toString(),[nx3.EClef.ClefG].toString(),{ fileName : "TestV.hx", lineNumber : 1610, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(system.bars[2].actAttributes.clefs.toString(),[nx3.EClef.ClefG].toString(),{ fileName : "TestV.hx", lineNumber : 1611, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(system.bars[3].actAttributes.clefs.toString(),[nx3.EClef.ClefG].toString(),{ fileName : "TestV.hx", lineNumber : 1612, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(system.bars[4].actAttributes.clefs.toString(),[nx3.EClef.ClefG].toString(),{ fileName : "TestV.hx", lineNumber : 1613, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(system.bars[5].actAttributes.clefs.toString(),[nx3.EClef.ClefF].toString(),{ fileName : "TestV.hx", lineNumber : 1614, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(system.bars[0].actAttributes.keys.toString(),[nx3.EKey.Flat3].toString(),{ fileName : "TestV.hx", lineNumber : 1615, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(system.bars[1].actAttributes.keys.toString(),[nx3.EKey.Flat3].toString(),{ fileName : "TestV.hx", lineNumber : 1616, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(system.bars[2].actAttributes.keys.toString(),[nx3.EKey.Sharp1].toString(),{ fileName : "TestV.hx", lineNumber : 1617, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(system.bars[3].actAttributes.keys.toString(),[nx3.EKey.Sharp1].toString(),{ fileName : "TestV.hx", lineNumber : 1618, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(system.bars[4].actAttributes.keys.toString(),[nx3.EKey.Sharp1].toString(),{ fileName : "TestV.hx", lineNumber : 1619, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(system.bars[5].actAttributes.keys.toString(),[nx3.EKey.Sharp1].toString(),{ fileName : "TestV.hx", lineNumber : 1620, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(system.bars[0].actAttributes.time,nx3.ETime.Time3_2,{ fileName : "TestV.hx", lineNumber : 1621, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(system.bars[1].actAttributes.time,nx3.ETime.Time3_2,{ fileName : "TestV.hx", lineNumber : 1622, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(system.bars[2].actAttributes.time,nx3.ETime.Time3_2,{ fileName : "TestV.hx", lineNumber : 1623, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(system.bars[3].actAttributes.time,nx3.ETime.Time6_8,{ fileName : "TestV.hx", lineNumber : 1624, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(system.bars[4].actAttributes.time,nx3.ETime.Time6_8,{ fileName : "TestV.hx", lineNumber : 1625, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(system.bars[5].actAttributes.time,nx3.ETime.Time6_8,{ fileName : "TestV.hx", lineNumber : 1626, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(nx3.test.TestV.barConfToArr(system.bars[0].barConfig).toString(),[true,true,true].toString(),{ fileName : "TestV.hx", lineNumber : 1627, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(nx3.test.TestV.barConfToArr(system.bars[1].barConfig).toString(),[false,false,false].toString(),{ fileName : "TestV.hx", lineNumber : 1628, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(nx3.test.TestV.barConfToArr(system.bars[2].barConfig).toString(),[false,true,false].toString(),{ fileName : "TestV.hx", lineNumber : 1629, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(nx3.test.TestV.barConfToArr(system.bars[3].barConfig).toString(),[false,false,true].toString(),{ fileName : "TestV.hx", lineNumber : 1630, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(nx3.test.TestV.barConfToArr(system.bars[4].barConfig).toString(),[false,false,false].toString(),{ fileName : "TestV.hx", lineNumber : 1631, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
		this.assertEquals(nx3.test.TestV.barConfToArr(system.bars[5].barConfig).toString(),[true,false,false].toString(),{ fileName : "TestV.hx", lineNumber : 1632, className : "nx3.test.TestV", methodName : "testSystemGeneratorMoreBars"});
	}
	,testSystemGeneratorOverflow: function() {
		var bars = [];
		var n0 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefG,null,nx3.EKey.Flat3);
		bars.push(new nx3.VBar(new nx3.NBar([n0],null,nx3.ETime.Time3_2)));
		var n01 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars.push(new nx3.VBar(new nx3.NBar([n01])));
		var n02 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars.push(new nx3.VBar(new nx3.NBar([n02])));
		var n03 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars.push(new nx3.VBar(new nx3.NBar([n03])));
		var n04 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars.push(new nx3.VBar(new nx3.NBar([n04])));
		var n05 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars.push(new nx3.VBar(new nx3.NBar([n05])));
		var barscopy = bars.slice();
		var pagewidth = 1000;
		var generator = new nx3.VSystemGenerator(barscopy,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : pagewidth, height : 600});
		var system = generator.getSystem();
		this.assertEquals(system.bars.length,6,{ fileName : "TestV.hx", lineNumber : 1657, className : "nx3.test.TestV", methodName : "testSystemGeneratorOverflow"});
		this.assertEquals(system.width,780,{ fileName : "TestV.hx", lineNumber : 1658, className : "nx3.test.TestV", methodName : "testSystemGeneratorOverflow"});
		this.assertEquals(barscopy.length,0,{ fileName : "TestV.hx", lineNumber : 1659, className : "nx3.test.TestV", methodName : "testSystemGeneratorOverflow"});
		var barscopy1 = bars.slice();
		var pagewidth1 = 780;
		var generator1 = new nx3.VSystemGenerator(barscopy1,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : pagewidth1, height : 600});
		var system1 = generator1.getSystem();
		this.assertEquals(system1.bars.length,6,{ fileName : "TestV.hx", lineNumber : 1665, className : "nx3.test.TestV", methodName : "testSystemGeneratorOverflow"});
		this.assertEquals(system1.width,780,{ fileName : "TestV.hx", lineNumber : 1666, className : "nx3.test.TestV", methodName : "testSystemGeneratorOverflow"});
		this.assertEquals(barscopy1.length,0,{ fileName : "TestV.hx", lineNumber : 1667, className : "nx3.test.TestV", methodName : "testSystemGeneratorOverflow"});
		var barscopy2 = bars.slice();
		var pagewidth2 = 700;
		var generator2 = new nx3.VSystemGenerator(barscopy2,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : pagewidth2, height : 600});
		var system2 = generator2.getSystem();
		this.assertEquals(system2.bars.length,5,{ fileName : "TestV.hx", lineNumber : 1673, className : "nx3.test.TestV", methodName : "testSystemGeneratorOverflow"});
		this.assertEquals(system2.width,660,{ fileName : "TestV.hx", lineNumber : 1674, className : "nx3.test.TestV", methodName : "testSystemGeneratorOverflow"});
		this.assertEquals(barscopy2.length,1,{ fileName : "TestV.hx", lineNumber : 1675, className : "nx3.test.TestV", methodName : "testSystemGeneratorOverflow"});
	}
	,testSystemGeneratorCautions: function() {
		var bars = [];
		var n0 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefG,null,nx3.EKey.Flat3);
		bars.push(new nx3.VBar(new nx3.NBar([n0],null,nx3.ETime.Time3_2)));
		var n01 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars.push(new nx3.VBar(new nx3.NBar([n01])));
		var pagewidth = 250;
		var generator = new nx3.VSystemGenerator(bars,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : pagewidth, height : 600});
		var system = generator.getSystem();
		this.assertEquals(system.bars.length,1,{ fileName : "TestV.hx", lineNumber : 1689, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
		this.assertEquals(system.width,180,{ fileName : "TestV.hx", lineNumber : 1690, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
		var bars1 = [];
		var n02 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefG,null,nx3.EKey.Flat3);
		bars1.push(new nx3.VBar(new nx3.NBar([n02],null,nx3.ETime.Time3_2)));
		var n03 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefF);
		bars1.push(new nx3.VBar(new nx3.NBar([n03])));
		var pagewidth1 = 250;
		var generator1 = new nx3.VSystemGenerator(bars1,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : pagewidth1, height : 600});
		var system1 = generator1.getSystem();
		this.assertEquals(system1.bars.length,1,{ fileName : "TestV.hx", lineNumber : 1700, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
		this.assertEquals(system1.width,200,{ fileName : "TestV.hx", lineNumber : 1701, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
		this.assertEquals(system1.bars[0].barConfig.showCautClef,true,{ fileName : "TestV.hx", lineNumber : 1702, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
		this.assertEquals(system1.bars[0].barConfig.showCautKey,false,{ fileName : "TestV.hx", lineNumber : 1703, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
		this.assertEquals(system1.bars[0].barConfig.showCautTime,false,{ fileName : "TestV.hx", lineNumber : 1704, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
		this.assertEquals(cx.ArrayTools.last(system1.bars).caAttributes.clefs.toString(),[nx3.EClef.ClefF].toString(),{ fileName : "TestV.hx", lineNumber : 1705, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
		var bars2 = [];
		var n04 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefG,null,nx3.EKey.Flat3);
		bars2.push(new nx3.VBar(new nx3.NBar([n04],null,nx3.ETime.Time3_2)));
		var n05 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,null,nx3.EKey.Sharp1);
		bars2.push(new nx3.VBar(new nx3.NBar([n05])));
		var pagewidth2 = 250;
		var generator2 = new nx3.VSystemGenerator(bars2,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : pagewidth2, height : 600});
		var system2 = generator2.getSystem();
		this.assertEquals(system2.bars.length,1,{ fileName : "TestV.hx", lineNumber : 1715, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
		this.assertEquals(system2.width,190,{ fileName : "TestV.hx", lineNumber : 1716, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
		this.assertEquals(system2.bars[0].barConfig.showCautClef,false,{ fileName : "TestV.hx", lineNumber : 1717, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
		this.assertEquals(system2.bars[0].barConfig.showCautKey,true,{ fileName : "TestV.hx", lineNumber : 1718, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
		this.assertEquals(system2.bars[0].barConfig.showCautTime,false,{ fileName : "TestV.hx", lineNumber : 1719, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
		this.assertEquals(cx.ArrayTools.last(system2.bars).caAttributes.keys.toString(),[nx3.EKey.Sharp1].toString(),{ fileName : "TestV.hx", lineNumber : 1720, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
		var bars3 = [];
		var n06 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefG,null,nx3.EKey.Flat3);
		bars3.push(new nx3.VBar(new nx3.NBar([n06],null,nx3.ETime.Time3_2)));
		var n07 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars3.push(new nx3.VBar(new nx3.NBar([n07],null,nx3.ETime.Time2_2)));
		var pagewidth3 = 250;
		var generator3 = new nx3.VSystemGenerator(bars3,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : pagewidth3, height : 600});
		var system3 = generator3.getSystem();
		this.assertEquals(system3.bars.length,1,{ fileName : "TestV.hx", lineNumber : 1730, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
		this.assertEquals(system3.width,190,{ fileName : "TestV.hx", lineNumber : 1731, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
		this.assertEquals(system3.bars[0].barConfig.showCautClef,false,{ fileName : "TestV.hx", lineNumber : 1732, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
		this.assertEquals(system3.bars[0].barConfig.showCautKey,false,{ fileName : "TestV.hx", lineNumber : 1733, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
		this.assertEquals(system3.bars[0].barConfig.showCautTime,true,{ fileName : "TestV.hx", lineNumber : 1734, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
		this.assertEquals(cx.ArrayTools.last(system3.bars).caAttributes.time,nx3.ETime.Time2_2,{ fileName : "TestV.hx", lineNumber : 1735, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautions"});
	}
	,testSystemGeneratorCautionsTwoParts: function() {
		var bars = [];
		var n0 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefG,null,nx3.EKey.Flat3);
		var n1 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefF,null,nx3.EKey.Sharp4);
		bars.push(new nx3.VBar(new nx3.NBar([n0,n1],null,nx3.ETime.Time3_2)));
		var n01 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		var n11 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars.push(new nx3.VBar(new nx3.NBar([n01,n11])));
		var pagewidth = 250;
		var generator = new nx3.VSystemGenerator(bars,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : pagewidth, height : 600});
		var system = generator.getSystem();
		this.assertEquals(system.bars.length,1,{ fileName : "TestV.hx", lineNumber : 1751, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system.width,190,{ fileName : "TestV.hx", lineNumber : 1752, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		var bars1 = [];
		var n02 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefG,null,nx3.EKey.Flat3);
		var n12 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefF,null,nx3.EKey.Sharp4);
		bars1.push(new nx3.VBar(new nx3.NBar([n02,n12],null,nx3.ETime.Time3_2)));
		var n03 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		var n13 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars1.push(new nx3.VBar(new nx3.NBar([n03,n13],null,nx3.ETime.Time12_8)));
		var pagewidth1 = 250;
		var generator1 = new nx3.VSystemGenerator(bars1,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : pagewidth1, height : 600});
		var system1 = generator1.getSystem();
		this.assertEquals(system1.bars.length,1,{ fileName : "TestV.hx", lineNumber : 1764, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system1.width,200,{ fileName : "TestV.hx", lineNumber : 1765, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		var bars2 = [];
		var n04 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		var n14 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars2.push(new nx3.VBar(new nx3.NBar([n04,n14])));
		var n05 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		var n15 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars2.push(new nx3.VBar(new nx3.NBar([n05,n15],null,nx3.ETime.Time12_8)));
		var prevBarAttributes = { clefs : [nx3.EClef.ClefG,nx3.EClef.ClefF], keys : [nx3.EKey.Flat3,nx3.EKey.Sharp4], time : nx3.ETime.Time3_2};
		var pagewidth2 = 250;
		var generator2 = new nx3.VSystemGenerator(bars2,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes,{ width : pagewidth2, height : 600});
		var system2 = generator2.getSystem();
		this.assertEquals(system2.bars.length,1,{ fileName : "TestV.hx", lineNumber : 1778, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system2.width,200,{ fileName : "TestV.hx", lineNumber : 1779, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system2.bars[0].barConfig.showTime,true,{ fileName : "TestV.hx", lineNumber : 1780, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system2.bars[0].actAttributes.clefs.toString(),[nx3.EClef.ClefG,nx3.EClef.ClefF].toString(),{ fileName : "TestV.hx", lineNumber : 1781, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system2.bars[0].actAttributes.keys.toString(),[nx3.EKey.Flat3,nx3.EKey.Sharp4].toString(),{ fileName : "TestV.hx", lineNumber : 1782, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system2.bars[0].actAttributes.time,nx3.ETime.Time3_2,{ fileName : "TestV.hx", lineNumber : 1783, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system2.bars[0].barConfig.showCautTime,true,{ fileName : "TestV.hx", lineNumber : 1784, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system2.bars[0].caAttributes.time,nx3.ETime.Time12_8,{ fileName : "TestV.hx", lineNumber : 1785, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		var bars3 = [];
		var n06 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		var n16 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars3.push(new nx3.VBar(new nx3.NBar([n06,n16])));
		var n07 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		var n17 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefC);
		bars3.push(new nx3.VBar(new nx3.NBar([n07,n17])));
		var prevBarAttributes1 = { clefs : [nx3.EClef.ClefG,nx3.EClef.ClefF], keys : [nx3.EKey.Flat3,nx3.EKey.Sharp4], time : nx3.ETime.Time3_2};
		var pagewidth3 = 250;
		var generator3 = new nx3.VSystemGenerator(bars3,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes1,{ width : pagewidth3, height : 600});
		var system3 = generator3.getSystem();
		this.assertEquals(system3.bars.length,1,{ fileName : "TestV.hx", lineNumber : 1798, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system3.width,210,{ fileName : "TestV.hx", lineNumber : 1799, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system3.bars[0].barConfig.showTime,true,{ fileName : "TestV.hx", lineNumber : 1800, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system3.bars[0].actAttributes.clefs.toString(),[nx3.EClef.ClefG,nx3.EClef.ClefF].toString(),{ fileName : "TestV.hx", lineNumber : 1801, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system3.bars[0].actAttributes.keys.toString(),[nx3.EKey.Flat3,nx3.EKey.Sharp4].toString(),{ fileName : "TestV.hx", lineNumber : 1802, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system3.bars[0].actAttributes.time,nx3.ETime.Time3_2,{ fileName : "TestV.hx", lineNumber : 1803, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system3.bars[0].barConfig.showCautClef,true,{ fileName : "TestV.hx", lineNumber : 1804, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system3.bars[0].caAttributes.clefs.toString(),[null,nx3.EClef.ClefC].toString(),{ fileName : "TestV.hx", lineNumber : 1805, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		var bars4 = [];
		var n08 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		var n18 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars4.push(new nx3.VBar(new nx3.NBar([n08,n18])));
		var n09 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,null,nx3.EKey.Flat1);
		var n19 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars4.push(new nx3.VBar(new nx3.NBar([n09,n19])));
		var prevBarAttributes2 = { clefs : [nx3.EClef.ClefG,nx3.EClef.ClefF], keys : [nx3.EKey.Flat3,nx3.EKey.Sharp4], time : nx3.ETime.Time3_2};
		var pagewidth4 = 250;
		var generator4 = new nx3.VSystemGenerator(bars4,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes2,{ width : pagewidth4, height : 600});
		var system4 = generator4.getSystem();
		this.assertEquals(system4.bars.length,1,{ fileName : "TestV.hx", lineNumber : 1818, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system4.width,200,{ fileName : "TestV.hx", lineNumber : 1819, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system4.bars[0].barConfig.showTime,true,{ fileName : "TestV.hx", lineNumber : 1820, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system4.bars[0].actAttributes.clefs.toString(),[nx3.EClef.ClefG,nx3.EClef.ClefF].toString(),{ fileName : "TestV.hx", lineNumber : 1821, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system4.bars[0].actAttributes.keys.toString(),[nx3.EKey.Flat3,nx3.EKey.Sharp4].toString(),{ fileName : "TestV.hx", lineNumber : 1822, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system4.bars[0].actAttributes.time,nx3.ETime.Time3_2,{ fileName : "TestV.hx", lineNumber : 1823, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system4.bars[0].barConfig.showCautKey,true,{ fileName : "TestV.hx", lineNumber : 1824, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system4.bars[0].caAttributes.keys.toString(),[nx3.EKey.Flat1,null].toString(),{ fileName : "TestV.hx", lineNumber : 1825, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		var bars5 = [];
		var n010 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		var n110 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars5.push(new nx3.VBar(new nx3.NBar([n010,n110])));
		var n011 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefG,null,nx3.EKey.Sharp2);
		var n111 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefF,null,nx3.EKey.Sharp4);
		bars5.push(new nx3.VBar(new nx3.NBar([n011,n111],null,nx3.ETime.Time4_8)));
		var prevBarAttributes3 = { clefs : [nx3.EClef.ClefG,nx3.EClef.ClefC], keys : [nx3.EKey.Flat3,nx3.EKey.Sharp4], time : nx3.ETime.Time3_2};
		var pagewidth5 = 260;
		var generator5 = new nx3.VSystemGenerator(bars5,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},prevBarAttributes3,{ width : pagewidth5, height : 600});
		var system5 = generator5.getSystem();
		this.assertEquals(system5.bars.length,1,{ fileName : "TestV.hx", lineNumber : 1838, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system5.bars[0].barConfig.showCautClef,true,{ fileName : "TestV.hx", lineNumber : 1840, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system5.bars[0].caAttributes.clefs.toString(),[null,nx3.EClef.ClefF].toString(),{ fileName : "TestV.hx", lineNumber : 1841, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system5.bars[0].barConfig.showCautKey,true,{ fileName : "TestV.hx", lineNumber : 1842, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system5.bars[0].caAttributes.keys.toString(),[nx3.EKey.Sharp2,null].toString(),{ fileName : "TestV.hx", lineNumber : 1843, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system5.bars[0].barConfig.showCautTime,true,{ fileName : "TestV.hx", lineNumber : 1844, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system5.bars[0].caAttributes.time,nx3.ETime.Time4_8,{ fileName : "TestV.hx", lineNumber : 1845, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
		this.assertEquals(system5.width,240,{ fileName : "TestV.hx", lineNumber : 1846, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsTwoParts"});
	}
	,testSystemGeneratorCautionsDontFit: function() {
		var bars = [];
		var n0 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefG,null,nx3.EKey.Flat3);
		var n1 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefF,null,nx3.EKey.Sharp4);
		bars.push(new nx3.VBar(new nx3.NBar([n0,n1],null,nx3.ETime.Time3_2)));
		var n01 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		var n11 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars.push(new nx3.VBar(new nx3.NBar([n01,n11])));
		var n02 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		var n12 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars.push(new nx3.VBar(new nx3.NBar([n02,n12])));
		var pagewidth = 315;
		var generator = new nx3.VSystemGenerator(bars,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : pagewidth, height : 600});
		var system = generator.getSystem();
		this.assertEquals(system.bars.length,2,{ fileName : "TestV.hx", lineNumber : 1868, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsDontFit"});
		this.assertEquals(system.width,310,{ fileName : "TestV.hx", lineNumber : 1869, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsDontFit"});
		this.assertEquals(bars.length,1,{ fileName : "TestV.hx", lineNumber : 1870, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsDontFit"});
		var bars1 = [];
		var n03 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefG,null,nx3.EKey.Flat3);
		var n13 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,nx3.EClef.ClefF,null,nx3.EKey.Sharp4);
		bars1.push(new nx3.VBar(new nx3.NBar([n03,n13],null,nx3.ETime.Time3_2)));
		var n04 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		var n14 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		bars1.push(new nx3.VBar(new nx3.NBar([n04,n14])));
		var n05 = new nx3.NPart([new nx3.QVoice([4,4,4,4])]);
		var n15 = new nx3.NPart([new nx3.QVoice([4,4,4,4])],null,null,null,nx3.EKey.Flat1);
		bars1.push(new nx3.VBar(new nx3.NBar([n05,n15])));
		var pagewidth1 = 315;
		var generator1 = new nx3.VSystemGenerator(bars1,{ showFirstClef : true, showFirstKey : true, showFirstTime : true},null,{ width : pagewidth1, height : 600});
		var system1 = generator1.getSystem();
		this.assertEquals(system1.bars.length,1,{ fileName : "TestV.hx", lineNumber : 1888, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsDontFit"});
		this.assertEquals(system1.width,190,{ fileName : "TestV.hx", lineNumber : 1889, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsDontFit"});
		this.assertEquals(bars1.length,2,{ fileName : "TestV.hx", lineNumber : 1890, className : "nx3.test.TestV", methodName : "testSystemGeneratorCautionsDontFit"});
	}
	,rectEquals: function(a,b,bx,by,bwidth,bheight) {
		if(bheight == null) bheight = -1;
		if(bwidth == null) bwidth = -1;
		if(by == null) by = -1;
		if(bx == null) bx = -1;
		var result = false;
		if(b == null) {
			if(bwidth == -1 || bheight == -1) throw "Rect comparison error";
			result = Math.abs(a.x - bx) <= 0.00001 && Math.abs(a.y - by) <= 0.00001 && Math.abs(a.width - bwidth) <= 0.00001 && Math.abs(a.height - bheight) <= 0.00001;
			if(!result) haxe.Log.trace(["Rectangle not equal",Std.string(a)],{ fileName : "TestV.hx", lineNumber : 1906, className : "nx3.test.TestV", methodName : "rectEquals"});
			return result;
		}
		result = Math.abs(a.x - b.x) <= 0.00001 && Math.abs(a.y - b.y) <= 0.00001 && Math.abs(a.width - b.width) <= 0.00001 && Math.abs(a.height - b.height) <= 0.00001;
		if(!result) haxe.Log.trace(["Rectangle not equal",Std.string(a)],{ fileName : "TestV.hx", lineNumber : 1910, className : "nx3.test.TestV", methodName : "rectEquals"});
		return result;
	}
	,arrEquals: function(a,b) {
		return a.toString() == b.toString();
	}
	,__class__: nx3.test.TestV
});
nx3.test.TestVRender = function() {
	haxe.unit.TestCase.call(this);
	this.target = flash.Lib.current;
	this.renderer = new nx3.test.DevRenderer(this.target,nx3.render.scaling.Scaling.BIG);
};
$hxClasses["nx3.test.TestVRender"] = nx3.test.TestVRender;
nx3.test.TestVRender.__name__ = ["nx3","test","TestVRender"];
nx3.test.TestVRender.__super__ = haxe.unit.TestCase;
nx3.test.TestVRender.prototype = $extend(haxe.unit.TestCase.prototype,{
	target: null
	,renderer: null
	,test0: function() {
		this.assertEquals(1,1,{ fileName : "TestVRender.hx", lineNumber : 68, className : "nx3.test.TestVRender", methodName : "test0"});
	}
	,testDist1: function() {
		var vbar = new nx3.VBar(new nx3.NBar([new nx3.NPart([new nx3.QVoice([4],null,[0]),new nx3.QVoice([8,.8,8],null,[1,1,5],null,"..#")]),new nx3.NPart([new nx3.QVoice([8,8,8,8],null,[0])])]));
		this.renderer.setDefaultXY(200,80);
		this.renderer.drawVBarNotelines(vbar,800,50);
		this.renderer.drawVBarComplexes(vbar);
		this.renderer.drawVBarVoices(vbar);
		this.assertTrue(true,{ fileName : "TestVRender.hx", lineNumber : 88, className : "nx3.test.TestVRender", methodName : "testDist1"});
	}
	,__class__: nx3.test.TestVRender
});
nx3.test.DevRenderer = function(target,scaling) {
	this.defaultY = 80;
	this.defaultX = 40;
	this.partdistance = 120;
	nx3.render.FrameRenderer.call(this,target,scaling);
};
$hxClasses["nx3.test.DevRenderer"] = nx3.test.DevRenderer;
nx3.test.DevRenderer.__name__ = ["nx3","test","DevRenderer"];
nx3.test.DevRenderer.__super__ = nx3.render.FrameRenderer;
nx3.test.DevRenderer.prototype = $extend(nx3.render.FrameRenderer.prototype,{
	partdistance: null
	,defaultX: null
	,defaultY: null
	,setDefaultXY: function(x,y) {
		this.defaultX = x;
		this.defaultY = y;
	}
	,vnoteheads: function(vnote,x,y,fill) {
		if(fill == null) fill = 65280;
		this.target.get_graphics().beginFill(fill);
		var _g = 0;
		var _g1 = vnote.getVHeadsRectanglesDir(null);
		while(_g < _g1.length) {
			var rect = _g1[_g];
			++_g;
			this.drawRect(rect,x,y);
		}
	}
	,drawVBarNotelines: function(vbar,width,xMinus) {
		if(xMinus == null) xMinus = 100;
		if(width == null) width = 800;
		var y = this.defaultY;
		var _g = 0;
		var _g1 = vbar.getVParts();
		while(_g < _g1.length) {
			var vpart = _g1[_g];
			++_g;
			this.notelines(this.defaultX - xMinus,y,width + xMinus);
			y += this.partdistance;
		}
	}
	,drawVBarColumns: function(vbar) {
		var height = (vbar.getVParts().length - 1) * this.partdistance;
		var positionsColumns = vbar.getPositionsColumns();
		var $it0 = positionsColumns.keys();
		while( $it0.hasNext() ) {
			var pos = $it0.next();
			var colx = pos * nx3.test.DevRenderer.posfactor;
			this.target.get_graphics().endFill();
			this.target.get_graphics().lineStyle(1,255);
			this.target.get_graphics().moveTo(this.defaultX + colx,this.defaultY - this.scaling.space * 3);
			this.target.get_graphics().lineTo(this.defaultX + colx,this.defaultY + height + this.scaling.space * 3);
		}
	}
	,drawVBarComplexes: function(vbar) {
		var barMinWidth = vbar.getVColumnsMinWidth();
		this.drawRectangleScaled(this.target.get_graphics(),this.defaultX,this.defaultY,new flash.geom.Rectangle(0,-7,barMinWidth,30));
		var columnsMinPositions = vbar.getVColumnsMinPositions();
		var party = this.defaultY;
		var _g = 0;
		var _g1 = vbar.getVParts();
		while(_g < _g1.length) {
			var vpart = _g1[_g];
			++_g;
			var beamgroupsDirections = vpart.getBeamgroupsDirections();
			var _g2 = 0;
			var _g3 = vpart.getVComplexes();
			while(_g2 < _g3.length) {
				var vcomplex = _g3[_g2];
				++_g2;
				var vcolumn;
				var this1 = vbar.getVComplexesVColumns();
				vcolumn = this1.get(vcomplex);
				var pos = columnsMinPositions.h[vcolumn.__id__];
				var colx = this.defaultX + pos * this.scaling.halfNoteWidth;
				this.target.get_graphics().endFill();
				this.target.get_graphics().lineStyle(1,16711680);
				this.target.get_graphics().drawRect(colx - 5,party - 5,10,10);
				var _g4 = 0;
				var _g5 = vcomplex.getVNotes();
				while(_g4 < _g5.length) {
					var vnote = _g5[_g4];
					++_g4;
					var vvoice;
					var this2 = vpart.getVNotesVVoices();
					vvoice = this2.get(vnote);
					var noteComplexIdx = cx.ArrayTools.index(vcomplex.getVNotes(),vnote);
					var beamgroup;
					var this3 = vvoice.getNotesBeamgroups();
					beamgroup = this3.get(vnote);
					var direction = beamgroupsDirections.h[beamgroup.__id__];
					var headsXOffset = vcomplex.getHeadsCollisionOffsetX(vnote) * this.scaling.halfNoteWidth;
					this.heads(colx + headsXOffset,party,vnote,direction);
				}
				var directions;
				var this4 = vpart.getVComplexDirections();
				directions = this4.get(vcomplex);
				var noterects = vcomplex.getNotesRects(directions);
				this.drawRectanglesScaled(this.target.get_graphics(),colx,party,noterects);
				var staverects = vcomplex.getStaveBasicRects(directions);
				this.drawRectanglesScaled(this.target.get_graphics(),colx,party,staverects);
				var signsrects = vcomplex.getSignsRects(noterects);
				this.drawRectanglesScaled(this.target.get_graphics(),colx,party,signsrects);
				var dotrects = vcomplex.getDotsRects(noterects,directions);
				this.drawRectanglesScaled(this.target.get_graphics(),colx,party,dotrects);
			}
			party += this.partdistance;
		}
	}
	,drawVBarVoices: function(vbar) {
		var party = this.defaultY;
		var _g = 0;
		var _g1 = vbar.getVParts();
		while(_g < _g1.length) {
			var vpart = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = vpart.getPartbeamgroups();
			while(_g2 < _g3.length) {
				var beamgroups = _g3[_g2];
				++_g2;
				var vvoiceIdx = cx.ArrayTools.index(vpart.getPartbeamgroups(),beamgroups);
				var _g4 = 0;
				while(_g4 < beamgroups.length) {
					var beamgroup = beamgroups[_g4];
					++_g4;
					var beamgroupIdx = cx.ArrayTools.index(beamgroups,beamgroup);
					var _g5 = 0;
					var _g6 = beamgroup.vnotes;
					while(_g5 < _g6.length) {
						var vnote = _g6[_g5];
						++_g5;
						var vnoteIdx = cx.ArrayTools.index(beamgroup.vnotes,vnote);
						var vcolumn;
						var this1 = vbar.getVNotesVColumns();
						vcolumn = this1.get(vnote);
						var pos;
						var this2 = vbar.getVColumnsPositions();
						pos = this2.get(vcolumn);
						var colx = this.defaultX + pos * nx3.test.DevRenderer.posfactor;
						var textY;
						textY = party + (vvoiceIdx == 0?this.scaling.space * -3:this.scaling.space * 3) - this.scaling.halfSpace;
						this.addText(colx,textY,"" + beamgroupIdx);
					}
				}
			}
			party += this.partdistance;
		}
	}
	,addText: function(x,y,text,color) {
		if(color == null) color = 0;
		var tf = new flash.text.TextField();
		tf.set_defaultTextFormat(new flash.text.TextFormat("Arial",10));
		tf.set_text(text);
		tf.x = x;
		tf.y = y;
		this.target.addChild(tf);
	}
	,heads: function(x,y,vnote,direction,xOffset) {
		if(xOffset == null) xOffset = 0;
		var xmlStr = null;
		var _g = nx3.ENoteValTools.head(vnote.nnote.value);
		switch(_g[1]) {
		case 2:
			xmlStr = nx3.render.svg.Elements.noteWhole;
			break;
		case 1:
			xmlStr = nx3.render.svg.Elements.noteWhite;
			break;
		default:
			xmlStr = nx3.render.svg.Elements.noteBlack;
		}
		var _g1 = 0;
		var _g11 = vnote.getVHeadsRectanglesDir(direction);
		while(_g1 < _g11.length) {
			var rect = _g11[_g1];
			++_g1;
			var shape = nx3.render.svg.ShapeTools.getShape(xmlStr,this.scaling);
			this.drawShape(shape,x,y,rect);
		}
	}
	,drawShape: function(shape,x,y,rect) {
		if(shape == null) return;
		shape.x = x + rect.x * this.scaling.halfNoteWidth + this.scaling.svgX;
		shape.y = y + rect.y * this.scaling.halfSpace + this.scaling.svgY;
		this.target.addChild(shape);
	}
	,drawRectangle: function(graphics,rect,xoffset) {
		if(xoffset == null) xoffset = 0.0;
		graphics.drawRect(rect.x + xoffset,rect.y,rect.width,rect.height);
	}
	,drawRectangles: function(graphics,rects,xoffset) {
		if(xoffset == null) xoffset = 0.0;
		var _g = 0;
		while(_g < rects.length) {
			var rect = rects[_g];
			++_g;
			graphics.drawRect(rect.x + xoffset,rect.y,rect.width,rect.height);
		}
	}
	,drawRectangleScaled: function(graphics,x,y,rect) {
		graphics.drawRect(x + rect.x * this.scaling.halfNoteWidth,y + rect.y * this.scaling.halfSpace,rect.width * this.scaling.halfNoteWidth,rect.height * this.scaling.halfSpace);
	}
	,drawRectanglesScaled: function(graphics,x,y,rects) {
		if(rects == null) return;
		var _g = 0;
		while(_g < rects.length) {
			var rect = rects[_g];
			++_g;
			this.drawRectangleScaled(graphics,x,y,rect);
		}
	}
	,__class__: nx3.test.DevRenderer
});
nx3.xml = {};
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
			xml.set(nx3.xml.HeadXML.XHEAD_TIE,Std.string(head.tie));
			break;
		case 1:
			var levelRight = _g1[4];
			var levelLeft = _g1[3];
			var direction1 = _g1[2];
			xml.set(nx3.xml.HeadXML.XHEAD_TIE,Std.string(head.tie));
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
	var tie = cx.EnumTools.createFromString(nx3.ETie,xml.get(nx3.xml.HeadXML.XHEAD_TIE));
	var tieTo = cx.EnumTools.createFromString(nx3.ETie,xml.get(nx3.xml.HeadXML.XHEAD_TIETO));
	return new nx3.NHead(type,level,sign,tie,tieTo);
};
nx3.xml.HeadXML.test = function(item) {
	var str = nx3.xml.HeadXML.toXml(item).toString();
	var item2 = nx3.xml.HeadXML.fromXmlStr(str);
	var str2 = nx3.xml.HeadXML.toXml(item2).toString();
	haxe.Log.trace(str,{ fileName : "HeadXML.hx", lineNumber : 133, className : "nx3.xml.HeadXML", methodName : "test"});
	haxe.Log.trace(str2,{ fileName : "HeadXML.hx", lineNumber : 134, className : "nx3.xml.HeadXML", methodName : "test"});
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
	if(nx3.ENoteValTools.value(note.value) != nx3.ENoteValTools.value(nx3.ENoteVal.Nv4)) xml.set("value",Std.string(nx3.ENoteValTools.value(note.value)));
	if(note.direction != null) xml.set("direction",Std.string(note.direction));
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
		type = nx3.ENoteType.Pause(0);
		break;
	case "lyric":
		var text = xml.get("text");
		var offsetStr = xml.get("offset");
		var offset = cx.EnumTools.createFromString(nx3.EPosition,offsetStr);
		var continuationStr = xml.get("continuation");
		var continuation = cx.EnumTools.createFromString(nx3.ELyricContinuation,continuationStr);
		var formatStr = xml.get("format");
		var format = cx.EnumTools.createFromString(nx3.ELyricFormat,formatStr);
		type = nx3.ENoteType.Lyric(text,offset,continuation,format);
		break;
	}
	var valStr = xml.get("value");
	var val;
	if(valStr == null) val = nx3.ENoteValTools.value(nx3.ENoteVal.Nv4); else val = Std.parseInt(xml.get("value"));
	var value = nx3.ENoteValTools.getFromValue(val);
	var direction = cx.EnumTools.createFromString(nx3.EDirectionUAD,xml.get("direction"));
	return new nx3.NNote(type,null,value,direction);
};
nx3.xml.NoteXML.test = function(item) {
	var str = nx3.xml.NoteXML.toXml(item).toString();
	var item2 = nx3.xml.NoteXML.fromXmlStr(str);
	var str2 = nx3.xml.NoteXML.toXml(item2).toString();
	haxe.Log.trace(str,{ fileName : "NoteXML.hx", lineNumber : 196, className : "nx3.xml.NoteXML", methodName : "test"});
	haxe.Log.trace(str2,{ fileName : "NoteXML.hx", lineNumber : 197, className : "nx3.xml.NoteXML", methodName : "test"});
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
	bitmapData: null
	,enabled: null
	,font: null
	,sound: null
	,clear: function() {
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
			} else haxe.Log.trace("[openfl.Assets] BitmapData asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 118, className : "openfl.Assets", methodName : "getBitmapData"});
		} else haxe.Log.trace("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 124, className : "openfl.Assets", methodName : "getBitmapData"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 130, className : "openfl.Assets", methodName : "getBitmapData"});
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
			if(library.isLocal(symbolName,openfl.AssetType.BINARY)) return library.getBytes(symbolName); else haxe.Log.trace("[openfl.Assets] String or ByteArray asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 167, className : "openfl.Assets", methodName : "getBytes"});
		} else haxe.Log.trace("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 173, className : "openfl.Assets", methodName : "getBytes"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 179, className : "openfl.Assets", methodName : "getBytes"});
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
			} else haxe.Log.trace("[openfl.Assets] Font asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 230, className : "openfl.Assets", methodName : "getFont"});
		} else haxe.Log.trace("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 236, className : "openfl.Assets", methodName : "getFont"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 242, className : "openfl.Assets", methodName : "getFont"});
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
			if(library.isLocal(symbolName,openfl.AssetType.MOVIE_CLIP)) return library.getMovieClip(symbolName); else haxe.Log.trace("[openfl.Assets] MovieClip asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 292, className : "openfl.Assets", methodName : "getMovieClip"});
		} else haxe.Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 298, className : "openfl.Assets", methodName : "getMovieClip"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 304, className : "openfl.Assets", methodName : "getMovieClip"});
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
			} else haxe.Log.trace("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 361, className : "openfl.Assets", methodName : "getMusic"});
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 367, className : "openfl.Assets", methodName : "getMusic"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 373, className : "openfl.Assets", methodName : "getMusic"});
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
		if(library.exists(symbolName,null)) return library.getPath(symbolName); else haxe.Log.trace("[openfl.Assets] There is no asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 408, className : "openfl.Assets", methodName : "getPath"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 414, className : "openfl.Assets", methodName : "getPath"});
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
			} else haxe.Log.trace("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 471, className : "openfl.Assets", methodName : "getSound"});
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 477, className : "openfl.Assets", methodName : "getSound"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 483, className : "openfl.Assets", methodName : "getSound"});
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
			if(library.isLocal(symbolName,openfl.AssetType.TEXT)) return library.getText(symbolName); else haxe.Log.trace("[openfl.Assets] String asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 520, className : "openfl.Assets", methodName : "getText"});
		} else haxe.Log.trace("[openfl.Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 526, className : "openfl.Assets", methodName : "getText"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 532, className : "openfl.Assets", methodName : "getText"});
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
		} else haxe.Log.trace("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 695, className : "openfl.Assets", methodName : "loadBitmapData"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 701, className : "openfl.Assets", methodName : "loadBitmapData"});
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
		} else haxe.Log.trace("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 731, className : "openfl.Assets", methodName : "loadBytes"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 737, className : "openfl.Assets", methodName : "loadBytes"});
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
		} else haxe.Log.trace("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 788, className : "openfl.Assets", methodName : "loadFont"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 794, className : "openfl.Assets", methodName : "loadFont"});
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
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + name + "\"",{ fileName : "Assets.hx", lineNumber : 824, className : "openfl.Assets", methodName : "loadLibrary"});
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
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 879, className : "openfl.Assets", methodName : "loadMusic"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 885, className : "openfl.Assets", methodName : "loadMusic"});
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
		} else haxe.Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 915, className : "openfl.Assets", methodName : "loadMovieClip"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 921, className : "openfl.Assets", methodName : "loadMovieClip"});
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
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 978, className : "openfl.Assets", methodName : "loadSound"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 984, className : "openfl.Assets", methodName : "loadSound"});
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
		} else haxe.Log.trace("[openfl.Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 1014, className : "openfl.Assets", methodName : "loadText"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 1020, className : "openfl.Assets", methodName : "loadText"});
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
	id: null
	,path: null
	,type: null
	,__class__: openfl.AssetData
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
	__bitmap: null
	,__centerPoints: null
	,__tileRects: null
	,__tileUVs: null
	,addTileRect: function(rectangle,centerPoint) {
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
var tink = {};
tink.macro = {};
tink.macro.tools = {};
tink.macro.tools.MacroTools = function() { };
$hxClasses["tink.macro.tools.MacroTools"] = tink.macro.tools.MacroTools;
tink.macro.tools.MacroTools.__name__ = ["tink","macro","tools","MacroTools"];
tink.macro.tools.MacroTools.tempName = function(c,prefix) {
	if(prefix == null) prefix = "__tinkTmp";
	return prefix + Std.string(tink.macro.tools.MacroTools.idCounter++);
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
ApplicationMain.images = new haxe.ds.StringMap();
ApplicationMain.urlLoaders = new haxe.ds.StringMap();
ApplicationMain.assetsLoaded = 0;
ApplicationMain.total = 0;
DefaultAssetLibrary.className = new haxe.ds.StringMap();
DefaultAssetLibrary.path = new haxe.ds.StringMap();
DefaultAssetLibrary.type = new haxe.ds.StringMap();
cx.EncodeTools.BASE64SEED = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
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
flash.events.TouchEvent.TOUCH_BEGIN = "touchBegin";
flash.events.TouchEvent.TOUCH_END = "touchEnd";
flash.events.TouchEvent.TOUCH_MOVE = "touchMove";
flash.events.TouchEvent.TOUCH_OUT = "touchOut";
flash.events.TouchEvent.TOUCH_OVER = "touchOver";
flash.events.TouchEvent.TOUCH_ROLL_OUT = "touchRollOut";
flash.events.TouchEvent.TOUCH_ROLL_OVER = "touchRollOver";
flash.events.TouchEvent.TOUCH_TAP = "touchTap";
flash.geom.Matrix.__identity = new flash.geom.Matrix();
flash.net.URLRequestMethod.DELETE = "DELETE";
flash.net.URLRequestMethod.GET = "GET";
flash.net.URLRequestMethod.HEAD = "HEAD";
flash.net.URLRequestMethod.OPTIONS = "OPTIONS";
flash.net.URLRequestMethod.POST = "POST";
flash.net.URLRequestMethod.PUT = "PUT";
flash.system.ApplicationDomain.currentDomain = new flash.system.ApplicationDomain(null);
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
flash.ui.Keyboard.ENTER = 13;
flash.ui.Keyboard.SHIFT = 16;
flash.ui.Keyboard.CONTROL = 17;
flash.ui.Keyboard.CAPS_LOCK = 18;
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
format.gfx.GfxBytes.scaleModes = [flash.display.LineScaleMode.NORMAL,flash.display.LineScaleMode.NONE,flash.display.LineScaleMode.VERTICAL,flash.display.LineScaleMode.HORIZONTAL];
format.gfx.GfxBytes.capsStyles = ["round","butt","square"];
format.gfx.GfxBytes.jointStyles = ["round","miter","bevel"];
format.gfx.GfxBytes.spreadMethods = [flash.display.SpreadMethod.PAD,flash.display.SpreadMethod.REPEAT,flash.display.SpreadMethod.REFLECT];
format.gfx.GfxBytes.interpolationMethods = [flash.display.InterpolationMethod.RGB,flash.display.InterpolationMethod.LINEAR_RGB];
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
nx3.Constants.HEAD_HALFWIDTH_NORMAL = 1.6;
nx3.Constants.HEAD_HALFWIDTH_WIDE = 2.0;
nx3.Constants.COMPLEX_COLLISION_CHORD_INTERSECTION = 0.8;
nx3.Constants.COMPLEX_COLLISION_NEXTLINEDELTA = 0.7;
nx3.Constants.COMPLEX_COLLISION_NEXTLINEDELTA_H1 = 0.9;
nx3.Constants.DOT_WIDTH = 3.0;
nx3.Constants.DDOT_WIDTH = 4.0;
nx3.Constants.FLAG_HEIGHT = 4.8;
nx3.Constants.FLAG_WIDTH = 2.6;
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
nx3.VSystemGenerator.defaultClef = nx3.EClef.ClefF;
nx3.VSystemGenerator.defaultKey = nx3.EKey.Flat2;
nx3.VSystemGenerator.defaultTime = nx3.ETime.Time6_4;
nx3.render.scaling.Scaling.MID = { linesWidth : 0.8, space : 12.0, halfSpace : 6.0, noteWidth : 10, halfNoteWidth : 5, quarterNoteWidth : 2.5, signPosWidth : 14.0, svgScale : .27, svgX : 0, svgY : -55.0, fontScaling : 6.0};
nx3.render.scaling.Scaling.NORMAL = { linesWidth : .5, space : 8.0, halfSpace : 4.0, noteWidth : 7.0, halfNoteWidth : 3.5, quarterNoteWidth : 1.75, signPosWidth : 9.5, svgScale : .175, svgX : 0, svgY : -36.0, fontScaling : 4.0};
nx3.render.scaling.Scaling.SMALL = { linesWidth : .5, space : 6.0, halfSpace : 3.0, noteWidth : 5.0, halfNoteWidth : 2.5, quarterNoteWidth : 1.25, signPosWidth : 7.0, svgScale : .14, svgX : 0, svgY : -28.5, fontScaling : 3.0};
nx3.render.scaling.Scaling.BIG = { linesWidth : 1.5, space : 16.0, halfSpace : 8.0, noteWidth : 14.0, halfNoteWidth : 7.0, quarterNoteWidth : 5.5, signPosWidth : 19.0, svgScale : .36, svgX : -0.0, svgY : -74.0, fontScaling : 8.0};
nx3.render.scaling.Scaling.PRINT1 = { linesWidth : 3, space : 32.0, halfSpace : 16.0, noteWidth : 28.0, halfNoteWidth : 14.0, quarterNoteWidth : 11.0, signPosWidth : 38.0, svgScale : .72, svgX : -0.0, svgY : -148.0, fontScaling : 16.0};
nx3.render.svg.Elements.clefG = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\"\r\n\t\t\td=\"m 95.72971,266.7949 c -5.57504,2.79274 -12.48498,4.1891 -20.72511,4.1891 -9.69981,0 -18.99938,-1.66998 -27.91049,-5.00757 -8.90876,-3.33996 -16.75807,-7.86163 -23.54558,-13.56975 -6.78751,-5.70339 -12.24248,-12.38094 -16.36254,-20.03029 -4.12007,-7.64934 -6.1801,-15.78458 -6.1801,-24.40572 0,-29.26234 20.72746,-61.31506 62.18472,-96.1605 -1.3349,-5.34251 -2.33313,-10.74399 -2.99941,-16.209153 -0.66627,-5.460449 -1.00058,-11.107236 -1.00058,-16.938007 0,-8.010226 0.66392,-15.871864 1.99646,-23.582532 1.3302,-7.710668 3.23955,-14.935434 5.72336,-21.674325 2.48617,-6.738864 5.54208,-12.869193 9.17715,-18.393316 3.63272,-5.5265031 7.814,-10.1708424 12.53677,-13.9306366 16.47555,22.8253826 24.71097,44.6247216 24.71097,65.3862176 0,13.480109 -3.18069,26.321 -9.54442,38.522682 -6.36138,12.20404 -16.32959,24.07079 -29.90225,35.60967 l 7.99763,38.42834 c 4.36256,-0.35616 6.78751,-0.53307 7.2725,-0.53307 6.05767,0 11.72453,1.09209 16.99586,3.27863 5.27368,2.18418 9.88109,5.18919 13.82693,9.01269 3.94349,3.82349 7.07003,8.34517 9.37727,13.56502 2.30488,5.21986 3.4585,10.86193 3.46085,16.93329 -0.002,4.36836 -0.78869,8.68011 -2.36374,12.92581 -1.57504,4.25042 -3.814,8.28856 -6.72159,12.10969 -2.90994,3.82586 -6.36373,7.34272 -10.36137,10.55766 -3.99764,3.21965 -8.42141,5.98172 -13.26896,8.28856 0,-0.24294 0.18129,0.45523 0.54385,2.09218 0.36492,1.63932 0.8193,3.79048 1.36315,6.46291 0.5462,2.67008 1.18187,5.64443 1.90935,8.92306 0.72749,3.27626 1.36316,6.43224 1.90936,9.46556 0.5462,3.03568 1.02884,5.73878 1.45497,8.10222 0.42378,2.37052 0.63567,3.97681 0.63567,4.82595 0,5.70576 -1.21248,10.92561 -3.63508,15.65957 -2.42495,4.73396 -5.69746,8.80041 -9.81988,12.19933 -4.12006,3.39656 -8.90875,6.03833 -14.36136,7.9206 -5.45497,1.88226 -11.21364,2.82339 -17.27602,2.82339 -4.60506,0 -8.90641,-0.72885 -12.90875,-2.18654 -4,-1.45769 -7.515,-3.52157 -10.54502,-6.18929 -3.02765,-2.67244 -5.422,-5.91568 -7.18068,-9.73918 -1.75632,-3.82113 -2.63449,-8.03853 -2.63449,-12.64984 0,-3.27862 0.54621,-6.37563 1.63626,-9.2863 1.09005,-2.91066 2.60623,-5.39912 4.54384,-7.463 1.93996,-2.06389 4.3037,-3.7032 7.09122,-4.91323 2.78987,-1.21474 5.81989,-1.82329 9.09004,-1.82329 2.90994,0 5.63625,0.66988 8.18127,2.00492 2.54502,1.33503 4.72748,3.06634 6.54502,5.18919 1.81754,2.12521 3.27251,4.5547 4.36491,7.2861 1.09005,2.72905 1.63626,5.49111 1.63626,8.28384 0,6.31431 -2.33314,11.4752 -7.00176,15.48267 -4.66627,4.00512 -10.51205,6.37328 -17.54441,7.09976 5.57504,2.79509 11.329,4.19146 17.2666,4.1891 4.8452,0.002 9.57268,-0.87745 14.17773,-2.64177 4.6027,-1.75961 8.62859,-4.12777 12.08474,-7.10212 3.45379,-2.97436 6.24131,-6.43932 8.3602,-10.38547 2.11889,-3.94614 3.18069,-8.16354 3.18069,-12.65692 0,-1.70299 -0.18365,-3.58526 -0.54385,-5.64914 L 95.72971,266.7949 z M 95.18821,27.488123 c -1.21483,-0.243068 -2.30724,-0.365597 -3.27486,-0.365597 -3.75986,0 -7.24661,1.912917 -10.46026,5.738777 -3.21365,3.823478 -6.00352,8.80275 -8.36726,14.933079 -2.36374,6.132684 -4.21188,13.022518 -5.54914,20.671856 -1.33254,7.649365 -2.00117,15.298698 -2.00117,22.948042 0,3.158334 0.12478,6.194011 0.36492,9.10704 0.24485,2.91538 0.67333,5.70811 1.2831,8.37819 24.73216,-21.976242 37.09942,-41.768292 37.09942,-59.373819 0,-8.378205 -3.03237,-15.723276 -9.09475,-22.037568 z m 3.814,231.850857 c 5.94467,-4.37072 10.46026,-9.16837 13.55619,-14.39058 3.09123,-5.21986 4.63802,-10.86429 4.63802,-16.93801 0,-3.76216 -0.63802,-7.4347 -1.91171,-11.01996 -1.27134,-3.57818 -3.08887,-6.76718 -5.45497,-9.56227 -2.36609,-2.78801 -5.18657,-5.03588 -8.46143,-6.7318 -3.27486,-1.69828 -6.85108,-2.54506 -10.72865,-2.54506 -0.24249,0 -0.72749,0.0307 -1.45497,0.0873 -0.72513,0.0613 -1.75633,0.15097 -3.08887,0.2689 l 12.90639,60.83151 z M 81.56374,199.26225 c -3.75749,0.48354 -7.2725,1.42468 -10.545,2.82104 -3.27251,1.39637 -6.08828,3.12767 -8.45202,5.19155 -2.36374,2.06389 -4.24249,4.43205 -5.63625,7.10212 -1.39376,2.67244 -2.09064,5.58546 -2.09064,8.7438 0,9.34762 4.96527,17.11962 14.88874,23.31127 -8.24013,-1.33503 -14.84636,-4.52167 -19.81634,-9.56227 -4.96997,-5.03823 -7.45378,-11.38084 -7.45378,-19.03255 0,-4.49101 0.93937,-8.83106 2.81812,-13.02016 1.87875,-4.18909 4.39317,-7.95598 7.54325,-11.30065 3.15479,-3.34703 6.85108,-6.23647 11.09121,-8.66595 4.24249,-2.43421 8.72748,-4.13721 13.45261,-5.10664 l -7.63507,-36.42579 c -17.08768,12.86684 -30.02468,25.49546 -38.81101,37.88112 -8.78633,12.38567 -13.1795,24.64868 -13.1795,36.79139 0,6.67755 1.48322,12.99421 4.45438,18.94292 2.97115,5.95106 6.9735,11.14026 12.00469,15.5723 5.03119,4.4344 10.85107,7.92531 17.45966,10.47274 6.60623,2.55214 13.60563,3.82821 20.9982,3.82821 4.24249,0 8.18127,-0.39627 11.81634,-1.18408 3.63743,-0.79017 7.03001,-2.03558 10.1801,-3.73386 L 81.56374,199.26225 z\" />\r\n\t\t</g></svg>";
nx3.render.svg.Elements.clefC = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\"\r\n\t\t\td=\"M 90,276 C 86,276 81,275 77,274 73,273 70,271 67,268 64,266 61,263 60,260 58,256 57,253 57,249 57,247 57,245 58,243 59,241 60,239 61,238 63,236 64,235 66,234 68,233 70,232 72,232 74,232 76,233 77,233 79,234 81,236 82,237 84,238 85,240 86,242 87,244 87,246 87,248 87,250 86,252 85,253 84,255 82,256 80,258 79,259 77,260 76,261 75,262 74,262 74,263 74,267 79,269 88,269 92,269 96,268 98,267 101,266 103,264 105,261 107,258 108,255 109,250 110,245 110,239 110,232 110,228 110,224 109,220 108,216 107,212 105,210 104,207 102,204 100,203 98,201 96,200 93,200 84,200 76,207 67,222 66,217 65,213 64,209 63,205 62,201 60,199 59,196 57,193 55,192 53,190 52,189 49,189 48,189 47,189 46,190 L 46,275 39,275 39,93 46,93 46,179 C 46,179 47,179 47,179 48,180 48,180 49,180 51,180 53,179 55,177 57,175 59,173 60,170 62,167 63,163 64,159 65,155 66,151 67,147 77,160 86,166 92,166 94,166 97,165 99,164 101,162 103,160 104,157 106,155 107,151 108,148 109,144 109,140 109,135 109,128 109,122 108,117 107,113 106,109 104,107 102,104 99,102 96,101 93,100 89,100 84,100 75,100 71,102 71,105 71,106 73,107 75,108 80,110 83,112 85,114 86,116 87,118 87,121 87,123 87,124 86,126 85,128 84,130 83,131 81,133 80,134 78,135 76,136 74,137 72,137 68,137 64,135 61,132 58,129 56,125 56,120 56,114 58,108 62,102 66,98 70,95 74,94 79,93 83,92 88,92 95,92 101,93 106,95 112,96 116,99 120,102 124,105 127,110 129,114 131,119 132,125 132,131 132,136 131,142 129,147 128,152 125,157 122,161 119,165 116,168 112,170 108,173 103,174 98,174 89,174 81,172 76,169 L 76,169 C 74,169 72,170 71,173 70,175 69,178 69,182 69,184 69,186 69,188 70,191 70,193 71,194 72,196 72,197 73,198 74,199 75,200 76,200 79,197 82,194 86,193 89,191 93,190 97,190 102,190 107,191 111,194 116,196 120,200 123,204 126,209 129,214 130,219 132,225 133,231 133,237 133,250 129,259 122,266 114,273 104,276 90,276 Z M 27,93 L 27,275 4,275 4,93 27,93 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.clefF = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\"\r\n\t\t\td=\"M 8,240 C 21,236 32,230 39,224 45,218 51,211 57,204 62,197 67,190 70,183 74,176 77,168 79,161 81,153 82,146 82,139 82,133 81,127 80,122 78,118 76,113 73,110 70,106 66,103 62,101 58,99 53,98 48,98 44,98 41,99 37,100 33,101 30,103 27,106 24,108 22,111 20,114 18,117 17,120 17,123 17,125 17,126 18,126 18,126 18,126 19,125 20,125 20,124 22,123 23,123 24,122 26,122 27,121 29,121 31,121 33,121 35,121 36,122 38,123 40,124 41,126 42,127 43,129 44,131 45,133 45,135 45,137 45,143 43,147 40,151 36,155 32,157 26,157 23,157 20,156 18,155 16,154 14,152 12,149 10,147 9,144 8,141 7,138 7,134 7,131 7,126 8,121 11,116 13,111 16,107 21,104 25,101 29,98 35,96 40,94 46,93 52,93 62,93 71,95 78,98 85,101 91,105 95,111 99,116 102,122 104,128 105,134 106,140 106,147 106,150 106,154 105,157 105,161 104,164 102,168 101,172 99,176 97,180 94,185 91,190 88,195 84,202 78,209 71,215 64,221 57,226 50,230 43,235 36,238 29,240 23,243 18,244 14,244 10,244 8,243 8,240 Z M 121,116 C 121,113 122,111 124,110 125,108 127,107 130,107 133,107 135,108 136,110 138,111 139,113 139,116 139,119 138,121 136,122 135,124 133,125 130,125 127,125 125,124 124,122 122,121 121,119 121,116 Z M 121,162 C 121,159 122,157 124,156 125,154 127,153 130,153 133,153 135,154 136,156 138,157 139,159 139,162 139,165 138,167 136,168 135,170 133,171 130,171 127,171 125,170 124,168 122,167 121,165 121,162 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.HVT4 = nx3.render.svg.Elements.noteBlack;
nx3.render.svg.Elements.noteBlack = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\"\r\n\t\t\td = \"m 20.557649,250.57631 c -5.81753,-0.002 -10.6650905,-1.36806 -14.5450105,-4.0971 -3.87756,-2.73612 -5.81516995,-6.6516 -5.81516995,-11.74881 0,-4.12777 1.30193995,-8.10458 3.90816995,-11.92807 2.60387,-3.82585 5.9069905,-7.19411 9.9070005,-10.1095 3.99998,-2.91302 8.452014,-5.24816 13.360774,-7.01013 4.90876,-1.7596 9.66448,-2.63941 14.2719,-2.63941 6.1801,0 11.17834,1.42467 14.99703,4.27637 3.81636,2.85406 5.72572,6.70821 5.72572,11.56483 0,4.00747 -1.30195,7.92295 -3.90817,11.7488 -2.60623,3.8235 -5.93761,7.19412 -9.99882,10.10714 -4.05885,2.91303 -8.54382,5.27883 -13.45258,7.10448 -4.90878,1.81858 -9.72573,2.72905 -14.450844,2.7314 z\" />\r\n\t\t</g></svg>";
nx3.render.svg.Elements.HVT2 = nx3.render.svg.Elements.noteWhite;
nx3.render.svg.Elements.noteWhite = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\"\r\n\t\t\td=\"m -0.01820308,235.29885 c 0,-4.12777 1.15125988,-8.19421 3.45376988,-12.20168 2.30253,-4.00747 5.3325496,-7.55735 9.0900592,-10.65436 3.7575,-3.09701 7.96936,-5.58546 12.63565,-7.46772 4.66627,-1.88227 9.30428,-2.8234 13.90934,-2.8234 7.63741,0 13.69743,1.60865 18.18243,4.82831 4.48262,3.2173 6.72393,7.73898 6.72863,13.56739 -0.005,4.25042 -1.21482,8.25553 -3.63977,12.02006 -2.4226,3.76452 -5.57504,7.04315 -9.4526,9.83588 -3.87756,2.79037 -8.30134,5.00522 -13.27367,6.64689 -4.96763,1.63695 -10.06001,2.45779 -15.27249,2.46015 -6.18245,-0.002 -11.45615,-1.42939 -15.8186992,-4.28109 -4.36254,-2.85641 -6.54264988,-6.83322 -6.54264988,-11.93043 z M 49.439026,207.62158 c -1.93759,0 -4.39551,0.48589 -7.3643,1.45769 -2.97117,0.96944 -6.15186,2.2455 -9.54915,3.82113 -3.39257,1.57799 -6.75924,3.39893 -10.09297,5.46517 -3.33606,2.06388 -6.36843,4.18438 -9.09475,6.37091 -2.731,2.18182 -4.9417295,4.39902 -6.6391792,6.64453 -1.69512,2.24787 -2.54502,4.28109 -2.54738,6.10202 0.002,5.7034 3.4561299,8.55746 10.3684392,8.55746 3.27486,0 7.45849,-1.06143 12.55087,-3.18664 5.09241,-2.12285 10.0624,-4.73396 14.91464,-7.82861 4.84756,-3.097 9.03119,-6.34497 12.54619,-9.74153 3.51735,-3.40128 5.27603,-6.4346 5.27603,-9.10468 0,-5.7034 -3.45377,-8.55745 -10.36844,-8.55745 z\" />\r\n\t\t</g></svg>";
nx3.render.svg.Elements.HVT1 = nx3.render.svg.Elements.noteWhole;
nx3.render.svg.Elements.noteWhole = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\"\r\n\t\t\td=\"m 0.14197458,226.9183 c 0,-3.64187 1.21011002,-6.97946 3.63271012,-10.01514 2.4226,-3.03568 5.66217,-5.64679 9.7233503,-7.83569 4.0565,-2.18182 8.692204,-3.85179 13.899944,-5.00757 5.21012,-1.15106 10.54031,-1.72894 15.99057,-1.7313 5.09006,0.002 10.08827,0.64157 14.99232,1.91292 4.9064,1.27843 9.32782,3.00738 13.26661,5.19156 3.93643,2.18653 7.11712,4.76698 9.54208,7.74133 2.42025,2.97671 3.63271,6.22468 3.63271,9.74389 0,3.88718 -1.0312,7.34743 -3.08885,10.38311 -2.06004,3.03568 -4.99825,5.58546 -8.81461,7.64935 -3.81636,2.06388 -8.38843,3.67253 -13.71862,4.8283 -5.33019,1.15106 -11.26544,1.72895 -17.8081,1.73131 -5.81517,-0.002 -11.23482,-0.58025 -16.26603,-1.73131 -5.026479,-1.15577 -9.389044,-2.79508 -13.082984,-4.9203 -3.6962903,-2.12521 -6.6015203,-4.70565 -8.7204103,-7.73897 -2.1212401,-3.03568 -3.18069012,-6.43696 -3.18069012,-10.20149 z m 65.06407442,9.28158 c 0,-4.00511 -1.39376,-8.80276 -4.18363,-14.38822 -1.33254,-2.67007 -2.75691,-5.00757 -4.27074,-7.01248 -1.51618,-2.00256 -3.18305,-3.61121 -5.00057,-4.82595 -1.81754,-1.21239 -3.90817,-2.12522 -6.27193,-2.73141 -2.36373,-0.60619 -5.06179,-0.91047 -8.09181,-0.91047 -11.63506,0 -17.452602,4.675 -17.452602,14.02498 0,3.51922 0.696896,6.88984 2.090662,10.10714 1.39376,3.2173 3.24189,6.10202 5.54443,8.6518 2.30253,2.54978 4.84756,4.583 7.63508,6.09966 2.78751,1.51902 5.63859,2.27853 8.54853,2.27853 2.6651,0 5.17951,-0.12266 7.54324,-0.3656 2.36376,-0.24296 4.485,-0.72885 6.36375,-1.45769 1.8811,-0.72649 3.48674,-1.8516 4.81694,-3.36826 1.33489,-1.51666 2.24367,-3.55224 2.72865,-6.10203 z\" />\r\n\t\t</g></svg>";
nx3.render.svg.Elements.signNatural = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;display:inline\"\r\n\t\t\td=\"m 27.763524,289.1105 0,-36.43051 -27.82574358,9.65191 0,-97.8116 4.52499988,0 0.0183,36.60977 27.8092637,-9.83589 0,97.81632 -4.52736,0 z m -23.3007437,-42.80378 23.3007437,-8.38055 -0.0157,-30.60209 -23.2842537,8.55981 0,30.42283 z\" />\t\r\n\t\t</g></svg>";
nx3.render.svg.Elements.signSharp = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;display:inline\"\r\n\t\t\td=\"m 31.526296,208.23455 -17.48556,5.8284 0.0157,31.51021 17.46908,-5.82841 0,-31.5102 z m 4.52736,-43.89588 0.0131,26.0474 9.44083,-3.09464 0,16.5724 -9.4526,3.097 0,31.50785 9.4526,-3.09701 0,16.57476 -9.4526,3.09701 0,28.59482 -4.52736,0 0,-27.32111 -17.48556,5.82841 0,27.31875 -4.52736,0 0,-26.04268 -9.4526,3.09464 0,-16.57239 9.4526,-3.09701 -0.0131,-31.50785 -9.43847,3.09465 0,-16.5724 9.4526,-3.09701 0,-28.59482 4.52736,0 0.0157,27.32111 17.46908,-5.82841 0,-27.32347 4.52736,0 z\" />\t\r\n\t\t</g></svg>";
nx3.render.svg.Elements.signFlat = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;display:inline\"\r\n\t\t\t\td=\"m 0.119631,150.69109 5.81283,0 -1.25721,57.37598 c 3.63742,-5.96993 9.26898,-8.95607 16.901689,-8.95371 2.66507,-0.002 5.23835,0.45287 7.72451,1.3657 2.48383,0.91046 4.63332,2.15823 6.45084,3.73622 1.8152,1.58034 3.27018,3.46025 4.36022,5.64914 1.09004,2.18654 1.63625,4.55234 1.63625,7.10684 -0.24254,3.52158 -1.54679,7.44178 -3.90817,11.75353 -2.36373,4.3141 -6.39435,8.53622 -12.08944,12.66399 l -25.631519,18.95235 0,-109.65004 z m 16.901689,55.71308 c -5.082969,0 -8.960559,2.55214 -11.620919,7.65407 -0.71102,6.92521 -1.06652,12.87863 -1.06652,17.86026 0,8.62586 0.29665,14.63825 0.88758,18.03953 2.30253,-1.45769 4.75337,-3.61121 7.35491,-6.46763 2.603867,-2.85641 4.991139,-5.89445 7.171249,-9.11175 2.17775,-3.21966 3.96469,-6.43696 5.35609,-9.65898 1.39141,-3.21966 2.08592,-6.04541 2.08827,-8.47254 -0.002,-2.79509 -0.96997,-5.13494 -2.90523,-7.0172 -1.93762,-1.88463 -4.35784,-2.82576 -7.26543,-2.82576 z\" />\r\n\t\t</g></svg>";
nx3.render.svg.Elements.flagDown8 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 10,227 C 12,227 14,227 15,227 16,227 17,226 19,226 20,225 22,224 23,223 25,222 27,220 30,218 39,211 44,206 46,205 54,195 58,185 58,174 58,166 55,156 48,144 48,143 47,142 47,141 47,140 48,139 48,139 49,139 50,140 52,142 53,144 55,146 56,149 57,152 59,155 60,158 61,161 62,164 62,166 63,171 64,176 64,181 64,186 63,190 61,195 60,200 57,204 54,209 50,213 47,216 43,220 39,224 36,228 33,232 29,237 25,243 22,249 18,255 15,262 13,269 12,269 12,270 12,271 12,271 12,272 13,272 13,273 12,273 10,273 L 10,227 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.flagUp8 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 12,181 C 14,181 15,181 14,181 14,181 14,182 14,182 14,183 14,184 14,184 20,199 27,211 35,221 45,234 50,241 52,243 56,250 58,258 58,266 L 58,267 C 58,273 58,278 57,282 56,287 55,291 53,294 52,297 51,299 50,301 48,302 48,303 47,303 46,303 46,303 46,302 46,301 46,300 47,298 48,295 49,293 50,291 50,290 51,288 51,286 51,284 52,282 52,280 52,277 52,274 52,270 L 52,269 C 52,256 45,245 30,234 28,233 27,232 26,231 25,230 24,230 22,229 21,228 20,228 18,227 16,227 14,227 12,227 L 12,181 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.flagDown16 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 65,152 C 65,157 64,162 63,165 65,169 66,175 66,181 66,186 65,191 64,196 62,200 59,205 56,209 52,213 49,217 45,221 42,224 38,228 35,232 31,238 27,243 23,250 20,256 17,262 15,269 15,269 15,270 15,271 15,271 15,272 15,272 15,273 14,273 12,273 L 12,192 C 16,192 20,192 24,190 28,188 32,186 36,183 39,181 42,178 45,176 47,174 49,172 50,171 55,165 58,158 58,150 58,143 56,135 53,127 52,125 51,124 51,123 51,122 52,122 53,122 55,122 56,123 58,126 59,129 60,132 61,136 62,139 63,143 64,146 65,149 65,151 65,152 Z M 60,179 C 60,178 60,177 60,177 60,176 60,175 60,174 59,175 58,177 55,180 53,182 50,185 47,187 45,190 42,192 40,194 37,196 36,198 35,199 29,207 23,216 19,226 20,225 22,225 24,224 26,222 28,221 30,219 36,214 41,210 44,207 48,204 50,202 50,202 57,195 60,187 60,179 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.flagUp16 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 52,321 C 51,321 50,321 50,320 50,319 51,318 51,316 51,314 52,312 52,310 53,308 53,305 53,303 54,301 54,299 54,297 54,295 54,293 53,291 52,290 51,288 50,286 48,284 46,281 43,279 40,276 36,273 31,269 28,268 27,266 25,265 23,264 22,263 21,263 20,262 19,262 17,262 16,262 15,262 13,262 L 13,181 14,181 C 14,181 15,181 15,182 15,182 15,183 16,184 19,196 26,208 36,221 39,225 41,228 45,232 48,235 51,239 53,242 56,246 58,250 59,255 60,259 61,264 61,269 61,275 60,281 58,285 59,286 59,288 59,290 60,292 60,295 60,298 L 60,298 C 60,300 60,302 59,305 59,307 58,310 57,312 56,315 56,317 55,318 54,320 53,321 52,321 Z M 55,272 C 55,263 53,256 48,250 48,250 46,249 44,247 42,245 40,242 37,240 34,237 31,235 28,233 24,230 22,229 19,228 22,233 24,238 27,243 30,247 32,252 36,255 36,256 37,257 39,259 41,260 43,262 45,264 47,267 49,269 51,271 53,273 54,275 55,277 55,276 55,275 55,274 55,273 55,272 55,272 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.pauseNv4 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\"\r\n\t\t\td=\"M 54,263 C 49,261 43,260 38,260 34,260 30,261 27,263 24,266 22,269 22,273 22,280 26,287 34,294 33,295 33,295 32,295 31,295 29,294 26,292 23,291 20,288 17,285 14,283 12,280 9,276 7,273 6,269 6,266 6,264 6,261 7,258 8,256 9,254 11,252 12,250 14,248 17,247 19,246 21,245 24,245 28,245 31,246 35,248 34,246 32,244 30,241 29,239 27,237 24,234 22,231 20,228 17,225 14,221 11,217 7,213 20,201 26,191 26,181 26,179 25,176 24,173 23,170 21,167 19,165 18,162 16,160 15,158 13,156 13,155 13,155 13,154 14,153 16,153 L 48,198 C 37,212 31,222 31,228 31,231 32,233 34,236 35,239 37,242 40,245 42,248 45,251 47,254 50,257 52,260 54,263 Z\" />\r\n\t\t</g></svg>";
nx3.render.svg.Elements.pauseNv8 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\"\r\n\t\t\td=\"M 30,273 L 22,273 52,208 C 42,211 34,213 28,213 17,213 11,208 11,199 11,197 12,194 15,193 18,191 21,190 24,190 31,190 34,193 34,199 34,202 33,205 31,209 32,209 32,209 34,209 42,209 50,205 60,197 L 30,273 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.pauseNv16 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\"\r\n\t\t\td=\"M 26,314 L 18,314 44,253 C 37,256 30,258 23,258 12,258 6,254 6,245 6,242 8,240 10,238 13,236 16,235 20,235 27,235 30,238 30,244 30,246 29,249 27,253 28,253 29,253 29,253 30,253 31,253 31,253 34,253 39,252 46,249 L 65,207 C 57,210 49,212 42,212 31,212 25,208 25,200 25,197 26,194 29,192 31,190 34,189 38,189 44,189 48,192 48,198 48,201 47,204 45,208 46,208 47,208 48,208 53,208 62,204 73,196 L 26,314 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.time0 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 81,227 C 81,232 80,238 78,243 76,248 74,252 70,256 67,260 63,263 59,265 54,268 50,269 45,269 40,269 35,268 30,265 26,263 22,260 19,256 16,252 13,247 11,242 9,237 8,232 8,227 8,222 9,216 11,211 13,206 16,202 19,197 22,193 26,190 30,188 35,185 40,184 45,184 49,184 54,185 58,188 63,190 67,193 70,197 73,201 76,206 78,211 80,216 81,221 81,227 Z M 58,229 C 58,202 54,189 45,189 36,189 31,202 31,227 31,252 36,264 45,264 54,264 58,252 58,229 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.time1 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 10,269 C 10,266 11,264 13,264 16,263 18,262 19,261 20,259 20,257 20,253 L 20,215 C 20,211 20,208 19,207 19,207 18,208 17,210 16,211 15,212 13,214 12,216 11,217 9,219 8,220 8,221 7,221 7,221 6,221 5,221 14,203 19,191 20,184 21,184 23,185 25,185 26,185 29,185 31,185 37,185 41,185 43,184 L 43,253 C 43,257 44,259 45,261 46,262 47,262 48,263 50,263 51,264 52,264 53,265 54,266 54,269 L 10,269 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.time2 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 76,239 C 75,260 68,271 55,271 53,271 51,270 48,269 45,268 41,267 38,266 35,265 32,263 29,262 26,261 24,261 23,261 21,261 19,261 18,262 17,263 16,263 15,264 14,265 13,266 12,267 11,267 10,268 9,268 8,268 7,267 7,267 7,263 8,259 10,257 12,255 13,252 15,250 18,245 23,240 29,236 34,232 38,229 40,227 43,225 45,223 47,221 48,219 49,217 49,215 50,213 50,211 50,209 50,204 49,199 46,196 43,193 39,191 34,191 28,191 24,193 22,196 24,197 27,199 29,201 31,203 32,205 32,208 32,210 32,211 31,213 30,214 29,215 28,216 27,217 25,218 24,219 22,219 21,220 19,220 12,220 8,216 8,208 8,200 11,194 17,189 23,185 31,183 42,183 48,183 54,184 58,186 62,188 65,190 68,192 70,195 72,198 73,201 74,204 74,206 74,208 74,214 72,219 68,223 67,224 64,225 61,227 57,229 53,231 49,233 44,235 40,237 36,239 32,241 29,243 27,245 L 27,245 C 27,245 28,245 29,245 29,245 30,245 31,245 33,245 35,245 38,246 41,247 44,247 48,248 51,249 54,250 56,251 59,252 61,252 62,252 65,252 68,251 69,249 69,249 70,248 71,246 71,244 73,242 76,239 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.time3 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 70,245 C 70,253 67,260 61,264 56,268 48,270 37,270 33,270 29,270 25,269 21,268 18,267 15,265 12,263 10,261 8,259 7,257 6,254 6,251 6,248 7,245 10,243 12,241 15,240 18,240 21,240 24,241 26,243 28,245 29,247 29,250 29,255 27,259 24,262 26,264 30,265 35,265 39,265 43,263 45,260 48,257 49,253 49,249 49,243 48,239 46,237 44,234 41,232 37,231 33,231 30,231 28,230 25,230 24,229 24,228 24,227 24,225 24,225 24,224 25,223 25,223 26,223 27,223 28,223 29,223 30,222 32,222 37,222 41,220 44,218 47,216 48,212 48,206 48,195 43,189 32,189 28,189 25,190 23,192 25,194 26,196 28,198 29,200 30,202 30,205 30,208 29,211 27,212 24,214 22,215 19,215 15,215 13,214 10,212 8,210 7,207 7,203 7,197 10,192 15,189 21,186 28,184 37,184 46,184 54,186 60,190 65,194 68,199 68,207 68,211 67,215 64,219 61,222 58,225 53,226 L 54,227 C 58,228 62,230 65,233 68,236 70,240 70,245 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.time4 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 66,250 L 66,255 C 66,256 66,256 66,257 66,257 66,258 66,258 66,260 67,262 68,262 69,263 72,264 76,264 L 77,269 32,269 32,264 C 38,264 41,262 42,261 43,260 43,256 43,250 L 6,250 6,243 C 8,239 11,235 14,230 16,225 19,220 21,215 23,209 25,204 26,199 28,193 29,189 29,184 L 60,184 C 58,192 52,202 41,213 28,226 21,235 18,242 L 43,242 43,221 66,201 66,242 78,242 78,250 66,250 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.time5 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 4,249 C 4,245 5,242 8,239 10,236 13,235 16,235 25,235 29,239 29,247 29,248 29,250 28,251 27,253 27,254 26,255 25,256 24,258 24,258 23,259 22,260 22,260 24,263 28,264 32,264 43,264 48,256 48,241 48,234 47,230 44,226 42,222 38,220 33,220 29,220 24,222 18,225 17,225 17,225 17,226 17,226 16,226 16,226 16,227 15,227 14,227 13,227 11,227 9,228 9,223 10,217 10,209 11,202 11,193 12,183 20,185 31,186 44,186 52,186 61,185 69,184 68,197 56,204 34,204 34,204 32,204 31,204 30,204 28,204 27,204 25,203 23,203 22,203 21,203 20,203 19,203 19,203 18,204 18,205 18,206 18,207 18,209 18,210 17,212 17,213 17,215 17,217 17,218 24,215 31,213 39,213 43,213 47,214 51,215 56,216 59,218 62,220 65,223 68,226 69,229 71,232 72,236 72,240 72,245 71,249 69,252 67,256 65,259 62,261 58,264 55,266 50,267 46,268 41,269 36,269 31,269 26,268 23,267 19,266 15,265 13,263 10,261 8,259 6,256 5,254 4,251 4,249 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.time6 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 74,241 C 74,245 73,249 72,253 70,257 68,260 65,262 62,265 59,267 55,268 51,269 46,270 42,270 30,270 21,266 15,259 9,251 6,240 6,227 6,221 7,215 9,210 10,204 13,200 16,196 19,192 23,189 27,186 31,184 36,183 41,183 46,183 49,183 53,184 57,185 60,186 63,188 66,189 68,191 69,193 71,196 72,198 72,201 72,204 71,207 68,210 66,212 63,213 59,213 55,213 52,212 50,209 47,207 46,204 46,201 46,200 46,198 47,196 48,195 48,193 48,192 48,189 46,188 42,188 40,188 38,189 36,190 34,192 33,194 32,196 31,198 30,201 29,204 28,207 28,211 28,214 28,214 28,215 28,217 28,219 28,221 28,223 35,220 43,218 50,218 57,218 63,220 67,224 72,228 74,234 74,241 Z M 43,226 C 34,226 29,232 29,245 29,258 33,264 41,264 49,264 53,258 53,245 53,232 50,226 43,226 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.time7 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 77,188 C 77,194 72,207 63,227 54,245 50,259 50,269 L 50,271 C 47,270 42,270 34,270 32,270 29,270 27,270 25,270 24,271 22,271 23,257 32,242 49,225 55,219 59,214 61,209 56,212 50,213 45,213 44,213 41,213 39,212 36,211 34,210 31,209 28,208 26,207 23,206 21,206 20,205 19,205 18,205 16,207 15,209 14,212 13,214 12,217 10,215 9,213 8,211 L 8,203 C 8,203 8,201 8,200 8,198 8,197 8,195 L 8,186 C 14,188 17,190 17,190 18,190 18,189 20,189 21,188 23,187 25,186 26,185 28,185 30,184 32,183 34,183 36,183 38,183 40,184 42,185 45,186 48,188 50,190 53,192 55,193 57,195 59,196 61,197 62,197 67,197 71,193 72,187 L 74,187 C 76,187 77,187 77,188 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.time8 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 75,244 C 75,248 74,251 72,255 71,258 68,260 65,263 62,265 58,267 54,268 50,269 46,270 42,270 37,270 32,269 28,268 24,267 21,266 18,264 15,262 12,259 11,256 9,253 8,250 8,246 8,242 9,238 12,234 14,231 18,229 22,227 14,223 10,216 10,207 10,203 11,200 12,197 14,195 16,192 19,190 21,188 25,187 28,186 32,185 36,184 40,184 50,184 58,186 64,189 70,193 73,198 73,204 73,213 69,219 61,225 70,229 75,235 75,244 Z M 60,203 C 60,198 58,195 55,192 52,190 47,189 41,189 31,189 26,193 26,200 26,208 34,214 50,219 57,215 60,210 60,203 L 60,203 Z M 58,252 C 58,249 57,247 56,246 54,244 52,242 49,240 47,239 44,237 40,235 37,234 33,232 30,231 23,234 20,240 20,246 20,251 22,256 26,259 30,262 35,263 41,263 45,263 49,262 53,260 56,258 58,255 58,252 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.time9 = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 4,212 C 4,202 7,195 13,190 20,185 28,183 39,183 50,183 58,187 64,195 70,203 73,213 73,227 73,233 72,238 70,244 68,249 66,253 63,257 59,261 55,264 51,267 46,269 41,270 36,270 32,270 29,270 25,269 22,268 19,267 16,265 14,263 11,262 10,259 8,257 7,255 7,252 7,249 8,246 11,244 13,241 15,240 19,240 23,240 26,241 28,244 30,246 31,249 31,253 31,254 31,255 30,257 30,259 29,260 29,261 29,264 31,265 35,265 45,265 50,254 50,232 L 50,229 C 42,233 35,235 29,235 21,235 15,233 11,229 6,225 4,219 4,212 Z M 38,189 C 34,189 30,191 28,195 25,198 24,203 24,209 24,214 25,218 27,222 29,225 32,227 36,227 45,227 50,221 50,209 50,203 49,199 47,195 45,191 42,189 38,189 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.timeCommon = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 78,247 C 77,250 76,253 74,255 72,258 70,261 67,263 64,265 61,267 58,268 55,269 52,270 49,270 43,270 37,269 32,267 27,264 23,261 19,257 16,253 13,248 11,243 9,238 8,232 8,226 8,220 9,214 11,209 13,204 15,199 19,196 22,192 26,189 31,187 36,185 42,184 48,184 51,184 55,184 59,185 62,186 66,187 68,189 71,190 73,192 75,194 76,197 77,199 77,202 77,205 76,208 73,210 71,212 68,213 65,213 62,213 59,212 56,210 53,208 52,205 52,202 52,198 54,193 59,189 56,189 54,189 52,189 48,189 45,190 42,192 39,193 36,196 34,199 32,202 31,205 30,210 29,214 28,218 28,224 28,229 29,234 30,239 31,244 33,248 35,252 37,256 39,259 42,261 45,264 48,265 52,265 60,265 69,259 78,247 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.timeAllabreve = "<svg><g><path style=\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none\" \r\n\t\t\td=\"M 39,191 C 30,197 26,207 26,223 26,227 26,230 27,234 28,238 29,241 30,245 31,248 32,251 34,254 35,257 37,259 39,261 L 39,191 Z M 74,247 C 73,250 72,253 70,256 68,259 66,261 63,263 61,265 58,267 55,268 52,270 49,270 46,270 L 45,270 45,284 39,284 39,270 C 34,269 29,267 25,264 21,262 18,259 15,255 12,251 10,246 8,241 7,236 6,231 6,225 6,220 7,215 8,210 10,205 12,201 15,198 18,194 21,191 25,188 29,186 34,185 39,184 L 39,171 45,171 45,184 C 49,184 52,184 56,185 59,186 63,187 65,189 68,191 70,192 72,195 73,197 74,199 74,202 74,205 73,207 70,210 68,212 65,213 62,213 59,213 56,212 53,210 50,208 49,205 49,202 49,198 51,193 56,189 55,189 54,189 52,189 51,188 50,188 49,188 48,188 48,188 47,188 46,188 46,188 45,189 L 45,265 C 46,265 48,265 49,265 57,265 66,259 74,247 Z\"/>\r\n\t\t</g></svg>";
nx3.render.svg.Elements.tplCircle = "<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#FFFFFFF\"><path d=\"M 93,253 C 78,253 66,250 53,242 41,235 32,226 25,214 17,201 14,189 14,175 14,160 17,148 25,135 32,123 41,114 53,107 66,99 78,96 92,96 107,96 119,99 132,107 144,114 153,123 160,135 168,148 171,160 171,174 171,189 168,201 160,214 153,226 144,235 132,242 119,250 107,253 93,253 L 93,253 Z\"/></g><g style=\"stroke:#000000;fill:none\"><path style=\"fill:none\" d=\"M 93,253 C 78,253 66,250 53,242 41,235 32,226 25,214 17,201 14,189 14,175 14,160 17,148 25,135 32,123 41,114 53,107 66,99 78,96 92,96 107,96 119,99 132,107 144,114 153,123 160,135 168,148 171,160 171,174 171,189 168,201 160,214 153,226 144,235 132,242 119,250 107,253 93,253\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 71,256 C 64,254 57,252 50,248 44,244 38,239 33,234 28,229 23,223 19,217 15,210 13,203 11,196 9,189 8,182 8,175 8,167 9,160 11,153 13,146 15,139 19,132 23,126 28,120 33,115 38,110 44,105 50,101 57,97 64,95 71,93 78,91 85,90 92,90 100,90 107,91 114,93 121,95 128,97 135,101 141,105 147,110 152,115 157,120 162,126 166,132 170,139 172,146 174,153 176,160 177,167 177,174 177,182 176,189 174,196 172,203 170,210 166,217 162,223 157,229 152,234 147,239 141,244 135,248 128,252 121,254 114,256 107,258 100,259 93,259 85,259 78,258 71,256 Z M 130,239 C 136,236 141,232 145,227 150,223 154,218 157,212 160,206 163,200 165,194 166,188 167,181 167,174 167,168 166,161 165,155 163,149 160,143 157,137 154,131 150,126 145,122 141,117 136,113 130,110 124,107 118,104 112,102 106,101 99,100 92,100 86,100 79,101 73,102 67,104 61,107 55,110 49,113 44,117 40,122 35,126 31,131 28,137 25,143 22,149 20,155 19,161 18,168 18,175 18,181 19,188 20,194 22,200 25,206 28,212 31,218 35,223 40,227 44,232 49,236 55,239 61,242 67,245 73,247 79,248 86,249 93,249 99,249 106,248 112,247 118,245 124,242 130,239 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"8\" y=\"89\" width=\"170\" height=\"171\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"854\" height=\"964\"/></g><g/></g></g></g></svg>";
nx3.render.svg.Elements.tplCircleUp = "\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 71,256 C 64,254 57,252 50,248 44,244 38,239 33,234 28,229 23,223 19,217 15,210 13,203 11,196 9,189 8,182 8,175 8,167 9,160 11,153 13,146 15,139 19,132 23,126 28,120 33,115 38,110 44,105 50,101 57,97 64,95 71,93 78,91 85,90 92,90 100,90 107,91 114,93 121,95 128,97 135,101 141,105 147,110 152,115 157,120 162,126 166,132 170,139 172,146 174,153 176,160 177,167 177,174 177,182 176,189 174,196 172,203 170,210 166,217 162,223 157,229 152,234 147,239 141,244 135,248 128,252 121,254 114,256 107,258 100,259 93,259 85,259 78,258 71,256 Z M 130,239 C 136,236 141,232 145,227 150,223 154,218 157,212 160,206 163,200 165,194 166,188 167,181 167,174 167,168 166,161 165,155 163,149 160,143 157,137 154,131 150,126 145,122 141,117 136,113 130,110 124,107 118,104 112,102 106,101 99,100 92,100 86,100 79,101 73,102 67,104 61,107 55,110 49,113 44,117 40,122 35,126 31,131 28,137 25,143 22,149 20,155 19,161 18,168 18,175 18,181 19,188 20,194 22,200 25,206 28,212 31,218 35,223 40,227 44,232 49,236 55,239 61,242 67,245 73,247 79,248 86,249 93,249 99,249 106,248 112,247 118,245 124,242 130,239 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"8\" y=\"89\" width=\"170\" height=\"171\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"854\" height=\"964\"/></g><g/></g></g><g><desc>Group</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 70,52 L 92,10 114,52 70,52 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"70\" y=\"10\" width=\"45\" height=\"44\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 92,95 L 84,95 84,43 100,43 100,95 92,95 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"84\" y=\"43\" width=\"17\" height=\"53\"/></g><g/></g></g></g></g></svg>\r\n\t";
nx3.render.svg.Elements.tplArrowDown = "\t\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"854\" height=\"964\"/></g><g/></g></g><g><desc>Group</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 69,298 L 92,344 115,298 69,298 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"69\" y=\"298\" width=\"47\" height=\"47\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 92,252 L 100,252 100,309 84,309 84,252 92,252 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"83\" y=\"252\" width=\"18\" height=\"59\"/></g><g/></g></g></g></g></svg>\t\r\n\t";
nx3.render.svg.Elements.tplArrowUp = "\t\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"854\" height=\"964\"/></g><g/></g></g><g><desc>Group</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 70,52 L 92,10 114,52 70,52 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"70\" y=\"10\" width=\"45\" height=\"44\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 92,95 L 84,95 84,43 100,43 100,95 92,95 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"84\" y=\"43\" width=\"17\" height=\"53\"/></g><g/></g></g></g></g></svg>\r\n\t";
nx3.render.svg.Elements.tpl1 = "\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"503\" height=\"1205\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 106,225 L 93,225 93,146 C 90,149 86,152 82,155 77,158 73,160 69,161 L 69,149 C 76,146 82,142 87,137 92,133 96,128 98,124 L 106,124 106,225 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"69\" y=\"124\" width=\"38\" height=\"103\"/></g><g/></g></g></g></svg>\t\r\n\t";
nx3.render.svg.Elements.tpl2 = "\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"503\" height=\"1205\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 124,212 L 124,225 58,225 C 58,222 58,219 59,216 61,211 64,207 67,202 71,197 76,192 83,187 93,178 101,171 104,166 108,161 110,157 110,152 110,148 108,144 105,141 102,138 97,136 92,136 86,136 82,138 78,141 75,144 73,148 73,154 L 60,152 C 61,143 64,136 70,131 75,126 83,124 92,124 102,124 109,127 115,132 120,137 123,144 123,152 123,156 122,160 121,164 119,168 117,172 113,176 109,180 103,186 95,193 87,199 83,203 80,206 78,208 77,210 75,212 L 124,212 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"57\" y=\"124\" width=\"68\" height=\"103\"/></g><g/></g></g></g></svg>\t\r\n\t";
nx3.render.svg.Elements.tpl3 = "\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"503\" height=\"1205\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 60,198 L 73,196 C 74,202 77,207 80,210 83,213 87,214 92,214 99,214 104,212 107,208 111,204 113,200 113,194 113,189 111,184 108,181 104,177 99,176 94,176 91,176 88,176 85,177 L 86,165 C 87,165 88,165 88,165 93,165 98,164 102,161 106,159 108,155 108,150 108,146 106,143 103,140 100,137 97,136 92,136 87,136 83,137 80,140 77,143 75,147 74,152 L 61,150 C 63,142 66,135 71,131 77,126 83,124 91,124 97,124 102,125 107,127 111,130 115,133 117,137 120,141 121,145 121,150 121,154 120,158 117,161 115,165 112,167 107,169 113,171 118,174 121,178 124,182 126,188 126,194 126,203 123,211 116,217 110,223 102,226 92,226 83,226 76,223 70,218 64,213 61,206 60,198 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"60\" y=\"124\" width=\"67\" height=\"104\"/></g><g/></g></g></g></svg>\t\r\n\t";
nx3.render.svg.Elements.tpl4 = "\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"503\" height=\"1205\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 101,225 L 101,201 56,201 56,188 104,125 114,125 114,188 126,188 126,201 114,201 114,225 101,225 Z M 101,188 L 101,145 69,188 101,188 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"55\" y=\"125\" width=\"72\" height=\"101\"/></g><g/></g></g></g></svg>\t\r\n\t";
nx3.render.svg.Elements.tpl5 = "\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"503\" height=\"1205\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 60,198 L 73,197 C 74,203 76,207 79,210 83,213 87,214 92,214 98,214 103,212 107,208 111,204 113,198 113,191 113,185 111,179 108,176 104,172 99,170 93,170 88,170 85,171 82,173 79,174 77,176 75,179 L 62,177 72,125 121,125 121,138 83,138 78,165 C 84,160 90,158 96,158 104,158 112,161 117,167 123,173 126,181 126,190 126,199 123,207 118,214 112,222 103,226 92,226 83,226 76,223 70,218 64,213 61,206 60,198 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"60\" y=\"125\" width=\"67\" height=\"103\"/></g><g/></g></g></g></svg>\t\r\n\t";
nx3.render.svg.Elements.tpl6x = "\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"503\" height=\"1205\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 124,150 L 111,151 C 110,146 108,143 106,141 103,138 99,136 94,136 90,136 86,137 83,139 80,142 77,145 74,150 72,155 71,162 71,172 74,168 78,165 82,162 86,160 91,159 96,159 104,159 111,162 117,168 123,174 126,182 126,192 126,198 125,204 122,209 119,215 115,219 110,222 105,225 100,226 94,226 83,226 75,222 68,215 61,207 58,195 58,178 58,158 62,144 69,135 75,128 84,124 95,124 103,124 110,126 115,131 120,136 123,142 124,150 Z M 71,191 C 71,195 72,199 74,203 76,206 78,209 82,211 85,213 89,214 93,214 99,214 103,212 107,208 111,204 113,199 113,192 113,186 111,180 107,177 104,173 99,171 92,171 86,171 81,173 77,177 73,180 71,185 71,191 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"58\" y=\"124\" width=\"69\" height=\"104\"/></g><g/></g></g></g></svg>\t\r\n\t";
nx3.render.svg.Elements.tpl6 = "\r\n<svg ><g style=\"stroke:none;fill:#000000\"><path d=\"M 124,150 L 111,151 C 110,146 108,143 106,141 103,138 99,136 94,136 90,136 86,137 83,139 80,142 77,145 74,150 72,155 71,162 71,172 74,168 78,165 82,162 86,160 91,159 96,159 104,159 111,162 117,168 123,174 126,182 126,192 126,198 125,204 122,209 119,215 115,219 110,222 105,225 100,226 94,226 83,226 75,222 68,215 61,207 58,195 58,178 58,158 62,144 69,135 75,128 84,124 95,124 103,124 110,126 115,131 120,136 123,142 124,150 Z M 71,191 C 71,195 72,199 74,203 76,206 78,209 82,211 85,213 89,214 93,214 99,214 103,212 107,208 111,204 113,199 113,192 113,186 111,180 107,177 104,173 99,171 92,171 86,171 81,173 77,177 73,180 71,185 71,191 Z\"/></g></svg>\t\r\n\t";
nx3.render.svg.Elements.tpl7 = "\r\n<svg ><g visibility=\"visible\" id=\"page1\"><desc>Slide</desc><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:none\"><rect x=\"0\" y=\"464\" width=\"503\" height=\"1205\"/></g><g/></g></g><g><desc>Drawing</desc><g><g style=\"stroke:none;fill:#000000\"><path d=\"M 61,138 L 61,125 126,125 126,136 C 120,142 114,152 108,163 102,174 97,186 94,197 91,206 90,215 89,225 L 76,225 C 76,217 78,208 81,196 83,185 87,175 93,164 98,154 104,145 110,138 L 61,138 Z\"/></g><g style=\"stroke:none;fill:none\"><rect x=\"61\" y=\"125\" width=\"67\" height=\"101\"/></g><g/></g></g></g></svg>\t\r\n\t";
nx3.test.DevRenderer.posfactor = .03;
nx3.xml.HeadXML.XHEAD = "head";
nx3.xml.HeadXML.XHEAD_TYPE = "type";
nx3.xml.HeadXML.XHEAD_LEVEL = "level";
nx3.xml.HeadXML.XHEAD_SIGN = "sign";
nx3.xml.HeadXML.XHEAD_TIE = "tie";
nx3.xml.HeadXML.XHEAD_TIETO = "tieto";
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
nx3.xml.NoteXML.XNOTE_DIRECTION = "direction";
nx3.xml.NoteXML.XNOTE_TYPE_PAUSE = "pause";
nx3.xml.NoteXML.XNOTE_TYPE_NOTE_ARTICULATIONS = "articulations";
nx3.xml.NoteXML.LIST_DELIMITER = ";";
nx3.xml.NoteXML.XNOTE_TYPE_NOTE_ATTRIBUTES = "attributes";
nx3.xml.NoteXML.XOFFSET = "offset";
nx3.xml.NoteXML.XLYRIC_CONTINUATION = "continuation";
nx3.xml.NoteXML.XLYRIC_FORMAT = "format";
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
tink.macro.tools.MacroTools.idCounter = 0;
ApplicationMain.main();
})();
