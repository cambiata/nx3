package lime;


import lime.utils.Assets;


class AssetData {

	private static var initialized:Bool = false;
	
	public static var library = new #if haxe3 Map <String, #else Hash <#end LibraryType> ();
	public static var path = new #if haxe3 Map <String, #else Hash <#end String> ();
	public static var type = new #if haxe3 Map <String, #else Hash <#end AssetType> ();	
	
	public static function initialize():Void {
		
		if (!initialized) {
			
			path.set ("assets/60.data", "assets/60.data");
			type.set ("assets/60.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/chromatic.data", "assets/chromatic.data");
			type.set ("assets/chromatic.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/openfl.svg", "assets/openfl.svg");
			type.set ("assets/openfl.svg", Reflect.field (AssetType, "text".toUpperCase ()));
			path.set ("assets/test.data", "assets/test.data");
			type.set ("assets/test.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("assets/test2.data", "assets/test2.data");
			type.set ("assets/test2.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			
			
			initialized = true;
			
		} //!initialized
		
	} //initialize
	
	
} //AssetData
