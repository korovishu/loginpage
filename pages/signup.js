import {useEffect, useState} from "react";
import { Input } from "baseui/input";
import { FormControl } from "baseui/form-control";
import { Button } from "baseui/button";
import Link from "next/link"
import SocialSignIn from "../components/SocialSignIn";
import { useAuth } from "../lib/auth";

export default function App() {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");
  const [confError, setConfError] = useState(false);

  useEffect(()=>{
    if(pass !== rePass){
        setConfError(true);
    } else {
        setConfError(false);
    }
  },[pass,rePass])

  return (
    <div className="flex flex-col items-center">
        <div className="w-1/5 mt-14 min-w-max">
            <SocialSignIn />
            <hr className="mb-5"/>
            <FormControl
            label={() => "Email"}
            caption={() => ""}
            >
                <Input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                error={false}
                clearOnEscape
                required
                />
            </FormControl>
            <FormControl
            label={() => "Password"}
            caption={() => ""}
            >
                <Input
                value={pass}
                onChange={e => setPass(e.target.value)}
                placeholder="Enter Password"
                error={false}
                type='password'
                clearOnEscape
                required
                />
            </FormControl>
            <FormControl
            label={() => "Confirm Password"}
            caption={() => ""}
            >
                <Input
                value={rePass}
                onChange={e => setRePass(e.target.value)}
                placeholder="Re-Enter Password"
                error={confError}
                type='password'
                clearOnEscape
                required
                />
            </FormControl>
            <Button 
            disabled = {confError}
            onClick={()=>auth.signUp(email,pass)}
            overrides={{
                BaseButton: {
                style: ({ $theme }) => ({
                    width: '100%',
                    backgroundColor: '#3B82F6'
                })
                }
            }}>
              Sign Up
            </Button>
            <p className="mt-4 text-sm font-light">
                Already have an account?
                <Link href='/login' passHref>
                    <span
                    className="cursor-pointer text-pink-600"> Log In.</span>
                </Link>
                
            </p>
        </div>
        
      
    </div>
    
  );
}