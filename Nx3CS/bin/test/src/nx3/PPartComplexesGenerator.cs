
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PPartComplexesGenerator : global::haxe.lang.HxObject {
		public    PPartComplexesGenerator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PPartComplexesGenerator(global::nx3.PPart part){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
				global::nx3.PPartComplexesGenerator.__hx_ctor_nx3_PPartComplexesGenerator(this, part);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PPartComplexesGenerator(global::nx3.PPartComplexesGenerator __temp_me112, global::nx3.PPart part){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
				__temp_me112.part = part;
				__temp_me112.vvoices = part.getVoices();
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
				return new global::nx3.PPartComplexesGenerator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
				return new global::nx3.PPartComplexesGenerator(((global::nx3.PPart) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.PPart part;
		
		public  global::Array<object> vvoices;
		
		public  global::Array<object> complexes;
		
		public virtual   global::Array<object> getComplexes(){
			unchecked {
				#line 28 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
				if (( this.complexes != default(global::Array<object>) )) {
					#line 28 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
					return this.complexes;
				}
				
				#line 29 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
				this.positionsMap = this.calcPositionsMap();
				this.calcComplexes(this.positionsMap);
				return this.complexes;
			}
			#line default
		}
		
		
		public virtual   void calcComplexes(global::haxe.ds.IntMap<object> positions){
			unchecked {
				#line 53 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
				this.complexes = new global::Array<object>(new object[]{});
				global::Array<int> poskeys = global::cx.MapTools.keysToArray<int>(positions.keys());
				poskeys = global::cx.MapTools.sortarray<int>(poskeys);
				{
					#line 56 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
					int _g = 0;
					#line 56 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
					while (( _g < poskeys.length )){
						#line 56 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						int pos = poskeys[_g];
						#line 56 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						 ++ _g;
						#line 58 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						global::Array<object> vnotes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (positions.@get(pos).@value) ))) );
						global::nx3.PComplex vcomplex = new global::nx3.PComplex(((global::nx3.PPart) (this.part) ), ((global::Array<object>) (vnotes) ), ((int) (pos) ));
						this.complexes.push(vcomplex);
					}
					
				}
				
			}
			#line default
		}
		
		
		public  global::haxe.ds.IntMap<object> positionsMap;
		
		public virtual   global::haxe.ds.IntMap<object> calcPositionsMap(){
			unchecked {
				#line 69 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
				global::haxe.ds.IntMap<object> positionsMap = new global::haxe.ds.IntMap<object>();
				{
					#line 70 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
					int _g = 0;
					#line 70 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
					global::Array<object> _g1 = this.vvoices;
					#line 70 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
					while (( _g < _g1.length )){
						#line 70 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						global::nx3.PVoice vvoice = ((global::nx3.PVoice) (_g1[_g]) );
						#line 70 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						 ++ _g;
						#line 72 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						{
							#line 72 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
							int _g2 = 0;
							#line 72 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
							global::Array<object> _g3 = vvoice.getNotes();
							#line 72 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
							while (( _g2 < _g3.length )){
								#line 72 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
								global::nx3.PNote vnote = ((global::nx3.PNote) (_g3[_g2]) );
								#line 72 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
								 ++ _g2;
								#line 74 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
								global::haxe.lang.Null<int> npos = default(global::haxe.lang.Null<int>);
								#line 74 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
								{
									#line 74 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
									global::IMap<object, int> this1 = vvoice.getNotePositions();
									#line 74 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
									npos = this1.@get(vnote);
								}
								
								#line 75 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
								if ( ! (positionsMap.exists(npos.@value)) ) {
									#line 75 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
									positionsMap.@set(npos.@value, new global::Array<object>(new object[]{}));
								}
								
								#line 76 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
								((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (positionsMap.@get(npos.@value).@value) ))) ).push(vnote);
							}
							
						}
						
					}
					
				}
				
				#line 79 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
				return positionsMap;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
				switch (hash){
					case 130086162:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						this.positionsMap = ((global::haxe.ds.IntMap<object>) (global::haxe.ds.IntMap<object>.__hx_cast<object>(((global::haxe.ds.IntMap) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						return @value;
					}
					
					
					case 1329310366:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						this.complexes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						return @value;
					}
					
					
					case 137270135:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						this.vvoices = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						return @value;
					}
					
					
					case 1246880755:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						this.part = ((global::nx3.PPart) (@value) );
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
				switch (hash){
					case 1700422983:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcPositionsMap") ), ((int) (1700422983) ))) );
					}
					
					
					case 130086162:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						return this.positionsMap;
					}
					
					
					case 245970761:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcComplexes") ), ((int) (245970761) ))) );
					}
					
					
					case 1586644776:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getComplexes") ), ((int) (1586644776) ))) );
					}
					
					
					case 1329310366:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						return this.complexes;
					}
					
					
					case 137270135:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						return this.vvoices;
					}
					
					
					case 1246880755:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						return this.part;
					}
					
					
					default:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
				switch (hash){
					case 1700422983:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						return this.calcPositionsMap();
					}
					
					
					case 245970761:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						this.calcComplexes(((global::haxe.ds.IntMap<object>) (global::haxe.ds.IntMap<object>.__hx_cast<object>(((global::haxe.ds.IntMap) (dynargs[0]) ))) ));
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						break;
					}
					
					
					case 1586644776:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						return this.getComplexes();
					}
					
					
					default:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
				baseArr.push("positionsMap");
				#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
				baseArr.push("complexes");
				#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
				baseArr.push("vvoices");
				#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
				baseArr.push("part");
				#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
				{
					#line 13 "F:\\nx3\\src\\nx3\\PPartComplexesGenerator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


