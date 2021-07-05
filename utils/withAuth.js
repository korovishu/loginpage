import Router from 'next/router'

export default function withAuth(auth) {
    if(auth.loading) return true;
    else if(!auth.user) {
        auth.setRedirect(Router.pathname);
        Router.push('/login');
        return true;
    }
    return false;
}