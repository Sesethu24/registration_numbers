function Registrations() {

    var regNumbers = [];

    function addToList(param) {
      
        
        if (!regNumbers.includes(param)) {
            regNumbers.push(param);
            return param;
        }
    }


    function theFilter(town) {
        
        var myfilter = []
        regNumbers.forEach(element => {
            if (element.startsWith(town)) {
                myfilter.push(element)
            }
        });
        // for (var i = 0; i < regNumbers.length; i++) {
    
        //     if (regNumbers[i].startsWith(town)) {
        //         myfilter.push(regNumbers[i]);
        //     }
        // }

        return myfilter;
    }
    function errorMessages(){
        if(regNumbers==""){
            return "Please enter a registration number!"
        }
    }

    function getRegistrations() {
        return regNumbers;
    }
    
// console.log(regNumbers)
    return {
        addToList,
        getRegistrations,
        theFilter,
        errorMessages
    }
}