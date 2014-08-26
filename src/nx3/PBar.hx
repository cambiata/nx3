package nx3;
using cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */
@:access(nx3.PPart)
class PBar
{
	public var nbar(default, null):NBar;
	
	public function new(nbar:NBar)
	{
		this.nbar = nbar;		
		this.value = 0;
	}	
	
	public function iterator() return this.getParts().iterator();
	public var length (get, null):Int;
	private function get_length():Int return this.getParts().length;		
	
	// parent
	var score:PScore;
	public function getScore():PScore
	{
		return this.score;
	}
	
	var systembar:PSystemBar;
	public function getSystembar():PSystemBar return this.systembar;
	
	
	
	public var clefs(get, null):EClefs;
	 public var keys(get, null):EKeys;
	 public var time(get, null):ETime;	 
	 
	 var _clefs:EClefs = null;
	 private function get_clefs():EClefs
	 {
		 if (this._clefs != null) return this._clefs;
		 this._clefs = new EClefs();
		 for (vpart in this.getParts()) this._clefs.push(vpart.npart.clef);
		 return this._clefs;
	 }

	 var _keys:EKeys = null;
	 private function get_keys():EKeys
	 {
		 if (this._keys != null) return this._keys;
		 this._keys = new EKeys();
		 for (vpart in this.getParts()) this._keys.push(vpart.npart.key);
		 return this._keys;
	 }
	 
	 private function get_time():ETime
	 {
		 return this.nbar.time;
	 }

	 public var displayClefs(get, null):EDisplayALN;
	 public var displayKeys(get, null):EDisplayALN;
	 public var displayTime(get, null):EDisplayALN;
	 
	 public function get_displayClefs():EDisplayALN
	 {
		 var result = EDisplayALN.Never;
		 for (vpart in this.getParts())
		 {
			 if (vpart.npart.clefDisplay == null) result = EDisplayALN.Layout;
			 if (vpart.npart.clefDisplay == EDisplayALN.Layout) result = EDisplayALN.Layout;
			 if (vpart.npart.clefDisplay == EDisplayALN.Always) 
			 {
				 result = EDisplayALN.Always;
				 break;
			 }
		 }
		 return result;
	 }

	 public function get_displayKeys():EDisplayALN
	 {
		 var result = EDisplayALN.Never;
		 for (vpart in this.getParts())
		 {
			 if (vpart.npart.keyDisplay == null) result = EDisplayALN.Layout;
			 if (vpart.npart.keyDisplay == EDisplayALN.Layout) result = EDisplayALN.Layout;
			 if (vpart.npart.keyDisplay == EDisplayALN.Always) 
			 {
				 result = EDisplayALN.Always;
				 break;
			 }
			 
		 }
		 return result;
	 }
	
	 public function get_displayTime():EDisplayALN
	 {
		 var result = this.nbar.timeDisplay != null ? this.nbar.timeDisplay : EDisplayALN.Layout;
		 return this.nbar.timeDisplay;
	 }
	 	 
	
	
	//-----------------------------------------------------------------
	
	var parts:PParts;
	public function getParts():PParts
	{
		if (this.parts != null) return this.parts;
		this.parts = [];		
		
		for (npart in this.nbar.nparts) 
		{
			var ppart = new PPart(npart);
			ppart.bar = this;
			this.parts.push(ppart);
		}
		
		return this.parts;
	}	
	
	public function getPart(idx:Int):PPart return (idx < 0 || idx > this.getParts().length) ? null : this.getParts()[idx];
	
	
	 var columns:PColumns;
	 public function getColumns():PColumns
	 {
		 if (this.columns != null) return this.columns;
		 var generator = new PColumnsGenerator(this);
		 this.columns = generator.getColumns();
		 // new PColumnsDistancesCalculator(this).calculate();
		 this.calculateMDistances();
		 //this.calculateAPositions();
		 
		 return this.columns;
	 }	
	 	 
