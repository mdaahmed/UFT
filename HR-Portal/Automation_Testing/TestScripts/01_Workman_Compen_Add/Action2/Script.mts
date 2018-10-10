

 'Auto Popup
 Call Autopopu("New Record","Create New Record Functionality")
 Dim current_month,current_day,current_hour,current_min,Claim_num
 
 
 current_month= month(Now)
 current_day= day(Now)
 current_hour= hour(Now)
 current_min= minute(Now)
 
 Print current_month
 Print current_day
 Print current_hour
 Print current_min

'Employee Unique Firstname
First_name="QA_First_"&cint(current_month)&cint(current_day)&cint(current_hour)&cint(current_min)
'Employee Unique lastname
Last_name="QA_Last_"&cint(current_month)&cint(current_day)&cint(current_hour)&cint(current_min)

'Claim_num Generator -5 digit or less

If (current_month=<10) Then

	Claim_num=cint(current_day)&cint(current_min)&(current_hour)	
Else
	Claim_num=cint(current_day)&left(current_min,1)&left(current_hour,1)
End If
Print Claim_num
'Click New Form
Browser("HRP").Page("HRP").Link("New").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("HRP").Page("HRP_2").WebElement("Sup First Name: Sup Last").Click @@ script infofile_;_ZIP::ssf2.xml_;_

' Unique Employee ID : Max 7 digits
If (current_month<10) Then
    If current_day<10 Then
    
		If current_min<10 Then
		'Month-2 digit, Day-2 digit,min 2, hour 1
	    	Browser("HRP").Page("HRP_2").WebEdit("WCEmpID").Set "0"&cint(current_month)&"0"&cint(current_day)&"0"&cint(current_min)&left(current_hour,1)
	    Else
	    'Month-2 digit, Day-2 digit,min 2, hour 1
	    	Browser("HRP").Page("HRP_2").WebEdit("WCEmpID").Set "0"&cint(current_month)&"0"&cint(current_day)&cint(current_min)&left(current_hour,1)			
	    End If 
    	
    Else 
    	'Month-2 digit, Day-2 digit,min 2, hour 1
    	If current_min<10 Then
        	Browser("HRP").Page("HRP_2").WebEdit("WCEmpID").Set "0"&cint(current_month)&cint(current_day)&"0"&cint(current_min)&left(current_hour,1)
        Else
        	Browser("HRP").Page("HRP_2").WebEdit("WCEmpID").Set "0"&cint(current_month)&cint(current_day)&cint(current_min)&left(current_hour,1)
        End If
    End If
	
Else 'If month is 2 digits 'oct/nov/dec month
    If current_day<10 Then
	    
		If current_min<10 Then
		'Month-2 digit, Day-2 digit,min 2, hour 1
	    	Browser("HRP").Page("HRP_2").WebEdit("WCEmpID").Set cint(current_month)&"0"&cint(current_day)&"0"&cint(current_min)&left(current_hour,1)
	    Else
	    'Month-2 digit, Day-2 digit,min 2, hour 1
	    	Browser("HRP").Page("HRP_2").WebEdit("WCEmpID").Set cint(current_month)&"0"&cint(current_day)&cint(current_min)&left(current_hour,1)			
	    End If 
    	
    Else 
    	'Month-2 digit, Day-2 digit,min 2, hour 1
    	If current_min<10 Then
        	Browser("HRP").Page("HRP_2").WebEdit("WCEmpID").Set cint(current_month)&cint(current_day)&"0"&cint(current_min)&left(current_hour,1)
        Else
        'Month-2 digit, Day-2 digit,min 2, hour 1
        	Browser("HRP").Page("HRP_2").WebEdit("WCEmpID").Set cint(current_month)&cint(current_day)&cint(current_min)&left(current_hour,1)
        End If
    End If
End If

' FirstName @taken from generated
Browser("HRP").Page("HRP_2").WebEdit("WCFirstName").Set First_name
'Division
Browser("HRP").Page("HRP_2").WebList("WCDivisionID").Select DataTable("Division_Id",3) @@ script infofile_;_ZIP::ssf5.xml_;_
'last Name @taken from generated
Browser("HRP").Page("HRP_2").WebEdit("WCLastName").Set Last_name @@ script infofile_;_ZIP::ssf6.xml_;_
'Title Id: 
Browser("HRP").Page("HRP_2").WebList("WCTitleId").Select DataTable("Title_id",3) @@ script infofile_;_ZIP::ssf7.xml_;_
'Title Level Id: 
Browser("HRP").Page("HRP_2").WebList("WCTitleLevelID").Select DataTable("TitleLevelID",3) @@ script infofile_;_ZIP::ssf8.xml_;_
'Work Unit ID
Browser("HRP").Page("HRP_2").WebList("WCWorkUnitID").Select DataTable("WorkUnitID",3) @@ script infofile_;_ZIP::ssf9.xml_;_

Browser("HRP").Page("HRP_2").WebList("WCBudgetID").Select DataTable("BudgetID",3) @@ script infofile_;_ZIP::ssf10.xml_;_
 @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("HRP").Page("HRP_2").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("HRP").Page("HRP_2").Link("10").Click
'Received Date -By default current date
'Browser("HRP").Page("HRP_2").WebEdit("WCReceiveDate").Set ""

'Accident Date
Browser("HRP").Page("HRP_2").WebEdit("WCAccidentDate").Set DataTable("AccidentDate",3)

 @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("HRP").Page("HRP_2").WebList("WCCauseOfAccID").Select DataTable("CauseOfAccID",3) @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("HRP").Page("HRP_2").WebCheckBox("WCFriChk").Set "ON" @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("HRP").Page("HRP_2").WebElement("WebElement_2").Click @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("HRP").Page("HRP_2").Link("21").Click @@ script infofile_;_ZIP::ssf18.xml_;_
wait(2)
'Claim# ' Unique based on function
Browser("HRP").Page("HRP_2").WebEdit("WCClaimNum").Set Claim_num @@ script infofile_;_ZIP::ssf21.xml_;_
wait(1)
'Save
Browser("HRP").Page("HRP_2").WebButton("Save").Click @@ script infofile_;_ZIP::ssf22.xml_;_
Browser("HRP").Page("HRP_2").WebElement("savedModal").Click @@ script infofile_;_ZIP::ssf23.xml_;_


