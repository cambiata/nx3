package nx3.qs;
import nx3.EClef;
import nx3.EDirectionUAD;
import nx3.EKey;
import nx3.ELyricContinuation;
import nx3.ENoteType;
import nx3.EPartType;
import nx3.ESign;
import nx3.ETie;
import nx3.NNote;
import nx3.NPart;
import nx3.qs.QSParser.QSBars;
import nx3.xml.ScoreXML;
import thx.core.Arrays;
using StringTools;
using QSParser.StrTools;
using QSParser.ArrTools;


class QSExamples {
	static public function run() {
		var nscore = new QSParser('#test |C /Gbbb %up c d e16 f g a ').parse();
		//var nscore = new QSParser('c c').parse();
		//new QSParser('#test a+16 2a-,b a+,b-,cN8 ').parse();
		//new QSParser('#test 4a,b 8 16 | b b b').parse();
		//new QSParser('c2_,d pu d /F c /C c').parse();
		//new QSParser('/tpl 1 2 3 y t r').parse();
		//var nscore = new QSParser('/lyr Hej- san hopp- san.').parse();
		//new QSParser('c d e f g a ').parse();
		//new QSParser('c d e % f g a ').parse();
		//new QSParser('c d e % f g a / a b c ').parse();
		//new QSParser('a | a').parse();
		//new QSParser('a a a / b b b | a / b ').parse();
		//new QSParser('a % b | a  ').parse();
		//new QSParser('a % b / a | a / b % c  ').parse();
		//new QSParser('a aa % b bb / a | a aa / b bb % c cc  ').parse();
		
		trace(ScoreXML.toXml(nscore).toString());
	}
}



enum Qs1 {
	S(s:String);
	B(s:String);
	P(s:String);
	V(s:String);
	N(s:String);
}

class QSParser {
	var str:String;
	var tokens:Array<Qs1>;
	
	var barGlobals:BarGlobals;
	var partGlobals:PartGlobals;
	var voiceGlobals:VoiceGlobals;
	var noteGlobals:NoteGlobals;

	var barIdx:Int = -1;
	var partIdx:Int = -1;
	var voiceIdx:Int = -1;
	var noteIdx:Int = 0;
	
	public function new(str:String) {
		init();
		this.str = str;
	}
	
	public function init() {
		
	}
	
	public function initBarGlobals(s:String ) {
		this.barGlobals = { time:null };
		if (s.has('2/8')) this.barGlobals.time = ETime.Time2_8;
		if (s.has('3/8')) this.barGlobals.time = ETime.Time3_8;
		if (s.has('4/8')) this.barGlobals.time = ETime.Time4_8;
		if (s.has('5/8')) this.barGlobals.time = ETime.Time5_8;
		if (s.has('6/8')) this.barGlobals.time = ETime.Time6_8;
		
		if (s.has('2/4')) this.barGlobals.time = ETime.Time2_4;
		if (s.has('3/4')) this.barGlobals.time = ETime.Time3_4;
		if (s.has('4/4')) this.barGlobals.time = ETime.Time4_4;
		if (s.has('5/4')) this.barGlobals.time = ETime.Time5_4;
		if (s.has('6/4')) this.barGlobals.time = ETime.Time6_4;
		
		if (s.has('C')) this.barGlobals.time = ETime.TimeCommon;
		if (s.has('c')) this.barGlobals.time = ETime.TimeAllabreve;
		
	}
	
	public function initPartGlobals(s:String) {
		this.partGlobals = { clef:null, key:null, type:null };
		this.partGlobals.clef = getPartClef(s);
		this.partGlobals.key = getPartKey(s);
		
		if (s.has('tpl')) this.partGlobals.type = EPartType.Tplchain(EModus.Major, EOctave.Normal);
		if (s.has('tpr')) this.partGlobals.type = EPartType.Tplrow(EModus.Major, EOctave.Normal);
		if (s.has('lyr')) this.partGlobals.type = EPartType.Lyrics;
	}
	
	public function initVoiceGlobals(s:String) {
		this.voiceGlobals = { dir:EDirectionUAD.Auto };
		if (s.has('u')) this.voiceGlobals.dir = EDirectionUAD.Up;
		if (s.has('d')) this.voiceGlobals.dir = EDirectionUAD.Down;
	}
	
