import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();


    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
        
    }


    const githubProvider = new GithubAuthProvider();
    const signInUsingGithub =()=>{
        return signInWithPopup(auth, githubProvider)
        
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
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    const processLogIn = e =>{
        
        return signInWithEmailAndPassword(auth, email, password)
        
    }

    const logOut =() =>{
        signOut(auth)
        .then(()=>{
            setUser({});
            localStorage.removeItem('loggedInUser')

        })
    }
    useEffect( ()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                console.log('inside state change', user);
                setUser(user);
                localStorage.setItem('loggedInUser',user.email);
            }
        
            setIsLoading(false)
        })
    }, [])

    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged((user) => {
    //       if (user) {
    //           // User is signed in, see docs for a list of available properties
    //           // https://firebase.google.com/docs/reference/js/firebase.User
    //           var uid = user.uid;
        
    //           console.log(user)
    //           setLoggedInUser({ email: user.email })
    //           // ...
    //       } else {
        
    //           setLoggedInUser({})
    //       }
    //     });
    //   },[])
      

    return{
        user,
        error,
        signInWithGoogle,
        signInUsingGithub,
        handleEmailChange,
        handlePasswordChange,
        processLogIn,
        isLoading,
        handleRegistration,
        logOut
    }
}
export default useFirebase;