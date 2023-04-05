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
  //Test Circle render method
  describe("Circle", () => {
    it("Should render html that creates a triangle SVG", () => {
      //arrange
      const shapeColor = "black";
      const text = "ABC";
      const textColor = "white";
      const circle = new Circle(shapeColor, text, textColor);
      const expectedResult = `<circle cx="150" cy="100" r="100" fill="${shapeColor}" />
        <text x="150" y="125" font-size="75" text-anchor="middle" fill="${textColor}">
        ${text}
        </text>`;
      //act
      const actualResult = circle.render();
      //assert
      expect(actualResult).toEqual(expectedResult);
    });
  });
  //Test Square render method
  describe("Circle", () => {
    it("Should render html that creates a triangle SVG", () => {
      //arrange
      const shapeColor = "red";
      const text = "ABC";
      const textColor = "black";
      const square = new Square(shapeColor, text, textColor);
      const expectedResult = `<rect x="0" y="0" width="500" height="500" fill="${shapeColor}" />
        <text x="250" y="300" font-size="170" text-anchor="middle" fill="${textColor}">
        ${text}
        </text>`;
      //act
      const actualResult = square.render();
      //assert
      expect(actualResult).toEqual(expectedResult);
    });
  });
});
