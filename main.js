function angStartMain (app) {
  document.addEventListener('DOMContentLoaded', function () {
    ng.platformBrowserDynamic
      .platformBrowserDynamic()
      .bootstrapModule(app.AppModule)
  })
}
angStartMain(window.app || (window.app = {}))
