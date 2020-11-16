import { loaderParent } from './config';
export default () => {
  loaderParent.parentElement.removeChild(loaderParent);
};
