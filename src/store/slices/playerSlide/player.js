import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    username: [],
    winner: ''
};
const PlayerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        addplayer(state, action){
            state.username.push(action.payload)
        },
        saveWinner(state, action){
            state.winner = action.payload
        }
    }
})
export const {addplayer, saveWinner} = PlayerSlice.actions
export default PlayerSlice.reducer