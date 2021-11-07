import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../../app/store';

type Player = {
	name: string;
	score: number;
	cardsCount: number;
}

interface MatchState {
	bank: number;
	round: number;
	stage: number;
	duration: number;
	pause: boolean;
	playerList: Player[];
}

const initialState: MatchState = {
	bank: 0,
	round: 0,
	stage: 0,
	duration: 0,
	pause: false,
	playerList: [],
};

export const matchSlice = createSlice({
	name: 'match',
	initialState,
	reducers: {
		increaseBank: (state, action: PayloadAction<number>) => {
			state.bank += action.payload;
		},
		decreaseBank: (state, action: PayloadAction<number>) => {
			state.bank -= action.payload;
		},
		switchPause: state => {
			state.pause = !state.pause;
		},
	}
});

export const {
	increaseBank,
	decreaseBank,
	switchPause,
} = matchSlice.actions;
export const selectMatchBank = (state: RootState) => state.match.bank;
export const selectMatchPause = (state: RootState) => state.match.pause;

export default matchSlice.reducer;
