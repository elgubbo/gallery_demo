class UpdateImageController{
    constructor(ImageService, $stateParams, $state){
        'ngInject';

        this.ImageService = ImageService;
        this.$stateParams = $stateParams;
        this.$state = $state;
    }

    $onInit(){
      this.ImageService.fetchImage(this.$stateParams.id)
        .then((res) => this.image = res)
        .catch(() => this.$state.go('app.images'));
    }
}

export const UpdateImageComponent = {
    templateUrl: './views/app/components/update-image/update-image.component.html',
    controller: UpdateImageController,
    controllerAs: 'vm',
    bindings: {}
}
