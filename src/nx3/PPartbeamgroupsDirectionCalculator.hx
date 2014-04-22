package nx3;

/**
 * ...
 * @author Jonas Nyström
 */
 class PPartbeamgroupsDirectionCalculator 
{
	var ppart:PPart;
	public function new (ppart:PPart)
	{
		this.ppart = ppart;
	}
	
	public function calculateBeamgroupsDirections():Void
	{
		var partbeamgroups :Array<PBeamgroups> = [];
		for (pvoice in this.ppart.getVoices()) partbeamgroups.push(pvoice.getBeamgroups());
		
		var beamgroups0 = partbeamgroups[0];
		var voiceDirection0 = this.ppart.getVoices()[0].nvoice.direction;
		if (voiceDirection0 == null) voiceDirection0 = EDirectionUAD.Auto;
		
		if (partbeamgroups.length == 1)
		{
			for (beamgroup in beamgroups0)
			{
				var direction:EDirectionUD = null;
				switch voiceDirection0
				{
					case EDirectionUAD.Up:
						direction = EDirectionUD.Up;
					case  EDirectionUAD.Down:
						direction = EDirectionUD.Down;
					case EDirectionUAD.Auto:
						var calculator = new PBeamgroupDirectionCalculator(beamgroup);
						direction = calculator.getDirection();
						
				}
				beamgroup.setDirection(direction);
			}
		}
		else if (partbeamgroups.length == 2)
		{
			var beamgroups1 = partbeamgroups[1];
			var voiceDirection1 = this.ppart.getVoices()[1].nvoice.direction;
			if (voiceDirection1 == null) voiceDirection0 = EDirectionUAD.Auto;
			
			var voice0 = this.ppart.getVoices()[0];
			var voice1 = this.ppart.getVoices()[1];			
			
			if ((voiceDirection0 == EDirectionUAD.Auto) && (voiceDirection1 == EDirectionUAD.Auto))
			{
				var voice0value = voice0.getValue();
				var voice1value = voice1.getValue();
				
				var direction:EDirectionUD = null;
				
				var bgPosition = 0;
				for (beamgroup in beamgroups0)
				{
					if (bgPosition < voice1value) 
					{
						direction = EDirectionUD.Up;
					}
					else
					{
						var calculator = new PBeamgroupDirectionCalculator(beamgroup);
						direction = calculator.getDirection();						
					}
					beamgroup.setDirection(direction);
					bgPosition += beamgroup.getValue();
				}

				var bgPosition = 0;
				for (beamgroup in beamgroups1)
				{
					if (bgPosition < voice0value) 
					{
						direction = EDirectionUD.Down;
					}
					else
					{
						var calculator = new PBeamgroupDirectionCalculator(beamgroup);
						direction = calculator.getDirection();						
					}
					beamgroup.setDirection(direction);
					bgPosition += beamgroup.getValue();
				}
			}
			else 
			{
				for (beamgroup in beamgroups0)
				{
					beamgroup.setDirection(EDirectionTools.uadToUd(voice0.nvoice.direction));
				}

				for (beamgroup in beamgroups1)
				{
					beamgroup.setDirection(EDirectionTools.uadToUd(voice1.nvoice.direction));
				}
			}
		}
		else
		{
			throw "SHOULDN'T HAPPEN";
		}
	}	
}
