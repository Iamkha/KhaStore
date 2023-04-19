import Cookies from 'js-cookie';

export const setCookie = (cname, cvalue, exdays) => {
  Cookies.set(cname, cvalue);
};

export const getCookie = (cname) => {
  return Cookies.get(cname);
};

export const removeCookie = (cname) => {
  Cookies.remove(cname);
};
