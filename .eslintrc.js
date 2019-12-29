module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "flowtype",
    "react",
    "jsx-a11y",
    "graphql-fragments",
    "cypress"
  ],
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended",
    "plugin:graphql-fragments/recommended",
    "plugin:cypress/recommended"
  ],
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
  },
  "env": {
    "node": true,
    "jest": true,
    "jasmine": true,
    "browser": true,
    "es6": true
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-trailing-spaces": "off",
    "max-len": "off",
    "react/prefer-stateless-function": "off",
    "react/destructuring-assignment": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "camelcase": "off",
    "react/static-property-placement": "off",
    "react/jsx-props-no-spreading": "off",
    "react/state-in-constructor": "off",
    "react/require-default-props": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.stories.js"
        ]
      }
    ]
  },
};
