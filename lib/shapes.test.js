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
      const expectedResult = `<polygon points="150,0 0,300 300,300" fill="${shapeColor}" />
<text x="150" y="150" font-size="50" text-anchor="middle" fill="${textColor}">
      ${text}
      </text>`;
      //act
      const actualResult = triangle.render();
      //assert
      expect(actualResult).toEqual(expectedResult);
    });
    // New test case
    it("Should update the color and render a triangle SVG with the new color", () => {
      //arrange
      const shape = new Triangle();
      const expectedResult =
        '<polygon points="150,0 0,300 300,300" fill="blue" />';
      //act
      shape.setColor("blue");
      const actualResult = shape.render();
      //assert
      expect(actualResult).toEqual(expectedResult);
    });
  });
  //Test Circle render method
  describe("Circle", () => {
    it("Should render html that creates a circle SVG", () => {
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
    // New test case
    it("Should update the color and render a circle SVG with the new color", () => {
      //arrange
      const shape = new Circle();
      const expectedResult = '<circle cx="150" cy="100" r="100" fill="blue" />';
      //act
      shape.setColor("blue");
      const actualResult = shape.render();
      //assert
      expect(actualResult).toEqual(expectedResult);
    });
  });
  //Test Square render method
  describe("Square", () => {
    it("Should render html that creates a square SVG", () => {
      //arrange
      const shapeColor = "red";
      const text = "ABC";
      const textColor = "black";
      const square = new Square(shapeColor, text, textColor);
      const expectedResult = `<rect x="0" y="0" width="200" height="200" fill="${shapeColor}" />
<text x="100" y="125" font-size="80" text-anchor="middle" fill="${textColor}">
      ${text}
      </text>`;
      //act
      const actualResult = square.render();
      //assert
      expect(actualResult).toEqual(expectedResult);
    });
    // New test case
    it("Should update the color and render a square SVG with the new color", () => {
      //arrange
      const shape = new Square();
      const expectedResult =
        '<rect x="0" y="0" width="200" height="200" fill="blue" />';
      //act
      shape.setColor("blue");
      const actualResult = shape.render();
      //assert
      expect(actualResult).toEqual(expectedResult);
    });
  });
});
