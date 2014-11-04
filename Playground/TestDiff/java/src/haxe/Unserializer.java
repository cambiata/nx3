package haxe;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class Unserializer extends haxe.lang.HxObject
{
	static 
	{
		haxe.Unserializer.DEFAULT_RESOLVER = haxe.root.Type.class;
		haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
		haxe.Unserializer.CODES = null;
	}
	public    Unserializer(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    Unserializer(java.lang.String buf)
	{
		haxe.Unserializer.__hx_ctor_haxe_Unserializer(this, buf);
	}
	
	
	public static   void __hx_ctor_haxe_Unserializer(haxe.Unserializer __temp_me37, java.lang.String buf)
	{
		__temp_me37.buf = buf;
		__temp_me37.length = buf.length();
		__temp_me37.pos = 0;
		__temp_me37.scache = new haxe.root.Array<java.lang.String>();
		__temp_me37.cache = new haxe.root.Array();
		java.lang.Object r = haxe.Unserializer.DEFAULT_RESOLVER;
		if (( r == null )) 
		{
			r = haxe.root.Type.class;
			haxe.Unserializer.DEFAULT_RESOLVER = r;
		}
		
		__temp_me37.setResolver(r);
	}
	
	
	public static  java.lang.Object DEFAULT_RESOLVER;
	
	public static  java.lang.String BASE64;
	
	public static  haxe.root.Array<java.lang.Object> CODES;
	
	public static   haxe.root.Array<java.lang.Object> initCodes()
	{
		haxe.root.Array<java.lang.Object> codes = new haxe.root.Array<java.lang.Object>();
		{
			int _g1 = 0;
			int _g = haxe.Unserializer.BASE64.length();
			while (( _g1 < _g ))
			{
				int i = _g1++;
				int __temp_stmt309 = 0;
				{
					java.lang.String s = haxe.Unserializer.BASE64;
					__temp_stmt309 = ( (( i < s.length() )) ? (((int) (s.charAt(i)) )) : (-1) );
				}
				
				codes.__set(__temp_stmt309, i);
			}
			
		}
		
		return codes;
	}
	
	
	public static   java.lang.Object run(java.lang.String v)
	{
		return new haxe.Unserializer(haxe.lang.Runtime.toString(v)).unserialize();
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new haxe.Unserializer(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new haxe.Unserializer(haxe.lang.Runtime.toString(arr.__get(0)));
	}
	
	
	public  java.lang.String buf;
	
	public  int pos;
	
	public  int length;
	
	public  haxe.root.Array cache;
	
	public  haxe.root.Array<java.lang.String> scache;
	
	public  java.lang.Object resolver;
	
	public   void setResolver(java.lang.Object r)
	{
		if (( r == null )) 
		{
			{
				haxe.lang.Function __temp_odecl274 = ( (( haxe.Unserializer_setResolver_127__Fun.__hx_current != null )) ? (haxe.Unserializer_setResolver_127__Fun.__hx_current) : (haxe.Unserializer_setResolver_127__Fun.__hx_current = ((haxe.Unserializer_setResolver_127__Fun) (new haxe.Unserializer_setResolver_127__Fun()) )) );
				haxe.lang.Function __temp_odecl275 = ( (( haxe.Unserializer_setResolver_128__Fun.__hx_current != null )) ? (haxe.Unserializer_setResolver_128__Fun.__hx_current) : (haxe.Unserializer_setResolver_128__Fun.__hx_current = ((haxe.Unserializer_setResolver_128__Fun) (new haxe.Unserializer_setResolver_128__Fun()) )) );
				this.resolver = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"resolveClass", "resolveEnum"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{__temp_odecl274, __temp_odecl275}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
			}
			
		}
		 else 
		{
			this.resolver = r;
		}
		
	}
	
	
	public   int readDigits()
	{
		int k = 0;
		boolean s = false;
		int fpos = this.pos;
		while (true)
		{
			int c = 0;
			{
				int p = this.pos;
				{
					java.lang.String s1 = this.buf;
					if (( p < s1.length() )) 
					{
						c = ((int) (s1.charAt(p)) );
					}
					 else 
					{
						c = -1;
					}
					
				}
				
			}
			
			if (( c == -1 )) 
			{
				break;
			}
			
			if (( c == 45 )) 
			{
				if (( this.pos != fpos )) 
				{
					break;
				}
				
				s = true;
				this.pos++;
				continue;
			}
			
			if (( ( c < 48 ) || ( c > 57 ) )) 
			{
				break;
			}
			
			k = ( ( k * 10 ) + (( c - 48 )) );
			this.pos++;
		}
		
		if (s) 
		{
			k *= -1;
		}
		
		return k;
	}
	
	
	public   void unserializeObject(java.lang.Object o)
	{
		while (true)
		{
			if (( this.pos >= this.length )) 
			{
				throw haxe.lang.HaxeException.wrap("Invalid object");
			}
			
			int __temp_stmt276 = 0;
			{
				int p = this.pos;
				{
					java.lang.String s = this.buf;
					__temp_stmt276 = ( (( p < s.length() )) ? (((int) (s.charAt(p)) )) : (-1) );
				}
				
			}
			
			if (( __temp_stmt276 == 103 )) 
			{
				break;
			}
			
			java.lang.String k = haxe.lang.Runtime.toString(this.unserialize());
			if ( ! (( k instanceof java.lang.String )) ) 
			{
				throw haxe.lang.HaxeException.wrap("Invalid object key");
			}
			
			java.lang.Object v = this.unserialize();
			haxe.root.Reflect.setField(o, k, v);
		}
		
		this.pos++;
	}
	
	
	public   java.lang.Object unserializeEnum(java.lang.Class<java.lang.Object> edecl, java.lang.String tag)
	{
		int __temp_stmt277 = 0;
		{
			int p = this.pos++;
			{
				java.lang.String s = this.buf;
				__temp_stmt277 = ( (( p < s.length() )) ? (((int) (s.charAt(p)) )) : (-1) );
			}
			
		}
		
		if (( __temp_stmt277 != 58 )) 
		{
			throw haxe.lang.HaxeException.wrap("Invalid enum format");
		}
		
		int nargs = this.readDigits();
		if (( nargs == 0 )) 
		{
			return haxe.root.Type.createEnum(edecl, tag, null);
		}
		
		haxe.root.Array args = new haxe.root.Array();
		while (( nargs-- > 0 ))
		{
			args.push(this.unserialize());
		}
		
		return haxe.root.Type.createEnum(edecl, tag, args);
	}
	
	
	public   java.lang.Object unserialize()
	{
		{
			int _g = 0;
			{
				int p = this.pos++;
				{
					java.lang.String s = this.buf;
					if (( p < s.length() )) 
					{
						_g = ((int) (s.charAt(p)) );
					}
					 else 
					{
						_g = -1;
					}
					
				}
				
			}
			
			switch (_g)
			{
				case 110:
				{
					return null;
				}
				
				
				case 116:
				{
					return true;
				}
				
				
				case 102:
				{
					return false;
				}
				
				
				case 122:
				{
					return 0;
				}
				
				
				case 105:
				{
					return this.readDigits();
				}
				
				
				case 100:
				{
					int p1 = this.pos;
					while (true)
					{
						int c = 0;
						{
							int p2 = this.pos;
							{
								java.lang.String s1 = this.buf;
								if (( p2 < s1.length() )) 
								{
									c = ((int) (s1.charAt(p2)) );
								}
								 else 
								{
									c = -1;
								}
								
							}
							
						}
						
						if (( ( ( ( c >= 43 ) && ( c < 58 ) ) || ( c == 101 ) ) || ( c == 69 ) )) 
						{
							this.pos++;
						}
						 else 
						{
							break;
						}
						
					}
					
					return haxe.root.Std.parseFloat(haxe.lang.StringExt.substr(this.buf, p1, ( this.pos - p1 )));
				}
				
				
				case 121:
				{
					int len = this.readDigits();
					int __temp_stmt280 = 0;
					{
						int p3 = this.pos++;
						{
							java.lang.String s2 = this.buf;
							__temp_stmt280 = ( (( p3 < s2.length() )) ? (((int) (s2.charAt(p3)) )) : (-1) );
						}
						
					}
					
					boolean __temp_stmt279 = ( __temp_stmt280 != 58 );
					boolean __temp_boolv281 = false;
					if ( ! (__temp_stmt279) ) 
					{
						__temp_boolv281 = ( ( this.length - this.pos ) < len );
					}
					
					boolean __temp_stmt278 = ( __temp_stmt279 || __temp_boolv281 );
					if (__temp_stmt278) 
					{
						throw haxe.lang.HaxeException.wrap("Invalid string length");
					}
					
					java.lang.String s3 = haxe.lang.StringExt.substr(this.buf, this.pos, len);
					this.pos += len;
					s3 = haxe.root.StringTools.urlDecode(s3);
					this.scache.push(s3);
					return s3;
				}
				
				
				case 107:
				{
					return java.lang.Double.NaN;
				}
				
				
				case 109:
				{
					return java.lang.Double.NEGATIVE_INFINITY;
				}
				
				
				case 112:
				{
					return java.lang.Double.POSITIVE_INFINITY;
				}
				
				
				case 97:
				{
					java.lang.String buf = this.buf;
					haxe.root.Array a = new haxe.root.Array();
					this.cache.push(a);
					while (true)
					{
						int c1 = 0;
						{
							int p4 = this.pos;
							{
								java.lang.String s4 = this.buf;
								if (( p4 < s4.length() )) 
								{
									c1 = ((int) (s4.charAt(p4)) );
								}
								 else 
								{
									c1 = -1;
								}
								
							}
							
						}
						
						if (( c1 == 104 )) 
						{
							this.pos++;
							break;
						}
						
						if (( c1 == 117 )) 
						{
							this.pos++;
							int n = this.readDigits();
							a.__set(( ( a.length + n ) - 1 ), null);
						}
						 else 
						{
							a.push(this.unserialize());
						}
						
					}
					
					return a;
				}
				
				
				case 111:
				{
					java.lang.Object o = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
					this.cache.push(o);
					this.unserializeObject(o);
					return o;
				}
				
				
				case 114:
				{
					int n1 = this.readDigits();
					if (( ( n1 < 0 ) || ( n1 >= this.cache.length ) )) 
					{
						throw haxe.lang.HaxeException.wrap("Invalid reference");
					}
					
					return this.cache.__get(n1);
				}
				
				
				case 82:
				{
					int n2 = this.readDigits();
					if (( ( n2 < 0 ) || ( n2 >= this.scache.length ) )) 
					{
						throw haxe.lang.HaxeException.wrap("Invalid string reference");
					}
					
					return this.scache.__get(n2);
				}
				
				
				case 120:
				{
					throw haxe.lang.HaxeException.wrap(this.unserialize());
				}
				
				
				case 99:
				{
					java.lang.String name = haxe.lang.Runtime.toString(this.unserialize());
					java.lang.Class cl = ((java.lang.Class) (haxe.lang.Runtime.callField(this.resolver, "resolveClass", new haxe.root.Array(new java.lang.Object[]{name}))) );
					if (( ((java.lang.Object) (cl) ) == ((java.lang.Object) (null) ) )) 
					{
						throw haxe.lang.HaxeException.wrap(( "Class not found " + name ));
					}
					
					java.lang.Object o1 = haxe.root.Type.createEmptyInstance(cl);
					this.cache.push(o1);
					this.unserializeObject(o1);
					return o1;
				}
				
				
				case 119:
				{
					java.lang.String name1 = haxe.lang.Runtime.toString(this.unserialize());
					java.lang.Class edecl = ((java.lang.Class) (haxe.lang.Runtime.callField(this.resolver, "resolveEnum", new haxe.root.Array(new java.lang.Object[]{name1}))) );
					if (( ((java.lang.Object) (edecl) ) == ((java.lang.Object) (null) ) )) 
					{
						throw haxe.lang.HaxeException.wrap(( "Enum not found " + name1 ));
					}
					
					java.lang.Object e = this.unserializeEnum(edecl, haxe.lang.Runtime.toString(this.unserialize()));
					this.cache.push(e);
					return e;
				}
				
				
				case 106:
				{
					java.lang.String name2 = haxe.lang.Runtime.toString(this.unserialize());
					java.lang.Class edecl1 = ((java.lang.Class) (haxe.lang.Runtime.callField(this.resolver, "resolveEnum", new haxe.root.Array(new java.lang.Object[]{name2}))) );
					if (( ((java.lang.Object) (edecl1) ) == ((java.lang.Object) (null) ) )) 
					{
						throw haxe.lang.HaxeException.wrap(( "Enum not found " + name2 ));
					}
					
					this.pos++;
					int index = this.readDigits();
					java.lang.String tag = haxe.root.Type.getEnumConstructs(edecl1).__get(index);
					if (( tag == null )) 
					{
						throw haxe.lang.HaxeException.wrap(( ( ( "Unknown enum index " + name2 ) + "@" ) + index ));
					}
					
					java.lang.Object e1 = this.unserializeEnum(edecl1, tag);
					this.cache.push(e1);
					return e1;
				}
				
				
				case 108:
				{
					haxe.root.List l = new haxe.root.List();
					this.cache.push(l);
					java.lang.String buf1 = this.buf;
					do 
					{
						int __temp_stmt282 = 0;
						{
							int p5 = this.pos;
							{
								java.lang.String s5 = this.buf;
								__temp_stmt282 = ( (( p5 < s5.length() )) ? (((int) (s5.charAt(p5)) )) : (-1) );
							}
							
						}
						
						if (( __temp_stmt282 != 104 )) 
						{
							l.add(this.unserialize());
						}
						 else 
						{
							break;
						}
						
					}
					while (true);
					this.pos++;
					return l;
				}
				
				
				case 98:
				{
					haxe.ds.StringMap h = new haxe.ds.StringMap();
					this.cache.push(h);
					java.lang.String buf2 = this.buf;
					do 
					{
						int __temp_stmt283 = 0;
						{
							int p6 = this.pos;
							{
								java.lang.String s6 = this.buf;
								__temp_stmt283 = ( (( p6 < s6.length() )) ? (((int) (s6.charAt(p6)) )) : (-1) );
							}
							
						}
						
						if (( __temp_stmt283 != 104 )) 
						{
							java.lang.String s7 = haxe.lang.Runtime.toString(this.unserialize());
							h.set(s7, this.unserialize());
						}
						 else 
						{
							break;
						}
						
					}
					while (true);
					this.pos++;
					return h;
				}
				
				
				case 113:
				{
					haxe.ds.IntMap h1 = new haxe.ds.IntMap();
					this.cache.push(h1);
					java.lang.String buf3 = this.buf;
					int c2 = 0;
					{
						int p7 = this.pos++;
						{
							java.lang.String s8 = this.buf;
							if (( p7 < s8.length() )) 
							{
								c2 = ((int) (s8.charAt(p7)) );
							}
							 else 
							{
								c2 = -1;
							}
							
						}
						
					}
					
					while (( c2 == 58 ))
					{
						int i = this.readDigits();
						h1.set(i, this.unserialize());
						{
							int p8 = this.pos++;
							{
								java.lang.String s9 = this.buf;
								if (( p8 < s9.length() )) 
								{
									c2 = ((int) (s9.charAt(p8)) );
								}
								 else 
								{
									c2 = -1;
								}
								
							}
							
						}
						
					}
					
					if (( c2 != 104 )) 
					{
						throw haxe.lang.HaxeException.wrap("Invalid IntMap format");
					}
					
					return h1;
				}
				
				
				case 77:
				{
					haxe.ds.ObjectMap h2 = new haxe.ds.ObjectMap();
					this.cache.push(h2);
					java.lang.String buf4 = this.buf;
					do 
					{
						int __temp_stmt284 = 0;
						{
							int p9 = this.pos;
							{
								java.lang.String s10 = this.buf;
								__temp_stmt284 = ( (( p9 < s10.length() )) ? (((int) (s10.charAt(p9)) )) : (-1) );
							}
							
						}
						
						if (( __temp_stmt284 != 104 )) 
						{
							java.lang.Object s11 = this.unserialize();
							h2.set(s11, this.unserialize());
						}
						 else 
						{
							break;
						}
						
					}
					while (true);
					this.pos++;
					return h2;
				}
				
				
				case 118:
				{
					haxe.root.Date d = haxe.root.Date.fromString(haxe.lang.StringExt.substr(this.buf, this.pos, 19));
					this.cache.push(d);
					this.pos += 19;
					return d;
				}
				
				
				case 115:
				{
					int len1 = this.readDigits();
					java.lang.String buf5 = this.buf;
					int __temp_stmt287 = 0;
					{
						int p10 = this.pos++;
						{
							java.lang.String s12 = this.buf;
							__temp_stmt287 = ( (( p10 < s12.length() )) ? (((int) (s12.charAt(p10)) )) : (-1) );
						}
						
					}
					
					boolean __temp_stmt286 = ( __temp_stmt287 != 58 );
					boolean __temp_boolv288 = false;
					if ( ! (__temp_stmt286) ) 
					{
						__temp_boolv288 = ( ( this.length - this.pos ) < len1 );
					}
					
					boolean __temp_stmt285 = ( __temp_stmt286 || __temp_boolv288 );
					if (__temp_stmt285) 
					{
						throw haxe.lang.HaxeException.wrap("Invalid bytes length");
					}
					
					haxe.root.Array<java.lang.Object> codes = haxe.Unserializer.CODES;
					if (( codes == null )) 
					{
						codes = haxe.Unserializer.initCodes();
						haxe.Unserializer.CODES = codes;
					}
					
					int i1 = this.pos;
					int rest = ( len1 & 3 );
					int size = 0;
					size = ( ( (( len1 >> 2 )) * 3 ) + (( (( rest >= 2 )) ? (( rest - 1 )) : (0) )) );
					int max = ( i1 + (( len1 - rest )) );
					haxe.io.Bytes bytes = haxe.io.Bytes.alloc(size);
					int bpos = 0;
					while (( i1 < max ))
					{
						int __temp_stmt290 = 0;
						{
							int index1 = i1++;
							__temp_stmt290 = ( (( index1 < buf5.length() )) ? (((int) (buf5.charAt(index1)) )) : (-1) );
						}
						
						java.lang.Object __temp_stmt289 = codes.__get(__temp_stmt290);
						int c11 = ((int) (haxe.lang.Runtime.toInt(__temp_stmt289)) );
						int __temp_stmt292 = 0;
						{
							int index2 = i1++;
							__temp_stmt292 = ( (( index2 < buf5.length() )) ? (((int) (buf5.charAt(index2)) )) : (-1) );
						}
						
						java.lang.Object __temp_stmt291 = codes.__get(__temp_stmt292);
						int c21 = ((int) (haxe.lang.Runtime.toInt(__temp_stmt291)) );
						{
							int pos = bpos++;
							bytes.b[pos] = ((byte) (( ( c11 << 2 ) | ( c21 >> 4 ) )) );
						}
						
						int __temp_stmt294 = 0;
						{
							int index3 = i1++;
							__temp_stmt294 = ( (( index3 < buf5.length() )) ? (((int) (buf5.charAt(index3)) )) : (-1) );
						}
						
						java.lang.Object __temp_stmt293 = codes.__get(__temp_stmt294);
						int c3 = ((int) (haxe.lang.Runtime.toInt(__temp_stmt293)) );
						{
							int pos1 = bpos++;
							bytes.b[pos1] = ((byte) (( ( c21 << 4 ) | ( c3 >> 2 ) )) );
						}
						
						int __temp_stmt296 = 0;
						{
							int index4 = i1++;
							__temp_stmt296 = ( (( index4 < buf5.length() )) ? (((int) (buf5.charAt(index4)) )) : (-1) );
						}
						
						java.lang.Object __temp_stmt295 = codes.__get(__temp_stmt296);
						int c4 = ((int) (haxe.lang.Runtime.toInt(__temp_stmt295)) );
						{
							int pos2 = bpos++;
							bytes.b[pos2] = ((byte) (( ( c3 << 6 ) | c4 )) );
						}
						
					}
					
					if (( rest >= 2 )) 
					{
						int __temp_stmt298 = 0;
						{
							int index5 = i1++;
							__temp_stmt298 = ( (( index5 < buf5.length() )) ? (((int) (buf5.charAt(index5)) )) : (-1) );
						}
						
						java.lang.Object __temp_stmt297 = codes.__get(__temp_stmt298);
						int c12 = ((int) (haxe.lang.Runtime.toInt(__temp_stmt297)) );
						int __temp_stmt300 = 0;
						{
							int index6 = i1++;
							__temp_stmt300 = ( (( index6 < buf5.length() )) ? (((int) (buf5.charAt(index6)) )) : (-1) );
						}
						
						java.lang.Object __temp_stmt299 = codes.__get(__temp_stmt300);
						int c22 = ((int) (haxe.lang.Runtime.toInt(__temp_stmt299)) );
						{
							int pos3 = bpos++;
							bytes.b[pos3] = ((byte) (( ( c12 << 2 ) | ( c22 >> 4 ) )) );
						}
						
						if (( rest == 3 )) 
						{
							int __temp_stmt302 = 0;
							{
								int index7 = i1++;
								__temp_stmt302 = ( (( index7 < buf5.length() )) ? (((int) (buf5.charAt(index7)) )) : (-1) );
							}
							
							java.lang.Object __temp_stmt301 = codes.__get(__temp_stmt302);
							int c31 = ((int) (haxe.lang.Runtime.toInt(__temp_stmt301)) );
							{
								int pos4 = bpos++;
								bytes.b[pos4] = ((byte) (( ( c22 << 4 ) | ( c31 >> 2 ) )) );
							}
							
						}
						
					}
					
					this.pos += len1;
					this.cache.push(bytes);
					return bytes;
				}
				
				
				case 67:
				{
					java.lang.String name3 = haxe.lang.Runtime.toString(this.unserialize());
					java.lang.Class cl1 = ((java.lang.Class) (haxe.lang.Runtime.callField(this.resolver, "resolveClass", new haxe.root.Array(new java.lang.Object[]{name3}))) );
					if (( ((java.lang.Object) (cl1) ) == ((java.lang.Object) (null) ) )) 
					{
						throw haxe.lang.HaxeException.wrap(( "Class not found " + name3 ));
					}
					
					java.lang.Object o2 = haxe.root.Type.createEmptyInstance(cl1);
					this.cache.push(o2);
					haxe.lang.Runtime.callField(o2, "hxUnserialize", new haxe.root.Array(new java.lang.Object[]{this}));
					int __temp_stmt303 = 0;
					{
						int p11 = this.pos++;
						{
							java.lang.String s13 = this.buf;
							__temp_stmt303 = ( (( p11 < s13.length() )) ? (((int) (s13.charAt(p11)) )) : (-1) );
						}
						
					}
					
					if (( __temp_stmt303 != 103 )) 
					{
						throw haxe.lang.HaxeException.wrap("Invalid custom data");
					}
					
					return o2;
				}
				
				
				default:
				{
					{
					}
					
					break;
				}
				
			}
			
		}
		
		this.pos--;
		throw haxe.lang.HaxeException.wrap(( ( ( "Invalid char " + haxe.lang.StringExt.charAt(this.buf, this.pos) ) + " at position " ) + this.pos ));
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef304 = true;
			switch (field.hashCode())
			{
				case -341328890:
				{
					if (field.equals("resolver")) 
					{
						__temp_executeDef304 = false;
						this.resolver = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 111188:
				{
					if (field.equals("pos")) 
					{
						__temp_executeDef304 = false;
						this.pos = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef304 = false;
						this.length = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef304) 
			{
				return super.__hx_setField_f(field, value, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef305 = true;
			switch (field.hashCode())
			{
				case -341328890:
				{
					if (field.equals("resolver")) 
					{
						__temp_executeDef305 = false;
						this.resolver = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 97907:
				{
					if (field.equals("buf")) 
					{
						__temp_executeDef305 = false;
						this.buf = haxe.lang.Runtime.toString(value);
						return value;
					}
					
					break;
				}
				
				
				case -908198161:
				{
					if (field.equals("scache")) 
					{
						__temp_executeDef305 = false;
						this.scache = ((haxe.root.Array<java.lang.String>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 111188:
				{
					if (field.equals("pos")) 
					{
						__temp_executeDef305 = false;
						this.pos = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 94416770:
				{
					if (field.equals("cache")) 
					{
						__temp_executeDef305 = false;
						this.cache = ((haxe.root.Array) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef305 = false;
						this.length = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef305) 
			{
				return super.__hx_setField(field, value, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_getField(java.lang.String field, boolean throwErrors, boolean isCheck, boolean handleProperties)
	{
		{
			boolean __temp_executeDef306 = true;
			switch (field.hashCode())
			{
				case -505039769:
				{
					if (field.equals("unserialize")) 
					{
						__temp_executeDef306 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("unserialize"))) );
					}
					
					break;
				}
				
				
				case 97907:
				{
					if (field.equals("buf")) 
					{
						__temp_executeDef306 = false;
						return this.buf;
					}
					
					break;
				}
				
				
				case 1438134792:
				{
					if (field.equals("unserializeEnum")) 
					{
						__temp_executeDef306 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("unserializeEnum"))) );
					}
					
					break;
				}
				
				
				case 111188:
				{
					if (field.equals("pos")) 
					{
						__temp_executeDef306 = false;
						return this.pos;
					}
					
					break;
				}
				
				
				case -657057146:
				{
					if (field.equals("unserializeObject")) 
					{
						__temp_executeDef306 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("unserializeObject"))) );
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef306 = false;
						return this.length;
					}
					
					break;
				}
				
				
				case -940119524:
				{
					if (field.equals("readDigits")) 
					{
						__temp_executeDef306 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("readDigits"))) );
					}
					
					break;
				}
				
				
				case 94416770:
				{
					if (field.equals("cache")) 
					{
						__temp_executeDef306 = false;
						return this.cache;
					}
					
					break;
				}
				
				
				case 1647991432:
				{
					if (field.equals("setResolver")) 
					{
						__temp_executeDef306 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("setResolver"))) );
					}
					
					break;
				}
				
				
				case -908198161:
				{
					if (field.equals("scache")) 
					{
						__temp_executeDef306 = false;
						return this.scache;
					}
					
					break;
				}
				
				
				case -341328890:
				{
					if (field.equals("resolver")) 
					{
						__temp_executeDef306 = false;
						return this.resolver;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef306) 
			{
				return super.__hx_getField(field, throwErrors, isCheck, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   double __hx_getField_f(java.lang.String field, boolean throwErrors, boolean handleProperties)
	{
		{
			boolean __temp_executeDef307 = true;
			switch (field.hashCode())
			{
				case -341328890:
				{
					if (field.equals("resolver")) 
					{
						__temp_executeDef307 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.resolver)) );
					}
					
					break;
				}
				
				
				case 111188:
				{
					if (field.equals("pos")) 
					{
						__temp_executeDef307 = false;
						return ((double) (this.pos) );
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef307 = false;
						return ((double) (this.length) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef307) 
			{
				return super.__hx_getField_f(field, throwErrors, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_invokeField(java.lang.String field, haxe.root.Array dynargs)
	{
		{
			boolean __temp_executeDef308 = true;
			switch (field.hashCode())
			{
				case -505039769:
				{
					if (field.equals("unserialize")) 
					{
						__temp_executeDef308 = false;
						return this.unserialize();
					}
					
					break;
				}
				
				
				case 1647991432:
				{
					if (field.equals("setResolver")) 
					{
						__temp_executeDef308 = false;
						this.setResolver(dynargs.__get(0));
					}
					
					break;
				}
				
				
				case 1438134792:
				{
					if (field.equals("unserializeEnum")) 
					{
						__temp_executeDef308 = false;
						return this.unserializeEnum(((java.lang.Class<java.lang.Object>) (dynargs.__get(0)) ), haxe.lang.Runtime.toString(dynargs.__get(1)));
					}
					
					break;
				}
				
				
				case -940119524:
				{
					if (field.equals("readDigits")) 
					{
						__temp_executeDef308 = false;
						return this.readDigits();
					}
					
					break;
				}
				
				
				case -657057146:
				{
					if (field.equals("unserializeObject")) 
					{
						__temp_executeDef308 = false;
						this.unserializeObject(dynargs.__get(0));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef308) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("resolver");
		baseArr.push("scache");
		baseArr.push("cache");
		baseArr.push("length");
		baseArr.push("pos");
		baseArr.push("buf");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


