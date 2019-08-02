var addbtnElem = document.querySelector(".addBtn");
var textBtnElem = document.querySelector(".textField");
var radioBtnElem = document.querySelectorAll(".radioBtn");
var showBtnElem = document.querySelector(".showBtn");
var displayTextElem = document.querySelector(".box");

// var storage = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];

var instance = Registrations();

// var storage = localStorage.getItem('addToList');

// addbtnElem.innerHTML = instance.addToList()


function createRegNumberElem(regNumber) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(regNumber);
    node.appendChild(textnode);
    return node;
}

function addNumbers() {


    if (textBtnElem.value) {
        var display = instance.addToList(textBtnElem.value);
        textBtnElem.value = ""

        var node = createRegNumberElem(display);

        document.getElementById("myList").appendChild(node);

    }

    //if(instance.addToList(textBtnElem.value)){


    // localStorage.setItem("list", JSON.stringify(instance.getRegistrations()));


}

showBtnElem.addEventListener('click', function () {

    var checkedBtn = "town";

    var selectedTown = document.querySelector(".radioBtn:checked");

    if (selectedTown) {
        checkedBtn = selectedTown.value;
    }

    let theFilteredTowns = [];

    // decide what to display based on which radio button was chosen
    if (checkedBtn === "town") {
        theFilteredTowns = instance.getRegistrations();
    } else {
        theFilteredTowns = instance.theFilter(checkedBtn)
    }

    // remove all the current reg numbers
    document.getElementById("myList").innerHTML = "";

    // put the filtered reg numbers back on the screen
    for (var i = 0; i < theFilteredTowns.length; i++) {

        var currentRegNumber = theFilteredTowns[i];
        var node = createRegNumberElem(currentRegNumber);
        document.getElementById("myList").appendChild(node);

    }




});

addbtnElem.addEventListener('click', addNumbers)
