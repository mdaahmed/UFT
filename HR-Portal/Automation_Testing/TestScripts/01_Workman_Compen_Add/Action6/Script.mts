
'Logout part
Call Autopopu("Logout","Logout Functionality")
If Browser("Browser").Page("HRP_4").Link("MD Arif Ahmed").Exist Then
	Browser("Browser").Page("HRP_4").Link("MD Arif Ahmed").Click
	
	'OptionalStep
	If Browser("Browser").Page("HRP_4").Link("Log Out").Exist Then
		Browser("Browser").Page("HRP_4").Link("Log Out").Click
		wait(3)
	End  If
	If Browser("Browser").Dialog("Message from webpage").Exist Then
	   Browser("Browser").Dialog("Message from webpage").Activate
	   Browser("Browser").Dialog("Message from webpage").WinButton("micclass:=WinButton","text:=OK","enabled:=true").Click	
    End If
End If


'To Close IE
'Systemutil.CloseProcessByName "iexplore.exe"	

 current_month= month(Now)
 current_day= day(Now)
 current_hour= hour(Now)
 current_min= minute(Now)
' 
'DataTable.ExportSheet "C:\arif_2nd_PC\projects_2nd_Pc\HR-Portal\Automation_Testing\WC_Data.xls" ,1
DataTable.Export "C:\arif_2nd_PC\projects_2nd_Pc\HR-Portal\Automation_Testing\Result\Report"&"_"&current_month&"_"&current_day&"_"&current_hour&"_"&current_min&".xls"



