function ngRun (app) {
  const ngComp = ng.core.Component
  const ngMod = ng.core.NgModule
  const ngDyn = ng.platformBrowserDynamic.platformBrowserDynamic()
  const ngClass = ng.core.Class
  const http = ng.http
  // Services
  const HttpService = ngClass({
    constructor: function HttpService () {
      this.data = 'I give up'
    },
    getData: function () {
      return this.data
    }
  })

  // Components
  const Heading = ngComp({
    selector: 'omg',
    template: `<h1>{{test}}, fuck typescript and shitty "upgrades"</h1>`
  })
  .Class({
    constructor: [HttpService, function Heading (butts) {
      this.test = butts.getData()
    }]
  })

  // Modules
  const Module = ngMod({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [Heading],
    providers: [HttpService],
    bootstrap: [Heading]
  })
  .Class({
    constructor: function Module () {}
  })

  // Bootsrapper
  document.addEventListener('DOMContentLoaded', () => {
    ngDyn.bootstrapModule(Module)
  })
}
ngRun(window.app || (window.app = {}))
