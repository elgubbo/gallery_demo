export class APIService {
  constructor(Restangular, ToastService, $window, $state) {
    'ngInject';
    //content negotiation
    let headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/x.laravel.v1+json'
    };

    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer
        .setBaseUrl('/api/')
        .setDefaultHeaders(headers)
        .setErrorInterceptor(function(response) {
          if (response.status === 422 || response.status === 401) {
            $state.go('app.login');
            return ToastService.show(response.data.message);
          }
          if (response.status === 500) {
            return ToastService.show(response.statusText)
          }
        })
        .addFullRequestInterceptor((element, operation, what, url, headers) => {
          let token = $window.localStorage.satellizer_token;
          if (token) {
            headers.Authorization = 'Bearer ' + token;
          }
        })
        .addResponseInterceptor((data) => {
          let extractedData;
          extractedData = data.data;

          return extractedData;
        })
    });
  }
}
