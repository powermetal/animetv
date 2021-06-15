import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserData, postToWatching, postToWatchlist, deleteFromWatchlist } from '../userAPI';

export const fetchUserData = createAsyncThunk(
    'user/userData',
        userId => {
            const response = getUserData(userId)
            return response.data
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

export const removeWatchlist = createAsyncThunk(
    'user/removeFromWatchlist',
        (anime, thunkAPI) => {
            thunkAPI.dispatch(removeFromWatchlist(anime))
            deleteFromWatchlist(thunkAPI.getState().user.googleId, anime)
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
            return {...state, watching: {...state.watching, [action.payload.animeId]: action.payload.lastEpisode}}
        },
        addToWatchlist: (state, action) => {
            if(state.watchlist.find(e => e.animeId === action.payload.animeId))
                return state
            return {...state, watchlist: [...state.watchlist, action.payload]}
        },
        refreshWatchlist: (state, action) => {
            return {...state, watchlist: action.payload}
        },
        removeFromWatchlist: (state, action) => {
            return {...state, watchlist: state.watchlist.filter( e => e.animeId !== action.payload.animeId)}
        }
    },

    extraReducers: {
        [fetchUserData.fulfilled]: (state, action) => {
            const watching = action.payload.watching.reduce( (acc, e) => {
                acc[e.animeId] = e.lastEpisode
                return acc
            },{})

            return { ...state, watchlist: action.payload.watchlist, watching: watching }
        }
    }
});

export const isSignIn = state => state.user.googleId ? true : false
export const selectUser = state => state.user
export const selectWatchlist = state => state.user.watchlist
export const selectWatching = state => state.user.watching


export const {
    login,
    logout,
    addToWatching,
    addToWatchlist,
    removeFromWatchlist,
    refreshWatchlist
} = userSlice.actions

export default userSlice.reducer