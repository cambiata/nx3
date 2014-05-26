package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class NTools extends haxe.lang.HxObject
{
	public    NTools(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    NTools()
	{
		nx3.NTools.__hx_ctor_nx3_NTools(this);
	}
	
	
	public static   void __hx_ctor_nx3_NTools(nx3.NTools __temp_me87)
	{
		{
		}
		
	}
	
	
	public static   java.lang.Object noteRef(nx3.NNote nnote)
	{
		nx3.NVoice nvoice = nnote.nvoice;
		int noteIdx = nvoice.nnotes.indexOf(nnote, null);
		nx3.NPart npart = nvoice.npart;
		int voiceIdx = npart.nvoices.indexOf(nvoice, null);
		nx3.NBar nbar = npart.nbar;
		int partIdx = nbar.nparts.indexOf(npart, null);
		nx3.NScore nscore = nbar.nscore;
		int barIdx = nscore.nbars.indexOf(nbar, null);
		return new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"score"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{nscore}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"bar", "head", "note", "part", "voice"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (barIdx) )) ), ((java.lang.Object) (((double) (0) )) ), ((java.lang.Object) (((double) (noteIdx) )) ), ((java.lang.Object) (((double) (partIdx) )) ), ((java.lang.Object) (((double) (voiceIdx) )) )}));
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.NTools(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.NTools();
	}
	
	
}


