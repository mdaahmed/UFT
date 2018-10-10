'Script: Update Workman Compensation Record
Call Autopopu("Update Record","Update Record Function Check")
'Variable Declaration
 Dim flag,first_record,first_link @@ hightlight id_;_48_;_script infofile_;_ZIP::ssf8.xml_;_
'Launch The Application 
 @@ script infofile_;_ZIP::ssf19.xml_;_

 @@ script infofile_;_ZIP::ssf21.xml_;_
'Search - A Existing Record.
	Browser("HRP").Page("Side-Navigation").Link("Search").Click
	wait(1)
	Browser("Browser").Page("HRP_3").WebButton("Search").Click
	wait(1)

'Creating a description object	for Webtable
    set table_obj= Description.Create
    'Add descriptions and properties
		table_obj("micclass").value="WebTable"
		table_obj("html tag").value = "TABLE"
		table_obj("html id").value = "gridWCSearchResult"
     total_rows=Browser("Browser").Page("HRP").WebTable(table_obj).RowCount
     'msgbox  total_rows
     
 'Creating a description object	for Link under table  
'    Set odesc=Description.Create()
'    odesc("micclass").value="link"

'-----------------------------
   
    
     For i = 2 to total_rows
		  'Set first_record = Browser("Browser").Page("HRP").WebTable(table_obj).ChildItem(i, 3, "Link", 0)
		  first_record=false
		  first_record = Browser("Browser").Page("HRP").WebTable(table_obj).GetCellData(2,2)
		  wait(1)
		  If first_record<>"" Then
		  	  print first_record
		      Set first_link= Browser("Browser").Page("HRP").WebTable(table_obj).ChildItem(2, 2, "Link", 0)
		      wait(1)
		      first_link.click 
		      wait(1)
		      Reporter.ReportEvent micpass,"Search Record for Edit","Record found"
		      Exit For
		  End If			
		'msgbox first_record 
		
     Next 
     If first_record=false Then
     	Reporter.ReportEvent micFail,"Search Record for Edit","No record found"
     End If
    set table_obj= Nothing
    Browser("HRP").Page("Workman_Comp").WebEdit("Comment_box").Set "Test "&Date
    Browser("HRP").Page("Workman_Comp").WebEdit("Prvt_Cmnts").Set "Test "&Date
    Browser("HRP").Page("Workman_Comp").WebButton("Save").Click
    If Browser("HRP").Page("Record_Save-Dialog").WebElement("Save_Succ_Txt").Exist Then
    	Reporter.ReportEvent micPass,"Update Record","Update was successful"
    	Browser("HRP").Page("Record_Save-Dialog").WebElement("Save_Succ_Txt").Click
    End If
    

