function Registrations() {

    var regNumbers = [];

    function addToList(param) {


        if (!regNumbers.includes(param)) {
            regNumbers.push(param);
            return param;
        }
        else {
            return "err"
        }
    }
    function theFilter(town) {

        var myfilter = []
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

    return {
        addToList,
        getRegistrations,
        theFilter

    }
}