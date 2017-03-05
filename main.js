function ngRun (app) {
  let ngComp = ng.core.Component
  let ngMod = ng.core.NgModule
  let ngDyn = ng.platformBrowserDynamic.platformBrowserDynamic()

  // Components
  app.Comp1 = ngComp({
    selector: 'omg',
    template: `<h1>This is so unecessary</h1>`
  })
  .Class({
    constructor: function () {}
  })

  // Modules
  app.Mod1 = ngMod({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ app.Comp1 ],
    bootstrap: [ app.Comp1 ]
  })
  .Class({
    constructor: function () {}
  })
  
  // Bootsrapper
  document.addEventListener('DOMContentLoaded', function () {
    ngDyn.bootstrapModule(app.Mod1)
  })
}
ngRun(window.app || (window.app = {}))
