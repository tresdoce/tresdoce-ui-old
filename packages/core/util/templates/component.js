module.exports = (componentName) => ({
  filename: componentName,
  extension: `.tsx`,
  content: `import React from "react";
import { ${componentName}Props } from "./${componentName}.types";
import { ${componentName}Styles } from "./styles.jsx";

const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
    <${componentName}Styles data-testid="${componentName}">{foo}</${componentName}Styles>
);

export default ${componentName};`,

});
