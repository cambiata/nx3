
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PBeamflagCalculator : global::haxe.lang.HxObject {
		public    PBeamflagCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PBeamflagCalculator(global::nx3.PBeamgroup beamgroup){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
				global::nx3.PBeamflagCalculator.__hx_ctor_nx3_PBeamflagCalculator(this, beamgroup);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PBeamflagCalculator(global::nx3.PBeamflagCalculator __temp_me85, global::nx3.PBeamgroup beamgroup){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
				__temp_me85.beamgroup = beamgroup;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
				return new global::nx3.PBeamflagCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
				return new global::nx3.PBeamflagCalculator(((global::nx3.PBeamgroup) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.PBeamgroup beamgroup;
		
		public virtual   global::Array<global::nx3.EBeamflagType> getBeamflags(){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
				global::Array<global::nx3.EBeamflagType> firstpass = new global::Array<global::nx3.EBeamflagType>(new global::nx3.EBeamflagType[]{});
				int noteIdx = 0;
				#line 23 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
				global::Array<int> holder = new global::Array<int>(new int[]{});
				int holderIdx = 0;
				{
					#line 25 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
					int _g = 0;
					#line 25 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
					global::Array<object> _g1 = this.beamgroup.pnotes;
					#line 25 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
					while (( _g < _g1.length )){
						#line 25 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						global::nx3.PNote note = ((global::nx3.PNote) (_g1[_g]) );
						#line 25 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						 ++ _g;
						#line 27 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						global::nx3.PNote nextnote = default(global::nx3.PNote);
						#line 27 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						{
							#line 27 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
							global::Array<object> a = this.beamgroup.pnotes;
							#line 27 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
							int idx = ( noteIdx + 1 );
							#line 27 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
							if (( ( idx < 0 ) || ( idx > ( a.length - 1 ) ) )) {
								#line 27 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
								nextnote = default(global::nx3.PNote);
							}
							 else {
								#line 27 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
								nextnote = ((global::nx3.PNote) (a[idx]) );
							}
							
						}
						
						#line 28 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						if (( nextnote == default(global::nx3.PNote) )) {
							#line 28 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
							continue;
						}
						
						#line 30 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						if (( ( global::nx3.ENoteValTools.beaminglevel(note.nnote.@value) > 1 ) && ( global::nx3.ENoteValTools.beaminglevel(nextnote.nnote.@value) > 1 ) )) {
							#line 32 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
							holder.push(2);
							firstpass.push(global::nx3.EBeamflagType.Full16);
						}
						 else {
							#line 35 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
							if (( ( global::nx3.ENoteValTools.beaminglevel(note.nnote.@value) == 1 ) && ( global::nx3.ENoteValTools.beaminglevel(nextnote.nnote.@value) > 1 ) )) {
								#line 37 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
								holder.push(-1);
								firstpass.push(global::nx3.EBeamflagType.End16);
							}
							 else {
								#line 40 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
								if (( ( global::nx3.ENoteValTools.beaminglevel(note.nnote.@value) > 1 ) && ( global::nx3.ENoteValTools.beaminglevel(nextnote.nnote.@value) == 1 ) )) {
									#line 42 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
									holder.push(1);
									firstpass.push(global::nx3.EBeamflagType.Start16);
								}
								 else {
									#line 47 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
									holder.push(0);
									firstpass.push(global::nx3.EBeamflagType.None);
								}
								
							}
							
						}
						
						#line 50 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						noteIdx++;
					}
					
				}
				
				#line 54 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
				global::Array<global::nx3.EBeamflagType> result = new global::Array<global::nx3.EBeamflagType>(new global::nx3.EBeamflagType[]{});
				{
					#line 55 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
					int _g2 = 0;
					#line 55 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
					while (( _g2 < firstpass.length )){
						#line 55 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						global::nx3.EBeamflagType r = firstpass[_g2];
						#line 55 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						 ++ _g2;
						#line 57 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						global::haxe.lang.Null<global::nx3.EBeamflagType> rnext = default(global::haxe.lang.Null<global::nx3.EBeamflagType>);
						#line 57 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						{
							#line 57 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
							int idx1 = firstpass.indexOf(r, default(global::haxe.lang.Null<int>));
							#line 57 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
							if (( idx1 == -1 )) {
								#line 57 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
								rnext = default(global::haxe.lang.Null<global::nx3.EBeamflagType>);
							}
							 else {
								#line 57 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
								if (( idx1 == ( firstpass.length - 1 ) )) {
									#line 57 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
									rnext = default(global::haxe.lang.Null<global::nx3.EBeamflagType>);
								}
								 else {
									#line 57 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
									rnext = new global::haxe.lang.Null<global::nx3.EBeamflagType>(firstpass[( idx1 + 1 )], true);
								}
								
							}
							
						}
						
						#line 58 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						global::haxe.lang.Null<global::nx3.EBeamflagType> rprev = default(global::haxe.lang.Null<global::nx3.EBeamflagType>);
						#line 58 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						{
							#line 58 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
							int idx2 = firstpass.indexOf(r, default(global::haxe.lang.Null<int>));
							#line 58 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
							if (( idx2 <= 0 )) {
								#line 58 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
								rprev = default(global::haxe.lang.Null<global::nx3.EBeamflagType>);
							}
							 else {
								#line 58 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
								rprev = new global::haxe.lang.Null<global::nx3.EBeamflagType>(firstpass[( idx2 - 1 )], true);
							}
							
						}
						
						#line 59 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						if (( global::haxe.lang.Runtime.eq((rnext).toDynamic(), global::nx3.EBeamflagType.Full16) && ( r == global::nx3.EBeamflagType.End16 ) )) {
							#line 61 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
							result.push(global::nx3.EBeamflagType.None);
						}
						 else {
							#line 63 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
							if (( global::haxe.lang.Runtime.eq((rprev).toDynamic(), global::nx3.EBeamflagType.Full16) && ( r == global::nx3.EBeamflagType.Start16 ) )) {
								#line 65 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
								result.push(global::nx3.EBeamflagType.None);
							}
							 else {
								#line 69 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
								result.push(r);
							}
							
						}
						
					}
					
				}
				
				#line 72 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
				return result;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
				switch (hash){
					case 1104035696:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						this.beamgroup = ((global::nx3.PBeamgroup) (@value) );
						#line 9 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
				switch (hash){
					case 968643586:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBeamflags") ), ((int) (968643586) ))) );
					}
					
					
					case 1104035696:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						return this.beamgroup;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
				switch (hash){
					case 968643586:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						return this.getBeamflags();
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
				baseArr.push("beamgroup");
				#line 9 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
				{
					#line 9 "F:\\nx3\\src\\nx3\\PBeamflagCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


