package nx3.test;
import nx3.EAllotment;
import nx3.EClef;
import nx3.EKey;
import nx3.EKeysTools;
import nx3.ENoteType;
import nx3.ENoteVal;
import nx3.EPartType;
import nx3.ETime;
import nx3.events.BarEvent.NoteChange;
import nx3.NBar;
import nx3.NBars;
import nx3.NHead;
import nx3.NNote;
import nx3.NPart;
import nx3.NScore;
import nx3.NVoice;
import nx3.PBar;
import nx3.PBars;
import nx3.PBarWidthCalculator;
import nx3.PPart;
import nx3.PScore;
import nx3.PSystem;
import nx3.PSystemBarsGenerator;
import nx3.QNote.QLyric2;
import nx3.QNote.QLyric4;
import nx3.QNote.QLyric8;
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
import nx3.xml.BarsXML;

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
	
	
	
	
	
	static public function nvoicePause1()
	{
		return new NVoice([				
			new QNote4(0),
			new NNote(ENoteType.Pause(0), ENoteVal.Nv4),
		]);
	}
	
	
	
	static public function nvoiceLyrics1()
	{
		return new NVoice([				
			new NNote(ENoteType.Lyric('Hello'), ENoteVal.Nv8),
			new NNote(ENoteType.Lyric('World!'), ENoteVal.Nv8),
		]);
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
					new QNote8(true, 3),
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
					new QNote8(-2),					
					new QNote16(-4),					
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
	
	static public function pbarLyrics():PBar
	{
		return new PBar(new NBar([

			/*
			new NPart([	
				new NVoice([				
					new QNote4(),
					new QNote4(),
				]),
			]),
			*/
			new NPart([	
				new NVoice([				
					new QLyric2('Hejsan'),
					new QLyric4('Hoppsan'),
					new QLyric8('i'),
					new QLyric8('LINGONSKOGEN'),
				]),
			]),
		], EAllotment.LeftAlign));				
		
	}				
	
	static public function pbarContentwidth1():PBar
	{
		return new PBar(new NBar([		
			new NPart([	
				new NVoice([				
					new QNote4(0, '#'),
					new QNote4(),
				]),
			]),
		], EAllotment.Logaritmic));				
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
	
	static public function pbarAllotLeftalign():PBar
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
		], EAllotment.LeftAlign));						
	}			
	
	
	
	static public function pbarTies():PBar
	{
		return new PBar(new NBar([
			new NPart([	
				new NVoice([				

						 new NNote([new NHead(1, ETie.Tie(EDirectionUAD.Auto, 0))], ENoteVal.Nv4),
						new QNote4(1),
						new NNote([new NHead(-1, ETie.Tie(EDirectionUAD.Auto, 0))], ENoteVal.Nv4),
						new QNote4(-1),
						
						new NNote([new NHead(1, ETie.Tie(EDirectionUAD.Auto, 0))], ENoteVal.Nv4),
						new QNote4(1),
						new NNote([new NHead(-1, ETie.Tie(EDirectionUAD.Auto, 0))], ENoteVal.Nv4),
						new QNote4( -1),		
						
						new NNote([new NHead(1, ETie.Tie(EDirectionUAD.Auto, 0)), new NHead(-1, ETie.Tie(EDirectionUAD.Auto, 0))], ENoteVal.Nv4),
						new QNote4(1),
						new NNote([new NHead(-1, ETie.Tie(EDirectionUAD.Auto, 0))], ENoteVal.Nv4),
						new QNote4(-1),							
						
					]),
					
				new NVoice([										
							new NNote([new NHead(5, ETie.Tie(EDirectionUAD.Auto, 0))], ENoteVal.Nv2dot),
							new QNote4(5),
					]),
					
			]),
		], EAllotment.Logaritmic));				
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
	
	static public function systemTest1():PSystem
	{
		var bars:PBars = [];
		var n0 = new NPart([new QVoice([.4, 16, 16, 4, 4], '#.b.')], EClef.ClefC, EKey.Flat2);
		bars.push(new PBar(new NBar([n0], ETime.Time2_4)));	
		var n1 =  new NPart([new QVoice([4, .4, 8], [2, 3, 4], '.#')]);
		bars.push(new PBar(new NBar([n1])));				
		
		var calculator = new PBarWidthCalculator();
		var generator = new PSystemBarsGenerator(bars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  400, calculator );
		var system:PSystem = generator.getSystem();				
		return system;		
	}
	
	static public function scoreTest1():PScore
	{
		var n0 = new NBar([ 
			new NPart([new QVoice(1)], EClef.ClefG, EKey.Flat2),
			new NPart([new QVoice(1, [-8])], EClef.ClefC, EKey.Flat2)
			], ETime.Time2_4);	
		var n1 = new NBar([ 
			new NPart([new QVoice(1, [-8])], EClef.ClefG, EKey.Flat2),
			new NPart([new QVoice(1, 0)], EClef.ClefC, EKey.Flat2)
			], ETime.Time2_4);	
			
			//var n1 = new NBar([ new NPart([new QVoice(1)], EClef.ClefC, EKey.Flat2)], ETime.Time2_4);	
		//var n0 = new NBar([ new NPart([new QVoice([.4, 16, 16, 4, 4], '#.b.')], EClef.ClefC, EKey.Flat2)], ETime.Time2_4);	
		//var n1 =  new NBar([new NPart([new QVoice([4, .4, 8], [2, 3, 4], '.#')])]);		
		var nscore:NScore = new NScore([n0, n1 ]);
		var score = new PScore(nscore);
		return score;
	}
	
	static public function scoreStretch(systemwidth:Float):PScore
	{
		var n0 = new NBar([ new NPart([new QVoice([.4, 16, 16, 4, 4], '#.b.')], EClef.ClefC, EKey.Flat2)], ETime.Time2_4);	
		//var n1 =  new NBar([new NPart([new QVoice([4, .4, 8], [2, 3, 4], '.#')])]);
		var nscore:NScore = new NScore([n0]);
		var score = new PScore(nscore);
		score.getSystems(systemwidth).first().getSystembars().first();
		return score;
	}	
	
	static public function scoreLinebreakX(): PScore
	{
		var b0 = new NBar([ new NPart([new QVoice([4, 4, 4], '')], EClef.ClefC, EKey.Sharp5)], ETime.Time3_4);	
		
		var b1 = new NBar([ new NPart([new QVoice([4, 4, 4, 4], '')])]);	
		var b2 = new NBar([ new NPart([new QVoice([4, 4], '')])]);	
		var b3 = new NBar([ new NPart([new QVoice([4, 4], '')])]);	
		var b4 = new NBar([ new NPart([new QVoice([4, 4, 4], '')])]);	
		var b5 = new NBar([ new NPart([new QVoice([4, 4, 4, 4], '')])]);	
		var b6 = new NBar([ new NPart([new QVoice([4, 4, 4], '')])]);	
		var b7 = new NBar([ new NPart([new QVoice([4, 4], '')])]);	
		
		var nscore = new NScore([b0, b1, b2, b3, b4, b5, b6, b7]);
		var score = new PScore(nscore);
		return score;
		
	}
	
	
	static public function scoreLinebreak(): PScore
	{
		var b0 = new NBar([new NPart([new NVoice([
						new NNote(ENoteType.Pause(2), ENoteVal.Nv4),
						new NNote([new NHead(0),]),
						new NNote([new NHead(0),]),				
				]), ], EClef.ClefG, EKey.Sharp5), ], ETime.Time3_4);

		var b1 = new NBar([new NPart([new NVoice([
						new NNote([new NHead(0),]),
						new NNote([new NHead(0),]),				
						new NNote([new NHead(0),]),				
						new NNote([new NHead(0),]),				
				]), ]), ]);
		var b2 = new NBar([new NPart([new NVoice([
						new NNote([new NHead(0),]),
						new NNote([new NHead(0),]),				
				]), ]), ]);
		var b3 = new NBar([new NPart([new NVoice([
						new NNote([new NHead(0),]),
						new NNote([new NHead(0),]),				
				]), ]), ]);
		var b4 = new NBar([new NPart([new NVoice([
						new NNote([new NHead(0),]),
						new NNote([new NHead(0),]),				
						new NNote([new NHead(0),]),				
				]), ]), ]);
		var b5 = new NBar([new NPart([new NVoice([
						new NNote([new NHead(0),]),
						new NNote([new NHead(0),]),				
						new NNote([new NHead(0),]),				
						new NNote([new NHead(0),]),				
				]), ]), ]);
		var b6 = new NBar([new NPart([new NVoice([
						new NNote([new NHead(0),]),
						new NNote([new NHead(0),]),				
				]), ]), ]);
		var b7 = new NBar([new NPart([new NVoice([
						new NNote([new NHead(0),]),
						new NNote([new NHead(0),]),
						new NNote([new NHead(0),]),				
				]), ]), ]);
		var nscore = new NScore([b0, b1, b2, b3, b4, b5, b6, b7]);
		var score = new PScore(nscore);
		return score;				
				
		/*
		var b1 = new NBar([ new NPart([new QVoice([4, 4, 4, 4], '')])]);	
		var b2 = new NBar([ new NPart([new QVoice([4, 4], '')])]);	
		var b3 = new NBar([ new NPart([new QVoice([4, 4], '')])]);	
		var b4 = new NBar([ new NPart([new QVoice([4, 4, 4], '')])]);	
		var b5 = new NBar([ new NPart([new QVoice([4, 4, 4, 4], '')])]);	
		var b6 = new NBar([ new NPart([new QVoice([4, 4, 4], '')])]);	
		var b7 = new NBar([ new NPart([new QVoice([4, 4], '')])]);	
		
		var nscore = new NScore([b0, b1, b2, b3, b4, b5, b6, b7]);
		var score = new PScore(nscore);
		return score;
		*/
	}
		

	
	
	
	static public function scoreTest2():PScore
	{
		var code = 'c d e f#8 g / c2 dB | e8 p g4_ g + c / + p - = bB a g16 aB g f | b8 a4 g8 f g4 c8 / e4 f# g c# |';
		return scoreFromCode(code);		
	}
	
	static function scoreFromCode(code:String):PScore
	{
				var parser = new QuickSyntaxParser(code);
				var qsnotes = parser.parseToQSyntaxNotes();
				var builder = new QuickSyntaxBuilder(qsnotes);
				var nscore = builder.getNScore();
				var score = new PScore(nscore);		
			return score;		
	}
	
	
	public static function scoreBachSinfonia4():NScore
	{
		var xmlStr = '<bars><bar time="C"><part key="Flat1" clef="ClefG"><voice><pause level="-5" val="16"/><note val="16"><headx level="-2"/></note><note val="16"><headx level="-1" sign="Sharp"/></note><note val="16"><headx level="-2"/></note><note val="8"><headx level="1"/></note><note val="8"><headx level="-4" tie="true"/></note><note val="16"><headx level="-4"/></note><note val="16"><headx level="-3"/></note><note val="16"><headx level="-2"/></note><note val="16"><headx level="-3"/></note><note val="8"><headx level="1"/></note><note val="8"><headx level="-5" tie="true"/></note></voice><voice><pause level="2" val="1"/></voice></part><part clef="ClefF" key="Flat1"><voice><note val="8"><headx level="0"/></note><note val="8"><headx level="-1"/></note><note val="8"><headx level="-2"/></note><note val="8"><headx level="0"/></note><note val="8"><headx level="-4"/></note><note val="8"><headx level="-5" sign="Natural"/></note><note val="8"><headx level="-6" sign="Sharp"/></note><note val="8"><headx level="-4"/></note></voice></part></bar><bar><part><voice><note val="16"><headx level="-5"/></note><note val="16"><headx level="-4"/></note><note val="16"><headx level="-3"/></note><note val="16"><headx level="-2"/></note><note><headx level="-6" tie="true"/></note><note val="16"><headx level="-6"/></note><note val="16"><headx level="-5" sign="Sharp"/></note><note val="16"><headx level="-4" sign="Sharp"/></note><note val="16"><headx level="-5"/></note><note val="8."><headx level="-5"/></note><note val="16"><headx level="-6"/></note></voice><voice><pause val="16"/><note val="16"><headx level="1"/></note><note val="16"><headx level="2" sign="Sharp"/></note><note val="16"><headx level="1"/></note><note val="8"><headx level="4"/></note><note val="8"><headx level="-1" tie="true"/></note><note val="16"><headx level="-1"/></note><note val="16"><headx level="0" sign="Natural"/></note><note val="16"><headx level="1"/></note><note val="16"><headx level="0"/></note><note val="8"><headx level="4"/></note><note val="8"><headx level="-2" tie="true"/></note></voice></part><part><voice><note><headx level="-7" tie="true"/></note><note val="16"><headx level="-7"/></note><note val="16"><headx level="-6" sign="Natural"/></note><note val="16"><headx level="-5" sign="Natural"/></note><note val="16"><headx level="-4"/></note><note><headx level="-8"/></note><note><headx level="-1"/></note></voice></part></bar><bar><part><voice><note><headx level="-6" tie="true"/></note><note val="16"><headx level="-6"/></note><note val="16"><headx level="-2"/></note><note val="16"><headx level="-1" sign="Sharp"/></note><note val="16"><headx level="-2"/></note><note><headx level="-5" sign="Natural" tie="true"/></note><note val="16"><headx level="-5"/></note><note val="16"><headx level="-1" sign="Sharp"/></note><note val="16"><headx level="0" sign="Natural"/></note><note val="16"><headx level="-1"/></note></voice><voice><note val="16"><headx level="-2"/></note><note val="16"><headx level="-1"/></note><note val="16"><headx level="0" sign="Natural"/></note><note val="16"><headx level="-1"/></note><note><headx level="-4" tie="true" tielevel="4" /></note><note val="16"><headx level="-4"/></note><note val="16"><headx level="0"/></note><note val="16"><headx level="1"/></note><note val="16"><headx level="0"/></note><note><headx level="-3" tie="true" tielevel="5" /></note></voice></part><part><voice><note><headx level="3"/></note><pause/><pause val="2"/></voice></part></bar><bar><part><voice><note val="4."><headx level="-4"/></note><note val="8"><headx level="-6"/></note><note><headx level="-5" tie="true"/></note><note val="16"><headx level="-5"/></note><note val="16"><headx level="-4"/></note><note val="16"><headx level="-3"/></note><note val="16"><headx level="-4"/></note></voice><voice><note val="8"><headx level="-3"/></note><note val="8"><headx level="1"/></note><note val="16"><headx level="-2"/></note><note val="16"><headx level="-3"/></note><note val="16"><headx level="-2"/></note><note val="16"><headx level="-1" sign="Natural"/></note><note val="8."><headx level="0" sign="Natural"/></note><note val="16"><headx level="-1" sign="Sharp"/></note><note><headx level="-1"/></note></voice></part><part><voice><pause val="16"/><note val="16"><headx level="0"/></note><note val="16"><headx level="1" sign="Sharp"/></note><note val="16"><headx level="0"/></note><note val="8"><headx level="3"/></note><note val="8"><headx level="-2" tie="true"/></note><note val="16"><headx level="-2"/></note><note val="16"><headx level="-1"/></note><note val="16"><headx level="0"/></note><note val="16"><headx level="-1"/></note><note val="8"><headx level="3"/></note><note val="8"><headx level="-3" tie="true"/></note></voice></part></bar><bar><part><voice><note><headx level="-2"/></note><pause val="16"/><note val="16"><headx level="-7"/></note><note val="16"><headx level="-6"/></note><note val="16"><headx level="-7"/></note><note><headx level="-3" tie="true"/></note><note val="16"><headx level="-3"/></note><note val="16"><headx level="-6"/></note><note val="16"><headx level="-5"/></note><note val="16"><headx level="-6"/></note></voice><voice><note val="16"><headx level="-2"/></note><note val="16"><headx level="-2"/></note><note val="16"><headx level="-1" sign="Sharp"/></note><note val="16"><headx level="-2"/></note><note><headx level="2" tie="true"/></note><note val="16"><headx level="2"/></note><note val="16"><headx level="-1" sign="Natural"/></note><note val="16"><headx level="0"/></note><note val="16"><headx level="-1"/></note><note><headx level="3" tie="true"/></note></voice></part><part><voice><note val="16"><headx level="-3"/></note><note val="16"><headx level="-2"/></note><note val="16"><headx level="-1"/></note><note val="16"><headx level="0"/></note><note><headx level="-5" tie="true"/></note><note val="16"><headx level="-5"/></note><note val="16"><headx level="-1"/></note><note val="16"><headx level="0"/></note><note val="16"><headx level="1"/></note><note><headx level="-4" tie="true"/></note></voice></part></bar><bar><part><voice><note><headx level="-2" tie="true"/></note><note val="16"><headx level="-2"/></note><note val="16"><headx level="-2"/></note><note val="16"><headx level="-3"/></note><note val="16"><headx level="-4"/></note><note><headx level="-5" tie="true"/></note><note val="16"><headx level="-5"/></note><note val="16"><headx level="-4"/></note><note val="16"><headx level="-3"/></note><note val="16"><headx level="-2"/></note></voice><voice><note val="16"><headx level="3"/></note><note val="16"><headx level="0"/></note><note val="16"><headx level="1"/></note><note val="16"><headx level="-1"/></note><note><headx level="0" tie="true"/></note><note val="16"><headx level="0"/></note><note val="16"><headx level="-1"/></note><note val="16"><headx level="0"/></note><note val="16"><headx level="1"/></note><note val="16"><headx level="0"/></note><note val="16"><headx level="1"/></note><note val="16"><headx level="2"/></note><note val="16"><headx level="3"/></note></voice></part><part><voice><note val="16"><headx level="-4"/></note><note val="16"><headx level="0"/></note><note val="16"><headx level="1"/></note><note val="16"><headx level="0"/></note><note val="8"><headx level="4"/></note><note val="8"><headx level="-2" tie="true"/></note><note val="16"><headx level="-2"/></note><note val="16"><headx level="-1"/></note><note val="16"><headx level="0"/></note><note val="16"><headx level="-1"/></note><note val="8"><headx level="1"/></note><note val="8"><headx level="-5" tie="true"/></note></voice></part></bar></bars>';
		var nbars:NBars = BarsXML.fromXmlStr(xmlStr);
		var nscore = new NScore(nbars);
		//var score = new PScore(nscore);
		//var xmlStr2 = BarsXML.toXml(nbars).toString();
		return nscore;						
	}	
	
static public function scoreTplRow():NScore
	{
		var nbars:NBars = [
		
		new NBar([
		
			new NPart([	
				new NVoice([				
					new NNote(ENoteType.Tpl(0)),
					new NNote(ENoteType.Tpl(2)),
					new NNote(ENoteType.Tpl(1)),
					new NNote(ENoteType.Tpl(-3)),
					])
			], EPartType.Tplrow),		
			
			new NPart([	
				new NVoice([				
					new QNote4(2),
					new QNote4(4),
					new QNote4(3),
					new QNote4(-1),
					])
			]),				
		] ),
		
		new NBar([
		
			new NPart([	
				new NVoice([				
					new NNote(ENoteType.Tpl(-2)),
					new NNote(ENoteType.Tpl(-3), ENoteVal.Nv8),
					new NNote(ENoteType.Tpl(-2), ENoteVal.Nv8),
					new NNote(ENoteType.Tpl(-1)),
					new NNote(ENoteType.Tpl(3), ENoteVal.Nv8),
					new NNote(ENoteType.Tpl(1), ENoteVal.Nv8),
					])
			], EPartType.Tplrow),				
			new NPart([	
				new NVoice([				
					new QNote4(0),
					new QNote8(-1),
					new QNote8(0),
					new QNote4(1),
					new QNote8(5),
					new QNote8(3),
					])
			]),			
				
		] ),	
		
		new NBar([
		
			new NPart([	
				new NVoice([				
					new NNote(ENoteType.Tpl(0), ENoteVal.Nv1),
					])
			], EPartType.Tplrow),			
			new NPart([	
				new NVoice([				
					new QNote1(2),
					])
			]),			
					
		] )		
		
		
		];	
		
		var nscore = new NScore(nbars);
		//var score = new PScore(nscore);
		return nscore;				
	}		
	
	
	static public function scoreTplChain():NScore
	{
		var nbars:NBars = [
		
		new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(2),
					new QNote4(4),
					new QNote4(3),
					new QNote4(-1),
					])
			]),			
			new NPart([	
				new NVoice([				
					new NNote(ENoteType.Tpl(0)),
					new NNote(ENoteType.Tpl(2)),
					new NNote(ENoteType.Tpl(1)),
					new NNote(ENoteType.Tpl(-3)),
					])
			], EPartType.Tplchain),						
		] ),
		
		new NBar([
			new NPart([	
				new NVoice([				
					new QNote4(0),
					new QNote8(-1),
					new QNote8(0),
					new QNote4(1),
					new QNote8(5),
					new QNote8(3),
					])
			]),			
			new NPart([	
				new NVoice([				
					new NNote(ENoteType.Tpl(-2)),
					new NNote(ENoteType.Tpl(-3), ENoteVal.Nv8),
					new NNote(ENoteType.Tpl(-2), ENoteVal.Nv8),
					new NNote(ENoteType.Tpl(-1)),
					new NNote(ENoteType.Tpl(3), ENoteVal.Nv8),
					new NNote(ENoteType.Tpl(1), ENoteVal.Nv8),
					])
			], EPartType.Tplchain),						
		] ),	
		
		new NBar([
			new NPart([	
				new NVoice([				
					new QNote1(2),
					])
			]),			
			new NPart([	
				new NVoice([				
					new NNote(ENoteType.Tpl(0), ENoteVal.Nv1),
					])
			], EPartType.Tplchain),						
		] )		
		
		
		];	
		
		var nscore = new NScore(nbars);
		//var score = new PScore(nscore);
		return nscore;				
	}		
	
	static public function scoreTies():PScore
	{
		var nbar0:NBar = new NBar([
			new NPart([
				new NVoice([
					new NNote([ new NHead(1, ETie.Tie(EDirectionUAD.Auto, -1)) , ]),
					new NNote([ new NHead(1, ETie.Tie(EDirectionUAD.Auto, 1)) ,  ]),
				]),			
				new NVoice([
					new NNote([ new NHead(3, ETie.Tie(EDirectionUAD.Auto, 1)),  ]),
				]),									
			]),
		
			new NPart([
				new NVoice([
					new NNote([ new NHead(0) , ]),
					new NNote([ new NHead(5, ETie.Tie(EDirectionUAD.Auto, 1)),  ]),
				]),
			]),
		]);
		
		var nbar1:NBar = new NBar([
			new NPart([
				new NVoice([
					new NNote([ new NHead(3) , ]),
					new NNote([ new NHead(0) , ]),					
				]),										
			]),
			
			new NPart([
				new NVoice([
					new NNote([ new NHead(3) , ]),
					new NNote([ new NHead(0) , ]),
				]),
				
				new NVoice([
					new NNote([ new NHead(5) , ]),
					new NNote([ new NHead(0) , ]),
				]),				
				
			]),
		]);		
		
		var score = new PScore(new NScore([nbar0, nbar1]));		
		
		var xmlstr = BarsXML.toXml(score.getNBars()).toString();
		trace(xmlstr);
		var bars2 = BarsXML.fromXmlStr(xmlstr);
		var xmlstr2 = BarsXML.toXml(bars2).toString();
		trace(xmlstr);
		return score;
		
	}
	
	static public function getSystemYItems():NScore
	{
		var bars:nx3.NBars = [];		
		var n0 = new NPart([new QVoice(1, [7])]);
		var n1 = new NPart([new QVoice(1, [-4])]);
		bars.push(new NBar([n0, n1]));
		var n0 = new NPart([new QVoice(1, [4])]);
		var n1 = new NPart([new QVoice(1, [5])]);
		bars.push(new NBar([n0, n1]));
		return new NScore(bars);
	}

	static public function scoreLyrics():NScore
	{
		var bar0 = new NBar([
			new NPart([
				new NVoice([
					new QNote4(), new QNote4(), new QNote4(), new QNote4(), 
				]),
			], nx3.EClef.ClefG, nx3.EKey.Flat3),
			new NPart([
				new NVoice([
					new QLyric4('Hej'),new QLyric4('hopp'),new QLyric4('i'),new QLyric4('galopp!'),
				]),			
			], nx3.EPartType.Lyrics),
			new NPart([
				new NVoice([
					new QLyric4('Många'),new QLyric4('i'),new QLyric4('den'),new QLyric4('byn,'),
				]),			
			], nx3.EPartType.Lyrics),			
			
		], ETime.Time3_4);
		
		var bar1 = new NBar([
			new NPart([
				new NVoice([
					new QNote4(), new QNote4(), new QNote4(), new QNote4(), 
				]),
			]),
			new NPart([
				new NVoice([
					new QLyric4('Hej'),new QLyric4('hopp'),new QLyric4('i'),new QLyric4('galopp!'),
				]),			
			], nx3.EPartType.Lyrics),
			new NPart([
				new NVoice([
					new QLyric4('i'),new QLyric4('denna'),new QLyric4('annorlunda'),new QLyric4('byn'),
				]),			
			], nx3.EPartType.Lyrics),
		]);
		
		var score = new NScore([bar0, bar1]);
		return score;
		
	}
	
	static public function scorePitchloafChain():NScore {
		var bar0 = new NBar([
		
			new NPart([
				new NVoice([
					new QNote4(), new QNote4(), new QNote4(), new QNote4(), 
				]),
				
			], EClef.ClefG, EKey.Sharp2),		
			
			new NPart([
				new NVoice([
					new NNote(ENoteType.Pitch(0, 0), ENoteVal.Nv2), new NNote(ENoteType.Pitch(0, 1)),  new NNote(ENoteType.Pitch(0, -5)), 
				]),
			], EPartType.PitchChain(123))
		]);

			var bar1 = new NBar([
			new NPart([
				new NVoice([
					new QNote4(), new QNote4(), new QNote16(), new QNote16(), new QNote16(), new QNote16(), new QNote4(), 
				]),
			], EClef.ClefG, EKey.Sharp2),		
			new NPart([
				new NVoice([
					new NNote(ENoteType.Pitch(0, 0), ENoteVal.Nv4dot), new NNote(ENoteType.Pitch(0, 1),ENoteVal.Nv8), new NNote(ENoteType.Pitch(0, -1),ENoteVal.Nv16), new NNote(ENoteType.Pitch(0, 1),ENoteVal.Nv16),  new NNote(ENoteType.Pitch(0, 1),ENoteVal.Nv8),  new NNote(ENoteType.Pitch(0, -3),ENoteVal.Nv4), 
				]),
			], EPartType.PitchChain(123))
		]);	
		
		return new NScore([bar0, bar1]);
	}
	
}