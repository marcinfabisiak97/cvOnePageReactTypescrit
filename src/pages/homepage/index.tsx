import React from "react";
import Menupart from "../../component/menupart";
import Ideaspart from "../../component/ideaspart";
import Phonepart from "../../component/phonepart";
import Controlpart from "../../component/controlpart";
import Projectspart from "../../component/myprojectspart";
import { useRef } from "react";

const Homepage = () => {
	const myPortfolio = useRef<HTMLDivElement | string | null | object>(null);
	const myService = useRef<HTMLDivElement | string | null | object>(null);
	const myPhone = useRef<HTMLDivElement | string | null | object>(null);
	return (
		<div>
			<Menupart {...{ myPortfolio, myService, myPhone }} />
			<Ideaspart {...{ myPortfolio, myService, myPhone }} />
			<Phonepart {...{ myPortfolio, myService, myPhone }} />
			<Controlpart />
			<Projectspart />
		</div>
	);
};
export default Homepage;
