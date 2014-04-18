package nx3.qs;
import nx3.ENoteType;
import nx3.ENoteVal;
import nx3.NNote;

/**
 * ...
 * @author Jonas Nyström
 */
class LyricsParser extends BaseParser
{
	var notevalue:ENoteVal;
	var flagWord:Bool;

	public function new(builder:QuickSyntaxParser) 
	{
		super(builder);
		this.notevalue = ENoteVal.Nv4;
		this.flagWord = false;
	}
	
	
	override public function createFunctions()
	{
		
		this.functions.set('1.', function (token:String) {	this.notevalue = ENoteVal.Nv1dot;	return token.substr(2);});		
		this.functions.set('1', function (token:String) {	this.notevalue = ENoteVal.Nv1;	return token.substr(1);});		
		this.functions.set('2.', function (token:String) {	this.notevalue = ENoteVal.Nv2dot;	return token.substr(2);});		
		this.functions.set('2', function (token:String) {	this.notevalue = ENoteVal.Nv2;	return token.substr(1);});		
		this.functions.set('4.', function (token:String) {	this.notevalue = ENoteVal.Nv4dot;	return token.substr(2);});		
		this.functions.set('4', function (token:String) {	this.notevalue = ENoteVal.Nv4;	 return token.substr(1); } );
		this.functions.set('8.', function (token:String) {	this.notevalue = ENoteVal.Nv8dot;	return token.substr(2);});		
		this.functions.set('8', function (token:String) {	this.notevalue = ENoteVal.Nv8;	return token.substr(1);});		
		this.functions.set('16.', function (token:String) {	this.notevalue = ENoteVal.Nv16dot;	return token.substr(3);});		
		this.functions.set('16', function (token:String) {	this.notevalue = ENoteVal.Nv16;	return token.substr(2);});				
		
		
		this.functions.set('__ALL__', function (token:String) { 
			
			trace('HANDLE __ALL___');
			this.flagWord = true;
			return token.substr(token.length); 						
		});
	
	}
	
	override private function tokenFinished(originaltoken:String) 
	{		
		if (this.flagWord)
		{
			var nnote:NNote = new NNote(ENoteType.Lyric(originaltoken), this.notevalue);
			this.builder.addNote(nnote);
			this.flagWord = false;
		}
	}
	
	
}