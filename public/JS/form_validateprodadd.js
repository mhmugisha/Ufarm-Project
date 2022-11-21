
const formValidateAddProd = (event) =>{
    let val = 0;

    var uniqueid = document.getElementById('uniqueid');
    var fullName = document.getElementById('fullname');
    var doreg = document.getElementById('doreg');
    var address = document.getElementById('address');  
    var prodCat = document.getElementById('productcategory');
    var product = document.getElementById('productname');
    var quantity = document.getElementById('quantity');
    var unitPrice = document.getElementById('unitprice');
    var totalAmount = document.getElementById('totalamount');
    var productType = document.getElementById('producttype');  
    var modePay = document.getElementById('modeofpay');  
    var modeDel = document.getElementById('deliverymode');
    var ward = document.getElementById('ward');
    var phoneNumber = document.getElementById('phone');
    
    var uniqueidError = document.getElementById('uniqueidError');
    var fullNameError = document.getElementById('fullNameError');
    var doregError = document.getElementById('doregError');    
    var addressError = document.getElementById('addressError'); 
    var prodCatError = document.getElementById('prodCatError'); 
    var productError = document.getElementById('productError'); 
    var quantityError = document.getElementById('quantityError'); 
    var unitPriceError = document.getElementById('unitPriceError'); 
    var totalAmountError = document.getElementById('totalAmountError'); 
    var productTypeError = document.getElementById('productTypeError'); 
    var modePayError = document.getElementById('modePayError'); 
    var modeDelError = document.getElementById('modeDelError'); 
    var wardError = document.getElementById('wardError'); 
    var phoneNumberError = document.getElementById('phoneNumberError');
    

    //Unique ID
    const uniqueNoRegex = /^[0-9a-zA-Z]+$/; 
    if(uniqueid.value==''){
        uniqueid.style.border = '1px solid red';
        uniqueidError.textContent='Please enter unique ID';
        uniqueidError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++;
    }else if(!(uniqueid.value.match(uniqueNoRegex))){
        uniqueid.style.border = '1px solid red';
        uniqueidError.textContent='Enter valid unique ID';
        uniqueidError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++;
    }else{
        uniqueid.style.border='1px solid green';
        uniqueidError.textContent = '';
    }

    //Full Name  
    const fullNameRegex = /^([a-zA-Z])+(\s)+[a-zA-Z]+$/; 
    if(fullName.value==''){
        fullName.style.border = '1px solid red';
        fullNameError.textContent='Enter two names with one space in between';
        fullNameError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++;
    }
    else if(!(fullName.value.match(fullNameRegex))){
        fullName.style.border = '1px solid red';
        fullNameError.textContent='Enter two names with one space in between';
        fullNameError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++;
    }
    else{
        fullName.style.border='1px solid green';
        fullNameError.textContent = '';
    }

    //doreg
    if(doreg.value==''){
        doreg.style.border = '1px solid red';
        doregError.textContent='Enter date of produce upload';
        doregError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++;
    }else{
        doreg.style.border='1px solid green';
        doregError.textContent = '';
    }

    //Address
    if(address.value == ''){
        address.style.border = '1px solid red';
        addressError.textContent = 'Enter home address';
        addressError.style = "color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++;
    }else{
        address.style.border='1px solid green';
        addressError.textContent = '';
    }

    //Product Category
    if(prodCat.value == ''){
        prodCat.style.border = '1px solid red';
        prodCatError.textContent = 'Select product category';
        prodCatError.style = "color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++;
    }else{
        prodCat.style.border='1px solid green';
        prodCatError.textContent = '';
    }

    //Product 
    if(product.value == ''){
        product.style.border = '1px solid red';
        productError.textContent = 'Enter product name';
        productError.style = "color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++;
    }else{
        product.style.border='1px solid green';
        productError.textContent = '';
    }

    //Quantity 
    const quantityRegex = /^[0-9]+$/; 
    if(quantity.value==''){
        quantity.style.border = '1px solid red';
        quantityError.textContent='Enter quantity';
        quantityError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++;
    }else if(!(quantity.value.match(quantityRegex))){
        quantity.style.border = '1px solid red';
        quantityError.textContent='Enter valid quantity';
        quantityError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++;
    }else{
        quantity.style.border='1px solid green';
        quantityError.textContent = '';
    }

    //Unit Price
    const unitPriceRegex = /^[0-9]+$/; 
    if(unitPrice.value==''){
        unitPrice.style.border = '1px solid red';
        unitPriceError.textContent='Enter unit price';
        unitPriceError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++;
    }else if(!(unitPrice.value.match(unitPriceRegex))){
        unitPrice.style.border = '1px solid red';
        unitPriceError.textContent='Enter valid unit price';
        unitPriceError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++;
    }else{
        unitPrice.style.border='1px solid green';
        unitPriceError.textContent = '';
    }

    //Total Amount 
    const totalAmountRegex = /^[0-9]+$/; 
    if(totalAmount.value==''){
        totalAmount.style.border = '1px solid red';
        totalAmountError.textContent='Enter total amount';
        totalAmountError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++;
    }else if(!(totalAmount.value.match(totalAmountRegex))){
        totalAmount.style.border = '1px solid red';
        totalAmountError.textContent='Enter valid total amount';
        totalAmountError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++;
    }else{
        totalAmount.style.border='1px solid green';
        totalAmountError.textContent = '';
    }

    //Product Type
    if(productType.value == ''){
        productType.style.border = '1px solid red';
        productTypeError.textContent = 'Enter product type';
        productTypeError.style = "color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++;
    }else{
        productType.style.border='1px solid green';
        productTypeError.textContent = '';
    }

    //Mode of Payment
    if(modePay.value == ''){
        modePay.style.border = '1px solid red';
        modePayError.textContent = 'Enter mode of payment';
        modePayError.style = "color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++;
    }else{
        modePay.style.border='1px solid green';
        modePayError.textContent = '';
    }

    //Mode of Delivery
    if(modeDel.value == ''){
        modeDel.style.border = '1px solid red';
        modeDelError.textContent = 'Enter mode of delivery';
        modeDelError.style = "color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++;
    }else{
        modeDel.style.border='1px solid green';
        modeDelError.textContent = '';
    }

    //Ward
    if(ward.value == ''){
        ward.style.border = '1px solid red';
        wardError.textContent = 'Please enter ward';
        wardError.style = "color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++;
    }else{
        ward.style.border='1px solid green';
        wardError.textContent = '';
    }

    //Phone Number
    const phoneNoRegex = /^\(?([0-9]{4})\)?[-.]?([0-9]{6})$/; 
    if(phoneNumber.value==''){
        phoneNumber.style.border = '1px solid red';
        phoneNumberError.textContent='Please enter phone number';
        phoneNumberError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }else if(!(phoneNumber.value.match(phoneNoRegex))){
        phoneNumber.style.border = '1px solid red';
        phoneNumberError.textContent='Enter 10 digit phone number.';
        phoneNumberError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }else{
        phoneNumber.style.border='1px solid green';
        phoneNumberError.textContent = '';
    }

    if(val > 0){
        event.preventDefault()
    }

}




