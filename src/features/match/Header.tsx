import React from "react";
import BtnIcon from "../../components/BtnIcon/";

const Header = () => {
	return (
		<>
			<p>2/3 раунд</p>
			<p>5 партия</p>
			<p>00:01:23</p>
			<BtnIcon iconName='stop'/>
			<BtnIcon iconName='pause'/>
		</>
	);
};

export default Header;
