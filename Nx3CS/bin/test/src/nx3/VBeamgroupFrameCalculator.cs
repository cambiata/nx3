
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VBeamgroupFrameCalculator : global::haxe.lang.HxObject {
		public    VBeamgroupFrameCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VBeamgroupFrameCalculator(global::nx3.VBeamgroup beamgroup){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				global::nx3.VBeamgroupFrameCalculator.__hx_ctor_nx3_VBeamgroupFrameCalculator(this, beamgroup);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VBeamgroupFrameCalculator(global::nx3.VBeamgroupFrameCalculator __temp_me167, global::nx3.VBeamgroup beamgroup){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				__temp_me167.beamgroup = beamgroup;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				return new global::nx3.VBeamgroupFrameCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				return new global::nx3.VBeamgroupFrameCalculator(((global::nx3.VBeamgroup) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.VBeamgroup beamgroup;
		
		public  global::Array<int> outerLevels;
		
		public  global::Array<int> innerLevels;
		
		public virtual   object getFrame(){
			unchecked {
				#line 23 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				this.calcLevelArrays();
				object frame = this.calcFramePrototype();
				return frame;
			}
			#line default
		}
		
		
		public virtual   object calcFramePrototype(){
			unchecked {
				#line 31 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				int count = this.innerLevels.length;
				object tips = this.calcTips();
				#line 34 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				{
					#line 39 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
					int __temp_odecl342 = ((int) (global::haxe.lang.Runtime.getField_f(tips, "leftTip", 1961201556, true)) );
					int __temp_odecl343 = ((int) (global::haxe.lang.Runtime.getField_f(tips, "rightTip", 1679810271, true)) );
					#line 34 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
					return new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{223262885, 1178007882}), new global::Array<object>(new object[]{this.innerLevels, this.outerLevels}), new global::Array<int>(new int[]{68419327, 935535770, 998862565, 1235217770, 1408766533, 1979547770}), new global::Array<double>(new double[]{((double) (this.innerLevels[( count - 1 )]) ), ((double) (__temp_odecl343) ), ((double) (this.outerLevels[0]) ), ((double) (this.innerLevels[0]) ), ((double) (__temp_odecl342) ), ((double) (this.outerLevels[( count - 1 )]) )}));
				}
				
			}
			#line default
		}
		
		
		public virtual   global::Array<int> getTopLevels(){
			unchecked {
				#line 48 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				global::Array<int> levels = new global::Array<int>(new int[]{});
				{
					#line 49 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
					int _g = 0;
					#line 49 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
					global::Array<object> _g1 = this.beamgroup.vnotes;
					#line 49 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
					while (( _g < _g1.length )){
						#line 49 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						global::nx3.VNote vnote = ((global::nx3.VNote) (_g1[_g]) );
						#line 49 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						 ++ _g;
						#line 49 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						levels.push(vnote.nnote.getTopLevel());
					}
					
				}
				
				#line 50 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				return levels;
			}
			#line default
		}
		
		
		public virtual   global::Array<int> getBottomLevels(){
			unchecked {
				#line 55 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				global::Array<int> levels = new global::Array<int>(new int[]{});
				{
					#line 56 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
					int _g = 0;
					#line 56 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
					global::Array<object> _g1 = this.beamgroup.vnotes;
					#line 56 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
					while (( _g < _g1.length )){
						#line 56 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						global::nx3.VNote vnote = ((global::nx3.VNote) (_g1[_g]) );
						#line 56 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						 ++ _g;
						#line 56 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						levels.push(vnote.nnote.getBottomLevel());
					}
					
				}
				
				#line 57 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				return levels;
			}
			#line default
		}
		
		
		public virtual   void calcLevelArrays(){
			unchecked {
				#line 62 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				global::nx3.EDirectionUD _g = this.beamgroup.getCalculatedDirection();
				#line 62 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				switch (global::Type.enumIndex(_g)){
					case 0:
					{
						#line 65 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						this.outerLevels = this.getTopLevels();
						this.innerLevels = this.getBottomLevels();
						#line 64 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						break;
					}
					
					
					case 1:
					{
						#line 68 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						this.outerLevels = this.getBottomLevels();
						this.innerLevels = this.getTopLevels();
						#line 67 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						break;
					}
					
					
				}
				
			}
			#line default
		}
		
		
		public virtual   object calcTips(){
			unchecked {
				#line 77 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				int stemLenght = 7;
				global::nx3.EDirectionUD direction = this.beamgroup.getCalculatedDirection();
				global::nx3.VBamegroupFrameTipCalculator calculator = new global::nx3.VBamegroupFrameTipCalculator(((global::Array<int>) (this.outerLevels) ), ((global::nx3.EDirectionUD) (direction) ));
				object tips = calculator.getTips();
				#line 82 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				if (( direction == global::nx3.EDirectionUD.Up )) {
					#line 82 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
					global::haxe.lang.Runtime.setField_f(tips, "leftTip", 1961201556, ((double) (( ((int) (global::haxe.lang.Runtime.getField_f(tips, "leftTip", 1961201556, true)) ) - ((int) (stemLenght) ) )) ));
				}
				 else {
					#line 82 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
					global::haxe.lang.Runtime.setField_f(tips, "leftTip", 1961201556, ((double) (( ((int) (global::haxe.lang.Runtime.getField_f(tips, "leftTip", 1961201556, true)) ) + stemLenght )) ));
				}
				
				#line 83 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				if (( direction == global::nx3.EDirectionUD.Up )) {
					#line 83 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
					global::haxe.lang.Runtime.setField_f(tips, "rightTip", 1679810271, ((double) (( ((int) (global::haxe.lang.Runtime.getField_f(tips, "rightTip", 1679810271, true)) ) - ((int) (stemLenght) ) )) ));
				}
				 else {
					#line 83 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
					global::haxe.lang.Runtime.setField_f(tips, "rightTip", 1679810271, ((double) (( ((int) (global::haxe.lang.Runtime.getField_f(tips, "rightTip", 1679810271, true)) ) + stemLenght )) ));
				}
				
				#line 85 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				return tips;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				switch (hash){
					case 223262885:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						this.innerLevels = ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (@value) ))) );
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return @value;
					}
					
					
					case 1178007882:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						this.outerLevels = ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (@value) ))) );
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return @value;
					}
					
					
					case 1104035696:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						this.beamgroup = ((global::nx3.VBeamgroup) (@value) );
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				switch (hash){
					case 1194361325:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcTips") ), ((int) (1194361325) ))) );
					}
					
					
					case 509692617:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcLevelArrays") ), ((int) (509692617) ))) );
					}
					
					
					case 1076621680:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBottomLevels") ), ((int) (1076621680) ))) );
					}
					
					
					case 2078397294:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getTopLevels") ), ((int) (2078397294) ))) );
					}
					
					
					case 1426166570:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcFramePrototype") ), ((int) (1426166570) ))) );
					}
					
					
					case 1717209015:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getFrame") ), ((int) (1717209015) ))) );
					}
					
					
					case 223262885:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return this.innerLevels;
					}
					
					
					case 1178007882:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return this.outerLevels;
					}
					
					
					case 1104035696:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return this.beamgroup;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				switch (hash){
					case 1194361325:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return this.calcTips();
					}
					
					
					case 509692617:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						this.calcLevelArrays();
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						break;
					}
					
					
					case 1076621680:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return this.getBottomLevels();
					}
					
					
					case 2078397294:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return this.getTopLevels();
					}
					
					
					case 1426166570:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return this.calcFramePrototype();
					}
					
					
					case 1717209015:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return this.getFrame();
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				baseArr.push("innerLevels");
				#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				baseArr.push("outerLevels");
				#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				baseArr.push("beamgroup");
				#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
				{
					#line 10 "F:\\nx3\\src\\nx3\\VBeamgroupFrameCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


