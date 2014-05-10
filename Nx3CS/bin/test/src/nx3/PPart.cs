
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PPart : global::haxe.lang.HxObject {
		public    PPart(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PPart(global::nx3.NPart npart){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PPart.hx"
				global::nx3.PPart.__hx_ctor_nx3_PPart(this, npart);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PPart(global::nx3.PPart __temp_me109, global::nx3.NPart npart){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PPart.hx"
				__temp_me109.npart = npart;
				__temp_me109.@value = 0;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
				return new global::nx3.PPart(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
				return new global::nx3.PPart(((global::nx3.NPart) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.NPart npart;
		
		public  global::nx3.PBar bar;
		
		public virtual   global::nx3.PBar getBar(){
			unchecked {
				#line 23 "F:\\nx3\\src\\nx3\\PPart.hx"
				return this.bar;
			}
			#line default
		}
		
		
		public  global::Array<object> voices;
		
		public virtual   global::Array<object> getVoices(){
			unchecked {
				#line 30 "F:\\nx3\\src\\nx3\\PPart.hx"
				if (( this.voices != default(global::Array<object>) )) {
					#line 30 "F:\\nx3\\src\\nx3\\PPart.hx"
					return this.voices;
				}
				
				#line 31 "F:\\nx3\\src\\nx3\\PPart.hx"
				this.voices = new global::Array<object>(new object[]{});
				#line 33 "F:\\nx3\\src\\nx3\\PPart.hx"
				{
					#line 33 "F:\\nx3\\src\\nx3\\PPart.hx"
					int _g = 0;
					#line 33 "F:\\nx3\\src\\nx3\\PPart.hx"
					global::Array<object> _g1 = this.npart.nvoices;
					#line 33 "F:\\nx3\\src\\nx3\\PPart.hx"
					while (( _g < _g1.length )){
						#line 33 "F:\\nx3\\src\\nx3\\PPart.hx"
						global::nx3.NVoice nvoice = ((global::nx3.NVoice) (_g1[_g]) );
						#line 33 "F:\\nx3\\src\\nx3\\PPart.hx"
						 ++ _g;
						#line 35 "F:\\nx3\\src\\nx3\\PPart.hx"
						global::nx3.PVoice voice = new global::nx3.PVoice(((global::nx3.NVoice) (nvoice) ));
						voice.part = this;
						this.voices.push(voice);
					}
					
				}
				
				#line 39 "F:\\nx3\\src\\nx3\\PPart.hx"
				return this.voices;
			}
			#line default
		}
		
		
		public  global::Array<object> complexes;
		
		public virtual   global::Array<object> getComplexes(){
			unchecked {
				#line 45 "F:\\nx3\\src\\nx3\\PPart.hx"
				if (( this.complexes != default(global::Array<object>) )) {
					#line 45 "F:\\nx3\\src\\nx3\\PPart.hx"
					return this.complexes;
				}
				
				#line 46 "F:\\nx3\\src\\nx3\\PPart.hx"
				global::nx3.PPartComplexesGenerator generator = new global::nx3.PPartComplexesGenerator(((global::nx3.PPart) (this) ));
				this.complexes = generator.getComplexes();
				return this.complexes;
			}
			#line default
		}
		
		
		public  global::haxe.ds.IntMap<object> positionsComplexes;
		
		public virtual   global::haxe.ds.IntMap<object> getPositionsComplexes(){
			unchecked {
				#line 54 "F:\\nx3\\src\\nx3\\PPart.hx"
				if (( this.positionsComplexes != default(global::haxe.ds.IntMap<object>) )) {
					#line 54 "F:\\nx3\\src\\nx3\\PPart.hx"
					return this.positionsComplexes;
				}
				
				#line 55 "F:\\nx3\\src\\nx3\\PPart.hx"
				this.positionsComplexes = new global::haxe.ds.IntMap<object>();
				{
					#line 56 "F:\\nx3\\src\\nx3\\PPart.hx"
					int _g = 0;
					#line 56 "F:\\nx3\\src\\nx3\\PPart.hx"
					global::Array<object> _g1 = this.getComplexes();
					#line 56 "F:\\nx3\\src\\nx3\\PPart.hx"
					while (( _g < _g1.length )){
						#line 56 "F:\\nx3\\src\\nx3\\PPart.hx"
						global::nx3.PComplex complex = ((global::nx3.PComplex) (_g1[_g]) );
						#line 56 "F:\\nx3\\src\\nx3\\PPart.hx"
						 ++ _g;
						#line 58 "F:\\nx3\\src\\nx3\\PPart.hx"
						this.positionsComplexes.@set(complex.getValueposition(), complex);
					}
					
				}
				
				#line 60 "F:\\nx3\\src\\nx3\\PPart.hx"
				return this.positionsComplexes;
			}
			#line default
		}
		
		
		public virtual   int getIndex(){
			unchecked {
				#line 65 "F:\\nx3\\src\\nx3\\PPart.hx"
				return this.bar.getParts().indexOf(this, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public virtual   double getYPosition(){
			unchecked {
				#line 71 "F:\\nx3\\src\\nx3\\PPart.hx"
				return ((double) (( this.getIndex() * 20 )) );
			}
			#line default
		}
		
		
		public  int @value;
		
		public virtual   int getValue(){
			unchecked {
				#line 77 "F:\\nx3\\src\\nx3\\PPart.hx"
				if (( this.@value != 0 )) {
					#line 77 "F:\\nx3\\src\\nx3\\PPart.hx"
					return this.@value;
				}
				
				#line 78 "F:\\nx3\\src\\nx3\\PPart.hx"
				{
					#line 78 "F:\\nx3\\src\\nx3\\PPart.hx"
					int _g = 0;
					#line 78 "F:\\nx3\\src\\nx3\\PPart.hx"
					global::Array<object> _g1 = this.getVoices();
					#line 78 "F:\\nx3\\src\\nx3\\PPart.hx"
					while (( _g < _g1.length )){
						#line 78 "F:\\nx3\\src\\nx3\\PPart.hx"
						global::nx3.PVoice voice = ((global::nx3.PVoice) (_g1[_g]) );
						#line 78 "F:\\nx3\\src\\nx3\\PPart.hx"
						 ++ _g;
						#line 80 "F:\\nx3\\src\\nx3\\PPart.hx"
						{
							#line 80 "F:\\nx3\\src\\nx3\\PPart.hx"
							double x = default(double);
							#line 80 "F:\\nx3\\src\\nx3\\PPart.hx"
							{
								#line 80 "F:\\nx3\\src\\nx3\\PPart.hx"
								double b = ((double) (voice.getValue()) );
								#line 80 "F:\\nx3\\src\\nx3\\PPart.hx"
								x = global::System.Math.Max(((double) (this.@value) ), ((double) (b) ));
							}
							
							#line 80 "F:\\nx3\\src\\nx3\\PPart.hx"
							this.@value = ((int) (x) );
						}
						
					}
					
				}
				
				#line 82 "F:\\nx3\\src\\nx3\\PPart.hx"
				return this.@value;
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
				switch (hash){
					case 834174833:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						this.@value = ((int) (@value) );
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return @value;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
				switch (hash){
					case 834174833:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						this.@value = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return @value;
					}
					
					
					case 1876545940:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						this.positionsComplexes = ((global::haxe.ds.IntMap<object>) (global::haxe.ds.IntMap<object>.__hx_cast<object>(((global::haxe.ds.IntMap) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return @value;
					}
					
					
					case 1329310366:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						this.complexes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return @value;
					}
					
					
					case 1565120129:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						this.voices = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return @value;
					}
					
					
					case 4895187:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						this.bar = ((global::nx3.PBar) (@value) );
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return @value;
					}
					
					
					case 543535969:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						this.npart = ((global::nx3.NPart) (@value) );
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return @value;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
				switch (hash){
					case 294620923:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getValue") ), ((int) (294620923) ))) );
					}
					
					
					case 834174833:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return this.@value;
					}
					
					
					case 1746770636:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getYPosition") ), ((int) (1746770636) ))) );
					}
					
					
					case 501983900:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getIndex") ), ((int) (501983900) ))) );
					}
					
					
					case 1324635082:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getPositionsComplexes") ), ((int) (1324635082) ))) );
					}
					
					
					case 1876545940:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return this.positionsComplexes;
					}
					
					
					case 1586644776:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getComplexes") ), ((int) (1586644776) ))) );
					}
					
					
					case 1329310366:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return this.complexes;
					}
					
					
					case 1503682487:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVoices") ), ((int) (1503682487) ))) );
					}
					
					
					case 1565120129:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return this.voices;
					}
					
					
					case 588901085:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBar") ), ((int) (588901085) ))) );
					}
					
					
					case 4895187:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return this.bar;
					}
					
					
					case 543535969:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return this.npart;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
				switch (hash){
					case 834174833:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return ((double) (this.@value) );
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
				switch (hash){
					case 294620923:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return this.getValue();
					}
					
					
					case 1746770636:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return this.getYPosition();
					}
					
					
					case 501983900:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return this.getIndex();
					}
					
					
					case 1324635082:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return this.getPositionsComplexes();
					}
					
					
					case 1586644776:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return this.getComplexes();
					}
					
					
					case 1503682487:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return this.getVoices();
					}
					
					
					case 588901085:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return this.getBar();
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
				baseArr.push("value");
				#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
				baseArr.push("positionsComplexes");
				#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
				baseArr.push("complexes");
				#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
				baseArr.push("voices");
				#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
				baseArr.push("bar");
				#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
				baseArr.push("npart");
				#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
				{
					#line 9 "F:\\nx3\\src\\nx3\\PPart.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


