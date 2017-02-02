import environment from './environment';
import dfconfig from './config/dreamfactoryconfig'
import authConfig from './authConfig';


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
      config.registerEndpoint('auth',dfconfig.loginurl() );
      config.registerEndpoint('api',dfconfig.database(),{headers: {"X-DreamFactory-API-Key": dfconfig.APP_API_KEY, "X-DreamFactory-Application-Name": dfconfig.APP_NAME}});
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



// For non guest
// config.registerEndpoint('auth',dfconfig.loginurl(),{headers: { "X-DreamFactory-Application-Name": dfconfig.APP_NAME}});
// config.registerEndpoint('api',dfconfig.database(),{headers: { "X-DreamFactory-Session-Token": dfconfig.APP_API_KEY}});
//

// For geuet acess you just need
//config.registerEndpoint('api',dfconfig.database(),{headers: {"X-DreamFactory-API-Key": dfconfig.APP_API_KEY, "X-DreamFactory-Application-Name": dfconfig.APP_NAME}});
// No login or session needed

// Example:
// export function configure(aurelia) {
//   aurelia.use
//     .standardConfiguration()
//     .feature('resources')
//     .plugin('aurelia-api', config => {
//       //config.registerEndpoint('auth',dfconfig.loginurl() )
//       config.registerEndpoint('api',dfconfig.database(),{headers: {"X-DreamFactory-API-Key": dfconfig.APP_API_KEY, "X-DreamFactory-Application-Name": dfconfig.APP_NAME}});
//     })
//
//   if (environment.debug) {
//     aurelia.use.developmentLogging();
//   }
//
//   if (environment.testing) {
//     aurelia.use.plugin('aurelia-testing');
//   }
//
//   aurelia.start().then(() => aurelia.setRoot());
// }
