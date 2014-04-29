package nx3;

/**
 * ...
 * @author Jonas Nyström
 */
			import nx3.geom.Rectangle;
			import nx3.geom.Rectangles;
 
 		#if  (flash || openfl || nme)

			import nx3.render.TargetSprite;
		#elseif js
			import nx3.render.TargetSvg;
		#else
			//trace('non possible!');
		#end

class PNoteHeadsRectsLyricsCalculator
{
	var note:PNote;
	var text:String;
	var font:TFontInfo;

	public function new(note:PNote, text:String, font:TFontInfo) 
	{
		this.note = note;
		this.text = text;
		this.font = font;
	}
	
	public function getHeadsRects(): Rectangles
	{		
		#if  (flash || openfl || nme)
			var target = new TargetSprite();
			if (this.font != null) target.setFont(font);
			var width = target.textwidth(this.text);
			var height = target.textheight(this.text);
			return [new Rectangle( -width / 2, -height / 2, width, height)];						
		#elseif js
			var target = new TargetSvg();
			if (this.font != null) target.setFont(this.font);
			var width = target.textwidth(this.text);
			var height = target.textheight(this.text);
			return [new Rectangle( -width / 2, -height / 2, width, height)];			
		#else
			trace('non possible!');
		#end
		
		
		return null;		
	}
	
}