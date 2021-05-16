import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, googleOAuth } from '../../Login/googleOAuth';
import { login, logout, handleUserData, isSignIn } from '../../Redux/userSlice';


const UserContainer = () => {

    const signedIn = useSelector(isSignIn)
    
    const dispatch = useDispatch()
    
    const queryParams = "/animes?search=j&page=1"

    const onSuccess = (response) => {
        dispatch(login(getUserData(response)))
        dispatch(handleUserData(response.googleId))    
    }

    const onFailure = (response) => {
        return console.log(response)
    }

    const renderGoogle = () => {
        if(signedIn) {
            return (
            <GoogleLogout
                clientId= {googleOAuth.clientId}
                buttonText= "Logout"
                onLogoutSuccess={() => dispatch(logout())}
            />)
        }
        else
        return (
            <GoogleLogin
                clientId= {googleOAuth.clientId}
                cookiePolicy= {googleOAuth.cookiePolicy}
                buttonText= "Login"
                onSuccess= {onSuccess}
                onFailure= {onFailure}
                isSignedIn={true}
            />
            )
    }

    return (
        <div>
            {renderGoogle()}
        </div>
    )
}

export default UserContainer