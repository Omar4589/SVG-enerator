//Import shapes
const { Triangle, Circle, Square } = require("./shapes");
//function that gets the shape chosen from prompted list in prompts.js
function getShape(shapeColor, logoText, textColor, shape) {
  switch (shape) {
    case "circle":
      //returns new circle and calls the render method that was created in the class
      return new Circle(shapeColor, logoText, textColor).render();
    case "triangle":
      //returns new triangle and calls the render method that was created in the class
      return new Triangle(shapeColor, logoText, textColor).render();
    case "square":
      //returns new square and calls the render method that was created in the class
      return new Square(shapeColor, logoText, textColor).render();
    default:
      //handle error
      throw new Error("Invalid shape");
  }
}

//EXPORT THE FUNCTION SO YOU CAN USE IT
module.exports = getShape;
