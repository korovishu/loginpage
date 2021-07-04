import { Input } from "baseui/input";
import { Button } from "baseui/button";
import Link from 'next/link'

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-full sm:w-540 mt-14 shadow">
        <Link href='/login' passHref>
          <Button >Log In</Button>
        </Link>
      </div>
    </div>
    
  );
}