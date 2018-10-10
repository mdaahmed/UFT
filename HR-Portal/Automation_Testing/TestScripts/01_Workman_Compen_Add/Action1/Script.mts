

'Worker Compensation Module @@ script infofile_;_ZIP::ssf14.xml_;_
    Browser("Browser").Page("HRP Login").Image("Workers Compensation").Click
	Browser("Browser").Page("HRP_2").WebButton("×").Click @@ script infofile_;_ZIP::ssf18.xml_;_
	wait(2)
	
'Total Rows @@ script infofile_;_ZIP::ssf21.xml_;_
 iNumRows=DataTable.GetSheet("02_Search").GetRowCount

'Read the data
 For i=1 To iNumRows Step 1
'  For i=1 To 1
 	DataTable.GetSheet("02_Search").SetCurrentRow(i)
 
'Search - A Existing Record.
	Browser("Browser").Page("HRP_2").Link("Search").Click
	'1st TestCase
	
	If DataTable("Emp_Id",2)<>"" Then
	   Call Autopopu("Search","Search-Emp Id Check")
	   Browser("Browser").Page("Search").WebEdit("WCEmpID").Set DataTable("Emp_Id","02_Search")	
	End If 
	
	'2nd TestCase	
	
	If DataTable("First_Name",2)<>"" Then
	    Call Autopopu("Search","Search-First Name Check")
		Browser("Browser").Page("Search").WebEdit("WCFirstName").Set DataTable("First_Name","02_Search")
	End If
	
	'3rd TestCase
	
     If  DataTable("Last_Name",2)<>"" Then
        Call Autopopu("Search","Search-Last Name Check")
     	Browser("Browser").Page("Search").WebEdit("WCLastName").Set DataTable("Last_Name","02_Search")
     End If
     
     '4th TestCase
     
     If DataTable("WC_Claim",2)<>""  Then
     	Call Autopopu("Search","Search-Existing Claim Check")
     	Browser("Browser").Page("Search").WebEdit("WCClaimNum").Set DataTable("WC_Claim","02_Search")
     End If
     
	 '5th TestCase
	 
	 If DataTable("Division",2)<>""  Then
	 	Call Autopopu("Search","Search- Division Check")
	 	Browser("Browser").Page("Search").WebList("WCDivisionID").Select DataTable("Division","02_Search")
	 End If
	
	'6th TestCase
	
	If DataTable("Title_id",2)<>""Then
	   Call Autopopu("Search","Search- Title Id Check")
	   Browser("Browser").Page("Search").WebList("WCTitleId").Select DataTable("Title_id","02_Search")
	End If
	
	'7th TestCase
	
	If DataTable("WorkUnitID",2)<>""Then
		Call Autopopu("Search","Search- WorkUnit Check")
		Browser("Browser").Page("Search").WebList("WCWorkUnitID").Select DataTable("WorkUnitID","02_Search")
	End If
	
	'8th TestCase

	If DataTable("Accident_Year",2)<>""Then
		Call Autopopu("Search","Accident_Year Check")
		Browser("Browser").Page("Search").WebEdit("WCAccidentYear").Set DataTable("Accident_Year","02_Search")
	End If
	'9th Testcase
	
	If DataTable("Archive",2)<>"" Then
	   Call Autopopu("Search","Archieve")
	   Browser("Browser").Page("Search").WebCheckBox("WCArchiveY").Set DataTable("Archive","02_Search")
	End If
 @@ script infofile_;_ZIP::ssf36.xml_;_
	Browser("Browser").Page("Search").WebButton("Search").Click
    Call Record_Search(i)
  Next
'End loop
Browser("Browser").Page("HRP_4").Link("Workers Compensation").Click @@ script infofile_;_ZIP::ssf31.xml_;_
If Browser("Browser").Page("HRP_2").WebButton("×").Exist Then @@ script infofile_;_ZIP::ssf32.xml_;_
   Browser("Browser").Page("HRP_2").WebButton("×").Click
End If
 @@ hightlight id_;_Browser("Browser").Page("Search").WebCheckBox("WCArchiveY")_;_script infofile_;_ZIP::ssf41.xml_;_
 
