import { Dashboard } from "./views/dashboard";

// Applications
import { ApplicationList, ApplicationCreate } from "./views/applications/";

const routes = [
  // Dashboard
  { path: "/", exact: true, name: "Dashboard", component: Dashboard },

  // Applications
  {
    path: "/applications",
    exact: true,
    name: "Applications",
    component: ApplicationList,
  },
];

export default routes;
