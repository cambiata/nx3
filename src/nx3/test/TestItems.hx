package nx3.test;
import nx3.EAllotment;
import nx3.ENoteType;
import nx3.ENoteVal;
import nx3.NBar;
import nx3.NHead;
import nx3.NNote;
import nx3.NPart;
import nx3.NVoice;
import nx3.PBar;
import nx3.PPart;
import nx3.QNote.QNote16;
import nx3.QNote.QNote1;
import nx3.QNote.QNote2;
import nx3.QNote.QNote4;
import nx3.QNote.QNote8;
import nx3.QNote.QPause1;
import nx3.QNote.QPause16;
import nx3.QNote.QPause2;
import nx3.QNote.QPause4;
import nx3.QNote.QPause8;
import nx3.qs.QuickSyntaxBuilder;
import nx3.qs.QuickSyntaxParser;
import nx3.QVoice;
import nx3.VBar;
import nx3.VVoice;

using cx.ArrayTools;

/**
 * ...
 * @author Jonas Nyström
 */
 
class TestItems
{
	static public function nbar1()
	{
		return new NBar([
			new NPart([
					new NVoice([
						new QNote8(3),
						new QPause8(0),
						new QNote8(-2),
						new QNote8(4),
						new QPause16(),
						new QPause8(),
						new QPause4(),
						new QPause2(),
						new QPause1(),
					])
				]),
			new NPart([	
				new NVoice([
					new QNote16([ -1, 0]), new QNote16([ 0, 1 ], '#'),  new QNote16([ 1, 2 ]),  new QNote16([ 5, 7 ]),
					new QNote16([ 0, 1]), new QNote16([ 0, 2 ]),  new QNote16([ 0, 3 ]),  new QNote16([ 0, 2 ]),
					])
			]),
		]);		
	}
	
	static public function vbar1() return new VBar(nbar1());
	
