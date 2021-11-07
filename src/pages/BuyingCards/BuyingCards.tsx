import React, { useEffect } from "react";
import Header from "../../components/Header/";
import {
	selectMatchDuration,
	selectMatchPause,
	initMatch,
	setBreak,
} from "../../features/match/matchSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const BuyingCards = () => {
	const dispatch = useAppDispatch();
	const isPause = useAppSelector(selectMatchPause);
	const duration = useAppSelector(selectMatchDuration);
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
				stage={5}
				roundCount={3}
				roundCurrent={2}
				duration={duration}/>
		</>
	);
};

export default BuyingCards;
