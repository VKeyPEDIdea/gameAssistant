import { createSlice, PayloadAction, EntityState } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from '../../app/store';
import { Duration } from '../../models/Duration';
import { Player } from "../../models/Player";
import { getNormalizedDuration } from "../../utilities/normalizeDuration";
interface MatchState {
	bank: number;
	round: number;
	stage: number;
	duration: Duration;
	timer: number | NodeJS.Timeout;
	pause: boolean;
	playerList: Player[];
}

const cardPrice = 200;

const initialState: MatchState = {
	bank: 0,
	round: 1,
	stage: 1,
	duration: {
		hrs: 0,
		min: 0,
		sec: 0,
	},
	timer: 0,
	pause: true,
	playerList: [
		{
			id: 0,
			name: 'Регина',
			score: 0,
			cardsCount: 0,
		},
		{
			id: 1,
			name: 'Паша',
			score: 0,
			cardsCount: 0,
		},
	],
};

export const matchSlice = createSlice({
	name: 'match',
	initialState,
	reducers: {
		startMatch: state => {
			state.pause = false;
		},
		addCardToPlayer: (state, action: PayloadAction<number>) => {
			state.bank += cardPrice;
			const item = state.playerList.find(({ id }) => id === action.payload);
			if (item) {
				item.cardsCount += 1;
				item.score -= cardPrice;
			};
		},
		removeCardToPlayer: (state, action: PayloadAction<number>) => {
			const item = state.playerList.find(({ id }) => id === action.payload);
			if (item && item.cardsCount > 0) {
				state.bank -= cardPrice;
				item.cardsCount -= 1;
				item.score += cardPrice;
			};
		},
		switchPause: state => {
			state.pause = !state.pause;
		},
		setTimer: (state, action: PayloadAction<NodeJS.Timeout>) => {
			state.timer = action.payload;
		},
		stopTimer: state => {
			(typeof state.timer !== 'number') ? clearTimeout(state.timer) : null;
			state.duration.hrs = 0;
			state.duration.min = 0;
			state.duration.sec = 0;
		},
		tickTock: state => {
			let { min, sec } = state.duration;
			state.duration.sec += 1;
			
			if (sec >= 59) {
				state.duration.sec = 0;
				state.duration.min += 1;
				
				if (min >= 59) {
					state.duration.min = 0;
					state.duration.hrs += 1;
				}
			}
		},
	}
});

export const {
	addCardToPlayer,
	removeCardToPlayer,
	startMatch,
	switchPause,
	tickTock,
	setTimer,
	stopTimer,
} = matchSlice.actions;
export const selectMatchBank = (state: RootState) => state.match.bank;
export const selectMatchRound = (state: RootState) => state.match.round;
export const selectMatchStage = (state: RootState) => state.match.stage;
export const selectMatchPause = (state: RootState) => state.match.pause;
export const selectMatchHrs = (state: RootState) => state.match.duration.hrs;
export const selectMatchMin = (state: RootState) => state.match.duration.min;
export const selectMatchSec = (state: RootState) => state.match.duration.sec;
export const selectMatchDuration = (state: RootState) => {
	return getNormalizedDuration(state.match.duration);
};
export const selectPlayerList = (state: RootState) => state.match.playerList;

export const setBreak = () => (dispatch: AppDispatch, getState: any) => {
	dispatch(switchPause());
	const { pause, timer } = getState().match;
	if (pause) {
		clearTimeout(timer);
	} else {
		dispatch(setTimer(setTimeout(() => dispatch(tick()), 1000)));
	}
};

const tick = function step() {
	return (dispatch: AppDispatch) => {
		dispatch(tickTock());
		dispatch(setTimer(setTimeout(() => dispatch(step()), 1000)));
	}
};

export const initMatch = () => (dispatch: AppDispatch) => {
	dispatch(switchPause());
	dispatch(setTimer(setTimeout(() => dispatch(tick()), 1000)));
};

export default matchSlice.reducer;
