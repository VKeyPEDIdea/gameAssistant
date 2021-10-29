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
		increaseBank: ({ bank }, action: PayloadAction<number>) => {
			bank += action.payload;
		},
		decreaseBank: ({ bank }, action: PayloadAction<number>) => {
			bank -= action.payload;
		}
	}
});

export const { increaseBank, decreaseBank } = matchSlice.actions;
export const selectMatchBank = (state: RootState) => state.match.bank;

export default matchSlice.reducer;
