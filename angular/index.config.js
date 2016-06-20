import {RoutesConfig} from './config/routes.config';
import {LoadingBarConfig} from './config/loading_bar.config';
import {ThemeConfig} from './config/theme.config';
import {SatellizerConfig} from './config/satellizer.config';
import {TranslateConfig} from './config/translate.config';

angular.module('app.config')
  .config(RoutesConfig)
  .config(LoadingBarConfig)
  .config(ThemeConfig)
  .config(SatellizerConfig)
  .config(TranslateConfig);
