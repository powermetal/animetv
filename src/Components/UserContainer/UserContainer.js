import React, { useEffect, useState } from 'react';
import './UserContainer.css'
import { GoogleLogin, useGoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, googleOAuth } from '../../Login/googleOAuth';
import { login, logout, fetchUserData, isSignIn, selectUser } from '../../Redux/userSlice';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

const UserContainer = () => {

    const [open, setOpen] = useState(false)
    const menuRef = React.createRef()
    const signedIn = useSelector(isSignIn)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const onSuccess = (response) => {
        dispatch(login(getUserData(response)))
        dispatch(fetchUserData(response.googleId))    
    }

    const onFailure = (response) => {
        return console.log(response)
    }

    const handleBlur = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setOpen(false)
        }
    }
    
        const onLogoutSuccess = () => {
            dispatch(logout())
        }

    const { signOut } = useGoogleLogout({
        onFailure,
        ...googleOAuth,
        onLogoutSuccess
    })

    const logoutMenu = () => {
        signOut()
        setOpen(false)
    }

    useEffect(() => {
        if (menuRef.current)
            menuRef.current.focus()
    }, [open])

    const renderGoogle = () => {
        if(signedIn) {
            return (
            <div className="user-container" onClick={() => setOpen(!open)}>
                <img src={user.avatar} alt="avatar" />
                <p>{user.name}</p>
                <div className="user-container-menu">
                    <DropDownMenu
                        ref={menuRef}
                        active={open}
                        blur={handleBlur}
                        items={[
                            { value: 'Watching', path: '/', icon: <VideoLibraryIcon />, action: () => setOpen(false) },
                            { value: 'Watchlist', path: '/watchlist', icon: <BookmarksIcon />, action: () => setOpen(false) },
                            { value: 'Logout', icon: <ExitToAppIcon />, action: logoutMenu}
                        ]}
                    />
                </div>
            </div>
            )
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