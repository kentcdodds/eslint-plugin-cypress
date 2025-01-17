const globals = require('globals')

module.exports = {
  rules: {
    'no-assigning-return-values': require('./lib/rules/no-assigning-return-values'),
    'no-unnecessary-waiting': require('./lib/rules/no-unnecessary-waiting'),
    'assertion-before-screenshot': require('./lib/rules/assertion-before-screenshot'),
  },
  configs: {
    recommended: require('./lib/config/recommended'),
  },
  environments: {
    globals: {
      globals: Object.assign({
        cy: false,
        Cypress: false,
        expect: false,
        assert: false,
        chai: false,
      }, globals.browser, globals.mocha),
      parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
      },
    },
  },
}
