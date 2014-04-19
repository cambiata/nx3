package nx3;
import haxe.ds.IntMap.IntMap;

/**
 * ...
 * @author Jonas Nyström
 */
class PPart
{
	public var npart(default, null):NPart;
	public var pbar(default, default): PBar;
	
	public function new(npart:NPart)
	{
		this.npart = npart;		
	}		
	
	var pvoices:PVoices;
	public function getPVoices():PVoices
	{
		if (this.pvoices != null) return this.pvoices;
		this.pvoices = [];		
		
		for (nvoice in this.npart.nvoices) 
		{
			var pvoice = new PVoice(nvoice);
			pvoice.ppart = this;
			this.pvoices.push(pvoice);
		}
		return this.pvoices;
	}	
	
	var pcomplexes:PComplexes;	
	public function getPComplexes():PComplexes
	{
		if (this.pcomplexes != null) return this.pcomplexes;
		var generator = new  PPartComplexesGenerator(this.getPVoices());
		this.pcomplexes = generator.getComplexes();
		return this.pcomplexes;
	}	

	var positionsPComplexes:IntMap<PComplex>;
	public function getPositionsPComplexes():IntMap<PComplex>
	{
		if (this.positionsPComplexes != null) return  this.positionsPComplexes;
		this.positionsPComplexes = new IntMap<PComplex>();
		for (complex in this.getPComplexes())
		{
			this.positionsPComplexes.set(complex.getPosition(), complex);
		}
		return this.positionsPComplexes;
	}
	
	
}
