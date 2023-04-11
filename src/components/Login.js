import { useState } from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import Logo from '../img/Logo.png';

import Frame from './Frame';

import loginService from '../services/login';

const Login = ({ step, setStep, setToken }) => {
	// const [show, setShow] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const token = loginService.getToken(data.get('user'), data.get('password'));
		console.log(
			'returned token value: ' +
				token.value +
				' and expiration date: ' +
				token.expiration
		);
		setToken(token);
		setStep('mode_selection');
		// setShow(false);
	};

	return (
		<Frame>
			<Stack
				spacing={4}
				alignItems="center"
				component="form"
				onSubmit={handleSubmit}
				noValidate
				width={300}
			>
				<Stack spacing={2}>
					<Stack m={0} spacing={2} direction="row" alignItems="center">
						<img src={Logo} />
						<Typography variant="h4" color={'#1976d2'}>
							<b>AutoCATS</b>
						</Typography>
					</Stack>
					<Typography variant="body" align="center">
						Ressourcenallokation in Sekunden.
					</Typography>
				</Stack>
				<Stack spacing={2}>
					<TextField name="user" id="user" label="Nutzer" autoComplete="off" />
					<TextField
						name="password"
						id="password"
						label="Passwort"
						type="password"
						autoComplete="off"
					/>
				</Stack>
				<Button
					variant="contained"
					type="submit"
					disableElevation
					style={{ textTransform: 'none' }}
					size="large"
				>
					Einloggen
				</Button>
			</Stack>
		</Frame>
	);
};

export default Login;
