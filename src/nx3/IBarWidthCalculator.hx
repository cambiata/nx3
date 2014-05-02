package nx3;

/**
 * ...
 * @author Jonas Nyström
 */
 interface IBarWidthCalculator
 {
	 function getLeftBarlineWidth(barline:EBarlineLeft):Float;
	 function getClefWidth(clef:EClef):Float;
	 function getKeyWidth(key:EKey):Float;
	 function getTimeWidth(time:ETime):Float;
	 
	 function getContentLeftMarginWidth(bar:PBar): Float;
	 function getContentWidth(bar:PBar):Float;
	 function getBarlineWidth(barline:EBarline):Float;
	 
	 
	 function getClefsWidth(clef:EClefs):Float;
	 function getKeysWidth(key:EKeys):Float;

	 
 }