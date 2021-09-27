import Draw from './Incidents/Draw';
import {name,version}  from '../package.json'

export default {
  npm_name: name,
  version: version,
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