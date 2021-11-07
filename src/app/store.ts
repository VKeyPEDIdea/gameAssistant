import { configureStore } from '@reduxjs/toolkit';
import playerReducer from '../features/Player/playerSlice';
import matchReducer from '../features/match/matchSlice';

export const store = configureStore({
	reducer: {
		player: playerReducer,
		match: matchReducer,
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
