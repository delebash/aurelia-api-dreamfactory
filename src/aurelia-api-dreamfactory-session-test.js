import {Endpoint} from 'aurelia-api';
import {inject} from 'aurelia-framework';
import {AurelaiAuthDreamfactory} from 'aurelia-auth-dreamfactory'

@inject(Endpoint.of('api'),AurelaiAuthDreamfactory)
export class AurelaiApiDreamfactorySessionTest{
  constructor(api,authService) {
    this.api = api;
    this.gotdata = null;
    this.authenticated = authService.authenticated
    this.sessionid = authService.mysessiontoken;
  }
  activate() {
    if (this.sessionid != undefined) {
    return this.api.find('customers')
      .then(customers => this.gotdata = JSON.stringify(customers.resource[0]));
  }
  }
}

