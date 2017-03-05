function angStartMod (app) {
  app.AppModule = ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ app.AppComponent ],
    bootstrap: [ app.AppComponent ]
  })
  .Class({
    constructor: function () {}
  })
}
angStartMod(window.app || (window.app = {}))
