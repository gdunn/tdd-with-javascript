
describe('Greeter to say Hello <person>!', function () {
    
    it('It can say Hello world!', function () {
        
        // Setup mocks
        var nameElement = {'value' : 'world'};
        var methodResult = null;
        var alertMethod = function(m) {methodResult = m};
        
        // Run
        greeter(nameElement, alertMethod);
        
        // Expectations matched?
        expect(methodResult).toMatch("Hello world!");
        
    });
    
});