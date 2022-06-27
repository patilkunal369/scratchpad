import { matchRoutes, useLocation } from "react-router-dom";

const routes = [{ path: "/board/:id" }];

export const useCurrentPath = () => {
  const location = useLocation();
  const route = matchRoutes(routes, location);

  return route?.[0].route.path || -1;
};
