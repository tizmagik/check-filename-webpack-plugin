# Check Filename - Webpack Plugin

This Webpack plugin allows you to define a regex to test filename imports and requires against. If a regex matches, it will call the function specified to generate an error string to throw during compilation.

The error looks something like:

> ERROR in ./test/test.js
Module not found: Module load aborted. Only .js extensions allowed, do not use .jsx extensions.
   For: /Users/workspace/project/src/Component.jsx

Given the following config:

```js
{
  regex: /\.jsx$/,
  error: pathName => `Module load aborted. Only .js extensions allowed, do not use .jsx extensions.\n\tFor: ${pathName}`
}
```

> NOTE: `error` could also just be a literal string.

# Install

```bash
npm install --save-dev case-sensitive-paths-webpack-plugin
```

# Usage

```js
import CheckFilenamePlugin from 'case-sensitive-paths-webpack-plugin';

const webpackConfig = {
    plugins: [
        new CheckFilenamePlugin({
          regex: /\.jsx$/,
          error: pathName => `Module load aborted. Only .js extensions allowed, do not use .jsx extensions.\n   For: ${pathName}`
        })
        // other plugins ...
    ]
    // other webpack config ...
}
```

## Demo

Check the [/demo](demo) directory for a working example of the plugin in action, with tests demonstrating the effect of the plugin. See [/demo/README.md](demo/README.md) for more information.

## Thanks & Credit

Thanks mostly to [Michael Pratt](https://github.com/Urthen) who wrote [case-sensitive-paths-webpack-plugin](https://github.com/Urthen/case-sensitive-paths-webpack-plugin) which this plugin is based mostly off of.
