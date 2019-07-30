describe('Registration_numbers' , function(){
    it('should push the added registration number to a list' , function(){
        var numbers = Registrations();
        numbers.addToList("CA 12345");
        assert.deepEqual(["CA 12345"],numbers.getRegistrations());
    });
    it('should push the added registration numbers to a list' , function(){
        var numbers = Registrations();
        numbers.addToList("CA 12345");
        numbers.addToList("CJ 45678");

        assert.deepEqual(["CA 12345", "CJ 45678"] ,numbers.getRegistrations());
    });
    it('should not push the added registration number if it already exists in the list' , function(){
        var numbers = Registrations();
        numbers.addToList("CA 12345");
        numbers.addToList("CJ 45678");
        numbers.addToList("CA 12345");

        assert.deepEqual(["CA 12345", "CJ 45678"] ,numbers.getRegistrations());
    });
    it('should return registration numbers from Cape Town only' , function(){
        var numbers = Registrations();
        numbers.addToList("CA 54321");
        numbers.addToList("GP 23456");
        numbers.addToList("CA 67890");
        assert.deepEqual(["CA 54321", "CA 67890"] , numbers.theFilter());
    });
    it('should return registration numbers from Bellville only' , function(){
        var numbers = Registrations();
        numbers.addToList("CY 54321");
        numbers.addToList("CK 23456");
        numbers.addToList("CY 67890");

        assert.deepEqual(["CY 54321", "CY 67890"] , numbers.theFilter());
    });
    it('should return registration numbers from Grabouw only' , function(){
        var numbers = Registrations();
        numbers.addToList("CEO 54321");
        numbers.addToList("CEO 23456");
        numbers.addToList("CJ 67890");

        assert.deepEqual(["CEO 54321", "CEO 23456"] , numbers.theFilter());
    });
    it('should return registration numbers from Grabouw, Cape Town and Bellville' , function(){
        var numbers = Registrations();
        numbers.addToList("CEO 54321");
        numbers.addToList("CA 23456");
        numbers.addToList("CY 67890");
        numbers.addToList("GP 67891");

        assert.deepEqual(["CEO 54321", "CA 23456", "CY 67890"] , numbers.theFilter());
    });
});