package com.codeazur.utils;


import com.codeazur.as3icy.ICYConst;
import flash.utils.ByteArray;

class BitArray extends ByteArray
{
    private var bitsPending : Int = 0;
    
    public function readBits(bits : Int, bitBuffer : Int = 0) : Int{
        if (bits == 0) {return bitBuffer;
        }
        var partial : Int;
        var bitsConsumed : Int;
        if (bitsPending > 0) {
            var byte : Int = this[position - 1] & (0xff >> (8 - bitsPending));
            bitsConsumed = Std.int(Math.min(bitsPending, bits));
            bitsPending -= bitsConsumed;
            partial = byte >> bitsPending;
        }
        else {
            bitsConsumed = Std.int(Math.min(8, bits));
            bitsPending = 8 - bitsConsumed;
            partial = readUnsignedByte() >> bitsPending;
        }
        bits -= bitsConsumed;
        bitBuffer = (bitBuffer << bitsConsumed) | partial;
        return ((bits > 0)) ? readBits(bits, bitBuffer) : bitBuffer;
    }
    
    public function writeBits(bits : Int, value : Int) : Void{
        if (bits == 0) {return;
        }
        value &= (0xffffffff >>> (32 - bits));
        var bitsConsumed : Int;
        if (bitsPending > 0) {
            if (bitsPending > bits) {
                this[position - 1] |= value << (bitsPending - bits);
                bitsConsumed = bits;
                bitsPending -= bits;
            }
            else if (bitsPending == bits) {
                this[position - 1] |= value;
                bitsConsumed = bits;
                bitsPending = 0;
            }
            else {
                this[position - 1] |= value >> (bits - bitsPending);
                bitsConsumed = bitsPending;
                bitsPending = 0;
            }
        }
        else {
            bitsConsumed = Std.int(Math.min(8, bits));
            bitsPending = 8 - bitsConsumed;
            writeByte((value >> (bits - bitsConsumed)) << bitsPending);
        }
        bits -= bitsConsumed;
        if (bits > 0) {
            writeBits(bits, value);
        }
    }
    
    public function resetBitsPending() : Void{
        //if (bitsPending > 0) {
        //	trace("### pending:" + bitsPending + " pos:" + (position - 1));
        //}
        bitsPending = 0;
    }
    
    public function getMinBits(a : Int, b : Int = 0, c : Int = 0, d : Int = 0) : Int{
        var val : Int = a | b | c | d;
        var bits : Int = 1;
        
        do{
            val >>>= 1;
            ++bits;
        }        while ((val != 0));
        
        return bits;
    }
    
    public function getMinSBits(a : Int, b : Int = 0, c : Int = 0, d : Int = 0) : Int
    {
        return getMinBits(Std.int(Math.abs(a)), Std.int(Math.abs(b)), Std.int(Math.abs(c)), Std.int(Math.abs(d)));
    }
    
    public function getMinFBits(a : Float, b : Float = 0, c : Float = 0, d : Float = 0) : Int{
        return getMinSBits(Std.int(a * 65536), Std.int(b * 65536), Std.int(c * 65536), Std.int(d * 65536));
    }
    
    public function calculateMaxBits(signed : Bool, values:Array<Int>) : Int{
        var b : Int = 0;
	
        var vmax : Int = ICYConst.INT_MIN_VALUE;
	
        for (i in 0...values.length){
            if (values[i] >= 0) {
                b |= values[i];
            }
            else {
                b |= ~values[i] << 1;
            }
            if (signed && (vmax < values[i])) {
                vmax = values[i];
            }
        }
        var bits : Int = Std.string(b).length;
        if (signed && vmax > 0 && Std.string(vmax).length >= bits) {
            bits++;
        }
        return bits;
    }

    public function new()
    {
        super();
    }
}

