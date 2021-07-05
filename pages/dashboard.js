import { useAuth } from "../lib/auth";
import Router from 'next/router'
// import withAuth from "../utils/withAuth";
import withAuth from "../hoc/withAuth";

function Dashboard() {
    const auth = useAuth();

    // if(withAuth(auth)) return null;

    return (
        <p>
            Welcome to Dashboard, {auth.user.email}
        </p>
    );
}

export default withAuth(Dashboard);