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
        if (!newReg) {
            error = "A valid reg number consists of 2 or 3 letters, a space, followed by 6 to 7 digits, please try again";
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