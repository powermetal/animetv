import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserData, postToWatching, postToWatchlist } from '../userAPI';

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

export const addWatchlist = createAsyncThunk(
    'user/watchlist',
        (anime, thunkAPI) => {
            thunkAPI.dispatch(addToWatchlist(anime))
            postToWatchlist(thunkAPI.getState().user.googleId, anime)
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
        },
        addToWatchlist: (state, action) => {
            if(state.watchlist.find(e => e.animeId === action.payload.animeId))
                return state
            return {...state, watchlist: [...state.watchlist, action.payload]}
        }
    },

    extraReducers: {
        [fetchUserData.fulfilled]: (state, action) => {
            return { ...state, ...action.payload }
        }
    }
});

export const isSignIn = state => state.user.googleId ? true : false
export const selectUser = state => state.user
export const selectWatchlist = state => state.user.watchlist


export const {
    login,
    logout,
    addToWatching,
    addToWatchlist
} = userSlice.actions

export default userSlice.reducer