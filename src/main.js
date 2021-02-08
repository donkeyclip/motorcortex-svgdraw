import Draw from './Incidents/Draw';
const pkg = require("../package.json");

export default {
  npm_name: pkg.name,
  version: pkg.version,
  incidents: [
    {
      exportable: Draw,
      name: "Draw",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
              cover: {
                  type: 'number',
                  min: 0,
                  max: 1
              }
          }
        }
      }
    }
  ]
};