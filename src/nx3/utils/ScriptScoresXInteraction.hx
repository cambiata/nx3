package nx3.utils;
import nx3.js.MouseInteraction;
import dtx.DOMCollection;
import audiotools.sound.Wav16SoundManager;
import audiotools.sound.Wav16SoundLoader;
import audiotools.utils.Wav16PartsBuilder;
using Detox;

/**
 * ScriptScoresXInteraction
 * @author Jonas Nyström
 */
class ScriptScoresXInteraction {
	
  	private static var instance:ScriptScoresXInteraction;
  
  	public static inline function getInstance()
  	{
		if (instance == null)
			return instance = new ScriptScoresXInteraction();
		else
			return instance;
  	}
	
	private function new() { }	
	
	
	public function onActivate(scriptScore:ScriptScoreX) {
		//trace('activate ' + scriptScore.id);
		this.activateScore(scriptScore);
	}
	
	public function onPlay(scriptScore:ScriptScoreX) {
		trace('play ' + scriptScore.id);	
		this.play(scriptScore);
	}

	public function onStop() {
		//trace('stop');		
		this.stop();
	}
	
	// i
	public function onInteract(scriptScore:ScriptScoreX, interaction:MouseInteraction) {
		trace('interact ' + scriptScore.id + ' : ' + interaction);		
		
		switch interaction {
			case MouseInteraction.PlayNote(scoreId, note, noteinfo, sound):
				var midinr = noteinfo.midinr;
				var filename = '/sounds/piano/$midinr.mp3';
				
				Wav16SoundLoader.getInstance().getWav16s([filename], function(val) {
					//trace('get sound $filename');
				}).handle(function(map) {
					var wav16 = map.get(filename);
					Wav16SoundManager.getInstance().initSound(wav16,  function(key, pos) { }, scoreId + 'PLAY' );
					Wav16SoundManager.getInstance().start(0);
				});
			case MouseInteraction.StopNote(scoreId):
				Wav16SoundManager.getInstance().stop();
			case _:
		}	
		
	}
	
	var currentActive:ScriptScoreX = null;
	
	public function activateScore(scriptScore:ScriptScoreX) {		
		if (currentActive == scriptScore) return;		
		Wav16SoundManager.getInstance().stop();
		trace('activate');
		var parents = this.findNxParents();
		for (parent in parents)  parent.removeClass('nx-active');			
		scriptScore.parent.addClass('nx-active');
		currentActive = scriptScore;
	}
	
	function findNxParents():DOMCollection return Detox.find('.nx-parent');
	
	
	function play(scriptScore:ScriptScoreX) {
		//this.activate(scScore);

		function startPlayack(pos:Float) {
			Wav16SoundManager.getInstance().start(0);		
			scriptScore.parent.removeClass('nx-activating');				
			scriptScore.parent.addClass('nx-active');										
		}		
		scriptScore.labelTime.textContent = 'Laddar...';
		scriptScore.parent.addClass('nx-activating');			
		var timeStart = Date.now().getTime();
		var nscore:NScore = scriptScore.nscore;
		var tempo:Int = scriptScore.tempo;
		var sounds:Array<String> = scriptScore.sounds;
		
		Wav16PartsBuilder.getInstance().getScoreWav16Async(scriptScore.nscore, scriptScore.tempo, scriptScore.sounds).handle(function(wav16) {
			//trace('FINISHED nscore1');			
			 Wav16SoundManager.getInstance().initSound(wav16, playCallback, scriptScore.id + scriptScore.tempo + Std.string(scriptScore.sounds));
			 //this.drawingTools.drawColumnFromTime(0);
			 var timeBuild = Date.now().getTime() - timeStart;
			// trace('time to build: ' + timeBuild);
			 
			 if (timeBuild > 500) {
				 //trace('ACTIVATING DELAY');
				 js.Browser.window.setTimeout( function() { startPlayack(0); }, 1000);
			 } else {
				 startPlayack(0);
			 }
		});					
	}	
	
	function stop() 
	{
		 Wav16SoundManager.getInstance().stop();		
	}	
	
	function playCallback(key:String, pos:Float):Void {
		if (this.currentActive == null) return;		
		this.currentActive.drawingtools.drawColumnFromTime(pos);	
		this.currentActive.labelTime.textContent = Std.string(pos).substr(0, 5);		
	}		
	
	
}