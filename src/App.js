import './App.css';

import { useState } from 'react';

import Login from './components/Login';
import ModeSelection from './components/ModeSelection';
import Loading from './components/Loading';
import Edition from './components/Edition';
import Success from './components/Success';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const currentScreen = (step, setStep, monthStart) => {
	switch (step) {
		case 'login':
			return <Login setStep={setStep} />;
		case 'mode_selection':
			return <ModeSelection setStep={setStep} monthStart={monthStart} />;
		case 'loading':
			return <Loading />;
		case 'edition':
			return <Edition setStep={setStep} monthStart={monthStart}/>;
		case 'success':
			return <Success />;
		default:
		// do nothing
	}
};

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
	  
	const monthStart = getMonthStart();

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
				<Box
					sx={{
						// width: 800,
						borderRadius: 6,
						backgroundColor: 'white',
						p: 6,
						m: 4,
					}}
				>
					{currentScreen(step, setStep, monthStart)}
				</Box>
			</Grid>
		</Grid>
	);
}

export default App;
