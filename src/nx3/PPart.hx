package nx3;
import haxe.ds.IntMap.IntMap;

/**
 * ...
 * @author Jonas Nyström
 */
class PPart
{
	public var npart(default, null):NPart;
	public var bar(default, default): PBar;
	
	public function new(npart:NPart)
	{
		this.npart = npart;		
	}		
	
	public function getBar():PBar
	{
		return this.bar;
	}
	
	
	var voices:PVoices;
	public function getPVoices():PVoices
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
			this.positionsComplexes.set(complex.getPosition(), complex);
		}		
		return this.positionsComplexes;
	}
	
	
}
