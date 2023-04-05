//Import inquirer
const inquirer = require("inquirer");
//Import fs
const fs = require("fs");
//Import createSVG function
const createSVG = require("./generateSVGfunc");

//create CLI class with .run() method that runs inquirer and writes file
class CLI {
  run() {
    //Prompt questions
    inquirer
      .prompt([
        {
          type: "input",
          name: "text",
          message:
            "Hello! Let's get started. Please type up to 3 letters that will be inside the svg logo.",
          validate: (userInput) => {
            if (userInput.length <= 3) {
              return true;
            }
            return "Please enter up to 3 characters only.";
          },
        },
        {
          type: "input",
          name: "textColor",
          message:
            "Please enter a color for the letters. Use  a color keyword like 'blue' (OR a hexadecimal number like #0000FF)",
        },
        {
          type: "list",
          name: "shape",
          message: "Please choose a logo shape: circle, triangle, or square.",
          choices: ["circle", "triangle", "square"],
        },
        {
          type: "input",
          name: "shapeColor",
          message:
            "Please enter a color for the shape. Use  a color keyword like 'blue' (OR a hexadecimal number like #0000FF)",
        },
      ])
      //response is returned
      .then((response) => {
        const shape = response.shape;
        const shapeColor = response.shapeColor;
        const text = response.text;
        const textColor = response.textColor;
        const logoHTML = createSVG(shapeColor, text, textColor, shape);
        //An SVG file is created named logo.svg and the output text "Generated logo.svg" is printed in the command line
        fs.writeFile("./examples/logo.svg", logoHTML, (err) => {
          if (err) throw err;
          console.log("Success! Generated logo.svg!");
        });
      });
  }
}
//EXPORT THE CLI SO YOU CAN USE IT
module.exports = CLI;
