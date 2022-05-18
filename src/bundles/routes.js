import { createRouteBundle } from "redux-bundler"
import { Disclaimer, Splash, FourOhFour } from "@components/pages"

const base = "/" + process.env.REACT_APP_HOMEPAGE?.replaceAll("/", "")

var routeObj = {}
routeObj[base] = Disclaimer
routeObj[base + "/"] = Disclaimer
routeObj[base + "/splash"] = Splash
routeObj[base + "/splash/"] = Splash
routeObj["*"] = FourOhFour

const routes = createRouteBundle(routeObj)
export default routes;
