import { action, observable } from 'mobx';
import { observer } from 'mobx-react';

const Counter = observer(() => {
	const state = observable({
		count: 0,
	});
	const onAdd = action(() => state.count++);
	const onRemove = action(() => state.count--);
	return(
		<>
			<div>{state.count}</div>
			<button onClick={onRemove}>-</button>
			<button onClick={onAdd}>+</button>
		</>
	);
});

export default Counter;