const controller = require('../serverController');

describe("Testing message names", () => {
    test("Name Pedro", () => {
    // arrange and act
    var result = controller.messageName("AdrianLindão")
    
    // assert
    expect(result).toBe("my name is Pedro");
    });
    
    test("empty name", () => {
    // arrange and act
    var result = controller.messageName("")
    
    // assert
    expect(result).toBe("my name is ");
    });
})