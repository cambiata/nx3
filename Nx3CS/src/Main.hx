package ;
import nx3.NBars;
import nx3.NHead;
import nx3.NScore;
import nx3.PScore;
import nx3.xml.BarsXML;

/**
 * ...
 * @author Jonas Nyström
 */
class Main
{

	static public function main() 
	{
		var xmlStr = '<bars><bar time="C"><part clef="ClefG" key="Flat4"><voice><pause val="16"></pause><note val="16"><headx level="-2"></headx></note><note val="16"><headx level="-1" sign="Sharp"></headx></note><note val="16"><headx level="-2"></headx></note><note val="8"><headx level="1"></headx></note><note val="8"><headx level="-4" tie="Tie(Auto,0)"></headx></note><note val="16"><headx level="-4"></headx></note><note val="16"><headx level="-3"></headx></note><note val="16"><headx level="-2"></headx></note><note val="16"><headx level="-3"></headx></note><note val="8"><headx level="1"></headx></note><note val="8"><headx level="-5" tie="Tie(Auto,0)"></headx></note></voice><voice><pause val="1"></pause></voice></part><part clef="ClefF" key="Flat4"><voice><note val="8"><headx level="0"></headx></note><note val="8"><headx level="-1"></headx></note><note val="8"><headx level="-2"></headx></note><note val="8"><headx level="0"></headx></note><note val="8"><headx level="-4"></headx></note><note val="8"><headx level="-5" sign="Natural"></headx></note><note val="8"><headx level="-6" sign="Sharp"></headx></note><note val="8"><headx level="-4"></headx></note></voice></part></bar><bar><part><voice><note val="16"><headx level="-5"></headx></note><note val="16"><headx level="-4"></headx></note><note val="16"><headx level="-3"></headx></note><note val="16"><headx level="-2"></headx></note><note><headx level="-6" tie="Tie(Auto,0)"></headx></note><note val="16"><headx level="-6"></headx></note><note val="16"><headx level="-5" sign="Sharp"></headx></note><note val="16"><headx level="-4" sign="Sharp"></headx></note><note val="16"><headx level="-5"></headx></note><note val="8."><headx level="-5"></headx></note><note val="16"><headx level="-6"></headx></note></voice><voice><pause val="16"></pause><note val="16"><headx level="1"></headx></note><note val="16"><headx level="2" sign="Sharp"></headx></note><note val="16"><headx level="1"></headx></note><note val="8"><headx level="4"></headx></note><note val="8"><headx level="-1" tie="Tie(Auto,0)"></headx></note><note val="16"><headx level="-1"></headx></note><note val="16"><headx level="0" sign="Natural"></headx></note><note val="16"><headx level="1"></headx></note><note val="16"><headx level="0"></headx></note><note val="8"><headx level="4"></headx></note><note val="8"><headx level="-2" tie="Tie(Auto,0)"></headx></note></voice></part><part><voice><note><headx level="-7" tie="Tie(Auto,0)"></headx></note><note val="16"><headx level="-7"></headx></note><note val="16"><headx level="-6" sign="Natural"></headx></note><note val="16"><headx level="-5" sign="Natural"></headx></note><note val="16"><headx level="-4"></headx></note><note><headx level="-8"></headx></note><note><headx level="-1"></headx></note></voice></part></bar><bar><part><voice><note><headx level="-6" tie="Tie(Auto,0)"></headx></note><note val="16"><headx level="-6"></headx></note><note val="16"><headx level="-2"></headx></note><note val="16"><headx level="-1" sign="Sharp"></headx></note><note val="16"><headx level="-2"></headx></note><note><headx level="-5" sign="Natural" tie="Tie(Auto,0)"></headx></note><note val="16"><headx level="-5"></headx></note><note val="16"><headx level="-1" sign="Sharp"></headx></note><note val="16"><headx level="0" sign="Natural"></headx></note><note val="16"><headx level="-1"></headx></note></voice><voice><note val="16"><headx level="-2"></headx></note><note val="16"><headx level="-1"></headx></note><note val="16"><headx level="0" sign="Natural"></headx></note><note val="16"><headx level="-1"></headx></note><note><headx level="-4" tie="Tie(Auto,0)"></headx></note><note val="16"><headx level="-4"></headx></note><note val="16"><headx level="0"></headx></note><note val="16"><headx level="1"></headx></note><note val="16"><headx level="0"></headx></note><note><headx level="-3" tie="Tie(Auto,0)"></headx></note></voice></part><part><voice><note><headx level="3"></headx></note><pause></pause><pause val="2"></pause></voice></part></bar><bar><part><voice><note val="4."><headx level="-4"></headx></note><note val="8"><headx level="-6"></headx></note><note><headx level="-5" tie="Tie(Auto,0)"></headx></note><note val="16"><headx level="-5"></headx></note><note val="16"><headx level="-4"></headx></note><note val="16"><headx level="-3"></headx></note><note val="16"><headx level="-4"></headx></note></voice><voice><note val="8"><headx level="-3"></headx></note><note val="8"><headx level="1"></headx></note><note val="16"><headx level="-2"></headx></note><note val="16"><headx level="-3"></headx></note><note val="16"><headx level="-2"></headx></note><note val="16"><headx level="-1" sign="Natural"></headx></note><note val="8."><headx level="0" sign="Natural"></headx></note><note val="16"><headx level="-1" sign="Sharp"></headx></note><note><headx level="-1"></headx></note></voice></part><part><voice><pause val="16"></pause><note val="16"><headx level="0"></headx></note><note val="16"><headx level="1" sign="Sharp"></headx></note><note val="16"><headx level="0"></headx></note><note val="8"><headx level="3"></headx></note><note val="8"><headx level="-2" tie="Tie(Auto,0)"></headx></note><note val="16"><headx level="-2"></headx></note><note val="16"><headx level="-1"></headx></note><note val="16"><headx level="0"></headx></note><note val="16"><headx level="-1"></headx></note><note val="8"><headx level="3"></headx></note><note val="8"><headx level="-3" tie="Tie(Auto,0)"></headx></note></voice></part></bar><bar><part><voice><note><headx level="-2"></headx></note><pause val="16"></pause><note val="16"><headx level="-7"></headx></note><note val="16"><headx level="-6"></headx></note><note val="16"><headx level="-7"></headx></note><note><headx level="-3" tie="Tie(Auto,0)"></headx></note><note val="16"><headx level="-3"></headx></note><note val="16"><headx level="-6"></headx></note><note val="16"><headx level="-5"></headx></note><note val="16"><headx level="-6"></headx></note></voice><voice><note val="16"><headx level="-2"></headx></note><note val="16"><headx level="-2"></headx></note><note val="16"><headx level="-1" sign="Sharp"></headx></note><note val="16"><headx level="-2"></headx></note><note><headx level="2" tie="Tie(Auto,0)"></headx></note><note val="16"><headx level="2"></headx></note><note val="16"><headx level="-1" sign="Natural"></headx></note><note val="16"><headx level="0"></headx></note><note val="16"><headx level="-1"></headx></note><note><headx level="3" tie="Tie(Auto,0)"></headx></note></voice></part><part><voice><note val="16"><headx level="-3"></headx></note><note val="16"><headx level="-2"></headx></note><note val="16"><headx level="-1"></headx></note><note val="16"><headx level="0"></headx></note><note><headx level="-5" tie="Tie(Auto,0)"></headx></note><note val="16"><headx level="-5"></headx></note><note val="16"><headx level="-1"></headx></note><note val="16"><headx level="0"></headx></note><note val="16"><headx level="1"></headx></note><note><headx level="-4" tie="Tie(Auto,0)"></headx></note></voice></part></bar><bar><part><voice><note><headx level="-2" tie="Tie(Auto,0)"></headx></note><note val="16"><headx level="-2"></headx></note><note val="16"><headx level="-2"></headx></note><note val="16"><headx level="-3"></headx></note><note val="16"><headx level="-4"></headx></note><note><headx level="-5" tie="Tie(Auto,0)"></headx></note><note val="16"><headx level="-5"></headx></note><note val="16"><headx level="-4"></headx></note><note val="16"><headx level="-3"></headx></note><note val="16"><headx level="-2"></headx></note></voice><voice><note val="16"><headx level="3"></headx></note><note val="16"><headx level="0"></headx></note><note val="16"><headx level="1"></headx></note><note val="16"><headx level="-1"></headx></note><note><headx level="0" tie="Tie(Auto,0)"></headx></note><note val="16"><headx level="0"></headx></note><note val="16"><headx level="-1"></headx></note><note val="16"><headx level="0"></headx></note><note val="16"><headx level="1"></headx></note><note val="16"><headx level="0"></headx></note><note val="16"><headx level="1"></headx></note><note val="16"><headx level="2"></headx></note><note val="16"><headx level="3"></headx></note></voice></part><part><voice><note val="16"><headx level="-4"></headx></note><note val="16"><headx level="0"></headx></note><note val="16"><headx level="1"></headx></note><note val="16"><headx level="0"></headx></note><note val="8"><headx level="4"></headx></note><note val="8"><headx level="-2" tie="Tie(Auto,0)"></headx></note><note val="16"><headx level="-2"></headx></note><note val="16"><headx level="-1"></headx></note><note val="16"><headx level="0"></headx></note><note val="16"><headx level="-1"></headx></note><note val="8"><headx level="1"></headx></note><note val="8"><headx level="-5" tie="Tie(Auto,0)"></headx></note></voice></part></bar></bars><bars><bar><part><voice><note val="2"><headx level="-1" tie="Tie(Auto,0)"></headx></note><note val="16"><headx level="-1"></headx></note><note val="16"><headx level="0"></headx></note><note val="16"><headx level="1"></headx></note><note val="16"><headx level="0"></headx></note><note val="16"><headx level="2"></headx></note><note val="16"><headx level="-2"></headx></note><note val="16"><headx level="-1"></headx></note><note val="16"><headx level="-2"></headx></note></voice><voice><note val="8"><headx level="4"></headx></note><note val="8"><headx level="0" tie="Tie(Auto,0)"></headx></note><note val="16"><headx level="0"></headx></note><note val="16"><headx level="1"></headx></note><note val="16"><headx level="2"></headx></note><note val="16"><headx level="1"></headx></note><note val="2"><headx level="3" tie="Tie(Auto,0)"></headx></note></voice></part><part><voice><note val="16"><headx level="-5"></headx></note><note val="16"><headx level="-4"></headx></note><note val="16"><headx level="-3"></headx></note><note val="16"><headx level="-4"></headx></note><note val="8"><headx level="-2"></headx></note><note val="8"><headx level="-8" sign="Flat"></headx></note><note val="8"><headx level="-7"></headx></note><note val="8"><headx level="-6"></headx></note><note val="8"><headx level="-5"></headx></note><note val="8"><headx level="-4"></headx></note></voice></part></bar><bar><part><voice><note val="16"><headx level="2"></headx></note><note val="16"><headx level="0"></headx></note><note val="16"><headx level="1"></headx></note><note val="16"><headx level="0" tie="Tie(Auto,0)"></headx></note><note val="16"><headx level="0"></headx></note><note val="16"><headx level="-1"></headx></note><note val="16"><headx level="0"></headx></note><note val="16"><headx level="-1"></headx></note><note><headx level="1"></headx></note><pause val="8"></pause><note val="8"><headx level="-4" tie="Tie(Auto,0)"></headx></note></voice><voice><note><headx level="3"></headx></note><note><headx level="4"></headx></note><pause val="16"></pause><note val="16"><headx level="3"></headx></note><note val="16"><headx level="4"></headx></note><note val="16"><headx level="3"></headx></note><note val="8"><headx level="6"></headx></note><note val="8"><headx level="1" tie="Tie(Auto,0)"></headx></note></voice></part><part><voice><note val="8"><headx level="-5"></headx></note><note val="8"><headx level="-3"></headx></note><note val="8"><headx level="-6"></headx></note><note val="8"><headx level="1"></headx></note><note val="8"><headx level="5"></headx></note><note val="8"><headx level="4"></headx></note><note val="8"><headx level="3"></headx></note><note val="8"><headx level="5"></headx></note></voice></part></bar><bar><part><voice><note><headx level="6"></headx></note><note><headx level="5"></headx></note><note><headx level="4"></headx></note><note val="8"><headx level="3"></headx></note><note val="8"><headx level="2"></headx></note></voice></part><part><voice><note val="2"><headx level="6"></headx></note><note val="2"><headx level="5"></headx></note></voice></part></bar><bar><part><voice><note><headx level="4"></headx></note><note><headx level="3"></headx></note><note><headx level="2"></headx></note><note><headx level="-1"></headx></note></voice></part><part><voice><note><headx level="-1"></headx></note><note><headx level="0"></headx></note><note><headx level="1"></headx></note><note val="16"><headx level="2"></headx></note><note val="16"><headx level="1"></headx></note><note val="16"><headx level="2"></headx></note><note val="16"><headx level="3"></headx></note></voice></part></bar><bar><part><voice><note val="8"><headx level="0"></headx></note><note><headx level="1"></headx></note><note val="8"><headx level="2"></headx></note><note val="8"><headx level="3"></headx></note><note><headx level="2"></headx></note><note val="8"><headx level="6"></headx></note></voice></part><part><voice><note><headx level="4"></headx></note><note><headx level="3"></headx></note><note><headx level="2"></headx></note><note><headx level="6"></headx></note></voice></part></bar></bars> ';
		var nbars:NBars = BarsXML.fromXmlStr(xmlStr);
		var nscore = new NScore(nbars);
		var score = new PScore(nscore);
		return score;	
		
		trace('cs');
	}
	
}