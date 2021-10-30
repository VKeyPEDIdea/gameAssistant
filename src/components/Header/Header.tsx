import React from "react";
import BtnIcon from "../../components/BtnIcon/";
import classes from './Header.module.scss';

interface HeaderProps {
	stage: number;
	roundCurrent: number;
	roundCount: number;
	duration: string;
	isPlay: boolean;
	pauseClick: () => void;
	stopClick: () => void;
}

const Header = ({
	stage,
	roundCurrent,
	roundCount,
	duration,
	isPlay,
	pauseClick,
	stopClick,
}: HeaderProps) => {
	return (
		<div className={classes.header}>
			<div className={classes.match}>
				<p className={classes.stage}>{stage} партия</p>
				<p className={classes.round}>{roundCurrent}/{roundCount} раунд</p>
			</div>
			<p className={classes.duration}>{duration}</p>
			<div className={classes.controls}>
				<div className={classes.stop}>
					<BtnIcon iconName='stop'
						click={stopClick}/>
				</div>
				<div className={classes.pause}>
					<BtnIcon iconName={isPlay ? 'pause' : 'play'}
						click={pauseClick}/>
				</div>
			</div>
		</div>
	);
};

export default Header;
