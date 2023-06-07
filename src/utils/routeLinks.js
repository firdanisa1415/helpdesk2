/**
 * @todo refactor this variable
 */
export const usedRouteAPI = `${process.env.VUE_APP_API_URL}/api` ?? "";

export const baseRouteLinks = {
  home: `/`,
  profile: `/profile`,
  landing: `/landing`,
};

export const credsRouteLinks = {
  login: `/auth/login`,
  logout: `/auth/logout`,
  guest: `/auth/guest`
};

const baseAdminRouteLink = `/admin`;

export const adminRouteLinks = {
  dashboard: `${baseAdminRouteLink}/dashboard`,
  pelaporan: `${baseAdminRouteLink}/pelaporan`,
  boardpelaporan: `${baseAdminRouteLink}/boardpelaporan`,
  backlog: `${baseAdminRouteLink}/backlog`,
  sprint: `${baseAdminRouteLink}/sprint`,
  board: `${baseAdminRouteLink}/board`,
  penugasan: `${baseAdminRouteLink}/penugasan`,
  pengguna: `${baseAdminRouteLink}/pengguna`,
};
