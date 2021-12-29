import React,{useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from'react-router';
import Homepage from './pages/homepage';
import { SlideContext} from "./context/Contexts";
import './App.scss';
function App() {
	const [ expander, setExpander] = useState('');
    const [slideProject, setSlideproject] = useState(1);
    return (
        <div>
     		
     		<SlideContext.Provider value={{slideProject, setSlideproject, expander, setExpander}}>
   				<Homepage/>
   			</SlideContext.Provider>
    		
     	</div>
    );
}

export default App;