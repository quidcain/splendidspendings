module.exports = {
    "env": { "node": true, "es6": true },
    "extends": ["eslint:recommended"],
    "parserOptions": {
        "ecmaFeatures": { "jsx": true },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        // Best Practices
        "class-methods-use-this": 1,
        "curly": [2, "all"],
        "dot-location": [2, "property"],
        "dot-notation": 2,
        "no-case-declarations": 2,
        "no-extra-bind": 2,
        // no-magic-numbers
        "no-multi-spaces": 2,
        "no-sequences": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-useless-return": 2,
        "prefer-promise-reject-errors": 2,
        // Variables
        "no-undef-init": 2,
        "no-unused-vars": [2, {
            "argsIgnorePattern": "^_",
            "varsIgnorePattern": "^_"
        }],
        // Stylistic Issues
        "array-bracket-newline": [2, { "multiline": true }],
        "array-bracket-spacing": 2,
        "array-element-newline": [2, "consistent"],
        "block-spacing": 2,
        "brace-style": 2,
        "camelcase": 2,
        "comma-dangle": [2, "always-multiline"],
        "comma-spacing": 2,
        "comma-style": 2,
        "computed-property-spacing": 2,
        "eol-last": 2,
        "func-call-spacing": 2,
        "func-style": [2, "declaration", { "allowArrowFunctions": true }],
        "function-call-argument-newline": [2, "consistent"],
        "function-paren-newline": [2, "multiline-arguments"],
        "implicit-arrow-linebreak": 2,
        "indent": [2, 2],
        "jsx-quotes": 2,
        "key-spacing": 2,
        "keyword-spacing": [2, { "overrides": {
            "if": { "after": false },
            "for": { "after": false },
            "while": { "after": false },
            "catch": { "after": false }
        } }],
        "linebreak-style": [2, "unix"],
        // max-len
        "max-params": 2,
        "max-statements-per-line": [2, { "max": 1 }],
        "multiline-comment-style": [2, "bare-block"],
        "new-cap": 2,
        "newline-per-chained-call": [2, { "ignoreChainWithDepth": 2 }],
        "no-lonely-if": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-multiple-empty-lines": 2,
        "no-trailing-spaces": 2,
        "no-unneeded-ternary": 2,
        "no-whitespace-before-property": 2,
        "object-curly-newline": [2, {
            "multiline": true,
            "consistent": true,
        }],
        "object-property-newline": [2, { "allowAllPropertiesOnSameLine": true }],
        "object-curly-spacing": [2, "always"],
        "one-var": [2, "never"],
        "operator-linebreak": [2, "after", { "overrides": { "?": "before", ":": "before" } }],
        "padded-blocks": [2, "never"],
        "quote-props": [2, "as-needed"],
        "quotes": [2, "single", { "avoidEscape": true }],
        "semi": [2, "always"],
        "semi-spacing": 2,
        "semi-style": 2,
        "space-before-blocks": 2,
        "space-before-function-paren": [2, {"anonymous": "never", "named": "never", "asyncArrow": "always"}],
        "space-in-parens": 2,
        "space-infix-ops": 2,
        "space-unary-ops": [2, {
            "words": true,
            "nonwords": false
        }],
        "spaced-comment": [2, "always", { "exceptions": ["-", "+", "*"] }],
        "switch-colon-spacing": 2,
        "template-tag-spacing": 2,
        // ECMAScript 6
        "arrow-parens": [2, "as-needed"],
        "arrow-spacing": 2,
        "generator-star-spacing": [2, {"before": false, "after": true}],
        "no-duplicate-imports": [2, { "includeExports": true }],
        "no-useless-computed-key": 2,
        "no-useless-constructor": 2,
        "object-shorthand": [2, "properties"],
        "prefer-arrow-callback": 2,
        "prefer-const": 2,
        // prefer-destructuring
        "prefer-rest-params": 2,
        "prefer-spread": 2,
        "prefer-template": 2,
        "rest-spread-spacing": 2,
        // sort-imports
        "template-curly-spacing": 2,
        "yield-star-spacing": [2, "after"]
    }
}
