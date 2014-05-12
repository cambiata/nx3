package com.codeazur.as3icy.decoder;


class HuffResult
{
    public var x : Int;
    public var y : Int;
    public var v : Int;
    public var w : Int;
    
    public function new()
    {
        reset();
    }
    
    public function reset() : Void{
        x = 0;
        y = 0;
        v = 0;
        w = 0;
    }
}

