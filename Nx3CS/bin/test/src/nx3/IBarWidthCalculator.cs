
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  interface IBarWidthCalculator : global::haxe.lang.IHxObject {
		   double getLeftBarlineWidth(global::nx3.EBarlineLeft barline);
		
		   double getClefWidth(global::nx3.EClef clef);
		
		   double getKeyWidth(global::nx3.EKey key);
		
		   double getTimeWidth(global::nx3.ETime time);
		
		   double getContentLeftMarginWidth(global::nx3.PBar bar);
		
		   double getContentWidth(global::nx3.PBar bar);
		
		   double getBarlineWidth(global::nx3.EBarline barline);
		
		   double getClefsWidth(global::Array<global::nx3.EClef> clef);
		
		   double getKeysWidth(global::Array<global::nx3.EKey> key);
		
	}
}


