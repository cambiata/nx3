package nx3.render;
import nx3.EHeadValueType;
import nx3.ENoteType;
import nx3.NNote;
import nx3.render.svg.SvgElements;
using nx3.ENoteValTools;
/**
 * ...
 * @author Jonas Nyström
 */
class RendererTools
{
	static public function getHeadSvgInfo(nnote:NNote):{xmlStr:String, y:Float}
	{
		return switch nnote.type
		{
			case ENoteType.Note(heads, variant, articulations, attributes):
				return switch (nnote.value.head())
				{			
					case EHeadValueType.HVT1:{xmlStr: SvgElements.noteWhole, y:0};
					case EHeadValueType.HVT2: {xmlStr: SvgElements.noteWhite, y:0};
					default: {xmlStr: SvgElements.noteBlack, y:0};
				}		
				
			case ENoteType.Pause(level):
				return switch (nnote.value.beaminglevel())
				{
					//case 0: 
					//	return {xmlStr: SvgElements., y:2};
					case 0:
						return switch(nnote.value.head())
						{
							case EHeadValueType.HVT4: { xmlStr: SvgElements.pauseNv4, y:2 };
							case EHeadValueType.HVT2: { xmlStr: SvgElements.pauseNv2, y:2 };
							case EHeadValueType.HVT1: { xmlStr: SvgElements.pauseNv1, y:2 };
							default:  {xmlStr: SvgElements.pauseNv8, y:2};
						}
					case 1:  {xmlStr: SvgElements.pauseNv8, y:2};
					case 2:  {xmlStr: SvgElements.pauseNv16, y:2};
					case 3:  {xmlStr: SvgElements.pauseNv16, y:2};
					default:  {xmlStr: SvgElements.clefG, y:2};
				}
			default:  {xmlStr: SvgElements.clefG, y:2};
		}
		
		
		
	}
}