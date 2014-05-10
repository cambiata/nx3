
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PBeamgroupFrameCalculator : global::haxe.lang.HxObject {
		public    PBeamgroupFrameCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PBeamgroupFrameCalculator(global::nx3.PBeamgroup beamgroup){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				global::nx3.PBeamgroupFrameCalculator.__hx_ctor_nx3_PBeamgroupFrameCalculator(this, beamgroup);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PBeamgroupFrameCalculator(global::nx3.PBeamgroupFrameCalculator __temp_me88, global::nx3.PBeamgroup beamgroup){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				__temp_me88.beamgroup = beamgroup;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				return new global::nx3.PBeamgroupFrameCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				return new global::nx3.PBeamgroupFrameCalculator(((global::nx3.PBeamgroup) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.PBeamgroup beamgroup;
		
		public  global::Array<int> outerLevels;
		
		public  global::Array<int> innerLevels;
		
		public virtual   object getFrame(){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				this.calcLevelArrays();
				object frame = this.calcFramePrototype();
				return frame;
			}
			#line default
		}
		
		
		public virtual   object calcFramePrototype(){
			unchecked {
				#line 30 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				int count = this.innerLevels.length;
				object tips = this.calcTips();
				global::Array<global::nx3.EBeamflagType> beamflags = new global::nx3.PBeamflagCalculator(((global::nx3.PBeamgroup) (this.beamgroup) )).getBeamflags();
				#line 34 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				{
					#line 39 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
					int __temp_odecl245 = ((int) (global::haxe.lang.Runtime.getField_f(tips, "leftTip", 1961201556, true)) );
					int __temp_odecl246 = ((int) (global::haxe.lang.Runtime.getField_f(tips, "rightTip", 1679810271, true)) );
					#line 34 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
					return new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{223262885, 711309176, 1178007882}), new global::Array<object>(new object[]{this.innerLevels, beamflags, this.outerLevels}), new global::Array<int>(new int[]{68419327, 935535770, 998862565, 1235217770, 1408766533, 1979547770}), new global::Array<double>(new double[]{((double) (this.innerLevels[( count - 1 )]) ), ((double) (__temp_odecl246) ), ((double) (this.outerLevels[0]) ), ((double) (this.innerLevels[0]) ), ((double) (__temp_odecl245) ), ((double) (this.outerLevels[( count - 1 )]) )}));
				}
				
			}
			#line default
		}
		
		
		public virtual   global::Array<int> getTopLevels(){
			unchecked {
				#line 50 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				global::Array<int> levels = new global::Array<int>(new int[]{});
				{
					#line 51 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
					int _g = 0;
					#line 51 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
					global::Array<object> _g1 = this.beamgroup.pnotes;
					#line 51 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
					while (( _g < _g1.length )){
						#line 51 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						global::nx3.PNote note = ((global::nx3.PNote) (_g1[_g]) );
						#line 51 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						 ++ _g;
						#line 51 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						levels.push(note.nnote.getTopLevel());
					}
					
				}
				
				#line 52 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				return levels;
			}
			#line default
		}
		
		
		public virtual   global::Array<int> getBottomLevels(){
			unchecked {
				#line 57 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				global::Array<int> levels = new global::Array<int>(new int[]{});
				{
					#line 58 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
					int _g = 0;
					#line 58 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
					global::Array<object> _g1 = this.beamgroup.pnotes;
					#line 58 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
					while (( _g < _g1.length )){
						#line 58 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						global::nx3.PNote note = ((global::nx3.PNote) (_g1[_g]) );
						#line 58 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						 ++ _g;
						#line 58 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						levels.push(note.nnote.getBottomLevel());
					}
					
				}
				
				#line 59 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				return levels;
			}
			#line default
		}
		
		
		public virtual   void calcLevelArrays(){
			unchecked {
				#line 64 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				global::nx3.EDirectionUD _g = this.beamgroup.getDirection();
				#line 64 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				switch (global::Type.enumIndex(_g)){
					case 0:
					{
						#line 67 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						this.outerLevels = this.getTopLevels();
						this.innerLevels = this.getBottomLevels();
						#line 66 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						break;
					}
					
					
					case 1:
					{
						#line 70 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						this.outerLevels = this.getBottomLevels();
						this.innerLevels = this.getTopLevels();
						#line 69 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						break;
					}
					
					
				}
				
			}
			#line default
		}
		
		
		public virtual   object calcTips(){
			unchecked {
				#line 79 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				int stemLenght = 7;
				global::nx3.EDirectionUD direction = this.beamgroup.getDirection();
				#line 82 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				global::nx3.PBamegroupFrameTipCalculator calculator = new global::nx3.PBamegroupFrameTipCalculator(((global::Array<int>) (this.outerLevels) ), ((global::nx3.EDirectionUD) (direction) ));
				#line 85 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				object tips = calculator.getTips();
				#line 87 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				if (( direction == global::nx3.EDirectionUD.Up )) {
					#line 87 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
					global::haxe.lang.Runtime.setField_f(tips, "leftTip", 1961201556, ((double) (( ((int) (global::haxe.lang.Runtime.getField_f(tips, "leftTip", 1961201556, true)) ) - ((int) (stemLenght) ) )) ));
				}
				 else {
					#line 87 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
					global::haxe.lang.Runtime.setField_f(tips, "leftTip", 1961201556, ((double) (( ((int) (global::haxe.lang.Runtime.getField_f(tips, "leftTip", 1961201556, true)) ) + stemLenght )) ));
				}
				
				#line 88 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				if (( direction == global::nx3.EDirectionUD.Up )) {
					#line 88 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
					global::haxe.lang.Runtime.setField_f(tips, "rightTip", 1679810271, ((double) (( ((int) (global::haxe.lang.Runtime.getField_f(tips, "rightTip", 1679810271, true)) ) - ((int) (stemLenght) ) )) ));
				}
				 else {
					#line 88 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
					global::haxe.lang.Runtime.setField_f(tips, "rightTip", 1679810271, ((double) (( ((int) (global::haxe.lang.Runtime.getField_f(tips, "rightTip", 1679810271, true)) ) + stemLenght )) ));
				}
				
				#line 90 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				return tips;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				switch (hash){
					case 223262885:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						this.innerLevels = ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return @value;
					}
					
					
					case 1178007882:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						this.outerLevels = ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return @value;
					}
					
					
					case 1104035696:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						this.beamgroup = ((global::nx3.PBeamgroup) (@value) );
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				switch (hash){
					case 1194361325:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcTips") ), ((int) (1194361325) ))) );
					}
					
					
					case 509692617:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcLevelArrays") ), ((int) (509692617) ))) );
					}
					
					
					case 1076621680:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBottomLevels") ), ((int) (1076621680) ))) );
					}
					
					
					case 2078397294:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getTopLevels") ), ((int) (2078397294) ))) );
					}
					
					
					case 1426166570:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcFramePrototype") ), ((int) (1426166570) ))) );
					}
					
					
					case 1717209015:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getFrame") ), ((int) (1717209015) ))) );
					}
					
					
					case 223262885:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return this.innerLevels;
					}
					
					
					case 1178007882:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return this.outerLevels;
					}
					
					
					case 1104035696:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return this.beamgroup;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				switch (hash){
					case 1194361325:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return this.calcTips();
					}
					
					
					case 509692617:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						this.calcLevelArrays();
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						break;
					}
					
					
					case 1076621680:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return this.getBottomLevels();
					}
					
					
					case 2078397294:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return this.getTopLevels();
					}
					
					
					case 1426166570:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return this.calcFramePrototype();
					}
					
					
					case 1717209015:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return this.getFrame();
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				baseArr.push("innerLevels");
				#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				baseArr.push("outerLevels");
				#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				baseArr.push("beamgroup");
				#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
				{
					#line 9 "F:\\nx3\\src\\nx3\\PBeamgroupFrameCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


