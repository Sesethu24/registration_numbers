var addbtnElem = document.querySelector(".addBtn");
var textBtnElem = document.querySelector(".textField");
var radioBtnElem = document.querySelector(".radioBtn");
var showBtnElem = document.querySelector(".showBtn");
var displayTextElem = document.querySelector(".box");

var storage = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];

var instance = Registrations(storage);

var storage = localStorage.getItem('addToList');

addbtnElem.innerHTML = instance.addToList()

function addNumbers() {

    var radioBtnChecked = document.querySelector("input[name='town']:checked");

    if (radioBtnChecked) {
        var type = radioBtnChecked.value;
    }
    if (textBtnElem.value) {
        var display = instance.addToList(textBtnElem.value, type);
        textBtnElem.value = ""
    }
    var node = document.createElement("li");
    var textnode = document.createTextNode(display);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    localStorage.setItem("list", JSON.stringify(instance.getRegistrations()));

    addbtnElem.innerHTML = instance.addToList()

    showBtnElem.innerHTML = instance.filter(theFilter);
}

addbtnElem.addEventListener('click', addNumbers)
