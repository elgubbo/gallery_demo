export function SearchTagsFilter(){
    'ngInject';
    return function(images, search){
      if (!search || !search.length)
        return images;
      return images.filter((image) => {
        let found = false;
        for (var i = 0; i < image.tags.length; i++) {
          found = (image.tags[i].name.indexOf(search) == 0) ? true : false;
        }
        return found;
      })
    }
}
