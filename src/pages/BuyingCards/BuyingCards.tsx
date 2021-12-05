import React, { useEffect } from "react";
import Header from "../../components/Header/";
import {
	selectMatchDuration,
	selectMatchPause,
	initMatch,
	setBreak,
	selectMatchStage,
	selectMatchRound,
} from "../../features/match/matchSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PlayerList from "../../components/PlayerList/";
import classes from './BuyingCards.module.scss';

const BuyingCards = () => {
	const dispatch = useAppDispatch();
	const isPause = useAppSelector(selectMatchPause);
	const duration = useAppSelector(selectMatchDuration);
	const stage = useAppSelector(selectMatchStage);
	const round = useAppSelector(selectMatchRound);
	const onPauseClick = () => {
		dispatch(setBreak());
	};

	const onStopClick = () => {
		console.log('stop');
	};

	useEffect(() => {
		dispatch(initMatch());
	}, [])

	return (
		<>
			<Header isPlay={!isPause}
				pauseClick={onPauseClick}
				stopClick={onStopClick}
				stage={stage}
				roundCount={3}
				roundCurrent={round}
				duration={duration}/>
			<h1 className={classes.header}>Покупка карточек</h1>
			<PlayerList />
		</>
	);
};

export default BuyingCards;
