import {UpdateImageComponent} from './app/components/update-image/update-image.component';
import {UpdateImageFormComponent} from './app/components/update-image-form/update-image-form.component';
import {ImageCardComponent} from './app/components/image-card/image-card.component';
import {ImageGalleryComponent} from './app/components/image-gallery/image-gallery.component';
import {UploadImageComponent} from './app/components/upload-image/upload-image.component';
import {HeaderComponent} from './app/components/header/header.component';
import {ResetPasswordComponent} from './app/components/reset-password/reset-password.component';
import {ForgotPasswordComponent} from './app/components/forgot-password/forgot-password.component';
import {LoginFormComponent} from './app/components/login-form/login-form.component';
import {RegisterFormComponent} from './app/components/register-form/register-form.component';

angular.module('app.components')
	.component('updateImage', UpdateImageComponent)
	.component('updateImageForm', UpdateImageFormComponent)
	.component('imageCard', ImageCardComponent)
	.component('imageGallery', ImageGalleryComponent)
	.component('uploadImage', UploadImageComponent)
	.component('header', HeaderComponent)
	.component('resetPassword', ResetPasswordComponent)
	.component('forgotPassword', ForgotPasswordComponent)
	.component('loginForm', LoginFormComponent)
	.component('registerForm', RegisterFormComponent);

