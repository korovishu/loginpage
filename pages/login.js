import {useState} from "react";
import { Input } from "baseui/input";
import { FormControl } from "baseui/form-control";
import { Button } from "baseui/button";
import Link from "next/link"
import SocialSignIn from "../components/SocialSignIn";
import { useAuth } from "../lib/auth";
import { ThemeProvider, createTheme, lightThemePrimitives } from 'baseui';

export default function App() {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className="flex flex-col items-center">
        <div className="w-1/5 mt-14 min-w-max">
            <SocialSignIn />
            <hr/>
            <p className="text-center m-auto font-light">OR</p>
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
            <ThemeProvider
                theme={createTheme(lightThemePrimitives, {
                  colors: {
                    buttonPrimaryHover: '#409c13',
                    buttonPrimaryActive: '#409c13',
                  },
                })}>
                <Button 
                onClick={()=> auth.signinWithEmail(email, pass)}
                overrides={{
                BaseButton: {
                style: () => ({
                    width:'100%',
                    backgroundColor: '#4eba18',
                    borderRadius: "0.375rem"
                })
                }
            }}>
              Log In
            </Button>

            </ThemeProvider>
            
            <p className="mt-4 text-sm font-light">
                Don&apos;t have an account?
                <Link href='/signup' passHref>
                    <span
                    className="cursor-pointer font-normal text-blue-600 hover:underline"> Sign Up.</span>
                </Link>
            </p>
        </div>
        
      
    </div>
    
  );
}