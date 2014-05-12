package com.codeazur.as3icy.decoder;

import com.codeazur.as3icy.decoder.Temporaire;

class LayerIIISideInfo
{
    public var main_data_begin : Int = 0;
    public var private_bits : Int = 0;
    public var ch : Array<Temporaire>;
    
    public function new()
    {
        ch = new Array<Temporaire>();
        ch[0] = new Temporaire();
        ch[1] = new Temporaire();
    }
}

