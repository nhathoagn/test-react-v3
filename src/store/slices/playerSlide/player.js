import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    username: []
};
const PlayerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        addplayer(state, action){
            state.username.push(action.payload)
        }
    }
})
export const {addplayer} = PlayerSlice.actions
export default PlayerSlice.reducer