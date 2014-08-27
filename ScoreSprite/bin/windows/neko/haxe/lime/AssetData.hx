package lime;


import lime.utils.Assets;


class AssetData {

	private static var initialized:Bool = false;
	
	public static var library = new #if haxe3 Map <String, #else Hash <#end LibraryType> ();
	public static var path = new #if haxe3 Map <String, #else Hash <#end String> ();
	public static var type = new #if haxe3 Map <String, #else Hash <#end AssetType> ();	
	
	public static function initialize():Void {
		
		if (!initialized) {
			
			path.set ("wav/48.data", "wav/48.data");
			type.set ("wav/48.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/49.data", "wav/49.data");
			type.set ("wav/49.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/50.data", "wav/50.data");
			type.set ("wav/50.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/51.data", "wav/51.data");
			type.set ("wav/51.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/52.data", "wav/52.data");
			type.set ("wav/52.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/53.data", "wav/53.data");
			type.set ("wav/53.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/54.data", "wav/54.data");
			type.set ("wav/54.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/55.data", "wav/55.data");
			type.set ("wav/55.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/56.data", "wav/56.data");
			type.set ("wav/56.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/57.data", "wav/57.data");
			type.set ("wav/57.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/58.data", "wav/58.data");
			type.set ("wav/58.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/59.data", "wav/59.data");
			type.set ("wav/59.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/60.data", "wav/60.data");
			type.set ("wav/60.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/61.data", "wav/61.data");
			type.set ("wav/61.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/62.data", "wav/62.data");
			type.set ("wav/62.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/63.data", "wav/63.data");
			type.set ("wav/63.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/64.data", "wav/64.data");
			type.set ("wav/64.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/65.data", "wav/65.data");
			type.set ("wav/65.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/66.data", "wav/66.data");
			type.set ("wav/66.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/67.data", "wav/67.data");
			type.set ("wav/67.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/68.data", "wav/68.data");
			type.set ("wav/68.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/69.data", "wav/69.data");
			type.set ("wav/69.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/70.data", "wav/70.data");
			type.set ("wav/70.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/71.data", "wav/71.data");
			type.set ("wav/71.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/72.data", "wav/72.data");
			type.set ("wav/72.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/73.data", "wav/73.data");
			type.set ("wav/73.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/74.data", "wav/74.data");
			type.set ("wav/74.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/75.data", "wav/75.data");
			type.set ("wav/75.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/76.data", "wav/76.data");
			type.set ("wav/76.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/77.data", "wav/77.data");
			type.set ("wav/77.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/78.data", "wav/78.data");
			type.set ("wav/78.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/79.data", "wav/79.data");
			type.set ("wav/79.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/80.data", "wav/80.data");
			type.set ("wav/80.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/81.data", "wav/81.data");
			type.set ("wav/81.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/82.data", "wav/82.data");
			type.set ("wav/82.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/83.data", "wav/83.data");
			type.set ("wav/83.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/84.data", "wav/84.data");
			type.set ("wav/84.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/85.data", "wav/85.data");
			type.set ("wav/85.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/86.data", "wav/86.data");
			type.set ("wav/86.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/87.data", "wav/87.data");
			type.set ("wav/87.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/88.data", "wav/88.data");
			type.set ("wav/88.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/89.data", "wav/89.data");
			type.set ("wav/89.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/90.data", "wav/90.data");
			type.set ("wav/90.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/91.data", "wav/91.data");
			type.set ("wav/91.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/92.data", "wav/92.data");
			type.set ("wav/92.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/93.data", "wav/93.data");
			type.set ("wav/93.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/94.data", "wav/94.data");
			type.set ("wav/94.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/95.data", "wav/95.data");
			type.set ("wav/95.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			path.set ("wav/96.data", "wav/96.data");
			type.set ("wav/96.data", Reflect.field (AssetType, "binary".toUpperCase ()));
			
			
			initialized = true;
			
		} //!initialized
		
	} //initialize
	
	
} //AssetData
