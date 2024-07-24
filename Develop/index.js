const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: input => input.length <= 3 || 'Please enter up to three characters.'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    }
  ];
  
  inquirer.prompt(questions).then(answers => {
    const { text, textColor, shape, shapeColor } = answers;
    let shapeInstance;
  
    switch (shape) {
      case 'circle':
        shapeInstance = new Circle(shapeColor);
        break;
      case 'triangle':
        shapeInstance = new Triangle(shapeColor);
        break;
      case 'square':
        shapeInstance = new Square(shapeColor);
        break;
    }
  
    const svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeInstance.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
  
    fs.writeFileSync('logo.svg', svgContent.trim());
    console.log('Generated logo.svg');
  });