import Draw from './Incidents/Draw';

export default {
  npm_name: "my-plugin-name", // !! make sure the name of your plugin is identical to the name of your package.json !!
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