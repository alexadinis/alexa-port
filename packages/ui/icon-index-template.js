/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */

const path = require("path");
const camelcase = require("camelcase");

function indexTemplate(files) {
  const compoundExportEntries = [];

  const importEntries = files.map((file) => {
    const basename = path.basename(file, path.extname(file));
    const componentName = camelcase(basename, { pascalCase: true });

    compoundExportEntries.push(`${componentName}`);

    return `import ${componentName} from './${basename}';`;
  });

  const iconNames = compoundExportEntries.map((entry) => `  '${entry}'`);

  return `

${importEntries.join("\n")}

export {
  ${compoundExportEntries.join(",\n  ")}
};

export type IconName =
${iconNames.join(" | \n")}
;`;
}

module.exports = indexTemplate;