	static public function vbarSigns()
	{
		var vbar = new VBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(1, '#'),
					new QNote4([-1,0], '#b'),
					new QNote4([3, 4, 5], 'nb#'),
					new QNote4([-5, -2, -1], 'nb#'),
					new QNote4([0, 3, 6], 'nb#'),					
					])
			]),
			new NPart([	
				new NVoice([				
					new QNote4(-1, '#'),		
					new QNote4(0, '#'),		
					new QNote4(-4, 'n'),		
					]),
				new NVoice([				
					new QNote2([1, 5], 'bn'),		
					]),
					
			]),			
			
		]));				
		return vbar;				
	}		
	
	static public function vbarPauses()
	{
		var vbar = new VBar(new NBar([
			new NPart([	
				new NVoice([				
					new NNote([new NHead(-1), new NHead(1)], ENoteVal.Nv1),
					new QNote4(0),
					new NNote(ENoteType.Pause(0), ENoteVal.Nv1),
					new NNote(ENoteType.Pause(0), ENoteVal.Nv2),
					new NNote(ENoteType.Pause(0), ENoteVal.Nv4),
					new NNote(ENoteType.Pause(0), ENoteVal.Nv8),
					new NNote(ENoteType.Pause(0), ENoteVal.Nv16),
					])
			]),
		]));				
		return vbar;			
		
	}
	
	static public function vbarLyrics()
	{
		var vbar = new VBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(0),
					new QNote4(0),
					new QNote4(0),
					new QNote4(0),
					new QNote4(0),
					])
			]),
			
			new NPart([	
				new NVoice([				
					new NNote(ENoteType.Lyric('Hello')),
					new NNote(ENoteType.Lyric('World!')),
					new NNote(ENoteType.Lyric('Verylongword')),
					new NNote(ENoteType.Lyric('&')),
					new NNote(ENoteType.Lyric('&')),
					])
			]),						
		]));				
		return vbar;						
	}
	
	static public function vbarTpl()
	{
		var vbar = new VBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(0),
					new QNote4(0),
					new QNote4(0),
					new QNote4(0),
					])
			]),
			
			new NPart([	
				new NVoice([				
					new NNote(ENoteType.Tpl(0)),
					new NNote(ENoteType.Tpl(1)),
					new NNote(ENoteType.Tpl(2)),
					new NNote(ENoteType.Tpl(3)),
					])
			]),						
		]));				
		return vbar;						
	}	
	
	static public function vbarFlags()
	{
		var vbar = new VBar(new NBar([
			new NPart([	
				new NVoice([				
					
					new QNote8(0),					
					new QNote4(-1),					
					new QNote8(0),					
					new QNote8(0),					
					new QNote8(1),					
					
					]),
				new NVoice([				
					new QNote8(2),					
					new QNote8(3),					
					new QNote8(4),					
					new QNote4(3),
					new QNote8(2),					
				
					]),
			]),
			
		]));				
		return vbar;						
	}		
	
	static public function vbarSignBug()
	{
		var vbar = new VBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(0),					
					]),
				new NVoice([				
					new QNote4(2, '#'),									
					]),
			]),			
		]));				
		return vbar;						
	}			
	
	
	
	static public function nvoicePause1()
	{
		return new NVoice([				
			new QNote4(0),
			new NNote(ENoteType.Pause(0), ENoteVal.Nv4),
		]);
	}
	
	static public function vvoicePause1() return new VVoice(nvoicePause1());
	
	static public function vvoicePausesEights()
	{
		return new VVoice(new NVoice([							
			new NNote(ENoteType.Pause(0), ENoteVal.Nv8),
			new NNote(ENoteType.Pause(0), ENoteVal.Nv8),
		]));		
		
	}
	
	static public function nvoiceLyrics1()
	{
		return new NVoice([				
			new NNote(ENoteType.Lyric('Hello'), ENoteVal.Nv8),
			new NNote(ENoteType.Lyric('World!'), ENoteVal.Nv8),
		]);
	}	
	static public function vvoiceLyrics1() return new VVoice(nvoiceLyrics1());
	
	static public function vbarQSyntax1()
	{
		var str = ' b % c# ';
		var parser = new QuickSyntaxParser(str);
		var qsnotes = parser.parseToQSyntaxNotes();
		var builder = new QuickSyntaxBuilder(qsnotes);
		var nbars = builder.getNBars();
		var nbar:NBar = nbars.first();
		var vbar = new VBar(nbar);
		return vbar;
	}
	
	static public function ppartComplex1()
	{
		var part = new PPart(new NPart([
			new NVoice([
				new QNote4([ -3, -1, 0], "#"),
				
				new QNote4([-1, -2]),
				
				new QNote4(2, 'b'),
				
			]),
			
			new NVoice([
				new QNote4([0, 2], "#b"),
				
				new QNote4([2, 3]),
			]),
			
		]));
		return part;
	}
	
	static public function pbarColumns1():PBar
	{
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote2(),
					new QNote4(),
					new QNote4(),
					]),
				new NVoice([				
					new QNote1(2),
					]),
					
					
			]),
			new NPart([	
				new NVoice([				
					new QNote4(),
					new QNote2(),
					new QNote4(),
				]),
			]),			
			
		]));				
		return pbar;				
		
	}
	
	static public function pbarColumnsDistances():PBar
	{
		var pbar = new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(),					
					new QNote4(),
					new QNote4(),					
					]),

					
			]),
			new NPart([	
				new NVoice([				
					new QNote2(),
					new QNote4(),
				]),
			]),			
			
		]));				
		return pbar;				
	}	
	
	static public function pbarTest():PBar
	{
		return new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(0),
					new QNote8(3),
					new QNote8(2),
					new QNote2(0, '#'),
					new QNote4([ -3, -2], 'b'),
					new QNote8(true, -3),
					new QNote16(-2),					
					]),
					
				new NVoice([				
					new QNote4(1),
					]),					
			]),
			new NPart([	
				new NVoice([				
					new QNote2(1),					
					//new QNote4([ -1, 0], '#b'),						
					new QNote4(0),					
					new QNote16(1),					
					new QNote16(-2),					
					new QNote8(-4),					
					new QNote4(0),					
				]),
			]),			
		], EAllotment.Logaritmic));						
	}
	
	static public function pbarFlags():PBar
	{
		return new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote8([-1, 0]),
					new QNote4(0, '#'),
					new QNote8(1),
					new QNote4(1),
					]),
					
				/*	
				new NVoice([				
					new QNote4(1),
					]),					
				*/
			]),
		]));				
	}	
	
	static public function pbarWhole():PBar
	{
		return new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote1(0),
				]),
				new NVoice([				
					new QNote1(1),
				]),
			]),
		]));						
	}			
	
	static public function pbarDistances():PBar
	{
		return new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(0),
					new QNote1(0),
				]),
				new NVoice([				
					new QNote4(2),
				]),
			]),
		]));				
		
	}			
	
	static public function pbarAllotLinear():PBar
	{
		return new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote1(0),
					new QNote2(0),
					new QNote4(0),
					new QNote8(0),
					new QNote8(0),
					new QNote16(0),
					new QNote16(0),
					new QNote16(0),
					new QNote16(0),
				]),
			]),
		], EAllotment.Linear));						
	}				
	
	static public function pbarAllotLogaritmic():PBar
	{
		return new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote1(0),
					new QNote2(0),
					new QNote4(0),
					new QNote8(0),
					new QNote8(0),
					new QNote16(0),
					new QNote16(0),
					new QNote16(0),
					new QNote16(0),
				]),
			]),
		], EAllotment.Logaritmic));						
	}				
	
	static public function pbarAllotEqual():PBar
	{
		return new PBar(new NBar([
			new NPart([	
				new NVoice([				
					new QNote1(0),
					new QNote2(0),
					new QNote4(0),
					new QNote8(0),
					new QNote8(0),
					new QNote16(0),
					new QNote16(0),
					new QNote16(0),
					new QNote16(0),
				]),
			]),
		], EAllotment.Equal));						
	}		
	
	static public function pbarTies():PBar
	{
		return new PBar(new NBar([
			new NPart([	
				new NVoice([				
						new NNote([new NHead(0, ETie.Tie(EDirectionUAD.Auto, 0))], ENoteVal.Nv4),
						new QNote4(0),
						new QNote4(0),					
					]),
			]),
		], EAllotment.LeftAlign));				
	}
	
	static public function pbarDots():PBar
	{
		return new PBar(new NBar([
			new NPart([	
				new NVoice([				
						new NNote([ new NHead(0)], ENoteVal.Nv4dot),
						new NNote([ new NHead(1)], ENoteVal.Nv4dot),
						new NNote([ new NHead(2)], ENoteVal.Nv4dot),
						new NNote([ new NHead(0)], ENoteVal.Nv4dot),
						new NNote([ new NHead(-1)], ENoteVal.Nv4dot),
						new NNote([ new NHead(-2)], ENoteVal.Nv4dot),
						new NNote([new NHead(-3), new NHead(-2)], ENoteVal.Nv4dot),
						new NNote([new NHead(1), new NHead(6)], ENoteVal.Nv4dot),
					]),
			]),
		], EAllotment.LeftAlign));					
	}	
	
	static public function pbarDots2():PBar
	{
		return new PBar(new NBar([
			new NPart([	
				new NVoice([				
						new NNote([ new NHead(0)], ENoteVal.Nv4dot),
						new NNote([ new NHead(0)], ENoteVal.Nv4dot),
						new NNote([ new NHead(0)], ENoteVal.Nv4dot),
						new NNote([ new NHead(-1)], ENoteVal.Nv4dot),
					]),
				new NVoice([				
						new NNote([ new NHead(0)], ENoteVal.Nv4dot),
						new NNote([ new NHead(1)], ENoteVal.Nv4dot),
						new NNote([ new NHead(2)], ENoteVal.Nv4dot),
						new NNote([ new NHead(3)], ENoteVal.Nv4dot),
						new NNote([ new NHead(4)], ENoteVal.Nv4dot),
						new NNote([ new NHead(5)], ENoteVal.Nv4dot),
						new NNote([ new NHead(0), new NHead(1)], ENoteVal.Nv1dot),
					]),
					
			]),
		], EAllotment.LeftAlign));					
	}	
	
}