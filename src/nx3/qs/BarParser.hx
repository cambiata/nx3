package nx3.qs;
import nx3.EClef;
import nx3.ENoteVal;
import nx3.qs.ParserEvents;


/**
 * ...
 * @author Jonas Nyström
 */
class BarParser extends BaseParser
{
	var barIndex:Int;
	var partIndex:Int;
	var voiceIndex:Int;	
	
	public function new(parser:QuickSyntaxParser) 
	{
		super(parser);
		this.barIndex = 0;
		this.partIndex = 0;
		this.voiceIndex = 0;
	}
	
	override public function createFunctions()
	{
		this.functions.set(';', function (token:String) {
			this.barIndex++;
			return token.substr(1);
		});
		
		this.functions.set('|', function (token:String) {
			this.barIndex++;
			this.partIndex = 0;
			this.voiceIndex = 0;
			return token.substr(1);
		});

		this.functions.set('//', function (token:String) {
			this.partIndex++;
			this.barIndex = 0;
			//trace('Double part');
			return token.substr(2);
		});		
		
		this.functions.set('/', function (token:String) {
			this.partIndex++;
			this.voiceIndex = 0;
			//trace('Single part');
			return token.substr(1);
		});

		this.functions.set('%%', function (token:String) {
			this.voiceIndex++;
			this.barIndex = 0;
			if (this.voiceIndex > 1) {
				this.partIndex ++;
				this.voiceIndex = 0;
			}
			return token.substr(2);
		});		
		
		this.functions.set('%', function (token:String) {
			this.voiceIndex++;
			sendEvent(ParserEvents.SetOctave(0));
			sendEvent(ParserEvents.SetNoteVal(ENoteVal.Nv4));
			return token.substr(1);
		});		
		
		this.functions.set('clef:G', function (token:String) 
		{
			trace('CLEF');
			sendEvent(ParserEvents.SetBarClef(EClef.ClefG));
			return token.substr(6);
		});
		
		
	}
	
	override private function tokenFinished(originaltoken:String) 
	{
		//trace([this.barIndex, this.partIndex, this.voiceIndex]);
	}
	
	public function getBpvIndex():QSyntaxBPV
	{
		 var bpvIndex:QSyntaxBPV = { barIndex:barIndex, partIndex:partIndex, voiceIndex:voiceIndex };
		 return bpvIndex;
	}
	
	override public function recieveEvent(event:ParserEvents) 
	{
		//trace('RECIEVED EVENT by BarParser ' + event);
	}
}