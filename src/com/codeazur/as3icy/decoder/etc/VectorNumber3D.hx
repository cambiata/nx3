package com.codeazur.as3icy.decoder.etc;


class VectorNumber3D
{
    public var v : Array<Array<Array<Float>>>;
    
    public function new(level0Size : Int, level1Size : Int, level2Size : Int)
    {
        v = new Array<Array<Array<Float>>>();
        for (i in 0...level0Size){
            v[i] = new Array<Array<Float>>();
            for (j in 0...level1Size){
                v[i][j] = new Array<Float>();
            }
        }
    }
}

