describe('Registration_numbers', function () {
    it('should push the added registration number to a list', function () {
        var numbers = Registrations();
        numbers.addToList("CA 12345");
        assert.deepEqual(["CA 12345"], numbers.getRegistrations());
    });
    it('should push the added registration numbers to a list', function () {
        var numbers = Registrations();
        numbers.addToList("CA 12345");
        numbers.addToList("CJ 45678");

        assert.deepEqual(["CA 12345", "CJ 45678"], numbers.getRegistrations());
    });
    it('should not push the added registration number if it already exists in the list', function () {
        var numbers = Registrations();
        numbers.addToList("CA 12345");
        numbers.addToList("CJ 45678");
        numbers.addToList("CA 12345");

        assert.deepEqual(["CA 12345", "CJ 45678"], numbers.getRegistrations());
    });


    it("should return all registration numbers from Bellville", () => {
        let numbers = Registrations();
        numbers.addToList("CY 123556");
        numbers.addToList("CA 34365");

        numbers.getRegistrations();

        assert.deepEqual(["CY 123556"], numbers.theFilter("CY"))

    })
    it('should return registration numbers from Cape Town only', function () {
        var numbers = Registrations();
        numbers.addToList("CA 54321");
        numbers.addToList("CL 23456");
        numbers.addToList("CA 67890");
        numbers.getRegistrations();
        assert.deepEqual(["CA 54321", "CA 67890"], numbers.theFilter("CA"));
    });
    it('should return registration numbers from Grabouw', function () {
        var numbers = Registrations();
        numbers.addToList("CY 54321");
        numbers.addToList("CEO 23456");
        numbers.addToList("CEO 67890");

        assert.deepEqual(["CEO 23456", "CEO 67890"], numbers.theFilter("CEO"));
    });
    it('should return registration numbers from Grabouw, Cape Town and Bellville when the all button is checked', function () {
        var numbers = Registrations();
        numbers.addToList("CEO 54321");
        numbers.addToList("CA 23456");
        numbers.addToList("CY 67890");


        numbers.getRegistrations();
        assert.deepEqual(["CEO 54321", "CA 23456", "CY 67890"], numbers.theFilter(""));
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