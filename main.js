function ngRun (app) {
  let ngComp = ng.core.Component
  let ngMod = ng.core.NgModule
  let ngDyn = ng.platformBrowserDynamic.platformBrowserDynamic()

  // Components
  const heading = ngComp({
    selector: 'omg',
    template: `<h1>{{test}}</h1>`
  })
  .Class({
    constructor: function heading () {
      this.test = 'catchphrase!'
    }
  })

  // Modules
  const module = ngMod({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [heading],
    bootstrap: [heading]
  })
  .Class({
    constructor: function module () {}
  })

  // Bootsrapper
  document.addEventListener('DOMContentLoaded', () => {
    ngDyn.bootstrapModule(module)
  })
}
ngRun(window.app || (window.app = {}))
