import environment from './environment';
import dfconfig from './dreamfactoryconfig'
import authConfig from './authConfig';
import {AuthService} from 'aurelia-authentication';


//Configure Bluebird Promises.
Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .plugin('aurelia-api', config => {
      config.registerEndpoint('auth',dfconfig.loginurl() )
      config.registerEndpoint('api',dfconfig.database(),{headers: { "X-DreamFactory-API-Key": dfconfig.APP_API_KEY}});
    })
.plugin('aurelia-authentication', baseConfig => {
    baseConfig.configure(authConfig);
  });

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
