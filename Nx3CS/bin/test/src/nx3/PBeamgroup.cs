
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PBeamgroup : global::haxe.lang.HxObject {
		public    PBeamgroup(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PBeamgroup(global::Array<object> pnotes){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				global::nx3.PBeamgroup.__hx_ctor_nx3_PBeamgroup(this, pnotes);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PBeamgroup(global::nx3.PBeamgroup __temp_me88, global::Array<object> pnotes){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				__temp_me88.@value = default(global::haxe.lang.Null<int>);
				#line 17 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				__temp_me88.voice = ((global::nx3.PNote) (pnotes[0]) ).voice;
				__temp_me88.pnotes = pnotes;
				{
					#line 19 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
					int _g = 0;
					#line 19 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
					while (( _g < pnotes.length )){
						#line 19 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						global::nx3.PNote pnote = ((global::nx3.PNote) (pnotes[_g]) );
						#line 19 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						 ++ _g;
						#line 19 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						pnote.beamgroup = __temp_me88;
					}
					
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				return new global::nx3.PBeamgroup(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				return new global::nx3.PBeamgroup(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ));
			}
			#line default
		}
		
		
		public  global::Array<object> pnotes;
		
		public  global::haxe.lang.Null<int> @value;
		
		public virtual   int getValue(){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				if (this.@value.hasValue) {
					#line 25 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
					return this.@value.@value;
				}
				
				#line 26 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				this.@value = new global::haxe.lang.Null<int>(0, true);
				{
					#line 27 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
					int _g = 0;
					#line 27 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
					global::Array<object> _g1 = this.pnotes;
					#line 27 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
					while (( _g < _g1.length )){
						#line 27 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						global::nx3.PNote pnote = ((global::nx3.PNote) (_g1[_g]) );
						#line 27 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						 ++ _g;
						#line 29 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						{
							#line 29 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
							global::nx3.PBeamgroup __temp_dynop160 = this;
							#line 29 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
							__temp_dynop160.@value = new global::haxe.lang.Null<int>(( __temp_dynop160.@value.@value + global::nx3.ENoteValTools.@value(pnote.nnote.@value) ), true);
						}
						
					}
					
				}
				
				#line 31 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				return this.@value.@value;
			}
			#line default
		}
		
		
		public  global::nx3.EDirectionUD direction;
		
		public virtual   void setDirection(global::nx3.EDirectionUD direction){
			unchecked {
				#line 38 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				this.direction = direction;
			}
			#line default
		}
		
		
		public virtual   global::nx3.EDirectionUD getDirection(){
			unchecked {
				#line 44 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				if (( this.direction == default(global::nx3.EDirectionUD) )) {
					#line 46 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
					global::nx3.PPartbeamgroupsDirectionCalculator calculator = new global::nx3.PPartbeamgroupsDirectionCalculator(((global::nx3.PPart) (this.voice.getPart()) ));
					calculator.calculateBeamgroupsDirections();
				}
				
				#line 50 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				return this.direction;
			}
			#line default
		}
		
		
		public  global::nx3.PVoice voice;
		
		public virtual   global::nx3.PVoice getPVoice(){
			unchecked {
				#line 56 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				return this.voice;
			}
			#line default
		}
		
		
		public  global::Array<double> stavexpositions;
		
		public virtual   global::Array<double> getNotesStemXPositions(){
			unchecked {
				#line 62 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				if (( this.stavexpositions != default(global::Array<double>) )) {
					#line 62 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
					return this.stavexpositions;
				}
				
				#line 63 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				this.stavexpositions = new global::Array<double>(new double[]{});
				{
					#line 64 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
					int _g = 0;
					#line 64 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
					global::Array<object> _g1 = this.pnotes;
					#line 64 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
					while (( _g < _g1.length )){
						#line 64 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						global::nx3.PNote note = ((global::nx3.PNote) (_g1[_g]) );
						#line 64 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						 ++ _g;
						#line 66 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						this.stavexpositions.push(( note.getComplex().getXPosition() + note.getStaveXPosition().@value ));
					}
					
				}
				
				#line 68 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				return this.stavexpositions;
			}
			#line default
		}
		
		
		public  object frame;
		
		public virtual   object getFrame(){
			unchecked {
				#line 75 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				if (( ! (global::haxe.lang.Runtime.refEq(this.frame, default(object))) )) {
					#line 75 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
					return this.frame;
				}
				
				#line 77 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				global::nx3.NNote firstnote = ((global::nx3.PNote) (this.pnotes[0]) ).nnote;
				#line 81 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				if ( ! (string.Equals(global::Type.enumConstructor(firstnote.type), "Note")) ) {
					#line 81 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
					return default(object);
				}
				
				#line 82 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				if (( this.pnotes.length == 1 )) {
					#line 84 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
					int stavinglevel = global::nx3.ENoteValTools.stavinglevel(firstnote.@value);
					if (( stavinglevel <= 0 )) {
						#line 85 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return default(object);
					}
					
				}
				
				#line 89 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				global::nx3.PBeamgroupFrameCalculator calculator = new global::nx3.PBeamgroupFrameCalculator(((global::nx3.PBeamgroup) (this) ));
				this.frame = calculator.getFrame();
				return this.frame;
			}
			#line default
		}
		
		
		public virtual   string toString(){
			unchecked {
				#line 96 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				return global::haxe.lang.Runtime.concat("PBeamgroup \r", global::Std.@string(((global::Array<global::nx3.EBeamflagType>) (global::Array<object>.__hx_cast<global::nx3.EBeamflagType>(((global::Array) (global::haxe.lang.Runtime.getField(this.getFrame(), "beamflags", 711309176, true)) ))) )));
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				switch (hash){
					case 109279277:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						this.frame = ((object) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				switch (hash){
					case 109279277:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						this.frame = ((object) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return @value;
					}
					
					
					case 716772545:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						this.stavexpositions = ((global::Array<double>) (global::Array<object>.__hx_cast<double>(((global::Array) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return @value;
					}
					
					
					case 989275570:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						this.voice = ((global::nx3.PVoice) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return @value;
					}
					
					
					case 272654911:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						this.direction = ((global::nx3.EDirectionUD) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return @value;
					}
					
					
					case 834174833:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						this.@value = global::haxe.lang.Null<object>.ofDynamic<int>(@value);
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return @value;
					}
					
					
					case 1740850641:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						this.pnotes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				switch (hash){
					case 946786476:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("toString") ), ((int) (946786476) ))) );
					}
					
					
					case 1717209015:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getFrame") ), ((int) (1717209015) ))) );
					}
					
					
					case 109279277:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return this.frame;
					}
					
					
					case 1794224614:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNotesStemXPositions") ), ((int) (1794224614) ))) );
					}
					
					
					case 716772545:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return this.stavexpositions;
					}
					
					
					case 309561432:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getPVoice") ), ((int) (309561432) ))) );
					}
					
					
					case 989275570:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return this.voice;
					}
					
					
					case 529989321:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getDirection") ), ((int) (529989321) ))) );
					}
					
					
					case 881861181:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("setDirection") ), ((int) (881861181) ))) );
					}
					
					
					case 272654911:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return this.direction;
					}
					
					
					case 294620923:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getValue") ), ((int) (294620923) ))) );
					}
					
					
					case 834174833:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return (this.@value).toDynamic();
					}
					
					
					case 1740850641:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return this.pnotes;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				switch (hash){
					case 109279277:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return ((double) (global::haxe.lang.Runtime.toDouble(this.frame)) );
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				switch (hash){
					case 946786476:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return this.toString();
					}
					
					
					case 1717209015:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return this.getFrame();
					}
					
					
					case 1794224614:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return this.getNotesStemXPositions();
					}
					
					
					case 309561432:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return this.getPVoice();
					}
					
					
					case 529989321:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return this.getDirection();
					}
					
					
					case 881861181:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						this.setDirection(((global::nx3.EDirectionUD) (dynargs[0]) ));
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						break;
					}
					
					
					case 294620923:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return this.getValue();
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				baseArr.push("frame");
				#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				baseArr.push("stavexpositions");
				#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				baseArr.push("voice");
				#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				baseArr.push("direction");
				#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				baseArr.push("value");
				#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				baseArr.push("pnotes");
				#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
				{
					#line 11 "F:\\nx3\\src\\nx3\\PBeamgroup.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
		public override string ToString(){
			return this.toString();
		}
		
		
	}
}


