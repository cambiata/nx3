package cx;

/**
 * ...
 * @author Jonas Nyström
 */
class ColorTools
{
    public static inline function toRGB(int:Int) : RGB
    {
        return {
            r: ((int >> 16) & 255) / 255,
            g: ((int >> 8) & 255) / 255,
            b: (int & 255) / 255,
        }
    }
	
}

typedef RGB = {
    var r:Float;
    var g:Float;
    var b:Float;
}
