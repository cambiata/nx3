package nx3.qs;

import nx3.EAllotment;
import nx3.NBar;
import nx3.NBars;
import nx3.NNote;
import nx3.NPart;
import nx3.NParts;
import nx3.NScore;
import nx3.NVoice;
import nx3.NVoices;
import nx3.qs.QSyntaxNotes;

/**
 * ...
 * @author Jonas Nyström
 */
class QuickSyntaxBuilder
{
	var qsnotes:QSyntaxNotes;

	public function new(qsnotes:QSyntaxNotes) 
	{
		this.qsnotes = qsnotes;
	}
	
	public function getNBars():NBars
	{
		var barMax:Int = 0;
		var partMax:Int = 0;
		var voiceMax:Int = 0;
		
		for (key in this.qsnotes.keys())
		{
			//trace(key);
			var bpv = QSyntaxTools.stringToBpv(key);
			barMax = max(bpv.barIndex, barMax);
			partMax = max(bpv.partIndex, partMax);
		}
		//trace([barMax, partMax]);
		barMax++;
		partMax++;
		
		var nbars:NBars = [];
		for (barIndex in 0...barMax)
		{
			var nparts:NParts = [];
			for (partIndex in 0...partMax)
			{
					var nvoices:NVoices = [];
					
					if (qsnotes.exists( QSyntaxTools.getBpvString(barIndex, partIndex, 0) ))
					{
						//trace('Found bar $barIndex part $partIndex voice 0');
						var nnotes = qsnotes.get(QSyntaxTools.getBpvString(barIndex, partIndex, 0));
						var nvoice:NVoice = new NVoice(nnotes);
						nvoices.push(nvoice);
					}
					else
					{
						//trace('NOT Found bar $barIndex part $partIndex voice 0');
					}

					if (qsnotes.exists( QSyntaxTools.getBpvString(barIndex, partIndex, 1) ))
					{
						//trace('Found bar $barIndex part $partIndex voice 1');
						var nnotes = qsnotes.get(QSyntaxTools.getBpvString(barIndex, partIndex, 1));
						var nvoice:NVoice = new NVoice(nnotes);
						nvoices.push(nvoice);
					}
					else
					{
						//trace('NOT Found bar $barIndex part $partIndex voice 1');
					}					
				
					var npart:NPart = new NPart(nvoices);
					nparts.push(npart);
			}
			
			var nbar:NBar = new NBar(nparts, null, null, null, EAllotment.Logaritmic);
			nbars.push(nbar);
		}
		
		return nbars;
	}
	
	public function getNScore():NScore
	{
		var nscore = new NScore(this.getNBars());
		return nscore;
	}
	
	
	function max(valA:Int, valB:Int):Int
	{
		if (valA > valB) return valA;
		return valB;
	}
	
}