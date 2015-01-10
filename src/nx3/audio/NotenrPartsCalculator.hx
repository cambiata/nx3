package nx3.audio;
import cx.ArrayTools;
import haxe.macro.Expr.Position;
import nx3.audio.NotenrPartsCalculator.PartNotesToNotenrCalculator;
import nx3.EKeysTools;
import nx3.ENoteType;
import nx3.NHead;
import nx3.NNote;
import nx3.NPart;
import nx3.NParts;
import nx3.NScore;
import nx3.EClef;
import nx3.EKey;
import nx3.NVoice;
import nx3.QNote.QLyric8;
import nx3.QNote.QNote2;
import nx3.QNote.QNote4;
import nx3.QNote.QNote8;
import nx3.audio.NotenrItem;

using cx.ArrayTools;
using Lambda;

/**
 * NoteMidinrCalculator
 * @author 
 */
class NotenrPartsCalculator 
{
	var parts:NParts;
	var partvalues:Array<Int>;
	var partnr:Int;

	public function new(rowOfParts:nx3.NParts, partnr:Int, partvalues:Array<Int>=null)  {
		//rowOfParts = NotenrTestItems.testTies();
		this.parts = rowOfParts;
		this.partnr = partnr;
		this.partvalues = partvalues;	
	}
	
	public function execute():NotenrItems {
		var partsItems = [];
		var currentclef:nx3.EClef = null;
		var currentkey:nx3.EKey = null;
		
		var prevpart: NPart = null;
		var prevnoteitems: NotenrItems = null;
		var resultnoteitems: NotenrItems = [];
		var partposition = 0;
		var baridx = 0;
		
		for (part in this.parts) {
			if (part.clef != null) currentclef = part.clef;
			if (part.key != null) currentkey = part.key;

			var partvalue = this.partvalues.indexOrNull(baridx);
			var noteitems = new PartNotesToNotenrCalculator(part, this.partnr,  baridx, partvalue, currentclef, currentkey).getNotnrItems();
			
			if (partvalue == null) {
				partvalue = 0;
				Lambda.iter(noteitems, function(item) { partvalue = Std.int(Math.max(partvalue, item.position + item.noteval)); } );
			}			
			
			//var tieditems1 = handleTiesInsidePart(noteitems);			
			//var tieditems2 = handleTiesBetweenParts(tieditems1, prevnoteitems);
			//var 
			
			Lambda.iter(noteitems, function(item) { item.partposition = partposition; } );
			partposition += partvalue;
			resultnoteitems = resultnoteitems.concat(noteitems);
			prevnoteitems = noteitems;
			baridx++;
		}
		//Lambda.iter(resultnoteitems, function(item) trace(item));
		return resultnoteitems;
	}
	
}


typedef TieFound = {
	position:Int,
	noteval:Int,
	notenr: Int,
	level:Int,
	targetpos:Int,
	item: NotenrItem,
	targetItem:NotenrItem,
}



class PartNotesToNotenrCalculator {
	var part:NPart;
	var signstable:Map<Int, ESign>;
	var partkey:EKey;
	var partclef:EClef;
	var barnr:Int;
	var barvalue:Int;
	var partnr:Int;
	
	public function new(part:NPart, partnr:Int, barnr:Int, barvalue:Int, partclef:nx3.EClef=null, partkey:EKey=null) {
		this.part = part;
		this.partnr = partnr;
		this.partclef = partclef;
		this.partkey = partkey;
		this.barnr = barnr;
		this.barvalue = barvalue;
	}

	public function getNotnrItems() {
		var map = getPartPositionsNotes(this.part);
		this.signstable = NotenrTools.getSignsTable(this.partkey);		
		var items = partPositionsToNotenr(map, this.partclef, this.partkey);
		return items;
	}
	
	public function partPositionsToNotenr(map:Map < Int, Array<NNote>>, partclef:nx3.EClef=null, partkey:nx3.EKey=null)
	{
		var result = new NotenrItems(); 
		var positions = ArrayTools.fromHashKeys(map.keys());
		positions.sort(function(a, b) return Reflect.compare(a, b));
		for (position in positions)
		{
			var notes = map.get(position);
			for (note in notes)
			{
				for (head in note)
				{
					var cleflevel = NotenrTools.clefLevel(head.level, partclef);
					var keysign = signstable.get(cleflevel);
					//trace([head.level, cleflevel, keysign]);
					var headsign = head.sign;
					
					var playsign:ESign = switch headsign {
						case ESign.None: keysign;
						case ESign.Natural: headsign;
						case _: headsign;
					}
					
					var notenr = NotenrTools.getSignaffectedNotenr(cleflevel, keysign, headsign);
					var midinr = NotenrTools.getMidinr(notenr);
					var notename = NotenrTools.getNotename(notenr, playsign);
					var tie = head.tie != null;
					var playable = NotenrTools.getPlayable(note);					
					result.push( { note:note, position:position, noteval: ENoteValTools.value(note.value), level:cleflevel, notenr:notenr, midinr:midinr, notename:notename, tie: tie, headsign:headsign, keysign:keysign , playsign:playsign, partposition:0, playable:playable, partnr:this.partnr, barnr:this.barnr, barvalue:barvalue/*, soundlength:0, soundposition:0, barsoundlength:0*/ } );					
					if (headsign != null && headsign != nx3.ESign.None) this.signstable.set(cleflevel, headsign);					
				}
			}
		}
		
		return result;
	}
	
