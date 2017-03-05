function angStartComp (app) {
  app.AppComponent = ng.core.Component({
    selector: 'omg',
    template: `
    <h1>This is so unecessary</h1>
    `
  })
  .Class({
    constructor: function () {}
  })
}
angStartComp(window.app || (window.app = {}))
