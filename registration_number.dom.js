var addbtnElem = document.querySelector(".addBtn");
var textBtnElem = document.querySelector(".textField");
var radioBtnElem = document.querySelectorAll(".radioBtn");
var showBtnElem = document.querySelector(".showBtn");
var displayTextElem = document.querySelector(".box");
var errorElement = document.querySelector(".error");

// var storage = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];

var instance = Registrations();

// var storage = localStorage.getItem('addToList');


function errorMessages() {

    setTimeout(function () {
        errorMessage.innerHTML = "";
    }, 2000);

}


function createRegNumberElem(regNumber) {


    var node = document.createElement("li");
    var textnode = document.createTextNode(regNumber);
    node.appendChild(textnode);
    return node;
}
function addNumbers() {

    if (textBtnElem.value === "") {
        errorElement.innerHTML = "Please enter reg and select radio button!"
        errorMessages();
        return;
    }
    if (textBtnElem.value === undefined) {
    }

    var regex = /[A-Z]{2}\s[0-9]{6}/g;
    var newReg = regex.test(textBtnElem.value)

    if (!newReg) {
        errorElement.innerHTML = "A valid reg number consists of 2 or 3 letters, a space, followed by 6 to 7 digits, please try again";
        errorMessages();
        return;
    }

    if (textBtnElem.value) {
        var display = instance.addToList(textBtnElem.value);
        textBtnElem.value = ""

        if (!display) {
            errorElement.innerHTML = "Reg number already exists, Please enter a different one!"
            //errorElement.innerHTML = ""
            errorMessages();
        }
        else {
            var node = createRegNumberElem(display);

            document.getElementById("myList").appendChild(node);
            errorElement.innerHTML = ""
        }

    }

    // localStorage.setItem("list", JSON.stringify(instance.getRegistrations()));



}


showBtnElem.addEventListener('click', function () {

    
    var checkedBtn = "town";

    var selectedTown = document.querySelector(".radioBtn:checked");

    if (selectedTown) {
        checkedBtn = selectedTown.value;
    }
    if (checkedBtn.value === undefined) {
       errorElement.innerHTML = " First select a town!"
       errorMessages();
    }


    let theFilteredTowns = [];

    if (checkedBtn === "town") {
        theFilteredTowns = instance.getRegistrations();
    } else {
        theFilteredTowns = instance.theFilter(checkedBtn)
    }


    document.getElementById("myList").innerHTML = "";


    for (var i = 0; i < theFilteredTowns.length; i++) {

        var currentRegNumber = theFilteredTowns[i];
        var node = createRegNumberElem(currentRegNumber);
        document.getElementById("myList").appendChild(node);

    }




});

addbtnElem.addEventListener('click', addNumbers)
