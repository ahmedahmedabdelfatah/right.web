var formLabels = document.getElementsByTagName("label");

function validation() {
	
	var valid = true;
	
	
	
	var firstName =  document.regForm.firstName.value ;
	
	if(firstName == ""){
		formLabels[0].innerHTML= "first Name: *[required]" ;
		formLabels[0].style.color = "red" ;
		valid = false ;
	}
	else if(!isNaN(firstName)){
		formLabels[0].innerHTML= "first Name: *[text only]" ;
		formLabels[0].style.color = "red" ;
		valid = false ;
	}
      else {
          formLabels[0].innerHTML= "firstName: *" ;
		  formLabels[0].style.color = "black" ;
          valid = (valid) ? true : false ;
      }
	  
	  
	  
    
    var lastName =  document.regForm.lastName.value ;
	
	if(lastName == ""){
		formLabels[1].innerHTML= "lastName: *[required]" ;
		formLabels[1].style.color = "red" ;
		valid = false ;
	}
	else if(!isNaN(lastName)){
		formLabels[1].innerHTML= "lastName *[text only]" ;
		formLabels[1].style.color = "red" ;
		valid = false ;
	}
	
	  else {
          formLabels[1].innerHTML= "lastName: *" ;
		  formLabels[1].style.color = "black" ;
          valid = (valid) ? true : false ;
      }
	  
	  
	  
	  
	var email =  document.regForm.email.value ;

	var at = email.indexOf("@");
	var dot = email.indexOf(".") ;
	if(email == ""){
		formLabels[2].innerHTML= "email: *[required]" ;
		formLabels[2].style.color = "red" ;
		valid = false ;
	}
else if(at == -1 || dot == -1 || dot < at){
		formLabels[2].innerHTML= "email: *[incorrect-email : must include @ before . dot]" ;
		formLabels[2].style.color = "red" ;
		valid = false ;
	}
	
	  else {
          formLabels[2].innerHTML= "email: *" ;
		  formLabels[2].style.color = "black" ;
          valid = (valid) ? true : false ;
      }
	  
	  
	  
	  var password =  document.regForm.password.value ;
	  var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

	var space = password.indexOf(" ");
	// var special  = password.indexOf("#");
	// var isFirstLetterUppercase = /^[A-Z]/.test(password);
	
	if(password == ""){
		formLabels[3].innerHTML= "password: *[required]" ;
		formLabels[3].style.color = "red" ;
		valid = false ;
	}
	else if( !strongRegex.test(password)){
		formLabels[3].innerHTML= "password *[password: must contain at least 1 lowercase character ,1 uppercase character, contain at least 1 numeric character , The string must contain at least one special character ,  must be eight characters or longer]" ;
		formLabels[3].style.color = "red" ;
		valid = false ;
		
	}
	
	else if( space != -1 ){
		formLabels[3].innerHTML= "password *[ no space  ]" ;
		formLabels[3].style.color = "red" ;
		valid = false ;
	}
/*	else if(password.length < 8 || password.length > 8 ){
		formLabels[3].innerHTML= "password *[password must iclude 8 charac no more no less]" ;
		formLabels[3].style.color = "red" ;
		valid = false ;
	}
	else if( space != -1 ){
		formLabels[3].innerHTML= "password *[ no space  ]" ;
		formLabels[3].style.color = "red" ;
		valid = false ;
	}
	else if( special == -1){
		formLabels[3].innerHTML= "password *[ must include # ]" ;
		formLabels[3].style.color = "red" ;
		valid = false ;
	}
	*/
	  else {
          formLabels[3].innerHTML= "password: *" ;
		  formLabels[3].style.color = "black" ;
          valid = (valid) ? true : false ;
      }
	  
	  
	  
	  /*var address =  document.regForm.address.value ;

	 if(address < 0 || address > 100){
		formLabels[4].innerHTML= "address *[address must be between 0 and 100 ]" ;
		formLabels[4].style.color = "red" ;
		valid = false ;
	}
	
	  else {
          formLabels[4].innerHTML= "address: *" ;
		  formLabels[4].style.color = "black" ;
          valid = (valid) ? true : false ;
      }
	  */
	  
	  var address =  document.regForm.address.value ;
	
	if(address == ""){
		formLabels[4].innerHTML= "address: *[required]" ;
		formLabels[4].style.color = "red" ;
		valid = false ;
	}
	else if(!isNaN(address)){
		formLabels[4].innerHTML= "address: *[text and numbers]" ;
		formLabels[4].style.color = "red" ;
		valid = false ;
	}
      else {
          formLabels[4].innerHTML= "address: *" ;
		  formLabels[4].style.color = "black" ;
          valid = (valid) ? true : false ;
      }
	  
	  
	   var mobile =  document.regForm.mobile.value ;
       var re = /01+[0-9]{9}/;
	 if(isNaN(mobile)){
		formLabels[5].innerHTML= "mobile *[only numbers  ]" ;
		formLabels[5].style.color = "red" ;
		valid = false ;
	}
	
	else if(!re.test(mobile)){
		formLabels[5].innerHTML= "mobile: *[incorrect-mobile ]" ;
		formLabels[5].style.color = "red" ;
		valid = false ;
	}
	
	  else {
          formLabels[5].innerHTML= "mobile: *" ;
		  formLabels[5].style.color = "black" ;
          valid = (valid) ? true : false ;
      }
	  
	  
	
	return valid ;

}

function clear2() {

 var mylabels = new Array();
 mylabels[0] = "first Name: *" ;
 mylabels[1] = "last Name: *" ;
 mylabels[2] = "email: *" ;
 mylabels[3] = "password : *" ;
 mylabels[4] = "address: *" ;
 mylabels[5] = "mobile: *" ;
 
for(var i=0 ; i<6 ; i++){
	formLabels[i].innerHTML = mylabels[i] ;
	formLabels[i].style.color = "black" ;
}
}
function check(valid) {
	 var valid ;
	 if(valid == true){
		 window.location.href="file:///C:/Users/Zinab/Desktop/test/navbar.html#";
	 }
}