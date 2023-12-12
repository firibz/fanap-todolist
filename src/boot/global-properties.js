import {boot} from 'quasar/wrappers';
import {validation} from 'src/helpers/validation';
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({app}) => {
  app.config.globalProperties.$va = validation;
});
