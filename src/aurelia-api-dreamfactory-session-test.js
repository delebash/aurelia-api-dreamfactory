import {Endpoint} from 'aurelia-api';
import {AuthService} from 'aurelia-authentication';
import {inject} from 'aurelia-framework';


@inject(Endpoint.of('api'),AuthService)
export class AurelaiApiDreamfactorySessionTest{
  constructor(api,authService) {
    this.api = api;
    this.gotdata = null;
    this.authenticated = authService.isAuthenticated();
    this.sessionid = authService.getAccessToken()
  }
  activate() {
    if (this.sessionid != undefined) {
    return this.api.find('customers')
      .then(customers => this.gotdata = JSON.stringify(customers.resource[0]));
  }
  }
}

