package nx3;

/**
 * ...
 * @author Jonas Nyström
 */
import haxe.ds.IntMap.IntMap;

class VPart
{
	public var npart(default, null):NPart;
	public function new(npart:NPart) this.npart = npart;
	
	var vvoices:VVoices;
	public function getVVoices(): VVoices
	{
		if (this.vvoices != null) return this.vvoices;
		this.vvoices = [];
		for (nvoice in this.npart.nvoices) this.vvoices.push(new VVoice(nvoice));
		return this.vvoices;
	}
	
	var vcomplexes:VComplexes;
	var vcomplexesPositions:Map<VComplex,Int>;
	var positionsVComplexes:IntMap<VComplex>;
	
	
	
	var generator: VPartComplexesGenerator;
	public function getVComplexes():VComplexes
	{
		if (this.vcomplexes != null) return this.vcomplexes;
		this.generator = new  VPartComplexesGenerator(this.getVVoices());
		this.vcomplexes = generator.getComplexes();
		this.vcomplexesPositions = generator.getComplexesPositions();
		this.positionsVComplexes = generator.getPositionsComplexes();
		return this.vcomplexes;
	}

	public function getPositionsVComplexes():IntMap<VComplex>
	{
		if (this.vcomplexes == null) this.getVComplexes();
		return this.positionsVComplexes;
	}
	
	public function getVComplexesPositions():Map<VComplex,Int>
	{
		if (this.vcomplexes == null) this.getVComplexes();
		return this.vcomplexesPositions;
	}
	
	public var vcomplexesMinDistances:Map<VComplex, Float>;
	public function getVComplexesMinDistances():Map<VComplex, Float>
	{
		if (this.vcomplexesMinDistances != null) return this.vcomplexesMinDistances;		
		this.vcomplexesMinDistances = new  Map<VComplex, Float>();
		
		var complexes:VComplexes = this.getVComplexes();
		
		// TODO - is this needed?
		this.getBeamgroupsDirections();
		
		var i = 0;
		for (i in 0...complexes.length)
		{
			var leftComplex:VComplex = complexes[i];			
			var rightComplex:VComplex = (i < complexes.length) ? complexes[i + 1] : null;		
			
			var distance:Float = new VPartComplexesMinDistancesCalculator(this).getDistance(leftComplex, rightComplex);
			this.vcomplexesMinDistances.set(leftComplex, distance);
		}
		return this.vcomplexesMinDistances;
	}
	
	var value:Null<Int>;
	public function getValue():Int
	{
		if (this.value != null) return this.value;
		if (this.getVVoices().length == 1) 
		{
			this.value = this.vvoices[0].getValue();
		}
		var value = .0;
		for (vvoice in this.vvoices)
		{
			value = Math.max(value, vvoice.getValue());
		}
		this.value = Std.int(value);
		return this.value;
	}
	
	var partbeamgroups:VPartbeamgroups;
	public function getPartbeamgroups(): VPartbeamgroups
	{
		if (this.partbeamgroups != null) return this.partbeamgroups;
		this.partbeamgroups = new VPartbeamgroups();
		for (vvoice in this.getVVoices())
		{
			this.partbeamgroups.push(vvoice.getBeamgroups());
		}
		return this.partbeamgroups;
	}
	
	var beamgroupsDirections:Map<VBeamgroup, EDirectionUD>;
	public function getBeamgroupsDirections():Map<VBeamgroup, EDirectionUD>
	{
		if (this.beamgroupsDirections != null) return this.beamgroupsDirections;
		if (this.partbeamgroups == null) this.getPartbeamgroups();
		
		var calculator = new VPartbeamgroupsDirectionCalculator(this);
		this.beamgroupsDirections = calculator.getBeamgroupsDirections();
		return this.beamgroupsDirections;
	}
	
	var vnotesVVoices:Map<VNote, VVoice>;
	public function getVNotesVVoices():Map<VNote, VVoice>
	{
		if (this.vnotesVVoices != null) return this.vnotesVVoices;
		
		this.vnotesVVoices = new Map<VNote, VVoice>();
		
		for (vvoice in this.getVVoices())
		{
			for (vnote in vvoice.getVNotes())
			{
				this.vnotesVVoices.set(vnote, vvoice);
			}
		}
		return this.vnotesVVoices;
	}
	
	var vcomplexDirections:Map<VComplex, EDirectionUDs>;
	public function getVComplexDirections():Map<VComplex, EDirectionUDs>
	{
		if (this.vcomplexDirections != null) return this.vcomplexDirections;
		this.vcomplexDirections = new Map<VComplex, EDirectionUDs>();
		
		var beamgroupsDirections = this.getBeamgroupsDirections();
		for (vcomplex in this.getVComplexes())
		{
			var directions =  new EDirectionUDs();
			for (vnote in vcomplex.getVNotes())
			{
				var vvoice = this.getVNotesVVoices().get(vnote);
				var beamgroup = vvoice.getNotesBeamgroups().get(vnote);
				var direction = beamgroupsDirections.get(beamgroup);		
				directions.push(direction);
			}
			this.vcomplexDirections.set(vcomplex, directions);
		}
		return this.vcomplexDirections;
	}
	
}
