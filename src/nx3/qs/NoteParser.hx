package nx3.qs;
import cx.ArrayTools;
import nx3.EDirectionUAD;
import nx3.EDirectionUD;
import nx3.ENoteType;
import nx3.ENoteVal;
import nx3.ESign;
import nx3.ETie;
import nx3.NHead;
import nx3.NNote;
using StringTools;
using cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */
class NoteParser extends BaseParser
{
	var notelevels:Array<Int>;
	var notevalue:ENoteVal;
	var notesigns:Array<ESign>;		
	var prevlevels:Array<Int>;
	var prevvalue:ENoteVal;
	var prevsigns:Array<ESign>;		
	
	var clefAdjust:Int;
	var octAdjust: Int;
	var pause:Bool;
	var pauselevel:Int;
	var prevlevel:Int;
	var tie:Bool;
	
	var guessOctave = false;
	
	public function new(parser:QuickSyntaxParser)
	{
		super(parser);

		this.notelevels = [];
		this.notesigns = [];
		this.notevalue = null;
		
		this.prevlevel = 3;
		this.prevlevels = [3];
		this.prevsigns = [ESign.None];
		this.prevvalue = ENoteVal.Nv4;
		
		this.clefAdjust = 0;
		this.octAdjust = 0;
		
		this.pause = false;
		this.pauselevel = 0;
		this.tie = false;
	}

	override public function createFunctions()
	{
		
		
		this.functions.set('c#', function (token:String) {this.pushNotelevel(6); this.notesigns.push(ESign.Sharp); return token.substr(2); });
		this.functions.set('cB', function (token:String) {	this.pushNotelevel(6);	this.notesigns.push(ESign.Flat);	return token.substr(2);});
		this.functions.set('cN', function (token:String) {	this.pushNotelevel(6);	this.notesigns.push(ESign.Natural);	return token.substr(2);});
		this.functions.set('c', function (token:String) {	this.pushNotelevel(6);this.notesigns.push(ESign.None);	return token.substr(1);});		

		this.functions.set('d#', function (token:String) {	this.pushNotelevel(5);	this.notesigns.push(ESign.Sharp);	return token.substr(2);});
		this.functions.set('dB', function (token:String) {	this.pushNotelevel(5);	this.notesigns.push(ESign.Flat);	return token.substr(2);});
		this.functions.set('dN', function (token:String) {	this.pushNotelevel(5);	this.notesigns.push(ESign.Natural);	return token.substr(2);});
		this.functions.set('d', function (token:String) {	this.pushNotelevel(5);	this.notesigns.push(ESign.None);	return token.substr(1);});		
		
		this.functions.set('e#', function (token:String) {	this.pushNotelevel(4);	this.notesigns.push(ESign.Sharp);	return token.substr(2);});
		this.functions.set('eB', function (token:String) {	this.pushNotelevel(4);	this.notesigns.push(ESign.Flat);	return token.substr(2);});
		this.functions.set('eN', function (token:String) {	this.pushNotelevel(4);	this.notesigns.push(ESign.Natural);	return token.substr(2);});
		this.functions.set('e', function (token:String) {	this.pushNotelevel(4);	this.notesigns.push(ESign.None);	return token.substr(1);});			
		
		this.functions.set('f#', function (token:String) {this.pushNotelevel(3);	this.notesigns.push(ESign.Sharp);	return token.substr(2);});
		this.functions.set('fB', function (token:String) {	this.pushNotelevel(3);	this.notesigns.push(ESign.Flat);	return token.substr(2);});
		this.functions.set('fN', function (token:String) {	this.pushNotelevel(3);	this.notesigns.push(ESign.Natural);	return token.substr(2);});
		this.functions.set('f', function (token:String) {	this.pushNotelevel(3);	this.notesigns.push(ESign.None);	return token.substr(1);});			
		
		this.functions.set('g#', function (token:String) {this.pushNotelevel(2);	this.notesigns.push(ESign.Sharp);return token.substr(2);	});
		this.functions.set('gB', function (token:String) {	this.pushNotelevel(2);	this.notesigns.push(ESign.Flat);	return token.substr(2);});
		this.functions.set('gN', function (token:String) {this.pushNotelevel(2);	this.notesigns.push(ESign.Natural);	return token.substr(2);});
		this.functions.set('g', function (token:String) {	this.pushNotelevel(2);	this.notesigns.push(ESign.None);	return token.substr(1);});			
		
		this.functions.set('a#', function (token:String) {	this.pushNotelevel(1);	this.notesigns.push(ESign.Sharp);	return token.substr(2);});
		this.functions.set('aB', function (token:String) {	this.pushNotelevel(1);	this.notesigns.push(ESign.Flat);	return token.substr(2);});
		this.functions.set('aN', function (token:String) {	this.pushNotelevel(1);	this.notesigns.push(ESign.Natural);	return token.substr(2);});
		this.functions.set('a', function (token:String) {	this.pushNotelevel(1);	this.notesigns.push(ESign.None);	return token.substr(1);});			
		
		this.functions.set('b#', function (token:String) {	this.pushNotelevel(0);	this.notesigns.push(ESign.Sharp);	return token.substr(2);});
		this.functions.set('bB', function (token:String) {	this.pushNotelevel(0);	this.notesigns.push(ESign.Flat);	return token.substr(2);});
		this.functions.set('bN', function (token:String) {	this.pushNotelevel(0);	this.notesigns.push(ESign.Natural);	return token.substr(2);});
		this.functions.set('b', function (token:String) {	this.pushNotelevel(0);	this.notesigns.push(ESign.None);	return token.substr(1);});			
		
		this.functions.set('1.', function (token:String) {	this.notevalue = ENoteVal.Nv1dot;	return token.substr(2);});		
		this.functions.set('1', function (token:String) {	this.notevalue = ENoteVal.Nv1;	return token.substr(1);});		
		this.functions.set('2.', function (token:String) {	this.notevalue = ENoteVal.Nv2dot;	return token.substr(2);});		
		this.functions.set('2', function (token:String) {	this.notevalue = ENoteVal.Nv2;	return token.substr(1);});		
		this.functions.set('4.', function (token:String) {	this.notevalue = ENoteVal.Nv4dot;	return token.substr(2);});		
		this.functions.set('4', function (token:String) {	this.notevalue = ENoteVal.Nv4;	return token.substr(1);});
		this.functions.set('8.', function (token:String) {	this.notevalue = ENoteVal.Nv8dot;	return token.substr(2);});		
		this.functions.set('8', function (token:String) {	this.notevalue = ENoteVal.Nv8;	return token.substr(1);});		
		this.functions.set('16.', function (token:String) {	this.notevalue = ENoteVal.Nv16dot;	return token.substr(3);});		
		this.functions.set('16', function (token:String) {	this.notevalue = ENoteVal.Nv16;	return token.substr(2);});		
		
		this.functions.set('_', function (token:String) {	this.tie = true;	return token.substr(1);});				
		
		this.functions.set('=', function (token:String) {	this.prevlevel = 3;  this.octAdjust = 0;	return token.substr(1); } );		
		this.functions.set('+', function (token:String) {	this.prevlevel = -4;  this.octAdjust = -7;	return token.substr(1); } );		
		this.functions.set('++', function (token:String) {	this.prevlevel = -11;  this.octAdjust = -14;	return token.substr(2); } );		
		this.functions.set('-', function (token:String) {	this.prevlevel = 10;  this.octAdjust = 7;	return token.substr(1); } );		
		this.functions.set('--', function (token:String) {	this.prevlevel = 17;  this.octAdjust = 14;	return token.substr(2); } );		
		
		this.functions.set('p', function (token:String) {	this.pause = true;	 this.pauselevel = 0;  return token.substr(1); } );		
		this.functions.set('p+', function (token:String) {	this.pause = true;	this.pauselevel = -1; return token.substr(2); } );		
		this.functions.set('p-', function (token:String) {	this.pause = true;	this.pauselevel = 1; return token.substr(2); } );		
		
		//this.functions.set("$guess", function (token:String) {	this.guessOctave=true; return token.substr(6); } );		
		
	}	
	
	
	function pushNotelevel(value:Int)
	{
		if (guessOctave)
		{
			var delta = value + this.octAdjust - this.prevlevel;
			trace([value + this.octAdjust, this.prevlevel, value + this.octAdjust - this.prevlevel]);		
			if (delta >= 4) this.octAdjust = this.octAdjust - 7;
			if (delta <= -4) this.octAdjust = this.octAdjust + 7;
		}
		this.notelevels.push(value);
	}
	

