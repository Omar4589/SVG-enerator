//Import getShapeSwitchCase
const getShape = require("./getShapeSwitchCase.js");

//function to generate SVG html
function createSVG(shapeColor, logoText, textColor, shape) {
  return `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${getShape(shapeColor, logoText, textColor, shape)}
      </svg>
    `;
}

//EXPORT THE FUNCTION SO YOU CAN USE IT
module.exports = createSVG;
