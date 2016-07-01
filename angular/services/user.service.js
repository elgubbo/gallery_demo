export class UserService{
    constructor($auth, $translate, ToastService, $state, API){
        'ngInject';

        this.$auth = $auth;
        this.$translate = $translate;
        this.ToastService = ToastService;
        this.$state = $state;
        this.profile = {};
        if (this.$auth.isAuthenticated()) {
          API.one('auth').one('profile').get()
            .then((result) => {
              this.profile = result;
            })
            .catch(() => {
              this.ToastService.show('could not fetch profile, please log in');
              this.$state.go('app.login');
            })
        }
        //
    }

    register(userObj) {
      let user = {
        name: userObj.name || "",
        email: userObj.email || "",
        password: userObj.password || ""
      };
      //return the promise to attach more listeners to it
      return this.$auth.signup(user)
        .then((response) => {
          this.$auth.setToken(response.data);
          this.profile = user;
          this.ToastService.show(this.$translate.instant('REGISTER.SUCCESSMESSAGE'));
        })
        .catch(this._failedRegistration.bind(this));
    }

    _failedRegistration(response) {
      if (response.status === 422) {
        for (let error in response.data.errors) {
          return this.ToastService.show(response.data.errors[error][0]);
        }
      }
      this.ToastService.show(response.statusText);
    }

    login(userObj) {
      let user = {
        email: userObj.email,
        password: userObj.password
      };

      return this.$auth.login(user)
        .then((response) => {
          this.profile = user;
          this.$auth.setToken(response.data);
          this.ToastService.show(this.$translate.instant('LOGIN.SUCCESSMESSAGE'));
        })
        .catch(this._failedLogin.bind(this));
    }

    _failedLogin(response) {
      if (response.status === 422 ||  response.status === 401) {
        for (let error in response.data.errors) {
          return this.ToastService.show(response.data.errors[error][0]);
        }
      }
      this.ToastService.show(response.statusText);
    }
}

