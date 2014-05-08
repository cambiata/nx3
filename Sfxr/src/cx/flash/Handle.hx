package cx.flash;
import flash.display.Sprite;
import flash.events.MouseEvent;

/**
 * ...
 * @author Jonas Nyström
 */
class Handle extends Sprite {
	
	private var changeHandler: Float->Float -> Void;
	private var dragX:Float;
	private var dragY:Float;
	
	public function new(changeHandler: Float->Float -> Void) {
		super();
		graphics.beginFill(0xe0a74d);
		graphics.drawCircle(0, 0, 5);
		
		this.changeHandler = changeHandler;
		
		addEventListener(MouseEvent.MOUSE_DOWN, onMouseDown);
	}
	
	private function onMouseDown(e:MouseEvent):Void {
		stage.addEventListener(MouseEvent.MOUSE_MOVE, onMouseMove);
		stage.addEventListener(MouseEvent.MOUSE_UP, onMouseUp);
		dragX = stage.mouseX;
		dragY = stage.mouseY;
	}
	private function onMouseMove(e:MouseEvent):Void {
		changeHandler(stage.mouseX-dragX, stage.mouseY-dragY);
		dragX = stage.mouseX;
		dragY = stage.mouseY;
	}
	private function onMouseUp(e:MouseEvent):Void {
		stage.removeEventListener(MouseEvent.MOUSE_MOVE, onMouseMove);
		stage.removeEventListener(MouseEvent.MOUSE_UP, onMouseUp);
	}
}