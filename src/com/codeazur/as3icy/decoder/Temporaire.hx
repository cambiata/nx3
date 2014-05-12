package com.codeazur.as3icy.decoder;


import com.codeazur.as3icy.decoder.etc.VectorInt2D;

class Temporaire
{
    public var scfsi : Array<Int>;
    public var gr : Array<GRInfo>;
    
    public function new()
    {
        scfsi = new Array<Int>();
        gr = new Array<GRInfo>();
        gr[0] = new GRInfo();
        gr[1] = new GRInfo();
    }
}

