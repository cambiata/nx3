package com.codeazur.as3icy.decoder.etc;


class VectorInt2D
{
    public var v : Array<Array<Int>>;
    
    public function new(level0Size : Int, level1Size : Int = -1)
    {
        var hasLevel1Size : Bool = (level1Size > -1);
        v = new Array<Array<Int>>();
        for (i in 0...level0Size){
            v[i] = new Array<Int>();
        }
    }
}

