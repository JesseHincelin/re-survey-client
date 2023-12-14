export const navigateTo = (route, functionNavigate) => {
  const dataJson = JSON.stringify(route);
  localStorage.setItem("route", dataJson);
  functionNavigate(route);
};

export const saveRoute = (route) => {
  const dataJson = JSON.stringify(route);
  localStorage.setItem("route", dataJson);
};
