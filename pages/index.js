import { Button } from "baseui/button";
import Link from 'next/link'
import { useAuth } from '../lib/auth'

export default function App() {
  const auth = useAuth();

  return (
    <div className="flex flex-col items-center">
      {auth.user ? 
      <div className='mt-14'>
        <p>hello, {auth.user.email}</p>
        <Button onClick={()=>auth.signout()}>Sign Out</Button>
      </div>
       
      :
        <div className="max-w-full sm:w-540 mt-14 shadow">
          <Link href='/login' passHref>
            <Button >Log In</Button>
          </Link>
        </div>
      }
    </div>
    
  );
}