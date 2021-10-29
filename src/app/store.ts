import { configureStore } from '@reduxjs/toolkit';
import playerReducer from '../features/Player/playerSlice';
import matchSlice from '../features/match/matchSlice';

const store = configureStore({
	reducer: {
		player: playerReducer,
		match: matchSlice,
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
