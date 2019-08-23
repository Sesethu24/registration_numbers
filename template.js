var addbtnElement = document.querySelector(".addTempBtn");
var textBtnElement = document.querySelector(".textTemp");
var radioBtnElement = document.querySelectorAll(".radioTempBtn");
var showBtnElement = document.querySelector(".showTempBtn");
var displayTextElement = document.querySelector(".tempBox");
var errorElem = document.querySelector(".errors");
var resetElement = document.querySelector(".resetTempBtn");

var myTemplate = document.querySelector(".regTemplate").innerHTML;
var registrations = document.querySelector(".regData");
var regTemplate = Handlebars.compile(myTemplate);

let temps = [];
if (localStorage["regs"]) {
    temps = JSON.parse(localStorage["regs"])
}


var temp = Registrations(temps);

var store = localStorage.getItem('addToList');

createRegNumTemp(temp.getRegistrations());

function errorMessage() {

    setTimeout(function () {
        document.querySelector(".errors").innerHTML = "";
    }, 2000);

}

function regTemp() {

    var displayTemp = textBtnElement.value;
    var validReg = temp.addToList(displayTemp);
    textBtnElement.value = ""
    if (!validReg) {
        errorElem.innerHTML = temp.getErrorMessages();
        errorMessage();
        return;
    }
    else {
        
        errorElement.innerHTML = ""
        localStorage.setItem("regs", JSON.stringify(temp.getRegistrations()));
        displayTextElement.innerHTML = regTemplate({ myTemp: temps });
    }
}
function createRegNumTemp(regNumberTemp) {
    
        var currentRegNum = regNumberTemp
        displayTextElement.innerHTML = regTemplate({ myTemp: currentRegNum });
       
    }

function regFilter() {

    errorElem.innerHTML = '';
    var selected = document.querySelector(".radioTempBtn:checked");
    if (selected != null) {
        var checkedBtnElem = selected.value;
        let theFiltered = temp.theFilter(checkedBtnElem);
        createRegNumTemp(theFiltered);

    } 
    else {
        errorElem.innerHTML = " First select a town!"
        errorMessage();
    }
}

resetElement.addEventListener('click', function () {

    window.location.reload();
    localStorage.clear();

});


addbtnElement.addEventListener('click', regTemp)
showBtnElement.addEventListener('click', regFilter)