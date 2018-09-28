function isempty(field,msg){
	with(field){
		if(value==""){
			alert(msg);
			field.focus();
			return true;
		}
		else{
			return false;
		}
	}
}
function emailvalidation(){
	var atpos=document.myForm.email.value.indexOf("@");
	var dotpos=document.myForm.email.value.lastIndexOf(".")
	if((dotpos-atpos)<2||atpos<1){
		alert("email is not valid");
		document.myForm.email.focus();
		return true;
	}
}
function passwordvalidation(){
	if(document.myForm.password.value.length>=8){
		alert("password is not valid must have length of 8");
		document.myForm.password.focus();
		return true;
	}
}
function namevalidation(){
	var tex=/[^a-z]/g
	if(document.myForm.name.value.match(tex)){
		alert("name is not valid must have text")
		document.myForm.name.focus()
		return true;
	}
}

function validateform(thisform){
	if(isempty(document.myForm.username,"username can't be empty")){
		return false;
	}
	if(isempty(document.myForm.name,"name can't be empty")){
		return false;
	}
	if(namevalidation()){
		return false;
	}
	if(isempty(document.myForm.email,"email can't be empty")){
		return false;
	}
	if(emailvalidation()){
		return false;
	}
	if(isempty(document.myForm.password,"password can't be empty")){
		return false;
	}
	if(passwordvalidation()){
		return false;
	}
	if(isempty(document.myForm.city,"city can't be empty")){
		return false;
	}
}