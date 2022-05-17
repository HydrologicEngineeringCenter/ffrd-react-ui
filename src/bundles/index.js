import {
  composeBundles,
  createUrlBundle,
} from 'redux-bundler';
import routes from "@bundles/routes";

export default composeBundles(
  routes,
  createUrlBundle(),
);

