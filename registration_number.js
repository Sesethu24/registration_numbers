function Registrations() {

    var regNumbers = [];

    function addToList(param) {

        if (!regNumbers.includes(param)) {
            regNumbers.push(param);
            return param;
        }
    }

    function getRegistrations() {

        return regNumbers;
    }

    function theFilter() {
        var myfilter = []

        for (var i = 0; i < regNumbers.length; i++) {

            if (regNumbers[i].startsWith("CA")) {
                myfilter.push(regNumbers[i]);
            }
            else if (regNumbers[i].startsWith("CY")) {
                myfilter.push(regNumbers[i]);
            }
            else if (regNumbers[i].startsWith("CEO")) {
                myfilter.push(regNumbers[i]);
            }
        }

        return myfilter;
    }
    function errorMessages(){
        if(!regNumbers){
            return "Please enter a registration number!"
        }
    }

    return {
        addToList,
        getRegistrations,
        theFilter,
        errorMessages
    }
}