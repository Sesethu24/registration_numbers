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

displayTextElement.innerHTML = regTemplate({regTemp: [] });
    


let temps = [];
if (localStorage["list"]) {
    temps = JSON.parse(localStorage["list"])
}

var temp = Registrations(temps);

var store = localStorage.getItem('addToList');

function errorMessage() {

    setTimeout(function () {
        document.querySelector(".errors").innerHTML = "";
    }, 2000);

}

function regTemp(){
  
    var displayTemp = textBtnElement.value;
        
    var validReg = temp.addToList(displayTemp);
    textBtnElement.value = ""
    if (!validReg) {
        errorElem.innerHTML = temp.getErrorMessage();
        errorMessage();
        return;
    }
    else {
     displayTextElement.innerHTML = regTemplate(myList);
     //localStorage.setItem("list", JSON.stringify(regTemplate.getRegistrations()));
    }
}
function regFilter(){

}
resetElement.addEventListener('click', function () {

    window.location.reload();
    localStorage.clear();

});


addbtnElement.addEventListener('click', regTemp)
showBtnElement.addEventListener('click', regFilter)