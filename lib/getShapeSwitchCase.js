//function that gets the shape chosen from prompted list in prompts.js
function getShape(logoText, textColor, shapeColor, shape) {
  switch (shape) {
    case "circle":
      return `<circle cx="150" cy="100" r="100" fill="${shapeColor}" />
        <text x="150" y="125" font-size="75" text-anchor="middle" fill="${textColor}">
        ${logoText}
        </text>`;
    case "triangle":
      return `<polygon points="250,0 0,500 500,500" fill="${shapeColor}" />
        <text x="250" y="350" font-size="105" text-anchor="middle" fill="${textColor}">
        ${logoText}
        </text>`;
    case "square":
      return `<rect x="0" y="0" width="500" height="500" fill="${shapeColor}" />
        <text x="250" y="300" font-size="170" text-anchor="middle" fill="${textColor}">
        ${logoText}
        </text>`;
    default:
      return "";
  }
}

module.exports = getShape;
