package nx3;

/**
 * ...
 * @author Jonas Nyström
 */
 interface IBarWidthCalculator
 {
	 function getClefWidth(clef:EClef):Float;
	 function getKeyWidth(key:EKey):Float;
	 function getTimeWidth(time:ETime):Float;
	 function getContentWidth(bar:PBar):Float;
 }