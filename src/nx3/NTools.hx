package nx3;
using cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */

 @:access(nx3.NNote)
 @:access(nx3.NVoice)
 @:access(nx3.NPart)
 @:access(nx3.NBar)
 @:access(nx3.NScore)
 
class NTools
{

	static public function noteRef(nnote:NNote):NRef
	{
		var nvoice = nnote.nvoice;
		var noteIdx = nvoice.nnotes.indexOf(nnote);
		
		var npart = nvoice.npart;
		var voiceIdx = npart.nvoices.indexOf(nvoice);
		
		var nbar = npart.nbar;
		var partIdx = nbar.nparts.indexOf(npart);
		
		var nscore = nbar.nscore;
		var barIdx = nscore.nbars.indexOf(nbar);
		
		return { score:nscore, bar: barIdx, part:partIdx, voice:voiceIdx, note:noteIdx, head:0 };
	}
	
}