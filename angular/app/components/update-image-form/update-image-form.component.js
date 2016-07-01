class UpdateImageFormController{
    constructor(ToastService, $translate, API){
        'ngInject';

        this.ToastService = ToastService;
        this.$translate = $translate;
        this.API = API;
        this.selectedTag = null;
    }

    $onInit(){
    }

    tagQuerySearch(query) {
      return this.API.all('tags').getList({q: query}).then(
        (res) => {
          return res || []
        },
        (err) => {
          this.ToastService.show(err);
        }
      )

    }

    transformChip(chip) {
      // If it is an object, it's already a known chip
      if (angular.isObject(chip)) {
        return chip;
      }
      // Otherwise, create a new one
      return { name: chip, type: 'new' }
    }

    save(){
      this.image.save().then(
        () => this.ToastService.show(this.$translate.instant('UPDATE.SUCCESSMESSAGE'))
      )
    }
}

export const UpdateImageFormComponent = {
    templateUrl: './views/app/components/update-image-form/update-image-form.component.html',
    controller: UpdateImageFormController,
    controllerAs: 'vm',
    bindings: {
      image: '='
    }
}
