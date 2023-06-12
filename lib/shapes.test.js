// required module for testing
const { Square, Circle, Triangle } = require('./shapes');


// A test is created to check the render function for the square
describe('Square', () => {
       describe('The render function', () => {
         it('should generate an svg file for the square', () => {
           const logoText = "Square test";
           const textColor = "yellow";
           const logoShape = "square";
           const shapeColor = "blue";
           const expectedRender = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="25" width="150" height="150" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">Square test</text></svg>`;
           const shape = new Square(logoText, textColor, logoShape, shapeColor);
           const expectedShape = shape.render();
           expect(expectedShape).toEqual(expectedRender);
         });
       });
     });

// A test is created to check the render function for the circle
describe('Circle', () => {
       describe('The render function', () => {
         it('should generate an svg file for the circle', () => {
           const logoText = "Circle test";
           const textColor = "yellow";
           const logoShape = "circle";
           const shapeColor = "blue";
           const expectedRender = `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'><circle cx="150" cy="100" r="80" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">Circle test</text></svg>`;
           const shape = new Circle(logoText, textColor, logoShape, shapeColor);
           const expectedShape = shape.render();
           expect(expectedShape).toEqual(expectedRender);
         });
       });
     });


// A test is created to check the render function for the triangle
describe('Triangle', () => {
   describe('The render function', () => {
     it('should generate an svg file for the triangle', () => {
       const logoText = "Triangle test";
       const textColor = "yellow";
       const logoShape = "triangle";
       const shapeColor = "blue";
       const expectedRender = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 250,175 50,175" fill="blue" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="yellow">Triangle test</text></svg>`;
       const shape = new Triangle(logoText, textColor, logoShape, shapeColor);
       const expectedShape = shape.render();
       expect(expectedShape).toEqual(expectedRender);
     });
   });
 });