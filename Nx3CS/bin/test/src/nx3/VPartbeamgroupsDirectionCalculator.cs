
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VPartbeamgroupsDirectionCalculator : global::haxe.lang.HxObject {
		public    VPartbeamgroupsDirectionCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VPartbeamgroupsDirectionCalculator(global::nx3.VPart vpart){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
				global::nx3.VPartbeamgroupsDirectionCalculator.__hx_ctor_nx3_VPartbeamgroupsDirectionCalculator(this, vpart);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VPartbeamgroupsDirectionCalculator(global::nx3.VPartbeamgroupsDirectionCalculator __temp_me189, global::nx3.VPart vpart){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
				__temp_me189.vpart = vpart;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
				return new global::nx3.VPartbeamgroupsDirectionCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
				return new global::nx3.VPartbeamgroupsDirectionCalculator(((global::nx3.VPart) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.VPart vpart;
		
		public virtual   global::haxe.ds.ObjectMap<object, global::nx3.EDirectionUD> getBeamgroupsDirections(){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
				global::haxe.ds.ObjectMap<object, global::nx3.EDirectionUD> beamgroupsDirections = new global::haxe.ds.ObjectMap<object, global::nx3.EDirectionUD>();
				#line 21 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
				global::Array<object> partbeamgroups = this.vpart.getVoicesBeamgroups();
				#line 23 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
				global::Array<object> beamgroups0 = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (partbeamgroups[0]) ))) );
				global::nx3.EDirectionUAD voiceDirection0 = ((global::nx3.VVoice) (this.vpart.getVVoices()[0]) ).nvoice.direction;
				if (( voiceDirection0 == default(global::nx3.EDirectionUAD) )) {
					#line 25 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
					voiceDirection0 = global::nx3.EDirectionUAD.Auto;
				}
				
				#line 27 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
				if (( partbeamgroups.length == 1 )) {
					#line 29 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
					int _g = 0;
					#line 29 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
					while (( _g < beamgroups0.length )){
						#line 29 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						global::nx3.VBeamgroup beamgroup = ((global::nx3.VBeamgroup) (beamgroups0[_g]) );
						#line 29 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						 ++ _g;
						#line 31 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						global::nx3.EDirectionUD direction = default(global::nx3.EDirectionUD);
						switch (global::Type.enumIndex(voiceDirection0)){
							case 0:
							{
								#line 35 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								direction = global::nx3.EDirectionUD.Up;
								#line 35 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								break;
							}
							
							
							case 2:
							{
								#line 37 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								direction = global::nx3.EDirectionUD.Down;
								#line 37 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								break;
							}
							
							
							case 1:
							{
								#line 39 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								global::nx3.VBeamgroupDirectionCalculator calculator = new global::nx3.VBeamgroupDirectionCalculator(((global::nx3.VBeamgroup) (beamgroup) ));
								direction = calculator.getDirection();
								#line 38 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								break;
							}
							
							
						}
						
						#line 43 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						beamgroupsDirections.@set(beamgroup, direction);
					}
					
				}
				 else {
					#line 46 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
					if (( partbeamgroups.length == 2 )) {
						#line 48 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						global::Array<object> beamgroups1 = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (partbeamgroups[1]) ))) );
						global::nx3.EDirectionUAD voiceDirection1 = ((global::nx3.VVoice) (this.vpart.getVVoices()[1]) ).nvoice.direction;
						if (( voiceDirection1 == default(global::nx3.EDirectionUAD) )) {
							#line 50 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
							voiceDirection0 = global::nx3.EDirectionUAD.Auto;
						}
						
						#line 52 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						global::nx3.VVoice voice0 = ((global::nx3.VVoice) (this.vpart.getVVoices()[0]) );
						global::nx3.VVoice voice1 = ((global::nx3.VVoice) (this.vpart.getVVoices()[1]) );
						#line 55 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						if (( ( voiceDirection0 == global::nx3.EDirectionUAD.Auto ) && ( voiceDirection1 == global::nx3.EDirectionUAD.Auto ) )) {
							#line 57 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
							int voice0value = voice0.getValue();
							int voice1value = voice1.getValue();
							#line 60 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
							global::nx3.EDirectionUD direction1 = default(global::nx3.EDirectionUD);
							#line 62 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
							int bgPosition = 0;
							{
								#line 63 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								int _g1 = 0;
								#line 63 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								while (( _g1 < beamgroups0.length )){
									#line 63 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									global::nx3.VBeamgroup beamgroup1 = ((global::nx3.VBeamgroup) (beamgroups0[_g1]) );
									#line 63 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									 ++ _g1;
									#line 65 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									if (( bgPosition < voice1value )) {
										#line 67 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
										direction1 = global::nx3.EDirectionUD.Up;
									}
									 else {
										#line 71 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
										global::nx3.VBeamgroupDirectionCalculator calculator1 = new global::nx3.VBeamgroupDirectionCalculator(((global::nx3.VBeamgroup) (beamgroup1) ));
										direction1 = calculator1.getDirection();
									}
									
									#line 74 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									beamgroupsDirections.@set(beamgroup1, direction1);
									bgPosition += beamgroup1.getValue();
								}
								
							}
							
							#line 78 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
							int bgPosition1 = 0;
							{
								#line 79 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								int _g2 = 0;
								#line 79 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								while (( _g2 < beamgroups1.length )){
									#line 79 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									global::nx3.VBeamgroup beamgroup2 = ((global::nx3.VBeamgroup) (beamgroups1[_g2]) );
									#line 79 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									 ++ _g2;
									#line 81 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									if (( bgPosition1 < voice0value )) {
										#line 83 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
										direction1 = global::nx3.EDirectionUD.Down;
									}
									 else {
										#line 87 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
										global::nx3.VBeamgroupDirectionCalculator calculator2 = new global::nx3.VBeamgroupDirectionCalculator(((global::nx3.VBeamgroup) (beamgroup2) ));
										direction1 = calculator2.getDirection();
									}
									
									#line 90 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									beamgroupsDirections.@set(beamgroup2, direction1);
									bgPosition1 += beamgroup2.getValue();
								}
								
							}
							
						}
						 else {
							#line 96 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
							{
								#line 96 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								int _g3 = 0;
								#line 96 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								while (( _g3 < beamgroups0.length )){
									#line 96 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									global::nx3.VBeamgroup beamgroup3 = ((global::nx3.VBeamgroup) (beamgroups0[_g3]) );
									#line 96 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									 ++ _g3;
									#line 98 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									{
										#line 98 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
										global::nx3.EDirectionUD @value = global::nx3.EDirectionTools.uadToUd(voice0.nvoice.direction);
										#line 98 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
										beamgroupsDirections.@set(beamgroup3, @value);
									}
									
								}
								
							}
							
							#line 101 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
							{
								#line 101 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								int _g4 = 0;
								#line 101 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								while (( _g4 < beamgroups1.length )){
									#line 101 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									global::nx3.VBeamgroup beamgroup4 = ((global::nx3.VBeamgroup) (beamgroups1[_g4]) );
									#line 101 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									 ++ _g4;
									#line 103 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									{
										#line 103 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
										global::nx3.EDirectionUD value1 = global::nx3.EDirectionTools.uadToUd(voice1.nvoice.direction);
										#line 103 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
										beamgroupsDirections.@set(beamgroup4, value1);
									}
									
								}
								
							}
							
						}
						
					}
					 else {
						#line 109 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						throw global::haxe.lang.HaxeException.wrap("SHOULDN\'T HAPPEN");
					}
					
				}
				
				#line 112 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
				return beamgroupsDirections;
			}
			#line default
		}
		
		
		public virtual   void calculateBeamgroupsDirections(){
			unchecked {
				#line 118 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
				global::Array<object> partbeamgroups = this.vpart.getVoicesBeamgroups();
				#line 120 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
				global::Array<object> beamgroups0 = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (partbeamgroups[0]) ))) );
				global::nx3.EDirectionUAD voiceDirection0 = ((global::nx3.VVoice) (this.vpart.getVVoices()[0]) ).nvoice.direction;
				if (( voiceDirection0 == default(global::nx3.EDirectionUAD) )) {
					#line 122 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
					voiceDirection0 = global::nx3.EDirectionUAD.Auto;
				}
				
				#line 124 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
				if (( partbeamgroups.length == 1 )) {
					#line 126 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
					int _g = 0;
					#line 126 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
					while (( _g < beamgroups0.length )){
						#line 126 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						global::nx3.VBeamgroup beamgroup = ((global::nx3.VBeamgroup) (beamgroups0[_g]) );
						#line 126 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						 ++ _g;
						#line 128 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						global::nx3.EDirectionUD direction = default(global::nx3.EDirectionUD);
						switch (global::Type.enumIndex(voiceDirection0)){
							case 0:
							{
								#line 132 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								direction = global::nx3.EDirectionUD.Up;
								#line 132 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								break;
							}
							
							
							case 2:
							{
								#line 134 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								direction = global::nx3.EDirectionUD.Down;
								#line 134 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								break;
							}
							
							
							case 1:
							{
								#line 136 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								global::nx3.VBeamgroupDirectionCalculator calculator = new global::nx3.VBeamgroupDirectionCalculator(((global::nx3.VBeamgroup) (beamgroup) ));
								direction = calculator.getDirection();
								#line 135 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								break;
							}
							
							
						}
						
						#line 140 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						beamgroup.setCalculatedDirection(direction);
					}
					
				}
				 else {
					#line 143 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
					if (( partbeamgroups.length == 2 )) {
						#line 145 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						global::Array<object> beamgroups1 = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (partbeamgroups[1]) ))) );
						global::nx3.EDirectionUAD voiceDirection1 = ((global::nx3.VVoice) (this.vpart.getVVoices()[1]) ).nvoice.direction;
						if (( voiceDirection1 == default(global::nx3.EDirectionUAD) )) {
							#line 147 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
							voiceDirection0 = global::nx3.EDirectionUAD.Auto;
						}
						
						#line 149 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						global::nx3.VVoice voice0 = ((global::nx3.VVoice) (this.vpart.getVVoices()[0]) );
						global::nx3.VVoice voice1 = ((global::nx3.VVoice) (this.vpart.getVVoices()[1]) );
						#line 152 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						if (( ( voiceDirection0 == global::nx3.EDirectionUAD.Auto ) && ( voiceDirection1 == global::nx3.EDirectionUAD.Auto ) )) {
							#line 154 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
							int voice0value = voice0.getValue();
							int voice1value = voice1.getValue();
							#line 157 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
							global::nx3.EDirectionUD direction1 = default(global::nx3.EDirectionUD);
							#line 159 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
							int bgPosition = 0;
							{
								#line 160 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								int _g1 = 0;
								#line 160 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								while (( _g1 < beamgroups0.length )){
									#line 160 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									global::nx3.VBeamgroup beamgroup1 = ((global::nx3.VBeamgroup) (beamgroups0[_g1]) );
									#line 160 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									 ++ _g1;
									#line 162 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									if (( bgPosition < voice1value )) {
										#line 164 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
										direction1 = global::nx3.EDirectionUD.Up;
									}
									 else {
										#line 168 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
										global::nx3.VBeamgroupDirectionCalculator calculator1 = new global::nx3.VBeamgroupDirectionCalculator(((global::nx3.VBeamgroup) (beamgroup1) ));
										direction1 = calculator1.getDirection();
									}
									
									#line 171 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									beamgroup1.setCalculatedDirection(direction1);
									bgPosition += beamgroup1.getValue();
								}
								
							}
							
							#line 175 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
							int bgPosition1 = 0;
							{
								#line 176 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								int _g2 = 0;
								#line 176 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								while (( _g2 < beamgroups1.length )){
									#line 176 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									global::nx3.VBeamgroup beamgroup2 = ((global::nx3.VBeamgroup) (beamgroups1[_g2]) );
									#line 176 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									 ++ _g2;
									#line 178 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									if (( bgPosition1 < voice0value )) {
										#line 180 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
										direction1 = global::nx3.EDirectionUD.Down;
									}
									 else {
										#line 184 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
										global::nx3.VBeamgroupDirectionCalculator calculator2 = new global::nx3.VBeamgroupDirectionCalculator(((global::nx3.VBeamgroup) (beamgroup2) ));
										direction1 = calculator2.getDirection();
									}
									
									#line 187 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									beamgroup2.setCalculatedDirection(direction1);
									bgPosition1 += beamgroup2.getValue();
								}
								
							}
							
						}
						 else {
							#line 193 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
							{
								#line 193 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								int _g3 = 0;
								#line 193 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								while (( _g3 < beamgroups0.length )){
									#line 193 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									global::nx3.VBeamgroup beamgroup3 = ((global::nx3.VBeamgroup) (beamgroups0[_g3]) );
									#line 193 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									 ++ _g3;
									#line 195 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									beamgroup3.setCalculatedDirection(global::nx3.EDirectionTools.uadToUd(voice0.nvoice.direction));
								}
								
							}
							
							#line 198 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
							{
								#line 198 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								int _g4 = 0;
								#line 198 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
								while (( _g4 < beamgroups1.length )){
									#line 198 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									global::nx3.VBeamgroup beamgroup4 = ((global::nx3.VBeamgroup) (beamgroups1[_g4]) );
									#line 198 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									 ++ _g4;
									#line 200 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
									beamgroup4.setCalculatedDirection(global::nx3.EDirectionTools.uadToUd(voice1.nvoice.direction));
								}
								
							}
							
						}
						
					}
					 else {
						#line 206 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						throw global::haxe.lang.HaxeException.wrap("SHOULDN\'T HAPPEN");
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
				switch (hash){
					case 999970665:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						this.vpart = ((global::nx3.VPart) (@value) );
						#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
				switch (hash){
					case 774256317:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calculateBeamgroupsDirections") ), ((int) (774256317) ))) );
					}
					
					
					case 868538861:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBeamgroupsDirections") ), ((int) (868538861) ))) );
					}
					
					
					case 999970665:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						return this.vpart;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
				switch (hash){
					case 774256317:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						this.calculateBeamgroupsDirections();
						#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						break;
					}
					
					
					case 868538861:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						return this.getBeamgroupsDirections();
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
				baseArr.push("vpart");
				#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
				{
					#line 9 "F:\\nx3\\src\\nx3\\VPartbeamgroupsDirectionCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


