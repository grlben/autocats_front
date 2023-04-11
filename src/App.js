import './App.css';

import { useState } from 'react';
// import { TransitionGroup } from 'react-transition-group';

import Login from './components/Login';
import ModeSelection from './components/ModeSelection';
import Loading from './components/Loading';
import Edition from './components/Edition';
import Success from './components/Success';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const getMonthStart = () => {
	const date = new Date();
	if (date.getDate() < 15) {
		date.setMonth(date.getMonth() - 1);
	}
	date.setDate(1);
	return date;
};

const toISO = (date) => date.toISOString().split('T')[0];

function App() {
	const [step, setStep] = useState('login');
	const [token, setToken] = useState({});

	const monthStart = getMonthStart();

	const currentScreen = () => {
		switch (step) {
			case 'login':
				return <Login setStep={setStep} setToken={setToken} />;
			case 'mode_selection':
				return <ModeSelection setStep={setStep} monthStart={monthStart} />;
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

	console.log('Current token:' + token.value);

	return (
		<Grid
			container
			pacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			style={{ minHeight: '100vh' }}
		>
			<Grid item xs={3}>
				{/* <TransitionGroup> */}
					{currentScreen(step, setStep, monthStart)}
				{/* </TransitionGroup> */}
			</Grid>
		</Grid>
	);
}

export default App;
