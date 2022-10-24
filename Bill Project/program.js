// Create Array

var billType = [
    "Select Bill Type",
    "Utilities", 
    "Mortgage", 
    "Insurance",
    "Phone Bill",
    "Internet",
    "Car Payment",
    "Other"];

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


    allbills.appendChild(newSquare)
    newSquare.appendChild(newButton)
});

var deleteSquare = document.getElementById("deleteSquare");

function removediv (deleteSquare) {
    newButton.target.parentNode.remove()
};

// var newButton = deleteSquare;

// function removeDiv(deleteSquare){
//     deleteSquare.child.remove();
// }