// tests.webpack.js
var context = require.context('./test', true, /test\.js$/);
context.keys().forEach(context);
