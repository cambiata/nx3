
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace haxe.ds{
	public  class IntMap<T> : global::haxe.lang.HxObject, global::haxe.ds.IntMap, global::IMap<int, T> {
		public    IntMap(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    IntMap(){
			unchecked {
				#line 52 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				global::haxe.ds.IntMap<object>.__hx_ctor_haxe_ds_IntMap<T>(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_haxe_ds_IntMap<T_c>(global::haxe.ds.IntMap<T_c> __temp_me44){
			unchecked {
				#line 54 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				__temp_me44.cachedIndex = -1;
			}
			#line default
		}
		
		
		public static   object __hx_cast<T_c_c>(global::haxe.ds.IntMap me){
			unchecked {
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				return ( (( me != default(global::haxe.ds.IntMap) )) ? (me.haxe_ds_IntMap_cast<T_c_c>()) : (default(global::haxe.ds.IntMap)) );
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				return new global::haxe.ds.IntMap<object>(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				return new global::haxe.ds.IntMap<object>();
			}
			#line default
		}
		
		
		public virtual   object haxe_ds_IntMap_cast<T_c>(){
			unchecked {
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				if (global::haxe.lang.Runtime.eq(typeof(T), typeof(T_c))) {
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					return this;
				}
				
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				global::haxe.ds.IntMap<T_c> new_me = new global::haxe.ds.IntMap<T_c>(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					object __temp_iterator162 = global::Reflect.fields(this).iterator();
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator162, "hasNext", 407283053, default(global::Array)))){
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						string field = global::haxe.lang.Runtime.toString(global::haxe.lang.Runtime.callField(__temp_iterator162, "next", 1224901875, default(global::Array)));
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						switch (field){
							case "vals":
							{
								#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
								if (( this.vals != default(T[]) )) {
									#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
									T_c[] __temp_new_arr41 = new T_c[((int) (this.vals.Length) )];
									#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
									int __temp_i42 = -1;
									#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
									while ((  ++ __temp_i42 < this.vals.Length )){
										#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
										object __temp_obj43 = ((object) (this.vals[__temp_i42]) );
										#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
										if ( ! (global::haxe.lang.Runtime.eq(__temp_obj43, default(T[]))) ) {
											#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
											__temp_new_arr41[__temp_i42] = global::haxe.lang.Runtime.genericCast<T_c>(__temp_obj43);
										}
										
									}
									
									#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
									new_me.vals = __temp_new_arr41;
								}
								 else {
									#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
									new_me.vals = default(T_c[]);
								}
								
								#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
								break;
							}
							
							
							default:
							{
								#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
								global::Reflect.setField(new_me, field, ((object) (global::Reflect.field(this, field)) ));
								#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
								break;
							}
							
						}
						
					}
					
				}
				
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				return new_me;
			}
			#line default
		}
		
		
		public virtual   object IMap_cast<K_c, V_c>(){
			unchecked {
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				return this.haxe_ds_IntMap_cast<V_c>();
			}
			#line default
		}
		
		
		public  int[] flags;
		
		public  int[] _keys;
		
		public  T[] vals;
		
		public  int nBuckets;
		
		public  int size;
		
		public  int nOccupied;
		
		public  int upperBound;
		
		public  int cachedKey;
		
		public  int cachedIndex;
		
		public virtual   void @set(int key, T @value){
			unchecked {
				#line 59 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				int x = default(int);
				if (( this.nOccupied >= this.upperBound )) {
					#line 62 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					if (( this.nBuckets > ( this.size << 1 ) )) {
						#line 63 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this.resize(( this.nBuckets - 1 ));
					}
					 else {
						#line 65 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this.resize(( this.nBuckets + 1 ));
					}
					
				}
				
				#line 68 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				int[] flags = this.flags;
				#line 68 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				int[] _keys = this._keys;
				{
					#line 70 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					int mask = ( this.nBuckets - 1 );
					int site = x = this.nBuckets;
					int k = key;
					int i = ( k & mask );
					#line 76 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					if (( (( ((int) (( ((uint) (flags[( i >> 4 )]) ) >> (( (( i & 15 )) << 1 )) )) ) & 2 )) != 0 )) {
						#line 77 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						x = i;
					}
					 else {
						#line 79 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						int inc = ( (( ( ( k >> 3 ) ^ ( k << 3 ) ) | 1 )) & mask );
						int last = i;
						while ( ! ((( ( (( ((int) (( ((uint) (flags[( i >> 4 )]) ) >> (( (( i & 15 )) << 1 )) )) ) & 3 )) != 0 ) || ( _keys[i] == key ) ))) ){
							#line 83 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
							i = ( ( i + inc ) & mask );
						}
						
						#line 91 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						x = i;
					}
					
				}
				
				#line 95 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				if (( (( ((int) (( ((uint) (flags[( x >> 4 )]) ) >> (( (( x & 15 )) << 1 )) )) ) & 2 )) != 0 )) {
					#line 97 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					_keys[x] = key;
					this.vals[x] = @value;
					flags[( x >> 4 )] &=  ~ ((( 3 << (( (( x & 15 )) << 1 )) ))) ;
					this.size++;
					this.nOccupied++;
				}
				 else {
					#line 102 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					if (( (( ((int) (( ((uint) (flags[( x >> 4 )]) ) >> (( (( x & 15 )) << 1 )) )) ) & 1 )) != 0 )) {
						#line 103 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						_keys[x] = key;
						this.vals[x] = @value;
						flags[( x >> 4 )] &=  ~ ((( 3 << (( (( x & 15 )) << 1 )) ))) ;
						this.size++;
					}
					 else {
						#line 109 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this.vals[x] = @value;
					}
					
				}
				
			}
			#line default
		}
		
		
		public   int lookup(int key){
			unchecked {
				#line 115 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				if (( this.nBuckets != 0 )) {
					#line 117 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					int[] flags = this.flags;
					#line 117 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					int[] _keys = this._keys;
					#line 119 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					int mask = ( this.nBuckets - 1 );
					#line 119 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					int k = key;
					int i = ( k & mask );
					int inc = ( (( ( ( k >> 3 ) ^ ( k << 3 ) ) | 1 )) & mask );
					int last = i;
					while ((  ! ((( (( ((int) (( ((uint) (flags[( i >> 4 )]) ) >> (( (( i & 15 )) << 1 )) )) ) & 2 )) != 0 )))  && (( ( (( ((int) (( ((uint) (flags[( i >> 4 )]) ) >> (( (( i & 15 )) << 1 )) )) ) & 1 )) != 0 ) || ( _keys[i] != key ) )) )){
						#line 125 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						i = ( ( i + inc ) & mask );
						if (( i == last )) {
							#line 127 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
							return -1;
						}
						
					}
					
					#line 129 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					if (( (( ((int) (( ((uint) (flags[( i >> 4 )]) ) >> (( (( i & 15 )) << 1 )) )) ) & 3 )) != 0 )) {
						#line 129 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return -1;
					}
					 else {
						#line 129 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return i;
					}
					
				}
				
				#line 132 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				return -1;
			}
			#line default
		}
		
		
		public virtual   global::haxe.lang.Null<T> @get(int key){
			unchecked {
				#line 137 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				int idx = -1;
				if (( ( this.cachedKey == key ) && ( (idx = this.cachedIndex) != -1 ) )) {
					#line 140 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					return new global::haxe.lang.Null<T>(this.vals[idx], true);
				}
				
				#line 143 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				idx = this.lookup(key);
				if (( idx != -1 )) {
					#line 146 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					this.cachedKey = key;
					this.cachedIndex = idx;
					#line 149 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					return new global::haxe.lang.Null<T>(this.vals[idx], true);
				}
				
				#line 152 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				return default(global::haxe.lang.Null<T>);
			}
			#line default
		}
		
		
		public virtual   bool exists(int key){
			unchecked {
				#line 177 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				int idx = -1;
				if (( ( this.cachedKey == key ) && ( (idx = this.cachedIndex) != -1 ) )) {
					#line 180 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					return true;
				}
				
				#line 183 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				idx = this.lookup(key);
				if (( idx != -1 )) {
					#line 186 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					this.cachedKey = key;
					this.cachedIndex = idx;
					#line 189 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					return true;
				}
				
				#line 192 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				return false;
			}
			#line default
		}
		
		
		public   void resize(int newNBuckets){
			unchecked {
				#line 226 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				int[] newFlags = default(int[]);
				int j = 1;
				{
					#line 229 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					{
						#line 229 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						int x = newNBuckets;
						#line 229 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						 -- x;
						#line 229 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						x |= ((int) (( ((uint) (x) ) >> 1 )) );
						#line 229 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						x |= ((int) (( ((uint) (x) ) >> 2 )) );
						#line 229 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						x |= ((int) (( ((uint) (x) ) >> 4 )) );
						#line 229 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						x |= ((int) (( ((uint) (x) ) >> 8 )) );
						#line 229 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						x |= ((int) (( ((uint) (x) ) >> 16 )) );
						#line 229 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						newNBuckets =  ++ x;
					}
					
					#line 230 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					if (( newNBuckets < 4 )) {
						#line 230 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						newNBuckets = 4;
					}
					
					#line 231 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					if (( this.size >= ( ( newNBuckets * 0.7 ) + 0.5 ) )) {
						#line 233 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						j = 0;
					}
					 else {
						#line 235 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						int nfSize = default(int);
						#line 235 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						if (( newNBuckets < 16 )) {
							#line 235 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
							nfSize = 1;
						}
						 else {
							#line 235 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
							nfSize = ( newNBuckets >> 4 );
						}
						
						#line 236 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						newFlags = new int[((int) (nfSize) )];
						{
							#line 237 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
							int _g = 0;
							#line 237 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
							while (( _g < ((int) (nfSize) ) )){
								#line 237 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
								int i = _g++;
								newFlags[i] = -1431655766;
							}
							
						}
						
						#line 239 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						if (( this.nBuckets < newNBuckets )) {
							#line 241 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
							int[] k = new int[((int) (newNBuckets) )];
							if (( this._keys != default(int[]) )) {
								#line 243 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
								global::System.Array.Copy(((global::System.Array) (this._keys) ), ((int) (0) ), ((global::System.Array) (k) ), ((int) (0) ), ((int) (this.nBuckets) ));
							}
							
							#line 244 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
							this._keys = k;
							#line 246 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
							T[] v = new T[((int) (newNBuckets) )];
							if (( this.vals != default(T[]) )) {
								#line 248 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
								global::System.Array.Copy(((global::System.Array) (this.vals) ), ((int) (0) ), ((global::System.Array) (v) ), ((int) (0) ), ((int) (this.nBuckets) ));
							}
							
							#line 249 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
							this.vals = v;
						}
						
					}
					
				}
				
				#line 254 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				if (( j != 0 )) {
					#line 257 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					this.cachedKey = 0;
					this.cachedIndex = -1;
					#line 260 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					j = -1;
					int nBuckets = this.nBuckets;
					#line 261 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					int[] _keys = this._keys;
					#line 261 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					T[] vals = this.vals;
					#line 261 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					int[] flags = this.flags;
					#line 263 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					int newMask = ( newNBuckets - 1 );
					while ((  ++ j < nBuckets )){
						#line 266 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						if ( ! ((( (( ((int) (( ((uint) (flags[( j >> 4 )]) ) >> (( (( j & 15 )) << 1 )) )) ) & 3 )) != 0 ))) ) {
							#line 268 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
							int key = _keys[j];
							T val = vals[j];
							#line 271 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
							flags[( j >> 4 )] |= ( 1 << (( (( j & 15 )) << 1 )) );
							while (true){
								#line 274 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
								int k1 = key;
								int inc = ( (( ( ( k1 >> 3 ) ^ ( k1 << 3 ) ) | 1 )) & newMask );
								int i1 = ( k1 & newMask );
								while ( ! ((( (( ((int) (( ((uint) (newFlags[( i1 >> 4 )]) ) >> (( (( i1 & 15 )) << 1 )) )) ) & 2 )) != 0 ))) ){
									#line 278 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
									i1 = ( ( i1 + inc ) & newMask );
								}
								
								#line 279 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
								newFlags[( i1 >> 4 )] &=  ~ ((( 2 << (( (( i1 & 15 )) << 1 )) ))) ;
								#line 281 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
								if (( ( i1 < nBuckets ) &&  ! ((( (( ((int) (( ((uint) (flags[( i1 >> 4 )]) ) >> (( (( i1 & 15 )) << 1 )) )) ) & 3 )) != 0 )))  )) {
									#line 283 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
									{
										#line 284 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
										int tmp = _keys[i1];
										_keys[i1] = key;
										key = tmp;
									}
									
									#line 288 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
									{
										#line 289 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
										T tmp1 = vals[i1];
										vals[i1] = val;
										val = tmp1;
									}
									
									#line 294 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
									flags[( i1 >> 4 )] |= ( 1 << (( (( i1 & 15 )) << 1 )) );
								}
								 else {
									#line 296 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
									_keys[i1] = key;
									vals[i1] = val;
									break;
								}
								
							}
							
						}
						
					}
					
					#line 304 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					if (( nBuckets > newNBuckets )) {
						#line 306 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						{
							#line 307 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
							int[] k2 = new int[((int) (newNBuckets) )];
							global::System.Array.Copy(((global::System.Array) (_keys) ), ((int) (0) ), ((global::System.Array) (k2) ), ((int) (0) ), ((int) (newNBuckets) ));
							this._keys = k2;
						}
						
						#line 311 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						{
							#line 312 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
							T[] v1 = new T[((int) (newNBuckets) )];
							global::System.Array.Copy(((global::System.Array) (vals) ), ((int) (0) ), ((global::System.Array) (v1) ), ((int) (0) ), ((int) (newNBuckets) ));
							this.vals = v1;
						}
						
					}
					
					#line 318 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					this.flags = newFlags;
					this.nBuckets = newNBuckets;
					this.nOccupied = this.size;
					this.upperBound = ((int) (( ( newNBuckets * 0.7 ) + .5 )) );
				}
				
			}
			#line default
		}
		
		
		public virtual   object keys(){
			unchecked {
				#line 329 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				global::Array<object> _g1 = new global::Array<object>(new object[]{this});
				#line 331 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				global::Array<int> i = new global::Array<int>(new int[]{0});
				global::Array<int> len = new global::Array<int>(new int[]{this.nBuckets});
				{
					#line 334 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					global::haxe.lang.Function __temp_odecl187 = new global::haxe.ds.IntMap_keys_334__Fun<T>(((global::Array<int>) (i) ), ((global::Array<int>) (len) ), ((global::Array<object>) (_g1) ));
					#line 345 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					global::haxe.lang.Function __temp_odecl188 = new global::haxe.ds.IntMap_keys_345__Fun<T>(((global::Array<int>) (i) ), ((global::Array<object>) (_g1) ));
					#line 333 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					return new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{407283053, 1224901875}), new global::Array<object>(new object[]{__temp_odecl187, __temp_odecl188}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{}));
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				switch (hash){
					case 922671056:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this.cachedIndex = ((int) (@value) );
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return @value;
					}
					
					
					case 1395555037:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this.cachedKey = ((int) (@value) );
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return @value;
					}
					
					
					case 2022294396:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this.upperBound = ((int) (@value) );
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return @value;
					}
					
					
					case 480756972:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this.nOccupied = ((int) (@value) );
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return @value;
					}
					
					
					case 1280549057:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this.size = ((int) (@value) );
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return @value;
					}
					
					
					case 1537812987:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this.nBuckets = ((int) (@value) );
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return @value;
					}
					
					
					default:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				switch (hash){
					case 922671056:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this.cachedIndex = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return @value;
					}
					
					
					case 1395555037:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this.cachedKey = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return @value;
					}
					
					
					case 2022294396:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this.upperBound = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return @value;
					}
					
					
					case 480756972:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this.nOccupied = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return @value;
					}
					
					
					case 1280549057:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this.size = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return @value;
					}
					
					
					case 1537812987:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this.nBuckets = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return @value;
					}
					
					
					case 1313416818:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this.vals = ((T[]) (@value) );
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return @value;
					}
					
					
					case 2048392659:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this._keys = ((int[]) (@value) );
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return @value;
					}
					
					
					case 42740551:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this.flags = ((int[]) (@value) );
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return @value;
					}
					
					
					default:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				switch (hash){
					case 1191633396:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("keys") ), ((int) (1191633396) ))) );
					}
					
					
					case 142301684:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("resize") ), ((int) (142301684) ))) );
					}
					
					
					case 1071652316:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("exists") ), ((int) (1071652316) ))) );
					}
					
					
					case 5144726:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get") ), ((int) (5144726) ))) );
					}
					
					
					case 1639293562:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("lookup") ), ((int) (1639293562) ))) );
					}
					
					
					case 5741474:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("set") ), ((int) (5741474) ))) );
					}
					
					
					case 922671056:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return this.cachedIndex;
					}
					
					
					case 1395555037:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return this.cachedKey;
					}
					
					
					case 2022294396:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return this.upperBound;
					}
					
					
					case 480756972:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return this.nOccupied;
					}
					
					
					case 1280549057:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return this.size;
					}
					
					
					case 1537812987:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return this.nBuckets;
					}
					
					
					case 1313416818:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return this.vals;
					}
					
					
					case 2048392659:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return this._keys;
					}
					
					
					case 42740551:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return this.flags;
					}
					
					
					default:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				switch (hash){
					case 922671056:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return ((double) (this.cachedIndex) );
					}
					
					
					case 1395555037:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return ((double) (this.cachedKey) );
					}
					
					
					case 2022294396:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return ((double) (this.upperBound) );
					}
					
					
					case 480756972:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return ((double) (this.nOccupied) );
					}
					
					
					case 1280549057:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return ((double) (this.size) );
					}
					
					
					case 1537812987:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return ((double) (this.nBuckets) );
					}
					
					
					default:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				switch (hash){
					case 1191633396:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return this.keys();
					}
					
					
					case 142301684:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this.resize(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ));
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						break;
					}
					
					
					case 1071652316:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return this.exists(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ));
					}
					
					
					case 5144726:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return (this.@get(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ))).toDynamic();
					}
					
					
					case 1639293562:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return this.lookup(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ));
					}
					
					
					case 5741474:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						this.@set(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ), global::haxe.lang.Runtime.genericCast<T>(dynargs[1]));
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						break;
					}
					
					
					default:
					{
						#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				baseArr.push("cachedIndex");
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				baseArr.push("cachedKey");
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				baseArr.push("upperBound");
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				baseArr.push("nOccupied");
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				baseArr.push("size");
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				baseArr.push("nBuckets");
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				baseArr.push("vals");
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				baseArr.push("_keys");
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				baseArr.push("flags");
				#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				{
					#line 36 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace haxe.ds{
	public  class IntMap_keys_334__Fun<T> : global::haxe.lang.Function {
		public    IntMap_keys_334__Fun(global::Array<int> i, global::Array<int> len, global::Array<object> _g1) : base(0, 0){
			unchecked {
				#line 334 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				this.i = i;
				#line 334 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				this.len = len;
				#line 334 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				this._g1 = _g1;
			}
			#line default
		}
		
		
		public override   object __hx_invoke0_o(){
			unchecked {
				#line 335 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				{
					#line 335 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					int _g = this.i[0];
					#line 335 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
					while (( _g < ((int) (this.len[0]) ) )){
						#line 335 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						int j = _g++;
						#line 337 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
						if ( ! ((( (( ((int) (( ((uint) (((global::haxe.ds.IntMap<T>) (global::haxe.ds.IntMap<object>.__hx_cast<T>(((global::haxe.ds.IntMap) (this._g1[0]) ))) ).flags[( j >> 4 )]) ) >> (( (( j & 15 )) << 1 )) )) ) & 3 )) != 0 ))) ) {
							#line 339 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
							this.i[0] = j;
							return true;
						}
						
					}
					
				}
				
				#line 343 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				return false;
			}
			#line default
		}
		
		
		public  global::Array<int> i;
		
		public  global::Array<int> len;
		
		public  global::Array<object> _g1;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace haxe.ds{
	public  class IntMap_keys_345__Fun<T> : global::haxe.lang.Function {
		public    IntMap_keys_345__Fun(global::Array<int> i, global::Array<object> _g1) : base(0, 1){
			unchecked {
				#line 345 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				this.i = i;
				#line 345 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				this._g1 = _g1;
			}
			#line default
		}
		
		
		public override   double __hx_invoke0_f(){
			unchecked {
				#line 346 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				int ret = ((global::haxe.ds.IntMap<T>) (global::haxe.ds.IntMap<object>.__hx_cast<T>(((global::haxe.ds.IntMap) (this._g1[0]) ))) )._keys[this.i[0]];
				((global::haxe.ds.IntMap<T>) (global::haxe.ds.IntMap<object>.__hx_cast<T>(((global::haxe.ds.IntMap) (this._g1[0]) ))) ).cachedIndex = this.i[0];
				((global::haxe.ds.IntMap<T>) (global::haxe.ds.IntMap<object>.__hx_cast<T>(((global::haxe.ds.IntMap) (this._g1[0]) ))) ).cachedKey = ret;
				#line 350 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\IntMap.hx"
				this.i[0] = ( this.i[0] + 1 );
				return ((double) (ret) );
			}
			#line default
		}
		
		
		public  global::Array<int> i;
		
		public  global::Array<object> _g1;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace haxe.ds{
	public  interface IntMap : global::haxe.lang.IHxObject, global::haxe.lang.IGenericObject {
		   object haxe_ds_IntMap_cast<T_c>();
		
	}
}