	public function initNoteGlobals() this.noteGlobals = { value: ENoteVal.Nv4, levels:[0] };
	
	public function parse() {
		init();
		this.tokens = this.getTokens(this.str);
		var matrix = createMatrix(this.tokens);
		this.checkParts(matrix);
		// trace(matrix);
		var nscore = this.createNScore(matrix);
		// trace(ScoreXML.toXml(nscore).toString());
		return nscore;
	}
	
	
	function createNScore(matrix:QSBars) :NScore
	{
		var notecounter = 0;
		var bars:NBars = [];
		for (ib in matrix) {
			this.initBarGlobals(ib.bar);
			
			var parts:NParts = [];
			for (ip in ib.parts) {
				this.initPartGlobals(ip.part);

				var voices:NVoices = [];
				for (iv in ip.voices) {
					this.initVoiceGlobals(iv.voice);
					
					
					var notes:NNotes = [];
					this.initNoteGlobals();
					for (ni in iv.notes) {
						notes.push(createNNote(ni));
					}
					voices.push(createVoice(iv.voice, notes));
				}
				parts.push(createPart(ip.part, voices));
			}
			bars.push(createBar(ib.bar, parts));
		}
		var score = new NScore(bars);
		
		return score;
	}
	
	function createBar(s:String, parts:NParts) {
		return new NBar(parts, this.barGlobals.time);
	}
	
	function getPartClef(s:String) :EClef {
		if (s.has('F')) return EClef.ClefF;
		if (s.has('C')) return EClef.ClefC;
		return EClef.ClefG;
	}
	
	function getPartKey(s:String): EKey {
		if (s.has('bbb')) return EKey.Flat3;
		if (s.has('bb')) return EKey.Flat2;
		if (s.has('b')) return EKey.Flat1;
		if (s.has('n')) return EKey.Natural;
		if (s.has('###')) return EKey.Sharp3;
		if (s.has('##')) return EKey.Sharp2;
		if (s.has('#')) return EKey.Sharp1;
		return EKey.Natural;
	}
	
	function createPart(s:String, voices:NVoices) {
		return new NPart(voices, this.partGlobals.type, this.partGlobals.clef, this.partGlobals.key);
	}
	
	function createVoice(s:String, notes:NNotes): NVoice {
		return new NVoice(notes, null, this.voiceGlobals.dir);
	}
	
	function createNNoteLyrics(s:String): NNote {
		var cont:ELyricContinuation = null;
		if (s.has('-')) {
			cont = ELyricContinuation.Hyphen;
			s = s.replace('-', '');
		}
		var text = s;
		return new NNote(ENoteType.Lyric(s, null, cont), this.noteGlobals.value);
	}
	
