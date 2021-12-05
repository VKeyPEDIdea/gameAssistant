import Coin from '../Coin/Coin';
import PlayerItem from './PlayerItem/';
import classes from './PlayerList.module.scss';

const PlayerList = () => {
	// const playerList = list.map(item => {

	// });

	return (
		<div className={classes.box}>
			<div className={classes.bank}>
				<Coin />
				<div className={classes.count}>200</div>
			</div>
			<div className={classes['list-bg']}>
				<div className={classes.list}>
					<PlayerItem />
				</div>
			</div>
		</div>
	);
};

export default PlayerList;