package nx3;
import nx3.PBeamgroup;
using cx.ArrayTools;
using nx3.ENoteValTools;
/**
 * ...
 * @author Jonas Nyström
 */
class PBeamflagCalculator
{
	var beamgroup:PBeamgroup;

	public function new(beamgroup:PBeamgroup) 
	{
		this.beamgroup = beamgroup;
	}
	
	public function getBeamflags(): Array<EBeamflagType>
	{
		var firstpass :Array<EBeamflagType> = [];
		 var noteIdx = 0;
		 
		 var holder:Array<Int> = [];
		 var holderIdx = 0;
		 for (note in this.beamgroup.pnotes)
		 {					 			 			
			 var nextnote = ArrayTools.indexOrNull(this.beamgroup.pnotes, noteIdx + 1);
			if (nextnote == null) continue;
			
			if (note.nnote.value.beaminglevel() > 1  && nextnote.nnote.value.beaminglevel() > 1 )
			{
				holder.push(2);				
				firstpass.push(EBeamflagType.Full16);
			}
			else if (note.nnote.value.beaminglevel() == 1  && nextnote.nnote.value.beaminglevel() > 1 )
			{
				holder.push( -1);
				firstpass.push(EBeamflagType.End16);
			}
			else if (note.nnote.value.beaminglevel() > 1  && nextnote.nnote.value.beaminglevel() == 1 )
			 {
				 holder.push(1);
				 firstpass.push(EBeamflagType.Start16);
			 }
			 else
			 {
				 holder.push(0);
				 firstpass.push(EBeamflagType.None);
			 }
			 noteIdx++;
		 }
		 
		 // Remove End and Start beside Full
		 var result :Array<EBeamflagType> = [];
		 for (r in firstpass)
		 {
			 
			 var rnext = firstpass.next(r);
			 var rprev = firstpass.prev(r);
			 if (rnext  == EBeamflagType.Full16 && r == EBeamflagType.End16)
			 {
				 result.push(EBeamflagType.None);
			 }
			 else if (rprev  == EBeamflagType.Full16 && r == EBeamflagType.Start16)
			 {
				 result.push(EBeamflagType.None);
			 }
			 else
			 { 
				 result.push(r);
			 }			 
		 }
		 return result;
	}
	
}