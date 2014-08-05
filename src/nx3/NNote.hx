package nx3;
import hxlazy.Lazy;
using Lambda;
//import jasononeil.CleverSort;


//import nx3.tools.ENoteTypeTools;


/**
 * ...
 * @author Jonas Nyström
 */

 @:access(nx3.NHead)
class NNote implements Lazy
{
	
	public var type(default, null):ENoteType;
	public var value(default, null): ENoteVal;
	public var direction(default, null):EDirectionUAD;
	public var nheads(get, null):Array<NHead>;		
	var nvoice:NVoice;
	
	public function new(?type:ENoteType=null, ?heads:Array<NHead>=null, ?value:ENoteVal=null , ?direction:EDirectionUAD=null) 
	{
		if (type == null) 
		{
			type = (heads != null) ? ENoteType.Note(heads) :  ENoteType.Note([new NHead()]);
		}
		
		if (heads != null) for (head in heads) head.nnote = this;
		
		this.type = (type == null) ? ENoteType.Note(heads) : type;
		this.value = (value == null) ? ENoteVal.Nv4 : value;
		this.direction = (direction == null) ? EDirectionUAD.Auto : direction;
	}
	
	public function iterator() return this.nheads.iterator();
	public var length (get, null):Int;
	private function get_length():Int return this.nheads.length;	
	
	
	var nheads_:Array<NHead>;
	function get_nheads():Array<NHead> 
	{
		if (this.nheads_ != null) return this.nheads_;		
		
		switch(this.type) 
		{
			case ENoteType.Note(nheads, variant, articulations, attributes):
				//CleverSort.cleverSort(nheads, _.level);
				nheads.sort(function(a, b) { return Reflect.compare(a.level, b.level); } );				
				//nheads.cleverSort(_.level);
				this.nheads_ = nheads;				
			case ENoteType.Pause(level):
				this.nheads_ = [new NHead(EHeadType.Pause, level)];
				
			default:
				this.nheads_ =  [new NHead(EHeadType.Other, 0)];
		}
		return this.nheads_;
		//return null;
	}
	
	public function getNHead(idx:Int):NHead return (idx < 0 || idx > this.nheads.length) ? null : this.nheads[idx];
	
	@lazy public function headLevels():Array<Int> { return this.map(function(head) return head.level).array(); };
	@lazy public function topLevel():Int  { return this.nheads[0].level; }
	@lazy public function bottomLevel():Int  { return this.nheads[this.nheads.length-1].level; }
	@lazy public function ties():ETies {  return this.filter(function(head) return head.tie != null).map(function(head) return head.tie).array(); 	}	
	
	public function toString():String
	{
		var str = '';
		str +=  (type.getName() !='Note') ? ' '  + this.type.getName() : '';		
		var heads = '';
		for (head in this.nheads) heads += head.toString();
		return 'NNote($str):$heads';
	}	
	
}