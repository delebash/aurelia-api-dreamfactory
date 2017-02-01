export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'aurelia-api-dreamfactory', name: 'aurelia-api-dreamfactory', moduleId: 'aurelia-api-dreamfactory', nav: true, title: 'Api-Auth Plugin Dreamfactory' },
      { route: 'aurelia-api-dreamfactory-session-test', name: 'aurelia-api-dreamfactory-session-test', moduleId: 'aurelia-api-dreamfactory-session-test', nav: true, title: 'Api-Auth Plugin Dreamfactory Session Test' },
      { route: 'dreamfactorytestconnection', name: 'dreamfactorytestconnection', moduleId: 'dreamfactorytestconnection', nav: true, title: 'Test DreamFactory Connection' }
    ]);
    this.router = router;
  }
}
