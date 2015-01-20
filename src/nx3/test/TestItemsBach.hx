package nx3.test;
import nx3.NScore;
import nx3.xml.ScoreXML;

/**
 * TestItemsBach
 * @author Jonas Nyström
 */
class TestItemsBach 
{

public static function scoreTplEssDur():NScore {
	var xmlStr = '
		<score>
			<config test="12345"/>
			<bar time="C">
			
			<part clef="ClefG" key="Flat3"><voice>
				<note><headx level="4"/></note>
				<note><headx level="3"/></note>
				<note><headx level="2"/></note>
				<note><headx level="1"/></note>
				<note><headx level="0"/></note>
				<note><headx level="-1"/></note>
				<note><headx level="-2"/></note>				
				<note><headx level="-3"/></note>				
			</voice></part>
			
			<part clef="ClefG" key="Flat3" type="tplchain"><voice>
				<tpl level="0" />
				<tpl level="-1" />
				<tpl level="-2" />
				<tpl level="-3" />
				<tpl level="-4" />
				<tpl level="-5" />
				<tpl level="-6" />
				<tpl level="-7" />
			</voice></part>
			
			</bar>
		</score>
		';
		var nscore = ScoreXML.fromXmlStr(xmlStr);		
		return nscore;			
	
}
	
	
public static function scoreBachSinfonia4():NScore
	{		
		var xmlStr = '<score>
	<config test="12345" />
	<bar time="C">
		<part key="Flat1"
			  clef="ClefG">
			<voice>
				<pause level="-5"
					   val="16" />
				<note val="16">
					<headx level="-2" />
				</note>
				<note val="16">
					<headx level="-1"
						   sign="Sharp" />
				</note>
				<note val="16">
					<headx level="-2" />
				</note>
				<note val="8">
					<headx level="1" />
				</note>
				<note val="8">
					<headx level="-4"
						   tie="true" />
				</note>
				<note val="16">
					<headx level="-4" />
				</note>
				<note val="16">
					<headx level="-3" />
				</note>
				<note val="16">
					<headx level="-2" />
				</note>
				<note val="16">
					<headx level="-3" />
				</note>
				<note val="8">
					<headx level="1" />
				</note>
				<note val="8">
					<headx level="-5"
						   tie="true" />
				</note>
			</voice>
			<voice>
				<pause level="2"
					   val="1" />
			</voice>
		</part>
		<part clef="ClefF"
			  key="Flat1">
			<voice>
				<note val="8">
					<headx level="0" />
				</note>
				<note val="8">
					<headx level="-1" />
				</note>
				<note val="8">
					<headx level="-2" />
				</note>
				<note val="8">
					<headx level="0" />
				</note>
				<note val="8">
					<headx level="-4" />
				</note>
				<note val="8">
					<headx level="-5"
						   sign="Natural" />
				</note>
				<note val="8">
					<headx level="-6"
						   sign="Sharp" />
				</note>
				<note val="8">
					<headx level="-4" />
				</note>
			</voice>
		</part>
	</bar>
	
	
	
	<bar>
		<part>
			<voice>
				<note val="16">
					<headx level="-5" />
				</note>
				<note val="16">
					<headx level="-4" />
				</note>
				<note val="16">
					<headx level="-3" />
				</note>
				<note val="16">
					<headx level="-2" />
				</note>
				<note>
					<headx level="-6"
						   tie="true" />
				</note>
				<note val="16">
					<headx level="-6" />
				</note>
				<note val="16">
					<headx level="-5"
						   sign="Sharp" />
				</note>
				<note val="16">
					<headx level="-4"
						   sign="Sharp" />
				</note>
				<note val="16">
					<headx level="-5" />
				</note>
				<note val="8.">
					<headx level="-5" />
				</note>
				<note val="16">
					<headx level="-6" />
				</note>
			</voice>
			<voice>
				<pause val="16" />
				<note val="16">
					<headx level="1" />
				</note>
				<note val="16">
					<headx level="2"
						   sign="Sharp" />
				</note>
				<note val="16">
					<headx level="1" />
				</note>
				<note val="8">
					<headx level="4" />
				</note>
				<note val="8">
					<headx level="-1"
						   tie="true" />
				</note>
				<note val="16">
					<headx level="-1" />
				</note>
				<note val="16">
					<headx level="0"
						   sign="Natural" />
				</note>
				<note val="16">
					<headx level="1" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note val="8">
					<headx level="4" />
				</note>
				<note val="8">
					<headx level="-2"
						   tie="true" />
				</note>
			</voice>
		</part>
		<part>
			<voice>
				<note>
					<headx level="-7"
						   tie="true" />
				</note>
				<note val="16">
					<headx level="-7" />
				</note>
				<note val="16">
					<headx level="-6"
						   sign="Natural" />
				</note>
				<note val="16">
					<headx level="-5"
						   sign="Natural" />
				</note>
				<note val="16">
					<headx level="-4" />
				</note>
				<note>
					<headx level="-8" />
				</note>
				<note>
					<headx level="-1" />
				</note>
			</voice>
		</part>
	</bar>
	<bar>
		<part>
			<voice>
				<note>
					<headx level="-6"
						   tie="true" />
				</note>
				<note val="16">
					<headx level="-6" />
				</note>
				<note val="16">
					<headx level="-2" />
				</note>
				<note val="16">
					<headx level="-1"
						   sign="Sharp" />
				</note>
				<note val="16">
					<headx level="-2" />
				</note>
				<note>
					<headx level="-5"
						   sign="Natural"
						   tie="true" />
				</note>
				<note val="16">
					<headx level="-5" />
				</note>
				<note val="16">
					<headx level="-1"
						   sign="Sharp" />
				</note>
				<note val="16">
					<headx level="0"
						   sign="Natural" />
				</note>
				<note val="16">
					<headx level="-1" />
				</note>
			</voice>
			<voice>
				<note val="16">
					<headx level="-2" />
				</note>
				<note val="16">
					<headx level="-1" />
				</note>
				<note val="16">
					<headx level="0"
						   sign="Natural" />
				</note>
				<note val="16">
					<headx level="-1" />
				</note>
				<note>
					<headx level="-4"
						   tie="true"
						   tielevel="4" />
				</note>
				<note val="16">
					<headx level="-4" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note val="16">
					<headx level="1" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note>
					<headx level="-3"
						   tie="true"
						   tielevel="5" />
				</note>
			</voice>
		</part>
		<part>
			<voice>
				<note>
					<headx level="3" />
				</note>
				<pause />
				<pause val="2" />
			</voice>
		</part>
	</bar>
	<bar>
		<part>
			<voice>
				<note val="4.">
					<headx level="-4" />
				</note>
				<note val="8">
					<headx level="-6" />
				</note>
				<note>
					<headx level="-5"
						   tie="true" />
				</note>
				<note val="16">
					<headx level="-5" />
				</note>
				<note val="16">
					<headx level="-4" />
				</note>
				<note val="16">
					<headx level="-3" />
				</note>
				<note val="16">
					<headx level="-4" />
				</note>
			</voice>
			<voice>
				<note val="8">
					<headx level="-3" />
				</note>
				<note val="8">
					<headx level="1" />
				</note>
				<note val="16">
					<headx level="-2" />
				</note>
				<note val="16">
					<headx level="-3" />
				</note>
				<note val="16">
					<headx level="-2" />
				</note>
				<note val="16">
					<headx level="-1"
						   sign="Natural" />
				</note>
				<note val="8.">
					<headx level="0"
						   sign="Natural" />
				</note>
				<note val="16">
					<headx level="-1"
						   sign="Sharp" />
				</note>
				<note>
					<headx level="-1" />
				</note>
			</voice>
		</part>
		<part>
			<voice>
				<pause val="16" />
				<note val="16">
					<headx level="0" />
				</note>
				<note val="16">
					<headx level="1"
						   sign="Sharp" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note val="8">
					<headx level="3" />
				</note>
				<note val="8">
					<headx level="-2"
						   tie="true" />
				</note>
				<note val="16">
					<headx level="-2" />
				</note>
				<note val="16">
					<headx level="-1" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note val="16">
					<headx level="-1" />
				</note>
				<note val="8">
					<headx level="3" />
				</note>
				<note val="8">
					<headx level="-3"
						   tie="true" />
				</note>
			</voice>
		</part>
	</bar>
	<bar>
		<part>
			<voice>
				<note>
					<headx level="-2" />
				</note>
				<pause val="16" />
				<note val="16">
					<headx level="-7" />
				</note>
				<note val="16">
					<headx level="-6" />
				</note>
				<note val="16">
					<headx level="-7" />
				</note>
				<note>
					<headx level="-3"
						   tie="true" />
				</note>
				<note val="16">
					<headx level="-3" />
				</note>
				<note val="16">
					<headx level="-6" />
				</note>
				<note val="16">
					<headx level="-5" />
				</note>
				<note val="16">
					<headx level="-6" />
				</note>
			</voice>
			<voice>
				<note val="16">
					<headx level="-2" />
				</note>
				<note val="16">
					<headx level="-2" />
				</note>
				<note val="16">
					<headx level="-1"
						   sign="Sharp" />
				</note>
				<note val="16">
					<headx level="-2" />
				</note>
				<note>
					<headx level="2"
						   tie="true" />
				</note>
				<note val="16">
					<headx level="2" />
				</note>
				<note val="16">
					<headx level="-1"
						   sign="Natural" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note val="16">
					<headx level="-1" />
				</note>
				<note>
					<headx level="3"
						   tie="true" />
				</note>
			</voice>
		</part>
		<part>
			<voice>
				<note val="16">
					<headx level="-3" />
				</note>
				<note val="16">
					<headx level="-2" />
				</note>
				<note val="16">
					<headx level="-1" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note>
					<headx level="-5"
						   tie="true" />
				</note>
				<note val="16">
					<headx level="-5" />
				</note>
				<note val="16">
					<headx level="-1" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note val="16">
					<headx level="1" />
				</note>
				<note>
					<headx level="-4"
						   tie="true" />
				</note>
			</voice>
		</part>
	</bar>
	<bar>
		<part>
			<voice>
				<note>
					<headx level="-2"
						   tie="true" />
				</note>
				<note val="16">
					<headx level="-2" />
				</note>
				<note val="16">
					<headx level="-2" />
				</note>
				<note val="16">
					<headx level="-3" />
				</note>
				<note val="16">
					<headx level="-4" />
				</note>
				<note>
					<headx level="-5"
						   tie="true" />
				</note>
				<note val="16">
					<headx level="-5" />
				</note>
				<note val="16">
					<headx level="-4" />
				</note>
				<note val="16">
					<headx level="-3" />
				</note>
				<note val="16">
					<headx level="-2" />
				</note>
			</voice>
			<voice>
				<note val="16">
					<headx level="3" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note val="16">
					<headx level="1" />
				</note>
				<note val="16">
					<headx level="-1" />
				</note>
				<note>
					<headx level="0"
						   tie="true" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note val="16">
					<headx level="-1" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note val="16">
					<headx level="1" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note val="16">
					<headx level="1" />
				</note>
				<note val="16">
					<headx level="2" />
				</note>
				<note val="16">
					<headx level="3" />
				</note>
			</voice>
		</part>
		<part>
			<voice>
				<note val="16">
					<headx level="-4" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note val="16">
					<headx level="1" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note val="8">
					<headx level="4" />
				</note>
				<note val="8">
					<headx level="-2"
						   tie="true" />
				</note>
				<note val="16">
					<headx level="-2" />
				</note>
				<note val="16">
					<headx level="-1" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note val="16">
					<headx level="-1" />
				</note>
				<note val="8">
					<headx level="1" />
				</note>
				<note val="8">
					<headx level="-5"
						   tie="true" />
				</note>
			</voice>
		</part>
	</bar>


	<bar>
		<part>
			<voice>
				<note val="2">
					<headx level="-1"
						   tie="true" />
				</note>
				<note val="16">
					<headx level="-1" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note val="16">
					<headx level="1" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note val="16">
					<headx level="2" />
				</note>
				<note val="16">
					<headx level="5" />
				</note>
				<note val="16">
					<headx level="6" />
				</note>
				<note val="16">
					<headx level="5" />
				</note>
			</voice>
			<voice>
				<note val="8">
					<headx level="4" />
				</note>
				<note val="8">
					<headx level="0"
						   tie="true" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note val="16">
					<headx level="1" />
				</note>
				<note val="16">
					<headx level="2" />
				</note>
				<note val="16">
					<headx level="1" />
				</note>
				<note val="2">
					<headx level="3"
						   tie="true" />
				</note>
			</voice>
		</part>
		<part>
			<voice>
				<note val="16">
					<headx level="-5" />
				</note>
				<note val="16">
					<headx level="-4" />
				</note>
				<note val="16">
					<headx level="-3" />
				</note>
				<note val="16">
					<headx level="-4" />
				</note>
				<note val="8">
					<headx level="-2" />
				</note>
				<note val="8">
					<headx level="-8"
						   sign="Flat" />
				</note>
				<note val="8">
					<headx level="-7" />
				</note>
				<note val="8">
					<headx level="-6" />
				</note>
				<note val="8">
					<headx level="-5" />
				</note>
				<note val="8">
					<headx level="-4" />
				</note>
			</voice>
		</part>
	</bar>
	<bar>
		<part>
			<voice>
				<note val="16">
					<headx level="2" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note val="16">
					<headx level="1" />
				</note>
				<note val="16">
					<headx level="0"
						   tie="true" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note val="16">
					<headx level="-1" />
				</note>
				<note val="16">
					<headx level="0" />
				</note>
				<note val="16">
					<headx level="-1" />
				</note>
				<note>
					<headx level="1" />
				</note>
				<pause val="8" />
				<note val="8">
					<headx level="-4"
						   tie="true" />
				</note>
			</voice>
			<voice>
				<note>
					<headx level="3" />
				</note>
				<note>
					<headx level="4" />
				</note>
				<pause val="16" />
				<note val="16">
					<headx level="3" />
				</note>
				<note val="16">
					<headx level="4" />
				</note>
				<note val="16">
					<headx level="3" />
				</note>
				<note val="8">
					<headx level="6" />
				</note>
				<note val="8">
					<headx level="1"
						   tie="true" />
				</note>
			</voice>
		</part>
		<part>
			<voice>
				<note val="8">
					<headx level="-5" />
				</note>
				<note val="8">
					<headx level="-3" />
				</note>
				<note val="8">
					<headx level="-6" />
				</note>
				<note val="8">
					<headx level="1" />
				</note>
				<note val="8">
					<headx level="5" />
				</note>
				<note val="8">
					<headx level="4" />
				</note>
				<note val="8">
					<headx level="3" />
				</note>
				<note val="8">
					<headx level="5" />
				</note>
			</voice>
		</part>
	</bar>	
</score>
';
		var nscore = ScoreXML.fromXmlStr(xmlStr);		
		return nscore;						
		//return null;
	}	
	
}