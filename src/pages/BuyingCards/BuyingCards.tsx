import React from "react";
import Header from "../../components/Header/";

const BuyingCards = () => {
	return (
		<>
			<Header isPlay={true}
				stage={5}
				roundCount={3}
				roundCurrent={2}
				duration='00:01:23'/>
		</>
	);
};

export default BuyingCards;
