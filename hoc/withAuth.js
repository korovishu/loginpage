/* eslint-disable react/display-name */
import Router from "next/router";
import { useAuth } from "../lib/auth";

const withAuth = (WrappedComponent) => {
  return ((props) => {
    if (typeof window !== "undefined") {
        const auth = useAuth();
        if(auth.loading) return null;
        else if(!auth.user) {
            auth.setRedirect(Router.pathname);
            Router.push('/login');
            return null;
        }

      return <WrappedComponent {...props} />;
    }

    return null;
  })
};

export default withAuth;