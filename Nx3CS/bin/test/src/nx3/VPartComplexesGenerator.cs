
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VPartComplexesGenerator : global::haxe.lang.HxObject {
		public    VPartComplexesGenerator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VPartComplexesGenerator(global::Array<object> vvoices){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				global::nx3.VPartComplexesGenerator.__hx_ctor_nx3_VPartComplexesGenerator(this, vvoices);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VPartComplexesGenerator(global::nx3.VPartComplexesGenerator __temp_me187, global::Array<object> vvoices){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				__temp_me187.vvoices = vvoices;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				return new global::nx3.VPartComplexesGenerator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				return new global::nx3.VPartComplexesGenerator(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ));
			}
			#line default
		}
		
		
		public  global::Array<object> vvoices;
		
		public  global::Array<object> complexes;
		
		public virtual   global::Array<object> getComplexes(){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				if (( this.complexes != default(global::Array<object>) )) {
					#line 22 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
					return this.complexes;
				}
				
				#line 23 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				this.positionsMap = this.calcPositionsMap();
				this.calcComplexes(this.positionsMap);
				return this.complexes;
			}
			#line default
		}
		
		
		public  global::haxe.ds.IntMap<object> positionsComplexes;
		
		public virtual   global::haxe.ds.IntMap<object> getPositionsComplexes(){
			unchecked {
				#line 31 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				if (( this.complexes == default(global::Array<object>) )) {
					#line 31 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
					this.getComplexes();
				}
				
				#line 32 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				return this.positionsComplexes;
			}
			#line default
		}
		
		
		public  global::haxe.ds.ObjectMap<object, int> complexesPositions;
		
		public virtual   global::haxe.ds.ObjectMap<object, int> getComplexesPositions(){
			unchecked {
				#line 38 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				if (( this.complexes == default(global::Array<object>) )) {
					#line 38 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
					this.getComplexes();
				}
				
				#line 39 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				return this.complexesPositions;
			}
			#line default
		}
		
		
		public virtual   void calcComplexes(global::haxe.ds.IntMap<object> positions){
			unchecked {
				#line 44 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				this.complexes = new global::Array<object>(new object[]{});
				this.positionsComplexes = new global::haxe.ds.IntMap<object>();
				this.complexesPositions = new global::haxe.ds.ObjectMap<object, int>();
				global::Array<int> poskeys = global::nx3.VMapTools.keysToArray<int>(positions.keys());
				poskeys = global::nx3.VMapTools.sortarray<int>(poskeys);
				{
					#line 49 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
					int _g = 0;
					#line 49 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
					while (( _g < poskeys.length )){
						#line 49 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						int pos = poskeys[_g];
						#line 49 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						 ++ _g;
						#line 51 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						global::Array<object> vnotes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (positions.@get(pos).@value) ))) );
						global::nx3.VComplex vcomplex = new global::nx3.VComplex(((global::Array<object>) (vnotes) ), ((global::Array<global::nx3.EDirectionUD>) (default(global::Array<global::nx3.EDirectionUD>)) ));
						this.complexes.push(vcomplex);
						this.positionsComplexes.@set(pos, vcomplex);
						this.complexesPositions.@set(vcomplex, pos);
					}
					
				}
				
			}
			#line default
		}
		
		
		public  global::haxe.ds.IntMap<object> positionsMap;
		
		public virtual   global::haxe.ds.IntMap<object> calcPositionsMap(){
			unchecked {
				#line 62 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				global::haxe.ds.IntMap<object> positionsMap = new global::haxe.ds.IntMap<object>();
				{
					#line 63 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
					int _g = 0;
					#line 63 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
					global::Array<object> _g1 = this.vvoices;
					#line 63 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
					while (( _g < _g1.length )){
						#line 63 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						global::nx3.VVoice vvoice = ((global::nx3.VVoice) (_g1[_g]) );
						#line 63 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						 ++ _g;
						#line 65 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						{
							#line 65 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
							int _g2 = 0;
							#line 65 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
							global::Array<object> _g3 = vvoice.getVNotes();
							#line 65 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
							while (( _g2 < _g3.length )){
								#line 65 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
								global::nx3.VNote vnote = ((global::nx3.VNote) (_g3[_g2]) );
								#line 65 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
								 ++ _g2;
								#line 67 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
								global::haxe.lang.Null<int> npos = default(global::haxe.lang.Null<int>);
								#line 67 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
								{
									#line 67 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
									global::IMap<object, int> this1 = vvoice.getVNotePositions();
									#line 67 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
									npos = this1.@get(vnote);
								}
								
								#line 68 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
								if ( ! (positionsMap.exists(npos.@value)) ) {
									#line 68 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
									positionsMap.@set(npos.@value, new global::Array<object>(new object[]{}));
								}
								
								#line 69 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
								((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (positionsMap.@get(npos.@value).@value) ))) ).push(vnote);
							}
							
						}
						
					}
					
				}
				
				#line 72 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				return positionsMap;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				switch (hash){
					case 130086162:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						this.positionsMap = ((global::haxe.ds.IntMap<object>) (global::haxe.ds.IntMap<object>.__hx_cast<object>(((global::haxe.ds.IntMap) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return @value;
					}
					
					
					case 85583148:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						this.complexesPositions = ((global::haxe.ds.ObjectMap<object, int>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, int>(((global::haxe.ds.ObjectMap) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return @value;
					}
					
					
					case 1876545940:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						this.positionsComplexes = ((global::haxe.ds.IntMap<object>) (global::haxe.ds.IntMap<object>.__hx_cast<object>(((global::haxe.ds.IntMap) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return @value;
					}
					
					
					case 1329310366:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						this.complexes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return @value;
					}
					
					
					case 137270135:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						this.vvoices = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				switch (hash){
					case 1700422983:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcPositionsMap") ), ((int) (1700422983) ))) );
					}
					
					
					case 130086162:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return this.positionsMap;
					}
					
					
					case 245970761:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcComplexes") ), ((int) (245970761) ))) );
					}
					
					
					case 1681155938:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getComplexesPositions") ), ((int) (1681155938) ))) );
					}
					
					
					case 85583148:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return this.complexesPositions;
					}
					
					
					case 1324635082:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getPositionsComplexes") ), ((int) (1324635082) ))) );
					}
					
					
					case 1876545940:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return this.positionsComplexes;
					}
					
					
					case 1586644776:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getComplexes") ), ((int) (1586644776) ))) );
					}
					
					
					case 1329310366:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return this.complexes;
					}
					
					
					case 137270135:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return this.vvoices;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				switch (hash){
					case 1700422983:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return this.calcPositionsMap();
					}
					
					
					case 245970761:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						this.calcComplexes(((global::haxe.ds.IntMap<object>) (global::haxe.ds.IntMap<object>.__hx_cast<object>(((global::haxe.ds.IntMap) (dynargs[0]) ))) ));
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						break;
					}
					
					
					case 1681155938:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return this.getComplexesPositions();
					}
					
					
					case 1324635082:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return this.getPositionsComplexes();
					}
					
					
					case 1586644776:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return this.getComplexes();
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				baseArr.push("positionsMap");
				#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				baseArr.push("complexesPositions");
				#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				baseArr.push("positionsComplexes");
				#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				baseArr.push("complexes");
				#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				baseArr.push("vvoices");
				#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
				{
					#line 11 "F:\\nx3\\src\\nx3\\VPartComplexesGenerator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


