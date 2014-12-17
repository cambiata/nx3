package;

@:native("Worker")

extern class Worker {
   public function new( script : String ) : Void;
   public function postMessage( m : Dynamic ) : Void;
   public function addEventListener( type : Dynamic , cb : Dynamic -> Void ) : Void;
}