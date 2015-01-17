package nx3.js;

import js.Browser;
import js.html.Element;
import js.html.MouseEvent;
import js.html.ScriptElement;
import nx3.js.ScriptScore;
import nx3.NScore;

import nx3.utils.ScoreDrawingTools;

import audiotools.utils.Wav16PartsBuilder;
import audiotools.sound.Wav16SoundManager;

/**
 * ScriptScores
 * @author 
 */
class ScriptScores 
{
	static var instance:ScriptScores;
	
  	public static inline function getInstance()
  	{
		if (instance == null)
			return instance = new ScriptScores();
		else
			return instance;
  	}
	
	function new() { 	
		this.scScores = new Map<String,ScriptScore>();
		this.cache = new Map<String, Bool>();
	}

	var scScores:Map<String, ScriptScore>;
	
	public function init() {
		var scripts = Browser.document.getElementsByClassName('nx-score');
		for (script in scripts) {
			var scriptElement:ScriptElement = cast script;
			 var id = scriptElement.id;
			 if (! this.scScores.exists(id)) {
				 var scriptScore = new ScriptScore(scriptElement);
				
				this.scScores.set(id, scriptScore);
				
				scriptScore.btnPlay.addEventListener('mousedown', function(e:MouseEvent) {
					this.play(scriptScore);
					e.stopPropagation();
				});

				scriptScore.btnStop.addEventListener('mousedown', function(e:MouseEvent) {
					this.stop(scriptScore);
					e.stopPropagation();
				});				
				
				scriptScore.parent.addEventListener('mousedown', function(e:MouseEvent) {
					this.activate(scriptScore);
					e.stopPropagation();
				});
				
				Browser.document.body.addEventListener('mousedown', function(e:MouseEvent) {
					this.activate(null);
				});
				
			 } else {
				 trace('script score $id is already in cache');
			 }
		}		
		this.activate(null);
	}
	
	function stop(scriptScore:ScriptScore) 
	{
		this.activate(scriptScore);
		 Wav16SoundManager.getInstance().stop();
	}
	
	var activeScriptScore:ScriptScore = null;
	
	function activate(scriptScore:ScriptScore) 
	{		
		if (this.activeScriptScore != null && scriptScore == this.activeScriptScore) return;
		Wav16SoundManager.getInstance().stop();
		this.activeScriptScore = scriptScore;
		for (scScore in this.scScores) {
			if (scScore == activeScriptScore) {
				scScore.setLabel('Activating...');
				scScore.parent.classList.add('nx-activating');				
				Wav16PartsBuilder.getInstance().getScoreWav16Async(scScore.nscore, scScore.tempo, scScore.sounds).handle(function(wav16) {				
					Wav16SoundManager.getInstance().initSound(wav16, playCallback, scriptScore.id + scScore.tempo + Std.string(scScore.sounds));
					scScore.setLabel('0');
					scScore.parent.classList.remove('nx-activating');				
					scScore.parent.classList.add('nx-active');	
				});
				
			} else {
				scScore.parent.classList.remove('nx-active');
			}
		}
	}
	
	function play(scScore:ScriptScore) {

		function startPlayack(pos:Float) {
			Wav16SoundManager.getInstance().start(0);		
			scScore.parent.classList.remove('nx-activating');				
			scScore.parent.classList.add('nx-active');										
		}		
		
		this.activate(scScore);
		
		scScore.parent.classList.add('nx-activating');			
		var timeStart = Date.now().getTime();
		var nscore:NScore = scScore.nscore;
		var tempo:Int = scScore.tempo;
		var sounds:Array<String> = scScore.sounds;

		Wav16PartsBuilder.getInstance().getScoreWav16Async(scScore.nscore, scScore.tempo, scScore.sounds).handle(function(wav16) {
			//trace('FINISHED nscore1');			
			 Wav16SoundManager.getInstance().initSound(wav16, playCallback, scScore.id + scScore.tempo + Std.string(scScore.sounds));
			 //this.drawingTools.drawColumnFromTime(0);
			 var timeBuild = Date.now().getTime() - timeStart;
			 trace('time to build: ' + timeBuild);
			 
			 if (timeBuild > 500) {
				 trace('ACTIVATING DELAY');
				 Browser.window.setTimeout( function() { startPlayack(0); }, 1000);
			 } else {
				 startPlayack(0);
			 }
		});	
				

	}
	
	var cache:Map<String, Bool>;
	
	public function render() {
		for (scScore in this.scScores) {			
			if (! this.cache.exists(scScore.id)) {
				scScore.render();	
				this.cache.set(scScore.id, true);
			} else {
				trace('score ${scScore.id} is already in cache');				
			}
		}
	}
	
	public function clearAll() {
		for (scScore in this.scScores) {
			scScore.clear();
		}		
	}
	
	function playCallback(key:String, pos:Float):Void {
		if (this.activeScriptScore == null) return;
		
		this.activeScriptScore.drawingtools.drawColumnFromTime(pos);	
		
		var label = this.activeScriptScore.labelTime;
		label.textContent = Std.string(pos).substr(0, 5);
		
	}		
	
	
	
}