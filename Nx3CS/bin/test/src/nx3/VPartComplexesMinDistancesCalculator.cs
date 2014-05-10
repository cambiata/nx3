
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VPartComplexesMinDistancesCalculator : global::haxe.lang.HxObject {
		public    VPartComplexesMinDistancesCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VPartComplexesMinDistancesCalculator(global::nx3.VPart vpart){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				global::nx3.VPartComplexesMinDistancesCalculator.__hx_ctor_nx3_VPartComplexesMinDistancesCalculator(this, vpart);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VPartComplexesMinDistancesCalculator(global::nx3.VPartComplexesMinDistancesCalculator __temp_me188, global::nx3.VPart vpart){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				__temp_me188.vpart = vpart;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				return new global::nx3.VPartComplexesMinDistancesCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				return new global::nx3.VPartComplexesMinDistancesCalculator(((global::nx3.VPart) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.VPart vpart;
		
		public virtual   double getDistance(global::nx3.VComplex leftComplex, global::nx3.VComplex rightComplex){
			unchecked {
				#line 26 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				object left = this.getComplexRightside(leftComplex);
				object right = this.getComplexLeftside(rightComplex);
				#line 33 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				if (( ( rightComplex == default(global::nx3.VComplex) ) && ( leftComplex != default(global::nx3.VComplex) ) )) {
					#line 35 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					global::Array<object> vnotes = leftComplex.getVNotes();
					bool hasflag = false;
					{
						#line 37 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						int _g = 0;
						#line 37 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						while (( _g < vnotes.length )){
							#line 37 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
							global::nx3.VNote vnote = ((global::nx3.VNote) (vnotes[_g]) );
							#line 37 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
							 ++ _g;
							#line 39 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
							if (( string.Equals(global::Type.enumConstructor(vnote.nnote.type), "Note") && ( global::nx3.ENoteValTools.beaminglevel(vnote.nnote.@value) > 0 ) )) {
								#line 39 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
								hasflag = true;
							}
							
						}
						
					}
					
					#line 41 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					if (hasflag) {
						#line 43 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						right = this.getComplexRightside(leftComplex);
					}
					
				}
				
				#line 48 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				double minDistance = ( ( ((global::nx3.geom.Rectangle) (global::haxe.lang.Runtime.getField(left, "minrect", 1373081526, true)) ).width + ((global::nx3.geom.Rectangle) (global::haxe.lang.Runtime.getField(left, "minrect", 1373081526, true)) ).x ) +  - (((global::nx3.geom.Rectangle) (global::haxe.lang.Runtime.getField(right, "minrect", 1373081526, true)) ).x)  );
				#line 51 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				double rectsDistance = default(double);
				#line 51 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				{
					#line 51 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					double number = global::nx3.geom.RectanglesTools.getXIntersection(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (global::haxe.lang.Runtime.getField(left, "rects", 1723609807, true)) ))) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (global::haxe.lang.Runtime.getField(right, "rects", 1723609807, true)) ))) ));
					#line 51 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					int precision = 6;
					#line 51 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					number = ( number * global::System.Math.Pow(((double) (10) ), ((double) (precision) )) );
					#line 51 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					number = ( global::Math.round(number) / global::System.Math.Pow(((double) (10) ), ((double) (precision) )) );
					#line 51 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					rectsDistance = number;
				}
				
				#line 54 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				return global::System.Math.Max(((double) (minDistance) ), ((double) (rectsDistance) ));
			}
			#line default
		}
		
		
		public virtual   object getComplexRightside(global::nx3.VComplex complex){
			unchecked {
				#line 59 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				if (( complex == default(global::nx3.VComplex) )) {
					#line 59 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					{
						#line 59 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						global::nx3.geom.Rectangle __temp_odecl345 = new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (0) ), true));
						#line 59 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						return new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{1373081526, 1723609807}), new global::Array<object>(new object[]{__temp_odecl345, new global::Array<object>(new object[]{})}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{}));
					}
					
				}
				
				#line 61 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				global::Array<global::nx3.EDirectionUD> directions = default(global::Array<global::nx3.EDirectionUD>);
				#line 61 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				{
					#line 61 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					global::IMap<object, object> this1 = this.vpart.getVComplexDirections();
					#line 61 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					directions = ((global::Array<global::nx3.EDirectionUD>) (global::Array<object>.__hx_cast<global::nx3.EDirectionUD>(((global::Array) (this1.@get(complex).@value) ))) );
				}
				
				#line 64 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				global::Array<object> noterects = complex.getNotesHeadsRects(directions);
				#line 66 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				global::nx3.geom.Rectangle minrect = global::nx3.geom.RectanglesTools.unionAll(noterects);
				minrect.y = ((double) (-5) );
				minrect.height = ((double) (10) );
				#line 70 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				global::Array<object> rects = noterects;
				#line 73 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				global::Array<object> beamgroups = new global::Array<object>(new object[]{});
				global::nx3.VNote firstnote = default(global::nx3.VNote);
				#line 74 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				{
					#line 74 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					global::Array<object> array = complex.getVNotes();
					#line 74 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					firstnote = ((global::nx3.VNote) (array[0]) );
				}
				
				#line 75 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				global::nx3.VBeamgroup firstbeamgroup = default(global::nx3.VBeamgroup);
				#line 75 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				{
					#line 75 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					global::nx3.VVoice __temp_stmt346 = default(global::nx3.VVoice);
					#line 75 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					{
						#line 75 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						global::Array<object> array1 = this.vpart.getVVoices();
						#line 75 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						__temp_stmt346 = ((global::nx3.VVoice) (array1[0]) );
					}
					
					#line 75 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					global::IMap<object, object> this2 = __temp_stmt346.getNotesBeamgroups(default(global::Array<global::nx3.ENoteVal>));
					#line 75 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					firstbeamgroup = ((global::nx3.VBeamgroup) (this2.@get(firstnote).@value) );
				}
				
				#line 76 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				beamgroups.push(firstbeamgroup);
				#line 78 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				if (( complex.getVNotes().length == 2 )) {
					#line 80 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					global::nx3.VNote secondnote = default(global::nx3.VNote);
					#line 80 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					{
						#line 80 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						global::Array<object> array2 = complex.getVNotes();
						#line 80 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						secondnote = ((global::nx3.VNote) (array2[1]) );
					}
					
					#line 81 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					global::nx3.VBeamgroup secondbeamgroup = default(global::nx3.VBeamgroup);
					#line 81 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					{
						#line 81 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						global::nx3.VVoice __temp_stmt347 = default(global::nx3.VVoice);
						#line 81 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						{
							#line 81 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
							global::Array<object> array3 = this.vpart.getVVoices();
							#line 81 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
							__temp_stmt347 = ((global::nx3.VVoice) (array3[1]) );
						}
						
						#line 81 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						global::IMap<object, object> this3 = __temp_stmt347.getNotesBeamgroups(default(global::Array<global::nx3.ENoteVal>));
						#line 81 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						secondbeamgroup = ((global::nx3.VBeamgroup) (this3.@get(secondnote).@value) );
					}
					
					#line 82 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					beamgroups.push(secondbeamgroup);
				}
				
				#line 85 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				rects = rects.concat(complex.getStaveBasicRects(directions, beamgroups));
				#line 88 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				global::Array<object> dotrects = complex.getDotsRects(noterects, directions);
				if (( ( dotrects != default(global::Array<object>) ) && ( dotrects != new global::Array<object>(new object[]{}) ) )) {
					#line 89 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					rects = rects.concat(dotrects);
				}
				
				#line 90 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				return new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{1373081526, 1723609807}), new global::Array<object>(new object[]{minrect, rects}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{}));
			}
			#line default
		}
		
		
		public virtual   object getComplexLeftside(global::nx3.VComplex complex){
			unchecked {
				#line 95 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				if (( complex == default(global::nx3.VComplex) )) {
					#line 95 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					{
						#line 95 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						global::nx3.geom.Rectangle __temp_odecl348 = new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (0) ), true));
						#line 95 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						return new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{1373081526, 1723609807}), new global::Array<object>(new object[]{__temp_odecl348, new global::Array<object>(new object[]{})}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{}));
					}
					
				}
				
				#line 97 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				global::Array<global::nx3.EDirectionUD> directions = default(global::Array<global::nx3.EDirectionUD>);
				#line 97 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				{
					#line 97 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					global::IMap<object, object> this1 = this.vpart.getVComplexDirections();
					#line 97 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					directions = ((global::Array<global::nx3.EDirectionUD>) (global::Array<object>.__hx_cast<global::nx3.EDirectionUD>(((global::Array) (this1.@get(complex).@value) ))) );
				}
				
				#line 99 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				global::Array<object> noterects = complex.getNotesHeadsRects(directions);
				global::nx3.geom.Rectangle minrect = global::nx3.geom.RectanglesTools.unionAll(noterects);
				minrect.y = ((double) (-5) );
				minrect.height = ((double) (10) );
				global::Array<object> rects = noterects;
				#line 105 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				global::Array<object> vnotes = complex.getVNotes();
				#line 107 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				global::Array<object> beamgroups = new global::Array<object>(new object[]{});
				global::nx3.VNote firstnote = default(global::nx3.VNote);
				#line 108 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				{
					#line 108 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					global::Array<object> array = complex.getVNotes();
					#line 108 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					firstnote = ((global::nx3.VNote) (array[0]) );
				}
				
				#line 109 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				global::nx3.VBeamgroup firstbeamgroup = default(global::nx3.VBeamgroup);
				#line 109 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				{
					#line 109 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					global::nx3.VVoice __temp_stmt349 = default(global::nx3.VVoice);
					#line 109 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					{
						#line 109 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						global::Array<object> array1 = this.vpart.getVVoices();
						#line 109 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						__temp_stmt349 = ((global::nx3.VVoice) (array1[0]) );
					}
					
					#line 109 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					global::IMap<object, object> this2 = __temp_stmt349.getNotesBeamgroups(default(global::Array<global::nx3.ENoteVal>));
					#line 109 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					firstbeamgroup = ((global::nx3.VBeamgroup) (this2.@get(firstnote).@value) );
				}
				
				#line 110 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				beamgroups.push(firstbeamgroup);
				#line 112 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				if (( complex.getVNotes().length == 2 )) {
					#line 114 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					global::nx3.VNote secondnote = default(global::nx3.VNote);
					#line 114 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					{
						#line 114 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						global::Array<object> array2 = complex.getVNotes();
						#line 114 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						secondnote = ((global::nx3.VNote) (array2[1]) );
					}
					
					#line 115 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					global::nx3.VBeamgroup secondbeamgroup = default(global::nx3.VBeamgroup);
					#line 115 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					{
						#line 115 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						global::nx3.VVoice __temp_stmt350 = default(global::nx3.VVoice);
						#line 115 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						{
							#line 115 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
							global::Array<object> array3 = this.vpart.getVVoices();
							#line 115 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
							__temp_stmt350 = ((global::nx3.VVoice) (array3[1]) );
						}
						
						#line 115 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						global::IMap<object, object> this3 = __temp_stmt350.getNotesBeamgroups(default(global::Array<global::nx3.ENoteVal>));
						#line 115 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						secondbeamgroup = ((global::nx3.VBeamgroup) (this3.@get(secondnote).@value) );
					}
					
					#line 116 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					beamgroups.push(secondbeamgroup);
				}
				
				#line 119 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				rects = rects.concat(complex.getStaveBasicRects(directions, beamgroups));
				#line 122 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				global::Array<object> signsrects = complex.getSignsRects(noterects);
				if (( ( signsrects != default(global::Array<object>) ) && ( signsrects != new global::Array<object>(new object[]{}) ) )) {
					#line 123 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					rects = rects.concat(signsrects);
				}
				
				#line 125 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				return new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{1373081526, 1723609807}), new global::Array<object>(new object[]{minrect, rects}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{}));
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				switch (hash){
					case 999970665:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						this.vpart = ((global::nx3.VPart) (@value) );
						#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				switch (hash){
					case 242751352:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getComplexLeftside") ), ((int) (242751352) ))) );
					}
					
					
					case 1751274457:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getComplexRightside") ), ((int) (1751274457) ))) );
					}
					
					
					case 300766699:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getDistance") ), ((int) (300766699) ))) );
					}
					
					
					case 999970665:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						return this.vpart;
					}
					
					
					default:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				switch (hash){
					case 242751352:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						return this.getComplexLeftside(((global::nx3.VComplex) (dynargs[0]) ));
					}
					
					
					case 1751274457:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						return this.getComplexRightside(((global::nx3.VComplex) (dynargs[0]) ));
					}
					
					
					case 300766699:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						return this.getDistance(((global::nx3.VComplex) (dynargs[0]) ), ((global::nx3.VComplex) (dynargs[1]) ));
					}
					
					
					default:
					{
						#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				baseArr.push("vpart");
				#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
				{
					#line 15 "F:\\nx3\\src\\nx3\\VPartComplexesMinDistancesCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


