import { createRouteBundle } from "redux-bundler"
import FourOhFourPage from "@components/pages/404"
import DisclaimerPage from "@components/pages/disclaimer"

const base = process.env.REACT_APP_BASEPATH?.replaceAll("/", "")

var routeObj = {}
routeObj["/" + base] = DisclaimerPage
routeObj["*"] = FourOhFourPage

const routes = createRouteBundle(routeObj)
export default routes;
