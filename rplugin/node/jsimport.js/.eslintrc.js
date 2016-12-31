module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],

  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },

  "plugins": [
    "import",
  ],

  "globals": {
    "plugin": true,
    "debug": true,
  },

  "rules": {
    "no-shadow": 0,
    "no-underscore-dangle": 0,
    "func-names": 0,
    "space-before-function-paren": ["error", {"anonymous": "never", "named": "never"}],
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],

    "import/order": ["error"],
    "import/extensions": ["error", {"js": "never"}],
  }
};
