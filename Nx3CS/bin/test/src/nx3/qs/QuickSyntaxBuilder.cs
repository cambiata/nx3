
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class QuickSyntaxBuilder : global::haxe.lang.HxObject {
		public    QuickSyntaxBuilder(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    QuickSyntaxBuilder(global::haxe.ds.StringMap<object> qsnotes){
			unchecked {
				#line 23 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
				global::nx3.qs.QuickSyntaxBuilder.__hx_ctor_nx3_qs_QuickSyntaxBuilder(this, qsnotes);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_qs_QuickSyntaxBuilder(global::nx3.qs.QuickSyntaxBuilder __temp_me207, global::haxe.ds.StringMap<object> qsnotes){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
				__temp_me207.qsnotes = qsnotes;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
				return new global::nx3.qs.QuickSyntaxBuilder(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
				return new global::nx3.qs.QuickSyntaxBuilder(((global::haxe.ds.StringMap<object>) (global::haxe.ds.StringMap<object>.__hx_cast<object>(((global::haxe.ds.StringMap) (arr[0]) ))) ));
			}
			#line default
		}
		
		
		public  global::haxe.ds.StringMap<object> qsnotes;
		
		public virtual   global::Array<object> getNBars(){
			unchecked {
				#line 30 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
				int barMax = 0;
				int partMax = 0;
				int voiceMax = 0;
				#line 34 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
				{
					#line 34 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
					object __temp_iterator241 = this.qsnotes.keys();
					#line 34 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
					while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator241, "hasNext", 407283053, default(global::Array)))){
						#line 34 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
						string key = global::haxe.lang.Runtime.toString(global::haxe.lang.Runtime.callField(__temp_iterator241, "next", 1224901875, default(global::Array)));
						#line 37 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
						object bpv = global::nx3.qs.QSyntaxTools.stringToBpv(key);
						barMax = this.max(((int) (global::haxe.lang.Runtime.getField_f(bpv, "barIndex", 216194111, true)) ), barMax);
						partMax = this.max(((int) (global::haxe.lang.Runtime.getField_f(bpv, "partIndex", 754054687, true)) ), partMax);
					}
					
				}
				
				#line 42 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
				barMax++;
				partMax++;
				#line 45 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
				global::Array<object> nbars = new global::Array<object>(new object[]{});
				{
					#line 46 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
					int _g = 0;
					#line 46 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
					while (( _g < barMax )){
						#line 46 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
						int barIndex = _g++;
						#line 48 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
						global::Array<object> nparts = new global::Array<object>(new object[]{});
						{
							#line 49 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
							int _g1 = 0;
							#line 49 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
							while (( _g1 < partMax )){
								#line 49 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
								int partIndex = _g1++;
								#line 51 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
								global::Array<object> nvoices = new global::Array<object>(new object[]{});
								#line 53 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
								bool __temp_stmt356 = default(bool);
								#line 53 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
								{
									#line 53 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
									string key1 = global::nx3.qs.QSyntaxTools.getBpvString(barIndex, partIndex, 0);
									#line 53 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
									__temp_stmt356 = this.qsnotes.exists(key1);
								}
								
								#line 53 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
								if (__temp_stmt356) {
									#line 56 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
									global::Array<object> nnotes = default(global::Array<object>);
									#line 56 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
									{
										#line 56 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
										string key2 = global::nx3.qs.QSyntaxTools.getBpvString(barIndex, partIndex, 0);
										#line 56 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
										nnotes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.qsnotes.@get(((string) (key2) )).@value) ))) );
									}
									
									#line 57 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
									global::nx3.NVoice nvoice = new global::nx3.NVoice(((global::Array<object>) (nnotes) ), ((global::nx3.EVoiceType) (default(global::nx3.EVoiceType)) ), ((global::nx3.EDirectionUAD) (default(global::nx3.EDirectionUAD)) ));
									nvoices.push(nvoice);
								}
								 else {
									#line 61 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
									{
									}
									
								}
								
								#line 65 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
								bool __temp_stmt357 = default(bool);
								#line 65 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
								{
									#line 65 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
									string key3 = global::nx3.qs.QSyntaxTools.getBpvString(barIndex, partIndex, 1);
									#line 65 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
									__temp_stmt357 = this.qsnotes.exists(key3);
								}
								
								#line 65 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
								if (__temp_stmt357) {
									#line 68 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
									global::Array<object> nnotes1 = default(global::Array<object>);
									#line 68 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
									{
										#line 68 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
										string key4 = global::nx3.qs.QSyntaxTools.getBpvString(barIndex, partIndex, 1);
										#line 68 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
										nnotes1 = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.qsnotes.@get(((string) (key4) )).@value) ))) );
									}
									
									#line 69 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
									global::nx3.NVoice nvoice1 = new global::nx3.NVoice(((global::Array<object>) (nnotes1) ), ((global::nx3.EVoiceType) (default(global::nx3.EVoiceType)) ), ((global::nx3.EDirectionUAD) (default(global::nx3.EDirectionUAD)) ));
									nvoices.push(nvoice1);
								}
								 else {
									#line 73 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
									{
									}
									
								}
								
								#line 77 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
								global::nx3.NPart npart = new global::nx3.NPart(((global::Array<object>) (nvoices) ), ((global::nx3.EPartType) (default(global::nx3.EPartType)) ), ((global::nx3.EClef) (default(global::nx3.EClef)) ), ((global::nx3.EDisplayALN) (default(global::nx3.EDisplayALN)) ), ((global::nx3.EKey) (default(global::nx3.EKey)) ), ((global::nx3.EDisplayALN) (default(global::nx3.EDisplayALN)) ));
								nparts.push(npart);
							}
							
						}
						
						#line 81 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
						global::nx3.NBar nbar = new global::nx3.NBar(((global::Array<object>) (nparts) ), ((global::nx3.EBarType) (default(global::nx3.EBarType)) ), ((global::nx3.ETime) (default(global::nx3.ETime)) ), ((global::nx3.EDisplayALN) (default(global::nx3.EDisplayALN)) ), ((global::nx3.EAllotment) (default(global::nx3.EAllotment)) ), ((global::haxe.lang.Null<double>) (default(global::haxe.lang.Null<double>)) ));
						nbars.push(nbar);
					}
					
				}
				
				#line 85 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
				return nbars;
			}
			#line default
		}
		
		
		public virtual   global::nx3.NScore getNScore(){
			unchecked {
				#line 90 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
				global::nx3.NScore nscore = new global::nx3.NScore(((global::Array<object>) (this.getNBars()) ));
				return nscore;
			}
			#line default
		}
		
		
		public virtual   int max(int valA, int valB){
			unchecked {
				#line 97 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
				if (( valA > valB )) {
					#line 97 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
					return valA;
				}
				
				#line 98 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
				return valB;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
				switch (hash){
					case 1976485407:
					{
						#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
						this.qsnotes = ((global::haxe.ds.StringMap<object>) (global::haxe.ds.StringMap<object>.__hx_cast<object>(((global::haxe.ds.StringMap) (@value) ))) );
						#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
						return @value;
					}
					
					
					default:
					{
						#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
				switch (hash){
					case 5442212:
					{
						#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("max") ), ((int) (5442212) ))) );
					}
					
					
					case 60759354:
					{
						#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNScore") ), ((int) (60759354) ))) );
					}
					
					
					case 1641345624:
					{
						#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNBars") ), ((int) (1641345624) ))) );
					}
					
					
					case 1976485407:
					{
						#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
						return this.qsnotes;
					}
					
					
					default:
					{
						#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
				switch (hash){
					case 5442212:
					{
						#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
						return this.max(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ), ((int) (global::haxe.lang.Runtime.toInt(dynargs[1])) ));
					}
					
					
					case 60759354:
					{
						#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
						return this.getNScore();
					}
					
					
					case 1641345624:
					{
						#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
						return this.getNBars();
					}
					
					
					default:
					{
						#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
				baseArr.push("qsnotes");
				#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
				{
					#line 19 "F:\\nx3\\src\\nx3\\qs\\QuickSyntaxBuilder.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


