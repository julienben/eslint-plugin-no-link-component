/**
 * @fileoverview Checks your JSX for <Link /> components and outputs an error if it finds one
 * @author Julien Benchetrit
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-link-component"),
    RuleTester = require("eslint").RuleTester;

var parserOptions = {
  ecmaVersion: 6,
  ecmaFeatures: {
    jsx: true
  }
};

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-link-component", rule, {

  valid: [
    {
      code: '<UpdateLink />',
      parserOptions: parserOptions
    },
    {
      code: '<CustomLink to="blabla" />',
      parserOptions: parserOptions
    }
  ],

  invalid: [
    {
      code: "<Link />",
      parserOptions: parserOptions,
      errors: [{
        message: 'Please use the custom Link component instead of the defaut one from React Router.'
      }]
    },
    {
      code: "<Link to='stuff'>hello</Link>",
      parserOptions: parserOptions,
      errors: [{
        message: 'Please use the custom Link component instead of the defaut one from React Router.'
      }]
    }
  ]
});
