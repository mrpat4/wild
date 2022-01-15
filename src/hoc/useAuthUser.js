// import { useApolloClient } from '@apollo/react-hooks';
import Cookie from "js-cookie";
import nookies from "nookies";
import string from "values/string";
import { useRouter } from "next/router";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import cookieCutter from "cookie-cutter";
const useAuthUser = () => {
  const router = useRouter();
  // //console.log({ history });
  // const client = useApolloClient();
  const setAuthUser = (token) => {
    //console.log({ token });
    // nookies.set(string.token, token, { expires: 9000000 });
    // setCookie(null, "fromClient", token);
    // router.push(string.routes.profileRoute().MY_USER_INFORMATION);
    router.push("/");
  };
  const setAuthUserVote = (token) => {
    //console.log({ token });
    cookieCutter.set(string.token, token);
    // setCookie(null, "fromClient", token);
  };

  const logout = () => {
    // client.resetStore();
    nookies.remove(string.token);
    router.push(string.routes.webRoute().SINGING);
  };
  const checkAuthUser = () => nookies.get(string.token) !== undefined;

  return { logout, setAuthUser, checkAuthUser, setAuthUserVote };
};

export default useAuthUser;
