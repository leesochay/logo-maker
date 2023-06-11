 // required packages and modules to generate the logo
  const inquirer = require('inquirer');
  const fs = require('fs');

 // npm inquirer package utilzing the command line interface for questions and answers to create the logo

inquirer
  .prompt([
      {
        // the text inside the logo
        type:"input",
        message: "Please enter the text for the logo (three characers only).",
        name: "logoText",
        },
        {
          // the text inside the logo
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
      ])

      .then((answers) => {
        console.log(answers);
        });
  