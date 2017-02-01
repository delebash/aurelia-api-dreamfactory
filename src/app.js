export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'aurelia-api-test', name: 'aurelia-api-test', moduleId: 'aurelia-api-test', nav: true, title: 'Api-Auth Plugin' },
      { route: 'aurelia-api-dreamfactory-session-test', name: 'aurelia-api-dreamfactory-session-test', moduleId: 'aurelia-api-dreamfactory-session-test', nav: true, title: 'Api-Auth Plugin Dreamfactory Session Test' },
      { route: 'dreamfactorytestconnection', name: 'dreamfactorytestconnection', moduleId: 'dreamfactorytestconnection', nav: true, title: 'Test DreamFactory Connection' }
    ]);
    this.router = router;
  }
}
