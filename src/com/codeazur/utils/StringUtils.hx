package com.codeazur.utils;


import flash.events.*;

class StringUtils
{
    public static function trim(input : String) : String{
        return StringUtils.ltrim(StringUtils.rtrim(input));
    }
    
    public static function ltrim(input : String) : String{
        if (input != null) {
            var size : Float = input.length;
            for (i in 0...size){
                if (input.charCodeAt(i) > 32) {
                    return input.substring(i);
                }
            }
        }
        return "";
    }
    
    public static function rtrim(input : String) : String{
        if (input != null) {
            var size : Float = input.length;
            var i : Float = size;
            while (i > 0){
                if (input.charCodeAt(i - 1) > 32) {
                    return input.substring(0, i);
                }
                i--;
            }
        }
        return "";
    }
    
    private static var i : Int = 0;
    
    private static inline var SIGN_UNDEF : Int = 0;
    private static var SIGN_POS : Int = -1;
    private static inline var SIGN_NEG : Int = 1;
    
    public static function printf(format : String) : String{
        var result : String = "";
        var indexValue : Int = 0;
        var isIndexed : Int = -1;
        var typeLookup : String = "diufFeEgGxXoscpn";
        for (i in 0...format.length){
            var c : String = format.charAt(i);
            if (c == "%") {
                if (++i < format.length) {
                    c = format.charAt(i);
                    if (c == "%") {
                        result += c;
                    }
                    else {
                        var flagSign : Bool = false;
                        var flagLeftAlign : Bool = false;
                        var flagAlternate : Bool = false;
                        var flagLeftPad : Bool = false;
                        var flagZeroPad : Bool = false;
                        var width : Int = -1;
                        var precision : Int = -1;
                        var type : String = "";
                        var value : Dynamic;
                        var j : Int;
                        
                        ///////////////////////////
                        // parse parameter
                        ///////////////////////////
                        var idx : Int = getIndex(format);
                        if (idx < -1 || idx == 0) {
                            trace("ERR parsing index");
                            break;
                        }
                        ///////////////////////////
                        // parse flags
                        ///////////////////////////
                        else if (idx == -1) {
                            if (isIndexed == 1) {trace("ERR: indexed placeholder expected");break;
                            }
                            if (isIndexed == -1) {isIndexed = 0;
                            }
                            indexValue++;
                        }
                        else {
                            if (isIndexed == 0) {trace("ERR: non-indexed placeholder expected");break;
                            }
                            if (isIndexed == -1) {isIndexed = 1;
                            }
                            indexValue = idx;
                        }
                        
                        
                        
                        
                        
                        
                        
                        while ((c = format.charAt(i)) == "+" || c == "-" || c == "#" || c == " " || c == "0"){
                            switch (c)
                            {
                                case "+":flagSign = true;
                                case "-":flagLeftAlign = true;
                                case "#":flagAlternate = true;
                                case " ":flagLeftPad = true;
                                case "0":flagZeroPad = true;
                            }
                            if (++i == format.length) {break;
                            }
                            c = format.charAt(i);
                        }
                        if (i == format.length) {break;
                        }  ///////////////////////////    // parse width    ///////////////////////////  
                        
                        
                        
                        
                        
                        
                        
                        if (c == "*") {
                            var widthIndex : Int = 0;
                            if (++i == format.length) {break;
                            }
                            idx = getIndex(format);
                            if (idx < -1 || idx == 0) {
                                trace("ERR parsing index for width");
                                break;
                            }
                            else if (idx == -1) {
                                if (isIndexed == 1) {trace("ERR: indexed placeholder expected for width");break;
                                }
                                if (isIndexed == -1) {isIndexed = 0;
                                }
                                widthIndex = indexValue++;
                            }
                            else {
                                if (isIndexed == 0) {trace("ERR: non-indexed placeholder expected for width");break;
                                }
                                if (isIndexed == -1) {isIndexed = 1;
                                }
                                widthIndex = idx;
                            }
                            widthIndex--;
                            if (args.length > widthIndex && widthIndex >= 0) {
                                width = parseInt(args[widthIndex]);
                                if (Math.isNaN(width)) {
                                    width = -1;
                                    trace("ERR NaN while parsing width");
                                    break;
                                }
                            }
                            else {
                                trace("ERR index out of bounds while parsing width");
                                break;
                            }
                            c = format.charAt(i);
                        }
                        else {
                            var hasWidth : Bool = false;
                            while (c >= "0" && c <= "9"){
                                if (width == -1) {width = 0;
                                }
                                width = (width * 10) + Int(c);
                                if (++i == format.length) {break;
                                }
                                c = format.charAt(i);
                            }
                            if (width != -1 && i == format.length) {
                                trace("ERR eof while parsing width");
                                break;
                            }
                        }  ///////////////////////////    // parse precision    ///////////////////////////  
                        
                        
                        
                        
                        
                        
                        
                        if (c == ".") {
                            if (++i == format.length) {break;
                            }
                            c = format.charAt(i);
                            if (c == "*") {
                                var precisionIndex : Int = 0;
                                if (++i == format.length) {break;
                                }
                                idx = getIndex(format);
                                if (idx < -1 || idx == 0) {
                                    trace("ERR parsing index for precision");
                                    break;
                                }
                                else if (idx == -1) {
                                    if (isIndexed == 1) {trace("ERR: indexed placeholder expected for precision");break;
                                    }
                                    if (isIndexed == -1) {isIndexed = 0;
                                    }
                                    precisionIndex = indexValue++;
                                }
                                else {
                                    if (isIndexed == 0) {trace("ERR: non-indexed placeholder expected for precision");break;
                                    }
                                    if (isIndexed == -1) {isIndexed = 1;
                                    }
                                    precisionIndex = idx;
                                }
                                precisionIndex--;
                                if (args.length > precisionIndex && precisionIndex >= 0) {
                                    precision = parseInt(args[precisionIndex]);
                                    if (Math.isNaN(precision)) {
                                        precision = -1;
                                        trace("ERR NaN while parsing precision");
                                        break;
                                    }
                                }
                                else {
                                    trace("ERR index out of bounds while parsing precision");
                                    break;
                                }
                                c = format.charAt(i);
                            }
                            else {
                                while (c >= "0" && c <= "9"){
                                    if (precision == -1) {precision = 0;
                                    }
                                    precision = (precision * 10) + Int(c);
                                    if (++i == format.length) {break;
                                    }
                                    c = format.charAt(i);
                                }
                                if (precision != -1 && i == format.length) {
                                    trace("ERR eof while parsing precision");
                                    break;
                                }
                            }
                        }  ///////////////////////////    // parse length (ignored)    ///////////////////////////  
                        
                        
                        
                        
                        
                        
                        
                        switch (c)
                        {
                            case "h", "l":
                                if (++i == format.length) {trace("ERR eof after length");break;
                                }
                                var c1 : String = format.charAt(i);
                                if ((c == "h" && c1 == "h") || (c == "l" && c1 == "l")) {
                                    if (++i == format.length) {trace("ERR eof after length");break;
                                    }
                                    c = format.charAt(i);
                                }
                                else {
                                    c = c1;
                                }
                            case "L", "z", "j", "t":
                                if (++i == format.length) {trace("ERR eof after length");break;
                                }
                                c = format.charAt(i);
                        }  ///////////////////////////    // parse type    ///////////////////////////  
                        
                        
                        
                        
                        
                        
                        
                        if (typeLookup.indexOf(c) >= 0) {
                            type = c;
                        }
                        else {
                            trace("ERR unknown type: " + c);
                            break;
                        }
                        
                        if (args.length >= indexValue && indexValue > 0) {
                            value = args[indexValue - 1];
                        }
                        else {
                            trace("ERR value index out of bounds (" + indexValue + ")");
                            break;
                        }
                        
                        var valueStr : String;
                        var valueFloat : Float;
                        var valueInt : Int;
                        var sign : Int = SIGN_UNDEF;
                        switch (type)
                        {
                            case "s":
                                valueStr = Std.string(value);
                                if (precision != -1) {valueStr = valueStr.substr(0, precision);
                                }
                            case "c":
                                valueStr = Std.string(value).getAt(0);
                            case "d", "i":
                                valueInt = (((as3hx.Compat.typeof(value) == "number")) ? as3hx.Compat.parseInt(value) : parseInt(value));
                                valueStr = Std.string(Math.abs(valueInt));
                                sign = ((valueInt < 0)) ? SIGN_NEG : SIGN_POS;
                            case "u":
                                valueStr = Std.string((((as3hx.Compat.typeof(value) == "number")) ? Int(value) : Int(parseInt(value))));
                            case "f", "F", "e", "E", "g", "G":
                                if (precision == -1) {precision = 6;
                                }
                                var exp10 : Float = Math.pow(10, precision);
                                valueFloat = ((as3hx.Compat.typeof(value) == "number")) ? Std.parseFloat(value) : parseFloat(value);
                                valueStr = Std.string((Math.round(Math.abs(valueFloat) * exp10) / exp10));
                                if (precision > 0) {
                                    var numZerosToAppend : Int;
                                    var dotPos : Int = valueStr.indexOf(".");
                                    if (dotPos == -1) {
                                        valueStr += ".";
                                        numZerosToAppend = precision;
                                    }
                                    else {
                                        numZerosToAppend = precision - (valueStr.length - dotPos - 1);
                                    }
                                    for (j in 0...numZerosToAppend){
                                        valueStr += "0";
                                    }
                                }
                                sign = ((valueFloat < 0)) ? SIGN_NEG : SIGN_POS;
                            case "x", "X", "p":
                                valueStr = Std.string((((as3hx.Compat.typeof(value) == "number")) ? Int(value) : parseInt(value)));
                                if (type == "X") {valueStr = valueStr.toUpperCase();
                                }
                            case "o":
                                valueStr = Std.string((((as3hx.Compat.typeof(value) == "number")) ? Int(value) : parseInt(value)));
                        }
                        
                        var hasSign : Bool = ((sign == SIGN_NEG) || flagSign || flagLeftPad);
                        if (width > -1) {
                            var numFill : Int = width - valueStr.length;
                            if (hasSign) {numFill--;
                            }
                            if (numFill > 0) {
                                var fillChar : String = ((flagZeroPad && !flagLeftAlign)) ? "0" : " ";
                                if (flagLeftAlign) {
                                    for (j in 0...numFill){
                                        valueStr += fillChar;
                                    }
                                }
                                else {
                                    for (j in 0...numFill){
                                        valueStr = fillChar + valueStr;
                                    }
                                }
                            }
                        }
                        if (hasSign) {
                            if (sign == SIGN_POS) {
                                valueStr = ((flagLeftPad) ? " " : "0") + valueStr;
                            }
                            else {
                                valueStr = "-" + valueStr;
                            }
                        }
                        
                        result += valueStr;
                    }
                }
                else {
                    result += c;
                }
            }
            else {
                result += c;
            }
        }
        return result;
    }
    
    private static function getIndex(format : String) : Int{
        var result : Int = 0;
        var isIndexed : Bool = false;
        var c : String = "";
        var iTmp : Int = i;
        while ((c = format.charAt(i)) >= "0" && c <= "9"){
            isIndexed = true;
            result = (result * 10) + Int(c);
            if (++i == format.length) {return -2;
            }
        }
        if (isIndexed) {
            if (c != "$") {
                i = iTmp;
                return -1;
            }
            if (++i == format.length) {return -2;
            }
            return result;
        }
        else {
            return -1;
        }
    }

    public function new()
    {
    }
}

