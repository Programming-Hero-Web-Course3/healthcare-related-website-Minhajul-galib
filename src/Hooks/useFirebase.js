import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";


initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();


    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error =>{
            setError(error.message);
        })
    }


    const githubProvider = new GithubAuthProvider();
    const signInUsingGithub =()=>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            setUser(result.user);
        })
    }

    
    // const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }
    const handleRegistration = e =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        e.preventDefault();
    }

    const logOut =() =>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }
    useEffect( ()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                console.log('inside state change', user);
                setUser(user);
            }
        })
    }, [])

    return{
        user,
        error,
        signInWithGoogle,
        signInUsingGithub,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        logOut
    }
}
export default useFirebase;
