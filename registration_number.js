function Registrations(plate) {

    var regNumbers = plate || [];
    var error = "";

    function addToList(param) {

        error = "";
        if (regNumbers === "") {
            error = "reg can't be blank, Please enter a reg number!"
            return false;
        }

        var regex = /[A-Z]{2}\s[0-9]{6}/g;
        var newReg = regex.test(param)

        var regex = /([A-Z]){2}\s+([0-9]){3}\s([0-9]){3}/g;
        var newReg2 = regex.test(param)

        if (!newReg && !newReg2) {
            error = "please check the registrations examples above for valid registration numbers!";
            return false;
        }

      if (!regNumbers.includes(param)) {
            regNumbers.push(param);
            return true;
        }else{
            error = "reg number already exists!"
        }

    }
    function theFilter(town) {

        var myfilter = [];
        regNumbers.forEach(element => {
            if (element.startsWith(town)) {
                myfilter.push(element)
            }
        });

        return myfilter;
    }
    function getRegistrations() {
        return regNumbers;
    }


    function getErrorMessages() {
        return error;
    }

    return {
        addToList,
        getRegistrations,
        theFilter,
        getErrorMessages

    }
}