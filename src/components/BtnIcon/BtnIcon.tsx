import React from "react";
import classes from './BtnIcon.module.scss';

interface BtnIconDefinition {
	data: {
		iconName: string;
	}
};

const BtnIcon = ({
	data: {
		iconName,
	}
}: BtnIconDefinition) => {
	return (
		<>
			<div className={classes.btnIcon}>
				<img src={`/assets/images/icon-${iconName}.svg`} />
			</div>
		</>
	);
};

export default BtnIcon;
