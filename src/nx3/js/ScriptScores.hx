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
				
				scriptScore.btnPlay.addEventListener('click', function(e:MouseEvent) {
					trace('click');
					this.play(scriptScore);
					e.stopPropagation();
				});

				scriptScore.btnStop.addEventListener('click', function(e:MouseEvent) {
					trace('click');
					this.stop(scriptScore);
					e.stopPropagation();
				});				
				
				scriptScore.parent.addEventListener('click', function(e:MouseEvent) {
					this.activate(scriptScore);
					e.stopPropagation();
				});
				
				Browser.document.body.addEventListener('click', function(e:MouseEvent) {
					this.activate(null);
					trace('body');
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
				scScore.parent.classList.add('nx-active');
				
				Wav16PartsBuilder.getInstance().getScoreWav16Async(scScore.nscore, scScore.tempo, scScore.sounds).handle(function(wav16) {
					 Wav16SoundManager.getInstance().initSound(wav16, playCallback, scriptScore.id + scScore.tempo + Std.string(scScore.sounds));
				});
				
			} else {
				scScore.parent.classList.remove('nx-active');
			}
		}
	}
	
	function play(scScore:ScriptScore) {
		this.activate(scScore);
		trace('play ' + scScore.id);
		
				var nscore:NScore = scScore.nscore;
				var tempo:Int = scScore.tempo;
				var sounds:Array<String> = scScore.sounds;
		
				Wav16PartsBuilder.getInstance().getScoreWav16Async(scScore.nscore, scScore.tempo, scScore.sounds).handle(function(wav16) {
					trace('FINISHED nscore1');
					 Wav16SoundManager.getInstance().initSound(wav16, playCallback, scScore.id + scScore.tempo + Std.string(scScore.sounds));
					 //this.drawingTools.drawColumnFromTime(0);
					 Wav16SoundManager.getInstance().start(0);										
				});				
	}
	
	public function render(width:Int) {
		for (scScore in this.scScores) {
			scScore.render(width);
		}
	}
	
	function playCallback(key:String, pos:Float):Void {
		if (this.activeScriptScore == null) return;
		
		this.activeScriptScore.drawingtools.drawColumnFromTime(pos);	
		
		var label = this.activeScriptScore.labelTime;
		label.textContent = Std.string(pos).substr(0, 5);
		
	}		
	
	
	
}