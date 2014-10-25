
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PScore : global::haxe.lang.HxObject {
		public    PScore(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PScore(global::nx3.NScore nscore){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PScore.hx"
				global::nx3.PScore.__hx_ctor_nx3_PScore(this, nscore);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PScore(global::nx3.PScore __temp_me114, global::nx3.NScore nscore){
			unchecked {
				#line 42 "F:\\nx3\\src\\nx3\\PScore.hx"
				__temp_me114.prevSystemwidth = ((double) (0) );
				#line 16 "F:\\nx3\\src\\nx3\\PScore.hx"
				__temp_me114.nscore = nscore;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
				return new global::nx3.PScore(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
				return new global::nx3.PScore(((global::nx3.NScore) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.NScore nscore;
		
		public  global::Array<object> bars;
		
		public virtual   global::Array<object> getBars(){
			unchecked {
				#line 23 "F:\\nx3\\src\\nx3\\PScore.hx"
				if (( this.bars != default(global::Array<object>) )) {
					#line 23 "F:\\nx3\\src\\nx3\\PScore.hx"
					return this.bars;
				}
				
				#line 24 "F:\\nx3\\src\\nx3\\PScore.hx"
				this.bars = new global::Array<object>(new object[]{});
				{
					#line 25 "F:\\nx3\\src\\nx3\\PScore.hx"
					int _g = 0;
					#line 25 "F:\\nx3\\src\\nx3\\PScore.hx"
					global::Array<object> _g1 = this.nscore.nbars;
					#line 25 "F:\\nx3\\src\\nx3\\PScore.hx"
					while (( _g < _g1.length )){
						#line 25 "F:\\nx3\\src\\nx3\\PScore.hx"
						global::nx3.NBar nbar = ((global::nx3.NBar) (_g1[_g]) );
						#line 25 "F:\\nx3\\src\\nx3\\PScore.hx"
						 ++ _g;
						#line 27 "F:\\nx3\\src\\nx3\\PScore.hx"
						global::nx3.PBar bar = new global::nx3.PBar(((global::nx3.NBar) (nbar) ));
						bar.score = this;
						this.bars.push(bar);
					}
					
				}
				
				#line 31 "F:\\nx3\\src\\nx3\\PScore.hx"
				return this.bars;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getNBars(){
			unchecked {
				#line 36 "F:\\nx3\\src\\nx3\\PScore.hx"
				global::Array<object> result = new global::Array<object>(new object[]{});
				{
					#line 37 "F:\\nx3\\src\\nx3\\PScore.hx"
					int _g = 0;
					#line 37 "F:\\nx3\\src\\nx3\\PScore.hx"
					global::Array<object> _g1 = this.getBars();
					#line 37 "F:\\nx3\\src\\nx3\\PScore.hx"
					while (( _g < _g1.length )){
						#line 37 "F:\\nx3\\src\\nx3\\PScore.hx"
						global::nx3.PBar bar = ((global::nx3.PBar) (_g1[_g]) );
						#line 37 "F:\\nx3\\src\\nx3\\PScore.hx"
						 ++ _g;
						#line 37 "F:\\nx3\\src\\nx3\\PScore.hx"
						result.push(bar.nbar);
					}
					
				}
				
				#line 38 "F:\\nx3\\src\\nx3\\PScore.hx"
				return result;
			}
			#line default
		}
		
		
		public  global::Array<object> systems;
		
		public  double prevSystemwidth;
		
		public virtual   global::Array<object> getSystems(double systemwidth){
			unchecked {
				#line 45 "F:\\nx3\\src\\nx3\\PScore.hx"
				if (( systemwidth != this.prevSystemwidth )) {
					#line 45 "F:\\nx3\\src\\nx3\\PScore.hx"
					this.systems = default(global::Array<object>);
				}
				
				#line 46 "F:\\nx3\\src\\nx3\\PScore.hx"
				if (( this.systems != default(global::Array<object>) )) {
					#line 46 "F:\\nx3\\src\\nx3\\PScore.hx"
					return this.systems;
				}
				
				#line 48 "F:\\nx3\\src\\nx3\\PScore.hx"
				this.systems = new global::nx3.PScoreSystemsGenerator(((global::Array<object>) (this.getBars()) )).getsSystems(new global::Array<double>(new double[]{systemwidth}));
				#line 50 "F:\\nx3\\src\\nx3\\PScore.hx"
				{
					#line 50 "F:\\nx3\\src\\nx3\\PScore.hx"
					int _g = 0;
					#line 50 "F:\\nx3\\src\\nx3\\PScore.hx"
					global::Array<object> _g1 = this.systems;
					#line 50 "F:\\nx3\\src\\nx3\\PScore.hx"
					while (( _g < _g1.length )){
						#line 50 "F:\\nx3\\src\\nx3\\PScore.hx"
						global::nx3.PSystem system = ((global::nx3.PSystem) (_g1[_g]) );
						#line 50 "F:\\nx3\\src\\nx3\\PScore.hx"
						 ++ _g;
						#line 50 "F:\\nx3\\src\\nx3\\PScore.hx"
						system.calculateSystembarXs();
					}
					
				}
				
				#line 52 "F:\\nx3\\src\\nx3\\PScore.hx"
				{
					#line 52 "F:\\nx3\\src\\nx3\\PScore.hx"
					int _g2 = 0;
					#line 52 "F:\\nx3\\src\\nx3\\PScore.hx"
					global::Array<object> _g11 = this.systems;
					#line 52 "F:\\nx3\\src\\nx3\\PScore.hx"
					while (( _g2 < _g11.length )){
						#line 52 "F:\\nx3\\src\\nx3\\PScore.hx"
						global::nx3.PSystem system1 = ((global::nx3.PSystem) (_g11[_g2]) );
						#line 52 "F:\\nx3\\src\\nx3\\PScore.hx"
						 ++ _g2;
						#line 54 "F:\\nx3\\src\\nx3\\PScore.hx"
						double ifMoreThan = default(double);
						#line 54 "F:\\nx3\\src\\nx3\\PScore.hx"
						global::nx3.PSystem __temp_stmt251 = default(global::nx3.PSystem);
						#line 54 "F:\\nx3\\src\\nx3\\PScore.hx"
						{
							#line 54 "F:\\nx3\\src\\nx3\\PScore.hx"
							global::Array<object> array = this.systems;
							#line 54 "F:\\nx3\\src\\nx3\\PScore.hx"
							__temp_stmt251 = ((global::nx3.PSystem) (array[( array.length - 1 )]) );
						}
						
						#line 54 "F:\\nx3\\src\\nx3\\PScore.hx"
						if (( system1 != __temp_stmt251 )) {
							#line 54 "F:\\nx3\\src\\nx3\\PScore.hx"
							ifMoreThan = ((double) (0) );
						}
						 else {
							#line 54 "F:\\nx3\\src\\nx3\\PScore.hx"
							ifMoreThan = ( system1.getSystemBreakWidth() * .7 );
						}
						
						#line 55 "F:\\nx3\\src\\nx3\\PScore.hx"
						new global::nx3.PScoreSystemStretcher(((global::nx3.PSystem) (system1) )).stretchTo(system1.getSystemBreakWidth(), new global::haxe.lang.Null<double>(ifMoreThan, true));
					}
					
				}
				
				#line 57 "F:\\nx3\\src\\nx3\\PScore.hx"
				return this.systems;
			}
			#line default
		}
		
		
		public virtual   global::nx3.PBar getBar(int idx){
			unchecked {
				#line 60 "F:\\nx3\\src\\nx3\\PScore.hx"
				if (( ( idx < 0 ) || ( idx > this.getBars().length ) )) {
					#line 60 "F:\\nx3\\src\\nx3\\PScore.hx"
					return default(global::nx3.PBar);
				}
				 else {
					#line 60 "F:\\nx3\\src\\nx3\\PScore.hx"
					return ((global::nx3.PBar) (this.getBars()[idx]) );
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
				switch (hash){
					case 1381057668:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						this.prevSystemwidth = ((double) (@value) );
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return @value;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
				switch (hash){
					case 1381057668:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						this.prevSystemwidth = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return @value;
					}
					
					
					case 325155492:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						this.systems = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return @value;
					}
					
					
					case 1091626816:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						this.bars = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return @value;
					}
					
					
					case 1947935780:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						this.nscore = ((global::nx3.NScore) (@value) );
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return @value;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
				switch (hash){
					case 588901085:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBar") ), ((int) (588901085) ))) );
					}
					
					
					case 1656946862:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getSystems") ), ((int) (1656946862) ))) );
					}
					
					
					case 1381057668:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return this.prevSystemwidth;
					}
					
					
					case 325155492:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return this.systems;
					}
					
					
					case 1641345624:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNBars") ), ((int) (1641345624) ))) );
					}
					
					
					case 328439542:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBars") ), ((int) (328439542) ))) );
					}
					
					
					case 1091626816:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return this.bars;
					}
					
					
					case 1947935780:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return this.nscore;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
				switch (hash){
					case 1381057668:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return this.prevSystemwidth;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
				switch (hash){
					case 588901085:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return this.getBar(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ));
					}
					
					
					case 1656946862:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return this.getSystems(((double) (global::haxe.lang.Runtime.toDouble(dynargs[0])) ));
					}
					
					
					case 1641345624:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return this.getNBars();
					}
					
					
					case 328439542:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return this.getBars();
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
				baseArr.push("prevSystemwidth");
				#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
				baseArr.push("systems");
				#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
				baseArr.push("bars");
				#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
				baseArr.push("nscore");
				#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
				{
					#line 10 "F:\\nx3\\src\\nx3\\PScore.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


