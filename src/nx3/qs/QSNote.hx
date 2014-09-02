package nx3.qs;

import nx3.ENoteType;
import nx3.NHead;
import nx3.NHeads;
import nx3.NNote;
using StringTools;
using cx.StrTools;
using cx.ArrayTools;
 

/* 
 * SNote
 * @author Jonas Nyström
 */

class QSNote extends NNote
{
	var modestr:String;
	var qsstring:String;

	public function new(qsstring:String, mode:QSMode=null) 
	{
		while (qsstring.indexOf(' ') > -1) qsstring.replace(' ', '');
		this.modestr = '';
		this.headstrings = [ ];
		qsstring = qsstring.trim();
		if (qsstring == '') throw "qsString could not be empty ";
		this.qsstring = qsstring;
		this.findModeString();
		this.findHeadstrings();
		
		
		
		var newnote:ENoteType = switch this.mode
		{
			//case Tpl:
			//case Lyric:
				
			default:
				this.createNotePause();
			
			
		}
		
		
		
		/*
		switch mode.contentmode
		{
			case QSContentMode.Lyrics:
				throw "Not yet!";
			case QSContentMode.Tpls:
				throw "Not yet!";
			default:
				//var qstype:ENoteType = ENoteType.Note();				
		}
		*/
		//super(

		super();
	}
	
	function createNotePause() :ENoteType
	{
		var firstheadstring = this.headstrings.first();
		if (firstheadstring.has('p')) return createPause(firstheadstring);
		
		//-------------------------------------------------------------------------------
		var heads = new NHeads();
		for (headstring in this.headstrings)
		{
			var head:NHead = this.createHead(headstring);	
			heads.push(head);
		}
		return ENoteType.Note(heads);
	}
	
	function createHead(str:String):NHead 
	{
		return new NHead(0);
	}

	function createPause(str:String):ENoteType
	{
		var firstheadstring = this.headstrings.first();
		var level = 0;
		if (firstheadstring.has('++')) 
		{
			level = 4;
		} 
		else if (firstheadstring.has('++')) 
		{
			 level = 4;
		}
		else if (firstheadstring.has('+')) 
		{
			level = 2;
		}
		else if (firstheadstring.has('-')) 
		{
			level = -2;
		}
		return ENoteType.Pause(level);
		
		
	}
	
	
	var headstrings:Array<String> = [];
	var mode:QSNotemode;
	function findHeadstrings() 
	{
		var arr = this.qsstring.split(',');
		for (ns in arr)	
		{
			this.headstrings.push(ns.trim());
		}
	}
	
	private function findModeString():Void 
	{
		var arr = this.qsstring.split(':');

		this.mode = QSNotemode.NotePause;
		
		if (arr.length > 1) 
		{
			var modestr = arr.shift();
			this.mode = switch modestr
			{
				case 'lyr': QSNotemode.Lyric;
				case 'tpl': QSNotemode.Tpl;
				default:QSNotemode.NotePause;
			}
			this.qsstring = arr.join(':');
		}
	}
	
	
}

enum QSNotemode
{
	NotePause;
	Lyric;
	Tpl;
	
}