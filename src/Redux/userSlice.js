import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserData } from '../userAPI';

export const handleUserData = createAsyncThunk(
    'user/userData',
        userId => {
            const response = getUserData(userId)
            return response
        }
  )

const defaultState = {
    googleId: '',
    name: '',
    avatar: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState: defaultState,
    reducers: {
        login: (state, action) => {
            return {...state, ...action.payload}
        },
        logout: () => {
            return { ...defaultState }
        }
    },

    extraReducers: {
        [handleUserData.fulfilled]: (state, action) => {
            console.log(action.payload)
            return { ...state, ...action.payload }
        }
    }
});

export const isSignIn = state => state.user.googleId ? true : false

export const {
    login,
    logout,
} = userSlice.actions

export default userSlice.reducer