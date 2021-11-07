import React from "react";
import Header from "../../components/Header/";
import { selectMatchPause, switchPause } from "../../features/match/matchSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const BuyingCards = () => {
	const dispatch = useAppDispatch();
	const isPlay = useAppSelector(selectMatchPause);
	const onPauseClick = () => {
		dispatch(switchPause());
	};

	const onStopClick = () => {
		console.log('stop');
	};

	return (
		<>
			<Header isPlay={isPlay}
				pauseClick={onPauseClick}
				stopClick={onStopClick}
				stage={5}
				roundCount={3}
				roundCurrent={2}
				duration='00:01:23'/>
		</>
	);
};

export default BuyingCards;
