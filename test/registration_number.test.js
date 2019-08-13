describe('Registration_numbers', function () {
    it('should push the added registration number to a list', function () {
        var numbers = Registrations();
        numbers.addToList("CA 123456");
        assert.deepEqual(["CA 123456"], numbers.getRegistrations());
    });
    it('should push the added registration numbers to a list', function () {
        var numbers = Registrations();
        numbers.addToList("CA 123455");
        numbers.addToList("CJ 456783");

        assert.deepEqual(["CA 123455", "CJ 456783"], numbers.getRegistrations());
    });
    it('should not push the added registration number if it already exists in the list', function () {
        var numbers = Registrations();
        numbers.addToList("CA 123452");
        numbers.addToList("CJ 456785");
        numbers.addToList("CA 123452");

        assert.deepEqual(["CA 123452", "CJ 456785"], numbers.getRegistrations());
    });


    it("should return all registration numbers from Bellville", () => {
        let numbers = Registrations();
        numbers.addToList("CY 123556");
        numbers.addToList("CA 343653");

        numbers.getRegistrations();

        assert.deepEqual(["CY 123556"], numbers.theFilter("CY"))

    })
    it('should return registration numbers from Cape Town only', function () {
        var numbers = Registrations();
        numbers.addToList("CA 543212");
        numbers.addToList("CL 234563");
        numbers.addToList("CA 678902");
        numbers.getRegistrations();
        assert.deepEqual(["CA 543212", "CA 678902"], numbers.theFilter("CA"));
    });
    it('should return registration numbers from Grabouw', function () {
        var numbers = Registrations();
        numbers.addToList("CY 543211");
        numbers.addToList("CEO 234562");
        numbers.addToList("CEO 678902");

        assert.deepEqual(["CEO 234562", "CEO 678902"], numbers.theFilter("CEO"));
    });
    it('should return registration numbers from Grabouw, Cape Town and Bellville when the all button is checked', function () {
        var numbers = Registrations();
        numbers.addToList("CEO 543215");
        numbers.addToList("CA 234563");
        numbers.addToList("CY 678902");


        numbers.getRegistrations();
        assert.deepEqual(["CEO 543215", "CA 234563", "CY 678902"], numbers.theFilter(""));
    });

});

describe("RegEx test", () => {
    var regex = /[A-Z]{2}\s[0-9]{6}/g;
    it("should return true ", () => {
        var name = "CA 123456"
        assert.equal(regex.test(name), true)

    })
    
     it("should check if the reg number matches the regex, meaning that it has at least 2 characters a space and 6 digits ", function ()  {
        var regex = /[A-Z]{2}\s[0-9]{6}/g;
        var name = "CA 123456"
            assert.equal(regex.test(name), true)
    
        })
    it("should return false", () => {
        var name = ".."

        assert.equal(regex.test(name), false)
    })
    it("should return false if the reg numbers dont match the regex and not allow it to be added to the list", () => {
        var name = "CA12345"

        assert.equal(regex.test(name), false)
    })
})