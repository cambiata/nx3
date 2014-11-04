package cx;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class StrTools extends haxe.lang.HxObject
{
	public    StrTools(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    StrTools()
	{
		cx.StrTools.__hx_ctor_cx_StrTools(this);
	}
	
	
	public static   void __hx_ctor_cx_StrTools(cx.StrTools __temp_me31)
	{
		{
		}
		
	}
	
	
	public static   int countSub(java.lang.String str, java.lang.String lookForStr)
	{
		return ( haxe.lang.StringExt.split(str, lookForStr).length - 1 );
	}
	
	
	public static   java.lang.String until(java.lang.String str, java.lang.String untilStr, java.lang.Object includeUntilStr)
	{
		boolean __temp_includeUntilStr19 = ( (( includeUntilStr == null )) ? (haxe.lang.Runtime.toBool(false)) : (haxe.lang.Runtime.toBool(includeUntilStr)) );
		int pos = haxe.lang.StringExt.indexOf(str, untilStr, null);
		if (__temp_includeUntilStr19) 
		{
			pos++;
		}
		
		return haxe.lang.StringExt.substring(str, 0, pos);
	}
	
	
	public static   java.lang.String untilLast(java.lang.String str, java.lang.String untilStr, java.lang.Object includeUntilStr)
	{
		boolean __temp_includeUntilStr20 = ( (( includeUntilStr == null )) ? (haxe.lang.Runtime.toBool(false)) : (haxe.lang.Runtime.toBool(includeUntilStr)) );
		int pos = haxe.lang.StringExt.lastIndexOf(str, untilStr, null);
		if (__temp_includeUntilStr20) 
		{
			pos++;
		}
		
		return haxe.lang.StringExt.substring(str, 0, pos);
	}
	
	
	public static   java.lang.String tab(java.lang.String str)
	{
		return ( str + "\t" );
	}
	
	
	public static   java.lang.String newline(java.lang.String str)
	{
		return ( str + "\n" );
	}
	
	
	public static   java.lang.String repeat(java.lang.String repeatString, int count)
	{
		java.lang.String result = "";
		{
			int _g = 0;
			while (( _g < count ))
			{
				int i = _g++;
				result += repeatString;
			}
			
		}
		
		return result;
	}
	
	
	public static   java.lang.String fill(java.lang.String str, java.lang.Object toLength, java.lang.String with, java.lang.String replaceNull)
	{
		if (( replaceNull == null )) 
		{
			replaceNull = "-";
		}
		
		if (( with == null )) 
		{
			with = " ";
		}
		
		int __temp_toLength21 = ( (( toLength == null )) ? (((int) (32) )) : (((int) (haxe.lang.Runtime.toInt(toLength)) )) );
		if (( str == null )) 
		{
			str = replaceNull;
		}
		
		do 
		{
			str += with;
		}
		while (( str.length() < __temp_toLength21 ));
		return haxe.lang.StringExt.substr(str, 0, __temp_toLength21);
	}
	
	
	public static   haxe.root.Array<java.lang.String> splitTrim(java.lang.String str, java.lang.String delimiter)
	{
		if (( delimiter == null )) 
		{
			delimiter = ",";
		}
		
		if (( str == null )) 
		{
			return new haxe.root.Array<java.lang.String>(new java.lang.String[]{});
		}
		
		haxe.root.Array<java.lang.String> a = haxe.lang.StringExt.split(str, delimiter);
		haxe.root.Array<java.lang.String> a2 = new haxe.root.Array<java.lang.String>();
		{
			int _g = 0;
			while (( _g < a.length ))
			{
				java.lang.String part = a.__get(_g);
				 ++ _g;
				java.lang.String part2 = part.trim();
				if (( part2.length() > 0 )) 
				{
					a2.push(part2);
				}
				
			}
			
		}
		
		return a2;
	}
	
	
	public static   java.lang.String replaceNull(java.lang.String str, java.lang.String with)
	{
		if (( with == null )) 
		{
			with = "-";
		}
		
		if (( str == null )) 
		{
			return with;
		}
		 else 
		{
			return str;
		}
		
	}
	
	
	public static   java.lang.String firstUpperCase(java.lang.String str, java.lang.Object restToLowercase)
	{
		boolean __temp_restToLowercase22 = ( (( restToLowercase == null )) ? (haxe.lang.Runtime.toBool(true)) : (haxe.lang.Runtime.toBool(restToLowercase)) );
		java.lang.String rest = null;
		if (__temp_restToLowercase22) 
		{
			rest = haxe.lang.StringExt.substr(str, 1, null).toLowerCase();
		}
		 else 
		{
			rest = haxe.lang.StringExt.substr(str, 1, null);
		}
		
		return ( haxe.lang.StringExt.substr(str, 0, 1).toUpperCase() + rest );
	}
	
	
	public static   java.lang.String afterLast(java.lang.String str, java.lang.String _char, java.lang.Object includeChar)
	{
		boolean __temp_includeChar23 = ( (( includeChar == null )) ? (haxe.lang.Runtime.toBool(false)) : (haxe.lang.Runtime.toBool(includeChar)) );
		int idx = haxe.lang.StringExt.lastIndexOf(str, _char, null);
		if (( idx == -1 )) 
		{
			return str;
		}
		
		if ( ! (__temp_includeChar23) ) 
		{
			idx += _char.length();
		}
		
		return haxe.lang.StringExt.substr(str, idx, null);
	}
	
	
	public static   double similarityCaseIgnore(java.lang.String strA, java.lang.String strB)
	{
		return cx.StrTools.similarity(strA.toLowerCase(), strB.toLowerCase());
	}
	
	
	public static   double similarityCaseBalance(java.lang.String strA, java.lang.String strB)
	{
		return ( (( cx.StrTools.similarity(strA, strB) + cx.StrTools.similarity(strA.toLowerCase(), strB.toLowerCase()) )) / 2 );
	}
	
	
	public static   double similarity(java.lang.String strA, java.lang.String strB)
	{
		if (haxe.lang.Runtime.valEq(strA, strB)) 
		{
			return ((double) (1) );
		}
		
		if (( strA.length() > strB.length() )) 
		{
			java.lang.String strC = strA;
			strA = strB;
			strB = strC;
		}
		
		return cx.StrTools._similarity(strA, strB);
	}
	
	
	public static   double similarityAssymetric(java.lang.String strShorter, java.lang.String strLonger)
	{
		if (haxe.lang.Runtime.valEq(strShorter, strLonger)) 
		{
			return ((double) (1) );
		}
		
		return cx.StrTools._similarity(strShorter, strShorter);
	}
	
	
	public static   double _similarity(java.lang.String strA, java.lang.String strB)
	{
		int lengthA = strA.length();
		int lengthB = strB.length();
		int i = 0;
		int segmentCount = 0;
		haxe.root.Array<java.lang.Object> segmentsInfos = new haxe.root.Array<java.lang.Object>();
		java.lang.String segment = "";
		while (( i < lengthA ))
		{
			java.lang.String _char = haxe.lang.StringExt.charAt(strA, i);
			if (( haxe.lang.StringExt.indexOf(strB, _char, null) > -1 )) 
			{
				segment += _char;
				if (( haxe.lang.StringExt.indexOf(strB, segment, null) > -1 )) 
				{
					int segmentPosA = ( ( i - segment.length() ) + 1 );
					int segmentPosB = haxe.lang.StringExt.indexOf(strB, segment, null);
					double positionDiff = java.lang.Math.abs(((double) (( segmentPosA - segmentPosB )) ));
					double posFactor = ( (( lengthA - positionDiff )) / lengthB );
					double lengthFactor = ( ((double) (segment.length()) ) / lengthA );
					segmentsInfos.__set(segmentCount, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"segment"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{segment}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"score"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (( posFactor * lengthFactor )) )})));
				}
				 else 
				{
					segment = "";
					segmentCount++;
					i--;
				}
				
			}
			 else 
			{
				segment = "";
				segmentCount++;
			}
			
			i++;
		}
		
		int usedSegmentsCount = -2;
		double totalScore = 0.0;
		{
			int _g = 0;
			while (( _g < segmentsInfos.length ))
			{
				java.lang.Object si = segmentsInfos.__get(_g);
				 ++ _g;
				if (( ! (( si == null )) )) 
				{
					totalScore = ( totalScore + ((double) (haxe.lang.Runtime.getField_f(si, "score", true)) ) );
					usedSegmentsCount++;
				}
				
			}
			
		}
		
		totalScore = ( totalScore - ( java.lang.Math.max(((double) (usedSegmentsCount) ), ((double) (0) )) * 0.02 ) );
		return java.lang.Math.max(((double) (0) ), java.lang.Math.min(totalScore, ((double) (1) )));
	}
	
	
	public static   boolean has(java.lang.String str, java.lang.String substr)
	{
		return ( haxe.lang.StringExt.indexOf(str, substr, null) > -1 );
	}
	
	
	public static   java.lang.String reverse(java.lang.String string)
	{
		java.lang.String result = "";
		{
			int _g1 = 0;
			int _g = string.length();
			while (( _g1 < _g ))
			{
				int i = _g1++;
				result = ( haxe.lang.StringExt.charAt(string, i) + result );
			}
			
		}
		
		return result;
	}
	
	
	public static   java.lang.String intToChar(int _int, java.lang.Object offset)
	{
		int __temp_offset24 = ( (( offset == null )) ? (((int) (65) )) : (((int) (haxe.lang.Runtime.toInt(offset)) )) );
		if (( _int > 9 )) 
		{
			throw haxe.lang.HaxeException.wrap("int to char error");
		}
		
		if (( _int < 0 )) 
		{
			throw haxe.lang.HaxeException.wrap("int to char error");
		}
		
		int c = ( _int + __temp_offset24 );
		java.lang.String _char = Character.toString((char) c);
		return _char;
	}
	
	
	public static   int charToInt(java.lang.String _char, java.lang.Object offset)
	{
		int __temp_offset25 = ( (( offset == null )) ? (((int) (65) )) : (((int) (haxe.lang.Runtime.toInt(offset)) )) );
		if (( _char.length() > 1 )) 
		{
			throw haxe.lang.HaxeException.wrap("char to int error");
		}
		
		return ( ((int) (haxe.lang.Runtime.toInt(haxe.lang.StringExt.charCodeAt(_char, 0))) ) - ((int) (__temp_offset25) ) );
	}
	
	
	public static   java.lang.String numToStr(java.lang.String numStr, java.lang.Object offset)
	{
		int __temp_offset26 = ( (( offset == null )) ? (((int) (65) )) : (((int) (haxe.lang.Runtime.toInt(offset)) )) );
		java.lang.Object testParse = haxe.root.Std.parseInt(numStr);
		java.lang.String result = "";
		{
			int _g1 = 0;
			int _g = numStr.length();
			while (( _g1 < _g ))
			{
				int i = _g1++;
				java.lang.Object _int = haxe.root.Std.parseInt(haxe.lang.StringExt.charAt(numStr, i));
				java.lang.String _char = cx.StrTools.intToChar(((int) (haxe.lang.Runtime.toInt(_int)) ), __temp_offset26);
				result += _char;
			}
			
		}
		
		return result;
	}
	
	
	public static   java.lang.String strToNum(java.lang.String str, java.lang.Object offset)
	{
		int __temp_offset27 = ( (( offset == null )) ? (((int) (65) )) : (((int) (haxe.lang.Runtime.toInt(offset)) )) );
		java.lang.String result = "";
		{
			int _g1 = 0;
			int _g = str.length();
			while (( _g1 < _g ))
			{
				int i = _g1++;
				java.lang.String _char = haxe.lang.StringExt.charAt(str, i);
				int _int = cx.StrTools.charToInt(_char, __temp_offset27);
				result += haxe.root.Std.string(_int);
			}
			
		}
		
		return result;
	}
	
	
	public static   java.lang.String rotate(java.lang.String str, java.lang.Object positions)
	{
		int __temp_positions28 = ( (( positions == null )) ? (((int) (1) )) : (((int) (haxe.lang.Runtime.toInt(positions)) )) );
		java.lang.String result = str;
		{
			int _g = 0;
			while (( _g < __temp_positions28 ))
			{
				int i = _g++;
				result = ( haxe.lang.StringExt.substr(result, 1, result.length()) + haxe.lang.StringExt.substr(result, 0, 1) );
			}
			
		}
		
		return result;
	}
	
	
	public static   java.lang.String rotateBack(java.lang.String str, java.lang.Object positions)
	{
		int __temp_positions29 = ( (( positions == null )) ? (((int) (1) )) : (((int) (haxe.lang.Runtime.toInt(positions)) )) );
		java.lang.String result = str;
		{
			int _g = 0;
			while (( _g < __temp_positions29 ))
			{
				int i = _g++;
				result = ( haxe.lang.StringExt.substr(result, -1, null) + haxe.lang.StringExt.substr(result, 0, ( result.length() - 1 )) );
			}
			
		}
		
		return result;
	}
	
	
	public static   java.lang.String toLatin1(java.lang.String str)
	{
		return haxe.Utf8.decode(str);
	}
	
	
	public static   int lastIdxOf(java.lang.String str, java.lang.String search, java.lang.Object lastPos)
	{
		int __temp_lastPos30 = ( (( lastPos == null )) ? (((int) (0) )) : (((int) (haxe.lang.Runtime.toInt(lastPos)) )) );
		if (( __temp_lastPos30 == 0 )) 
		{
			return haxe.lang.StringExt.lastIndexOf(str, search, null);
		}
		
		{
			int _g = 0;
			while (( _g < __temp_lastPos30 ))
			{
				int i = _g++;
				str = haxe.lang.StringExt.substr(str, 0, haxe.lang.StringExt.lastIndexOf(str, search, null));
			}
			
		}
		
		return haxe.lang.StringExt.lastIndexOf(str, search, null);
	}
	
	
	public static   int toInt(java.lang.String str)
	{
		return ((int) (haxe.lang.Runtime.toInt(haxe.root.Std.parseInt(str))) );
	}
	
	
	public static   double toFloat(java.lang.String str)
	{
		return haxe.root.Std.parseFloat(str);
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new cx.StrTools(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new cx.StrTools();
	}
	
	
}


