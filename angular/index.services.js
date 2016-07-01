import {UserService} from './services/user.service';
import {ImageService} from './services/image.service';
import {APIService} from './services/API.service';
import {DialogService} from './services/dialog.service';
import {ToastService} from './services/toast.service';

angular.module('app.services')
	.service('UserService', UserService)
	.service('ImageService', ImageService)
	.service('API', APIService)
	.service('DialogService', DialogService)
	.service('ToastService', ToastService)
