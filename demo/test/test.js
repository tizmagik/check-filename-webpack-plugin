describe('Check Filename Plugin', () => {
  it('should not interfere with a normal .js import', () => {
    const App = require('../src/App.js');
    expect(App).toBeDefined();
  });

  it('should not interfere with a normal auto-extension resolving import', () => {
    const App = require('../src/App');
    expect(App).toBeDefined();
  });

  it('should cause mistakes in filename case to fail import', () => {
    expect(() => {const Component = require('../src/Component.jsx');}).toThrow();
  });
});
