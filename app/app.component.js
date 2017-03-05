function autoRun (app) {
  app.AppComponent = ng.core.Component({
    selector: 'this-sucks',
    template: '<h1>This is so unecessary</h1>'
  })
  .Class({
    constructor: function () {}
  })
}
autoRun(window.app || (window.app = {}))
