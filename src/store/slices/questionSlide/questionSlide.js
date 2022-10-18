import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  totalRound: 0,
  answerUser: [],
  answerApi: [],
  arr: [],
  dataTable1: '',
  dataTable2: ''
};

const QuestionSlide = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        saveTotalRound(state, action){
            state.totalRound = action.payload
        },
        saveAnswerUser(state,action){
            state.answerUser.push(action.payload)
        },
        saveAnswerAPI(state,action){
            state.answerApi.push(action.payload)
        },
        saveResult(state,action){
            state.arr.push(action.payload)
        },
        saveDataTable1(state,action){
            state.dataTable1 = (action.payload)
        },
        saveDataTable2(state,action){
            state.dataTable2 = (action.payload)
        }
    }
})
export const {saveTotalRound,saveAnswerUser,saveAnswerAPI,saveResult,changeScore,saveDataTable1,saveDataTable2} = QuestionSlide.actions
export default QuestionSlide.reducer