function ngRun (app) {
  let ngComp = ng.core.Component
  let ngMod = ng.core.NgModule
  let ngDyn = ng.platformBrowserDynamic.platformBrowserDynamic()

  // Components
  const heading = ngComp({
    selector: 'omg',
    template: `<h1>This is so unecessary</h1>`
  })
  .Class({
    constructor: function () {}
  })

  // Modules
  const module = ngMod({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [heading],
    bootstrap: [heading]
  })
  .Class({
    constructor: function () {}
  })

  // Bootsrapper
  document.addEventListener('DOMContentLoaded', function () {
    ngDyn.bootstrapModule(module)
  })
}
ngRun(window.app || (window.app = {}))
