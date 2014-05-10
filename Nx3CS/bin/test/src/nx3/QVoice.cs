
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QVoice : global::nx3.NVoice {
		public    QVoice(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    QVoice(global::Array<double> notevalues, global::haxe.lang.Null<double> notevalue, global::Array<int> headlevels, global::haxe.lang.Null<int> levelrepeats, string signs, global::nx3.EDirectionUAD direction) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 83 "F:\\nx3\\src\\nx3\\QVoice.hx"
				global::nx3.QVoice.__hx_ctor_nx3_QVoice(this, notevalues, notevalue, headlevels, levelrepeats, signs, direction);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QVoice(global::nx3.QVoice __temp_me158, global::Array<double> notevalues, global::haxe.lang.Null<double> notevalue, global::Array<int> headlevels, global::haxe.lang.Null<int> levelrepeats, string signs, global::nx3.EDirectionUAD direction){
			unchecked {
				#line 33 "F:\\nx3\\src\\nx3\\QVoice.hx"
				global::haxe.lang.Null<int> __temp_levelrepeats157 = ( ( ! (levelrepeats.hasValue) ) ? (new global::haxe.lang.Null<int>(1, true)) : (((global::haxe.lang.Null<int>) (levelrepeats) )) );
				global::Array<double> _notevalues = notevalues;
				if (( _notevalues == default(global::Array<double>) )) {
					#line 35 "F:\\nx3\\src\\nx3\\QVoice.hx"
					_notevalues = new global::Array<double>(new double[]{notevalue.@value});
				}
				
				#line 36 "F:\\nx3\\src\\nx3\\QVoice.hx"
				if (( _notevalues == default(global::Array<double>) )) {
					#line 36 "F:\\nx3\\src\\nx3\\QVoice.hx"
					_notevalues = new global::Array<double>(new double[]{((double) (4) )});
				}
				
				#line 51 "F:\\nx3\\src\\nx3\\QVoice.hx"
				global::Array<int> _headlevels = default(global::Array<int>);
				#line 51 "F:\\nx3\\src\\nx3\\QVoice.hx"
				if (( headlevels != default(global::Array<int>) )) {
					#line 51 "F:\\nx3\\src\\nx3\\QVoice.hx"
					_headlevels = headlevels;
				}
				 else {
					#line 51 "F:\\nx3\\src\\nx3\\QVoice.hx"
					_headlevels = new global::Array<int>(new int[]{0});
				}
				
				#line 53 "F:\\nx3\\src\\nx3\\QVoice.hx"
				while (( _notevalues.length > _headlevels.length )){
					#line 54 "F:\\nx3\\src\\nx3\\QVoice.hx"
					_headlevels.push(0);
				}
				
				#line 59 "F:\\nx3\\src\\nx3\\QVoice.hx"
				int r = 1;
				global::Array<int> copy = _headlevels.copy();
				while (( r < __temp_levelrepeats157.@value )){
					#line 63 "F:\\nx3\\src\\nx3\\QVoice.hx"
					_headlevels = _headlevels.concat(copy);
					r++;
				}
				
				#line 66 "F:\\nx3\\src\\nx3\\QVoice.hx"
				while (( _headlevels.length > _notevalues.length )){
					#line 66 "F:\\nx3\\src\\nx3\\QVoice.hx"
					_notevalues = _notevalues.concat(_notevalues);
				}
				
				#line 68 "F:\\nx3\\src\\nx3\\QVoice.hx"
				global::Array<object> notes = new global::Array<object>(new object[]{});
				if (string.Equals(signs, default(string))) {
					#line 69 "F:\\nx3\\src\\nx3\\QVoice.hx"
					signs = "-";
				}
				
				#line 70 "F:\\nx3\\src\\nx3\\QVoice.hx"
				global::Array<object> asigns = global::haxe.lang.StringExt.split(signs, "");
				while (( _headlevels.length > asigns.length )){
					#line 71 "F:\\nx3\\src\\nx3\\QVoice.hx"
					asigns = asigns.concat(asigns);
				}
				
				#line 73 "F:\\nx3\\src\\nx3\\QVoice.hx"
				int i = 0;
				{
					#line 74 "F:\\nx3\\src\\nx3\\QVoice.hx"
					int _g = 0;
					#line 74 "F:\\nx3\\src\\nx3\\QVoice.hx"
					while (( _g < _headlevels.length )){
						#line 74 "F:\\nx3\\src\\nx3\\QVoice.hx"
						int level = _headlevels[_g];
						#line 74 "F:\\nx3\\src\\nx3\\QVoice.hx"
						 ++ _g;
						#line 76 "F:\\nx3\\src\\nx3\\QVoice.hx"
						global::nx3.ESign sign = __temp_me158.getSign(global::haxe.lang.Runtime.toString(asigns[i]));
						global::nx3.QHead head = new global::nx3.QHead(new global::haxe.lang.Null<int>(level, true), ((global::nx3.ESign) (sign) ));
						global::nx3.QNote note = new global::nx3.QNote(((global::haxe.lang.Null<int>) (default(global::haxe.lang.Null<int>)) ), ((global::Array<int>) (default(global::Array<int>)) ), ((global::nx3.NHead) (head) ), ((global::Array<object>) (default(global::Array<object>)) ), ((global::nx3.ENoteVal) (__temp_me158.getNotevalue(_notevalues[i])) ), ((string) (default(string)) ), ((global::nx3.EDirectionUAD) (default(global::nx3.EDirectionUAD)) ));
						notes.push(note);
						i++;
					}
					
				}
				
				#line 83 "F:\\nx3\\src\\nx3\\QVoice.hx"
				global::nx3.NVoice.__hx_ctor_nx3_NVoice(__temp_me158, notes, default(global::nx3.EVoiceType), direction);
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 29 "F:\\nx3\\src\\nx3\\QVoice.hx"
				return new global::nx3.QVoice(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 29 "F:\\nx3\\src\\nx3\\QVoice.hx"
				return new global::nx3.QVoice(((global::Array<double>) (global::Array<object>.__hx_cast<double>(((global::Array) (arr[0]) ))) ), global::haxe.lang.Null<object>.ofDynamic<double>(arr[1]), ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (arr[2]) ))) ), global::haxe.lang.Null<object>.ofDynamic<int>(arr[3]), global::haxe.lang.Runtime.toString(arr[4]), ((global::nx3.EDirectionUAD) (arr[5]) ));
			}
			#line default
		}
		
		
		public virtual   global::nx3.ESign getSign(string val){
			unchecked {
				#line 88 "F:\\nx3\\src\\nx3\\QVoice.hx"
				switch (val){
					case "#":
					{
						#line 90 "F:\\nx3\\src\\nx3\\QVoice.hx"
						return global::nx3.ESign.Sharp;
					}
					
					
					case "b":
					{
						#line 91 "F:\\nx3\\src\\nx3\\QVoice.hx"
						return global::nx3.ESign.Flat;
					}
					
					
					case "N":case "n":
					{
						#line 92 "F:\\nx3\\src\\nx3\\QVoice.hx"
						return global::nx3.ESign.Natural;
					}
					
					
					default:
					{
						#line 93 "F:\\nx3\\src\\nx3\\QVoice.hx"
						return default(global::nx3.ESign);
					}
					
				}
				
			}
			#line default
		}
		
		
		public virtual   global::nx3.ENoteVal getNotevalue(double val){
			unchecked {
				#line 99 "F:\\nx3\\src\\nx3\\QVoice.hx"
				{
					#line 99 "F:\\nx3\\src\\nx3\\QVoice.hx"
					double __temp_switch341 = (val);
					#line 101 "F:\\nx3\\src\\nx3\\QVoice.hx"
					if (( __temp_switch341 == 16.0 )) {
						#line 101 "F:\\nx3\\src\\nx3\\QVoice.hx"
						return global::nx3.ENoteVal.Nv16;
					}
					 else {
						#line 102 "F:\\nx3\\src\\nx3\\QVoice.hx"
						if (( __temp_switch341 == .16 )) {
							#line 102 "F:\\nx3\\src\\nx3\\QVoice.hx"
							return global::nx3.ENoteVal.Nv16dot;
						}
						 else {
							#line 103 "F:\\nx3\\src\\nx3\\QVoice.hx"
							if (( __temp_switch341 == 8.0 )) {
								#line 103 "F:\\nx3\\src\\nx3\\QVoice.hx"
								return global::nx3.ENoteVal.Nv8;
							}
							 else {
								#line 104 "F:\\nx3\\src\\nx3\\QVoice.hx"
								if (( __temp_switch341 == .8 )) {
									#line 104 "F:\\nx3\\src\\nx3\\QVoice.hx"
									return global::nx3.ENoteVal.Nv8dot;
								}
								 else {
									#line 105 "F:\\nx3\\src\\nx3\\QVoice.hx"
									if (( __temp_switch341 == 4.0 )) {
										#line 105 "F:\\nx3\\src\\nx3\\QVoice.hx"
										return global::nx3.ENoteVal.Nv4;
									}
									 else {
										#line 106 "F:\\nx3\\src\\nx3\\QVoice.hx"
										if (( __temp_switch341 == .4 )) {
											#line 106 "F:\\nx3\\src\\nx3\\QVoice.hx"
											return global::nx3.ENoteVal.Nv4dot;
										}
										 else {
											#line 107 "F:\\nx3\\src\\nx3\\QVoice.hx"
											if (( __temp_switch341 == 2.0 )) {
												#line 107 "F:\\nx3\\src\\nx3\\QVoice.hx"
												return global::nx3.ENoteVal.Nv2;
											}
											 else {
												#line 108 "F:\\nx3\\src\\nx3\\QVoice.hx"
												if (( __temp_switch341 == .2 )) {
													#line 108 "F:\\nx3\\src\\nx3\\QVoice.hx"
													return global::nx3.ENoteVal.Nv2dot;
												}
												 else {
													#line 109 "F:\\nx3\\src\\nx3\\QVoice.hx"
													if (( __temp_switch341 == 1.0 )) {
														#line 109 "F:\\nx3\\src\\nx3\\QVoice.hx"
														return global::nx3.ENoteVal.Nv1;
													}
													 else {
														#line 110 "F:\\nx3\\src\\nx3\\QVoice.hx"
														if (( __temp_switch341 == .1 )) {
															#line 110 "F:\\nx3\\src\\nx3\\QVoice.hx"
															return global::nx3.ENoteVal.Nv1dot;
														}
														 else {
															#line 111 "F:\\nx3\\src\\nx3\\QVoice.hx"
															throw global::haxe.lang.HaxeException.wrap(global::haxe.lang.Runtime.concat("Unknown notevalue: ", global::haxe.lang.Runtime.toString(val)));
														}
														
													}
													
												}
												
											}
											
										}
										
									}
									
								}
								
							}
							
						}
						
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 29 "F:\\nx3\\src\\nx3\\QVoice.hx"
				switch (hash){
					case 1802434249:
					{
						#line 29 "F:\\nx3\\src\\nx3\\QVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNotevalue") ), ((int) (1802434249) ))) );
					}
					
					
					case 517357555:
					{
						#line 29 "F:\\nx3\\src\\nx3\\QVoice.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getSign") ), ((int) (517357555) ))) );
					}
					
					
					default:
					{
						#line 29 "F:\\nx3\\src\\nx3\\QVoice.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 29 "F:\\nx3\\src\\nx3\\QVoice.hx"
				switch (hash){
					case 1802434249:
					{
						#line 29 "F:\\nx3\\src\\nx3\\QVoice.hx"
						return this.getNotevalue(((double) (global::haxe.lang.Runtime.toDouble(dynargs[0])) ));
					}
					
					
					case 517357555:
					{
						#line 29 "F:\\nx3\\src\\nx3\\QVoice.hx"
						return this.getSign(global::haxe.lang.Runtime.toString(dynargs[0]));
					}
					
					
					default:
					{
						#line 29 "F:\\nx3\\src\\nx3\\QVoice.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QVoiceDown : global::nx3.QVoice {
		public    QVoiceDown(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    QVoiceDown(global::Array<double> notevalues, global::haxe.lang.Null<double> notevalue, global::Array<int> headlevels, global::haxe.lang.Null<int> levelrepeats, string signs) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\QVoice.hx"
				global::nx3.QVoiceDown.__hx_ctor_nx3_QVoiceDown(this, notevalues, notevalue, headlevels, levelrepeats, signs);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QVoiceDown(global::nx3.QVoiceDown __temp_me159, global::Array<double> notevalues, global::haxe.lang.Null<double> notevalue, global::Array<int> headlevels, global::haxe.lang.Null<int> levelrepeats, string signs){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\QVoice.hx"
				global::nx3.QVoice.__hx_ctor_nx3_QVoice(__temp_me159, ( (( notevalues == default(global::Array<double>) )) ? (default(global::Array<double>)) : (notevalues) ), ( ( ! (notevalue.hasValue) ) ? (default(global::haxe.lang.Null<double>)) : (notevalue) ), ( (( headlevels == default(global::Array<int>) )) ? (default(global::Array<int>)) : (headlevels) ), ( ( ! (levelrepeats.hasValue) ) ? (default(global::haxe.lang.Null<int>)) : (levelrepeats) ), ( (string.Equals(signs, default(string))) ? (default(string)) : (signs) ), global::nx3.EDirectionUAD.Down);
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\QVoice.hx"
				return new global::nx3.QVoiceDown(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\QVoice.hx"
				return new global::nx3.QVoiceDown(((global::Array<double>) (global::Array<object>.__hx_cast<double>(((global::Array) (arr[0]) ))) ), global::haxe.lang.Null<object>.ofDynamic<double>(arr[1]), ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (arr[2]) ))) ), global::haxe.lang.Null<object>.ofDynamic<int>(arr[3]), global::haxe.lang.Runtime.toString(arr[4]));
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QVoiceUp : global::nx3.QVoice {
		public    QVoiceUp(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    QVoiceUp(global::Array<double> notevalues, global::haxe.lang.Null<double> notevalue, global::Array<int> headlevels, global::haxe.lang.Null<int> levelrepeats, string signs) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\QVoice.hx"
				global::nx3.QVoiceUp.__hx_ctor_nx3_QVoiceUp(this, notevalues, notevalue, headlevels, levelrepeats, signs);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QVoiceUp(global::nx3.QVoiceUp __temp_me160, global::Array<double> notevalues, global::haxe.lang.Null<double> notevalue, global::Array<int> headlevels, global::haxe.lang.Null<int> levelrepeats, string signs){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\QVoice.hx"
				global::nx3.QVoice.__hx_ctor_nx3_QVoice(__temp_me160, ( (( notevalues == default(global::Array<double>) )) ? (default(global::Array<double>)) : (notevalues) ), ( ( ! (notevalue.hasValue) ) ? (default(global::haxe.lang.Null<double>)) : (notevalue) ), ( (( headlevels == default(global::Array<int>) )) ? (default(global::Array<int>)) : (headlevels) ), ( ( ! (levelrepeats.hasValue) ) ? (default(global::haxe.lang.Null<int>)) : (levelrepeats) ), ( (string.Equals(signs, default(string))) ? (default(string)) : (signs) ), global::nx3.EDirectionUAD.Up);
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\QVoice.hx"
				return new global::nx3.QVoiceUp(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\QVoice.hx"
				return new global::nx3.QVoiceUp(((global::Array<double>) (global::Array<object>.__hx_cast<double>(((global::Array) (arr[0]) ))) ), global::haxe.lang.Null<object>.ofDynamic<double>(arr[1]), ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (arr[2]) ))) ), global::haxe.lang.Null<object>.ofDynamic<int>(arr[3]), global::haxe.lang.Runtime.toString(arr[4]));
			}
			#line default
		}
		
		
	}
}


