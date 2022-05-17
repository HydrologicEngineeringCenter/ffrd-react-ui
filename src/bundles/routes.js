import { createRouteBundle } from 'redux-bundler';
import FourOhFour from "@components/pages/404"

const base = process.env.REACT_APP_BASEPATH?.replaceAll("/", "")

var routeObj = {}
// routeObj["/" + base] = LoginPage
routeObj["*"] = FourOhFour

const routes = createRouteBundle(routeObj)
export default routes;
