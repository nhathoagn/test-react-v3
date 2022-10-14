import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  totalRound: 0,
  answerUser: [],
  answerApi: []

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
        }
    }
})
export const {saveTotalRound,saveAnswerUser,saveAnswerAPI} = QuestionSlide.actions
export default QuestionSlide.reducer