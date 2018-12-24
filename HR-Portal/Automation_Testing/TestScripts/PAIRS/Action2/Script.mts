' Created Date: 12/11/18
' Updated Date:12/17//18
' Test Script 
' 2 Test Cases.

Browser("HRP").Page("HRP").Link("PAR").Click @@ script infofile_;_ZIP::ssf1.xml_;_
'1998-0007
'Verfication
Browser("HRP").Page("HRP_2").Link("New PAR").Check CheckPoint("New PAR_Button") @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("HRP").Page("HRP_2").WebEdit("txtPAR").Check CheckPoint("PAR_Field") @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("HRP").Page("HRP_2").WebEdit("txtPARSSN").Check CheckPoint("SSN_Field_Check") @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("HRP").Page("HRP_2").WebEdit("txtparLastname").Check CheckPoint("Lastname_Check") @@ script infofile_;_ZIP::ssf5.xml_;_

' Search >> PAR#
Browser("HRP").Page("HRP_2").WebEdit("txtPAR").Set "19980007" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("HRP").Page("HRP_2").WebButton("GO").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("HRP").Page("HRP_2").Link("1998-0007").Click @@ script infofile_;_ZIP::ssf8.xml_;_

'Verify PAR ID Page:

Browser("HRP").Page("HRP_3").WebEdit("Year").Check CheckPoint("PAR_Year_Check") @@ script infofile_;_ZIP::ssf9.xml_;_

Browser("HRP").Page("HRP_3").WebEdit("PARShort").Check CheckPoint("PARShort_Value_Check") @@ script infofile_;_ZIP::ssf10.xml_;_

Browser("HRP").Page("HRP_3").WebNumber("CurrentPersons").Check CheckPoint("CurrentPersons") @@ script infofile_;_ZIP::ssf11.xml_;_

Browser("HRP").Page("HRP_3").WebButton("Save PAR").Check CheckPoint("Save PAR") @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("HRP").Page("HRP_3").WebButton("Save PAR").Click
If Browser("HRP").Page("HRP_3").WebElement("You Have Successfully").Exist Then
   Reporter.ReportEvent micPass,"PAR Record","PAR Record Saved"
Else
	Reporter.ReportEvent micFail,"PAR Record","PAR Record Saved"
End If
 @@ script infofile_;_ZIP::ssf13.xml_;_
'------------------------Next Task: Based on Last Name -----------------
