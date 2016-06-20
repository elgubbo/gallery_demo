export function TranslateConfig($translateProvider) {
  'ngInject';

  $translateProvider.translations('en', {
    'LOGIN': {
      'EMAIL' : 'E-Mail',
      'PASSWORD' : 'Password',
      'LOG_IN' : 'Log in'
    },
    'REGISTER': {
      'GREETING' : 'Create your account',
      'USERNAME' : 'Username',
      'EMAIL' : 'E-Mail',
      'PASSWORD' : 'Password',
      'REGISTER' : 'Log in'
    }
  });

  $translateProvider.translations('de', {
    'LOGIN': {
      'EMAIL' : 'E-Mail',
      'PASSWORD' : 'Passwort',
      'LOG_IN' : 'Einloggen'
    },
    'REGISTER': {
      'GREETING' : 'Account anlegen',
      'USERNAME': 'Benutzername',
      'EMAIL' : 'E-Mail',
      'PASSWORD' : 'Passwort',
      'REGISTER' : 'Einloggen'
    }
  });

  $translateProvider.determinePreferredLanguage();
  $translateProvider.preferredLanguage('de');
  $translateProvider.useSanitizeValueStrategy('sanitize');
}