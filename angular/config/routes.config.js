export function RoutesConfig($stateProvider, $urlRouterProvider) {
	'ngInject';

	let getView = (viewName) => {
		return `./views/app/pages/${viewName}/${viewName}.page.html`;
	};

	$urlRouterProvider.otherwise('/');

	$stateProvider
  .state('app', {
      abstract: true,
            data: {},//{auth: true} would require JWT auth
            views: {
              header: {
               templateUrl: getView('header')
             },
             footer: {
               templateUrl: getView('footer')
             },
             main: {}
           }
         })
  .state('app.images', {
    data: {auth: true},
    url: '/',
    views: {
      'main@': {
        templateUrl: getView('images')
      }
    }
  })
  .state('app.image', {
    data: {auth: true},
    url: '/image/:id',
    views: {
      'main@': {
        templateUrl: getView('update-image')
      }
    }
  })
  .state('app.login', {
    url: '/login',
    views: {
      'main@': {
        templateUrl: getView('login')
      }
    }
  })
  .state('app.register', {
    url: '/register',
    views: {
      'main@': {
        templateUrl: getView('register')
      }
    }
  })
  .state('app.forgot_password', {
    url: '/forgot-password',
    views: {
      'main@': {
        templateUrl: getView('forgot-password')
      }
    }
  })
  .state('app.reset_password', {
    url: '/reset-password/:email/:token',
    views: {
      'main@': {
        templateUrl: getView('reset-password')
      }
    }
  });
}
