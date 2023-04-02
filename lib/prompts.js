//Import inquirer
const inquirer = require('inquirer');
//Import fs
const fs = require('fs');
//Import createSVG function
const createSVG = require('./generateSVGfunc');

//Prompt questions
inquirer
  .prompt([
// WHEN I am prompted for text inside svg image
// THEN I can enter up to three characters
    {
      type: "input",
      name: "logoText",
      message:
        "Hello! Let's get started. Please type up to 3 letters that will be inside the svg logo.",
    },
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
    {
      type: "input",
      name: "textColor",
      message: "Please enter a color for the letters. Use  a color keyword like 'blue' (OR a hexadecimal number like #0000FF)",
    },
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
    {
      type: "list",
      name: "shape",
      message: "Please choose a logo shape: circle, triangle, or square.",
      choices: ['circle', 'triangle', 'square']
    },
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
    {
      type: "input",
      name: "shapeColor",
      message: "Please enter a color for the shape. Use  a color keyword like 'blue' (OR a hexadecimal number like #0000FF)"}
  ])
  .then((response) => {
    console.log(response);
    const shapeColor = response.shapeColor;
    console.log(response.shape);
    const logoText = response.logoText;
    const textColor = response.textColor;
    const shape = response.shape;
    const logoHTML = createSVG(logoText, textColor, shapeColor, shape);
    


// WHEN I have entered input for all the prompts

// THEN an SVG file is created named logo.svg
// AND the output text "Generated logo.svg" is printed in the command line
fs.writeFile("../examples/logo.svg", logoHTML, (err) => {
    if (err) throw err;
    console.log("Success! Generated logo.svg!");
  });

});
// WHEN I open the logo.svg file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
