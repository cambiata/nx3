package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  interface IBarWidthCalculator extends haxe.lang.IHxObject
{
	   double getLeftBarlineWidth(nx3.EBarlineLeft barline);
	
	   double getClefWidth(nx3.EClef clef);
	
	   double getKeyWidth(nx3.EKey key);
	
	   double getTimeWidth(nx3.ETime time);
	
	   double getContentLeftMarginWidth(nx3.PBar bar);
	
	   double getContentWidth(nx3.PBar bar);
	
	   double getBarlineWidth(nx3.EBarline barline);
	
	   double getClefsWidth(haxe.root.Array<nx3.EClef> clef);
	
	   double getKeysWidth(haxe.root.Array<nx3.EKey> key);
	
}


