import { configureStore } from '@reduxjs/toolkit'
import PlayerSlice from './slices/playerSlide/player'
import QuestionSlide from './slices/questionSlide/questionSlide';
export const store = configureStore({
    reducer: {
        player: PlayerSlice,
        question: QuestionSlide
    },
});
