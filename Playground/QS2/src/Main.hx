package;

import haxe.rtti.Meta;
import neko.Lib;
using StringTools;
/**
 * ...
 * @author 
 */

class Main 
{
	
	static function main() 
	{
			var s = 'clef:G time:4/4 ';
			var s = 'c d e | a b c | a b c';
			var s = ' a b c /  a b c | a b c | a b c / a b c';
			var s = ' a b c | a b c </ a b c | a b c';
			
			var s = 'abc|abcde|x y z / a b |a b/ab%cd e f/i j|a</b c d <%a b c d<%a ';
			var s = 'aaa/a2|bbb%bbb|ccc/c2c2c2%c2b';
			var s = 'a|b|c</a2|b2|c2';
			var s = 'a|b|c<%A|B|C</a2|b2|c2<%A2|B2|C2';
			//var s = 'a b c |a b c';
			//var s = '1a  | 2a </ 1b | 2b';
			
			//var r = ~/\|(\S)/;
			/*
			var s = s.replace('|', ' | ');
			var s = s.replace('%', ' % ');
			var s = s.replace('/', ' / ');
			var s = s.replace('<', ' < ');
			var s = s.replace('  ', ' ');
			var s = s.replace('  ', ' ');
			var s = s.replace('  ', ' ');
			var s = s.replace('< /', '</');
			var s = s.replace('< %', '<%');
			trace(s);
			*/
			var bix = 0;
			var pix = 0;
			var vix = 0;
			trace([bix, pix, vix]);
			var v = '';
			var vdata : Array<Array<Array<String>>> = [];
			
			var linemode = (s.indexOf('</') > -1 || s.indexOf('<%') > -1);
			trace(linemode);
			while (s.length > 0) {
				
				if (s.startsWith('</')) { bix = 0;  pix++; vix = 0; trace([bix, pix, vix, v]); s = s.substr(2); v = ''; }
				if (s.startsWith('<%')) { bix = 0;  vix = 1; trace([bix, pix, vix, v]); s = s.substr(2); v = '';}
				if (s.startsWith('|')) { bix++;  if (!linemode) {pix = 0; vix = 0;} trace([bix, pix, vix, v]); s = s.substr(1); v = '';}
				if (s.startsWith('/')) { pix++; vix = 0; trace([bix, pix, vix, v]); s = s.substr(1); v = '';}
				if (s.startsWith('%')) { vix++; trace([bix, pix, vix, v]); s = s.substr(1); v = '';}
				else {
					v += s.charAt(0);
					if (vdata[bix] == null) vdata[bix] = [];
					if (vdata[bix][pix] == null) vdata[bix][pix] = [];
					if (vdata[bix][pix][vix] == null) vdata[bix][pix][vix] = '';
					
					vdata[bix][pix][vix] += s.charAt(0);
					s = s.substr(1);
				}
			}
			
			for (bdata in vdata) {
				trace(bdata);
			}
					
			
			/*
			trace(s);
			var qf = new QStringFixer(s);
			s = qf.fix();
			trace(s);
			
			var a = qf.getVoiceData(s);
			trace(a);
			var f = new FTest('a 2345|67</89');
			//new FTest(s).run();
			//f._trimS(1);
			f.run();
			*/
	}		
}

enum FType {
	Head;
}

typedef Fun = String->FType;

class FBase {
	var s:String;
	var funs:Array<Void->Void>;
	var fnames:Array<String>;
	var metas:Dynamic<Dynamic<Array<Dynamic>>>;
	
	public function new(s:String) {
		this.s = s;
		this.funs = [];
		this.fnames = [];
		var fields = Type.getInstanceFields(Type.getClass(this));
		metas = Meta.getFields(Type.getClass(this));
		for (field in fields) {
			if (field.startsWith('_')) continue;
			if (field.startsWith('run')) continue;
			var fun = Reflect.field(this, field);
			if (Reflect.isFunction(fun)) {
				funs.push(fun);
				fnames.push(field);
			}
		}		
	}
	
	public function run() {
		while (s.length > 0) {
			for (fname in fnames)
			{
				var prop = Reflect.getProperty(metas, fname);
				var token = prop.token[0];
				if (s.startsWith(token)) {
					Reflect.callMethod(this, Reflect.field(this, fname), []);
					break;
				}
			}
			trace('trim');
			_trimS(1);
		}
	}
	
	public function _trimS(pos:Int) {
		this.s = this.s.substr(pos);
		trace(this.s);
	}

}

class FTest extends FBase {
	
	@token("a")
	public function headA() {
		trace('RUNNING headA');
		this._trimS(1);
	}

	@token("b")
	public function headB() {
		trace('headB');
	}

	@token('|')
	public function newBar() {
		trace('newBar');
		_trimS(1);
	}
	
	@token('</')
	public function resetPart() {
		trace('resetPart');
		_trimS(2);
	}
	
}


class QStringFixer {
	var s:String;
	public function new(s:String) {
		this.s = s;
	}

	public function fix():String {
		var s = this.s;
			
		s = s.replace('</', '¤');
		s = s.replace('<%', '§');
		s = eregReplace(s, ~/\|\S/g, '| ');
		s = eregReplace(s, ~/\S\|/g, ' |', 1);
		s = eregReplace(s, ~/\/\S/g, '/ ');
		s = eregReplace(s, ~/\S\//g, ' /', 1);
		s = eregReplace(s, ~/%\S/g, '% ');
		s = eregReplace(s, ~/\S%/g, ' %', 1);
		
		s = s.replace('¤', '</');
		s = s.replace('§', '<%');
		s = eregReplace(s, ~/<\/\S/g, '</ ');
		s = eregReplace(s, ~/\S<\//g, ' </', 1);
		s = eregReplace(s, ~/<%\S/g, '<% ');
		s = eregReplace(s, ~/\S<%/g, ' <%', 1);			
		
		return s;
	}
	
	public function getVoiceData(s:String):Array<Array<String>>
	{
		var bix = 0;
		var pix = 0;
		var vix = 0;
		
		var result = new Array<Array<String>>();
		result[0] = [];
		result[0][0] = '';
		
		var vdata = '';
		var i = 0;
		while (s.length > 0) {
			if (s.charAt(0) == '|') { s = s.substr(i + 1); bix++; pix = 0; vix = 0; continue;  }
			if (s.charAt(0) == '/') { s = s.substr(i + 1); pix++; vix = 0; continue;  }
			if (s.charAt(0) == '%') { s = s.substr(i + 1); vix++; continue; }
			if (s.charAt(0) == '<') { 
				if (s.charAt(1) == '%') { s = s.substr(i + 2);  bix = 0;  vix++; continue; }
				if (s.charAt(1) == '/') { s = s.substr(i + 2); bix = 0;  pix++; continue; }
			}
			if (result[bix] == null) result[bix] = [];
			if (result[bix][pix] == null) result[bix][pix] = '';
			
			result[bix][pix] += s.charAt(0);
			s = s.substr(1);
		}

		return result;
	}
	
	
	static function eregReplace(s:String, r:EReg, replaceWith:String, replaceOffset = 0):String 
	{
			while (true) {
				r.match(s);
				try {
					//trace(r.matched(0)); 
					var pos = r.matchedPos();
					s = s.substr(0, pos.pos + replaceOffset) + replaceWith + s.substr(pos.pos + pos.len - 1 + replaceOffset);
					//trace(s);					
				} catch (e:Dynamic) break;
			}		
		 return s;
	}

	
	
}



typedef QSScore = Array<QSBar>;
typedef QSBar = Array<QSPart>;
typedef QSPart = Array<QSVoice>;
typedef QSVoice = String;
