import './App.css';

import { useState } from 'react';

// import Login from './components/Login';
import ModeSelection from './components/ModeSelection';
import Edition from './components/Edition';
import Success from './components/Success';

const getMonthStart = () => {
	const date = new Date();
	if (date.getDate() < 15) {
		date.setMonth(date.getMonth() - 1);
	}
	date.setDate(1);
	return date;
};

function App() {
	// Browser extesion: login step skipped, the process starts directly with mode selection
	const [step, setStep] = useState('mode_selection');
	const token = 'TOKEN';

	const monthStart = getMonthStart();

	const currentScreen = () => {
		switch (step) {
			// case 'login':
			// 	return <Login setStep={setStep} setToken={setToken} />;
			case 'mode_selection':
				return <ModeSelection setStep={setStep} monthStart={monthStart} token={token}/>;
			case 'edition':
				return (
					<Edition setStep={setStep} monthStart={monthStart} token={token} />
				);
			case 'success':
				return <Success />;
			default:
			// do nothing
		}
	};

	return currentScreen(step, setStep, monthStart);
}

export default App;
