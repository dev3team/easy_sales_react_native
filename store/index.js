import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import thunk from 'redux-thunk';

export const fetchJobs = createAsyncThunk(
    'parsedJobs/fetchJobs',
    async (length, {rejectWithValue, dispatch}) => {
        console.log(length, 'length')
        try {
            const response = await axios.get(`http://192.168.0.103:3306/parsed-jobs?skip=${length}`);

            const {data: {jobs: newJobs, isListEnd}} = response;
            
            dispatch(addJobs({newJobs, isListEnd}))

            return response
            
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const parsedJobs = createSlice({
    name: 'parsedJobs',
    initialState: {
        jobs: [],
        isListEnd: false,
        isLoading: false
    },
    reducers: {
        addJobs : (state, action) => {
            const {newJobs: jobs, isListEnd} = action.payload
            state.jobs = [...state.jobs, ...jobs]
            state.isListEnd = isListEnd
        }, 
        addNewJobs: (state, action) => {
            // console.log(action.payload.data)
            console.log(action.payload.data.length)
            const jobs = action.payload.data
            state.jobs.unshift(...jobs)
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

export const { addJobs, addNewJobs } = parsedJobs.actions

export const store = configureStore({
    reducer: {
        parsedJobs: parsedJobs.reducer
    },
    middleware: [thunk]
})

