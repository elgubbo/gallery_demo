export function TranslateConfig($translateProvider) {
  'ngInject';

  $translateProvider.translations('en', {
    'GALLERY' : {
      'SEARCH': 'Search',
      'IMAGES': 'My Photos',
      'NOIMAGES': 'You have not uploaded any images yet',
      'NORESULTS': 'Your search had no results',
      'RESETSEARCH': 'Reset'
    },
    'LOGIN': {
      'EMAIL' : 'E-Mail',
      'PASSWORD' : 'Password',
      'LOG_IN' : 'Log in',
      'GREETING': 'Melde dich an',
      'SUCCESSMESSAGE': 'Login successful!',
      'REGISTER': 'Or create an account!'
    },
    'REGISTER': {
      'GREETING' : 'Create your account',
      'USERNAME' : 'Username',
      'EMAIL' : 'E-Mail',
      'PASSWORD' : 'Password',
      'REGISTER' : 'Log in',
      'SUCCESSMESSAGE': 'Registration successful!'
    },
    'UPLOAD' : {
      'SUCCESSMESSAGE': 'Upload successful!',
      'HELP': 'Drop your Image files or select them',
      'DROP': 'Drop your Files here',
      'SELECT': 'Select files'
    },
    'HEADER': {
      'GALLERIES': 'My Galleries',
      'IMAGES': 'My Photos',
      'LOGOUT': 'Log out',
      'LOGIN': 'Log in',
      'REGISTER': 'Register'
    },
    'CARD': {
      'EDIT': 'Edit',
      'DELETE': 'Delete',
      'CONFIRM' : {
        'DELETE': 'Delete this image?',
        'YES': 'Yes',
        'NO': 'No',
        'QUESTION': 'Would you like to delete this image?'
      }
    },
    'UPDATE': {
      'NAME': 'Name',
      'DESCRIPTION': 'Description',
      'SAVE': 'Save',
      'SUCCESSMESSAGE': 'Saved!',
      'SEARCHTAG': 'type to search for tag'
    }
  });

  $translateProvider.translations('de', {
    'GALLERY' : {
      'SEARCH': 'Suche',
      'IMAGES': 'Meine Bilder',
      'NOIMAGES': 'Du hast noch keine Bilder hochgeladen',
      'NORESULTS': 'Deine Suche hatte keine ergebnisse',
      'RESETSEARCH': 'Zurücksetzen'
    },
    'LOGIN': {
      'EMAIL' : 'E-Mail',
      'PASSWORD' : 'Passwort',
      'LOG_IN' : 'Einloggen',
      'GREETING': 'Melde dich an',
      'SUCCESSMESSAGE': 'Erfolgreich eingeloggt!',
      'REGISTER': 'Oder registriere dich hier!'
    },
    'REGISTER': {
      'GREETING' : 'Account anlegen',
      'USERNAME': 'Benutzername',
      'EMAIL' : 'E-Mail',
      'PASSWORD' : 'Passwort',
      'REGISTER' : 'Einloggen',
      'SUCCESSMESSAGE': 'Erfolgreich registriert!'
    },
    'UPLOAD' : {
      'SUCCESSMESSAGE': 'Upload erfolgreich!',
      'HELP': 'Zieh deine Bilder in die Box oder wähle welche unten aus',
      'DROP': 'Bilder hier ablegen',
      'SELECT': 'Bilder auswählen'
    },
    'HEADER': {
      'GALLERIES': 'Meine Alben',
      'IMAGES': 'Meine Bilder',
      'LOGOUT': 'Ausloggen',
      'LOGIN': 'Einloggen',
      'REGISTER': 'Registrieren'
    },
    'CARD': {
      'EDIT': 'Bearbeiten',
      'DELETE': 'Löschen',
      'CONFIRM' : {
        'DELETE': 'Dieses Bild löschen?',
        'YES': 'Ja!',
        'NO': 'Nein!',
        'QUESTION': 'Möchtest du dieses Bild sicher löschen?'
      }
    },
    'UPDATE': {
      'NAME': 'Name',
      'DESCRIPTION': 'Beschreibung',
      'SAVE': 'Speichern',
      'SUCCESSMESSAGE': 'Gespeichert!',
      'SEARCHTAG': 'Hier tippen um nach Tag zu suchen'

    }
  });

  $translateProvider.determinePreferredLanguage();
  $translateProvider.preferredLanguage('de');
  $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
}