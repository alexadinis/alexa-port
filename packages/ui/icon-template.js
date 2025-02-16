/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const { capitalize } = require("radash");

function template({ template }, { componentName, jsx }) {
  const typeScriptTpl = template.smart({ plugins: ["typescript"] });
  const name = `${componentName.name.replace("Svg", "")}`;
  const displayName = `${capitalize(name)}`;

  return typeScriptTpl.ast`
    import { SVGProps } from 'react';

    function ${name}({ ref, ...props }: SVGProps<SVGSVGElement> & { ref?: React.Ref<SVGSVGElement> }) {
      return ${jsx}
    }

    ${name}.displayName = '${displayName}';

    export default ${name};
  `;
}

module.exports = template;
