function ValidateEmail(inputText){
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat) || inputText.value.length == 0)
{
var input = document.getElementById("alert").innerHTML = ""
document.form1.text1.focus();
return true;
}
else
{
var input = document.getElementById("alert").innerHTML = "Ooops pleas check your email"
document.form1.text1.focus();
return false;
}
}
function clickCheck(inputText){
    if(inputText.value.length > 0){
        document.getElementById("alert").innerHTML = ""
       
    }
}
