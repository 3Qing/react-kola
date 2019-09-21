module.exports = {
    root: true,
    parser: "babel-eslint",
    env: {
        "node": true,
        "browser": true,
        "es6": true
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    // globals: {
    //     // "Atomics": "readonly",
    //     // "SharedArrayBuffer": "readonly",
    //     // "process": true
    // },
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    plugins: [
        "react"
    ],
    rules: {
        "indent": [ "error", 4 ],
        "space-before-function-paren": ["error", 'never'],
        "semi": [ "error", "always" ],
        "key-spacing": ["error", { "afterColon": true }],
        "object-curly-spacing": ["error", "always"],
        "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/prop-types": 0
    }
};
