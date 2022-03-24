import React    from "react";
import HomePage from "./HomePage";

const HomePageContainer = () => {

	const [activeTab, setActiveTab] = React.useState("1");

	return <HomePage
		activeTab={activeTab}
		setActiveTab={setActiveTab}
	/>;
};

export default HomePageContainer;
