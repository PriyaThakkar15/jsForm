//function clickme() 
//{
//    
//    var new_name = document.getElementById('InputName').value;
//    var new_email = document.getElementById('InputEmail').value;
//    var new_password = document.getElementById('InputPassword').value;
//
//    var table = document.getElementById('myTable');
//    var table_len = (table.rows.length);
//    var row = table.insertRow(table_len).outerHTML =
//        "<tr id='row" + table_len + "'>" +
//        "<td id='name-row" + table_len + "'>" + new_name + "</td>" +
//        "<td id='email-row" + table_len + "'>" + new_email + "</td>" +
//        "<td id='password-row" + table_len + "'>" + new_password + "</td>" +
//        "<td> <button type='button' id='update-button" + table_len + "' value = 'UPDATE' class = 'edit' onclick = 'edit_row(" + table_len + ")' >" +"UPDATE</button></td>"+
//        "<td> <button type='button' id='delete-button" + table_len + "' value = 'DELETE' class = 'delete' onclick = 'delete_row(this)' >" +"DELETE</button> </td></tr>";
//    
//}
function edit_row(no)
{
    var table=document.getElementById('myTable');
    var row =document.getElementById('row'+no);
    var edit=document.getElementById('update-button'+no);
    var msg= edit.innerHTML;
    
    if(msg === "UPDATE")
    {
        edit.innerText="SAVE";
        for(var i=0;i<=2;i++)
            {
                row.getElementsByTagName('td')[i].contentEditable=true;
                row.getElementsByTagName('td')[i].style.backgroundColor= "#E8E8E8";
            }
        
    }
    else if(msg==="SAVE"){
        edit.innerHTML="UPDATE";
        for(var i=0;i<=2;i++){
            row.getElementsByTagName('td')[i].contentEditable=false;
        }
       
    }
}
function delete_row(drow)
{
    
    console.log(drow);
    
    var i = drow.parentNode.parentNode;
    console.log(i);
    alert("delete this row...?")
    document.getElementById('myTable').deleteRow(i.rowIndex); 

} 
function ckvalidate()
{
    var name=document.getElementById('InputName').value;
    var email=document.getElementById('InputEmail').value;
    var pass=document.getElementById('InputPassword').value;
     
   if ((name=="")||(email=="")||(pass==""))
    {
        alert("plz fill the details");
       // return false;
    } 
    else{
        add(name,email,pass);
    }
   
}
function add(name,email,pass)
{
     var table = document.getElementById('myTable');
    var table_len = (table.rows.length);
    var row = table.insertRow(table_len).outerHTML =
        "<tr id='row" + table_len + "'>" +
        "<td id='name-row" + table_len + "'>" + name + "</td>" +
        "<td id='email-row" + table_len + "'>" + email + "</td>" +
        "<td id='password-row" + table_len + "'>" + pass + "</td>" +
        "<td> <button type='button' id='update-button" + table_len + "' value = 'UPDATE' class = 'edit' onclick = 'edit_row(" + table_len + ")' >" +"UPDATE</button></td>"+
        "<td> <button type='button' id='delete-button" + table_len + "' value = 'DELETE' class = 'delete' onclick = 'delete_row(this)' >" +"DELETE</button> </td></tr>";
}

    
    
