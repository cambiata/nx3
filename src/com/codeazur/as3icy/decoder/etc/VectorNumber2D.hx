package com.codeazur.as3icy.decoder.etc;


class VectorNumber2D
{
    public var v : Array<Array<Float>>;
    
    public function new(level0Size : Int, level1Size : Int)
    {
        v = new Array<Array<Float>>();
        for (i in 0...level0Size){
            v[i] = new Array<Float>();
        }
    }
}

