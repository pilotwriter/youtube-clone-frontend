import React, { useState } from 'react';
import './SignInPage.css';
import {GoogleLogin} from 'react-google-login';
import Axios from 'axios'
const SignInPage: React.FC = () => {
    const [channelName, setChannelName] =  useState<string>('');
    const [signInOption,setSignInOption] = useState<string>('');
    const responseGoogle = (res:any) =>{
        const url = 'http://localhost:3001/signin';
        const payload ={
            name:res.profileObj.name,
            email:res.profileObj.email,
            googleId:res.googleId,
            channelName:channelName,
            profilePictureUrl : res.profileObj.imageUrl
        }
        console.log(res)
        
        Axios.post(url,payload).then((response)=>{
            sessionStorage.setItem('loggedIn',"true");
            sessionStorage.setItem('name',res.profileObj.name);
            sessionStorage.setItem("imageUrl",res.profileObj.imageUrl);
            sessionStorage.setItem("googleId",res.googleId);


        }).catch(err=>{
                console.log(err);

        });
    }
    function setChannelNameFunc(event : React.ChangeEvent<HTMLInputElement>){
        setChannelName(event.target.value);
    }


    return (
        <div className="signInPage">
            <div className="singInContainer">
                {signInOption == "" ? (
                    <div className="signInBody">
                        <button id="bttn" onClick={()=>setSignInOption('create')}>Create account</button>
                        <button id="bttn" onClick={()=>setSignInOption('signin')}>Sign In</button>
                    </div>
                ) : ( 
                    <>
                        <div className="signInTop"><h1>{signInOption ==='create' ? "Create Account " : "Sign in "} With Google</h1></div>
                        <div className="signInBody">
                        {signInOption ==='create' && <input type="text" placeholder="Channel Name..."  onChange={setChannelNameFunc}/>}
                      
                            <GoogleLogin
                            clientId="298313638606-eu5t2sgp40ejuk88ksg52v0knvt30u28.apps.googleusercontent.com"
                            buttonText="Sign In"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </>
                )}
               

            </div>
        </div>
    )
}


export default SignInPage; 