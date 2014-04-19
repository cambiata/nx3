package nx3.test;

import haxe.unit.TestCase;
import nx3.EDirectionUD;
import nx3.NBar;
import nx3.NHead;
import nx3.NNote;
import nx3.NPart;
import nx3.NVoice;
import nx3.PComplex;
import nx3.PPart;
import nx3.PPartComplexesGenerator;
import nx3.PVoice;
import nx3.QNote.QLyric4;
import nx3.QNote.QNote4;
import nx3.QVoice;
using cx.ArrayTools;
using nx3.VMapTools;
using Lambda;
/**
 * ...
 * @author Jonas Nyström
 */
@:access(nx3.PPartComplexesGenerator)
class TestP extends TestCase
{

	public function testPNote()
	{
		var nnote = new NNote([new NHead(0)]);
		var pnote = new PNote(nnote);
		this.assertEquals(pnote.nnote.nheads.length, 1);
		this.assertEquals(pnote.getPHeads().length, 1);
		this.assertEquals(pnote.getPHeads().first().pnote, pnote);
	}
	
	public function testPVoice()
	{
		var nvoice =  new NVoice([new NNote([new NHead(0)])]);
		var pvoice = new PVoice(nvoice);
		this.assertEquals(pvoice.nvoice.nnotes.length, 1);
		this.assertEquals(pvoice.getPNotes().length, 1);
		this.assertEquals(pvoice.getPNotes().first().pvoice, pvoice);		
	}
	
	public function testPVoiceBeamgroups()
	{
		var pvoice = new PVoice(new QVoice([8, 8, 8, 8, 8, 8]));
		var beamgroups:PBeamgroups = pvoice.getBeamgroups([ENoteVal.Nv4dot]);
		this.assertEquals(2, beamgroups.length);
		this.assertEquals(3, beamgroups[0].pnotes.length);
		this.assertEquals(3, beamgroups[1].pnotes.length);		
		this.assertEquals(pvoice.getPNotes().first().getBeamgroup(), beamgroups.first());
		this.assertEquals(pvoice.getPNotes().second().getBeamgroup(), beamgroups.first());
		this.assertEquals(pvoice.getPNotes().third().getBeamgroup(), beamgroups.first());
		this.assertEquals(pvoice.getPNotes().fourth().getBeamgroup(), beamgroups.second());
		this.assertEquals(pvoice.getPNotes().fifth().getBeamgroup(), beamgroups.second());
		this.assertEquals(pvoice.getPNotes().sixth().getBeamgroup(), beamgroups.second());		
	}
	
	public function testPVoiceBeamgroupsPNote()
	{
		var pvoice = new PVoice(new QVoice([8, 8, 8, 8, 8, 8]));	
		var beamgroup:PBeamgroup = pvoice.getPNotes().first().getBeamgroup();
		this.assertEquals(beamgroup.pnotes.first(), pvoice.getPNotes().first());
		this.assertEquals(beamgroup.pnotes.second(), pvoice.getPNotes().second());
	}
	
	public function testBeamgroupDirection()
	{
		var calculator = new PBeamgroupDirectionCalculator(new PBeamgroup([new PNote(new QNote4(0))]));
		var direction = calculator.getDirection();
		this.assertEquals(calculator.getDirection(), EDirectionUD.Down);
	}
	
	public function testPartbeamgroupsDirectionsTwoVoices()
	{
		var vpart = new PPart(new NPart([
			new QVoice([8, 8, 8, 8], [ -1, -1, -1, -1]),
			new QVoice([8,8], [1, 1]),
		]));	
		
		this.assertEquals(vpart.getPVoices().first().getBeamgroups().first().getDirection(), EDirectionUD.Up);
		this.assertEquals(vpart.getPVoices().first().getBeamgroups().second().getDirection(), EDirectionUD.Down);
		this.assertEquals(vpart.getPVoices().second().getBeamgroups().first().getDirection(), EDirectionUD.Down);
	}	

	public function testPVoiceNoteDirections()
	{
		var vpart = new PPart(new NPart([
			new QVoice([8, 8, 8, 8], [ -1, -1, -1, -1]),
			new QVoice([8,8], [1, 1]),
		]));	
		
		var voice0 = vpart.getPVoices().first();
		this.assertEquals(voice0.getPNotes().first().getDirection(), EDirectionUD.Up);
		this.assertEquals(voice0.getPNotes().second().getDirection(), EDirectionUD.Up);
		this.assertEquals(voice0.getPNotes().third().getDirection(), EDirectionUD.Down);
		this.assertEquals(voice0.getPNotes().fourth().getDirection(), EDirectionUD.Down);
		var voice1 = vpart.getPVoices().second();
		this.assertEquals(voice1.getPNotes().first().getDirection(), EDirectionUD.Down);
		this.assertEquals(voice1.getPNotes().second().getDirection(), EDirectionUD.Down);
	}	
	
	
	public function testPPart()
	{
		var npart =  new NPart([new NVoice([new NNote([new NHead(0)])])]);
		var ppart = new PPart(npart);
		this.assertEquals(ppart.npart.nvoices.length, 1);
		this.assertEquals(ppart.getPVoices().length, 1);
		this.assertEquals(ppart.getPVoices().first().ppart, ppart);		
	}	
	
