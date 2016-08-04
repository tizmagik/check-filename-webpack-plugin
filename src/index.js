const path = require('path');
const fs = require('fs');

function CheckFilenamePlugin(checks) {
  // Ensure we have the proper configuration
  if (!checks) {
    throw new Error(`[CheckFilenamePlugin] requires an object with {regex, error} properties (or an Array of them).`);
  }

  // Normalize to an Array
  this.checks = Array.isArray(checks) ? checks : [checks];

  // Check each one for proper types
  this.checks.forEach(({regex, error}) => {
    // Require each prop
    if (!regex || !error) {
      throw new Error('[CheckFilenamePlugin] requires {regex, error} properties for each check object.');
    }

    // Require {regex} to be a RegExp
    if (!(regex instanceof RegExp)) {
      throw new Error(`[CheckFilenamePlugin] Configuration Error: {regex} property expected to be a RegExp. Got: ${regex}`);
    }

    // Require {error} to be string or function
    if (typeof error !== 'string' && typeof error !== 'function') {
      throw new Error(`[CheckFilenamePlugin] Configuration Error: {error} property expected to be a string or function. Got ${error}`);
    }
  })
}

CheckFilenamePlugin.prototype.apply = function(compiler) {
    compiler.plugin('normal-module-factory', nmf => {
        nmf.plugin('after-resolve', (data, done) => {

            // Trim ? off, since some loaders add that to the resource they're attemping to load
            let pathName = data.resource.split('?')[0];
            pathName =  pathName.normalize ? pathName.normalize('NFC') : pathName;

            this.checks.forEach(({regex, error}) => {
              if (pathName.match(regex)) {
                done(typeof error === 'function' ? error(pathName) : new Error(error));
                return;
              } else {
                done(null, data);
              }
            });
        });
    });
};

module.exports = CheckFilenamePlugin;
