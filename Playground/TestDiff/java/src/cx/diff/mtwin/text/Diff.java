package cx.diff.mtwin.text;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class Diff extends haxe.lang.HxObject
{
	static 
	{
		cx.diff.mtwin.text.Diff.END = 0;
		cx.diff.mtwin.text.Diff.DOWN = 1;
		cx.diff.mtwin.text.Diff.RIGHT = 2;
		cx.diff.mtwin.text.Diff.DOWN_RIGHT = 3;
		cx.diff.mtwin.text.Diff.NO_NEW_LINE = "\n\\ No newline at end of file\n";
	}
	public    Diff(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    Diff()
	{
		cx.diff.mtwin.text.Diff.__hx_ctor_cx_diff_mtwin_text_Diff(this);
	}
	
	
	public static   void __hx_ctor_cx_diff_mtwin_text_Diff(cx.diff.mtwin.text.Diff __temp_me34)
	{
		{
		}
		
	}
	
	
	public static  int END;
	
	public static  int DOWN;
	
	public static  int RIGHT;
	
	public static  int DOWN_RIGHT;
	
	public static  java.lang.String NO_NEW_LINE;
	
	public static   haxe.root.Array<haxe.root.Array> longestCommonSubsequence(haxe.root.Array<java.lang.String> src, haxe.root.Array<java.lang.String> dst)
	{
		int m = src.length;
		int n = dst.length;
		haxe.root.Array<haxe.root.Array> cursor = new haxe.root.Array<haxe.root.Array>();
		haxe.root.Array<haxe.root.Array> c = new haxe.root.Array<haxe.root.Array>();
		{
			int _g1 = 0;
			int _g = ( m + 1 );
			while (( _g1 < _g ))
			{
				int i = _g1++;
				cursor.__set(i, ((haxe.root.Array) (new haxe.root.Array<java.lang.Object>()) ));
				((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (cursor.__get(i)) )) ).__set(n, 0);
				c.__set(i, ((haxe.root.Array) (new haxe.root.Array<java.lang.Object>()) ));
				((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (c.__get(i)) )) ).__set(n, 0);
			}
			
		}
		
		{
			int _g11 = 0;
			int _g2 = ( n + 1 );
			while (( _g11 < _g2 ))
			{
				int j = _g11++;
				((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (cursor.__get(m)) )) ).__set(j, 0);
				((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (c.__get(m)) )) ).__set(j, 0);
			}
			
		}
		
		int i1 = ( m - 1 );
		while (( i1 >= 0 ))
		{
			int j1 = ( n - 1 );
			while (( j1 >= 0 ))
			{
				if (haxe.lang.Runtime.valEq(src.__get(i1), dst.__get(j1))) 
				{
					((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (c.__get(i1)) )) ).__set(j1, ( ((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (c.__get(( i1 + 1 ))) )) ).__get(( j1 + 1 )))) ) + 1 ));
					((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (cursor.__get(i1)) )) ).__set(j1, 3);
				}
				 else 
				{
					if (( ((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (c.__get(( i1 + 1 ))) )) ).__get(j1))) ) >= ((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (c.__get(i1)) )) ).__get(( j1 + 1 )))) ) )) 
					{
						((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (c.__get(i1)) )) ).__set(j1, ((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (c.__get(( i1 + 1 ))) )) ).__get(j1))) ));
						((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (cursor.__get(i1)) )) ).__set(j1, 1);
					}
					 else 
					{
						((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (c.__get(i1)) )) ).__set(j1, ((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (c.__get(i1)) )) ).__get(( j1 + 1 )))) ));
						((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (cursor.__get(i1)) )) ).__set(j1, 2);
					}
					
				}
				
				j1--;
			}
			
			i1--;
		}
		
		return cursor;
	}
	
	
	public static   haxe.root.List<haxe.root.Array> lcsToStack(haxe.root.Array<haxe.root.Array> c)
	{
		haxe.root.List<haxe.root.Array> stack = new haxe.root.List<haxe.root.Array>();
		int i = 0;
		int w = ( c.length - 1 );
		int j = 0;
		int h = ( ((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (c.__get(0)) )) ).length - 1 );
		int prev = -1;
		{
			label1:
			while (true)
			{
				if (( ((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (c.__get(i)) )) ).__get(j))) ) != prev )) 
				{
					stack.add(((haxe.root.Array) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{i, j})) ));
				}
				
				prev = ((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (c.__get(i)) )) ).__get(j))) );
				{
					int _g = ((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (c.__get(i)) )) ).__get(j))) );
					switch (_g)
					{
						case 1:
						{
							i++;
							break;
						}
						
						
						case 2:
						{
							j++;
							break;
						}
						
						
						case 3:
						{
							i++;
							j++;
							break;
						}
						
						
						case 0:
						{
							break label1;
						}
						
						
						default:
						{
							throw haxe.lang.HaxeException.wrap(( ( ( ( ( "Unknown " + ((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (c.__get(i)) )) ).__get(j))) ) ) + " at " ) + i ) + ":" ) + j ));
						}
						
					}
					
				}
				
			}
			
		}
		
		return stack;
	}
	
	
	public static   haxe.root.Array<java.lang.String> split(java.lang.String txt)
	{
		haxe.root.Array<java.lang.String> res = new haxe.root.Array<java.lang.String>();
		int old = 0;
		int pos = haxe.lang.StringExt.indexOf(txt, "\n", 0);
		while (( pos != -1 ))
		{
			res.push(haxe.lang.StringExt.substr(txt, old, ( ( pos + 1 ) - old )));
			old = ( pos + 1 );
			pos = haxe.lang.StringExt.indexOf(txt, "\n", old);
		}
		
		res.push(haxe.lang.StringExt.substr(txt, old, txt.length()));
		return res;
	}
	
	
	public static   java.lang.String diff(java.lang.String source, java.lang.String dest)
	{
		haxe.root.Array<java.lang.Object> srcNoNewLine = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{false});
		haxe.root.Array<java.lang.Object> dstNoNewLine = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{false});
		haxe.root.Array<haxe.root.Array> sourceLines = new haxe.root.Array<haxe.root.Array>(new haxe.root.Array[]{((haxe.root.Array) (cx.diff.mtwin.text.Diff.split(source)) )});
		if (( ((haxe.root.Array<java.lang.String>) (((haxe.root.Array) (sourceLines.__get(0)) )) ).__get(( ((haxe.root.Array<java.lang.String>) (((haxe.root.Array) (sourceLines.__get(0)) )) ).length - 1 )).length() > 0 )) 
		{
			((haxe.root.Array<java.lang.String>) (((haxe.root.Array) (sourceLines.__get(0)) )) ).push("");
			srcNoNewLine.__set(0, true);
		}
		
		haxe.root.Array<haxe.root.Array> destLines = new haxe.root.Array<haxe.root.Array>(new haxe.root.Array[]{((haxe.root.Array) (cx.diff.mtwin.text.Diff.split(dest)) )});
		if (( ((haxe.root.Array<java.lang.String>) (((haxe.root.Array) (destLines.__get(0)) )) ).__get(( ((haxe.root.Array<java.lang.String>) (((haxe.root.Array) (destLines.__get(0)) )) ).length - 1 )).length() > 0 )) 
		{
			((haxe.root.Array<java.lang.String>) (((haxe.root.Array) (destLines.__get(0)) )) ).push("");
			dstNoNewLine.__set(0, true);
		}
		
		int m = ((haxe.root.Array<java.lang.String>) (((haxe.root.Array) (sourceLines.__get(0)) )) ).length;
		int n = ((haxe.root.Array<java.lang.String>) (((haxe.root.Array) (destLines.__get(0)) )) ).length;
		haxe.root.Array<haxe.root.Array> lcs = new haxe.root.Array<haxe.root.Array>(new haxe.root.Array[]{((haxe.root.Array) (cx.diff.mtwin.text.Diff.longestCommonSubsequence(((haxe.root.Array<java.lang.String>) (((haxe.root.Array) (sourceLines.__get(0)) )) ), ((haxe.root.Array<java.lang.String>) (((haxe.root.Array) (destLines.__get(0)) )) ))) )});
		haxe.root.List<haxe.root.Array> stack = cx.diff.mtwin.text.Diff.lcsToStack(((haxe.root.Array<haxe.root.Array>) (((haxe.root.Array) (lcs.__get(0)) )) ));
		haxe.lang.Function cursorKind = new cx.diff.mtwin.text.Diff_diff_173__Fun(((haxe.root.Array<haxe.root.Array>) (lcs) ));
		haxe.lang.Function operationAdd = new cx.diff.mtwin.text.Diff_diff_177__Fun(((haxe.root.Array<java.lang.Object>) (dstNoNewLine) ), ((haxe.root.Array<haxe.root.Array>) (destLines) ));
		haxe.lang.Function operationDel = new cx.diff.mtwin.text.Diff_diff_194__Fun(((haxe.root.Array<java.lang.Object>) (srcNoNewLine) ), ((haxe.root.Array<haxe.root.Array>) (sourceLines) ));
		haxe.lang.Function operationUpd = new cx.diff.mtwin.text.Diff_diff_209__Fun(((haxe.root.Array<java.lang.Object>) (srcNoNewLine) ), ((haxe.root.Array<java.lang.Object>) (dstNoNewLine) ), ((haxe.root.Array<haxe.root.Array>) (sourceLines) ), ((haxe.root.Array<haxe.root.Array>) (destLines) ));
		haxe.root.StringBuf result = new haxe.root.StringBuf();
		while (( stack.length > 0 ))
		{
			haxe.root.Array<java.lang.Object> pos = ((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (stack.pop()) )) );
			{
				int _g4 = ((int) (cursorKind.__hx_invoke1_f(0.0, pos)) );
				switch (_g4)
				{
					case 3:
					{
						{
						}
						
						break;
					}
					
					
					case 1:
					{
						haxe.root.Array<java.lang.Object> end = ((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (stack.pop()) )) );
						if (( ((int) (cursorKind.__hx_invoke1_f(0.0, end)) ) == 2 )) 
						{
							haxe.root.Array<java.lang.Object> del = ((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (stack.pop()) )) );
							stack.push(((haxe.root.Array) (del) ));
							result.add(haxe.lang.Runtime.toString(operationUpd.__hx_invoke4_o(((double) (( ((int) (haxe.lang.Runtime.toInt(pos.__get(0))) ) + 1 )) ), haxe.lang.Runtime.undefined, ((double) (((int) (haxe.lang.Runtime.toInt(end.__get(0))) )) ), haxe.lang.Runtime.undefined, ((double) (( ((int) (haxe.lang.Runtime.toInt(pos.__get(1))) ) + 1 )) ), haxe.lang.Runtime.undefined, ((double) (((int) (haxe.lang.Runtime.toInt(del.__get(1))) )) ), haxe.lang.Runtime.undefined)));
						}
						 else 
						{
							stack.push(((haxe.root.Array) (end) ));
							result.add(haxe.lang.Runtime.toString(operationDel.__hx_invoke3_o(((double) (( ((int) (haxe.lang.Runtime.toInt(pos.__get(0))) ) + 1 )) ), haxe.lang.Runtime.undefined, ((double) (((int) (haxe.lang.Runtime.toInt(end.__get(0))) )) ), haxe.lang.Runtime.undefined, ((double) (((int) (haxe.lang.Runtime.toInt(end.__get(1))) )) ), haxe.lang.Runtime.undefined)));
						}
						
						break;
					}
					
					
					case 2:
					{
						haxe.root.Array<java.lang.Object> end1 = ((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (stack.pop()) )) );
						stack.push(((haxe.root.Array) (end1) ));
						result.add(haxe.lang.Runtime.toString(operationAdd.__hx_invoke3_o(((double) (((int) (haxe.lang.Runtime.toInt(pos.__get(0))) )) ), haxe.lang.Runtime.undefined, ((double) (( ((int) (haxe.lang.Runtime.toInt(pos.__get(1))) ) + 1 )) ), haxe.lang.Runtime.undefined, ((double) (((int) (haxe.lang.Runtime.toInt(end1.__get(1))) )) ), haxe.lang.Runtime.undefined)));
						break;
					}
					
					
					case 0:
					{
						if (( ((int) (haxe.lang.Runtime.toInt(pos.__get(0))) ) < m )) 
						{
							result.add(haxe.lang.Runtime.toString(operationDel.__hx_invoke3_o(((double) (((int) (haxe.lang.Runtime.toInt(pos.__get(0))) )) ), haxe.lang.Runtime.undefined, ((double) (( m - 1 )) ), haxe.lang.Runtime.undefined, ((double) (( n - 1 )) ), haxe.lang.Runtime.undefined)));
						}
						
						if (( ((int) (haxe.lang.Runtime.toInt(pos.__get(1))) ) < n )) 
						{
							result.add(haxe.lang.Runtime.toString(operationAdd.__hx_invoke3_o(((double) (( m - 1 )) ), haxe.lang.Runtime.undefined, ((double) (((int) (haxe.lang.Runtime.toInt(pos.__get(1))) )) ), haxe.lang.Runtime.undefined, ((double) (( n - 1 )) ), haxe.lang.Runtime.undefined)));
						}
						
						break;
					}
					
					
				}
				
			}
			
		}
		
		return result.toString();
	}
	
	
	public static   java.lang.Object parsePatchOp(java.lang.String left, java.lang.String op, java.lang.String right)
	{
		haxe.root.Array<java.lang.Object> l = haxe.root.Lambda.array(haxe.root.Lambda.map(haxe.lang.StringExt.split(left, ","), ( (( cx.diff.mtwin.text.Diff_parsePatchOp_273__Fun.__hx_current != null )) ? (cx.diff.mtwin.text.Diff_parsePatchOp_273__Fun.__hx_current) : (cx.diff.mtwin.text.Diff_parsePatchOp_273__Fun.__hx_current = ((cx.diff.mtwin.text.Diff_parsePatchOp_273__Fun) (new cx.diff.mtwin.text.Diff_parsePatchOp_273__Fun()) )) )));
		if (( l.length == 1 )) 
		{
			l.push(l.__get(0));
		}
		
		haxe.root.Array<java.lang.Object> r = haxe.root.Lambda.array(haxe.root.Lambda.map(haxe.lang.StringExt.split(right, ","), ( (( cx.diff.mtwin.text.Diff_parsePatchOp_275__Fun.__hx_current != null )) ? (cx.diff.mtwin.text.Diff_parsePatchOp_275__Fun.__hx_current) : (cx.diff.mtwin.text.Diff_parsePatchOp_275__Fun.__hx_current = ((cx.diff.mtwin.text.Diff_parsePatchOp_275__Fun) (new cx.diff.mtwin.text.Diff_parsePatchOp_275__Fun()) )) )));
		if (( r.length == 1 )) 
		{
			r.push(r.__get(0));
		}
		
		return new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"data", "left", "op", "right"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), l, op, r}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
	}
	
	
	public static   java.lang.String patch(java.lang.String src, java.lang.String patch)
	{
		haxe.root.EReg opRegexp = new haxe.root.EReg(haxe.lang.Runtime.toString("^([0-9,]+)([adc])([0-9,]+)$"), haxe.lang.Runtime.toString(""));
		haxe.root.Array<java.lang.String> lines = haxe.lang.StringExt.split(src, "\n");
		int counter = 0;
		haxe.root.StringBuf result = new haxe.root.StringBuf();
		haxe.root.Array<java.lang.String> patchLines = haxe.lang.StringExt.split(patch, "\n");
		while (( patchLines.length > 0 ))
		{
			java.lang.String patchLine = patchLines.shift();
			if (opRegexp.match(patchLine)) 
			{
				java.lang.Object op = cx.diff.mtwin.text.Diff.parsePatchOp(opRegexp.matched(1), opRegexp.matched(2), opRegexp.matched(3));
				java.lang.String tmp = patchLines.shift();
				while (( (  ! (haxe.lang.Runtime.valEq(tmp, ""))  && ( tmp != null ) ) &&  ! (opRegexp.match(tmp))  ))
				{
					((haxe.root.Array<java.lang.String>) (haxe.lang.Runtime.getField(op, "data", true)) ).push(tmp);
					tmp = patchLines.shift();
				}
				
				if (( tmp != null )) 
				{
					patchLines.unshift(tmp);
				}
				
				{
					java.lang.String _g = haxe.lang.Runtime.toString(haxe.lang.Runtime.getField(op, "op", true));
					{
						java.lang.String __temp_svar264 = (_g);
						switch (__temp_svar264.hashCode())
						{
							case 97:
							{
								if (__temp_svar264.equals("a")) 
								{
									while (( counter < ((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (haxe.lang.Runtime.getField(op, "left", true)) ).__get(0))) ) ))
									{
										result.add(lines.__get(counter));
										result.add("\n");
										counter++;
									}
									
									{
										int _g2 = 0;
										int _g1 = ((haxe.root.Array<java.lang.String>) (haxe.lang.Runtime.getField(op, "data", true)) ).length;
										while (( _g2 < _g1 ))
										{
											int i = _g2++;
											java.lang.String line = ((haxe.root.Array<java.lang.String>) (haxe.lang.Runtime.getField(op, "data", true)) ).__get(i);
											if (haxe.lang.Runtime.valEq(haxe.lang.StringExt.substr(line, 0, 2), "> ")) 
											{
												result.add(haxe.lang.StringExt.substr(line, 2, line.length()));
												if (( ( i == ( ((haxe.root.Array<java.lang.String>) (haxe.lang.Runtime.getField(op, "data", true)) ).length - 1 ) ) ||  ! (haxe.lang.Runtime.valEq(haxe.lang.StringExt.substr(((haxe.root.Array<java.lang.String>) (haxe.lang.Runtime.getField(op, "data", true)) ).__get(( i + 1 )), 0, 2), "\\ "))  )) 
												{
													result.add("\n");
												}
												
											}
											
										}
										
									}
									
								}
								
								break;
							}
							
							
							case 99:
							{
								if (__temp_svar264.equals("c")) 
								{
									while (( counter < ( ((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (haxe.lang.Runtime.getField(op, "left", true)) ).__get(0))) ) - 1 ) ))
									{
										result.add(lines.__get(counter));
										result.add("\n");
										counter++;
									}
									
									{
										int _g21 = 0;
										int _g11 = ((haxe.root.Array<java.lang.String>) (haxe.lang.Runtime.getField(op, "data", true)) ).length;
										while (( _g21 < _g11 ))
										{
											int i1 = _g21++;
											java.lang.String line1 = ((haxe.root.Array<java.lang.String>) (haxe.lang.Runtime.getField(op, "data", true)) ).__get(i1);
											if (haxe.lang.Runtime.valEq(haxe.lang.StringExt.substr(line1, 0, 2), "> ")) 
											{
												result.add(haxe.lang.StringExt.substr(line1, 2, line1.length()));
												if (( ( i1 == ( ((haxe.root.Array<java.lang.String>) (haxe.lang.Runtime.getField(op, "data", true)) ).length - 1 ) ) ||  ! (haxe.lang.Runtime.valEq(haxe.lang.StringExt.substr(((haxe.root.Array<java.lang.String>) (haxe.lang.Runtime.getField(op, "data", true)) ).__get(( i1 + 1 )), 0, 2), "\\ "))  )) 
												{
													result.add("\n");
												}
												
											}
											
										}
										
									}
									
									counter = ((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (haxe.lang.Runtime.getField(op, "left", true)) ).__get(1))) );
								}
								
								break;
							}
							
							
							case 100:
							{
								if (__temp_svar264.equals("d")) 
								{
									while (( counter < ( ((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (haxe.lang.Runtime.getField(op, "left", true)) ).__get(0))) ) - 1 ) ))
									{
										result.add(lines.__get(counter));
										result.add("\n");
										counter++;
									}
									
									counter = ((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (haxe.lang.Runtime.getField(op, "left", true)) ).__get(1))) );
								}
								
								break;
							}
							
							
						}
						
					}
					
				}
				
			}
			
		}
		
		{
			int _g12 = counter;
			int _g3 = ( lines.length - 1 );
			while (( _g12 < _g3 ))
			{
				int i2 = _g12++;
				result.add(lines.__get(i2));
				result.add("\n");
			}
			
		}
		
		return result.toString();
	}
	
	
	public static   java.lang.String unpatch(java.lang.String src, java.lang.String patch)
	{
		haxe.root.EReg opRegexp = new haxe.root.EReg(haxe.lang.Runtime.toString("^([0-9,]+)([adc])([0-9,]+)$"), haxe.lang.Runtime.toString(""));
		haxe.root.Array<java.lang.String> lines = haxe.lang.StringExt.split(src, "\n");
		int counter = 0;
		haxe.root.StringBuf result = new haxe.root.StringBuf();
		haxe.root.Array<java.lang.String> patchLines = haxe.lang.StringExt.split(patch, "\n");
		while (( patchLines.length > 0 ))
		{
			java.lang.String patchLine = patchLines.shift();
			if (opRegexp.match(patchLine)) 
			{
				java.lang.Object op = cx.diff.mtwin.text.Diff.parsePatchOp(opRegexp.matched(1), opRegexp.matched(2), opRegexp.matched(3));
				java.lang.String tmp = patchLines.shift();
				while (( (  ! (haxe.lang.Runtime.valEq(tmp, ""))  && ( tmp != null ) ) &&  ! (opRegexp.match(tmp))  ))
				{
					((haxe.root.Array<java.lang.String>) (haxe.lang.Runtime.getField(op, "data", true)) ).push(tmp);
					tmp = patchLines.shift();
				}
				
				if (( tmp != null )) 
				{
					patchLines.unshift(tmp);
				}
				
				{
					java.lang.String _g = haxe.lang.Runtime.toString(haxe.lang.Runtime.getField(op, "op", true));
					{
						java.lang.String __temp_svar266 = (_g);
						switch (__temp_svar266.hashCode())
						{
							case 97:
							{
								if (__temp_svar266.equals("a")) 
								{
									while (( counter < ( ((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (haxe.lang.Runtime.getField(op, "right", true)) ).__get(0))) ) - 1 ) ))
									{
										result.add(lines.__get(counter));
										result.add("\n");
										counter++;
									}
									
									counter = ((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (haxe.lang.Runtime.getField(op, "right", true)) ).__get(1))) );
								}
								
								break;
							}
							
							
							case 99:
							{
								if (__temp_svar266.equals("c")) 
								{
									while (( counter < ( ((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (haxe.lang.Runtime.getField(op, "right", true)) ).__get(0))) ) - 1 ) ))
									{
										result.add(lines.__get(counter));
										result.add("\n");
										counter++;
									}
									
									{
										int _g21 = 0;
										int _g11 = ((haxe.root.Array<java.lang.String>) (haxe.lang.Runtime.getField(op, "data", true)) ).length;
										while (( _g21 < _g11 ))
										{
											int i1 = _g21++;
											java.lang.String line1 = ((haxe.root.Array<java.lang.String>) (haxe.lang.Runtime.getField(op, "data", true)) ).__get(i1);
											if (haxe.lang.Runtime.valEq(haxe.lang.StringExt.substr(line1, 0, 2), "< ")) 
											{
												result.add(haxe.lang.StringExt.substr(line1, 2, line1.length()));
												if (( ( i1 == ( ((haxe.root.Array<java.lang.String>) (haxe.lang.Runtime.getField(op, "data", true)) ).length - 1 ) ) ||  ! (haxe.lang.Runtime.valEq(haxe.lang.StringExt.substr(((haxe.root.Array<java.lang.String>) (haxe.lang.Runtime.getField(op, "data", true)) ).__get(( i1 + 1 )), 0, 2), "\\ "))  )) 
												{
													result.add("\n");
												}
												
											}
											
										}
										
									}
									
									counter = ((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (haxe.lang.Runtime.getField(op, "right", true)) ).__get(1))) );
								}
								
								break;
							}
							
							
							case 100:
							{
								if (__temp_svar266.equals("d")) 
								{
									while (( counter < ((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (haxe.lang.Runtime.getField(op, "right", true)) ).__get(0))) ) ))
									{
										result.add(lines.__get(counter));
										result.add("\n");
										counter++;
									}
									
									{
										int _g2 = 0;
										int _g1 = ((haxe.root.Array<java.lang.String>) (haxe.lang.Runtime.getField(op, "data", true)) ).length;
										while (( _g2 < _g1 ))
										{
											int i = _g2++;
											java.lang.String line = ((haxe.root.Array<java.lang.String>) (haxe.lang.Runtime.getField(op, "data", true)) ).__get(i);
											if (haxe.lang.Runtime.valEq(haxe.lang.StringExt.substr(line, 0, 2), "< ")) 
											{
												result.add(haxe.lang.StringExt.substr(line, 2, line.length()));
												if (( ( i == ( ((haxe.root.Array<java.lang.String>) (haxe.lang.Runtime.getField(op, "data", true)) ).length - 1 ) ) ||  ! (haxe.lang.Runtime.valEq(haxe.lang.StringExt.substr(((haxe.root.Array<java.lang.String>) (haxe.lang.Runtime.getField(op, "data", true)) ).__get(( i + 1 )), 0, 2), "\\ "))  )) 
												{
													result.add("\n");
												}
												
											}
											
										}
										
									}
									
								}
								
								break;
							}
							
							
						}
						
					}
					
				}
				
			}
			
		}
		
		{
			int _g12 = counter;
			int _g3 = ( lines.length - 1 );
			while (( _g12 < _g3 ))
			{
				int i2 = _g12++;
				result.add(lines.__get(i2));
				result.add("\n");
			}
			
		}
		
		return result.toString();
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new cx.diff.mtwin.text.Diff(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new cx.diff.mtwin.text.Diff();
	}
	
	
}


