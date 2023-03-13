import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bidDetails: null,
    bidDetailsForInput: {
        team: '',
        freelancer: '',
        terms: {type: null},
        connects: '',
    },
    result: null
}

export const bidSlice = createSlice({
    name: 'bidDetails',
    initialState,
    reducers: {
        setDuration: (state, action) => {
            state.bidDetailsForInput.duration = action.payload
        },
        setType: (state, action) => {
            state.bidDetailsForInput.terms.type = action.payload;
            if (action.payload == 'hourly'){
                state.bidDetailsForInput.terms.data = ''
            }
        },
        setTermsValue: (state, action) => {
            state.bidDetailsForInput.terms.data = action.payload
        },
        setIsActive: (state, action) => {
            state.bidDetailsForInput.terms.data.map(item => {
                if (item.type === action.payload) return item.active = true;
                return item.active = false
            })
        },
        //set value fixed by project 
        setValueByProject: (state, action) => {
            state.bidDetailsForInput.terms.data[1].value = action.payload
        },
        addMilestone: (state, action) => {
            state.bidDetailsForInput.terms.data[0].value = [...state.bidDetailsForInput.terms.data[0].value, {description: '', dueDate: '20-02-2023', amount: '0'}]
        },
        setDescription: (state, action) => {
            state.bidDetailsForInput.terms.data[0].value[action.payload.index].description = action.payload.value
        },
        deleteMilestone: (state, action) => {
            state.bidDetailsForInput.terms.data[0].value.splice(action.payload, 1)
        },
        setAmount: (state, action) => {
            state.bidDetailsForInput.terms.data[0].value[action.payload.index].amount = action.payload.value
        },
        setDate: (state, action) => {
            state.bidDetailsForInput.terms.data[0].value[action.payload.index].date = action.payload.value
        },
        setCover: (state, action) => {
            state.bidDetailsForInput.cover = action.payload
        },
        setAnswers: (state, action) => {
            let answers = [];
            for(let i = 0; i < action.payload; i++){
                answers.push('')
            }
            state.bidDetailsForInput.answers = answers;
        },
        setAnswer: (state, action) => {
            state.bidDetailsForInput.answers[action.payload.index] = action.payload.value
        },
        setConnects: (state, action) => {
            state.bidDetailsForInput.connects = action.payload
        },
        setTeam: (state, action) => {
            state.bidDetailsForInput.team = action.payload
        },
        setFreelancer: (state, action) => {
            state.bidDetailsForInput.freelancer = action.payload
        },
        setBidDetails: (state, action) => {
            state.bidDetails = action.payload
        },
        setResult: (state, action) => {
            state.result = action.payload
        },
        reset: () => initialState
    }
})

export const { 
    setDuration,
    setType, 
    setTermsValue, 
    setIsActive, 
    setValueByProject, 
    addMilestone, 
    setDescription,
    deleteMilestone,
    setAmount,
    setCover,
    setAnswers,
    setAnswer,
    setDate,
    setConnects,
    setFreelancer,
    setTeam,
    setBidDetails,
    setResult,
    reset
} = bidSlice.actions;