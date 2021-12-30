import Menupart from '../../component/menupart';
import Ideaspart from '../../component/ideaspart';
import Phonepart from '../../component/phonepart'
import Controlpart from '../../component/controlpart'

import { useRef } from 'react';
const Homepage = () => {
	 const myPortfolio = useRef('');
	 const myService = useRef('');
	 const myPhone = useRef('');
	return(
		<div>
		<Menupart {...{myPortfolio,myService, myPhone}}/>
		<Ideaspart {...{ myPortfolio, myService, myPhone }}/>
		<Phonepart {...{myPortfolio,myService, myPhone}} />
		<Controlpart/>
		</div>
	)
}
export default Homepage;