	function createNNoteTpl(s:String): NNote {

		var level = 0;
		
		if (s.has('x')) level = 6;
		if (s.has('c')) level = 5;
		if (s.has('v')) level = 4;
		if (s.has('b')) level = 3;
		if (s.has('n')) level = 2;
		if (s.has('m')) level = 1;
		if (s.has('a')) level = 0;
		if (s.has('s')) level = -1;
		if (s.has('d')) level = -2;
		if (s.has('f')) level = -3;
		if (s.has('g')) level = -4;
		if (s.has('h')) level = -5;
		if (s.has('j')) level = -6;
		if (s.has('q')) level = -7;
		if (s.has('w')) level = -8;
		if (s.has('e')) level = -9;
		if (s.has('r')) level = -10;
		
		var sign:ESign = null;
		if (s.has('+')) sign = ESign.Sharp;
		if (s.has('+')) sign = ESign.Flat;
		
		return new NNote(ENoteType.Tpl(level, sign, false), this.noteGlobals.value);
	}
	
	
	function createNNoteNormal(s:String): NNote {
		var hs = s.split(',');
		var heads:NHeads = [];
		for (h in hs) {
			var level = 0;

			if (h.has('F')) level = -4;
			if (h.has('E')) level = -3; 
			if (h.has('D')) level = -2; 
			if (h.has('C')) level = -1;
			
			if (h.has('b')) level = 0; 
			if (h.has('a')) level = 1; 
			if (h.has('g')) level = 2; 
			if (h.has('f')) level = 3; 
			if (h.has('e')) level = 4; 
			if (h.has('d')) level = 5; 
			if (h.has('c')) level = 6;

			if (h.has('B')) level = 7; 
			if (h.has('A')) level = 8; 
			if (h.has('G')) level = 9; 
			
			if (h.has('`')) level += 7;
			if (h.has('´')) level -= 7;
			
			level = switch this.partGlobals.clef {
				case EClef.ClefC : level - 6;
				case EClef.ClefF : level - 5;
				case _: level; // EClef.ClefC
			}
			
			var sign = ESign.None;
			if (h.has('+')) sign = ESign.Sharp;
			if (h.has('-')) sign = ESign.Flat;
			if (h.has('n')) sign = ESign.Natural;
			if (h.has('N')) sign = ESign.Natural;
			
			var tie:ETie = null;
			if (h.has('_')) tie = ETie.Tie(EDirectionUAD.Auto, 0);
			
			heads.push(new NHead(level, sign, tie));
		}
		
		// trace( 'skapa note ' + heads + this.noteGlobals.value);
		
		if (s.has('p')) {
			var pauselevel = 0;
			if (s.has('u')) pauselevel = -1;
			if (s.has('uu')) pauselevel = -2;
			if (s.has('d')) pauselevel = 1;
			if (s.has('dd')) pauselevel = 2;
				
			return new NNote(ENoteType.Pause(pauselevel), this.noteGlobals.value);
		}
		
		return new NNote(heads, this.noteGlobals.value);		
	}
	
	function createNNote(s:String) :NNote {
		
		
		if (s.has('16')) { this.noteGlobals.value = ENoteVal.Nv16; s = s.replace('16', ''); }
		if (s.has('8.')) { this.noteGlobals.value = ENoteVal.Nv8dot; s = s.replace('8.', ''); }
		if (s.has('8')) { this.noteGlobals.value = ENoteVal.Nv8; s = s.replace('8', ''); }
		if (s.has('4.')) { this.noteGlobals.value = ENoteVal.Nv4dot; s = s.replace('4.', ''); }
		if (s.has('4')) { this.noteGlobals.value = ENoteVal.Nv4; s = s.replace('4', ''); }
		if (s.has('2.')) { this.noteGlobals.value = ENoteVal.Nv2dot; s = s.replace('2.', ''); }
		if (s.has('2')) { this.noteGlobals.value = ENoteVal.Nv2; s = s.replace('2', ''); }
		if (s.has('1.')) { this.noteGlobals.value = ENoteVal.Nv1dot; s = s.replace('1.', ''); }
		if (s.has('1')) { this.noteGlobals.value = ENoteVal.Nv1; s = s.replace('1', ''); }
		
		var nnote:NNote = null ;
		if (this.partGlobals.type != null) {
			nnote = switch this.partGlobals.type {
				case EPartType.Tplchain(modus, octave): createNNoteTpl(s);
				case EPartType.Tplrow(modus, octave): createNNoteTpl(s);
				case EPartType.Lyrics: createNNoteLyrics(s);
				case _: null;
			}
		} 
		if (nnote == null) nnote = createNNoteNormal(s);
		
		return nnote;
	}
	
	public function getTokens(str:String):Array<Qs1> {
		var a = this.str.trim().split(' ');
		var tokens = [];
		for (sub in a) {
			var token = switch (sub.charAt(0)) {
				case '#':Qs1.S(sub.substr(1));
				case '|':Qs1.B(sub.substr(1));
				case '/':Qs1.P(sub.substr(1));
				case '%':Qs1.V(sub.substr(1));
				case _: {
					if (sub.startsWith(',')) sub = sub.substr(1);
					if (sub.endsWith(',')) sub = sub.substring(0, sub.length - 1);
					if (sub == '') return null;
					Qs1.N(sub);
				}
			}
			
			if (token != null) {
				tokens.push(token);
			}
		}
		// trace(tokens);
		return tokens;
	}
	
	function checkParts(matrix:QSBars) {
		
		var firstLenght = matrix[0].parts.length;
		
		for (b in matrix) {
			var partLength = b.parts.length;
			if (partLength != firstLenght) {
				throw ('Inconsistent part numbers: $firstLenght $partLength $str');
				return false;
			}
		}
		return true;
	}
	
