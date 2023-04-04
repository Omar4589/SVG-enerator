//create Shape class that takes in a shapeColor, text, textColor
class Shape {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }

  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

class Triangle extends Shape {
  render() {
    this.setColor(this.shapeColor);
    return `<polygon points="250,0 0,500 500,500" fill="${this.shapeColor}" />
        <text x="250" y="350" font-size="105" text-anchor="middle" fill="${this.textColor}">
        ${this.text}
        </text>`;
  }
}

class Circle extends Shape {
  render() {
    this.setColor(this.shapeColor);
    return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="75" text-anchor="middle" fill="${this.textColor}">
        ${this.text}
        </text>`;
  }
}

class Square extends Shape {
  render() {
    this.setColor(this.shapeColor);
    return `<rect x="0" y="0" width="500" height="500" fill="${this.shapeColor}" />
        <text x="250" y="300" font-size="170" text-anchor="middle" fill="${this.textColor}">
        ${this.text}
        </text>`;
  }
}

//EXPORT THE SHAPES SO YOU CAN USE THEM
module.exports = { Triangle, Circle, Square };
