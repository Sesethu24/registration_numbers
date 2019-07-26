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

    return {
        addToList,
        getRegistrations
    }
}