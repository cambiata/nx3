package nx3.action;
import cx.TimerTools;
import nx3.ENoteType;
import nx3.ENoteVal;
import nx3.geom.Rectangle;
import nx3.PNote;
import nx3.action.EActionType;

/**
 * ...
 * @author Jonas Nyström
 */
class TestInteractivity extends InteractivityBase
{	
	/*
	override public function onNoteMouseDown(note:PNote, info:EActionInfo)
	{
		trace('mouse down on note with levels ' + note.nnote.getHeadLevels());
	}
	*/
	
	override public function onNoteMouseOver(note:PNote, info:EActionInfo)
	{
		TimerTools.timeout(function() {
			trace('OVER');
			switch info 
			{
				case EActionInfo.TargetXY(target, x, y):
					{
						target.tooltipShow(new Rectangle(x + 20 , y - 10, 160, 32), valueToSwedish(note.nnote.value, note.nnote.type));
					}
				default:
			}
		}, 300);
		
	}
	
	override public function onNoteMouseOut(note:PNote, info:EActionInfo)
	{
		TimerTools.timeout(function() {
			switch info 
			{
				case EActionInfo.TargetXY(target, x, y):
					{
						target.tooltipHide();
					}
				default:
			}
		}, 100);		
		
	}	
	
	private function valueToSwedish(val:ENoteVal, type:ENoteType):String
	{
		return switch type
		{
			case ENoteType.Pause(l):
				return switch val
				{
					case ENoteVal.Nv1: 'Helpaus';
					case ENoteVal.Nv2: 'Halvpaus';
					case ENoteVal.Nv4: 'Fjärdelspaus';
					case ENoteVal.Nv8: 'Åttondelspaus';
					case ENoteVal.Nv16: 'Sextondelspaus';
					default: 'Annan paus';
				}
			
			case ENoteType.Note(h, v, a, atr):
				return switch val
				{
					case ENoteVal.Nv2: 'Halvnot';
					case ENoteVal.Nv4: 'Fjärdedelsnot';
					case ENoteVal.Nv4dot: 'Punkterad fjärdedelsnot';
					case ENoteVal.Nv8: 'Åttondelsnot';
					case ENoteVal.Nv8dot: 'Punkterad åttondelsnot';
					case ENoteVal.Nv16: 'Sextondelsnot';
					default: 'Annat notvärde...';
				}	
			default: 'Annan nottyp';
			
		}
		
		

		
		
	}
	
	
}