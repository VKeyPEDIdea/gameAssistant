import React from 'react'; 
import classes from './BtnIcon.module.scss';

type IconName = 'stop' | 'pause' | 'play' | 'minus' | 'plus';
type ColorTheme = 'dark' | 'light';

interface BtnIconProps {
	iconName: IconName;
	theme: ColorTheme;
	click: () => void;
};

const BtnIcon = ({
	iconName,
	click,
	theme
}: BtnIconProps) => {
	let altTheme;
	switch (theme) {
		case 'dark':
			altTheme = 'light';
			break;
		case 'light':
			altTheme = 'dark';
			break;
	}

	return (
		<>
			<button type='button'
				className={`${classes.btnIcon} ${theme ? classes[theme] : ''}`}
				onClick={click}>
				<img src={`/assets/images/icon-${iconName}-${altTheme}.svg`} />
			</button>
		</>
	);
};

export default BtnIcon;
