package cx;

class BitTools {
	
	
	public static function intToString (num : Int, base:Int = 2):String 
	{	        
	        var reference = "0123456789ABCDEFGHIJKLMNOPQRSTUVW";
	        var result = new StringBuf();
	        var maxPow = 0;
	        var test = 0;

	        while ( Std.int(Math.pow(base, maxPow)) <= num)
	        {    
		maxPow++;
	        }
	        
	        var i = maxPow - 1;
	        while (i >= 0) 
	        {
		var basePow = Math.pow(base, i);
		var pow = Math.floor(num / basePow);
		result.add(reference.charAt(Std.int(pow)));
		num -= Std.int(pow * basePow);
		i--;
	        }
	        var r = result.toString();
	        return r.length == 0 ? "0" : r;
	 }	
	
	
}