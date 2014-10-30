package cx;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class FileTools extends haxe.lang.HxObject
{
	public    FileTools(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    FileTools()
	{
		cx.FileTools.__hx_ctor_cx_FileTools(this);
	}
	
	
	public static   void __hx_ctor_cx_FileTools(cx.FileTools __temp_me22)
	{
		{
		}
		
	}
	
	
	public static   void saveContent(java.lang.String filename, java.lang.String content)
	{
		try 
		{
			java.io.File file = new java.io.File(haxe.lang.Runtime.toString(filename));
			java.io.BufferedWriter output = new java.io.BufferedWriter(((java.io.Writer) (new java.io.FileWriter(((java.io.File) (file) ))) ));
			output.write(haxe.lang.Runtime.toString(content));
			output.close();
		}
		catch (java.lang.Throwable __temp_catchallException300)
		{
			java.lang.Object __temp_catchall301 = __temp_catchallException300;
			if (( __temp_catchall301 instanceof haxe.lang.HaxeException )) 
			{
				__temp_catchall301 = ((haxe.lang.HaxeException) (__temp_catchallException300) ).obj;
			}
			
			{
				java.lang.Object e = __temp_catchall301;
				haxe.Log.trace.__hx_invoke2_o(0.0, e, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"cx.FileTools", "FileTools.hx", "saveContent"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (46) )) )})));
			}
			
		}
		
		
	}
	
	
	public static   java.lang.String getContent(java.lang.String filename)
	{
		try 
		{
			java.io.BufferedReader bufferReader = new java.io.BufferedReader(((java.io.Reader) (new java.io.FileReader(haxe.lang.Runtime.toString(filename))) ));
			java.lang.StringBuilder stringBuilder = new java.lang.StringBuilder();
			java.lang.String line = bufferReader.readLine();
			while (( line != null ))
			{
				stringBuilder.append(haxe.lang.Runtime.toString(line));
				stringBuilder.append(haxe.lang.Runtime.toString("\n"));
				line = bufferReader.readLine();
			}
			
			return stringBuilder.toString();
		}
		catch (java.lang.Throwable __temp_catchallException302)
		{
			java.lang.Object __temp_catchall303 = __temp_catchallException302;
			if (( __temp_catchall303 instanceof haxe.lang.HaxeException )) 
			{
				__temp_catchall303 = ((haxe.lang.HaxeException) (__temp_catchallException302) ).obj;
			}
			
			{
				java.lang.Object e = __temp_catchall303;
				haxe.Log.trace.__hx_invoke2_o(0.0, e, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"cx.FileTools", "FileTools.hx", "getContent"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (66) )) )})));
			}
			
		}
		
		
		throw haxe.lang.HaxeException.wrap(( "Could not read the file " + filename ));
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new cx.FileTools(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new cx.FileTools();
	}
	
	
}


