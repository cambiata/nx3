
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace haxe.ds{
	public  class ObjectMap<K, V> : global::haxe.lang.HxObject, global::haxe.ds.ObjectMap, global::IMap<K, V> {
		public    ObjectMap(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    ObjectMap(){
			unchecked {
				#line 59 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				global::haxe.ds.ObjectMap<object, object>.__hx_ctor_haxe_ds_ObjectMap<K, V>(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_haxe_ds_ObjectMap<K_c, V_c>(global::haxe.ds.ObjectMap<K_c, V_c> __temp_me53){
			unchecked {
				#line 61 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				__temp_me53.cachedIndex = -1;
			}
			#line default
		}
		
		
		public static   object __hx_cast<K_c_c, V_c_c>(global::haxe.ds.ObjectMap me){
			unchecked {
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				return ( (( me != default(global::haxe.ds.ObjectMap) )) ? (me.haxe_ds_ObjectMap_cast<K_c_c, V_c_c>()) : (default(global::haxe.ds.ObjectMap)) );
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				return new global::haxe.ds.ObjectMap<object, object>(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				return new global::haxe.ds.ObjectMap<object, object>();
			}
			#line default
		}
		
		
		public virtual   object haxe_ds_ObjectMap_cast<K_c, V_c>(){
			unchecked {
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				if (( global::haxe.lang.Runtime.eq(typeof(K), typeof(K_c)) && global::haxe.lang.Runtime.eq(typeof(V), typeof(V_c)) )) {
					#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					return this;
				}
				
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				global::haxe.ds.ObjectMap<K_c, V_c> new_me = new global::haxe.ds.ObjectMap<K_c, V_c>(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				{
					#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					object __temp_iterator158 = global::Reflect.fields(this).iterator();
					#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator158, "hasNext", 407283053, default(global::Array)))){
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						string field = global::haxe.lang.Runtime.toString(global::haxe.lang.Runtime.callField(__temp_iterator158, "next", 1224901875, default(global::Array)));
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						switch (field){
							case "vals":
							{
								#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								if (( this.vals != default(V[]) )) {
									#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
									V_c[] __temp_new_arr47 = new V_c[((int) (this.vals.Length) )];
									#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
									int __temp_i48 = -1;
									#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
									while ((  ++ __temp_i48 < this.vals.Length )){
										#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
										object __temp_obj49 = ((object) (this.vals[__temp_i48]) );
										#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
										if ( ! (global::haxe.lang.Runtime.eq(__temp_obj49, default(V[]))) ) {
											#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
											__temp_new_arr47[__temp_i48] = global::haxe.lang.Runtime.genericCast<V_c>(__temp_obj49);
										}
										
									}
									
									#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
									new_me.vals = __temp_new_arr47;
								}
								 else {
									#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
									new_me.vals = default(V_c[]);
								}
								
								#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								break;
							}
							
							
							case "_keys":
							{
								#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								if (( this._keys != default(K[]) )) {
									#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
									K_c[] __temp_new_arr50 = new K_c[((int) (this._keys.Length) )];
									#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
									int __temp_i51 = -1;
									#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
									while ((  ++ __temp_i51 < this._keys.Length )){
										#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
										object __temp_obj52 = ((object) (this._keys[__temp_i51]) );
										#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
										if ( ! (global::haxe.lang.Runtime.eq(__temp_obj52, default(K[]))) ) {
											#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
											__temp_new_arr50[__temp_i51] = global::haxe.lang.Runtime.genericCast<K_c>(__temp_obj52);
										}
										
									}
									
									#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
									new_me._keys = __temp_new_arr50;
								}
								 else {
									#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
									new_me._keys = default(K_c[]);
								}
								
								#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								break;
							}
							
							
							default:
							{
								#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								global::Reflect.setField(new_me, field, ((object) (global::Reflect.field(this, field)) ));
								#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								break;
							}
							
						}
						
					}
					
				}
				
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				return new_me;
			}
			#line default
		}
		
		
		public virtual   object IMap_cast<K_c, V_c>(){
			unchecked {
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				return this.haxe_ds_ObjectMap_cast<K_c, V_c>();
			}
			#line default
		}
		
		
		public  int[] hashes;
		
		public  K[] _keys;
		
		public  V[] vals;
		
		public  int nBuckets;
		
		public  int size;
		
		public  int nOccupied;
		
		public  int upperBound;
		
		public  K cachedKey;
		
		public  int cachedIndex;
		
		public virtual   void @set(K key, V @value){
			unchecked {
				#line 66 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				int x = default(int);
				#line 66 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				int k = default(int);
				if (( this.nOccupied >= this.upperBound )) {
					#line 69 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					if (( this.nBuckets > ( this.size << 1 ) )) {
						#line 70 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this.resize(( this.nBuckets - 1 ));
					}
					 else {
						#line 72 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this.resize(( this.nBuckets + 2 ));
					}
					
				}
				
				#line 75 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				int[] hashes = this.hashes;
				#line 75 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				K[] keys = this._keys;
				#line 75 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				int[] hashes1 = hashes;
				{
					#line 77 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					int mask = default(int);
					#line 77 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					if (( this.nBuckets == 0 )) {
						#line 77 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						mask = 0;
					}
					 else {
						#line 77 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						mask = ( this.nBuckets - 1 );
					}
					
					#line 78 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					int site = x = this.nBuckets;
					{
						#line 79 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						int k1 = key.GetHashCode();
						#line 79 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						k1 = ( ( k1 + 2127912214 ) + (( k1 << 12 )) );
						#line 79 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						k1 = ( ( k1 ^ -949894596 ) ^ ( k1 >> 19 ) );
						#line 79 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						k1 = ( ( k1 + 374761393 ) + (( k1 << 5 )) );
						#line 79 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						k1 = ( ( k1 + -744332180 ) ^ ( k1 << 9 ) );
						#line 79 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						k1 = ( ( k1 + -42973499 ) + (( k1 << 3 )) );
						#line 79 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						k1 = ( ( k1 ^ -1252372727 ) ^ ( k1 >> 16 ) );
						#line 79 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						int ret = k1;
						#line 79 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						if (( (( ret & -2 )) == 0 )) {
							#line 79 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							if (( ret == 0 )) {
								#line 79 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								ret = 2;
							}
							 else {
								#line 79 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								ret = -1;
							}
							
						}
						
						#line 79 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						k = ret;
					}
					
					#line 80 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					int i = ( k & mask );
					#line 80 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					int nProbes = 0;
					#line 83 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					if (( (( hashes1[i] & -2 )) == 0 )) {
						#line 84 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						x = i;
					}
					 else {
						#line 87 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						int last = i;
						#line 87 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						int flag = default(int);
						do {
							#line 88 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							bool __temp_stmt183 = default(bool);
							#line 88 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							{
								#line 88 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								int v = flag = hashes1[i];
								#line 88 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								__temp_stmt183 = ( (( v & -2 )) == 0 );
							}
							
							#line 88 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							bool __temp_boolv184 = false;
							#line 88 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							if ( ! (__temp_stmt183) ) {
								#line 88 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								__temp_boolv184 = ( ( flag == k ) && global::haxe.lang.Runtime.eq(this._keys[i], key) );
							}
							
							#line 88 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							bool __temp_stmt182 = ( __temp_stmt183 || __temp_boolv184 );
							#line 90 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							if ( ! ((__temp_stmt182)) ) {
								#line 90 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								i = ( ( i +  ++ nProbes ) & mask );
							}
							 else {
								#line 90 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								break;
							}
							
						}
						while (true);
						#line 97 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						x = i;
					}
					
				}
				
				#line 107 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				int flag1 = hashes1[x];
				if (( flag1 == 0 )) {
					#line 110 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					keys[x] = key;
					this.vals[x] = @value;
					hashes1[x] = k;
					this.size++;
					this.nOccupied++;
				}
				 else {
					#line 115 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					if (( flag1 == 1 )) {
						#line 116 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						keys[x] = key;
						this.vals[x] = @value;
						hashes1[x] = k;
						this.size++;
					}
					 else {
						#line 122 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this.vals[x] = @value;
					}
					
				}
				
				#line 125 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				this.cachedIndex = x;
				this.cachedKey = key;
			}
			#line default
		}
		
		
		public   int lookup(K key){
			unchecked {
				#line 131 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				if (( this.nBuckets != 0 )) {
					#line 133 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					int[] hashes = this.hashes;
					#line 133 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					K[] keys = this._keys;
					#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					int mask = ( this.nBuckets - 1 );
					#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					int hash = default(int);
					#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					{
						#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						int k = key.GetHashCode();
						#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						k = ( ( k + 2127912214 ) + (( k << 12 )) );
						#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						k = ( ( k ^ -949894596 ) ^ ( k >> 19 ) );
						#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						k = ( ( k + 374761393 ) + (( k << 5 )) );
						#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						k = ( ( k + -744332180 ) ^ ( k << 9 ) );
						#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						k = ( ( k + -42973499 ) + (( k << 3 )) );
						#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						k = ( ( k ^ -1252372727 ) ^ ( k >> 16 ) );
						#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						int ret = k;
						#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						if (( (( ret & -2 )) == 0 )) {
							#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							if (( ret == 0 )) {
								#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								ret = 2;
							}
							 else {
								#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								ret = -1;
							}
							
						}
						
						#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						hash = ret;
					}
					
					#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					int k1 = hash;
					#line 135 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					int nProbes = 0;
					int i = ( k1 & mask );
					int last = i;
					#line 137 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					int flag = default(int);
					#line 139 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					do {
						#line 139 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						bool __temp_stmt188 = default(bool);
						#line 139 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						{
							#line 139 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							int v = flag = hashes[i];
							#line 139 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							__temp_stmt188 = ( v == 0 );
						}
						
						#line 139 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						bool __temp_boolv187 =  ! (__temp_stmt188) ;
						#line 139 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						bool __temp_boolv186 = false;
						#line 139 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						if (__temp_boolv187) {
							#line 139 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							__temp_boolv186 = (( ( ( flag == 1 ) || ( flag != k1 ) ) || ( ! (global::haxe.lang.Runtime.eq(keys[i], key)) ) ));
						}
						
						#line 139 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						bool __temp_stmt185 = ( __temp_boolv187 && __temp_boolv186 );
						#line 141 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						if (__temp_stmt185) {
							#line 141 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							i = ( ( i +  ++ nProbes ) & mask );
						}
						 else {
							#line 141 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							break;
						}
						
					}
					while (true);
					#line 154 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					if (( (( flag & -2 )) == 0 )) {
						#line 154 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return -1;
					}
					 else {
						#line 154 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return i;
					}
					
				}
				
				#line 157 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				return -1;
			}
			#line default
		}
		
		
		public   void resize(int newNBuckets){
			unchecked {
				#line 163 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				int[] newHash = default(int[]);
				int j = 1;
				{
					#line 166 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					{
						#line 166 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						int x = newNBuckets;
						#line 166 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						 -- x;
						#line 166 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						x |= ((int) (( ((uint) (x) ) >> 1 )) );
						#line 166 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						x |= ((int) (( ((uint) (x) ) >> 2 )) );
						#line 166 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						x |= ((int) (( ((uint) (x) ) >> 4 )) );
						#line 166 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						x |= ((int) (( ((uint) (x) ) >> 8 )) );
						#line 166 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						x |= ((int) (( ((uint) (x) ) >> 16 )) );
						#line 166 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						newNBuckets =  ++ x;
					}
					
					#line 167 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					if (( newNBuckets < 4 )) {
						#line 167 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						newNBuckets = 4;
					}
					
					#line 168 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					if (( this.size >= ( ( newNBuckets * 0.77 ) + 0.5 ) )) {
						#line 170 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						j = 0;
					}
					 else {
						#line 172 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						int nfSize = newNBuckets;
						newHash = new int[((int) (nfSize) )];
						if (( this.nBuckets < newNBuckets )) {
							#line 176 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							K[] k = new K[((int) (newNBuckets) )];
							if (( this._keys != default(K[]) )) {
								#line 178 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								global::System.Array.Copy(((global::System.Array) (this._keys) ), ((int) (0) ), ((global::System.Array) (k) ), ((int) (0) ), ((int) (this.nBuckets) ));
							}
							
							#line 179 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							this._keys = k;
							#line 181 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							V[] v = new V[((int) (newNBuckets) )];
							if (( this.vals != default(V[]) )) {
								#line 183 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								global::System.Array.Copy(((global::System.Array) (this.vals) ), ((int) (0) ), ((global::System.Array) (v) ), ((int) (0) ), ((int) (this.nBuckets) ));
							}
							
							#line 184 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							this.vals = v;
						}
						
					}
					
				}
				
				#line 189 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				if (( j != 0 )) {
					#line 192 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					this.cachedKey = default(K);
					this.cachedIndex = -1;
					#line 195 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					j = -1;
					int nBuckets = this.nBuckets;
					#line 196 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					K[] _keys = this._keys;
					#line 196 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					V[] vals = this.vals;
					#line 196 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					int[] hashes = this.hashes;
					#line 198 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					int newMask = ( newNBuckets - 1 );
					while ((  ++ j < nBuckets )){
						#line 201 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						int k1 = default(int);
						bool __temp_stmt189 = default(bool);
						#line 202 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						{
							#line 202 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							int v1 = k1 = hashes[j];
							#line 202 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							__temp_stmt189 = ( (( v1 & -2 )) == 0 );
						}
						
						#line 202 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						if ( ! (__temp_stmt189) ) {
							#line 204 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							K key = _keys[j];
							V val = vals[j];
							#line 207 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							hashes[j] = 1;
							while (true){
								#line 210 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								int nProbes = 0;
								#line 212 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								int i = ( k1 & newMask );
								#line 214 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								while ( ! ((( newHash[i] == 0 ))) ){
									#line 215 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
									i = ( ( i +  ++ nProbes ) & newMask );
								}
								
								#line 217 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								newHash[i] = k1;
								#line 219 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								bool __temp_boolv192 = ( i < nBuckets );
								#line 219 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								bool __temp_boolv191 = false;
								#line 219 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								if (__temp_boolv192) {
									#line 219 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
									bool __temp_stmt193 = default(bool);
									#line 219 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
									{
										#line 219 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
										int v2 = k1 = hashes[i];
										#line 219 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
										__temp_stmt193 = ( (( v2 & -2 )) == 0 );
									}
									
									#line 219 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
									__temp_boolv191 =  ! (__temp_stmt193) ;
								}
								
								#line 219 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								bool __temp_stmt190 = ( __temp_boolv192 && __temp_boolv191 );
								#line 219 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
								if (__temp_stmt190) {
									#line 221 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
									{
										#line 222 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
										K tmp = _keys[i];
										_keys[i] = key;
										key = tmp;
									}
									
									#line 226 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
									{
										#line 227 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
										V tmp1 = vals[i];
										vals[i] = val;
										val = tmp1;
									}
									
									#line 232 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
									hashes[i] = 1;
								}
								 else {
									#line 234 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
									_keys[i] = key;
									vals[i] = val;
									break;
								}
								
							}
							
						}
						
					}
					
					#line 242 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					if (( nBuckets > newNBuckets )) {
						#line 244 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						{
							#line 245 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							K[] k2 = new K[((int) (newNBuckets) )];
							global::System.Array.Copy(((global::System.Array) (_keys) ), ((int) (0) ), ((global::System.Array) (k2) ), ((int) (0) ), ((int) (newNBuckets) ));
							this._keys = k2;
						}
						
						#line 249 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						{
							#line 250 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
							V[] v3 = new V[((int) (newNBuckets) )];
							global::System.Array.Copy(((global::System.Array) (vals) ), ((int) (0) ), ((global::System.Array) (v3) ), ((int) (0) ), ((int) (newNBuckets) ));
							this.vals = v3;
						}
						
					}
					
					#line 256 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					this.hashes = newHash;
					this.nBuckets = newNBuckets;
					this.nOccupied = this.size;
					this.upperBound = ((int) (( ( newNBuckets * 0.77 ) + .5 )) );
				}
				
			}
			#line default
		}
		
		
		public virtual   global::haxe.lang.Null<V> @get(K key){
			unchecked {
				#line 265 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				int idx = -1;
				if (( global::haxe.lang.Runtime.eq(this.cachedKey, key) && ( (idx = this.cachedIndex) != -1 ) )) {
					#line 268 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					return new global::haxe.lang.Null<V>(this.vals[idx], true);
				}
				
				#line 271 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				idx = this.lookup(key);
				if (( idx != -1 )) {
					#line 274 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					this.cachedKey = key;
					this.cachedIndex = idx;
					#line 277 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					return new global::haxe.lang.Null<V>(this.vals[idx], true);
				}
				
				#line 280 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				return default(global::haxe.lang.Null<V>);
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				switch (hash){
					case 922671056:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this.cachedIndex = ((int) (@value) );
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return @value;
					}
					
					
					case 1395555037:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this.cachedKey = global::haxe.lang.Runtime.genericCast<K>(((object) (@value) ));
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return ((double) (global::haxe.lang.Runtime.toDouble(((object) (@value) ))) );
					}
					
					
					case 2022294396:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this.upperBound = ((int) (@value) );
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return @value;
					}
					
					
					case 480756972:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this.nOccupied = ((int) (@value) );
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return @value;
					}
					
					
					case 1280549057:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this.size = ((int) (@value) );
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return @value;
					}
					
					
					case 1537812987:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this.nBuckets = ((int) (@value) );
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return @value;
					}
					
					
					default:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				switch (hash){
					case 922671056:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this.cachedIndex = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return @value;
					}
					
					
					case 1395555037:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this.cachedKey = global::haxe.lang.Runtime.genericCast<K>(@value);
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return @value;
					}
					
					
					case 2022294396:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this.upperBound = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return @value;
					}
					
					
					case 480756972:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this.nOccupied = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return @value;
					}
					
					
					case 1280549057:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this.size = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return @value;
					}
					
					
					case 1537812987:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this.nBuckets = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return @value;
					}
					
					
					case 1313416818:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this.vals = ((V[]) (@value) );
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return @value;
					}
					
					
					case 2048392659:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this._keys = ((K[]) (@value) );
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return @value;
					}
					
					
					case 995006396:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this.hashes = ((int[]) (@value) );
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return @value;
					}
					
					
					default:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				switch (hash){
					case 5144726:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get") ), ((int) (5144726) ))) );
					}
					
					
					case 142301684:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("resize") ), ((int) (142301684) ))) );
					}
					
					
					case 1639293562:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("lookup") ), ((int) (1639293562) ))) );
					}
					
					
					case 5741474:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("set") ), ((int) (5741474) ))) );
					}
					
					
					case 922671056:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return this.cachedIndex;
					}
					
					
					case 1395555037:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return this.cachedKey;
					}
					
					
					case 2022294396:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return this.upperBound;
					}
					
					
					case 480756972:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return this.nOccupied;
					}
					
					
					case 1280549057:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return this.size;
					}
					
					
					case 1537812987:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return this.nBuckets;
					}
					
					
					case 1313416818:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return this.vals;
					}
					
					
					case 2048392659:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return this._keys;
					}
					
					
					case 995006396:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return this.hashes;
					}
					
					
					default:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				switch (hash){
					case 922671056:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return ((double) (this.cachedIndex) );
					}
					
					
					case 1395555037:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return ((double) (global::haxe.lang.Runtime.toDouble(((object) (this.cachedKey) ))) );
					}
					
					
					case 2022294396:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return ((double) (this.upperBound) );
					}
					
					
					case 480756972:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return ((double) (this.nOccupied) );
					}
					
					
					case 1280549057:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return ((double) (this.size) );
					}
					
					
					case 1537812987:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return ((double) (this.nBuckets) );
					}
					
					
					default:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				switch (hash){
					case 5144726:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return (this.@get(global::haxe.lang.Runtime.genericCast<K>(dynargs[0]))).toDynamic();
					}
					
					
					case 142301684:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this.resize(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ));
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						break;
					}
					
					
					case 1639293562:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return this.lookup(global::haxe.lang.Runtime.genericCast<K>(dynargs[0]));
					}
					
					
					case 5741474:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						this.@set(global::haxe.lang.Runtime.genericCast<K>(dynargs[0]), global::haxe.lang.Runtime.genericCast<V>(dynargs[1]));
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						break;
					}
					
					
					default:
					{
						#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				baseArr.push("cachedIndex");
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				baseArr.push("cachedKey");
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				baseArr.push("upperBound");
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				baseArr.push("nOccupied");
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				baseArr.push("size");
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				baseArr.push("nBuckets");
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				baseArr.push("vals");
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				baseArr.push("_keys");
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				baseArr.push("hashes");
				#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
				{
					#line 26 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\haxe\\ds\\ObjectMap.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace haxe.ds{
	public  interface ObjectMap : global::haxe.lang.IHxObject, global::haxe.lang.IGenericObject {
		   object haxe_ds_ObjectMap_cast<K_c, V_c>();
		
	}
}


