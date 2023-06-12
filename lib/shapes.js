class Square {
    constructor(logoText, textColor, logoShape, shapeColor) {
      this.logoText = logoText;
      this.textColor = textColor;
      this.logoShape = logoShape;
      this.shapeColor = shapeColor;
    }

    render() {
return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`;
}
     }

     class Circle {
      constructor(logoText, textColor, logoShape, shapeColor) {
        this.logoText = logoText;
        this.textColor = textColor;
        this.logoShape = logoShape;
        this.shapeColor = shapeColor;
      }
  
      render() {
  return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`;

  }
       }

       class Triangle {
        constructor(logoText, textColor, logoShape, shapeColor) {
          this.logoText = logoText;
          this.textColor = textColor;
          this.logoShape = logoShape;
          this.shapeColor = shapeColor;
        }
    
        render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 250,175 50,175" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/><text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`;
    }
       }

    module.exports = { Square, Circle, Triangle }



