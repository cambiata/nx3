
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PBarWidthCalculator : global::haxe.lang.HxObject, global::nx3.IBarWidthCalculator {
		public    PBarWidthCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PBarWidthCalculator(){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
				global::nx3.PBarWidthCalculator.__hx_ctor_nx3_PBarWidthCalculator(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PBarWidthCalculator(global::nx3.PBarWidthCalculator __temp_me83){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
				return new global::nx3.PBarWidthCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
				return new global::nx3.PBarWidthCalculator();
			}
			#line default
		}
		
		
		public virtual   double getClefWidth(global::nx3.EClef clef){
			unchecked {
				#line 27 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
				return global::nx3.PAttributesRectsCalculator.getClefRect(clef).width;
			}
			#line default
		}
		
		
		public virtual   double getKeyWidth(global::nx3.EKey key){
			unchecked {
				#line 32 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
				return global::nx3.PAttributesRectsCalculator.getKeyRect(key).width;
			}
			#line default
		}
		
		
		public virtual   double getTimeWidth(global::nx3.ETime time){
			unchecked {
				#line 37 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
				return global::nx3.PAttributesRectsCalculator.getTimeRect(time).width;
			}
			#line default
		}
		
		
		   double global::nx3.IBarWidthCalculator.getContentLeftMarginWidth(global::nx3.PBar bar){
			unchecked {
				#line 40 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
				return ((double) (((int) (this.getContentLeftMarginWidth(((global::nx3.PBar) (bar) ))) )) );
			}
			#line default
		}
		
		
		public virtual   int getContentLeftMarginWidth(global::nx3.PBar bar){
			unchecked {
				#line 42 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
				return 3;
			}
			#line default
		}
		
		
		public virtual   double getContentWidth(global::nx3.PBar bar){
			unchecked {
				#line 48 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
				return bar.getContentwidth();
			}
			#line default
		}
		
		
		public virtual   double getBarlineWidth(global::nx3.EBarline barline){
			unchecked {
				#line 59 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
				return ((double) (1) );
			}
			#line default
		}
		
		
		public virtual   double getLeftBarlineWidth(global::nx3.EBarlineLeft barline){
			unchecked {
				#line 66 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
				return ((double) (1) );
			}
			#line default
		}
		
		
		public virtual   double getClefsWidth(global::Array<global::nx3.EClef> clefs){
			unchecked {
				#line 73 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
				double result = 0.0;
				{
					#line 74 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
					int _g = 0;
					#line 74 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
					while (( _g < clefs.length )){
						#line 74 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						global::nx3.EClef clef = clefs[_g];
						#line 74 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						 ++ _g;
						#line 76 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						if (( clef == default(global::nx3.EClef) )) {
							#line 76 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
							continue;
						}
						
						#line 77 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						result = global::System.Math.Max(((double) (result) ), ((double) (global::nx3.PAttributesRectsCalculator.getClefRect(clef).width) ));
					}
					
				}
				
				#line 79 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   double getKeysWidth(global::Array<global::nx3.EKey> keys){
			unchecked {
				#line 84 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
				double result = 0.0;
				{
					#line 85 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
					int _g = 0;
					#line 85 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
					while (( _g < keys.length )){
						#line 85 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						global::nx3.EKey key = keys[_g];
						#line 85 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						 ++ _g;
						#line 87 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						if (( key == default(global::nx3.EKey) )) {
							#line 87 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
							continue;
						}
						
						#line 88 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						result = global::System.Math.Max(((double) (result) ), ((double) (global::nx3.PAttributesRectsCalculator.getKeyRect(key).width) ));
					}
					
				}
				
				#line 90 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
				return result;
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
				switch (hash){
					case 1264864252:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getKeysWidth") ), ((int) (1264864252) ))) );
					}
					
					
					case 841351059:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getClefsWidth") ), ((int) (841351059) ))) );
					}
					
					
					case 808312988:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getLeftBarlineWidth") ), ((int) (808312988) ))) );
					}
					
					
					case 1426066165:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBarlineWidth") ), ((int) (1426066165) ))) );
					}
					
					
					case 1406885827:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getContentWidth") ), ((int) (1406885827) ))) );
					}
					
					
					case 1065219630:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getContentLeftMarginWidth") ), ((int) (1065219630) ))) );
					}
					
					
					case 246032195:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getTimeWidth") ), ((int) (246032195) ))) );
					}
					
					
					case 885005981:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getKeyWidth") ), ((int) (885005981) ))) );
					}
					
					
					case 1374235366:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getClefWidth") ), ((int) (1374235366) ))) );
					}
					
					
					default:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
				switch (hash){
					case 1264864252:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return this.getKeysWidth(((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 841351059:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return this.getClefsWidth(((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 808312988:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return this.getLeftBarlineWidth(((global::nx3.EBarlineLeft) (dynargs[0]) ));
					}
					
					
					case 1426066165:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return this.getBarlineWidth(((global::nx3.EBarline) (dynargs[0]) ));
					}
					
					
					case 1406885827:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return this.getContentWidth(((global::nx3.PBar) (dynargs[0]) ));
					}
					
					
					case 1065219630:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return ((int) (this.getContentLeftMarginWidth(((global::nx3.PBar) (dynargs[0]) ))) );
					}
					
					
					case 246032195:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return this.getTimeWidth(((global::nx3.ETime) (dynargs[0]) ));
					}
					
					
					case 885005981:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return this.getKeyWidth(((global::nx3.EKey) (dynargs[0]) ));
					}
					
					
					case 1374235366:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return this.getClefWidth(((global::nx3.EClef) (dynargs[0]) ));
					}
					
					
					default:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PBarWidthCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
	}
}


