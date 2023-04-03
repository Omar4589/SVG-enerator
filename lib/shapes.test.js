//Import shapes that will be tested.
const { Triangle, Circle, Square } = require("./shapes");

describe("Shapes", () => {
  //Test Triangle render method
  describe("Triangle", () => {
    it("Should render html that creates a triangle SVG", () => {
      //arrange

      const shapeColor = "red";
      const text = "ABC";
      const textColor = "white";
      const triangle = new Triangle(shapeColor, text, textColor);
      const expectedResult = `<polygon points="250,0 0,500 500,500" fill="${shapeColor}" />
        <text x="250" y="350" font-size="105" text-anchor="middle" fill="${textColor}">
        ${text}
        </text>`;
      //act
      const actualResult = triangle.render();

      //assert
      expect(actualResult).toEqual(expectedResult);
    });
  });
});
