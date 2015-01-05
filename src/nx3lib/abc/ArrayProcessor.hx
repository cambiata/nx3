package nx3lib.abc;
import nx3.ENoteType;
import nx3.ENoteVal;
import nx3.ESign;
import nx3.NHead;
import nx3.NNote;
using StringTools;
using Lambda;
/**
 * ArrayProcessor
 * @author Jonas Nyström
 */
class ArrayProcessor {

	public function new() {}
	
	public function getNx3Notes(abcNotesArray:Array < String>) :Array<NNote>
	{
		// Assets:
		// openfl.Assets.getBitmapData("img/assetname.jpg");
		
		if (! validateAbcArray(abcNotesArray)) {
			//trace('ISNT VALID');
			//throw "AbcArrayProcessor: input array doesn't seem to be valid: " + Std.string(abcNotesArray);
		}
		
		var a = getAdjustedArray(abcNotesArray);
		trace(a);
		
		var slotTokens = getSlotTokens(a);
		trace(slotTokens);
		
		var noteTokens = getNoteTokens(slotTokens);
		trace(noteTokens);
		
		var notes = getNotes(noteTokens);
		trace(notes);
		return notes;
		
	}
	
	
	function validateAbcArray(a:Array<String>):Bool {
	
		return true;
		/*
		for (item in a) {
			var ucItem = item.toUpperCase().trim();
			trace(ucItem);
			if (item == '+') continue;
			var r = ~/[ABCDEFG+]/;
			trace(r.match(ucItem));
			if (! r.match(ucItem)) return false;
		}
		return true;
		*/
	}
	
	
	function getNotes(noteTokens:Array<NoteToken>) :Array<NNote>
	{
		var result : Array<NNote> = [];
		for (token in noteTokens) {
			
			var val = switch token.length {
				case 1: ENoteVal.Nv16;
				case 2: ENoteVal.Nv8;
				case 3: ENoteVal.Nv8dot;
				case 4: ENoteVal.Nv4;
				case _:ENoteVal.Nv2;
			}
			switch token.slot {
				case SlotToken.Sound(level, sign): result.push(new NNote([new NHead(level, sign)], val));
				case SlotToken.Pause: result.push(new NNote(ENoteType.Pause(0), [new NHead(0)], val));
				case _: 				
			}
		}
		return result;
	}
	
	function getNoteTokens(slotTokens:Array<SlotToken>):Array<NoteToken> {
		var noteTokens:Array<NoteToken> = [];
		var currentNoteToken:NoteToken = null;
		var pos = 0;
		for (token in slotTokens) {

			switch token {
				case SlotToken.Pause, SlotToken.Sound: {
					currentNoteToken = { pos:pos, length:1, slot:token };
					noteTokens.push(currentNoteToken);
				}
				case SlotToken.PauseProlong, SlotToken.SoundProlong: currentNoteToken.length++;
			}
			pos++;
		}
		return noteTokens;
	}
	
	function getSlotTokens(a:Array<String>): Array<SlotToken> {
		return a.map(function(tokenStr:String) return getSlotToken(tokenStr));
	}
	
	function getAdjustedArray(a:Array<String>) 
	{
		var result:Array<String> = [];		
		var stillPause = true;
		var i = 0;
		for (s in a) {			
			if (s == '+') {
				
				if (i == 0) {
					result.push((stillPause) ? 'P' : '_');					
				} else {
					result.push((stillPause) ? '=': '_');
				}
				
			} else {
				result.push(s);
				stillPause = false;
			}	
			i++;
		}
		
		var resStr = Std.string(result);
		if(resStr == '[P,=,=,=]') { }
		else if (resStr.startsWith('[P,=,=')) {
			result[2] = 'P';			
		}
		//
		return result;
	}
	
	
	public function getSlotToken(token:String):SlotToken {
		token = token.toUpperCase().trim();
		var noteStr = token.charAt(0);
		var accStr = (token.charAt(1) == 'S' || token.charAt(1) == 'F') ? token.charAt(1) : 'N';
		var octStr = (token.endsWith('LO') || token.endsWith('HI')) ? token.substr( -2) : 'MI';		
		
		//trace([noteStr, accStr, octStr]);		
		
		return switch noteStr {
			case 'P': SlotToken.Pause;
			case  '=': SlotToken.PauseProlong;
			 case '_': SlotToken.SoundProlong;
			case _: {
				var octLevel = switch octStr {
					case 'HI': -7;
					case 'LO': 0;
					case _: 0;
				}
				
				var noteLevel =  octLevel + switch noteStr {
					case 'B': 0;
					case 'A': 1;
					case 'G': 2;
					case 'F': 3;
					case 'E': 4;
					case 'D': 5;
					case 'C': 6;	
					case _:0;
				}
				
				var acc = switch accStr {
					case 'S': ESign.Sharp;
					case 'F': ESign.Flat;
					case _ : ESign.None;
				}
				
				SlotToken.Sound(noteLevel, acc);					
			}
		}

		return null; // shouldn't happen
	}	
}

enum SlotToken {
	Sound(level:Int, sign:ESign);
	SoundProlong;	
	Pause;
	PauseProlong;
}

typedef NoteToken = { pos:Int, length:Int, slot:SlotToken}