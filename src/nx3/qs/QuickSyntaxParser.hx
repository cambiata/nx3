package nx3.qs;

import nx3.ENoteVal;
import nx3.ESign;
import nx3.qs.BarParser;
import nx3.qs.QuickSyntaxParser;
import nx3.qs.QuickSyntaxParser.ContentMode;
import nx3.qs.ModeParser;
import nx3.NHead;
import nx3.NNote;
import nx3.qs.QSyntaxNotes;
using StringTools;
/**
 * ...
 * @author Jonas Nyström
 */
class QuickSyntaxParser
{
	var str:String;
	var tokens:Array<String>;
	var qsnotes:QSyntaxNotes;
	
	/*
	var barIndex:Int;
	var partIndex:Int;
	var voiceIndex:Int;
	var modefunctions:Map < String, Void->Void > ;
	var contentmodeOctave:Int;
	//var contentmode:ContentMode;
	var notefunctions:Map < String, String->String> ;
	//public var nnotes:Array<NNote>;
	*/
	
	var modeparser:ModeParser;
	var barparser:BarParser;
	var noteparser:NoteParser;
	
	
	public function new(str:String) 
	{
		this.str = str.trim().replace('  ', ' ').replace('  ', ' ').replace('  ', ' ');
		this.tokens = parseTokens(this.str);
		
		/*
		this.modefunctions = new Map < String, Void->Void> ();
		this.notefunctions= new Map < String, String->String> ();
		this.barIndex = 0;
		this.partIndex = 0;
		this.voiceIndex = 0;
		this.contentmodeOctave = 0;
		this.contentmode = ContentMode.Notes(contentmodeOctave);
		*/
		
		this.qsnotes = new QSyntaxNotes();
		
		this.modeparser = new ModeParser(this);
		this.barparser = new BarParser(this);
		this.noteparser = new NoteParser(this);
		
		this.modeparser.sendEvent(ParserEvents.SetOctave(123));
		
	}
	
	public function parseToQSyntaxNotes():QSyntaxNotes
	{
		for (token in this.tokens)
		{
			//trace('TOKEN >$token<');
			
			var testtoken = token;			
			testtoken = this.modeparser.parse(token, this);
			if (testtoken == '') continue;
			testtoken = this.barparser.parse(token, this);
			if (testtoken == '') continue;			
			testtoken = this.noteparser.parse(token, this);
			if (testtoken == '') continue;
		}
		return this.qsnotes;
	}
	
	function parseTokens(str:String) :Array<String>
	{
		var result:Array<String> = [];
		result = str.split(' ');
		return result;
	}
	
	public function addNote(nnote:NNote, ?bpvIndex:QSyntaxBPV=null)
	{
		if (bpvIndex == null)  bpvIndex = this.barparser.getBpvIndex();
		
		var bpvString = QSyntaxTools.bpvToString(bpvIndex);
		
		 if (! this.qsnotes.exists(bpvString)) this.qsnotes.set(bpvString, new NNotes());
		 this.qsnotes.get(bpvString).push(nnote);
		 
		 //trace(['Note added to ', bpvIndex.barIndex, bpvIndex.partIndex, bpvIndex.voiceIndex, nnote]);
	 }
	 
	 public function passEvent(event:ParserEvents)
	 {
		 this.modeparser.recieveEvent(event);
		 this.barparser.recieveEvent(event);
		 this.noteparser.recieveEvent(event);
	 }
}



//typedef BPVIndex = { barIndex:Int, partIndex:Int, voiceIndex:Int };

enum ContentMode 
{
	Notes(octave:Int);
	Tpls;
	Lyrics;
}







