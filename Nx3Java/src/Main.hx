package ;
import letters.Path;
import letters.targetJava.BasicJava;
import nx3.NHead;
import nx3.NNote;
import nx3.test.Unittests;

import java.awt.Graphics2D;
import java.awt.geom.GeneralPath;
import java.awt.Color;
import javax.swing.JFrame;
import javax.swing.JPanel;

/**
 * ...
 * @author Jonas Nyström
 */
class Main extends BasicJava
{

	public static function main() 
	{
		trace('java');
		//Unittests.performTests();
		new Main();
	}
	
	public function new() 
	{
        super();
		var path = Path.generateVectorText(     'hi my name is justin and i live in bath a small city in the south west of the uk'
                                            ,   100., 50., .7, 300., 22., null, Path.rainbowPencilHighlight );		
		drawToScreen( path );
	}
	
	public function drawToScreen( path_: Array<CommandData> ) 
	{
		
        var path = path_;
        surface.paintFunction = function( g2D: Graphics2D ) {
            // Maybe changing winding rule will help letter 'c' to be drawn?
            //g2D.setWindingRule(GeneralPath.WIND_NON_ZERO);
            // Not updated to use for color there are quite a few java issues to resolve so this target on hold
            var gPath = new GeneralPath();
            var p: Array<Float>;
            for( cmd in path ) {
                p = cmd.v0;
                switch( cmd.v1 ) {
                    case MoveTo:    gPath.moveTo( p[0], p[1] );
                    case LineTo:    gPath.lineTo( p[0], p[1] );
                    case CurveTo:   gPath.quadTo( p[0], p[1], p[2], p[3] );
                    case _:
                }
            }
            gPath.closePath();
            g2D.setColor( Color.ORANGE );
            g2D.fill( gPath );
            g2D.dispose();
        }
    } 
	
	
}