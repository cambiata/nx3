package nx3;

/**
 * NRefTools
 * @author Jonas Nyström
 */
class NRefTools
{
	static public function refNote(score:NScore, barIdx:Int=0, partIdx:Int=0, voiceIdx:Int=0, noteIdx:Int=0):NRef return { score:score, bar:barIdx, part:partIdx, voice:voiceIdx, note:noteIdx, head:0 };	
	static public function refHead(score:NScore, barIdx:Int=0, partIdx:Int=0, voiceIdx:Int=0, noteIdx:Int=0, headIdx:Int=0):NRef return { score:score, bar:barIdx, part:partIdx, voice:voiceIdx, note:noteIdx, head:headIdx };	
	static public function refBar(score:NScore, barIdx:Int=0):NRef return { score:score, bar:barIdx, part:0, voice:0, note:0, head:0 };
	
	
	static public function checkRefNoteError( ref:NRef):Bool
	{
		if (getNote(ref) == null) return true;
		return false;
	}
	
	static public function getNote(ref:NRef):NNote
	{
		var targetnote:NNote;
		try { targetnote = ref.score.getNBar(ref.bar).getNPart(ref.part).getNVoice(ref.voice).getNNote(ref.note); } catch (e:Dynamic) {  return null; };
		return targetnote;
	}
	
	static public function getHead(ref:NRef):NHead
	{
		var targethead:NHead;
		try { targethead = ref.score.getNBar(ref.bar).getNPart(ref.part).getNVoice(ref.voice).getNNote(ref.note).getNHead(ref.head); } catch (e:Dynamic) {  return null; };
		return targethead;
		
	}
	
	static public function getBar(ref:NRef):NBar
	{	
		var target:NBar;
		try { target = ref.score.getNBar(ref.bar); } catch (e:Dynamic) {  return null; };
		return target;	
	}
}
