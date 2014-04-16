package nx3.io;
import nx3.io.QuickSyntax.BPVIndex;

/**
 * ...
 * @author Jonas Nyström
 */
class BarParser extends BaseParser
{
	var barIndex:Int;
	var partIndex:Int;
	var voiceIndex:Int;	
	
	public function new(parser:QuickSyntax) 
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
			return token.substr(1);
		});		
	}
	
	override private function tokenFinished() 
	{
		//trace([this.barIndex, this.partIndex, this.voiceIndex]);
	}
	
	public function getBpvIndex():BPVIndex
	{
		 var bpvIndex:BPVIndex = { barIndex:barIndex, partIndex:partIndex, voiceIndex:voiceIndex };
		 return bpvIndex;
	}
}