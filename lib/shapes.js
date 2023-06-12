class Square {
    constructor(logoText, textColor, logoShape, shapeColor) {
      this.logoText = logoText;
      this.textColor = textColor;
      this.logoShape = logoShape;
      this.shapeColor = shapeColor;
    }

    render() {
return `${this.logoText}`;
}
    // printMetaData() {
    //     console.log(`Created by ${this.logoText} on ${this.logoShape}`);
    //   }
     }

     class Circle {
      constructor(logoText, textColor, logoShape, shapeColor) {
        this.logoText = logoText;
        this.textColor = textColor;
        this.logoShape = logoShape;
        this.shapeColor = shapeColor;
      }
  
      render() {
  return `${this.textColor}`;
  }
      // printMetaData() {
      //     console.log(`Created by ${this.logoText} on ${this.logoShape}`);
      //   }
       }

       class Triangle {
        constructor(logoText, textColor, logoShape, shapeColor) {
          this.logoText = logoText;
          this.textColor = textColor;
          this.logoShape = logoShape;
          this.shapeColor = shapeColor;
        }
    
        render() {
    return `${this.logoShape}`;
    }
        // printMetaData() {
        //     console.log(`Created by ${this.logoText} on ${this.logoShape}`);
        //   }
         }

    module.exports = { Square, Circle, Triangle }



