
const Validate = () =>{
    var role = document.getElementById('role');
    var uniqueid = document.getElementById('uniqieid');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword')
    
    var roleError = document.getElementById('roleError');
    var uniqieidError = document.getElementById('uniqiueid');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError')
    
    
    if(role.value==''){
        role.style.border = '1px solid red';
        roleError.textContent='Please specify role';
        roleError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }else if(role.value=='notspecified'){
        role.style.border = '1px solid red';
        roleError.textContent='Please specify role';
        roleError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }else{
        role.style.border='1px solid green';
        roleError.textContent = '';
    }
    
    //validating unique
    const unregex = /^UF-([0-9]{3})+$/; //Means that every Urban Farmer unique id starts with UF-number
    if(uniqueid.value==''){
        uniqueid.style.border = '1px solid red';
        uniqieidError.textContent='Please Enter unique no';
        uniqieidError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }else if(!(uniqueid.value.match(unregex))){
        uniqueid.style.border = '1px solid red';
        uniqieidError.textContent='Unique no format UF-000';
        uniqieidError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }else{
        uniqueid.style.border='1px solid green';
        uniqieidError.textContent = '';
    }
    
    //password
    if(password.value ==''){
        password.style.border = '1px solid red';
        passwordError.textContent='Please enter password';
        passwordError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }else if(password.value.length < 5){
        password.style.border = '1px solid red';
        passwordError.textContent='Should be greater than 5 characters';
        passwordError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }else if(password.value.length > 16){
        password.style.border = '1px solid red';
        passwordError.textContent='Should be less than 16 characters';
        passwordError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }
    else{
        password.style.border='1px solid green';
        passwordError.textContent = '';
    }
    
    //connfrim pas
    if(confirmPassword.value==''){
        confirmPassword.style.border = '1px solid red';
        confirmPasswordError.textContent='Please specify role';
        confirmPasswordError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }else if(!(confirmPassword.value=== password.value)){
        confirmPassword.style.border = '1px solid red';
        confirmPasswordError.textContent='Passwords dont match';
        confirmPasswordError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }
    else{
        confirmPassword.style.border='1px solid green';
        confirmPasswordError.textContent = '';
    }
    
    }