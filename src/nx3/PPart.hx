package nx3;
import haxe.ds.IntMap.IntMap;

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
	
	
	public function getYPosition():Float
	{
		return this.getIndex() * 20;
	}
	
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
	
	
	

	
}
