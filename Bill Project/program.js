// Create Array

var billType = [
    "Select Bill Type",
    "Utilities", 
    "Mortgage", 
    "Insurance",
    "Phone Bill",
    "Internet",
    "Car Payment"];

var sel = document.getElementById('billTypeList');
for (var i=0; i < billType.length; i++){
    var opt = document.createElement('option');
    opt.innerHTML = billType[i];
    opt.value = billType[i];
    sel.appendChild(opt);
}
var form = document.querySelector("form")
var allbills = document.getElementById("allbills")
var billType = document.getElementById("billType")

form.addEventListener("submit", function(event){
    event.preventDefault()
    var newSquare = document.createElement("div");
    var newButton = document.createElement("button")

    newSquare.classList.add('billUnpaidSquare');
    newButton.classList.add('deleteSquare');
    newButton.innerHTML = "Delete Bill Item";
    newSquare.innerHTML = 
        "<div id='textinput'>" + 
        "<b><u>" + document.newitem.billType.value + "</b></u>" + "<br>" + 
        "Payee: " + document.newitem.payee.value + "<br>" + 
        "Amount Due: $" + document.newitem.amountdue.value + "<br>" + 
        "Due on: " + document.newitem.dueDate.value + "</div>";

    // "<div id='textinput'> Hi I need to figure out how to add my data into the square. <br> The JSON Stringify output it into an ugly array I didnt like</div>"

    allbills.appendChild(newSquare)
    newSquare.appendChild(newButton)
    
    })


// function removeDiv(deleteSquare){
//     deleteSquare.parent.remove();
// }