import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addCardToPlayer, removeCardToPlayer, selectMatchBank } from '../../features/match/matchSlice';
import { Player } from '../../models/Player';
import Coin from '../Coin/Coin';
import PlayerItem from './PlayerItem/';
import classes from './PlayerList.module.scss';

interface PlayerListProps {
	list: Player[];
}

const PlayerList = ({
	list,
}: PlayerListProps) => {
	const dispatch = useAppDispatch();
	const bank = useAppSelector(selectMatchBank);
	const minusClick = (id: number) => {
		dispatch(removeCardToPlayer(id));
	}
	const plusClick = (id: number) => {
		dispatch(addCardToPlayer(id));
	}
	const playerList = list.map(({ name, score, cardsCount, id }: Player) => {
		return ( 
			<div className={classes.item} key={name + score + cardsCount}>
				<PlayerItem name={name}
					onMinusClick={minusClick}
					onPlusClick={plusClick}
					id={id}
					score={score}
					playcardCount={cardsCount}/>
			</div>
		);
	});

	return (
		<div className={classes.box}>
			<div className={classes.bank}>
				<Coin />
				<div className={classes.count}>{bank}</div>
			</div>
			<div className={classes['list-bg']}>
				<div className={classes.list}>
					{playerList}
				</div>
			</div>
		</div>
	);
};

export default PlayerList;