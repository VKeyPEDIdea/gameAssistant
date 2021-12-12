import Counter from '../../Counter';
import classes from './PlayerItem.module.scss';

interface PlayerItemProps {
	id: number;
	score: number;
	name: string;
	playcardCount: number;
	onMinusClick: (id: number) => void;
	onPlusClick: (id: number) => void;
};

const PlayerItem = ({
	score,
	name,
	playcardCount,
	id,
	onMinusClick,
	onPlusClick,
}: PlayerItemProps) => {
	let playcardList = [];
	for (let i = 0; i < playcardCount; i++) {
		playcardList.push(<div key={i + name + ' playcard'}
			className={classes.playcard}></div>)
	}

	function decrease() {
		onMinusClick(id)
	}

	function increase() {
		onPlusClick(id);
	}

	return (
		<div className={classes.player}>
			<p className={`${classes.score} ${(score < 0)
				? classes['score--negative']
				: classes['score--positive']}`}
			>
				{score}
			</p>
			<div className={classes.wrapper}>
				<p className={classes.name}>{name}</p>
				<div className={classes['playcard-list']}>
					{playcardList}
				</div>
			</div>
			<Counter count={playcardCount}
				minusClick={decrease}
				plusClick={increase}/>
		</div>
	);
};

export default PlayerItem;
