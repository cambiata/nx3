/*
Copyright (c) 2014, Justinfront Ltd
project: Letters
author: Justin L Mills
email: JLM at Justinfront dot net
written: in haxe3, 4 January 2013
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/
package letters;
import letters.Path;
import letters.LetterResource;
#if java 
import letters.targetJava.BasicJava;
import java.awt.Graphics2D;
import java.awt.Color;
import java.awt.geom.GeneralPath;
#end
#if js import letters.targetJS.BasicJs; #end
using letters.Path;
class ExampleLetters #if java extends BasicJava #end {
    public var letterResource = new LetterResource();
    public static function main() { new ExampleLetters(); } 
	
	public function new() {
        #if java super(); #end
        var path = Path.generateVectorText(     'hi my name is justin and i live in bath a small city in the south west of the uk'
                                            ,   100., 50., .7, 300., 22., null, Path.rainbowPencilHighlight );
        
        // comment out if you don't want rotated in 3d:
        path = path.rotateXYZ( Math.PI/10, Math.PI/3, Math.PI/10, 1 );
        
        drawToScreen( path );
    }
    #if js 
	
	public function drawToScreen( path: Array<CommandData> ) {
        var basicJs = new BasicJs();
        var surface = basicJs.surface;
        surface.fillStyle = 'orange';
        surface.beginPath();
        var p: Array<Float>;
        var lastCommand: Command = MoveTo;
        for( cmd in path ) {
            p = cmd.v0;
            var command = cmd.v1;
            switch( command ) {
                case MoveTo:    surface.moveTo( p[0], p[1] );
                case LineTo:    surface.lineTo( p[0], p[1] );
                case CurveTo:   surface.quadraticCurveTo( p[0], p[1], p[2], p[3] );
                case OutlineColor:
                    surface.closePath();
                    surface.stroke();
                    surface.fill();
                    surface.lineWidth = 5;
                    surface.strokeStyle = '#' + StringTools.hex( Std.int( p[ 0 ] ) , 6 );
                case FillColor: 
                    if( lastCommand != OutlineColor )
                    {
                        surface.stroke();
                        surface.closePath();
                        surface.fill();
                    }
                    surface.fillStyle = '#' + StringTools.hex( Std.int( p[ 0 ] ) , 6 );
                    surface.beginPath();
            }
            lastCommand = command;
        }
        surface.stroke();
        surface.closePath();
        surface.fill();
    } 
	
	#end
    
	#if java 
	
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
	#end
}
