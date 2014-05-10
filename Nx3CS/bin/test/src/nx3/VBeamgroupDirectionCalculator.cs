
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VBeamgroupDirectionCalculator : global::haxe.lang.HxObject {
		public    VBeamgroupDirectionCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VBeamgroupDirectionCalculator(global::nx3.VBeamgroup beamgroup){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				global::nx3.VBeamgroupDirectionCalculator.__hx_ctor_nx3_VBeamgroupDirectionCalculator(this, beamgroup);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VBeamgroupDirectionCalculator(global::nx3.VBeamgroupDirectionCalculator __temp_me166, global::nx3.VBeamgroup beamgroup){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				__temp_me166.beamgroup = beamgroup;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				return new global::nx3.VBeamgroupDirectionCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				return new global::nx3.VBeamgroupDirectionCalculator(((global::nx3.VBeamgroup) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.VBeamgroup beamgroup;
		
		public virtual   global::nx3.EDirectionUD getDirection(){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				this.topLevel = this.findTopLevel();
				this.bottomLevel = this.findBottomLevel();
				if (( ( this.topLevel + this.bottomLevel ) <= 0 )) {
					#line 20 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
					return global::nx3.EDirectionUD.Down;
				}
				
				#line 21 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				return global::nx3.EDirectionUD.Up;
			}
			#line default
		}
		
		
		public  int topLevel;
		
		public virtual   int findTopLevel(){
			unchecked {
				#line 28 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				int topLevel = ((global::nx3.VNote) (this.beamgroup.vnotes[0]) ).nnote.getTopLevel();
				if (( this.beamgroup.vnotes.length == 1 )) {
					#line 29 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
					return topLevel;
				}
				
				#line 30 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				{
					#line 30 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
					int _g1 = 1;
					#line 30 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
					int _g = this.beamgroup.vnotes.length;
					#line 30 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
					while (( _g1 < _g )){
						#line 30 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						int i = _g1++;
						#line 32 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						int level = ((global::nx3.VNote) (this.beamgroup.vnotes[i]) ).nnote.getTopLevel();
						{
							#line 33 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
							double x = global::System.Math.Min(((double) (topLevel) ), ((double) (level) ));
							#line 33 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
							topLevel = ((int) (x) );
						}
						
					}
					
				}
				
				#line 35 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				return topLevel;
			}
			#line default
		}
		
		
		public  int bottomLevel;
		
		public virtual   int findBottomLevel(){
			unchecked {
				#line 41 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				int bottomLevel = ((global::nx3.VNote) (this.beamgroup.vnotes[0]) ).nnote.getBottomLevel();
				if (( this.beamgroup.vnotes.length == 1 )) {
					#line 42 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
					return bottomLevel;
				}
				
				#line 43 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				{
					#line 43 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
					int _g1 = 1;
					#line 43 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
					int _g = this.beamgroup.vnotes.length;
					#line 43 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
					while (( _g1 < _g )){
						#line 43 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						int i = _g1++;
						#line 45 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						int level = ((global::nx3.VNote) (this.beamgroup.vnotes[i]) ).nnote.getBottomLevel();
						{
							#line 46 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
							double x = global::System.Math.Max(((double) (bottomLevel) ), ((double) (level) ));
							#line 46 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
							bottomLevel = ((int) (x) );
						}
						
					}
					
				}
				
				#line 48 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				return bottomLevel;
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				switch (hash){
					case 1475586713:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						this.bottomLevel = ((int) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return @value;
					}
					
					
					case 1077093039:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						this.topLevel = ((int) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				switch (hash){
					case 1475586713:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						this.bottomLevel = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return @value;
					}
					
					
					case 1077093039:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						this.topLevel = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return @value;
					}
					
					
					case 1104035696:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						this.beamgroup = ((global::nx3.VBeamgroup) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				switch (hash){
					case 419158752:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("findBottomLevel") ), ((int) (419158752) ))) );
					}
					
					
					case 1475586713:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return this.bottomLevel;
					}
					
					
					case 766578696:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("findTopLevel") ), ((int) (766578696) ))) );
					}
					
					
					case 1077093039:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return this.topLevel;
					}
					
					
					case 529989321:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getDirection") ), ((int) (529989321) ))) );
					}
					
					
					case 1104035696:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return this.beamgroup;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				switch (hash){
					case 1475586713:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return ((double) (this.bottomLevel) );
					}
					
					
					case 1077093039:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return ((double) (this.topLevel) );
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				switch (hash){
					case 419158752:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return this.findBottomLevel();
					}
					
					
					case 766578696:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return this.findTopLevel();
					}
					
					
					case 529989321:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return this.getDirection();
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				baseArr.push("bottomLevel");
				#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				baseArr.push("topLevel");
				#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				baseArr.push("beamgroup");
				#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
				{
					#line 8 "F:\\nx3\\src\\nx3\\VBeamgroupDirectionCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


