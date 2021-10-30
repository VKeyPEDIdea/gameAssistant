import React from "react";
import classes from './BtnIcon.module.scss';

type IconName = 'stop' | 'pause' | 'play' | 'minus' | 'plus';

interface BtnIconProps {
	iconName: IconName;
};

const BtnIcon = ({
	iconName,
}: BtnIconProps) => {
	return (
		<>
			<button type='button' className={classes.btnIcon} >
				<svg>
					<use xlinkHref="#icon-logo-grey"></use>
				</svg>
				{/* <img src={`/assets/images/icon-${iconName}.svg`} /> */}
			</button>
		</>
	);
};

export default BtnIcon;
