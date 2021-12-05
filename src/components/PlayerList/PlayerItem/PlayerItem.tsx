import Counter from '../../Counter';
import classes from './PlayerItem.module.scss';

interface PlayerItemProps {
	score: number;
	name: string;
	playcardCount: number;
};

const PlayerItem = ({
	score = 200,
	name = 'Регина',
	playcardCount = 3,
}: PlayerItemProps) => {
	let playcardList = [];
	for (let i = 0; i < playcardCount; i++) {
		playcardList.push(<div key={i + name + ' playcard'}
			className={classes.playcard}></div>)
	}

	return (
		<div className={classes.player}>
			<p className={`${classes.score} ${(score < 0)
				? classes['score--negative']
				: classes['score--positive']}`}
			>
				+{score}
			</p>
			<div className={classes.wrapper}>
				<p className={classes.name}>{name}</p>
				<div className={classes['playcard-list']}>
					{playcardList}
				</div>
			</div>
			<Counter count={3}
				minusClick={() => console.log('minus')}
				plusClick={() => console.log('plus')}/>
		</div>
	);
};

export default PlayerItem;
