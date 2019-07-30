var addbtnElem = document.querySelector(".addBtn");
var textBtnElem = document.querySelector(".textField");
var radioBtnElem = document.querySelector(".radioBtn");
var showBtnElem = document.querySelector(".showBtn");
var displayTextElem = document.querySelector(".box");

// var storage = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];

var instance = Registrations();

// var storage = localStorage.getItem('addToList');

// addbtnElem.innerHTML = instance.addToList()

function addNumbers() {

    if (textBtnElem.value) {
        var display = instance.addToList(textBtnElem.value);

        textBtnElem.value = ""
    }

    //if(instance.addToList(textBtnElem.value)){
    var node = document.createElement("li");
    var textnode = document.createTextNode(display);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    // localStorage.setItem("list", JSON.stringify(instance.getRegistrations()));


}

showBtnElem.addEventListener('click', function () {
    console.log(instance.theFilter());

    var eachTown = document.getElementsByName('town');

    for (var i = 0; i < eachTown.length; i++) {
        if (eachTown[i].checked) {
            checked = eachTown[i].value;
        }
    }


});

addbtnElem.addEventListener('click', addNumbers)
