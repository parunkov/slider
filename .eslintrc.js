module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        // "eslint:recommended",
        "airbnb",
        // "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        // "prettier"
    ],
    "rules": {
        // "prettier/prettier": "error"
        // "linebreak-style": 0,
        // "no-unused-vars": 0,
        // "no-undef": 0,
    }
};