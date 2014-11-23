package nx3;
import haxe.ds.IntMap.IntMap;
import nx3.geom.Rectangle;

/**
 * ...
 * @author Jonas Nyström
 */
@:access(nx3.PVoice)
class PPart
{
	public var npart(default, null):NPart;
	
	public function new(npart:NPart)
	{
		this.npart = npart;		
		this.value = 0;
	}		
	
	public function iterator() return this.getVoices().iterator();
	public var length (get, null):Int;
	private function get_length():Int return this.getVoices().length;		
	
	
	// parent
	var bar: PBar;
	public function getBar():PBar
	{
		return this.bar;
	}
	
	
	var voices:PVoices;
	public function getVoices():PVoices
	{
		if (this.voices != null) return this.voices;
		this.voices = [];		
		
		for (nvoice in this.npart.nvoices) 
		{
			var voice = new PVoice(nvoice);
			voice.part = this;
			this.voices.push(voice);
		}
		return this.voices;
	}	
	
	public function getVoice(idx:Int):PVoice return (idx < 0 || idx > this.getVoices().length) ? null : this.getVoices()[idx];
	
	var complexes:PComplexes;	
	public function getComplexes():PComplexes
	{
		if (this.complexes != null) return this.complexes;
		var generator = new  PPartComplexesGenerator(this);
		this.complexes = generator.getComplexes();
		return this.complexes;
	}	

	var positionsComplexes:IntMap<PComplex>;
	public function getPositionsComplexes():IntMap<PComplex>
	{
		if (this.positionsComplexes != null) return  this.positionsComplexes;
		this.positionsComplexes = new IntMap<PComplex>();
		for (complex in this.getComplexes())
		{
			this.positionsComplexes.set(complex.getValueposition(), complex);
		}		
		return this.positionsComplexes;
	}
	
	public function getIndex():Int
	{
		return this.bar.getParts().indexOf(this);
	}
	
	
	/*
	public function getYPosition():Float
	{
		return this.getIndex() * 20;
	}
	*/
	
	var value:Int;
	public function getValue():Int
	{
		
		
		if (value != 0) return this.value;
		for (voice in this.getVoices())
		{
			this.value = Std.int(Math.max(this.value, voice.getValue()));
		}
		return this.value;
	}	
	
	private var rect:Rectangle = null;
	public function getRect():Rectangle
	{
		if (rect != null) return rect;		
		
		var result = switch this.npart.type {
			case nx3.EPartType.Normal: new Rectangle(0, -8, 1, 13);
			case _: 	new Rectangle(0, -4, 1, 8);		
		}
		//trace('complexes');
		for (complex in this.getComplexes())
		{
			var cr:Rectangle = complex.getRect();
			result = result.union(cr);
		}		
		//trace('beamframes');
		for (voice in this.getVoices())
		{
			for (beamgroup in voice.getBeamgroups())
			{
				var dir:EDirectionUD = beamgroup.getDirection();
				var frame: PBeamframe = beamgroup.getFrame();
				if (frame == null) continue;
			
				var top = (dir == EDirectionUD.Up) ? Math.min(frame.leftTipY, frame.rightTipY) : 0;
				var bottom = (dir == EDirectionUD.Up) ? 0 : Math.max(frame.leftTipY, frame.rightTipY);
				var br:Rectangle = new Rectangle(0, top, 1, bottom - top);
				result = result.union(br);
				
			}			
		}		
		//trace('result');
		this.rect = result;
		return result;
	}
	

	public function getYAbove():Float
	{
		var result = 0.0;
		var index = this.bar.getParts().indexOf(this);
		
		if (index == 0)		
			result = this.getRect().y;
		else {
			var prevPart = this.bar.getPart(index - 1);
			result = prevPart.getRect().bottom + ( -this.getRect().y);
		}
		return result;		
	}
	
}
