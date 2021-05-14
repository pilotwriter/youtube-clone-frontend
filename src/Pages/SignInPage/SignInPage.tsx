import React from 'react';
import './SignInPage.css';
import {GoogleLogin} from 'react-google-login';
import Axios from 'axios'
const SignInPage: React.FC = () => {
    const responseGoogle = (res:any) =>{
        const url = 'http://localhost:3001/signin';
        const payload ={
            name:res.profileObj.name,
            email:res.profileObj.email,
            googleId:res.googleId,
        }
        Axios.post(url,payload).then((response)=>{
                console.log(response);
        }).catch(err=>{
                console.log(err);

        });
    }

    return (
        <div className="signInPage">
            <div className="singInContainer">
                <div className="signInTop"><h1>Sign in With Google</h1></div>
                <div className="signInBody">
                    <GoogleLogin
                    clientId="298313638606-eu5t2sgp40ejuk88ksg52v0knvt30u28.apps.googleusercontent.com"
                    buttonText="Sign In"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    />
                </div>

            </div>
        </div>
    )
}

export default SignInPage; 