class ImageGalleryController{
    constructor($scope, API, ImageService, $timeout){
        'ngInject';
        this.API = API;
        this.ImageService = ImageService;
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.searchQuery = null;
        this.searched = false;
    }

    resetSearch() {
      this.searchQuery = '';
      this.searched = false;
      this.ImageService.fetchImages();
    }

    search() {
      //we don't need to handle the promise here
      this.ImageService.fetchImages({tag: this.searchQuery});
      this.searched = true;
    }

    $onInit(){
      //we don't need to handle the promise here
      this.ImageService.fetchImages();
    }

}

export const ImageGalleryComponent = {
    templateUrl: './views/app/components/image-gallery/image-gallery.component.html',
    controller: ImageGalleryController,
    controllerAs: 'imageGallery',
    bindings: {}
}
