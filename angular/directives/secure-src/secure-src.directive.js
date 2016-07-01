class SecureSrcController{
    constructor($http, $window){
        'ngInject';
        this.$http = $http;
        this.$window = $window
        this.imageLoaded = false;
    }
}
export function SecureSrcDirective() {
  return {
    scope: {
      loadedModel: '='
    },
    controller: SecureSrcController,
    controllerAs: 'secureSrcCtrl',
    link: function(scope, element, attrs, controller){

      let revokeObjectURL = () => {
        if (scope.objectURL) {
          URL.revokeObjectURL(scope.objectURL);
        }
      }

      scope.$watch('objectURL', (objectURL) => {
        element.attr('src', objectURL);
      });

      scope.$on('$destroy', () => {
        revokeObjectURL();
      });

      attrs.$observe('secureSrc', (url) => {
        revokeObjectURL();

        if(url && url.indexOf('data:') === 0) {
          scope.objectURL = url;
        } else if(url) {
          let token = controller.$window.localStorage.satellizer_token;
          let req = {
            method: 'GET',
            url,
            headers: {
             Authorization: 'Bearer ' + token
            },
            responseType: 'arraybuffer'
          }
          controller.$http(req)
            .then((response) => {
              let blob = new Blob(
                [ response.data ],
                { type: response.headers('Content-Type') }
              );
              scope.objectURL = URL.createObjectURL(blob);
              scope.loadedModel = true;
            });
        }
      });
    }
  }
}