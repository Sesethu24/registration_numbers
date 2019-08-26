var addbtnElem = document.querySelector(".addBtn");
var textBtnElem = document.querySelector(".textField");
var radioBtnElem = document.querySelectorAll(".radioBtn");
var showBtnElem = document.querySelector(".showBtn");
var displayTextElem = document.querySelector(".box");
var errorElement = document.querySelector(".error");
var resetElem = document.querySelector(".resetBtn");

let plates = [];
if (localStorage["list"]) {
    plates = JSON.parse(localStorage["list"])
}

var instance = Registrations(plates);

var storage = localStorage.getItem('addToList');

createRegNumList(instance.getRegistrations());

function errorMessages() {

    setTimeout(function () {
        document.querySelector(".error").innerHTML = "";
    }, 3000);

}
function createRegNumberElem(regNumber) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(regNumber);
    node.appendChild(textnode);
    return node;
}

function addNumbers() {

        var display = textBtnElem.value;
        
        var isvalidReg = instance.addToList(display);
        textBtnElem.value = ""

        if (!isvalidReg) {
            errorElement.innerHTML = instance.getErrorMessages();
            errorMessages();
            return;
        } 
        else {
            var node = createRegNumberElem(display);
            document.getElementById("myList").appendChild(node);
            errorElement.innerHTML = ""
            localStorage.setItem("list", JSON.stringify(instance.getRegistrations()));
        }
 
   }
function createRegNumList(regNumberList) {
    
    for (var i = 0; i < regNumberList.length; i++) {
        var currentRegNumber = regNumberList[i];
        var node = createRegNumberElem(currentRegNumber);
        document.getElementById("myList").appendChild(node);

    }
}
function filterFunction() {

    errorElement.innerHTML = '';
    var selectedTown = document.querySelector(".radioBtn:checked");
    if (selectedTown != null) {
        var checkedBtn = selectedTown.value;
        let theFilteredTowns = instance.theFilter(checkedBtn);
        document.getElementById("myList").innerHTML = "";
        createRegNumList(theFilteredTowns);
    } 
    else {
        errorElement.innerHTML = " First select a town!"
        errorMessages();
    }
}
resetElem.addEventListener('click', function () {

    window.location.reload();
    localStorage.removeItem("list");

});

addbtnElem.addEventListener('click', addNumbers)
showBtnElem.addEventListener('click', filterFunction)