	function createMatrix(tokens:Array<Qs1>):QSBars {

		function addMissingParts(matrix:QSBars) {
			if (matrix.length == 0) {
				matrixAddBar(matrix);
				this.barIdx = 0;
			}
			while (matrix[this.barIdx].parts.length < this.partIdx + 1) matrix[this.barIdx].parts.push( {part:'ppp', voices:[{voice:'vvv', notes:[]}] } );
		}
		
		function addMissingVoices(matrix:QSBars) {
			while (matrix[this.barIdx].parts[this.partIdx].voices.length < this.voiceIdx+1) matrix[this.barIdx].parts[this.partIdx].voices.push({voice:'vvvv', notes:[]});
		}
		
		var matrix:QSBars= [];
		
		for (t in tokens) {
			
			switch t {
				case Qs1.S(s):
					// trace('Score: $s');
				
				case Qs1.B(s):
					this.barIdx++;
					this.matrixAddBar(matrix);
					this.partIdx = -1;
					this.voiceIdx = -1;
					this.noteIdx = 0;
					matrix[this.barIdx].bar = s;
				case Qs1.P(s):
					this.partIdx++;
					this.voiceIdx = -1;
					this.noteIdx = 0;
					//addMissingBars(matrix);
					addMissingParts(matrix);
					matrix[this.barIdx].parts[this.partIdx].part = s;
				case Qs1.V(s):
					this.voiceIdx++;
					this.noteIdx = 0;
					addMissingVoices(matrix);
					matrix[this.barIdx].parts[this.partIdx].voices[this.voiceIdx].voice = s;
				case Qs1.N(s): {
					// trace('Add note $s');
					
					if (this.barIdx == -1) { this.barIdx = 0; this.matrixAddBar(matrix);}
					if (this.partIdx == -1) this.partIdx = 0;
					addMissingParts(matrix);
					if (this.voiceIdx == -1) this.voiceIdx = 0;
					addMissingVoices(matrix);
					matrix[this.barIdx].parts[this.partIdx].voices[this.voiceIdx].notes.push(s);
					this.noteIdx++;
				}
			}
		}
		
		while (matrix.last().parts.last().voices.last().notes.length == 0) {
			trace('pop');
			matrix.pop();
		}
		
		
		
		return matrix;
	}
	

	function matrixAddBar(matrix:QSBars, bar:String = '-') {
		var qsbar:QSBar = {bar:bar, parts:[{part:'pp', voices:[ {voice:'vv', notes:[]} ] }]}
		matrix.push(qsbar );	
	}	
	
	function resetBar() this.barGlobals = {  time:ETime.Time4_4 };
	function resetPart() this.partGlobals = { clef:EClef.ClefG, key:EKey.Natural, type:EPartType.Normal };
	function resetVoice() this.voiceGlobals = { dir:EDirectionUAD.Auto };
	
	function traceCurrent(str:String = '') trace('$barIdx:$partIdx:$voiceIdx:$noteIdx : $str');
	
	//var matrix:Array<Array<Array<Array<Dynamic>>>>;'
	
	
}

typedef BarGlobals = { time:ETime };
typedef PartGlobals = { clef:EClef, key:EKey , type:EPartType};
typedef VoiceGlobals = { dir:EDirectionUAD };
typedef NoteGlobals = { value:ENoteVal, levels:Array<Int> };


//typedef QSMatrix2 = Array < { bar:String, parts:Array<{part:String, voices:Array<{voice:String,notes:Array<String>}> }> }>;

typedef QSNote = String;
typedef QSNotes = Array<String>;
typedef QSVoice = { voice:String, notes:QSNotes };
typedef QSVoices = Array <QSVoice>;
typedef QSPart = { part:String, voices:QSVoices };
typedef QSParts = Array<QSPart>;
typedef QSBar = { bar:String, parts:QSParts };
typedef QSBars = Array<QSBar>;

class StrTools {
	public static function has(s:String, needle:String):Bool return s.indexOf(needle) > -1;
}

class ArrTools {
	static public function last<T>(arr:Array<T>) return arr[arr.length - 1];
}