class UploadImageController{
    constructor(Upload, $window, $auth, ToastService, $translate, ImageService){
        'ngInject';
        this.Upload = Upload;
        this.$window = $window;
        this.$auth = $auth;
        this.$translate = $translate;
        this.ToastService = ToastService;
        this.ImageService = ImageService;
    }

    $onInit(){
    }

    uploadFiles(files) {
        let headers = {};
        let token = this.$window.localStorage.satellizer_token;
        if (token) {
          headers.Authorization = 'Bearer ' + token;
        }
        this.files = files;
        if (files && files.length) {
            this.Upload.upload({
                url: '/api/images',
                data: {
                    files
                },
                headers
            }).then((response) => {
              this.ImageService.prependImages(response.data.data.images);
              this.ToastService.show(this.$translate.instant('UPLOAD.SUCCESSMESSAGE'));
              response.data.data.errors.forEach((fileError) => this.ToastService.show(fileError));
            },
            (response) => {
              response.data.errors.message.forEach((messages) => {
                messages.forEach((message) => {
                  this.ToastService.show(message);
                })
              })
            },
            (evt) => {
                this.progress =
                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }
    }
}

export const UploadImageComponent = {
    templateUrl: './views/app/components/upload-image/upload-image.component.html',
    controller: UploadImageController,
    controllerAs: 'vm',
    bindings: {}
}
