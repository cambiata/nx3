package com.codeazur.as3icy.decoder;


class SFTable
{
    public var l : Array<Int>;
    public var s : Array<Int>;
    
    public function new(thel : Array<Int> = null, thes : Array<Int> = null)
    {
        l = ((thel != null)) ? thel : new Array<Int>();
        s = ((thes != null)) ? thes : new Array<Int>();
    }
}

