' Test Script : 
' Created Date: 12/11/18
' Updated Date:12/17//18

Browser("HRP Login").Page("HRP Login").WebEdit("LDAPUserId").Set "mdaahmed" @@ script infofile_;_ZIP::ssf1.xml_;_
 @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("HRP Login").Page("HRP Login").WebEdit("passWord").SetSecure "5c10175a36936df9403c7fb21094e1e5ed2a0b291a31e8be" @@ script infofile_;_ZIP::ssf5.xml_;_
 @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("HRP Login").Page("HRP Login").WebButton("Sign in").Click @@ script infofile_;_ZIP::ssf7.xml_;_
If Browser("HRP Login").Page("HRP").WebElement("HRP window.rootUrl = '/HRPorta").Exist Then @@ hightlight id_;_133460_;_script infofile_;_ZIP::ssf9.xml_;_
	Reporter.ReportEvent micPass,"PAIRS-Login","LoginPassed"
Else
    Reporter.ReportEvent micFail,"PAIRS-Login","Login Failed"
End If

 'PAIRS - Check
 
Browser("HRP Login").Page("HRP").WebElement("HRP window.rootUrl = '/HRPorta").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("HRP Login").Page("HRP").Image("PRF").Click @@ script infofile_;_ZIP::ssf11.xml_;_
' Place: Future Maintenance : If dialogue exist

'Click Employee ID @@ hightlight id_;_65828_;_script infofile_;_ZIP::ssf12.xml_;_

 @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("HRP Login").Page("HRP_2").WebEdit("txtEmployeeID").Set "1521024" @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("HRP Login").Page("HRP_2").WebButton("GO_2").Click @@ script infofile_;_ZIP::ssf17.xml_;_
'Click the record

Browser("HRP Login").Page("HRP_2").Link("15025").Click @@ script infofile_;_ZIP::ssf18.xml_;_
'Verify the objects

Browser("HRP Login").Page("HRP_3").WebEdit("DivisionCode").Check CheckPoint("PRF_DivisionCode") @@ script infofile_;_ZIP::ssf19.xml_;_

Browser("HRP Login").Page("HRP_3").WebEdit("PRF").Check CheckPoint("PRF#") @@ script infofile_;_ZIP::ssf20.xml_;_

Browser("HRP Login").Page("HRP_3").WebList("ActionTypeId").Check CheckPoint("ActionTypeId") @@ script infofile_;_ZIP::ssf21.xml_;_

'Action Request
Browser("HRP Login").Page("HRP_3").WebEdit("PARNo").Check CheckPoint("PARNo") @@ script infofile_;_ZIP::ssf22.xml_;_
Browser("HRP Login").Page("HRP_3").WebEdit("UnitofApprop").Check CheckPoint("UnitofApprop") @@ script infofile_;_ZIP::ssf23.xml_;_
Browser("HRP Login").Page("HRP_3").WebEdit("LastName").Check CheckPoint("LastName_Check") @@ script infofile_;_ZIP::ssf24.xml_;_
Browser("HRP Login").Page("HRP_3").WebEdit("FirstName").Check CheckPoint("FirstName_Check") @@ script infofile_;_ZIP::ssf25.xml_;_
Browser("HRP Login").Page("HRP_3").WebEdit("EmpID").Check CheckPoint("EmpID") @@ script infofile_;_ZIP::ssf27.xml_;_

'General Information 

Browser("HRP Login").Page("HRP_3").WebList("ReasonId").Check CheckPoint("ReasonId") @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("HRP Login").Page("HRP_3").WebList("AuditType").Check CheckPoint("AuditType") @@ script infofile_;_ZIP::ssf29.xml_;_
Browser("HRP Login").Page("HRP_3").WebList("FundingTypeId").Check CheckPoint("FundingTypeId") @@ script infofile_;_ZIP::ssf30.xml_;_

Browser("HRP Login").Page("HRP_3").WebList("ExemptType").Check CheckPoint("ExemptType_Check") @@ script infofile_;_ZIP::ssf31.xml_;_
Browser("HRP Login").Page("HRP_3").WebList("CivilServiceStatusId").Check CheckPoint("CivilServiceStatusId_Check") @@ script infofile_;_ZIP::ssf32.xml_;_

Browser("HRP Login").Page("HRP_3").WebList("NewPositionEst").Check CheckPoint("NewPositionEst") @@ script infofile_;_ZIP::ssf33.xml_;_
Browser("HRP Login").Page("HRP_3").WebList("FullPartTime").Check CheckPoint("FullPartTime") @@ script infofile_;_ZIP::ssf34.xml_;_
Browser("HRP Login").Page("HRP_3").WebList("PromGuarMin").Check CheckPoint("PromGuarMin_Check") @@ script infofile_;_ZIP::ssf35.xml_;_
Browser("HRP Login").Page("HRP_3").WebButton("Save PRF").Check CheckPoint("Save PRF") @@ script infofile_;_ZIP::ssf36.xml_;_
Browser("HRP Login").Page("HRP_3").WebButton("Save PRF").Click @@ script infofile_;_ZIP::ssf37.xml_;_
Browser("HRP Login").HandleDialog micOK @@ hightlight id_;_5375308_;_script infofile_;_ZIP::ssf38.xml_;_

