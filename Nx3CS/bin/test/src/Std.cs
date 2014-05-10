
#pragma warning disable 109, 114, 219, 429, 168, 162
public  class Std {
	public    Std(){
		unchecked {
			#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			{
			}
			
		}
		#line default
	}
	
	
	public static   bool @is(object v, object t){
		unchecked {
			#line 29 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			if (global::haxe.lang.Runtime.eq(v, default(object))) {
				#line 30 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				return global::haxe.lang.Runtime.eq(t, typeof(object));
			}
			
			#line 31 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			if (global::haxe.lang.Runtime.eq(t, default(object))) {
				#line 32 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				return false;
			}
			
			#line 33 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			global::System.Type clt = ((global::System.Type) (t) );
			if (global::haxe.lang.Runtime.typeEq(clt, default(global::System.Type))) {
				#line 35 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				return false;
			}
			
			#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			string name = global::haxe.lang.Runtime.toString(clt);
			#line 38 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			switch (name){
				case "System.Double":
				{
					#line 41 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					return v is double || v is int;
				}
				
				
				case "System.Int32":
				{
					#line 43 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					return haxe.lang.Runtime.isInt(v);
				}
				
				
				case "System.Boolean":
				{
					#line 45 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					return v is bool;
				}
				
				
				case "System.Object":
				{
					#line 47 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					return true;
				}
				
				
			}
			
			#line 50 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			return clt.IsAssignableFrom(((global::System.Type) (global::cs.Lib.nativeType(v)) ));
		}
		#line default
	}
	
	
	public static   string @string(object s){
		unchecked {
			#line 54 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			if (global::haxe.lang.Runtime.eq(s, default(object))) {
				#line 55 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				return "null";
			}
			
			#line 56 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			if (( s is bool )) {
				#line 57 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				if (global::haxe.lang.Runtime.toBool(s)) {
					#line 57 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					return "true";
				}
				 else {
					#line 57 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					return "false";
				}
				
			}
			
			#line 59 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			return s.ToString();
		}
		#line default
	}
	
	
	public static   global::haxe.lang.Null<int> parseInt(string x){
		unchecked {
			#line 67 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			if (string.Equals(x, default(string))) {
				#line 67 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				return default(global::haxe.lang.Null<int>);
			}
			
			#line 69 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			int ret = 0;
			int @base = 10;
			int i = -1;
			int len = x.Length;
			#line 74 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			if (( x.StartsWith("0") && ( len > 2 ) )) {
				#line 76 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				int c = ((int) (global::haxe.lang.Runtime.toInt(x[1])) );
				if (( ( c == 120 ) || ( c == 88 ) )) {
					#line 79 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					i = 1;
					@base = 16;
				}
				
			}
			
			#line 84 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			bool foundAny = false;
			bool isNeg = false;
			while ((  ++ i < len )){
				#line 88 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				int c1 = default(int);
				#line 88 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				c1 = ((int) (global::haxe.lang.Runtime.toInt(x[i])) );
				if ( ! (foundAny) ) {
					#line 91 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					switch (c1){
						case 45:
						{
							#line 94 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
							isNeg = true;
							continue;
						}
						
						
						case 32:case 9:case 10:case 13:case 43:
						{
							#line 97 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
							if (isNeg) {
								#line 98 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
								return default(global::haxe.lang.Null<int>);
							}
							
							#line 99 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
							continue;
						}
						
						
					}
					
				}
				
				#line 103 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				if (( ( c1 >= 48 ) && ( c1 <= 57 ) )) {
					#line 105 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					if ((  ! (foundAny)  && ( c1 == 48 ) )) {
						#line 107 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
						foundAny = true;
						continue;
					}
					
					#line 110 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					ret *= @base;
					#line 110 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					foundAny = true;
					#line 112 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					ret += ( c1 - 48 );
				}
				 else {
					#line 113 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					if (( @base == 16 )) {
						#line 114 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
						if (( ( c1 >= 97 ) && ( c1 <= 102 ) )) {
							#line 115 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
							ret *= @base;
							#line 115 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
							foundAny = true;
							ret += ( ( c1 - 97 ) + 10 );
						}
						 else {
							#line 117 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
							if (( ( c1 >= 65 ) && ( c1 <= 70 ) )) {
								#line 118 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
								ret *= @base;
								#line 118 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
								foundAny = true;
								ret += ( ( c1 - 65 ) + 10 );
							}
							 else {
								#line 121 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
								break;
							}
							
						}
						
					}
					 else {
						#line 124 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
						break;
					}
					
				}
				
			}
			
			#line 128 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			if (foundAny) {
				#line 129 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				if (isNeg) {
					#line 129 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					return new global::haxe.lang.Null<int>( - (ret) , true);
				}
				 else {
					#line 129 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					return new global::haxe.lang.Null<int>(ret, true);
				}
				
			}
			 else {
				#line 131 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				return default(global::haxe.lang.Null<int>);
			}
			
		}
		#line default
	}
	
	
	public static   double parseFloat(string x){
		unchecked {
			#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			if (string.Equals(x, default(string))) {
				#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				return global::Math.NaN;
			}
			
			#line 136 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			x = x.TrimStart();
			#line 138 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			double ret = 0.0;
			double div = 0.0;
			double e = 0.0;
			#line 142 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			int len = x.Length;
			bool foundAny = false;
			bool isNeg = false;
			int i = -1;
			while ((  ++ i < len )){
				#line 148 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				int c = default(int);
				#line 148 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				c = ((int) (global::haxe.lang.Runtime.toInt(x[i])) );
				if ( ! (foundAny) ) {
					#line 151 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					switch (c){
						case 45:
						{
							#line 154 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
							isNeg = true;
							continue;
						}
						
						
						case 32:case 9:case 10:case 13:case 43:
						{
							#line 157 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
							if (isNeg) {
								#line 158 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
								return global::Math.NaN;
							}
							
							#line 159 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
							continue;
						}
						
						
					}
					
				}
				
				#line 163 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				if (( c == 46 )) {
					#line 165 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					if (( div != 0.0 )) {
						#line 166 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
						break;
					}
					
					#line 167 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					div = 1.0;
					#line 169 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					continue;
				}
				
				#line 172 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				if (( ( c >= 48 ) && ( c <= 57 ) )) {
					#line 174 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					if ((  ! (foundAny)  && ( c == 48 ) )) {
						#line 176 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
						foundAny = true;
						continue;
					}
					
					#line 180 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					ret *= ((double) (10) );
					#line 180 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					foundAny = true;
					#line 180 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					div *= ((double) (10) );
					#line 182 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					ret += ((double) (( c - 48 )) );
				}
				 else {
					#line 183 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					if (( foundAny && (( ( c == 101 ) || ( c == 69 ) )) )) {
						#line 184 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
						bool eNeg = false;
						bool eFoundAny = false;
						if (( ( i + 1 ) < len )) {
							#line 188 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
							int next = default(int);
							#line 188 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
							next = ((int) (x[( i + 1 )]) );
							if (( next == 45 )) {
								#line 191 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
								eNeg = true;
								i++;
							}
							 else {
								#line 193 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
								if (( next == 43 )) {
									#line 194 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
									i++;
								}
								
							}
							
						}
						
						#line 198 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
						while ((  ++ i < len )){
							#line 200 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
							c = ((int) (x[i]) );
							if (( ( c >= 48 ) && ( c <= 57 ) )) {
								#line 203 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
								if ((  ! (eFoundAny)  && ( c == 48 ) )) {
									#line 204 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
									continue;
								}
								
								#line 205 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
								eFoundAny = true;
								e *= ((double) (10) );
								e += ((double) (( c - 48 )) );
							}
							 else {
								#line 209 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
								break;
							}
							
						}
						
						#line 213 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
						if (eNeg) {
							#line 213 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
							e =  - (e) ;
						}
						
					}
					 else {
						#line 215 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
						break;
					}
					
				}
				
			}
			
			#line 219 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			if (( div == 0.0 )) {
				#line 219 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				div = 1.0;
			}
			
			#line 221 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			if (foundAny) {
				#line 223 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				if (isNeg) {
					#line 223 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					ret =  - ((( ret / div ))) ;
				}
				 else {
					#line 223 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					ret = ( ret / div );
				}
				
				#line 224 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				if (( e != 0.0 )) {
					#line 226 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					return ( ret * global::System.Math.Pow(((double) (10.0) ), ((double) (e) )) );
				}
				 else {
					#line 228 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
					return ret;
				}
				
			}
			 else {
				#line 231 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				return global::Math.NaN;
			}
			
		}
		#line default
	}
	
	
	public static   int random(int x){
		unchecked {
			#line 240 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			if (( x <= 0 )) {
				#line 240 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
				return 0;
			}
			
			#line 241 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Std.hx"
			return global::Math.rand.Next(((int) (x) ));
		}
		#line default
	}
	
	
}


