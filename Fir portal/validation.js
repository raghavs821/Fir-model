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
function validateform(thisform){
	if(isempty(document.myForm.name,"name can't be empty")){
		return false;
	}
	if(isempty(document.myForm.fname,"father's name can't be empty")){
		return false;
	}
	if(isempty(document.myForm.uidai,"Id can't be empty")){
		return false;
	}
	if(isempty(document.myForm.mobile,"mobile no. can't be empty")){
		return false;
	}
	if(isempty(document.myForm.email,"email can't be empty")){
		return false;
	}
	if(emailvalidation()){
		return false;
	}
	if(isempty(document.myForm.aline1,"Address line can't be empty")){
		return false;
	}
	if(isempty(document.myForm.aline2,"Address line can't be empty")){
		return false;
	}
	if(isempty(document.myForm.date,"* marked value can't be empty")){
		return false;
	}
	if(isempty(document.myForm.place,"* marked value can't be empty")){
		return false;
	}
	if(isempty(document.myForm.district,"* marked value can't be empty")){
		return false;
	}
	if(isempty(document.myForm.details,"* marked value can't be empty")){
		return false;
	}
}
	
	