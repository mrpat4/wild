/*
 * ENUMERATIONS
 * Enums allow us to organize a collection of related values. Think of them as
 * a class for values, wherein the value can only be a string , or number.
 *
 */

export const ROUTES = {
  root: "/",
  login: "/login",
  logout: "/logout",
  dashboard: "/app/dashboard",
  page403: "/403",
  page404: "/404",
  page500: "/500",
};

export const LOCAL_STORAGE_TEMPLATE = {
  token: "x-token",
  adminId: "adminId",
  language: "language",
  staticSidebar: "staticSidebar",
};
