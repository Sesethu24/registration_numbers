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
});