	override private function tokenFinished(originaltoken:String) 
	{
		if (Lambda.has(['+', '++', '-', '--', '='], originaltoken)) return;
		
		if (this.notelevels.length < 1) this.notelevels = this.prevlevels.copy();
		if (this.notesigns.length < 1)  this.notesigns = this.prevsigns.copy();
		if (this.notevalue == null) this.notevalue = this.prevvalue;

		var val = this.notevalue;
		var nnote:NNote = null;
		
		if (this.pause) 
		{
			nnote = new NNote(ENoteType.Pause(this.pauselevel), val);
			this.pause = false;
		}
		else
		{			
			var nheads:Array<NHead> = [];
			for (i in 0...this.notelevels.length)
			{
				var level = this.notelevels[i] + this.octAdjust + this.clefAdjust;
				var sign = this.notesigns[i];
				var tie = (this.tie) ? ETie.Tie(EDirectionUAD.Auto, 0) : null;
				nheads.push(new NHead(level, sign, tie));
				this.prevlevel = level;
			}
			nnote = new NNote(nheads, val);
			
		}
		
		this.builder.addNote(nnote);
		this.prevlevels = this.notelevels.copy();
		this.prevsigns = this.notesigns.copy();
		this.prevvalue = this.notevalue;
		
		this.notelevels = [];
		this.notesigns = [];
		this.notevalue = null;
		this.tie = false;
	}
	
	override public function recieveEvent(event:ParserEvents) 
	{
		//trace('RECIEVED EVENT by NoteParser ' + event);
		switch event
		{
			case ParserEvents.SetOctave(octave):
				this.octAdjust = octave;
			case ParserEvents.SetNoteVal(val):
				this.notevalue = val;
			case ParserEvents.SetGuessOctave(mode):
				this.guessOctave = mode;
			default: 
		}
	}
	
	
	
}