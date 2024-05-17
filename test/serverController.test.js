const controller = require('../serverController');

describe("Testing message names", () => {
    test("Name AdrianLindão", () => {
    // arrange and act
    var result = controller.messageName("Pedro")
    
    // assert
    expect(result).toBe("my name is AdrianLindão");
    });
    
    test("empty name", () => {
    // arrange and act
    var result = controller.messageName("")
    
    // assert
    expect(result).toBe("my name is ");
    });
})