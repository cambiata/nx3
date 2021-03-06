package haxe.xml;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class Parser extends haxe.lang.HxObject
{
	static 
	{
		{
			haxe.ds.StringMap<java.lang.String> h = new haxe.ds.StringMap<java.lang.String>();
			h.set("lt", "<");
			h.set("gt", ">");
			h.set("amp", "&");
			h.set("quot", "\"");
			h.set("apos", "\'");
			h.set("nbsp", Character.toString((char) 160));
			haxe.xml.Parser.escapes = h;
		}
		
	}
	public    Parser(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    Parser()
	{
		haxe.xml.Parser.__hx_ctor_haxe_xml_Parser(this);
	}
	
	
	public static   void __hx_ctor_haxe_xml_Parser(haxe.xml.Parser __temp_me45)
	{
		{
		}
		
	}
	
	
	public static  haxe.ds.StringMap<java.lang.String> escapes;
	
	public static   haxe.root.Xml parse(java.lang.String str)
	{
		haxe.root.Xml doc = haxe.root.Xml.createDocument();
		haxe.xml.Parser.doParse(str, 0, doc);
		return doc;
	}
	
	
	public static   int doParse(java.lang.String str, java.lang.Object p, haxe.root.Xml parent)
	{
		int __temp_p44 = ( (( p == null )) ? (((int) (0) )) : (((int) (haxe.lang.Runtime.toInt(p)) )) );
		haxe.root.Xml xml = null;
		int state = 1;
		int next = 1;
		java.lang.String aname = null;
		int start = 0;
		int nsubs = 0;
		int nbrackets = 0;
		int c = 0;
		if (( __temp_p44 < str.length() )) 
		{
			c = ((int) (str.charAt(__temp_p44)) );
		}
		 else 
		{
			c = -1;
		}
		
		haxe.root.StringBuf buf = new haxe.root.StringBuf();
		while ( ! ((( c == -1 ))) )
		{
			switch (state)
			{
				case 0:
				{
					switch (c)
					{
						case 10:case 13:case 9:case 32:
						{
							{
							}
							
							break;
						}
						
						
						default:
						{
							state = next;
							continue;
						}
						
					}
					
					break;
				}
				
				
				case 1:
				{
					switch (c)
					{
						case 60:
						{
							state = 0;
							next = 2;
							break;
						}
						
						
						default:
						{
							start = __temp_p44;
							state = 13;
							continue;
						}
						
					}
					
					break;
				}
				
				
				case 13:
				{
					if (( c == 60 )) 
					{
						haxe.root.Xml child = haxe.root.Xml.createPCData(( buf.toString() + haxe.lang.StringExt.substr(str, start, ( __temp_p44 - start )) ));
						buf = new haxe.root.StringBuf();
						parent.addChild(child);
						nsubs++;
						state = 0;
						next = 2;
					}
					 else 
					{
						if (( c == 38 )) 
						{
							buf.addSub(str, start, ( __temp_p44 - start ));
							state = 18;
							next = 13;
							start = ( __temp_p44 + 1 );
						}
						
					}
					
					break;
				}
				
				
				case 17:
				{
					boolean __temp_boolv364 = ( c == 93 );
					boolean __temp_boolv363 = false;
					boolean __temp_boolv362 = false;
					if (__temp_boolv364) 
					{
						int __temp_stmt365 = 0;
						{
							int index = ( __temp_p44 + 1 );
							__temp_stmt365 = ( (( index < str.length() )) ? (((int) (str.charAt(index)) )) : (-1) );
						}
						
						__temp_boolv363 = ( __temp_stmt365 == 93 );
						if (__temp_boolv363) 
						{
							int __temp_stmt366 = 0;
							{
								int index1 = ( __temp_p44 + 2 );
								__temp_stmt366 = ( (( index1 < str.length() )) ? (((int) (str.charAt(index1)) )) : (-1) );
							}
							
							__temp_boolv362 = ( __temp_stmt366 == 62 );
						}
						
					}
					
					boolean __temp_stmt361 = ( ( __temp_boolv364 && __temp_boolv363 ) && __temp_boolv362 );
					if (__temp_stmt361) 
					{
						haxe.root.Xml child1 = haxe.root.Xml.createCData(haxe.lang.StringExt.substr(str, start, ( __temp_p44 - start )));
						parent.addChild(child1);
						nsubs++;
						__temp_p44 += 2;
						state = 1;
					}
					
					break;
				}
				
				
				case 2:
				{
					switch (c)
					{
						case 33:
						{
							int __temp_stmt367 = 0;
							{
								int index2 = ( __temp_p44 + 1 );
								__temp_stmt367 = ( (( index2 < str.length() )) ? (((int) (str.charAt(index2)) )) : (-1) );
							}
							
							if (( __temp_stmt367 == 91 )) 
							{
								__temp_p44 += 2;
								if ( ! (haxe.lang.Runtime.valEq(haxe.lang.StringExt.substr(str, __temp_p44, 6).toUpperCase(), "CDATA[")) ) 
								{
									throw haxe.lang.HaxeException.wrap("Expected <![CDATA[");
								}
								
								__temp_p44 += 5;
								state = 17;
								start = ( __temp_p44 + 1 );
							}
							 else 
							{
								int __temp_stmt370 = 0;
								{
									int index3 = ( __temp_p44 + 1 );
									__temp_stmt370 = ( (( index3 < str.length() )) ? (((int) (str.charAt(index3)) )) : (-1) );
								}
								
								boolean __temp_stmt369 = ( __temp_stmt370 == 68 );
								boolean __temp_boolv371 = false;
								if ( ! (__temp_stmt369) ) 
								{
									int __temp_stmt372 = 0;
									{
										int index4 = ( __temp_p44 + 1 );
										__temp_stmt372 = ( (( index4 < str.length() )) ? (((int) (str.charAt(index4)) )) : (-1) );
									}
									
									__temp_boolv371 = ( __temp_stmt372 == 100 );
								}
								
								boolean __temp_stmt368 = ( __temp_stmt369 || __temp_boolv371 );
								if (__temp_stmt368) 
								{
									if ( ! (haxe.lang.Runtime.valEq(haxe.lang.StringExt.substr(str, ( __temp_p44 + 2 ), 6).toUpperCase(), "OCTYPE")) ) 
									{
										throw haxe.lang.HaxeException.wrap("Expected <!DOCTYPE");
									}
									
									__temp_p44 += 8;
									state = 16;
									start = ( __temp_p44 + 1 );
								}
								 else 
								{
									int __temp_stmt375 = 0;
									{
										int index5 = ( __temp_p44 + 1 );
										__temp_stmt375 = ( (( index5 < str.length() )) ? (((int) (str.charAt(index5)) )) : (-1) );
									}
									
									boolean __temp_stmt374 = ( __temp_stmt375 != 45 );
									boolean __temp_boolv376 = false;
									if ( ! (__temp_stmt374) ) 
									{
										int __temp_stmt377 = 0;
										{
											int index6 = ( __temp_p44 + 2 );
											__temp_stmt377 = ( (( index6 < str.length() )) ? (((int) (str.charAt(index6)) )) : (-1) );
										}
										
										__temp_boolv376 = ( __temp_stmt377 != 45 );
									}
									
									boolean __temp_stmt373 = ( __temp_stmt374 || __temp_boolv376 );
									if (__temp_stmt373) 
									{
										throw haxe.lang.HaxeException.wrap("Expected <!--");
									}
									 else 
									{
										__temp_p44 += 2;
										state = 15;
										start = ( __temp_p44 + 1 );
									}
									
								}
								
							}
							
							break;
						}
						
						
						case 63:
						{
							state = 14;
							start = __temp_p44;
							break;
						}
						
						
						case 47:
						{
							if (( parent == null )) 
							{
								throw haxe.lang.HaxeException.wrap("Expected node name");
							}
							
							start = ( __temp_p44 + 1 );
							state = 0;
							next = 10;
							break;
						}
						
						
						default:
						{
							state = 3;
							start = __temp_p44;
							continue;
						}
						
					}
					
					break;
				}
				
				
				case 3:
				{
					if ( ! ((( ( ( ( ( ( ( ( c >= 97 ) && ( c <= 122 ) ) || ( ( c >= 65 ) && ( c <= 90 ) ) ) || ( ( c >= 48 ) && ( c <= 57 ) ) ) || ( c == 58 ) ) || ( c == 46 ) ) || ( c == 95 ) ) || ( c == 45 ) ))) ) 
					{
						if (( __temp_p44 == start )) 
						{
							throw haxe.lang.HaxeException.wrap("Expected node name");
						}
						
						xml = haxe.root.Xml.createElement(haxe.lang.StringExt.substr(str, start, ( __temp_p44 - start )));
						parent.addChild(xml);
						state = 0;
						next = 4;
						continue;
					}
					
					break;
				}
				
				
				case 4:
				{
					switch (c)
					{
						case 47:
						{
							state = 11;
							nsubs++;
							break;
						}
						
						
						case 62:
						{
							state = 9;
							nsubs++;
							break;
						}
						
						
						default:
						{
							state = 5;
							start = __temp_p44;
							continue;
						}
						
					}
					
					break;
				}
				
				
				case 5:
				{
					if ( ! ((( ( ( ( ( ( ( ( c >= 97 ) && ( c <= 122 ) ) || ( ( c >= 65 ) && ( c <= 90 ) ) ) || ( ( c >= 48 ) && ( c <= 57 ) ) ) || ( c == 58 ) ) || ( c == 46 ) ) || ( c == 95 ) ) || ( c == 45 ) ))) ) 
					{
						java.lang.String tmp = null;
						if (( start == __temp_p44 )) 
						{
							throw haxe.lang.HaxeException.wrap("Expected attribute name");
						}
						
						tmp = haxe.lang.StringExt.substr(str, start, ( __temp_p44 - start ));
						aname = tmp;
						if (xml.exists(aname)) 
						{
							throw haxe.lang.HaxeException.wrap("Duplicate attribute");
						}
						
						state = 0;
						next = 6;
						continue;
					}
					
					break;
				}
				
				
				case 6:
				{
					switch (c)
					{
						case 61:
						{
							state = 0;
							next = 7;
							break;
						}
						
						
						default:
						{
							throw haxe.lang.HaxeException.wrap("Expected =");
						}
						
					}
					
					break;
				}
				
				
				case 7:
				{
					switch (c)
					{
						case 34:case 39:
						{
							state = 8;
							start = __temp_p44;
							break;
						}
						
						
						default:
						{
							throw haxe.lang.HaxeException.wrap("Expected \"");
						}
						
					}
					
					break;
				}
				
				
				case 8:
				{
					if (( c == (( (( start < str.length() )) ? (((int) (str.charAt(start)) )) : (-1) )) )) 
					{
						java.lang.String val = haxe.lang.StringExt.substr(str, ( start + 1 ), ( ( __temp_p44 - start ) - 1 ));
						xml.set(aname, val);
						state = 0;
						next = 4;
					}
					
					break;
				}
				
				
				case 9:
				{
					__temp_p44 = haxe.xml.Parser.doParse(str, __temp_p44, xml);
					start = __temp_p44;
					state = 1;
					break;
				}
				
				
				case 11:
				{
					switch (c)
					{
						case 62:
						{
							state = 1;
							break;
						}
						
						
						default:
						{
							throw haxe.lang.HaxeException.wrap("Expected >");
						}
						
					}
					
					break;
				}
				
				
				case 12:
				{
					switch (c)
					{
						case 62:
						{
							if (( nsubs == 0 )) 
							{
								parent.addChild(haxe.root.Xml.createPCData(""));
							}
							
							return __temp_p44;
						}
						
						
						default:
						{
							throw haxe.lang.HaxeException.wrap("Expected >");
						}
						
					}
					
				}
				
				
				case 10:
				{
					if ( ! ((( ( ( ( ( ( ( ( c >= 97 ) && ( c <= 122 ) ) || ( ( c >= 65 ) && ( c <= 90 ) ) ) || ( ( c >= 48 ) && ( c <= 57 ) ) ) || ( c == 58 ) ) || ( c == 46 ) ) || ( c == 95 ) ) || ( c == 45 ) ))) ) 
					{
						if (( start == __temp_p44 )) 
						{
							throw haxe.lang.HaxeException.wrap("Expected node name");
						}
						
						java.lang.String v = haxe.lang.StringExt.substr(str, start, ( __temp_p44 - start ));
						if ( ! (haxe.lang.Runtime.valEq(v, parent.get_nodeName())) ) 
						{
							throw haxe.lang.HaxeException.wrap(( ( "Expected </" + parent.get_nodeName() ) + ">" ));
						}
						
						state = 0;
						next = 12;
						continue;
					}
					
					break;
				}
				
				
				case 15:
				{
					boolean __temp_boolv381 = ( c == 45 );
					boolean __temp_boolv380 = false;
					boolean __temp_boolv379 = false;
					if (__temp_boolv381) 
					{
						int __temp_stmt382 = 0;
						{
							int index7 = ( __temp_p44 + 1 );
							__temp_stmt382 = ( (( index7 < str.length() )) ? (((int) (str.charAt(index7)) )) : (-1) );
						}
						
						__temp_boolv380 = ( __temp_stmt382 == 45 );
						if (__temp_boolv380) 
						{
							int __temp_stmt383 = 0;
							{
								int index8 = ( __temp_p44 + 2 );
								__temp_stmt383 = ( (( index8 < str.length() )) ? (((int) (str.charAt(index8)) )) : (-1) );
							}
							
							__temp_boolv379 = ( __temp_stmt383 == 62 );
						}
						
					}
					
					boolean __temp_stmt378 = ( ( __temp_boolv381 && __temp_boolv380 ) && __temp_boolv379 );
					if (__temp_stmt378) 
					{
						parent.addChild(haxe.root.Xml.createComment(haxe.lang.StringExt.substr(str, start, ( __temp_p44 - start ))));
						__temp_p44 += 2;
						state = 1;
					}
					
					break;
				}
				
				
				case 16:
				{
					if (( c == 91 )) 
					{
						nbrackets++;
					}
					 else 
					{
						if (( c == 93 )) 
						{
							nbrackets--;
						}
						 else 
						{
							if (( ( c == 62 ) && ( nbrackets == 0 ) )) 
							{
								parent.addChild(haxe.root.Xml.createDocType(haxe.lang.StringExt.substr(str, start, ( __temp_p44 - start ))));
								state = 1;
							}
							
						}
						
					}
					
					break;
				}
				
				
				case 14:
				{
					boolean __temp_boolv386 = ( c == 63 );
					boolean __temp_boolv385 = false;
					if (__temp_boolv386) 
					{
						int __temp_stmt387 = 0;
						{
							int index9 = ( __temp_p44 + 1 );
							__temp_stmt387 = ( (( index9 < str.length() )) ? (((int) (str.charAt(index9)) )) : (-1) );
						}
						
						__temp_boolv385 = ( __temp_stmt387 == 62 );
					}
					
					boolean __temp_stmt384 = ( __temp_boolv386 && __temp_boolv385 );
					if (__temp_stmt384) 
					{
						__temp_p44++;
						java.lang.String str1 = haxe.lang.StringExt.substr(str, ( start + 1 ), ( ( __temp_p44 - start ) - 2 ));
						parent.addChild(haxe.root.Xml.createProcessingInstruction(str1));
						state = 1;
					}
					
					break;
				}
				
				
				case 18:
				{
					if (( c == 59 )) 
					{
						java.lang.String s = haxe.lang.StringExt.substr(str, start, ( __temp_p44 - start ));
						if (( (( (( 0 < s.length() )) ? (((int) (s.charAt(0)) )) : (-1) )) == 35 )) 
						{
							java.lang.Object i = null;
							if (( (( (( 1 < s.length() )) ? (((int) (s.charAt(1)) )) : (-1) )) == 120 )) 
							{
								i = haxe.root.Std.parseInt(( "0" + haxe.lang.StringExt.substr(s, 1, ( s.length() - 1 )) ));
							}
							 else 
							{
								i = haxe.root.Std.parseInt(haxe.lang.StringExt.substr(s, 1, ( s.length() - 1 )));
							}
							
							buf.add(Character.toString((char) ((int) (haxe.lang.Runtime.toInt(i)) )));
						}
						 else 
						{
							if ( ! (haxe.xml.Parser.escapes.exists(s)) ) 
							{
								buf.add(( ( "&" + s ) + ";" ));
							}
							 else 
							{
								buf.add(haxe.xml.Parser.escapes.get(s));
							}
							
						}
						
						start = ( __temp_p44 + 1 );
						state = next;
					}
					
					break;
				}
				
				
			}
			
			{
				int index10 =  ++ __temp_p44;
				if (( index10 < str.length() )) 
				{
					c = ((int) (str.charAt(index10)) );
				}
				 else 
				{
					c = -1;
				}
				
			}
			
		}
		
		if (( state == 1 )) 
		{
			start = __temp_p44;
			state = 13;
		}
		
		if (( state == 13 )) 
		{
			if (( ( __temp_p44 != start ) || ( nsubs == 0 ) )) 
			{
				parent.addChild(haxe.root.Xml.createPCData(( buf.toString() + haxe.lang.StringExt.substr(str, start, ( __temp_p44 - start )) )));
			}
			
			return __temp_p44;
		}
		
		throw haxe.lang.HaxeException.wrap("Unexpected end");
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new haxe.xml.Parser(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new haxe.xml.Parser();
	}
	
	
}


