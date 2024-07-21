
function validate(){
    var user= document.getElementById("user").value ;
    var email= document.getElementById("email").value ;
    var pass= document.getElementById("pass").value ;
    var confirm= document.getElementById("confirm").value ;
    var result= document.getElementById("result");

    result.style.color= '#fff';
    result.style.backgroundColor= '#f00';
    result.style.textAlign= 'center';
    result.style.fontSize= '20px';
    result.style.padding= '5px';
    result.style.borderRadius= '7px';
    result.style.transition= 'all 0.5s linear';

    if (user =="" && email=="" && pass=="" && confirm==""){
        result.innerHTML = "Enter Data In Form";
        return false ;
    }else if (user.lenght<5 || user.lenght>15){
        result.innerHTML = "Enter 5-15 character";
        return false;
    }else if (email.indexOf("@") ==-1){
        result.innerHTML = "Enter Valid Email";
        return false;
    }else if (pass.lenght<8){
        result.innerHTML = "Enter at least 8 character in password";
        return false ; 
    }else if (pass != confirm){
        result.innerHTML = "Enter matched password";
        return false ; 
    }else {
        return true;
    }
}