export function RoutesRun($rootScope, $state, $auth, $document) {
    'ngInject';
    let deRegister = $rootScope.$on('$stateChangeSuccess', function() {
       $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
    });
    $rootScope.$on('$destroy', deRegister);


    let deregisterationCallback =  $rootScope.$on("$stateChangeStart", function(event, toState) {

        if (toState.data && toState.data.auth) {
            /*Cancel going to the authenticated state and go back to the login page*/
            if (!$auth.isAuthenticated()) {
                event.preventDefault();
                return $state.go('app.login');
            }
        }

    });
    $rootScope.$on('$destroy', deregisterationCallback)
}
