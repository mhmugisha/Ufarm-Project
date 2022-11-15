
function multiply(){

    var quantity = document.getElementById('quantity').value;
    var unitprice = document.getElementById('unitprice').value;
    var totalamount = parseFloat(quantity)*parseFloat(unitprice);
    document.getElementById("totalamount").value = totalamount;
}