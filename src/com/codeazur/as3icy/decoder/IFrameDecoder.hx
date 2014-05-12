package com.codeazur.as3icy.decoder;


import com.codeazur.as3icy.data.MPEGFrame;

interface IFrameDecoder
{

    function decodeFrame(frame : MPEGFrame) : Void;
}

