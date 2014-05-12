package com.codeazur.as3icy.decoder;


class GRInfo
{
    public var part2_3_length : Int = 0;
    public var big_values : Int = 0;
    public var global_gain : Int = 0;
    public var scalefac_compress : Int = 0;
    public var window_switching_flag : Int = 0;
    public var block_type : Int = 0;
    public var mixed_block_flag : Int = 0;
    public var table_select : Array<Int>;
    public var subblock_gain : Array<Int>;
    public var region0_count : Int = 0;
    public var region1_count : Int = 0;
    public var preflag : Int = 0;
    public var scalefac_scale : Int = 0;
    public var count1table_select : Int = 0;
    
    public function new()
    {
        table_select = new Array<Int>();
        subblock_gain = new Array<Int>();
    }
}

