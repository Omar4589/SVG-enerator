//Import getShapeSwitchCase
const getShape = require("./getShapeSwitchCase.js");

//function to generate SVG html
function createSVG(logoText, textColor, shapeColor, shape) {
  return `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${getShape(logoText, textColor, shapeColor, shape)}
      </svg>
    `;
}

module.exports = createSVG;
