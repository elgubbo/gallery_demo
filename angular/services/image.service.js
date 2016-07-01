export class ImageService{
  constructor(API, ToastService, $q){
    'ngInject';

    this.API = API;
    this.unpartitionedImages = [];
    this.userImages = [];
    this.ToastService = ToastService;
    this.$q = $q;
  }

  deleteImage(image) {
    return this.$q((resolve, reject) => {
      if (!angular.isObject(image)) {
        this.API.one('image', image).get().then((img) => {
          img.remove()
            .then((imageId) => {
              this._removeImage(imageId);
              resolve(imageId);
            })
            .catch((err) => {
              reject(err);
            })
        });
      } else {
        image.remove()
          .then((imageId) => {
            this._removeImage(imageId);
            resolve(imageId);
          })
          .catch((err) => {
            reject(err);
          })
      }
    })
  }

  _removeImage(image) {
    let index = -1;
    if (angular.isObject(image)) {
      index = this.unpartitionedImages.findIndex((item) => item.id === image.id);
    } else {
      index = this.unpartitionedImages.findIndex((item) => item.id == image);
    }
    if (index > -1) {
      this.unpartitionedImages.splice(index, 1);
      this.userImages = this._partition(this.unpartitionedImages, this.unpartitionedImages.length/4);
    }
  }

  _partition(input, size) {
      if (size < 1) {
        return [input];
      }
        var newArr = [];
        for (var i = 0; i < input.length; i += size) {
            newArr.push(input.slice(i, i + size));
        }
        return newArr;
  }

  fetchImages(query) {
    let queryObj = query || {};
    //also return promise to be able to handle it externally
    return this.API.all('images').getList(queryObj).then(
      (response) => {
        this.unpartitionedImages = response;
        this.userImages = this._partition(response, response.length/4);
      },
      (err) => this.ToastService.show(err.data.message)
    );
  }

  prependImages(images) {
    //first bring it to the same form
    images.forEach((item) => {
      item.tags = [];
    })
    let coll = this.API.restangularizeCollection(null, images, 'images');
    coll.map((img) => this.unpartitionedImages.unshift(img));
    this.userImages = this._partition(this.unpartitionedImages, this.unpartitionedImages.length/4);
  }

  fetchImage(id) {
    return this.$q((resolve, reject) => {
          //do we have that image readily available?
          let match = null;
          for (var i = 0; i < this.userImages.length; i++) {
            match = this.userImages[i].find((img) => img.id == id);
            if (match) {
              resolve(match);
              return;
            }
          }
          //if not fetch it
          if (!match) {
            this.API.one('images', id).get().then(
              (response) => {
                resolve(response)
              },
              (err) => reject(err)
            );
          }

        }
      )
  }
}

