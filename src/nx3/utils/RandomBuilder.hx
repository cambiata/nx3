package nx3.utils;
import nx3.NBars;
import nx3.NNotes;
import nx3.NPart;
import nx3.NVoice;

/**
 * RandomBuilder
 * @author Jonas Nyström
 */
class RandomBuilder 
{
	var nbars:NBars;

	public function new(nbars:NBars) 
	{
		this.nbars = nbars;
	}
	
	public function getRandomNotes(length:Int = 10, partIdx = 0):NBars {
		
		var nnotes:NNotes  = this.nbars[0].nparts[partIdx].nvoices[0].nnotes;
		var alternatives:Int = nnotes.length;
		var newNnotes = new NNotes();
		var prevRnd:Int = -1;
		for (i in 0 ... length) {						
			var rnd:Int = Math.floor(Math.random() * alternatives);
			while (rnd == prevRnd) {
				rnd = Math.floor(Math.random() * alternatives);				
			}
			trace(rnd);
			var nnote = nnotes[rnd];			
			newNnotes.push(nnote);			
			prevRnd = rnd;
		}
		
		return [new NBar([new NPart([new NVoice(newNnotes)], this.nbars[0].nparts[partIdx].type, this.nbars[0].nparts[partIdx].clef, this.nbars[0].nparts[partIdx].clefDisplay, this.nbars[0].nparts[partIdx].key, this.nbars[0].nparts[partIdx].keyDisplay )], this.nbars[0].type, this.nbars[0].time, this.nbars[0].timeDisplay, this.nbars[0].allotment, this.nbars[0].spacing)];
	}
	
	
}