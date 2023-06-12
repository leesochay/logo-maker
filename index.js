 // required packages and modules to generate the logo
  const inquirer = require('inquirer');
  const fs = require('fs');
  const { Square, Circle, Triangle } = require('./lib/shapes');
  
 // npm inquirer package utilzing the command line interface for questions and answers to create the logo

inquirer
  .prompt([
      {
        // the text inside the logo
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
        // the color of the text inside the logo
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

      .then((answers) => {
        
        if (answers.logoShape === "circle") {
          console.log("Circle!");
          const circleFile = new Circle(answers.logoText, answers.textColor, answers.logoShape, answers.shapeColor);
          console.log(circleFile);
          const circleShape = circleFile.render();
          console.log(circleShape);
          } else if (answers.logoShape === "triangle") {
            console.log("Triangle!");
            const triangleFile = new Triangle(answers.logoText, answers.textColor, answers.logoShape, answers.shapeColor);
            console.log(triangleFile);
            // calls the render function from the Square class in shapes.js and logs that in the console
            const triangleShape = triangleFile.render();
            console.log(triangleShape);
          } else if (answers.logoShape === "square") {
            console.log("Square!");
            const svgFile = new Square(answers.logoText, answers.textColor, answers.logoShape, answers.shapeColor);
            console.log(svgFile);
            // calls the render function from the Square class in shapes.js and logs that in the console
            const squareShape = svgFile.render();
            console.log(squareShape);
          } else {
        console.log(error);
      }});
  

