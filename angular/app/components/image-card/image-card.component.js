class ImageCardController{
    constructor($state, $scope, ImageService, $mdDialog, $translate){
        'ngInject';
        this.$state = $state;
        this.imageUrl = '';
        this.$scope = $scope;
        this.ImageService = ImageService;
        this.$mdDialog = $mdDialog;
        this.$translate = $translate;
        this.imageLoaded = false;
    }

    $onInit(){
      this.$scope.$watch(() => this.image, (img) => {
          if (img) {
            this.imageUrl = '/api/images/' + img.id + '/file';
          }
        }
      )
    }

    delete(ev) {
      const confirm = this.$mdDialog.confirm()
            .title(this.$translate.instant('CARD.CONFIRM.DELETE'))
            .textContent(this.$translate.instant('CARD.CONFIRM.QUESTION'))
            .targetEvent(ev)
            .ok(this.$translate.instant('CARD.CONFIRM.YES'))
            .cancel(this.$translate.instant('CARD.CONFIRM.NO'));
      this.$mdDialog.show(confirm).then(() => {
        this.ImageService.deleteImage(this.image);
      });

    }
}

export const ImageCardComponent = {
    templateUrl: './views/app/components/image-card/image-card.component.html',
    controller: ImageCardController,
    controllerAs: 'vm',
    bindings: {
      image: '=',
      grid: '<'
    }
}
