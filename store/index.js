import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import thunk from 'redux-thunk';

export const fetchJobs = createAsyncThunk(
    'parsedJobs/fetchJobs',
    async (length, {rejectWithValue, dispatch}) => {
        console.log(length, 'length')
        ///172.20.10.3
        //192.168.0.103
        try {
            const response = await axios.get(`http://192.168.0.103:3306/parsed-jobs?skip=${length}`);

            const {data: {jobs: newJobs, isListEnd}} = response;
            
            dispatch(addJobs({newJobs, isListEnd}))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState = {
    jobs: [],
    newJobs: [],
    appStatus: 'active',
    isListEnd: false,
    isLoading: false,

}


const parsedJobs = createSlice({
    name: 'parsedJobs',
    initialState,
    reducers: {
        addJobs : (state, action) => {
            const {newJobs: jobs, isListEnd} = action.payload
            state.jobs = [...state.jobs, ...jobs]
            state.isListEnd = isListEnd
        }, 
        addNewJobs: (state, action) => {
            if(state.jobs.length != 0){
                const jobs = action.payload.data
                state.newJobs.unshift(...jobs)
            }
        },
        showNewJobs: (state, action) => {
            const slicedJobs = state.newJobs.splice(-10);
            state.jobs.unshift(...slicedJobs);
        },
        resetState: (state, action) => {
            state.jobs = []
            state.isListEnd = false
            state.newJobs = []
        },
        setAppStatus: (state, action) => {
            state.appStatus = action.payload
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchJobs.pending, (state, action) => {
          state.isLoading = true; 
        });
        builder.addCase(fetchJobs.fulfilled, (state, action) => {
            state.isLoading = false;
        })
      },
      
})

export const { addJobs, addNewJobs, resetState, setAppStatus, showNewJobs } = parsedJobs.actions

export const store = configureStore({
    reducer: {
        parsedJobs: parsedJobs.reducer
    },
    middleware: [thunk]
})

