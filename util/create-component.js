require("colors");
const fs = require("fs");
const templates = require("./templates");
const signale = require('signale-logger');


const componentName = process.argv[2];

if (!componentName) {
    signale.error("Please supply a valid component name".red);
    process.exit(1);
}

signale.log("Creating Component Templates with name: " + componentName);

const componentDirectory = `./src/${componentName}`;

if (fs.existsSync(componentDirectory)) {
    signale.error(`Component ${componentName} already exists.`.red);
    process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
    fs.writeFileSync(
        `${componentDirectory}/${componentName}${template.extension}`,
        template.content
    );
});

signale.log(
    "Successfully created component under: " + componentDirectory.green
);
