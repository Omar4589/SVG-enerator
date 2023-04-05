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
    const shapeRender = `<polygon points="150,0 0,300 300,300" fill="${this.shapeColor}" />`;
    if (this.text) {
      const textRender = `<text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">
      ${this.text}
      </text>`;
      return shapeRender + "\n" + textRender;
    }
    return shapeRender;
  }
}

class Circle extends Shape {
  render() {
    const shapeRender = `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />`;
    if (this.text) {
      const textRender = `<text x="150" y="125" font-size="75" text-anchor="middle" fill="${this.textColor}">
      ${this.text}
      </text>`;
      return shapeRender + "\n" + textRender;
    }
    return shapeRender;
  }
}

class Square extends Shape {
  render() {
    const shapeRender = `<rect x="0" y="0" width="200" height="200" fill="${this.shapeColor}" />`;
    if (this.text) {
      const textRender = `<text x="100" y="125" font-size="80" text-anchor="middle" fill="${this.textColor}">
      ${this.text}
      </text>`;
      return shapeRender + "\n" + textRender;
    }
    return shapeRender;
  }
}

//EXPORT THE SHAPES SO YOU CAN USE THEM
module.exports = { Triangle, Circle, Square };
