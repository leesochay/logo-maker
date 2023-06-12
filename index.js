 
 function init(){
 // required packages and modules to generate the logo
  const inquirer = require('inquirer');
  const fs = require('fs');
  const { Square, Circle, Triangle } = require('./lib/shapes');
  
 // npm inquirer package utilzing the command line interface for questions and answers to create the logo

inquirer
  .prompt([
      {
        // enter the logo text
        type:"input",
        message: "Please enter the text for the logo (up to three characters).",
        name: "logoText",
        // validate function for text input of up to three characters
        // From npm: validate: (Function) Receive the user input and answers hash.
        // Should return true if the value is valid, and an error message (String) otherwise.
        // If false is returned, a default error message is provided.
        validate: function(logoText){
          if (logoText.length > 3){
              return "Logo text must be only up to three characters.";
          }
          return true;
      }
      },
      {
        // enter the color of the text of the logo (color keyword or hex)
        type:"input",
        message: "Please enter the color for the text in the logo.",
        name: "textColor",
      },
      {
        // the list of shapes to choose from: circle, triangle, and square
        type:"list",
        message: "Please select the shape for the logo.",
        choices: ["circle", "triangle", "square"],
        name: "logoShape",
      },
      {
        // the color of the shape of the logo
        type:"input",
        message: "Please enter the color for the shape of the logo.",
        name: "shapeColor",
      },
  ])
// the call back of the generated svg file from the Inquirer responses
      .then((answers) => {
        if (answers.logoShape === "circle") {
          const shape = new Circle(answers.logoText, answers.textColor, answers.logoShape, answers.shapeColor);
          const svgCircleContent = shape.render();
          fs.writeFile('logo.svg', svgCircleContent, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg!')
          );
          } else if (answers.logoShape === "triangle") {
            const shape = new Triangle(answers.logoText, answers.textColor, answers.logoShape, answers.shapeColor);
            const svgTriangleContent = shape.render();
            fs.writeFile('logo.svg', svgTriangleContent, (err) =>
              err ? console.log(err) : console.log('Generated logo.svg!')
            );
          } else if (answers.logoShape === "square") {
            const shape = new Square(answers.logoText, answers.textColor, answers.logoShape, answers.shapeColor);
            const svgSquareContent = shape.render();
            fs.writeFile('logo.svg', svgSquareContent, (err) =>
              err ? console.log(err) : console.log('Generated logo.svg!')
            );
          } else {
        console.log(error);
      }});
    }

init();
