import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
import {Utils} from './utils';
import dfconfig from './config/dreamfactoryconfig';


let httpClient = new HttpClient();
httpClient.configure(config => {
  config
    .useStandardConfiguration()
});

@inject(HttpClient)
export class DreamFactoryApi {
  constructor(http) {
    this.http = http;
  }

  login() {
    return this.http.fetch(dfconfig.loginurl(), {
      method: "POST",
      headers: new Headers({
        "X-DreamFactory-API-Key": dfconfig.APP_NAME
      }),

      body: json(dfconfig.credentials())
    })
      .then(response => response.json())
      .then(data => {
        if (data.hasOwnProperty('session_token')) {
          Utils.setToken(dfconfig.tokenKey, data.session_token);
          return data
        }
      });
  }


  getdata() {
    let token = Utils.getToken(dfconfig.tokenKey);

    return this.http.fetch(dfconfig.dataurl(), {
      method: "POST",
      headers: new Headers({
      "X-DreamFactory-API-Key": dfconfig.APP_API_KEY,
        "X-DreamFactory-Application-Name": dfconfig.APP_NAME,
        "X-DreamFactory-Session-Token": token
      })
    })
      .then(response => response.json())
      .then(data => {
        return data;
      })
  }
}

// login() {
//   return this.http.fetch(dreamfactoryconfig.loginurl(), {
//     method: "POST",
//     body: json(dreamfactoryconfig.credentials())
//   })
//     .then(response => response.json())
//     .then(data => {
//       if (data.hasOwnProperty('session_token')) {
//         Utils.setToken(dreamfactoryconfig.tokenKey, data.session_token);
//         return true
//       } else {
//         return false
//       }
//     });
// }
