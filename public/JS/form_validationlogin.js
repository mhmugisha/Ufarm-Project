
const formValidatelogin = (event) =>{
    let val = 0;

    var uniqueid = document.getElementById('uniqueid');
    var password = document.getElementById('password');

    var uniqueidError = document.getElementById('uniqueidError');
    var passwordError = document.getElementById('passwordError');
    
    //Unique ID
    if(uniqueid.value ==''){
        uniqueid.style.border = '1px solid red';
        uniqueidError.textContent='Enter unique ID';
        uniqueidError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }else{
        uniqueid.style.border='1px solid green';
        uniqueidError.textContent = '';
    }

    //Password
    if(password.value ==''){
        password.style.border = '1px solid red';
        passwordError.textContent='Enter password';
        passwordError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }else{
        password.style.border='1px solid green';
        passwordError.textContent = '';
    }
    
    if(val > 0){
        event.preventDefault()
    }  
}