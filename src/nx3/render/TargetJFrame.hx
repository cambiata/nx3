package nx3.render;
import letters.targetJava.Surface;
import nx3.action.EActivityType;
import nx3.geom.Pnts;
import nx3.geom.Rectangles;
import nx3.geom.Rectangle;
import nx3.render.scaling.TScaling;
import javax.swing.JFrame;
import java.awt.Color;
import java.awt.Cursor;
import java.lang.System;
import nx3.TFontInfo;

/**
 * ...
 * @author Jonas Nyström
 */
class TargetJFrame extends JFrame implements ITarget
{
    public var surface: Surface;
	public function new() 
	{
        super( "TargetJFrame" );
		//super();
		System.setProperty( "sun.java2d.opengl", "True" );
        setSize( 1200, 800);
        setDefaultCloseOperation( JFrame.EXIT_ON_CLOSE );
        setBackground( Color.black );
        
        surface = new Surface();
        getContentPane().add( surface );
        surface.setFocusable( true );
        surface.requestFocusInWindow();
        
        setVisible( true );		
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function getScaling():TScaling 
	{
		return null;
	}
	
	public function testLines(x:Float, y:Float, width:Float):Void 
	{
		
	}
	
	public function rect(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int):Void 
	{
		
	}
	
	public function rectangle(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int):Void 
	{
		
	}
	
	public function rectangles(x:Float, y:Float, rects:Rectangles, ?lineWidth:Float, ?lineColor:Int):Void 
	{
		
	}
	
	public function filledrectangle(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int):Void 
	{
		
	}
	
	public function filledellipse(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int):Void 
	{
		
	}
	
	public function line(x:Float, y:Float, x2:Float, y2:Float, ?lineWidth:Float, ?lineColor:Int):Void 
	{
		
	}
	
	public function shape(x:Float, y:Float, xmlStr:String, ?fillColor:Int):Void 
	{
		
	}
	
	public function text(x:Float, y:Float, text:String):Void 
	{
		
	}
	
	public function textwidth(text:String):Float 
	{
		return 0;
	}
	
	public function textheight(text:String):Float 
	{
		return 0;
	}
	
	@:overload public function setFont(font:TFontInfo):Void 
	{
		
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function clear():Void 
	{
		
	}
	
	public function parallellogram(x:Float, y:Float, width:Float, y2:Float, pheight:Float, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int):Void 
	{
		
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function polyline(x:Float, y:Float, coordinates:Pnts, ?lineWidth:Float = 1, ?lineColor:Int = 0x000000):Void 
	{
		
	}
	
	public function polyfill(x:Float, y:Float, coordinates:Pnts, ?lineWidth:Float = 1, ?lineColor:Int = 0x000000, fillColor:Int = 0x000000):Void 
	{
		
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function interactiveEllipse(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int, cb:EActivityType -> Void = null):Void 
	{
		
	}
	
	public function scaleRect(rect:Rectangle, inflateX:Float = 0, inflateY:Float = 0):Rectangle 
	{
		return null;
	}
	
	public function tooltipShow(rect:Rectangle, text:String):Void 
	{
		
	}
	
	public function tooltipHide():Void 
	{
		
	}
	
}