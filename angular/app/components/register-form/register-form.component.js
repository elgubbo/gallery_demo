class RegisterFormController {
  constructor($auth, ToastService, $state, $translate, UserService) {
    'ngInject';

    this.$auth = $auth;
    this.ToastService = ToastService;
    this.$state = $state;
    this.$translate = $translate;
    this.UserService = UserService;
  }

  $onInit(){
      this.name = '';
      this.email = '';
      this.password = '';
  }

  register() {
    let user = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.UserService.register(user)
      .then(() => {
        this.$state.go('app.images');
      })
  }

}

export const RegisterFormComponent = {
  templateUrl: './views/app/components/register-form/register-form.component.html',
  controller: RegisterFormController,
  controllerAs: 'vm',
  bindings: {}
}
