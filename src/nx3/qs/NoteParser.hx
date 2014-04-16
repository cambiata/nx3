package nx3.qs;
import nx3.ENoteVal;
import nx3.ESign;
import nx3.NHead;
import nx3.NNote;

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
	
	public function new(parser:QuickSyntaxParser)
	{
		super(parser);

		this.notelevels = [];
		this.notesigns = [];
		this.notevalue = null;
		
		this.prevlevels = [0];
		this.prevsigns = [ESign.None];
		this.prevvalue = ENoteVal.Nv4;
	}
	
	override public function createFunctions()
	{
		this.functions.set('ciss', function (token:String) {
			this.notelevels.push(6);
			this.notesigns.push(ESign.Sharp);
			return token.substr(4);
		});

		this.functions.set('cess', function (token:String) {
			this.notelevels.push(6);
			this.notesigns.push(ESign.Flat);
			return token.substr(4);
		});
		
		this.functions.set('cnat', function (token:String) {
			this.notelevels.push(6);
			this.notesigns.push(ESign.Natural);
			return token.substr(4);
		});

		this.functions.set('c', function (token:String) {
			this.notelevels.push(6);
			this.notesigns.push(ESign.None);
			return token.substr(1);
		});		

		this.functions.set('diss', function (token:String) {
			this.notelevels.push(5);
			this.notesigns.push(ESign.Sharp);
			return token.substr(4);
		});

		this.functions.set('dess', function (token:String) {
			this.notelevels.push(5);
			this.notesigns.push(ESign.Flat);
			return token.substr(4);
		});
		
		this.functions.set('dnat', function (token:String) {
			this.notelevels.push(5);
			this.notesigns.push(ESign.Natural);
			return token.substr(4);
		});

		this.functions.set('d', function (token:String) {
			this.notelevels.push(5);
			this.notesigns.push(ESign.None);
			return token.substr(1);
		});		

		//-------------------------
		
		this.functions.set('eiss', function (token:String) {
			this.notelevels.push(4);
			this.notesigns.push(ESign.Sharp);
			return token.substr(4);
		});

		this.functions.set('ess', function (token:String) {
			this.notelevels.push(4);
			this.notesigns.push(ESign.Flat);
			return token.substr(3);
		});
		
		this.functions.set('enat', function (token:String) {
			this.notelevels.push(4);
			this.notesigns.push(ESign.Natural);
			return token.substr(4);
		});

		this.functions.set('e', function (token:String) {
			this.notelevels.push(4);
			this.notesigns.push(ESign.None);
			return token.substr(1);
		});			
		
		//-------------------------
		
		this.functions.set('fiss', function (token:String) {
			this.notelevels.push(3);
			this.notesigns.push(ESign.Sharp);
			return token.substr(4);
		});

		this.functions.set('fess', function (token:String) {
			this.notelevels.push(3);
			this.notesigns.push(ESign.Flat);
			return token.substr(4);
		});
		
		this.functions.set('fnat', function (token:String) {
			this.notelevels.push(3);
			this.notesigns.push(ESign.Natural);
			return token.substr(4);
		});

		this.functions.set('f', function (token:String) {
			this.notelevels.push(3);
			this.notesigns.push(ESign.None);
			return token.substr(1);
		});			
		
		//-------------------------
		
		this.functions.set('giss', function (token:String) {
			this.notelevels.push(2);
			this.notesigns.push(ESign.Sharp);
			return token.substr(4);
		});

		this.functions.set('gess', function (token:String) {
			this.notelevels.push(2);
			this.notesigns.push(ESign.Flat);
			return token.substr(4);
		});
		
		this.functions.set('gnat', function (token:String) {
			this.notelevels.push(2);
			this.notesigns.push(ESign.Natural);
			return token.substr(4);
		});

		this.functions.set('g', function (token:String) {
			this.notelevels.push(2);
			this.notesigns.push(ESign.None);
			return token.substr(1);
		});			
				
		//-------------------------
		
		this.functions.set('aiss', function (token:String) {
			this.notelevels.push(1);
			this.notesigns.push(ESign.Sharp);
			return token.substr(4);
		});

		this.functions.set('ass', function (token:String) {
			this.notelevels.push(1);
			this.notesigns.push(ESign.Flat);
			return token.substr(3);
		});
		
		this.functions.set('anat', function (token:String) {
			this.notelevels.push(1);
			this.notesigns.push(ESign.Natural);
			return token.substr(4);
		});

		this.functions.set('a', function (token:String) {
			this.notelevels.push(1);
			this.notesigns.push(ESign.None);
			return token.substr(1);
		});			
				
		//-------------------------
		
		this.functions.set('biss', function (token:String) {
			this.notelevels.push(0);
			this.notesigns.push(ESign.Sharp);
			return token.substr(4);
		});

		this.functions.set('bess', function (token:String) {
			this.notelevels.push(0);
			this.notesigns.push(ESign.Flat);
			return token.substr(4);
		});
		
		this.functions.set('bnat', function (token:String) {
			this.notelevels.push(0);
			this.notesigns.push(ESign.Natural);
			return token.substr(4);
		});

		this.functions.set('b', function (token:String) {
			this.notelevels.push(0);
			this.notesigns.push(ESign.None);
			return token.substr(1);
		});			
				
		
		
		this.functions.set('2.', function (token:String) {
			this.notevalue = ENoteVal.Nv2dot;
			return token.substr(2);
		});		
		
		this.functions.set('2', function (token:String) {
			this.notevalue = ENoteVal.Nv2;
			return token.substr(1);
		});		
		
		this.functions.set('4.', function (token:String) {
			this.notevalue = ENoteVal.Nv4dot;
			return token.substr(2);
		});		
		
		this.functions.set('4', function (token:String) {
			this.notevalue = ENoteVal.Nv4;
			return token.substr(1);
		});
		
		this.functions.set('8.', function (token:String) {
			this.notevalue = ENoteVal.Nv8dot;
			return token.substr(2);
		});		
		
		this.functions.set('8', function (token:String) {
			this.notevalue = ENoteVal.Nv8;
			return token.substr(1);
		});		
		
		this.functions.set('^', function (token:String) {
			trace('handle octave up...');
			return token.substr(1);
		});		

		this.functions.set('v', function (token:String) {
			trace('handle octave down...');
			return token.substr(1);
		});		
	}	

	override private function tokenFinished() 
	{
		//trace('Not is taken care of');
		
		if (this.notelevels.length < 1) this.notelevels = this.prevlevels.copy();
		if (this.notesigns.length < 1)  this.notesigns = this.prevsigns.copy();
		if (this.notevalue == null) this.notevalue = this.prevvalue;

		var val = this.notevalue;
		var nheads:Array<NHead> = [];
		for (i in 0...this.notelevels.length)
		{
			var level = this.notelevels[i];
			var sign = this.notesigns[i];
			nheads.push(new NHead(level, sign));
		}
		var nnote = new NNote(nheads, val);
		this.builder.addNote(nnote);
		this.prevlevels = this.notelevels.copy();
		this.prevsigns = this.notesigns.copy();
		this.prevvalue = this.notevalue;
		
		this.notelevels = [];
		this.notesigns = [];
		this.notevalue = null;
		
	}
	
	
}