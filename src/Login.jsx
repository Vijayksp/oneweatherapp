import firebase  from './Firebase';
import {GoogleAuthProvider,getAuth,signInWithPopup,signOut} from 'firebase/auth';
import Home from './Home'
import { useState } from 'react';
import Header from './Header';



const Login=()=>{

    const[data,setData]=useState({name:"",email:"",url:"",isLogged:false});
    const handleLogin=()=>{

        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        provider.setCustomParameters({
          'login_hint': 'username@gmail.com'
        });
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
          //console.log(user.displayName);
          //console.log(user.email);
          //console.log(user.photoURL);
          setData({name:user.displayName,email:user.email,url:user.photoURL,isLogged:true});
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });

    }

    const handleLogout=()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
          setData({name:"",email:"",url:"",isLogged:false});
        }).catch((error) => {
          // An error happened.
        });
      }



    return(<>
        
        {/* <h1>My App</h1> */}
          {
                data.isLogged===true?
                <>
                <Header />
                      <h2>Hello , {data.name}</h2>
                      <p>
                          Email : {data.email}
                      </p>
                      <p>
                          <img src={data.url} alt={data.name} referrerPolicy='no-referrer' />                        
                      </p>
                <Home data NAME={data.name} EMAIl= {data.email} />
                      
                      <p>
                        <input type="button" value="Logout" onClick={handleLogout} />
                      </p>
                </>
                :
                <>
                      <h2>Welcome GUEST</h2>
                      <p>
                          Please login to explore more
                      </p>
                      <p>
                        <input type="button" value="Login" onClick={handleLogin} />
                      </p>



                </>
          }

    </>)
}

export default Login;