	public function getPartPositionsNotes(part:NPart): Map < Int, Array<NNote>> {
		var result:Map<Int, Array<NNote>> = new Map<Int, Array<NNote>>();
		for (voice in part)
		{
			var pos = 0;
			for (note in voice)
			{
				if (!result.exists(pos)) result.set(pos, []);
				result.get(pos).push(note);
				pos += ENoteValTools.value(note.value);
			}
		}
		return result;
	}
	
}

class TestScores {
	
	static public function score1():NScore {
		
	
		return null;
	}
}



class NotenrTestItems {

	static public function testTies():nx3.NParts {
		var p1 = new NPart(
			[ 
				new NVoice([
					new NNote([new NHead(0, ESign.None)]),
					new NNote([new NHead(0, ESign.None)]),
					//new NNote([new NHead(0, ESign.None, ETie.Tie(EDirectionUAD.Auto, 0))]),
					//new NNote([new NHead(0, ESign.None)]), 
					//new NNote([new NHead(0, ESign.None)]), 
					//new NNote([new NHead(0, ESign.Flat, ETie.Tie(EDirectionUAD.Auto, 0))]),
					//new NNote([new NHead(0, ESign.None, ETie.Tie(EDirectionUAD.Auto, 0))]),
				]), 
				
				new NVoice([
					new NNote([new NHead(0, ESign.None, ETie.Tie(EDirectionUAD.Auto, 0))], ENoteVal.Nv2), 
				]),
				
			],
			nx3.EClef.ClefG, 
			nx3.EKey.Flat2
		);
		var p2 = new NPart(
			[ 
				new NVoice([
					new NNote([new NHead(0, ESign.None)]), 
					new NNote([new NHead(0, ESign.None)]), 
				]),
				/*
				new NVoice([
					new NNote([new NHead(2, ESign.None)]), 
				]),
				*/
			]
			//,
			//nx3.EClef.ClefG, 
			//nx3.EKey.Natural
		);
		
		
		return [p1, p2];
	}		
	
	static public function testTwoVoices():nx3.NParts {
		var p1 = new NPart(
			[ 
				new NVoice([
					new NNote([new NHead(0, ESign.Flat)]), 
					new NNote([new NHead(0, ESign.None)]), 
				]), 
				new NVoice([
					new NNote([new NHead(0, ESign.Sharp)]), 
				]),			
			],
			nx3.EClef.ClefG, 
			nx3.EKey.Natural
		);
		return [p1];
	}	
	
	static public function testParts0():nx3.NParts {
		var p1 = new NPart(
			[ new NVoice([
				new NNote([new NHead(0, ESign.None)]), 
				new NNote([new NHead(3, ESign.Natural)]),
				new NNote([new NHead(0, ESign.None)]), 
				new NNote([new NHead(1, ESign.None)]), 
				new NNote([new NHead(1, ESign.None)]), 
				new NNote([new NHead(2, ESign.None)]), 
				new NNote([new NHead(2, ESign.None)]), 
				new NNote([new NHead(3, ESign.None)]), 
			]), ],
			nx3.EClef.ClefG, 
			nx3.EKey.Sharp3
			);
		return [p1];
	}	
	
	static public function testParts1():nx3.NParts {
		var p1 = new NPart(
			[ new NVoice([new NNote([new NHead(0)]), new NNote([new NHead(1)]), new QNote4(2), new QNote4(3), new QNote4(4), new QNote4(5), new QNote4(6), ]), 		],
				nx3.EClef.ClefG, 
				nx3.EKey.Flat1
			);
		var p2 = new NPart([ new NVoice([new QNote4(0), new QNote4(1), new QNote4(2), new QNote4(3), new QNote4(4), new QNote4(5), new QNote4(6), ]), ]
			, null
			, null //nx3.EKey.Sharp1
		);
		return [p1, p2];
	}

	static public function testParts2():nx3.NParts {
		var p1 = new NPart([
			new NVoice([new QNote4(0), new QNote4(0), new QNote4(0), new QNote4(0), ]),
			new NVoice([new QNote2(2), new QNote4(true, 2), new QNote8(2), ]),
		]);
		
		var p2 = new NPart([
			new NVoice([new QNote4(0), new QNote4(0), new QNote4(0), new QNote4(0), ]),
			new NVoice([new QNote2(2), new QNote4(true, 2), new QNote8(2), ]),
		]);		
		return [p1, p2];
	}
	
}