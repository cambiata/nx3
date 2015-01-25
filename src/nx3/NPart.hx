package nx3;
using Lambda;
/**
 * ...
 * @author Jonas Nyström
 */

 @:access(nx3.NVoice)
class NPart
{
	public function new(voices:Array<NVoice>=null, ?type:EPartType=null, clef:EClef=null, clefDisplay:EDisplayALN=null, key:EKey=null, keyDisplay:EDisplayALN=null, sound:String='') 
	{
		this.nvoices = voices;
		for (voice in voices) voice.npart = this;
		
		if (this.nvoices.length > 2)
		{
			throw "For now, NPart can't have more than two voices";
		}
		this.type = (type == null) ? EPartType.Normal : type;
		
		//this.clef = (clef == null) ? EClef.ClefG : clef;
		this.clef = clef;
		this.clefDisplay = (clefDisplay == null) ? EDisplayALN.Layout : clefDisplay;
		
		//this.key = (key == null) ? EKey.Natural : key;
		this.key = key;
		this.keyDisplay = (keyDisplay == null) ? EDisplayALN.Layout : keyDisplay;
		
		this.sound = sound;
		
	}

	public function iterator() return this.nvoices.iterator();
	public var length (get, null):Int;
	private function get_length():Int return this.nvoices.length;		
	
	var nbar:NBar;
	
	public var type(default, default):EPartType;
	public var nvoices(default, default):Array<NVoice>;
	public var clef(default, default):EClef;
	public var clefDisplay(default, default):EDisplayALN;
	public var key(default, default):EKey;
	public var keyDisplay(default, default):EDisplayALN;	
	public var sound(default, null):String;
	
	public function getNVoice(idx:Int):NVoice	return (idx < 0 || idx > this.nvoices.length) ? null : this.nvoices[idx];

	public function getTag():String {
		var voicestags = '';
		this.iter(function(nvoice) voicestags += nvoice.getTag());
		var clef = NTags.clefTag(this.clef) + NTags.displayALNTag(this.clefDisplay);
		var key = NTags.keyTag(this.key) + NTags.displayALNTag(this.keyDisplay);
		var type = NTags.npartTypeTag(this.type);		
		return '!$type$voicestags$clef$key';			
	}
	
}