class LoginFormController {
	constructor($auth, ToastService, $translate, $state, UserService) {
		'ngInject';

		this.$auth = $auth;
		this.ToastService = ToastService;
    this.$translate = $translate;
    this.$state = $state;
    this.UserService = UserService;
	}

  $onInit(){
      this.email = '';
      this.password = '';
  }

	login() {
		let user = {
			email: this.email,
			password: this.password
		};

		this.UserService.login(user)
			.then(() => {
        this.$state.go('app.images');
			})
	}

}

export const LoginFormComponent = {
	templateUrl: './views/app/components/login-form/login-form.component.html',
	controller: LoginFormController,
	controllerAs: 'vm',
	bindings: {}
}
