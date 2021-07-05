import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { useAuth } from '../lib/auth'

function SocialSignIn() {
  const auth = useAuth();
  return (
    <div className="flex flex-col mb-10 mt-20 m-auto">
      <button className="mt-10 focus:outline-none" onClick={()=>auth.signinWithGoogle()}>
        <div className="flex border border-gray-300 p-2 rounded-md items-center justify-center bg-red-600">
          <FaGoogle size="20" className="text-white" />
          <p className="ml-3 text-white">Sign in with Google</p>
        </div>
      </button>
      <button className="mt-4 focus:outline-none">
        <div className="flex border border-blue-600 p-1 py-2 rounded-md items-center justify-center">
          <FaFacebook size="23" className="text-blue-600 ml-2"/>
          <p className="ml-2">Sign in with Facebook</p>
        </div>
      </button>
    </div>
  )
}

export default SocialSignIn