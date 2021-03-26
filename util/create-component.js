const fs = require("fs");
const templates = require("./templates");
const signale = require('signale-logger');


const componentName = process.argv[2];

if (!componentName) {
    signale.error("Please supply a valid component name");
    process.exit(1);
}

signale.note(`Creating Component Templates with name: ${componentName}`);

const componentDirectory = `./src/components/${componentName}`;

if (fs.existsSync(componentDirectory)) {
    signale.error(`Component ${componentName} already exists.`);
    process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
    fs.writeFileSync(`${componentDirectory}/${template.filename}${template.extension}`, template.content);
});

fs.appendFileSync('./src/index.ts', `export { default as ${componentName} } from './components/${componentName}';`);

signale.success(`Successfully created component under: ${componentDirectory}`);
