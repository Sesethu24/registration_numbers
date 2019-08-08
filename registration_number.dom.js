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

//  var storage = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];

var instance = Registrations(plates);

var storage = localStorage.getItem('addToList');

 //gets the list of all the reg numbers to display
createRegNumList(instance.getRegistrations());

function errorMessages() {

    setTimeout(function () {
        document.querySelector(".error").innerHTML = "";
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

            errorMessages();
            return;
        }
        else { 
            var node = createRegNumberElem(display);

            document.getElementById("myList").appendChild(node);
            errorElement.innerHTML = ""
        }

    }

    localStorage.setItem("list", JSON.stringify(instance.getRegistrations()));
}
function createRegNumList(regNumberList){
    for (var i = 0; i < regNumberList.length; i++) {
        var currentRegNumber = regNumberList[i];
        //createRegNumberElem(currentRegNumber)
        
        var node = createRegNumberElem(currentRegNumber);
        document.getElementById("myList").appendChild(node);
        
    }
}
function filterFunction() {

    errorElement.innerHTML = '';
    var selectedTown = document.querySelector(".radioBtn:checked");
    if (selectedTown != null) {
        var checkedBtn = selectedTown.value;
        console.log(checkedBtn);
        let theFilteredTowns = instance.theFilter(checkedBtn);
        document.getElementById("myList").innerHTML = "";

        // write function for this for loop
        // it should take a list of reg numbers
        createRegNumList(theFilteredTowns);
        // for (var i = 0; i < theFilteredTowns.length; i++) {
        //     var currentRegNumber = theFilteredTowns[i];
        //     //createRegNumberElem(currentRegNumber)
            
        //     var node = createRegNumberElem(currentRegNumber);
        //     document.getElementById("myList").appendChild(node);
            
        // }
        // // function ends
        // then call Andre :-)      

    } else {

        errorElement.innerHTML = " First select a town!"
        errorMessages();
    }
}
resetElem.addEventListener('click', function () {

    window.location.reload();
    localStorage.clear();

});

// function updateTowns() {
//     var selectedTowns = document.querySelector(".radioBtn:checked");
//     var checked = selectedTowns.value;
//     var update = instance.theFilter(checked)
//     for (let i = 0; i < update.length; i++) {

//         var currentRegNumber = theFilteredTowns[i];
//         var node = createRegNumberElem(currentRegNumber);
//         document.getElementById("myList").appendChild(node);

//     }
//}


addbtnElem.addEventListener('click', addNumbers)
showBtnElem.addEventListener('click', filterFunction)