	public function testPPartComplexesGenerator()
	{
		var pvoice = new PVoice(new QVoice([4, 8, 8, 2]));
		var generator = new PPartComplexesGenerator([pvoice]);
		
		var complexes = generator.getComplexes();
		var keys = generator.positionsMap.keys().keysToArray();
		keys.sort(function(a, b) { return Reflect.compare(a, b); } );			
		this.assertEquals(keys.toString(), [0, 3024, 4536, 6048].toString());
		this.assertEquals(complexes.length, 4);

		var voice0 = new PVoice(new QVoice([4, 8, 8, 2]));
		var voice1 = new PVoice(new QVoice([4, 4, 2]));
		var generator = new PPartComplexesGenerator([voice0, voice1]);
		var complexes = generator.getComplexes();
		var keys = generator.positionsMap.keys().keysToArray();
		keys.sort(function(a, b) { return Reflect.compare(a, b); } );					
		this.assertEquals(keys.toString(), [0, 3024, 4536, 6048].toString());
		this.assertEquals(complexes.length, 4);
		this.assertEquals(complexes.first().getPNotes().length, 2);
		this.assertEquals(complexes.second().getPNotes().length, 2);
		this.assertEquals(complexes.third().getPNotes().length, 1);
		this.assertEquals(complexes.fourth().getPNotes().length, 2);	
		/*
	*/
	}
	
	public function testPPartComplexes2()
	{
		var ppart = new PPart(new NPart([
			new QVoice([4, 8, 8, 2]),
			new QVoice([4, 4, 2]),
		]));
		var complexes = ppart.getPComplexes();
		var positions = complexes.map(function(v:PComplex) { return v.getPosition(); } );
		this.assertEquals(positions.toString(), [0, 3024, 4536, 6048].toString());		
		this.assertEquals(complexes.first().getPNotes().length, 2);
		this.assertEquals(complexes.first(), ppart.getPVoices().first().getPNotes().first().getComplex());
		this.assertEquals(complexes.first(), ppart.getPVoices().second().getPNotes().first().getComplex());
		this.assertEquals(complexes.second().getPNotes().length, 2);
		this.assertEquals(complexes.second(), ppart.getPVoices().first().getPNotes().second().getComplex());
		this.assertEquals(complexes.second(), ppart.getPVoices().second().getPNotes().second().getComplex());
		this.assertEquals(complexes.third().getPNotes().length, 1);
		this.assertEquals(complexes.third(), ppart.getPVoices().first().getPNotes().third().getComplex());
		this.assertEquals(complexes.fourth().getPNotes().length, 2);
		this.assertEquals(complexes.fourth(), ppart.getPVoices().first().getPNotes().fourth().getComplex());
		this.assertEquals(complexes.fourth(), ppart.getPVoices().second().getPNotes().third().getComplex());		

		
		var ppart = new PPart(new NPart([
			new QVoice([4, 2, 4]),
			new QVoice([2, 4, 4]),
		]));		
		
		var note0 = ppart.getPVoices().first().getPNotes().first();
		var complex = note0.getComplex();
		this.assertEquals(note0, complex.getPNotes().first());
		
		var complexes = ppart.getPComplexes();
		this.assertEquals(complexes.first().getPNotes().length, 2);
		this.assertEquals(complexes.first(), ppart.getPVoices().first().getPNotes().first().getComplex());
		this.assertEquals(complexes.first(), ppart.getPVoices().second().getPNotes().first().getComplex());
		this.assertEquals(complexes.second().getPNotes().length, 1);
		this.assertEquals(complexes.second(), ppart.getPVoices().first().getPNotes().second().getComplex());
		this.assertEquals(complexes.third().getPNotes().length, 1);
		this.assertEquals(complexes.third(), ppart.getPVoices().second().getPNotes().second().getComplex());
		this.assertEquals(complexes.fourth().getPNotes().length, 2);
		this.assertEquals(complexes.fourth(), ppart.getPVoices().first().getPNotes().third().getComplex());
		this.assertEquals(complexes.fourth(), ppart.getPVoices().second().getPNotes().third().getComplex());		
	}
	
	public function testPBar()
	{
		var nbar =  new NBar( [new NPart([new NVoice([new NNote([new NHead(0)])])])]);
		var pbar = new PBar(nbar);
		this.assertEquals(pbar.nbar.nparts.length, 1);
		this.assertEquals(pbar.getPParts().length, 1);
		this.assertEquals(pbar.getPParts().first().pbar, pbar);		
	}		
	
	
}	