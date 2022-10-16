import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  totalRound: 0,
  answerUser: [],
  answerApi: [],
  arr: [],
  dataTable: []
};

const QuestionSlide = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        saveTotalRound(state, action){
            state.totalRound = action.payload
        },
        saveAnswerUser(state,action){
            console.log("action-saveanswer",action.payload);
            state.answerUser.push(action.payload)
        },
        saveAnswerAPI(state,action){
            state.answerApi.push(action.payload)
        },
        saveResult(state,action){
            console.log("saveResult",action.payload);
            state.arr.push(action.payload)
        },
        saveDataTable(state,action){
            state.dataTable.push(action.payload)
        }
    }
})
export const {saveTotalRound,saveAnswerUser,saveAnswerAPI,saveResult,changeScore,saveDataTable} = QuestionSlide.actions
export default QuestionSlide.reducer