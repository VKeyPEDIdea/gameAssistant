import React from 'react'; 
import classes from './BtnIcon.module.scss';

type IconName = 'stop' | 'pause' | 'play' | 'minus' | 'plus';

interface BtnIconProps {
	iconName: IconName;
	click: () => void;
};

const BtnIcon = ({
	iconName,
	click
}: BtnIconProps) => {
	return (
		<>
			<button type='button' className={classes.btnIcon} onClick={click}>
				<img src={`/assets/images/icon-${iconName}.svg`} />
			</button>
		</>
	);
};

export default BtnIcon;
