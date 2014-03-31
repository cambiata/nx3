package nx3;
//import jasononeil.CleverSort;


//import nx3.tools.ENoteTypeTools;


/**
 * ...
 * @author Jonas Nyström
 */

 
class NNote
{
	
	public var type(default, null):ENoteType;
	public var value(default, null): ENoteVal;
	public var direction(default, null):EDirectionUAD;
	public var nheads(get, null):Array<NHead>;	
	
	public function new(?type:ENoteType=null, ?heads:Array<NHead>=null, ?value:ENoteVal=null , ?direction:EDirectionUAD=null) 
	{
		if (type == null) 
		{
			type = (heads != null) ? ENoteType.Note(heads) :  ENoteType.Note([new NHead()]);
		}
		
		this.type = (type == null) ? ENoteType.Note(heads) : type;
		this.value = (value == null) ? ENoteVal.Nv4 : value;
		this.direction = (direction == null) ? EDirectionUAD.Auto : direction;
	}
	
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
			default:
				this.nheads_ = [];
		}
		return this.nheads_;
		//return null;
	}
	
	var headLevels:Array<Int>;
	public function getHeadLevels():Array<Int>
	{
		if (headLevels != null) return this.headLevels;
		this.headLevels = [];
		for (head in this.nheads) this.headLevels.push(head.level);
		return this.headLevels;
	}
	
	
	public function getTopLevel():Int
	{
		return this.nheads[0].level;
	}
	
	public function getBottomLevel():Int
	{
		return this.nheads[this.nheads.length-1].level;
	}
}