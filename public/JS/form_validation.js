
const Validate = () =>{
    var uniqueid = document.getElementById('uniqueid');
    var role = document.getElementById('role');
    var fullName = document.getElementById('fullname');
    var nin = document.getElementById('nin');
    var homeAddress = document.getElementById('address');
    var phoneNumber = document.getElementById('phone');
    var userName = document.getElementById('username');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmpassword')
   
    var uniqueidError = document.getElementById('uniqueiderror');
    var roleError = document.getElementById('roleerror');
    var fullNameError = document.getElementById('fullnameerror');
    var ninError = document.getElementById('ninerror');
    var homeAddressError = document.getElementById('homeaddresserror');
    var phoneNumberError = document.getElementById('phonenumbererror');
    var userNameError = document.getElementById('usernameerror');
    var passwordError = document.getElementById('passwordrrror');
    var confirmPasswordError = document.getElementById('confirmpassworderror')
    

    //Unique ID
    const uniqueNoRegex = /^[0-9a-zA-Z]+$/; //Means that every Urban Farmer unique id starts with UF-number
    if(uniqueid.value==''){
        uniqueid.style.border = '1px solid red';
        uniqueidError.textContent='Please enter unique ID';
        uniqueidError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }else if(!(uniqueid.value.match(uniqueNoRegex))){
        uniqueid.style.border = '1px solid red';
        uniqueidError.textContent='Unique no format UF-00';
        uniqueidError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }else{
        uniqueid.style.border='1px solid green';
        uniqueidError.textContent = '';
    }

    //Role
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


    //Full Name - Need Regex for for two names with one space btn. 
    const fullNameRegex = /^UF-([0-9]{3})+$/; //Means that every Urban Farmer unique id starts with UF-number
    if(fullName.value==''){
        fullName.style.border = '1px solid red';
        fullNameError.textContent='Enter two names with one space between';
        fullNameError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }else if(!(fullName.value.match(fullNameRegex))){
        fullName.style.border = '1px solid red';
        fullNameError.textContent='Enter two names with one space between';
        fullNameError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }else{
        fullName.style.border='1px solid green';
        fullNameError.textContent = '';
    }

    //NIN 
    const ninRegex = /^[0-9a-zA-Z]+$/; //Means that every Urban Farmer unique id starts with UF-number
    if(nin.value==''){
        nin.style.border = '1px solid red';
        ninError.textContent='Please Enter NIN';
        ninError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }else if(!(nin.value.match(ninRegex))){
        nin.style.border = '1px solid red';
        ninError.textContent='Please enter valid NIN';
        ninError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }else{
        nin.style.border='1px solid green';
        ninError.textContent = '';
    }

    //Home address
    if(homeAddress.value==''){
        homeAddress.style.border = '1px solid red';
        homeAddressError.textContent='Please specify home address';
        homeAddressError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }else if(homeAddress.value=='notspecified'){
        homeAddress.style.border = '1px solid red';
        homeAddressError.textContent='Please specify homeAddress';
        homeAddressError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }else{
        homeAddress.style.border='1px solid green';
        homeAddressError.textContent = '';
    }

    //Phone Number
    const phoneNoRegex = /^\(?([0-9]{4})\)?[-.]?([0-9]{6})$/; 
    if(phoneNumber.value==''){
        phoneNumber.style.border = '1px solid red';
        phoneNumberError.textContent='Please enter phone number';
        phoneNumberError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }else if(!(phoneNumber.value.match(phoneNoRegex))){
        phoneNumber.style.border = '1px solid red';
        phoneNumberError.textContent='Enter phone number without country code.';
        phoneNumberError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }else{
        phoneNumber.style.border='1px solid green';
        phoneNumberError.textContent = '';
    }

    //User Name
    const userNameRegex = /^[0-9a-zA-Z]+$/; //Means that every Urban Farmer unique id starts with UF-number
    if(userName.value==''){
        userName.style.border = '1px solid red';
        userNameError.textContent='Please enter user name.';
        userNameError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }else if(!(userName.value.match(userNameRegex))){
        userName.style.border = '1px solid red';
        userNameError.textContent='Please enter a name without special characters.';
        userNameError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        return false;
    }else{
        userName.style.border='1px solid green';
        userNameError.textContent = '';
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