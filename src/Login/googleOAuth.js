export const googleOAuth = {
    clientId: "786275069032-32rglqn5le1p9nr8b8bptkr8q5c7f6if.apps.googleusercontent.com",
    cookiePolicy: "single_host_origin",
}

export const getUserData = (response) => {
    return {
        name: response.profileObj.givenName, 
        googleId: response.profileObj.googleId,
        avatar: response.profileObj.imageUrl
    }
}