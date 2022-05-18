import {
  composeBundles,
  createUrlBundle,
} from 'redux-bundler';
import routes from '@bundles/routes';
import auth from '@bundles/auth';

export default composeBundles(
  routes,
  auth,
  createUrlBundle(),
);