	 public function getIndex():Int
	 {
		 return this.getScore().getBars().indexOf(this);
	 }
	 
	 
	 public function calculateMDistances()
	 {
		 if (this.columns == null) this.getColumns();
		  new PColumnsDistancesCalculator(this).calculate();		 
	 }
	 
	 public function calculateAPositions()
	 {
		 new PColumnsAllotmentCalculator(this).calculate();		 
	 }
	 
	 /*
	 var distances: Map < PColumn, { pos:Float, dist:Float }>;
	 public function getColumnsDistances()
	 {
		 if (distances != null) return this.distances;
		 if (this.columns == null) this.getColumns();
		 var generator = new PColumnsGenerator(this);		 
		this.distances = new PColumnsDistancesCalculator(this).getDistances();		 
		return distances;		 
	 }
	 */	 
	 
	 var value:Int;
	 public function getValue():Int
	 {
		 if (this.value != 0) return this.value;
		 for (part in this.getParts())
		 {			 
			this.value = Std.int(Math.max(this.value, part.getValue()));
		 }
		return this.value;
	 }
	 
	 var contentwidth:Null<Float>;
	 public function getContentwidth():Float
	 {
		if (this.contentwidth != null) return this.contentwidth;
		var lastcolumn = this.getColumns().last();	
		
		// HACK!
		//if (lastcolumn == null) return 0;
		this.contentwidth = lastcolumn.getAPostion() + Math.max(lastcolumn.getADistance(), lastcolumn.getRightX()) /* + this.getContentXZero()*/;
		
		return this.contentwidth;
	 }
	 
	 var contentx:Null<Float>;
	 public function getContentXZero():Float 
	 {
		 var firstcolumn = this.getColumns().first();
		this.contentx = -firstcolumn.getLeftX();
		return this.contentx;
	 }
	 
	 var stretchwidth:Float = 0;
/*
	 public function setStretchWidth(val:Float)
	 {
		 if (val == this.stretchwidth) return;
		 this.stretchwidth = val;
		 if (val == 0) 
		 {

		 }
	 }
*/	
	 
	var allottedDistanceSum:Null<Float>;
	public function getAllottedDistanceSum():Float
	{
		if (this.allottedDistanceSum != null) return this.allottedDistanceSum;
		this.getContentwidth();
		return this.allottedDistanceSum;		
	}

	 
	 public function getStretchWidth():Float
	 {
		 return this.stretchwidth;
	 }
	 

	 var tieconnections:PTieConnections;
	 public function getTieConnections():PTieConnections
	 {
		 if (this.tieconnections != null) return this.tieconnections;
		 this.tieconnections = [];

		 var nextBar = this.score.getBars().indexOrNull(this.getIndex()+1);
		 if (nextBar == null)
		 {
			 return this.tieconnections; // no connections from last bar
		 }
		 
		 for (part in this.getParts())
		 {			
			 var nextPart = nextBar.getParts().indexOrNull(part.getIndex());

			 for (voice in part.getVoices())
			 {
				 var lastnote = voice.getNotes().last();
				 if (!lastnote.getHasTie() ) continue;
				 
				 for (nhead in lastnote.nnote.nheads)
				 {
					 if (nhead.tie != null) {
						 
						 var level = nhead.level; 
						// trace('possible tie from ' + nhead.level);
						 
						 var nextPart = nextBar.getParts().indexOrNull(part.getIndex());
						 if (nextPart == null) break;
						 
						 for (voice in nextPart.getVoices())
						 {
							 var nextnote = voice.getNotes().first();
							 for (nnhead in nextnote.nnote.nheads)
							 {
								 if (nnhead.level == nhead.level)
								 {
									 //trace('found connection on level ' + nhead.level);
									 this.tieconnections.push( { from:lastnote, to:nextnote, level: nhead.level, tie:nhead.tie } );
									 break;
								 }								 
							 }							 
						 }
					 }
				 }				 
			 }
		 }
		 
		 return this.tieconnections;
	 }
	 
}

