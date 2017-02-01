import {AuthService} from 'aurelia-authentication';
import {Endpoint} from 'aurelia-api';
import {inject, computedFrom} from 'aurelia-framework';
import dfconfig from './dreamfactoryconfig';

@inject(AuthService,Endpoint.of('api'))
export class AurelaiApiTest {
  constructor(authService,api) {
    this.api = api;
    this.authService = authService;
    this.username = null;
    this.gotdata = null;
    this.api = api;
    this.authService.login(dfconfig.credentials())
      .then(response => {
        this.username = response.name;
        console.log("success logged " + response);
      })
      .catch(err => {
        console.log("login failure");
      });
  };


  // make a getter to get the authentication status.
  // use computedFrom to avoid dirty checking
  @computedFrom('authService.authenticated')
  get authenticated() {
    return this.authService.authenticated;
  }


activate(){
  return this.api.find('customers')
    .then(customers => this.gotdata = JSON.stringify(customers.resource[0]));
}
}
