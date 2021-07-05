import { useAuth } from "../lib/auth";
import Router from 'next/router'

export default function Dashboard() {
    const auth = useAuth();

    if(auth.loading) return null;
    else if(!auth.user) {
        auth.setRedirect(Router.pathname);
        Router.push('/login');
        return null;
    }

    return (
        <p>
            Welcome to Dashboard, {auth.user.email}
        </p>
    );
}