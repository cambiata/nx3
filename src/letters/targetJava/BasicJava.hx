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
package letters.targetJava;

import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.Color;
import java.awt.Cursor;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseListener;
import java.awt.event.MouseMotionListener;
import java.awt.event.MouseEvent;
import java.lang.System;
import java.awt.Graphics2D;
import haxe.macro.Compiler;

class BasicJava
extends JFrame
implements KeyListener
implements MouseListener
implements MouseMotionListener
{
    
    public var surface: Surface;
    
	@static inline function parseInt( e: String ): Int return Std.parseInt( e );
	
    public function new()
    {
        super( "Test Java" );
		//super();
		System.setProperty( "sun.java2d.opengl", "True" );
        setSize( 1200, 800);
        setDefaultCloseOperation( JFrame.EXIT_ON_CLOSE );
        setBackground( Color.black );
        
        surface = new Surface();
        getContentPane().add( surface );
        surface.addKeyListener( this );
        surface.setFocusable( true );
        surface.requestFocusInWindow();
        addMouseListener( this );
        addMouseMotionListener( this );
        //surface.repaint();
        
        setVisible( true );
    }
    
    // Mouse and keyboard events ready to be used...
    public function mousePressed( e: MouseEvent ) {}
    public function mouseDragged( e: MouseEvent ) {}
    public function mouseExited( e: MouseEvent ) {}
    public function mouseMoved( e: MouseEvent ) {}
    public function mouseEntered( e: MouseEvent ) {}
    public function mouseClicked( e: MouseEvent ) {}
    public function mouseReleased( e: MouseEvent ){}
    public function keyTyped( e: KeyEvent ) {}
    public function keyReleased(e: KeyEvent ) {}
    public function keyPressed( e: KeyEvent ) {};

}