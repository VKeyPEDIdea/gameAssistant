import BtnIcon from '../BtnIcon';
import classes from './Counter.module.scss';

interface CounterProps {
	minusClick: () => void;
	plusClick: () => void;
	count: number;
}

const Counter = ({
	minusClick,
	plusClick,
	count = 0,
}: CounterProps) => {
	const minusClickHandler = () => {
		minusClick();
	};

	const plusClickHandler = () => {
		plusClick();
	};

	return (
		<div className={classes.counter}>
			<BtnIcon iconName='minus'
				theme='light'
				click={minusClickHandler}/>
			<p className={classes.count}>{count}</p>
			<BtnIcon iconName='plus'
				theme='light'
				click={plusClickHandler}/>
		</div>
	);
};

export default Counter;
