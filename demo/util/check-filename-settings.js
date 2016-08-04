module.exports = {
  regex: /\.jsx$/,
  error: pathName => `Module load aborted. Only .js extensions allowed, do not use .jsx extensions.\n   For: ${pathName}`
};
