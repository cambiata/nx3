
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PPartbeamgroupsDirectionCalculator : global::haxe.lang.HxObject {
		public    PPartbeamgroupsDirectionCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PPartbeamgroupsDirectionCalculator(global::nx3.PPart ppart){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
				global::nx3.PPartbeamgroupsDirectionCalculator.__hx_ctor_nx3_PPartbeamgroupsDirectionCalculator(this, ppart);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PPartbeamgroupsDirectionCalculator(global::nx3.PPartbeamgroupsDirectionCalculator __temp_me113, global::nx3.PPart ppart){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
				__temp_me113.ppart = ppart;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
				return new global::nx3.PPartbeamgroupsDirectionCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
				return new global::nx3.PPartbeamgroupsDirectionCalculator(((global::nx3.PPart) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.PPart ppart;
		
		public virtual   void calculateBeamgroupsDirections(){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
				global::Array<object> partbeamgroups = new global::Array<object>(new object[]{});
				{
					#line 18 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
					int _g = 0;
					#line 18 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
					global::Array<object> _g1 = this.ppart.getVoices();
					#line 18 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
					while (( _g < _g1.length )){
						#line 18 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						global::nx3.PVoice pvoice = ((global::nx3.PVoice) (_g1[_g]) );
						#line 18 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						 ++ _g;
						#line 18 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						partbeamgroups.push(pvoice.getBeamgroups(default(global::Array<global::nx3.ENoteVal>)));
					}
					
				}
				
				#line 20 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
				global::Array<object> beamgroups0 = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (partbeamgroups[0]) ))) );
				global::nx3.EDirectionUAD voiceDirection0 = ((global::nx3.PVoice) (this.ppart.getVoices()[0]) ).nvoice.direction;
				if (( voiceDirection0 == default(global::nx3.EDirectionUAD) )) {
					#line 22 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
					voiceDirection0 = global::nx3.EDirectionUAD.Auto;
				}
				
				#line 24 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
				if (( partbeamgroups.length == 1 )) {
					#line 26 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
					int _g2 = 0;
					#line 26 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
					while (( _g2 < beamgroups0.length )){
						#line 26 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						global::nx3.PBeamgroup beamgroup = ((global::nx3.PBeamgroup) (beamgroups0[_g2]) );
						#line 26 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						 ++ _g2;
						#line 28 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						global::nx3.EDirectionUD direction = default(global::nx3.EDirectionUD);
						switch (global::Type.enumIndex(voiceDirection0)){
							case 0:
							{
								#line 32 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
								direction = global::nx3.EDirectionUD.Up;
								#line 32 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
								break;
							}
							
							
							case 2:
							{
								#line 34 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
								direction = global::nx3.EDirectionUD.Down;
								#line 34 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
								break;
							}
							
							
							case 1:
							{
								#line 36 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
								global::nx3.PBeamgroupDirectionCalculator calculator = new global::nx3.PBeamgroupDirectionCalculator(((global::nx3.PBeamgroup) (beamgroup) ));
								direction = calculator.getDirection();
								#line 35 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
								break;
							}
							
							
						}
						
						#line 40 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						beamgroup.setDirection(direction);
					}
					
				}
				 else {
					#line 43 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
					if (( partbeamgroups.length == 2 )) {
						#line 45 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						global::Array<object> beamgroups1 = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (partbeamgroups[1]) ))) );
						global::nx3.EDirectionUAD voiceDirection1 = ((global::nx3.PVoice) (this.ppart.getVoices()[1]) ).nvoice.direction;
						if (( voiceDirection1 == default(global::nx3.EDirectionUAD) )) {
							#line 47 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
							voiceDirection0 = global::nx3.EDirectionUAD.Auto;
						}
						
						#line 49 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						global::nx3.PVoice voice0 = ((global::nx3.PVoice) (this.ppart.getVoices()[0]) );
						global::nx3.PVoice voice1 = ((global::nx3.PVoice) (this.ppart.getVoices()[1]) );
						#line 52 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						if (( ( voiceDirection0 == global::nx3.EDirectionUAD.Auto ) && ( voiceDirection1 == global::nx3.EDirectionUAD.Auto ) )) {
							#line 54 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
							int voice0value = voice0.getValue();
							int voice1value = voice1.getValue();
							#line 57 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
							global::nx3.EDirectionUD direction1 = default(global::nx3.EDirectionUD);
							#line 59 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
							int bgPosition = 0;
							{
								#line 60 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
								int _g3 = 0;
								#line 60 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
								while (( _g3 < beamgroups0.length )){
									#line 60 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
									global::nx3.PBeamgroup beamgroup1 = ((global::nx3.PBeamgroup) (beamgroups0[_g3]) );
									#line 60 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
									 ++ _g3;
									#line 62 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
									if (( bgPosition < voice1value )) {
										#line 64 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
										direction1 = global::nx3.EDirectionUD.Up;
									}
									 else {
										#line 68 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
										global::nx3.PBeamgroupDirectionCalculator calculator1 = new global::nx3.PBeamgroupDirectionCalculator(((global::nx3.PBeamgroup) (beamgroup1) ));
										direction1 = calculator1.getDirection();
									}
									
									#line 71 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
									beamgroup1.setDirection(direction1);
									bgPosition += beamgroup1.getValue();
								}
								
							}
							
							#line 75 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
							int bgPosition1 = 0;
							{
								#line 76 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
								int _g4 = 0;
								#line 76 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
								while (( _g4 < beamgroups1.length )){
									#line 76 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
									global::nx3.PBeamgroup beamgroup2 = ((global::nx3.PBeamgroup) (beamgroups1[_g4]) );
									#line 76 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
									 ++ _g4;
									#line 78 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
									if (( bgPosition1 < voice0value )) {
										#line 80 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
										direction1 = global::nx3.EDirectionUD.Down;
									}
									 else {
										#line 84 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
										global::nx3.PBeamgroupDirectionCalculator calculator2 = new global::nx3.PBeamgroupDirectionCalculator(((global::nx3.PBeamgroup) (beamgroup2) ));
										direction1 = calculator2.getDirection();
									}
									
									#line 87 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
									beamgroup2.setDirection(direction1);
									bgPosition1 += beamgroup2.getValue();
								}
								
							}
							
						}
						 else {
							#line 93 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
							{
								#line 93 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
								int _g5 = 0;
								#line 93 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
								while (( _g5 < beamgroups0.length )){
									#line 93 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
									global::nx3.PBeamgroup beamgroup3 = ((global::nx3.PBeamgroup) (beamgroups0[_g5]) );
									#line 93 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
									 ++ _g5;
									#line 95 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
									beamgroup3.setDirection(global::nx3.EDirectionTools.uadToUd(voice0.nvoice.direction));
								}
								
							}
							
							#line 98 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
							{
								#line 98 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
								int _g6 = 0;
								#line 98 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
								while (( _g6 < beamgroups1.length )){
									#line 98 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
									global::nx3.PBeamgroup beamgroup4 = ((global::nx3.PBeamgroup) (beamgroups1[_g6]) );
									#line 98 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
									 ++ _g6;
									#line 100 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
									beamgroup4.setDirection(global::nx3.EDirectionTools.uadToUd(voice1.nvoice.direction));
								}
								
							}
							
						}
						
					}
					 else {
						#line 106 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						throw global::haxe.lang.HaxeException.wrap("SHOULDN\'T HAPPEN");
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
				switch (hash){
					case 1194515555:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						this.ppart = ((global::nx3.PPart) (@value) );
						#line 7 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
				switch (hash){
					case 774256317:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calculateBeamgroupsDirections") ), ((int) (774256317) ))) );
					}
					
					
					case 1194515555:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						return this.ppart;
					}
					
					
					default:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
				switch (hash){
					case 774256317:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						this.calculateBeamgroupsDirections();
						#line 7 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						break;
					}
					
					
					default:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 7 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
				baseArr.push("ppart");
				#line 7 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
				{
					#line 7 "F:\\nx3\\src\\nx3\\PPartbeamgroupsDirectionCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


