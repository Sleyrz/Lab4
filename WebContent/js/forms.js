function checkForm(){
 var error=false; 
 var errorText=document.getElementById("errorName").className="alert alertdanger";
var errorLastName=document.getElementById("errorLastName").className="alert alertdanger";
var errorEmail=document.getElementById("errorEmail").className="alert alertdanger";
    
 var contactName = document.getElementById("contactName");
 var contactLastName = document.getElementById("contactLastName");
 var contactEmail = document.getElementById("contactEmail");
    
    if (contactName.value == ""){
     error=true;
     }
    else{
        errorText += "imię\n";
    }
    if (contactLastName.value == ""){
     error=true;
     }
    else{
        errorLastName += "nazwisko\n"
    }
     if (contactEmail.value == ""){
     error=true;
     }
    else{
        var email = contactEmail.value;
        var regex =  /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if(regex.test(email)==false){
            error=true;
        }
    }
    if (!error){
        document.getElementById("errorEmail").innerHTML="Podałeś dobry addres email";
        return true;
    }
    else{
        errorEmail += "email\n";
        document.getElementById("errorEmail").innerHTML="Podałeś zły addres email, prosimy o poprawanie adresu email w formularzu";
     return false;
    } 
}
