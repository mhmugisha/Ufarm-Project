
const formValidatefo = (event) =>{
    let val = 0;

    var uniqueid = document.getElementById('uniqueid');
    var role = document.getElementById('role');
    var fullName = document.getElementById('fullname');
    var nin = document.getElementById('nin');
    var dob = document.getElementById('dob');
    var doreg = document.getElementById('doreg');
    var phoneNumber = document.getElementById('phone');
    var password = document.getElementById('password');
    var gender = document.getElementById('gender')
    var activity = document.getElementById('activity')
    var ward = document.getElementById('ward')
    var residenceType = document.getElementById('residencetype')
    var duration = document.getElementById('duration')
    var address = document.getElementById('address')

    var uniqueidError = document.getElementById('uniqueidError');
    var roleError = document.getElementById('roleError');
    var fullNameError = document.getElementById('fullNameError');
    var ninError = document.getElementById('ninError');
    var dobError = document.getElementById('dobError');
    var doregError = document.getElementById('doregError');    
    var phoneNumberError = document.getElementById('phoneNumberError');
    var passwordError = document.getElementById('passwordError');
    var genderError = document.getElementById('genderError')
    var activityError = document.getElementById('activityError')
    var wardError = document.getElementById('wardError')
    var residencetypeError = document.getElementById('residencetypeError')
    var durationError = document.getElementById('durationError')
    var addressError = document.getElementById('addressError') 

    //Unique ID
    const uniqueNoRegex = /^[0-9a-zA-Z]+$/; //Means that every Urban Farmer unique id starts with UF-number
    if(uniqueid.value==''){
        uniqueid.style.border = '1px solid red';
        uniqueidError.textContent='Please enter unique ID';
        uniqueidError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        // return false;
        val++
    }else if(!(uniqueid.value.match(uniqueNoRegex))){
        uniqueid.style.border = '1px solid red';
        uniqueidError.textContent='Unique no format UF-00';
        uniqueidError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        // return false;
        val++
    }else{
        uniqueid.style.border='1px solid green';
        uniqueidError.textContent = '';
    }
    
    //Role
    if(role.value==''){
        role.style.border = '1px solid red';
        roleError.textContent='Please specify role';
        roleError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        // return false;
        val++
    
    }else{
        role.style.border='1px solid green';
        roleError.textContent = '';
    }


    //Full Name - Need Regex for for two names with one space btn. 
    const fullNameRegex = /^UF-([0-9]{3})+$/; 
    if(fullName.value==''){
        fullName.style.border = '1px solid red';
        fullNameError.textContent='Enter two names with one space between';
        fullNameError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        // return false;
        val++
    }
    // else if(!(fullName.value.match(fullNameRegex))){
    //     fullName.style.border = '1px solid red';
    //     fullNameError.textContent='Enter two names with one space between';
    //     fullNameError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    //     // return false;
    //     val++
    // }
    else{
        fullName.style.border='1px solid green';
        fullNameError.textContent = '';
    }

    //NIN 
    const ninRegex = /^[0-9a-zA-Z]+$/; 
    if(nin.value==''){
        nin.style.border = '1px solid red';
        ninError.textContent='Please Enter NIN';
        ninError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        // return false;
        val++
    }else if(!(nin.value.match(ninRegex))){
        nin.style.border = '1px solid red';
        ninError.textContent='Please enter valid NIN';
        ninError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        // return false;
        val++
    }else{
        nin.style.border='1px solid green';
        ninError.textContent = '';
    }

    //dob
    if(dob.value==''){
        dob.style.border = '1px solid red';
        dobError.textContent='Please enter date of birth';
        dobError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        // return false;
        val++
    }else{
        dob.style.border='1px solid green';
        dobError.textContent = '';
    }

    //doreg
    if(doreg.value==''){
        doreg.style.border = '1px solid red';
        doregError.textContent='Please enter date of birth';
        doregError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        // return false;
        val++
    }else{
        doreg.style.border='1px solid green';
        doregError.textContent = '';
    }

    //Phone Number
    const phoneNoRegex = /^\(?([0-9]{4})\)?[-.]?([0-9]{6})$/; 
    if(phoneNumber.value==''){
        phoneNumber.style.border = '1px solid red';
        phoneNumberError.textContent='Please enter phone number';
        phoneNumberError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        // return false;
        val++

    }else if(!(phoneNumber.value.match(phoneNoRegex))){
        phoneNumber.style.border = '1px solid red';
        phoneNumberError.textContent='Enter phone number without country code.';
        phoneNumberError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        // return false;
        val++
    }else{
        phoneNumber.style.border='1px solid green';
        phoneNumberError.textContent = '';
    }
    
    //password
    if(password.value ==''){
        password.style.border = '1px solid red';
        passwordError.textContent='Please enter password';
        passwordError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        // return false;
        val++
    }else if(password.value.length < 5){
        password.style.border = '1px solid red';
        passwordError.textContent='Should be greater than 5 characters';
        passwordError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        // return false;
        val++
    }else if(password.value.length > 16){
        password.style.border = '1px solid red';
        passwordError.textContent='Should be less than 16 characters';
        passwordError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        // return false;
        val++
    }
    else{
        password.style.border='1px solid green';
        passwordError.textContent = '';
    }

    //Gender
    if(gender.value==''){
        gender.style.border = '1px solid red';
        genderError.textContent='Please specify gender';
        genderError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        // return false;
        val++
    
    }else{
        gender.style.border='1px solid green';
        genderError.textContent = '';
    }

    //Activity
    if(activity.value==''){
        activity.style.border = '1px solid red';
        activityError.textContent='Please specify activity';
        activityError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        // return false;
        val++
    
    }else{
        activity.style.border='1px solid green';
        activityError.textContent = '';
    }

    //Ward
    if(ward.value==''){
        ward.style.border = '1px solid red';
        wardError.textContent='Please specify ward';
        wardError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        // return false;
        val++
    
    }else{
        ward.style.border='1px solid green';
        wardError.textContent = '';
    }

    //Residence type
    if(residenceType.value==''){
        residenceType.style.border = '1px solid red';
        residencetypeError.textContent='Please specify ward';
        residencetypeError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        // return false;
        val++
    }else{
        residenceType.style.border='1px solid green';
        residencetypeError.textContent = '';
    }

    //Years at residence
    if(duration.value==''){
        duration.style.border = '1px solid red';
        durationError.textContent='Please specify ward';
        durationError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        // return false;
        val++
    }else{
        duration.style.border='1px solid green';
        durationError.textContent = '';
    }

//Years at residence
if(address.value==''){
    address.style.border = '1px solid red';
    addressError.textContent='Please specify ward';
    addressError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    // return false;
    val++
}else{
    address.style.border='1px solid green';
    addressError.textContent = '';
}

    if(val > 0){
        event.preventDefault()
    }
    
    // //connfrim pas
    // if(confirmPassword.value==''){
    //     confirmPassword.style.border = '1px solid red';
    //     confirmPasswordError.textContent='Please specify role';
    //     confirmPasswordError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    //     return false;
    // }else if(!(confirmPassword.value=== password.value)){
    //     confirmPassword.style.border = '1px solid red';
    //     confirmPasswordError.textContent='Passwords dont match';
    //     confirmPasswordError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    //     return false;
    // }
    // else{
    //     confirmPassword.style.border='1px solid green';
    //     confirmPasswordError.textContent = '';
    // }
    
    }