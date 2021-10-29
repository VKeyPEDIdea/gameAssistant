import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../../app/store';

interface PlayerState {
	name: string;
	score: number;
}

const initialState: PlayerState = {
	name: 'playerName',
	score: 0,
};

export const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		rename: ({ name }, action) => {
			name = action.payload;
		},
		increaseScore: ({ score }, action: PayloadAction<number>) => {
			score += action.payload;
		},
		decreaseScore: ({ score }, action: PayloadAction<number>) => {
			score -= action.payload;
		}
	}
});

export const { rename, increaseScore, decreaseScore } = playerSlice.actions;

export const selectPlayerScore = (state: RootState) => state.player.score;

export default playerSlice.reducer;
