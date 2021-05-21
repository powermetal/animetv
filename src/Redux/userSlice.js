import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserData, postToWatching } from '../userAPI';

export const fetchUserData = createAsyncThunk(
    'user/userData',
        userId => {
            const response = getUserData(userId)
            return response
        }
  )

export const addWatching = createAsyncThunk(
    'user/watching',
        (anime, thunkAPI) => {
            thunkAPI.dispatch(addToWatching(anime))
            postToWatching(thunkAPI.getState().user.googleId, anime)
        }
)

const defaultState = {
    googleId: '',
    name: '',
    avatar: '',
    watching: {},
    watchlist: []
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
        },
        addToWatching: (state, action) => {
            return {...state, watching: {...state.watching, [action.payload.animeId]: action.payload.episode}}
        }
    },

    extraReducers: {
        [fetchUserData.fulfilled]: (state, action) => {
            return { ...state, ...action.payload }
        }
    }
});

export const isSignIn = state => state.user.googleId ? true : false

export const {
    login,
    logout,
    addToWatching
} = userSlice.actions

export default userSlice.reducer