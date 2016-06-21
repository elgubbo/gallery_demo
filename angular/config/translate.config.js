export function TranslateConfig($translateProvider) {
  'ngInject';

  $translateProvider.translations('en', {
    'LOGIN': {
      'EMAIL' : 'E-Mail',
      'PASSWORD' : 'Password',
      'LOG_IN' : 'Log in',
      'GREETING': 'Melde dich an'
    },
    'REGISTER': {
      'GREETING' : 'Create your account',
      'USERNAME' : 'Username',
      'EMAIL' : 'E-Mail',
      'PASSWORD' : 'Password',
      'REGISTER' : 'Log in'
    },
    'HEADER': {
      'GALLERIES': 'My Galleries',
      'IMAGES': 'My Photos'
    }
  });

  $translateProvider.translations('de', {
    'LOGIN': {
      'EMAIL' : 'E-Mail',
      'PASSWORD' : 'Passwort',
      'LOG_IN' : 'Einloggen',
      'GREETING': 'Melde dich an'
    },
    'REGISTER': {
      'GREETING' : 'Account anlegen',
      'USERNAME': 'Benutzername',
      'EMAIL' : 'E-Mail',
      'PASSWORD' : 'Passwort',
      'REGISTER' : 'Einloggen'
    },
    'HEADER': {
      'GALLERIES': 'Meine Alben',
      'IMAGES': 'Meine Bilder'
    }
  });

  $translateProvider.determinePreferredLanguage();
  $translateProvider.preferredLanguage('de');
  $translateProvider.useSanitizeValueStrategy('sanitize');
}