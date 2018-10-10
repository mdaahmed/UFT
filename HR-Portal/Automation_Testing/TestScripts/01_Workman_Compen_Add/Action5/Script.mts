'Variable 
 	Dim pass,iNumRows

'Import the sheet
DataTable.ImportSheet "C:\arif_2nd_PC\projects_2nd_Pc\HR-Portal\Automation_Testing\Datatable\WC_Data.xls",2,2

'Launch The Application 
    'IE11
    	SystemUtil.Run "iexplore.exe","http://dotqa55iis10/HRPortal"
    'Chrome
		'SystemUtil.Run "chrome.exe","http://dotqa55iis10/HRPortal"

' Auto Pop Message 
wait(1)
Call Autopopu("Login","Login Functionality")
wait(1)
    User_name= DataTable("User_name",Global)
    
 'Login To HR
    Call Login_HR(User_name,Password)

