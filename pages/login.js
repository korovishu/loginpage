import {useState} from "react";
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
  return (
    <div className="flex flex-col items-center">
        <div className="w-1/5 mt-14 min-w-max">
            <SocialSignIn />
            <hr className='mb-5' />
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
                overrides={{
                    Root: {
                    style: () => ({
                        borderRadius: "0.375rem"
                    })
                    }
                }}
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
                overrides={{
                    Root: {
                    style: () => ({
                        borderRadius: "0.375rem"
                    })
                    }
                }}
                />
            </FormControl>
            <Button 
            onClick={()=> auth.signinWithEmail(email, pass)}
            overrides={{
                BaseButton: {
                style: () => ({
                    width:'100%',
                    backgroundColor: '#3B82F6',
                    borderRadius: "0.375rem"
                })
                }
            }}>
              Log In
            </Button>
            <p className="mt-4 text-sm font-light">
                Don&apos;t have an account?
                <Link href='/signup' passHref>
                    <span
                    className="cursor-pointer text-pink-600"> Sign Up.</span>
                </Link>
            </p>

            {/* <p className="text-sm font-light underline">
                Forgot password?
            </p> */}
        </div>
        
      
    </div>
    
  );
}