class HeaderController{
    constructor($auth, $state, UserService){
        'ngInject';
        this.$auth = $auth;
        this.$state = $state;
        this.UserService = UserService;
    }

    $onInit(){
    }

    logout() {
      this.$auth.logout().then(
        () => {
          this.$state.go('app.login');
        }
      );
    }
}

export const HeaderComponent = {
    templateUrl: './views/app/components/header/header.component.html',
    controller: HeaderController,
    controllerAs: 'vm',
    bindings: {}
}
