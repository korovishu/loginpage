import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';
import firebase from './firebase';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useFirebaseAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useFirebaseAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser);
      setUser(user);
      setLoading(false);
      return user;
    } else {
      setUser(false);
      setLoading(false);
      return false;
    }
  };

  const signinWithEmail = async (email, password, redirect) => {
    setLoading(true);
    return await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        handleUser(response.user);

        if (redirect) {
          Router.push(redirect);
        }
      });
  };

  const signinWithGoogle = async (redirect) => {
    setLoading(true);
    return await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        handleUser(response.user);

        if (redirect) {
          Router.push(redirect);
        }
      });
  };

  const signUp = async (email, password, redirect) => {
      setLoading(true);
      return await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            handleUser(response.user);

            if(redirect) {
                Router.push(redirect);
            }
        })
  }

  const signout = async () => {
    return await firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);
    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signinWithEmail,
    signinWithGoogle,
    signUp,
    signout,
  };
}

const formatUser = async (user) => {
  const decodedToken = await user.getIdTokenResult(true);
  const { token, expirationTime } = decodedToken;
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    token,
    expirationTime,
  };
};