# Just a Demo

### Purpose
This demo provides a working example of the Check Filename Webpack Plugin in action. The demo source is just a basic React app compiled with Webpack. The unit-tests show that attempting to `import` modules using an extension that's been marked to be checked in the config passed in to the plugin in the Webpack config.

### Use
To run the demo project:

* clone the full plugin repo
* `cd /demo`
* `npm install`
* `npm start`

To run the demo tests:
* (everything above)
* `npm test`

You should see 3 passed tests and 1 error: `Module not found: Module load aborted. Only .js extensions allowed, do not use .jsx extensions.`. In this example, we've configured the plugin to check for filenames with a `.jsx` extension. You can see that setting defined in [/util/check-filename-settings.js](util/check-filename-settings.js).
